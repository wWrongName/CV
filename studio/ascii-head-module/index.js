import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createAsciiPass} from './runtime/ascii-pass.js';
import {createExpressionController} from './runtime/expressions.js';
import {createAdaptiveQuality} from './runtime/adaptive-quality.js';
import {HEAD_WEIGHT_GLSL,HEAD_PIVOT} from './runtime/head-pose.js';

const VIEWS = {front: [0, 0], quarter: [-.95, Math.PI / 36], profile: [-Math.PI / 2, 0], back: [Math.PI, 0]};
const STILL = {changed: false, active: false};
const finite = (value, fallback) => Number.isFinite(value) ? value : fallback;
export const HEAD_ANCHORS = Object.freeze({brain: Object.freeze({center: Object.freeze([0, 1.74, -.08]), radii: Object.freeze([.78, .4, .62])})});

/** Mount the accepted head. No document UI, URL state, CSS theme, or auto startup. */
export function createAsciiHead(host, options = {}) {
  if (!host?.append || !options.modelUrl) throw new TypeError('Provide a host element and modelUrl.');
  const modelUrl = new URL(options.modelUrl, host.ownerDocument.baseURI);
  const expressionsUrl = new URL(options.expressionsUrl || './expressions.json', modelUrl);
  const coarse = options.coarsePointer ?? matchMedia('(pointer:coarse)').matches;
  const reduced = options.reducedMotion ?? matchMedia('(prefers-reduced-motion:reduce)').matches;
  const quality = createAdaptiveQuality({coarse, fixed: options.quality});
  let q = quality.current(), disposed = false, loaded = false, visible = true;
  let expressionController = null, expressionName = 'neutral', mesh = null, scheduled = 0, rendering = false;
  let width = 1, height = 1, bufferDpr = 0, sourceDirty = true, outputDirty = true;
  let nextTick = 0, lastRender = 0, lastCallback = 0, frames = 0, sourceFrames = 0, drag = null;
  let appliedBudget = q.glyphBudget, budgetTween = null, pendingQuality = null;
  let pendingCellSize = null, lastSizeApply = -Infinity, manualDetailUntil = 0;
  let autoRotate = !!options.autoRotate && !reduced, phase = 0, dispersal = 0;
  let surface = options.surface === 'clay' ? 'clay' : 'ascii';
  const initial = typeof options.view === 'string' ? VIEWS[options.view] : null;
  let yaw = initial?.[0] ?? finite(options.view?.yaw, -.95);
  let pitch = initial?.[1] ?? finite(options.view?.pitch, Math.PI / 36);
  let goalYaw = yaw, goalPitch = pitch, restYaw = yaw, restPitch = pitch;
  let scale = finite(options.view?.scale, .84), offsetX = finite(options.view?.offsetX, 0), offsetY = finite(options.view?.offsetY, .22);
  const abort = new AbortController(), eventOptions = {signal: abort.signal};
  const renderer = new THREE.WebGLRenderer({alpha: true, antialias: false, powerPreference: coarse ? 'low-power' : 'default'});
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0, 0); renderer.autoClear = false;
  const canvas = renderer.domElement;
  canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:pan-y';
  canvas.setAttribute('aria-hidden', 'true'); host.append(canvas);
  const scene = new THREE.Scene(), camera = new THREE.OrthographicCamera(-5, 5, 2.8, -2.8, .1, 50);
  camera.position.set(0, 0, 15); camera.lookAt(0, 0, 0);
  const pivot = new THREE.Group(); scene.add(pivot);
  const material = new THREE.ShaderMaterial({toneMapped: false, uniforms:{encodeCrown:{value:1},gaze:{value:new THREE.Vector3()}}, vertexShader: `
    #include <common>
    #include <morphtarget_pars_vertex>
    varying vec3 vNormal;
    varying float vHeight;
    uniform vec3 gaze;
    ${HEAD_WEIGHT_GLSL}
    void main() {
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      float neckWeight=headPoseWeight(position);
      float gy=gaze.x*neckWeight,gp=gaze.y*neckWeight;
      mat3 turn=mat3(cos(gy),0.,-sin(gy),0.,1.,0.,sin(gy),0.,cos(gy));
      mat3 nod=mat3(1.,0.,0.,0.,cos(gp),sin(gp),0.,-sin(gp),cos(gp));
      float gr=gaze.z*neckWeight;
      mat3 tilt=mat3(cos(gr),sin(gr),0.,-sin(gr),cos(gr),0.,0.,0.,1.);
      vec3 neckPivot=vec3(${HEAD_PIVOT.map(n=>n.toFixed(4)).join(',')});
      transformed=tilt*nod*turn*(transformed-neckPivot)+neckPivot;
      objectNormal=tilt*nod*turn*objectNormal;
      vNormal=normalize(normalMatrix*objectNormal);
      vHeight=transformed.y;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(transformed,1.);
    }`, fragmentShader: `
    precision highp float; varying vec3 vNormal; varying float vHeight; uniform float encodeCrown;
    void main() {
      vec3 n=normalize(vNormal);
      float key=max(dot(n,normalize(vec3(-.55,.8,1.))),0.);
      float fill=max(dot(n,normalize(vec3(.7,.1,.9))),0.);
      float shade=.14+key*.70+fill*.13;
      float mask=.5+.5*smoothstep(1.2,1.55,vHeight);
      gl_FragColor=vec4(vec3(.66,.70,.71)*shade,mix(1.,mask,encodeCrown));
      #include <colorspace_fragment>
    }`});
  const target = new THREE.WebGLRenderTarget(1, 1, {depthBuffer: true});
  const ascii = createAsciiPass(target.texture, {reduced, strongerGlyphs: coarse});
  ascii.setQuality(q); ascii.setSize(Math.max(2, finite(options.cellSize, 5.4)));
  setInk(options.ink || '#edeee5');

  function emit(extra = {}) {
    if (!disposed) options.onState?.({loaded, expression: expressionName, quality: q.name, ...extra});
  }
  function setInk(value) {
    const color = new THREE.Color(value).convertLinearToSRGB();
    ascii.setInk(new THREE.Vector3(color.r, color.g, color.b));
  }
  function invalidate(needsSource = true) {
    if (disposed) return;
    sourceDirty ||= needsSource; outputDirty = true;
    if (document.hidden || !visible || scheduled || rendering) return;
    const now = performance.now();
    if (!lastRender || now - lastRender > 300) {
      nextTick = lastRender = lastCallback = 0;
      quality.wake(now);
    }
    scheduled = requestAnimationFrame(frame);
  }
  function resizeSource() {
    const size = ascii.getSourceSize(q.sampleScale);
    if (target.width !== size.width || target.height !== size.height) {target.setSize(size.width, size.height); sourceDirty = true;}
  }
  function resize() {
    if (disposed) return;
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    const dpr = Math.min(devicePixelRatio || 1, q.dpr);
    if (w !== width || h !== height || dpr !== bufferDpr) {
      width = w; height = h; bufferDpr = dpr;
      renderer.setPixelRatio(dpr); renderer.setSize(width, height, false);
    }
    ascii.resize(width, height, dpr); resizeSource();
    const halfWidth = 2.8 * width / height;
    camera.left = -halfWidth; camera.right = halfWidth; camera.updateProjectionMatrix();
    pivot.position.set(offsetX, offsetY, 0); pivot.scale.setScalar(scale);
    invalidate(true);
  }
  function updateBudget(now) {
    if (!budgetTween) return false;
    const t = Math.min(1, (now - budgetTween.start) / 600), step = Math.min(6, Math.floor(t * 6));
    if (step !== budgetTween.step) {
      budgetTween.step = step;
      const eased = THREE.MathUtils.smoothstep(step / 6, 0, 1);
      appliedBudget = Math.round(THREE.MathUtils.lerp(budgetTween.from, budgetTween.to, eased));
      ascii.setQuality({glyphBudget: appliedBudget}); resizeSource(); sourceDirty = true;
    }
    if (t >= 1) budgetTween = null;
    return !!budgetTween;
  }
  function stats() {
    return {loaded, disposed, surface, width, height, dpr: bufferDpr, ...ascii.getStats(),
      ...quality.getReport(), frames, sourceFrames, animating: !!scheduled || rendering,
      view: {yaw, pitch, scale, offsetX, offsetY}, dispersal};
  }
  function frame(now) {
    scheduled = 0; if (disposed || document.hidden || !visible) return;
    const interval = 1000 / q.fps;
    const callbackElapsed = lastCallback ? now - lastCallback : interval;
    lastCallback = now;
    if ((nextTick && now + .4 < nextTick) || (lastRender && now - lastRender < interval * .65 - .4)) {
      scheduled = requestAnimationFrame(frame); return;
    }
    const elapsed = lastRender ? now - lastRender : interval, dt = Math.min(.07, elapsed / 1000);
    lastRender = now; nextTick = nextTick ? nextTick + interval : now + interval;
    if (nextTick < now - .4) nextTick += Math.ceil((now - nextTick) / interval) * interval;
    rendering = true; outputDirty = false; const started = performance.now();
    if (pendingQuality) {
      q = pendingQuality; pendingQuality = null;
      budgetTween = {from: appliedBudget, to: q.glyphBudget, start: now, step: -1};
      ascii.setQuality({glyphBudget: appliedBudget, brushLimit: q.brushLimit}); resize();
    }
    if (pendingCellSize !== null && now - lastSizeApply >= 32) {
      ascii.setSize(pendingCellSize); pendingCellSize = null; lastSizeApply = now;
      resizeSource(); sourceDirty = true;
    }
    const changingBudget = updateBudget(now);
    if (autoRotate && !drag) {phase += dt; goalYaw = restYaw - phase * .22; goalPitch = restPitch + Math.sin(phase * .4) * .025;}
    const newYaw = Math.abs(yaw - goalYaw) < .0001 ? goalYaw : THREE.MathUtils.damp(yaw, goalYaw, 9, dt);
    const newPitch = Math.abs(pitch - goalPitch) < .0001 ? goalPitch : THREE.MathUtils.damp(pitch, goalPitch, 9, dt);
    sourceDirty ||= newYaw !== yaw || newPitch !== pitch;
    yaw = newYaw; pitch = newPitch; pivot.rotation.set(pitch, yaw, 0);
    const expression = expressionController?.update(dt, now / 1000) || STILL;
    sourceDirty ||= expression.changed;
    if (surface === 'ascii') {
      material.uniforms.encodeCrown.value=1;
      if (sourceDirty) {renderer.setRenderTarget(target); renderer.clear(); renderer.render(scene, camera); sourceFrames++; sourceDirty = false;}
      ascii.update(now / 1000); renderer.setRenderTarget(null); renderer.clear(); renderer.render(ascii.scene, ascii.camera);
    } else {material.uniforms.encodeCrown.value=0; renderer.setRenderTarget(null); renderer.clear(); renderer.render(scene, camera); sourceFrames++; sourceDirty = false;}
    frames++;
    const next = now >= manualDetailUntil ? quality.observe(now, elapsed, performance.now() - started, callbackElapsed) : null;
    if (next) {pendingQuality = next; outputDirty = true;}
    rendering = false;
    const moving = autoRotate || drag || yaw !== goalYaw || pitch !== goalPitch || expression.active || changingBudget || pendingQuality || pendingCellSize !== null;
    if (moving || (surface === 'ascii' && ascii.isAnimating(now / 1000)) || sourceDirty || outputDirty) scheduled = requestAnimationFrame(frame);
    else emit({idle: true, stats: stats()});
  }

  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host);
  const intersectionObserver = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) invalidate(true); else if (scheduled) {cancelAnimationFrame(scheduled); scheduled = 0;}
  }) : null;
  intersectionObserver?.observe(host);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {if (scheduled) cancelAnimationFrame(scheduled); scheduled = 0; ascii.leave();}
    else invalidate(true);
  }, eventOptions);
  canvas.addEventListener('pointermove', event => {
    const rect = canvas.getBoundingClientRect();
    if (drag) {goalYaw = drag.yaw + (event.clientX - drag.x) * .008; goalPitch = THREE.MathUtils.clamp(drag.pitch + (event.clientY - drag.y) * .004, -1.35, 1.35); invalidate(true);}
    if (surface === 'ascii' && ascii.move((event.clientX - rect.left) / rect.width * width, (1 - (event.clientY - rect.top) / rect.height) * height, performance.now() / 1000)) invalidate(false);
  }, eventOptions);
  canvas.addEventListener('pointerleave', () => ascii.leave(), eventOptions);
  canvas.addEventListener('pointerdown', event => {
    if (options.pointerRotation === false || coarse || (event.pointerType === 'mouse' && event.button !== 0)) return;
    drag = {x: event.clientX, y: event.clientY, yaw: goalYaw, pitch: goalPitch};
    autoRotate = false; canvas.setPointerCapture(event.pointerId);
  }, eventOptions);
  const finish = () => {drag = null; invalidate(false);};
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.addEventListener(name, finish, eventOptions);
  resize(); emit({loading: true});

  function disposeSource(gltf) {
    gltf.scene.traverse(object => {
      if (!object.isMesh) return;
      object.geometry.dispose();
      for (const item of Array.isArray(object.material) ? object.material : [object.material]) item.dispose();
    });
  }
  const ready = (async () => {
    let gltf;
    try {
      const response = await fetch(modelUrl, {signal: abort.signal});
      if (!response.ok) throw new Error(`Could not load head (${response.status}).`);
      gltf = await new GLTFLoader().parseAsync(await response.arrayBuffer(), new URL('.', modelUrl).href);
      if (disposed) throw new DOMException('Head disposed.', 'AbortError');
      gltf.scene.updateMatrixWorld(true);
      const meshes = []; gltf.scene.traverse(object => {if (object.isMesh) meshes.push(object);});
      if (meshes.length !== 1) throw new Error('This module requires the accepted single-mesh head asset.');
      const source = meshes[0], geometry = source.geometry.clone().applyMatrix4(source.matrixWorld);
      const box = new THREE.Box3().setFromObject(gltf.scene), center = box.getCenter(new THREE.Vector3()), metadata = gltf.scene.userData;
      const alignmentHeight = finite(metadata.alignmentHeight, box.max.y - box.min.y);
      if (!(alignmentHeight > 0)) {geometry.dispose(); throw new Error('Invalid head bounds.');}
      const positionScale = 5.55 / alignmentHeight;
      if (Array.isArray(metadata.alignmentCenter) && metadata.alignmentCenter.length === 3 && metadata.alignmentCenter.every(Number.isFinite)) center.fromArray(metadata.alignmentCenter);
      geometry.translate(-center.x, -finite(metadata.alignmentTop, box.max.y), -center.z);
      geometry.scale(positionScale, positionScale, positionScale); geometry.translate(0, 2.6, 0);
      mesh = new THREE.Mesh(geometry, material); mesh.frustumCulled = false; pivot.add(mesh);
      expressionController = createExpressionController(mesh, positionScale, state => {expressionName = state.name; emit({loading: state.loading, expression: state.name, error: state.error}); invalidate(true);}, {manifestUrl: expressionsUrl, signal: abort.signal});
      loaded = true; emit({loading: false}); invalidate(true);
    } catch (error) {
      if (!disposed) {emit({loading: false, error}); options.onError?.(error);}
      throw error;
    } finally {if (gltf) disposeSource(gltf);}
  })();
  // Expose rejection through ready, while callers using onError need not attach
  // an extra handler solely to suppress a browser unhandled-rejection warning.
  ready.catch(() => {});

  const api = {
    ready,
    setView(view) {
      if (disposed) return;
      const preset = typeof view === 'string' ? VIEWS[view] : null;
      if (typeof view === 'string' && !preset) throw new RangeError('Unknown head view.');
      goalYaw = preset?.[0] ?? finite(view.yaw, goalYaw); goalPitch = preset?.[1] ?? finite(view.pitch, goalPitch);
      restYaw = goalYaw; restPitch = goalPitch; phase = 0;
      if (typeof view === 'object') {
        scale = Math.max(.01, finite(view.scale, scale)); offsetX = finite(view.offsetX, offsetX); offsetY = finite(view.offsetY, offsetY);
      }
      if (view.immediate || reduced) {yaw = goalYaw; pitch = goalPitch;pivot.rotation.set(pitch,yaw,0);}
      resize();
    },
    setAppearance(value) {
      if (disposed) return;
      if (value.ink) setInk(value.ink);
      if (Number.isFinite(value.cellSize)) {pendingCellSize = Math.max(2, Math.min(128, value.cellSize)); manualDetailUntil = performance.now() + 1200;}
      if (value.surface) {if (!['ascii', 'clay'].includes(value.surface)) throw new RangeError('Unknown surface.'); surface = value.surface; ascii.leave(); sourceDirty = true;}
      invalidate(false);
    },
    setScatter(value,settings) {if (!disposed && Number.isFinite(value)) {dispersal = THREE.MathUtils.clamp(value, 0, 1); ascii.setScatter(dispersal,settings); invalidate(false);}},
    setGlyphGlitch({x=0,y=0,strength=0,seed=0}={}) {
      if (!disposed && ascii.setGlyphGlitch(finite(x,0), finite(y,0), THREE.MathUtils.clamp(finite(strength,0),0,1), finite(seed,0))) invalidate(false);
    },
    setGaze({yaw:lookYaw=0,pitch:lookPitch=0,roll=0}={}) {if(disposed)return;material.uniforms.gaze.value.set(THREE.MathUtils.clamp(finite(lookYaw,0),-.4,.4),THREE.MathUtils.clamp(finite(lookPitch,0),-.16,.16),THREE.MathUtils.clamp(finite(roll,0),-.16,.16));invalidate(true);},
    projectPoints(points) {
      pivot.updateMatrixWorld(true);camera.updateMatrixWorld(true);
      return points.map(point=>{
        const value=new THREE.Vector3().fromArray(point).applyMatrix4(pivot.matrixWorld),depth=value.z;
        value.project(camera);
        return {x:(value.x*.5+.5)*width,y:(.5-value.y*.5)*height,depth,visible:value.z>=-1&&value.z<=1};
      });
    },
    setAutoRotate(value) {if (!disposed) {autoRotate = !!value && !reduced; invalidate(true);}},
    pause() {api.setAutoRotate(false);}, resume() {api.setAutoRotate(true);},
    async setExpression(name) {await ready; if (disposed) throw new DOMException('Head disposed.', 'AbortError'); await expressionController.choose(name); invalidate(true);},
    async blink() {await ready; if (disposed) throw new DOMException('Head disposed.', 'AbortError'); await expressionController.blink(); invalidate(true);},
    getStats: stats,
    dispose() {
      if (disposed) return;
      disposed = true; abort.abort(); if (scheduled) cancelAnimationFrame(scheduled); scheduled = 0;
      resizeObserver.disconnect(); intersectionObserver?.disconnect(); expressionController?.dispose();
      mesh?.geometry.dispose(); material.dispose(); ascii.dispose(); target.dispose();
      renderer.dispose(); canvas.remove();
    },
  };
  return api;
}
