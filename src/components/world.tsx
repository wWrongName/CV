"use client";
import {Canvas,useFrame,useThree} from "@react-three/fiber";
import {Edges,Line} from "@react-three/drei";
import {useEffect,useLayoutEffect,useMemo,useRef,useState,type RefObject} from "react";
import {AdditiveBlending,CatmullRomCurve3,Color,Vector3,type Group,type Mesh,type Points} from "three";
import {useTheme} from "./theme-switch";
import type {Journey,SystemNode,Vector} from "@/lib/journeys";
type Props={transitionKey:string;light?:boolean;journey:Journey;step:number;reduced:boolean;onUnavailable:()=>void;overview?:boolean;introduction?:boolean;openProjectLabel:string;onSelect?:(id:string)=>void};
const CYAN="#68d9ee",AMBER="#efa86b",DIM="#163c4d",BLACK="#111111",LIGHT_ACCENT="#986b3d";
const COMPACT_PROJECT_LABELS:Record<string,string>={paas:"PaaS",operations:"Kubernetes","delivery-platform":"CI/CD",resilience:"Anti-DDoS","llmops":"LLMOps"};
const HOME_POSITION:Vector=[20,10,27],HOME_TARGET:Vector=[-5,0,-6];
type Flight={journey:Journey;node:Vector;destination:string};
type SceneProps=Props&{flight?:Flight|null};
function Camera({journey,step,reduced,overview,introduction,flight}:SceneProps){
 const {camera,size,invalidate}=useThree();
 const target=useRef(new Vector3(...HOME_TARGET));
 const startCamera=useRef(new Vector3()),startTarget=useRef(new Vector3());
 const endCamera=useRef(new Vector3(...HOME_POSITION)),endTarget=useRef(new Vector3(...HOME_TARGET));
 const elapsed=useRef(0),wasFlying=useRef(false);
 useEffect(()=>{
  const chapter=journey.chapters[step],mobile=size.width<700;
  endCamera.current.set(...(chapter?.camera??HOME_POSITION));endTarget.current.set(...(chapter?.target??HOME_TARGET));
  if(introduction){endCamera.current.set(14,12,mobile?29:23);endTarget.current.set(0,1,-6)}
  else if(overview){endCamera.current.set(17,16,size.width<1100?36:30);endTarget.current.set(size.width<1100?-4:-9,1,-6)}
  else if(mobile){endCamera.current.add(new Vector3(4,7,9));endTarget.current.y-=3}
  else{
   endTarget.current.x-=5.5;
   // Pan along the camera's horizontal axis, preserving the viewing angle.
   const left=endCamera.current.clone().sub(endTarget.current).cross(new Vector3(0,1,0)).normalize();
   const shift=size.width>=1100?3.2:1.2;
   endCamera.current.addScaledVector(left,shift);endTarget.current.addScaledVector(left,shift);
  }
  if(!overview&&!introduction&&journey.id==="llmops"&&step===1&&size.width>=1100){
   // Only this close-up needs a horizontal correction; keep its original zoom.
   const probe=camera.clone();
   probe.position.copy(endCamera.current);probe.lookAt(endTarget.current);probe.updateMatrixWorld(true);
   const forward=endTarget.current.clone().sub(endCamera.current).normalize();
   const right=forward.clone().cross(new Vector3(0,1,0)).normalize();
   let shift=0;
   for(const node of journey.nodes.filter(node=>chapter?.focus.includes(node.id))){
    const edge=new Vector3(...node.position).addScaledVector(right,2.6);
    const projected=edge.clone().project(probe);
    const depth=edge.clone().sub(endCamera.current).dot(forward);
    shift=Math.max(shift,(projected.x-.88)*depth*Math.tan(22*Math.PI/180)*size.width/size.height);
   }
   endCamera.current.addScaledVector(right,shift);endTarget.current.addScaledVector(right,shift);
  }
  if(flight&&!reduced){
   endTarget.current.set(...flight.node);
   const approach=camera.position.clone().sub(endTarget.current).normalize();
   endCamera.current.copy(endTarget.current).addScaledVector(approach,.65);
  }else if(wasFlying.current&&!reduced&&!overview){
   // The system unfolds outward; avoid a second, opposing camera zoom.
   camera.position.copy(endCamera.current);
   target.current.copy(endTarget.current);
  }
  wasFlying.current=!!flight;
  startCamera.current.copy(camera.position);startTarget.current.copy(target.current);elapsed.current=0;
  if(reduced){camera.position.copy(endCamera.current);target.current.copy(endTarget.current);camera.lookAt(target.current)}
  invalidate();
 },[journey,step,size.width,size.height,overview,introduction,flight,reduced,camera,invalidate]);
 useFrame((_,delta)=>{
  elapsed.current+=delta;
  const t=reduced?1:Math.min(elapsed.current/(flight ? .18 : .22),1);
  const eased=t*t*(3-2*t);
  camera.position.lerpVectors(startCamera.current,endCamera.current,eased);
  target.current.lerpVectors(startTarget.current,endTarget.current,eased);
  camera.lookAt(target.current);
 });
 return null;
}
function Particles({reduced}:{reduced:boolean}){
 const cloud=useRef<Points>(null);
 const positions=useMemo(()=>{const out=new Float32Array(1100*3);let seed=27491;const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};for(let i=0;i<1100;i++){out[i*3]=(random()-.5)*100;out[i*3+1]=(random()-.5)*45;out[i*3+2]=(random()-.5)*90-15}return out},[]);
 useFrame((_,delta)=>{if(cloud.current&&!reduced)cloud.current.rotation.y+=delta*.006});
 return <points ref={cloud}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]}/></bufferGeometry><pointsMaterial size={.035} color="#759aae" transparent opacity={.55} sizeAttenuation depthWrite={false}/></points>
}
function Boundary({step,reduced,light,transitionKey}:{step:number;reduced:boolean;light?:boolean;transitionKey:string}){
 const platform=useRef<Group>(null);
 const innerRing=useRef<Group>(null);
 const targetAngle=useRef(0);
 const {invalidate}=useThree();
 useEffect(()=>{
   if(reduced){targetAngle.current=0;if(platform.current)platform.current.rotation.y=0;if(innerRing.current)innerRing.current.rotation.y=0;}
   else targetAngle.current=(platform.current?.rotation.y??0)+Math.PI/15;
   invalidate();
 },[transitionKey,reduced,invalidate]);
 useFrame((_,delta)=>{
   if(!platform.current||reduced)return;
   const elapsed=Math.min(delta,.05);
   // Slow idle rotation (one turn in about three minutes), plus transition easing.
   const drift=elapsed*.035;
   targetAngle.current+=drift;
   platform.current.rotation.y+=drift;
   const remaining=targetAngle.current-platform.current.rotation.y;
   platform.current.rotation.y=Math.abs(remaining)<.0001?targetAngle.current:platform.current.rotation.y+remaining*(1-Math.exp(-elapsed*7));
   // Cancel the parent rotation and mirror it for the inner arc.
   if(innerRing.current)innerRing.current.rotation.y=-2*platform.current.rotation.y;
 });
 return <group ref={platform} position={[0,-3.4,-6]}><group>{[9,11,14].map((r,i)=><group key={r} ref={i===0?innerRing:undefined}><mesh rotation={[-Math.PI/2,0,i]}><torusGeometry args={[r,.012,4,160,Math.PI*(1.15+i*.2)]}/><meshBasicMaterial color={light?BLACK:i===0?"#327b8c":"#163747"} transparent opacity={light?.3:.8}/></mesh></group>)}</group><mesh rotation={[-Math.PI/2,0,0]}><circleGeometry args={[9,80]}/><meshBasicMaterial visible={!light} color="#071722" transparent opacity={.55} side={2} depthWrite={false}/></mesh>{Array.from({length:48},(_,i)=>{const angle=i/48*Math.PI*2;return <mesh key={i} position={[Math.cos(angle)*11,0,Math.sin(angle)*11]} rotation={[-Math.PI/2,0,-angle]}><planeGeometry args={[i%4===0?.45:.15,.026]}/><meshBasicMaterial color={light?BLACK:i%4===0?"#75bfd1":"#305267"}/></mesh>})}<mesh position={[0,.07,0]} rotation={[-Math.PI/2,0,0]}><ringGeometry args={[8.98,9.03,120]}/><meshBasicMaterial color={light?BLACK:step<0?"#438ba0":"#58c6d9"} transparent opacity={.3} side={2}/></mesh></group>
}
// Subtle face shading adds depth while keeping the light theme predominantly outlined.
function LightFaces({active}:{active:boolean}){
 return <>{["#c8d8df","#e5edf1","#ffffff","#b7c9d3","#edf4f7","#c8d8df"].map((color,i)=><meshBasicMaterial key={i} attach={`material-${i}`} color={color} transparent opacity={active?.42:.12} depthWrite={false}/>)}</>;
}
function Service({node,active,index,step,reduced,light}:{node:SystemNode;active:boolean;index:number;step:number;reduced:boolean;light?:boolean}){
 const group=useRef<Group>(null);const materialColor=light?BLACK:(active?CYAN:DIM);const size:Vector=node.layer==="infra"?[2.8,.18,2.4]:[2.35,1.45,.16];
 useFrame(({clock},delta)=>{if(!group.current)return;const target=step<0?1:active?1:.78;group.current.scale.lerp(new Vector3(target,target,target),Math.min(delta*3,1));group.current.position.y=node.position[1]+(reduced?0:Math.sin(clock.elapsedTime*.55+index)*.055)});
 return <group ref={group} position={node.position}>
 <mesh><boxGeometry args={size}/>{light?<LightFaces active={active}/>:<meshStandardMaterial color={active?"#0d2837":"#07121d"} emissive={active?"#12364a":"#050d15"} emissiveIntensity={active?.8:.4} metalness={.6} roughness={.4}/>}<Edges color={materialColor} fog={!light} transparent opacity={light?(active?.95:.25):(active?.7:.2)}/></mesh>
 {node.layer==="infra"?<group>{[-.72,0,.72].flatMap((x,i)=>[-.6,.25].map((z,j)=><mesh key={`${i}-${j}`} position={[x,.33,z]}><boxGeometry args={[.5,.42,.5]}/>{light?<LightFaces active={active}/>:<meshStandardMaterial color="#0e2f40" emissive={active?"#215e75":"#0b1c27"} emissiveIntensity={.6}/>}<Edges color={materialColor} fog={!light} transparent opacity={light?(active?.95:.25):(active?.8:.2)}/></mesh>))}</group>:<group>{Array.from({length:4},(_,i)=><mesh key={i} position={[-.12,.36-i*.24,.095]}><planeGeometry args={[i===0?1.68:1.15+i*.12,.026]}/><meshBasicMaterial color={light?(i===0&&active?LIGHT_ACCENT:BLACK):i===0&&active?AMBER:materialColor} transparent opacity={active?.65:.18}/></mesh>)}<mesh position={[-.95,.55,.095]}><planeGeometry args={[.1,.1]}/><meshBasicMaterial color={light?(active?LIGHT_ACCENT:BLACK):active?AMBER:DIM}/></mesh></group>}
 {node.layer==="infra"&&[-.72,0,.72].map((x,i)=><group key={`ports-${i}`} position={[x,.33,.51]}>{[-.12,0,.12].map((dx,j)=><mesh key={j} position={[dx,0,0]}><planeGeometry args={[.065,.06]}/><meshBasicMaterial color={light?BLACK:active?CYAN:DIM}/></mesh>)}</group>)}
 {node.layer==="delivery"&&<group position={[0,-.48,.105]}>{[-.68,0,.68].map((x,i)=><mesh key={i} position={[x,0,0]}><planeGeometry args={[.36,.13]}/><meshBasicMaterial color={light?LIGHT_ACCENT:active?AMBER:DIM}/></mesh>)}<Line points={[[-.68,0,0],[.68,0,0]]} color={materialColor} lineWidth={1} transparent opacity={.6}/></group>}
 {node.layer==="app"&&<group position={[.9,-.08,.11]}>{[.22,.4,.3].map((h,i)=><mesh key={i} position={[-.26+i*.16,-.35+h/2,0]}><planeGeometry args={[.08,h]}/><meshBasicMaterial color={light?LIGHT_ACCENT:active?CYAN:DIM} transparent opacity={.65}/></mesh>)}</group>}
 <Line points={[[0,-.75,0],[0,-node.position[1]-3.2,0]]} color={materialColor} lineWidth={.6} transparent opacity={active?.22:.05}/>
 </group>
}
function Connection({from,to,active,reduced,index,light}:{from:Vector;to:Vector;active:boolean;reduced:boolean;index:number;light?:boolean}){
 const packet=useRef<Mesh>(null);
 const curve=useMemo(()=>new CatmullRomCurve3([new Vector3(...from),new Vector3(from[0],from[1]+.5,(from[2]+to[2])/2),new Vector3(to[0],to[1]+.5,(from[2]+to[2])/2),new Vector3(...to)]),[from,to]);
 const points=useMemo(()=>curve.getPoints(50),[curve]);
 useFrame(({clock})=>{if(packet.current)packet.current.position.copy(curve.getPoint(reduced?.4:(clock.elapsedTime*.13+index*.17)%1))});
 return <><Line points={points} color={light?BLACK:(active?CYAN:DIM)} lineWidth={active?1.25:.65} transparent opacity={active?.55:.2}/>{active&&<mesh ref={packet}><sphereGeometry args={[.055,8,8]}/><meshBasicMaterial color={light?LIGHT_ACCENT:"#c9f8ff"} toneMapped={false}/></mesh>}</>
}
function ProjectLabels({journey,step,labels,overview,system}:{journey:Journey;step:number;labels:RefObject<(HTMLElement|null)[]>;overview?:boolean;system:RefObject<Group|null>}){
 const point=useRef(new Vector3());
 useFrame(({camera,size})=>{journey.nodes.forEach((n,i)=>{const el=labels.current[i];if(!el)return;const active=overview||(step>=0&&journey.chapters[step]?.focus.includes(n.id));point.current.set(n.position[0],n.position[1]+(n.layer==="infra"?1:1.25),n.position[2]);if(system.current){system.current.updateWorldMatrix(true,false);point.current.applyMatrix4(system.current.matrixWorld)}point.current.project(camera);const x=(point.current.x*.5+.5)*size.width,y=(-point.current.y*.5+.5)*size.height;const margin=overview&&size.width<1100?36:65;const visible=active&&point.current.z<1&&x>margin&&x<size.width-margin&&y>90&&y<size.height-100;el.style.visibility=visible?'visible':'hidden';el.style.opacity=String(Math.max(0,Math.min(1,((system.current?.scale.x??1)-.45)/.55)));el.style.transform=`translate(-50%,-100%) translate(${x}px,${y}px)`;});});return null;
}
function Scene(props:SceneProps&{labels:RefObject<(HTMLElement|null)[]>}){
 const focus=props.journey.chapters[props.step]?.focus??[];
 const system=useRef<Group>(null),wasOverview=useRef(props.overview),opening=useRef(1);
 useLayoutEffect(()=>{
  opening.current=wasOverview.current&&!props.overview&&!props.reduced?0:1;
  wasOverview.current=props.overview;
  if(system.current){const scale=opening.current===0?.025:1;system.current.scale.setScalar(scale);system.current.position.set(0,0,-6*(1-scale))}
 },[props.overview,props.reduced]);
 useFrame((_,delta)=>{
  if(!system.current)return;
  opening.current=props.reduced?1:Math.min(1,opening.current+delta/.24);
  const t=opening.current,ease=1-Math.pow(1-t,3),scale=.025+.975*ease;
  // Expand nodes, connections and platform from their shared central point.
  system.current.scale.setScalar(scale);system.current.position.set(0,0,-6*(1-scale));
 });
 return <><color attach="background" args={[props.light?"#eef3f5":"#040911"]}/><fog attach="fog" args={[props.light?"#eef3f5":"#040911",30,95]}/><ambientLight intensity={.8}/><directionalLight position={[5,15,5]} color="#8bbcd4" intensity={2}/><pointLight position={[0,6,-5]} color="#4ca1ba" intensity={35} distance={30}/><Camera {...props}/>{!props.light&&<Particles reduced={props.reduced}/>}<group ref={system}><Boundary transitionKey={props.transitionKey} step={props.step} reduced={props.reduced} light={props.light}/>{props.journey.nodes.map((n,i)=><Service key={n.id} node={n} index={i} light={props.light} active={props.step<0||focus.includes(n.id)} step={props.step} reduced={props.reduced}/>)}{props.journey.links.map(([a,b],i)=>{const from=props.journey.nodes.find(n=>n.id===a)!,to=props.journey.nodes.find(n=>n.id===b)!;return <Connection key={a+b} from={from.position} to={to.position} active={props.step<0||(focus.includes(a)&&focus.includes(b))} reduced={props.reduced} index={i} light={props.light}/>})}</group><ProjectLabels system={system} journey={props.journey} step={props.step} labels={props.labels} overview={props.overview}/></>
}
function ContextHealth({onUnavailable}:{onUnavailable:()=>void}){const {gl}=useThree();useEffect(()=>{const canvas=gl.domElement;canvas.addEventListener("webglcontextlost",onUnavailable);return()=>canvas.removeEventListener("webglcontextlost",onUnavailable)},[gl,onUnavailable]);return null}
export default function World(props:Props){
 const theme=useTheme(),labels=useRef<(HTMLElement|null)[]>([]);
 const previous=useRef({journey:props.journey,overview:props.overview});
 const [flight,setFlight]=useState<Flight|null>(null);
 useEffect(()=>{
  const old=previous.current;
  previous.current={journey:props.journey,overview:props.overview};
  const node=old.overview&&!props.overview?old.journey.nodes.find(n=>n.id===props.journey.id):undefined;
  if(!node||props.reduced){setFlight(null);return}
  setFlight({journey:old.journey,node:node.position,destination:props.journey.id});
  const timer=window.setTimeout(()=>setFlight(null),180);
  return()=>window.clearTimeout(timer);
 },[props.journey,props.overview,props.step,props.reduced]);
 const activeFlight=!props.reduced&&flight?.destination===props.journey.id?flight:null;
 const sceneProps=activeFlight?{...props,journey:activeFlight.journey,overview:true,introduction:false,step:-1}:props;
 return <><Canvas aria-hidden="true" camera={{position:HOME_POSITION,fov:44,near:.1,far:120}} dpr={[1,1.5]} frameloop={props.reduced?"demand":"always"} gl={{antialias:true,alpha:false,powerPreference:"high-performance"}}><Scene {...sceneProps} flight={activeFlight} light={theme==="light"} labels={labels}/><ContextHealth onUnavailable={props.onUnavailable}/></Canvas><div className={`component-labels ${sceneProps.overview?"project-map-labels":""}`} style={activeFlight?{opacity:0,pointerEvents:"none"}:undefined}>{sceneProps.journey.nodes.map((n,i)=>sceneProps.overview?<button type="button" className="component-label project-map-label" key={n.id} ref={el=>{labels.current[i]=el}} onClick={()=>props.onSelect?.(n.id)} aria-label={`${props.openProjectLabel}: ${n.label}`}><span className="component-symbol">{n.symbol}</span><span className="map-label-full">{n.label}<small>{n.detail} ↗</small></span><span className="map-label-compact">{COMPACT_PROJECT_LABELS[n.id]??n.label}</span></button>:<div className="component-label" key={n.id} ref={el=>{labels.current[i]=el}}><span className="component-symbol">{n.symbol}</span><div>{n.label}<small>{n.detail}</small></div></div>)}</div></>
}
