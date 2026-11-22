const smooth=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t);};
export const HEAD_PIVOT=Object.freeze([0,-.82,-.55]);
// Runtime-local coordinates after the asset's preserved alignment transform.
// Full rigid influence includes the lowest chin/jaw vertex at Y=-1.1812.
export function headPoseWeight([x,y,z]){
  const r=Math.hypot(x/1.10,(z+.365)/1.20);
  const gate=1-smooth(1,1.2,r),cap=smooth(-1.6,-1.2,y);
  return smooth(-2.1,-1.2,y)*(gate*(1-cap)+cap);
}
export const HEAD_WEIGHT_GLSL=`
  float headPoseWeight(vec3 rest){
    float r=length(vec2(rest.x/1.10,(rest.z+.365)/1.20));
    float gate=1.-smoothstep(1.,1.2,r);
    float cap=smoothstep(-1.6,-1.2,rest.y);
    return smoothstep(-2.1,-1.2,rest.y)*mix(gate,1.,cap);
  }
`;
