type Settings = {
  width: number; height: number; pivot: { x: number; y: number };
  weights: (x: number, y: number) => readonly [number, number, number];
  legs?: { left: { x: number; y: number }; right: { x: number; y: number }; weights: (x: number, y: number) => readonly [number, number] };
  foregroundOnly?: boolean;
  amplitudes?: readonly [number, number, number];
  head?: { pivot: { x: number; y: number }; weight: (x: number, y: number) => number };
};

/** One shared mesh: elbow blend bends the complete texture without cutout seams or duplicates. */
export function createCharacterMesh(canvas: HTMLCanvasElement, image: HTMLImageElement, settings: Settings) {
  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: true, preserveDrawingBuffer: true });
  if (!gl) throw new Error("WebGL unavailable");
  const vertex = `
    attribute vec2 a_position;
    attribute vec3 a_weights;
    attribute float a_head;
    attribute vec2 a_legs;
    uniform vec2 u_size;
    uniform vec2 u_pivot;
    uniform vec3 u_motion;
    uniform vec3 u_amplitudes;
    uniform vec3 u_head;
    uniform vec3 u_leftLeg;
    uniform vec3 u_rightLeg;
    varying vec2 v_uv;
    varying float v_foreground;
    void main(){
      v_uv=a_position/u_size;
      v_foreground=a_weights.x;
      vec2 p=a_position;
      p.y-=a_weights.y*u_motion.y*u_amplitudes.x;
      p+=a_weights.z*u_motion.z*u_amplitudes.yz;
      vec2 local=p-u_pivot;
      float c=cos(u_motion.x),s=sin(u_motion.x);
      vec2 rotated=u_pivot+vec2(c*local.x-s*local.y,s*local.x+c*local.y);
      p=mix(p,rotated,a_weights.x);
      vec2 neck=p-u_head.yz;
      float hc=cos(u_head.x),hs=sin(u_head.x);
      vec2 tilted=u_head.yz+vec2(hc*neck.x-hs*neck.y,hs*neck.x+hc*neck.y);
      p=mix(p,tilted,a_head);
      vec2 knee=p-u_leftLeg.yz;
      float lc=cos(u_leftLeg.x),ls=sin(u_leftLeg.x);
      p=mix(p,u_leftLeg.yz+vec2(lc*knee.x-ls*knee.y,ls*knee.x+lc*knee.y),a_legs.x);
      knee=p-u_rightLeg.yz;
      lc=cos(u_rightLeg.x);ls=sin(u_rightLeg.x);
      p=mix(p,u_rightLeg.yz+vec2(lc*knee.x-ls*knee.y,ls*knee.x+lc*knee.y),a_legs.y);
      gl_Position=vec4(p.x/u_size.x*2.0-1.0,1.0-p.y/u_size.y*2.0,0.0,1.0);
    }`;
  const fragment = `precision mediump float; uniform sampler2D u_image; varying vec2 v_uv; varying float v_foreground; void main(){gl_FragColor=texture2D(u_image,v_uv); ${settings.foregroundOnly ? "gl_FragColor.a*=smoothstep(.78,.98,v_foreground);" : ""}}`;
  function shader(type: number, source: string) {
    const result = gl!.createShader(type)!; gl!.shaderSource(result, source); gl!.compileShader(result);
    if (!gl!.getShaderParameter(result, gl!.COMPILE_STATUS)) { const message = gl!.getShaderInfoLog(result); gl!.deleteShader(result); throw new Error(message || "Shader compile failed"); }
    return result;
  }
  const vs = shader(gl.VERTEX_SHADER, vertex), fs = shader(gl.FRAGMENT_SHADER, fragment);
  const program = gl.createProgram()!; gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
  gl.deleteShader(vs); gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Mesh link failed");
  const cols = Math.ceil(settings.width / 10), rows = Math.ceil(settings.height / 10);
  const vertices: number[] = [], indices: number[] = [];
  for (let row = 0; row <= rows; row++) for (let col = 0; col <= cols; col++) {
    const x = col / cols * settings.width, y = row / rows * settings.height;
    const [arm, breath, hair] = settings.weights(x, y);
    vertices.push(x, y, arm, breath, hair, settings.head?.weight(x, y) ?? 0, ...(settings.legs?.weights(x, y) ?? [0, 0]));
    if (row < rows && col < cols) {
      const a = row * (cols + 1) + col, b = a + 1, c = a + cols + 1, d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  const buffer = gl.createBuffer()!, index = gl.createBuffer()!, texture = gl.createTexture()!;
  gl.useProgram(program); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "a_position"), weights = gl.getAttribLocation(program, "a_weights"), head = gl.getAttribLocation(program, "a_head");
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 32, 0);
  gl.enableVertexAttribArray(weights); gl.vertexAttribPointer(weights, 3, gl.FLOAT, false, 32, 8);
  gl.enableVertexAttribArray(head); gl.vertexAttribPointer(head, 1, gl.FLOAT, false, 32, 20);
  const legs = gl.getAttribLocation(program, "a_legs");
  gl.enableVertexAttribArray(legs); gl.vertexAttribPointer(legs, 2, gl.FLOAT, false, 32, 24);
  gl.bindTexture(gl.TEXTURE_2D, texture); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.uniform1i(gl.getUniformLocation(program, "u_image"), 0);
  gl.uniform2f(gl.getUniformLocation(program, "u_size"), settings.width, settings.height);
  gl.uniform2f(gl.getUniformLocation(program, "u_pivot"), settings.pivot.x, settings.pivot.y);
  const motion = gl.getUniformLocation(program, "u_motion");
  const headMotion = gl.getUniformLocation(program, "u_head");
  const amplitudes = settings.amplitudes ?? [0, 0, 0];
  gl.uniform3f(gl.getUniformLocation(program, "u_amplitudes"), amplitudes[0], amplitudes[1], amplitudes[2]);
  return {
    draw(angle: number, breath: number, hair: number, headAngle = 0, legAngles: readonly [number, number] = [0, 0]) {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width * devicePixelRatio)), height = Math.max(1, Math.round(rect.height * devicePixelRatio));
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
      gl.viewport(0, 0, width, height); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform3f(gl.getUniformLocation(program, "u_leftLeg"), legAngles[0], settings.legs?.left.x ?? 0, settings.legs?.left.y ?? 0);
      gl.uniform3f(gl.getUniformLocation(program, "u_rightLeg"), legAngles[1], settings.legs?.right.x ?? 0, settings.legs?.right.y ?? 0);
      gl.uniform3f(headMotion, headAngle, settings.head?.pivot.x ?? 0, settings.head?.pivot.y ?? 0);
      gl.uniform3f(motion, angle, breath, hair); gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    },
    dispose() { gl.deleteBuffer(buffer); gl.deleteBuffer(index); gl.deleteTexture(texture); gl.deleteProgram(program); },
  };
}
