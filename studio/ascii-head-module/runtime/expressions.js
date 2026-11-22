import * as THREE from 'three';

const EXPRESSION_NAMES = new Set(['neutral', 'smile', 'surprise', 'thoughtful']);

export function createExpressionController(mesh, positionScale, onState = () => {}, {manifestUrl, signal} = {}) {
  let promise = null, ready = false, wanted = 'neutral', blinkStart = -100;
  let disposed = false;
  let targetNames = [];
  const animation = {changed: false, active: false};
  const request = new AbortController();
  const abortRequest = () => request.abort(signal?.reason);
  if (signal?.aborted) abortRequest();
  else signal?.addEventListener('abort', abortRequest, {once: true});
  const cancelled = () => disposed || request.signal.aborted;
  const assertActive = () => {
    if (!cancelled()) return;
    const error = new Error('Expression loading was cancelled.');
    error.name = 'AbortError';
    throw error;
  };
  const notify = state => {if (!cancelled()) onState(state);};

  async function load() {
    assertActive();
    if (ready) return;
    if (promise) return promise;
    notify({loading: true, name: wanted});
    promise = (async () => {
      assertActive();
      if (!manifestUrl) throw new Error('An expression manifest URL is required.');
      const manifestURL = new URL(manifestUrl, import.meta.url);
      const response = await fetch(manifestURL, {cache: 'no-cache', signal: request.signal});
      assertActive();
      if (!response.ok) throw new Error('Could not load expression manifest.');
      const manifest = await response.json();
      assertActive();
      const vertexCount = mesh.geometry.attributes.position.count;
      if (manifest.version !== 1 || manifest.vertexCount !== vertexCount || !Array.isArray(manifest.targets)) {
        throw new Error('Expression topology does not match the current head.');
      }
      const bufferURL = new URL(manifest.buffer, response.url || manifestURL);
      const binary = await fetch(bufferURL, {cache: 'no-cache', signal: request.signal});
      assertActive();
      if (!binary.ok) throw new Error('Could not load expression data.');
      const buffer = await binary.arrayBuffer();
      assertActive();
      const positions = [], normals = [];
      function view(Type, offset, length) {
        if (!Number.isInteger(offset) || offset < 0 || offset + length * Type.BYTES_PER_ELEMENT > buffer.byteLength) {
          throw new Error('Invalid expression buffer range.');
        }
        return new Type(buffer, offset, length);
      }
      for (const target of manifest.targets) {
        if (!['smile', 'surprise', 'thoughtful', 'blink'].includes(target.name) || !Number.isInteger(target.count) || target.count > vertexCount || target.count < 1) {
          throw new Error('Invalid expression target.');
        }
        const indices = view(Uint16Array, target.indices.byteOffset, target.count);
        const pos = view(Int16Array, target.position.byteOffset, target.count * 3);
        const norm = view(Int16Array, target.normal.byteOffset, target.count * 3);
        if (!(target.position.scale > 0) || !(target.normal.scale > 0) || !Number.isFinite(target.position.scale + target.normal.scale)) {
          throw new Error('Invalid expression quantization scale.');
        }
        const p = new Float32Array(vertexCount * 3), n = new Float32Array(vertexCount * 3);
        for (let i = 0; i < indices.length; i++) {
          const index = indices[i];
          if (index >= vertexCount) throw new Error('Invalid expression vertex index.');
          for (let c = 0; c < 3; c++) {
            p[index * 3 + c] = pos[i * 3 + c] * target.position.scale * positionScale;
            n[index * 3 + c] = norm[i * 3 + c] * target.normal.scale;
          }
        }
        positions.push(new THREE.BufferAttribute(p, 3));
        normals.push(new THREE.BufferAttribute(n, 3));
      }
      targetNames = manifest.targets.map(t => t.name);
      if (new Set(targetNames).size !== targetNames.length || !['smile', 'surprise', 'thoughtful', 'blink'].every(n => targetNames.includes(n))) {
        throw new Error('Missing expression target.');
      }
      assertActive();
      mesh.geometry.morphAttributes.position = positions;
      mesh.geometry.morphAttributes.normal = normals;
      mesh.geometry.morphTargetsRelative = true;
      mesh.updateMorphTargets();
      mesh.morphTargetDictionary = Object.fromEntries(targetNames.map((name, i) => [name, i]));
      mesh.material.needsUpdate = true;
      ready = true;
      notify({loading: false, name: wanted});
    })().catch(error => {
      promise = null;
      if (!cancelled()) {
        wanted = 'neutral';
        notify({loading: false, error, name: wanted});
      }
      throw error;
    });
    return promise;
  }

  return {
    async choose(name) {
      if (cancelled() || !EXPRESSION_NAMES.has(name)) return;
      wanted = name;
      notify({loading: !ready && name !== 'neutral', name});
      if (name !== 'neutral') await load();
    },
    async blink() {
      if (cancelled()) return;
      await load(); assertActive(); blinkStart = performance.now() / 1000;
    },
    update(dt, time) {
      animation.changed = false; animation.active = false;
      if (cancelled() || !ready) return animation;
      const age = time - blinkStart;
      const blink = age < .10 ? THREE.MathUtils.smoothstep(age, 0, .10) : 1 - THREE.MathUtils.smoothstep(age, .14, .33);
      for (let i = 0; i < targetNames.length; i++) {
        const name = targetNames[i];
        const previous = mesh.morphTargetInfluences[i];
        let next;
        if (name === 'blink') {
          next = age >= 0 && age <= .33 ? blink : 0;
          animation.active ||= age >= 0 && age < .34;
        } else {
          const target = name === wanted ? 1 : 0;
          next = THREE.MathUtils.damp(previous, target, 7.5, dt);
          if (Math.abs(next - target) < .0005) next = target;
          animation.active ||= next !== target;
        }
        mesh.morphTargetInfluences[i] = next;
        animation.changed ||= next !== previous;
      }
      return animation;
    },
    // Morph buffers belong to mesh.geometry and are released by its owner.
    // Stop pending requests and callbacks without mutating a discarded mesh.
    dispose() {
      if (disposed) return;
      disposed = true;
      request.abort();
      signal?.removeEventListener('abort', abortRequest);
      animation.changed = false; animation.active = false;
    },
  };
}
