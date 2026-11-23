const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
const smooth=value=>{const t=clamp(value,0,1);return t*t*t*(t*(t*6-15)+10);};

/** A fixed stance with bounded attention, not an automatic turntable. */
export function createIdleBehavior({random=Math.random, touch=false}={}){
  const waitForLook = () => touch ? 3.2 + random() * 3.3 : 8 + random() * 7;
  let time=0,nextLook=touch ? 1.5 + random() * 1.8 : 7 + random() * 4,look=null,wasTracking=false;
  let yaw=0,pitch=0,roll=0;
  let trackedX=0,trackedY=0,trackedPresence=0;
  const pointerHistory=[{time:0,x:0,y:0,presence:0}];
  function update(dt,{x=0,y=0,present=false,tracking=false,tilt=false}={}){
    dt=clamp(dt,0,.07);time+=dt;
    if(dt>0){
      pointerHistory.push({time,x:clamp(x,-1,1),y:clamp(y,-1,1),presence:present?1:0});
      const delayedTime=time-.16;
      while(pointerHistory.length>1&&pointerHistory[1].time<=delayedTime)pointerHistory.shift();
      const a=pointerHistory[0],b=pointerHistory[1]??a;
      const t=clamp((delayedTime-a.time)/Math.max(.0001,b.time-a.time),0,1);
      const soften=1-Math.exp(-dt*4);
      trackedX+=(a.x+(b.x-a.x)*t-trackedX)*soften;
      trackedY+=(a.y+(b.y-a.y)*t-trackedY)*soften;
      trackedPresence+=(a.presence+(b.presence-a.presence)*t-trackedPresence)*soften;
    }
    if (tracking) look=null;
    if (wasTracking&&!tracking) nextLook=time+(tilt ? waitForLook() : 7+random()*4);
    wasTracking=tracking;
    if(!tracking&&!look&&time>=nextLook){
      look={
        start:time,
        yaw:(random()<.5?-1:1)*(touch ? .12 + random() * .07 : .05 + random() * .04),
        pitch:(random()-.5)*(touch ? .14 : .04),
        roll:(random()-.5)*(touch ? .05 : .02),
        hold:.65+random()*.65,
      };
    }
    let attention=0;
    if(look){
      const age=time-look.start;
      attention=smooth(age/.85)*(1-smooth((age-.85-look.hold)/1.15));
      if(age>=2+look.hold){look=null;nextLook=time+waitForLook();}
    }
    const pointerWeight=trackedPresence*(1-attention*.75);
    const idleSway=tracking?0:1;
    const yawRange=tilt ? .26 : trackedX>0?.136:.095;
    const pitchRange=tilt ? .16 : trackedY>0?.078:.048;
    const wantedYaw=trackedX*yawRange*pointerWeight+(look?.yaw??0)*attention+Math.sin(time*.53)*(touch ? .028 : .009)*idleSway;
    const wantedPitch=trackedY*pitchRange*pointerWeight+(look?.pitch??0)*attention+Math.sin(time*1.04)*(touch ? .014 : .006)*idleSway;
    const wantedRoll=(look?.roll??0)*attention+Math.sin(time*.43)*(touch ? .016 : .008)*idleSway;
    // Smooth pursuit with a speed bound, so a mouse flick cannot jerk the neck.
    const follow=(current,target,limit)=>current+clamp((target-current)*(1-Math.exp(-dt*2.6)),-dt*limit,dt*limit);
    yaw=follow(yaw,wantedYaw,tilt ? .34 : touch && !tracking ? .22 : .15);pitch=follow(pitch,wantedPitch,tilt ? .22 : .10);roll=follow(roll,wantedRoll,.08);
    return {yaw,pitch,roll,attention:look?'glance':tracking?'cursor':'rest'};
  }
  return {update};
}
