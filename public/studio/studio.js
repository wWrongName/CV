var l9={resume:{fullName:"Величко Иван Сергеевич",headline:"Fullstack-разработка, инфраструктура и менеджмент",summary:"Разрабатываю веб-сервисы, ускоряю доставку изменений и обеспечиваю стабильную работу инфраструктуры. Объединяю fullstack-разработку, DevOps и координацию frontend-команды: от пользовательского интерфейса до деплоя и сопровождения. Автоматизирую ручные операции, чтобы команда тратила меньше времени на рутину и сбои."}};var o7=($,J,Q)=>Math.max(J,Math.min(Q,$)),z5=($)=>{let J=o7($,0,1);return J*J*J*(J*(J*6-15)+10)};function k5({random:$=Math.random,touch:J=!1}={}){let Q=()=>J?3.2+$()*3.3:8+$()*7,Z=0,W=J?1.5+$()*1.8:7+$()*4,K=null,X=!1,H=0,Y=0,U=0,G=0,E=0,q=0,M=[{time:0,x:0,y:0,presence:0}];function O(F,{x:N=0,y:R=0,present:V=!1,tracking:L=!1}={}){if(F=o7(F,0,0.07),Z+=F,F>0){M.push({time:Z,x:o7(N,-1,1),y:o7(R,-1,1),presence:V?1:0});let P=Z-0.16;while(M.length>1&&M[1].time<=P)M.shift();let f=M[0],h=M[1]??f,b=o7((P-f.time)/Math.max(0.0001,h.time-f.time),0,1),l=1-Math.exp(-F*4);G+=(f.x+(h.x-f.x)*b-G)*l,E+=(f.y+(h.y-f.y)*b-E)*l,q+=(f.presence+(h.presence-f.presence)*b-q)*l}if(L)K=null;if(X&&!L)W=Z+7+$()*4;if(X=L,!L&&!K&&Z>=W)K={start:Z,yaw:($()<0.5?-1:1)*(J?0.12+$()*0.07:0.05+$()*0.04),pitch:($()-0.5)*(J?0.14:0.04),roll:($()-0.5)*(J?0.05:0.02),hold:0.65+$()*0.65};let k=0;if(K){let P=Z-K.start;if(k=z5(P/0.85)*(1-z5((P-0.85-K.hold)/1.15)),P>=2+K.hold)K=null,W=Z+Q()}let A=q*(1-k*0.75),I=L?0:1,S=G>0?0.136:0.095,y=E>0?0.078:0.048,B=G*S*A+(K?.yaw??0)*k+Math.sin(Z*0.53)*(J?0.028:0.009)*I,D=E*y*A+(K?.pitch??0)*k+Math.sin(Z*1.04)*(J?0.014:0.006)*I,C=(K?.roll??0)*k+Math.sin(Z*0.43)*(J?0.016:0.008)*I,T=(P,f,h)=>P+o7((f-P)*(1-Math.exp(-F*2.6)),-F*h,F*h);return H=T(H,B,J&&!L?0.22:0.15),Y=T(Y,D,0.1),U=T(U,C,0.08),{yaw:H,pitch:Y,roll:U,attention:K?"glance":L?"cursor":"rest"}}return{update:O}}var HW="180";var YW=0,YQ=1,UW=2;var UQ=1,GW=2,z8=3,Q7=0,a1=1,H8=2,Z7=0,e6=1,GQ=2,EQ=3,qQ=4,EW=5,q6=100,qW=101,NW=102,RW=103,MW=104,FW=200,OW=201,LW=202,DW=203,_W=204,VW=205,BW=206,zW=207,kW=208,CW=209,IW=210,PW=211,AW=212,TW=213,wW=214,R$=0,M$=1,F$=2,$9=3,O$=4,L$=5,D$=6,_$=7,SW=0,jW=1,fW=2,l8=0,vW=1,yW=2,bW=3,hW=4,xW=5,gW=6,pW=7;var N6=301,w7=302,V$=303,B$=304,J9=306,R6=1000,z$=1001,k$=1002,u8=1003,C$=1004;var S7=1005;var p1=1006,M6=1007;var m8=1008;var W7=1009,lW=1010,uW=1011,Q9=1012,NQ=1013,F6=1014,K7=1015,Z9=1016,RQ=1017,MQ=1018,O6=1020,mW=35902,dW=35899,cW=1021,nW=1022,k8=1023,I$=1026,W9=1027,sW=1028,FQ=1029,oW=1030,OQ=1031;var LQ=1033,P$=33776,A$=33777,T$=33778,w$=33779,DQ=35840,_Q=35841,VQ=35842,BQ=35843,zQ=36196,kQ=37492,CQ=37496,IQ=37808,PQ=37809,AQ=37810,TQ=37811,wQ=37812,SQ=37813,jQ=37814,fQ=37815,vQ=37816,yQ=37817,bQ=37818,hQ=37819,xQ=37820,gQ=37821,pQ=36492,lQ=36494,uQ=36495,mQ=36283,dQ=36284,cQ=36285,nQ=36286;var sQ=2300,S$=2301;var oQ=0,K9=1,L6=2;var iW=3201;var aW=0,rW=1,j7="",C8="srgb",h1="srgb-linear",iQ="linear",Y1="srgb";var tW=512,eW=513,$K=514,aQ=515,JK=516,QK=517,ZK=518,WK=519;var rQ="300 es",tQ=2000;class X7{addEventListener($,J){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[$]===void 0)Q[$]=[];if(Q[$].indexOf(J)===-1)Q[$].push(J)}hasEventListener($,J){let Q=this._listeners;if(Q===void 0)return!1;return Q[$]!==void 0&&Q[$].indexOf(J)!==-1}removeEventListener($,J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[$];if(Z!==void 0){let W=Z.indexOf(J);if(W!==-1)Z.splice(W,1)}}dispatchEvent($){let J=this._listeners;if(J===void 0)return;let Q=J[$.type];if(Q!==void 0){$.target=this;let Z=Q.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,$);$.target=null}}}var S1=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],C5=1234567,r6=Math.PI/180,A7=180/Math.PI;function R8(){let $=Math.random()*4294967295|0,J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(S1[$&255]+S1[$>>8&255]+S1[$>>16&255]+S1[$>>24&255]+"-"+S1[J&255]+S1[J>>8&255]+"-"+S1[J>>16&15|64]+S1[J>>24&255]+"-"+S1[Q&63|128]+S1[Q>>8&255]+"-"+S1[Q>>16&255]+S1[Q>>24&255]+S1[Z&255]+S1[Z>>8&255]+S1[Z>>16&255]+S1[Z>>24&255]).toLowerCase()}function c0($,J,Q){return Math.max(J,Math.min(Q,$))}function eQ($,J){return($%J+J)%J}function jY($,J,Q,Z,W){return Z+($-J)*(W-Z)/(Q-J)}function fY($,J,Q){if($!==J)return(Q-$)/(J-$);else return 0}function t6($,J,Q){return(1-Q)*$+Q*J}function vY($,J,Q,Z){return t6($,J,1-Math.exp(-Q*Z))}function yY($,J=1){return J-Math.abs(eQ($,J*2)-J)}function bY($,J,Q){if($<=J)return 0;if($>=Q)return 1;return $=($-J)/(Q-J),$*$*(3-2*$)}function hY($,J,Q){if($<=J)return 0;if($>=Q)return 1;return $=($-J)/(Q-J),$*$*$*($*($*6-15)+10)}function xY($,J){return $+Math.floor(Math.random()*(J-$+1))}function gY($,J){return $+Math.random()*(J-$)}function pY($){return $*(0.5-Math.random())}function lY($){if($!==void 0)C5=$;let J=C5+=1831565813;return J=Math.imul(J^J>>>15,J|1),J^=J+Math.imul(J^J>>>7,J|61),((J^J>>>14)>>>0)/4294967296}function uY($){return $*r6}function mY($){return $*A7}function dY($){return($&$-1)===0&&$!==0}function cY($){return Math.pow(2,Math.ceil(Math.log($)/Math.LN2))}function nY($){return Math.pow(2,Math.floor(Math.log($)/Math.LN2))}function sY($,J,Q,Z,W){let{cos:K,sin:X}=Math,H=K(Q/2),Y=X(Q/2),U=K((J+Z)/2),G=X((J+Z)/2),E=K((J-Z)/2),q=X((J-Z)/2),M=K((Z-J)/2),O=X((Z-J)/2);switch(W){case"XYX":$.set(H*G,Y*E,Y*q,H*U);break;case"YZY":$.set(Y*q,H*G,Y*E,H*U);break;case"ZXZ":$.set(Y*E,Y*q,H*G,H*U);break;case"XZX":$.set(H*G,Y*O,Y*M,H*U);break;case"YXY":$.set(Y*M,H*G,Y*O,H*U);break;case"ZYZ":$.set(Y*O,Y*M,H*G,H*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function N8($,J){switch(J.constructor){case Float32Array:return $;case Uint32Array:return $/4294967295;case Uint16Array:return $/65535;case Uint8Array:return $/255;case Int32Array:return Math.max($/2147483647,-1);case Int16Array:return Math.max($/32767,-1);case Int8Array:return Math.max($/127,-1);default:throw Error("Invalid component type.")}}function $1($,J){switch(J.constructor){case Float32Array:return $;case Uint32Array:return Math.round($*4294967295);case Uint16Array:return Math.round($*65535);case Uint8Array:return Math.round($*255);case Int32Array:return Math.round($*2147483647);case Int16Array:return Math.round($*32767);case Int8Array:return Math.round($*127);default:throw Error("Invalid component type.")}}var M1={DEG2RAD:r6,RAD2DEG:A7,generateUUID:R8,clamp:c0,euclideanModulo:eQ,mapLinear:jY,inverseLerp:fY,lerp:t6,damp:vY,pingpong:yY,smoothstep:bY,smootherstep:hY,randInt:xY,randFloat:gY,randFloatSpread:pY,seededRandom:lY,degToRad:uY,radToDeg:mY,isPowerOfTwo:dY,ceilPowerOfTwo:cY,floorPowerOfTwo:nY,setQuaternionFromProperEuler:sY,normalize:$1,denormalize:N8};class u0{constructor($=0,J=0){u0.prototype.isVector2=!0,this.x=$,this.y=J}get width(){return this.x}set width($){this.x=$}get height(){return this.y}set height($){this.y=$}set($,J){return this.x=$,this.y=J,this}setScalar($){return this.x=$,this.y=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y)}copy($){return this.x=$.x,this.y=$.y,this}add($){return this.x+=$.x,this.y+=$.y,this}addScalar($){return this.x+=$,this.y+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this}sub($){return this.x-=$.x,this.y-=$.y,this}subScalar($){return this.x-=$,this.y-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this}multiply($){return this.x*=$.x,this.y*=$.y,this}multiplyScalar($){return this.x*=$,this.y*=$,this}divide($){return this.x/=$.x,this.y/=$.y,this}divideScalar($){return this.multiplyScalar(1/$)}applyMatrix3($){let J=this.x,Q=this.y,Z=$.elements;return this.x=Z[0]*J+Z[3]*Q+Z[6],this.y=Z[1]*J+Z[4]*Q+Z[7],this}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot($){return this.x*$.x+this.y*$.y}cross($){return this.x*$.y-this.y*$.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo($){let J=Math.sqrt(this.lengthSq()*$.lengthSq());if(J===0)return Math.PI/2;let Q=this.dot($)/J;return Math.acos(c0(Q,-1,1))}distanceTo($){return Math.sqrt(this.distanceToSquared($))}distanceToSquared($){let J=this.x-$.x,Q=this.y-$.y;return J*J+Q*Q}manhattanDistanceTo($){return Math.abs(this.x-$.x)+Math.abs(this.y-$.y)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this}equals($){return $.x===this.x&&$.y===this.y}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this}rotateAround($,J){let Q=Math.cos(J),Z=Math.sin(J),W=this.x-$.x,K=this.y-$.y;return this.x=W*Q-K*Z+$.x,this.y=W*Z+K*Q+$.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class F8{constructor($=0,J=0,Q=0,Z=1){this.isQuaternion=!0,this._x=$,this._y=J,this._z=Q,this._w=Z}static slerpFlat($,J,Q,Z,W,K,X){let H=Q[Z+0],Y=Q[Z+1],U=Q[Z+2],G=Q[Z+3],E=W[K+0],q=W[K+1],M=W[K+2],O=W[K+3];if(X===0){$[J+0]=H,$[J+1]=Y,$[J+2]=U,$[J+3]=G;return}if(X===1){$[J+0]=E,$[J+1]=q,$[J+2]=M,$[J+3]=O;return}if(G!==O||H!==E||Y!==q||U!==M){let F=1-X,N=H*E+Y*q+U*M+G*O,R=N>=0?1:-1,V=1-N*N;if(V>Number.EPSILON){let k=Math.sqrt(V),A=Math.atan2(k,N*R);F=Math.sin(F*A)/k,X=Math.sin(X*A)/k}let L=X*R;if(H=H*F+E*L,Y=Y*F+q*L,U=U*F+M*L,G=G*F+O*L,F===1-X){let k=1/Math.sqrt(H*H+Y*Y+U*U+G*G);H*=k,Y*=k,U*=k,G*=k}}$[J]=H,$[J+1]=Y,$[J+2]=U,$[J+3]=G}static multiplyQuaternionsFlat($,J,Q,Z,W,K){let X=Q[Z],H=Q[Z+1],Y=Q[Z+2],U=Q[Z+3],G=W[K],E=W[K+1],q=W[K+2],M=W[K+3];return $[J]=X*M+U*G+H*q-Y*E,$[J+1]=H*M+U*E+Y*G-X*q,$[J+2]=Y*M+U*q+X*E-H*G,$[J+3]=U*M-X*G-H*E-Y*q,$}get x(){return this._x}set x($){this._x=$,this._onChangeCallback()}get y(){return this._y}set y($){this._y=$,this._onChangeCallback()}get z(){return this._z}set z($){this._z=$,this._onChangeCallback()}get w(){return this._w}set w($){this._w=$,this._onChangeCallback()}set($,J,Q,Z){return this._x=$,this._y=J,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy($){return this._x=$.x,this._y=$.y,this._z=$.z,this._w=$.w,this._onChangeCallback(),this}setFromEuler($,J=!0){let{_x:Q,_y:Z,_z:W,_order:K}=$,X=Math.cos,H=Math.sin,Y=X(Q/2),U=X(Z/2),G=X(W/2),E=H(Q/2),q=H(Z/2),M=H(W/2);switch(K){case"XYZ":this._x=E*U*G+Y*q*M,this._y=Y*q*G-E*U*M,this._z=Y*U*M+E*q*G,this._w=Y*U*G-E*q*M;break;case"YXZ":this._x=E*U*G+Y*q*M,this._y=Y*q*G-E*U*M,this._z=Y*U*M-E*q*G,this._w=Y*U*G+E*q*M;break;case"ZXY":this._x=E*U*G-Y*q*M,this._y=Y*q*G+E*U*M,this._z=Y*U*M+E*q*G,this._w=Y*U*G-E*q*M;break;case"ZYX":this._x=E*U*G-Y*q*M,this._y=Y*q*G+E*U*M,this._z=Y*U*M-E*q*G,this._w=Y*U*G+E*q*M;break;case"YZX":this._x=E*U*G+Y*q*M,this._y=Y*q*G+E*U*M,this._z=Y*U*M-E*q*G,this._w=Y*U*G-E*q*M;break;case"XZY":this._x=E*U*G-Y*q*M,this._y=Y*q*G-E*U*M,this._z=Y*U*M+E*q*G,this._w=Y*U*G+E*q*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(J===!0)this._onChangeCallback();return this}setFromAxisAngle($,J){let Q=J/2,Z=Math.sin(Q);return this._x=$.x*Z,this._y=$.y*Z,this._z=$.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix($){let J=$.elements,Q=J[0],Z=J[4],W=J[8],K=J[1],X=J[5],H=J[9],Y=J[2],U=J[6],G=J[10],E=Q+X+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-H)*q,this._y=(W-Y)*q,this._z=(K-Z)*q}else if(Q>X&&Q>G){let q=2*Math.sqrt(1+Q-X-G);this._w=(U-H)/q,this._x=0.25*q,this._y=(Z+K)/q,this._z=(W+Y)/q}else if(X>G){let q=2*Math.sqrt(1+X-Q-G);this._w=(W-Y)/q,this._x=(Z+K)/q,this._y=0.25*q,this._z=(H+U)/q}else{let q=2*Math.sqrt(1+G-Q-X);this._w=(K-Z)/q,this._x=(W+Y)/q,this._y=(H+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors($,J){let Q=$.dot(J)+1;if(Q<0.00000001)if(Q=0,Math.abs($.x)>Math.abs($.z))this._x=-$.y,this._y=$.x,this._z=0,this._w=Q;else this._x=0,this._y=-$.z,this._z=$.y,this._w=Q;else this._x=$.y*J.z-$.z*J.y,this._y=$.z*J.x-$.x*J.z,this._z=$.x*J.y-$.y*J.x,this._w=Q;return this.normalize()}angleTo($){return 2*Math.acos(Math.abs(c0(this.dot($),-1,1)))}rotateTowards($,J){let Q=this.angleTo($);if(Q===0)return this;let Z=Math.min(1,J/Q);return this.slerp($,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot($){return this._x*$._x+this._y*$._y+this._z*$._z+this._w*$._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let $=this.length();if($===0)this._x=0,this._y=0,this._z=0,this._w=1;else $=1/$,this._x=this._x*$,this._y=this._y*$,this._z=this._z*$,this._w=this._w*$;return this._onChangeCallback(),this}multiply($){return this.multiplyQuaternions(this,$)}premultiply($){return this.multiplyQuaternions($,this)}multiplyQuaternions($,J){let{_x:Q,_y:Z,_z:W,_w:K}=$,X=J._x,H=J._y,Y=J._z,U=J._w;return this._x=Q*U+K*X+Z*Y-W*H,this._y=Z*U+K*H+W*X-Q*Y,this._z=W*U+K*Y+Q*H-Z*X,this._w=K*U-Q*X-Z*H-W*Y,this._onChangeCallback(),this}slerp($,J){if(J===0)return this;if(J===1)return this.copy($);let Q=this._x,Z=this._y,W=this._z,K=this._w,X=K*$._w+Q*$._x+Z*$._y+W*$._z;if(X<0)this._w=-$._w,this._x=-$._x,this._y=-$._y,this._z=-$._z,X=-X;else this.copy($);if(X>=1)return this._w=K,this._x=Q,this._y=Z,this._z=W,this;let H=1-X*X;if(H<=Number.EPSILON){let q=1-J;return this._w=q*K+J*this._w,this._x=q*Q+J*this._x,this._y=q*Z+J*this._y,this._z=q*W+J*this._z,this.normalize(),this}let Y=Math.sqrt(H),U=Math.atan2(Y,X),G=Math.sin((1-J)*U)/Y,E=Math.sin(J*U)/Y;return this._w=K*G+this._w*E,this._x=Q*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions($,J,Q){return this.copy($).slerp(J,Q)}random(){let $=2*Math.PI*Math.random(),J=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),W=Math.sqrt(Q);return this.set(Z*Math.sin($),Z*Math.cos($),W*Math.sin(J),W*Math.cos(J))}equals($){return $._x===this._x&&$._y===this._y&&$._z===this._z&&$._w===this._w}fromArray($,J=0){return this._x=$[J],this._y=$[J+1],this._z=$[J+2],this._w=$[J+3],this._onChangeCallback(),this}toArray($=[],J=0){return $[J]=this._x,$[J+1]=this._y,$[J+2]=this._z,$[J+3]=this._w,$}fromBufferAttribute($,J){return this._x=$.getX(J),this._y=$.getY(J),this._z=$.getZ(J),this._w=$.getW(J),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange($){return this._onChangeCallback=$,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class g{constructor($=0,J=0,Q=0){g.prototype.isVector3=!0,this.x=$,this.y=J,this.z=Q}set($,J,Q){if(Q===void 0)Q=this.z;return this.x=$,this.y=J,this.z=Q,this}setScalar($){return this.x=$,this.y=$,this.z=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setZ($){return this.z=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy($){return this.x=$.x,this.y=$.y,this.z=$.z,this}add($){return this.x+=$.x,this.y+=$.y,this.z+=$.z,this}addScalar($){return this.x+=$,this.y+=$,this.z+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this.z=$.z+J.z,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this.z+=$.z*J,this}sub($){return this.x-=$.x,this.y-=$.y,this.z-=$.z,this}subScalar($){return this.x-=$,this.y-=$,this.z-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this.z=$.z-J.z,this}multiply($){return this.x*=$.x,this.y*=$.y,this.z*=$.z,this}multiplyScalar($){return this.x*=$,this.y*=$,this.z*=$,this}multiplyVectors($,J){return this.x=$.x*J.x,this.y=$.y*J.y,this.z=$.z*J.z,this}applyEuler($){return this.applyQuaternion(I5.setFromEuler($))}applyAxisAngle($,J){return this.applyQuaternion(I5.setFromAxisAngle($,J))}applyMatrix3($){let J=this.x,Q=this.y,Z=this.z,W=$.elements;return this.x=W[0]*J+W[3]*Q+W[6]*Z,this.y=W[1]*J+W[4]*Q+W[7]*Z,this.z=W[2]*J+W[5]*Q+W[8]*Z,this}applyNormalMatrix($){return this.applyMatrix3($).normalize()}applyMatrix4($){let J=this.x,Q=this.y,Z=this.z,W=$.elements,K=1/(W[3]*J+W[7]*Q+W[11]*Z+W[15]);return this.x=(W[0]*J+W[4]*Q+W[8]*Z+W[12])*K,this.y=(W[1]*J+W[5]*Q+W[9]*Z+W[13])*K,this.z=(W[2]*J+W[6]*Q+W[10]*Z+W[14])*K,this}applyQuaternion($){let J=this.x,Q=this.y,Z=this.z,W=$.x,K=$.y,X=$.z,H=$.w,Y=2*(K*Z-X*Q),U=2*(X*J-W*Z),G=2*(W*Q-K*J);return this.x=J+H*Y+K*G-X*U,this.y=Q+H*U+X*Y-W*G,this.z=Z+H*G+W*U-K*Y,this}project($){return this.applyMatrix4($.matrixWorldInverse).applyMatrix4($.projectionMatrix)}unproject($){return this.applyMatrix4($.projectionMatrixInverse).applyMatrix4($.matrixWorld)}transformDirection($){let J=this.x,Q=this.y,Z=this.z,W=$.elements;return this.x=W[0]*J+W[4]*Q+W[8]*Z,this.y=W[1]*J+W[5]*Q+W[9]*Z,this.z=W[2]*J+W[6]*Q+W[10]*Z,this.normalize()}divide($){return this.x/=$.x,this.y/=$.y,this.z/=$.z,this}divideScalar($){return this.multiplyScalar(1/$)}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this.z=Math.min(this.z,$.z),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this.z=Math.max(this.z,$.z),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this.z=c0(this.z,$.z,J.z),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this.z=c0(this.z,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot($){return this.x*$.x+this.y*$.y+this.z*$.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this.z+=($.z-this.z)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this.z=$.z+(J.z-$.z)*Q,this}cross($){return this.crossVectors(this,$)}crossVectors($,J){let{x:Q,y:Z,z:W}=$,K=J.x,X=J.y,H=J.z;return this.x=Z*H-W*X,this.y=W*K-Q*H,this.z=Q*X-Z*K,this}projectOnVector($){let J=$.lengthSq();if(J===0)return this.set(0,0,0);let Q=$.dot(this)/J;return this.copy($).multiplyScalar(Q)}projectOnPlane($){return vJ.copy(this).projectOnVector($),this.sub(vJ)}reflect($){return this.sub(vJ.copy($).multiplyScalar(2*this.dot($)))}angleTo($){let J=Math.sqrt(this.lengthSq()*$.lengthSq());if(J===0)return Math.PI/2;let Q=this.dot($)/J;return Math.acos(c0(Q,-1,1))}distanceTo($){return Math.sqrt(this.distanceToSquared($))}distanceToSquared($){let J=this.x-$.x,Q=this.y-$.y,Z=this.z-$.z;return J*J+Q*Q+Z*Z}manhattanDistanceTo($){return Math.abs(this.x-$.x)+Math.abs(this.y-$.y)+Math.abs(this.z-$.z)}setFromSpherical($){return this.setFromSphericalCoords($.radius,$.phi,$.theta)}setFromSphericalCoords($,J,Q){let Z=Math.sin(J)*$;return this.x=Z*Math.sin(Q),this.y=Math.cos(J)*$,this.z=Z*Math.cos(Q),this}setFromCylindrical($){return this.setFromCylindricalCoords($.radius,$.theta,$.y)}setFromCylindricalCoords($,J,Q){return this.x=$*Math.sin(J),this.y=Q,this.z=$*Math.cos(J),this}setFromMatrixPosition($){let J=$.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this}setFromMatrixScale($){let J=this.setFromMatrixColumn($,0).length(),Q=this.setFromMatrixColumn($,1).length(),Z=this.setFromMatrixColumn($,2).length();return this.x=J,this.y=Q,this.z=Z,this}setFromMatrixColumn($,J){return this.fromArray($.elements,J*4)}setFromMatrix3Column($,J){return this.fromArray($.elements,J*3)}setFromEuler($){return this.x=$._x,this.y=$._y,this.z=$._z,this}setFromColor($){return this.x=$.r,this.y=$.g,this.z=$.b,this}equals($){return $.x===this.x&&$.y===this.y&&$.z===this.z}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this.z=$[J+2],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$[J+2]=this.z,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this.z=$.getZ(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let $=Math.random()*Math.PI*2,J=Math.random()*2-1,Q=Math.sqrt(1-J*J);return this.x=Q*Math.cos($),this.y=J,this.z=Q*Math.sin($),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var vJ=new g,I5=new F8;class p0{constructor($,J,Q,Z,W,K,X,H,Y){if(p0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],$!==void 0)this.set($,J,Q,Z,W,K,X,H,Y)}set($,J,Q,Z,W,K,X,H,Y){let U=this.elements;return U[0]=$,U[1]=Z,U[2]=X,U[3]=J,U[4]=W,U[5]=H,U[6]=Q,U[7]=K,U[8]=Y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy($){let J=this.elements,Q=$.elements;return J[0]=Q[0],J[1]=Q[1],J[2]=Q[2],J[3]=Q[3],J[4]=Q[4],J[5]=Q[5],J[6]=Q[6],J[7]=Q[7],J[8]=Q[8],this}extractBasis($,J,Q){return $.setFromMatrix3Column(this,0),J.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4($){let J=$.elements;return this.set(J[0],J[4],J[8],J[1],J[5],J[9],J[2],J[6],J[10]),this}multiply($){return this.multiplyMatrices(this,$)}premultiply($){return this.multiplyMatrices($,this)}multiplyMatrices($,J){let Q=$.elements,Z=J.elements,W=this.elements,K=Q[0],X=Q[3],H=Q[6],Y=Q[1],U=Q[4],G=Q[7],E=Q[2],q=Q[5],M=Q[8],O=Z[0],F=Z[3],N=Z[6],R=Z[1],V=Z[4],L=Z[7],k=Z[2],A=Z[5],I=Z[8];return W[0]=K*O+X*R+H*k,W[3]=K*F+X*V+H*A,W[6]=K*N+X*L+H*I,W[1]=Y*O+U*R+G*k,W[4]=Y*F+U*V+G*A,W[7]=Y*N+U*L+G*I,W[2]=E*O+q*R+M*k,W[5]=E*F+q*V+M*A,W[8]=E*N+q*L+M*I,this}multiplyScalar($){let J=this.elements;return J[0]*=$,J[3]*=$,J[6]*=$,J[1]*=$,J[4]*=$,J[7]*=$,J[2]*=$,J[5]*=$,J[8]*=$,this}determinant(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8];return J*K*U-J*X*Y-Q*W*U+Q*X*H+Z*W*Y-Z*K*H}invert(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8],G=U*K-X*Y,E=X*H-U*W,q=Y*W-K*H,M=J*G+Q*E+Z*q;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/M;return $[0]=G*O,$[1]=(Z*Y-U*Q)*O,$[2]=(X*Q-Z*K)*O,$[3]=E*O,$[4]=(U*J-Z*H)*O,$[5]=(Z*W-X*J)*O,$[6]=q*O,$[7]=(Q*H-Y*J)*O,$[8]=(K*J-Q*W)*O,this}transpose(){let $,J=this.elements;return $=J[1],J[1]=J[3],J[3]=$,$=J[2],J[2]=J[6],J[6]=$,$=J[5],J[5]=J[7],J[7]=$,this}getNormalMatrix($){return this.setFromMatrix4($).invert().transpose()}transposeIntoArray($){let J=this.elements;return $[0]=J[0],$[1]=J[3],$[2]=J[6],$[3]=J[1],$[4]=J[4],$[5]=J[7],$[6]=J[2],$[7]=J[5],$[8]=J[8],this}setUvTransform($,J,Q,Z,W,K,X){let H=Math.cos(W),Y=Math.sin(W);return this.set(Q*H,Q*Y,-Q*(H*K+Y*X)+K+$,-Z*Y,Z*H,-Z*(-Y*K+H*X)+X+J,0,0,1),this}scale($,J){return this.premultiply(yJ.makeScale($,J)),this}rotate($){return this.premultiply(yJ.makeRotation(-$)),this}translate($,J){return this.premultiply(yJ.makeTranslation($,J)),this}makeTranslation($,J){if($.isVector2)this.set(1,0,$.x,0,1,$.y,0,0,1);else this.set(1,0,$,0,1,J,0,0,1);return this}makeRotation($){let J=Math.cos($),Q=Math.sin($);return this.set(J,-Q,0,Q,J,0,0,0,1),this}makeScale($,J){return this.set($,0,0,0,J,0,0,0,1),this}equals($){let J=this.elements,Q=$.elements;for(let Z=0;Z<9;Z++)if(J[Z]!==Q[Z])return!1;return!0}fromArray($,J=0){for(let Q=0;Q<9;Q++)this.elements[Q]=$[Q+J];return this}toArray($=[],J=0){let Q=this.elements;return $[J]=Q[0],$[J+1]=Q[1],$[J+2]=Q[2],$[J+3]=Q[3],$[J+4]=Q[4],$[J+5]=Q[5],$[J+6]=Q[6],$[J+7]=Q[7],$[J+8]=Q[8],$}clone(){return new this.constructor().fromArray(this.elements)}}var yJ=new p0;function $Z($){for(let J=$.length-1;J>=0;--J)if($[J]>=65535)return!0;return!1}function G6($){return document.createElementNS("http://www.w3.org/1999/xhtml",$)}function KK(){let $=G6("canvas");return $.style.display="block",$}var P5={};function E6($){if($ in P5)return;P5[$]=!0,console.warn($)}function XK($,J,Q){return new Promise(function(Z,W){function K(){switch($.clientWaitSync(J,$.SYNC_FLUSH_COMMANDS_BIT,0)){case $.WAIT_FAILED:W();break;case $.TIMEOUT_EXPIRED:setTimeout(K,Q);break;default:Z()}}setTimeout(K,Q)})}var A5=new p0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),T5=new p0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function oY(){let $={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,X){if(this.enabled===!1||K===X||!K||!X)return W;if(this.spaces[K].transfer==="srgb")W.r=x8(W.r),W.g=x8(W.g),W.b=x8(W.b);if(this.spaces[K].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=U6(W.r),W.g=U6(W.g),W.b=U6(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,X){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return E6("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),$.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return E6("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),$.colorSpaceToWorking(W,K)}},J=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return $.define({["srgb-linear"]:{primaries:J,whitePoint:Z,transfer:"linear",toXYZ:A5,fromXYZ:T5,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:J,whitePoint:Z,transfer:"srgb",toXYZ:A5,fromXYZ:T5,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),$}var o0=oY();function x8($){return $<0.04045?$*0.0773993808:Math.pow($*0.9478672986+0.0521327014,2.4)}function U6($){return $<0.0031308?$*12.92:1.055*Math.pow($,0.41666)-0.055}var i7;class JZ{static getDataURL($,J="image/png"){if(/^data:/i.test($.src))return $.src;if(typeof HTMLCanvasElement>"u")return $.src;let Q;if($ instanceof HTMLCanvasElement)Q=$;else{if(i7===void 0)i7=G6("canvas");i7.width=$.width,i7.height=$.height;let Z=i7.getContext("2d");if($ instanceof ImageData)Z.putImageData($,0,0);else Z.drawImage($,0,0,$.width,$.height);Q=i7}return Q.toDataURL(J)}static sRGBToLinear($){if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap){let J=G6("canvas");J.width=$.width,J.height=$.height;let Q=J.getContext("2d");Q.drawImage($,0,0,$.width,$.height);let Z=Q.getImageData(0,0,$.width,$.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=x8(W[K]/255)*255;return Q.putImageData(Z,0,0),J}else if($.data){let J=$.data.slice(0);for(let Q=0;Q<J.length;Q++)if(J instanceof Uint8Array||J instanceof Uint8ClampedArray)J[Q]=Math.floor(x8(J[Q]/255)*255);else J[Q]=x8(J[Q]);return{data:J,width:$.width,height:$.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),$}}var iY=0;class X9{constructor($=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iY++}),this.uuid=R8(),this.data=$,this.dataReady=!0,this.version=0}getSize($){let J=this.data;if(typeof HTMLVideoElement<"u"&&J instanceof HTMLVideoElement)$.set(J.videoWidth,J.videoHeight,0);else if(J instanceof VideoFrame)$.set(J.displayHeight,J.displayWidth,0);else if(J!==null)$.set(J.width,J.height,J.depth||0);else $.set(0,0,0);return $}set needsUpdate($){if($===!0)this.version++}toJSON($){let J=$===void 0||typeof $==="string";if(!J&&$.images[this.uuid]!==void 0)return $.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,X=Z.length;K<X;K++)if(Z[K].isDataTexture)W.push(bJ(Z[K].image));else W.push(bJ(Z[K]))}else W=bJ(Z);Q.url=W}if(!J)$.images[this.uuid]=Q;return Q}}function bJ($){if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap)return JZ.getDataURL($);else if($.data)return{data:Array.from($.data),width:$.width,height:$.height,type:$.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var aY=0,hJ=new g;class L1 extends X7{constructor($=L1.DEFAULT_IMAGE,J=L1.DEFAULT_MAPPING,Q=1001,Z=1001,W=1006,K=1008,X=1023,H=1009,Y=L1.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:aY++}),this.uuid=R8(),this.name="",this.source=new X9($),this.mipmaps=[],this.mapping=J,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=Y,this.format=X,this.internalFormat=null,this.type=H,this.offset=new u0(0,0),this.repeat=new u0(1,1),this.center=new u0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new p0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=$&&$.depth&&$.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(hJ).x}get height(){return this.source.getSize(hJ).y}get depth(){return this.source.getSize(hJ).z}get image(){return this.source.data}set image($=null){this.source.data=$}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy($){return this.name=$.name,this.source=$.source,this.mipmaps=$.mipmaps.slice(0),this.mapping=$.mapping,this.channel=$.channel,this.wrapS=$.wrapS,this.wrapT=$.wrapT,this.magFilter=$.magFilter,this.minFilter=$.minFilter,this.anisotropy=$.anisotropy,this.format=$.format,this.internalFormat=$.internalFormat,this.type=$.type,this.offset.copy($.offset),this.repeat.copy($.repeat),this.center.copy($.center),this.rotation=$.rotation,this.matrixAutoUpdate=$.matrixAutoUpdate,this.matrix.copy($.matrix),this.generateMipmaps=$.generateMipmaps,this.premultiplyAlpha=$.premultiplyAlpha,this.flipY=$.flipY,this.unpackAlignment=$.unpackAlignment,this.colorSpace=$.colorSpace,this.renderTarget=$.renderTarget,this.isRenderTargetTexture=$.isRenderTargetTexture,this.isArrayTexture=$.isArrayTexture,this.userData=JSON.parse(JSON.stringify($.userData)),this.needsUpdate=!0,this}setValues($){for(let J in $){let Q=$[J];if(Q===void 0){console.warn(`THREE.Texture.setValues(): parameter '${J}' has value of undefined.`);continue}let Z=this[J];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${J}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[J]=Q}}toJSON($){let J=$===void 0||typeof $==="string";if(!J&&$.textures[this.uuid]!==void 0)return $.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON($).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!J)$.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv($){if(this.mapping!==300)return $;if($.applyMatrix3(this.matrix),$.x<0||$.x>1)switch(this.wrapS){case 1000:$.x=$.x-Math.floor($.x);break;case 1001:$.x=$.x<0?0:1;break;case 1002:if(Math.abs(Math.floor($.x)%2)===1)$.x=Math.ceil($.x)-$.x;else $.x=$.x-Math.floor($.x);break}if($.y<0||$.y>1)switch(this.wrapT){case 1000:$.y=$.y-Math.floor($.y);break;case 1001:$.y=$.y<0?0:1;break;case 1002:if(Math.abs(Math.floor($.y)%2)===1)$.y=Math.ceil($.y)-$.y;else $.y=$.y-Math.floor($.y);break}if(this.flipY)$.y=1-$.y;return $}set needsUpdate($){if($===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate($){if($===!0)this.pmremVersion++}}L1.DEFAULT_IMAGE=null;L1.DEFAULT_MAPPING=300;L1.DEFAULT_ANISOTROPY=1;class i0{constructor($=0,J=0,Q=0,Z=1){i0.prototype.isVector4=!0,this.x=$,this.y=J,this.z=Q,this.w=Z}get width(){return this.z}set width($){this.z=$}get height(){return this.w}set height($){this.w=$}set($,J,Q,Z){return this.x=$,this.y=J,this.z=Q,this.w=Z,this}setScalar($){return this.x=$,this.y=$,this.z=$,this.w=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setZ($){return this.z=$,this}setW($){return this.w=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;case 3:this.w=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy($){return this.x=$.x,this.y=$.y,this.z=$.z,this.w=$.w!==void 0?$.w:1,this}add($){return this.x+=$.x,this.y+=$.y,this.z+=$.z,this.w+=$.w,this}addScalar($){return this.x+=$,this.y+=$,this.z+=$,this.w+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this.z=$.z+J.z,this.w=$.w+J.w,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this.z+=$.z*J,this.w+=$.w*J,this}sub($){return this.x-=$.x,this.y-=$.y,this.z-=$.z,this.w-=$.w,this}subScalar($){return this.x-=$,this.y-=$,this.z-=$,this.w-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this.z=$.z-J.z,this.w=$.w-J.w,this}multiply($){return this.x*=$.x,this.y*=$.y,this.z*=$.z,this.w*=$.w,this}multiplyScalar($){return this.x*=$,this.y*=$,this.z*=$,this.w*=$,this}applyMatrix4($){let J=this.x,Q=this.y,Z=this.z,W=this.w,K=$.elements;return this.x=K[0]*J+K[4]*Q+K[8]*Z+K[12]*W,this.y=K[1]*J+K[5]*Q+K[9]*Z+K[13]*W,this.z=K[2]*J+K[6]*Q+K[10]*Z+K[14]*W,this.w=K[3]*J+K[7]*Q+K[11]*Z+K[15]*W,this}divide($){return this.x/=$.x,this.y/=$.y,this.z/=$.z,this.w/=$.w,this}divideScalar($){return this.multiplyScalar(1/$)}setAxisAngleFromQuaternion($){this.w=2*Math.acos($.w);let J=Math.sqrt(1-$.w*$.w);if(J<0.0001)this.x=1,this.y=0,this.z=0;else this.x=$.x/J,this.y=$.y/J,this.z=$.z/J;return this}setAxisAngleFromRotationMatrix($){let J,Q,Z,W,K=0.01,X=0.1,H=$.elements,Y=H[0],U=H[4],G=H[8],E=H[1],q=H[5],M=H[9],O=H[2],F=H[6],N=H[10];if(Math.abs(U-E)<0.01&&Math.abs(G-O)<0.01&&Math.abs(M-F)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+O)<0.1&&Math.abs(M+F)<0.1&&Math.abs(Y+q+N-3)<0.1)return this.set(1,0,0,0),this;J=Math.PI;let V=(Y+1)/2,L=(q+1)/2,k=(N+1)/2,A=(U+E)/4,I=(G+O)/4,S=(M+F)/4;if(V>L&&V>k)if(V<0.01)Q=0,Z=0.707106781,W=0.707106781;else Q=Math.sqrt(V),Z=A/Q,W=I/Q;else if(L>k)if(L<0.01)Q=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),Q=A/Z,W=S/Z;else if(k<0.01)Q=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(k),Q=I/W,Z=S/W;return this.set(Q,Z,W,J),this}let R=Math.sqrt((F-M)*(F-M)+(G-O)*(G-O)+(E-U)*(E-U));if(Math.abs(R)<0.001)R=1;return this.x=(F-M)/R,this.y=(G-O)/R,this.z=(E-U)/R,this.w=Math.acos((Y+q+N-1)/2),this}setFromMatrixPosition($){let J=$.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this.w=J[15],this}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this.z=Math.min(this.z,$.z),this.w=Math.min(this.w,$.w),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this.z=Math.max(this.z,$.z),this.w=Math.max(this.w,$.w),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this.z=c0(this.z,$.z,J.z),this.w=c0(this.w,$.w,J.w),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this.z=c0(this.z,$,J),this.w=c0(this.w,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot($){return this.x*$.x+this.y*$.y+this.z*$.z+this.w*$.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this.z+=($.z-this.z)*J,this.w+=($.w-this.w)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this.z=$.z+(J.z-$.z)*Q,this.w=$.w+(J.w-$.w)*Q,this}equals($){return $.x===this.x&&$.y===this.y&&$.z===this.z&&$.w===this.w}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this.z=$[J+2],this.w=$[J+3],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$[J+2]=this.z,$[J+3]=this.w,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this.z=$.getZ(J),this.w=$.getW(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QZ extends X7{constructor($=1,J=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Q),this.isRenderTarget=!0,this.width=$,this.height=J,this.depth=Q.depth,this.scissor=new i0(0,0,$,J),this.scissorTest=!1,this.viewport=new i0(0,0,$,J);let Z={width:$,height:J,depth:Q.depth},W=new L1(Z);this.textures=[];let K=Q.count;for(let X=0;X<K;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview}_setTextureOptions($={}){let J={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if($.mapping!==void 0)J.mapping=$.mapping;if($.wrapS!==void 0)J.wrapS=$.wrapS;if($.wrapT!==void 0)J.wrapT=$.wrapT;if($.wrapR!==void 0)J.wrapR=$.wrapR;if($.magFilter!==void 0)J.magFilter=$.magFilter;if($.minFilter!==void 0)J.minFilter=$.minFilter;if($.format!==void 0)J.format=$.format;if($.type!==void 0)J.type=$.type;if($.anisotropy!==void 0)J.anisotropy=$.anisotropy;if($.colorSpace!==void 0)J.colorSpace=$.colorSpace;if($.flipY!==void 0)J.flipY=$.flipY;if($.generateMipmaps!==void 0)J.generateMipmaps=$.generateMipmaps;if($.internalFormat!==void 0)J.internalFormat=$.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues(J)}get texture(){return this.textures[0]}set texture($){this.textures[0]=$}set depthTexture($){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if($!==null)$.renderTarget=this;this._depthTexture=$}get depthTexture(){return this._depthTexture}setSize($,J,Q=1){if(this.width!==$||this.height!==J||this.depth!==Q){this.width=$,this.height=J,this.depth=Q;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=$,this.textures[Z].image.height=J,this.textures[Z].image.depth=Q,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,$,J),this.scissor.set(0,0,$,J)}clone(){return new this.constructor().copy(this)}copy($){this.width=$.width,this.height=$.height,this.depth=$.depth,this.scissor.copy($.scissor),this.scissorTest=$.scissorTest,this.viewport.copy($.viewport),this.textures.length=0;for(let J=0,Q=$.textures.length;J<Q;J++){this.textures[J]=$.textures[J].clone(),this.textures[J].isRenderTargetTexture=!0,this.textures[J].renderTarget=this;let Z=Object.assign({},$.textures[J].image);this.textures[J].source=new X9(Z)}if(this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,$.depthTexture!==null)this.depthTexture=$.depthTexture.clone();return this.samples=$.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class O8 extends QZ{constructor($=1,J=1,Q={}){super($,J,Q);this.isWebGLRenderTarget=!0}}class j$ extends L1{constructor($=null,J=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:$,width:J,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate($){this.layerUpdates.add($)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZZ extends L1{constructor($=null,J=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:$,width:J,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l1{constructor($=new g(1/0,1/0,1/0),J=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=$,this.max=J}set($,J){return this.min.copy($),this.max.copy(J),this}setFromArray($){this.makeEmpty();for(let J=0,Q=$.length;J<Q;J+=3)this.expandByPoint(G8.fromArray($,J));return this}setFromBufferAttribute($){this.makeEmpty();for(let J=0,Q=$.count;J<Q;J++)this.expandByPoint(G8.fromBufferAttribute($,J));return this}setFromPoints($){this.makeEmpty();for(let J=0,Q=$.length;J<Q;J++)this.expandByPoint($[J]);return this}setFromCenterAndSize($,J){let Q=G8.copy(J).multiplyScalar(0.5);return this.min.copy($).sub(Q),this.max.copy($).add(Q),this}setFromObject($,J=!1){return this.makeEmpty(),this.expandByObject($,J)}clone(){return new this.constructor().copy(this)}copy($){return this.min.copy($.min),this.max.copy($.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter($){return this.isEmpty()?$.set(0,0,0):$.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize($){return this.isEmpty()?$.set(0,0,0):$.subVectors(this.max,this.min)}expandByPoint($){return this.min.min($),this.max.max($),this}expandByVector($){return this.min.sub($),this.max.add($),this}expandByScalar($){return this.min.addScalar(-$),this.max.addScalar($),this}expandByObject($,J=!1){$.updateWorldMatrix(!1,!1);let Q=$.geometry;if(Q!==void 0){let W=Q.getAttribute("position");if(J===!0&&W!==void 0&&$.isInstancedMesh!==!0)for(let K=0,X=W.count;K<X;K++){if($.isMesh===!0)$.getVertexPosition(K,G8);else G8.fromBufferAttribute(W,K);G8.applyMatrix4($.matrixWorld),this.expandByPoint(G8)}else{if($.boundingBox!==void 0){if($.boundingBox===null)$.computeBoundingBox();u9.copy($.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();u9.copy(Q.boundingBox)}u9.applyMatrix4($.matrixWorld),this.union(u9)}}let Z=$.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],J);return this}containsPoint($){return $.x>=this.min.x&&$.x<=this.max.x&&$.y>=this.min.y&&$.y<=this.max.y&&$.z>=this.min.z&&$.z<=this.max.z}containsBox($){return this.min.x<=$.min.x&&$.max.x<=this.max.x&&this.min.y<=$.min.y&&$.max.y<=this.max.y&&this.min.z<=$.min.z&&$.max.z<=this.max.z}getParameter($,J){return J.set(($.x-this.min.x)/(this.max.x-this.min.x),($.y-this.min.y)/(this.max.y-this.min.y),($.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox($){return $.max.x>=this.min.x&&$.min.x<=this.max.x&&$.max.y>=this.min.y&&$.min.y<=this.max.y&&$.max.z>=this.min.z&&$.min.z<=this.max.z}intersectsSphere($){return this.clampPoint($.center,G8),G8.distanceToSquared($.center)<=$.radius*$.radius}intersectsPlane($){let J,Q;if($.normal.x>0)J=$.normal.x*this.min.x,Q=$.normal.x*this.max.x;else J=$.normal.x*this.max.x,Q=$.normal.x*this.min.x;if($.normal.y>0)J+=$.normal.y*this.min.y,Q+=$.normal.y*this.max.y;else J+=$.normal.y*this.max.y,Q+=$.normal.y*this.min.y;if($.normal.z>0)J+=$.normal.z*this.min.z,Q+=$.normal.z*this.max.z;else J+=$.normal.z*this.max.z,Q+=$.normal.z*this.min.z;return J<=-$.constant&&Q>=-$.constant}intersectsTriangle($){if(this.isEmpty())return!1;this.getCenter(m6),m9.subVectors(this.max,m6),a7.subVectors($.a,m6),r7.subVectors($.b,m6),t7.subVectors($.c,m6),a8.subVectors(r7,a7),r8.subVectors(t7,r7),k7.subVectors(a7,t7);let J=[0,-a8.z,a8.y,0,-r8.z,r8.y,0,-k7.z,k7.y,a8.z,0,-a8.x,r8.z,0,-r8.x,k7.z,0,-k7.x,-a8.y,a8.x,0,-r8.y,r8.x,0,-k7.y,k7.x,0];if(!xJ(J,a7,r7,t7,m9))return!1;if(J=[1,0,0,0,1,0,0,0,1],!xJ(J,a7,r7,t7,m9))return!1;return d9.crossVectors(a8,r8),J=[d9.x,d9.y,d9.z],xJ(J,a7,r7,t7,m9)}clampPoint($,J){return J.copy($).clamp(this.min,this.max)}distanceToPoint($){return this.clampPoint($,G8).distanceTo($)}getBoundingSphere($){if(this.isEmpty())$.makeEmpty();else this.getCenter($.center),$.radius=this.getSize(G8).length()*0.5;return $}intersect($){if(this.min.max($.min),this.max.min($.max),this.isEmpty())this.makeEmpty();return this}union($){return this.min.min($.min),this.max.max($.max),this}applyMatrix4($){if(this.isEmpty())return this;return S8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4($),S8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4($),S8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4($),S8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4($),S8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4($),S8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4($),S8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4($),S8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4($),this.setFromPoints(S8),this}translate($){return this.min.add($),this.max.add($),this}equals($){return $.min.equals(this.min)&&$.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON($){return this.min.fromArray($.min),this.max.fromArray($.max),this}}var S8=[new g,new g,new g,new g,new g,new g,new g,new g],G8=new g,u9=new l1,a7=new g,r7=new g,t7=new g,a8=new g,r8=new g,k7=new g,m6=new g,m9=new g,d9=new g,C7=new g;function xJ($,J,Q,Z,W){for(let K=0,X=$.length-3;K<=X;K+=3){C7.fromArray($,K);let H=W.x*Math.abs(C7.x)+W.y*Math.abs(C7.y)+W.z*Math.abs(C7.z),Y=J.dot(C7),U=Q.dot(C7),G=Z.dot(C7);if(Math.max(-Math.max(Y,U,G),Math.min(Y,U,G))>H)return!1}return!0}var rY=new l1,d6=new g,gJ=new g;class r1{constructor($=new g,J=-1){this.isSphere=!0,this.center=$,this.radius=J}set($,J){return this.center.copy($),this.radius=J,this}setFromPoints($,J){let Q=this.center;if(J!==void 0)Q.copy(J);else rY.setFromPoints($).getCenter(Q);let Z=0;for(let W=0,K=$.length;W<K;W++)Z=Math.max(Z,Q.distanceToSquared($[W]));return this.radius=Math.sqrt(Z),this}copy($){return this.center.copy($.center),this.radius=$.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint($){return $.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint($){return $.distanceTo(this.center)-this.radius}intersectsSphere($){let J=this.radius+$.radius;return $.center.distanceToSquared(this.center)<=J*J}intersectsBox($){return $.intersectsSphere(this)}intersectsPlane($){return Math.abs($.distanceToPoint(this.center))<=this.radius}clampPoint($,J){let Q=this.center.distanceToSquared($);if(J.copy($),Q>this.radius*this.radius)J.sub(this.center).normalize(),J.multiplyScalar(this.radius).add(this.center);return J}getBoundingBox($){if(this.isEmpty())return $.makeEmpty(),$;return $.set(this.center,this.center),$.expandByScalar(this.radius),$}applyMatrix4($){return this.center.applyMatrix4($),this.radius=this.radius*$.getMaxScaleOnAxis(),this}translate($){return this.center.add($),this}expandByPoint($){if(this.isEmpty())return this.center.copy($),this.radius=0,this;d6.subVectors($,this.center);let J=d6.lengthSq();if(J>this.radius*this.radius){let Q=Math.sqrt(J),Z=(Q-this.radius)*0.5;this.center.addScaledVector(d6,Z/Q),this.radius+=Z}return this}union($){if($.isEmpty())return this;if(this.isEmpty())return this.copy($),this;if(this.center.equals($.center)===!0)this.radius=Math.max(this.radius,$.radius);else gJ.subVectors($.center,this.center).setLength($.radius),this.expandByPoint(d6.copy($.center).add(gJ)),this.expandByPoint(d6.copy($.center).sub(gJ));return this}equals($){return $.center.equals(this.center)&&$.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON($){return this.radius=$.radius,this.center.fromArray($.center),this}}var j8=new g,pJ=new g,c9=new g,t8=new g,lJ=new g,n9=new g,uJ=new g;class D6{constructor($=new g,J=new g(0,0,-1)){this.origin=$,this.direction=J}set($,J){return this.origin.copy($),this.direction.copy(J),this}copy($){return this.origin.copy($.origin),this.direction.copy($.direction),this}at($,J){return J.copy(this.origin).addScaledVector(this.direction,$)}lookAt($){return this.direction.copy($).sub(this.origin).normalize(),this}recast($){return this.origin.copy(this.at($,j8)),this}closestPointToPoint($,J){J.subVectors($,this.origin);let Q=J.dot(this.direction);if(Q<0)return J.copy(this.origin);return J.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint($){return Math.sqrt(this.distanceSqToPoint($))}distanceSqToPoint($){let J=j8.subVectors($,this.origin).dot(this.direction);if(J<0)return this.origin.distanceToSquared($);return j8.copy(this.origin).addScaledVector(this.direction,J),j8.distanceToSquared($)}distanceSqToSegment($,J,Q,Z){pJ.copy($).add(J).multiplyScalar(0.5),c9.copy(J).sub($).normalize(),t8.copy(this.origin).sub(pJ);let W=$.distanceTo(J)*0.5,K=-this.direction.dot(c9),X=t8.dot(this.direction),H=-t8.dot(c9),Y=t8.lengthSq(),U=Math.abs(1-K*K),G,E,q,M;if(U>0)if(G=K*H-X,E=K*X-H,M=W*U,G>=0)if(E>=-M)if(E<=M){let O=1/U;G*=O,E*=O,q=G*(G+K*E+2*X)+E*(K*G+E+2*H)+Y}else E=W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;else E=-W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;else if(E<=-M)G=Math.max(0,-(-K*W+X)),E=G>0?-W:Math.min(Math.max(-W,-H),W),q=-G*G+E*(E+2*H)+Y;else if(E<=M)G=0,E=Math.min(Math.max(-W,-H),W),q=E*(E+2*H)+Y;else G=Math.max(0,-(K*W+X)),E=G>0?W:Math.min(Math.max(-W,-H),W),q=-G*G+E*(E+2*H)+Y;else E=K>0?-W:W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;if(Q)Q.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(pJ).addScaledVector(c9,E);return q}intersectSphere($,J){j8.subVectors($.center,this.origin);let Q=j8.dot(this.direction),Z=j8.dot(j8)-Q*Q,W=$.radius*$.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),X=Q-K,H=Q+K;if(H<0)return null;if(X<0)return this.at(H,J);return this.at(X,J)}intersectsSphere($){if($.radius<0)return!1;return this.distanceSqToPoint($.center)<=$.radius*$.radius}distanceToPlane($){let J=$.normal.dot(this.direction);if(J===0){if($.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot($.normal)+$.constant)/J;return Q>=0?Q:null}intersectPlane($,J){let Q=this.distanceToPlane($);if(Q===null)return null;return this.at(Q,J)}intersectsPlane($){let J=$.distanceToPoint(this.origin);if(J===0)return!0;if($.normal.dot(this.direction)*J<0)return!0;return!1}intersectBox($,J){let Q,Z,W,K,X,H,Y=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(Y>=0)Q=($.min.x-E.x)*Y,Z=($.max.x-E.x)*Y;else Q=($.max.x-E.x)*Y,Z=($.min.x-E.x)*Y;if(U>=0)W=($.min.y-E.y)*U,K=($.max.y-E.y)*U;else W=($.max.y-E.y)*U,K=($.min.y-E.y)*U;if(Q>K||W>Z)return null;if(W>Q||isNaN(Q))Q=W;if(K<Z||isNaN(Z))Z=K;if(G>=0)X=($.min.z-E.z)*G,H=($.max.z-E.z)*G;else X=($.max.z-E.z)*G,H=($.min.z-E.z)*G;if(Q>H||X>Z)return null;if(X>Q||Q!==Q)Q=X;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at(Q>=0?Q:Z,J)}intersectsBox($){return this.intersectBox($,j8)!==null}intersectTriangle($,J,Q,Z,W){lJ.subVectors(J,$),n9.subVectors(Q,$),uJ.crossVectors(lJ,n9);let K=this.direction.dot(uJ),X;if(K>0){if(Z)return null;X=1}else if(K<0)X=-1,K=-K;else return null;t8.subVectors(this.origin,$);let H=X*this.direction.dot(n9.crossVectors(t8,n9));if(H<0)return null;let Y=X*this.direction.dot(lJ.cross(t8));if(Y<0)return null;if(H+Y>K)return null;let U=-X*t8.dot(uJ);if(U<0)return null;return this.at(U/K,W)}applyMatrix4($){return this.origin.applyMatrix4($),this.direction.transformDirection($),this}equals($){return $.origin.equals(this.origin)&&$.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class g0{constructor($,J,Q,Z,W,K,X,H,Y,U,G,E,q,M,O,F){if(g0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],$!==void 0)this.set($,J,Q,Z,W,K,X,H,Y,U,G,E,q,M,O,F)}set($,J,Q,Z,W,K,X,H,Y,U,G,E,q,M,O,F){let N=this.elements;return N[0]=$,N[4]=J,N[8]=Q,N[12]=Z,N[1]=W,N[5]=K,N[9]=X,N[13]=H,N[2]=Y,N[6]=U,N[10]=G,N[14]=E,N[3]=q,N[7]=M,N[11]=O,N[15]=F,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new g0().fromArray(this.elements)}copy($){let J=this.elements,Q=$.elements;return J[0]=Q[0],J[1]=Q[1],J[2]=Q[2],J[3]=Q[3],J[4]=Q[4],J[5]=Q[5],J[6]=Q[6],J[7]=Q[7],J[8]=Q[8],J[9]=Q[9],J[10]=Q[10],J[11]=Q[11],J[12]=Q[12],J[13]=Q[13],J[14]=Q[14],J[15]=Q[15],this}copyPosition($){let J=this.elements,Q=$.elements;return J[12]=Q[12],J[13]=Q[13],J[14]=Q[14],this}setFromMatrix3($){let J=$.elements;return this.set(J[0],J[3],J[6],0,J[1],J[4],J[7],0,J[2],J[5],J[8],0,0,0,0,1),this}extractBasis($,J,Q){return $.setFromMatrixColumn(this,0),J.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis($,J,Q){return this.set($.x,J.x,Q.x,0,$.y,J.y,Q.y,0,$.z,J.z,Q.z,0,0,0,0,1),this}extractRotation($){let J=this.elements,Q=$.elements,Z=1/e7.setFromMatrixColumn($,0).length(),W=1/e7.setFromMatrixColumn($,1).length(),K=1/e7.setFromMatrixColumn($,2).length();return J[0]=Q[0]*Z,J[1]=Q[1]*Z,J[2]=Q[2]*Z,J[3]=0,J[4]=Q[4]*W,J[5]=Q[5]*W,J[6]=Q[6]*W,J[7]=0,J[8]=Q[8]*K,J[9]=Q[9]*K,J[10]=Q[10]*K,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromEuler($){let J=this.elements,Q=$.x,Z=$.y,W=$.z,K=Math.cos(Q),X=Math.sin(Q),H=Math.cos(Z),Y=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if($.order==="XYZ"){let E=K*U,q=K*G,M=X*U,O=X*G;J[0]=H*U,J[4]=-H*G,J[8]=Y,J[1]=q+M*Y,J[5]=E-O*Y,J[9]=-X*H,J[2]=O-E*Y,J[6]=M+q*Y,J[10]=K*H}else if($.order==="YXZ"){let E=H*U,q=H*G,M=Y*U,O=Y*G;J[0]=E+O*X,J[4]=M*X-q,J[8]=K*Y,J[1]=K*G,J[5]=K*U,J[9]=-X,J[2]=q*X-M,J[6]=O+E*X,J[10]=K*H}else if($.order==="ZXY"){let E=H*U,q=H*G,M=Y*U,O=Y*G;J[0]=E-O*X,J[4]=-K*G,J[8]=M+q*X,J[1]=q+M*X,J[5]=K*U,J[9]=O-E*X,J[2]=-K*Y,J[6]=X,J[10]=K*H}else if($.order==="ZYX"){let E=K*U,q=K*G,M=X*U,O=X*G;J[0]=H*U,J[4]=M*Y-q,J[8]=E*Y+O,J[1]=H*G,J[5]=O*Y+E,J[9]=q*Y-M,J[2]=-Y,J[6]=X*H,J[10]=K*H}else if($.order==="YZX"){let E=K*H,q=K*Y,M=X*H,O=X*Y;J[0]=H*U,J[4]=O-E*G,J[8]=M*G+q,J[1]=G,J[5]=K*U,J[9]=-X*U,J[2]=-Y*U,J[6]=q*G+M,J[10]=E-O*G}else if($.order==="XZY"){let E=K*H,q=K*Y,M=X*H,O=X*Y;J[0]=H*U,J[4]=-G,J[8]=Y*U,J[1]=E*G+O,J[5]=K*U,J[9]=q*G-M,J[2]=M*G-q,J[6]=X*U,J[10]=O*G+E}return J[3]=0,J[7]=0,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromQuaternion($){return this.compose(tY,$,eY)}lookAt($,J,Q){let Z=this.elements;if(o1.subVectors($,J),o1.lengthSq()===0)o1.z=1;if(o1.normalize(),e8.crossVectors(Q,o1),e8.lengthSq()===0){if(Math.abs(Q.z)===1)o1.x+=0.0001;else o1.z+=0.0001;o1.normalize(),e8.crossVectors(Q,o1)}return e8.normalize(),s9.crossVectors(o1,e8),Z[0]=e8.x,Z[4]=s9.x,Z[8]=o1.x,Z[1]=e8.y,Z[5]=s9.y,Z[9]=o1.y,Z[2]=e8.z,Z[6]=s9.z,Z[10]=o1.z,this}multiply($){return this.multiplyMatrices(this,$)}premultiply($){return this.multiplyMatrices($,this)}multiplyMatrices($,J){let Q=$.elements,Z=J.elements,W=this.elements,K=Q[0],X=Q[4],H=Q[8],Y=Q[12],U=Q[1],G=Q[5],E=Q[9],q=Q[13],M=Q[2],O=Q[6],F=Q[10],N=Q[14],R=Q[3],V=Q[7],L=Q[11],k=Q[15],A=Z[0],I=Z[4],S=Z[8],y=Z[12],B=Z[1],D=Z[5],C=Z[9],T=Z[13],P=Z[2],f=Z[6],h=Z[10],b=Z[14],l=Z[3],x=Z[7],s=Z[11],t=Z[15];return W[0]=K*A+X*B+H*P+Y*l,W[4]=K*I+X*D+H*f+Y*x,W[8]=K*S+X*C+H*h+Y*s,W[12]=K*y+X*T+H*b+Y*t,W[1]=U*A+G*B+E*P+q*l,W[5]=U*I+G*D+E*f+q*x,W[9]=U*S+G*C+E*h+q*s,W[13]=U*y+G*T+E*b+q*t,W[2]=M*A+O*B+F*P+N*l,W[6]=M*I+O*D+F*f+N*x,W[10]=M*S+O*C+F*h+N*s,W[14]=M*y+O*T+F*b+N*t,W[3]=R*A+V*B+L*P+k*l,W[7]=R*I+V*D+L*f+k*x,W[11]=R*S+V*C+L*h+k*s,W[15]=R*y+V*T+L*b+k*t,this}multiplyScalar($){let J=this.elements;return J[0]*=$,J[4]*=$,J[8]*=$,J[12]*=$,J[1]*=$,J[5]*=$,J[9]*=$,J[13]*=$,J[2]*=$,J[6]*=$,J[10]*=$,J[14]*=$,J[3]*=$,J[7]*=$,J[11]*=$,J[15]*=$,this}determinant(){let $=this.elements,J=$[0],Q=$[4],Z=$[8],W=$[12],K=$[1],X=$[5],H=$[9],Y=$[13],U=$[2],G=$[6],E=$[10],q=$[14],M=$[3],O=$[7],F=$[11],N=$[15];return M*(+W*H*G-Z*Y*G-W*X*E+Q*Y*E+Z*X*q-Q*H*q)+O*(+J*H*q-J*Y*E+W*K*E-Z*K*q+Z*Y*U-W*H*U)+F*(+J*Y*G-J*X*q-W*K*G+Q*K*q+W*X*U-Q*Y*U)+N*(-Z*X*U-J*H*G+J*X*E+Z*K*G-Q*K*E+Q*H*U)}transpose(){let $=this.elements,J;return J=$[1],$[1]=$[4],$[4]=J,J=$[2],$[2]=$[8],$[8]=J,J=$[6],$[6]=$[9],$[9]=J,J=$[3],$[3]=$[12],$[12]=J,J=$[7],$[7]=$[13],$[13]=J,J=$[11],$[11]=$[14],$[14]=J,this}setPosition($,J,Q){let Z=this.elements;if($.isVector3)Z[12]=$.x,Z[13]=$.y,Z[14]=$.z;else Z[12]=$,Z[13]=J,Z[14]=Q;return this}invert(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8],G=$[9],E=$[10],q=$[11],M=$[12],O=$[13],F=$[14],N=$[15],R=G*F*Y-O*E*Y+O*H*q-X*F*q-G*H*N+X*E*N,V=M*E*Y-U*F*Y-M*H*q+K*F*q+U*H*N-K*E*N,L=U*O*Y-M*G*Y+M*X*q-K*O*q-U*X*N+K*G*N,k=M*G*H-U*O*H-M*X*E+K*O*E+U*X*F-K*G*F,A=J*R+Q*V+Z*L+W*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return $[0]=R*I,$[1]=(O*E*W-G*F*W-O*Z*q+Q*F*q+G*Z*N-Q*E*N)*I,$[2]=(X*F*W-O*H*W+O*Z*Y-Q*F*Y-X*Z*N+Q*H*N)*I,$[3]=(G*H*W-X*E*W-G*Z*Y+Q*E*Y+X*Z*q-Q*H*q)*I,$[4]=V*I,$[5]=(U*F*W-M*E*W+M*Z*q-J*F*q-U*Z*N+J*E*N)*I,$[6]=(M*H*W-K*F*W-M*Z*Y+J*F*Y+K*Z*N-J*H*N)*I,$[7]=(K*E*W-U*H*W+U*Z*Y-J*E*Y-K*Z*q+J*H*q)*I,$[8]=L*I,$[9]=(M*G*W-U*O*W-M*Q*q+J*O*q+U*Q*N-J*G*N)*I,$[10]=(K*O*W-M*X*W+M*Q*Y-J*O*Y-K*Q*N+J*X*N)*I,$[11]=(U*X*W-K*G*W-U*Q*Y+J*G*Y+K*Q*q-J*X*q)*I,$[12]=k*I,$[13]=(U*O*Z-M*G*Z+M*Q*E-J*O*E-U*Q*F+J*G*F)*I,$[14]=(M*X*Z-K*O*Z-M*Q*H+J*O*H+K*Q*F-J*X*F)*I,$[15]=(K*G*Z-U*X*Z+U*Q*H-J*G*H-K*Q*E+J*X*E)*I,this}scale($){let J=this.elements,Q=$.x,Z=$.y,W=$.z;return J[0]*=Q,J[4]*=Z,J[8]*=W,J[1]*=Q,J[5]*=Z,J[9]*=W,J[2]*=Q,J[6]*=Z,J[10]*=W,J[3]*=Q,J[7]*=Z,J[11]*=W,this}getMaxScaleOnAxis(){let $=this.elements,J=$[0]*$[0]+$[1]*$[1]+$[2]*$[2],Q=$[4]*$[4]+$[5]*$[5]+$[6]*$[6],Z=$[8]*$[8]+$[9]*$[9]+$[10]*$[10];return Math.sqrt(Math.max(J,Q,Z))}makeTranslation($,J,Q){if($.isVector3)this.set(1,0,0,$.x,0,1,0,$.y,0,0,1,$.z,0,0,0,1);else this.set(1,0,0,$,0,1,0,J,0,0,1,Q,0,0,0,1);return this}makeRotationX($){let J=Math.cos($),Q=Math.sin($);return this.set(1,0,0,0,0,J,-Q,0,0,Q,J,0,0,0,0,1),this}makeRotationY($){let J=Math.cos($),Q=Math.sin($);return this.set(J,0,Q,0,0,1,0,0,-Q,0,J,0,0,0,0,1),this}makeRotationZ($){let J=Math.cos($),Q=Math.sin($);return this.set(J,-Q,0,0,Q,J,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis($,J){let Q=Math.cos(J),Z=Math.sin(J),W=1-Q,K=$.x,X=$.y,H=$.z,Y=W*K,U=W*X;return this.set(Y*K+Q,Y*X-Z*H,Y*H+Z*X,0,Y*X+Z*H,U*X+Q,U*H-Z*K,0,Y*H-Z*X,U*H+Z*K,W*H*H+Q,0,0,0,0,1),this}makeScale($,J,Q){return this.set($,0,0,0,0,J,0,0,0,0,Q,0,0,0,0,1),this}makeShear($,J,Q,Z,W,K){return this.set(1,Q,W,0,$,1,K,0,J,Z,1,0,0,0,0,1),this}compose($,J,Q){let Z=this.elements,W=J._x,K=J._y,X=J._z,H=J._w,Y=W+W,U=K+K,G=X+X,E=W*Y,q=W*U,M=W*G,O=K*U,F=K*G,N=X*G,R=H*Y,V=H*U,L=H*G,k=Q.x,A=Q.y,I=Q.z;return Z[0]=(1-(O+N))*k,Z[1]=(q+L)*k,Z[2]=(M-V)*k,Z[3]=0,Z[4]=(q-L)*A,Z[5]=(1-(E+N))*A,Z[6]=(F+R)*A,Z[7]=0,Z[8]=(M+V)*I,Z[9]=(F-R)*I,Z[10]=(1-(E+O))*I,Z[11]=0,Z[12]=$.x,Z[13]=$.y,Z[14]=$.z,Z[15]=1,this}decompose($,J,Q){let Z=this.elements,W=e7.set(Z[0],Z[1],Z[2]).length(),K=e7.set(Z[4],Z[5],Z[6]).length(),X=e7.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;$.x=Z[12],$.y=Z[13],$.z=Z[14],E8.copy(this);let Y=1/W,U=1/K,G=1/X;return E8.elements[0]*=Y,E8.elements[1]*=Y,E8.elements[2]*=Y,E8.elements[4]*=U,E8.elements[5]*=U,E8.elements[6]*=U,E8.elements[8]*=G,E8.elements[9]*=G,E8.elements[10]*=G,J.setFromRotationMatrix(E8),Q.x=W,Q.y=K,Q.z=X,this}makePerspective($,J,Q,Z,W,K,X=2000,H=!1){let Y=this.elements,U=2*W/(J-$),G=2*W/(Q-Z),E=(J+$)/(J-$),q=(Q+Z)/(Q-Z),M,O;if(H)M=W/(K-W),O=K*W/(K-W);else if(X===2000)M=-(K+W)/(K-W),O=-2*K*W/(K-W);else if(X===2001)M=-K/(K-W),O=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return Y[0]=U,Y[4]=0,Y[8]=E,Y[12]=0,Y[1]=0,Y[5]=G,Y[9]=q,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=M,Y[14]=O,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic($,J,Q,Z,W,K,X=2000,H=!1){let Y=this.elements,U=2/(J-$),G=2/(Q-Z),E=-(J+$)/(J-$),q=-(Q+Z)/(Q-Z),M,O;if(H)M=1/(K-W),O=K/(K-W);else if(X===2000)M=-2/(K-W),O=-(K+W)/(K-W);else if(X===2001)M=-1/(K-W),O=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return Y[0]=U,Y[4]=0,Y[8]=0,Y[12]=E,Y[1]=0,Y[5]=G,Y[9]=0,Y[13]=q,Y[2]=0,Y[6]=0,Y[10]=M,Y[14]=O,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals($){let J=this.elements,Q=$.elements;for(let Z=0;Z<16;Z++)if(J[Z]!==Q[Z])return!1;return!0}fromArray($,J=0){for(let Q=0;Q<16;Q++)this.elements[Q]=$[Q+J];return this}toArray($=[],J=0){let Q=this.elements;return $[J]=Q[0],$[J+1]=Q[1],$[J+2]=Q[2],$[J+3]=Q[3],$[J+4]=Q[4],$[J+5]=Q[5],$[J+6]=Q[6],$[J+7]=Q[7],$[J+8]=Q[8],$[J+9]=Q[9],$[J+10]=Q[10],$[J+11]=Q[11],$[J+12]=Q[12],$[J+13]=Q[13],$[J+14]=Q[14],$[J+15]=Q[15],$}}var e7=new g,E8=new g0,tY=new g(0,0,0),eY=new g(1,1,1),e8=new g,s9=new g,o1=new g,w5=new g0,S5=new F8;class M8{constructor($=0,J=0,Q=0,Z=M8.DEFAULT_ORDER){this.isEuler=!0,this._x=$,this._y=J,this._z=Q,this._order=Z}get x(){return this._x}set x($){this._x=$,this._onChangeCallback()}get y(){return this._y}set y($){this._y=$,this._onChangeCallback()}get z(){return this._z}set z($){this._z=$,this._onChangeCallback()}get order(){return this._order}set order($){this._order=$,this._onChangeCallback()}set($,J,Q,Z=this._order){return this._x=$,this._y=J,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy($){return this._x=$._x,this._y=$._y,this._z=$._z,this._order=$._order,this._onChangeCallback(),this}setFromRotationMatrix($,J=this._order,Q=!0){let Z=$.elements,W=Z[0],K=Z[4],X=Z[8],H=Z[1],Y=Z[5],U=Z[9],G=Z[2],E=Z[6],q=Z[10];switch(J){case"XYZ":if(this._y=Math.asin(c0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,Y),this._z=0;break;case"YXZ":if(this._x=Math.asin(-c0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(H,Y);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(c0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-K,Y);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-c0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-K,Y);break;case"YZX":if(this._z=Math.asin(c0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,Y),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-c0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,Y),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+J)}if(this._order=J,Q===!0)this._onChangeCallback();return this}setFromQuaternion($,J,Q){return w5.makeRotationFromQuaternion($),this.setFromRotationMatrix(w5,J,Q)}setFromVector3($,J=this._order){return this.set($.x,$.y,$.z,J)}reorder($){return S5.setFromEuler(this),this.setFromQuaternion(S5,$)}equals($){return $._x===this._x&&$._y===this._y&&$._z===this._z&&$._order===this._order}fromArray($){if(this._x=$[0],this._y=$[1],this._z=$[2],$[3]!==void 0)this._order=$[3];return this._onChangeCallback(),this}toArray($=[],J=0){return $[J]=this._x,$[J+1]=this._y,$[J+2]=this._z,$[J+3]=this._order,$}_onChange($){return this._onChangeCallback=$,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}M8.DEFAULT_ORDER="XYZ";class f${constructor(){this.mask=1}set($){this.mask=(1<<$|0)>>>0}enable($){this.mask|=1<<$|0}enableAll(){this.mask=-1}toggle($){this.mask^=1<<$|0}disable($){this.mask&=~(1<<$|0)}disableAll(){this.mask=0}test($){return(this.mask&$.mask)!==0}isEnabled($){return(this.mask&(1<<$|0))!==0}}var $U=0,j5=new g,$6=new F8,f8=new g0,o9=new g,c6=new g,JU=new g,QU=new F8,f5=new g(1,0,0),v5=new g(0,1,0),y5=new g(0,0,1),b5={type:"added"},ZU={type:"removed"},J6={type:"childadded",child:null},mJ={type:"childremoved",child:null};class E1 extends X7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:$U++}),this.uuid=R8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=E1.DEFAULT_UP.clone();let $=new g,J=new M8,Q=new F8,Z=new g(1,1,1);function W(){Q.setFromEuler(J,!1)}function K(){J.setFromQuaternion(Q,void 0,!1)}J._onChange(W),Q._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:$},rotation:{configurable:!0,enumerable:!0,value:J},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new g0},normalMatrix:{value:new p0}}),this.matrix=new g0,this.matrixWorld=new g0,this.matrixAutoUpdate=E1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=E1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f$,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4($){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply($),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion($){return this.quaternion.premultiply($),this}setRotationFromAxisAngle($,J){this.quaternion.setFromAxisAngle($,J)}setRotationFromEuler($){this.quaternion.setFromEuler($,!0)}setRotationFromMatrix($){this.quaternion.setFromRotationMatrix($)}setRotationFromQuaternion($){this.quaternion.copy($)}rotateOnAxis($,J){return $6.setFromAxisAngle($,J),this.quaternion.multiply($6),this}rotateOnWorldAxis($,J){return $6.setFromAxisAngle($,J),this.quaternion.premultiply($6),this}rotateX($){return this.rotateOnAxis(f5,$)}rotateY($){return this.rotateOnAxis(v5,$)}rotateZ($){return this.rotateOnAxis(y5,$)}translateOnAxis($,J){return j5.copy($).applyQuaternion(this.quaternion),this.position.add(j5.multiplyScalar(J)),this}translateX($){return this.translateOnAxis(f5,$)}translateY($){return this.translateOnAxis(v5,$)}translateZ($){return this.translateOnAxis(y5,$)}localToWorld($){return this.updateWorldMatrix(!0,!1),$.applyMatrix4(this.matrixWorld)}worldToLocal($){return this.updateWorldMatrix(!0,!1),$.applyMatrix4(f8.copy(this.matrixWorld).invert())}lookAt($,J,Q){if($.isVector3)o9.copy($);else o9.set($,J,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),c6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)f8.lookAt(c6,o9,this.up);else f8.lookAt(o9,c6,this.up);if(this.quaternion.setFromRotationMatrix(f8),Z)f8.extractRotation(Z.matrixWorld),$6.setFromRotationMatrix(f8),this.quaternion.premultiply($6.invert())}add($){if(arguments.length>1){for(let J=0;J<arguments.length;J++)this.add(arguments[J]);return this}if($===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",$),this;if($&&$.isObject3D)$.removeFromParent(),$.parent=this,this.children.push($),$.dispatchEvent(b5),J6.child=$,this.dispatchEvent(J6),J6.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",$);return this}remove($){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let J=this.children.indexOf($);if(J!==-1)$.parent=null,this.children.splice(J,1),$.dispatchEvent(ZU),mJ.child=$,this.dispatchEvent(mJ),mJ.child=null;return this}removeFromParent(){let $=this.parent;if($!==null)$.remove(this);return this}clear(){return this.remove(...this.children)}attach($){if(this.updateWorldMatrix(!0,!1),f8.copy(this.matrixWorld).invert(),$.parent!==null)$.parent.updateWorldMatrix(!0,!1),f8.multiply($.parent.matrixWorld);return $.applyMatrix4(f8),$.removeFromParent(),$.parent=this,this.children.push($),$.updateWorldMatrix(!1,!0),$.dispatchEvent(b5),J6.child=$,this.dispatchEvent(J6),J6.child=null,this}getObjectById($){return this.getObjectByProperty("id",$)}getObjectByName($){return this.getObjectByProperty("name",$)}getObjectByProperty($,J){if(this[$]===J)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let K=this.children[Q].getObjectByProperty($,J);if(K!==void 0)return K}return}getObjectsByProperty($,J,Q=[]){if(this[$]===J)Q.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty($,J,Q);return Q}getWorldPosition($){return this.updateWorldMatrix(!0,!1),$.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion($){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(c6,$,JU),$}getWorldScale($){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(c6,QU,$),$}getWorldDirection($){this.updateWorldMatrix(!0,!1);let J=this.matrixWorld.elements;return $.set(J[8],J[9],J[10]).normalize()}raycast(){}traverse($){$(this);let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].traverse($)}traverseVisible($){if(this.visible===!1)return;$(this);let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].traverseVisible($)}traverseAncestors($){let J=this.parent;if(J!==null)$(J),J.traverseAncestors($)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld($){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].updateMatrixWorld($)}updateWorldMatrix($,J){let Q=this.parent;if($===!0&&Q!==null)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(J===!0){let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON($){let J=$===void 0||typeof $==="string",Q={};if(J)$={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON($),Z.indirectTexture=this._indirectTexture.toJSON($),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON($);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(X,H){if(X[H.uuid]===void 0)X[H.uuid]=H.toJSON($);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON($).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON($).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W($.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let H=X.shapes;if(Array.isArray(H))for(let Y=0,U=H.length;Y<U;Y++){let G=H[Y];W($.shapes,G)}else W($.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W($.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let H=0,Y=this.material.length;H<Y;H++)X.push(W($.materials,this.material[H]));Z.material=X}else Z.material=W($.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON($).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let H=this.animations[X];Z.animations.push(W($.animations,H))}}if(J){let X=K($.geometries),H=K($.materials),Y=K($.textures),U=K($.images),G=K($.shapes),E=K($.skeletons),q=K($.animations),M=K($.nodes);if(X.length>0)Q.geometries=X;if(H.length>0)Q.materials=H;if(Y.length>0)Q.textures=Y;if(U.length>0)Q.images=U;if(G.length>0)Q.shapes=G;if(E.length>0)Q.skeletons=E;if(q.length>0)Q.animations=q;if(M.length>0)Q.nodes=M}return Q.object=Z,Q;function K(X){let H=[];for(let Y in X){let U=X[Y];delete U.metadata,H.push(U)}return H}}clone($){return new this.constructor().copy(this,$)}copy($,J=!0){if(this.name=$.name,this.up.copy($.up),this.position.copy($.position),this.rotation.order=$.rotation.order,this.quaternion.copy($.quaternion),this.scale.copy($.scale),this.matrix.copy($.matrix),this.matrixWorld.copy($.matrixWorld),this.matrixAutoUpdate=$.matrixAutoUpdate,this.matrixWorldAutoUpdate=$.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=$.matrixWorldNeedsUpdate,this.layers.mask=$.layers.mask,this.visible=$.visible,this.castShadow=$.castShadow,this.receiveShadow=$.receiveShadow,this.frustumCulled=$.frustumCulled,this.renderOrder=$.renderOrder,this.animations=$.animations.slice(),this.userData=JSON.parse(JSON.stringify($.userData)),J===!0)for(let Q=0;Q<$.children.length;Q++){let Z=$.children[Q];this.add(Z.clone())}return this}}E1.DEFAULT_UP=new g(0,1,0);E1.DEFAULT_MATRIX_AUTO_UPDATE=!0;E1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var q8=new g,v8=new g,dJ=new g,y8=new g,Q6=new g,Z6=new g,h5=new g,cJ=new g,nJ=new g,sJ=new g,oJ=new i0,iJ=new i0,aJ=new i0;class W8{constructor($=new g,J=new g,Q=new g){this.a=$,this.b=J,this.c=Q}static getNormal($,J,Q,Z){Z.subVectors(Q,J),q8.subVectors($,J),Z.cross(q8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord($,J,Q,Z,W){q8.subVectors(Z,J),v8.subVectors(Q,J),dJ.subVectors($,J);let K=q8.dot(q8),X=q8.dot(v8),H=q8.dot(dJ),Y=v8.dot(v8),U=v8.dot(dJ),G=K*Y-X*X;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(Y*H-X*U)*E,M=(K*U-X*H)*E;return W.set(1-q-M,M,q)}static containsPoint($,J,Q,Z){if(this.getBarycoord($,J,Q,Z,y8)===null)return!1;return y8.x>=0&&y8.y>=0&&y8.x+y8.y<=1}static getInterpolation($,J,Q,Z,W,K,X,H){if(this.getBarycoord($,J,Q,Z,y8)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,y8.x),H.addScaledVector(K,y8.y),H.addScaledVector(X,y8.z),H}static getInterpolatedAttribute($,J,Q,Z,W,K){return oJ.setScalar(0),iJ.setScalar(0),aJ.setScalar(0),oJ.fromBufferAttribute($,J),iJ.fromBufferAttribute($,Q),aJ.fromBufferAttribute($,Z),K.setScalar(0),K.addScaledVector(oJ,W.x),K.addScaledVector(iJ,W.y),K.addScaledVector(aJ,W.z),K}static isFrontFacing($,J,Q,Z){return q8.subVectors(Q,J),v8.subVectors($,J),q8.cross(v8).dot(Z)<0?!0:!1}set($,J,Q){return this.a.copy($),this.b.copy(J),this.c.copy(Q),this}setFromPointsAndIndices($,J,Q,Z){return this.a.copy($[J]),this.b.copy($[Q]),this.c.copy($[Z]),this}setFromAttributeAndIndices($,J,Q,Z){return this.a.fromBufferAttribute($,J),this.b.fromBufferAttribute($,Q),this.c.fromBufferAttribute($,Z),this}clone(){return new this.constructor().copy(this)}copy($){return this.a.copy($.a),this.b.copy($.b),this.c.copy($.c),this}getArea(){return q8.subVectors(this.c,this.b),v8.subVectors(this.a,this.b),q8.cross(v8).length()*0.5}getMidpoint($){return $.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal($){return W8.getNormal(this.a,this.b,this.c,$)}getPlane($){return $.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord($,J){return W8.getBarycoord($,this.a,this.b,this.c,J)}getInterpolation($,J,Q,Z,W){return W8.getInterpolation($,this.a,this.b,this.c,J,Q,Z,W)}containsPoint($){return W8.containsPoint($,this.a,this.b,this.c)}isFrontFacing($){return W8.isFrontFacing(this.a,this.b,this.c,$)}intersectsBox($){return $.intersectsTriangle(this)}closestPointToPoint($,J){let Q=this.a,Z=this.b,W=this.c,K,X;Q6.subVectors(Z,Q),Z6.subVectors(W,Q),cJ.subVectors($,Q);let H=Q6.dot(cJ),Y=Z6.dot(cJ);if(H<=0&&Y<=0)return J.copy(Q);nJ.subVectors($,Z);let U=Q6.dot(nJ),G=Z6.dot(nJ);if(U>=0&&G<=U)return J.copy(Z);let E=H*G-U*Y;if(E<=0&&H>=0&&U<=0)return K=H/(H-U),J.copy(Q).addScaledVector(Q6,K);sJ.subVectors($,W);let q=Q6.dot(sJ),M=Z6.dot(sJ);if(M>=0&&q<=M)return J.copy(W);let O=q*Y-H*M;if(O<=0&&Y>=0&&M<=0)return X=Y/(Y-M),J.copy(Q).addScaledVector(Z6,X);let F=U*M-q*G;if(F<=0&&G-U>=0&&q-M>=0)return h5.subVectors(W,Z),X=(G-U)/(G-U+(q-M)),J.copy(Z).addScaledVector(h5,X);let N=1/(F+O+E);return K=O*N,X=E*N,J.copy(Q).addScaledVector(Q6,K).addScaledVector(Z6,X)}equals($){return $.a.equals(this.a)&&$.b.equals(this.b)&&$.c.equals(this.c)}}var HK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$7={h:0,s:0,l:0},i9={h:0,s:0,l:0};function rJ($,J,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return $+(J-$)*6*Q;if(Q<0.5)return J;if(Q<0.6666666666666666)return $+(J-$)*6*(0.6666666666666666-Q);return $}class y0{constructor($,J,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set($,J,Q)}set($,J,Q){if(J===void 0&&Q===void 0){let Z=$;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB($,J,Q);return this}setScalar($){return this.r=$,this.g=$,this.b=$,this}setHex($,J="srgb"){return $=Math.floor($),this.r=($>>16&255)/255,this.g=($>>8&255)/255,this.b=($&255)/255,o0.colorSpaceToWorking(this,J),this}setRGB($,J,Q,Z=o0.workingColorSpace){return this.r=$,this.g=J,this.b=Q,o0.colorSpaceToWorking(this,Z),this}setHSL($,J,Q,Z=o0.workingColorSpace){if($=eQ($,1),J=c0(J,0,1),Q=c0(Q,0,1),J===0)this.r=this.g=this.b=Q;else{let W=Q<=0.5?Q*(1+J):Q+J-Q*J,K=2*Q-W;this.r=rJ(K,W,$+0.3333333333333333),this.g=rJ(K,W,$),this.b=rJ(K,W,$-0.3333333333333333)}return o0.colorSpaceToWorking(this,Z),this}setStyle($,J="srgb"){function Q(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+$+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec($)){let W,K=Z[1],X=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,J);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,J);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,J);break;default:console.warn("THREE.Color: Unknown color model "+$)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec($)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,J);else if(K===6)return this.setHex(parseInt(W,16),J);else console.warn("THREE.Color: Invalid hex color "+$)}else if($&&$.length>0)return this.setColorName($,J);return this}setColorName($,J="srgb"){let Q=HK[$.toLowerCase()];if(Q!==void 0)this.setHex(Q,J);else console.warn("THREE.Color: Unknown color "+$);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy($){return this.r=$.r,this.g=$.g,this.b=$.b,this}copySRGBToLinear($){return this.r=x8($.r),this.g=x8($.g),this.b=x8($.b),this}copyLinearToSRGB($){return this.r=U6($.r),this.g=U6($.g),this.b=U6($.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex($="srgb"){return o0.workingToColorSpace(j1.copy(this),$),Math.round(c0(j1.r*255,0,255))*65536+Math.round(c0(j1.g*255,0,255))*256+Math.round(c0(j1.b*255,0,255))}getHexString($="srgb"){return("000000"+this.getHex($).toString(16)).slice(-6)}getHSL($,J=o0.workingColorSpace){o0.workingToColorSpace(j1.copy(this),J);let{r:Q,g:Z,b:W}=j1,K=Math.max(Q,Z,W),X=Math.min(Q,Z,W),H,Y,U=(X+K)/2;if(X===K)H=0,Y=0;else{let G=K-X;switch(Y=U<=0.5?G/(K+X):G/(2-K-X),K){case Q:H=(Z-W)/G+(Z<W?6:0);break;case Z:H=(W-Q)/G+2;break;case W:H=(Q-Z)/G+4;break}H/=6}return $.h=H,$.s=Y,$.l=U,$}getRGB($,J=o0.workingColorSpace){return o0.workingToColorSpace(j1.copy(this),J),$.r=j1.r,$.g=j1.g,$.b=j1.b,$}getStyle($="srgb"){o0.workingToColorSpace(j1.copy(this),$);let{r:J,g:Q,b:Z}=j1;if($!=="srgb")return`color(${$} ${J.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(J*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL($,J,Q){return this.getHSL($7),this.setHSL($7.h+$,$7.s+J,$7.l+Q)}add($){return this.r+=$.r,this.g+=$.g,this.b+=$.b,this}addColors($,J){return this.r=$.r+J.r,this.g=$.g+J.g,this.b=$.b+J.b,this}addScalar($){return this.r+=$,this.g+=$,this.b+=$,this}sub($){return this.r=Math.max(0,this.r-$.r),this.g=Math.max(0,this.g-$.g),this.b=Math.max(0,this.b-$.b),this}multiply($){return this.r*=$.r,this.g*=$.g,this.b*=$.b,this}multiplyScalar($){return this.r*=$,this.g*=$,this.b*=$,this}lerp($,J){return this.r+=($.r-this.r)*J,this.g+=($.g-this.g)*J,this.b+=($.b-this.b)*J,this}lerpColors($,J,Q){return this.r=$.r+(J.r-$.r)*Q,this.g=$.g+(J.g-$.g)*Q,this.b=$.b+(J.b-$.b)*Q,this}lerpHSL($,J){this.getHSL($7),$.getHSL(i9);let Q=t6($7.h,i9.h,J),Z=t6($7.s,i9.s,J),W=t6($7.l,i9.l,J);return this.setHSL(Q,Z,W),this}setFromVector3($){return this.r=$.x,this.g=$.y,this.b=$.z,this}applyMatrix3($){let J=this.r,Q=this.g,Z=this.b,W=$.elements;return this.r=W[0]*J+W[3]*Q+W[6]*Z,this.g=W[1]*J+W[4]*Q+W[7]*Z,this.b=W[2]*J+W[5]*Q+W[8]*Z,this}equals($){return $.r===this.r&&$.g===this.g&&$.b===this.b}fromArray($,J=0){return this.r=$[J],this.g=$[J+1],this.b=$[J+2],this}toArray($=[],J=0){return $[J]=this.r,$[J+1]=this.g,$[J+2]=this.b,$}fromBufferAttribute($,J){return this.r=$.getX(J),this.g=$.getY(J),this.b=$.getZ(J),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var j1=new y0;y0.NAMES=HK;var WU=0;class t1 extends X7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:WU++}),this.uuid=R8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest($){if(this._alphaTest>0!==$>0)this.version++;this._alphaTest=$}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues($){if($===void 0)return;for(let J in $){let Q=$[J];if(Q===void 0){console.warn(`THREE.Material: parameter '${J}' has value of undefined.`);continue}let Z=this[J];if(Z===void 0){console.warn(`THREE.Material: '${J}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[J]=Q}}toJSON($){let J=$===void 0||typeof $==="string";if(J)$={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON($).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON($).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON($).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON($).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON($).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON($).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON($).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON($).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON($).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON($).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON($).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON($).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON($).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON($).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON($).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON($).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON($).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON($).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON($).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON($).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON($).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON($).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON($).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON($).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON($).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON($).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors===!0)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=!0;if(this.blendSrc!==204)Q.blendSrc=this.blendSrc;if(this.blendDst!==205)Q.blendDst=this.blendDst;if(this.blendEquation!==100)Q.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Q.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Q.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Q.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Q.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Q.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Q.depthFunc=this.depthFunc;if(this.depthTest===!1)Q.depthTest=this.depthTest;if(this.depthWrite===!1)Q.depthWrite=this.depthWrite;if(this.colorWrite===!1)Q.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Q.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Q.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Q.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Q.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Q.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Q.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Q.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Q.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=!0;if(this.alphaToCoverage===!0)Q.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Q.forceSinglePass=!0;if(this.wireframe===!0)Q.wireframe=!0;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=!0;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(W){let K=[];for(let X in W){let H=W[X];delete H.metadata,K.push(H)}return K}if(J){let W=Z($.textures),K=Z($.images);if(W.length>0)Q.textures=W;if(K.length>0)Q.images=K}return Q}clone(){return new this.constructor().copy(this)}copy($){this.name=$.name,this.blending=$.blending,this.side=$.side,this.vertexColors=$.vertexColors,this.opacity=$.opacity,this.transparent=$.transparent,this.blendSrc=$.blendSrc,this.blendDst=$.blendDst,this.blendEquation=$.blendEquation,this.blendSrcAlpha=$.blendSrcAlpha,this.blendDstAlpha=$.blendDstAlpha,this.blendEquationAlpha=$.blendEquationAlpha,this.blendColor.copy($.blendColor),this.blendAlpha=$.blendAlpha,this.depthFunc=$.depthFunc,this.depthTest=$.depthTest,this.depthWrite=$.depthWrite,this.stencilWriteMask=$.stencilWriteMask,this.stencilFunc=$.stencilFunc,this.stencilRef=$.stencilRef,this.stencilFuncMask=$.stencilFuncMask,this.stencilFail=$.stencilFail,this.stencilZFail=$.stencilZFail,this.stencilZPass=$.stencilZPass,this.stencilWrite=$.stencilWrite;let J=$.clippingPlanes,Q=null;if(J!==null){let Z=J.length;Q=Array(Z);for(let W=0;W!==Z;++W)Q[W]=J[W].clone()}return this.clippingPlanes=Q,this.clipIntersection=$.clipIntersection,this.clipShadows=$.clipShadows,this.shadowSide=$.shadowSide,this.colorWrite=$.colorWrite,this.precision=$.precision,this.polygonOffset=$.polygonOffset,this.polygonOffsetFactor=$.polygonOffsetFactor,this.polygonOffsetUnits=$.polygonOffsetUnits,this.dithering=$.dithering,this.alphaTest=$.alphaTest,this.alphaHash=$.alphaHash,this.alphaToCoverage=$.alphaToCoverage,this.premultipliedAlpha=$.premultipliedAlpha,this.forceSinglePass=$.forceSinglePass,this.visible=$.visible,this.toneMapped=$.toneMapped,this.userData=JSON.parse(JSON.stringify($.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate($){if($===!0)this.version++}}class I8 extends t1{constructor($){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new M8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.lightMap=$.lightMap,this.lightMapIntensity=$.lightMapIntensity,this.aoMap=$.aoMap,this.aoMapIntensity=$.aoMapIntensity,this.specularMap=$.specularMap,this.alphaMap=$.alphaMap,this.envMap=$.envMap,this.envMapRotation.copy($.envMapRotation),this.combine=$.combine,this.reflectivity=$.reflectivity,this.refractionRatio=$.refractionRatio,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.wireframeLinecap=$.wireframeLinecap,this.wireframeLinejoin=$.wireframeLinejoin,this.fog=$.fog,this}}var D1=new g,a9=new u0,KU=0;class H1{constructor($,J,Q=!1){if(Array.isArray($))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KU++}),this.name="",this.array=$,this.itemSize=J,this.count=$!==void 0?$.length/J:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate($){if($===!0)this.version++}setUsage($){return this.usage=$,this}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}copy($){return this.name=$.name,this.array=new $.array.constructor($.array),this.itemSize=$.itemSize,this.count=$.count,this.normalized=$.normalized,this.usage=$.usage,this.gpuType=$.gpuType,this}copyAt($,J,Q){$*=this.itemSize,Q*=J.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[$+Z]=J.array[Q+Z];return this}copyArray($){return this.array.set($),this}applyMatrix3($){if(this.itemSize===2)for(let J=0,Q=this.count;J<Q;J++)a9.fromBufferAttribute(this,J),a9.applyMatrix3($),this.setXY(J,a9.x,a9.y);else if(this.itemSize===3)for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.applyMatrix3($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}applyMatrix4($){for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.applyMatrix4($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}applyNormalMatrix($){for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.applyNormalMatrix($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}transformDirection($){for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.transformDirection($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}set($,J=0){return this.array.set($,J),this}getComponent($,J){let Q=this.array[$*this.itemSize+J];if(this.normalized)Q=N8(Q,this.array);return Q}setComponent($,J,Q){if(this.normalized)Q=$1(Q,this.array);return this.array[$*this.itemSize+J]=Q,this}getX($){let J=this.array[$*this.itemSize];if(this.normalized)J=N8(J,this.array);return J}setX($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize]=J,this}getY($){let J=this.array[$*this.itemSize+1];if(this.normalized)J=N8(J,this.array);return J}setY($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+1]=J,this}getZ($){let J=this.array[$*this.itemSize+2];if(this.normalized)J=N8(J,this.array);return J}setZ($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+2]=J,this}getW($){let J=this.array[$*this.itemSize+3];if(this.normalized)J=N8(J,this.array);return J}setW($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+3]=J,this}setXY($,J,Q){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this}setXYZ($,J,Q,Z){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this.array[$+2]=Z,this}setXYZW($,J,Q,Z,W){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array),W=$1(W,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this.array[$+2]=Z,this.array[$+3]=W,this}onUpload($){return this.onUploadCallback=$,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let $={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")$.name=this.name;if(this.usage!==35044)$.usage=this.usage;return $}}class v$ extends H1{constructor($,J,Q){super(new Uint16Array($),J,Q)}}class y$ extends H1{constructor($,J,Q){super(new Uint32Array($),J,Q)}}class X8 extends H1{constructor($,J,Q){super(new Float32Array($),J,Q)}}var XU=0,Z8=new g0,tJ=new E1,W6=new g,i1=new l1,n6=new l1,P1=new g;class x1 extends X7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XU++}),this.uuid=R8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex($){if(Array.isArray($))this.index=new(($Z($))?y$:v$)($,1);else this.index=$;return this}setIndirect($){return this.indirect=$,this}getIndirect(){return this.indirect}getAttribute($){return this.attributes[$]}setAttribute($,J){return this.attributes[$]=J,this}deleteAttribute($){return delete this.attributes[$],this}hasAttribute($){return this.attributes[$]!==void 0}addGroup($,J,Q=0){this.groups.push({start:$,count:J,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange($,J){this.drawRange.start=$,this.drawRange.count=J}applyMatrix4($){let J=this.attributes.position;if(J!==void 0)J.applyMatrix4($),J.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let W=new p0().getNormalMatrix($);Q.applyNormalMatrix(W),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection($),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion($){return Z8.makeRotationFromQuaternion($),this.applyMatrix4(Z8),this}rotateX($){return Z8.makeRotationX($),this.applyMatrix4(Z8),this}rotateY($){return Z8.makeRotationY($),this.applyMatrix4(Z8),this}rotateZ($){return Z8.makeRotationZ($),this.applyMatrix4(Z8),this}translate($,J,Q){return Z8.makeTranslation($,J,Q),this.applyMatrix4(Z8),this}scale($,J,Q){return Z8.makeScale($,J,Q),this.applyMatrix4(Z8),this}lookAt($){return tJ.lookAt($),tJ.updateMatrix(),this.applyMatrix4(tJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(W6).negate(),this.translate(W6.x,W6.y,W6.z),this}setFromPoints($){let J=this.getAttribute("position");if(J===void 0){let Q=[];for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z];Q.push(K.x,K.y,K.z||0)}this.setAttribute("position",new X8(Q,3))}else{let Q=Math.min($.length,J.count);for(let Z=0;Z<Q;Z++){let W=$[Z];J.setXYZ(Z,W.x,W.y,W.z||0)}if($.length>J.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");J.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new l1;let $=this.attributes.position,J=this.morphAttributes.position;if($&&$.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));return}if($!==void 0){if(this.boundingBox.setFromBufferAttribute($),J)for(let Q=0,Z=J.length;Q<Z;Q++){let W=J[Q];if(i1.setFromBufferAttribute(W),this.morphTargetsRelative)P1.addVectors(this.boundingBox.min,i1.min),this.boundingBox.expandByPoint(P1),P1.addVectors(this.boundingBox.max,i1.max),this.boundingBox.expandByPoint(P1);else this.boundingBox.expandByPoint(i1.min),this.boundingBox.expandByPoint(i1.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new r1;let $=this.attributes.position,J=this.morphAttributes.position;if($&&$.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new g,1/0);return}if($){let Q=this.boundingSphere.center;if(i1.setFromBufferAttribute($),J)for(let W=0,K=J.length;W<K;W++){let X=J[W];if(n6.setFromBufferAttribute(X),this.morphTargetsRelative)P1.addVectors(i1.min,n6.min),i1.expandByPoint(P1),P1.addVectors(i1.max,n6.max),i1.expandByPoint(P1);else i1.expandByPoint(n6.min),i1.expandByPoint(n6.max)}i1.getCenter(Q);let Z=0;for(let W=0,K=$.count;W<K;W++)P1.fromBufferAttribute($,W),Z=Math.max(Z,Q.distanceToSquared(P1));if(J)for(let W=0,K=J.length;W<K;W++){let X=J[W],H=this.morphTargetsRelative;for(let Y=0,U=X.count;Y<U;Y++){if(P1.fromBufferAttribute(X,Y),H)W6.fromBufferAttribute($,Y),P1.add(W6);Z=Math.max(Z,Q.distanceToSquared(P1))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let $=this.index,J=this.attributes;if($===null||J.position===void 0||J.normal===void 0||J.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:W}=J;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new H1(new Float32Array(4*Q.count),4));let K=this.getAttribute("tangent"),X=[],H=[];for(let S=0;S<Q.count;S++)X[S]=new g,H[S]=new g;let Y=new g,U=new g,G=new g,E=new u0,q=new u0,M=new u0,O=new g,F=new g;function N(S,y,B){Y.fromBufferAttribute(Q,S),U.fromBufferAttribute(Q,y),G.fromBufferAttribute(Q,B),E.fromBufferAttribute(W,S),q.fromBufferAttribute(W,y),M.fromBufferAttribute(W,B),U.sub(Y),G.sub(Y),q.sub(E),M.sub(E);let D=1/(q.x*M.y-M.x*q.y);if(!isFinite(D))return;O.copy(U).multiplyScalar(M.y).addScaledVector(G,-q.y).multiplyScalar(D),F.copy(G).multiplyScalar(q.x).addScaledVector(U,-M.x).multiplyScalar(D),X[S].add(O),X[y].add(O),X[B].add(O),H[S].add(F),H[y].add(F),H[B].add(F)}let R=this.groups;if(R.length===0)R=[{start:0,count:$.count}];for(let S=0,y=R.length;S<y;++S){let B=R[S],D=B.start,C=B.count;for(let T=D,P=D+C;T<P;T+=3)N($.getX(T+0),$.getX(T+1),$.getX(T+2))}let V=new g,L=new g,k=new g,A=new g;function I(S){k.fromBufferAttribute(Z,S),A.copy(k);let y=X[S];V.copy(y),V.sub(k.multiplyScalar(k.dot(y))).normalize(),L.crossVectors(A,y);let D=L.dot(H[S])<0?-1:1;K.setXYZW(S,V.x,V.y,V.z,D)}for(let S=0,y=R.length;S<y;++S){let B=R[S],D=B.start,C=B.count;for(let T=D,P=D+C;T<P;T+=3)I($.getX(T+0)),I($.getX(T+1)),I($.getX(T+2))}}computeVertexNormals(){let $=this.index,J=this.getAttribute("position");if(J!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new H1(new Float32Array(J.count*3),3),this.setAttribute("normal",Q);else for(let E=0,q=Q.count;E<q;E++)Q.setXYZ(E,0,0,0);let Z=new g,W=new g,K=new g,X=new g,H=new g,Y=new g,U=new g,G=new g;if($)for(let E=0,q=$.count;E<q;E+=3){let M=$.getX(E+0),O=$.getX(E+1),F=$.getX(E+2);Z.fromBufferAttribute(J,M),W.fromBufferAttribute(J,O),K.fromBufferAttribute(J,F),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),X.fromBufferAttribute(Q,M),H.fromBufferAttribute(Q,O),Y.fromBufferAttribute(Q,F),X.add(U),H.add(U),Y.add(U),Q.setXYZ(M,X.x,X.y,X.z),Q.setXYZ(O,H.x,H.y,H.z),Q.setXYZ(F,Y.x,Y.y,Y.z)}else for(let E=0,q=J.count;E<q;E+=3)Z.fromBufferAttribute(J,E+0),W.fromBufferAttribute(J,E+1),K.fromBufferAttribute(J,E+2),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),Q.setXYZ(E+0,U.x,U.y,U.z),Q.setXYZ(E+1,U.x,U.y,U.z),Q.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let $=this.attributes.normal;for(let J=0,Q=$.count;J<Q;J++)P1.fromBufferAttribute($,J),P1.normalize(),$.setXYZ(J,P1.x,P1.y,P1.z)}toNonIndexed(){function $(X,H){let{array:Y,itemSize:U,normalized:G}=X,E=new Y.constructor(H.length*U),q=0,M=0;for(let O=0,F=H.length;O<F;O++){if(X.isInterleavedBufferAttribute)q=H[O]*X.data.stride+X.offset;else q=H[O]*U;for(let N=0;N<U;N++)E[M++]=Y[q++]}return new H1(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let J=new x1,Q=this.index.array,Z=this.attributes;for(let X in Z){let H=Z[X],Y=$(H,Q);J.setAttribute(X,Y)}let W=this.morphAttributes;for(let X in W){let H=[],Y=W[X];for(let U=0,G=Y.length;U<G;U++){let E=Y[U],q=$(E,Q);H.push(q)}J.morphAttributes[X]=H}J.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let X=0,H=K.length;X<H;X++){let Y=K[X];J.addGroup(Y.start,Y.count,Y.materialIndex)}return J}toJSON(){let $={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(Object.keys(this.userData).length>0)$.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let Y in H)if(H[Y]!==void 0)$[Y]=H[Y];return $}$.data={attributes:{}};let J=this.index;if(J!==null)$.data.index={type:J.array.constructor.name,array:Array.prototype.slice.call(J.array)};let Q=this.attributes;for(let H in Q){let Y=Q[H];$.data.attributes[H]=Y.toJSON($.data)}let Z={},W=!1;for(let H in this.morphAttributes){let Y=this.morphAttributes[H],U=[];for(let G=0,E=Y.length;G<E;G++){let q=Y[G];U.push(q.toJSON($.data))}if(U.length>0)Z[H]=U,W=!0}if(W)$.data.morphAttributes=Z,$.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)$.data.groups=JSON.parse(JSON.stringify(K));let X=this.boundingSphere;if(X!==null)$.data.boundingSphere=X.toJSON();return $}clone(){return new this.constructor().copy(this)}copy($){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let J={};this.name=$.name;let Q=$.index;if(Q!==null)this.setIndex(Q.clone());let Z=$.attributes;for(let Y in Z){let U=Z[Y];this.setAttribute(Y,U.clone(J))}let W=$.morphAttributes;for(let Y in W){let U=[],G=W[Y];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(J));this.morphAttributes[Y]=U}this.morphTargetsRelative=$.morphTargetsRelative;let K=$.groups;for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];this.addGroup(G.start,G.count,G.materialIndex)}let X=$.boundingBox;if(X!==null)this.boundingBox=X.clone();let H=$.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=$.drawRange.start,this.drawRange.count=$.drawRange.count,this.userData=$.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var x5=new g0,I7=new D6,r9=new r1,g5=new g,t9=new g,e9=new g,$$=new g,eJ=new g,J$=new g,p5=new g,Q$=new g;class A1 extends E1{constructor($=new x1,J=new I8){super();this.isMesh=!0,this.type="Mesh",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy($,J){if(super.copy($,J),$.morphTargetInfluences!==void 0)this.morphTargetInfluences=$.morphTargetInfluences.slice();if($.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},$.morphTargetDictionary);return this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition($,J){let Q=this.geometry,Z=Q.attributes.position,W=Q.morphAttributes.position,K=Q.morphTargetsRelative;J.fromBufferAttribute(Z,$);let X=this.morphTargetInfluences;if(W&&X){J$.set(0,0,0);for(let H=0,Y=W.length;H<Y;H++){let U=X[H],G=W[H];if(U===0)continue;if(eJ.fromBufferAttribute(G,$),K)J$.addScaledVector(eJ,U);else J$.addScaledVector(eJ.sub(J),U)}J.add(J$)}return J}raycast($,J){let Q=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(r9.copy(Q.boundingSphere),r9.applyMatrix4(W),I7.copy($.ray).recast($.near),r9.containsPoint(I7.origin)===!1){if(I7.intersectSphere(r9,g5)===null)return;if(I7.origin.distanceToSquared(g5)>($.far-$.near)**2)return}if(x5.copy(W).invert(),I7.copy($.ray).applyMatrix4(x5),Q.boundingBox!==null){if(I7.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections($,J,I7)}_computeIntersections($,J,Q){let Z,W=this.geometry,K=this.material,X=W.index,H=W.attributes.position,Y=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(X!==null)if(Array.isArray(K))for(let M=0,O=E.length;M<O;M++){let F=E[M],N=K[F.materialIndex],R=Math.max(F.start,q.start),V=Math.min(X.count,Math.min(F.start+F.count,q.start+q.count));for(let L=R,k=V;L<k;L+=3){let A=X.getX(L),I=X.getX(L+1),S=X.getX(L+2);if(Z=Z$(this,N,$,Q,Y,U,G,A,I,S),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=F.materialIndex,J.push(Z)}}else{let M=Math.max(0,q.start),O=Math.min(X.count,q.start+q.count);for(let F=M,N=O;F<N;F+=3){let R=X.getX(F),V=X.getX(F+1),L=X.getX(F+2);if(Z=Z$(this,K,$,Q,Y,U,G,R,V,L),Z)Z.faceIndex=Math.floor(F/3),J.push(Z)}}else if(H!==void 0)if(Array.isArray(K))for(let M=0,O=E.length;M<O;M++){let F=E[M],N=K[F.materialIndex],R=Math.max(F.start,q.start),V=Math.min(H.count,Math.min(F.start+F.count,q.start+q.count));for(let L=R,k=V;L<k;L+=3){let A=L,I=L+1,S=L+2;if(Z=Z$(this,N,$,Q,Y,U,G,A,I,S),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=F.materialIndex,J.push(Z)}}else{let M=Math.max(0,q.start),O=Math.min(H.count,q.start+q.count);for(let F=M,N=O;F<N;F+=3){let R=F,V=F+1,L=F+2;if(Z=Z$(this,K,$,Q,Y,U,G,R,V,L),Z)Z.faceIndex=Math.floor(F/3),J.push(Z)}}}}function HU($,J,Q,Z,W,K,X,H){let Y;if(J.side===1)Y=Z.intersectTriangle(X,K,W,!0,H);else Y=Z.intersectTriangle(W,K,X,J.side===0,H);if(Y===null)return null;Q$.copy(H),Q$.applyMatrix4($.matrixWorld);let U=Q.ray.origin.distanceTo(Q$);if(U<Q.near||U>Q.far)return null;return{distance:U,point:Q$.clone(),object:$}}function Z$($,J,Q,Z,W,K,X,H,Y,U){$.getVertexPosition(H,t9),$.getVertexPosition(Y,e9),$.getVertexPosition(U,$$);let G=HU($,J,Q,Z,t9,e9,$$,p5);if(G){let E=new g;if(W8.getBarycoord(p5,t9,e9,$$,E),W)G.uv=W8.getInterpolatedAttribute(W,H,Y,U,E,new u0);if(K)G.uv1=W8.getInterpolatedAttribute(K,H,Y,U,E,new u0);if(X){if(G.normal=W8.getInterpolatedAttribute(X,H,Y,U,E,new g),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:H,b:Y,c:U,normal:new g,materialIndex:0};W8.getNormal(t9,e9,$$,q.normal),G.face=q,G.barycoord=E}return G}class _6 extends x1{constructor($=1,J=1,Q=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:$,height:J,depth:Q,widthSegments:Z,heightSegments:W,depthSegments:K};let X=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let H=[],Y=[],U=[],G=[],E=0,q=0;M("z","y","x",-1,-1,Q,J,$,K,W,0),M("z","y","x",1,-1,Q,J,-$,K,W,1),M("x","z","y",1,1,$,Q,J,Z,K,2),M("x","z","y",1,-1,$,Q,-J,Z,K,3),M("x","y","z",1,-1,$,J,Q,Z,W,4),M("x","y","z",-1,-1,$,J,-Q,Z,W,5),this.setIndex(H),this.setAttribute("position",new X8(Y,3)),this.setAttribute("normal",new X8(U,3)),this.setAttribute("uv",new X8(G,2));function M(O,F,N,R,V,L,k,A,I,S,y){let B=L/I,D=k/S,C=L/2,T=k/2,P=A/2,f=I+1,h=S+1,b=0,l=0,x=new g;for(let s=0;s<h;s++){let t=s*D-T;for(let X0=0;X0<f;X0++){let G0=X0*B-C;x[O]=G0*R,x[F]=t*V,x[N]=P,Y.push(x.x,x.y,x.z),x[O]=0,x[F]=0,x[N]=A>0?1:-1,U.push(x.x,x.y,x.z),G.push(X0/I),G.push(1-s/S),b+=1}}for(let s=0;s<S;s++)for(let t=0;t<I;t++){let X0=E+t+f*s,G0=E+t+f*(s+1),B0=E+(t+1)+f*(s+1),R0=E+(t+1)+f*s;H.push(X0,G0,R0),H.push(G0,B0,R0),l+=6}X.addGroup(q,l,y),q+=l,E+=b}}copy($){return super.copy($),this.parameters=Object.assign({},$.parameters),this}static fromJSON($){return new _6($.width,$.height,$.depth,$.widthSegments,$.heightSegments,$.depthSegments)}}function f7($){let J={};for(let Q in $){J[Q]={};for(let Z in $[Q]){let W=$[Q][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),J[Q][Z]=null;else J[Q][Z]=W.clone();else if(Array.isArray(W))J[Q][Z]=W.slice();else J[Q][Z]=W}}return J}function f1($){let J={};for(let Q=0;Q<$.length;Q++){let Z=f7($[Q]);for(let W in Z)J[W]=Z[W]}return J}function YU($){let J=[];for(let Q=0;Q<$.length;Q++)J.push($[Q].clone());return J}function WZ($){let J=$.getRenderTarget();if(J===null)return $.outputColorSpace;if(J.isXRRenderTarget===!0)return J.texture.colorSpace;return o0.workingColorSpace}var YK={clone:f7,merge:f1},UU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class u1 extends t1{constructor($){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UU,this.fragmentShader=GU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,$!==void 0)this.setValues($)}copy($){return super.copy($),this.fragmentShader=$.fragmentShader,this.vertexShader=$.vertexShader,this.uniforms=f7($.uniforms),this.uniformsGroups=YU($.uniformsGroups),this.defines=Object.assign({},$.defines),this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.fog=$.fog,this.lights=$.lights,this.clipping=$.clipping,this.extensions=Object.assign({},$.extensions),this.glslVersion=$.glslVersion,this}toJSON($){let J=super.toJSON($);J.glslVersion=this.glslVersion,J.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)J.uniforms[Z]={type:"t",value:K.toJSON($).uuid};else if(K&&K.isColor)J.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)J.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)J.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)J.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)J.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)J.uniforms[Z]={type:"m4",value:K.toArray()};else J.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)J.defines=this.defines;J.vertexShader=this.vertexShader,J.fragmentShader=this.fragmentShader,J.lights=this.lights,J.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)J.extensions=Q;return J}}class V6 extends E1{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new g0,this.projectionMatrix=new g0,this.projectionMatrixInverse=new g0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy($,J){return super.copy($,J),this.matrixWorldInverse.copy($.matrixWorldInverse),this.projectionMatrix.copy($.projectionMatrix),this.projectionMatrixInverse.copy($.projectionMatrixInverse),this.coordinateSystem=$.coordinateSystem,this}getWorldDirection($){return super.getWorldDirection($).negate()}updateMatrixWorld($){super.updateMatrixWorld($),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix($,J){super.updateWorldMatrix($,J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var J7=new g,l5=new u0,u5=new u0;class T1 extends V6{constructor($=50,J=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=$,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=J,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy($,J){return super.copy($,J),this.fov=$.fov,this.zoom=$.zoom,this.near=$.near,this.far=$.far,this.focus=$.focus,this.aspect=$.aspect,this.view=$.view===null?null:Object.assign({},$.view),this.filmGauge=$.filmGauge,this.filmOffset=$.filmOffset,this}setFocalLength($){let J=0.5*this.getFilmHeight()/$;this.fov=A7*2*Math.atan(J),this.updateProjectionMatrix()}getFocalLength(){let $=Math.tan(r6*0.5*this.fov);return 0.5*this.getFilmHeight()/$}getEffectiveFOV(){return A7*2*Math.atan(Math.tan(r6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds($,J,Q){J7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),J.set(J7.x,J7.y).multiplyScalar(-$/J7.z),J7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(J7.x,J7.y).multiplyScalar(-$/J7.z)}getViewSize($,J){return this.getViewBounds($,l5,u5),J.subVectors(u5,l5)}setViewOffset($,J,Q,Z,W,K){if(this.aspect=$/J,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=$,this.view.fullHeight=J,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let $=this.near,J=$*Math.tan(r6*0.5*this.fov)/this.zoom,Q=2*J,Z=this.aspect*Q,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:Y}=K;W+=K.offsetX*Z/H,J-=K.offsetY*Q/Y,Z*=K.width/H,Q*=K.height/Y}let X=this.filmOffset;if(X!==0)W+=$*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,J,J-Q,$,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON($){let J=super.toJSON($);if(J.object.fov=this.fov,J.object.zoom=this.zoom,J.object.near=this.near,J.object.far=this.far,J.object.focus=this.focus,J.object.aspect=this.aspect,this.view!==null)J.object.view=Object.assign({},this.view);return J.object.filmGauge=this.filmGauge,J.object.filmOffset=this.filmOffset,J}}var K6=-90,X6=1;class KZ extends E1{constructor($,J,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new T1(K6,X6,$,J);Z.layers=this.layers,this.add(Z);let W=new T1(K6,X6,$,J);W.layers=this.layers,this.add(W);let K=new T1(K6,X6,$,J);K.layers=this.layers,this.add(K);let X=new T1(K6,X6,$,J);X.layers=this.layers,this.add(X);let H=new T1(K6,X6,$,J);H.layers=this.layers,this.add(H);let Y=new T1(K6,X6,$,J);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){let $=this.coordinateSystem,J=this.children.concat(),[Q,Z,W,K,X,H]=J;for(let Y of J)this.remove(Y);if($===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if($===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+$);for(let Y of J)this.add(Y),Y.updateMatrixWorld()}update($,J){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==$.coordinateSystem)this.coordinateSystem=$.coordinateSystem,this.updateCoordinateSystem();let[W,K,X,H,Y,U]=this.children,G=$.getRenderTarget(),E=$.getActiveCubeFace(),q=$.getActiveMipmapLevel(),M=$.xr.enabled;$.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,$.setRenderTarget(Q,0,Z),$.render(J,W),$.setRenderTarget(Q,1,Z),$.render(J,K),$.setRenderTarget(Q,2,Z),$.render(J,X),$.setRenderTarget(Q,3,Z),$.render(J,H),$.setRenderTarget(Q,4,Z),$.render(J,Y),Q.texture.generateMipmaps=O,$.setRenderTarget(Q,5,Z),$.render(J,U),$.setRenderTarget(G,E,q),$.xr.enabled=M,Q.texture.needsPMREMUpdate=!0}}class b$ extends L1{constructor($=[],J=301,Q,Z,W,K,X,H,Y,U){super($,J,Q,Z,W,K,X,H,Y,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images($){this.image=$}}class XZ extends O8{constructor($=1,J={}){super($,$,J);this.isWebGLCubeRenderTarget=!0;let Q={width:$,height:$,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new b$(Z),this._setTextureOptions(J),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture($,J){this.texture.type=J.type,this.texture.colorSpace=J.colorSpace,this.texture.generateMipmaps=J.generateMipmaps,this.texture.minFilter=J.minFilter,this.texture.magFilter=J.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new _6(5,5,5),W=new u1({name:"CubemapFromEquirect",uniforms:f7(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=J;let K=new A1(Z,W),X=J.minFilter;if(J.minFilter===1008)J.minFilter=1006;return new KZ(1,10,this).update($,K),J.minFilter=X,K.geometry.dispose(),K.material.dispose(),this}clear($,J=!0,Q=!0,Z=!0){let W=$.getRenderTarget();for(let K=0;K<6;K++)$.setRenderTarget(this,K),$.clear(J,Q,Z);$.setRenderTarget(W)}}class K8 extends E1{constructor(){super();this.isGroup=!0,this.type="Group"}}var EU={type:"move"};class H9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new K8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new K8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new g,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new g;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new K8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new g,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new g;return this._grip}dispatchEvent($){if(this._targetRay!==null)this._targetRay.dispatchEvent($);if(this._grip!==null)this._grip.dispatchEvent($);if(this._hand!==null)this._hand.dispatchEvent($);return this}connect($){if($&&$.hand){let J=this._hand;if(J)for(let Q of $.hand.values())this._getHandJoint(J,Q)}return this.dispatchEvent({type:"connected",data:$}),this}disconnect($){if(this.dispatchEvent({type:"disconnected",data:$}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update($,J,Q){let Z=null,W=null,K=null,X=this._targetRay,H=this._grip,Y=this._hand;if($&&J.session.visibilityState!=="visible-blurred"){if(Y&&$.hand){K=!0;for(let O of $.hand.values()){let F=J.getJointPose(O,Q),N=this._getHandJoint(Y,O);if(F!==null)N.matrix.fromArray(F.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=F.radius;N.visible=F!==null}let U=Y.joints["index-finger-tip"],G=Y.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,M=0.005;if(Y.inputState.pinching&&E>q+M)Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:$.handedness,target:this});else if(!Y.inputState.pinching&&E<=q-M)Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:$.handedness,target:this})}else if(H!==null&&$.gripSpace){if(W=J.getPose($.gripSpace,Q),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(X!==null){if(Z=J.getPose($.targetRaySpace,Q),Z===null&&W!==null)Z=W;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(EU)}}}if(X!==null)X.visible=Z!==null;if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=K!==null;return this}_getHandJoint($,J){if($.joints[J.jointName]===void 0){let Q=new K8;Q.matrixAutoUpdate=!1,Q.visible=!1,$.joints[J.jointName]=Q,$.add(Q)}return $.joints[J.jointName]}}class B6 extends E1{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new M8,this.environmentIntensity=1,this.environmentRotation=new M8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy($,J){if(super.copy($,J),$.background!==null)this.background=$.background.clone();if($.environment!==null)this.environment=$.environment.clone();if($.fog!==null)this.fog=$.fog.clone();if(this.backgroundBlurriness=$.backgroundBlurriness,this.backgroundIntensity=$.backgroundIntensity,this.backgroundRotation.copy($.backgroundRotation),this.environmentIntensity=$.environmentIntensity,this.environmentRotation.copy($.environmentRotation),$.overrideMaterial!==null)this.overrideMaterial=$.overrideMaterial.clone();return this.matrixAutoUpdate=$.matrixAutoUpdate,this}toJSON($){let J=super.toJSON($);if(this.fog!==null)J.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)J.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)J.object.backgroundIntensity=this.backgroundIntensity;if(J.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)J.object.environmentIntensity=this.environmentIntensity;return J.object.environmentRotation=this.environmentRotation.toArray(),J}}class Y9{constructor($,J){this.isInterleavedBuffer=!0,this.array=$,this.stride=J,this.count=$!==void 0?$.length/J:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=R8()}onUploadCallback(){}set needsUpdate($){if($===!0)this.version++}setUsage($){return this.usage=$,this}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}copy($){return this.array=new $.array.constructor($.array),this.count=$.count,this.stride=$.stride,this.usage=$.usage,this}copyAt($,J,Q){$*=this.stride,Q*=J.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[$+Z]=J.array[Q+Z];return this}set($,J=0){return this.array.set($,J),this}clone($){if($.arrayBuffers===void 0)$.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=R8();if($.arrayBuffers[this.array.buffer._uuid]===void 0)$.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let J=new this.array.constructor($.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor(J,this.stride);return Q.setUsage(this.usage),Q}onUpload($){return this.onUploadCallback=$,this}toJSON($){if($.arrayBuffers===void 0)$.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=R8();if($.arrayBuffers[this.array.buffer._uuid]===void 0)$.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var b1=new g;class z6{constructor($,J,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=$,this.itemSize=J,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate($){this.data.needsUpdate=$}applyMatrix4($){for(let J=0,Q=this.data.count;J<Q;J++)b1.fromBufferAttribute(this,J),b1.applyMatrix4($),this.setXYZ(J,b1.x,b1.y,b1.z);return this}applyNormalMatrix($){for(let J=0,Q=this.count;J<Q;J++)b1.fromBufferAttribute(this,J),b1.applyNormalMatrix($),this.setXYZ(J,b1.x,b1.y,b1.z);return this}transformDirection($){for(let J=0,Q=this.count;J<Q;J++)b1.fromBufferAttribute(this,J),b1.transformDirection($),this.setXYZ(J,b1.x,b1.y,b1.z);return this}getComponent($,J){let Q=this.array[$*this.data.stride+this.offset+J];if(this.normalized)Q=N8(Q,this.array);return Q}setComponent($,J,Q){if(this.normalized)Q=$1(Q,this.array);return this.data.array[$*this.data.stride+this.offset+J]=Q,this}setX($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset]=J,this}setY($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+1]=J,this}setZ($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+2]=J,this}setW($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+3]=J,this}getX($){let J=this.data.array[$*this.data.stride+this.offset];if(this.normalized)J=N8(J,this.array);return J}getY($){let J=this.data.array[$*this.data.stride+this.offset+1];if(this.normalized)J=N8(J,this.array);return J}getZ($){let J=this.data.array[$*this.data.stride+this.offset+2];if(this.normalized)J=N8(J,this.array);return J}getW($){let J=this.data.array[$*this.data.stride+this.offset+3];if(this.normalized)J=N8(J,this.array);return J}setXY($,J,Q){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this}setXYZ($,J,Q,Z){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this.data.array[$+2]=Z,this}setXYZW($,J,Q,Z,W){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array),W=$1(W,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this.data.array[$+2]=Z,this.data.array[$+3]=W,this}clone($){if($===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let J=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)J.push(this.data.array[Z+W])}return new H1(new this.array.constructor(J),this.itemSize,this.normalized)}else{if($.interleavedBuffers===void 0)$.interleavedBuffers={};if($.interleavedBuffers[this.data.uuid]===void 0)$.interleavedBuffers[this.data.uuid]=this.data.clone($);return new z6($.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON($){if($===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let J=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)J.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:J,normalized:this.normalized}}else{if($.interleavedBuffers===void 0)$.interleavedBuffers={};if($.interleavedBuffers[this.data.uuid]===void 0)$.interleavedBuffers[this.data.uuid]=this.data.toJSON($);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var m5=new g,d5=new i0,c5=new i0,qU=new g,n5=new g0,W$=new g,$Q=new r1,s5=new g0,JQ=new D6;class h$ extends A1{constructor($,J){super($,J);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new g0,this.bindMatrixInverse=new g0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let $=this.geometry;if(this.boundingBox===null)this.boundingBox=new l1;this.boundingBox.makeEmpty();let J=$.getAttribute("position");for(let Q=0;Q<J.count;Q++)this.getVertexPosition(Q,W$),this.boundingBox.expandByPoint(W$)}computeBoundingSphere(){let $=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new r1;this.boundingSphere.makeEmpty();let J=$.getAttribute("position");for(let Q=0;Q<J.count;Q++)this.getVertexPosition(Q,W$),this.boundingSphere.expandByPoint(W$)}copy($,J){if(super.copy($,J),this.bindMode=$.bindMode,this.bindMatrix.copy($.bindMatrix),this.bindMatrixInverse.copy($.bindMatrixInverse),this.skeleton=$.skeleton,$.boundingBox!==null)this.boundingBox=$.boundingBox.clone();if($.boundingSphere!==null)this.boundingSphere=$.boundingSphere.clone();return this}raycast($,J){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if($Q.copy(this.boundingSphere),$Q.applyMatrix4(Z),$.ray.intersectsSphere($Q)===!1)return;if(s5.copy(Z).invert(),JQ.copy($.ray).applyMatrix4(s5),this.boundingBox!==null){if(JQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections($,J,JQ)}getVertexPosition($,J){return super.getVertexPosition($,J),this.applyBoneTransform($,J),J}bind($,J){if(this.skeleton=$,J===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),J=this.matrixWorld;this.bindMatrix.copy(J),this.bindMatrixInverse.copy(J).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let $=new i0,J=this.geometry.attributes.skinWeight;for(let Q=0,Z=J.count;Q<Z;Q++){$.fromBufferAttribute(J,Q);let W=1/$.manhattanLength();if(W!==1/0)$.multiplyScalar(W);else $.set(1,0,0,0);J.setXYZW(Q,$.x,$.y,$.z,$.w)}}updateMatrixWorld($){if(super.updateMatrixWorld($),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform($,J){let Q=this.skeleton,Z=this.geometry;d5.fromBufferAttribute(Z.attributes.skinIndex,$),c5.fromBufferAttribute(Z.attributes.skinWeight,$),m5.copy(J).applyMatrix4(this.bindMatrix),J.set(0,0,0);for(let W=0;W<4;W++){let K=c5.getComponent(W);if(K!==0){let X=d5.getComponent(W);n5.multiplyMatrices(Q.bones[X].matrixWorld,Q.boneInverses[X]),J.addScaledVector(qU.copy(m5).applyMatrix4(n5),K)}}return J.applyMatrix4(this.bindMatrixInverse)}}class U9 extends E1{constructor(){super();this.isBone=!0,this.type="Bone"}}class x$ extends L1{constructor($=null,J=1,Q=1,Z,W,K,X,H,Y=1003,U=1003,G,E){super(null,K,X,H,Y,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:$,width:J,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var o5=new g0,NU=new g0;class G9{constructor($=[],J=[]){this.uuid=R8(),this.bones=$.slice(0),this.boneInverses=J,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let $=this.bones,J=this.boneInverses;if(this.boneMatrices=new Float32Array($.length*16),J.length===0)this.calculateInverses();else if($.length!==J.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new g0)}}calculateInverses(){this.boneInverses.length=0;for(let $=0,J=this.bones.length;$<J;$++){let Q=new g0;if(this.bones[$])Q.copy(this.bones[$].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let $=0,J=this.bones.length;$<J;$++){let Q=this.bones[$];if(Q)Q.matrixWorld.copy(this.boneInverses[$]).invert()}for(let $=0,J=this.bones.length;$<J;$++){let Q=this.bones[$];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let $=this.bones,J=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let W=0,K=$.length;W<K;W++){let X=$[W]?$[W].matrixWorld:NU;o5.multiplyMatrices(X,J[W]),o5.toArray(Q,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new G9(this.bones,this.boneInverses)}computeBoneTexture(){let $=Math.sqrt(this.bones.length*4);$=Math.ceil($/4)*4,$=Math.max($,4);let J=new Float32Array($*$*4);J.set(this.boneMatrices);let Q=new x$(J,$,$,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=J,this.boneTexture=Q,this}getBoneByName($){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z.name===$)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON($,J){this.uuid=$.uuid;for(let Q=0,Z=$.bones.length;Q<Z;Q++){let W=$.bones[Q],K=J[W];if(K===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),K=new U9;this.bones.push(K),this.boneInverses.push(new g0().fromArray($.boneInverses[Q]))}return this.init(),this}toJSON(){let $={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};$.uuid=this.uuid;let J=this.bones,Q=this.boneInverses;for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.bones.push(K.uuid);let X=Q[Z];$.boneInverses.push(X.toArray())}return $}}class T7 extends H1{constructor($,J,Q,Z=1){super($,J,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy($){return super.copy($),this.meshPerAttribute=$.meshPerAttribute,this}toJSON(){let $=super.toJSON();return $.meshPerAttribute=this.meshPerAttribute,$.isInstancedBufferAttribute=!0,$}}var H6=new g0,i5=new g0,K$=[],a5=new l1,RU=new g0,s6=new A1,o6=new r1;class g$ extends A1{constructor($,J,Q){super($,J);this.isInstancedMesh=!0,this.instanceMatrix=new T7(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,RU)}computeBoundingBox(){let $=this.geometry,J=this.count;if(this.boundingBox===null)this.boundingBox=new l1;if($.boundingBox===null)$.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<J;Q++)this.getMatrixAt(Q,H6),a5.copy($.boundingBox).applyMatrix4(H6),this.boundingBox.union(a5)}computeBoundingSphere(){let $=this.geometry,J=this.count;if(this.boundingSphere===null)this.boundingSphere=new r1;if($.boundingSphere===null)$.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<J;Q++)this.getMatrixAt(Q,H6),o6.copy($.boundingSphere).applyMatrix4(H6),this.boundingSphere.union(o6)}copy($,J){if(super.copy($,J),this.instanceMatrix.copy($.instanceMatrix),$.morphTexture!==null)this.morphTexture=$.morphTexture.clone();if($.instanceColor!==null)this.instanceColor=$.instanceColor.clone();if(this.count=$.count,$.boundingBox!==null)this.boundingBox=$.boundingBox.clone();if($.boundingSphere!==null)this.boundingSphere=$.boundingSphere.clone();return this}getColorAt($,J){J.fromArray(this.instanceColor.array,$*3)}getMatrixAt($,J){J.fromArray(this.instanceMatrix.array,$*16)}getMorphAt($,J){let Q=J.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=Q.length+1,K=$*W+1;for(let X=0;X<Q.length;X++)Q[X]=Z[K+X]}raycast($,J){let Q=this.matrixWorld,Z=this.count;if(s6.geometry=this.geometry,s6.material=this.material,s6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(o6.copy(this.boundingSphere),o6.applyMatrix4(Q),$.ray.intersectsSphere(o6)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,H6),i5.multiplyMatrices(Q,H6),s6.matrixWorld=i5,s6.raycast($,K$);for(let K=0,X=K$.length;K<X;K++){let H=K$[K];H.instanceId=W,H.object=this,J.push(H)}K$.length=0}}setColorAt($,J){if(this.instanceColor===null)this.instanceColor=new T7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);J.toArray(this.instanceColor.array,$*3)}setMatrixAt($,J){J.toArray(this.instanceMatrix.array,$*16)}setMorphAt($,J){let Q=J.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new x$(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let Y=0;Y<Q.length;Y++)K+=Q[Y];let X=this.geometry.morphTargetsRelative?1:1-K,H=Z*$;W[H]=X,W.set(Q,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var QQ=new g,MU=new g,FU=new p0;class h8{constructor($=new g(1,0,0),J=0){this.isPlane=!0,this.normal=$,this.constant=J}set($,J){return this.normal.copy($),this.constant=J,this}setComponents($,J,Q,Z){return this.normal.set($,J,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint($,J){return this.normal.copy($),this.constant=-J.dot(this.normal),this}setFromCoplanarPoints($,J,Q){let Z=QQ.subVectors(Q,J).cross(MU.subVectors($,J)).normalize();return this.setFromNormalAndCoplanarPoint(Z,$),this}copy($){return this.normal.copy($.normal),this.constant=$.constant,this}normalize(){let $=1/this.normal.length();return this.normal.multiplyScalar($),this.constant*=$,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint($){return this.normal.dot($)+this.constant}distanceToSphere($){return this.distanceToPoint($.center)-$.radius}projectPoint($,J){return J.copy($).addScaledVector(this.normal,-this.distanceToPoint($))}intersectLine($,J){let Q=$.delta(QQ),Z=this.normal.dot(Q);if(Z===0){if(this.distanceToPoint($.start)===0)return J.copy($.start);return null}let W=-($.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return J.copy($.start).addScaledVector(Q,W)}intersectsLine($){let J=this.distanceToPoint($.start),Q=this.distanceToPoint($.end);return J<0&&Q>0||Q<0&&J>0}intersectsBox($){return $.intersectsPlane(this)}intersectsSphere($){return $.intersectsPlane(this)}coplanarPoint($){return $.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4($,J){let Q=J||FU.getNormalMatrix($),Z=this.coplanarPoint(QQ).applyMatrix4($),W=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(W),this}translate($){return this.constant-=$.dot(this.normal),this}equals($){return $.normal.equals(this.normal)&&$.constant===this.constant}clone(){return new this.constructor().copy(this)}}var P7=new r1,OU=new u0(0.5,0.5),X$=new g;class E9{constructor($=new h8,J=new h8,Q=new h8,Z=new h8,W=new h8,K=new h8){this.planes=[$,J,Q,Z,W,K]}set($,J,Q,Z,W,K){let X=this.planes;return X[0].copy($),X[1].copy(J),X[2].copy(Q),X[3].copy(Z),X[4].copy(W),X[5].copy(K),this}copy($){let J=this.planes;for(let Q=0;Q<6;Q++)J[Q].copy($.planes[Q]);return this}setFromProjectionMatrix($,J=2000,Q=!1){let Z=this.planes,W=$.elements,K=W[0],X=W[1],H=W[2],Y=W[3],U=W[4],G=W[5],E=W[6],q=W[7],M=W[8],O=W[9],F=W[10],N=W[11],R=W[12],V=W[13],L=W[14],k=W[15];if(Z[0].setComponents(Y-K,q-U,N-M,k-R).normalize(),Z[1].setComponents(Y+K,q+U,N+M,k+R).normalize(),Z[2].setComponents(Y+X,q+G,N+O,k+V).normalize(),Z[3].setComponents(Y-X,q-G,N-O,k-V).normalize(),Q)Z[4].setComponents(H,E,F,L).normalize(),Z[5].setComponents(Y-H,q-E,N-F,k-L).normalize();else if(Z[4].setComponents(Y-H,q-E,N-F,k-L).normalize(),J===2000)Z[5].setComponents(Y+H,q+E,N+F,k+L).normalize();else if(J===2001)Z[5].setComponents(H,E,F,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+J);return this}intersectsObject($){if($.boundingSphere!==void 0){if($.boundingSphere===null)$.computeBoundingSphere();P7.copy($.boundingSphere).applyMatrix4($.matrixWorld)}else{let J=$.geometry;if(J.boundingSphere===null)J.computeBoundingSphere();P7.copy(J.boundingSphere).applyMatrix4($.matrixWorld)}return this.intersectsSphere(P7)}intersectsSprite($){P7.center.set(0,0,0);let J=OU.distanceTo($.center);return P7.radius=0.7071067811865476+J,P7.applyMatrix4($.matrixWorld),this.intersectsSphere(P7)}intersectsSphere($){let J=this.planes,Q=$.center,Z=-$.radius;for(let W=0;W<6;W++)if(J[W].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox($){let J=this.planes;for(let Q=0;Q<6;Q++){let Z=J[Q];if(X$.x=Z.normal.x>0?$.max.x:$.min.x,X$.y=Z.normal.y>0?$.max.y:$.min.y,X$.z=Z.normal.z>0?$.max.z:$.min.z,Z.distanceToPoint(X$)<0)return!1}return!0}containsPoint($){let J=this.planes;for(let Q=0;Q<6;Q++)if(J[Q].distanceToPoint($)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q9 extends t1{constructor($){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.linewidth=$.linewidth,this.linecap=$.linecap,this.linejoin=$.linejoin,this.fog=$.fog,this}}var q$=new g,N$=new g,r5=new g0,i6=new D6,H$=new r1,ZQ=new g,t5=new g;class k6 extends E1{constructor($=new x1,J=new q9){super();this.isLine=!0,this.type="Line",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy($,J){return super.copy($,J),this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}computeLineDistances(){let $=this.geometry;if($.index===null){let J=$.attributes.position,Q=[0];for(let Z=1,W=J.count;Z<W;Z++)q$.fromBufferAttribute(J,Z-1),N$.fromBufferAttribute(J,Z),Q[Z]=Q[Z-1],Q[Z]+=q$.distanceTo(N$);$.setAttribute("lineDistance",new X8(Q,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast($,J){let Q=this.geometry,Z=this.matrixWorld,W=$.params.Line.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(H$.copy(Q.boundingSphere),H$.applyMatrix4(Z),H$.radius+=W,$.ray.intersectsSphere(H$)===!1)return;r5.copy(Z).invert(),i6.copy($.ray).applyMatrix4(r5);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,Y=this.isLineSegments?2:1,U=Q.index,E=Q.attributes.position;if(U!==null){let q=Math.max(0,K.start),M=Math.min(U.count,K.start+K.count);for(let O=q,F=M-1;O<F;O+=Y){let N=U.getX(O),R=U.getX(O+1),V=Y$(this,$,i6,H,N,R,O);if(V)J.push(V)}if(this.isLineLoop){let O=U.getX(M-1),F=U.getX(q),N=Y$(this,$,i6,H,O,F,M-1);if(N)J.push(N)}}else{let q=Math.max(0,K.start),M=Math.min(E.count,K.start+K.count);for(let O=q,F=M-1;O<F;O+=Y){let N=Y$(this,$,i6,H,O,O+1,O);if(N)J.push(N)}if(this.isLineLoop){let O=Y$(this,$,i6,H,M-1,q,M-1);if(O)J.push(O)}}}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function Y$($,J,Q,Z,W,K,X){let H=$.geometry.attributes.position;if(q$.fromBufferAttribute(H,W),N$.fromBufferAttribute(H,K),Q.distanceSqToSegment(q$,N$,ZQ,t5)>Z)return;ZQ.applyMatrix4($.matrixWorld);let U=J.ray.origin.distanceTo(ZQ);if(U<J.near||U>J.far)return;return{distance:U,point:t5.clone().applyMatrix4($.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:$}}var e5=new g,$W=new g;class p$ extends k6{constructor($,J){super($,J);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let $=this.geometry;if($.index===null){let J=$.attributes.position,Q=[];for(let Z=0,W=J.count;Z<W;Z+=2)e5.fromBufferAttribute(J,Z),$W.fromBufferAttribute(J,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+e5.distanceTo($W);$.setAttribute("lineDistance",new X8(Q,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l$ extends k6{constructor($,J){super($,J);this.isLineLoop=!0,this.type="LineLoop"}}class N9 extends t1{constructor($){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.alphaMap=$.alphaMap,this.size=$.size,this.sizeAttenuation=$.sizeAttenuation,this.fog=$.fog,this}}var JW=new g0,HQ=new D6,U$=new r1,G$=new g;class C6 extends E1{constructor($=new x1,J=new N9){super();this.isPoints=!0,this.type="Points",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy($,J){return super.copy($,J),this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}raycast($,J){let Q=this.geometry,Z=this.matrixWorld,W=$.params.Points.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(U$.copy(Q.boundingSphere),U$.applyMatrix4(Z),U$.radius+=W,$.ray.intersectsSphere(U$)===!1)return;JW.copy(Z).invert(),HQ.copy($.ray).applyMatrix4(JW);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,Y=Q.index,G=Q.attributes.position;if(Y!==null){let E=Math.max(0,K.start),q=Math.min(Y.count,K.start+K.count);for(let M=E,O=q;M<O;M++){let F=Y.getX(M);G$.fromBufferAttribute(G,F),QW(G$,F,H,Z,$,J,this)}}else{let E=Math.max(0,K.start),q=Math.min(G.count,K.start+K.count);for(let M=E,O=q;M<O;M++)G$.fromBufferAttribute(G,M),QW(G$,M,H,Z,$,J,this)}}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function QW($,J,Q,Z,W,K,X){let H=HQ.distanceSqToPoint($);if(H<Q){let Y=new g;HQ.closestPointToPoint($,Y),Y.applyMatrix4(Z);let U=W.ray.origin.distanceTo(Y);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(H),point:Y,index:J,face:null,faceIndex:null,barycoord:null,object:X})}}class u$ extends L1{constructor($,J,Q,Z,W,K,X,H,Y){super($,J,Q,Z,W,K,X,H,Y);this.isCanvasTexture=!0,this.needsUpdate=!0}}class m$ extends L1{constructor($,J,Q=1014,Z,W,K,X=1003,H=1003,Y,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:$,height:J,depth:G};super(E,Z,W,K,X,H,U,Q,Y);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy($){return super.copy($),this.source=new X9(Object.assign({},$.image)),this.compareFunction=$.compareFunction,this}toJSON($){let J=super.toJSON($);if(this.compareFunction!==null)J.compareFunction=this.compareFunction;return J}}class d$ extends L1{constructor($=null){super();this.sourceTexture=$,this.isExternalTexture=!0}copy($){return super.copy($),this.sourceTexture=$.sourceTexture,this}}class R9 extends x1{constructor($=1,J=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:$,height:J,widthSegments:Q,heightSegments:Z};let W=$/2,K=J/2,X=Math.floor(Q),H=Math.floor(Z),Y=X+1,U=H+1,G=$/X,E=J/H,q=[],M=[],O=[],F=[];for(let N=0;N<U;N++){let R=N*E-K;for(let V=0;V<Y;V++){let L=V*G-W;M.push(L,-R,0),O.push(0,0,1),F.push(V/X),F.push(1-N/H)}}for(let N=0;N<H;N++)for(let R=0;R<X;R++){let V=R+Y*N,L=R+Y*(N+1),k=R+1+Y*(N+1),A=R+1+Y*N;q.push(V,L,A),q.push(L,k,A)}this.setIndex(q),this.setAttribute("position",new X8(M,3)),this.setAttribute("normal",new X8(O,3)),this.setAttribute("uv",new X8(F,2))}copy($){return super.copy($),this.parameters=Object.assign({},$.parameters),this}static fromJSON($){return new R9($.width,$.height,$.widthSegments,$.heightSegments)}}class I6 extends t1{constructor($){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new u0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new M8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues($)}copy($){return super.copy($),this.defines={STANDARD:""},this.color.copy($.color),this.roughness=$.roughness,this.metalness=$.metalness,this.map=$.map,this.lightMap=$.lightMap,this.lightMapIntensity=$.lightMapIntensity,this.aoMap=$.aoMap,this.aoMapIntensity=$.aoMapIntensity,this.emissive.copy($.emissive),this.emissiveMap=$.emissiveMap,this.emissiveIntensity=$.emissiveIntensity,this.bumpMap=$.bumpMap,this.bumpScale=$.bumpScale,this.normalMap=$.normalMap,this.normalMapType=$.normalMapType,this.normalScale.copy($.normalScale),this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this.roughnessMap=$.roughnessMap,this.metalnessMap=$.metalnessMap,this.alphaMap=$.alphaMap,this.envMap=$.envMap,this.envMapRotation.copy($.envMapRotation),this.envMapIntensity=$.envMapIntensity,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.wireframeLinecap=$.wireframeLinecap,this.wireframeLinejoin=$.wireframeLinejoin,this.flatShading=$.flatShading,this.fog=$.fog,this}}class e1 extends I6{constructor($){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new u0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return c0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(J){this.ior=(1+0.4*J)/(1-0.4*J)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new y0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new y0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new y0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues($)}get anisotropy(){return this._anisotropy}set anisotropy($){if(this._anisotropy>0!==$>0)this.version++;this._anisotropy=$}get clearcoat(){return this._clearcoat}set clearcoat($){if(this._clearcoat>0!==$>0)this.version++;this._clearcoat=$}get iridescence(){return this._iridescence}set iridescence($){if(this._iridescence>0!==$>0)this.version++;this._iridescence=$}get dispersion(){return this._dispersion}set dispersion($){if(this._dispersion>0!==$>0)this.version++;this._dispersion=$}get sheen(){return this._sheen}set sheen($){if(this._sheen>0!==$>0)this.version++;this._sheen=$}get transmission(){return this._transmission}set transmission($){if(this._transmission>0!==$>0)this.version++;this._transmission=$}copy($){return super.copy($),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=$.anisotropy,this.anisotropyRotation=$.anisotropyRotation,this.anisotropyMap=$.anisotropyMap,this.clearcoat=$.clearcoat,this.clearcoatMap=$.clearcoatMap,this.clearcoatRoughness=$.clearcoatRoughness,this.clearcoatRoughnessMap=$.clearcoatRoughnessMap,this.clearcoatNormalMap=$.clearcoatNormalMap,this.clearcoatNormalScale.copy($.clearcoatNormalScale),this.dispersion=$.dispersion,this.ior=$.ior,this.iridescence=$.iridescence,this.iridescenceMap=$.iridescenceMap,this.iridescenceIOR=$.iridescenceIOR,this.iridescenceThicknessRange=[...$.iridescenceThicknessRange],this.iridescenceThicknessMap=$.iridescenceThicknessMap,this.sheen=$.sheen,this.sheenColor.copy($.sheenColor),this.sheenColorMap=$.sheenColorMap,this.sheenRoughness=$.sheenRoughness,this.sheenRoughnessMap=$.sheenRoughnessMap,this.transmission=$.transmission,this.transmissionMap=$.transmissionMap,this.thickness=$.thickness,this.thicknessMap=$.thicknessMap,this.attenuationDistance=$.attenuationDistance,this.attenuationColor.copy($.attenuationColor),this.specularIntensity=$.specularIntensity,this.specularIntensityMap=$.specularIntensityMap,this.specularColor.copy($.specularColor),this.specularColorMap=$.specularColorMap,this}}class HZ extends t1{constructor($){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues($)}copy($){return super.copy($),this.depthPacking=$.depthPacking,this.map=$.map,this.alphaMap=$.alphaMap,this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this}}class YZ extends t1{constructor($){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues($)}copy($){return super.copy($),this.map=$.map,this.alphaMap=$.alphaMap,this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this}}function E$($,J){if(!$||$.constructor===J)return $;if(typeof J.BYTES_PER_ELEMENT==="number")return new J($);return Array.prototype.slice.call($)}function LU($){return ArrayBuffer.isView($)&&!($ instanceof DataView)}function DU($){function J(W,K){return $[W]-$[K]}let Q=$.length,Z=Array(Q);for(let W=0;W!==Q;++W)Z[W]=W;return Z.sort(J),Z}function ZW($,J,Q){let Z=$.length,W=new $.constructor(Z);for(let K=0,X=0;X!==Z;++K){let H=Q[K]*J;for(let Y=0;Y!==J;++Y)W[X++]=$[H+Y]}return W}function UK($,J,Q,Z){let W=1,K=$[0];while(K!==void 0&&K[Z]===void 0)K=$[W++];if(K===void 0)return;let X=K[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=K[Z],X!==void 0)J.push(K.time),Q.push(...X);K=$[W++]}while(K!==void 0);else if(X.toArray!==void 0)do{if(X=K[Z],X!==void 0)J.push(K.time),X.toArray(Q,Q.length);K=$[W++]}while(K!==void 0);else do{if(X=K[Z],X!==void 0)J.push(K.time),Q.push(X);K=$[W++]}while(K!==void 0)}class H7{constructor($,J,Q,Z){this.parameterPositions=$,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new J.constructor(Q),this.sampleValues=J,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate($){let J=this.parameterPositions,Q=this._cachedIndex,Z=J[Q],W=J[Q-1];Q:{$:{let K;J:{Z:if(!($<Z)){for(let X=Q+2;;){if(Z===void 0){if($<W)break Z;return Q=J.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===X)break;if(W=Z,Z=J[++Q],$<Z)break $}K=J.length;break J}if(!($>=W)){let X=J[1];if($<X)Q=2,W=X;for(let H=Q-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===H)break;if(Z=W,W=J[--Q-1],$>=W)break $}K=Q,Q=0;break J}break Q}while(Q<K){let X=Q+K>>>1;if($<J[X])K=X;else Q=X+1}if(Z=J[Q],W=J[Q-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=J.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,W,Z)}return this.interpolate_(Q,W,$,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_($){let J=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=$*Z;for(let K=0;K!==Z;++K)J[K]=Q[W+K];return J}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class UZ extends H7{constructor($,J,Q,Z){super($,J,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_($,J,Q){let Z=this.parameterPositions,W=$-2,K=$+1,X=Z[W],H=Z[K];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=$,X=2*J-Q;break;case 2402:W=Z.length-2,X=J+Z[W]-Z[W+1];break;default:W=$,X=Q}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:K=$,H=2*Q-J;break;case 2402:K=1,H=Q+Z[1]-Z[0];break;default:K=$-1,H=J}let Y=(Q-J)*0.5,U=this.valueSize;this._weightPrev=Y/(J-X),this._weightNext=Y/(H-Q),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=$*X,Y=H-X,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,M=(Q-J)/(Z-J),O=M*M,F=O*M,N=-E*F+2*E*O-E*M,R=(1+E)*F+(-1.5-2*E)*O+(-0.5+E)*M+1,V=(-1-q)*F+(1.5+q)*O+0.5*M,L=q*F-q*O;for(let k=0;k!==X;++k)W[k]=N*K[U+k]+R*K[Y+k]+V*K[H+k]+L*K[G+k];return W}}class GZ extends H7{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=$*X,Y=H-X,U=(Q-J)/(Z-J),G=1-U;for(let E=0;E!==X;++E)W[E]=K[Y+E]*G+K[H+E]*U;return W}}class EZ extends H7{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($){return this.copySampleValue_($-1)}}class $8{constructor($,J,Q,Z){if($===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(J===void 0||J.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+$);this.name=$,this.times=E$(J,this.TimeBufferType),this.values=E$(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON($){let J=$.constructor,Q;if(J.toJSON!==this.toJSON)Q=J.toJSON($);else{Q={name:$.name,times:E$($.times,Array),values:E$($.values,Array)};let Z=$.getInterpolation();if(Z!==$.DefaultInterpolation)Q.interpolation=Z}return Q.type=$.ValueTypeName,Q}InterpolantFactoryMethodDiscrete($){return new EZ(this.times,this.values,this.getValueSize(),$)}InterpolantFactoryMethodLinear($){return new GZ(this.times,this.values,this.getValueSize(),$)}InterpolantFactoryMethodSmooth($){return new UZ(this.times,this.values,this.getValueSize(),$)}setInterpolation($){let J;switch($){case 2300:J=this.InterpolantFactoryMethodDiscrete;break;case 2301:J=this.InterpolantFactoryMethodLinear;break;case 2302:J=this.InterpolantFactoryMethodSmooth;break}if(J===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if($!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=J,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift($){if($!==0){let J=this.times;for(let Q=0,Z=J.length;Q!==Z;++Q)J[Q]+=$}return this}scale($){if($!==1){let J=this.times;for(let Q=0,Z=J.length;Q!==Z;++Q)J[Q]*=$}return this}trim($,J){let Q=this.times,Z=Q.length,W=0,K=Z-1;while(W!==Z&&Q[W]<$)++W;while(K!==-1&&Q[K]>J)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let X=this.getValueSize();this.times=Q.slice(W,K),this.values=this.values.slice(W*X,K*X)}return this}validate(){let $=!0,J=this.getValueSize();if(J-Math.floor(J)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),$=!1;let Q=this.times,Z=this.values,W=Q.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),$=!1;let K=null;for(let X=0;X!==W;X++){let H=Q[X];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,X,H),$=!1;break}if(K!==null&&K>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,X,H,K),$=!1;break}K=H}if(Z!==void 0){if(LU(Z))for(let X=0,H=Z.length;X!==H;++X){let Y=Z[X];if(isNaN(Y)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,X,Y),$=!1;break}}}return $}optimize(){let $=this.times.slice(),J=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,W=$.length-1,K=1;for(let X=1;X<W;++X){let H=!1,Y=$[X],U=$[X+1];if(Y!==U&&(X!==1||Y!==$[0]))if(!Z){let G=X*Q,E=G-Q,q=G+Q;for(let M=0;M!==Q;++M){let O=J[G+M];if(O!==J[E+M]||O!==J[q+M]){H=!0;break}}}else H=!0;if(H){if(X!==K){$[K]=$[X];let G=X*Q,E=K*Q;for(let q=0;q!==Q;++q)J[E+q]=J[G+q]}++K}}if(W>0){$[K]=$[W];for(let X=W*Q,H=K*Q,Y=0;Y!==Q;++Y)J[H+Y]=J[X+Y];++K}if(K!==$.length)this.times=$.slice(0,K),this.values=J.slice(0,K*Q);else this.times=$,this.values=J;return this}clone(){let $=this.times.slice(),J=this.values.slice(),Z=new this.constructor(this.name,$,J);return Z.createInterpolant=this.createInterpolant,Z}}$8.prototype.ValueTypeName="";$8.prototype.TimeBufferType=Float32Array;$8.prototype.ValueBufferType=Float32Array;$8.prototype.DefaultInterpolation=2301;class Y7 extends $8{constructor($,J,Q){super($,J,Q)}}Y7.prototype.ValueTypeName="bool";Y7.prototype.ValueBufferType=Array;Y7.prototype.DefaultInterpolation=2300;Y7.prototype.InterpolantFactoryMethodLinear=void 0;Y7.prototype.InterpolantFactoryMethodSmooth=void 0;class c$ extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}}c$.prototype.ValueTypeName="color";class g8 extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}}g8.prototype.ValueTypeName="number";class qZ extends H7{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=(Q-J)/(Z-J),Y=$*X;for(let U=Y+X;Y!==U;Y+=4)F8.slerpFlat(W,0,K,Y-X,K,Y,H);return W}}class d8 extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}InterpolantFactoryMethodLinear($){return new qZ(this.times,this.values,this.getValueSize(),$)}}d8.prototype.ValueTypeName="quaternion";d8.prototype.InterpolantFactoryMethodSmooth=void 0;class U7 extends $8{constructor($,J,Q){super($,J,Q)}}U7.prototype.ValueTypeName="string";U7.prototype.ValueBufferType=Array;U7.prototype.DefaultInterpolation=2300;U7.prototype.InterpolantFactoryMethodLinear=void 0;U7.prototype.InterpolantFactoryMethodSmooth=void 0;class p8 extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}}p8.prototype.ValueTypeName="vector";class n${constructor($="",J=-1,Q=[],Z=2500){if(this.name=$,this.tracks=Q,this.duration=J,this.blendMode=Z,this.uuid=R8(),this.userData={},this.duration<0)this.resetDuration()}static parse($){let J=[],Q=$.tracks,Z=1/($.fps||1);for(let K=0,X=Q.length;K!==X;++K)J.push(VU(Q[K]).scale(Z));let W=new this($.name,$.duration,J,$.blendMode);return W.uuid=$.uuid,W.userData=JSON.parse($.userData||"{}"),W}static toJSON($){let J=[],Q=$.tracks,Z={name:$.name,duration:$.duration,tracks:J,uuid:$.uuid,blendMode:$.blendMode,userData:JSON.stringify($.userData)};for(let W=0,K=Q.length;W!==K;++W)J.push($8.toJSON(Q[W]));return Z}static CreateFromMorphTargetSequence($,J,Q,Z){let W=J.length,K=[];for(let X=0;X<W;X++){let H=[],Y=[];H.push((X+W-1)%W,X,(X+1)%W),Y.push(0,1,0);let U=DU(H);if(H=ZW(H,1,U),Y=ZW(Y,1,U),!Z&&H[0]===0)H.push(W),Y.push(Y[0]);K.push(new g8(".morphTargetInfluences["+J[X].name+"]",H,Y).scale(1/Q))}return new this($,-1,K)}static findByName($,J){let Q=$;if(!Array.isArray($)){let Z=$;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===J)return Q[Z];return null}static CreateClipsFromMorphTargetSequences($,J,Q){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let X=0,H=$.length;X<H;X++){let Y=$[X],U=Y.name.match(W);if(U&&U.length>1){let G=U[1],E=Z[G];if(!E)Z[G]=E=[];E.push(Y)}}let K=[];for(let X in Z)K.push(this.CreateFromMorphTargetSequence(X,Z[X],J,Q));return K}static parseAnimation($,J){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!$)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Q=function(G,E,q,M,O){if(q.length!==0){let F=[],N=[];if(UK(q,F,N,M),F.length!==0)O.push(new G(E,F,N))}},Z=[],W=$.name||"default",K=$.fps||30,X=$.blendMode,H=$.length||-1,Y=$.hierarchy||[];for(let G=0;G<Y.length;G++){let E=Y[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},M;for(M=0;M<E.length;M++)if(E[M].morphTargets)for(let O=0;O<E[M].morphTargets.length;O++)q[E[M].morphTargets[O]]=-1;for(let O in q){let F=[],N=[];for(let R=0;R!==E[M].morphTargets.length;++R){let V=E[M];F.push(V.time),N.push(V.morphTarget===O?1:0)}Z.push(new g8(".morphTargetInfluence["+O+"]",F,N))}H=q.length*K}else{let q=".bones["+J[G].name+"]";Q(p8,q+".position",E,"pos",Z),Q(d8,q+".quaternion",E,"rot",Z),Q(p8,q+".scale",E,"scl",Z)}}if(Z.length===0)return null;return new this(W,H,Z,X)}resetDuration(){let $=this.tracks,J=0;for(let Q=0,Z=$.length;Q!==Z;++Q){let W=this.tracks[Q];J=Math.max(J,W.times[W.times.length-1])}return this.duration=J,this}trim(){for(let $=0;$<this.tracks.length;$++)this.tracks[$].trim(0,this.duration);return this}validate(){let $=!0;for(let J=0;J<this.tracks.length;J++)$=$&&this.tracks[J].validate();return $}optimize(){for(let $=0;$<this.tracks.length;$++)this.tracks[$].optimize();return this}clone(){let $=[];for(let Q=0;Q<this.tracks.length;Q++)$.push(this.tracks[Q].clone());let J=new this.constructor(this.name,this.duration,$,this.blendMode);return J.userData=JSON.parse(JSON.stringify(this.userData)),J}toJSON(){return this.constructor.toJSON(this)}}function _U($){switch($.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return g8;case"vector":case"vector2":case"vector3":case"vector4":return p8;case"color":return c$;case"quaternion":return d8;case"bool":case"boolean":return Y7;case"string":return U7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+$)}function VU($){if($.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let J=_U($.type);if($.times===void 0){let Q=[],Z=[];UK($.keys,Q,Z,"value"),$.times=Q,$.values=Z}if(J.parse!==void 0)return J.parse($);else return new J($.name,$.times,$.values,$.interpolation)}var B8={enabled:!1,files:{},add:function($,J){if(this.enabled===!1)return;this.files[$]=J},get:function($){if(this.enabled===!1)return;return this.files[$]},remove:function($){delete this.files[$]},clear:function(){this.files={}}};class NZ{constructor($,J,Q){let Z=this,W=!1,K=0,X=0,H=void 0,Y=[];this.onStart=void 0,this.onLoad=$,this.onProgress=J,this.onError=Q,this.abortController=new AbortController,this.itemStart=function(U){if(X++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,X)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,X);if(K===X){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(H)return H(U);return U},this.setURLModifier=function(U){return H=U,this},this.addHandler=function(U,G){return Y.push(U,G),this},this.removeHandler=function(U){let G=Y.indexOf(U);if(G!==-1)Y.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=Y.length;G<E;G+=2){let q=Y[G],M=Y[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var GK=new NZ;class c8{constructor($){this.manager=$!==void 0?$:GK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync($,J){let Q=this;return new Promise(function(Z,W){Q.load($,Z,J,W)})}parse(){}setCrossOrigin($){return this.crossOrigin=$,this}setWithCredentials($){return this.withCredentials=$,this}setPath($){return this.path=$,this}setResourcePath($){return this.resourcePath=$,this}setRequestHeader($){return this.requestHeader=$,this}abort(){return this}}c8.DEFAULT_MATERIAL_NAME="__DEFAULT";var b8={};class EK extends Error{constructor($,J){super($);this.response=J}}class M9 extends c8{constructor($){super($);this.mimeType="",this.responseType="",this._abortController=new AbortController}load($,J,Q,Z){if($===void 0)$="";if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=B8.get(`file:${$}`);if(W!==void 0)return this.manager.itemStart($),setTimeout(()=>{if(J)J(W);this.manager.itemEnd($)},0),W;if(b8[$]!==void 0){b8[$].push({onLoad:J,onProgress:Q,onError:Z});return}b8[$]=[],b8[$].push({onLoad:J,onProgress:Q,onError:Z});let K=new Request($,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),X=this.mimeType,H=this.responseType;fetch(K).then((Y)=>{if(Y.status===200||Y.status===0){if(Y.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||Y.body===void 0||Y.body.getReader===void 0)return Y;let U=b8[$],G=Y.body.getReader(),E=Y.headers.get("X-File-Size")||Y.headers.get("Content-Length"),q=E?parseInt(E):0,M=q!==0,O=0,F=new ReadableStream({start(N){R();function R(){G.read().then(({done:V,value:L})=>{if(V)N.close();else{O+=L.byteLength;let k=new ProgressEvent("progress",{lengthComputable:M,loaded:O,total:q});for(let A=0,I=U.length;A<I;A++){let S=U[A];if(S.onProgress)S.onProgress(k)}N.enqueue(L),R()}},(V)=>{N.error(V)})}}});return new Response(F)}else throw new EK(`fetch for "${Y.url}" responded with ${Y.status}: ${Y.statusText}`,Y)}).then((Y)=>{switch(H){case"arraybuffer":return Y.arrayBuffer();case"blob":return Y.blob();case"document":return Y.text().then((U)=>{return new DOMParser().parseFromString(U,X)});case"json":return Y.json();default:if(X==="")return Y.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return Y.arrayBuffer().then((M)=>q.decode(M))}}}).then((Y)=>{B8.add(`file:${$}`,Y);let U=b8[$];delete b8[$];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(Y)}}).catch((Y)=>{let U=b8[$];if(U===void 0)throw this.manager.itemError($),Y;delete b8[$];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(Y)}this.manager.itemError($)}).finally(()=>{this.manager.itemEnd($)}),this.manager.itemStart($)}setResponseType($){return this.responseType=$,this}setMimeType($){return this.mimeType=$,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Y6=new WeakMap;class RZ extends c8{constructor($){super($)}load($,J,Q,Z){if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=this,K=B8.get(`image:${$}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart($),setTimeout(function(){if(J)J(K);W.manager.itemEnd($)},0);else{let G=Y6.get(K);if(G===void 0)G=[],Y6.set(K,G);G.push({onLoad:J,onError:Z})}return K}let X=G6("img");function H(){if(U(),J)J(this);let G=Y6.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}Y6.delete(this),W.manager.itemEnd($)}function Y(G){if(U(),Z)Z(G);B8.remove(`image:${$}`);let E=Y6.get(this)||[];for(let q=0;q<E.length;q++){let M=E[q];if(M.onError)M.onError(G)}Y6.delete(this),W.manager.itemError($),W.manager.itemEnd($)}function U(){X.removeEventListener("load",H,!1),X.removeEventListener("error",Y,!1)}if(X.addEventListener("load",H,!1),X.addEventListener("error",Y,!1),$.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return B8.add(`image:${$}`,X),W.manager.itemStart($),X.src=$,X}}class s$ extends c8{constructor($){super($)}load($,J,Q,Z){let W=new L1,K=new RZ(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load($,function(X){if(W.image=X,W.needsUpdate=!0,J!==void 0)J(W)},Q,Z),W}}class F9 extends E1{constructor($,J=1){super();this.isLight=!0,this.type="Light",this.color=new y0($),this.intensity=J}dispose(){}copy($,J){return super.copy($,J),this.color.copy($.color),this.intensity=$.intensity,this}toJSON($){let J=super.toJSON($);if(J.object.color=this.color.getHex(),J.object.intensity=this.intensity,this.groundColor!==void 0)J.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)J.object.distance=this.distance;if(this.angle!==void 0)J.object.angle=this.angle;if(this.decay!==void 0)J.object.decay=this.decay;if(this.penumbra!==void 0)J.object.penumbra=this.penumbra;if(this.shadow!==void 0)J.object.shadow=this.shadow.toJSON();if(this.target!==void 0)J.object.target=this.target.uuid;return J}}var WQ=new g0,WW=new g,KW=new g;class o${constructor($){this.camera=$,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new u0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new g0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new E9,this._frameExtents=new u0(1,1),this._viewportCount=1,this._viewports=[new i0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices($){let J=this.camera,Q=this.matrix;if(WW.setFromMatrixPosition($.matrixWorld),J.position.copy(WW),KW.setFromMatrixPosition($.target.matrixWorld),J.lookAt(KW),J.updateMatrixWorld(),WQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),this._frustum.setFromProjectionMatrix(WQ,J.coordinateSystem,J.reversedDepth),J.reversedDepth)Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);Q.multiply(WQ)}getViewport($){return this._viewports[$]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy($){return this.camera=$.camera.clone(),this.intensity=$.intensity,this.bias=$.bias,this.radius=$.radius,this.autoUpdate=$.autoUpdate,this.needsUpdate=$.needsUpdate,this.normalBias=$.normalBias,this.blurSamples=$.blurSamples,this.mapSize.copy($.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let $={};if(this.intensity!==1)$.intensity=this.intensity;if(this.bias!==0)$.bias=this.bias;if(this.normalBias!==0)$.normalBias=this.normalBias;if(this.radius!==1)$.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)$.mapSize=this.mapSize.toArray();return $.camera=this.camera.toJSON(!1).object,delete $.camera.matrix,$}}class qK extends o${constructor(){super(new T1(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices($){let J=this.camera,Q=A7*2*$.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=$.distance||J.far;if(Q!==J.fov||Z!==J.aspect||W!==J.far)J.fov=Q,J.aspect=Z,J.far=W,J.updateProjectionMatrix();super.updateMatrices($)}copy($){return super.copy($),this.focus=$.focus,this}}class i$ extends F9{constructor($,J,Q=0,Z=Math.PI/3,W=0,K=2){super($,J);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(E1.DEFAULT_UP),this.updateMatrix(),this.target=new E1,this.distance=Q,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new qK}get power(){return this.intensity*Math.PI}set power($){this.intensity=$/Math.PI}dispose(){this.shadow.dispose()}copy($,J){return super.copy($,J),this.distance=$.distance,this.angle=$.angle,this.penumbra=$.penumbra,this.decay=$.decay,this.target=$.target.clone(),this.shadow=$.shadow.clone(),this}}var XW=new g0,a6=new g,KQ=new g;class NK extends o${constructor(){super(new T1(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new u0(4,2),this._viewportCount=6,this._viewports=[new i0(2,1,1,1),new i0(0,1,1,1),new i0(3,1,1,1),new i0(1,1,1,1),new i0(3,0,1,1),new i0(1,0,1,1)],this._cubeDirections=[new g(1,0,0),new g(-1,0,0),new g(0,0,1),new g(0,0,-1),new g(0,1,0),new g(0,-1,0)],this._cubeUps=[new g(0,1,0),new g(0,1,0),new g(0,1,0),new g(0,1,0),new g(0,0,1),new g(0,0,-1)]}updateMatrices($,J=0){let Q=this.camera,Z=this.matrix,W=$.distance||Q.far;if(W!==Q.far)Q.far=W,Q.updateProjectionMatrix();a6.setFromMatrixPosition($.matrixWorld),Q.position.copy(a6),KQ.copy(Q.position),KQ.add(this._cubeDirections[J]),Q.up.copy(this._cubeUps[J]),Q.lookAt(KQ),Q.updateMatrixWorld(),Z.makeTranslation(-a6.x,-a6.y,-a6.z),XW.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(XW,Q.coordinateSystem,Q.reversedDepth)}}class a$ extends F9{constructor($,J,Q=0,Z=2){super($,J);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new NK}get power(){return this.intensity*4*Math.PI}set power($){this.intensity=$/(4*Math.PI)}dispose(){this.shadow.dispose()}copy($,J){return super.copy($,J),this.distance=$.distance,this.decay=$.decay,this.shadow=$.shadow.clone(),this}}class G7 extends V6{constructor($=-1,J=1,Q=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=$,this.right=J,this.top=Q,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy($,J){return super.copy($,J),this.left=$.left,this.right=$.right,this.top=$.top,this.bottom=$.bottom,this.near=$.near,this.far=$.far,this.zoom=$.zoom,this.view=$.view===null?null:Object.assign({},$.view),this}setViewOffset($,J,Q,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=$,this.view.fullHeight=J,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let $=(this.right-this.left)/(2*this.zoom),J=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=Q-$,K=Q+$,X=Z+J,H=Z-J;if(this.view!==null&&this.view.enabled){let Y=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=Y*this.view.offsetX,K=W+Y*this.view.width,X-=U*this.view.offsetY,H=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,X,H,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON($){let J=super.toJSON($);if(J.object.zoom=this.zoom,J.object.left=this.left,J.object.right=this.right,J.object.top=this.top,J.object.bottom=this.bottom,J.object.near=this.near,J.object.far=this.far,this.view!==null)J.object.view=Object.assign({},this.view);return J}}class RK extends o${constructor(){super(new G7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class r$ extends F9{constructor($,J){super($,J);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(E1.DEFAULT_UP),this.updateMatrix(),this.target=new E1,this.shadow=new RK}dispose(){this.shadow.dispose()}copy($){return super.copy($),this.target=$.target.clone(),this.shadow=$.shadow.clone(),this}}class E7{static extractUrlBase($){let J=$.lastIndexOf("/");if(J===-1)return"./";return $.slice(0,J+1)}static resolveURL($,J){if(typeof $!=="string"||$==="")return"";if(/^https?:\/\//i.test(J)&&/^\//.test($))J=J.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test($))return $;if(/^data:.*,.*$/i.test($))return $;if(/^blob:.*$/i.test($))return $;return J+$}}var XQ=new WeakMap;class t$ extends c8{constructor($){super($);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions($){return this.options=$,this}load($,J,Q,Z){if($===void 0)$="";if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=this,K=B8.get(`image-bitmap:${$}`);if(K!==void 0){if(W.manager.itemStart($),K.then){K.then((Y)=>{if(XQ.has(K)===!0){if(Z)Z(XQ.get(K));W.manager.itemError($),W.manager.itemEnd($)}else{if(J)J(Y);return W.manager.itemEnd($),Y}});return}return setTimeout(function(){if(J)J(K);W.manager.itemEnd($)},0),K}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader,X.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let H=fetch($,X).then(function(Y){return Y.blob()}).then(function(Y){return createImageBitmap(Y,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(Y){if(B8.add(`image-bitmap:${$}`,Y),J)J(Y);return W.manager.itemEnd($),Y}).catch(function(Y){if(Z)Z(Y);XQ.set(H,Y),B8.remove(`image-bitmap:${$}`),W.manager.itemError($),W.manager.itemEnd($)});B8.add(`image-bitmap:${$}`,H),W.manager.itemStart($)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class MZ extends T1{constructor($=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=$}}var FZ="\\[\\]\\.:\\/",BU=new RegExp("["+FZ+"]","g"),OZ="[^"+FZ+"]",zU="[^"+FZ.replace("\\.","")+"]",kU=/((?:WC+[\/:])*)/.source.replace("WC",OZ),CU=/(WCOD+)?/.source.replace("WCOD",zU),IU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",OZ),PU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",OZ),AU=new RegExp("^"+kU+CU+IU+PU+"$"),TU=["material","materials","bones","map"];class MK{constructor($,J,Q){let Z=Q||t0.parseTrackName(J);this._targetGroup=$,this._bindings=$.subscribe_(J,Z)}getValue($,J){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue($,J)}setValue($,J){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=Q.length;Z!==W;++Z)Q[Z].setValue($,J)}bind(){let $=this._bindings;for(let J=this._targetGroup.nCachedObjects_,Q=$.length;J!==Q;++J)$[J].bind()}unbind(){let $=this._bindings;for(let J=this._targetGroup.nCachedObjects_,Q=$.length;J!==Q;++J)$[J].unbind()}}class t0{constructor($,J,Q){this.path=J,this.parsedPath=Q||t0.parseTrackName(J),this.node=t0.findNode($,this.parsedPath.nodeName),this.rootNode=$,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create($,J,Q){if(!($&&$.isAnimationObjectGroup))return new t0($,J,Q);else return new t0.Composite($,J,Q)}static sanitizeNodeName($){return $.replace(/\s/g,"_").replace(BU,"")}static parseTrackName($){let J=AU.exec($);if(J===null)throw Error("PropertyBinding: Cannot parse trackName: "+$);let Q={nodeName:J[2],objectName:J[3],objectIndex:J[4],propertyName:J[5],propertyIndex:J[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=Q.nodeName.substring(Z+1);if(TU.indexOf(W)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=W}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+$);return Q}static findNode($,J){if(J===void 0||J===""||J==="."||J===-1||J===$.name||J===$.uuid)return $;if($.skeleton){let Q=$.skeleton.getBoneByName(J);if(Q!==void 0)return Q}if($.children){let Q=function(W){for(let K=0;K<W.length;K++){let X=W[K];if(X.name===J||X.uuid===J)return X;let H=Q(X.children);if(H)return H}return null},Z=Q($.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct($,J){$[J]=this.targetObject[this.propertyName]}_getValue_array($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)$[J++]=Q[Z]}_getValue_arrayElement($,J){$[J]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray($,J){this.resolvedProperty.toArray($,J)}_setValue_direct($,J){this.targetObject[this.propertyName]=$[J]}_setValue_direct_setNeedsUpdate($,J){this.targetObject[this.propertyName]=$[J],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate($,J){this.targetObject[this.propertyName]=$[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++]}_setValue_array_setNeedsUpdate($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement($,J){this.resolvedProperty[this.propertyIndex]=$[J]}_setValue_arrayElement_setNeedsUpdate($,J){this.resolvedProperty[this.propertyIndex]=$[J],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate($,J){this.resolvedProperty[this.propertyIndex]=$[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray($,J){this.resolvedProperty.fromArray($,J)}_setValue_fromArray_setNeedsUpdate($,J){this.resolvedProperty.fromArray($,J),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate($,J){this.resolvedProperty.fromArray($,J),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound($,J){this.bind(),this.getValue($,J)}_setValue_unbound($,J){this.bind(),this.setValue($,J)}bind(){let $=this.node,J=this.parsedPath,Q=J.objectName,Z=J.propertyName,W=J.propertyIndex;if(!$)$=t0.findNode(this.rootNode,J.nodeName),this.node=$;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!$){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let Y=J.objectIndex;switch(Q){case"materials":if(!$.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!$.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}$=$.material.materials;break;case"bones":if(!$.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}$=$.skeleton.bones;for(let U=0;U<$.length;U++)if($[U].name===Y){Y=U;break}break;case"map":if("map"in $){$=$.map;break}if(!$.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!$.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}$=$.material.map;break;default:if($[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}$=$[Q]}if(Y!==void 0){if($[Y]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,$);return}$=$[Y]}}let K=$[Z];if(K===void 0){let Y=J.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+Y+"."+Z+" but it wasn't found.",$);return}let X=this.Versioning.None;if(this.targetObject=$,$.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if($.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!$.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!$.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if($.morphTargetDictionary[W]!==void 0)W=$.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))H=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}t0.Composite=MK;t0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};t0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};t0.prototype.GetterByBindingType=[t0.prototype._getValue_direct,t0.prototype._getValue_array,t0.prototype._getValue_arrayElement,t0.prototype._getValue_toArray];t0.prototype.SetterByBindingTypeAndVersioning=[[t0.prototype._setValue_direct,t0.prototype._setValue_direct_setNeedsUpdate,t0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_array,t0.prototype._setValue_array_setNeedsUpdate,t0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_arrayElement,t0.prototype._setValue_arrayElement_setNeedsUpdate,t0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_fromArray,t0.prototype._setValue_fromArray_setNeedsUpdate,t0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pM=new Float32Array(1);function LZ($,J,Q,Z){let W=wU(Z);switch(Q){case 1021:return $*J;case 1028:return $*J/W.components*W.byteLength;case 1029:return $*J/W.components*W.byteLength;case 1030:return $*J*2/W.components*W.byteLength;case 1031:return $*J*2/W.components*W.byteLength;case 1022:return $*J*3/W.components*W.byteLength;case 1023:return $*J*4/W.components*W.byteLength;case 1033:return $*J*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*8;case 33778:case 33779:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 35841:case 35843:return Math.max($,16)*Math.max(J,8)/4;case 35840:case 35842:return Math.max($,8)*Math.max(J,8)/2;case 36196:case 37492:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*8;case 37496:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 37808:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 37809:return Math.floor(($+4)/5)*Math.floor((J+3)/4)*16;case 37810:return Math.floor(($+4)/5)*Math.floor((J+4)/5)*16;case 37811:return Math.floor(($+5)/6)*Math.floor((J+4)/5)*16;case 37812:return Math.floor(($+5)/6)*Math.floor((J+5)/6)*16;case 37813:return Math.floor(($+7)/8)*Math.floor((J+4)/5)*16;case 37814:return Math.floor(($+7)/8)*Math.floor((J+5)/6)*16;case 37815:return Math.floor(($+7)/8)*Math.floor((J+7)/8)*16;case 37816:return Math.floor(($+9)/10)*Math.floor((J+4)/5)*16;case 37817:return Math.floor(($+9)/10)*Math.floor((J+5)/6)*16;case 37818:return Math.floor(($+9)/10)*Math.floor((J+7)/8)*16;case 37819:return Math.floor(($+9)/10)*Math.floor((J+9)/10)*16;case 37820:return Math.floor(($+11)/12)*Math.floor((J+9)/10)*16;case 37821:return Math.floor(($+11)/12)*Math.floor((J+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil($/4)*Math.ceil(J/4)*16;case 36283:case 36284:return Math.ceil($/4)*Math.ceil(J/4)*8;case 36285:case 36286:return Math.ceil($/4)*Math.ceil(J/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function wU($){switch($){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${$}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function gK(){let $=null,J=!1,Q=null,Z=null;function W(K,X){Q(K,X),Z=$.requestAnimationFrame(W)}return{start:function(){if(J===!0)return;if(Q===null)return;Z=$.requestAnimationFrame(W),J=!0},stop:function(){$.cancelAnimationFrame(Z),J=!1},setAnimationLoop:function(K){Q=K},setContext:function(K){$=K}}}function SU($){let J=new WeakMap;function Q(H,Y){let{array:U,usage:G}=H,E=U.byteLength,q=$.createBuffer();$.bindBuffer(Y,q),$.bufferData(Y,U,G),H.onUploadCallback();let M;if(U instanceof Float32Array)M=$.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)M=$.HALF_FLOAT;else if(U instanceof Uint16Array)if(H.isFloat16BufferAttribute)M=$.HALF_FLOAT;else M=$.UNSIGNED_SHORT;else if(U instanceof Int16Array)M=$.SHORT;else if(U instanceof Uint32Array)M=$.UNSIGNED_INT;else if(U instanceof Int32Array)M=$.INT;else if(U instanceof Int8Array)M=$.BYTE;else if(U instanceof Uint8Array)M=$.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)M=$.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:M,bytesPerElement:U.BYTES_PER_ELEMENT,version:H.version,size:E}}function Z(H,Y,U){let{array:G,updateRanges:E}=Y;if($.bindBuffer(U,H),E.length===0)$.bufferSubData(U,0,G);else{E.sort((M,O)=>M.start-O.start);let q=0;for(let M=1;M<E.length;M++){let O=E[q],F=E[M];if(F.start<=O.start+O.count+1)O.count=Math.max(O.count,F.start+F.count-O.start);else++q,E[q]=F}E.length=q+1;for(let M=0,O=E.length;M<O;M++){let F=E[M];$.bufferSubData(U,F.start*G.BYTES_PER_ELEMENT,G,F.start,F.count)}Y.clearUpdateRanges()}Y.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return J.get(H)}function K(H){if(H.isInterleavedBufferAttribute)H=H.data;let Y=J.get(H);if(Y)$.deleteBuffer(Y.buffer),J.delete(H)}function X(H,Y){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let G=J.get(H);if(!G||G.version<H.version)J.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let U=J.get(H);if(U===void 0)J.set(H,Q(H,Y));else if(U.version<H.version){if(U.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,H,Y),U.version=H.version}}return{get:W,remove:K,update:X}}var jU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fU=`#ifdef USE_ALPHAHASH
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
#endif`,vU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xU=`#ifdef USE_AOMAP
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
#endif`,gU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pU=`#ifdef USE_BATCHING
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
#endif`,lU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cU=`#ifdef USE_IRIDESCENCE
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
#endif`,nU=`#ifdef USE_BUMPMAP
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
#endif`,sU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$G=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JG=`#define PI 3.141592653589793
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
} // validated`,QG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZG=`vec3 transformedNormal = objectNormal;
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
#endif`,WG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YG="gl_FragColor = linearToOutputTexel( gl_FragColor );",UG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GG=`#ifdef USE_ENVMAP
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
#endif`,EG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,qG=`#ifdef USE_ENVMAP
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
#endif`,NG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RG=`#ifdef USE_ENVMAP
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
#endif`,MG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DG=`#ifdef USE_GRADIENTMAP
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
}`,_G=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zG=`uniform bool receiveShadow;
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
#endif`,kG=`#ifdef USE_ENVMAP
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
#endif`,CG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TG=`PhysicalMaterial material;
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
#endif`,wG=`struct PhysicalMaterial {
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
}`,SG=`
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
#endif`,jG=`#if defined( RE_IndirectDiffuse )
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
#endif`,fG=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lG=`#if defined( USE_POINTS_UV )
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
#endif`,uG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cG=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sG=`#ifdef USE_MORPHTARGETS
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
#endif`,oG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
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
#endif`,JE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FE=`float getShadowMask() {
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,DE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_E=`#ifdef USE_SKINNING
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
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jE=`uniform sampler2D t2D;
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
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
}`,xE=`#if DEPTH_PACKING == 3200
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
}`,gE=`#define DISTANCE
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
}`,pE=`#define DISTANCE
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`uniform float scale;
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
}`,dE=`uniform vec3 diffuse;
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
}`,cE=`#include <common>
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
}`,nE=`uniform vec3 diffuse;
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
}`,sE=`#define LAMBERT
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
}`,oE=`#define LAMBERT
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
}`,iE=`#define MATCAP
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
}`,aE=`#define MATCAP
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
}`,rE=`#define NORMAL
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
}`,tE=`#define NORMAL
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
}`,eE=`#define PHONG
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
}`,$q=`#define PHONG
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
}`,Jq=`#define STANDARD
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
}`,Qq=`#define STANDARD
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
}`,Zq=`#define TOON
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
}`,Wq=`#define TOON
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
}`,Kq=`uniform float size;
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
}`,Xq=`uniform vec3 diffuse;
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
}`,Hq=`#include <common>
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
}`,Yq=`uniform vec3 color;
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
}`,Uq=`uniform float rotation;
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
}`,Gq=`uniform vec3 diffuse;
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
}`,m0={alphahash_fragment:jU,alphahash_pars_fragment:fU,alphamap_fragment:vU,alphamap_pars_fragment:yU,alphatest_fragment:bU,alphatest_pars_fragment:hU,aomap_fragment:xU,aomap_pars_fragment:gU,batching_pars_vertex:pU,batching_vertex:lU,begin_vertex:uU,beginnormal_vertex:mU,bsdfs:dU,iridescence_fragment:cU,bumpmap_pars_fragment:nU,clipping_planes_fragment:sU,clipping_planes_pars_fragment:oU,clipping_planes_pars_vertex:iU,clipping_planes_vertex:aU,color_fragment:rU,color_pars_fragment:tU,color_pars_vertex:eU,color_vertex:$G,common:JG,cube_uv_reflection_fragment:QG,defaultnormal_vertex:ZG,displacementmap_pars_vertex:WG,displacementmap_vertex:KG,emissivemap_fragment:XG,emissivemap_pars_fragment:HG,colorspace_fragment:YG,colorspace_pars_fragment:UG,envmap_fragment:GG,envmap_common_pars_fragment:EG,envmap_pars_fragment:qG,envmap_pars_vertex:NG,envmap_physical_pars_fragment:kG,envmap_vertex:RG,fog_vertex:MG,fog_pars_vertex:FG,fog_fragment:OG,fog_pars_fragment:LG,gradientmap_pars_fragment:DG,lightmap_pars_fragment:_G,lights_lambert_fragment:VG,lights_lambert_pars_fragment:BG,lights_pars_begin:zG,lights_toon_fragment:CG,lights_toon_pars_fragment:IG,lights_phong_fragment:PG,lights_phong_pars_fragment:AG,lights_physical_fragment:TG,lights_physical_pars_fragment:wG,lights_fragment_begin:SG,lights_fragment_maps:jG,lights_fragment_end:fG,logdepthbuf_fragment:vG,logdepthbuf_pars_fragment:yG,logdepthbuf_pars_vertex:bG,logdepthbuf_vertex:hG,map_fragment:xG,map_pars_fragment:gG,map_particle_fragment:pG,map_particle_pars_fragment:lG,metalnessmap_fragment:uG,metalnessmap_pars_fragment:mG,morphinstance_vertex:dG,morphcolor_vertex:cG,morphnormal_vertex:nG,morphtarget_pars_vertex:sG,morphtarget_vertex:oG,normal_fragment_begin:iG,normal_fragment_maps:aG,normal_pars_fragment:rG,normal_pars_vertex:tG,normal_vertex:eG,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:JE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:ZE,iridescence_pars_fragment:WE,opaque_fragment:KE,packing:XE,premultiplied_alpha_fragment:HE,project_vertex:YE,dithering_fragment:UE,dithering_pars_fragment:GE,roughnessmap_fragment:EE,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:RE,shadowmap_vertex:ME,shadowmask_pars_fragment:FE,skinbase_vertex:OE,skinning_pars_vertex:LE,skinning_vertex:DE,skinnormal_vertex:_E,specularmap_fragment:VE,specularmap_pars_fragment:BE,tonemapping_fragment:zE,tonemapping_pars_fragment:kE,transmission_fragment:CE,transmission_pars_fragment:IE,uv_pars_fragment:PE,uv_pars_vertex:AE,uv_vertex:TE,worldpos_vertex:wE,background_vert:SE,background_frag:jE,backgroundCube_vert:fE,backgroundCube_frag:vE,cube_vert:yE,cube_frag:bE,depth_vert:hE,depth_frag:xE,distanceRGBA_vert:gE,distanceRGBA_frag:pE,equirect_vert:lE,equirect_frag:uE,linedashed_vert:mE,linedashed_frag:dE,meshbasic_vert:cE,meshbasic_frag:nE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:iE,meshmatcap_frag:aE,meshnormal_vert:rE,meshnormal_frag:tE,meshphong_vert:eE,meshphong_frag:$q,meshphysical_vert:Jq,meshphysical_frag:Qq,meshtoon_vert:Zq,meshtoon_frag:Wq,points_vert:Kq,points_frag:Xq,shadow_vert:Hq,shadow_frag:Yq,sprite_vert:Uq,sprite_frag:Gq},N0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new p0},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new p0}},envmap:{envMap:{value:null},envMapRotation:{value:new p0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new p0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new p0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new p0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new p0},normalScale:{value:new u0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new p0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new p0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new p0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new p0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0},uvTransform:{value:new p0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new u0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new p0},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0}}},P8={basic:{uniforms:f1([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.fog]),vertexShader:m0.meshbasic_vert,fragmentShader:m0.meshbasic_frag},lambert:{uniforms:f1([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new y0(0)}}]),vertexShader:m0.meshlambert_vert,fragmentShader:m0.meshlambert_frag},phong:{uniforms:f1([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30}}]),vertexShader:m0.meshphong_vert,fragmentShader:m0.meshphong_frag},standard:{uniforms:f1([N0.common,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.roughnessmap,N0.metalnessmap,N0.fog,N0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag},toon:{uniforms:f1([N0.common,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.gradientmap,N0.fog,N0.lights,{emissive:{value:new y0(0)}}]),vertexShader:m0.meshtoon_vert,fragmentShader:m0.meshtoon_frag},matcap:{uniforms:f1([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,{matcap:{value:null}}]),vertexShader:m0.meshmatcap_vert,fragmentShader:m0.meshmatcap_frag},points:{uniforms:f1([N0.points,N0.fog]),vertexShader:m0.points_vert,fragmentShader:m0.points_frag},dashed:{uniforms:f1([N0.common,N0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:m0.linedashed_vert,fragmentShader:m0.linedashed_frag},depth:{uniforms:f1([N0.common,N0.displacementmap]),vertexShader:m0.depth_vert,fragmentShader:m0.depth_frag},normal:{uniforms:f1([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,{opacity:{value:1}}]),vertexShader:m0.meshnormal_vert,fragmentShader:m0.meshnormal_frag},sprite:{uniforms:f1([N0.sprite,N0.fog]),vertexShader:m0.sprite_vert,fragmentShader:m0.sprite_frag},background:{uniforms:{uvTransform:{value:new p0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:m0.background_vert,fragmentShader:m0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new p0}},vertexShader:m0.backgroundCube_vert,fragmentShader:m0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:m0.cube_vert,fragmentShader:m0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:m0.equirect_vert,fragmentShader:m0.equirect_frag},distanceRGBA:{uniforms:f1([N0.common,N0.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:m0.distanceRGBA_vert,fragmentShader:m0.distanceRGBA_frag},shadow:{uniforms:f1([N0.lights,N0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:m0.shadow_vert,fragmentShader:m0.shadow_frag}};P8.physical={uniforms:f1([P8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new p0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new p0},clearcoatNormalScale:{value:new u0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new p0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new p0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new p0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new p0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new p0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new p0},transmissionSamplerSize:{value:new u0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new p0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new p0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new p0},anisotropyVector:{value:new u0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new p0}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag};var e$={r:0,b:0,g:0},v7=new M8,Eq=new g0;function qq($,J,Q,Z,W,K,X){let H=new y0(0),Y=K===!0?0:1,U,G,E=null,q=0,M=null;function O(L){let k=L.isScene===!0?L.background:null;if(k&&k.isTexture)k=(L.backgroundBlurriness>0?Q:J).get(k);return k}function F(L){let k=!1,A=O(L);if(A===null)R(H,Y);else if(A&&A.isColor)R(A,1),k=!0;let I=$.xr.getEnvironmentBlendMode();if(I==="additive")Z.buffers.color.setClear(0,0,0,1,X);else if(I==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,X);if($.autoClear||k)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),$.clear($.autoClearColor,$.autoClearDepth,$.autoClearStencil)}function N(L,k){let A=O(k);if(A&&(A.isCubeTexture||A.mapping===J9)){if(G===void 0)G=new A1(new _6(1,1,1),new u1({name:"BackgroundCubeMaterial",uniforms:f7(P8.backgroundCube.uniforms),vertexShader:P8.backgroundCube.vertexShader,fragmentShader:P8.backgroundCube.fragmentShader,side:a1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(I,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(v7.copy(k.backgroundRotation),v7.x*=-1,v7.y*=-1,v7.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1)v7.y*=-1,v7.z*=-1;if(G.material.uniforms.envMap.value=A,G.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(Eq.makeRotationFromEuler(v7)),G.material.toneMapped=o0.getTransfer(A.colorSpace)!==Y1,E!==A||q!==A.version||M!==$.toneMapping)G.material.needsUpdate=!0,E=A,q=A.version,M=$.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(A&&A.isTexture){if(U===void 0)U=new A1(new R9(2,2),new u1({name:"BackgroundMaterial",uniforms:f7(P8.background.uniforms),vertexShader:P8.background.vertexShader,fragmentShader:P8.background.fragmentShader,side:Q7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=A,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.toneMapped=o0.getTransfer(A.colorSpace)!==Y1,A.matrixAutoUpdate===!0)A.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(A.matrix),E!==A||q!==A.version||M!==$.toneMapping)U.material.needsUpdate=!0,E=A,q=A.version,M=$.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function R(L,k){L.getRGB(e$,WZ($)),Z.buffers.color.setClear(e$.r,e$.g,e$.b,k,X)}function V(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return H},setClearColor:function(L,k=1){H.set(L),Y=k,R(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(L){Y=L,R(H,Y)},render:F,addToRenderList:N,dispose:V}}function Nq($,J){let Q=$.getParameter($.MAX_VERTEX_ATTRIBS),Z={},W=q(null),K=W,X=!1;function H(D,C,T,P,f){let h=!1,b=E(P,T,C);if(K!==b)K=b,U(K.object);if(h=M(D,P,T,f),h)O(D,P,T,f);if(f!==null)J.update(f,$.ELEMENT_ARRAY_BUFFER);if(h||X){if(X=!1,k(D,C,T,P),f!==null)$.bindBuffer($.ELEMENT_ARRAY_BUFFER,J.get(f).buffer)}}function Y(){return $.createVertexArray()}function U(D){return $.bindVertexArray(D)}function G(D){return $.deleteVertexArray(D)}function E(D,C,T){let P=T.wireframe===!0,f=Z[D.id];if(f===void 0)f={},Z[D.id]=f;let h=f[C.id];if(h===void 0)h={},f[C.id]=h;let b=h[P];if(b===void 0)b=q(Y()),h[P]=b;return b}function q(D){let C=[],T=[],P=[];for(let f=0;f<Q;f++)C[f]=0,T[f]=0,P[f]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:T,attributeDivisors:P,object:D,attributes:{},index:null}}function M(D,C,T,P){let f=K.attributes,h=C.attributes,b=0,l=T.getAttributes();for(let x in l)if(l[x].location>=0){let t=f[x],X0=h[x];if(X0===void 0){if(x==="instanceMatrix"&&D.instanceMatrix)X0=D.instanceMatrix;if(x==="instanceColor"&&D.instanceColor)X0=D.instanceColor}if(t===void 0)return!0;if(t.attribute!==X0)return!0;if(X0&&t.data!==X0.data)return!0;b++}if(K.attributesNum!==b)return!0;if(K.index!==P)return!0;return!1}function O(D,C,T,P){let f={},h=C.attributes,b=0,l=T.getAttributes();for(let x in l)if(l[x].location>=0){let t=h[x];if(t===void 0){if(x==="instanceMatrix"&&D.instanceMatrix)t=D.instanceMatrix;if(x==="instanceColor"&&D.instanceColor)t=D.instanceColor}let X0={};if(X0.attribute=t,t&&t.data)X0.data=t.data;f[x]=X0,b++}K.attributes=f,K.attributesNum=b,K.index=P}function F(){let D=K.newAttributes;for(let C=0,T=D.length;C<T;C++)D[C]=0}function N(D){R(D,0)}function R(D,C){let{newAttributes:T,enabledAttributes:P,attributeDivisors:f}=K;if(T[D]=1,P[D]===0)$.enableVertexAttribArray(D),P[D]=1;if(f[D]!==C)$.vertexAttribDivisor(D,C),f[D]=C}function V(){let{newAttributes:D,enabledAttributes:C}=K;for(let T=0,P=C.length;T<P;T++)if(C[T]!==D[T])$.disableVertexAttribArray(T),C[T]=0}function L(D,C,T,P,f,h,b){if(b===!0)$.vertexAttribIPointer(D,C,T,f,h);else $.vertexAttribPointer(D,C,T,P,f,h)}function k(D,C,T,P){F();let f=P.attributes,h=T.getAttributes(),b=C.defaultAttributeValues;for(let l in h){let x=h[l];if(x.location>=0){let s=f[l];if(s===void 0){if(l==="instanceMatrix"&&D.instanceMatrix)s=D.instanceMatrix;if(l==="instanceColor"&&D.instanceColor)s=D.instanceColor}if(s!==void 0){let{normalized:t,itemSize:X0}=s,G0=J.get(s);if(G0===void 0)continue;let{buffer:B0,type:R0,bytesPerElement:o}=G0,Z0=R0===$.INT||R0===$.UNSIGNED_INT||s.gpuType===NQ;if(s.isInterleavedBufferAttribute){let J0=s.data,O0=J0.stride,D0=s.offset;if(J0.isInstancedInterleavedBuffer){for(let z0=0;z0<x.locationSize;z0++)R(x.location+z0,J0.meshPerAttribute);if(D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=J0.meshPerAttribute*J0.count}else for(let z0=0;z0<x.locationSize;z0++)N(x.location+z0);$.bindBuffer($.ARRAY_BUFFER,B0);for(let z0=0;z0<x.locationSize;z0++)L(x.location+z0,X0/x.locationSize,R0,t,O0*o,(D0+X0/x.locationSize*z0)*o,Z0)}else{if(s.isInstancedBufferAttribute){for(let J0=0;J0<x.locationSize;J0++)R(x.location+J0,s.meshPerAttribute);if(D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=s.meshPerAttribute*s.count}else for(let J0=0;J0<x.locationSize;J0++)N(x.location+J0);$.bindBuffer($.ARRAY_BUFFER,B0);for(let J0=0;J0<x.locationSize;J0++)L(x.location+J0,X0/x.locationSize,R0,t,X0*o,X0/x.locationSize*J0*o,Z0)}}else if(b!==void 0){let t=b[l];if(t!==void 0)switch(t.length){case 2:$.vertexAttrib2fv(x.location,t);break;case 3:$.vertexAttrib3fv(x.location,t);break;case 4:$.vertexAttrib4fv(x.location,t);break;default:$.vertexAttrib1fv(x.location,t)}}}}V()}function A(){y();for(let D in Z){let C=Z[D];for(let T in C){let P=C[T];for(let f in P)G(P[f].object),delete P[f];delete C[T]}delete Z[D]}}function I(D){if(Z[D.id]===void 0)return;let C=Z[D.id];for(let T in C){let P=C[T];for(let f in P)G(P[f].object),delete P[f];delete C[T]}delete Z[D.id]}function S(D){for(let C in Z){let T=Z[C];if(T[D.id]===void 0)continue;let P=T[D.id];for(let f in P)G(P[f].object),delete P[f];delete T[D.id]}}function y(){if(B(),X=!0,K===W)return;K=W,U(K.object)}function B(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:y,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:S,initAttributes:F,enableAttribute:N,disableUnusedAttributes:V}}function Rq($,J,Q){let Z;function W(U){Z=U}function K(U,G){$.drawArrays(Z,U,G),Q.update(G,Z,1)}function X(U,G,E){if(E===0)return;$.drawArraysInstanced(Z,U,G,E),Q.update(G,Z,E)}function H(U,G,E){if(E===0)return;J.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let M=0;for(let O=0;O<E;O++)M+=G[O];Q.update(M,Z,1)}function Y(U,G,E,q){if(E===0)return;let M=J.get("WEBGL_multi_draw");if(M===null)for(let O=0;O<U.length;O++)X(U[O],G[O],q[O]);else{M.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,q,0,E);let O=0;for(let F=0;F<E;F++)O+=G[F]*q[F];Q.update(O,Z,1)}}this.setMode=W,this.render=K,this.renderInstances=X,this.renderMultiDraw=H,this.renderMultiDrawInstances=Y}function Mq($,J,Q,Z){let W;function K(){if(W!==void 0)return W;if(J.has("EXT_texture_filter_anisotropic")===!0){let S=J.get("EXT_texture_filter_anisotropic");W=$.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(S){if(S!==k8&&Z.convert(S)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(S){let y=S===Z9&&(J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float"));if(S!==W7&&Z.convert(S)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==K7&&!y)return!1;return!0}function Y(S){if(S==="highp"){if($.getShaderPrecisionFormat($.VERTEX_SHADER,$.HIGH_FLOAT).precision>0&&$.getShaderPrecisionFormat($.FRAGMENT_SHADER,$.HIGH_FLOAT).precision>0)return"highp";S="mediump"}if(S==="mediump"){if($.getShaderPrecisionFormat($.VERTEX_SHADER,$.MEDIUM_FLOAT).precision>0&&$.getShaderPrecisionFormat($.FRAGMENT_SHADER,$.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",G=Y(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=Q.logarithmicDepthBuffer===!0,q=Q.reversedDepthBuffer===!0&&J.has("EXT_clip_control"),M=$.getParameter($.MAX_TEXTURE_IMAGE_UNITS),O=$.getParameter($.MAX_VERTEX_TEXTURE_IMAGE_UNITS),F=$.getParameter($.MAX_TEXTURE_SIZE),N=$.getParameter($.MAX_CUBE_MAP_TEXTURE_SIZE),R=$.getParameter($.MAX_VERTEX_ATTRIBS),V=$.getParameter($.MAX_VERTEX_UNIFORM_VECTORS),L=$.getParameter($.MAX_VARYING_VECTORS),k=$.getParameter($.MAX_FRAGMENT_UNIFORM_VECTORS),A=O>0,I=$.getParameter($.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:Y,textureFormatReadable:X,textureTypeReadable:H,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:M,maxVertexTextures:O,maxTextureSize:F,maxCubemapSize:N,maxAttributes:R,maxVertexUniforms:V,maxVaryings:L,maxFragmentUniforms:k,vertexTextures:A,maxSamples:I}}function Fq($){let J=this,Q=null,Z=0,W=!1,K=!1,X=new h8,H=new p0,Y={value:null,needsUpdate:!1};this.uniform=Y,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let M=E.length!==0||q||Z!==0||W;return W=q,Z=E.length,M},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,q){Q=G(E,q,0)},this.setState=function(E,q,M){let{clippingPlanes:O,clipIntersection:F,clipShadows:N}=E,R=$.get(E);if(!W||O===null||O.length===0||K&&!N)if(K)G(null);else U();else{let V=K?0:Z,L=V*4,k=R.clippingState||null;Y.value=k,k=G(O,q,L,M);for(let A=0;A!==L;++A)k[A]=Q[A];R.clippingState=k,this.numIntersection=F?this.numPlanes:0,this.numPlanes+=V}};function U(){if(Y.value!==Q)Y.value=Q,Y.needsUpdate=Z>0;J.numPlanes=Z,J.numIntersection=0}function G(E,q,M,O){let F=E!==null?E.length:0,N=null;if(F!==0){if(N=Y.value,O!==!0||N===null){let R=M+F*4,V=q.matrixWorldInverse;if(H.getNormalMatrix(V),N===null||N.length<R)N=new Float32Array(R);for(let L=0,k=M;L!==F;++L,k+=4)X.copy(E[L]).applyMatrix4(V,H),X.normal.toArray(N,k),N[k+3]=X.constant}Y.value=N,Y.needsUpdate=!0}return J.numPlanes=F,J.numIntersection=0,N}}function Oq($){let J=new WeakMap;function Q(X,H){if(H===V$)X.mapping=N6;else if(H===B$)X.mapping=w7;return X}function Z(X){if(X&&X.isTexture){let H=X.mapping;if(H===V$||H===B$)if(J.has(X)){let Y=J.get(X).texture;return Q(Y,X.mapping)}else{let Y=X.image;if(Y&&Y.height>0){let U=new XZ(Y.height);return U.fromEquirectangularTexture($,X),J.set(X,U),X.addEventListener("dispose",W),Q(U.texture,X.mapping)}else return null}}return X}function W(X){let H=X.target;H.removeEventListener("dispose",W);let Y=J.get(H);if(Y!==void 0)J.delete(H),Y.dispose()}function K(){J=new WeakMap}return{get:Z,dispose:K}}var A6=4,FK=[0.125,0.215,0.35,0.446,0.526,0.582],h7=20,DZ=new G7,OK=new y0,_Z=null,VZ=0,BZ=0,zZ=!1,b7=(1+Math.sqrt(5))/2,P6=1/b7,LK=[new g(-b7,P6,0),new g(b7,P6,0),new g(-P6,0,b7),new g(P6,0,b7),new g(0,b7,-P6),new g(0,b7,P6),new g(-1,1,-1),new g(1,1,-1),new g(-1,1,1),new g(1,1,1)],Lq=new g;class CZ{constructor($){this._renderer=$,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene($,J=0,Q=0.1,Z=100,W={}){let{size:K=256,position:X=Lq}=W;_Z=this._renderer.getRenderTarget(),VZ=this._renderer.getActiveCubeFace(),BZ=this._renderer.getActiveMipmapLevel(),zZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV($,Q,Z,H,X),J>0)this._blur(H,0,0,J);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular($,J=null){return this._fromTexture($,J)}fromCubemap($,J=null){return this._fromTexture($,J)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=VK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=_K(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize($){this._lodMax=Math.floor(Math.log2($)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let $=0;$<this._lodPlanes.length;$++)this._lodPlanes[$].dispose()}_cleanup($){this._renderer.setRenderTarget(_Z,VZ,BZ),this._renderer.xr.enabled=zZ,$.scissorTest=!1,$J($,0,0,$.width,$.height)}_fromTexture($,J){if($.mapping===N6||$.mapping===w7)this._setSize($.image.length===0?16:$.image[0].width||$.image[0].image.width);else this._setSize($.image.width/4);_Z=this._renderer.getRenderTarget(),VZ=this._renderer.getActiveCubeFace(),BZ=this._renderer.getActiveMipmapLevel(),zZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=J||this._allocateTargets();return this._textureToCubeUV($,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let $=3*Math.max(this._cubeSize,112),J=4*this._cubeSize,Q={magFilter:p1,minFilter:p1,generateMipmaps:!1,type:Z9,format:k8,colorSpace:h1,depthBuffer:!1},Z=DK($,J,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==$||this._pingPongRenderTarget.height!==J){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=DK($,J,Q);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dq(W)),this._blurMaterial=_q(W,$,J)}return Z}_compileMaterial($){let J=new A1(this._lodPlanes[0],$);this._renderer.compile(J,DZ)}_sceneToCubeUV($,J,Q,Z,W){let H=new T1(90,1,J,Q),Y=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(OK),G.toneMapping=l8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let O=new I8({name:"PMREM.Background",side:a1,depthWrite:!1,depthTest:!1}),F=new A1(new _6,O),N=!1,R=$.background;if(R){if(R.isColor)O.color.copy(R),$.background=null,N=!0}else O.color.copy(OK),N=!0;for(let V=0;V<6;V++){let L=V%3;if(L===0)H.up.set(0,Y[V],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x+U[V],W.y,W.z);else if(L===1)H.up.set(0,0,Y[V]),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y+U[V],W.z);else H.up.set(0,Y[V],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y,W.z+U[V]);let k=this._cubeSize;if($J(Z,L*k,V>2?k:0,k,k),G.setRenderTarget(Z),N)G.render(F,H);G.render($,H)}F.geometry.dispose(),F.material.dispose(),G.toneMapping=q,G.autoClear=E,$.background=R}_textureToCubeUV($,J){let Q=this._renderer,Z=$.mapping===N6||$.mapping===w7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=VK();this._cubemapMaterial.uniforms.flipEnvMap.value=$.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=_K();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=new A1(this._lodPlanes[0],W),X=W.uniforms;X.envMap.value=$;let H=this._cubeSize;$J(J,0,0,3*H,2*H),Q.setRenderTarget(J),Q.render(K,DZ)}_applyPMREM($){let J=this._renderer,Q=J.autoClear;J.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let K=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),X=LK[(Z-W-1)%LK.length];this._blur($,W-1,W,K,X)}J.autoClear=Q}_blur($,J,Q,Z,W){let K=this._pingPongRenderTarget;this._halfBlur($,K,J,Q,Z,"latitudinal",W),this._halfBlur(K,$,Q,Q,Z,"longitudinal",W)}_halfBlur($,J,Q,Z,W,K,X){let H=this._renderer,Y=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new A1(this._lodPlanes[Z],Y),E=Y.uniforms,q=this._sizeLods[Q]-1,M=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*h7-1),O=W/M,F=isFinite(W)?1+Math.floor(U*O):h7;if(F>h7)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${F} samples when the maximum is set to ${h7}`);let N=[],R=0;for(let I=0;I<h7;++I){let S=I/O,y=Math.exp(-S*S/2);if(N.push(y),I===0)R+=y;else if(I<F)R+=2*y}for(let I=0;I<N.length;I++)N[I]=N[I]/R;if(E.envMap.value=$.texture,E.samples.value=F,E.weights.value=N,E.latitudinal.value=K==="latitudinal",X)E.poleAxis.value=X;let{_lodMax:V}=this;E.dTheta.value=M,E.mipInt.value=V-Q;let L=this._sizeLods[Z],k=3*L*(Z>V-A6?Z-V+A6:0),A=4*(this._cubeSize-L);$J(J,k,A,3*L,2*L),H.setRenderTarget(J),H.render(G,DZ)}}function Dq($){let J=[],Q=[],Z=[],W=$,K=$-A6+1+FK.length;for(let X=0;X<K;X++){let H=Math.pow(2,W);Q.push(H);let Y=1/H;if(X>$-A6)Y=FK[X-$+A6-1];else if(X===0)Y=0;Z.push(Y);let U=1/(H-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],M=6,O=6,F=3,N=2,R=1,V=new Float32Array(F*O*M),L=new Float32Array(N*O*M),k=new Float32Array(R*O*M);for(let I=0;I<M;I++){let S=I%3*2/3-1,y=I>2?0:-1,B=[S,y,0,S+0.6666666666666666,y,0,S+0.6666666666666666,y+1,0,S,y,0,S+0.6666666666666666,y+1,0,S,y+1,0];V.set(B,F*O*I),L.set(q,N*O*I);let D=[I,I,I,I,I,I];k.set(D,R*O*I)}let A=new x1;if(A.setAttribute("position",new H1(V,F)),A.setAttribute("uv",new H1(L,N)),A.setAttribute("faceIndex",new H1(k,R)),J.push(A),W>A6)W--}return{lodPlanes:J,sizeLods:Q,sigmas:Z}}function DK($,J,Q){let Z=new O8($,J,Q);return Z.texture.mapping=J9,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function $J($,J,Q,Z,W){$.viewport.set(J,Q,Z,W),$.scissor.set(J,Q,Z,W)}function _q($,J,Q){let Z=new Float32Array(h7),W=new g(0,1,0);return new u1({name:"SphericalGaussianBlur",defines:{n:h7,CUBEUV_TEXEL_WIDTH:1/J,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${$}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:PZ(),fragmentShader:`

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
		`,blending:Z7,depthTest:!1,depthWrite:!1})}function _K(){return new u1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:PZ(),fragmentShader:`

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
		`,blending:Z7,depthTest:!1,depthWrite:!1})}function VK(){return new u1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:PZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Z7,depthTest:!1,depthWrite:!1})}function PZ(){return`

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
	`}function Vq($){let J=new WeakMap,Q=null;function Z(H){if(H&&H.isTexture){let Y=H.mapping,U=Y===V$||Y===B$,G=Y===N6||Y===w7;if(U||G){let E=J.get(H),q=E!==void 0?E.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==q){if(Q===null)Q=new CZ($);return E=U?Q.fromEquirectangular(H,E):Q.fromCubemap(H,E),E.texture.pmremVersion=H.pmremVersion,J.set(H,E),E.texture}else if(E!==void 0)return E.texture;else{let M=H.image;if(U&&M&&M.height>0||G&&M&&W(M)){if(Q===null)Q=new CZ($);return E=U?Q.fromEquirectangular(H):Q.fromCubemap(H),E.texture.pmremVersion=H.pmremVersion,J.set(H,E),H.addEventListener("dispose",K),E.texture}else return null}}}return H}function W(H){let Y=0,U=6;for(let G=0;G<U;G++)if(H[G]!==void 0)Y++;return Y===U}function K(H){let Y=H.target;Y.removeEventListener("dispose",K);let U=J.get(Y);if(U!==void 0)J.delete(Y),U.dispose()}function X(){if(J=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:Z,dispose:X}}function Bq($){let J={};function Q(Z){if(J[Z]!==void 0)return J[Z];let W;switch(Z){case"WEBGL_depth_texture":W=$.getExtension("WEBGL_depth_texture")||$.getExtension("MOZ_WEBGL_depth_texture")||$.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=$.getExtension("EXT_texture_filter_anisotropic")||$.getExtension("MOZ_EXT_texture_filter_anisotropic")||$.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=$.getExtension("WEBGL_compressed_texture_s3tc")||$.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||$.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=$.getExtension("WEBGL_compressed_texture_pvrtc")||$.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=$.getExtension(Z)}return J[Z]=W,W}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let W=Q(Z);if(W===null)E6("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function zq($,J,Q,Z){let W={},K=new WeakMap;function X(E){let q=E.target;if(q.index!==null)J.remove(q.index);for(let O in q.attributes)J.remove(q.attributes[O]);q.removeEventListener("dispose",X),delete W[q.id];let M=K.get(q);if(M)J.remove(M),K.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;Q.memory.geometries--}function H(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",X),W[q.id]=!0,Q.memory.geometries++,q}function Y(E){let q=E.attributes;for(let M in q)J.update(q[M],$.ARRAY_BUFFER)}function U(E){let q=[],M=E.index,O=E.attributes.position,F=0;if(M!==null){let V=M.array;F=M.version;for(let L=0,k=V.length;L<k;L+=3){let A=V[L+0],I=V[L+1],S=V[L+2];q.push(A,I,I,S,S,A)}}else if(O!==void 0){let V=O.array;F=O.version;for(let L=0,k=V.length/3-1;L<k;L+=3){let A=L+0,I=L+1,S=L+2;q.push(A,I,I,S,S,A)}}else return;let N=new(($Z(q))?y$:v$)(q,1);N.version=F;let R=K.get(E);if(R)J.remove(R);K.set(E,N)}function G(E){let q=K.get(E);if(q){let M=E.index;if(M!==null){if(q.version<M.version)U(E)}}else U(E);return K.get(E)}return{get:H,update:Y,getWireframeAttribute:G}}function kq($,J,Q){let Z;function W(q){Z=q}let K,X;function H(q){K=q.type,X=q.bytesPerElement}function Y(q,M){$.drawElements(Z,M,K,q*X),Q.update(M,Z,1)}function U(q,M,O){if(O===0)return;$.drawElementsInstanced(Z,M,K,q*X,O),Q.update(M,Z,O)}function G(q,M,O){if(O===0)return;J.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,M,0,K,q,0,O);let N=0;for(let R=0;R<O;R++)N+=M[R];Q.update(N,Z,1)}function E(q,M,O,F){if(O===0)return;let N=J.get("WEBGL_multi_draw");if(N===null)for(let R=0;R<q.length;R++)U(q[R]/X,M[R],F[R]);else{N.multiDrawElementsInstancedWEBGL(Z,M,0,K,q,0,F,0,O);let R=0;for(let V=0;V<O;V++)R+=M[V]*F[V];Q.update(R,Z,1)}}this.setMode=W,this.setIndex=H,this.render=Y,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function Cq($){let J={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,X,H){switch(Q.calls++,X){case $.TRIANGLES:Q.triangles+=H*(K/3);break;case $.LINES:Q.lines+=H*(K/2);break;case $.LINE_STRIP:Q.lines+=H*(K-1);break;case $.LINE_LOOP:Q.lines+=H*K;break;case $.POINTS:Q.points+=H*K;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",X);break}}function W(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:J,render:Q,programs:null,autoReset:!0,reset:W,update:Z}}function Iq($,J,Q){let Z=new WeakMap,W=new i0;function K(X,H,Y){let U=X.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,E=G!==void 0?G.length:0,q=Z.get(H);if(q===void 0||q.count!==E){let B=function(){S.dispose(),Z.delete(H),H.removeEventListener("dispose",B)};if(q!==void 0)q.texture.dispose();let M=H.morphAttributes.position!==void 0,O=H.morphAttributes.normal!==void 0,F=H.morphAttributes.color!==void 0,N=H.morphAttributes.position||[],R=H.morphAttributes.normal||[],V=H.morphAttributes.color||[],L=0;if(M===!0)L=1;if(O===!0)L=2;if(F===!0)L=3;let k=H.attributes.position.count*L,A=1;if(k>J.maxTextureSize)A=Math.ceil(k/J.maxTextureSize),k=J.maxTextureSize;let I=new Float32Array(k*A*4*E),S=new j$(I,k,A,E);S.type=K7,S.needsUpdate=!0;let y=L*4;for(let D=0;D<E;D++){let C=N[D],T=R[D],P=V[D],f=k*A*4*D;for(let h=0;h<C.count;h++){let b=h*y;if(M===!0)W.fromBufferAttribute(C,h),I[f+b+0]=W.x,I[f+b+1]=W.y,I[f+b+2]=W.z,I[f+b+3]=0;if(O===!0)W.fromBufferAttribute(T,h),I[f+b+4]=W.x,I[f+b+5]=W.y,I[f+b+6]=W.z,I[f+b+7]=0;if(F===!0)W.fromBufferAttribute(P,h),I[f+b+8]=W.x,I[f+b+9]=W.y,I[f+b+10]=W.z,I[f+b+11]=P.itemSize===4?W.w:1}}q={count:E,texture:S,size:new u0(k,A)},Z.set(H,q),H.addEventListener("dispose",B)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)Y.getUniforms().setValue($,"morphTexture",X.morphTexture,Q);else{let M=0;for(let F=0;F<U.length;F++)M+=U[F];let O=H.morphTargetsRelative?1:1-M;Y.getUniforms().setValue($,"morphTargetBaseInfluence",O),Y.getUniforms().setValue($,"morphTargetInfluences",U)}Y.getUniforms().setValue($,"morphTargetsTexture",q.texture,Q),Y.getUniforms().setValue($,"morphTargetsTextureSize",q.size)}return{update:K}}function Pq($,J,Q,Z){let W=new WeakMap;function K(Y){let U=Z.render.frame,G=Y.geometry,E=J.get(Y,G);if(W.get(E)!==U)J.update(E),W.set(E,U);if(Y.isInstancedMesh){if(Y.hasEventListener("dispose",H)===!1)Y.addEventListener("dispose",H);if(W.get(Y)!==U){if(Q.update(Y.instanceMatrix,$.ARRAY_BUFFER),Y.instanceColor!==null)Q.update(Y.instanceColor,$.ARRAY_BUFFER);W.set(Y,U)}}if(Y.isSkinnedMesh){let q=Y.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function X(){W=new WeakMap}function H(Y){let U=Y.target;if(U.removeEventListener("dispose",H),Q.remove(U.instanceMatrix),U.instanceColor!==null)Q.remove(U.instanceColor)}return{update:K,dispose:X}}var pK=new L1,BK=new m$(1,1),lK=new j$,uK=new ZZ,mK=new b$,zK=[],kK=[],CK=new Float32Array(16),IK=new Float32Array(9),PK=new Float32Array(4);function T6($,J,Q){let Z=$[0];if(Z<=0||Z>0)return $;let W=J*Q,K=zK[W];if(K===void 0)K=new Float32Array(W),zK[W]=K;if(J!==0){Z.toArray(K,0);for(let X=1,H=0;X!==J;++X)H+=Q,$[X].toArray(K,H)}return K}function z1($,J){if($.length!==J.length)return!1;for(let Q=0,Z=$.length;Q<Z;Q++)if($[Q]!==J[Q])return!1;return!0}function k1($,J){for(let Q=0,Z=J.length;Q<Z;Q++)$[Q]=J[Q]}function QJ($,J){let Q=kK[J];if(Q===void 0)Q=new Int32Array(J),kK[J]=Q;for(let Z=0;Z!==J;++Z)Q[Z]=$.allocateTextureUnit();return Q}function Aq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1f(this.addr,J),Q[0]=J}function Tq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2f(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(z1(Q,J))return;$.uniform2fv(this.addr,J),k1(Q,J)}}function wq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3f(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else if(J.r!==void 0){if(Q[0]!==J.r||Q[1]!==J.g||Q[2]!==J.b)$.uniform3f(this.addr,J.r,J.g,J.b),Q[0]=J.r,Q[1]=J.g,Q[2]=J.b}else{if(z1(Q,J))return;$.uniform3fv(this.addr,J),k1(Q,J)}}function Sq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4f(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(z1(Q,J))return;$.uniform4fv(this.addr,J),k1(Q,J)}}function jq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(z1(Q,J))return;$.uniformMatrix2fv(this.addr,!1,J),k1(Q,J)}else{if(z1(Q,Z))return;PK.set(Z),$.uniformMatrix2fv(this.addr,!1,PK),k1(Q,Z)}}function fq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(z1(Q,J))return;$.uniformMatrix3fv(this.addr,!1,J),k1(Q,J)}else{if(z1(Q,Z))return;IK.set(Z),$.uniformMatrix3fv(this.addr,!1,IK),k1(Q,Z)}}function vq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(z1(Q,J))return;$.uniformMatrix4fv(this.addr,!1,J),k1(Q,J)}else{if(z1(Q,Z))return;CK.set(Z),$.uniformMatrix4fv(this.addr,!1,CK),k1(Q,Z)}}function yq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1i(this.addr,J),Q[0]=J}function bq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2i(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(z1(Q,J))return;$.uniform2iv(this.addr,J),k1(Q,J)}}function hq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3i(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else{if(z1(Q,J))return;$.uniform3iv(this.addr,J),k1(Q,J)}}function xq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4i(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(z1(Q,J))return;$.uniform4iv(this.addr,J),k1(Q,J)}}function gq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1ui(this.addr,J),Q[0]=J}function pq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2ui(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(z1(Q,J))return;$.uniform2uiv(this.addr,J),k1(Q,J)}}function lq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3ui(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else{if(z1(Q,J))return;$.uniform3uiv(this.addr,J),k1(Q,J)}}function uq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4ui(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(z1(Q,J))return;$.uniform4uiv(this.addr,J),k1(Q,J)}}function mq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===$.SAMPLER_2D_SHADOW)BK.compareFunction=aQ,K=BK;else K=pK;Q.setTexture2D(J||K,W)}function dq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTexture3D(J||uK,W)}function cq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTextureCube(J||mK,W)}function nq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTexture2DArray(J||lK,W)}function sq($){switch($){case 5126:return Aq;case 35664:return Tq;case 35665:return wq;case 35666:return Sq;case 35674:return jq;case 35675:return fq;case 35676:return vq;case 5124:case 35670:return yq;case 35667:case 35671:return bq;case 35668:case 35672:return hq;case 35669:case 35673:return xq;case 5125:return gq;case 36294:return pq;case 36295:return lq;case 36296:return uq;case 35678:case 36198:case 36298:case 36306:case 35682:return mq;case 35679:case 36299:case 36307:return dq;case 35680:case 36300:case 36308:case 36293:return cq;case 36289:case 36303:case 36311:case 36292:return nq}}function oq($,J){$.uniform1fv(this.addr,J)}function iq($,J){let Q=T6(J,this.size,2);$.uniform2fv(this.addr,Q)}function aq($,J){let Q=T6(J,this.size,3);$.uniform3fv(this.addr,Q)}function rq($,J){let Q=T6(J,this.size,4);$.uniform4fv(this.addr,Q)}function tq($,J){let Q=T6(J,this.size,4);$.uniformMatrix2fv(this.addr,!1,Q)}function eq($,J){let Q=T6(J,this.size,9);$.uniformMatrix3fv(this.addr,!1,Q)}function $N($,J){let Q=T6(J,this.size,16);$.uniformMatrix4fv(this.addr,!1,Q)}function JN($,J){$.uniform1iv(this.addr,J)}function QN($,J){$.uniform2iv(this.addr,J)}function ZN($,J){$.uniform3iv(this.addr,J)}function WN($,J){$.uniform4iv(this.addr,J)}function KN($,J){$.uniform1uiv(this.addr,J)}function XN($,J){$.uniform2uiv(this.addr,J)}function HN($,J){$.uniform3uiv(this.addr,J)}function YN($,J){$.uniform4uiv(this.addr,J)}function UN($,J,Q){let Z=this.cache,W=J.length,K=QJ(Q,W);if(!z1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTexture2D(J[X]||pK,K[X])}function GN($,J,Q){let Z=this.cache,W=J.length,K=QJ(Q,W);if(!z1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTexture3D(J[X]||uK,K[X])}function EN($,J,Q){let Z=this.cache,W=J.length,K=QJ(Q,W);if(!z1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTextureCube(J[X]||mK,K[X])}function qN($,J,Q){let Z=this.cache,W=J.length,K=QJ(Q,W);if(!z1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTexture2DArray(J[X]||lK,K[X])}function NN($){switch($){case 5126:return oq;case 35664:return iq;case 35665:return aq;case 35666:return rq;case 35674:return tq;case 35675:return eq;case 35676:return $N;case 5124:case 35670:return JN;case 35667:case 35671:return QN;case 35668:case 35672:return ZN;case 35669:case 35673:return WN;case 5125:return KN;case 36294:return XN;case 36295:return HN;case 36296:return YN;case 35678:case 36198:case 36298:case 36306:case 35682:return UN;case 35679:case 36299:case 36307:return GN;case 35680:case 36300:case 36308:case 36293:return EN;case 36289:case 36303:case 36311:case 36292:return qN}}class dK{constructor($,J,Q){this.id=$,this.addr=Q,this.cache=[],this.type=J.type,this.setValue=sq(J.type)}}class cK{constructor($,J,Q){this.id=$,this.addr=Q,this.cache=[],this.type=J.type,this.size=J.size,this.setValue=NN(J.type)}}class nK{constructor($){this.id=$,this.seq=[],this.map={}}setValue($,J,Q){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let X=Z[W];X.setValue($,J[X.id],Q)}}}var kZ=/(\w+)(\])?(\[|\.)?/g;function AK($,J){$.seq.push(J),$.map[J.id]=J}function RN($,J,Q){let Z=$.name,W=Z.length;kZ.lastIndex=0;while(!0){let K=kZ.exec(Z),X=kZ.lastIndex,H=K[1],Y=K[2]==="]",U=K[3];if(Y)H=H|0;if(U===void 0||U==="["&&X+2===W){AK(Q,U===void 0?new dK(H,$,J):new cK(H,$,J));break}else{let E=Q.map[H];if(E===void 0)E=new nK(H),AK(Q,E);Q=E}}}class L9{constructor($,J){this.seq=[],this.map={};let Q=$.getProgramParameter(J,$.ACTIVE_UNIFORMS);for(let Z=0;Z<Q;++Z){let W=$.getActiveUniform(J,Z),K=$.getUniformLocation(J,W.name);RN(W,K,this)}}setValue($,J,Q,Z){let W=this.map[J];if(W!==void 0)W.setValue($,Q,Z)}setOptional($,J,Q){let Z=J[Q];if(Z!==void 0)this.setValue($,Q,Z)}static upload($,J,Q,Z){for(let W=0,K=J.length;W!==K;++W){let X=J[W],H=Q[X.id];if(H.needsUpdate!==!1)X.setValue($,H.value,Z)}}static seqWithValue($,J){let Q=[];for(let Z=0,W=$.length;Z!==W;++Z){let K=$[Z];if(K.id in J)Q.push(K)}return Q}}function TK($,J,Q){let Z=$.createShader(J);return $.shaderSource(Z,Q),$.compileShader(Z),Z}var MN=37297,FN=0;function ON($,J){let Q=$.split(`
`),Z=[],W=Math.max(J-6,0),K=Math.min(J+6,Q.length);for(let X=W;X<K;X++){let H=X+1;Z.push(`${H===J?">":" "} ${H}: ${Q[X]}`)}return Z.join(`
`)}var wK=new p0;function LN($){o0._getMatrix(wK,o0.workingColorSpace,$);let J=`mat3( ${wK.elements.map((Q)=>Q.toFixed(4))} )`;switch(o0.getTransfer($)){case iQ:return[J,"LinearTransferOETF"];case Y1:return[J,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",$),[J,"LinearTransferOETF"]}}function SK($,J,Q){let Z=$.getShaderParameter(J,$.COMPILE_STATUS),K=($.getShaderInfoLog(J)||"").trim();if(Z&&K==="")return"";let X=/ERROR: 0:(\d+)/.exec(K);if(X){let H=parseInt(X[1]);return Q.toUpperCase()+`

`+K+`

`+ON($.getShaderSource(J),H)}else return K}function DN($,J){let Q=LN(J);return[`vec4 ${$}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}function _N($,J){let Q;switch(J){case vW:Q="Linear";break;case yW:Q="Reinhard";break;case bW:Q="Cineon";break;case hW:Q="ACESFilmic";break;case gW:Q="AgX";break;case pW:Q="Neutral";break;case xW:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",J),Q="Linear"}return"vec3 "+$+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var JJ=new g;function VN(){o0.getLuminanceCoefficients(JJ);let $=JJ.x.toFixed(4),J=JJ.y.toFixed(4),Q=JJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${$}, ${J}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function BN($){return[$.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",$.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(O9).join(`
`)}function zN($){let J=[];for(let Q in $){let Z=$[Q];if(Z===!1)continue;J.push("#define "+Q+" "+Z)}return J.join(`
`)}function kN($,J){let Q={},Z=$.getProgramParameter(J,$.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=$.getActiveAttrib(J,W),X=K.name,H=1;if(K.type===$.FLOAT_MAT2)H=2;if(K.type===$.FLOAT_MAT3)H=3;if(K.type===$.FLOAT_MAT4)H=4;Q[X]={type:K.type,location:$.getAttribLocation(J,X),locationSize:H}}return Q}function O9($){return $!==""}function jK($,J){let Q=J.numSpotLightShadows+J.numSpotLightMaps-J.numSpotLightShadowsWithMaps;return $.replace(/NUM_DIR_LIGHTS/g,J.numDirLights).replace(/NUM_SPOT_LIGHTS/g,J.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,J.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,J.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,J.numPointLights).replace(/NUM_HEMI_LIGHTS/g,J.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,J.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,J.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,J.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,J.numPointLightShadows)}function fK($,J){return $.replace(/NUM_CLIPPING_PLANES/g,J.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,J.numClippingPlanes-J.numClipIntersection)}var CN=/^[ \t]*#include +<([\w\d./]+)>/gm;function IZ($){return $.replace(CN,PN)}var IN=new Map;function PN($,J){let Q=m0[J];if(Q===void 0){let Z=IN.get(J);if(Z!==void 0)Q=m0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',J,Z);else throw Error("Can not resolve #include <"+J+">")}return IZ(Q)}var AN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vK($){return $.replace(AN,TN)}function TN($,J,Q,Z){let W="";for(let K=parseInt(J);K<parseInt(Q);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function yK($){let J=`precision ${$.precision} float;
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
#define LOW_PRECISION`;return J}function wN($){let J="SHADOWMAP_TYPE_BASIC";if($.shadowMapType===UQ)J="SHADOWMAP_TYPE_PCF";else if($.shadowMapType===GW)J="SHADOWMAP_TYPE_PCF_SOFT";else if($.shadowMapType===z8)J="SHADOWMAP_TYPE_VSM";return J}function SN($){let J="ENVMAP_TYPE_CUBE";if($.envMap)switch($.envMapMode){case N6:case w7:J="ENVMAP_TYPE_CUBE";break;case J9:J="ENVMAP_TYPE_CUBE_UV";break}return J}function jN($){let J="ENVMAP_MODE_REFLECTION";if($.envMap)switch($.envMapMode){case w7:J="ENVMAP_MODE_REFRACTION";break}return J}function fN($){let J="ENVMAP_BLENDING_NONE";if($.envMap)switch($.combine){case SW:J="ENVMAP_BLENDING_MULTIPLY";break;case jW:J="ENVMAP_BLENDING_MIX";break;case fW:J="ENVMAP_BLENDING_ADD";break}return J}function vN($){let J=$.envMapCubeUVHeight;if(J===null)return null;let Q=Math.log2(J)-2,Z=1/J;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function yN($,J,Q,Z){let W=$.getContext(),K=Q.defines,X=Q.vertexShader,H=Q.fragmentShader,Y=wN(Q),U=SN(Q),G=jN(Q),E=fN(Q),q=vN(Q),M=BN(Q),O=zN(K),F=W.createProgram(),N,R,V=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(O9).join(`
`),N.length>0)N+=`
`;if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(O9).join(`
`),R.length>0)R+=`
`}else N=[yK(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+Y:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(O9).join(`
`),R=[yK(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor||Q.batchingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+Y:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==l8?"#define TONE_MAPPING":"",Q.toneMapping!==l8?m0.tonemapping_pars_fragment:"",Q.toneMapping!==l8?_N("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",m0.colorspace_pars_fragment,DN("linearToOutputTexel",Q.outputColorSpace),VN(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(O9).join(`
`);if(X=IZ(X),X=jK(X,Q),X=fK(X,Q),H=IZ(H),H=jK(H,Q),H=fK(H,Q),X=vK(X),H=vK(H),Q.isRawShaderMaterial!==!0)V=`#version 300 es
`,N=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,R=["#define varying in",Q.glslVersion===rQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===rQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R;let L=V+N+X,k=V+R+H,A=TK(W,W.VERTEX_SHADER,L),I=TK(W,W.FRAGMENT_SHADER,k);if(W.attachShader(F,A),W.attachShader(F,I),Q.index0AttributeName!==void 0)W.bindAttribLocation(F,0,Q.index0AttributeName);else if(Q.morphTargets===!0)W.bindAttribLocation(F,0,"position");W.linkProgram(F);function S(C){if($.debug.checkShaderErrors){let T=W.getProgramInfoLog(F)||"",P=W.getShaderInfoLog(A)||"",f=W.getShaderInfoLog(I)||"",h=T.trim(),b=P.trim(),l=f.trim(),x=!0,s=!0;if(W.getProgramParameter(F,W.LINK_STATUS)===!1)if(x=!1,typeof $.debug.onShaderError==="function")$.debug.onShaderError(W,F,A,I);else{let t=SK(W,A,"vertex"),X0=SK(W,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(F,W.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+h+`
`+t+`
`+X0)}else if(h!=="")console.warn("THREE.WebGLProgram: Program Info Log:",h);else if(b===""||l==="")s=!1;if(s)C.diagnostics={runnable:x,programLog:h,vertexShader:{log:b,prefix:N},fragmentShader:{log:l,prefix:R}}}W.deleteShader(A),W.deleteShader(I),y=new L9(W,F),B=kN(W,F)}let y;this.getUniforms=function(){if(y===void 0)S(this);return y};let B;this.getAttributes=function(){if(B===void 0)S(this);return B};let D=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(D===!1)D=W.getProgramParameter(F,MN);return D},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(F),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=FN++,this.cacheKey=J,this.usedTimes=1,this.program=F,this.vertexShader=A,this.fragmentShader=I,this}var bN=0;class sK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update($){let{vertexShader:J,fragmentShader:Q}=$,Z=this._getShaderStage(J),W=this._getShaderStage(Q),K=this._getShaderCacheForMaterial($);if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove($){let J=this.materialCache.get($);for(let Q of J)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete($),this}getVertexShaderID($){return this._getShaderStage($.vertexShader).id}getFragmentShaderID($){return this._getShaderStage($.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial($){let J=this.materialCache,Q=J.get($);if(Q===void 0)Q=new Set,J.set($,Q);return Q}_getShaderStage($){let J=this.shaderCache,Q=J.get($);if(Q===void 0)Q=new oK($),J.set($,Q);return Q}}class oK{constructor($){this.id=bN++,this.code=$,this.usedTimes=0}}function hN($,J,Q,Z,W,K,X){let H=new f$,Y=new sK,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,M=W.precision,O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(B){if(U.add(B),B===0)return"uv";return`uv${B}`}function N(B,D,C,T,P){let f=T.fog,h=P.geometry,b=B.isMeshStandardMaterial?T.environment:null,l=(B.isMeshStandardMaterial?Q:J).get(B.envMap||b),x=!!l&&l.mapping===J9?l.image.height:null,s=O[B.type];if(B.precision!==null){if(M=W.getMaxPrecision(B.precision),M!==B.precision)console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",M,"instead.")}let t=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,X0=t!==void 0?t.length:0,G0=0;if(h.morphAttributes.position!==void 0)G0=1;if(h.morphAttributes.normal!==void 0)G0=2;if(h.morphAttributes.color!==void 0)G0=3;let B0,R0,o,Z0;if(s){let Q1=P8[s];B0=Q1.vertexShader,R0=Q1.fragmentShader}else B0=B.vertexShader,R0=B.fragmentShader,Y.update(B),o=Y.getVertexShaderID(B),Z0=Y.getFragmentShaderID(B);let J0=$.getRenderTarget(),O0=$.state.buffers.depth.getReversed(),D0=P.isInstancedMesh===!0,z0=P.isBatchedMesh===!0,e0=!!B.map,j=!!B.matcap,l0=!!l,j0=!!B.aoMap,T0=!!B.lightMap,L0=!!B.bumpMap,a0=!!B.normalMap,C0=!!B.displacementMap,M0=!!B.emissiveMap,J1=!!B.metalnessMap,q1=!!B.roughnessMap,d0=B.anisotropy>0,w=B.clearcoat>0,_=B.dispersion>0,m=B.iridescence>0,a=B.sheen>0,e=B.transmission>0,i=d0&&!!B.anisotropyMap,_0=w&&!!B.clearcoatMap,W0=w&&!!B.clearcoatNormalMap,I0=w&&!!B.clearcoatRoughnessMap,S0=m&&!!B.iridescenceMap,K0=m&&!!B.iridescenceThicknessMap,d=a&&!!B.sheenColorMap,$0=a&&!!B.sheenRoughnessMap,E0=!!B.specularMap,U0=!!B.specularColorMap,b0=!!B.specularIntensityMap,v=e&&!!B.transmissionMap,q0=e&&!!B.thicknessMap,Y0=!!B.gradientMap,V0=!!B.alphaMap,Q0=B.alphaTest>0,r=!!B.alphaHash,A0=!!B.extensions,x0=l8;if(B.toneMapped){if(J0===null||J0.isXRRenderTarget===!0)x0=$.toneMapping}let W1={shaderID:s,shaderType:B.type,shaderName:B.name,vertexShader:B0,fragmentShader:R0,defines:B.defines,customVertexShaderID:o,customFragmentShaderID:Z0,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:M,batching:z0,batchingColor:z0&&P._colorsTexture!==null,instancing:D0,instancingColor:D0&&P.instanceColor!==null,instancingMorph:D0&&P.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:J0===null?$.outputColorSpace:J0.isXRRenderTarget===!0?J0.texture.colorSpace:h1,alphaToCoverage:!!B.alphaToCoverage,map:e0,matcap:j,envMap:l0,envMapMode:l0&&l.mapping,envMapCubeUVHeight:x,aoMap:j0,lightMap:T0,bumpMap:L0,normalMap:a0,displacementMap:q&&C0,emissiveMap:M0,normalMapObjectSpace:a0&&B.normalMapType===rW,normalMapTangentSpace:a0&&B.normalMapType===aW,metalnessMap:J1,roughnessMap:q1,anisotropy:d0,anisotropyMap:i,clearcoat:w,clearcoatMap:_0,clearcoatNormalMap:W0,clearcoatRoughnessMap:I0,dispersion:_,iridescence:m,iridescenceMap:S0,iridescenceThicknessMap:K0,sheen:a,sheenColorMap:d,sheenRoughnessMap:$0,specularMap:E0,specularColorMap:U0,specularIntensityMap:b0,transmission:e,transmissionMap:v,thicknessMap:q0,gradientMap:Y0,opaque:B.transparent===!1&&B.blending===e6&&B.alphaToCoverage===!1,alphaMap:V0,alphaTest:Q0,alphaHash:r,combine:B.combine,mapUv:e0&&F(B.map.channel),aoMapUv:j0&&F(B.aoMap.channel),lightMapUv:T0&&F(B.lightMap.channel),bumpMapUv:L0&&F(B.bumpMap.channel),normalMapUv:a0&&F(B.normalMap.channel),displacementMapUv:C0&&F(B.displacementMap.channel),emissiveMapUv:M0&&F(B.emissiveMap.channel),metalnessMapUv:J1&&F(B.metalnessMap.channel),roughnessMapUv:q1&&F(B.roughnessMap.channel),anisotropyMapUv:i&&F(B.anisotropyMap.channel),clearcoatMapUv:_0&&F(B.clearcoatMap.channel),clearcoatNormalMapUv:W0&&F(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I0&&F(B.clearcoatRoughnessMap.channel),iridescenceMapUv:S0&&F(B.iridescenceMap.channel),iridescenceThicknessMapUv:K0&&F(B.iridescenceThicknessMap.channel),sheenColorMapUv:d&&F(B.sheenColorMap.channel),sheenRoughnessMapUv:$0&&F(B.sheenRoughnessMap.channel),specularMapUv:E0&&F(B.specularMap.channel),specularColorMapUv:U0&&F(B.specularColorMap.channel),specularIntensityMapUv:b0&&F(B.specularIntensityMap.channel),transmissionMapUv:v&&F(B.transmissionMap.channel),thicknessMapUv:q0&&F(B.thicknessMap.channel),alphaMapUv:V0&&F(B.alphaMap.channel),vertexTangents:!!h.attributes.tangent&&(a0||d0),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!h.attributes.color&&h.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!h.attributes.uv&&(e0||V0),fog:!!f,useFog:B.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:B.flatShading===!0&&B.wireframe===!1,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:O0,skinning:P.isSkinnedMesh===!0,morphTargets:h.morphAttributes.position!==void 0,morphNormals:h.morphAttributes.normal!==void 0,morphColors:h.morphAttributes.color!==void 0,morphTargetsCount:X0,morphTextureStride:G0,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:X.numPlanes,numClipIntersection:X.numIntersection,dithering:B.dithering,shadowMapEnabled:$.shadowMap.enabled&&C.length>0,shadowMapType:$.shadowMap.type,toneMapping:x0,decodeVideoTexture:e0&&B.map.isVideoTexture===!0&&o0.getTransfer(B.map.colorSpace)===Y1,decodeVideoTextureEmissive:M0&&B.emissiveMap.isVideoTexture===!0&&o0.getTransfer(B.emissiveMap.colorSpace)===Y1,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===H8,flipSided:B.side===a1,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:A0&&B.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(A0&&B.extensions.multiDraw===!0||z0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return W1.vertexUv1s=U.has(1),W1.vertexUv2s=U.has(2),W1.vertexUv3s=U.has(3),U.clear(),W1}function R(B){let D=[];if(B.shaderID)D.push(B.shaderID);else D.push(B.customVertexShaderID),D.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let C in B.defines)D.push(C),D.push(B.defines[C]);if(B.isRawShaderMaterial===!1)V(D,B),L(D,B),D.push($.outputColorSpace);return D.push(B.customProgramCacheKey),D.join()}function V(B,D){B.push(D.precision),B.push(D.outputColorSpace),B.push(D.envMapMode),B.push(D.envMapCubeUVHeight),B.push(D.mapUv),B.push(D.alphaMapUv),B.push(D.lightMapUv),B.push(D.aoMapUv),B.push(D.bumpMapUv),B.push(D.normalMapUv),B.push(D.displacementMapUv),B.push(D.emissiveMapUv),B.push(D.metalnessMapUv),B.push(D.roughnessMapUv),B.push(D.anisotropyMapUv),B.push(D.clearcoatMapUv),B.push(D.clearcoatNormalMapUv),B.push(D.clearcoatRoughnessMapUv),B.push(D.iridescenceMapUv),B.push(D.iridescenceThicknessMapUv),B.push(D.sheenColorMapUv),B.push(D.sheenRoughnessMapUv),B.push(D.specularMapUv),B.push(D.specularColorMapUv),B.push(D.specularIntensityMapUv),B.push(D.transmissionMapUv),B.push(D.thicknessMapUv),B.push(D.combine),B.push(D.fogExp2),B.push(D.sizeAttenuation),B.push(D.morphTargetsCount),B.push(D.morphAttributeCount),B.push(D.numDirLights),B.push(D.numPointLights),B.push(D.numSpotLights),B.push(D.numSpotLightMaps),B.push(D.numHemiLights),B.push(D.numRectAreaLights),B.push(D.numDirLightShadows),B.push(D.numPointLightShadows),B.push(D.numSpotLightShadows),B.push(D.numSpotLightShadowsWithMaps),B.push(D.numLightProbes),B.push(D.shadowMapType),B.push(D.toneMapping),B.push(D.numClippingPlanes),B.push(D.numClipIntersection),B.push(D.depthPacking)}function L(B,D){if(H.disableAll(),D.supportsVertexTextures)H.enable(0);if(D.instancing)H.enable(1);if(D.instancingColor)H.enable(2);if(D.instancingMorph)H.enable(3);if(D.matcap)H.enable(4);if(D.envMap)H.enable(5);if(D.normalMapObjectSpace)H.enable(6);if(D.normalMapTangentSpace)H.enable(7);if(D.clearcoat)H.enable(8);if(D.iridescence)H.enable(9);if(D.alphaTest)H.enable(10);if(D.vertexColors)H.enable(11);if(D.vertexAlphas)H.enable(12);if(D.vertexUv1s)H.enable(13);if(D.vertexUv2s)H.enable(14);if(D.vertexUv3s)H.enable(15);if(D.vertexTangents)H.enable(16);if(D.anisotropy)H.enable(17);if(D.alphaHash)H.enable(18);if(D.batching)H.enable(19);if(D.dispersion)H.enable(20);if(D.batchingColor)H.enable(21);if(D.gradientMap)H.enable(22);if(B.push(H.mask),H.disableAll(),D.fog)H.enable(0);if(D.useFog)H.enable(1);if(D.flatShading)H.enable(2);if(D.logarithmicDepthBuffer)H.enable(3);if(D.reversedDepthBuffer)H.enable(4);if(D.skinning)H.enable(5);if(D.morphTargets)H.enable(6);if(D.morphNormals)H.enable(7);if(D.morphColors)H.enable(8);if(D.premultipliedAlpha)H.enable(9);if(D.shadowMapEnabled)H.enable(10);if(D.doubleSided)H.enable(11);if(D.flipSided)H.enable(12);if(D.useDepthPacking)H.enable(13);if(D.dithering)H.enable(14);if(D.transmission)H.enable(15);if(D.sheen)H.enable(16);if(D.opaque)H.enable(17);if(D.pointsUvs)H.enable(18);if(D.decodeVideoTexture)H.enable(19);if(D.decodeVideoTextureEmissive)H.enable(20);if(D.alphaToCoverage)H.enable(21);B.push(H.mask)}function k(B){let D=O[B.type],C;if(D){let T=P8[D];C=YK.clone(T.uniforms)}else C=B.uniforms;return C}function A(B,D){let C;for(let T=0,P=G.length;T<P;T++){let f=G[T];if(f.cacheKey===D){C=f,++C.usedTimes;break}}if(C===void 0)C=new yN($,D,B,K),G.push(C);return C}function I(B){if(--B.usedTimes===0){let D=G.indexOf(B);G[D]=G[G.length-1],G.pop(),B.destroy()}}function S(B){Y.remove(B)}function y(){Y.dispose()}return{getParameters:N,getProgramCacheKey:R,getUniforms:k,acquireProgram:A,releaseProgram:I,releaseShaderCache:S,programs:G,dispose:y}}function xN(){let $=new WeakMap;function J(X){return $.has(X)}function Q(X){let H=$.get(X);if(H===void 0)H={},$.set(X,H);return H}function Z(X){$.delete(X)}function W(X,H,Y){$.get(X)[H]=Y}function K(){$=new WeakMap}return{has:J,get:Q,remove:Z,update:W,dispose:K}}function gN($,J){if($.groupOrder!==J.groupOrder)return $.groupOrder-J.groupOrder;else if($.renderOrder!==J.renderOrder)return $.renderOrder-J.renderOrder;else if($.material.id!==J.material.id)return $.material.id-J.material.id;else if($.z!==J.z)return $.z-J.z;else return $.id-J.id}function bK($,J){if($.groupOrder!==J.groupOrder)return $.groupOrder-J.groupOrder;else if($.renderOrder!==J.renderOrder)return $.renderOrder-J.renderOrder;else if($.z!==J.z)return J.z-$.z;else return $.id-J.id}function hK(){let $=[],J=0,Q=[],Z=[],W=[];function K(){J=0,Q.length=0,Z.length=0,W.length=0}function X(E,q,M,O,F,N){let R=$[J];if(R===void 0)R={id:E.id,object:E,geometry:q,material:M,groupOrder:O,renderOrder:E.renderOrder,z:F,group:N},$[J]=R;else R.id=E.id,R.object=E,R.geometry=q,R.material=M,R.groupOrder=O,R.renderOrder=E.renderOrder,R.z=F,R.group=N;return J++,R}function H(E,q,M,O,F,N){let R=X(E,q,M,O,F,N);if(M.transmission>0)Z.push(R);else if(M.transparent===!0)W.push(R);else Q.push(R)}function Y(E,q,M,O,F,N){let R=X(E,q,M,O,F,N);if(M.transmission>0)Z.unshift(R);else if(M.transparent===!0)W.unshift(R);else Q.unshift(R)}function U(E,q){if(Q.length>1)Q.sort(E||gN);if(Z.length>1)Z.sort(q||bK);if(W.length>1)W.sort(q||bK)}function G(){for(let E=J,q=$.length;E<q;E++){let M=$[E];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:Q,transmissive:Z,transparent:W,init:K,push:H,unshift:Y,finish:G,sort:U}}function pN(){let $=new WeakMap;function J(Z,W){let K=$.get(Z),X;if(K===void 0)X=new hK,$.set(Z,[X]);else if(W>=K.length)X=new hK,K.push(X);else X=K[W];return X}function Q(){$=new WeakMap}return{get:J,dispose:Q}}function lN(){let $={};return{get:function(J){if($[J.id]!==void 0)return $[J.id];let Q;switch(J.type){case"DirectionalLight":Q={direction:new g,color:new y0};break;case"SpotLight":Q={position:new g,direction:new g,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new g,color:new y0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new g,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":Q={color:new y0,position:new g,halfWidth:new g,halfHeight:new g};break}return $[J.id]=Q,Q}}}function uN(){let $={};return{get:function(J){if($[J.id]!==void 0)return $[J.id];let Q;switch(J.type){case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0,shadowCameraNear:1,shadowCameraFar:1000};break}return $[J.id]=Q,Q}}}var mN=0;function dN($,J){return(J.castShadow?2:0)-($.castShadow?2:0)+(J.map?1:0)-($.map?1:0)}function cN($){let J=new lN,Q=uN(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new g);let W=new g,K=new g0,X=new g0;function H(U){let G=0,E=0,q=0;for(let B=0;B<9;B++)Z.probe[B].set(0,0,0);let M=0,O=0,F=0,N=0,R=0,V=0,L=0,k=0,A=0,I=0,S=0;U.sort(dN);for(let B=0,D=U.length;B<D;B++){let C=U[B],T=C.color,P=C.intensity,f=C.distance,h=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)G+=T.r*P,E+=T.g*P,q+=T.b*P;else if(C.isLightProbe){for(let b=0;b<9;b++)Z.probe[b].addScaledVector(C.sh.coefficients[b],P);S++}else if(C.isDirectionalLight){let b=J.get(C);if(b.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let l=C.shadow,x=Q.get(C);x.shadowIntensity=l.intensity,x.shadowBias=l.bias,x.shadowNormalBias=l.normalBias,x.shadowRadius=l.radius,x.shadowMapSize=l.mapSize,Z.directionalShadow[M]=x,Z.directionalShadowMap[M]=h,Z.directionalShadowMatrix[M]=C.shadow.matrix,V++}Z.directional[M]=b,M++}else if(C.isSpotLight){let b=J.get(C);b.position.setFromMatrixPosition(C.matrixWorld),b.color.copy(T).multiplyScalar(P),b.distance=f,b.coneCos=Math.cos(C.angle),b.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),b.decay=C.decay,Z.spot[F]=b;let l=C.shadow;if(C.map){if(Z.spotLightMap[A]=C.map,A++,l.updateMatrices(C),C.castShadow)I++}if(Z.spotLightMatrix[F]=l.matrix,C.castShadow){let x=Q.get(C);x.shadowIntensity=l.intensity,x.shadowBias=l.bias,x.shadowNormalBias=l.normalBias,x.shadowRadius=l.radius,x.shadowMapSize=l.mapSize,Z.spotShadow[F]=x,Z.spotShadowMap[F]=h,k++}F++}else if(C.isRectAreaLight){let b=J.get(C);b.color.copy(T).multiplyScalar(P),b.halfWidth.set(C.width*0.5,0,0),b.halfHeight.set(0,C.height*0.5,0),Z.rectArea[N]=b,N++}else if(C.isPointLight){let b=J.get(C);if(b.color.copy(C.color).multiplyScalar(C.intensity),b.distance=C.distance,b.decay=C.decay,C.castShadow){let l=C.shadow,x=Q.get(C);x.shadowIntensity=l.intensity,x.shadowBias=l.bias,x.shadowNormalBias=l.normalBias,x.shadowRadius=l.radius,x.shadowMapSize=l.mapSize,x.shadowCameraNear=l.camera.near,x.shadowCameraFar=l.camera.far,Z.pointShadow[O]=x,Z.pointShadowMap[O]=h,Z.pointShadowMatrix[O]=C.shadow.matrix,L++}Z.point[O]=b,O++}else if(C.isHemisphereLight){let b=J.get(C);b.skyColor.copy(C.color).multiplyScalar(P),b.groundColor.copy(C.groundColor).multiplyScalar(P),Z.hemi[R]=b,R++}}if(N>0)if($.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=N0.LTC_FLOAT_1,Z.rectAreaLTC2=N0.LTC_FLOAT_2;else Z.rectAreaLTC1=N0.LTC_HALF_1,Z.rectAreaLTC2=N0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=q;let y=Z.hash;if(y.directionalLength!==M||y.pointLength!==O||y.spotLength!==F||y.rectAreaLength!==N||y.hemiLength!==R||y.numDirectionalShadows!==V||y.numPointShadows!==L||y.numSpotShadows!==k||y.numSpotMaps!==A||y.numLightProbes!==S)Z.directional.length=M,Z.spot.length=F,Z.rectArea.length=N,Z.point.length=O,Z.hemi.length=R,Z.directionalShadow.length=V,Z.directionalShadowMap.length=V,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=k,Z.spotShadowMap.length=k,Z.directionalShadowMatrix.length=V,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=k+A-I,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=S,y.directionalLength=M,y.pointLength=O,y.spotLength=F,y.rectAreaLength=N,y.hemiLength=R,y.numDirectionalShadows=V,y.numPointShadows=L,y.numSpotShadows=k,y.numSpotMaps=A,y.numLightProbes=S,Z.version=mN++}function Y(U,G){let E=0,q=0,M=0,O=0,F=0,N=G.matrixWorldInverse;for(let R=0,V=U.length;R<V;R++){let L=U[R];if(L.isDirectionalLight){let k=Z.directional[E];k.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(W),k.direction.transformDirection(N),E++}else if(L.isSpotLight){let k=Z.spot[M];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(N),k.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(W),k.direction.transformDirection(N),M++}else if(L.isRectAreaLight){let k=Z.rectArea[O];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(N),X.identity(),K.copy(L.matrixWorld),K.premultiply(N),X.extractRotation(K),k.halfWidth.set(L.width*0.5,0,0),k.halfHeight.set(0,L.height*0.5,0),k.halfWidth.applyMatrix4(X),k.halfHeight.applyMatrix4(X),O++}else if(L.isPointLight){let k=Z.point[q];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(N),q++}else if(L.isHemisphereLight){let k=Z.hemi[F];k.direction.setFromMatrixPosition(L.matrixWorld),k.direction.transformDirection(N),F++}}}return{setup:H,setupView:Y,state:Z}}function xK($){let J=new cN($),Q=[],Z=[];function W(G){U.camera=G,Q.length=0,Z.length=0}function K(G){Q.push(G)}function X(G){Z.push(G)}function H(){J.setup(Q)}function Y(G){J.setupView(Q,G)}let U={lightsArray:Q,shadowsArray:Z,camera:null,lights:J,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:H,setupLightsView:Y,pushLight:K,pushShadow:X}}function nN($){let J=new WeakMap;function Q(W,K=0){let X=J.get(W),H;if(X===void 0)H=new xK($),J.set(W,[H]);else if(K>=X.length)H=new xK($),X.push(H);else H=X[K];return H}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}var sN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oN=`uniform sampler2D shadow_pass;
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
}`;function iN($,J,Q){let Z=new E9,W=new u0,K=new u0,X=new i0,H=new HZ({depthPacking:iW}),Y=new YZ,U={},G=Q.maxTextureSize,E={[Q7]:a1,[a1]:Q7,[H8]:H8},q=new u1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new u0},radius:{value:4}},vertexShader:sN,fragmentShader:oN}),M=q.clone();M.defines.HORIZONTAL_PASS=1;let O=new x1;O.setAttribute("position",new H1(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let F=new A1(O,q),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=UQ;let R=this.type;this.render=function(I,S,y){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(I.length===0)return;let B=$.getRenderTarget(),D=$.getActiveCubeFace(),C=$.getActiveMipmapLevel(),T=$.state;if(T.setBlending(Z7),T.buffers.depth.getReversed()===!0)T.buffers.color.setClear(0,0,0,0);else T.buffers.color.setClear(1,1,1,1);T.buffers.depth.setTest(!0),T.setScissorTest(!1);let P=R!==z8&&this.type===z8,f=R===z8&&this.type!==z8;for(let h=0,b=I.length;h<b;h++){let l=I[h],x=l.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",l,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;W.copy(x.mapSize);let s=x.getFrameExtents();if(W.multiply(s),K.copy(x.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/s.x),W.x=K.x*s.x,x.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/s.y),W.y=K.y*s.y,x.mapSize.y=K.y}if(x.map===null||P===!0||f===!0){let X0=this.type!==z8?{minFilter:u8,magFilter:u8}:{};if(x.map!==null)x.map.dispose();x.map=new O8(W.x,W.y,X0),x.map.texture.name=l.name+".shadowMap",x.camera.updateProjectionMatrix()}$.setRenderTarget(x.map),$.clear();let t=x.getViewportCount();for(let X0=0;X0<t;X0++){let G0=x.getViewport(X0);X.set(K.x*G0.x,K.y*G0.y,K.x*G0.z,K.y*G0.w),T.viewport(X),x.updateMatrices(l,X0),Z=x.getFrustum(),k(S,y,x.camera,l,this.type)}if(x.isPointLightShadow!==!0&&this.type===z8)V(x,y);x.needsUpdate=!1}R=this.type,N.needsUpdate=!1,$.setRenderTarget(B,D,C)};function V(I,S){let y=J.update(F);if(q.defines.VSM_SAMPLES!==I.blurSamples)q.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,q.needsUpdate=!0,M.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new O8(W.x,W.y);q.uniforms.shadow_pass.value=I.map.texture,q.uniforms.resolution.value=I.mapSize,q.uniforms.radius.value=I.radius,$.setRenderTarget(I.mapPass),$.clear(),$.renderBufferDirect(S,null,y,q,F,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,$.setRenderTarget(I.map),$.clear(),$.renderBufferDirect(S,null,y,M,F,null)}function L(I,S,y,B){let D=null,C=y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)D=C;else if(D=y.isPointLight===!0?Y:H,$.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let T=D.uuid,P=S.uuid,f=U[T];if(f===void 0)f={},U[T]=f;let h=f[P];if(h===void 0)h=D.clone(),f[P]=h,S.addEventListener("dispose",A);D=h}if(D.visible=S.visible,D.wireframe=S.wireframe,B===z8)D.side=S.shadowSide!==null?S.shadowSide:S.side;else D.side=S.shadowSide!==null?S.shadowSide:E[S.side];if(D.alphaMap=S.alphaMap,D.alphaTest=S.alphaToCoverage===!0?0.5:S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let T=$.properties.get(D);T.light=y}return D}function k(I,S,y,B,D){if(I.visible===!1)return;if(I.layers.test(S.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&D===z8)&&(!I.frustumCulled||Z.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,I.matrixWorld);let P=J.update(I),f=I.material;if(Array.isArray(f)){let h=P.groups;for(let b=0,l=h.length;b<l;b++){let x=h[b],s=f[x.materialIndex];if(s&&s.visible){let t=L(I,s,B,D);I.onBeforeShadow($,I,S,y,P,t,x),$.renderBufferDirect(y,null,P,t,I,x),I.onAfterShadow($,I,S,y,P,t,x)}}}else if(f.visible){let h=L(I,f,B,D);I.onBeforeShadow($,I,S,y,P,h,null),$.renderBufferDirect(y,null,P,h,I,null),I.onAfterShadow($,I,S,y,P,h,null)}}}let T=I.children;for(let P=0,f=T.length;P<f;P++)k(T[P],S,y,B,D)}function A(I){I.target.removeEventListener("dispose",A);for(let y in U){let B=U[y],D=I.target.uuid;if(D in B)B[D].dispose(),delete B[D]}}}var aN={[R$]:M$,[F$]:D$,[O$]:_$,[$9]:L$,[M$]:R$,[D$]:F$,[_$]:O$,[L$]:$9};function rN($,J){function Q(){let v=!1,q0=new i0,Y0=null,V0=new i0(0,0,0,0);return{setMask:function(Q0){if(Y0!==Q0&&!v)$.colorMask(Q0,Q0,Q0,Q0),Y0=Q0},setLocked:function(Q0){v=Q0},setClear:function(Q0,r,A0,x0,W1){if(W1===!0)Q0*=x0,r*=x0,A0*=x0;if(q0.set(Q0,r,A0,x0),V0.equals(q0)===!1)$.clearColor(Q0,r,A0,x0),V0.copy(q0)},reset:function(){v=!1,Y0=null,V0.set(-1,0,0,0)}}}function Z(){let v=!1,q0=!1,Y0=null,V0=null,Q0=null;return{setReversed:function(r){if(q0!==r){let A0=J.get("EXT_clip_control");if(r)A0.clipControlEXT(A0.LOWER_LEFT_EXT,A0.ZERO_TO_ONE_EXT);else A0.clipControlEXT(A0.LOWER_LEFT_EXT,A0.NEGATIVE_ONE_TO_ONE_EXT);q0=r;let x0=Q0;Q0=null,this.setClear(x0)}},getReversed:function(){return q0},setTest:function(r){if(r)J0($.DEPTH_TEST);else O0($.DEPTH_TEST)},setMask:function(r){if(Y0!==r&&!v)$.depthMask(r),Y0=r},setFunc:function(r){if(q0)r=aN[r];if(V0!==r){switch(r){case R$:$.depthFunc($.NEVER);break;case M$:$.depthFunc($.ALWAYS);break;case F$:$.depthFunc($.LESS);break;case $9:$.depthFunc($.LEQUAL);break;case O$:$.depthFunc($.EQUAL);break;case L$:$.depthFunc($.GEQUAL);break;case D$:$.depthFunc($.GREATER);break;case _$:$.depthFunc($.NOTEQUAL);break;default:$.depthFunc($.LEQUAL)}V0=r}},setLocked:function(r){v=r},setClear:function(r){if(Q0!==r){if(q0)r=1-r;$.clearDepth(r),Q0=r}},reset:function(){v=!1,Y0=null,V0=null,Q0=null,q0=!1}}}function W(){let v=!1,q0=null,Y0=null,V0=null,Q0=null,r=null,A0=null,x0=null,W1=null;return{setTest:function(Q1){if(!v)if(Q1)J0($.STENCIL_TEST);else O0($.STENCIL_TEST)},setMask:function(Q1){if(q0!==Q1&&!v)$.stencilMask(Q1),q0=Q1},setFunc:function(Q1,_8,V8){if(Y0!==Q1||V0!==_8||Q0!==V8)$.stencilFunc(Q1,_8,V8),Y0=Q1,V0=_8,Q0=V8},setOp:function(Q1,_8,V8){if(r!==Q1||A0!==_8||x0!==V8)$.stencilOp(Q1,_8,V8),r=Q1,A0=_8,x0=V8},setLocked:function(Q1){v=Q1},setClear:function(Q1){if(W1!==Q1)$.clearStencil(Q1),W1=Q1},reset:function(){v=!1,q0=null,Y0=null,V0=null,Q0=null,r=null,A0=null,x0=null,W1=null}}}let K=new Q,X=new Z,H=new W,Y=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,M=[],O=null,F=!1,N=null,R=null,V=null,L=null,k=null,A=null,I=null,S=new y0(0,0,0),y=0,B=!1,D=null,C=null,T=null,P=null,f=null,h=$.getParameter($.MAX_COMBINED_TEXTURE_IMAGE_UNITS),b=!1,l=0,x=$.getParameter($.VERSION);if(x.indexOf("WebGL")!==-1)l=parseFloat(/^WebGL (\d)/.exec(x)[1]),b=l>=1;else if(x.indexOf("OpenGL ES")!==-1)l=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),b=l>=2;let s=null,t={},X0=$.getParameter($.SCISSOR_BOX),G0=$.getParameter($.VIEWPORT),B0=new i0().fromArray(X0),R0=new i0().fromArray(G0);function o(v,q0,Y0,V0){let Q0=new Uint8Array(4),r=$.createTexture();$.bindTexture(v,r),$.texParameteri(v,$.TEXTURE_MIN_FILTER,$.NEAREST),$.texParameteri(v,$.TEXTURE_MAG_FILTER,$.NEAREST);for(let A0=0;A0<Y0;A0++)if(v===$.TEXTURE_3D||v===$.TEXTURE_2D_ARRAY)$.texImage3D(q0,0,$.RGBA,1,1,V0,0,$.RGBA,$.UNSIGNED_BYTE,Q0);else $.texImage2D(q0+A0,0,$.RGBA,1,1,0,$.RGBA,$.UNSIGNED_BYTE,Q0);return r}let Z0={};Z0[$.TEXTURE_2D]=o($.TEXTURE_2D,$.TEXTURE_2D,1),Z0[$.TEXTURE_CUBE_MAP]=o($.TEXTURE_CUBE_MAP,$.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z0[$.TEXTURE_2D_ARRAY]=o($.TEXTURE_2D_ARRAY,$.TEXTURE_2D_ARRAY,1,1),Z0[$.TEXTURE_3D]=o($.TEXTURE_3D,$.TEXTURE_3D,1,1),K.setClear(0,0,0,1),X.setClear(1),H.setClear(0),J0($.DEPTH_TEST),X.setFunc($9),L0(!1),a0(YQ),J0($.CULL_FACE),j0(Z7);function J0(v){if(G[v]!==!0)$.enable(v),G[v]=!0}function O0(v){if(G[v]!==!1)$.disable(v),G[v]=!1}function D0(v,q0){if(E[v]!==q0){if($.bindFramebuffer(v,q0),E[v]=q0,v===$.DRAW_FRAMEBUFFER)E[$.FRAMEBUFFER]=q0;if(v===$.FRAMEBUFFER)E[$.DRAW_FRAMEBUFFER]=q0;return!0}return!1}function z0(v,q0){let Y0=M,V0=!1;if(v){if(Y0=q.get(q0),Y0===void 0)Y0=[],q.set(q0,Y0);let Q0=v.textures;if(Y0.length!==Q0.length||Y0[0]!==$.COLOR_ATTACHMENT0){for(let r=0,A0=Q0.length;r<A0;r++)Y0[r]=$.COLOR_ATTACHMENT0+r;Y0.length=Q0.length,V0=!0}}else if(Y0[0]!==$.BACK)Y0[0]=$.BACK,V0=!0;if(V0)$.drawBuffers(Y0)}function e0(v){if(O!==v)return $.useProgram(v),O=v,!0;return!1}let j={[q6]:$.FUNC_ADD,[qW]:$.FUNC_SUBTRACT,[NW]:$.FUNC_REVERSE_SUBTRACT};j[RW]=$.MIN,j[MW]=$.MAX;let l0={[FW]:$.ZERO,[OW]:$.ONE,[LW]:$.SRC_COLOR,[_W]:$.SRC_ALPHA,[IW]:$.SRC_ALPHA_SATURATE,[kW]:$.DST_COLOR,[BW]:$.DST_ALPHA,[DW]:$.ONE_MINUS_SRC_COLOR,[VW]:$.ONE_MINUS_SRC_ALPHA,[CW]:$.ONE_MINUS_DST_COLOR,[zW]:$.ONE_MINUS_DST_ALPHA,[PW]:$.CONSTANT_COLOR,[AW]:$.ONE_MINUS_CONSTANT_COLOR,[TW]:$.CONSTANT_ALPHA,[wW]:$.ONE_MINUS_CONSTANT_ALPHA};function j0(v,q0,Y0,V0,Q0,r,A0,x0,W1,Q1){if(v===Z7){if(F===!0)O0($.BLEND),F=!1;return}if(F===!1)J0($.BLEND),F=!0;if(v!==EW){if(v!==N||Q1!==B){if(R!==q6||k!==q6)$.blendEquation($.FUNC_ADD),R=q6,k=q6;if(Q1)switch(v){case e6:$.blendFuncSeparate($.ONE,$.ONE_MINUS_SRC_ALPHA,$.ONE,$.ONE_MINUS_SRC_ALPHA);break;case GQ:$.blendFunc($.ONE,$.ONE);break;case EQ:$.blendFuncSeparate($.ZERO,$.ONE_MINUS_SRC_COLOR,$.ZERO,$.ONE);break;case qQ:$.blendFuncSeparate($.DST_COLOR,$.ONE_MINUS_SRC_ALPHA,$.ZERO,$.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case e6:$.blendFuncSeparate($.SRC_ALPHA,$.ONE_MINUS_SRC_ALPHA,$.ONE,$.ONE_MINUS_SRC_ALPHA);break;case GQ:$.blendFuncSeparate($.SRC_ALPHA,$.ONE,$.ONE,$.ONE);break;case EQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}V=null,L=null,A=null,I=null,S.set(0,0,0),y=0,N=v,B=Q1}return}if(Q0=Q0||q0,r=r||Y0,A0=A0||V0,q0!==R||Q0!==k)$.blendEquationSeparate(j[q0],j[Q0]),R=q0,k=Q0;if(Y0!==V||V0!==L||r!==A||A0!==I)$.blendFuncSeparate(l0[Y0],l0[V0],l0[r],l0[A0]),V=Y0,L=V0,A=r,I=A0;if(x0.equals(S)===!1||W1!==y)$.blendColor(x0.r,x0.g,x0.b,W1),S.copy(x0),y=W1;N=v,B=!1}function T0(v,q0){v.side===H8?O0($.CULL_FACE):J0($.CULL_FACE);let Y0=v.side===a1;if(q0)Y0=!Y0;L0(Y0),v.blending===e6&&v.transparent===!1?j0(Z7):j0(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),X.setFunc(v.depthFunc),X.setTest(v.depthTest),X.setMask(v.depthWrite),K.setMask(v.colorWrite);let V0=v.stencilWrite;if(H.setTest(V0),V0)H.setMask(v.stencilWriteMask),H.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),H.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);M0(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?J0($.SAMPLE_ALPHA_TO_COVERAGE):O0($.SAMPLE_ALPHA_TO_COVERAGE)}function L0(v){if(D!==v){if(v)$.frontFace($.CW);else $.frontFace($.CCW);D=v}}function a0(v){if(v!==YW){if(J0($.CULL_FACE),v!==C)if(v===YQ)$.cullFace($.BACK);else if(v===UW)$.cullFace($.FRONT);else $.cullFace($.FRONT_AND_BACK)}else O0($.CULL_FACE);C=v}function C0(v){if(v!==T){if(b)$.lineWidth(v);T=v}}function M0(v,q0,Y0){if(v){if(J0($.POLYGON_OFFSET_FILL),P!==q0||f!==Y0)$.polygonOffset(q0,Y0),P=q0,f=Y0}else O0($.POLYGON_OFFSET_FILL)}function J1(v){if(v)J0($.SCISSOR_TEST);else O0($.SCISSOR_TEST)}function q1(v){if(v===void 0)v=$.TEXTURE0+h-1;if(s!==v)$.activeTexture(v),s=v}function d0(v,q0,Y0){if(Y0===void 0)if(s===null)Y0=$.TEXTURE0+h-1;else Y0=s;let V0=t[Y0];if(V0===void 0)V0={type:void 0,texture:void 0},t[Y0]=V0;if(V0.type!==v||V0.texture!==q0){if(s!==Y0)$.activeTexture(Y0),s=Y0;$.bindTexture(v,q0||Z0[v]),V0.type=v,V0.texture=q0}}function w(){let v=t[s];if(v!==void 0&&v.type!==void 0)$.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function _(){try{$.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function m(){try{$.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function a(){try{$.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function e(){try{$.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function i(){try{$.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _0(){try{$.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function W0(){try{$.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function I0(){try{$.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function S0(){try{$.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function K0(){try{$.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function d(v){if(B0.equals(v)===!1)$.scissor(v.x,v.y,v.z,v.w),B0.copy(v)}function $0(v){if(R0.equals(v)===!1)$.viewport(v.x,v.y,v.z,v.w),R0.copy(v)}function E0(v,q0){let Y0=U.get(q0);if(Y0===void 0)Y0=new WeakMap,U.set(q0,Y0);let V0=Y0.get(v);if(V0===void 0)V0=$.getUniformBlockIndex(q0,v.name),Y0.set(v,V0)}function U0(v,q0){let V0=U.get(q0).get(v);if(Y.get(q0)!==V0)$.uniformBlockBinding(q0,V0,v.__bindingPointIndex),Y.set(q0,V0)}function b0(){$.disable($.BLEND),$.disable($.CULL_FACE),$.disable($.DEPTH_TEST),$.disable($.POLYGON_OFFSET_FILL),$.disable($.SCISSOR_TEST),$.disable($.STENCIL_TEST),$.disable($.SAMPLE_ALPHA_TO_COVERAGE),$.blendEquation($.FUNC_ADD),$.blendFunc($.ONE,$.ZERO),$.blendFuncSeparate($.ONE,$.ZERO,$.ONE,$.ZERO),$.blendColor(0,0,0,0),$.colorMask(!0,!0,!0,!0),$.clearColor(0,0,0,0),$.depthMask(!0),$.depthFunc($.LESS),X.setReversed(!1),$.clearDepth(1),$.stencilMask(4294967295),$.stencilFunc($.ALWAYS,0,4294967295),$.stencilOp($.KEEP,$.KEEP,$.KEEP),$.clearStencil(0),$.cullFace($.BACK),$.frontFace($.CCW),$.polygonOffset(0,0),$.activeTexture($.TEXTURE0),$.bindFramebuffer($.FRAMEBUFFER,null),$.bindFramebuffer($.DRAW_FRAMEBUFFER,null),$.bindFramebuffer($.READ_FRAMEBUFFER,null),$.useProgram(null),$.lineWidth(1),$.scissor(0,0,$.canvas.width,$.canvas.height),$.viewport(0,0,$.canvas.width,$.canvas.height),G={},s=null,t={},E={},q=new WeakMap,M=[],O=null,F=!1,N=null,R=null,V=null,L=null,k=null,A=null,I=null,S=new y0(0,0,0),y=0,B=!1,D=null,C=null,T=null,P=null,f=null,B0.set(0,0,$.canvas.width,$.canvas.height),R0.set(0,0,$.canvas.width,$.canvas.height),K.reset(),X.reset(),H.reset()}return{buffers:{color:K,depth:X,stencil:H},enable:J0,disable:O0,bindFramebuffer:D0,drawBuffers:z0,useProgram:e0,setBlending:j0,setMaterial:T0,setFlipSided:L0,setCullFace:a0,setLineWidth:C0,setPolygonOffset:M0,setScissorTest:J1,activeTexture:q1,bindTexture:d0,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:m,texImage2D:S0,texImage3D:K0,updateUBOMapping:E0,uniformBlockBinding:U0,texStorage2D:W0,texStorage3D:I0,texSubImage2D:a,texSubImage3D:e,compressedTexSubImage2D:i,compressedTexSubImage3D:_0,scissor:d,viewport:$0,reset:b0}}function tN($,J,Q,Z,W,K,X){let H=J.has("WEBGL_multisampled_render_to_texture")?J.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new u0,G=new WeakMap,E,q=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function O(w,_){return M?new OffscreenCanvas(w,_):G6("canvas")}function F(w,_,m){let a=1,e=d0(w);if(e.width>m||e.height>m)a=m/Math.max(e.width,e.height);if(a<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let i=Math.floor(a*e.width),_0=Math.floor(a*e.height);if(E===void 0)E=O(i,_0);let W0=_?O(i,_0):E;return W0.width=i,W0.height=_0,W0.getContext("2d").drawImage(w,0,0,i,_0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+i+"x"+_0+")."),W0}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return w}return w}function N(w){return w.generateMipmaps}function R(w){$.generateMipmap(w)}function V(w){if(w.isWebGLCubeRenderTarget)return $.TEXTURE_CUBE_MAP;if(w.isWebGL3DRenderTarget)return $.TEXTURE_3D;if(w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture)return $.TEXTURE_2D_ARRAY;return $.TEXTURE_2D}function L(w,_,m,a,e=!1){if(w!==null){if($[w]!==void 0)return $[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let i=_;if(_===$.RED){if(m===$.FLOAT)i=$.R32F;if(m===$.HALF_FLOAT)i=$.R16F;if(m===$.UNSIGNED_BYTE)i=$.R8}if(_===$.RED_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.R8UI;if(m===$.UNSIGNED_SHORT)i=$.R16UI;if(m===$.UNSIGNED_INT)i=$.R32UI;if(m===$.BYTE)i=$.R8I;if(m===$.SHORT)i=$.R16I;if(m===$.INT)i=$.R32I}if(_===$.RG){if(m===$.FLOAT)i=$.RG32F;if(m===$.HALF_FLOAT)i=$.RG16F;if(m===$.UNSIGNED_BYTE)i=$.RG8}if(_===$.RG_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.RG8UI;if(m===$.UNSIGNED_SHORT)i=$.RG16UI;if(m===$.UNSIGNED_INT)i=$.RG32UI;if(m===$.BYTE)i=$.RG8I;if(m===$.SHORT)i=$.RG16I;if(m===$.INT)i=$.RG32I}if(_===$.RGB_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.RGB8UI;if(m===$.UNSIGNED_SHORT)i=$.RGB16UI;if(m===$.UNSIGNED_INT)i=$.RGB32UI;if(m===$.BYTE)i=$.RGB8I;if(m===$.SHORT)i=$.RGB16I;if(m===$.INT)i=$.RGB32I}if(_===$.RGBA_INTEGER){if(m===$.UNSIGNED_BYTE)i=$.RGBA8UI;if(m===$.UNSIGNED_SHORT)i=$.RGBA16UI;if(m===$.UNSIGNED_INT)i=$.RGBA32UI;if(m===$.BYTE)i=$.RGBA8I;if(m===$.SHORT)i=$.RGBA16I;if(m===$.INT)i=$.RGBA32I}if(_===$.RGB){if(m===$.UNSIGNED_INT_5_9_9_9_REV)i=$.RGB9_E5;if(m===$.UNSIGNED_INT_10F_11F_11F_REV)i=$.R11F_G11F_B10F}if(_===$.RGBA){let _0=e?iQ:o0.getTransfer(a);if(m===$.FLOAT)i=$.RGBA32F;if(m===$.HALF_FLOAT)i=$.RGBA16F;if(m===$.UNSIGNED_BYTE)i=_0===Y1?$.SRGB8_ALPHA8:$.RGBA8;if(m===$.UNSIGNED_SHORT_4_4_4_4)i=$.RGBA4;if(m===$.UNSIGNED_SHORT_5_5_5_1)i=$.RGB5_A1}if(i===$.R16F||i===$.R32F||i===$.RG16F||i===$.RG32F||i===$.RGBA16F||i===$.RGBA32F)J.get("EXT_color_buffer_float");return i}function k(w,_){let m;if(w){if(_===null||_===F6||_===O6)m=$.DEPTH24_STENCIL8;else if(_===K7)m=$.DEPTH32F_STENCIL8;else if(_===Q9)m=$.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===F6||_===O6)m=$.DEPTH_COMPONENT24;else if(_===K7)m=$.DEPTH_COMPONENT32F;else if(_===Q9)m=$.DEPTH_COMPONENT16;return m}function A(w,_){if(N(w)===!0||w.isFramebufferTexture&&w.minFilter!==u8&&w.minFilter!==p1)return Math.log2(Math.max(_.width,_.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return _.mipmaps.length;else return 1}function I(w){let _=w.target;if(_.removeEventListener("dispose",I),y(_),_.isVideoTexture)G.delete(_)}function S(w){let _=w.target;_.removeEventListener("dispose",S),D(_)}function y(w){let _=Z.get(w);if(_.__webglInit===void 0)return;let m=w.source,a=q.get(m);if(a){let e=a[_.__cacheKey];if(e.usedTimes--,e.usedTimes===0)B(w);if(Object.keys(a).length===0)q.delete(m)}Z.remove(w)}function B(w){let _=Z.get(w);$.deleteTexture(_.__webglTexture);let m=w.source,a=q.get(m);delete a[_.__cacheKey],X.memory.textures--}function D(w){let _=Z.get(w);if(w.depthTexture)w.depthTexture.dispose(),Z.remove(w.depthTexture);if(w.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(_.__webglFramebuffer[a]))for(let e=0;e<_.__webglFramebuffer[a].length;e++)$.deleteFramebuffer(_.__webglFramebuffer[a][e]);else $.deleteFramebuffer(_.__webglFramebuffer[a]);if(_.__webglDepthbuffer)$.deleteRenderbuffer(_.__webglDepthbuffer[a])}else{if(Array.isArray(_.__webglFramebuffer))for(let a=0;a<_.__webglFramebuffer.length;a++)$.deleteFramebuffer(_.__webglFramebuffer[a]);else $.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)$.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)$.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let a=0;a<_.__webglColorRenderbuffer.length;a++)if(_.__webglColorRenderbuffer[a])$.deleteRenderbuffer(_.__webglColorRenderbuffer[a])}if(_.__webglDepthRenderbuffer)$.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let m=w.textures;for(let a=0,e=m.length;a<e;a++){let i=Z.get(m[a]);if(i.__webglTexture)$.deleteTexture(i.__webglTexture),X.memory.textures--;Z.remove(m[a])}Z.remove(w)}let C=0;function T(){C=0}function P(){let w=C;if(w>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+W.maxTextures);return C+=1,w}function f(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function h(w,_){let m=Z.get(w);if(w.isVideoTexture)J1(w);if(w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&m.__version!==w.version){let a=w.image;if(a===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(a.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z0(m,w,_);return}}else if(w.isExternalTexture)m.__webglTexture=w.sourceTexture?w.sourceTexture:null;Q.bindTexture($.TEXTURE_2D,m.__webglTexture,$.TEXTURE0+_)}function b(w,_){let m=Z.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&m.__version!==w.version){Z0(m,w,_);return}Q.bindTexture($.TEXTURE_2D_ARRAY,m.__webglTexture,$.TEXTURE0+_)}function l(w,_){let m=Z.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&m.__version!==w.version){Z0(m,w,_);return}Q.bindTexture($.TEXTURE_3D,m.__webglTexture,$.TEXTURE0+_)}function x(w,_){let m=Z.get(w);if(w.version>0&&m.__version!==w.version){J0(m,w,_);return}Q.bindTexture($.TEXTURE_CUBE_MAP,m.__webglTexture,$.TEXTURE0+_)}let s={[R6]:$.REPEAT,[z$]:$.CLAMP_TO_EDGE,[k$]:$.MIRRORED_REPEAT},t={[u8]:$.NEAREST,[C$]:$.NEAREST_MIPMAP_NEAREST,[S7]:$.NEAREST_MIPMAP_LINEAR,[p1]:$.LINEAR,[M6]:$.LINEAR_MIPMAP_NEAREST,[m8]:$.LINEAR_MIPMAP_LINEAR},X0={[tW]:$.NEVER,[WK]:$.ALWAYS,[eW]:$.LESS,[aQ]:$.LEQUAL,[$K]:$.EQUAL,[ZK]:$.GEQUAL,[JK]:$.GREATER,[QK]:$.NOTEQUAL};function G0(w,_){if(_.type===K7&&J.has("OES_texture_float_linear")===!1&&(_.magFilter===p1||_.magFilter===M6||_.magFilter===S7||_.magFilter===m8||_.minFilter===p1||_.minFilter===M6||_.minFilter===S7||_.minFilter===m8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if($.texParameteri(w,$.TEXTURE_WRAP_S,s[_.wrapS]),$.texParameteri(w,$.TEXTURE_WRAP_T,s[_.wrapT]),w===$.TEXTURE_3D||w===$.TEXTURE_2D_ARRAY)$.texParameteri(w,$.TEXTURE_WRAP_R,s[_.wrapR]);if($.texParameteri(w,$.TEXTURE_MAG_FILTER,t[_.magFilter]),$.texParameteri(w,$.TEXTURE_MIN_FILTER,t[_.minFilter]),_.compareFunction)$.texParameteri(w,$.TEXTURE_COMPARE_MODE,$.COMPARE_REF_TO_TEXTURE),$.texParameteri(w,$.TEXTURE_COMPARE_FUNC,X0[_.compareFunction]);if(J.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===u8)return;if(_.minFilter!==S7&&_.minFilter!==m8)return;if(_.type===K7&&J.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||Z.get(_).__currentAnisotropy){let m=J.get("EXT_texture_filter_anisotropic");$.texParameterf(w,m.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,W.getMaxAnisotropy())),Z.get(_).__currentAnisotropy=_.anisotropy}}}function B0(w,_){let m=!1;if(w.__webglInit===void 0)w.__webglInit=!0,_.addEventListener("dispose",I);let a=_.source,e=q.get(a);if(e===void 0)e={},q.set(a,e);let i=f(_);if(i!==w.__cacheKey){if(e[i]===void 0)e[i]={texture:$.createTexture(),usedTimes:0},X.memory.textures++,m=!0;e[i].usedTimes++;let _0=e[w.__cacheKey];if(_0!==void 0){if(e[w.__cacheKey].usedTimes--,_0.usedTimes===0)B(_)}w.__cacheKey=i,w.__webglTexture=e[i].texture}return m}function R0(w,_,m){return Math.floor(Math.floor(w/m)/_)}function o(w,_,m,a){let i=w.updateRanges;if(i.length===0)Q.texSubImage2D($.TEXTURE_2D,0,0,0,_.width,_.height,m,a,_.data);else{i.sort((K0,d)=>K0.start-d.start);let _0=0;for(let K0=1;K0<i.length;K0++){let d=i[_0],$0=i[K0],E0=d.start+d.count,U0=R0($0.start,_.width,4),b0=R0(d.start,_.width,4);if($0.start<=E0+1&&U0===b0&&R0($0.start+$0.count-1,_.width,4)===U0)d.count=Math.max(d.count,$0.start+$0.count-d.start);else++_0,i[_0]=$0}i.length=_0+1;let W0=$.getParameter($.UNPACK_ROW_LENGTH),I0=$.getParameter($.UNPACK_SKIP_PIXELS),S0=$.getParameter($.UNPACK_SKIP_ROWS);$.pixelStorei($.UNPACK_ROW_LENGTH,_.width);for(let K0=0,d=i.length;K0<d;K0++){let $0=i[K0],E0=Math.floor($0.start/4),U0=Math.ceil($0.count/4),b0=E0%_.width,v=Math.floor(E0/_.width),q0=U0,Y0=1;$.pixelStorei($.UNPACK_SKIP_PIXELS,b0),$.pixelStorei($.UNPACK_SKIP_ROWS,v),Q.texSubImage2D($.TEXTURE_2D,0,b0,v,q0,1,m,a,_.data)}w.clearUpdateRanges(),$.pixelStorei($.UNPACK_ROW_LENGTH,W0),$.pixelStorei($.UNPACK_SKIP_PIXELS,I0),$.pixelStorei($.UNPACK_SKIP_ROWS,S0)}}function Z0(w,_,m){let a=$.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)a=$.TEXTURE_2D_ARRAY;if(_.isData3DTexture)a=$.TEXTURE_3D;let e=B0(w,_),i=_.source;Q.bindTexture(a,w.__webglTexture,$.TEXTURE0+m);let _0=Z.get(i);if(i.version!==_0.__version||e===!0){Q.activeTexture($.TEXTURE0+m);let W0=o0.getPrimaries(o0.workingColorSpace),I0=_.colorSpace===j7?null:o0.getPrimaries(_.colorSpace),S0=_.colorSpace===j7||W0===I0?$.NONE:$.BROWSER_DEFAULT_WEBGL;$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,_.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,_.unpackAlignment),$.pixelStorei($.UNPACK_COLORSPACE_CONVERSION_WEBGL,S0);let K0=F(_.image,!1,W.maxTextureSize);K0=q1(_,K0);let d=K.convert(_.format,_.colorSpace),$0=K.convert(_.type),E0=L(_.internalFormat,d,$0,_.colorSpace,_.isVideoTexture);G0(a,_);let U0,b0=_.mipmaps,v=_.isVideoTexture!==!0,q0=_0.__version===void 0||e===!0,Y0=i.dataReady,V0=A(_,K0);if(_.isDepthTexture){if(E0=k(_.format===W9,_.type),q0)if(v)Q.texStorage2D($.TEXTURE_2D,1,E0,K0.width,K0.height);else Q.texImage2D($.TEXTURE_2D,0,E0,K0.width,K0.height,0,d,$0,null)}else if(_.isDataTexture)if(b0.length>0){if(v&&q0)Q.texStorage2D($.TEXTURE_2D,V0,E0,b0[0].width,b0[0].height);for(let Q0=0,r=b0.length;Q0<r;Q0++)if(U0=b0[Q0],v){if(Y0)Q.texSubImage2D($.TEXTURE_2D,Q0,0,0,U0.width,U0.height,d,$0,U0.data)}else Q.texImage2D($.TEXTURE_2D,Q0,E0,U0.width,U0.height,0,d,$0,U0.data);_.generateMipmaps=!1}else if(v){if(q0)Q.texStorage2D($.TEXTURE_2D,V0,E0,K0.width,K0.height);if(Y0)o(_,K0,d,$0)}else Q.texImage2D($.TEXTURE_2D,0,E0,K0.width,K0.height,0,d,$0,K0.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(v&&q0)Q.texStorage3D($.TEXTURE_2D_ARRAY,V0,E0,b0[0].width,b0[0].height,K0.depth);for(let Q0=0,r=b0.length;Q0<r;Q0++)if(U0=b0[Q0],_.format!==k8)if(d!==null)if(v){if(Y0)if(_.layerUpdates.size>0){let A0=LZ(U0.width,U0.height,_.format,_.type);for(let x0 of _.layerUpdates){let W1=U0.data.subarray(x0*A0/U0.data.BYTES_PER_ELEMENT,(x0+1)*A0/U0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D($.TEXTURE_2D_ARRAY,Q0,0,0,x0,U0.width,U0.height,1,d,W1)}_.clearLayerUpdates()}else Q.compressedTexSubImage3D($.TEXTURE_2D_ARRAY,Q0,0,0,0,U0.width,U0.height,K0.depth,d,U0.data)}else Q.compressedTexImage3D($.TEXTURE_2D_ARRAY,Q0,E0,U0.width,U0.height,K0.depth,0,U0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v){if(Y0)Q.texSubImage3D($.TEXTURE_2D_ARRAY,Q0,0,0,0,U0.width,U0.height,K0.depth,d,$0,U0.data)}else Q.texImage3D($.TEXTURE_2D_ARRAY,Q0,E0,U0.width,U0.height,K0.depth,0,d,$0,U0.data)}else{if(v&&q0)Q.texStorage2D($.TEXTURE_2D,V0,E0,b0[0].width,b0[0].height);for(let Q0=0,r=b0.length;Q0<r;Q0++)if(U0=b0[Q0],_.format!==k8)if(d!==null)if(v){if(Y0)Q.compressedTexSubImage2D($.TEXTURE_2D,Q0,0,0,U0.width,U0.height,d,U0.data)}else Q.compressedTexImage2D($.TEXTURE_2D,Q0,E0,U0.width,U0.height,0,U0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v){if(Y0)Q.texSubImage2D($.TEXTURE_2D,Q0,0,0,U0.width,U0.height,d,$0,U0.data)}else Q.texImage2D($.TEXTURE_2D,Q0,E0,U0.width,U0.height,0,d,$0,U0.data)}else if(_.isDataArrayTexture)if(v){if(q0)Q.texStorage3D($.TEXTURE_2D_ARRAY,V0,E0,K0.width,K0.height,K0.depth);if(Y0)if(_.layerUpdates.size>0){let Q0=LZ(K0.width,K0.height,_.format,_.type);for(let r of _.layerUpdates){let A0=K0.data.subarray(r*Q0/K0.data.BYTES_PER_ELEMENT,(r+1)*Q0/K0.data.BYTES_PER_ELEMENT);Q.texSubImage3D($.TEXTURE_2D_ARRAY,0,0,0,r,K0.width,K0.height,1,d,$0,A0)}_.clearLayerUpdates()}else Q.texSubImage3D($.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,d,$0,K0.data)}else Q.texImage3D($.TEXTURE_2D_ARRAY,0,E0,K0.width,K0.height,K0.depth,0,d,$0,K0.data);else if(_.isData3DTexture)if(v){if(q0)Q.texStorage3D($.TEXTURE_3D,V0,E0,K0.width,K0.height,K0.depth);if(Y0)Q.texSubImage3D($.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,d,$0,K0.data)}else Q.texImage3D($.TEXTURE_3D,0,E0,K0.width,K0.height,K0.depth,0,d,$0,K0.data);else if(_.isFramebufferTexture){if(q0)if(v)Q.texStorage2D($.TEXTURE_2D,V0,E0,K0.width,K0.height);else{let{width:Q0,height:r}=K0;for(let A0=0;A0<V0;A0++)Q.texImage2D($.TEXTURE_2D,A0,E0,Q0,r,0,d,$0,null),Q0>>=1,r>>=1}}else if(b0.length>0){if(v&&q0){let Q0=d0(b0[0]);Q.texStorage2D($.TEXTURE_2D,V0,E0,Q0.width,Q0.height)}for(let Q0=0,r=b0.length;Q0<r;Q0++)if(U0=b0[Q0],v){if(Y0)Q.texSubImage2D($.TEXTURE_2D,Q0,0,0,d,$0,U0)}else Q.texImage2D($.TEXTURE_2D,Q0,E0,d,$0,U0);_.generateMipmaps=!1}else if(v){if(q0){let Q0=d0(K0);Q.texStorage2D($.TEXTURE_2D,V0,E0,Q0.width,Q0.height)}if(Y0)Q.texSubImage2D($.TEXTURE_2D,0,0,0,d,$0,K0)}else Q.texImage2D($.TEXTURE_2D,0,E0,d,$0,K0);if(N(_))R(a);if(_0.__version=i.version,_.onUpdate)_.onUpdate(_)}w.__version=_.version}function J0(w,_,m){if(_.image.length!==6)return;let a=B0(w,_),e=_.source;Q.bindTexture($.TEXTURE_CUBE_MAP,w.__webglTexture,$.TEXTURE0+m);let i=Z.get(e);if(e.version!==i.__version||a===!0){Q.activeTexture($.TEXTURE0+m);let _0=o0.getPrimaries(o0.workingColorSpace),W0=_.colorSpace===j7?null:o0.getPrimaries(_.colorSpace),I0=_.colorSpace===j7||_0===W0?$.NONE:$.BROWSER_DEFAULT_WEBGL;$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,_.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,_.unpackAlignment),$.pixelStorei($.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0);let S0=_.isCompressedTexture||_.image[0].isCompressedTexture,K0=_.image[0]&&_.image[0].isDataTexture,d=[];for(let r=0;r<6;r++){if(!S0&&!K0)d[r]=F(_.image[r],!0,W.maxCubemapSize);else d[r]=K0?_.image[r].image:_.image[r];d[r]=q1(_,d[r])}let $0=d[0],E0=K.convert(_.format,_.colorSpace),U0=K.convert(_.type),b0=L(_.internalFormat,E0,U0,_.colorSpace),v=_.isVideoTexture!==!0,q0=i.__version===void 0||a===!0,Y0=e.dataReady,V0=A(_,$0);G0($.TEXTURE_CUBE_MAP,_);let Q0;if(S0){if(v&&q0)Q.texStorage2D($.TEXTURE_CUBE_MAP,V0,b0,$0.width,$0.height);for(let r=0;r<6;r++){Q0=d[r].mipmaps;for(let A0=0;A0<Q0.length;A0++){let x0=Q0[A0];if(_.format!==k8)if(E0!==null)if(v){if(Y0)Q.compressedTexSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0,0,0,x0.width,x0.height,E0,x0.data)}else Q.compressedTexImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0,b0,x0.width,x0.height,0,x0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(Y0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0,0,0,x0.width,x0.height,E0,U0,x0.data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0,b0,x0.width,x0.height,0,E0,U0,x0.data)}}}else{if(Q0=_.mipmaps,v&&q0){if(Q0.length>0)V0++;let r=d0(d[0]);Q.texStorage2D($.TEXTURE_CUBE_MAP,V0,b0,r.width,r.height)}for(let r=0;r<6;r++)if(K0){if(v){if(Y0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,d[r].width,d[r].height,E0,U0,d[r].data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,b0,d[r].width,d[r].height,0,E0,U0,d[r].data);for(let A0=0;A0<Q0.length;A0++){let W1=Q0[A0].image[r].image;if(v){if(Y0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0+1,0,0,W1.width,W1.height,E0,U0,W1.data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0+1,b0,W1.width,W1.height,0,E0,U0,W1.data)}}else{if(v){if(Y0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,E0,U0,d[r])}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,b0,E0,U0,d[r]);for(let A0=0;A0<Q0.length;A0++){let x0=Q0[A0];if(v){if(Y0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0+1,0,0,E0,U0,x0.image[r])}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,A0+1,b0,E0,U0,x0.image[r])}}}if(N(_))R($.TEXTURE_CUBE_MAP);if(i.__version=e.version,_.onUpdate)_.onUpdate(_)}w.__version=_.version}function O0(w,_,m,a,e,i){let _0=K.convert(m.format,m.colorSpace),W0=K.convert(m.type),I0=L(m.internalFormat,_0,W0,m.colorSpace),S0=Z.get(_),K0=Z.get(m);if(K0.__renderTarget=_,!S0.__hasExternalTextures){let d=Math.max(1,_.width>>i),$0=Math.max(1,_.height>>i);if(e===$.TEXTURE_3D||e===$.TEXTURE_2D_ARRAY)Q.texImage3D(e,i,I0,d,$0,_.depth,0,_0,W0,null);else Q.texImage2D(e,i,I0,d,$0,0,_0,W0,null)}if(Q.bindFramebuffer($.FRAMEBUFFER,w),M0(_))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,a,e,K0.__webglTexture,0,C0(_));else if(e===$.TEXTURE_2D||e>=$.TEXTURE_CUBE_MAP_POSITIVE_X&&e<=$.TEXTURE_CUBE_MAP_NEGATIVE_Z)$.framebufferTexture2D($.FRAMEBUFFER,a,e,K0.__webglTexture,i);Q.bindFramebuffer($.FRAMEBUFFER,null)}function D0(w,_,m){if($.bindRenderbuffer($.RENDERBUFFER,w),_.depthBuffer){let a=_.depthTexture,e=a&&a.isDepthTexture?a.type:null,i=k(_.stencilBuffer,e),_0=_.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,W0=C0(_);if(M0(_))H.renderbufferStorageMultisampleEXT($.RENDERBUFFER,W0,i,_.width,_.height);else if(m)$.renderbufferStorageMultisample($.RENDERBUFFER,W0,i,_.width,_.height);else $.renderbufferStorage($.RENDERBUFFER,i,_.width,_.height);$.framebufferRenderbuffer($.FRAMEBUFFER,_0,$.RENDERBUFFER,w)}else{let a=_.textures;for(let e=0;e<a.length;e++){let i=a[e],_0=K.convert(i.format,i.colorSpace),W0=K.convert(i.type),I0=L(i.internalFormat,_0,W0,i.colorSpace),S0=C0(_);if(m&&M0(_)===!1)$.renderbufferStorageMultisample($.RENDERBUFFER,S0,I0,_.width,_.height);else if(M0(_))H.renderbufferStorageMultisampleEXT($.RENDERBUFFER,S0,I0,_.width,_.height);else $.renderbufferStorage($.RENDERBUFFER,I0,_.width,_.height)}}$.bindRenderbuffer($.RENDERBUFFER,null)}function z0(w,_){if(_&&_.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer($.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let a=Z.get(_.depthTexture);if(a.__renderTarget=_,!a.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0;h(_.depthTexture,0);let e=a.__webglTexture,i=C0(_);if(_.depthTexture.format===I$)if(M0(_))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,e,0,i);else $.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,e,0);else if(_.depthTexture.format===W9)if(M0(_))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,$.DEPTH_STENCIL_ATTACHMENT,$.TEXTURE_2D,e,0,i);else $.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_STENCIL_ATTACHMENT,$.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format")}function e0(w){let _=Z.get(w),m=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let a=w.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(a){let e=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,a.removeEventListener("dispose",e)};a.addEventListener("dispose",e),_.__depthDisposeCallback=e}_.__boundDepthTexture=a}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(m)throw Error("target.depthTexture not supported in Cube render targets");let a=w.texture.mipmaps;if(a&&a.length>0)z0(_.__webglFramebuffer[0],w);else z0(_.__webglFramebuffer,w)}else if(m){_.__webglDepthbuffer=[];for(let a=0;a<6;a++)if(Q.bindFramebuffer($.FRAMEBUFFER,_.__webglFramebuffer[a]),_.__webglDepthbuffer[a]===void 0)_.__webglDepthbuffer[a]=$.createRenderbuffer(),D0(_.__webglDepthbuffer[a],w,!1);else{let e=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,i=_.__webglDepthbuffer[a];$.bindRenderbuffer($.RENDERBUFFER,i),$.framebufferRenderbuffer($.FRAMEBUFFER,e,$.RENDERBUFFER,i)}}else{let a=w.texture.mipmaps;if(a&&a.length>0)Q.bindFramebuffer($.FRAMEBUFFER,_.__webglFramebuffer[0]);else Q.bindFramebuffer($.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=$.createRenderbuffer(),D0(_.__webglDepthbuffer,w,!1);else{let e=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,i=_.__webglDepthbuffer;$.bindRenderbuffer($.RENDERBUFFER,i),$.framebufferRenderbuffer($.FRAMEBUFFER,e,$.RENDERBUFFER,i)}}Q.bindFramebuffer($.FRAMEBUFFER,null)}function j(w,_,m){let a=Z.get(w);if(_!==void 0)O0(a.__webglFramebuffer,w,w.texture,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,0);if(m!==void 0)e0(w)}function l0(w){let _=w.texture,m=Z.get(w),a=Z.get(_);w.addEventListener("dispose",S);let e=w.textures,i=w.isWebGLCubeRenderTarget===!0,_0=e.length>1;if(!_0){if(a.__webglTexture===void 0)a.__webglTexture=$.createTexture();a.__version=_.version,X.memory.textures++}if(i){m.__webglFramebuffer=[];for(let W0=0;W0<6;W0++)if(_.mipmaps&&_.mipmaps.length>0){m.__webglFramebuffer[W0]=[];for(let I0=0;I0<_.mipmaps.length;I0++)m.__webglFramebuffer[W0][I0]=$.createFramebuffer()}else m.__webglFramebuffer[W0]=$.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){m.__webglFramebuffer=[];for(let W0=0;W0<_.mipmaps.length;W0++)m.__webglFramebuffer[W0]=$.createFramebuffer()}else m.__webglFramebuffer=$.createFramebuffer();if(_0)for(let W0=0,I0=e.length;W0<I0;W0++){let S0=Z.get(e[W0]);if(S0.__webglTexture===void 0)S0.__webglTexture=$.createTexture(),X.memory.textures++}if(w.samples>0&&M0(w)===!1){m.__webglMultisampledFramebuffer=$.createFramebuffer(),m.__webglColorRenderbuffer=[],Q.bindFramebuffer($.FRAMEBUFFER,m.__webglMultisampledFramebuffer);for(let W0=0;W0<e.length;W0++){let I0=e[W0];m.__webglColorRenderbuffer[W0]=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,m.__webglColorRenderbuffer[W0]);let S0=K.convert(I0.format,I0.colorSpace),K0=K.convert(I0.type),d=L(I0.internalFormat,S0,K0,I0.colorSpace,w.isXRRenderTarget===!0),$0=C0(w);$.renderbufferStorageMultisample($.RENDERBUFFER,$0,d,w.width,w.height),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+W0,$.RENDERBUFFER,m.__webglColorRenderbuffer[W0])}if($.bindRenderbuffer($.RENDERBUFFER,null),w.depthBuffer)m.__webglDepthRenderbuffer=$.createRenderbuffer(),D0(m.__webglDepthRenderbuffer,w,!0);Q.bindFramebuffer($.FRAMEBUFFER,null)}}if(i){Q.bindTexture($.TEXTURE_CUBE_MAP,a.__webglTexture),G0($.TEXTURE_CUBE_MAP,_);for(let W0=0;W0<6;W0++)if(_.mipmaps&&_.mipmaps.length>0)for(let I0=0;I0<_.mipmaps.length;I0++)O0(m.__webglFramebuffer[W0][I0],w,_,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+W0,I0);else O0(m.__webglFramebuffer[W0],w,_,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0);if(N(_))R($.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(_0){for(let W0=0,I0=e.length;W0<I0;W0++){let S0=e[W0],K0=Z.get(S0),d=$.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)d=w.isWebGL3DRenderTarget?$.TEXTURE_3D:$.TEXTURE_2D_ARRAY;if(Q.bindTexture(d,K0.__webglTexture),G0(d,S0),O0(m.__webglFramebuffer,w,S0,$.COLOR_ATTACHMENT0+W0,d,0),N(S0))R(d)}Q.unbindTexture()}else{let W0=$.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)W0=w.isWebGL3DRenderTarget?$.TEXTURE_3D:$.TEXTURE_2D_ARRAY;if(Q.bindTexture(W0,a.__webglTexture),G0(W0,_),_.mipmaps&&_.mipmaps.length>0)for(let I0=0;I0<_.mipmaps.length;I0++)O0(m.__webglFramebuffer[I0],w,_,$.COLOR_ATTACHMENT0,W0,I0);else O0(m.__webglFramebuffer,w,_,$.COLOR_ATTACHMENT0,W0,0);if(N(_))R(W0);Q.unbindTexture()}if(w.depthBuffer)e0(w)}function j0(w){let _=w.textures;for(let m=0,a=_.length;m<a;m++){let e=_[m];if(N(e)){let i=V(w),_0=Z.get(e).__webglTexture;Q.bindTexture(i,_0),R(i),Q.unbindTexture()}}}let T0=[],L0=[];function a0(w){if(w.samples>0){if(M0(w)===!1){let{textures:_,width:m,height:a}=w,e=$.COLOR_BUFFER_BIT,i=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,_0=Z.get(w),W0=_.length>1;if(W0)for(let S0=0;S0<_.length;S0++)Q.bindFramebuffer($.FRAMEBUFFER,_0.__webglMultisampledFramebuffer),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.RENDERBUFFER,null),Q.bindFramebuffer($.FRAMEBUFFER,_0.__webglFramebuffer),$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.TEXTURE_2D,null,0);Q.bindFramebuffer($.READ_FRAMEBUFFER,_0.__webglMultisampledFramebuffer);let I0=w.texture.mipmaps;if(I0&&I0.length>0)Q.bindFramebuffer($.DRAW_FRAMEBUFFER,_0.__webglFramebuffer[0]);else Q.bindFramebuffer($.DRAW_FRAMEBUFFER,_0.__webglFramebuffer);for(let S0=0;S0<_.length;S0++){if(w.resolveDepthBuffer){if(w.depthBuffer)e|=$.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)e|=$.STENCIL_BUFFER_BIT}if(W0){$.framebufferRenderbuffer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.RENDERBUFFER,_0.__webglColorRenderbuffer[S0]);let K0=Z.get(_[S0]).__webglTexture;$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,K0,0)}if($.blitFramebuffer(0,0,m,a,0,0,m,a,e,$.NEAREST),Y===!0){if(T0.length=0,L0.length=0,T0.push($.COLOR_ATTACHMENT0+S0),w.depthBuffer&&w.resolveDepthBuffer===!1)T0.push(i),L0.push(i),$.invalidateFramebuffer($.DRAW_FRAMEBUFFER,L0);$.invalidateFramebuffer($.READ_FRAMEBUFFER,T0)}}if(Q.bindFramebuffer($.READ_FRAMEBUFFER,null),Q.bindFramebuffer($.DRAW_FRAMEBUFFER,null),W0)for(let S0=0;S0<_.length;S0++){Q.bindFramebuffer($.FRAMEBUFFER,_0.__webglMultisampledFramebuffer),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.RENDERBUFFER,_0.__webglColorRenderbuffer[S0]);let K0=Z.get(_[S0]).__webglTexture;Q.bindFramebuffer($.FRAMEBUFFER,_0.__webglFramebuffer),$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.TEXTURE_2D,K0,0)}Q.bindFramebuffer($.DRAW_FRAMEBUFFER,_0.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&Y){let _=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT;$.invalidateFramebuffer($.DRAW_FRAMEBUFFER,[_])}}}function C0(w){return Math.min(W.maxSamples,w.samples)}function M0(w){let _=Z.get(w);return w.samples>0&&J.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function J1(w){let _=X.render.frame;if(G.get(w)!==_)G.set(w,_),w.update()}function q1(w,_){let{colorSpace:m,format:a,type:e}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return _;if(m!==h1&&m!==j7)if(o0.getTransfer(m)===Y1){if(a!==k8||e!==W7)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",m);return _}function d0(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)U.width=w.naturalWidth||w.width,U.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)U.width=w.displayWidth,U.height=w.displayHeight;else U.width=w.width,U.height=w.height;return U}this.allocateTextureUnit=P,this.resetTextureUnits=T,this.setTexture2D=h,this.setTexture2DArray=b,this.setTexture3D=l,this.setTextureCube=x,this.rebindTextures=j,this.setupRenderTarget=l0,this.updateRenderTargetMipmap=j0,this.updateMultisampleRenderTarget=a0,this.setupDepthRenderbuffer=e0,this.setupFrameBufferTexture=O0,this.useMultisampledRTT=M0}function eN($,J){function Q(Z,W=j7){let K,X=o0.getTransfer(W);if(Z===W7)return $.UNSIGNED_BYTE;if(Z===RQ)return $.UNSIGNED_SHORT_4_4_4_4;if(Z===MQ)return $.UNSIGNED_SHORT_5_5_5_1;if(Z===mW)return $.UNSIGNED_INT_5_9_9_9_REV;if(Z===dW)return $.UNSIGNED_INT_10F_11F_11F_REV;if(Z===lW)return $.BYTE;if(Z===uW)return $.SHORT;if(Z===Q9)return $.UNSIGNED_SHORT;if(Z===NQ)return $.INT;if(Z===F6)return $.UNSIGNED_INT;if(Z===K7)return $.FLOAT;if(Z===Z9)return $.HALF_FLOAT;if(Z===cW)return $.ALPHA;if(Z===nW)return $.RGB;if(Z===k8)return $.RGBA;if(Z===I$)return $.DEPTH_COMPONENT;if(Z===W9)return $.DEPTH_STENCIL;if(Z===sW)return $.RED;if(Z===FQ)return $.RED_INTEGER;if(Z===oW)return $.RG;if(Z===OQ)return $.RG_INTEGER;if(Z===LQ)return $.RGBA_INTEGER;if(Z===P$||Z===A$||Z===T$||Z===w$)if(X===Y1)if(K=J.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===P$)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===A$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===T$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===w$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=J.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===P$)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===A$)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===T$)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===w$)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===DQ||Z===_Q||Z===VQ||Z===BQ)if(K=J.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===DQ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===_Q)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===VQ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===BQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===zQ||Z===kQ||Z===CQ)if(K=J.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===zQ||Z===kQ)return X===Y1?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===CQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===IQ||Z===PQ||Z===AQ||Z===TQ||Z===wQ||Z===SQ||Z===jQ||Z===fQ||Z===vQ||Z===yQ||Z===bQ||Z===hQ||Z===xQ||Z===gQ)if(K=J.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===IQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===PQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===AQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===TQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===wQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===SQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===jQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===fQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===vQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===yQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===bQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===hQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===xQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===gQ)return X===Y1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===pQ||Z===lQ||Z===uQ)if(K=J.get("EXT_texture_compression_bptc"),K!==null){if(Z===pQ)return X===Y1?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===lQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===uQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===mQ||Z===dQ||Z===cQ||Z===nQ)if(K=J.get("EXT_texture_compression_rgtc"),K!==null){if(Z===mQ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===dQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===cQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===nQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===O6)return $.UNSIGNED_INT_24_8;return $[Z]!==void 0?$[Z]:null}return{convert:Q}}var $R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JR=`
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

}`;class iK{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init($,J){if(this.texture===null){let Q=new d$($.texture);if($.depthNear!==J.depthNear||$.depthFar!==J.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=Q}}getMesh($){if(this.texture!==null){if(this.mesh===null){let J=$.cameras[0].viewport,Q=new u1({vertexShader:$R,fragmentShader:JR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:J.z},depthHeight:{value:J.w}}});this.mesh=new A1(new R9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aK extends X7{constructor($,J){super();let Q=this,Z=null,W=1,K=null,X="local-floor",H=1,Y=null,U=null,G=null,E=null,q=null,M=null,O=typeof XRWebGLBinding<"u",F=new iK,N={},R=J.getContextAttributes(),V=null,L=null,k=[],A=[],I=new u0,S=null,y=new T1;y.viewport=new i0;let B=new T1;B.viewport=new i0;let D=[y,B],C=new MZ,T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let Z0=k[o];if(Z0===void 0)Z0=new H9,k[o]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(o){let Z0=k[o];if(Z0===void 0)Z0=new H9,k[o]=Z0;return Z0.getGripSpace()},this.getHand=function(o){let Z0=k[o];if(Z0===void 0)Z0=new H9,k[o]=Z0;return Z0.getHandSpace()};function f(o){let Z0=A.indexOf(o.inputSource);if(Z0===-1)return;let J0=k[Z0];if(J0!==void 0)J0.update(o.inputSource,o.frame,Y||K),J0.dispatchEvent({type:o.type,data:o.inputSource})}function h(){Z.removeEventListener("select",f),Z.removeEventListener("selectstart",f),Z.removeEventListener("selectend",f),Z.removeEventListener("squeeze",f),Z.removeEventListener("squeezestart",f),Z.removeEventListener("squeezeend",f),Z.removeEventListener("end",h),Z.removeEventListener("inputsourceschange",b);for(let o=0;o<k.length;o++){let Z0=A[o];if(Z0===null)continue;A[o]=null,k[o].disconnect(Z0)}T=null,P=null,F.reset();for(let o in N)delete N[o];$.setRenderTarget(V),q=null,E=null,G=null,Z=null,L=null,R0.stop(),Q.isPresenting=!1,$.setPixelRatio(S),$.setSize(I.width,I.height,!1),Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(W=o,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(X=o,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||K},this.setReferenceSpace=function(o){Y=o},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){if(G===null&&O)G=new XRWebGLBinding(Z,J);return G},this.getFrame=function(){return M},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(V=$.getRenderTarget(),Z.addEventListener("select",f),Z.addEventListener("selectstart",f),Z.addEventListener("selectend",f),Z.addEventListener("squeeze",f),Z.addEventListener("squeezestart",f),Z.addEventListener("squeezeend",f),Z.addEventListener("end",h),Z.addEventListener("inputsourceschange",b),R.xrCompatible!==!0)await J.makeXRCompatible();if(S=$.getPixelRatio(),$.getSize(I),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let J0={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,J,J0),Z.updateRenderState({baseLayer:q}),$.setPixelRatio(1),$.setSize(q.framebufferWidth,q.framebufferHeight,!1),L=new O8(q.framebufferWidth,q.framebufferHeight,{format:k8,type:W7,colorSpace:$.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let J0=null,O0=null,D0=null;if(R.depth)D0=R.stencil?J.DEPTH24_STENCIL8:J.DEPTH_COMPONENT24,J0=R.stencil?W9:I$,O0=R.stencil?O6:F6;let z0={colorFormat:J.RGBA8,depthFormat:D0,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(z0),Z.updateRenderState({layers:[E]}),$.setPixelRatio(1),$.setSize(E.textureWidth,E.textureHeight,!1),L=new O8(E.textureWidth,E.textureHeight,{format:k8,type:W7,depthTexture:new m$(E.textureWidth,E.textureHeight,O0,void 0,void 0,void 0,void 0,void 0,void 0,J0),stencilBuffer:R.stencil,colorSpace:$.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(H),Y=null,K=await Z.requestReferenceSpace(X),R0.setContext(Z),R0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return F.getDepthTexture()};function b(o){for(let Z0=0;Z0<o.removed.length;Z0++){let J0=o.removed[Z0],O0=A.indexOf(J0);if(O0>=0)A[O0]=null,k[O0].disconnect(J0)}for(let Z0=0;Z0<o.added.length;Z0++){let J0=o.added[Z0],O0=A.indexOf(J0);if(O0===-1){for(let z0=0;z0<k.length;z0++)if(z0>=A.length){A.push(J0),O0=z0;break}else if(A[z0]===null){A[z0]=J0,O0=z0;break}if(O0===-1)break}let D0=k[O0];if(D0)D0.connect(J0)}}let l=new g,x=new g;function s(o,Z0,J0){l.setFromMatrixPosition(Z0.matrixWorld),x.setFromMatrixPosition(J0.matrixWorld);let O0=l.distanceTo(x),D0=Z0.projectionMatrix.elements,z0=J0.projectionMatrix.elements,e0=D0[14]/(D0[10]-1),j=D0[14]/(D0[10]+1),l0=(D0[9]+1)/D0[5],j0=(D0[9]-1)/D0[5],T0=(D0[8]-1)/D0[0],L0=(z0[8]+1)/z0[0],a0=e0*T0,C0=e0*L0,M0=O0/(-T0+L0),J1=M0*-T0;if(Z0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(J1),o.translateZ(M0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),D0[10]===-1)o.projectionMatrix.copy(Z0.projectionMatrix),o.projectionMatrixInverse.copy(Z0.projectionMatrixInverse);else{let q1=e0+M0,d0=j+M0,w=a0-J1,_=C0+(O0-J1),m=l0*j/d0*q1,a=j0*j/d0*q1;o.projectionMatrix.makePerspective(w,_,m,a,q1,d0),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function t(o,Z0){if(Z0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(Z0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:Z0,far:J0}=o;if(F.texture!==null){if(F.depthNear>0)Z0=F.depthNear;if(F.depthFar>0)J0=F.depthFar}if(C.near=B.near=y.near=Z0,C.far=B.far=y.far=J0,T!==C.near||P!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),T=C.near,P=C.far;C.layers.mask=o.layers.mask|6,y.layers.mask=C.layers.mask&3,B.layers.mask=C.layers.mask&5;let O0=o.parent,D0=C.cameras;t(C,O0);for(let z0=0;z0<D0.length;z0++)t(D0[z0],O0);if(D0.length===2)s(C,y,B);else C.projectionMatrix.copy(y.projectionMatrix);X0(o,C,O0)};function X0(o,Z0,J0){if(J0===null)o.matrix.copy(Z0.matrixWorld);else o.matrix.copy(J0.matrixWorld),o.matrix.invert(),o.matrix.multiply(Z0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(Z0.projectionMatrix),o.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=A7*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(E===null&&q===null)return;return H},this.setFoveation=function(o){if(H=o,E!==null)E.fixedFoveation=o;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=o},this.hasDepthSensing=function(){return F.texture!==null},this.getDepthSensingMesh=function(){return F.getMesh(C)},this.getCameraTexture=function(o){return N[o]};let G0=null;function B0(o,Z0){if(U=Z0.getViewerPose(Y||K),M=Z0,U!==null){let J0=U.views;if(q!==null)$.setRenderTargetFramebuffer(L,q.framebuffer),$.setRenderTarget(L);let O0=!1;if(J0.length!==C.cameras.length)C.cameras.length=0,O0=!0;for(let j=0;j<J0.length;j++){let l0=J0[j],j0=null;if(q!==null)j0=q.getViewport(l0);else{let L0=G.getViewSubImage(E,l0);if(j0=L0.viewport,j===0)$.setRenderTargetTextures(L,L0.colorTexture,L0.depthStencilTexture),$.setRenderTarget(L)}let T0=D[j];if(T0===void 0)T0=new T1,T0.layers.enable(j),T0.viewport=new i0,D[j]=T0;if(T0.matrix.fromArray(l0.transform.matrix),T0.matrix.decompose(T0.position,T0.quaternion,T0.scale),T0.projectionMatrix.fromArray(l0.projectionMatrix),T0.projectionMatrixInverse.copy(T0.projectionMatrix).invert(),T0.viewport.set(j0.x,j0.y,j0.width,j0.height),j===0)C.matrix.copy(T0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(O0===!0)C.cameras.push(T0)}let D0=Z.enabledFeatures;if(D0&&D0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){G=Q.getBinding();let j=G.getDepthInformation(J0[0]);if(j&&j.isValid&&j.texture)F.init(j,Z.renderState)}if(D0&&D0.includes("camera-access")&&O){$.state.unbindTexture(),G=Q.getBinding();for(let j=0;j<J0.length;j++){let l0=J0[j].camera;if(l0){let j0=N[l0];if(!j0)j0=new d$,N[l0]=j0;let T0=G.getCameraImage(l0);j0.sourceTexture=T0}}}}for(let J0=0;J0<k.length;J0++){let O0=A[J0],D0=k[J0];if(O0!==null&&D0!==void 0)D0.update(O0,Z0,Y||K)}if(G0)G0(o,Z0);if(Z0.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:Z0});M=null}let R0=new gK;R0.setAnimationLoop(B0),this.setAnimationLoop=function(o){G0=o},this.dispose=function(){}}}var y7=new M8,QR=new g0;function ZR($,J){function Q(N,R){if(N.matrixAutoUpdate===!0)N.updateMatrix();R.value.copy(N.matrix)}function Z(N,R){if(R.color.getRGB(N.fogColor.value,WZ($)),R.isFog)N.fogNear.value=R.near,N.fogFar.value=R.far;else if(R.isFogExp2)N.fogDensity.value=R.density}function W(N,R,V,L,k){if(R.isMeshBasicMaterial)K(N,R);else if(R.isMeshLambertMaterial)K(N,R);else if(R.isMeshToonMaterial)K(N,R),E(N,R);else if(R.isMeshPhongMaterial)K(N,R),G(N,R);else if(R.isMeshStandardMaterial){if(K(N,R),q(N,R),R.isMeshPhysicalMaterial)M(N,R,k)}else if(R.isMeshMatcapMaterial)K(N,R),O(N,R);else if(R.isMeshDepthMaterial)K(N,R);else if(R.isMeshDistanceMaterial)K(N,R),F(N,R);else if(R.isMeshNormalMaterial)K(N,R);else if(R.isLineBasicMaterial){if(X(N,R),R.isLineDashedMaterial)H(N,R)}else if(R.isPointsMaterial)Y(N,R,V,L);else if(R.isSpriteMaterial)U(N,R);else if(R.isShadowMaterial)N.color.value.copy(R.color),N.opacity.value=R.opacity;else if(R.isShaderMaterial)R.uniformsNeedUpdate=!1}function K(N,R){if(N.opacity.value=R.opacity,R.color)N.diffuse.value.copy(R.color);if(R.emissive)N.emissive.value.copy(R.emissive).multiplyScalar(R.emissiveIntensity);if(R.map)N.map.value=R.map,Q(R.map,N.mapTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.bumpMap){if(N.bumpMap.value=R.bumpMap,Q(R.bumpMap,N.bumpMapTransform),N.bumpScale.value=R.bumpScale,R.side===a1)N.bumpScale.value*=-1}if(R.normalMap){if(N.normalMap.value=R.normalMap,Q(R.normalMap,N.normalMapTransform),N.normalScale.value.copy(R.normalScale),R.side===a1)N.normalScale.value.negate()}if(R.displacementMap)N.displacementMap.value=R.displacementMap,Q(R.displacementMap,N.displacementMapTransform),N.displacementScale.value=R.displacementScale,N.displacementBias.value=R.displacementBias;if(R.emissiveMap)N.emissiveMap.value=R.emissiveMap,Q(R.emissiveMap,N.emissiveMapTransform);if(R.specularMap)N.specularMap.value=R.specularMap,Q(R.specularMap,N.specularMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest;let V=J.get(R),L=V.envMap,k=V.envMapRotation;if(L){if(N.envMap.value=L,y7.copy(k),y7.x*=-1,y7.y*=-1,y7.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)y7.y*=-1,y7.z*=-1;N.envMapRotation.value.setFromMatrix4(QR.makeRotationFromEuler(y7)),N.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=R.reflectivity,N.ior.value=R.ior,N.refractionRatio.value=R.refractionRatio}if(R.lightMap)N.lightMap.value=R.lightMap,N.lightMapIntensity.value=R.lightMapIntensity,Q(R.lightMap,N.lightMapTransform);if(R.aoMap)N.aoMap.value=R.aoMap,N.aoMapIntensity.value=R.aoMapIntensity,Q(R.aoMap,N.aoMapTransform)}function X(N,R){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,R.map)N.map.value=R.map,Q(R.map,N.mapTransform)}function H(N,R){N.dashSize.value=R.dashSize,N.totalSize.value=R.dashSize+R.gapSize,N.scale.value=R.scale}function Y(N,R,V,L){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,N.size.value=R.size*V,N.scale.value=L*0.5,R.map)N.map.value=R.map,Q(R.map,N.uvTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest}function U(N,R){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,N.rotation.value=R.rotation,R.map)N.map.value=R.map,Q(R.map,N.mapTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest}function G(N,R){N.specular.value.copy(R.specular),N.shininess.value=Math.max(R.shininess,0.0001)}function E(N,R){if(R.gradientMap)N.gradientMap.value=R.gradientMap}function q(N,R){if(N.metalness.value=R.metalness,R.metalnessMap)N.metalnessMap.value=R.metalnessMap,Q(R.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=R.roughness,R.roughnessMap)N.roughnessMap.value=R.roughnessMap,Q(R.roughnessMap,N.roughnessMapTransform);if(R.envMap)N.envMapIntensity.value=R.envMapIntensity}function M(N,R,V){if(N.ior.value=R.ior,R.sheen>0){if(N.sheenColor.value.copy(R.sheenColor).multiplyScalar(R.sheen),N.sheenRoughness.value=R.sheenRoughness,R.sheenColorMap)N.sheenColorMap.value=R.sheenColorMap,Q(R.sheenColorMap,N.sheenColorMapTransform);if(R.sheenRoughnessMap)N.sheenRoughnessMap.value=R.sheenRoughnessMap,Q(R.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(R.clearcoat>0){if(N.clearcoat.value=R.clearcoat,N.clearcoatRoughness.value=R.clearcoatRoughness,R.clearcoatMap)N.clearcoatMap.value=R.clearcoatMap,Q(R.clearcoatMap,N.clearcoatMapTransform);if(R.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=R.clearcoatRoughnessMap,Q(R.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(R.clearcoatNormalMap){if(N.clearcoatNormalMap.value=R.clearcoatNormalMap,Q(R.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(R.clearcoatNormalScale),R.side===a1)N.clearcoatNormalScale.value.negate()}}if(R.dispersion>0)N.dispersion.value=R.dispersion;if(R.iridescence>0){if(N.iridescence.value=R.iridescence,N.iridescenceIOR.value=R.iridescenceIOR,N.iridescenceThicknessMinimum.value=R.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=R.iridescenceThicknessRange[1],R.iridescenceMap)N.iridescenceMap.value=R.iridescenceMap,Q(R.iridescenceMap,N.iridescenceMapTransform);if(R.iridescenceThicknessMap)N.iridescenceThicknessMap.value=R.iridescenceThicknessMap,Q(R.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(R.transmission>0){if(N.transmission.value=R.transmission,N.transmissionSamplerMap.value=V.texture,N.transmissionSamplerSize.value.set(V.width,V.height),R.transmissionMap)N.transmissionMap.value=R.transmissionMap,Q(R.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=R.thickness,R.thicknessMap)N.thicknessMap.value=R.thicknessMap,Q(R.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=R.attenuationDistance,N.attenuationColor.value.copy(R.attenuationColor)}if(R.anisotropy>0){if(N.anisotropyVector.value.set(R.anisotropy*Math.cos(R.anisotropyRotation),R.anisotropy*Math.sin(R.anisotropyRotation)),R.anisotropyMap)N.anisotropyMap.value=R.anisotropyMap,Q(R.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=R.specularIntensity,N.specularColor.value.copy(R.specularColor),R.specularColorMap)N.specularColorMap.value=R.specularColorMap,Q(R.specularColorMap,N.specularColorMapTransform);if(R.specularIntensityMap)N.specularIntensityMap.value=R.specularIntensityMap,Q(R.specularIntensityMap,N.specularIntensityMapTransform)}function O(N,R){if(R.matcap)N.matcap.value=R.matcap}function F(N,R){let V=J.get(R).light;N.referencePosition.value.setFromMatrixPosition(V.matrixWorld),N.nearDistance.value=V.shadow.camera.near,N.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function WR($,J,Q,Z){let W={},K={},X=[],H=$.getParameter($.MAX_UNIFORM_BUFFER_BINDINGS);function Y(V,L){let k=L.program;Z.uniformBlockBinding(V,k)}function U(V,L){let k=W[V.id];if(k===void 0)O(V),k=G(V),W[V.id]=k,V.addEventListener("dispose",N);let A=L.program;Z.updateUBOMapping(V,A);let I=J.render.frame;if(K[V.id]!==I)q(V),K[V.id]=I}function G(V){let L=E();V.__bindingPointIndex=L;let k=$.createBuffer(),A=V.__size,I=V.usage;return $.bindBuffer($.UNIFORM_BUFFER,k),$.bufferData($.UNIFORM_BUFFER,A,I),$.bindBuffer($.UNIFORM_BUFFER,null),$.bindBufferBase($.UNIFORM_BUFFER,L,k),k}function E(){for(let V=0;V<H;V++)if(X.indexOf(V)===-1)return X.push(V),V;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(V){let L=W[V.id],k=V.uniforms,A=V.__cache;$.bindBuffer($.UNIFORM_BUFFER,L);for(let I=0,S=k.length;I<S;I++){let y=Array.isArray(k[I])?k[I]:[k[I]];for(let B=0,D=y.length;B<D;B++){let C=y[B];if(M(C,I,B,A)===!0){let T=C.__offset,P=Array.isArray(C.value)?C.value:[C.value],f=0;for(let h=0;h<P.length;h++){let b=P[h],l=F(b);if(typeof b==="number"||typeof b==="boolean")C.__data[0]=b,$.bufferSubData($.UNIFORM_BUFFER,T+f,C.__data);else if(b.isMatrix3)C.__data[0]=b.elements[0],C.__data[1]=b.elements[1],C.__data[2]=b.elements[2],C.__data[3]=0,C.__data[4]=b.elements[3],C.__data[5]=b.elements[4],C.__data[6]=b.elements[5],C.__data[7]=0,C.__data[8]=b.elements[6],C.__data[9]=b.elements[7],C.__data[10]=b.elements[8],C.__data[11]=0;else b.toArray(C.__data,f),f+=l.storage/Float32Array.BYTES_PER_ELEMENT}$.bufferSubData($.UNIFORM_BUFFER,T,C.__data)}}}$.bindBuffer($.UNIFORM_BUFFER,null)}function M(V,L,k,A){let I=V.value,S=L+"_"+k;if(A[S]===void 0){if(typeof I==="number"||typeof I==="boolean")A[S]=I;else A[S]=I.clone();return!0}else{let y=A[S];if(typeof I==="number"||typeof I==="boolean"){if(y!==I)return A[S]=I,!0}else if(y.equals(I)===!1)return y.copy(I),!0}return!1}function O(V){let L=V.uniforms,k=0,A=16;for(let S=0,y=L.length;S<y;S++){let B=Array.isArray(L[S])?L[S]:[L[S]];for(let D=0,C=B.length;D<C;D++){let T=B[D],P=Array.isArray(T.value)?T.value:[T.value];for(let f=0,h=P.length;f<h;f++){let b=P[f],l=F(b),x=k%A,s=x%l.boundary,t=x+s;if(k+=s,t!==0&&A-t<l.storage)k+=A-t;T.__data=new Float32Array(l.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=k,k+=l.storage}}}let I=k%A;if(I>0)k+=A-I;return V.__size=k,V.__cache={},this}function F(V){let L={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")L.boundary=4,L.storage=4;else if(V.isVector2)L.boundary=8,L.storage=8;else if(V.isVector3||V.isColor)L.boundary=16,L.storage=12;else if(V.isVector4)L.boundary=16,L.storage=16;else if(V.isMatrix3)L.boundary=48,L.storage=48;else if(V.isMatrix4)L.boundary=64,L.storage=64;else if(V.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",V);return L}function N(V){let L=V.target;L.removeEventListener("dispose",N);let k=X.indexOf(L.__bindingPointIndex);X.splice(k,1),$.deleteBuffer(W[L.id]),delete W[L.id],delete K[L.id]}function R(){for(let V in W)$.deleteBuffer(W[V]);X=[],W={},K={}}return{bind:Y,update:U,dispose:R}}class AZ{constructor($={}){let{canvas:J=KK(),context:Q=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:X=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:Y=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=$;this.isWebGLRenderer=!0;let q;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Q.getContextAttributes().alpha}else q=K;let M=new Uint32Array(4),O=new Int32Array(4),F=null,N=null,R=[],V=[];this.domElement=J,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=l8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,k=!1;this._outputColorSpace=C8;let A=0,I=0,S=null,y=-1,B=null,D=new i0,C=new i0,T=null,P=new y0(0),f=0,h=J.width,b=J.height,l=1,x=null,s=null,t=new i0(0,0,h,b),X0=new i0(0,0,h,b),G0=!1,B0=new E9,R0=!1,o=!1,Z0=new g0,J0=new g,O0=new i0,D0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z0=!1;function e0(){return S===null?l:1}let j=Q;function l0(z,p){return J.getContext(z,p)}try{let z={alpha:!0,depth:Z,stencil:W,antialias:X,premultipliedAlpha:H,preserveDrawingBuffer:Y,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in J)J.setAttribute("data-engine",`three.js r${HW}`);if(J.addEventListener("webglcontextlost",q0,!1),J.addEventListener("webglcontextrestored",Y0,!1),J.addEventListener("webglcontextcreationerror",V0,!1),j===null){if(j=l0("webgl2",z),j===null)if(l0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let j0,T0,L0,a0,C0,M0,J1,q1,d0,w,_,m,a,e,i,_0,W0,I0,S0,K0,d,$0,E0,U0;function b0(){if(j0=new Bq(j),j0.init(),$0=new eN(j,j0),T0=new Mq(j,j0,$,$0),L0=new rN(j,j0),T0.reversedDepthBuffer&&E)L0.buffers.depth.setReversed(!0);a0=new Cq(j),C0=new xN,M0=new tN(j,j0,L0,C0,T0,$0,a0),J1=new Oq(L),q1=new Vq(L),d0=new SU(j),E0=new Nq(j,d0),w=new zq(j,d0,a0,E0),_=new Pq(j,w,d0,a0),S0=new Iq(j,T0,M0),_0=new Fq(C0),m=new hN(L,J1,q1,j0,T0,E0,_0),a=new ZR(L,C0),e=new pN,i=new nN(j0),I0=new qq(L,J1,q1,L0,_,q,H),W0=new iN(L,_,T0),U0=new WR(j,a0,T0,L0),K0=new Rq(j,j0,a0),d=new kq(j,j0,a0),a0.programs=m.programs,L.capabilities=T0,L.extensions=j0,L.properties=C0,L.renderLists=e,L.shadowMap=W0,L.state=L0,L.info=a0}b0();let v=new aK(L,j);this.xr=v,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let z=j0.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=j0.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return l},this.setPixelRatio=function(z){if(z===void 0)return;l=z,this.setSize(h,b,!1)},this.getSize=function(z){return z.set(h,b)},this.setSize=function(z,p,c=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(h=z,b=p,J.width=Math.floor(z*l),J.height=Math.floor(p*l),c===!0)J.style.width=z+"px",J.style.height=p+"px";this.setViewport(0,0,z,p)},this.getDrawingBufferSize=function(z){return z.set(h*l,b*l).floor()},this.setDrawingBufferSize=function(z,p,c){h=z,b=p,l=c,J.width=Math.floor(z*c),J.height=Math.floor(p*c),this.setViewport(0,0,z,p)},this.getCurrentViewport=function(z){return z.copy(D)},this.getViewport=function(z){return z.copy(t)},this.setViewport=function(z,p,c,n){if(z.isVector4)t.set(z.x,z.y,z.z,z.w);else t.set(z,p,c,n);L0.viewport(D.copy(t).multiplyScalar(l).round())},this.getScissor=function(z){return z.copy(X0)},this.setScissor=function(z,p,c,n){if(z.isVector4)X0.set(z.x,z.y,z.z,z.w);else X0.set(z,p,c,n);L0.scissor(C.copy(X0).multiplyScalar(l).round())},this.getScissorTest=function(){return G0},this.setScissorTest=function(z){L0.setScissorTest(G0=z)},this.setOpaqueSort=function(z){x=z},this.setTransparentSort=function(z){s=z},this.getClearColor=function(z){return z.copy(I0.getClearColor())},this.setClearColor=function(){I0.setClearColor(...arguments)},this.getClearAlpha=function(){return I0.getClearAlpha()},this.setClearAlpha=function(){I0.setClearAlpha(...arguments)},this.clear=function(z=!0,p=!0,c=!0){let n=0;if(z){let u=!1;if(S!==null){let H0=S.texture.format;u=H0===LQ||H0===OQ||H0===FQ}if(u){let H0=S.texture.type,F0=H0===W7||H0===F6||H0===Q9||H0===O6||H0===RQ||H0===MQ,P0=I0.getClearColor(),k0=I0.getClearAlpha(),v0=P0.r,h0=P0.g,w0=P0.b;if(F0)M[0]=v0,M[1]=h0,M[2]=w0,M[3]=k0,j.clearBufferuiv(j.COLOR,0,M);else O[0]=v0,O[1]=h0,O[2]=w0,O[3]=k0,j.clearBufferiv(j.COLOR,0,O)}else n|=j.COLOR_BUFFER_BIT}if(p)n|=j.DEPTH_BUFFER_BIT;if(c)n|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);j.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){J.removeEventListener("webglcontextlost",q0,!1),J.removeEventListener("webglcontextrestored",Y0,!1),J.removeEventListener("webglcontextcreationerror",V0,!1),I0.dispose(),e.dispose(),i.dispose(),C0.dispose(),J1.dispose(),q1.dispose(),_.dispose(),E0.dispose(),U0.dispose(),m.dispose(),v.dispose(),v.removeEventListener("sessionstart",_8),v.removeEventListener("sessionend",V8),B7.stop()};function q0(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Y0(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let z=a0.autoReset,p=W0.enabled,c=W0.autoUpdate,n=W0.needsUpdate,u=W0.type;b0(),a0.autoReset=z,W0.enabled=p,W0.autoUpdate=c,W0.needsUpdate=n,W0.type=u}function V0(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Q0(z){let p=z.target;p.removeEventListener("dispose",Q0),r(p)}function r(z){A0(z),C0.remove(z)}function A0(z){let p=C0.get(z).programs;if(p!==void 0){if(p.forEach(function(c){m.releaseProgram(c)}),z.isShaderMaterial)m.releaseShaderCache(z)}}this.renderBufferDirect=function(z,p,c,n,u,H0){if(p===null)p=D0;let F0=u.isMesh&&u.matrixWorld.determinant()<0,P0=IY(z,p,c,n,u);L0.setMaterial(n,F0);let k0=c.index,v0=1;if(n.wireframe===!0){if(k0=w.getWireframeAttribute(c),k0===void 0)return;v0=2}let h0=c.drawRange,w0=c.attributes.position,s0=h0.start*v0,Z1=(h0.start+h0.count)*v0;if(H0!==null)s0=Math.max(s0,H0.start*v0),Z1=Math.min(Z1,(H0.start+H0.count)*v0);if(k0!==null)s0=Math.max(s0,0),Z1=Math.min(Z1,k0.count);else if(w0!==void 0&&w0!==null)s0=Math.max(s0,0),Z1=Math.min(Z1,w0.count);let O1=Z1-s0;if(O1<0||O1===1/0)return;E0.setup(u,n,P0,c,k0);let G1,K1=K0;if(k0!==null)G1=d0.get(k0),K1=d,K1.setIndex(G1);if(u.isMesh)if(n.wireframe===!0)L0.setLineWidth(n.wireframeLinewidth*e0()),K1.setMode(j.LINES);else K1.setMode(j.TRIANGLES);else if(u.isLine){let f0=n.linewidth;if(f0===void 0)f0=1;if(L0.setLineWidth(f0*e0()),u.isLineSegments)K1.setMode(j.LINES);else if(u.isLineLoop)K1.setMode(j.LINE_LOOP);else K1.setMode(j.LINE_STRIP)}else if(u.isPoints)K1.setMode(j.POINTS);else if(u.isSprite)K1.setMode(j.TRIANGLES);if(u.isBatchedMesh)if(u._multiDrawInstances!==null)E6("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),K1.renderMultiDrawInstances(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount,u._multiDrawInstances);else if(!j0.get("WEBGL_multi_draw")){let{_multiDrawStarts:f0,_multiDrawCounts:N1,_multiDrawCount:r0}=u,n1=k0?d0.get(k0).bytesPerElement:1,s7=C0.get(n).currentProgram.getUniforms();for(let s1=0;s1<r0;s1++)s7.setValue(j,"_gl_DrawID",s1),K1.render(f0[s1]/n1,N1[s1])}else K1.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else if(u.isInstancedMesh)K1.renderInstances(s0,O1,u.count);else if(c.isInstancedBufferGeometry){let f0=c._maxInstanceCount!==void 0?c._maxInstanceCount:1/0,N1=Math.min(c.instanceCount,f0);K1.renderInstances(s0,O1,N1)}else K1.render(s0,O1)};function x0(z,p,c){if(z.transparent===!0&&z.side===H8&&z.forceSinglePass===!1)z.side=a1,z.needsUpdate=!0,p9(z,p,c),z.side=Q7,z.needsUpdate=!0,p9(z,p,c),z.side=H8;else p9(z,p,c)}this.compile=function(z,p,c=null){if(c===null)c=z;if(N=i.get(c),N.init(p),V.push(N),c.traverseVisible(function(u){if(u.isLight&&u.layers.test(p.layers)){if(N.pushLight(u),u.castShadow)N.pushShadow(u)}}),z!==c)z.traverseVisible(function(u){if(u.isLight&&u.layers.test(p.layers)){if(N.pushLight(u),u.castShadow)N.pushShadow(u)}});N.setupLights();let n=new Set;return z.traverse(function(u){if(!(u.isMesh||u.isPoints||u.isLine||u.isSprite))return;let H0=u.material;if(H0)if(Array.isArray(H0))for(let F0=0;F0<H0.length;F0++){let P0=H0[F0];x0(P0,c,u),n.add(P0)}else x0(H0,c,u),n.add(H0)}),N=V.pop(),n},this.compileAsync=function(z,p,c=null){let n=this.compile(z,p,c);return new Promise((u)=>{function H0(){if(n.forEach(function(F0){if(C0.get(F0).currentProgram.isReady())n.delete(F0)}),n.size===0){u(z);return}setTimeout(H0,10)}if(j0.get("KHR_parallel_shader_compile")!==null)H0();else setTimeout(H0,10)})};let W1=null;function Q1(z){if(W1)W1(z)}function _8(){B7.stop()}function V8(){B7.start()}let B7=new gK;if(B7.setAnimationLoop(Q1),typeof self<"u")B7.setContext(self);this.setAnimationLoop=function(z){W1=z,v.setAnimationLoop(z),z===null?B7.stop():B7.start()},v.addEventListener("sessionstart",_8),v.addEventListener("sessionend",V8),this.render=function(z,p){if(p!==void 0&&p.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(p.parent===null&&p.matrixWorldAutoUpdate===!0)p.updateMatrixWorld();if(v.enabled===!0&&v.isPresenting===!0){if(v.cameraAutoUpdate===!0)v.updateCamera(p);p=v.getCamera()}if(z.isScene===!0)z.onBeforeRender(L,z,p,S);if(N=i.get(z,V.length),N.init(p),V.push(N),Z0.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),B0.setFromProjectionMatrix(Z0,tQ,p.reversedDepth),o=this.localClippingEnabled,R0=_0.init(this.clippingPlanes,o),F=e.get(z,R.length),F.init(),R.push(F),v.enabled===!0&&v.isPresenting===!0){let H0=L.xr.getDepthSensingMesh();if(H0!==null)jJ(H0,p,-1/0,L.sortObjects)}if(jJ(z,p,0,L.sortObjects),F.finish(),L.sortObjects===!0)F.sort(x,s);if(z0=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,z0)I0.addToRenderList(F,z);if(this.info.render.frame++,R0===!0)_0.beginShadows();let c=N.state.shadowsArray;if(W0.render(c,z,p),R0===!0)_0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:n,transmissive:u}=F;if(N.setupLights(),p.isArrayCamera){let H0=p.cameras;if(u.length>0)for(let F0=0,P0=H0.length;F0<P0;F0++){let k0=H0[F0];D5(n,u,z,k0)}if(z0)I0.render(z);for(let F0=0,P0=H0.length;F0<P0;F0++){let k0=H0[F0];L5(F,z,k0,k0.viewport)}}else{if(u.length>0)D5(n,u,z,p);if(z0)I0.render(z);L5(F,z,p)}if(S!==null&&I===0)M0.updateMultisampleRenderTarget(S),M0.updateRenderTargetMipmap(S);if(z.isScene===!0)z.onAfterRender(L,z,p);if(E0.resetDefaultState(),y=-1,B=null,V.pop(),V.length>0){if(N=V[V.length-1],R0===!0)_0.setGlobalState(L.clippingPlanes,N.state.camera)}else N=null;if(R.pop(),R.length>0)F=R[R.length-1];else F=null};function jJ(z,p,c,n){if(z.visible===!1)return;if(z.layers.test(p.layers)){if(z.isGroup)c=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(p)}else if(z.isLight){if(N.pushLight(z),z.castShadow)N.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||B0.intersectsSprite(z)){if(n)O0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(Z0);let F0=_.update(z),P0=z.material;if(P0.visible)F.push(z,F0,P0,c,O0.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||B0.intersectsObject(z)){let F0=_.update(z),P0=z.material;if(n){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();O0.copy(z.boundingSphere.center)}else{if(F0.boundingSphere===null)F0.computeBoundingSphere();O0.copy(F0.boundingSphere.center)}O0.applyMatrix4(z.matrixWorld).applyMatrix4(Z0)}if(Array.isArray(P0)){let k0=F0.groups;for(let v0=0,h0=k0.length;v0<h0;v0++){let w0=k0[v0],s0=P0[w0.materialIndex];if(s0&&s0.visible)F.push(z,F0,s0,c,O0.z,w0)}}else if(P0.visible)F.push(z,F0,P0,c,O0.z,null)}}}let H0=z.children;for(let F0=0,P0=H0.length;F0<P0;F0++)jJ(H0[F0],p,c,n)}function L5(z,p,c,n){let{opaque:u,transmissive:H0,transparent:F0}=z;if(N.setupLightsView(c),R0===!0)_0.setGlobalState(L.clippingPlanes,c);if(n)L0.viewport(D.copy(n));if(u.length>0)g9(u,p,c);if(H0.length>0)g9(H0,p,c);if(F0.length>0)g9(F0,p,c);L0.buffers.depth.setTest(!0),L0.buffers.depth.setMask(!0),L0.buffers.color.setMask(!0),L0.setPolygonOffset(!1)}function D5(z,p,c,n){if((c.isScene===!0?c.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[n.id]===void 0)N.state.transmissionRenderTarget[n.id]=new O8(1,1,{generateMipmaps:!0,type:j0.has("EXT_color_buffer_half_float")||j0.has("EXT_color_buffer_float")?Z9:W7,minFilter:m8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:o0.workingColorSpace});let H0=N.state.transmissionRenderTarget[n.id],F0=n.viewport||D;H0.setSize(F0.z*L.transmissionResolutionScale,F0.w*L.transmissionResolutionScale);let P0=L.getRenderTarget(),k0=L.getActiveCubeFace(),v0=L.getActiveMipmapLevel();if(L.setRenderTarget(H0),L.getClearColor(P),f=L.getClearAlpha(),f<1)L.setClearColor(16777215,0.5);if(L.clear(),z0)I0.render(c);let h0=L.toneMapping;L.toneMapping=l8;let w0=n.viewport;if(n.viewport!==void 0)n.viewport=void 0;if(N.setupLightsView(n),R0===!0)_0.setGlobalState(L.clippingPlanes,n);if(g9(z,c,n),M0.updateMultisampleRenderTarget(H0),M0.updateRenderTargetMipmap(H0),j0.has("WEBGL_multisampled_render_to_texture")===!1){let s0=!1;for(let Z1=0,O1=p.length;Z1<O1;Z1++){let G1=p[Z1],K1=G1.object,f0=G1.geometry,N1=G1.material,r0=G1.group;if(N1.side===H8&&K1.layers.test(n.layers)){let n1=N1.side;N1.side=a1,N1.needsUpdate=!0,_5(K1,c,n,f0,N1,r0),N1.side=n1,N1.needsUpdate=!0,s0=!0}}if(s0===!0)M0.updateMultisampleRenderTarget(H0),M0.updateRenderTargetMipmap(H0)}if(L.setRenderTarget(P0,k0,v0),L.setClearColor(P,f),w0!==void 0)n.viewport=w0;L.toneMapping=h0}function g9(z,p,c){let n=p.isScene===!0?p.overrideMaterial:null;for(let u=0,H0=z.length;u<H0;u++){let F0=z[u],P0=F0.object,k0=F0.geometry,v0=F0.group,h0=F0.material;if(h0.allowOverride===!0&&n!==null)h0=n;if(P0.layers.test(c.layers))_5(P0,p,c,k0,h0,v0)}}function _5(z,p,c,n,u,H0){if(z.onBeforeRender(L,p,c,n,u,H0),z.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),u.onBeforeRender(L,p,c,n,z,H0),u.transparent===!0&&u.side===H8&&u.forceSinglePass===!1)u.side=a1,u.needsUpdate=!0,L.renderBufferDirect(c,p,n,u,z,H0),u.side=Q7,u.needsUpdate=!0,L.renderBufferDirect(c,p,n,u,z,H0),u.side=H8;else L.renderBufferDirect(c,p,n,u,z,H0);z.onAfterRender(L,p,c,n,u,H0)}function p9(z,p,c){if(p.isScene!==!0)p=D0;let n=C0.get(z),u=N.state.lights,H0=N.state.shadowsArray,F0=u.state.version,P0=m.getParameters(z,u.state,H0,p,c),k0=m.getProgramCacheKey(P0),v0=n.programs;if(n.environment=z.isMeshStandardMaterial?p.environment:null,n.fog=p.fog,n.envMap=(z.isMeshStandardMaterial?q1:J1).get(z.envMap||n.environment),n.envMapRotation=n.environment!==null&&z.envMap===null?p.environmentRotation:z.envMapRotation,v0===void 0)z.addEventListener("dispose",Q0),v0=new Map,n.programs=v0;let h0=v0.get(k0);if(h0!==void 0){if(n.currentProgram===h0&&n.lightsStateVersion===F0)return B5(z,P0),h0}else P0.uniforms=m.getUniforms(z),z.onBeforeCompile(P0,L),h0=m.acquireProgram(P0,k0),v0.set(k0,h0),n.uniforms=P0.uniforms;let w0=n.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)w0.clippingPlanes=_0.uniform;if(B5(z,P0),n.needsLights=AY(z),n.lightsStateVersion=F0,n.needsLights)w0.ambientLightColor.value=u.state.ambient,w0.lightProbe.value=u.state.probe,w0.directionalLights.value=u.state.directional,w0.directionalLightShadows.value=u.state.directionalShadow,w0.spotLights.value=u.state.spot,w0.spotLightShadows.value=u.state.spotShadow,w0.rectAreaLights.value=u.state.rectArea,w0.ltc_1.value=u.state.rectAreaLTC1,w0.ltc_2.value=u.state.rectAreaLTC2,w0.pointLights.value=u.state.point,w0.pointLightShadows.value=u.state.pointShadow,w0.hemisphereLights.value=u.state.hemi,w0.directionalShadowMap.value=u.state.directionalShadowMap,w0.directionalShadowMatrix.value=u.state.directionalShadowMatrix,w0.spotShadowMap.value=u.state.spotShadowMap,w0.spotLightMatrix.value=u.state.spotLightMatrix,w0.spotLightMap.value=u.state.spotLightMap,w0.pointShadowMap.value=u.state.pointShadowMap,w0.pointShadowMatrix.value=u.state.pointShadowMatrix;return n.currentProgram=h0,n.uniformsList=null,h0}function V5(z){if(z.uniformsList===null){let p=z.currentProgram.getUniforms();z.uniformsList=L9.seqWithValue(p.seq,z.uniforms)}return z.uniformsList}function B5(z,p){let c=C0.get(z);c.outputColorSpace=p.outputColorSpace,c.batching=p.batching,c.batchingColor=p.batchingColor,c.instancing=p.instancing,c.instancingColor=p.instancingColor,c.instancingMorph=p.instancingMorph,c.skinning=p.skinning,c.morphTargets=p.morphTargets,c.morphNormals=p.morphNormals,c.morphColors=p.morphColors,c.morphTargetsCount=p.morphTargetsCount,c.numClippingPlanes=p.numClippingPlanes,c.numIntersection=p.numClipIntersection,c.vertexAlphas=p.vertexAlphas,c.vertexTangents=p.vertexTangents,c.toneMapping=p.toneMapping}function IY(z,p,c,n,u){if(p.isScene!==!0)p=D0;M0.resetTextureUnits();let H0=p.fog,F0=n.isMeshStandardMaterial?p.environment:null,P0=S===null?L.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:h1,k0=(n.isMeshStandardMaterial?q1:J1).get(n.envMap||F0),v0=n.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,h0=!!c.attributes.tangent&&(!!n.normalMap||n.anisotropy>0),w0=!!c.morphAttributes.position,s0=!!c.morphAttributes.normal,Z1=!!c.morphAttributes.color,O1=l8;if(n.toneMapped){if(S===null||S.isXRRenderTarget===!0)O1=L.toneMapping}let G1=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,K1=G1!==void 0?G1.length:0,f0=C0.get(n),N1=N.state.lights;if(R0===!0){if(o===!0||z!==B){let y1=z===B&&n.id===y;_0.setState(n,z,y1)}}let r0=!1;if(n.version===f0.__version){if(f0.needsLights&&f0.lightsStateVersion!==N1.state.version)r0=!0;else if(f0.outputColorSpace!==P0)r0=!0;else if(u.isBatchedMesh&&f0.batching===!1)r0=!0;else if(!u.isBatchedMesh&&f0.batching===!0)r0=!0;else if(u.isBatchedMesh&&f0.batchingColor===!0&&u.colorTexture===null)r0=!0;else if(u.isBatchedMesh&&f0.batchingColor===!1&&u.colorTexture!==null)r0=!0;else if(u.isInstancedMesh&&f0.instancing===!1)r0=!0;else if(!u.isInstancedMesh&&f0.instancing===!0)r0=!0;else if(u.isSkinnedMesh&&f0.skinning===!1)r0=!0;else if(!u.isSkinnedMesh&&f0.skinning===!0)r0=!0;else if(u.isInstancedMesh&&f0.instancingColor===!0&&u.instanceColor===null)r0=!0;else if(u.isInstancedMesh&&f0.instancingColor===!1&&u.instanceColor!==null)r0=!0;else if(u.isInstancedMesh&&f0.instancingMorph===!0&&u.morphTexture===null)r0=!0;else if(u.isInstancedMesh&&f0.instancingMorph===!1&&u.morphTexture!==null)r0=!0;else if(f0.envMap!==k0)r0=!0;else if(n.fog===!0&&f0.fog!==H0)r0=!0;else if(f0.numClippingPlanes!==void 0&&(f0.numClippingPlanes!==_0.numPlanes||f0.numIntersection!==_0.numIntersection))r0=!0;else if(f0.vertexAlphas!==v0)r0=!0;else if(f0.vertexTangents!==h0)r0=!0;else if(f0.morphTargets!==w0)r0=!0;else if(f0.morphNormals!==s0)r0=!0;else if(f0.morphColors!==Z1)r0=!0;else if(f0.toneMapping!==O1)r0=!0;else if(f0.morphTargetsCount!==K1)r0=!0}else r0=!0,f0.__version=n.version;let n1=f0.currentProgram;if(r0===!0)n1=p9(n,p,u);let s7=!1,s1=!1,u6=!1,R1=n1.getUniforms(),J8=f0.uniforms;if(L0.useProgram(n1.program))s7=!0,s1=!0,u6=!0;if(n.id!==y)y=n.id,s1=!0;if(s7||B!==z){if(L0.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();R1.setValue(j,"projectionMatrix",z.projectionMatrix),R1.setValue(j,"viewMatrix",z.matrixWorldInverse);let g1=R1.map.cameraPosition;if(g1!==void 0)g1.setValue(j,J0.setFromMatrixPosition(z.matrixWorld));if(T0.logarithmicDepthBuffer)R1.setValue(j,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)R1.setValue(j,"isOrthographic",z.isOrthographicCamera===!0);if(B!==z)B=z,s1=!0,u6=!0}if(u.isSkinnedMesh){R1.setOptional(j,u,"bindMatrix"),R1.setOptional(j,u,"bindMatrixInverse");let y1=u.skeleton;if(y1){if(y1.boneTexture===null)y1.computeBoneTexture();R1.setValue(j,"boneTexture",y1.boneTexture,M0)}}if(u.isBatchedMesh){if(R1.setOptional(j,u,"batchingTexture"),R1.setValue(j,"batchingTexture",u._matricesTexture,M0),R1.setOptional(j,u,"batchingIdTexture"),R1.setValue(j,"batchingIdTexture",u._indirectTexture,M0),R1.setOptional(j,u,"batchingColorTexture"),u._colorsTexture!==null)R1.setValue(j,"batchingColorTexture",u._colorsTexture,M0)}let Q8=c.morphAttributes;if(Q8.position!==void 0||Q8.normal!==void 0||Q8.color!==void 0)S0.update(u,c,n1);if(s1||f0.receiveShadow!==u.receiveShadow)f0.receiveShadow=u.receiveShadow,R1.setValue(j,"receiveShadow",u.receiveShadow);if(n.isMeshGouraudMaterial&&n.envMap!==null)J8.envMap.value=k0,J8.flipEnvMap.value=k0.isCubeTexture&&k0.isRenderTargetTexture===!1?-1:1;if(n.isMeshStandardMaterial&&n.envMap===null&&p.environment!==null)J8.envMapIntensity.value=p.environmentIntensity;if(s1){if(R1.setValue(j,"toneMappingExposure",L.toneMappingExposure),f0.needsLights)PY(J8,u6);if(H0&&n.fog===!0)a.refreshFogUniforms(J8,H0);a.refreshMaterialUniforms(J8,n,l,b,N.state.transmissionRenderTarget[z.id]),L9.upload(j,V5(f0),J8,M0)}if(n.isShaderMaterial&&n.uniformsNeedUpdate===!0)L9.upload(j,V5(f0),J8,M0),n.uniformsNeedUpdate=!1;if(n.isSpriteMaterial)R1.setValue(j,"center",u.center);if(R1.setValue(j,"modelViewMatrix",u.modelViewMatrix),R1.setValue(j,"normalMatrix",u.normalMatrix),R1.setValue(j,"modelMatrix",u.matrixWorld),n.isShaderMaterial||n.isRawShaderMaterial){let y1=n.uniformsGroups;for(let g1=0,fJ=y1.length;g1<fJ;g1++){let z7=y1[g1];U0.update(z7,n1),U0.bind(z7,n1)}}return n1}function PY(z,p){z.ambientLightColor.needsUpdate=p,z.lightProbe.needsUpdate=p,z.directionalLights.needsUpdate=p,z.directionalLightShadows.needsUpdate=p,z.pointLights.needsUpdate=p,z.pointLightShadows.needsUpdate=p,z.spotLights.needsUpdate=p,z.spotLightShadows.needsUpdate=p,z.rectAreaLights.needsUpdate=p,z.hemisphereLights.needsUpdate=p}function AY(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(z,p,c){let n=C0.get(z);if(n.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,n.__autoAllocateDepthBuffer===!1)n.__useRenderToTexture=!1;C0.get(z.texture).__webglTexture=p,C0.get(z.depthTexture).__webglTexture=n.__autoAllocateDepthBuffer?void 0:c,n.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,p){let c=C0.get(z);c.__webglFramebuffer=p,c.__useDefaultFramebuffer=p===void 0};let TY=j.createFramebuffer();this.setRenderTarget=function(z,p=0,c=0){S=z,A=p,I=c;let n=!0,u=null,H0=!1,F0=!1;if(z){let k0=C0.get(z);if(k0.__useDefaultFramebuffer!==void 0)L0.bindFramebuffer(j.FRAMEBUFFER,null),n=!1;else if(k0.__webglFramebuffer===void 0)M0.setupRenderTarget(z);else if(k0.__hasExternalTextures)M0.rebindTextures(z,C0.get(z.texture).__webglTexture,C0.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let w0=z.depthTexture;if(k0.__boundDepthTexture!==w0){if(w0!==null&&C0.has(w0)&&(z.width!==w0.image.width||z.height!==w0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M0.setupDepthRenderbuffer(z)}}let v0=z.texture;if(v0.isData3DTexture||v0.isDataArrayTexture||v0.isCompressedArrayTexture)F0=!0;let h0=C0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(h0[p]))u=h0[p][c];else u=h0[p];H0=!0}else if(z.samples>0&&M0.useMultisampledRTT(z)===!1)u=C0.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(h0))u=h0[c];else u=h0;D.copy(z.viewport),C.copy(z.scissor),T=z.scissorTest}else D.copy(t).multiplyScalar(l).floor(),C.copy(X0).multiplyScalar(l).floor(),T=G0;if(c!==0)u=TY;if(L0.bindFramebuffer(j.FRAMEBUFFER,u)&&n)L0.drawBuffers(z,u);if(L0.viewport(D),L0.scissor(C),L0.setScissorTest(T),H0){let k0=C0.get(z.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+p,k0.__webglTexture,c)}else if(F0){let k0=p;for(let v0=0;v0<z.textures.length;v0++){let h0=C0.get(z.textures[v0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+v0,h0.__webglTexture,c,k0)}}else if(z!==null&&c!==0){let k0=C0.get(z.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,k0.__webglTexture,c)}y=-1},this.readRenderTargetPixels=function(z,p,c,n,u,H0,F0,P0=0){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k0=C0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&F0!==void 0)k0=k0[F0];if(k0){L0.bindFramebuffer(j.FRAMEBUFFER,k0);try{let v0=z.textures[P0],h0=v0.format,w0=v0.type;if(!T0.textureFormatReadable(h0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T0.textureTypeReadable(w0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(p>=0&&p<=z.width-n&&(c>=0&&c<=z.height-u)){if(z.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+P0);j.readPixels(p,c,n,u,$0.convert(h0),$0.convert(w0),H0)}}finally{let v0=S!==null?C0.get(S).__webglFramebuffer:null;L0.bindFramebuffer(j.FRAMEBUFFER,v0)}}},this.readRenderTargetPixelsAsync=async function(z,p,c,n,u,H0,F0,P0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k0=C0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&F0!==void 0)k0=k0[F0];if(k0)if(p>=0&&p<=z.width-n&&(c>=0&&c<=z.height-u)){L0.bindFramebuffer(j.FRAMEBUFFER,k0);let v0=z.textures[P0],h0=v0.format,w0=v0.type;if(!T0.textureFormatReadable(h0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T0.textureTypeReadable(w0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let s0=j.createBuffer();if(j.bindBuffer(j.PIXEL_PACK_BUFFER,s0),j.bufferData(j.PIXEL_PACK_BUFFER,H0.byteLength,j.STREAM_READ),z.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+P0);j.readPixels(p,c,n,u,$0.convert(h0),$0.convert(w0),0);let Z1=S!==null?C0.get(S).__webglFramebuffer:null;L0.bindFramebuffer(j.FRAMEBUFFER,Z1);let O1=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await XK(j,O1,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,s0),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,H0),j.deleteBuffer(s0),j.deleteSync(O1),H0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,p=null,c=0){let n=Math.pow(2,-c),u=Math.floor(z.image.width*n),H0=Math.floor(z.image.height*n),F0=p!==null?p.x:0,P0=p!==null?p.y:0;M0.setTexture2D(z,0),j.copyTexSubImage2D(j.TEXTURE_2D,c,0,0,F0,P0,u,H0),L0.unbindTexture()};let wY=j.createFramebuffer(),SY=j.createFramebuffer();if(this.copyTextureToTexture=function(z,p,c=null,n=null,u=0,H0=null){if(H0===null)if(u!==0)E6("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),H0=u,u=0;else H0=0;let F0,P0,k0,v0,h0,w0,s0,Z1,O1,G1=z.isCompressedTexture?z.mipmaps[H0]:z.image;if(c!==null)F0=c.max.x-c.min.x,P0=c.max.y-c.min.y,k0=c.isBox3?c.max.z-c.min.z:1,v0=c.min.x,h0=c.min.y,w0=c.isBox3?c.min.z:0;else{let Q8=Math.pow(2,-u);if(F0=Math.floor(G1.width*Q8),P0=Math.floor(G1.height*Q8),z.isDataArrayTexture)k0=G1.depth;else if(z.isData3DTexture)k0=Math.floor(G1.depth*Q8);else k0=1;v0=0,h0=0,w0=0}if(n!==null)s0=n.x,Z1=n.y,O1=n.z;else s0=0,Z1=0,O1=0;let K1=$0.convert(p.format),f0=$0.convert(p.type),N1;if(p.isData3DTexture)M0.setTexture3D(p,0),N1=j.TEXTURE_3D;else if(p.isDataArrayTexture||p.isCompressedArrayTexture)M0.setTexture2DArray(p,0),N1=j.TEXTURE_2D_ARRAY;else M0.setTexture2D(p,0),N1=j.TEXTURE_2D;j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,p.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,p.unpackAlignment);let r0=j.getParameter(j.UNPACK_ROW_LENGTH),n1=j.getParameter(j.UNPACK_IMAGE_HEIGHT),s7=j.getParameter(j.UNPACK_SKIP_PIXELS),s1=j.getParameter(j.UNPACK_SKIP_ROWS),u6=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,G1.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,G1.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,v0),j.pixelStorei(j.UNPACK_SKIP_ROWS,h0),j.pixelStorei(j.UNPACK_SKIP_IMAGES,w0);let R1=z.isDataArrayTexture||z.isData3DTexture,J8=p.isDataArrayTexture||p.isData3DTexture;if(z.isDepthTexture){let Q8=C0.get(z),y1=C0.get(p),g1=C0.get(Q8.__renderTarget),fJ=C0.get(y1.__renderTarget);L0.bindFramebuffer(j.READ_FRAMEBUFFER,g1.__webglFramebuffer),L0.bindFramebuffer(j.DRAW_FRAMEBUFFER,fJ.__webglFramebuffer);for(let z7=0;z7<k0;z7++){if(R1)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,C0.get(z).__webglTexture,u,w0+z7),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,C0.get(p).__webglTexture,H0,O1+z7);j.blitFramebuffer(v0,h0,F0,P0,s0,Z1,F0,P0,j.DEPTH_BUFFER_BIT,j.NEAREST)}L0.bindFramebuffer(j.READ_FRAMEBUFFER,null),L0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(u!==0||z.isRenderTargetTexture||C0.has(z)){let Q8=C0.get(z),y1=C0.get(p);L0.bindFramebuffer(j.READ_FRAMEBUFFER,wY),L0.bindFramebuffer(j.DRAW_FRAMEBUFFER,SY);for(let g1=0;g1<k0;g1++){if(R1)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Q8.__webglTexture,u,w0+g1);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Q8.__webglTexture,u);if(J8)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,y1.__webglTexture,H0,O1+g1);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,y1.__webglTexture,H0);if(u!==0)j.blitFramebuffer(v0,h0,F0,P0,s0,Z1,F0,P0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(J8)j.copyTexSubImage3D(N1,H0,s0,Z1,O1+g1,v0,h0,F0,P0);else j.copyTexSubImage2D(N1,H0,s0,Z1,v0,h0,F0,P0)}L0.bindFramebuffer(j.READ_FRAMEBUFFER,null),L0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J8)if(z.isDataTexture||z.isData3DTexture)j.texSubImage3D(N1,H0,s0,Z1,O1,F0,P0,k0,K1,f0,G1.data);else if(p.isCompressedArrayTexture)j.compressedTexSubImage3D(N1,H0,s0,Z1,O1,F0,P0,k0,K1,G1.data);else j.texSubImage3D(N1,H0,s0,Z1,O1,F0,P0,k0,K1,f0,G1);else if(z.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,H0,s0,Z1,F0,P0,K1,f0,G1.data);else if(z.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,H0,s0,Z1,G1.width,G1.height,K1,G1.data);else j.texSubImage2D(j.TEXTURE_2D,H0,s0,Z1,F0,P0,K1,f0,G1);if(j.pixelStorei(j.UNPACK_ROW_LENGTH,r0),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,n1),j.pixelStorei(j.UNPACK_SKIP_PIXELS,s7),j.pixelStorei(j.UNPACK_SKIP_ROWS,s1),j.pixelStorei(j.UNPACK_SKIP_IMAGES,u6),H0===0&&p.generateMipmaps)j.generateMipmap(N1);L0.unbindTexture()},this.initRenderTarget=function(z){if(C0.get(z).__webglFramebuffer===void 0)M0.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)M0.setTextureCube(z,0);else if(z.isData3DTexture)M0.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M0.setTexture2DArray(z,0);else M0.setTexture2D(z,0);L0.unbindTexture()},this.resetState=function(){A=0,I=0,S=null,L0.reset(),E0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace($){this._outputColorSpace=$;let J=this.getContext();J.drawingBufferColorSpace=o0._getDrawingBufferColorSpace($),J.unpackColorSpace=o0._getUnpackColorSpace()}}function wZ($,J){if(J===oQ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),$;if(J===L6||J===K9){let Q=$.getIndex();if(Q===null){let X=[],H=$.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)X.push(Y);$.setIndex(X),Q=$.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),$}let Z=Q.count-2,W=[];if(J===L6)for(let X=1;X<=Z;X++)W.push(Q.getX(0)),W.push(Q.getX(X)),W.push(Q.getX(X+1));else for(let X=0;X<Z;X++)if(X%2===0)W.push(Q.getX(X)),W.push(Q.getX(X+1)),W.push(Q.getX(X+2));else W.push(Q.getX(X+2)),W.push(Q.getX(X+1)),W.push(Q.getX(X));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let K=$.clone();return K.setIndex(W),K.clearGroups(),K}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",J),$}class bZ extends c8{constructor($){super($);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(J){return new WX(J)}),this.register(function(J){return new KX(J)}),this.register(function(J){return new RX(J)}),this.register(function(J){return new MX(J)}),this.register(function(J){return new FX(J)}),this.register(function(J){return new HX(J)}),this.register(function(J){return new YX(J)}),this.register(function(J){return new UX(J)}),this.register(function(J){return new GX(J)}),this.register(function(J){return new ZX(J)}),this.register(function(J){return new EX(J)}),this.register(function(J){return new XX(J)}),this.register(function(J){return new NX(J)}),this.register(function(J){return new qX(J)}),this.register(function(J){return new JX(J)}),this.register(function(J){return new OX(J)}),this.register(function(J){return new LX(J)})}load($,J,Q,Z){let W=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let Y=E7.extractUrlBase($);K=E7.resolveURL(Y,this.path)}else K=E7.extractUrlBase($);this.manager.itemStart($);let X=function(Y){if(Z)Z(Y);else console.error(Y);W.manager.itemError($),W.manager.itemEnd($)},H=new M9(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load($,function(Y){try{W.parse(Y,K,function(U){J(U),W.manager.itemEnd($)},X)}catch(U){X(U)}},Q,X)}setDRACOLoader($){return this.dracoLoader=$,this}setKTX2Loader($){return this.ktx2Loader=$,this}setMeshoptDecoder($){return this.meshoptDecoder=$,this}register($){if(this.pluginCallbacks.indexOf($)===-1)this.pluginCallbacks.push($);return this}unregister($){if(this.pluginCallbacks.indexOf($)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf($),1);return this}parse($,J,Q,Z){let W,K={},X={},H=new TextDecoder;if(typeof $==="string")W=JSON.parse($);else if($ instanceof ArrayBuffer)if(H.decode(new Uint8Array($,0,4))===DX){try{K[n0.KHR_BINARY_GLTF]=new _X($)}catch(G){if(Z)Z(G);return}W=JSON.parse(K[n0.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode($));else W=$;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let Y=new CX(W,{path:J||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});Y.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](Y);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,K[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case n0.KHR_MATERIALS_UNLIT:K[G]=new QX;break;case n0.KHR_DRACO_MESH_COMPRESSION:K[G]=new VX(W,this.dracoLoader);break;case n0.KHR_TEXTURE_TRANSFORM:K[G]=new BX;break;case n0.KHR_MESH_QUANTIZATION:K[G]=new zX;break;default:if(E.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}Y.setExtensions(K),Y.setPlugins(X),Y.parse(Q,Z)}parseAsync($,J){let Q=this;return new Promise(function(Z,W){Q.parse($,J,Z,W)})}}function KR(){let $={};return{get:function(J){return $[J]},add:function(J,Q){$[J]=Q},remove:function(J){delete $[J]},removeAll:function(){$={}}}}var n0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class JX{constructor($){this.parser=$,this.name=n0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let $=this.parser,J=this.parser.json.nodes||[];for(let Q=0,Z=J.length;Q<Z;Q++){let W=J[Q];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)$._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight($){let J=this.parser,Q="light:"+$,Z=J.cache.get(Q);if(Z)return Z;let W=J.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[$],Y,U=new y0(16777215);if(H.color!==void 0)U.setRGB(H.color[0],H.color[1],H.color[2],h1);let G=H.range!==void 0?H.range:0;switch(H.type){case"directional":Y=new r$(U),Y.target.position.set(0,0,-1),Y.add(Y.target);break;case"point":Y=new a$(U),Y.distance=G;break;case"spot":Y=new i$(U),Y.distance=G,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,Y.angle=H.spot.outerConeAngle,Y.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,Y.target.position.set(0,0,-1),Y.add(Y.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(Y.position.set(0,0,0),A8(Y,H),H.intensity!==void 0)Y.intensity=H.intensity;return Y.name=J.createUniqueName(H.name||"light_"+$),Z=Promise.resolve(Y),J.cache.add(Q,Z),Z}getDependency($,J){if($!=="light")return;return this._loadLight(J)}createNodeAttachment($){let J=this,Q=this.parser,W=Q.json.nodes[$],X=(W.extensions&&W.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(H){return Q._getNodeRef(J.cache,X,H)})}}class QX{constructor(){this.name=n0.KHR_MATERIALS_UNLIT}getMaterialType(){return I8}extendParams($,J,Q){let Z=[];$.color=new y0(1,1,1),$.opacity=1;let W=J.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let K=W.baseColorFactor;$.color.setRGB(K[0],K[1],K[2],h1),$.opacity=K[3]}if(W.baseColorTexture!==void 0)Z.push(Q.assignTexture($,"map",W.baseColorTexture,C8))}return Promise.all(Z)}}class ZX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)J.emissiveIntensity=W;return Promise.resolve()}}class WX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_CLEARCOAT}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.clearcoatFactor!==void 0)J.clearcoat=K.clearcoatFactor;if(K.clearcoatTexture!==void 0)W.push(Q.assignTexture(J,"clearcoatMap",K.clearcoatTexture));if(K.clearcoatRoughnessFactor!==void 0)J.clearcoatRoughness=K.clearcoatRoughnessFactor;if(K.clearcoatRoughnessTexture!==void 0)W.push(Q.assignTexture(J,"clearcoatRoughnessMap",K.clearcoatRoughnessTexture));if(K.clearcoatNormalTexture!==void 0){if(W.push(Q.assignTexture(J,"clearcoatNormalMap",K.clearcoatNormalTexture)),K.clearcoatNormalTexture.scale!==void 0){let X=K.clearcoatNormalTexture.scale;J.clearcoatNormalScale=new u0(X,X)}}return Promise.all(W)}}class KX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_DISPERSION}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return J.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class XX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_IRIDESCENCE}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.iridescenceFactor!==void 0)J.iridescence=K.iridescenceFactor;if(K.iridescenceTexture!==void 0)W.push(Q.assignTexture(J,"iridescenceMap",K.iridescenceTexture));if(K.iridescenceIor!==void 0)J.iridescenceIOR=K.iridescenceIor;if(J.iridescenceThicknessRange===void 0)J.iridescenceThicknessRange=[100,400];if(K.iridescenceThicknessMinimum!==void 0)J.iridescenceThicknessRange[0]=K.iridescenceThicknessMinimum;if(K.iridescenceThicknessMaximum!==void 0)J.iridescenceThicknessRange[1]=K.iridescenceThicknessMaximum;if(K.iridescenceThicknessTexture!==void 0)W.push(Q.assignTexture(J,"iridescenceThicknessMap",K.iridescenceThicknessTexture));return Promise.all(W)}}class HX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_SHEEN}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];J.sheenColor=new y0(0,0,0),J.sheenRoughness=0,J.sheen=1;let K=Z.extensions[this.name];if(K.sheenColorFactor!==void 0){let X=K.sheenColorFactor;J.sheenColor.setRGB(X[0],X[1],X[2],h1)}if(K.sheenRoughnessFactor!==void 0)J.sheenRoughness=K.sheenRoughnessFactor;if(K.sheenColorTexture!==void 0)W.push(Q.assignTexture(J,"sheenColorMap",K.sheenColorTexture,C8));if(K.sheenRoughnessTexture!==void 0)W.push(Q.assignTexture(J,"sheenRoughnessMap",K.sheenRoughnessTexture));return Promise.all(W)}}class YX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_TRANSMISSION}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.transmissionFactor!==void 0)J.transmission=K.transmissionFactor;if(K.transmissionTexture!==void 0)W.push(Q.assignTexture(J,"transmissionMap",K.transmissionTexture));return Promise.all(W)}}class UX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_VOLUME}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.thickness=K.thicknessFactor!==void 0?K.thicknessFactor:0,K.thicknessTexture!==void 0)W.push(Q.assignTexture(J,"thicknessMap",K.thicknessTexture));J.attenuationDistance=K.attenuationDistance||1/0;let X=K.attenuationColor||[1,1,1];return J.attenuationColor=new y0().setRGB(X[0],X[1],X[2],h1),Promise.all(W)}}class GX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_IOR}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return J.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class EX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_SPECULAR}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.specularIntensity=K.specularFactor!==void 0?K.specularFactor:1,K.specularTexture!==void 0)W.push(Q.assignTexture(J,"specularIntensityMap",K.specularTexture));let X=K.specularColorFactor||[1,1,1];if(J.specularColor=new y0().setRGB(X[0],X[1],X[2],h1),K.specularColorTexture!==void 0)W.push(Q.assignTexture(J,"specularColorMap",K.specularColorTexture,C8));return Promise.all(W)}}class qX{constructor($){this.parser=$,this.name=n0.EXT_MATERIALS_BUMP}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.bumpScale=K.bumpFactor!==void 0?K.bumpFactor:1,K.bumpTexture!==void 0)W.push(Q.assignTexture(J,"bumpMap",K.bumpTexture));return Promise.all(W)}}class NX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_ANISOTROPY}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.anisotropyStrength!==void 0)J.anisotropy=K.anisotropyStrength;if(K.anisotropyRotation!==void 0)J.anisotropyRotation=K.anisotropyRotation;if(K.anisotropyTexture!==void 0)W.push(Q.assignTexture(J,"anisotropyMap",K.anisotropyTexture));return Promise.all(W)}}class RX{constructor($){this.parser=$,this.name=n0.KHR_TEXTURE_BASISU}loadTexture($){let J=this.parser,Q=J.json,Z=Q.textures[$];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],K=J.options.ktx2Loader;if(!K)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return J.loadTextureImage($,W.source,K)}}class MX{constructor($){this.parser=$,this.name=n0.EXT_TEXTURE_WEBP}loadTexture($){let J=this.name,Q=this.parser,Z=Q.json,W=Z.textures[$];if(!W.extensions||!W.extensions[J])return null;let K=W.extensions[J],X=Z.images[K.source],H=Q.textureLoader;if(X.uri){let Y=Q.options.manager.getHandler(X.uri);if(Y!==null)H=Y}return Q.loadTextureImage($,K.source,H)}}class FX{constructor($){this.parser=$,this.name=n0.EXT_TEXTURE_AVIF}loadTexture($){let J=this.name,Q=this.parser,Z=Q.json,W=Z.textures[$];if(!W.extensions||!W.extensions[J])return null;let K=W.extensions[J],X=Z.images[K.source],H=Q.textureLoader;if(X.uri){let Y=Q.options.manager.getHandler(X.uri);if(Y!==null)H=Y}return Q.loadTextureImage($,K.source,H)}}class OX{constructor($){this.name=n0.EXT_MESHOPT_COMPRESSION,this.parser=$}loadBufferView($){let J=this.parser.json,Q=J.bufferViews[$];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(J.extensionsRequired&&J.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(X){let H=Z.byteOffset||0,Y=Z.byteLength||0,U=Z.count,G=Z.byteStride,E=new Uint8Array(X,H,Y);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,E,Z.mode,Z.filter).then(function(q){return q.buffer});else return K.ready.then(function(){let q=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(q),U,G,E,Z.mode,Z.filter),q})})}else return null}}class LX{constructor($){this.name=n0.EXT_MESH_GPU_INSTANCING,this.parser=$}createNodeMesh($){let J=this.parser.json,Q=J.nodes[$];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=J.meshes[Q.mesh];for(let Y of Z.primitives)if(Y.mode!==Y8.TRIANGLES&&Y.mode!==Y8.TRIANGLE_STRIP&&Y.mode!==Y8.TRIANGLE_FAN&&Y.mode!==void 0)return null;let K=Q.extensions[this.name].attributes,X=[],H={};for(let Y in K)X.push(this.parser.getDependency("accessor",K[Y]).then((U)=>{return H[Y]=U,H[Y]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh($)),Promise.all(X).then((Y)=>{let U=Y.pop(),G=U.isGroup?U.children:[U],E=Y[0].count,q=[];for(let M of G){let O=new g0,F=new g,N=new F8,R=new g(1,1,1),V=new g$(M.geometry,M.material,E);for(let L=0;L<E;L++){if(H.TRANSLATION)F.fromBufferAttribute(H.TRANSLATION,L);if(H.ROTATION)N.fromBufferAttribute(H.ROTATION,L);if(H.SCALE)R.fromBufferAttribute(H.SCALE,L);V.setMatrixAt(L,O.compose(F,N,R))}for(let L in H)if(L==="_COLOR_0"){let k=H[L];V.instanceColor=new T7(k.array,k.itemSize,k.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE")M.geometry.setAttribute(L,H[L]);E1.prototype.copy.call(V,M),this.parser.assignFinalMaterial(V),q.push(V)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var DX="glTF",D9=12,rK={JSON:1313821514,BIN:5130562};class _X{constructor($){this.name=n0.KHR_BINARY_GLTF,this.content=null,this.body=null;let J=new DataView($,0,D9),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array($.slice(0,4))),version:J.getUint32(4,!0),length:J.getUint32(8,!0)},this.header.magic!==DX)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-D9,W=new DataView($,D9),K=0;while(K<Z){let X=W.getUint32(K,!0);K+=4;let H=W.getUint32(K,!0);if(K+=4,H===rK.JSON){let Y=new Uint8Array($,D9+K,X);this.content=Q.decode(Y)}else if(H===rK.BIN){let Y=D9+K;this.body=$.slice(Y,Y+X)}K+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class VX{constructor($,J){if(!J)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n0.KHR_DRACO_MESH_COMPRESSION,this.json=$,this.dracoLoader=J,this.dracoLoader.preload()}decodePrimitive($,J){let Q=this.json,Z=this.dracoLoader,W=$.extensions[this.name].bufferView,K=$.extensions[this.name].attributes,X={},H={},Y={};for(let U in K){let G=vZ[U]||U.toLowerCase();X[G]=K[U]}for(let U in $.attributes){let G=vZ[U]||U.toLowerCase();if(K[U]!==void 0){let E=Q.accessors[$.attributes[U]],q=w6[E.componentType];Y[G]=q.name,H[G]=E.normalized===!0}}return J.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){Z.decodeDracoFile(U,function(q){for(let M in q.attributes){let O=q.attributes[M],F=H[M];if(F!==void 0)O.normalized=F}G(q)},X,Y,h1,E)})})}}class BX{constructor(){this.name=n0.KHR_TEXTURE_TRANSFORM}extendTexture($,J){if((J.texCoord===void 0||J.texCoord===$.channel)&&J.offset===void 0&&J.rotation===void 0&&J.scale===void 0)return $;if($=$.clone(),J.texCoord!==void 0)$.channel=J.texCoord;if(J.offset!==void 0)$.offset.fromArray(J.offset);if(J.rotation!==void 0)$.rotation=J.rotation;if(J.scale!==void 0)$.repeat.fromArray(J.scale);return $.needsUpdate=!0,$}}class zX{constructor(){this.name=n0.KHR_MESH_QUANTIZATION}}class hZ extends H7{constructor($,J,Q,Z){super($,J,Q,Z)}copySampleValue_($){let J=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=$*Z*3+Z;for(let K=0;K!==Z;K++)J[K]=Q[W+K];return J}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=X*2,Y=X*3,U=Z-J,G=(Q-J)/U,E=G*G,q=E*G,M=$*Y,O=M-Y,F=-2*q+3*E,N=q-E,R=1-F,V=N-E+G;for(let L=0;L!==X;L++){let k=K[O+L+X],A=K[O+L+H]*U,I=K[M+L+X],S=K[M+L]*U;W[L]=R*k+V*A+F*I+N*S}return W}}var XR=new F8;class kX extends hZ{interpolate_($,J,Q,Z){let W=super.interpolate_($,J,Q,Z);return XR.fromArray(W).normalize().toArray(W),W}}var Y8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},w6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tK={9728:u8,9729:p1,9984:C$,9985:M6,9986:S7,9987:m8},eK={33071:z$,33648:k$,10497:R6},SZ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vZ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},q7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HR={CUBICSPLINE:void 0,LINEAR:S$,STEP:sQ},jZ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YR($){if($.DefaultMaterial===void 0)$.DefaultMaterial=new I6({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Q7});return $.DefaultMaterial}function x7($,J,Q){for(let Z in Q.extensions)if($[Z]===void 0)J.userData.gltfExtensions=J.userData.gltfExtensions||{},J.userData.gltfExtensions[Z]=Q.extensions[Z]}function A8($,J){if(J.extras!==void 0)if(typeof J.extras==="object")Object.assign($.userData,J.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+J.extras)}function UR($,J,Q){let Z=!1,W=!1,K=!1;for(let U=0,G=J.length;U<G;U++){let E=J[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)K=!0;if(Z&&W&&K)break}if(!Z&&!W&&!K)return Promise.resolve($);let X=[],H=[],Y=[];for(let U=0,G=J.length;U<G;U++){let E=J[U];if(Z){let q=E.POSITION!==void 0?Q.getDependency("accessor",E.POSITION):$.attributes.position;X.push(q)}if(W){let q=E.NORMAL!==void 0?Q.getDependency("accessor",E.NORMAL):$.attributes.normal;H.push(q)}if(K){let q=E.COLOR_0!==void 0?Q.getDependency("accessor",E.COLOR_0):$.attributes.color;Y.push(q)}}return Promise.all([Promise.all(X),Promise.all(H),Promise.all(Y)]).then(function(U){let G=U[0],E=U[1],q=U[2];if(Z)$.morphAttributes.position=G;if(W)$.morphAttributes.normal=E;if(K)$.morphAttributes.color=q;return $.morphTargetsRelative=!0,$})}function GR($,J){if($.updateMorphTargets(),J.weights!==void 0)for(let Q=0,Z=J.weights.length;Q<Z;Q++)$.morphTargetInfluences[Q]=J.weights[Q];if(J.extras&&Array.isArray(J.extras.targetNames)){let Q=J.extras.targetNames;if($.morphTargetInfluences.length===Q.length){$.morphTargetDictionary={};for(let Z=0,W=Q.length;Z<W;Z++)$.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ER($){let J,Q=$.extensions&&$.extensions[n0.KHR_DRACO_MESH_COMPRESSION];if(Q)J="draco:"+Q.bufferView+":"+Q.indices+":"+fZ(Q.attributes);else J=$.indices+":"+fZ($.attributes)+":"+$.mode;if($.targets!==void 0)for(let Z=0,W=$.targets.length;Z<W;Z++)J+=":"+fZ($.targets[Z]);return J}function fZ($){let J="",Q=Object.keys($).sort();for(let Z=0,W=Q.length;Z<W;Z++)J+=Q[Z]+":"+$[Q[Z]]+";";return J}function yZ($){switch($){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qR($){if($.search(/\.jpe?g($|\?)/i)>0||$.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if($.search(/\.webp($|\?)/i)>0||$.search(/^data\:image\/webp/)===0)return"image/webp";if($.search(/\.ktx2($|\?)/i)>0||$.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var NR=new g0;class CX{constructor($={},J={}){this.json=$,this.extensions={},this.plugins={},this.options=J,this.cache=new KR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,W=!1,K=-1;if(typeof navigator<"u"){let X=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(X)===!0;let H=X.match(/Version\/(\d+)/);Z=Q&&H?parseInt(H[1],10):-1,W=X.indexOf("Firefox")>-1,K=W?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||W&&K<98)this.textureLoader=new s$(this.options.manager);else this.textureLoader=new t$(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new M9(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions($){this.extensions=$}setPlugins($){this.plugins=$}parse($,J){let Q=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(K){let X={scene:K[0][Z.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:Z.asset,parser:Q,userData:{}};return x7(W,X,Z),A8(X,Z),Promise.all(Q._invokeAll(function(H){return H.afterRoot&&H.afterRoot(X)})).then(function(){for(let H of X.scenes)H.updateMatrixWorld();$(X)})}).catch(J)}_markDefs(){let $=this.json.nodes||[],J=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z].joints;for(let X=0,H=K.length;X<H;X++)$[K[X]].isBone=!0}for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)Q[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef($,J){if(J===void 0)return;if($.refs[J]===void 0)$.refs[J]=$.uses[J]=0;$.refs[J]++}_getNodeRef($,J,Q){if($.refs[J]<=1)return Q;let Z=Q.clone(),W=(K,X)=>{let H=this.associations.get(K);if(H!=null)this.associations.set(X,H);for(let[Y,U]of K.children.entries())W(U,X.children[Y])};return W(Q,Z),Z.name+="_instance_"+$.uses[J]++,Z}_invokeOne($){let J=Object.values(this.plugins);J.push(this);for(let Q=0;Q<J.length;Q++){let Z=$(J[Q]);if(Z)return Z}return null}_invokeAll($){let J=Object.values(this.plugins);J.unshift(this);let Q=[];for(let Z=0;Z<J.length;Z++){let W=$(J[Z]);if(W)Q.push(W)}return Q}getDependency($,J){let Q=$+":"+J,Z=this.cache.get(Q);if(!Z){switch($){case"scene":Z=this.loadScene(J);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(J)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(J)});break;case"accessor":Z=this.loadAccessor(J);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(J)});break;case"buffer":Z=this.loadBuffer(J);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(J)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(J)});break;case"skin":Z=this.loadSkin(J);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(J)});break;case"camera":Z=this.loadCamera(J);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency($,J)}),!Z)throw Error("Unknown type: "+$);break}this.cache.add(Q,Z)}return Z}getDependencies($){let J=this.cache.get($);if(!J){let Q=this,Z=this.json[$+($==="mesh"?"es":"s")]||[];J=Promise.all(Z.map(function(W,K){return Q.getDependency($,K)})),this.cache.add($,J)}return J}loadBuffer($){let J=this.json.buffers[$],Q=this.fileLoader;if(J.type&&J.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+J.type+" buffer type is not supported.");if(J.uri===void 0&&$===0)return Promise.resolve(this.extensions[n0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,K){Q.load(E7.resolveURL(J.uri,Z.path),W,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+J.uri+'".'))})})}loadBufferView($){let J=this.json.bufferViews[$];return this.getDependency("buffer",J.buffer).then(function(Q){let Z=J.byteLength||0,W=J.byteOffset||0;return Q.slice(W,W+Z)})}loadAccessor($){let J=this,Q=this.json,Z=this.json.accessors[$];if(Z.bufferView===void 0&&Z.sparse===void 0){let K=SZ[Z.type],X=w6[Z.componentType],H=Z.normalized===!0,Y=new X(Z.count*K);return Promise.resolve(new H1(Y,K,H))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(K){let X=K[0],H=SZ[Z.type],Y=w6[Z.componentType],U=Y.BYTES_PER_ELEMENT,G=U*H,E=Z.byteOffset||0,q=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,M=Z.normalized===!0,O,F;if(q&&q!==G){let N=Math.floor(E/q),R="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+N+":"+Z.count,V=J.cache.get(R);if(!V)O=new Y(X,N*q,Z.count*q/U),V=new Y9(O,q/U),J.cache.add(R,V);F=new z6(V,H,E%q/U,M)}else{if(X===null)O=new Y(Z.count*H);else O=new Y(X,E,Z.count*H);F=new H1(O,H,M)}if(Z.sparse!==void 0){let N=SZ.SCALAR,R=w6[Z.sparse.indices.componentType],V=Z.sparse.indices.byteOffset||0,L=Z.sparse.values.byteOffset||0,k=new R(K[1],V,Z.sparse.count*N),A=new Y(K[2],L,Z.sparse.count*H);if(X!==null)F=new H1(F.array.slice(),F.itemSize,F.normalized);F.normalized=!1;for(let I=0,S=k.length;I<S;I++){let y=k[I];if(F.setX(y,A[I*H]),H>=2)F.setY(y,A[I*H+1]);if(H>=3)F.setZ(y,A[I*H+2]);if(H>=4)F.setW(y,A[I*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}F.normalized=M}return F})}loadTexture($){let J=this.json,Q=this.options,W=J.textures[$].source,K=J.images[W],X=this.textureLoader;if(K.uri){let H=Q.manager.getHandler(K.uri);if(H!==null)X=H}return this.loadTextureImage($,W,X)}loadTextureImage($,J,Q){let Z=this,W=this.json,K=W.textures[$],X=W.images[J],H=(X.uri||X.bufferView)+":"+K.sampler;if(this.textureCache[H])return this.textureCache[H];let Y=this.loadImageSource(J,Q).then(function(U){if(U.flipY=!1,U.name=K.name||X.name||"",U.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)U.name=X.uri;let E=(W.samplers||{})[K.sampler]||{};return U.magFilter=tK[E.magFilter]||p1,U.minFilter=tK[E.minFilter]||m8,U.wrapS=eK[E.wrapS]||R6,U.wrapT=eK[E.wrapT]||R6,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==u8&&U.minFilter!==p1,Z.associations.set(U,{textures:$}),U}).catch(function(){return null});return this.textureCache[H]=Y,Y}loadImageSource($,J){let Q=this,Z=this.json,W=this.options;if(this.sourceCache[$]!==void 0)return this.sourceCache[$].then((G)=>G.clone());let K=Z.images[$],X=self.URL||self.webkitURL,H=K.uri||"",Y=!1;if(K.bufferView!==void 0)H=Q.getDependency("bufferView",K.bufferView).then(function(G){Y=!0;let E=new Blob([G],{type:K.mimeType});return H=X.createObjectURL(E),H});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+$+" is missing URI and bufferView");let U=Promise.resolve(H).then(function(G){return new Promise(function(E,q){let M=E;if(J.isImageBitmapLoader===!0)M=function(O){let F=new L1(O);F.needsUpdate=!0,E(F)};J.load(E7.resolveURL(G,W.path),M,void 0,q)})}).then(function(G){if(Y===!0)X.revokeObjectURL(H);return A8(G,K),G.userData.mimeType=K.mimeType||qR(K.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),G});return this.sourceCache[$]=U,U}assignTexture($,J,Q,Z){let W=this;return this.getDependency("texture",Q.index).then(function(K){if(!K)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)K=K.clone(),K.channel=Q.texCoord;if(W.extensions[n0.KHR_TEXTURE_TRANSFORM]){let X=Q.extensions!==void 0?Q.extensions[n0.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let H=W.associations.get(K);K=W.extensions[n0.KHR_TEXTURE_TRANSFORM].extendTexture(K,X),W.associations.set(K,H)}}if(Z!==void 0)K.colorSpace=Z;return $[J]=K,K})}assignFinalMaterial($){let{geometry:J,material:Q}=$,Z=J.attributes.tangent===void 0,W=J.attributes.color!==void 0,K=J.attributes.normal===void 0;if($.isPoints){let X="PointsMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new N9,t1.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,H.sizeAttenuation=!1,this.cache.add(X,H);Q=H}else if($.isLine){let X="LineBasicMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new q9,t1.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,this.cache.add(X,H);Q=H}if(Z||W||K){let X="ClonedMaterial:"+Q.uuid+":";if(Z)X+="derivative-tangents:";if(W)X+="vertex-colors:";if(K)X+="flat-shading:";let H=this.cache.get(X);if(!H){if(H=Q.clone(),W)H.vertexColors=!0;if(K)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(X,H),this.associations.set(H,this.associations.get(Q))}Q=H}$.material=Q}getMaterialType(){return I6}loadMaterial($){let J=this,Q=this.json,Z=this.extensions,W=Q.materials[$],K,X={},H=W.extensions||{},Y=[];if(H[n0.KHR_MATERIALS_UNLIT]){let G=Z[n0.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),Y.push(G.extendParams(X,W,J))}else{let G=W.pbrMetallicRoughness||{};if(X.color=new y0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;X.color.setRGB(E[0],E[1],E[2],h1),X.opacity=E[3]}if(G.baseColorTexture!==void 0)Y.push(J.assignTexture(X,"map",G.baseColorTexture,C8));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)Y.push(J.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),Y.push(J.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType($)}),Y.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams($,X)})))}if(W.doubleSided===!0)X.side=H8;let U=W.alphaMode||jZ.OPAQUE;if(U===jZ.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,U===jZ.MASK)X.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&K!==I8){if(Y.push(J.assignTexture(X,"normalMap",W.normalTexture)),X.normalScale=new u0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;X.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&K!==I8){if(Y.push(J.assignTexture(X,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)X.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&K!==I8){let G=W.emissiveFactor;X.emissive=new y0().setRGB(G[0],G[1],G[2],h1)}if(W.emissiveTexture!==void 0&&K!==I8)Y.push(J.assignTexture(X,"emissiveMap",W.emissiveTexture,C8));return Promise.all(Y).then(function(){let G=new K(X);if(W.name)G.name=W.name;if(A8(G,W),J.associations.set(G,{materials:$}),W.extensions)x7(Z,G,W);return G})}createUniqueName($){let J=t0.sanitizeNodeName($||"");if(J in this.nodeNamesUsed)return J+"_"+ ++this.nodeNamesUsed[J];else return this.nodeNamesUsed[J]=0,J}loadGeometries($){let J=this,Q=this.extensions,Z=this.primitiveCache;function W(X){return Q[n0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,J).then(function(H){return $X(H,X,J)})}let K=[];for(let X=0,H=$.length;X<H;X++){let Y=$[X],U=ER(Y),G=Z[U];if(G)K.push(G.promise);else{let E;if(Y.extensions&&Y.extensions[n0.KHR_DRACO_MESH_COMPRESSION])E=W(Y);else E=$X(new x1,Y,J);Z[U]={primitive:Y,promise:E},K.push(E)}}return Promise.all(K)}loadMesh($){let J=this,Q=this.json,Z=this.extensions,W=Q.meshes[$],K=W.primitives,X=[];for(let H=0,Y=K.length;H<Y;H++){let U=K[H].material===void 0?YR(this.cache):this.getDependency("material",K[H].material);X.push(U)}return X.push(J.loadGeometries(K)),Promise.all(X).then(function(H){let Y=H.slice(0,H.length-1),U=H[H.length-1],G=[];for(let q=0,M=U.length;q<M;q++){let O=U[q],F=K[q],N,R=Y[q];if(F.mode===Y8.TRIANGLES||F.mode===Y8.TRIANGLE_STRIP||F.mode===Y8.TRIANGLE_FAN||F.mode===void 0){if(N=W.isSkinnedMesh===!0?new h$(O,R):new A1(O,R),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(F.mode===Y8.TRIANGLE_STRIP)N.geometry=wZ(N.geometry,K9);else if(F.mode===Y8.TRIANGLE_FAN)N.geometry=wZ(N.geometry,L6)}else if(F.mode===Y8.LINES)N=new p$(O,R);else if(F.mode===Y8.LINE_STRIP)N=new k6(O,R);else if(F.mode===Y8.LINE_LOOP)N=new l$(O,R);else if(F.mode===Y8.POINTS)N=new C6(O,R);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+F.mode);if(Object.keys(N.geometry.morphAttributes).length>0)GR(N,W);if(N.name=J.createUniqueName(W.name||"mesh_"+$),A8(N,W),F.extensions)x7(Z,N,F);J.assignFinalMaterial(N),G.push(N)}for(let q=0,M=G.length;q<M;q++)J.associations.set(G[q],{meshes:$,primitives:q});if(G.length===1){if(W.extensions)x7(Z,G[0],W);return G[0]}let E=new K8;if(W.extensions)x7(Z,E,W);J.associations.set(E,{meshes:$});for(let q=0,M=G.length;q<M;q++)E.add(G[q]);return E})}loadCamera($){let J,Q=this.json.cameras[$],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")J=new T1(M1.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")J=new G7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)J.name=this.createUniqueName(Q.name);return A8(J,Q),Promise.resolve(J)}loadSkin($){let J=this.json.skins[$],Q=[];for(let Z=0,W=J.joints.length;Z<W;Z++)Q.push(this._loadNodeShallow(J.joints[Z]));if(J.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",J.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let W=Z.pop(),K=Z,X=[],H=[];for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];if(G){X.push(G);let E=new g0;if(W!==null)E.fromArray(W.array,Y*16);H.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',J.joints[Y])}return new G9(X,H)})}loadAnimation($){let J=this.json,Q=this,Z=J.animations[$],W=Z.name?Z.name:"animation_"+$,K=[],X=[],H=[],Y=[],U=[];for(let G=0,E=Z.channels.length;G<E;G++){let q=Z.channels[G],M=Z.samplers[q.sampler],O=q.target,F=O.node,N=Z.parameters!==void 0?Z.parameters[M.input]:M.input,R=Z.parameters!==void 0?Z.parameters[M.output]:M.output;if(O.node===void 0)continue;K.push(this.getDependency("node",F)),X.push(this.getDependency("accessor",N)),H.push(this.getDependency("accessor",R)),Y.push(M),U.push(O)}return Promise.all([Promise.all(K),Promise.all(X),Promise.all(H),Promise.all(Y),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],M=G[2],O=G[3],F=G[4],N=[];for(let V=0,L=E.length;V<L;V++){let k=E[V],A=q[V],I=M[V],S=O[V],y=F[V];if(k===void 0)continue;if(k.updateMatrix)k.updateMatrix();let B=Q._createAnimationTracks(k,A,I,S,y);if(B)for(let D=0;D<B.length;D++)N.push(B[D])}let R=new n$(W,void 0,N);return A8(R,Z),R})}createNodeMesh($){let J=this.json,Q=this,Z=J.nodes[$];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(W){let K=Q._getNodeRef(Q.meshCache,Z.mesh,W);if(Z.weights!==void 0)K.traverse(function(X){if(!X.isMesh)return;for(let H=0,Y=Z.weights.length;H<Y;H++)X.morphTargetInfluences[H]=Z.weights[H]});return K})}loadNode($){let J=this.json,Q=this,Z=J.nodes[$],W=Q._loadNodeShallow($),K=[],X=Z.children||[];for(let Y=0,U=X.length;Y<U;Y++)K.push(Q.getDependency("node",X[Y]));let H=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(K),H]).then(function(Y){let U=Y[0],G=Y[1],E=Y[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,NR)});for(let q=0,M=G.length;q<M;q++)U.add(G[q]);return U})}_loadNodeShallow($){let J=this.json,Q=this.extensions,Z=this;if(this.nodeCache[$]!==void 0)return this.nodeCache[$];let W=J.nodes[$],K=W.name?Z.createUniqueName(W.name):"",X=[],H=Z._invokeOne(function(Y){return Y.createNodeMesh&&Y.createNodeMesh($)});if(H)X.push(H);if(W.camera!==void 0)X.push(Z.getDependency("camera",W.camera).then(function(Y){return Z._getNodeRef(Z.cameraCache,W.camera,Y)}));return Z._invokeAll(function(Y){return Y.createNodeAttachment&&Y.createNodeAttachment($)}).forEach(function(Y){X.push(Y)}),this.nodeCache[$]=Promise.all(X).then(function(Y){let U;if(W.isBone===!0)U=new U9;else if(Y.length>1)U=new K8;else if(Y.length===1)U=Y[0];else U=new E1;if(U!==Y[0])for(let G=0,E=Y.length;G<E;G++)U.add(Y[G]);if(W.name)U.userData.name=W.name,U.name=K;if(A8(U,W),W.extensions)x7(Q,U,W);if(W.matrix!==void 0){let G=new g0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=$,U}),this.nodeCache[$]}loadScene($){let J=this.extensions,Q=this.json.scenes[$],Z=this,W=new K8;if(Q.name)W.name=Z.createUniqueName(Q.name);if(A8(W,Q),Q.extensions)x7(J,W,Q);let K=Q.nodes||[],X=[];for(let H=0,Y=K.length;H<Y;H++)X.push(Z.getDependency("node",K[H]));return Promise.all(X).then(function(H){for(let U=0,G=H.length;U<G;U++)W.add(H[U]);let Y=(U)=>{let G=new Map;for(let[E,q]of Z.associations)if(E instanceof t1||E instanceof L1)G.set(E,q);return U.traverse((E)=>{let q=Z.associations.get(E);if(q!=null)G.set(E,q)}),G};return Z.associations=Y(W),W})}_createAnimationTracks($,J,Q,Z,W){let K=[],X=$.name?$.name:$.uuid,H=[];if(q7[W.path]===q7.weights)$.traverse(function(E){if(E.morphTargetInfluences)H.push(E.name?E.name:E.uuid)});else H.push(X);let Y;switch(q7[W.path]){case q7.weights:Y=g8;break;case q7.rotation:Y=d8;break;case q7.translation:case q7.scale:Y=p8;break;default:switch(Q.itemSize){case 1:Y=g8;break;case 2:case 3:default:Y=p8;break}break}let U=Z.interpolation!==void 0?HR[Z.interpolation]:S$,G=this._getArrayFromAccessor(Q);for(let E=0,q=H.length;E<q;E++){let M=new Y(H[E]+"."+q7[W.path],J.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(M);K.push(M)}return K}_getArrayFromAccessor($){let J=$.array;if($.normalized){let Q=yZ(J.constructor),Z=new Float32Array(J.length);for(let W=0,K=J.length;W<K;W++)Z[W]=J[W]*Q;J=Z}return J}_createCubicSplineTrackInterpolant($){$.createInterpolant=function(Q){return new(this instanceof d8?kX:hZ)(this.times,this.values,this.getValueSize()/3,Q)},$.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RR($,J,Q){let Z=J.attributes,W=new l1;if(Z.POSITION!==void 0){let H=Q.json.accessors[Z.POSITION],Y=H.min,U=H.max;if(Y!==void 0&&U!==void 0){if(W.set(new g(Y[0],Y[1],Y[2]),new g(U[0],U[1],U[2])),H.normalized){let G=yZ(w6[H.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=J.targets;if(K!==void 0){let H=new g,Y=new g;for(let U=0,G=K.length;U<G;U++){let E=K[U];if(E.POSITION!==void 0){let q=Q.json.accessors[E.POSITION],M=q.min,O=q.max;if(M!==void 0&&O!==void 0){if(Y.setX(Math.max(Math.abs(M[0]),Math.abs(O[0]))),Y.setY(Math.max(Math.abs(M[1]),Math.abs(O[1]))),Y.setZ(Math.max(Math.abs(M[2]),Math.abs(O[2]))),q.normalized){let F=yZ(w6[q.componentType]);Y.multiplyScalar(F)}H.max(Y)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}$.boundingBox=W;let X=new r1;W.getCenter(X.center),X.radius=W.min.distanceTo(W.max)/2,$.boundingSphere=X}function $X($,J,Q){let Z=J.attributes,W=[];function K(X,H){return Q.getDependency("accessor",X).then(function(Y){$.setAttribute(H,Y)})}for(let X in Z){let H=vZ[X]||X.toLowerCase();if(H in $.attributes)continue;W.push(K(Z[X],H))}if(J.indices!==void 0&&!$.index){let X=Q.getDependency("accessor",J.indices).then(function(H){$.setIndex(H)});W.push(X)}if(o0.workingColorSpace!==h1&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${o0.workingColorSpace}" not supported.`);return A8($,J),RR($,J,Q),Promise.all(W).then(function(){return J.targets!==void 0?UR($,J.targets,Q):$})}var PX=0.55;var IX=($)=>$*$*(3-2*$);function AX($){if($<0||$>=0.55)return 0;let J=IX(Math.min(1,$/0.035)),Q=1-IX(Math.max(0,($-0.035)/0.515));return 0.71*J*Q}function TX($=16){let J=Array.from({length:$},()=>({x:0,y:0,fromX:0,fromY:0,time:-100,strength:0})),Q=$,Z=0,W=-1/0,K=(X,H)=>X.strength>0&&H>=X.time&&H-X.time<0.55;return{items:J,setLimit(X){Q=Math.max(0,Math.min($,Math.floor(X)))},hasLive(X){return J.some((H)=>K(H,X))},add(X){if(!Q||!Number.isFinite(X.x+X.y+X.time+X.strength))return!1;if(X.time-W<Math.max(0.035,0.55/Q))return!1;let H=0,Y=-1;for(let U=0;U<$;U++){let G=(Z+U)%$;if(K(J[G],X.time))H++;else if(Y<0)Y=G}if(H>=Q||Y<0)return!1;return Object.assign(J[Y],X),Z=(Y+1)%$,W=X.time,!0}}}var N7=16,ZJ=" .,:;i!+*xso#%@";function wX($,{reduced:J=!1,strongerGlyphs:Q=!1}={}){let Z=document.createElement("canvas");Z.width=ZJ.length*40,Z.height=40;let W=Z.getContext("2d");if(!W)throw Error("ASCII rendering requires a 2D canvas context.");W.font=`${Q?700:600} 34px "Courier New", monospace`,W.fillStyle="#fff",W.textAlign="center",W.textBaseline="middle";for(let P=0;P<ZJ.length;P++)W.fillText(ZJ[P],P*40+20,20);let K=new u$(Z);K.minFilter=p1,K.magFilter=p1,K.generateMipmaps=!1;let X=Array.from({length:N7},()=>new i0),H=Array.from({length:N7},()=>new u0),Y=TX(N7),U=new x1,G=new u1({transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{image:{value:$},atlas:{value:K},glyphCount:{value:ZJ.length},resolution:{value:new u0(1,1)},ink:{value:new g(0.93,0.94,0.9)},inkGain:{value:Q?1.38:1},cellHeight:{value:12},pixelRatio:{value:1},activeBrushCount:{value:0},brushes:{value:X},endpoints:{value:H},radius:{value:80},amplitude:{value:J?35:100},dispersal:{value:0},crownOnly:{value:0},revealInPlace:{value:0},glyphGlitch:{value:new i0}},vertexShader:`
      precision highp float;
      uniform sampler2D image; uniform vec2 resolution;
      uniform float cellHeight; uniform float pixelRatio; uniform float glyphCount; uniform int activeBrushCount;
      uniform vec4 brushes[${N7}]; uniform vec2 endpoints[${N7}];
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
          for(int i=0;i<${N7};i++) {
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
    `}),E=new C6(U,G);E.name="ScreenSpaceAsciiGrid",E.frustumCulled=!1;let q=new B6;q.add(E);let M=new V6,O=1,F=1,N=1,R=12,V=12,L=null,k=0,A=1,I=1,S=0,y=0,B=22000,D=N7,C=!1;function T(){let P=(G0)=>({columns:Math.max(1,Math.ceil(O/(G0*0.62))),rows:Math.max(1,Math.ceil(F/G0))}),f=P(R);if(f.columns*f.rows>B){let G0=R,B0=Math.max(R,Math.sqrt(O*F/(B*0.62))*1.1);while(!0){let R0=P(B0);if(R0.columns*R0.rows<=B)break;B0*=1.25}for(let R0=0;R0<30;R0++){let o=(G0+B0)*0.5,Z0=P(o);if(Z0.columns*Z0.rows>B)G0=o;else B0=o}f=P(B0*1.0000000001)}let{columns:h,rows:b}=f;if(V=F/b,G.uniforms.cellHeight.value=V,h===A&&b===I&&S===O&&y===F)return!1;A=h,I=b,S=O,y=F,U.dispose();let l=A*I;k=l;let x=new Float32Array(l*3),s=new Float32Array(l*2),t=new Float32Array(l*2),X0=1947;for(let G0=0,B0=0;G0<I;G0++)for(let R0=0;R0<A;R0++,B0++){let o=(R0+0.5)/A,Z0=(G0+0.5)/I;x.set([o*O,Z0*F,0],B0*3),s.set([o,Z0],B0*2),X0=Math.imul(X0,1664525)+1013904223|0;let J0=(X0>>>0)/4294967296*62.83;t.set([Math.cos(J0),Math.sin(J0)],B0*2)}return U.setAttribute("position",new H1(x,3)),U.setAttribute("sampleUV",new H1(s,2)),U.setAttribute("randomDirection",new H1(t,2)),U.setDrawRange(0,l),!0}return{scene:q,camera:M,getStats(){return{glyphs:k,cellHeight:R,effectiveCellHeight:V,columns:A,rows:I}},getSourceSize(P=2){let f=Number.isFinite(P)&&P>0?P:2;return{width:Math.max(1,Math.ceil(A*f)),height:Math.max(1,Math.ceil(I*f))}},setQuality({glyphBudget:P,brushLimit:f}={}){if(C)return!1;let h=!1;if(Number.isFinite(P)){let b=Math.max(64,Math.floor(P));h=h||b!==B,B=b}if(Number.isFinite(f)){let b=M1.clamp(Math.floor(f),0,N7);h=h||b!==D,D=b,Y.setLimit(b)}if(h)T();return h},resize(P,f,h){if(C)return!1;let b=Math.max(1,Math.round(P)),l=Math.max(1,Math.round(f)),x=Number.isFinite(h)&&h>0?h:1;if(b===O&&l===F&&x===N&&k)return!1;let s=b!==O||l!==F;O=b,F=l,N=x,G.uniforms.resolution.value.set(O,F),G.uniforms.pixelRatio.value=N;let t=M1.clamp(F*0.13,65,110);if(G.uniforms.radius.value=t,G.uniforms.amplitude.value=t*(J?0.52:1.55),s||!k)T();return!0},update(P){if(C)return!1;let f=0;for(let h of Y.items){let b=AX(P-h.time)*h.strength;if(b<=0)continue;X[f].set(h.fromX,h.fromY,b,0),H[f].set(h.x,h.y),f++}return G.uniforms.activeBrushCount.value=f,Y.hasLive(P)},isAnimating(P){return!C&&(Y.hasLive(P)||G.uniforms.activeBrushCount.value>0)},setInk(P){if(!C)G.uniforms.ink.value.copy(P)},setGlyphGlitch(P,f,h,b){if(C)return!1;let l=G.uniforms.glyphGlitch.value;if(l.z===0&&h===0)return!1;if(l.x===P&&l.y===f&&l.z===h&&l.w===b)return!1;return l.set(P,f,h,b),!0},setScatter(P,{region:f="all",mode:h="scatter"}={}){if(C||!Number.isFinite(P))return!1;let b=M1.clamp(P,0,1),l=f==="crown"?1:0,x=h==="appear"?1:0,s=G.uniforms;if(b===s.dispersal.value&&l===s.crownOnly.value&&x===s.revealInPlace.value)return!1;return s.dispersal.value=b,s.crownOnly.value=l,s.revealInPlace.value=x,!0},setSize(P){if(C||!Number.isFinite(P)||P<=0||P===R)return!1;return R=P,T()},move(P,f,h){if(C||D===0||!Number.isFinite(P+f+h))return!1;if(L&&h-L.time>=PX)L=null;let b=L?Math.hypot(P-L.x,f-L.y):1/0;if(L&&b<0.5)return!1;let l=L?Math.max(h-L.time,0.012):0.03,x=L?P-L.x:0,s=L?f-L.y:0,t=Math.hypot(x,s)/l;if(!Y.add({x:P,y:f,fromX:L?.x??P,fromY:L?.y??f,time:h,strength:M1.clamp(0.25+t/1200,0.25,1.4)}))return!1;return L={x:P,y:f,time:h},!0},leave(){L=null},dispose(){if(C)return;C=!0,L=null,G.uniforms.activeBrushCount.value=0,U.dispose(),G.dispose(),K.dispose(),q.remove(E)}}}var MR=new Set(["neutral","smile","surprise","thoughtful"]);function SX($,J,Q=()=>{},{manifestUrl:Z,signal:W}={}){let K=null,X=!1,H="neutral",Y=-100,U=!1,G=[],E={changed:!1,active:!1},q=new AbortController,M=()=>q.abort(W?.reason);if(W?.aborted)M();else W?.addEventListener("abort",M,{once:!0});let O=()=>U||q.signal.aborted,F=()=>{if(!O())return;let V=Error("Expression loading was cancelled.");throw V.name="AbortError",V},N=(V)=>{if(!O())Q(V)};async function R(){if(F(),X)return;if(K)return K;return N({loading:!0,name:H}),K=(async()=>{if(F(),!Z)throw Error("An expression manifest URL is required.");let V=new URL(Z,import.meta.url),L=await fetch(V,{cache:"no-cache",signal:q.signal});if(F(),!L.ok)throw Error("Could not load expression manifest.");let k=await L.json();F();let A=$.geometry.attributes.position.count;if(k.version!==1||k.vertexCount!==A||!Array.isArray(k.targets))throw Error("Expression topology does not match the current head.");let I=new URL(k.buffer,L.url||V),S=await fetch(I,{cache:"no-cache",signal:q.signal});if(F(),!S.ok)throw Error("Could not load expression data.");let y=await S.arrayBuffer();F();let B=[],D=[];function C(T,P,f){if(!Number.isInteger(P)||P<0||P+f*T.BYTES_PER_ELEMENT>y.byteLength)throw Error("Invalid expression buffer range.");return new T(y,P,f)}for(let T of k.targets){if(!["smile","surprise","thoughtful","blink"].includes(T.name)||!Number.isInteger(T.count)||T.count>A||T.count<1)throw Error("Invalid expression target.");let P=C(Uint16Array,T.indices.byteOffset,T.count),f=C(Int16Array,T.position.byteOffset,T.count*3),h=C(Int16Array,T.normal.byteOffset,T.count*3);if(!(T.position.scale>0)||!(T.normal.scale>0)||!Number.isFinite(T.position.scale+T.normal.scale))throw Error("Invalid expression quantization scale.");let b=new Float32Array(A*3),l=new Float32Array(A*3);for(let x=0;x<P.length;x++){let s=P[x];if(s>=A)throw Error("Invalid expression vertex index.");for(let t=0;t<3;t++)b[s*3+t]=f[x*3+t]*T.position.scale*J,l[s*3+t]=h[x*3+t]*T.normal.scale}B.push(new H1(b,3)),D.push(new H1(l,3))}if(G=k.targets.map((T)=>T.name),new Set(G).size!==G.length||!["smile","surprise","thoughtful","blink"].every((T)=>G.includes(T)))throw Error("Missing expression target.");F(),$.geometry.morphAttributes.position=B,$.geometry.morphAttributes.normal=D,$.geometry.morphTargetsRelative=!0,$.updateMorphTargets(),$.morphTargetDictionary=Object.fromEntries(G.map((T,P)=>[T,P])),$.material.needsUpdate=!0,X=!0,N({loading:!1,name:H})})().catch((V)=>{if(K=null,!O())H="neutral",N({loading:!1,error:V,name:H});throw V}),K}return{async choose(V){if(O()||!MR.has(V))return;if(H=V,N({loading:!X&&V!=="neutral",name:V}),V!=="neutral")await R()},async blink(){if(O())return;await R(),F(),Y=performance.now()/1000},update(V,L){if(E.changed=!1,E.active=!1,O()||!X)return E;let k=L-Y,A=k<0.1?M1.smoothstep(k,0,0.1):1-M1.smoothstep(k,0.14,0.33);for(let I=0;I<G.length;I++){let S=G[I],y=$.morphTargetInfluences[I],B;if(S==="blink")B=k>=0&&k<=0.33?A:0,E.active||=k>=0&&k<0.34;else{let D=S===H?1:0;if(B=M1.damp(y,D,7.5,V),Math.abs(B-D)<0.0005)B=D;E.active||=B!==D}$.morphTargetInfluences[I]=B,E.changed||=B!==y}return E},dispose(){if(U)return;U=!0,q.abort(),W?.removeEventListener("abort",M),E.changed=!1,E.active=!1}}}var _9=Object.freeze([Object.freeze({name:"high",index:0,fps:60,dpr:1.5,glyphBudget:64000,sampleScale:2,brushLimit:16}),Object.freeze({name:"balanced",index:1,fps:60,dpr:1.5,glyphBudget:18000,sampleScale:1,brushLimit:12}),Object.freeze({name:"light",index:2,fps:60,dpr:1,glyphBudget:1e4,sampleScale:1,brushLimit:8}),Object.freeze({name:"minimum",index:3,fps:30,dpr:1,glyphBudget:6000,sampleScale:1,brushLimit:6})]);function FR($){let J=[...$].sort((Q,Z)=>Q-Z);return J[Math.max(0,Math.ceil(J.length*0.95)-1)]}function jX({coarse:$=!1,fixed:J}={}){let Q={high:0,balanced:1,light:2,low:2,minimum:3},Z=Object.prototype.hasOwnProperty.call(Q,J),W=Number(globalThis.navigator?.deviceMemory),K=Number(globalThis.navigator?.hardwareConcurrency),X=W>0&&W<=4&&K>0&&K<=4,H=Z?Q[J]:$?X?2:1:X?1:0,Y=Z?`fixed:${J}`:$?"coarse-pointer":X?"limited-device":"auto-default",U=NaN,G=NaN,E=-1/0,q=0,M=0,O=[],F=0,N=0,R=NaN;function V(){q=0,M=0,O=[]}function L(A){if(!Number.isFinite(A))A=globalThis.performance?.now?.()??Date.now();U=A+1500,G=A,F=0,N=0,V()}function k(A,I,S){return H=A,Y=S,E=I,F=0,N=0,U=I+500,V(),_9[H]}return{current(){return _9[H]},wake:L,observe(A,I,S){if(!Number.isFinite(A)||!Number.isFinite(I)||I<=0)return null;if(!Number.isFinite(U))L(A);if(Number.isFinite(G)&&A-G>1500&&I>750)return L(A),null;if(G=A,A<U)return null;if(q+=I,M++,O.push(Number.isFinite(S)&&S>=0?S:1/0),q<1200||M<20)return null;R=M*1000/q;let y=FR(O),B=q,D=_9[H].fps;if(V(),Z)return null;if(R<D*0.75){if(F++,N=0,F>=2&&H<_9.length-1&&A-E>=4000)return k(H+1,A,"sustained-low-fps")}else{if(F=0,R>D*0.94&&y<1000/D*0.5)N+=B;else N=0;if(H>0&&N>=25000&&A-E>=30000)return k(H-1,A,"sustained-headroom")}return null},getReport(){let A={quality:_9[H].name,qualityReason:Y};if(Number.isFinite(R))A.measuredFps=Math.round(R*10)/10;return A}}}var fX=Object.freeze([0,-0.82,-0.55]);var vX=`
  float headPoseWeight(vec3 rest){
    float r=length(vec2(rest.x/1.10,(rest.z+.365)/1.20));
    float gate=1.-smoothstep(1.,1.2,r);
    float cap=smoothstep(-1.6,-1.2,rest.y);
    return smoothstep(-2.1,-1.2,rest.y)*mix(gate,1.,cap);
  }
`;var yX={front:[0,0],quarter:[-0.95,Math.PI/36],profile:[-Math.PI/2,0],back:[Math.PI,0]},OR={changed:!1,active:!1},_1=($,J)=>Number.isFinite($)?$:J,bX=Object.freeze({brain:Object.freeze({center:Object.freeze([0,1.74,-0.08]),radii:Object.freeze([0.78,0.4,0.62])})});function hX($,J={}){if(!$?.append||!J.modelUrl)throw TypeError("Provide a host element and modelUrl.");let Q=new URL(J.modelUrl,$.ownerDocument.baseURI),Z=new URL(J.expressionsUrl||"./expressions.json",Q),W=J.coarsePointer??matchMedia("(pointer:coarse)").matches,K=J.reducedMotion??matchMedia("(prefers-reduced-motion:reduce)").matches,X=jX({coarse:W,fixed:J.quality}),H=X.current(),Y=!1,U=!1,G=!0,E=null,q="neutral",M=null,O=0,F=!1,N=1,R=1,V=0,L=!0,k=!0,A=0,I=0,S=0,y=0,B=null,D=H.glyphBudget,C=null,T=null,P=null,f=-1/0,h=0,b=!!J.autoRotate&&!K,l=0,x=0,s=J.surface==="clay"?"clay":"ascii",t=typeof J.view==="string"?yX[J.view]:null,X0=t?.[0]??_1(J.view?.yaw,-0.95),G0=t?.[1]??_1(J.view?.pitch,Math.PI/36),B0=X0,R0=G0,o=X0,Z0=G0,J0=_1(J.view?.scale,0.84),O0=_1(J.view?.offsetX,0),D0=_1(J.view?.offsetY,0.22),z0=new AbortController,e0={signal:z0.signal},j=new AZ({alpha:!0,antialias:!1,powerPreference:W?"low-power":"default"});j.outputColorSpace=C8,j.setClearColor(0,0),j.autoClear=!1;let l0=j.domElement;l0.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",l0.setAttribute("aria-hidden","true"),$.append(l0);let j0=new B6,T0=new G7(-5,5,2.8,-2.8,0.1,50);T0.position.set(0,0,15),T0.lookAt(0,0,0);let L0=new K8;j0.add(L0);let a0=new u1({toneMapped:!1,uniforms:{encodeCrown:{value:1},gaze:{value:new g}},vertexShader:`
    #include <common>
    #include <morphtarget_pars_vertex>
    varying vec3 vNormal;
    varying float vHeight;
    uniform vec3 gaze;
    ${vX}
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
      vec3 neckPivot=vec3(${fX.map((d)=>d.toFixed(4)).join(",")});
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
    }`}),C0=new O8(1,1,{depthBuffer:!0}),M0=wX(C0.texture,{reduced:K,strongerGlyphs:W});M0.setQuality(H),M0.setSize(Math.max(2,_1(J.cellSize,5.4))),q1(J.ink||"#edeee5");function J1(d={}){if(!Y)J.onState?.({loaded:U,expression:q,quality:H.name,...d})}function q1(d){let $0=new y0(d).convertLinearToSRGB();M0.setInk(new g($0.r,$0.g,$0.b))}function d0(d=!0){if(Y)return;if(L||=d,k=!0,document.hidden||!G||O||F)return;A=0,I=0,X.wake(performance.now()),O=requestAnimationFrame(e)}function w(){let d=M0.getSourceSize(H.sampleScale);if(C0.width!==d.width||C0.height!==d.height)C0.setSize(d.width,d.height),L=!0}function _(){if(Y)return;let d=Math.max(1,$.clientWidth),$0=Math.max(1,$.clientHeight),E0=Math.min(devicePixelRatio||1,H.dpr);if(d!==N||$0!==R||E0!==V)N=d,R=$0,V=E0,j.setPixelRatio(E0),j.setSize(N,R,!1);M0.resize(N,R,E0),w();let U0=2.8*N/R;T0.left=-U0,T0.right=U0,T0.updateProjectionMatrix(),L0.position.set(O0,D0,0),L0.scale.setScalar(J0),d0(!0)}function m(d){if(!C)return!1;let $0=Math.min(1,(d-C.start)/600),E0=Math.min(6,Math.floor($0*6));if(E0!==C.step){C.step=E0;let U0=M1.smoothstep(E0/6,0,1);D=Math.round(M1.lerp(C.from,C.to,U0)),M0.setQuality({glyphBudget:D}),w(),L=!0}if($0>=1)C=null;return!!C}function a(){return{loaded:U,disposed:Y,surface:s,width:N,height:R,dpr:V,...M0.getStats(),...X.getReport(),frames:S,sourceFrames:y,animating:!!O||F,view:{yaw:X0,pitch:G0,scale:J0,offsetX:O0,offsetY:D0},dispersal:x}}function e(d){if(O=0,Y||document.hidden||!G)return;let $0=1000/H.fps;if(A&&d+0.4<A||I&&d-I<$0*0.65-0.4){O=requestAnimationFrame(e);return}let E0=I?d-I:$0,U0=Math.min(0.07,E0/1000);if(I=d,A=A?A+$0:d+$0,A<d-0.4)A+=Math.ceil((d-A)/$0)*$0;F=!0,k=!1;let b0=performance.now();if(T)H=T,T=null,C={from:D,to:H.glyphBudget,start:d,step:-1},M0.setQuality({glyphBudget:D,brushLimit:H.brushLimit}),_();if(P!==null&&d-f>=32)M0.setSize(P),P=null,f=d,w(),L=!0;let v=m(d);if(b&&!B)l+=U0,B0=o-l*0.22,R0=Z0+Math.sin(l*0.4)*0.025;let q0=Math.abs(X0-B0)<0.0001?B0:M1.damp(X0,B0,9,U0),Y0=Math.abs(G0-R0)<0.0001?R0:M1.damp(G0,R0,9,U0);L||=q0!==X0||Y0!==G0,X0=q0,G0=Y0,L0.rotation.set(G0,X0,0);let V0=E?.update(U0,d/1000)||OR;if(L||=V0.changed,s==="ascii"){if(a0.uniforms.encodeCrown.value=1,L)j.setRenderTarget(C0),j.clear(),j.render(j0,T0),y++,L=!1;M0.update(d/1000),j.setRenderTarget(null),j.clear(),j.render(M0.scene,M0.camera)}else a0.uniforms.encodeCrown.value=0,j.setRenderTarget(null),j.clear(),j.render(j0,T0),y++,L=!1;S++;let Q0=d>=h?X.observe(d,E0,performance.now()-b0):null;if(Q0)T=Q0,k=!0;if(F=!1,b||B||X0!==B0||G0!==R0||V0.active||v||T||P!==null||s==="ascii"&&M0.isAnimating(d/1000)||L||k)O=requestAnimationFrame(e);else J1({idle:!0,stats:a()})}let i=new ResizeObserver(_);i.observe($);let _0=typeof IntersectionObserver==="function"?new IntersectionObserver((d)=>{if(G=d[0].isIntersecting,G)d0(!0);else if(O)cancelAnimationFrame(O),O=0}):null;_0?.observe($),document.addEventListener("visibilitychange",()=>{if(document.hidden){if(O)cancelAnimationFrame(O);O=0,M0.leave()}else d0(!0)},e0),l0.addEventListener("pointermove",(d)=>{let $0=l0.getBoundingClientRect();if(B)B0=B.yaw+(d.clientX-B.x)*0.008,R0=M1.clamp(B.pitch+(d.clientY-B.y)*0.004,-1.35,1.35),d0(!0);if(s==="ascii"&&M0.move((d.clientX-$0.left)/$0.width*N,(1-(d.clientY-$0.top)/$0.height)*R,performance.now()/1000))d0(!1)},e0),l0.addEventListener("pointerleave",()=>M0.leave(),e0),l0.addEventListener("pointerdown",(d)=>{if(J.pointerRotation===!1||W||d.pointerType==="mouse"&&d.button!==0)return;B={x:d.clientX,y:d.clientY,yaw:B0,pitch:R0},b=!1,l0.setPointerCapture(d.pointerId)},e0);let W0=()=>{B=null,d0(!1)};for(let d of["pointerup","pointercancel","lostpointercapture"])l0.addEventListener(d,W0,e0);_(),J1({loading:!0});function I0(d){d.scene.traverse(($0)=>{if(!$0.isMesh)return;$0.geometry.dispose();for(let E0 of Array.isArray($0.material)?$0.material:[$0.material])E0.dispose()})}let S0=(async()=>{let d;try{let $0=await fetch(Q,{signal:z0.signal});if(!$0.ok)throw Error(`Could not load head (${$0.status}).`);if(d=await new bZ().parseAsync(await $0.arrayBuffer(),new URL(".",Q).href),Y)throw new DOMException("Head disposed.","AbortError");d.scene.updateMatrixWorld(!0);let E0=[];if(d.scene.traverse((r)=>{if(r.isMesh)E0.push(r)}),E0.length!==1)throw Error("This module requires the accepted single-mesh head asset.");let U0=E0[0],b0=U0.geometry.clone().applyMatrix4(U0.matrixWorld),v=new l1().setFromObject(d.scene),q0=v.getCenter(new g),Y0=d.scene.userData,V0=_1(Y0.alignmentHeight,v.max.y-v.min.y);if(!(V0>0))throw b0.dispose(),Error("Invalid head bounds.");let Q0=5.55/V0;if(Array.isArray(Y0.alignmentCenter)&&Y0.alignmentCenter.length===3&&Y0.alignmentCenter.every(Number.isFinite))q0.fromArray(Y0.alignmentCenter);b0.translate(-q0.x,-_1(Y0.alignmentTop,v.max.y),-q0.z),b0.scale(Q0,Q0,Q0),b0.translate(0,2.6,0),M=new A1(b0,a0),M.frustumCulled=!1,L0.add(M),E=SX(M,Q0,(r)=>{q=r.name,J1({loading:r.loading,expression:r.name,error:r.error}),d0(!0)},{manifestUrl:Z,signal:z0.signal}),U=!0,J1({loading:!1}),d0(!0)}catch($0){if(!Y)J1({loading:!1,error:$0}),J.onError?.($0);throw $0}finally{if(d)I0(d)}})();S0.catch(()=>{});let K0={ready:S0,setView(d){if(Y)return;let $0=typeof d==="string"?yX[d]:null;if(typeof d==="string"&&!$0)throw RangeError("Unknown head view.");if(B0=$0?.[0]??_1(d.yaw,B0),R0=$0?.[1]??_1(d.pitch,R0),o=B0,Z0=R0,l=0,typeof d==="object")J0=Math.max(0.01,_1(d.scale,J0)),O0=_1(d.offsetX,O0),D0=_1(d.offsetY,D0);if(d.immediate||K)X0=B0,G0=R0,L0.rotation.set(G0,X0,0);_()},setAppearance(d){if(Y)return;if(d.ink)q1(d.ink);if(Number.isFinite(d.cellSize))P=Math.max(2,Math.min(128,d.cellSize)),h=performance.now()+1200;if(d.surface){if(!["ascii","clay"].includes(d.surface))throw RangeError("Unknown surface.");s=d.surface,M0.leave(),L=!0}d0(!1)},setScatter(d,$0){if(!Y&&Number.isFinite(d))x=M1.clamp(d,0,1),M0.setScatter(x,$0),d0(!1)},setGlyphGlitch({x:d=0,y:$0=0,strength:E0=0,seed:U0=0}={}){if(!Y&&M0.setGlyphGlitch(_1(d,0),_1($0,0),M1.clamp(_1(E0,0),0,1),_1(U0,0)))d0(!1)},setGaze({yaw:d=0,pitch:$0=0,roll:E0=0}={}){if(Y)return;a0.uniforms.gaze.value.set(M1.clamp(_1(d,0),-0.4,0.4),M1.clamp(_1($0,0),-0.16,0.16),M1.clamp(_1(E0,0),-0.16,0.16)),d0(!0)},projectPoints(d){return L0.updateMatrixWorld(!0),T0.updateMatrixWorld(!0),d.map(($0)=>{let E0=new g().fromArray($0).applyMatrix4(L0.matrixWorld),U0=E0.z;return E0.project(T0),{x:(E0.x*0.5+0.5)*N,y:(0.5-E0.y*0.5)*R,depth:U0,visible:E0.z>=-1&&E0.z<=1}})},setAutoRotate(d){if(!Y)b=!!d&&!K,d0(!0)},pause(){K0.setAutoRotate(!1)},resume(){K0.setAutoRotate(!0)},async setExpression(d){if(await S0,Y)throw new DOMException("Head disposed.","AbortError");await E.choose(d),d0(!0)},async blink(){if(await S0,Y)throw new DOMException("Head disposed.","AbortError");await E.blink(),d0(!0)},getStats:a,dispose(){if(Y)return;if(Y=!0,z0.abort(),O)cancelAnimationFrame(O);O=0,i.disconnect(),_0?.disconnect(),E?.dispose(),M?.geometry.dispose(),a0.dispose(),M0.dispose(),C0.dispose(),j.dispose(),l0.remove()}};return K0}function S6($,J={}){let Q=document.createElementNS("http://www.w3.org/2000/svg",$);for(let[Z,W]of Object.entries(J))Q.setAttribute(Z,W);return Q}function xX({host:$,links:J,connectors:Q,points:Z}){let W=matchMedia("(prefers-reduced-motion: reduce)"),K=null;J.forEach((Y,U)=>{let G=()=>{if(W.matches||document.body.dataset.phase!=="head")return;if(K?.index===U)return;K?.connector.classList.remove("is-signaling");let E=Q[U].group;E.classList.add("is-signaling"),K={index:U,connector:E,time:performance.now(),point:null,seed:Math.random()}};Y.addEventListener("pointerenter",(E)=>{if(E.pointerType!=="touch")G()}),Y.addEventListener("focus",()=>{if(Y.matches(":focus-visible"))G()})});function X(Y){if(!K)return;K.connector.classList.remove("is-signaling"),K=null,Y.setGlyphGlitch()}function H(Y,U){if(!K)return;let G=U-K.time;if(G>=575||W.matches){X(Y);return}if(G<320){Y.setGlyphGlitch();return}K.point??=Q[K.index].point??Y.projectPoints([Z[K.index]])[0];let E=(G-320)/255,q=0.83*Math.sin(Math.PI*E);Y.setGlyphGlitch({x:K.point.x/$.clientWidth,y:1-K.point.y/$.clientHeight,strength:q,seed:K.seed+Math.floor(G/40)*0.11})}return{update:H,clear:X}}function gX($,J){let Q=$.querySelector('[data-section="more"]'),Z=document.createElement("div");Z.id="cover-directory",Z.className="cover-directory",Z.hidden=!0,Z.innerHTML=J,$.append(Z),Q.setAttribute("aria-controls",Z.id),Q.setAttribute("aria-expanded","false");function W(K){Z.hidden=!K,Q.setAttribute("aria-expanded",String(K))}return Q.addEventListener("click",(K)=>{K.stopPropagation();let X=Z.hidden;if(W(X),X&&K.detail===0)Z.querySelector("button, a").focus()}),Z.addEventListener("click",(K)=>{if(!K.target.closest("button, a"))return;W(!1),Q.focus({preventScroll:!0})}),$.addEventListener("focusout",(K)=>{if(K.relatedTarget&&!$.contains(K.relatedTarget))W(!1)}),$.addEventListener("keydown",(K)=>{if(K.key!=="Escape"||Z.hidden)return;K.preventDefault(),K.stopPropagation(),W(!1),Q.focus({preventScroll:!0})}),document.addEventListener("click",(K)=>{if(!$.contains(K.target))W(!1)}),()=>W(!1)}function LR($,J,Q){let Z=document.createElement("canvas");Z.width=$,Z.height=J;let W=Z.getContext("2d");if(!W)return null;let K=W.createImageData($,J),X=Math.max(0,$/2-Q),H=J/2-Q,Y=Q/2;for(let U=0;U<J;U++)for(let G=0;G<$;G++){let E=G+0.5-$/2,q=U+0.5-J/2,M=Math.sign(E)*Math.max(0,Math.abs(E)-X),O=Math.sign(q)*Math.max(0,Math.abs(q)-H),F=Math.hypot(M,O),N=Q-F,R=N<0?0:Math.max(0,1-N/Y)**1.8,V=(U*$+G)*4;K.data[V]=128-R*M/Math.max(1,F)*123,K.data[V+1]=128-R*O/Math.max(1,F)*123,K.data[V+3]=255}return W.putImageData(K,0,0),Z.toDataURL()}function pX($){if(!/Chrom(?:e|ium)\//.test(navigator.userAgent)||matchMedia("(pointer: coarse), (prefers-reduced-transparency: reduce)").matches)return;let J=S6("svg",{width:0,height:0,"aria-hidden":"true"}),Q=S6("defs");J.classList.add("cover-lens-definitions"),J.append(Q),$.prepend(J);let Z=[...$.querySelectorAll('.cover-topbar-group, .cover-menu > [data-section="more"], #go, .cover-directory')],W=new Map(Z.map((X,H)=>{let Y=S6("filter",{id:`cover-glass-${H}`,filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"});return Q.append(Y),[X,Y]})),K=new ResizeObserver((X)=>{for(let{target:H}of X){let Y=W.get(H),U=H.offsetWidth,G=H.offsetHeight;if(!U||!G||Y.getAttribute("width")===String(U)&&Y.getAttribute("height")===String(G))continue;let E=H.classList.contains("cover-directory"),q=LR(U,G,E?22:G/2);if(!q)continue;for(let[M,O]of Object.entries({x:0,y:0,width:U,height:G}))Y.setAttribute(M,O);Y.replaceChildren(S6("feImage",{href:q,width:U,height:G,result:"rim",preserveAspectRatio:"none"}),S6("feDisplacementMap",{in:"SourceGraphic",in2:"rim",scale:E?10:G*0.23,xChannelSelector:"R",yChannelSelector:"G",result:"lens"}),S6("feGaussianBlur",{in:"lens",stdDeviation:0.55})),H.style.setProperty("--cover-glass-lens",`url(#${Y.id})`)}});Z.forEach((X)=>K.observe(X)),addEventListener("pagehide",()=>K.disconnect(),{once:!0})}function V9($){$.beginPath(),$.moveTo(9.2,24),$.lineTo(11.8,20.7),$.bezierCurveTo(9.5,20.7,7.8,19.8,7.8,18.4),$.lineTo(8.1,17.2),$.lineTo(6.8,16.1),$.lineTo(8,15.2),$.lineTo(7.5,14.1),$.lineTo(5.6,13.5),$.quadraticCurveTo(4.9,13.2,5.8,12.2),$.lineTo(8.4,8.9),$.bezierCurveTo(8.5,5.6,11.6,2.2,16.4,2.2),$.bezierCurveTo(22.1,2.2,25.2,5.7,25.2,10.1),$.bezierCurveTo(25.2,14.6,22.6,16.3,20.7,18.4),$.lineTo(20.9,21.1),$.lineTo(24.4,24),$.closePath()}function R7($){V9($),$.moveTo(9.1,9.7),$.quadraticCurveTo(10.7,9.2,12.4,10.5),$.quadraticCurveTo(10.6,10.6,9.1,10.9),$.closePath(),$.fill("evenodd")}function WJ($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.stroke()}var xZ=[{id:"bust-solid",name:"Силуэт",draw:R7},{id:"bust-frame",name:"Портрет в кадре",draw($){$.save(),$.translate(4.2,2.9),$.scale(0.78,0.78),R7($),$.restore(),$.lineWidth=1.1,WJ($,[[4.5,8],[4.5,2.5],[11,2.5]]),WJ($,[[27.5,8],[27.5,2.5],[21,2.5]]),WJ($,[[4.5,18],[4.5,23.5],[11,23.5]]),WJ($,[[27.5,18],[27.5,23.5],[21,23.5]])}},{id:"bust-scan",name:"Портрет из полос",draw($){$.save(),V9($),$.clip();for(let[J,Q]of[[2.2,1.35],[5.1,1.55],[8.2,1.9],[11.7,2.3],[15.5,1.7],[18.6,1.8],[21.9,2.1]])$.fillRect(4,J,24,Q);$.restore()}},{id:"bust-dissolve",name:"Портрет в движении",width:38,draw($){$.save(),$.beginPath(),$.moveTo(1,0),$.lineTo(21.8,0),$.lineTo(21.8,7.2),$.lineTo(18.8,7.2),$.lineTo(18.8,12.4),$.lineTo(21.1,12.4),$.lineTo(21.1,16.1),$.lineTo(18,16.1),$.lineTo(18,20.7),$.lineTo(21.2,20.7),$.lineTo(21.2,26),$.lineTo(1,26),$.closePath(),$.clip(),R7($),$.restore(),$.globalAlpha=0.9,$.fillRect(23.7,3.5,2.2,2.2),$.fillRect(21.1,8.5,2.7,2.7),$.fillRect(26.2,11.8,2.3,2.3),$.fillRect(21.5,17.5,2.4,2.4),$.fillRect(25.5,21,1.8,1.8),$.globalAlpha=0.55,$.fillRect(29,6.8,1.6,1.6),$.fillRect(32,12.3,1.4,1.4),$.fillRect(35.1,13.3,1,1),$.fillRect(28.1,16.9,1.5,1.5),$.globalAlpha=1}},{id:"bust-outline",name:"Контур и отражение",draw($){$.lineWidth=1.1,V9($),$.stroke(),$.globalAlpha=0.57,$.beginPath(),$.moveTo(22.2,2.5),$.bezierCurveTo(27.3,3.8,29.4,8.7,28,13),$.bezierCurveTo(27.2,15.3,25.8,17.1,24.5,18.4),$.lineTo(24.8,20.7),$.lineTo(28.2,24),$.stroke(),$.globalAlpha=1}},{id:"bust-shift",name:"Сдвиг силуэта",draw($){$.save(),$.beginPath(),$.moveTo(0,0),$.lineTo(32,0),$.lineTo(32,10.7),$.lineTo(0,17),$.closePath(),$.clip(),$.translate(2.6,-0.7),R7($),$.restore(),$.save(),$.beginPath(),$.moveTo(0,19.1),$.lineTo(32,12.8),$.lineTo(32,26),$.lineTo(0,26),$.closePath(),$.clip(),R7($),$.restore()}}];function m1($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.closePath(),$.fill()}function KJ($,J){for(let[Q,Z,W]of J)$.beginPath(),$.arc(Q,Z,W,0,Math.PI*2),$.fill()}var gZ=[{id:"velocity-pulse",name:"Импульс",width:43,draw($){m1($,[[21,4],[40,13],[21,22],[25,13]]),m1($,[[10,9],[23,9],[25,13],[8,13]]),m1($,[[14,16],[24,16],[22.5,19],[12,19]]),$.fillRect(3,10.5,3,2.5),$.fillRect(6,16.5,2.5,2.5)}},{id:"velocity-orbit",name:"Орбита частиц",width:40,draw($){KJ($,[[32.4,7.2,2.75],[28.3,5.2,1.5],[24.3,4.6,1.3],[20.4,5.1,1.15],[16.8,6.4,1],[13.4,8.2,0.85],[10.3,10.6,0.85],[7.2,13.9,0.95],[6.7,17.4,1.05],[8.7,20.3,1.2],[12.7,21.7,1.35],[17.4,21.9,1.5],[22.1,20.7,1.65],[27.2,18.2,1.95],[31.6,14.8,2.2]])}},{id:"velocity-trajectory",name:"Траектория",width:46,draw($){$.beginPath(),$.moveTo(11,17),$.bezierCurveTo(20,13,29,4,43,4.7),$.bezierCurveTo(36,9,35,13.3,30,16.8),$.bezierCurveTo(25.5,20,19,20.2,11,17),$.closePath(),$.fill(),m1($,[[10,19.7],[19.2,21.5],[13.2,22.6],[7.4,21.6]]),KJ($,[[5.5,18.4,1.05],[2.5,20.8,0.7]])}},{id:"velocity-stream",name:"Поток",width:43,draw($){m1($,[[16,4.3],[39,4.3],[35,8],[12,8]]),m1($,[[14,10.7],[35,10.7],[31,14.4],[10,14.4]]),m1($,[[10,17.2],[29,17.2],[25,20.9],[6,20.9]]),m1($,[[10,4.5],[12.5,4.5],[8.6,8],[6.1,8]]),m1($,[[7,10.8],[9.5,10.8],[5.6,14.4],[3.1,14.4]]),m1($,[[4.7,17.2],[2.1,19.7],[1.8,17.2]])}},{id:"velocity-shards",name:"Осколки",width:42,draw($){m1($,[[36.9,3.2],[40,12.3],[22.8,17.1],[26.3,8.8]]),m1($,[[28.8,15.5],[24.5,22.7],[17.2,22],[21.1,17.4]]),m1($,[[16.8,7.3],[23.9,7.3],[18.7,12.3],[14,12.3]]),m1($,[[10.6,14.1],[17.7,14.1],[14.5,17.8],[7.4,17.8]]),KJ($,[[12.4,8.1,1],[5.7,13.1,1.05],[3.4,18.3,0.85],[10.8,21.9,0.85]])}},{id:"velocity-vortex",name:"Вихрь",width:38,draw($){$.beginPath(),$.moveTo(10,11.2),$.bezierCurveTo(10.8,3.3,25.4,1.8,33.6,8),$.bezierCurveTo(23.2,4.8,16.5,8.4,16.3,14.3),$.closePath(),$.fill(),$.beginPath(),$.moveTo(27.6,14.7),$.bezierCurveTo(27.1,22.6,11.9,24.5,3.9,18.6),$.bezierCurveTo(14.2,21.4,21,17.8,21,11.7),$.closePath(),$.fill(),KJ($,[[5.5,10.2,1.1],[3.1,13.7,0.8],[32.6,15.1,1.1],[35.1,12.2,0.8]])}}];var DR=["10001 10001 10001","10001 10001 11001","10001 10001 11001","10101 10101 10101","10101 10101 10011","11011 11011 10011","01010 01010 10001"],B9=[[3,5],[9,21],[16,10],[23,21],[29,5]],lX=[[26,24],[22,20],[22,16],[25,11],[25,8],[23,4],[19,2.5],[13,2.5],[8,5],[7,9],[3.5,13],[7,14],[7,16],[9,17],[8,19],[11,21],[15,21],[16,24]];function w1($,J,Q,Z=1.1){$.beginPath(),$.arc(J,Q,Z,0,Math.PI*2),$.fill()}function F1($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.stroke()}function pZ($,J){for(let Q=1;Q<J.length;Q+=1){let[Z,W]=J[Q-1],[K,X]=J[Q],H=Math.ceil(Math.hypot(K-Z,X-W)/3);for(let Y=0;Y<H;Y+=1)w1($,Z+(K-Z)*Y/H,W+(X-W)*Y/H)}w1($,...J.at(-1))}function UJ($,J=!1){DR.forEach((Q,Z)=>{Array.from(Q).forEach((W,K)=>{if(W!=="1")return;let X=3+K*3.6,H=2.2+Z*3.6;if(J)$.fillRect(X-1.65,H-1.65,3.3,3.3);else w1($,X,H)})})}function U8($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.closePath(),$.fill()}function lZ($,J=!1){let Q=[[0,4],[3.7,4],[7.8,16],[11.6,7.7],[15.4,16],[19.5,4],[23.2,4],[17,22],[14,22],[11.6,16.6],[9.2,22],[6.2,22]];for(let Z of[2,26.4])U8($,Q.map(([W,K])=>[Z+W,K]));if(U8($,[[52,22],[52,4],[55.1,4],[66.6,16.3],[66.6,J?11:4],[70.2,J?11:4],[70.2,22],[67.2,22],[55.6,9.7],[55.6,22]]),J)$.fillRect(66.6,8,1.6,1.6),$.fillRect(69,6,1.5,1.5),$.fillRect(71.1,3.6,1.3,1.3)}function uZ($,J,Q,Z,W){for(let K of J)$.fillText(K,Q,Z),Q+=$.measureText(K).width+W}var _R={id:"default",width:64,draw:UJ},dX=[{id:"dots",name:"WWN со следом",width:68,draw($){$.save(),$.translate(2,-0.8),$.globalAlpha=0.31,UJ($),$.restore(),UJ($)}},{id:"pixel",name:"Пиксельный WWN",width:64,draw:($)=>UJ($,!0)},{id:"constellation",name:"Созвездие W",draw:($)=>pZ($,B9)},{id:"trace",name:"Проводник",draw($){$.lineWidth=1.6,F1($,B9),w1($,...B9[0],1.75),w1($,...B9.at(-1),1.75)}},{id:"brackets",name:"W в скобках",width:42,draw($){F1($,[[9,4],[3,4],[3,22],[9,22]]),F1($,[[33,4],[39,4],[39,22],[33,22]]),$.lineWidth=2,F1($,[[9,8],[14,18],[21,10],[28,18],[33,8]])}},{id:"node",name:"Узел",draw($){F1($,[[16,12],[8,4],[3,4]]),F1($,[[16,12],[24,4],[29,4]]),F1($,[[16,12],[16,22]]);for(let[J,Q]of[[3,4],[29,4],[16,22]])w1($,J,Q,1.45);w1($,16,12,2.6)}},{id:"signal",name:"Штриховой знак",draw($){$.lineWidth=1.9,$.lineCap="butt",$.setLineDash([3,2.4]),F1($,B9),F1($,[[10.5,23],[16,14],[21.5,23]])}},{id:"profile",name:"Контур головы",draw($){F1($,lX),w1($,10,11,0.95),F1($,[[6,24],[16,24]]),F1($,[[26,24],[29,24]])}},{id:"face-dots",name:"Точечный профиль",draw($){pZ($,lX);for(let[J,Q,Z]of[[10,10,0.95],[14,7,0.65],[18,6,0.7],[21,8,0.7],[18,10,0.75],[19,14,0.85],[14,14,0.65],[12,17,0.75],[22,11,0.7]])w1($,J,Q,Z)}},{id:"scatter",name:"Распад W",width:42,draw($){pZ($,[[3,5],[9,21],[16,10],[23,21],[26.5,11.5]]);for(let[J,Q,Z]of[[27,8,1.1],[28,4,0.8],[30,6,0.65],[32,3,0.75],[33,8,0.55],[35,12,0.85],[31,13,0.65],[30,18,0.9],[33,21,0.65],[38,5,0.6],[39,9,0.45],[38,16,0.65]])w1($,J,Q,Z)}}],cX=[{id:"geometric",name:"Плотный WWN",width:74,draw:lZ},{id:"studio-signature",name:"Подпись студии",width:118,draw($){$.save(),$.translate(0,2.6),$.scale(0.8,0.8),lZ($),$.restore(),$.fillRect(63,5,0.7,16),$.font="600 7px Arial, sans-serif",uZ($,"IT",70,11.2,0.75),uZ($,"SOLUTIONS",70,19.5,0.68)}},{id:"serif",name:"WWN с засечками",width:69,draw($){$.font="bold 22px Georgia, serif",uZ($,"WWN",1.3,21,-0.8)}},{id:"pixel-edge",name:"WWN с пиксельным краем",width:76,draw:($)=>lZ($,!0)}],nX=[{id:"disc-fragment",name:"Диск и частица",draw($){$.save(),$.beginPath(),$.arc(13.2,13,10.5,0,Math.PI*2),$.clip(),U8($,[[2,2],[26,2],[26,8],[21,8],[21,11],[18.2,11],[18.2,15],[21,15],[21,18],[26,18],[26,24],[2,24]]),$.restore(),$.fillRect(25,11.2,3.6,3.6)}},{id:"facets",name:"Две плоскости",draw($){U8($,[[4,10.5],[17.5,2.5],[30,2.5],[16.5,10.5]]),U8($,[[2,14.5],[16.5,14.5],[28.5,7.3],[28.5,15],[15,23.5],[2,23.5]])}},{id:"aperture",name:"Просвет",draw($){$.beginPath(),$.moveTo(16,1.6),$.lineTo(30,13),$.lineTo(16,24.4),$.lineTo(2,13),$.closePath(),$.moveTo(10.5,15.5),$.lineTo(15.2,8.2),$.lineTo(22.5,10.5),$.lineTo(17.8,17.8),$.closePath(),$.fill("evenodd")}},{id:"layers",name:"Слои",draw($){U8($,[[5,3],[29,3],[25,8],[1,8]]),U8($,[[8,10.5],[27,10.5],[23,15.5],[4,15.5]]),U8($,[[11,18],[25,18],[21,23],[7,23]])}}],sX=[{id:"frame-open",name:"Открытая рамка",draw($){$.lineWidth=1.6,$.lineCap="butt",F1($,[[21,3],[5,3],[5,23],[25,23],[25,12]]),$.fillRect(23.4,2.2,3.2,3.2)}},{id:"frame-offset",name:"Двойной кадр",width:34,draw($){$.lineCap="butt",F1($,[[26,17],[26,6],[4,6],[4,23],[21,23]]),F1($,[[9,10],[9,3],[30,3],[30,20],[14,20]])}},{id:"frame-medallion",name:"Профиль в круге",draw($){w1($,16,13,11.5),$.save(),$.globalCompositeOperation="destination-out",$.translate(4,2.7),$.scale(0.79,0.86),V9($),$.fill(),$.restore()}},{id:"frame-exit",name:"Выход из кадра",width:39,draw($){$.lineWidth=1.2,F1($,[[26,3],[4,3],[4,23],[26,23]]),$.save(),$.translate(16.5,2.25),$.scale(0.87,0.92),R7($),$.restore()}},{id:"frame-fold",name:"Складка",draw($){U8($,[[3,3],[16,3],[12,22.6],[3,18.7]]),U8($,[[19.2,3],[28,7],[28,23],[15.2,23]])}},{id:"frame-fragment",name:"Осколок рамки",draw($){$.lineWidth=1.8,$.lineCap="butt",F1($,[[19.5,3.2],[5.1,3.2],[5.1,22.8],[24.7,22.8],[24.7,9.1]]),U8($,[[23,2.1],[28.5,2.1],[28.5,7.6]])}}],oX=[{id:"model-head",name:"Портрет с обложки",image:"./sculpt/header-head-ivory.webp",draw($,J){$.drawImage(J,3,0,26,26)}},{id:"model-frame",name:"Портрет в кадре",image:"./sculpt/header-head-cut.webp",draw($,J){$.drawImage(J,4.5,1.5,23,23),$.lineWidth=0.85,$.lineCap="butt",F1($,[[4.1,8],[4.1,2.5],[10.8,2.5]]),F1($,[[21.2,23.5],[27.9,23.5],[27.9,18]])}},{id:"model-grains",name:"Портрет и частицы",width:38,image:"./sculpt/header-head-cut.webp",draw($,J){$.save(),$.clip(new Path2D("M0 0H21V6H19.5V12H23V17H19.7V21H22V26H0Z")),$.drawImage(J,0,0,26,26),$.restore();for(let[Q,Z,W]of[[23,4.5,1.3],[25.5,9,1.8],[28.5,13.5,1.6],[23.5,16,1.6],[31.5,11.6,1.1],[34,17.5,0.9]])$.fillRect(Q,Z,W,W)}}],nZ="M27 38l-5 5a10 10 0 0 1-14-14l12-12a10 10 0 0 1 14 0",sZ="M37 26l5-5a10 10 0 0 1 14 14L44 47a10 10 0 0 1-14 0",oZ="M22 42l20-20",j6=nZ+sZ+oZ;function XJ($,J=!1,Q=1,Z=-2.1){if($.save(),$.translate(Q,Z),$.scale(0.48,0.48),$.lineWidth=4,J)$.setLineDash([0.1,5.1]);$.stroke(new Path2D(j6)),$.restore()}var iX=[{id:"link-classic",name:"Исходная форма",draw:XJ},{id:"link-dots",name:"Точечный контур",draw:($)=>XJ($,!0)},{id:"link-grains",name:"Частицы на краю",width:38,draw($){$.save(),$.beginPath(),$.rect(0,0,24.3,26),$.clip(),XJ($),$.restore();for(let[J,Q,Z]of[[25.3,10,1.7],[28.5,11.3,1.55],[26.1,15,1.7],[30.8,15,1.35],[34.5,13.1,1.1],[32.3,18,0.9]])$.fillRect(J,Q,Z,Z)}},{id:"link-trail",name:"След в движении",width:41,draw($){XJ($),$.globalAlpha=0.76,F1($,[[29.7,9.2],[35,9.2]]),F1($,[[31.7,12.9],[38.6,12.9]]),$.globalAlpha=0.55,w1($,31.5,17,0.9),w1($,36.4,17,0.65),$.globalAlpha=1}}],HJ;function mZ(){if(HJ)return HJ;let $=new DOMMatrix([0.48,0,0,0.48,1,-2.1]),J=(H)=>{let Y=new Path2D;return Y.addPath(new Path2D(H),$),Y},Q=J(j6),Z=J(nZ+oZ),W=J(sZ),K=document.createElement("canvas").getContext("2d");K.lineWidth=4.25,K.lineCap="round",K.lineJoin="round";let X=(H,Y,U=0)=>{let G=[];for(let E=2.2;E<25;E+=Y)for(let q=2.2+U;q<31;q+=Y)if(K.isPointInStroke(H,q,E))G.push({x:q,y:E});return G};return HJ={front:Z,dots:X(Q,2),rearDots:X(W,1.9,0.45)},HJ}var aX=[{id:"link-flat-dot-field",name:"Сетка точек",draw($){for(let{x:J,y:Q}of mZ().dots)w1($,J,Q,0.77)}},{id:"link-flat-solid-dot",name:"Цельное звено и растр",draw($){let{front:J,rearDots:Q}=mZ();for(let{x:Z,y:W}of Q)w1($,Z,W,0.71);$.lineWidth=3.8,$.stroke(J)}},{id:"link-flat-wave",name:"Волна по знаку",animate:!0,draw($,J=0){let Q=Math.sin(Math.PI*J);for(let{x:Z,y:W}of mZ().dots){let K=(Z/32-J)*6,X=Q*Math.exp(-(K*K));$.fillRect(Z-0.7+X*1.2,W-0.7-X*0.85,1.4,1.4)}}}],dZ;function VR(){if(dZ)return dZ;let $=[],J=document.createElementNS("http://www.w3.org/2000/svg","path");for(let[Q,Z]of[[nZ,8],[sZ,8],[oZ,4]]){J.setAttribute("d",Q);let W=J.getTotalLength();for(let K=0;K<=Z;K+=1){let{x:X,y:H}=J.getPointAtLength(W*K/Z),Y={x:1+X*0.48,y:-2.1+H*0.48};if(!$.some((U)=>Math.hypot(U.x-Y.x,U.y-Y.y)<2.35))$.push(Y)}}return dZ=$,$}function GJ($,J){for(let{x:Q,y:Z}of VR())J($,Q,Z)}function BR($,J=0){let Q=new Path2D(j6),Z=Math.sin(Math.PI*J);$.lineWidth=6.8,GJ($,(W,K,X)=>{let H=(K/32-J)*5,Y=Z*Math.exp(-(H*H));W.save(),W.translate(K,X),W.rotate(Y*1.2),W.scale(0.058,0.058),W.translate(-32,-32),W.stroke(Q),W.restore()})}var rX=[{id:"link-modular-disc",name:"Круги",draw:($)=>GJ($,(J,Q,Z)=>w1(J,Q,Z,1.24))},{id:"link-modular-ring",name:"Кольца",draw($){$.lineWidth=0.55,GJ($,(J,Q,Z)=>{J.beginPath(),J.arc(Q,Z,1.03,0,Math.PI*2),J.stroke()})}},{id:"link-modular-square",name:"Квадраты",draw:($)=>GJ($,(J,Q,Z)=>J.fillRect(Q-1.15,Z-1.15,2.3,2.3))},{id:"link-modular-repeat",name:"Повторы знака",animate:!0,draw:BR}],v1=23,EJ=24/v1,uX=new WeakMap,YJ;function mX($){let J=uX.get($);if(J)return J;let Q=document.createElement("canvas");Q.width=v1,Q.height=v1;let Z=Q.getContext("2d"),W=1.25,K=v1-W*2;Z.drawImage($,W,W,K,K);let X=Z.getImageData(0,0,v1,v1).data,H=Array.from({length:v1*v1},(Y,U)=>Math.pow(X[U*4+3]/255,0.82));return uX.set($,H),H}function zR(){if(YJ)return YJ;let $=new Path2D;$.addPath(new Path2D(j6),new DOMMatrix([0.37,0,0,0.37,0.9,0.9]));let J=document.createElement("canvas").getContext("2d");return J.lineWidth=3.4,J.lineCap="round",J.lineJoin="round",YJ=Array.from({length:v1*v1},(Q,Z)=>{let W=1+(Z%v1+0.5)*EJ,K=1+(Math.floor(Z/v1)+0.5)*EJ;return J.isPointInStroke($,W,K)?1:0}),YJ}function cZ($,J,Q,Z=!1){let W=["·",":","+","x","*","#","@"],K=Math.sin(Math.PI*Q);if(Z)$.textAlign="center",$.textBaseline="middle";J.forEach((X,H)=>{let Y=H%v1,U=Math.floor(H/v1),G=1+(Y+0.5)*EJ,E=1+(U+0.5)*EJ,q=(Y/v1+U/v1*0.28-Q*1.28)*7,M=K*Math.exp(-(q*q)),O=Math.min(1,X+M*0.28);if($.globalAlpha=0.23+0.77*O,Z)$.font=`600 ${0.48+O*0.78}px monospace`,$.fillText(W[Math.round(O*(W.length-1))],G,E+0.06);else w1($,G+M*X*0.28,E,0.11+0.34*O)}),$.globalAlpha=1}var tX=[{id:"model-field-dots",name:"Портрет из точек",width:26,image:"./sculpt/header-head-cut.webp",animate:!0,duration:920,draw($,J,Q){cZ($,mX(J),Q)}},{id:"model-field-ascii",name:"Портрет из ASCII",width:26,image:"./sculpt/header-head-cut.webp",animate:!0,duration:920,draw($,J,Q){cZ($,mX(J),Q,!0)}},{id:"link-field-dots",name:"Звенья в квадрате",width:26,animate:!0,duration:920,draw($,J){cZ($,zR(),J)}}],kR={id:"link-block",name:"Угловатые звенья",width:34,draw($){let J=[[15.6,16],[11.1,20.5],[7.1,20.5],[3.9,17.3],[3.9,13.6],[12.3,5.2],[16.6,5.2],[19.1,7.7]];$.lineWidth=4.35,$.lineCap="butt",$.lineJoin="miter",F1($,J),F1($,J.map(([Q,Z])=>[34-Q,26-Z])),U8($,[[9.6,17.8],[21.9,5.5],[25,8.6],[12.7,20.9]])}},CR=[{id:"ribbon",name:"Лента",width:42,draw($){let J=new Path2D("M2 14C2 8.9 5.8 5.4 11.2 5.4C17.2 5.4 20.8 8.9 24.1 13.1C26.4 16.1 28.5 18.6 31.6 18.6C34 18.6 35.4 17.3 36.2 15.5L39 18C37.7 20.9 35 22.6 31.6 22.6C26.5 22.6 23.2 19.6 20 15.4C17.4 12.1 14.8 9.3 11.2 9.3C8.2 9.3 6.3 11.2 6.3 14C6.3 16.6 8.1 18.4 10.9 18.4C12.8 18.4 14.4 17.4 15.8 16.2L18.1 19.2C16 21.4 13.7 22.4 10.9 22.4C5.7 22.4 2 18.8 2 14Z");$.fill(J),$.translate(42,26),$.rotate(Math.PI),$.fill(J)}},{id:"arc-gap",name:"Просвет",width:32,draw($){$.fill(new Path2D("M4 13C4 6.8 9.1 2.8 15.2 2.8C20.3 2.8 24.3 5.1 26.3 8.4C22.3 7.2 19.3 8 16.6 10.2C13 13 11.3 17.1 5.1 17.5C4.4 16.2 4 14.6 4 13ZM28 13C28 19.2 22.9 23.2 16.8 23.2C11.7 23.2 7.7 20.9 5.7 17.6C9.7 18.8 12.7 18 15.4 15.8C19 13 20.7 8.9 26.9 8.5C27.6 9.8 28 11.4 28 13Z"))}}],IR=[...dX,...cX,...nX,...xZ,...sX,...gZ,...oX,...iX,...aX,...rX,...tX,kR,...CR],L8=($)=>$.map(({id:J,name:Q})=>({id:J,name:Q})),BD=L8(dX),zD={name:"Знак-связь",marks:L8(aX)},kD={name:"Модули знака-связи",marks:L8(rX)},CD={name:"Поле частиц",marks:L8(tX)},ID=[{id:"cover-portraits",name:"Голова с обложки",marks:L8(oX)},{id:"site-links",name:"Знак-связь с сайта",marks:L8(iX)}],PD=[{id:"portraits",name:"Портрет",marks:L8(xZ)},{id:"frames",name:"Рамки",marks:L8(sX)},{id:"motion",name:"Движение и частицы",marks:L8(gZ)},{id:"symbols",name:"Геометрия",marks:L8(nX)},{id:"wordmarks",name:"Подписи WWN",marks:L8(cX)}];function eX($,J,Q=2,Z){let W=IR.find((U)=>U.id===$)??_R,K=document.createElement("canvas");K.dataset.logo=W.id,K.setAttribute("aria-hidden","true"),K.width=(W.width??32)*Q,K.height=26*Q;let X=K.getContext("2d");if(!X)return null;X.scale(Q,Q),X.fillStyle=J,X.strokeStyle=J,X.lineWidth=1.25,X.lineCap="round",X.lineJoin="round";let H;function Y(U=0){if(X.clearRect(0,0,K.width/Q,26),H)W.draw(X,H,U);else W.draw(X,U)}if(W.image){let U=new Image;U.addEventListener("load",()=>{H=U,Y(),K.dataset.rendered="true"},{once:!0}),U.addEventListener("error",()=>{R7(X),K.dataset.rendered="fallback"},{once:!0}),U.src=new URL(W.image,import.meta.url).href}else Y();if(W.animate&&Z){let E=function(){if(U.matches||W.image&&!H)return;cancelAnimationFrame(G);let q=performance.now();function M(O){let F=Math.min(1,(O-q)/(W.duration??620));if(Y(F===1?0:F),F<1)G=requestAnimationFrame(M)}G=requestAnimationFrame(M)},U=matchMedia("(prefers-reduced-motion: reduce)"),G;Z.addEventListener("pointerenter",E),Z.addEventListener("focus",E),Z.addEventListener("brand-preview-replay",E)}return K}var tZ={id:"dock",title:"Нижняя панель",offset:0,scale:0.86},iZ=[{id:"editorial",title:"Журнал",offset:0.16,scale:0.79},{id:"schematic",title:"Схема",offset:0,scale:0.8},tZ,{id:"focus",title:"Фокус",offset:0.15,scale:0.83}],aZ=[[-0.45,1.26,1.16],[0.46,-2.7,1.22],[1.05,1.62,-0.35]],z9="http://www.w3.org/2000/svg",QH=()=>matchMedia("(max-width: 600px)").matches,PR=new Map([["glass-pill",{panel:"glass-pill",layout:"dock"}],["glass-rail",{panel:"glass-rail",layout:"dock"}],["glass-split",{panel:"glass-split",layout:"dock"}],["glass-split-schematic",{panel:"glass-split",layout:"schematic"}]]),AR=new Set(["stacked","right","top-left","top-stack","top-right","top-center","top-split"]),TR=new Set(["helvetica","avenir","condensed","menlo","baskerville","site"]),wR=new Set(["stack","three-lines","outline","vertical","studio","split"]),$H=new Set(["signal","glass","directory"]),rZ=new Map([["editorial",{left:["Независимая инженерная","студия"],right:["Разработка / DevOps"]}],["portrait",{left:["Интерактивный ASCII-портрет"],right:["Двигайте курсор","Портрет следует за ним"]}],["corners",{corners:!0}],["details",{corners:!0,left:["Независимая инженерная студия"],footer:"Реквизиты"}]]);function SR($,J,Q){let Z=document.createElement("div");if(Z.className="cover-edge-preview",Z.dataset.edgeStyle=J,Q.corners)for(let W of["top-left","top-right","bottom-left","bottom-right"]){let K=document.createElement("i");K.className="cover-edge-corner",K.dataset.corner=W,K.setAttribute("aria-hidden","true"),Z.append(K)}for(let[W,K]of[["left",Q.left],["right",Q.right],["footer",Q.footer&&[Q.footer]]]){if(!K)continue;let X=document.createElement("p");X.className=`cover-edge-label cover-edge-label--${W}`;for(let H of K){let Y=document.createElement("span");Y.textContent=H,X.append(Y)}Z.append(X)}$.prepend(Z)}function JH($,J,Q){if(QH())return{...$,scale:0.66,offsetY:0.19};let Z=J.clientWidth/Math.max(1,J.clientHeight);return{...$,scale:Q.scale,offsetX:5.6*Z*Q.offset,offsetY:Q.id==="schematic"?0.035:$.offsetY}}function ZH({host:$,cover:J,links:Q,onChange:Z,directoryMarkup:W,params:K=new URL(location.href).searchParams}){let X=K.get("cover"),H=PR.get(X),Y=iZ.find((D)=>D.id===(H?.layout??X));if(!Y)return null;let G=$.closest(".experience").parentElement,E=G.querySelector(".masthead"),q=K.get("effect"),M=X==="glass-split-schematic"?q==="all"?[...$H]:$H.has(q)?[q]:[]:[],O=M.includes("signal"),F,N=[];if(H){if(document.body.dataset.coverVariant=Y.id,document.body.dataset.coverTopbar=H.panel,J.querySelector(".cover-brand-suffix").hidden=!1,Y.id==="schematic"){let D=K.get("brand");document.body.dataset.coverBrand=AR.has(D)?D:"inline";let C=K.get("font");if(TR.has(C))document.body.dataset.coverBrandFont=C;if(D==="top-left"&&C==="condensed"){E.classList.add("masthead--aligned-brand"),E.querySelector(".cover-menu").before(J.querySelector(".cover-credit"));let T=K.get("mark");if(q==="all"&&wR.has(T))document.body.dataset.coverMark=T;let P=K.get("edge");if(q==="all"&&rZ.has(P))SR(J,P,rZ.get(P));if(q==="all"&&T==="vertical"&&!rZ.has(P)){let f=E.querySelector(".brand");f.href=location.pathname+location.search;let h=K.get("logo")??"menu-sign",b=h==="menu-sign",l=eX(b?"link-classic":h,getComputedStyle(f).color,2,f);if(b&&l)f.classList.add("brand--in-menu");if(l)f.append(l)}}}if(H.panel==="glass-split"){let D=E.querySelector(".cover-menu"),C=document.createElement("div");C.className="cover-topbar-group";let T=E.querySelector(".brand--in-menu");if(T)C.append(T);if(C.append(...D.querySelectorAll('button:not([data-section="more"])')),D.prepend(C),M.includes("directory"))F=gX(D,W)}if(M.length)document.body.dataset.coverEffect=M.join(" ");if(M.includes("glass"))pX(G);if(Y===tZ)return{frame:(D)=>JH(D,$,tZ)}}else{let D=document.createElement("nav");D.className="cover-variant-toolbar",D.setAttribute("aria-label","Варианты обложки"),E.after(D),N=iZ.map((C)=>{let T=document.createElement("button");return T.type="button",T.textContent=C.title,T.addEventListener("click",()=>{if(Y===C)return;Y=C;let P=new URL(location.href);P.searchParams.set("cover",C.id),history.replaceState(history.state,"",P),B(),Z()}),D.append(T),T})}let R=document.createElementNS(z9,"svg");R.classList.add("cover-variant-guides"),R.setAttribute("aria-hidden","true");let V=aZ.map(()=>{let D=document.createElementNS(z9,"g"),C=document.createElementNS(z9,"path"),T=document.createElementNS(z9,"rect");T.setAttribute("width",6),T.setAttribute("height",6),D.append(C,T);let P;if(O)P=document.createElementNS(z9,"path"),P.setAttribute("pathLength","100"),P.classList.add("cover-guide-pulse"),D.append(P);return R.append(D),{group:D,line:C,marker:T,pulse:P}});J.prepend(R);let L=O?xX({host:$,links:Q,connectors:V,points:aZ}):null,k=document.createElement("p");k.className="cover-variant-caption",k.setAttribute("aria-hidden","true"),Q[0].parentElement.after(k);let A=null,I=null,S=0;function y(){S=Q.indexOf(A||I||Q[0]),Q.forEach((D,C)=>D.classList.toggle("is-cover-highlighted",C===S)),k.textContent=Q[S].querySelector("small").textContent}Q.forEach((D)=>{D.addEventListener("pointerenter",(C)=>{if(C.pointerType==="touch")return;A=D,y()}),D.addEventListener("pointerleave",()=>{if(A!==D)return;A=null,y()}),D.addEventListener("focus",()=>{I=D,y()}),D.addEventListener("blur",()=>{I=null,y()})});function B(){document.body.dataset.coverVariant=Y.id,N.forEach((D,C)=>D.setAttribute("aria-pressed",String(iZ[C]===Y)))}return B(),y(),{updateEffect:L?.update,clearEffect(D){L?.clear(D),F?.()},frame(D){return JH(D,$,Y)},getAttention(){if(Y.id!=="focus"||!(A||I))return null;return{x:-0.94,y:-0.34+S*0.29}},drawGuides(D){if(Y.id!=="schematic")return;let C=$.getBoundingClientRect();R.setAttribute("viewBox",`0 0 ${C.width} ${C.height}`);let T=QH(),P=T?7:12,f=T?18:30,h=D.projectPoints(aZ);V.forEach((b,l)=>{let{line:x,marker:s,pulse:t}=b,X0=h[l],G0=Q[l].querySelector(".cover-link-copy").getBoundingClientRect(),B0=G0.left+G0.width/2<C.left+C.width/2,R0=(B0?G0.right+P:G0.left-P)-C.left,o=G0.top+G0.height/2-C.top,Z0=l===1&&!B0?C.width-X0.x:X0.x,J0=B0?Math.max(R0+f,Z0):Math.min(R0-f,Z0),O0=J0+(R0-J0)*0.35,D0=J0+(R0-J0)*0.65,z0=`M${J0} ${X0.y} H${O0} L${D0} ${o} H${R0}`;x.setAttribute("d",z0),t?.setAttribute("d",z0),s.setAttribute("x",J0-3),s.setAttribute("y",X0.y-3),b.point={x:J0,y:X0.y}})}}}var eZ="https://t.me/wr0ngn4m3",$5=`1111111011001110001111111
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
`);var M7=($5.length+8)*8;var WH=$5.length+8,XH=[[-2,-2],[2,-2],[-2,2],[2,2]],qJ=[];function jR($,J){let Q=Math.abs($-M7/2)-M7/2+19,Z=Math.abs(J-M7/2)-M7/2+19,W=Math.hypot(Math.max(0,Q),Math.max(0,Z))+Math.min(0,Math.max(Q,Z))-19,K=Math.min(1,Math.max(0,-W/11));return K*K*(3-2*K)}for(let $=0;$<WH;$++)for(let J=0;J<WH;J++){if($5[$-4]?.[J-4]==="1")continue;let Q=(J+0.5)*8,Z=($+0.5)*8;XH.forEach(([W,K],X)=>{let H="#xO+*"[(J+$*3+X*2)%5],Y=Q+W,U=Z+K,G=jR(Y,U);if(G>0)qJ.push([Y,U,H,G])})}function KH($,J,Q){$.fillStyle=Q,$.font=`700 ${J}px monospace`,$.textAlign="center",$.textBaseline="middle"}function HH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=Math.min(Math.max(devicePixelRatio||1,1),2);if($.width=$.height=Math.round(M7*W),Z.scale($.width/M7,$.height/M7),matchMedia("(max-width: 640px)").matches){let E=document.createElement("canvas"),q=32,M="#@";E.width=64,E.height=32;let O=E.getContext("2d");for(let[N,R]of[..."#@"].entries()){O.font="900 24px monospace",O.fillStyle=O.strokeStyle="#edeee5",O.lineWidth=3;let V=O.measureText(R),L=V.actualBoundingBoxLeft+V.actualBoundingBoxRight,k=V.actualBoundingBoxAscent+V.actualBoundingBoxDescent;O.save(),O.beginPath(),O.rect(N*32,0,32,32),O.clip(),O.translate(N*32,0),O.scale(32/L,32/k),O.strokeText(R,V.actualBoundingBoxLeft,V.actualBoundingBoxAscent),O.fillText(R,V.actualBoundingBoxLeft,V.actualBoundingBoxAscent),O.restore()}let F=4;for(let[N,[R,V,,L]]of qJ.entries()){let k=(N+Math.floor(N/XH.length))%2;Z.globalAlpha=L,Z.drawImage(E,k*32,0,32,32,R-F/2,V-F/2,F,F)}}else{KH(Z,5.25,"#edeee5");for(let[E,q,M,O]of qJ)Z.globalAlpha=O,Z.fillText(M,E,q,4)}function K(){$.parentElement?.classList.add("contact-qr--settled")}if(Q){K();return}let X=document.createElement("canvas");X.className="contact-qr-flight",X.setAttribute("aria-hidden","true");let H=X.getContext("2d");if(!H){K();return}document.body.append(X),$.style.opacity="0";let Y=qJ.map(([E,q,M,O],F)=>{let N=Math.random()*1.16-0.08,R=0.025+Math.random()*0.16,V=[[N,-R],[1+R,N],[N,1+R],[-R,N]],[L,k]=V[F%V.length];return[E,q,L,k,Math.random()*0.26,M,O]}),U=performance.now();function G(E){let q=Math.min(1,(E-U)/780);if(J.hidden||!$.isConnected||q===1){if(X.remove(),$.style.opacity="",q===1&&$.isConnected&&!J.hidden)K(),$.animate([{opacity:0},{opacity:1}],{duration:160,easing:"ease-out"});return}let M=innerWidth,O=innerHeight;if(X.width!==M||X.height!==O)X.width=M,X.height=O;H.clearRect(0,0,M,O);let F=$.getBoundingClientRect(),N=F.width/M7;KH(H,5.25*N,"#edeee5");for(let[R,V,L,k,A,I,S]of Y){let y=Math.max(0,(q-A)/(1-A)),B=(1-y)**3,D=F.left+R*N,C=F.top+V*N,T=D+(L*M-D)*B,P=C+(k*O-C)*B;H.globalAlpha=Math.min(1,y*6)*S,H.fillText(I,T,P,4*N)}requestAnimationFrame(G)}G(U)}var fR=`
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
`.trimEnd().slice(1),vR=["Репозиторий","Сборка","Запуск"],yR=[["00:01","Репозиторий получен"],["00:02","Зависимости установлены"],["00:03","Приложение запущено"]];function YH($=!1){return`<figure class="paas-launch" data-paas-launch data-launch-variant="${$?"live":"still"}" data-launch-state="ready">
    <figcaption class="paas-launch__caption">
      <span>Демо запуска</span>
      ${$?'<button class="paas-launch__replay" type="button">Повторить запуск</button>':""}
    </figcaption>
    <div class="paas-launch__graphic">
      <pre class="paas-launch__art" aria-hidden="true">${fR.replaceAll(">","&gt;")}</pre>
      ${$?'<canvas class="paas-launch__canvas" aria-hidden="true" hidden></canvas>':""}
      <ol class="paas-launch__route">
        ${vR.map((J)=>`<li data-launch-step-state="done">${J}</li>`).join("")}
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
          ${yR.map(([J,Q])=>`<li data-launch-log-state="shown"><code><span aria-hidden="true">${J}</span> ${Q}</code></li>`).join("")}
        </ul>
      </div>
    </div>
  </figure>`}function UH($,J){if(!$||J)return;let Q=$.querySelectorAll("[data-launch-step-state]"),Z=$.querySelectorAll("[data-launch-log-state]"),W=$.dataset.launchVariant==="live"?600:380,K;function X(H){if(!$.isConnected||$.closest("[hidden]"))return;if($.dataset.launchState=H===Q.length?"ready":"running",Q.forEach((Y,U)=>{Y.dataset.launchStepState=U<H?"done":U===H?"active":"queued"}),Z.forEach((Y,U)=>{Y.dataset.launchLogState=U<H?"shown":"pending"}),H<Q.length)K=setTimeout(()=>X(H+1),W)}return X(0),()=>clearTimeout(K)}var GH=[[-0.34,-0.42,0.16],[0.25,0.14,-0.14],[0.49,0.78,-0.09]],d1={x:1.55,y:0.235,z:0.93},Q5={side:[":","#edeee56b"],front:[":","#edeee59e"],slot:[".","#edeee56b"],vent:["x","#edeee59e"],top:["x","#edeee5cc"],topGrain:["+","#edeee5cc"],edge:["+","#edeee5"],indicator:["*","#edeee5"]},bR={side:[":","#edeee598"],front:[":","#edeee5c7"],slot:[".","#edeee598"],vent:["x","#edeee5c7"],top:["x","#edeee5eb"],topGrain:["+","#edeee5eb"],edge:Q5.edge,indicator:Q5.indicator};function J5($,J,Q){return $+(J-$)*Q}function hR($,J,Q,Z,W){let X=Math.abs(Q)>d1.x-0.05,H=Math.abs(Z)>d1.y-0.05,Y=Math.abs(W)>d1.z-0.05;if(J===0&&(H||Y)||J===1&&(X||Y)||J===2&&(X||H))return $.edge;if(J===2){if(Math.abs(Z)<0.095&&Q>-0.99&&Q<0.52)return $.slot;if(Math.abs(Z)<0.13&&(Math.abs(Q-0.86)<0.1||Math.abs(Q-1.14)<0.09))return $.indicator;return $.front}if(J===0)return Math.abs(Z)<0.1&&Math.abs(W)<0.65&&Math.cos(W*44)>-0.45?$.vent:$.side;if(Math.abs(Q)<1.05&&Math.abs(W)<0.61&&Math.cos(W*41)>-0.3)return $.vent;return(Math.floor((Q+2)*12)*7+Math.floor((W+1)*16)*13)%11<2?$.topGrain:$.top}function F7($,J,Q){let Z=$?.getContext("2d");if(!Z)return;let W=matchMedia("(pointer: coarse)").matches,K=W?bR:Q5,X=$.closest("[data-paas-launch]"),H=[...X?.querySelectorAll("[data-launch-step-state]")??[]],Y=GH.map((y)=>[...y]),U={x:0,y:0},G=new AbortController,E={signal:G.signal},q=0,M=0,O=0,F=-1/0,N=!0,R=0.62,V=0.38;function L(){if(!O&&N&&!document.hidden)O=requestAnimationFrame(A)}function k(){if(q=$.clientWidth,M=$.clientHeight,!q||!M)return;let y=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(q*y),$.height=Math.round(M*y),Z.setTransform(y,0,0,y,0,0),L()}function A(y){if(O=0,!$.isConnected||$.closest("[hidden]")||!q||!M)return;if(!J&&y-F<32){L();return}let B=J?1:1-Math.exp(-Math.min(y-F,85)/135);F=y;let D=J||X?.dataset.launchState==="ready",C=Q?.()??(D?3:H.filter((D0)=>D0.dataset.launchStepState==="done").length);for(let D0=0;D0<Y.length;D0++)for(let z0=0;z0<3;z0++)Y[D0][z0]=J5(Y[D0][z0],D0<C?0:GH[D0][z0],B);if(!J)R=J5(R,0.62+Math.sin(y/1900)*0.18+U.x*0.24,B*0.55),V=J5(V,0.38+Math.sin(y/2300)*0.04-U.y*0.09,B*0.55);let T=Math.sin(R),P=Math.cos(R),f=Math.sin(V),h=Math.cos(V),b=T*h,l=f,x=P*h,s=P*d1.x+T*d1.z,t=f*(T*d1.x+P*d1.z)+h*d1.y,X0=1/0,G0=-1/0,B0=1/0,R0=-1/0;Y.forEach(([D0,z0,e0],j)=>{let l0=P*D0-T*e0,j0=h*(z0+(j-1)*0.58)-f*(T*D0+P*e0);X0=Math.min(X0,l0-s),G0=Math.max(G0,l0+s),B0=Math.min(B0,j0-t),R0=Math.max(R0,j0+t)});let o=(X0+G0)/2,Z0=(B0+R0)/2,J0=Math.min(q/Math.max(4.2,G0-X0+0.3),M/Math.max(3.32,R0-B0+0.3)),O0=Math.max(4.5,q/108,M/78);Z.clearRect(0,0,q,M),Z.font=`${W?700:600} ${Math.max(5,O0*(W?1.2:1.11))}px ui-monospace, monospace`,Z.textAlign="center",Z.textBaseline="middle";for(let D0=O0/2;D0<M;D0+=O0){let z0=(M/2-D0)/J0+Z0,e0=l*7+h*z0;for(let j=O0/2;j<q;j+=O0){let l0=(j-q/2)/J0+o,j0=b*7+P*l0-T*f*z0,T0=x*7-T*l0-P*f*z0,L0=1/0,a0;for(let J1=0;J1<Y.length;J1++){let[q1,d0,w]=Y[J1],_=j0-q1,m=e0-d0-(J1-1)*0.58,a=T0-w,e=(_-d1.x)/b,i=(m-d1.y)/l,_0=(a-d1.z)/x,W0=Math.max(e,i,_0);if(W0>=L0||W0>(_+d1.x)/b||W0>(m+d1.y)/l||W0>(a+d1.z)/x)continue;L0=W0,a0=hR(K,W0===e?0:W0===i?1:2,_-b*W0,m-l*W0,a-x*W0)}if(!a0)continue;let[C0,M0]=a0;Z.fillStyle=M0,Z.fillText(C0,j,D0)}}if(!J)L()}if(!J)$.addEventListener("pointermove",(y)=>{let B=$.getBoundingClientRect();U.x=(y.clientX-B.left)/B.width*2-1,U.y=(y.clientY-B.top)/B.height*2-1},E),$.addEventListener("pointerleave",()=>{U.x=U.y=0},E);document.addEventListener("visibilitychange",L,E);let I=new ResizeObserver(k);I.observe($);let S=new IntersectionObserver(([y])=>{N=y.isIntersecting,L()});return S.observe($),k(),()=>{cancelAnimationFrame(O),I.disconnect(),S.disconnect(),G.abort()}}var EH=["·",":","+","x","o","*","#"];function xR($,J,Q,Z){$.canvas.width=Q,$.canvas.height=Z,$.font="800 100px Arial, sans-serif";let W=Q*0.94*100/$.measureText(J).width,K=Math.min(W,Z*0.97,178);$.font=`800 ${K}px Arial, sans-serif`,$.textAlign="center",$.textBaseline="middle",$.fillText(J,Q/2,Z*0.515);let{data:X}=$.getImageData(0,0,Q,Z),H=Math.max(4,Math.round(K/20)),Y=[];for(let U=H;U<Z;U+=H)for(let G=H;G<Q;G+=H)if(X[(U*Q+G)*4+3]>120)Y.push({x:G,y:U});return{points:Y,step:H}}function qH($,J,Q,Z){let W=$.querySelector(".paas-tech-visual"),K=$.querySelector("canvas"),X=K.getContext("2d"),H=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!X||!H)return{select(){},stop(){}};let Y=matchMedia("(pointer: coarse)").matches,U=Q,G=0,E=0,q=0,M=0,O,F,N,R=0,V=0,L=[],k=[],A=[];function I(C){let T=1-(1-C)**3,P=Math.sin(C*Math.PI);X.clearRect(0,0,G,E),X.textAlign="center",X.textBaseline="middle",X.font=`${Y?700:600} ${N*(Y?1.32:1.12)}px ui-monospace, monospace`,X.fillStyle="#edeee5";let f=G/2-N,h=Math.min(V,E-V,M*1.32)-N;A=Array.from({length:Math.max(L.length,k.length)},(b,l)=>{let x=L[l]??{x:R,y:V,alpha:0},s=k[l]??{x:R,y:V,alpha:0},t=Math.sin(l*91.73),X0=x.x+(s.x-x.x)*T+t*q*0.19*P,G0=x.y+(s.y-x.y)*T+Math.sin(l*673)*M*0.43*P,B0=x.alpha+(s.alpha-x.alpha)*T,R0=Math.hypot((X0-R)/Math.max(1,f),(G0-V)/Math.max(1,h)),o=Math.max(0,Math.min(1,(1-R0)/(0.18+Math.abs(t)*0.11))),Z0=1-Math.min(1,P*4)*(1-o*o*(3-2*o));if(X.globalAlpha=B0*(Y?0.94+Math.abs(t)*0.06:0.76+Math.abs(t)*0.24)*Z0,X.globalAlpha>0.01)X.fillText(EH[(l+Math.floor(P*5))%EH.length],X0,G0);return{x:X0,y:G0,alpha:B0}}),X.globalAlpha=1}function S(C){let T=Math.min(1,(C-F)/590);if(I(T),T<1)O=requestAnimationFrame(S);else A=k}function y(C,T=!0){if(U=C,!q||!M)return;cancelAnimationFrame(O);let P=xR(H,Z[U],q,M);if(N=P.step,L=A,k=P.points.map(({x:f,y:h})=>({x:f+R-q/2,y:h+V-M/2,alpha:1})),J||!T){I(1),A=k;return}F=performance.now(),O=requestAnimationFrame(S)}function B(){G=K.clientWidth,E=K.clientHeight,q=Math.min(600,W.clientWidth),M=W.clientHeight;let C=W.getBoundingClientRect(),T=K.getBoundingClientRect();R=C.left-T.left+C.width/2,V=C.top-T.top+C.height/2;let P=Math.min(devicePixelRatio||1,2);K.width=Math.round(G*P),K.height=Math.round(E*P),X.setTransform(P,0,0,P,0,0),L=[],A=[],y(U,!1)}let D=new ResizeObserver(B);return D.observe(W),D.observe(K),B(),{select:y,stop(){D.disconnect(),cancelAnimationFrame(O)}}}var NH=[{title:"Репозиторий",action:"Проект из GitHub или GitLab",detail:"Разработчик подключает репозиторий и запускает проект через веб-интерфейс. Платформа сама получает исходный код.",input:"GitHub / GitLab",output:"Исходный код"},{title:"Сборка",action:"Подготовка среды запуска",detail:"Платформа определяет стек проекта и устанавливает нужные инструменты и библиотеки. Это избавляет разработчика от ручной настройки окружения.",input:"Исходный код",output:"Готовая сборка"},{title:"Запуск",action:"Работающий сервис в облаке",detail:"Платформа разворачивает приложение. Разработчик получает адрес работающего сервиса и логи, по которым можно проверить запуск.",input:"Готовая сборка",output:"URL и логи запуска",previewOutput:"Пример URL · https://app.wwn.example"}],RH=[{name:"Интерфейс и API",tools:"Next.js · FastAPI",symbol:"API",detail:"Next.js показывает интерфейс платформы. FastAPI принимает запрос на запуск."},{name:"Фоновые задачи",tools:"Celery",symbol:"Celery",detail:"Выполняет задачи запуска в фоне."},{name:"Среда выполнения",tools:"Kubernetes",symbol:"K8s",detail:"Запускает приложения в облаке."},{name:"Подготовка окружения",tools:"Terraform · Ansible",symbol:"IaC",detail:"Terraform описывает инфраструктуру для кластера, Ansible настраивает окружение."},{name:"Синхронизация с Git",tools:"Argo CD",symbol:"GitOps",detail:"Применяет конфигурацию из Git в кластере Kubernetes."}],gR=[{label:"Интерфейс и задачи",nodes:["Next.js","FastAPI","Celery"],note:"Интерфейс отправляет запрос в API. Фоновые задачи передаются Celery."},{label:"Развертывание · GitOps",nodes:["Git","Argo CD","Kubernetes"],note:"Argo CD применяет конфигурацию из Git в кластере."},{label:"Подготовка окружений",nodes:["Terraform · Ansible","Kubernetes"],note:"Инструменты описывают и настраивают инфраструктуру кластера."}];function MH($){if($==="trace")return`<div class="paas-chapter">
      <h2>Из репозитория <br>в облако</h2>
      <ol class="paas-trace">
        ${NH.map(({action:J,detail:Q,input:Z,output:W})=>`<li>
          <h3>${J}</h3><p>${Q}</p>
          <samp>${Z} <span aria-label="переходит в">→</span> ${W}</samp>
        </li>`).join("")}
      </ol>
    </div>`;return g7(NH,"Как работает / PaaS","Этапы запуска")}function g7($,J,Q,Z='<canvas class="paas-launch__canvas" aria-hidden="true"></canvas>'){return`<div class="paas-chapter paas-sequence" data-paas-sequence>
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
  </div>`}function FH($){if($==="flows")return`<div class="paas-chapter">
      <h2>Архитектура платформы</h2>
      <div class="paas-architecture">
        ${gR.map(({label:J,nodes:Q,note:Z})=>`<section>
          <h3>${J}</h3>
          <div class="paas-architecture__flow">${Q.map((W)=>`<b>${W}</b>`).join('<span aria-label="передает в">→</span>')}</div>
          <p>${Z}</p>
        </section>`).join("")}
      </div>
    </div>`;return p7([{title:"Запуск приложения",tools:RH.slice(0,3)},{title:"Управление окружением",tools:RH.slice(3)}])}function p7($,J="paas"){let Q=$.flatMap((W)=>W.tools),Z=(W)=>{let K=Q.indexOf(W);return`<button type="button" data-paas-tech="${K}" data-particle-word="${W.symbol}" aria-pressed="${K===0}">${W.tools}</button>`};return`<div class="paas-chapter paas-layers" data-paas-tech-map>
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
  </div>`}function OH($,J){let Q=$.querySelector("[data-paas-tech-map]");if(!Q)return;let Z=[...Q.querySelectorAll("[data-paas-tech]")],W=Z.map((G)=>G.dataset.particleWord),K=[...Q.querySelectorAll("[data-paas-tech-detail]")],X=0,H;function Y(){H=qH(Q,J,X,W)}function U(G){if(G.type==="pointerover"&&G.pointerType==="touch")return;let E=G.target.closest("[data-paas-tech]");if(!E)return;let q=Number(E.dataset.paasTech);if(X===q)return;X=q,H?.select(q),Z.forEach((M,O)=>{M.setAttribute("aria-pressed",String(M===E)),K[O].hidden=M!==E})}return Q.addEventListener("pointerover",U),Q.addEventListener("focusin",U),Q.addEventListener("click",U),{start:Y,stop(){H?.stop(),H=void 0}}}function LH($,J){return l7($,J,(Q,Z,W)=>F7(Q,Z,()=>[0,2,3][W()]))}function l7($,J,Q,{autoAdvance:Z=!0}={}){let W=$.querySelector("[data-paas-sequence]");if(!W)return;let K=[...W.querySelectorAll("[data-paas-stage]")],X=[...W.querySelectorAll("[data-paas-stage-content]")],H=[...W.querySelectorAll("[data-paas-stage-output]")],Y=W.querySelector("canvas"),U=0,G,E;function q(){G=Q?.(Y,J,()=>U)}function M(N){if(N===U)return;if(U=N,K.forEach((R,V)=>{R.setAttribute("aria-pressed",String(V===U)),X[V].inert=V!==U,H[V].hidden=V!==U}),J&&G)G(),q()}function O(){if(M(U+1),U<X.length-1)E=setTimeout(O,4400)}function F(N){let R=N.target.closest("[data-paas-stage]");if(!R)return;clearTimeout(E),M(Number(R.dataset.paasStage))}return W.addEventListener("click",F),W.addEventListener("pointerover",(N)=>{if(N.pointerType==="mouse")F(N)}),{start(){if(M(0),q(),!J&&Z)E=setTimeout(O,4400)},stop(){clearTimeout(E),G?.(),G=void 0}}}var DH=["·",":","+","x","*","#"];function pR(){let $=[];for(let J=0;J<=40;J++){let Q=J/40,Z=(Q-0.5)*2.4,W=0.25+0.66*Math.sin(Math.PI*Q)**1.4;for(let K=0;K<19;K++){let X=K*(Math.PI*2/19)+Q*0.9;$.push({x:Z,y:Math.cos(X)*W,z:Math.sin(X)*W,trace:K%6===0})}}return $}var _H=pR();function u7($,J,Q){let Z=$.getContext("2d");if(!Z)return()=>{};let W=matchMedia("(pointer: coarse)").matches,K=performance.now(),X=0,H=-1/0,Y=0,U=0,G=0;function E(F){if(X=0,document.hidden||!U||!G)return;if(!J&&F-H<32){X=requestAnimationFrame(E);return}H=F;let N=F-K,R=Q?.();Y+=((R===2?1:0)-Y)*(J?1:0.16);let L=J?0.5:N%2550/2550,k=J?0.18:0.14+0.2*Math.sin(N/1760),A=Math.sin(k),I=Math.cos(k),S=Math.min(U/6,G/2.45),y={x:U/2,y:G*0.525},B=J?0:Math.sin(Math.PI*L),D=R===0?L*3.4-2.8:R===1?L*4.1-1.35:L*5.5-2.75;Z.clearRect(0,0,U,G),Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle",Z.font=`${W?700:600} ${Math.max(5,S*0.13)}px ui-monospace, monospace`;let C=U<400?2:1;for(let T=0;T<_H.length;T+=C){let{x:P,y:f,z:h,trace:b}=_H[T],l=0.48+(J?0:0.22*Math.sin(N/1870))+P*0.48,x=f*Math.cos(l)-h*Math.sin(l),s=f*Math.sin(l)+h*Math.cos(l),t=P*I+s*A,X0=-P*A+s*I,G0=Math.max(0,1-Math.abs(P-D)*1.9)*B,B0=1/(1-X0*0.105),R0=(X0+1.2)/2.5,o=DH[Math.min(5,Math.max(0,Math.floor((R0+G0*0.55)*4.1)))];Z.globalAlpha=Math.min(1,(W?0.25:0.15)+R0*0.55+G0*0.38+(b?0.13:0)),Z.fillText(o,y.x+t*S*B0,y.y+(x+X0*0.21)*S*B0)}for(let T of[-1,1])for(let P=0;P<3;P++){let f=P-1,h=11-P;for(let b=0;b<h;b++){let l=1.36+b*0.114,x=l*T,s=T===1?Y:0,t=f*(0.18+(l-1.36)*(0.19+s*0.65)),X0=Math.max(0,1-Math.abs(x-D)*2)*B,G0=R===0&&T===-1||R===1&&T===1;Z.globalAlpha=(0.22+X0*0.58+(G0?0.18:0))*(f?1:1-s*0.91),Z.fillText(DH[(P*3+b)%4],y.x+x*S,y.y+t*S)}}if(Z.globalAlpha=1,!J)X=requestAnimationFrame(E)}function q(){if(U=$.clientWidth,G=$.clientHeight,!U||!G)return;let F=Math.min(devicePixelRatio||1,2);if($.width=Math.round(U*F),$.height=Math.round(G*F),Z.setTransform(F,0,0,F,0,0),!X)X=requestAnimationFrame(E)}let M=new ResizeObserver(q);M.observe($);function O(){cancelAnimationFrame(X),X=document.hidden?0:requestAnimationFrame(E)}return document.addEventListener("visibilitychange",O),q(),()=>{cancelAnimationFrame(X),M.disconnect(),document.removeEventListener("visibilitychange",O)}}var k9=[["Доступ","Шлюз проверяет права приложения и лимиты."],["Обработка","Модель формирует ответ на запрос."],["Диагностика","Ответ в приложении. Ошибки и задержки видны в трассировке."]],lR=[{title:"Запрос",action:"Единый доступ к моделям",detail:"Внутренние приложения отправляют запросы через общий шлюз. Он проверяет доступ, применяет лимиты и направляет запрос к нужной модели.",output:"Запрос направлен к модели"},{title:"Ответ",action:"Ответ и диагностика",detail:"Модель возвращает ответ приложению. Команда видит задержки и ошибки в мониторинге, а отдельный запрос может разобрать по трассировке.",output:"Ответ · Метрики · Трассировка"},{title:"Обновление",action:"Проверка до выпуска",detail:"Обновления проверяются отдельно от рабочих запросов. На одинаковых задачах команда сравнивает действующую и новую версии по качеству ответов, задержкам и расходу ресурсов.",output:"Сравнение версий на одинаковых запросах"}],uR=[{title:"Обработка запросов",tools:[{tools:"Kong Gateway",symbol:"GATE",name:"Доступ и лимиты",detail:"Шлюз проверяет правила доступа и ограничивает нагрузку перед обращением к модели."},{tools:"vLLM · Kubernetes",symbol:"LLM",name:"Выполнение запросов",detail:"Модель обслуживает запросы через vLLM в Kubernetes компании."}]},{title:"Контроль и выпуск",tools:[{tools:"Prometheus · Grafana",symbol:"METRICS",name:"Состояние сервиса",detail:"Метрики показывают задержки, ошибки и нагрузку."},{tools:"Langfuse",symbol:"EVAL",name:"Трассировки и качество",detail:"Команда разбирает ответы по трассировкам и сравнивает версии на согласованных запросах."},{tools:"Git · CI/CD",symbol:"CI/CD",name:"Версии и релизы",detail:"Конфигурации и промпты версионируются. Проверка качества предшествует выпуску изменений."}]}];function VH(){return[{id:"overview",label:"Обзор",layout:"paas-hero llmops-hero",markup:`
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
        <ol class="llmops-demo__steps">${k9.map(([$])=>`<li>${$}</li>`).join("")}</ol>
        <p class="llmops-demo__status" aria-live="polite">${k9[2][1]}</p>
      </figure>`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:g7(lR,"Как работает / LLMOps","Этапы работы LLMOps")},{id:"stack",label:"Технологии",layout:"paas-details",markup:p7(uR,"llmops")}]}function BH($,J){let Q=$.querySelector("[data-llmops-demo]"),Z=Q.querySelector("[data-llmops-replay]"),W=Q.querySelector("canvas"),K=[...Q.querySelectorAll("li")],X=Q.querySelector('[role="status"], [aria-live]'),H,Y;function U(){clearTimeout(H),Y?.(),Y=void 0}function G(q){K.forEach((M,O)=>{M.dataset.state=O===q?"current":O<q?"done":"pending"}),X.textContent=k9[q][1]}function E(){if(U(),Y=u7(W,J),J){G(k9.length-1);return}let q=0;function M(){if(G(q++),q<k9.length)H=setTimeout(M,850)}M()}return Z.hidden=J,Z.addEventListener("click",E),{start:E,stop:U}}function zH($,J){return l7($,J,u7)}function m7($,J=0.074){return $.slice(1).flatMap(([Q,Z],W)=>{let[K,X]=$[W],H=Q-K,Y=Z-X,U=Math.ceil(Math.hypot(H,Y)/J);return Array.from({length:U},(G,E)=>[K+H*E/U,X+Y*E/U])})}function PH($){return Array.from({length:22},(J,Q)=>{let Z=$+Q*0.125;return[0.51*Math.cos(Z),0.51*Math.sin(Z)]})}var kH=PH(-3),CH=PH(0.14),C9=[[m7([[-0.31,-0.37],[-0.62,0],[-0.31,0.37]]),m7([[0.17,-0.46],[-0.17,0.46]]),m7([[0.31,-0.37],[0.62,0],[0.31,0.37]])],[kH,CH,m7([[0.23,-0.13],kH.at(-1),[0.57,-0.47]]),m7([[-0.23,0.13],CH.at(-1),[-0.57,0.47]])],[...[[-0.48,0.13],[-0.12,-0.18],[0.24,-0.44]].map(([$,J])=>m7([[$,0.42],[$,J],[$+0.22,J],[$+0.22,0.42]])),m7([[-0.62,0.42],[0.61,0.42]])]],IH=["+","x",":","+"];function d7($,J,Q){let Z=$.getContext("2d");if(!Z)return()=>{};let W=matchMedia("(pointer: coarse)").matches,K=performance.now(),X=0,H,Y,U=-1/0;function G(){if(!X&&!document.hidden)X=requestAnimationFrame(E)}function E(F){if(X=0,document.hidden||!H||!Y)return;if(!J&&F-U<32){G();return}U=F;let N=J?0:F-K,R=Math.min(H/5.65,Y/1.95),V=-0.3+Math.sin(N/1450)*0.065,L=Math.sin(V),k=Math.cos(V),A=N%3100/3100*3.05-0.35,I=Q?.(),S=Y*0.79;Z.clearRect(0,0,H,Y),Z.textAlign="center",Z.textBaseline="middle",Z.font=`${W?700:600} ${Math.max(5,Math.min(11,R*0.126))}px ui-monospace, monospace`,Z.fillStyle="#edeee5";for(let y=0;y<C9.length-1;y++){let B=H*(y+0.5)/C9.length,D=B+H/C9.length,C=Math.max(5,R*0.115),T=Math.round((D-B)/C);for(let P=1;P<T;P++){let f=P/T,h=J?0:Math.max(0,1-Math.abs(y+f-A)*7);Z.globalAlpha=0.46+h*0.53,Z.fillText(h>0.35?"+":"·",B+(D-B)*f,S)}}if(C9.forEach((y,B)=>{let D=H*(B+0.5)/C9.length,C=Y*0.4,T=I===void 0||I===B,P=J?0:Math.max(0,1-Math.abs(B-A)*3),f=T?0.83:0.43;for(let h of[-0.25,-0.12,0]){let b=h===0;y.forEach((l)=>{l.forEach(([x,s],t)=>{let X0=x*k-h*L,G0=x*L+h*k;Z.globalAlpha=b?Math.min(1,f+P*0.16):f*(h===-0.25?0.3:0.44)*(W?1.28:1),Z.fillText(b?IH[t%IH.length]:"·",D+X0*R,C+(s+G0*0.43)*R)})})}Z.globalAlpha=Math.min(1,f*(W?1.28:1)),Z.fillText("o",D,S)}),Z.globalAlpha=1,!J)G()}function q(){if(H=$.clientWidth,Y=$.clientHeight,!H||!Y)return;let F=Math.min(2,devicePixelRatio||1);$.width=Math.round(H*F),$.height=Math.round(Y*F),Z.setTransform(F,0,0,F,0,0),G()}function M(){if(document.hidden)cancelAnimationFrame(X),X=0;else G()}let O=new ResizeObserver(q);return O.observe($),document.addEventListener("visibilitychange",M),q(),()=>{cancelAnimationFrame(X),O.disconnect(),document.removeEventListener("visibilitychange",M)}}var mR=[{title:"Конфигурация",action:"Настройки хранятся в коде",detail:"Конфигурацию инфраструктуры перенесли в код. Инженер вносит изменения и запускает готовый сценарий в GitLab.",output:"Изменения переданы в GitLab CI"},{title:"Обновление",action:"GitLab обновляет настройки",detail:"Пайплайн выполняет обновление по одному сценарию. Время на эту работу сократилось примерно втрое.",output:"Настройки обновлены"},{title:"Восстановление",action:"Sentry возобновляет сбор ошибок",detail:"Блокировка диска во время резервного копирования останавливала обработчики Sentry. Теперь они восстанавливаются автоматически, а мониторинг уведомляет команду о сбоях.",output:"Сбор ошибок возобновлен"}],dR=[{title:"Инфраструктура как код",tools:[{tools:"Ansible",symbol:"IaC",name:"Настройки в коде",detail:"Настройки инфраструктуры описаны в сценариях Ansible."},{tools:"GitLab CI",symbol:"CI/CD",name:"Обновление инфраструктуры",detail:"Пайплайн GitLab CI запускает сценарий обновления из репозитория."}]},{title:"Эксплуатация",tools:[{tools:"Sentry · Snuba",symbol:"Errors",name:"Обработка ошибок",detail:"Для обработчиков Sentry настроено автоматическое восстановление после сбоев при резервном копировании."},{tools:"Grafana · ELK",symbol:"Logs",name:"Мониторинг и логи",detail:"Мониторинг и уведомления показывают сбои, а логи помогают разобраться в причине."}]}];function AH(){return[{id:"overview",label:"Обзор",layout:"paas-hero case-hero--compact",markup:`
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
      </figure>`},{id:"workflow",label:"Как работает",layout:"paas-details operations-flow",markup:g7(mR,"Как работает / IaC и мониторинг","Этапы изменений и восстановления")},{id:"stack",label:"Технологии",layout:"paas-details",markup:p7(dR,"operations")}]}function TH($,J){let Q=$.querySelector("[data-operations-demo] canvas"),Z;return{start(){Z=d7(Q,J)},stop(){Z?.(),Z=void 0}}}function wH($,J){return l7($,J,d7)}var f6=2*Math.PI/7;var NJ=Math.cos(f6/2);var cR=Array.from({length:7},($,J)=>{let Q=(J+0.5)*f6+Math.PI/2;return[Math.cos(Q),Math.sin(Q)]}),nR=[{x:0,y:0,z:1,limit:0.24,face:"front"},{x:0,y:0,z:-1,limit:0.36,face:"back"},...cR.flatMap(([$,J])=>[{x:$,y:J,z:0,limit:NJ,face:"side"},{x:$,y:J,z:1,limit:NJ+0.24-0.075,face:"bevel"},{x:$,y:J,z:-1,limit:NJ- -0.36-0.075,face:"bevel"}])];function SH($,J,Q=0){let Z=Math.hypot($,J);if(Z>0.74-Q)return!1;if(Z<0.15-Q||Math.abs(Z-0.49)<0.071-Q)return!0;let W=(Math.atan2(J,$)+Math.PI*1.5)%f6;return Z*Math.sin(Math.min(W,f6-W))<0.059-Q}function sR($,J,Q,Z){let W=1/0,K=-1/0,X;for(let H of $){let Y=H.limit-H.u*J-H.v*Q;if(Math.abs(H.w)<0.0001){if(Y<0)return!1;continue}let U=Y/H.w;if(H.w>0){if(U<W)W=U,X=H}else K=Math.max(K,U);if(K>W)return!1}return Z.depth=W,Z.surface=X,!0}function oR($,J,Q,Z,W,K){let{cosYaw:X,sinYaw:H,cosPitch:Y,sinPitch:U}=K,G=[H*Y,U,X*Y],E=nR.map((F)=>{let{x:N,y:R,z:V}=F,L=N*H+V*X;return{...F,u:N*X-V*H,v:R*Y-L*U,w:N*G[0]+R*G[1]+V*G[2],light:Math.max(0,(N*-0.2+R*0.7+V*0.48)/Math.hypot(N,R,V))}}),q=Math.max(3,W/59),M=Math.ceil(Z*1.14/q),O={};$.font=`700 ${q*1.21}px ui-monospace, monospace`,$.textAlign="center",$.textBaseline="middle";for(let F=-M;F<=M;F++){let N=-F*q/Z,R=N*Y;for(let V=-M;V<=M;V++){let L=V*q/Z;if(!sR(E,L,N,O))continue;let k=X*L-H*U*N,I=(0.286-(-H*L-X*U*N))/G[2],S=k+G[0]*I,y=R+G[1]*I,B=SH(S,y),D=O.surface.face==="front",C=((F*13+V*7)%5+5)%5,T,P;if(B)T=C<2?"#":"+",P=SH(S,y,0.018)?1:0.85;else if(D)T=C<2?":":"·",P=0.32+C%2*0.08;else{let f=O.surface.light;T=O.surface.face==="bevel"?"+":C<2?"x":":",P=Math.min(1,(O.surface.face==="bevel"?0.53:0.63)+f*0.46)}$.globalAlpha=P,$.fillText(T,J+V*q,Q+F*q)}}$.globalAlpha=1}function iR($,J,Q,Z,W,K,X,H,Y){let{cosYaw:U,sinYaw:G,cosPitch:E,sinPitch:q}=K;J.forEach(({left:M,x:O,y:F,row:N,stages:R},V)=>{let L=H===void 0||R.includes(H),k=M?Math.PI+(N-1)*0.62:(1-N)*0.62,A=(k-Math.PI/2+Math.PI*4)%f6-f6/2,I=(NJ-0.06149999999999999)/Math.cos(A),S=I*Math.cos(k),y=I*Math.sin(k),B=Q+(S*U-0.24*G)*W,D=Z-(y*E-(S*G+0.24*U)*q)*W,C=O+(B-O)*0.32;if($.strokeStyle=L?"#edeee57f":"#edeee52d",$.lineWidth=1,$.setLineDash([2,3]),$.beginPath(),$.moveTo(O,F),$.lineTo(C,F),$.lineTo(B,D),$.stroke(),$.setLineDash([]),$.fillStyle=L?"#edeee5bd":"#edeee549",$.fillRect(B-1,D-1,2,2),Y||!L)return;let T=(X+V*453)%3400/1050;if(T>=1)return;let P=T**1.55;$.globalAlpha=Math.sin(T*Math.PI)*0.85,$.fillStyle="#edeee5";let f=O+(B-O)*P,h=F+(D-F)*Math.max(0,(P-0.32)/0.68);$.fillRect(f-1,h-1,2,2),$.globalAlpha=1})}function I9($,J,Q){let Z=$.querySelector("canvas"),W=Z.getContext("2d");if(!W)return;let K=$.querySelector(".platform-hub__mark"),X=[...$.querySelectorAll("[data-hub-stages]")].map((T)=>({item:T,text:T.querySelector("span"),stages:T.dataset.hubStages.split(" ").map(Number)})),H=new AbortController,Y=performance.now(),U={x:0,y:0},G=0,E=0,q=0,M=0,O=[],F=0,N=-1/0,R=!0,V=0.56,L=0.32,k,A=Y;function I(){if(!F&&G&&E&&R&&!document.hidden)F=requestAnimationFrame(S)}function S(T){if(F=0,!Z.isConnected||Z.closest("[hidden]"))return;let P=T-N;if(!J&&P<(M<160?36:30)){I();return}N=T;let f=T-Y,h=Q?.();if(h!==k){k=h,A=T;for(let{item:s,stages:t}of X)s.toggleAttribute("data-hub-dimmed",!t.includes(h))}if(!J){let s=1-Math.exp(-Math.min(P,100)/155);V+=(0.56+Math.sin(f/1770)*0.1+U.x*0.1-V)*s,L+=(0.32+Math.sin(f/2210)*0.043-U.y*0.065-L)*s}let b={cosYaw:Math.cos(V),sinYaw:Math.sin(V),cosPitch:Math.cos(L),sinPitch:Math.sin(L)},l=E*0.5,x=M*0.465;if(W.clearRect(0,0,G,E),iR(W,O,q,l,x,b,T-A,h,J),W.fillStyle="#edeee5",oR(W,q,l,x,M,b),!J)I()}function y(){if(G=Z.clientWidth,E=Z.clientHeight,!G||!E)return;let T=Math.min(devicePixelRatio||1,1.5);Z.width=Math.round(G*T),Z.height=Math.round(E*T),W.setTransform(T,0,0,T,0,0);let P=Z.getBoundingClientRect(),f=K.getBoundingClientRect();q=K.offsetWidth/2+f.left-P.left,M=K.clientWidth,O=X.map(({text:h,stages:b},l)=>{let x=h.getBoundingClientRect(),s=l<3;return{left:s,stages:b,row:l%3,x:(s?x.right+6:x.left-6)-P.left,y:x.top+x.height/2-P.top}}),I()}let B={signal:H.signal};if(!J)$.addEventListener("pointermove",(T)=>{let P=Z.getBoundingClientRect();U.x=(T.clientX-P.left)/P.width*2-1,U.y=(T.clientY-P.top)/P.height*2-1},B),$.addEventListener("pointerleave",()=>{U.x=U.y=0},B);document.addEventListener("visibilitychange",I,B);let D=new ResizeObserver(y);D.observe(Z);let C=new IntersectionObserver(([T])=>{R=T.isIntersecting,I()});return C.observe(Z),y(),()=>{cancelAnimationFrame(F),D.disconnect(),C.disconnect(),H.abort()}}var RJ="Kubernetes и GitOps",fH=[{title:"Развертывание",action:"Выпуск сервисов из Git",detail:"Настройки платформы описаны в коде, поэтому окружение можно развернуть повторно. Argo CD применяет конфигурацию из Git, а Kubernetes запускает приложения из образов в Harbor.",output:"Git → Argo CD → Kubernetes"},{title:"Сеть и масштаб",action:"Наблюдаемая сеть и автоматический масштаб",detail:"Cilium обеспечивает связь между сервисами, а Hubble показывает, какой трафик проходит между ними. За автомасштабирование отвечают сценарии Ansible.",output:"Cilium · Hubble · Ansible"},{title:"Доступы",action:"Корпоративный вход и права по ролям",detail:"Argo CD использует Dex для связи с корпоративным LDAP. Vault также подключен к LDAP. Группы сотрудников определяют роли в Argo CD и политики доступа в Vault.",output:"LDAP → Dex → Argo CD"}],aR=[{title:"Развертывание",tools:[{tools:"Kubernetes",symbol:"K8s",name:"Среда запуска",detail:"Общее окружение, в котором разворачиваются сервисы платформы."},{tools:"Argo CD",symbol:"GitOps",name:"Доставка конфигурации",detail:"Синхронизирует конфигурацию приложений в Kubernetes с Git."},{tools:"Harbor",symbol:"Image",name:"Хранилище образов",detail:"Реестр контейнерных образов, используемых при развертывании."},{tools:"IaC",symbol:"IaC",name:"Развертывание из кода",detail:"Конфигурация инфраструктуры платформы описана в коде и воспроизводится при развертывании."}]},{title:"Сеть и масштабирование",tools:[{tools:"Cilium · Hubble",symbol:"Flow",name:"Сеть и видимость трафика",detail:"Cilium соединяет сервисы, Hubble показывает сетевые потоки между ними."},{tools:"Ansible",symbol:"Scale",name:"Автомасштабирование",detail:"Сценарии Ansible автоматизируют масштабирование платформы."}]},{title:"Секреты и доступы",tools:[{tools:"Vault",symbol:"Vault",name:"Хранение секретов",detail:"Доступ к секретам ограничен политиками Vault."},{tools:"LDAP · RBAC",symbol:"Access",name:"Вход и разграничение прав",detail:"LDAP обеспечивает вход в Vault и Argo CD. Группы привязаны к политикам Vault и ролям Argo CD."}]}],jH=`<figure class="platform-hub" aria-label="Компоненты платформы Kubernetes">
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
</figure>`,rR=`<ul class="paas-launch__route" aria-label="Компоненты проекта">
  ${fH.map(({title:$})=>`<li>${$}</li>`).join("")}
</ul>`;function vH(){return[{id:"overview",label:"Обзор",layout:"paas-hero case-hero--compact",markup:`
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / Развертывание и эксплуатация</p>
        <h1 id="document-title">${RJ}</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Результат</p>
          <p>Общая среда для выпуска сервисов на Kubernetes. Новые проекты подключаются к готовому процессу развертывания, платформа масштабируется автоматически, а доступы управляются централизованно.</p>
        </div>
      </div>
      <div class="paas-launch platform-overview">${jH}${rR}</div>`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:g7(fH,"Как работает / Kubernetes","Компоненты платформы",jH)},{id:"stack",label:"Технологии",layout:"paas-details",markup:p7(aR,"delivery-platform")}]}function yH($,J){return l7($,J,(Q,Z,W)=>I9(Q.closest(".platform-hub"),Z,W))}function bH($,J){let Q=$.querySelector(".platform-overview .platform-hub"),Z;return{start(){Z=I9(Q,J)},stop(){Z?.(),Z=void 0}}}var hH=new Set(["index","atlas","carousel"]),tR={paas:`
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
`};function eR($){return`<pre class="project-preview__art" aria-hidden="true">${tR[$.id].trimEnd().replace(/^\n/,"")}</pre>`}function Z5($,J,Q){return`<a class="${J}" href="#case-${$.id}">${Q}</a>`}var W5='<span class="project-preview__arrow" aria-hidden="true">→</span>',K5='<h1 class="project-preview__title">Проекты</h1>';function $M($){return`${K5}
    <ul class="project-preview__index">
      ${$.map((J)=>`<li>${Z5(J,"project-preview__entry",`
        <span><strong>${J.name}</strong><span>${J.result}</span></span>${W5}
      `)}</li>`).join("")}
    </ul>`}function JM($){return`${K5}
    <ul class="project-preview__atlas">
      ${$.map((J)=>`<li>${Z5(J,"project-preview__tile",`
        ${eR(J)}
        <span class="project-preview__tile-copy"><strong>${J.name}</strong><span>${J.result}</span></span>
        ${W5}
      `)}</li>`).join("")}
    </ul>`}function QM($){return`<div class="project-preview__rail-heading">
    ${K5}<span class="project-preview__swipe">← Листайте →</span><output data-project-position aria-label="Позиция в карусели">1 / ${$.length}</output>
  </div>
  <div class="project-preview__rail-shell">
    <div class="project-preview__rail-controls" role="group" aria-label="Листать проекты">
      <button class="paas-deck__back section-glass" type="button" data-project-shift="-1" aria-label="Предыдущий проект" disabled><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
      <button class="paas-deck__back section-glass" type="button" data-project-shift="1" aria-label="Следующий проект"><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
    </div>
    <ul class="project-preview__rail" data-project-rail aria-label="Проекты">
      ${$.map((J,Q)=>`<li ${Q===0?"data-project-current":""}>
        ${Z5(J,"project-preview__slide",`
          ${J.id==="delivery-platform"?`<div class="platform-hub project-preview__badge" data-project-model="${J.id}" aria-hidden="true">
                <canvas class="platform-hub__canvas"></canvas><div class="platform-hub__mark"></div>
              </div>`:`<canvas class="project-preview__model" data-project-model="${J.id}" aria-hidden="true"></canvas>`}
          <div class="project-preview__feature-copy">
            <h2>${J.name}</h2>
            <p>${J.result}</p>
            <span class="project-preview__slide-open">Открыть кейс ${W5}</span>
          </div>`)}
      </li>`).join("")}
    </ul>
  </div>`}var ZM={paas:($,J)=>F7($,J,()=>3),llmops:u7,operations:d7,"delivery-platform":I9};function WM($){let J=$.querySelector("[data-project-rail]"),Q=[...J.children],[Z,W]=$.querySelectorAll("[data-project-shift]"),K=$.querySelector("[data-project-position]"),X=matchMedia("(prefers-reduced-motion: reduce)"),H=Q.map((F)=>F.querySelector("[data-project-model]")),Y=new Map,U=!1,G=-1;function E(F,N){let R=H[F],V=Y.get(F);if(!R||V?.animate===N)return;V?.stop?.(),Y.set(F,{animate:N,stop:ZM[R.dataset.projectModel](R,!N)})}function q(F){return F.getBoundingClientRect().left-J.getBoundingClientRect().left+(F.offsetWidth-J.clientWidth)/2}function M(){let F=Q.map((N)=>Math.abs(q(N)));return F.indexOf(Math.min(...F))}function O(){let F=M(),N=`${F+1} / ${Q.length}`;if(K.value!==N)K.value=N;if(Z.disabled=F===0,W.disabled=F===Q.length-1,Q.forEach((R,V)=>R.toggleAttribute("data-project-current",V===F)),!U||G===F)return;for(let[R,V]of Y){if(Math.abs(R-F)<=1)continue;V.stop?.(),Y.delete(R)}E(F-1,!1),E(F+1,!1),E(F,!X.matches),G=F}return J.addEventListener("scroll",O,{passive:!0}),$.addEventListener("click",(F)=>{let N=F.target.closest("[data-project-shift]");if(!N)return;let R=Q[M()+Number(N.dataset.projectShift)];if(R)J.scrollBy({left:q(R),behavior:X.matches?"instant":"smooth"})}),{setActive(F){if(U===F)return;if(U=F,U)O();else{for(let N of Y.values())N.stop?.();Y.clear(),G=-1}}}}function xH($,J,Q,Z){let W=document.createElement("div");W.className=`project-preview project-preview--${J}`,W.innerHTML={index:$M,atlas:JM,carousel:QM}[J](Q),$.dataset.projectLayout=J,$.append(W);let K=J==="carousel"?WM(W):void 0;return W.addEventListener("click",(X)=>{let H=X.target.closest('a[href^="#case-"]');if(!H||X.button||X.metaKey||X.ctrlKey||X.altKey||X.shiftKey)return;X.preventDefault(),Z(H.hash.slice(1))}),K}var gH=`
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
  </article>`;function pH($,J){let Q=$.getContext("2d"),Z=document.createElement("canvas").getContext("2d");if(!Q||!Z)return;let W=192,K=W/64;Z.canvas.width=W,Z.canvas.height=W,Z.scale(K,K),Z.lineWidth=6.3,Z.lineCap="round",Z.lineJoin="round",Z.stroke(new Path2D(j6));let X=Z.getImageData(0,0,W,W).data,H=["x","+","#","x","+"],Y=[":","·","+"],U=performance.now(),G=0,E=0,q=0,M=-1/0,O=!0;function F(){if(!G&&E&&q&&O&&!document.hidden)G=requestAnimationFrame(N)}function N(k){if(G=0,!J&&k-M<33){F();return}M=k;let A=(k-U)/1000,I=0.4+(J?0:Math.sin(A*0.86)*0.13),S=0.26+(J?0:Math.sin(A*0.64)*0.085),y=Math.cos(I),B=Math.sin(I),D=Math.cos(S),C=Math.sin(S),T=Math.min(E/65,q/48),P=Math.max(3.4,T*0.55),f=E*0.5-2*T,h=q*0.5-1.5*T;Q.clearRect(0,0,E,q),Q.font=`600 ${P*1.25}px ui-monospace, monospace`,Q.textBaseline="middle",Q.textAlign="center",Q.fillStyle="#edeee5";for(let b=0;(b+0.5)*P<q;b++){let l=(b+0.5)*P,x=(l-h)/T;if(Math.abs(x)>25)continue;for(let s=0;(s+0.5)*P<E;s++){let t=(s+0.5)*P,X0=(t-f)/T;if(Math.abs(X0)>35)continue;let G0=s*7+b*11;for(let B0=0;B0<=8;B0++){let R0=(X0-B*B0)/y,o=(x+C*(B*R0-y*B0))/D,Z0=Math.round((R0+32)*K),J0=Math.round((o+32)*K);if(Z0<0||Z0>=W||J0<0||J0>=W||X[(J0*W+Z0)*4+3]<128)continue;let O0=B0?Y:H;Q.globalAlpha=B0?0.39+0.26*(1-B0/8):0.72+0.24*(G0%9/8),Q.fillText(O0[G0%O0.length],t,l);break}}}if(Q.globalAlpha=1,!J)F()}function R(){if(E=$.clientWidth,q=$.clientHeight,!E||!q)return;let k=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(E*k),$.height=Math.round(q*k),Q.setTransform(k,0,0,k,0,0),F()}let V=new ResizeObserver(R);V.observe($);let L=new IntersectionObserver(([k])=>{O=k.isIntersecting,F()});return L.observe($),document.addEventListener("visibilitychange",F),R(),()=>{cancelAnimationFrame(G),V.disconnect(),L.disconnect(),document.removeEventListener("visibilitychange",F)}}var KM=["·",":","+","x","#"],XM=[{normal:[0,0,1],point:($,J)=>[$,J,1],light:0.72},{normal:[1,0,0],point:($,J)=>[1,J,-$],light:0.46},{normal:[0,1,0],point:($,J)=>[$,1,-J],light:0.94}],HM=XM.map(($)=>({...$,points:Array.from({length:324},(J,Q)=>{let Z=Math.floor(Q/18),W=Q%18,K=(W+0.5)/9-1,X=(Z+0.5)/9-1;return{position:$.point(K,X),grain:(W*7+Z*13)%11,scaffold:Z%6===0||W%6===0,rim:Math.max(Math.abs(K),Math.abs(X))>0.83}})}));function lH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=matchMedia("(pointer: coarse)").matches,K=performance.now(),X=0,H=0,Y=0,U=-1/0,G=Q();function E(){if(!X&&H&&Y&&!document.hidden)X=requestAnimationFrame(q)}function q(F){X=0;let N=F-U;if(!J&&N<33){E();return}U=F;let R=J?0:F-K;G+=(Q()-G)*(J?1:1-Math.exp(-Math.min(90,N)/310));let V=0.54+Math.sin(R/2060)*0.095,L=0.34+Math.sin(R/2450)*0.048,k=Math.cos(V),A=Math.sin(V),I=Math.cos(L),S=Math.sin(L),y=Math.min(H/3.65,Y/3.25),B=Math.max(4,y*0.1);function D(C,T,P,f,h){let b=C*A+P*k;Z.globalAlpha=Math.min(1,h*(W?1.28:1)),Z.fillText(f,H*0.5+(C*k-P*A)*y,Y*0.5-(T*I-b*S)*y)}Z.clearRect(0,0,H,Y),Z.font=`${W?700:600} ${B}px ui-monospace, monospace`,Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle";for(let C of HM)for(let{position:[T,P,f],grain:h,scaffold:b,rim:l}of C.points){let x=Math.max(0,Math.min(1,G*1.44-(P+1)*0.66-h*0.027)),s=(1-x)*(1-G/2)*0.14,t=(b||l?0.41:0.07)+x*0.48;D(T+C.normal[0]*s,P+C.normal[1]*s,f+C.normal[2]*s,KM[l?2:Math.min(4,Math.floor(x*3+h/6))],t*C.light)}if(G>0.04)for(let C=0;C<70;C++){let T=C*Math.PI*2/70+R/1700,P=J?0.3:Math.sin(C/70*Math.PI)**4;D(Math.cos(T)*1.42,-1.12,Math.sin(T)*1.42,P>0.62?"+":"·",G*(0.09+P*0.23))}if(Z.globalAlpha=1,!J)E()}function M(){if(H=$.clientWidth,Y=$.clientHeight,!H||!Y)return;let F=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(H*F),$.height=Math.round(Y*F),Z.setTransform(F,0,0,F,0,0),E()}let O=new ResizeObserver(M);return O.observe($),document.addEventListener("visibilitychange",E),M(),()=>{cancelAnimationFrame(X),O.disconnect(),document.removeEventListener("visibilitychange",E)}}var YM=["·",":","+","x","#"],UM=Array.from({length:551},($,J)=>{let Q=(J%29-14)/14,Z=(Math.floor(J/29)-9)/9;return{u:Q,v:Z,grain:J*71%31/31}});function uH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=0,K=0,X=0,H=-1/0,Y=Q(),U=performance.now();function G(){if(!X&&W&&K&&!document.hidden)X=requestAnimationFrame(E)}function E(O){X=0;let F=O-H;if(F<32&&!J){G();return}H=O,Y+=(Q()-Y)*(1-Math.exp(-Math.min(80,F)/150));let N=J?0:(O-U)/1000,R=-0.51+Math.sin(N*0.68)*0.09,V=0.62+Math.sin(N*0.53)*0.06,L=Math.min(W/3.12,K/2.3),k=Math.cos(R),A=Math.sin(R),I=Math.cos(V),S=Math.sin(V),y=Math.sin(N*1.55),B=0.48+0.34*Math.max(0,1-Math.abs(1-Y));Z.clearRect(0,0,W,K),Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle",Z.font=`600 ${Math.max(4.5,L*0.097)}px ui-monospace, monospace`;for(let D of[0,1])for(let{u:C,v:T,grain:P}of UM){let f=Math.max(Math.abs(C),Math.abs(T)),h=Math.cos(4*C-2*T+D*(0.8+Y*0.3)),l=0.22*h*Math.sin(3*T+N*0.52)*(1-f**4)+(D-0.5)*B,x=1.28*C,s=0.79*T,t=x*A+s*k,X0=Math.max(0,1-Math.abs(C-y)*8)*Math.min(1,Y),G0=f===1?2:Math.floor(1.9+h*1.2+P*0.85);Z.globalAlpha=Math.min(1,0.21+D*0.18+(h+1)*0.14+X0*0.36),Z.fillText(YM[X0>0.58?4:G0],W*0.5+(x*k-s*A)*L,K*0.5-(l*I-t*S)*L)}if(Z.globalAlpha=1,!J)G()}function q(){W=$.clientWidth,K=$.clientHeight;let O=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(W*O),$.height=Math.round(K*O),Z.setTransform(O,0,0,O,0,0),G()}let M=new ResizeObserver(q);return M.observe($),document.addEventListener("visibilitychange",G),q(),()=>{cancelAnimationFrame(X),M.disconnect(),document.removeEventListener("visibilitychange",G)}}var X5=[{label:"Разработка",title:"Запустить новый сервис",detail:"Разрабатываем веб-приложения и внутренние инструменты. Готовим среду для запуска и передаем работающий сервис.",project:"paas",visual:($,J)=>F7($,J,()=>3)},{label:"Инфраструктура",title:"Упростить выпуск и поддержку",detail:"Переносим конфигурации в код, автоматизируем релизы и настраиваем мониторинг. Разбираем повторяющиеся сбои и устраняем их причины.",project:"operations",visual:d7},{label:"Исследования",title:"Проверить техническую идею",detail:"Сравниваем подходы и собираем прототипы, чтобы проверить ограничения и риски до внедрения в продукт.",project:"llmops",visual:u7}],mH=[["План","Согласуем задачу и границы","Разбираемся в текущей системе, согласуем объем работ и заранее определяем, как проверим результат.","План работ и критерии приемки."],["Запуск","Собираем, проверяем, запускаем","Показываем промежуточные версии, проверяем рабочие сценарии и разворачиваем готовое решение.","Работающий сервис и документация."],["Поддержка","Помогаем после запуска","Разбираем сбои, выпускаем обновления и развиваем сервис по согласованному формату.","Согласованный порядок сопровождения."]],dH='<button class="studio-about__contact section-glass" type="button" data-section="contact">Обсудить проект <span aria-hidden="true">→</span></button>';function MJ($,J,Q=!1){return`<div class="studio-choices${Q?" section-glass":""}" role="group" aria-label="${J}">
    ${$.map((Z,W)=>`<button type="button" data-studio-choice="${W}" aria-pressed="${W===0}">${Z}</button>`).join("")}
  </div>`}var cH=`<article class="section-page studio-screen studio-offerings">
  <div class="studio-offerings__body">
    <header class="studio-screen__header"><h1 id="document-title">Решения</h1>${dH}</header>
    <div class="studio-offerings__stage">
      <canvas aria-hidden="true"></canvas>
      <div class="studio-offerings__copy" aria-live="polite">
        ${X5.map(({title:$,detail:J,project:Q},Z)=>`<div data-studio-panel ${Z?"hidden":""}>
          <h2>${$}</h2><p>${J}</p>
          <button type="button" class="studio-screen__link" data-section="case-${Q}">Пример проекта <span aria-hidden="true">→</span></button>
        </div>`).join("")}
      </div>
    </div>
  </div>
  <footer class="paas-deck__footer">
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
    ${MJ(X5.map(({label:$})=>$),"Направления",!0)}
  </footer>
</article>`,nH=`<article class="section-page studio-screen studio-process">
  <div class="studio-offerings__body">
    <header class="studio-screen__header"><h1 id="document-title">Как работаем</h1>${dH}</header>
    <div class="studio-offerings__stage">
      <canvas aria-hidden="true"></canvas>
      <div class="studio-offerings__copy" aria-live="polite">
        ${mH.map(([,$,J,Q],Z)=>`<div data-studio-panel ${Z?"hidden":""}>
          <h2>${$}</h2><p>${J}</p>
          <p class="studio-process__result">${Q}</p>
        </div>`).join("")}
      </div>
    </div>
  </div>
  <footer class="paas-deck__footer">
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
    ${MJ(mH.map(([$])=>$),"Этапы работы",!0)}
  </footer>
</article>`;function sH($,J){let Q=[...$.querySelectorAll("[data-studio-choice]")],Z=[...$.querySelectorAll("[data-studio-panel]")],W=$.querySelector(".studio-offerings__stage canvas"),K=$.querySelector(".studio-offerings__body"),X=new AbortController,H=-1,Y=$.classList.contains("studio-research")?uH:$.classList.contains("studio-process")?lH:null,U;function G(E){if(E===H)return;if(H=E,Q.forEach((q,M)=>{q.setAttribute("aria-pressed",String(M===E)),Z[M].hidden=M!==E}),K.scrollTop=0,!W)return;if(Y){if(J||!U)U?.(),U=Y(W,J,()=>H)}else U?.(),U=X5[E].visual(W,J)}return $.addEventListener("click",(E)=>{let q=E.target.closest("[data-studio-choice]");if(q)G(Number(q.dataset.studioChoice))},{signal:X.signal}),G(0),()=>{U?.(),X.abort()}}var oH={research:{title:`Проверка устойчивости
AI-систем`,summary:"Исследовательский прототип для оценки атак на LLM и проверки LoRA-адаптеров — с измерениями и границами применения.",chapters:[{title:`Поведение модели
нельзя принять на веру`,text:"Состязательные входные данные могут изменить поведение языковой модели. Подключаемые LoRA-адаптеры также требуют проверки. До внедрения защиты важно оценить не только устойчивость, но и влияние на качество ответов.",note:"Диссертационное исследование · AI security"},{title:`Защиту можно
проверить на стенде`,text:"Прототип объединяет сеансовый сдвиг LoRA-параметров, моделирование атак и аудит вычислений. Подход позволяет экспериментально сравнивать поведение модели и качество ответов при разных настройках защиты.",note:"Исследовательский прототип · VRF + LoRA"},{title:`Защита и качество
в одной проверке`,text:"На стенде моделируются атаки и сравнивается поведение модели при разных настройках защиты. Отдельный аудитор проверяет вычисления по эталонной модели. Так оценивается не только устойчивость, но и цена защиты: изменение ответов и вычислительные затраты.",note:"Python · PyTorch · Transformers · PEFT · LoRA",details:{title:"Что реализовано",text:"В прототипе проверяемый сдвиг формируется с использованием Ed25519 и SHAKE-256. Сервер инференса и аудитор могут работать в независимых процессах: аудитор воспроизводит сдвиг на эталонной модели и сравнивает логиты. Модуль защиты зарегистрирован как программа для ЭВМ, № 2025665020."}},{title:`Основа для пилота,
с измеренными границами`,text:"На 10 запросах AdvBench для TinyLlama-1.1B-Chat перенос найденных GCG-суффиксов и прямая оптимизация со сдвигом дали 0 успешных атак. При этом снизилось разнообразие длинных ответов. Результат дает основу для дальнейших пилотных проверок, но не означает универсальную защиту LLM.",note:"Ограниченная выборка · компромисс качества",details:{title:"Условия и границы применения",text:"Успех определялся по целевой утвердительной фразе в начале ответа. Выборка — 10 запросов AdvBench; LoRA r=8, амплитуда сдвига 0,1. На 8 вопросах MT-Bench разнообразие длинных ответов снизилось (distinct-2: 0,91 → 0,62), поэтому амплитуда требует настройки. Измерение проверки аудитором: в среднем 0,772 с на TinyLlama-1.1B-Chat, Apple MPS, 10 контрольных запросов. Эти результаты относятся к описанному стенду; они не означают универсальную защиту от промпт-инъекций. Подход требует доступа к весам модели и LoRA-адаптеру. Для промышленного применения в диссертации рекомендована стандартизированная ECVRF вместо экспериментальной схемы. Незначительное искажение логитов может не обнаруживаться при выбранном пороге. Промпт-инъекции на естественном языке требуют дополнительных механизмов обнаружения и ограничения полномочий агента."},metrics:[{value:"2/10 → 0/10",label:"успешных атак в тесте",detail:"Без сдвига → с VRF-сдвигом"},{value:"×3,20",label:"среднее отношение потерь GCG",detail:"Одинаковый бюджет: 500 шагов"}]}]},technicalArticles:[{id:"kubernetes-network",topics:["Kubernetes","kind","Cilium"],versions:[{language:"ru",platform:"Хабр",title:"Сеть kubernetes без магии: трассировка пакета на kind + Cilium",href:"https://habr.com/ru/articles/1073254/"}]},{id:"wildcard-certificates",topics:["TLS","DNS","Автоматизация"],versions:[{language:"ru",platform:"Хабр",title:"Автоматизация wildcard-сертификатов",href:"https://habr.com/ru/articles/1071764/"},{language:"en",platform:"DEV",title:"Automating wildcard certificates: avoid complex NS servers",href:"https://dev.to/wwr0ngn4m3/automating-wildcard-certificates-avoid-complex-ns-servers-27n2"}]},{id:"sentry-incident",topics:["Sentry","Observability"],versions:[{language:"en",platform:"DEV",title:"Investigating a Sentry Incident. Shadowboxing",href:"https://dev.to/wwr0ngn4m3/investigating-a-sentry-incident-1hbl"}]},{id:"llm-vrf-lora",topics:["LLM","VRF","LoRA"],versions:[{language:"en",platform:"DEV",title:"Defending LLM Agents from Gradient-Based Adversarial Attacks: A VRF+LoRA Approach",href:"https://dev.to/wwr0ngn4m3/defending-llm-agents-from-gradient-based-adversarial-attacks-a-vrflora-approach-di4"}]},{id:"database-migration",topics:["MariaDB","PostgreSQL","Debezium"],versions:[{language:"ru",platform:"Хабр",title:"Миграция MariaDB → PostgreSQL без даунтайма: почему обычные утилиты не подошли и как мы сделали это через Debezium",href:"https://habr.com/ru/articles/1061438/"},{language:"en",platform:"DEV",title:"Zero-Downtime MariaDB PostgreSQL Migration: Why the Usual Tools Fell Short, and How Debezium CDC Solved It",href:"https://dev.to/wwr0ngn4m3/zero-downtime-mariadb-postgresql-migration-why-the-usual-tools-fell-short-and-how-debezium-cdc-424f"}]},{id:"diy-assistant",topics:["LLM","Python","JavaScript"],versions:[{language:"ru",platform:"Хабр",title:"DE-1. DIY ассистент на LLM",href:"https://habr.com/ru/articles/853708/"}]}],scientificPublications:[{id:"llm-defense-review-2025",kind:"journal",language:"ru",title:"От эксплуатации к защите: анализ методов защиты от атак на языковые модели",year:2025,venue:"Проблемы информационной безопасности. Компьютерные системы",issue:"№ 3",authors:["Величко И. С.","Беззатеев С. В."],pages:"110–120",href:"https://jisp.spbstu.ru/article/2025.23.10/",doi:"10.48612/jisp/2nkk-unee-uuzv"},{id:"llm-attacks-review-2025",kind:"journal",language:"ru",title:"От эксплуатации к защите: анализ атак на большие языковые модели",year:2025,venue:"Проблемы информационной безопасности. Компьютерные системы",issue:"№ 1",authors:["Величко И. С.","Беззатеев С. В."],pages:"43–58",href:"https://jisp.spbstu.ru/article/2025.20.4/",doi:"10.48612/jisp/mbvv-n1u7-z7be"},{id:"vrf-journal-2024",kind:"journal",language:"ru",title:"Распределенный протокол генерации псевдослучайных чисел на основе алгоритма проверяемой случайной функции",year:2024,venue:"Информационно-управляющие системы",issue:"№ 3",authors:["Величко И. С.","Афанасьева А. В.","Беззатеев С. В."],pages:"32–40",href:"https://i-us.ru/index.php/ius/article/view/16284",doi:"10.31799/1684-8853-2024-3-32-40"},{id:"vrf-optimized-2024",kind:"conference",language:"en",href:"https://doi.org/10.1109/ICCT62929.2024.10874948",title:"Optimized VRF-Driven Distributed Randomness Generation Protocol",year:2024,venue:"2024 8th International Conference on Information, Control, and Communication Technologies (ICCT)",authors:["Ivan Velichko","Sergey Bezzateev","Alexandra Afanasyeva"],pages:"1–5",doi:"10.1109/ICCT62929.2024.10874948"},{id:"vrf-distributed-2023",kind:"conference",language:"en",href:"https://doi.org/10.1109/ICSC60084.2023.10349973",title:"Distributed Pseudorandom Generation Protocol Based on VRF Algorithm",year:2023,venue:"2023 3rd Intelligent Cybersecurity Conference (ICSC)",authors:["Ivan Velichko","Sergey Vanurin","Alexandra Afanasyeva","Sergey Bezzateev","Mikhail Sayfullin","Konstantin Zhidanov"],pages:"32–38",doi:"10.1109/ICSC60084.2023.10349973"},{id:"lora-certification-2026",kind:"journal",language:"ru",title:"Механизм сертификации и верификации LoRA адаптеров",year:2026,venue:"Экономика и качество систем связи",issue:"№ 1 (39)",authors:["Величко И. С."],pages:"87–94",href:"https://journal-ekss.ru/wp-content/uploads/2026/03/87-94-Величко.pdf",format:"pdf"}]};var iH=`....................................................
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
`),aH="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z";var rH=[];for(let $=0;$<3;$++)for(let J=0;J<32;J++)for(let Q=0;Q<24;Q++){if(J<6&&Q>17+J)continue;let Z=J===0||J===31||Q===0||Q===Math.min(23,17+J),W=$===0&&Q>2&&Q<21&&J>7&&J<27&&J%3===0&&(J<15||Q<19-J%5),K=$===0&&J===6&&Q>=17;if(Z||W||K)rH.push({page:$,row:J,col:Q,edge:Z,ink:W})}function EM($){if($==="Хабр")return iH.flatMap((K,X)=>Array.from(K,(H,Y)=>H==="."?null:{x:Y-25.5,y:X-25.5,alpha:Number(H)/4}).filter(Boolean));let J=document.createElement("canvas");J.width=52,J.height=52;let Q=J.getContext("2d");Q.setTransform(2,0,0,2,2,2),Q.fill(new Path2D(aH),"evenodd");let{data:Z}=Q.getImageData(0,0,52,52),W=[];for(let K=0;K<52;K++)for(let X=0;X<52;X++){let H=Z[(K*52+X)*4+3]/255;if(H>0.27)W.push({x:X-25.5,y:K-25.5,alpha:H})}return W}function tH($,J,Q,Z){let W=$.getContext("2d");if(!W)return;let K=performance.now(),X=-1/0,H=0,Y=0,U=0,G=Q(),E=new Map;function q(){if(!U&&H&&Y&&!document.hidden)U=requestAnimationFrame(M)}function M(N){U=0;let R=N-X;if(!J&&R<32){q();return}X=N;let V=J?0:(N-K)/1000;G+=(Q()-G)*(1-Math.exp(-Math.min(90,R)/180));let L=0.38+Math.sin(V*0.75)*0.08+Math.sin(G*1.9)*0.14,k=Math.min(H,Y)*0.295,A=V*9%42-6;W.clearRect(0,0,H,Y),W.fillStyle="#edeee5",W.textAlign="center",W.textBaseline="middle";let I=Z();if(I){let S=Math.min(H/59,Y/(I.length===1?61:93));if(W.font=`700 ${S*1.53}px ui-monospace, monospace`,I.forEach(({platform:y},B)=>{if(!E.has(y))E.set(y,EM(y));let D=(B-(I.length-1)/2)*44,C=J?0:Math.sin(V*1.1+B*1.8)*0.8;for(let{x:T,y:P,alpha:f}of E.get(y))W.globalAlpha=0.46+f*0.48,W.fillText(f>0.55?"+":"·",H/2+T*S,Y/2+(D+C+P)*S)}),W.globalAlpha=1,!J)q();return}W.font=`600 ${Math.max(5,k*0.1)}px ui-monospace, monospace`;for(let{page:S,row:y,col:B,edge:D,ink:C}of rH){let T=(B-11.5)/11+S*0.18,P=(y-15.5)/13-S*0.18,f=S*0.32,h=Math.max(0,B-17)*Math.max(0,6-y)*0.009,l=1/(1+(Math.sin(L)*T+Math.sin(0.34)*P+f-h)*0.25),x=Math.cos(L)*T-0.36*P,s=0.24*T+Math.cos(0.34)*P-f*0.23,t=J?0:Math.max(0,1-Math.abs(y-A)/5);W.globalAlpha=Math.min(1,(S===0?D?0.76:0.48:0.35)+t*0.24),W.fillText(C?B%4===0?"x":"·":D?"+":":",H/2+x*k*l,Y/2+(s*l+0.08)*k)}if(W.globalAlpha=1,!J)q()}function O(){H=$.clientWidth,Y=$.clientHeight;let N=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(H*N),$.height=Math.round(Y*N),W.setTransform(N,0,0,N,0,0),q()}let F=new ResizeObserver(O);return F.observe($),document.addEventListener("visibilitychange",q),O(),{stop(){cancelAnimationFrame(U),F.disconnect(),document.removeEventListener("visibilitychange",q)}}}var{research:H5,scientificPublications:eH,technicalArticles:JY}=oH;function P9($,J,Q=""){return`<a href="${$}" target="_blank" rel="noopener" ${Q}>${J}</a>`}function QY($,J,Q,Z,W,K){return`<article class="section-page studio-screen ${J}">
    <div class="studio-offerings__body">
      <header class="studio-screen__header">
        <h1 id="document-title">${$}</h1>
        ${K}
      </header>
      ${Q}
    </div>
    <footer class="paas-deck__footer">
      <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
      ${MJ(Z,W,!0)}
    </footer>
  </article>`}function FJ({title:$,text:J,note:Q,details:Z,metrics:W},K){return`<section class="research-chapter">
    <${K}>${$.replaceAll(`
`," ")}</${K}>
    <p>${J}</p>
    ${W?`<dl class="research-metrics">${W.map(({value:X,label:H,detail:Y})=>`<div><dt>${H}</dt><dd><strong>${X}</strong><small>${Y}</small></dd></div>`).join("")}</dl>`:""}
    <p class="editorial-meta">${Q}</p>
    ${Z?`<details><summary>${Z.title}</summary><p>${Z.text}</p></details>`:""}
  </section>`}var[qM,NM,RM,MM]=H5.chapters,ZY=QY("Исследования","studio-research",`
  <div class="studio-offerings__stage">
    <div class="studio-offerings__copy">
      <div data-studio-panel>
        <h2>${H5.title.replaceAll(`
`," ")}</h2>
        <p>${H5.summary}</p>
        ${FJ(qM,"h3")}
      </div>
      <div data-studio-panel hidden>
        ${FJ(NM,"h2")}
        ${FJ(RM,"h3")}
      </div>
      <div data-studio-panel hidden>
        ${FJ(MM,"h2")}
        <button type="button" class="studio-screen__link" data-section="contact">Обсудить похожую задачу <span aria-hidden="true">→</span></button>
      </div>
    </div>
    <canvas aria-hidden="true"></canvas>
  </div>`,["Обзор","Методика","Результаты"],"Разделы исследования",'<button type="button" class="studio-screen__link" data-section="blog">Статьи и публикации <span aria-hidden="true">→</span></button>');function FM({year:$,language:J,href:Q,title:Z,authors:W,venue:K,issue:X,pages:H,doi:Y,format:U,kind:G}){let E=Y?`https://doi.org/${Y}`:"";return`<p class="editorial-meta">${$} · ${G==="conference"?"Международная конференция · IEEE":"Научный журнал"}</p>
    <h2 lang="${J}">${Z}</h2>
    <p lang="${J}">${W.join(", ")}</p>
    <p class="blog-venue"><span lang="${J}">${K}</span>${X?` · ${X}`:""} · ${J==="ru"?"С.":"pp."} ${H}</p>
    <div class="editorial-versions">
      ${P9(Q,`Открыть ${U==="pdf"?"PDF":"публикацию"} ↗`)}
      ${E&&E!==Q?P9(E,`DOI ${Y}`):""}
    </div>`}function OM({topics:$,versions:J}){let Q=J.find((Z)=>Z.language===document.documentElement.lang)??J[0];return`<p class="editorial-meta">${$.join(" / ")}</p>
    <h2 lang="${Q.language}">${Q.title}</h2>
    <div class="editorial-versions">${J.map(({href:Z,language:W,platform:K})=>P9(Z,`${K} · ${W.toUpperCase()} ↗`,`hreflang="${W}"`)).join("")}</div>`}var LM={"llm-defense-review-2025":{labels:["ВАК","РИНЦ"],edn:"FHFGXI"},"llm-attacks-review-2025":{labels:["ВАК","РИНЦ"],edn:"SJYTYG"},"vrf-journal-2024":{labels:["Scopus","ВАК","РИНЦ"],edn:"FNYMEW"},"lora-certification-2026":{labels:["ВАК","РИНЦ"]}};function DM($){if($.kind==="conference")return P9($.href,"IEEE Xplore",'class="blog-index-badge"');let{labels:J,edn:Q}=LM[$.id]??{labels:[]};return J.map((Z)=>{let W=Z==="РИНЦ"&&Q?`https://elibrary.ru/${Q.toLowerCase()}`:$.href;return P9(W,Z,`class="blog-index-badge" aria-label="${Z} · открыть статью"`)}).join("")}var $Y=[[...eH.filter(({kind:$})=>$==="conference"),...eH.filter(({kind:$})=>$==="journal")].map(($)=>({copy:FM($),badges:DM($)})),JY.map(($)=>({copy:OM($)}))],WY=QY("Блог и публикации","studio-blog",`
  <div class="blog-carousel">
    <button class="blog-shift section-glass" type="button" data-blog-shift="-1" aria-label="Предыдущий материал" disabled>←</button>
    ${$Y.map(($,J)=>`<div class="blog-track" data-studio-panel ${J?"hidden":""} tabindex="0" role="region" aria-label="${J?"Статьи":"Публикации"}">
      ${$.map(({copy:Q,badges:Z})=>`<div class="blog-stage" data-blog-slide>
        <div class="blog-stage__copy">${Q}</div>
        <div class="blog-visual">
          <canvas aria-hidden="true"></canvas>
          ${Z?`<div class="blog-index-badges">${Z}</div>`:""}
        </div>
      </div>`).join("")}
    </div>`).join("")}
    <button class="blog-shift section-glass" type="button" data-blog-shift="1" aria-label="Следующий материал">→</button>
  </div>`,["Публикации","Статьи"],"Категории материалов",`<div class="blog-position"><span>Листайте</span><output aria-label="Позиция">1 / ${$Y[0].length}</output></div>`);function KY($,J){let Q=$.querySelector(".blog-carousel"),Z=[...Q.querySelectorAll(".blog-track")],W=Z.map((R)=>[...R.children]),[K,X]=Q.querySelectorAll("[data-blog-shift]"),H=$.querySelector("output"),Y=new AbortController,U={signal:Y.signal},G=new Map,E=0;function q(R,V){return V.getBoundingClientRect().left-R.getBoundingClientRect().left}function M(){let R=Z[E],V=W[E].map((L)=>Math.abs(q(R,L)));return V.indexOf(Math.min(...V))}function O(){let R=M(),V=W[E],L=`${R+1} / ${V.length}`;if(H.value!==L)H.value=L;K.disabled=R===0,X.disabled=R===V.length-1;let k=new Set(V.slice(Math.max(0,R-1),R+2));for(let[A,{scene:I}]of G){if(k.has(A))continue;I?.stop(),G.delete(A)}for(let A of k){let I=!J&&A===V[R],S=G.get(A);if(S?.animate===I)continue;S?.scene?.stop();let y=V.indexOf(A),B=E===1?JY[y].versions:null,D=tH(A.querySelector("canvas"),!I,()=>y,()=>B);G.set(A,{scene:D,animate:I})}}function F(R){let V=Z[E],L=W[E][M()+R];if(L)V.scrollBy({left:q(V,L),behavior:J?"instant":"smooth"})}Z.forEach((R,V)=>R.addEventListener("scroll",()=>{if(V===E)O()},{...U,passive:!0})),$.addEventListener("click",(R)=>{let V=R.target.closest("[data-studio-choice]");if(V)E=Number(V.dataset.studioChoice),O()},U),K.addEventListener("click",()=>F(-1),U),X.addEventListener("click",()=>F(1),U),Q.addEventListener("keydown",(R)=>{if(R.key!=="ArrowLeft"&&R.key!=="ArrowRight")return;R.preventDefault(),F(R.key==="ArrowLeft"?-1:1)},U);let N=new ResizeObserver(O);return N.observe(Q),O(),()=>{Y.abort(),N.disconnect();for(let{scene:R}of G.values())R?.stop()}}var IJ=[{id:"paas",index:"01",name:"PaaS-платформа",kind:"Cloud-native платформа",result:"Запуск приложений из Git в инфраструктуре компании."},{id:"llmops",index:"02",name:"LLMOps",kind:"Референсная архитектура",result:"Архитектура AI-ассистента для корпоративной инфраструктуры."},{id:"operations",index:"03",name:"Инфраструктура как код",kind:"IaC и мониторинг",result:"Автоматизация обновлений и восстановления после сбоев."},{id:"delivery-platform",index:"04",name:RJ,kind:"Развертывание и эксплуатация",result:"Общий процесс выпуска, масштабирования и управления доступами."}],L7=new URLSearchParams(location.search),E5=document.body.hasAttribute("data-studio-release"),f9=document.documentElement.lang==="en"?"en":"ru",_M=f9==="ru"?"en":"ru";if(E5){for(let[$,J]of Object.entries({cover:"glass-split-schematic",brand:"top-left",font:"condensed",effect:"all",mark:"vertical",logo:"menu-sign",contactStyle:"caption",paasStyle:"live",paasWorkflow:"sequence",paasStack:"layers",projectLayout:"carousel"}))if(!L7.has($))L7.set($,J);if(navigator.doNotTrack!=="1")fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"page_view",value:`/${f9}`}),credentials:"omit",mode:"same-origin",keepalive:!0}).catch(()=>{})}var XY=L7.get("projectLayout"),o8=hH.has(XY)?XY:"",c1=($)=>document.getElementById($),VM=`<div class="cover-languages" role="group" aria-label="Язык">
  ${["ru","en"].map(($)=>$===f9?`<span lang="${$}" aria-current="true">${$.toUpperCase()}</span>`:`<a class="cover-locale" href="/${$}" hreflang="${$}" lang="${$}">${$.toUpperCase()}</a>`).join("")}
</div>`,qY='<button data-open-projects>Проекты</button><button data-section="services">Решения</button><button data-section="about">О студии</button><button data-section="process">Процесс</button><button data-section="blog">Блог и публикации</button><button data-section="research">Исследования</button><button data-section="contact">Контакты</button>'+(E5?VM:""),x6=c1("head"),D7=c1("orbit"),c7=c1("projects"),_7=c1("go"),PJ=c1("back"),g6=c1("demo-status"),_J=c1("cover-details"),q5=[..._J.querySelectorAll(".cover-link")],C1=matchMedia("(prefers-reduced-motion: reduce)").matches,T9=Object.freeze({yaw:-0.77,pitch:0.087,scale:0.84,offsetX:0,offsetY:0.22}),BM=Object.freeze({yaw:-0.65,pitch:1.12,scale:1.6,offsetX:0,offsetY:-1.15}),zM=C1?120:850,LJ=0.85,HY=0.1*LJ,AJ={...T9},NY=0,RY=0,MY=!1,I1=!1,FY=null,N5=!1,OY=matchMedia("(pointer: coarse)").matches,kM=k5({touch:OY}),w9=($)=>Math.max(0,Math.min(1,$)),h6=($)=>{let J=w9($);return J*J*(3-2*J)},VJ=($,J,Q)=>$+(J-$)*Q,i8=!1,B1="loading",U1=0,V1=null,v6=0,BJ=!1,p6=0,s8=0,zJ=0,V7=!1,l6=!1,Y5=0,kJ=[],A9=null,U5=!1,D8=ZH({host:x6,cover:_J,links:q5,params:L7,onChange:LY,directoryMarkup:qY}),n8=D8?.frame(T9)??T9,X1,YY,TJ=o8?xH(c7,o8,IJ,x9):void 0,y6=o8?[]:IJ.map(($)=>{let J=document.createElement("a");return J.className="project",J.href=`/${f9}/projects/${$.id}`,J.addEventListener("click",(Q)=>{Q.preventDefault(),x9("case-"+$.id)}),J.dataset.project=$.id,J.setAttribute("aria-label",`${$.name}, открыть проект`),J.innerHTML=`<span class="project-top"><span class="project-index">${$.index}</span><span class="project-kind">${$.kind}</span></span><span class="project-bottom"><span class="project-name">${$.name}</span><svg class="project-arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></span>`,D7.append(J),J});function n7($){if(B1=$,document.body.dataset.phase=B1,B1!=="head"){if(v9(),X1)D8?.clearEffect?.(X1)}}function v9(){for(let $ of kJ)clearTimeout($);kJ=[];for(let $ of q5)$.classList.remove("is-previewing")}function CM(){if(C1||I1||document.hidden)return;for(let $ of q5){let J=Math.random()*50;kJ.push(setTimeout(()=>$.classList.add("is-previewing"),J)),kJ.push(setTimeout(()=>$.classList.remove("is-previewing"),J+290))}}function S9($,J="scatter"){X1?.setScatter($,{region:"all",mode:J}),document.body.dataset.scatter=$.toFixed(4)}function LY(){if(!D8)return;if(n8=D8.frame(T9),B1==="returning")AJ=n8;if(X1&&!V1&&U1===0)X1.setView({...n8,immediate:!0}),D8.drawGuides?.(X1)}function CJ(){let $=h6(U1/0.85),J=h6(U1/0.38),Q=h6((U1-0.45)/0.35),Z={};for(let K of Object.keys(T9))Z[K]=VJ(AJ[K],BM[K],$);X1?.setView({...Z,immediate:!0}),S9(J,V1?.to===0?"appear":"scatter"),c7.style.setProperty("--reveal",Q.toFixed(4));let W=Q>0.9&&!V1;c7.classList.toggle("is-active",W),c7.inert=!W,c7.setAttribute("aria-hidden",String(Q<=0.01)),TJ?.setActive(W&&!I1),_J.classList.toggle("is-away",U1>0.03),_J.inert=U1>0.03,_7.inert=U1>0.01,_7.classList.toggle("is-away",U1>0.01),PJ.hidden=Q<0.55,document.body.dataset.progress=U1.toFixed(4),document.body.dataset.pitch=Z.pitch.toFixed(4),document.body.dataset.projectsVisible=String(Q>0.9),document.body.classList.toggle("inside-projects",U1>0.8)}function y9(){if(o8||!X1)return;let{center:$,radii:J}=bX.brain,Q=(q,M=0)=>[$[0]+Math.cos(q)*J[0]*(M%2?0.9:1),$[1]+Math.sin(q*2+M*0.5)*0.18,$[2]+Math.sin(q)*J[2]],Z=IJ.map((q,M)=>Q(M*Math.PI*2/y6.length+zJ*0.22,M)),W=X1.projectPoints(Z),K=W.map((q)=>q.depth),X=Math.min(...K),H=Math.max(...K);W.forEach((q,M)=>{let O=(q.depth-X)/Math.max(0.001,H-X),F=0.78+O*0.26;y6[M].style.left=`${q.x}px`,y6[M].style.top=`${q.y}px`,y6[M].style.transform=`translate(-50%,-50%) scale(${F})`,y6[M].style.zIndex=String(Math.round(O*100)+1),y6[M].style.opacity=String(0.55+O*0.45)});let Y=X1.projectPoints(Array.from({length:65},(q,M)=>Q(M/64*Math.PI*2+zJ*0.22))),U=D7.querySelector("svg");U.setAttribute("viewBox",`0 0 ${x6.clientWidth} ${x6.clientHeight}`),U.querySelector("path").setAttribute("d",Y.map((q,M)=>`${M?"L":"M"}${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join(" "));let G=X1.projectPoints([$])[0],E=D7.querySelector(".orbit-center");E.style.left=`${G.x}px`,E.style.top=`${G.y}px`,document.body.dataset.orbitPaused=String(V7||l6||C1)}function w8(){if(!p6&&!document.hidden)p6=requestAnimationFrame(IM)}function IM($){if(p6=0,A9!==null){let Z=w9(($-A9)/360);if(S9(h6(Z)),Z<1)w8();else A9=null,U5=!0,x9("contact");return}let J=null,Q=s8?Math.min(($-s8)/1000,0.04):0;if(s8=$,B1==="assembling"&&!I1){let Z=v6;v6=Math.min(v6+Q,LJ);let W=h6(1-v6/LJ);if(S9(W,"appear"),X1.setView({...n8,yaw:n8.yaw-0.055*W,pitch:n8.pitch+0.036*W,offsetY:n8.offsetY-0.055*W,immediate:!0}),D8?.drawGuides?.(X1),Z<HY&&v6>=HY&&!BJ)CM();if(v6===LJ)DY()}if((B1==="head"||B1==="assembling")&&!V1&&!I1&&!C1){let Z=D8?.getAttention?.(),W=Z?{...Z,present:!0,tracking:!0}:{x:NY,y:RY,present:MY,tracking:N5},K=kM.update(Q,W);X1.setGaze(K),document.body.dataset.attention=K.attention}if(B1==="head"&&!I1)D8?.updateEffect?.(X1,$);if(V1){let Z=w9(($-V1.started)/V1.duration);if(U1=VJ(V1.from,V1.to,h6(Z)),Z===1){let W=V1.to;U1=W,V1=null,n7(W?"projects":"head"),g6.textContent=W?"Проекты открыты.":"Исходный вид головы восстановлен.",J=W?PJ:_7}CJ(),J?.focus({preventScroll:!0})}if(U1>0.4&&!V7&&!l6&&!C1)zJ+=Q;if(U1>0.01)y9();if(!I1&&(V1||B1==="assembling"||B1==="head"&&!C1||B1==="projects"&&!o8&&!V7&&!l6&&!C1))w8()}function b9($){if($===1&&(B1==="loading"||B1==="assembling")){BJ=!0;return}if(!i8&&$===0&&U1>0){if(location.hash==="#projects")history.replaceState(null,"",location.pathname+location.search);U1=0,V1=null,CJ(),n7("loading"),_7.disabled=!0,h9();return}if(!i8||$===U1&&!V1)return;if($===0&&location.hash==="#projects")history.replaceState(null,"",location.pathname+location.search);if($===1&&U1===0)AJ={...X1.getStats().view},X1.setGaze();V1={from:U1,to:$,started:performance.now(),duration:zM*Math.max(0.3,Math.abs($-U1))},n7($?"entering":"returning"),c7.inert=!0,c7.classList.remove("is-active"),g6.textContent=$?"Камера поднимается над головой. Символы рассеиваются.":"Возвращаемся к исходной модели.",s8=0,CJ(),w8()}_7.addEventListener("click",F5);PJ.addEventListener("click",O5);D7.addEventListener("pointerenter",()=>{V7=!0,y9()});D7.addEventListener("pointerleave",($)=>{if($.relatedTarget?.closest?.(".project"))return;V7=!1,s8=0,w8()});D7.addEventListener("focusin",()=>{l6=!0,y9()});D7.addEventListener("focusout",($)=>{if(!D7.contains($.relatedTarget))l6=!1,s8=0,w8()});addEventListener("keydown",($)=>{if($.key==="Escape"&&I1){$.preventDefault(),SJ();return}if($.key==="Escape"&&U1>0)$.preventDefault(),O5()});addEventListener("resize",()=>{LY(),y9(),w8()});document.addEventListener("visibilitychange",()=>{if(document.hidden)v9(),Y5=performance.now(),cancelAnimationFrame(p6),p6=0;else{if(V1&&Y5)V1.started+=performance.now()-Y5;s8=0,w8()}});function DY(){if(n7("head"),_7.disabled=!1,g6.textContent="Модель готова. GO открывает проекты.",BJ)BJ=!1,b9(1)}function h9(){return YY??=Promise.resolve().then(()=>{if(X1=hX(x6,{modelUrl:new URL("./sculpt/head-study.glb?v=studio-1",import.meta.url).href,expressionsUrl:new URL("./sculpt/expressions.json",import.meta.url).href,cellSize:OY?4.7:5.4,ink:"#edeee5",view:n8,autoRotate:!1,pointerRotation:!1,onState($){document.body.dataset.moduleState=typeof $==="string"?$:String($?.state??$?.type??"updated")}}),!C1)S9(1,"appear");return X1.ready.then(()=>{if(i8=!0,document.body.dataset.ready="true",c1("load-note").hidden=!0,D8?.drawGuides?.(X1),location.hash==="#projects"){if(B1!=="projects")wJ()}else if(C1)DY();else n7("assembling"),g6.textContent="Фигура собирается.";s8=0,w8(),kY()})}).catch(($)=>{n7("error"),c1("load-note").textContent="Не удалось загрузить модель.",g6.textContent="Ошибка загрузки модели.",_7.disabled=!o8,console.error($)}),YY}window.headDemo={go:F5,back:O5,getState:()=>({ready:i8,phase:B1,progress:U1,hoverPaused:V7,focused:l6,orbitTime:zJ,stats:X1?.getStats()})};addEventListener("pagehide",()=>{v9(),cancelAnimationFrame(p6),TJ?.setActive(!1),X1?.dispose()},{once:!0});var b6=c1("document-dialog"),T8=c1("document-content"),UY=L7.get("paasStyle")==="live",GY=L7.get("paasWorkflow"),PM=L7.get("paasStack"),AM=new Set(["cover","capsule","caption","toolbar"]),EY=L7.get("contactStyle"),TM=AM.has(EY)?EY:"",R5=document.querySelector(".masthead"),DJ=R5.querySelector(".brand");DJ.href=location.pathname+location.search;function M5(){b6.style.setProperty("--studio-header-edge",`${Math.ceil(R5.getBoundingClientRect().bottom)}px`)}var wM=new ResizeObserver(M5);wM.observe(R5);addEventListener("resize",M5);var G5=($)=>String($??"").replace(/[&<>"']/g,(J)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[J]),_Y=($)=>`<p>${G5($)}</p>`,VY=`<a class="document-cta section-glass" href="${eZ}" target="_blank" rel="noopener">Обсудить задачу в Telegram</a>`;function SM($,J,Q,Z=VY){return`<article class="section-page">
    <header class="section-intro">
      <h1 id="document-title">${G5($)}</h1>
      ${J?`<p>${G5(J)}</p>`:""}
    </header>
    <div class="section-flow">${Q}${Z}</div>
  </article>`}var O7,jM={paas:[vM,LH],llmops:[BH,zH],operations:[TH,wH],"delivery-platform":[bH,yH]};function fM($){let J=[...$.querySelectorAll('[role="tab"]')],Q=J.map((H)=>c1(H.getAttribute("aria-controls"))),Z=$.querySelector(".paas-deck__pages");$.querySelector(".paas-deck__back").addEventListener("click",SJ);let W=[...jM[$.dataset.caseDeck],OH].map((H)=>H($,C1)),K=0;W[K]?.start();function X(H){if(H===K)return;let Y=Q[H];W[K]?.stop(),Y.style.setProperty("--paas-entry-offset",H>K?"24px":"-24px"),Q[K].hidden=!0,Y.hidden=!1,J[K].tabIndex=-1,J[K].setAttribute("aria-selected","false"),J[H].tabIndex=0,J[H].setAttribute("aria-selected","true"),K=H,Z.scrollTop=0,W[K]?.start()}return J.forEach((H,Y)=>{H.addEventListener("click",()=>X(Y)),H.addEventListener("keydown",(U)=>{let G={ArrowLeft:(Y+J.length-1)%J.length,ArrowRight:(Y+1)%J.length,Home:0,End:J.length-1}[U.key];if(G===void 0)return;U.preventDefault(),X(G),J[G].focus({preventScroll:!0})})}),()=>W[K]?.stop()}function vM($){let J=$.querySelector("[data-paas-launch]"),Q=J.querySelector(".paas-launch__canvas"),Z=J.querySelector(".paas-launch__replay"),W,K;function X(){if(W?.(),W=UH(J,C1),!Q||K)return;Q.hidden=!1,K=F7(Q,C1),Q.hidden=!K,J.querySelector(".paas-launch__art").hidden=Boolean(K)}if(Z)Z.hidden=C1,Z.addEventListener("click",X);return{start:X,stop(){W?.(),K?.(),K=null}}}addEventListener("pagehide",()=>O7?.(),{once:!0});function OJ($,J,Q,Z=""){return`<article class="section-page paas-case${Z}" data-case-deck="${$}">
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
  </article>`}function yM($){if($.id==="llmops")return OJ("llmops","LLMOps",VH());if($.id==="operations")return OJ($.id,"IaC и мониторинг",AH());if($.id==="delivery-platform")return OJ($.id,RJ,vH());if($.id==="paas"){let J=[["Подключить репозиторий","Выбрать проект в GitHub или GitLab."],["Собрать приложение","Платформа определяет стек и устанавливает зависимости."],["Запустить в облаке","Платформа разворачивает сервис и возвращает URL и логи."]];return OJ("paas","PaaS",[{id:"overview",label:"Обзор",layout:"paas-hero",markup:`
        <div class="paas-hero__copy">
          <p class="paas-hero__label">Проекты / PaaS · On-premises</p>
          <h1 id="document-title">Запуск приложений в облаке</h1>
          <div class="paas-hero__result">
            <p class="paas-hero__label">Результат</p>
            <p>Платформа разворачивается в инфраструктуре компании и автоматизирует запуск приложений. Команды разработки быстрее получают ссылку на работающий сервис и доступ к логам.</p>
          </div>
        </div>
        ${YH(UY)}`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:`
        ${["sequence","trace"].includes(GY)?MH(GY):`<h2>Как проходит запуск</h2>
        <p>Разработчик нажимает «Запустить». Платформа сама готовит окружение.</p>
        <ol class="case-steps">${J.map(([Q,Z])=>`<li><strong>${Q}</strong>${_Y(Z)}</li>`).join("")}</ol>`}`},{id:"stack",label:"Технологии",layout:"paas-details",markup:FH(PM)}],UY?" paas-case--live":"")}return null}function bM($){if($.startsWith("case-")){let W=IJ.find((K)=>K.id===$.slice(5));if(!W)return null;return yM(W)}let J="",Q="",Z="";if($==="services")return cH;else if($==="about")return gH;else if($==="process")return nH;else if($==="research")return ZY;else if($==="blog")return WY;else if($==="contact")return`<article class="contact-view"><h1 id="document-title" class="sr-only">Контакты</h1><div class="contact-layout">
   <div class="contact-qr"><canvas role="img" aria-label="QR для Telegram"></canvas></div>
   <div class="contact-channels"><a class="contact-channel section-glass" href="${eZ}" target="_blank" rel="noopener"><span>Telegram</span><strong>@wr0ngn4m3</strong></a>
   <a class="contact-channel section-glass" href="mailto:wwr0ngn4m3@gmail.com"><span>Почта</span><strong>wwr0ngn4m3@gmail.com</strong></a></div>
 </div></article>`;else if($==="resume")J=l9.resume.fullName,Q=l9.resume.headline,Z=_Y(l9.resume.summary)+`<a class="document-cta" href="/${f9}/experience">Полное резюме</a>`;else if($==="more")J="Меню",Z=`<div class="directory section-glass">${qY}</div>`;else return null;return SM(J,Q,Z,$==="more"?"":VY)}function x9($,J=!1){if(I1&&!J&&location.hash===`#${$}`)return;let Q=bM($);if(!Q)return;if(O7?.(),O7=null,!I1)FY=document.activeElement;if(b6.dataset.contactStyle=$==="contact"?TM:"",T8.innerHTML=Q,V7=!0,I1=!0,TJ?.setActive(!1),v9(),X1)D8?.clearEffect?.(X1);document.body.dataset.documentOpen="",M5(),b6.hidden=!1,document.querySelector(".experience").inert=!0,b6.scrollTop=0,T8.scrollTop=0;let Z=c1("document-title");if(Z.tabIndex=-1,Z.focus({preventScroll:!0}),$==="contact")HH(T8.querySelector("canvas"),b6,C1);let W=T8.querySelector("[data-case-deck]");if(T8.querySelector("[data-studio-back]")?.addEventListener("click",SJ),W)O7=fM(W);else if($==="about")O7=pH(T8.querySelector(".studio-about__mark"),C1);else if(T8.firstElementChild.matches(".studio-screen")){let K=T8.firstElementChild,X=sH(K,C1),H=$==="blog"?KY(K,C1):null;O7=()=>{X(),H?.()}}if(!J)history.pushState({wwnPanel:!0},"",`#${$}`)}function j9({restoreCover:$=!0}={}){if(O7?.(),O7=null,U5){if(U5=!1,$)S9(0)}if(b6.hidden=!0,delete document.body.dataset.documentOpen,I1=!1,TJ?.setActive(B1==="projects"),document.querySelector(".experience").inert=!1,V7=!1,s8=0,$){if(location.hash!=="#projects")h9();FY?.focus({preventScroll:!0})}w8()}async function hM(){let $=T8.firstElementChild;if(!i8&&!o8){if(await h9(),!i8)return;if(!I1||T8.firstElementChild!==$)return}wJ(),j9({restoreCover:!1}),history.pushState({wwnPanel:!0},"","#projects"),PJ.focus({preventScroll:!0})}function F5(){if(location.hash==="#projects")return;if(I1){hM();return}if(history.pushState({wwnPanel:!0},"","#projects"),!i8&&o8)wJ();else b9(1)}function O5(){if(history.state?.wwnPanel&&location.hash==="#projects")history.back();else b9(0)}function wJ(){AJ=n8,V1=null,U1=1,_7.disabled=!1,n7("projects"),CJ(),y9(),g6.textContent="Проекты открыты."}function SJ(){if(history.state?.wwnPanel)history.back();else j9(),history.replaceState(null,"",location.pathname+location.search)}c1("close-document").addEventListener("click",SJ);DJ.addEventListener("click",($)=>{if($.button||$.metaKey||$.ctrlKey||$.shiftKey||$.altKey)return;if($.preventDefault(),location.hash)history.pushState(null,"",DJ.href);if(I1)j9({restoreCover:U1===0});if(DJ.focus({preventScroll:!0}),U1>0||V1)b9(0)});document.addEventListener("click",($)=>{let J=$.target.closest("[data-section]");if(A9!==null)return;if(J)if(J.dataset.section==="contact"&&B1==="head"&&!I1&&!C1){if(v9(),X1)D8?.clearEffect?.(X1);A9=performance.now(),w8()}else x9(J.dataset.section);else if($.target.closest("[data-open-projects]"))F5()});function BY(){let $=location.hash.slice(1);if($==="case-resilience")history.replaceState(null,"","#projects");if(location.hash==="#projects"){if(I1)j9();if((i8||o8)&&B1!=="projects")wJ()}else if($)x9(decodeURIComponent($),!0);else{if(I1)j9();if(U1>0||V1)b9(0);else h9()}}addEventListener("popstate",BY);if(E5)document.addEventListener("click",($)=>{let J=$.target.closest(".cover-locale");if(J)J.href=`/${_M}${location.hash}`});var zY;if(location.hash)BY();if(!I1&&B1!=="projects")h9();function kY(){if(C1)return;zY=setTimeout(async()=>{if(i8&&B1==="head"&&!I1&&!document.hidden)await X1.blink().catch(()=>{});kY()},5000+Math.random()*3000)}addEventListener("pagehide",()=>clearTimeout(zY),{once:!0});var CY=x6.closest(".experience");CY.addEventListener("pointermove",($)=>{if($.pointerType==="touch")return;let J=x6.getBoundingClientRect();NY=VJ(-1,1,w9(($.clientX-J.left)/J.width)),RY=VJ(-1,1,w9(($.clientY-J.top)/J.height)),MY=!0,N5=!0});CY.addEventListener("pointerleave",()=>{N5=!1});
