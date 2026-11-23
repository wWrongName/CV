import * as THREE from 'three';
import {createScatterHistory, scatterEnvelope, SCATTER_DURATION} from './scatter-history.js';

const BRUSH_COUNT = 16;
const CHARACTERS = ' .,:;i!+*xso#%@';

// Screen-space ASCII conversion of an ordinary, fully shaded 3D render.
// Each cell samples the original image once. Effects adjust its glyph and placement.
export function createAsciiPass(image, {reduced = false, strongerGlyphs = false} = {}) {
  const atlas = document.createElement('canvas');
  atlas.width = CHARACTERS.length * 40; atlas.height = 40;
  const ctx = atlas.getContext('2d');
  if (!ctx) throw new Error('ASCII rendering requires a 2D canvas context.');
  ctx.font = `${strongerGlyphs ? 700 : 600} 34px "Courier New", monospace`;
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (let i = 0; i < CHARACTERS.length; i++) ctx.fillText(CHARACTERS[i], i * 40 + 20, 20);
  const texture = new THREE.CanvasTexture(atlas);
  texture.minFilter = THREE.LinearFilter; texture.magFilter = THREE.LinearFilter; texture.generateMipmaps = false;
  const brushes = Array.from({length: BRUSH_COUNT}, () => new THREE.Vector4());
  const endpoints = Array.from({length: BRUSH_COUNT}, () => new THREE.Vector2());
  const history = createScatterHistory(BRUSH_COUNT);
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.ShaderMaterial({
    transparent: true, depthTest: false, depthWrite: false, toneMapped: false,
    uniforms: {
      image: {value: image}, atlas: {value: texture}, glyphCount: {value: CHARACTERS.length},
      resolution: {value: new THREE.Vector2(1, 1)}, ink: {value: new THREE.Vector3(.93, .94, .90)},
      inkGain: {value: strongerGlyphs ? 1.38 : 1}, cellHeight: {value: 12}, pixelRatio: {value: 1}, activeBrushCount: {value: 0},
      brushes: {value: brushes}, endpoints: {value: endpoints}, radius: {value: 80}, amplitude: {value: reduced ? 35 : 100},
      dispersal: {value: 0},
      crownOnly: {value: 0},
      revealInPlace: {value: 0},
      glyphGlitch: {value: new THREE.Vector4()},
    },
    vertexShader: `
      precision highp float;
      uniform sampler2D image; uniform vec2 resolution;
      uniform float cellHeight; uniform float pixelRatio; uniform float glyphCount; uniform int activeBrushCount;
      uniform vec4 brushes[${BRUSH_COUNT}]; uniform vec2 endpoints[${BRUSH_COUNT}];
      uniform float radius; uniform float amplitude; uniform float dispersal; uniform float crownOnly;
      uniform float revealInPlace;
      uniform vec4 glyphGlitch;
      attribute vec2 sampleUV; attribute vec2 randomDirection;
      varying float glyph; varying float coverage;
      void main() {
        vec4 pixel = texture2D(image, sampleUV);
        if(pixel.a<.1) {
          gl_Position=vec4(2.,2.,0.,1.); gl_PointSize=0.; return;
        }
        float luminance = pow(clamp(dot(pixel.rgb,vec3(.299,.587,.114)),0.,1.),.55);
        float shade = clamp((luminance-.10)*1.25,0.,.999);
        glyph = floor(shade*glyphCount);
        float region=mix(1.,clamp((pixel.a-.5)*2.,0.,1.),crownOnly);
        float localScatter=dispersal*region;
        bool revealing=revealInPlace>0. && localScatter>0.;
        vec2 rest=position.xy;
        vec2 screen=rest;
        if(revealing) {
          // Each cell gets a stable arrival time and briefly cycles glyphs in place.
          float order=fract(sin(dot(randomDirection,vec2(37.17,19.83)))*43758.54);
          float age=1.-localScatter-mix(.02,.87,order);
          coverage=smoothstep(0.,.10,age);
          if(age<.065) {
            float cycle=floor(max(age,0.)*42.);
            glyph=floor(fract(order*17.13+cycle*.38197)*glyphCount);
          }
        } else {
          coverage=1.-smoothstep(.1,1.,localScatter);
        }
        if(coverage<=0.) {
          gl_Position=vec4(2.,2.,0.,1.); gl_PointSize=0.; return;
        }
        if(glyphGlitch.z>0. && localScatter==0.) {
          vec2 delta=(sampleUV-glyphGlitch.xy)/vec2(.115,.064);
          float patchWeight=1.-smoothstep(.35,1.,length(delta));
          float noise=fract(randomDirection.x*5.27+randomDirection.y*11.09+glyphGlitch.w);
          if(noise<patchWeight*glyphGlitch.z) {
            glyph=floor(fract(noise*11.71+glyphGlitch.w)*glyphCount);
            coverage*=mix(.46,1.,fract(noise*31.83));
          }
        }
        if(activeBrushCount>0 && !revealing) {
          vec2 accumulated=vec2(0.); float weight=0.;
          float radiusSquared=radius*radius;
          for(int i=0;i<${BRUSH_COUNT};i++) {
            if(i>=activeBrushCount)break;
            // Distance to the swept segment, so fast moves make a continuous
            // stroke instead of leaving isolated circular brush stamps.
            vec2 segment=endpoints[i]-brushes[i].xy;
            float segmentSquared=max(dot(segment,segment),.0001);
            float along=clamp(dot(rest-brushes[i].xy,segment)/segmentSquared,0.,1.);
            vec2 delta=rest-(brushes[i].xy+segment*along);
            float distanceSquared=dot(delta,delta);
            if(distanceSquared>=radiusSquared)continue;
            float falloff=1.-distanceSquared/radiusSquared;
            float strength=falloff*falloff*brushes[i].z;
            vec2 direction=delta*inversesqrt(max(distanceSquared,4.));
            vec2 flow=segment*inversesqrt(segmentSquared);
            accumulated+=strength*(direction*.66+randomDirection*.58+flow*.18);
            weight+=strength;
          }
          float burst=weight/(.6+weight);
          screen+=accumulated/max(weight,.001)*burst*amplitude;
        }
        // Global reveal/dismiss is one uniform, with no per-glyph CPU work.
        // The zero state skips displacement and preserves the ordinary render.
        if(localScatter>0. && !revealing) {
          vec2 outward=rest-resolution*.5;
          vec2 direction=outward*inversesqrt(max(dot(outward,outward),1.));
          screen+=(direction*.8+randomDirection*.34)*max(resolution.x,resolution.y)*localScatter*localScatter;
        }
        gl_Position=vec4(screen/resolution*2.-1.,0.,1.);
        gl_PointSize=cellHeight*pixelRatio;
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform sampler2D atlas; uniform float glyphCount; uniform vec3 ink; uniform float inkGain;
      varying float glyph; varying float coverage;
      void main() {
        if(coverage<.1)discard;
        vec2 local=vec2(gl_PointCoord.x,1.-gl_PointCoord.y);
        vec2 uv=vec2((glyph+clamp(local.x,.025,.975))/glyphCount,clamp(local.y,.025,.975));
        float mask=texture2D(atlas,uv).a;
        if(mask<.025)discard;
        gl_FragColor=vec4(ink,min(1.,mask*inkGain)*coverage);
      }
    `,
  });
  const grid = new THREE.Points(geometry, material);
  grid.name = 'ScreenSpaceAsciiGrid'; grid.frustumCulled = false;
  const scene = new THREE.Scene(); scene.add(grid);
  const camera = new THREE.Camera();
  let width=1,height=1,dpr=1,cellHeight=12,effectiveCellHeight=12,previous=null;
  let gridCount=0,columns=1,rows=1,builtWidth=0,builtHeight=0;
  let glyphBudget=22000,brushLimit=BRUSH_COUNT;
  let disposed=false;

  function rebuild() {
    const dimensions = size => ({columns: Math.max(1,Math.ceil(width/(size*.62))), rows: Math.max(1,Math.ceil(height/size))});
    let desired=dimensions(cellHeight);
    if(desired.columns*desired.rows>glyphBudget) {
      let low=cellHeight,high=Math.max(cellHeight,Math.sqrt(width*height/(glyphBudget*.62))*1.1);
      while(true) {const d=dimensions(high);if(d.columns*d.rows<=glyphBudget)break;high*=1.25;}
      for(let i=0;i<30;i++) {
        const mid=(low+high)*.5,d=dimensions(mid);
        if(d.columns*d.rows>glyphBudget)low=mid;else high=mid;
      }
      desired=dimensions(high*(1+1e-10));
    }
    const nextColumns=desired.columns,nextRows=desired.rows;
    effectiveCellHeight=height/nextRows;
    material.uniforms.cellHeight.value=effectiveCellHeight;
    if(nextColumns===columns&&nextRows===rows&&builtWidth===width&&builtHeight===height)return false;
    columns=nextColumns;rows=nextRows;builtWidth=width;builtHeight=height;
    geometry.dispose();
    const count=columns*rows;
    gridCount=count;
    const positions=new Float32Array(count*3),uvs=new Float32Array(count*2),directions=new Float32Array(count*2);
    let seed=1947;
    for(let row=0,i=0;row<rows;row++)for(let column=0;column<columns;column++,i++) {
      const u=(column+.5)/columns,v=(row+.5)/rows;
      positions.set([u*width,v*height,0],i*3);uvs.set([u,v],i*2);
      seed=(Math.imul(seed,1664525)+1013904223)|0;
      const angle=(seed>>>0)/4294967296*62.83;
      directions.set([Math.cos(angle),Math.sin(angle)],i*2);
    }
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
    geometry.setAttribute('sampleUV',new THREE.BufferAttribute(uvs,2));
    geometry.setAttribute('randomDirection',new THREE.BufferAttribute(directions,2));
    geometry.setDrawRange(0,count);
    return true;
  }

  return {
    scene,camera,
    getStats(){return {glyphs:gridCount,cellHeight,effectiveCellHeight,columns,rows};},
    getSourceSize(sampleScale=2){const scale=Number.isFinite(sampleScale)&&sampleScale>0?sampleScale:2;return {width:Math.max(1,Math.ceil(columns*scale)),height:Math.max(1,Math.ceil(rows*scale))};},
    setQuality({glyphBudget:budget,brushLimit:limit}={}) {
      if(disposed)return false;
      let changed=false;
      if(Number.isFinite(budget)) {const next=Math.max(64,Math.floor(budget));changed=changed||next!==glyphBudget;glyphBudget=next;}
      if(Number.isFinite(limit)) {const next=THREE.MathUtils.clamp(Math.floor(limit),0,BRUSH_COUNT);changed=changed||next!==brushLimit;brushLimit=next;history.setLimit(next);}
      if(changed)rebuild();
      return changed;
    },
    resize(w,h,ratio) {
      if(disposed)return false;
      const nextWidth=Math.max(1,Math.round(w)),nextHeight=Math.max(1,Math.round(h));
      const nextDpr=Number.isFinite(ratio)&&ratio>0?ratio:1;
      if(nextWidth===width&&nextHeight===height&&nextDpr===dpr&&gridCount)return false;
      const resized=nextWidth!==width||nextHeight!==height;
      width=nextWidth;height=nextHeight;dpr=nextDpr;
      material.uniforms.resolution.value.set(width,height);
      material.uniforms.pixelRatio.value=dpr;
      const radius=THREE.MathUtils.clamp(height*.13,65,110);
      material.uniforms.radius.value=radius;material.uniforms.amplitude.value=radius*(reduced?.52:1.55);
      if(resized||!gridCount)rebuild();
      return true;
    },
    update(time) {
      if(disposed)return false;
      let active=0;
      // Existing strokes finish even if adaptive quality lowers the new-stroke limit.
      for(const brush of history.items) {
        const force=scatterEnvelope(time-brush.time)*brush.strength;
        if(force<=0)continue;
        brushes[active].set(brush.fromX,brush.fromY,force,0);
        endpoints[active].set(brush.x,brush.y);active++;
      }
      material.uniforms.activeBrushCount.value=active;
      return history.hasLive(time);
    },
    // The last packed frame stays dirty until update() clears the uniforms,
    // ensuring one final, exact return-to-grid render before RAF may stop.
    isAnimating(time) {return !disposed&&(history.hasLive(time)||material.uniforms.activeBrushCount.value>0);},
    setInk(value) {if(!disposed)material.uniforms.ink.value.copy(value);},
    setGlyphGlitch(x,y,strength,seed) {
      if(disposed) return false;
      const value=material.uniforms.glyphGlitch.value;
      if(value.z===0&&strength===0) return false;
      if(value.x===x&&value.y===y&&value.z===strength&&value.w===seed) return false;
      value.set(x,y,strength,seed);
      return true;
    },
    setScatter(value,{region='all',mode='scatter'}={}) {
      if(disposed||!Number.isFinite(value))return false;
      const next=THREE.MathUtils.clamp(value,0,1);
      const crown=region==='crown'?1:0;
      const reveal=mode==='appear'?1:0;
      const uniforms=material.uniforms;
      if(next===uniforms.dispersal.value&&crown===uniforms.crownOnly.value&&reveal===uniforms.revealInPlace.value)return false;
      uniforms.dispersal.value=next;
      uniforms.crownOnly.value=crown;
      uniforms.revealInPlace.value=reveal;
      return true;
    },
    setSize(value) {if(disposed||!Number.isFinite(value)||value<=0||value===cellHeight)return false;cellHeight=value;return rebuild();},
    move(x,y,time) {
      if(disposed||brushLimit===0||!Number.isFinite(x+y+time))return false;
      if(previous&&time-previous.time>=SCATTER_DURATION)previous=null;
      const distance=previous?Math.hypot(x-previous.x,y-previous.y):Infinity;
      if(previous&&distance<.5)return false;
      const dt=previous?Math.max(time-previous.time,.012):.03;
      const dx=previous?x-previous.x:0,dy=previous?y-previous.y:0;
      const speed=Math.hypot(dx,dy)/dt;
      if(!history.add({x,y,fromX:previous?.x??x,fromY:previous?.y??y,time,strength:THREE.MathUtils.clamp(.25+speed/1200,.25,1.4)}))return false;
      previous={x,y,time};
      return true;
    },
    leave() {previous=null;},
    // The source image belongs to the caller. Only release this pass's own
    // glyph atlas, material and grid; the render target is disposed upstream.
    dispose() {
      if(disposed)return;
      disposed=true;previous=null;
      material.uniforms.activeBrushCount.value=0;
      geometry.dispose();material.dispose();texture.dispose();
      scene.remove(grid);
    },
  };
}
