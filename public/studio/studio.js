var u9={resume:{fullName:"Величко Иван Сергеевич",headline:"Fullstack-разработка, инфраструктура и менеджмент",summary:"Разрабатываю веб-сервисы, ускоряю доставку изменений и обеспечиваю стабильную работу инфраструктуры. Объединяю fullstack-разработку, DevOps и координацию frontend-команды: от пользовательского интерфейса до деплоя и сопровождения. Автоматизирую ручные операции, чтобы команда тратила меньше времени на рутину и сбои."}};var o6=($,J,Q)=>Math.max(J,Math.min(Q,$)),z5=($)=>{let J=o6($,0,1);return J*J*J*(J*(J*6-15)+10)};function B5({random:$=Math.random}={}){let J=0,Q=7+$()*4,Z=null,W=!1,K=0,X=0,H=0,Y=0,U=0,G=0,E=[{time:0,x:0,y:0,presence:0}];function q(F,{x:O=0,y:M=0,present:N=!1,tracking:R=!1}={}){if(F=o6(F,0,0.07),J+=F,F>0){E.push({time:J,x:o6(O,-1,1),y:o6(M,-1,1),presence:N?1:0});let C=J-0.16;while(E.length>1&&E[1].time<=C)E.shift();let I=E[0],S=E[1]??I,f=o6((C-I.time)/Math.max(0.0001,S.time-I.time),0,1),g=1-Math.exp(-F*4);Y+=(I.x+(S.x-I.x)*f-Y)*g,U+=(I.y+(S.y-I.y)*f-U)*g,G+=(I.presence+(S.presence-I.presence)*f-G)*g}if(R)Z=null;if(W&&!R)Q=J+7+$()*4;if(W=R,!R&&!Z&&J>=Q)Z={start:J,yaw:($()<0.5?-1:1)*(0.05+$()*0.04),pitch:($()-0.5)*0.04,roll:($()-0.5)*0.02,hold:0.65+$()*0.65};let _=0;if(Z){let C=J-Z.start;if(_=z5(C/0.85)*(1-z5((C-0.85-Z.hold)/1.15)),C>=2+Z.hold)Z=null,Q=J+8+$()*7}let D=G*(1-_*0.75),k=R?0:1,T=Y>0?0.136:0.095,P=U>0?0.078:0.048,A=Y*T*D+(Z?.yaw??0)*_+Math.sin(J*0.53)*0.009*k,y=U*P*D+(Z?.pitch??0)*_+Math.sin(J*1.04)*0.006*k,z=(Z?.roll??0)*_+Math.sin(J*0.43)*0.008*k,L=(C,I,S)=>C+o6((I-C)*(1-Math.exp(-F*2.6)),-F*S,F*S);return K=L(K,A,0.15),X=L(X,y,0.1),H=L(H,z,0.08),{yaw:K,pitch:X,roll:H,attention:Z?"glance":R?"cursor":"rest"}}return{update:q}}var XW="180";var HW=0,UQ=1,YW=2;var GQ=1,UW=2,B8=3,Z6=0,a1=1,H8=2,W6=0,$9=1,EQ=2,qQ=3,NQ=4,GW=5,q7=100,EW=101,qW=102,NW=103,RW=104,FW=200,OW=201,MW=202,LW=203,DW=204,_W=205,VW=206,zW=207,BW=208,kW=209,CW=210,IW=211,PW=212,AW=213,TW=214,F$=0,O$=1,M$=2,J9=3,L$=4,D$=5,_$=6,V$=7,wW=0,SW=1,jW=2,l8=0,fW=1,vW=2,yW=3,bW=4,hW=5,xW=6,gW=7;var N7=301,w6=302,z$=303,B$=304,Q9=306,R7=1000,k$=1001,C$=1002,u8=1003,I$=1004;var S6=1005;var p1=1006,F7=1007;var m8=1008;var K6=1009,pW=1010,lW=1011,Z9=1012,RQ=1013,O7=1014,X6=1015,W9=1016,FQ=1017,OQ=1018,M7=1020,uW=35902,mW=35899,dW=1021,cW=1022,k8=1023,P$=1026,K9=1027,nW=1028,MQ=1029,sW=1030,LQ=1031;var DQ=1033,A$=33776,T$=33777,w$=33778,S$=33779,_Q=35840,VQ=35841,zQ=35842,BQ=35843,kQ=36196,CQ=37492,IQ=37496,PQ=37808,AQ=37809,TQ=37810,wQ=37811,SQ=37812,jQ=37813,fQ=37814,vQ=37815,yQ=37816,bQ=37817,hQ=37818,xQ=37819,gQ=37820,pQ=37821,lQ=36492,uQ=36494,mQ=36495,dQ=36283,cQ=36284,nQ=36285,sQ=36286;var oQ=2300,j$=2301;var iQ=0,X9=1,L7=2;var oW=3201;var iW=0,aW=1,j6="",C8="srgb",h1="srgb-linear",aQ="linear",H1="srgb";var rW=512,tW=513,eW=514,rQ=515,$K=516,JK=517,QK=518,ZK=519;var tQ="300 es",eQ=2000;class H6{addEventListener($,J){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[$]===void 0)Q[$]=[];if(Q[$].indexOf(J)===-1)Q[$].push(J)}hasEventListener($,J){let Q=this._listeners;if(Q===void 0)return!1;return Q[$]!==void 0&&Q[$].indexOf(J)!==-1}removeEventListener($,J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[$];if(Z!==void 0){let W=Z.indexOf(J);if(W!==-1)Z.splice(W,1)}}dispatchEvent($){let J=this._listeners;if(J===void 0)return;let Q=J[$.type];if(Q!==void 0){$.target=this;let Z=Q.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,$);$.target=null}}}var S1=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],k5=1234567,t7=Math.PI/180,A6=180/Math.PI;function R8(){let $=Math.random()*4294967295|0,J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(S1[$&255]+S1[$>>8&255]+S1[$>>16&255]+S1[$>>24&255]+"-"+S1[J&255]+S1[J>>8&255]+"-"+S1[J>>16&15|64]+S1[J>>24&255]+"-"+S1[Q&63|128]+S1[Q>>8&255]+"-"+S1[Q>>16&255]+S1[Q>>24&255]+S1[Z&255]+S1[Z>>8&255]+S1[Z>>16&255]+S1[Z>>24&255]).toLowerCase()}function c0($,J,Q){return Math.max(J,Math.min(Q,$))}function $Z($,J){return($%J+J)%J}function SY($,J,Q,Z,W){return Z+($-J)*(W-Z)/(Q-J)}function jY($,J,Q){if($!==J)return(Q-$)/(J-$);else return 0}function e7($,J,Q){return(1-Q)*$+Q*J}function fY($,J,Q,Z){return e7($,J,1-Math.exp(-Q*Z))}function vY($,J=1){return J-Math.abs($Z($,J*2)-J)}function yY($,J,Q){if($<=J)return 0;if($>=Q)return 1;return $=($-J)/(Q-J),$*$*(3-2*$)}function bY($,J,Q){if($<=J)return 0;if($>=Q)return 1;return $=($-J)/(Q-J),$*$*$*($*($*6-15)+10)}function hY($,J){return $+Math.floor(Math.random()*(J-$+1))}function xY($,J){return $+Math.random()*(J-$)}function gY($){return $*(0.5-Math.random())}function pY($){if($!==void 0)k5=$;let J=k5+=1831565813;return J=Math.imul(J^J>>>15,J|1),J^=J+Math.imul(J^J>>>7,J|61),((J^J>>>14)>>>0)/4294967296}function lY($){return $*t7}function uY($){return $*A6}function mY($){return($&$-1)===0&&$!==0}function dY($){return Math.pow(2,Math.ceil(Math.log($)/Math.LN2))}function cY($){return Math.pow(2,Math.floor(Math.log($)/Math.LN2))}function nY($,J,Q,Z,W){let{cos:K,sin:X}=Math,H=K(Q/2),Y=X(Q/2),U=K((J+Z)/2),G=X((J+Z)/2),E=K((J-Z)/2),q=X((J-Z)/2),F=K((Z-J)/2),O=X((Z-J)/2);switch(W){case"XYX":$.set(H*G,Y*E,Y*q,H*U);break;case"YZY":$.set(Y*q,H*G,Y*E,H*U);break;case"ZXZ":$.set(Y*E,Y*q,H*G,H*U);break;case"XZX":$.set(H*G,Y*O,Y*F,H*U);break;case"YXY":$.set(Y*F,H*G,Y*O,H*U);break;case"ZYZ":$.set(Y*O,Y*F,H*G,H*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function N8($,J){switch(J.constructor){case Float32Array:return $;case Uint32Array:return $/4294967295;case Uint16Array:return $/65535;case Uint8Array:return $/255;case Int32Array:return Math.max($/2147483647,-1);case Int16Array:return Math.max($/32767,-1);case Int8Array:return Math.max($/127,-1);default:throw Error("Invalid component type.")}}function $1($,J){switch(J.constructor){case Float32Array:return $;case Uint32Array:return Math.round($*4294967295);case Uint16Array:return Math.round($*65535);case Uint8Array:return Math.round($*255);case Int32Array:return Math.round($*2147483647);case Int16Array:return Math.round($*32767);case Int8Array:return Math.round($*127);default:throw Error("Invalid component type.")}}var F1={DEG2RAD:t7,RAD2DEG:A6,generateUUID:R8,clamp:c0,euclideanModulo:$Z,mapLinear:SY,inverseLerp:jY,lerp:e7,damp:fY,pingpong:vY,smoothstep:yY,smootherstep:bY,randInt:hY,randFloat:xY,randFloatSpread:gY,seededRandom:pY,degToRad:lY,radToDeg:uY,isPowerOfTwo:mY,ceilPowerOfTwo:dY,floorPowerOfTwo:cY,setQuaternionFromProperEuler:nY,normalize:$1,denormalize:N8};class u0{constructor($=0,J=0){u0.prototype.isVector2=!0,this.x=$,this.y=J}get width(){return this.x}set width($){this.x=$}get height(){return this.y}set height($){this.y=$}set($,J){return this.x=$,this.y=J,this}setScalar($){return this.x=$,this.y=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y)}copy($){return this.x=$.x,this.y=$.y,this}add($){return this.x+=$.x,this.y+=$.y,this}addScalar($){return this.x+=$,this.y+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this}sub($){return this.x-=$.x,this.y-=$.y,this}subScalar($){return this.x-=$,this.y-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this}multiply($){return this.x*=$.x,this.y*=$.y,this}multiplyScalar($){return this.x*=$,this.y*=$,this}divide($){return this.x/=$.x,this.y/=$.y,this}divideScalar($){return this.multiplyScalar(1/$)}applyMatrix3($){let J=this.x,Q=this.y,Z=$.elements;return this.x=Z[0]*J+Z[3]*Q+Z[6],this.y=Z[1]*J+Z[4]*Q+Z[7],this}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot($){return this.x*$.x+this.y*$.y}cross($){return this.x*$.y-this.y*$.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo($){let J=Math.sqrt(this.lengthSq()*$.lengthSq());if(J===0)return Math.PI/2;let Q=this.dot($)/J;return Math.acos(c0(Q,-1,1))}distanceTo($){return Math.sqrt(this.distanceToSquared($))}distanceToSquared($){let J=this.x-$.x,Q=this.y-$.y;return J*J+Q*Q}manhattanDistanceTo($){return Math.abs(this.x-$.x)+Math.abs(this.y-$.y)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this}equals($){return $.x===this.x&&$.y===this.y}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this}rotateAround($,J){let Q=Math.cos(J),Z=Math.sin(J),W=this.x-$.x,K=this.y-$.y;return this.x=W*Q-K*Z+$.x,this.y=W*Z+K*Q+$.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class O8{constructor($=0,J=0,Q=0,Z=1){this.isQuaternion=!0,this._x=$,this._y=J,this._z=Q,this._w=Z}static slerpFlat($,J,Q,Z,W,K,X){let H=Q[Z+0],Y=Q[Z+1],U=Q[Z+2],G=Q[Z+3],E=W[K+0],q=W[K+1],F=W[K+2],O=W[K+3];if(X===0){$[J+0]=H,$[J+1]=Y,$[J+2]=U,$[J+3]=G;return}if(X===1){$[J+0]=E,$[J+1]=q,$[J+2]=F,$[J+3]=O;return}if(G!==O||H!==E||Y!==q||U!==F){let M=1-X,N=H*E+Y*q+U*F+G*O,R=N>=0?1:-1,_=1-N*N;if(_>Number.EPSILON){let k=Math.sqrt(_),T=Math.atan2(k,N*R);M=Math.sin(M*T)/k,X=Math.sin(X*T)/k}let D=X*R;if(H=H*M+E*D,Y=Y*M+q*D,U=U*M+F*D,G=G*M+O*D,M===1-X){let k=1/Math.sqrt(H*H+Y*Y+U*U+G*G);H*=k,Y*=k,U*=k,G*=k}}$[J]=H,$[J+1]=Y,$[J+2]=U,$[J+3]=G}static multiplyQuaternionsFlat($,J,Q,Z,W,K){let X=Q[Z],H=Q[Z+1],Y=Q[Z+2],U=Q[Z+3],G=W[K],E=W[K+1],q=W[K+2],F=W[K+3];return $[J]=X*F+U*G+H*q-Y*E,$[J+1]=H*F+U*E+Y*G-X*q,$[J+2]=Y*F+U*q+X*E-H*G,$[J+3]=U*F-X*G-H*E-Y*q,$}get x(){return this._x}set x($){this._x=$,this._onChangeCallback()}get y(){return this._y}set y($){this._y=$,this._onChangeCallback()}get z(){return this._z}set z($){this._z=$,this._onChangeCallback()}get w(){return this._w}set w($){this._w=$,this._onChangeCallback()}set($,J,Q,Z){return this._x=$,this._y=J,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy($){return this._x=$.x,this._y=$.y,this._z=$.z,this._w=$.w,this._onChangeCallback(),this}setFromEuler($,J=!0){let{_x:Q,_y:Z,_z:W,_order:K}=$,X=Math.cos,H=Math.sin,Y=X(Q/2),U=X(Z/2),G=X(W/2),E=H(Q/2),q=H(Z/2),F=H(W/2);switch(K){case"XYZ":this._x=E*U*G+Y*q*F,this._y=Y*q*G-E*U*F,this._z=Y*U*F+E*q*G,this._w=Y*U*G-E*q*F;break;case"YXZ":this._x=E*U*G+Y*q*F,this._y=Y*q*G-E*U*F,this._z=Y*U*F-E*q*G,this._w=Y*U*G+E*q*F;break;case"ZXY":this._x=E*U*G-Y*q*F,this._y=Y*q*G+E*U*F,this._z=Y*U*F+E*q*G,this._w=Y*U*G-E*q*F;break;case"ZYX":this._x=E*U*G-Y*q*F,this._y=Y*q*G+E*U*F,this._z=Y*U*F-E*q*G,this._w=Y*U*G+E*q*F;break;case"YZX":this._x=E*U*G+Y*q*F,this._y=Y*q*G+E*U*F,this._z=Y*U*F-E*q*G,this._w=Y*U*G-E*q*F;break;case"XZY":this._x=E*U*G-Y*q*F,this._y=Y*q*G-E*U*F,this._z=Y*U*F+E*q*G,this._w=Y*U*G+E*q*F;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(J===!0)this._onChangeCallback();return this}setFromAxisAngle($,J){let Q=J/2,Z=Math.sin(Q);return this._x=$.x*Z,this._y=$.y*Z,this._z=$.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix($){let J=$.elements,Q=J[0],Z=J[4],W=J[8],K=J[1],X=J[5],H=J[9],Y=J[2],U=J[6],G=J[10],E=Q+X+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-H)*q,this._y=(W-Y)*q,this._z=(K-Z)*q}else if(Q>X&&Q>G){let q=2*Math.sqrt(1+Q-X-G);this._w=(U-H)/q,this._x=0.25*q,this._y=(Z+K)/q,this._z=(W+Y)/q}else if(X>G){let q=2*Math.sqrt(1+X-Q-G);this._w=(W-Y)/q,this._x=(Z+K)/q,this._y=0.25*q,this._z=(H+U)/q}else{let q=2*Math.sqrt(1+G-Q-X);this._w=(K-Z)/q,this._x=(W+Y)/q,this._y=(H+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors($,J){let Q=$.dot(J)+1;if(Q<0.00000001)if(Q=0,Math.abs($.x)>Math.abs($.z))this._x=-$.y,this._y=$.x,this._z=0,this._w=Q;else this._x=0,this._y=-$.z,this._z=$.y,this._w=Q;else this._x=$.y*J.z-$.z*J.y,this._y=$.z*J.x-$.x*J.z,this._z=$.x*J.y-$.y*J.x,this._w=Q;return this.normalize()}angleTo($){return 2*Math.acos(Math.abs(c0(this.dot($),-1,1)))}rotateTowards($,J){let Q=this.angleTo($);if(Q===0)return this;let Z=Math.min(1,J/Q);return this.slerp($,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot($){return this._x*$._x+this._y*$._y+this._z*$._z+this._w*$._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let $=this.length();if($===0)this._x=0,this._y=0,this._z=0,this._w=1;else $=1/$,this._x=this._x*$,this._y=this._y*$,this._z=this._z*$,this._w=this._w*$;return this._onChangeCallback(),this}multiply($){return this.multiplyQuaternions(this,$)}premultiply($){return this.multiplyQuaternions($,this)}multiplyQuaternions($,J){let{_x:Q,_y:Z,_z:W,_w:K}=$,X=J._x,H=J._y,Y=J._z,U=J._w;return this._x=Q*U+K*X+Z*Y-W*H,this._y=Z*U+K*H+W*X-Q*Y,this._z=W*U+K*Y+Q*H-Z*X,this._w=K*U-Q*X-Z*H-W*Y,this._onChangeCallback(),this}slerp($,J){if(J===0)return this;if(J===1)return this.copy($);let Q=this._x,Z=this._y,W=this._z,K=this._w,X=K*$._w+Q*$._x+Z*$._y+W*$._z;if(X<0)this._w=-$._w,this._x=-$._x,this._y=-$._y,this._z=-$._z,X=-X;else this.copy($);if(X>=1)return this._w=K,this._x=Q,this._y=Z,this._z=W,this;let H=1-X*X;if(H<=Number.EPSILON){let q=1-J;return this._w=q*K+J*this._w,this._x=q*Q+J*this._x,this._y=q*Z+J*this._y,this._z=q*W+J*this._z,this.normalize(),this}let Y=Math.sqrt(H),U=Math.atan2(Y,X),G=Math.sin((1-J)*U)/Y,E=Math.sin(J*U)/Y;return this._w=K*G+this._w*E,this._x=Q*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions($,J,Q){return this.copy($).slerp(J,Q)}random(){let $=2*Math.PI*Math.random(),J=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),W=Math.sqrt(Q);return this.set(Z*Math.sin($),Z*Math.cos($),W*Math.sin(J),W*Math.cos(J))}equals($){return $._x===this._x&&$._y===this._y&&$._z===this._z&&$._w===this._w}fromArray($,J=0){return this._x=$[J],this._y=$[J+1],this._z=$[J+2],this._w=$[J+3],this._onChangeCallback(),this}toArray($=[],J=0){return $[J]=this._x,$[J+1]=this._y,$[J+2]=this._z,$[J+3]=this._w,$}fromBufferAttribute($,J){return this._x=$.getX(J),this._y=$.getY(J),this._z=$.getZ(J),this._w=$.getW(J),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange($){return this._onChangeCallback=$,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor($=0,J=0,Q=0){x.prototype.isVector3=!0,this.x=$,this.y=J,this.z=Q}set($,J,Q){if(Q===void 0)Q=this.z;return this.x=$,this.y=J,this.z=Q,this}setScalar($){return this.x=$,this.y=$,this.z=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setZ($){return this.z=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy($){return this.x=$.x,this.y=$.y,this.z=$.z,this}add($){return this.x+=$.x,this.y+=$.y,this.z+=$.z,this}addScalar($){return this.x+=$,this.y+=$,this.z+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this.z=$.z+J.z,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this.z+=$.z*J,this}sub($){return this.x-=$.x,this.y-=$.y,this.z-=$.z,this}subScalar($){return this.x-=$,this.y-=$,this.z-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this.z=$.z-J.z,this}multiply($){return this.x*=$.x,this.y*=$.y,this.z*=$.z,this}multiplyScalar($){return this.x*=$,this.y*=$,this.z*=$,this}multiplyVectors($,J){return this.x=$.x*J.x,this.y=$.y*J.y,this.z=$.z*J.z,this}applyEuler($){return this.applyQuaternion(C5.setFromEuler($))}applyAxisAngle($,J){return this.applyQuaternion(C5.setFromAxisAngle($,J))}applyMatrix3($){let J=this.x,Q=this.y,Z=this.z,W=$.elements;return this.x=W[0]*J+W[3]*Q+W[6]*Z,this.y=W[1]*J+W[4]*Q+W[7]*Z,this.z=W[2]*J+W[5]*Q+W[8]*Z,this}applyNormalMatrix($){return this.applyMatrix3($).normalize()}applyMatrix4($){let J=this.x,Q=this.y,Z=this.z,W=$.elements,K=1/(W[3]*J+W[7]*Q+W[11]*Z+W[15]);return this.x=(W[0]*J+W[4]*Q+W[8]*Z+W[12])*K,this.y=(W[1]*J+W[5]*Q+W[9]*Z+W[13])*K,this.z=(W[2]*J+W[6]*Q+W[10]*Z+W[14])*K,this}applyQuaternion($){let J=this.x,Q=this.y,Z=this.z,W=$.x,K=$.y,X=$.z,H=$.w,Y=2*(K*Z-X*Q),U=2*(X*J-W*Z),G=2*(W*Q-K*J);return this.x=J+H*Y+K*G-X*U,this.y=Q+H*U+X*Y-W*G,this.z=Z+H*G+W*U-K*Y,this}project($){return this.applyMatrix4($.matrixWorldInverse).applyMatrix4($.projectionMatrix)}unproject($){return this.applyMatrix4($.projectionMatrixInverse).applyMatrix4($.matrixWorld)}transformDirection($){let J=this.x,Q=this.y,Z=this.z,W=$.elements;return this.x=W[0]*J+W[4]*Q+W[8]*Z,this.y=W[1]*J+W[5]*Q+W[9]*Z,this.z=W[2]*J+W[6]*Q+W[10]*Z,this.normalize()}divide($){return this.x/=$.x,this.y/=$.y,this.z/=$.z,this}divideScalar($){return this.multiplyScalar(1/$)}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this.z=Math.min(this.z,$.z),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this.z=Math.max(this.z,$.z),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this.z=c0(this.z,$.z,J.z),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this.z=c0(this.z,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot($){return this.x*$.x+this.y*$.y+this.z*$.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this.z+=($.z-this.z)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this.z=$.z+(J.z-$.z)*Q,this}cross($){return this.crossVectors(this,$)}crossVectors($,J){let{x:Q,y:Z,z:W}=$,K=J.x,X=J.y,H=J.z;return this.x=Z*H-W*X,this.y=W*K-Q*H,this.z=Q*X-Z*K,this}projectOnVector($){let J=$.lengthSq();if(J===0)return this.set(0,0,0);let Q=$.dot(this)/J;return this.copy($).multiplyScalar(Q)}projectOnPlane($){return yJ.copy(this).projectOnVector($),this.sub(yJ)}reflect($){return this.sub(yJ.copy($).multiplyScalar(2*this.dot($)))}angleTo($){let J=Math.sqrt(this.lengthSq()*$.lengthSq());if(J===0)return Math.PI/2;let Q=this.dot($)/J;return Math.acos(c0(Q,-1,1))}distanceTo($){return Math.sqrt(this.distanceToSquared($))}distanceToSquared($){let J=this.x-$.x,Q=this.y-$.y,Z=this.z-$.z;return J*J+Q*Q+Z*Z}manhattanDistanceTo($){return Math.abs(this.x-$.x)+Math.abs(this.y-$.y)+Math.abs(this.z-$.z)}setFromSpherical($){return this.setFromSphericalCoords($.radius,$.phi,$.theta)}setFromSphericalCoords($,J,Q){let Z=Math.sin(J)*$;return this.x=Z*Math.sin(Q),this.y=Math.cos(J)*$,this.z=Z*Math.cos(Q),this}setFromCylindrical($){return this.setFromCylindricalCoords($.radius,$.theta,$.y)}setFromCylindricalCoords($,J,Q){return this.x=$*Math.sin(J),this.y=Q,this.z=$*Math.cos(J),this}setFromMatrixPosition($){let J=$.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this}setFromMatrixScale($){let J=this.setFromMatrixColumn($,0).length(),Q=this.setFromMatrixColumn($,1).length(),Z=this.setFromMatrixColumn($,2).length();return this.x=J,this.y=Q,this.z=Z,this}setFromMatrixColumn($,J){return this.fromArray($.elements,J*4)}setFromMatrix3Column($,J){return this.fromArray($.elements,J*3)}setFromEuler($){return this.x=$._x,this.y=$._y,this.z=$._z,this}setFromColor($){return this.x=$.r,this.y=$.g,this.z=$.b,this}equals($){return $.x===this.x&&$.y===this.y&&$.z===this.z}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this.z=$[J+2],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$[J+2]=this.z,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this.z=$.getZ(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let $=Math.random()*Math.PI*2,J=Math.random()*2-1,Q=Math.sqrt(1-J*J);return this.x=Q*Math.cos($),this.y=J,this.z=Q*Math.sin($),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var yJ=new x,C5=new O8;class p0{constructor($,J,Q,Z,W,K,X,H,Y){if(p0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],$!==void 0)this.set($,J,Q,Z,W,K,X,H,Y)}set($,J,Q,Z,W,K,X,H,Y){let U=this.elements;return U[0]=$,U[1]=Z,U[2]=X,U[3]=J,U[4]=W,U[5]=H,U[6]=Q,U[7]=K,U[8]=Y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy($){let J=this.elements,Q=$.elements;return J[0]=Q[0],J[1]=Q[1],J[2]=Q[2],J[3]=Q[3],J[4]=Q[4],J[5]=Q[5],J[6]=Q[6],J[7]=Q[7],J[8]=Q[8],this}extractBasis($,J,Q){return $.setFromMatrix3Column(this,0),J.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4($){let J=$.elements;return this.set(J[0],J[4],J[8],J[1],J[5],J[9],J[2],J[6],J[10]),this}multiply($){return this.multiplyMatrices(this,$)}premultiply($){return this.multiplyMatrices($,this)}multiplyMatrices($,J){let Q=$.elements,Z=J.elements,W=this.elements,K=Q[0],X=Q[3],H=Q[6],Y=Q[1],U=Q[4],G=Q[7],E=Q[2],q=Q[5],F=Q[8],O=Z[0],M=Z[3],N=Z[6],R=Z[1],_=Z[4],D=Z[7],k=Z[2],T=Z[5],P=Z[8];return W[0]=K*O+X*R+H*k,W[3]=K*M+X*_+H*T,W[6]=K*N+X*D+H*P,W[1]=Y*O+U*R+G*k,W[4]=Y*M+U*_+G*T,W[7]=Y*N+U*D+G*P,W[2]=E*O+q*R+F*k,W[5]=E*M+q*_+F*T,W[8]=E*N+q*D+F*P,this}multiplyScalar($){let J=this.elements;return J[0]*=$,J[3]*=$,J[6]*=$,J[1]*=$,J[4]*=$,J[7]*=$,J[2]*=$,J[5]*=$,J[8]*=$,this}determinant(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8];return J*K*U-J*X*Y-Q*W*U+Q*X*H+Z*W*Y-Z*K*H}invert(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8],G=U*K-X*Y,E=X*H-U*W,q=Y*W-K*H,F=J*G+Q*E+Z*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/F;return $[0]=G*O,$[1]=(Z*Y-U*Q)*O,$[2]=(X*Q-Z*K)*O,$[3]=E*O,$[4]=(U*J-Z*H)*O,$[5]=(Z*W-X*J)*O,$[6]=q*O,$[7]=(Q*H-Y*J)*O,$[8]=(K*J-Q*W)*O,this}transpose(){let $,J=this.elements;return $=J[1],J[1]=J[3],J[3]=$,$=J[2],J[2]=J[6],J[6]=$,$=J[5],J[5]=J[7],J[7]=$,this}getNormalMatrix($){return this.setFromMatrix4($).invert().transpose()}transposeIntoArray($){let J=this.elements;return $[0]=J[0],$[1]=J[3],$[2]=J[6],$[3]=J[1],$[4]=J[4],$[5]=J[7],$[6]=J[2],$[7]=J[5],$[8]=J[8],this}setUvTransform($,J,Q,Z,W,K,X){let H=Math.cos(W),Y=Math.sin(W);return this.set(Q*H,Q*Y,-Q*(H*K+Y*X)+K+$,-Z*Y,Z*H,-Z*(-Y*K+H*X)+X+J,0,0,1),this}scale($,J){return this.premultiply(bJ.makeScale($,J)),this}rotate($){return this.premultiply(bJ.makeRotation(-$)),this}translate($,J){return this.premultiply(bJ.makeTranslation($,J)),this}makeTranslation($,J){if($.isVector2)this.set(1,0,$.x,0,1,$.y,0,0,1);else this.set(1,0,$,0,1,J,0,0,1);return this}makeRotation($){let J=Math.cos($),Q=Math.sin($);return this.set(J,-Q,0,Q,J,0,0,0,1),this}makeScale($,J){return this.set($,0,0,0,J,0,0,0,1),this}equals($){let J=this.elements,Q=$.elements;for(let Z=0;Z<9;Z++)if(J[Z]!==Q[Z])return!1;return!0}fromArray($,J=0){for(let Q=0;Q<9;Q++)this.elements[Q]=$[Q+J];return this}toArray($=[],J=0){let Q=this.elements;return $[J]=Q[0],$[J+1]=Q[1],$[J+2]=Q[2],$[J+3]=Q[3],$[J+4]=Q[4],$[J+5]=Q[5],$[J+6]=Q[6],$[J+7]=Q[7],$[J+8]=Q[8],$}clone(){return new this.constructor().fromArray(this.elements)}}var bJ=new p0;function JZ($){for(let J=$.length-1;J>=0;--J)if($[J]>=65535)return!0;return!1}function G7($){return document.createElementNS("http://www.w3.org/1999/xhtml",$)}function WK(){let $=G7("canvas");return $.style.display="block",$}var I5={};function E7($){if($ in I5)return;I5[$]=!0,console.warn($)}function KK($,J,Q){return new Promise(function(Z,W){function K(){switch($.clientWaitSync(J,$.SYNC_FLUSH_COMMANDS_BIT,0)){case $.WAIT_FAILED:W();break;case $.TIMEOUT_EXPIRED:setTimeout(K,Q);break;default:Z()}}setTimeout(K,Q)})}var P5=new p0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),A5=new p0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function sY(){let $={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,X){if(this.enabled===!1||K===X||!K||!X)return W;if(this.spaces[K].transfer==="srgb")W.r=x8(W.r),W.g=x8(W.g),W.b=x8(W.b);if(this.spaces[K].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=U7(W.r),W.g=U7(W.g),W.b=U7(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,X){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return E7("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),$.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return E7("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),$.colorSpaceToWorking(W,K)}},J=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return $.define({["srgb-linear"]:{primaries:J,whitePoint:Z,transfer:"linear",toXYZ:P5,fromXYZ:A5,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:J,whitePoint:Z,transfer:"srgb",toXYZ:P5,fromXYZ:A5,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),$}var o0=sY();function x8($){return $<0.04045?$*0.0773993808:Math.pow($*0.9478672986+0.0521327014,2.4)}function U7($){return $<0.0031308?$*12.92:1.055*Math.pow($,0.41666)-0.055}var i6;class QZ{static getDataURL($,J="image/png"){if(/^data:/i.test($.src))return $.src;if(typeof HTMLCanvasElement>"u")return $.src;let Q;if($ instanceof HTMLCanvasElement)Q=$;else{if(i6===void 0)i6=G7("canvas");i6.width=$.width,i6.height=$.height;let Z=i6.getContext("2d");if($ instanceof ImageData)Z.putImageData($,0,0);else Z.drawImage($,0,0,$.width,$.height);Q=i6}return Q.toDataURL(J)}static sRGBToLinear($){if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap){let J=G7("canvas");J.width=$.width,J.height=$.height;let Q=J.getContext("2d");Q.drawImage($,0,0,$.width,$.height);let Z=Q.getImageData(0,0,$.width,$.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=x8(W[K]/255)*255;return Q.putImageData(Z,0,0),J}else if($.data){let J=$.data.slice(0);for(let Q=0;Q<J.length;Q++)if(J instanceof Uint8Array||J instanceof Uint8ClampedArray)J[Q]=Math.floor(x8(J[Q]/255)*255);else J[Q]=x8(J[Q]);return{data:J,width:$.width,height:$.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),$}}var oY=0;class H9{constructor($=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oY++}),this.uuid=R8(),this.data=$,this.dataReady=!0,this.version=0}getSize($){let J=this.data;if(typeof HTMLVideoElement<"u"&&J instanceof HTMLVideoElement)$.set(J.videoWidth,J.videoHeight,0);else if(J instanceof VideoFrame)$.set(J.displayHeight,J.displayWidth,0);else if(J!==null)$.set(J.width,J.height,J.depth||0);else $.set(0,0,0);return $}set needsUpdate($){if($===!0)this.version++}toJSON($){let J=$===void 0||typeof $==="string";if(!J&&$.images[this.uuid]!==void 0)return $.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,X=Z.length;K<X;K++)if(Z[K].isDataTexture)W.push(hJ(Z[K].image));else W.push(hJ(Z[K]))}else W=hJ(Z);Q.url=W}if(!J)$.images[this.uuid]=Q;return Q}}function hJ($){if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap)return QZ.getDataURL($);else if($.data)return{data:Array.from($.data),width:$.width,height:$.height,type:$.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var iY=0,xJ=new x;class L1 extends H6{constructor($=L1.DEFAULT_IMAGE,J=L1.DEFAULT_MAPPING,Q=1001,Z=1001,W=1006,K=1008,X=1023,H=1009,Y=L1.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:iY++}),this.uuid=R8(),this.name="",this.source=new H9($),this.mipmaps=[],this.mapping=J,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=Y,this.format=X,this.internalFormat=null,this.type=H,this.offset=new u0(0,0),this.repeat=new u0(1,1),this.center=new u0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new p0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=$&&$.depth&&$.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(xJ).x}get height(){return this.source.getSize(xJ).y}get depth(){return this.source.getSize(xJ).z}get image(){return this.source.data}set image($=null){this.source.data=$}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy($){return this.name=$.name,this.source=$.source,this.mipmaps=$.mipmaps.slice(0),this.mapping=$.mapping,this.channel=$.channel,this.wrapS=$.wrapS,this.wrapT=$.wrapT,this.magFilter=$.magFilter,this.minFilter=$.minFilter,this.anisotropy=$.anisotropy,this.format=$.format,this.internalFormat=$.internalFormat,this.type=$.type,this.offset.copy($.offset),this.repeat.copy($.repeat),this.center.copy($.center),this.rotation=$.rotation,this.matrixAutoUpdate=$.matrixAutoUpdate,this.matrix.copy($.matrix),this.generateMipmaps=$.generateMipmaps,this.premultiplyAlpha=$.premultiplyAlpha,this.flipY=$.flipY,this.unpackAlignment=$.unpackAlignment,this.colorSpace=$.colorSpace,this.renderTarget=$.renderTarget,this.isRenderTargetTexture=$.isRenderTargetTexture,this.isArrayTexture=$.isArrayTexture,this.userData=JSON.parse(JSON.stringify($.userData)),this.needsUpdate=!0,this}setValues($){for(let J in $){let Q=$[J];if(Q===void 0){console.warn(`THREE.Texture.setValues(): parameter '${J}' has value of undefined.`);continue}let Z=this[J];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${J}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[J]=Q}}toJSON($){let J=$===void 0||typeof $==="string";if(!J&&$.textures[this.uuid]!==void 0)return $.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON($).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!J)$.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv($){if(this.mapping!==300)return $;if($.applyMatrix3(this.matrix),$.x<0||$.x>1)switch(this.wrapS){case 1000:$.x=$.x-Math.floor($.x);break;case 1001:$.x=$.x<0?0:1;break;case 1002:if(Math.abs(Math.floor($.x)%2)===1)$.x=Math.ceil($.x)-$.x;else $.x=$.x-Math.floor($.x);break}if($.y<0||$.y>1)switch(this.wrapT){case 1000:$.y=$.y-Math.floor($.y);break;case 1001:$.y=$.y<0?0:1;break;case 1002:if(Math.abs(Math.floor($.y)%2)===1)$.y=Math.ceil($.y)-$.y;else $.y=$.y-Math.floor($.y);break}if(this.flipY)$.y=1-$.y;return $}set needsUpdate($){if($===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate($){if($===!0)this.pmremVersion++}}L1.DEFAULT_IMAGE=null;L1.DEFAULT_MAPPING=300;L1.DEFAULT_ANISOTROPY=1;class i0{constructor($=0,J=0,Q=0,Z=1){i0.prototype.isVector4=!0,this.x=$,this.y=J,this.z=Q,this.w=Z}get width(){return this.z}set width($){this.z=$}get height(){return this.w}set height($){this.w=$}set($,J,Q,Z){return this.x=$,this.y=J,this.z=Q,this.w=Z,this}setScalar($){return this.x=$,this.y=$,this.z=$,this.w=$,this}setX($){return this.x=$,this}setY($){return this.y=$,this}setZ($){return this.z=$,this}setW($){return this.w=$,this}setComponent($,J){switch($){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;case 3:this.w=J;break;default:throw Error("index is out of range: "+$)}return this}getComponent($){switch($){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+$)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy($){return this.x=$.x,this.y=$.y,this.z=$.z,this.w=$.w!==void 0?$.w:1,this}add($){return this.x+=$.x,this.y+=$.y,this.z+=$.z,this.w+=$.w,this}addScalar($){return this.x+=$,this.y+=$,this.z+=$,this.w+=$,this}addVectors($,J){return this.x=$.x+J.x,this.y=$.y+J.y,this.z=$.z+J.z,this.w=$.w+J.w,this}addScaledVector($,J){return this.x+=$.x*J,this.y+=$.y*J,this.z+=$.z*J,this.w+=$.w*J,this}sub($){return this.x-=$.x,this.y-=$.y,this.z-=$.z,this.w-=$.w,this}subScalar($){return this.x-=$,this.y-=$,this.z-=$,this.w-=$,this}subVectors($,J){return this.x=$.x-J.x,this.y=$.y-J.y,this.z=$.z-J.z,this.w=$.w-J.w,this}multiply($){return this.x*=$.x,this.y*=$.y,this.z*=$.z,this.w*=$.w,this}multiplyScalar($){return this.x*=$,this.y*=$,this.z*=$,this.w*=$,this}applyMatrix4($){let J=this.x,Q=this.y,Z=this.z,W=this.w,K=$.elements;return this.x=K[0]*J+K[4]*Q+K[8]*Z+K[12]*W,this.y=K[1]*J+K[5]*Q+K[9]*Z+K[13]*W,this.z=K[2]*J+K[6]*Q+K[10]*Z+K[14]*W,this.w=K[3]*J+K[7]*Q+K[11]*Z+K[15]*W,this}divide($){return this.x/=$.x,this.y/=$.y,this.z/=$.z,this.w/=$.w,this}divideScalar($){return this.multiplyScalar(1/$)}setAxisAngleFromQuaternion($){this.w=2*Math.acos($.w);let J=Math.sqrt(1-$.w*$.w);if(J<0.0001)this.x=1,this.y=0,this.z=0;else this.x=$.x/J,this.y=$.y/J,this.z=$.z/J;return this}setAxisAngleFromRotationMatrix($){let J,Q,Z,W,K=0.01,X=0.1,H=$.elements,Y=H[0],U=H[4],G=H[8],E=H[1],q=H[5],F=H[9],O=H[2],M=H[6],N=H[10];if(Math.abs(U-E)<0.01&&Math.abs(G-O)<0.01&&Math.abs(F-M)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+O)<0.1&&Math.abs(F+M)<0.1&&Math.abs(Y+q+N-3)<0.1)return this.set(1,0,0,0),this;J=Math.PI;let _=(Y+1)/2,D=(q+1)/2,k=(N+1)/2,T=(U+E)/4,P=(G+O)/4,A=(F+M)/4;if(_>D&&_>k)if(_<0.01)Q=0,Z=0.707106781,W=0.707106781;else Q=Math.sqrt(_),Z=T/Q,W=P/Q;else if(D>k)if(D<0.01)Q=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(D),Q=T/Z,W=A/Z;else if(k<0.01)Q=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(k),Q=P/W,Z=A/W;return this.set(Q,Z,W,J),this}let R=Math.sqrt((M-F)*(M-F)+(G-O)*(G-O)+(E-U)*(E-U));if(Math.abs(R)<0.001)R=1;return this.x=(M-F)/R,this.y=(G-O)/R,this.z=(E-U)/R,this.w=Math.acos((Y+q+N-1)/2),this}setFromMatrixPosition($){let J=$.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this.w=J[15],this}min($){return this.x=Math.min(this.x,$.x),this.y=Math.min(this.y,$.y),this.z=Math.min(this.z,$.z),this.w=Math.min(this.w,$.w),this}max($){return this.x=Math.max(this.x,$.x),this.y=Math.max(this.y,$.y),this.z=Math.max(this.z,$.z),this.w=Math.max(this.w,$.w),this}clamp($,J){return this.x=c0(this.x,$.x,J.x),this.y=c0(this.y,$.y,J.y),this.z=c0(this.z,$.z,J.z),this.w=c0(this.w,$.w,J.w),this}clampScalar($,J){return this.x=c0(this.x,$,J),this.y=c0(this.y,$,J),this.z=c0(this.z,$,J),this.w=c0(this.w,$,J),this}clampLength($,J){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,$,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot($){return this.x*$.x+this.y*$.y+this.z*$.z+this.w*$.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength($){return this.normalize().multiplyScalar($)}lerp($,J){return this.x+=($.x-this.x)*J,this.y+=($.y-this.y)*J,this.z+=($.z-this.z)*J,this.w+=($.w-this.w)*J,this}lerpVectors($,J,Q){return this.x=$.x+(J.x-$.x)*Q,this.y=$.y+(J.y-$.y)*Q,this.z=$.z+(J.z-$.z)*Q,this.w=$.w+(J.w-$.w)*Q,this}equals($){return $.x===this.x&&$.y===this.y&&$.z===this.z&&$.w===this.w}fromArray($,J=0){return this.x=$[J],this.y=$[J+1],this.z=$[J+2],this.w=$[J+3],this}toArray($=[],J=0){return $[J]=this.x,$[J+1]=this.y,$[J+2]=this.z,$[J+3]=this.w,$}fromBufferAttribute($,J){return this.x=$.getX(J),this.y=$.getY(J),this.z=$.getZ(J),this.w=$.getW(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZZ extends H6{constructor($=1,J=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Q),this.isRenderTarget=!0,this.width=$,this.height=J,this.depth=Q.depth,this.scissor=new i0(0,0,$,J),this.scissorTest=!1,this.viewport=new i0(0,0,$,J);let Z={width:$,height:J,depth:Q.depth},W=new L1(Z);this.textures=[];let K=Q.count;for(let X=0;X<K;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview}_setTextureOptions($={}){let J={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if($.mapping!==void 0)J.mapping=$.mapping;if($.wrapS!==void 0)J.wrapS=$.wrapS;if($.wrapT!==void 0)J.wrapT=$.wrapT;if($.wrapR!==void 0)J.wrapR=$.wrapR;if($.magFilter!==void 0)J.magFilter=$.magFilter;if($.minFilter!==void 0)J.minFilter=$.minFilter;if($.format!==void 0)J.format=$.format;if($.type!==void 0)J.type=$.type;if($.anisotropy!==void 0)J.anisotropy=$.anisotropy;if($.colorSpace!==void 0)J.colorSpace=$.colorSpace;if($.flipY!==void 0)J.flipY=$.flipY;if($.generateMipmaps!==void 0)J.generateMipmaps=$.generateMipmaps;if($.internalFormat!==void 0)J.internalFormat=$.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues(J)}get texture(){return this.textures[0]}set texture($){this.textures[0]=$}set depthTexture($){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if($!==null)$.renderTarget=this;this._depthTexture=$}get depthTexture(){return this._depthTexture}setSize($,J,Q=1){if(this.width!==$||this.height!==J||this.depth!==Q){this.width=$,this.height=J,this.depth=Q;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=$,this.textures[Z].image.height=J,this.textures[Z].image.depth=Q,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,$,J),this.scissor.set(0,0,$,J)}clone(){return new this.constructor().copy(this)}copy($){this.width=$.width,this.height=$.height,this.depth=$.depth,this.scissor.copy($.scissor),this.scissorTest=$.scissorTest,this.viewport.copy($.viewport),this.textures.length=0;for(let J=0,Q=$.textures.length;J<Q;J++){this.textures[J]=$.textures[J].clone(),this.textures[J].isRenderTargetTexture=!0,this.textures[J].renderTarget=this;let Z=Object.assign({},$.textures[J].image);this.textures[J].source=new H9(Z)}if(this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,$.depthTexture!==null)this.depthTexture=$.depthTexture.clone();return this.samples=$.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class M8 extends ZZ{constructor($=1,J=1,Q={}){super($,J,Q);this.isWebGLRenderTarget=!0}}class f$ extends L1{constructor($=null,J=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:$,width:J,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate($){this.layerUpdates.add($)}clearLayerUpdates(){this.layerUpdates.clear()}}class WZ extends L1{constructor($=null,J=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:$,width:J,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l1{constructor($=new x(1/0,1/0,1/0),J=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=$,this.max=J}set($,J){return this.min.copy($),this.max.copy(J),this}setFromArray($){this.makeEmpty();for(let J=0,Q=$.length;J<Q;J+=3)this.expandByPoint(G8.fromArray($,J));return this}setFromBufferAttribute($){this.makeEmpty();for(let J=0,Q=$.count;J<Q;J++)this.expandByPoint(G8.fromBufferAttribute($,J));return this}setFromPoints($){this.makeEmpty();for(let J=0,Q=$.length;J<Q;J++)this.expandByPoint($[J]);return this}setFromCenterAndSize($,J){let Q=G8.copy(J).multiplyScalar(0.5);return this.min.copy($).sub(Q),this.max.copy($).add(Q),this}setFromObject($,J=!1){return this.makeEmpty(),this.expandByObject($,J)}clone(){return new this.constructor().copy(this)}copy($){return this.min.copy($.min),this.max.copy($.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter($){return this.isEmpty()?$.set(0,0,0):$.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize($){return this.isEmpty()?$.set(0,0,0):$.subVectors(this.max,this.min)}expandByPoint($){return this.min.min($),this.max.max($),this}expandByVector($){return this.min.sub($),this.max.add($),this}expandByScalar($){return this.min.addScalar(-$),this.max.addScalar($),this}expandByObject($,J=!1){$.updateWorldMatrix(!1,!1);let Q=$.geometry;if(Q!==void 0){let W=Q.getAttribute("position");if(J===!0&&W!==void 0&&$.isInstancedMesh!==!0)for(let K=0,X=W.count;K<X;K++){if($.isMesh===!0)$.getVertexPosition(K,G8);else G8.fromBufferAttribute(W,K);G8.applyMatrix4($.matrixWorld),this.expandByPoint(G8)}else{if($.boundingBox!==void 0){if($.boundingBox===null)$.computeBoundingBox();m9.copy($.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();m9.copy(Q.boundingBox)}m9.applyMatrix4($.matrixWorld),this.union(m9)}}let Z=$.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],J);return this}containsPoint($){return $.x>=this.min.x&&$.x<=this.max.x&&$.y>=this.min.y&&$.y<=this.max.y&&$.z>=this.min.z&&$.z<=this.max.z}containsBox($){return this.min.x<=$.min.x&&$.max.x<=this.max.x&&this.min.y<=$.min.y&&$.max.y<=this.max.y&&this.min.z<=$.min.z&&$.max.z<=this.max.z}getParameter($,J){return J.set(($.x-this.min.x)/(this.max.x-this.min.x),($.y-this.min.y)/(this.max.y-this.min.y),($.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox($){return $.max.x>=this.min.x&&$.min.x<=this.max.x&&$.max.y>=this.min.y&&$.min.y<=this.max.y&&$.max.z>=this.min.z&&$.min.z<=this.max.z}intersectsSphere($){return this.clampPoint($.center,G8),G8.distanceToSquared($.center)<=$.radius*$.radius}intersectsPlane($){let J,Q;if($.normal.x>0)J=$.normal.x*this.min.x,Q=$.normal.x*this.max.x;else J=$.normal.x*this.max.x,Q=$.normal.x*this.min.x;if($.normal.y>0)J+=$.normal.y*this.min.y,Q+=$.normal.y*this.max.y;else J+=$.normal.y*this.max.y,Q+=$.normal.y*this.min.y;if($.normal.z>0)J+=$.normal.z*this.min.z,Q+=$.normal.z*this.max.z;else J+=$.normal.z*this.max.z,Q+=$.normal.z*this.min.z;return J<=-$.constant&&Q>=-$.constant}intersectsTriangle($){if(this.isEmpty())return!1;this.getCenter(d7),d9.subVectors(this.max,d7),a6.subVectors($.a,d7),r6.subVectors($.b,d7),t6.subVectors($.c,d7),r8.subVectors(r6,a6),t8.subVectors(t6,r6),k6.subVectors(a6,t6);let J=[0,-r8.z,r8.y,0,-t8.z,t8.y,0,-k6.z,k6.y,r8.z,0,-r8.x,t8.z,0,-t8.x,k6.z,0,-k6.x,-r8.y,r8.x,0,-t8.y,t8.x,0,-k6.y,k6.x,0];if(!gJ(J,a6,r6,t6,d9))return!1;if(J=[1,0,0,0,1,0,0,0,1],!gJ(J,a6,r6,t6,d9))return!1;return c9.crossVectors(r8,t8),J=[c9.x,c9.y,c9.z],gJ(J,a6,r6,t6,d9)}clampPoint($,J){return J.copy($).clamp(this.min,this.max)}distanceToPoint($){return this.clampPoint($,G8).distanceTo($)}getBoundingSphere($){if(this.isEmpty())$.makeEmpty();else this.getCenter($.center),$.radius=this.getSize(G8).length()*0.5;return $}intersect($){if(this.min.max($.min),this.max.min($.max),this.isEmpty())this.makeEmpty();return this}union($){return this.min.min($.min),this.max.max($.max),this}applyMatrix4($){if(this.isEmpty())return this;return S8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4($),S8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4($),S8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4($),S8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4($),S8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4($),S8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4($),S8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4($),S8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4($),this.setFromPoints(S8),this}translate($){return this.min.add($),this.max.add($),this}equals($){return $.min.equals(this.min)&&$.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON($){return this.min.fromArray($.min),this.max.fromArray($.max),this}}var S8=[new x,new x,new x,new x,new x,new x,new x,new x],G8=new x,m9=new l1,a6=new x,r6=new x,t6=new x,r8=new x,t8=new x,k6=new x,d7=new x,d9=new x,c9=new x,C6=new x;function gJ($,J,Q,Z,W){for(let K=0,X=$.length-3;K<=X;K+=3){C6.fromArray($,K);let H=W.x*Math.abs(C6.x)+W.y*Math.abs(C6.y)+W.z*Math.abs(C6.z),Y=J.dot(C6),U=Q.dot(C6),G=Z.dot(C6);if(Math.max(-Math.max(Y,U,G),Math.min(Y,U,G))>H)return!1}return!0}var aY=new l1,c7=new x,pJ=new x;class r1{constructor($=new x,J=-1){this.isSphere=!0,this.center=$,this.radius=J}set($,J){return this.center.copy($),this.radius=J,this}setFromPoints($,J){let Q=this.center;if(J!==void 0)Q.copy(J);else aY.setFromPoints($).getCenter(Q);let Z=0;for(let W=0,K=$.length;W<K;W++)Z=Math.max(Z,Q.distanceToSquared($[W]));return this.radius=Math.sqrt(Z),this}copy($){return this.center.copy($.center),this.radius=$.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint($){return $.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint($){return $.distanceTo(this.center)-this.radius}intersectsSphere($){let J=this.radius+$.radius;return $.center.distanceToSquared(this.center)<=J*J}intersectsBox($){return $.intersectsSphere(this)}intersectsPlane($){return Math.abs($.distanceToPoint(this.center))<=this.radius}clampPoint($,J){let Q=this.center.distanceToSquared($);if(J.copy($),Q>this.radius*this.radius)J.sub(this.center).normalize(),J.multiplyScalar(this.radius).add(this.center);return J}getBoundingBox($){if(this.isEmpty())return $.makeEmpty(),$;return $.set(this.center,this.center),$.expandByScalar(this.radius),$}applyMatrix4($){return this.center.applyMatrix4($),this.radius=this.radius*$.getMaxScaleOnAxis(),this}translate($){return this.center.add($),this}expandByPoint($){if(this.isEmpty())return this.center.copy($),this.radius=0,this;c7.subVectors($,this.center);let J=c7.lengthSq();if(J>this.radius*this.radius){let Q=Math.sqrt(J),Z=(Q-this.radius)*0.5;this.center.addScaledVector(c7,Z/Q),this.radius+=Z}return this}union($){if($.isEmpty())return this;if(this.isEmpty())return this.copy($),this;if(this.center.equals($.center)===!0)this.radius=Math.max(this.radius,$.radius);else pJ.subVectors($.center,this.center).setLength($.radius),this.expandByPoint(c7.copy($.center).add(pJ)),this.expandByPoint(c7.copy($.center).sub(pJ));return this}equals($){return $.center.equals(this.center)&&$.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON($){return this.radius=$.radius,this.center.fromArray($.center),this}}var j8=new x,lJ=new x,n9=new x,e8=new x,uJ=new x,s9=new x,mJ=new x;class D7{constructor($=new x,J=new x(0,0,-1)){this.origin=$,this.direction=J}set($,J){return this.origin.copy($),this.direction.copy(J),this}copy($){return this.origin.copy($.origin),this.direction.copy($.direction),this}at($,J){return J.copy(this.origin).addScaledVector(this.direction,$)}lookAt($){return this.direction.copy($).sub(this.origin).normalize(),this}recast($){return this.origin.copy(this.at($,j8)),this}closestPointToPoint($,J){J.subVectors($,this.origin);let Q=J.dot(this.direction);if(Q<0)return J.copy(this.origin);return J.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint($){return Math.sqrt(this.distanceSqToPoint($))}distanceSqToPoint($){let J=j8.subVectors($,this.origin).dot(this.direction);if(J<0)return this.origin.distanceToSquared($);return j8.copy(this.origin).addScaledVector(this.direction,J),j8.distanceToSquared($)}distanceSqToSegment($,J,Q,Z){lJ.copy($).add(J).multiplyScalar(0.5),n9.copy(J).sub($).normalize(),e8.copy(this.origin).sub(lJ);let W=$.distanceTo(J)*0.5,K=-this.direction.dot(n9),X=e8.dot(this.direction),H=-e8.dot(n9),Y=e8.lengthSq(),U=Math.abs(1-K*K),G,E,q,F;if(U>0)if(G=K*H-X,E=K*X-H,F=W*U,G>=0)if(E>=-F)if(E<=F){let O=1/U;G*=O,E*=O,q=G*(G+K*E+2*X)+E*(K*G+E+2*H)+Y}else E=W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;else E=-W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;else if(E<=-F)G=Math.max(0,-(-K*W+X)),E=G>0?-W:Math.min(Math.max(-W,-H),W),q=-G*G+E*(E+2*H)+Y;else if(E<=F)G=0,E=Math.min(Math.max(-W,-H),W),q=E*(E+2*H)+Y;else G=Math.max(0,-(K*W+X)),E=G>0?W:Math.min(Math.max(-W,-H),W),q=-G*G+E*(E+2*H)+Y;else E=K>0?-W:W,G=Math.max(0,-(K*E+X)),q=-G*G+E*(E+2*H)+Y;if(Q)Q.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(lJ).addScaledVector(n9,E);return q}intersectSphere($,J){j8.subVectors($.center,this.origin);let Q=j8.dot(this.direction),Z=j8.dot(j8)-Q*Q,W=$.radius*$.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),X=Q-K,H=Q+K;if(H<0)return null;if(X<0)return this.at(H,J);return this.at(X,J)}intersectsSphere($){if($.radius<0)return!1;return this.distanceSqToPoint($.center)<=$.radius*$.radius}distanceToPlane($){let J=$.normal.dot(this.direction);if(J===0){if($.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot($.normal)+$.constant)/J;return Q>=0?Q:null}intersectPlane($,J){let Q=this.distanceToPlane($);if(Q===null)return null;return this.at(Q,J)}intersectsPlane($){let J=$.distanceToPoint(this.origin);if(J===0)return!0;if($.normal.dot(this.direction)*J<0)return!0;return!1}intersectBox($,J){let Q,Z,W,K,X,H,Y=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(Y>=0)Q=($.min.x-E.x)*Y,Z=($.max.x-E.x)*Y;else Q=($.max.x-E.x)*Y,Z=($.min.x-E.x)*Y;if(U>=0)W=($.min.y-E.y)*U,K=($.max.y-E.y)*U;else W=($.max.y-E.y)*U,K=($.min.y-E.y)*U;if(Q>K||W>Z)return null;if(W>Q||isNaN(Q))Q=W;if(K<Z||isNaN(Z))Z=K;if(G>=0)X=($.min.z-E.z)*G,H=($.max.z-E.z)*G;else X=($.max.z-E.z)*G,H=($.min.z-E.z)*G;if(Q>H||X>Z)return null;if(X>Q||Q!==Q)Q=X;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at(Q>=0?Q:Z,J)}intersectsBox($){return this.intersectBox($,j8)!==null}intersectTriangle($,J,Q,Z,W){uJ.subVectors(J,$),s9.subVectors(Q,$),mJ.crossVectors(uJ,s9);let K=this.direction.dot(mJ),X;if(K>0){if(Z)return null;X=1}else if(K<0)X=-1,K=-K;else return null;e8.subVectors(this.origin,$);let H=X*this.direction.dot(s9.crossVectors(e8,s9));if(H<0)return null;let Y=X*this.direction.dot(uJ.cross(e8));if(Y<0)return null;if(H+Y>K)return null;let U=-X*e8.dot(mJ);if(U<0)return null;return this.at(U/K,W)}applyMatrix4($){return this.origin.applyMatrix4($),this.direction.transformDirection($),this}equals($){return $.origin.equals(this.origin)&&$.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class g0{constructor($,J,Q,Z,W,K,X,H,Y,U,G,E,q,F,O,M){if(g0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],$!==void 0)this.set($,J,Q,Z,W,K,X,H,Y,U,G,E,q,F,O,M)}set($,J,Q,Z,W,K,X,H,Y,U,G,E,q,F,O,M){let N=this.elements;return N[0]=$,N[4]=J,N[8]=Q,N[12]=Z,N[1]=W,N[5]=K,N[9]=X,N[13]=H,N[2]=Y,N[6]=U,N[10]=G,N[14]=E,N[3]=q,N[7]=F,N[11]=O,N[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new g0().fromArray(this.elements)}copy($){let J=this.elements,Q=$.elements;return J[0]=Q[0],J[1]=Q[1],J[2]=Q[2],J[3]=Q[3],J[4]=Q[4],J[5]=Q[5],J[6]=Q[6],J[7]=Q[7],J[8]=Q[8],J[9]=Q[9],J[10]=Q[10],J[11]=Q[11],J[12]=Q[12],J[13]=Q[13],J[14]=Q[14],J[15]=Q[15],this}copyPosition($){let J=this.elements,Q=$.elements;return J[12]=Q[12],J[13]=Q[13],J[14]=Q[14],this}setFromMatrix3($){let J=$.elements;return this.set(J[0],J[3],J[6],0,J[1],J[4],J[7],0,J[2],J[5],J[8],0,0,0,0,1),this}extractBasis($,J,Q){return $.setFromMatrixColumn(this,0),J.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis($,J,Q){return this.set($.x,J.x,Q.x,0,$.y,J.y,Q.y,0,$.z,J.z,Q.z,0,0,0,0,1),this}extractRotation($){let J=this.elements,Q=$.elements,Z=1/e6.setFromMatrixColumn($,0).length(),W=1/e6.setFromMatrixColumn($,1).length(),K=1/e6.setFromMatrixColumn($,2).length();return J[0]=Q[0]*Z,J[1]=Q[1]*Z,J[2]=Q[2]*Z,J[3]=0,J[4]=Q[4]*W,J[5]=Q[5]*W,J[6]=Q[6]*W,J[7]=0,J[8]=Q[8]*K,J[9]=Q[9]*K,J[10]=Q[10]*K,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromEuler($){let J=this.elements,Q=$.x,Z=$.y,W=$.z,K=Math.cos(Q),X=Math.sin(Q),H=Math.cos(Z),Y=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if($.order==="XYZ"){let E=K*U,q=K*G,F=X*U,O=X*G;J[0]=H*U,J[4]=-H*G,J[8]=Y,J[1]=q+F*Y,J[5]=E-O*Y,J[9]=-X*H,J[2]=O-E*Y,J[6]=F+q*Y,J[10]=K*H}else if($.order==="YXZ"){let E=H*U,q=H*G,F=Y*U,O=Y*G;J[0]=E+O*X,J[4]=F*X-q,J[8]=K*Y,J[1]=K*G,J[5]=K*U,J[9]=-X,J[2]=q*X-F,J[6]=O+E*X,J[10]=K*H}else if($.order==="ZXY"){let E=H*U,q=H*G,F=Y*U,O=Y*G;J[0]=E-O*X,J[4]=-K*G,J[8]=F+q*X,J[1]=q+F*X,J[5]=K*U,J[9]=O-E*X,J[2]=-K*Y,J[6]=X,J[10]=K*H}else if($.order==="ZYX"){let E=K*U,q=K*G,F=X*U,O=X*G;J[0]=H*U,J[4]=F*Y-q,J[8]=E*Y+O,J[1]=H*G,J[5]=O*Y+E,J[9]=q*Y-F,J[2]=-Y,J[6]=X*H,J[10]=K*H}else if($.order==="YZX"){let E=K*H,q=K*Y,F=X*H,O=X*Y;J[0]=H*U,J[4]=O-E*G,J[8]=F*G+q,J[1]=G,J[5]=K*U,J[9]=-X*U,J[2]=-Y*U,J[6]=q*G+F,J[10]=E-O*G}else if($.order==="XZY"){let E=K*H,q=K*Y,F=X*H,O=X*Y;J[0]=H*U,J[4]=-G,J[8]=Y*U,J[1]=E*G+O,J[5]=K*U,J[9]=q*G-F,J[2]=F*G-q,J[6]=X*U,J[10]=O*G+E}return J[3]=0,J[7]=0,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromQuaternion($){return this.compose(rY,$,tY)}lookAt($,J,Q){let Z=this.elements;if(o1.subVectors($,J),o1.lengthSq()===0)o1.z=1;if(o1.normalize(),$6.crossVectors(Q,o1),$6.lengthSq()===0){if(Math.abs(Q.z)===1)o1.x+=0.0001;else o1.z+=0.0001;o1.normalize(),$6.crossVectors(Q,o1)}return $6.normalize(),o9.crossVectors(o1,$6),Z[0]=$6.x,Z[4]=o9.x,Z[8]=o1.x,Z[1]=$6.y,Z[5]=o9.y,Z[9]=o1.y,Z[2]=$6.z,Z[6]=o9.z,Z[10]=o1.z,this}multiply($){return this.multiplyMatrices(this,$)}premultiply($){return this.multiplyMatrices($,this)}multiplyMatrices($,J){let Q=$.elements,Z=J.elements,W=this.elements,K=Q[0],X=Q[4],H=Q[8],Y=Q[12],U=Q[1],G=Q[5],E=Q[9],q=Q[13],F=Q[2],O=Q[6],M=Q[10],N=Q[14],R=Q[3],_=Q[7],D=Q[11],k=Q[15],T=Z[0],P=Z[4],A=Z[8],y=Z[12],z=Z[1],L=Z[5],C=Z[9],I=Z[13],S=Z[2],f=Z[6],g=Z[10],b=Z[14],d=Z[3],h=Z[7],i=Z[11],t=Z[15];return W[0]=K*T+X*z+H*S+Y*d,W[4]=K*P+X*L+H*f+Y*h,W[8]=K*A+X*C+H*g+Y*i,W[12]=K*y+X*I+H*b+Y*t,W[1]=U*T+G*z+E*S+q*d,W[5]=U*P+G*L+E*f+q*h,W[9]=U*A+G*C+E*g+q*i,W[13]=U*y+G*I+E*b+q*t,W[2]=F*T+O*z+M*S+N*d,W[6]=F*P+O*L+M*f+N*h,W[10]=F*A+O*C+M*g+N*i,W[14]=F*y+O*I+M*b+N*t,W[3]=R*T+_*z+D*S+k*d,W[7]=R*P+_*L+D*f+k*h,W[11]=R*A+_*C+D*g+k*i,W[15]=R*y+_*I+D*b+k*t,this}multiplyScalar($){let J=this.elements;return J[0]*=$,J[4]*=$,J[8]*=$,J[12]*=$,J[1]*=$,J[5]*=$,J[9]*=$,J[13]*=$,J[2]*=$,J[6]*=$,J[10]*=$,J[14]*=$,J[3]*=$,J[7]*=$,J[11]*=$,J[15]*=$,this}determinant(){let $=this.elements,J=$[0],Q=$[4],Z=$[8],W=$[12],K=$[1],X=$[5],H=$[9],Y=$[13],U=$[2],G=$[6],E=$[10],q=$[14],F=$[3],O=$[7],M=$[11],N=$[15];return F*(+W*H*G-Z*Y*G-W*X*E+Q*Y*E+Z*X*q-Q*H*q)+O*(+J*H*q-J*Y*E+W*K*E-Z*K*q+Z*Y*U-W*H*U)+M*(+J*Y*G-J*X*q-W*K*G+Q*K*q+W*X*U-Q*Y*U)+N*(-Z*X*U-J*H*G+J*X*E+Z*K*G-Q*K*E+Q*H*U)}transpose(){let $=this.elements,J;return J=$[1],$[1]=$[4],$[4]=J,J=$[2],$[2]=$[8],$[8]=J,J=$[6],$[6]=$[9],$[9]=J,J=$[3],$[3]=$[12],$[12]=J,J=$[7],$[7]=$[13],$[13]=J,J=$[11],$[11]=$[14],$[14]=J,this}setPosition($,J,Q){let Z=this.elements;if($.isVector3)Z[12]=$.x,Z[13]=$.y,Z[14]=$.z;else Z[12]=$,Z[13]=J,Z[14]=Q;return this}invert(){let $=this.elements,J=$[0],Q=$[1],Z=$[2],W=$[3],K=$[4],X=$[5],H=$[6],Y=$[7],U=$[8],G=$[9],E=$[10],q=$[11],F=$[12],O=$[13],M=$[14],N=$[15],R=G*M*Y-O*E*Y+O*H*q-X*M*q-G*H*N+X*E*N,_=F*E*Y-U*M*Y-F*H*q+K*M*q+U*H*N-K*E*N,D=U*O*Y-F*G*Y+F*X*q-K*O*q-U*X*N+K*G*N,k=F*G*H-U*O*H-F*X*E+K*O*E+U*X*M-K*G*M,T=J*R+Q*_+Z*D+W*k;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return $[0]=R*P,$[1]=(O*E*W-G*M*W-O*Z*q+Q*M*q+G*Z*N-Q*E*N)*P,$[2]=(X*M*W-O*H*W+O*Z*Y-Q*M*Y-X*Z*N+Q*H*N)*P,$[3]=(G*H*W-X*E*W-G*Z*Y+Q*E*Y+X*Z*q-Q*H*q)*P,$[4]=_*P,$[5]=(U*M*W-F*E*W+F*Z*q-J*M*q-U*Z*N+J*E*N)*P,$[6]=(F*H*W-K*M*W-F*Z*Y+J*M*Y+K*Z*N-J*H*N)*P,$[7]=(K*E*W-U*H*W+U*Z*Y-J*E*Y-K*Z*q+J*H*q)*P,$[8]=D*P,$[9]=(F*G*W-U*O*W-F*Q*q+J*O*q+U*Q*N-J*G*N)*P,$[10]=(K*O*W-F*X*W+F*Q*Y-J*O*Y-K*Q*N+J*X*N)*P,$[11]=(U*X*W-K*G*W-U*Q*Y+J*G*Y+K*Q*q-J*X*q)*P,$[12]=k*P,$[13]=(U*O*Z-F*G*Z+F*Q*E-J*O*E-U*Q*M+J*G*M)*P,$[14]=(F*X*Z-K*O*Z-F*Q*H+J*O*H+K*Q*M-J*X*M)*P,$[15]=(K*G*Z-U*X*Z+U*Q*H-J*G*H-K*Q*E+J*X*E)*P,this}scale($){let J=this.elements,Q=$.x,Z=$.y,W=$.z;return J[0]*=Q,J[4]*=Z,J[8]*=W,J[1]*=Q,J[5]*=Z,J[9]*=W,J[2]*=Q,J[6]*=Z,J[10]*=W,J[3]*=Q,J[7]*=Z,J[11]*=W,this}getMaxScaleOnAxis(){let $=this.elements,J=$[0]*$[0]+$[1]*$[1]+$[2]*$[2],Q=$[4]*$[4]+$[5]*$[5]+$[6]*$[6],Z=$[8]*$[8]+$[9]*$[9]+$[10]*$[10];return Math.sqrt(Math.max(J,Q,Z))}makeTranslation($,J,Q){if($.isVector3)this.set(1,0,0,$.x,0,1,0,$.y,0,0,1,$.z,0,0,0,1);else this.set(1,0,0,$,0,1,0,J,0,0,1,Q,0,0,0,1);return this}makeRotationX($){let J=Math.cos($),Q=Math.sin($);return this.set(1,0,0,0,0,J,-Q,0,0,Q,J,0,0,0,0,1),this}makeRotationY($){let J=Math.cos($),Q=Math.sin($);return this.set(J,0,Q,0,0,1,0,0,-Q,0,J,0,0,0,0,1),this}makeRotationZ($){let J=Math.cos($),Q=Math.sin($);return this.set(J,-Q,0,0,Q,J,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis($,J){let Q=Math.cos(J),Z=Math.sin(J),W=1-Q,K=$.x,X=$.y,H=$.z,Y=W*K,U=W*X;return this.set(Y*K+Q,Y*X-Z*H,Y*H+Z*X,0,Y*X+Z*H,U*X+Q,U*H-Z*K,0,Y*H-Z*X,U*H+Z*K,W*H*H+Q,0,0,0,0,1),this}makeScale($,J,Q){return this.set($,0,0,0,0,J,0,0,0,0,Q,0,0,0,0,1),this}makeShear($,J,Q,Z,W,K){return this.set(1,Q,W,0,$,1,K,0,J,Z,1,0,0,0,0,1),this}compose($,J,Q){let Z=this.elements,W=J._x,K=J._y,X=J._z,H=J._w,Y=W+W,U=K+K,G=X+X,E=W*Y,q=W*U,F=W*G,O=K*U,M=K*G,N=X*G,R=H*Y,_=H*U,D=H*G,k=Q.x,T=Q.y,P=Q.z;return Z[0]=(1-(O+N))*k,Z[1]=(q+D)*k,Z[2]=(F-_)*k,Z[3]=0,Z[4]=(q-D)*T,Z[5]=(1-(E+N))*T,Z[6]=(M+R)*T,Z[7]=0,Z[8]=(F+_)*P,Z[9]=(M-R)*P,Z[10]=(1-(E+O))*P,Z[11]=0,Z[12]=$.x,Z[13]=$.y,Z[14]=$.z,Z[15]=1,this}decompose($,J,Q){let Z=this.elements,W=e6.set(Z[0],Z[1],Z[2]).length(),K=e6.set(Z[4],Z[5],Z[6]).length(),X=e6.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;$.x=Z[12],$.y=Z[13],$.z=Z[14],E8.copy(this);let Y=1/W,U=1/K,G=1/X;return E8.elements[0]*=Y,E8.elements[1]*=Y,E8.elements[2]*=Y,E8.elements[4]*=U,E8.elements[5]*=U,E8.elements[6]*=U,E8.elements[8]*=G,E8.elements[9]*=G,E8.elements[10]*=G,J.setFromRotationMatrix(E8),Q.x=W,Q.y=K,Q.z=X,this}makePerspective($,J,Q,Z,W,K,X=2000,H=!1){let Y=this.elements,U=2*W/(J-$),G=2*W/(Q-Z),E=(J+$)/(J-$),q=(Q+Z)/(Q-Z),F,O;if(H)F=W/(K-W),O=K*W/(K-W);else if(X===2000)F=-(K+W)/(K-W),O=-2*K*W/(K-W);else if(X===2001)F=-K/(K-W),O=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return Y[0]=U,Y[4]=0,Y[8]=E,Y[12]=0,Y[1]=0,Y[5]=G,Y[9]=q,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=F,Y[14]=O,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic($,J,Q,Z,W,K,X=2000,H=!1){let Y=this.elements,U=2/(J-$),G=2/(Q-Z),E=-(J+$)/(J-$),q=-(Q+Z)/(Q-Z),F,O;if(H)F=1/(K-W),O=K/(K-W);else if(X===2000)F=-2/(K-W),O=-(K+W)/(K-W);else if(X===2001)F=-1/(K-W),O=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return Y[0]=U,Y[4]=0,Y[8]=0,Y[12]=E,Y[1]=0,Y[5]=G,Y[9]=0,Y[13]=q,Y[2]=0,Y[6]=0,Y[10]=F,Y[14]=O,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals($){let J=this.elements,Q=$.elements;for(let Z=0;Z<16;Z++)if(J[Z]!==Q[Z])return!1;return!0}fromArray($,J=0){for(let Q=0;Q<16;Q++)this.elements[Q]=$[Q+J];return this}toArray($=[],J=0){let Q=this.elements;return $[J]=Q[0],$[J+1]=Q[1],$[J+2]=Q[2],$[J+3]=Q[3],$[J+4]=Q[4],$[J+5]=Q[5],$[J+6]=Q[6],$[J+7]=Q[7],$[J+8]=Q[8],$[J+9]=Q[9],$[J+10]=Q[10],$[J+11]=Q[11],$[J+12]=Q[12],$[J+13]=Q[13],$[J+14]=Q[14],$[J+15]=Q[15],$}}var e6=new x,E8=new g0,rY=new x(0,0,0),tY=new x(1,1,1),$6=new x,o9=new x,o1=new x,T5=new g0,w5=new O8;class F8{constructor($=0,J=0,Q=0,Z=F8.DEFAULT_ORDER){this.isEuler=!0,this._x=$,this._y=J,this._z=Q,this._order=Z}get x(){return this._x}set x($){this._x=$,this._onChangeCallback()}get y(){return this._y}set y($){this._y=$,this._onChangeCallback()}get z(){return this._z}set z($){this._z=$,this._onChangeCallback()}get order(){return this._order}set order($){this._order=$,this._onChangeCallback()}set($,J,Q,Z=this._order){return this._x=$,this._y=J,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy($){return this._x=$._x,this._y=$._y,this._z=$._z,this._order=$._order,this._onChangeCallback(),this}setFromRotationMatrix($,J=this._order,Q=!0){let Z=$.elements,W=Z[0],K=Z[4],X=Z[8],H=Z[1],Y=Z[5],U=Z[9],G=Z[2],E=Z[6],q=Z[10];switch(J){case"XYZ":if(this._y=Math.asin(c0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,Y),this._z=0;break;case"YXZ":if(this._x=Math.asin(-c0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(H,Y);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(c0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-K,Y);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-c0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-K,Y);break;case"YZX":if(this._z=Math.asin(c0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,Y),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-c0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,Y),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+J)}if(this._order=J,Q===!0)this._onChangeCallback();return this}setFromQuaternion($,J,Q){return T5.makeRotationFromQuaternion($),this.setFromRotationMatrix(T5,J,Q)}setFromVector3($,J=this._order){return this.set($.x,$.y,$.z,J)}reorder($){return w5.setFromEuler(this),this.setFromQuaternion(w5,$)}equals($){return $._x===this._x&&$._y===this._y&&$._z===this._z&&$._order===this._order}fromArray($){if(this._x=$[0],this._y=$[1],this._z=$[2],$[3]!==void 0)this._order=$[3];return this._onChangeCallback(),this}toArray($=[],J=0){return $[J]=this._x,$[J+1]=this._y,$[J+2]=this._z,$[J+3]=this._order,$}_onChange($){return this._onChangeCallback=$,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}F8.DEFAULT_ORDER="XYZ";class v${constructor(){this.mask=1}set($){this.mask=(1<<$|0)>>>0}enable($){this.mask|=1<<$|0}enableAll(){this.mask=-1}toggle($){this.mask^=1<<$|0}disable($){this.mask&=~(1<<$|0)}disableAll(){this.mask=0}test($){return(this.mask&$.mask)!==0}isEnabled($){return(this.mask&(1<<$|0))!==0}}var eY=0,S5=new x,$7=new O8,f8=new g0,i9=new x,n7=new x,$U=new x,JU=new O8,j5=new x(1,0,0),f5=new x(0,1,0),v5=new x(0,0,1),y5={type:"added"},QU={type:"removed"},J7={type:"childadded",child:null},dJ={type:"childremoved",child:null};class E1 extends H6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:eY++}),this.uuid=R8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=E1.DEFAULT_UP.clone();let $=new x,J=new F8,Q=new O8,Z=new x(1,1,1);function W(){Q.setFromEuler(J,!1)}function K(){J.setFromQuaternion(Q,void 0,!1)}J._onChange(W),Q._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:$},rotation:{configurable:!0,enumerable:!0,value:J},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new g0},normalMatrix:{value:new p0}}),this.matrix=new g0,this.matrixWorld=new g0,this.matrixAutoUpdate=E1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=E1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v$,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4($){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply($),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion($){return this.quaternion.premultiply($),this}setRotationFromAxisAngle($,J){this.quaternion.setFromAxisAngle($,J)}setRotationFromEuler($){this.quaternion.setFromEuler($,!0)}setRotationFromMatrix($){this.quaternion.setFromRotationMatrix($)}setRotationFromQuaternion($){this.quaternion.copy($)}rotateOnAxis($,J){return $7.setFromAxisAngle($,J),this.quaternion.multiply($7),this}rotateOnWorldAxis($,J){return $7.setFromAxisAngle($,J),this.quaternion.premultiply($7),this}rotateX($){return this.rotateOnAxis(j5,$)}rotateY($){return this.rotateOnAxis(f5,$)}rotateZ($){return this.rotateOnAxis(v5,$)}translateOnAxis($,J){return S5.copy($).applyQuaternion(this.quaternion),this.position.add(S5.multiplyScalar(J)),this}translateX($){return this.translateOnAxis(j5,$)}translateY($){return this.translateOnAxis(f5,$)}translateZ($){return this.translateOnAxis(v5,$)}localToWorld($){return this.updateWorldMatrix(!0,!1),$.applyMatrix4(this.matrixWorld)}worldToLocal($){return this.updateWorldMatrix(!0,!1),$.applyMatrix4(f8.copy(this.matrixWorld).invert())}lookAt($,J,Q){if($.isVector3)i9.copy($);else i9.set($,J,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),n7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)f8.lookAt(n7,i9,this.up);else f8.lookAt(i9,n7,this.up);if(this.quaternion.setFromRotationMatrix(f8),Z)f8.extractRotation(Z.matrixWorld),$7.setFromRotationMatrix(f8),this.quaternion.premultiply($7.invert())}add($){if(arguments.length>1){for(let J=0;J<arguments.length;J++)this.add(arguments[J]);return this}if($===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",$),this;if($&&$.isObject3D)$.removeFromParent(),$.parent=this,this.children.push($),$.dispatchEvent(y5),J7.child=$,this.dispatchEvent(J7),J7.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",$);return this}remove($){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let J=this.children.indexOf($);if(J!==-1)$.parent=null,this.children.splice(J,1),$.dispatchEvent(QU),dJ.child=$,this.dispatchEvent(dJ),dJ.child=null;return this}removeFromParent(){let $=this.parent;if($!==null)$.remove(this);return this}clear(){return this.remove(...this.children)}attach($){if(this.updateWorldMatrix(!0,!1),f8.copy(this.matrixWorld).invert(),$.parent!==null)$.parent.updateWorldMatrix(!0,!1),f8.multiply($.parent.matrixWorld);return $.applyMatrix4(f8),$.removeFromParent(),$.parent=this,this.children.push($),$.updateWorldMatrix(!1,!0),$.dispatchEvent(y5),J7.child=$,this.dispatchEvent(J7),J7.child=null,this}getObjectById($){return this.getObjectByProperty("id",$)}getObjectByName($){return this.getObjectByProperty("name",$)}getObjectByProperty($,J){if(this[$]===J)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let K=this.children[Q].getObjectByProperty($,J);if(K!==void 0)return K}return}getObjectsByProperty($,J,Q=[]){if(this[$]===J)Q.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty($,J,Q);return Q}getWorldPosition($){return this.updateWorldMatrix(!0,!1),$.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion($){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n7,$,$U),$}getWorldScale($){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n7,JU,$),$}getWorldDirection($){this.updateWorldMatrix(!0,!1);let J=this.matrixWorld.elements;return $.set(J[8],J[9],J[10]).normalize()}raycast(){}traverse($){$(this);let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].traverse($)}traverseVisible($){if(this.visible===!1)return;$(this);let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].traverseVisible($)}traverseAncestors($){let J=this.parent;if(J!==null)$(J),J.traverseAncestors($)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld($){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}let J=this.children;for(let Q=0,Z=J.length;Q<Z;Q++)J[Q].updateMatrixWorld($)}updateWorldMatrix($,J){let Q=this.parent;if($===!0&&Q!==null)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(J===!0){let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON($){let J=$===void 0||typeof $==="string",Q={};if(J)$={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON($),Z.indirectTexture=this._indirectTexture.toJSON($),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON($);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(X,H){if(X[H.uuid]===void 0)X[H.uuid]=H.toJSON($);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON($).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON($).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W($.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let H=X.shapes;if(Array.isArray(H))for(let Y=0,U=H.length;Y<U;Y++){let G=H[Y];W($.shapes,G)}else W($.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W($.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let H=0,Y=this.material.length;H<Y;H++)X.push(W($.materials,this.material[H]));Z.material=X}else Z.material=W($.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON($).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let H=this.animations[X];Z.animations.push(W($.animations,H))}}if(J){let X=K($.geometries),H=K($.materials),Y=K($.textures),U=K($.images),G=K($.shapes),E=K($.skeletons),q=K($.animations),F=K($.nodes);if(X.length>0)Q.geometries=X;if(H.length>0)Q.materials=H;if(Y.length>0)Q.textures=Y;if(U.length>0)Q.images=U;if(G.length>0)Q.shapes=G;if(E.length>0)Q.skeletons=E;if(q.length>0)Q.animations=q;if(F.length>0)Q.nodes=F}return Q.object=Z,Q;function K(X){let H=[];for(let Y in X){let U=X[Y];delete U.metadata,H.push(U)}return H}}clone($){return new this.constructor().copy(this,$)}copy($,J=!0){if(this.name=$.name,this.up.copy($.up),this.position.copy($.position),this.rotation.order=$.rotation.order,this.quaternion.copy($.quaternion),this.scale.copy($.scale),this.matrix.copy($.matrix),this.matrixWorld.copy($.matrixWorld),this.matrixAutoUpdate=$.matrixAutoUpdate,this.matrixWorldAutoUpdate=$.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=$.matrixWorldNeedsUpdate,this.layers.mask=$.layers.mask,this.visible=$.visible,this.castShadow=$.castShadow,this.receiveShadow=$.receiveShadow,this.frustumCulled=$.frustumCulled,this.renderOrder=$.renderOrder,this.animations=$.animations.slice(),this.userData=JSON.parse(JSON.stringify($.userData)),J===!0)for(let Q=0;Q<$.children.length;Q++){let Z=$.children[Q];this.add(Z.clone())}return this}}E1.DEFAULT_UP=new x(0,1,0);E1.DEFAULT_MATRIX_AUTO_UPDATE=!0;E1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var q8=new x,v8=new x,cJ=new x,y8=new x,Q7=new x,Z7=new x,b5=new x,nJ=new x,sJ=new x,oJ=new x,iJ=new i0,aJ=new i0,rJ=new i0;class W8{constructor($=new x,J=new x,Q=new x){this.a=$,this.b=J,this.c=Q}static getNormal($,J,Q,Z){Z.subVectors(Q,J),q8.subVectors($,J),Z.cross(q8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord($,J,Q,Z,W){q8.subVectors(Z,J),v8.subVectors(Q,J),cJ.subVectors($,J);let K=q8.dot(q8),X=q8.dot(v8),H=q8.dot(cJ),Y=v8.dot(v8),U=v8.dot(cJ),G=K*Y-X*X;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(Y*H-X*U)*E,F=(K*U-X*H)*E;return W.set(1-q-F,F,q)}static containsPoint($,J,Q,Z){if(this.getBarycoord($,J,Q,Z,y8)===null)return!1;return y8.x>=0&&y8.y>=0&&y8.x+y8.y<=1}static getInterpolation($,J,Q,Z,W,K,X,H){if(this.getBarycoord($,J,Q,Z,y8)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,y8.x),H.addScaledVector(K,y8.y),H.addScaledVector(X,y8.z),H}static getInterpolatedAttribute($,J,Q,Z,W,K){return iJ.setScalar(0),aJ.setScalar(0),rJ.setScalar(0),iJ.fromBufferAttribute($,J),aJ.fromBufferAttribute($,Q),rJ.fromBufferAttribute($,Z),K.setScalar(0),K.addScaledVector(iJ,W.x),K.addScaledVector(aJ,W.y),K.addScaledVector(rJ,W.z),K}static isFrontFacing($,J,Q,Z){return q8.subVectors(Q,J),v8.subVectors($,J),q8.cross(v8).dot(Z)<0?!0:!1}set($,J,Q){return this.a.copy($),this.b.copy(J),this.c.copy(Q),this}setFromPointsAndIndices($,J,Q,Z){return this.a.copy($[J]),this.b.copy($[Q]),this.c.copy($[Z]),this}setFromAttributeAndIndices($,J,Q,Z){return this.a.fromBufferAttribute($,J),this.b.fromBufferAttribute($,Q),this.c.fromBufferAttribute($,Z),this}clone(){return new this.constructor().copy(this)}copy($){return this.a.copy($.a),this.b.copy($.b),this.c.copy($.c),this}getArea(){return q8.subVectors(this.c,this.b),v8.subVectors(this.a,this.b),q8.cross(v8).length()*0.5}getMidpoint($){return $.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal($){return W8.getNormal(this.a,this.b,this.c,$)}getPlane($){return $.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord($,J){return W8.getBarycoord($,this.a,this.b,this.c,J)}getInterpolation($,J,Q,Z,W){return W8.getInterpolation($,this.a,this.b,this.c,J,Q,Z,W)}containsPoint($){return W8.containsPoint($,this.a,this.b,this.c)}isFrontFacing($){return W8.isFrontFacing(this.a,this.b,this.c,$)}intersectsBox($){return $.intersectsTriangle(this)}closestPointToPoint($,J){let Q=this.a,Z=this.b,W=this.c,K,X;Q7.subVectors(Z,Q),Z7.subVectors(W,Q),nJ.subVectors($,Q);let H=Q7.dot(nJ),Y=Z7.dot(nJ);if(H<=0&&Y<=0)return J.copy(Q);sJ.subVectors($,Z);let U=Q7.dot(sJ),G=Z7.dot(sJ);if(U>=0&&G<=U)return J.copy(Z);let E=H*G-U*Y;if(E<=0&&H>=0&&U<=0)return K=H/(H-U),J.copy(Q).addScaledVector(Q7,K);oJ.subVectors($,W);let q=Q7.dot(oJ),F=Z7.dot(oJ);if(F>=0&&q<=F)return J.copy(W);let O=q*Y-H*F;if(O<=0&&Y>=0&&F<=0)return X=Y/(Y-F),J.copy(Q).addScaledVector(Z7,X);let M=U*F-q*G;if(M<=0&&G-U>=0&&q-F>=0)return b5.subVectors(W,Z),X=(G-U)/(G-U+(q-F)),J.copy(Z).addScaledVector(b5,X);let N=1/(M+O+E);return K=O*N,X=E*N,J.copy(Q).addScaledVector(Q7,K).addScaledVector(Z7,X)}equals($){return $.a.equals(this.a)&&$.b.equals(this.b)&&$.c.equals(this.c)}}var XK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},J6={h:0,s:0,l:0},a9={h:0,s:0,l:0};function tJ($,J,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return $+(J-$)*6*Q;if(Q<0.5)return J;if(Q<0.6666666666666666)return $+(J-$)*6*(0.6666666666666666-Q);return $}class y0{constructor($,J,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set($,J,Q)}set($,J,Q){if(J===void 0&&Q===void 0){let Z=$;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB($,J,Q);return this}setScalar($){return this.r=$,this.g=$,this.b=$,this}setHex($,J="srgb"){return $=Math.floor($),this.r=($>>16&255)/255,this.g=($>>8&255)/255,this.b=($&255)/255,o0.colorSpaceToWorking(this,J),this}setRGB($,J,Q,Z=o0.workingColorSpace){return this.r=$,this.g=J,this.b=Q,o0.colorSpaceToWorking(this,Z),this}setHSL($,J,Q,Z=o0.workingColorSpace){if($=$Z($,1),J=c0(J,0,1),Q=c0(Q,0,1),J===0)this.r=this.g=this.b=Q;else{let W=Q<=0.5?Q*(1+J):Q+J-Q*J,K=2*Q-W;this.r=tJ(K,W,$+0.3333333333333333),this.g=tJ(K,W,$),this.b=tJ(K,W,$-0.3333333333333333)}return o0.colorSpaceToWorking(this,Z),this}setStyle($,J="srgb"){function Q(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+$+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec($)){let W,K=Z[1],X=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,J);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,J);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,J);break;default:console.warn("THREE.Color: Unknown color model "+$)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec($)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,J);else if(K===6)return this.setHex(parseInt(W,16),J);else console.warn("THREE.Color: Invalid hex color "+$)}else if($&&$.length>0)return this.setColorName($,J);return this}setColorName($,J="srgb"){let Q=XK[$.toLowerCase()];if(Q!==void 0)this.setHex(Q,J);else console.warn("THREE.Color: Unknown color "+$);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy($){return this.r=$.r,this.g=$.g,this.b=$.b,this}copySRGBToLinear($){return this.r=x8($.r),this.g=x8($.g),this.b=x8($.b),this}copyLinearToSRGB($){return this.r=U7($.r),this.g=U7($.g),this.b=U7($.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex($="srgb"){return o0.workingToColorSpace(j1.copy(this),$),Math.round(c0(j1.r*255,0,255))*65536+Math.round(c0(j1.g*255,0,255))*256+Math.round(c0(j1.b*255,0,255))}getHexString($="srgb"){return("000000"+this.getHex($).toString(16)).slice(-6)}getHSL($,J=o0.workingColorSpace){o0.workingToColorSpace(j1.copy(this),J);let{r:Q,g:Z,b:W}=j1,K=Math.max(Q,Z,W),X=Math.min(Q,Z,W),H,Y,U=(X+K)/2;if(X===K)H=0,Y=0;else{let G=K-X;switch(Y=U<=0.5?G/(K+X):G/(2-K-X),K){case Q:H=(Z-W)/G+(Z<W?6:0);break;case Z:H=(W-Q)/G+2;break;case W:H=(Q-Z)/G+4;break}H/=6}return $.h=H,$.s=Y,$.l=U,$}getRGB($,J=o0.workingColorSpace){return o0.workingToColorSpace(j1.copy(this),J),$.r=j1.r,$.g=j1.g,$.b=j1.b,$}getStyle($="srgb"){o0.workingToColorSpace(j1.copy(this),$);let{r:J,g:Q,b:Z}=j1;if($!=="srgb")return`color(${$} ${J.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(J*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL($,J,Q){return this.getHSL(J6),this.setHSL(J6.h+$,J6.s+J,J6.l+Q)}add($){return this.r+=$.r,this.g+=$.g,this.b+=$.b,this}addColors($,J){return this.r=$.r+J.r,this.g=$.g+J.g,this.b=$.b+J.b,this}addScalar($){return this.r+=$,this.g+=$,this.b+=$,this}sub($){return this.r=Math.max(0,this.r-$.r),this.g=Math.max(0,this.g-$.g),this.b=Math.max(0,this.b-$.b),this}multiply($){return this.r*=$.r,this.g*=$.g,this.b*=$.b,this}multiplyScalar($){return this.r*=$,this.g*=$,this.b*=$,this}lerp($,J){return this.r+=($.r-this.r)*J,this.g+=($.g-this.g)*J,this.b+=($.b-this.b)*J,this}lerpColors($,J,Q){return this.r=$.r+(J.r-$.r)*Q,this.g=$.g+(J.g-$.g)*Q,this.b=$.b+(J.b-$.b)*Q,this}lerpHSL($,J){this.getHSL(J6),$.getHSL(a9);let Q=e7(J6.h,a9.h,J),Z=e7(J6.s,a9.s,J),W=e7(J6.l,a9.l,J);return this.setHSL(Q,Z,W),this}setFromVector3($){return this.r=$.x,this.g=$.y,this.b=$.z,this}applyMatrix3($){let J=this.r,Q=this.g,Z=this.b,W=$.elements;return this.r=W[0]*J+W[3]*Q+W[6]*Z,this.g=W[1]*J+W[4]*Q+W[7]*Z,this.b=W[2]*J+W[5]*Q+W[8]*Z,this}equals($){return $.r===this.r&&$.g===this.g&&$.b===this.b}fromArray($,J=0){return this.r=$[J],this.g=$[J+1],this.b=$[J+2],this}toArray($=[],J=0){return $[J]=this.r,$[J+1]=this.g,$[J+2]=this.b,$}fromBufferAttribute($,J){return this.r=$.getX(J),this.g=$.getY(J),this.b=$.getZ(J),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var j1=new y0;y0.NAMES=XK;var ZU=0;class t1 extends H6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZU++}),this.uuid=R8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest($){if(this._alphaTest>0!==$>0)this.version++;this._alphaTest=$}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues($){if($===void 0)return;for(let J in $){let Q=$[J];if(Q===void 0){console.warn(`THREE.Material: parameter '${J}' has value of undefined.`);continue}let Z=this[J];if(Z===void 0){console.warn(`THREE.Material: '${J}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[J]=Q}}toJSON($){let J=$===void 0||typeof $==="string";if(J)$={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON($).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON($).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON($).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON($).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON($).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON($).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON($).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON($).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON($).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON($).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON($).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON($).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON($).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON($).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON($).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON($).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON($).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON($).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON($).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON($).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON($).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON($).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON($).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON($).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON($).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON($).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors===!0)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=!0;if(this.blendSrc!==204)Q.blendSrc=this.blendSrc;if(this.blendDst!==205)Q.blendDst=this.blendDst;if(this.blendEquation!==100)Q.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Q.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Q.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Q.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Q.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Q.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Q.depthFunc=this.depthFunc;if(this.depthTest===!1)Q.depthTest=this.depthTest;if(this.depthWrite===!1)Q.depthWrite=this.depthWrite;if(this.colorWrite===!1)Q.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Q.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Q.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Q.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Q.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Q.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Q.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Q.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Q.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=!0;if(this.alphaToCoverage===!0)Q.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Q.forceSinglePass=!0;if(this.wireframe===!0)Q.wireframe=!0;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=!0;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(W){let K=[];for(let X in W){let H=W[X];delete H.metadata,K.push(H)}return K}if(J){let W=Z($.textures),K=Z($.images);if(W.length>0)Q.textures=W;if(K.length>0)Q.images=K}return Q}clone(){return new this.constructor().copy(this)}copy($){this.name=$.name,this.blending=$.blending,this.side=$.side,this.vertexColors=$.vertexColors,this.opacity=$.opacity,this.transparent=$.transparent,this.blendSrc=$.blendSrc,this.blendDst=$.blendDst,this.blendEquation=$.blendEquation,this.blendSrcAlpha=$.blendSrcAlpha,this.blendDstAlpha=$.blendDstAlpha,this.blendEquationAlpha=$.blendEquationAlpha,this.blendColor.copy($.blendColor),this.blendAlpha=$.blendAlpha,this.depthFunc=$.depthFunc,this.depthTest=$.depthTest,this.depthWrite=$.depthWrite,this.stencilWriteMask=$.stencilWriteMask,this.stencilFunc=$.stencilFunc,this.stencilRef=$.stencilRef,this.stencilFuncMask=$.stencilFuncMask,this.stencilFail=$.stencilFail,this.stencilZFail=$.stencilZFail,this.stencilZPass=$.stencilZPass,this.stencilWrite=$.stencilWrite;let J=$.clippingPlanes,Q=null;if(J!==null){let Z=J.length;Q=Array(Z);for(let W=0;W!==Z;++W)Q[W]=J[W].clone()}return this.clippingPlanes=Q,this.clipIntersection=$.clipIntersection,this.clipShadows=$.clipShadows,this.shadowSide=$.shadowSide,this.colorWrite=$.colorWrite,this.precision=$.precision,this.polygonOffset=$.polygonOffset,this.polygonOffsetFactor=$.polygonOffsetFactor,this.polygonOffsetUnits=$.polygonOffsetUnits,this.dithering=$.dithering,this.alphaTest=$.alphaTest,this.alphaHash=$.alphaHash,this.alphaToCoverage=$.alphaToCoverage,this.premultipliedAlpha=$.premultipliedAlpha,this.forceSinglePass=$.forceSinglePass,this.visible=$.visible,this.toneMapped=$.toneMapped,this.userData=JSON.parse(JSON.stringify($.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate($){if($===!0)this.version++}}class I8 extends t1{constructor($){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new F8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.lightMap=$.lightMap,this.lightMapIntensity=$.lightMapIntensity,this.aoMap=$.aoMap,this.aoMapIntensity=$.aoMapIntensity,this.specularMap=$.specularMap,this.alphaMap=$.alphaMap,this.envMap=$.envMap,this.envMapRotation.copy($.envMapRotation),this.combine=$.combine,this.reflectivity=$.reflectivity,this.refractionRatio=$.refractionRatio,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.wireframeLinecap=$.wireframeLinecap,this.wireframeLinejoin=$.wireframeLinejoin,this.fog=$.fog,this}}var D1=new x,r9=new u0,WU=0;class X1{constructor($,J,Q=!1){if(Array.isArray($))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WU++}),this.name="",this.array=$,this.itemSize=J,this.count=$!==void 0?$.length/J:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate($){if($===!0)this.version++}setUsage($){return this.usage=$,this}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}copy($){return this.name=$.name,this.array=new $.array.constructor($.array),this.itemSize=$.itemSize,this.count=$.count,this.normalized=$.normalized,this.usage=$.usage,this.gpuType=$.gpuType,this}copyAt($,J,Q){$*=this.itemSize,Q*=J.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[$+Z]=J.array[Q+Z];return this}copyArray($){return this.array.set($),this}applyMatrix3($){if(this.itemSize===2)for(let J=0,Q=this.count;J<Q;J++)r9.fromBufferAttribute(this,J),r9.applyMatrix3($),this.setXY(J,r9.x,r9.y);else if(this.itemSize===3)for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.applyMatrix3($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}applyMatrix4($){for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.applyMatrix4($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}applyNormalMatrix($){for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.applyNormalMatrix($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}transformDirection($){for(let J=0,Q=this.count;J<Q;J++)D1.fromBufferAttribute(this,J),D1.transformDirection($),this.setXYZ(J,D1.x,D1.y,D1.z);return this}set($,J=0){return this.array.set($,J),this}getComponent($,J){let Q=this.array[$*this.itemSize+J];if(this.normalized)Q=N8(Q,this.array);return Q}setComponent($,J,Q){if(this.normalized)Q=$1(Q,this.array);return this.array[$*this.itemSize+J]=Q,this}getX($){let J=this.array[$*this.itemSize];if(this.normalized)J=N8(J,this.array);return J}setX($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize]=J,this}getY($){let J=this.array[$*this.itemSize+1];if(this.normalized)J=N8(J,this.array);return J}setY($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+1]=J,this}getZ($){let J=this.array[$*this.itemSize+2];if(this.normalized)J=N8(J,this.array);return J}setZ($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+2]=J,this}getW($){let J=this.array[$*this.itemSize+3];if(this.normalized)J=N8(J,this.array);return J}setW($,J){if(this.normalized)J=$1(J,this.array);return this.array[$*this.itemSize+3]=J,this}setXY($,J,Q){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this}setXYZ($,J,Q,Z){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this.array[$+2]=Z,this}setXYZW($,J,Q,Z,W){if($*=this.itemSize,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array),W=$1(W,this.array);return this.array[$+0]=J,this.array[$+1]=Q,this.array[$+2]=Z,this.array[$+3]=W,this}onUpload($){return this.onUploadCallback=$,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let $={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")$.name=this.name;if(this.usage!==35044)$.usage=this.usage;return $}}class y$ extends X1{constructor($,J,Q){super(new Uint16Array($),J,Q)}}class b$ extends X1{constructor($,J,Q){super(new Uint32Array($),J,Q)}}class X8 extends X1{constructor($,J,Q){super(new Float32Array($),J,Q)}}var KU=0,Z8=new g0,eJ=new E1,W7=new x,i1=new l1,s7=new l1,P1=new x;class x1 extends H6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KU++}),this.uuid=R8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex($){if(Array.isArray($))this.index=new((JZ($))?b$:y$)($,1);else this.index=$;return this}setIndirect($){return this.indirect=$,this}getIndirect(){return this.indirect}getAttribute($){return this.attributes[$]}setAttribute($,J){return this.attributes[$]=J,this}deleteAttribute($){return delete this.attributes[$],this}hasAttribute($){return this.attributes[$]!==void 0}addGroup($,J,Q=0){this.groups.push({start:$,count:J,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange($,J){this.drawRange.start=$,this.drawRange.count=J}applyMatrix4($){let J=this.attributes.position;if(J!==void 0)J.applyMatrix4($),J.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let W=new p0().getNormalMatrix($);Q.applyNormalMatrix(W),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection($),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion($){return Z8.makeRotationFromQuaternion($),this.applyMatrix4(Z8),this}rotateX($){return Z8.makeRotationX($),this.applyMatrix4(Z8),this}rotateY($){return Z8.makeRotationY($),this.applyMatrix4(Z8),this}rotateZ($){return Z8.makeRotationZ($),this.applyMatrix4(Z8),this}translate($,J,Q){return Z8.makeTranslation($,J,Q),this.applyMatrix4(Z8),this}scale($,J,Q){return Z8.makeScale($,J,Q),this.applyMatrix4(Z8),this}lookAt($){return eJ.lookAt($),eJ.updateMatrix(),this.applyMatrix4(eJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(W7).negate(),this.translate(W7.x,W7.y,W7.z),this}setFromPoints($){let J=this.getAttribute("position");if(J===void 0){let Q=[];for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z];Q.push(K.x,K.y,K.z||0)}this.setAttribute("position",new X8(Q,3))}else{let Q=Math.min($.length,J.count);for(let Z=0;Z<Q;Z++){let W=$[Z];J.setXYZ(Z,W.x,W.y,W.z||0)}if($.length>J.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");J.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new l1;let $=this.attributes.position,J=this.morphAttributes.position;if($&&$.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if($!==void 0){if(this.boundingBox.setFromBufferAttribute($),J)for(let Q=0,Z=J.length;Q<Z;Q++){let W=J[Q];if(i1.setFromBufferAttribute(W),this.morphTargetsRelative)P1.addVectors(this.boundingBox.min,i1.min),this.boundingBox.expandByPoint(P1),P1.addVectors(this.boundingBox.max,i1.max),this.boundingBox.expandByPoint(P1);else this.boundingBox.expandByPoint(i1.min),this.boundingBox.expandByPoint(i1.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new r1;let $=this.attributes.position,J=this.morphAttributes.position;if($&&$.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if($){let Q=this.boundingSphere.center;if(i1.setFromBufferAttribute($),J)for(let W=0,K=J.length;W<K;W++){let X=J[W];if(s7.setFromBufferAttribute(X),this.morphTargetsRelative)P1.addVectors(i1.min,s7.min),i1.expandByPoint(P1),P1.addVectors(i1.max,s7.max),i1.expandByPoint(P1);else i1.expandByPoint(s7.min),i1.expandByPoint(s7.max)}i1.getCenter(Q);let Z=0;for(let W=0,K=$.count;W<K;W++)P1.fromBufferAttribute($,W),Z=Math.max(Z,Q.distanceToSquared(P1));if(J)for(let W=0,K=J.length;W<K;W++){let X=J[W],H=this.morphTargetsRelative;for(let Y=0,U=X.count;Y<U;Y++){if(P1.fromBufferAttribute(X,Y),H)W7.fromBufferAttribute($,Y),P1.add(W7);Z=Math.max(Z,Q.distanceToSquared(P1))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let $=this.index,J=this.attributes;if($===null||J.position===void 0||J.normal===void 0||J.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:W}=J;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new X1(new Float32Array(4*Q.count),4));let K=this.getAttribute("tangent"),X=[],H=[];for(let A=0;A<Q.count;A++)X[A]=new x,H[A]=new x;let Y=new x,U=new x,G=new x,E=new u0,q=new u0,F=new u0,O=new x,M=new x;function N(A,y,z){Y.fromBufferAttribute(Q,A),U.fromBufferAttribute(Q,y),G.fromBufferAttribute(Q,z),E.fromBufferAttribute(W,A),q.fromBufferAttribute(W,y),F.fromBufferAttribute(W,z),U.sub(Y),G.sub(Y),q.sub(E),F.sub(E);let L=1/(q.x*F.y-F.x*q.y);if(!isFinite(L))return;O.copy(U).multiplyScalar(F.y).addScaledVector(G,-q.y).multiplyScalar(L),M.copy(G).multiplyScalar(q.x).addScaledVector(U,-F.x).multiplyScalar(L),X[A].add(O),X[y].add(O),X[z].add(O),H[A].add(M),H[y].add(M),H[z].add(M)}let R=this.groups;if(R.length===0)R=[{start:0,count:$.count}];for(let A=0,y=R.length;A<y;++A){let z=R[A],L=z.start,C=z.count;for(let I=L,S=L+C;I<S;I+=3)N($.getX(I+0),$.getX(I+1),$.getX(I+2))}let _=new x,D=new x,k=new x,T=new x;function P(A){k.fromBufferAttribute(Z,A),T.copy(k);let y=X[A];_.copy(y),_.sub(k.multiplyScalar(k.dot(y))).normalize(),D.crossVectors(T,y);let L=D.dot(H[A])<0?-1:1;K.setXYZW(A,_.x,_.y,_.z,L)}for(let A=0,y=R.length;A<y;++A){let z=R[A],L=z.start,C=z.count;for(let I=L,S=L+C;I<S;I+=3)P($.getX(I+0)),P($.getX(I+1)),P($.getX(I+2))}}computeVertexNormals(){let $=this.index,J=this.getAttribute("position");if(J!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new X1(new Float32Array(J.count*3),3),this.setAttribute("normal",Q);else for(let E=0,q=Q.count;E<q;E++)Q.setXYZ(E,0,0,0);let Z=new x,W=new x,K=new x,X=new x,H=new x,Y=new x,U=new x,G=new x;if($)for(let E=0,q=$.count;E<q;E+=3){let F=$.getX(E+0),O=$.getX(E+1),M=$.getX(E+2);Z.fromBufferAttribute(J,F),W.fromBufferAttribute(J,O),K.fromBufferAttribute(J,M),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),X.fromBufferAttribute(Q,F),H.fromBufferAttribute(Q,O),Y.fromBufferAttribute(Q,M),X.add(U),H.add(U),Y.add(U),Q.setXYZ(F,X.x,X.y,X.z),Q.setXYZ(O,H.x,H.y,H.z),Q.setXYZ(M,Y.x,Y.y,Y.z)}else for(let E=0,q=J.count;E<q;E+=3)Z.fromBufferAttribute(J,E+0),W.fromBufferAttribute(J,E+1),K.fromBufferAttribute(J,E+2),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),Q.setXYZ(E+0,U.x,U.y,U.z),Q.setXYZ(E+1,U.x,U.y,U.z),Q.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let $=this.attributes.normal;for(let J=0,Q=$.count;J<Q;J++)P1.fromBufferAttribute($,J),P1.normalize(),$.setXYZ(J,P1.x,P1.y,P1.z)}toNonIndexed(){function $(X,H){let{array:Y,itemSize:U,normalized:G}=X,E=new Y.constructor(H.length*U),q=0,F=0;for(let O=0,M=H.length;O<M;O++){if(X.isInterleavedBufferAttribute)q=H[O]*X.data.stride+X.offset;else q=H[O]*U;for(let N=0;N<U;N++)E[F++]=Y[q++]}return new X1(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let J=new x1,Q=this.index.array,Z=this.attributes;for(let X in Z){let H=Z[X],Y=$(H,Q);J.setAttribute(X,Y)}let W=this.morphAttributes;for(let X in W){let H=[],Y=W[X];for(let U=0,G=Y.length;U<G;U++){let E=Y[U],q=$(E,Q);H.push(q)}J.morphAttributes[X]=H}J.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let X=0,H=K.length;X<H;X++){let Y=K[X];J.addGroup(Y.start,Y.count,Y.materialIndex)}return J}toJSON(){let $={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(Object.keys(this.userData).length>0)$.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let Y in H)if(H[Y]!==void 0)$[Y]=H[Y];return $}$.data={attributes:{}};let J=this.index;if(J!==null)$.data.index={type:J.array.constructor.name,array:Array.prototype.slice.call(J.array)};let Q=this.attributes;for(let H in Q){let Y=Q[H];$.data.attributes[H]=Y.toJSON($.data)}let Z={},W=!1;for(let H in this.morphAttributes){let Y=this.morphAttributes[H],U=[];for(let G=0,E=Y.length;G<E;G++){let q=Y[G];U.push(q.toJSON($.data))}if(U.length>0)Z[H]=U,W=!0}if(W)$.data.morphAttributes=Z,$.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)$.data.groups=JSON.parse(JSON.stringify(K));let X=this.boundingSphere;if(X!==null)$.data.boundingSphere=X.toJSON();return $}clone(){return new this.constructor().copy(this)}copy($){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let J={};this.name=$.name;let Q=$.index;if(Q!==null)this.setIndex(Q.clone());let Z=$.attributes;for(let Y in Z){let U=Z[Y];this.setAttribute(Y,U.clone(J))}let W=$.morphAttributes;for(let Y in W){let U=[],G=W[Y];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(J));this.morphAttributes[Y]=U}this.morphTargetsRelative=$.morphTargetsRelative;let K=$.groups;for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];this.addGroup(G.start,G.count,G.materialIndex)}let X=$.boundingBox;if(X!==null)this.boundingBox=X.clone();let H=$.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=$.drawRange.start,this.drawRange.count=$.drawRange.count,this.userData=$.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var h5=new g0,I6=new D7,t9=new r1,x5=new x,e9=new x,$$=new x,J$=new x,$Q=new x,Q$=new x,g5=new x,Z$=new x;class A1 extends E1{constructor($=new x1,J=new I8){super();this.isMesh=!0,this.type="Mesh",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy($,J){if(super.copy($,J),$.morphTargetInfluences!==void 0)this.morphTargetInfluences=$.morphTargetInfluences.slice();if($.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},$.morphTargetDictionary);return this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition($,J){let Q=this.geometry,Z=Q.attributes.position,W=Q.morphAttributes.position,K=Q.morphTargetsRelative;J.fromBufferAttribute(Z,$);let X=this.morphTargetInfluences;if(W&&X){Q$.set(0,0,0);for(let H=0,Y=W.length;H<Y;H++){let U=X[H],G=W[H];if(U===0)continue;if($Q.fromBufferAttribute(G,$),K)Q$.addScaledVector($Q,U);else Q$.addScaledVector($Q.sub(J),U)}J.add(Q$)}return J}raycast($,J){let Q=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(t9.copy(Q.boundingSphere),t9.applyMatrix4(W),I6.copy($.ray).recast($.near),t9.containsPoint(I6.origin)===!1){if(I6.intersectSphere(t9,x5)===null)return;if(I6.origin.distanceToSquared(x5)>($.far-$.near)**2)return}if(h5.copy(W).invert(),I6.copy($.ray).applyMatrix4(h5),Q.boundingBox!==null){if(I6.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections($,J,I6)}_computeIntersections($,J,Q){let Z,W=this.geometry,K=this.material,X=W.index,H=W.attributes.position,Y=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(X!==null)if(Array.isArray(K))for(let F=0,O=E.length;F<O;F++){let M=E[F],N=K[M.materialIndex],R=Math.max(M.start,q.start),_=Math.min(X.count,Math.min(M.start+M.count,q.start+q.count));for(let D=R,k=_;D<k;D+=3){let T=X.getX(D),P=X.getX(D+1),A=X.getX(D+2);if(Z=W$(this,N,$,Q,Y,U,G,T,P,A),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=M.materialIndex,J.push(Z)}}else{let F=Math.max(0,q.start),O=Math.min(X.count,q.start+q.count);for(let M=F,N=O;M<N;M+=3){let R=X.getX(M),_=X.getX(M+1),D=X.getX(M+2);if(Z=W$(this,K,$,Q,Y,U,G,R,_,D),Z)Z.faceIndex=Math.floor(M/3),J.push(Z)}}else if(H!==void 0)if(Array.isArray(K))for(let F=0,O=E.length;F<O;F++){let M=E[F],N=K[M.materialIndex],R=Math.max(M.start,q.start),_=Math.min(H.count,Math.min(M.start+M.count,q.start+q.count));for(let D=R,k=_;D<k;D+=3){let T=D,P=D+1,A=D+2;if(Z=W$(this,N,$,Q,Y,U,G,T,P,A),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=M.materialIndex,J.push(Z)}}else{let F=Math.max(0,q.start),O=Math.min(H.count,q.start+q.count);for(let M=F,N=O;M<N;M+=3){let R=M,_=M+1,D=M+2;if(Z=W$(this,K,$,Q,Y,U,G,R,_,D),Z)Z.faceIndex=Math.floor(M/3),J.push(Z)}}}}function XU($,J,Q,Z,W,K,X,H){let Y;if(J.side===1)Y=Z.intersectTriangle(X,K,W,!0,H);else Y=Z.intersectTriangle(W,K,X,J.side===0,H);if(Y===null)return null;Z$.copy(H),Z$.applyMatrix4($.matrixWorld);let U=Q.ray.origin.distanceTo(Z$);if(U<Q.near||U>Q.far)return null;return{distance:U,point:Z$.clone(),object:$}}function W$($,J,Q,Z,W,K,X,H,Y,U){$.getVertexPosition(H,e9),$.getVertexPosition(Y,$$),$.getVertexPosition(U,J$);let G=XU($,J,Q,Z,e9,$$,J$,g5);if(G){let E=new x;if(W8.getBarycoord(g5,e9,$$,J$,E),W)G.uv=W8.getInterpolatedAttribute(W,H,Y,U,E,new u0);if(K)G.uv1=W8.getInterpolatedAttribute(K,H,Y,U,E,new u0);if(X){if(G.normal=W8.getInterpolatedAttribute(X,H,Y,U,E,new x),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:H,b:Y,c:U,normal:new x,materialIndex:0};W8.getNormal(e9,$$,J$,q.normal),G.face=q,G.barycoord=E}return G}class _7 extends x1{constructor($=1,J=1,Q=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:$,height:J,depth:Q,widthSegments:Z,heightSegments:W,depthSegments:K};let X=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let H=[],Y=[],U=[],G=[],E=0,q=0;F("z","y","x",-1,-1,Q,J,$,K,W,0),F("z","y","x",1,-1,Q,J,-$,K,W,1),F("x","z","y",1,1,$,Q,J,Z,K,2),F("x","z","y",1,-1,$,Q,-J,Z,K,3),F("x","y","z",1,-1,$,J,Q,Z,W,4),F("x","y","z",-1,-1,$,J,-Q,Z,W,5),this.setIndex(H),this.setAttribute("position",new X8(Y,3)),this.setAttribute("normal",new X8(U,3)),this.setAttribute("uv",new X8(G,2));function F(O,M,N,R,_,D,k,T,P,A,y){let z=D/P,L=k/A,C=D/2,I=k/2,S=T/2,f=P+1,g=A+1,b=0,d=0,h=new x;for(let i=0;i<g;i++){let t=i*L-I;for(let Z0=0;Z0<f;Z0++){let E0=Z0*z-C;h[O]=E0*R,h[M]=t*_,h[N]=S,Y.push(h.x,h.y,h.z),h[O]=0,h[M]=0,h[N]=T>0?1:-1,U.push(h.x,h.y,h.z),G.push(Z0/P),G.push(1-i/A),b+=1}}for(let i=0;i<A;i++)for(let t=0;t<P;t++){let Z0=E+t+f*i,E0=E+t+f*(i+1),C0=E+(t+1)+f*(i+1),_0=E+(t+1)+f*i;H.push(Z0,E0,_0),H.push(E0,C0,_0),d+=6}X.addGroup(q,d,y),q+=d,E+=b}}copy($){return super.copy($),this.parameters=Object.assign({},$.parameters),this}static fromJSON($){return new _7($.width,$.height,$.depth,$.widthSegments,$.heightSegments,$.depthSegments)}}function f6($){let J={};for(let Q in $){J[Q]={};for(let Z in $[Q]){let W=$[Q][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),J[Q][Z]=null;else J[Q][Z]=W.clone();else if(Array.isArray(W))J[Q][Z]=W.slice();else J[Q][Z]=W}}return J}function f1($){let J={};for(let Q=0;Q<$.length;Q++){let Z=f6($[Q]);for(let W in Z)J[W]=Z[W]}return J}function HU($){let J=[];for(let Q=0;Q<$.length;Q++)J.push($[Q].clone());return J}function KZ($){let J=$.getRenderTarget();if(J===null)return $.outputColorSpace;if(J.isXRRenderTarget===!0)return J.texture.colorSpace;return o0.workingColorSpace}var HK={clone:f6,merge:f1},YU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class u1 extends t1{constructor($){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YU,this.fragmentShader=UU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,$!==void 0)this.setValues($)}copy($){return super.copy($),this.fragmentShader=$.fragmentShader,this.vertexShader=$.vertexShader,this.uniforms=f6($.uniforms),this.uniformsGroups=HU($.uniformsGroups),this.defines=Object.assign({},$.defines),this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.fog=$.fog,this.lights=$.lights,this.clipping=$.clipping,this.extensions=Object.assign({},$.extensions),this.glslVersion=$.glslVersion,this}toJSON($){let J=super.toJSON($);J.glslVersion=this.glslVersion,J.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)J.uniforms[Z]={type:"t",value:K.toJSON($).uuid};else if(K&&K.isColor)J.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)J.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)J.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)J.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)J.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)J.uniforms[Z]={type:"m4",value:K.toArray()};else J.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)J.defines=this.defines;J.vertexShader=this.vertexShader,J.fragmentShader=this.fragmentShader,J.lights=this.lights,J.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)J.extensions=Q;return J}}class V7 extends E1{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new g0,this.projectionMatrix=new g0,this.projectionMatrixInverse=new g0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy($,J){return super.copy($,J),this.matrixWorldInverse.copy($.matrixWorldInverse),this.projectionMatrix.copy($.projectionMatrix),this.projectionMatrixInverse.copy($.projectionMatrixInverse),this.coordinateSystem=$.coordinateSystem,this}getWorldDirection($){return super.getWorldDirection($).negate()}updateMatrixWorld($){super.updateMatrixWorld($),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix($,J){super.updateWorldMatrix($,J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var Q6=new x,p5=new u0,l5=new u0;class T1 extends V7{constructor($=50,J=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=$,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=J,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy($,J){return super.copy($,J),this.fov=$.fov,this.zoom=$.zoom,this.near=$.near,this.far=$.far,this.focus=$.focus,this.aspect=$.aspect,this.view=$.view===null?null:Object.assign({},$.view),this.filmGauge=$.filmGauge,this.filmOffset=$.filmOffset,this}setFocalLength($){let J=0.5*this.getFilmHeight()/$;this.fov=A6*2*Math.atan(J),this.updateProjectionMatrix()}getFocalLength(){let $=Math.tan(t7*0.5*this.fov);return 0.5*this.getFilmHeight()/$}getEffectiveFOV(){return A6*2*Math.atan(Math.tan(t7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds($,J,Q){Q6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),J.set(Q6.x,Q6.y).multiplyScalar(-$/Q6.z),Q6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(Q6.x,Q6.y).multiplyScalar(-$/Q6.z)}getViewSize($,J){return this.getViewBounds($,p5,l5),J.subVectors(l5,p5)}setViewOffset($,J,Q,Z,W,K){if(this.aspect=$/J,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=$,this.view.fullHeight=J,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let $=this.near,J=$*Math.tan(t7*0.5*this.fov)/this.zoom,Q=2*J,Z=this.aspect*Q,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:Y}=K;W+=K.offsetX*Z/H,J-=K.offsetY*Q/Y,Z*=K.width/H,Q*=K.height/Y}let X=this.filmOffset;if(X!==0)W+=$*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,J,J-Q,$,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON($){let J=super.toJSON($);if(J.object.fov=this.fov,J.object.zoom=this.zoom,J.object.near=this.near,J.object.far=this.far,J.object.focus=this.focus,J.object.aspect=this.aspect,this.view!==null)J.object.view=Object.assign({},this.view);return J.object.filmGauge=this.filmGauge,J.object.filmOffset=this.filmOffset,J}}var K7=-90,X7=1;class XZ extends E1{constructor($,J,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new T1(K7,X7,$,J);Z.layers=this.layers,this.add(Z);let W=new T1(K7,X7,$,J);W.layers=this.layers,this.add(W);let K=new T1(K7,X7,$,J);K.layers=this.layers,this.add(K);let X=new T1(K7,X7,$,J);X.layers=this.layers,this.add(X);let H=new T1(K7,X7,$,J);H.layers=this.layers,this.add(H);let Y=new T1(K7,X7,$,J);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){let $=this.coordinateSystem,J=this.children.concat(),[Q,Z,W,K,X,H]=J;for(let Y of J)this.remove(Y);if($===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if($===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+$);for(let Y of J)this.add(Y),Y.updateMatrixWorld()}update($,J){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==$.coordinateSystem)this.coordinateSystem=$.coordinateSystem,this.updateCoordinateSystem();let[W,K,X,H,Y,U]=this.children,G=$.getRenderTarget(),E=$.getActiveCubeFace(),q=$.getActiveMipmapLevel(),F=$.xr.enabled;$.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,$.setRenderTarget(Q,0,Z),$.render(J,W),$.setRenderTarget(Q,1,Z),$.render(J,K),$.setRenderTarget(Q,2,Z),$.render(J,X),$.setRenderTarget(Q,3,Z),$.render(J,H),$.setRenderTarget(Q,4,Z),$.render(J,Y),Q.texture.generateMipmaps=O,$.setRenderTarget(Q,5,Z),$.render(J,U),$.setRenderTarget(G,E,q),$.xr.enabled=F,Q.texture.needsPMREMUpdate=!0}}class h$ extends L1{constructor($=[],J=301,Q,Z,W,K,X,H,Y,U){super($,J,Q,Z,W,K,X,H,Y,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images($){this.image=$}}class HZ extends M8{constructor($=1,J={}){super($,$,J);this.isWebGLCubeRenderTarget=!0;let Q={width:$,height:$,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new h$(Z),this._setTextureOptions(J),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture($,J){this.texture.type=J.type,this.texture.colorSpace=J.colorSpace,this.texture.generateMipmaps=J.generateMipmaps,this.texture.minFilter=J.minFilter,this.texture.magFilter=J.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new _7(5,5,5),W=new u1({name:"CubemapFromEquirect",uniforms:f6(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=J;let K=new A1(Z,W),X=J.minFilter;if(J.minFilter===1008)J.minFilter=1006;return new XZ(1,10,this).update($,K),J.minFilter=X,K.geometry.dispose(),K.material.dispose(),this}clear($,J=!0,Q=!0,Z=!0){let W=$.getRenderTarget();for(let K=0;K<6;K++)$.setRenderTarget(this,K),$.clear(J,Q,Z);$.setRenderTarget(W)}}class K8 extends E1{constructor(){super();this.isGroup=!0,this.type="Group"}}var GU={type:"move"};class Y9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new K8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new K8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new K8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x;return this._grip}dispatchEvent($){if(this._targetRay!==null)this._targetRay.dispatchEvent($);if(this._grip!==null)this._grip.dispatchEvent($);if(this._hand!==null)this._hand.dispatchEvent($);return this}connect($){if($&&$.hand){let J=this._hand;if(J)for(let Q of $.hand.values())this._getHandJoint(J,Q)}return this.dispatchEvent({type:"connected",data:$}),this}disconnect($){if(this.dispatchEvent({type:"disconnected",data:$}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update($,J,Q){let Z=null,W=null,K=null,X=this._targetRay,H=this._grip,Y=this._hand;if($&&J.session.visibilityState!=="visible-blurred"){if(Y&&$.hand){K=!0;for(let O of $.hand.values()){let M=J.getJointPose(O,Q),N=this._getHandJoint(Y,O);if(M!==null)N.matrix.fromArray(M.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=M.radius;N.visible=M!==null}let U=Y.joints["index-finger-tip"],G=Y.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,F=0.005;if(Y.inputState.pinching&&E>q+F)Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:$.handedness,target:this});else if(!Y.inputState.pinching&&E<=q-F)Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:$.handedness,target:this})}else if(H!==null&&$.gripSpace){if(W=J.getPose($.gripSpace,Q),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(X!==null){if(Z=J.getPose($.targetRaySpace,Q),Z===null&&W!==null)Z=W;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(GU)}}}if(X!==null)X.visible=Z!==null;if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=K!==null;return this}_getHandJoint($,J){if($.joints[J.jointName]===void 0){let Q=new K8;Q.matrixAutoUpdate=!1,Q.visible=!1,$.joints[J.jointName]=Q,$.add(Q)}return $.joints[J.jointName]}}class z7 extends E1{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new F8,this.environmentIntensity=1,this.environmentRotation=new F8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy($,J){if(super.copy($,J),$.background!==null)this.background=$.background.clone();if($.environment!==null)this.environment=$.environment.clone();if($.fog!==null)this.fog=$.fog.clone();if(this.backgroundBlurriness=$.backgroundBlurriness,this.backgroundIntensity=$.backgroundIntensity,this.backgroundRotation.copy($.backgroundRotation),this.environmentIntensity=$.environmentIntensity,this.environmentRotation.copy($.environmentRotation),$.overrideMaterial!==null)this.overrideMaterial=$.overrideMaterial.clone();return this.matrixAutoUpdate=$.matrixAutoUpdate,this}toJSON($){let J=super.toJSON($);if(this.fog!==null)J.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)J.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)J.object.backgroundIntensity=this.backgroundIntensity;if(J.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)J.object.environmentIntensity=this.environmentIntensity;return J.object.environmentRotation=this.environmentRotation.toArray(),J}}class U9{constructor($,J){this.isInterleavedBuffer=!0,this.array=$,this.stride=J,this.count=$!==void 0?$.length/J:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=R8()}onUploadCallback(){}set needsUpdate($){if($===!0)this.version++}setUsage($){return this.usage=$,this}addUpdateRange($,J){this.updateRanges.push({start:$,count:J})}clearUpdateRanges(){this.updateRanges.length=0}copy($){return this.array=new $.array.constructor($.array),this.count=$.count,this.stride=$.stride,this.usage=$.usage,this}copyAt($,J,Q){$*=this.stride,Q*=J.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[$+Z]=J.array[Q+Z];return this}set($,J=0){return this.array.set($,J),this}clone($){if($.arrayBuffers===void 0)$.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=R8();if($.arrayBuffers[this.array.buffer._uuid]===void 0)$.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let J=new this.array.constructor($.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor(J,this.stride);return Q.setUsage(this.usage),Q}onUpload($){return this.onUploadCallback=$,this}toJSON($){if($.arrayBuffers===void 0)$.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=R8();if($.arrayBuffers[this.array.buffer._uuid]===void 0)$.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var b1=new x;class B7{constructor($,J,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=$,this.itemSize=J,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate($){this.data.needsUpdate=$}applyMatrix4($){for(let J=0,Q=this.data.count;J<Q;J++)b1.fromBufferAttribute(this,J),b1.applyMatrix4($),this.setXYZ(J,b1.x,b1.y,b1.z);return this}applyNormalMatrix($){for(let J=0,Q=this.count;J<Q;J++)b1.fromBufferAttribute(this,J),b1.applyNormalMatrix($),this.setXYZ(J,b1.x,b1.y,b1.z);return this}transformDirection($){for(let J=0,Q=this.count;J<Q;J++)b1.fromBufferAttribute(this,J),b1.transformDirection($),this.setXYZ(J,b1.x,b1.y,b1.z);return this}getComponent($,J){let Q=this.array[$*this.data.stride+this.offset+J];if(this.normalized)Q=N8(Q,this.array);return Q}setComponent($,J,Q){if(this.normalized)Q=$1(Q,this.array);return this.data.array[$*this.data.stride+this.offset+J]=Q,this}setX($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset]=J,this}setY($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+1]=J,this}setZ($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+2]=J,this}setW($,J){if(this.normalized)J=$1(J,this.array);return this.data.array[$*this.data.stride+this.offset+3]=J,this}getX($){let J=this.data.array[$*this.data.stride+this.offset];if(this.normalized)J=N8(J,this.array);return J}getY($){let J=this.data.array[$*this.data.stride+this.offset+1];if(this.normalized)J=N8(J,this.array);return J}getZ($){let J=this.data.array[$*this.data.stride+this.offset+2];if(this.normalized)J=N8(J,this.array);return J}getW($){let J=this.data.array[$*this.data.stride+this.offset+3];if(this.normalized)J=N8(J,this.array);return J}setXY($,J,Q){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this}setXYZ($,J,Q,Z){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this.data.array[$+2]=Z,this}setXYZW($,J,Q,Z,W){if($=$*this.data.stride+this.offset,this.normalized)J=$1(J,this.array),Q=$1(Q,this.array),Z=$1(Z,this.array),W=$1(W,this.array);return this.data.array[$+0]=J,this.data.array[$+1]=Q,this.data.array[$+2]=Z,this.data.array[$+3]=W,this}clone($){if($===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let J=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)J.push(this.data.array[Z+W])}return new X1(new this.array.constructor(J),this.itemSize,this.normalized)}else{if($.interleavedBuffers===void 0)$.interleavedBuffers={};if($.interleavedBuffers[this.data.uuid]===void 0)$.interleavedBuffers[this.data.uuid]=this.data.clone($);return new B7($.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON($){if($===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let J=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)J.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:J,normalized:this.normalized}}else{if($.interleavedBuffers===void 0)$.interleavedBuffers={};if($.interleavedBuffers[this.data.uuid]===void 0)$.interleavedBuffers[this.data.uuid]=this.data.toJSON($);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var u5=new x,m5=new i0,d5=new i0,EU=new x,c5=new g0,K$=new x,JQ=new r1,n5=new g0,QQ=new D7;class x$ extends A1{constructor($,J){super($,J);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new g0,this.bindMatrixInverse=new g0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let $=this.geometry;if(this.boundingBox===null)this.boundingBox=new l1;this.boundingBox.makeEmpty();let J=$.getAttribute("position");for(let Q=0;Q<J.count;Q++)this.getVertexPosition(Q,K$),this.boundingBox.expandByPoint(K$)}computeBoundingSphere(){let $=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new r1;this.boundingSphere.makeEmpty();let J=$.getAttribute("position");for(let Q=0;Q<J.count;Q++)this.getVertexPosition(Q,K$),this.boundingSphere.expandByPoint(K$)}copy($,J){if(super.copy($,J),this.bindMode=$.bindMode,this.bindMatrix.copy($.bindMatrix),this.bindMatrixInverse.copy($.bindMatrixInverse),this.skeleton=$.skeleton,$.boundingBox!==null)this.boundingBox=$.boundingBox.clone();if($.boundingSphere!==null)this.boundingSphere=$.boundingSphere.clone();return this}raycast($,J){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(JQ.copy(this.boundingSphere),JQ.applyMatrix4(Z),$.ray.intersectsSphere(JQ)===!1)return;if(n5.copy(Z).invert(),QQ.copy($.ray).applyMatrix4(n5),this.boundingBox!==null){if(QQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections($,J,QQ)}getVertexPosition($,J){return super.getVertexPosition($,J),this.applyBoneTransform($,J),J}bind($,J){if(this.skeleton=$,J===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),J=this.matrixWorld;this.bindMatrix.copy(J),this.bindMatrixInverse.copy(J).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let $=new i0,J=this.geometry.attributes.skinWeight;for(let Q=0,Z=J.count;Q<Z;Q++){$.fromBufferAttribute(J,Q);let W=1/$.manhattanLength();if(W!==1/0)$.multiplyScalar(W);else $.set(1,0,0,0);J.setXYZW(Q,$.x,$.y,$.z,$.w)}}updateMatrixWorld($){if(super.updateMatrixWorld($),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform($,J){let Q=this.skeleton,Z=this.geometry;m5.fromBufferAttribute(Z.attributes.skinIndex,$),d5.fromBufferAttribute(Z.attributes.skinWeight,$),u5.copy(J).applyMatrix4(this.bindMatrix),J.set(0,0,0);for(let W=0;W<4;W++){let K=d5.getComponent(W);if(K!==0){let X=m5.getComponent(W);c5.multiplyMatrices(Q.bones[X].matrixWorld,Q.boneInverses[X]),J.addScaledVector(EU.copy(u5).applyMatrix4(c5),K)}}return J.applyMatrix4(this.bindMatrixInverse)}}class G9 extends E1{constructor(){super();this.isBone=!0,this.type="Bone"}}class g$ extends L1{constructor($=null,J=1,Q=1,Z,W,K,X,H,Y=1003,U=1003,G,E){super(null,K,X,H,Y,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:$,width:J,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var s5=new g0,qU=new g0;class E9{constructor($=[],J=[]){this.uuid=R8(),this.bones=$.slice(0),this.boneInverses=J,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let $=this.bones,J=this.boneInverses;if(this.boneMatrices=new Float32Array($.length*16),J.length===0)this.calculateInverses();else if($.length!==J.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new g0)}}calculateInverses(){this.boneInverses.length=0;for(let $=0,J=this.bones.length;$<J;$++){let Q=new g0;if(this.bones[$])Q.copy(this.bones[$].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let $=0,J=this.bones.length;$<J;$++){let Q=this.bones[$];if(Q)Q.matrixWorld.copy(this.boneInverses[$]).invert()}for(let $=0,J=this.bones.length;$<J;$++){let Q=this.bones[$];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let $=this.bones,J=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let W=0,K=$.length;W<K;W++){let X=$[W]?$[W].matrixWorld:qU;s5.multiplyMatrices(X,J[W]),s5.toArray(Q,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new E9(this.bones,this.boneInverses)}computeBoneTexture(){let $=Math.sqrt(this.bones.length*4);$=Math.ceil($/4)*4,$=Math.max($,4);let J=new Float32Array($*$*4);J.set(this.boneMatrices);let Q=new g$(J,$,$,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=J,this.boneTexture=Q,this}getBoneByName($){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z.name===$)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON($,J){this.uuid=$.uuid;for(let Q=0,Z=$.bones.length;Q<Z;Q++){let W=$.bones[Q],K=J[W];if(K===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),K=new G9;this.bones.push(K),this.boneInverses.push(new g0().fromArray($.boneInverses[Q]))}return this.init(),this}toJSON(){let $={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};$.uuid=this.uuid;let J=this.bones,Q=this.boneInverses;for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.bones.push(K.uuid);let X=Q[Z];$.boneInverses.push(X.toArray())}return $}}class T6 extends X1{constructor($,J,Q,Z=1){super($,J,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy($){return super.copy($),this.meshPerAttribute=$.meshPerAttribute,this}toJSON(){let $=super.toJSON();return $.meshPerAttribute=this.meshPerAttribute,$.isInstancedBufferAttribute=!0,$}}var H7=new g0,o5=new g0,X$=[],i5=new l1,NU=new g0,o7=new A1,i7=new r1;class p$ extends A1{constructor($,J,Q){super($,J);this.isInstancedMesh=!0,this.instanceMatrix=new T6(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,NU)}computeBoundingBox(){let $=this.geometry,J=this.count;if(this.boundingBox===null)this.boundingBox=new l1;if($.boundingBox===null)$.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<J;Q++)this.getMatrixAt(Q,H7),i5.copy($.boundingBox).applyMatrix4(H7),this.boundingBox.union(i5)}computeBoundingSphere(){let $=this.geometry,J=this.count;if(this.boundingSphere===null)this.boundingSphere=new r1;if($.boundingSphere===null)$.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<J;Q++)this.getMatrixAt(Q,H7),i7.copy($.boundingSphere).applyMatrix4(H7),this.boundingSphere.union(i7)}copy($,J){if(super.copy($,J),this.instanceMatrix.copy($.instanceMatrix),$.morphTexture!==null)this.morphTexture=$.morphTexture.clone();if($.instanceColor!==null)this.instanceColor=$.instanceColor.clone();if(this.count=$.count,$.boundingBox!==null)this.boundingBox=$.boundingBox.clone();if($.boundingSphere!==null)this.boundingSphere=$.boundingSphere.clone();return this}getColorAt($,J){J.fromArray(this.instanceColor.array,$*3)}getMatrixAt($,J){J.fromArray(this.instanceMatrix.array,$*16)}getMorphAt($,J){let Q=J.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=Q.length+1,K=$*W+1;for(let X=0;X<Q.length;X++)Q[X]=Z[K+X]}raycast($,J){let Q=this.matrixWorld,Z=this.count;if(o7.geometry=this.geometry,o7.material=this.material,o7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(i7.copy(this.boundingSphere),i7.applyMatrix4(Q),$.ray.intersectsSphere(i7)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,H7),o5.multiplyMatrices(Q,H7),o7.matrixWorld=o5,o7.raycast($,X$);for(let K=0,X=X$.length;K<X;K++){let H=X$[K];H.instanceId=W,H.object=this,J.push(H)}X$.length=0}}setColorAt($,J){if(this.instanceColor===null)this.instanceColor=new T6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);J.toArray(this.instanceColor.array,$*3)}setMatrixAt($,J){J.toArray(this.instanceMatrix.array,$*16)}setMorphAt($,J){let Q=J.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new g$(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let Y=0;Y<Q.length;Y++)K+=Q[Y];let X=this.geometry.morphTargetsRelative?1:1-K,H=Z*$;W[H]=X,W.set(Q,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var ZQ=new x,RU=new x,FU=new p0;class h8{constructor($=new x(1,0,0),J=0){this.isPlane=!0,this.normal=$,this.constant=J}set($,J){return this.normal.copy($),this.constant=J,this}setComponents($,J,Q,Z){return this.normal.set($,J,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint($,J){return this.normal.copy($),this.constant=-J.dot(this.normal),this}setFromCoplanarPoints($,J,Q){let Z=ZQ.subVectors(Q,J).cross(RU.subVectors($,J)).normalize();return this.setFromNormalAndCoplanarPoint(Z,$),this}copy($){return this.normal.copy($.normal),this.constant=$.constant,this}normalize(){let $=1/this.normal.length();return this.normal.multiplyScalar($),this.constant*=$,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint($){return this.normal.dot($)+this.constant}distanceToSphere($){return this.distanceToPoint($.center)-$.radius}projectPoint($,J){return J.copy($).addScaledVector(this.normal,-this.distanceToPoint($))}intersectLine($,J){let Q=$.delta(ZQ),Z=this.normal.dot(Q);if(Z===0){if(this.distanceToPoint($.start)===0)return J.copy($.start);return null}let W=-($.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return J.copy($.start).addScaledVector(Q,W)}intersectsLine($){let J=this.distanceToPoint($.start),Q=this.distanceToPoint($.end);return J<0&&Q>0||Q<0&&J>0}intersectsBox($){return $.intersectsPlane(this)}intersectsSphere($){return $.intersectsPlane(this)}coplanarPoint($){return $.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4($,J){let Q=J||FU.getNormalMatrix($),Z=this.coplanarPoint(ZQ).applyMatrix4($),W=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(W),this}translate($){return this.constant-=$.dot(this.normal),this}equals($){return $.normal.equals(this.normal)&&$.constant===this.constant}clone(){return new this.constructor().copy(this)}}var P6=new r1,OU=new u0(0.5,0.5),H$=new x;class q9{constructor($=new h8,J=new h8,Q=new h8,Z=new h8,W=new h8,K=new h8){this.planes=[$,J,Q,Z,W,K]}set($,J,Q,Z,W,K){let X=this.planes;return X[0].copy($),X[1].copy(J),X[2].copy(Q),X[3].copy(Z),X[4].copy(W),X[5].copy(K),this}copy($){let J=this.planes;for(let Q=0;Q<6;Q++)J[Q].copy($.planes[Q]);return this}setFromProjectionMatrix($,J=2000,Q=!1){let Z=this.planes,W=$.elements,K=W[0],X=W[1],H=W[2],Y=W[3],U=W[4],G=W[5],E=W[6],q=W[7],F=W[8],O=W[9],M=W[10],N=W[11],R=W[12],_=W[13],D=W[14],k=W[15];if(Z[0].setComponents(Y-K,q-U,N-F,k-R).normalize(),Z[1].setComponents(Y+K,q+U,N+F,k+R).normalize(),Z[2].setComponents(Y+X,q+G,N+O,k+_).normalize(),Z[3].setComponents(Y-X,q-G,N-O,k-_).normalize(),Q)Z[4].setComponents(H,E,M,D).normalize(),Z[5].setComponents(Y-H,q-E,N-M,k-D).normalize();else if(Z[4].setComponents(Y-H,q-E,N-M,k-D).normalize(),J===2000)Z[5].setComponents(Y+H,q+E,N+M,k+D).normalize();else if(J===2001)Z[5].setComponents(H,E,M,D).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+J);return this}intersectsObject($){if($.boundingSphere!==void 0){if($.boundingSphere===null)$.computeBoundingSphere();P6.copy($.boundingSphere).applyMatrix4($.matrixWorld)}else{let J=$.geometry;if(J.boundingSphere===null)J.computeBoundingSphere();P6.copy(J.boundingSphere).applyMatrix4($.matrixWorld)}return this.intersectsSphere(P6)}intersectsSprite($){P6.center.set(0,0,0);let J=OU.distanceTo($.center);return P6.radius=0.7071067811865476+J,P6.applyMatrix4($.matrixWorld),this.intersectsSphere(P6)}intersectsSphere($){let J=this.planes,Q=$.center,Z=-$.radius;for(let W=0;W<6;W++)if(J[W].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox($){let J=this.planes;for(let Q=0;Q<6;Q++){let Z=J[Q];if(H$.x=Z.normal.x>0?$.max.x:$.min.x,H$.y=Z.normal.y>0?$.max.y:$.min.y,H$.z=Z.normal.z>0?$.max.z:$.min.z,Z.distanceToPoint(H$)<0)return!1}return!0}containsPoint($){let J=this.planes;for(let Q=0;Q<6;Q++)if(J[Q].distanceToPoint($)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class N9 extends t1{constructor($){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.linewidth=$.linewidth,this.linecap=$.linecap,this.linejoin=$.linejoin,this.fog=$.fog,this}}var N$=new x,R$=new x,a5=new g0,a7=new D7,Y$=new r1,WQ=new x,r5=new x;class k7 extends E1{constructor($=new x1,J=new N9){super();this.isLine=!0,this.type="Line",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy($,J){return super.copy($,J),this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}computeLineDistances(){let $=this.geometry;if($.index===null){let J=$.attributes.position,Q=[0];for(let Z=1,W=J.count;Z<W;Z++)N$.fromBufferAttribute(J,Z-1),R$.fromBufferAttribute(J,Z),Q[Z]=Q[Z-1],Q[Z]+=N$.distanceTo(R$);$.setAttribute("lineDistance",new X8(Q,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast($,J){let Q=this.geometry,Z=this.matrixWorld,W=$.params.Line.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(Y$.copy(Q.boundingSphere),Y$.applyMatrix4(Z),Y$.radius+=W,$.ray.intersectsSphere(Y$)===!1)return;a5.copy(Z).invert(),a7.copy($.ray).applyMatrix4(a5);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,Y=this.isLineSegments?2:1,U=Q.index,E=Q.attributes.position;if(U!==null){let q=Math.max(0,K.start),F=Math.min(U.count,K.start+K.count);for(let O=q,M=F-1;O<M;O+=Y){let N=U.getX(O),R=U.getX(O+1),_=U$(this,$,a7,H,N,R,O);if(_)J.push(_)}if(this.isLineLoop){let O=U.getX(F-1),M=U.getX(q),N=U$(this,$,a7,H,O,M,F-1);if(N)J.push(N)}}else{let q=Math.max(0,K.start),F=Math.min(E.count,K.start+K.count);for(let O=q,M=F-1;O<M;O+=Y){let N=U$(this,$,a7,H,O,O+1,O);if(N)J.push(N)}if(this.isLineLoop){let O=U$(this,$,a7,H,F-1,q,F-1);if(O)J.push(O)}}}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function U$($,J,Q,Z,W,K,X){let H=$.geometry.attributes.position;if(N$.fromBufferAttribute(H,W),R$.fromBufferAttribute(H,K),Q.distanceSqToSegment(N$,R$,WQ,r5)>Z)return;WQ.applyMatrix4($.matrixWorld);let U=J.ray.origin.distanceTo(WQ);if(U<J.near||U>J.far)return;return{distance:U,point:r5.clone().applyMatrix4($.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:$}}var t5=new x,e5=new x;class l$ extends k7{constructor($,J){super($,J);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let $=this.geometry;if($.index===null){let J=$.attributes.position,Q=[];for(let Z=0,W=J.count;Z<W;Z+=2)t5.fromBufferAttribute(J,Z),e5.fromBufferAttribute(J,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+t5.distanceTo(e5);$.setAttribute("lineDistance",new X8(Q,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u$ extends k7{constructor($,J){super($,J);this.isLineLoop=!0,this.type="LineLoop"}}class R9 extends t1{constructor($){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues($)}copy($){return super.copy($),this.color.copy($.color),this.map=$.map,this.alphaMap=$.alphaMap,this.size=$.size,this.sizeAttenuation=$.sizeAttenuation,this.fog=$.fog,this}}var $W=new g0,YQ=new D7,G$=new r1,E$=new x;class C7 extends E1{constructor($=new x1,J=new R9){super();this.isPoints=!0,this.type="Points",this.geometry=$,this.material=J,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy($,J){return super.copy($,J),this.material=Array.isArray($.material)?$.material.slice():$.material,this.geometry=$.geometry,this}raycast($,J){let Q=this.geometry,Z=this.matrixWorld,W=$.params.Points.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(G$.copy(Q.boundingSphere),G$.applyMatrix4(Z),G$.radius+=W,$.ray.intersectsSphere(G$)===!1)return;$W.copy(Z).invert(),YQ.copy($.ray).applyMatrix4($W);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,Y=Q.index,G=Q.attributes.position;if(Y!==null){let E=Math.max(0,K.start),q=Math.min(Y.count,K.start+K.count);for(let F=E,O=q;F<O;F++){let M=Y.getX(F);E$.fromBufferAttribute(G,M),JW(E$,M,H,Z,$,J,this)}}else{let E=Math.max(0,K.start),q=Math.min(G.count,K.start+K.count);for(let F=E,O=q;F<O;F++)E$.fromBufferAttribute(G,F),JW(E$,F,H,Z,$,J,this)}}updateMorphTargets(){let J=this.geometry.morphAttributes,Q=Object.keys(J);if(Q.length>0){let Z=J[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function JW($,J,Q,Z,W,K,X){let H=YQ.distanceSqToPoint($);if(H<Q){let Y=new x;YQ.closestPointToPoint($,Y),Y.applyMatrix4(Z);let U=W.ray.origin.distanceTo(Y);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(H),point:Y,index:J,face:null,faceIndex:null,barycoord:null,object:X})}}class m$ extends L1{constructor($,J,Q,Z,W,K,X,H,Y){super($,J,Q,Z,W,K,X,H,Y);this.isCanvasTexture=!0,this.needsUpdate=!0}}class d$ extends L1{constructor($,J,Q=1014,Z,W,K,X=1003,H=1003,Y,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:$,height:J,depth:G};super(E,Z,W,K,X,H,U,Q,Y);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy($){return super.copy($),this.source=new H9(Object.assign({},$.image)),this.compareFunction=$.compareFunction,this}toJSON($){let J=super.toJSON($);if(this.compareFunction!==null)J.compareFunction=this.compareFunction;return J}}class c$ extends L1{constructor($=null){super();this.sourceTexture=$,this.isExternalTexture=!0}copy($){return super.copy($),this.sourceTexture=$.sourceTexture,this}}class F9 extends x1{constructor($=1,J=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:$,height:J,widthSegments:Q,heightSegments:Z};let W=$/2,K=J/2,X=Math.floor(Q),H=Math.floor(Z),Y=X+1,U=H+1,G=$/X,E=J/H,q=[],F=[],O=[],M=[];for(let N=0;N<U;N++){let R=N*E-K;for(let _=0;_<Y;_++){let D=_*G-W;F.push(D,-R,0),O.push(0,0,1),M.push(_/X),M.push(1-N/H)}}for(let N=0;N<H;N++)for(let R=0;R<X;R++){let _=R+Y*N,D=R+Y*(N+1),k=R+1+Y*(N+1),T=R+1+Y*N;q.push(_,D,T),q.push(D,k,T)}this.setIndex(q),this.setAttribute("position",new X8(F,3)),this.setAttribute("normal",new X8(O,3)),this.setAttribute("uv",new X8(M,2))}copy($){return super.copy($),this.parameters=Object.assign({},$.parameters),this}static fromJSON($){return new F9($.width,$.height,$.widthSegments,$.heightSegments)}}class I7 extends t1{constructor($){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new u0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new F8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues($)}copy($){return super.copy($),this.defines={STANDARD:""},this.color.copy($.color),this.roughness=$.roughness,this.metalness=$.metalness,this.map=$.map,this.lightMap=$.lightMap,this.lightMapIntensity=$.lightMapIntensity,this.aoMap=$.aoMap,this.aoMapIntensity=$.aoMapIntensity,this.emissive.copy($.emissive),this.emissiveMap=$.emissiveMap,this.emissiveIntensity=$.emissiveIntensity,this.bumpMap=$.bumpMap,this.bumpScale=$.bumpScale,this.normalMap=$.normalMap,this.normalMapType=$.normalMapType,this.normalScale.copy($.normalScale),this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this.roughnessMap=$.roughnessMap,this.metalnessMap=$.metalnessMap,this.alphaMap=$.alphaMap,this.envMap=$.envMap,this.envMapRotation.copy($.envMapRotation),this.envMapIntensity=$.envMapIntensity,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this.wireframeLinecap=$.wireframeLinecap,this.wireframeLinejoin=$.wireframeLinejoin,this.flatShading=$.flatShading,this.fog=$.fog,this}}class e1 extends I7{constructor($){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new u0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return c0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(J){this.ior=(1+0.4*J)/(1-0.4*J)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new y0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new y0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new y0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues($)}get anisotropy(){return this._anisotropy}set anisotropy($){if(this._anisotropy>0!==$>0)this.version++;this._anisotropy=$}get clearcoat(){return this._clearcoat}set clearcoat($){if(this._clearcoat>0!==$>0)this.version++;this._clearcoat=$}get iridescence(){return this._iridescence}set iridescence($){if(this._iridescence>0!==$>0)this.version++;this._iridescence=$}get dispersion(){return this._dispersion}set dispersion($){if(this._dispersion>0!==$>0)this.version++;this._dispersion=$}get sheen(){return this._sheen}set sheen($){if(this._sheen>0!==$>0)this.version++;this._sheen=$}get transmission(){return this._transmission}set transmission($){if(this._transmission>0!==$>0)this.version++;this._transmission=$}copy($){return super.copy($),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=$.anisotropy,this.anisotropyRotation=$.anisotropyRotation,this.anisotropyMap=$.anisotropyMap,this.clearcoat=$.clearcoat,this.clearcoatMap=$.clearcoatMap,this.clearcoatRoughness=$.clearcoatRoughness,this.clearcoatRoughnessMap=$.clearcoatRoughnessMap,this.clearcoatNormalMap=$.clearcoatNormalMap,this.clearcoatNormalScale.copy($.clearcoatNormalScale),this.dispersion=$.dispersion,this.ior=$.ior,this.iridescence=$.iridescence,this.iridescenceMap=$.iridescenceMap,this.iridescenceIOR=$.iridescenceIOR,this.iridescenceThicknessRange=[...$.iridescenceThicknessRange],this.iridescenceThicknessMap=$.iridescenceThicknessMap,this.sheen=$.sheen,this.sheenColor.copy($.sheenColor),this.sheenColorMap=$.sheenColorMap,this.sheenRoughness=$.sheenRoughness,this.sheenRoughnessMap=$.sheenRoughnessMap,this.transmission=$.transmission,this.transmissionMap=$.transmissionMap,this.thickness=$.thickness,this.thicknessMap=$.thicknessMap,this.attenuationDistance=$.attenuationDistance,this.attenuationColor.copy($.attenuationColor),this.specularIntensity=$.specularIntensity,this.specularIntensityMap=$.specularIntensityMap,this.specularColor.copy($.specularColor),this.specularColorMap=$.specularColorMap,this}}class YZ extends t1{constructor($){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues($)}copy($){return super.copy($),this.depthPacking=$.depthPacking,this.map=$.map,this.alphaMap=$.alphaMap,this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this.wireframe=$.wireframe,this.wireframeLinewidth=$.wireframeLinewidth,this}}class UZ extends t1{constructor($){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues($)}copy($){return super.copy($),this.map=$.map,this.alphaMap=$.alphaMap,this.displacementMap=$.displacementMap,this.displacementScale=$.displacementScale,this.displacementBias=$.displacementBias,this}}function q$($,J){if(!$||$.constructor===J)return $;if(typeof J.BYTES_PER_ELEMENT==="number")return new J($);return Array.prototype.slice.call($)}function MU($){return ArrayBuffer.isView($)&&!($ instanceof DataView)}function LU($){function J(W,K){return $[W]-$[K]}let Q=$.length,Z=Array(Q);for(let W=0;W!==Q;++W)Z[W]=W;return Z.sort(J),Z}function QW($,J,Q){let Z=$.length,W=new $.constructor(Z);for(let K=0,X=0;X!==Z;++K){let H=Q[K]*J;for(let Y=0;Y!==J;++Y)W[X++]=$[H+Y]}return W}function YK($,J,Q,Z){let W=1,K=$[0];while(K!==void 0&&K[Z]===void 0)K=$[W++];if(K===void 0)return;let X=K[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=K[Z],X!==void 0)J.push(K.time),Q.push(...X);K=$[W++]}while(K!==void 0);else if(X.toArray!==void 0)do{if(X=K[Z],X!==void 0)J.push(K.time),X.toArray(Q,Q.length);K=$[W++]}while(K!==void 0);else do{if(X=K[Z],X!==void 0)J.push(K.time),Q.push(X);K=$[W++]}while(K!==void 0)}class Y6{constructor($,J,Q,Z){this.parameterPositions=$,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new J.constructor(Q),this.sampleValues=J,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate($){let J=this.parameterPositions,Q=this._cachedIndex,Z=J[Q],W=J[Q-1];Q:{$:{let K;J:{Z:if(!($<Z)){for(let X=Q+2;;){if(Z===void 0){if($<W)break Z;return Q=J.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===X)break;if(W=Z,Z=J[++Q],$<Z)break $}K=J.length;break J}if(!($>=W)){let X=J[1];if($<X)Q=2,W=X;for(let H=Q-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===H)break;if(Z=W,W=J[--Q-1],$>=W)break $}K=Q,Q=0;break J}break Q}while(Q<K){let X=Q+K>>>1;if($<J[X])K=X;else Q=X+1}if(Z=J[Q],W=J[Q-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=J.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,W,Z)}return this.interpolate_(Q,W,$,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_($){let J=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=$*Z;for(let K=0;K!==Z;++K)J[K]=Q[W+K];return J}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class GZ extends Y6{constructor($,J,Q,Z){super($,J,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_($,J,Q){let Z=this.parameterPositions,W=$-2,K=$+1,X=Z[W],H=Z[K];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=$,X=2*J-Q;break;case 2402:W=Z.length-2,X=J+Z[W]-Z[W+1];break;default:W=$,X=Q}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:K=$,H=2*Q-J;break;case 2402:K=1,H=Q+Z[1]-Z[0];break;default:K=$-1,H=J}let Y=(Q-J)*0.5,U=this.valueSize;this._weightPrev=Y/(J-X),this._weightNext=Y/(H-Q),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=$*X,Y=H-X,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,F=(Q-J)/(Z-J),O=F*F,M=O*F,N=-E*M+2*E*O-E*F,R=(1+E)*M+(-1.5-2*E)*O+(-0.5+E)*F+1,_=(-1-q)*M+(1.5+q)*O+0.5*F,D=q*M-q*O;for(let k=0;k!==X;++k)W[k]=N*K[U+k]+R*K[Y+k]+_*K[H+k]+D*K[G+k];return W}}class EZ extends Y6{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=$*X,Y=H-X,U=(Q-J)/(Z-J),G=1-U;for(let E=0;E!==X;++E)W[E]=K[Y+E]*G+K[H+E]*U;return W}}class qZ extends Y6{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($){return this.copySampleValue_($-1)}}class $8{constructor($,J,Q,Z){if($===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(J===void 0||J.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+$);this.name=$,this.times=q$(J,this.TimeBufferType),this.values=q$(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON($){let J=$.constructor,Q;if(J.toJSON!==this.toJSON)Q=J.toJSON($);else{Q={name:$.name,times:q$($.times,Array),values:q$($.values,Array)};let Z=$.getInterpolation();if(Z!==$.DefaultInterpolation)Q.interpolation=Z}return Q.type=$.ValueTypeName,Q}InterpolantFactoryMethodDiscrete($){return new qZ(this.times,this.values,this.getValueSize(),$)}InterpolantFactoryMethodLinear($){return new EZ(this.times,this.values,this.getValueSize(),$)}InterpolantFactoryMethodSmooth($){return new GZ(this.times,this.values,this.getValueSize(),$)}setInterpolation($){let J;switch($){case 2300:J=this.InterpolantFactoryMethodDiscrete;break;case 2301:J=this.InterpolantFactoryMethodLinear;break;case 2302:J=this.InterpolantFactoryMethodSmooth;break}if(J===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if($!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=J,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift($){if($!==0){let J=this.times;for(let Q=0,Z=J.length;Q!==Z;++Q)J[Q]+=$}return this}scale($){if($!==1){let J=this.times;for(let Q=0,Z=J.length;Q!==Z;++Q)J[Q]*=$}return this}trim($,J){let Q=this.times,Z=Q.length,W=0,K=Z-1;while(W!==Z&&Q[W]<$)++W;while(K!==-1&&Q[K]>J)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let X=this.getValueSize();this.times=Q.slice(W,K),this.values=this.values.slice(W*X,K*X)}return this}validate(){let $=!0,J=this.getValueSize();if(J-Math.floor(J)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),$=!1;let Q=this.times,Z=this.values,W=Q.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),$=!1;let K=null;for(let X=0;X!==W;X++){let H=Q[X];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,X,H),$=!1;break}if(K!==null&&K>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,X,H,K),$=!1;break}K=H}if(Z!==void 0){if(MU(Z))for(let X=0,H=Z.length;X!==H;++X){let Y=Z[X];if(isNaN(Y)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,X,Y),$=!1;break}}}return $}optimize(){let $=this.times.slice(),J=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,W=$.length-1,K=1;for(let X=1;X<W;++X){let H=!1,Y=$[X],U=$[X+1];if(Y!==U&&(X!==1||Y!==$[0]))if(!Z){let G=X*Q,E=G-Q,q=G+Q;for(let F=0;F!==Q;++F){let O=J[G+F];if(O!==J[E+F]||O!==J[q+F]){H=!0;break}}}else H=!0;if(H){if(X!==K){$[K]=$[X];let G=X*Q,E=K*Q;for(let q=0;q!==Q;++q)J[E+q]=J[G+q]}++K}}if(W>0){$[K]=$[W];for(let X=W*Q,H=K*Q,Y=0;Y!==Q;++Y)J[H+Y]=J[X+Y];++K}if(K!==$.length)this.times=$.slice(0,K),this.values=J.slice(0,K*Q);else this.times=$,this.values=J;return this}clone(){let $=this.times.slice(),J=this.values.slice(),Z=new this.constructor(this.name,$,J);return Z.createInterpolant=this.createInterpolant,Z}}$8.prototype.ValueTypeName="";$8.prototype.TimeBufferType=Float32Array;$8.prototype.ValueBufferType=Float32Array;$8.prototype.DefaultInterpolation=2301;class U6 extends $8{constructor($,J,Q){super($,J,Q)}}U6.prototype.ValueTypeName="bool";U6.prototype.ValueBufferType=Array;U6.prototype.DefaultInterpolation=2300;U6.prototype.InterpolantFactoryMethodLinear=void 0;U6.prototype.InterpolantFactoryMethodSmooth=void 0;class n$ extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}}n$.prototype.ValueTypeName="color";class g8 extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}}g8.prototype.ValueTypeName="number";class NZ extends Y6{constructor($,J,Q,Z){super($,J,Q,Z)}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=(Q-J)/(Z-J),Y=$*X;for(let U=Y+X;Y!==U;Y+=4)O8.slerpFlat(W,0,K,Y-X,K,Y,H);return W}}class d8 extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}InterpolantFactoryMethodLinear($){return new NZ(this.times,this.values,this.getValueSize(),$)}}d8.prototype.ValueTypeName="quaternion";d8.prototype.InterpolantFactoryMethodSmooth=void 0;class G6 extends $8{constructor($,J,Q){super($,J,Q)}}G6.prototype.ValueTypeName="string";G6.prototype.ValueBufferType=Array;G6.prototype.DefaultInterpolation=2300;G6.prototype.InterpolantFactoryMethodLinear=void 0;G6.prototype.InterpolantFactoryMethodSmooth=void 0;class p8 extends $8{constructor($,J,Q,Z){super($,J,Q,Z)}}p8.prototype.ValueTypeName="vector";class s${constructor($="",J=-1,Q=[],Z=2500){if(this.name=$,this.tracks=Q,this.duration=J,this.blendMode=Z,this.uuid=R8(),this.userData={},this.duration<0)this.resetDuration()}static parse($){let J=[],Q=$.tracks,Z=1/($.fps||1);for(let K=0,X=Q.length;K!==X;++K)J.push(_U(Q[K]).scale(Z));let W=new this($.name,$.duration,J,$.blendMode);return W.uuid=$.uuid,W.userData=JSON.parse($.userData||"{}"),W}static toJSON($){let J=[],Q=$.tracks,Z={name:$.name,duration:$.duration,tracks:J,uuid:$.uuid,blendMode:$.blendMode,userData:JSON.stringify($.userData)};for(let W=0,K=Q.length;W!==K;++W)J.push($8.toJSON(Q[W]));return Z}static CreateFromMorphTargetSequence($,J,Q,Z){let W=J.length,K=[];for(let X=0;X<W;X++){let H=[],Y=[];H.push((X+W-1)%W,X,(X+1)%W),Y.push(0,1,0);let U=LU(H);if(H=QW(H,1,U),Y=QW(Y,1,U),!Z&&H[0]===0)H.push(W),Y.push(Y[0]);K.push(new g8(".morphTargetInfluences["+J[X].name+"]",H,Y).scale(1/Q))}return new this($,-1,K)}static findByName($,J){let Q=$;if(!Array.isArray($)){let Z=$;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===J)return Q[Z];return null}static CreateClipsFromMorphTargetSequences($,J,Q){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let X=0,H=$.length;X<H;X++){let Y=$[X],U=Y.name.match(W);if(U&&U.length>1){let G=U[1],E=Z[G];if(!E)Z[G]=E=[];E.push(Y)}}let K=[];for(let X in Z)K.push(this.CreateFromMorphTargetSequence(X,Z[X],J,Q));return K}static parseAnimation($,J){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!$)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Q=function(G,E,q,F,O){if(q.length!==0){let M=[],N=[];if(YK(q,M,N,F),M.length!==0)O.push(new G(E,M,N))}},Z=[],W=$.name||"default",K=$.fps||30,X=$.blendMode,H=$.length||-1,Y=$.hierarchy||[];for(let G=0;G<Y.length;G++){let E=Y[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},F;for(F=0;F<E.length;F++)if(E[F].morphTargets)for(let O=0;O<E[F].morphTargets.length;O++)q[E[F].morphTargets[O]]=-1;for(let O in q){let M=[],N=[];for(let R=0;R!==E[F].morphTargets.length;++R){let _=E[F];M.push(_.time),N.push(_.morphTarget===O?1:0)}Z.push(new g8(".morphTargetInfluence["+O+"]",M,N))}H=q.length*K}else{let q=".bones["+J[G].name+"]";Q(p8,q+".position",E,"pos",Z),Q(d8,q+".quaternion",E,"rot",Z),Q(p8,q+".scale",E,"scl",Z)}}if(Z.length===0)return null;return new this(W,H,Z,X)}resetDuration(){let $=this.tracks,J=0;for(let Q=0,Z=$.length;Q!==Z;++Q){let W=this.tracks[Q];J=Math.max(J,W.times[W.times.length-1])}return this.duration=J,this}trim(){for(let $=0;$<this.tracks.length;$++)this.tracks[$].trim(0,this.duration);return this}validate(){let $=!0;for(let J=0;J<this.tracks.length;J++)$=$&&this.tracks[J].validate();return $}optimize(){for(let $=0;$<this.tracks.length;$++)this.tracks[$].optimize();return this}clone(){let $=[];for(let Q=0;Q<this.tracks.length;Q++)$.push(this.tracks[Q].clone());let J=new this.constructor(this.name,this.duration,$,this.blendMode);return J.userData=JSON.parse(JSON.stringify(this.userData)),J}toJSON(){return this.constructor.toJSON(this)}}function DU($){switch($.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return g8;case"vector":case"vector2":case"vector3":case"vector4":return p8;case"color":return n$;case"quaternion":return d8;case"bool":case"boolean":return U6;case"string":return G6}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+$)}function _U($){if($.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let J=DU($.type);if($.times===void 0){let Q=[],Z=[];YK($.keys,Q,Z,"value"),$.times=Q,$.values=Z}if(J.parse!==void 0)return J.parse($);else return new J($.name,$.times,$.values,$.interpolation)}var z8={enabled:!1,files:{},add:function($,J){if(this.enabled===!1)return;this.files[$]=J},get:function($){if(this.enabled===!1)return;return this.files[$]},remove:function($){delete this.files[$]},clear:function(){this.files={}}};class RZ{constructor($,J,Q){let Z=this,W=!1,K=0,X=0,H=void 0,Y=[];this.onStart=void 0,this.onLoad=$,this.onProgress=J,this.onError=Q,this.abortController=new AbortController,this.itemStart=function(U){if(X++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,X)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,X);if(K===X){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(H)return H(U);return U},this.setURLModifier=function(U){return H=U,this},this.addHandler=function(U,G){return Y.push(U,G),this},this.removeHandler=function(U){let G=Y.indexOf(U);if(G!==-1)Y.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=Y.length;G<E;G+=2){let q=Y[G],F=Y[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var UK=new RZ;class c8{constructor($){this.manager=$!==void 0?$:UK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync($,J){let Q=this;return new Promise(function(Z,W){Q.load($,Z,J,W)})}parse(){}setCrossOrigin($){return this.crossOrigin=$,this}setWithCredentials($){return this.withCredentials=$,this}setPath($){return this.path=$,this}setResourcePath($){return this.resourcePath=$,this}setRequestHeader($){return this.requestHeader=$,this}abort(){return this}}c8.DEFAULT_MATERIAL_NAME="__DEFAULT";var b8={};class GK extends Error{constructor($,J){super($);this.response=J}}class O9 extends c8{constructor($){super($);this.mimeType="",this.responseType="",this._abortController=new AbortController}load($,J,Q,Z){if($===void 0)$="";if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=z8.get(`file:${$}`);if(W!==void 0)return this.manager.itemStart($),setTimeout(()=>{if(J)J(W);this.manager.itemEnd($)},0),W;if(b8[$]!==void 0){b8[$].push({onLoad:J,onProgress:Q,onError:Z});return}b8[$]=[],b8[$].push({onLoad:J,onProgress:Q,onError:Z});let K=new Request($,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),X=this.mimeType,H=this.responseType;fetch(K).then((Y)=>{if(Y.status===200||Y.status===0){if(Y.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||Y.body===void 0||Y.body.getReader===void 0)return Y;let U=b8[$],G=Y.body.getReader(),E=Y.headers.get("X-File-Size")||Y.headers.get("Content-Length"),q=E?parseInt(E):0,F=q!==0,O=0,M=new ReadableStream({start(N){R();function R(){G.read().then(({done:_,value:D})=>{if(_)N.close();else{O+=D.byteLength;let k=new ProgressEvent("progress",{lengthComputable:F,loaded:O,total:q});for(let T=0,P=U.length;T<P;T++){let A=U[T];if(A.onProgress)A.onProgress(k)}N.enqueue(D),R()}},(_)=>{N.error(_)})}}});return new Response(M)}else throw new GK(`fetch for "${Y.url}" responded with ${Y.status}: ${Y.statusText}`,Y)}).then((Y)=>{switch(H){case"arraybuffer":return Y.arrayBuffer();case"blob":return Y.blob();case"document":return Y.text().then((U)=>{return new DOMParser().parseFromString(U,X)});case"json":return Y.json();default:if(X==="")return Y.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return Y.arrayBuffer().then((F)=>q.decode(F))}}}).then((Y)=>{z8.add(`file:${$}`,Y);let U=b8[$];delete b8[$];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(Y)}}).catch((Y)=>{let U=b8[$];if(U===void 0)throw this.manager.itemError($),Y;delete b8[$];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(Y)}this.manager.itemError($)}).finally(()=>{this.manager.itemEnd($)}),this.manager.itemStart($)}setResponseType($){return this.responseType=$,this}setMimeType($){return this.mimeType=$,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Y7=new WeakMap;class FZ extends c8{constructor($){super($)}load($,J,Q,Z){if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=this,K=z8.get(`image:${$}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart($),setTimeout(function(){if(J)J(K);W.manager.itemEnd($)},0);else{let G=Y7.get(K);if(G===void 0)G=[],Y7.set(K,G);G.push({onLoad:J,onError:Z})}return K}let X=G7("img");function H(){if(U(),J)J(this);let G=Y7.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}Y7.delete(this),W.manager.itemEnd($)}function Y(G){if(U(),Z)Z(G);z8.remove(`image:${$}`);let E=Y7.get(this)||[];for(let q=0;q<E.length;q++){let F=E[q];if(F.onError)F.onError(G)}Y7.delete(this),W.manager.itemError($),W.manager.itemEnd($)}function U(){X.removeEventListener("load",H,!1),X.removeEventListener("error",Y,!1)}if(X.addEventListener("load",H,!1),X.addEventListener("error",Y,!1),$.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return z8.add(`image:${$}`,X),W.manager.itemStart($),X.src=$,X}}class o$ extends c8{constructor($){super($)}load($,J,Q,Z){let W=new L1,K=new FZ(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load($,function(X){if(W.image=X,W.needsUpdate=!0,J!==void 0)J(W)},Q,Z),W}}class M9 extends E1{constructor($,J=1){super();this.isLight=!0,this.type="Light",this.color=new y0($),this.intensity=J}dispose(){}copy($,J){return super.copy($,J),this.color.copy($.color),this.intensity=$.intensity,this}toJSON($){let J=super.toJSON($);if(J.object.color=this.color.getHex(),J.object.intensity=this.intensity,this.groundColor!==void 0)J.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)J.object.distance=this.distance;if(this.angle!==void 0)J.object.angle=this.angle;if(this.decay!==void 0)J.object.decay=this.decay;if(this.penumbra!==void 0)J.object.penumbra=this.penumbra;if(this.shadow!==void 0)J.object.shadow=this.shadow.toJSON();if(this.target!==void 0)J.object.target=this.target.uuid;return J}}var KQ=new g0,ZW=new x,WW=new x;class i${constructor($){this.camera=$,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new u0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new g0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new q9,this._frameExtents=new u0(1,1),this._viewportCount=1,this._viewports=[new i0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices($){let J=this.camera,Q=this.matrix;if(ZW.setFromMatrixPosition($.matrixWorld),J.position.copy(ZW),WW.setFromMatrixPosition($.target.matrixWorld),J.lookAt(WW),J.updateMatrixWorld(),KQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),this._frustum.setFromProjectionMatrix(KQ,J.coordinateSystem,J.reversedDepth),J.reversedDepth)Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);Q.multiply(KQ)}getViewport($){return this._viewports[$]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy($){return this.camera=$.camera.clone(),this.intensity=$.intensity,this.bias=$.bias,this.radius=$.radius,this.autoUpdate=$.autoUpdate,this.needsUpdate=$.needsUpdate,this.normalBias=$.normalBias,this.blurSamples=$.blurSamples,this.mapSize.copy($.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let $={};if(this.intensity!==1)$.intensity=this.intensity;if(this.bias!==0)$.bias=this.bias;if(this.normalBias!==0)$.normalBias=this.normalBias;if(this.radius!==1)$.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)$.mapSize=this.mapSize.toArray();return $.camera=this.camera.toJSON(!1).object,delete $.camera.matrix,$}}class EK extends i${constructor(){super(new T1(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices($){let J=this.camera,Q=A6*2*$.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=$.distance||J.far;if(Q!==J.fov||Z!==J.aspect||W!==J.far)J.fov=Q,J.aspect=Z,J.far=W,J.updateProjectionMatrix();super.updateMatrices($)}copy($){return super.copy($),this.focus=$.focus,this}}class a$ extends M9{constructor($,J,Q=0,Z=Math.PI/3,W=0,K=2){super($,J);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(E1.DEFAULT_UP),this.updateMatrix(),this.target=new E1,this.distance=Q,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new EK}get power(){return this.intensity*Math.PI}set power($){this.intensity=$/Math.PI}dispose(){this.shadow.dispose()}copy($,J){return super.copy($,J),this.distance=$.distance,this.angle=$.angle,this.penumbra=$.penumbra,this.decay=$.decay,this.target=$.target.clone(),this.shadow=$.shadow.clone(),this}}var KW=new g0,r7=new x,XQ=new x;class qK extends i${constructor(){super(new T1(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new u0(4,2),this._viewportCount=6,this._viewports=[new i0(2,1,1,1),new i0(0,1,1,1),new i0(3,1,1,1),new i0(1,1,1,1),new i0(3,0,1,1),new i0(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices($,J=0){let Q=this.camera,Z=this.matrix,W=$.distance||Q.far;if(W!==Q.far)Q.far=W,Q.updateProjectionMatrix();r7.setFromMatrixPosition($.matrixWorld),Q.position.copy(r7),XQ.copy(Q.position),XQ.add(this._cubeDirections[J]),Q.up.copy(this._cubeUps[J]),Q.lookAt(XQ),Q.updateMatrixWorld(),Z.makeTranslation(-r7.x,-r7.y,-r7.z),KW.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(KW,Q.coordinateSystem,Q.reversedDepth)}}class r$ extends M9{constructor($,J,Q=0,Z=2){super($,J);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new qK}get power(){return this.intensity*4*Math.PI}set power($){this.intensity=$/(4*Math.PI)}dispose(){this.shadow.dispose()}copy($,J){return super.copy($,J),this.distance=$.distance,this.decay=$.decay,this.shadow=$.shadow.clone(),this}}class E6 extends V7{constructor($=-1,J=1,Q=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=$,this.right=J,this.top=Q,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy($,J){return super.copy($,J),this.left=$.left,this.right=$.right,this.top=$.top,this.bottom=$.bottom,this.near=$.near,this.far=$.far,this.zoom=$.zoom,this.view=$.view===null?null:Object.assign({},$.view),this}setViewOffset($,J,Q,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=$,this.view.fullHeight=J,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let $=(this.right-this.left)/(2*this.zoom),J=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=Q-$,K=Q+$,X=Z+J,H=Z-J;if(this.view!==null&&this.view.enabled){let Y=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=Y*this.view.offsetX,K=W+Y*this.view.width,X-=U*this.view.offsetY,H=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,X,H,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON($){let J=super.toJSON($);if(J.object.zoom=this.zoom,J.object.left=this.left,J.object.right=this.right,J.object.top=this.top,J.object.bottom=this.bottom,J.object.near=this.near,J.object.far=this.far,this.view!==null)J.object.view=Object.assign({},this.view);return J}}class NK extends i${constructor(){super(new E6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class t$ extends M9{constructor($,J){super($,J);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(E1.DEFAULT_UP),this.updateMatrix(),this.target=new E1,this.shadow=new NK}dispose(){this.shadow.dispose()}copy($){return super.copy($),this.target=$.target.clone(),this.shadow=$.shadow.clone(),this}}class q6{static extractUrlBase($){let J=$.lastIndexOf("/");if(J===-1)return"./";return $.slice(0,J+1)}static resolveURL($,J){if(typeof $!=="string"||$==="")return"";if(/^https?:\/\//i.test(J)&&/^\//.test($))J=J.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test($))return $;if(/^data:.*,.*$/i.test($))return $;if(/^blob:.*$/i.test($))return $;return J+$}}var HQ=new WeakMap;class e$ extends c8{constructor($){super($);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions($){return this.options=$,this}load($,J,Q,Z){if($===void 0)$="";if(this.path!==void 0)$=this.path+$;$=this.manager.resolveURL($);let W=this,K=z8.get(`image-bitmap:${$}`);if(K!==void 0){if(W.manager.itemStart($),K.then){K.then((Y)=>{if(HQ.has(K)===!0){if(Z)Z(HQ.get(K));W.manager.itemError($),W.manager.itemEnd($)}else{if(J)J(Y);return W.manager.itemEnd($),Y}});return}return setTimeout(function(){if(J)J(K);W.manager.itemEnd($)},0),K}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader,X.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let H=fetch($,X).then(function(Y){return Y.blob()}).then(function(Y){return createImageBitmap(Y,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(Y){if(z8.add(`image-bitmap:${$}`,Y),J)J(Y);return W.manager.itemEnd($),Y}).catch(function(Y){if(Z)Z(Y);HQ.set(H,Y),z8.remove(`image-bitmap:${$}`),W.manager.itemError($),W.manager.itemEnd($)});z8.add(`image-bitmap:${$}`,H),W.manager.itemStart($)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class OZ extends T1{constructor($=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=$}}var MZ="\\[\\]\\.:\\/",VU=new RegExp("["+MZ+"]","g"),LZ="[^"+MZ+"]",zU="[^"+MZ.replace("\\.","")+"]",BU=/((?:WC+[\/:])*)/.source.replace("WC",LZ),kU=/(WCOD+)?/.source.replace("WCOD",zU),CU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",LZ),IU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",LZ),PU=new RegExp("^"+BU+kU+CU+IU+"$"),AU=["material","materials","bones","map"];class RK{constructor($,J,Q){let Z=Q||t0.parseTrackName(J);this._targetGroup=$,this._bindings=$.subscribe_(J,Z)}getValue($,J){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue($,J)}setValue($,J){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=Q.length;Z!==W;++Z)Q[Z].setValue($,J)}bind(){let $=this._bindings;for(let J=this._targetGroup.nCachedObjects_,Q=$.length;J!==Q;++J)$[J].bind()}unbind(){let $=this._bindings;for(let J=this._targetGroup.nCachedObjects_,Q=$.length;J!==Q;++J)$[J].unbind()}}class t0{constructor($,J,Q){this.path=J,this.parsedPath=Q||t0.parseTrackName(J),this.node=t0.findNode($,this.parsedPath.nodeName),this.rootNode=$,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create($,J,Q){if(!($&&$.isAnimationObjectGroup))return new t0($,J,Q);else return new t0.Composite($,J,Q)}static sanitizeNodeName($){return $.replace(/\s/g,"_").replace(VU,"")}static parseTrackName($){let J=PU.exec($);if(J===null)throw Error("PropertyBinding: Cannot parse trackName: "+$);let Q={nodeName:J[2],objectName:J[3],objectIndex:J[4],propertyName:J[5],propertyIndex:J[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=Q.nodeName.substring(Z+1);if(AU.indexOf(W)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=W}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+$);return Q}static findNode($,J){if(J===void 0||J===""||J==="."||J===-1||J===$.name||J===$.uuid)return $;if($.skeleton){let Q=$.skeleton.getBoneByName(J);if(Q!==void 0)return Q}if($.children){let Q=function(W){for(let K=0;K<W.length;K++){let X=W[K];if(X.name===J||X.uuid===J)return X;let H=Q(X.children);if(H)return H}return null},Z=Q($.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct($,J){$[J]=this.targetObject[this.propertyName]}_getValue_array($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)$[J++]=Q[Z]}_getValue_arrayElement($,J){$[J]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray($,J){this.resolvedProperty.toArray($,J)}_setValue_direct($,J){this.targetObject[this.propertyName]=$[J]}_setValue_direct_setNeedsUpdate($,J){this.targetObject[this.propertyName]=$[J],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate($,J){this.targetObject[this.propertyName]=$[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++]}_setValue_array_setNeedsUpdate($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate($,J){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=$[J++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement($,J){this.resolvedProperty[this.propertyIndex]=$[J]}_setValue_arrayElement_setNeedsUpdate($,J){this.resolvedProperty[this.propertyIndex]=$[J],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate($,J){this.resolvedProperty[this.propertyIndex]=$[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray($,J){this.resolvedProperty.fromArray($,J)}_setValue_fromArray_setNeedsUpdate($,J){this.resolvedProperty.fromArray($,J),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate($,J){this.resolvedProperty.fromArray($,J),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound($,J){this.bind(),this.getValue($,J)}_setValue_unbound($,J){this.bind(),this.setValue($,J)}bind(){let $=this.node,J=this.parsedPath,Q=J.objectName,Z=J.propertyName,W=J.propertyIndex;if(!$)$=t0.findNode(this.rootNode,J.nodeName),this.node=$;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!$){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let Y=J.objectIndex;switch(Q){case"materials":if(!$.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!$.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}$=$.material.materials;break;case"bones":if(!$.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}$=$.skeleton.bones;for(let U=0;U<$.length;U++)if($[U].name===Y){Y=U;break}break;case"map":if("map"in $){$=$.map;break}if(!$.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!$.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}$=$.material.map;break;default:if($[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}$=$[Q]}if(Y!==void 0){if($[Y]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,$);return}$=$[Y]}}let K=$[Z];if(K===void 0){let Y=J.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+Y+"."+Z+" but it wasn't found.",$);return}let X=this.Versioning.None;if(this.targetObject=$,$.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if($.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!$.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!$.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if($.morphTargetDictionary[W]!==void 0)W=$.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))H=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}t0.Composite=RK;t0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};t0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};t0.prototype.GetterByBindingType=[t0.prototype._getValue_direct,t0.prototype._getValue_array,t0.prototype._getValue_arrayElement,t0.prototype._getValue_toArray];t0.prototype.SetterByBindingTypeAndVersioning=[[t0.prototype._setValue_direct,t0.prototype._setValue_direct_setNeedsUpdate,t0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_array,t0.prototype._setValue_array_setNeedsUpdate,t0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_arrayElement,t0.prototype._setValue_arrayElement_setNeedsUpdate,t0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_fromArray,t0.prototype._setValue_fromArray_setNeedsUpdate,t0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bF=new Float32Array(1);function DZ($,J,Q,Z){let W=TU(Z);switch(Q){case 1021:return $*J;case 1028:return $*J/W.components*W.byteLength;case 1029:return $*J/W.components*W.byteLength;case 1030:return $*J*2/W.components*W.byteLength;case 1031:return $*J*2/W.components*W.byteLength;case 1022:return $*J*3/W.components*W.byteLength;case 1023:return $*J*4/W.components*W.byteLength;case 1033:return $*J*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*8;case 33778:case 33779:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 35841:case 35843:return Math.max($,16)*Math.max(J,8)/4;case 35840:case 35842:return Math.max($,8)*Math.max(J,8)/2;case 36196:case 37492:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*8;case 37496:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 37808:return Math.floor(($+3)/4)*Math.floor((J+3)/4)*16;case 37809:return Math.floor(($+4)/5)*Math.floor((J+3)/4)*16;case 37810:return Math.floor(($+4)/5)*Math.floor((J+4)/5)*16;case 37811:return Math.floor(($+5)/6)*Math.floor((J+4)/5)*16;case 37812:return Math.floor(($+5)/6)*Math.floor((J+5)/6)*16;case 37813:return Math.floor(($+7)/8)*Math.floor((J+4)/5)*16;case 37814:return Math.floor(($+7)/8)*Math.floor((J+5)/6)*16;case 37815:return Math.floor(($+7)/8)*Math.floor((J+7)/8)*16;case 37816:return Math.floor(($+9)/10)*Math.floor((J+4)/5)*16;case 37817:return Math.floor(($+9)/10)*Math.floor((J+5)/6)*16;case 37818:return Math.floor(($+9)/10)*Math.floor((J+7)/8)*16;case 37819:return Math.floor(($+9)/10)*Math.floor((J+9)/10)*16;case 37820:return Math.floor(($+11)/12)*Math.floor((J+9)/10)*16;case 37821:return Math.floor(($+11)/12)*Math.floor((J+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil($/4)*Math.ceil(J/4)*16;case 36283:case 36284:return Math.ceil($/4)*Math.ceil(J/4)*8;case 36285:case 36286:return Math.ceil($/4)*Math.ceil(J/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function TU($){switch($){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${$}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function xK(){let $=null,J=!1,Q=null,Z=null;function W(K,X){Q(K,X),Z=$.requestAnimationFrame(W)}return{start:function(){if(J===!0)return;if(Q===null)return;Z=$.requestAnimationFrame(W),J=!0},stop:function(){$.cancelAnimationFrame(Z),J=!1},setAnimationLoop:function(K){Q=K},setContext:function(K){$=K}}}function wU($){let J=new WeakMap;function Q(H,Y){let{array:U,usage:G}=H,E=U.byteLength,q=$.createBuffer();$.bindBuffer(Y,q),$.bufferData(Y,U,G),H.onUploadCallback();let F;if(U instanceof Float32Array)F=$.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=$.HALF_FLOAT;else if(U instanceof Uint16Array)if(H.isFloat16BufferAttribute)F=$.HALF_FLOAT;else F=$.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=$.SHORT;else if(U instanceof Uint32Array)F=$.UNSIGNED_INT;else if(U instanceof Int32Array)F=$.INT;else if(U instanceof Int8Array)F=$.BYTE;else if(U instanceof Uint8Array)F=$.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=$.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:H.version,size:E}}function Z(H,Y,U){let{array:G,updateRanges:E}=Y;if($.bindBuffer(U,H),E.length===0)$.bufferSubData(U,0,G);else{E.sort((F,O)=>F.start-O.start);let q=0;for(let F=1;F<E.length;F++){let O=E[q],M=E[F];if(M.start<=O.start+O.count+1)O.count=Math.max(O.count,M.start+M.count-O.start);else++q,E[q]=M}E.length=q+1;for(let F=0,O=E.length;F<O;F++){let M=E[F];$.bufferSubData(U,M.start*G.BYTES_PER_ELEMENT,G,M.start,M.count)}Y.clearUpdateRanges()}Y.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return J.get(H)}function K(H){if(H.isInterleavedBufferAttribute)H=H.data;let Y=J.get(H);if(Y)$.deleteBuffer(Y.buffer),J.delete(H)}function X(H,Y){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let G=J.get(H);if(!G||G.version<H.version)J.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let U=J.get(H);if(U===void 0)J.set(H,Q(H,Y));else if(U.version<H.version){if(U.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,H,Y),U.version=H.version}}return{get:W,remove:K,update:X}}var SU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jU=`#ifdef USE_ALPHAHASH
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
#endif`,fU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hU=`#ifdef USE_AOMAP
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
#endif`,xU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gU=`#ifdef USE_BATCHING
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
#endif`,pU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dU=`#ifdef USE_IRIDESCENCE
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
#endif`,cU=`#ifdef USE_BUMPMAP
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
#endif`,nU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eU=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$G=`#define PI 3.141592653589793
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
} // validated`,JG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QG=`vec3 transformedNormal = objectNormal;
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
#endif`,ZG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HG="gl_FragColor = linearToOutputTexel( gl_FragColor );",YG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UG=`#ifdef USE_ENVMAP
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
#endif`,GG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,EG=`#ifdef USE_ENVMAP
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
#endif`,qG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NG=`#ifdef USE_ENVMAP
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
#endif`,RG=`#ifdef USE_FOG
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
#endif`,MG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LG=`#ifdef USE_GRADIENTMAP
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
}`,DG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_G=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VG=`varying vec3 vViewPosition;
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
#endif`,BG=`#ifdef USE_ENVMAP
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
#endif`,kG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AG=`PhysicalMaterial material;
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
#endif`,TG=`struct PhysicalMaterial {
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
}`,wG=`
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
#endif`,SG=`#if defined( RE_IndirectDiffuse )
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
#endif`,jG=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pG=`#if defined( USE_POINTS_UV )
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
#endif`,lG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dG=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nG=`#ifdef USE_MORPHTARGETS
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
#endif`,sG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eG=`#ifdef USE_NORMALMAP
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
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
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
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
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
}`,hE=`#if DEPTH_PACKING == 3200
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
}`,xE=`#define DISTANCE
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
}`,gE=`#define DISTANCE
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
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
}`,mE=`uniform vec3 diffuse;
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
}`,dE=`#include <common>
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
}`,cE=`uniform vec3 diffuse;
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
}`,nE=`#define LAMBERT
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
}`,sE=`#define LAMBERT
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
}`,oE=`#define MATCAP
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
}`,iE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,rE=`#define NORMAL
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
}`,tE=`#define PHONG
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
}`,eE=`#define PHONG
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
}`,$q=`#define STANDARD
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
}`,Jq=`#define STANDARD
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
}`,Qq=`#define TOON
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
}`,Zq=`#define TOON
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
}`,Wq=`uniform float size;
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
}`,Kq=`uniform vec3 diffuse;
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
}`,Xq=`#include <common>
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
}`,Hq=`uniform vec3 color;
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
}`,Yq=`uniform float rotation;
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
}`,Uq=`uniform vec3 diffuse;
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
}`,m0={alphahash_fragment:SU,alphahash_pars_fragment:jU,alphamap_fragment:fU,alphamap_pars_fragment:vU,alphatest_fragment:yU,alphatest_pars_fragment:bU,aomap_fragment:hU,aomap_pars_fragment:xU,batching_pars_vertex:gU,batching_vertex:pU,begin_vertex:lU,beginnormal_vertex:uU,bsdfs:mU,iridescence_fragment:dU,bumpmap_pars_fragment:cU,clipping_planes_fragment:nU,clipping_planes_pars_fragment:sU,clipping_planes_pars_vertex:oU,clipping_planes_vertex:iU,color_fragment:aU,color_pars_fragment:rU,color_pars_vertex:tU,color_vertex:eU,common:$G,cube_uv_reflection_fragment:JG,defaultnormal_vertex:QG,displacementmap_pars_vertex:ZG,displacementmap_vertex:WG,emissivemap_fragment:KG,emissivemap_pars_fragment:XG,colorspace_fragment:HG,colorspace_pars_fragment:YG,envmap_fragment:UG,envmap_common_pars_fragment:GG,envmap_pars_fragment:EG,envmap_pars_vertex:qG,envmap_physical_pars_fragment:BG,envmap_vertex:NG,fog_vertex:RG,fog_pars_vertex:FG,fog_fragment:OG,fog_pars_fragment:MG,gradientmap_pars_fragment:LG,lightmap_pars_fragment:DG,lights_lambert_fragment:_G,lights_lambert_pars_fragment:VG,lights_pars_begin:zG,lights_toon_fragment:kG,lights_toon_pars_fragment:CG,lights_phong_fragment:IG,lights_phong_pars_fragment:PG,lights_physical_fragment:AG,lights_physical_pars_fragment:TG,lights_fragment_begin:wG,lights_fragment_maps:SG,lights_fragment_end:jG,logdepthbuf_fragment:fG,logdepthbuf_pars_fragment:vG,logdepthbuf_pars_vertex:yG,logdepthbuf_vertex:bG,map_fragment:hG,map_pars_fragment:xG,map_particle_fragment:gG,map_particle_pars_fragment:pG,metalnessmap_fragment:lG,metalnessmap_pars_fragment:uG,morphinstance_vertex:mG,morphcolor_vertex:dG,morphnormal_vertex:cG,morphtarget_pars_vertex:nG,morphtarget_vertex:sG,normal_fragment_begin:oG,normal_fragment_maps:iG,normal_pars_fragment:aG,normal_pars_vertex:rG,normal_vertex:tG,normalmap_pars_fragment:eG,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:ZE,opaque_fragment:WE,packing:KE,premultiplied_alpha_fragment:XE,project_vertex:HE,dithering_fragment:YE,dithering_pars_fragment:UE,roughnessmap_fragment:GE,roughnessmap_pars_fragment:EE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:NE,shadowmap_vertex:RE,shadowmask_pars_fragment:FE,skinbase_vertex:OE,skinning_pars_vertex:ME,skinning_vertex:LE,skinnormal_vertex:DE,specularmap_fragment:_E,specularmap_pars_fragment:VE,tonemapping_fragment:zE,tonemapping_pars_fragment:BE,transmission_fragment:kE,transmission_pars_fragment:CE,uv_pars_fragment:IE,uv_pars_vertex:PE,uv_vertex:AE,worldpos_vertex:TE,background_vert:wE,background_frag:SE,backgroundCube_vert:jE,backgroundCube_frag:fE,cube_vert:vE,cube_frag:yE,depth_vert:bE,depth_frag:hE,distanceRGBA_vert:xE,distanceRGBA_frag:gE,equirect_vert:pE,equirect_frag:lE,linedashed_vert:uE,linedashed_frag:mE,meshbasic_vert:dE,meshbasic_frag:cE,meshlambert_vert:nE,meshlambert_frag:sE,meshmatcap_vert:oE,meshmatcap_frag:iE,meshnormal_vert:aE,meshnormal_frag:rE,meshphong_vert:tE,meshphong_frag:eE,meshphysical_vert:$q,meshphysical_frag:Jq,meshtoon_vert:Qq,meshtoon_frag:Zq,points_vert:Wq,points_frag:Kq,shadow_vert:Xq,shadow_frag:Hq,sprite_vert:Yq,sprite_frag:Uq},R0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new p0},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new p0}},envmap:{envMap:{value:null},envMapRotation:{value:new p0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new p0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new p0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new p0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new p0},normalScale:{value:new u0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new p0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new p0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new p0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new p0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0},uvTransform:{value:new p0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new u0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new p0},alphaMap:{value:null},alphaMapTransform:{value:new p0},alphaTest:{value:0}}},P8={basic:{uniforms:f1([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.fog]),vertexShader:m0.meshbasic_vert,fragmentShader:m0.meshbasic_frag},lambert:{uniforms:f1([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new y0(0)}}]),vertexShader:m0.meshlambert_vert,fragmentShader:m0.meshlambert_frag},phong:{uniforms:f1([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30}}]),vertexShader:m0.meshphong_vert,fragmentShader:m0.meshphong_frag},standard:{uniforms:f1([R0.common,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.roughnessmap,R0.metalnessmap,R0.fog,R0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag},toon:{uniforms:f1([R0.common,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.gradientmap,R0.fog,R0.lights,{emissive:{value:new y0(0)}}]),vertexShader:m0.meshtoon_vert,fragmentShader:m0.meshtoon_frag},matcap:{uniforms:f1([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,{matcap:{value:null}}]),vertexShader:m0.meshmatcap_vert,fragmentShader:m0.meshmatcap_frag},points:{uniforms:f1([R0.points,R0.fog]),vertexShader:m0.points_vert,fragmentShader:m0.points_frag},dashed:{uniforms:f1([R0.common,R0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:m0.linedashed_vert,fragmentShader:m0.linedashed_frag},depth:{uniforms:f1([R0.common,R0.displacementmap]),vertexShader:m0.depth_vert,fragmentShader:m0.depth_frag},normal:{uniforms:f1([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,{opacity:{value:1}}]),vertexShader:m0.meshnormal_vert,fragmentShader:m0.meshnormal_frag},sprite:{uniforms:f1([R0.sprite,R0.fog]),vertexShader:m0.sprite_vert,fragmentShader:m0.sprite_frag},background:{uniforms:{uvTransform:{value:new p0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:m0.background_vert,fragmentShader:m0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new p0}},vertexShader:m0.backgroundCube_vert,fragmentShader:m0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:m0.cube_vert,fragmentShader:m0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:m0.equirect_vert,fragmentShader:m0.equirect_frag},distanceRGBA:{uniforms:f1([R0.common,R0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:m0.distanceRGBA_vert,fragmentShader:m0.distanceRGBA_frag},shadow:{uniforms:f1([R0.lights,R0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:m0.shadow_vert,fragmentShader:m0.shadow_frag}};P8.physical={uniforms:f1([P8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new p0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new p0},clearcoatNormalScale:{value:new u0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new p0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new p0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new p0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new p0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new p0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new p0},transmissionSamplerSize:{value:new u0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new p0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new p0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new p0},anisotropyVector:{value:new u0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new p0}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag};var $J={r:0,b:0,g:0},v6=new F8,Gq=new g0;function Eq($,J,Q,Z,W,K,X){let H=new y0(0),Y=K===!0?0:1,U,G,E=null,q=0,F=null;function O(D){let k=D.isScene===!0?D.background:null;if(k&&k.isTexture)k=(D.backgroundBlurriness>0?Q:J).get(k);return k}function M(D){let k=!1,T=O(D);if(T===null)R(H,Y);else if(T&&T.isColor)R(T,1),k=!0;let P=$.xr.getEnvironmentBlendMode();if(P==="additive")Z.buffers.color.setClear(0,0,0,1,X);else if(P==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,X);if($.autoClear||k)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),$.clear($.autoClearColor,$.autoClearDepth,$.autoClearStencil)}function N(D,k){let T=O(k);if(T&&(T.isCubeTexture||T.mapping===Q9)){if(G===void 0)G=new A1(new _7(1,1,1),new u1({name:"BackgroundCubeMaterial",uniforms:f6(P8.backgroundCube.uniforms),vertexShader:P8.backgroundCube.vertexShader,fragmentShader:P8.backgroundCube.fragmentShader,side:a1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(P,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(v6.copy(k.backgroundRotation),v6.x*=-1,v6.y*=-1,v6.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1)v6.y*=-1,v6.z*=-1;if(G.material.uniforms.envMap.value=T,G.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(Gq.makeRotationFromEuler(v6)),G.material.toneMapped=o0.getTransfer(T.colorSpace)!==H1,E!==T||q!==T.version||F!==$.toneMapping)G.material.needsUpdate=!0,E=T,q=T.version,F=$.toneMapping;G.layers.enableAll(),D.unshift(G,G.geometry,G.material,0,0,null)}else if(T&&T.isTexture){if(U===void 0)U=new A1(new F9(2,2),new u1({name:"BackgroundMaterial",uniforms:f6(P8.background.uniforms),vertexShader:P8.background.vertexShader,fragmentShader:P8.background.fragmentShader,side:Z6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=T,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.toneMapped=o0.getTransfer(T.colorSpace)!==H1,T.matrixAutoUpdate===!0)T.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(T.matrix),E!==T||q!==T.version||F!==$.toneMapping)U.material.needsUpdate=!0,E=T,q=T.version,F=$.toneMapping;U.layers.enableAll(),D.unshift(U,U.geometry,U.material,0,0,null)}}function R(D,k){D.getRGB($J,KZ($)),Z.buffers.color.setClear($J.r,$J.g,$J.b,k,X)}function _(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return H},setClearColor:function(D,k=1){H.set(D),Y=k,R(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(D){Y=D,R(H,Y)},render:M,addToRenderList:N,dispose:_}}function qq($,J){let Q=$.getParameter($.MAX_VERTEX_ATTRIBS),Z={},W=q(null),K=W,X=!1;function H(L,C,I,S,f){let g=!1,b=E(S,I,C);if(K!==b)K=b,U(K.object);if(g=F(L,S,I,f),g)O(L,S,I,f);if(f!==null)J.update(f,$.ELEMENT_ARRAY_BUFFER);if(g||X){if(X=!1,k(L,C,I,S),f!==null)$.bindBuffer($.ELEMENT_ARRAY_BUFFER,J.get(f).buffer)}}function Y(){return $.createVertexArray()}function U(L){return $.bindVertexArray(L)}function G(L){return $.deleteVertexArray(L)}function E(L,C,I){let S=I.wireframe===!0,f=Z[L.id];if(f===void 0)f={},Z[L.id]=f;let g=f[C.id];if(g===void 0)g={},f[C.id]=g;let b=g[S];if(b===void 0)b=q(Y()),g[S]=b;return b}function q(L){let C=[],I=[],S=[];for(let f=0;f<Q;f++)C[f]=0,I[f]=0,S[f]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:S,object:L,attributes:{},index:null}}function F(L,C,I,S){let f=K.attributes,g=C.attributes,b=0,d=I.getAttributes();for(let h in d)if(d[h].location>=0){let t=f[h],Z0=g[h];if(Z0===void 0){if(h==="instanceMatrix"&&L.instanceMatrix)Z0=L.instanceMatrix;if(h==="instanceColor"&&L.instanceColor)Z0=L.instanceColor}if(t===void 0)return!0;if(t.attribute!==Z0)return!0;if(Z0&&t.data!==Z0.data)return!0;b++}if(K.attributesNum!==b)return!0;if(K.index!==S)return!0;return!1}function O(L,C,I,S){let f={},g=C.attributes,b=0,d=I.getAttributes();for(let h in d)if(d[h].location>=0){let t=g[h];if(t===void 0){if(h==="instanceMatrix"&&L.instanceMatrix)t=L.instanceMatrix;if(h==="instanceColor"&&L.instanceColor)t=L.instanceColor}let Z0={};if(Z0.attribute=t,t&&t.data)Z0.data=t.data;f[h]=Z0,b++}K.attributes=f,K.attributesNum=b,K.index=S}function M(){let L=K.newAttributes;for(let C=0,I=L.length;C<I;C++)L[C]=0}function N(L){R(L,0)}function R(L,C){let{newAttributes:I,enabledAttributes:S,attributeDivisors:f}=K;if(I[L]=1,S[L]===0)$.enableVertexAttribArray(L),S[L]=1;if(f[L]!==C)$.vertexAttribDivisor(L,C),f[L]=C}function _(){let{newAttributes:L,enabledAttributes:C}=K;for(let I=0,S=C.length;I<S;I++)if(C[I]!==L[I])$.disableVertexAttribArray(I),C[I]=0}function D(L,C,I,S,f,g,b){if(b===!0)$.vertexAttribIPointer(L,C,I,f,g);else $.vertexAttribPointer(L,C,I,S,f,g)}function k(L,C,I,S){M();let f=S.attributes,g=I.getAttributes(),b=C.defaultAttributeValues;for(let d in g){let h=g[d];if(h.location>=0){let i=f[d];if(i===void 0){if(d==="instanceMatrix"&&L.instanceMatrix)i=L.instanceMatrix;if(d==="instanceColor"&&L.instanceColor)i=L.instanceColor}if(i!==void 0){let{normalized:t,itemSize:Z0}=i,E0=J.get(i);if(E0===void 0)continue;let{buffer:C0,type:_0,bytesPerElement:o}=E0,W0=_0===$.INT||_0===$.UNSIGNED_INT||i.gpuType===RQ;if(i.isInterleavedBufferAttribute){let e=i.data,N0=e.stride,T0=i.offset;if(e.isInstancedInterleavedBuffer){for(let A0=0;A0<h.locationSize;A0++)R(h.location+A0,e.meshPerAttribute);if(L.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=e.meshPerAttribute*e.count}else for(let A0=0;A0<h.locationSize;A0++)N(h.location+A0);$.bindBuffer($.ARRAY_BUFFER,C0);for(let A0=0;A0<h.locationSize;A0++)D(h.location+A0,Z0/h.locationSize,_0,t,N0*o,(T0+Z0/h.locationSize*A0)*o,W0)}else{if(i.isInstancedBufferAttribute){for(let e=0;e<h.locationSize;e++)R(h.location+e,i.meshPerAttribute);if(L.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=i.meshPerAttribute*i.count}else for(let e=0;e<h.locationSize;e++)N(h.location+e);$.bindBuffer($.ARRAY_BUFFER,C0);for(let e=0;e<h.locationSize;e++)D(h.location+e,Z0/h.locationSize,_0,t,Z0*o,Z0/h.locationSize*e*o,W0)}}else if(b!==void 0){let t=b[d];if(t!==void 0)switch(t.length){case 2:$.vertexAttrib2fv(h.location,t);break;case 3:$.vertexAttrib3fv(h.location,t);break;case 4:$.vertexAttrib4fv(h.location,t);break;default:$.vertexAttrib1fv(h.location,t)}}}}_()}function T(){y();for(let L in Z){let C=Z[L];for(let I in C){let S=C[I];for(let f in S)G(S[f].object),delete S[f];delete C[I]}delete Z[L]}}function P(L){if(Z[L.id]===void 0)return;let C=Z[L.id];for(let I in C){let S=C[I];for(let f in S)G(S[f].object),delete S[f];delete C[I]}delete Z[L.id]}function A(L){for(let C in Z){let I=Z[C];if(I[L.id]===void 0)continue;let S=I[L.id];for(let f in S)G(S[f].object),delete S[f];delete I[L.id]}}function y(){if(z(),X=!0,K===W)return;K=W,U(K.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:y,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:N,disableUnusedAttributes:_}}function Nq($,J,Q){let Z;function W(U){Z=U}function K(U,G){$.drawArrays(Z,U,G),Q.update(G,Z,1)}function X(U,G,E){if(E===0)return;$.drawArraysInstanced(Z,U,G,E),Q.update(G,Z,E)}function H(U,G,E){if(E===0)return;J.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let F=0;for(let O=0;O<E;O++)F+=G[O];Q.update(F,Z,1)}function Y(U,G,E,q){if(E===0)return;let F=J.get("WEBGL_multi_draw");if(F===null)for(let O=0;O<U.length;O++)X(U[O],G[O],q[O]);else{F.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,q,0,E);let O=0;for(let M=0;M<E;M++)O+=G[M]*q[M];Q.update(O,Z,1)}}this.setMode=W,this.render=K,this.renderInstances=X,this.renderMultiDraw=H,this.renderMultiDrawInstances=Y}function Rq($,J,Q,Z){let W;function K(){if(W!==void 0)return W;if(J.has("EXT_texture_filter_anisotropic")===!0){let A=J.get("EXT_texture_filter_anisotropic");W=$.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(A){if(A!==k8&&Z.convert(A)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(A){let y=A===W9&&(J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float"));if(A!==K6&&Z.convert(A)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==X6&&!y)return!1;return!0}function Y(A){if(A==="highp"){if($.getShaderPrecisionFormat($.VERTEX_SHADER,$.HIGH_FLOAT).precision>0&&$.getShaderPrecisionFormat($.FRAGMENT_SHADER,$.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if($.getShaderPrecisionFormat($.VERTEX_SHADER,$.MEDIUM_FLOAT).precision>0&&$.getShaderPrecisionFormat($.FRAGMENT_SHADER,$.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",G=Y(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=Q.logarithmicDepthBuffer===!0,q=Q.reversedDepthBuffer===!0&&J.has("EXT_clip_control"),F=$.getParameter($.MAX_TEXTURE_IMAGE_UNITS),O=$.getParameter($.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=$.getParameter($.MAX_TEXTURE_SIZE),N=$.getParameter($.MAX_CUBE_MAP_TEXTURE_SIZE),R=$.getParameter($.MAX_VERTEX_ATTRIBS),_=$.getParameter($.MAX_VERTEX_UNIFORM_VECTORS),D=$.getParameter($.MAX_VARYING_VECTORS),k=$.getParameter($.MAX_FRAGMENT_UNIFORM_VECTORS),T=O>0,P=$.getParameter($.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:Y,textureFormatReadable:X,textureTypeReadable:H,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:O,maxTextureSize:M,maxCubemapSize:N,maxAttributes:R,maxVertexUniforms:_,maxVaryings:D,maxFragmentUniforms:k,vertexTextures:T,maxSamples:P}}function Fq($){let J=this,Q=null,Z=0,W=!1,K=!1,X=new h8,H=new p0,Y={value:null,needsUpdate:!1};this.uniform=Y,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let F=E.length!==0||q||Z!==0||W;return W=q,Z=E.length,F},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,q){Q=G(E,q,0)},this.setState=function(E,q,F){let{clippingPlanes:O,clipIntersection:M,clipShadows:N}=E,R=$.get(E);if(!W||O===null||O.length===0||K&&!N)if(K)G(null);else U();else{let _=K?0:Z,D=_*4,k=R.clippingState||null;Y.value=k,k=G(O,q,D,F);for(let T=0;T!==D;++T)k[T]=Q[T];R.clippingState=k,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function U(){if(Y.value!==Q)Y.value=Q,Y.needsUpdate=Z>0;J.numPlanes=Z,J.numIntersection=0}function G(E,q,F,O){let M=E!==null?E.length:0,N=null;if(M!==0){if(N=Y.value,O!==!0||N===null){let R=F+M*4,_=q.matrixWorldInverse;if(H.getNormalMatrix(_),N===null||N.length<R)N=new Float32Array(R);for(let D=0,k=F;D!==M;++D,k+=4)X.copy(E[D]).applyMatrix4(_,H),X.normal.toArray(N,k),N[k+3]=X.constant}Y.value=N,Y.needsUpdate=!0}return J.numPlanes=M,J.numIntersection=0,N}}function Oq($){let J=new WeakMap;function Q(X,H){if(H===z$)X.mapping=N7;else if(H===B$)X.mapping=w6;return X}function Z(X){if(X&&X.isTexture){let H=X.mapping;if(H===z$||H===B$)if(J.has(X)){let Y=J.get(X).texture;return Q(Y,X.mapping)}else{let Y=X.image;if(Y&&Y.height>0){let U=new HZ(Y.height);return U.fromEquirectangularTexture($,X),J.set(X,U),X.addEventListener("dispose",W),Q(U.texture,X.mapping)}else return null}}return X}function W(X){let H=X.target;H.removeEventListener("dispose",W);let Y=J.get(H);if(Y!==void 0)J.delete(H),Y.dispose()}function K(){J=new WeakMap}return{get:Z,dispose:K}}var A7=4,FK=[0.125,0.215,0.35,0.446,0.526,0.582],h6=20,_Z=new E6,OK=new y0,VZ=null,zZ=0,BZ=0,kZ=!1,b6=(1+Math.sqrt(5))/2,P7=1/b6,MK=[new x(-b6,P7,0),new x(b6,P7,0),new x(-P7,0,b6),new x(P7,0,b6),new x(0,b6,-P7),new x(0,b6,P7),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],Mq=new x;class IZ{constructor($){this._renderer=$,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene($,J=0,Q=0.1,Z=100,W={}){let{size:K=256,position:X=Mq}=W;VZ=this._renderer.getRenderTarget(),zZ=this._renderer.getActiveCubeFace(),BZ=this._renderer.getActiveMipmapLevel(),kZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV($,Q,Z,H,X),J>0)this._blur(H,0,0,J);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular($,J=null){return this._fromTexture($,J)}fromCubemap($,J=null){return this._fromTexture($,J)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=_K(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=DK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize($){this._lodMax=Math.floor(Math.log2($)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let $=0;$<this._lodPlanes.length;$++)this._lodPlanes[$].dispose()}_cleanup($){this._renderer.setRenderTarget(VZ,zZ,BZ),this._renderer.xr.enabled=kZ,$.scissorTest=!1,JJ($,0,0,$.width,$.height)}_fromTexture($,J){if($.mapping===N7||$.mapping===w6)this._setSize($.image.length===0?16:$.image[0].width||$.image[0].image.width);else this._setSize($.image.width/4);VZ=this._renderer.getRenderTarget(),zZ=this._renderer.getActiveCubeFace(),BZ=this._renderer.getActiveMipmapLevel(),kZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=J||this._allocateTargets();return this._textureToCubeUV($,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let $=3*Math.max(this._cubeSize,112),J=4*this._cubeSize,Q={magFilter:p1,minFilter:p1,generateMipmaps:!1,type:W9,format:k8,colorSpace:h1,depthBuffer:!1},Z=LK($,J,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==$||this._pingPongRenderTarget.height!==J){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=LK($,J,Q);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lq(W)),this._blurMaterial=Dq(W,$,J)}return Z}_compileMaterial($){let J=new A1(this._lodPlanes[0],$);this._renderer.compile(J,_Z)}_sceneToCubeUV($,J,Q,Z,W){let H=new T1(90,1,J,Q),Y=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(OK),G.toneMapping=l8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let O=new I8({name:"PMREM.Background",side:a1,depthWrite:!1,depthTest:!1}),M=new A1(new _7,O),N=!1,R=$.background;if(R){if(R.isColor)O.color.copy(R),$.background=null,N=!0}else O.color.copy(OK),N=!0;for(let _=0;_<6;_++){let D=_%3;if(D===0)H.up.set(0,Y[_],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x+U[_],W.y,W.z);else if(D===1)H.up.set(0,0,Y[_]),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y+U[_],W.z);else H.up.set(0,Y[_],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y,W.z+U[_]);let k=this._cubeSize;if(JJ(Z,D*k,_>2?k:0,k,k),G.setRenderTarget(Z),N)G.render(M,H);G.render($,H)}M.geometry.dispose(),M.material.dispose(),G.toneMapping=q,G.autoClear=E,$.background=R}_textureToCubeUV($,J){let Q=this._renderer,Z=$.mapping===N7||$.mapping===w6;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=_K();this._cubemapMaterial.uniforms.flipEnvMap.value=$.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=DK();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=new A1(this._lodPlanes[0],W),X=W.uniforms;X.envMap.value=$;let H=this._cubeSize;JJ(J,0,0,3*H,2*H),Q.setRenderTarget(J),Q.render(K,_Z)}_applyPMREM($){let J=this._renderer,Q=J.autoClear;J.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let K=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),X=MK[(Z-W-1)%MK.length];this._blur($,W-1,W,K,X)}J.autoClear=Q}_blur($,J,Q,Z,W){let K=this._pingPongRenderTarget;this._halfBlur($,K,J,Q,Z,"latitudinal",W),this._halfBlur(K,$,Q,Q,Z,"longitudinal",W)}_halfBlur($,J,Q,Z,W,K,X){let H=this._renderer,Y=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new A1(this._lodPlanes[Z],Y),E=Y.uniforms,q=this._sizeLods[Q]-1,F=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*h6-1),O=W/F,M=isFinite(W)?1+Math.floor(U*O):h6;if(M>h6)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${h6}`);let N=[],R=0;for(let P=0;P<h6;++P){let A=P/O,y=Math.exp(-A*A/2);if(N.push(y),P===0)R+=y;else if(P<M)R+=2*y}for(let P=0;P<N.length;P++)N[P]=N[P]/R;if(E.envMap.value=$.texture,E.samples.value=M,E.weights.value=N,E.latitudinal.value=K==="latitudinal",X)E.poleAxis.value=X;let{_lodMax:_}=this;E.dTheta.value=F,E.mipInt.value=_-Q;let D=this._sizeLods[Z],k=3*D*(Z>_-A7?Z-_+A7:0),T=4*(this._cubeSize-D);JJ(J,k,T,3*D,2*D),H.setRenderTarget(J),H.render(G,_Z)}}function Lq($){let J=[],Q=[],Z=[],W=$,K=$-A7+1+FK.length;for(let X=0;X<K;X++){let H=Math.pow(2,W);Q.push(H);let Y=1/H;if(X>$-A7)Y=FK[X-$+A7-1];else if(X===0)Y=0;Z.push(Y);let U=1/(H-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],F=6,O=6,M=3,N=2,R=1,_=new Float32Array(M*O*F),D=new Float32Array(N*O*F),k=new Float32Array(R*O*F);for(let P=0;P<F;P++){let A=P%3*2/3-1,y=P>2?0:-1,z=[A,y,0,A+0.6666666666666666,y,0,A+0.6666666666666666,y+1,0,A,y,0,A+0.6666666666666666,y+1,0,A,y+1,0];_.set(z,M*O*P),D.set(q,N*O*P);let L=[P,P,P,P,P,P];k.set(L,R*O*P)}let T=new x1;if(T.setAttribute("position",new X1(_,M)),T.setAttribute("uv",new X1(D,N)),T.setAttribute("faceIndex",new X1(k,R)),J.push(T),W>A7)W--}return{lodPlanes:J,sizeLods:Q,sigmas:Z}}function LK($,J,Q){let Z=new M8($,J,Q);return Z.texture.mapping=Q9,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function JJ($,J,Q,Z,W){$.viewport.set(J,Q,Z,W),$.scissor.set(J,Q,Z,W)}function Dq($,J,Q){let Z=new Float32Array(h6),W=new x(0,1,0);return new u1({name:"SphericalGaussianBlur",defines:{n:h6,CUBEUV_TEXEL_WIDTH:1/J,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${$}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:AZ(),fragmentShader:`

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
		`,blending:W6,depthTest:!1,depthWrite:!1})}function DK(){return new u1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:AZ(),fragmentShader:`

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
		`,blending:W6,depthTest:!1,depthWrite:!1})}function _K(){return new u1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:AZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:W6,depthTest:!1,depthWrite:!1})}function AZ(){return`

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
	`}function _q($){let J=new WeakMap,Q=null;function Z(H){if(H&&H.isTexture){let Y=H.mapping,U=Y===z$||Y===B$,G=Y===N7||Y===w6;if(U||G){let E=J.get(H),q=E!==void 0?E.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==q){if(Q===null)Q=new IZ($);return E=U?Q.fromEquirectangular(H,E):Q.fromCubemap(H,E),E.texture.pmremVersion=H.pmremVersion,J.set(H,E),E.texture}else if(E!==void 0)return E.texture;else{let F=H.image;if(U&&F&&F.height>0||G&&F&&W(F)){if(Q===null)Q=new IZ($);return E=U?Q.fromEquirectangular(H):Q.fromCubemap(H),E.texture.pmremVersion=H.pmremVersion,J.set(H,E),H.addEventListener("dispose",K),E.texture}else return null}}}return H}function W(H){let Y=0,U=6;for(let G=0;G<U;G++)if(H[G]!==void 0)Y++;return Y===U}function K(H){let Y=H.target;Y.removeEventListener("dispose",K);let U=J.get(Y);if(U!==void 0)J.delete(Y),U.dispose()}function X(){if(J=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:Z,dispose:X}}function Vq($){let J={};function Q(Z){if(J[Z]!==void 0)return J[Z];let W;switch(Z){case"WEBGL_depth_texture":W=$.getExtension("WEBGL_depth_texture")||$.getExtension("MOZ_WEBGL_depth_texture")||$.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=$.getExtension("EXT_texture_filter_anisotropic")||$.getExtension("MOZ_EXT_texture_filter_anisotropic")||$.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=$.getExtension("WEBGL_compressed_texture_s3tc")||$.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||$.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=$.getExtension("WEBGL_compressed_texture_pvrtc")||$.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=$.getExtension(Z)}return J[Z]=W,W}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let W=Q(Z);if(W===null)E7("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function zq($,J,Q,Z){let W={},K=new WeakMap;function X(E){let q=E.target;if(q.index!==null)J.remove(q.index);for(let O in q.attributes)J.remove(q.attributes[O]);q.removeEventListener("dispose",X),delete W[q.id];let F=K.get(q);if(F)J.remove(F),K.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;Q.memory.geometries--}function H(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",X),W[q.id]=!0,Q.memory.geometries++,q}function Y(E){let q=E.attributes;for(let F in q)J.update(q[F],$.ARRAY_BUFFER)}function U(E){let q=[],F=E.index,O=E.attributes.position,M=0;if(F!==null){let _=F.array;M=F.version;for(let D=0,k=_.length;D<k;D+=3){let T=_[D+0],P=_[D+1],A=_[D+2];q.push(T,P,P,A,A,T)}}else if(O!==void 0){let _=O.array;M=O.version;for(let D=0,k=_.length/3-1;D<k;D+=3){let T=D+0,P=D+1,A=D+2;q.push(T,P,P,A,A,T)}}else return;let N=new((JZ(q))?b$:y$)(q,1);N.version=M;let R=K.get(E);if(R)J.remove(R);K.set(E,N)}function G(E){let q=K.get(E);if(q){let F=E.index;if(F!==null){if(q.version<F.version)U(E)}}else U(E);return K.get(E)}return{get:H,update:Y,getWireframeAttribute:G}}function Bq($,J,Q){let Z;function W(q){Z=q}let K,X;function H(q){K=q.type,X=q.bytesPerElement}function Y(q,F){$.drawElements(Z,F,K,q*X),Q.update(F,Z,1)}function U(q,F,O){if(O===0)return;$.drawElementsInstanced(Z,F,K,q*X,O),Q.update(F,Z,O)}function G(q,F,O){if(O===0)return;J.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,F,0,K,q,0,O);let N=0;for(let R=0;R<O;R++)N+=F[R];Q.update(N,Z,1)}function E(q,F,O,M){if(O===0)return;let N=J.get("WEBGL_multi_draw");if(N===null)for(let R=0;R<q.length;R++)U(q[R]/X,F[R],M[R]);else{N.multiDrawElementsInstancedWEBGL(Z,F,0,K,q,0,M,0,O);let R=0;for(let _=0;_<O;_++)R+=F[_]*M[_];Q.update(R,Z,1)}}this.setMode=W,this.setIndex=H,this.render=Y,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function kq($){let J={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,X,H){switch(Q.calls++,X){case $.TRIANGLES:Q.triangles+=H*(K/3);break;case $.LINES:Q.lines+=H*(K/2);break;case $.LINE_STRIP:Q.lines+=H*(K-1);break;case $.LINE_LOOP:Q.lines+=H*K;break;case $.POINTS:Q.points+=H*K;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",X);break}}function W(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:J,render:Q,programs:null,autoReset:!0,reset:W,update:Z}}function Cq($,J,Q){let Z=new WeakMap,W=new i0;function K(X,H,Y){let U=X.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,E=G!==void 0?G.length:0,q=Z.get(H);if(q===void 0||q.count!==E){let z=function(){A.dispose(),Z.delete(H),H.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let F=H.morphAttributes.position!==void 0,O=H.morphAttributes.normal!==void 0,M=H.morphAttributes.color!==void 0,N=H.morphAttributes.position||[],R=H.morphAttributes.normal||[],_=H.morphAttributes.color||[],D=0;if(F===!0)D=1;if(O===!0)D=2;if(M===!0)D=3;let k=H.attributes.position.count*D,T=1;if(k>J.maxTextureSize)T=Math.ceil(k/J.maxTextureSize),k=J.maxTextureSize;let P=new Float32Array(k*T*4*E),A=new f$(P,k,T,E);A.type=X6,A.needsUpdate=!0;let y=D*4;for(let L=0;L<E;L++){let C=N[L],I=R[L],S=_[L],f=k*T*4*L;for(let g=0;g<C.count;g++){let b=g*y;if(F===!0)W.fromBufferAttribute(C,g),P[f+b+0]=W.x,P[f+b+1]=W.y,P[f+b+2]=W.z,P[f+b+3]=0;if(O===!0)W.fromBufferAttribute(I,g),P[f+b+4]=W.x,P[f+b+5]=W.y,P[f+b+6]=W.z,P[f+b+7]=0;if(M===!0)W.fromBufferAttribute(S,g),P[f+b+8]=W.x,P[f+b+9]=W.y,P[f+b+10]=W.z,P[f+b+11]=S.itemSize===4?W.w:1}}q={count:E,texture:A,size:new u0(k,T)},Z.set(H,q),H.addEventListener("dispose",z)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)Y.getUniforms().setValue($,"morphTexture",X.morphTexture,Q);else{let F=0;for(let M=0;M<U.length;M++)F+=U[M];let O=H.morphTargetsRelative?1:1-F;Y.getUniforms().setValue($,"morphTargetBaseInfluence",O),Y.getUniforms().setValue($,"morphTargetInfluences",U)}Y.getUniforms().setValue($,"morphTargetsTexture",q.texture,Q),Y.getUniforms().setValue($,"morphTargetsTextureSize",q.size)}return{update:K}}function Iq($,J,Q,Z){let W=new WeakMap;function K(Y){let U=Z.render.frame,G=Y.geometry,E=J.get(Y,G);if(W.get(E)!==U)J.update(E),W.set(E,U);if(Y.isInstancedMesh){if(Y.hasEventListener("dispose",H)===!1)Y.addEventListener("dispose",H);if(W.get(Y)!==U){if(Q.update(Y.instanceMatrix,$.ARRAY_BUFFER),Y.instanceColor!==null)Q.update(Y.instanceColor,$.ARRAY_BUFFER);W.set(Y,U)}}if(Y.isSkinnedMesh){let q=Y.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function X(){W=new WeakMap}function H(Y){let U=Y.target;if(U.removeEventListener("dispose",H),Q.remove(U.instanceMatrix),U.instanceColor!==null)Q.remove(U.instanceColor)}return{update:K,dispose:X}}var gK=new L1,VK=new d$(1,1),pK=new f$,lK=new WZ,uK=new h$,zK=[],BK=[],kK=new Float32Array(16),CK=new Float32Array(9),IK=new Float32Array(4);function T7($,J,Q){let Z=$[0];if(Z<=0||Z>0)return $;let W=J*Q,K=zK[W];if(K===void 0)K=new Float32Array(W),zK[W]=K;if(J!==0){Z.toArray(K,0);for(let X=1,H=0;X!==J;++X)H+=Q,$[X].toArray(K,H)}return K}function B1($,J){if($.length!==J.length)return!1;for(let Q=0,Z=$.length;Q<Z;Q++)if($[Q]!==J[Q])return!1;return!0}function k1($,J){for(let Q=0,Z=J.length;Q<Z;Q++)$[Q]=J[Q]}function ZJ($,J){let Q=BK[J];if(Q===void 0)Q=new Int32Array(J),BK[J]=Q;for(let Z=0;Z!==J;++Z)Q[Z]=$.allocateTextureUnit();return Q}function Pq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1f(this.addr,J),Q[0]=J}function Aq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2f(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(B1(Q,J))return;$.uniform2fv(this.addr,J),k1(Q,J)}}function Tq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3f(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else if(J.r!==void 0){if(Q[0]!==J.r||Q[1]!==J.g||Q[2]!==J.b)$.uniform3f(this.addr,J.r,J.g,J.b),Q[0]=J.r,Q[1]=J.g,Q[2]=J.b}else{if(B1(Q,J))return;$.uniform3fv(this.addr,J),k1(Q,J)}}function wq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4f(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(B1(Q,J))return;$.uniform4fv(this.addr,J),k1(Q,J)}}function Sq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(B1(Q,J))return;$.uniformMatrix2fv(this.addr,!1,J),k1(Q,J)}else{if(B1(Q,Z))return;IK.set(Z),$.uniformMatrix2fv(this.addr,!1,IK),k1(Q,Z)}}function jq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(B1(Q,J))return;$.uniformMatrix3fv(this.addr,!1,J),k1(Q,J)}else{if(B1(Q,Z))return;CK.set(Z),$.uniformMatrix3fv(this.addr,!1,CK),k1(Q,Z)}}function fq($,J){let Q=this.cache,Z=J.elements;if(Z===void 0){if(B1(Q,J))return;$.uniformMatrix4fv(this.addr,!1,J),k1(Q,J)}else{if(B1(Q,Z))return;kK.set(Z),$.uniformMatrix4fv(this.addr,!1,kK),k1(Q,Z)}}function vq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1i(this.addr,J),Q[0]=J}function yq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2i(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(B1(Q,J))return;$.uniform2iv(this.addr,J),k1(Q,J)}}function bq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3i(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else{if(B1(Q,J))return;$.uniform3iv(this.addr,J),k1(Q,J)}}function hq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4i(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(B1(Q,J))return;$.uniform4iv(this.addr,J),k1(Q,J)}}function xq($,J){let Q=this.cache;if(Q[0]===J)return;$.uniform1ui(this.addr,J),Q[0]=J}function gq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y)$.uniform2ui(this.addr,J.x,J.y),Q[0]=J.x,Q[1]=J.y}else{if(B1(Q,J))return;$.uniform2uiv(this.addr,J),k1(Q,J)}}function pq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z)$.uniform3ui(this.addr,J.x,J.y,J.z),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z}else{if(B1(Q,J))return;$.uniform3uiv(this.addr,J),k1(Q,J)}}function lq($,J){let Q=this.cache;if(J.x!==void 0){if(Q[0]!==J.x||Q[1]!==J.y||Q[2]!==J.z||Q[3]!==J.w)$.uniform4ui(this.addr,J.x,J.y,J.z,J.w),Q[0]=J.x,Q[1]=J.y,Q[2]=J.z,Q[3]=J.w}else{if(B1(Q,J))return;$.uniform4uiv(this.addr,J),k1(Q,J)}}function uq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===$.SAMPLER_2D_SHADOW)VK.compareFunction=rQ,K=VK;else K=gK;Q.setTexture2D(J||K,W)}function mq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTexture3D(J||lK,W)}function dq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTextureCube(J||uK,W)}function cq($,J,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)$.uniform1i(this.addr,W),Z[0]=W;Q.setTexture2DArray(J||pK,W)}function nq($){switch($){case 5126:return Pq;case 35664:return Aq;case 35665:return Tq;case 35666:return wq;case 35674:return Sq;case 35675:return jq;case 35676:return fq;case 5124:case 35670:return vq;case 35667:case 35671:return yq;case 35668:case 35672:return bq;case 35669:case 35673:return hq;case 5125:return xq;case 36294:return gq;case 36295:return pq;case 36296:return lq;case 35678:case 36198:case 36298:case 36306:case 35682:return uq;case 35679:case 36299:case 36307:return mq;case 35680:case 36300:case 36308:case 36293:return dq;case 36289:case 36303:case 36311:case 36292:return cq}}function sq($,J){$.uniform1fv(this.addr,J)}function oq($,J){let Q=T7(J,this.size,2);$.uniform2fv(this.addr,Q)}function iq($,J){let Q=T7(J,this.size,3);$.uniform3fv(this.addr,Q)}function aq($,J){let Q=T7(J,this.size,4);$.uniform4fv(this.addr,Q)}function rq($,J){let Q=T7(J,this.size,4);$.uniformMatrix2fv(this.addr,!1,Q)}function tq($,J){let Q=T7(J,this.size,9);$.uniformMatrix3fv(this.addr,!1,Q)}function eq($,J){let Q=T7(J,this.size,16);$.uniformMatrix4fv(this.addr,!1,Q)}function $N($,J){$.uniform1iv(this.addr,J)}function JN($,J){$.uniform2iv(this.addr,J)}function QN($,J){$.uniform3iv(this.addr,J)}function ZN($,J){$.uniform4iv(this.addr,J)}function WN($,J){$.uniform1uiv(this.addr,J)}function KN($,J){$.uniform2uiv(this.addr,J)}function XN($,J){$.uniform3uiv(this.addr,J)}function HN($,J){$.uniform4uiv(this.addr,J)}function YN($,J,Q){let Z=this.cache,W=J.length,K=ZJ(Q,W);if(!B1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTexture2D(J[X]||gK,K[X])}function UN($,J,Q){let Z=this.cache,W=J.length,K=ZJ(Q,W);if(!B1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTexture3D(J[X]||lK,K[X])}function GN($,J,Q){let Z=this.cache,W=J.length,K=ZJ(Q,W);if(!B1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTextureCube(J[X]||uK,K[X])}function EN($,J,Q){let Z=this.cache,W=J.length,K=ZJ(Q,W);if(!B1(Z,K))$.uniform1iv(this.addr,K),k1(Z,K);for(let X=0;X!==W;++X)Q.setTexture2DArray(J[X]||pK,K[X])}function qN($){switch($){case 5126:return sq;case 35664:return oq;case 35665:return iq;case 35666:return aq;case 35674:return rq;case 35675:return tq;case 35676:return eq;case 5124:case 35670:return $N;case 35667:case 35671:return JN;case 35668:case 35672:return QN;case 35669:case 35673:return ZN;case 5125:return WN;case 36294:return KN;case 36295:return XN;case 36296:return HN;case 35678:case 36198:case 36298:case 36306:case 35682:return YN;case 35679:case 36299:case 36307:return UN;case 35680:case 36300:case 36308:case 36293:return GN;case 36289:case 36303:case 36311:case 36292:return EN}}class mK{constructor($,J,Q){this.id=$,this.addr=Q,this.cache=[],this.type=J.type,this.setValue=nq(J.type)}}class dK{constructor($,J,Q){this.id=$,this.addr=Q,this.cache=[],this.type=J.type,this.size=J.size,this.setValue=qN(J.type)}}class cK{constructor($){this.id=$,this.seq=[],this.map={}}setValue($,J,Q){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let X=Z[W];X.setValue($,J[X.id],Q)}}}var CZ=/(\w+)(\])?(\[|\.)?/g;function PK($,J){$.seq.push(J),$.map[J.id]=J}function NN($,J,Q){let Z=$.name,W=Z.length;CZ.lastIndex=0;while(!0){let K=CZ.exec(Z),X=CZ.lastIndex,H=K[1],Y=K[2]==="]",U=K[3];if(Y)H=H|0;if(U===void 0||U==="["&&X+2===W){PK(Q,U===void 0?new mK(H,$,J):new dK(H,$,J));break}else{let E=Q.map[H];if(E===void 0)E=new cK(H),PK(Q,E);Q=E}}}class D9{constructor($,J){this.seq=[],this.map={};let Q=$.getProgramParameter(J,$.ACTIVE_UNIFORMS);for(let Z=0;Z<Q;++Z){let W=$.getActiveUniform(J,Z),K=$.getUniformLocation(J,W.name);NN(W,K,this)}}setValue($,J,Q,Z){let W=this.map[J];if(W!==void 0)W.setValue($,Q,Z)}setOptional($,J,Q){let Z=J[Q];if(Z!==void 0)this.setValue($,Q,Z)}static upload($,J,Q,Z){for(let W=0,K=J.length;W!==K;++W){let X=J[W],H=Q[X.id];if(H.needsUpdate!==!1)X.setValue($,H.value,Z)}}static seqWithValue($,J){let Q=[];for(let Z=0,W=$.length;Z!==W;++Z){let K=$[Z];if(K.id in J)Q.push(K)}return Q}}function AK($,J,Q){let Z=$.createShader(J);return $.shaderSource(Z,Q),$.compileShader(Z),Z}var RN=37297,FN=0;function ON($,J){let Q=$.split(`
`),Z=[],W=Math.max(J-6,0),K=Math.min(J+6,Q.length);for(let X=W;X<K;X++){let H=X+1;Z.push(`${H===J?">":" "} ${H}: ${Q[X]}`)}return Z.join(`
`)}var TK=new p0;function MN($){o0._getMatrix(TK,o0.workingColorSpace,$);let J=`mat3( ${TK.elements.map((Q)=>Q.toFixed(4))} )`;switch(o0.getTransfer($)){case aQ:return[J,"LinearTransferOETF"];case H1:return[J,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",$),[J,"LinearTransferOETF"]}}function wK($,J,Q){let Z=$.getShaderParameter(J,$.COMPILE_STATUS),K=($.getShaderInfoLog(J)||"").trim();if(Z&&K==="")return"";let X=/ERROR: 0:(\d+)/.exec(K);if(X){let H=parseInt(X[1]);return Q.toUpperCase()+`

`+K+`

`+ON($.getShaderSource(J),H)}else return K}function LN($,J){let Q=MN(J);return[`vec4 ${$}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}function DN($,J){let Q;switch(J){case fW:Q="Linear";break;case vW:Q="Reinhard";break;case yW:Q="Cineon";break;case bW:Q="ACESFilmic";break;case xW:Q="AgX";break;case gW:Q="Neutral";break;case hW:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",J),Q="Linear"}return"vec3 "+$+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var QJ=new x;function _N(){o0.getLuminanceCoefficients(QJ);let $=QJ.x.toFixed(4),J=QJ.y.toFixed(4),Q=QJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${$}, ${J}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function VN($){return[$.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",$.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(L9).join(`
`)}function zN($){let J=[];for(let Q in $){let Z=$[Q];if(Z===!1)continue;J.push("#define "+Q+" "+Z)}return J.join(`
`)}function BN($,J){let Q={},Z=$.getProgramParameter(J,$.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=$.getActiveAttrib(J,W),X=K.name,H=1;if(K.type===$.FLOAT_MAT2)H=2;if(K.type===$.FLOAT_MAT3)H=3;if(K.type===$.FLOAT_MAT4)H=4;Q[X]={type:K.type,location:$.getAttribLocation(J,X),locationSize:H}}return Q}function L9($){return $!==""}function SK($,J){let Q=J.numSpotLightShadows+J.numSpotLightMaps-J.numSpotLightShadowsWithMaps;return $.replace(/NUM_DIR_LIGHTS/g,J.numDirLights).replace(/NUM_SPOT_LIGHTS/g,J.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,J.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,J.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,J.numPointLights).replace(/NUM_HEMI_LIGHTS/g,J.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,J.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,J.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,J.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,J.numPointLightShadows)}function jK($,J){return $.replace(/NUM_CLIPPING_PLANES/g,J.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,J.numClippingPlanes-J.numClipIntersection)}var kN=/^[ \t]*#include +<([\w\d./]+)>/gm;function PZ($){return $.replace(kN,IN)}var CN=new Map;function IN($,J){let Q=m0[J];if(Q===void 0){let Z=CN.get(J);if(Z!==void 0)Q=m0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',J,Z);else throw Error("Can not resolve #include <"+J+">")}return PZ(Q)}var PN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fK($){return $.replace(PN,AN)}function AN($,J,Q,Z){let W="";for(let K=parseInt(J);K<parseInt(Q);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function vK($){let J=`precision ${$.precision} float;
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
#define LOW_PRECISION`;return J}function TN($){let J="SHADOWMAP_TYPE_BASIC";if($.shadowMapType===GQ)J="SHADOWMAP_TYPE_PCF";else if($.shadowMapType===UW)J="SHADOWMAP_TYPE_PCF_SOFT";else if($.shadowMapType===B8)J="SHADOWMAP_TYPE_VSM";return J}function wN($){let J="ENVMAP_TYPE_CUBE";if($.envMap)switch($.envMapMode){case N7:case w6:J="ENVMAP_TYPE_CUBE";break;case Q9:J="ENVMAP_TYPE_CUBE_UV";break}return J}function SN($){let J="ENVMAP_MODE_REFLECTION";if($.envMap)switch($.envMapMode){case w6:J="ENVMAP_MODE_REFRACTION";break}return J}function jN($){let J="ENVMAP_BLENDING_NONE";if($.envMap)switch($.combine){case wW:J="ENVMAP_BLENDING_MULTIPLY";break;case SW:J="ENVMAP_BLENDING_MIX";break;case jW:J="ENVMAP_BLENDING_ADD";break}return J}function fN($){let J=$.envMapCubeUVHeight;if(J===null)return null;let Q=Math.log2(J)-2,Z=1/J;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function vN($,J,Q,Z){let W=$.getContext(),K=Q.defines,X=Q.vertexShader,H=Q.fragmentShader,Y=TN(Q),U=wN(Q),G=SN(Q),E=jN(Q),q=fN(Q),F=VN(Q),O=zN(K),M=W.createProgram(),N,R,_=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(L9).join(`
`),N.length>0)N+=`
`;if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(L9).join(`
`),R.length>0)R+=`
`}else N=[vK(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+Y:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(L9).join(`
`),R=[vK(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor||Q.batchingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+Y:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==l8?"#define TONE_MAPPING":"",Q.toneMapping!==l8?m0.tonemapping_pars_fragment:"",Q.toneMapping!==l8?DN("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",m0.colorspace_pars_fragment,LN("linearToOutputTexel",Q.outputColorSpace),_N(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(L9).join(`
`);if(X=PZ(X),X=SK(X,Q),X=jK(X,Q),H=PZ(H),H=SK(H,Q),H=jK(H,Q),X=fK(X),H=fK(H),Q.isRawShaderMaterial!==!0)_=`#version 300 es
`,N=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,R=["#define varying in",Q.glslVersion===tQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===tQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R;let D=_+N+X,k=_+R+H,T=AK(W,W.VERTEX_SHADER,D),P=AK(W,W.FRAGMENT_SHADER,k);if(W.attachShader(M,T),W.attachShader(M,P),Q.index0AttributeName!==void 0)W.bindAttribLocation(M,0,Q.index0AttributeName);else if(Q.morphTargets===!0)W.bindAttribLocation(M,0,"position");W.linkProgram(M);function A(C){if($.debug.checkShaderErrors){let I=W.getProgramInfoLog(M)||"",S=W.getShaderInfoLog(T)||"",f=W.getShaderInfoLog(P)||"",g=I.trim(),b=S.trim(),d=f.trim(),h=!0,i=!0;if(W.getProgramParameter(M,W.LINK_STATUS)===!1)if(h=!1,typeof $.debug.onShaderError==="function")$.debug.onShaderError(W,M,T,P);else{let t=wK(W,T,"vertex"),Z0=wK(W,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(M,W.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+g+`
`+t+`
`+Z0)}else if(g!=="")console.warn("THREE.WebGLProgram: Program Info Log:",g);else if(b===""||d==="")i=!1;if(i)C.diagnostics={runnable:h,programLog:g,vertexShader:{log:b,prefix:N},fragmentShader:{log:d,prefix:R}}}W.deleteShader(T),W.deleteShader(P),y=new D9(W,M),z=BN(W,M)}let y;this.getUniforms=function(){if(y===void 0)A(this);return y};let z;this.getAttributes=function(){if(z===void 0)A(this);return z};let L=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(L===!1)L=W.getProgramParameter(M,RN);return L},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(M),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=FN++,this.cacheKey=J,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=P,this}var yN=0;class nK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update($){let{vertexShader:J,fragmentShader:Q}=$,Z=this._getShaderStage(J),W=this._getShaderStage(Q),K=this._getShaderCacheForMaterial($);if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove($){let J=this.materialCache.get($);for(let Q of J)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete($),this}getVertexShaderID($){return this._getShaderStage($.vertexShader).id}getFragmentShaderID($){return this._getShaderStage($.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial($){let J=this.materialCache,Q=J.get($);if(Q===void 0)Q=new Set,J.set($,Q);return Q}_getShaderStage($){let J=this.shaderCache,Q=J.get($);if(Q===void 0)Q=new sK($),J.set($,Q);return Q}}class sK{constructor($){this.id=yN++,this.code=$,this.usedTimes=0}}function bN($,J,Q,Z,W,K,X){let H=new v$,Y=new nK,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,F=W.precision,O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function N(z,L,C,I,S){let f=I.fog,g=S.geometry,b=z.isMeshStandardMaterial?I.environment:null,d=(z.isMeshStandardMaterial?Q:J).get(z.envMap||b),h=!!d&&d.mapping===Q9?d.image.height:null,i=O[z.type];if(z.precision!==null){if(F=W.getMaxPrecision(z.precision),F!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",F,"instead.")}let t=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,Z0=t!==void 0?t.length:0,E0=0;if(g.morphAttributes.position!==void 0)E0=1;if(g.morphAttributes.normal!==void 0)E0=2;if(g.morphAttributes.color!==void 0)E0=3;let C0,_0,o,W0;if(i){let J1=P8[i];C0=J1.vertexShader,_0=J1.fragmentShader}else C0=z.vertexShader,_0=z.fragmentShader,Y.update(z),o=Y.getVertexShaderID(z),W0=Y.getFragmentShaderID(z);let e=$.getRenderTarget(),N0=$.state.buffers.depth.getReversed(),T0=S.isInstancedMesh===!0,A0=S.isBatchedMesh===!0,e0=!!z.map,j=!!z.matcap,d0=!!d,f0=!!z.aoMap,I0=!!z.lightMap,M0=!!z.bumpMap,a0=!!z.normalMap,V0=!!z.displacementMap,F0=!!z.emissiveMap,U1=!!z.metalnessMap,q1=!!z.roughnessMap,l0=z.anisotropy>0,w=z.clearcoat>0,V=z.dispersion>0,u=z.iridescence>0,a=z.sheen>0,$0=z.transmission>0,s=l0&&!!z.anisotropyMap,D0=w&&!!z.clearcoatMap,G0=w&&!!z.clearcoatNormalMap,B0=w&&!!z.clearcoatRoughnessMap,S0=u&&!!z.iridescenceMap,K0=u&&!!z.iridescenceThicknessMap,m=a&&!!z.sheenColorMap,J0=a&&!!z.sheenRoughnessMap,U0=!!z.specularMap,Y0=!!z.specularColorMap,b0=!!z.specularIntensityMap,v=$0&&!!z.transmissionMap,q0=$0&&!!z.thicknessMap,H0=!!z.gradientMap,L0=!!z.alphaMap,Q0=z.alphaTest>0,r=!!z.alphaHash,P0=!!z.extensions,x0=l8;if(z.toneMapped){if(e===null||e.isXRRenderTarget===!0)x0=$.toneMapping}let Z1={shaderID:i,shaderType:z.type,shaderName:z.name,vertexShader:C0,fragmentShader:_0,defines:z.defines,customVertexShaderID:o,customFragmentShaderID:W0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:F,batching:A0,batchingColor:A0&&S._colorsTexture!==null,instancing:T0,instancingColor:T0&&S.instanceColor!==null,instancingMorph:T0&&S.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:e===null?$.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:h1,alphaToCoverage:!!z.alphaToCoverage,map:e0,matcap:j,envMap:d0,envMapMode:d0&&d.mapping,envMapCubeUVHeight:h,aoMap:f0,lightMap:I0,bumpMap:M0,normalMap:a0,displacementMap:q&&V0,emissiveMap:F0,normalMapObjectSpace:a0&&z.normalMapType===aW,normalMapTangentSpace:a0&&z.normalMapType===iW,metalnessMap:U1,roughnessMap:q1,anisotropy:l0,anisotropyMap:s,clearcoat:w,clearcoatMap:D0,clearcoatNormalMap:G0,clearcoatRoughnessMap:B0,dispersion:V,iridescence:u,iridescenceMap:S0,iridescenceThicknessMap:K0,sheen:a,sheenColorMap:m,sheenRoughnessMap:J0,specularMap:U0,specularColorMap:Y0,specularIntensityMap:b0,transmission:$0,transmissionMap:v,thicknessMap:q0,gradientMap:H0,opaque:z.transparent===!1&&z.blending===$9&&z.alphaToCoverage===!1,alphaMap:L0,alphaTest:Q0,alphaHash:r,combine:z.combine,mapUv:e0&&M(z.map.channel),aoMapUv:f0&&M(z.aoMap.channel),lightMapUv:I0&&M(z.lightMap.channel),bumpMapUv:M0&&M(z.bumpMap.channel),normalMapUv:a0&&M(z.normalMap.channel),displacementMapUv:V0&&M(z.displacementMap.channel),emissiveMapUv:F0&&M(z.emissiveMap.channel),metalnessMapUv:U1&&M(z.metalnessMap.channel),roughnessMapUv:q1&&M(z.roughnessMap.channel),anisotropyMapUv:s&&M(z.anisotropyMap.channel),clearcoatMapUv:D0&&M(z.clearcoatMap.channel),clearcoatNormalMapUv:G0&&M(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B0&&M(z.clearcoatRoughnessMap.channel),iridescenceMapUv:S0&&M(z.iridescenceMap.channel),iridescenceThicknessMapUv:K0&&M(z.iridescenceThicknessMap.channel),sheenColorMapUv:m&&M(z.sheenColorMap.channel),sheenRoughnessMapUv:J0&&M(z.sheenRoughnessMap.channel),specularMapUv:U0&&M(z.specularMap.channel),specularColorMapUv:Y0&&M(z.specularColorMap.channel),specularIntensityMapUv:b0&&M(z.specularIntensityMap.channel),transmissionMapUv:v&&M(z.transmissionMap.channel),thicknessMapUv:q0&&M(z.thicknessMap.channel),alphaMapUv:L0&&M(z.alphaMap.channel),vertexTangents:!!g.attributes.tangent&&(a0||l0),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!g.attributes.uv&&(e0||L0),fog:!!f,useFog:z.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:N0,skinning:S.isSkinnedMesh===!0,morphTargets:g.morphAttributes.position!==void 0,morphNormals:g.morphAttributes.normal!==void 0,morphColors:g.morphAttributes.color!==void 0,morphTargetsCount:Z0,morphTextureStride:E0,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:X.numPlanes,numClipIntersection:X.numIntersection,dithering:z.dithering,shadowMapEnabled:$.shadowMap.enabled&&C.length>0,shadowMapType:$.shadowMap.type,toneMapping:x0,decodeVideoTexture:e0&&z.map.isVideoTexture===!0&&o0.getTransfer(z.map.colorSpace)===H1,decodeVideoTextureEmissive:F0&&z.emissiveMap.isVideoTexture===!0&&o0.getTransfer(z.emissiveMap.colorSpace)===H1,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===H8,flipSided:z.side===a1,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:P0&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(P0&&z.extensions.multiDraw===!0||A0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return Z1.vertexUv1s=U.has(1),Z1.vertexUv2s=U.has(2),Z1.vertexUv3s=U.has(3),U.clear(),Z1}function R(z){let L=[];if(z.shaderID)L.push(z.shaderID);else L.push(z.customVertexShaderID),L.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let C in z.defines)L.push(C),L.push(z.defines[C]);if(z.isRawShaderMaterial===!1)_(L,z),D(L,z),L.push($.outputColorSpace);return L.push(z.customProgramCacheKey),L.join()}function _(z,L){z.push(L.precision),z.push(L.outputColorSpace),z.push(L.envMapMode),z.push(L.envMapCubeUVHeight),z.push(L.mapUv),z.push(L.alphaMapUv),z.push(L.lightMapUv),z.push(L.aoMapUv),z.push(L.bumpMapUv),z.push(L.normalMapUv),z.push(L.displacementMapUv),z.push(L.emissiveMapUv),z.push(L.metalnessMapUv),z.push(L.roughnessMapUv),z.push(L.anisotropyMapUv),z.push(L.clearcoatMapUv),z.push(L.clearcoatNormalMapUv),z.push(L.clearcoatRoughnessMapUv),z.push(L.iridescenceMapUv),z.push(L.iridescenceThicknessMapUv),z.push(L.sheenColorMapUv),z.push(L.sheenRoughnessMapUv),z.push(L.specularMapUv),z.push(L.specularColorMapUv),z.push(L.specularIntensityMapUv),z.push(L.transmissionMapUv),z.push(L.thicknessMapUv),z.push(L.combine),z.push(L.fogExp2),z.push(L.sizeAttenuation),z.push(L.morphTargetsCount),z.push(L.morphAttributeCount),z.push(L.numDirLights),z.push(L.numPointLights),z.push(L.numSpotLights),z.push(L.numSpotLightMaps),z.push(L.numHemiLights),z.push(L.numRectAreaLights),z.push(L.numDirLightShadows),z.push(L.numPointLightShadows),z.push(L.numSpotLightShadows),z.push(L.numSpotLightShadowsWithMaps),z.push(L.numLightProbes),z.push(L.shadowMapType),z.push(L.toneMapping),z.push(L.numClippingPlanes),z.push(L.numClipIntersection),z.push(L.depthPacking)}function D(z,L){if(H.disableAll(),L.supportsVertexTextures)H.enable(0);if(L.instancing)H.enable(1);if(L.instancingColor)H.enable(2);if(L.instancingMorph)H.enable(3);if(L.matcap)H.enable(4);if(L.envMap)H.enable(5);if(L.normalMapObjectSpace)H.enable(6);if(L.normalMapTangentSpace)H.enable(7);if(L.clearcoat)H.enable(8);if(L.iridescence)H.enable(9);if(L.alphaTest)H.enable(10);if(L.vertexColors)H.enable(11);if(L.vertexAlphas)H.enable(12);if(L.vertexUv1s)H.enable(13);if(L.vertexUv2s)H.enable(14);if(L.vertexUv3s)H.enable(15);if(L.vertexTangents)H.enable(16);if(L.anisotropy)H.enable(17);if(L.alphaHash)H.enable(18);if(L.batching)H.enable(19);if(L.dispersion)H.enable(20);if(L.batchingColor)H.enable(21);if(L.gradientMap)H.enable(22);if(z.push(H.mask),H.disableAll(),L.fog)H.enable(0);if(L.useFog)H.enable(1);if(L.flatShading)H.enable(2);if(L.logarithmicDepthBuffer)H.enable(3);if(L.reversedDepthBuffer)H.enable(4);if(L.skinning)H.enable(5);if(L.morphTargets)H.enable(6);if(L.morphNormals)H.enable(7);if(L.morphColors)H.enable(8);if(L.premultipliedAlpha)H.enable(9);if(L.shadowMapEnabled)H.enable(10);if(L.doubleSided)H.enable(11);if(L.flipSided)H.enable(12);if(L.useDepthPacking)H.enable(13);if(L.dithering)H.enable(14);if(L.transmission)H.enable(15);if(L.sheen)H.enable(16);if(L.opaque)H.enable(17);if(L.pointsUvs)H.enable(18);if(L.decodeVideoTexture)H.enable(19);if(L.decodeVideoTextureEmissive)H.enable(20);if(L.alphaToCoverage)H.enable(21);z.push(H.mask)}function k(z){let L=O[z.type],C;if(L){let I=P8[L];C=HK.clone(I.uniforms)}else C=z.uniforms;return C}function T(z,L){let C;for(let I=0,S=G.length;I<S;I++){let f=G[I];if(f.cacheKey===L){C=f,++C.usedTimes;break}}if(C===void 0)C=new vN($,L,z,K),G.push(C);return C}function P(z){if(--z.usedTimes===0){let L=G.indexOf(z);G[L]=G[G.length-1],G.pop(),z.destroy()}}function A(z){Y.remove(z)}function y(){Y.dispose()}return{getParameters:N,getProgramCacheKey:R,getUniforms:k,acquireProgram:T,releaseProgram:P,releaseShaderCache:A,programs:G,dispose:y}}function hN(){let $=new WeakMap;function J(X){return $.has(X)}function Q(X){let H=$.get(X);if(H===void 0)H={},$.set(X,H);return H}function Z(X){$.delete(X)}function W(X,H,Y){$.get(X)[H]=Y}function K(){$=new WeakMap}return{has:J,get:Q,remove:Z,update:W,dispose:K}}function xN($,J){if($.groupOrder!==J.groupOrder)return $.groupOrder-J.groupOrder;else if($.renderOrder!==J.renderOrder)return $.renderOrder-J.renderOrder;else if($.material.id!==J.material.id)return $.material.id-J.material.id;else if($.z!==J.z)return $.z-J.z;else return $.id-J.id}function yK($,J){if($.groupOrder!==J.groupOrder)return $.groupOrder-J.groupOrder;else if($.renderOrder!==J.renderOrder)return $.renderOrder-J.renderOrder;else if($.z!==J.z)return J.z-$.z;else return $.id-J.id}function bK(){let $=[],J=0,Q=[],Z=[],W=[];function K(){J=0,Q.length=0,Z.length=0,W.length=0}function X(E,q,F,O,M,N){let R=$[J];if(R===void 0)R={id:E.id,object:E,geometry:q,material:F,groupOrder:O,renderOrder:E.renderOrder,z:M,group:N},$[J]=R;else R.id=E.id,R.object=E,R.geometry=q,R.material=F,R.groupOrder=O,R.renderOrder=E.renderOrder,R.z=M,R.group=N;return J++,R}function H(E,q,F,O,M,N){let R=X(E,q,F,O,M,N);if(F.transmission>0)Z.push(R);else if(F.transparent===!0)W.push(R);else Q.push(R)}function Y(E,q,F,O,M,N){let R=X(E,q,F,O,M,N);if(F.transmission>0)Z.unshift(R);else if(F.transparent===!0)W.unshift(R);else Q.unshift(R)}function U(E,q){if(Q.length>1)Q.sort(E||xN);if(Z.length>1)Z.sort(q||yK);if(W.length>1)W.sort(q||yK)}function G(){for(let E=J,q=$.length;E<q;E++){let F=$[E];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:Q,transmissive:Z,transparent:W,init:K,push:H,unshift:Y,finish:G,sort:U}}function gN(){let $=new WeakMap;function J(Z,W){let K=$.get(Z),X;if(K===void 0)X=new bK,$.set(Z,[X]);else if(W>=K.length)X=new bK,K.push(X);else X=K[W];return X}function Q(){$=new WeakMap}return{get:J,dispose:Q}}function pN(){let $={};return{get:function(J){if($[J.id]!==void 0)return $[J.id];let Q;switch(J.type){case"DirectionalLight":Q={direction:new x,color:new y0};break;case"SpotLight":Q={position:new x,direction:new x,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new x,color:new y0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new x,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":Q={color:new y0,position:new x,halfWidth:new x,halfHeight:new x};break}return $[J.id]=Q,Q}}}function lN(){let $={};return{get:function(J){if($[J.id]!==void 0)return $[J.id];let Q;switch(J.type){case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0,shadowCameraNear:1,shadowCameraFar:1000};break}return $[J.id]=Q,Q}}}var uN=0;function mN($,J){return(J.castShadow?2:0)-($.castShadow?2:0)+(J.map?1:0)-($.map?1:0)}function dN($){let J=new pN,Q=lN(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new x);let W=new x,K=new g0,X=new g0;function H(U){let G=0,E=0,q=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let F=0,O=0,M=0,N=0,R=0,_=0,D=0,k=0,T=0,P=0,A=0;U.sort(mN);for(let z=0,L=U.length;z<L;z++){let C=U[z],I=C.color,S=C.intensity,f=C.distance,g=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)G+=I.r*S,E+=I.g*S,q+=I.b*S;else if(C.isLightProbe){for(let b=0;b<9;b++)Z.probe[b].addScaledVector(C.sh.coefficients[b],S);A++}else if(C.isDirectionalLight){let b=J.get(C);if(b.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let d=C.shadow,h=Q.get(C);h.shadowIntensity=d.intensity,h.shadowBias=d.bias,h.shadowNormalBias=d.normalBias,h.shadowRadius=d.radius,h.shadowMapSize=d.mapSize,Z.directionalShadow[F]=h,Z.directionalShadowMap[F]=g,Z.directionalShadowMatrix[F]=C.shadow.matrix,_++}Z.directional[F]=b,F++}else if(C.isSpotLight){let b=J.get(C);b.position.setFromMatrixPosition(C.matrixWorld),b.color.copy(I).multiplyScalar(S),b.distance=f,b.coneCos=Math.cos(C.angle),b.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),b.decay=C.decay,Z.spot[M]=b;let d=C.shadow;if(C.map){if(Z.spotLightMap[T]=C.map,T++,d.updateMatrices(C),C.castShadow)P++}if(Z.spotLightMatrix[M]=d.matrix,C.castShadow){let h=Q.get(C);h.shadowIntensity=d.intensity,h.shadowBias=d.bias,h.shadowNormalBias=d.normalBias,h.shadowRadius=d.radius,h.shadowMapSize=d.mapSize,Z.spotShadow[M]=h,Z.spotShadowMap[M]=g,k++}M++}else if(C.isRectAreaLight){let b=J.get(C);b.color.copy(I).multiplyScalar(S),b.halfWidth.set(C.width*0.5,0,0),b.halfHeight.set(0,C.height*0.5,0),Z.rectArea[N]=b,N++}else if(C.isPointLight){let b=J.get(C);if(b.color.copy(C.color).multiplyScalar(C.intensity),b.distance=C.distance,b.decay=C.decay,C.castShadow){let d=C.shadow,h=Q.get(C);h.shadowIntensity=d.intensity,h.shadowBias=d.bias,h.shadowNormalBias=d.normalBias,h.shadowRadius=d.radius,h.shadowMapSize=d.mapSize,h.shadowCameraNear=d.camera.near,h.shadowCameraFar=d.camera.far,Z.pointShadow[O]=h,Z.pointShadowMap[O]=g,Z.pointShadowMatrix[O]=C.shadow.matrix,D++}Z.point[O]=b,O++}else if(C.isHemisphereLight){let b=J.get(C);b.skyColor.copy(C.color).multiplyScalar(S),b.groundColor.copy(C.groundColor).multiplyScalar(S),Z.hemi[R]=b,R++}}if(N>0)if($.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=R0.LTC_FLOAT_1,Z.rectAreaLTC2=R0.LTC_FLOAT_2;else Z.rectAreaLTC1=R0.LTC_HALF_1,Z.rectAreaLTC2=R0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=q;let y=Z.hash;if(y.directionalLength!==F||y.pointLength!==O||y.spotLength!==M||y.rectAreaLength!==N||y.hemiLength!==R||y.numDirectionalShadows!==_||y.numPointShadows!==D||y.numSpotShadows!==k||y.numSpotMaps!==T||y.numLightProbes!==A)Z.directional.length=F,Z.spot.length=M,Z.rectArea.length=N,Z.point.length=O,Z.hemi.length=R,Z.directionalShadow.length=_,Z.directionalShadowMap.length=_,Z.pointShadow.length=D,Z.pointShadowMap.length=D,Z.spotShadow.length=k,Z.spotShadowMap.length=k,Z.directionalShadowMatrix.length=_,Z.pointShadowMatrix.length=D,Z.spotLightMatrix.length=k+T-P,Z.spotLightMap.length=T,Z.numSpotLightShadowsWithMaps=P,Z.numLightProbes=A,y.directionalLength=F,y.pointLength=O,y.spotLength=M,y.rectAreaLength=N,y.hemiLength=R,y.numDirectionalShadows=_,y.numPointShadows=D,y.numSpotShadows=k,y.numSpotMaps=T,y.numLightProbes=A,Z.version=uN++}function Y(U,G){let E=0,q=0,F=0,O=0,M=0,N=G.matrixWorldInverse;for(let R=0,_=U.length;R<_;R++){let D=U[R];if(D.isDirectionalLight){let k=Z.directional[E];k.direction.setFromMatrixPosition(D.matrixWorld),W.setFromMatrixPosition(D.target.matrixWorld),k.direction.sub(W),k.direction.transformDirection(N),E++}else if(D.isSpotLight){let k=Z.spot[F];k.position.setFromMatrixPosition(D.matrixWorld),k.position.applyMatrix4(N),k.direction.setFromMatrixPosition(D.matrixWorld),W.setFromMatrixPosition(D.target.matrixWorld),k.direction.sub(W),k.direction.transformDirection(N),F++}else if(D.isRectAreaLight){let k=Z.rectArea[O];k.position.setFromMatrixPosition(D.matrixWorld),k.position.applyMatrix4(N),X.identity(),K.copy(D.matrixWorld),K.premultiply(N),X.extractRotation(K),k.halfWidth.set(D.width*0.5,0,0),k.halfHeight.set(0,D.height*0.5,0),k.halfWidth.applyMatrix4(X),k.halfHeight.applyMatrix4(X),O++}else if(D.isPointLight){let k=Z.point[q];k.position.setFromMatrixPosition(D.matrixWorld),k.position.applyMatrix4(N),q++}else if(D.isHemisphereLight){let k=Z.hemi[M];k.direction.setFromMatrixPosition(D.matrixWorld),k.direction.transformDirection(N),M++}}}return{setup:H,setupView:Y,state:Z}}function hK($){let J=new dN($),Q=[],Z=[];function W(G){U.camera=G,Q.length=0,Z.length=0}function K(G){Q.push(G)}function X(G){Z.push(G)}function H(){J.setup(Q)}function Y(G){J.setupView(Q,G)}let U={lightsArray:Q,shadowsArray:Z,camera:null,lights:J,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:H,setupLightsView:Y,pushLight:K,pushShadow:X}}function cN($){let J=new WeakMap;function Q(W,K=0){let X=J.get(W),H;if(X===void 0)H=new hK($),J.set(W,[H]);else if(K>=X.length)H=new hK($),X.push(H);else H=X[K];return H}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}var nN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sN=`uniform sampler2D shadow_pass;
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
}`;function oN($,J,Q){let Z=new q9,W=new u0,K=new u0,X=new i0,H=new YZ({depthPacking:oW}),Y=new UZ,U={},G=Q.maxTextureSize,E={[Z6]:a1,[a1]:Z6,[H8]:H8},q=new u1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new u0},radius:{value:4}},vertexShader:nN,fragmentShader:sN}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let O=new x1;O.setAttribute("position",new X1(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new A1(O,q),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=GQ;let R=this.type;this.render=function(P,A,y){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(P.length===0)return;let z=$.getRenderTarget(),L=$.getActiveCubeFace(),C=$.getActiveMipmapLevel(),I=$.state;if(I.setBlending(W6),I.buffers.depth.getReversed()===!0)I.buffers.color.setClear(0,0,0,0);else I.buffers.color.setClear(1,1,1,1);I.buffers.depth.setTest(!0),I.setScissorTest(!1);let S=R!==B8&&this.type===B8,f=R===B8&&this.type!==B8;for(let g=0,b=P.length;g<b;g++){let d=P[g],h=d.shadow;if(h===void 0){console.warn("THREE.WebGLShadowMap:",d,"has no shadow.");continue}if(h.autoUpdate===!1&&h.needsUpdate===!1)continue;W.copy(h.mapSize);let i=h.getFrameExtents();if(W.multiply(i),K.copy(h.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/i.x),W.x=K.x*i.x,h.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/i.y),W.y=K.y*i.y,h.mapSize.y=K.y}if(h.map===null||S===!0||f===!0){let Z0=this.type!==B8?{minFilter:u8,magFilter:u8}:{};if(h.map!==null)h.map.dispose();h.map=new M8(W.x,W.y,Z0),h.map.texture.name=d.name+".shadowMap",h.camera.updateProjectionMatrix()}$.setRenderTarget(h.map),$.clear();let t=h.getViewportCount();for(let Z0=0;Z0<t;Z0++){let E0=h.getViewport(Z0);X.set(K.x*E0.x,K.y*E0.y,K.x*E0.z,K.y*E0.w),I.viewport(X),h.updateMatrices(d,Z0),Z=h.getFrustum(),k(A,y,h.camera,d,this.type)}if(h.isPointLightShadow!==!0&&this.type===B8)_(h,y);h.needsUpdate=!1}R=this.type,N.needsUpdate=!1,$.setRenderTarget(z,L,C)};function _(P,A){let y=J.update(M);if(q.defines.VSM_SAMPLES!==P.blurSamples)q.defines.VSM_SAMPLES=P.blurSamples,F.defines.VSM_SAMPLES=P.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new M8(W.x,W.y);q.uniforms.shadow_pass.value=P.map.texture,q.uniforms.resolution.value=P.mapSize,q.uniforms.radius.value=P.radius,$.setRenderTarget(P.mapPass),$.clear(),$.renderBufferDirect(A,null,y,q,M,null),F.uniforms.shadow_pass.value=P.mapPass.texture,F.uniforms.resolution.value=P.mapSize,F.uniforms.radius.value=P.radius,$.setRenderTarget(P.map),$.clear(),$.renderBufferDirect(A,null,y,F,M,null)}function D(P,A,y,z){let L=null,C=y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)L=C;else if(L=y.isPointLight===!0?Y:H,$.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=L.uuid,S=A.uuid,f=U[I];if(f===void 0)f={},U[I]=f;let g=f[S];if(g===void 0)g=L.clone(),f[S]=g,A.addEventListener("dispose",T);L=g}if(L.visible=A.visible,L.wireframe=A.wireframe,z===B8)L.side=A.shadowSide!==null?A.shadowSide:A.side;else L.side=A.shadowSide!==null?A.shadowSide:E[A.side];if(L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let I=$.properties.get(L);I.light=y}return L}function k(P,A,y,z,L){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&L===B8)&&(!P.frustumCulled||Z.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,P.matrixWorld);let S=J.update(P),f=P.material;if(Array.isArray(f)){let g=S.groups;for(let b=0,d=g.length;b<d;b++){let h=g[b],i=f[h.materialIndex];if(i&&i.visible){let t=D(P,i,z,L);P.onBeforeShadow($,P,A,y,S,t,h),$.renderBufferDirect(y,null,S,t,P,h),P.onAfterShadow($,P,A,y,S,t,h)}}}else if(f.visible){let g=D(P,f,z,L);P.onBeforeShadow($,P,A,y,S,g,null),$.renderBufferDirect(y,null,S,g,P,null),P.onAfterShadow($,P,A,y,S,g,null)}}}let I=P.children;for(let S=0,f=I.length;S<f;S++)k(I[S],A,y,z,L)}function T(P){P.target.removeEventListener("dispose",T);for(let y in U){let z=U[y],L=P.target.uuid;if(L in z)z[L].dispose(),delete z[L]}}}var iN={[F$]:O$,[M$]:_$,[L$]:V$,[J9]:D$,[O$]:F$,[_$]:M$,[V$]:L$,[D$]:J9};function aN($,J){function Q(){let v=!1,q0=new i0,H0=null,L0=new i0(0,0,0,0);return{setMask:function(Q0){if(H0!==Q0&&!v)$.colorMask(Q0,Q0,Q0,Q0),H0=Q0},setLocked:function(Q0){v=Q0},setClear:function(Q0,r,P0,x0,Z1){if(Z1===!0)Q0*=x0,r*=x0,P0*=x0;if(q0.set(Q0,r,P0,x0),L0.equals(q0)===!1)$.clearColor(Q0,r,P0,x0),L0.copy(q0)},reset:function(){v=!1,H0=null,L0.set(-1,0,0,0)}}}function Z(){let v=!1,q0=!1,H0=null,L0=null,Q0=null;return{setReversed:function(r){if(q0!==r){let P0=J.get("EXT_clip_control");if(r)P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.ZERO_TO_ONE_EXT);else P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.NEGATIVE_ONE_TO_ONE_EXT);q0=r;let x0=Q0;Q0=null,this.setClear(x0)}},getReversed:function(){return q0},setTest:function(r){if(r)e($.DEPTH_TEST);else N0($.DEPTH_TEST)},setMask:function(r){if(H0!==r&&!v)$.depthMask(r),H0=r},setFunc:function(r){if(q0)r=iN[r];if(L0!==r){switch(r){case F$:$.depthFunc($.NEVER);break;case O$:$.depthFunc($.ALWAYS);break;case M$:$.depthFunc($.LESS);break;case J9:$.depthFunc($.LEQUAL);break;case L$:$.depthFunc($.EQUAL);break;case D$:$.depthFunc($.GEQUAL);break;case _$:$.depthFunc($.GREATER);break;case V$:$.depthFunc($.NOTEQUAL);break;default:$.depthFunc($.LEQUAL)}L0=r}},setLocked:function(r){v=r},setClear:function(r){if(Q0!==r){if(q0)r=1-r;$.clearDepth(r),Q0=r}},reset:function(){v=!1,H0=null,L0=null,Q0=null,q0=!1}}}function W(){let v=!1,q0=null,H0=null,L0=null,Q0=null,r=null,P0=null,x0=null,Z1=null;return{setTest:function(J1){if(!v)if(J1)e($.STENCIL_TEST);else N0($.STENCIL_TEST)},setMask:function(J1){if(q0!==J1&&!v)$.stencilMask(J1),q0=J1},setFunc:function(J1,_8,V8){if(H0!==J1||L0!==_8||Q0!==V8)$.stencilFunc(J1,_8,V8),H0=J1,L0=_8,Q0=V8},setOp:function(J1,_8,V8){if(r!==J1||P0!==_8||x0!==V8)$.stencilOp(J1,_8,V8),r=J1,P0=_8,x0=V8},setLocked:function(J1){v=J1},setClear:function(J1){if(Z1!==J1)$.clearStencil(J1),Z1=J1},reset:function(){v=!1,q0=null,H0=null,L0=null,Q0=null,r=null,P0=null,x0=null,Z1=null}}}let K=new Q,X=new Z,H=new W,Y=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,F=[],O=null,M=!1,N=null,R=null,_=null,D=null,k=null,T=null,P=null,A=new y0(0,0,0),y=0,z=!1,L=null,C=null,I=null,S=null,f=null,g=$.getParameter($.MAX_COMBINED_TEXTURE_IMAGE_UNITS),b=!1,d=0,h=$.getParameter($.VERSION);if(h.indexOf("WebGL")!==-1)d=parseFloat(/^WebGL (\d)/.exec(h)[1]),b=d>=1;else if(h.indexOf("OpenGL ES")!==-1)d=parseFloat(/^OpenGL ES (\d)/.exec(h)[1]),b=d>=2;let i=null,t={},Z0=$.getParameter($.SCISSOR_BOX),E0=$.getParameter($.VIEWPORT),C0=new i0().fromArray(Z0),_0=new i0().fromArray(E0);function o(v,q0,H0,L0){let Q0=new Uint8Array(4),r=$.createTexture();$.bindTexture(v,r),$.texParameteri(v,$.TEXTURE_MIN_FILTER,$.NEAREST),$.texParameteri(v,$.TEXTURE_MAG_FILTER,$.NEAREST);for(let P0=0;P0<H0;P0++)if(v===$.TEXTURE_3D||v===$.TEXTURE_2D_ARRAY)$.texImage3D(q0,0,$.RGBA,1,1,L0,0,$.RGBA,$.UNSIGNED_BYTE,Q0);else $.texImage2D(q0+P0,0,$.RGBA,1,1,0,$.RGBA,$.UNSIGNED_BYTE,Q0);return r}let W0={};W0[$.TEXTURE_2D]=o($.TEXTURE_2D,$.TEXTURE_2D,1),W0[$.TEXTURE_CUBE_MAP]=o($.TEXTURE_CUBE_MAP,$.TEXTURE_CUBE_MAP_POSITIVE_X,6),W0[$.TEXTURE_2D_ARRAY]=o($.TEXTURE_2D_ARRAY,$.TEXTURE_2D_ARRAY,1,1),W0[$.TEXTURE_3D]=o($.TEXTURE_3D,$.TEXTURE_3D,1,1),K.setClear(0,0,0,1),X.setClear(1),H.setClear(0),e($.DEPTH_TEST),X.setFunc(J9),M0(!1),a0(UQ),e($.CULL_FACE),f0(W6);function e(v){if(G[v]!==!0)$.enable(v),G[v]=!0}function N0(v){if(G[v]!==!1)$.disable(v),G[v]=!1}function T0(v,q0){if(E[v]!==q0){if($.bindFramebuffer(v,q0),E[v]=q0,v===$.DRAW_FRAMEBUFFER)E[$.FRAMEBUFFER]=q0;if(v===$.FRAMEBUFFER)E[$.DRAW_FRAMEBUFFER]=q0;return!0}return!1}function A0(v,q0){let H0=F,L0=!1;if(v){if(H0=q.get(q0),H0===void 0)H0=[],q.set(q0,H0);let Q0=v.textures;if(H0.length!==Q0.length||H0[0]!==$.COLOR_ATTACHMENT0){for(let r=0,P0=Q0.length;r<P0;r++)H0[r]=$.COLOR_ATTACHMENT0+r;H0.length=Q0.length,L0=!0}}else if(H0[0]!==$.BACK)H0[0]=$.BACK,L0=!0;if(L0)$.drawBuffers(H0)}function e0(v){if(O!==v)return $.useProgram(v),O=v,!0;return!1}let j={[q7]:$.FUNC_ADD,[EW]:$.FUNC_SUBTRACT,[qW]:$.FUNC_REVERSE_SUBTRACT};j[NW]=$.MIN,j[RW]=$.MAX;let d0={[FW]:$.ZERO,[OW]:$.ONE,[MW]:$.SRC_COLOR,[DW]:$.SRC_ALPHA,[CW]:$.SRC_ALPHA_SATURATE,[BW]:$.DST_COLOR,[VW]:$.DST_ALPHA,[LW]:$.ONE_MINUS_SRC_COLOR,[_W]:$.ONE_MINUS_SRC_ALPHA,[kW]:$.ONE_MINUS_DST_COLOR,[zW]:$.ONE_MINUS_DST_ALPHA,[IW]:$.CONSTANT_COLOR,[PW]:$.ONE_MINUS_CONSTANT_COLOR,[AW]:$.CONSTANT_ALPHA,[TW]:$.ONE_MINUS_CONSTANT_ALPHA};function f0(v,q0,H0,L0,Q0,r,P0,x0,Z1,J1){if(v===W6){if(M===!0)N0($.BLEND),M=!1;return}if(M===!1)e($.BLEND),M=!0;if(v!==GW){if(v!==N||J1!==z){if(R!==q7||k!==q7)$.blendEquation($.FUNC_ADD),R=q7,k=q7;if(J1)switch(v){case $9:$.blendFuncSeparate($.ONE,$.ONE_MINUS_SRC_ALPHA,$.ONE,$.ONE_MINUS_SRC_ALPHA);break;case EQ:$.blendFunc($.ONE,$.ONE);break;case qQ:$.blendFuncSeparate($.ZERO,$.ONE_MINUS_SRC_COLOR,$.ZERO,$.ONE);break;case NQ:$.blendFuncSeparate($.DST_COLOR,$.ONE_MINUS_SRC_ALPHA,$.ZERO,$.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case $9:$.blendFuncSeparate($.SRC_ALPHA,$.ONE_MINUS_SRC_ALPHA,$.ONE,$.ONE_MINUS_SRC_ALPHA);break;case EQ:$.blendFuncSeparate($.SRC_ALPHA,$.ONE,$.ONE,$.ONE);break;case qQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case NQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}_=null,D=null,T=null,P=null,A.set(0,0,0),y=0,N=v,z=J1}return}if(Q0=Q0||q0,r=r||H0,P0=P0||L0,q0!==R||Q0!==k)$.blendEquationSeparate(j[q0],j[Q0]),R=q0,k=Q0;if(H0!==_||L0!==D||r!==T||P0!==P)$.blendFuncSeparate(d0[H0],d0[L0],d0[r],d0[P0]),_=H0,D=L0,T=r,P=P0;if(x0.equals(A)===!1||Z1!==y)$.blendColor(x0.r,x0.g,x0.b,Z1),A.copy(x0),y=Z1;N=v,z=!1}function I0(v,q0){v.side===H8?N0($.CULL_FACE):e($.CULL_FACE);let H0=v.side===a1;if(q0)H0=!H0;M0(H0),v.blending===$9&&v.transparent===!1?f0(W6):f0(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),X.setFunc(v.depthFunc),X.setTest(v.depthTest),X.setMask(v.depthWrite),K.setMask(v.colorWrite);let L0=v.stencilWrite;if(H.setTest(L0),L0)H.setMask(v.stencilWriteMask),H.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),H.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);F0(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?e($.SAMPLE_ALPHA_TO_COVERAGE):N0($.SAMPLE_ALPHA_TO_COVERAGE)}function M0(v){if(L!==v){if(v)$.frontFace($.CW);else $.frontFace($.CCW);L=v}}function a0(v){if(v!==HW){if(e($.CULL_FACE),v!==C)if(v===UQ)$.cullFace($.BACK);else if(v===YW)$.cullFace($.FRONT);else $.cullFace($.FRONT_AND_BACK)}else N0($.CULL_FACE);C=v}function V0(v){if(v!==I){if(b)$.lineWidth(v);I=v}}function F0(v,q0,H0){if(v){if(e($.POLYGON_OFFSET_FILL),S!==q0||f!==H0)$.polygonOffset(q0,H0),S=q0,f=H0}else N0($.POLYGON_OFFSET_FILL)}function U1(v){if(v)e($.SCISSOR_TEST);else N0($.SCISSOR_TEST)}function q1(v){if(v===void 0)v=$.TEXTURE0+g-1;if(i!==v)$.activeTexture(v),i=v}function l0(v,q0,H0){if(H0===void 0)if(i===null)H0=$.TEXTURE0+g-1;else H0=i;let L0=t[H0];if(L0===void 0)L0={type:void 0,texture:void 0},t[H0]=L0;if(L0.type!==v||L0.texture!==q0){if(i!==H0)$.activeTexture(H0),i=H0;$.bindTexture(v,q0||W0[v]),L0.type=v,L0.texture=q0}}function w(){let v=t[i];if(v!==void 0&&v.type!==void 0)$.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function V(){try{$.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function u(){try{$.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function a(){try{$.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function $0(){try{$.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function s(){try{$.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function D0(){try{$.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function G0(){try{$.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function B0(){try{$.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function S0(){try{$.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function K0(){try{$.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function m(v){if(C0.equals(v)===!1)$.scissor(v.x,v.y,v.z,v.w),C0.copy(v)}function J0(v){if(_0.equals(v)===!1)$.viewport(v.x,v.y,v.z,v.w),_0.copy(v)}function U0(v,q0){let H0=U.get(q0);if(H0===void 0)H0=new WeakMap,U.set(q0,H0);let L0=H0.get(v);if(L0===void 0)L0=$.getUniformBlockIndex(q0,v.name),H0.set(v,L0)}function Y0(v,q0){let L0=U.get(q0).get(v);if(Y.get(q0)!==L0)$.uniformBlockBinding(q0,L0,v.__bindingPointIndex),Y.set(q0,L0)}function b0(){$.disable($.BLEND),$.disable($.CULL_FACE),$.disable($.DEPTH_TEST),$.disable($.POLYGON_OFFSET_FILL),$.disable($.SCISSOR_TEST),$.disable($.STENCIL_TEST),$.disable($.SAMPLE_ALPHA_TO_COVERAGE),$.blendEquation($.FUNC_ADD),$.blendFunc($.ONE,$.ZERO),$.blendFuncSeparate($.ONE,$.ZERO,$.ONE,$.ZERO),$.blendColor(0,0,0,0),$.colorMask(!0,!0,!0,!0),$.clearColor(0,0,0,0),$.depthMask(!0),$.depthFunc($.LESS),X.setReversed(!1),$.clearDepth(1),$.stencilMask(4294967295),$.stencilFunc($.ALWAYS,0,4294967295),$.stencilOp($.KEEP,$.KEEP,$.KEEP),$.clearStencil(0),$.cullFace($.BACK),$.frontFace($.CCW),$.polygonOffset(0,0),$.activeTexture($.TEXTURE0),$.bindFramebuffer($.FRAMEBUFFER,null),$.bindFramebuffer($.DRAW_FRAMEBUFFER,null),$.bindFramebuffer($.READ_FRAMEBUFFER,null),$.useProgram(null),$.lineWidth(1),$.scissor(0,0,$.canvas.width,$.canvas.height),$.viewport(0,0,$.canvas.width,$.canvas.height),G={},i=null,t={},E={},q=new WeakMap,F=[],O=null,M=!1,N=null,R=null,_=null,D=null,k=null,T=null,P=null,A=new y0(0,0,0),y=0,z=!1,L=null,C=null,I=null,S=null,f=null,C0.set(0,0,$.canvas.width,$.canvas.height),_0.set(0,0,$.canvas.width,$.canvas.height),K.reset(),X.reset(),H.reset()}return{buffers:{color:K,depth:X,stencil:H},enable:e,disable:N0,bindFramebuffer:T0,drawBuffers:A0,useProgram:e0,setBlending:f0,setMaterial:I0,setFlipSided:M0,setCullFace:a0,setLineWidth:V0,setPolygonOffset:F0,setScissorTest:U1,activeTexture:q1,bindTexture:l0,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:u,texImage2D:S0,texImage3D:K0,updateUBOMapping:U0,uniformBlockBinding:Y0,texStorage2D:G0,texStorage3D:B0,texSubImage2D:a,texSubImage3D:$0,compressedTexSubImage2D:s,compressedTexSubImage3D:D0,scissor:m,viewport:J0,reset:b0}}function rN($,J,Q,Z,W,K,X){let H=J.has("WEBGL_multisampled_render_to_texture")?J.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new u0,G=new WeakMap,E,q=new WeakMap,F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function O(w,V){return F?new OffscreenCanvas(w,V):G7("canvas")}function M(w,V,u){let a=1,$0=l0(w);if($0.width>u||$0.height>u)a=u/Math.max($0.width,$0.height);if(a<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let s=Math.floor(a*$0.width),D0=Math.floor(a*$0.height);if(E===void 0)E=O(s,D0);let G0=V?O(s,D0):E;return G0.width=s,G0.height=D0,G0.getContext("2d").drawImage(w,0,0,s,D0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$0.width+"x"+$0.height+") to ("+s+"x"+D0+")."),G0}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$0.width+"x"+$0.height+").");return w}return w}function N(w){return w.generateMipmaps}function R(w){$.generateMipmap(w)}function _(w){if(w.isWebGLCubeRenderTarget)return $.TEXTURE_CUBE_MAP;if(w.isWebGL3DRenderTarget)return $.TEXTURE_3D;if(w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture)return $.TEXTURE_2D_ARRAY;return $.TEXTURE_2D}function D(w,V,u,a,$0=!1){if(w!==null){if($[w]!==void 0)return $[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let s=V;if(V===$.RED){if(u===$.FLOAT)s=$.R32F;if(u===$.HALF_FLOAT)s=$.R16F;if(u===$.UNSIGNED_BYTE)s=$.R8}if(V===$.RED_INTEGER){if(u===$.UNSIGNED_BYTE)s=$.R8UI;if(u===$.UNSIGNED_SHORT)s=$.R16UI;if(u===$.UNSIGNED_INT)s=$.R32UI;if(u===$.BYTE)s=$.R8I;if(u===$.SHORT)s=$.R16I;if(u===$.INT)s=$.R32I}if(V===$.RG){if(u===$.FLOAT)s=$.RG32F;if(u===$.HALF_FLOAT)s=$.RG16F;if(u===$.UNSIGNED_BYTE)s=$.RG8}if(V===$.RG_INTEGER){if(u===$.UNSIGNED_BYTE)s=$.RG8UI;if(u===$.UNSIGNED_SHORT)s=$.RG16UI;if(u===$.UNSIGNED_INT)s=$.RG32UI;if(u===$.BYTE)s=$.RG8I;if(u===$.SHORT)s=$.RG16I;if(u===$.INT)s=$.RG32I}if(V===$.RGB_INTEGER){if(u===$.UNSIGNED_BYTE)s=$.RGB8UI;if(u===$.UNSIGNED_SHORT)s=$.RGB16UI;if(u===$.UNSIGNED_INT)s=$.RGB32UI;if(u===$.BYTE)s=$.RGB8I;if(u===$.SHORT)s=$.RGB16I;if(u===$.INT)s=$.RGB32I}if(V===$.RGBA_INTEGER){if(u===$.UNSIGNED_BYTE)s=$.RGBA8UI;if(u===$.UNSIGNED_SHORT)s=$.RGBA16UI;if(u===$.UNSIGNED_INT)s=$.RGBA32UI;if(u===$.BYTE)s=$.RGBA8I;if(u===$.SHORT)s=$.RGBA16I;if(u===$.INT)s=$.RGBA32I}if(V===$.RGB){if(u===$.UNSIGNED_INT_5_9_9_9_REV)s=$.RGB9_E5;if(u===$.UNSIGNED_INT_10F_11F_11F_REV)s=$.R11F_G11F_B10F}if(V===$.RGBA){let D0=$0?aQ:o0.getTransfer(a);if(u===$.FLOAT)s=$.RGBA32F;if(u===$.HALF_FLOAT)s=$.RGBA16F;if(u===$.UNSIGNED_BYTE)s=D0===H1?$.SRGB8_ALPHA8:$.RGBA8;if(u===$.UNSIGNED_SHORT_4_4_4_4)s=$.RGBA4;if(u===$.UNSIGNED_SHORT_5_5_5_1)s=$.RGB5_A1}if(s===$.R16F||s===$.R32F||s===$.RG16F||s===$.RG32F||s===$.RGBA16F||s===$.RGBA32F)J.get("EXT_color_buffer_float");return s}function k(w,V){let u;if(w){if(V===null||V===O7||V===M7)u=$.DEPTH24_STENCIL8;else if(V===X6)u=$.DEPTH32F_STENCIL8;else if(V===Z9)u=$.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(V===null||V===O7||V===M7)u=$.DEPTH_COMPONENT24;else if(V===X6)u=$.DEPTH_COMPONENT32F;else if(V===Z9)u=$.DEPTH_COMPONENT16;return u}function T(w,V){if(N(w)===!0||w.isFramebufferTexture&&w.minFilter!==u8&&w.minFilter!==p1)return Math.log2(Math.max(V.width,V.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return V.mipmaps.length;else return 1}function P(w){let V=w.target;if(V.removeEventListener("dispose",P),y(V),V.isVideoTexture)G.delete(V)}function A(w){let V=w.target;V.removeEventListener("dispose",A),L(V)}function y(w){let V=Z.get(w);if(V.__webglInit===void 0)return;let u=w.source,a=q.get(u);if(a){let $0=a[V.__cacheKey];if($0.usedTimes--,$0.usedTimes===0)z(w);if(Object.keys(a).length===0)q.delete(u)}Z.remove(w)}function z(w){let V=Z.get(w);$.deleteTexture(V.__webglTexture);let u=w.source,a=q.get(u);delete a[V.__cacheKey],X.memory.textures--}function L(w){let V=Z.get(w);if(w.depthTexture)w.depthTexture.dispose(),Z.remove(w.depthTexture);if(w.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(V.__webglFramebuffer[a]))for(let $0=0;$0<V.__webglFramebuffer[a].length;$0++)$.deleteFramebuffer(V.__webglFramebuffer[a][$0]);else $.deleteFramebuffer(V.__webglFramebuffer[a]);if(V.__webglDepthbuffer)$.deleteRenderbuffer(V.__webglDepthbuffer[a])}else{if(Array.isArray(V.__webglFramebuffer))for(let a=0;a<V.__webglFramebuffer.length;a++)$.deleteFramebuffer(V.__webglFramebuffer[a]);else $.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer)$.deleteRenderbuffer(V.__webglDepthbuffer);if(V.__webglMultisampledFramebuffer)$.deleteFramebuffer(V.__webglMultisampledFramebuffer);if(V.__webglColorRenderbuffer){for(let a=0;a<V.__webglColorRenderbuffer.length;a++)if(V.__webglColorRenderbuffer[a])$.deleteRenderbuffer(V.__webglColorRenderbuffer[a])}if(V.__webglDepthRenderbuffer)$.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let u=w.textures;for(let a=0,$0=u.length;a<$0;a++){let s=Z.get(u[a]);if(s.__webglTexture)$.deleteTexture(s.__webglTexture),X.memory.textures--;Z.remove(u[a])}Z.remove(w)}let C=0;function I(){C=0}function S(){let w=C;if(w>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+W.maxTextures);return C+=1,w}function f(w){let V=[];return V.push(w.wrapS),V.push(w.wrapT),V.push(w.wrapR||0),V.push(w.magFilter),V.push(w.minFilter),V.push(w.anisotropy),V.push(w.internalFormat),V.push(w.format),V.push(w.type),V.push(w.generateMipmaps),V.push(w.premultiplyAlpha),V.push(w.flipY),V.push(w.unpackAlignment),V.push(w.colorSpace),V.join()}function g(w,V){let u=Z.get(w);if(w.isVideoTexture)U1(w);if(w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&u.__version!==w.version){let a=w.image;if(a===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(a.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W0(u,w,V);return}}else if(w.isExternalTexture)u.__webglTexture=w.sourceTexture?w.sourceTexture:null;Q.bindTexture($.TEXTURE_2D,u.__webglTexture,$.TEXTURE0+V)}function b(w,V){let u=Z.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&u.__version!==w.version){W0(u,w,V);return}Q.bindTexture($.TEXTURE_2D_ARRAY,u.__webglTexture,$.TEXTURE0+V)}function d(w,V){let u=Z.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&u.__version!==w.version){W0(u,w,V);return}Q.bindTexture($.TEXTURE_3D,u.__webglTexture,$.TEXTURE0+V)}function h(w,V){let u=Z.get(w);if(w.version>0&&u.__version!==w.version){e(u,w,V);return}Q.bindTexture($.TEXTURE_CUBE_MAP,u.__webglTexture,$.TEXTURE0+V)}let i={[R7]:$.REPEAT,[k$]:$.CLAMP_TO_EDGE,[C$]:$.MIRRORED_REPEAT},t={[u8]:$.NEAREST,[I$]:$.NEAREST_MIPMAP_NEAREST,[S6]:$.NEAREST_MIPMAP_LINEAR,[p1]:$.LINEAR,[F7]:$.LINEAR_MIPMAP_NEAREST,[m8]:$.LINEAR_MIPMAP_LINEAR},Z0={[rW]:$.NEVER,[ZK]:$.ALWAYS,[tW]:$.LESS,[rQ]:$.LEQUAL,[eW]:$.EQUAL,[QK]:$.GEQUAL,[$K]:$.GREATER,[JK]:$.NOTEQUAL};function E0(w,V){if(V.type===X6&&J.has("OES_texture_float_linear")===!1&&(V.magFilter===p1||V.magFilter===F7||V.magFilter===S6||V.magFilter===m8||V.minFilter===p1||V.minFilter===F7||V.minFilter===S6||V.minFilter===m8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if($.texParameteri(w,$.TEXTURE_WRAP_S,i[V.wrapS]),$.texParameteri(w,$.TEXTURE_WRAP_T,i[V.wrapT]),w===$.TEXTURE_3D||w===$.TEXTURE_2D_ARRAY)$.texParameteri(w,$.TEXTURE_WRAP_R,i[V.wrapR]);if($.texParameteri(w,$.TEXTURE_MAG_FILTER,t[V.magFilter]),$.texParameteri(w,$.TEXTURE_MIN_FILTER,t[V.minFilter]),V.compareFunction)$.texParameteri(w,$.TEXTURE_COMPARE_MODE,$.COMPARE_REF_TO_TEXTURE),$.texParameteri(w,$.TEXTURE_COMPARE_FUNC,Z0[V.compareFunction]);if(J.has("EXT_texture_filter_anisotropic")===!0){if(V.magFilter===u8)return;if(V.minFilter!==S6&&V.minFilter!==m8)return;if(V.type===X6&&J.has("OES_texture_float_linear")===!1)return;if(V.anisotropy>1||Z.get(V).__currentAnisotropy){let u=J.get("EXT_texture_filter_anisotropic");$.texParameterf(w,u.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,W.getMaxAnisotropy())),Z.get(V).__currentAnisotropy=V.anisotropy}}}function C0(w,V){let u=!1;if(w.__webglInit===void 0)w.__webglInit=!0,V.addEventListener("dispose",P);let a=V.source,$0=q.get(a);if($0===void 0)$0={},q.set(a,$0);let s=f(V);if(s!==w.__cacheKey){if($0[s]===void 0)$0[s]={texture:$.createTexture(),usedTimes:0},X.memory.textures++,u=!0;$0[s].usedTimes++;let D0=$0[w.__cacheKey];if(D0!==void 0){if($0[w.__cacheKey].usedTimes--,D0.usedTimes===0)z(V)}w.__cacheKey=s,w.__webglTexture=$0[s].texture}return u}function _0(w,V,u){return Math.floor(Math.floor(w/u)/V)}function o(w,V,u,a){let s=w.updateRanges;if(s.length===0)Q.texSubImage2D($.TEXTURE_2D,0,0,0,V.width,V.height,u,a,V.data);else{s.sort((K0,m)=>K0.start-m.start);let D0=0;for(let K0=1;K0<s.length;K0++){let m=s[D0],J0=s[K0],U0=m.start+m.count,Y0=_0(J0.start,V.width,4),b0=_0(m.start,V.width,4);if(J0.start<=U0+1&&Y0===b0&&_0(J0.start+J0.count-1,V.width,4)===Y0)m.count=Math.max(m.count,J0.start+J0.count-m.start);else++D0,s[D0]=J0}s.length=D0+1;let G0=$.getParameter($.UNPACK_ROW_LENGTH),B0=$.getParameter($.UNPACK_SKIP_PIXELS),S0=$.getParameter($.UNPACK_SKIP_ROWS);$.pixelStorei($.UNPACK_ROW_LENGTH,V.width);for(let K0=0,m=s.length;K0<m;K0++){let J0=s[K0],U0=Math.floor(J0.start/4),Y0=Math.ceil(J0.count/4),b0=U0%V.width,v=Math.floor(U0/V.width),q0=Y0,H0=1;$.pixelStorei($.UNPACK_SKIP_PIXELS,b0),$.pixelStorei($.UNPACK_SKIP_ROWS,v),Q.texSubImage2D($.TEXTURE_2D,0,b0,v,q0,1,u,a,V.data)}w.clearUpdateRanges(),$.pixelStorei($.UNPACK_ROW_LENGTH,G0),$.pixelStorei($.UNPACK_SKIP_PIXELS,B0),$.pixelStorei($.UNPACK_SKIP_ROWS,S0)}}function W0(w,V,u){let a=$.TEXTURE_2D;if(V.isDataArrayTexture||V.isCompressedArrayTexture)a=$.TEXTURE_2D_ARRAY;if(V.isData3DTexture)a=$.TEXTURE_3D;let $0=C0(w,V),s=V.source;Q.bindTexture(a,w.__webglTexture,$.TEXTURE0+u);let D0=Z.get(s);if(s.version!==D0.__version||$0===!0){Q.activeTexture($.TEXTURE0+u);let G0=o0.getPrimaries(o0.workingColorSpace),B0=V.colorSpace===j6?null:o0.getPrimaries(V.colorSpace),S0=V.colorSpace===j6||G0===B0?$.NONE:$.BROWSER_DEFAULT_WEBGL;$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,V.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,V.unpackAlignment),$.pixelStorei($.UNPACK_COLORSPACE_CONVERSION_WEBGL,S0);let K0=M(V.image,!1,W.maxTextureSize);K0=q1(V,K0);let m=K.convert(V.format,V.colorSpace),J0=K.convert(V.type),U0=D(V.internalFormat,m,J0,V.colorSpace,V.isVideoTexture);E0(a,V);let Y0,b0=V.mipmaps,v=V.isVideoTexture!==!0,q0=D0.__version===void 0||$0===!0,H0=s.dataReady,L0=T(V,K0);if(V.isDepthTexture){if(U0=k(V.format===K9,V.type),q0)if(v)Q.texStorage2D($.TEXTURE_2D,1,U0,K0.width,K0.height);else Q.texImage2D($.TEXTURE_2D,0,U0,K0.width,K0.height,0,m,J0,null)}else if(V.isDataTexture)if(b0.length>0){if(v&&q0)Q.texStorage2D($.TEXTURE_2D,L0,U0,b0[0].width,b0[0].height);for(let Q0=0,r=b0.length;Q0<r;Q0++)if(Y0=b0[Q0],v){if(H0)Q.texSubImage2D($.TEXTURE_2D,Q0,0,0,Y0.width,Y0.height,m,J0,Y0.data)}else Q.texImage2D($.TEXTURE_2D,Q0,U0,Y0.width,Y0.height,0,m,J0,Y0.data);V.generateMipmaps=!1}else if(v){if(q0)Q.texStorage2D($.TEXTURE_2D,L0,U0,K0.width,K0.height);if(H0)o(V,K0,m,J0)}else Q.texImage2D($.TEXTURE_2D,0,U0,K0.width,K0.height,0,m,J0,K0.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){if(v&&q0)Q.texStorage3D($.TEXTURE_2D_ARRAY,L0,U0,b0[0].width,b0[0].height,K0.depth);for(let Q0=0,r=b0.length;Q0<r;Q0++)if(Y0=b0[Q0],V.format!==k8)if(m!==null)if(v){if(H0)if(V.layerUpdates.size>0){let P0=DZ(Y0.width,Y0.height,V.format,V.type);for(let x0 of V.layerUpdates){let Z1=Y0.data.subarray(x0*P0/Y0.data.BYTES_PER_ELEMENT,(x0+1)*P0/Y0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D($.TEXTURE_2D_ARRAY,Q0,0,0,x0,Y0.width,Y0.height,1,m,Z1)}V.clearLayerUpdates()}else Q.compressedTexSubImage3D($.TEXTURE_2D_ARRAY,Q0,0,0,0,Y0.width,Y0.height,K0.depth,m,Y0.data)}else Q.compressedTexImage3D($.TEXTURE_2D_ARRAY,Q0,U0,Y0.width,Y0.height,K0.depth,0,Y0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v){if(H0)Q.texSubImage3D($.TEXTURE_2D_ARRAY,Q0,0,0,0,Y0.width,Y0.height,K0.depth,m,J0,Y0.data)}else Q.texImage3D($.TEXTURE_2D_ARRAY,Q0,U0,Y0.width,Y0.height,K0.depth,0,m,J0,Y0.data)}else{if(v&&q0)Q.texStorage2D($.TEXTURE_2D,L0,U0,b0[0].width,b0[0].height);for(let Q0=0,r=b0.length;Q0<r;Q0++)if(Y0=b0[Q0],V.format!==k8)if(m!==null)if(v){if(H0)Q.compressedTexSubImage2D($.TEXTURE_2D,Q0,0,0,Y0.width,Y0.height,m,Y0.data)}else Q.compressedTexImage2D($.TEXTURE_2D,Q0,U0,Y0.width,Y0.height,0,Y0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v){if(H0)Q.texSubImage2D($.TEXTURE_2D,Q0,0,0,Y0.width,Y0.height,m,J0,Y0.data)}else Q.texImage2D($.TEXTURE_2D,Q0,U0,Y0.width,Y0.height,0,m,J0,Y0.data)}else if(V.isDataArrayTexture)if(v){if(q0)Q.texStorage3D($.TEXTURE_2D_ARRAY,L0,U0,K0.width,K0.height,K0.depth);if(H0)if(V.layerUpdates.size>0){let Q0=DZ(K0.width,K0.height,V.format,V.type);for(let r of V.layerUpdates){let P0=K0.data.subarray(r*Q0/K0.data.BYTES_PER_ELEMENT,(r+1)*Q0/K0.data.BYTES_PER_ELEMENT);Q.texSubImage3D($.TEXTURE_2D_ARRAY,0,0,0,r,K0.width,K0.height,1,m,J0,P0)}V.clearLayerUpdates()}else Q.texSubImage3D($.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,m,J0,K0.data)}else Q.texImage3D($.TEXTURE_2D_ARRAY,0,U0,K0.width,K0.height,K0.depth,0,m,J0,K0.data);else if(V.isData3DTexture)if(v){if(q0)Q.texStorage3D($.TEXTURE_3D,L0,U0,K0.width,K0.height,K0.depth);if(H0)Q.texSubImage3D($.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,m,J0,K0.data)}else Q.texImage3D($.TEXTURE_3D,0,U0,K0.width,K0.height,K0.depth,0,m,J0,K0.data);else if(V.isFramebufferTexture){if(q0)if(v)Q.texStorage2D($.TEXTURE_2D,L0,U0,K0.width,K0.height);else{let{width:Q0,height:r}=K0;for(let P0=0;P0<L0;P0++)Q.texImage2D($.TEXTURE_2D,P0,U0,Q0,r,0,m,J0,null),Q0>>=1,r>>=1}}else if(b0.length>0){if(v&&q0){let Q0=l0(b0[0]);Q.texStorage2D($.TEXTURE_2D,L0,U0,Q0.width,Q0.height)}for(let Q0=0,r=b0.length;Q0<r;Q0++)if(Y0=b0[Q0],v){if(H0)Q.texSubImage2D($.TEXTURE_2D,Q0,0,0,m,J0,Y0)}else Q.texImage2D($.TEXTURE_2D,Q0,U0,m,J0,Y0);V.generateMipmaps=!1}else if(v){if(q0){let Q0=l0(K0);Q.texStorage2D($.TEXTURE_2D,L0,U0,Q0.width,Q0.height)}if(H0)Q.texSubImage2D($.TEXTURE_2D,0,0,0,m,J0,K0)}else Q.texImage2D($.TEXTURE_2D,0,U0,m,J0,K0);if(N(V))R(a);if(D0.__version=s.version,V.onUpdate)V.onUpdate(V)}w.__version=V.version}function e(w,V,u){if(V.image.length!==6)return;let a=C0(w,V),$0=V.source;Q.bindTexture($.TEXTURE_CUBE_MAP,w.__webglTexture,$.TEXTURE0+u);let s=Z.get($0);if($0.version!==s.__version||a===!0){Q.activeTexture($.TEXTURE0+u);let D0=o0.getPrimaries(o0.workingColorSpace),G0=V.colorSpace===j6?null:o0.getPrimaries(V.colorSpace),B0=V.colorSpace===j6||D0===G0?$.NONE:$.BROWSER_DEFAULT_WEBGL;$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,V.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,V.unpackAlignment),$.pixelStorei($.UNPACK_COLORSPACE_CONVERSION_WEBGL,B0);let S0=V.isCompressedTexture||V.image[0].isCompressedTexture,K0=V.image[0]&&V.image[0].isDataTexture,m=[];for(let r=0;r<6;r++){if(!S0&&!K0)m[r]=M(V.image[r],!0,W.maxCubemapSize);else m[r]=K0?V.image[r].image:V.image[r];m[r]=q1(V,m[r])}let J0=m[0],U0=K.convert(V.format,V.colorSpace),Y0=K.convert(V.type),b0=D(V.internalFormat,U0,Y0,V.colorSpace),v=V.isVideoTexture!==!0,q0=s.__version===void 0||a===!0,H0=$0.dataReady,L0=T(V,J0);E0($.TEXTURE_CUBE_MAP,V);let Q0;if(S0){if(v&&q0)Q.texStorage2D($.TEXTURE_CUBE_MAP,L0,b0,J0.width,J0.height);for(let r=0;r<6;r++){Q0=m[r].mipmaps;for(let P0=0;P0<Q0.length;P0++){let x0=Q0[P0];if(V.format!==k8)if(U0!==null)if(v){if(H0)Q.compressedTexSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0,0,0,x0.width,x0.height,U0,x0.data)}else Q.compressedTexImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0,b0,x0.width,x0.height,0,x0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(H0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0,0,0,x0.width,x0.height,U0,Y0,x0.data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0,b0,x0.width,x0.height,0,U0,Y0,x0.data)}}}else{if(Q0=V.mipmaps,v&&q0){if(Q0.length>0)L0++;let r=l0(m[0]);Q.texStorage2D($.TEXTURE_CUBE_MAP,L0,b0,r.width,r.height)}for(let r=0;r<6;r++)if(K0){if(v){if(H0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,m[r].width,m[r].height,U0,Y0,m[r].data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,b0,m[r].width,m[r].height,0,U0,Y0,m[r].data);for(let P0=0;P0<Q0.length;P0++){let Z1=Q0[P0].image[r].image;if(v){if(H0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0+1,0,0,Z1.width,Z1.height,U0,Y0,Z1.data)}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0+1,b0,Z1.width,Z1.height,0,U0,Y0,Z1.data)}}else{if(v){if(H0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,U0,Y0,m[r])}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,b0,U0,Y0,m[r]);for(let P0=0;P0<Q0.length;P0++){let x0=Q0[P0];if(v){if(H0)Q.texSubImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0+1,0,0,U0,Y0,x0.image[r])}else Q.texImage2D($.TEXTURE_CUBE_MAP_POSITIVE_X+r,P0+1,b0,U0,Y0,x0.image[r])}}}if(N(V))R($.TEXTURE_CUBE_MAP);if(s.__version=$0.version,V.onUpdate)V.onUpdate(V)}w.__version=V.version}function N0(w,V,u,a,$0,s){let D0=K.convert(u.format,u.colorSpace),G0=K.convert(u.type),B0=D(u.internalFormat,D0,G0,u.colorSpace),S0=Z.get(V),K0=Z.get(u);if(K0.__renderTarget=V,!S0.__hasExternalTextures){let m=Math.max(1,V.width>>s),J0=Math.max(1,V.height>>s);if($0===$.TEXTURE_3D||$0===$.TEXTURE_2D_ARRAY)Q.texImage3D($0,s,B0,m,J0,V.depth,0,D0,G0,null);else Q.texImage2D($0,s,B0,m,J0,0,D0,G0,null)}if(Q.bindFramebuffer($.FRAMEBUFFER,w),F0(V))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,a,$0,K0.__webglTexture,0,V0(V));else if($0===$.TEXTURE_2D||$0>=$.TEXTURE_CUBE_MAP_POSITIVE_X&&$0<=$.TEXTURE_CUBE_MAP_NEGATIVE_Z)$.framebufferTexture2D($.FRAMEBUFFER,a,$0,K0.__webglTexture,s);Q.bindFramebuffer($.FRAMEBUFFER,null)}function T0(w,V,u){if($.bindRenderbuffer($.RENDERBUFFER,w),V.depthBuffer){let a=V.depthTexture,$0=a&&a.isDepthTexture?a.type:null,s=k(V.stencilBuffer,$0),D0=V.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,G0=V0(V);if(F0(V))H.renderbufferStorageMultisampleEXT($.RENDERBUFFER,G0,s,V.width,V.height);else if(u)$.renderbufferStorageMultisample($.RENDERBUFFER,G0,s,V.width,V.height);else $.renderbufferStorage($.RENDERBUFFER,s,V.width,V.height);$.framebufferRenderbuffer($.FRAMEBUFFER,D0,$.RENDERBUFFER,w)}else{let a=V.textures;for(let $0=0;$0<a.length;$0++){let s=a[$0],D0=K.convert(s.format,s.colorSpace),G0=K.convert(s.type),B0=D(s.internalFormat,D0,G0,s.colorSpace),S0=V0(V);if(u&&F0(V)===!1)$.renderbufferStorageMultisample($.RENDERBUFFER,S0,B0,V.width,V.height);else if(F0(V))H.renderbufferStorageMultisampleEXT($.RENDERBUFFER,S0,B0,V.width,V.height);else $.renderbufferStorage($.RENDERBUFFER,B0,V.width,V.height)}}$.bindRenderbuffer($.RENDERBUFFER,null)}function A0(w,V){if(V&&V.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer($.FRAMEBUFFER,w),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let a=Z.get(V.depthTexture);if(a.__renderTarget=V,!a.__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0;g(V.depthTexture,0);let $0=a.__webglTexture,s=V0(V);if(V.depthTexture.format===P$)if(F0(V))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,$0,0,s);else $.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,$0,0);else if(V.depthTexture.format===K9)if(F0(V))H.framebufferTexture2DMultisampleEXT($.FRAMEBUFFER,$.DEPTH_STENCIL_ATTACHMENT,$.TEXTURE_2D,$0,0,s);else $.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_STENCIL_ATTACHMENT,$.TEXTURE_2D,$0,0);else throw Error("Unknown depthTexture format")}function e0(w){let V=Z.get(w),u=w.isWebGLCubeRenderTarget===!0;if(V.__boundDepthTexture!==w.depthTexture){let a=w.depthTexture;if(V.__depthDisposeCallback)V.__depthDisposeCallback();if(a){let $0=()=>{delete V.__boundDepthTexture,delete V.__depthDisposeCallback,a.removeEventListener("dispose",$0)};a.addEventListener("dispose",$0),V.__depthDisposeCallback=$0}V.__boundDepthTexture=a}if(w.depthTexture&&!V.__autoAllocateDepthBuffer){if(u)throw Error("target.depthTexture not supported in Cube render targets");let a=w.texture.mipmaps;if(a&&a.length>0)A0(V.__webglFramebuffer[0],w);else A0(V.__webglFramebuffer,w)}else if(u){V.__webglDepthbuffer=[];for(let a=0;a<6;a++)if(Q.bindFramebuffer($.FRAMEBUFFER,V.__webglFramebuffer[a]),V.__webglDepthbuffer[a]===void 0)V.__webglDepthbuffer[a]=$.createRenderbuffer(),T0(V.__webglDepthbuffer[a],w,!1);else{let $0=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,s=V.__webglDepthbuffer[a];$.bindRenderbuffer($.RENDERBUFFER,s),$.framebufferRenderbuffer($.FRAMEBUFFER,$0,$.RENDERBUFFER,s)}}else{let a=w.texture.mipmaps;if(a&&a.length>0)Q.bindFramebuffer($.FRAMEBUFFER,V.__webglFramebuffer[0]);else Q.bindFramebuffer($.FRAMEBUFFER,V.__webglFramebuffer);if(V.__webglDepthbuffer===void 0)V.__webglDepthbuffer=$.createRenderbuffer(),T0(V.__webglDepthbuffer,w,!1);else{let $0=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,s=V.__webglDepthbuffer;$.bindRenderbuffer($.RENDERBUFFER,s),$.framebufferRenderbuffer($.FRAMEBUFFER,$0,$.RENDERBUFFER,s)}}Q.bindFramebuffer($.FRAMEBUFFER,null)}function j(w,V,u){let a=Z.get(w);if(V!==void 0)N0(a.__webglFramebuffer,w,w.texture,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,0);if(u!==void 0)e0(w)}function d0(w){let V=w.texture,u=Z.get(w),a=Z.get(V);w.addEventListener("dispose",A);let $0=w.textures,s=w.isWebGLCubeRenderTarget===!0,D0=$0.length>1;if(!D0){if(a.__webglTexture===void 0)a.__webglTexture=$.createTexture();a.__version=V.version,X.memory.textures++}if(s){u.__webglFramebuffer=[];for(let G0=0;G0<6;G0++)if(V.mipmaps&&V.mipmaps.length>0){u.__webglFramebuffer[G0]=[];for(let B0=0;B0<V.mipmaps.length;B0++)u.__webglFramebuffer[G0][B0]=$.createFramebuffer()}else u.__webglFramebuffer[G0]=$.createFramebuffer()}else{if(V.mipmaps&&V.mipmaps.length>0){u.__webglFramebuffer=[];for(let G0=0;G0<V.mipmaps.length;G0++)u.__webglFramebuffer[G0]=$.createFramebuffer()}else u.__webglFramebuffer=$.createFramebuffer();if(D0)for(let G0=0,B0=$0.length;G0<B0;G0++){let S0=Z.get($0[G0]);if(S0.__webglTexture===void 0)S0.__webglTexture=$.createTexture(),X.memory.textures++}if(w.samples>0&&F0(w)===!1){u.__webglMultisampledFramebuffer=$.createFramebuffer(),u.__webglColorRenderbuffer=[],Q.bindFramebuffer($.FRAMEBUFFER,u.__webglMultisampledFramebuffer);for(let G0=0;G0<$0.length;G0++){let B0=$0[G0];u.__webglColorRenderbuffer[G0]=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,u.__webglColorRenderbuffer[G0]);let S0=K.convert(B0.format,B0.colorSpace),K0=K.convert(B0.type),m=D(B0.internalFormat,S0,K0,B0.colorSpace,w.isXRRenderTarget===!0),J0=V0(w);$.renderbufferStorageMultisample($.RENDERBUFFER,J0,m,w.width,w.height),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+G0,$.RENDERBUFFER,u.__webglColorRenderbuffer[G0])}if($.bindRenderbuffer($.RENDERBUFFER,null),w.depthBuffer)u.__webglDepthRenderbuffer=$.createRenderbuffer(),T0(u.__webglDepthRenderbuffer,w,!0);Q.bindFramebuffer($.FRAMEBUFFER,null)}}if(s){Q.bindTexture($.TEXTURE_CUBE_MAP,a.__webglTexture),E0($.TEXTURE_CUBE_MAP,V);for(let G0=0;G0<6;G0++)if(V.mipmaps&&V.mipmaps.length>0)for(let B0=0;B0<V.mipmaps.length;B0++)N0(u.__webglFramebuffer[G0][B0],w,V,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+G0,B0);else N0(u.__webglFramebuffer[G0],w,V,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+G0,0);if(N(V))R($.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(D0){for(let G0=0,B0=$0.length;G0<B0;G0++){let S0=$0[G0],K0=Z.get(S0),m=$.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)m=w.isWebGL3DRenderTarget?$.TEXTURE_3D:$.TEXTURE_2D_ARRAY;if(Q.bindTexture(m,K0.__webglTexture),E0(m,S0),N0(u.__webglFramebuffer,w,S0,$.COLOR_ATTACHMENT0+G0,m,0),N(S0))R(m)}Q.unbindTexture()}else{let G0=$.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)G0=w.isWebGL3DRenderTarget?$.TEXTURE_3D:$.TEXTURE_2D_ARRAY;if(Q.bindTexture(G0,a.__webglTexture),E0(G0,V),V.mipmaps&&V.mipmaps.length>0)for(let B0=0;B0<V.mipmaps.length;B0++)N0(u.__webglFramebuffer[B0],w,V,$.COLOR_ATTACHMENT0,G0,B0);else N0(u.__webglFramebuffer,w,V,$.COLOR_ATTACHMENT0,G0,0);if(N(V))R(G0);Q.unbindTexture()}if(w.depthBuffer)e0(w)}function f0(w){let V=w.textures;for(let u=0,a=V.length;u<a;u++){let $0=V[u];if(N($0)){let s=_(w),D0=Z.get($0).__webglTexture;Q.bindTexture(s,D0),R(s),Q.unbindTexture()}}}let I0=[],M0=[];function a0(w){if(w.samples>0){if(F0(w)===!1){let{textures:V,width:u,height:a}=w,$0=$.COLOR_BUFFER_BIT,s=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT,D0=Z.get(w),G0=V.length>1;if(G0)for(let S0=0;S0<V.length;S0++)Q.bindFramebuffer($.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.RENDERBUFFER,null),Q.bindFramebuffer($.FRAMEBUFFER,D0.__webglFramebuffer),$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.TEXTURE_2D,null,0);Q.bindFramebuffer($.READ_FRAMEBUFFER,D0.__webglMultisampledFramebuffer);let B0=w.texture.mipmaps;if(B0&&B0.length>0)Q.bindFramebuffer($.DRAW_FRAMEBUFFER,D0.__webglFramebuffer[0]);else Q.bindFramebuffer($.DRAW_FRAMEBUFFER,D0.__webglFramebuffer);for(let S0=0;S0<V.length;S0++){if(w.resolveDepthBuffer){if(w.depthBuffer)$0|=$.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)$0|=$.STENCIL_BUFFER_BIT}if(G0){$.framebufferRenderbuffer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.RENDERBUFFER,D0.__webglColorRenderbuffer[S0]);let K0=Z.get(V[S0]).__webglTexture;$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,K0,0)}if($.blitFramebuffer(0,0,u,a,0,0,u,a,$0,$.NEAREST),Y===!0){if(I0.length=0,M0.length=0,I0.push($.COLOR_ATTACHMENT0+S0),w.depthBuffer&&w.resolveDepthBuffer===!1)I0.push(s),M0.push(s),$.invalidateFramebuffer($.DRAW_FRAMEBUFFER,M0);$.invalidateFramebuffer($.READ_FRAMEBUFFER,I0)}}if(Q.bindFramebuffer($.READ_FRAMEBUFFER,null),Q.bindFramebuffer($.DRAW_FRAMEBUFFER,null),G0)for(let S0=0;S0<V.length;S0++){Q.bindFramebuffer($.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.RENDERBUFFER,D0.__webglColorRenderbuffer[S0]);let K0=Z.get(V[S0]).__webglTexture;Q.bindFramebuffer($.FRAMEBUFFER,D0.__webglFramebuffer),$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0+S0,$.TEXTURE_2D,K0,0)}Q.bindFramebuffer($.DRAW_FRAMEBUFFER,D0.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&Y){let V=w.stencilBuffer?$.DEPTH_STENCIL_ATTACHMENT:$.DEPTH_ATTACHMENT;$.invalidateFramebuffer($.DRAW_FRAMEBUFFER,[V])}}}function V0(w){return Math.min(W.maxSamples,w.samples)}function F0(w){let V=Z.get(w);return w.samples>0&&J.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function U1(w){let V=X.render.frame;if(G.get(w)!==V)G.set(w,V),w.update()}function q1(w,V){let{colorSpace:u,format:a,type:$0}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return V;if(u!==h1&&u!==j6)if(o0.getTransfer(u)===H1){if(a!==k8||$0!==K6)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",u);return V}function l0(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)U.width=w.naturalWidth||w.width,U.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)U.width=w.displayWidth,U.height=w.displayHeight;else U.width=w.width,U.height=w.height;return U}this.allocateTextureUnit=S,this.resetTextureUnits=I,this.setTexture2D=g,this.setTexture2DArray=b,this.setTexture3D=d,this.setTextureCube=h,this.rebindTextures=j,this.setupRenderTarget=d0,this.updateRenderTargetMipmap=f0,this.updateMultisampleRenderTarget=a0,this.setupDepthRenderbuffer=e0,this.setupFrameBufferTexture=N0,this.useMultisampledRTT=F0}function tN($,J){function Q(Z,W=j6){let K,X=o0.getTransfer(W);if(Z===K6)return $.UNSIGNED_BYTE;if(Z===FQ)return $.UNSIGNED_SHORT_4_4_4_4;if(Z===OQ)return $.UNSIGNED_SHORT_5_5_5_1;if(Z===uW)return $.UNSIGNED_INT_5_9_9_9_REV;if(Z===mW)return $.UNSIGNED_INT_10F_11F_11F_REV;if(Z===pW)return $.BYTE;if(Z===lW)return $.SHORT;if(Z===Z9)return $.UNSIGNED_SHORT;if(Z===RQ)return $.INT;if(Z===O7)return $.UNSIGNED_INT;if(Z===X6)return $.FLOAT;if(Z===W9)return $.HALF_FLOAT;if(Z===dW)return $.ALPHA;if(Z===cW)return $.RGB;if(Z===k8)return $.RGBA;if(Z===P$)return $.DEPTH_COMPONENT;if(Z===K9)return $.DEPTH_STENCIL;if(Z===nW)return $.RED;if(Z===MQ)return $.RED_INTEGER;if(Z===sW)return $.RG;if(Z===LQ)return $.RG_INTEGER;if(Z===DQ)return $.RGBA_INTEGER;if(Z===A$||Z===T$||Z===w$||Z===S$)if(X===H1)if(K=J.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===A$)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===T$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===w$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===S$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=J.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===A$)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===T$)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===w$)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===S$)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===_Q||Z===VQ||Z===zQ||Z===BQ)if(K=J.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===_Q)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===VQ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===zQ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===BQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===kQ||Z===CQ||Z===IQ)if(K=J.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===kQ||Z===CQ)return X===H1?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===IQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===PQ||Z===AQ||Z===TQ||Z===wQ||Z===SQ||Z===jQ||Z===fQ||Z===vQ||Z===yQ||Z===bQ||Z===hQ||Z===xQ||Z===gQ||Z===pQ)if(K=J.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===PQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===AQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===TQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===wQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===SQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===jQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===fQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===vQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===yQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===bQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===hQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===xQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===gQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===pQ)return X===H1?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===lQ||Z===uQ||Z===mQ)if(K=J.get("EXT_texture_compression_bptc"),K!==null){if(Z===lQ)return X===H1?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===uQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===mQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===dQ||Z===cQ||Z===nQ||Z===sQ)if(K=J.get("EXT_texture_compression_rgtc"),K!==null){if(Z===dQ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===cQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===nQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===sQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===M7)return $.UNSIGNED_INT_24_8;return $[Z]!==void 0?$[Z]:null}return{convert:Q}}var eN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$R=`
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

}`;class oK{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init($,J){if(this.texture===null){let Q=new c$($.texture);if($.depthNear!==J.depthNear||$.depthFar!==J.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=Q}}getMesh($){if(this.texture!==null){if(this.mesh===null){let J=$.cameras[0].viewport,Q=new u1({vertexShader:eN,fragmentShader:$R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:J.z},depthHeight:{value:J.w}}});this.mesh=new A1(new F9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iK extends H6{constructor($,J){super();let Q=this,Z=null,W=1,K=null,X="local-floor",H=1,Y=null,U=null,G=null,E=null,q=null,F=null,O=typeof XRWebGLBinding<"u",M=new oK,N={},R=J.getContextAttributes(),_=null,D=null,k=[],T=[],P=new u0,A=null,y=new T1;y.viewport=new i0;let z=new T1;z.viewport=new i0;let L=[y,z],C=new OZ,I=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let W0=k[o];if(W0===void 0)W0=new Y9,k[o]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(o){let W0=k[o];if(W0===void 0)W0=new Y9,k[o]=W0;return W0.getGripSpace()},this.getHand=function(o){let W0=k[o];if(W0===void 0)W0=new Y9,k[o]=W0;return W0.getHandSpace()};function f(o){let W0=T.indexOf(o.inputSource);if(W0===-1)return;let e=k[W0];if(e!==void 0)e.update(o.inputSource,o.frame,Y||K),e.dispatchEvent({type:o.type,data:o.inputSource})}function g(){Z.removeEventListener("select",f),Z.removeEventListener("selectstart",f),Z.removeEventListener("selectend",f),Z.removeEventListener("squeeze",f),Z.removeEventListener("squeezestart",f),Z.removeEventListener("squeezeend",f),Z.removeEventListener("end",g),Z.removeEventListener("inputsourceschange",b);for(let o=0;o<k.length;o++){let W0=T[o];if(W0===null)continue;T[o]=null,k[o].disconnect(W0)}I=null,S=null,M.reset();for(let o in N)delete N[o];$.setRenderTarget(_),q=null,E=null,G=null,Z=null,D=null,_0.stop(),Q.isPresenting=!1,$.setPixelRatio(A),$.setSize(P.width,P.height,!1),Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(W=o,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(X=o,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||K},this.setReferenceSpace=function(o){Y=o},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){if(G===null&&O)G=new XRWebGLBinding(Z,J);return G},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(_=$.getRenderTarget(),Z.addEventListener("select",f),Z.addEventListener("selectstart",f),Z.addEventListener("selectend",f),Z.addEventListener("squeeze",f),Z.addEventListener("squeezestart",f),Z.addEventListener("squeezeend",f),Z.addEventListener("end",g),Z.addEventListener("inputsourceschange",b),R.xrCompatible!==!0)await J.makeXRCompatible();if(A=$.getPixelRatio(),$.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let e={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,J,e),Z.updateRenderState({baseLayer:q}),$.setPixelRatio(1),$.setSize(q.framebufferWidth,q.framebufferHeight,!1),D=new M8(q.framebufferWidth,q.framebufferHeight,{format:k8,type:K6,colorSpace:$.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let e=null,N0=null,T0=null;if(R.depth)T0=R.stencil?J.DEPTH24_STENCIL8:J.DEPTH_COMPONENT24,e=R.stencil?K9:P$,N0=R.stencil?M7:O7;let A0={colorFormat:J.RGBA8,depthFormat:T0,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(A0),Z.updateRenderState({layers:[E]}),$.setPixelRatio(1),$.setSize(E.textureWidth,E.textureHeight,!1),D=new M8(E.textureWidth,E.textureHeight,{format:k8,type:K6,depthTexture:new d$(E.textureWidth,E.textureHeight,N0,void 0,void 0,void 0,void 0,void 0,void 0,e),stencilBuffer:R.stencil,colorSpace:$.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(H),Y=null,K=await Z.requestReferenceSpace(X),_0.setContext(Z),_0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function b(o){for(let W0=0;W0<o.removed.length;W0++){let e=o.removed[W0],N0=T.indexOf(e);if(N0>=0)T[N0]=null,k[N0].disconnect(e)}for(let W0=0;W0<o.added.length;W0++){let e=o.added[W0],N0=T.indexOf(e);if(N0===-1){for(let A0=0;A0<k.length;A0++)if(A0>=T.length){T.push(e),N0=A0;break}else if(T[A0]===null){T[A0]=e,N0=A0;break}if(N0===-1)break}let T0=k[N0];if(T0)T0.connect(e)}}let d=new x,h=new x;function i(o,W0,e){d.setFromMatrixPosition(W0.matrixWorld),h.setFromMatrixPosition(e.matrixWorld);let N0=d.distanceTo(h),T0=W0.projectionMatrix.elements,A0=e.projectionMatrix.elements,e0=T0[14]/(T0[10]-1),j=T0[14]/(T0[10]+1),d0=(T0[9]+1)/T0[5],f0=(T0[9]-1)/T0[5],I0=(T0[8]-1)/T0[0],M0=(A0[8]+1)/A0[0],a0=e0*I0,V0=e0*M0,F0=N0/(-I0+M0),U1=F0*-I0;if(W0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(U1),o.translateZ(F0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),T0[10]===-1)o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let q1=e0+F0,l0=j+F0,w=a0-U1,V=V0+(N0-U1),u=d0*j/l0*q1,a=f0*j/l0*q1;o.projectionMatrix.makePerspective(w,V,u,a,q1,l0),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function t(o,W0){if(W0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(W0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:W0,far:e}=o;if(M.texture!==null){if(M.depthNear>0)W0=M.depthNear;if(M.depthFar>0)e=M.depthFar}if(C.near=z.near=y.near=W0,C.far=z.far=y.far=e,I!==C.near||S!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,S=C.far;C.layers.mask=o.layers.mask|6,y.layers.mask=C.layers.mask&3,z.layers.mask=C.layers.mask&5;let N0=o.parent,T0=C.cameras;t(C,N0);for(let A0=0;A0<T0.length;A0++)t(T0[A0],N0);if(T0.length===2)i(C,y,z);else C.projectionMatrix.copy(y.projectionMatrix);Z0(o,C,N0)};function Z0(o,W0,e){if(e===null)o.matrix.copy(W0.matrixWorld);else o.matrix.copy(e.matrixWorld),o.matrix.invert(),o.matrix.multiply(W0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=A6*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(E===null&&q===null)return;return H},this.setFoveation=function(o){if(H=o,E!==null)E.fixedFoveation=o;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=o},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)},this.getCameraTexture=function(o){return N[o]};let E0=null;function C0(o,W0){if(U=W0.getViewerPose(Y||K),F=W0,U!==null){let e=U.views;if(q!==null)$.setRenderTargetFramebuffer(D,q.framebuffer),$.setRenderTarget(D);let N0=!1;if(e.length!==C.cameras.length)C.cameras.length=0,N0=!0;for(let j=0;j<e.length;j++){let d0=e[j],f0=null;if(q!==null)f0=q.getViewport(d0);else{let M0=G.getViewSubImage(E,d0);if(f0=M0.viewport,j===0)$.setRenderTargetTextures(D,M0.colorTexture,M0.depthStencilTexture),$.setRenderTarget(D)}let I0=L[j];if(I0===void 0)I0=new T1,I0.layers.enable(j),I0.viewport=new i0,L[j]=I0;if(I0.matrix.fromArray(d0.transform.matrix),I0.matrix.decompose(I0.position,I0.quaternion,I0.scale),I0.projectionMatrix.fromArray(d0.projectionMatrix),I0.projectionMatrixInverse.copy(I0.projectionMatrix).invert(),I0.viewport.set(f0.x,f0.y,f0.width,f0.height),j===0)C.matrix.copy(I0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(N0===!0)C.cameras.push(I0)}let T0=Z.enabledFeatures;if(T0&&T0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){G=Q.getBinding();let j=G.getDepthInformation(e[0]);if(j&&j.isValid&&j.texture)M.init(j,Z.renderState)}if(T0&&T0.includes("camera-access")&&O){$.state.unbindTexture(),G=Q.getBinding();for(let j=0;j<e.length;j++){let d0=e[j].camera;if(d0){let f0=N[d0];if(!f0)f0=new c$,N[d0]=f0;let I0=G.getCameraImage(d0);f0.sourceTexture=I0}}}}for(let e=0;e<k.length;e++){let N0=T[e],T0=k[e];if(N0!==null&&T0!==void 0)T0.update(N0,W0,Y||K)}if(E0)E0(o,W0);if(W0.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:W0});F=null}let _0=new xK;_0.setAnimationLoop(C0),this.setAnimationLoop=function(o){E0=o},this.dispose=function(){}}}var y6=new F8,JR=new g0;function QR($,J){function Q(N,R){if(N.matrixAutoUpdate===!0)N.updateMatrix();R.value.copy(N.matrix)}function Z(N,R){if(R.color.getRGB(N.fogColor.value,KZ($)),R.isFog)N.fogNear.value=R.near,N.fogFar.value=R.far;else if(R.isFogExp2)N.fogDensity.value=R.density}function W(N,R,_,D,k){if(R.isMeshBasicMaterial)K(N,R);else if(R.isMeshLambertMaterial)K(N,R);else if(R.isMeshToonMaterial)K(N,R),E(N,R);else if(R.isMeshPhongMaterial)K(N,R),G(N,R);else if(R.isMeshStandardMaterial){if(K(N,R),q(N,R),R.isMeshPhysicalMaterial)F(N,R,k)}else if(R.isMeshMatcapMaterial)K(N,R),O(N,R);else if(R.isMeshDepthMaterial)K(N,R);else if(R.isMeshDistanceMaterial)K(N,R),M(N,R);else if(R.isMeshNormalMaterial)K(N,R);else if(R.isLineBasicMaterial){if(X(N,R),R.isLineDashedMaterial)H(N,R)}else if(R.isPointsMaterial)Y(N,R,_,D);else if(R.isSpriteMaterial)U(N,R);else if(R.isShadowMaterial)N.color.value.copy(R.color),N.opacity.value=R.opacity;else if(R.isShaderMaterial)R.uniformsNeedUpdate=!1}function K(N,R){if(N.opacity.value=R.opacity,R.color)N.diffuse.value.copy(R.color);if(R.emissive)N.emissive.value.copy(R.emissive).multiplyScalar(R.emissiveIntensity);if(R.map)N.map.value=R.map,Q(R.map,N.mapTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.bumpMap){if(N.bumpMap.value=R.bumpMap,Q(R.bumpMap,N.bumpMapTransform),N.bumpScale.value=R.bumpScale,R.side===a1)N.bumpScale.value*=-1}if(R.normalMap){if(N.normalMap.value=R.normalMap,Q(R.normalMap,N.normalMapTransform),N.normalScale.value.copy(R.normalScale),R.side===a1)N.normalScale.value.negate()}if(R.displacementMap)N.displacementMap.value=R.displacementMap,Q(R.displacementMap,N.displacementMapTransform),N.displacementScale.value=R.displacementScale,N.displacementBias.value=R.displacementBias;if(R.emissiveMap)N.emissiveMap.value=R.emissiveMap,Q(R.emissiveMap,N.emissiveMapTransform);if(R.specularMap)N.specularMap.value=R.specularMap,Q(R.specularMap,N.specularMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest;let _=J.get(R),D=_.envMap,k=_.envMapRotation;if(D){if(N.envMap.value=D,y6.copy(k),y6.x*=-1,y6.y*=-1,y6.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1)y6.y*=-1,y6.z*=-1;N.envMapRotation.value.setFromMatrix4(JR.makeRotationFromEuler(y6)),N.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=R.reflectivity,N.ior.value=R.ior,N.refractionRatio.value=R.refractionRatio}if(R.lightMap)N.lightMap.value=R.lightMap,N.lightMapIntensity.value=R.lightMapIntensity,Q(R.lightMap,N.lightMapTransform);if(R.aoMap)N.aoMap.value=R.aoMap,N.aoMapIntensity.value=R.aoMapIntensity,Q(R.aoMap,N.aoMapTransform)}function X(N,R){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,R.map)N.map.value=R.map,Q(R.map,N.mapTransform)}function H(N,R){N.dashSize.value=R.dashSize,N.totalSize.value=R.dashSize+R.gapSize,N.scale.value=R.scale}function Y(N,R,_,D){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,N.size.value=R.size*_,N.scale.value=D*0.5,R.map)N.map.value=R.map,Q(R.map,N.uvTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest}function U(N,R){if(N.diffuse.value.copy(R.color),N.opacity.value=R.opacity,N.rotation.value=R.rotation,R.map)N.map.value=R.map,Q(R.map,N.mapTransform);if(R.alphaMap)N.alphaMap.value=R.alphaMap,Q(R.alphaMap,N.alphaMapTransform);if(R.alphaTest>0)N.alphaTest.value=R.alphaTest}function G(N,R){N.specular.value.copy(R.specular),N.shininess.value=Math.max(R.shininess,0.0001)}function E(N,R){if(R.gradientMap)N.gradientMap.value=R.gradientMap}function q(N,R){if(N.metalness.value=R.metalness,R.metalnessMap)N.metalnessMap.value=R.metalnessMap,Q(R.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=R.roughness,R.roughnessMap)N.roughnessMap.value=R.roughnessMap,Q(R.roughnessMap,N.roughnessMapTransform);if(R.envMap)N.envMapIntensity.value=R.envMapIntensity}function F(N,R,_){if(N.ior.value=R.ior,R.sheen>0){if(N.sheenColor.value.copy(R.sheenColor).multiplyScalar(R.sheen),N.sheenRoughness.value=R.sheenRoughness,R.sheenColorMap)N.sheenColorMap.value=R.sheenColorMap,Q(R.sheenColorMap,N.sheenColorMapTransform);if(R.sheenRoughnessMap)N.sheenRoughnessMap.value=R.sheenRoughnessMap,Q(R.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(R.clearcoat>0){if(N.clearcoat.value=R.clearcoat,N.clearcoatRoughness.value=R.clearcoatRoughness,R.clearcoatMap)N.clearcoatMap.value=R.clearcoatMap,Q(R.clearcoatMap,N.clearcoatMapTransform);if(R.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=R.clearcoatRoughnessMap,Q(R.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(R.clearcoatNormalMap){if(N.clearcoatNormalMap.value=R.clearcoatNormalMap,Q(R.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(R.clearcoatNormalScale),R.side===a1)N.clearcoatNormalScale.value.negate()}}if(R.dispersion>0)N.dispersion.value=R.dispersion;if(R.iridescence>0){if(N.iridescence.value=R.iridescence,N.iridescenceIOR.value=R.iridescenceIOR,N.iridescenceThicknessMinimum.value=R.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=R.iridescenceThicknessRange[1],R.iridescenceMap)N.iridescenceMap.value=R.iridescenceMap,Q(R.iridescenceMap,N.iridescenceMapTransform);if(R.iridescenceThicknessMap)N.iridescenceThicknessMap.value=R.iridescenceThicknessMap,Q(R.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(R.transmission>0){if(N.transmission.value=R.transmission,N.transmissionSamplerMap.value=_.texture,N.transmissionSamplerSize.value.set(_.width,_.height),R.transmissionMap)N.transmissionMap.value=R.transmissionMap,Q(R.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=R.thickness,R.thicknessMap)N.thicknessMap.value=R.thicknessMap,Q(R.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=R.attenuationDistance,N.attenuationColor.value.copy(R.attenuationColor)}if(R.anisotropy>0){if(N.anisotropyVector.value.set(R.anisotropy*Math.cos(R.anisotropyRotation),R.anisotropy*Math.sin(R.anisotropyRotation)),R.anisotropyMap)N.anisotropyMap.value=R.anisotropyMap,Q(R.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=R.specularIntensity,N.specularColor.value.copy(R.specularColor),R.specularColorMap)N.specularColorMap.value=R.specularColorMap,Q(R.specularColorMap,N.specularColorMapTransform);if(R.specularIntensityMap)N.specularIntensityMap.value=R.specularIntensityMap,Q(R.specularIntensityMap,N.specularIntensityMapTransform)}function O(N,R){if(R.matcap)N.matcap.value=R.matcap}function M(N,R){let _=J.get(R).light;N.referencePosition.value.setFromMatrixPosition(_.matrixWorld),N.nearDistance.value=_.shadow.camera.near,N.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function ZR($,J,Q,Z){let W={},K={},X=[],H=$.getParameter($.MAX_UNIFORM_BUFFER_BINDINGS);function Y(_,D){let k=D.program;Z.uniformBlockBinding(_,k)}function U(_,D){let k=W[_.id];if(k===void 0)O(_),k=G(_),W[_.id]=k,_.addEventListener("dispose",N);let T=D.program;Z.updateUBOMapping(_,T);let P=J.render.frame;if(K[_.id]!==P)q(_),K[_.id]=P}function G(_){let D=E();_.__bindingPointIndex=D;let k=$.createBuffer(),T=_.__size,P=_.usage;return $.bindBuffer($.UNIFORM_BUFFER,k),$.bufferData($.UNIFORM_BUFFER,T,P),$.bindBuffer($.UNIFORM_BUFFER,null),$.bindBufferBase($.UNIFORM_BUFFER,D,k),k}function E(){for(let _=0;_<H;_++)if(X.indexOf(_)===-1)return X.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(_){let D=W[_.id],k=_.uniforms,T=_.__cache;$.bindBuffer($.UNIFORM_BUFFER,D);for(let P=0,A=k.length;P<A;P++){let y=Array.isArray(k[P])?k[P]:[k[P]];for(let z=0,L=y.length;z<L;z++){let C=y[z];if(F(C,P,z,T)===!0){let I=C.__offset,S=Array.isArray(C.value)?C.value:[C.value],f=0;for(let g=0;g<S.length;g++){let b=S[g],d=M(b);if(typeof b==="number"||typeof b==="boolean")C.__data[0]=b,$.bufferSubData($.UNIFORM_BUFFER,I+f,C.__data);else if(b.isMatrix3)C.__data[0]=b.elements[0],C.__data[1]=b.elements[1],C.__data[2]=b.elements[2],C.__data[3]=0,C.__data[4]=b.elements[3],C.__data[5]=b.elements[4],C.__data[6]=b.elements[5],C.__data[7]=0,C.__data[8]=b.elements[6],C.__data[9]=b.elements[7],C.__data[10]=b.elements[8],C.__data[11]=0;else b.toArray(C.__data,f),f+=d.storage/Float32Array.BYTES_PER_ELEMENT}$.bufferSubData($.UNIFORM_BUFFER,I,C.__data)}}}$.bindBuffer($.UNIFORM_BUFFER,null)}function F(_,D,k,T){let P=_.value,A=D+"_"+k;if(T[A]===void 0){if(typeof P==="number"||typeof P==="boolean")T[A]=P;else T[A]=P.clone();return!0}else{let y=T[A];if(typeof P==="number"||typeof P==="boolean"){if(y!==P)return T[A]=P,!0}else if(y.equals(P)===!1)return y.copy(P),!0}return!1}function O(_){let D=_.uniforms,k=0,T=16;for(let A=0,y=D.length;A<y;A++){let z=Array.isArray(D[A])?D[A]:[D[A]];for(let L=0,C=z.length;L<C;L++){let I=z[L],S=Array.isArray(I.value)?I.value:[I.value];for(let f=0,g=S.length;f<g;f++){let b=S[f],d=M(b),h=k%T,i=h%d.boundary,t=h+i;if(k+=i,t!==0&&T-t<d.storage)k+=T-t;I.__data=new Float32Array(d.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=k,k+=d.storage}}}let P=k%T;if(P>0)k+=T-P;return _.__size=k,_.__cache={},this}function M(_){let D={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")D.boundary=4,D.storage=4;else if(_.isVector2)D.boundary=8,D.storage=8;else if(_.isVector3||_.isColor)D.boundary=16,D.storage=12;else if(_.isVector4)D.boundary=16,D.storage=16;else if(_.isMatrix3)D.boundary=48,D.storage=48;else if(_.isMatrix4)D.boundary=64,D.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return D}function N(_){let D=_.target;D.removeEventListener("dispose",N);let k=X.indexOf(D.__bindingPointIndex);X.splice(k,1),$.deleteBuffer(W[D.id]),delete W[D.id],delete K[D.id]}function R(){for(let _ in W)$.deleteBuffer(W[_]);X=[],W={},K={}}return{bind:Y,update:U,dispose:R}}class TZ{constructor($={}){let{canvas:J=WK(),context:Q=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:X=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:Y=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=$;this.isWebGLRenderer=!0;let q;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Q.getContextAttributes().alpha}else q=K;let F=new Uint32Array(4),O=new Int32Array(4),M=null,N=null,R=[],_=[];this.domElement=J,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=l8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,k=!1;this._outputColorSpace=C8;let T=0,P=0,A=null,y=-1,z=null,L=new i0,C=new i0,I=null,S=new y0(0),f=0,g=J.width,b=J.height,d=1,h=null,i=null,t=new i0(0,0,g,b),Z0=new i0(0,0,g,b),E0=!1,C0=new q9,_0=!1,o=!1,W0=new g0,e=new x,N0=new i0,T0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},A0=!1;function e0(){return A===null?d:1}let j=Q;function d0(B,p){return J.getContext(B,p)}try{let B={alpha:!0,depth:Z,stencil:W,antialias:X,premultipliedAlpha:H,preserveDrawingBuffer:Y,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in J)J.setAttribute("data-engine",`three.js r${XW}`);if(J.addEventListener("webglcontextlost",q0,!1),J.addEventListener("webglcontextrestored",H0,!1),J.addEventListener("webglcontextcreationerror",L0,!1),j===null){if(j=d0("webgl2",B),j===null)if(d0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let f0,I0,M0,a0,V0,F0,U1,q1,l0,w,V,u,a,$0,s,D0,G0,B0,S0,K0,m,J0,U0,Y0;function b0(){if(f0=new Vq(j),f0.init(),J0=new tN(j,f0),I0=new Rq(j,f0,$,J0),M0=new aN(j,f0),I0.reversedDepthBuffer&&E)M0.buffers.depth.setReversed(!0);a0=new kq(j),V0=new hN,F0=new rN(j,f0,M0,V0,I0,J0,a0),U1=new Oq(D),q1=new _q(D),l0=new wU(j),U0=new qq(j,l0),w=new zq(j,l0,a0,U0),V=new Iq(j,w,l0,a0),S0=new Cq(j,I0,F0),D0=new Fq(V0),u=new bN(D,U1,q1,f0,I0,U0,D0),a=new QR(D,V0),$0=new gN,s=new cN(f0),B0=new Eq(D,U1,q1,M0,V,q,H),G0=new oN(D,V,I0),Y0=new ZR(j,a0,I0,M0),K0=new Nq(j,f0,a0),m=new Bq(j,f0,a0),a0.programs=u.programs,D.capabilities=I0,D.extensions=f0,D.properties=V0,D.renderLists=$0,D.shadowMap=G0,D.state=M0,D.info=a0}b0();let v=new iK(D,j);this.xr=v,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let B=f0.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=f0.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return d},this.setPixelRatio=function(B){if(B===void 0)return;d=B,this.setSize(g,b,!1)},this.getSize=function(B){return B.set(g,b)},this.setSize=function(B,p,c=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(g=B,b=p,J.width=Math.floor(B*d),J.height=Math.floor(p*d),c===!0)J.style.width=B+"px",J.style.height=p+"px";this.setViewport(0,0,B,p)},this.getDrawingBufferSize=function(B){return B.set(g*d,b*d).floor()},this.setDrawingBufferSize=function(B,p,c){g=B,b=p,d=c,J.width=Math.floor(B*c),J.height=Math.floor(p*c),this.setViewport(0,0,B,p)},this.getCurrentViewport=function(B){return B.copy(L)},this.getViewport=function(B){return B.copy(t)},this.setViewport=function(B,p,c,n){if(B.isVector4)t.set(B.x,B.y,B.z,B.w);else t.set(B,p,c,n);M0.viewport(L.copy(t).multiplyScalar(d).round())},this.getScissor=function(B){return B.copy(Z0)},this.setScissor=function(B,p,c,n){if(B.isVector4)Z0.set(B.x,B.y,B.z,B.w);else Z0.set(B,p,c,n);M0.scissor(C.copy(Z0).multiplyScalar(d).round())},this.getScissorTest=function(){return E0},this.setScissorTest=function(B){M0.setScissorTest(E0=B)},this.setOpaqueSort=function(B){h=B},this.setTransparentSort=function(B){i=B},this.getClearColor=function(B){return B.copy(B0.getClearColor())},this.setClearColor=function(){B0.setClearColor(...arguments)},this.getClearAlpha=function(){return B0.getClearAlpha()},this.setClearAlpha=function(){B0.setClearAlpha(...arguments)},this.clear=function(B=!0,p=!0,c=!0){let n=0;if(B){let l=!1;if(A!==null){let X0=A.texture.format;l=X0===DQ||X0===LQ||X0===MQ}if(l){let X0=A.texture.type,O0=X0===K6||X0===O7||X0===Z9||X0===M7||X0===FQ||X0===OQ,k0=B0.getClearColor(),z0=B0.getClearAlpha(),v0=k0.r,h0=k0.g,w0=k0.b;if(O0)F[0]=v0,F[1]=h0,F[2]=w0,F[3]=z0,j.clearBufferuiv(j.COLOR,0,F);else O[0]=v0,O[1]=h0,O[2]=w0,O[3]=z0,j.clearBufferiv(j.COLOR,0,O)}else n|=j.COLOR_BUFFER_BIT}if(p)n|=j.DEPTH_BUFFER_BIT;if(c)n|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);j.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){J.removeEventListener("webglcontextlost",q0,!1),J.removeEventListener("webglcontextrestored",H0,!1),J.removeEventListener("webglcontextcreationerror",L0,!1),B0.dispose(),$0.dispose(),s.dispose(),V0.dispose(),U1.dispose(),q1.dispose(),V.dispose(),U0.dispose(),Y0.dispose(),u.dispose(),v.dispose(),v.removeEventListener("sessionstart",_8),v.removeEventListener("sessionend",V8),z6.stop()};function q0(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function H0(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let B=a0.autoReset,p=G0.enabled,c=G0.autoUpdate,n=G0.needsUpdate,l=G0.type;b0(),a0.autoReset=B,G0.enabled=p,G0.autoUpdate=c,G0.needsUpdate=n,G0.type=l}function L0(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Q0(B){let p=B.target;p.removeEventListener("dispose",Q0),r(p)}function r(B){P0(B),V0.remove(B)}function P0(B){let p=V0.get(B).programs;if(p!==void 0){if(p.forEach(function(c){u.releaseProgram(c)}),B.isShaderMaterial)u.releaseShaderCache(B)}}this.renderBufferDirect=function(B,p,c,n,l,X0){if(p===null)p=T0;let O0=l.isMesh&&l.matrixWorld.determinant()<0,k0=CY(B,p,c,n,l);M0.setMaterial(n,O0);let z0=c.index,v0=1;if(n.wireframe===!0){if(z0=w.getWireframeAttribute(c),z0===void 0)return;v0=2}let h0=c.drawRange,w0=c.attributes.position,s0=h0.start*v0,Q1=(h0.start+h0.count)*v0;if(X0!==null)s0=Math.max(s0,X0.start*v0),Q1=Math.min(Q1,(X0.start+X0.count)*v0);if(z0!==null)s0=Math.max(s0,0),Q1=Math.min(Q1,z0.count);else if(w0!==void 0&&w0!==null)s0=Math.max(s0,0),Q1=Math.min(Q1,w0.count);let M1=Q1-s0;if(M1<0||M1===1/0)return;U0.setup(l,n,k0,c,z0);let G1,W1=K0;if(z0!==null)G1=l0.get(z0),W1=m,W1.setIndex(G1);if(l.isMesh)if(n.wireframe===!0)M0.setLineWidth(n.wireframeLinewidth*e0()),W1.setMode(j.LINES);else W1.setMode(j.TRIANGLES);else if(l.isLine){let j0=n.linewidth;if(j0===void 0)j0=1;if(M0.setLineWidth(j0*e0()),l.isLineSegments)W1.setMode(j.LINES);else if(l.isLineLoop)W1.setMode(j.LINE_LOOP);else W1.setMode(j.LINE_STRIP)}else if(l.isPoints)W1.setMode(j.POINTS);else if(l.isSprite)W1.setMode(j.TRIANGLES);if(l.isBatchedMesh)if(l._multiDrawInstances!==null)E7("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),W1.renderMultiDrawInstances(l._multiDrawStarts,l._multiDrawCounts,l._multiDrawCount,l._multiDrawInstances);else if(!f0.get("WEBGL_multi_draw")){let{_multiDrawStarts:j0,_multiDrawCounts:N1,_multiDrawCount:r0}=l,n1=z0?l0.get(z0).bytesPerElement:1,s6=V0.get(n).currentProgram.getUniforms();for(let s1=0;s1<r0;s1++)s6.setValue(j,"_gl_DrawID",s1),W1.render(j0[s1]/n1,N1[s1])}else W1.renderMultiDraw(l._multiDrawStarts,l._multiDrawCounts,l._multiDrawCount);else if(l.isInstancedMesh)W1.renderInstances(s0,M1,l.count);else if(c.isInstancedBufferGeometry){let j0=c._maxInstanceCount!==void 0?c._maxInstanceCount:1/0,N1=Math.min(c.instanceCount,j0);W1.renderInstances(s0,M1,N1)}else W1.render(s0,M1)};function x0(B,p,c){if(B.transparent===!0&&B.side===H8&&B.forceSinglePass===!1)B.side=a1,B.needsUpdate=!0,l9(B,p,c),B.side=Z6,B.needsUpdate=!0,l9(B,p,c),B.side=H8;else l9(B,p,c)}this.compile=function(B,p,c=null){if(c===null)c=B;if(N=s.get(c),N.init(p),_.push(N),c.traverseVisible(function(l){if(l.isLight&&l.layers.test(p.layers)){if(N.pushLight(l),l.castShadow)N.pushShadow(l)}}),B!==c)B.traverseVisible(function(l){if(l.isLight&&l.layers.test(p.layers)){if(N.pushLight(l),l.castShadow)N.pushShadow(l)}});N.setupLights();let n=new Set;return B.traverse(function(l){if(!(l.isMesh||l.isPoints||l.isLine||l.isSprite))return;let X0=l.material;if(X0)if(Array.isArray(X0))for(let O0=0;O0<X0.length;O0++){let k0=X0[O0];x0(k0,c,l),n.add(k0)}else x0(X0,c,l),n.add(X0)}),N=_.pop(),n},this.compileAsync=function(B,p,c=null){let n=this.compile(B,p,c);return new Promise((l)=>{function X0(){if(n.forEach(function(O0){if(V0.get(O0).currentProgram.isReady())n.delete(O0)}),n.size===0){l(B);return}setTimeout(X0,10)}if(f0.get("KHR_parallel_shader_compile")!==null)X0();else setTimeout(X0,10)})};let Z1=null;function J1(B){if(Z1)Z1(B)}function _8(){z6.stop()}function V8(){z6.start()}let z6=new xK;if(z6.setAnimationLoop(J1),typeof self<"u")z6.setContext(self);this.setAnimationLoop=function(B){Z1=B,v.setAnimationLoop(B),B===null?z6.stop():z6.start()},v.addEventListener("sessionstart",_8),v.addEventListener("sessionend",V8),this.render=function(B,p){if(p!==void 0&&p.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(p.parent===null&&p.matrixWorldAutoUpdate===!0)p.updateMatrixWorld();if(v.enabled===!0&&v.isPresenting===!0){if(v.cameraAutoUpdate===!0)v.updateCamera(p);p=v.getCamera()}if(B.isScene===!0)B.onBeforeRender(D,B,p,A);if(N=s.get(B,_.length),N.init(p),_.push(N),W0.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),C0.setFromProjectionMatrix(W0,eQ,p.reversedDepth),o=this.localClippingEnabled,_0=D0.init(this.clippingPlanes,o),M=$0.get(B,R.length),M.init(),R.push(M),v.enabled===!0&&v.isPresenting===!0){let X0=D.xr.getDepthSensingMesh();if(X0!==null)fJ(X0,p,-1/0,D.sortObjects)}if(fJ(B,p,0,D.sortObjects),M.finish(),D.sortObjects===!0)M.sort(h,i);if(A0=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,A0)B0.addToRenderList(M,B);if(this.info.render.frame++,_0===!0)D0.beginShadows();let c=N.state.shadowsArray;if(G0.render(c,B,p),_0===!0)D0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:n,transmissive:l}=M;if(N.setupLights(),p.isArrayCamera){let X0=p.cameras;if(l.length>0)for(let O0=0,k0=X0.length;O0<k0;O0++){let z0=X0[O0];L5(n,l,B,z0)}if(A0)B0.render(B);for(let O0=0,k0=X0.length;O0<k0;O0++){let z0=X0[O0];M5(M,B,z0,z0.viewport)}}else{if(l.length>0)L5(n,l,B,p);if(A0)B0.render(B);M5(M,B,p)}if(A!==null&&P===0)F0.updateMultisampleRenderTarget(A),F0.updateRenderTargetMipmap(A);if(B.isScene===!0)B.onAfterRender(D,B,p);if(U0.resetDefaultState(),y=-1,z=null,_.pop(),_.length>0){if(N=_[_.length-1],_0===!0)D0.setGlobalState(D.clippingPlanes,N.state.camera)}else N=null;if(R.pop(),R.length>0)M=R[R.length-1];else M=null};function fJ(B,p,c,n){if(B.visible===!1)return;if(B.layers.test(p.layers)){if(B.isGroup)c=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(p)}else if(B.isLight){if(N.pushLight(B),B.castShadow)N.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||C0.intersectsSprite(B)){if(n)N0.setFromMatrixPosition(B.matrixWorld).applyMatrix4(W0);let O0=V.update(B),k0=B.material;if(k0.visible)M.push(B,O0,k0,c,N0.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||C0.intersectsObject(B)){let O0=V.update(B),k0=B.material;if(n){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();N0.copy(B.boundingSphere.center)}else{if(O0.boundingSphere===null)O0.computeBoundingSphere();N0.copy(O0.boundingSphere.center)}N0.applyMatrix4(B.matrixWorld).applyMatrix4(W0)}if(Array.isArray(k0)){let z0=O0.groups;for(let v0=0,h0=z0.length;v0<h0;v0++){let w0=z0[v0],s0=k0[w0.materialIndex];if(s0&&s0.visible)M.push(B,O0,s0,c,N0.z,w0)}}else if(k0.visible)M.push(B,O0,k0,c,N0.z,null)}}}let X0=B.children;for(let O0=0,k0=X0.length;O0<k0;O0++)fJ(X0[O0],p,c,n)}function M5(B,p,c,n){let{opaque:l,transmissive:X0,transparent:O0}=B;if(N.setupLightsView(c),_0===!0)D0.setGlobalState(D.clippingPlanes,c);if(n)M0.viewport(L.copy(n));if(l.length>0)p9(l,p,c);if(X0.length>0)p9(X0,p,c);if(O0.length>0)p9(O0,p,c);M0.buffers.depth.setTest(!0),M0.buffers.depth.setMask(!0),M0.buffers.color.setMask(!0),M0.setPolygonOffset(!1)}function L5(B,p,c,n){if((c.isScene===!0?c.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[n.id]===void 0)N.state.transmissionRenderTarget[n.id]=new M8(1,1,{generateMipmaps:!0,type:f0.has("EXT_color_buffer_half_float")||f0.has("EXT_color_buffer_float")?W9:K6,minFilter:m8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:o0.workingColorSpace});let X0=N.state.transmissionRenderTarget[n.id],O0=n.viewport||L;X0.setSize(O0.z*D.transmissionResolutionScale,O0.w*D.transmissionResolutionScale);let k0=D.getRenderTarget(),z0=D.getActiveCubeFace(),v0=D.getActiveMipmapLevel();if(D.setRenderTarget(X0),D.getClearColor(S),f=D.getClearAlpha(),f<1)D.setClearColor(16777215,0.5);if(D.clear(),A0)B0.render(c);let h0=D.toneMapping;D.toneMapping=l8;let w0=n.viewport;if(n.viewport!==void 0)n.viewport=void 0;if(N.setupLightsView(n),_0===!0)D0.setGlobalState(D.clippingPlanes,n);if(p9(B,c,n),F0.updateMultisampleRenderTarget(X0),F0.updateRenderTargetMipmap(X0),f0.has("WEBGL_multisampled_render_to_texture")===!1){let s0=!1;for(let Q1=0,M1=p.length;Q1<M1;Q1++){let G1=p[Q1],W1=G1.object,j0=G1.geometry,N1=G1.material,r0=G1.group;if(N1.side===H8&&W1.layers.test(n.layers)){let n1=N1.side;N1.side=a1,N1.needsUpdate=!0,D5(W1,c,n,j0,N1,r0),N1.side=n1,N1.needsUpdate=!0,s0=!0}}if(s0===!0)F0.updateMultisampleRenderTarget(X0),F0.updateRenderTargetMipmap(X0)}if(D.setRenderTarget(k0,z0,v0),D.setClearColor(S,f),w0!==void 0)n.viewport=w0;D.toneMapping=h0}function p9(B,p,c){let n=p.isScene===!0?p.overrideMaterial:null;for(let l=0,X0=B.length;l<X0;l++){let O0=B[l],k0=O0.object,z0=O0.geometry,v0=O0.group,h0=O0.material;if(h0.allowOverride===!0&&n!==null)h0=n;if(k0.layers.test(c.layers))D5(k0,p,c,z0,h0,v0)}}function D5(B,p,c,n,l,X0){if(B.onBeforeRender(D,p,c,n,l,X0),B.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),l.onBeforeRender(D,p,c,n,B,X0),l.transparent===!0&&l.side===H8&&l.forceSinglePass===!1)l.side=a1,l.needsUpdate=!0,D.renderBufferDirect(c,p,n,l,B,X0),l.side=Z6,l.needsUpdate=!0,D.renderBufferDirect(c,p,n,l,B,X0),l.side=H8;else D.renderBufferDirect(c,p,n,l,B,X0);B.onAfterRender(D,p,c,n,l,X0)}function l9(B,p,c){if(p.isScene!==!0)p=T0;let n=V0.get(B),l=N.state.lights,X0=N.state.shadowsArray,O0=l.state.version,k0=u.getParameters(B,l.state,X0,p,c),z0=u.getProgramCacheKey(k0),v0=n.programs;if(n.environment=B.isMeshStandardMaterial?p.environment:null,n.fog=p.fog,n.envMap=(B.isMeshStandardMaterial?q1:U1).get(B.envMap||n.environment),n.envMapRotation=n.environment!==null&&B.envMap===null?p.environmentRotation:B.envMapRotation,v0===void 0)B.addEventListener("dispose",Q0),v0=new Map,n.programs=v0;let h0=v0.get(z0);if(h0!==void 0){if(n.currentProgram===h0&&n.lightsStateVersion===O0)return V5(B,k0),h0}else k0.uniforms=u.getUniforms(B),B.onBeforeCompile(k0,D),h0=u.acquireProgram(k0,z0),v0.set(z0,h0),n.uniforms=k0.uniforms;let w0=n.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)w0.clippingPlanes=D0.uniform;if(V5(B,k0),n.needsLights=PY(B),n.lightsStateVersion=O0,n.needsLights)w0.ambientLightColor.value=l.state.ambient,w0.lightProbe.value=l.state.probe,w0.directionalLights.value=l.state.directional,w0.directionalLightShadows.value=l.state.directionalShadow,w0.spotLights.value=l.state.spot,w0.spotLightShadows.value=l.state.spotShadow,w0.rectAreaLights.value=l.state.rectArea,w0.ltc_1.value=l.state.rectAreaLTC1,w0.ltc_2.value=l.state.rectAreaLTC2,w0.pointLights.value=l.state.point,w0.pointLightShadows.value=l.state.pointShadow,w0.hemisphereLights.value=l.state.hemi,w0.directionalShadowMap.value=l.state.directionalShadowMap,w0.directionalShadowMatrix.value=l.state.directionalShadowMatrix,w0.spotShadowMap.value=l.state.spotShadowMap,w0.spotLightMatrix.value=l.state.spotLightMatrix,w0.spotLightMap.value=l.state.spotLightMap,w0.pointShadowMap.value=l.state.pointShadowMap,w0.pointShadowMatrix.value=l.state.pointShadowMatrix;return n.currentProgram=h0,n.uniformsList=null,h0}function _5(B){if(B.uniformsList===null){let p=B.currentProgram.getUniforms();B.uniformsList=D9.seqWithValue(p.seq,B.uniforms)}return B.uniformsList}function V5(B,p){let c=V0.get(B);c.outputColorSpace=p.outputColorSpace,c.batching=p.batching,c.batchingColor=p.batchingColor,c.instancing=p.instancing,c.instancingColor=p.instancingColor,c.instancingMorph=p.instancingMorph,c.skinning=p.skinning,c.morphTargets=p.morphTargets,c.morphNormals=p.morphNormals,c.morphColors=p.morphColors,c.morphTargetsCount=p.morphTargetsCount,c.numClippingPlanes=p.numClippingPlanes,c.numIntersection=p.numClipIntersection,c.vertexAlphas=p.vertexAlphas,c.vertexTangents=p.vertexTangents,c.toneMapping=p.toneMapping}function CY(B,p,c,n,l){if(p.isScene!==!0)p=T0;F0.resetTextureUnits();let X0=p.fog,O0=n.isMeshStandardMaterial?p.environment:null,k0=A===null?D.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:h1,z0=(n.isMeshStandardMaterial?q1:U1).get(n.envMap||O0),v0=n.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,h0=!!c.attributes.tangent&&(!!n.normalMap||n.anisotropy>0),w0=!!c.morphAttributes.position,s0=!!c.morphAttributes.normal,Q1=!!c.morphAttributes.color,M1=l8;if(n.toneMapped){if(A===null||A.isXRRenderTarget===!0)M1=D.toneMapping}let G1=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,W1=G1!==void 0?G1.length:0,j0=V0.get(n),N1=N.state.lights;if(_0===!0){if(o===!0||B!==z){let y1=B===z&&n.id===y;D0.setState(n,B,y1)}}let r0=!1;if(n.version===j0.__version){if(j0.needsLights&&j0.lightsStateVersion!==N1.state.version)r0=!0;else if(j0.outputColorSpace!==k0)r0=!0;else if(l.isBatchedMesh&&j0.batching===!1)r0=!0;else if(!l.isBatchedMesh&&j0.batching===!0)r0=!0;else if(l.isBatchedMesh&&j0.batchingColor===!0&&l.colorTexture===null)r0=!0;else if(l.isBatchedMesh&&j0.batchingColor===!1&&l.colorTexture!==null)r0=!0;else if(l.isInstancedMesh&&j0.instancing===!1)r0=!0;else if(!l.isInstancedMesh&&j0.instancing===!0)r0=!0;else if(l.isSkinnedMesh&&j0.skinning===!1)r0=!0;else if(!l.isSkinnedMesh&&j0.skinning===!0)r0=!0;else if(l.isInstancedMesh&&j0.instancingColor===!0&&l.instanceColor===null)r0=!0;else if(l.isInstancedMesh&&j0.instancingColor===!1&&l.instanceColor!==null)r0=!0;else if(l.isInstancedMesh&&j0.instancingMorph===!0&&l.morphTexture===null)r0=!0;else if(l.isInstancedMesh&&j0.instancingMorph===!1&&l.morphTexture!==null)r0=!0;else if(j0.envMap!==z0)r0=!0;else if(n.fog===!0&&j0.fog!==X0)r0=!0;else if(j0.numClippingPlanes!==void 0&&(j0.numClippingPlanes!==D0.numPlanes||j0.numIntersection!==D0.numIntersection))r0=!0;else if(j0.vertexAlphas!==v0)r0=!0;else if(j0.vertexTangents!==h0)r0=!0;else if(j0.morphTargets!==w0)r0=!0;else if(j0.morphNormals!==s0)r0=!0;else if(j0.morphColors!==Q1)r0=!0;else if(j0.toneMapping!==M1)r0=!0;else if(j0.morphTargetsCount!==W1)r0=!0}else r0=!0,j0.__version=n.version;let n1=j0.currentProgram;if(r0===!0)n1=l9(n,p,l);let s6=!1,s1=!1,m7=!1,R1=n1.getUniforms(),J8=j0.uniforms;if(M0.useProgram(n1.program))s6=!0,s1=!0,m7=!0;if(n.id!==y)y=n.id,s1=!0;if(s6||z!==B){if(M0.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();R1.setValue(j,"projectionMatrix",B.projectionMatrix),R1.setValue(j,"viewMatrix",B.matrixWorldInverse);let g1=R1.map.cameraPosition;if(g1!==void 0)g1.setValue(j,e.setFromMatrixPosition(B.matrixWorld));if(I0.logarithmicDepthBuffer)R1.setValue(j,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)R1.setValue(j,"isOrthographic",B.isOrthographicCamera===!0);if(z!==B)z=B,s1=!0,m7=!0}if(l.isSkinnedMesh){R1.setOptional(j,l,"bindMatrix"),R1.setOptional(j,l,"bindMatrixInverse");let y1=l.skeleton;if(y1){if(y1.boneTexture===null)y1.computeBoneTexture();R1.setValue(j,"boneTexture",y1.boneTexture,F0)}}if(l.isBatchedMesh){if(R1.setOptional(j,l,"batchingTexture"),R1.setValue(j,"batchingTexture",l._matricesTexture,F0),R1.setOptional(j,l,"batchingIdTexture"),R1.setValue(j,"batchingIdTexture",l._indirectTexture,F0),R1.setOptional(j,l,"batchingColorTexture"),l._colorsTexture!==null)R1.setValue(j,"batchingColorTexture",l._colorsTexture,F0)}let Q8=c.morphAttributes;if(Q8.position!==void 0||Q8.normal!==void 0||Q8.color!==void 0)S0.update(l,c,n1);if(s1||j0.receiveShadow!==l.receiveShadow)j0.receiveShadow=l.receiveShadow,R1.setValue(j,"receiveShadow",l.receiveShadow);if(n.isMeshGouraudMaterial&&n.envMap!==null)J8.envMap.value=z0,J8.flipEnvMap.value=z0.isCubeTexture&&z0.isRenderTargetTexture===!1?-1:1;if(n.isMeshStandardMaterial&&n.envMap===null&&p.environment!==null)J8.envMapIntensity.value=p.environmentIntensity;if(s1){if(R1.setValue(j,"toneMappingExposure",D.toneMappingExposure),j0.needsLights)IY(J8,m7);if(X0&&n.fog===!0)a.refreshFogUniforms(J8,X0);a.refreshMaterialUniforms(J8,n,d,b,N.state.transmissionRenderTarget[B.id]),D9.upload(j,_5(j0),J8,F0)}if(n.isShaderMaterial&&n.uniformsNeedUpdate===!0)D9.upload(j,_5(j0),J8,F0),n.uniformsNeedUpdate=!1;if(n.isSpriteMaterial)R1.setValue(j,"center",l.center);if(R1.setValue(j,"modelViewMatrix",l.modelViewMatrix),R1.setValue(j,"normalMatrix",l.normalMatrix),R1.setValue(j,"modelMatrix",l.matrixWorld),n.isShaderMaterial||n.isRawShaderMaterial){let y1=n.uniformsGroups;for(let g1=0,vJ=y1.length;g1<vJ;g1++){let B6=y1[g1];Y0.update(B6,n1),Y0.bind(B6,n1)}}return n1}function IY(B,p){B.ambientLightColor.needsUpdate=p,B.lightProbe.needsUpdate=p,B.directionalLights.needsUpdate=p,B.directionalLightShadows.needsUpdate=p,B.pointLights.needsUpdate=p,B.pointLightShadows.needsUpdate=p,B.spotLights.needsUpdate=p,B.spotLightShadows.needsUpdate=p,B.rectAreaLights.needsUpdate=p,B.hemisphereLights.needsUpdate=p}function PY(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(B,p,c){let n=V0.get(B);if(n.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,n.__autoAllocateDepthBuffer===!1)n.__useRenderToTexture=!1;V0.get(B.texture).__webglTexture=p,V0.get(B.depthTexture).__webglTexture=n.__autoAllocateDepthBuffer?void 0:c,n.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,p){let c=V0.get(B);c.__webglFramebuffer=p,c.__useDefaultFramebuffer=p===void 0};let AY=j.createFramebuffer();this.setRenderTarget=function(B,p=0,c=0){A=B,T=p,P=c;let n=!0,l=null,X0=!1,O0=!1;if(B){let z0=V0.get(B);if(z0.__useDefaultFramebuffer!==void 0)M0.bindFramebuffer(j.FRAMEBUFFER,null),n=!1;else if(z0.__webglFramebuffer===void 0)F0.setupRenderTarget(B);else if(z0.__hasExternalTextures)F0.rebindTextures(B,V0.get(B.texture).__webglTexture,V0.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let w0=B.depthTexture;if(z0.__boundDepthTexture!==w0){if(w0!==null&&V0.has(w0)&&(B.width!==w0.image.width||B.height!==w0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F0.setupDepthRenderbuffer(B)}}let v0=B.texture;if(v0.isData3DTexture||v0.isDataArrayTexture||v0.isCompressedArrayTexture)O0=!0;let h0=V0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(h0[p]))l=h0[p][c];else l=h0[p];X0=!0}else if(B.samples>0&&F0.useMultisampledRTT(B)===!1)l=V0.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(h0))l=h0[c];else l=h0;L.copy(B.viewport),C.copy(B.scissor),I=B.scissorTest}else L.copy(t).multiplyScalar(d).floor(),C.copy(Z0).multiplyScalar(d).floor(),I=E0;if(c!==0)l=AY;if(M0.bindFramebuffer(j.FRAMEBUFFER,l)&&n)M0.drawBuffers(B,l);if(M0.viewport(L),M0.scissor(C),M0.setScissorTest(I),X0){let z0=V0.get(B.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+p,z0.__webglTexture,c)}else if(O0){let z0=p;for(let v0=0;v0<B.textures.length;v0++){let h0=V0.get(B.textures[v0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+v0,h0.__webglTexture,c,z0)}}else if(B!==null&&c!==0){let z0=V0.get(B.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,z0.__webglTexture,c)}y=-1},this.readRenderTargetPixels=function(B,p,c,n,l,X0,O0,k0=0){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z0=V0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&O0!==void 0)z0=z0[O0];if(z0){M0.bindFramebuffer(j.FRAMEBUFFER,z0);try{let v0=B.textures[k0],h0=v0.format,w0=v0.type;if(!I0.textureFormatReadable(h0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I0.textureTypeReadable(w0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(p>=0&&p<=B.width-n&&(c>=0&&c<=B.height-l)){if(B.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+k0);j.readPixels(p,c,n,l,J0.convert(h0),J0.convert(w0),X0)}}finally{let v0=A!==null?V0.get(A).__webglFramebuffer:null;M0.bindFramebuffer(j.FRAMEBUFFER,v0)}}},this.readRenderTargetPixelsAsync=async function(B,p,c,n,l,X0,O0,k0=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z0=V0.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&O0!==void 0)z0=z0[O0];if(z0)if(p>=0&&p<=B.width-n&&(c>=0&&c<=B.height-l)){M0.bindFramebuffer(j.FRAMEBUFFER,z0);let v0=B.textures[k0],h0=v0.format,w0=v0.type;if(!I0.textureFormatReadable(h0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I0.textureTypeReadable(w0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let s0=j.createBuffer();if(j.bindBuffer(j.PIXEL_PACK_BUFFER,s0),j.bufferData(j.PIXEL_PACK_BUFFER,X0.byteLength,j.STREAM_READ),B.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+k0);j.readPixels(p,c,n,l,J0.convert(h0),J0.convert(w0),0);let Q1=A!==null?V0.get(A).__webglFramebuffer:null;M0.bindFramebuffer(j.FRAMEBUFFER,Q1);let M1=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await KK(j,M1,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,s0),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,X0),j.deleteBuffer(s0),j.deleteSync(M1),X0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,p=null,c=0){let n=Math.pow(2,-c),l=Math.floor(B.image.width*n),X0=Math.floor(B.image.height*n),O0=p!==null?p.x:0,k0=p!==null?p.y:0;F0.setTexture2D(B,0),j.copyTexSubImage2D(j.TEXTURE_2D,c,0,0,O0,k0,l,X0),M0.unbindTexture()};let TY=j.createFramebuffer(),wY=j.createFramebuffer();if(this.copyTextureToTexture=function(B,p,c=null,n=null,l=0,X0=null){if(X0===null)if(l!==0)E7("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),X0=l,l=0;else X0=0;let O0,k0,z0,v0,h0,w0,s0,Q1,M1,G1=B.isCompressedTexture?B.mipmaps[X0]:B.image;if(c!==null)O0=c.max.x-c.min.x,k0=c.max.y-c.min.y,z0=c.isBox3?c.max.z-c.min.z:1,v0=c.min.x,h0=c.min.y,w0=c.isBox3?c.min.z:0;else{let Q8=Math.pow(2,-l);if(O0=Math.floor(G1.width*Q8),k0=Math.floor(G1.height*Q8),B.isDataArrayTexture)z0=G1.depth;else if(B.isData3DTexture)z0=Math.floor(G1.depth*Q8);else z0=1;v0=0,h0=0,w0=0}if(n!==null)s0=n.x,Q1=n.y,M1=n.z;else s0=0,Q1=0,M1=0;let W1=J0.convert(p.format),j0=J0.convert(p.type),N1;if(p.isData3DTexture)F0.setTexture3D(p,0),N1=j.TEXTURE_3D;else if(p.isDataArrayTexture||p.isCompressedArrayTexture)F0.setTexture2DArray(p,0),N1=j.TEXTURE_2D_ARRAY;else F0.setTexture2D(p,0),N1=j.TEXTURE_2D;j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,p.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,p.unpackAlignment);let r0=j.getParameter(j.UNPACK_ROW_LENGTH),n1=j.getParameter(j.UNPACK_IMAGE_HEIGHT),s6=j.getParameter(j.UNPACK_SKIP_PIXELS),s1=j.getParameter(j.UNPACK_SKIP_ROWS),m7=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,G1.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,G1.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,v0),j.pixelStorei(j.UNPACK_SKIP_ROWS,h0),j.pixelStorei(j.UNPACK_SKIP_IMAGES,w0);let R1=B.isDataArrayTexture||B.isData3DTexture,J8=p.isDataArrayTexture||p.isData3DTexture;if(B.isDepthTexture){let Q8=V0.get(B),y1=V0.get(p),g1=V0.get(Q8.__renderTarget),vJ=V0.get(y1.__renderTarget);M0.bindFramebuffer(j.READ_FRAMEBUFFER,g1.__webglFramebuffer),M0.bindFramebuffer(j.DRAW_FRAMEBUFFER,vJ.__webglFramebuffer);for(let B6=0;B6<z0;B6++){if(R1)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,V0.get(B).__webglTexture,l,w0+B6),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,V0.get(p).__webglTexture,X0,M1+B6);j.blitFramebuffer(v0,h0,O0,k0,s0,Q1,O0,k0,j.DEPTH_BUFFER_BIT,j.NEAREST)}M0.bindFramebuffer(j.READ_FRAMEBUFFER,null),M0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(l!==0||B.isRenderTargetTexture||V0.has(B)){let Q8=V0.get(B),y1=V0.get(p);M0.bindFramebuffer(j.READ_FRAMEBUFFER,TY),M0.bindFramebuffer(j.DRAW_FRAMEBUFFER,wY);for(let g1=0;g1<z0;g1++){if(R1)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Q8.__webglTexture,l,w0+g1);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Q8.__webglTexture,l);if(J8)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,y1.__webglTexture,X0,M1+g1);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,y1.__webglTexture,X0);if(l!==0)j.blitFramebuffer(v0,h0,O0,k0,s0,Q1,O0,k0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(J8)j.copyTexSubImage3D(N1,X0,s0,Q1,M1+g1,v0,h0,O0,k0);else j.copyTexSubImage2D(N1,X0,s0,Q1,v0,h0,O0,k0)}M0.bindFramebuffer(j.READ_FRAMEBUFFER,null),M0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J8)if(B.isDataTexture||B.isData3DTexture)j.texSubImage3D(N1,X0,s0,Q1,M1,O0,k0,z0,W1,j0,G1.data);else if(p.isCompressedArrayTexture)j.compressedTexSubImage3D(N1,X0,s0,Q1,M1,O0,k0,z0,W1,G1.data);else j.texSubImage3D(N1,X0,s0,Q1,M1,O0,k0,z0,W1,j0,G1);else if(B.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,X0,s0,Q1,O0,k0,W1,j0,G1.data);else if(B.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,X0,s0,Q1,G1.width,G1.height,W1,G1.data);else j.texSubImage2D(j.TEXTURE_2D,X0,s0,Q1,O0,k0,W1,j0,G1);if(j.pixelStorei(j.UNPACK_ROW_LENGTH,r0),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,n1),j.pixelStorei(j.UNPACK_SKIP_PIXELS,s6),j.pixelStorei(j.UNPACK_SKIP_ROWS,s1),j.pixelStorei(j.UNPACK_SKIP_IMAGES,m7),X0===0&&p.generateMipmaps)j.generateMipmap(N1);M0.unbindTexture()},this.initRenderTarget=function(B){if(V0.get(B).__webglFramebuffer===void 0)F0.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)F0.setTextureCube(B,0);else if(B.isData3DTexture)F0.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)F0.setTexture2DArray(B,0);else F0.setTexture2D(B,0);M0.unbindTexture()},this.resetState=function(){T=0,P=0,A=null,M0.reset(),U0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return eQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace($){this._outputColorSpace=$;let J=this.getContext();J.drawingBufferColorSpace=o0._getDrawingBufferColorSpace($),J.unpackColorSpace=o0._getUnpackColorSpace()}}function SZ($,J){if(J===iQ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),$;if(J===L7||J===X9){let Q=$.getIndex();if(Q===null){let X=[],H=$.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)X.push(Y);$.setIndex(X),Q=$.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),$}let Z=Q.count-2,W=[];if(J===L7)for(let X=1;X<=Z;X++)W.push(Q.getX(0)),W.push(Q.getX(X)),W.push(Q.getX(X+1));else for(let X=0;X<Z;X++)if(X%2===0)W.push(Q.getX(X)),W.push(Q.getX(X+1)),W.push(Q.getX(X+2));else W.push(Q.getX(X+2)),W.push(Q.getX(X+1)),W.push(Q.getX(X));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let K=$.clone();return K.setIndex(W),K.clearGroups(),K}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",J),$}class hZ extends c8{constructor($){super($);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(J){return new ZX(J)}),this.register(function(J){return new WX(J)}),this.register(function(J){return new NX(J)}),this.register(function(J){return new RX(J)}),this.register(function(J){return new FX(J)}),this.register(function(J){return new XX(J)}),this.register(function(J){return new HX(J)}),this.register(function(J){return new YX(J)}),this.register(function(J){return new UX(J)}),this.register(function(J){return new QX(J)}),this.register(function(J){return new GX(J)}),this.register(function(J){return new KX(J)}),this.register(function(J){return new qX(J)}),this.register(function(J){return new EX(J)}),this.register(function(J){return new $X(J)}),this.register(function(J){return new OX(J)}),this.register(function(J){return new MX(J)})}load($,J,Q,Z){let W=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let Y=q6.extractUrlBase($);K=q6.resolveURL(Y,this.path)}else K=q6.extractUrlBase($);this.manager.itemStart($);let X=function(Y){if(Z)Z(Y);else console.error(Y);W.manager.itemError($),W.manager.itemEnd($)},H=new O9(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load($,function(Y){try{W.parse(Y,K,function(U){J(U),W.manager.itemEnd($)},X)}catch(U){X(U)}},Q,X)}setDRACOLoader($){return this.dracoLoader=$,this}setKTX2Loader($){return this.ktx2Loader=$,this}setMeshoptDecoder($){return this.meshoptDecoder=$,this}register($){if(this.pluginCallbacks.indexOf($)===-1)this.pluginCallbacks.push($);return this}unregister($){if(this.pluginCallbacks.indexOf($)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf($),1);return this}parse($,J,Q,Z){let W,K={},X={},H=new TextDecoder;if(typeof $==="string")W=JSON.parse($);else if($ instanceof ArrayBuffer)if(H.decode(new Uint8Array($,0,4))===LX){try{K[n0.KHR_BINARY_GLTF]=new DX($)}catch(G){if(Z)Z(G);return}W=JSON.parse(K[n0.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode($));else W=$;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let Y=new kX(W,{path:J||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});Y.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](Y);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,K[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case n0.KHR_MATERIALS_UNLIT:K[G]=new JX;break;case n0.KHR_DRACO_MESH_COMPRESSION:K[G]=new _X(W,this.dracoLoader);break;case n0.KHR_TEXTURE_TRANSFORM:K[G]=new VX;break;case n0.KHR_MESH_QUANTIZATION:K[G]=new zX;break;default:if(E.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}Y.setExtensions(K),Y.setPlugins(X),Y.parse(Q,Z)}parseAsync($,J){let Q=this;return new Promise(function(Z,W){Q.parse($,J,Z,W)})}}function WR(){let $={};return{get:function(J){return $[J]},add:function(J,Q){$[J]=Q},remove:function(J){delete $[J]},removeAll:function(){$={}}}}var n0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $X{constructor($){this.parser=$,this.name=n0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let $=this.parser,J=this.parser.json.nodes||[];for(let Q=0,Z=J.length;Q<Z;Q++){let W=J[Q];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)$._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight($){let J=this.parser,Q="light:"+$,Z=J.cache.get(Q);if(Z)return Z;let W=J.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[$],Y,U=new y0(16777215);if(H.color!==void 0)U.setRGB(H.color[0],H.color[1],H.color[2],h1);let G=H.range!==void 0?H.range:0;switch(H.type){case"directional":Y=new t$(U),Y.target.position.set(0,0,-1),Y.add(Y.target);break;case"point":Y=new r$(U),Y.distance=G;break;case"spot":Y=new a$(U),Y.distance=G,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,Y.angle=H.spot.outerConeAngle,Y.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,Y.target.position.set(0,0,-1),Y.add(Y.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(Y.position.set(0,0,0),A8(Y,H),H.intensity!==void 0)Y.intensity=H.intensity;return Y.name=J.createUniqueName(H.name||"light_"+$),Z=Promise.resolve(Y),J.cache.add(Q,Z),Z}getDependency($,J){if($!=="light")return;return this._loadLight(J)}createNodeAttachment($){let J=this,Q=this.parser,W=Q.json.nodes[$],X=(W.extensions&&W.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(H){return Q._getNodeRef(J.cache,X,H)})}}class JX{constructor(){this.name=n0.KHR_MATERIALS_UNLIT}getMaterialType(){return I8}extendParams($,J,Q){let Z=[];$.color=new y0(1,1,1),$.opacity=1;let W=J.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let K=W.baseColorFactor;$.color.setRGB(K[0],K[1],K[2],h1),$.opacity=K[3]}if(W.baseColorTexture!==void 0)Z.push(Q.assignTexture($,"map",W.baseColorTexture,C8))}return Promise.all(Z)}}class QX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)J.emissiveIntensity=W;return Promise.resolve()}}class ZX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_CLEARCOAT}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.clearcoatFactor!==void 0)J.clearcoat=K.clearcoatFactor;if(K.clearcoatTexture!==void 0)W.push(Q.assignTexture(J,"clearcoatMap",K.clearcoatTexture));if(K.clearcoatRoughnessFactor!==void 0)J.clearcoatRoughness=K.clearcoatRoughnessFactor;if(K.clearcoatRoughnessTexture!==void 0)W.push(Q.assignTexture(J,"clearcoatRoughnessMap",K.clearcoatRoughnessTexture));if(K.clearcoatNormalTexture!==void 0){if(W.push(Q.assignTexture(J,"clearcoatNormalMap",K.clearcoatNormalTexture)),K.clearcoatNormalTexture.scale!==void 0){let X=K.clearcoatNormalTexture.scale;J.clearcoatNormalScale=new u0(X,X)}}return Promise.all(W)}}class WX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_DISPERSION}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return J.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class KX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_IRIDESCENCE}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.iridescenceFactor!==void 0)J.iridescence=K.iridescenceFactor;if(K.iridescenceTexture!==void 0)W.push(Q.assignTexture(J,"iridescenceMap",K.iridescenceTexture));if(K.iridescenceIor!==void 0)J.iridescenceIOR=K.iridescenceIor;if(J.iridescenceThicknessRange===void 0)J.iridescenceThicknessRange=[100,400];if(K.iridescenceThicknessMinimum!==void 0)J.iridescenceThicknessRange[0]=K.iridescenceThicknessMinimum;if(K.iridescenceThicknessMaximum!==void 0)J.iridescenceThicknessRange[1]=K.iridescenceThicknessMaximum;if(K.iridescenceThicknessTexture!==void 0)W.push(Q.assignTexture(J,"iridescenceThicknessMap",K.iridescenceThicknessTexture));return Promise.all(W)}}class XX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_SHEEN}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];J.sheenColor=new y0(0,0,0),J.sheenRoughness=0,J.sheen=1;let K=Z.extensions[this.name];if(K.sheenColorFactor!==void 0){let X=K.sheenColorFactor;J.sheenColor.setRGB(X[0],X[1],X[2],h1)}if(K.sheenRoughnessFactor!==void 0)J.sheenRoughness=K.sheenRoughnessFactor;if(K.sheenColorTexture!==void 0)W.push(Q.assignTexture(J,"sheenColorMap",K.sheenColorTexture,C8));if(K.sheenRoughnessTexture!==void 0)W.push(Q.assignTexture(J,"sheenRoughnessMap",K.sheenRoughnessTexture));return Promise.all(W)}}class HX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_TRANSMISSION}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.transmissionFactor!==void 0)J.transmission=K.transmissionFactor;if(K.transmissionTexture!==void 0)W.push(Q.assignTexture(J,"transmissionMap",K.transmissionTexture));return Promise.all(W)}}class YX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_VOLUME}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.thickness=K.thicknessFactor!==void 0?K.thicknessFactor:0,K.thicknessTexture!==void 0)W.push(Q.assignTexture(J,"thicknessMap",K.thicknessTexture));J.attenuationDistance=K.attenuationDistance||1/0;let X=K.attenuationColor||[1,1,1];return J.attenuationColor=new y0().setRGB(X[0],X[1],X[2],h1),Promise.all(W)}}class UX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_IOR}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Z=this.parser.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return J.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class GX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_SPECULAR}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.specularIntensity=K.specularFactor!==void 0?K.specularFactor:1,K.specularTexture!==void 0)W.push(Q.assignTexture(J,"specularIntensityMap",K.specularTexture));let X=K.specularColorFactor||[1,1,1];if(J.specularColor=new y0().setRGB(X[0],X[1],X[2],h1),K.specularColorTexture!==void 0)W.push(Q.assignTexture(J,"specularColorMap",K.specularColorTexture,C8));return Promise.all(W)}}class EX{constructor($){this.parser=$,this.name=n0.EXT_MATERIALS_BUMP}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(J.bumpScale=K.bumpFactor!==void 0?K.bumpFactor:1,K.bumpTexture!==void 0)W.push(Q.assignTexture(J,"bumpMap",K.bumpTexture));return Promise.all(W)}}class qX{constructor($){this.parser=$,this.name=n0.KHR_MATERIALS_ANISOTROPY}getMaterialType($){let Q=this.parser.json.materials[$];if(!Q.extensions||!Q.extensions[this.name])return null;return e1}extendMaterialParams($,J){let Q=this.parser,Z=Q.json.materials[$];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.anisotropyStrength!==void 0)J.anisotropy=K.anisotropyStrength;if(K.anisotropyRotation!==void 0)J.anisotropyRotation=K.anisotropyRotation;if(K.anisotropyTexture!==void 0)W.push(Q.assignTexture(J,"anisotropyMap",K.anisotropyTexture));return Promise.all(W)}}class NX{constructor($){this.parser=$,this.name=n0.KHR_TEXTURE_BASISU}loadTexture($){let J=this.parser,Q=J.json,Z=Q.textures[$];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],K=J.options.ktx2Loader;if(!K)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return J.loadTextureImage($,W.source,K)}}class RX{constructor($){this.parser=$,this.name=n0.EXT_TEXTURE_WEBP}loadTexture($){let J=this.name,Q=this.parser,Z=Q.json,W=Z.textures[$];if(!W.extensions||!W.extensions[J])return null;let K=W.extensions[J],X=Z.images[K.source],H=Q.textureLoader;if(X.uri){let Y=Q.options.manager.getHandler(X.uri);if(Y!==null)H=Y}return Q.loadTextureImage($,K.source,H)}}class FX{constructor($){this.parser=$,this.name=n0.EXT_TEXTURE_AVIF}loadTexture($){let J=this.name,Q=this.parser,Z=Q.json,W=Z.textures[$];if(!W.extensions||!W.extensions[J])return null;let K=W.extensions[J],X=Z.images[K.source],H=Q.textureLoader;if(X.uri){let Y=Q.options.manager.getHandler(X.uri);if(Y!==null)H=Y}return Q.loadTextureImage($,K.source,H)}}class OX{constructor($){this.name=n0.EXT_MESHOPT_COMPRESSION,this.parser=$}loadBufferView($){let J=this.parser.json,Q=J.bufferViews[$];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(J.extensionsRequired&&J.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(X){let H=Z.byteOffset||0,Y=Z.byteLength||0,U=Z.count,G=Z.byteStride,E=new Uint8Array(X,H,Y);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,E,Z.mode,Z.filter).then(function(q){return q.buffer});else return K.ready.then(function(){let q=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(q),U,G,E,Z.mode,Z.filter),q})})}else return null}}class MX{constructor($){this.name=n0.EXT_MESH_GPU_INSTANCING,this.parser=$}createNodeMesh($){let J=this.parser.json,Q=J.nodes[$];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=J.meshes[Q.mesh];for(let Y of Z.primitives)if(Y.mode!==Y8.TRIANGLES&&Y.mode!==Y8.TRIANGLE_STRIP&&Y.mode!==Y8.TRIANGLE_FAN&&Y.mode!==void 0)return null;let K=Q.extensions[this.name].attributes,X=[],H={};for(let Y in K)X.push(this.parser.getDependency("accessor",K[Y]).then((U)=>{return H[Y]=U,H[Y]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh($)),Promise.all(X).then((Y)=>{let U=Y.pop(),G=U.isGroup?U.children:[U],E=Y[0].count,q=[];for(let F of G){let O=new g0,M=new x,N=new O8,R=new x(1,1,1),_=new p$(F.geometry,F.material,E);for(let D=0;D<E;D++){if(H.TRANSLATION)M.fromBufferAttribute(H.TRANSLATION,D);if(H.ROTATION)N.fromBufferAttribute(H.ROTATION,D);if(H.SCALE)R.fromBufferAttribute(H.SCALE,D);_.setMatrixAt(D,O.compose(M,N,R))}for(let D in H)if(D==="_COLOR_0"){let k=H[D];_.instanceColor=new T6(k.array,k.itemSize,k.normalized)}else if(D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE")F.geometry.setAttribute(D,H[D]);E1.prototype.copy.call(_,F),this.parser.assignFinalMaterial(_),q.push(_)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var LX="glTF",_9=12,aK={JSON:1313821514,BIN:5130562};class DX{constructor($){this.name=n0.KHR_BINARY_GLTF,this.content=null,this.body=null;let J=new DataView($,0,_9),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array($.slice(0,4))),version:J.getUint32(4,!0),length:J.getUint32(8,!0)},this.header.magic!==LX)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-_9,W=new DataView($,_9),K=0;while(K<Z){let X=W.getUint32(K,!0);K+=4;let H=W.getUint32(K,!0);if(K+=4,H===aK.JSON){let Y=new Uint8Array($,_9+K,X);this.content=Q.decode(Y)}else if(H===aK.BIN){let Y=_9+K;this.body=$.slice(Y,Y+X)}K+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class _X{constructor($,J){if(!J)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n0.KHR_DRACO_MESH_COMPRESSION,this.json=$,this.dracoLoader=J,this.dracoLoader.preload()}decodePrimitive($,J){let Q=this.json,Z=this.dracoLoader,W=$.extensions[this.name].bufferView,K=$.extensions[this.name].attributes,X={},H={},Y={};for(let U in K){let G=yZ[U]||U.toLowerCase();X[G]=K[U]}for(let U in $.attributes){let G=yZ[U]||U.toLowerCase();if(K[U]!==void 0){let E=Q.accessors[$.attributes[U]],q=w7[E.componentType];Y[G]=q.name,H[G]=E.normalized===!0}}return J.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){Z.decodeDracoFile(U,function(q){for(let F in q.attributes){let O=q.attributes[F],M=H[F];if(M!==void 0)O.normalized=M}G(q)},X,Y,h1,E)})})}}class VX{constructor(){this.name=n0.KHR_TEXTURE_TRANSFORM}extendTexture($,J){if((J.texCoord===void 0||J.texCoord===$.channel)&&J.offset===void 0&&J.rotation===void 0&&J.scale===void 0)return $;if($=$.clone(),J.texCoord!==void 0)$.channel=J.texCoord;if(J.offset!==void 0)$.offset.fromArray(J.offset);if(J.rotation!==void 0)$.rotation=J.rotation;if(J.scale!==void 0)$.repeat.fromArray(J.scale);return $.needsUpdate=!0,$}}class zX{constructor(){this.name=n0.KHR_MESH_QUANTIZATION}}class xZ extends Y6{constructor($,J,Q,Z){super($,J,Q,Z)}copySampleValue_($){let J=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=$*Z*3+Z;for(let K=0;K!==Z;K++)J[K]=Q[W+K];return J}interpolate_($,J,Q,Z){let W=this.resultBuffer,K=this.sampleValues,X=this.valueSize,H=X*2,Y=X*3,U=Z-J,G=(Q-J)/U,E=G*G,q=E*G,F=$*Y,O=F-Y,M=-2*q+3*E,N=q-E,R=1-M,_=N-E+G;for(let D=0;D!==X;D++){let k=K[O+D+X],T=K[O+D+H]*U,P=K[F+D+X],A=K[F+D]*U;W[D]=R*k+_*T+M*P+N*A}return W}}var KR=new O8;class BX extends xZ{interpolate_($,J,Q,Z){let W=super.interpolate_($,J,Q,Z);return KR.fromArray(W).normalize().toArray(W),W}}var Y8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},w7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rK={9728:u8,9729:p1,9984:I$,9985:F7,9986:S6,9987:m8},tK={33071:k$,33648:C$,10497:R7},jZ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yZ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},N6={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XR={CUBICSPLINE:void 0,LINEAR:j$,STEP:oQ},fZ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HR($){if($.DefaultMaterial===void 0)$.DefaultMaterial=new I7({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Z6});return $.DefaultMaterial}function x6($,J,Q){for(let Z in Q.extensions)if($[Z]===void 0)J.userData.gltfExtensions=J.userData.gltfExtensions||{},J.userData.gltfExtensions[Z]=Q.extensions[Z]}function A8($,J){if(J.extras!==void 0)if(typeof J.extras==="object")Object.assign($.userData,J.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+J.extras)}function YR($,J,Q){let Z=!1,W=!1,K=!1;for(let U=0,G=J.length;U<G;U++){let E=J[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)K=!0;if(Z&&W&&K)break}if(!Z&&!W&&!K)return Promise.resolve($);let X=[],H=[],Y=[];for(let U=0,G=J.length;U<G;U++){let E=J[U];if(Z){let q=E.POSITION!==void 0?Q.getDependency("accessor",E.POSITION):$.attributes.position;X.push(q)}if(W){let q=E.NORMAL!==void 0?Q.getDependency("accessor",E.NORMAL):$.attributes.normal;H.push(q)}if(K){let q=E.COLOR_0!==void 0?Q.getDependency("accessor",E.COLOR_0):$.attributes.color;Y.push(q)}}return Promise.all([Promise.all(X),Promise.all(H),Promise.all(Y)]).then(function(U){let G=U[0],E=U[1],q=U[2];if(Z)$.morphAttributes.position=G;if(W)$.morphAttributes.normal=E;if(K)$.morphAttributes.color=q;return $.morphTargetsRelative=!0,$})}function UR($,J){if($.updateMorphTargets(),J.weights!==void 0)for(let Q=0,Z=J.weights.length;Q<Z;Q++)$.morphTargetInfluences[Q]=J.weights[Q];if(J.extras&&Array.isArray(J.extras.targetNames)){let Q=J.extras.targetNames;if($.morphTargetInfluences.length===Q.length){$.morphTargetDictionary={};for(let Z=0,W=Q.length;Z<W;Z++)$.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GR($){let J,Q=$.extensions&&$.extensions[n0.KHR_DRACO_MESH_COMPRESSION];if(Q)J="draco:"+Q.bufferView+":"+Q.indices+":"+vZ(Q.attributes);else J=$.indices+":"+vZ($.attributes)+":"+$.mode;if($.targets!==void 0)for(let Z=0,W=$.targets.length;Z<W;Z++)J+=":"+vZ($.targets[Z]);return J}function vZ($){let J="",Q=Object.keys($).sort();for(let Z=0,W=Q.length;Z<W;Z++)J+=Q[Z]+":"+$[Q[Z]]+";";return J}function bZ($){switch($){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ER($){if($.search(/\.jpe?g($|\?)/i)>0||$.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if($.search(/\.webp($|\?)/i)>0||$.search(/^data\:image\/webp/)===0)return"image/webp";if($.search(/\.ktx2($|\?)/i)>0||$.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var qR=new g0;class kX{constructor($={},J={}){this.json=$,this.extensions={},this.plugins={},this.options=J,this.cache=new WR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,W=!1,K=-1;if(typeof navigator<"u"){let X=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(X)===!0;let H=X.match(/Version\/(\d+)/);Z=Q&&H?parseInt(H[1],10):-1,W=X.indexOf("Firefox")>-1,K=W?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||W&&K<98)this.textureLoader=new o$(this.options.manager);else this.textureLoader=new e$(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new O9(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions($){this.extensions=$}setPlugins($){this.plugins=$}parse($,J){let Q=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(K){let X={scene:K[0][Z.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:Z.asset,parser:Q,userData:{}};return x6(W,X,Z),A8(X,Z),Promise.all(Q._invokeAll(function(H){return H.afterRoot&&H.afterRoot(X)})).then(function(){for(let H of X.scenes)H.updateMatrixWorld();$(X)})}).catch(J)}_markDefs(){let $=this.json.nodes||[],J=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z].joints;for(let X=0,H=K.length;X<H;X++)$[K[X]].isBone=!0}for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)Q[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef($,J){if(J===void 0)return;if($.refs[J]===void 0)$.refs[J]=$.uses[J]=0;$.refs[J]++}_getNodeRef($,J,Q){if($.refs[J]<=1)return Q;let Z=Q.clone(),W=(K,X)=>{let H=this.associations.get(K);if(H!=null)this.associations.set(X,H);for(let[Y,U]of K.children.entries())W(U,X.children[Y])};return W(Q,Z),Z.name+="_instance_"+$.uses[J]++,Z}_invokeOne($){let J=Object.values(this.plugins);J.push(this);for(let Q=0;Q<J.length;Q++){let Z=$(J[Q]);if(Z)return Z}return null}_invokeAll($){let J=Object.values(this.plugins);J.unshift(this);let Q=[];for(let Z=0;Z<J.length;Z++){let W=$(J[Z]);if(W)Q.push(W)}return Q}getDependency($,J){let Q=$+":"+J,Z=this.cache.get(Q);if(!Z){switch($){case"scene":Z=this.loadScene(J);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(J)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(J)});break;case"accessor":Z=this.loadAccessor(J);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(J)});break;case"buffer":Z=this.loadBuffer(J);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(J)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(J)});break;case"skin":Z=this.loadSkin(J);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(J)});break;case"camera":Z=this.loadCamera(J);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency($,J)}),!Z)throw Error("Unknown type: "+$);break}this.cache.add(Q,Z)}return Z}getDependencies($){let J=this.cache.get($);if(!J){let Q=this,Z=this.json[$+($==="mesh"?"es":"s")]||[];J=Promise.all(Z.map(function(W,K){return Q.getDependency($,K)})),this.cache.add($,J)}return J}loadBuffer($){let J=this.json.buffers[$],Q=this.fileLoader;if(J.type&&J.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+J.type+" buffer type is not supported.");if(J.uri===void 0&&$===0)return Promise.resolve(this.extensions[n0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,K){Q.load(q6.resolveURL(J.uri,Z.path),W,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+J.uri+'".'))})})}loadBufferView($){let J=this.json.bufferViews[$];return this.getDependency("buffer",J.buffer).then(function(Q){let Z=J.byteLength||0,W=J.byteOffset||0;return Q.slice(W,W+Z)})}loadAccessor($){let J=this,Q=this.json,Z=this.json.accessors[$];if(Z.bufferView===void 0&&Z.sparse===void 0){let K=jZ[Z.type],X=w7[Z.componentType],H=Z.normalized===!0,Y=new X(Z.count*K);return Promise.resolve(new X1(Y,K,H))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(K){let X=K[0],H=jZ[Z.type],Y=w7[Z.componentType],U=Y.BYTES_PER_ELEMENT,G=U*H,E=Z.byteOffset||0,q=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,F=Z.normalized===!0,O,M;if(q&&q!==G){let N=Math.floor(E/q),R="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+N+":"+Z.count,_=J.cache.get(R);if(!_)O=new Y(X,N*q,Z.count*q/U),_=new U9(O,q/U),J.cache.add(R,_);M=new B7(_,H,E%q/U,F)}else{if(X===null)O=new Y(Z.count*H);else O=new Y(X,E,Z.count*H);M=new X1(O,H,F)}if(Z.sparse!==void 0){let N=jZ.SCALAR,R=w7[Z.sparse.indices.componentType],_=Z.sparse.indices.byteOffset||0,D=Z.sparse.values.byteOffset||0,k=new R(K[1],_,Z.sparse.count*N),T=new Y(K[2],D,Z.sparse.count*H);if(X!==null)M=new X1(M.array.slice(),M.itemSize,M.normalized);M.normalized=!1;for(let P=0,A=k.length;P<A;P++){let y=k[P];if(M.setX(y,T[P*H]),H>=2)M.setY(y,T[P*H+1]);if(H>=3)M.setZ(y,T[P*H+2]);if(H>=4)M.setW(y,T[P*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=F}return M})}loadTexture($){let J=this.json,Q=this.options,W=J.textures[$].source,K=J.images[W],X=this.textureLoader;if(K.uri){let H=Q.manager.getHandler(K.uri);if(H!==null)X=H}return this.loadTextureImage($,W,X)}loadTextureImage($,J,Q){let Z=this,W=this.json,K=W.textures[$],X=W.images[J],H=(X.uri||X.bufferView)+":"+K.sampler;if(this.textureCache[H])return this.textureCache[H];let Y=this.loadImageSource(J,Q).then(function(U){if(U.flipY=!1,U.name=K.name||X.name||"",U.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)U.name=X.uri;let E=(W.samplers||{})[K.sampler]||{};return U.magFilter=rK[E.magFilter]||p1,U.minFilter=rK[E.minFilter]||m8,U.wrapS=tK[E.wrapS]||R7,U.wrapT=tK[E.wrapT]||R7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==u8&&U.minFilter!==p1,Z.associations.set(U,{textures:$}),U}).catch(function(){return null});return this.textureCache[H]=Y,Y}loadImageSource($,J){let Q=this,Z=this.json,W=this.options;if(this.sourceCache[$]!==void 0)return this.sourceCache[$].then((G)=>G.clone());let K=Z.images[$],X=self.URL||self.webkitURL,H=K.uri||"",Y=!1;if(K.bufferView!==void 0)H=Q.getDependency("bufferView",K.bufferView).then(function(G){Y=!0;let E=new Blob([G],{type:K.mimeType});return H=X.createObjectURL(E),H});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+$+" is missing URI and bufferView");let U=Promise.resolve(H).then(function(G){return new Promise(function(E,q){let F=E;if(J.isImageBitmapLoader===!0)F=function(O){let M=new L1(O);M.needsUpdate=!0,E(M)};J.load(q6.resolveURL(G,W.path),F,void 0,q)})}).then(function(G){if(Y===!0)X.revokeObjectURL(H);return A8(G,K),G.userData.mimeType=K.mimeType||ER(K.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),G});return this.sourceCache[$]=U,U}assignTexture($,J,Q,Z){let W=this;return this.getDependency("texture",Q.index).then(function(K){if(!K)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)K=K.clone(),K.channel=Q.texCoord;if(W.extensions[n0.KHR_TEXTURE_TRANSFORM]){let X=Q.extensions!==void 0?Q.extensions[n0.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let H=W.associations.get(K);K=W.extensions[n0.KHR_TEXTURE_TRANSFORM].extendTexture(K,X),W.associations.set(K,H)}}if(Z!==void 0)K.colorSpace=Z;return $[J]=K,K})}assignFinalMaterial($){let{geometry:J,material:Q}=$,Z=J.attributes.tangent===void 0,W=J.attributes.color!==void 0,K=J.attributes.normal===void 0;if($.isPoints){let X="PointsMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new R9,t1.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,H.sizeAttenuation=!1,this.cache.add(X,H);Q=H}else if($.isLine){let X="LineBasicMaterial:"+Q.uuid,H=this.cache.get(X);if(!H)H=new N9,t1.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,this.cache.add(X,H);Q=H}if(Z||W||K){let X="ClonedMaterial:"+Q.uuid+":";if(Z)X+="derivative-tangents:";if(W)X+="vertex-colors:";if(K)X+="flat-shading:";let H=this.cache.get(X);if(!H){if(H=Q.clone(),W)H.vertexColors=!0;if(K)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(X,H),this.associations.set(H,this.associations.get(Q))}Q=H}$.material=Q}getMaterialType(){return I7}loadMaterial($){let J=this,Q=this.json,Z=this.extensions,W=Q.materials[$],K,X={},H=W.extensions||{},Y=[];if(H[n0.KHR_MATERIALS_UNLIT]){let G=Z[n0.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),Y.push(G.extendParams(X,W,J))}else{let G=W.pbrMetallicRoughness||{};if(X.color=new y0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;X.color.setRGB(E[0],E[1],E[2],h1),X.opacity=E[3]}if(G.baseColorTexture!==void 0)Y.push(J.assignTexture(X,"map",G.baseColorTexture,C8));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)Y.push(J.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),Y.push(J.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType($)}),Y.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams($,X)})))}if(W.doubleSided===!0)X.side=H8;let U=W.alphaMode||fZ.OPAQUE;if(U===fZ.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,U===fZ.MASK)X.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&K!==I8){if(Y.push(J.assignTexture(X,"normalMap",W.normalTexture)),X.normalScale=new u0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;X.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&K!==I8){if(Y.push(J.assignTexture(X,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)X.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&K!==I8){let G=W.emissiveFactor;X.emissive=new y0().setRGB(G[0],G[1],G[2],h1)}if(W.emissiveTexture!==void 0&&K!==I8)Y.push(J.assignTexture(X,"emissiveMap",W.emissiveTexture,C8));return Promise.all(Y).then(function(){let G=new K(X);if(W.name)G.name=W.name;if(A8(G,W),J.associations.set(G,{materials:$}),W.extensions)x6(Z,G,W);return G})}createUniqueName($){let J=t0.sanitizeNodeName($||"");if(J in this.nodeNamesUsed)return J+"_"+ ++this.nodeNamesUsed[J];else return this.nodeNamesUsed[J]=0,J}loadGeometries($){let J=this,Q=this.extensions,Z=this.primitiveCache;function W(X){return Q[n0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,J).then(function(H){return eK(H,X,J)})}let K=[];for(let X=0,H=$.length;X<H;X++){let Y=$[X],U=GR(Y),G=Z[U];if(G)K.push(G.promise);else{let E;if(Y.extensions&&Y.extensions[n0.KHR_DRACO_MESH_COMPRESSION])E=W(Y);else E=eK(new x1,Y,J);Z[U]={primitive:Y,promise:E},K.push(E)}}return Promise.all(K)}loadMesh($){let J=this,Q=this.json,Z=this.extensions,W=Q.meshes[$],K=W.primitives,X=[];for(let H=0,Y=K.length;H<Y;H++){let U=K[H].material===void 0?HR(this.cache):this.getDependency("material",K[H].material);X.push(U)}return X.push(J.loadGeometries(K)),Promise.all(X).then(function(H){let Y=H.slice(0,H.length-1),U=H[H.length-1],G=[];for(let q=0,F=U.length;q<F;q++){let O=U[q],M=K[q],N,R=Y[q];if(M.mode===Y8.TRIANGLES||M.mode===Y8.TRIANGLE_STRIP||M.mode===Y8.TRIANGLE_FAN||M.mode===void 0){if(N=W.isSkinnedMesh===!0?new x$(O,R):new A1(O,R),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(M.mode===Y8.TRIANGLE_STRIP)N.geometry=SZ(N.geometry,X9);else if(M.mode===Y8.TRIANGLE_FAN)N.geometry=SZ(N.geometry,L7)}else if(M.mode===Y8.LINES)N=new l$(O,R);else if(M.mode===Y8.LINE_STRIP)N=new k7(O,R);else if(M.mode===Y8.LINE_LOOP)N=new u$(O,R);else if(M.mode===Y8.POINTS)N=new C7(O,R);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);if(Object.keys(N.geometry.morphAttributes).length>0)UR(N,W);if(N.name=J.createUniqueName(W.name||"mesh_"+$),A8(N,W),M.extensions)x6(Z,N,M);J.assignFinalMaterial(N),G.push(N)}for(let q=0,F=G.length;q<F;q++)J.associations.set(G[q],{meshes:$,primitives:q});if(G.length===1){if(W.extensions)x6(Z,G[0],W);return G[0]}let E=new K8;if(W.extensions)x6(Z,E,W);J.associations.set(E,{meshes:$});for(let q=0,F=G.length;q<F;q++)E.add(G[q]);return E})}loadCamera($){let J,Q=this.json.cameras[$],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")J=new T1(F1.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")J=new E6(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)J.name=this.createUniqueName(Q.name);return A8(J,Q),Promise.resolve(J)}loadSkin($){let J=this.json.skins[$],Q=[];for(let Z=0,W=J.joints.length;Z<W;Z++)Q.push(this._loadNodeShallow(J.joints[Z]));if(J.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",J.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let W=Z.pop(),K=Z,X=[],H=[];for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];if(G){X.push(G);let E=new g0;if(W!==null)E.fromArray(W.array,Y*16);H.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',J.joints[Y])}return new E9(X,H)})}loadAnimation($){let J=this.json,Q=this,Z=J.animations[$],W=Z.name?Z.name:"animation_"+$,K=[],X=[],H=[],Y=[],U=[];for(let G=0,E=Z.channels.length;G<E;G++){let q=Z.channels[G],F=Z.samplers[q.sampler],O=q.target,M=O.node,N=Z.parameters!==void 0?Z.parameters[F.input]:F.input,R=Z.parameters!==void 0?Z.parameters[F.output]:F.output;if(O.node===void 0)continue;K.push(this.getDependency("node",M)),X.push(this.getDependency("accessor",N)),H.push(this.getDependency("accessor",R)),Y.push(F),U.push(O)}return Promise.all([Promise.all(K),Promise.all(X),Promise.all(H),Promise.all(Y),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],F=G[2],O=G[3],M=G[4],N=[];for(let _=0,D=E.length;_<D;_++){let k=E[_],T=q[_],P=F[_],A=O[_],y=M[_];if(k===void 0)continue;if(k.updateMatrix)k.updateMatrix();let z=Q._createAnimationTracks(k,T,P,A,y);if(z)for(let L=0;L<z.length;L++)N.push(z[L])}let R=new s$(W,void 0,N);return A8(R,Z),R})}createNodeMesh($){let J=this.json,Q=this,Z=J.nodes[$];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(W){let K=Q._getNodeRef(Q.meshCache,Z.mesh,W);if(Z.weights!==void 0)K.traverse(function(X){if(!X.isMesh)return;for(let H=0,Y=Z.weights.length;H<Y;H++)X.morphTargetInfluences[H]=Z.weights[H]});return K})}loadNode($){let J=this.json,Q=this,Z=J.nodes[$],W=Q._loadNodeShallow($),K=[],X=Z.children||[];for(let Y=0,U=X.length;Y<U;Y++)K.push(Q.getDependency("node",X[Y]));let H=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(K),H]).then(function(Y){let U=Y[0],G=Y[1],E=Y[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,qR)});for(let q=0,F=G.length;q<F;q++)U.add(G[q]);return U})}_loadNodeShallow($){let J=this.json,Q=this.extensions,Z=this;if(this.nodeCache[$]!==void 0)return this.nodeCache[$];let W=J.nodes[$],K=W.name?Z.createUniqueName(W.name):"",X=[],H=Z._invokeOne(function(Y){return Y.createNodeMesh&&Y.createNodeMesh($)});if(H)X.push(H);if(W.camera!==void 0)X.push(Z.getDependency("camera",W.camera).then(function(Y){return Z._getNodeRef(Z.cameraCache,W.camera,Y)}));return Z._invokeAll(function(Y){return Y.createNodeAttachment&&Y.createNodeAttachment($)}).forEach(function(Y){X.push(Y)}),this.nodeCache[$]=Promise.all(X).then(function(Y){let U;if(W.isBone===!0)U=new G9;else if(Y.length>1)U=new K8;else if(Y.length===1)U=Y[0];else U=new E1;if(U!==Y[0])for(let G=0,E=Y.length;G<E;G++)U.add(Y[G]);if(W.name)U.userData.name=W.name,U.name=K;if(A8(U,W),W.extensions)x6(Q,U,W);if(W.matrix!==void 0){let G=new g0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=$,U}),this.nodeCache[$]}loadScene($){let J=this.extensions,Q=this.json.scenes[$],Z=this,W=new K8;if(Q.name)W.name=Z.createUniqueName(Q.name);if(A8(W,Q),Q.extensions)x6(J,W,Q);let K=Q.nodes||[],X=[];for(let H=0,Y=K.length;H<Y;H++)X.push(Z.getDependency("node",K[H]));return Promise.all(X).then(function(H){for(let U=0,G=H.length;U<G;U++)W.add(H[U]);let Y=(U)=>{let G=new Map;for(let[E,q]of Z.associations)if(E instanceof t1||E instanceof L1)G.set(E,q);return U.traverse((E)=>{let q=Z.associations.get(E);if(q!=null)G.set(E,q)}),G};return Z.associations=Y(W),W})}_createAnimationTracks($,J,Q,Z,W){let K=[],X=$.name?$.name:$.uuid,H=[];if(N6[W.path]===N6.weights)$.traverse(function(E){if(E.morphTargetInfluences)H.push(E.name?E.name:E.uuid)});else H.push(X);let Y;switch(N6[W.path]){case N6.weights:Y=g8;break;case N6.rotation:Y=d8;break;case N6.translation:case N6.scale:Y=p8;break;default:switch(Q.itemSize){case 1:Y=g8;break;case 2:case 3:default:Y=p8;break}break}let U=Z.interpolation!==void 0?XR[Z.interpolation]:j$,G=this._getArrayFromAccessor(Q);for(let E=0,q=H.length;E<q;E++){let F=new Y(H[E]+"."+N6[W.path],J.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(F);K.push(F)}return K}_getArrayFromAccessor($){let J=$.array;if($.normalized){let Q=bZ(J.constructor),Z=new Float32Array(J.length);for(let W=0,K=J.length;W<K;W++)Z[W]=J[W]*Q;J=Z}return J}_createCubicSplineTrackInterpolant($){$.createInterpolant=function(Q){return new(this instanceof d8?BX:xZ)(this.times,this.values,this.getValueSize()/3,Q)},$.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NR($,J,Q){let Z=J.attributes,W=new l1;if(Z.POSITION!==void 0){let H=Q.json.accessors[Z.POSITION],Y=H.min,U=H.max;if(Y!==void 0&&U!==void 0){if(W.set(new x(Y[0],Y[1],Y[2]),new x(U[0],U[1],U[2])),H.normalized){let G=bZ(w7[H.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=J.targets;if(K!==void 0){let H=new x,Y=new x;for(let U=0,G=K.length;U<G;U++){let E=K[U];if(E.POSITION!==void 0){let q=Q.json.accessors[E.POSITION],F=q.min,O=q.max;if(F!==void 0&&O!==void 0){if(Y.setX(Math.max(Math.abs(F[0]),Math.abs(O[0]))),Y.setY(Math.max(Math.abs(F[1]),Math.abs(O[1]))),Y.setZ(Math.max(Math.abs(F[2]),Math.abs(O[2]))),q.normalized){let M=bZ(w7[q.componentType]);Y.multiplyScalar(M)}H.max(Y)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}$.boundingBox=W;let X=new r1;W.getCenter(X.center),X.radius=W.min.distanceTo(W.max)/2,$.boundingSphere=X}function eK($,J,Q){let Z=J.attributes,W=[];function K(X,H){return Q.getDependency("accessor",X).then(function(Y){$.setAttribute(H,Y)})}for(let X in Z){let H=yZ[X]||X.toLowerCase();if(H in $.attributes)continue;W.push(K(Z[X],H))}if(J.indices!==void 0&&!$.index){let X=Q.getDependency("accessor",J.indices).then(function(H){$.setIndex(H)});W.push(X)}if(o0.workingColorSpace!==h1&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${o0.workingColorSpace}" not supported.`);return A8($,J),NR($,J,Q),Promise.all(W).then(function(){return J.targets!==void 0?YR($,J.targets,Q):$})}var IX=0.55;var CX=($)=>$*$*(3-2*$);function PX($){if($<0||$>=0.55)return 0;let J=CX(Math.min(1,$/0.035)),Q=1-CX(Math.max(0,($-0.035)/0.515));return 0.71*J*Q}function AX($=16){let J=Array.from({length:$},()=>({x:0,y:0,fromX:0,fromY:0,time:-100,strength:0})),Q=$,Z=0,W=-1/0,K=(X,H)=>X.strength>0&&H>=X.time&&H-X.time<0.55;return{items:J,setLimit(X){Q=Math.max(0,Math.min($,Math.floor(X)))},hasLive(X){return J.some((H)=>K(H,X))},add(X){if(!Q||!Number.isFinite(X.x+X.y+X.time+X.strength))return!1;if(X.time-W<Math.max(0.035,0.55/Q))return!1;let H=0,Y=-1;for(let U=0;U<$;U++){let G=(Z+U)%$;if(K(J[G],X.time))H++;else if(Y<0)Y=G}if(H>=Q||Y<0)return!1;return Object.assign(J[Y],X),Z=(Y+1)%$,W=X.time,!0}}}var R6=16,WJ=" .,:;i!+*xso#%@";function TX($,{reduced:J=!1}={}){let Q=document.createElement("canvas");Q.width=WJ.length*40,Q.height=40;let Z=Q.getContext("2d");if(!Z)throw Error("ASCII rendering requires a 2D canvas context.");Z.font='600 34px "Courier New", monospace',Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle";for(let I=0;I<WJ.length;I++)Z.fillText(WJ[I],I*40+20,20);let W=new m$(Q);W.minFilter=p1,W.magFilter=p1,W.generateMipmaps=!1;let K=Array.from({length:R6},()=>new i0),X=Array.from({length:R6},()=>new u0),H=AX(R6),Y=new x1,U=new u1({transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{image:{value:$},atlas:{value:W},glyphCount:{value:WJ.length},resolution:{value:new u0(1,1)},ink:{value:new x(0.93,0.94,0.9)},cellHeight:{value:12},pixelRatio:{value:1},activeBrushCount:{value:0},brushes:{value:K},endpoints:{value:X},radius:{value:80},amplitude:{value:J?35:100},dispersal:{value:0},crownOnly:{value:0},revealInPlace:{value:0},glyphGlitch:{value:new i0}},vertexShader:`
      precision highp float;
      uniform sampler2D image; uniform vec2 resolution;
      uniform float cellHeight; uniform float pixelRatio; uniform float glyphCount; uniform int activeBrushCount;
      uniform vec4 brushes[${R6}]; uniform vec2 endpoints[${R6}];
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
          for(int i=0;i<${R6};i++) {
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
      uniform sampler2D atlas; uniform float glyphCount; uniform vec3 ink;
      varying float glyph; varying float coverage;
      void main() {
        if(coverage<.1)discard;
        vec2 local=vec2(gl_PointCoord.x,1.-gl_PointCoord.y);
        vec2 uv=vec2((glyph+clamp(local.x,.025,.975))/glyphCount,clamp(local.y,.025,.975));
        float mask=texture2D(atlas,uv).a;
        if(mask<.025)discard;
        gl_FragColor=vec4(ink,mask*coverage);
      }
    `}),G=new C7(Y,U);G.name="ScreenSpaceAsciiGrid",G.frustumCulled=!1;let E=new z7;E.add(G);let q=new V7,F=1,O=1,M=1,N=12,R=12,_=null,D=0,k=1,T=1,P=0,A=0,y=22000,z=R6,L=!1;function C(){let I=(Z0)=>({columns:Math.max(1,Math.ceil(F/(Z0*0.62))),rows:Math.max(1,Math.ceil(O/Z0))}),S=I(N);if(S.columns*S.rows>y){let Z0=N,E0=Math.max(N,Math.sqrt(F*O/(y*0.62))*1.1);while(!0){let C0=I(E0);if(C0.columns*C0.rows<=y)break;E0*=1.25}for(let C0=0;C0<30;C0++){let _0=(Z0+E0)*0.5,o=I(_0);if(o.columns*o.rows>y)Z0=_0;else E0=_0}S=I(E0*1.0000000001)}let{columns:f,rows:g}=S;if(R=O/g,U.uniforms.cellHeight.value=R,f===k&&g===T&&P===F&&A===O)return!1;k=f,T=g,P=F,A=O,Y.dispose();let b=k*T;D=b;let d=new Float32Array(b*3),h=new Float32Array(b*2),i=new Float32Array(b*2),t=1947;for(let Z0=0,E0=0;Z0<T;Z0++)for(let C0=0;C0<k;C0++,E0++){let _0=(C0+0.5)/k,o=(Z0+0.5)/T;d.set([_0*F,o*O,0],E0*3),h.set([_0,o],E0*2),t=Math.imul(t,1664525)+1013904223|0;let W0=(t>>>0)/4294967296*62.83;i.set([Math.cos(W0),Math.sin(W0)],E0*2)}return Y.setAttribute("position",new X1(d,3)),Y.setAttribute("sampleUV",new X1(h,2)),Y.setAttribute("randomDirection",new X1(i,2)),Y.setDrawRange(0,b),!0}return{scene:E,camera:q,getStats(){return{glyphs:D,cellHeight:N,effectiveCellHeight:R,columns:k,rows:T}},getSourceSize(I=2){let S=Number.isFinite(I)&&I>0?I:2;return{width:Math.max(1,Math.ceil(k*S)),height:Math.max(1,Math.ceil(T*S))}},setQuality({glyphBudget:I,brushLimit:S}={}){if(L)return!1;let f=!1;if(Number.isFinite(I)){let g=Math.max(64,Math.floor(I));f=f||g!==y,y=g}if(Number.isFinite(S)){let g=F1.clamp(Math.floor(S),0,R6);f=f||g!==z,z=g,H.setLimit(g)}if(f)C();return f},resize(I,S,f){if(L)return!1;let g=Math.max(1,Math.round(I)),b=Math.max(1,Math.round(S)),d=Number.isFinite(f)&&f>0?f:1;if(g===F&&b===O&&d===M&&D)return!1;let h=g!==F||b!==O;F=g,O=b,M=d,U.uniforms.resolution.value.set(F,O),U.uniforms.pixelRatio.value=M;let i=F1.clamp(O*0.13,65,110);if(U.uniforms.radius.value=i,U.uniforms.amplitude.value=i*(J?0.52:1.55),h||!D)C();return!0},update(I){if(L)return!1;let S=0;for(let f of H.items){let g=PX(I-f.time)*f.strength;if(g<=0)continue;K[S].set(f.fromX,f.fromY,g,0),X[S].set(f.x,f.y),S++}return U.uniforms.activeBrushCount.value=S,H.hasLive(I)},isAnimating(I){return!L&&(H.hasLive(I)||U.uniforms.activeBrushCount.value>0)},setInk(I){if(!L)U.uniforms.ink.value.copy(I)},setGlyphGlitch(I,S,f,g){if(L)return!1;let b=U.uniforms.glyphGlitch.value;if(b.z===0&&f===0)return!1;if(b.x===I&&b.y===S&&b.z===f&&b.w===g)return!1;return b.set(I,S,f,g),!0},setScatter(I,{region:S="all",mode:f="scatter"}={}){if(L||!Number.isFinite(I))return!1;let g=F1.clamp(I,0,1),b=S==="crown"?1:0,d=f==="appear"?1:0,h=U.uniforms;if(g===h.dispersal.value&&b===h.crownOnly.value&&d===h.revealInPlace.value)return!1;return h.dispersal.value=g,h.crownOnly.value=b,h.revealInPlace.value=d,!0},setSize(I){if(L||!Number.isFinite(I)||I<=0||I===N)return!1;return N=I,C()},move(I,S,f){if(L||z===0||!Number.isFinite(I+S+f))return!1;if(_&&f-_.time>=IX)_=null;let g=_?Math.hypot(I-_.x,S-_.y):1/0;if(_&&g<0.5)return!1;let b=_?Math.max(f-_.time,0.012):0.03,d=_?I-_.x:0,h=_?S-_.y:0,i=Math.hypot(d,h)/b;if(!H.add({x:I,y:S,fromX:_?.x??I,fromY:_?.y??S,time:f,strength:F1.clamp(0.25+i/1200,0.25,1.4)}))return!1;return _={x:I,y:S,time:f},!0},leave(){_=null},dispose(){if(L)return;L=!0,_=null,U.uniforms.activeBrushCount.value=0,Y.dispose(),U.dispose(),W.dispose(),E.remove(G)}}}var RR=new Set(["neutral","smile","surprise","thoughtful"]);function wX($,J,Q=()=>{},{manifestUrl:Z,signal:W}={}){let K=null,X=!1,H="neutral",Y=-100,U=!1,G=[],E={changed:!1,active:!1},q=new AbortController,F=()=>q.abort(W?.reason);if(W?.aborted)F();else W?.addEventListener("abort",F,{once:!0});let O=()=>U||q.signal.aborted,M=()=>{if(!O())return;let _=Error("Expression loading was cancelled.");throw _.name="AbortError",_},N=(_)=>{if(!O())Q(_)};async function R(){if(M(),X)return;if(K)return K;return N({loading:!0,name:H}),K=(async()=>{if(M(),!Z)throw Error("An expression manifest URL is required.");let _=new URL(Z,import.meta.url),D=await fetch(_,{cache:"no-cache",signal:q.signal});if(M(),!D.ok)throw Error("Could not load expression manifest.");let k=await D.json();M();let T=$.geometry.attributes.position.count;if(k.version!==1||k.vertexCount!==T||!Array.isArray(k.targets))throw Error("Expression topology does not match the current head.");let P=new URL(k.buffer,D.url||_),A=await fetch(P,{cache:"no-cache",signal:q.signal});if(M(),!A.ok)throw Error("Could not load expression data.");let y=await A.arrayBuffer();M();let z=[],L=[];function C(I,S,f){if(!Number.isInteger(S)||S<0||S+f*I.BYTES_PER_ELEMENT>y.byteLength)throw Error("Invalid expression buffer range.");return new I(y,S,f)}for(let I of k.targets){if(!["smile","surprise","thoughtful","blink"].includes(I.name)||!Number.isInteger(I.count)||I.count>T||I.count<1)throw Error("Invalid expression target.");let S=C(Uint16Array,I.indices.byteOffset,I.count),f=C(Int16Array,I.position.byteOffset,I.count*3),g=C(Int16Array,I.normal.byteOffset,I.count*3);if(!(I.position.scale>0)||!(I.normal.scale>0)||!Number.isFinite(I.position.scale+I.normal.scale))throw Error("Invalid expression quantization scale.");let b=new Float32Array(T*3),d=new Float32Array(T*3);for(let h=0;h<S.length;h++){let i=S[h];if(i>=T)throw Error("Invalid expression vertex index.");for(let t=0;t<3;t++)b[i*3+t]=f[h*3+t]*I.position.scale*J,d[i*3+t]=g[h*3+t]*I.normal.scale}z.push(new X1(b,3)),L.push(new X1(d,3))}if(G=k.targets.map((I)=>I.name),new Set(G).size!==G.length||!["smile","surprise","thoughtful","blink"].every((I)=>G.includes(I)))throw Error("Missing expression target.");M(),$.geometry.morphAttributes.position=z,$.geometry.morphAttributes.normal=L,$.geometry.morphTargetsRelative=!0,$.updateMorphTargets(),$.morphTargetDictionary=Object.fromEntries(G.map((I,S)=>[I,S])),$.material.needsUpdate=!0,X=!0,N({loading:!1,name:H})})().catch((_)=>{if(K=null,!O())H="neutral",N({loading:!1,error:_,name:H});throw _}),K}return{async choose(_){if(O()||!RR.has(_))return;if(H=_,N({loading:!X&&_!=="neutral",name:_}),_!=="neutral")await R()},async blink(){if(O())return;await R(),M(),Y=performance.now()/1000},update(_,D){if(E.changed=!1,E.active=!1,O()||!X)return E;let k=D-Y,T=k<0.1?F1.smoothstep(k,0,0.1):1-F1.smoothstep(k,0.14,0.33);for(let P=0;P<G.length;P++){let A=G[P],y=$.morphTargetInfluences[P],z;if(A==="blink")z=k>=0&&k<=0.33?T:0,E.active||=k>=0&&k<0.34;else{let L=A===H?1:0;if(z=F1.damp(y,L,7.5,_),Math.abs(z-L)<0.0005)z=L;E.active||=z!==L}$.morphTargetInfluences[P]=z,E.changed||=z!==y}return E},dispose(){if(U)return;U=!0,q.abort(),W?.removeEventListener("abort",F),E.changed=!1,E.active=!1}}}var V9=Object.freeze([Object.freeze({name:"high",index:0,fps:60,dpr:1.5,glyphBudget:64000,sampleScale:2,brushLimit:16}),Object.freeze({name:"balanced",index:1,fps:60,dpr:1.25,glyphBudget:18000,sampleScale:1,brushLimit:12}),Object.freeze({name:"light",index:2,fps:60,dpr:1,glyphBudget:1e4,sampleScale:1,brushLimit:8}),Object.freeze({name:"minimum",index:3,fps:30,dpr:1,glyphBudget:6000,sampleScale:1,brushLimit:6})]);function FR($){let J=[...$].sort((Q,Z)=>Q-Z);return J[Math.max(0,Math.ceil(J.length*0.95)-1)]}function SX({coarse:$=!1,fixed:J}={}){let Q={high:0,balanced:1,light:2,low:2,minimum:3},Z=Object.prototype.hasOwnProperty.call(Q,J),W=Number(globalThis.navigator?.deviceMemory),K=Number(globalThis.navigator?.hardwareConcurrency),X=W>0&&W<=4&&K>0&&K<=4,H=Z?Q[J]:$?2:X?1:0,Y=Z?`fixed:${J}`:$?"coarse-pointer":X?"limited-device":"auto-default",U=NaN,G=NaN,E=-1/0,q=0,F=0,O=[],M=0,N=0,R=NaN;function _(){q=0,F=0,O=[]}function D(T){if(!Number.isFinite(T))T=globalThis.performance?.now?.()??Date.now();U=T+1500,G=T,M=0,N=0,_()}function k(T,P,A){return H=T,Y=A,E=P,M=0,N=0,U=P+500,_(),V9[H]}return{current(){return V9[H]},wake:D,observe(T,P,A){if(!Number.isFinite(T)||!Number.isFinite(P)||P<=0)return null;if(!Number.isFinite(U))D(T);if(Number.isFinite(G)&&T-G>1500&&P>750)return D(T),null;if(G=T,T<U)return null;if(q+=P,F++,O.push(Number.isFinite(A)&&A>=0?A:1/0),q<1200||F<20)return null;R=F*1000/q;let y=FR(O),z=q,L=V9[H].fps;if(_(),Z)return null;if(R<L*0.75){if(M++,N=0,M>=2&&H<V9.length-1&&T-E>=4000)return k(H+1,T,"sustained-low-fps")}else{if(M=0,R>L*0.94&&y<1000/L*0.5)N+=z;else N=0;if(H>0&&N>=25000&&T-E>=30000)return k(H-1,T,"sustained-headroom")}return null},getReport(){let T={quality:V9[H].name,qualityReason:Y};if(Number.isFinite(R))T.measuredFps=Math.round(R*10)/10;return T}}}var jX=Object.freeze([0,-0.82,-0.55]);var fX=`
  float headPoseWeight(vec3 rest){
    float r=length(vec2(rest.x/1.10,(rest.z+.365)/1.20));
    float gate=1.-smoothstep(1.,1.2,r);
    float cap=smoothstep(-1.6,-1.2,rest.y);
    return smoothstep(-2.1,-1.2,rest.y)*mix(gate,1.,cap);
  }
`;var vX={front:[0,0],quarter:[-0.95,Math.PI/36],profile:[-Math.PI/2,0],back:[Math.PI,0]},OR={changed:!1,active:!1},_1=($,J)=>Number.isFinite($)?$:J,yX=Object.freeze({brain:Object.freeze({center:Object.freeze([0,1.74,-0.08]),radii:Object.freeze([0.78,0.4,0.62])})});function bX($,J={}){if(!$?.append||!J.modelUrl)throw TypeError("Provide a host element and modelUrl.");let Q=new URL(J.modelUrl,$.ownerDocument.baseURI),Z=new URL(J.expressionsUrl||"./expressions.json",Q),W=J.coarsePointer??matchMedia("(pointer:coarse)").matches,K=J.reducedMotion??matchMedia("(prefers-reduced-motion:reduce)").matches,X=SX({coarse:W,fixed:J.quality}),H=X.current(),Y=!1,U=!1,G=!0,E=null,q="neutral",F=null,O=0,M=!1,N=1,R=1,_=0,D=!0,k=!0,T=0,P=0,A=0,y=0,z=null,L=H.glyphBudget,C=null,I=null,S=null,f=-1/0,g=0,b=!!J.autoRotate&&!K,d=0,h=0,i=J.surface==="clay"?"clay":"ascii",t=typeof J.view==="string"?vX[J.view]:null,Z0=t?.[0]??_1(J.view?.yaw,-0.95),E0=t?.[1]??_1(J.view?.pitch,Math.PI/36),C0=Z0,_0=E0,o=Z0,W0=E0,e=_1(J.view?.scale,0.84),N0=_1(J.view?.offsetX,0),T0=_1(J.view?.offsetY,0.22),A0=new AbortController,e0={signal:A0.signal},j=new TZ({alpha:!0,antialias:!1,powerPreference:W?"low-power":"default"});j.outputColorSpace=C8,j.setClearColor(0,0),j.autoClear=!1;let d0=j.domElement;d0.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",d0.setAttribute("aria-hidden","true"),$.append(d0);let f0=new z7,I0=new E6(-5,5,2.8,-2.8,0.1,50);I0.position.set(0,0,15),I0.lookAt(0,0,0);let M0=new K8;f0.add(M0);let a0=new u1({toneMapped:!1,uniforms:{encodeCrown:{value:1},gaze:{value:new x}},vertexShader:`
    #include <common>
    #include <morphtarget_pars_vertex>
    varying vec3 vNormal;
    varying float vHeight;
    uniform vec3 gaze;
    ${fX}
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
      vec3 neckPivot=vec3(${jX.map((m)=>m.toFixed(4)).join(",")});
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
    }`}),V0=new M8(1,1,{depthBuffer:!0}),F0=TX(V0.texture,{reduced:K});F0.setQuality(H),F0.setSize(Math.max(2,_1(J.cellSize,5.4))),q1(J.ink||"#edeee5");function U1(m={}){if(!Y)J.onState?.({loaded:U,expression:q,quality:H.name,...m})}function q1(m){let J0=new y0(m).convertLinearToSRGB();F0.setInk(new x(J0.r,J0.g,J0.b))}function l0(m=!0){if(Y)return;if(D||=m,k=!0,document.hidden||!G||O||M)return;T=0,P=0,X.wake(performance.now()),O=requestAnimationFrame($0)}function w(){let m=F0.getSourceSize(H.sampleScale);if(V0.width!==m.width||V0.height!==m.height)V0.setSize(m.width,m.height),D=!0}function V(){if(Y)return;let m=Math.max(1,$.clientWidth),J0=Math.max(1,$.clientHeight),U0=Math.min(devicePixelRatio||1,H.dpr);if(m!==N||J0!==R||U0!==_)N=m,R=J0,_=U0,j.setPixelRatio(U0),j.setSize(N,R,!1);F0.resize(N,R,U0),w();let Y0=2.8*N/R;I0.left=-Y0,I0.right=Y0,I0.updateProjectionMatrix(),M0.position.set(N0,T0,0),M0.scale.setScalar(e),l0(!0)}function u(m){if(!C)return!1;let J0=Math.min(1,(m-C.start)/600),U0=Math.min(6,Math.floor(J0*6));if(U0!==C.step){C.step=U0;let Y0=F1.smoothstep(U0/6,0,1);L=Math.round(F1.lerp(C.from,C.to,Y0)),F0.setQuality({glyphBudget:L}),w(),D=!0}if(J0>=1)C=null;return!!C}function a(){return{loaded:U,disposed:Y,surface:i,width:N,height:R,dpr:_,...F0.getStats(),...X.getReport(),frames:A,sourceFrames:y,animating:!!O||M,view:{yaw:Z0,pitch:E0,scale:e,offsetX:N0,offsetY:T0},dispersal:h}}function $0(m){if(O=0,Y||document.hidden||!G)return;let J0=1000/H.fps;if(T&&m+0.4<T||P&&m-P<J0*0.65-0.4){O=requestAnimationFrame($0);return}let U0=P?m-P:J0,Y0=Math.min(0.07,U0/1000);if(P=m,T=T?T+J0:m+J0,T<m-0.4)T+=Math.ceil((m-T)/J0)*J0;M=!0,k=!1;let b0=performance.now();if(I)H=I,I=null,C={from:L,to:H.glyphBudget,start:m,step:-1},F0.setQuality({glyphBudget:L,brushLimit:H.brushLimit}),V();if(S!==null&&m-f>=32)F0.setSize(S),S=null,f=m,w(),D=!0;let v=u(m);if(b&&!z)d+=Y0,C0=o-d*0.22,_0=W0+Math.sin(d*0.4)*0.025;let q0=Math.abs(Z0-C0)<0.0001?C0:F1.damp(Z0,C0,9,Y0),H0=Math.abs(E0-_0)<0.0001?_0:F1.damp(E0,_0,9,Y0);D||=q0!==Z0||H0!==E0,Z0=q0,E0=H0,M0.rotation.set(E0,Z0,0);let L0=E?.update(Y0,m/1000)||OR;if(D||=L0.changed,i==="ascii"){if(a0.uniforms.encodeCrown.value=1,D)j.setRenderTarget(V0),j.clear(),j.render(f0,I0),y++,D=!1;F0.update(m/1000),j.setRenderTarget(null),j.clear(),j.render(F0.scene,F0.camera)}else a0.uniforms.encodeCrown.value=0,j.setRenderTarget(null),j.clear(),j.render(f0,I0),y++,D=!1;A++;let Q0=m>=g?X.observe(m,U0,performance.now()-b0):null;if(Q0)I=Q0,k=!0;if(M=!1,b||z||Z0!==C0||E0!==_0||L0.active||v||I||S!==null||i==="ascii"&&F0.isAnimating(m/1000)||D||k)O=requestAnimationFrame($0);else U1({idle:!0,stats:a()})}let s=new ResizeObserver(V);s.observe($);let D0=typeof IntersectionObserver==="function"?new IntersectionObserver((m)=>{if(G=m[0].isIntersecting,G)l0(!0);else if(O)cancelAnimationFrame(O),O=0}):null;D0?.observe($),document.addEventListener("visibilitychange",()=>{if(document.hidden){if(O)cancelAnimationFrame(O);O=0,F0.leave()}else l0(!0)},e0),d0.addEventListener("pointermove",(m)=>{let J0=d0.getBoundingClientRect();if(z)C0=z.yaw+(m.clientX-z.x)*0.008,_0=F1.clamp(z.pitch+(m.clientY-z.y)*0.004,-1.35,1.35),l0(!0);if(i==="ascii"&&F0.move((m.clientX-J0.left)/J0.width*N,(1-(m.clientY-J0.top)/J0.height)*R,performance.now()/1000))l0(!1)},e0),d0.addEventListener("pointerleave",()=>F0.leave(),e0),d0.addEventListener("pointerdown",(m)=>{if(J.pointerRotation===!1||W||m.pointerType==="mouse"&&m.button!==0)return;z={x:m.clientX,y:m.clientY,yaw:C0,pitch:_0},b=!1,d0.setPointerCapture(m.pointerId)},e0);let G0=()=>{z=null,l0(!1)};for(let m of["pointerup","pointercancel","lostpointercapture"])d0.addEventListener(m,G0,e0);V(),U1({loading:!0});function B0(m){m.scene.traverse((J0)=>{if(!J0.isMesh)return;J0.geometry.dispose();for(let U0 of Array.isArray(J0.material)?J0.material:[J0.material])U0.dispose()})}let S0=(async()=>{let m;try{let J0=await fetch(Q,{signal:A0.signal});if(!J0.ok)throw Error(`Could not load head (${J0.status}).`);if(m=await new hZ().parseAsync(await J0.arrayBuffer(),new URL(".",Q).href),Y)throw new DOMException("Head disposed.","AbortError");m.scene.updateMatrixWorld(!0);let U0=[];if(m.scene.traverse((r)=>{if(r.isMesh)U0.push(r)}),U0.length!==1)throw Error("This module requires the accepted single-mesh head asset.");let Y0=U0[0],b0=Y0.geometry.clone().applyMatrix4(Y0.matrixWorld),v=new l1().setFromObject(m.scene),q0=v.getCenter(new x),H0=m.scene.userData,L0=_1(H0.alignmentHeight,v.max.y-v.min.y);if(!(L0>0))throw b0.dispose(),Error("Invalid head bounds.");let Q0=5.55/L0;if(Array.isArray(H0.alignmentCenter)&&H0.alignmentCenter.length===3&&H0.alignmentCenter.every(Number.isFinite))q0.fromArray(H0.alignmentCenter);b0.translate(-q0.x,-_1(H0.alignmentTop,v.max.y),-q0.z),b0.scale(Q0,Q0,Q0),b0.translate(0,2.6,0),F=new A1(b0,a0),F.frustumCulled=!1,M0.add(F),E=wX(F,Q0,(r)=>{q=r.name,U1({loading:r.loading,expression:r.name,error:r.error}),l0(!0)},{manifestUrl:Z,signal:A0.signal}),U=!0,U1({loading:!1}),l0(!0)}catch(J0){if(!Y)U1({loading:!1,error:J0}),J.onError?.(J0);throw J0}finally{if(m)B0(m)}})();S0.catch(()=>{});let K0={ready:S0,setView(m){if(Y)return;let J0=typeof m==="string"?vX[m]:null;if(typeof m==="string"&&!J0)throw RangeError("Unknown head view.");if(C0=J0?.[0]??_1(m.yaw,C0),_0=J0?.[1]??_1(m.pitch,_0),o=C0,W0=_0,d=0,typeof m==="object")e=Math.max(0.01,_1(m.scale,e)),N0=_1(m.offsetX,N0),T0=_1(m.offsetY,T0);if(m.immediate||K)Z0=C0,E0=_0,M0.rotation.set(E0,Z0,0);V()},setAppearance(m){if(Y)return;if(m.ink)q1(m.ink);if(Number.isFinite(m.cellSize))S=Math.max(2,Math.min(128,m.cellSize)),g=performance.now()+1200;if(m.surface){if(!["ascii","clay"].includes(m.surface))throw RangeError("Unknown surface.");i=m.surface,F0.leave(),D=!0}l0(!1)},setScatter(m,J0){if(!Y&&Number.isFinite(m))h=F1.clamp(m,0,1),F0.setScatter(h,J0),l0(!1)},setGlyphGlitch({x:m=0,y:J0=0,strength:U0=0,seed:Y0=0}={}){if(!Y&&F0.setGlyphGlitch(_1(m,0),_1(J0,0),F1.clamp(_1(U0,0),0,1),_1(Y0,0)))l0(!1)},setGaze({yaw:m=0,pitch:J0=0,roll:U0=0}={}){if(Y)return;a0.uniforms.gaze.value.set(F1.clamp(_1(m,0),-0.4,0.4),F1.clamp(_1(J0,0),-0.16,0.16),F1.clamp(_1(U0,0),-0.16,0.16)),l0(!0)},projectPoints(m){return M0.updateMatrixWorld(!0),I0.updateMatrixWorld(!0),m.map((J0)=>{let U0=new x().fromArray(J0).applyMatrix4(M0.matrixWorld),Y0=U0.z;return U0.project(I0),{x:(U0.x*0.5+0.5)*N,y:(0.5-U0.y*0.5)*R,depth:Y0,visible:U0.z>=-1&&U0.z<=1}})},setAutoRotate(m){if(!Y)b=!!m&&!K,l0(!0)},pause(){K0.setAutoRotate(!1)},resume(){K0.setAutoRotate(!0)},async setExpression(m){if(await S0,Y)throw new DOMException("Head disposed.","AbortError");await E.choose(m),l0(!0)},async blink(){if(await S0,Y)throw new DOMException("Head disposed.","AbortError");await E.blink(),l0(!0)},getStats:a,dispose(){if(Y)return;if(Y=!0,A0.abort(),O)cancelAnimationFrame(O);O=0,s.disconnect(),D0?.disconnect(),E?.dispose(),F?.geometry.dispose(),a0.dispose(),F0.dispose(),V0.dispose(),j.dispose(),d0.remove()}};return K0}function S7($,J={}){let Q=document.createElementNS("http://www.w3.org/2000/svg",$);for(let[Z,W]of Object.entries(J))Q.setAttribute(Z,W);return Q}function hX({host:$,links:J,connectors:Q,points:Z}){let W=matchMedia("(prefers-reduced-motion: reduce)"),K=null;J.forEach((Y,U)=>{let G=()=>{if(W.matches||document.body.dataset.phase!=="head")return;if(K?.index===U)return;K?.connector.classList.remove("is-signaling");let E=Q[U].group;E.classList.add("is-signaling"),K={index:U,connector:E,time:performance.now(),point:null,seed:Math.random()}};Y.addEventListener("pointerenter",(E)=>{if(E.pointerType!=="touch")G()}),Y.addEventListener("focus",()=>{if(Y.matches(":focus-visible"))G()})});function X(Y){if(!K)return;K.connector.classList.remove("is-signaling"),K=null,Y.setGlyphGlitch()}function H(Y,U){if(!K)return;let G=U-K.time;if(G>=575||W.matches){X(Y);return}if(G<320){Y.setGlyphGlitch();return}K.point??=Q[K.index].point??Y.projectPoints([Z[K.index]])[0];let E=(G-320)/255,q=0.83*Math.sin(Math.PI*E);Y.setGlyphGlitch({x:K.point.x/$.clientWidth,y:1-K.point.y/$.clientHeight,strength:q,seed:K.seed+Math.floor(G/40)*0.11})}return{update:H,clear:X}}function xX($,J){let Q=$.querySelector('[data-section="more"]'),Z=document.createElement("div");Z.id="cover-directory",Z.className="cover-directory",Z.hidden=!0,Z.innerHTML=J,$.append(Z),Q.setAttribute("aria-controls",Z.id),Q.setAttribute("aria-expanded","false");function W(K){Z.hidden=!K,Q.setAttribute("aria-expanded",String(K))}return Q.addEventListener("click",(K)=>{K.stopPropagation();let X=Z.hidden;if(W(X),X&&K.detail===0)Z.querySelector("button, a").focus()}),Z.addEventListener("click",(K)=>{if(!K.target.closest("button, a"))return;W(!1),Q.focus({preventScroll:!0})}),$.addEventListener("focusout",(K)=>{if(K.relatedTarget&&!$.contains(K.relatedTarget))W(!1)}),$.addEventListener("keydown",(K)=>{if(K.key!=="Escape"||Z.hidden)return;K.preventDefault(),K.stopPropagation(),W(!1),Q.focus({preventScroll:!0})}),document.addEventListener("click",(K)=>{if(!$.contains(K.target))W(!1)}),()=>W(!1)}function MR($,J,Q){let Z=document.createElement("canvas");Z.width=$,Z.height=J;let W=Z.getContext("2d");if(!W)return null;let K=W.createImageData($,J),X=Math.max(0,$/2-Q),H=J/2-Q,Y=Q/2;for(let U=0;U<J;U++)for(let G=0;G<$;G++){let E=G+0.5-$/2,q=U+0.5-J/2,F=Math.sign(E)*Math.max(0,Math.abs(E)-X),O=Math.sign(q)*Math.max(0,Math.abs(q)-H),M=Math.hypot(F,O),N=Q-M,R=N<0?0:Math.max(0,1-N/Y)**1.8,_=(U*$+G)*4;K.data[_]=128-R*F/Math.max(1,M)*123,K.data[_+1]=128-R*O/Math.max(1,M)*123,K.data[_+3]=255}return W.putImageData(K,0,0),Z.toDataURL()}function gX($){if(!/Chrom(?:e|ium)\//.test(navigator.userAgent)||matchMedia("(pointer: coarse), (prefers-reduced-transparency: reduce)").matches)return;let J=S7("svg",{width:0,height:0,"aria-hidden":"true"}),Q=S7("defs");J.classList.add("cover-lens-definitions"),J.append(Q),$.prepend(J);let Z=[...$.querySelectorAll('.cover-topbar-group, .cover-menu > [data-section="more"], #go, .cover-directory')],W=new Map(Z.map((X,H)=>{let Y=S7("filter",{id:`cover-glass-${H}`,filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"});return Q.append(Y),[X,Y]})),K=new ResizeObserver((X)=>{for(let{target:H}of X){let Y=W.get(H),U=H.offsetWidth,G=H.offsetHeight;if(!U||!G||Y.getAttribute("width")===String(U)&&Y.getAttribute("height")===String(G))continue;let E=H.classList.contains("cover-directory"),q=MR(U,G,E?22:G/2);if(!q)continue;for(let[F,O]of Object.entries({x:0,y:0,width:U,height:G}))Y.setAttribute(F,O);Y.replaceChildren(S7("feImage",{href:q,width:U,height:G,result:"rim",preserveAspectRatio:"none"}),S7("feDisplacementMap",{in:"SourceGraphic",in2:"rim",scale:E?10:G*0.23,xChannelSelector:"R",yChannelSelector:"G",result:"lens"}),S7("feGaussianBlur",{in:"lens",stdDeviation:0.55})),H.style.setProperty("--cover-glass-lens",`url(#${Y.id})`)}});Z.forEach((X)=>K.observe(X)),addEventListener("pagehide",()=>K.disconnect(),{once:!0})}function z9($){$.beginPath(),$.moveTo(9.2,24),$.lineTo(11.8,20.7),$.bezierCurveTo(9.5,20.7,7.8,19.8,7.8,18.4),$.lineTo(8.1,17.2),$.lineTo(6.8,16.1),$.lineTo(8,15.2),$.lineTo(7.5,14.1),$.lineTo(5.6,13.5),$.quadraticCurveTo(4.9,13.2,5.8,12.2),$.lineTo(8.4,8.9),$.bezierCurveTo(8.5,5.6,11.6,2.2,16.4,2.2),$.bezierCurveTo(22.1,2.2,25.2,5.7,25.2,10.1),$.bezierCurveTo(25.2,14.6,22.6,16.3,20.7,18.4),$.lineTo(20.9,21.1),$.lineTo(24.4,24),$.closePath()}function F6($){z9($),$.moveTo(9.1,9.7),$.quadraticCurveTo(10.7,9.2,12.4,10.5),$.quadraticCurveTo(10.6,10.6,9.1,10.9),$.closePath(),$.fill("evenodd")}function KJ($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.stroke()}var gZ=[{id:"bust-solid",name:"Силуэт",draw:F6},{id:"bust-frame",name:"Портрет в кадре",draw($){$.save(),$.translate(4.2,2.9),$.scale(0.78,0.78),F6($),$.restore(),$.lineWidth=1.1,KJ($,[[4.5,8],[4.5,2.5],[11,2.5]]),KJ($,[[27.5,8],[27.5,2.5],[21,2.5]]),KJ($,[[4.5,18],[4.5,23.5],[11,23.5]]),KJ($,[[27.5,18],[27.5,23.5],[21,23.5]])}},{id:"bust-scan",name:"Портрет из полос",draw($){$.save(),z9($),$.clip();for(let[J,Q]of[[2.2,1.35],[5.1,1.55],[8.2,1.9],[11.7,2.3],[15.5,1.7],[18.6,1.8],[21.9,2.1]])$.fillRect(4,J,24,Q);$.restore()}},{id:"bust-dissolve",name:"Портрет в движении",width:38,draw($){$.save(),$.beginPath(),$.moveTo(1,0),$.lineTo(21.8,0),$.lineTo(21.8,7.2),$.lineTo(18.8,7.2),$.lineTo(18.8,12.4),$.lineTo(21.1,12.4),$.lineTo(21.1,16.1),$.lineTo(18,16.1),$.lineTo(18,20.7),$.lineTo(21.2,20.7),$.lineTo(21.2,26),$.lineTo(1,26),$.closePath(),$.clip(),F6($),$.restore(),$.globalAlpha=0.9,$.fillRect(23.7,3.5,2.2,2.2),$.fillRect(21.1,8.5,2.7,2.7),$.fillRect(26.2,11.8,2.3,2.3),$.fillRect(21.5,17.5,2.4,2.4),$.fillRect(25.5,21,1.8,1.8),$.globalAlpha=0.55,$.fillRect(29,6.8,1.6,1.6),$.fillRect(32,12.3,1.4,1.4),$.fillRect(35.1,13.3,1,1),$.fillRect(28.1,16.9,1.5,1.5),$.globalAlpha=1}},{id:"bust-outline",name:"Контур и отражение",draw($){$.lineWidth=1.1,z9($),$.stroke(),$.globalAlpha=0.57,$.beginPath(),$.moveTo(22.2,2.5),$.bezierCurveTo(27.3,3.8,29.4,8.7,28,13),$.bezierCurveTo(27.2,15.3,25.8,17.1,24.5,18.4),$.lineTo(24.8,20.7),$.lineTo(28.2,24),$.stroke(),$.globalAlpha=1}},{id:"bust-shift",name:"Сдвиг силуэта",draw($){$.save(),$.beginPath(),$.moveTo(0,0),$.lineTo(32,0),$.lineTo(32,10.7),$.lineTo(0,17),$.closePath(),$.clip(),$.translate(2.6,-0.7),F6($),$.restore(),$.save(),$.beginPath(),$.moveTo(0,19.1),$.lineTo(32,12.8),$.lineTo(32,26),$.lineTo(0,26),$.closePath(),$.clip(),F6($),$.restore()}}];function m1($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.closePath(),$.fill()}function XJ($,J){for(let[Q,Z,W]of J)$.beginPath(),$.arc(Q,Z,W,0,Math.PI*2),$.fill()}var pZ=[{id:"velocity-pulse",name:"Импульс",width:43,draw($){m1($,[[21,4],[40,13],[21,22],[25,13]]),m1($,[[10,9],[23,9],[25,13],[8,13]]),m1($,[[14,16],[24,16],[22.5,19],[12,19]]),$.fillRect(3,10.5,3,2.5),$.fillRect(6,16.5,2.5,2.5)}},{id:"velocity-orbit",name:"Орбита частиц",width:40,draw($){XJ($,[[32.4,7.2,2.75],[28.3,5.2,1.5],[24.3,4.6,1.3],[20.4,5.1,1.15],[16.8,6.4,1],[13.4,8.2,0.85],[10.3,10.6,0.85],[7.2,13.9,0.95],[6.7,17.4,1.05],[8.7,20.3,1.2],[12.7,21.7,1.35],[17.4,21.9,1.5],[22.1,20.7,1.65],[27.2,18.2,1.95],[31.6,14.8,2.2]])}},{id:"velocity-trajectory",name:"Траектория",width:46,draw($){$.beginPath(),$.moveTo(11,17),$.bezierCurveTo(20,13,29,4,43,4.7),$.bezierCurveTo(36,9,35,13.3,30,16.8),$.bezierCurveTo(25.5,20,19,20.2,11,17),$.closePath(),$.fill(),m1($,[[10,19.7],[19.2,21.5],[13.2,22.6],[7.4,21.6]]),XJ($,[[5.5,18.4,1.05],[2.5,20.8,0.7]])}},{id:"velocity-stream",name:"Поток",width:43,draw($){m1($,[[16,4.3],[39,4.3],[35,8],[12,8]]),m1($,[[14,10.7],[35,10.7],[31,14.4],[10,14.4]]),m1($,[[10,17.2],[29,17.2],[25,20.9],[6,20.9]]),m1($,[[10,4.5],[12.5,4.5],[8.6,8],[6.1,8]]),m1($,[[7,10.8],[9.5,10.8],[5.6,14.4],[3.1,14.4]]),m1($,[[4.7,17.2],[2.1,19.7],[1.8,17.2]])}},{id:"velocity-shards",name:"Осколки",width:42,draw($){m1($,[[36.9,3.2],[40,12.3],[22.8,17.1],[26.3,8.8]]),m1($,[[28.8,15.5],[24.5,22.7],[17.2,22],[21.1,17.4]]),m1($,[[16.8,7.3],[23.9,7.3],[18.7,12.3],[14,12.3]]),m1($,[[10.6,14.1],[17.7,14.1],[14.5,17.8],[7.4,17.8]]),XJ($,[[12.4,8.1,1],[5.7,13.1,1.05],[3.4,18.3,0.85],[10.8,21.9,0.85]])}},{id:"velocity-vortex",name:"Вихрь",width:38,draw($){$.beginPath(),$.moveTo(10,11.2),$.bezierCurveTo(10.8,3.3,25.4,1.8,33.6,8),$.bezierCurveTo(23.2,4.8,16.5,8.4,16.3,14.3),$.closePath(),$.fill(),$.beginPath(),$.moveTo(27.6,14.7),$.bezierCurveTo(27.1,22.6,11.9,24.5,3.9,18.6),$.bezierCurveTo(14.2,21.4,21,17.8,21,11.7),$.closePath(),$.fill(),XJ($,[[5.5,10.2,1.1],[3.1,13.7,0.8],[32.6,15.1,1.1],[35.1,12.2,0.8]])}}];var LR=["10001 10001 10001","10001 10001 11001","10001 10001 11001","10101 10101 10101","10101 10101 10011","11011 11011 10011","01010 01010 10001"],B9=[[3,5],[9,21],[16,10],[23,21],[29,5]],pX=[[26,24],[22,20],[22,16],[25,11],[25,8],[23,4],[19,2.5],[13,2.5],[8,5],[7,9],[3.5,13],[7,14],[7,16],[9,17],[8,19],[11,21],[15,21],[16,24]];function w1($,J,Q,Z=1.1){$.beginPath(),$.arc(J,Q,Z,0,Math.PI*2),$.fill()}function O1($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.stroke()}function lZ($,J){for(let Q=1;Q<J.length;Q+=1){let[Z,W]=J[Q-1],[K,X]=J[Q],H=Math.ceil(Math.hypot(K-Z,X-W)/3);for(let Y=0;Y<H;Y+=1)w1($,Z+(K-Z)*Y/H,W+(X-W)*Y/H)}w1($,...J.at(-1))}function GJ($,J=!1){LR.forEach((Q,Z)=>{Array.from(Q).forEach((W,K)=>{if(W!=="1")return;let X=3+K*3.6,H=2.2+Z*3.6;if(J)$.fillRect(X-1.65,H-1.65,3.3,3.3);else w1($,X,H)})})}function U8($,J){$.beginPath(),$.moveTo(...J[0]);for(let Q of J.slice(1))$.lineTo(...Q);$.closePath(),$.fill()}function uZ($,J=!1){let Q=[[0,4],[3.7,4],[7.8,16],[11.6,7.7],[15.4,16],[19.5,4],[23.2,4],[17,22],[14,22],[11.6,16.6],[9.2,22],[6.2,22]];for(let Z of[2,26.4])U8($,Q.map(([W,K])=>[Z+W,K]));if(U8($,[[52,22],[52,4],[55.1,4],[66.6,16.3],[66.6,J?11:4],[70.2,J?11:4],[70.2,22],[67.2,22],[55.6,9.7],[55.6,22]]),J)$.fillRect(66.6,8,1.6,1.6),$.fillRect(69,6,1.5,1.5),$.fillRect(71.1,3.6,1.3,1.3)}function mZ($,J,Q,Z,W){for(let K of J)$.fillText(K,Q,Z),Q+=$.measureText(K).width+W}var DR={id:"default",width:64,draw:GJ},mX=[{id:"dots",name:"WWN со следом",width:68,draw($){$.save(),$.translate(2,-0.8),$.globalAlpha=0.31,GJ($),$.restore(),GJ($)}},{id:"pixel",name:"Пиксельный WWN",width:64,draw:($)=>GJ($,!0)},{id:"constellation",name:"Созвездие W",draw:($)=>lZ($,B9)},{id:"trace",name:"Проводник",draw($){$.lineWidth=1.6,O1($,B9),w1($,...B9[0],1.75),w1($,...B9.at(-1),1.75)}},{id:"brackets",name:"W в скобках",width:42,draw($){O1($,[[9,4],[3,4],[3,22],[9,22]]),O1($,[[33,4],[39,4],[39,22],[33,22]]),$.lineWidth=2,O1($,[[9,8],[14,18],[21,10],[28,18],[33,8]])}},{id:"node",name:"Узел",draw($){O1($,[[16,12],[8,4],[3,4]]),O1($,[[16,12],[24,4],[29,4]]),O1($,[[16,12],[16,22]]);for(let[J,Q]of[[3,4],[29,4],[16,22]])w1($,J,Q,1.45);w1($,16,12,2.6)}},{id:"signal",name:"Штриховой знак",draw($){$.lineWidth=1.9,$.lineCap="butt",$.setLineDash([3,2.4]),O1($,B9),O1($,[[10.5,23],[16,14],[21.5,23]])}},{id:"profile",name:"Контур головы",draw($){O1($,pX),w1($,10,11,0.95),O1($,[[6,24],[16,24]]),O1($,[[26,24],[29,24]])}},{id:"face-dots",name:"Точечный профиль",draw($){lZ($,pX);for(let[J,Q,Z]of[[10,10,0.95],[14,7,0.65],[18,6,0.7],[21,8,0.7],[18,10,0.75],[19,14,0.85],[14,14,0.65],[12,17,0.75],[22,11,0.7]])w1($,J,Q,Z)}},{id:"scatter",name:"Распад W",width:42,draw($){lZ($,[[3,5],[9,21],[16,10],[23,21],[26.5,11.5]]);for(let[J,Q,Z]of[[27,8,1.1],[28,4,0.8],[30,6,0.65],[32,3,0.75],[33,8,0.55],[35,12,0.85],[31,13,0.65],[30,18,0.9],[33,21,0.65],[38,5,0.6],[39,9,0.45],[38,16,0.65]])w1($,J,Q,Z)}}],dX=[{id:"geometric",name:"Плотный WWN",width:74,draw:uZ},{id:"studio-signature",name:"Подпись студии",width:118,draw($){$.save(),$.translate(0,2.6),$.scale(0.8,0.8),uZ($),$.restore(),$.fillRect(63,5,0.7,16),$.font="600 7px Arial, sans-serif",mZ($,"IT",70,11.2,0.75),mZ($,"SOLUTIONS",70,19.5,0.68)}},{id:"serif",name:"WWN с засечками",width:69,draw($){$.font="bold 22px Georgia, serif",mZ($,"WWN",1.3,21,-0.8)}},{id:"pixel-edge",name:"WWN с пиксельным краем",width:76,draw:($)=>uZ($,!0)}],cX=[{id:"disc-fragment",name:"Диск и частица",draw($){$.save(),$.beginPath(),$.arc(13.2,13,10.5,0,Math.PI*2),$.clip(),U8($,[[2,2],[26,2],[26,8],[21,8],[21,11],[18.2,11],[18.2,15],[21,15],[21,18],[26,18],[26,24],[2,24]]),$.restore(),$.fillRect(25,11.2,3.6,3.6)}},{id:"facets",name:"Две плоскости",draw($){U8($,[[4,10.5],[17.5,2.5],[30,2.5],[16.5,10.5]]),U8($,[[2,14.5],[16.5,14.5],[28.5,7.3],[28.5,15],[15,23.5],[2,23.5]])}},{id:"aperture",name:"Просвет",draw($){$.beginPath(),$.moveTo(16,1.6),$.lineTo(30,13),$.lineTo(16,24.4),$.lineTo(2,13),$.closePath(),$.moveTo(10.5,15.5),$.lineTo(15.2,8.2),$.lineTo(22.5,10.5),$.lineTo(17.8,17.8),$.closePath(),$.fill("evenodd")}},{id:"layers",name:"Слои",draw($){U8($,[[5,3],[29,3],[25,8],[1,8]]),U8($,[[8,10.5],[27,10.5],[23,15.5],[4,15.5]]),U8($,[[11,18],[25,18],[21,23],[7,23]])}}],nX=[{id:"frame-open",name:"Открытая рамка",draw($){$.lineWidth=1.6,$.lineCap="butt",O1($,[[21,3],[5,3],[5,23],[25,23],[25,12]]),$.fillRect(23.4,2.2,3.2,3.2)}},{id:"frame-offset",name:"Двойной кадр",width:34,draw($){$.lineCap="butt",O1($,[[26,17],[26,6],[4,6],[4,23],[21,23]]),O1($,[[9,10],[9,3],[30,3],[30,20],[14,20]])}},{id:"frame-medallion",name:"Профиль в круге",draw($){w1($,16,13,11.5),$.save(),$.globalCompositeOperation="destination-out",$.translate(4,2.7),$.scale(0.79,0.86),z9($),$.fill(),$.restore()}},{id:"frame-exit",name:"Выход из кадра",width:39,draw($){$.lineWidth=1.2,O1($,[[26,3],[4,3],[4,23],[26,23]]),$.save(),$.translate(16.5,2.25),$.scale(0.87,0.92),F6($),$.restore()}},{id:"frame-fold",name:"Складка",draw($){U8($,[[3,3],[16,3],[12,22.6],[3,18.7]]),U8($,[[19.2,3],[28,7],[28,23],[15.2,23]])}},{id:"frame-fragment",name:"Осколок рамки",draw($){$.lineWidth=1.8,$.lineCap="butt",O1($,[[19.5,3.2],[5.1,3.2],[5.1,22.8],[24.7,22.8],[24.7,9.1]]),U8($,[[23,2.1],[28.5,2.1],[28.5,7.6]])}}],sX=[{id:"model-head",name:"Портрет с обложки",image:"./sculpt/header-head-ivory.webp",draw($,J){$.drawImage(J,3,0,26,26)}},{id:"model-frame",name:"Портрет в кадре",image:"./sculpt/header-head-cut.webp",draw($,J){$.drawImage(J,4.5,1.5,23,23),$.lineWidth=0.85,$.lineCap="butt",O1($,[[4.1,8],[4.1,2.5],[10.8,2.5]]),O1($,[[21.2,23.5],[27.9,23.5],[27.9,18]])}},{id:"model-grains",name:"Портрет и частицы",width:38,image:"./sculpt/header-head-cut.webp",draw($,J){$.save(),$.clip(new Path2D("M0 0H21V6H19.5V12H23V17H19.7V21H22V26H0Z")),$.drawImage(J,0,0,26,26),$.restore();for(let[Q,Z,W]of[[23,4.5,1.3],[25.5,9,1.8],[28.5,13.5,1.6],[23.5,16,1.6],[31.5,11.6,1.1],[34,17.5,0.9]])$.fillRect(Q,Z,W,W)}}],sZ="M27 38l-5 5a10 10 0 0 1-14-14l12-12a10 10 0 0 1 14 0",oZ="M37 26l5-5a10 10 0 0 1 14 14L44 47a10 10 0 0 1-14 0",iZ="M22 42l20-20",j7=sZ+oZ+iZ;function HJ($,J=!1,Q=1,Z=-2.1){if($.save(),$.translate(Q,Z),$.scale(0.48,0.48),$.lineWidth=4,J)$.setLineDash([0.1,5.1]);$.stroke(new Path2D(j7)),$.restore()}var oX=[{id:"link-classic",name:"Исходная форма",draw:HJ},{id:"link-dots",name:"Точечный контур",draw:($)=>HJ($,!0)},{id:"link-grains",name:"Частицы на краю",width:38,draw($){$.save(),$.beginPath(),$.rect(0,0,24.3,26),$.clip(),HJ($),$.restore();for(let[J,Q,Z]of[[25.3,10,1.7],[28.5,11.3,1.55],[26.1,15,1.7],[30.8,15,1.35],[34.5,13.1,1.1],[32.3,18,0.9]])$.fillRect(J,Q,Z,Z)}},{id:"link-trail",name:"След в движении",width:41,draw($){HJ($),$.globalAlpha=0.76,O1($,[[29.7,9.2],[35,9.2]]),O1($,[[31.7,12.9],[38.6,12.9]]),$.globalAlpha=0.55,w1($,31.5,17,0.9),w1($,36.4,17,0.65),$.globalAlpha=1}}],YJ;function dZ(){if(YJ)return YJ;let $=new DOMMatrix([0.48,0,0,0.48,1,-2.1]),J=(H)=>{let Y=new Path2D;return Y.addPath(new Path2D(H),$),Y},Q=J(j7),Z=J(sZ+iZ),W=J(oZ),K=document.createElement("canvas").getContext("2d");K.lineWidth=4.25,K.lineCap="round",K.lineJoin="round";let X=(H,Y,U=0)=>{let G=[];for(let E=2.2;E<25;E+=Y)for(let q=2.2+U;q<31;q+=Y)if(K.isPointInStroke(H,q,E))G.push({x:q,y:E});return G};return YJ={front:Z,dots:X(Q,2),rearDots:X(W,1.9,0.45)},YJ}var iX=[{id:"link-flat-dot-field",name:"Сетка точек",draw($){for(let{x:J,y:Q}of dZ().dots)w1($,J,Q,0.77)}},{id:"link-flat-solid-dot",name:"Цельное звено и растр",draw($){let{front:J,rearDots:Q}=dZ();for(let{x:Z,y:W}of Q)w1($,Z,W,0.71);$.lineWidth=3.8,$.stroke(J)}},{id:"link-flat-wave",name:"Волна по знаку",animate:!0,draw($,J=0){let Q=Math.sin(Math.PI*J);for(let{x:Z,y:W}of dZ().dots){let K=(Z/32-J)*6,X=Q*Math.exp(-(K*K));$.fillRect(Z-0.7+X*1.2,W-0.7-X*0.85,1.4,1.4)}}}],cZ;function _R(){if(cZ)return cZ;let $=[],J=document.createElementNS("http://www.w3.org/2000/svg","path");for(let[Q,Z]of[[sZ,8],[oZ,8],[iZ,4]]){J.setAttribute("d",Q);let W=J.getTotalLength();for(let K=0;K<=Z;K+=1){let{x:X,y:H}=J.getPointAtLength(W*K/Z),Y={x:1+X*0.48,y:-2.1+H*0.48};if(!$.some((U)=>Math.hypot(U.x-Y.x,U.y-Y.y)<2.35))$.push(Y)}}return cZ=$,$}function EJ($,J){for(let{x:Q,y:Z}of _R())J($,Q,Z)}function VR($,J=0){let Q=new Path2D(j7),Z=Math.sin(Math.PI*J);$.lineWidth=6.8,EJ($,(W,K,X)=>{let H=(K/32-J)*5,Y=Z*Math.exp(-(H*H));W.save(),W.translate(K,X),W.rotate(Y*1.2),W.scale(0.058,0.058),W.translate(-32,-32),W.stroke(Q),W.restore()})}var aX=[{id:"link-modular-disc",name:"Круги",draw:($)=>EJ($,(J,Q,Z)=>w1(J,Q,Z,1.24))},{id:"link-modular-ring",name:"Кольца",draw($){$.lineWidth=0.55,EJ($,(J,Q,Z)=>{J.beginPath(),J.arc(Q,Z,1.03,0,Math.PI*2),J.stroke()})}},{id:"link-modular-square",name:"Квадраты",draw:($)=>EJ($,(J,Q,Z)=>J.fillRect(Q-1.15,Z-1.15,2.3,2.3))},{id:"link-modular-repeat",name:"Повторы знака",animate:!0,draw:VR}],v1=23,qJ=24/v1,lX=new WeakMap,UJ;function uX($){let J=lX.get($);if(J)return J;let Q=document.createElement("canvas");Q.width=v1,Q.height=v1;let Z=Q.getContext("2d"),W=1.25,K=v1-W*2;Z.drawImage($,W,W,K,K);let X=Z.getImageData(0,0,v1,v1).data,H=Array.from({length:v1*v1},(Y,U)=>Math.pow(X[U*4+3]/255,0.82));return lX.set($,H),H}function zR(){if(UJ)return UJ;let $=new Path2D;$.addPath(new Path2D(j7),new DOMMatrix([0.37,0,0,0.37,0.9,0.9]));let J=document.createElement("canvas").getContext("2d");return J.lineWidth=3.4,J.lineCap="round",J.lineJoin="round",UJ=Array.from({length:v1*v1},(Q,Z)=>{let W=1+(Z%v1+0.5)*qJ,K=1+(Math.floor(Z/v1)+0.5)*qJ;return J.isPointInStroke($,W,K)?1:0}),UJ}function nZ($,J,Q,Z=!1){let W=["·",":","+","x","*","#","@"],K=Math.sin(Math.PI*Q);if(Z)$.textAlign="center",$.textBaseline="middle";J.forEach((X,H)=>{let Y=H%v1,U=Math.floor(H/v1),G=1+(Y+0.5)*qJ,E=1+(U+0.5)*qJ,q=(Y/v1+U/v1*0.28-Q*1.28)*7,F=K*Math.exp(-(q*q)),O=Math.min(1,X+F*0.28);if($.globalAlpha=0.23+0.77*O,Z)$.font=`600 ${0.48+O*0.78}px monospace`,$.fillText(W[Math.round(O*(W.length-1))],G,E+0.06);else w1($,G+F*X*0.28,E,0.11+0.34*O)}),$.globalAlpha=1}var rX=[{id:"model-field-dots",name:"Портрет из точек",width:26,image:"./sculpt/header-head-cut.webp",animate:!0,duration:920,draw($,J,Q){nZ($,uX(J),Q)}},{id:"model-field-ascii",name:"Портрет из ASCII",width:26,image:"./sculpt/header-head-cut.webp",animate:!0,duration:920,draw($,J,Q){nZ($,uX(J),Q,!0)}},{id:"link-field-dots",name:"Звенья в квадрате",width:26,animate:!0,duration:920,draw($,J){nZ($,zR(),J)}}],BR={id:"link-block",name:"Угловатые звенья",width:34,draw($){let J=[[15.6,16],[11.1,20.5],[7.1,20.5],[3.9,17.3],[3.9,13.6],[12.3,5.2],[16.6,5.2],[19.1,7.7]];$.lineWidth=4.35,$.lineCap="butt",$.lineJoin="miter",O1($,J),O1($,J.map(([Q,Z])=>[34-Q,26-Z])),U8($,[[9.6,17.8],[21.9,5.5],[25,8.6],[12.7,20.9]])}},kR=[{id:"ribbon",name:"Лента",width:42,draw($){let J=new Path2D("M2 14C2 8.9 5.8 5.4 11.2 5.4C17.2 5.4 20.8 8.9 24.1 13.1C26.4 16.1 28.5 18.6 31.6 18.6C34 18.6 35.4 17.3 36.2 15.5L39 18C37.7 20.9 35 22.6 31.6 22.6C26.5 22.6 23.2 19.6 20 15.4C17.4 12.1 14.8 9.3 11.2 9.3C8.2 9.3 6.3 11.2 6.3 14C6.3 16.6 8.1 18.4 10.9 18.4C12.8 18.4 14.4 17.4 15.8 16.2L18.1 19.2C16 21.4 13.7 22.4 10.9 22.4C5.7 22.4 2 18.8 2 14Z");$.fill(J),$.translate(42,26),$.rotate(Math.PI),$.fill(J)}},{id:"arc-gap",name:"Просвет",width:32,draw($){$.fill(new Path2D("M4 13C4 6.8 9.1 2.8 15.2 2.8C20.3 2.8 24.3 5.1 26.3 8.4C22.3 7.2 19.3 8 16.6 10.2C13 13 11.3 17.1 5.1 17.5C4.4 16.2 4 14.6 4 13ZM28 13C28 19.2 22.9 23.2 16.8 23.2C11.7 23.2 7.7 20.9 5.7 17.6C9.7 18.8 12.7 18 15.4 15.8C19 13 20.7 8.9 26.9 8.5C27.6 9.8 28 11.4 28 13Z"))}}],CR=[...mX,...dX,...cX,...gZ,...nX,...pZ,...sX,...oX,...iX,...aX,...rX,BR,...kR],L8=($)=>$.map(({id:J,name:Q})=>({id:J,name:Q})),LD=L8(mX),DD={name:"Знак-связь",marks:L8(iX)},_D={name:"Модули знака-связи",marks:L8(aX)},VD={name:"Поле частиц",marks:L8(rX)},zD=[{id:"cover-portraits",name:"Голова с обложки",marks:L8(sX)},{id:"site-links",name:"Знак-связь с сайта",marks:L8(oX)}],BD=[{id:"portraits",name:"Портрет",marks:L8(gZ)},{id:"frames",name:"Рамки",marks:L8(nX)},{id:"motion",name:"Движение и частицы",marks:L8(pZ)},{id:"symbols",name:"Геометрия",marks:L8(cX)},{id:"wordmarks",name:"Подписи WWN",marks:L8(dX)}];function tX($,J,Q=2,Z){let W=CR.find((U)=>U.id===$)??DR,K=document.createElement("canvas");K.dataset.logo=W.id,K.setAttribute("aria-hidden","true"),K.width=(W.width??32)*Q,K.height=26*Q;let X=K.getContext("2d");if(!X)return null;X.scale(Q,Q),X.fillStyle=J,X.strokeStyle=J,X.lineWidth=1.25,X.lineCap="round",X.lineJoin="round";let H;function Y(U=0){if(X.clearRect(0,0,K.width/Q,26),H)W.draw(X,H,U);else W.draw(X,U)}if(W.image){let U=new Image;U.addEventListener("load",()=>{H=U,Y(),K.dataset.rendered="true"},{once:!0}),U.addEventListener("error",()=>{F6(X),K.dataset.rendered="fallback"},{once:!0}),U.src=new URL(W.image,import.meta.url).href}else Y();if(W.animate&&Z){let E=function(){if(U.matches||W.image&&!H)return;cancelAnimationFrame(G);let q=performance.now();function F(O){let M=Math.min(1,(O-q)/(W.duration??620));if(Y(M===1?0:M),M<1)G=requestAnimationFrame(F)}G=requestAnimationFrame(F)},U=matchMedia("(prefers-reduced-motion: reduce)"),G;Z.addEventListener("pointerenter",E),Z.addEventListener("focus",E),Z.addEventListener("brand-preview-replay",E)}return K}var eZ={id:"dock",title:"Нижняя панель",offset:0,scale:0.86},aZ=[{id:"editorial",title:"Журнал",offset:0.16,scale:0.79},{id:"schematic",title:"Схема",offset:0,scale:0.8},eZ,{id:"focus",title:"Фокус",offset:0.15,scale:0.83}],rZ=[[-0.45,1.26,1.16],[0.46,-2.7,1.22],[1.05,1.62,-0.35]],k9="http://www.w3.org/2000/svg",JH=()=>matchMedia("(max-width: 600px)").matches,IR=new Map([["glass-pill",{panel:"glass-pill",layout:"dock"}],["glass-rail",{panel:"glass-rail",layout:"dock"}],["glass-split",{panel:"glass-split",layout:"dock"}],["glass-split-schematic",{panel:"glass-split",layout:"schematic"}]]),PR=new Set(["stacked","right","top-left","top-stack","top-right","top-center","top-split"]),AR=new Set(["helvetica","avenir","condensed","menlo","baskerville","site"]),TR=new Set(["stack","three-lines","outline","vertical","studio","split"]),eX=new Set(["signal","glass","directory"]),tZ=new Map([["editorial",{left:["Независимая инженерная","студия"],right:["Разработка / DevOps"]}],["portrait",{left:["Интерактивный ASCII-портрет"],right:["Двигайте курсор","Портрет следует за ним"]}],["corners",{corners:!0}],["details",{corners:!0,left:["Независимая инженерная студия"],footer:"Реквизиты"}]]);function wR($,J,Q){let Z=document.createElement("div");if(Z.className="cover-edge-preview",Z.dataset.edgeStyle=J,Q.corners)for(let W of["top-left","top-right","bottom-left","bottom-right"]){let K=document.createElement("i");K.className="cover-edge-corner",K.dataset.corner=W,K.setAttribute("aria-hidden","true"),Z.append(K)}for(let[W,K]of[["left",Q.left],["right",Q.right],["footer",Q.footer&&[Q.footer]]]){if(!K)continue;let X=document.createElement("p");X.className=`cover-edge-label cover-edge-label--${W}`;for(let H of K){let Y=document.createElement("span");Y.textContent=H,X.append(Y)}Z.append(X)}$.prepend(Z)}function $H($,J,Q){if(JH())return{...$,scale:0.66,offsetY:0.19};let Z=J.clientWidth/Math.max(1,J.clientHeight);return{...$,scale:Q.scale,offsetX:5.6*Z*Q.offset,offsetY:Q.id==="schematic"?0.035:$.offsetY}}function QH({host:$,cover:J,links:Q,onChange:Z,directoryMarkup:W,params:K=new URL(location.href).searchParams}){let X=K.get("cover"),H=IR.get(X),Y=aZ.find((L)=>L.id===(H?.layout??X));if(!Y)return null;let G=$.closest(".experience").parentElement,E=G.querySelector(".masthead"),q=K.get("effect"),F=X==="glass-split-schematic"?q==="all"?[...eX]:eX.has(q)?[q]:[]:[],O=F.includes("signal"),M,N=[];if(H){if(document.body.dataset.coverVariant=Y.id,document.body.dataset.coverTopbar=H.panel,J.querySelector(".cover-brand-suffix").hidden=!1,Y.id==="schematic"){let L=K.get("brand");document.body.dataset.coverBrand=PR.has(L)?L:"inline";let C=K.get("font");if(AR.has(C))document.body.dataset.coverBrandFont=C;if(L==="top-left"&&C==="condensed"){E.classList.add("masthead--aligned-brand"),E.querySelector(".cover-menu").before(J.querySelector(".cover-credit"));let I=K.get("mark");if(q==="all"&&TR.has(I))document.body.dataset.coverMark=I;let S=K.get("edge");if(q==="all"&&tZ.has(S))wR(J,S,tZ.get(S));if(q==="all"&&I==="vertical"&&!tZ.has(S)){let f=E.querySelector(".brand");f.href=location.pathname+location.search;let g=K.get("logo")??"menu-sign",b=g==="menu-sign",d=tX(b?"link-classic":g,getComputedStyle(f).color,2,f);if(b&&d)f.classList.add("brand--in-menu");if(d)f.append(d)}}}if(H.panel==="glass-split"){let L=E.querySelector(".cover-menu"),C=document.createElement("div");C.className="cover-topbar-group";let I=E.querySelector(".brand--in-menu");if(I)C.append(I);if(C.append(...L.querySelectorAll('button:not([data-section="more"])')),L.prepend(C),F.includes("directory"))M=xX(L,W)}if(F.length)document.body.dataset.coverEffect=F.join(" ");if(F.includes("glass"))gX(G);if(Y===eZ)return{frame:(L)=>$H(L,$,eZ)}}else{let L=document.createElement("nav");L.className="cover-variant-toolbar",L.setAttribute("aria-label","Варианты обложки"),E.after(L),N=aZ.map((C)=>{let I=document.createElement("button");return I.type="button",I.textContent=C.title,I.addEventListener("click",()=>{if(Y===C)return;Y=C;let S=new URL(location.href);S.searchParams.set("cover",C.id),history.replaceState(history.state,"",S),z(),Z()}),L.append(I),I})}let R=document.createElementNS(k9,"svg");R.classList.add("cover-variant-guides"),R.setAttribute("aria-hidden","true");let _=rZ.map(()=>{let L=document.createElementNS(k9,"g"),C=document.createElementNS(k9,"path"),I=document.createElementNS(k9,"rect");I.setAttribute("width",6),I.setAttribute("height",6),L.append(C,I);let S;if(O)S=document.createElementNS(k9,"path"),S.setAttribute("pathLength","100"),S.classList.add("cover-guide-pulse"),L.append(S);return R.append(L),{group:L,line:C,marker:I,pulse:S}});J.prepend(R);let D=O?hX({host:$,links:Q,connectors:_,points:rZ}):null,k=document.createElement("p");k.className="cover-variant-caption",k.setAttribute("aria-hidden","true"),Q[0].parentElement.after(k);let T=null,P=null,A=0;function y(){A=Q.indexOf(T||P||Q[0]),Q.forEach((L,C)=>L.classList.toggle("is-cover-highlighted",C===A)),k.textContent=Q[A].querySelector("small").textContent}Q.forEach((L)=>{L.addEventListener("pointerenter",(C)=>{if(C.pointerType==="touch")return;T=L,y()}),L.addEventListener("pointerleave",()=>{if(T!==L)return;T=null,y()}),L.addEventListener("focus",()=>{P=L,y()}),L.addEventListener("blur",()=>{P=null,y()})});function z(){document.body.dataset.coverVariant=Y.id,N.forEach((L,C)=>L.setAttribute("aria-pressed",String(aZ[C]===Y)))}return z(),y(),{updateEffect:D?.update,clearEffect(L){D?.clear(L),M?.()},frame(L){return $H(L,$,Y)},getAttention(){if(Y.id!=="focus"||!(T||P))return null;return{x:-0.94,y:-0.34+A*0.29}},drawGuides(L){if(Y.id!=="schematic"||JH())return;let C=$.getBoundingClientRect();R.setAttribute("viewBox",`0 0 ${C.width} ${C.height}`);let I=12,S=L.projectPoints(rZ);_.forEach((f,g)=>{let{line:b,marker:d,pulse:h}=f,i=S[g],t=Q[g].querySelector(".cover-link-copy").getBoundingClientRect(),Z0=t.left+t.width/2<C.left+C.width/2,E0=(Z0?t.right+I:t.left-I)-C.left,C0=t.top+t.height/2-C.top,_0=g===1&&!Z0?C.width-i.x:i.x,o=Z0?Math.max(E0+30,_0):Math.min(E0-30,_0),W0=o+(E0-o)*0.35,e=o+(E0-o)*0.65,N0=`M${o} ${i.y} H${W0} L${e} ${C0} H${E0}`;b.setAttribute("d",N0),h?.setAttribute("d",N0),d.setAttribute("x",o-3),d.setAttribute("y",i.y-3),f.point={x:o,y:i.y}})}}}var $5="https://t.me/wr0ngn4m3",KH=`1111111011001110001111111
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
`);var f7=(KH.length+8)*8;var XH=KH.flatMap(($,J)=>Array.from($,(Q,Z)=>Q==="1"?[(Z+4+0.5)*8,(J+4+0.5)*8]:null).filter(Boolean));var SR=[[-2,-2],[2,-2],[-2,2],[2,2]],ZH=XH.flatMap(([$,J],Q)=>SR.map(([Z,W],K)=>[$+Z,J+W,"#xo+*"[(Q+K*3)%5]]));function WH($,J){$.fillStyle="#edeee5",$.font=`700 ${J}px monospace`,$.textAlign="center",$.textBaseline="middle"}function HH($,J,Q){let Z=$.getContext("2d");if(!Z)return;$.width=$.height=f7;let W=$.nextElementSibling;function K(q=!1){if(Z.clearRect(0,0,f7,f7),q){Z.fillStyle="#edeee5",Z.fillRect(0,0,f7,f7),Z.fillStyle="#1726a5";for(let[F,O]of XH)Z.fillRect(F-4,O-4,8,8)}else{WH(Z,5.25);for(let[F,O,M]of ZH)Z.fillText(M,F,O,4)}}K();let X=!1;if(W.addEventListener("click",()=>{X=!X,K(X),W.textContent=X?"Вернуть ASCII":"Сканировать QR"}),Q)return;let H=document.createElement("canvas");H.className="contact-qr-flight",H.setAttribute("aria-hidden","true");let Y=H.getContext("2d");if(!Y)return;document.body.append(H),$.style.opacity="0";let U=ZH.map(([q,F,O],M)=>{let N=Math.random()*1.16-0.08,R=0.025+Math.random()*0.16,_=[[N,-R],[1+R,N],[N,1+R],[-R,N]],[D,k]=_[M%_.length];return[q,F,D,k,Math.random()*0.26,O]}),G=performance.now();function E(q){let F=Math.min(1,(q-G)/780);if(X||J.hidden||!$.isConnected||F===1){H.remove(),$.style.opacity="";return}let O=innerWidth,M=innerHeight;if(H.width!==O||H.height!==M)H.width=O,H.height=M;Y.clearRect(0,0,O,M);let N=$.getBoundingClientRect(),R=N.width/f7;WH(Y,5.25*R);for(let[_,D,k,T,P,A]of U){let y=Math.max(0,(F-P)/(1-P)),z=(1-y)**3,L=N.left+_*R,C=N.top+D*R,I=L+(k*O-L)*z,S=C+(T*M-C)*z;Y.globalAlpha=Math.min(1,y*6),Y.fillText(A,I,S,4*R)}requestAnimationFrame(E)}E(G)}var jR=`
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
`.trimEnd().slice(1),fR=["Репозиторий","Сборка","Запуск"],vR=[["00:01","Репозиторий получен"],["00:02","Зависимости установлены"],["00:03","Приложение запущено"]];function YH($=!1){return`<figure class="paas-launch" data-paas-launch data-launch-variant="${$?"live":"still"}" data-launch-state="ready">
    <figcaption class="paas-launch__caption">
      <span>Демо запуска</span>
      ${$?'<button class="paas-launch__replay" type="button">Повторить запуск</button>':""}
    </figcaption>
    <div class="paas-launch__graphic">
      <pre class="paas-launch__art" aria-hidden="true">${jR.replaceAll(">","&gt;")}</pre>
      ${$?'<canvas class="paas-launch__canvas" aria-hidden="true" hidden></canvas>':""}
      <ol class="paas-launch__route">
        ${fR.map((J)=>`<li data-launch-step-state="done">${J}</li>`).join("")}
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
          ${vR.map(([J,Q])=>`<li data-launch-log-state="shown"><code><span aria-hidden="true">${J}</span> ${Q}</code></li>`).join("")}
        </ul>
      </div>
    </div>
  </figure>`}function UH($,J){if(!$||J)return;let Q=$.querySelectorAll("[data-launch-step-state]"),Z=$.querySelectorAll("[data-launch-log-state]"),W=$.dataset.launchVariant==="live"?600:380,K;function X(H){if(!$.isConnected||$.closest("[hidden]"))return;if($.dataset.launchState=H===Q.length?"ready":"running",Q.forEach((Y,U)=>{Y.dataset.launchStepState=U<H?"done":U===H?"active":"queued"}),Z.forEach((Y,U)=>{Y.dataset.launchLogState=U<H?"shown":"pending"}),H<Q.length)K=setTimeout(()=>X(H+1),W)}return X(0),()=>clearTimeout(K)}var GH=[[-0.34,-0.42,0.16],[0.25,0.14,-0.14],[0.49,0.78,-0.09]],d1={x:1.55,y:0.235,z:0.93},n8={side:[":","#edeee56b"],front:[":","#edeee59e"],slot:[".","#edeee56b"],vent:["x","#edeee59e"],top:["x","#edeee5cc"],topGrain:["+","#edeee5cc"],edge:["+","#edeee5"],indicator:["*","#edeee5"]};function J5($,J,Q){return $+(J-$)*Q}function yR($,J,Q,Z){let K=Math.abs(J)>d1.x-0.05,X=Math.abs(Q)>d1.y-0.05,H=Math.abs(Z)>d1.z-0.05;if($===0&&(X||H)||$===1&&(K||H)||$===2&&(K||X))return n8.edge;if($===2){if(Math.abs(Q)<0.095&&J>-0.99&&J<0.52)return n8.slot;if(Math.abs(Q)<0.13&&(Math.abs(J-0.86)<0.1||Math.abs(J-1.14)<0.09))return n8.indicator;return n8.front}if($===0)return Math.abs(Q)<0.1&&Math.abs(Z)<0.65&&Math.cos(Z*44)>-0.45?n8.vent:n8.side;if(Math.abs(J)<1.05&&Math.abs(Z)<0.61&&Math.cos(Z*41)>-0.3)return n8.vent;return(Math.floor((J+2)*12)*7+Math.floor((Z+1)*16)*13)%11<2?n8.topGrain:n8.top}function O6($,J,Q){let Z=$?.getContext("2d");if(!Z)return;let W=$.closest("[data-paas-launch]"),K=[...W?.querySelectorAll("[data-launch-step-state]")??[]],X=GH.map((P)=>[...P]),H={x:0,y:0},Y=new AbortController,U={signal:Y.signal},G=0,E=0,q=0,F=-1/0,O=!0,M=0.62,N=0.38;function R(){if(!q&&O&&!document.hidden)q=requestAnimationFrame(D)}function _(){if(G=$.clientWidth,E=$.clientHeight,!G||!E)return;let P=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(G*P),$.height=Math.round(E*P),Z.setTransform(P,0,0,P,0,0),R()}function D(P){if(q=0,!$.isConnected||$.closest("[hidden]")||!G||!E)return;if(!J&&P-F<32){R();return}let A=J?1:1-Math.exp(-Math.min(P-F,85)/135);F=P;let y=J||W?.dataset.launchState==="ready",z=Q?.()??(y?3:K.filter((e)=>e.dataset.launchStepState==="done").length);for(let e=0;e<X.length;e++)for(let N0=0;N0<3;N0++)X[e][N0]=J5(X[e][N0],e<z?0:GH[e][N0],A);if(!J)M=J5(M,0.62+Math.sin(P/1900)*0.18+H.x*0.24,A*0.55),N=J5(N,0.38+Math.sin(P/2300)*0.04-H.y*0.09,A*0.55);let L=Math.sin(M),C=Math.cos(M),I=Math.sin(N),S=Math.cos(N),f=L*S,g=I,b=C*S,d=C*d1.x+L*d1.z,h=I*(L*d1.x+C*d1.z)+S*d1.y,i=1/0,t=-1/0,Z0=1/0,E0=-1/0;X.forEach(([e,N0,T0],A0)=>{let e0=C*e-L*T0,j=S*(N0+(A0-1)*0.58)-I*(L*e+C*T0);i=Math.min(i,e0-d),t=Math.max(t,e0+d),Z0=Math.min(Z0,j-h),E0=Math.max(E0,j+h)});let C0=(i+t)/2,_0=(Z0+E0)/2,o=Math.min(G/Math.max(4.2,t-i+0.3),E/Math.max(3.32,E0-Z0+0.3)),W0=Math.max(4.5,G/108,E/78);Z.clearRect(0,0,G,E),Z.font=`600 ${Math.max(5,W0*1.11)}px ui-monospace, monospace`,Z.textAlign="center",Z.textBaseline="middle";for(let e=W0/2;e<E;e+=W0){let N0=(E/2-e)/o+_0,T0=g*7+S*N0;for(let A0=W0/2;A0<G;A0+=W0){let e0=(A0-G/2)/o+C0,j=f*7+C*e0-L*I*N0,d0=b*7-L*e0-C*I*N0,f0=1/0,I0;for(let V0=0;V0<X.length;V0++){let[F0,U1,q1]=X[V0],l0=j-F0,w=T0-U1-(V0-1)*0.58,V=d0-q1,u=(l0-d1.x)/f,a=(w-d1.y)/g,$0=(V-d1.z)/b,s=Math.max(u,a,$0);if(s>=f0||s>(l0+d1.x)/f||s>(w+d1.y)/g||s>(V+d1.z)/b)continue;f0=s,I0=yR(s===u?0:s===a?1:2,l0-f*s,w-g*s,V-b*s)}if(!I0)continue;let[M0,a0]=I0;Z.fillStyle=a0,Z.fillText(M0,A0,e)}}if(!J)R()}if(!J)$.addEventListener("pointermove",(P)=>{let A=$.getBoundingClientRect();H.x=(P.clientX-A.left)/A.width*2-1,H.y=(P.clientY-A.top)/A.height*2-1},U),$.addEventListener("pointerleave",()=>{H.x=H.y=0},U);document.addEventListener("visibilitychange",R,U);let k=new ResizeObserver(_);k.observe($);let T=new IntersectionObserver(([P])=>{O=P.isIntersecting,R()});return T.observe($),_(),()=>{cancelAnimationFrame(q),k.disconnect(),T.disconnect(),Y.abort()}}var EH=["·",":","+","x","o","*","#"];function bR($,J,Q,Z){$.canvas.width=Q,$.canvas.height=Z,$.font="800 100px Arial, sans-serif";let W=Q*0.94*100/$.measureText(J).width,K=Math.min(W,Z*0.97,178);$.font=`800 ${K}px Arial, sans-serif`,$.textAlign="center",$.textBaseline="middle",$.fillText(J,Q/2,Z*0.515);let{data:X}=$.getImageData(0,0,Q,Z),H=Math.max(4,Math.round(K/20)),Y=[];for(let U=H;U<Z;U+=H)for(let G=H;G<Q;G+=H)if(X[(U*Q+G)*4+3]>120)Y.push({x:G,y:U});return{points:Y,step:H}}function qH($,J,Q,Z){let W=$.querySelector(".paas-tech-visual"),K=$.querySelector("canvas"),X=K.getContext("2d"),H=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!X||!H)return{select(){},stop(){}};let Y=Q,U=0,G=0,E=0,q=0,F,O,M,N=0,R=0,_=[],D=[],k=[];function T(L){let C=1-(1-L)**3,I=Math.sin(L*Math.PI);X.clearRect(0,0,U,G),X.textAlign="center",X.textBaseline="middle",X.font=`600 ${M*1.12}px ui-monospace, monospace`,X.fillStyle="#edeee5";let S=U/2-M,f=Math.min(R,G-R,q*1.32)-M;k=Array.from({length:Math.max(_.length,D.length)},(g,b)=>{let d=_[b]??{x:N,y:R,alpha:0},h=D[b]??{x:N,y:R,alpha:0},i=Math.sin(b*91.73),t=d.x+(h.x-d.x)*C+i*E*0.19*I,Z0=d.y+(h.y-d.y)*C+Math.sin(b*673)*q*0.43*I,E0=d.alpha+(h.alpha-d.alpha)*C,C0=Math.hypot((t-N)/Math.max(1,S),(Z0-R)/Math.max(1,f)),_0=Math.max(0,Math.min(1,(1-C0)/(0.18+Math.abs(i)*0.11))),o=1-Math.min(1,I*4)*(1-_0*_0*(3-2*_0));if(X.globalAlpha=E0*(0.76+Math.abs(i)*0.24)*o,X.globalAlpha>0.01)X.fillText(EH[(b+Math.floor(I*5))%EH.length],t,Z0);return{x:t,y:Z0,alpha:E0}}),X.globalAlpha=1}function P(L){let C=Math.min(1,(L-O)/590);if(T(C),C<1)F=requestAnimationFrame(P);else k=D}function A(L,C=!0){if(Y=L,!E||!q)return;cancelAnimationFrame(F);let I=bR(H,Z[Y],E,q);if(M=I.step,_=k,D=I.points.map(({x:S,y:f})=>({x:S+N-E/2,y:f+R-q/2,alpha:1})),J||!C){T(1),k=D;return}O=performance.now(),F=requestAnimationFrame(P)}function y(){U=K.clientWidth,G=K.clientHeight,E=Math.min(600,W.clientWidth),q=W.clientHeight;let L=W.getBoundingClientRect(),C=K.getBoundingClientRect();N=L.left-C.left+L.width/2,R=L.top-C.top+L.height/2;let I=Math.min(devicePixelRatio||1,2);K.width=Math.round(U*I),K.height=Math.round(G*I),X.setTransform(I,0,0,I,0,0),_=[],k=[],A(Y,!1)}let z=new ResizeObserver(y);return z.observe(W),z.observe(K),y(),{select:A,stop(){z.disconnect(),cancelAnimationFrame(F)}}}var NH=[{title:"Репозиторий",action:"Проект из GitHub или GitLab",detail:"Разработчик подключает репозиторий и запускает проект через веб-интерфейс. Платформа сама получает исходный код.",input:"GitHub / GitLab",output:"Исходный код"},{title:"Сборка",action:"Подготовка среды запуска",detail:"Платформа определяет стек проекта и устанавливает нужные инструменты и библиотеки. Это избавляет разработчика от ручной настройки окружения.",input:"Исходный код",output:"Готовая сборка"},{title:"Запуск",action:"Работающий сервис в облаке",detail:"Платформа разворачивает приложение. Разработчик получает адрес работающего сервиса и логи, по которым можно проверить запуск.",input:"Готовая сборка",output:"URL и логи запуска",previewOutput:"Пример URL · https://app.wwn.example"}],RH=[{name:"Интерфейс и API",tools:"Next.js · FastAPI",symbol:"API",detail:"Next.js показывает интерфейс платформы. FastAPI принимает запрос на запуск."},{name:"Фоновые задачи",tools:"Celery",symbol:"Celery",detail:"Выполняет задачи запуска в фоне."},{name:"Среда выполнения",tools:"Kubernetes",symbol:"K8s",detail:"Запускает приложения в облаке."},{name:"Подготовка окружения",tools:"Terraform · Ansible",symbol:"IaC",detail:"Terraform описывает инфраструктуру для кластера, Ansible настраивает окружение."},{name:"Синхронизация с Git",tools:"Argo CD",symbol:"GitOps",detail:"Применяет конфигурацию из Git в кластере Kubernetes."}],hR=[{label:"Интерфейс и задачи",nodes:["Next.js","FastAPI","Celery"],note:"Интерфейс отправляет запрос в API. Фоновые задачи передаются Celery."},{label:"Развертывание · GitOps",nodes:["Git","Argo CD","Kubernetes"],note:"Argo CD применяет конфигурацию из Git в кластере."},{label:"Подготовка окружений",nodes:["Terraform · Ansible","Kubernetes"],note:"Инструменты описывают и настраивают инфраструктуру кластера."}];function FH($){if($==="trace")return`<div class="paas-chapter">
      <h2>Из репозитория <br>в облако</h2>
      <ol class="paas-trace">
        ${NH.map(({action:J,detail:Q,input:Z,output:W})=>`<li>
          <h3>${J}</h3><p>${Q}</p>
          <samp>${Z} <span aria-label="переходит в">→</span> ${W}</samp>
        </li>`).join("")}
      </ol>
    </div>`;return g6(NH,"Как работает / PaaS","Этапы запуска")}function g6($,J,Q,Z='<canvas class="paas-launch__canvas" aria-hidden="true"></canvas>'){return`<div class="paas-chapter paas-sequence" data-paas-sequence>
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
  </div>`}function OH($){if($==="flows")return`<div class="paas-chapter">
      <h2>Архитектура платформы</h2>
      <div class="paas-architecture">
        ${hR.map(({label:J,nodes:Q,note:Z})=>`<section>
          <h3>${J}</h3>
          <div class="paas-architecture__flow">${Q.map((W)=>`<b>${W}</b>`).join('<span aria-label="передает в">→</span>')}</div>
          <p>${Z}</p>
        </section>`).join("")}
      </div>
    </div>`;return p6([{title:"Запуск приложения",tools:RH.slice(0,3)},{title:"Управление окружением",tools:RH.slice(3)}])}function p6($,J="paas"){let Q=$.flatMap((W)=>W.tools),Z=(W)=>{let K=Q.indexOf(W);return`<button type="button" data-paas-tech="${K}" data-particle-word="${W.symbol}" aria-pressed="${K===0}">${W.tools}</button>`};return`<div class="paas-chapter paas-layers" data-paas-tech-map>
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
  </div>`}function MH($,J){let Q=$.querySelector("[data-paas-tech-map]");if(!Q)return;let Z=[...Q.querySelectorAll("[data-paas-tech]")],W=Z.map((G)=>G.dataset.particleWord),K=[...Q.querySelectorAll("[data-paas-tech-detail]")],X=0,H;function Y(){H=qH(Q,J,X,W)}function U(G){if(G.type==="pointerover"&&G.pointerType==="touch")return;let E=G.target.closest("[data-paas-tech]");if(!E)return;let q=Number(E.dataset.paasTech);if(X===q)return;X=q,H?.select(q),Z.forEach((F,O)=>{F.setAttribute("aria-pressed",String(F===E)),K[O].hidden=F!==E})}return Q.addEventListener("pointerover",U),Q.addEventListener("focusin",U),Q.addEventListener("click",U),{start:Y,stop(){H?.stop(),H=void 0}}}function LH($,J){return l6($,J,(Q,Z,W)=>O6(Q,Z,()=>[0,2,3][W()]))}function l6($,J,Q,{autoAdvance:Z=!0}={}){let W=$.querySelector("[data-paas-sequence]");if(!W)return;let K=[...W.querySelectorAll("[data-paas-stage]")],X=[...W.querySelectorAll("[data-paas-stage-content]")],H=[...W.querySelectorAll("[data-paas-stage-output]")],Y=W.querySelector("canvas"),U=0,G,E;function q(){G=Q?.(Y,J,()=>U)}function F(N){if(N===U)return;if(U=N,K.forEach((R,_)=>{R.setAttribute("aria-pressed",String(_===U)),X[_].inert=_!==U,H[_].hidden=_!==U}),J&&G)G(),q()}function O(){if(F(U+1),U<X.length-1)E=setTimeout(O,4400)}function M(N){let R=N.target.closest("[data-paas-stage]");if(!R)return;clearTimeout(E),F(Number(R.dataset.paasStage))}return W.addEventListener("click",M),W.addEventListener("pointerover",(N)=>{if(N.pointerType==="mouse")M(N)}),{start(){if(F(0),q(),!J&&Z)E=setTimeout(O,4400)},stop(){clearTimeout(E),G?.(),G=void 0}}}var DH=["·",":","+","x","*","#"];function xR(){let $=[];for(let J=0;J<=40;J++){let Q=J/40,Z=(Q-0.5)*2.4,W=0.25+0.66*Math.sin(Math.PI*Q)**1.4;for(let K=0;K<19;K++){let X=K*(Math.PI*2/19)+Q*0.9;$.push({x:Z,y:Math.cos(X)*W,z:Math.sin(X)*W,trace:K%6===0})}}return $}var _H=xR();function u6($,J,Q){let Z=$.getContext("2d");if(!Z)return()=>{};let W=performance.now(),K=0,X=-1/0,H=0,Y=0,U=0;function G(O){if(K=0,document.hidden||!Y||!U)return;if(!J&&O-X<32){K=requestAnimationFrame(G);return}X=O;let M=O-W,N=Q?.();H+=((N===2?1:0)-H)*(J?1:0.16);let _=J?0.5:M%2550/2550,D=J?0.18:0.14+0.2*Math.sin(M/1760),k=Math.sin(D),T=Math.cos(D),P=Math.min(Y/6,U/2.45),A={x:Y/2,y:U*0.525},y=J?0:Math.sin(Math.PI*_),z=N===0?_*3.4-2.8:N===1?_*4.1-1.35:_*5.5-2.75;Z.clearRect(0,0,Y,U),Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle",Z.font=`600 ${Math.max(5,P*0.13)}px ui-monospace, monospace`;let L=Y<400?2:1;for(let C=0;C<_H.length;C+=L){let{x:I,y:S,z:f,trace:g}=_H[C],b=0.48+(J?0:0.22*Math.sin(M/1870))+I*0.48,d=S*Math.cos(b)-f*Math.sin(b),h=S*Math.sin(b)+f*Math.cos(b),i=I*T+h*k,t=-I*k+h*T,Z0=Math.max(0,1-Math.abs(I-z)*1.9)*y,E0=1/(1-t*0.105),C0=(t+1.2)/2.5,_0=DH[Math.min(5,Math.max(0,Math.floor((C0+Z0*0.55)*4.1)))];Z.globalAlpha=Math.min(1,0.15+C0*0.55+Z0*0.38+(g?0.13:0)),Z.fillText(_0,A.x+i*P*E0,A.y+(d+t*0.21)*P*E0)}for(let C of[-1,1])for(let I=0;I<3;I++){let S=I-1,f=11-I;for(let g=0;g<f;g++){let b=1.36+g*0.114,d=b*C,h=C===1?H:0,i=S*(0.18+(b-1.36)*(0.19+h*0.65)),t=Math.max(0,1-Math.abs(d-z)*2)*y,Z0=N===0&&C===-1||N===1&&C===1;Z.globalAlpha=(0.22+t*0.58+(Z0?0.18:0))*(S?1:1-h*0.91),Z.fillText(DH[(I*3+g)%4],A.x+d*P,A.y+i*P)}}if(Z.globalAlpha=1,!J)K=requestAnimationFrame(G)}function E(){if(Y=$.clientWidth,U=$.clientHeight,!Y||!U)return;let O=Math.min(devicePixelRatio||1,2);if($.width=Math.round(Y*O),$.height=Math.round(U*O),Z.setTransform(O,0,0,O,0,0),!K)K=requestAnimationFrame(G)}let q=new ResizeObserver(E);q.observe($);function F(){cancelAnimationFrame(K),K=document.hidden?0:requestAnimationFrame(G)}return document.addEventListener("visibilitychange",F),E(),()=>{cancelAnimationFrame(K),q.disconnect(),document.removeEventListener("visibilitychange",F)}}var C9=[["Доступ","Шлюз проверяет права приложения и лимиты."],["Обработка","Модель формирует ответ на запрос."],["Диагностика","Ответ возвращается приложению. Трассировка помогает разобрать ошибки и задержки."]],gR=[{title:"Запрос",action:"Единый доступ к моделям",detail:"Внутренние приложения отправляют запросы через общий шлюз. Он проверяет доступ, применяет лимиты и направляет запрос к нужной модели.",output:"Запрос направлен к модели"},{title:"Ответ",action:"Ответ и диагностика",detail:"Модель возвращает ответ приложению. Команда видит задержки и ошибки в мониторинге, а отдельный запрос может разобрать по трассировке.",output:"Ответ · Метрики · Трассировка"},{title:"Обновление",action:"Проверка до выпуска",detail:"Обновления проверяются отдельно от рабочих запросов. На одинаковых задачах команда сравнивает действующую и новую версии по качеству ответов, задержкам и расходу ресурсов.",output:"Сравнение версий на одинаковых запросах"}],pR=[{title:"Обработка запросов",tools:[{tools:"Kong Gateway",symbol:"GATE",name:"Доступ и лимиты",detail:"Шлюз проверяет правила доступа и ограничивает нагрузку перед обращением к модели."},{tools:"vLLM · Kubernetes",symbol:"LLM",name:"Выполнение запросов",detail:"Модель обслуживает запросы через vLLM в Kubernetes компании."}]},{title:"Контроль и выпуск",tools:[{tools:"Prometheus · Grafana",symbol:"METRICS",name:"Состояние сервиса",detail:"Метрики показывают задержки, ошибки и нагрузку."},{tools:"Langfuse",symbol:"EVAL",name:"Трассировки и качество",detail:"Команда разбирает ответы по трассировкам и сравнивает версии на согласованных запросах."},{tools:"Git · CI/CD",symbol:"CI/CD",name:"Версии и релизы",detail:"Конфигурации и промпты версионируются. Проверка качества предшествует выпуску изменений."}]}];function VH(){return[{id:"overview",label:"Обзор",layout:"paas-hero llmops-hero",markup:`
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / LLMOps · Референсная архитектура</p>
        <h1 id="document-title">AI-ассистент для компании</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Цель проекта</p>
          <p>Дать командам единый доступ к моделям в инфраструктуре компании, видеть нагрузку и проверять качество ответов до обновления.</p>
          <p class="llmops-pilot">Качество, задержки и затраты на работу предстоит подтвердить на пилоте.</p>
        </div>
      </div>
      <figure class="llmops-demo" data-llmops-demo>
        <figcaption class="llmops-demo__caption">
          <span>Пример рабочего запроса</span>
          <button type="button" data-llmops-replay>Повторить</button>
        </figcaption>
        <canvas class="llmops-demo__art" aria-hidden="true"></canvas>
        <ol class="llmops-demo__steps">${C9.map(([$])=>`<li>${$}</li>`).join("")}</ol>
        <p class="llmops-demo__status" aria-live="polite">${C9[2][1]}</p>
      </figure>`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:g6(gR,"Как работает / LLMOps","Этапы работы LLMOps")},{id:"stack",label:"Технологии",layout:"paas-details",markup:p6(pR,"llmops")}]}function zH($,J){let Q=$.querySelector("[data-llmops-demo]"),Z=Q.querySelector("[data-llmops-replay]"),W=Q.querySelector("canvas"),K=[...Q.querySelectorAll("li")],X=Q.querySelector('[role="status"], [aria-live]'),H,Y;function U(){clearTimeout(H),Y?.(),Y=void 0}function G(q){K.forEach((F,O)=>{F.dataset.state=O===q?"current":O<q?"done":"pending"}),X.textContent=C9[q][1]}function E(){if(U(),Y=u6(W,J),J){G(C9.length-1);return}let q=0;function F(){if(G(q++),q<C9.length)H=setTimeout(F,850)}F()}return Z.hidden=J,Z.addEventListener("click",E),{start:E,stop:U}}function BH($,J){return l6($,J,u6)}function m6($,J=0.074){return $.slice(1).flatMap(([Q,Z],W)=>{let[K,X]=$[W],H=Q-K,Y=Z-X,U=Math.ceil(Math.hypot(H,Y)/J);return Array.from({length:U},(G,E)=>[K+H*E/U,X+Y*E/U])})}function PH($){return Array.from({length:22},(J,Q)=>{let Z=$+Q*0.125;return[0.51*Math.cos(Z),0.51*Math.sin(Z)]})}var kH=PH(-3),CH=PH(0.14),I9=[[m6([[-0.31,-0.37],[-0.62,0],[-0.31,0.37]]),m6([[0.17,-0.46],[-0.17,0.46]]),m6([[0.31,-0.37],[0.62,0],[0.31,0.37]])],[kH,CH,m6([[0.23,-0.13],kH.at(-1),[0.57,-0.47]]),m6([[-0.23,0.13],CH.at(-1),[-0.57,0.47]])],[...[[-0.48,0.13],[-0.12,-0.18],[0.24,-0.44]].map(([$,J])=>m6([[$,0.42],[$,J],[$+0.22,J],[$+0.22,0.42]])),m6([[-0.62,0.42],[0.61,0.42]])]],IH=["+","x",":","+"];function d6($,J,Q){let Z=$.getContext("2d");if(!Z)return()=>{};let W=performance.now(),K=0,X,H,Y=-1/0;function U(){if(!K&&!document.hidden)K=requestAnimationFrame(G)}function G(O){if(K=0,document.hidden||!X||!H)return;if(!J&&O-Y<32){U();return}Y=O;let M=J?0:O-W,N=Math.min(X/5.65,H/1.95),R=-0.3+Math.sin(M/1450)*0.065,_=Math.sin(R),D=Math.cos(R),k=M%3100/3100*3.05-0.35,T=Q?.(),P=H*0.79;Z.clearRect(0,0,X,H),Z.textAlign="center",Z.textBaseline="middle",Z.font=`600 ${Math.max(5,Math.min(11,N*0.126))}px ui-monospace, monospace`,Z.fillStyle="#edeee5";for(let A=0;A<I9.length-1;A++){let y=X*(A+0.5)/I9.length,z=y+X/I9.length,L=Math.max(5,N*0.115),C=Math.round((z-y)/L);for(let I=1;I<C;I++){let S=I/C,f=J?0:Math.max(0,1-Math.abs(A+S-k)*7);Z.globalAlpha=0.46+f*0.53,Z.fillText(f>0.35?"+":"·",y+(z-y)*S,P)}}if(I9.forEach((A,y)=>{let z=X*(y+0.5)/I9.length,L=H*0.4,C=T===void 0||T===y,I=J?0:Math.max(0,1-Math.abs(y-k)*3),S=C?0.83:0.43;for(let f of[-0.25,-0.12,0]){let g=f===0;A.forEach((b)=>{b.forEach(([d,h],i)=>{let t=d*D-f*_,Z0=d*_+f*D;Z.globalAlpha=g?Math.min(1,S+I*0.16):S*(f===-0.25?0.3:0.44),Z.fillText(g?IH[i%IH.length]:"·",z+t*N,L+(h+Z0*0.43)*N)})})}Z.globalAlpha=S,Z.fillText("o",z,P)}),Z.globalAlpha=1,!J)U()}function E(){if(X=$.clientWidth,H=$.clientHeight,!X||!H)return;let O=Math.min(2,devicePixelRatio||1);$.width=Math.round(X*O),$.height=Math.round(H*O),Z.setTransform(O,0,0,O,0,0),U()}function q(){if(document.hidden)cancelAnimationFrame(K),K=0;else U()}let F=new ResizeObserver(E);return F.observe($),document.addEventListener("visibilitychange",q),E(),()=>{cancelAnimationFrame(K),F.disconnect(),document.removeEventListener("visibilitychange",q)}}var lR=[{title:"Конфигурация",action:"Настройки хранятся в коде",detail:"Конфигурацию инфраструктуры перенесли в код. Инженер вносит изменения и запускает готовый сценарий в GitLab.",output:"Изменения переданы в GitLab CI"},{title:"Обновление",action:"GitLab обновляет настройки",detail:"Пайплайн выполняет обновление по одному сценарию. Время на эту работу сократилось примерно втрое.",output:"Настройки обновлены"},{title:"Восстановление",action:"Sentry возобновляет сбор ошибок",detail:"Блокировка диска во время резервного копирования останавливала обработчики Sentry. Теперь они восстанавливаются автоматически, а мониторинг уведомляет команду о сбоях.",output:"Сбор ошибок возобновлен"}],uR=[{title:"Инфраструктура как код",tools:[{tools:"Ansible",symbol:"IaC",name:"Настройки в коде",detail:"Настройки инфраструктуры описаны в сценариях Ansible."},{tools:"GitLab CI",symbol:"CI/CD",name:"Обновление инфраструктуры",detail:"Пайплайн GitLab CI запускает сценарий обновления из репозитория."}]},{title:"Эксплуатация",tools:[{tools:"Sentry · Snuba",symbol:"Errors",name:"Обработка ошибок",detail:"Для обработчиков Sentry настроено автоматическое восстановление после сбоев при резервном копировании."},{tools:"Grafana · ELK",symbol:"Logs",name:"Мониторинг и логи",detail:"Мониторинг и уведомления показывают сбои, а логи помогают разобраться в причине."}]}];function AH(){return[{id:"overview",label:"Обзор",layout:"paas-hero case-hero--compact",markup:`
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
      </figure>`},{id:"workflow",label:"Как работает",layout:"paas-details operations-flow",markup:g6(lR,"Как работает / IaC и мониторинг","Этапы изменений и восстановления")},{id:"stack",label:"Технологии",layout:"paas-details",markup:p6(uR,"operations")}]}function TH($,J){let Q=$.querySelector("[data-operations-demo] canvas"),Z;return{start(){Z=d6(Q,J)},stop(){Z?.(),Z=void 0}}}function wH($,J){return l6($,J,d6)}var v7=2*Math.PI/7;var NJ=Math.cos(v7/2);var mR=Array.from({length:7},($,J)=>{let Q=(J+0.5)*v7+Math.PI/2;return[Math.cos(Q),Math.sin(Q)]}),dR=[{x:0,y:0,z:1,limit:0.24,face:"front"},{x:0,y:0,z:-1,limit:0.36,face:"back"},...mR.flatMap(([$,J])=>[{x:$,y:J,z:0,limit:NJ,face:"side"},{x:$,y:J,z:1,limit:NJ+0.24-0.075,face:"bevel"},{x:$,y:J,z:-1,limit:NJ- -0.36-0.075,face:"bevel"}])];function SH($,J,Q=0){let Z=Math.hypot($,J);if(Z>0.74-Q)return!1;if(Z<0.15-Q||Math.abs(Z-0.49)<0.071-Q)return!0;let W=(Math.atan2(J,$)+Math.PI*1.5)%v7;return Z*Math.sin(Math.min(W,v7-W))<0.059-Q}function cR($,J,Q,Z){let W=1/0,K=-1/0,X;for(let H of $){let Y=H.limit-H.u*J-H.v*Q;if(Math.abs(H.w)<0.0001){if(Y<0)return!1;continue}let U=Y/H.w;if(H.w>0){if(U<W)W=U,X=H}else K=Math.max(K,U);if(K>W)return!1}return Z.depth=W,Z.surface=X,!0}function nR($,J,Q,Z,W,K){let{cosYaw:X,sinYaw:H,cosPitch:Y,sinPitch:U}=K,G=[H*Y,U,X*Y],E=dR.map((M)=>{let{x:N,y:R,z:_}=M,D=N*H+_*X;return{...M,u:N*X-_*H,v:R*Y-D*U,w:N*G[0]+R*G[1]+_*G[2],light:Math.max(0,(N*-0.2+R*0.7+_*0.48)/Math.hypot(N,R,_))}}),q=Math.max(3,W/59),F=Math.ceil(Z*1.14/q),O={};$.font=`700 ${q*1.21}px ui-monospace, monospace`,$.textAlign="center",$.textBaseline="middle";for(let M=-F;M<=F;M++){let N=-M*q/Z,R=N*Y;for(let _=-F;_<=F;_++){let D=_*q/Z;if(!cR(E,D,N,O))continue;let k=X*D-H*U*N,P=(0.286-(-H*D-X*U*N))/G[2],A=k+G[0]*P,y=R+G[1]*P,z=SH(A,y),L=O.surface.face==="front",C=((M*13+_*7)%5+5)%5,I,S;if(z)I=C<2?"#":"+",S=SH(A,y,0.018)?1:0.85;else if(L)I=C<2?":":"·",S=0.32+C%2*0.08;else{let f=O.surface.light;I=O.surface.face==="bevel"?"+":C<2?"x":":",S=Math.min(1,(O.surface.face==="bevel"?0.53:0.63)+f*0.46)}$.globalAlpha=S,$.fillText(I,J+_*q,Q+M*q)}}$.globalAlpha=1}function sR($,J,Q,Z,W,K,X,H,Y){let{cosYaw:U,sinYaw:G,cosPitch:E,sinPitch:q}=K;J.forEach(({left:F,x:O,y:M,row:N,stages:R},_)=>{let D=H===void 0||R.includes(H),k=F?Math.PI+(N-1)*0.62:(1-N)*0.62,T=(k-Math.PI/2+Math.PI*4)%v7-v7/2,P=(NJ-0.06149999999999999)/Math.cos(T),A=P*Math.cos(k),y=P*Math.sin(k),z=Q+(A*U-0.24*G)*W,L=Z-(y*E-(A*G+0.24*U)*q)*W,C=O+(z-O)*0.32;if($.strokeStyle=D?"#edeee57f":"#edeee52d",$.lineWidth=1,$.setLineDash([2,3]),$.beginPath(),$.moveTo(O,M),$.lineTo(C,M),$.lineTo(z,L),$.stroke(),$.setLineDash([]),$.fillStyle=D?"#edeee5bd":"#edeee549",$.fillRect(z-1,L-1,2,2),Y||!D)return;let I=(X+_*453)%3400/1050;if(I>=1)return;let S=I**1.55;$.globalAlpha=Math.sin(I*Math.PI)*0.85,$.fillStyle="#edeee5";let f=O+(z-O)*S,g=M+(L-M)*Math.max(0,(S-0.32)/0.68);$.fillRect(f-1,g-1,2,2),$.globalAlpha=1})}function P9($,J,Q){let Z=$.querySelector("canvas"),W=Z.getContext("2d");if(!W)return;let K=$.querySelector(".platform-hub__mark"),X=[...$.querySelectorAll("[data-hub-stages]")].map((I)=>({item:I,text:I.querySelector("span"),stages:I.dataset.hubStages.split(" ").map(Number)})),H=new AbortController,Y=performance.now(),U={x:0,y:0},G=0,E=0,q=0,F=0,O=[],M=0,N=-1/0,R=!0,_=0.56,D=0.32,k,T=Y;function P(){if(!M&&G&&E&&R&&!document.hidden)M=requestAnimationFrame(A)}function A(I){if(M=0,!Z.isConnected||Z.closest("[hidden]"))return;let S=I-N;if(!J&&S<(F<160?36:30)){P();return}N=I;let f=I-Y,g=Q?.();if(g!==k){k=g,T=I;for(let{item:i,stages:t}of X)i.toggleAttribute("data-hub-dimmed",!t.includes(g))}if(!J){let i=1-Math.exp(-Math.min(S,100)/155);_+=(0.56+Math.sin(f/1770)*0.1+U.x*0.1-_)*i,D+=(0.32+Math.sin(f/2210)*0.043-U.y*0.065-D)*i}let b={cosYaw:Math.cos(_),sinYaw:Math.sin(_),cosPitch:Math.cos(D),sinPitch:Math.sin(D)},d=E*0.5,h=F*0.465;if(W.clearRect(0,0,G,E),sR(W,O,q,d,h,b,I-T,g,J),W.fillStyle="#edeee5",nR(W,q,d,h,F,b),!J)P()}function y(){if(G=Z.clientWidth,E=Z.clientHeight,!G||!E)return;let I=Math.min(devicePixelRatio||1,1.5);Z.width=Math.round(G*I),Z.height=Math.round(E*I),W.setTransform(I,0,0,I,0,0);let S=Z.getBoundingClientRect(),f=K.getBoundingClientRect();q=K.offsetWidth/2+f.left-S.left,F=K.clientWidth,O=X.map(({text:g,stages:b},d)=>{let h=g.getBoundingClientRect(),i=d<3;return{left:i,stages:b,row:d%3,x:(i?h.right+6:h.left-6)-S.left,y:h.top+h.height/2-S.top}}),P()}let z={signal:H.signal};if(!J)$.addEventListener("pointermove",(I)=>{let S=Z.getBoundingClientRect();U.x=(I.clientX-S.left)/S.width*2-1,U.y=(I.clientY-S.top)/S.height*2-1},z),$.addEventListener("pointerleave",()=>{U.x=U.y=0},z);document.addEventListener("visibilitychange",P,z);let L=new ResizeObserver(y);L.observe(Z);let C=new IntersectionObserver(([I])=>{R=I.isIntersecting,P()});return C.observe(Z),y(),()=>{cancelAnimationFrame(M),L.disconnect(),C.disconnect(),H.abort()}}var RJ="Kubernetes и GitOps",fH=[{title:"Развертывание",action:"Выпуск сервисов из Git",detail:"Настройки платформы описаны в коде, поэтому окружение можно развернуть повторно. Argo CD применяет конфигурацию из Git, а Kubernetes запускает приложения из образов в Harbor.",output:"Git → Argo CD → Kubernetes"},{title:"Сеть и масштаб",action:"Наблюдаемая сеть и автоматический масштаб",detail:"Cilium обеспечивает связь между сервисами, а Hubble показывает, какой трафик проходит между ними. За автомасштабирование отвечают сценарии Ansible.",output:"Cilium · Hubble · Ansible"},{title:"Доступы",action:"Корпоративный вход и права по ролям",detail:"Argo CD использует Dex для связи с корпоративным LDAP. Vault также подключен к LDAP. Группы сотрудников определяют роли в Argo CD и политики доступа в Vault.",output:"LDAP → Dex → Argo CD"}],oR=[{title:"Развертывание",tools:[{tools:"Kubernetes",symbol:"K8s",name:"Среда запуска",detail:"Общее окружение, в котором разворачиваются сервисы платформы."},{tools:"Argo CD",symbol:"GitOps",name:"Доставка конфигурации",detail:"Синхронизирует конфигурацию приложений в Kubernetes с Git."},{tools:"Harbor",symbol:"Image",name:"Хранилище образов",detail:"Реестр контейнерных образов, используемых при развертывании."},{tools:"IaC",symbol:"IaC",name:"Развертывание из кода",detail:"Конфигурация инфраструктуры платформы описана в коде и воспроизводится при развертывании."}]},{title:"Сеть и масштабирование",tools:[{tools:"Cilium · Hubble",symbol:"Flow",name:"Сеть и видимость трафика",detail:"Cilium соединяет сервисы, Hubble показывает сетевые потоки между ними."},{tools:"Ansible",symbol:"Scale",name:"Автомасштабирование",detail:"Сценарии Ansible автоматизируют масштабирование платформы."}]},{title:"Секреты и доступы",tools:[{tools:"Vault",symbol:"Vault",name:"Хранение секретов",detail:"Доступ к секретам ограничен политиками Vault."},{tools:"LDAP · RBAC",symbol:"Access",name:"Вход и разграничение прав",detail:"LDAP обеспечивает вход в Vault и Argo CD. Группы привязаны к политикам Vault и ролям Argo CD."}]}],jH=`<figure class="platform-hub" aria-label="Компоненты платформы Kubernetes">
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
</figure>`,iR=`<ul class="paas-launch__route" aria-label="Компоненты проекта">
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
      <div class="paas-launch platform-overview">${jH}${iR}</div>`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:g6(fH,"Как работает / Kubernetes","Компоненты платформы",jH)},{id:"stack",label:"Технологии",layout:"paas-details",markup:p6(oR,"delivery-platform")}]}function yH($,J){return l6($,J,(Q,Z,W)=>P9(Q.closest(".platform-hub"),Z,W))}function bH($,J){let Q=$.querySelector(".platform-overview .platform-hub"),Z;return{start(){Z=P9(Q,J)},stop(){Z?.(),Z=void 0}}}var hH=new Set(["index","atlas","carousel"]),aR={paas:`
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
`};function rR($){return`<pre class="project-preview__art" aria-hidden="true">${aR[$.id].trimEnd().replace(/^\n/,"")}</pre>`}function Q5($,J,Q){return`<a class="${J}" href="#case-${$.id}">${Q}</a>`}var Z5='<span class="project-preview__arrow" aria-hidden="true">→</span>',W5='<h1 class="project-preview__title">Проекты</h1>';function tR($){return`${W5}
    <ul class="project-preview__index">
      ${$.map((J)=>`<li>${Q5(J,"project-preview__entry",`
        <span><strong>${J.name}</strong><span>${J.result}</span></span>${Z5}
      `)}</li>`).join("")}
    </ul>`}function eR($){return`${W5}
    <ul class="project-preview__atlas">
      ${$.map((J)=>`<li>${Q5(J,"project-preview__tile",`
        ${rR(J)}
        <span class="project-preview__tile-copy"><strong>${J.name}</strong><span>${J.result}</span></span>
        ${Z5}
      `)}</li>`).join("")}
    </ul>`}function $F($){return`<div class="project-preview__rail-heading">
    ${W5}<span class="project-preview__swipe">← Листайте →</span><output data-project-position aria-label="Позиция в карусели">1 / ${$.length}</output>
  </div>
  <div class="project-preview__rail-shell">
    <div class="project-preview__rail-controls" role="group" aria-label="Листать проекты">
      <button class="paas-deck__back section-glass" type="button" data-project-shift="-1" aria-label="Предыдущий проект" disabled><span aria-hidden="true">←</span></button>
      <button class="paas-deck__back section-glass" type="button" data-project-shift="1" aria-label="Следующий проект"><span aria-hidden="true">→</span></button>
    </div>
    <ul class="project-preview__rail" data-project-rail aria-label="Проекты">
      ${$.map((J,Q)=>`<li ${Q===0?"data-project-current":""}>
        ${Q5(J,"project-preview__slide",`
          ${J.id==="delivery-platform"?`<div class="platform-hub project-preview__badge" data-project-model="${J.id}" aria-hidden="true">
                <canvas class="platform-hub__canvas"></canvas><div class="platform-hub__mark"></div>
              </div>`:`<canvas class="project-preview__model" data-project-model="${J.id}" aria-hidden="true"></canvas>`}
          <div class="project-preview__feature-copy">
            <h2>${J.name}</h2>
            <p>${J.result}</p>
            <span class="project-preview__slide-open">Открыть кейс ${Z5}</span>
          </div>`)}
      </li>`).join("")}
    </ul>
  </div>`}var JF={paas:($,J)=>O6($,J,()=>3),llmops:u6,operations:d6,"delivery-platform":P9};function QF($){let J=$.querySelector("[data-project-rail]"),Q=[...J.children],[Z,W]=$.querySelectorAll("[data-project-shift]"),K=$.querySelector("[data-project-position]"),X=matchMedia("(prefers-reduced-motion: reduce)"),H=Q.map((M)=>M.querySelector("[data-project-model]")),Y=new Map,U=!1,G=-1;function E(M,N){let R=H[M],_=Y.get(M);if(!R||_?.animate===N)return;_?.stop?.(),Y.set(M,{animate:N,stop:JF[R.dataset.projectModel](R,!N)})}function q(M){return M.getBoundingClientRect().left-J.getBoundingClientRect().left+(M.offsetWidth-J.clientWidth)/2}function F(){let M=Q.map((N)=>Math.abs(q(N)));return M.indexOf(Math.min(...M))}function O(){let M=F(),N=`${M+1} / ${Q.length}`;if(K.value!==N)K.value=N;if(Z.disabled=M===0,W.disabled=M===Q.length-1,Q.forEach((R,_)=>R.toggleAttribute("data-project-current",_===M)),!U||G===M)return;for(let[R,_]of Y){if(Math.abs(R-M)<=1)continue;_.stop?.(),Y.delete(R)}E(M-1,!1),E(M+1,!1),E(M,!X.matches),G=M}return J.addEventListener("scroll",O,{passive:!0}),$.addEventListener("click",(M)=>{let N=M.target.closest("[data-project-shift]");if(!N)return;let R=Q[F()+Number(N.dataset.projectShift)];if(R)J.scrollBy({left:q(R),behavior:X.matches?"instant":"smooth"})}),{setActive(M){if(U===M)return;if(U=M,U)O();else{for(let N of Y.values())N.stop?.();Y.clear(),G=-1}}}}function xH($,J,Q,Z){let W=document.createElement("div");W.className=`project-preview project-preview--${J}`,W.innerHTML={index:tR,atlas:eR,carousel:$F}[J](Q),$.dataset.projectLayout=J,$.append(W);let K=J==="carousel"?QF(W):void 0;return W.addEventListener("click",(X)=>{let H=X.target.closest('a[href^="#case-"]');if(!H||X.button||X.metaKey||X.ctrlKey||X.altKey||X.shiftKey)return;X.preventDefault(),Z(H.hash.slice(1))}),K}var gH=`
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
  </article>`;function pH($,J){let Q=$.getContext("2d"),Z=document.createElement("canvas").getContext("2d");if(!Q||!Z)return;let W=192,K=W/64;Z.canvas.width=W,Z.canvas.height=W,Z.scale(K,K),Z.lineWidth=6.3,Z.lineCap="round",Z.lineJoin="round",Z.stroke(new Path2D(j7));let X=Z.getImageData(0,0,W,W).data,H=["x","+","#","x","+"],Y=[":","·","+"],U=performance.now(),G=0,E=0,q=0,F=-1/0,O=!0;function M(){if(!G&&E&&q&&O&&!document.hidden)G=requestAnimationFrame(N)}function N(k){if(G=0,!J&&k-F<33){M();return}F=k;let T=(k-U)/1000,P=0.4+(J?0:Math.sin(T*0.86)*0.13),A=0.26+(J?0:Math.sin(T*0.64)*0.085),y=Math.cos(P),z=Math.sin(P),L=Math.cos(A),C=Math.sin(A),I=Math.min(E/65,q/48),S=Math.max(3.4,I*0.55),f=E*0.5-2*I,g=q*0.5-1.5*I;Q.clearRect(0,0,E,q),Q.font=`600 ${S*1.25}px ui-monospace, monospace`,Q.textBaseline="middle",Q.textAlign="center",Q.fillStyle="#edeee5";for(let b=0;(b+0.5)*S<q;b++){let d=(b+0.5)*S,h=(d-g)/I;if(Math.abs(h)>25)continue;for(let i=0;(i+0.5)*S<E;i++){let t=(i+0.5)*S,Z0=(t-f)/I;if(Math.abs(Z0)>35)continue;let E0=i*7+b*11;for(let C0=0;C0<=8;C0++){let _0=(Z0-z*C0)/y,o=(h+C*(z*_0-y*C0))/L,W0=Math.round((_0+32)*K),e=Math.round((o+32)*K);if(W0<0||W0>=W||e<0||e>=W||X[(e*W+W0)*4+3]<128)continue;let N0=C0?Y:H;Q.globalAlpha=C0?0.39+0.26*(1-C0/8):0.72+0.24*(E0%9/8),Q.fillText(N0[E0%N0.length],t,d);break}}}if(Q.globalAlpha=1,!J)M()}function R(){if(E=$.clientWidth,q=$.clientHeight,!E||!q)return;let k=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(E*k),$.height=Math.round(q*k),Q.setTransform(k,0,0,k,0,0),M()}let _=new ResizeObserver(R);_.observe($);let D=new IntersectionObserver(([k])=>{O=k.isIntersecting,M()});return D.observe($),document.addEventListener("visibilitychange",M),R(),()=>{cancelAnimationFrame(G),_.disconnect(),D.disconnect(),document.removeEventListener("visibilitychange",M)}}var ZF=["·",":","+","x","#"],WF=[{normal:[0,0,1],point:($,J)=>[$,J,1],light:0.72},{normal:[1,0,0],point:($,J)=>[1,J,-$],light:0.46},{normal:[0,1,0],point:($,J)=>[$,1,-J],light:0.94}],KF=WF.map(($)=>({...$,points:Array.from({length:324},(J,Q)=>{let Z=Math.floor(Q/18),W=Q%18,K=(W+0.5)/9-1,X=(Z+0.5)/9-1;return{position:$.point(K,X),grain:(W*7+Z*13)%11,scaffold:Z%6===0||W%6===0,rim:Math.max(Math.abs(K),Math.abs(X))>0.83}})}));function lH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=performance.now(),K=0,X=0,H=0,Y=-1/0,U=Q();function G(){if(!K&&X&&H&&!document.hidden)K=requestAnimationFrame(E)}function E(O){K=0;let M=O-Y;if(!J&&M<33){G();return}Y=O;let N=J?0:O-W;U+=(Q()-U)*(J?1:1-Math.exp(-Math.min(90,M)/310));let R=0.54+Math.sin(N/2060)*0.095,_=0.34+Math.sin(N/2450)*0.048,D=Math.cos(R),k=Math.sin(R),T=Math.cos(_),P=Math.sin(_),A=Math.min(X/3.65,H/3.25),y=Math.max(4,A*0.1);function z(L,C,I,S,f){let g=L*k+I*D;Z.globalAlpha=f,Z.fillText(S,X*0.5+(L*D-I*k)*A,H*0.5-(C*T-g*P)*A)}Z.clearRect(0,0,X,H),Z.font=`600 ${y}px ui-monospace, monospace`,Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle";for(let L of KF)for(let{position:[C,I,S],grain:f,scaffold:g,rim:b}of L.points){let d=Math.max(0,Math.min(1,U*1.44-(I+1)*0.66-f*0.027)),h=(1-d)*(1-U/2)*0.14,i=(g||b?0.41:0.07)+d*0.48;z(C+L.normal[0]*h,I+L.normal[1]*h,S+L.normal[2]*h,ZF[b?2:Math.min(4,Math.floor(d*3+f/6))],i*L.light)}if(U>0.04)for(let L=0;L<70;L++){let C=L*Math.PI*2/70+N/1700,I=J?0.3:Math.sin(L/70*Math.PI)**4;z(Math.cos(C)*1.42,-1.12,Math.sin(C)*1.42,I>0.62?"+":"·",U*(0.09+I*0.23))}if(Z.globalAlpha=1,!J)G()}function q(){if(X=$.clientWidth,H=$.clientHeight,!X||!H)return;let O=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(X*O),$.height=Math.round(H*O),Z.setTransform(O,0,0,O,0,0),G()}let F=new ResizeObserver(q);return F.observe($),document.addEventListener("visibilitychange",G),q(),()=>{cancelAnimationFrame(K),F.disconnect(),document.removeEventListener("visibilitychange",G)}}var XF=["·",":","+","x","#"],HF=Array.from({length:551},($,J)=>{let Q=(J%29-14)/14,Z=(Math.floor(J/29)-9)/9;return{u:Q,v:Z,grain:J*71%31/31}});function uH($,J,Q){let Z=$.getContext("2d");if(!Z)return;let W=0,K=0,X=0,H=-1/0,Y=Q(),U=performance.now();function G(){if(!X&&W&&K&&!document.hidden)X=requestAnimationFrame(E)}function E(O){X=0;let M=O-H;if(M<32&&!J){G();return}H=O,Y+=(Q()-Y)*(1-Math.exp(-Math.min(80,M)/150));let N=J?0:(O-U)/1000,R=-0.51+Math.sin(N*0.68)*0.09,_=0.62+Math.sin(N*0.53)*0.06,D=Math.min(W/3.12,K/2.3),k=Math.cos(R),T=Math.sin(R),P=Math.cos(_),A=Math.sin(_),y=Math.sin(N*1.55),z=0.48+0.34*Math.max(0,1-Math.abs(1-Y));Z.clearRect(0,0,W,K),Z.fillStyle="#edeee5",Z.textAlign="center",Z.textBaseline="middle",Z.font=`600 ${Math.max(4.5,D*0.097)}px ui-monospace, monospace`;for(let L of[0,1])for(let{u:C,v:I,grain:S}of HF){let f=Math.max(Math.abs(C),Math.abs(I)),g=Math.cos(4*C-2*I+L*(0.8+Y*0.3)),d=0.22*g*Math.sin(3*I+N*0.52)*(1-f**4)+(L-0.5)*z,h=1.28*C,i=0.79*I,t=h*T+i*k,Z0=Math.max(0,1-Math.abs(C-y)*8)*Math.min(1,Y),E0=f===1?2:Math.floor(1.9+g*1.2+S*0.85);Z.globalAlpha=Math.min(1,0.21+L*0.18+(g+1)*0.14+Z0*0.36),Z.fillText(XF[Z0>0.58?4:E0],W*0.5+(h*k-i*T)*D,K*0.5-(d*P-t*A)*D)}if(Z.globalAlpha=1,!J)G()}function q(){W=$.clientWidth,K=$.clientHeight;let O=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(W*O),$.height=Math.round(K*O),Z.setTransform(O,0,0,O,0,0),G()}let F=new ResizeObserver(q);return F.observe($),document.addEventListener("visibilitychange",G),q(),()=>{cancelAnimationFrame(X),F.disconnect(),document.removeEventListener("visibilitychange",G)}}var K5=[{label:"Разработка",title:"Запустить новый сервис",detail:"Разрабатываем веб-приложения и внутренние инструменты. Готовим среду для запуска и передаем работающий сервис.",project:"paas",visual:($,J)=>O6($,J,()=>3)},{label:"Инфраструктура",title:"Упростить выпуск и поддержку",detail:"Переносим конфигурации в код, автоматизируем релизы и настраиваем мониторинг. Разбираем повторяющиеся сбои и устраняем их причины.",project:"operations",visual:d6},{label:"Исследования",title:"Проверить техническую идею",detail:"Сравниваем подходы и собираем прототипы, чтобы проверить ограничения и риски до внедрения в продукт.",project:"llmops",visual:u6}],mH=[["План","Согласуем задачу и границы","Разбираемся в текущей системе, согласуем объем работ и заранее определяем, как проверим результат.","План работ и критерии приемки."],["Запуск","Собираем, проверяем, запускаем","Показываем промежуточные версии, проверяем рабочие сценарии и разворачиваем готовое решение.","Работающий сервис и документация."],["Поддержка","Помогаем после запуска","Разбираем сбои, выпускаем обновления и развиваем сервис по согласованному формату.","Согласованный порядок сопровождения."]],dH='<button class="studio-about__contact section-glass" type="button" data-section="contact">Обсудить проект <span aria-hidden="true">→</span></button>';function FJ($,J,Q=!1){return`<div class="studio-choices${Q?" section-glass":""}" role="group" aria-label="${J}">
    ${$.map((Z,W)=>`<button type="button" data-studio-choice="${W}" aria-pressed="${W===0}">${Z}</button>`).join("")}
  </div>`}var cH=`<article class="section-page studio-screen studio-offerings">
  <div class="studio-offerings__body">
    <header class="studio-screen__header"><h1 id="document-title">Решения</h1>${dH}</header>
    <div class="studio-offerings__stage">
      <canvas aria-hidden="true"></canvas>
      <div class="studio-offerings__copy" aria-live="polite">
        ${K5.map(({title:$,detail:J,project:Q},Z)=>`<div data-studio-panel ${Z?"hidden":""}>
          <h2>${$}</h2><p>${J}</p>
          <button type="button" class="studio-screen__link" data-section="case-${Q}">Пример проекта <span aria-hidden="true">→</span></button>
        </div>`).join("")}
      </div>
    </div>
  </div>
  <footer class="paas-deck__footer">
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><span aria-hidden="true">←</span></button>
    ${FJ(K5.map(({label:$})=>$),"Направления",!0)}
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
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><span aria-hidden="true">←</span></button>
    ${FJ(mH.map(([$])=>$),"Этапы работы",!0)}
  </footer>
</article>`;function sH($,J){let Q=[...$.querySelectorAll("[data-studio-choice]")],Z=[...$.querySelectorAll("[data-studio-panel]")],W=$.querySelector(".studio-offerings__stage canvas"),K=$.querySelector(".studio-offerings__body"),X=new AbortController,H=-1,Y=$.classList.contains("studio-research")?uH:$.classList.contains("studio-process")?lH:null,U;function G(E){if(E===H)return;if(H=E,Q.forEach((q,F)=>{q.setAttribute("aria-pressed",String(F===E)),Z[F].hidden=F!==E}),K.scrollTop=0,!W)return;if(Y){if(J||!U)U?.(),U=Y(W,J,()=>H)}else U?.(),U=K5[E].visual(W,J)}return $.addEventListener("click",(E)=>{let q=E.target.closest("[data-studio-choice]");if(q)G(Number(q.dataset.studioChoice))},{signal:X.signal}),G(0),()=>{U?.(),X.abort()}}var oH={research:{title:`Проверка устойчивости
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
`),aH="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z";var rH=[];for(let $=0;$<3;$++)for(let J=0;J<32;J++)for(let Q=0;Q<24;Q++){if(J<6&&Q>17+J)continue;let Z=J===0||J===31||Q===0||Q===Math.min(23,17+J),W=$===0&&Q>2&&Q<21&&J>7&&J<27&&J%3===0&&(J<15||Q<19-J%5),K=$===0&&J===6&&Q>=17;if(Z||W||K)rH.push({page:$,row:J,col:Q,edge:Z,ink:W})}function UF($){if($==="Хабр")return iH.flatMap((K,X)=>Array.from(K,(H,Y)=>H==="."?null:{x:Y-25.5,y:X-25.5,alpha:Number(H)/4}).filter(Boolean));let J=document.createElement("canvas");J.width=52,J.height=52;let Q=J.getContext("2d");Q.setTransform(2,0,0,2,2,2),Q.fill(new Path2D(aH),"evenodd");let{data:Z}=Q.getImageData(0,0,52,52),W=[];for(let K=0;K<52;K++)for(let X=0;X<52;X++){let H=Z[(K*52+X)*4+3]/255;if(H>0.27)W.push({x:X-25.5,y:K-25.5,alpha:H})}return W}function tH($,J,Q,Z){let W=$.getContext("2d");if(!W)return;let K=performance.now(),X=-1/0,H=0,Y=0,U=0,G=Q(),E=new Map;function q(){if(!U&&H&&Y&&!document.hidden)U=requestAnimationFrame(F)}function F(N){U=0;let R=N-X;if(!J&&R<32){q();return}X=N;let _=J?0:(N-K)/1000;G+=(Q()-G)*(1-Math.exp(-Math.min(90,R)/180));let D=0.38+Math.sin(_*0.75)*0.08+Math.sin(G*1.9)*0.14,k=Math.min(H,Y)*0.295,T=_*9%42-6;W.clearRect(0,0,H,Y),W.fillStyle="#edeee5",W.textAlign="center",W.textBaseline="middle";let P=Z();if(P){let A=Math.min(H/59,Y/(P.length===1?61:93));if(W.font=`700 ${A*1.53}px ui-monospace, monospace`,P.forEach(({platform:y},z)=>{if(!E.has(y))E.set(y,UF(y));let L=(z-(P.length-1)/2)*44,C=J?0:Math.sin(_*1.1+z*1.8)*0.8;for(let{x:I,y:S,alpha:f}of E.get(y))W.globalAlpha=0.46+f*0.48,W.fillText(f>0.55?"+":"·",H/2+I*A,Y/2+(L+C+S)*A)}),W.globalAlpha=1,!J)q();return}W.font=`600 ${Math.max(5,k*0.1)}px ui-monospace, monospace`;for(let{page:A,row:y,col:z,edge:L,ink:C}of rH){let I=(z-11.5)/11+A*0.18,S=(y-15.5)/13-A*0.18,f=A*0.32,g=Math.max(0,z-17)*Math.max(0,6-y)*0.009,d=1/(1+(Math.sin(D)*I+Math.sin(0.34)*S+f-g)*0.25),h=Math.cos(D)*I-0.36*S,i=0.24*I+Math.cos(0.34)*S-f*0.23,t=J?0:Math.max(0,1-Math.abs(y-T)/5);W.globalAlpha=Math.min(1,(A===0?L?0.76:0.48:0.35)+t*0.24),W.fillText(C?z%4===0?"x":"·":L?"+":":",H/2+h*k*d,Y/2+(i*d+0.08)*k)}if(W.globalAlpha=1,!J)q()}function O(){H=$.clientWidth,Y=$.clientHeight;let N=Math.min(devicePixelRatio||1,1.5);$.width=Math.round(H*N),$.height=Math.round(Y*N),W.setTransform(N,0,0,N,0,0),q()}let M=new ResizeObserver(O);return M.observe($),document.addEventListener("visibilitychange",q),O(),{stop(){cancelAnimationFrame(U),M.disconnect(),document.removeEventListener("visibilitychange",q)}}}var{research:X5,scientificPublications:eH,technicalArticles:JY}=oH;function A9($,J,Q=""){return`<a href="${$}" target="_blank" rel="noopener" ${Q}>${J}</a>`}function QY($,J,Q,Z,W,K){return`<article class="section-page studio-screen ${J}">
    <div class="studio-offerings__body">
      <header class="studio-screen__header">
        <h1 id="document-title">${$}</h1>
        ${K}
      </header>
      ${Q}
    </div>
    <footer class="paas-deck__footer">
      <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><span aria-hidden="true">←</span></button>
      ${FJ(Z,W,!0)}
    </footer>
  </article>`}function OJ({title:$,text:J,note:Q,details:Z,metrics:W},K){return`<section class="research-chapter">
    <${K}>${$.replaceAll(`
`," ")}</${K}>
    <p>${J}</p>
    ${W?`<dl class="research-metrics">${W.map(({value:X,label:H,detail:Y})=>`<div><dt>${H}</dt><dd><strong>${X}</strong><small>${Y}</small></dd></div>`).join("")}</dl>`:""}
    <p class="editorial-meta">${Q}</p>
    ${Z?`<details><summary>${Z.title}</summary><p>${Z.text}</p></details>`:""}
  </section>`}var[GF,EF,qF,NF]=X5.chapters,ZY=QY("Исследования","studio-research",`
  <div class="studio-offerings__stage">
    <div class="studio-offerings__copy">
      <div data-studio-panel>
        <h2>${X5.title.replaceAll(`
`," ")}</h2>
        <p>${X5.summary}</p>
        ${OJ(GF,"h3")}
      </div>
      <div data-studio-panel hidden>
        ${OJ(EF,"h2")}
        ${OJ(qF,"h3")}
      </div>
      <div data-studio-panel hidden>
        ${OJ(NF,"h2")}
        <button type="button" class="studio-screen__link" data-section="contact">Обсудить похожую задачу <span aria-hidden="true">→</span></button>
      </div>
    </div>
    <canvas aria-hidden="true"></canvas>
  </div>`,["Обзор","Методика","Результаты"],"Разделы исследования",'<button type="button" class="studio-screen__link" data-section="blog">Статьи и публикации <span aria-hidden="true">→</span></button>');function RF({year:$,language:J,href:Q,title:Z,authors:W,venue:K,issue:X,pages:H,doi:Y,format:U,kind:G}){let E=Y?`https://doi.org/${Y}`:"";return`<p class="editorial-meta">${$} · ${G==="conference"?"Международная конференция · IEEE":"Научный журнал"}</p>
    <h2 lang="${J}">${Z}</h2>
    <p lang="${J}">${W.join(", ")}</p>
    <p class="blog-venue"><span lang="${J}">${K}</span>${X?` · ${X}`:""} · ${J==="ru"?"С.":"pp."} ${H}</p>
    <div class="editorial-versions">
      ${A9(Q,`Открыть ${U==="pdf"?"PDF":"публикацию"} ↗`)}
      ${E&&E!==Q?A9(E,`DOI ${Y}`):""}
    </div>`}function FF({topics:$,versions:J}){let Q=J.find((Z)=>Z.language===document.documentElement.lang)??J[0];return`<p class="editorial-meta">${$.join(" / ")}</p>
    <h2 lang="${Q.language}">${Q.title}</h2>
    <div class="editorial-versions">${J.map(({href:Z,language:W,platform:K})=>A9(Z,`${K} · ${W.toUpperCase()} ↗`,`hreflang="${W}"`)).join("")}</div>`}var OF={"llm-defense-review-2025":{labels:["ВАК","РИНЦ"],edn:"FHFGXI"},"llm-attacks-review-2025":{labels:["ВАК","РИНЦ"],edn:"SJYTYG"},"vrf-journal-2024":{labels:["Scopus","ВАК","РИНЦ"],edn:"FNYMEW"},"lora-certification-2026":{labels:["ВАК","РИНЦ"]}};function MF($){if($.kind==="conference")return A9($.href,"IEEE Xplore",'class="blog-index-badge"');let{labels:J,edn:Q}=OF[$.id]??{labels:[]};return J.map((Z)=>{let W=Z==="РИНЦ"&&Q?`https://elibrary.ru/${Q.toLowerCase()}`:$.href;return A9(W,Z,`class="blog-index-badge" aria-label="${Z} · открыть статью"`)}).join("")}var $Y=[[...eH.filter(({kind:$})=>$==="conference"),...eH.filter(({kind:$})=>$==="journal")].map(($)=>({copy:RF($),badges:MF($)})),JY.map(($)=>({copy:FF($)}))],WY=QY("Блог и публикации","studio-blog",`
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
  </div>`,["Публикации","Статьи"],"Категории материалов",`<div class="blog-position"><span>Листайте</span><output aria-label="Позиция">1 / ${$Y[0].length}</output></div>`);function KY($,J){let Q=$.querySelector(".blog-carousel"),Z=[...Q.querySelectorAll(".blog-track")],W=Z.map((R)=>[...R.children]),[K,X]=Q.querySelectorAll("[data-blog-shift]"),H=$.querySelector("output"),Y=new AbortController,U={signal:Y.signal},G=new Map,E=0;function q(R,_){return _.getBoundingClientRect().left-R.getBoundingClientRect().left}function F(){let R=Z[E],_=W[E].map((D)=>Math.abs(q(R,D)));return _.indexOf(Math.min(..._))}function O(){let R=F(),_=W[E],D=`${R+1} / ${_.length}`;if(H.value!==D)H.value=D;K.disabled=R===0,X.disabled=R===_.length-1;let k=new Set(_.slice(Math.max(0,R-1),R+2));for(let[T,{scene:P}]of G){if(k.has(T))continue;P?.stop(),G.delete(T)}for(let T of k){let P=!J&&T===_[R],A=G.get(T);if(A?.animate===P)continue;A?.scene?.stop();let y=_.indexOf(T),z=E===1?JY[y].versions:null,L=tH(T.querySelector("canvas"),!P,()=>y,()=>z);G.set(T,{scene:L,animate:P})}}function M(R){let _=Z[E],D=W[E][F()+R];if(D)_.scrollBy({left:q(_,D),behavior:J?"instant":"smooth"})}Z.forEach((R,_)=>R.addEventListener("scroll",()=>{if(_===E)O()},{...U,passive:!0})),$.addEventListener("click",(R)=>{let _=R.target.closest("[data-studio-choice]");if(_)E=Number(_.dataset.studioChoice),O()},U),K.addEventListener("click",()=>M(-1),U),X.addEventListener("click",()=>M(1),U),Q.addEventListener("keydown",(R)=>{if(R.key!=="ArrowLeft"&&R.key!=="ArrowRight")return;R.preventDefault(),M(R.key==="ArrowLeft"?-1:1)},U);let N=new ResizeObserver(O);return N.observe(Q),O(),()=>{Y.abort(),N.disconnect();for(let{scene:R}of G.values())R?.stop()}}var PJ=[{id:"paas",index:"01",name:"PaaS-платформа",kind:"Cloud-native платформа",result:"Запуск приложений из Git в инфраструктуре компании."},{id:"llmops",index:"02",name:"LLMOps",kind:"Референсная архитектура",result:"Архитектура AI-ассистента для корпоративной инфраструктуры."},{id:"operations",index:"03",name:"Инфраструктура как код",kind:"IaC и мониторинг",result:"Автоматизация обновлений и восстановления после сбоев."},{id:"delivery-platform",index:"04",name:RJ,kind:"Развертывание и эксплуатация",result:"Общий процесс выпуска, масштабирования и управления доступами."}],L6=new URLSearchParams(location.search),G5=document.body.hasAttribute("data-studio-release"),v9=document.documentElement.lang==="en"?"en":"ru",LJ=v9==="ru"?"en":"ru";if(G5){for(let[$,J]of Object.entries({cover:"glass-split-schematic",brand:"top-left",font:"condensed",effect:"all",mark:"vertical",logo:"menu-sign",contactStyle:"caption",paasStyle:"live",paasWorkflow:"sequence",paasStack:"layers",projectLayout:"carousel"}))if(!L6.has($))L6.set($,J);if(navigator.doNotTrack!=="1")fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"page_view",value:`/${v9}`}),credentials:"omit",mode:"same-origin",keepalive:!0}).catch(()=>{})}var XY=L6.get("projectLayout"),i8=hH.has(XY)?XY:"",c1=($)=>document.getElementById($),qY='<button data-open-projects>Проекты</button><button data-section="services">Решения</button><button data-section="about">О студии</button><button data-section="process">Процесс</button><button data-section="blog">Блог и публикации</button><button data-section="research">Исследования</button><button data-section="contact">Контакты</button>'+(G5?`<a class="cover-locale" href="/${LJ}" hreflang="${LJ}" lang="${LJ}">${v9==="ru"?"English":"Русский"}</a>`:""),g7=c1("head"),D6=c1("orbit"),c6=c1("projects"),_6=c1("go"),AJ=c1("back"),p7=c1("demo-status"),VJ=c1("cover-details"),E5=[...VJ.querySelectorAll(".cover-link")],C1=matchMedia("(prefers-reduced-motion: reduce)").matches,w9=Object.freeze({yaw:-0.77,pitch:0.087,scale:0.84,offsetX:0,offsetY:0.22}),LF=Object.freeze({yaw:-0.65,pitch:1.12,scale:1.6,offsetX:0,offsetY:-1.15}),DF=C1?120:850,DJ=0.85,HY=0.1*DJ,TJ={...w9},NY=0,RY=0,FY=!1,I1=!1,OY=null,q5=!1,_F=B5(),S9=($)=>Math.max(0,Math.min(1,$)),x7=($)=>{let J=S9($);return J*J*(3-2*J)},zJ=($,J,Q)=>$+(J-$)*Q,a8=!1,z1="loading",Y1=0,V1=null,y7=0,BJ=!1,l7=0,o8=0,kJ=0,V6=!1,u7=!1,H5=0,CJ=[],T9=null,Y5=!1,D8=QH({host:g7,cover:VJ,links:E5,params:L6,onChange:MY,directoryMarkup:qY}),s8=D8?.frame(w9)??w9,K1,YY,wJ=i8?xH(c6,i8,PJ,g9):void 0,b7=i8?[]:PJ.map(($)=>{let J=document.createElement("a");return J.className="project",J.href=`/${v9}/projects/${$.id}`,J.addEventListener("click",(Q)=>{Q.preventDefault(),g9("case-"+$.id)}),J.dataset.project=$.id,J.setAttribute("aria-label",`${$.name}, открыть проект`),J.innerHTML=`<span class="project-top"><span class="project-index">${$.index}</span><span class="project-kind">${$.kind}</span></span><span class="project-bottom"><span class="project-name">${$.name}</span><svg class="project-arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></span>`,D6.append(J),J});function n6($){if(z1=$,document.body.dataset.phase=z1,z1!=="head"){if(y9(),K1)D8?.clearEffect?.(K1)}}function y9(){for(let $ of CJ)clearTimeout($);CJ=[];for(let $ of E5)$.classList.remove("is-previewing")}function VF(){if(C1||I1||document.hidden)return;for(let $ of E5){let J=Math.random()*50;CJ.push(setTimeout(()=>$.classList.add("is-previewing"),J)),CJ.push(setTimeout(()=>$.classList.remove("is-previewing"),J+290))}}function j9($,J="scatter"){K1?.setScatter($,{region:"all",mode:J}),document.body.dataset.scatter=$.toFixed(4)}function MY(){if(!D8)return;if(s8=D8.frame(w9),z1==="returning")TJ=s8;if(K1&&!V1&&Y1===0)K1.setView({...s8,immediate:!0}),D8.drawGuides?.(K1)}function IJ(){let $=x7(Y1/0.85),J=x7(Y1/0.38),Q=x7((Y1-0.45)/0.35),Z={};for(let K of Object.keys(w9))Z[K]=zJ(TJ[K],LF[K],$);K1?.setView({...Z,immediate:!0}),j9(J,V1?.to===0?"appear":"scatter"),c6.style.setProperty("--reveal",Q.toFixed(4));let W=Q>0.9&&!V1;c6.classList.toggle("is-active",W),c6.inert=!W,c6.setAttribute("aria-hidden",String(Q<=0.01)),wJ?.setActive(W&&!I1),VJ.classList.toggle("is-away",Y1>0.03),VJ.inert=Y1>0.03,_6.inert=Y1>0.01,_6.classList.toggle("is-away",Y1>0.01),AJ.hidden=Q<0.55,document.body.dataset.progress=Y1.toFixed(4),document.body.dataset.pitch=Z.pitch.toFixed(4),document.body.dataset.projectsVisible=String(Q>0.9),document.body.classList.toggle("inside-projects",Y1>0.8)}function b9(){if(i8||!K1)return;let{center:$,radii:J}=yX.brain,Q=(q,F=0)=>[$[0]+Math.cos(q)*J[0]*(F%2?0.9:1),$[1]+Math.sin(q*2+F*0.5)*0.18,$[2]+Math.sin(q)*J[2]],Z=PJ.map((q,F)=>Q(F*Math.PI*2/b7.length+kJ*0.22,F)),W=K1.projectPoints(Z),K=W.map((q)=>q.depth),X=Math.min(...K),H=Math.max(...K);W.forEach((q,F)=>{let O=(q.depth-X)/Math.max(0.001,H-X),M=0.78+O*0.26;b7[F].style.left=`${q.x}px`,b7[F].style.top=`${q.y}px`,b7[F].style.transform=`translate(-50%,-50%) scale(${M})`,b7[F].style.zIndex=String(Math.round(O*100)+1),b7[F].style.opacity=String(0.55+O*0.45)});let Y=K1.projectPoints(Array.from({length:65},(q,F)=>Q(F/64*Math.PI*2+kJ*0.22))),U=D6.querySelector("svg");U.setAttribute("viewBox",`0 0 ${g7.clientWidth} ${g7.clientHeight}`),U.querySelector("path").setAttribute("d",Y.map((q,F)=>`${F?"L":"M"}${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join(" "));let G=K1.projectPoints([$])[0],E=D6.querySelector(".orbit-center");E.style.left=`${G.x}px`,E.style.top=`${G.y}px`,document.body.dataset.orbitPaused=String(V6||u7||C1)}function w8(){if(!l7&&!document.hidden)l7=requestAnimationFrame(zF)}function zF($){if(l7=0,T9!==null){let Z=S9(($-T9)/360);if(j9(x7(Z)),Z<1)w8();else T9=null,Y5=!0,g9("contact");return}let J=null,Q=o8?Math.min(($-o8)/1000,0.04):0;if(o8=$,z1==="assembling"&&!I1){let Z=y7;y7=Math.min(y7+Q,DJ);let W=x7(1-y7/DJ);if(j9(W,"appear"),K1.setView({...s8,yaw:s8.yaw-0.055*W,pitch:s8.pitch+0.036*W,offsetY:s8.offsetY-0.055*W,immediate:!0}),D8?.drawGuides?.(K1),Z<HY&&y7>=HY&&!BJ)VF();if(y7===DJ)LY()}if((z1==="head"||z1==="assembling")&&!V1&&!I1&&!C1){let Z=D8?.getAttention?.(),W=Z?{...Z,present:!0,tracking:!0}:{x:NY,y:RY,present:FY,tracking:q5},K=_F.update(Q,W);K1.setGaze(K),document.body.dataset.attention=K.attention}if(z1==="head"&&!I1)D8?.updateEffect?.(K1,$);if(V1){let Z=S9(($-V1.started)/V1.duration);if(Y1=zJ(V1.from,V1.to,x7(Z)),Z===1){let W=V1.to;Y1=W,V1=null,n6(W?"projects":"head"),p7.textContent=W?"Проекты открыты.":"Исходный вид головы восстановлен.",J=W?AJ:_6}IJ(),J?.focus({preventScroll:!0})}if(Y1>0.4&&!V6&&!u7&&!C1)kJ+=Q;if(Y1>0.01)b9();if(!I1&&(V1||z1==="assembling"||z1==="head"&&!C1||z1==="projects"&&!i8&&!V6&&!u7&&!C1))w8()}function h9($){if($===1&&(z1==="loading"||z1==="assembling")){BJ=!0;return}if(!a8&&$===0&&Y1>0){if(location.hash==="#projects")history.replaceState(null,"",location.pathname+location.search);Y1=0,V1=null,IJ(),n6("loading"),_6.disabled=!0,x9();return}if(!a8||$===Y1&&!V1)return;if($===0&&location.hash==="#projects")history.replaceState(null,"",location.pathname+location.search);if($===1&&Y1===0)TJ={...K1.getStats().view},K1.setGaze();V1={from:Y1,to:$,started:performance.now(),duration:DF*Math.max(0.3,Math.abs($-Y1))},n6($?"entering":"returning"),c6.inert=!0,c6.classList.remove("is-active"),p7.textContent=$?"Камера поднимается над головой. Символы рассеиваются.":"Возвращаемся к исходной модели.",o8=0,IJ(),w8()}_6.addEventListener("click",F5);AJ.addEventListener("click",O5);D6.addEventListener("pointerenter",()=>{V6=!0,b9()});D6.addEventListener("pointerleave",($)=>{if($.relatedTarget?.closest?.(".project"))return;V6=!1,o8=0,w8()});D6.addEventListener("focusin",()=>{u7=!0,b9()});D6.addEventListener("focusout",($)=>{if(!D6.contains($.relatedTarget))u7=!1,o8=0,w8()});addEventListener("keydown",($)=>{if($.key==="Escape"&&I1){$.preventDefault(),jJ();return}if($.key==="Escape"&&Y1>0)$.preventDefault(),O5()});addEventListener("resize",()=>{MY(),b9(),w8()});document.addEventListener("visibilitychange",()=>{if(document.hidden)y9(),H5=performance.now(),cancelAnimationFrame(l7),l7=0;else{if(V1&&H5)V1.started+=performance.now()-H5;o8=0,w8()}});function LY(){if(n6("head"),_6.disabled=!1,p7.textContent="Модель готова. GO открывает проекты.",BJ)BJ=!1,h9(1)}function x9(){return YY??=Promise.resolve().then(()=>{if(K1=bX(g7,{modelUrl:new URL("./sculpt/head-study.glb?v=studio-1",import.meta.url).href,expressionsUrl:new URL("./sculpt/expressions.json",import.meta.url).href,cellSize:5.4,ink:"#edeee5",view:s8,autoRotate:!1,pointerRotation:!1,onState($){document.body.dataset.moduleState=typeof $==="string"?$:String($?.state??$?.type??"updated")}}),!C1)j9(1,"appear");return K1.ready.then(()=>{if(a8=!0,document.body.dataset.ready="true",c1("load-note").hidden=!0,D8?.drawGuides?.(K1),location.hash==="#projects"){if(z1!=="projects")SJ()}else if(C1)LY();else n6("assembling"),p7.textContent="Фигура собирается.";o8=0,w8(),BY()})}).catch(($)=>{n6("error"),c1("load-note").textContent="Не удалось загрузить модель.",p7.textContent="Ошибка загрузки модели.",_6.disabled=!i8,console.error($)}),YY}window.headDemo={go:F5,back:O5,getState:()=>({ready:a8,phase:z1,progress:Y1,hoverPaused:V6,focused:u7,orbitTime:kJ,stats:K1?.getStats()})};addEventListener("pagehide",()=>{y9(),cancelAnimationFrame(l7),wJ?.setActive(!1),K1?.dispose()},{once:!0});var h7=c1("document-dialog"),T8=c1("document-content"),UY=L6.get("paasStyle")==="live",GY=L6.get("paasWorkflow"),BF=L6.get("paasStack"),kF=new Set(["cover","capsule","caption","toolbar"]),EY=L6.get("contactStyle"),CF=kF.has(EY)?EY:"",N5=document.querySelector(".masthead"),_J=N5.querySelector(".brand");_J.href=location.pathname+location.search;function R5(){h7.style.setProperty("--studio-header-edge",`${Math.ceil(N5.getBoundingClientRect().bottom)}px`)}var IF=new ResizeObserver(R5);IF.observe(N5);addEventListener("resize",R5);var U5=($)=>String($??"").replace(/[&<>"']/g,(J)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[J]),DY=($)=>`<p>${U5($)}</p>`,_Y=`<a class="document-cta section-glass" href="${$5}" target="_blank" rel="noopener">Обсудить задачу в Telegram</a>`;function PF($,J,Q,Z=_Y){return`<article class="section-page">
    <header class="section-intro">
      <h1 id="document-title">${U5($)}</h1>
      ${J?`<p>${U5(J)}</p>`:""}
    </header>
    <div class="section-flow">${Q}${Z}</div>
  </article>`}var M6,AF={paas:[wF,LH],llmops:[zH,BH],operations:[TH,wH],"delivery-platform":[bH,yH]};function TF($){let J=[...$.querySelectorAll('[role="tab"]')],Q=J.map((H)=>c1(H.getAttribute("aria-controls"))),Z=$.querySelector(".paas-deck__pages");$.querySelector(".paas-deck__back").addEventListener("click",jJ);let W=[...AF[$.dataset.caseDeck],MH].map((H)=>H($,C1)),K=0;W[K]?.start();function X(H){if(H===K)return;let Y=Q[H];W[K]?.stop(),Y.style.setProperty("--paas-entry-offset",H>K?"24px":"-24px"),Q[K].hidden=!0,Y.hidden=!1,J[K].tabIndex=-1,J[K].setAttribute("aria-selected","false"),J[H].tabIndex=0,J[H].setAttribute("aria-selected","true"),K=H,Z.scrollTop=0,W[K]?.start()}return J.forEach((H,Y)=>{H.addEventListener("click",()=>X(Y)),H.addEventListener("keydown",(U)=>{let G={ArrowLeft:(Y+J.length-1)%J.length,ArrowRight:(Y+1)%J.length,Home:0,End:J.length-1}[U.key];if(G===void 0)return;U.preventDefault(),X(G),J[G].focus({preventScroll:!0})})}),()=>W[K]?.stop()}function wF($){let J=$.querySelector("[data-paas-launch]"),Q=J.querySelector(".paas-launch__canvas"),Z=J.querySelector(".paas-launch__replay"),W,K;function X(){if(W?.(),W=UH(J,C1),!Q||K)return;Q.hidden=!1,K=O6(Q,C1),Q.hidden=!K,J.querySelector(".paas-launch__art").hidden=Boolean(K)}if(Z)Z.hidden=C1,Z.addEventListener("click",X);return{start:X,stop(){W?.(),K?.(),K=null}}}addEventListener("pagehide",()=>M6?.(),{once:!0});function MJ($,J,Q,Z=""){return`<article class="section-page paas-case${Z}" data-case-deck="${$}">
    <footer class="paas-deck__footer">
      <button type="button" class="paas-deck__back section-glass" aria-label="Назад">
        <span aria-hidden="true">←</span>
      </button>
      <div class="paas-deck__tabs section-glass" role="tablist" aria-label="Экраны кейса ${J}">
        ${Q.map(({id:W,label:K},X)=>`<button type="button" role="tab" id="${$}-tab-${W}" aria-controls="${$}-${W}" aria-selected="${X===0}" tabindex="${X===0?0:-1}">${K}</button>`).join("")}
      </div>
    </footer>
    <div class="paas-deck__pages">
      ${Q.map(({id:W,layout:K,markup:X},H)=>`<section class="${K} paas-deck__panel" id="${$}-${W}" role="tabpanel" aria-labelledby="${$}-tab-${W}" tabindex="0" ${H?"hidden":""}>${X}</section>`).join("")}
    </div>
  </article>`}function SF($){if($.id==="llmops")return MJ("llmops","LLMOps",VH());if($.id==="operations")return MJ($.id,"IaC и мониторинг",AH());if($.id==="delivery-platform")return MJ($.id,RJ,vH());if($.id==="paas"){let J=[["Подключить репозиторий","Выбрать проект в GitHub или GitLab."],["Собрать приложение","Платформа определяет стек и устанавливает зависимости."],["Запустить в облаке","Платформа разворачивает сервис и возвращает URL и логи."]];return MJ("paas","PaaS",[{id:"overview",label:"Обзор",layout:"paas-hero",markup:`
        <div class="paas-hero__copy">
          <p class="paas-hero__label">Проекты / PaaS · On-premises</p>
          <h1 id="document-title">Запуск приложений в облаке</h1>
          <div class="paas-hero__result">
            <p class="paas-hero__label">Результат</p>
            <p>Платформа разворачивается в инфраструктуре компании и автоматизирует запуск приложений. Команды разработки быстрее получают ссылку на работающий сервис и доступ к логам.</p>
          </div>
        </div>
        ${YH(UY)}`},{id:"workflow",label:"Как работает",layout:"paas-details",markup:`
        ${["sequence","trace"].includes(GY)?FH(GY):`<h2>Как проходит запуск</h2>
        <p>Разработчик нажимает «Запустить». Платформа сама готовит окружение.</p>
        <ol class="case-steps">${J.map(([Q,Z])=>`<li><strong>${Q}</strong>${DY(Z)}</li>`).join("")}</ol>`}`},{id:"stack",label:"Технологии",layout:"paas-details",markup:OH(BF)}],UY?" paas-case--live":"")}return null}function jF($){if($.startsWith("case-")){let W=PJ.find((K)=>K.id===$.slice(5));if(!W)return null;return SF(W)}let J="",Q="",Z="";if($==="services")return cH;else if($==="about")return gH;else if($==="process")return nH;else if($==="research")return ZY;else if($==="blog")return WY;else if($==="contact")return`<article class="contact-view"><h1 id="document-title">Контакты</h1><div class="contact-layout">
   <div class="contact-qr"><canvas role="img" aria-label="QR для Telegram"></canvas><button type="button">Сканировать QR</button></div>
   <div class="contact-channels"><a class="contact-channel section-glass" href="${$5}" target="_blank" rel="noopener"><span>Telegram</span><strong>@wr0ngn4m3</strong></a>
   <a class="contact-channel section-glass" href="mailto:wwr0ngn4m3@gmail.com"><span>Почта</span><strong>wwr0ngn4m3@gmail.com</strong></a></div>
 </div></article>`;else if($==="resume")J=u9.resume.fullName,Q=u9.resume.headline,Z=DY(u9.resume.summary)+`<a class="document-cta" href="/${v9}/experience">Полное резюме</a>`;else if($==="more")J="Меню",Z=`<div class="directory section-glass">${qY}</div>`;else return null;return PF(J,Q,Z,$==="more"?"":_Y)}function g9($,J=!1){if(I1&&!J&&location.hash===`#${$}`)return;let Q=jF($);if(!Q)return;if(M6?.(),M6=null,!I1)OY=document.activeElement;if(h7.dataset.contactStyle=$==="contact"?CF:"",T8.innerHTML=Q,V6=!0,I1=!0,wJ?.setActive(!1),y9(),K1)D8?.clearEffect?.(K1);document.body.dataset.documentOpen="",R5(),h7.hidden=!1,document.querySelector(".experience").inert=!0,h7.scrollTop=0,T8.scrollTop=0;let Z=c1("document-title");if(Z.tabIndex=-1,Z.focus({preventScroll:!0}),$==="contact")HH(T8.querySelector("canvas"),h7,C1);let W=T8.querySelector("[data-case-deck]");if(T8.querySelector("[data-studio-back]")?.addEventListener("click",jJ),W)M6=TF(W);else if($==="about")M6=pH(T8.querySelector(".studio-about__mark"),C1);else if(T8.firstElementChild.matches(".studio-screen")){let K=T8.firstElementChild,X=sH(K,C1),H=$==="blog"?KY(K,C1):null;M6=()=>{X(),H?.()}}if(!J)history.pushState({wwnPanel:!0},"",`#${$}`)}function f9({restoreCover:$=!0}={}){if(M6?.(),M6=null,Y5){if(Y5=!1,$)j9(0)}if(h7.hidden=!0,delete document.body.dataset.documentOpen,I1=!1,wJ?.setActive(z1==="projects"),document.querySelector(".experience").inert=!1,V6=!1,o8=0,$){if(location.hash!=="#projects")x9();OY?.focus({preventScroll:!0})}w8()}async function fF(){let $=T8.firstElementChild;if(!a8&&!i8){if(await x9(),!a8)return;if(!I1||T8.firstElementChild!==$)return}SJ(),f9({restoreCover:!1}),history.pushState({wwnPanel:!0},"","#projects"),AJ.focus({preventScroll:!0})}function F5(){if(location.hash==="#projects")return;if(I1){fF();return}if(history.pushState({wwnPanel:!0},"","#projects"),!a8&&i8)SJ();else h9(1)}function O5(){if(history.state?.wwnPanel&&location.hash==="#projects")history.back();else h9(0)}function SJ(){TJ=s8,V1=null,Y1=1,_6.disabled=!1,n6("projects"),IJ(),b9(),p7.textContent="Проекты открыты."}function jJ(){if(history.state?.wwnPanel)history.back();else f9(),history.replaceState(null,"",location.pathname+location.search)}c1("close-document").addEventListener("click",jJ);_J.addEventListener("click",($)=>{if($.button||$.metaKey||$.ctrlKey||$.shiftKey||$.altKey)return;if($.preventDefault(),location.hash)history.pushState(null,"",_J.href);if(I1)f9({restoreCover:Y1===0});if(_J.focus({preventScroll:!0}),Y1>0||V1)h9(0)});document.addEventListener("click",($)=>{let J=$.target.closest("[data-section]");if(T9!==null)return;if(J)if(J.dataset.section==="contact"&&z1==="head"&&!I1&&!C1){if(y9(),K1)D8?.clearEffect?.(K1);T9=performance.now(),w8()}else g9(J.dataset.section);else if($.target.closest("[data-open-projects]"))F5()});function VY(){let $=location.hash.slice(1);if($==="case-resilience")history.replaceState(null,"","#projects");if(location.hash==="#projects"){if(I1)f9();if((a8||i8)&&z1!=="projects")SJ()}else if($)g9(decodeURIComponent($),!0);else{if(I1)f9();if(Y1>0||V1)h9(0);else x9()}}addEventListener("popstate",VY);if(G5)document.addEventListener("click",($)=>{let J=$.target.closest(".cover-locale");if(J)J.href=`/${LJ}${location.hash}`});var zY;if(location.hash)VY();if(!I1&&z1!=="projects")x9();function BY(){if(C1)return;zY=setTimeout(async()=>{if(a8&&z1==="head"&&!I1&&!document.hidden)await K1.blink().catch(()=>{});BY()},5000+Math.random()*3000)}addEventListener("pagehide",()=>clearTimeout(zY),{once:!0});var kY=g7.closest(".experience");kY.addEventListener("pointermove",($)=>{if($.pointerType==="touch")return;let J=g7.getBoundingClientRect();NY=zJ(-1,1,S9(($.clientX-J.left)/J.width)),RY=zJ(-1,1,S9(($.clientY-J.top)/J.height)),FY=!0,q5=!0});kY.addEventListener("pointerleave",()=>{q5=!1});
