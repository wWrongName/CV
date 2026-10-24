export const desktopDogs = {
 about:{x:.832,bottom:.758,width:.13},
 contact:{x:.69,bottom:.739,width:.15},
} as const;

export function dogBackWeight(x:number,y:number){
 const back=Math.hypot((x/512-.66)/.31,(y/244-.38)/.38);
 const chest=Math.hypot((x/512-.46)/.14,(y/244-.51)/.25);
 const b=back>=1?0:Math.pow(1-back*back,2),c=chest>=1?0:Math.pow(1-chest*chest,2)*.85;
 return x<175||y>190?0:Math.max(b,c);
}
export function dogSleepAnchor(id:keyof typeof desktopDogs){
 const d=desktopDogs[id],height=d.width*244/512*1586/992;
 return {x:d.x+d.width*.19,y:d.bottom-height*.76};
}
