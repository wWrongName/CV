var d9={resume:{fullName:"Величко Иван Сергеевич",headline:"Fullstack-разработка, инфраструктура и менеджмент",summary:"Разрабатываю веб-сервисы, ускоряю доставку изменений и обеспечиваю стабильную работу инфраструктуры. Объединяю fullstack-разработку, DevOps и координацию frontend-команды: от пользовательского интерфейса до деплоя и сопровождения. Автоматизирую ручные операции, чтобы команда тратила меньше времени на рутину и сбои."}};var R1={x:0,y:0,active:!1};function P5($){let{DeviceOrientationEvent:J,DeviceMotionEvent:Q}=window;if($||!(matchMedia("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0))return;if(!window.isSecureContext||!(J||Q))return async()=>"unavailable";let Z=new AbortController,W={passive:!0,signal:Z.signal},K,X,H,Y=()=>{K=X=void 0,R1.x=R1.y=0,R1.active=!1};function U(G,E,q){let M=window.screen.orientation?.angle??window.orientation??0;if(X={beta:G,gamma:E,angle:M,source:q},!K||K.angle!==M||K.source!==q)K=X;let O=(G-K.beta+540)%360-180,F=E-K.gamma,N=M*Math.PI/180,R=Math.cos(N),_=Math.sin(N),L=(k)=>Math.sign(k)*Math.min(1,Math.max(0,Math.abs(k)-1)/11);R1.x=L(F*R-O*_),R1.y=L(O*R+F*_),R1.active=!0,H?.()}return window.addEventListener("deviceorientation",(G)=>{let{beta:E,gamma:q}=G;if(document.hidden||!Number.isFinite(E)||!Number.isFinite(q))return;U(E,q,"orientation")},W),window.addEventListener("devicemotion",(G)=>{if(document.hidden||X?.source==="orientation")return;let{x:E,y:q,z:M}=G.accelerationIncludingGravity??{};if(!Number.isFinite(E)||!Number.isFinite(q)||!Number.isFinite(M)||Math.hypot(E,q,M)<4)return;let O=180/Math.PI;U(Math.atan2(q,M)*O,Math.atan2(-E,Math.hypot(q,M))*O,"motion")},W),document.addEventListener("visibilitychange",Y,W),window.addEventListener("pagehide",()=>Z.abort(),{once:!0,signal:Z.signal}),async()=>{if(X)return K=X,R1.x=R1.y=0,"active";let G=typeof J?.requestPermission==="function"?J:Q;if(typeof G?.requestPermission==="function")try{if(await G.requestPermission()!=="granted")return"blocked"}catch{return"blocked"}if(R1.active)return"active";return new Promise((E)=>{let q=setTimeout(()=>{H=void 0,E("unavailable")},2200);H=()=>{clearTimeout(q),H=void 0,E("active")}})}}var a7=($,J,Q)=>Math.max(J,Math.min(Q,$)),A5=($)=>{let J=a7($,0,1);return J*J*J*(J*(J*6-15)+10)};function T5({random:$=Math.random,touch:J=!1}={}){let Q=()=>J?3.2+$()*3.3:8+$()*7,Z=0,W=J?1.5+$()*1.8:7+$()*4,K=null,X=!1,H=0,Y=0,U=0,G=0,E=0,q=0,M=[{time:0,x:0,y:0,presence:0}];function O(F,{x:N=0,y:R=0,present:_=!1,tracking:L=!1,tilt:k=!1}={}){if(F=a7(F,0,0.07),Z+=F,F>0){M.push({time:Z,x:a7(N,-1,1),y:a7(R,-1,1),presence:_?1:0});let f=Z-0.16;while(M.length>1&&M[1].time<=f)M.shift();let h=M[0],x=M[1]??h,p=a7((f-h.time)/Math.max(0.0001,x.time-h.time),0,1),y=1-Math.exp(-F*4);G+=(h.x+(x.x-h.x)*p-G)*y,E+=(h.y+(x.y-h.y)*p-E)*y,q+=(h.presence+(x.presence-h.presence)*p-q)*y}if(L)K=null;if(X&&!L)W=Z+(k?Q():7+$()*4);if(X=L,!L&&!K&&Z>=W)K={start:Z,yaw:($()<0.5?-1:1)*(J?0.12+$()*0.07:0.05+$()*0.04),pitch:($()-0.5)*(J?0.14:0.04),roll:($()-0.5)*(J?0.05:0.02),hold:0.65+$()*0.65};let P=0;if(K){let f=Z-K.start;if(P=A5(f/0.85)*(1-A5((f-0.85-K.hold)/1.15)),f>=2+K.hold)K=null,W=Z+Q()}let C=q*(1-P*0.75),S=L?0:1,b=k?0.26:G>0?0.136:0.095,B=k?0.16:E>0?0.078:0.048,D=G*b*C+(K?.yaw??0)*P+Math.sin(Z*0.53)*(J?0.028:0.009)*S,I=E*B*C+(K?.pitch??0)*P+Math.sin(Z*1.04)*(J?0.014:0.006)*S,w=(K?.roll??0)*P+Math.sin(Z*0.43)*(J?0.016:0.008)*S,A=(f,h,x)=>f+a7((h-f)*(1-Math.exp(-F*2.6)),-F*x,F*x);return H=A(H,D,k?0.34:J&&!L?0.22:0.15),Y=A(Y,I,k?0.22:0.1),U=A(U,w,0.08),{yaw:H,pitch:Y,roll:U,attention:K?"glance":L?"cursor":"rest"}}return{update:O}}var qW="180";var NW=0,EQ=1,MW=2;var qQ=1,RW=2,C8=3,W7=0,t1=1,U8=2,K7=0,J9=1,NQ=2,MQ=3,RQ=4,FW=5,M6=100,OW=101,LW=102,DW=103,_W=104,VW=200,BW=201,zW=202,kW=203,CW=204,IW=205,PW=206,AW=207,TW=208,wW=209,SW=210,jW=211,fW=212,vW=213,yW=214,O$=0,L$=1,D$=2,Q9=3,_$=4,V$=5,B$=6,z$=7,hW=0,bW=1,xW=2,m8=0,gW=1,pW=2,lW=3,uW=4,mW=5,dW=6,cW=7;var R6=301,j7=302,k$=303,C$=304,Z9=306,F6=1000,I$=1001,P$=1002,d8=1003,A$=1004;var f7=1005;var u1=1006,O6=1007;var c8=1008;var X7=1009,nW=1010,sW=1011,W9=1012,FQ=1013,L6=1014,H7=1015,K9=1016,OQ=1017,LQ=1018,D6=1020,oW=35902,iW=35899,aW=1021,rW=1022,I8=1023,T$=1026,X9=1027,tW=1028,DQ=1029,eW=1030,_Q=1031;var VQ=1033,w$=33776,S$=33777,j$=33778,f$=33779,BQ=35840,zQ=35841,kQ=35842,CQ=35843,IQ=36196,PQ=37492,AQ=37496,TQ=37808,wQ=37809,SQ=37810,jQ=37811,fQ=37812,vQ=37813,yQ=37814,hQ=37815,bQ=37816,xQ=37817,gQ=37818,pQ=37819,lQ=37820,uQ=37821,mQ=36492,dQ=36494,cQ=36495,nQ=36283,sQ=36284,oQ=36285,iQ=36286;var aQ=2300,v$=2301;var rQ=0,H9=1,_6=2;var $K=3201;var JK=0,QK=1,v7="",P8="srgb",g1="srgb-linear",tQ="linear",Y1="srgb";var ZK=512,WK=513,KK=514,eQ=515,XK=516,HK=517,YK=518,UK=519;var $Z="300 es",JZ=2000;class Y7{addEventListener($,J){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[$]===void 0)Q[$]=[];if(Q[$].indexOf(J)===-1)Q[$].push(J)}hasEventListener($,J){let Q=this._listeners;if(Q===void 0)return!1;return Q[$]!==void 0&&Q[$].indexOf(J)!==-1}removeEventListener($,J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[$];if(Z!==void 0){let W=Z.indexOf(J);if(W!==-1)Z.splice(W,1)}}dispatchEvent($){let J=this._listeners;if(J===void 0)return;let Q=J[$.type];if(Q!==void 0){$.target=this;let Z=Q.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,$);$.target=null}}}var j1=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],w5=1234567,e6=Math.PI/180,w7=180/Math.PI;function F8(){let $=Math.random()*4294967295|0,J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(j1[$&255]+j1[$>>8&255]+j1[$>>16&255]+j1[$>>24&255]+"-"+j1[J&255]+j1[J>>8&255]+"-"+j1[J>>16&15|64]+j1[J>>24&255]+"-"+j1[Q&63|128]+j1[Q>>8&255]+"-"+j1[Q>>16&255]+j1[Q>>24&255]+j1[Z&255]+j1[Z>>8&255]+j1[Z>>16&255]+j1[Z>>24&255]).toLowerCase()}function c0($,J,Q){return Math.max(J,Math.min(Q,$))}function QZ($,J){return($%J+J)%J}function uY($,J,Q,Z,W){return Z+($-J)*(W-Z)/(Q-J)}function mY($,J,Q){if($!==J)return(Q-$)/(J-$);else return 0}function $9($,J,Q){return(1-Q)*$+Q*J}function dY($,J,Q,Z){return $9($,J,1-Math.exp(-Q*Z))}function cY($,J=1){return J-Math.abs(QZ($,J*2)-J)}function nY($,J,Q){if($<=J)return 0;if($>=Q)return 1;return $=($-J)/(Q-J),$*$*(3-2*$)}function sY($,J,Q){if($<=J)return 0;if($>=Q)return 1;return $=($-J)/(Q-J),$*$*$*($*($*6-15)+10)}function oY($,J){return $+Math.floor(Math.random()*(J-$+1))}function iY($,J){return $+Math.random()*(J-$)}function aY($){return $*(0.5-Math.random())}function rY($){if($!==void 0)w5=$;let J=w5+=1831565813;return J=Math.imul(J^J>>>15,J|1),J^=J+Math.imul(J^J>>>7,J|61),((J^J>>>14)>>>0)/4294967296}function tY($){return $*e6}function eY($){return $*w7}function $U($){return($&$-1)===0&&$!==0}function JU($){return Math.pow(2,Math.ceil(Math.log($)/Math.LN2))}function QU($){return Math.pow(2,Math.floor(Math.log($)/Math.LN2))}function ZU($,J,Q,Z,W){let{cos:K,sin:X}=Math,H=K(Q/2),Y=X(Q/2),U=K((J+Z)/2),G=X((J+Z)/2),E=K((J-Z)/2),q=X((J-Z)/2),M=K((Z-J)/2),O=X((Z-J)/2);switch(W){case"XYX":$.set(H*G,Y*E,Y*q,H*U);break;case"YZY":$.set(Y*q,H*G,Y*E,H*U);break;case"ZXZ":$.set(Y*E,Y*q,H*G,H*U);break;case"XZX":$.set(H*G,Y*O,Y*M,H*U);break;case"YXY":$.set(Y*M,H*G,Y*O,H*U);break;case"ZYZ":$.set(Y*O,Y*M,H*G,H*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function R8($,J){switch(J.constructor){case Float32Array:return $;case Uint32Array:return $/4294967295;case Uint16Array:return $/65535;case Uint8Array:return $/255;case Int32Array:return Math.max($/2147483647,-1);case Int16Array:return Math.max($/32767,-1);case Int8Array:return Math.max($/127,-1);default:throw Error("Invalid component type.")}}function $1($,J){switch(J.constructor){case Float32Array:return $;case Uint32Array:return Math.round($*4294967295);case Uint16Array:return Math.round($*65535);case Uint8Array:return Math.round($*255);case Int32Array:return Math.round($*2147483647);case Int16Array:return Math.round($*32767);case Int8Array:return Math.round($*127);default:throw Error("Invalid component type.")}}var F1={DEG2RAD:e6,RAD2DEG:w7,generateUUID:F8,clamp:c0,euclideanModulo:QZ,mapLinear:uY,inverseLerp:mY,lerp:$9,damp:dY,pingpong:cY,smoothstep:nY,smootherstep:sY,randInt:oY,randFloat:iY,randFloatSpread:aY,seededRandom:rY,degToRad:tY,radToDeg:eY,isPowerOfTwo:$U,ceilPowerOfTwo:JU,floorPowerOfTwo:QU,setQuaternionFromProperEuler:ZU,normalize:$1,denormalize:R8};class u0{constructor($=0,J=0){u0.prototype.isVector2=!0,this.x=$,this.y=J}get width(){return this.x}set width($){this.x=$}get height(){return this.y}set height($){this.y=$}set($,J){return this.x=$,this.y=J,this}setScalar($){return this.x=$,this.y=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y)}copy($){return this.x=$.x,this.y=$.y,this}add($){return this.x+=$.x,this.y+=$.y,this}addScalar($){return this.x+=$,this.y+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this}sub($){return this.x-=$.x,this.y-=$.y,this}subScalar($){return this.x-=$,this.y-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this}multiply($){return this.x*=$.x,this.y*=$.y,this}multiplyScalar($){return this.x*=$,this.y*=$,this}divide($){return this.x/=$.x,this.y/=$.y,this}divideScalar($){return this.multiplyScalar(1/$)}applyMatrix3($){let J=this.x,Q=this.y,Z=$.elements;return this.x=Z[0]*J+Z[3]*Q+Z[6],this.y=Z[1]*J+Z[4]*Q+Z[7],this}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot($){return this.x*$.x+this.y*$.y}cross($){return this.x*$.y-this.y*$.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo($){let J=Math.sqrt(this.lengthSq()*$.lengthSq());if(J===0)return Math.PI/2;let Q=this.dot($)/J;return Math.acos(c0(Q,-1,1))}distanceTo($){return Math.sqrt(this.distanceToSquared($))}distanceToSquared($){let J=this.x-$.x,Q=this.y-$.y;return J*J+Q*Q}manhattanDistanceTo($){return Math.abs(this.x-$.x)+Math.abs(this.y-$.y)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this}equals($){return $.x===this.x&&$.y===this.y}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this}rotateAround($,J){let Q=Math.cos(J),Z=Math.sin(J),W=this.x-$.x,K=this.y-$.y;return this.x=W*Q-K*Z+$.x,this.y=W*Z+K*Q+$.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class L8{constructor($=0,J=0,Q=0,Z=1){this.isQuaternion=!0,this._x=$,this._y=J,this._z=Q,this._w=Z}static slerpFlat($,J,Q,Z,W,K,X){let H=Q[Z+0],Y=Q[Z+1],U=Q[Z+2],G=Q[Z+3],E=W[K+0],q=W[K+1],M=W[K+2],O=W[K+3];if(X===0){$[J+0]=H,$[J+1]=Y,$[J+2]=U,$[J+3]=G;return}if(X===1){$[J+0]=E,$[J+1]=q,$[J+2]=M,$[J+3]=O;return}if(G!==O||H!==E||Y!==q||U!==M){let F=1-X,N=H*E+Y*q+U*M+G*O,R=N>=0?1:-1,_=1-N*N;if(_>Number.EPSILON){let k=Math.sqrt(_),P=Math.atan2(k,N*R);F=Math.sin(F*P)/k,X=Math.sin(X*P)/k}let L=X*R;if(H=H*F+E*L,Y=Y*F+q*L,U=U*F+M*L,G=G*F+O*L,F===1-X){let k=1/Math.sqrt(H*H+Y*Y+U*U+G*G);H*=k,Y*=k,U*=k,G*=k}}$[J]=H,$[J+1]=Y,$[J+2]=U,$[J+3]=G}static multiplyQuaternionsFlat($,J,Q,Z,W,K){let X=Q[Z],H=Q[Z+1],Y=Q[Z+2],U=Q[Z+3],G=W[K],E=W[K+1],q=W[K+2],M=W[K+3];return $[J]=X*M+U*G+H*q-Y*E,$[J+1]=H*M+U*E+Y*G-X*q,$[J+2]=Y*M+U*q+X*E-H*G,$[J+3]=U*M-X*G-H*E-Y*q,$}get x(){return this._x}set x($){this._x=$,this._onChangeCallback()}get y(){return this._y}set y($){this._y=$,this._onChangeCallback()}get z(){return this._z}set z($){this._z=$,this._onChangeCallback()}get w(){return this._w}set w($){this._w=$,this._onChangeCallback()}set($,J,Q,Z){return this._x=$,this._y=J,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy($){return this._x=$.x,this._y=$.y,this._z=$.z,this._w=$.w,this._onChangeCallback(),this}setFromEuler($,J=!0){let{_x:Q,_y:Z,_z:W,_order:K}=$,X=Math.cos,H=Math.sin,Y=X(Q/2),U=X(Z/2),G=X(W/2),E=H(Q/2),q=H(Z/2),M=H(W/2);switch(K){case"XYZ":this._x=E*U*G+Y*q*M,this._y=Y*q*G-E*U*M,this._z=Y*U*M+E*q*G,this._w=Y*U*G-E*q*M;break;case"YXZ":this._x=E*U*G+Y*q*M,this._y=Y*q*G-E*U*M,this._z=Y*U*M-E*q*G,this._w=Y*U*G+E*q*M;break;case"ZXY":this._x=E*U*G-Y*q*M,this._y=Y*q*G+E*U*M,this._z=Y*U*M+E*q*G,this._w=Y*U*G-E*q*M;break;case"ZYX":this._x=E*U*G-Y*q*M,this._y=Y*q*G+E*U*M,this._z=Y*U*M-E*q*G,this._w=Y*U*G+E*q*M;break;case"YZX":this._x=E*U*G+Y*q*M,this._y=Y*q*G+E*U*M,this._z=Y*U*M-E*q*G,this._w=Y*U*G-E*q*M;break;case"XZY":this._x=E*U*G-Y*q*M,this._y=Y*q*G-E*U*M,this._z=Y*U*M+E*q*G,this._w=Y*U*G+E*q*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(J===!0)this._onChangeCallback();return this}setFromAxisAngle($,J){let Q=J/2,Z=Math.sin(Q);return this._x=$.x*Z,this._y=$.y*Z,this._z=$.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix($){let J=$.elements,Q=J[0],Z=J[4],W=J[8],K=J[1],X=J[5],H=J[9],Y=J[2],U=J[6],G=J[10],E=Q+X+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-H)*q,this._y=(W-Y)*q,this._z=(K-Z)*q}else if(Q>X&&Q>G){let q=2*Math.sqrt(1+Q-X-G);this._w=(U-H)/q,this._x=0.25*q,this._y=(Z+K)/q,this._z=(W+Y)/q}else if(X>G){let q=2*Math.sqrt(1+X-Q-G);this._w=(W-Y)/q,this._x=(Z+K)/q,this._y=0.25*q,this._z=(H+U)/q}else{let q=2*Math.sqrt(1+G-Q-X);this._w=(K-Z)/q,this._x=(W+Y)/q,this._y=(H+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors($,J){let Q=$.dot(J)+1;if(Q<0.00000001)if(Q=0,Math.abs($.x)>Math.abs($.z))this._x=-$.y,this._y=$.x,this._z=0,this._w=Q;else this._x=0,this._y=-$.z,this._z=$.y,this._w=Q;else this._x=$.y*J.z-$.z*J.y,this._y=$.z*J.x-$.x*J.z,this._z=$.x*J.y-$.y*J.x,this._w=Q;return this.normalize()}angleTo($){return 2*Math.acos(Math.abs(c0(this.dot($),-1,1)))}rotateTowards($,J){let Q=this.angleTo($);if(Q===0)return this;let Z=Math.min(1,J/Q);return this.slerp($,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot($){return this._x*$._x+this._y*$._y+this._z*$._z+this._w*$._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let $=this.length();if($===0)this._x=0,this._y=0,this._z=0,this._w=1;else $=1/$,this._x=this._x*$,this._y=this._y*$,this._z=this._z*$,this._w=this._w*$;return this._onChangeCallback(),this}multiply($){return this.multiplyQuaternions(this,$)}premultiply($){return this.multiplyQuaternions($,this)}multiplyQuaternions($,J){let{_x:Q,_y:Z,_z:W,_w:K}=$,X=J._x,H=J._y,Y=J._z,U=J._w;return this._x=Q*U+K*X+Z*Y-W*H,this._y=Z*U+K*H+W*X-Q*Y,this._z=W*U+K*Y+Q*H-Z*X,this._w=K*U-Q*X-Z*H-W*Y,this._onChangeCallback(),this}slerp($,J){if(J===0)return this;if(J===1)return this.copy($);let Q=this._x,Z=this._y,W=this._z,K=this._w,X=K*$._w+Q*$._x+Z*$._y+W*$._z;if(X<0)this._w=-$._w,this._x=-$._x,this._y=-$._y,this._z=-$._z,X=-X;else this.copy($);if(X>=1)return this._w=K,this._x=Q,this._y=Z,this._z=W,this;let H=1-X*X;if(H<=Number.EPSILON){let q=1-J;return this._w=q*K+J*this._w,this._x=q*Q+J*this._x,this._y=q*Z+J*this._y,this._z=q*W+J*this._z,this.normalize(),this}let Y=Math.sqrt(H),U=Math.atan2(Y,X),G=Math.sin((1-J)*U)/Y,E=Math.sin(J*U)/Y;return this._w=K*G+this._w*E,this._x=Q*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions($,J,Q){return this.copy($).slerp(J,Q)}random(){let $=2*Math.PI*Math.random(),J=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),W=Math.sqrt(Q);return this.set(Z*Math.sin($),Z*Math.cos($),W*Math.sin(J),W*Math.cos(J))}equals($){return $._x===this._x&&$._y===this._y&&$._z===this._z&&$._w===this._w}fromArray($,J=0){return this._x=$[J],this._y=$[J+1],this._z=$[J+2],this._w=$[J+3],this._onChangeCallback(),this}toArray($=[],J=0){return $[J]=this._x,$[J+1]=this._y,$[J+2]=this._z,$[J+3]=this._w,$}fromBufferAttribute($,J){return this._x=$.getX(J),this._y=$.getY(J),this._z=$.getZ(J),this._w=$.getW(J),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange($){return this._onChangeCallback=$,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class g{constructor($=0,J=0,Q=0){g.prototype.isVector3=!0,this.x=$,this.y=J,this.z=Q}set($,J,Q){if(Q===void 0)Q=this.z;return this.x=$,this.y=J,this.z=Q,this}setScalar($){return this.x=$,this.y=$,this.z=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setZ($){return this.z=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy($){return this.x=$.x,this.y=$.y,this.z=$.z,this}add($){return this.x+=$.x,this.y+=$.y,this.z+=$.z,this}addScalar($){return this.x+=$,this.y+=$,this.z+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this.z=$.z+J.z,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this.z+=$.z*J,this}sub($){return this.x-=$.x,this.y-=$.y,this.z-=$.z,this}subScalar($){return this.x-=$,this.y-=$,this.z-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this.z=$.z-J.z,this}multiply($){return this.x*=$.x,this.y*=$.y,this.z*=$.z,this}multiplyScalar($){return this.x*=$,this.y*=$,this.z*=$,this}multiplyVectors($,J){return this.x=$.x*J.x,this.y=$.y*J.y,this.z=$.z*J.z,this}applyEuler($){return this.applyQuaternion(S5.setFromEuler($))}applyAxisAngle($,J){return this.applyQuaternion(S5.setFromAxisAngle($,J))}applyMatrix3($){let J=this.x,Q=this.y,Z=this.z,W=$.elements;return this.x=W[0]*J+W[3]*Q+W[6]*Z,this.y=W[1]*J+W[4]*Q+W[7]*Z,this.z=W[2]*J+W[5]*Q+W[8]*Z,this}applyNormalMatrix($){return this.applyMatrix3($).normalize()}applyMatrix4($){let J=this.x,Q=this.y,Z=this.z,W=$.elements,K=1/(W[3]*J+W[7]*Q+W[11]*Z+W[15]);return this.x=(W[0]*J+W[4]*Q+W[8]*Z+W[12])*K,this.y=(W[1]*J+W[5]*Q+W[9]*Z+W[13])*K,this.z=(W[2]*J+W[6]*Q+W[10]*Z+W[14])*K,this}applyQuaternion($){let J=this.x,Q=this.y,Z=this.z,W=$.x,K=$.y,X=$.z,H=$.w,Y=2*(K*Z-X*Q),U=2*(X*J-W*Z),G=2*(W*Q-K*J);return this.x=J+H*Y+K*G-X*U,this.y=Q+H*U+X*Y-W*G,this.z=Z+H*G+W*U-K*Y,this}project($){return this.applyMatrix4($.matrixWorldInverse).applyMatrix4($.projectionMatrix)}unproject($){return this.applyMatrix4($.projectionMatrixInverse).applyMatrix4($.matrixWorld)}transformDirection($){let J=this.x,Q=this.y,Z=this.z,W=$.elements;return this.x=W[0]*J+W[4]*Q+W[8]*Z,this.y=W[1]*J+W[5]*Q+W[9]*Z,this.z=W[2]*J+W[6]*Q+W[10]*Z,this.normalize()}divide($){return this.x/=$.x,this.y/=$.y,this.z/=$.z,this}divideScalar($){return this.multiplyScalar(1/$)}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this.z=Math.min(this.z,$.z),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this.z=Math.max(this.z,$.z),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this.z=c0(this.z,$.z,J.z),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this.z=c0(this.z,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot($){return this.x*$.x+this.y*$.y+this.z*$.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this.z+=($.z-this.z)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this.z=$.z+(J.z-$.z)*Q,this}cross($){return this.crossVectors(this,$)}crossVectors($,J){let{x:Q,y:Z,z:W}=$,K=J.x,X=J.y,H=J.z;return this.x=Z*H-W*X,this.y=W*K-Q*H,this.z=Q*X-Z*K,this}projectOnVector($){let J=$.lengthSq();if(J===0)return this.set(0,0,0);let Q=$.dot(this)/J;return this.copy($).multiplyScalar(Q)}projectOnPlane($){return bJ.copy(this).projectOnVector($),this.sub(bJ)}reflect($){return this.sub(bJ.copy($).multiplyScalar(2*this.dot($)))}angleTo($){let J=Math.sqrt(this.lengthSq()*$.lengthSq());if(J===0)return Math.PI/2;let Q=this.dot($)/J;return Math.acos(c0(Q,-1,1))}distanceTo($){return Math.sqrt(this.distanceToSquared($))}distanceToSquared($){let J=this.x-$.x,Q=this.y-$.y,Z=this.z-$.z;return J*J+Q*Q+Z*Z}manhattanDistanceTo($){return Math.abs(this.x-$.x)+Math.abs(this.y-$.y)+Math.abs(this.z-$.z)}setFromSpherical($){return this.setFromSphericalCoords($.radius,$.phi,$.theta)}setFromSphericalCoords($,J,Q){let Z=Math.sin(J)*$;return this.x=Z*Math.sin(Q),this.y=Math.cos(J)*$,this.z=Z*Math.cos(Q),this}setFromCylindrical($){return this.setFromCylindricalCoords($.radius,$.theta,$.y)}setFromCylindricalCoords($,J,Q){return this.x=$*Math.sin(J),this.y=Q,this.z=$*Math.cos(J),this}setFromMatrixPosition($){let J=$.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this}setFromMatrixScale($){let J=this.setFromMatrixColumn($,0).length(),Q=this.setFromMatrixColumn($,1).length(),Z=this.setFromMatrixColumn($,2).length();return this.x=J,this.y=Q,this.z=Z,this}setFromMatrixColumn($,J){return this.fromArray($.elements,J*4)}setFromMatrix3Column($,J){return this.fromArray($.elements,J*3)}setFromEuler($){return this.x=$._x,this.y=$._y,this.z=$._z,this}setFromColor($){return this.x=$.r,this.y=$.g,this.z=$.b,this}equals($){return $.x===this.x&&$.y===this.y&&$.z===this.z}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this.z=$[J+2],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$[J+2]=this.z,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this.z=$.getZ(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let $=Math.random()*Math.PI*2,J=Math.random()*2-1,Q=Math.sqrt(1-J*J);return this.x=Q*Math.cos($),this.y=J,this.z=Q*Math.sin($),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var bJ=new g,S5=new L8;class p0{constructor($,J,Q,Z,W,K,X,H,Y){if(p0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],$!==void 0)this.set($,J,Q,Z,W,K,X,H,Y)}set($,J,Q,Z,W,K,X,H,Y){let U=this.elements;return U[0]=$,U[1]=Z,U[2]=X,U[3]=J,U[4]=W,U[5]=H,U[6]=Q,U[7]=K,U[8]=Y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy($){let J=this.elements,Q=$.elements;return J[0]=Q[0],J[1]=Q[1],J[2]=Q[2],J[3]=Q[3],J[4]=Q[4],J[5]=Q[5],J[6]=Q[6],J[7]=Q[7],J[8]=Q[8],this}extractBasis($,J,Q){return $.setFromMatrix3Column(this,0),J.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4($){let J=$.elements;return this.set(J[0],J[4],J[8],J[1],J[5],J[9],J[2],J[6],J[10]),this}multiply($){return this.multiplyMatrices(this,$)}premultiply($){return this.multiplyMatrices($,this)}multiplyMatrices($,J){let Q=$.elements,Z=J.elements,W=this.elements,K=Q[0],X=Q[3],H=Q[6],Y=Q[1],U=Q[4],G=Q[7],E=Q[2],q=Q[5],M=Q[8],O=Z[0],F=Z[3],N=Z[6],R=Z[1],_=Z[4],L=Z[7],k=Z[2],P=Z[5],C=Z[8];return W[0]=K*O+X*R+H*k,W[3]=K*F+X*_+H*P,W[6]=K*N+X*L+H*C,W[1]=Y*O+U*R+G*k,W[4]=Y*F+U*_+G*P,W[7]=Y*N+U*L+G*C,W[2]=E*O+q*R+M*k,W[5]=E*F+q*_+M*P,W[8]=E*N+q*L+M*C,this}multiplyScalar($){let J=this.elements;return J[0]*=$,J[3]*=$,J[6]*=$,J[1]*=$,J[4]*=$,J[7]*=$,J[2]*=$,J[5]*=$,J[8]*=$,this}determinant(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8];return J*K*U-J*X*Y-Q*W*U+Q*X*H+Z*W*Y-Z*K*H}invert(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8],G=U*K-X*Y,E=X*H-U*W,q=Y*W-K*H,M=J*G+Q*E+Z*q;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/M;return $[0]=G*O,$[1]=(Z*Y-U*Q)*O,$[2]=(X*Q-Z*K)*O,$[3]=E*O,$[4]=(U*J-Z*H)*O,$[5]=(Z*W-X*J)*O,$[6]=q*O,$[7]=(Q*H-Y*J)*O,$[8]=(K*J-Q*W)*O,this}transpose(){let $,J=this.elements;return $=J[1],J[1]=J[3],J[3]=$,$=J[2],J[2]=J[6],J[6]=$,$=J[5],J[5]=J[7],J[7]=$,this}getNormalMatrix($){return this.setFromMatrix4($).invert().transpose()}transposeIntoArray($){let J=this.elements;return $[0]=J[0],$[1]=J[3],$[2]=J[6],$[3]=J[1],$[4]=J[4],$[5]=J[7],$[6]=J[2],$[7]=J[5],$[8]=J[8],this}setUvTransform($,J,Q,Z,W,K,X){let H=Math.cos(W),Y=Math.sin(W);return this.set(Q*H,Q*Y,-Q*(H*K+Y*X)+K+$,-Z*Y,Z*H,-Z*(-Y*K+H*X)+X+J,0,0,1),this}scale($,J){return this.premultiply(xJ.makeScale($,J)),this}rotate($){return this.premultiply(xJ.makeRotation(-$)),this}translate($,J){return this.premultiply(xJ.makeTranslation($,J)),this}makeTranslation($,J){if($.isVector2)this.set(1,0,$.x,0,1,$.y,0,0,1);else this.set(1,0,$,0,1,J,0,0,1);return this}makeRotation($){let J=Math.cos($),Q=Math.sin($);return this.set(J,-Q,0,Q,J,0,0,0,1),this}makeScale($,J){return this.set($,0,0,0,J,0,0,0,1),this}equals($){let J=this.elements,Q=$.elements;for(let Z=0;Z<9;Z++)if(J[Z]!==Q[Z])return!1;return!0}fromArray($,J=0){for(let Q=0;Q<9;Q++)this.elements[Q]=$[Q+J];return this}toArray($=[],J=0){let Q=this.elements;return $[J]=Q[0],$[J+1]=Q[1],$[J+2]=Q[2],$[J+3]=Q[3],$[J+4]=Q[4],$[J+5]=Q[5],$[J+6]=Q[6],$[J+7]=Q[7],$[J+8]=Q[8],$}clone(){return new this.constructor().fromArray(this.elements)}}var xJ=new p0;function ZZ($){for(let J=$.length-1;J>=0;--J)if($[J]>=65535)return!0;return!1}function q6($){return document.createElementNS("http://www.w3.org/1999/xhtml",$)}function GK(){let $=q6("canvas");return $.style.display="block",$}var j5={};function N6($){if($ in j5)return;j5[$]=!0,console.warn($)}function EK($,J,Q){return new Promise(function(Z,W){function K(){switch($.clientWaitSync(J,$.SYNC_FLUSH_COMMANDS_BIT,0)){case $.WAIT_FAILED:W();break;case $.TIMEOUT_EXPIRED:setTimeout(K,Q);break;default:Z()}}setTimeout(K,Q)})}var f5=new p0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),v5=new p0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function WU(){let $={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,X){if(this.enabled===!1||K===X||!K||!X)return W;if(this.spaces[K].transfer==="srgb")W.r=p8(W.r),W.g=p8(W.g),W.b=p8(W.b);if(this.spaces[K].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=E6(W.r),W.g=E6(W.g),W.b=E6(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,X){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return N6("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),$.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return N6("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),$.colorSpaceToWorking(W,K)}},J=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return $.define({["srgb-linear"]:{primaries:J,whitePoint:Z,transfer:"linear",toXYZ:f5,fromXYZ:v5,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:J,whitePoint:Z,transfer:"srgb",toXYZ:f5,fromXYZ:v5,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),$}var o0=WU();function p8($){return $<0.04045?$*0.0773993808:Math.pow($*0.9478672986+0.0521327014,2.4)}function E6($){return $<0.0031308?$*12.92:1.055*Math.pow($,0.41666)-0.055}var r7;class WZ{static getDataURL($,J="image/png"){if(/^data:/i.test($.src))return $.src;if(typeof HTMLCanvasElement>"u")return $.src;let Q;if($ instanceof HTMLCanvasElement)Q=$;else{if(r7===void 0)r7=q6("canvas");r7.width=$.width,r7.height=$.height;let Z=r7.getContext("2d");if($ instanceof ImageData)Z.putImageData($,0,0);else Z.drawImage($,0,0,$.width,$.height);Q=r7}return Q.toDataURL(J)}static sRGBToLinear($){if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap){let J=q6("canvas");J.width=$.width,J.height=$.height;let Q=J.getContext("2d");Q.drawImage($,0,0,$.width,$.height);let Z=Q.getImageData(0,0,$.width,$.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=p8(W[K]/255)*255;return Q.putImageData(Z,0,0),J}else if($.data){let J=$.data.slice(0);for(let Q=0;Q<J.length;Q++)if(J instanceof Uint8Array||J instanceof Uint8ClampedArray)J[Q]=Math.floor(p8(J[Q]/255)*255);else J[Q]=p8(J[Q]);return{data:J,width:$.width,height:$.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),$}}var KU=0;class Y9{constructor($=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KU++}),this.uuid=F8(),this.data=$,this.dataReady=!0,this.version=0}getSize($){let J=this.data;if(typeof HTMLVideoElement<"u"&&J instanceof HTMLVideoElement)$.set(J.videoWidth,J.videoHeight,0);else if(J instanceof VideoFrame)$.set(J.displayHeight,J.displayWidth,0);else if(J!==null)$.set(J.width,J.height,J.depth||0);else $.set(0,0,0);return $}set needsUpdate($){if($===!0)this.version++}toJSON($){let J=$===void 0||typeof $==="string";if(!J&&$.images[this.uuid]!==void 0)return $.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,X=Z.length;K<X;K++)if(Z[K].isDataTexture)W.push(gJ(Z[K].image));else W.push(gJ(Z[K]))}else W=gJ(Z);Q.url=W}if(!J)$.images[this.uuid]=Q;return Q}}function gJ($){if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap)return WZ.getDataURL($);else if($.data)return{data:Array.from($.data),width:$.width,height:$.height,type:$.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var XU=0,pJ=new g;class D1 extends Y7{constructor($=D1.DEFAULT_IMAGE,J=D1.DEFAULT_MAPPING,Q=1001,Z=1001,W=1006,K=1008,X=1023,H=1009,Y=D1.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:XU++}),this.uuid=F8(),this.name="",this.source=new Y9($),this.mipmaps=[],this.mapping=J,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=Y,this.format=X,this.internalFormat=null,this.type=H,this.offset=new u0(0,0),this.repeat=new u0(1,1),this.center=new u0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new p0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=$&&$.depth&&$.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(pJ).x}get height(){return this.source.getSize(pJ).y}get depth(){return this.source.getSize(pJ).z}get image(){return this.source.data}set image($=null){this.source.data=$}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy($){return this.name=$.name,this.source=$.source,this.mipmaps=$.mipmaps.slice(0),this.mapping=$.mapping,this.channel=$.channel,this.wrapS=$.wrapS,this.wrapT=$.wrapT,this.magFilter=$.magFilter,this.minFilter=$.minFilter,this.anisotropy=$.anisotropy,this.format=$.format,this.internalFormat=$.internalFormat,this.type=$.type,this.offset.copy($.offset),this.repeat.copy($.repeat),this.center.copy($.center),this.rotation=$.rotation,this.matrixAutoUpdate=$.matrixAutoUpdate,this.matrix.copy($.matrix),this.generateMipmaps=$.generateMipmaps,this.premultiplyAlpha=$.premultiplyAlpha,this.flipY=$.flipY,this.unpackAlignment=$.unpackAlignment,this.colorSpace=$.colorSpace,this.renderTarget=$.renderTarget,this.isRenderTargetTexture=$.isRenderTargetTexture,this.isArrayTexture=$.isArrayTexture,this.userData=JSON.parse(JSON.stringify($.userData)),this.needsUpdate=!0,this}setValues($){for(let J in $){let Q=$[J];if(Q===void 0){console.warn(`THREE.Texture.setValues(): parameter '${J}' has value of undefined.`);continue}let Z=this[J];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${J}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[J]=Q}}toJSON($){let J=$===void 0||typeof $==="string";if(!J&&$.textures[this.uuid]!==void 0)return $.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON($).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!J)$.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv($){if(this.mapping!==300)return $;if($.applyMatrix3(this.matrix),$.x<0||$.x>1)switch(this.wrapS){case 1000:$.x=$.x-Math.floor($.x);break;case 1001:$.x=$.x<0?0:1;break;case 1002:if(Math.abs(Math.floor($.x)%2)===1)$.x=Math.ceil($.x)-$.x;else $.x=$.x-Math.floor($.x);break}if($.y<0||$.y>1)switch(this.wrapT){case 1000:$.y=$.y-Math.floor($.y);break;case 1001:$.y=$.y<0?0:1;break;case 1002:if(Math.abs(Math.floor($.y)%2)===1)$.y=Math.ceil($.y)-$.y;else $.y=$.y-Math.floor($.y);break}if(this.flipY)$.y=1-$.y;return $}set needsUpdate($){if($===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate($){if($===!0)this.pmremVersion++}}D1.DEFAULT_IMAGE=null;D1.DEFAULT_MAPPING=300;D1.DEFAULT_ANISOTROPY=1;class i0{constructor($=0,J=0,Q=0,Z=1){i0.prototype.isVector4=!0,this.x=$,this.y=J,this.z=Q,this.w=Z}get width(){return this.z}set width($){this.z=$}get height(){return this.w}set height($){this.w=$}set($,J,Q,Z){return this.x=$,this.y=J,this.z=Q,this.w=Z,this}setScalar($){return this.x=$,this.y=$,this.z=$,this.w=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setZ($){return this.z=$,this}setW($){return this.w=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;case 3:this.w=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy($){return this.x=$.x,this.y=$.y,this.z=$.z,this.w=$.w!==void 0?$.w:1,this}add($){return this.x+=$.x,this.y+=$.y,this.z+=$.z,this.w+=$.w,this}addScalar($){return this.x+=$,this.y+=$,this.z+=$,this.w+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this.z=$.z+J.z,this.w=$.w+J.w,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this.z+=$.z*J,this.w+=$.w*J,this}sub($){return this.x-=$.x,this.y-=$.y,this.z-=$.z,this.w-=$.w,this}subScalar($){return this.x-=$,this.y-=$,this.z-=$,this.w-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this.z=$.z-J.z,this.w=$.w-J.w,this}multiply($){return this.x*=$.x,this.y*=$.y,this.z*=$.z,this.w*=$.w,this}multiplyScalar($){return this.x*=$,this.y*=$,this.z*=$,this.w*=$,this}applyMatrix4($){let J=this.x,Q=this.y,Z=this.z,W=this.w,K=$.elements;return this.x=K[0]*J+K[4]*Q+K[8]*Z+K[12]*W,this.y=K[1]*J+K[5]*Q+K[9]*Z+K[13]*W,this.z=K[2]*J+K[6]*Q+K[10]*Z+K[14]*W,this.w=K[3]*J+K[7]*Q+K[11]*Z+K[15]*W,this}divide($){return this.x/=$.x,this.y/=$.y,this.z/=$.z,this.w/=$.w,this}divideScalar($){return this.multiplyScalar(1/$)}setAxisAngleFromQuaternion($){this.w=2*Math.acos($.w);let J=Math.sqrt(1-$.w*$.w);if(J<0.0001)this.x=1,this.y=0,this.z=0;else this.x=$.x/J,this.y=$.y/J,this.z=$.z/J;return this}setAxisAngleFromRotationMatrix($){let J,Q,Z,W,K=0.01,X=0.1,H=$.elements,Y=H[0],U=H[4],G=H[8],E=H[1],q=H[5],M=H[9],O=H[2],F=H[6],N=H[10];if(Math.abs(U-E)<0.01&&Math.abs(G-O)<0.01&&Math.abs(M-F)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+O)<0.1&&Math.abs(M+F)<0.1&&Math.abs(Y+q+N-3)<0.1)return this.set(1,0,0,0),this;J=Math.PI;let _=(Y+1)/2,L=(q+1)/2,k=(N+1)/2,P=(U+E)/4,C=(G+O)/4,S=(M+F)/4;if(_>L&&_>k)if(_<0.01)Q=0,Z=0.707106781,W=0.707106781;else Q=Math.sqrt(_),Z=P/Q,W=C/Q;else if(L>k)if(L<0.01)Q=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),Q=P/Z,W=S/Z;else if(k<0.01)Q=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(k),Q=C/W,Z=S/W;return this.set(Q,Z,W,J),this}let R=Math.sqrt((F-M)*(F-M)+(G-O)*(G-O)+(E-U)*(E-U));if(Math.abs(R)<0.001)R=1;return this.x=(F-M)/R,this.y=(G-O)/R,this.z=(E-U)/R,this.w=Math.acos((Y+q+N-1)/2),this}setFromMatrixPosition($){let J=$.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this.w=J[15],this}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this.z=Math.min(this.z,$.z),this.w=Math.min(this.w,$.w),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this.z=Math.max(this.z,$.z),this.w=Math.max(this.w,$.w),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this.z=c0(this.z,$.z,J.z),this.w=c0(this.w,$.w,J.w),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this.z=c0(this.z,$,J),this.w=c0(this.w,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot($){return this.x*$.x+this.y*$.y+this.z*$.z+this.w*$.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this.z+=($.z-this.z)*J,this.w+=($.w-this.w)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this.z=$.z+(J.z-$.z)*Q,this.w=$.w+(J.w-$.w)*Q,this}equals($){return $.x===this.x&&$.y===this.y&&$.z===this.z&&$.w===this.w}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this.z=$[J+2],this.w=$[J+3],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$[J+2]=this.z,$[J+3]=this.w,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this.z=$.getZ(J),this.w=$.getW(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KZ extends Y7{constructor($=1,J=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Q),this.isRenderTarget=!0,this.width=$,this.height=J,this.depth=Q.depth,this.scissor=new i0(0,0,$,J),this.scissorTest=!1,this.viewport=new i0(0,0,$,J);let Z={width:$,height:J,depth:Q.depth},W=new D1(Z);this.textures=[];let K=Q.count;for(let X=0;X<K;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview}_setTextureOptions($={}){let J={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if($.mapping!==void 0)J.mapping=$.mapping;if($.wrapS!==void 0)J.wrapS=$.wrapS;if($.wrapT!==void 0)J.wrapT=$.wrapT;if($.wrapR!==void 0)J.wrapR=$.wrapR;if($.magFilter!==void 0)J.magFilter=$.magFilter;if($.minFilter!==void 0)J.minFilter=$.minFilter;if($.format!==void 0)J.format=$.format;if($.type!==void 0)J.type=$.type;if($.anisotropy!==void 0)J.anisotropy=$.anisotropy;if($.colorSpace!==void 0)J.colorSpace=$.colorSpace;if($.flipY!==void 0)J.flipY=$.flipY;if($.generateMipmaps!==void 0)J.generateMipmaps=$.generateMipmaps;if($.internalFormat!==void 0)J.internalFormat=$.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues(J)}get texture(){return this.textures[0]}set texture($){this.textures[0]=$}set depthTexture($){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if($!==null)$.renderTarget=this;this._depthTexture=$}get depthTexture(){return this._depthTexture}setSize($,J,Q=1){if(this.width!==$||this.height!==J||this.depth!==Q){this.width=$,this.height=J,this.depth=Q;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=$,this.textures[Z].image.height=J,this.textures[Z].image.depth=Q,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,$,J),this.scissor.set(0,0,$,J)}clone(){return new this.constructor().copy(this)}copy($){this.width=$.width,this.height=$.height,this.depth=$.depth,this.scissor.copy($.scissor),this.scissorTest=$.scissorTest,this.viewport.copy($.viewport),this.textures.length=0;for(let J=0,Q=$.textures.length;J<Q;J++){this.textures[J]=$.textures[J].clone(),this.textures[J].isRenderTargetTexture=!0,this.textures[J].renderTarget=this;let Z=Object.assign({},$.textures[J].image);this.textures[J].source=new Y9(Z)}if(this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,$.depthTexture!==null)this.depthTexture=$.depthTexture.clone();return this.samples=$.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class D8 extends KZ{constructor($=1,J=1,Q={}){super($,J,Q);this.isWebGLRenderTarget=!0}}class y$ extends D1{constructor($=null,J=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:$,width:J,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate($){this.layerUpdates.add($)}clearLayerUpdates(){this.layerUpdates.clear()}}class XZ extends D1{constructor($=null,J=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:$,width:J,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class m1{constructor($=new g(1/0,1/0,1/0),J=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=$,this.max=J}set($,J){return this.min.copy($),this.max.copy(J),this}setFromArray($){this.makeEmpty();for(let J=0,Q=$.length;J<Q;J+=3)this.expandByPoint(q8.fromArray($,J));return this}setFromBufferAttribute($){this.makeEmpty();for(let J=0,Q=$.count;J<Q;J++)this.expandByPoint(q8.fromBufferAttribute($,J));return this}setFromPoints($){this.makeEmpty();for(let J=0,Q=$.length;J<Q;J++)this.expandByPoint($[J]);return this}setFromCenterAndSize($,J){let Q=q8.copy(J).multiplyScalar(0.5);return this.min.copy($).sub(Q),this.max.copy($).add(Q),this}setFromObject($,J=!1){return this.makeEmpty(),this.expandByObject($,J)}clone(){return new this.constructor().copy(this)}copy($){return this.min.copy($.min),this.max.copy($.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter($){return this.isEmpty()?$.set(0,0,0):$.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize($){return this.isEmpty()?$.set(0,0,0):$.subVectors(this.max,this.min)}expandByPoint($){return this.min.min($),this.max.max($),this}expandByVector($){return this.min.sub($),this.max.add($),this}expandByScalar($){return this.min.addScalar(-$),this.max.addScalar($),this}expandByObject($,J=!1){$.updateWorldMatrix(!1,!1);let Q=$.geometry;if(Q!==void 0){let W=Q.getAttribute("position");if(J===!0&&W!==void 0&&$.isInstancedMesh!==!0)for(let K=0,X=W.count;K<X;K++){if($.isMesh===!0)$.getVertexPosition(K,q8);else q8.fromBufferAttribute(W,K);q8.applyMatrix4($.matrixWorld),this.expandByPoint(q8)}else{if($.boundingBox!==void 0){if($.boundingBox===null)$.computeBoundingBox();c9.copy($.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();c9.copy(Q.boundingBox)}c9.applyMatrix4($.matrixWorld),this.union(c9)}}let Z=$.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],J);return this}containsPoint($){return $.x>=this.min.x&&$.x<=this.max.x&&$.y>=this.min.y&&$.y<=this.max.y&&$.z>=this.min.z&&$.z<=this.max.z}containsBox($){return this.min.x<=$.min.x&&$.max.x<=this.max.x&&this.min.y<=$.min.y&&$.max.y<=this.max.y&&this.min.z<=$.min.z&&$.max.z<=this.max.z}getParameter($,J){return J.set(($.x-this.min.x)/(this.max.x-this.min.x),($.y-this.min.y)/(this.max.y-this.min.y),($.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox($){return $.max.x>=this.min.x&&$.min.x<=this.max.x&&$.max.y>=this.min.y&&$.min.y<=this.max.y&&$.max.z>=this.min.z&&$.min.z<=this.max.z}intersectsSphere($){return this.clampPoint($.center,q8),q8.distanceToSquared($.center)<=$.radius*$.radius}intersectsPlane($){let J,Q;if($.normal.x>0)J=$.normal.x*this.min.x,Q=$.normal.x*this.max.x;else J=$.normal.x*this.max.x,Q=$.normal.x*this.min.x;if($.normal.y>0)J+=$.normal.y*this.min.y,Q+=$.normal.y*this.max.y;else J+=$.normal.y*this.max.y,Q+=$.normal.y*this.min.y;if($.normal.z>0)J+=$.normal.z*this.min.z,Q+=$.normal.z*this.max.z;else J+=$.normal.z*this.max.z,Q+=$.normal.z*this.min.z;return J<=-$.constant&&Q>=-$.constant}intersectsTriangle($){if(this.isEmpty())return!1;this.getCenter(c6),n9.subVectors(this.max,c6),t7.subVectors($.a,c6),e7.subVectors($.b,c6),$6.subVectors($.c,c6),t8.subVectors(e7,t7),e8.subVectors($6,e7),I7.subVectors(t7,$6);let J=[0,-t8.z,t8.y,0,-e8.z,e8.y,0,-I7.z,I7.y,t8.z,0,-t8.x,e8.z,0,-e8.x,I7.z,0,-I7.x,-t8.y,t8.x,0,-e8.y,e8.x,0,-I7.y,I7.x,0];if(!lJ(J,t7,e7,$6,n9))return!1;if(J=[1,0,0,0,1,0,0,0,1],!lJ(J,t7,e7,$6,n9))return!1;return s9.crossVectors(t8,e8),J=[s9.x,s9.y,s9.z],lJ(J,t7,e7,$6,n9)}clampPoint($,J){return J.copy($).clamp(this.min,this.max)}distanceToPoint($){return this.clampPoint($,q8).distanceTo($)}getBoundingSphere($){if(this.isEmpty())$.makeEmpty();else this.getCenter($.center),$.radius=this.getSize(q8).length()*0.5;return $}intersect($){if(this.min.max($.min),this.max.min($.max),this.isEmpty())this.makeEmpty();return this}union($){return this.min.min($.min),this.max.max($.max),this}applyMatrix4($){if(this.isEmpty())return this;return f8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4($),f8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4($),f8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4($),f8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4($),f8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4($),f8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4($),f8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4($),f8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4($),this.setFromPoints(f8),this}translate($){return this.min.add($),this.max.add($),this}equals($){return $.min.equals(this.min)&&$.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON($){return this.min.fromArray($.min),this.max.fromArray($.max),this}}var f8=[new g,new g,new g,new g,new g,new g,new g,new g],q8=new g,c9=new m1,t7=new g,e7=new g,$6=new g,t8=new g,e8=new g,I7=new g,c6=new g,n9=new g,s9=new g,P7=new g;function lJ($,J,Q,Z,W){for(let K=0,X=$.length-3;K<=X;K+=3){P7.fromArray($,K);let H=W.x*Math.abs(P7.x)+W.y*Math.abs(P7.y)+W.z*Math.abs(P7.z),Y=J.dot(P7),U=Q.dot(P7),G=Z.dot(P7);if(Math.max(-Math.max(Y,U,G),Math.min(Y,U,G))>H)return!1}return!0}var HU=new m1,n6=new g,uJ=new g;class e1{constructor($=new g,J=-1){this.isSphere=!0,this.center=$,this.radius=J}set($,J){return this.center.copy($),this.radius=J,this}setFromPoints($,J){let Q=this.center;if(J!==void 0)Q.copy(J);else HU.setFromPoints($).getCenter(Q);let Z=0;for(let W=0,K=$.length;W<K;W++)Z=Math.max(Z,Q.distanceToSquared($[W]));return this.radius=Math.sqrt(Z),this}copy($){return this.center.copy($.center),this.radius=$.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint($){return $.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint($){return $.distanceTo(this.center)-this.radius}intersectsSphere($){let J=this.radius+$.radius;return $.center.distanceToSquared(this.center)<=J*J}intersectsBox($){return $.intersectsSphere(this)}intersectsPlane($){return Math.abs($.distanceToPoint(this.center))<=this.radius}clampPoint($,J){let Q=this.center.distanceToSquared($);if(J.copy($),Q>this.radius*this.radius)J.sub(this.center).normalize(),J.multiplyScalar(this.radius).add(this.center);return J}getBoundingBox($){if(this.isEmpty())return $.makeEmpty(),$;return $.set(this.center,this.center),$.expandByScalar(this.radius),$}applyMatrix4($){return this.center.applyMatrix4($),this.radius=this.radius*$.getMaxScaleOnAxis(),this}translate($){return this.center.add($),this}expandByPoint($){if(this.isEmpty())return this.center.copy($),this.radius=0,this;n6.subVectors($,this.center);let J=n6.lengthSq();if(J>this.radius*this.radius){let Q=Math.sqrt(J),Z=(Q-this.radius)*0.5;this.center.addScaledVector(n6,Z/Q),this.radius+=Z}return this}union($){if($.isEmpty())return this;if(this.isEmpty())return this.copy($),this;if(this.center.equals($.center)===!0)this.radius=Math.max(this.radius,$.radius);else uJ.subVectors($.center,this.center).setLength($.radius),this.expandByPoint(n6.copy($.center).add(uJ)),this.expandByPoint(n6.copy($.center).sub(uJ));return this}equals($){return $.center.equals(this.center)&&$.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON($){return this.radius=$.radius,this.center.fromArray($.center),this}}var v8=new g,mJ=new g,o9=new g,$7=new g,dJ=new g,i9=new g,cJ=new g;class V6{constructor($=new g,J=new g(0,0,-1)){this.origin=$,this.direction=J}set($,J){return this.origin.copy($),this.direction.copy(J),this}copy($){return this.origin.copy($.origin),this.direction.copy($.direction),this}at($,J){return J.copy(this.origin).addScaledVector(this.direction,$)}lookAt($){return this.direction.copy($).sub(this.origin).normalize(),this}recast($){return this.origin.copy(this.at($,v8)),this}closestPointToPoint($,J){J.subVectors($,this.origin);let Q=J.dot(this.direction);if(Q<0)return J.copy(this.origin);return J.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint($){return Math.sqrt(this.distanceSqToPoint($))}distanceSqToPoint($){let J=v8.subVectors($,this.origin).dot(this.direction);if(J<0)return this.origin.distanceToSquared($);return v8.copy(this.origin).addScaledVector(this.direction,J),v8.distanceToSquared($)}distanceSqToSegment($,J,Q,Z){mJ.copy($).add(J).multiplyScalar(0.5),o9.copy(J).sub($).normalize(),$7.copy(this.origin).sub(mJ);let W=$.distanceTo(J)*0.5,K=-this.direction.dot(o9),X=$7.dot(this.direction),H=-$7.dot(o9),Y=$7.lengthSq(),U=Math.abs(1-K*K),G,E,q,M;if(U>0)if(G=K*H-X,E=K*X-H,M=W*U,G>=0)if(E>=-M)if(E<=M){let O=1/U;G*=O,E*=O,q=G*(G+K*E+2*X)+E*(K*G+E+2*H)+Y}else E=W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;else E=-W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;else if(E<=-M)G=Math.max(0,-(-K*W+X)),E=G>0?-W:Math.min(Math.max(-W,-H),W),q=-G*G+E*(E+2*H)+Y;else if(E<=M)G=0,E=Math.min(Math.max(-W,-H),W),q=E*(E+2*H)+Y;else G=Math.max(0,-(K*W+X)),E=G>0?W:Math.min(Math.max(-W,-H),W),q=-G*G+E*(E+2*H)+Y;else E=K>0?-W:W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;if(Q)Q.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(mJ).addScaledVector(o9,E);return q}intersectSphere($,J){v8.subVectors($.center,this.origin);let Q=v8.dot(this.direction),Z=v8.dot(v8)-Q*Q,W=$.radius*$.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),X=Q-K,H=Q+K;if(H<0)return null;if(X<0)return this.at(H,J);return this.at(X,J)}intersectsSphere($){if($.radius<0)return!1;return this.distanceSqToPoint($.center)<=$.radius*$.radius}distanceToPlane($){let J=$.normal.dot(this.direction);if(J===0){if($.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot($.normal)+$.constant)/J;return Q>=0?Q:null}intersectPlane($,J){let Q=this.distanceToPlane($);if(Q===null)return null;return this.at(Q,J)}intersectsPlane($){let J=$.distanceToPoint(this.origin);if(J===0)return!0;if($.normal.dot(this.direction)*J<0)return!0;return!1}intersectBox($,J){let Q,Z,W,K,X,H,Y=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(Y>=0)Q=($.min.x-E.x)*Y,Z=($.max.x-E.x)*Y;else Q=($.max.x-E.x)*Y,Z=($.min.x-E.x)*Y;if(U>=0)W=($.min.y-E.y)*U,K=($.max.y-E.y)*U;else W=($.max.y-E.y)*U,K=($.min.y-E.y)*U;if(Q>K||W>Z)return null;if(W>Q||isNaN(Q))Q=W;if(K<Z||isNaN(Z))Z=K;if(G>=0)X=($.min.z-E.z)*G,H=($.max.z-E.z)*G;else X=($.max.z-E.z)*G,H=($.min.z-E.z)*G;if(Q>H||X>Z)return null;if(X>Q||Q!==Q)Q=X;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at(Q>=0?Q:Z,J)}intersectsBox($){return this.intersectBox($,v8)!==null}intersectTriangle($,J,Q,Z,W){dJ.subVectors(J,$),i9.subVectors(Q,$),cJ.crossVectors(dJ,i9);let K=this.direction.dot(cJ),X;if(K>0){if(Z)return null;X=1}else if(K<0)X=-1,K=-K;else return null;$7.subVectors(this.origin,$);let H=X*this.direction.dot(i9.crossVectors($7,i9));if(H<0)return null;let Y=X*this.direction.dot(dJ.cross($7));if(Y<0)return null;if(H+Y>K)return null;let U=-X*$7.dot(cJ);if(U<0)return null;return this.at(U/K,W)}applyMatrix4($){return this.origin.applyMatrix4($),this.direction.transformDirection($),this}equals($){return $.origin.equals(this.origin)&&$.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class g0{constructor($,J,Q,Z,W,K,X,H,Y,U,G,E,q,M,O,F){if(g0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],$!==void 0)this.set($,J,Q,Z,W,K,X,H,Y,U,G,E,q,M,O,F)}set($,J,Q,Z,W,K,X,H,Y,U,G,E,q,M,O,F){let N=this.elements;return N[0]=$,N[4]=J,N[8]=Q,N[12]=Z,N[1]=W,N[5]=K,N[9]=X,N[13]=H,N[2]=Y,N[6]=U,N[10]=G,N[14]=E,N[3]=q,N[7]=M,N[11]=O,N[15]=F,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new g0().fromArray(this.elements)}copy($){let J=this.elements,Q=$.elements;return J[0]=Q[0],J[1]=Q[1],J[2]=Q[2],J[3]=Q[3],J[4]=Q[4],J[5]=Q[5],J[6]=Q[6],J[7]=Q[7],J[8]=Q[8],J[9]=Q[9],J[10]=Q[10],J[11]=Q[11],J[12]=Q[12],J[13]=Q[13],J[14]=Q[14],J[15]=Q[15],this}copyPosition($){let J=this.elements,Q=$.elements;return J[12]=Q[12],J[13]=Q[13],J[14]=Q[14],this}setFromMatrix3($){let J=$.elements;return this.set(J[0],J[3],J[6],0,J[1],J[4],J[7],0,J[2],J[5],J[8],0,0,0,0,1),this}extractBasis($,J,Q){return $.setFromMatrixColumn(this,0),J.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis($,J,Q){return this.set($.x,J.x,Q.x,0,$.y,J.y,Q.y,0,$.z,J.z,Q.z,0,0,0,0,1),this}extractRotation($){let J=this.elements,Q=$.elements,Z=1/J6.setFromMatrixColumn($,0).length(),W=1/J6.setFromMatrixColumn($,1).length(),K=1/J6.setFromMatrixColumn($,2).length();return J[0]=Q[0]*Z,J[1]=Q[1]*Z,J[2]=Q[2]*Z,J[3]=0,J[4]=Q[4]*W,J[5]=Q[5]*W,J[6]=Q[6]*W,J[7]=0,J[8]=Q[8]*K,J[9]=Q[9]*K,J[10]=Q[10]*K,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromEuler($){let J=this.elements,Q=$.x,Z=$.y,W=$.z,K=Math.cos(Q),X=Math.sin(Q),H=Math.cos(Z),Y=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if($.order==="XYZ"){let E=K*U,q=K*G,M=X*U,O=X*G;J[0]=H*U,J[4]=-H*G,J[8]=Y,J[1]=q+M*Y,J[5]=E-O*Y,J[9]=-X*H,J[2]=O-E*Y,J[6]=M+q*Y,J[10]=K*H}else if($.order==="YXZ"){let E=H*U,q=H*G,M=Y*U,O=Y*G;J[0]=E+O*X,J[4]=M*X-q,J[8]=K*Y,J[1]=K*G,J[5]=K*U,J[9]=-X,J[2]=q*X-M,J[6]=O+E*X,J[10]=K*H}else if($.order==="ZXY"){let E=H*U,q=H*G,M=Y*U,O=Y*G;J[0]=E-O*X,J[4]=-K*G,J[8]=M+q*X,J[1]=q+M*X,J[5]=K*U,J[9]=O-E*X,J[2]=-K*Y,J[6]=X,J[10]=K*H}else if($.order==="ZYX"){let E=K*U,q=K*G,M=X*U,O=X*G;J[0]=H*U,J[4]=M*Y-q,J[8]=E*Y+O,J[1]=H*G,J[5]=O*Y+E,J[9]=q*Y-M,J[2]=-Y,J[6]=X*H,J[10]=K*H}else if($.order==="YZX"){let E=K*H,q=K*Y,M=X*H,O=X*Y;J[0]=H*U,J[4]=O-E*G,J[8]=M*G+q,J[1]=G,J[5]=K*U,J[9]=-X*U,J[2]=-Y*U,J[6]=q*G+M,J[10]=E-O*G}else if($.order==="XZY"){let E=K*H,q=K*Y,M=X*H,O=X*Y;J[0]=H*U,J[4]=-G,J[8]=Y*U,J[1]=E*G+O,J[5]=K*U,J[9]=q*G-M,J[2]=M*G-q,J[6]=X*U,J[10]=O*G+E}return J[3]=0,J[7]=0,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromQuaternion($){return this.compose(YU,$,UU)}lookAt($,J,Q){let Z=this.elements;if(a1.subVectors($,J),a1.lengthSq()===0)a1.z=1;if(a1.normalize(),J7.crossVectors(Q,a1),J7.lengthSq()===0){if(Math.abs(Q.z)===1)a1.x+=0.0001;else a1.z+=0.0001;a1.normalize(),J7.crossVectors(Q,a1)}return J7.normalize(),a9.crossVectors(a1,J7),Z[0]=J7.x,Z[4]=a9.x,Z[8]=a1.x,Z[1]=J7.y,Z[5]=a9.y,Z[9]=a1.y,Z[2]=J7.z,Z[6]=a9.z,Z[10]=a1.z,this}multiply($){return this.multiplyMatrices(this,$)}premultiply($){return this.multiplyMatrices($,this)}multiplyMatrices($,J){let Q=$.elements,Z=J.elements,W=this.elements,K=Q[0],X=Q[4],H=Q[8],Y=Q[12],U=Q[1],G=Q[5],E=Q[9],q=Q[13],M=Q[2],O=Q[6],F=Q[10],N=Q[14],R=Q[3],_=Q[7],L=Q[11],k=Q[15],P=Z[0],C=Z[4],S=Z[8],b=Z[12],B=Z[1],D=Z[5],I=Z[9],w=Z[13],A=Z[2],f=Z[6],h=Z[10],x=Z[14],p=Z[3],y=Z[7],o=Z[11],a=Z[15];return W[0]=K*P+X*B+H*A+Y*p,W[4]=K*C+X*D+H*f+Y*y,W[8]=K*S+X*I+H*h+Y*o,W[12]=K*b+X*w+H*x+Y*a,W[1]=U*P+G*B+E*A+q*p,W[5]=U*C+G*D+E*f+q*y,W[9]=U*S+G*I+E*h+q*o,W[13]=U*b+G*w+E*x+q*a,W[2]=M*P+O*B+F*A+N*p,W[6]=M*C+O*D+F*f+N*y,W[10]=M*S+O*I+F*h+N*o,W[14]=M*b+O*w+F*x+N*a,W[3]=R*P+_*B+L*A+k*p,W[7]=R*C+_*D+L*f+k*y,W[11]=R*S+_*I+L*h+k*o,W[15]=R*b+_*w+L*x+k*a,this}multiplyScalar($){let J=this.elements;return J[0]*=$,J[4]*=$,J[8]*=$,J[12]*=$,J[1]*=$,J[5]*=$,J[9]*=$,J[13]*=$,J[2]*=$,J[6]*=$,J[10]*=$,J[14]*=$,J[3]*=$,J[7]*=$,J[11]*=$,J[15]*=$,this}determinant(){let $=this.elements,J=$[0],Q=$[4],Z=$[8],W=$[12],K=$[1],X=$[5],H=$[9],Y=$[13],U=$[2],G=$[6],E=$[10],q=$[14],M=$[3],O=$[7],F=$[11],N=$[15];return M*(+W*H*G-Z*Y*G-W*X*E+Q*Y*E+Z*X*q-Q*H*q)+O*(+J*H*q-J*Y*E+W*K*E-Z*K*q+Z*Y*U-W*H*U)+F*(+J*Y*G-J*X*q-W*K*G+Q*K*q+W*X*U-Q*Y*U)+N*(-Z*X*U-J*H*G+J*X*E+Z*K*G-Q*K*E+Q*H*U)}transpose(){let $=this.elements,J;return J=$[1],$[1]=$[4],$[4]=J,J=$[2],$[2]=$[8],$[8]=J,J=$[6],$[6]=$[9],$[9]=J,J=$[3],$[3]=$[12],$[12]=J,J=$[7],$[7]=$[13],$[13]=J,J=$[11],$[11]=$[14],$[14]=J,this}setPosition($,J,Q){let Z=this.elements;if($.isVector3)Z[12]=$.x,Z[13]=$.y,Z[14]=$.z;else Z[12]=$,Z[13]=J,Z[14]=Q;return this}invert(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8],G=$[9],E=$[10],q=$[11],M=$[12],O=$[13],F=$[14],N=$[15],R=G*F*Y-O*E*Y+O*H*q-X*F*q-G*H*N+X*E*N,_=M*E*Y-U*F*Y-M*H*q+K*F*q+U*H*N-K*E*N,L=U*O*Y-M*G*Y+M*X*q-K*O*q-U*X*N+K*G*N,k=M*G*H-U*O*H-M*X*E+K*O*E+U*X*F-K*G*F,P=J*R+Q*_+Z*L+W*k;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return $[0]=R*C,$[1]=(O*E*W-G*F*W-O*Z*q+Q*F*q+G*Z*N-Q*E*N)*C,$[2]=(X*F*W-O*H*W+O*Z*Y-Q*F*Y-X*Z*N+Q*H*N)*C,$[3]=(G*H*W-X*E*W-G*Z*Y+Q*E*Y+X*Z*q-Q*H*q)*C,$[4]=_*C,$[5]=(U*F*W-M*E*W+M*Z*q-J*F*q-U*Z*N+J*E*N)*C,$[6]=(M*H*W-K*F*W-M*Z*Y+J*F*Y+K*Z*N-J*H*N)*C,$[7]=(K*E*W-U*H*W+U*Z*Y-J*E*Y-K*Z*q+J*H*q)*C,$[8]=L*C,$[9]=(M*G*W-U*O*W-M*Q*q+J*O*q+U*Q*N-J*G*N)*C,$[10]=(K*O*W-M*X*W+M*Q*Y-J*O*Y-K*Q*N+J*X*N)*C,$[11]=(U*X*W-K*G*W-U*Q*Y+J*G*Y+K*Q*q-J*X*q)*C,$[12]=k*C,$[13]=(U*O*Z-M*G*Z+M*Q*E-J*O*E-U*Q*F+J*G*F)*C,$[14]=(M*X*Z-K*O*Z-M*Q*H+J*O*H+K*Q*F-J*X*F)*C,$[15]=(K*G*Z-U*X*Z+U*Q*H-J*G*H-K*Q*E+J*X*E)*C,this}scale($){let J=this.elements,Q=$.x,Z=$.y,W=$.z;return J[0]*=Q,J[4]*=Z,J[8]*=W,J[1]*=Q,J[5]*=Z,J[9]*=W,J[2]*=Q,J[6]*=Z,J[10]*=W,J[3]*=Q,J[7]*=Z,J[11]*=W,this}getMaxScaleOnAxis(){let $=this.elements,J=$[0]*$[0]+$[1]*$[1]+$[2]*$[2],Q=$[4]*$[4]+$[5]*$[5]+$[6]*$[6],Z=$[8]*$[8]+$[9]*$[9]+$[10]*$[10];return Math.sqrt(Math.max(J,Q,Z))}makeTranslation($,J,Q){if($.isVector3)this.set(1,0,0,$.x,0,1,0,$.y,0,0,1,$.z,0,0,0,1);else this.set(1,0,0,$,0,1,0,J,0,0,1,Q,0,0,0,1);return this}makeRotationX($){let J=Math.cos($),Q=Math.sin($);return this.set(1,0,0,0,0,J,-Q,0,0,Q,J,0,0,0,0,1),this}makeRotationY($){let J=Math.cos($),Q=Math.sin($);return this.set(J,0,Q,0,0,1,0,0,-Q,0,J,0,0,0,0,1),this}makeRotationZ($){let J=Math.cos($),Q=Math.sin($);return this.set(J,-Q,0,0,Q,J,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis($,J){let Q=Math.cos(J),Z=Math.sin(J),W=1-Q,K=$.x,X=$.y,H=$.z,Y=W*K,U=W*X;return this.set(Y*K+Q,Y*X-Z*H,Y*H+Z*X,0,Y*X+Z*H,U*X+Q,U*H-Z*K,0,Y*H-Z*X,U*H+Z*K,W*H*H+Q,0,0,0,0,1),this}makeScale($,J,Q){return this.set($,0,0,0,0,J,0,0,0,0,Q,0,0,0,0,1),this}makeShear($,J,Q,Z,W,K){return this.set(1,Q,W,0,$,1,K,0,J,Z,1,0,0,0,0,1),this}compose($,J,Q){let Z=this.elements,W=J._x,K=J._y,X=J._z,H=J._w,Y=W+W,U=K+K,G=X+X,E=W*Y,q=W*U,M=W*G,O=K*U,F=K*G,N=X*G,R=H*Y,_=H*U,L=H*G,k=Q.x,P=Q.y,C=Q.z;return Z[0]=(1-(O+N))*k,Z[1]=(q+L)*k,Z[2]=(M-_)*k,Z[3]=0,Z[4]=(q-L)*P,Z[5]=(1-(E+N))*P,Z[6]=(F+R)*P,Z[7]=0,Z[8]=(M+_)*C,Z[9]=(F-R)*C,Z[10]=(1-(E+O))*C,Z[11]=0,Z[12]=$.x,Z[13]=$.y,Z[14]=$.z,Z[15]=1,this}decompose($,J,Q){let Z=this.elements,W=J6.set(Z[0],Z[1],Z[2]).length(),K=J6.set(Z[4],Z[5],Z[6]).length(),X=J6.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;$.x=Z[12],$.y=Z[13],$.z=Z[14],N8.copy(this);let Y=1/W,U=1/K,G=1/X;return N8.elements[0]*=Y,N8.elements[1]*=Y,N8.elements[2]*=Y,N8.elements[4]*=U,N8.elements[5]*=U,N8.elements[6]*=U,N8.elements[8]*=G,N8.elements[9]*=G,N8.elements[10]*=G,J.setFromRotationMatrix(N8),Q.x=W,Q.y=K,Q.z=X,this}makePerspective($,J,Q,Z,W,K,X=2000,H=!1){let Y=this.elements,U=2*W/(J-$),G=2*W/(Q-Z),E=(J+$)/(J-$),q=(Q+Z)/(Q-Z),M,O;if(H)M=W/(K-W),O=K*W/(K-W);else if(X===2000)M=-(K+W)/(K-W),O=-2*K*W/(K-W);else if(X===2001)M=-K/(K-W),O=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return Y[0]=U,Y[4]=0,Y[8]=E,Y[12]=0,Y[1]=0,Y[5]=G,Y[9]=q,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=M,Y[14]=O,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic($,J,Q,Z,W,K,X=2000,H=!1){let Y=this.elements,U=2/(J-$),G=2/(Q-Z),E=-(J+$)/(J-$),q=-(Q+Z)/(Q-Z),M,O;if(H)M=1/(K-W),O=K/(K-W);else if(X===2000)M=-2/(K-W),O=-(K+W)/(K-W);else if(X===2001)M=-1/(K-W),O=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return Y[0]=U,Y[4]=0,Y[8]=0,Y[12]=E,Y[1]=0,Y[5]=G,Y[9]=0,Y[13]=q,Y[2]=0,Y[6]=0,Y[10]=M,Y[14]=O,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals($){let J=this.elements,Q=$.elements;for(let Z=0;Z<16;Z++)if(J[Z]!==Q[Z])return!1;return!0}fromArray($,J=0){for(let Q=0;Q<16;Q++)this.elements[Q]=$[Q+J];return this}toArray($=[],J=0){let Q=this.elements;return $[J]=Q[0],$[J+1]=Q[1],$[J+2]=Q[2],$[J+3]=Q[3],$[J+4]=Q[4],$[J+5]=Q[5],$[J+6]=Q[6],$[J+7]=Q[7],$[J+8]=Q[8],$[J+9]=Q[9],$[J+10]=Q[10],$[J+11]=Q[11],$[J+12]=Q[12],$[J+13]=Q[13],$[J+14]=Q[14],$[J+15]=Q[15],$}}var J6=new g,N8=new g0,YU=new g(0,0,0),UU=new g(1,1,1),J7=new g,a9=new g,a1=new g,y5=new g0,h5=new L8;class O8{constructor($=0,J=0,Q=0,Z=O8.DEFAULT_ORDER){this.isEuler=!0,this._x=$,this._y=J,this._z=Q,this._order=Z}get x(){return this._x}set x($){this._x=$,this._onChangeCallback()}get y(){return this._y}set y($){this._y=$,this._onChangeCallback()}get z(){return this._z}set z($){this._z=$,this._onChangeCallback()}get order(){return this._order}set order($){this._order=$,this._onChangeCallback()}set($,J,Q,Z=this._order){return this._x=$,this._y=J,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy($){return this._x=$._x,this._y=$._y,this._z=$._z,this._order=$._order,this._onChangeCallback(),this}setFromRotationMatrix($,J=this._order,Q=!0){let Z=$.elements,W=Z[0],K=Z[4],X=Z[8],H=Z[1],Y=Z[5],U=Z[9],G=Z[2],E=Z[6],q=Z[10];switch(J){case"XYZ":if(this._y=Math.asin(c0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,Y),this._z=0;break;case"YXZ":if(this._x=Math.asin(-c0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(H,Y);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(c0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-K,Y);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-c0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-K,Y);break;case"YZX":if(this._z=Math.asin(c0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,Y),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-c0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,Y),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+J)}if(this._order=J,Q===!0)this._onChangeCallback();return this}setFromQuaternion($,J,Q){return y5.makeRotationFromQuaternion($),this.setFromRotationMatrix(y5,J,Q)}setFromVector3($,J=this._order){return this.set($.x,$.y,$.z,J)}reorder($){return h5.setFromEuler(this),this.setFromQuaternion(h5,$)}equals($){return $._x===this._x&&$._y===this._y&&$._z===this._z&&$._order===this._order}fromArray($){if(this._x=$[0],this._y=$[1],this._z=$[2],$[3]!==void 0)this._order=$[3];return this._onChangeCallback(),this}toArray($=[],J=0){return $[J]=this._x,$[J+1]=this._y,$[J+2]=this._z,$[J+3]=this._order,$}_onChange($){return this._onChangeCallback=$,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}O8.DEFAULT_ORDER="XYZ";class h${constructor(){this.mask=1}set($){this.mask=(1<<$|0)>>>0}enable($){this.mask|=1<<$|0}enableAll(){this.mask=-1}toggle($){this.mask^=1<<$|0}disable($){this.mask&=~(1<<$|0)}disableAll(){this.mask=0}test($){return(this.mask&$.mask)!==0}isEnabled($){return(this.mask&(1<<$|0))!==0}}var GU=0,b5=new g,Q6=new L8,y8=new g0,r9=new g,s6=new g,EU=new g,qU=new L8,x5=new g(1,0,0),g5=new g(0,1,0),p5=new g(0,0,1),l5={type:"added"},NU={type:"removed"},Z6={type:"childadded",child:null},nJ={type:"childremoved",child:null};class E1 extends Y7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:GU++}),this.uuid=F8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=E1.DEFAULT_UP.clone();let $=new g,J=new O8,Q=new L8,Z=new g(1,1,1);function W(){Q.setFromEuler(J,!1)}function K(){J.setFromQuaternion(Q,void 0,!1)}J._onChange(W),Q._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:$},rotation:{configurable:!0,enumerable:!0,value:J},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new g0},normalMatrix:{value:new p0}}),this.matrix=new g0,this.matrixWorld=new g0,this.matrixAutoUpdate=E1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=E1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h$,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4($){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply($),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion($){return this.quaternion.premultiply($),this}setRotationFromAxisAngle($,J){this.quaternion.setFromAxisAngle($,J)}setRotationFromEuler($){this.quaternion.setFromEuler($,!0)}setRotationFromMatrix($){this.quaternion.setFromRotationMatrix($)}setRotationFromQuaternion($){this.quaternion.copy($)}rotateOnAxis($,J){return Q6.setFromAxisAngle($,J),this.quaternion.multiply(Q6),this}rotateOnWorldAxis($,J){return Q6.setFromAxisAngle($,J),this.quaternion.premultiply(Q6),this}rotateX($){return this.rotateOnAxis(x5,$)}rotateY($){return this.rotateOnAxis(g5,$)}rotateZ($){return this.rotateOnAxis(p5,$)}translateOnAxis($,J){return b5.copy($).applyQuaternion(this.quaternion),this.position.add(b5.multiplyScalar(J)),this}translateX($){return this.translateOnAxis(x5,$)}translateY($){return this.translateOnAxis(g5,$)}translateZ($){return this.translateOnAxis(p5,$)}localToWorld($){return this.updateWorldMatrix(!0,!1),$.applyMatrix4(this.matrixWorld)}worldToLocal($){return this.updateWorldMatrix(!0,!1),$.applyMatrix4(y8.copy(this.matrixWorld).invert())}lookAt($,J,Q){if($.isVector3)r9.copy($);else r9.set($,J,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),s6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)y8.lookAt(s6,r9,this.up);else y8.lookAt(r9,s6,this.up);if(this.quaternion.setFromRotationMatrix(y8),Z)y8.extractRotation(Z.matrixWorld),Q6.setFromRotationMatrix(y8),this.quaternion.premultiply(Q6.invert())}add($){if(arguments.length>1){for(let J=0;J<arguments.length;J++)this.add(arguments[J]);return this}if($===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",$),this;if($&&$.isObject3D)$.removeFromParent(),$.parent=this,this.children.push($),$.dispatchEvent(l5),Z6.child=$,this.dispatchEvent(Z6),Z6.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",$);return this}remove($){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let J=this.children.indexOf($);if(J!==-1)$.parent=null,this.children.splice(J,1),$.dispatchEvent(NU),nJ.child=$,this.dispatchEvent(nJ),nJ.child=null;return this}removeFromParent(){let $=this.parent;if($!==null)$.remove(this);return this}clear(){return this.remove(...this.children)}attach($){if(this.updateWorldMatrix(!0,!1),y8.copy(this.matrixWorld).invert(),$.parent!==null)$.parent.updateWorldMatrix(!0,!1),y8.multiply($.parent.matrixWorld);return $.applyMatrix4(y8),$.removeFromParent(),$.parent=this,this.children.push($),$.updateWorldMatrix(!1,!0),$.dispatchEvent(l5),Z6.child=$,this.dispatchEvent(Z6),Z6.child=null,this}getObjectById($){return this.getObjectByProperty("id",$)}getObjectByName($){return this.getObjectByProperty("name",$)}getObjectByProperty($,J){if(this[$]===J)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let K=this.children[Q].getObjectByProperty($,J);if(K!==void 0)return K}return}getObjectsByProperty($,J,Q=[]){if(this[$]===J)Q.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty($,J,Q);return Q}getWorldPosition($){return this.updateWorldMatrix(!0,!1),$.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion($){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s6,$,EU),$}getWorldScale($){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s6,qU,$),$}getWorldDirection($){this.updateWorldMatrix(!0,!1);let J=this.matrixWorld.elements;return $.set(J[8],J[9],J[10]).normalize()}raycast(){}traverse($){$(this);let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].traverse($)}traverseVisible($){if(this.visible===!1)return;$(this);let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].traverseVisible($)}traverseAncestors($){let J=this.parent;if(J!==null)$(J),J.traverseAncestors($)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld($){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].updateMatrixWorld($)}updateWorldMatrix($,J){let Q=this.parent;if($===!0&&Q!==null)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(J===!0){let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON($){let J=$===void 0||typeof $==="string",Q={};if(J)$={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON($),Z.indirectTexture=this._indirectTexture.toJSON($),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON($);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(X,H){if(X[H.uuid]===void 0)X[H.uuid]=H.toJSON($);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON($).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON($).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W($.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let H=X.shapes;if(Array.isArray(H))for(let Y=0,U=H.length;Y<U;Y++){let G=H[Y];W($.shapes,G)}else W($.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W($.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let H=0,Y=this.material.length;H<Y;H++)X.push(W($.materials,this.material[H]));Z.material=X}else Z.material=W($.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON($).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let H=this.animations[X];Z.animations.push(W($.animations,H))}}if(J){let X=K($.geometries),H=K($.materials),Y=K($.textures),U=K($.images),G=K($.shapes),E=K($.skeletons),q=K($.animations),M=K($.nodes);if(X.length>0)Q.geometries=X;if(H.length>0)Q.materials=H;if(Y.length>0)Q.textures=Y;if(U.length>0)Q.images=U;if(G.length>0)Q.shapes=G;if(E.length>0)Q.skeletons=E;if(q.length>0)Q.animations=q;if(M.length>0)Q.nodes=M}return Q.object=Z,Q;function K(X){let H=[];for(let Y in X){let U=X[Y];delete U.metadata,H.push(U)}return H}}clone($){return new this.constructor().copy(this,$)}copy($,J=!0){if(this.name=$.name,this.up.copy($.up),this.position.copy($.position),this.rotation.order=$.rotation.order,this.quaternion.copy($.quaternion),this.scale.copy($.scale),this.matrix.copy($.matrix),this.matrixWorld.copy($.matrixWorld),this.matrixAutoUpdate=$.matrixAutoUpdate,this.matrixWorldAutoUpdate=$.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=$.matrixWorldNeedsUpdate,this.layers.mask=$.layers.mask,this.visible=$.visible,this.castShadow=$.castShadow,this.receiveShadow=$.receiveShadow,this.frustumCulled=$.frustumCulled,this.renderOrder=$.renderOrder,this.animations=$.animations.slice(),this.userData=JSON.parse(JSON.stringify($.userData)),J===!0)for(let Q=0;Q<$.children.length;Q++){let Z=$.children[Q];this.add(Z.clone())}return this}}E1.DEFAULT_UP=new g(0,1,0);E1.DEFAULT_MATRIX_AUTO_UPDATE=!0;E1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var M8=new g,h8=new g,sJ=new g,b8=new g,W6=new g,K6=new g,u5=new g,oJ=new g,iJ=new g,aJ=new g,rJ=new i0,tJ=new i0,eJ=new i0;class X8{constructor($=new g,J=new g,Q=new g){this.a=$,this.b=J,this.c=Q}static getNormal($,J,Q,Z){Z.subVectors(Q,J),M8.subVectors($,J),Z.cross(M8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord($,J,Q,Z,W){M8.subVectors(Z,J),h8.subVectors(Q,J),sJ.subVectors($,J);let K=M8.dot(M8),X=M8.dot(h8),H=M8.dot(sJ),Y=h8.dot(h8),U=h8.dot(sJ),G=K*Y-X*X;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(Y*H-X*U)*E,M=(K*U-X*H)*E;return W.set(1-q-M,M,q)}static containsPoint($,J,Q,Z){if(this.getBarycoord($,J,Q,Z,b8)===null)return!1;return b8.x>=0&&b8.y>=0&&b8.x+b8.y<=1}static getInterpolation($,J,Q,Z,W,K,X,H){if(this.getBarycoord($,J,Q,Z,b8)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,b8.x),H.addScaledVector(K,b8.y),H.addScaledVector(X,b8.z),H}static getInterpolatedAttribute($,J,Q,Z,W,K){return rJ.setScalar(0),tJ.setScalar(0),eJ.setScalar(0),rJ.fromBufferAttribute($,J),tJ.fromBufferAttribute($,Q),eJ.fromBufferAttribute($,Z),K.setScalar(0),K.addScaledVector(rJ,W.x),K.addScaledVector(tJ,W.y),K.addScaledVector(eJ,W.z),K}static isFrontFacing($,J,Q,Z){return M8.subVectors(Q,J),h8.subVectors($,J),M8.cross(h8).dot(Z)<0?!0:!1}set($,J,Q){return this.a.copy($),this.b.copy(J),this.c.copy(Q),this}setFromPointsAndIndices($,J,Q,Z){return this.a.copy($[J]),this.b.copy($[Q]),this.c.copy($[Z]),this}setFromAttributeAndIndices($,J,Q,Z){return this.a.fromBufferAttribute($,J),this.b.fromBufferAttribute($,Q),this.c.fromBufferAttribute($,Z),this}clone(){return new this.constructor().copy(this)}copy($){return this.a.copy($.a),this.b.copy($.b),this.c.copy($.c),this}getArea(){return M8.subVectors(this.c,this.b),h8.subVectors(this.a,this.b),M8.cross(h8).length()*0.5}getMidpoint($){return $.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal($){return X8.getNormal(this.a,this.b,this.c,$)}getPlane($){return $.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord($,J){return X8.getBarycoord($,this.a,this.b,this.c,J)}getInterpolation($,J,Q,Z,W){return X8.getInterpolation($,this.a,this.b,this.c,J,Q,Z,W)}containsPoint($){return X8.containsPoint($,this.a,this.b,this.c)}isFrontFacing($){return X8.isFrontFacing(this.a,this.b,this.c,$)}intersectsBox($){return $.intersectsTriangle(this)}closestPointToPoint($,J){let Q=this.a,Z=this.b,W=this.c,K,X;W6.subVectors(Z,Q),K6.subVectors(W,Q),oJ.subVectors($,Q);let H=W6.dot(oJ),Y=K6.dot(oJ);if(H<=0&&Y<=0)return J.copy(Q);iJ.subVectors($,Z);let U=W6.dot(iJ),G=K6.dot(iJ);if(U>=0&&G<=U)return J.copy(Z);let E=H*G-U*Y;if(E<=0&&H>=0&&U<=0)return K=H/(H-U),J.copy(Q).addScaledVector(W6,K);aJ.subVectors($,W);let q=W6.dot(aJ),M=K6.dot(aJ);if(M>=0&&q<=M)return J.copy(W);let O=q*Y-H*M;if(O<=0&&Y>=0&&M<=0)return X=Y/(Y-M),J.copy(Q).addScaledVector(K6,X);let F=U*M-q*G;if(F<=0&&G-U>=0&&q-M>=0)return u5.subVectors(W,Z),X=(G-U)/(G-U+(q-M)),J.copy(Z).addScaledVector(u5,X);let N=1/(F+O+E);return K=O*N,X=E*N,J.copy(Q).addScaledVector(W6,K).addScaledVector(K6,X)}equals($){return $.a.equals(this.a)&&$.b.equals(this.b)&&$.c.equals(this.c)}}var qK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Q7={h:0,s:0,l:0},t9={h:0,s:0,l:0};function $Q($,J,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return $+(J-$)*6*Q;if(Q<0.5)return J;if(Q<0.6666666666666666)return $+(J-$)*6*(0.6666666666666666-Q);return $}class y0{constructor($,J,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set($,J,Q)}set($,J,Q){if(J===void 0&&Q===void 0){let Z=$;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB($,J,Q);return this}setScalar($){return this.r=$,this.g=$,this.b=$,this}setHex($,J="srgb"){return $=Math.floor($),this.r=($>>16&255)/255,this.g=($>>8&255)/255,this.b=($&255)/255,o0.colorSpaceToWorking(this,J),this}setRGB($,J,Q,Z=o0.workingColorSpace){return this.r=$,this.g=J,this.b=Q,o0.colorSpaceToWorking(this,Z),this}setHSL($,J,Q,Z=o0.workingColorSpace){if($=QZ($,1),J=c0(J,0,1),Q=c0(Q,0,1),J===0)this.r=this.g=this.b=Q;else{let W=Q<=0.5?Q*(1+J):Q+J-Q*J,K=2*Q-W;this.r=$Q(K,W,$+0.3333333333333333),this.g=$Q(K,W,$),this.b=$Q(K,W,$-0.3333333333333333)}return o0.colorSpaceToWorking(this,Z),this}setStyle($,J="srgb"){function Q(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+$+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec($)){let W,K=Z[1],X=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,J);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,J);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,J);break;default:console.warn("THREE.Color: Unknown color model "+$)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec($)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,J);else if(K===6)return this.setHex(parseInt(W,16),J);else console.warn("THREE.Color: Invalid hex color "+$)}else if($&&$.length>0)return this.setColorName($,J);return this}setColorName($,J="srgb"){let Q=qK[$.toLowerCase()];if(Q!==void 0)this.setHex(Q,J);else console.warn("THREE.Color: Unknown color "+$);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy($){return this.r=$.r,this.g=$.g,this.b=$.b,this}copySRGBToLinear($){return this.r=p8($.r),this.g=p8($.g),this.b=p8($.b),this}copyLinearToSRGB($){return this.r=E6($.r),this.g=E6($.g),this.b=E6($.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex($="srgb"){return o0.workingToColorSpace(f1.copy(this),$),Math.round(c0(f1.r*255,0,255))*65536+Math.round(c0(f1.g*255,0,255))*256+Math.round(c0(f1.b*255,0,255))}getHexString($="srgb"){return("000000"+this.getHex($).toString(16)).slice(-6)}getHSL($,J=o0.workingColorSpace){o0.workingToColorSpace(f1.copy(this),J);let{r:Q,g:Z,b:W}=f1,K=Math.max(Q,Z,W),X=Math.min(Q,Z,W),H,Y,U=(X+K)/2;if(X===K)H=0,Y=0;else{let G=K-X;switch(Y=U<=0.5?G/(K+X):G/(2-K-X),K){case Q:H=(Z-W)/G+(Z<W?6:0);break;case Z:H=(W-Q)/G+2;break;case W:H=(Q-Z)/G+4;break}H/=6}return $.h=H,$.s=Y,$.l=U,$}getRGB($,J=o0.workingColorSpace){return o0.workingToColorSpace(f1.copy(this),J),$.r=f1.r,$.g=f1.g,$.b=f1.b,$}getStyle($="srgb"){o0.workingToColorSpace(f1.copy(this),$);let{r:J,g:Q,b:Z}=f1;if($!=="srgb")return`color(${$} ${J.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(J*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL($,J,Q){return this.getHSL(Q7),this.setHSL(Q7.h+$,Q7.s+J,Q7.l+Q)}add($){return this.r+=$.r,this.g+=$.g,this.b+=$.b,this}addColors($,J){return this.r=$.r+J.r,this.g=$.g+J.g,this.b=$.b+J.b,this}addScalar($){return this.r+=$,this.g+=$,this.b+=$,this}sub($){return this.r=Math.max(0,this.r-$.r),this.g=Math.max(0,this.g-$.g),this.b=Math.max(0,this.b-$.b),this}multiply($){return this.r*=$.r,this.g*=$.g,this.b*=$.b,this}multiplyScalar($){return this.r*=$,this.g*=$,this.b*=$,this}lerp($,J){return this.r+=($.r-this.r)*J,this.g+=($.g-this.g)*J,this.b+=($.b-this.b)*J,this}lerpColors($,J,Q){return this.r=$.r+(J.r-$.r)*Q,this.g=$.g+(J.g-$.g)*Q,this.b=$.b+(J.b-$.b)*Q,this}lerpHSL($,J){this.getHSL(Q7),$.getHSL(t9);let Q=$9(Q7.h,t9.h,J),Z=$9(Q7.s,t9.s,J),W=$9(Q7.l,t9.l,J);return this.setHSL(Q,Z,W),this}setFromVector3($){return this.r=$.x,this.g=$.y,this.b=$.z,this}applyMatrix3($){let J=this.r,Q=this.g,Z=this.b,W=$.elements;return this.r=W[0]*J+W[3]*Q+W[6]*Z,this.g=W[1]*J+W[4]*Q+W[7]*Z,this.b=W[2]*J+W[5]*Q+W[8]*Z,this}equals($){return $.r===this.r&&$.g===this.g&&$.b===this.b}fromArray($,J=0){return this.r=$[J],this.g=$[J+1],this.b=$[J+2],this}toArray($=[],J=0){return $[J]=this.r,$[J+1]=this.g,$[J+2]=this.b,$}fromBufferAttribute($,J){return this.r=$.getX(J),this.g=$.getY(J),this.b=$.getZ(J),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var f1=new y0;y0.NAMES=qK;var MU=0;class $8 extends Y7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:MU++}),this.uuid=F8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest($){if(this._alphaTest>0!==$>0)this.version++;this._alphaTest=$}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues($){if($===void 0)return;for(let J in $){let Q=$[J];if(Q===void 0){console.warn(`THREE.Material: parameter '${J}' has value of undefined.`);continue}let Z=this[J];if(Z===void 0){console.warn(`THREE.Material: '${J}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[J]=Q}}toJSON($){let J=$===void 0||typeof $==="string";if(J)$={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON($).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON($).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON($).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON($).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON($).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON($).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON($).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON($).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON($).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON($).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON($).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON($).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON($).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON($).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON($).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON($).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON($).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON($).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON($).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON($).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON($).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON($).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON($).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON($).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON($).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON($).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors===!0)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=!0;if(this.blendSrc!==204)Q.blendSrc=this.blendSrc;if(this.blendDst!==205)Q.blendDst=this.blendDst;if(this.blendEquation!==100)Q.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Q.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Q.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Q.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Q.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Q.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Q.depthFunc=this.depthFunc;if(this.depthTest===!1)Q.depthTest=this.depthTest;if(this.depthWrite===!1)Q.depthWrite=this.depthWrite;if(this.colorWrite===!1)Q.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Q.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Q.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Q.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Q.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Q.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Q.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Q.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Q.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=!0;if(this.alphaToCoverage===!0)Q.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Q.forceSinglePass=!0;if(this.wireframe===!0)Q.wireframe=!0;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=!0;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(W){let K=[];for(let X in W){let H=W[X];delete H.metadata,K.push(H)}return K}if(J){let W=Z($.textures),K=Z($.images);if(W.length>0)Q.textures=W;if(K.length>0)Q.images=K}return Q}clone(){return new this.constructor().copy(this)}copy($){this.name=$.name,this.blending=$.blending,this.side=$.side,this.vertexColors=$.vertexColors,this.opacity=$.opacity,this.transparent=$.transparent,this.blendSrc=$.blendSrc,this.blendDst=$.blendDst,this.blendEquation=$.blendEquation,this.blendSrcAlpha=$.blendSrcAlpha,this.blendDstAlpha=$.blendDstAlpha,this.blendEquationAlpha=$.blendEquationAlpha,this.blendColor.copy($.blendColor),this.blendAlpha=$.blendAlpha,this.depthFunc=$.depthFunc,this.depthTest=$.depthTest,this.depthWrite=$.depthWrite,this.stencilWriteMask=$.stencilWriteMask,this.stencilFunc=$.stencilFunc,this.stencilRef=$.stencilRef,this.stencilFuncMask=$.stencilFuncMask,this.stencilFail=$.stencilFail,this.stencilZFail=$.stencilZFail,this.stencilZPass=$.stencilZPass,this.stencilWrite=$.stencilWrite;let J=$.clippingPlanes,Q=null;if(J!==null){let Z=J.length;Q=Array(Z);for(let W=0;W!==Z;++W)Q[W]=J[W].clone()}return this.clippingPlanes=Q,this.clipIntersection=$.clipIntersection,this.clipShadows=$.clipShadows,this.shadowSide=$.shadowSide,this.colorWrite=$.colorWrite,this.precision=$.precision,this.polygonOffset=$.polygonOffset,this.polygonOffsetFactor=$.polygonOffsetFactor,this.polygonOffsetUnits=$.polygonOffsetUnits,this.dithering=$.dithering,this.alphaTest=$.alphaTest,this.alphaHash=$.alphaHash,this.alphaToCoverage=$.alphaToCoverage,this.premultipliedAlpha=$.premultipliedAlpha,this.forceSinglePass=$.forceSinglePass,this.visible=$.visible,this.toneMapped=$.toneMapped,this.userData=JSON.parse(JSON.stringify($.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate($){if($===!0)this.version++}}class A8 extends $8{constructor($){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.lightMap=$.lightMap,this.lightMapIntensity=$.lightMapIntensity,this.aoMap=$.aoMap,this.aoMapIntensity=$.aoMapIntensity,this.specularMap=$.specularMap,this.alphaMap=$.alphaMap,this.envMap=$.envMap,this.envMapRotation.copy($.envMapRotation),this.combine=$.combine,this.reflectivity=$.reflectivity,this.refractionRatio=$.refractionRatio,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.wireframeLinecap=$.wireframeLinecap,this.wireframeLinejoin=$.wireframeLinejoin,this.fog=$.fog,this}}var _1=new g,e9=new u0,RU=0;class H1{constructor($,J,Q=!1){if(Array.isArray($))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RU++}),this.name="",this.array=$,this.itemSize=J,this.count=$!==void 0?$.length/J:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate($){if($===!0)this.version++}setUsage($){return this.usage=$,this}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}copy($){return this.name=$.name,this.array=new $.array.constructor($.array),this.itemSize=$.itemSize,this.count=$.count,this.normalized=$.normalized,this.usage=$.usage,this.gpuType=$.gpuType,this}copyAt($,J,Q){$*=this.itemSize,Q*=J.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[$+Z]=J.array[Q+Z];return this}copyArray($){return this.array.set($),this}applyMatrix3($){if(this.itemSize===2)for(let J=0,Q=this.count;J<Q;J++)e9.fromBufferAttribute(this,J),e9.applyMatrix3($),this.setXY(J,e9.x,e9.y);else if(this.itemSize===3)for(let J=0,Q=this.count;J<Q;J++)_1.fromBufferAttribute(this,J),_1.applyMatrix3($),this.setXYZ(J,_1.x,_1.y,_1.z);return this}applyMatrix4($){for(let J=0,Q=this.count;J<Q;J++)_1.fromBufferAttribute(this,J),_1.applyMatrix4($),this.setXYZ(J,_1.x,_1.y,_1.z);return this}applyNormalMatrix($){for(let J=0,Q=this.count;J<Q;J++)_1.fromBufferAttribute(this,J),_1.applyNormalMatrix($),this.setXYZ(J,_1.x,_1.y,_1.z);return this}transformDirection($){for(let J=0,Q=this.count;J<Q;J++)_1.fromBufferAttribute(this,J),_1.transformDirection($),this.setXYZ(J,_1.x,_1.y,_1.z);return this}set($,J=0){return this.array.set($,J),this}getComponent($,J){let Q=this.array[$*this.itemSize+J];if(this.normalized)Q=R8(Q,this.array);return Q}setComponent($,J,Q){if(this.normalized)Q=$1(Q,this.array);return this.array[$*this.itemSize+J]=Q,this}getX($){let J=this.array[$*this.itemSize];if(this.normalized)J=R8(J,this.array);return J}setX($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize]=J,this}getY($){let J=this.array[$*this.itemSize+1];if(this.normalized)J=R8(J,this.array);return J}setY($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+1]=J,this}getZ($){let J=this.array[$*this.itemSize+2];if(this.normalized)J=R8(J,this.array);return J}setZ($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+2]=J,this}getW($){let J=this.array[$*this.itemSize+3];if(this.normalized)J=R8(J,this.array);return J}setW($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+3]=J,this}setXY($,J,Q){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this}setXYZ($,J,Q,Z){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this.array[$+2]=Z,this}setXYZW($,J,Q,Z,W){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array),W=$1(W,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this.array[$+2]=Z,this.array[$+3]=W,this}onUpload($){return this.onUploadCallback=$,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let $={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")$.name=this.name;if(this.usage!==35044)$.usage=this.usage;return $}}class b$ extends H1{constructor($,J,Q){super(new Uint16Array($),J,Q)}}class x$ extends H1{constructor($,J,Q){super(new Uint32Array($),J,Q)}}class Y8 extends H1{constructor($,J,Q){super(new Float32Array($),J,Q)}}var FU=0,K8=new g0,JQ=new E1,X6=new g,r1=new m1,o6=new m1,A1=new g;class p1 extends Y7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FU++}),this.uuid=F8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex($){if(Array.isArray($))this.index=new((ZZ($))?x$:b$)($,1);else this.index=$;return this}setIndirect($){return this.indirect=$,this}getIndirect(){return this.indirect}getAttribute($){return this.attributes[$]}setAttribute($,J){return this.attributes[$]=J,this}deleteAttribute($){return delete this.attributes[$],this}hasAttribute($){return this.attributes[$]!==void 0}addGroup($,J,Q=0){this.groups.push({start:$,count:J,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange($,J){this.drawRange.start=$,this.drawRange.count=J}applyMatrix4($){let J=this.attributes.position;if(J!==void 0)J.applyMatrix4($),J.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let W=new p0().getNormalMatrix($);Q.applyNormalMatrix(W),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection($),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion($){return K8.makeRotationFromQuaternion($),this.applyMatrix4(K8),this}rotateX($){return K8.makeRotationX($),this.applyMatrix4(K8),this}rotateY($){return K8.makeRotationY($),this.applyMatrix4(K8),this}rotateZ($){return K8.makeRotationZ($),this.applyMatrix4(K8),this}translate($,J,Q){return K8.makeTranslation($,J,Q),this.applyMatrix4(K8),this}scale($,J,Q){return K8.makeScale($,J,Q),this.applyMatrix4(K8),this}lookAt($){return JQ.lookAt($),JQ.updateMatrix(),this.applyMatrix4(JQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(X6).negate(),this.translate(X6.x,X6.y,X6.z),this}setFromPoints($){let J=this.getAttribute("position");if(J===void 0){let Q=[];for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z];Q.push(K.x,K.y,K.z||0)}this.setAttribute("position",new Y8(Q,3))}else{let Q=Math.min($.length,J.count);for(let Z=0;Z<Q;Z++){let W=$[Z];J.setXYZ(Z,W.x,W.y,W.z||0)}if($.length>J.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");J.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new m1;let $=this.attributes.position,J=this.morphAttributes.position;if($&&$.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));return}if($!==void 0){if(this.boundingBox.setFromBufferAttribute($),J)for(let Q=0,Z=J.length;Q<Z;Q++){let W=J[Q];if(r1.setFromBufferAttribute(W),this.morphTargetsRelative)A1.addVectors(this.boundingBox.min,r1.min),this.boundingBox.expandByPoint(A1),A1.addVectors(this.boundingBox.max,r1.max),this.boundingBox.expandByPoint(A1);else this.boundingBox.expandByPoint(r1.min),this.boundingBox.expandByPoint(r1.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new e1;let $=this.attributes.position,J=this.morphAttributes.position;if($&&$.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new g,1/0);return}if($){let Q=this.boundingSphere.center;if(r1.setFromBufferAttribute($),J)for(let W=0,K=J.length;W<K;W++){let X=J[W];if(o6.setFromBufferAttribute(X),this.morphTargetsRelative)A1.addVectors(r1.min,o6.min),r1.expandByPoint(A1),A1.addVectors(r1.max,o6.max),r1.expandByPoint(A1);else r1.expandByPoint(o6.min),r1.expandByPoint(o6.max)}r1.getCenter(Q);let Z=0;for(let W=0,K=$.count;W<K;W++)A1.fromBufferAttribute($,W),Z=Math.max(Z,Q.distanceToSquared(A1));if(J)for(let W=0,K=J.length;W<K;W++){let X=J[W],H=this.morphTargetsRelative;for(let Y=0,U=X.count;Y<U;Y++){if(A1.fromBufferAttribute(X,Y),H)X6.fromBufferAttribute($,Y),A1.add(X6);Z=Math.max(Z,Q.distanceToSquared(A1))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let $=this.index,J=this.attributes;if($===null||J.position===void 0||J.normal===void 0||J.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:W}=J;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new H1(new Float32Array(4*Q.count),4));let K=this.getAttribute("tangent"),X=[],H=[];for(let S=0;S<Q.count;S++)X[S]=new g,H[S]=new g;let Y=new g,U=new g,G=new g,E=new u0,q=new u0,M=new u0,O=new g,F=new g;function N(S,b,B){Y.fromBufferAttribute(Q,S),U.fromBufferAttribute(Q,b),G.fromBufferAttribute(Q,B),E.fromBufferAttribute(W,S),q.fromBufferAttribute(W,b),M.fromBufferAttribute(W,B),U.sub(Y),G.sub(Y),q.sub(E),M.sub(E);let D=1/(q.x*M.y-M.x*q.y);if(!isFinite(D))return;O.copy(U).multiplyScalar(M.y).addScaledVector(G,-q.y).multiplyScalar(D),F.copy(G).multiplyScalar(q.x).addScaledVector(U,-M.x).multiplyScalar(D),X[S].add(O),X[b].add(O),X[B].add(O),H[S].add(F),H[b].add(F),H[B].add(F)}let R=this.groups;if(R.length===0)R=[{start:0,count:$.count}];for(let S=0,b=R.length;S<b;++S){let B=R[S],D=B.start,I=B.count;for(let w=D,A=D+I;w<A;w+=3)N($.getX(w+0),$.getX(w+1),$.getX(w+2))}let _=new g,L=new g,k=new g,P=new g;function C(S){k.fromBufferAttribute(Z,S),P.copy(k);let b=X[S];_.copy(b),_.sub(k.multiplyScalar(k.dot(b))).normalize(),L.crossVectors(P,b);let D=L.dot(H[S])<0?-1:1;K.setXYZW(S,_.x,_.y,_.z,D)}for(let S=0,b=R.length;S<b;++S){let B=R[S],D=B.start,I=B.count;for(let w=D,A=D+I;w<A;w+=3)C($.getX(w+0)),C($.getX(w+1)),C($.getX(w+2))}}computeVertexNormals(){let $=this.index,J=this.getAttribute("position");if(J!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new H1(new Float32Array(J.count*3),3),this.setAttribute("normal",Q);else for(let E=0,q=Q.count;E<q;E++)Q.setXYZ(E,0,0,0);let Z=new g,W=new g,K=new g,X=new g,H=new g,Y=new g,U=new g,G=new g;if($)for(let E=0,q=$.count;E<q;E+=3){let M=$.getX(E+0),O=$.getX(E+1),F=$.getX(E+2);Z.fromBufferAttribute(J,M),W.fromBufferAttribute(J,O),K.fromBufferAttribute(J,F),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),X.fromBufferAttribute(Q,M),H.fromBufferAttribute(Q,O),Y.fromBufferAttribute(Q,F),X.add(U),H.add(U),Y.add(U),Q.setXYZ(M,X.x,X.y,X.z),Q.setXYZ(O,H.x,H.y,H.z),Q.setXYZ(F,Y.x,Y.y,Y.z)}else for(let E=0,q=J.count;E<q;E+=3)Z.fromBufferAttribute(J,E+0),W.fromBufferAttribute(J,E+1),K.fromBufferAttribute(J,E+2),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),Q.setXYZ(E+0,U.x,U.y,U.z),Q.setXYZ(E+1,U.x,U.y,U.z),Q.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let $=this.attributes.normal;for(let J=0,Q=$.count;J<Q;J++)A1.fromBufferAttribute($,J),A1.normalize(),$.setXYZ(J,A1.x,A1.y,A1.z)}toNonIndexed(){function $(X,H){let{array:Y,itemSize:U,normalized:G}=X,E=new Y.constructor(H.length*U),q=0,M=0;for(let O=0,F=H.length;O<F;O++){if(X.isInterleavedBufferAttribute)q=H[O]*X.data.stride+X.offset;else q=H[O]*U;for(let N=0;N<U;N++)E[M++]=Y[q++]}return new H1(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let J=new p1,Q=this.index.array,Z=this.attributes;for(let X in Z){let H=Z[X],Y=$(H,Q);J.setAttribute(X,Y)}let W=this.morphAttributes;for(let X in W){let H=[],Y=W[X];for(let U=0,G=Y.length;U<G;U++){let E=Y[U],q=$(E,Q);H.push(q)}J.morphAttributes[X]=H}J.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let X=0,H=K.length;X<H;X++){let Y=K[X];J.addGroup(Y.start,Y.count,Y.materialIndex)}return J}toJSON(){let $={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(Object.keys(this.userData).length>0)$.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let Y in H)if(H[Y]!==void 0)$[Y]=H[Y];return $}$.data={attributes:{}};let J=this.index;if(J!==null)$.data.index={type:J.array.constructor.name,array:Array.prototype.slice.call(J.array)};let Q=this.attributes;for(let H in Q){let Y=Q[H];$.data.attributes[H]=Y.toJSON($.data)}let Z={},W=!1;for(let H in this.morphAttributes){let Y=this.morphAttributes[H],U=[];for(let G=0,E=Y.length;G<E;G++){let q=Y[G];U.push(q.toJSON($.data))}if(U.length>0)Z[H]=U,W=!0}if(W)$.data.morphAttributes=Z,$.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)$.data.groups=JSON.parse(JSON.stringify(K));let X=this.boundingSphere;if(X!==null)$.data.boundingSphere=X.toJSON();return $}clone(){return new this.constructor().copy(this)}copy($){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let J={};this.name=$.name;let Q=$.index;if(Q!==null)this.setIndex(Q.clone());let Z=$.attributes;for(let Y in Z){let U=Z[Y];this.setAttribute(Y,U.clone(J))}let W=$.morphAttributes;for(let Y in W){let U=[],G=W[Y];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(J));this.morphAttributes[Y]=U}this.morphTargetsRelative=$.morphTargetsRelative;let K=$.groups;for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];this.addGroup(G.start,G.count,G.materialIndex)}let X=$.boundingBox;if(X!==null)this.boundingBox=X.clone();let H=$.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=$.drawRange.start,this.drawRange.count=$.drawRange.count,this.userData=$.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var m5=new g0,A7=new V6,$$=new e1,d5=new g,J$=new g,Q$=new g,Z$=new g,QQ=new g,W$=new g,c5=new g,K$=new g;class T1 extends E1{constructor($=new p1,J=new A8){super();this.isMesh=!0,this.type="Mesh",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy($,J){if(super.copy($,J),$.morphTargetInfluences!==void 0)this.morphTargetInfluences=$.morphTargetInfluences.slice();if($.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},$.morphTargetDictionary);return this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition($,J){let Q=this.geometry,Z=Q.attributes.position,W=Q.morphAttributes.position,K=Q.morphTargetsRelative;J.fromBufferAttribute(Z,$);let X=this.morphTargetInfluences;if(W&&X){W$.set(0,0,0);for(let H=0,Y=W.length;H<Y;H++){let U=X[H],G=W[H];if(U===0)continue;if(QQ.fromBufferAttribute(G,$),K)W$.addScaledVector(QQ,U);else W$.addScaledVector(QQ.sub(J),U)}J.add(W$)}return J}raycast($,J){let Q=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if($$.copy(Q.boundingSphere),$$.applyMatrix4(W),A7.copy($.ray).recast($.near),$$.containsPoint(A7.origin)===!1){if(A7.intersectSphere($$,d5)===null)return;if(A7.origin.distanceToSquared(d5)>($.far-$.near)**2)return}if(m5.copy(W).invert(),A7.copy($.ray).applyMatrix4(m5),Q.boundingBox!==null){if(A7.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections($,J,A7)}_computeIntersections($,J,Q){let Z,W=this.geometry,K=this.material,X=W.index,H=W.attributes.position,Y=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(X!==null)if(Array.isArray(K))for(let M=0,O=E.length;M<O;M++){let F=E[M],N=K[F.materialIndex],R=Math.max(F.start,q.start),_=Math.min(X.count,Math.min(F.start+F.count,q.start+q.count));for(let L=R,k=_;L<k;L+=3){let P=X.getX(L),C=X.getX(L+1),S=X.getX(L+2);if(Z=X$(this,N,$,Q,Y,U,G,P,C,S),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=F.materialIndex,J.push(Z)}}else{let M=Math.max(0,q.start),O=Math.min(X.count,q.start+q.count);for(let F=M,N=O;F<N;F+=3){let R=X.getX(F),_=X.getX(F+1),L=X.getX(F+2);if(Z=X$(this,K,$,Q,Y,U,G,R,_,L),Z)Z.faceIndex=Math.floor(F/3),J.push(Z)}}else if(H!==void 0)if(Array.isArray(K))for(let M=0,O=E.length;M<O;M++){let F=E[M],N=K[F.materialIndex],R=Math.max(F.start,q.start),_=Math.min(H.count,Math.min(F.start+F.count,q.start+q.count));for(let L=R,k=_;L<k;L+=3){let P=L,C=L+1,S=L+2;if(Z=X$(this,N,$,Q,Y,U,G,P,C,S),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=F.materialIndex,J.push(Z)}}else{let M=Math.max(0,q.start),O=Math.min(H.count,q.start+q.count);for(let F=M,N=O;F<N;F+=3){let R=F,_=F+1,L=F+2;if(Z=X$(this,K,$,Q,Y,U,G,R,_,L),Z)Z.faceIndex=Math.floor(F/3),J.push(Z)}}}}function OU($,J,Q,Z,W,K,X,H){let Y;if(J.side===1)Y=Z.intersectTriangle(X,K,W,!0,H);else Y=Z.intersectTriangle(W,K,X,J.side===0,H);if(Y===null)return null;K$.copy(H),K$.applyMatrix4($.matrixWorld);let U=Q.ray.origin.distanceTo(K$);if(U<Q.near||U>Q.far)return null;return{distance:U,point:K$.clone(),object:$}}function X$($,J,Q,Z,W,K,X,H,Y,U){$.getVertexPosition(H,J$),$.getVertexPosition(Y,Q$),$.getVertexPosition(U,Z$);let G=OU($,J,Q,Z,J$,Q$,Z$,c5);if(G){let E=new g;if(X8.getBarycoord(c5,J$,Q$,Z$,E),W)G.uv=X8.getInterpolatedAttribute(W,H,Y,U,E,new u0);if(K)G.uv1=X8.getInterpolatedAttribute(K,H,Y,U,E,new u0);if(X){if(G.normal=X8.getInterpolatedAttribute(X,H,Y,U,E,new g),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:H,b:Y,c:U,normal:new g,materialIndex:0};X8.getNormal(J$,Q$,Z$,q.normal),G.face=q,G.barycoord=E}return G}class B6 extends p1{constructor($=1,J=1,Q=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:$,height:J,depth:Q,widthSegments:Z,heightSegments:W,depthSegments:K};let X=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let H=[],Y=[],U=[],G=[],E=0,q=0;M("z","y","x",-1,-1,Q,J,$,K,W,0),M("z","y","x",1,-1,Q,J,-$,K,W,1),M("x","z","y",1,1,$,Q,J,Z,K,2),M("x","z","y",1,-1,$,Q,-J,Z,K,3),M("x","y","z",1,-1,$,J,Q,Z,W,4),M("x","y","z",-1,-1,$,J,-Q,Z,W,5),this.setIndex(H),this.setAttribute("position",new Y8(Y,3)),this.setAttribute("normal",new Y8(U,3)),this.setAttribute("uv",new Y8(G,2));function M(O,F,N,R,_,L,k,P,C,S,b){let B=L/C,D=k/S,I=L/2,w=k/2,A=P/2,f=C+1,h=S+1,x=0,p=0,y=new g;for(let o=0;o<h;o++){let a=o*D-w;for(let Q0=0;Q0<f;Q0++){let X0=Q0*B-I;y[O]=X0*R,y[F]=a*_,y[N]=A,Y.push(y.x,y.y,y.z),y[O]=0,y[F]=0,y[N]=P>0?1:-1,U.push(y.x,y.y,y.z),G.push(Q0/C),G.push(1-o/S),x+=1}}for(let o=0;o<S;o++)for(let a=0;a<C;a++){let Q0=E+a+f*o,X0=E+a+f*(o+1),L0=E+(a+1)+f*(o+1),q0=E+(a+1)+f*o;H.push(Q0,X0,q0),H.push(X0,L0,q0),p+=6}X.addGroup(q,p,b),q+=p,E+=x}}copy($){return super.copy($),this.parameters=Object.assign({},$.parameters),this}static fromJSON($){return new B6($.width,$.height,$.depth,$.widthSegments,$.heightSegments,$.depthSegments)}}function y7($){let J={};for(let Q in $){J[Q]={};for(let Z in $[Q]){let W=$[Q][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),J[Q][Z]=null;else J[Q][Z]=W.clone();else if(Array.isArray(W))J[Q][Z]=W.slice();else J[Q][Z]=W}}return J}function v1($){let J={};for(let Q=0;Q<$.length;Q++){let Z=y7($[Q]);for(let W in Z)J[W]=Z[W]}return J}function LU($){let J=[];for(let Q=0;Q<$.length;Q++)J.push($[Q].clone());return J}function HZ($){let J=$.getRenderTarget();if(J===null)return $.outputColorSpace;if(J.isXRRenderTarget===!0)return J.texture.colorSpace;return o0.workingColorSpace}var NK={clone:y7,merge:v1},DU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_U=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class d1 extends $8{constructor($){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DU,this.fragmentShader=_U,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,$!==void 0)this.setValues($)}copy($){return super.copy($),this.fragmentShader=$.fragmentShader,this.vertexShader=$.vertexShader,this.uniforms=y7($.uniforms),this.uniformsGroups=LU($.uniformsGroups),this.defines=Object.assign({},$.defines),this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.fog=$.fog,this.lights=$.lights,this.clipping=$.clipping,this.extensions=Object.assign({},$.extensions),this.glslVersion=$.glslVersion,this}toJSON($){let J=super.toJSON($);J.glslVersion=this.glslVersion,J.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)J.uniforms[Z]={type:"t",value:K.toJSON($).uuid};else if(K&&K.isColor)J.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)J.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)J.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)J.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)J.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)J.uniforms[Z]={type:"m4",value:K.toArray()};else J.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)J.defines=this.defines;J.vertexShader=this.vertexShader,J.fragmentShader=this.fragmentShader,J.lights=this.lights,J.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)J.extensions=Q;return J}}class z6 extends E1{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new g0,this.projectionMatrix=new g0,this.projectionMatrixInverse=new g0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy($,J){return super.copy($,J),this.matrixWorldInverse.copy($.matrixWorldInverse),this.projectionMatrix.copy($.projectionMatrix),this.projectionMatrixInverse.copy($.projectionMatrixInverse),this.coordinateSystem=$.coordinateSystem,this}getWorldDirection($){return super.getWorldDirection($).negate()}updateMatrixWorld($){super.updateMatrixWorld($),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix($,J){super.updateWorldMatrix($,J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var Z7=new g,n5=new u0,s5=new u0;class w1 extends z6{constructor($=50,J=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=$,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=J,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy($,J){return super.copy($,J),this.fov=$.fov,this.zoom=$.zoom,this.near=$.near,this.far=$.far,this.focus=$.focus,this.aspect=$.aspect,this.view=$.view===null?null:Object.assign({},$.view),this.filmGauge=$.filmGauge,this.filmOffset=$.filmOffset,this}setFocalLength($){let J=0.5*this.getFilmHeight()/$;this.fov=w7*2*Math.atan(J),this.updateProjectionMatrix()}getFocalLength(){let $=Math.tan(e6*0.5*this.fov);return 0.5*this.getFilmHeight()/$}getEffectiveFOV(){return w7*2*Math.atan(Math.tan(e6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds($,J,Q){Z7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),J.set(Z7.x,Z7.y).multiplyScalar(-$/Z7.z),Z7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(Z7.x,Z7.y).multiplyScalar(-$/Z7.z)}getViewSize($,J){return this.getViewBounds($,n5,s5),J.subVectors(s5,n5)}setViewOffset($,J,Q,Z,W,K){if(this.aspect=$/J,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=$,this.view.fullHeight=J,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let $=this.near,J=$*Math.tan(e6*0.5*this.fov)/this.zoom,Q=2*J,Z=this.aspect*Q,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:Y}=K;W+=K.offsetX*Z/H,J-=K.offsetY*Q/Y,Z*=K.width/H,Q*=K.height/Y}let X=this.filmOffset;if(X!==0)W+=$*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,J,J-Q,$,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON($){let J=super.toJSON($);if(J.object.fov=this.fov,J.object.zoom=this.zoom,J.object.near=this.near,J.object.far=this.far,J.object.focus=this.focus,J.object.aspect=this.aspect,this.view!==null)J.object.view=Object.assign({},this.view);return J.object.filmGauge=this.filmGauge,J.object.filmOffset=this.filmOffset,J}}var H6=-90,Y6=1;class YZ extends E1{constructor($,J,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new w1(H6,Y6,$,J);Z.layers=this.layers,this.add(Z);let W=new w1(H6,Y6,$,J);W.layers=this.layers,this.add(W);let K=new w1(H6,Y6,$,J);K.layers=this.layers,this.add(K);let X=new w1(H6,Y6,$,J);X.layers=this.layers,this.add(X);let H=new w1(H6,Y6,$,J);H.layers=this.layers,this.add(H);let Y=new w1(H6,Y6,$,J);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){let $=this.coordinateSystem,J=this.children.concat(),[Q,Z,W,K,X,H]=J;for(let Y of J)this.remove(Y);if($===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if($===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+$);for(let Y of J)this.add(Y),Y.updateMatrixWorld()}update($,J){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==$.coordinateSystem)this.coordinateSystem=$.coordinateSystem,this.updateCoordinateSystem();let[W,K,X,H,Y,U]=this.children,G=$.getRenderTarget(),E=$.getActiveCubeFace(),q=$.getActiveMipmapLevel(),M=$.xr.enabled;$.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,$.setRenderTarget(Q,0,Z),$.render(J,W),$.setRenderTarget(Q,1,Z),$.render(J,K),$.setRenderTarget(Q,2,Z),$.render(J,X),$.setRenderTarget(Q,3,Z),$.render(J,H),$.setRenderTarget(Q,4,Z),$.render(J,Y),Q.texture.generateMipmaps=O,$.setRenderTarget(Q,5,Z),$.render(J,U),$.setRenderTarget(G,E,q),$.xr.enabled=M,Q.texture.needsPMREMUpdate=!0}}class g$ extends D1{constructor($=[],J=301,Q,Z,W,K,X,H,Y,U){super($,J,Q,Z,W,K,X,H,Y,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images($){this.image=$}}class UZ extends D8{constructor($=1,J={}){super($,$,J);this.isWebGLCubeRenderTarget=!0;let Q={width:$,height:$,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new g$(Z),this._setTextureOptions(J),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture($,J){this.texture.type=J.type,this.texture.colorSpace=J.colorSpace,this.texture.generateMipmaps=J.generateMipmaps,this.texture.minFilter=J.minFilter,this.texture.magFilter=J.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new B6(5,5,5),W=new d1({name:"CubemapFromEquirect",uniforms:y7(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=J;let K=new T1(Z,W),X=J.minFilter;if(J.minFilter===1008)J.minFilter=1006;return new YZ(1,10,this).update($,K),J.minFilter=X,K.geometry.dispose(),K.material.dispose(),this}clear($,J=!0,Q=!0,Z=!0){let W=$.getRenderTarget();for(let K=0;K<6;K++)$.setRenderTarget(this,K),$.clear(J,Q,Z);$.setRenderTarget(W)}}class H8 extends E1{constructor(){super();this.isGroup=!0,this.type="Group"}}var VU={type:"move"};class U9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new H8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new H8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new g,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new g;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new H8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new g,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new g;return this._grip}dispatchEvent($){if(this._targetRay!==null)this._targetRay.dispatchEvent($);if(this._grip!==null)this._grip.dispatchEvent($);if(this._hand!==null)this._hand.dispatchEvent($);return this}connect($){if($&&$.hand){let J=this._hand;if(J)for(let Q of $.hand.values())this._getHandJoint(J,Q)}return this.dispatchEvent({type:"connected",data:$}),this}disconnect($){if(this.dispatchEvent({type:"disconnected",data:$}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update($,J,Q){let Z=null,W=null,K=null,X=this._targetRay,H=this._grip,Y=this._hand;if($&&J.session.visibilityState!=="visible-blurred"){if(Y&&$.hand){K=!0;for(let O of $.hand.values()){let F=J.getJointPose(O,Q),N=this._getHandJoint(Y,O);if(F!==null)N.matrix.fromArray(F.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=F.radius;N.visible=F!==null}let U=Y.joints["index-finger-tip"],G=Y.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,M=0.005;if(Y.inputState.pinching&&E>q+M)Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:$.handedness,target:this});else if(!Y.inputState.pinching&&E<=q-M)Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:$.handedness,target:this})}else if(H!==null&&$.gripSpace){if(W=J.getPose($.gripSpace,Q),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(X!==null){if(Z=J.getPose($.targetRaySpace,Q),Z===null&&W!==null)Z=W;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(VU)}}}if(X!==null)X.visible=Z!==null;if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=K!==null;return this}_getHandJoint($,J){if($.joints[J.jointName]===void 0){let Q=new H8;Q.matrixAutoUpdate=!1,Q.visible=!1,$.joints[J.jointName]=Q,$.add(Q)}return $.joints[J.jointName]}}class k6 extends E1{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new O8,this.environmentIntensity=1,this.environmentRotation=new O8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy($,J){if(super.copy($,J),$.background!==null)this.background=$.background.clone();if($.environment!==null)this.environment=$.environment.clone();if($.fog!==null)this.fog=$.fog.clone();if(this.backgroundBlurriness=$.backgroundBlurriness,this.backgroundIntensity=$.backgroundIntensity,this.backgroundRotation.copy($.backgroundRotation),this.environmentIntensity=$.environmentIntensity,this.environmentRotation.copy($.environmentRotation),$.overrideMaterial!==null)this.overrideMaterial=$.overrideMaterial.clone();return this.matrixAutoUpdate=$.matrixAutoUpdate,this}toJSON($){let J=super.toJSON($);if(this.fog!==null)J.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)J.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)J.object.backgroundIntensity=this.backgroundIntensity;if(J.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)J.object.environmentIntensity=this.environmentIntensity;return J.object.environmentRotation=this.environmentRotation.toArray(),J}}class G9{constructor($,J){this.isInterleavedBuffer=!0,this.array=$,this.stride=J,this.count=$!==void 0?$.length/J:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=F8()}onUploadCallback(){}set needsUpdate($){if($===!0)this.version++}setUsage($){return this.usage=$,this}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}copy($){return this.array=new $.array.constructor($.array),this.count=$.count,this.stride=$.stride,this.usage=$.usage,this}copyAt($,J,Q){$*=this.stride,Q*=J.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[$+Z]=J.array[Q+Z];return this}set($,J=0){return this.array.set($,J),this}clone($){if($.arrayBuffers===void 0)$.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=F8();if($.arrayBuffers[this.array.buffer._uuid]===void 0)$.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let J=new this.array.constructor($.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor(J,this.stride);return Q.setUsage(this.usage),Q}onUpload($){return this.onUploadCallback=$,this}toJSON($){if($.arrayBuffers===void 0)$.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=F8();if($.arrayBuffers[this.array.buffer._uuid]===void 0)$.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var x1=new g;class C6{constructor($,J,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=$,this.itemSize=J,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate($){this.data.needsUpdate=$}applyMatrix4($){for(let J=0,Q=this.data.count;J<Q;J++)x1.fromBufferAttribute(this,J),x1.applyMatrix4($),this.setXYZ(J,x1.x,x1.y,x1.z);return this}applyNormalMatrix($){for(let J=0,Q=this.count;J<Q;J++)x1.fromBufferAttribute(this,J),x1.applyNormalMatrix($),this.setXYZ(J,x1.x,x1.y,x1.z);return this}transformDirection($){for(let J=0,Q=this.count;J<Q;J++)x1.fromBufferAttribute(this,J),x1.transformDirection($),this.setXYZ(J,x1.x,x1.y,x1.z);return this}getComponent($,J){let Q=this.array[$*this.data.stride+this.offset+J];if(this.normalized)Q=R8(Q,this.array);return Q}setComponent($,J,Q){if(this.normalized)Q=$1(Q,this.array);return this.data.array[$*this.data.stride+this.offset+J]=Q,this}setX($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset]=J,this}setY($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+1]=J,this}setZ($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+2]=J,this}setW($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+3]=J,this}getX($){let J=this.data.array[$*this.data.stride+this.offset];if(this.normalized)J=R8(J,this.array);return J}getY($){let J=this.data.array[$*this.data.stride+this.offset+1];if(this.normalized)J=R8(J,this.array);return J}getZ($){let J=this.data.array[$*this.data.stride+this.offset+2];if(this.normalized)J=R8(J,this.array);return J}getW($){let J=this.data.array[$*this.data.stride+this.offset+3];if(this.normalized)J=R8(J,this.array);return J}setXY($,J,Q){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this}setXYZ($,J,Q,Z){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this.data.array[$+2]=Z,this}setXYZW($,J,Q,Z,W){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array),W=$1(W,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this.data.array[$+2]=Z,this.data.array[$+3]=W,this}clone($){if($===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let J=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)J.push(this.data.array[Z+W])}return new H1(new this.array.constructor(J),this.itemSize,this.normalized)}else{if($.interleavedBuffers===void 0)$.interleavedBuffers={};if($.interleavedBuffers[this.data.uuid]===void 0)$.interleavedBuffers[this.data.uuid]=this.data.clone($);return new C6($.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON($){if($===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let J=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)J.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:J,normalized:this.normalized}}else{if($.interleavedBuffers===void 0)$.interleavedBuffers={};if($.interleavedBuffers[this.data.uuid]===void 0)$.interleavedBuffers[this.data.uuid]=this.data.toJSON($);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var o5=new g,i5=new i0,a5=new i0,BU=new g,r5=new g0,H$=new g,ZQ=new e1,t5=new g0,WQ=new V6;class p$ extends T1{constructor($,J){super($,J);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new g0,this.bindMatrixInverse=new g0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let $=this.geometry;if(this.boundingBox===null)this.boundingBox=new m1;this.boundingBox.makeEmpty();let J=$.getAttribute("position");for(let Q=0;Q<J.count;Q++)this.getVertexPosition(Q,H$),this.boundingBox.expandByPoint(H$)}computeBoundingSphere(){let $=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new e1;this.boundingSphere.makeEmpty();let J=$.getAttribute("position");for(let Q=0;Q<J.count;Q++)this.getVertexPosition(Q,H$),this.boundingSphere.expandByPoint(H$)}copy($,J){if(super.copy($,J),this.bindMode=$.bindMode,this.bindMatrix.copy($.bindMatrix),this.bindMatrixInverse.copy($.bindMatrixInverse),this.skeleton=$.skeleton,$.boundingBox!==null)this.boundingBox=$.boundingBox.clone();if($.boundingSphere!==null)this.boundingSphere=$.boundingSphere.clone();return this}raycast($,J){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(ZQ.copy(this.boundingSphere),ZQ.applyMatrix4(Z),$.ray.intersectsSphere(ZQ)===!1)return;if(t5.copy(Z).invert(),WQ.copy($.ray).applyMatrix4(t5),this.boundingBox!==null){if(WQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections($,J,WQ)}getVertexPosition($,J){return super.getVertexPosition($,J),this.applyBoneTransform($,J),J}bind($,J){if(this.skeleton=$,J===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),J=this.matrixWorld;this.bindMatrix.copy(J),this.bindMatrixInverse.copy(J).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let $=new i0,J=this.geometry.attributes.skinWeight;for(let Q=0,Z=J.count;Q<Z;Q++){$.fromBufferAttribute(J,Q);let W=1/$.manhattanLength();if(W!==1/0)$.multiplyScalar(W);else $.set(1,0,0,0);J.setXYZW(Q,$.x,$.y,$.z,$.w)}}updateMatrixWorld($){if(super.updateMatrixWorld($),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform($,J){let Q=this.skeleton,Z=this.geometry;i5.fromBufferAttribute(Z.attributes.skinIndex,$),a5.fromBufferAttribute(Z.attributes.skinWeight,$),o5.copy(J).applyMatrix4(this.bindMatrix),J.set(0,0,0);for(let W=0;W<4;W++){let K=a5.getComponent(W);if(K!==0){let X=i5.getComponent(W);r5.multiplyMatrices(Q.bones[X].matrixWorld,Q.boneInverses[X]),J.addScaledVector(BU.copy(o5).applyMatrix4(r5),K)}}return J.applyMatrix4(this.bindMatrixInverse)}}class E9 extends E1{constructor(){super();this.isBone=!0,this.type="Bone"}}class l$ extends D1{constructor($=null,J=1,Q=1,Z,W,K,X,H,Y=1003,U=1003,G,E){super(null,K,X,H,Y,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:$,width:J,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var e5=new g0,zU=new g0;class q9{constructor($=[],J=[]){this.uuid=F8(),this.bones=$.slice(0),this.boneInverses=J,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let $=this.bones,J=this.boneInverses;if(this.boneMatrices=new Float32Array($.length*16),J.length===0)this.calculateInverses();else if($.length!==J.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new g0)}}calculateInverses(){this.boneInverses.length=0;for(let $=0,J=this.bones.length;$<J;$++){let Q=new g0;if(this.bones[$])Q.copy(this.bones[$].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let $=0,J=this.bones.length;$<J;$++){let Q=this.bones[$];if(Q)Q.matrixWorld.copy(this.boneInverses[$]).invert()}for(let $=0,J=this.bones.length;$<J;$++){let Q=this.bones[$];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let $=this.bones,J=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let W=0,K=$.length;W<K;W++){let X=$[W]?$[W].matrixWorld:zU;e5.multiplyMatrices(X,J[W]),e5.toArray(Q,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new q9(this.bones,this.boneInverses)}computeBoneTexture(){let $=Math.sqrt(this.bones.length*4);$=Math.ceil($/4)*4,$=Math.max($,4);let J=new Float32Array($*$*4);J.set(this.boneMatrices);let Q=new l$(J,$,$,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=J,this.boneTexture=Q,this}getBoneByName($){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z.name===$)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON($,J){this.uuid=$.uuid;for(let Q=0,Z=$.bones.length;Q<Z;Q++){let W=$.bones[Q],K=J[W];if(K===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),K=new E9;this.bones.push(K),this.boneInverses.push(new g0().fromArray($.boneInverses[Q]))}return this.init(),this}toJSON(){let $={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};$.uuid=this.uuid;let J=this.bones,Q=this.boneInverses;for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.bones.push(K.uuid);let X=Q[Z];$.boneInverses.push(X.toArray())}return $}}class S7 extends H1{constructor($,J,Q,Z=1){super($,J,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy($){return super.copy($),this.meshPerAttribute=$.meshPerAttribute,this}toJSON(){let $=super.toJSON();return $.meshPerAttribute=this.meshPerAttribute,$.isInstancedBufferAttribute=!0,$}}var U6=new g0,$W=new g0,Y$=[],JW=new m1,kU=new g0,i6=new T1,a6=new e1;class u$ extends T1{constructor($,J,Q){super($,J);this.isInstancedMesh=!0,this.instanceMatrix=new S7(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,kU)}computeBoundingBox(){let $=this.geometry,J=this.count;if(this.boundingBox===null)this.boundingBox=new m1;if($.boundingBox===null)$.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<J;Q++)this.getMatrixAt(Q,U6),JW.copy($.boundingBox).applyMatrix4(U6),this.boundingBox.union(JW)}computeBoundingSphere(){let $=this.geometry,J=this.count;if(this.boundingSphere===null)this.boundingSphere=new e1;if($.boundingSphere===null)$.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<J;Q++)this.getMatrixAt(Q,U6),a6.copy($.boundingSphere).applyMatrix4(U6),this.boundingSphere.union(a6)}copy($,J){if(super.copy($,J),this.instanceMatrix.copy($.instanceMatrix),$.morphTexture!==null)this.morphTexture=$.morphTexture.clone();if($.instanceColor!==null)this.instanceColor=$.instanceColor.clone();if(this.count=$.count,$.boundingBox!==null)this.boundingBox=$.boundingBox.clone();if($.boundingSphere!==null)this.boundingSphere=$.boundingSphere.clone();return this}getColorAt($,J){J.fromArray(this.instanceColor.array,$*3)}getMatrixAt($,J){J.fromArray(this.instanceMatrix.array,$*16)}getMorphAt($,J){let Q=J.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=Q.length+1,K=$*W+1;for(let X=0;X<Q.length;X++)Q[X]=Z[K+X]}raycast($,J){let Q=this.matrixWorld,Z=this.count;if(i6.geometry=this.geometry,i6.material=this.material,i6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(a6.copy(this.boundingSphere),a6.applyMatrix4(Q),$.ray.intersectsSphere(a6)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,U6),$W.multiplyMatrices(Q,U6),i6.matrixWorld=$W,i6.raycast($,Y$);for(let K=0,X=Y$.length;K<X;K++){let H=Y$[K];H.instanceId=W,H.object=this,J.push(H)}Y$.length=0}}setColorAt($,J){if(this.instanceColor===null)this.instanceColor=new S7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);J.toArray(this.instanceColor.array,$*3)}setMatrixAt($,J){J.toArray(this.instanceMatrix.array,$*16)}setMorphAt($,J){let Q=J.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new l$(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let Y=0;Y<Q.length;Y++)K+=Q[Y];let X=this.geometry.morphTargetsRelative?1:1-K,H=Z*$;W[H]=X,W.set(Q,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var KQ=new g,CU=new g,IU=new p0;class g8{constructor($=new g(1,0,0),J=0){this.isPlane=!0,this.normal=$,this.constant=J}set($,J){return this.normal.copy($),this.constant=J,this}setComponents($,J,Q,Z){return this.normal.set($,J,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint($,J){return this.normal.copy($),this.constant=-J.dot(this.normal),this}setFromCoplanarPoints($,J,Q){let Z=KQ.subVectors(Q,J).cross(CU.subVectors($,J)).normalize();return this.setFromNormalAndCoplanarPoint(Z,$),this}copy($){return this.normal.copy($.normal),this.constant=$.constant,this}normalize(){let $=1/this.normal.length();return this.normal.multiplyScalar($),this.constant*=$,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint($){return this.normal.dot($)+this.constant}distanceToSphere($){return this.distanceToPoint($.center)-$.radius}projectPoint($,J){return J.copy($).addScaledVector(this.normal,-this.distanceToPoint($))}intersectLine($,J){let Q=$.delta(KQ),Z=this.normal.dot(Q);if(Z===0){if(this.distanceToPoint($.start)===0)return J.copy($.start);return null}let W=-($.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return J.copy($.start).addScaledVector(Q,W)}intersectsLine($){let J=this.distanceToPoint($.start),Q=this.distanceToPoint($.end);return J<0&&Q>0||Q<0&&J>0}intersectsBox($){return $.intersectsPlane(this)}intersectsSphere($){return $.intersectsPlane(this)}coplanarPoint($){return $.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4($,J){let Q=J||IU.getNormalMatrix($),Z=this.coplanarPoint(KQ).applyMatrix4($),W=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(W),this}translate($){return this.constant-=$.dot(this.normal),this}equals($){return $.normal.equals(this.normal)&&$.constant===this.constant}clone(){return new this.constructor().copy(this)}}var T7=new e1,PU=new u0(0.5,0.5),U$=new g;class N9{constructor($=new g8,J=new g8,Q=new g8,Z=new g8,W=new g8,K=new g8){this.planes=[$,J,Q,Z,W,K]}set($,J,Q,Z,W,K){let X=this.planes;return X[0].copy($),X[1].copy(J),X[2].copy(Q),X[3].copy(Z),X[4].copy(W),X[5].copy(K),this}copy($){let J=this.planes;for(let Q=0;Q<6;Q++)J[Q].copy($.planes[Q]);return this}setFromProjectionMatrix($,J=2000,Q=!1){let Z=this.planes,W=$.elements,K=W[0],X=W[1],H=W[2],Y=W[3],U=W[4],G=W[5],E=W[6],q=W[7],M=W[8],O=W[9],F=W[10],N=W[11],R=W[12],_=W[13],L=W[14],k=W[15];if(Z[0].setComponents(Y-K,q-U,N-M,k-R).normalize(),Z[1].setComponents(Y+K,q+U,N+M,k+R).normalize(),Z[2].setComponents(Y+X,q+G,N+O,k+_).normalize(),Z[3].setComponents(Y-X,q-G,N-O,k-_).normalize(),Q)Z[4].setComponents(H,E,F,L).normalize(),Z[5].setComponents(Y-H,q-E,N-F,k-L).normalize();else if(Z[4].setComponents(Y-H,q-E,N-F,k-L).normalize(),J===2000)Z[5].setComponents(Y+H,q+E,N+F,k+L).normalize();else if(J===2001)Z[5].setComponents(H,E,F,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+J);return this}intersectsObject($){if($.boundingSphere!==void 0){if($.boundingSphere===null)$.computeBoundingSphere();T7.copy($.boundingSphere).applyMatrix4($.matrixWorld)}else{let J=$.geometry;if(J.boundingSphere===null)J.computeBoundingSphere();T7.copy(J.boundingSphere).applyMatrix4($.matrixWorld)}return this.intersectsSphere(T7)}intersectsSprite($){T7.center.set(0,0,0);let J=PU.distanceTo($.center);return T7.radius=0.7071067811865476+J,T7.applyMatrix4($.matrixWorld),this.intersectsSphere(T7)}intersectsSphere($){let J=this.planes,Q=$.center,Z=-$.radius;for(let W=0;W<6;W++)if(J[W].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox($){let J=this.planes;for(let Q=0;Q<6;Q++){let Z=J[Q];if(U$.x=Z.normal.x>0?$.max.x:$.min.x,U$.y=Z.normal.y>0?$.max.y:$.min.y,U$.z=Z.normal.z>0?$.max.z:$.min.z,Z.distanceToPoint(U$)<0)return!1}return!0}containsPoint($){let J=this.planes;for(let Q=0;Q<6;Q++)if(J[Q].distanceToPoint($)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M9 extends $8{constructor($){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.linewidth=$.linewidth,this.linecap=$.linecap,this.linejoin=$.linejoin,this.fog=$.fog,this}}var R$=new g,F$=new g,QW=new g0,r6=new V6,G$=new e1,XQ=new g,ZW=new g;class I6 extends E1{constructor($=new p1,J=new M9){super();this.isLine=!0,this.type="Line",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy($,J){return super.copy($,J),this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}computeLineDistances(){let $=this.geometry;if($.index===null){let J=$.attributes.position,Q=[0];for(let Z=1,W=J.count;Z<W;Z++)R$.fromBufferAttribute(J,Z-1),F$.fromBufferAttribute(J,Z),Q[Z]=Q[Z-1],Q[Z]+=R$.distanceTo(F$);$.setAttribute("lineDistance",new Y8(Q,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast($,J){let Q=this.geometry,Z=this.matrixWorld,W=$.params.Line.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(G$.copy(Q.boundingSphere),G$.applyMatrix4(Z),G$.radius+=W,$.ray.intersectsSphere(G$)===!1)return;QW.copy(Z).invert(),r6.copy($.ray).applyMatrix4(QW);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,Y=this.isLineSegments?2:1,U=Q.index,E=Q.attributes.position;if(U!==null){let q=Math.max(0,K.start),M=Math.min(U.count,K.start+K.count);for(let O=q,F=M-1;O<F;O+=Y){let N=U.getX(O),R=U.getX(O+1),_=E$(this,$,r6,H,N,R,O);if(_)J.push(_)}if(this.isLineLoop){let O=U.getX(M-1),F=U.getX(q),N=E$(this,$,r6,H,O,F,M-1);if(N)J.push(N)}}else{let q=Math.max(0,K.start),M=Math.min(E.count,K.start+K.count);for(let O=q,F=M-1;O<F;O+=Y){let N=E$(this,$,r6,H,O,O+1,O);if(N)J.push(N)}if(this.isLineLoop){let O=E$(this,$,r6,H,M-1,q,M-1);if(O)J.push(O)}}}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function E$($,J,Q,Z,W,K,X){let H=$.geometry.attributes.position;if(R$.fromBufferAttribute(H,W),F$.fromBufferAttribute(H,K),Q.distanceSqToSegment(R$,F$,XQ,ZW)>Z)return;XQ.applyMatrix4($.matrixWorld);let U=J.ray.origin.distanceTo(XQ);if(U<J.near||U>J.far)return;return{distance:U,point:ZW.clone().applyMatrix4($.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:$}}var WW=new g,KW=new g;class m$ extends I6{constructor($,J){super($,J);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let $=this.geometry;if($.index===null){let J=$.attributes.position,Q=[];for(let Z=0,W=J.count;Z<W;Z+=2)WW.fromBufferAttribute(J,Z),KW.fromBufferAttribute(J,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+WW.distanceTo(KW);$.setAttribute("lineDistance",new Y8(Q,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d$ extends I6{constructor($,J){super($,J);this.isLineLoop=!0,this.type="LineLoop"}}class R9 extends $8{constructor($){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.alphaMap=$.alphaMap,this.size=$.size,this.sizeAttenuation=$.sizeAttenuation,this.fog=$.fog,this}}var XW=new g0,GQ=new V6,q$=new e1,N$=new g;class P6 extends E1{constructor($=new p1,J=new R9){super();this.isPoints=!0,this.type="Points",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy($,J){return super.copy($,J),this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}raycast($,J){let Q=this.geometry,Z=this.matrixWorld,W=$.params.Points.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(q$.copy(Q.boundingSphere),q$.applyMatrix4(Z),q$.radius+=W,$.ray.intersectsSphere(q$)===!1)return;XW.copy(Z).invert(),GQ.copy($.ray).applyMatrix4(XW);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,Y=Q.index,G=Q.attributes.position;if(Y!==null){let E=Math.max(0,K.start),q=Math.min(Y.count,K.start+K.count);for(let M=E,O=q;M<O;M++){let F=Y.getX(M);N$.fromBufferAttribute(G,F),HW(N$,F,H,Z,$,J,this)}}else{let E=Math.max(0,K.start),q=Math.min(G.count,K.start+K.count);for(let M=E,O=q;M<O;M++)N$.fromBufferAttribute(G,M),HW(N$,M,H,Z,$,J,this)}}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function HW($,J,Q,Z,W,K,X){let H=GQ.distanceSqToPoint($);if(H<Q){let Y=new g;GQ.closestPointToPoint($,Y),Y.applyMatrix4(Z);let U=W.ray.origin.distanceTo(Y);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(H),point:Y,index:J,face:null,faceIndex:null,barycoord:null,object:X})}}class c$ extends D1{constructor($,J,Q,Z,W,K,X,H,Y){super($,J,Q,Z,W,K,X,H,Y);this.isCanvasTexture=!0,this.needsUpdate=!0}}class n$ extends D1{constructor($,J,Q=1014,Z,W,K,X=1003,H=1003,Y,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:$,height:J,depth:G};super(E,Z,W,K,X,H,U,Q,Y);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy($){return super.copy($),this.source=new Y9(Object.assign({},$.image)),this.compareFunction=$.compareFunction,this}toJSON($){let J=super.toJSON($);if(this.compareFunction!==null)J.compareFunction=this.compareFunction;return J}}class s$ extends D1{constructor($=null){super();this.sourceTexture=$,this.isExternalTexture=!0}copy($){return super.copy($),this.sourceTexture=$.sourceTexture,this}}class F9 extends p1{constructor($=1,J=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:$,height:J,widthSegments:Q,heightSegments:Z};let W=$/2,K=J/2,X=Math.floor(Q),H=Math.floor(Z),Y=X+1,U=H+1,G=$/X,E=J/H,q=[],M=[],O=[],F=[];for(let N=0;N<U;N++){let R=N*E-K;for(let _=0;_<Y;_++){let L=_*G-W;M.push(L,-R,0),O.push(0,0,1),F.push(_/X),F.push(1-N/H)}}for(let N=0;N<H;N++)for(let R=0;R<X;R++){let _=R+Y*N,L=R+Y*(N+1),k=R+1+Y*(N+1),P=R+1+Y*N;q.push(_,L,P),q.push(L,k,P)}this.setIndex(q),this.setAttribute("position",new Y8(M,3)),this.setAttribute("normal",new Y8(O,3)),this.setAttribute("uv",new Y8(F,2))}copy($){return super.copy($),this.parameters=Object.assign({},$.parameters),this}static fromJSON($){return new F9($.width,$.height,$.widthSegments,$.heightSegments)}}class A6 extends $8{constructor($){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new u0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues($)}copy($){return super.copy($),this.defines={STANDARD:""},this.color.copy($.color),this.roughness=$.roughness,this.metalness=$.metalness,this.map=$.map,this.lightMap=$.lightMap,this.lightMapIntensity=$.lightMapIntensity,this.aoMap=$.aoMap,this.aoMapIntensity=$.aoMapIntensity,this.emissive.copy($.emissive),this.emissiveMap=$.emissiveMap,this.emissiveIntensity=$.emissiveIntensity,this.bumpMap=$.bumpMap,this.bumpScale=$.bumpScale,this.normalMap=$.normalMap,this.normalMapType=$.normalMapType,this.normalScale.copy($.normalScale),this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this.roughnessMap=$.roughnessMap,this.metalnessMap=$.metalnessMap,this.alphaMap=$.alphaMap,this.envMap=$.envMap,this.envMapRotation.copy($.envMapRotation),this.envMapIntensity=$.envMapIntensity,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.wireframeLinecap=$.wireframeLinecap,this.wireframeLinejoin=$.wireframeLinejoin,this.flatShading=$.flatShading,this.fog=$.fog,this}}class J8 extends A6{constructor($){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new u0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return c0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(J){this.ior=(1+0.4*J)/(1-0.4*J)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new y0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new y0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new y0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues($)}get anisotropy(){return this._anisotropy}set anisotropy($){if(this._anisotropy>0!==$>0)this.version++;this._anisotropy=$}get clearcoat(){return this._clearcoat}set clearcoat($){if(this._clearcoat>0!==$>0)this.version++;this._clearcoat=$}get iridescence(){return this._iridescence}set iridescence($){if(this._iridescence>0!==$>0)this.version++;this._iridescence=$}get dispersion(){return this._dispersion}set dispersion($){if(this._dispersion>0!==$>0)this.version++;this._dispersion=$}get sheen(){return this._sheen}set sheen($){if(this._sheen>0!==$>0)this.version++;this._sheen=$}get transmission(){return this._transmission}set transmission($){if(this._transmission>0!==$>0)this.version++;this._transmission=$}copy($){return super.copy($),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=$.anisotropy,this.anisotropyRotation=$.anisotropyRotation,this.anisotropyMap=$.anisotropyMap,this.clearcoat=$.clearcoat,this.clearcoatMap=$.clearcoatMap,this.clearcoatRoughness=$.clearcoatRoughness,this.clearcoatRoughnessMap=$.clearcoatRoughnessMap,this.clearcoatNormalMap=$.clearcoatNormalMap,this.clearcoatNormalScale.copy($.clearcoatNormalScale),this.dispersion=$.dispersion,this.ior=$.ior,this.iridescence=$.iridescence,this.iridescenceMap=$.iridescenceMap,this.iridescenceIOR=$.iridescenceIOR,this.iridescenceThicknessRange=[...$.iridescenceThicknessRange],this.iridescenceThicknessMap=$.iridescenceThicknessMap,this.sheen=$.sheen,this.sheenColor.copy($.sheenColor),this.sheenColorMap=$.sheenColorMap,this.sheenRoughness=$.sheenRoughness,this.sheenRoughnessMap=$.sheenRoughnessMap,this.transmission=$.transmission,this.transmissionMap=$.transmissionMap,this.thickness=$.thickness,this.thicknessMap=$.thicknessMap,this.attenuationDistance=$.attenuationDistance,this.attenuationColor.copy($.attenuationColor),this.specularIntensity=$.specularIntensity,this.specularIntensityMap=$.specularIntensityMap,this.specularColor.copy($.specularColor),this.specularColorMap=$.specularColorMap,this}}class GZ extends $8{constructor($){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues($)}copy($){return super.copy($),this.depthPacking=$.depthPacking,this.map=$.map,this.alphaMap=$.alphaMap,this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this}}class EZ extends $8{constructor($){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues($)}copy($){return super.copy($),this.map=$.map,this.alphaMap=$.alphaMap,this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this}}function M$($,J){if(!$||$.constructor===J)return $;if(typeof J.BYTES_PER_ELEMENT==="number")return new J($);return Array.prototype.slice.call($)}function AU($){return ArrayBuffer.isView($)&&!($ instanceof DataView)}function TU($){function J(W,K){return $[W]-$[K]}let Q=$.length,Z=Array(Q);for(let W=0;W!==Q;++W)Z[W]=W;return Z.sort(J),Z}function YW($,J,Q){let Z=$.length,W=new $.constructor(Z);for(let K=0,X=0;X!==Z;++K){let H=Q[K]*J;for(let Y=0;Y!==J;++Y)W[X++]=$[H+Y]}return W}function MK($,J,Q,Z){let W=1,K=$[0];while(K!==void 0&&K[Z]===void 0)K=$[W++];if(K===void 0)return;let X=K[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=K[Z],X!==void 0)J.push(K.time),Q.push(...X);K=$[W++]}while(K!==void 0);else if(X.toArray!==void 0)do{if(X=K[Z],X!==void 0)J.push(K.time),X.toArray(Q,Q.length);K=$[W++]}while(K!==void 0);else do{if(X=K[Z],X!==void 0)J.push(K.time),Q.push(X);K=$[W++]}while(K!==void 0)}class U7{constructor($,J,Q,Z){this.parameterPositions=$,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new J.constructor(Q),this.sampleValues=J,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate($){let J=this.parameterPositions,Q=this._cachedIndex,Z=J[Q],W=J[Q-1];Q:{$:{let K;J:{Z:if(!($<Z)){for(let X=Q+2;;){if(Z===void 0){if($<W)break Z;return Q=J.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===X)break;if(W=Z,Z=J[++Q],$<Z)break $}K=J.length;break J}if(!($>=W)){let X=J[1];if($<X)Q=2,W=X;for(let H=Q-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===H)break;if(Z=W,W=J[--Q-1],$>=W)break $}K=Q,Q=0;break J}break Q}while(Q<K){let X=Q+K>>>1;if($<J[X])K=X;else Q=X+1}if(Z=J[Q],W=J[Q-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=J.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,W,Z)}return this.interpolate_(Q,W,$,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_($){let J=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=$*Z;for(let K=0;K!==Z;++K)J[K]=Q[W+K];return J}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class qZ extends U7{constructor($,J,Q,Z){super($,J,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_($,J,Q){let Z=this.parameterPositions,W=$-2,K=$+1,X=Z[W],H=Z[K];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=$,X=2*J-Q;break;case 2402:W=Z.length-2,X=J+Z[W]-Z[W+1];break;default:W=$,X=Q}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:K=$,H=2*Q-J;break;case 2402:K=1,H=Q+Z[1]-Z[0];break;default:K=$-1,H=J}let Y=(Q-J)*0.5,U=this.valueSize;this._weightPrev=Y/(J-X),this._weightNext=Y/(H-Q),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=$*X,Y=H-X,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,M=(Q-J)/(Z-J),O=M*M,F=O*M,N=-E*F+2*E*O-E*M,R=(1+E)*F+(-1.5-2*E)*O+(-0.5+E)*M+1,_=(-1-q)*F+(1.5+q)*O+0.5*M,L=q*F-q*O;for(let k=0;k!==X;++k)W[k]=N*K[U+k]+R*K[Y+k]+_*K[H+k]+L*K[G+k];return W}}class NZ extends U7{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=$*X,Y=H-X,U=(Q-J)/(Z-J),G=1-U;for(let E=0;E!==X;++E)W[E]=K[Y+E]*G+K[H+E]*U;return W}}class MZ extends U7{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($){return this.copySampleValue_($-1)}}class Q8{constructor($,J,Q,Z){if($===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(J===void 0||J.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+$);this.name=$,this.times=M$(J,this.TimeBufferType),this.values=M$(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON($){let J=$.constructor,Q;if(J.toJSON!==this.toJSON)Q=J.toJSON($);else{Q={name:$.name,times:M$($.times,Array),values:M$($.values,Array)};let Z=$.getInterpolation();if(Z!==$.DefaultInterpolation)Q.interpolation=Z}return Q.type=$.ValueTypeName,Q}InterpolantFactoryMethodDiscrete($){return new MZ(this.times,this.values,this.getValueSize(),$)}InterpolantFactoryMethodLinear($){return new NZ(this.times,this.values,this.getValueSize(),$)}InterpolantFactoryMethodSmooth($){return new qZ(this.times,this.values,this.getValueSize(),$)}setInterpolation($){let J;switch($){case 2300:J=this.InterpolantFactoryMethodDiscrete;break;case 2301:J=this.InterpolantFactoryMethodLinear;break;case 2302:J=this.InterpolantFactoryMethodSmooth;break}if(J===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if($!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=J,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift($){if($!==0){let J=this.times;for(let Q=0,Z=J.length;Q!==Z;++Q)J[Q]+=$}return this}scale($){if($!==1){let J=this.times;for(let Q=0,Z=J.length;Q!==Z;++Q)J[Q]*=$}return this}trim($,J){let Q=this.times,Z=Q.length,W=0,K=Z-1;while(W!==Z&&Q[W]<$)++W;while(K!==-1&&Q[K]>J)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let X=this.getValueSize();this.times=Q.slice(W,K),this.values=this.values.slice(W*X,K*X)}return this}validate(){let $=!0,J=this.getValueSize();if(J-Math.floor(J)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),$=!1;let Q=this.times,Z=this.values,W=Q.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),$=!1;let K=null;for(let X=0;X!==W;X++){let H=Q[X];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,X,H),$=!1;break}if(K!==null&&K>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,X,H,K),$=!1;break}K=H}if(Z!==void 0){if(AU(Z))for(let X=0,H=Z.length;X!==H;++X){let Y=Z[X];if(isNaN(Y)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,X,Y),$=!1;break}}}return $}optimize(){let $=this.times.slice(),J=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,W=$.length-1,K=1;for(let X=1;X<W;++X){let H=!1,Y=$[X],U=$[X+1];if(Y!==U&&(X!==1||Y!==$[0]))if(!Z){let G=X*Q,E=G-Q,q=G+Q;for(let M=0;M!==Q;++M){let O=J[G+M];if(O!==J[E+M]||O!==J[q+M]){H=!0;break}}}else H=!0;if(H){if(X!==K){$[K]=$[X];let G=X*Q,E=K*Q;for(let q=0;q!==Q;++q)J[E+q]=J[G+q]}++K}}if(W>0){$[K]=$[W];for(let X=W*Q,H=K*Q,Y=0;Y!==Q;++Y)J[H+Y]=J[X+Y];++K}if(K!==$.length)this.times=$.slice(0,K),this.values=J.slice(0,K*Q);else this.times=$,this.values=J;return this}clone(){let $=this.times.slice(),J=this.values.slice(),Z=new this.constructor(this.name,$,J);return Z.createInterpolant=this.createInterpolant,Z}}Q8.prototype.ValueTypeName="";Q8.prototype.TimeBufferType=Float32Array;Q8.prototype.ValueBufferType=Float32Array;Q8.prototype.DefaultInterpolation=2301;class G7 extends Q8{constructor($,J,Q){super($,J,Q)}}G7.prototype.ValueTypeName="bool";G7.prototype.ValueBufferType=Array;G7.prototype.DefaultInterpolation=2300;G7.prototype.InterpolantFactoryMethodLinear=void 0;G7.prototype.InterpolantFactoryMethodSmooth=void 0;class o$ extends Q8{constructor($,J,Q,Z){super($,J,Q,Z)}}o$.prototype.ValueTypeName="color";class l8 extends Q8{constructor($,J,Q,Z){super($,J,Q,Z)}}l8.prototype.ValueTypeName="number";class RZ extends U7{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=(Q-J)/(Z-J),Y=$*X;for(let U=Y+X;Y!==U;Y+=4)L8.slerpFlat(W,0,K,Y-X,K,Y,H);return W}}class n8 extends Q8{constructor($,J,Q,Z){super($,J,Q,Z)}InterpolantFactoryMethodLinear($){return new RZ(this.times,this.values,this.getValueSize(),$)}}n8.prototype.ValueTypeName="quaternion";n8.prototype.InterpolantFactoryMethodSmooth=void 0;class E7 extends Q8{constructor($,J,Q){super($,J,Q)}}E7.prototype.ValueTypeName="string";E7.prototype.ValueBufferType=Array;E7.prototype.DefaultInterpolation=2300;E7.prototype.InterpolantFactoryMethodLinear=void 0;E7.prototype.InterpolantFactoryMethodSmooth=void 0;class u8 extends Q8{constructor($,J,Q,Z){super($,J,Q,Z)}}u8.prototype.ValueTypeName="vector";class i${constructor($="",J=-1,Q=[],Z=2500){if(this.name=$,this.tracks=Q,this.duration=J,this.blendMode=Z,this.uuid=F8(),this.userData={},this.duration<0)this.resetDuration()}static parse($){let J=[],Q=$.tracks,Z=1/($.fps||1);for(let K=0,X=Q.length;K!==X;++K)J.push(SU(Q[K]).scale(Z));let W=new this($.name,$.duration,J,$.blendMode);return W.uuid=$.uuid,W.userData=JSON.parse($.userData||"{}"),W}static toJSON($){let J=[],Q=$.tracks,Z={name:$.name,duration:$.duration,tracks:J,uuid:$.uuid,blendMode:$.blendMode,userData:JSON.stringify($.userData)};for(let W=0,K=Q.length;W!==K;++W)J.push(Q8.toJSON(Q[W]));return Z}static CreateFromMorphTargetSequence($,J,Q,Z){let W=J.length,K=[];for(let X=0;X<W;X++){let H=[],Y=[];H.push((X+W-1)%W,X,(X+1)%W),Y.push(0,1,0);let U=TU(H);if(H=YW(H,1,U),Y=YW(Y,1,U),!Z&&H[0]===0)H.push(W),Y.push(Y[0]);K.push(new l8(".morphTargetInfluences["+J[X].name+"]",H,Y).scale(1/Q))}return new this($,-1,K)}static findByName($,J){let Q=$;if(!Array.isArray($)){let Z=$;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===J)return Q[Z];return null}static CreateClipsFromMorphTargetSequences($,J,Q){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let X=0,H=$.length;X<H;X++){let Y=$[X],U=Y.name.match(W);if(U&&U.length>1){let G=U[1],E=Z[G];if(!E)Z[G]=E=[];E.push(Y)}}let K=[];for(let X in Z)K.push(this.CreateFromMorphTargetSequence(X,Z[X],J,Q));return K}static parseAnimation($,J){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!$)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Q=function(G,E,q,M,O){if(q.length!==0){let F=[],N=[];if(MK(q,F,N,M),F.length!==0)O.push(new G(E,F,N))}},Z=[],W=$.name||"default",K=$.fps||30,X=$.blendMode,H=$.length||-1,Y=$.hierarchy||[];for(let G=0;G<Y.length;G++){let E=Y[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},M;for(M=0;M<E.length;M++)if(E[M].morphTargets)for(let O=0;O<E[M].morphTargets.length;O++)q[E[M].morphTargets[O]]=-1;for(let O in q){let F=[],N=[];for(let R=0;R!==E[M].morphTargets.length;++R){let _=E[M];F.push(_.time),N.push(_.morphTarget===O?1:0)}Z.push(new l8(".morphTargetInfluence["+O+"]",F,N))}H=q.length*K}else{let q=".bones["+J[G].name+"]";Q(u8,q+".position",E,"pos",Z),Q(n8,q+".quaternion",E,"rot",Z),Q(u8,q+".scale",E,"scl",Z)}}if(Z.length===0)return null;return new this(W,H,Z,X)}resetDuration(){let $=this.tracks,J=0;for(let Q=0,Z=$.length;Q!==Z;++Q){let W=this.tracks[Q];J=Math.max(J,W.times[W.times.length-1])}return this.duration=J,this}trim(){for(let $=0;$<this.tracks.length;$++)this.tracks[$].trim(0,this.duration);return this}validate(){let $=!0;for(let J=0;J<this.tracks.length;J++)$=$&&this.tracks[J].validate();return $}optimize(){for(let $=0;$<this.tracks.length;$++)this.tracks[$].optimize();return this}clone(){let $=[];for(let Q=0;Q<this.tracks.length;Q++)$.push(this.tracks[Q].clone());let J=new this.constructor(this.name,this.duration,$,this.blendMode);return J.userData=JSON.parse(JSON.stringify(this.userData)),J}toJSON(){return this.constructor.toJSON(this)}}function wU($){switch($.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return l8;case"vector":case"vector2":case"vector3":case"vector4":return u8;case"color":return o$;case"quaternion":return n8;case"bool":case"boolean":return G7;case"string":return E7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+$)}function SU($){if($.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let J=wU($.type);if($.times===void 0){let Q=[],Z=[];MK($.keys,Q,Z,"value"),$.times=Q,$.values=Z}if(J.parse!==void 0)return J.parse($);else return new J($.name,$.times,$.values,$.interpolation)}var k8={enabled:!1,files:{},add:function($,J){if(this.enabled===!1)return;this.files[$]=J},get:function($){if(this.enabled===!1)return;return this.files[$]},remove:function($){delete this.files[$]},clear:function(){this.files={}}};class FZ{constructor($,J,Q){let Z=this,W=!1,K=0,X=0,H=void 0,Y=[];this.onStart=void 0,this.onLoad=$,this.onProgress=J,this.onError=Q,this.abortController=new AbortController,this.itemStart=function(U){if(X++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,X)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,X);if(K===X){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(H)return H(U);return U},this.setURLModifier=function(U){return H=U,this},this.addHandler=function(U,G){return Y.push(U,G),this},this.removeHandler=function(U){let G=Y.indexOf(U);if(G!==-1)Y.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=Y.length;G<E;G+=2){let q=Y[G],M=Y[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var RK=new FZ;class s8{constructor($){this.manager=$!==void 0?$:RK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync($,J){let Q=this;return new Promise(function(Z,W){Q.load($,Z,J,W)})}parse(){}setCrossOrigin($){return this.crossOrigin=$,this}setWithCredentials($){return this.withCredentials=$,this}setPath($){return this.path=$,this}setResourcePath($){return this.resourcePath=$,this}setRequestHeader($){return this.requestHeader=$,this}abort(){return this}}s8.DEFAULT_MATERIAL_NAME="__DEFAULT";var x8={};class FK extends Error{constructor($,J){super($);this.response=J}}class O9 extends s8{constructor($){super($);this.mimeType="",this.responseType="",this._abortController=new AbortController}load($,J,Q,Z){if($===void 0)$="";if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=k8.get(`file:${$}`);if(W!==void 0)return this.manager.itemStart($),setTimeout(()=>{if(J)J(W);this.manager.itemEnd($)},0),W;if(x8[$]!==void 0){x8[$].push({onLoad:J,onProgress:Q,onError:Z});return}x8[$]=[],x8[$].push({onLoad:J,onProgress:Q,onError:Z});let K=new Request($,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),X=this.mimeType,H=this.responseType;fetch(K).then((Y)=>{if(Y.status===200||Y.status===0){if(Y.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||Y.body===void 0||Y.body.getReader===void 0)return Y;let U=x8[$],G=Y.body.getReader(),E=Y.headers.get("X-File-Size")||Y.headers.get("Content-Length"),q=E?parseInt(E):0,M=q!==0,O=0,F=new ReadableStream({start(N){R();function R(){G.read().then(({done:_,value:L})=>{if(_)N.close();else{O+=L.byteLength;let k=new ProgressEvent("progress",{lengthComputable:M,loaded:O,total:q});for(let P=0,C=U.length;P<C;P++){let S=U[P];if(S.onProgress)S.onProgress(k)}N.enqueue(L),R()}},(_)=>{N.error(_)})}}});return new Response(F)}else throw new FK(`fetch for "${Y.url}" responded with ${Y.status}: ${Y.statusText}`,Y)}).then((Y)=>{switch(H){case"arraybuffer":return Y.arrayBuffer();case"blob":return Y.blob();case"document":return Y.text().then((U)=>{return new DOMParser().parseFromString(U,X)});case"json":return Y.json();default:if(X==="")return Y.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return Y.arrayBuffer().then((M)=>q.decode(M))}}}).then((Y)=>{k8.add(`file:${$}`,Y);let U=x8[$];delete x8[$];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(Y)}}).catch((Y)=>{let U=x8[$];if(U===void 0)throw this.manager.itemError($),Y;delete x8[$];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(Y)}this.manager.itemError($)}).finally(()=>{this.manager.itemEnd($)}),this.manager.itemStart($)}setResponseType($){return this.responseType=$,this}setMimeType($){return this.mimeType=$,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var G6=new WeakMap;class OZ extends s8{constructor($){super($)}load($,J,Q,Z){if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=this,K=k8.get(`image:${$}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart($),setTimeout(function(){if(J)J(K);W.manager.itemEnd($)},0);else{let G=G6.get(K);if(G===void 0)G=[],G6.set(K,G);G.push({onLoad:J,onError:Z})}return K}let X=q6("img");function H(){if(U(),J)J(this);let G=G6.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}G6.delete(this),W.manager.itemEnd($)}function Y(G){if(U(),Z)Z(G);k8.remove(`image:${$}`);let E=G6.get(this)||[];for(let q=0;q<E.length;q++){let M=E[q];if(M.onError)M.onError(G)}G6.delete(this),W.manager.itemError($),W.manager.itemEnd($)}function U(){X.removeEventListener("load",H,!1),X.removeEventListener("error",Y,!1)}if(X.addEventListener("load",H,!1),X.addEventListener("error",Y,!1),$.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return k8.add(`image:${$}`,X),W.manager.itemStart($),X.src=$,X}}class a$ extends s8{constructor($){super($)}load($,J,Q,Z){let W=new D1,K=new OZ(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load($,function(X){if(W.image=X,W.needsUpdate=!0,J!==void 0)J(W)},Q,Z),W}}class L9 extends E1{constructor($,J=1){super();this.isLight=!0,this.type="Light",this.color=new y0($),this.intensity=J}dispose(){}copy($,J){return super.copy($,J),this.color.copy($.color),this.intensity=$.intensity,this}toJSON($){let J=super.toJSON($);if(J.object.color=this.color.getHex(),J.object.intensity=this.intensity,this.groundColor!==void 0)J.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)J.object.distance=this.distance;if(this.angle!==void 0)J.object.angle=this.angle;if(this.decay!==void 0)J.object.decay=this.decay;if(this.penumbra!==void 0)J.object.penumbra=this.penumbra;if(this.shadow!==void 0)J.object.shadow=this.shadow.toJSON();if(this.target!==void 0)J.object.target=this.target.uuid;return J}}var HQ=new g0,UW=new g,GW=new g;class r${constructor($){this.camera=$,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new u0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new g0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new N9,this._frameExtents=new u0(1,1),this._viewportCount=1,this._viewports=[new i0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices($){let J=this.camera,Q=this.matrix;if(UW.setFromMatrixPosition($.matrixWorld),J.position.copy(UW),GW.setFromMatrixPosition($.target.matrixWorld),J.lookAt(GW),J.updateMatrixWorld(),HQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),this._frustum.setFromProjectionMatrix(HQ,J.coordinateSystem,J.reversedDepth),J.reversedDepth)Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);Q.multiply(HQ)}getViewport($){return this._viewports[$]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy($){return this.camera=$.camera.clone(),this.intensity=$.intensity,this.bias=$.bias,this.radius=$.radius,this.autoUpdate=$.autoUpdate,this.needsUpdate=$.needsUpdate,this.normalBias=$.normalBias,this.blurSamples=$.blurSamples,this.mapSize.copy($.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let $={};if(this.intensity!==1)$.intensity=this.intensity;if(this.bias!==0)$.bias=this.bias;if(this.normalBias!==0)$.normalBias=this.normalBias;if(this.radius!==1)$.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)$.mapSize=this.mapSize.toArray();return $.camera=this.camera.toJSON(!1).object,delete $.camera.matrix,$}}class OK extends r${constructor(){super(new w1(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices($){let J=this.camera,Q=w7*2*$.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=$.distance||J.far;if(Q!==J.fov||Z!==J.aspect||W!==J.far)J.fov=Q,J.aspect=Z,J.far=W,J.updateProjectionMatrix();super.updateMatrices($)}copy($){return super.copy($),this.focus=$.focus,this}}class t$ extends L9{constructor($,J,Q=0,Z=Math.PI/3,W=0,K=2){super($,J);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(E1.DEFAULT_UP),this.updateMatrix(),this.target=new E1,this.distance=Q,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new OK}get power(){return this.intensity*Math.PI}set power($){this.intensity=$/Math.PI}dispose(){this.shadow.dispose()}copy($,J){return super.copy($,J),this.distance=$.distance,this.angle=$.angle,this.penumbra=$.penumbra,this.decay=$.decay,this.target=$.target.clone(),this.shadow=$.shadow.clone(),this}}var EW=new g0,t6=new g,YQ=new g;class LK extends r${constructor(){super(new w1(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new u0(4,2),this._viewportCount=6,this._viewports=[new i0(2,1,1,1),new i0(0,1,1,1),new i0(3,1,1,1),new i0(1,1,1,1),new i0(3,0,1,1),new i0(1,0,1,1)],this._cubeDirections=[new g(1,0,0),new g(-1,0,0),new g(0,0,1),new g(0,0,-1),new g(0,1,0),new g(0,-1,0)],this._cubeUps=[new g(0,1,0),new g(0,1,0),new g(0,1,0),new g(0,1,0),new g(0,0,1),new g(0,0,-1)]}updateMatrices($,J=0){let Q=this.camera,Z=this.matrix,W=$.distance||Q.far;if(W!==Q.far)Q.far=W,Q.updateProjectionMatrix();t6.setFromMatrixPosition($.matrixWorld),Q.position.copy(t6),YQ.copy(Q.position),YQ.add(this._cubeDirections[J]),Q.up.copy(this._cubeUps[J]),Q.lookAt(YQ),Q.updateMatrixWorld(),Z.makeTranslation(-t6.x,-t6.y,-t6.z),EW.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(EW,Q.coordinateSystem,Q.reversedDepth)}}class e$ extends L9{constructor($,J,Q=0,Z=2){super($,J);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new LK}get power(){return this.intensity*4*Math.PI}set power($){this.intensity=$/(4*Math.PI)}dispose(){this.shadow.dispose()}copy($,J){return super.copy($,J),this.distance=$.distance,this.decay=$.decay,this.shadow=$.shadow.clone(),this}}class q7 extends z6{constructor($=-1,J=1,Q=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=$,this.right=J,this.top=Q,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy($,J){return super.copy($,J),this.left=$.left,this.right=$.right,this.top=$.top,this.bottom=$.bottom,this.near=$.near,this.far=$.far,this.zoom=$.zoom,this.view=$.view===null?null:Object.assign({},$.view),this}setViewOffset($,J,Q,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=$,this.view.fullHeight=J,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let $=(this.right-this.left)/(2*this.zoom),J=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=Q-$,K=Q+$,X=Z+J,H=Z-J;if(this.view!==null&&this.view.enabled){let Y=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=Y*this.view.offsetX,K=W+Y*this.view.width,X-=U*this.view.offsetY,H=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,X,H,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON($){let J=super.toJSON($);if(J.object.zoom=this.zoom,J.object.left=this.left,J.object.right=this.right,J.object.top=this.top,J.object.bottom=this.bottom,J.object.near=this.near,J.object.far=this.far,this.view!==null)J.object.view=Object.assign({},this.view);return J}}class DK extends r${constructor(){super(new q7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class $J extends L9{constructor($,J){super($,J);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(E1.DEFAULT_UP),this.updateMatrix(),this.target=new E1,this.shadow=new DK}dispose(){this.shadow.dispose()}copy($){return super.copy($),this.target=$.target.clone(),this.shadow=$.shadow.clone(),this}}class N7{static extractUrlBase($){let J=$.lastIndexOf("/");if(J===-1)return"./";return $.slice(0,J+1)}static resolveURL($,J){if(typeof $!=="string"||$==="")return"";if(/^https?:\/\//i.test(J)&&/^\//.test($))J=J.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test($))return $;if(/^data:.*,.*$/i.test($))return $;if(/^blob:.*$/i.test($))return $;return J+$}}var UQ=new WeakMap;class JJ extends s8{constructor($){super($);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions($){return this.options=$,this}load($,J,Q,Z){if($===void 0)$="";if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=this,K=k8.get(`image-bitmap:${$}`);if(K!==void 0){if(W.manager.itemStart($),K.then){K.then((Y)=>{if(UQ.has(K)===!0){if(Z)Z(UQ.get(K));W.manager.itemError($),W.manager.itemEnd($)}else{if(J)J(Y);return W.manager.itemEnd($),Y}});return}return setTimeout(function(){if(J)J(K);W.manager.itemEnd($)},0),K}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader,X.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let H=fetch($,X).then(function(Y){return Y.blob()}).then(function(Y){return createImageBitmap(Y,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(Y){if(k8.add(`image-bitmap:${$}`,Y),J)J(Y);return W.manager.itemEnd($),Y}).catch(function(Y){if(Z)Z(Y);UQ.set(H,Y),k8.remove(`image-bitmap:${$}`),W.manager.itemError($),W.manager.itemEnd($)});k8.add(`image-bitmap:${$}`,H),W.manager.itemStart($)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class LZ extends w1{constructor($=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=$}}var DZ="\\[\\]\\.:\\/",jU=new RegExp("["+DZ+"]","g"),_Z="[^"+DZ+"]",fU="[^"+DZ.replace("\\.","")+"]",vU=/((?:WC+[\/:])*)/.source.replace("WC",_Z),yU=/(WCOD+)?/.source.replace("WCOD",fU),hU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_Z),bU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_Z),xU=new RegExp("^"+vU+yU+hU+bU+"$"),gU=["material","materials","bones","map"];class _K{constructor($,J,Q){let Z=Q||e0.parseTrackName(J);this._targetGroup=$,this._bindings=$.subscribe_(J,Z)}getValue($,J){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue($,J)}setValue($,J){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=Q.length;Z!==W;++Z)Q[Z].setValue($,J)}bind(){let $=this._bindings;for(let J=this._targetGroup.nCachedObjects_,Q=$.length;J!==Q;++J)$[J].bind()}unbind(){let $=this._bindings;for(let J=this._targetGroup.nCachedObjects_,Q=$.length;J!==Q;++J)$[J].unbind()}}class e0{constructor($,J,Q){this.path=J,this.parsedPath=Q||e0.parseTrackName(J),this.node=e0.findNode($,this.parsedPath.nodeName),this.rootNode=$,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create($,J,Q){if(!($&&$.isAnimationObjectGroup))return new e0($,J,Q);else return new e0.Composite($,J,Q)}static sanitizeNodeName($){return $.replace(/\s/g,"_").replace(jU,"")}static parseTrackName($){let J=xU.exec($);if(J===null)throw Error("PropertyBinding: Cannot parse trackName: "+$);let Q={nodeName:J[2],objectName:J[3],objectIndex:J[4],propertyName:J[5],propertyIndex:J[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=Q.nodeName.substring(Z+1);if(gU.indexOf(W)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=W}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+$);return Q}static findNode($,J){if(J===void 0||J===""||J==="."||J===-1||J===$.name||J===$.uuid)return $;if($.skeleton){let Q=$.skeleton.getBoneByName(J);if(Q!==void 0)return Q}if($.children){let Q=function(W){for(let K=0;K<W.length;K++){let X=W[K];if(X.name===J||X.uuid===J)return X;let H=Q(X.children);if(H)return H}return null},Z=Q($.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct($,J){$[J]=this.targetObject[this.propertyName]}_getValue_array($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)$[J++]=Q[Z]}_getValue_arrayElement($,J){$[J]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray($,J){this.resolvedProperty.toArray($,J)}_setValue_direct($,J){this.targetObject[this.propertyName]=$[J]}_setValue_direct_setNeedsUpdate($,J){this.targetObject[this.propertyName]=$[J],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate($,J){this.targetObject[this.propertyName]=$[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++]}_setValue_array_setNeedsUpdate($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement($,J){this.resolvedProperty[this.propertyIndex]=$[J]}_setValue_arrayElement_setNeedsUpdate($,J){this.resolvedProperty[this.propertyIndex]=$[J],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate($,J){this.resolvedProperty[this.propertyIndex]=$[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray($,J){this.resolvedProperty.fromArray($,J)}_setValue_fromArray_setNeedsUpdate($,J){this.resolvedProperty.fromArray($,J),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate($,J){this.resolvedProperty.fromArray($,J),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound($,J){this.bind(),this.getValue($,J)}_setValue_unbound($,J){this.bind(),this.setValue($,J)}bind(){let $=this.node,J=this.parsedPath,Q=J.objectName,Z=J.propertyName,W=J.propertyIndex;if(!$)$=e0.findNode(this.rootNode,J.nodeName),this.node=$;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!$){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let Y=J.objectIndex;switch(Q){case"materials":if(!$.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!$.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}$=$.material.materials;break;case"bones":if(!$.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}$=$.skeleton.bones;for(let U=0;U<$.length;U++)if($[U].name===Y){Y=U;break}break;case"map":if("map"in $){$=$.map;break}if(!$.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!$.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}$=$.material.map;break;default:if($[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}$=$[Q]}if(Y!==void 0){if($[Y]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,$);return}$=$[Y]}}let K=$[Z];if(K===void 0){let Y=J.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+Y+"."+Z+" but it wasn't found.",$);return}let X=this.Versioning.None;if(this.targetObject=$,$.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if($.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!$.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!$.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if($.morphTargetDictionary[W]!==void 0)W=$.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))H=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}e0.Composite=_K;e0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};e0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};e0.prototype.GetterByBindingType=[e0.prototype._getValue_direct,e0.prototype._getValue_array,e0.prototype._getValue_arrayElement,e0.prototype._getValue_toArray];e0.prototype.SetterByBindingTypeAndVersioning=[[e0.prototype._setValue_direct,e0.prototype._setValue_direct_setNeedsUpdate,e0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_array,e0.prototype._setValue_array_setNeedsUpdate,e0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_arrayElement,e0.prototype._setValue_arrayElement_setNeedsUpdate,e0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_fromArray,e0.prototype._setValue_fromArray_setNeedsUpdate,e0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eR=new Float32Array(1);function VZ($,J,Q,Z){let W=pU(Z);switch(Q){case 1021:return $*J;case 1028:return $*J/W.components*W.byteLength;case 1029:return $*J/W.components*W.byteLength;case 1030:return $*J*2/W.components*W.byteLength;case 1031:return $*J*2/W.components*W.byteLength;case 1022:return $*J*3/W.components*W.byteLength;case 1023:return $*J*4/W.components*W.byteLength;case 1033:return $*J*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*8;case 33778:case 33779:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 35841:case 35843:return Math.max($,16)*Math.max(J,8)/4;case 35840:case 35842:return Math.max($,8)*Math.max(J,8)/2;case 36196:case 37492:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*8;case 37496:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 37808:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 37809:return Math.floor(($+4)/5)*Math.floor((J+3)/4)*16;case 37810:return Math.floor(($+4)/5)*Math.floor((J+4)/5)*16;case 37811:return Math.floor(($+5)/6)*Math.floor((J+4)/5)*16;case 37812:return Math.floor(($+5)/6)*Math.floor((J+5)/6)*16;case 37813:return Math.floor(($+7)/8)*Math.floor((J+4)/5)*16;case 37814:return Math.floor(($+7)/8)*Math.floor((J+5)/6)*16;case 37815:return Math.floor(($+7)/8)*Math.floor((J+7)/8)*16;case 37816:return Math.floor(($+9)/10)*Math.floor((J+4)/5)*16;case 37817:return Math.floor(($+9)/10)*Math.floor((J+5)/6)*16;case 37818:return Math.floor(($+9)/10)*Math.floor((J+7)/8)*16;case 37819:return Math.floor(($+9)/10)*Math.floor((J+9)/10)*16;case 37820:return Math.floor(($+11)/12)*Math.floor((J+9)/10)*16;case 37821:return Math.floor(($+11)/12)*Math.floor((J+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil($/4)*Math.ceil(J/4)*16;case 36283:case 36284:return Math.ceil($/4)*Math.ceil(J/4)*8;case 36285:case 36286:return Math.ceil($/4)*Math.ceil(J/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function pU($){switch($){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${$}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function dK(){let $=null,J=!1,Q=null,Z=null;function W(K,X){Q(K,X),Z=$.requestAnimationFrame(W)}return{start:function(){if(J===!0)return;if(Q===null)return;Z=$.requestAnimationFrame(W),J=!0},stop:function(){$.cancelAnimationFrame(Z),J=!1},setAnimationLoop:function(K){Q=K},setContext:function(K){$=K}}}function lU($){let J=new WeakMap;function Q(H,Y){let{array:U,usage:G}=H,E=U.byteLength,q=$.createBuffer();$.bindBuffer(Y,q),$.bufferData(Y,U,G),H.onUploadCallback();let M;if(U instanceof Float32Array)M=$.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)M=$.HALF_FLOAT;else if(U instanceof Uint16Array)if(H.isFloat16BufferAttribute)M=$.HALF_FLOAT;else M=$.UNSIGNED_SHORT;else if(U instanceof Int16Array)M=$.SHORT;else if(U instanceof Uint32Array)M=$.UNSIGNED_INT;else if(U instanceof Int32Array)M=$.INT;else if(U instanceof Int8Array)M=$.BYTE;else if(U instanceof Uint8Array)M=$.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)M=$.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:M,bytesPerElement:U.BYTES_PER_ELEMENT,version:H.version,size:E}}function Z(H,Y,U){let{array:G,updateRanges:E}=Y;if($.bindBuffer(U,H),E.length===0)$.bufferSubData(U,0,G);else{E.sort((M,O)=>M.start-O.start);let q=0;for(let M=1;M<E.length;M++){let O=E[q],F=E[M];if(F.start<=O.start+O.count+1)O.count=Math.max(O.count,F.start+F.count-O.start);else++q,E[q]=F}E.length=q+1;for(let M=0,O=E.length;M<O;M++){let F=E[M];$.bufferSubData(U,F.start*G.BYTES_PER_ELEMENT,G,F.start,F.count)}Y.clearUpdateRanges()}Y.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return J.get(H)}function K(H){if(H.isInterleavedBufferAttribute)H=H.data;let Y=J.get(H);if(Y)$.deleteBuffer(Y.buffer),J.delete(H)}function X(H,Y){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let G=J.get(H);if(!G||G.version<H.version)J.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let U=J.get(H);if(U===void 0)J.set(H,Q(H,Y));else if(U.version<H.version){if(U.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,H,Y),U.version=H.version}}return{get:W,remove:K,update:X}}var uU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mU=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aU=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$G=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JG=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QG=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZG=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XG=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HG=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YG=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UG=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GG=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EG=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qG=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NG=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LG="gl_FragColor = linearToOutputTexel( gl_FragColor );",DG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_G=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,BG=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kG=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TG=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jG=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fG=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vG=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hG=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xG=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gG=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pG=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lG=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uG=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mG=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rG=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$q=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jq=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qq=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zq=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wq=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kq=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xq=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hq=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yq=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uq=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gq=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eq=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qq=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nq=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mq=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rq=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oq=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lq=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dq=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_q=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m0={alphahash_fragment:uU,alphahash_pars_fragment:mU,alphamap_fragment:dU,alphamap_pars_fragment:cU,alphatest_fragment:nU,alphatest_pars_fragment:sU,aomap_fragment:oU,aomap_pars_fragment:iU,batching_pars_vertex:aU,batching_vertex:rU,begin_vertex:tU,beginnormal_vertex:eU,bsdfs:$G,iridescence_fragment:JG,bumpmap_pars_fragment:QG,clipping_planes_fragment:ZG,clipping_planes_pars_fragment:WG,clipping_planes_pars_vertex:KG,clipping_planes_vertex:XG,color_fragment:HG,color_pars_fragment:YG,color_pars_vertex:UG,color_vertex:GG,common:EG,cube_uv_reflection_fragment:qG,defaultnormal_vertex:NG,displacementmap_pars_vertex:MG,displacementmap_vertex:RG,emissivemap_fragment:FG,emissivemap_pars_fragment:OG,colorspace_fragment:LG,colorspace_pars_fragment:DG,envmap_fragment:_G,envmap_common_pars_fragment:VG,envmap_pars_fragment:BG,envmap_pars_vertex:zG,envmap_physical_pars_fragment:vG,envmap_vertex:kG,fog_vertex:CG,fog_pars_vertex:IG,fog_fragment:PG,fog_pars_fragment:AG,gradientmap_pars_fragment:TG,lightmap_pars_fragment:wG,lights_lambert_fragment:SG,lights_lambert_pars_fragment:jG,lights_pars_begin:fG,lights_toon_fragment:yG,lights_toon_pars_fragment:hG,lights_phong_fragment:bG,lights_phong_pars_fragment:xG,lights_physical_fragment:gG,lights_physical_pars_fragment:pG,lights_fragment_begin:lG,lights_fragment_maps:uG,lights_fragment_end:mG,logdepthbuf_fragment:dG,logdepthbuf_pars_fragment:cG,logdepthbuf_pars_vertex:nG,logdepthbuf_vertex:sG,map_fragment:oG,map_pars_fragment:iG,map_particle_fragment:aG,map_particle_pars_fragment:rG,metalnessmap_fragment:tG,metalnessmap_pars_fragment:eG,morphinstance_vertex:$E,morphcolor_vertex:JE,morphnormal_vertex:QE,morphtarget_pars_vertex:ZE,morphtarget_vertex:WE,normal_fragment_begin:KE,normal_fragment_maps:XE,normal_pars_fragment:HE,normal_pars_vertex:YE,normal_vertex:UE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:ME,opaque_fragment:RE,packing:FE,premultiplied_alpha_fragment:OE,project_vertex:LE,dithering_fragment:DE,dithering_pars_fragment:_E,roughnessmap_fragment:VE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:kE,shadowmap_vertex:CE,shadowmask_pars_fragment:IE,skinbase_vertex:PE,skinning_pars_vertex:AE,skinning_vertex:TE,skinnormal_vertex:wE,specularmap_fragment:SE,specularmap_pars_fragment:jE,tonemapping_fragment:fE,tonemapping_pars_fragment:vE,transmission_fragment:yE,transmission_pars_fragment:hE,uv_pars_fragment:bE,uv_pars_vertex:xE,uv_vertex:gE,worldpos_vertex:pE,background_vert:lE,background_frag:uE,backgroundCube_vert:mE,backgroundCube_frag:dE,cube_vert:cE,cube_frag:nE,depth_vert:sE,depth_frag:oE,distanceRGBA_vert:iE,distanceRGBA_frag:aE,equirect_vert:rE,equirect_frag:tE,linedashed_vert:eE,linedashed_frag:$q,meshbasic_vert:Jq,meshbasic_frag:Qq,meshlambert_vert:Zq,meshlambert_frag:Wq,meshmatcap_vert:Kq,meshmatcap_frag:Xq,meshnormal_vert:Hq,meshnormal_frag:Yq,meshphong_vert:Uq,meshphong_frag:Gq,meshphysical_vert:Eq,meshphysical_frag:qq,meshtoon_vert:Nq,meshtoon_frag:Mq,points_vert:Rq,points_frag:Fq,shadow_vert:Oq,shadow_frag:Lq,sprite_vert:Dq,sprite_frag:_q},R0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new p0},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new p0}},envmap:{envMap:{value:null},envMapRotation:{value:new p0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new p0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new p0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new p0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new p0},normalScale:{value:new u0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new p0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new p0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new p0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new p0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0},uvTransform:{value:new p0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new u0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new p0},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0}}},T8={basic:{uniforms:v1([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.fog]),vertexShader:m0.meshbasic_vert,fragmentShader:m0.meshbasic_frag},lambert:{uniforms:v1([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new y0(0)}}]),vertexShader:m0.meshlambert_vert,fragmentShader:m0.meshlambert_frag},phong:{uniforms:v1([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30}}]),vertexShader:m0.meshphong_vert,fragmentShader:m0.meshphong_frag},standard:{uniforms:v1([R0.common,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.roughnessmap,R0.metalnessmap,R0.fog,R0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag},toon:{uniforms:v1([R0.common,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.gradientmap,R0.fog,R0.lights,{emissive:{value:new y0(0)}}]),vertexShader:m0.meshtoon_vert,fragmentShader:m0.meshtoon_frag},matcap:{uniforms:v1([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,{matcap:{value:null}}]),vertexShader:m0.meshmatcap_vert,fragmentShader:m0.meshmatcap_frag},points:{uniforms:v1([R0.points,R0.fog]),vertexShader:m0.points_vert,fragmentShader:m0.points_frag},dashed:{uniforms:v1([R0.common,R0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:m0.linedashed_vert,fragmentShader:m0.linedashed_frag},depth:{uniforms:v1([R0.common,R0.displacementmap]),vertexShader:m0.depth_vert,fragmentShader:m0.depth_frag},normal:{uniforms:v1([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,{opacity:{value:1}}]),vertexShader:m0.meshnormal_vert,fragmentShader:m0.meshnormal_frag},sprite:{uniforms:v1([R0.sprite,R0.fog]),vertexShader:m0.sprite_vert,fragmentShader:m0.sprite_frag},background:{uniforms:{uvTransform:{value:new p0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:m0.background_vert,fragmentShader:m0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new p0}},vertexShader:m0.backgroundCube_vert,fragmentShader:m0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:m0.cube_vert,fragmentShader:m0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:m0.equirect_vert,fragmentShader:m0.equirect_frag},distanceRGBA:{uniforms:v1([R0.common,R0.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:m0.distanceRGBA_vert,fragmentShader:m0.distanceRGBA_frag},shadow:{uniforms:v1([R0.lights,R0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:m0.shadow_vert,fragmentShader:m0.shadow_frag}};T8.physical={uniforms:v1([T8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new p0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new p0},clearcoatNormalScale:{value:new u0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new p0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new p0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new p0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new p0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new p0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new p0},transmissionSamplerSize:{value:new u0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new p0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new p0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new p0},anisotropyVector:{value:new u0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new p0}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag};var QJ={r:0,b:0,g:0},h7=new O8,Vq=new g0;function Bq($,J,Q,Z,W,K,X){let H=new y0(0),Y=K===!0?0:1,U,G,E=null,q=0,M=null;function O(L){let k=L.isScene===!0?L.background:null;if(k&&k.isTexture)k=(L.backgroundBlurriness>0?Q:J).get(k);return k}function F(L){let k=!1,P=O(L);if(P===null)R(H,Y);else if(P&&P.isColor)R(P,1),k=!0;let C=$.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,X);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,X);if($.autoClear||k)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),$.clear($.autoClearColor,$.autoClearDepth,$.autoClearStencil)}function N(L,k){let P=O(k);if(P&&(P.isCubeTexture||P.mapping===Z9)){if(G===void 0)G=new T1(new B6(1,1,1),new d1({name:"BackgroundCubeMaterial",uniforms:y7(T8.backgroundCube.uniforms),vertexShader:T8.backgroundCube.vertexShader,fragmentShader:T8.backgroundCube.fragmentShader,side:t1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(C,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(h7.copy(k.backgroundRotation),h7.x*=-1,h7.y*=-1,h7.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1)h7.y*=-1,h7.z*=-1;if(G.material.uniforms.envMap.value=P,G.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(Vq.makeRotationFromEuler(h7)),G.material.toneMapped=o0.getTransfer(P.colorSpace)!==Y1,E!==P||q!==P.version||M!==$.toneMapping)G.material.needsUpdate=!0,E=P,q=P.version,M=$.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(P&&P.isTexture){if(U===void 0)U=new T1(new F9(2,2),new d1({name:"BackgroundMaterial",uniforms:y7(T8.background.uniforms),vertexShader:T8.background.vertexShader,fragmentShader:T8.background.fragmentShader,side:W7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=P,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.toneMapped=o0.getTransfer(P.colorSpace)!==Y1,P.matrixAutoUpdate===!0)P.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(P.matrix),E!==P||q!==P.version||M!==$.toneMapping)U.material.needsUpdate=!0,E=P,q=P.version,M=$.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function R(L,k){L.getRGB(QJ,HZ($)),Z.buffers.color.setClear(QJ.r,QJ.g,QJ.b,k,X)}function _(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return H},setClearColor:function(L,k=1){H.set(L),Y=k,R(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(L){Y=L,R(H,Y)},render:F,addToRenderList:N,dispose:_}}function zq($,J){let Q=$.getParameter($.MAX_VERTEX_ATTRIBS),Z={},W=q(null),K=W,X=!1;function H(D,I,w,A,f){let h=!1,x=E(A,w,I);if(K!==x)K=x,U(K.object);if(h=M(D,A,w,f),h)O(D,A,w,f);if(f!==null)J.update(f,$.ELEMENT_ARRAY_BUFFER);if(h||X){if(X=!1,k(D,I,w,A),f!==null)$.bindBuffer($.ELEMENT_ARRAY_BUFFER,J.get(f).buffer)}}function Y(){return $.createVertexArray()}function U(D){return $.bindVertexArray(D)}function G(D){return $.deleteVertexArray(D)}function E(D,I,w){let A=w.wireframe===!0,f=Z[D.id];if(f===void 0)f={},Z[D.id]=f;let h=f[I.id];if(h===void 0)h={},f[I.id]=h;let x=h[A];if(x===void 0)x=q(Y()),h[A]=x;return x}function q(D){let I=[],w=[],A=[];for(let f=0;f<Q;f++)I[f]=0,w[f]=0,A[f]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:w,attributeDivisors:A,object:D,attributes:{},index:null}}function M(D,I,w,A){let f=K.attributes,h=I.attributes,x=0,p=w.getAttributes();for(let y in p)if(p[y].location>=0){let a=f[y],Q0=h[y];if(Q0===void 0){if(y==="instanceMatrix"&&D.instanceMatrix)Q0=D.instanceMatrix;if(y==="instanceColor"&&D.instanceColor)Q0=D.instanceColor}if(a===void 0)return!0;if(a.attribute!==Q0)return!0;if(Q0&&a.data!==Q0.data)return!0;x++}if(K.attributesNum!==x)return!0;if(K.index!==A)return!0;return!1}function O(D,I,w,A){let f={},h=I.attributes,x=0,p=w.getAttributes();for(let y in p)if(p[y].location>=0){let a=h[y];if(a===void 0){if(y==="instanceMatrix"&&D.instanceMatrix)a=D.instanceMatrix;if(y==="instanceColor"&&D.instanceColor)a=D.instanceColor}let Q0={};if(Q0.attribute=a,a&&a.data)Q0.data=a.data;f[y]=Q0,x++}K.attributes=f,K.attributesNum=x,K.index=A}function F(){let D=K.newAttributes;for(let I=0,w=D.length;I<w;I++)D[I]=0}function N(D){R(D,0)}function R(D,I){let{newAttributes:w,enabledAttributes:A,attributeDivisors:f}=K;if(w[D]=1,A[D]===0)$.enableVertexAttribArray(D),A[D]=1;if(f[D]!==I)$.vertexAttribDivisor(D,I),f[D]=I}function _(){let{newAttributes:D,enabledAttributes:I}=K;for(let w=0,A=I.length;w<A;w++)if(I[w]!==D[w])$.disableVertexAttribArray(w),I[w]=0}function L(D,I,w,A,f,h,x){if(x===!0)$.vertexAttribIPointer(D,I,w,f,h);else $.vertexAttribPointer(D,I,w,A,f,h)}function k(D,I,w,A){F();let f=A.attributes,h=w.getAttributes(),x=I.defaultAttributeValues;for(let p in h){let y=h[p];if(y.location>=0){let o=f[p];if(o===void 0){if(p==="instanceMatrix"&&D.instanceMatrix)o=D.instanceMatrix;if(p==="instanceColor"&&D.instanceColor)o=D.instanceColor}if(o!==void 0){let{normalized:a,itemSize:Q0}=o,X0=J.get(o);if(X0===void 0)continue;let{buffer:L0,type:q0,bytesPerElement:c}=X0,W0=q0===$.INT||q0===$.UNSIGNED_INT||o.gpuType===FQ;if(o.isInterleavedBufferAttribute){let e=o.data,F0=e.stride,N0=o.offset;if(e.isInstancedInterleavedBuffer){for(let _0=0;_0<y.locationSize;_0++)R(y.location+_0,e.meshPerAttribute);if(D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=e.meshPerAttribute*e.count}else for(let _0=0;_0<y.locationSize;_0++)N(y.location+_0);$.bindBuffer($.ARRAY_BUFFER,L0);for(let _0=0;_0<y.locationSize;_0++)L(y.location+_0,Q0/y.locationSize,q0,a,F0*c,(N0+Q0/y.locationSize*_0)*c,W0)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<y.locationSize;e++)R(y.location+e,o.meshPerAttribute);if(D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=o.meshPerAttribute*o.count}else for(let e=0;e<y.locationSize;e++)N(y.location+e);$.bindBuffer($.ARRAY_BUFFER,L0);for(let e=0;e<y.locationSize;e++)L(y.location+e,Q0/y.locationSize,q0,a,Q0*c,Q0/y.locationSize*e*c,W0)}}else if(x!==void 0){let a=x[p];if(a!==void 0)switch(a.length){case 2:$.vertexAttrib2fv(y.location,a);break;case 3:$.vertexAttrib3fv(y.location,a);break;case 4:$.vertexAttrib4fv(y.location,a);break;default:$.vertexAttrib1fv(y.location,a)}}}}_()}function P(){b();for(let D in Z){let I=Z[D];for(let w in I){let A=I[w];for(let f in A)G(A[f].object),delete A[f];delete I[w]}delete Z[D]}}function C(D){if(Z[D.id]===void 0)return;let I=Z[D.id];for(let w in I){let A=I[w];for(let f in A)G(A[f].object),delete A[f];delete I[w]}delete Z[D.id]}function S(D){for(let I in Z){let w=Z[I];if(w[D.id]===void 0)continue;let A=w[D.id];for(let f in A)G(A[f].object),delete A[f];delete w[D.id]}}function b(){if(B(),X=!0,K===W)return;K=W,U(K.object)}function B(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:b,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:F,enableAttribute:N,disableUnusedAttributes:_}}function kq($,J,Q){let Z;function W(U){Z=U}function K(U,G){$.drawArrays(Z,U,G),Q.update(G,Z,1)}function X(U,G,E){if(E===0)return;$.drawArraysInstanced(Z,U,G,E),Q.update(G,Z,E)}function H(U,G,E){if(E===0)return;J.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let M=0;for(let O=0;O<E;O++)M+=G[O];Q.update(M,Z,1)}function Y(U,G,E,q){if(E===0)return;let M=J.get("WEBGL_multi_draw");if(M===null)for(let O=0;O<U.length;O++)X(U[O],G[O],q[O]);else{M.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,q,0,E);let O=0;for(let F=0;F<E;F++)O+=G[F]*q[F];Q.update(O,Z,1)}}this.setMode=W,this.render=K,this.renderInstances=X,this.renderMultiDraw=H,this.renderMultiDrawInstances=Y}function Cq($,J,Q,Z){let W;function K(){if(W!==void 0)return W;if(J.has("EXT_texture_filter_anisotropic")===!0){let S=J.get("EXT_texture_filter_anisotropic");W=$.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(S){if(S!==I8&&Z.convert(S)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(S){let b=S===K9&&(J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float"));if(S!==X7&&Z.convert(S)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==H7&&!b)return!1;return!0}function Y(S){if(S==="highp"){if($.getShaderPrecisionFormat($.VERTEX_SHADER,$.HIGH_FLOAT).precision>0&&$.getShaderPrecisionFormat($.FRAGMENT_SHADER,$.HIGH_FLOAT).precision>0)return"highp";S="mediump"}if(S==="mediump"){if($.getShaderPrecisionFormat($.VERTEX_SHADER,$.MEDIUM_FLOAT).precision>0&&$.getShaderPrecisionFormat($.FRAGMENT_SHADER,$.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",G=Y(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=Q.logarithmicDepthBuffer===!0,q=Q.reversedDepthBuffer===!0&&J.has("EXT_clip_control"),M=$.getParameter($.MAX_TEXTURE_IMAGE_UNITS),O=$.getParameter($.MAX_VERTEX_TEXTURE_IMAGE_UNITS),F=$.getParameter($.MAX_TEXTURE_SIZE),N=$.getParameter($.MAX_CUBE_MAP_TEXTURE_SIZE),R=$.getParameter($.MAX_VERTEX_ATTRIBS),_=$.getParameter($.MAX_VERTEX_UNIFORM_VECTORS),L=$.getParameter($.MAX_VARYING_VECTORS),k=$.getParameter($.MAX_FRAGMENT_UNIFORM_VECTORS),P=O>0,C=$.getParameter($.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:Y,textureFormatReadable:X,textureTypeReadable:H,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:M,maxVertexTextures:O,maxTextureSize:F,maxCubemapSize:N,maxAttributes:R,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:k,vertexTextures:P,maxSamples:C}}function Iq($){let J=this,Q=null,Z=0,W=!1,K=!1,X=new g8,H=new p0,Y={value:null,needsUpdate:!1};this.uniform=Y,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let M=E.length!==0||q||Z!==0||W;return W=q,Z=E.length,M},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,q){Q=G(E,q,0)},this.setState=function(E,q,M){let{clippingPlanes:O,clipIntersection:F,clipShadows:N}=E,R=$.get(E);if(!W||O===null||O.length===0||K&&!N)if(K)G(null);else U();else{let _=K?0:Z,L=_*4,k=R.clippingState||null;Y.value=k,k=G(O,q,L,M);for(let P=0;P!==L;++P)k[P]=Q[P];R.clippingState=k,this.numIntersection=F?this.numPlanes:0,this.numPlanes+=_}};function U(){if(Y.value!==Q)Y.value=Q,Y.needsUpdate=Z>0;J.numPlanes=Z,J.numIntersection=0}function G(E,q,M,O){let F=E!==null?E.length:0,N=null;if(F!==0){if(N=Y.value,O!==!0||N===null){let R=M+F*4,_=q.matrixWorldInverse;if(H.getNormalMatrix(_),N===null||N.length<R)N=new Float32Array(R);for(let L=0,k=M;L!==F;++L,k+=4)X.copy(E[L]).applyMatrix4(_,H),X.normal.toArray(N,k),N[k+3]=X.constant}Y.value=N,Y.needsUpdate=!0}return J.numPlanes=F,J.numIntersection=0,N}}function Pq($){let J=new WeakMap;function Q(X,H){if(H===k$)X.mapping=R6;else if(H===C$)X.mapping=j7;return X}function Z(X){if(X&&X.isTexture){let H=X.mapping;if(H===k$||H===C$)if(J.has(X)){let Y=J.get(X).texture;return Q(Y,X.mapping)}else{let Y=X.image;if(Y&&Y.height>0){let U=new UZ(Y.height);return U.fromEquirectangularTexture($,X),J.set(X,U),X.addEventListener("dispose",W),Q(U.texture,X.mapping)}else return null}}return X}function W(X){let H=X.target;H.removeEventListener("dispose",W);let Y=J.get(H);if(Y!==void 0)J.delete(H),Y.dispose()}function K(){J=new WeakMap}return{get:Z,dispose:K}}var w6=4,VK=[0.125,0.215,0.35,0.446,0.526,0.582],g7=20,BZ=new q7,BK=new y0,zZ=null,kZ=0,CZ=0,IZ=!1,x7=(1+Math.sqrt(5))/2,T6=1/x7,zK=[new g(-x7,T6,0),new g(x7,T6,0),new g(-T6,0,x7),new g(T6,0,x7),new g(0,x7,-T6),new g(0,x7,T6),new g(-1,1,-1),new g(1,1,-1),new g(-1,1,1),new g(1,1,1)],Aq=new g;class AZ{constructor($){this._renderer=$,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene($,J=0,Q=0.1,Z=100,W={}){let{size:K=256,position:X=Aq}=W;zZ=this._renderer.getRenderTarget(),kZ=this._renderer.getActiveCubeFace(),CZ=this._renderer.getActiveMipmapLevel(),IZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV($,Q,Z,H,X),J>0)this._blur(H,0,0,J);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular($,J=null){return this._fromTexture($,J)}fromCubemap($,J=null){return this._fromTexture($,J)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=IK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=CK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize($){this._lodMax=Math.floor(Math.log2($)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let $=0;$<this._lodPlanes.length;$++)this._lodPlanes[$].dispose()}_cleanup($){this._renderer.setRenderTarget(zZ,kZ,CZ),this._renderer.xr.enabled=IZ,$.scissorTest=!1,ZJ($,0,0,$.width,$.height)}_fromTexture($,J){if($.mapping===R6||$.mapping===j7)this._setSize($.image.length===0?16:$.image[0].width||$.image[0].image.width);else this._setSize($.image.width/4);zZ=this._renderer.getRenderTarget(),kZ=this._renderer.getActiveCubeFace(),CZ=this._renderer.getActiveMipmapLevel(),IZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=J||this._allocateTargets();return this._textureToCubeUV($,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let $=3*Math.max(this._cubeSize,112),J=4*this._cubeSize,Q={magFilter:u1,minFilter:u1,generateMipmaps:!1,type:K9,format:I8,colorSpace:g1,depthBuffer:!1},Z=kK($,J,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==$||this._pingPongRenderTarget.height!==J){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=kK($,J,Q);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tq(W)),this._blurMaterial=wq(W,$,J)}return Z}_compileMaterial($){let J=new T1(this._lodPlanes[0],$);this._renderer.compile(J,BZ)}_sceneToCubeUV($,J,Q,Z,W){let H=new w1(90,1,J,Q),Y=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(BK),G.toneMapping=m8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let O=new A8({name:"PMREM.Background",side:t1,depthWrite:!1,depthTest:!1}),F=new T1(new B6,O),N=!1,R=$.background;if(R){if(R.isColor)O.color.copy(R),$.background=null,N=!0}else O.color.copy(BK),N=!0;for(let _=0;_<6;_++){let L=_%3;if(L===0)H.up.set(0,Y[_],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x+U[_],W.y,W.z);else if(L===1)H.up.set(0,0,Y[_]),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y+U[_],W.z);else H.up.set(0,Y[_],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y,W.z+U[_]);let k=this._cubeSize;if(ZJ(Z,L*k,_>2?k:0,k,k),G.setRenderTarget(Z),N)G.render(F,H);G.render($,H)}F.geometry.dispose(),F.material.dispose(),G.toneMapping=q,G.autoClear=E,$.background=R}_textureToCubeUV($,J){let Q=this._renderer,Z=$.mapping===R6||$.mapping===j7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=IK();this._cubemapMaterial.uniforms.flipEnvMap.value=$.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=CK();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=new T1(this._lodPlanes[0],W),X=W.uniforms;X.envMap.value=$;let H=this._cubeSize;ZJ(J,0,0,3*H,2*H),Q.setRenderTarget(J),Q.render(K,BZ)}_applyPMREM($){let J=this._renderer,Q=J.autoClear;J.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let K=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),X=zK[(Z-W-1)%zK.length];this._blur($,W-1,W,K,X)}J.autoClear=Q}_blur($,J,Q,Z,W){let K=this._pingPongRenderTarget;this._halfBlur($,K,J,Q,Z,"latitudinal",W),this._halfBlur(K,$,Q,Q,Z,"longitudinal",W)}_halfBlur($,J,Q,Z,W,K,X){let H=this._renderer,Y=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new T1(this._lodPlanes[Z],Y),E=Y.uniforms,q=this._sizeLods[Q]-1,M=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*g7-1),O=W/M,F=isFinite(W)?1+Math.floor(U*O):g7;if(F>g7)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${F} samples when the maximum is set to ${g7}`);let N=[],R=0;for(let C=0;C<g7;++C){let S=C/O,b=Math.exp(-S*S/2);if(N.push(b),C===0)R+=b;else if(C<F)R+=2*b}for(let C=0;C<N.length;C++)N[C]=N[C]/R;if(E.envMap.value=$.texture,E.samples.value=F,E.weights.value=N,E.latitudinal.value=K==="latitudinal",X)E.poleAxis.value=X;let{_lodMax:_}=this;E.dTheta.value=M,E.mipInt.value=_-Q;let L=this._sizeLods[Z],k=3*L*(Z>_-w6?Z-_+w6:0),P=4*(this._cubeSize-L);ZJ(J,k,P,3*L,2*L),H.setRenderTarget(J),H.render(G,BZ)}}function Tq($){let J=[],Q=[],Z=[],W=$,K=$-w6+1+VK.length;for(let X=0;X<K;X++){let H=Math.pow(2,W);Q.push(H);let Y=1/H;if(X>$-w6)Y=VK[X-$+w6-1];else if(X===0)Y=0;Z.push(Y);let U=1/(H-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],M=6,O=6,F=3,N=2,R=1,_=new Float32Array(F*O*M),L=new Float32Array(N*O*M),k=new Float32Array(R*O*M);for(let C=0;C<M;C++){let S=C%3*2/3-1,b=C>2?0:-1,B=[S,b,0,S+0.6666666666666666,b,0,S+0.6666666666666666,b+1,0,S,b,0,S+0.6666666666666666,b+1,0,S,b+1,0];_.set(B,F*O*C),L.set(q,N*O*C);let D=[C,C,C,C,C,C];k.set(D,R*O*C)}let P=new p1;if(P.setAttribute("position",new H1(_,F)),P.setAttribute("uv",new H1(L,N)),P.setAttribute("faceIndex",new H1(k,R)),J.push(P),W>w6)W--}return{lodPlanes:J,sizeLods:Q,sigmas:Z}}function kK($,J,Q){let Z=new D8($,J,Q);return Z.texture.mapping=Z9,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function ZJ($,J,Q,Z,W){$.viewport.set(J,Q,Z,W),$.scissor.set(J,Q,Z,W)}function wq($,J,Q){let Z=new Float32Array(g7),W=new g(0,1,0);return new d1({name:"SphericalGaussianBlur",defines:{n:g7,CUBEUV_TEXEL_WIDTH:1/J,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${$}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:wZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:K7,depthTest:!1,depthWrite:!1})}function CK(){return new d1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:K7,depthTest:!1,depthWrite:!1})}function IK(){return new d1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:K7,depthTest:!1,depthWrite:!1})}function wZ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sq($){let J=new WeakMap,Q=null;function Z(H){if(H&&H.isTexture){let Y=H.mapping,U=Y===k$||Y===C$,G=Y===R6||Y===j7;if(U||G){let E=J.get(H),q=E!==void 0?E.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==q){if(Q===null)Q=new AZ($);return E=U?Q.fromEquirectangular(H,E):Q.fromCubemap(H,E),E.texture.pmremVersion=H.pmremVersion,J.set(H,E),E.texture}else if(E!==void 0)return E.texture;else{let M=H.image;if(U&&M&&M.height>0||G&&M&&W(M)){if(Q===null)Q=new AZ($);return E=U?Q.fromEquirectangular(H):Q.fromCubemap(H),E.texture.pmremVersion=H.pmremVersion,J.set(H,E),H.addEventListener("dispose",K),E.texture}else return null}}}return H}function W(H){let Y=0,U=6;for(let G=0;G<U;G++)if(H[G]!==void 0)Y++;return Y===U}function K(H){let Y=H.target;Y.removeEventListener("dispose",K);let U=J.get(Y);if(U!==void 0)J.delete(Y),U.dispose()}function X(){if(J=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:Z,dispose:X}}function jq($){let J={};function Q(Z){if(J[Z]!==void 0)return J[Z];let W;switch(Z){case"WEBGL_depth_texture":W=$.getExtension("WEBGL_depth_texture")||$.getExtension("MOZ_WEBGL_depth_texture")||$.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=$.getExtension("EXT_texture_filter_anisotropic")||$.getExtension("MOZ_EXT_texture_filter_anisotropic")||$.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=$.getExtension("WEBGL_compressed_texture_s3tc")||$.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||$.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=$.getExtension("WEBGL_compressed_texture_pvrtc")||$.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=$.getExtension(Z)}return J[Z]=W,W}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let W=Q(Z);if(W===null)N6("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function fq($,J,Q,Z){let W={},K=new WeakMap;function X(E){let q=E.target;if(q.index!==null)J.remove(q.index);for(let O in q.attributes)J.remove(q.attributes[O]);q.removeEventListener("dispose",X),delete W[q.id];let M=K.get(q);if(M)J.remove(M),K.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;Q.memory.geometries--}function H(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",X),W[q.id]=!0,Q.memory.geometries++,q}function Y(E){let q=E.attributes;for(let M in q)J.update(q[M],$.ARRAY_BUFFER)}function U(E){let q=[],M=E.index,O=E.attributes.position,F=0;if(M!==null){let _=M.array;F=M.version;for(let L=0,k=_.length;L<k;L+=3){let P=_[L+0],C=_[L+1],S=_[L+2];q.push(P,C,C,S,S,P)}}else if(O!==void 0){let _=O.array;F=O.version;for(let L=0,k=_.length/3-1;L<k;L+=3){let P=L+0,C=L+1,S=L+2;q.push(P,C,C,S,S,P)}}else return;let N=new((ZZ(q))?x$:b$)(q,1);N.version=F;let R=K.get(E);if(R)J.remove(R);K.set(E,N)}function G(E){let q=K.get(E);if(q){let M=E.index;if(M!==null){if(q.version<M.version)U(E)}}else U(E);return K.get(E)}return{get:H,update:Y,getWireframeAttribute:G}}function vq($,J,Q){let Z;function W(q){Z=q}let K,X;function H(q){K=q.type,X=q.bytesPerElement}function Y(q,M){$.drawElements(Z,M,K,q*X),Q.update(M,Z,1)}function U(q,M,O){if(O===0)return;$.drawElementsInstanced(Z,M,K,q*X,O),Q.update(M,Z,O)}function G(q,M,O){if(O===0)return;J.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,M,0,K,q,0,O);let N=0;for(let R=0;R<O;R++)N+=M[R];Q.update(N,Z,1)}function E(q,M,O,F){if(O===0)return;let N=J.get("WEBGL_multi_draw");if(N===null)for(let R=0;R<q.length;R++)U(q[R]/X,M[R],F[R]);else{N.multiDrawElementsInstancedWEBGL(Z,M,0,K,q,0,F,0,O);let R=0;for(let _=0;_<O;_++)R+=M[_]*F[_];Q.update(R,Z,1)}}this.setMode=W,this.setIndex=H,this.render=Y,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function yq($){let J={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,X,H){switch(Q.calls++,X){case $.TRIANGLES:Q.triangles+=H*(K/3);break;case $.LINES:Q.lines+=H*(K/2);break;case $.LINE_STRIP:Q.lines+=H*(K-1);break;case $.LINE_LOOP:Q.lines+=H*K;break;case $.POINTS:Q.points+=H*K;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",X);break}}function W(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:J,render:Q,programs:null,autoReset:!0,reset:W,update:Z}}function hq($,J,Q){let Z=new WeakMap,W=new i0;function K(X,H,Y){let U=X.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,E=G!==void 0?G.length:0,q=Z.get(H);if(q===void 0||q.count!==E){let B=function(){S.dispose(),Z.delete(H),H.removeEventListener("dispose",B)};if(q!==void 0)q.texture.dispose();let M=H.morphAttributes.position!==void 0,O=H.morphAttributes.normal!==void 0,F=H.morphAttributes.color!==void 0,N=H.morphAttributes.position||[],R=H.morphAttributes.normal||[],_=H.morphAttributes.color||[],L=0;if(M===!0)L=1;if(O===!0)L=2;if(F===!0)L=3;let k=H.attributes.position.count*L,P=1;if(k>J.maxTextureSize)P=Math.ceil(k/J.maxTextureSize),k=J.maxTextureSize;let C=new Float32Array(k*P*4*E),S=new y$(C,k,P,E);S.type=H7,S.needsUpdate=!0;let b=L*4;for(let D=0;D<E;D++){let I=N[D],w=R[D],A=_[D],f=k*P*4*D;for(let h=0;h<I.count;h++){let x=h*b;if(M===!0)W.fromBufferAttribute(I,h),C[f+x+0]=W.x,C[f+x+1]=W.y,C[f+x+2]=W.z,C[f+x+3]=0;if(O===!0)W.fromBufferAttribute(w,h),C[f+x+4]=W.x,C[f+x+5]=W.y,C[f+x+6]=W.z,C[f+x+7]=0;if(F===!0)W.fromBufferAttribute(A,h),C[f+x+8]=W.x,C[f+x+9]=W.y,C[f+x+10]=W.z,C[f+x+11]=A.itemSize===4?W.w:1}}q={count:E,texture:S,size:new u0(k,P)},Z.set(H,q),H.addEventListener("dispose",B)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)Y.getUniforms().setValue($,"morphTexture",X.morphTexture,Q);else{let M=0;for(let F=0;F<U.length;F++)M+=U[F];let O=H.morphTargetsRelative?1:1-M;Y.getUniforms().setValue($,"morphTargetBaseInfluence",O),Y.getUniforms().setValue($,"morphTargetInfluences",U)}Y.getUniforms().setValue($,"morphTargetsTexture",q.texture,Q),Y.getUniforms().setValue($,"morphTargetsTextureSize",q.size)}return{update:K}}function bq($,J,Q,Z){let W=new WeakMap;function K(Y){let U=Z.render.frame,G=Y.geometry,E=J.get(Y,G);if(W.get(E)!==U)J.update(E),W.set(E,U);if(Y.isInstancedMesh){if(Y.hasEventListener("dispose",H)===!1)Y.addEventListener("dispose",H);if(W.get(Y)!==U){if(Q.update(Y.instanceMatrix,$.ARRAY_BUFFER),Y.instanceColor!==null)Q.update(Y.instanceColor,$.ARRAY_BUFFER);W.set(Y,U)}}if(Y.isSkinnedMesh){let q=Y.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function X(){W=new WeakMap}function H(Y){let U=Y.target;if(U.removeEventListener("dispose",H),Q.remove(U.instanceMatrix),U.instanceColor!==null)Q.remove(U.instanceColor)}return{update:K,dispose:X}}var cK=new D1,PK=new n$(1,1),nK=new y$,sK=new XZ,oK=new g$,AK=[],TK=[],wK=new Float32Array(16),SK=new Float32Array(9),jK=new Float32Array(4);function S6($,J,Q){let Z=$[0];if(Z<=0||Z>0)return $;let W=J*Q,K=AK[W];if(K===void 0)K=new Float32Array(W),AK[W]=K;if(J!==0){Z.toArray(K,0);for(let X=1,H=0;X!==J;++X)H+=Q,$[X].toArray(K,H)}return K}function C1($,J){if($.length!==J.length)return!1;for(let Q=0,Z=$.length;Q<Z;Q++)if($[Q]!==J[Q])return!1;return!0}function I1($,J){for(let Q=0,Z=J.length;Q<Z;Q++)$[Q]=J[Q]}function KJ($,J){let Q=TK[J];if(Q===void 0)Q=new Int32Array(J),TK[J]=Q;for(let Z=0;Z!==J;++Z)Q[Z]=$.allocateTextureUnit();return Q}function xq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1f(this.addr,J),Q[0]=J}function gq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2f(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(C1(Q,J))return;$.uniform2fv(this.addr,J),I1(Q,J)}}function pq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3f(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else if(J.r!==void 0){if(Q[0]!==J.r||Q[1]!==J.g||Q[2]!==J.b)$.uniform3f(this.addr,J.r,J.g,J.b),Q[0]=J.r,Q[1]=J.g,Q[2]=J.b}else{if(C1(Q,J))return;$.uniform3fv(this.addr,J),I1(Q,J)}}function lq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4f(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(C1(Q,J))return;$.uniform4fv(this.addr,J),I1(Q,J)}}function uq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(C1(Q,J))return;$.uniformMatrix2fv(this.addr,!1,J),I1(Q,J)}else{if(C1(Q,Z))return;jK.set(Z),$.uniformMatrix2fv(this.addr,!1,jK),I1(Q,Z)}}function mq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(C1(Q,J))return;$.uniformMatrix3fv(this.addr,!1,J),I1(Q,J)}else{if(C1(Q,Z))return;SK.set(Z),$.uniformMatrix3fv(this.addr,!1,SK),I1(Q,Z)}}function dq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(C1(Q,J))return;$.uniformMatrix4fv(this.addr,!1,J),I1(Q,J)}else{if(C1(Q,Z))return;wK.set(Z),$.uniformMatrix4fv(this.addr,!1,wK),I1(Q,Z)}}function cq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1i(this.addr,J),Q[0]=J}function nq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2i(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(C1(Q,J))return;$.uniform2iv(this.addr,J),I1(Q,J)}}function sq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3i(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else{if(C1(Q,J))return;$.uniform3iv(this.addr,J),I1(Q,J)}}function oq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4i(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(C1(Q,J))return;$.uniform4iv(this.addr,J),I1(Q,J)}}function iq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1ui(this.addr,J),Q[0]=J}function aq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2ui(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(C1(Q,J))return;$.uniform2uiv(this.addr,J),I1(Q,J)}}function rq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3ui(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else{if(C1(Q,J))return;$.uniform3uiv(this.addr,J),I1(Q,J)}}function tq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4ui(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(C1(Q,J))return;$.uniform4uiv(this.addr,J),I1(Q,J)}}function eq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===$.SAMPLER_2D_SHADOW)PK.compareFunction=eQ,K=PK;else K=cK;Q.setTexture2D(J||K,W)}function $N($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTexture3D(J||sK,W)}function JN($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTextureCube(J||oK,W)}function QN($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTexture2DArray(J||nK,W)}function ZN($){switch($){case 5126:return xq;case 35664:return gq;case 35665:return pq;case 35666:return lq;case 35674:return uq;case 35675:return mq;case 35676:return dq;case 5124:case 35670:return cq;case 35667:case 35671:return nq;case 35668:case 35672:return sq;case 35669:case 35673:return oq;case 5125:return iq;case 36294:return aq;case 36295:return rq;case 36296:return tq;case 35678:case 36198:case 36298:case 36306:case 35682:return eq;case 35679:case 36299:case 36307:return $N;case 35680:case 36300:case 36308:case 36293:return JN;case 36289:case 36303:case 36311:case 36292:return QN}}function WN($,J){$.uniform1fv(this.addr,J)}function KN($,J){let Q=S6(J,this.size,2);$.uniform2fv(this.addr,Q)}function XN($,J){let Q=S6(J,this.size,3);$.uniform3fv(this.addr,Q)}function HN($,J){let Q=S6(J,this.size,4);$.uniform4fv(this.addr,Q)}function YN($,J){let Q=S6(J,this.size,4);$.uniformMatrix2fv(this.addr,!1,Q)}function UN($,J){let Q=S6(J,this.size,9);$.uniformMatrix3fv(this.addr,!1,Q)}function GN($,J){let Q=S6(J,this.size,16);$.uniformMatrix4fv(this.addr,!1,Q)}function EN($,J){$.uniform1iv(this.addr,J)}function qN($,J){$.uniform2iv(this.addr,J)}function NN($,J){$.uniform3iv(this.addr,J)}function MN($,J){$.uniform4iv(this.addr,J)}function RN($,J){$.uniform1uiv(this.addr,J)}function FN($,J){$.uniform2uiv(this.addr,J)}function ON($,J){$.uniform3uiv(this.addr,J)}function LN($,J){$.uniform4uiv(this.addr,J)}function DN($,J,Q){let Z=this.cache,W=J.length,K=KJ(Q,W);if(!C1(Z,K))$.uniform1iv(this.addr,K),I1(Z,K);for(let X=0;X!==W;++X)Q.setTexture2D(J[X]||cK,K[X])}function _N($,J,Q){let Z=this.cache,W=J.length,K=KJ(Q,W);if(!C1(Z,K))$.uniform1iv(this.addr,K),I1(Z,K);for(let X=0;X!==W;++X)Q.setTexture3D(J[X]||sK,K[X])}function VN($,J,Q){let Z=this.cache,W=J.length,K=KJ(Q,W);if(!C1(Z,K))$.uniform1iv(this.addr,K),I1(Z,K);for(let X=0;X!==W;++X)Q.setTextureCube(J[X]||oK,K[X])}function BN($,J,Q){let Z=this.cache,W=J.length,K=KJ(Q,W);if(!C1(Z,K))$.uniform1iv(this.addr,K),I1(Z,K);for(let X=0;X!==W;++X)Q.setTexture2DArray(J[X]||nK,K[X])}function zN($){switch($){case 5126:return WN;case 35664:return KN;case 35665:return XN;case 35666:return HN;case 35674:return YN;case 35675:return UN;case 35676:return GN;case 5124:case 35670:return EN;case 35667:case 35671:return qN;case 35668:case 35672:return NN;case 35669:case 35673:return MN;case 5125:return RN;case 36294:return FN;case 36295:return ON;case 36296:return LN;case 35678:case 36198:case 36298:case 36306:case 35682:return DN;case 35679:case 36299:case 36307:return _N;case 35680:case 36300:case 36308:case 36293:return VN;case 36289:case 36303:case 36311:case 36292:return BN}}class iK{constructor($,J,Q){this.id=$,this.addr=Q,this.cache=[],this.type=J.type,this.setValue=ZN(J.type)}}class aK{constructor($,J,Q){this.id=$,this.addr=Q,this.cache=[],this.type=J.type,this.size=J.size,this.setValue=zN(J.type)}}class rK{constructor($){this.id=$,this.seq=[],this.map={}}setValue($,J,Q){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let X=Z[W];X.setValue($,J[X.id],Q)}}}var PZ=/(\w+)(\])?(\[|\.)?/g;function fK($,J){$.seq.push(J),$.map[J.id]=J}function kN($,J,Q){let Z=$.name,W=Z.length;PZ.lastIndex=0;while(!0){let K=PZ.exec(Z),X=PZ.lastIndex,H=K[1],Y=K[2]==="]",U=K[3];if(Y)H=H|0;if(U===void 0||U==="["&&X+2===W){fK(Q,U===void 0?new iK(H,$,J):new aK(H,$,J));break}else{let E=Q.map[H];if(E===void 0)E=new rK(H),fK(Q,E);Q=E}}}class _9{constructor($,J){this.seq=[],this.map={};let Q=$.getProgramParameter(J,$.ACTIVE_UNIFORMS);for(let Z=0;Z<Q;++Z){let W=$.getActiveUniform(J,Z),K=$.getUniformLocation(J,W.name);kN(W,K,this)}}setValue($,J,Q,Z){let W=this.map[J];if(W!==void 0)W.setValue($,Q,Z)}setOptional($,J,Q){let Z=J[Q];if(Z!==void 0)this.setValue($,Q,Z)}static upload($,J,Q,Z){for(let W=0,K=J.length;W!==K;++W){let X=J[W],H=Q[X.id];if(H.needsUpdate!==!1)X.setValue($,H.value,Z)}}static seqWithValue($,J){let Q=[];for(let Z=0,W=$.length;Z!==W;++Z){let K=$[Z];if(K.id in J)Q.push(K)}return Q}}function vK($,J,Q){let Z=$.createShader(J);return $.shaderSource(Z,Q),$.compileShader(Z),Z}var CN=37297,IN=0;function PN($,J){let Q=$.split(`
`),Z=[],W=Math.max(J-6,0),K=Math.min(J+6,Q.length);for(let X=W;X<K;X++){let H=X+1;Z.push(`${H===J?">":" "} ${H}: ${Q[X]}`)}return Z.join(`
`)}var yK=new p0;function AN($){o0._getMatrix(yK,o0.workingColorSpace,$);let J=`mat3( ${yK.elements.map((Q)=>Q.toFixed(4))} )`;switch(o0.getTransfer($)){case tQ:return[J,"LinearTransferOETF"];case Y1:return[J,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",$),[J,"LinearTransferOETF"]}}function hK($,J,Q){let Z=$.getShaderParameter(J,$.COMPILE_STATUS),K=($.getShaderInfoLog(J)||"").trim();if(Z&&K==="")return"";let X=/ERROR: 0:(\d+)/.exec(K);if(X){let H=parseInt(X[1]);return Q.toUpperCase()+`

`+K+`

`+PN($.getShaderSource(J),H)}else return K}function TN($,J){let Q=AN(J);return[`vec4 ${$}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}function wN($,J){let Q;switch(J){case gW:Q="Linear";break;case pW:Q="Reinhard";break;case lW:Q="Cineon";break;case uW:Q="ACESFilmic";break;case dW:Q="AgX";break;case cW:Q="Neutral";break;case mW:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",J),Q="Linear"}return"vec3 "+$+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var WJ=new g;function SN(){o0.getLuminanceCoefficients(WJ);let $=WJ.x.toFixed(4),J=WJ.y.toFixed(4),Q=WJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${$}, ${J}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function jN($){return[$.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",$.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(D9).join(`
`)}function fN($){let J=[];for(let Q in $){let Z=$[Q];if(Z===!1)continue;J.push("#define "+Q+" "+Z)}return J.join(`
`)}function vN($,J){let Q={},Z=$.getProgramParameter(J,$.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=$.getActiveAttrib(J,W),X=K.name,H=1;if(K.type===$.FLOAT_MAT2)H=2;if(K.type===$.FLOAT_MAT3)H=3;if(K.type===$.FLOAT_MAT4)H=4;Q[X]={type:K.type,location:$.getAttribLocation(J,X),locationSize:H}}return Q}function D9($){return $!==""}function bK($,J){let Q=J.numSpotLightShadows+J.numSpotLightMaps-J.numSpotLightShadowsWithMaps;return $.replace(/NUM_DIR_LIGHTS/g,J.numDirLights).replace(/NUM_SPOT_LIGHTS/g,J.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,J.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,J.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,J.numPointLights).replace(/NUM_HEMI_LIGHTS/g,J.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,J.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,J.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,J.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,J.numPointLightShadows)}function xK($,J){return $.replace(/NUM_CLIPPING_PLANES/g,J.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,J.numClippingPlanes-J.numClipIntersection)}var yN=/^[ \t]*#include +<([\w\d./]+)>/gm;function TZ($){return $.replace(yN,bN)}var hN=new Map;function bN($,J){let Q=m0[J];if(Q===void 0){let Z=hN.get(J);if(Z!==void 0)Q=m0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',J,Z);else throw Error("Can not resolve #include <"+J+">")}return TZ(Q)}var xN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gK($){return $.replace(xN,gN)}function gN($,J,Q,Z){let W="";for(let K=parseInt(J);K<parseInt(Q);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function pK($){let J=`precision ${$.precision} float;
	precision ${$.precision} int;
	precision ${$.precision} sampler2D;
	precision ${$.precision} samplerCube;
	precision ${$.precision} sampler3D;
	precision ${$.precision} sampler2DArray;
	precision ${$.precision} sampler2DShadow;
	precision ${$.precision} samplerCubeShadow;
	precision ${$.precision} sampler2DArrayShadow;
	precision ${$.precision} isampler2D;
	precision ${$.precision} isampler3D;
	precision ${$.precision} isamplerCube;
	precision ${$.precision} isampler2DArray;
	precision ${$.precision} usampler2D;
	precision ${$.precision} usampler3D;
	precision ${$.precision} usamplerCube;
	precision ${$.precision} usampler2DArray;
	`;if($.precision==="highp")J+=`
#define HIGH_PRECISION`;else if($.precision==="mediump")J+=`
#define MEDIUM_PRECISION`;else if($.precision==="lowp")J+=`
#define LOW_PRECISION`;return J}function pN($){let J="SHADOWMAP_TYPE_BASIC";if($.shadowMapType===qQ)J="SHADOWMAP_TYPE_PCF";else if($.shadowMapType===RW)J="SHADOWMAP_TYPE_PCF_SOFT";else if($.shadowMapType===C8)J="SHADOWMAP_TYPE_VSM";return J}function lN($){let J="ENVMAP_TYPE_CUBE";if($.envMap)switch($.envMapMode){case R6:case j7:J="ENVMAP_TYPE_CUBE";break;case Z9:J="ENVMAP_TYPE_CUBE_UV";break}return J}function uN($){let J="ENVMAP_MODE_REFLECTION";if($.envMap)switch($.envMapMode){case j7:J="ENVMAP_MODE_REFRACTION";break}return J}function mN($){let J="ENVMAP_BLENDING_NONE";if($.envMap)switch($.combine){case hW:J="ENVMAP_BLENDING_MULTIPLY";break;case bW:J="ENVMAP_BLENDING_MIX";break;case xW:J="ENVMAP_BLENDING_ADD";break}return J}function dN($){let J=$.envMapCubeUVHeight;if(J===null)return null;let Q=Math.log2(J)-2,Z=1/J;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function cN($,J,Q,Z){let W=$.getContext(),K=Q.defines,X=Q.vertexShader,H=Q.fragmentShader,Y=pN(Q),U=lN(Q),G=uN(Q),E=mN(Q),q=dN(Q),M=jN(Q),O=fN(K),F=W.createProgram(),N,R,_=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(D9).join(`
`),N.length>0)N+=`
`;if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(D9).join(`
`),R.length>0)R+=`
`}else N=[pK(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+Y:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(D9).join(`
`),R=[pK(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor||Q.batchingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+Y:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==m8?"#define TONE_MAPPING":"",Q.toneMapping!==m8?m0.tonemapping_pars_fragment:"",Q.toneMapping!==m8?wN("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",m0.colorspace_pars_fragment,TN("linearToOutputTexel",Q.outputColorSpace),SN(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(D9).join(`
`);if(X=TZ(X),X=bK(X,Q),X=xK(X,Q),H=TZ(H),H=bK(H,Q),H=xK(H,Q),X=gK(X),H=gK(H),Q.isRawShaderMaterial!==!0)_=`#version 300 es
`,N=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,R=["#define varying in",Q.glslVersion===$Z?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===$Z?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R;let L=_+N+X,k=_+R+H,P=vK(W,W.VERTEX_SHADER,L),C=vK(W,W.FRAGMENT_SHADER,k);if(W.attachShader(F,P),W.attachShader(F,C),Q.index0AttributeName!==void 0)W.bindAttribLocation(F,0,Q.index0AttributeName);else if(Q.morphTargets===!0)W.bindAttribLocation(F,0,"position");W.linkProgram(F);function S(I){if($.debug.checkShaderErrors){let w=W.getProgramInfoLog(F)||"",A=W.getShaderInfoLog(P)||"",f=W.getShaderInfoLog(C)||"",h=w.trim(),x=A.trim(),p=f.trim(),y=!0,o=!0;if(W.getProgramParameter(F,W.LINK_STATUS)===!1)if(y=!1,typeof $.debug.onShaderError==="function")$.debug.onShaderError(W,F,P,C);else{let a=hK(W,P,"vertex"),Q0=hK(W,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(F,W.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+h+`
`+a+`
`+Q0)}else if(h!=="")console.warn("THREE.WebGLProgram: Program Info Log:",h);else if(x===""||p==="")o=!1;if(o)I.diagnostics={runnable:y,programLog:h,vertexShader:{log:x,prefix:N},fragmentShader:{log:p,prefix:R}}}W.deleteShader(P),W.deleteShader(C),b=new _9(W,F),B=vN(W,F)}let b;this.getUniforms=function(){if(b===void 0)S(this);return b};let B;this.getAttributes=function(){if(B===void 0)S(this);return B};let D=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(D===!1)D=W.getProgramParameter(F,CN);return D},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(F),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=IN++,this.cacheKey=J,this.usedTimes=1,this.program=F,this.vertexShader=P,this.fragmentShader=C,this}var nN=0;class tK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update($){let{vertexShader:J,fragmentShader:Q}=$,Z=this._getShaderStage(J),W=this._getShaderStage(Q),K=this._getShaderCacheForMaterial($);if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove($){let J=this.materialCache.get($);for(let Q of J)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete($),this}getVertexShaderID($){return this._getShaderStage($.vertexShader).id}getFragmentShaderID($){return this._getShaderStage($.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial($){let J=this.materialCache,Q=J.get($);if(Q===void 0)Q=new Set,J.set($,Q);return Q}_getShaderStage($){let J=this.shaderCache,Q=J.get($);if(Q===void 0)Q=new eK($),J.set($,Q);return Q}}class eK{constructor($){this.id=nN++,this.code=$,this.usedTimes=0}}function sN($,J,Q,Z,W,K,X){let H=new h$,Y=new tK,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,M=W.precision,O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(B){if(U.add(B),B===0)return"uv";return`uv${B}`}function N(B,D,I,w,A){let f=w.fog,h=A.geometry,x=B.isMeshStandardMaterial?w.environment:null,p=(B.isMeshStandardMaterial?Q:J).get(B.envMap||x),y=!!p&&p.mapping===Z9?p.image.height:null,o=O[B.type];if(B.precision!==null){if(M=W.getMaxPrecision(B.precision),M!==B.precision)console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",M,"instead.")}let a=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,Q0=a!==void 0?a.length:0,X0=0;if(h.morphAttributes.position!==void 0)X0=1;if(h.morphAttributes.normal!==void 0)X0=2;if(h.morphAttributes.color!==void 0)X0=3;let L0,q0,c,W0;if(o){let Q1=T8[o];L0=Q1.vertexShader,q0=Q1.fragmentShader}else L0=B.vertexShader,q0=B.fragmentShader,Y.update(B),c=Y.getVertexShaderID(B),W0=Y.getFragmentShaderID(B);let e=$.getRenderTarget(),F0=$.state.buffers.depth.getReversed(),N0=A.isInstancedMesh===!0,_0=A.isBatchedMesh===!0,r0=!!B.map,j=!!B.matcap,l0=!!p,j0=!!B.aoMap,T0=!!B.lightMap,V0=!!B.bumpMap,a0=!!B.normalMap,C0=!!B.displacementMap,O0=!!B.emissiveMap,J1=!!B.metalnessMap,q1=!!B.roughnessMap,d0=B.anisotropy>0,T=B.clearcoat>0,V=B.dispersion>0,m=B.iridescence>0,r=B.sheen>0,$0=B.transmission>0,i=d0&&!!B.anisotropyMap,B0=T&&!!B.clearcoatMap,K0=T&&!!B.clearcoatNormalMap,I0=T&&!!B.clearcoatRoughnessMap,S0=m&&!!B.iridescenceMap,H0=m&&!!B.iridescenceThicknessMap,d=r&&!!B.sheenColorMap,J0=r&&!!B.sheenRoughnessMap,E0=!!B.specularMap,G0=!!B.specularColorMap,h0=!!B.specularIntensityMap,v=$0&&!!B.transmissionMap,M0=$0&&!!B.thicknessMap,U0=!!B.gradientMap,z0=!!B.alphaMap,Z0=B.alphaTest>0,t=!!B.alphaHash,A0=!!B.extensions,x0=m8;if(B.toneMapped){if(e===null||e.isXRRenderTarget===!0)x0=$.toneMapping}let W1={shaderID:o,shaderType:B.type,shaderName:B.name,vertexShader:L0,fragmentShader:q0,defines:B.defines,customVertexShaderID:c,customFragmentShaderID:W0,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:M,batching:_0,batchingColor:_0&&A._colorsTexture!==null,instancing:N0,instancingColor:N0&&A.instanceColor!==null,instancingMorph:N0&&A.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:e===null?$.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:g1,alphaToCoverage:!!B.alphaToCoverage,map:r0,matcap:j,envMap:l0,envMapMode:l0&&p.mapping,envMapCubeUVHeight:y,aoMap:j0,lightMap:T0,bumpMap:V0,normalMap:a0,displacementMap:q&&C0,emissiveMap:O0,normalMapObjectSpace:a0&&B.normalMapType===QK,normalMapTangentSpace:a0&&B.normalMapType===JK,metalnessMap:J1,roughnessMap:q1,anisotropy:d0,anisotropyMap:i,clearcoat:T,clearcoatMap:B0,clearcoatNormalMap:K0,clearcoatRoughnessMap:I0,dispersion:V,iridescence:m,iridescenceMap:S0,iridescenceThicknessMap:H0,sheen:r,sheenColorMap:d,sheenRoughnessMap:J0,specularMap:E0,specularColorMap:G0,specularIntensityMap:h0,transmission:$0,transmissionMap:v,thicknessMap:M0,gradientMap:U0,opaque:B.transparent===!1&&B.blending===J9&&B.alphaToCoverage===!1,alphaMap:z0,alphaTest:Z0,alphaHash:t,combine:B.combine,mapUv:r0&&F(B.map.channel),aoMapUv:j0&&F(B.aoMap.channel),lightMapUv:T0&&F(B.lightMap.channel),bumpMapUv:V0&&F(B.bumpMap.channel),normalMapUv:a0&&F(B.normalMap.channel),displacementMapUv:C0&&F(B.displacementMap.channel),emissiveMapUv:O0&&F(B.emissiveMap.channel),metalnessMapUv:J1&&F(B.metalnessMap.channel),roughnessMapUv:q1&&F(B.roughnessMap.channel),anisotropyMapUv:i&&F(B.anisotropyMap.channel),clearcoatMapUv:B0&&F(B.clearcoatMap.channel),clearcoatNormalMapUv:K0&&F(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I0&&F(B.clearcoatRoughnessMap.channel),iridescenceMapUv:S0&&F(B.iridescenceMap.channel),iridescenceThicknessMapUv:H0&&F(B.iridescenceThicknessMap.channel),sheenColorMapUv:d&&F(B.sheenColorMap.channel),sheenRoughnessMapUv:J0&&F(B.sheenRoughnessMap.channel),specularMapUv:E0&&F(B.specularMap.channel),specularColorMapUv:G0&&F(B.specularColorMap.channel),specularIntensityMapUv:h0&&F(B.specularIntensityMap.channel),transmissionMapUv:v&&F(B.transmissionMap.channel),thicknessMapUv:M0&&F(B.thicknessMap.channel),alphaMapUv:z0&&F(B.alphaMap.channel),vertexTangents:!!h.attributes.tangent&&(a0||d0),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!h.attributes.color&&h.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!h.attributes.uv&&(r0||z0),fog:!!f,useFog:B.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:B.flatShading===!0&&B.wireframe===!1,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:F0,skinning:A.isSkinnedMesh===!0,morphTargets:h.morphAttributes.position!==void 0,morphNormals:h.morphAttributes.normal!==void 0,morphColors:h.morphAttributes.color!==void 0,morphTargetsCount:Q0,morphTextureStride:X0,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:X.numPlanes,numClipIntersection:X.numIntersection,dithering:B.dithering,shadowMapEnabled:$.shadowMap.enabled&&I.length>0,shadowMapType:$.shadowMap.type,toneMapping:x0,decodeVideoTexture:r0&&B.map.isVideoTexture===!0&&o0.getTransfer(B.map.colorSpace)===Y1,decodeVideoTextureEmissive:O0&&B.emissiveMap.isVideoTexture===!0&&o0.getTransfer(B.emissiveMap.colorSpace)===Y1,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===U8,flipSided:B.side===t1,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:A0&&B.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(A0&&B.extensions.multiDraw===!0||_0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return W1.vertexUv1s=U.has(1),W1.vertexUv2s=U.has(2),W1.vertexUv3s=U.has(3),U.clear(),W1}function R(B){let D=[];if(B.shaderID)D.push(B.shaderID);else D.push(B.customVertexShaderID),D.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let I in B.defines)D.push(I),D.push(B.defines[I]);if(B.isRawShaderMaterial===!1)_(D,B),L(D,B),D.push($.outputColorSpace);return D.push(B.customProgramCacheKey),D.join()}function _(B,D){B.push(D.precision),B.push(D.outputColorSpace),B.push(D.envMapMode),B.push(D.envMapCubeUVHeight),B.push(D.mapUv),B.push(D.alphaMapUv),B.push(D.lightMapUv),B.push(D.aoMapUv),B.push(D.bumpMapUv),B.push(D.normalMapUv),B.push(D.displacementMapUv),B.push(D.emissiveMapUv),B.push(D.metalnessMapUv),B.push(D.roughnessMapUv),B.push(D.anisotropyMapUv),B.push(D.clearcoatMapUv),B.push(D.clearcoatNormalMapUv),B.push(D.clearcoatRoughnessMapUv),B.push(D.iridescenceMapUv),B.push(D.iridescenceThicknessMapUv),B.push(D.sheenColorMapUv),B.push(D.sheenRoughnessMapUv),B.push(D.specularMapUv),B.push(D.specularColorMapUv),B.push(D.specularIntensityMapUv),B.push(D.transmissionMapUv),B.push(D.thicknessMapUv),B.push(D.combine),B.push(D.fogExp2),B.push(D.sizeAttenuation),B.push(D.morphTargetsCount),B.push(D.morphAttributeCount),B.push(D.numDirLights),B.push(D.numPointLights),B.push(D.numSpotLights),B.push(D.numSpotLightMaps),B.push(D.numHemiLights),B.push(D.numRectAreaLights),B.push(D.numDirLightShadows),B.push(D.numPointLightShadows),B.push(D.numSpotLightShadows),B.push(D.numSpotLightShadowsWithMaps),B.push(D.numLightProbes),B.push(D.shadowMapType),B.push(D.toneMapping),B.push(D.numClippingPlanes),B.push(D.numClipIntersection),B.push(D.depthPacking)}function L(B,D){if(H.disableAll(),D.supportsVertexTextures)H.enable(0);if(D.instancing)H.enable(1);if(D.instancingColor)H.enable(2);if(D.instancingMorph)H.enable(3);if(D.matcap)H.enable(4);if(D.envMap)H.enable(5);if(D.normalMapObjectSpace)H.enable(6);if(D.normalMapTangentSpace)H.enable(7);if(D.clearcoat)H.enable(8);if(D.iridescence)H.enable(9);if(D.alphaTest)H.enable(10);if(D.vertexColors)H.enable(11);if(D.vertexAlphas)H.enable(12);if(D.vertexUv1s)H.enable(13);if(D.vertexUv2s)H.enable(14);if(D.vertexUv3s)H.enable(15);if(D.vertexTangents)H.enable(16);if(D.anisotropy)H.enable(17);if(D.alphaHash)H.enable(18);if(D.batching)H.enable(19);if(D.dispersion)H.enable(20);if(D.batchingColor)H.enable(21);if(D.gradientMap)H.enable(22);if(B.push(H.mask),H.disableAll(),D.fog)H.enable(0);if(D.useFog)H.enable(1);if(D.flatShading)H.enable(2);if(D.logarithmicDepthBuffer)H.enable(3);if(D.reversedDepthBuffer)H.enable(4);if(D.skinning)H.enable(5);if(D.morphTargets)H.enable(6);if(D.morphNormals)H.enable(7);if(D.morphColors)H.enable(8);if(D.premultipliedAlpha)H.enable(9);if(D.shadowMapEnabled)H.enable(10);if(D.doubleSided)H.enable(11);if(D.flipSided)H.enable(12);if(D.useDepthPacking)H.enable(13);if(D.dithering)H.enable(14);if(D.transmission)H.enable(15);if(D.sheen)H.enable(16);if(D.opaque)H.enable(17);if(D.pointsUvs)H.enable(18);if(D.decodeVideoTexture)H.enable(19);if(D.decodeVideoTextureEmissive)H.enable(20);if(D.alphaToCoverage)H.enable(21);B.push(H.mask)}function k(B){let D=O[B.type],I;if(D){let w=T8[D];I=NK.clone(w.uniforms)}else I=B.uniforms;return I}function P(B,D){let I;for(let w=0,A=G.length;w<A;w++){let f=G[w];if(f.cacheKey===D){I=f,++I.usedTimes;break}}if(I===void 0)I=new cN($,D,B,K),G.push(I);return I}function C(B){if(--B.usedTimes===0){let D=G.indexOf(B);G[D]=G[G.length-1],G.pop(),B.destroy()}}function S(B){Y.remove(B)}function b(){Y.dispose()}return{getParameters:N,getProgramCacheKey:R,getUniforms:k,acquireProgram:P,releaseProgram:C,releaseShaderCache:S,programs:G,dispose:b}}function oN(){let $=new WeakMap;function J(X){return $.has(X)}function Q(X){let H=$.get(X);if(H===void 0)H={},$.set(X,H);return H}function Z(X){$.delete(X)}function W(X,H,Y){$.get(X)[H]=Y}function K(){$=new WeakMap}return{has:J,get:Q,remove:Z,update:W,dispose:K}}function iN($,J){if($.groupOrder!==J.groupOrder)return $.groupOrder-J.groupOrder;else if($.renderOrder!==J.renderOrder)return $.renderOrder-J.renderOrder;else if($.material.id!==J.material.id)return $.material.id-J.material.id;else if($.z!==J.z)return $.z-J.z;else return $.id-J.id}function lK($,J){if($.groupOrder!==J.groupOrder)return $.groupOrder-J.groupOrder;else if($.renderOrder!==J.renderOrder)return $.renderOrder-J.renderOrder;else if($.z!==J.z)return J.z-$.z;else return $.id-J.id}function uK(){let $=[],J=0,Q=[],Z=[],W=[];function K(){J=0,Q.length=0,Z.length=0,W.length=0}function X(E,q,M,O,F,N){let R=$[J];if(R===void 0)R={id:E.id,object:E,geometry:q,material:M,groupOrder:O,renderOrder:E.renderOrder,z:F,group:N},$[J]=R;else R.id=E.id,R.object=E,R.geometry=q,R.material=M,R.groupOrder=O,R.renderOrder=E.renderOrder,R.z=F,R.group=N;return J++,R}function H(E,q,M,O,F,N){let R=X(E,q,M,O,F,N);if(M.transmission>0)Z.push(R);else if(M.transparent===!0)W.push(R);else Q.push(R)}function Y(E,q,M,O,F,N){let R=X(E,q,M,O,F,N);if(M.transmission>0)Z.unshift(R);else if(M.transparent===!0)W.unshift(R);else Q.unshift(R)}function U(E,q){if(Q.length>1)Q.sort(E||iN);if(Z.length>1)Z.sort(q||lK);if(W.length>1)W.sort(q||lK)}function G(){for(let E=J,q=$.length;E<q;E++){let M=$[E];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:Q,transmissive:Z,transparent:W,init:K,push:H,unshift:Y,finish:G,sort:U}}function aN(){let $=new WeakMap;function J(Z,W){let K=$.get(Z),X;if(K===void 0)X=new uK,$.set(Z,[X]);else if(W>=K.length)X=new uK,K.push(X);else X=K[W];return X}function Q(){$=new WeakMap}return{get:J,dispose:Q}}function rN(){let $={};return{get:function(J){if($[J.id]!==void 0)return $[J.id];let Q;switch(J.type){case"DirectionalLight":Q={direction:new g,color:new y0};break;case"SpotLight":Q={position:new g,direction:new g,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new g,color:new y0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new g,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":Q={color:new y0,position:new g,halfWidth:new g,halfHeight:new g};break}return $[J.id]=Q,Q}}}function tN(){let $={};return{get:function(J){if($[J.id]!==void 0)return $[J.id];let Q;switch(J.type){case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0,shadowCameraNear:1,shadowCameraFar:1000};break}return $[J.id]=Q,Q}}}var eN=0;function $M($,J){return(J.castShadow?2:0)-($.castShadow?2:0)+(J.map?1:0)-($.map?1:0)}function JM($){let J=new rN,Q=tN(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new g);let W=new g,K=new g0,X=new g0;function H(U){let G=0,E=0,q=0;for(let B=0;B<9;B++)Z.probe[B].set(0,0,0);let M=0,O=0,F=0,N=0,R=0,_=0,L=0,k=0,P=0,C=0,S=0;U.sort($M);for(let B=0,D=U.length;B<D;B++){let I=U[B],w=I.color,A=I.intensity,f=I.distance,h=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)G+=w.r*A,E+=w.g*A,q+=w.b*A;else if(I.isLightProbe){for(let x=0;x<9;x++)Z.probe[x].addScaledVector(I.sh.coefficients[x],A);S++}else if(I.isDirectionalLight){let x=J.get(I);if(x.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let p=I.shadow,y=Q.get(I);y.shadowIntensity=p.intensity,y.shadowBias=p.bias,y.shadowNormalBias=p.normalBias,y.shadowRadius=p.radius,y.shadowMapSize=p.mapSize,Z.directionalShadow[M]=y,Z.directionalShadowMap[M]=h,Z.directionalShadowMatrix[M]=I.shadow.matrix,_++}Z.directional[M]=x,M++}else if(I.isSpotLight){let x=J.get(I);x.position.setFromMatrixPosition(I.matrixWorld),x.color.copy(w).multiplyScalar(A),x.distance=f,x.coneCos=Math.cos(I.angle),x.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),x.decay=I.decay,Z.spot[F]=x;let p=I.shadow;if(I.map){if(Z.spotLightMap[P]=I.map,P++,p.updateMatrices(I),I.castShadow)C++}if(Z.spotLightMatrix[F]=p.matrix,I.castShadow){let y=Q.get(I);y.shadowIntensity=p.intensity,y.shadowBias=p.bias,y.shadowNormalBias=p.normalBias,y.shadowRadius=p.radius,y.shadowMapSize=p.mapSize,Z.spotShadow[F]=y,Z.spotShadowMap[F]=h,k++}F++}else if(I.isRectAreaLight){let x=J.get(I);x.color.copy(w).multiplyScalar(A),x.halfWidth.set(I.width*0.5,0,0),x.halfHeight.set(0,I.height*0.5,0),Z.rectArea[N]=x,N++}else if(I.isPointLight){let x=J.get(I);if(x.color.copy(I.color).multiplyScalar(I.intensity),x.distance=I.distance,x.decay=I.decay,I.castShadow){let p=I.shadow,y=Q.get(I);y.shadowIntensity=p.intensity,y.shadowBias=p.bias,y.shadowNormalBias=p.normalBias,y.shadowRadius=p.radius,y.shadowMapSize=p.mapSize,y.shadowCameraNear=p.camera.near,y.shadowCameraFar=p.camera.far,Z.pointShadow[O]=y,Z.pointShadowMap[O]=h,Z.pointShadowMatrix[O]=I.shadow.matrix,L++}Z.point[O]=x,O++}else if(I.isHemisphereLight){let x=J.get(I);x.skyColor.copy(I.color).multiplyScalar(A),x.groundColor.copy(I.groundColor).multiplyScalar(A),Z.hemi[R]=x,R++}}if(N>0)if($.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=R0.LTC_FLOAT_1,Z.rectAreaLTC2=R0.LTC_FLOAT_2;else Z.rectAreaLTC1=R0.LTC_HALF_1,Z.rectAreaLTC2=R0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=q;let b=Z.hash;if(b.directionalLength!==M||b.pointLength!==O||b.spotLength!==F||b.rectAreaLength!==N||b.hemiLength!==R||b.numDirectionalShadows!==_||b.numPointShadows!==L||b.numSpotShadows!==k||b.numSpotMaps!==P||b.numLightProbes!==S)Z.directional.length=M,Z.spot.length=F,Z.rectArea.length=N,Z.point.length=O,Z.hemi.length=R,Z.directionalShadow.length=_,Z.directionalShadowMap.length=_,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=k,Z.spotShadowMap.length=k,Z.directionalShadowMatrix.length=_,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=k+P-C,Z.spotLightMap.length=P,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=S,b.directionalLength=M,b.pointLength=O,b.spotLength=F,b.rectAreaLength=N,b.hemiLength=R,b.numDirectionalShadows=_,b.numPointShadows=L,b.numSpotShadows=k,b.numSpotMaps=P,b.numLightProbes=S,Z.version=eN++}function Y(U,G){let E=0,q=0,M=0,O=0,F=0,N=G.matrixWorldInverse;for(let R=0,_=U.length;R<_;R++){let L=U[R];if(L.isDirectionalLight){let k=Z.directional[E];k.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(W),k.direction.transformDirection(N),E++}else if(L.isSpotLight){let k=Z.spot[M];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(N),k.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(W),k.direction.transformDirection(N),M++}else if(L.isRectAreaLight){let k=Z.rectArea[O];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(N),X.identity(),K.copy(L.matrixWorld),K.premultiply(N),X.extractRotation(K),k.halfWidth.set(L.width*0.5,0,0),k.halfHeight.set(0,L.height*0.5,0),k.halfWidth.applyMatrix4(X),k.halfHeight.applyMatrix4(X),O++}else if(L.isPointLight){let k=Z.point[q];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(N),q++}else if(L.isHemisphereLight){let k=Z.hemi[F];k.direction.setFromMatrixPosition(L.matrixWorld),k.direction.transformDirection(N),F++}}}return{setup:H,setupView:Y,state:Z}}function mK($){let J=new JM($),Q=[],Z=[];function W(G){U.camera=G,Q.length=0,Z.length=0}function K(G){Q.push(G)}function X(G){Z.push(G)}function H(){J.setup(Q)}function Y(G){J.setupView(Q,G)}let U={lightsArray:Q,shadowsArray:Z,camera:null,lights:J,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:H,setupLightsView:Y,pushLight:K,pushShadow:X}}function QM($){let J=new WeakMap;function Q(W,K=0){let X=J.get(W),H;if(X===void 0)H=new mK($),J.set(W,[H]);else if(K>=X.length)H=new mK($),X.push(H);else H=X[K];return H}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}var ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KM($,J,Q){let Z=new N9,W=new u0,K=new u0,X=new i0,H=new GZ({depthPacking:$K}),Y=new EZ,U={},G=Q.maxTextureSize,E={[W7]:t1,[t1]:W7,[U8]:U8},q=new d1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new u0},radius:{value:4}},vertexShader:ZM,fragmentShader:WM}),M=q.clone();M.defines.HORIZONTAL_PASS=1;let O=new p1;O.setAttribute("position",new H1(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let F=new T1(O,q),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qQ;let R=this.type;this.render=function(C,S,b){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(C.length===0)return;let B=$.getRenderTarget(),D=$.getActiveCubeFace(),I=$.getActiveMipmapLevel(),w=$.state;if(w.setBlending(K7),w.buffers.depth.getReversed()===!0)w.buffers.color.setClear(0,0,0,0);else w.buffers.color.setClear(1,1,1,1);w.buffers.depth.setTest(!0),w.setScissorTest(!1);let A=R!==C8&&this.type===C8,f=R===C8&&this.type!==C8;for(let h=0,x=C.length;h<x;h++){let p=C[h],y=p.shadow;if(y===void 0){console.warn("THREE.WebGLShadowMap:",p,"has no shadow.");continue}if(y.autoUpdate===!1&&y.needsUpdate===!1)continue;W.copy(y.mapSize);let o=y.getFrameExtents();if(W.multiply(o),K.copy(y.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/o.x),W.x=K.x*o.x,y.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/o.y),W.y=K.y*o.y,y.mapSize.y=K.y}if(y.map===null||A===!0||f===!0){let Q0=this.type!==C8?{minFilter:d8,magFilter:d8}:{};if(y.map!==null)y.map.dispose();y.map=new D8(W.x,W.y,Q0),y.map.texture.name=p.name+".shadowMap",y.camera.updateProjectionMatrix()}$.setRenderTarget(y.map),$.clear();let a=y.getViewportCount();for(let Q0=0;Q0<a;Q0++){let X0=y.getViewport(Q0);X.set(K.x*X0.x,K.y*X0.y,K.x*X0.z,K.y*X0.w),w.viewport(X),y.updateMatrices(p,Q0),Z=y.getFrustum(),k(S,b,y.camera,p,this.type)}if(y.isPointLightShadow!==!0&&this.type===C8)_(y,b);y.needsUpdate=!1}R=this.type,N.needsUpdate=!1,$.setRenderTarget(B,D,I)};function _(C,S){let b=J.update(F);if(q.defines.VSM_SAMPLES!==C.blurSamples)q.defines.VSM_SAMPLES=C.blurSamples,M.defines.VSM_SAMPLES=C.blurSamples,q.needsUpdate=!0,M.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new D8(W.x,W.y);q.uniforms.shadow_pass.value=C.map.texture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,$.setRenderTarget(C.mapPass),$.clear(),$.renderBufferDirect(S,null,b,q,F,null),M.uniforms.shadow_pass.value=C.mapPass.texture,M.uniforms.resolution.value=C.mapSize,M.uniforms.radius.value=C.radius,$.setRenderTarget(C.map),$.clear(),$.renderBufferDirect(S,null,b,M,F,null)}function L(C,S,b,B){let D=null,I=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)D=I;else if(D=b.isPointLight===!0?Y:H,$.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let w=D.uuid,A=S.uuid,f=U[w];if(f===void 0)f={},U[w]=f;let h=f[A];if(h===void 0)h=D.clone(),f[A]=h,S.addEventListener("dispose",P);D=h}if(D.visible=S.visible,D.wireframe=S.wireframe,B===C8)D.side=S.shadowSide!==null?S.shadowSide:S.side;else D.side=S.shadowSide!==null?S.shadowSide:E[S.side];if(D.alphaMap=S.alphaMap,D.alphaTest=S.alphaToCoverage===!0?0.5:S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let w=$.properties.get(D);w.light=b}return D}function k(C,S,b,B,D){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&D===C8)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let A=J.update(C),f=C.material;if(Array.isArray(f)){let h=A.groups;for(let x=0,p=h.length;x<p;x++){let y=h[x],o=f[y.materialIndex];if(o&&o.visible){let a=L(C,o,B,D);C.onBeforeShadow($,C,S,b,A,a,y),$.renderBufferDirect(b,null,A,a,C,y),C.onAfterShadow($,C,S,b,A,a,y)}}}else if(f.visible){let h=L(C,f,B,D);C.onBeforeShadow($,C,S,b,A,h,null),$.renderBufferDirect(b,null,A,h,C,null),C.onAfterShadow($,C,S,b,A,h,null)}}}let w=C.children;for(let A=0,f=w.length;A<f;A++)k(w[A],S,b,B,D)}function P(C){C.target.removeEventListener("dispose",P);for(let b in U){let B=U[b],D=C.target.uuid;if(D in B)B[D].dispose(),delete B[D]}}}var XM={[O$]:L$,[D$]:B$,[_$]:z$,[Q9]:V$,[L$]:O$,[B$]:D$,[z$]:_$,[V$]:Q9};function HM($,J){function Q(){let v=!1,M0=new i0,U0=null,z0=new i0(0,0,0,0);return{setMask:function(Z0){if(U0!==Z0&&!v)$.colorMask(Z0,Z0,Z0,Z0),U0=Z0},setLocked:function(Z0){v=Z0},setClear:function(Z0,t,A0,x0,W1){if(W1===!0)Z0*=x0,t*=x0,A0*=x0;if(M0.set(Z0,t,A0,x0),z0.equals(M0)===!1)$.clearColor(Z0,t,A0,x0),z0.copy(M0)},reset:function(){v=!1,U0=null,z0.set(-1,0,0,0)}}}function Z(){let v=!1,M0=!1,U0=null,z0=null,Z0=null;return{setReversed:function(t){if(M0!==t){let A0=J.get("EXT_clip_control");if(t)A0.clipControlEXT(A0.LOWER_LEFT_EXT,A0.ZERO_TO_ONE_EXT);else A0.clipControlEXT(A0.LOWER_LEFT_EXT,A0.NEGATIVE_ONE_TO_ONE_EXT);M0=t;let x0=Z0;Z0=null,this.setClear(x0)}},getReversed:function(){return M0},setTest:function(t){if(t)e($.DEPTH_TEST);else F0($.DEPTH_TEST)},setMask:function(t){if(U0!==t&&!v)$.depthMask(t),U0=t},setFunc:function(t){if(M0)t=XM[t];if(z0!==t){switch(t){case O$:$.depthFunc($.NEVER);break;case L$:$.depthFunc($.ALWAYS);break;case D$:$.depthFunc($.LESS);break;case Q9:$.depthFunc($.LEQUAL);break;case _$:$.depthFunc($.EQUAL);break;case V$:$.depthFunc($.GEQUAL);break;case B$:$.depthFunc($.GREATER);break;case z$:$.depthFunc($.NOTEQUAL);break;default:$.depthFunc($.LEQUAL)}z0=t}},setLocked:function(t){v=t},setClear:function(t){if(Z0!==t){if(M0)t=1-t;$.clearDepth(t),Z0=t}},reset:function(){v=!1,U0=null,z0=null,Z0=null,M0=!1}}}function W(){let v=!1,M0=null,U0=null,z0=null,Z0=null,t=null,A0=null,x0=null,W1=null;return{setTest:function(Q1){if(!v)if(Q1)e($.STENCIL_TEST);else F0($.STENCIL_TEST)},setMask:function(Q1){if(M0!==Q1&&!v)$.stencilMask(Q1),M0=Q1},setFunc:function(Q1,B8,z8){if(U0!==Q1||z0!==B8||Z0!==z8)$.stencilFunc(Q1,B8,z8),U0=Q1,z0=B8,Z0=z8},setOp:function(Q1,B8,z8){if(t!==Q1||A0!==B8||x0!==z8)$.stencilOp(Q1,B8,z8),t=Q1,A0=B8,x0=z8},setLocked:function(Q1){v=Q1},setClear:function(Q1){if(W1!==Q1)$.clearStencil(Q1),W1=Q1},reset:function(){v=!1,M0=null,U0=null,z0=null,Z0=null,t=null,A0=null,x0=null,W1=null}}}let K=new Q,X=new Z,H=new W,Y=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,M=[],O=null,F=!1,N=null,R=null,_=null,L=null,k=null,P=null,C=null,S=new y0(0,0,0),b=0,B=!1,D=null,I=null,w=null,A=null,f=null,h=$.getParameter($.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,p=0,y=$.getParameter($.VERSION);if(y.indexOf("WebGL")!==-1)p=parseFloat(/^WebGL (\d)/.exec(y)[1]),x=p>=1;else if(y.indexOf("OpenGL ES")!==-1)p=parseFloat(/^OpenGL ES (\d)/.exec(y)[1]),x=p>=2;let o=null,a={},Q0=$.getParameter($.SCISSOR_BOX),X0=$.getParameter($.VIEWPORT),L0=new i0().fromArray(Q0),q0=new i0().fromArray(X0);function c(v,M0,U0,z0){let Z0=new Uint8Array(4),t=$.createTexture();$.bindTexture(v,t),$.texParameteri(v,$.TEXTURE_MIN_FILTER,$.NEAREST),$.texParameteri(v,$.TEXTURE_MAG_FILTER,$.NEAREST);for(let A0=0;A0<U0;A0++)if(v===$.TEXTURE_3D||v===$.TEXTURE_2D_ARRAY)$.texImage3D(M0,0,$.RGBA,1,1,z0,0,$.RGBA,$.UNSIGNED_BYTE,Z0);else $.texImage2D(M0+A0,0,$.RGBA,1,1,0,$.RGBA,$.UNSIGNED_BYTE,Z0);return t}let W0={};W0[$.TEXTURE_2D]=c($.TEXTURE_2D,$.TEXTURE_2D,1),W0[$.TEXTURE_CUBE_MAP]=c($.TEXTURE_CUBE_MAP,$.TEXTURE_CUBE_MAP_POSITIVE_X,6),W0[$.TEXTURE_2D_ARRAY]=c($.TEXTURE_2D_ARRAY,$.TEXTURE_2D_ARRAY,1,1),W0[$.TEXTURE_3D]=c($.TEXTURE_3D,$.TEXTURE_3D,1,1),K.setClear(0,0,0,1),X.setClear(1),H.setClear(0),e($.DEPTH_TEST),X.setFunc(Q9),V0(!1),a0(EQ),e($.CULL_FACE),j0(K7);function e(v){if(G[v]!==!0)$.enable(v),G[v]=!0}function F0(v){if(G[v]!==!1)$.disable(v),G[v]=!1}function N0(v,M0){if(E[v]!==M0){if($.bindFramebuffer(v,M0),E[v]=M0,v===$.DRAW_FRAMEBUFFER)E[$.FRAMEBUFFER]=M0;if(v===$.FRAMEBUFFER)E[$.DRAW_FRAMEBUFFER]=M0;return!0}return!1}function _0(v,M0){let U0=M,z0=!1;if(v){if(U0=q.get(M0),U0===void 0)U0=[],q.set(M0,U0);let Z0=v.textures;if(U0.length!==Z0.length||U0[0]!==$.COLOR_ATTACHMENT0){for(let t=0,A0=Z0.length;t<A0;t++)U0[t]=$.COLOR_ATTACHMENT0+t;U0.length=Z0.length,z0=!0}}else if(U0[0]!==$.BACK)U0[0]=$.BACK,z0=!0;if(z0)$.drawBuffers(U0)}function r0(v){if(O!==v)return $.useProgram(v),O=v,!0;return!1}let j={[M6]:$.FUNC_ADD,[OW]:$.FUNC_SUBTRACT,[LW]:$.FUNC_REVERSE_SUBTRACT};j[DW]=$.MIN,j[_W]=$.MAX;let l0={[VW]:$.ZERO,[BW]:$.ONE,[zW]:$.SRC_COLOR,[CW]:$.SRC_ALPHA,[SW]:$.SRC_ALPHA_SATURATE,[TW]:$.DST_COLOR,[PW]:$.DST_ALPHA,[kW]:$.ONE_MINUS_SRC_COLOR,[IW]:$.ONE_MINUS_SRC_ALPHA,[wW]:$.ONE_MINUS_DST_COLOR,[AW]:$.ONE_MINUS_DST_ALPHA,[jW]:$.CONSTANT_COLOR,[fW]:$.ONE_MINUS_CONSTANT_COLOR,[vW]:$.CONSTANT_ALPHA,[yW]:$.ONE_MINUS_CONSTANT_ALPHA};function j0(v,M0,U0,z0,Z0,t,A0,x0,W1,Q1){if(v===K7){if(F===!0)F0($.BLEND),F=!1;return}if(F===!1)e($.BLEND),F=!0;if(v!==FW){if(v!==N||Q1!==B){if(R!==M6||k!==M6)$.blendEquation($.FUNC_ADD),R=M6,k=M6;if(Q1)switch(v){case J9:$.blendFuncSeparate($.ONE,$.ONE_MINUS_SRC_ALPHA,$.ONE,$.ONE_MINUS_SRC_ALPHA);break;case NQ:$.blendFunc($.ONE,$.ONE);break;case MQ:$.blendFuncSeparate($.ZERO,$.ONE_MINUS_SRC_COLOR,$.ZERO,$.ONE);break;case RQ:$.blendFuncSeparate($.DST_COLOR,$.ONE_MINUS_SRC_ALPHA,$.ZERO,$.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case J9:$.blendFuncSeparate($.SRC_ALPHA,$.ONE_MINUS_SRC_ALPHA,$.ONE,$.ONE_MINUS_SRC_ALPHA);break;case NQ:$.blendFuncSeparate($.SRC_ALPHA,$.ONE,$.ONE,$.ONE);break;case MQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case RQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}_=null,L=null,P=null,C=null,S.set(0,0,0),b=0,N=v,B=Q1}return}if(Z0=Z0||M0,t=t||U0,A0=A0||z0,M0!==R||Z0!==k)$.blendEquationSeparate(j[M0],j[Z0]),R=M0,k=Z0;if(U0!==_||z0!==L||t!==P||A0!==C)$.blendFuncSeparate(l0[U0],l0[z0],l0[t],l0[A0]),_=U0,L=z0,P=t,C=A0;if(x0.equals(S)===!1||W1!==b)$.blendColor(x0.r,x0.g,x0.b,W1),S.copy(x0),b=W1;N=v,B=!1}function T0(v,M0){v.side===U8?F0($.CULL_FACE):e($.CULL_FACE);let U0=v.side===t1;if(M0)U0=!U0;V0(U0),v.blending===J9&&v.transparent===!1?j0(K7):j0(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),X.setFunc(v.depthFunc),X.setTest(v.depthTest),X.setMask(v.depthWrite),K.setMask(v.colorWrite);let z0=v.stencilWrite;if(H.setTest(z0),z0)H.setMask(v.stencilWriteMask),H.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),H.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);O0(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?e($.SAMPLE_ALPHA_TO_COVERAGE):F0($.SAMPLE_ALPHA_TO_COVERAGE)}function V0(v){if(D!==v){if(v)$.frontFace($.CW);else $.frontFace($.CCW);D=v}}function a0(v){if(v!==NW){if(e($.CULL_FACE),v!==I)if(v===EQ)$.cullFace($.BACK);else if(v===MW)$.cullFace($.FRONT);else $.cullFace($.FRONT_AND_BACK)}else F0($.CULL_FACE);I=v}function C0(v){if(v!==w){if(x)$.lineWidth(v);w=v}}function O0(v,M0,U0){if(v){if(e($.POLYGON_OFFSET_FILL),A!==M0||f!==U0)$.polygonOffset(M0,U0),A=M0,f=U0}else F0($.POLYGON_OFFSET_FILL)}function J1(v){if(v)e($.SCISSOR_TEST);else F0($.SCISSOR_TEST)}function q1(v){if(v===void 0)v=$.TEXTURE0+h-1;if(o!==v)$.activeTexture(v),o=v}function d0(v,M0,U0){if(U0===void 0)if(o===null)U0=$.TEXTURE0+h-1;else U0=o;let z0=a[U0];if(z0===void 0)z0={type:void 0,texture:void 0},a[U0]=z0;if(z0.type!==v||z0.texture!==M0){if(o!==U0)$.activeTexture(U0),o=U0;$.bindTexture(v,M0||W0[v]),z0.type=v,z0.texture=M0}}function T(){let v=a[o];if(v!==void 0&&v.type!==void 0)$.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function V(){try{$.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function m(){try{$.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function r(){try{$.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function $0(){try{$.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function i(){try{$.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function B0(){try{$.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function K0(){try{$.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function I0(){try{$.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function S0(){try{$.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function H0(){try{$.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function d(v){if(L0.equals(v)===!1)$.scissor(v.x,v.y,v.z,v.w),L0.copy(v)}function J0(v){if(q0.equals(v)===!1)$.viewport(v.x,v.y,v.z,v.w),q0.copy(v)}function E0(v,M0){let U0=U.get(M0);if(U0===void 0)U0=new WeakMap,U.set(M0,U0);let z0=U0.get(v);if(z0===void 0)z0=$.getUniformBlockIndex(M0,v.name),U0.set(v,z0)}function G0(v,M0){let z0=U.get(M0).get(v);if(Y.get(M0)!==z0)$.uniformBlockBinding(M0,z0,v.__bindingPointIndex),Y.set(M0,z0)}function h0(){$.disable($.BLEND),$.disable($.CULL_FACE),$.disable($.DEPTH_TEST),$.disable($.POLYGON_OFFSET_FILL),$.disable($.SCISSOR_TEST),$.disable($.STENCIL_TEST),$.disable($.SAMPLE_ALPHA_TO_COVERAGE),$.blendEquation($.FUNC_ADD),$.blendFunc($.ONE,$.ZERO),$.blendFuncSeparate($.ONE,$.ZERO,$.ONE,$.ZERO),$.blendColor(0,0,0,0),$.colorMask(!0,!0,!0,!0),$.clearColor(0,0,0,0),$.depthMask(!0),$.depthFunc($.LESS),X.setReversed(!1),$.clearDepth(1),$.stencilMask(4294967295),$.stencilFunc($.ALWAYS,0,4294967295),$.stencilOp($.KEEP,$.KEEP,$.KEEP),$.clearStencil(0),$.cullFace($.BACK),$.frontFace($.CCW),$.polygonOffset(0,0),$.activeTexture($.TEXTURE0),$.bindFramebuffer($.FRAMEBUFFER,null),$.bindFramebuffer($.DRAW_FRAMEBUFFER,null),$.bindFramebuffer($.READ_FRAMEBUFFER,null),$.useProgram(null),$.lineWidth(1),$.scissor(0,0,$.canvas.width,$.canvas.height),$.viewport(0,0,$.canvas.width,$.canvas.height),G={},o=null,a={},E={},q=new WeakMap,M=[],O=null,F=!1,N=null,R=null,_=null,L=null,k=null,P=null,C=null,S=new y0(0,0,0),b=0,B=!1,D=null,I=null,w=null,A=null,f=null,L0.set(0,0,$.canvas.width,$.canvas.height),q0.set(0,0,$.canvas.width,$.canvas.height),K.reset(),X.reset(),H.reset()}return{buffers:{color:K,depth:X,stencil:H},enable:e,disable:F0,bindFramebuffer:N0,drawBuffers:_0,useProgram:r0,setBlending:j0,setMaterial:T0,setFlipSided:V0,setCullFace:a0,setLineWidth:C0,setPolygonOffset:O0,setScissorTest:J1,activeTexture:q1,bindTexture:d0,unbindTexture:T,compressedTexImage2D:V,compressedTexImage3D:m,texImage2D:S0,texImage3D:H0,updateUBOMapping:E0,uniformBlockBinding:G0,texStorage2D:K0,texStorage3D:I0,texSubImage2D:r,texSubImage3D:$0,compressedTexSubImage2D:i,compressedTexSubImage3D:B0,scissor:d,viewport:J0,reset:h0}}function YM($,J,Q,Z,W,K,X){let H=J.has("WEBGL_multisampled_render_to_texture")?J.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new u0,G=new WeakMap,E,q=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function O(T,V){return M?new OffscreenCanvas(T,V):q6("canvas")}function F(T,V,m){let r=1,$0=d0(T);if($0.width>m||$0.height>m)r=m/Math.max($0.width,$0.height);if(r<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let i=Math.floor(r*$0.width),B0=Math.floor(r*$0.height);if(E===void 0)E=O(i,B0);let K0=V?O(i,B0):E;return K0.width=i,K0.height=B0,K0.getContext("2d").drawImage(T,0,0,i,B0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$0.width+"x"+$0.height+") to ("+i+"x"+B0+")."),K0}else{if("data"in T)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$0.width+"x"+$0.height+").");return T}return T}function N(T){return T.generateMipmaps}function R(T){$.generateMipmap(T)}function _(T){if(T.isWebGLCubeRenderTarget)return $.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return $.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return $.TEXTURE_2D_ARRAY;return $.TEXTURE_2D}function L(T,V,m,r,$0=!1){if(T!==null){if($[T]!==void 0)return $[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let i=V;if(V===$.RED){if(m===$.FLOAT)i=$.R32F;if(m===$.HALF_FLOAT)i=$.R16F;if(m===$.UNSIGNED_BYTE)i=$.R8}if(V===$.RED_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.R8UI;if(m===$.UNSIGNED_SHORT)i=$.R16UI;if(m===$.UNSIGNED_INT)i=$.R32UI;if(m===$.BYTE)i=$.R8I;if(m===$.SHORT)i=$.R16I;if(m===$.INT)i=$.R32I}if(V===$.RG){if(m===$.FLOAT)i=$.RG32F;if(m===$.HALF_FLOAT)i=$.RG16F;if(m===$.UNSIGNED_BYTE)i=$.RG8}if(V===$.RG_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.RG8UI;if(m===$.UNSIGNED_SHORT)i=$.RG16UI;if(m===$.UNSIGNED_INT)i=$.RG32UI;if(m===$.BYTE)i=$.RG8I;if(m===$.SHORT)i=$.RG16I;if(m===$.INT)i=$.RG32I}if(V===$.RGB_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.RGB8UI;if(m===$.UNSIGNED_SHORT)i=$.RGB16UI;if(m===$.UNSIGNED_INT)i=$.RGB32UI;if(m===$.BYTE)i=$.RGB8I;if(m===$.SHORT)i=$.RGB16I;if(m===$.INT)i=$.RGB32I}if(V===$.RGBA_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.RGBA8UI;if(m===$.UNSIGNED_SHORT)i=$.RGBA16UI;if(m===$.UNSIGNED_INT)i=$.RGBA32UI;if(m===$.BYTE)i=$.RGBA8I;if(m===$.SHORT)i=$.RGBA16I;if(m===$.INT)i=$.RGBA32I}if(V===$.RGB){if(m===$.UNSIGNED_INT_5_9_9_9_REV)i=$.RGB9_E5;if(m===$.UNSIGNED_INT_10F_11F_11F_REV)i=$.R11F_G11F_B10F}if(V===$.RGBA){let B0=$0?tQ:o0.getTransfer(r);if(m===$.FLOAT)i=$.RGBA32F;if(m===$.HALF_FLOAT)i=$.RGBA16F;if(m===$.UNSIGNED_BYTE)i=B0===Y1?$.SRGB8_ALPHA8:$.RGBA8;if(m===$.UNSIGNED_SHORT_4_4_4_4)i=$.RGBA4;if(m===$.UNSIGNED_SHORT_5_5_5_1)i=$.RGB5_A1}if(i===$.R16F||i===$.R32F||i===$.RG16F||i===$.RG32F||i===$.RGBA16F||i===$.RGBA32F)J.get("EXT_color_buffer_float");return i}function k(T,V){let m;if(T){if(V===null||V===L6||V===D6)m=$.DEPTH24_STENCIL8;else if(V===H7)m=$.DEPTH32F_STENCIL8;else if(V===W9)m=$.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(V===null||V===L6||V===D6)m=$.DEPTH_COMPONENT24;else if(V===H7)m=$.DEPTH_COMPONENT32F;else if(V===W9)m=$.DEPTH_COMPONENT16;return m}function P(T,V){if(N(T)===!0||T.isFramebufferTexture&&T.minFilter!==d8&&T.minFilter!==u1)return Math.log2(Math.max(V.width,V.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return V.mipmaps.length;else return 1}function C(T){let V=T.target;if(V.removeEventListener("dispose",C),b(V),V.isVideoTexture)G.delete(V)}function S(T){let V=T.target;V.removeEventListener("dispose",S),D(V)}function b(T){let V=Z.get(T);if(V.__webglInit===void 0)return;let m=T.source,r=q.get(m);if(r){let $0=r[V.__cacheKey];if($0.usedTimes--,$0.usedTimes===0)B(T);if(Object.keys(r).length===0)q.delete(m)}Z.remove(T)}function B(T){let V=Z.get(T);$.deleteTexture(V.__webglTexture);let m=T.source,r=q.get(m);delete r[V.__cacheKey],X.memory.textures--}function D(T){let V=Z.get(T);if(T.depthTexture)T.depthTexture.dispose(),Z.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let r=0;r<6;r++){if(Array.isArray(V.__webglFramebuffer[r]))for(let $0=0;$0<V.__webglFramebuffer[r].length;$0++)$.deleteFramebuffer(V.__webglFramebuffer[r][$0]);else $.deleteFramebuffer(V.__webglFramebuffer[r]);if(V.__webglDepthbuffer)$.deleteRenderbuffer(V.__webglDepthbuffer[r])}else{if(Array.isArray(V.__webglFramebuffer))for(let r=0;r<V.__webglFramebuffer.length;r++)$.deleteFramebuffer(V.__webglFramebuffer[r]);else $.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer)$.deleteRenderbuffer(V.__webglDepthbuffer);if(V.__webglMultisampledFramebuffer)$.deleteFramebuffer(V.__webglMultisampledFramebuffer);if(V.__webglColorRenderbuffer){for(let r=0;r<V.__webglColorRenderbuffer.length;r++)if(V.__webglColorRenderbuffer[r])$.deleteRenderbuffer(V.__webglColorRenderbuffer[r])}if(V.__webglDepthRenderbuffer)$.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let m=T.textures;for(let r=0,$0=m.length;r<$0;r++){let i=Z.get(m[r]);if(i.__webglTexture)$.deleteTexture(i.__webglTexture),X.memory.textures--;Z.remove(m[r])}Z.remove(T)}let I=0;function w(){I=0}function A(){let T=I;if(T>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+W.maxTextures);return I+=1,T}function f(T){let V=[];return V.push(T.wrapS),V.push(T.wrapT),V.push(T.wrapR||0),V.push(T.magFilter),V.push(T.minFilter),V.push(T.anisotropy),V.push(T.internalFormat),V.push(T.format),V.push(T.type),V.push(T.generateMipmaps),V.push(T.premultiplyAlpha),V.push(T.flipY),V.push(T.unpackAlignment),V.push(T.colorSpace),V.join()}function h(T,V){let m=Z.get(T);if(T.isVideoTexture)J1(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&m.__version!==T.version){let r=T.image;if(r===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(r.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W0(m,T,V);return}}else if(T.isExternalTexture)m.__webglTexture=T.sourceTexture?T.sourceTexture:null;Q.bindTexture($.TEXTURE_2D,m.__webglTexture,$.TEXTURE0+V)}function x(T,V){let m=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&m.__version!==T.version){W0(m,T,V);return}Q.bindTexture($.TEXTURE_2D_ARRAY,m.__webglTexture,$.TEXTURE0+V)}function p(T,V){let m=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&m.__version!==T.version){W0(m,T,V);return}Q.bindTexture($.TEXTURE_3D,m.__webglTexture,$.TEXTURE0+V)}function y(T,V){let m=Z.get(T);if(T.version>0&&m.__version!==T.version){e(m,T,V);return}Q.bindTexture($.TEXTURE_CUBE_MAP,m.__webglTexture,$.TEXTURE0+V)}let o={[F6]:$.REPEAT,[I$]:$.CLAMP_TO_EDGE,[P$]:$.MIRRORED_REPEAT},a={[d8]:$.NEAREST,[A$]:$.NEAREST_MIPMAP_NEAREST,[f7]:$.NEAREST_MIPMAP_LINEAR,[u1]:$.LINEAR,[O6]:$.LINEAR_MIPMAP_NEAREST,[c8]:$.LINEAR_MIPMAP_LINEAR},Q0={[ZK]:$.NEVER,[UK]:$.ALWAYS,[WK]:$.LESS,[eQ]:$.LEQUAL,[KK]:$.EQUAL,[YK]:$.GEQUAL,[XK]:$.GREATER,[HK]:$.NOTEQUAL};function X0(T,V){if(V.type===H7&&J.has("OES_texture_float_linear")===!1&&(V.magFilter===u1||V.magFilter===O6||V.magFilter===f7||V.magFilter===c8||V.minFilter===u1||V.minFilter===O6||V.minFilter===f7||V.minFilter===c8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if($.texParameteri(T,$.TEXTURE_WRAP_S,o[V.wrapS]),$.texParameteri(T,$.TEXTURE_WRAP_T,o[V.wrapT]),T===$.TEXTURE_3D||T===$.TEXTURE_2D_ARRAY)$.texParameteri(T,$.TEXTURE_WRAP_R,o[V.wrapR]);if($.texParameteri(T,$.TEXTURE_MAG_FILTER,a[V.magFilter]),$.texParameteri(T,$.TEXTURE_MIN_FILTER,a[V.minFilter]),V.compareFunction)$.texParameteri(T,$.TEXTURE_COMPARE_MODE,$.COMPARE_REF_TO_TEXTURE),$.texParameteri(T,$.TEXTURE_COMPARE_FUNC,Q0[V.compareFunction]);if(J.has("EXT_texture_filter_anisotropic")===!0){if(V.magFilter===d8)return;if(V.minFilter!==f7&&V.minFilter!==c8)return;if(V.type===H7&&J.has("OES_texture_float_linear")===!1)return;if(V.anisotropy>1||Z.get(V).__currentAnisotropy){let m=J.get("EXT_texture_filter_anisotropic");$.texParameterf(T,m.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,W.getMaxAnisotropy())),Z.get(V).__currentAnisotropy=V.anisotropy}}}function L0(T,V){let m=!1;if(T.__webglInit===void 0)T.__webglInit=!0,V.addEventListener("dispose",C);let r=V.source,$0=q.get(r);if($0===void 0)$0={},q.set(r,$0);let i=f(V);if(i!==T.__cacheKey){if($0[i]===void 0)$0[i]={texture:$.createTexture(),usedTimes:0},X.memory.textures++,m=!0;$0[i].usedTimes++;let B0=$0[T.__cacheKey];if(B0!==void 0){if($0[T.__cacheKey].usedTimes--,B0.usedTimes===0)B(V)}T.__cacheKey=i,T.__webglTexture=$0[i].texture}return m}function q0(T,V,m){return Math.floor(Math.floor(T/m)/V)}function c(T,V,m,r){let i=T.updateRanges;if(i.length===0)Q.texSubImage2D($.TEXTURE_2D,0,0,0,V.width,V.height,m,r,V.data);else{i.sort((H0,d)=>H0.start-d.start);let B0=0;for(let H0=1;H0<i.length;H0++){let d=i[B0],J0=i[H0],E0=d.start+d.count,G0=q0(J0.start,V.width,4),h0=q0(d.start,V.width,4);if(J0.start<=E0+1&&G0===h0&&q0(J0.start+J0.count-1,V.width,4)===G0)d.count=Math.max(d.count,J0.start+J0.count-d.start);else++B0,i[B0]=J0}i.length=B0+1;let K0=$.getParameter($.UNPACK_ROW_LENGTH),I0=$.getParameter($.UNPACK_SKIP_PIXELS),S0=$.getParameter($.UNPACK_SKIP_ROWS);$.pixelStorei($.UNPACK_ROW_LENGTH,V.width);for(let H0=0,d=i.length;H0<d;H0++){let J0=i[H0],E0=Math.floor(J0.start/4),G0=Math.ceil(J0.count/4),h0=E0%V.width,v=Math.floor(E0/V.width),M0=G0,U0=1;$.pixelStorei($.UNPACK_SKIP_PIXELS,h0),$.pixelStorei($.UNPACK_SKIP_ROWS,v),Q.texSubImage2D($.TEXTURE_2D,0,h0,v,M0,1,m,r,V.data)}T.clearUpdateRanges(),$.pixelStorei($.UNPACK_ROW_LENGTH,K0),$.pixelStorei($.UNPACK_SKIP_PIXELS,I0),$.pixelStorei($.UNPACK_SKIP_ROWS,S0)}}function W0(T,V,m){let r=$.TEXTURE_2D;if(V.isDataArrayTexture||V.isCompressedArrayTexture)r=$.TEXTURE_2D_ARRAY;if(V.isData3DTexture)r=$.TEXTURE_3D;let $0=L0(T,V),i=V.source;Q.bindTexture(r,T.__webglTexture,$.TEXTURE0+m);let B0=Z.get(i);if(i.version!==B0.__version||$0===!0){Q.activeTexture($.TEXTURE0+m);let K0=o0.getPrimaries(o0.workingColorSpace),I0=V.colorSpace===v7?null:o0.getPrimaries(V.colorSpace),S0=V.colorSpace===v7||K0===I0?$.NONE:$.BROWSER_DEFAULT_WEBGL;$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,V.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,V.unpackAlignment),$.pixelStorei($.UNPACK_COLORSPACE_CONVERSION_WEBGL,S0);let H0=F(V.image,!1,W.maxTextureSize);H0=q1(V,H0);let d=K.convert(V.format,V.colorSpace),J0=K.convert(V.type),E0=L(V.internalFormat,d,J0,V.colorSpace,V.isVideoTexture);X0(r,V);let G0,h0=V.mipmaps,v=V.isVideoTexture!==!0,M0=B0.__version===void 0||$0===!0,U0=i.dataReady,z0=P(V,H0);if(V.isDepthTexture){if(E0=k(V.format===X9,V.type),M0)if(v)Q.texStorage2D($.TEXTURE_2D,1,E0,H0.width,H0.height);else Q.texImage2D($.TEXTURE_2D,0,E0,H0.width,H0.height,0,d,J0,null)}else if(V.isDataTexture)if(h0.length>0){if(v&&M0)Q.texStorage2D($.TEXTURE_2D,z0,E0,h0[0].width,h0[0].height);for(let Z0=0,t=h0.length;Z0<t;Z0++)if(G0=h0[Z0],v){if(U0)Q.texSubImage2D($.TEXTURE_2D,Z0,0,0,G0.width,G0.height,d,J0,G0.data)}else Q.texImage2D($.TEXTURE_2D,Z0,E0,G0.width,G0.height,0,d,J0,G0.data);V.generateMipmaps=!1}else if(v){if(M0)Q.texStorage2D($.TEXTURE_2D,z0,E0,H0.width,H0.height);if(U0)c(V,H0,d,J0)}else Q.texImage2D($.TEXTURE_2D,0,E0,H0.width,H0.height,0,d,J0,H0.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){if(v&&M0)Q.texStorage3D($.TEXTURE_2D_ARRAY,z0,E0,h0[0].width,h0[0].height,H0.depth);for(let Z0=0,t=h0.length;Z0<t;Z0++)if(G0=h0[Z0],V.format!==I8)if(d!==null)if(v){if(U0)if(V.layerUpdates.size>0){let A0=VZ(G0.width,G0.height,V.format,V.type);for(let x0 of V.layerUpdates){let W1=G0.data.subarray(x0*A0/G0.data.BYTES_PER_ELEMENT,(x0+1)*A0/G0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D($.TEXTURE_2D_ARRAY,Z0,0,0,x0,G0.width,G0.height,1,d,W1)}V.clearLayerUpdates()}else Q.compressedTexSubImage3D($.TEXTURE_2D_ARRAY,Z0,0,0,0,G0.width,G0.height,H0.depth,d,G0.data)}else Q.compressedTexImage3D($.TEXTURE_2D_ARRAY,Z0,E0,G0.width,G0.height,H0.depth,0,G0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v){if(U0)Q.texSubImage3D($.TEXTURE_2D_ARRAY,Z0,0,0,0,G0.width,G0.height,H0.depth,d,J0,G0.data)}else Q.texImage3D($.TEXTURE_2D_ARRAY,Z0,E0,G0.width,G0.height,H0.depth,0,d,J0,G0.data)}else{if(v&&M0)Q.texStorage2D($.TEXTURE_2D,z0,E0,h0[0].width,h0[0].height);for(let Z0=0,t=h0.length;Z0<t;Z0++)if(G0=h0[Z0],V.format!==I8)if(d!==null)if(v){if(U0)Q.compressedTexSubImage2D($.TEXTURE_2D,Z0,0,0,G0.width,G0.height,d,G0.data)}else Q.compressedTexImage2D($.TEXTURE_2D,Z0,E0,G0.width,G0.height,0,G0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v){if(U0)Q.texSubImage2D($.TEXTURE_2D,Z0,0,0,G0.width,G0.height,d,J0,G0.data)}else Q.texImage2D($.TEXTURE_2D,Z0,E0,G0.width,G0.height,0,d,J0,G0.data)}else if(V.isDataArrayTexture)if(v){if(M0)Q.texStorage3D($.TEXTURE_2D_ARRAY,z0,E0,H0.width,H0.height,H0.depth);if(U0)if(V.layerUpdates.size>0){let Z0=VZ(H0.width,H0.height,V.format,V.type);for(let t of V.layerUpdates){let A0=H0.data.subarray(t*Z0/H0.data.BYTES_PER_ELEMENT,(t+1)*Z0/H0.data.BYTES_PER_ELEMENT);Q.texSubImage3D($.TEXTURE_2D_ARRAY,0,0,0,t,H0.width,H0.height,1,d,J0,A0)}V.clearLayerUpdates()}else Q.texSubImage3D($.TEXTURE_2D_ARRAY,0,0,0,0,H0.width,H0.height,H0.depth,d,J0,H0.data)}else Q.texImage3D($.TEXTURE_2D_ARRAY,0,E0,H0.width,H0.height,H0.depth,0,d,J0,H0.data);else if(V.isData3DTexture)if(v){if(M0)Q.texStorage3D($.TEXTURE_3D,z0,E0,H0.width,H0.height,H0.depth);if(U0)Q.texSubImage3D($.TEXTURE_3D,0,0,0,0,H0.width,H0.height,H0.depth,d,J0,H0.data)}else Q.texImage3D($.TEXTURE_3D,0,E0,H0.width,H0.height,H0.depth,0,d,J0,H0.data);else if(V.isFramebufferTexture){if(M0)if(v)Q.texStorage2D($.TEXTURE_2D,z0,E0,H0.width,H0.height);else{let{width:Z0,height:t}=H0;for(let A0=0;A0<z0;A0++)Q.texImage2D($.TEXTURE_2D,A0,E0,Z0,t,0,d,J0,null),Z0>>=1,t>>=1}}else if(h0.length>0){if(v&&M0){let Z0=d0(h0[0]);Q.texStorage2D($.TEXTURE_2D,z0,E0,Z0.width,Z0.height)}for(let Z0=0,t=h0.length;Z0<t;Z0++)if(G0=h0[Z0],v){if(U0)Q.texSubImage2D($.TEXTURE_2D,Z0,0,0,d,J0,G0)}else Q.texImage2D($.TEXTURE_2D,Z0,E0,d,J0,G0);V.generateMipmaps=!1}else if(v){if(M0){let Z0=d0(H0);Q.texStorage2D($.TEXTURE_2D,z0,E0,Z0.width,Z0.height)}if(U0)Q.texSubImage2D($.TEXTURE_2D,0,0,0,d,J0,H0)}else Q.texImage2D($.TEXTURE_2D,0,E0,d,J0,H0);if(N(V))R(r);if(B0.__version=i.version,V.onUpdate)V.onUpdate(V)}T.__version=V.version}function e(T,V,m){if(V.image.length!==6)return;let r=L0(T,V),$0=V.source;Q.bindTexture($.TEXTURE_CUBE_MAP,T.__webglTexture,$.TEXTURE0+m);let i=Z.get($0);if($0.version!==i.__version||r===!0){Q.activeTexture($.TEXTURE0+m);let B0=o0.getPrimaries(o0.workingColorSpace),K0=V.colorSpace===v7?null:o0.getPrimaries(V.colorSpace),I0=V.colorSpace===v7||B0===K0?$.NONE:$.BROWSER_DEFAULT_WEBGL;$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,V.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,V.unpackAlignment),$.pixelStorei($.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0);let S0=V.isCompressedTexture||V.image[0].isCompressedTexture,H0=V.image[0]&&V.image[0].isDataTexture,d=[];for(let t=0;t<6;t++){if(!S0&&!H0)d[t]=F(V.image[t],!0,W.maxCubemapSize);else d[t]=H0?V.image[t].image:V.image[t];d[t]=q1(V,d[t])}let J0=d[0],E0=K.convert(V.format,V.colorSpace),G0=K.convert(V.type),h0=L(V.internalFormat,E0,G0,V.colorSpace),v=V.isVideoTexture!==!0,M0=i.__version===void 0||r===!0,U0=$0.dataReady,z0=P(V,J0);X0($.TEXTURE_CUBE_MAP,V);let Z0;if(S0){if(v&&M0)Q.texStorage2D($.TEXTURE_CUBE_MAP,z0,h0,J0.width,J0.height);for(let t=0;t<6;t++){Z0=d[t].mipmaps;for(let A0=0;A0<Z0.length;A0++){let x0=Z0[A0];if(V.format!==I8)if(E0!==null)if(v){if(U0)Q.compressedTexSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0,0,0,x0.width,x0.height,E0,x0.data)}else Q.compressedTexImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0,h0,x0.width,x0.height,0,x0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(U0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0,0,0,x0.width,x0.height,E0,G0,x0.data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0,h0,x0.width,x0.height,0,E0,G0,x0.data)}}}else{if(Z0=V.mipmaps,v&&M0){if(Z0.length>0)z0++;let t=d0(d[0]);Q.texStorage2D($.TEXTURE_CUBE_MAP,z0,h0,t.width,t.height)}for(let t=0;t<6;t++)if(H0){if(v){if(U0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,d[t].width,d[t].height,E0,G0,d[t].data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,h0,d[t].width,d[t].height,0,E0,G0,d[t].data);for(let A0=0;A0<Z0.length;A0++){let W1=Z0[A0].image[t].image;if(v){if(U0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0+1,0,0,W1.width,W1.height,E0,G0,W1.data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0+1,h0,W1.width,W1.height,0,E0,G0,W1.data)}}else{if(v){if(U0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,E0,G0,d[t])}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,h0,E0,G0,d[t]);for(let A0=0;A0<Z0.length;A0++){let x0=Z0[A0];if(v){if(U0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0+1,0,0,E0,G0,x0.image[t])}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+t,A0+1,h0,E0,G0,x0.image[t])}}}if(N(V))R($.TEXTURE_CUBE_MAP);if(i.__version=$0.version,V.onUpdate)V.onUpdate(V)}T.__version=V.version}function F0(T,V,m,r,$0,i){let B0=K.convert(m.format,m.colorSpace),K0=K.convert(m.type),I0=L(m.internalFormat,B0,K0,m.colorSpace),S0=Z.get(V),H0=Z.get(m);if(H0.__renderTarget=V,!S0.__hasExternalTextures){let d=Math.max(1,V.width>>i),J0=Math.max(1,V.height>>i);if($0===$.TEXTURE_3D||$0===$.TEXTURE_2D_ARRAY)Q.texImage3D($0,i,I0,d,J0,V.depth,0,B0,K0,null);else Q.texImage2D($0,i,I0,d,J0,0,B0,K0,null)}if(Q.bindFramebuffer($.FRAMEBUFFER,T),O0(V))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,r,$0,H0.__webglTexture,0,C0(V));else if($0===$.TEXTURE_2D||$0>=$.TEXTURE_CUBE_MAP_POSITIVE_X&&$0<=$.TEXTURE_CUBE_MAP_NEGATIVE_Z)$.framebufferTexture2D($.FRAMEBUFFER,r,$0,H0.__webglTexture,i);Q.bindFramebuffer($.FRAMEBUFFER,null)}function N0(T,V,m){if($.bindRenderbuffer($.RENDERBUFFER,T),V.depthBuffer){let r=V.depthTexture,$0=r&&r.isDepthTexture?r.type:null,i=k(V.stencilBuffer,$0),B0=V.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,K0=C0(V);if(O0(V))H.renderbufferStorageMultisampleEXT($.RENDERBUFFER,K0,i,V.width,V.height);else if(m)$.renderbufferStorageMultisample($.RENDERBUFFER,K0,i,V.width,V.height);else $.renderbufferStorage($.RENDERBUFFER,i,V.width,V.height);$.framebufferRenderbuffer($.FRAMEBUFFER,B0,$.RENDERBUFFER,T)}else{let r=V.textures;for(let $0=0;$0<r.length;$0++){let i=r[$0],B0=K.convert(i.format,i.colorSpace),K0=K.convert(i.type),I0=L(i.internalFormat,B0,K0,i.colorSpace),S0=C0(V);if(m&&O0(V)===!1)$.renderbufferStorageMultisample($.RENDERBUFFER,S0,I0,V.width,V.height);else if(O0(V))H.renderbufferStorageMultisampleEXT($.RENDERBUFFER,S0,I0,V.width,V.height);else $.renderbufferStorage($.RENDERBUFFER,I0,V.width,V.height)}}$.bindRenderbuffer($.RENDERBUFFER,null)}function _0(T,V){if(V&&V.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer($.FRAMEBUFFER,T),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let r=Z.get(V.depthTexture);if(r.__renderTarget=V,!r.__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0;h(V.depthTexture,0);let $0=r.__webglTexture,i=C0(V);if(V.depthTexture.format===T$)if(O0(V))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,$0,0,i);else $.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,$0,0);else if(V.depthTexture.format===X9)if(O0(V))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,$.DEPTH_STENCIL_ATTACHMENT,$.TEXTURE_2D,$0,0,i);else $.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_STENCIL_ATTACHMENT,$.TEXTURE_2D,$0,0);else throw Error("Unknown depthTexture format")}function r0(T){let V=Z.get(T),m=T.isWebGLCubeRenderTarget===!0;if(V.__boundDepthTexture!==T.depthTexture){let r=T.depthTexture;if(V.__depthDisposeCallback)V.__depthDisposeCallback();if(r){let $0=()=>{delete V.__boundDepthTexture,delete V.__depthDisposeCallback,r.removeEventListener("dispose",$0)};r.addEventListener("dispose",$0),V.__depthDisposeCallback=$0}V.__boundDepthTexture=r}if(T.depthTexture&&!V.__autoAllocateDepthBuffer){if(m)throw Error("target.depthTexture not supported in Cube render targets");let r=T.texture.mipmaps;if(r&&r.length>0)_0(V.__webglFramebuffer[0],T);else _0(V.__webglFramebuffer,T)}else if(m){V.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(Q.bindFramebuffer($.FRAMEBUFFER,V.__webglFramebuffer[r]),V.__webglDepthbuffer[r]===void 0)V.__webglDepthbuffer[r]=$.createRenderbuffer(),N0(V.__webglDepthbuffer[r],T,!1);else{let $0=T.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,i=V.__webglDepthbuffer[r];$.bindRenderbuffer($.RENDERBUFFER,i),$.framebufferRenderbuffer($.FRAMEBUFFER,$0,$.RENDERBUFFER,i)}}else{let r=T.texture.mipmaps;if(r&&r.length>0)Q.bindFramebuffer($.FRAMEBUFFER,V.__webglFramebuffer[0]);else Q.bindFramebuffer($.FRAMEBUFFER,V.__webglFramebuffer);if(V.__webglDepthbuffer===void 0)V.__webglDepthbuffer=$.createRenderbuffer(),N0(V.__webglDepthbuffer,T,!1);else{let $0=T.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,i=V.__webglDepthbuffer;$.bindRenderbuffer($.RENDERBUFFER,i),$.framebufferRenderbuffer($.FRAMEBUFFER,$0,$.RENDERBUFFER,i)}}Q.bindFramebuffer($.FRAMEBUFFER,null)}function j(T,V,m){let r=Z.get(T);if(V!==void 0)F0(r.__webglFramebuffer,T,T.texture,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,0);if(m!==void 0)r0(T)}function l0(T){let V=T.texture,m=Z.get(T),r=Z.get(V);T.addEventListener("dispose",S);let $0=T.textures,i=T.isWebGLCubeRenderTarget===!0,B0=$0.length>1;if(!B0){if(r.__webglTexture===void 0)r.__webglTexture=$.createTexture();r.__version=V.version,X.memory.textures++}if(i){m.__webglFramebuffer=[];for(let K0=0;K0<6;K0++)if(V.mipmaps&&V.mipmaps.length>0){m.__webglFramebuffer[K0]=[];for(let I0=0;I0<V.mipmaps.length;I0++)m.__webglFramebuffer[K0][I0]=$.createFramebuffer()}else m.__webglFramebuffer[K0]=$.createFramebuffer()}else{if(V.mipmaps&&V.mipmaps.length>0){m.__webglFramebuffer=[];for(let K0=0;K0<V.mipmaps.length;K0++)m.__webglFramebuffer[K0]=$.createFramebuffer()}else m.__webglFramebuffer=$.createFramebuffer();if(B0)for(let K0=0,I0=$0.length;K0<I0;K0++){let S0=Z.get($0[K0]);if(S0.__webglTexture===void 0)S0.__webglTexture=$.createTexture(),X.memory.textures++}if(T.samples>0&&O0(T)===!1){m.__webglMultisampledFramebuffer=$.createFramebuffer(),m.__webglColorRenderbuffer=[],Q.bindFramebuffer($.FRAMEBUFFER,m.__webglMultisampledFramebuffer);for(let K0=0;K0<$0.length;K0++){let I0=$0[K0];m.__webglColorRenderbuffer[K0]=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,m.__webglColorRenderbuffer[K0]);let S0=K.convert(I0.format,I0.colorSpace),H0=K.convert(I0.type),d=L(I0.internalFormat,S0,H0,I0.colorSpace,T.isXRRenderTarget===!0),J0=C0(T);$.renderbufferStorageMultisample($.RENDERBUFFER,J0,d,T.width,T.height),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+K0,$.RENDERBUFFER,m.__webglColorRenderbuffer[K0])}if($.bindRenderbuffer($.RENDERBUFFER,null),T.depthBuffer)m.__webglDepthRenderbuffer=$.createRenderbuffer(),N0(m.__webglDepthRenderbuffer,T,!0);Q.bindFramebuffer($.FRAMEBUFFER,null)}}if(i){Q.bindTexture($.TEXTURE_CUBE_MAP,r.__webglTexture),X0($.TEXTURE_CUBE_MAP,V);for(let K0=0;K0<6;K0++)if(V.mipmaps&&V.mipmaps.length>0)for(let I0=0;I0<V.mipmaps.length;I0++)F0(m.__webglFramebuffer[K0][I0],T,V,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+K0,I0);else F0(m.__webglFramebuffer[K0],T,V,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0);if(N(V))R($.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(B0){for(let K0=0,I0=$0.length;K0<I0;K0++){let S0=$0[K0],H0=Z.get(S0),d=$.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)d=T.isWebGL3DRenderTarget?$.TEXTURE_3D:$.TEXTURE_2D_ARRAY;if(Q.bindTexture(d,H0.__webglTexture),X0(d,S0),F0(m.__webglFramebuffer,T,S0,$.COLOR_ATTACHMENT0+K0,d,0),N(S0))R(d)}Q.unbindTexture()}else{let K0=$.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)K0=T.isWebGL3DRenderTarget?$.TEXTURE_3D:$.TEXTURE_2D_ARRAY;if(Q.bindTexture(K0,r.__webglTexture),X0(K0,V),V.mipmaps&&V.mipmaps.length>0)for(let I0=0;I0<V.mipmaps.length;I0++)F0(m.__webglFramebuffer[I0],T,V,$.COLOR_ATTACHMENT0,K0,I0);else F0(m.__webglFramebuffer,T,V,$.COLOR_ATTACHMENT0,K0,0);if(N(V))R(K0);Q.unbindTexture()}if(T.depthBuffer)r0(T)}function j0(T){let V=T.textures;for(let m=0,r=V.length;m<r;m++){let $0=V[m];if(N($0)){let i=_(T),B0=Z.get($0).__webglTexture;Q.bindTexture(i,B0),R(i),Q.unbindTexture()}}}let T0=[],V0=[];function a0(T){if(T.samples>0){if(O0(T)===!1){let{textures:V,width:m,height:r}=T,$0=$.COLOR_BUFFER_BIT,i=T.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,B0=Z.get(T),K0=V.length>1;if(K0)for(let S0=0;S0<V.length;S0++)Q.bindFramebuffer($.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.RENDERBUFFER,null),Q.bindFramebuffer($.FRAMEBUFFER,B0.__webglFramebuffer),$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.TEXTURE_2D,null,0);Q.bindFramebuffer($.READ_FRAMEBUFFER,B0.__webglMultisampledFramebuffer);let I0=T.texture.mipmaps;if(I0&&I0.length>0)Q.bindFramebuffer($.DRAW_FRAMEBUFFER,B0.__webglFramebuffer[0]);else Q.bindFramebuffer($.DRAW_FRAMEBUFFER,B0.__webglFramebuffer);for(let S0=0;S0<V.length;S0++){if(T.resolveDepthBuffer){if(T.depthBuffer)$0|=$.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)$0|=$.STENCIL_BUFFER_BIT}if(K0){$.framebufferRenderbuffer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.RENDERBUFFER,B0.__webglColorRenderbuffer[S0]);let H0=Z.get(V[S0]).__webglTexture;$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,H0,0)}if($.blitFramebuffer(0,0,m,r,0,0,m,r,$0,$.NEAREST),Y===!0){if(T0.length=0,V0.length=0,T0.push($.COLOR_ATTACHMENT0+S0),T.depthBuffer&&T.resolveDepthBuffer===!1)T0.push(i),V0.push(i),$.invalidateFramebuffer($.DRAW_FRAMEBUFFER,V0);$.invalidateFramebuffer($.READ_FRAMEBUFFER,T0)}}if(Q.bindFramebuffer($.READ_FRAMEBUFFER,null),Q.bindFramebuffer($.DRAW_FRAMEBUFFER,null),K0)for(let S0=0;S0<V.length;S0++){Q.bindFramebuffer($.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.RENDERBUFFER,B0.__webglColorRenderbuffer[S0]);let H0=Z.get(V[S0]).__webglTexture;Q.bindFramebuffer($.FRAMEBUFFER,B0.__webglFramebuffer),$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.TEXTURE_2D,H0,0)}Q.bindFramebuffer($.DRAW_FRAMEBUFFER,B0.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&Y){let V=T.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT;$.invalidateFramebuffer($.DRAW_FRAMEBUFFER,[V])}}}function C0(T){return Math.min(W.maxSamples,T.samples)}function O0(T){let V=Z.get(T);return T.samples>0&&J.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function J1(T){let V=X.render.frame;if(G.get(T)!==V)G.set(T,V),T.update()}function q1(T,V){let{colorSpace:m,format:r,type:$0}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return V;if(m!==g1&&m!==v7)if(o0.getTransfer(m)===Y1){if(r!==I8||$0!==X7)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",m);return V}function d0(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)U.width=T.naturalWidth||T.width,U.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)U.width=T.displayWidth,U.height=T.displayHeight;else U.width=T.width,U.height=T.height;return U}this.allocateTextureUnit=A,this.resetTextureUnits=w,this.setTexture2D=h,this.setTexture2DArray=x,this.setTexture3D=p,this.setTextureCube=y,this.rebindTextures=j,this.setupRenderTarget=l0,this.updateRenderTargetMipmap=j0,this.updateMultisampleRenderTarget=a0,this.setupDepthRenderbuffer=r0,this.setupFrameBufferTexture=F0,this.useMultisampledRTT=O0}function UM($,J){function Q(Z,W=v7){let K,X=o0.getTransfer(W);if(Z===X7)return $.UNSIGNED_BYTE;if(Z===OQ)return $.UNSIGNED_SHORT_4_4_4_4;if(Z===LQ)return $.UNSIGNED_SHORT_5_5_5_1;if(Z===oW)return $.UNSIGNED_INT_5_9_9_9_REV;if(Z===iW)return $.UNSIGNED_INT_10F_11F_11F_REV;if(Z===nW)return $.BYTE;if(Z===sW)return $.SHORT;if(Z===W9)return $.UNSIGNED_SHORT;if(Z===FQ)return $.INT;if(Z===L6)return $.UNSIGNED_INT;if(Z===H7)return $.FLOAT;if(Z===K9)return $.HALF_FLOAT;if(Z===aW)return $.ALPHA;if(Z===rW)return $.RGB;if(Z===I8)return $.RGBA;if(Z===T$)return $.DEPTH_COMPONENT;if(Z===X9)return $.DEPTH_STENCIL;if(Z===tW)return $.RED;if(Z===DQ)return $.RED_INTEGER;if(Z===eW)return $.RG;if(Z===_Q)return $.RG_INTEGER;if(Z===VQ)return $.RGBA_INTEGER;if(Z===w$||Z===S$||Z===j$||Z===f$)if(X===Y1)if(K=J.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===w$)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===S$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===j$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===f$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=J.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===w$)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===S$)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===j$)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===f$)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===BQ||Z===zQ||Z===kQ||Z===CQ)if(K=J.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===BQ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===zQ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===kQ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===CQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===IQ||Z===PQ||Z===AQ)if(K=J.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===IQ||Z===PQ)return X===Y1?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===AQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===TQ||Z===wQ||Z===SQ||Z===jQ||Z===fQ||Z===vQ||Z===yQ||Z===hQ||Z===bQ||Z===xQ||Z===gQ||Z===pQ||Z===lQ||Z===uQ)if(K=J.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===TQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===wQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===SQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===jQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===fQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===vQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===yQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===hQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===bQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===xQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===gQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===pQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===lQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===uQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===mQ||Z===dQ||Z===cQ)if(K=J.get("EXT_texture_compression_bptc"),K!==null){if(Z===mQ)return X===Y1?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===dQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===cQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===nQ||Z===sQ||Z===oQ||Z===iQ)if(K=J.get("EXT_texture_compression_rgtc"),K!==null){if(Z===nQ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===sQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===oQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===iQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===D6)return $.UNSIGNED_INT_24_8;return $[Z]!==void 0?$[Z]:null}return{convert:Q}}var GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $X{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init($,J){if(this.texture===null){let Q=new s$($.texture);if($.depthNear!==J.depthNear||$.depthFar!==J.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=Q}}getMesh($){if(this.texture!==null){if(this.mesh===null){let J=$.cameras[0].viewport,Q=new d1({vertexShader:GM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:J.z},depthHeight:{value:J.w}}});this.mesh=new T1(new F9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JX extends Y7{constructor($,J){super();let Q=this,Z=null,W=1,K=null,X="local-floor",H=1,Y=null,U=null,G=null,E=null,q=null,M=null,O=typeof XRWebGLBinding<"u",F=new $X,N={},R=J.getContextAttributes(),_=null,L=null,k=[],P=[],C=new u0,S=null,b=new w1;b.viewport=new i0;let B=new w1;B.viewport=new i0;let D=[b,B],I=new LZ,w=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(c){let W0=k[c];if(W0===void 0)W0=new U9,k[c]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(c){let W0=k[c];if(W0===void 0)W0=new U9,k[c]=W0;return W0.getGripSpace()},this.getHand=function(c){let W0=k[c];if(W0===void 0)W0=new U9,k[c]=W0;return W0.getHandSpace()};function f(c){let W0=P.indexOf(c.inputSource);if(W0===-1)return;let e=k[W0];if(e!==void 0)e.update(c.inputSource,c.frame,Y||K),e.dispatchEvent({type:c.type,data:c.inputSource})}function h(){Z.removeEventListener("select",f),Z.removeEventListener("selectstart",f),Z.removeEventListener("selectend",f),Z.removeEventListener("squeeze",f),Z.removeEventListener("squeezestart",f),Z.removeEventListener("squeezeend",f),Z.removeEventListener("end",h),Z.removeEventListener("inputsourceschange",x);for(let c=0;c<k.length;c++){let W0=P[c];if(W0===null)continue;P[c]=null,k[c].disconnect(W0)}w=null,A=null,F.reset();for(let c in N)delete N[c];$.setRenderTarget(_),q=null,E=null,G=null,Z=null,L=null,q0.stop(),Q.isPresenting=!1,$.setPixelRatio(S),$.setSize(C.width,C.height,!1),Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(c){if(W=c,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(c){if(X=c,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||K},this.setReferenceSpace=function(c){Y=c},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){if(G===null&&O)G=new XRWebGLBinding(Z,J);return G},this.getFrame=function(){return M},this.getSession=function(){return Z},this.setSession=async function(c){if(Z=c,Z!==null){if(_=$.getRenderTarget(),Z.addEventListener("select",f),Z.addEventListener("selectstart",f),Z.addEventListener("selectend",f),Z.addEventListener("squeeze",f),Z.addEventListener("squeezestart",f),Z.addEventListener("squeezeend",f),Z.addEventListener("end",h),Z.addEventListener("inputsourceschange",x),R.xrCompatible!==!0)await J.makeXRCompatible();if(S=$.getPixelRatio(),$.getSize(C),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let e={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,J,e),Z.updateRenderState({baseLayer:q}),$.setPixelRatio(1),$.setSize(q.framebufferWidth,q.framebufferHeight,!1),L=new D8(q.framebufferWidth,q.framebufferHeight,{format:I8,type:X7,colorSpace:$.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let e=null,F0=null,N0=null;if(R.depth)N0=R.stencil?J.DEPTH24_STENCIL8:J.DEPTH_COMPONENT24,e=R.stencil?X9:T$,F0=R.stencil?D6:L6;let _0={colorFormat:J.RGBA8,depthFormat:N0,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(_0),Z.updateRenderState({layers:[E]}),$.setPixelRatio(1),$.setSize(E.textureWidth,E.textureHeight,!1),L=new D8(E.textureWidth,E.textureHeight,{format:I8,type:X7,depthTexture:new n$(E.textureWidth,E.textureHeight,F0,void 0,void 0,void 0,void 0,void 0,void 0,e),stencilBuffer:R.stencil,colorSpace:$.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(H),Y=null,K=await Z.requestReferenceSpace(X),q0.setContext(Z),q0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return F.getDepthTexture()};function x(c){for(let W0=0;W0<c.removed.length;W0++){let e=c.removed[W0],F0=P.indexOf(e);if(F0>=0)P[F0]=null,k[F0].disconnect(e)}for(let W0=0;W0<c.added.length;W0++){let e=c.added[W0],F0=P.indexOf(e);if(F0===-1){for(let _0=0;_0<k.length;_0++)if(_0>=P.length){P.push(e),F0=_0;break}else if(P[_0]===null){P[_0]=e,F0=_0;break}if(F0===-1)break}let N0=k[F0];if(N0)N0.connect(e)}}let p=new g,y=new g;function o(c,W0,e){p.setFromMatrixPosition(W0.matrixWorld),y.setFromMatrixPosition(e.matrixWorld);let F0=p.distanceTo(y),N0=W0.projectionMatrix.elements,_0=e.projectionMatrix.elements,r0=N0[14]/(N0[10]-1),j=N0[14]/(N0[10]+1),l0=(N0[9]+1)/N0[5],j0=(N0[9]-1)/N0[5],T0=(N0[8]-1)/N0[0],V0=(_0[8]+1)/_0[0],a0=r0*T0,C0=r0*V0,O0=F0/(-T0+V0),J1=O0*-T0;if(W0.matrixWorld.decompose(c.position,c.quaternion,c.scale),c.translateX(J1),c.translateZ(O0),c.matrixWorld.compose(c.position,c.quaternion,c.scale),c.matrixWorldInverse.copy(c.matrixWorld).invert(),N0[10]===-1)c.projectionMatrix.copy(W0.projectionMatrix),c.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let q1=r0+O0,d0=j+O0,T=a0-J1,V=C0+(F0-J1),m=l0*j/d0*q1,r=j0*j/d0*q1;c.projectionMatrix.makePerspective(T,V,m,r,q1,d0),c.projectionMatrixInverse.copy(c.projectionMatrix).invert()}}function a(c,W0){if(W0===null)c.matrixWorld.copy(c.matrix);else c.matrixWorld.multiplyMatrices(W0.matrixWorld,c.matrix);c.matrixWorldInverse.copy(c.matrixWorld).invert()}this.updateCamera=function(c){if(Z===null)return;let{near:W0,far:e}=c;if(F.texture!==null){if(F.depthNear>0)W0=F.depthNear;if(F.depthFar>0)e=F.depthFar}if(I.near=B.near=b.near=W0,I.far=B.far=b.far=e,w!==I.near||A!==I.far)Z.updateRenderState({depthNear:I.near,depthFar:I.far}),w=I.near,A=I.far;I.layers.mask=c.layers.mask|6,b.layers.mask=I.layers.mask&3,B.layers.mask=I.layers.mask&5;let F0=c.parent,N0=I.cameras;a(I,F0);for(let _0=0;_0<N0.length;_0++)a(N0[_0],F0);if(N0.length===2)o(I,b,B);else I.projectionMatrix.copy(b.projectionMatrix);Q0(c,I,F0)};function Q0(c,W0,e){if(e===null)c.matrix.copy(W0.matrixWorld);else c.matrix.copy(e.matrixWorld),c.matrix.invert(),c.matrix.multiply(W0.matrixWorld);if(c.matrix.decompose(c.position,c.quaternion,c.scale),c.updateMatrixWorld(!0),c.projectionMatrix.copy(W0.projectionMatrix),c.projectionMatrixInverse.copy(W0.projectionMatrixInverse),c.isPerspectiveCamera)c.fov=w7*2*Math.atan(1/c.projectionMatrix.elements[5]),c.zoom=1}this.getCamera=function(){return I},this.getFoveation=function(){if(E===null&&q===null)return;return H},this.setFoveation=function(c){if(H=c,E!==null)E.fixedFoveation=c;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=c},this.hasDepthSensing=function(){return F.texture!==null},this.getDepthSensingMesh=function(){return F.getMesh(I)},this.getCameraTexture=function(c){return N[c]};let X0=null;function L0(c,W0){if(U=W0.getViewerPose(Y||K),M=W0,U!==null){let e=U.views;if(q!==null)$.setRenderTargetFramebuffer(L,q.framebuffer),$.setRenderTarget(L);let F0=!1;if(e.length!==I.cameras.length)I.cameras.length=0,F0=!0;for(let j=0;j<e.length;j++){let l0=e[j],j0=null;if(q!==null)j0=q.getViewport(l0);else{let V0=G.getViewSubImage(E,l0);if(j0=V0.viewport,j===0)$.setRenderTargetTextures(L,V0.colorTexture,V0.depthStencilTexture),$.setRenderTarget(L)}let T0=D[j];if(T0===void 0)T0=new w1,T0.layers.enable(j),T0.viewport=new i0,D[j]=T0;if(T0.matrix.fromArray(l0.transform.matrix),T0.matrix.decompose(T0.position,T0.quaternion,T0.scale),T0.projectionMatrix.fromArray(l0.projectionMatrix),T0.projectionMatrixInverse.copy(T0.projectionMatrix).invert(),T0.viewport.set(j0.x,j0.y,j0.width,j0.height),j===0)I.matrix.copy(T0.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);if(F0===!0)I.cameras.push(T0)}let N0=Z.enabledFeatures;if(N0&&N0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){G=Q.getBinding();let j=G.getDepthInformation(e[0]);if(j&&j.isValid&&j.texture)F.init(j,Z.renderState)}if(N0&&N0.includes("camera-access")&&O){$.state.unbindTexture(),G=Q.getBinding();for(let j=0;j<e.length;j++){let l0=e[j].camera;if(l0){let j0=N[l0];if(!j0)j0=new s$,N[l0]=j0;let T0=G.getCameraImage(l0);j0.sourceTexture=T0}}}}for(let e=0;e<k.length;e++){let F0=P[e],N0=k[e];if(F0!==null&&N0!==void 0)N0.update(F0,W0,Y||K)}if(X0)X0(c,W0);if(W0.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:W0});M=null}let q0=new dK;q0.setAnimationLoop(L0),this.setAnimationLoop=function(c){X0=c},this.dispose=function(){}}}var b7=new O8,qM=new g0;function NM($,J){function Q(N,R){if(N.matrixAutoUpdate===!0)N.updateMatrix();R.value.copy(N.matrix)}function Z(N,R){if(R.color.getRGB(N.fogColor.value,HZ($)),R.isFog)N.fogNear.value=R.near,N.fogFar.value=R.far;else if(R.isFogExp2)N.fogDensity.value=R.density}function W(N,R,_,L,k){if(R.isMeshBasicMaterial)K(N,R);else if(R.isMeshLambertMaterial)K(N,R);else if(R.isMeshToonMaterial)K(N,R),E(N,R);else if(R.isMeshPhongMaterial)K(N,R),G(N,R);else if(R.isMeshStandardMaterial){if(K(N,R),q(N,R),R.isMeshPhysicalMaterial)M(N,R,k)}else if(R.isMeshMatcapMaterial)K(N,R),O(N,R);else if(R.isMeshDepthMaterial)K(N,R);else if(R.isMeshDistanceMaterial)K(N,R),F(N,R);else if(R.isMeshNormalMaterial)K(N,R);else if(R.isLineBasicMaterial){if(X(N,R),R.isLineDashedMaterial)H(N,R)}else if(R.isPointsMaterial)Y(N,R,_,L);else if(R.isSpriteMaterial)U(N,R);else if(R.isShadowMaterial)N.color.value.copy(R.color),N.opacity.value=R.opacity;else if(R.isShaderMaterial)R.uniformsNeedUpdate=!1}function K(N,R){if(N.opacity.value=R.opacity,R.color)N.diffuse.value.copy(R.color);if(R.emissive)N.emissive.value.copy(R.emissive).multiplyScalar(R.emissiveIntensity);if(R.map)N.map.value=R.map,Q(R.map,N.mapTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.bumpMap){if(N.bumpMap.value=R.bumpMap,Q(R.bumpMap,N.bumpMapTransform),N.bumpScale.value=R.bumpScale,R.side===t1)N.bumpScale.value*=-1}if(R.normalMap){if(N.normalMap.value=R.normalMap,Q(R.normalMap,N.normalMapTransform),N.normalScale.value.copy(R.normalScale),R.side===t1)N.normalScale.value.negate()}if(R.displacementMap)N.displacementMap.value=R.displacementMap,Q(R.displacementMap,N.displacementMapTransform),N.displacementScale.value=R.displacementScale,N.displacementBias.value=R.displacementBias;if(R.emissiveMap)N.emissiveMap.value=R.emissiveMap,Q(R.emissiveMap,N.emissiveMapTransform);if(R.specularMap)N.specularMap.value=R.specularMap,Q(R.specularMap,N.specularMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest;let _=J.get(R),L=_.envMap,k=_.envMapRotation;if(L){if(N.envMap.value=L,b7.copy(k),b7.x*=-1,b7.y*=-1,b7.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)b7.y*=-1,b7.z*=-1;N.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(b7)),N.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=R.reflectivity,N.ior.value=R.ior,N.refractionRatio.value=R.refractionRatio}if(R.lightMap)N.lightMap.value=R.lightMap,N.lightMapIntensity.value=R.lightMapIntensity,Q(R.lightMap,N.lightMapTransform);if(R.aoMap)N.aoMap.value=R.aoMap,N.aoMapIntensity.value=R.aoMapIntensity,Q(R.aoMap,N.aoMapTransform)}function X(N,R){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,R.map)N.map.value=R.map,Q(R.map,N.mapTransform)}function H(N,R){N.dashSize.value=R.dashSize,N.totalSize.value=R.dashSize+R.gapSize,N.scale.value=R.scale}function Y(N,R,_,L){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,N.size.value=R.size*_,N.scale.value=L*0.5,R.map)N.map.value=R.map,Q(R.map,N.uvTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest}function U(N,R){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,N.rotation.value=R.rotation,R.map)N.map.value=R.map,Q(R.map,N.mapTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest}function G(N,R){N.specular.value.copy(R.specular),N.shininess.value=Math.max(R.shininess,0.0001)}function E(N,R){if(R.gradientMap)N.gradientMap.value=R.gradientMap}function q(N,R){if(N.metalness.value=R.metalness,R.metalnessMap)N.metalnessMap.value=R.metalnessMap,Q(R.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=R.roughness,R.roughnessMap)N.roughnessMap.value=R.roughnessMap,Q(R.roughnessMap,N.roughnessMapTransform);if(R.envMap)N.envMapIntensity.value=R.envMapIntensity}function M(N,R,_){if(N.ior.value=R.ior,R.sheen>0){if(N.sheenColor.value.copy(R.sheenColor).multiplyScalar(R.sheen),N.sheenRoughness.value=R.sheenRoughness,R.sheenColorMap)N.sheenColorMap.value=R.sheenColorMap,Q(R.sheenColorMap,N.sheenColorMapTransform);if(R.sheenRoughnessMap)N.sheenRoughnessMap.value=R.sheenRoughnessMap,Q(R.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(R.clearcoat>0){if(N.clearcoat.value=R.clearcoat,N.clearcoatRoughness.value=R.clearcoatRoughness,R.clearcoatMap)N.clearcoatMap.value=R.clearcoatMap,Q(R.clearcoatMap,N.clearcoatMapTransform);if(R.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=R.clearcoatRoughnessMap,Q(R.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(R.clearcoatNormalMap){if(N.clearcoatNormalMap.value=R.clearcoatNormalMap,Q(R.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(R.clearcoatNormalScale),R.side===t1)N.clearcoatNormalScale.value.negate()}}if(R.dispersion>0)N.dispersion.value=R.dispersion;if(R.iridescence>0){if(N.iridescence.value=R.iridescence,N.iridescenceIOR.value=R.iridescenceIOR,N.iridescenceThicknessMinimum.value=R.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=R.iridescenceThicknessRange[1],R.iridescenceMap)N.iridescenceMap.value=R.iridescenceMap,Q(R.iridescenceMap,N.iridescenceMapTransform);if(R.iridescenceThicknessMap)N.iridescenceThicknessMap.value=R.iridescenceThicknessMap,Q(R.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(R.transmission>0){if(N.transmission.value=R.transmission,N.transmissionSamplerMap.value=_.texture,N.transmissionSamplerSize.value.set(_.width,_.height),R.transmissionMap)N.transmissionMap.value=R.transmissionMap,Q(R.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=R.thickness,R.thicknessMap)N.thicknessMap.value=R.thicknessMap,Q(R.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=R.attenuationDistance,N.attenuationColor.value.copy(R.attenuationColor)}if(R.anisotropy>0){if(N.anisotropyVector.value.set(R.anisotropy*Math.cos(R.anisotropyRotation),R.anisotropy*Math.sin(R.anisotropyRotation)),R.anisotropyMap)N.anisotropyMap.value=R.anisotropyMap,Q(R.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=R.specularIntensity,N.specularColor.value.copy(R.specularColor),R.specularColorMap)N.specularColorMap.value=R.specularColorMap,Q(R.specularColorMap,N.specularColorMapTransform);if(R.specularIntensityMap)N.specularIntensityMap.value=R.specularIntensityMap,Q(R.specularIntensityMap,N.specularIntensityMapTransform)}function O(N,R){if(R.matcap)N.matcap.value=R.matcap}function F(N,R){let _=J.get(R).light;N.referencePosition.value.setFromMatrixPosition(_.matrixWorld),N.nearDistance.value=_.shadow.camera.near,N.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function MM($,J,Q,Z){let W={},K={},X=[],H=$.getParameter($.MAX_UNIFORM_BUFFER_BINDINGS);function Y(_,L){let k=L.program;Z.uniformBlockBinding(_,k)}function U(_,L){let k=W[_.id];if(k===void 0)O(_),k=G(_),W[_.id]=k,_.addEventListener("dispose",N);let P=L.program;Z.updateUBOMapping(_,P);let C=J.render.frame;if(K[_.id]!==C)q(_),K[_.id]=C}function G(_){let L=E();_.__bindingPointIndex=L;let k=$.createBuffer(),P=_.__size,C=_.usage;return $.bindBuffer($.UNIFORM_BUFFER,k),$.bufferData($.UNIFORM_BUFFER,P,C),$.bindBuffer($.UNIFORM_BUFFER,null),$.bindBufferBase($.UNIFORM_BUFFER,L,k),k}function E(){for(let _=0;_<H;_++)if(X.indexOf(_)===-1)return X.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(_){let L=W[_.id],k=_.uniforms,P=_.__cache;$.bindBuffer($.UNIFORM_BUFFER,L);for(let C=0,S=k.length;C<S;C++){let b=Array.isArray(k[C])?k[C]:[k[C]];for(let B=0,D=b.length;B<D;B++){let I=b[B];if(M(I,C,B,P)===!0){let w=I.__offset,A=Array.isArray(I.value)?I.value:[I.value],f=0;for(let h=0;h<A.length;h++){let x=A[h],p=F(x);if(typeof x==="number"||typeof x==="boolean")I.__data[0]=x,$.bufferSubData($.UNIFORM_BUFFER,w+f,I.__data);else if(x.isMatrix3)I.__data[0]=x.elements[0],I.__data[1]=x.elements[1],I.__data[2]=x.elements[2],I.__data[3]=0,I.__data[4]=x.elements[3],I.__data[5]=x.elements[4],I.__data[6]=x.elements[5],I.__data[7]=0,I.__data[8]=x.elements[6],I.__data[9]=x.elements[7],I.__data[10]=x.elements[8],I.__data[11]=0;else x.toArray(I.__data,f),f+=p.storage/Float32Array.BYTES_PER_ELEMENT}$.bufferSubData($.UNIFORM_BUFFER,w,I.__data)}}}$.bindBuffer($.UNIFORM_BUFFER,null)}function M(_,L,k,P){let C=_.value,S=L+"_"+k;if(P[S]===void 0){if(typeof C==="number"||typeof C==="boolean")P[S]=C;else P[S]=C.clone();return!0}else{let b=P[S];if(typeof C==="number"||typeof C==="boolean"){if(b!==C)return P[S]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function O(_){let L=_.uniforms,k=0,P=16;for(let S=0,b=L.length;S<b;S++){let B=Array.isArray(L[S])?L[S]:[L[S]];for(let D=0,I=B.length;D<I;D++){let w=B[D],A=Array.isArray(w.value)?w.value:[w.value];for(let f=0,h=A.length;f<h;f++){let x=A[f],p=F(x),y=k%P,o=y%p.boundary,a=y+o;if(k+=o,a!==0&&P-a<p.storage)k+=P-a;w.__data=new Float32Array(p.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=k,k+=p.storage}}}let C=k%P;if(C>0)k+=P-C;return _.__size=k,_.__cache={},this}function F(_){let L={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")L.boundary=4,L.storage=4;else if(_.isVector2)L.boundary=8,L.storage=8;else if(_.isVector3||_.isColor)L.boundary=16,L.storage=12;else if(_.isVector4)L.boundary=16,L.storage=16;else if(_.isMatrix3)L.boundary=48,L.storage=48;else if(_.isMatrix4)L.boundary=64,L.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return L}function N(_){let L=_.target;L.removeEventListener("dispose",N);let k=X.indexOf(L.__bindingPointIndex);X.splice(k,1),$.deleteBuffer(W[L.id]),delete W[L.id],delete K[L.id]}function R(){for(let _ in W)$.deleteBuffer(W[_]);X=[],W={},K={}}return{bind:Y,update:U,dispose:R}}class SZ{constructor($={}){let{canvas:J=GK(),context:Q=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:X=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:Y=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=$;this.isWebGLRenderer=!0;let q;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Q.getContextAttributes().alpha}else q=K;let M=new Uint32Array(4),O=new Int32Array(4),F=null,N=null,R=[],_=[];this.domElement=J,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=m8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,k=!1;this._outputColorSpace=P8;let P=0,C=0,S=null,b=-1,B=null,D=new i0,I=new i0,w=null,A=new y0(0),f=0,h=J.width,x=J.height,p=1,y=null,o=null,a=new i0(0,0,h,x),Q0=new i0(0,0,h,x),X0=!1,L0=new N9,q0=!1,c=!1,W0=new g0,e=new g,F0=new i0,N0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_0=!1;function r0(){return S===null?p:1}let j=Q;function l0(z,l){return J.getContext(z,l)}try{let z={alpha:!0,depth:Z,stencil:W,antialias:X,premultipliedAlpha:H,preserveDrawingBuffer:Y,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in J)J.setAttribute("data-engine",`three.js r${qW}`);if(J.addEventListener("webglcontextlost",M0,!1),J.addEventListener("webglcontextrestored",U0,!1),J.addEventListener("webglcontextcreationerror",z0,!1),j===null){if(j=l0("webgl2",z),j===null)if(l0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let j0,T0,V0,a0,C0,O0,J1,q1,d0,T,V,m,r,$0,i,B0,K0,I0,S0,H0,d,J0,E0,G0;function h0(){if(j0=new jq(j),j0.init(),J0=new UM(j,j0),T0=new Cq(j,j0,$,J0),V0=new HM(j,j0),T0.reversedDepthBuffer&&E)V0.buffers.depth.setReversed(!0);a0=new yq(j),C0=new oN,O0=new YM(j,j0,V0,C0,T0,J0,a0),J1=new Pq(L),q1=new Sq(L),d0=new lU(j),E0=new zq(j,d0),T=new fq(j,d0,a0,E0),V=new bq(j,T,d0,a0),S0=new hq(j,T0,O0),B0=new Iq(C0),m=new sN(L,J1,q1,j0,T0,E0,B0),r=new NM(L,C0),$0=new aN,i=new QM(j0),I0=new Bq(L,J1,q1,V0,V,q,H),K0=new KM(L,V,T0),G0=new MM(j,a0,T0,V0),H0=new kq(j,j0,a0),d=new vq(j,j0,a0),a0.programs=m.programs,L.capabilities=T0,L.extensions=j0,L.properties=C0,L.renderLists=$0,L.shadowMap=K0,L.state=V0,L.info=a0}h0();let v=new JX(L,j);this.xr=v,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let z=j0.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=j0.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return p},this.setPixelRatio=function(z){if(z===void 0)return;p=z,this.setSize(h,x,!1)},this.getSize=function(z){return z.set(h,x)},this.setSize=function(z,l,n=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(h=z,x=l,J.width=Math.floor(z*p),J.height=Math.floor(l*p),n===!0)J.style.width=z+"px",J.style.height=l+"px";this.setViewport(0,0,z,l)},this.getDrawingBufferSize=function(z){return z.set(h*p,x*p).floor()},this.setDrawingBufferSize=function(z,l,n){h=z,x=l,p=n,J.width=Math.floor(z*n),J.height=Math.floor(l*n),this.setViewport(0,0,z,l)},this.getCurrentViewport=function(z){return z.copy(D)},this.getViewport=function(z){return z.copy(a)},this.setViewport=function(z,l,n,s){if(z.isVector4)a.set(z.x,z.y,z.z,z.w);else a.set(z,l,n,s);V0.viewport(D.copy(a).multiplyScalar(p).round())},this.getScissor=function(z){return z.copy(Q0)},this.setScissor=function(z,l,n,s){if(z.isVector4)Q0.set(z.x,z.y,z.z,z.w);else Q0.set(z,l,n,s);V0.scissor(I.copy(Q0).multiplyScalar(p).round())},this.getScissorTest=function(){return X0},this.setScissorTest=function(z){V0.setScissorTest(X0=z)},this.setOpaqueSort=function(z){y=z},this.setTransparentSort=function(z){o=z},this.getClearColor=function(z){return z.copy(I0.getClearColor())},this.setClearColor=function(){I0.setClearColor(...arguments)},this.getClearAlpha=function(){return I0.getClearAlpha()},this.setClearAlpha=function(){I0.setClearAlpha(...arguments)},this.clear=function(z=!0,l=!0,n=!0){let s=0;if(z){let u=!1;if(S!==null){let Y0=S.texture.format;u=Y0===VQ||Y0===_Q||Y0===DQ}if(u){let Y0=S.texture.type,D0=Y0===X7||Y0===L6||Y0===W9||Y0===D6||Y0===OQ||Y0===LQ,P0=I0.getClearColor(),k0=I0.getClearAlpha(),v0=P0.r,b0=P0.g,w0=P0.b;if(D0)M[0]=v0,M[1]=b0,M[2]=w0,M[3]=k0,j.clearBufferuiv(j.COLOR,0,M);else O[0]=v0,O[1]=b0,O[2]=w0,O[3]=k0,j.clearBufferiv(j.COLOR,0,O)}else s|=j.COLOR_BUFFER_BIT}if(l)s|=j.DEPTH_BUFFER_BIT;if(n)s|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);j.clear(s)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){J.removeEventListener("webglcontextlost",M0,!1),J.removeEventListener("webglcontextrestored",U0,!1),J.removeEventListener("webglcontextcreationerror",z0,!1),I0.dispose(),$0.dispose(),i.dispose(),C0.dispose(),J1.dispose(),q1.dispose(),V.dispose(),E0.dispose(),G0.dispose(),m.dispose(),v.dispose(),v.removeEventListener("sessionstart",B8),v.removeEventListener("sessionend",z8),k7.stop()};function M0(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function U0(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let z=a0.autoReset,l=K0.enabled,n=K0.autoUpdate,s=K0.needsUpdate,u=K0.type;h0(),a0.autoReset=z,K0.enabled=l,K0.autoUpdate=n,K0.needsUpdate=s,K0.type=u}function z0(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Z0(z){let l=z.target;l.removeEventListener("dispose",Z0),t(l)}function t(z){A0(z),C0.remove(z)}function A0(z){let l=C0.get(z).programs;if(l!==void 0){if(l.forEach(function(n){m.releaseProgram(n)}),z.isShaderMaterial)m.releaseShaderCache(z)}}this.renderBufferDirect=function(z,l,n,s,u,Y0){if(l===null)l=N0;let D0=u.isMesh&&u.matrixWorld.determinant()<0,P0=hY(z,l,n,s,u);V0.setMaterial(s,D0);let k0=n.index,v0=1;if(s.wireframe===!0){if(k0=T.getWireframeAttribute(n),k0===void 0)return;v0=2}let b0=n.drawRange,w0=n.attributes.position,s0=b0.start*v0,Z1=(b0.start+b0.count)*v0;if(Y0!==null)s0=Math.max(s0,Y0.start*v0),Z1=Math.min(Z1,(Y0.start+Y0.count)*v0);if(k0!==null)s0=Math.max(s0,0),Z1=Math.min(Z1,k0.count);else if(w0!==void 0&&w0!==null)s0=Math.max(s0,0),Z1=Math.min(Z1,w0.count);let L1=Z1-s0;if(L1<0||L1===1/0)return;E0.setup(u,s,P0,n,k0);let G1,K1=H0;if(k0!==null)G1=d0.get(k0),K1=d,K1.setIndex(G1);if(u.isMesh)if(s.wireframe===!0)V0.setLineWidth(s.wireframeLinewidth*r0()),K1.setMode(j.LINES);else K1.setMode(j.TRIANGLES);else if(u.isLine){let f0=s.linewidth;if(f0===void 0)f0=1;if(V0.setLineWidth(f0*r0()),u.isLineSegments)K1.setMode(j.LINES);else if(u.isLineLoop)K1.setMode(j.LINE_LOOP);else K1.setMode(j.LINE_STRIP)}else if(u.isPoints)K1.setMode(j.POINTS);else if(u.isSprite)K1.setMode(j.TRIANGLES);if(u.isBatchedMesh)if(u._multiDrawInstances!==null)N6("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),K1.renderMultiDrawInstances(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount,u._multiDrawInstances);else if(!j0.get("WEBGL_multi_draw")){let{_multiDrawStarts:f0,_multiDrawCounts:N1,_multiDrawCount:t0}=u,o1=k0?d0.get(k0).bytesPerElement:1,i7=C0.get(s).currentProgram.getUniforms();for(let i1=0;i1<t0;i1++)i7.setValue(j,"_gl_DrawID",i1),K1.render(f0[i1]/o1,N1[i1])}else K1.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else if(u.isInstancedMesh)K1.renderInstances(s0,L1,u.count);else if(n.isInstancedBufferGeometry){let f0=n._maxInstanceCount!==void 0?n._maxInstanceCount:1/0,N1=Math.min(n.instanceCount,f0);K1.renderInstances(s0,L1,N1)}else K1.render(s0,L1)};function x0(z,l,n){if(z.transparent===!0&&z.side===U8&&z.forceSinglePass===!1)z.side=t1,z.needsUpdate=!0,m9(z,l,n),z.side=W7,z.needsUpdate=!0,m9(z,l,n),z.side=U8;else m9(z,l,n)}this.compile=function(z,l,n=null){if(n===null)n=z;if(N=i.get(n),N.init(l),_.push(N),n.traverseVisible(function(u){if(u.isLight&&u.layers.test(l.layers)){if(N.pushLight(u),u.castShadow)N.pushShadow(u)}}),z!==n)z.traverseVisible(function(u){if(u.isLight&&u.layers.test(l.layers)){if(N.pushLight(u),u.castShadow)N.pushShadow(u)}});N.setupLights();let s=new Set;return z.traverse(function(u){if(!(u.isMesh||u.isPoints||u.isLine||u.isSprite))return;let Y0=u.material;if(Y0)if(Array.isArray(Y0))for(let D0=0;D0<Y0.length;D0++){let P0=Y0[D0];x0(P0,n,u),s.add(P0)}else x0(Y0,n,u),s.add(Y0)}),N=_.pop(),s},this.compileAsync=function(z,l,n=null){let s=this.compile(z,l,n);return new Promise((u)=>{function Y0(){if(s.forEach(function(D0){if(C0.get(D0).currentProgram.isReady())s.delete(D0)}),s.size===0){u(z);return}setTimeout(Y0,10)}if(j0.get("KHR_parallel_shader_compile")!==null)Y0();else setTimeout(Y0,10)})};let W1=null;function Q1(z){if(W1)W1(z)}function B8(){k7.stop()}function z8(){k7.start()}let k7=new dK;if(k7.setAnimationLoop(Q1),typeof self<"u")k7.setContext(self);this.setAnimationLoop=function(z){W1=z,v.setAnimationLoop(z),z===null?k7.stop():k7.start()},v.addEventListener("sessionstart",B8),v.addEventListener("sessionend",z8),this.render=function(z,l){if(l!==void 0&&l.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(l.parent===null&&l.matrixWorldAutoUpdate===!0)l.updateMatrixWorld();if(v.enabled===!0&&v.isPresenting===!0){if(v.cameraAutoUpdate===!0)v.updateCamera(l);l=v.getCamera()}if(z.isScene===!0)z.onBeforeRender(L,z,l,S);if(N=i.get(z,_.length),N.init(l),_.push(N),W0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),L0.setFromProjectionMatrix(W0,JZ,l.reversedDepth),c=this.localClippingEnabled,q0=B0.init(this.clippingPlanes,c),F=$0.get(z,R.length),F.init(),R.push(F),v.enabled===!0&&v.isPresenting===!0){let Y0=L.xr.getDepthSensingMesh();if(Y0!==null)yJ(Y0,l,-1/0,L.sortObjects)}if(yJ(z,l,0,L.sortObjects),F.finish(),L.sortObjects===!0)F.sort(y,o);if(_0=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,_0)I0.addToRenderList(F,z);if(this.info.render.frame++,q0===!0)B0.beginShadows();let n=N.state.shadowsArray;if(K0.render(n,z,l),q0===!0)B0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:s,transmissive:u}=F;if(N.setupLights(),l.isArrayCamera){let Y0=l.cameras;if(u.length>0)for(let D0=0,P0=Y0.length;D0<P0;D0++){let k0=Y0[D0];z5(s,u,z,k0)}if(_0)I0.render(z);for(let D0=0,P0=Y0.length;D0<P0;D0++){let k0=Y0[D0];B5(F,z,k0,k0.viewport)}}else{if(u.length>0)z5(s,u,z,l);if(_0)I0.render(z);B5(F,z,l)}if(S!==null&&C===0)O0.updateMultisampleRenderTarget(S),O0.updateRenderTargetMipmap(S);if(z.isScene===!0)z.onAfterRender(L,z,l);if(E0.resetDefaultState(),b=-1,B=null,_.pop(),_.length>0){if(N=_[_.length-1],q0===!0)B0.setGlobalState(L.clippingPlanes,N.state.camera)}else N=null;if(R.pop(),R.length>0)F=R[R.length-1];else F=null};function yJ(z,l,n,s){if(z.visible===!1)return;if(z.layers.test(l.layers)){if(z.isGroup)n=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(l)}else if(z.isLight){if(N.pushLight(z),z.castShadow)N.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||L0.intersectsSprite(z)){if(s)F0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(W0);let D0=V.update(z),P0=z.material;if(P0.visible)F.push(z,D0,P0,n,F0.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||L0.intersectsObject(z)){let D0=V.update(z),P0=z.material;if(s){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();F0.copy(z.boundingSphere.center)}else{if(D0.boundingSphere===null)D0.computeBoundingSphere();F0.copy(D0.boundingSphere.center)}F0.applyMatrix4(z.matrixWorld).applyMatrix4(W0)}if(Array.isArray(P0)){let k0=D0.groups;for(let v0=0,b0=k0.length;v0<b0;v0++){let w0=k0[v0],s0=P0[w0.materialIndex];if(s0&&s0.visible)F.push(z,D0,s0,n,F0.z,w0)}}else if(P0.visible)F.push(z,D0,P0,n,F0.z,null)}}}let Y0=z.children;for(let D0=0,P0=Y0.length;D0<P0;D0++)yJ(Y0[D0],l,n,s)}function B5(z,l,n,s){let{opaque:u,transmissive:Y0,transparent:D0}=z;if(N.setupLightsView(n),q0===!0)B0.setGlobalState(L.clippingPlanes,n);if(s)V0.viewport(D.copy(s));if(u.length>0)u9(u,l,n);if(Y0.length>0)u9(Y0,l,n);if(D0.length>0)u9(D0,l,n);V0.buffers.depth.setTest(!0),V0.buffers.depth.setMask(!0),V0.buffers.color.setMask(!0),V0.setPolygonOffset(!1)}function z5(z,l,n,s){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[s.id]===void 0)N.state.transmissionRenderTarget[s.id]=new D8(1,1,{generateMipmaps:!0,type:j0.has("EXT_color_buffer_half_float")||j0.has("EXT_color_buffer_float")?K9:X7,minFilter:c8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:o0.workingColorSpace});let Y0=N.state.transmissionRenderTarget[s.id],D0=s.viewport||D;Y0.setSize(D0.z*L.transmissionResolutionScale,D0.w*L.transmissionResolutionScale);let P0=L.getRenderTarget(),k0=L.getActiveCubeFace(),v0=L.getActiveMipmapLevel();if(L.setRenderTarget(Y0),L.getClearColor(A),f=L.getClearAlpha(),f<1)L.setClearColor(16777215,0.5);if(L.clear(),_0)I0.render(n);let b0=L.toneMapping;L.toneMapping=m8;let w0=s.viewport;if(s.viewport!==void 0)s.viewport=void 0;if(N.setupLightsView(s),q0===!0)B0.setGlobalState(L.clippingPlanes,s);if(u9(z,n,s),O0.updateMultisampleRenderTarget(Y0),O0.updateRenderTargetMipmap(Y0),j0.has("WEBGL_multisampled_render_to_texture")===!1){let s0=!1;for(let Z1=0,L1=l.length;Z1<L1;Z1++){let G1=l[Z1],K1=G1.object,f0=G1.geometry,N1=G1.material,t0=G1.group;if(N1.side===U8&&K1.layers.test(s.layers)){let o1=N1.side;N1.side=t1,N1.needsUpdate=!0,k5(K1,n,s,f0,N1,t0),N1.side=o1,N1.needsUpdate=!0,s0=!0}}if(s0===!0)O0.updateMultisampleRenderTarget(Y0),O0.updateRenderTargetMipmap(Y0)}if(L.setRenderTarget(P0,k0,v0),L.setClearColor(A,f),w0!==void 0)s.viewport=w0;L.toneMapping=b0}function u9(z,l,n){let s=l.isScene===!0?l.overrideMaterial:null;for(let u=0,Y0=z.length;u<Y0;u++){let D0=z[u],P0=D0.object,k0=D0.geometry,v0=D0.group,b0=D0.material;if(b0.allowOverride===!0&&s!==null)b0=s;if(P0.layers.test(n.layers))k5(P0,l,n,k0,b0,v0)}}function k5(z,l,n,s,u,Y0){if(z.onBeforeRender(L,l,n,s,u,Y0),z.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),u.onBeforeRender(L,l,n,s,z,Y0),u.transparent===!0&&u.side===U8&&u.forceSinglePass===!1)u.side=t1,u.needsUpdate=!0,L.renderBufferDirect(n,l,s,u,z,Y0),u.side=W7,u.needsUpdate=!0,L.renderBufferDirect(n,l,s,u,z,Y0),u.side=U8;else L.renderBufferDirect(n,l,s,u,z,Y0);z.onAfterRender(L,l,n,s,u,Y0)}function m9(z,l,n){if(l.isScene!==!0)l=N0;let s=C0.get(z),u=N.state.lights,Y0=N.state.shadowsArray,D0=u.state.version,P0=m.getParameters(z,u.state,Y0,l,n),k0=m.getProgramCacheKey(P0),v0=s.programs;if(s.environment=z.isMeshStandardMaterial?l.environment:null,s.fog=l.fog,s.envMap=(z.isMeshStandardMaterial?q1:J1).get(z.envMap||s.environment),s.envMapRotation=s.environment!==null&&z.envMap===null?l.environmentRotation:z.envMapRotation,v0===void 0)z.addEventListener("dispose",Z0),v0=new Map,s.programs=v0;let b0=v0.get(k0);if(b0!==void 0){if(s.currentProgram===b0&&s.lightsStateVersion===D0)return I5(z,P0),b0}else P0.uniforms=m.getUniforms(z),z.onBeforeCompile(P0,L),b0=m.acquireProgram(P0,k0),v0.set(k0,b0),s.uniforms=P0.uniforms;let w0=s.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)w0.clippingPlanes=B0.uniform;if(I5(z,P0),s.needsLights=xY(z),s.lightsStateVersion=D0,s.needsLights)w0.ambientLightColor.value=u.state.ambient,w0.lightProbe.value=u.state.probe,w0.directionalLights.value=u.state.directional,w0.directionalLightShadows.value=u.state.directionalShadow,w0.spotLights.value=u.state.spot,w0.spotLightShadows.value=u.state.spotShadow,w0.rectAreaLights.value=u.state.rectArea,w0.ltc_1.value=u.state.rectAreaLTC1,w0.ltc_2.value=u.state.rectAreaLTC2,w0.pointLights.value=u.state.point,w0.pointLightShadows.value=u.state.pointShadow,w0.hemisphereLights.value=u.state.hemi,w0.directionalShadowMap.value=u.state.directionalShadowMap,w0.directionalShadowMatrix.value=u.state.directionalShadowMatrix,w0.spotShadowMap.value=u.state.spotShadowMap,w0.spotLightMatrix.value=u.state.spotLightMatrix,w0.spotLightMap.value=u.state.spotLightMap,w0.pointShadowMap.value=u.state.pointShadowMap,w0.pointShadowMatrix.value=u.state.pointShadowMatrix;return s.currentProgram=b0,s.uniformsList=null,b0}function C5(z){if(z.uniformsList===null){let l=z.currentProgram.getUniforms();z.uniformsList=_9.seqWithValue(l.seq,z.uniforms)}return z.uniformsList}function I5(z,l){let n=C0.get(z);n.outputColorSpace=l.outputColorSpace,n.batching=l.batching,n.batchingColor=l.batchingColor,n.instancing=l.instancing,n.instancingColor=l.instancingColor,n.instancingMorph=l.instancingMorph,n.skinning=l.skinning,n.morphTargets=l.morphTargets,n.morphNormals=l.morphNormals,n.morphColors=l.morphColors,n.morphTargetsCount=l.morphTargetsCount,n.numClippingPlanes=l.numClippingPlanes,n.numIntersection=l.numClipIntersection,n.vertexAlphas=l.vertexAlphas,n.vertexTangents=l.vertexTangents,n.toneMapping=l.toneMapping}function hY(z,l,n,s,u){if(l.isScene!==!0)l=N0;O0.resetTextureUnits();let Y0=l.fog,D0=s.isMeshStandardMaterial?l.environment:null,P0=S===null?L.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:g1,k0=(s.isMeshStandardMaterial?q1:J1).get(s.envMap||D0),v0=s.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,b0=!!n.attributes.tangent&&(!!s.normalMap||s.anisotropy>0),w0=!!n.morphAttributes.position,s0=!!n.morphAttributes.normal,Z1=!!n.morphAttributes.color,L1=m8;if(s.toneMapped){if(S===null||S.isXRRenderTarget===!0)L1=L.toneMapping}let G1=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,K1=G1!==void 0?G1.length:0,f0=C0.get(s),N1=N.state.lights;if(q0===!0){if(c===!0||z!==B){let b1=z===B&&s.id===b;B0.setState(s,z,b1)}}let t0=!1;if(s.version===f0.__version){if(f0.needsLights&&f0.lightsStateVersion!==N1.state.version)t0=!0;else if(f0.outputColorSpace!==P0)t0=!0;else if(u.isBatchedMesh&&f0.batching===!1)t0=!0;else if(!u.isBatchedMesh&&f0.batching===!0)t0=!0;else if(u.isBatchedMesh&&f0.batchingColor===!0&&u.colorTexture===null)t0=!0;else if(u.isBatchedMesh&&f0.batchingColor===!1&&u.colorTexture!==null)t0=!0;else if(u.isInstancedMesh&&f0.instancing===!1)t0=!0;else if(!u.isInstancedMesh&&f0.instancing===!0)t0=!0;else if(u.isSkinnedMesh&&f0.skinning===!1)t0=!0;else if(!u.isSkinnedMesh&&f0.skinning===!0)t0=!0;else if(u.isInstancedMesh&&f0.instancingColor===!0&&u.instanceColor===null)t0=!0;else if(u.isInstancedMesh&&f0.instancingColor===!1&&u.instanceColor!==null)t0=!0;else if(u.isInstancedMesh&&f0.instancingMorph===!0&&u.morphTexture===null)t0=!0;else if(u.isInstancedMesh&&f0.instancingMorph===!1&&u.morphTexture!==null)t0=!0;else if(f0.envMap!==k0)t0=!0;else if(s.fog===!0&&f0.fog!==Y0)t0=!0;else if(f0.numClippingPlanes!==void 0&&(f0.numClippingPlanes!==B0.numPlanes||f0.numIntersection!==B0.numIntersection))t0=!0;else if(f0.vertexAlphas!==v0)t0=!0;else if(f0.vertexTangents!==b0)t0=!0;else if(f0.morphTargets!==w0)t0=!0;else if(f0.morphNormals!==s0)t0=!0;else if(f0.morphColors!==Z1)t0=!0;else if(f0.toneMapping!==L1)t0=!0;else if(f0.morphTargetsCount!==K1)t0=!0}else t0=!0,f0.__version=s.version;let o1=f0.currentProgram;if(t0===!0)o1=m9(s,l,u);let i7=!1,i1=!1,d6=!1,M1=o1.getUniforms(),Z8=f0.uniforms;if(V0.useProgram(o1.program))i7=!0,i1=!0,d6=!0;if(s.id!==b)b=s.id,i1=!0;if(i7||B!==z){if(V0.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();M1.setValue(j,"projectionMatrix",z.projectionMatrix),M1.setValue(j,"viewMatrix",z.matrixWorldInverse);let l1=M1.map.cameraPosition;if(l1!==void 0)l1.setValue(j,e.setFromMatrixPosition(z.matrixWorld));if(T0.logarithmicDepthBuffer)M1.setValue(j,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial)M1.setValue(j,"isOrthographic",z.isOrthographicCamera===!0);if(B!==z)B=z,i1=!0,d6=!0}if(u.isSkinnedMesh){M1.setOptional(j,u,"bindMatrix"),M1.setOptional(j,u,"bindMatrixInverse");let b1=u.skeleton;if(b1){if(b1.boneTexture===null)b1.computeBoneTexture();M1.setValue(j,"boneTexture",b1.boneTexture,O0)}}if(u.isBatchedMesh){if(M1.setOptional(j,u,"batchingTexture"),M1.setValue(j,"batchingTexture",u._matricesTexture,O0),M1.setOptional(j,u,"batchingIdTexture"),M1.setValue(j,"batchingIdTexture",u._indirectTexture,O0),M1.setOptional(j,u,"batchingColorTexture"),u._colorsTexture!==null)M1.setValue(j,"batchingColorTexture",u._colorsTexture,O0)}let W8=n.morphAttributes;if(W8.position!==void 0||W8.normal!==void 0||W8.color!==void 0)S0.update(u,n,o1);if(i1||f0.receiveShadow!==u.receiveShadow)f0.receiveShadow=u.receiveShadow,M1.setValue(j,"receiveShadow",u.receiveShadow);if(s.isMeshGouraudMaterial&&s.envMap!==null)Z8.envMap.value=k0,Z8.flipEnvMap.value=k0.isCubeTexture&&k0.isRenderTargetTexture===!1?-1:1;if(s.isMeshStandardMaterial&&s.envMap===null&&l.environment!==null)Z8.envMapIntensity.value=l.environmentIntensity;if(i1){if(M1.setValue(j,"toneMappingExposure",L.toneMappingExposure),f0.needsLights)bY(Z8,d6);if(Y0&&s.fog===!0)r.refreshFogUniforms(Z8,Y0);r.refreshMaterialUniforms(Z8,s,p,x,N.state.transmissionRenderTarget[z.id]),_9.upload(j,C5(f0),Z8,O0)}if(s.isShaderMaterial&&s.uniformsNeedUpdate===!0)_9.upload(j,C5(f0),Z8,O0),s.uniformsNeedUpdate=!1;if(s.isSpriteMaterial)M1.setValue(j,"center",u.center);if(M1.setValue(j,"modelViewMatrix",u.modelViewMatrix),M1.setValue(j,"normalMatrix",u.normalMatrix),M1.setValue(j,"modelMatrix",u.matrixWorld),s.isShaderMaterial||s.isRawShaderMaterial){let b1=s.uniformsGroups;for(let l1=0,hJ=b1.length;l1<hJ;l1++){let C7=b1[l1];G0.update(C7,o1),G0.bind(C7,o1)}}return o1}function bY(z,l){z.ambientLightColor.needsUpdate=l,z.lightProbe.needsUpdate=l,z.directionalLights.needsUpdate=l,z.directionalLightShadows.needsUpdate=l,z.pointLights.needsUpdate=l,z.pointLightShadows.needsUpdate=l,z.spotLights.needsUpdate=l,z.spotLightShadows.needsUpdate=l,z.rectAreaLights.needsUpdate=l,z.hemisphereLights.needsUpdate=l}function xY(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(z,l,n){let s=C0.get(z);if(s.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,s.__autoAllocateDepthBuffer===!1)s.__useRenderToTexture=!1;C0.get(z.texture).__webglTexture=l,C0.get(z.depthTexture).__webglTexture=s.__autoAllocateDepthBuffer?void 0:n,s.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,l){let n=C0.get(z);n.__webglFramebuffer=l,n.__useDefaultFramebuffer=l===void 0};let gY=j.createFramebuffer();this.setRenderTarget=function(z,l=0,n=0){S=z,P=l,C=n;let s=!0,u=null,Y0=!1,D0=!1;if(z){let k0=C0.get(z);if(k0.__useDefaultFramebuffer!==void 0)V0.bindFramebuffer(j.FRAMEBUFFER,null),s=!1;else if(k0.__webglFramebuffer===void 0)O0.setupRenderTarget(z);else if(k0.__hasExternalTextures)O0.rebindTextures(z,C0.get(z.texture).__webglTexture,C0.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let w0=z.depthTexture;if(k0.__boundDepthTexture!==w0){if(w0!==null&&C0.has(w0)&&(z.width!==w0.image.width||z.height!==w0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O0.setupDepthRenderbuffer(z)}}let v0=z.texture;if(v0.isData3DTexture||v0.isDataArrayTexture||v0.isCompressedArrayTexture)D0=!0;let b0=C0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(b0[l]))u=b0[l][n];else u=b0[l];Y0=!0}else if(z.samples>0&&O0.useMultisampledRTT(z)===!1)u=C0.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(b0))u=b0[n];else u=b0;D.copy(z.viewport),I.copy(z.scissor),w=z.scissorTest}else D.copy(a).multiplyScalar(p).floor(),I.copy(Q0).multiplyScalar(p).floor(),w=X0;if(n!==0)u=gY;if(V0.bindFramebuffer(j.FRAMEBUFFER,u)&&s)V0.drawBuffers(z,u);if(V0.viewport(D),V0.scissor(I),V0.setScissorTest(w),Y0){let k0=C0.get(z.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+l,k0.__webglTexture,n)}else if(D0){let k0=l;for(let v0=0;v0<z.textures.length;v0++){let b0=C0.get(z.textures[v0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+v0,b0.__webglTexture,n,k0)}}else if(z!==null&&n!==0){let k0=C0.get(z.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,k0.__webglTexture,n)}b=-1},this.readRenderTargetPixels=function(z,l,n,s,u,Y0,D0,P0=0){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k0=C0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&D0!==void 0)k0=k0[D0];if(k0){V0.bindFramebuffer(j.FRAMEBUFFER,k0);try{let v0=z.textures[P0],b0=v0.format,w0=v0.type;if(!T0.textureFormatReadable(b0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T0.textureTypeReadable(w0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(l>=0&&l<=z.width-s&&(n>=0&&n<=z.height-u)){if(z.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+P0);j.readPixels(l,n,s,u,J0.convert(b0),J0.convert(w0),Y0)}}finally{let v0=S!==null?C0.get(S).__webglFramebuffer:null;V0.bindFramebuffer(j.FRAMEBUFFER,v0)}}},this.readRenderTargetPixelsAsync=async function(z,l,n,s,u,Y0,D0,P0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k0=C0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&D0!==void 0)k0=k0[D0];if(k0)if(l>=0&&l<=z.width-s&&(n>=0&&n<=z.height-u)){V0.bindFramebuffer(j.FRAMEBUFFER,k0);let v0=z.textures[P0],b0=v0.format,w0=v0.type;if(!T0.textureFormatReadable(b0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T0.textureTypeReadable(w0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let s0=j.createBuffer();if(j.bindBuffer(j.PIXEL_PACK_BUFFER,s0),j.bufferData(j.PIXEL_PACK_BUFFER,Y0.byteLength,j.STREAM_READ),z.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+P0);j.readPixels(l,n,s,u,J0.convert(b0),J0.convert(w0),0);let Z1=S!==null?C0.get(S).__webglFramebuffer:null;V0.bindFramebuffer(j.FRAMEBUFFER,Z1);let L1=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await EK(j,L1,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,s0),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Y0),j.deleteBuffer(s0),j.deleteSync(L1),Y0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,l=null,n=0){let s=Math.pow(2,-n),u=Math.floor(z.image.width*s),Y0=Math.floor(z.image.height*s),D0=l!==null?l.x:0,P0=l!==null?l.y:0;O0.setTexture2D(z,0),j.copyTexSubImage2D(j.TEXTURE_2D,n,0,0,D0,P0,u,Y0),V0.unbindTexture()};let pY=j.createFramebuffer(),lY=j.createFramebuffer();if(this.copyTextureToTexture=function(z,l,n=null,s=null,u=0,Y0=null){if(Y0===null)if(u!==0)N6("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Y0=u,u=0;else Y0=0;let D0,P0,k0,v0,b0,w0,s0,Z1,L1,G1=z.isCompressedTexture?z.mipmaps[Y0]:z.image;if(n!==null)D0=n.max.x-n.min.x,P0=n.max.y-n.min.y,k0=n.isBox3?n.max.z-n.min.z:1,v0=n.min.x,b0=n.min.y,w0=n.isBox3?n.min.z:0;else{let W8=Math.pow(2,-u);if(D0=Math.floor(G1.width*W8),P0=Math.floor(G1.height*W8),z.isDataArrayTexture)k0=G1.depth;else if(z.isData3DTexture)k0=Math.floor(G1.depth*W8);else k0=1;v0=0,b0=0,w0=0}if(s!==null)s0=s.x,Z1=s.y,L1=s.z;else s0=0,Z1=0,L1=0;let K1=J0.convert(l.format),f0=J0.convert(l.type),N1;if(l.isData3DTexture)O0.setTexture3D(l,0),N1=j.TEXTURE_3D;else if(l.isDataArrayTexture||l.isCompressedArrayTexture)O0.setTexture2DArray(l,0),N1=j.TEXTURE_2D_ARRAY;else O0.setTexture2D(l,0),N1=j.TEXTURE_2D;j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,l.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,l.unpackAlignment);let t0=j.getParameter(j.UNPACK_ROW_LENGTH),o1=j.getParameter(j.UNPACK_IMAGE_HEIGHT),i7=j.getParameter(j.UNPACK_SKIP_PIXELS),i1=j.getParameter(j.UNPACK_SKIP_ROWS),d6=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,G1.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,G1.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,v0),j.pixelStorei(j.UNPACK_SKIP_ROWS,b0),j.pixelStorei(j.UNPACK_SKIP_IMAGES,w0);let M1=z.isDataArrayTexture||z.isData3DTexture,Z8=l.isDataArrayTexture||l.isData3DTexture;if(z.isDepthTexture){let W8=C0.get(z),b1=C0.get(l),l1=C0.get(W8.__renderTarget),hJ=C0.get(b1.__renderTarget);V0.bindFramebuffer(j.READ_FRAMEBUFFER,l1.__webglFramebuffer),V0.bindFramebuffer(j.DRAW_FRAMEBUFFER,hJ.__webglFramebuffer);for(let C7=0;C7<k0;C7++){if(M1)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,C0.get(z).__webglTexture,u,w0+C7),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,C0.get(l).__webglTexture,Y0,L1+C7);j.blitFramebuffer(v0,b0,D0,P0,s0,Z1,D0,P0,j.DEPTH_BUFFER_BIT,j.NEAREST)}V0.bindFramebuffer(j.READ_FRAMEBUFFER,null),V0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(u!==0||z.isRenderTargetTexture||C0.has(z)){let W8=C0.get(z),b1=C0.get(l);V0.bindFramebuffer(j.READ_FRAMEBUFFER,pY),V0.bindFramebuffer(j.DRAW_FRAMEBUFFER,lY);for(let l1=0;l1<k0;l1++){if(M1)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,W8.__webglTexture,u,w0+l1);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,W8.__webglTexture,u);if(Z8)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,b1.__webglTexture,Y0,L1+l1);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,b1.__webglTexture,Y0);if(u!==0)j.blitFramebuffer(v0,b0,D0,P0,s0,Z1,D0,P0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(Z8)j.copyTexSubImage3D(N1,Y0,s0,Z1,L1+l1,v0,b0,D0,P0);else j.copyTexSubImage2D(N1,Y0,s0,Z1,v0,b0,D0,P0)}V0.bindFramebuffer(j.READ_FRAMEBUFFER,null),V0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(Z8)if(z.isDataTexture||z.isData3DTexture)j.texSubImage3D(N1,Y0,s0,Z1,L1,D0,P0,k0,K1,f0,G1.data);else if(l.isCompressedArrayTexture)j.compressedTexSubImage3D(N1,Y0,s0,Z1,L1,D0,P0,k0,K1,G1.data);else j.texSubImage3D(N1,Y0,s0,Z1,L1,D0,P0,k0,K1,f0,G1);else if(z.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,Y0,s0,Z1,D0,P0,K1,f0,G1.data);else if(z.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,Y0,s0,Z1,G1.width,G1.height,K1,G1.data);else j.texSubImage2D(j.TEXTURE_2D,Y0,s0,Z1,D0,P0,K1,f0,G1);if(j.pixelStorei(j.UNPACK_ROW_LENGTH,t0),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,o1),j.pixelStorei(j.UNPACK_SKIP_PIXELS,i7),j.pixelStorei(j.UNPACK_SKIP_ROWS,i1),j.pixelStorei(j.UNPACK_SKIP_IMAGES,d6),Y0===0&&l.generateMipmaps)j.generateMipmap(N1);V0.unbindTexture()},this.initRenderTarget=function(z){if(C0.get(z).__webglFramebuffer===void 0)O0.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)O0.setTextureCube(z,0);else if(z.isData3DTexture)O0.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)O0.setTexture2DArray(z,0);else O0.setTexture2D(z,0);V0.unbindTexture()},this.resetState=function(){P=0,C=0,S=null,V0.reset(),E0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return JZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace($){this._outputColorSpace=$;let J=this.getContext();J.drawingBufferColorSpace=o0._getDrawingBufferColorSpace($),J.unpackColorSpace=o0._getUnpackColorSpace()}}function fZ($,J){if(J===rQ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),$;if(J===_6||J===H9){let Q=$.getIndex();if(Q===null){let X=[],H=$.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)X.push(Y);$.setIndex(X),Q=$.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),$}let Z=Q.count-2,W=[];if(J===_6)for(let X=1;X<=Z;X++)W.push(Q.getX(0)),W.push(Q.getX(X)),W.push(Q.getX(X+1));else for(let X=0;X<Z;X++)if(X%2===0)W.push(Q.getX(X)),W.push(Q.getX(X+1)),W.push(Q.getX(X+2));else W.push(Q.getX(X+2)),W.push(Q.getX(X+1)),W.push(Q.getX(X));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let K=$.clone();return K.setIndex(W),K.clearGroups(),K}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",J),$}class gZ extends s8{constructor($){super($);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(J){return new UX(J)}),this.register(function(J){return new GX(J)}),this.register(function(J){return new DX(J)}),this.register(function(J){return new _X(J)}),this.register(function(J){return new VX(J)}),this.register(function(J){return new qX(J)}),this.register(function(J){return new NX(J)}),this.register(function(J){return new MX(J)}),this.register(function(J){return new RX(J)}),this.register(function(J){return new YX(J)}),this.register(function(J){return new FX(J)}),this.register(function(J){return new EX(J)}),this.register(function(J){return new LX(J)}),this.register(function(J){return new OX(J)}),this.register(function(J){return new XX(J)}),this.register(function(J){return new BX(J)}),this.register(function(J){return new zX(J)})}load($,J,Q,Z){let W=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let Y=N7.extractUrlBase($);K=N7.resolveURL(Y,this.path)}else K=N7.extractUrlBase($);this.manager.itemStart($);let X=function(Y){if(Z)Z(Y);else console.error(Y);W.manager.itemError($),W.manager.itemEnd($)},H=new O9(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load($,function(Y){try{W.parse(Y,K,function(U){J(U),W.manager.itemEnd($)},X)}catch(U){X(U)}},Q,X)}setDRACOLoader($){return this.dracoLoader=$,this}setKTX2Loader($){return this.ktx2Loader=$,this}setMeshoptDecoder($){return this.meshoptDecoder=$,this}register($){if(this.pluginCallbacks.indexOf($)===-1)this.pluginCallbacks.push($);return this}unregister($){if(this.pluginCallbacks.indexOf($)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf($),1);return this}parse($,J,Q,Z){let W,K={},X={},H=new TextDecoder;if(typeof $==="string")W=JSON.parse($);else if($ instanceof ArrayBuffer)if(H.decode(new Uint8Array($,0,4))===kX){try{K[n0.KHR_BINARY_GLTF]=new CX($)}catch(G){if(Z)Z(G);return}W=JSON.parse(K[n0.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode($));else W=$;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let Y=new wX(W,{path:J||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});Y.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](Y);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,K[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case n0.KHR_MATERIALS_UNLIT:K[G]=new HX;break;case n0.KHR_DRACO_MESH_COMPRESSION:K[G]=new IX(W,this.dracoLoader);break;case n0.KHR_TEXTURE_TRANSFORM:K[G]=new PX;break;case n0.KHR_MESH_QUANTIZATION:K[G]=new AX;break;default:if(E.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}Y.setExtensions(K),Y.setPlugins(X),Y.parse(Q,Z)}parseAsync($,J){let Q=this;return new Promise(function(Z,W){Q.parse($,J,Z,W)})}}function RM(){let $={};return{get:function(J){return $[J]},add:function(J,Q){$[J]=Q},remove:function(J){delete $[J]},removeAll:function(){$={}}}}var n0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XX{constructor($){this.parser=$,this.name=n0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let $=this.parser,J=this.parser.json.nodes||[];for(let Q=0,Z=J.length;Q<Z;Q++){let W=J[Q];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)$._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight($){let J=this.parser,Q="light:"+$,Z=J.cache.get(Q);if(Z)return Z;let W=J.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[$],Y,U=new y0(16777215);if(H.color!==void 0)U.setRGB(H.color[0],H.color[1],H.color[2],g1);let G=H.range!==void 0?H.range:0;switch(H.type){case"directional":Y=new $J(U),Y.target.position.set(0,0,-1),Y.add(Y.target);break;case"point":Y=new e$(U),Y.distance=G;break;case"spot":Y=new t$(U),Y.distance=G,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,Y.angle=H.spot.outerConeAngle,Y.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,Y.target.position.set(0,0,-1),Y.add(Y.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(Y.position.set(0,0,0),w8(Y,H),H.intensity!==void 0)Y.intensity=H.intensity;return Y.name=J.createUniqueName(H.name||"light_"+$),Z=Promise.resolve(Y),J.cache.add(Q,Z),Z}getDependency($,J){if($!=="light")return;return this._loadLight(J)}createNodeAttachment($){let J=this,Q=this.parser,W=Q.json.nodes[$],X=(W.extensions&&W.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(H){return Q._getNodeRef(J.cache,X,H)})}}class HX{constructor(){this.name=n0.KHR_MATERIALS_UNLIT}getMaterialType(){return A8}extendParams($,J,Q){let Z=[];$.color=new y0(1,1,1),$.opacity=1;let W=J.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let K=W.baseColorFactor;$.color.setRGB(K[0],K[1],K[2],g1),$.opacity=K[3]}if(W.baseColorTexture!==void 0)Z.push(Q.assignTexture($,"map",W.baseColorTexture,P8))}return Promise.all(Z)}}class YX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)J.emissiveIntensity=W;return Promise.resolve()}}class UX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_CLEARCOAT}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.clearcoatFactor!==void 0)J.clearcoat=K.clearcoatFactor;if(K.clearcoatTexture!==void 0)W.push(Q.assignTexture(J,"clearcoatMap",K.clearcoatTexture));if(K.clearcoatRoughnessFactor!==void 0)J.clearcoatRoughness=K.clearcoatRoughnessFactor;if(K.clearcoatRoughnessTexture!==void 0)W.push(Q.assignTexture(J,"clearcoatRoughnessMap",K.clearcoatRoughnessTexture));if(K.clearcoatNormalTexture!==void 0){if(W.push(Q.assignTexture(J,"clearcoatNormalMap",K.clearcoatNormalTexture)),K.clearcoatNormalTexture.scale!==void 0){let X=K.clearcoatNormalTexture.scale;J.clearcoatNormalScale=new u0(X,X)}}return Promise.all(W)}}class GX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_DISPERSION}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return J.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class EX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_IRIDESCENCE}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.iridescenceFactor!==void 0)J.iridescence=K.iridescenceFactor;if(K.iridescenceTexture!==void 0)W.push(Q.assignTexture(J,"iridescenceMap",K.iridescenceTexture));if(K.iridescenceIor!==void 0)J.iridescenceIOR=K.iridescenceIor;if(J.iridescenceThicknessRange===void 0)J.iridescenceThicknessRange=[100,400];if(K.iridescenceThicknessMinimum!==void 0)J.iridescenceThicknessRange[0]=K.iridescenceThicknessMinimum;if(K.iridescenceThicknessMaximum!==void 0)J.iridescenceThicknessRange[1]=K.iridescenceThicknessMaximum;if(K.iridescenceThicknessTexture!==void 0)W.push(Q.assignTexture(J,"iridescenceThicknessMap",K.iridescenceThicknessTexture));return Promise.all(W)}}class qX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_SHEEN}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];J.sheenColor=new y0(0,0,0),J.sheenRoughness=0,J.sheen=1;let K=Z.extensions[this.name];if(K.sheenColorFactor!==void 0){let X=K.sheenColorFactor;J.sheenColor.setRGB(X[0],X[1],X[2],g1)}if(K.sheenRoughnessFactor!==void 0)J.sheenRoughness=K.sheenRoughnessFactor;if(K.sheenColorTexture!==void 0)W.push(Q.assignTexture(J,"sheenColorMap",K.sheenColorTexture,P8));if(K.sheenRoughnessTexture!==void 0)W.push(Q.assignTexture(J,"sheenRoughnessMap",K.sheenRoughnessTexture));return Promise.all(W)}}class NX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_TRANSMISSION}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.transmissionFactor!==void 0)J.transmission=K.transmissionFactor;if(K.transmissionTexture!==void 0)W.push(Q.assignTexture(J,"transmissionMap",K.transmissionTexture));return Promise.all(W)}}class MX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_VOLUME}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.thickness=K.thicknessFactor!==void 0?K.thicknessFactor:0,K.thicknessTexture!==void 0)W.push(Q.assignTexture(J,"thicknessMap",K.thicknessTexture));J.attenuationDistance=K.attenuationDistance||1/0;let X=K.attenuationColor||[1,1,1];return J.attenuationColor=new y0().setRGB(X[0],X[1],X[2],g1),Promise.all(W)}}class RX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_IOR}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return J.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class FX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_SPECULAR}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.specularIntensity=K.specularFactor!==void 0?K.specularFactor:1,K.specularTexture!==void 0)W.push(Q.assignTexture(J,"specularIntensityMap",K.specularTexture));let X=K.specularColorFactor||[1,1,1];if(J.specularColor=new y0().setRGB(X[0],X[1],X[2],g1),K.specularColorTexture!==void 0)W.push(Q.assignTexture(J,"specularColorMap",K.specularColorTexture,P8));return Promise.all(W)}}class OX{constructor($){this.parser=$,this.name=n0.EXT_MATERIALS_BUMP}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.bumpScale=K.bumpFactor!==void 0?K.bumpFactor:1,K.bumpTexture!==void 0)W.push(Q.assignTexture(J,"bumpMap",K.bumpTexture));return Promise.all(W)}}class LX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_ANISOTROPY}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return J8}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.anisotropyStrength!==void 0)J.anisotropy=K.anisotropyStrength;if(K.anisotropyRotation!==void 0)J.anisotropyRotation=K.anisotropyRotation;if(K.anisotropyTexture!==void 0)W.push(Q.assignTexture(J,"anisotropyMap",K.anisotropyTexture));return Promise.all(W)}}class DX{constructor($){this.parser=$,this.name=n0.KHR_TEXTURE_BASISU}loadTexture($){let J=this.parser,Q=J.json,Z=Q.textures[$];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],K=J.options.ktx2Loader;if(!K)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return J.loadTextureImage($,W.source,K)}}class _X{constructor($){this.parser=$,this.name=n0.EXT_TEXTURE_WEBP}loadTexture($){let J=this.name,Q=this.parser,Z=Q.json,W=Z.textures[$];if(!W.extensions||!W.extensions[J])return null;let K=W.extensions[J],X=Z.images[K.source],H=Q.textureLoader;if(X.uri){let Y=Q.options.manager.getHandler(X.uri);if(Y!==null)H=Y}return Q.loadTextureImage($,K.source,H)}}class VX{constructor($){this.parser=$,this.name=n0.EXT_TEXTURE_AVIF}loadTexture($){let J=this.name,Q=this.parser,Z=Q.json,W=Z.textures[$];if(!W.extensions||!W.extensions[J])return null;let K=W.extensions[J],X=Z.images[K.source],H=Q.textureLoader;if(X.uri){let Y=Q.options.manager.getHandler(X.uri);if(Y!==null)H=Y}return Q.loadTextureImage($,K.source,H)}}class BX{constructor($){this.name=n0.EXT_MESHOPT_COMPRESSION,this.parser=$}loadBufferView($){let J=this.parser.json,Q=J.bufferViews[$];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(J.extensionsRequired&&J.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(X){let H=Z.byteOffset||0,Y=Z.byteLength||0,U=Z.count,G=Z.byteStride,E=new Uint8Array(X,H,Y);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,E,Z.mode,Z.filter).then(function(q){return q.buffer});else return K.ready.then(function(){let q=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(q),U,G,E,Z.mode,Z.filter),q})})}else return null}}class zX{constructor($){this.name=n0.EXT_MESH_GPU_INSTANCING,this.parser=$}createNodeMesh($){let J=this.parser.json,Q=J.nodes[$];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=J.meshes[Q.mesh];for(let Y of Z.primitives)if(Y.mode!==G8.TRIANGLES&&Y.mode!==G8.TRIANGLE_STRIP&&Y.mode!==G8.TRIANGLE_FAN&&Y.mode!==void 0)return null;let K=Q.extensions[this.name].attributes,X=[],H={};for(let Y in K)X.push(this.parser.getDependency("accessor",K[Y]).then((U)=>{return H[Y]=U,H[Y]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh($)),Promise.all(X).then((Y)=>{let U=Y.pop(),G=U.isGroup?U.children:[U],E=Y[0].count,q=[];for(let M of G){let O=new g0,F=new g,N=new L8,R=new g(1,1,1),_=new u$(M.geometry,M.material,E);for(let L=0;L<E;L++){if(H.TRANSLATION)F.fromBufferAttribute(H.TRANSLATION,L);if(H.ROTATION)N.fromBufferAttribute(H.ROTATION,L);if(H.SCALE)R.fromBufferAttribute(H.SCALE,L);_.setMatrixAt(L,O.compose(F,N,R))}for(let L in H)if(L==="_COLOR_0"){let k=H[L];_.instanceColor=new S7(k.array,k.itemSize,k.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE")M.geometry.setAttribute(L,H[L]);E1.prototype.copy.call(_,M),this.parser.assignFinalMaterial(_),q.push(_)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var kX="glTF",V9=12,QX={JSON:1313821514,BIN:5130562};class CX{constructor($){this.name=n0.KHR_BINARY_GLTF,this.content=null,this.body=null;let J=new DataView($,0,V9),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array($.slice(0,4))),version:J.getUint32(4,!0),length:J.getUint32(8,!0)},this.header.magic!==kX)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-V9,W=new DataView($,V9),K=0;while(K<Z){let X=W.getUint32(K,!0);K+=4;let H=W.getUint32(K,!0);if(K+=4,H===QX.JSON){let Y=new Uint8Array($,V9+K,X);this.content=Q.decode(Y)}else if(H===QX.BIN){let Y=V9+K;this.body=$.slice(Y,Y+X)}K+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class IX{constructor($,J){if(!J)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n0.KHR_DRACO_MESH_COMPRESSION,this.json=$,this.dracoLoader=J,this.dracoLoader.preload()}decodePrimitive($,J){let Q=this.json,Z=this.dracoLoader,W=$.extensions[this.name].bufferView,K=$.extensions[this.name].attributes,X={},H={},Y={};for(let U in K){let G=bZ[U]||U.toLowerCase();X[G]=K[U]}for(let U in $.attributes){let G=bZ[U]||U.toLowerCase();if(K[U]!==void 0){let E=Q.accessors[$.attributes[U]],q=j6[E.componentType];Y[G]=q.name,H[G]=E.normalized===!0}}return J.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){Z.decodeDracoFile(U,function(q){for(let M in q.attributes){let O=q.attributes[M],F=H[M];if(F!==void 0)O.normalized=F}G(q)},X,Y,g1,E)})})}}class PX{constructor(){this.name=n0.KHR_TEXTURE_TRANSFORM}extendTexture($,J){if((J.texCoord===void 0||J.texCoord===$.channel)&&J.offset===void 0&&J.rotation===void 0&&J.scale===void 0)return $;if($=$.clone(),J.texCoord!==void 0)$.channel=J.texCoord;if(J.offset!==void 0)$.offset.fromArray(J.offset);if(J.rotation!==void 0)$.rotation=J.rotation;if(J.scale!==void 0)$.repeat.fromArray(J.scale);return $.needsUpdate=!0,$}}class AX{constructor(){this.name=n0.KHR_MESH_QUANTIZATION}}class pZ extends U7{constructor($,J,Q,Z){super($,J,Q,Z)}copySampleValue_($){let J=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=$*Z*3+Z;for(let K=0;K!==Z;K++)J[K]=Q[W+K];return J}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=X*2,Y=X*3,U=Z-J,G=(Q-J)/U,E=G*G,q=E*G,M=$*Y,O=M-Y,F=-2*q+3*E,N=q-E,R=1-F,_=N-E+G;for(let L=0;L!==X;L++){let k=K[O+L+X],P=K[O+L+H]*U,C=K[M+L+X],S=K[M+L]*U;W[L]=R*k+_*P+F*C+N*S}return W}}var FM=new L8;class TX extends pZ{interpolate_($,J,Q,Z){let W=super.interpolate_($,J,Q,Z);return FM.fromArray(W).normalize().toArray(W),W}}var G8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},j6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ZX={9728:d8,9729:u1,9984:A$,9985:O6,9986:f7,9987:c8},WX={33071:I$,33648:P$,10497:F6},vZ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bZ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},M7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},OM={CUBICSPLINE:void 0,LINEAR:v$,STEP:aQ},yZ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LM($){if($.DefaultMaterial===void 0)$.DefaultMaterial=new A6({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:W7});return $.DefaultMaterial}function p7($,J,Q){for(let Z in Q.extensions)if($[Z]===void 0)J.userData.gltfExtensions=J.userData.gltfExtensions||{},J.userData.gltfExtensions[Z]=Q.extensions[Z]}function w8($,J){if(J.extras!==void 0)if(typeof J.extras==="object")Object.assign($.userData,J.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+J.extras)}function DM($,J,Q){let Z=!1,W=!1,K=!1;for(let U=0,G=J.length;U<G;U++){let E=J[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)K=!0;if(Z&&W&&K)break}if(!Z&&!W&&!K)return Promise.resolve($);let X=[],H=[],Y=[];for(let U=0,G=J.length;U<G;U++){let E=J[U];if(Z){let q=E.POSITION!==void 0?Q.getDependency("accessor",E.POSITION):$.attributes.position;X.push(q)}if(W){let q=E.NORMAL!==void 0?Q.getDependency("accessor",E.NORMAL):$.attributes.normal;H.push(q)}if(K){let q=E.COLOR_0!==void 0?Q.getDependency("accessor",E.COLOR_0):$.attributes.color;Y.push(q)}}return Promise.all([Promise.all(X),Promise.all(H),Promise.all(Y)]).then(function(U){let G=U[0],E=U[1],q=U[2];if(Z)$.morphAttributes.position=G;if(W)$.morphAttributes.normal=E;if(K)$.morphAttributes.color=q;return $.morphTargetsRelative=!0,$})}function _M($,J){if($.updateMorphTargets(),J.weights!==void 0)for(let Q=0,Z=J.weights.length;Q<Z;Q++)$.morphTargetInfluences[Q]=J.weights[Q];if(J.extras&&Array.isArray(J.extras.targetNames)){let Q=J.extras.targetNames;if($.morphTargetInfluences.length===Q.length){$.morphTargetDictionary={};for(let Z=0,W=Q.length;Z<W;Z++)$.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VM($){let J,Q=$.extensions&&$.extensions[n0.KHR_DRACO_MESH_COMPRESSION];if(Q)J="draco:"+Q.bufferView+":"+Q.indices+":"+hZ(Q.attributes);else J=$.indices+":"+hZ($.attributes)+":"+$.mode;if($.targets!==void 0)for(let Z=0,W=$.targets.length;Z<W;Z++)J+=":"+hZ($.targets[Z]);return J}function hZ($){let J="",Q=Object.keys($).sort();for(let Z=0,W=Q.length;Z<W;Z++)J+=Q[Z]+":"+$[Q[Z]]+";";return J}function xZ($){switch($){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BM($){if($.search(/\.jpe?g($|\?)/i)>0||$.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if($.search(/\.webp($|\?)/i)>0||$.search(/^data\:image\/webp/)===0)return"image/webp";if($.search(/\.ktx2($|\?)/i)>0||$.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var zM=new g0;class wX{constructor($={},J={}){this.json=$,this.extensions={},this.plugins={},this.options=J,this.cache=new RM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,W=!1,K=-1;if(typeof navigator<"u"){let X=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(X)===!0;let H=X.match(/Version\/(\d+)/);Z=Q&&H?parseInt(H[1],10):-1,W=X.indexOf("Firefox")>-1,K=W?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||W&&K<98)this.textureLoader=new a$(this.options.manager);else this.textureLoader=new JJ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new O9(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions($){this.extensions=$}setPlugins($){this.plugins=$}parse($,J){let Q=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(K){let X={scene:K[0][Z.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:Z.asset,parser:Q,userData:{}};return p7(W,X,Z),w8(X,Z),Promise.all(Q._invokeAll(function(H){return H.afterRoot&&H.afterRoot(X)})).then(function(){for(let H of X.scenes)H.updateMatrixWorld();$(X)})}).catch(J)}_markDefs(){let $=this.json.nodes||[],J=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z].joints;for(let X=0,H=K.length;X<H;X++)$[K[X]].isBone=!0}for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)Q[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef($,J){if(J===void 0)return;if($.refs[J]===void 0)$.refs[J]=$.uses[J]=0;$.refs[J]++}_getNodeRef($,J,Q){if($.refs[J]<=1)return Q;let Z=Q.clone(),W=(K,X)=>{let H=this.associations.get(K);if(H!=null)this.associations.set(X,H);for(let[Y,U]of K.children.entries())W(U,X.children[Y])};return W(Q,Z),Z.name+="_instance_"+$.uses[J]++,Z}_invokeOne($){let J=Object.values(this.plugins);J.push(this);for(let Q=0;Q<J.length;Q++){let Z=$(J[Q]);if(Z)return Z}return null}_invokeAll($){let J=Object.values(this.plugins);J.unshift(this);let Q=[];for(let Z=0;Z<J.length;Z++){let W=$(J[Z]);if(W)Q.push(W)}return Q}getDependency($,J){let Q=$+":"+J,Z=this.cache.get(Q);if(!Z){switch($){case"scene":Z=this.loadScene(J);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(J)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(J)});break;case"accessor":Z=this.loadAccessor(J);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(J)});break;case"buffer":Z=this.loadBuffer(J);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(J)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(J)});break;case"skin":Z=this.loadSkin(J);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(J)});break;case"camera":Z=this.loadCamera(J);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency($,J)}),!Z)throw Error("Unknown type: "+$);break}this.cache.add(Q,Z)}return Z}getDependencies($){let J=this.cache.get($);if(!J){let Q=this,Z=this.json[$+($==="mesh"?"es":"s")]||[];J=Promise.all(Z.map(function(W,K){return Q.getDependency($,K)})),this.cache.add($,J)}return J}loadBuffer($){let J=this.json.buffers[$],Q=this.fileLoader;if(J.type&&J.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+J.type+" buffer type is not supported.");if(J.uri===void 0&&$===0)return Promise.resolve(this.extensions[n0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,K){Q.load(N7.resolveURL(J.uri,Z.path),W,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+J.uri+'".'))})})}loadBufferView($){let J=this.json.bufferViews[$];return this.getDependency("buffer",J.buffer).then(function(Q){let Z=J.byteLength||0,W=J.byteOffset||0;return Q.slice(W,W+Z)})}loadAccessor($){let J=this,Q=this.json,Z=this.json.accessors[$];if(Z.bufferView===void 0&&Z.sparse===void 0){let K=vZ[Z.type],X=j6[Z.componentType],H=Z.normalized===!0,Y=new X(Z.count*K);return Promise.resolve(new H1(Y,K,H))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(K){let X=K[0],H=vZ[Z.type],Y=j6[Z.componentType],U=Y.BYTES_PER_ELEMENT,G=U*H,E=Z.byteOffset||0,q=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,M=Z.normalized===!0,O,F;if(q&&q!==G){let N=Math.floor(E/q),R="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+N+":"+Z.count,_=J.cache.get(R);if(!_)O=new Y(X,N*q,Z.count*q/U),_=new G9(O,q/U),J.cache.add(R,_);F=new C6(_,H,E%q/U,M)}else{if(X===null)O=new Y(Z.count*H);else O=new Y(X,E,Z.count*H);F=new H1(O,H,M)}if(Z.sparse!==void 0){let N=vZ.SCALAR,R=j6[Z.sparse.indices.componentType],_=Z.sparse.indices.byteOffset||0,L=Z.sparse.values.byteOffset||0,k=new R(K[1],_,Z.sparse.count*N),P=new Y(K[2],L,Z.sparse.count*H);if(X!==null)F=new H1(F.array.slice(),F.itemSize,F.normalized);F.normalized=!1;for(let C=0,S=k.length;C<S;C++){let b=k[C];if(F.setX(b,P[C*H]),H>=2)F.setY(b,P[C*H+1]);if(H>=3)F.setZ(b,P[C*H+2]);if(H>=4)F.setW(b,P[C*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}F.normalized=M}return F})}loadTexture($){let J=this.json,Q=this.options,W=J.textures[$].source,K=J.images[W],X=this.textureLoader;if(K.uri){let H=Q.manager.getHandler(K.uri);if(H!==null)X=H}return this.loadTextureImage($,W,X)}loadTextureImage($,J,Q){let Z=this,W=this.json,K=W.textures[$],X=W.images[J],H=(X.uri||X.bufferView)+":"+K.sampler;if(this.textureCache[H])return this.textureCache[H];let Y=this.loadImageSource(J,Q).then(function(U){if(U.flipY=!1,U.name=K.name||X.name||"",U.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)U.name=X.uri;let E=(W.samplers||{})[K.sampler]||{};return U.magFilter=ZX[E.magFilter]||u1,U.minFilter=ZX[E.minFilter]||c8,U.wrapS=WX[E.wrapS]||F6,U.wrapT=WX[E.wrapT]||F6,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==d8&&U.minFilter!==u1,Z.associations.set(U,{textures:$}),U}).catch(function(){return null});return this.textureCache[H]=Y,Y}loadImageSource($,J){let Q=this,Z=this.json,W=this.options;if(this.sourceCache[$]!==void 0)return this.sourceCache[$].then((G)=>G.clone());let K=Z.images[$],X=self.URL||self.webkitURL,H=K.uri||"",Y=!1;if(K.bufferView!==void 0)H=Q.getDependency("bufferView",K.bufferView).then(function(G){Y=!0;let E=new Blob([G],{type:K.mimeType});return H=X.createObjectURL(E),H});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+$+" is missing URI and bufferView");let U=Promise.resolve(H).then(function(G){return new Promise(function(E,q){let M=E;if(J.isImageBitmapLoader===!0)M=function(O){let F=new D1(O);F.needsUpdate=!0,E(F)};J.load(N7.resolveURL(G,W.path),M,void 0,q)})}).then(function(G){if(Y===!0)X.revokeObjectURL(H);return w8(G,K),G.userData.mimeType=K.mimeType||BM(K.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),G});return this.sourceCache[$]=U,U}assignTexture($,J,Q,Z){let W=this;return this.getDependency("texture",Q.index).then(function(K){if(!K)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)K=K.clone(),K.channel=Q.texCoord;if(W.extensions[n0.KHR_TEXTURE_TRANSFORM]){let X=Q.extensions!==void 0?Q.extensions[n0.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let H=W.associations.get(K);K=W.extensions[n0.KHR_TEXTURE_TRANSFORM].extendTexture(K,X),W.associations.set(K,H)}}if(Z!==void 0)K.colorSpace=Z;return $[J]=K,K})}assignFinalMaterial($){let{geometry:J,material:Q}=$,Z=J.attributes.tangent===void 0,W=J.attributes.color!==void 0,K=J.attributes.normal===void 0;if($.isPoints){let X="PointsMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new R9,$8.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,H.sizeAttenuation=!1,this.cache.add(X,H);Q=H}else if($.isLine){let X="LineBasicMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new M9,$8.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,this.cache.add(X,H);Q=H}if(Z||W||K){let X="ClonedMaterial:"+Q.uuid+":";if(Z)X+="derivative-tangents:";if(W)X+="vertex-colors:";if(K)X+="flat-shading:";let H=this.cache.get(X);if(!H){if(H=Q.clone(),W)H.vertexColors=!0;if(K)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(X,H),this.associations.set(H,this.associations.get(Q))}Q=H}$.material=Q}getMaterialType(){return A6}loadMaterial($){let J=this,Q=this.json,Z=this.extensions,W=Q.materials[$],K,X={},H=W.extensions||{},Y=[];if(H[n0.KHR_MATERIALS_UNLIT]){let G=Z[n0.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),Y.push(G.extendParams(X,W,J))}else{let G=W.pbrMetallicRoughness||{};if(X.color=new y0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;X.color.setRGB(E[0],E[1],E[2],g1),X.opacity=E[3]}if(G.baseColorTexture!==void 0)Y.push(J.assignTexture(X,"map",G.baseColorTexture,P8));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)Y.push(J.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),Y.push(J.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType($)}),Y.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams($,X)})))}if(W.doubleSided===!0)X.side=U8;let U=W.alphaMode||yZ.OPAQUE;if(U===yZ.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,U===yZ.MASK)X.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&K!==A8){if(Y.push(J.assignTexture(X,"normalMap",W.normalTexture)),X.normalScale=new u0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;X.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&K!==A8){if(Y.push(J.assignTexture(X,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)X.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&K!==A8){let G=W.emissiveFactor;X.emissive=new y0().setRGB(G[0],G[1],G[2],g1)}if(W.emissiveTexture!==void 0&&K!==A8)Y.push(J.assignTexture(X,"emissiveMap",W.emissiveTexture,P8));return Promise.all(Y).then(function(){let G=new K(X);if(W.name)G.name=W.name;if(w8(G,W),J.associations.set(G,{materials:$}),W.extensions)p7(Z,G,W);return G})}createUniqueName($){let J=e0.sanitizeNodeName($||"");if(J in this.nodeNamesUsed)return J+"_"+ ++this.nodeNamesUsed[J];else return this.nodeNamesUsed[J]=0,J}loadGeometries($){let J=this,Q=this.extensions,Z=this.primitiveCache;function W(X){return Q[n0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,J).then(function(H){return KX(H,X,J)})}let K=[];for(let X=0,H=$.length;X<H;X++){let Y=$[X],U=VM(Y),G=Z[U];if(G)K.push(G.promise);else{let E;if(Y.extensions&&Y.extensions[n0.KHR_DRACO_MESH_COMPRESSION])E=W(Y);else E=KX(new p1,Y,J);Z[U]={primitive:Y,promise:E},K.push(E)}}return Promise.all(K)}loadMesh($){let J=this,Q=this.json,Z=this.extensions,W=Q.meshes[$],K=W.primitives,X=[];for(let H=0,Y=K.length;H<Y;H++){let U=K[H].material===void 0?LM(this.cache):this.getDependency("material",K[H].material);X.push(U)}return X.push(J.loadGeometries(K)),Promise.all(X).then(function(H){let Y=H.slice(0,H.length-1),U=H[H.length-1],G=[];for(let q=0,M=U.length;q<M;q++){let O=U[q],F=K[q],N,R=Y[q];if(F.mode===G8.TRIANGLES||F.mode===G8.TRIANGLE_STRIP||F.mode===G8.TRIANGLE_FAN||F.mode===void 0){if(N=W.isSkinnedMesh===!0?new p$(O,R):new T1(O,R),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(F.mode===G8.TRIANGLE_STRIP)N.geometry=fZ(N.geometry,H9);else if(F.mode===G8.TRIANGLE_FAN)N.geometry=fZ(N.geometry,_6)}else if(F.mode===G8.LINES)N=new m$(O,R);else if(F.mode===G8.LINE_STRIP)N=new I6(O,R);else if(F.mode===G8.LINE_LOOP)N=new d$(O,R);else if(F.mode===G8.POINTS)N=new P6(O,R);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+F.mode);if(Object.keys(N.geometry.morphAttributes).length>0)_M(N,W);if(N.name=J.createUniqueName(W.name||"mesh_"+$),w8(N,W),F.extensions)p7(Z,N,F);J.assignFinalMaterial(N),G.push(N)}for(let q=0,M=G.length;q<M;q++)J.associations.set(G[q],{meshes:$,primitives:q});if(G.length===1){if(W.extensions)p7(Z,G[0],W);return G[0]}let E=new H8;if(W.extensions)p7(Z,E,W);J.associations.set(E,{meshes:$});for(let q=0,M=G.length;q<M;q++)E.add(G[q]);return E})}loadCamera($){let J,Q=this.json.cameras[$],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")J=new w1(F1.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")J=new q7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)J.name=this.createUniqueName(Q.name);return w8(J,Q),Promise.resolve(J)}loadSkin($){let J=this.json.skins[$],Q=[];for(let Z=0,W=J.joints.length;Z<W;Z++)Q.push(this._loadNodeShallow(J.joints[Z]));if(J.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",J.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let W=Z.pop(),K=Z,X=[],H=[];for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];if(G){X.push(G);let E=new g0;if(W!==null)E.fromArray(W.array,Y*16);H.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',J.joints[Y])}return new q9(X,H)})}loadAnimation($){let J=this.json,Q=this,Z=J.animations[$],W=Z.name?Z.name:"animation_"+$,K=[],X=[],H=[],Y=[],U=[];for(let G=0,E=Z.channels.length;G<E;G++){let q=Z.channels[G],M=Z.samplers[q.sampler],O=q.target,F=O.node,N=Z.parameters!==void 0?Z.parameters[M.input]:M.input,R=Z.parameters!==void 0?Z.parameters[M.output]:M.output;if(O.node===void 0)continue;K.push(this.getDependency("node",F)),X.push(this.getDependency("accessor",N)),H.push(this.getDependency("accessor",R)),Y.push(M),U.push(O)}return Promise.all([Promise.all(K),Promise.all(X),Promise.all(H),Promise.all(Y),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],M=G[2],O=G[3],F=G[4],N=[];for(let _=0,L=E.length;_<L;_++){let k=E[_],P=q[_],C=M[_],S=O[_],b=F[_];if(k===void 0)continue;if(k.updateMatrix)k.updateMatrix();let B=Q._createAnimationTracks(k,P,C,S,b);if(B)for(let D=0;D<B.length;D++)N.push(B[D])}let R=new i$(W,void 0,N);return w8(R,Z),R})}createNodeMesh($){let J=this.json,Q=this,Z=J.nodes[$];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(W){let K=Q._getNodeRef(Q.meshCache,Z.mesh,W);if(Z.weights!==void 0)K.traverse(function(X){if(!X.isMesh)return;for(let H=0,Y=Z.weights.length;H<Y;H++)X.morphTargetInfluences[H]=Z.weights[H]});return K})}loadNode($){let J=this.json,Q=this,Z=J.nodes[$],W=Q._loadNodeShallow($),K=[],X=Z.children||[];for(let Y=0,U=X.length;Y<U;Y++)K.push(Q.getDependency("node",X[Y]));let H=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(K),H]).then(function(Y){let U=Y[0],G=Y[1],E=Y[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,zM)});for(let q=0,M=G.length;q<M;q++)U.add(G[q]);return U})}_loadNodeShallow($){let J=this.json,Q=this.extensions,Z=this;if(this.nodeCache[$]!==void 0)return this.nodeCache[$];let W=J.nodes[$],K=W.name?Z.createUniqueName(W.name):"",X=[],H=Z._invokeOne(function(Y){return Y.createNodeMesh&&Y.createNodeMesh($)});if(H)X.push(H);if(W.camera!==void 0)X.push(Z.getDependency("camera",W.camera).then(function(Y){return Z._getNodeRef(Z.cameraCache,W.camera,Y)}));return Z._invokeAll(function(Y){return Y.createNodeAttachment&&Y.createNodeAttachment($)}).forEach(function(Y){X.push(Y)}),this.nodeCache[$]=Promise.all(X).then(function(Y){let U;if(W.isBone===!0)U=new E9;else if(Y.length>1)U=new H8;else if(Y.length===1)U=Y[0];else U=new E1;if(U!==Y[0])for(let G=0,E=Y.length;G<E;G++)U.add(Y[G]);if(W.name)U.userData.name=W.name,U.name=K;if(w8(U,W),W.extensions)p7(Q,U,W);if(W.matrix!==void 0){let G=new g0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=$,U}),this.nodeCache[$]}loadScene($){let J=this.extensions,Q=this.json.scenes[$],Z=this,W=new H8;if(Q.name)W.name=Z.createUniqueName(Q.name);if(w8(W,Q),Q.extensions)p7(J,W,Q);let K=Q.nodes||[],X=[];for(let H=0,Y=K.length;H<Y;H++)X.push(Z.getDependency("node",K[H]));return Promise.all(X).then(function(H){for(let U=0,G=H.length;U<G;U++)W.add(H[U]);let Y=(U)=>{let G=new Map;for(let[E,q]of Z.associations)if(E instanceof $8||E instanceof D1)G.set(E,q);return U.traverse((E)=>{let q=Z.associations.get(E);if(q!=null)G.set(E,q)}),G};return Z.associations=Y(W),W})}_createAnimationTracks($,J,Q,Z,W){let K=[],X=$.name?$.name:$.uuid,H=[];if(M7[W.path]===M7.weights)$.traverse(function(E){if(E.morphTargetInfluences)H.push(E.name?E.name:E.uuid)});else H.push(X);let Y;switch(M7[W.path]){case M7.weights:Y=l8;break;case M7.rotation:Y=n8;break;case M7.translation:case M7.scale:Y=u8;break;default:switch(Q.itemSize){case 1:Y=l8;break;case 2:case 3:default:Y=u8;break}break}let U=Z.interpolation!==void 0?OM[Z.interpolation]:v$,G=this._getArrayFromAccessor(Q);for(let E=0,q=H.length;E<q;E++){let M=new Y(H[E]+"."+M7[W.path],J.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(M);K.push(M)}return K}_getArrayFromAccessor($){let J=$.array;if($.normalized){let Q=xZ(J.constructor),Z=new Float32Array(J.length);for(let W=0,K=J.length;W<K;W++)Z[W]=J[W]*Q;J=Z}return J}_createCubicSplineTrackInterpolant($){$.createInterpolant=function(Q){return new(this instanceof n8?TX:pZ)(this.times,this.values,this.getValueSize()/3,Q)},$.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kM($,J,Q){let Z=J.attributes,W=new m1;if(Z.POSITION!==void 0){let H=Q.json.accessors[Z.POSITION],Y=H.min,U=H.max;if(Y!==void 0&&U!==void 0){if(W.set(new g(Y[0],Y[1],Y[2]),new g(U[0],U[1],U[2])),H.normalized){let G=xZ(j6[H.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=J.targets;if(K!==void 0){let H=new g,Y=new g;for(let U=0,G=K.length;U<G;U++){let E=K[U];if(E.POSITION!==void 0){let q=Q.json.accessors[E.POSITION],M=q.min,O=q.max;if(M!==void 0&&O!==void 0){if(Y.setX(Math.max(Math.abs(M[0]),Math.abs(O[0]))),Y.setY(Math.max(Math.abs(M[1]),Math.abs(O[1]))),Y.setZ(Math.max(Math.abs(M[2]),Math.abs(O[2]))),q.normalized){let F=xZ(j6[q.componentType]);Y.multiplyScalar(F)}H.max(Y)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}$.boundingBox=W;let X=new e1;W.getCenter(X.center),X.radius=W.min.distanceTo(W.max)/2,$.boundingSphere=X}function KX($,J,Q){let Z=J.attributes,W=[];function K(X,H){return Q.getDependency("accessor",X).then(function(Y){$.setAttribute(H,Y)})}for(let X in Z){let H=bZ[X]||X.toLowerCase();if(H in $.attributes)continue;W.push(K(Z[X],H))}if(J.indices!==void 0&&!$.index){let X=Q.getDependency("accessor",J.indices).then(function(H){$.setIndex(H)});W.push(X)}if(o0.workingColorSpace!==g1&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${o0.workingColorSpace}" not supported.`);return w8($,J),kM($,J,Q),Promise.all(W).then(function(){return J.targets!==void 0?DM($,J.targets,Q):$})}var jX=0.55;var SX=($)=>$*$*(3-2*$);function fX($){if($<0||$>=0.55)return 0;let J=SX(Math.min(1,$/0.035)),Q=1-SX(Math.max(0,($-0.035)/0.515));return 0.71*J*Q}function vX($=16){let J=Array.from({length:$},()=>({x:0,y:0,fromX:0,fromY:0,time:-100,strength:0})),Q=$,Z=0,W=-1/0,K=(X,H)=>X.strength>0&&H>=X.time&&H-X.time<0.55;return{items:J,setLimit(X){Q=Math.max(0,Math.min($,Math.floor(X)))},hasLive(X){return J.some((H)=>K(H,X))},add(X){if(!Q||!Number.isFinite(X.x+X.y+X.time+X.strength))return!1;if(X.time-W<Math.max(0.035,0.55/Q))return!1;let H=0,Y=-1;for(let U=0;U<$;U++){let G=(Z+U)%$;if(K(J[G],X.time))H++;else if(Y<0)Y=G}if(H>=Q||Y<0)return!1;return Object.assign(J[Y],X),Z=(Y+1)%$,W=X.time,!0}}}var R7=16,XJ=" .,:;i!+*xso#%@";function yX($,{reduced:J=!1,strongerGlyphs:Q=!1}={}){let Z=document.createElement("canvas");Z.width=XJ.length*40,Z.height=40;let W=Z.getContext("2d");if(!W)throw Error("ASCII rendering requires a 2D canvas context.");W.font=`${Q?700:600} 34px "Courier New", monospace`,W.fillStyle="#fff",W.textAlign="center",W.textBaseline="middle";for(let A=0;A<XJ.length;A++)W.fillText(XJ[A],A*40+20,20);let K=new c$(Z);K.minFilter=u1,K.magFilter=u1,K.generateMipmaps=!1;let X=Array.from({length:R7},()=>new i0),H=Array.from({length:R7},()=>new u0),Y=vX(R7),U=new p1,G=new d1({transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{image:{value:$},atlas:{value:K},glyphCount:{value:XJ.length},resolution:{value:new u0(1,1)},ink:{value:new g(0.93,0.94,0.9)},inkGain:{value:Q?1.38:1},cellHeight:{value:12},pixelRatio:{value:1},activeBrushCount:{value:0},brushes:{value:X},endpoints:{value:H},radius:{value:80},amplitude:{value:J?35:100},dispersal:{value:0},crownOnly:{value:0},revealInPlace:{value:0},glyphGlitch:{value:new i0}},vertexShader:`
      precision highp float;
      uniform sampler2D image; uniform vec2 resolution;
      uniform float cellHeight; uniform float pixelRatio; uniform float glyphCount; uniform int activeBrushCount;
      uniform vec4 brushes[${R7}]; uniform vec2 endpoints[${R7}];
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
          for(int i=0;i<${R7};i++) {
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
    `,fragmentShader:`
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
    `}),E=new P6(U,G);E.name="ScreenSpaceAsciiGrid",E.frustumCulled=!1;let q=new k6;q.add(E);let M=new z6,O=1,F=1,N=1,R=12,_=12,L=null,k=0,P=1,C=1,S=0,b=0,B=22000,D=R7,I=!1;function w(){let A=(X0)=>({columns:Math.max(1,Math.ceil(O/(X0*0.62))),rows:Math.max(1,Math.ceil(F/X0))}),f=A(R);if(f.columns*f.rows>B){let X0=R,L0=Math.max(R,Math.sqrt(O*F/(B*0.62))*1.1);while(!0){let q0=A(L0);if(q0.columns*q0.rows<=B)break;L0*=1.25}for(let q0=0;q0<30;q0++){let c=(X0+L0)*0.5,W0=A(c);if(W0.columns*W0.rows>B)X0=c;else L0=c}f=A(L0*1.0000000001)}let{columns:h,rows:x}=f;if(_=F/x,G.uniforms.cellHeight.value=_,h===P&&x===C&&S===O&&b===F)return!1;P=h,C=x,S=O,b=F,U.dispose();let p=P*C;k=p;let y=new Float32Array(p*3),o=new Float32Array(p*2),a=new Float32Array(p*2),Q0=1947;for(let X0=0,L0=0;X0<C;X0++)for(let q0=0;q0<P;q0++,L0++){let c=(q0+0.5)/P,W0=(X0+0.5)/C;y.set([c*O,W0*F,0],L0*3),o.set([c,W0],L0*2),Q0=Math.imul(Q0,1664525)+1013904223|0;let e=(Q0>>>0)/4294967296*62.83;a.set([Math.cos(e),Math.sin(e)],L0*2)}return U.setAttribute("position",new H1(y,3)),U.setAttribute("sampleUV",new H1(o,2)),U.setAttribute("randomDirection",new H1(a,2)),U.setDrawRange(0,p),!0}return{scene:q,camera:M,getStats(){return{glyphs:k,cellHeight:R,effectiveCellHeight:_,columns:P,rows:C}},getSourceSize(A=2){let f=Number.isFinite(A)&&A>0?A:2;return{width:Math.max(1,Math.ceil(P*f)),height:Math.max(1,Math.ceil(C*f))}},setQuality({glyphBudget:A,brushLimit:f}={}){if(I)return!1;let h=!1;if(Number.isFinite(A)){let x=Math.max(64,Math.floor(A));h=h||x!==B,B=x}if(Number.isFinite(f)){let x=F1.clamp(Math.floor(f),0,R7);h=h||x!==D,D=x,Y.setLimit(x)}if(h)w();return h},resize(A,f,h){if(I)return!1;let x=Math.max(1,Math.round(A)),p=Math.max(1,Math.round(f)),y=Number.isFinite(h)&&h>0?h:1;if(x===O&&p===F&&y===N&&k)return!1;let o=x!==O||p!==F;O=x,F=p,N=y,G.uniforms.resolution.value.set(O,F),G.uniforms.pixelRatio.value=N;let a=F1.clamp(F*0.13,65,110);if(G.uniforms.radius.value=a,G.uniforms.amplitude.value=a*(J?0.52:1.55),o||!k)w();return!0},update(A){if(I)return!1;let f=0;for(let h of Y.items){let x=fX(A-h.time)*h.strength;if(x<=0)continue;X[f].set(h.fromX,h.fromY,x,0),H[f].set(h.x,h.y),f++}return G.uniforms.activeBrushCount.value=f,Y.hasLive(A)},isAnimating(A){return!I&&(Y.hasLive(A)||G.uniforms.activeBrushCount.value>0)},setInk(A){if(!I)G.uniforms.ink.value.copy(A)},setGlyphGlitch(A,f,h,x){if(I)return!1;let p=G.uniforms.glyphGlitch.value;if(p.z===0&&h===0)return!1;if(p.x===A&&p.y===f&&p.z===h&&p.w===x)return!1;return p.set(A,f,h,x),!0},setScatter(A,{region:f="all",mode:h="scatter"}={}){if(I||!Number.isFinite(A))return!1;let x=F1.clamp(A,0,1),p=f==="crown"?1:0,y=h==="appear"?1:0,o=G.uniforms;if(x===o.dispersal.value&&p===o.crownOnly.value&&y===o.revealInPlace.value)return!1;return o.dispersal.value=x,o.crownOnly.value=p,o.revealInPlace.value=y,!0},setSize(A){if(I||!Number.isFinite(A)||A<=0||A===R)return!1;return R=A,w()},move(A,f,h){if(I||D===0||!Number.isFinite(A+f+h))return!1;if(L&&h-L.time>=jX)L=null;let x=L?Math.hypot(A-L.x,f-L.y):1/0;if(L&&x<0.5)return!1;let p=L?Math.max(h-L.time,0.012):0.03,y=L?A-L.x:0,o=L?f-L.y:0,a=Math.hypot(y,o)/p;if(!Y.add({x:A,y:f,fromX:L?.x??A,fromY:L?.y??f,time:h,strength:F1.clamp(0.25+a/1200,0.25,1.4)}))return!1;return L={x:A,y:f,time:h},!0},leave(){L=null},dispose(){if(I)return;I=!0,L=null,G.uniforms.activeBrushCount.value=0,U.dispose(),G.dispose(),K.dispose(),q.remove(E)}}}var CM=new Set(["neutral","smile","surprise","thoughtful"]);function hX($,J,Q=()=>{},{manifestUrl:Z,signal:W}={}){let K=null,X=!1,H="neutral",Y=-100,U=!1,G=[],E={changed:!1,active:!1},q=new AbortController,M=()=>q.abort(W?.reason);if(W?.aborted)M();else W?.addEventListener("abort",M,{once:!0});let O=()=>U||q.signal.aborted,F=()=>{if(!O())return;let _=Error("Expression loading was cancelled.");throw _.name="AbortError",_},N=(_)=>{if(!O())Q(_)};async function R(){if(F(),X)return;if(K)return K;return N({loading:!0,name:H}),K=(async()=>{if(F(),!Z)throw Error("An expression manifest URL is required.");let _=new URL(Z,import.meta.url),L=await fetch(_,{cache:"no-cache",signal:q.signal});if(F(),!L.ok)throw Error("Could not load expression manifest.");let k=await L.json();F();let P=$.geometry.attributes.position.count;if(k.version!==1||k.vertexCount!==P||!Array.isArray(k.targets))throw Error("Expression topology does not match the current head.");let C=new URL(k.buffer,L.url||_),S=await fetch(C,{cache:"no-cache",signal:q.signal});if(F(),!S.ok)throw Error("Could not load expression data.");let b=await S.arrayBuffer();F();let B=[],D=[];function I(w,A,f){if(!Number.isInteger(A)||A<0||A+f*w.BYTES_PER_ELEMENT>b.byteLength)throw Error("Invalid expression buffer range.");return new w(b,A,f)}for(let w of k.targets){if(!["smile","surprise","thoughtful","blink"].includes(w.name)||!Number.isInteger(w.count)||w.count>P||w.count<1)throw Error("Invalid expression target.");let A=I(Uint16Array,w.indices.byteOffset,w.count),f=I(Int16Array,w.position.byteOffset,w.count*3),h=I(Int16Array,w.normal.byteOffset,w.count*3);if(!(w.position.scale>0)||!(w.normal.scale>0)||!Number.isFinite(w.position.scale+w.normal.scale))throw Error("Invalid expression quantization scale.");let x=new Float32Array(P*3),p=new Float32Array(P*3);for(let y=0;y<A.length;y++){let o=A[y];if(o>=P)throw Error("Invalid expression vertex index.");for(let a=0;a<3;a++)x[o*3+a]=f[y*3+a]*w.position.scale*J,p[o*3+a]=h[y*3+a]*w.normal.scale}B.push(new H1(x,3)),D.push(new H1(p,3))}if(G=k.targets.map((w)=>w.name),new Set(G).size!==G.length||!["smile","surprise","thoughtful","blink"].every((w)=>G.includes(w)))throw Error("Missing expression target.");F(),$.geometry.morphAttributes.position=B,$.geometry.morphAttributes.normal=D,$.geometry.morphTargetsRelative=!0,$.updateMorphTargets(),$.morphTargetDictionary=Object.fromEntries(G.map((w,A)=>[w,A])),$.material.needsUpdate=!0,X=!0,N({loading:!1,name:H})})().catch((_)=>{if(K=null,!O())H="neutral",N({loading:!1,error:_,name:H});throw _}),K}return{async choose(_){if(O()||!CM.has(_))return;if(H=_,N({loading:!X&&_!=="neutral",name:_}),_!=="neutral")await R()},async blink(){if(O())return;await R(),F(),Y=performance.now()/1000},update(_,L){if(E.changed=!1,E.active=!1,O()||!X)return E;let k=L-Y,P=k<0.1?F1.smoothstep(k,0,0.1):1-F1.smoothstep(k,0.14,0.33);for(let C=0;C<G.length;C++){let S=G[C],b=$.morphTargetInfluences[C],B;if(S==="blink")B=k>=0&&k<=0.33?P:0,E.active||=k>=0&&k<0.34;else{let D=S===H?1:0;if(B=F1.damp(b,D,7.5,_),Math.abs(B-D)<0.0005)B=D;E.active||=B!==D}$.morphTargetInfluences[C]=B,E.changed||=B!==b}return E},dispose(){if(U)return;U=!0,q.abort(),W?.removeEventListener("abort",M),E.changed=!1,E.active=!1}}}var B9=Object.freeze([Object.freeze({name:"high",index:0,fps:60,dpr:1.5,glyphBudget:64000,sampleScale:2,brushLimit:16}),Object.freeze({name:"balanced",index:1,fps:60,dpr:1.5,glyphBudget:18000,sampleScale:1,brushLimit:12}),Object.freeze({name:"light",index:2,fps:60,dpr:1,glyphBudget:1e4,sampleScale:1,brushLimit:8}),Object.freeze({name:"minimum",index:3,fps:30,dpr:1,glyphBudget:6000,sampleScale:1,brushLimit:6})]);function IM($){let J=[...$].sort((Q,Z)=>Q-Z);return J[Math.max(0,Math.ceil(J.length*0.95)-1)]}function bX({coarse:$=!1,fixed:J}={}){let Q={high:0,balanced:1,light:2,low:2,minimum:3},Z=Object.prototype.hasOwnProperty.call(Q,J),W=Number(globalThis.navigator?.deviceMemory),K=Number(globalThis.navigator?.hardwareConcurrency),X=W>0&&W<=4&&K>0&&K<=4,H=Z?Q[J]:$?X?2:1:X?1:0,Y=Z?`fixed:${J}`:$?"coarse-pointer":X?"limited-device":"auto-default",U=NaN,G=NaN,E=-1/0,q=0,M=0,O=[],F=0,N=0,R=NaN;function _(){q=0,M=0,O=[]}function L(P){if(!Number.isFinite(P))P=globalThis.performance?.now?.()??Date.now();U=P+1500,G=P,F=0,N=0,_()}function k(P,C,S){return H=P,Y=S,E=C,F=0,N=0,U=C+500,_(),B9[H]}return{current(){return B9[H]},wake:L,observe(P,C,S){if(!Number.isFinite(P)||!Number.isFinite(C)||C<=0)return null;if(!Number.isFinite(U))L(P);if(Number.isFinite(G)&&P-G>1500&&C>750)return L(P),null;if(G=P,P<U)return null;if(q+=C,M++,O.push(Number.isFinite(S)&&S>=0?S:1/0),q<1200||M<20)return null;R=M*1000/q;let b=IM(O),B=q,D=B9[H].fps;if(_(),Z)return null;if(R<D*0.75){if(F++,N=0,F>=2&&H<B9.length-1&&P-E>=4000)return k(H+1,P,"sustained-low-fps")}else{if(F=0,R>D*0.94&&b<1000/D*0.5)N+=B;else N=0;if(H>0&&N>=25000&&P-E>=30000)return k(H-1,P,"sustained-headroom")}return null},getReport(){let P={quality:B9[H].name,qualityReason:Y};if(Number.isFinite(R))P.measuredFps=Math.round(R*10)/10;return P}}}var xX=Object.freeze([0,-0.82,-0.55]);var gX=`
  float headPoseWeight(vec3 rest){
    float r=length(vec2(rest.x/1.10,(rest.z+.365)/1.20));
    float gate=1.-smoothstep(1.,1.2,r);
    float cap=smoothstep(-1.6,-1.2,rest.y);
    return smoothstep(-2.1,-1.2,rest.y)*mix(gate,1.,cap);
  }
`;var pX={front:[0,0],quarter:[-0.95,Math.PI/36],profile:[-Math.PI/2,0],back:[Math.PI,0]},PM={changed:!1,active:!1},V1=($,J)=>Number.isFinite($)?$:J,lX=Object.freeze({brain:Object.freeze({center:Object.freeze([0,1.74,-0.08]),radii:Object.freeze([0.78,0.4,0.62])})});function uX($,J={}){if(!$?.append||!J.modelUrl)throw TypeError("Provide a host element and modelUrl.");let Q=new URL(J.modelUrl,$.ownerDocument.baseURI),Z=new URL(J.expressionsUrl||"./expressions.json",Q),W=J.coarsePointer??matchMedia("(pointer:coarse)").matches,K=J.reducedMotion??matchMedia("(prefers-reduced-motion:reduce)").matches,X=bX({coarse:W,fixed:J.quality}),H=X.current(),Y=!1,U=!1,G=!0,E=null,q="neutral",M=null,O=0,F=!1,N=1,R=1,_=0,L=!0,k=!0,P=0,C=0,S=0,b=0,B=null,D=H.glyphBudget,I=null,w=null,A=null,f=-1/0,h=0,x=!!J.autoRotate&&!K,p=0,y=0,o=J.surface==="clay"?"clay":"ascii",a=typeof J.view==="string"?pX[J.view]:null,Q0=a?.[0]??V1(J.view?.yaw,-0.95),X0=a?.[1]??V1(J.view?.pitch,Math.PI/36),L0=Q0,q0=X0,c=Q0,W0=X0,e=V1(J.view?.scale,0.84),F0=V1(J.view?.offsetX,0),N0=V1(J.view?.offsetY,0.22),_0=new AbortController,r0={signal:_0.signal},j=new SZ({alpha:!0,antialias:!1,powerPreference:W?"low-power":"default"});j.outputColorSpace=P8,j.setClearColor(0,0),j.autoClear=!1;let l0=j.domElement;l0.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",l0.setAttribute("aria-hidden","true"),$.append(l0);let j0=new k6,T0=new q7(-5,5,2.8,-2.8,0.1,50);T0.position.set(0,0,15),T0.lookAt(0,0,0);let V0=new H8;j0.add(V0);let a0=new d1({toneMapped:!1,uniforms:{encodeCrown:{value:1},gaze:{value:new g}},vertexShader:`
    #include <common>
    #include <morphtarget_pars_vertex>
    varying vec3 vNormal;
    varying float vHeight;
    uniform vec3 gaze;
    ${gX}
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
      vec3 neckPivot=vec3(${xX.map((d)=>d.toFixed(4)).join(",")});
      transformed=tilt*nod*turn*(transformed-neckPivot)+neckPivot;
      objectNormal=tilt*nod*turn*objectNormal;
      vNormal=normalize(normalMatrix*objectNormal);
      vHeight=transformed.y;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(transformed,1.);
    }`,fragmentShader:`
    precision highp float; varying vec3 vNormal; varying float vHeight; uniform float encodeCrown;
    void main() {
      vec3 n=normalize(vNormal);
      float key=max(dot(n,normalize(vec3(-.55,.8,1.))),0.);
      float fill=max(dot(n,normalize(vec3(.7,.1,.9))),0.);
      float shade=.14+key*.70+fill*.13;
      float mask=.5+.5*smoothstep(1.2,1.55,vHeight);
      gl_FragColor=vec4(vec3(.66,.70,.71)*shade,mix(1.,mask,encodeCrown));
      #include <colorspace_fragment>
    }`}),C0=new D8(1,1,{depthBuffer:!0}),O0=yX(C0.texture,{reduced:K,strongerGlyphs:W});O0.setQuality(H),O0.setSize(Math.max(2,V1(J.cellSize,5.4))),q1(J.ink||"#edeee5");function J1(d={}){if(!Y)J.onState?.({loaded:U,expression:q,quality:H.name,...d})}function q1(d){let J0=new y0(d).convertLinearToSRGB();O0.setInk(new g(J0.r,J0.g,J0.b))}function d0(d=!0){if(Y)return;if(L||=d,k=!0,document.hidden||!G||O||F)return;P=0,C=0,X.wake(performance.now()),O=requestAnimationFrame($0)}function T(){let d=O0.getSourceSize(H.sampleScale);if(C0.width!==d.width||C0.height!==d.height)C0.setSize(d.width,d.height),L=!0}function V(){if(Y)return;let d=Math.max(1,$.clientWidth),J0=Math.max(1,$.clientHeight),E0=Math.min(devicePixelRatio||1,H.dpr);if(d!==N||J0!==R||E0!==_)N=d,R=J0,_=E0,j.setPixelRatio(E0),j.setSize(N,R,!1);O0.resize(N,R,E0),T();let G0=2.8*N/R;T0.left=-G0,T0.right=G0,T0.updateProjectionMatrix(),V0.position.set(F0,N0,0),V0.scale.setScalar(e),d0(!0)}function m(d){if(!I)return!1;let J0=Math.min(1,(d-I.start)/600),E0=Math.min(6,Math.floor(J0*6));if(E0!==I.step){I.step=E0;let G0=F1.smoothstep(E0/6,0,1);D=Math.round(F1.lerp(I.from,I.to,G0)),O0.setQuality({glyphBudget:D}),T(),L=!0}if(J0>=1)I=null;return!!I}function r(){return{loaded:U,disposed:Y,surface:o,width:N,height:R,dpr:_,...O0.getStats(),...X.getReport(),frames:S,sourceFrames:b,animating:!!O||F,view:{yaw:Q0,pitch:X0,scale:e,offsetX:F0,offsetY:N0},dispersal:y}}function $0(d){if(O=0,Y||document.hidden||!G)return;let J0=1000/H.fps;if(P&&d+0.4<P||C&&d-C<J0*0.65-0.4){O=requestAnimationFrame($0);return}let E0=C?d-C:J0,G0=Math.min(0.07,E0/1000);if(C=d,P=P?P+J0:d+J0,P<d-0.4)P+=Math.ceil((d-P)/J0)*J0;F=!0,k=!1;let h0=performance.now();if(w)H=w,w=null,I={from:D,to:H.glyphBudget,start:d,step:-1},O0.setQuality({glyphBudget:D,brushLimit:H.brushLimit}),V();if(A!==null&&d-f>=32)O0.setSize(A),A=null,f=d,T(),L=!0;let v=m(d);if(x&&!B)p+=G0,L0=c-p*0.22,q0=W0+Math.sin(p*0.4)*0.025;let M0=Math.abs(Q0-L0)<0.0001?L0:F1.damp(Q0,L0,9,G0),U0=Math.abs(X0-q0)<0.0001?q0:F1.damp(X0,q0,9,G0);L||=M0!==Q0||U0!==X0,Q0=M0,X0=U0,V0.rotation.set(X0,Q0,0);let z0=E?.update(G0,d/1000)||PM;if(L||=z0.changed,o==="ascii"){if(a0.uniforms.encodeCrown.value=1,L)j.setRenderTarget(C0),j.clear(),j.render(j0,T0),b++,L=!1;O0.update(d/1000),j.setRenderTarget(null),j.clear(),j.render(O0.scene,O0.camera)}else a0.uniforms.encodeCrown.value=0,j.setRenderTarget(null),j.clear(),j.render(j0,T0),b++,L=!1;S++;let Z0=d>=h?X.observe(d,E0,performance.now()-h0):null;if(Z0)w=Z0,k=!0;if(F=!1,x||B||Q0!==L0||X0!==q0||z0.active||v||w||A!==null||o==="ascii"&&O0.isAnimating(d/1000)||L||k)O=requestAnimationFrame($0);else J1({idle:!0,stats:r()})}let i=new ResizeObserver(V);i.observe($);let B0=typeof IntersectionObserver==="function"?new IntersectionObserver((d)=>{if(G=d[0].isIntersecting,G)d0(!0);else if(O)cancelAnimationFrame(O),O=0}):null;B0?.observe($),document.addEventListener("visibilitychange",()=>{if(document.hidden){if(O)cancelAnimationFrame(O);O=0,O0.leave()}else d0(!0)},r0),l0.addEventListener("pointermove",(d)=>{let J0=l0.getBoundingClientRect();if(B)L0=B.yaw+(d.clientX-B.x)*0.008,q0=F1.clamp(B.pitch+(d.clientY-B.y)*0.004,-1.35,1.35),d0(!0);if(o==="ascii"&&O0.move((d.clientX-J0.left)/J0.width*N,(1-(d.clientY-J0.top)/J0.height)*R,performance.now()/1000))d0(!1)},r0),l0.addEventListener("pointerleave",()=>O0.leave(),r0),l0.addEventListener("pointerdown",(d)=>{if(J.pointerRotation===!1||W||d.pointerType==="mouse"&&d.button!==0)return;B={x:d.clientX,y:d.clientY,yaw:L0,pitch:q0},x=!1,l0.setPointerCapture(d.pointerId)},r0);let K0=()=>{B=null,d0(!1)};for(let d of["pointerup","pointercancel","lostpointercapture"])l0.addEventListener(d,K0,r0);V(),J1({loading:!0});function I0(d){d.scene.traverse((J0)=>{if(!J0.isMesh)return;J0.geometry.dispose();for(let E0 of Array.isArray(J0.material)?J0.material:[J0.material])E0.dispose()})}let S0=(async()=>{let d;try{let J0=await fetch(Q,{signal:_0.signal});if(!J0.ok)throw Error(`Could not load head (${J0.status}).`);if(d=await new gZ().parseAsync(await J0.arrayBuffer(),new URL(".",Q).href),Y)throw new DOMException("Head disposed.","AbortError");d.scene.updateMatrixWorld(!0);let E0=[];if(d.scene.traverse((t)=>{if(t.isMesh)E0.push(t)}),E0.length!==1)throw Error("This module requires the accepted single-mesh head asset.");let G0=E0[0],h0=G0.geometry.clone().applyMatrix4(G0.matrixWorld),v=new m1().setFromObject(d.scene),M0=v.getCenter(new g),U0=d.scene.userData,z0=V1(U0.alignmentHeight,v.max.y-v.min.y);if(!(z0>0))throw h0.dispose(),Error("Invalid head bounds.");let Z0=5.55/z0;if(Array.isArray(U0.alignmentCenter)&&U0.alignmentCenter.length===3&&U0.alignmentCenter.every(Number.isFinite))M0.fromArray(U0.alignmentCenter);h0.translate(-M0.x,-V1(U0.alignmentTop,v.max.y),-M0.z),h0.scale(Z0,Z0,Z0),h0.translate(0,2.6,0),M=new T1(h0,a0),M.frustumCulled=!1,V0.add(M),E=hX(M,Z0,(t)=>{q=t.name,J1({loading:t.loading,expression:t.name,error:t.error}),d0(!0)},{manifestUrl:Z,signal:_0.signal}),U=!0,J1({loading:!1}),d0(!0)}catch(J0){if(!Y)J1({loading:!1,error:J0}),J.onError?.(J0);throw J0}finally{if(d)I0(d)}})();S0.catch(()=>{});let H0={ready:S0,setView(d){if(Y)return;let J0=typeof d==="string"?pX[d]:null;if(typeof d==="string"&&!J0)throw RangeError("Unknown head view.");if(L0=J0?.[0]??V1(d.yaw,L0),q0=J0?.[1]??V1(d.pitch,q0),c=L0,W0=q0,p=0,typeof d==="object")e=Math.max(0.01,V1(d.scale,e)),F0=V1(d.offsetX,F0),N0=V1(d.offsetY,N0);if(d.immediate||K)Q0=L0,X0=q0,V0.rotation.set(X0,Q0,0);V()},setAppearance(d){if(Y)return;if(d.ink)q1(d.ink);if(Number.isFinite(d.cellSize))A=Math.max(2,Math.min(128,d.cellSize)),h=performance.now()+1200;if(d.surface){if(!["ascii","clay"].includes(d.surface))throw RangeError("Unknown surface.");o=d.surface,O0.leave(),L=!0}d0(!1)},setScatter(d,J0){if(!Y&&Number.isFinite(d))y=F1.clamp(d,0,1),O0.setScatter(y,J0),d0(!1)},setGlyphGlitch({x:d=0,y:J0=0,strength:E0=0,seed:G0=0}={}){if(!Y&&O0.setGlyphGlitch(V1(d,0),V1(J0,0),F1.clamp(V1(E0,0),0,1),V1(G0,0)))d0(!1)},setGaze({yaw:d=0,pitch:J0=0,roll:E0=0}={}){if(Y)return;a0.uniforms.gaze.value.set(F1.clamp(V1(d,0),-0.4,0.4),F1.clamp(V1(J0,0),-0.16,0.16),F1.clamp(V1(E0,0),-0.16,0.16)),d0(!0)},projectPoints(d){return V0.updateMatrixWorld(!0),T0.updateMatrixWorld(!0),d.map((J0)=>{let E0=new g().fromArray(J0).applyMatrix4(V0.matrixWorld),G0=E0.z;return E0.project(T0),{x:(E0.x*0.5+0.5)*N,y:(0.5-E0.y*0.5)*R,depth:G0,visible:E0.z>=-1&&E0.z<=1}})},setAutoRotate(d){if(!Y)x=!!d&&!K,d0(!0)},pause(){H0.setAutoRotate(!1)},resume(){H0.setAutoRotate(!0)},async setExpression(d){if(await S0,Y)throw new DOMException("Head disposed.","AbortError");await E.choose(d),d0(!0)},async blink(){if(await S0,Y)throw new DOMException("Head disposed.","AbortError");await E.blink(),d0(!0)},getStats:r,dispose(){if(Y)return;if(Y=!0,_0.abort(),O)cancelAnimationFrame(O);O=0,i.disconnect(),B0?.disconnect(),E?.dispose(),M?.geometry.dispose(),a0.dispose(),O0.dispose(),C0.dispose(),j.dispose(),l0.remove()}};return H0}function f6($,J={}){let Q=document.createElementNS("http://www.w3.org/2000/svg",$);for(let[Z,W]of Object.entries(J))Q.setAttribute(Z,W);return Q}function mX({host:$,links:J,connectors:Q,points:Z}){let W=matchMedia("(prefers-reduced-motion: reduce)"),K=null;J.forEach((Y,U)=>{let G=()=>{if(W.matches||document.body.dataset.phase!=="head")return;if(K?.index===U)return;K?.connector.classList.remove("is-signaling");let E=Q[U].group;E.classList.add("is-signaling"),K={index:U,connector:E,time:performance.now(),point:null,seed:Math.random()}};Y.addEventListener("pointerenter",(E)=>{if(E.pointerType!=="touch")G()}),Y.addEventListener("focus",()=>{if(Y.matches(":focus-visible"))G()})});function X(Y){if(!K)return;K.connector.classList.remove("is-signaling"),K=null,Y.setGlyphGlitch()}function H(Y,U){if(!K)return;let G=U-K.time;if(G>=575||W.matches){X(Y);return}if(G<320){Y.setGlyphGlitch();return}K.point??=Q[K.index].point??Y.projectPoints([Z[K.index]])[0];let E=(G-320)/255,q=0.83*Math.sin(Math.PI*E);Y.setGlyphGlitch({x:K.point.x/$.clientWidth,y:1-K.point.y/$.clientHeight,strength:q,seed:K.seed+Math.floor(G/40)*0.11})}return{update:H,clear:X}}function dX($,J){let Q=$.querySelector('[data-section="more"]'),Z=document.createElement("div");Z.id="cover-directory",Z.className="cover-directory",Z.hidden=!0,Z.innerHTML=J,$.append(Z),Q.setAttribute("aria-controls",Z.id),Q.setAttribute("aria-expanded","false");function W(K){Z.hidden=!K,Q.setAttribute("aria-expanded",String(K))}return Q.addEventListener("click",(K)=>{K.stopPropagation();let X=Z.hidden;if(W(X),X&&K.detail===0)Z.querySelector("button, a").focus()}),Z.addEventListener("click",(K)=>{if(K.target.closest("[data-enable-tilt]")||!K.target.closest("button, a"))return;W(!1),Q.focus({preventScroll:!0})}),$.addEventListener("focusout",(K)=>{if(K.relatedTarget&&!$.contains(K.relatedTarget))W(!1)}),$.addEventListener("keydown",(K)=>{if(K.key!=="Escape"||Z.hidden)return;K.preventDefault(),K.stopPropagation(),W(!1),Q.focus({preventScroll:!0})}),document.addEventListener("click",(K)=>{if(!$.contains(K.target))W(!1)}),()=>W(!1)}function AM($,J,Q){let Z=document.createElement("canvas");Z.width=$,Z.height=J;let W=Z.getContext("2d");if(!W)return null;let K=W.createImageData($,J),X=Math.max(0,$/2-Q),H=J/2-Q,Y=Q/2;for(let U=0;U<J;U++)for(let G=0;G<$;G++){let E=G+0.5-$/2,q=U+0.5-J/2,M=Math.sign(E)*Math.max(0,Math.abs(E)-X),O=Math.sign(q)*Math.max(0,Math.abs(q)-H),F=Math.hypot(M,O),N=Q-F,R=N<0?0:Math.max(0,1-N/Y)**1.8,_=(U*$+G)*4;K.data[_]=128-R*M/Math.max(1,F)*123,K.data[_+1]=128-R*O/Math.max(1,F)*123,K.data[_+3]=255}return W.putImageData(K,0,0),Z.toDataURL()}function cX($){if(!/Chrom(?:e|ium)\//.test(navigator.userAgent)||matchMedia("(pointer: coarse), (prefers-reduced-transparency: reduce)").matches)return;let J=f6("svg",{width:0,height:0,"aria-hidden":"true"}),Q=f6("defs");J.classList.add("cover-lens-definitions"),J.append(Q),$.prepend(J);let Z=[...$.querySelectorAll('.cover-topbar-group, .cover-menu > [data-section="more"], #go, .cover-directory')],W=new Map(Z.map((X,H)=>{let Y=f6("filter",{id:`cover-glass-${H}`,filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"});return Q.append(Y),[X,Y]})),K=new ResizeObserver((X)=>{for(let{target:H}of X){let Y=W.get(H),U=H.offsetWidth,G=H.offsetHeight;if(!U||!G||Y.getAttribute("width")===String(U)&&Y.getAttribute("height")===String(G))continue;let E=H.classList.contains("cover-directory"),q=AM(U,G,E?22:G/2);if(!q)continue;for(let[M,O]of Object.entries({x:0,y:0,width:U,height:G}))Y.setAttribute(M,O);Y.replaceChildren(f6("feImage",{href:q,width:U,height:G,result:"rim",preserveAspectRatio:"none"}),f6("feDisplacementMap",{in:"SourceGraphic",in2:"rim",scale:E?10:G*0.23,xChannelSelector:"R",yChannelSelector:"G",result:"lens"}),f6("feGaussianBlur",{in:"lens",stdDeviation:0.55})),H.style.setProperty("--cover-glass-lens",`url(#${Y.id})`)}});Z.forEach((X)=>K.observe(X)),addEventListener("pagehide",()=>K.disconnect(),{once:!0})}function z9($){$.beginPath(),$.moveTo(9.2,24),$.lineTo(11.8,20.7),$.bezierCurveTo(9.5,20.7,7.8,19.8,7.8,18.4),$.lineTo(8.1,17.2),$.lineTo(6.8,16.1),$.lineTo(8,15.2),$.lineTo(7.5,14.1),$.lineTo(5.6,13.5),$.quadraticCurveTo(4.9,13.2,5.8,12.2),$.lineTo(8.4,8.9),$.bezierCurveTo(8.5,5.6,11.6,2.2,16.4,2.2),$.bezierCurveTo(22.1,2.2,25.2,5.7,25.2,10.1),$.bezierCurveTo(25.2,14.6,22.6,16.3,20.7,18.4),$.lineTo(20.9,21.1),$.lineTo(24.4,24),$.closePath()}function F7($){z9($),$.moveTo(9.1,9.7),$.quadraticCurveTo(10.7,9.2,12.4,10.5),$.quadraticCurveTo(10.6,10.6,9.1,10.9),$.closePath(),$.fill("evenodd")}function HJ($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.stroke()}var lZ=[{id:"bust-solid",name:"Силуэт",draw:F7},{id:"bust-frame",name:"Портрет в кадре",draw($){$.save(),$.translate(4.2,2.9),$.scale(0.78,0.78),F7($),$.restore(),$.lineWidth=1.1,HJ($,[[4.5,8],[4.5,2.5],[11,2.5]]),HJ($,[[27.5,8],[27.5,2.5],[21,2.5]]),HJ($,[[4.5,18],[4.5,23.5],[11,23.5]]),HJ($,[[27.5,18],[27.5,23.5],[21,23.5]])}},{id:"bust-scan",name:"Портрет из полос",draw($){$.save(),z9($),$.clip();for(let[J,Q]of[[2.2,1.35],[5.1,1.55],[8.2,1.9],[11.7,2.3],[15.5,1.7],[18.6,1.8],[21.9,2.1]])$.fillRect(4,J,24,Q);$.restore()}},{id:"bust-dissolve",name:"Портрет в движении",width:38,draw($){$.save(),$.beginPath(),$.moveTo(1,0),$.lineTo(21.8,0),$.lineTo(21.8,7.2),$.lineTo(18.8,7.2),$.lineTo(18.8,12.4),$.lineTo(21.1,12.4),$.lineTo(21.1,16.1),$.lineTo(18,16.1),$.lineTo(18,20.7),$.lineTo(21.2,20.7),$.lineTo(21.2,26),$.lineTo(1,26),$.closePath(),$.clip(),F7($),$.restore(),$.globalAlpha=0.9,$.fillRect(23.7,3.5,2.2,2.2),$.fillRect(21.1,8.5,2.7,2.7),$.fillRect(26.2,11.8,2.3,2.3),$.fillRect(21.5,17.5,2.4,2.4),$.fillRect(25.5,21,1.8,1.8),$.globalAlpha=0.55,$.fillRect(29,6.8,1.6,1.6),$.fillRect(32,12.3,1.4,1.4),$.fillRect(35.1,13.3,1,1),$.fillRect(28.1,16.9,1.5,1.5),$.globalAlpha=1}},{id:"bust-outline",name:"Контур и отражение",draw($){$.lineWidth=1.1,z9($),$.stroke(),$.globalAlpha=0.57,$.beginPath(),$.moveTo(22.2,2.5),$.bezierCurveTo(27.3,3.8,29.4,8.7,28,13),$.bezierCurveTo(27.2,15.3,25.8,17.1,24.5,18.4),$.lineTo(24.8,20.7),$.lineTo(28.2,24),$.stroke(),$.globalAlpha=1}},{id:"bust-shift",name:"Сдвиг силуэта",draw($){$.save(),$.beginPath(),$.moveTo(0,0),$.lineTo(32,0),$.lineTo(32,10.7),$.lineTo(0,17),$.closePath(),$.clip(),$.translate(2.6,-0.7),F7($),$.restore(),$.save(),$.beginPath(),$.moveTo(0,19.1),$.lineTo(32,12.8),$.lineTo(32,26),$.lineTo(0,26),$.closePath(),$.clip(),F7($),$.restore()}}];function c1($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.closePath(),$.fill()}function YJ($,J){for(let[Q,Z,W]of J)$.beginPath(),$.arc(Q,Z,W,0,Math.PI*2),$.fill()}var uZ=[{id:"velocity-pulse",name:"Импульс",width:43,draw($){c1($,[[21,4],[40,13],[21,22],[25,13]]),c1($,[[10,9],[23,9],[25,13],[8,13]]),c1($,[[14,16],[24,16],[22.5,19],[12,19]]),$.fillRect(3,10.5,3,2.5),$.fillRect(6,16.5,2.5,2.5)}},{id:"velocity-orbit",name:"Орбита частиц",width:40,draw($){YJ($,[[32.4,7.2,2.75],[28.3,5.2,1.5],[24.3,4.6,1.3],[20.4,5.1,1.15],[16.8,6.4,1],[13.4,8.2,0.85],[10.3,10.6,0.85],[7.2,13.9,0.95],[6.7,17.4,1.05],[8.7,20.3,1.2],[12.7,21.7,1.35],[17.4,21.9,1.5],[22.1,20.7,1.65],[27.2,18.2,1.95],[31.6,14.8,2.2]])}},{id:"velocity-trajectory",name:"Траектория",width:46,draw($){$.beginPath(),$.moveTo(11,17),$.bezierCurveTo(20,13,29,4,43,4.7),$.bezierCurveTo(36,9,35,13.3,30,16.8),$.bezierCurveTo(25.5,20,19,20.2,11,17),$.closePath(),$.fill(),c1($,[[10,19.7],[19.2,21.5],[13.2,22.6],[7.4,21.6]]),YJ($,[[5.5,18.4,1.05],[2.5,20.8,0.7]])}},{id:"velocity-stream",name:"Поток",width:43,draw($){c1($,[[16,4.3],[39,4.3],[35,8],[12,8]]),c1($,[[14,10.7],[35,10.7],[31,14.4],[10,14.4]]),c1($,[[10,17.2],[29,17.2],[25,20.9],[6,20.9]]),c1($,[[10,4.5],[12.5,4.5],[8.6,8],[6.1,8]]),c1($,[[7,10.8],[9.5,10.8],[5.6,14.4],[3.1,14.4]]),c1($,[[4.7,17.2],[2.1,19.7],[1.8,17.2]])}},{id:"velocity-shards",name:"Осколки",width:42,draw($){c1($,[[36.9,3.2],[40,12.3],[22.8,17.1],[26.3,8.8]]),c1($,[[28.8,15.5],[24.5,22.7],[17.2,22],[21.1,17.4]]),c1($,[[16.8,7.3],[23.9,7.3],[18.7,12.3],[14,12.3]]),c1($,[[10.6,14.1],[17.7,14.1],[14.5,17.8],[7.4,17.8]]),YJ($,[[12.4,8.1,1],[5.7,13.1,1.05],[3.4,18.3,0.85],[10.8,21.9,0.85]])}},{id:"velocity-vortex",name:"Вихрь",width:38,draw($){$.beginPath(),$.moveTo(10,11.2),$.bezierCurveTo(10.8,3.3,25.4,1.8,33.6,8),$.bezierCurveTo(23.2,4.8,16.5,8.4,16.3,14.3),$.closePath(),$.fill(),$.beginPath(),$.moveTo(27.6,14.7),$.bezierCurveTo(27.1,22.6,11.9,24.5,3.9,18.6),$.bezierCurveTo(14.2,21.4,21,17.8,21,11.7),$.closePath(),$.fill(),YJ($,[[5.5,10.2,1.1],[3.1,13.7,0.8],[32.6,15.1,1.1],[35.1,12.2,0.8]])}}];var TM=["10001 10001 10001","10001 10001 11001","10001 10001 11001","10101 10101 10101","10101 10101 10011","11011 11011 10011","01010 01010 10001"],k9=[[3,5],[9,21],[16,10],[23,21],[29,5]],nX=[[26,24],[22,20],[22,16],[25,11],[25,8],[23,4],[19,2.5],[13,2.5],[8,5],[7,9],[3.5,13],[7,14],[7,16],[9,17],[8,19],[11,21],[15,21],[16,24]];function S1($,J,Q,Z=1.1){$.beginPath(),$.arc(J,Q,Z,0,Math.PI*2),$.fill()}function O1($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.stroke()}function mZ($,J){for(let Q=1;Q<J.length;Q+=1){let[Z,W]=J[Q-1],[K,X]=J[Q],H=Math.ceil(Math.hypot(K-Z,X-W)/3);for(let Y=0;Y<H;Y+=1)S1($,Z+(K-Z)*Y/H,W+(X-W)*Y/H)}S1($,...J.at(-1))}function qJ($,J=!1){TM.forEach((Q,Z)=>{Array.from(Q).forEach((W,K)=>{if(W!=="1")return;let X=3+K*3.6,H=2.2+Z*3.6;if(J)$.fillRect(X-1.65,H-1.65,3.3,3.3);else S1($,X,H)})})}function E8($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.closePath(),$.fill()}function dZ($,J=!1){let Q=[[0,4],[3.7,4],[7.8,16],[11.6,7.7],[15.4,16],[19.5,4],[23.2,4],[17,22],[14,22],[11.6,16.6],[9.2,22],[6.2,22]];for(let Z of[2,26.4])E8($,Q.map(([W,K])=>[Z+W,K]));if(E8($,[[52,22],[52,4],[55.1,4],[66.6,16.3],[66.6,J?11:4],[70.2,J?11:4],[70.2,22],[67.2,22],[55.6,9.7],[55.6,22]]),J)$.fillRect(66.6,8,1.6,1.6),$.fillRect(69,6,1.5,1.5),$.fillRect(71.1,3.6,1.3,1.3)}function cZ($,J,Q,Z,W){for(let K of J)$.fillText(K,Q,Z),Q+=$.measureText(K).width+W}var wM={id:"default",width:64,draw:qJ},iX=[{id:"dots",name:"WWN со следом",width:68,draw($){$.save(),$.translate(2,-0.8),$.globalAlpha=0.31,qJ($),$.restore(),qJ($)}},{id:"pixel",name:"Пиксельный WWN",width:64,draw:($)=>qJ($,!0)},{id:"constellation",name:"Созвездие W",draw:($)=>mZ($,k9)},{id:"trace",name:"Проводник",draw($){$.lineWidth=1.6,O1($,k9),S1($,...k9[0],1.75),S1($,...k9.at(-1),1.75)}},{id:"brackets",name:"W в скобках",width:42,draw($){O1($,[[9,4],[3,4],[3,22],[9,22]]),O1($,[[33,4],[39,4],[39,22],[33,22]]),$.lineWidth=2,O1($,[[9,8],[14,18],[21,10],[28,18],[33,8]])}},{id:"node",name:"Узел",draw($){O1($,[[16,12],[8,4],[3,4]]),O1($,[[16,12],[24,4],[29,4]]),O1($,[[16,12],[16,22]]);for(let[J,Q]of[[3,4],[29,4],[16,22]])S1($,J,Q,1.45);S1($,16,12,2.6)}},{id:"signal",name:"Штриховой знак",draw($){$.lineWidth=1.9,$.lineCap="butt",$.setLineDash([3,2.4]),O1($,k9),O1($,[[10.5,23],[16,14],[21.5,23]])}},{id:"profile",name:"Контур головы",draw($){O1($,nX),S1($,10,11,0.95),O1($,[[6,24],[16,24]]),O1($,[[26,24],[29,24]])}},{id:"face-dots",name:"Точечный профиль",draw($){mZ($,nX);for(let[J,Q,Z]of[[10,10,0.95],[14,7,0.65],[18,6,0.7],[21,8,0.7],[18,10,0.75],[19,14,0.85],[14,14,0.65],[12,17,0.75],[22,11,0.7]])S1($,J,Q,Z)}},{id:"scatter",name:"Распад W",width:42,draw($){mZ($,[[3,5],[9,21],[16,10],[23,21],[26.5,11.5]]);for(let[J,Q,Z]of[[27,8,1.1],[28,4,0.8],[30,6,0.65],[32,3,0.75],[33,8,0.55],[35,12,0.85],[31,13,0.65],[30,18,0.9],[33,21,0.65],[38,5,0.6],[39,9,0.45],[38,16,0.65]])S1($,J,Q,Z)}}],aX=[{id:"geometric",name:"Плотный WWN",width:74,draw:dZ},{id:"studio-signature",name:"Подпись студии",width:118,draw($){$.save(),$.translate(0,2.6),$.scale(0.8,0.8),dZ($),$.restore(),$.fillRect(63,5,0.7,16),$.font="600 7px Arial, sans-serif",cZ($,"IT",70,11.2,0.75),cZ($,"SOLUTIONS",70,19.5,0.68)}},{id:"serif",name:"WWN с засечками",width:69,draw($){$.font="bold 22px Georgia, serif",cZ($,"WWN",1.3,21,-0.8)}},{id:"pixel-edge",name:"WWN с пиксельным краем",width:76,draw:($)=>dZ($,!0)}],rX=[{id:"disc-fragment",name:"Диск и частица",draw($){$.save(),$.beginPath(),$.arc(13.2,13,10.5,0,Math.PI*2),$.clip(),E8($,[[2,2],[26,2],[26,8],[21,8],[21,11],[18.2,11],[18.2,15],[21,15],[21,18],[26,18],[26,24],[2,24]]),$.restore(),$.fillRect(25,11.2,3.6,3.6)}},{id:"facets",name:"Две плоскости",draw($){E8($,[[4,10.5],[17.5,2.5],[30,2.5],[16.5,10.5]]),E8($,[[2,14.5],[16.5,14.5],[28.5,7.3],[28.5,15],[15,23.5],[2,23.5]])}},{id:"aperture",name:"Просвет",draw($){$.beginPath(),$.moveTo(16,1.6),$.lineTo(30,13),$.lineTo(16,24.4),$.lineTo(2,13),$.closePath(),$.moveTo(10.5,15.5),$.lineTo(15.2,8.2),$.lineTo(22.5,10.5),$.lineTo(17.8,17.8),$.closePath(),$.fill("evenodd")}},{id:"layers",name:"Слои",draw($){E8($,[[5,3],[29,3],[25,8],[1,8]]),E8($,[[8,10.5],[27,10.5],[23,15.5],[4,15.5]]),E8($,[[11,18],[25,18],[21,23],[7,23]])}}],tX=[{id:"frame-open",name:"Открытая рамка",draw($){$.lineWidth=1.6,$.lineCap="butt",O1($,[[21,3],[5,3],[5,23],[25,23],[25,12]]),$.fillRect(23.4,2.2,3.2,3.2)}},{id:"frame-offset",name:"Двойной кадр",width:34,draw($){$.lineCap="butt",O1($,[[26,17],[26,6],[4,6],[4,23],[21,23]]),O1($,[[9,10],[9,3],[30,3],[30,20],[14,20]])}},{id:"frame-medallion",name:"Профиль в круге",draw($){S1($,16,13,11.5),$.save(),$.globalCompositeOperation="destination-out",$.translate(4,2.7),$.scale(0.79,0.86),z9($),$.fill(),$.restore()}},{id:"frame-exit",name:"Выход из кадра",width:39,draw($){$.lineWidth=1.2,O1($,[[26,3],[4,3],[4,23],[26,23]]),$.save(),$.translate(16.5,2.25),$.scale(0.87,0.92),F7($),$.restore()}},{id:"frame-fold",name:"Складка",draw($){E8($,[[3,3],[16,3],[12,22.6],[3,18.7]]),E8($,[[19.2,3],[28,7],[28,23],[15.2,23]])}},{id:"frame-fragment",name:"Осколок рамки",draw($){$.lineWidth=1.8,$.lineCap="butt",O1($,[[19.5,3.2],[5.1,3.2],[5.1,22.8],[24.7,22.8],[24.7,9.1]]),E8($,[[23,2.1],[28.5,2.1],[28.5,7.6]])}}],eX=[{id:"model-head",name:"Портрет с обложки",image:"./sculpt/header-head-ivory.webp",draw($,J){$.drawImage(J,3,0,26,26)}},{id:"model-frame",name:"Портрет в кадре",image:"./sculpt/header-head-cut.webp",draw($,J){$.drawImage(J,4.5,1.5,23,23),$.lineWidth=0.85,$.lineCap="butt",O1($,[[4.1,8],[4.1,2.5],[10.8,2.5]]),O1($,[[21.2,23.5],[27.9,23.5],[27.9,18]])}},{id:"model-grains",name:"Портрет и частицы",width:38,image:"./sculpt/header-head-cut.webp",draw($,J){$.save(),$.clip(new Path2D("M0 0H21V6H19.5V12H23V17H19.7V21H22V26H0Z")),$.drawImage(J,0,0,26,26),$.restore();for(let[Q,Z,W]of[[23,4.5,1.3],[25.5,9,1.8],[28.5,13.5,1.6],[23.5,16,1.6],[31.5,11.6,1.1],[34,17.5,0.9]])$.fillRect(Q,Z,W,W)}}],iZ="M27 38l-5 5a10 10 0 0 1-14-14l12-12a10 10 0 0 1 14 0",aZ="M37 26l5-5a10 10 0 0 1 14 14L44 47a10 10 0 0 1-14 0",rZ="M22 42l20-20",v6=iZ+aZ+rZ;function UJ($,J=!1,Q=1,Z=-2.1){if($.save(),$.translate(Q,Z),$.scale(0.48,0.48),$.lineWidth=4,J)$.setLineDash([0.1,5.1]);$.stroke(new Path2D(v6)),$.restore()}var $H=[{id:"link-classic",name:"Исходная форма",draw:UJ},{id:"link-dots",name:"Точечный контур",draw:($)=>UJ($,!0)},{id:"link-grains",name:"Частицы на краю",width:38,draw($){$.save(),$.beginPath(),$.rect(0,0,24.3,26),$.clip(),UJ($),$.restore();for(let[J,Q,Z]of[[25.3,10,1.7],[28.5,11.3,1.55],[26.1,15,1.7],[30.8,15,1.35],[34.5,13.1,1.1],[32.3,18,0.9]])$.fillRect(J,Q,Z,Z)}},{id:"link-trail",name:"След в движении",width:41,draw($){UJ($),$.globalAlpha=0.76,O1($,[[29.7,9.2],[35,9.2]]),O1($,[[31.7,12.9],[38.6,12.9]]),$.globalAlpha=0.55,S1($,31.5,17,0.9),S1($,36.4,17,0.65),$.globalAlpha=1}}],GJ;function nZ(){if(GJ)return GJ;let $=new DOMMatrix([0.48,0,0,0.48,1,-2.1]),J=(H)=>{let Y=new Path2D;return Y.addPath(new Path2D(H),$),Y},Q=J(v6),Z=J(iZ+rZ),W=J(aZ),K=document.createElement("canvas").getContext("2d");K.lineWidth=4.25,K.lineCap="round",K.lineJoin="round";let X=(H,Y,U=0)=>{let G=[];for(let E=2.2;E<25;E+=Y)for(let q=2.2+U;q<31;q+=Y)if(K.isPointInStroke(H,q,E))G.push({x:q,y:E});return G};return GJ={front:Z,dots:X(Q,2),rearDots:X(W,1.9,0.45)},GJ}var JH=[{id:"link-flat-dot-field",name:"Сетка точек",draw($){for(let{x:J,y:Q}of nZ().dots)S1($,J,Q,0.77)}},{id:"link-flat-solid-dot",name:"Цельное звено и растр",draw($){let{front:J,rearDots:Q}=nZ();for(let{x:Z,y:W}of Q)S1($,Z,W,0.71);$.lineWidth=3.8,$.stroke(J)}},{id:"link-flat-wave",name:"Волна по знаку",animate:!0,draw($,J=0){let Q=Math.sin(Math.PI*J);for(let{x:Z,y:W}of nZ().dots){let K=(Z/32-J)*6,X=Q*Math.exp(-(K*K));$.fillRect(Z-0.7+X*1.2,W-0.7-X*0.85,1.4,1.4)}}}],sZ;function SM(){if(sZ)return sZ;let $=[],J=document.createElementNS("http://www.w3.org/2000/svg","path");for(let[Q,Z]of[[iZ,8],[aZ,8],[rZ,4]]){J.setAttribute("d",Q);let W=J.getTotalLength();for(let K=0;K<=Z;K+=1){let{x:X,y:H}=J.getPointAtLength(W*K/Z),Y={x:1+X*0.48,y:-2.1+H*0.48};if(!$.some((U)=>Math.hypot(U.x-Y.x,U.y-Y.y)<2.35))$.push(Y)}}return sZ=$,$}function NJ($,J){for(let{x:Q,y:Z}of SM())J($,Q,Z)}function jM($,J=0){let Q=new Path2D(v6),Z=Math.sin(Math.PI*J);$.lineWidth=6.8,NJ($,(W,K,X)=>{let H=(K/32-J)*5,Y=Z*Math.exp(-(H*H));W.save(),W.translate(K,X),W.rotate(Y*1.2),W.scale(0.058,0.058),W.translate(-32,-32),W.stroke(Q),W.restore()})}var QH=[{id:"link-modular-disc",name:"Круги",draw:($)=>NJ($,(J,Q,Z)=>S1(J,Q,Z,1.24))},{id:"link-modular-ring",name:"Кольца",draw($){$.lineWidth=0.55,NJ($,(J,Q,Z)=>{J.beginPath(),J.arc(Q,Z,1.03,0,Math.PI*2),J.stroke()})}},{id:"link-modular-square",name:"Квадраты",draw:($)=>NJ($,(J,Q,Z)=>J.fillRect(Q-1.15,Z-1.15,2.3,2.3))},{id:"link-modular-repeat",name:"Повторы знака",animate:!0,draw:jM}],y1=23,MJ=24/y1,sX=new WeakMap,EJ;function oX($){let J=sX.get($);if(J)return J;let Q=document.createElement("canvas");Q.width=y1,Q.height=y1;let Z=Q.getContext("2d"),W=1.25,K=y1-W*2;Z.drawImage($,W,W,K,K);let X=Z.getImageData(0,0,y1,y1).data,H=Array.from({length:y1*y1},(Y,U)=>Math.pow(X[U*4+3]/255,0.82));return sX.set($,H),H}function fM(){if(EJ)return EJ;let $=new Path2D;$.addPath(new Path2D(v6),new DOMMatrix([0.37,0,0,0.37,0.9,0.9]));let J=document.createElement("canvas").getContext("2d");return J.lineWidth=3.4,J.lineCap="round",J.lineJoin="round",EJ=Array.from({length:y1*y1},(Q,Z)=>{let W=1+(Z%y1+0.5)*MJ,K=1+(Math.floor(Z/y1)+0.5)*MJ;return J.isPointInStroke($,W,K)?1:0}),EJ}function oZ($,J,Q,Z=!1){let W=["·",":","+","x","*","#","@"],K=Math.sin(Math.PI*Q);if(Z)$.textAlign="center",$.textBaseline="middle";J.forEach((X,H)=>{let Y=H%y1,U=Math.floor(H/y1),G=1+(Y+0.5)*MJ,E=1+(U+0.5)*MJ,q=(Y/y1+U/y1*0.28-Q*1.28)*7,M=K*Math.exp(-(q*q)),O=Math.min(1,X+M*0.28);if($.globalAlpha=0.23+0.77*O,Z)$.font=`600 ${0.48+O*0.78}px monospace`,$.fillText(W[Math.round(O*(W.length-1))],G,E+0.06);else S1($,G+M*X*0.28,E,0.11+0.34*O)}),$.globalAlpha=1}var ZH=[{id:"model-field-dots",name:"Портрет из точек",width:26,image:"./sculpt/header-head-cut.webp",animate:!0,duration:920,draw($,J,Q){oZ($,oX(J),Q)}},{id:"model-field-ascii",name:"Портрет из ASCII",width:26,image:"./sculpt/header-head-cut.webp",animate:!0,duration:920,draw($,J,Q){oZ($,oX(J),Q,!0)}},{id:"link-field-dots",name:"Звенья в квадрате",width:26,animate:!0,duration:920,draw($,J){oZ($,fM(),J)}}],vM={id:"link-block",name:"Угловатые звенья",width:34,draw($){let J=[[15.6,16],[11.1,20.5],[7.1,20.5],[3.9,17.3],[3.9,13.6],[12.3,5.2],[16.6,5.2],[19.1,7.7]];$.lineWidth=4.35,$.lineCap="butt",$.lineJoin="miter",O1($,J),O1($,J.map(([Q,Z])=>[34-Q,26-Z])),E8($,[[9.6,17.8],[21.9,5.5],[25,8.6],[12.7,20.9]])}},yM=[{id:"ribbon",name:"Лента",width:42,draw($){let J=new Path2D("M2 14C2 8.9 5.8 5.4 11.2 5.4C17.2 5.4 20.8 8.9 24.1 13.1C26.4 16.1 28.5 18.6 31.6 18.6C34 18.6 35.4 17.3 36.2 15.5L39 18C37.7 20.9 35 22.6 31.6 22.6C26.5 22.6 23.2 19.6 20 15.4C17.4 12.1 14.8 9.3 11.2 9.3C8.2 9.3 6.3 11.2 6.3 14C6.3 16.6 8.1 18.4 10.9 18.4C12.8 18.4 14.4 17.4 15.8 16.2L18.1 19.2C16 21.4 13.7 22.4 10.9 22.4C5.7 22.4 2 18.8 2 14Z");$.fill(J),$.translate(42,26),$.rotate(Math.PI),$.fill(J)}},{id:"arc-gap",name:"Просвет",width:32,draw($){$.fill(new Path2D("M4 13C4 6.8 9.1 2.8 15.2 2.8C20.3 2.8 24.3 5.1 26.3 8.4C22.3 7.2 19.3 8 16.6 10.2C13 13 11.3 17.1 5.1 17.5C4.4 16.2 4 14.6 4 13ZM28 13C28 19.2 22.9 23.2 16.8 23.2C11.7 23.2 7.7 20.9 5.7 17.6C9.7 18.8 12.7 18 15.4 15.8C19 13 20.7 8.9 26.9 8.5C27.6 9.8 28 11.4 28 13Z"))}}],hM=[...iX,...aX,...rX,...lZ,...tX,...uZ,...eX,...$H,...JH,...QH,...ZH,vM,...yM],_8=($)=>$.map(({id:J,name:Q})=>({id:J,name:Q})),yD=_8(iX),hD={name:"Знак-связь",marks:_8(JH)},bD={name:"Модули знака-связи",marks:_8(QH)},xD={name:"Поле частиц",marks:_8(ZH)},gD=[{id:"cover-portraits",name:"Голова с обложки",marks:_8(eX)},{id:"site-links",name:"Знак-связь с сайта",marks:_8($H)}],pD=[{id:"portraits",name:"Портрет",marks:_8(lZ)},{id:"frames",name:"Рамки",marks:_8(tX)},{id:"motion",name:"Движение и частицы",marks:_8(uZ)},{id:"symbols",name:"Геометрия",marks:_8(rX)},{id:"wordmarks",name:"Подписи WWN",marks:_8(aX)}];function WH($,J,Q=2,Z){let W=hM.find((U)=>U.id===$)??wM,K=document.createElement("canvas");K.dataset.logo=W.id,K.setAttribute("aria-hidden","true"),K.width=(W.width??32)*Q,K.height=26*Q;let X=K.getContext("2d");if(!X)return null;X.scale(Q,Q),X.fillStyle=J,X.strokeStyle=J,X.lineWidth=1.25,X.lineCap="round",X.lineJoin="round";let H;function Y(U=0){if(X.clearRect(0,0,K.width/Q,26),H)W.draw(X,H,U);else W.draw(X,U)}if(W.image){let U=new Image;U.addEventListener("load",()=>{H=U,Y(),K.dataset.rendered="true"},{once:!0}),U.addEventListener("error",()=>{F7(X),K.dataset.rendered="fallback"},{once:!0}),U.src=new URL(W.image,import.meta.url).href}else Y();if(W.animate&&Z){let E=function(){if(U.matches||W.image&&!H)return;cancelAnimationFrame(G);let q=performance.now();function M(O){let F=Math.min(1,(O-q)/(W.duration??620));if(Y(F===1?0:F),F<1)G=requestAnimationFrame(M)}G=requestAnimationFrame(M)},U=matchMedia("(prefers-reduced-motion: reduce)"),G;Z.addEventListener("pointerenter",E),Z.addEventListener("focus",E),Z.addEventListener("brand-preview-replay",E)}return K}var J5={id:"dock",title:"Нижняя панель",offset:0,scale:0.86},tZ=[{id:"editorial",title:"Журнал",offset:0.16,scale:0.79},{id:"schematic",title:"Схема",offset:0,scale:0.8},J5,{id:"focus",title:"Фокус",offset:0.15,scale:0.83}],eZ=[[-0.45,1.26,1.16],[0.46,-2.7,1.22],[1.05,1.62,-0.35]],C9="http://www.w3.org/2000/svg",HH=()=>matchMedia("(max-width: 600px)").matches,bM=new Map([["glass-pill",{panel:"glass-pill",layout:"dock"}],["glass-rail",{panel:"glass-rail",layout:"dock"}],["glass-split",{panel:"glass-split",layout:"dock"}],["glass-split-schematic",{panel:"glass-split",layout:"schematic"}]]),xM=new Set(["stacked","right","top-left","top-stack","top-right","top-center","top-split"]),gM=new Set(["helvetica","avenir","condensed","menlo","baskerville","site"]),pM=new Set(["stack","three-lines","outline","vertical","studio","split"]),KH=new Set(["signal","glass","directory"]),$5=new Map([["editorial",{left:["Независимая инженерная","студия"],right:["Разработка / DevOps"]}],["portrait",{left:["Интерактивный ASCII-портрет"],right:["Двигайте курсор","Портрет следует за ним"]}],["corners",{corners:!0}],["details",{corners:!0,left:["Независимая инженерная студия"],footer:"Реквизиты"}]]);function lM($,J,Q){let Z=document.createElement("div");if(Z.className="cover-edge-preview",Z.dataset.edgeStyle=J,Q.corners)for(let W of["top-left","top-right","bottom-left","bottom-right"]){let K=document.createElement("i");K.className="cover-edge-corner",K.dataset.corner=W,K.setAttribute("aria-hidden","true"),Z.append(K)}for(let[W,K]of[["left",Q.left],["right",Q.right],["footer",Q.footer&&[Q.footer]]]){if(!K)continue;let X=document.createElement("p");X.className=`cover-edge-label cover-edge-label--${W}`;for(let H of K){let Y=document.createElement("span");Y.textContent=H,X.append(Y)}Z.append(X)}$.prepend(Z)}function XH($,J,Q){let Z=J.clientWidth/Math.max(1,J.clientHeight);if(HH()){let W=$.scale*Math.min(1,(Z||0.47)/0.47);return{...$,scale:W,offsetY:-0.36}}return{...$,scale:Q.scale,offsetX:5.6*Z*Q.offset,offsetY:Q.id==="schematic"?0.035:$.offsetY}}function YH({host:$,cover:J,links:Q,onChange:Z,directoryMarkup:W,params:K=new URL(location.href).searchParams}){let X=K.get("cover"),H=bM.get(X),Y=tZ.find((D)=>D.id===(H?.layout??X));if(!Y)return null;let G=$.closest(".experience").parentElement,E=G.querySelector(".masthead"),q=K.get("effect"),M=X==="glass-split-schematic"?q==="all"?[...KH]:KH.has(q)?[q]:[]:[],O=M.includes("signal"),F,N=[];if(H){if(document.body.dataset.coverVariant=Y.id,document.body.dataset.coverTopbar=H.panel,J.querySelector(".cover-brand-suffix").hidden=!1,Y.id==="schematic"){let D=K.get("brand");document.body.dataset.coverBrand=xM.has(D)?D:"inline";let I=K.get("font");if(gM.has(I))document.body.dataset.coverBrandFont=I;if(D==="top-left"&&I==="condensed"){E.classList.add("masthead--aligned-brand"),E.querySelector(".cover-menu").before(J.querySelector(".cover-credit"));let w=K.get("mark");if(q==="all"&&pM.has(w))document.body.dataset.coverMark=w;let A=K.get("edge");if(q==="all"&&$5.has(A))lM(J,A,$5.get(A));if(q==="all"&&w==="vertical"&&!$5.has(A)){let f=E.querySelector(".brand");f.href=location.pathname+location.search;let h=K.get("logo")??"menu-sign",x=h==="menu-sign",p=WH(x?"link-classic":h,getComputedStyle(f).color,2,f);if(x&&p)f.classList.add("brand--in-menu");if(p)f.append(p)}}}if(H.panel==="glass-split"){let D=E.querySelector(".cover-menu"),I=document.createElement("div");I.className="cover-topbar-group";let w=E.querySelector(".brand--in-menu");if(w)I.append(w);if(I.append(...D.querySelectorAll('button:not([data-section="more"])')),D.prepend(I),M.includes("directory"))F=dX(D,W)}if(M.length)document.body.dataset.coverEffect=M.join(" ");if(M.includes("glass"))cX(G);if(Y===J5)return{frame:(D)=>XH(D,$,J5)}}else{let D=document.createElement("nav");D.className="cover-variant-toolbar",D.setAttribute("aria-label","Варианты обложки"),E.after(D),N=tZ.map((I)=>{let w=document.createElement("button");return w.type="button",w.textContent=I.title,w.addEventListener("click",()=>{if(Y===I)return;Y=I;let A=new URL(location.href);A.searchParams.set("cover",I.id),history.replaceState(history.state,"",A),B(),Z()}),D.append(w),w})}let R=document.createElementNS(C9,"svg");R.classList.add("cover-variant-guides"),R.setAttribute("aria-hidden","true");let _=eZ.map(()=>{let D=document.createElementNS(C9,"g"),I=document.createElementNS(C9,"path"),w=document.createElementNS(C9,"rect");w.setAttribute("width",6),w.setAttribute("height",6),D.append(I,w);let A;if(O)A=document.createElementNS(C9,"path"),A.setAttribute("pathLength","100"),A.classList.add("cover-guide-pulse"),D.append(A);return R.append(D),{group:D,line:I,marker:w,pulse:A}});J.prepend(R);let L=O?mX({host:$,links:Q,connectors:_,points:eZ}):null,k=document.createElement("p");k.className="cover-variant-caption",k.setAttribute("aria-hidden","true"),Q[0].parentElement.after(k);let P=null,C=null,S=0;function b(){S=Q.indexOf(P||C||Q[0]),Q.forEach((D,I)=>D.classList.toggle("is-cover-highlighted",I===S)),k.textContent=Q[S].querySelector("small").textContent}Q.forEach((D)=>{D.addEventListener("pointerenter",(I)=>{if(I.pointerType==="touch")return;P=D,b()}),D.addEventListener("pointerleave",()=>{if(P!==D)return;P=null,b()}),D.addEventListener("focus",()=>{C=D,b()}),D.addEventListener("blur",()=>{C=null,b()})});function B(){document.body.dataset.coverVariant=Y.id,N.forEach((D,I)=>D.setAttribute("aria-pressed",String(tZ[I]===Y)))}return B(),b(),{updateEffect:L?.update,clearEffect(D){L?.clear(D),F?.()},frame(D){return XH(D,$,Y)},getAttention(){if(Y.id!=="focus"||!(P||C))return null;return{x:-0.94,y:-0.34+S*0.29}},drawGuides(D){if(Y.id!=="schematic")return;let I=$.getBoundingClientRect();R.setAttribute("viewBox",`0 0 ${I.width} ${I.height}`);let w=HH(),A=w?7:12,f=w?18:30,h=D.projectPoints(eZ);_.forEach((x,p)=>{let{line:y,marker:o,pulse:a}=x,Q0=h[p],X0=Q[p].querySelector(".cover-link-copy").getBoundingClientRect(),L0=X0.left+X0.width/2<I.left+I.width/2,q0=(L0?X0.right+A:X0.left-A)-I.left,c=X0.top+X0.height/2-I.top,W0=p===1&&!L0?I.width-Q0.x:Q0.x,e=L0?Math.max(q0+f,W0):Math.min(q0-f,W0),F0=e+(q0-e)*0.35,N0=e+(q0-e)*0.65,_0=`M${e} ${Q0.y} H${F0} L${N0} ${c} H${q0}`;y.setAttribute("d",_0),a?.setAttribute("d",_0),o.setAttribute("x",e-3),o.setAttribute("y",Q0.y-3),x.point={x:e,y:Q0.y}})}}}var Q5="https://t.me/wr0ngn4m3",Z5=`1111111011001110001111111
1000001011011000001000001
1011101010111110001011101
1011101001110101101011101
1011101010100110101011101
1000001001110110101000001
1111111010101010101111111
0000000001110110000000000
1001111111000001010010111
0111000111000001100011110
1001011011111001000011001
1001110000001001110101111
1110111101001001001000001
1010000001000011100010010
1100101000111111010011111
1010010010110001011101101
1011011010100111111110110
0000000010111011100010110
1111111011010010101010001
1000001011101101100010000
1011101011001101111110011
1011101011100011011000011
1011101000101010110011111
1000001001000000001110111
1111111011101111101001001`.split(`
`);var O7=(Z5.length+8)*8;var UH=Z5.length+8,EH=[[-2,-2],[2,-2],[-2,2],[2,2]],RJ=[];function uM($,J){let Q=Math.abs($-O7/2)-O7/2+19,Z=Math.abs(J-O7/2)-O7/2+19,W=Math.hypot(Math.max(0,Q),Math.max(0,Z))+Math.min(0,Math.max(Q,Z))-19,K=Math.min(1,Math.max(0,-W/11));return K*K*(3-2*K)}for(let $=0;$<UH;$++)for(let J=0;J<UH;J++){if(Z5[$-4]?.[J-4]==="1")continue;let Q=(J+0.5)*8,Z=($+0.5)*8;EH.forEach(([W,K],X)=>{let H="#xO+*"[(J+$*3+X*2)%5],Y=Q+W,U=Z+K,G=uM(Y,U);if(G>0)RJ.push([Y,U,H,G])})}function GH($,J,Q){$.fillStyle=Q,$.font=`700 ${J}px monospace`,$.textAlign="center",$.textBaseline="middle"}function qH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=Math.min(Math.max(devicePixelRatio||1,1),2);if($.width=$.height=Math.round(O7*W),Z.scale($.width/O7,$.height/O7),matchMedia("(max-width: 640px)").matches){let E=document.createElement("canvas"),q=32,M="#@";E.width=64,E.height=32;let O=E.getContext("2d");for(let[N,R]of[..."#@"].entries()){O.font="900 24px monospace",O.fillStyle=O.strokeStyle="#edeee5",O.lineWidth=3;let _=O.measureText(R),L=_.actualBoundingBoxLeft+_.actualBoundingBoxRight,k=_.actualBoundingBoxAscent+_.actualBoundingBoxDescent;O.save(),O.beginPath(),O.rect(N*32,0,32,32),O.clip(),O.translate(N*32,0),O.scale(32/L,32/k),O.strokeText(R,_.actualBoundingBoxLeft,_.actualBoundingBoxAscent),O.fillText(R,_.actualBoundingBoxLeft,_.actualBoundingBoxAscent),O.restore()}let F=4;for(let[N,[R,_,,L]]of RJ.entries()){let k=(N+Math.floor(N/EH.length))%2;Z.globalAlpha=L,Z.drawImage(E,k*32,0,32,32,R-F/2,_-F/2,F,F)}}else{GH(Z,5.25,"#edeee5");for(let[E,q,M,O]of RJ)Z.globalAlpha=O,Z.fillText(M,E,q,4)}function K(){$.parentElement?.classList.add("contact-qr--settled")}if(Q){K();return}let X=document.createElement("canvas");X.className="contact-qr-flight",X.setAttribute("aria-hidden","true");let H=X.getContext("2d");if(!H){K();return}document.body.append(X),$.style.opacity="0";let Y=RJ.map(([E,q,M,O],F)=>{let N=Math.random()*1.16-0.08,R=0.025+Math.random()*0.16,_=[[N,-R],[1+R,N],[N,1+R],[-R,N]],[L,k]=_[F%_.length];return[E,q,L,k,Math.random()*0.26,M,O]}),U=performance.now();function G(E){let q=Math.min(1,(E-U)/780);if(J.hidden||!$.isConnected||q===1){if(X.remove(),$.style.opacity="",q===1&&$.isConnected&&!J.hidden)K(),$.animate([{opacity:0},{opacity:1}],{duration:160,easing:"ease-out"});return}let M=innerWidth,O=innerHeight;if(X.width!==M||X.height!==O)X.width=M,X.height=O;H.clearRect(0,0,M,O);let F=$.getBoundingClientRect(),N=F.width/O7;GH(H,5.25*N,"#edeee5");for(let[R,_,L,k,P,C,S]of Y){let b=Math.max(0,(q-P)/(1-P)),B=(1-b)**3,D=F.left+R*N,I=F.top+_*N,w=D+(L*M-D)*B,A=I+(k*O-I)*B;H.globalAlpha=Math.min(1,b*6)*S,H.fillText(C,w,A,4*N)}requestAnimationFrame(G)}G(U)}var mM=`
   +------------+                               .
   | >_         |                          .    :    .
   +------------+                       .       +       .
        :                                   .       .
        +................+                  .:+x+:.           .
                         :             .:+xX#%@@@%#Xx+:.
                         +------> .:+xX#%@@@@@@@@@@@@@%#Xx+:.
                                 +xX#%@@@@@@@#@@@@@@@%#Xx+:
                                 |'+xX#%@@@@@@@@@@@%#Xx+:'|
                                 |   ':+xX#%@@@%#Xx+:'   :|
                                 |       ':+xxx+:'    .:+x|
                                 +.         :      .:+xX#x+
                                   '+:.     :   .:+xX#Xx+'
                                      '+:.  :.:+xX#Xx+'
                                         '+.+X#Xx+'
                                            '+.'
                                      .             .
`.trimEnd().slice(1),dM=["Репозиторий","Сборка","Запуск"],cM=[["00:01","Репозиторий получен"],["00:02","Зависимости установлены"],["00:03","Приложение запущено"]];function NH($=!1){return`<figure class="paas-launch" data-paas-launch data-launch-variant="${$?"live":"still"}" data-launch-state="ready">
    <figcaption class="paas-launch__caption">
      <span>Демо запуска</span>
      ${$?'<button class="paas-launch__replay" type="button">Повторить запуск</button>':""}
    </figcaption>
    <div class="paas-launch__graphic">
      <pre class="paas-launch__art" aria-hidden="true">${mM.replaceAll(">","&gt;")}</pre>
      ${$?'<canvas class="paas-launch__canvas" aria-hidden="true" hidden></canvas>':""}
      <ol class="paas-launch__route">
        ${dM.map((J)=>`<li data-launch-step-state="done">${J}</li>`).join("")}
      </ol>
    </div>
    <div class="paas-launch__output">
      <div class="paas-launch__url">
        <span class="paas-launch__label">URL</span>
        <code>https://app.wwn.example</code>
      </div>
      <div class="paas-launch__logs">
        <span class="paas-launch__label">Логи</span>
        <ul>
          ${cM.map(([J,Q])=>`<li data-launch-log-state="shown"><code><span aria-hidden="true">${J}</span> ${Q}</code></li>`).join("")}
        </ul>
      </div>
    </div>
  </figure>`}function MH($,J){if(!$||J)return;let Q=$.querySelectorAll("[data-launch-step-state]"),Z=$.querySelectorAll("[data-launch-log-state]"),W=$.dataset.launchVariant==="live"?600:380,K;function X(H){if(!$.isConnected||$.closest("[hidden]"))return;if($.dataset.launchState=H===Q.length?"ready":"running",Q.forEach((Y,U)=>{Y.dataset.launchStepState=U<H?"done":U===H?"active":"queued"}),Z.forEach((Y,U)=>{Y.dataset.launchLogState=U<H?"shown":"pending"}),H<Q.length)K=setTimeout(()=>X(H+1),W)}return X(0),()=>clearTimeout(K)}var nM=Object.freeze({x:0,y:0}),RH=($)=>Math.max(-1,Math.min(1,$));function h1($,J,Q=$){if(J)return{read:()=>nM,stop(){}};let Z=new AbortController,W={passive:!0,signal:Z.signal},K={x:0,y:0},X={x:0,y:0},H;return $.addEventListener("pointermove",(Y)=>{if(Y.pointerType==="touch")return;let U=Q.getBoundingClientRect();if(!U.width||!U.height)return;K.x=RH((Y.clientX-U.left)/U.width*2-1),K.y=RH((Y.clientY-U.top)/U.height*2-1)},W),$.addEventListener("pointerleave",()=>{K.x=K.y=0},W),{read(Y){let U=R1.active?R1:K,G=H===void 0?32:Math.max(0,Math.min(90,Y-H));H=Y;let E=1-Math.exp(-G/155);return X.x+=(U.x-X.x)*E,X.y+=(U.y-X.y)*E,X},stop(){Z.abort()}}}var FH=[[-0.34,-0.42,0.16],[0.25,0.14,-0.14],[0.49,0.78,-0.09]],n1={x:1.55,y:0.235,z:0.93},K5={side:[":","#edeee56b"],front:[":","#edeee59e"],slot:[".","#edeee56b"],vent:["x","#edeee59e"],top:["x","#edeee5cc"],topGrain:["+","#edeee5cc"],edge:["+","#edeee5"],indicator:["*","#edeee5"]},sM={side:[":","#edeee598"],front:[":","#edeee5c7"],slot:[".","#edeee598"],vent:["x","#edeee5c7"],top:["x","#edeee5eb"],topGrain:["+","#edeee5eb"],edge:K5.edge,indicator:K5.indicator};function W5($,J,Q){return $+(J-$)*Q}function oM($,J,Q,Z,W){let X=Math.abs(Q)>n1.x-0.05,H=Math.abs(Z)>n1.y-0.05,Y=Math.abs(W)>n1.z-0.05;if(J===0&&(H||Y)||J===1&&(X||Y)||J===2&&(X||H))return $.edge;if(J===2){if(Math.abs(Z)<0.095&&Q>-0.99&&Q<0.52)return $.slot;if(Math.abs(Z)<0.13&&(Math.abs(Q-0.86)<0.1||Math.abs(Q-1.14)<0.09))return $.indicator;return $.front}if(J===0)return Math.abs(Z)<0.1&&Math.abs(W)<0.65&&Math.cos(W*44)>-0.45?$.vent:$.side;if(Math.abs(Q)<1.05&&Math.abs(W)<0.61&&Math.cos(W*41)>-0.3)return $.vent;return(Math.floor((Q+2)*12)*7+Math.floor((W+1)*16)*13)%11<2?$.topGrain:$.top}function L7($,J,Q){let Z=$?.getContext("2d");if(!Z)return;let W=matchMedia("(pointer: coarse)").matches,K=W?sM:K5,X=$.closest("[data-paas-launch]"),H=[...X?.querySelectorAll("[data-launch-step-state]")??[]],Y=FH.map((b)=>[...b]),U=h1($,J),G=new AbortController,E={signal:G.signal},q=0,M=0,O=0,F=-1/0,N=!0,R=0.62,_=0.38;function L(){if(!O&&N&&!document.hidden)O=requestAnimationFrame(P)}function k(){if(q=$.clientWidth,M=$.clientHeight,!q||!M)return;let b=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(q*b),$.height=Math.round(M*b),Z.setTransform(b,0,0,b,0,0),L()}function P(b){if(O=0,!$.isConnected||$.closest("[hidden]")||!q||!M)return;if(!J&&b-F<32){L();return}let B=J?1:1-Math.exp(-Math.min(b-F,85)/135);F=b;let D=J||X?.dataset.launchState==="ready",I=Q?.()??(D?3:H.filter((N0)=>N0.dataset.launchStepState==="done").length);for(let N0=0;N0<Y.length;N0++)for(let _0=0;_0<3;_0++)Y[N0][_0]=W5(Y[N0][_0],N0<I?0:FH[N0][_0],B);if(!J){let N0=U.read(b);R=W5(R,0.62+Math.sin(b/1900)*0.18+N0.x*0.24,B*0.55),_=W5(_,0.38+Math.sin(b/2300)*0.04-N0.y*0.09,B*0.55)}let w=Math.sin(R),A=Math.cos(R),f=Math.sin(_),h=Math.cos(_),x=w*h,p=f,y=A*h,o=A*n1.x+w*n1.z,a=f*(w*n1.x+A*n1.z)+h*n1.y,Q0=1/0,X0=-1/0,L0=1/0,q0=-1/0;Y.forEach(([N0,_0,r0],j)=>{let l0=A*N0-w*r0,j0=h*(_0+(j-1)*0.58)-f*(w*N0+A*r0);Q0=Math.min(Q0,l0-o),X0=Math.max(X0,l0+o),L0=Math.min(L0,j0-a),q0=Math.max(q0,j0+a)});let c=(Q0+X0)/2,W0=(L0+q0)/2,e=Math.min(q/Math.max(4.2,X0-Q0+0.3),M/Math.max(3.32,q0-L0+0.3)),F0=Math.max(4.5,q/108,M/78);Z.clearRect(0,0,q,M),Z.font=`${W?700:600} ${Math.max(5,F0*(W?1.2:1.11))}px ui-monospace, monospace`,Z.textAlign="center",Z.textBaseline="middle";for(let N0=F0/2;N0<M;N0+=F0){let _0=(M/2-N0)/e+W0,r0=p*7+h*_0;for(let j=F0/2;j<q;j+=F0){let l0=(j-q/2)/e+c,j0=x*7+A*l0-w*f*_0,T0=y*7-w*l0-A*f*_0,V0=1/0,a0;for(let J1=0;J1<Y.length;J1++){let[q1,d0,T]=Y[J1],V=j0-q1,m=r0-d0-(J1-1)*0.58,r=T0-T,$0=(V-n1.x)/x,i=(m-n1.y)/p,B0=(r-n1.z)/y,K0=Math.max($0,i,B0);if(K0>=V0||K0>(V+n1.x)/x||K0>(m+n1.y)/p||K0>(r+n1.z)/y)continue;V0=K0,a0=oM(K,K0===$0?0:K0===i?1:2,V-x*K0,m-p*K0,r-y*K0)}if(!a0)continue;let[C0,O0]=a0;Z.fillStyle=O0,Z.fillText(C0,j,N0)}}if(!J)L()}document.addEventListener("visibilitychange",L,E);let C=new ResizeObserver(k);C.observe($);let S=new IntersectionObserver(([b])=>{N=b.isIntersecting,L()});return S.observe($),k(),()=>{cancelAnimationFrame(O),C.disconnect(),S.disconnect(),U.stop(),G.abort()}}var OH=["·",":","+","x","o","*","#"];function iM($,J,Q,Z){$.canvas.width=Q,$.canvas.height=Z,$.font="800 100px Arial, sans-serif";let W=Q*0.94*100/$.measureText(J).width,K=Math.min(W,Z*0.97,178);$.font=`800 ${K}px Arial, sans-serif`,$.textAlign="center",$.textBaseline="middle",$.fillText(J,Q/2,Z*0.515);let{data:X}=$.getImageData(0,0,Q,Z),H=Math.max(4,Math.round(K/20)),Y=[];for(let U=H;U<Z;U+=H)for(let G=H;G<Q;G+=H)if(X[(U*Q+G)*4+3]>120)Y.push({x:G,y:U});return{points:Y,step:H}}function LH($,J,Q,Z){let W=$.querySelector(".paas-tech-visual"),K=$.querySelector("canvas"),X=K.getContext("2d"),H=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!X||!H)return{select(){},stop(){}};let Y=matchMedia("(pointer: coarse)").matches,U=Q,G=0,E=0,q=0,M=0,O,F,N,R=0,_=0,L=[],k=[],P=[];function C(I){let w=1-(1-I)**3,A=Math.sin(I*Math.PI);X.clearRect(0,0,G,E),X.textAlign="center",X.textBaseline="middle",X.font=`${Y?700:600} ${N*(Y?1.32:1.12)}px ui-monospace, monospace`,X.fillStyle="#edeee5";let f=G/2-N,h=Math.min(_,E-_,M*1.32)-N;P=Array.from({length:Math.max(L.length,k.length)},(x,p)=>{let y=L[p]??{x:R,y:_,alpha:0},o=k[p]??{x:R,y:_,alpha:0},a=Math.sin(p*91.73),Q0=y.x+(o.x-y.x)*w+a*q*0.19*A,X0=y.y+(o.y-y.y)*w+Math.sin(p*673)*M*0.43*A,L0=y.alpha+(o.alpha-y.alpha)*w,q0=Math.hypot((Q0-R)/Math.max(1,f),(X0-_)/Math.max(1,h)),c=Math.max(0,Math.min(1,(1-q0)/(0.18+Math.abs(a)*0.11))),W0=1-Math.min(1,A*4)*(1-c*c*(3-2*c));if(X.globalAlpha=L0*(Y?0.94+Math.abs(a)*0.06:0.76+Math.abs(a)*0.24)*W0,X.globalAlpha>0.01)X.fillText(OH[(p+Math.floor(A*5))%OH.length],Q0,X0);return{x:Q0,y:X0,alpha:L0}}),X.globalAlpha=1}function S(I){let w=Math.min(1,(I-F)/590);if(C(w),w<1)O=requestAnimationFrame(S);else P=k}function b(I,w=!0){if(U=I,!q||!M)return;cancelAnimationFrame(O);let A=iM(H,Z[U],q,M);if(N=A.step,L=P,k=A.points.map(({x:f,y:h})=>({x:f+R-q/2,y:h+_-M/2,alpha:1})),J||!w){C(1),P=k;return}F=performance.now(),O=requestAnimationFrame(S)}function B(){G=K.clientWidth,E=K.clientHeight,q=Math.min(600,W.clientWidth),M=W.clientHeight;let I=W.getBoundingClientRect(),w=K.getBoundingClientRect();R=I.left-w.left+I.width/2,_=I.top-w.top+I.height/2;let A=Math.min(devicePixelRatio||1,2);K.width=Math.round(G*A),K.height=Math.round(E*A),X.setTransform(A,0,0,A,0,0),L=[],P=[],b(U,!1)}let D=new ResizeObserver(B);return D.observe(W),D.observe(K),B(),{select:b,stop(){D.disconnect(),cancelAnimationFrame(O)}}}var DH=[{title:"Репозиторий",action:"Проект из GitHub или GitLab",detail:"Разработчик подключает репозиторий и запускает проект через веб-интерфейс. Платформа сама получает исходный код.",input:"GitHub / GitLab",output:"Исходный код"},{title:"Сборка",action:"Подготовка среды запуска",detail:"Платформа определяет стек проекта и устанавливает нужные инструменты и библиотеки. Это избавляет разработчика от ручной настройки окружения.",input:"Исходный код",output:"Готовая сборка"},{title:"Запуск",action:"Работающий сервис в облаке",detail:"Платформа разворачивает приложение. Разработчик получает адрес работающего сервиса и логи, по которым можно проверить запуск.",input:"Готовая сборка",output:"URL и логи запуска",previewOutput:"Пример URL · https://app.wwn.example"}],_H=[{name:"Интерфейс и API",tools:"Next.js · FastAPI",symbol:"API",detail:"Next.js показывает интерфейс платформы. FastAPI принимает запрос на запуск."},{name:"Фоновые задачи",tools:"Celery",symbol:"Celery",detail:"Выполняет задачи запуска в фоне."},{name:"Среда выполнения",tools:"Kubernetes",symbol:"K8s",detail:"Запускает приложения в облаке."},{name:"Подготовка окружения",tools:"Terraform · Ansible",symbol:"IaC",detail:"Terraform описывает инфраструктуру для кластера, Ansible настраивает окружение."},{name:"Синхронизация с Git",tools:"Argo CD",symbol:"GitOps",detail:"Применяет конфигурацию из Git в кластере Kubernetes."}],aM=[{label:"Интерфейс и задачи",nodes:["Next.js","FastAPI","Celery"],note:"Интерфейс отправляет запрос в API. Фоновые задачи передаются Celery."},{label:"Развертывание · GitOps",nodes:["Git","Argo CD","Kubernetes"],note:"Argo CD применяет конфигурацию из Git в кластере."},{label:"Подготовка окружений",nodes:["Terraform · Ansible","Kubernetes"],note:"Инструменты описывают и настраивают инфраструктуру кластера."}];function VH($){if($==="trace")return`<div class="paas-chapter">
      <h2>Из репозитория <br>в облако</h2>
      <ol class="paas-trace">
        ${DH.map(({action:J,detail:Q,input:Z,output:W})=>`<li>
          <h3>${J}</h3><p>${Q}</p>
          <samp>${Z} <span aria-label="переходит в">→</span> ${W}</samp>
        </li>`).join("")}
      </ol>
    </div>`;return l7(DH,"Как работает / PaaS","Этапы запуска")}function l7($,J,Q,Z='<canvas class="paas-launch__canvas" aria-hidden="true"></canvas>'){return`<div class="paas-chapter paas-sequence" data-paas-sequence>
    <div class="paas-sequence__scene">
      ${Z}
      <div class="paas-sequence__output">
        ${$.map(({output:W,previewOutput:K},X)=>`<samp data-paas-stage-output ${X?"hidden":""}>${K??W}</samp>`).join("")}
      </div>
    </div>
    <div class="paas-sequence__copy" aria-live="polite">
      <p class="paas-sequence__caption">${J}</p>
      <div class="paas-sequence__stages">
        ${$.map(({action:W,detail:K},X)=>`<div class="paas-sequence__stage" data-paas-stage-content ${X?"inert":""}>
          <h2>${W}</h2><p>${K}</p>
        </div>`).join("")}
      </div>
    </div>
    <div class="paas-sequence__controls" role="group" aria-label="${Q}">
      ${$.map(({title:W},K)=>`<button type="button" aria-pressed="${K===0}" data-paas-stage="${K}">${W}</button>`).join("")}
    </div>
  </div>`}function BH($){if($==="flows")return`<div class="paas-chapter">
      <h2>Архитектура платформы</h2>
      <div class="paas-architecture">
        ${aM.map(({label:J,nodes:Q,note:Z})=>`<section>
          <h3>${J}</h3>
          <div class="paas-architecture__flow">${Q.map((W)=>`<b>${W}</b>`).join('<span aria-label="передает в">→</span>')}</div>
          <p>${Z}</p>
        </section>`).join("")}
      </div>
    </div>`;return u7([{title:"Запуск приложения",tools:_H.slice(0,3)},{title:"Управление окружением",tools:_H.slice(3)}])}function u7($,J="paas"){let Q=$.flatMap((W)=>W.tools),Z=(W)=>{let K=Q.indexOf(W);return`<button type="button" data-paas-tech="${K}" data-particle-word="${W.symbol}" aria-pressed="${K===0}">${W.tools}</button>`};return`<div class="paas-chapter paas-layers" data-paas-tech-map>
    <canvas class="paas-tech-particle-field" aria-hidden="true"></canvas>
    <div class="paas-tech-visual" aria-hidden="true"></div>
    <div class="paas-tech-details" aria-live="polite">
      ${Q.map(({name:W,detail:K},X)=>`<div data-paas-tech-detail ${X?"hidden":""}>
        <h3>${W}</h3><p>${K}</p>
      </div>`).join("")}
    </div>
    <div class="paas-tech-map">
      ${$.map(({title:W,tools:K},X)=>`<div class="paas-tech-group" role="group" aria-labelledby="${J}-tech-group-${X}">
        <p id="${J}-tech-group-${X}">${W}</p>
        <div>${K.map(Z).join("")}</div>
      </div>`).join("")}
    </div>
  </div>`}function zH($,J){let Q=$.querySelector("[data-paas-tech-map]");if(!Q)return;let Z=[...Q.querySelectorAll("[data-paas-tech]")],W=Z.map((G)=>G.dataset.particleWord),K=[...Q.querySelectorAll("[data-paas-tech-detail]")],X=0,H;function Y(){H=LH(Q,J,X,W)}function U(G){if(G.type==="pointerover"&&G.pointerType==="touch")return;let E=G.target.closest("[data-paas-tech]");if(!E)return;let q=Number(E.dataset.paasTech);if(X===q)return;X=q,H?.select(q),Z.forEach((M,O)=>{M.setAttribute("aria-pressed",String(M===E)),K[O].hidden=M!==E})}return Q.addEventListener("pointerover",U),Q.addEventListener("focusin",U),Q.addEventListener("click",U),{start:Y,stop(){H?.stop(),H=void 0}}}function kH($,J){return m7($,J,(Q,Z,W)=>L7(Q,Z,()=>[0,2,3][W()]))}function m7($,J,Q,{autoAdvance:Z=!0}={}){let W=$.querySelector("[data-paas-sequence]");if(!W)return;let K=[...W.querySelectorAll("[data-paas-stage]")],X=[...W.querySelectorAll("[data-paas-stage-content]")],H=[...W.querySelectorAll("[data-paas-stage-output]")],Y=W.querySelector("canvas"),U=0,G,E;function q(){G=Q?.(Y,J,()=>U)}function M(N){if(N===U)return;if(U=N,K.forEach((R,_)=>{R.setAttribute("aria-pressed",String(_===U)),X[_].inert=_!==U,H[_].hidden=_!==U}),J&&G)G(),q()}function O(){if(M(U+1),U<X.length-1)E=setTimeout(O,4400)}function F(N){let R=N.target.closest("[data-paas-stage]");if(!R)return;clearTimeout(E),M(Number(R.dataset.paasStage))}return W.addEventListener("click",F),W.addEventListener("pointerover",(N)=>{if(N.pointerType==="mouse")F(N)}),{start(){if(M(0),q(),!J&&Z)E=setTimeout(O,4400)},stop(){clearTimeout(E),G?.(),G=void 0}}}var CH=["·",":","+","x","*","#"],IH=2550;function rM(){let $=[];for(let J=0;J<=40;J++){let Q=J/40,Z=(Q-0.5)*2.4,W=0.25+0.66*Math.sin(Math.PI*Q)**1.4;for(let K=0;K<19;K++){let X=K*(Math.PI*2/19)+Q*0.9;$.push({x:Z,y:Math.cos(X)*W,z:Math.sin(X)*W,trace:K%6===0})}}return $}var PH=rM();function d7($,J,Q){let Z=$.getContext("2d");if(!Z)return()=>{};let W=h1($,J),K=matchMedia("(pointer: coarse)").matches,X=performance.now(),H=0,Y=-1/0,U=0,G=0,E=0;function q(N){if(H=0,document.hidden||!G||!E)return;if(!J&&N-Y<32){H=requestAnimationFrame(q);return}Y=N;let R=N-X,_=Q?.();U+=((_===2?1:0)-U)*(J?1:0.16);let k=J?0.5:R%IH/IH,P=W.read(N),C=J?0.18:0.14+0.2*Math.sin(R/1760)+P.x*0.29,S=P.y*0.23,b=Math.cos(S),B=Math.sin(S),D=Math.sin(C),I=Math.cos(C),w=Math.min(G/6,E/2.45),A={x:G/2,y:E*0.525},f=J?0:Math.sin(Math.PI*k),h=_===0?k*3.4-2.8:_===1?k*4.1-1.35:k*5.5-2.75;Z.clearRect(0,0,G,E),Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle",Z.font=`${K?700:600} ${Math.max(5,w*0.13)}px ui-monospace, monospace`;let x=G<400?2:1;for(let p=0;p<PH.length;p+=x){let{x:y,y:o,z:a,trace:Q0}=PH[p],X0=0.48+(J?0:0.22*Math.sin(R/1870))+y*0.48,L0=o*Math.cos(X0)-a*Math.sin(X0),q0=o*Math.sin(X0)+a*Math.cos(X0),c=y*I+q0*D,W0=-y*D+q0*I,e=W0*b+L0*B,F0=L0*b-W0*B,N0=Math.max(0,1-Math.abs(y-h)*1.9)*f,_0=1/(1-e*0.105),r0=(e+1.2)/2.5,j=CH[Math.min(5,Math.max(0,Math.floor((r0+N0*0.55)*4.1)))];Z.globalAlpha=Math.min(1,(K?0.25:0.15)+r0*0.55+N0*0.38+(Q0?0.13:0)),Z.fillText(j,A.x+c*w*_0,A.y+(F0+e*0.21)*w*_0)}for(let p of[-1,1])for(let y=0;y<3;y++){let o=y-1,a=11-y;for(let Q0=0;Q0<a;Q0++){let X0=1.36+Q0*0.114,L0=X0*p,q0=p===1?U:0,c=o*(0.18+(X0-1.36)*(0.19+q0*0.65)),W0=Math.max(0,1-Math.abs(L0-h)*2)*f,e=_===0&&p===-1||_===1&&p===1;Z.globalAlpha=(0.22+W0*0.58+(e?0.18:0))*(o?1:1-q0*0.91),Z.fillText(CH[(y*3+Q0)%4],A.x+L0*w,A.y+c*w)}}if(Z.globalAlpha=1,!J)H=requestAnimationFrame(q)}function M(){if(G=$.clientWidth,E=$.clientHeight,!G||!E)return;let N=Math.min(devicePixelRatio||1,2);if($.width=Math.round(G*N),$.height=Math.round(E*N),Z.setTransform(N,0,0,N,0,0),!H)H=requestAnimationFrame(q)}let O=new ResizeObserver(M);O.observe($);function F(){cancelAnimationFrame(H),H=document.hidden?0:requestAnimationFrame(q)}return document.addEventListener("visibilitychange",F),M(),()=>{W.stop(),cancelAnimationFrame(H),O.disconnect(),document.removeEventListener("visibilitychange",F)}}var I9=[["Доступ","Шлюз проверяет права приложения и лимиты."],["Обработка","Модель формирует ответ на запрос."],["Диагностика","Ответ в приложении. Ошибки и задержки видны в трассировке."]],tM=[{title:"Запрос",action:"Единый доступ к моделям",detail:"Внутренние приложения отправляют запросы через общий шлюз. Он проверяет доступ, применяет лимиты и направляет запрос к нужной модели.",output:"Запрос направлен к модели"},{title:"Ответ",action:"Ответ и диагностика",detail:"Модель возвращает ответ приложению. Команда видит задержки и ошибки в мониторинге, а отдельный запрос может разобрать по трассировке.",output:"Ответ · Метрики · Трассировка"},{title:"Обновление",action:"Проверка до выпуска",detail:"Обновления проверяются отдельно от рабочих запросов. На одинаковых задачах команда сравнивает действующую и новую версии по качеству ответов, задержкам и расходу ресурсов.",output:"Сравнение версий на одинаковых запросах"}],eM=[{title:"Обработка запросов",tools:[{tools:"Kong Gateway",symbol:"GATE",name:"Доступ и лимиты",detail:"Шлюз проверяет правила доступа и ограничивает нагрузку перед обращением к модели."},{tools:"vLLM · Kubernetes",symbol:"LLM",name:"Выполнение запросов",detail:"Модель обслуживает запросы через vLLM в Kubernetes компании."}]},{title:"Контроль и выпуск",tools:[{tools:"Prometheus · Grafana",symbol:"METRICS",name:"Состояние сервиса",detail:"Метрики показывают задержки, ошибки и нагрузку."},{tools:"Langfuse",symbol:"EVAL",name:"Трассировки и качество",detail:"Команда разбирает ответы по трассировкам и сравнивает версии на согласованных запросах."},{tools:"Git · CI/CD",symbol:"CI/CD",name:"Версии и релизы",detail:"Конфигурации и промпты версионируются. Проверка качества предшествует выпуску изменений."}]}];function AH(){return[{id:"overview",label:"Обзор",layout:"paas-hero llmops-hero",markup:`
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / LLMOps · Референсная архитектура</p>
        <h1 id="document-title">AI-ассистент для компании</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Цель проекта</p>
          <p>Единый доступ к моделям внутри компании, мониторинг нагрузки и проверка качества перед обновлениями.</p>
        </div>
      </div>
      <figure class="llmops-demo" data-llmops-demo>
        <figcaption class="llmops-demo__caption">
          <span>Пример рабочего запроса</span>
          <button type="button" data-llmops-replay>Повторить</button>
        </figcaption>
        <canvas class="llmops-demo__art" aria-hidden="true"></canvas>
        <ol class="llmops-demo__steps">${I9.map(([$])=>`<li>${$}</li>`).join("")}</ol>
        <p class="llmops-demo__status" aria-live="polite">${I9[2][1]}</p>
      </figure>`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:l7(tM,"Как работает / LLMOps","Этапы работы LLMOps")},{id:"stack",label:"Технологии",layout:"paas-details",markup:u7(eM,"llmops")}]}function TH($,J){let Q=$.querySelector("[data-llmops-demo]"),Z=Q.querySelector("[data-llmops-replay]"),W=Q.querySelector("canvas"),K=[...Q.querySelectorAll("li")],X=Q.querySelector('[role="status"], [aria-live]'),H,Y;function U(){clearTimeout(H),Y?.(),Y=void 0}function G(q){K.forEach((M,O)=>{M.dataset.state=O===q?"current":O<q?"done":"pending"}),X.textContent=I9[q][1]}function E(){if(U(),Y=d7(W,J),J){G(I9.length-1);return}let q=0;function M(){if(G(q++),q<I9.length)H=setTimeout(M,850)}M()}return Z.hidden=J,Z.addEventListener("click",E),{start:E,stop:U}}function wH($,J){return m7($,J,d7)}function c7($,J=0.074){return $.slice(1).flatMap(([Q,Z],W)=>{let[K,X]=$[W],H=Q-K,Y=Z-X,U=Math.ceil(Math.hypot(H,Y)/J);return Array.from({length:U},(G,E)=>[K+H*E/U,X+Y*E/U])})}function vH($){return Array.from({length:22},(J,Q)=>{let Z=$+Q*0.125;return[0.51*Math.cos(Z),0.51*Math.sin(Z)]})}var SH=vH(-3),jH=vH(0.14),P9=[[c7([[-0.31,-0.37],[-0.62,0],[-0.31,0.37]]),c7([[0.17,-0.46],[-0.17,0.46]]),c7([[0.31,-0.37],[0.62,0],[0.31,0.37]])],[SH,jH,c7([[0.23,-0.13],SH.at(-1),[0.57,-0.47]]),c7([[-0.23,0.13],jH.at(-1),[-0.57,0.47]])],[...[[-0.48,0.13],[-0.12,-0.18],[0.24,-0.44]].map(([$,J])=>c7([[$,0.42],[$,J],[$+0.22,J],[$+0.22,0.42]])),c7([[-0.62,0.42],[0.61,0.42]])]],fH=["+","x",":","+"];function n7($,J,Q){let Z=$.getContext("2d");if(!Z)return()=>{};let W=h1($,J),K=matchMedia("(pointer: coarse)").matches,X=performance.now(),H=0,Y,U,G=-1/0;function E(){if(!H&&!document.hidden)H=requestAnimationFrame(q)}function q(N){if(H=0,document.hidden||!Y||!U)return;if(!J&&N-G<32){E();return}G=N;let R=J?0:N-X,_=Math.min(Y/5.65,U/1.95),L=W.read(N),k=-0.3+Math.sin(R/1450)*0.065+L.x*0.32,P=Math.sin(k),C=Math.cos(k),S=0.43-L.y*0.28,b=R%3100/3100*3.05-0.35,B=Q?.(),D=U*0.79;Z.clearRect(0,0,Y,U),Z.textAlign="center",Z.textBaseline="middle",Z.font=`${K?700:600} ${Math.max(5,Math.min(11,_*0.126))}px ui-monospace, monospace`,Z.fillStyle="#edeee5";for(let I=0;I<P9.length-1;I++){let w=Y*(I+0.5)/P9.length,A=w+Y/P9.length,f=Math.max(5,_*0.115),h=Math.round((A-w)/f);for(let x=1;x<h;x++){let p=x/h,y=J?0:Math.max(0,1-Math.abs(I+p-b)*7);Z.globalAlpha=0.46+y*0.53,Z.fillText(y>0.35?"+":"·",w+(A-w)*p,D)}}if(P9.forEach((I,w)=>{let A=Y*(w+0.5)/P9.length,f=U*0.4,h=B===void 0||B===w,x=J?0:Math.max(0,1-Math.abs(w-b)*3),p=h?0.83:0.43;for(let y of[-0.25,-0.12,0]){let o=y===0;I.forEach((a)=>{a.forEach(([Q0,X0],L0)=>{let q0=Q0*C-y*P,c=Q0*P+y*C;Z.globalAlpha=o?Math.min(1,p+x*0.16):p*(y===-0.25?0.3:0.44)*(K?1.28:1),Z.fillText(o?fH[L0%fH.length]:"·",A+q0*_,f+(X0+c*S)*_)})})}Z.globalAlpha=Math.min(1,p*(K?1.28:1)),Z.fillText("o",A,D)}),Z.globalAlpha=1,!J)E()}function M(){if(Y=$.clientWidth,U=$.clientHeight,!Y||!U)return;let N=Math.min(2,devicePixelRatio||1);$.width=Math.round(Y*N),$.height=Math.round(U*N),Z.setTransform(N,0,0,N,0,0),E()}function O(){if(document.hidden)cancelAnimationFrame(H),H=0;else E()}let F=new ResizeObserver(M);return F.observe($),document.addEventListener("visibilitychange",O),M(),()=>{W.stop(),cancelAnimationFrame(H),F.disconnect(),document.removeEventListener("visibilitychange",O)}}var $R=[{title:"Конфигурация",action:"Настройки хранятся в коде",detail:"Конфигурацию инфраструктуры перенесли в код. Инженер вносит изменения и запускает готовый сценарий в GitLab.",output:"Изменения переданы в GitLab CI"},{title:"Обновление",action:"GitLab обновляет настройки",detail:"Пайплайн выполняет обновление по одному сценарию. Время на эту работу сократилось примерно втрое.",output:"Настройки обновлены"},{title:"Восстановление",action:"Sentry возобновляет сбор ошибок",detail:"Блокировка диска во время резервного копирования останавливала обработчики Sentry. Теперь они восстанавливаются автоматически, а мониторинг уведомляет команду о сбоях.",output:"Сбор ошибок возобновлен"}],JR=[{title:"Инфраструктура как код",tools:[{tools:"Ansible",symbol:"IaC",name:"Настройки в коде",detail:"Настройки инфраструктуры описаны в сценариях Ansible."},{tools:"GitLab CI",symbol:"CI/CD",name:"Обновление инфраструктуры",detail:"Пайплайн GitLab CI запускает сценарий обновления из репозитория."}]},{title:"Эксплуатация",tools:[{tools:"Sentry · Snuba",symbol:"Errors",name:"Обработка ошибок",detail:"Для обработчиков Sentry настроено автоматическое восстановление после сбоев при резервном копировании."},{tools:"Grafana · ELK",symbol:"Logs",name:"Мониторинг и логи",detail:"Мониторинг и уведомления показывают сбои, а логи помогают разобраться в причине."}]}];function yH(){return[{id:"overview",label:"Обзор",layout:"paas-hero case-hero--compact",markup:`
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / IaC и мониторинг</p>
        <h1 id="document-title">Инфраструктура как код</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Результат</p>
          <p>Перенос настроек инфраструктуры в код и автоматизация обновлений. Повышение отказоустойчивости сервисов за счет мониторинга и автоматического восстановления после сбоев.</p>
        </div>
      </div>
      <figure class="case-demo" data-operations-demo>
        <canvas class="case-demo__art" aria-hidden="true"></canvas>
        <figcaption>
          <ol class="case-demo__labels">
            <li>Настройки в коде</li>
            <li>Обновление</li>
            <li>Мониторинг</li>
          </ol>
        </figcaption>
      </figure>`},{id:"workflow",label:"Как работает",layout:"paas-details operations-flow",markup:l7($R,"Как работает / IaC и мониторинг","Этапы изменений и восстановления")},{id:"stack",label:"Технологии",layout:"paas-details",markup:u7(JR,"operations")}]}function hH($,J){let Q=$.querySelector("[data-operations-demo] canvas"),Z;return{start(){Z=n7(Q,J)},stop(){Z?.(),Z=void 0}}}function bH($,J){return m7($,J,n7)}var pH=7,y6=2*Math.PI/pH,A9=0.24,xH=-0.36,FJ=Math.cos(y6/2),X5=0.075,QR=Array.from({length:pH},($,J)=>{let Q=(J+0.5)*y6+Math.PI/2;return[Math.cos(Q),Math.sin(Q)]}),ZR=[{x:0,y:0,z:1,limit:A9,face:"front"},{x:0,y:0,z:-1,limit:-xH,face:"back"},...QR.flatMap(([$,J])=>[{x:$,y:J,z:0,limit:FJ,face:"side"},{x:$,y:J,z:1,limit:FJ+A9-X5,face:"bevel"},{x:$,y:J,z:-1,limit:FJ-xH-X5,face:"bevel"}])];function gH($,J,Q=0){let Z=Math.hypot($,J);if(Z>0.74-Q)return!1;if(Z<0.15-Q||Math.abs(Z-0.49)<0.071-Q)return!0;let W=(Math.atan2(J,$)+Math.PI*1.5)%y6;return Z*Math.sin(Math.min(W,y6-W))<0.059-Q}function WR($,J,Q,Z){let W=1/0,K=-1/0,X;for(let H of $){let Y=H.limit-H.u*J-H.v*Q;if(Math.abs(H.w)<0.0001){if(Y<0)return!1;continue}let U=Y/H.w;if(H.w>0){if(U<W)W=U,X=H}else K=Math.max(K,U);if(K>W)return!1}return Z.depth=W,Z.surface=X,!0}function KR($,J,Q,Z,W,K){let{cosYaw:X,sinYaw:H,cosPitch:Y,sinPitch:U}=K,G=[H*Y,U,X*Y],E=ZR.map((F)=>{let{x:N,y:R,z:_}=F,L=N*H+_*X;return{...F,u:N*X-_*H,v:R*Y-L*U,w:N*G[0]+R*G[1]+_*G[2],light:Math.max(0,(N*-0.2+R*0.7+_*0.48)/Math.hypot(N,R,_))}}),q=Math.max(3,W/59),M=Math.ceil(Z*1.14/q),O={};$.font=`700 ${q*1.21}px ui-monospace, monospace`,$.textAlign="center",$.textBaseline="middle";for(let F=-M;F<=M;F++){let N=-F*q/Z,R=N*Y;for(let _=-M;_<=M;_++){let L=_*q/Z;if(!WR(E,L,N,O))continue;let k=X*L-H*U*N,P=-H*L-X*U*N,C=(A9+0.046-P)/G[2],S=k+G[0]*C,b=R+G[1]*C,B=gH(S,b),D=O.surface.face==="front",I=((F*13+_*7)%5+5)%5,w,A;if(B)w=I<2?"#":"+",A=gH(S,b,0.018)?1:0.85;else if(D)w=I<2?":":"·",A=0.32+I%2*0.08;else{let f=O.surface.light;w=O.surface.face==="bevel"?"+":I<2?"x":":",A=Math.min(1,(O.surface.face==="bevel"?0.53:0.63)+f*0.46)}$.globalAlpha=A,$.fillText(w,J+_*q,Q+F*q)}}$.globalAlpha=1}function XR($,J,Q,Z,W,K,X,H,Y){let{cosYaw:U,sinYaw:G,cosPitch:E,sinPitch:q}=K;J.forEach(({left:M,x:O,y:F,row:N,stages:R},_)=>{let L=H===void 0||R.includes(H),k=M?Math.PI+(N-1)*0.62:(1-N)*0.62,P=(k-Math.PI/2+Math.PI*4)%y6-y6/2,C=(FJ-X5*0.82)/Math.cos(P),S=C*Math.cos(k),b=C*Math.sin(k),B=Q+(S*U-A9*G)*W,D=Z-(b*E-(S*G+A9*U)*q)*W,I=O+(B-O)*0.32;if($.strokeStyle=L?"#edeee57f":"#edeee52d",$.lineWidth=1,$.setLineDash([2,3]),$.beginPath(),$.moveTo(O,F),$.lineTo(I,F),$.lineTo(B,D),$.stroke(),$.setLineDash([]),$.fillStyle=L?"#edeee5bd":"#edeee549",$.fillRect(B-1,D-1,2,2),Y||!L)return;let w=(X+_*453)%3400/1050;if(w>=1)return;let A=w**1.55;$.globalAlpha=Math.sin(w*Math.PI)*0.85,$.fillStyle="#edeee5";let f=O+(B-O)*A,h=F+(D-F)*Math.max(0,(A-0.32)/0.68);$.fillRect(f-1,h-1,2,2),$.globalAlpha=1})}function T9($,J,Q){let Z=$.querySelector("canvas"),W=Z.getContext("2d");if(!W)return;let K=$.querySelector(".platform-hub__mark"),X=[...$.querySelectorAll("[data-hub-stages]")].map((w)=>({item:w,text:w.querySelector("span"),stages:w.dataset.hubStages.split(" ").map(Number)})),H=new AbortController,Y=performance.now(),U=h1($,J,Z),G=0,E=0,q=0,M=0,O=[],F=0,N=-1/0,R=!0,_=0.56,L=0.32,k,P=Y;function C(){if(!F&&G&&E&&R&&!document.hidden)F=requestAnimationFrame(S)}function S(w){if(F=0,!Z.isConnected||Z.closest("[hidden]"))return;let A=w-N;if(!J&&A<(M<160?36:30)){C();return}N=w;let f=w-Y,h=Q?.();if(h!==k){k=h,P=w;for(let{item:o,stages:a}of X)o.toggleAttribute("data-hub-dimmed",!a.includes(h))}if(!J){let o=1-Math.exp(-Math.min(A,100)/155),a=U.read(w);_+=(0.56+Math.sin(f/1770)*0.1+a.x*0.1-_)*o,L+=(0.32+Math.sin(f/2210)*0.043-a.y*0.065-L)*o}let x={cosYaw:Math.cos(_),sinYaw:Math.sin(_),cosPitch:Math.cos(L),sinPitch:Math.sin(L)},p=E*0.5,y=M*0.465;if(W.clearRect(0,0,G,E),XR(W,O,q,p,y,x,w-P,h,J),W.fillStyle="#edeee5",KR(W,q,p,y,M,x),!J)C()}function b(){if(G=Z.clientWidth,E=Z.clientHeight,!G||!E)return;let w=Math.min(devicePixelRatio||1,1.5);Z.width=Math.round(G*w),Z.height=Math.round(E*w),W.setTransform(w,0,0,w,0,0);let A=Z.getBoundingClientRect(),f=K.getBoundingClientRect();q=K.offsetWidth/2+f.left-A.left,M=K.clientWidth,O=X.map(({text:h,stages:x},p)=>{let y=h.getBoundingClientRect(),o=p<3;return{left:o,stages:x,row:p%3,x:(o?y.right+6:y.left-6)-A.left,y:y.top+y.height/2-A.top}}),C()}let B={signal:H.signal};document.addEventListener("visibilitychange",C,B);let D=new ResizeObserver(b);D.observe(Z);let I=new IntersectionObserver(([w])=>{R=w.isIntersecting,C()});return I.observe(Z),b(),()=>{cancelAnimationFrame(F),D.disconnect(),I.disconnect(),U.stop(),H.abort()}}var OJ="Kubernetes и GitOps",uH=[{title:"Развертывание",action:"Выпуск сервисов из Git",detail:"Настройки платформы описаны в коде, поэтому окружение можно развернуть повторно. Argo CD применяет конфигурацию из Git, а Kubernetes запускает приложения из образов в Harbor.",output:"Git → Argo CD → Kubernetes"},{title:"Сеть и масштаб",action:"Наблюдаемая сеть и автоматический масштаб",detail:"Cilium обеспечивает связь между сервисами, а Hubble показывает, какой трафик проходит между ними. За автомасштабирование отвечают сценарии Ansible.",output:"Cilium · Hubble · Ansible"},{title:"Доступы",action:"Корпоративный вход и права по ролям",detail:"Argo CD использует Dex для связи с корпоративным LDAP. Vault также подключен к LDAP. Группы сотрудников определяют роли в Argo CD и политики доступа в Vault.",output:"LDAP → Dex → Argo CD"}],HR=[{title:"Развертывание",tools:[{tools:"Kubernetes",symbol:"K8s",name:"Среда запуска",detail:"Общее окружение, в котором разворачиваются сервисы платформы."},{tools:"Argo CD",symbol:"GitOps",name:"Доставка конфигурации",detail:"Синхронизирует конфигурацию приложений в Kubernetes с Git."},{tools:"Harbor",symbol:"Image",name:"Хранилище образов",detail:"Реестр контейнерных образов, используемых при развертывании."},{tools:"IaC",symbol:"IaC",name:"Развертывание из кода",detail:"Конфигурация инфраструктуры платформы описана в коде и воспроизводится при развертывании."}]},{title:"Сеть и масштабирование",tools:[{tools:"Cilium · Hubble",symbol:"Flow",name:"Сеть и видимость трафика",detail:"Cilium соединяет сервисы, Hubble показывает сетевые потоки между ними."},{tools:"Ansible",symbol:"Scale",name:"Автомасштабирование",detail:"Сценарии Ansible автоматизируют масштабирование платформы."}]},{title:"Секреты и доступы",tools:[{tools:"Vault",symbol:"Vault",name:"Хранение секретов",detail:"Доступ к секретам ограничен политиками Vault."},{tools:"LDAP · RBAC",symbol:"Access",name:"Вход и разграничение прав",detail:"LDAP обеспечивает вход в Vault и Argo CD. Группы привязаны к политикам Vault и ролям Argo CD."}]}],lH=`<figure class="platform-hub" aria-label="Компоненты платформы Kubernetes">
  <canvas class="platform-hub__canvas" aria-hidden="true"></canvas>
  <ul class="platform-hub__group platform-hub__group--left">
    <li data-hub-stages="0 2"><span>Argo CD</span></li>
    <li data-hub-stages="0"><span>Harbor</span></li>
    <li data-hub-stages="2"><span>Dex</span></li>
  </ul>
  <div class="platform-hub__mark" aria-hidden="true"></div>
  <ul class="platform-hub__group platform-hub__group--right">
    <li data-hub-stages="1"><span>Cilium · Hubble</span></li>
    <li data-hub-stages="1"><span>Ansible</span></li>
    <li data-hub-stages="2"><span>Vault</span></li>
  </ul>
  <figcaption>Kubernetes</figcaption>
</figure>`,YR=`<ul class="paas-launch__route" aria-label="Компоненты проекта">
  ${uH.map(({title:$})=>`<li>${$}</li>`).join("")}
</ul>`;function mH(){return[{id:"overview",label:"Обзор",layout:"paas-hero case-hero--compact",markup:`
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / Развертывание и эксплуатация</p>
        <h1 id="document-title">${OJ}</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Результат</p>
          <p>Общая среда для выпуска сервисов на Kubernetes. Новые проекты подключаются к готовому процессу развертывания, платформа масштабируется автоматически, а доступы управляются централизованно.</p>
        </div>
      </div>
      <div class="paas-launch platform-overview">${lH}${YR}</div>`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:l7(uH,"Как работает / Kubernetes","Компоненты платформы",lH)},{id:"stack",label:"Технологии",layout:"paas-details",markup:u7(HR,"delivery-platform")}]}function dH($,J){return m7($,J,(Q,Z,W)=>T9(Q.closest(".platform-hub"),Z,W))}function cH($,J){let Q=$.querySelector(".platform-overview .platform-hub"),Z;return{start(){Z=T9(Q,J)},stop(){Z?.(),Z=void 0}}}var nH=new Set(["index","atlas","carousel"]),UR={paas:`
                    . : : .
               . : + x x x + : .
          . : + x x x x x x x x + : .
     . : + x x x x x x x x x x x x x + : .
     + : . x x x x x x x x x x x x . : +
     :     ' : + x x x x x x + : '    :
     :  .. ..   ' : + x + : '    o o  :
     + : .          ' + '          . : +
          ' : .       :       . : '
     + : .     ' : .  :  . : '     . : +
     :  ·· ··       ' + '       o o   :
     + : .                         . : +
          ' : .               . : '
               ' : .     . : '
                    ' + '
`,llmops:`
                          . : + : .
                        : + x x x + :
              . . + - - + x + # + x + - - + . .
              :         : + x x x + :         :
     . : .    :           ' : + : '           :   . : .
    : + x : - +                               + - : x + :
     ' : '    :           . : + : .           :   ' : '
              :         : + x x x + :         :
              ' . + - - + x + # + x + - - + . '
                        : + x x x + :
                          ' : + : '
`,operations:`
                       . + .              .
                   . : + :          . : +
               . : + :          . : + :
            . : + :            : + :
               ' : + :        : + :
                   ' : + .   : + :
                        '   : + :
                           : + :
                          : + :    . + .
                         : + :     : + : .
                                    ' : + : .
                                        ' : + : .
                                    . : + : '
                                . : + : '
                               ' : '
`,"delivery-platform":`
                           . : .
                     . : + : : : + : .
              . : + : .      +      . : + : .
            + :              x              : +
           :         x . : + x + : . x        :
          .           + x :  +  : x +          .
          :           : x    x    x :          :
          :          :   x + # + x   :         :
         .     + x + x + x + # + x + x + x +    .
          :          :   x + # + x   :         :
          :           : x + : : + x :          :
           .        . x + : . . : + x .       .
            :      x + :         : + x       :
             + :     '             '     : +
                  + : : : : : : : : : +
`};function GR($){return`<pre class="project-preview__art" aria-hidden="true">${UR[$.id].trimEnd().replace(/^\n/,"")}</pre>`}function H5($,J,Q){return`<a class="${J}" href="#case-${$.id}">${Q}</a>`}var Y5='<span class="project-preview__arrow" aria-hidden="true">→</span>',U5='<h1 class="project-preview__title">Проекты</h1>';function ER($){return`${U5}
    <ul class="project-preview__index">
      ${$.map((J)=>`<li>${H5(J,"project-preview__entry",`
        <span><strong>${J.name}</strong><span>${J.result}</span></span>${Y5}
      `)}</li>`).join("")}
    </ul>`}function qR($){return`${U5}
    <ul class="project-preview__atlas">
      ${$.map((J)=>`<li>${H5(J,"project-preview__tile",`
        ${GR(J)}
        <span class="project-preview__tile-copy"><strong>${J.name}</strong><span>${J.result}</span></span>
        ${Y5}
      `)}</li>`).join("")}
    </ul>`}function NR($){return`<div class="project-preview__rail-heading">
    ${U5}<span class="project-preview__swipe">← Листайте →</span><output data-project-position aria-label="Позиция в карусели">1 / ${$.length}</output>
  </div>
  <div class="project-preview__rail-shell">
    <div class="project-preview__rail-controls" role="group" aria-label="Листать проекты">
      <button class="paas-deck__back section-glass" type="button" data-project-shift="-1" aria-label="Предыдущий проект" disabled><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
      <button class="paas-deck__back section-glass" type="button" data-project-shift="1" aria-label="Следующий проект"><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
    </div>
    <ul class="project-preview__rail" data-project-rail aria-label="Проекты">
      ${$.map((J,Q)=>`<li ${Q===0?"data-project-current":""}>
        ${H5(J,"project-preview__slide",`
          ${J.id==="delivery-platform"?`<div class="platform-hub project-preview__badge" data-project-model="${J.id}" aria-hidden="true">
                <canvas class="platform-hub__canvas"></canvas><div class="platform-hub__mark"></div>
              </div>`:`<canvas class="project-preview__model" data-project-model="${J.id}" aria-hidden="true"></canvas>`}
          <div class="project-preview__feature-copy">
            <h2>${J.name}</h2>
            <p>${J.result}</p>
            <span class="project-preview__slide-open">Открыть кейс ${Y5}</span>
          </div>`)}
      </li>`).join("")}
    </ul>
  </div>`}var MR={paas:($,J)=>L7($,J,()=>3),llmops:d7,operations:n7,"delivery-platform":T9};function RR($){let J=$.querySelector("[data-project-rail]"),Q=[...J.children],[Z,W]=$.querySelectorAll("[data-project-shift]"),K=$.querySelector("[data-project-position]"),X=matchMedia("(prefers-reduced-motion: reduce)"),H=Q.map((F)=>F.querySelector("[data-project-model]")),Y=new Map,U=!1,G=-1;function E(F,N){let R=H[F],_=Y.get(F);if(!R||_?.animate===N)return;_?.stop?.(),Y.set(F,{animate:N,stop:MR[R.dataset.projectModel](R,!N)})}function q(F){return F.getBoundingClientRect().left-J.getBoundingClientRect().left+(F.offsetWidth-J.clientWidth)/2}function M(){let F=Q.map((N)=>Math.abs(q(N)));return F.indexOf(Math.min(...F))}function O(){let F=M(),N=`${F+1} / ${Q.length}`;if(K.value!==N)K.value=N;if(Z.disabled=F===0,W.disabled=F===Q.length-1,Q.forEach((R,_)=>R.toggleAttribute("data-project-current",_===F)),!U||G===F)return;for(let[R,_]of Y){if(Math.abs(R-F)<=1)continue;_.stop?.(),Y.delete(R)}E(F-1,!1),E(F+1,!1),E(F,!X.matches),G=F}return J.addEventListener("scroll",O,{passive:!0}),$.addEventListener("click",(F)=>{let N=F.target.closest("[data-project-shift]");if(!N)return;let R=Q[M()+Number(N.dataset.projectShift)];if(R)J.scrollBy({left:q(R),behavior:X.matches?"instant":"smooth"})}),{setActive(F){if(U===F)return;if(U=F,U)O();else{for(let N of Y.values())N.stop?.();Y.clear(),G=-1}}}}function sH($,J,Q,Z){let W=document.createElement("div");W.className=`project-preview project-preview--${J}`,W.innerHTML={index:ER,atlas:qR,carousel:NR}[J](Q),$.dataset.projectLayout=J,$.append(W);let K=J==="carousel"?RR(W):void 0;return W.addEventListener("click",(X)=>{let H=X.target.closest('a[href^="#case-"]');if(!H||X.button||X.metaKey||X.ctrlKey||X.altKey||X.shiftKey)return;X.preventDefault(),Z(H.hash.slice(1))}),K}var oH=`
  <article class="section-page studio-about">
    <div class="studio-about__hero">
      <header class="studio-about__copy">
        <p class="paas-hero__label">О студии</p>
        <h1 id="document-title">WWN IT Solutions</h1>
        <p class="studio-about__lead">Инженерная студия. Разрабатываем веб-сервисы, настраиваем инфраструктуру и автоматизируем выпуск обновлений.</p>
        <p class="studio-about__detail">Запускаем новые продукты и подключаемся к действующим, когда нужно наладить релизы, улучшить мониторинг или разобраться со сбоями. После запуска помогаем с эксплуатацией и развитием.</p>
        <button class="studio-about__contact section-glass" type="button" data-section="contact">Обсудить проект <span aria-hidden="true">→</span></button>
      </header>
      <canvas class="studio-about__mark" aria-hidden="true"></canvas>
    </div>
    <nav class="studio-about__links" aria-label="Подробнее о студии">
      <button type="button" data-section="services"><span><strong>Решения</strong><small>Разработка, инфраструктура и автоматизация</small></span><span aria-hidden="true">→</span></button>
      <button type="button" data-section="process"><span><strong>Как работаем</strong><small>От обсуждения задачи до поддержки</small></span><span aria-hidden="true">→</span></button>
      <button type="button" data-open-projects><span><strong>Проекты</strong><small>Задачи, решения и результаты</small></span><span aria-hidden="true">→</span></button>
    </nav>
  </article>`;function iH($,J){let Q=$.getContext("2d"),Z=document.createElement("canvas").getContext("2d");if(!Q||!Z)return;let W=h1($,J),K=192,X=K/64;Z.canvas.width=K,Z.canvas.height=K,Z.scale(X,X),Z.lineWidth=6.3,Z.lineCap="round",Z.lineJoin="round",Z.stroke(new Path2D(v6));let H=Z.getImageData(0,0,K,K).data,Y=["x","+","#","x","+"],U=[":","·","+"],G=performance.now(),E=0,q=0,M=0,O=-1/0,F=!0;function N(){if(!E&&q&&M&&F&&!document.hidden)E=requestAnimationFrame(R)}function R(P){if(E=0,!J&&P-O<33){N();return}O=P;let C=(P-G)/1000,S=W.read(P),b=0.4+(J?0:Math.sin(C*0.86)*0.13)+S.x*0.24,B=0.26+(J?0:Math.sin(C*0.64)*0.085)-S.y*0.18,D=Math.cos(b),I=Math.sin(b),w=Math.cos(B),A=Math.sin(B),f=Math.min(q/65,M/48),h=Math.max(3.4,f*0.55),x=q*0.5-2*f,p=M*0.5-1.5*f;Q.clearRect(0,0,q,M),Q.font=`600 ${h*1.25}px ui-monospace, monospace`,Q.textBaseline="middle",Q.textAlign="center",Q.fillStyle="#edeee5";for(let y=0;(y+0.5)*h<M;y++){let o=(y+0.5)*h,a=(o-p)/f;if(Math.abs(a)>25)continue;for(let Q0=0;(Q0+0.5)*h<q;Q0++){let X0=(Q0+0.5)*h,L0=(X0-x)/f;if(Math.abs(L0)>35)continue;let q0=Q0*7+y*11;for(let c=0;c<=8;c++){let W0=(L0-I*c)/D,e=(a+A*(I*W0-D*c))/w,F0=Math.round((W0+32)*X),N0=Math.round((e+32)*X);if(F0<0||F0>=K||N0<0||N0>=K||H[(N0*K+F0)*4+3]<128)continue;let _0=c?U:Y;Q.globalAlpha=c?0.39+0.26*(1-c/8):0.72+0.24*(q0%9/8),Q.fillText(_0[q0%_0.length],X0,o);break}}}if(Q.globalAlpha=1,!J)N()}function _(){if(q=$.clientWidth,M=$.clientHeight,!q||!M)return;let P=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(q*P),$.height=Math.round(M*P),Q.setTransform(P,0,0,P,0,0),N()}let L=new ResizeObserver(_);L.observe($);let k=new IntersectionObserver(([P])=>{F=P.isIntersecting,N()});return k.observe($),document.addEventListener("visibilitychange",N),_(),()=>{W.stop(),cancelAnimationFrame(E),L.disconnect(),k.disconnect(),document.removeEventListener("visibilitychange",N)}}var FR=["·",":","+","x","#"],OR=[{normal:[0,0,1],point:($,J)=>[$,J,1],light:0.72},{normal:[1,0,0],point:($,J)=>[1,J,-$],light:0.46},{normal:[0,1,0],point:($,J)=>[$,1,-J],light:0.94}],LR=OR.map(($)=>({...$,points:Array.from({length:324},(J,Q)=>{let Z=Math.floor(Q/18),W=Q%18,K=(W+0.5)/9-1,X=(Z+0.5)/9-1;return{position:$.point(K,X),grain:(W*7+Z*13)%11,scaffold:Z%6===0||W%6===0,rim:Math.max(Math.abs(K),Math.abs(X))>0.83}})}));function aH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=h1($,J),K=matchMedia("(pointer: coarse)").matches,X=performance.now(),H=0,Y=0,U=0,G=-1/0,E=Q();function q(){if(!H&&Y&&U&&!document.hidden)H=requestAnimationFrame(M)}function M(N){H=0;let R=N-G;if(!J&&R<33){q();return}G=N;let _=J?0:N-X;E+=(Q()-E)*(J?1:1-Math.exp(-Math.min(90,R)/310));let L=W.read(N),k=0.54+Math.sin(_/2060)*0.095+L.x*0.26,P=0.34+Math.sin(_/2450)*0.048-L.y*0.18,C=Math.cos(k),S=Math.sin(k),b=Math.cos(P),B=Math.sin(P),D=Math.min(Y/3.65,U/3.25),I=Math.max(4,D*0.1);function w(A,f,h,x,p){let y=A*S+h*C;Z.globalAlpha=Math.min(1,p*(K?1.28:1)),Z.fillText(x,Y*0.5+(A*C-h*S)*D,U*0.5-(f*b-y*B)*D)}Z.clearRect(0,0,Y,U),Z.font=`${K?700:600} ${I}px ui-monospace, monospace`,Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle";for(let A of LR)for(let{position:[f,h,x],grain:p,scaffold:y,rim:o}of A.points){let a=Math.max(0,Math.min(1,E*1.44-(h+1)*0.66-p*0.027)),Q0=(1-a)*(1-E/2)*0.14,X0=(y||o?0.41:0.07)+a*0.48;w(f+A.normal[0]*Q0,h+A.normal[1]*Q0,x+A.normal[2]*Q0,FR[o?2:Math.min(4,Math.floor(a*3+p/6))],X0*A.light)}if(E>0.04)for(let A=0;A<70;A++){let f=A*Math.PI*2/70+_/1700,h=J?0.3:Math.sin(A/70*Math.PI)**4;w(Math.cos(f)*1.42,-1.12,Math.sin(f)*1.42,h>0.62?"+":"·",E*(0.09+h*0.23))}if(Z.globalAlpha=1,!J)q()}function O(){if(Y=$.clientWidth,U=$.clientHeight,!Y||!U)return;let N=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(Y*N),$.height=Math.round(U*N),Z.setTransform(N,0,0,N,0,0),q()}let F=new ResizeObserver(O);return F.observe($),document.addEventListener("visibilitychange",q),O(),()=>{W.stop(),cancelAnimationFrame(H),F.disconnect(),document.removeEventListener("visibilitychange",q)}}var DR=["·",":","+","x","#"],_R=Array.from({length:551},($,J)=>{let Q=(J%29-14)/14,Z=(Math.floor(J/29)-9)/9;return{u:Q,v:Z,grain:J*71%31/31}});function rH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=h1($,J),K=0,X=0,H=0,Y=-1/0,U=Q(),G=performance.now();function E(){if(!H&&K&&X&&!document.hidden)H=requestAnimationFrame(q)}function q(F){H=0;let N=F-Y;if(N<32&&!J){E();return}Y=F,U+=(Q()-U)*(1-Math.exp(-Math.min(80,N)/150));let R=J?0:(F-G)/1000,_=W.read(F),L=-0.51+Math.sin(R*0.68)*0.09+_.x*0.26,k=0.62+Math.sin(R*0.53)*0.06-_.y*0.19,P=Math.min(K/3.12,X/2.3),C=Math.cos(L),S=Math.sin(L),b=Math.cos(k),B=Math.sin(k),D=Math.sin(R*1.55),I=0.48+0.34*Math.max(0,1-Math.abs(1-U));Z.clearRect(0,0,K,X),Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle",Z.font=`600 ${Math.max(4.5,P*0.097)}px ui-monospace, monospace`;for(let w of[0,1])for(let{u:A,v:f,grain:h}of _R){let x=Math.max(Math.abs(A),Math.abs(f)),p=Math.cos(4*A-2*f+w*(0.8+U*0.3)),o=0.22*p*Math.sin(3*f+R*0.52)*(1-x**4)+(w-0.5)*I,a=1.28*A,Q0=0.79*f,X0=a*S+Q0*C,L0=Math.max(0,1-Math.abs(A-D)*8)*Math.min(1,U),q0=x===1?2:Math.floor(1.9+p*1.2+h*0.85);Z.globalAlpha=Math.min(1,0.21+w*0.18+(p+1)*0.14+L0*0.36),Z.fillText(DR[L0>0.58?4:q0],K*0.5+(a*C-Q0*S)*P,X*0.5-(o*b-X0*B)*P)}if(Z.globalAlpha=1,!J)E()}function M(){K=$.clientWidth,X=$.clientHeight;let F=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(K*F),$.height=Math.round(X*F),Z.setTransform(F,0,0,F,0,0),E()}let O=new ResizeObserver(M);return O.observe($),document.addEventListener("visibilitychange",E),M(),()=>{W.stop(),cancelAnimationFrame(H),O.disconnect(),document.removeEventListener("visibilitychange",E)}}var G5=[{label:"Разработка",title:"Запустить новый сервис",detail:"Разрабатываем веб-приложения и внутренние инструменты. Готовим среду для запуска и передаем работающий сервис.",project:"paas",visual:($,J)=>L7($,J,()=>3)},{label:"Инфраструктура",title:"Упростить выпуск и поддержку",detail:"Переносим конфигурации в код, автоматизируем релизы и настраиваем мониторинг. Разбираем повторяющиеся сбои и устраняем их причины.",project:"operations",visual:n7},{label:"Исследования",title:"Проверить техническую идею",detail:"Сравниваем подходы и собираем прототипы, чтобы проверить ограничения и риски до внедрения в продукт.",project:"llmops",visual:d7}],tH=[["План","Согласуем задачу и границы","Разбираемся в текущей системе, согласуем объем работ и заранее определяем, как проверим результат.","План работ и критерии приемки."],["Запуск","Собираем, проверяем, запускаем","Показываем промежуточные версии, проверяем рабочие сценарии и разворачиваем готовое решение.","Работающий сервис и документация."],["Поддержка","Помогаем после запуска","Разбираем сбои, выпускаем обновления и развиваем сервис по согласованному формату.","Согласованный порядок сопровождения."]],eH='<button class="studio-about__contact section-glass" type="button" data-section="contact">Обсудить проект <span aria-hidden="true">→</span></button>';function LJ($,J,Q=!1){return`<div class="studio-choices${Q?" section-glass":""}" role="group" aria-label="${J}">
    ${$.map((Z,W)=>`<button type="button" data-studio-choice="${W}" aria-pressed="${W===0}">${Z}</button>`).join("")}
  </div>`}var $Y=`<article class="section-page studio-screen studio-offerings">
  <div class="studio-offerings__body">
    <header class="studio-screen__header"><h1 id="document-title">Решения</h1>${eH}</header>
    <div class="studio-offerings__stage">
      <canvas aria-hidden="true"></canvas>
      <div class="studio-offerings__copy" aria-live="polite">
        ${G5.map(({title:$,detail:J,project:Q},Z)=>`<div data-studio-panel ${Z?"hidden":""}>
          <h2>${$}</h2><p>${J}</p>
          <button type="button" class="studio-screen__link" data-section="case-${Q}">Пример проекта <span aria-hidden="true">→</span></button>
        </div>`).join("")}
      </div>
    </div>
  </div>
  <footer class="paas-deck__footer">
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
    ${LJ(G5.map(({label:$})=>$),"Направления",!0)}
  </footer>
</article>`,JY=`<article class="section-page studio-screen studio-process">
  <div class="studio-offerings__body">
    <header class="studio-screen__header"><h1 id="document-title">Как работаем</h1>${eH}</header>
    <div class="studio-offerings__stage">
      <canvas aria-hidden="true"></canvas>
      <div class="studio-offerings__copy" aria-live="polite">
        ${tH.map(([,$,J,Q],Z)=>`<div data-studio-panel ${Z?"hidden":""}>
          <h2>${$}</h2><p>${J}</p>
          <p class="studio-process__result">${Q}</p>
        </div>`).join("")}
      </div>
    </div>
  </div>
  <footer class="paas-deck__footer">
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
    ${LJ(tH.map(([$])=>$),"Этапы работы",!0)}
  </footer>
</article>`;function QY($,J){let Q=[...$.querySelectorAll("[data-studio-choice]")],Z=[...$.querySelectorAll("[data-studio-panel]")],W=$.querySelector(".studio-offerings__stage canvas"),K=$.querySelector(".studio-offerings__body"),X=new AbortController,H=-1,Y=$.classList.contains("studio-research")?rH:$.classList.contains("studio-process")?aH:null,U;function G(E){if(E===H)return;if(H=E,Q.forEach((q,M)=>{q.setAttribute("aria-pressed",String(M===E)),Z[M].hidden=M!==E}),K.scrollTop=0,!W)return;if(Y){if(J||!U)U?.(),U=Y(W,J,()=>H)}else U?.(),U=G5[E].visual(W,J)}return $.addEventListener("click",(E)=>{let q=E.target.closest("[data-studio-choice]");if(q)G(Number(q.dataset.studioChoice))},{signal:X.signal}),G(0),()=>{U?.(),X.abort()}}var ZY={research:{title:`Проверка устойчивости
AI-систем`,summary:"Исследовательский прототип для оценки атак на LLM и проверки LoRA-адаптеров — с измерениями и границами применения.",chapters:[{title:`Поведение модели
нельзя принять на веру`,text:"Состязательные входные данные могут изменить поведение языковой модели. Подключаемые LoRA-адаптеры также требуют проверки. До внедрения защиты важно оценить не только устойчивость, но и влияние на качество ответов.",note:"Диссертационное исследование · AI security"},{title:`Защиту можно
проверить на стенде`,text:"Прототип объединяет сеансовый сдвиг LoRA-параметров, моделирование атак и аудит вычислений. Подход позволяет экспериментально сравнивать поведение модели и качество ответов при разных настройках защиты.",note:"Исследовательский прототип · VRF + LoRA"},{title:`Защита и качество
в одной проверке`,text:"На стенде моделируются атаки и сравнивается поведение модели при разных настройках защиты. Отдельный аудитор проверяет вычисления по эталонной модели. Так оценивается не только устойчивость, но и цена защиты: изменение ответов и вычислительные затраты.",note:"Python · PyTorch · Transformers · PEFT · LoRA",details:{title:"Что реализовано",text:"В прототипе проверяемый сдвиг формируется с использованием Ed25519 и SHAKE-256. Сервер инференса и аудитор могут работать в независимых процессах: аудитор воспроизводит сдвиг на эталонной модели и сравнивает логиты. Модуль защиты зарегистрирован как программа для ЭВМ, № 2025665020."}},{title:`Основа для пилота,
с измеренными границами`,text:"На 10 запросах AdvBench для TinyLlama-1.1B-Chat перенос найденных GCG-суффиксов и прямая оптимизация со сдвигом дали 0 успешных атак. При этом снизилось разнообразие длинных ответов. Результат дает основу для дальнейших пилотных проверок, но не означает универсальную защиту LLM.",note:"Ограниченная выборка · компромисс качества",details:{title:"Условия и границы применения",text:"Успех определялся по целевой утвердительной фразе в начале ответа. Выборка — 10 запросов AdvBench; LoRA r=8, амплитуда сдвига 0,1. На 8 вопросах MT-Bench разнообразие длинных ответов снизилось (distinct-2: 0,91 → 0,62), поэтому амплитуда требует настройки. Измерение проверки аудитором: в среднем 0,772 с на TinyLlama-1.1B-Chat, Apple MPS, 10 контрольных запросов. Эти результаты относятся к описанному стенду; они не означают универсальную защиту от промпт-инъекций. Подход требует доступа к весам модели и LoRA-адаптеру. Для промышленного применения в диссертации рекомендована стандартизированная ECVRF вместо экспериментальной схемы. Незначительное искажение логитов может не обнаруживаться при выбранном пороге. Промпт-инъекции на естественном языке требуют дополнительных механизмов обнаружения и ограничения полномочий агента."},metrics:[{value:"2/10 → 0/10",label:"успешных атак в тесте",detail:"Без сдвига → с VRF-сдвигом"},{value:"×3,20",label:"среднее отношение потерь GCG",detail:"Одинаковый бюджет: 500 шагов"}]}]},technicalArticles:[{id:"kubernetes-network",topics:["Kubernetes","kind","Cilium"],versions:[{language:"ru",platform:"Хабр",title:"Сеть kubernetes без магии: трассировка пакета на kind + Cilium",href:"https://habr.com/ru/articles/1073254/"}]},{id:"wildcard-certificates",topics:["TLS","DNS","Автоматизация"],versions:[{language:"ru",platform:"Хабр",title:"Автоматизация wildcard-сертификатов",href:"https://habr.com/ru/articles/1071764/"},{language:"en",platform:"DEV",title:"Automating wildcard certificates: avoid complex NS servers",href:"https://dev.to/wwr0ngn4m3/automating-wildcard-certificates-avoid-complex-ns-servers-27n2"}]},{id:"sentry-incident",topics:["Sentry","Observability"],versions:[{language:"en",platform:"DEV",title:"Investigating a Sentry Incident. Shadowboxing",href:"https://dev.to/wwr0ngn4m3/investigating-a-sentry-incident-1hbl"}]},{id:"llm-vrf-lora",topics:["LLM","VRF","LoRA"],versions:[{language:"en",platform:"DEV",title:"Defending LLM Agents from Gradient-Based Adversarial Attacks: A VRF+LoRA Approach",href:"https://dev.to/wwr0ngn4m3/defending-llm-agents-from-gradient-based-adversarial-attacks-a-vrflora-approach-di4"}]},{id:"database-migration",topics:["MariaDB","PostgreSQL","Debezium"],versions:[{language:"ru",platform:"Хабр",title:"Миграция MariaDB → PostgreSQL без даунтайма: почему обычные утилиты не подошли и как мы сделали это через Debezium",href:"https://habr.com/ru/articles/1061438/"},{language:"en",platform:"DEV",title:"Zero-Downtime MariaDB PostgreSQL Migration: Why the Usual Tools Fell Short, and How Debezium CDC Solved It",href:"https://dev.to/wwr0ngn4m3/zero-downtime-mariadb-postgresql-migration-why-the-usual-tools-fell-short-and-how-debezium-cdc-424f"}]},{id:"diy-assistant",topics:["LLM","Python","JavaScript"],versions:[{language:"ru",platform:"Хабр",title:"DE-1. DIY ассистент на LLM",href:"https://habr.com/ru/articles/853708/"}]}],scientificPublications:[{id:"llm-defense-review-2025",kind:"journal",language:"ru",title:"От эксплуатации к защите: анализ методов защиты от атак на языковые модели",year:2025,venue:"Проблемы информационной безопасности. Компьютерные системы",issue:"№ 3",authors:["Величко И. С.","Беззатеев С. В."],pages:"110–120",href:"https://jisp.spbstu.ru/article/2025.23.10/",doi:"10.48612/jisp/2nkk-unee-uuzv"},{id:"llm-attacks-review-2025",kind:"journal",language:"ru",title:"От эксплуатации к защите: анализ атак на большие языковые модели",year:2025,venue:"Проблемы информационной безопасности. Компьютерные системы",issue:"№ 1",authors:["Величко И. С.","Беззатеев С. В."],pages:"43–58",href:"https://jisp.spbstu.ru/article/2025.20.4/",doi:"10.48612/jisp/mbvv-n1u7-z7be"},{id:"vrf-journal-2024",kind:"journal",language:"ru",title:"Распределенный протокол генерации псевдослучайных чисел на основе алгоритма проверяемой случайной функции",year:2024,venue:"Информационно-управляющие системы",issue:"№ 3",authors:["Величко И. С.","Афанасьева А. В.","Беззатеев С. В."],pages:"32–40",href:"https://i-us.ru/index.php/ius/article/view/16284",doi:"10.31799/1684-8853-2024-3-32-40"},{id:"vrf-optimized-2024",kind:"conference",language:"en",href:"https://doi.org/10.1109/ICCT62929.2024.10874948",title:"Optimized VRF-Driven Distributed Randomness Generation Protocol",year:2024,venue:"2024 8th International Conference on Information, Control, and Communication Technologies (ICCT)",authors:["Ivan Velichko","Sergey Bezzateev","Alexandra Afanasyeva"],pages:"1–5",doi:"10.1109/ICCT62929.2024.10874948"},{id:"vrf-distributed-2023",kind:"conference",language:"en",href:"https://doi.org/10.1109/ICSC60084.2023.10349973",title:"Distributed Pseudorandom Generation Protocol Based on VRF Algorithm",year:2023,venue:"2023 3rd Intelligent Cybersecurity Conference (ICSC)",authors:["Ivan Velichko","Sergey Vanurin","Alexandra Afanasyeva","Sergey Bezzateev","Mikhail Sayfullin","Konstantin Zhidanov"],pages:"32–38",doi:"10.1109/ICSC60084.2023.10349973"},{id:"lora-certification-2026",kind:"journal",language:"ru",title:"Механизм сертификации и верификации LoRA адаптеров",year:2026,venue:"Экономика и качество систем связи",issue:"№ 1 (39)",authors:["Величко И. С."],pages:"87–94",href:"https://journal-ekss.ru/wp-content/uploads/2026/03/87-94-Величко.pdf",format:"pdf"}]};var WY=`....................................................
....................................................
....................................................
....................................................
....................................................
..............................1.....................
............................11121...................
...........................21..11........21.........
...........................22..1..1.....21..........
...........................1.......1.1131...........
...............22.....1333444333..1..22.............
.............121241.134432211322421132..............
..............1322332331.1431.22.3331...............
................2334343123344334133..11.............
...........121..3443343443224444442.21..............
............13333331334432..131344332.211...........
.............24311232234433334444432332.............
.............332112443444444444444443322............
............22143323444444444434344313333...........
...........13114441344444444444434443.3233121.......
..........2.224444444444444444444432231323.2........
.........2..343224444444444444444422.424122.........
........231.3412.3444444444444444442.333.121........
........122.4311144444444444444443431333.121........
...........24322344444444444444444422432.22.........
..........14444444444444444444444443344332..........
.........13323244444444444444444444442321...........
.........2421244444444444444444444442.31......11....
.........1422334444444444444444444442141.1112231....
..........3324.344444444444444444433433222211.......
...........333.244444444444444434444332.........11..
............34333444444444444443343343444333333321..
............2443343134423444444434343.12344211......
...........112344441314444443234434122..............
...........22.223344313213434233332..31.............
...........112.233134443224322234311..21............
...........12..112332344343...121..11..1............
............22.1211332334433221.....................
............121..1.2232144231.......................
..................2212121333221.....................
................1222113......2221...................
..................22.32......1......................
..................2..3.......11.....................
.................2..11.......1......................
..............213..1.1.......1......................
.............232..2..1.......1......................
.............22..21..1......1.......................
................11...1..............................
....................1...............................
....................1...............................
....................................................
....................................................`.split(`
`),KY="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z";var XY=[];for(let $=0;$<3;$++)for(let J=0;J<32;J++)for(let Q=0;Q<24;Q++){if(J<6&&Q>17+J)continue;let Z=J===0||J===31||Q===0||Q===Math.min(23,17+J),W=$===0&&Q>2&&Q<21&&J>7&&J<27&&J%3===0&&(J<15||Q<19-J%5),K=$===0&&J===6&&Q>=17;if(Z||W||K)XY.push({page:$,row:J,col:Q,edge:Z,ink:W})}function BR($){if($==="Хабр")return WY.flatMap((K,X)=>Array.from(K,(H,Y)=>H==="."?null:{x:Y-25.5,y:X-25.5,alpha:Number(H)/4}).filter(Boolean));let J=document.createElement("canvas");J.width=52,J.height=52;let Q=J.getContext("2d");Q.setTransform(2,0,0,2,2,2),Q.fill(new Path2D(KY),"evenodd");let{data:Z}=Q.getImageData(0,0,52,52),W=[];for(let K=0;K<52;K++)for(let X=0;X<52;X++){let H=Z[(K*52+X)*4+3]/255;if(H>0.27)W.push({x:X-25.5,y:K-25.5,alpha:H})}return W}function HY($,J,Q,Z){let W=$.getContext("2d");if(!W)return;let K=h1($,J),X=performance.now(),H=-1/0,Y=0,U=0,G=0,E=Q(),q=new Map;function M(){if(!G&&Y&&U&&!document.hidden)G=requestAnimationFrame(O)}function O(R){G=0;let _=R-H;if(!J&&_<32){M();return}H=R;let L=J?0:(R-X)/1000;E+=(Q()-E)*(1-Math.exp(-Math.min(90,_)/180));let k=K.read(R),P=0.38+Math.sin(L*0.75)*0.08+Math.sin(E*1.9)*0.14+k.x*0.22,C=0.34-k.y*0.19,S=Math.sin(C),b=Math.cos(C),B=Math.min(Y,U)*0.295,D=L*9%42-6;W.clearRect(0,0,Y,U),W.fillStyle="#edeee5",W.textAlign="center",W.textBaseline="middle";let I=Z();if(I){let w=Math.min(Y/59,U/(I.length===1?61:93));if(W.font=`700 ${w*1.53}px ui-monospace, monospace`,I.forEach(({platform:A},f)=>{if(!q.has(A))q.set(A,BR(A));let h=(f-(I.length-1)/2)*44,x=J?0:Math.sin(L*1.1+f*1.8)*0.8;for(let{x:p,y,alpha:o}of q.get(A))W.globalAlpha=0.46+o*0.48,W.fillText(o>0.55?"+":"·",Y/2+p*w,U/2+(h+x+y)*w)}),W.globalAlpha=1,!J)M();return}W.font=`600 ${Math.max(5,B*0.1)}px ui-monospace, monospace`;for(let{page:w,row:A,col:f,edge:h,ink:x}of XY){let p=(f-11.5)/11+w*0.18,y=(A-15.5)/13-w*0.18,o=w*0.32,a=Math.max(0,f-17)*Math.max(0,6-A)*0.009,X0=1/(1+(Math.sin(P)*p+S*y+o-a)*0.25),L0=Math.cos(P)*p-0.36*y,q0=0.24*p+b*y-o*0.23,c=J?0:Math.max(0,1-Math.abs(A-D)/5);W.globalAlpha=Math.min(1,(w===0?h?0.76:0.48:0.35)+c*0.24),W.fillText(x?f%4===0?"x":"·":h?"+":":",Y/2+L0*B*X0,U/2+(q0*X0+0.08)*B)}if(W.globalAlpha=1,!J)M()}function F(){Y=$.clientWidth,U=$.clientHeight;let R=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(Y*R),$.height=Math.round(U*R),W.setTransform(R,0,0,R,0,0),M()}let N=new ResizeObserver(F);return N.observe($),document.addEventListener("visibilitychange",M),F(),{stop(){K.stop(),cancelAnimationFrame(G),N.disconnect(),document.removeEventListener("visibilitychange",M)}}}var{research:E5,scientificPublications:YY,technicalArticles:GY}=ZY;function w9($,J,Q=""){return`<a href="${$}" target="_blank" rel="noopener" ${Q}>${J}</a>`}function EY($,J,Q,Z,W,K){return`<article class="section-page studio-screen ${J}">
    <div class="studio-offerings__body">
      <header class="studio-screen__header">
        <h1 id="document-title">${$}</h1>
        ${K}
      </header>
      ${Q}
    </div>
    <footer class="paas-deck__footer">
      <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
      ${LJ(Z,W,!0)}
    </footer>
  </article>`}function DJ({title:$,text:J,note:Q,details:Z,metrics:W},K){return`<section class="research-chapter">
    <${K}>${$.replaceAll(`
`," ")}</${K}>
    <p>${J}</p>
    ${W?`<dl class="research-metrics">${W.map(({value:X,label:H,detail:Y})=>`<div><dt>${H}</dt><dd><strong>${X}</strong><small>${Y}</small></dd></div>`).join("")}</dl>`:""}
    <p class="editorial-meta">${Q}</p>
    ${Z?`<details><summary>${Z.title}</summary><p>${Z.text}</p></details>`:""}
  </section>`}var[zR,kR,CR,IR]=E5.chapters,qY=EY("Исследования","studio-research",`
  <div class="studio-offerings__stage">
    <div class="studio-offerings__copy">
      <div data-studio-panel>
        <h2>${E5.title.replaceAll(`
`," ")}</h2>
        <p>${E5.summary}</p>
        ${DJ(zR,"h3")}
      </div>
      <div data-studio-panel hidden>
        ${DJ(kR,"h2")}
        ${DJ(CR,"h3")}
      </div>
      <div data-studio-panel hidden>
        ${DJ(IR,"h2")}
        <button type="button" class="studio-screen__link" data-section="contact">Обсудить похожую задачу <span aria-hidden="true">→</span></button>
      </div>
    </div>
    <canvas aria-hidden="true"></canvas>
  </div>`,["Обзор","Методика","Результаты"],"Разделы исследования",'<button type="button" class="studio-screen__link" data-section="blog">Статьи и публикации <span aria-hidden="true">→</span></button>');function PR({year:$,language:J,href:Q,title:Z,authors:W,venue:K,issue:X,pages:H,doi:Y,format:U,kind:G}){let E=Y?`https://doi.org/${Y}`:"";return`<p class="editorial-meta">${$} · ${G==="conference"?"Международная конференция · IEEE":"Научный журнал"}</p>
    <h2 lang="${J}">${Z}</h2>
    <p lang="${J}">${W.join(", ")}</p>
    <p class="blog-venue"><span lang="${J}">${K}</span>${X?` · ${X}`:""} · ${J==="ru"?"С.":"pp."} ${H}</p>
    <div class="editorial-versions">
      ${w9(Q,`Открыть ${U==="pdf"?"PDF":"публикацию"} ↗`)}
      ${E&&E!==Q?w9(E,`DOI ${Y}`):""}
    </div>`}function AR({topics:$,versions:J}){let Q=J.find((Z)=>Z.language===document.documentElement.lang)??J[0];return`<p class="editorial-meta">${$.join(" / ")}</p>
    <h2 lang="${Q.language}">${Q.title}</h2>
    <div class="editorial-versions">${J.map(({href:Z,language:W,platform:K})=>w9(Z,`${K} · ${W.toUpperCase()} ↗`,`hreflang="${W}"`)).join("")}</div>`}var TR={"llm-defense-review-2025":{labels:["ВАК","РИНЦ"],edn:"FHFGXI"},"llm-attacks-review-2025":{labels:["ВАК","РИНЦ"],edn:"SJYTYG"},"vrf-journal-2024":{labels:["Scopus","ВАК","РИНЦ"],edn:"FNYMEW"},"lora-certification-2026":{labels:["ВАК","РИНЦ"]}};function wR($){if($.kind==="conference")return w9($.href,"IEEE Xplore",'class="blog-index-badge"');let{labels:J,edn:Q}=TR[$.id]??{labels:[]};return J.map((Z)=>{let W=Z==="РИНЦ"&&Q?`https://elibrary.ru/${Q.toLowerCase()}`:$.href;return w9(W,Z,`class="blog-index-badge" aria-label="${Z} · открыть статью"`)}).join("")}var UY=[[...YY.filter(({kind:$})=>$==="conference"),...YY.filter(({kind:$})=>$==="journal")].map(($)=>({copy:PR($),badges:wR($)})),GY.map(($)=>({copy:AR($)}))],NY=EY("Блог и публикации","studio-blog",`
  <div class="blog-carousel">
    <button class="blog-shift section-glass" type="button" data-blog-shift="-1" aria-label="Предыдущий материал" disabled>←</button>
    ${UY.map(($,J)=>`<div class="blog-track" data-studio-panel ${J?"hidden":""} tabindex="0" role="region" aria-label="${J?"Статьи":"Публикации"}">
      ${$.map(({copy:Q,badges:Z})=>`<div class="blog-stage" data-blog-slide>
        <div class="blog-stage__copy">${Q}</div>
        <div class="blog-visual">
          <canvas aria-hidden="true"></canvas>
          ${Z?`<div class="blog-index-badges">${Z}</div>`:""}
        </div>
      </div>`).join("")}
    </div>`).join("")}
    <button class="blog-shift section-glass" type="button" data-blog-shift="1" aria-label="Следующий материал">→</button>
  </div>`,["Публикации","Статьи"],"Категории материалов",`<div class="blog-position"><span>Листайте</span><output aria-label="Позиция">1 / ${UY[0].length}</output></div>`);function MY($,J){let Q=$.querySelector(".blog-carousel"),Z=[...Q.querySelectorAll(".blog-track")],W=Z.map((R)=>[...R.children]),[K,X]=Q.querySelectorAll("[data-blog-shift]"),H=$.querySelector("output"),Y=new AbortController,U={signal:Y.signal},G=new Map,E=0;function q(R,_){return _.getBoundingClientRect().left-R.getBoundingClientRect().left}function M(){let R=Z[E],_=W[E].map((L)=>Math.abs(q(R,L)));return _.indexOf(Math.min(..._))}function O(){let R=M(),_=W[E],L=`${R+1} / ${_.length}`;if(H.value!==L)H.value=L;K.disabled=R===0,X.disabled=R===_.length-1;let k=new Set(_.slice(Math.max(0,R-1),R+2));for(let[P,{scene:C}]of G){if(k.has(P))continue;C?.stop(),G.delete(P)}for(let P of k){let C=!J&&P===_[R],S=G.get(P);if(S?.animate===C)continue;S?.scene?.stop();let b=_.indexOf(P),B=E===1?GY[b].versions:null,D=HY(P.querySelector("canvas"),!C,()=>b,()=>B);G.set(P,{scene:D,animate:C})}}function F(R){let _=Z[E],L=W[E][M()+R];if(L)_.scrollBy({left:q(_,L),behavior:J?"instant":"smooth"})}Z.forEach((R,_)=>R.addEventListener("scroll",()=>{if(_===E)O()},{...U,passive:!0})),$.addEventListener("click",(R)=>{let _=R.target.closest("[data-studio-choice]");if(_)E=Number(_.dataset.studioChoice),O()},U),K.addEventListener("click",()=>F(-1),U),X.addEventListener("click",()=>F(1),U),Q.addEventListener("keydown",(R)=>{if(R.key!=="ArrowLeft"&&R.key!=="ArrowRight")return;R.preventDefault(),F(R.key==="ArrowLeft"?-1:1)},U);let N=new ResizeObserver(O);return N.observe(Q),O(),()=>{Y.abort(),N.disconnect();for(let{scene:R}of G.values())R?.stop()}}var TJ=[{id:"paas",index:"01",name:"PaaS-платформа",kind:"Cloud-native платформа",result:"Запуск приложений из Git в инфраструктуре компании."},{id:"llmops",index:"02",name:"LLMOps",kind:"Референсная архитектура",result:"Архитектура AI-ассистента для корпоративной инфраструктуры."},{id:"operations",index:"03",name:"Инфраструктура как код",kind:"IaC и мониторинг",result:"Автоматизация обновлений и восстановления после сбоев."},{id:"delivery-platform",index:"04",name:OJ,kind:"Развертывание и эксплуатация",result:"Общий процесс выпуска, масштабирования и управления доступами."}],_7=new URLSearchParams(location.search),R5=document.body.hasAttribute("data-studio-release"),h9=document.documentElement.lang==="en"?"en":"ru",SR=h9==="ru"?"en":"ru";if(R5){for(let[$,J]of Object.entries({cover:"glass-split-schematic",brand:"top-left",font:"condensed",effect:"all",mark:"vertical",logo:"menu-sign",contactStyle:"caption",paasStyle:"live",paasWorkflow:"sequence",paasStack:"layers",projectLayout:"carousel"}))if(!_7.has($))_7.set($,J);if(navigator.doNotTrack!=="1")fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"page_view",value:`/${h9}`}),credentials:"omit",mode:"same-origin",keepalive:!0}).catch(()=>{})}var RY=_7.get("projectLayout"),a8=nH.has(RY)?RY:"",s1=($)=>document.getElementById($),jR=`<div class="cover-languages" role="group" aria-label="Язык">
  ${["ru","en"].map(($)=>$===h9?`<span lang="${$}" aria-current="true">${$.toUpperCase()}</span>`:`<a class="cover-locale" href="/${$}" hreflang="${$}" lang="${$}">${$.toUpperCase()}</a>`).join("")}
</div>`,k1=matchMedia("(prefers-reduced-motion: reduce)").matches,VY=P5(k1),fR=VY?'<button type="button" data-enable-tilt aria-live="polite">Включить наклон</button>':"",BY='<button data-open-projects>Проекты</button><button data-section="services">Решения</button><button data-section="about">О студии</button><button data-section="process">Процесс</button><button data-section="blog">Блог и публикации</button><button data-section="research">Исследования</button><button data-section="contact">Контакты</button>'+fR+(R5?jR:""),p6=s1("head"),V7=s1("orbit"),s7=s1("projects"),B7=s1("go"),wJ=s1("back"),l6=s1("demo-status"),zJ=s1("cover-details"),F5=[...zJ.querySelectorAll(".cover-link")],j9=Object.freeze({yaw:-0.77,pitch:0.087,scale:0.84,offsetX:0,offsetY:0.22}),vR=Object.freeze({yaw:-0.65,pitch:1.12,scale:1.6,offsetX:0,offsetY:-1.15}),yR=k1?120:850,VJ=0.85,FY=0.1*VJ,SJ={...j9},zY=0,kY=0,CY=!1,P1=!1,IY=null,O5=!1,PY=matchMedia("(pointer: coarse)").matches,hR=T5({touch:PY}),f9=($)=>Math.max(0,Math.min(1,$)),g6=($)=>{let J=f9($);return J*J*(3-2*J)},kJ=($,J,Q)=>$+(J-$)*Q,r8=!1,z1="loading",U1=0,B1=null,h6=0,CJ=!1,u6=0,i8=0,IJ=0,z7=!1,m6=!1,q5=0,PJ=[],S9=null,N5=!1,V8=YH({host:p6,cover:zJ,links:F5,params:_7,onChange:AY,directoryMarkup:BY}),o8=V8?.frame(j9)??j9;document.querySelector("[data-enable-tilt]")?.addEventListener("click",async($)=>{let J=$.currentTarget;J.disabled=!0,J.textContent="Проверяем датчики…";let Q=await VY(),Z={active:"Наклон включен",blocked:"Доступ к датчикам закрыт",unavailable:"Нет сигнала от датчиков"};J.textContent=Z[Q],J.disabled=!1});var X1,OY,jJ=a8?sH(s7,a8,TJ,l9):void 0,b6=a8?[]:TJ.map(($)=>{let J=document.createElement("a");return J.className="project",J.href=`/${h9}/projects/${$.id}`,J.addEventListener("click",(Q)=>{Q.preventDefault(),l9("case-"+$.id)}),J.dataset.project=$.id,J.setAttribute("aria-label",`${$.name}, открыть проект`),J.innerHTML=`<span class="project-top"><span class="project-index">${$.index}</span><span class="project-kind">${$.kind}</span></span><span class="project-bottom"><span class="project-name">${$.name}</span><svg class="project-arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></span>`,V7.append(J),J});function o7($){if(z1=$,document.body.dataset.phase=z1,z1!=="head"){if(b9(),X1)V8?.clearEffect?.(X1)}}function b9(){for(let $ of PJ)clearTimeout($);PJ=[];for(let $ of F5)$.classList.remove("is-previewing")}function bR(){if(k1||P1||document.hidden)return;for(let $ of F5){let J=Math.random()*50;PJ.push(setTimeout(()=>$.classList.add("is-previewing"),J)),PJ.push(setTimeout(()=>$.classList.remove("is-previewing"),J+290))}}function v9($,J="scatter"){X1?.setScatter($,{region:"all",mode:J}),document.body.dataset.scatter=$.toFixed(4)}function AY(){if(!V8)return;if(o8=V8.frame(j9),z1==="returning")SJ=o8;if(X1&&!B1&&U1===0)X1.setView({...o8,immediate:!0}),V8.drawGuides?.(X1)}function AJ(){let $=g6(U1/0.85),J=g6(U1/0.38),Q=g6((U1-0.45)/0.35),Z={};for(let K of Object.keys(j9))Z[K]=kJ(SJ[K],vR[K],$);X1?.setView({...Z,immediate:!0}),v9(J,B1?.to===0?"appear":"scatter"),s7.style.setProperty("--reveal",Q.toFixed(4));let W=Q>0.9&&!B1;s7.classList.toggle("is-active",W),s7.inert=!W,s7.setAttribute("aria-hidden",String(Q<=0.01)),jJ?.setActive(W&&!P1),zJ.classList.toggle("is-away",U1>0.03),zJ.inert=U1>0.03,B7.inert=U1>0.01,B7.classList.toggle("is-away",U1>0.01),wJ.hidden=Q<0.55,document.body.dataset.progress=U1.toFixed(4),document.body.dataset.pitch=Z.pitch.toFixed(4),document.body.dataset.projectsVisible=String(Q>0.9),document.body.classList.toggle("inside-projects",U1>0.8)}function x9(){if(a8||!X1)return;let{center:$,radii:J}=lX.brain,Q=(q,M=0)=>[$[0]+Math.cos(q)*J[0]*(M%2?0.9:1),$[1]+Math.sin(q*2+M*0.5)*0.18,$[2]+Math.sin(q)*J[2]],Z=TJ.map((q,M)=>Q(M*Math.PI*2/b6.length+IJ*0.22,M)),W=X1.projectPoints(Z),K=W.map((q)=>q.depth),X=Math.min(...K),H=Math.max(...K);W.forEach((q,M)=>{let O=(q.depth-X)/Math.max(0.001,H-X),F=0.78+O*0.26;b6[M].style.left=`${q.x}px`,b6[M].style.top=`${q.y}px`,b6[M].style.transform=`translate(-50%,-50%) scale(${F})`,b6[M].style.zIndex=String(Math.round(O*100)+1),b6[M].style.opacity=String(0.55+O*0.45)});let Y=X1.projectPoints(Array.from({length:65},(q,M)=>Q(M/64*Math.PI*2+IJ*0.22))),U=V7.querySelector("svg");U.setAttribute("viewBox",`0 0 ${p6.clientWidth} ${p6.clientHeight}`),U.querySelector("path").setAttribute("d",Y.map((q,M)=>`${M?"L":"M"}${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join(" "));let G=X1.projectPoints([$])[0],E=V7.querySelector(".orbit-center");E.style.left=`${G.x}px`,E.style.top=`${G.y}px`,document.body.dataset.orbitPaused=String(z7||m6||k1)}function j8(){if(!u6&&!document.hidden)u6=requestAnimationFrame(xR)}function xR($){if(u6=0,S9!==null){let Z=f9(($-S9)/360);if(v9(g6(Z)),Z<1)j8();else S9=null,N5=!0,l9("contact");return}let J=null,Q=i8?Math.min(($-i8)/1000,0.04):0;if(i8=$,z1==="assembling"&&!P1){let Z=h6;h6=Math.min(h6+Q,VJ);let W=g6(1-h6/VJ);if(v9(W,"appear"),X1.setView({...o8,yaw:o8.yaw-0.055*W,pitch:o8.pitch+0.036*W,offsetY:o8.offsetY-0.055*W,immediate:!0}),V8?.drawGuides?.(X1),Z<FY&&h6>=FY&&!CJ)bR();if(h6===VJ)TY()}if((z1==="head"||z1==="assembling")&&!B1&&!P1&&!k1){let Z=V8?.getAttention?.(),K=R1.active?{x:R1.x,y:R1.y,present:!0,tilt:!0,tracking:Math.hypot(R1.x,R1.y)>0.16}:{x:zY,y:kY,present:CY,tracking:O5},X=Z?{...Z,present:!0,tracking:!0}:K,H=hR.update(Q,X);X1.setGaze(H),document.body.dataset.attention=H.attention}if(z1==="head"&&!P1)V8?.updateEffect?.(X1,$);if(B1){let Z=f9(($-B1.started)/B1.duration);if(U1=kJ(B1.from,B1.to,g6(Z)),Z===1){let W=B1.to;U1=W,B1=null,o7(W?"projects":"head"),l6.textContent=W?"Проекты открыты.":"Исходный вид головы восстановлен.",J=W?wJ:B7}AJ(),J?.focus({preventScroll:!0})}if(U1>0.4&&!z7&&!m6&&!k1)IJ+=Q;if(U1>0.01)x9();if(!P1&&(B1||z1==="assembling"||z1==="head"&&!k1||z1==="projects"&&!a8&&!z7&&!m6&&!k1))j8()}function g9($){if($===1&&(z1==="loading"||z1==="assembling")){CJ=!0;return}if(!r8&&$===0&&U1>0){if(location.hash==="#projects")history.replaceState(null,"",location.pathname+location.search);U1=0,B1=null,AJ(),o7("loading"),B7.disabled=!0,p9();return}if(!r8||$===U1&&!B1)return;if($===0&&location.hash==="#projects")history.replaceState(null,"",location.pathname+location.search);if($===1&&U1===0)SJ={...X1.getStats().view},X1.setGaze();B1={from:U1,to:$,started:performance.now(),duration:yR*Math.max(0.3,Math.abs($-U1))},o7($?"entering":"returning"),s7.inert=!0,s7.classList.remove("is-active"),l6.textContent=$?"Камера поднимается над головой. Символы рассеиваются.":"Возвращаемся к исходной модели.",i8=0,AJ(),j8()}B7.addEventListener("click",_5);wJ.addEventListener("click",V5);V7.addEventListener("pointerenter",()=>{z7=!0,x9()});V7.addEventListener("pointerleave",($)=>{if($.relatedTarget?.closest?.(".project"))return;z7=!1,i8=0,j8()});V7.addEventListener("focusin",()=>{m6=!0,x9()});V7.addEventListener("focusout",($)=>{if(!V7.contains($.relatedTarget))m6=!1,i8=0,j8()});addEventListener("keydown",($)=>{if($.key==="Escape"&&P1){$.preventDefault(),vJ();return}if($.key==="Escape"&&U1>0)$.preventDefault(),V5()});addEventListener("resize",()=>{AY(),x9(),j8()});document.addEventListener("visibilitychange",()=>{if(document.hidden)b9(),q5=performance.now(),cancelAnimationFrame(u6),u6=0;else{if(B1&&q5)B1.started+=performance.now()-q5;i8=0,j8()}});function TY(){if(o7("head"),B7.disabled=!1,l6.textContent="Модель готова. GO открывает проекты.",CJ)CJ=!1,g9(1)}function p9(){return OY??=Promise.resolve().then(()=>{if(X1=uX(p6,{modelUrl:new URL("./sculpt/head-study.glb?v=studio-1",import.meta.url).href,expressionsUrl:new URL("./sculpt/expressions.json",import.meta.url).href,cellSize:PY?4.7:5.4,ink:"#edeee5",view:o8,autoRotate:!1,pointerRotation:!1,onState($){document.body.dataset.moduleState=typeof $==="string"?$:String($?.state??$?.type??"updated")}}),!k1)v9(1,"appear");return X1.ready.then(()=>{if(r8=!0,document.body.dataset.ready="true",s1("load-note").hidden=!0,V8?.drawGuides?.(X1),location.hash==="#projects"){if(z1!=="projects")fJ()}else if(k1)TY();else o7("assembling"),l6.textContent="Фигура собирается.";i8=0,j8(),vY()})}).catch(($)=>{o7("error"),s1("load-note").textContent="Не удалось загрузить модель.",l6.textContent="Ошибка загрузки модели.",B7.disabled=!a8,console.error($)}),OY}window.headDemo={go:_5,back:V5,getState:()=>({ready:r8,phase:z1,progress:U1,hoverPaused:z7,focused:m6,orbitTime:IJ,stats:X1?.getStats()})};addEventListener("pagehide",()=>{b9(),cancelAnimationFrame(u6),jJ?.setActive(!1),X1?.dispose()},{once:!0});var x6=s1("document-dialog"),S8=s1("document-content"),LY=_7.get("paasStyle")==="live",DY=_7.get("paasWorkflow"),gR=_7.get("paasStack"),pR=new Set(["cover","capsule","caption","toolbar"]),_Y=_7.get("contactStyle"),lR=pR.has(_Y)?_Y:"",L5=document.querySelector(".masthead"),BJ=L5.querySelector(".brand");BJ.href=location.pathname+location.search;function D5(){x6.style.setProperty("--studio-header-edge",`${Math.ceil(L5.getBoundingClientRect().bottom)}px`)}var uR=new ResizeObserver(D5);uR.observe(L5);addEventListener("resize",D5);var M5=($)=>String($??"").replace(/[&<>"']/g,(J)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[J]),wY=($)=>`<p>${M5($)}</p>`,SY=`<a class="document-cta section-glass" href="${Q5}" target="_blank" rel="noopener">Обсудить задачу в Telegram</a>`;function mR($,J,Q,Z=SY){return`<article class="section-page">
    <header class="section-intro">
      <h1 id="document-title">${M5($)}</h1>
      ${J?`<p>${M5(J)}</p>`:""}
    </header>
    <div class="section-flow">${Q}${Z}</div>
  </article>`}var D7,dR={paas:[nR,kH],llmops:[TH,wH],operations:[hH,bH],"delivery-platform":[cH,dH]};function cR($){let J=[...$.querySelectorAll('[role="tab"]')],Q=J.map((H)=>s1(H.getAttribute("aria-controls"))),Z=$.querySelector(".paas-deck__pages");$.querySelector(".paas-deck__back").addEventListener("click",vJ);let W=[...dR[$.dataset.caseDeck],zH].map((H)=>H($,k1)),K=0;W[K]?.start();function X(H){if(H===K)return;let Y=Q[H];W[K]?.stop(),Y.style.setProperty("--paas-entry-offset",H>K?"24px":"-24px"),Q[K].hidden=!0,Y.hidden=!1,J[K].tabIndex=-1,J[K].setAttribute("aria-selected","false"),J[H].tabIndex=0,J[H].setAttribute("aria-selected","true"),K=H,Z.scrollTop=0,W[K]?.start()}return J.forEach((H,Y)=>{H.addEventListener("click",()=>X(Y)),H.addEventListener("keydown",(U)=>{let G={ArrowLeft:(Y+J.length-1)%J.length,ArrowRight:(Y+1)%J.length,Home:0,End:J.length-1}[U.key];if(G===void 0)return;U.preventDefault(),X(G),J[G].focus({preventScroll:!0})})}),()=>W[K]?.stop()}function nR($){let J=$.querySelector("[data-paas-launch]"),Q=J.querySelector(".paas-launch__canvas"),Z=J.querySelector(".paas-launch__replay"),W,K;function X(){if(W?.(),W=MH(J,k1),!Q||K)return;Q.hidden=!1,K=L7(Q,k1),Q.hidden=!K,J.querySelector(".paas-launch__art").hidden=Boolean(K)}if(Z)Z.hidden=k1,Z.addEventListener("click",X);return{start:X,stop(){W?.(),K?.(),K=null}}}addEventListener("pagehide",()=>D7?.(),{once:!0});function _J($,J,Q,Z=""){return`<article class="section-page paas-case${Z}" data-case-deck="${$}">
    <footer class="paas-deck__footer">
      <button type="button" class="paas-deck__back section-glass" aria-label="Назад">
        <svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg>
      </button>
      <div class="paas-deck__tabs section-glass" role="tablist" aria-label="Экраны кейса ${J}">
        ${Q.map(({id:W,label:K},X)=>`<button type="button" role="tab" id="${$}-tab-${W}" aria-controls="${$}-${W}" aria-selected="${X===0}" tabindex="${X===0?0:-1}">${K}</button>`).join("")}
      </div>
    </footer>
    <div class="paas-deck__pages">
      ${Q.map(({id:W,layout:K,markup:X},H)=>`<section class="${K} paas-deck__panel" id="${$}-${W}" role="tabpanel" aria-labelledby="${$}-tab-${W}" tabindex="0" ${H?"hidden":""}>${X}</section>`).join("")}
    </div>
  </article>`}function sR($){if($.id==="llmops")return _J("llmops","LLMOps",AH());if($.id==="operations")return _J($.id,"IaC и мониторинг",yH());if($.id==="delivery-platform")return _J($.id,OJ,mH());if($.id==="paas"){let J=[["Подключить репозиторий","Выбрать проект в GitHub или GitLab."],["Собрать приложение","Платформа определяет стек и устанавливает зависимости."],["Запустить в облаке","Платформа разворачивает сервис и возвращает URL и логи."]];return _J("paas","PaaS",[{id:"overview",label:"Обзор",layout:"paas-hero",markup:`
        <div class="paas-hero__copy">
          <p class="paas-hero__label">Проекты / PaaS · On-premises</p>
          <h1 id="document-title">Запуск приложений в облаке</h1>
          <div class="paas-hero__result">
            <p class="paas-hero__label">Результат</p>
            <p>Платформа разворачивается в инфраструктуре компании и автоматизирует запуск приложений. Команды разработки быстрее получают ссылку на работающий сервис и доступ к логам.</p>
          </div>
        </div>
        ${NH(LY)}`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:`
        ${["sequence","trace"].includes(DY)?VH(DY):`<h2>Как проходит запуск</h2>
        <p>Разработчик нажимает «Запустить». Платформа сама готовит окружение.</p>
        <ol class="case-steps">${J.map(([Q,Z])=>`<li><strong>${Q}</strong>${wY(Z)}</li>`).join("")}</ol>`}`},{id:"stack",label:"Технологии",layout:"paas-details",markup:BH(gR)}],LY?" paas-case--live":"")}return null}function oR($){if($.startsWith("case-")){let W=TJ.find((K)=>K.id===$.slice(5));if(!W)return null;return sR(W)}let J="",Q="",Z="";if($==="services")return $Y;else if($==="about")return oH;else if($==="process")return JY;else if($==="research")return qY;else if($==="blog")return NY;else if($==="contact")return`<article class="contact-view"><h1 id="document-title" class="sr-only">Контакты</h1><div class="contact-layout">
   <div class="contact-qr"><canvas role="img" aria-label="QR для Telegram"></canvas></div>
   <div class="contact-channels"><a class="contact-channel section-glass" href="${Q5}" target="_blank" rel="noopener"><span>Telegram</span><strong>@wr0ngn4m3</strong></a>
   <a class="contact-channel section-glass" href="mailto:wwr0ngn4m3@gmail.com"><span>Почта</span><strong>wwr0ngn4m3@gmail.com</strong></a></div>
 </div></article>`;else if($==="resume")J=d9.resume.fullName,Q=d9.resume.headline,Z=wY(d9.resume.summary)+`<a class="document-cta" href="/${h9}/experience">Полное резюме</a>`;else if($==="more")J="Меню",Z=`<div class="directory section-glass">${BY}</div>`;else return null;return mR(J,Q,Z,$==="more"?"":SY)}function l9($,J=!1){if(P1&&!J&&location.hash===`#${$}`)return;let Q=oR($);if(!Q)return;if(D7?.(),D7=null,!P1)IY=document.activeElement;if(x6.dataset.contactStyle=$==="contact"?lR:"",S8.innerHTML=Q,z7=!0,P1=!0,jJ?.setActive(!1),b9(),X1)V8?.clearEffect?.(X1);document.body.dataset.documentOpen="",D5(),x6.hidden=!1,document.querySelector(".experience").inert=!0,x6.scrollTop=0,S8.scrollTop=0;let Z=s1("document-title");if(Z.tabIndex=-1,Z.focus({preventScroll:!0}),$==="contact")qH(S8.querySelector("canvas"),x6,k1);let W=S8.querySelector("[data-case-deck]");if(S8.querySelector("[data-studio-back]")?.addEventListener("click",vJ),W)D7=cR(W);else if($==="about")D7=iH(S8.querySelector(".studio-about__mark"),k1);else if(S8.firstElementChild.matches(".studio-screen")){let K=S8.firstElementChild,X=QY(K,k1),H=$==="blog"?MY(K,k1):null;D7=()=>{X(),H?.()}}if(!J)history.pushState({wwnPanel:!0},"",`#${$}`)}function y9({restoreCover:$=!0}={}){if(D7?.(),D7=null,N5){if(N5=!1,$)v9(0)}if(x6.hidden=!0,delete document.body.dataset.documentOpen,P1=!1,jJ?.setActive(z1==="projects"),document.querySelector(".experience").inert=!1,z7=!1,i8=0,$){if(location.hash!=="#projects")p9();IY?.focus({preventScroll:!0})}j8()}async function iR(){let $=S8.firstElementChild;if(!r8&&!a8){if(await p9(),!r8)return;if(!P1||S8.firstElementChild!==$)return}fJ(),y9({restoreCover:!1}),history.pushState({wwnPanel:!0},"","#projects"),wJ.focus({preventScroll:!0})}function _5(){if(location.hash==="#projects")return;if(P1){iR();return}if(history.pushState({wwnPanel:!0},"","#projects"),!r8&&a8)fJ();else g9(1)}function V5(){if(history.state?.wwnPanel&&location.hash==="#projects")history.back();else g9(0)}function fJ(){SJ=o8,B1=null,U1=1,B7.disabled=!1,o7("projects"),AJ(),x9(),l6.textContent="Проекты открыты."}function vJ(){if(history.state?.wwnPanel)history.back();else y9(),history.replaceState(null,"",location.pathname+location.search)}s1("close-document").addEventListener("click",vJ);BJ.addEventListener("click",($)=>{if($.button||$.metaKey||$.ctrlKey||$.shiftKey||$.altKey)return;if($.preventDefault(),location.hash)history.pushState(null,"",BJ.href);if(P1)y9({restoreCover:U1===0});if(BJ.focus({preventScroll:!0}),U1>0||B1)g9(0)});document.addEventListener("click",($)=>{let J=$.target.closest("[data-section]");if(S9!==null)return;if(J)if(J.dataset.section==="contact"&&z1==="head"&&!P1&&!k1){if(b9(),X1)V8?.clearEffect?.(X1);S9=performance.now(),j8()}else l9(J.dataset.section);else if($.target.closest("[data-open-projects]"))_5()});function jY(){let $=location.hash.slice(1);if($==="case-resilience")history.replaceState(null,"","#projects");if(location.hash==="#projects"){if(P1)y9();if((r8||a8)&&z1!=="projects")fJ()}else if($)l9(decodeURIComponent($),!0);else{if(P1)y9();if(U1>0||B1)g9(0);else p9()}}addEventListener("popstate",jY);if(R5)document.addEventListener("click",($)=>{let J=$.target.closest(".cover-locale");if(J)J.href=`/${SR}${location.hash}`});var fY;if(location.hash)jY();if(!P1&&z1!=="projects")p9();function vY(){if(k1)return;fY=setTimeout(async()=>{if(r8&&z1==="head"&&!P1&&!document.hidden)await X1.blink().catch(()=>{});vY()},5000+Math.random()*3000)}addEventListener("pagehide",()=>clearTimeout(fY),{once:!0});var yY=p6.closest(".experience");yY.addEventListener("pointermove",($)=>{if($.pointerType==="touch")return;let J=p6.getBoundingClientRect();zY=kJ(-1,1,f9(($.clientX-J.left)/J.width)),kY=kJ(-1,1,f9(($.clientY-J.top)/J.height)),CY=!0,O5=!0});yY.addEventListener("pointerleave",()=>{O5=!1});
