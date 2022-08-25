const vu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};vu();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="143";const xu=0,Ho=1,bu=2,Fl=1,yu=2,qi=3,Zi=0,Dt=1,xi=2,Mu=1,_n=0,_i=1,Wo=2,$o=3,qo=4,Su=5,hi=100,Eu=101,wu=102,Xo=103,Yo=104,Tu=200,Au=201,Cu=202,Lu=203,zl=204,Ul=205,Du=206,Pu=207,Ru=208,Iu=209,Nu=210,Ou=0,Fu=1,zu=2,so=3,Uu=4,Bu=5,ku=6,Vu=7,Bl=0,Gu=1,Hu=2,Qt=0,Wu=1,$u=2,qu=3,Xu=4,Yu=5,kl=300,bi=301,yi=302,oo=303,ao=304,Yr=306,lo=1e3,Lt=1001,co=1002,lt=1003,jo=1004,Ko=1005,xt=1006,ju=1007,jr=1008,Bn=1009,Ku=1010,Zu=1011,Vl=1012,Ju=1013,Rn=1014,In=1015,Ji=1016,Qu=1017,eh=1018,vi=1020,th=1021,nh=1022,zt=1023,ih=1024,rh=1025,On=1026,Mi=1027,sh=1028,oh=1029,ah=1030,lh=1031,ch=1033,ds=33776,ps=33777,ms=33778,gs=33779,Zo=35840,Jo=35841,Qo=35842,ea=35843,uh=36196,ta=37492,na=37496,ia=37808,ra=37809,sa=37810,oa=37811,aa=37812,la=37813,ca=37814,ua=37815,ha=37816,fa=37817,da=37818,pa=37819,ma=37820,ga=37821,_a=36492,kn=3e3,Be=3001,hh=3200,fh=3201,dh=0,ph=1,jt="srgb",Nn="srgb-linear",_s=7680,mh=519,va=35044,xa="300 es",uo=1035;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,ba=180/Math.PI;function er(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]+"-"+Qe[e&255]+Qe[e>>8&255]+"-"+Qe[e>>16&15|64]+Qe[e>>24&255]+"-"+Qe[t&63|128]+Qe[t>>8&255]+"-"+Qe[t>>16&255]+Qe[t>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function gh(r,e){return(r%e+e)%e}function xs(r,e,t){return(1-t)*r+t*e}function ya(r){return(r&r-1)===0&&r!==0}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],_=n[8],p=i[0],h=i[3],v=i[6],M=i[1],w=i[4],y=i[7],S=i[2],A=i[5],L=i[8];return s[0]=a*p+o*M+l*S,s[3]=a*h+o*w+l*A,s[6]=a*v+o*y+l*L,s[1]=c*p+u*M+f*S,s[4]=c*h+u*w+f*A,s[7]=c*v+u*y+f*L,s[2]=d*p+m*M+_*S,s[5]=d*h+m*w+_*A,s[8]=d*v+m*y+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=t*f+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Gl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ur(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const bs={[jt]:{[Nn]:Fn},[Nn]:{[jt]:Ur}},Et={legacyMode:!0,get workingColorSpace(){return Nn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(bs[e]&&bs[e][t]!==void 0){const n=bs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qe={r:0,g:0,b:0},wt={h:0,s:0,l:0},ur={h:0,s:0,l:0};function ys(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function hr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nn){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nn){if(e=gh(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ys(a,s,e+1/3),this.g=ys(a,s,e),this.b=ys(a,s,e-1/3)}return Et.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Et.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Et.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Et.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Et.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=jt){const n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Et.fromWorkingColorSpace(hr(this,qe),e),dt(qe.r*255,0,255)<<16^dt(qe.g*255,0,255)<<8^dt(qe.b*255,0,255)<<0}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nn){Et.fromWorkingColorSpace(hr(this,qe),t);const n=qe.r,i=qe.g,s=qe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nn){return Et.fromWorkingColorSpace(hr(this,qe),t),e.r=qe.r,e.g=qe.g,e.b=qe.b,e}getStyle(e=jt){return Et.fromWorkingColorSpace(hr(this,qe),e),e!==jt?`color(${e} ${qe.r} ${qe.g} ${qe.b})`:`rgb(${qe.r*255|0},${qe.g*255|0},${qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(wt),wt.h+=e,wt.s+=t,wt.l+=n,this.setHSL(wt.h,wt.s,wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wt),e.getHSL(ur);const n=xs(wt.h,ur.h,t),i=xs(wt.s,ur.s,t),s=xs(wt.l,ur.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Hl;let jn;class Wl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=Gr("canvas")),jn.width=e.width,jn.height=e.height;const n=jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class $l{constructor(e=null){this.isSource=!0,this.uuid=er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ms(i[a].image)):s.push(Ms(i[a]))}else s=Ms(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ms(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _h=0;class Pt extends Ri{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Lt,i=Lt,s=xt,a=jr,o=zt,l=Bn,c=1,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=er(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=kl;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],p=l[2],h=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(m+1)/2,S=(v+1)/2,A=(u+d)/4,L=(f+p)/4,g=(_+h)/4;return w>y&&w>S?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=A/n,s=L/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=g/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=L/s,i=g/s),this.set(n,i,s,t),this}let M=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(h-_)/M,this.y=(f-p)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends Ri{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ql extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[a+0],m=s[a+1],_=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==d||c!==m||u!==_){let h=1-o;const v=l*d+c*m+u*_+f*p,M=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const S=Math.sqrt(w),A=Math.atan2(S,v*M);h=Math.sin(h*A)/S,o=Math.sin(o*A)/S}const y=o*M;if(l=l*h+d*y,c=c*h+m*y,u=u*h+_*y,f=f*h+p*y,h===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-o*m,e[t+2]=c*_+u*m+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),m=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,f=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new I,Ma=new tr;class nr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Tn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox),Es.applyMatrix4(e.matrixWorld),this.union(Es);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),fr.subVectors(this.max,ki),Kn.subVectors(e.a,ki),Zn.subVectors(e.b,ki),Jn.subVectors(e.c,ki),ln.subVectors(Zn,Kn),cn.subVectors(Jn,Zn),An.subVectors(Kn,Jn);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-An.z,An.y,ln.z,0,-ln.x,cn.z,0,-cn.x,An.z,0,-An.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-An.y,An.x,0];return!ws(t,Kn,Zn,Jn,fr)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,Kn,Zn,Jn,fr))?!1:(dr.crossVectors(ln,cn),t=[dr.x,dr.y,dr.z],ws(t,Kn,Zn,Jn,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,Es=new nr,Kn=new I,Zn=new I,Jn=new I,ln=new I,cn=new I,An=new I,ki=new I,fr=new I,dr=new I,Cn=new I;function ws(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Cn.fromArray(r,s);const o=i.x*Math.abs(Cn.x)+i.y*Math.abs(Cn.y)+i.z*Math.abs(Cn.z),l=e.dot(Cn),c=t.dot(Cn),u=n.dot(Cn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xh=new nr,Sa=new I,pr=new I,Ts=new I;class yo{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ts.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?pr.set(0,0,1).multiplyScalar(e.radius):pr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sa.copy(e.center).add(pr)),this.expandByPoint(Sa.copy(e.center).sub(pr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new I,As=new I,mr=new I,un=new I,Cs=new I,gr=new I,Ls=new I;class bh{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.direction).multiplyScalar(t).add(this.origin),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){As.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),un.copy(this.origin).sub(As);const s=e.distanceTo(t)*.5,a=-this.direction.dot(mr),o=un.dot(this.direction),l=-un.dot(mr),c=un.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const p=1/u;f*=p,d*=p,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(mr).multiplyScalar(d).add(As),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),i=$t.dot($t)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,i,s){Cs.subVectors(t,e),gr.subVectors(n,e),Ls.crossVectors(Cs,gr);let a=this.direction.dot(Ls),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,e);const l=o*this.direction.dot(gr.crossVectors(un,gr));if(l<0)return null;const c=o*this.direction.dot(Cs.cross(un));if(c<0||l+c>a)return null;const u=-o*un.dot(Ls);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,f,d,m,_,p,h){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=d,v[3]=m,v[7]=_,v[11]=p,v[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,p=c*f;t[0]=d+p*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=p+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,p=c*f;t[0]=d-p*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=p-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+p,t[1]=l*f,t[5]=p*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=p-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-p*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+p,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yh,e,Mh)}lookAt(e,t,n){const i=this.elements;return ht.subVectors(e,t),ht.lengthSq()===0&&(ht.z=1),ht.normalize(),hn.crossVectors(n,ht),hn.lengthSq()===0&&(Math.abs(n.z)===1?ht.x+=1e-4:ht.z+=1e-4,ht.normalize(),hn.crossVectors(n,ht)),hn.normalize(),_r.crossVectors(ht,hn),i[0]=hn.x,i[4]=_r.x,i[8]=ht.x,i[1]=hn.y,i[5]=_r.y,i[9]=ht.y,i[2]=hn.z,i[6]=_r.z,i[10]=ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],_=n[2],p=n[6],h=n[10],v=n[14],M=n[3],w=n[7],y=n[11],S=n[15],A=i[0],L=i[4],g=i[8],T=i[12],N=i[1],D=i[5],ee=i[9],j=i[13],P=i[2],X=i[6],z=i[10],W=i[14],q=i[3],F=i[7],G=i[11],Q=i[15];return s[0]=a*A+o*N+l*P+c*q,s[4]=a*L+o*D+l*X+c*F,s[8]=a*g+o*ee+l*z+c*G,s[12]=a*T+o*j+l*W+c*Q,s[1]=u*A+f*N+d*P+m*q,s[5]=u*L+f*D+d*X+m*F,s[9]=u*g+f*ee+d*z+m*G,s[13]=u*T+f*j+d*W+m*Q,s[2]=_*A+p*N+h*P+v*q,s[6]=_*L+p*D+h*X+v*F,s[10]=_*g+p*ee+h*z+v*G,s[14]=_*T+p*j+h*W+v*Q,s[3]=M*A+w*N+y*P+S*q,s[7]=M*L+w*D+y*X+S*F,s[11]=M*g+w*ee+y*z+S*G,s[15]=M*T+w*j+y*W+S*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],p=e[7],h=e[11],v=e[15];return _*(+s*l*f-i*c*f-s*o*d+n*c*d+i*o*m-n*l*m)+p*(+t*l*m-t*c*d+s*a*d-i*a*m+i*c*u-s*l*u)+h*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+v*(-i*o*u-t*l*f+t*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],p=e[13],h=e[14],v=e[15],M=f*h*c-p*d*c+p*l*m-o*h*m-f*l*v+o*d*v,w=_*d*c-u*h*c-_*l*m+a*h*m+u*l*v-a*d*v,y=u*p*c-_*f*c+_*o*m-a*p*m-u*o*v+a*f*v,S=_*f*l-u*p*l-_*o*d+a*p*d+u*o*h-a*f*h,A=t*M+n*w+i*y+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=M*L,e[1]=(p*d*s-f*h*s-p*i*m+n*h*m+f*i*v-n*d*v)*L,e[2]=(o*h*s-p*l*s+p*i*c-n*h*c-o*i*v+n*l*v)*L,e[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*m-n*l*m)*L,e[4]=w*L,e[5]=(u*h*s-_*d*s+_*i*m-t*h*m-u*i*v+t*d*v)*L,e[6]=(_*l*s-a*h*s-_*i*c+t*h*c+a*i*v-t*l*v)*L,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*m+t*l*m)*L,e[8]=y*L,e[9]=(_*f*s-u*p*s-_*n*m+t*p*m+u*n*v-t*f*v)*L,e[10]=(a*p*s-_*o*s+_*n*c-t*p*c-a*n*v+t*o*v)*L,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*m-t*o*m)*L,e[12]=S*L,e[13]=(u*p*i-_*f*i+_*n*d-t*p*d-u*n*h+t*f*h)*L,e[14]=(_*o*i-a*p*i-_*n*l+t*p*l+a*n*h-t*o*h)*L,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,_=s*f,p=a*u,h=a*f,v=o*f,M=l*c,w=l*u,y=l*f,S=n.x,A=n.y,L=n.z;return i[0]=(1-(p+v))*S,i[1]=(m+y)*S,i[2]=(_-w)*S,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(d+v))*A,i[6]=(h+M)*A,i[7]=0,i[8]=(_+w)*L,i[9]=(h-M)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qn.set(i[0],i[1],i[2]).length();const a=Qn.set(i[4],i[5],i[6]).length(),o=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tt.copy(this);const c=1/s,u=1/a,f=1/o;return Tt.elements[0]*=c,Tt.elements[1]*=c,Tt.elements[2]*=c,Tt.elements[4]*=u,Tt.elements[5]*=u,Tt.elements[6]*=u,Tt.elements[8]*=f,Tt.elements[9]*=f,Tt.elements[10]*=f,t.setFromRotationMatrix(Tt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),f=(t+e)*l,d=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qn=new I,Tt=new Je,yh=new I(0,0,0),Mh=new I(1,1,1),hn=new I,_r=new I,ht=new I,Ea=new Je,wa=new tr;class ir{constructor(e=0,t=0,n=0,i=ir.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ea,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ir.DefaultOrder="XYZ";ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sh=0;const Ta=new I,ei=new tr,qt=new Je,vr=new I,Vi=new I,Eh=new I,wh=new tr,Aa=new I(1,0,0),Ca=new I(0,1,0),La=new I(0,0,1),Th={type:"added"},Da={type:"removed"};class Rt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DefaultUp.clone();const e=new I,t=new ir,n=new tr,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new bt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(Aa,e)}rotateY(e){return this.rotateOnAxis(Ca,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ta.copy(e).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Aa,e)}translateY(e){return this.translateOnAxis(Ca,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(Vi,vr,this.up):qt.lookAt(vr,Vi,this.up),this.quaternion.setFromRotationMatrix(qt),i&&(qt.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(qt),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Da)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Da)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,wh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DefaultUp=new I(0,1,0);Rt.DefaultMatrixAutoUpdate=!0;const At=new I,Xt=new I,Ds=new I,Yt=new I,ti=new I,ni=new I,Pa=new I,Ps=new I,Rs=new I,Is=new I;class Kt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),At.subVectors(e,t),i.cross(At);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){At.subVectors(i,t),Xt.subVectors(n,t),Ds.subVectors(e,t);const a=At.dot(At),o=At.dot(Xt),l=At.dot(Ds),c=Xt.dot(Xt),u=Xt.dot(Ds),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yt),Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yt),l.set(0,0),l.addScaledVector(s,Yt.x),l.addScaledVector(a,Yt.y),l.addScaledVector(o,Yt.z),l}static isFrontFacing(e,t,n,i){return At.subVectors(n,t),Xt.subVectors(e,t),At.cross(Xt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),Xt.subVectors(this.a,this.b),At.cross(Xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Kt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ti.subVectors(i,n),ni.subVectors(s,n),Ps.subVectors(e,n);const l=ti.dot(Ps),c=ni.dot(Ps);if(l<=0&&c<=0)return t.copy(n);Rs.subVectors(e,i);const u=ti.dot(Rs),f=ni.dot(Rs);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ti,a);Is.subVectors(e,s);const m=ti.dot(Is),_=ni.dot(Is);if(_>=0&&m<=_)return t.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ni,o);const h=u*_-m*f;if(h<=0&&f-u>=0&&m-_>=0)return Pa.subVectors(s,i),o=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(Pa,o);const v=1/(h+p+d);return a=p*v,o=d*v,t.copy(n).addScaledVector(ti,a).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ah=0;class Kr extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=er(),this.name="",this.type="Material",this.blending=_i,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zl,this.blendDst=Ul,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Mu;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yl extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const He=new I,xr=new Ie;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=va,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Fe),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Ie),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new I),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Xe),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class jl extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kl extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ch=0;const vt=new Je,Ns=new Rt,ii=new I,ft=new nr,Gi=new nr,Ke=new I;class Hn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?Kl:jl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new bt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vt.makeRotationFromQuaternion(e),this.applyMatrix4(vt),this}rotateX(e){return vt.makeRotationX(e),this.applyMatrix4(vt),this}rotateY(e){return vt.makeRotationY(e),this.applyMatrix4(vt),this}rotateZ(e){return vt.makeRotationZ(e),this.applyMatrix4(vt),this}translate(e,t,n){return vt.makeTranslation(e,t,n),this.applyMatrix4(vt),this}scale(e,t,n){return vt.makeScale(e,t,n),this.applyMatrix4(vt),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ft.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,ft.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,ft.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(ft.min),this.boundingBox.expandByPoint(ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(ft.min,Gi.min),ft.expandByPoint(Ke),Ke.addVectors(ft.max,Gi.max),ft.expandByPoint(Ke)):(ft.expandByPoint(Gi.min),ft.expandByPoint(Gi.max))}ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ke.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ke));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(ii.fromBufferAttribute(e,c),Ke.add(ii)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<o;N++)c[N]=new I,u[N]=new I;const f=new I,d=new I,m=new I,_=new Ie,p=new Ie,h=new Ie,v=new I,M=new I;function w(N,D,ee){f.fromArray(i,N*3),d.fromArray(i,D*3),m.fromArray(i,ee*3),_.fromArray(a,N*2),p.fromArray(a,D*2),h.fromArray(a,ee*2),d.sub(f),m.sub(f),p.sub(_),h.sub(_);const j=1/(p.x*h.y-h.x*p.y);!isFinite(j)||(v.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(j),M.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(j),c[N].add(v),c[D].add(v),c[ee].add(v),u[N].add(M),u[D].add(M),u[ee].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let N=0,D=y.length;N<D;++N){const ee=y[N],j=ee.start,P=ee.count;for(let X=j,z=j+P;X<z;X+=3)w(n[X+0],n[X+1],n[X+2])}const S=new I,A=new I,L=new I,g=new I;function T(N){L.fromArray(s,N*3),g.copy(L);const D=c[N];S.copy(D),S.sub(L.multiplyScalar(L.dot(D))).normalize(),A.crossVectors(g,D);const j=A.dot(u[N])<0?-1:1;l[N*4]=S.x,l[N*4+1]=S.y,l[N*4+2]=S.z,l[N*4+3]=j}for(let N=0,D=y.length;N<D;++N){const ee=y[N],j=ee.start,P=ee.count;for(let X=j,z=j+P;X<z;X+=3)T(n[X+0]),T(n[X+1]),T(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,h),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,d=c;f<u;f++,d++)a[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ke.fromBufferAttribute(e,t),Ke.normalize(),e.setXYZ(t,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,h=l.length;p<h;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let v=0;v<u;v++)d[_++]=c[m++]}return new Ut(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new Je,ri=new bh,Os=new yo,fn=new I,dn=new I,pn=new I,Fs=new I,zs=new I,Us=new I,br=new I,yr=new I,Mr=new I,Sr=new Ie,Er=new Ie,wr=new Ie,Bs=new I,Tr=new I;class Jt extends Rt{constructor(e=new Hn,t=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),e.ray.intersectsSphere(Os)===!1)||(Ra.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Ra),n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,_=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const v=m[p],M=i[v.materialIndex],w=Math.max(v.start,_.start),y=Math.min(o.count,Math.min(v.start+v.count,_.start+_.count));for(let S=w,A=y;S<A;S+=3){const L=o.getX(S),g=o.getX(S+1),T=o.getX(S+2);a=Ar(this,M,e,ri,l,c,u,f,d,L,g,T),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),h=Math.min(o.count,_.start+_.count);for(let v=p,M=h;v<M;v+=3){const w=o.getX(v),y=o.getX(v+1),S=o.getX(v+2);a=Ar(this,i,e,ri,l,c,u,f,d,w,y,S),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const v=m[p],M=i[v.materialIndex],w=Math.max(v.start,_.start),y=Math.min(l.count,Math.min(v.start+v.count,_.start+_.count));for(let S=w,A=y;S<A;S+=3){const L=S,g=S+1,T=S+2;a=Ar(this,M,e,ri,l,c,u,f,d,L,g,T),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let v=p,M=h;v<M;v+=3){const w=v,y=v+1,S=v+2;a=Ar(this,i,e,ri,l,c,u,f,d,w,y,S),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function Lh(r,e,t,n,i,s,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==xi,o),l===null)return null;Tr.copy(o),Tr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Tr);return c<t.near||c>t.far?null:{distance:c,point:Tr.clone(),object:r}}function Ar(r,e,t,n,i,s,a,o,l,c,u,f){fn.fromBufferAttribute(i,c),dn.fromBufferAttribute(i,u),pn.fromBufferAttribute(i,f);const d=r.morphTargetInfluences;if(s&&d){br.set(0,0,0),yr.set(0,0,0),Mr.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=d[_],v=s[_];h!==0&&(Fs.fromBufferAttribute(v,c),zs.fromBufferAttribute(v,u),Us.fromBufferAttribute(v,f),a?(br.addScaledVector(Fs,h),yr.addScaledVector(zs,h),Mr.addScaledVector(Us,h)):(br.addScaledVector(Fs.sub(fn),h),yr.addScaledVector(zs.sub(dn),h),Mr.addScaledVector(Us.sub(pn),h)))}fn.add(br),dn.add(yr),pn.add(Mr)}r.isSkinnedMesh&&(r.boneTransform(c,fn),r.boneTransform(u,dn),r.boneTransform(f,pn));const m=Lh(r,e,t,n,fn,dn,pn,Bs);if(m){o&&(Sr.fromBufferAttribute(o,c),Er.fromBufferAttribute(o,u),wr.fromBufferAttribute(o,f),m.uv=Kt.getUV(Bs,fn,dn,pn,Sr,Er,wr,new Ie)),l&&(Sr.fromBufferAttribute(l,c),Er.fromBufferAttribute(l,u),wr.fromBufferAttribute(l,f),m.uv2=Kt.getUV(Bs,fn,dn,pn,Sr,Er,wr,new Ie));const _={a:c,b:u,c:f,normal:new I,materialIndex:0};Kt.getNormal(fn,dn,pn,_.normal),m.face=_}return m}class rr extends Hn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(f,2));function _(p,h,v,M,w,y,S,A,L,g,T){const N=y/L,D=S/g,ee=y/2,j=S/2,P=A/2,X=L+1,z=g+1;let W=0,q=0;const F=new I;for(let G=0;G<z;G++){const Q=G*D-j;for(let K=0;K<X;K++){const Z=K*N-ee;F[p]=Z*M,F[h]=Q*w,F[v]=P,c.push(F.x,F.y,F.z),F[p]=0,F[h]=0,F[v]=A>0?1:-1,u.push(F.x,F.y,F.z),f.push(K/L),f.push(1-G/g),W+=1}}for(let G=0;G<g;G++)for(let Q=0;Q<L;Q++){const K=d+Q+X*G,Z=d+Q+X*(G+1),ae=d+(Q+1)+X*(G+1),pe=d+(Q+1)+X*G;l.push(K,Z,pe),l.push(Z,ae,pe),q+=6}o.addGroup(m,q,T),m+=q,d+=W}}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function et(r){const e={};for(let t=0;t<r.length;t++){const n=Si(r[t]);for(const i in n)e[i]=n[i]}return e}function Dh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Ph={clone:Si,merge:et};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zl extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends Zl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=90,oi=1;class Nh extends Rt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ct(si,oi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);const s=new Ct(si,oi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new Ct(si,oi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new Ct(si,oi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new Ct(si,oi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Ct(si,oi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Qt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Jl extends Pt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oh extends Vn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rr(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:_n});s.uniforms.tEquirect.value=t;const a=new Jt(i,s),o=t.minFilter;return t.minFilter===jr&&(t.minFilter=xt),new Nh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ks=new I,Fh=new I,zh=new bt;class Ln{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ks.subVectors(n,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ks),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),i=this.coplanarPoint(ks).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new yo,Cr=new I;class Ql{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,s=new Ln,a=new Ln){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],_=n[10],p=n[11],h=n[12],v=n[13],M=n[14],w=n[15];return t[0].setComponents(o-i,f-l,p-d,w-h).normalize(),t[1].setComponents(o+i,f+l,p+d,w+h).normalize(),t[2].setComponents(o+s,f+c,p+m,w+v).normalize(),t[3].setComponents(o-s,f-c,p-m,w-v).normalize(),t[4].setComponents(o-a,f-u,p-_,w-M).normalize(),t[5].setComponents(o+a,f+u,p+_,w+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cr.x=i.normal.x>0?e.max.x:e.min.x,Cr.y=i.normal.y>0?e.max.y:e.min.y,Cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Zr extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,m=[],_=[],p=[],h=[];for(let v=0;v<u;v++){const M=v*d-a;for(let w=0;w<c;w++){const y=w*f-s;_.push(y,-M,0),p.push(0,0,1),h.push(w/o),h.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<o;M++){const w=M+c*v,y=M+c*(v+1),S=M+1+c*(v+1),A=M+1+c*v;m.push(w,y,A),m.push(y,S,A)}this.setIndex(m),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(p,3)),this.setAttribute("uv",new zn(h,2))}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h="vec3 transformed = vec3( position );",qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Yh=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Cf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,If=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Nf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Of=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_d=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ld=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Rd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Id=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Nd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Od=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Wd=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ep=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,rp=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Bh,alphamap_pars_fragment:kh,alphatest_fragment:Vh,alphatest_pars_fragment:Gh,aomap_fragment:Hh,aomap_pars_fragment:Wh,begin_vertex:$h,beginnormal_vertex:qh,bsdfs:Xh,iridescence_fragment:Yh,bumpmap_pars_fragment:jh,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Qh,color_fragment:ef,color_pars_fragment:tf,color_pars_vertex:nf,color_vertex:rf,common:sf,cube_uv_reflection_fragment:of,defaultnormal_vertex:af,displacementmap_pars_vertex:lf,displacementmap_vertex:cf,emissivemap_fragment:uf,emissivemap_pars_fragment:hf,encodings_fragment:ff,encodings_pars_fragment:df,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Cf,envmap_vertex:vf,fog_vertex:xf,fog_pars_vertex:bf,fog_fragment:yf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_fragment:Ef,lightmap_pars_fragment:wf,lights_lambert_vertex:Tf,lights_pars_begin:Af,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:Pf,lights_phong_pars_fragment:Rf,lights_physical_fragment:If,lights_physical_pars_fragment:Nf,lights_fragment_begin:Of,lights_fragment_maps:Ff,lights_fragment_end:zf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Vf,map_fragment:Gf,map_pars_fragment:Hf,map_particle_fragment:Wf,map_particle_pars_fragment:$f,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Xf,morphcolor_vertex:Yf,morphnormal_vertex:jf,morphtarget_pars_vertex:Kf,morphtarget_vertex:Zf,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:od,iridescence_pars_fragment:ad,output_fragment:ld,packing:cd,premultiplied_alpha_fragment:ud,project_vertex:hd,dithering_fragment:fd,dithering_pars_fragment:dd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:vd,shadowmask_pars_fragment:xd,skinbase_vertex:bd,skinning_pars_vertex:yd,skinning_vertex:Md,skinnormal_vertex:Sd,specularmap_fragment:Ed,specularmap_pars_fragment:wd,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:Cd,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Pd,uv_vertex:Rd,uv2_pars_fragment:Id,uv2_pars_vertex:Nd,uv2_vertex:Od,worldpos_vertex:Fd,background_vert:zd,background_frag:Ud,cube_vert:Bd,cube_frag:kd,depth_vert:Vd,depth_frag:Gd,distanceRGBA_vert:Hd,distanceRGBA_frag:Wd,equirect_vert:$d,equirect_frag:qd,linedashed_vert:Xd,linedashed_frag:Yd,meshbasic_vert:jd,meshbasic_frag:Kd,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:ep,meshnormal_vert:tp,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:rp,meshphysical_vert:sp,meshphysical_frag:op,meshtoon_vert:ap,meshtoon_frag:lp,points_vert:cp,points_frag:up,shadow_vert:hp,shadow_frag:fp,sprite_vert:dp,sprite_frag:pp},ne={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new bt},uv2Transform:{value:new bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}}},Ft={basic:{uniforms:et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:et([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:et([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:et([ne.points,ne.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:et([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:et([ne.common,ne.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:et([ne.sprite,ne.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:et([ne.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:et([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:et([ne.lights,ne.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ft.physical={uniforms:et([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function mp(r,e,t,n,i,s){const a=new Fe(0);let o=i===!0?0:1,l,c,u=null,f=0,d=null;function m(p,h){let v=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=e.get(M));const w=r.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?_(a,o):M&&M.isColor&&(_(M,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Yr)?(c===void 0&&(c=new Jt(new rr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Si(Ft.cube.uniforms),vertexShader:Ft.cube.vertexShader,fragmentShader:Ft.cube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Jt(new Zr(2,2),new vn({name:"BackgroundMaterial",uniforms:Si(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),o=h,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,_(a,o)},render:m}}function gp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=h(null);let c=l,u=!1;function f(P,X,z,W,q){let F=!1;if(a){const G=p(W,z,X);c!==G&&(c=G,m(c.object)),F=v(P,W,z,q),F&&M(P,W,z,q)}else{const G=X.wireframe===!0;(c.geometry!==W.id||c.program!==z.id||c.wireframe!==G)&&(c.geometry=W.id,c.program=z.id,c.wireframe=G,F=!0)}q!==null&&t.update(q,34963),(F||u)&&(u=!1,g(P,X,z,W),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,X,z){const W=z.wireframe===!0;let q=o[P.id];q===void 0&&(q={},o[P.id]=q);let F=q[X.id];F===void 0&&(F={},q[X.id]=F);let G=F[W];return G===void 0&&(G=h(d()),F[W]=G),G}function h(P){const X=[],z=[],W=[];for(let q=0;q<i;q++)X[q]=0,z[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:z,attributeDivisors:W,object:P,attributes:{},index:null}}function v(P,X,z,W){const q=c.attributes,F=X.attributes;let G=0;const Q=z.getAttributes();for(const K in Q)if(Q[K].location>=0){const ae=q[K];let pe=F[K];if(pe===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;G++}return c.attributesNum!==G||c.index!==W}function M(P,X,z,W){const q={},F=X.attributes;let G=0;const Q=z.getAttributes();for(const K in Q)if(Q[K].location>=0){let ae=F[K];ae===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),q[K]=pe,G++}c.attributes=q,c.attributesNum=G,c.index=W}function w(){const P=c.newAttributes;for(let X=0,z=P.length;X<z;X++)P[X]=0}function y(P){S(P,0)}function S(P,X){const z=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;z[P]=1,W[P]===0&&(r.enableVertexAttribArray(P),W[P]=1),q[P]!==X&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,X),q[P]=X)}function A(){const P=c.newAttributes,X=c.enabledAttributes;for(let z=0,W=X.length;z<W;z++)X[z]!==P[z]&&(r.disableVertexAttribArray(z),X[z]=0)}function L(P,X,z,W,q,F){n.isWebGL2===!0&&(z===5124||z===5125)?r.vertexAttribIPointer(P,X,z,q,F):r.vertexAttribPointer(P,X,z,W,q,F)}function g(P,X,z,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const q=W.attributes,F=z.getAttributes(),G=X.defaultAttributeValues;for(const Q in F){const K=F[Q];if(K.location>=0){let Z=q[Q];if(Z===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const ae=Z.normalized,pe=Z.itemSize,H=t.get(Z);if(H===void 0)continue;const Te=H.buffer,fe=H.type,ge=H.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,De=le.stride,be=Z.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<K.locationSize;me++)S(K.location+me,le.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<K.locationSize;me++)y(K.location+me);r.bindBuffer(34962,Te);for(let me=0;me<K.locationSize;me++)L(K.location+me,pe/K.locationSize,fe,ae,De*ge,(be+pe/K.locationSize*me)*ge)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<K.locationSize;le++)S(K.location+le,Z.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<K.locationSize;le++)y(K.location+le);r.bindBuffer(34962,Te);for(let le=0;le<K.locationSize;le++)L(K.location+le,pe/K.locationSize,fe,ae,pe*ge,pe/K.locationSize*le*ge)}}else if(G!==void 0){const ae=G[Q];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(K.location,ae);break;case 3:r.vertexAttrib3fv(K.location,ae);break;case 4:r.vertexAttrib4fv(K.location,ae);break;default:r.vertexAttrib1fv(K.location,ae)}}}}A()}function T(){ee();for(const P in o){const X=o[P];for(const z in X){const W=X[z];for(const q in W)_(W[q].object),delete W[q];delete X[z]}delete o[P]}}function N(P){if(o[P.id]===void 0)return;const X=o[P.id];for(const z in X){const W=X[z];for(const q in W)_(W[q].object),delete W[q];delete X[z]}delete o[P.id]}function D(P){for(const X in o){const z=o[X];if(z[P.id]===void 0)continue;const W=z[P.id];for(const q in W)_(W[q].object),delete W[q];delete z[P.id]}}function ee(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:j,dispose:T,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:y,disableUnusedAttributes:A}}function _p(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function vp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),v=r.getParameter(36348),M=r.getParameter(36349),w=d>0,y=a||e.has("OES_texture_float"),S=w&&y,A=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:A}}function xp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ln,o=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,v=r.get(f);if(!i||_===null||_.length===0||s&&!h)s?u(null):c();else{const M=s?0:n,w=M*4;let y=v.clippingState||null;l.value=y,y=u(_,d,w,m);for(let S=0;S!==w;++S)y[S]=t[S];v.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const v=m+p*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(h===null||h.length<v)&&(h=new Float32Array(v));for(let w=0,y=m;w!==p;++w,y+=4)a.copy(f[w]).applyMatrix4(M,o),a.normal.toArray(h,y),h[y+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function bp(r){let e=new WeakMap;function t(a,o){return o===oo?a.mapping=bi:o===ao&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===oo||o===ao)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Oh(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class tc extends Zl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mi=4,Ia=[.125,.215,.35,.446,.526,.582],Pn=20,Vs=new tc,Na=new Fe;let Gs=null;const Dn=(1+Math.sqrt(5))/2,li=1/Dn,Oa=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Dn,li),new I(0,Dn,-li),new I(li,0,Dn),new I(-li,0,Dn),new I(Dn,li,0),new I(-Dn,li,0)];class Fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Gs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gs),e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:Ji,format:zt,encoding:kn,depthBuffer:!1},i=za(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(s)),this._blurMaterial=Mp(s,e,t)}return i}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,i){const o=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Na),u.toneMapping=Qt,u.autoClear=!1;const m=new Yl({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),_=new Jt(new rr,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Na),p=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):M===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const w=this._cubeSize;Lr(i,M*w,v>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bi||e.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Oa[(i-1)%Oa.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),p=s/_,h=isFinite(s)?1+Math.floor(u*p):Pn;h>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Pn}`);const v=[];let M=0;for(let L=0;L<Pn;++L){const g=L/p,T=Math.exp(-g*g/2);v.push(T),L===0?M+=T:L<h&&(M+=2*T)}for(let L=0;L<v.length;L++)v[L]=v[L]/M;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=v,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const y=this._sizeLods[i],S=3*y*(i>w-mi?i-w+mi:0),A=4*(this._cubeSize-y);Lr(t,S,A,3*y,2*y),l.setRenderTarget(t),l.render(f,Vs)}}function yp(r){const e=[],t=[],n=[];let i=r;const s=r-mi+1+Ia.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-mi?l=Ia[a-r+mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,p=3,h=2,v=1,M=new Float32Array(p*_*m),w=new Float32Array(h*_*m),y=new Float32Array(v*_*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,g=A>2?0:-1,T=[L,g,0,L+2/3,g,0,L+2/3,g+1,0,L,g,0,L+2/3,g+1,0,L,g+1,0];M.set(T,p*_*A),w.set(d,h*_*A);const N=[A,A,A,A,A,A];y.set(N,v*_*A)}const S=new Hn;S.setAttribute("position",new Ut(M,p)),S.setAttribute("uv",new Ut(w,h)),S.setAttribute("faceIndex",new Ut(y,v)),e.push(S),i>mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function za(r,e,t){const n=new Vn(r,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mp(r,e,t){const n=new Float32Array(Pn),i=new I(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ua(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ba(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function Sp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===oo||l===ao,u=l===bi||l===yi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Fa(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Fa(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ep(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wp(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let h=0,v=p.length;h<v;h++)e.update(p[h],34962)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let w=0,y=M.length;w<y;w+=3){const S=M[w+0],A=M[w+1],L=M[w+2];d.push(S,A,A,L,L,S)}}else{const M=_.array;p=_.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const S=w+0,A=w+1,L=w+2;d.push(S,A,A,L,L,S)}}const h=new(Gl(d)?Kl:jl)(d,1);h.version=p;const v=s.get(f);v&&e.remove(v),s.set(f,h)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Tp(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,_){if(_===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,o,d*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Ap(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cp(r,e){return r[0]-e[0]}function Lp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Hs(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Dp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Xe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let v=s.get(u);if(v===void 0||v.count!==h){let z=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var _=z;v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],g=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let N=0;y===!0&&(N=1),S===!0&&(N=2),A===!0&&(N=3);let D=u.attributes.position.count*N,ee=1;D>e.maxTextureSize&&(ee=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const j=new Float32Array(D*ee*4*h),P=new ql(j,D,ee,h);P.type=In,P.needsUpdate=!0;const X=N*4;for(let W=0;W<h;W++){const q=L[W],F=g[W],G=T[W],Q=D*ee*4*W;for(let K=0;K<q.count;K++){const Z=K*X;y===!0&&(a.fromBufferAttribute(q,K),q.normalized===!0&&Hs(a,q),j[Q+Z+0]=a.x,j[Q+Z+1]=a.y,j[Q+Z+2]=a.z,j[Q+Z+3]=0),S===!0&&(a.fromBufferAttribute(F,K),F.normalized===!0&&Hs(a,F),j[Q+Z+4]=a.x,j[Q+Z+5]=a.y,j[Q+Z+6]=a.z,j[Q+Z+7]=0),A===!0&&(a.fromBufferAttribute(G,K),G.normalized===!0&&Hs(a,G),j[Q+Z+8]=a.x,j[Q+Z+9]=a.y,j[Q+Z+10]=a.z,j[Q+Z+11]=G.itemSize===4?a.w:1)}}v={count:h,texture:P,size:new Ie(D,ee)},s.set(u,v),u.addEventListener("dispose",z)}let M=0;for(let y=0;y<m.length;y++)M+=m[y];const w=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const p=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==p){h=[];for(let S=0;S<p;S++)h[S]=[S,0];n[u.id]=h}for(let S=0;S<p;S++){const A=h[S];A[0]=S,A[1]=m[S]}h.sort(Lp);for(let S=0;S<8;S++)S<p&&h[S][1]?(o[S][0]=h[S][0],o[S][1]=h[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Cp);const v=u.morphAttributes.position,M=u.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const A=o[S],L=A[0],g=A[1];L!==Number.MAX_SAFE_INTEGER&&g?(v&&u.getAttribute("morphTarget"+S)!==v[L]&&u.setAttribute("morphTarget"+S,v[L]),M&&u.getAttribute("morphNormal"+S)!==M[L]&&u.setAttribute("morphNormal"+S,M[L]),i[S]=g,w+=g):(v&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),M&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const y=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Pp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const nc=new Pt,ic=new ql,rc=new vh,sc=new Jl,ka=[],Va=[],Ga=new Float32Array(16),Ha=new Float32Array(9),Wa=new Float32Array(4);function Ii(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ka[i];if(s===void 0&&(s=new Float32Array(i),ka[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function at(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Jr(r,e){let t=Va[e];t===void 0&&(t=new Int32Array(e),Va[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Rp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),at(t,e)}}function Np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),at(t,e)}}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),at(t,e)}}function Fp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Wa.set(n),r.uniformMatrix2fv(this.addr,!1,Wa),at(t,n)}}function zp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Ha.set(n),r.uniformMatrix3fv(this.addr,!1,Ha),at(t,n)}}function Up(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Ga.set(n),r.uniformMatrix4fv(this.addr,!1,Ga),at(t,n)}}function Bp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kp(r,e){const t=this.cache;ot(t,e)||(r.uniform2iv(this.addr,e),at(t,e))}function Vp(r,e){const t=this.cache;ot(t,e)||(r.uniform3iv(this.addr,e),at(t,e))}function Gp(r,e){const t=this.cache;ot(t,e)||(r.uniform4iv(this.addr,e),at(t,e))}function Hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Wp(r,e){const t=this.cache;ot(t,e)||(r.uniform2uiv(this.addr,e),at(t,e))}function $p(r,e){const t=this.cache;ot(t,e)||(r.uniform3uiv(this.addr,e),at(t,e))}function qp(r,e){const t=this.cache;ot(t,e)||(r.uniform4uiv(this.addr,e),at(t,e))}function Xp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||nc,i)}function Yp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rc,i)}function jp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sc,i)}function Kp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ic,i)}function Zp(r){switch(r){case 5126:return Rp;case 35664:return Ip;case 35665:return Np;case 35666:return Op;case 35674:return Fp;case 35675:return zp;case 35676:return Up;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Wp;case 36295:return $p;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Kp}}function Jp(r,e){r.uniform1fv(this.addr,e)}function Qp(r,e){const t=Ii(e,this.size,2);r.uniform2fv(this.addr,t)}function em(r,e){const t=Ii(e,this.size,3);r.uniform3fv(this.addr,t)}function tm(r,e){const t=Ii(e,this.size,4);r.uniform4fv(this.addr,t)}function nm(r,e){const t=Ii(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function im(r,e){const t=Ii(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function rm(r,e){const t=Ii(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sm(r,e){r.uniform1iv(this.addr,e)}function om(r,e){r.uniform2iv(this.addr,e)}function am(r,e){r.uniform3iv(this.addr,e)}function lm(r,e){r.uniform4iv(this.addr,e)}function cm(r,e){r.uniform1uiv(this.addr,e)}function um(r,e){r.uniform2uiv(this.addr,e)}function hm(r,e){r.uniform3uiv(this.addr,e)}function fm(r,e){r.uniform4uiv(this.addr,e)}function dm(r,e,t){const n=e.length,i=Jr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||nc,i[s])}function pm(r,e,t){const n=e.length,i=Jr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||rc,i[s])}function mm(r,e,t){const n=e.length,i=Jr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||sc,i[s])}function gm(r,e,t){const n=e.length,i=Jr(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||ic,i[s])}function _m(r){switch(r){case 5126:return Jp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return um;case 36295:return hm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zp(t.type)}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_m(t.type)}}class bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function $a(r,e){r.seq.push(e),r.map[e.id]=e}function ym(r,e,t){const n=r.name,i=n.length;for(Ws.lastIndex=0;;){const s=Ws.exec(n),a=Ws.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$a(t,c===void 0?new vm(o,r,e):new xm(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new bm(o),$a(t,f)),t=f}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);ym(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Mm=0;function Sm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Em(r){switch(r){case kn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Xa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Sm(r.getShaderSource(e),a)}else return i}function wm(r,e){const t=Em(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Tm(r,e){let t;switch(e){case Wu:t="Linear";break;case $u:t="Reinhard";break;case qu:t="OptimizedCineon";break;case Xu:t="ACESFilmic";break;case Yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Am(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Cm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Xi(r){return r!==""}function Ya(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ja(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(r){return r.replace(Dm,Pm)}function Pm(r,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fo(t)}const Rm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(r){return r.replace(Im,oc).replace(Rm,Nm)}function Nm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),oc(r,e,t,n)}function oc(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Za(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Om(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Fm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bi:case yi:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Um(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case Gu:e="ENVMAP_BLENDING_MIX";break;case Hu:e="ENVMAP_BLENDING_ADD";break}return e}function Bm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function km(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Om(t),c=Fm(t),u=zm(t),f=Um(t),d=Bm(t),m=t.isWebGL2?"":Am(t),_=Cm(s),p=i.createProgram();let h,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(Xi).join(`
`),h.length>0&&(h+=`
`),v=[m,_].filter(Xi).join(`
`),v.length>0&&(v+=`
`)):(h=[Za(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),v=[m,Za(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qt?"#define TONE_MAPPING":"",t.toneMapping!==Qt?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Qt?Tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,wm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=fo(a),a=Ya(a,t),a=ja(a,t),o=fo(o),o=Ya(o,t),o=ja(o,t),a=Ka(a),o=Ka(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["#define varying in",t.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=M+h+a,y=M+v+o,S=qa(i,35633,w),A=qa(i,35632,y);if(i.attachShader(p,S),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(S).trim(),D=i.getShaderInfoLog(A).trim();let ee=!0,j=!0;if(i.getProgramParameter(p,35714)===!1){ee=!1;const P=Xa(i,S,"vertex"),X=Xa(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+P+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(N===""||D==="")&&(j=!1);j&&(this.diagnostics={runnable:ee,programLog:T,vertexShader:{log:N,prefix:h},fragmentShader:{log:D,prefix:v}})}i.deleteShader(S),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Br(i,p)),L};let g;return this.getAttributes=function(){return g===void 0&&(g=Lm(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}let Vm=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Hm(e);t.set(e,n)}return t.get(e)}}class Hm{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}}function Wm(r,e,t,n,i,s,a){const o=new Xl,l=new Gm,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,T,N,D,ee){const j=D.fog,P=ee.geometry,X=g.isMeshStandardMaterial?D.environment:null,z=(g.isMeshStandardMaterial?t:e).get(g.envMap||X),W=!!z&&z.mapping===Yr?z.image.height:null,q=_[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const F=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=F!==void 0?F.length:0;let Q=0;P.morphAttributes.position!==void 0&&(Q=1),P.morphAttributes.normal!==void 0&&(Q=2),P.morphAttributes.color!==void 0&&(Q=3);let K,Z,ae,pe;if(q){const De=Ft[q];K=De.vertexShader,Z=De.fragmentShader}else K=g.vertexShader,Z=g.fragmentShader,l.update(g),ae=l.getVertexShaderID(g),pe=l.getFragmentShaderID(g);const H=r.getRenderTarget(),Te=g.alphaTest>0,fe=g.clearcoat>0,ge=g.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:g.type,vertexShader:K,fragmentShader:Z,defines:g.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:kn,map:!!g.map,matcap:!!g.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:W,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===ph,tangentSpaceNormalMap:g.normalMapType===dh,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===Be,clearcoat:fe,clearcoatMap:fe&&!!g.clearcoatMap,clearcoatRoughnessMap:fe&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!g.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!g.iridescenceMap,iridescenceThicknessMap:ge&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===_i,alphaMap:!!g.alphaMap,alphaTest:Te,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!P.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||g.transmission>0||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||g.sheen>0||!!g.sheenColorMap||!!g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!j,useFog:g.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:g.toneMapped?r.toneMapping:Qt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xi,flipSided:g.side===Dt,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function h(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)T.push(N),T.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(v(T,g),M(T,g),T.push(r.outputEncoding)),T.push(g.customProgramCacheKey),T.join()}function v(g,T){g.push(T.precision),g.push(T.outputEncoding),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.combine),g.push(T.vertexUvs),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function M(g,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),T.fog&&o.enable(33),g.push(o.mask),o.disableAll(),T.useFog&&o.enable(0),T.flatShading&&o.enable(1),T.logarithmicDepthBuffer&&o.enable(2),T.skinning&&o.enable(3),T.morphTargets&&o.enable(4),T.morphNormals&&o.enable(5),T.morphColors&&o.enable(6),T.premultipliedAlpha&&o.enable(7),T.shadowMapEnabled&&o.enable(8),T.physicallyCorrectLights&&o.enable(9),T.doubleSided&&o.enable(10),T.flipSided&&o.enable(11),T.useDepthPacking&&o.enable(12),T.dithering&&o.enable(13),T.specularIntensityMap&&o.enable(14),T.specularColorMap&&o.enable(15),T.transmission&&o.enable(16),T.transmissionMap&&o.enable(17),T.thicknessMap&&o.enable(18),T.sheen&&o.enable(19),T.sheenColorMap&&o.enable(20),T.sheenRoughnessMap&&o.enable(21),T.decodeVideoTexture&&o.enable(22),T.opaque&&o.enable(23),g.push(o.mask)}function w(g){const T=_[g.type];let N;if(T){const D=Ft[T];N=Ph.clone(D.uniforms)}else N=g.uniforms;return N}function y(g,T){let N;for(let D=0,ee=c.length;D<ee;D++){const j=c[D];if(j.cacheKey===T){N=j,++N.usedTimes;break}}return N===void 0&&(N=new km(r,T,g,s),c.push(N)),N}function S(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),g.destroy()}}function A(g){l.remove(g)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:L}}function $m(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function qm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ja(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qa(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,m,_,p,h){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},r[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=h),e++,v}function o(f,d,m,_,p,h){const v=a(f,d,m,_,p,h);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function l(f,d,m,_,p,h){const v=a(f,d,m,_,p,h);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function c(f,d){t.length>1&&t.sort(f||qm),n.length>1&&n.sort(d||Ja),i.length>1&&i.sort(d||Ja)}function u(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Xm(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Qa,r.set(n,[s])):i>=r.get(n).length?(s=new Qa,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ym(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function jm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Km=0;function Zm(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Jm(r,e){const t=new Ym,n=jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,a=new Je,o=new Je;function l(u,f){let d=0,m=0,_=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,h=0,v=0,M=0,w=0,y=0,S=0,A=0;u.sort(Zm);const L=f!==!0?Math.PI:1;for(let T=0,N=u.length;T<N;T++){const D=u[T],ee=D.color,j=D.intensity,P=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=ee.r*j*L,m+=ee.g*j*L,_+=ee.b*j*L;else if(D.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],j);else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*L),D.castShadow){const W=D.shadow,q=n.get(D);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=D.shadow.matrix,y++}i.directional[p]=z,p++}else if(D.isSpotLight){const z=t.get(D);if(z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(ee).multiplyScalar(j*L),z.distance=P,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,D.castShadow){const W=D.shadow,q=n.get(D);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=X,i.spotShadowMatrix[v]=D.shadow.matrix,A++}i.spot[v]=z,v++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(ee).multiplyScalar(j),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=z,M++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*L),z.distance=D.distance,z.decay=D.decay,D.castShadow){const W=D.shadow,q=n.get(D);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,i.pointShadow[h]=q,i.pointShadowMap[h]=X,i.pointShadowMatrix[h]=D.shadow.matrix,S++}i.point[h]=z,h++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(j*L),z.groundColor.copy(D.groundColor).multiplyScalar(j*L),i.hemi[w]=z,w++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const g=i.hash;(g.directionalLength!==p||g.pointLength!==h||g.spotLength!==v||g.rectAreaLength!==M||g.hemiLength!==w||g.numDirectionalShadows!==y||g.numPointShadows!==S||g.numSpotShadows!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=M,i.point.length=h,i.hemi.length=w,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotShadowMatrix.length=A,g.directionalLength=p,g.pointLength=h,g.spotLength=v,g.rectAreaLength=M,g.hemiLength=w,g.numDirectionalShadows=y,g.numPointShadows=S,g.numSpotShadows=A,i.version=Km++)}function c(u,f){let d=0,m=0,_=0,p=0,h=0;const v=f.matrixWorldInverse;for(let M=0,w=u.length;M<w;M++){const y=u[M];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),d++}else if(y.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),_++}else if(y.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),o.identity(),a.copy(y.matrixWorld),a.premultiply(v),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),m++}else if(y.isHemisphereLight){const S=i.hemi[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(v),h++}}}return{setup:l,setupView:c,state:i}}function el(r,e){const t=new Jm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qm(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new el(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new el(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class eg extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function rg(r,e,t){let n=new Ql;const i=new Ie,s=new Ie,a=new Xe,o=new eg({depthPacking:fh}),l=new tg,c={},u=t.maxTextureSize,f={0:Dt,1:Zi,2:xi},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jt(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl,this.render=function(y,S,A){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;const L=r.getRenderTarget(),g=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),N=r.state;N.setBlending(_n),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let D=0,ee=y.length;D<ee;D++){const j=y[D],P=j.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const X=P.getFrameExtents();if(i.multiply(X),s.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,P.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,P.mapSize.y=s.y)),P.map===null){const W=this.type!==qi?{minFilter:lt,magFilter:lt}:{};P.map=new Vn(i.x,i.y,W),P.map.texture.name=j.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const z=P.getViewportCount();for(let W=0;W<z;W++){const q=P.getViewport(W);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),N.viewport(a),P.updateMatrices(j,W),n=P.getFrustum(),w(S,A,P.camera,j,this.type)}P.isPointLightShadow!==!0&&this.type===qi&&v(P,A),P.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(L,g,T)};function v(y,S){const A=e.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Vn(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(S,null,A,d,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(S,null,A,m,p,null)}function M(y,S,A,L,g,T){let N=null;const D=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0?N=D:N=A.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ee=N.uuid,j=S.uuid;let P=c[ee];P===void 0&&(P={},c[ee]=P);let X=P[j];X===void 0&&(X=N.clone(),P[j]=X),N=X}return N.visible=S.visible,N.wireframe=S.wireframe,T===qi?N.side=S.shadowSide!==null?S.shadowSide:S.side:N.side=S.shadowSide!==null?S.shadowSide:f[S.side],N.alphaMap=S.alphaMap,N.alphaTest=S.alphaTest,N.clipShadows=S.clipShadows,N.clippingPlanes=S.clippingPlanes,N.clipIntersection=S.clipIntersection,N.displacementMap=S.displacementMap,N.displacementScale=S.displacementScale,N.displacementBias=S.displacementBias,N.wireframeLinewidth=S.wireframeLinewidth,N.linewidth=S.linewidth,A.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(A.matrixWorld),N.nearDistance=L,N.farDistance=g),N}function w(y,S,A,L,g){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&g===qi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const D=e.update(y),ee=y.material;if(Array.isArray(ee)){const j=D.groups;for(let P=0,X=j.length;P<X;P++){const z=j[P],W=ee[z.materialIndex];if(W&&W.visible){const q=M(y,W,L,A.near,A.far,g);r.renderBufferDirect(A,null,D,q,y,z)}}}else if(ee.visible){const j=M(y,ee,L,A.near,A.far,g);r.renderBufferDirect(A,null,D,j,y,null)}}const N=y.children;for(let D=0,ee=N.length;D<ee;D++)w(N[D],S,A,L,g)}}function sg(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const oe=new Xe;let V=null;const se=new Xe(0,0,0,0);return{setMask:function(re){V!==re&&!C&&(r.colorMask(re,re,re,re),V=re)},setLocked:function(re){C=re},setClear:function(re,Ce,je,Ve,on){on===!0&&(re*=Ve,Ce*=Ve,je*=Ve),oe.set(re,Ce,je,Ve),se.equals(oe)===!1&&(r.clearColor(re,Ce,je,Ve),se.copy(oe))},reset:function(){C=!1,V=null,se.set(-1,0,0,0)}}}function s(){let C=!1,oe=null,V=null,se=null;return{setTest:function(re){re?Te(2929):fe(2929)},setMask:function(re){oe!==re&&!C&&(r.depthMask(re),oe=re)},setFunc:function(re){if(V!==re){if(re)switch(re){case Ou:r.depthFunc(512);break;case Fu:r.depthFunc(519);break;case zu:r.depthFunc(513);break;case so:r.depthFunc(515);break;case Uu:r.depthFunc(514);break;case Bu:r.depthFunc(518);break;case ku:r.depthFunc(516);break;case Vu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);V=re}},setLocked:function(re){C=re},setClear:function(re){se!==re&&(r.clearDepth(re),se=re)},reset:function(){C=!1,oe=null,V=null,se=null}}}function a(){let C=!1,oe=null,V=null,se=null,re=null,Ce=null,je=null,Ve=null,on=null;return{setTest:function(ze){C||(ze?Te(2960):fe(2960))},setMask:function(ze){oe!==ze&&!C&&(r.stencilMask(ze),oe=ze)},setFunc:function(ze,Ht,gt){(V!==ze||se!==Ht||re!==gt)&&(r.stencilFunc(ze,Ht,gt),V=ze,se=Ht,re=gt)},setOp:function(ze,Ht,gt){(Ce!==ze||je!==Ht||Ve!==gt)&&(r.stencilOp(ze,Ht,gt),Ce=ze,je=Ht,Ve=gt)},setLocked:function(ze){C=ze},setClear:function(ze){on!==ze&&(r.clearStencil(ze),on=ze)},reset:function(){C=!1,oe=null,V=null,se=null,re=null,Ce=null,je=null,Ve=null,on=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,p=[],h=null,v=!1,M=null,w=null,y=null,S=null,A=null,L=null,g=null,T=!1,N=null,D=null,ee=null,j=null,P=null;const X=r.getParameter(35661);let z=!1,W=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=W>=2);let F=null,G={};const Q=r.getParameter(3088),K=r.getParameter(2978),Z=new Xe().fromArray(Q),ae=new Xe().fromArray(K);function pe(C,oe,V){const se=new Uint8Array(4),re=r.createTexture();r.bindTexture(C,re),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let Ce=0;Ce<V;Ce++)r.texImage2D(oe+Ce,0,6408,1,1,0,6408,5121,se);return re}const H={};H[3553]=pe(3553,3553,1),H[34067]=pe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(2929),l.setFunc(so),Ye(!1),ct(Ho),Te(2884),We(_n);function Te(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function fe(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function ge(C,oe){return m[C]!==oe?(r.bindFramebuffer(C,oe),m[C]=oe,n&&(C===36009&&(m[36160]=oe),C===36160&&(m[36009]=oe)),!0):!1}function le(C,oe){let V=p,se=!1;if(C)if(V=_.get(oe),V===void 0&&(V=[],_.set(oe,V)),C.isWebGLMultipleRenderTargets){const re=C.texture;if(V.length!==re.length||V[0]!==36064){for(let Ce=0,je=re.length;Ce<je;Ce++)V[Ce]=36064+Ce;V.length=re.length,se=!0}}else V[0]!==36064&&(V[0]=36064,se=!0);else V[0]!==1029&&(V[0]=1029,se=!0);se&&(t.isWebGL2?r.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function De(C){return h!==C?(r.useProgram(C),h=C,!0):!1}const be={[hi]:32774,[Eu]:32778,[wu]:32779};if(n)be[Xo]=32775,be[Yo]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(be[Xo]=C.MIN_EXT,be[Yo]=C.MAX_EXT)}const me={[Tu]:0,[Au]:1,[Cu]:768,[zl]:770,[Nu]:776,[Ru]:774,[Du]:772,[Lu]:769,[Ul]:771,[Iu]:775,[Pu]:773};function We(C,oe,V,se,re,Ce,je,Ve){if(C===_n){v===!0&&(fe(3042),v=!1);return}if(v===!1&&(Te(3042),v=!0),C!==Su){if(C!==M||Ve!==T){if((w!==hi||A!==hi)&&(r.blendEquation(32774),w=hi,A=hi),Ve)switch(C){case _i:r.blendFuncSeparate(1,771,1,771);break;case Wo:r.blendFunc(1,1);break;case $o:r.blendFuncSeparate(0,769,0,1);break;case qo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case _i:r.blendFuncSeparate(770,771,1,771);break;case Wo:r.blendFunc(770,1);break;case $o:r.blendFuncSeparate(0,769,0,1);break;case qo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,S=null,L=null,g=null,M=C,T=Ve}return}re=re||oe,Ce=Ce||V,je=je||se,(oe!==w||re!==A)&&(r.blendEquationSeparate(be[oe],be[re]),w=oe,A=re),(V!==y||se!==S||Ce!==L||je!==g)&&(r.blendFuncSeparate(me[V],me[se],me[Ce],me[je]),y=V,S=se,L=Ce,g=je),M=C,T=null}function tt(C,oe){C.side===xi?fe(2884):Te(2884);let V=C.side===Dt;oe&&(V=!V),Ye(V),C.blending===_i&&C.transparent===!1?We(_n):We(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const se=C.stencilWrite;c.setTest(se),se&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Te(32926):fe(32926)}function Ye(C){N!==C&&(C?r.frontFace(2304):r.frontFace(2305),N=C)}function ct(C){C!==xu?(Te(2884),C!==D&&(C===Ho?r.cullFace(1029):C===bu?r.cullFace(1028):r.cullFace(1032))):fe(2884),D=C}function $e(C){C!==ee&&(z&&r.lineWidth(C),ee=C)}function Ne(C,oe,V){C?(Te(32823),(j!==oe||P!==V)&&(r.polygonOffset(oe,V),j=oe,P=V)):fe(32823)}function Ze(C){C?Te(3089):fe(3089)}function nt(C){C===void 0&&(C=33984+X-1),F!==C&&(r.activeTexture(C),F=C)}function E(C,oe){F===null&&nt();let V=G[F];V===void 0&&(V={type:void 0,texture:void 0},G[F]=V),(V.type!==C||V.texture!==oe)&&(r.bindTexture(C,oe||H[C]),V.type=C,V.texture=oe)}function x(){const C=G[F];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function B(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(C){Z.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function ue(C){ae.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),ae.copy(C))}function ye(C,oe){let V=f.get(oe);V===void 0&&(V=new WeakMap,f.set(oe,V));let se=V.get(C);se===void 0&&(se=r.getUniformBlockIndex(oe,C.name),V.set(C,se))}function Pe(C,oe){const se=f.get(oe).get(C);u.get(C)!==se&&(r.uniformBlockBinding(oe,se,C.__bindingPointIndex),u.set(C,se))}function ke(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},F=null,G={},m={},_=new WeakMap,p=[],h=null,v=!1,M=null,w=null,y=null,S=null,A=null,L=null,g=null,T=!1,N=null,D=null,ee=null,j=null,P=null,Z.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:fe,bindFramebuffer:ge,drawBuffers:le,useProgram:De,setBlending:We,setMaterial:tt,setFlipSided:Ye,setCullFace:ct,setLineWidth:$e,setPolygonOffset:Ne,setScissorTest:Ze,activeTexture:nt,bindTexture:E,unbindTexture:x,compressedTexImage2D:k,texImage2D:de,texImage3D:ce,updateUBOMapping:ye,uniformBlockBinding:Pe,texStorage2D:_e,texStorage3D:B,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:ie,scissor:he,viewport:ue,reset:ke}}function og(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,x){return v?new OffscreenCanvas(E,x):Gr("canvas")}function w(E,x,k,J){let te=1;if((E.width>J||E.height>J)&&(te=J/Math.max(E.width,E.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ie=x?ho:Math.floor,_e=ie(te*E.width),B=ie(te*E.height);p===void 0&&(p=M(_e,B));const de=k?M(_e,B):p;return de.width=_e,de.height=B,de.getContext("2d").drawImage(E,0,0,_e,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+B+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return ya(E.width)&&ya(E.height)}function S(E){return o?!1:E.wrapS!==Lt||E.wrapT!==Lt||E.minFilter!==lt&&E.minFilter!==xt}function A(E,x){return E.generateMipmaps&&x&&E.minFilter!==lt&&E.minFilter!==xt}function L(E){r.generateMipmap(E)}function g(E,x,k,J,te=!1){if(o===!1)return x;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=x;return x===6403&&(k===5126&&(ie=33326),k===5131&&(ie=33325),k===5121&&(ie=33321)),x===33319&&(k===5126&&(ie=33328),k===5131&&(ie=33327),k===5121&&(ie=33323)),x===6408&&(k===5126&&(ie=34836),k===5131&&(ie=34842),k===5121&&(ie=J===Be&&te===!1?35907:32856),k===32819&&(ie=32854),k===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function T(E,x,k){return A(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==lt&&E.minFilter!==xt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function N(E){return E===lt||E===jo||E===Ko?9728:9729}function D(E){const x=E.target;x.removeEventListener("dispose",D),j(x),x.isVideoTexture&&_.delete(x)}function ee(E){const x=E.target;x.removeEventListener("dispose",ee),X(x)}function j(E){const x=n.get(E);if(x.__webglInit===void 0)return;const k=E.source,J=h.get(k);if(J){const te=J[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(E),Object.keys(J).length===0&&h.delete(k)}n.remove(E)}function P(E){const x=n.get(E);r.deleteTexture(x.__webglTexture);const k=E.source,J=h.get(k);delete J[x.__cacheKey],a.memory.textures--}function X(E){const x=E.texture,k=n.get(E),J=n.get(x);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,ie=x.length;te<ie;te++){const _e=n.get(x[te]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(x[te])}n.remove(x),n.remove(E)}let z=0;function W(){z=0}function q(){const E=z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),z+=1,E}function F(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.encoding),x.join()}function G(E,x){const k=n.get(E);if(E.isVideoTexture&&Ze(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,E,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,k.__webglTexture)}function Q(E,x){const k=n.get(E);if(E.version>0&&k.__version!==E.version){fe(k,E,x);return}t.activeTexture(33984+x),t.bindTexture(35866,k.__webglTexture)}function K(E,x){const k=n.get(E);if(E.version>0&&k.__version!==E.version){fe(k,E,x);return}t.activeTexture(33984+x),t.bindTexture(32879,k.__webglTexture)}function Z(E,x){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ge(k,E,x);return}t.activeTexture(33984+x),t.bindTexture(34067,k.__webglTexture)}const ae={[lo]:10497,[Lt]:33071,[co]:33648},pe={[lt]:9728,[jo]:9984,[Ko]:9986,[xt]:9729,[ju]:9985,[jr]:9987};function H(E,x,k){if(k?(r.texParameteri(E,10242,ae[x.wrapS]),r.texParameteri(E,10243,ae[x.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,ae[x.wrapR]),r.texParameteri(E,10240,pe[x.magFilter]),r.texParameteri(E,10241,pe[x.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(x.wrapS!==Lt||x.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,N(x.magFilter)),r.texParameteri(E,10241,N(x.minFilter)),x.minFilter!==lt&&x.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(x.type===In&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Te(E,x){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D));const J=x.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const ie=F(x);if(ie!==E.__cacheKey){te[ie]===void 0&&(te[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[ie].usedTimes++;const _e=te[E.__cacheKey];_e!==void 0&&(te[E.__cacheKey].usedTimes--,_e.usedTimes===0&&P(x)),E.__cacheKey=ie,E.__webglTexture=te[ie].texture}return k}function fe(E,x,k){let J=3553;x.isDataArrayTexture&&(J=35866),x.isData3DTexture&&(J=32879);const te=Te(E,x),ie=x.source;if(t.activeTexture(33984+k),t.bindTexture(J,E.__webglTexture),ie.version!==ie.__currentVersion||te===!0){r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const _e=S(x)&&y(x.image)===!1;let B=w(x.image,_e,!1,u);B=nt(x,B);const de=y(B)||o,ce=s.convert(x.format,x.encoding);let he=s.convert(x.type),ue=g(x.internalFormat,ce,he,x.encoding,x.isVideoTexture);H(J,x,de);let ye;const Pe=x.mipmaps,ke=o&&x.isVideoTexture!==!0,C=ie.__currentVersion===void 0||te===!0,oe=T(x,B,de);if(x.isDepthTexture)ue=6402,o?x.type===In?ue=36012:x.type===Rn?ue=33190:x.type===vi?ue=35056:ue=33189:x.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===On&&ue===6402&&x.type!==Vl&&x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Rn,he=s.convert(x.type)),x.format===Mi&&ue===6402&&(ue=34041,x.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=vi,he=s.convert(x.type))),C&&(ke?t.texStorage2D(3553,1,ue,B.width,B.height):t.texImage2D(3553,0,ue,B.width,B.height,0,ce,he,null));else if(x.isDataTexture)if(Pe.length>0&&de){ke&&C&&t.texStorage2D(3553,oe,ue,Pe[0].width,Pe[0].height);for(let V=0,se=Pe.length;V<se;V++)ye=Pe[V],ke?t.texSubImage2D(3553,V,0,0,ye.width,ye.height,ce,he,ye.data):t.texImage2D(3553,V,ue,ye.width,ye.height,0,ce,he,ye.data);x.generateMipmaps=!1}else ke?(C&&t.texStorage2D(3553,oe,ue,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,ce,he,B.data)):t.texImage2D(3553,0,ue,B.width,B.height,0,ce,he,B.data);else if(x.isCompressedTexture){ke&&C&&t.texStorage2D(3553,oe,ue,Pe[0].width,Pe[0].height);for(let V=0,se=Pe.length;V<se;V++)ye=Pe[V],x.format!==zt?ce!==null?ke?t.compressedTexSubImage2D(3553,V,0,0,ye.width,ye.height,ce,ye.data):t.compressedTexImage2D(3553,V,ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,V,0,0,ye.width,ye.height,ce,he,ye.data):t.texImage2D(3553,V,ue,ye.width,ye.height,0,ce,he,ye.data)}else if(x.isDataArrayTexture)ke?(C&&t.texStorage3D(35866,oe,ue,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,ce,he,B.data)):t.texImage3D(35866,0,ue,B.width,B.height,B.depth,0,ce,he,B.data);else if(x.isData3DTexture)ke?(C&&t.texStorage3D(32879,oe,ue,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,ce,he,B.data)):t.texImage3D(32879,0,ue,B.width,B.height,B.depth,0,ce,he,B.data);else if(x.isFramebufferTexture){if(C)if(ke)t.texStorage2D(3553,oe,ue,B.width,B.height);else{let V=B.width,se=B.height;for(let re=0;re<oe;re++)t.texImage2D(3553,re,ue,V,se,0,ce,he,null),V>>=1,se>>=1}}else if(Pe.length>0&&de){ke&&C&&t.texStorage2D(3553,oe,ue,Pe[0].width,Pe[0].height);for(let V=0,se=Pe.length;V<se;V++)ye=Pe[V],ke?t.texSubImage2D(3553,V,0,0,ce,he,ye):t.texImage2D(3553,V,ue,ce,he,ye);x.generateMipmaps=!1}else ke?(C&&t.texStorage2D(3553,oe,ue,B.width,B.height),t.texSubImage2D(3553,0,0,0,ce,he,B)):t.texImage2D(3553,0,ue,ce,he,B);A(x,de)&&L(J),ie.__currentVersion=ie.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ge(E,x,k){if(x.image.length!==6)return;const J=Te(E,x),te=x.source;if(t.activeTexture(33984+k),t.bindTexture(34067,E.__webglTexture),te.version!==te.__currentVersion||J===!0){r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const ie=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,B=[];for(let V=0;V<6;V++)!ie&&!_e?B[V]=w(x.image[V],!1,!0,c):B[V]=_e?x.image[V].image:x.image[V],B[V]=nt(x,B[V]);const de=B[0],ce=y(de)||o,he=s.convert(x.format,x.encoding),ue=s.convert(x.type),ye=g(x.internalFormat,he,ue,x.encoding),Pe=o&&x.isVideoTexture!==!0,ke=te.__currentVersion===void 0||J===!0;let C=T(x,de,ce);H(34067,x,ce);let oe;if(ie){Pe&&ke&&t.texStorage2D(34067,C,ye,de.width,de.height);for(let V=0;V<6;V++){oe=B[V].mipmaps;for(let se=0;se<oe.length;se++){const re=oe[se];x.format!==zt?he!==null?Pe?t.compressedTexSubImage2D(34069+V,se,0,0,re.width,re.height,he,re.data):t.compressedTexImage2D(34069+V,se,ye,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+V,se,0,0,re.width,re.height,he,ue,re.data):t.texImage2D(34069+V,se,ye,re.width,re.height,0,he,ue,re.data)}}}else{oe=x.mipmaps,Pe&&ke&&(oe.length>0&&C++,t.texStorage2D(34067,C,ye,B[0].width,B[0].height));for(let V=0;V<6;V++)if(_e){Pe?t.texSubImage2D(34069+V,0,0,0,B[V].width,B[V].height,he,ue,B[V].data):t.texImage2D(34069+V,0,ye,B[V].width,B[V].height,0,he,ue,B[V].data);for(let se=0;se<oe.length;se++){const Ce=oe[se].image[V].image;Pe?t.texSubImage2D(34069+V,se+1,0,0,Ce.width,Ce.height,he,ue,Ce.data):t.texImage2D(34069+V,se+1,ye,Ce.width,Ce.height,0,he,ue,Ce.data)}}else{Pe?t.texSubImage2D(34069+V,0,0,0,he,ue,B[V]):t.texImage2D(34069+V,0,ye,he,ue,B[V]);for(let se=0;se<oe.length;se++){const re=oe[se];Pe?t.texSubImage2D(34069+V,se+1,0,0,he,ue,re.image[V]):t.texImage2D(34069+V,se+1,ye,he,ue,re.image[V])}}}A(x,ce)&&L(34067),te.__currentVersion=te.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function le(E,x,k,J,te){const ie=s.convert(k.format,k.encoding),_e=s.convert(k.type),B=g(k.internalFormat,ie,_e,k.encoding);n.get(x).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,B,x.width,x.height,x.depth,0,ie,_e,null):t.texImage2D(te,0,B,x.width,x.height,0,ie,_e,null)),t.bindFramebuffer(36160,E),Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,J,te,n.get(k).__webglTexture,0,$e(x)):r.framebufferTexture2D(36160,J,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(E,x,k){if(r.bindRenderbuffer(36161,E),x.depthBuffer&&!x.stencilBuffer){let J=33189;if(k||Ne(x)){const te=x.depthTexture;te&&te.isDepthTexture&&(te.type===In?J=36012:te.type===Rn&&(J=33190));const ie=$e(x);Ne(x)?d.renderbufferStorageMultisampleEXT(36161,ie,J,x.width,x.height):r.renderbufferStorageMultisample(36161,ie,J,x.width,x.height)}else r.renderbufferStorage(36161,J,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(x.depthBuffer&&x.stencilBuffer){const J=$e(x);k&&Ne(x)===!1?r.renderbufferStorageMultisample(36161,J,35056,x.width,x.height):Ne(x)?d.renderbufferStorageMultisampleEXT(36161,J,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0;te<J.length;te++){const ie=J[te],_e=s.convert(ie.format,ie.encoding),B=s.convert(ie.type),de=g(ie.internalFormat,_e,B,ie.encoding),ce=$e(x);k&&Ne(x)===!1?r.renderbufferStorageMultisample(36161,ce,de,x.width,x.height):Ne(x)?d.renderbufferStorageMultisampleEXT(36161,ce,de,x.width,x.height):r.renderbufferStorage(36161,de,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function be(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const J=n.get(x.depthTexture).__webglTexture,te=$e(x);if(x.depthTexture.format===On)Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,te):r.framebufferTexture2D(36160,36096,3553,J,0);else if(x.depthTexture.format===Mi)Ne(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,te):r.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function me(E){const x=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(x.__webglFramebuffer,E)}else if(k){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=r.createRenderbuffer(),De(x.__webglDepthbuffer[J],E,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),De(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function We(E,x,k){const J=n.get(E);x!==void 0&&le(J.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&me(E)}function tt(E){const x=E.texture,k=n.get(E),J=n.get(x);E.addEventListener("dispose",ee),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=x.version,a.memory.textures++);const te=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,_e=y(E)||o;if(te){k.__webglFramebuffer=[];for(let B=0;B<6;B++)k.__webglFramebuffer[B]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),ie)if(i.drawBuffers){const B=E.texture;for(let de=0,ce=B.length;de<ce;de++){const he=n.get(B[de]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Ne(E)===!1){const B=ie?x:[x];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let de=0;de<B.length;de++){const ce=B[de];k.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[de]);const he=s.convert(ce.format,ce.encoding),ue=s.convert(ce.type),ye=g(ce.internalFormat,he,ue,ce.encoding),Pe=$e(E);r.renderbufferStorageMultisample(36161,Pe,ye,E.width,E.height),r.framebufferRenderbuffer(36160,36064+de,36161,k.__webglColorRenderbuffer[de])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),De(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,J.__webglTexture),H(34067,x,_e);for(let B=0;B<6;B++)le(k.__webglFramebuffer[B],E,x,36064,34069+B);A(x,_e)&&L(34067),t.unbindTexture()}else if(ie){const B=E.texture;for(let de=0,ce=B.length;de<ce;de++){const he=B[de],ue=n.get(he);t.bindTexture(3553,ue.__webglTexture),H(3553,he,_e),le(k.__webglFramebuffer,E,he,36064+de,3553),A(he,_e)&&L(3553)}t.unbindTexture()}else{let B=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?B=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(B,J.__webglTexture),H(B,x,_e),le(k.__webglFramebuffer,E,x,36064,B),A(x,_e)&&L(B),t.unbindTexture()}E.depthBuffer&&me(E)}function Ye(E){const x=y(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,te=k.length;J<te;J++){const ie=k[J];if(A(ie,x)){const _e=E.isWebGLCubeRenderTarget?34067:3553,B=n.get(ie).__webglTexture;t.bindTexture(_e,B),L(_e),t.unbindTexture()}}}function ct(E){if(o&&E.samples>0&&Ne(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,J=E.height;let te=16384;const ie=[],_e=E.stencilBuffer?33306:36096,B=n.get(E),de=E.isWebGLMultipleRenderTargets===!0;if(de)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,B.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,B.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){ie.push(36064+ce),E.depthBuffer&&ie.push(_e);const he=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(he===!1&&(E.depthBuffer&&(te|=256),E.stencilBuffer&&(te|=1024)),de&&r.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[ce]),he===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),de){const ue=n.get(x[ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ue,0)}r.blitFramebuffer(0,0,k,J,0,0,k,J,te,9728),m&&r.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),de)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,B.__webglColorRenderbuffer[ce]);const he=n.get(x[ce]).__webglTexture;t.bindFramebuffer(36160,B.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,he,0)}t.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function $e(E){return Math.min(f,E.samples)}function Ne(E){const x=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ze(E){const x=a.render.frame;_.get(E)!==x&&(_.set(E,x),E.update())}function nt(E,x){const k=E.encoding,J=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===uo||k!==kn&&(k===Be?o===!1?e.has("EXT_sRGB")===!0&&J===zt?(E.format=uo,E.minFilter=xt,E.generateMipmaps=!1):x=Wl.sRGBToLinear(x):(J!==zt||te!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),x}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=We,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ne}function ag(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Bn)return 5121;if(s===Qu)return 32819;if(s===eh)return 32820;if(s===Ku)return 5120;if(s===Zu)return 5122;if(s===Vl)return 5123;if(s===Ju)return 5124;if(s===Rn)return 5125;if(s===In)return 5126;if(s===Ji)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===th)return 6406;if(s===zt)return 6408;if(s===ih)return 6409;if(s===rh)return 6410;if(s===On)return 6402;if(s===Mi)return 34041;if(s===sh)return 6403;if(s===nh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===uo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===oh)return 36244;if(s===ah)return 33319;if(s===lh)return 33320;if(s===ch)return 36249;if(s===ds||s===ps||s===ms||s===gs)if(a===Be)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ds)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ds)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ps)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ms)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zo||s===Jo||s===Qo||s===ea)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Zo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ea)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ta||s===na)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ta)return a===Be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===na)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ia||s===ra||s===sa||s===oa||s===aa||s===la||s===ca||s===ua||s===ha||s===fa||s===da||s===pa||s===ma||s===ga)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ia)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ra)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sa)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oa)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===aa)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===la)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ca)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ua)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ha)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fa)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===da)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pa)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ma)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ga)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_a)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===_a)return a===Be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===vi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class lg extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dr extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cg={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const M=new Dr;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[p.jointName]=M,c.add(M)}const v=c.joints[p.jointName];h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=h.radius),v.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class ug extends Pt{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:On,u!==On&&u!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===On&&(n=Rn),n===void 0&&u===Mi&&(n=vi),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}class hg extends Ri{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const _=t.getContextAttributes();let p=null,h=null;const v=[],M=[],w=new Ct;w.layers.enable(1),w.viewport=new Xe;const y=new Ct;y.layers.enable(2),y.viewport=new Xe;const S=[w,y],A=new lg;A.layers.enable(1),A.layers.enable(2);let L=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let G=v[F];return G===void 0&&(G=new $s,v[F]=G),G.getTargetRaySpace()},this.getControllerGrip=function(F){let G=v[F];return G===void 0&&(G=new $s,v[F]=G),G.getGripSpace()},this.getHand=function(F){let G=v[F];return G===void 0&&(G=new $s,v[F]=G),G.getHandSpace()};function T(F){const G=M.indexOf(F.inputSource);if(G===-1)return;const Q=v[G];Q!==void 0&&Q.dispatchEvent({type:F.type,data:F.inputSource})}function N(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",D);for(let F=0;F<v.length;F++){const G=M[F];G!==null&&(M[F]=null,v[F].disconnect(G))}L=null,g=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,h=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",N),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:d}),h=new Vn(d.framebufferWidth,d.framebufferHeight,{format:zt,type:Bn,encoding:e.outputEncoding})}else{let G=null,Q=null,K=null;_.depth&&(K=_.stencil?35056:33190,G=_.stencil?Mi:On,Q=_.stencil?vi:Rn);const Z={colorFormat:32856,depthFormat:K,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Z),i.updateRenderState({layers:[f]}),h=new Vn(f.textureWidth,f.textureHeight,{format:zt,type:Bn,depthTexture:new ug(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ae=e.properties.get(h);ae.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(F){for(let G=0;G<F.removed.length;G++){const Q=F.removed[G],K=M.indexOf(Q);K>=0&&(M[K]=null,v[K].dispatchEvent({type:"disconnected",data:Q}))}for(let G=0;G<F.added.length;G++){const Q=F.added[G];let K=M.indexOf(Q);if(K===-1){for(let ae=0;ae<v.length;ae++)if(ae>=M.length){M.push(Q),K=ae;break}else if(M[ae]===null){M[ae]=Q,K=ae;break}if(K===-1)break}const Z=v[K];Z&&Z.dispatchEvent({type:"connected",data:Q})}}const ee=new I,j=new I;function P(F,G,Q){ee.setFromMatrixPosition(G.matrixWorld),j.setFromMatrixPosition(Q.matrixWorld);const K=ee.distanceTo(j),Z=G.projectionMatrix.elements,ae=Q.projectionMatrix.elements,pe=Z[14]/(Z[10]-1),H=Z[14]/(Z[10]+1),Te=(Z[9]+1)/Z[5],fe=(Z[9]-1)/Z[5],ge=(Z[8]-1)/Z[0],le=(ae[8]+1)/ae[0],De=pe*ge,be=pe*le,me=K/(-ge+le),We=me*-ge;G.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(We),F.translateZ(me),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const tt=pe+me,Ye=H+me,ct=De-We,$e=be+(K-We),Ne=Te*H/Ye*tt,Ze=fe*H/Ye*tt;F.projectionMatrix.makePerspective(ct,$e,Ne,Ze,tt,Ye)}function X(F,G){G===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(G.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;A.near=y.near=w.near=F.near,A.far=y.far=w.far=F.far,(L!==A.near||g!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,g=A.far);const G=F.parent,Q=A.cameras;X(A,G);for(let Z=0;Z<Q.length;Z++)X(Q[Z],G);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.position.copy(A.position),F.quaternion.copy(A.quaternion),F.scale.copy(A.scale),F.matrix.copy(A.matrix),F.matrixWorld.copy(A.matrixWorld);const K=F.children;for(let Z=0,ae=K.length;Z<ae;Z++)K[Z].updateMatrixWorld(!0);Q.length===2?P(A,w,y):A.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(F){f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)};let z=null;function W(F,G){if(c=G.getViewerPose(l||a),m=G,c!==null){const Q=c.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let K=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,K=!0);for(let Z=0;Z<Q.length;Z++){const ae=Q[Z];let pe=null;if(d!==null)pe=d.getViewport(ae);else{const Te=u.getViewSubImage(f,ae);pe=Te.viewport,Z===0&&(e.setRenderTargetTextures(h,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(h))}let H=S[Z];H===void 0&&(H=new Ct,H.layers.enable(Z),H.viewport=new Xe,S[Z]=H),H.matrix.fromArray(ae.transform.matrix),H.projectionMatrix.fromArray(ae.projectionMatrix),H.viewport.set(pe.x,pe.y,pe.width,pe.height),Z===0&&A.matrix.copy(H.matrix),K===!0&&A.cameras.push(H)}}for(let Q=0;Q<v.length;Q++){const K=M[Q],Z=v[Q];K!==null&&Z!==void 0&&Z.update(K,G,l||a)}z&&z(F,G),m=null}const q=new ec;q.setAnimationLoop(W),this.setAnimationLoop=function(F){z=F},this.dispose=function(){}}}function fg(r,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,v,M,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),c(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,w)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),_(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?o(p,h,v,M):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Dt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Dt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let M;h.map?M=h.map:h.specularMap?M=h.specularMap:h.displacementMap?M=h.displacementMap:h.normalMap?M=h.normalMap:h.bumpMap?M=h.bumpMap:h.roughnessMap?M=h.roughnessMap:h.metalnessMap?M=h.metalnessMap:h.alphaMap?M=h.alphaMap:h.emissiveMap?M=h.emissiveMap:h.clearcoatMap?M=h.clearcoatMap:h.clearcoatNormalMap?M=h.clearcoatNormalMap:h.clearcoatRoughnessMap?M=h.clearcoatRoughnessMap:h.iridescenceMap?M=h.iridescenceMap:h.iridescenceThicknessMap?M=h.iridescenceThicknessMap:h.specularIntensityMap?M=h.specularIntensityMap:h.specularColorMap?M=h.specularColorMap:h.transmissionMap?M=h.transmissionMap:h.thicknessMap?M=h.thicknessMap:h.sheenColorMap?M=h.sheenColorMap:h.sheenRoughnessMap&&(M=h.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let w;h.aoMap?w=h.aoMap:h.lightMap&&(w=h.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function o(p,h,v,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*v,p.scale.value=M*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let w;h.map?w=h.map:h.alphaMap&&(w=h.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,v){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Dt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function dg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(M,w){const y=w.program;n.uniformBlockBinding(M,y)}function c(M,w){let y=i[M.id];y===void 0&&(_(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",h));const S=w.program;n.updateUBOMapping(M,S);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){const w=f();M.__bindingPointIndex=w;const y=r.createBuffer(),S=M.__size,A=M.usage;return r.bindBuffer(35345,y),r.bufferData(35345,S,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,w,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=i[M.id],y=M.uniforms,S=M.__cache;r.bindBuffer(35345,w);for(let A=0,L=y.length;A<L;A++){const g=y[A];if(m(g,A,S)===!0){const T=g.value,N=g.__offset;typeof T=="number"?(g.__data[0]=T,r.bufferSubData(35345,N,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):T.toArray(g.__data),r.bufferSubData(35345,N,g.__data))}}r.bindBuffer(35345,null)}function m(M,w,y){const S=M.value;if(y[w]===void 0)return typeof S=="number"?y[w]=S:y[w]=S.clone(),!0;if(typeof S=="number"){if(y[w]!==S)return y[w]=S,!0}else{const A=y[w];if(A.equals(S)===!1)return A.copy(S),!0}return!1}function _(M){const w=M.uniforms;let y=0;const S=16;let A=0;for(let L=0,g=w.length;L<g;L++){const T=w[L],N=p(T);if(T.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,L>0){A=y%S;const D=S-A;A!==0&&D-N.boundary<0&&(y+=S-A,T.__offset=y)}y+=N.storage}return A=y%S,A>0&&(y+=S-A),M.__size=y,M.__cache={},this}function p(M){const w=M.value,y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function h(M){const w=M.target;w.removeEventListener("dispose",h);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function v(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:v}}function pg(){const r=Gr("canvas");return r.style.display="block",r}function ac(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:pg(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kn,this.physicallyCorrectLights=!1,this.toneMapping=Qt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,v=0,M=0,w=null,y=-1,S=null;const A=new Xe,L=new Xe;let g=null,T=e.width,N=e.height,D=1,ee=null,j=null;const P=new Xe(0,0,T,N),X=new Xe(0,0,T,N);let z=!1;const W=new Ql;let q=!1,F=!1,G=null;const Q=new Je,K=new Ie,Z=new I,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return w===null?D:1}let H=t;function Te(b,R){for(let U=0;U<b.length;U++){const O=b[U],$=e.getContext(O,R);if($!==null)return $}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bo}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",ke,!1),H===null){const R=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&R.shift(),H=Te(R,b),H===null)throw Te(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let fe,ge,le,De,be,me,We,tt,Ye,ct,$e,Ne,Ze,nt,E,x,k,J,te,ie,_e,B,de,ce;function he(){fe=new Ep(H),ge=new vp(H,fe,r),fe.init(ge),B=new ag(H,fe,ge),le=new sg(H,fe,ge),De=new Ap,be=new $m,me=new og(H,fe,le,be,ge,B,De),We=new bp(p),tt=new Sp(p),Ye=new Uh(H,ge),de=new gp(H,fe,Ye,ge),ct=new wp(H,Ye,De,de),$e=new Pp(H,ct,Ye,De),te=new Dp(H,ge,me),x=new xp(be),Ne=new Wm(p,We,tt,fe,ge,de,x),Ze=new fg(p,be),nt=new Xm,E=new Qm(fe,ge),J=new mp(p,We,le,$e,u,a),k=new rg(p,$e,ge),ce=new dg(H,De,ge,le),ie=new _p(H,fe,De,ge),_e=new Tp(H,fe,De,ge),De.programs=Ne.programs,p.capabilities=ge,p.extensions=fe,p.properties=be,p.renderLists=nt,p.shadowMap=k,p.state=le,p.info=De}he();const ue=new hg(p,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(b){b!==void 0&&(D=b,this.setSize(T,N,!1))},this.getSize=function(b){return b.set(T,N)},this.setSize=function(b,R,U){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,N=R,e.width=Math.floor(b*D),e.height=Math.floor(R*D),U!==!1&&(e.style.width=b+"px",e.style.height=R+"px"),this.setViewport(0,0,b,R)},this.getDrawingBufferSize=function(b){return b.set(T*D,N*D).floor()},this.setDrawingBufferSize=function(b,R,U){T=b,N=R,D=U,e.width=Math.floor(b*U),e.height=Math.floor(R*U),this.setViewport(0,0,b,R)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,R,U,O){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,R,U,O),le.viewport(A.copy(P).multiplyScalar(D).floor())},this.getScissor=function(b){return b.copy(X)},this.setScissor=function(b,R,U,O){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,R,U,O),le.scissor(L.copy(X).multiplyScalar(D).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(b){le.setScissorTest(z=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(b=!0,R=!0,U=!0){let O=0;b&&(O|=16384),R&&(O|=256),U&&(O|=1024),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),nt.dispose(),E.dispose(),be.dispose(),We.dispose(),tt.dispose(),$e.dispose(),de.dispose(),ce.dispose(),Ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ce),ue.removeEventListener("sessionend",je),G&&(G.dispose(),G=null),Ve.stop()};function ye(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const b=De.autoReset,R=k.enabled,U=k.autoUpdate,O=k.needsUpdate,$=k.type;he(),De.autoReset=b,k.enabled=R,k.autoUpdate=U,k.needsUpdate=O,k.type=$}function ke(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function C(b){const R=b.target;R.removeEventListener("dispose",C),oe(R)}function oe(b){V(b),be.remove(b)}function V(b){const R=be.get(b).programs;R!==void 0&&(R.forEach(function(U){Ne.releaseProgram(U)}),b.isShaderMaterial&&Ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,R,U,O,$,ve){R===null&&(R=ae);const xe=$.isMesh&&$.matrixWorld.determinant()<0,Se=pu(b,R,U,O,$);le.setMaterial(O,xe);let Me=U.index;const Oe=U.attributes.position;if(Me===null){if(Oe===void 0||Oe.count===0)return}else if(Me.count===0)return;let Ae=1;O.wireframe===!0&&(Me=ct.getWireframeAttribute(U),Ae=2),de.setup($,O,Se,U,Me);let Le,Ue=ie;Me!==null&&(Le=Ye.get(Me),Ue=_e,Ue.setIndex(Le));const wn=Me!==null?Me.count:Oe.count,qn=U.drawRange.start*Ae,Xn=U.drawRange.count*Ae,Ot=ve!==null?ve.start*Ae:0,Re=ve!==null?ve.count*Ae:1/0,Yn=Math.max(qn,Ot),Ge=Math.min(wn,qn+Xn,Ot+Re)-1,_t=Math.max(0,Ge-Yn+1);if(_t!==0){if($.isMesh)O.wireframe===!0?(le.setLineWidth(O.wireframeLinewidth*pe()),Ue.setMode(1)):Ue.setMode(4);else if($.isLine){let an=O.linewidth;an===void 0&&(an=1),le.setLineWidth(an*pe()),$.isLineSegments?Ue.setMode(1):$.isLineLoop?Ue.setMode(2):Ue.setMode(3)}else $.isPoints?Ue.setMode(0):$.isSprite&&Ue.setMode(4);if($.isInstancedMesh)Ue.renderInstances(Yn,_t,$.count);else if(U.isInstancedBufferGeometry){const an=Math.min(U.instanceCount,U._maxInstanceCount);Ue.renderInstances(Yn,_t,an)}else Ue.render(Yn,_t)}},this.compile=function(b,R){d=E.get(b),d.init(),_.push(d),b.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(p.physicallyCorrectLights),b.traverse(function(U){const O=U.material;if(O)if(Array.isArray(O))for(let $=0;$<O.length;$++){const ve=O[$];cs(ve,b,U)}else cs(O,b,U)}),_.pop(),d=null};let se=null;function re(b){se&&se(b)}function Ce(){Ve.stop()}function je(){Ve.start()}const Ve=new ec;Ve.setAnimationLoop(re),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(b){se=b,ue.setAnimationLoop(b),b===null?Ve.stop():Ve.start()},ue.addEventListener("sessionstart",Ce),ue.addEventListener("sessionend",je),this.render=function(b,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),R.parent===null&&R.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(R),R=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,R,w),d=E.get(b,_.length),d.init(),_.push(d),Q.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),W.setFromProjectionMatrix(Q),F=this.localClippingEnabled,q=x.init(this.clippingPlanes,F,R),f=nt.get(b,m.length),f.init(),m.push(f),on(b,R,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ee,j),q===!0&&x.beginShadows();const U=d.state.shadowsArray;if(k.render(U,b,R),q===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(f,b),d.setupLights(p.physicallyCorrectLights),R.isArrayCamera){const O=R.cameras;for(let $=0,ve=O.length;$<ve;$++){const xe=O[$];ze(f,b,xe,xe.viewport)}}else ze(f,b,R);w!==null&&(me.updateMultisampleRenderTarget(w),me.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(p,b,R),de.resetDefaultState(),y=-1,S=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function on(b,R,U,O){if(b.visible===!1)return;if(b.layers.test(R.layers)){if(b.isGroup)U=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(R);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){O&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const xe=$e.update(b),Se=b.material;Se.visible&&f.push(b,xe,Se,U,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==De.render.frame&&(b.skeleton.update(),b.skeleton.frame=De.render.frame),!b.frustumCulled||W.intersectsObject(b))){O&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const xe=$e.update(b),Se=b.material;if(Array.isArray(Se)){const Me=xe.groups;for(let Oe=0,Ae=Me.length;Oe<Ae;Oe++){const Le=Me[Oe],Ue=Se[Le.materialIndex];Ue&&Ue.visible&&f.push(b,xe,Ue,U,Z.z,Le)}}else Se.visible&&f.push(b,xe,Se,U,Z.z,null)}}const ve=b.children;for(let xe=0,Se=ve.length;xe<Se;xe++)on(ve[xe],R,U,O)}function ze(b,R,U,O){const $=b.opaque,ve=b.transmissive,xe=b.transparent;d.setupLightsView(U),ve.length>0&&Ht($,R,U),O&&le.viewport(A.copy(O)),$.length>0&&gt($,R,U),ve.length>0&&gt(ve,R,U),xe.length>0&&gt(xe,R,U),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ht(b,R,U){const O=ge.isWebGL2;G===null&&(G=new Vn(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Ji:Bn,minFilter:jr,samples:O&&s===!0?4:0})),p.getDrawingBufferSize(K),O?G.setSize(K.x,K.y):G.setSize(ho(K.x),ho(K.y));const $=p.getRenderTarget();p.setRenderTarget(G),p.clear();const ve=p.toneMapping;p.toneMapping=Qt,gt(b,R,U),p.toneMapping=ve,me.updateMultisampleRenderTarget(G),me.updateRenderTargetMipmap(G),p.setRenderTarget($)}function gt(b,R,U){const O=R.isScene===!0?R.overrideMaterial:null;for(let $=0,ve=b.length;$<ve;$++){const xe=b[$],Se=xe.object,Me=xe.geometry,Oe=O===null?xe.material:O,Ae=xe.group;Se.layers.test(U.layers)&&du(Se,R,U,Me,Oe,Ae)}}function du(b,R,U,O,$,ve){b.onBeforeRender(p,R,U,O,$,ve),b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(p,R,U,O,b,ve),$.transparent===!0&&$.side===xi?($.side=Dt,$.needsUpdate=!0,p.renderBufferDirect(U,R,O,$,b,ve),$.side=Zi,$.needsUpdate=!0,p.renderBufferDirect(U,R,O,$,b,ve),$.side=xi):p.renderBufferDirect(U,R,O,$,b,ve),b.onAfterRender(p,R,U,O,$,ve)}function cs(b,R,U){R.isScene!==!0&&(R=ae);const O=be.get(b),$=d.state.lights,ve=d.state.shadowsArray,xe=$.state.version,Se=Ne.getParameters(b,$.state,ve,R,U),Me=Ne.getProgramCacheKey(Se);let Oe=O.programs;O.environment=b.isMeshStandardMaterial?R.environment:null,O.fog=R.fog,O.envMap=(b.isMeshStandardMaterial?tt:We).get(b.envMap||O.environment),Oe===void 0&&(b.addEventListener("dispose",C),Oe=new Map,O.programs=Oe);let Ae=Oe.get(Me);if(Ae!==void 0){if(O.currentProgram===Ae&&O.lightsStateVersion===xe)return Vo(b,Se),Ae}else Se.uniforms=Ne.getUniforms(b),b.onBuild(U,Se,p),b.onBeforeCompile(Se,p),Ae=Ne.acquireProgram(Se,Me),Oe.set(Me,Ae),O.uniforms=Se.uniforms;const Le=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=x.uniform),Vo(b,Se),O.needsLights=gu(b),O.lightsStateVersion=xe,O.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotShadowMatrix.value=$.state.spotShadowMatrix,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ue=Ae.getUniforms(),wn=Br.seqWithValue(Ue.seq,Le);return O.currentProgram=Ae,O.uniformsList=wn,Ae}function Vo(b,R){const U=be.get(b);U.outputEncoding=R.outputEncoding,U.instancing=R.instancing,U.skinning=R.skinning,U.morphTargets=R.morphTargets,U.morphNormals=R.morphNormals,U.morphColors=R.morphColors,U.morphTargetsCount=R.morphTargetsCount,U.numClippingPlanes=R.numClippingPlanes,U.numIntersection=R.numClipIntersection,U.vertexAlphas=R.vertexAlphas,U.vertexTangents=R.vertexTangents,U.toneMapping=R.toneMapping}function pu(b,R,U,O,$){R.isScene!==!0&&(R=ae),me.resetTextureUnits();const ve=R.fog,xe=O.isMeshStandardMaterial?R.environment:null,Se=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:kn,Me=(O.isMeshStandardMaterial?tt:We).get(O.envMap||xe),Oe=O.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ae=!!O.normalMap&&!!U.attributes.tangent,Le=!!U.morphAttributes.position,Ue=!!U.morphAttributes.normal,wn=!!U.morphAttributes.color,qn=O.toneMapped?p.toneMapping:Qt,Xn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ot=Xn!==void 0?Xn.length:0,Re=be.get(O),Yn=d.state.lights;if(q===!0&&(F===!0||b!==S)){const ut=b===S&&O.id===y;x.setState(O,b,ut)}let Ge=!1;O.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Yn.state.version||Re.outputEncoding!==Se||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Me||O.fog===!0&&Re.fog!==ve||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==x.numPlanes||Re.numIntersection!==x.numIntersection)||Re.vertexAlphas!==Oe||Re.vertexTangents!==Ae||Re.morphTargets!==Le||Re.morphNormals!==Ue||Re.morphColors!==wn||Re.toneMapping!==qn||ge.isWebGL2===!0&&Re.morphTargetsCount!==Ot)&&(Ge=!0):(Ge=!0,Re.__version=O.version);let _t=Re.currentProgram;Ge===!0&&(_t=cs(O,R,$));let an=!1,Ui=!1,us=!1;const it=_t.getUniforms(),Bi=Re.uniforms;if(le.useProgram(_t.program)&&(an=!0,Ui=!0,us=!0),O.id!==y&&(y=O.id,Ui=!0),an||S!==b){if(it.setValue(H,"projectionMatrix",b.projectionMatrix),ge.logarithmicDepthBuffer&&it.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,Ui=!0,us=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const ut=it.map.cameraPosition;ut!==void 0&&ut.setValue(H,Z.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&it.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||$.isSkinnedMesh)&&it.setValue(H,"viewMatrix",b.matrixWorldInverse)}if($.isSkinnedMesh){it.setOptional(H,$,"bindMatrix"),it.setOptional(H,$,"bindMatrixInverse");const ut=$.skeleton;ut&&(ge.floatVertexTextures?(ut.boneTexture===null&&ut.computeBoneTexture(),it.setValue(H,"boneTexture",ut.boneTexture,me),it.setValue(H,"boneTextureSize",ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const hs=U.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0&&ge.isWebGL2===!0)&&te.update($,U,O,_t),(Ui||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,it.setValue(H,"receiveShadow",$.receiveShadow)),Ui&&(it.setValue(H,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&mu(Bi,us),ve&&O.fog===!0&&Ze.refreshFogUniforms(Bi,ve),Ze.refreshMaterialUniforms(Bi,O,D,N,G),Br.upload(H,Re.uniformsList,Bi,me)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Br.upload(H,Re.uniformsList,Bi,me),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&it.setValue(H,"center",$.center),it.setValue(H,"modelViewMatrix",$.modelViewMatrix),it.setValue(H,"normalMatrix",$.normalMatrix),it.setValue(H,"modelMatrix",$.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ut=O.uniformsGroups;for(let fs=0,_u=ut.length;fs<_u;fs++)if(ge.isWebGL2){const Go=ut[fs];ce.update(Go,_t),ce.bind(Go,_t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _t}function mu(b,R){b.ambientLightColor.needsUpdate=R,b.lightProbe.needsUpdate=R,b.directionalLights.needsUpdate=R,b.directionalLightShadows.needsUpdate=R,b.pointLights.needsUpdate=R,b.pointLightShadows.needsUpdate=R,b.spotLights.needsUpdate=R,b.spotLightShadows.needsUpdate=R,b.rectAreaLights.needsUpdate=R,b.hemisphereLights.needsUpdate=R}function gu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,R,U){be.get(b.texture).__webglTexture=R,be.get(b.depthTexture).__webglTexture=U;const O=be.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=U===void 0,O.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,R){const U=be.get(b);U.__webglFramebuffer=R,U.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(b,R=0,U=0){w=b,v=R,M=U;let O=!0;if(b){const Me=be.get(b);Me.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),O=!1):Me.__webglFramebuffer===void 0?me.setupRenderTarget(b):Me.__hasExternalTextures&&me.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture)}let $=null,ve=!1,xe=!1;if(b){const Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(xe=!0);const Oe=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?($=Oe[R],ve=!0):ge.isWebGL2&&b.samples>0&&me.useMultisampledRTT(b)===!1?$=be.get(b).__webglMultisampledFramebuffer:$=Oe,A.copy(b.viewport),L.copy(b.scissor),g=b.scissorTest}else A.copy(P).multiplyScalar(D).floor(),L.copy(X).multiplyScalar(D).floor(),g=z;if(le.bindFramebuffer(36160,$)&&ge.drawBuffers&&O&&le.drawBuffers(b,$),le.viewport(A),le.scissor(L),le.setScissorTest(g),ve){const Me=be.get(b.texture);H.framebufferTexture2D(36160,36064,34069+R,Me.__webglTexture,U)}else if(xe){const Me=be.get(b.texture),Oe=R||0;H.framebufferTextureLayer(36160,36064,Me.__webglTexture,U||0,Oe)}y=-1},this.readRenderTargetPixels=function(b,R,U,O,$,ve,xe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){le.bindFramebuffer(36160,Se);try{const Me=b.texture,Oe=Me.format,Ae=Me.type;if(Oe!==zt&&B.convert(Oe)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ae===Ji&&(fe.has("EXT_color_buffer_half_float")||ge.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Ae!==Bn&&B.convert(Ae)!==H.getParameter(35738)&&!(Ae===In&&(ge.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=b.width-O&&U>=0&&U<=b.height-$&&H.readPixels(R,U,O,$,B.convert(Oe),B.convert(Ae),ve)}finally{const Me=w!==null?be.get(w).__webglFramebuffer:null;le.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(b,R,U=0){const O=Math.pow(2,-U),$=Math.floor(R.image.width*O),ve=Math.floor(R.image.height*O);me.setTexture2D(R,0),H.copyTexSubImage2D(3553,U,0,0,b.x,b.y,$,ve),le.unbindTexture()},this.copyTextureToTexture=function(b,R,U,O=0){const $=R.image.width,ve=R.image.height,xe=B.convert(U.format),Se=B.convert(U.type);me.setTexture2D(U,0),H.pixelStorei(37440,U.flipY),H.pixelStorei(37441,U.premultiplyAlpha),H.pixelStorei(3317,U.unpackAlignment),R.isDataTexture?H.texSubImage2D(3553,O,b.x,b.y,$,ve,xe,Se,R.image.data):R.isCompressedTexture?H.compressedTexSubImage2D(3553,O,b.x,b.y,R.mipmaps[0].width,R.mipmaps[0].height,xe,R.mipmaps[0].data):H.texSubImage2D(3553,O,b.x,b.y,xe,Se,R.image),O===0&&U.generateMipmaps&&H.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(b,R,U,O,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=b.max.x-b.min.x+1,xe=b.max.y-b.min.y+1,Se=b.max.z-b.min.z+1,Me=B.convert(O.format),Oe=B.convert(O.type);let Ae;if(O.isData3DTexture)me.setTexture3D(O,0),Ae=32879;else if(O.isDataArrayTexture)me.setTexture2DArray(O,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,O.flipY),H.pixelStorei(37441,O.premultiplyAlpha),H.pixelStorei(3317,O.unpackAlignment);const Le=H.getParameter(3314),Ue=H.getParameter(32878),wn=H.getParameter(3316),qn=H.getParameter(3315),Xn=H.getParameter(32877),Ot=U.isCompressedTexture?U.mipmaps[0]:U.image;H.pixelStorei(3314,Ot.width),H.pixelStorei(32878,Ot.height),H.pixelStorei(3316,b.min.x),H.pixelStorei(3315,b.min.y),H.pixelStorei(32877,b.min.z),U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Ae,$,R.x,R.y,R.z,ve,xe,Se,Me,Oe,Ot.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ae,$,R.x,R.y,R.z,ve,xe,Se,Me,Ot.data)):H.texSubImage3D(Ae,$,R.x,R.y,R.z,ve,xe,Se,Me,Oe,Ot),H.pixelStorei(3314,Le),H.pixelStorei(32878,Ue),H.pixelStorei(3316,wn),H.pixelStorei(3315,qn),H.pixelStorei(32877,Xn),$===0&&O.generateMipmaps&&H.generateMipmap(Ae),le.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?me.setTextureCube(b,0):b.isData3DTexture?me.setTexture3D(b,0):b.isDataArrayTexture?me.setTexture2DArray(b,0):me.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){v=0,M=0,w=null,le.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class mg extends ac{}mg.prototype.isWebGL1Renderer=!0;class gg extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);const _g=`

#include <common>
uniform vec3 iResolution;
uniform float iTime;
uniform vec4 iMouse;
uniform vec2 vp;

// domain warping based on the master's notes at https://iquilezles.org/articles/warp

// NOISE ////


float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
               mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}

vec2 hash2( float n )
{
    return fract(sin(vec2(n,n+1.0))*vec2(13.5453123,31.1459123));
}





const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

float fbm( vec2 p )
{
    float f = 0.0;

    f += 0.500000*noise( p ); p = mtx*p*2.02;
    f += 0.250000*noise( p ); p = mtx*p*2.03;
    f += 0.125000*noise( p ); p = mtx*p*2.01;
    f += 0.062500*noise( p ); p = mtx*p*2.04;
    f += 0.031250*noise( p ); p = mtx*p*2.01;
    f += 0.015625*noise( p );

    return f/0.96875;
}

// -----------------------------------------------------------------------

float pattern(in vec2 p, in float t, in vec2 uv, out vec2 q, out vec2 r, out vec2 g)
{
	q = vec2(fbm(p), fbm(p + vec2(10, 1.3)));
    
    float s = dot(uv.x + 0.5, uv.y + 0.5);
    r = vec2(fbm(p + 4.0 * q + vec2(t) + vec2(1.7, 9.2)), fbm(p + 4.0 * q + vec2(t) + vec2(8.3, 2.8)));
    g = vec2(fbm(p + 2.0 * r + vec2(t * 20.0) + vec2(2, 6)), fbm(p + 2.0 * r + vec2(t * 10.0) + vec2(5, 3)));
    return fbm(p + 5.5 * g + vec2(-t * 7.0));
}

float sdCircle( vec2 p, float r )
{

    float displ = sin(100.0*p.x) * sin(100.0*p.y + iTime*0.5);
    // float ret = step(length(p) - r, 0.1); 
    // return ret + displ * 0.025;

    float mask = max(1.-((length(p) - r))*10.,0.); 
    return max(1.-(length(p) - r)*10.,0.) ;
    // return step(length(p) - r, 0.01);
}

float c = 1.;


vec2 c_pos = vec2(0.5);
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    
    // noise
    vec2 q, r, g;
    
    vec4 m = vec4(iMouse.xy / iResolution.x, 1, 1);
    
    c += (m.y - 0.5);
    
    
    float noise = pattern((fragCoord+c*vec2(0.0, 1.0)*500.)*0.0004, iTime * 0.001, uv,q, r, g);
    
    // base color based on main noise
    vec3 col = mix(vec3(0.131,0.400,0.279), vec3(0.220,0.050,0.700), smoothstep(0.0, 1.0, noise));
    
    // other lower-octave colors and mixes
    col = mix(col, vec3(0.050,0.011,0.55), dot(q, q) * 1.0);
    col = mix(col, vec3(0.325,0.011,0.020), 0.2*g.y*g.y);
    col = mix(col, vec3(0.039,0.185,0.121), smoothstep(0.0, .6, 0.6*r.g*r.g));
    col = mix(col, vec3(0.540,0.153,0.301), 0.1*g.x);
    
    // some dark outlines/contrast and different steps
    col = mix(col, vec3(0), smoothstep(0.3, 0.5, noise) * smoothstep(0.5, 0.3, noise));
    col = mix(col, vec3(0), smoothstep(0.7, 0.8, noise) * smoothstep(0.8, 0.7, noise));
    
    // // contrast
    col *= noise*1.8;
    
    // // vignette
    col *= 0.70 + 0.65 * sqrt(70.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y));
       
    
    vec2 dir = m.xy;
    
    
    // col = vec3(0.);

    // noise
    vec2 Q, R, G;
    
    float noise_v = pattern((fragCoord)*0.004, iTime * 0.007, uv, Q, R, G);
    
    // base color based on main noise
    vec3 col_v = mix(vec3(0.531,0.200,0.279), vec3(0.220,0.050,0.700), smoothstep(0.0, 1.0, noise_v));

    col_v = mix(col_v, vec3(0.050,0.011,0.55), dot(Q, Q) * 1.0);
    col_v = mix(col_v, vec3(0.325,0.011,0.020), 0.2*G.y*G.y);
    col_v = mix(col_v, vec3(0.039,0.185,0.121), smoothstep(0.0, .6, 0.6*R.g*R.g));
    col_v = mix(col_v, vec3(0.540,0.153,0.301), 0.1*G.x);
    
    // some dark outlines/contrast and different steps
    col_v = mix(col_v, vec3(0), smoothstep(0.3, 0.5, noise) * smoothstep(0.5, 0.3, noise));
    col_v = mix(col_v, vec3(0), smoothstep(0.7, 0.8, noise) * smoothstep(0.8, 0.7, noise));


    float d = sdCircle(uv - vp, 1.*(noise*1.)/(noise_v*10.));
    col_v =  d*0.916*col_v*(fbm(vec2(iTime, 0.))-2.);
    col += col_v;
    
    // Output to screen
    fragColor = vec4(col,1.0);
}

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }

`;let So;const lc=new tc(-1,1,1,-1,-1,1),cc=new gg,vg=new Zr(2,2),xg=_g,Yi={iTime:{value:0},iResolution:{value:new I},iMouse:{value:new Xe(0,0,0,0)},vp:{value:new Ie(0,0)}};let bg=new vn({fragmentShader:xg,uniforms:Yi});cc.add(new Jt(vg,bg));function uc(){const r=document.body.getBoundingClientRect().top;Yi.iMouse.value.y=r}document.body.onscroll=uc;uc();let Hr=new Ie(0,0);onmousemove=function(r){Hr.x=r.clientX/window.innerWidth,Hr.y=1-r.clientY/window.innerHeight};let Hi=new Ie(0,0);const hc=r=>{r*=.001,Yi.iTime.value=r,Yi.iResolution.value=new I(window.innerWidth,window.innerHeight,1),Hi.x-=(Hi.x-Hr.x)*.05,Hi.y-=(Hi.y-Hr.y)*.05,Yi.vp.value=Hi,So.render(cc,lc),requestAnimationFrame(hc)},fc=()=>{So.setSize(window.innerWidth,window.innerHeight),lc.updateProjectionMatrix()},yg=r=>{So=new ac({antialias:!0,canvas:r}),fc(),hc()};window.addEventListener("resize",fc);var rt="top",pt="bottom",mt="right",st="left",Qr="auto",Ni=[rt,pt,mt,st],Gn="start",Ei="end",dc="clippingParents",Eo="viewport",fi="popper",pc="reference",po=Ni.reduce(function(r,e){return r.concat([e+"-"+Gn,e+"-"+Ei])},[]),wo=[].concat(Ni,[Qr]).reduce(function(r,e){return r.concat([e,e+"-"+Gn,e+"-"+Ei])},[]),mc="beforeRead",gc="read",_c="afterRead",vc="beforeMain",xc="main",bc="afterMain",yc="beforeWrite",Mc="write",Sc="afterWrite",Ec=[mc,gc,_c,vc,xc,bc,yc,Mc,Sc];function Vt(r){return r?(r.nodeName||"").toLowerCase():null}function It(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var e=r.ownerDocument;return e&&e.defaultView||window}return r}function wi(r){var e=It(r).Element;return r instanceof e||r instanceof Element}function yt(r){var e=It(r).HTMLElement;return r instanceof e||r instanceof HTMLElement}function To(r){if(typeof ShadowRoot>"u")return!1;var e=It(r).ShadowRoot;return r instanceof e||r instanceof ShadowRoot}function Mg(r){var e=r.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},s=e.elements[t];!yt(s)||!Vt(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(a){var o=i[a];o===!1?s.removeAttribute(a):s.setAttribute(a,o===!0?"":o)}))})}function Sg(r){var e=r.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],s=e.attributes[n]||{},a=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),o=a.reduce(function(l,c){return l[c]="",l},{});!yt(i)||!Vt(i)||(Object.assign(i.style,o),Object.keys(s).forEach(function(l){i.removeAttribute(l)}))})}}const Ao={name:"applyStyles",enabled:!0,phase:"write",fn:Mg,effect:Sg,requires:["computeStyles"]};function Bt(r){return r.split("-")[0]}var Un=Math.max,Wr=Math.min,Ti=Math.round;function Ai(r,e){e===void 0&&(e=!1);var t=r.getBoundingClientRect(),n=1,i=1;if(yt(r)&&e){var s=r.offsetHeight,a=r.offsetWidth;a>0&&(n=Ti(t.width)/a||1),s>0&&(i=Ti(t.height)/s||1)}return{width:t.width/n,height:t.height/i,top:t.top/i,right:t.right/n,bottom:t.bottom/i,left:t.left/n,x:t.left/n,y:t.top/i}}function Co(r){var e=Ai(r),t=r.offsetWidth,n=r.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:r.offsetLeft,y:r.offsetTop,width:t,height:n}}function wc(r,e){var t=e.getRootNode&&e.getRootNode();if(r.contains(e))return!0;if(t&&To(t)){var n=e;do{if(n&&r.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function rn(r){return It(r).getComputedStyle(r)}function Eg(r){return["table","td","th"].indexOf(Vt(r))>=0}function Mn(r){return((wi(r)?r.ownerDocument:r.document)||window.document).documentElement}function es(r){return Vt(r)==="html"?r:r.assignedSlot||r.parentNode||(To(r)?r.host:null)||Mn(r)}function tl(r){return!yt(r)||rn(r).position==="fixed"?null:r.offsetParent}function wg(r){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,t=navigator.userAgent.indexOf("Trident")!==-1;if(t&&yt(r)){var n=rn(r);if(n.position==="fixed")return null}var i=es(r);for(To(i)&&(i=i.host);yt(i)&&["html","body"].indexOf(Vt(i))<0;){var s=rn(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function sr(r){for(var e=It(r),t=tl(r);t&&Eg(t)&&rn(t).position==="static";)t=tl(t);return t&&(Vt(t)==="html"||Vt(t)==="body"&&rn(t).position==="static")?e:t||wg(r)||e}function Lo(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function ji(r,e,t){return Un(r,Wr(e,t))}function Tg(r,e,t){var n=ji(r,e,t);return n>t?t:n}function Tc(){return{top:0,right:0,bottom:0,left:0}}function Ac(r){return Object.assign({},Tc(),r)}function Cc(r,e){return e.reduce(function(t,n){return t[n]=r,t},{})}var Ag=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Ac(typeof e!="number"?e:Cc(e,Ni))};function Cg(r){var e,t=r.state,n=r.name,i=r.options,s=t.elements.arrow,a=t.modifiersData.popperOffsets,o=Bt(t.placement),l=Lo(o),c=[st,mt].indexOf(o)>=0,u=c?"height":"width";if(!(!s||!a)){var f=Ag(i.padding,t),d=Co(s),m=l==="y"?rt:st,_=l==="y"?pt:mt,p=t.rects.reference[u]+t.rects.reference[l]-a[l]-t.rects.popper[u],h=a[l]-t.rects.reference[l],v=sr(s),M=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,w=p/2-h/2,y=f[m],S=M-d[u]-f[_],A=M/2-d[u]/2+w,L=ji(y,A,S),g=l;t.modifiersData[n]=(e={},e[g]=L,e.centerOffset=L-A,e)}}function Lg(r){var e=r.state,t=r.options,n=t.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!wc(e.elements.popper,i)||(e.elements.arrow=i))}const Lc={name:"arrow",enabled:!0,phase:"main",fn:Cg,effect:Lg,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ci(r){return r.split("-")[1]}var Dg={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Pg(r){var e=r.x,t=r.y,n=window,i=n.devicePixelRatio||1;return{x:Ti(e*i)/i||0,y:Ti(t*i)/i||0}}function nl(r){var e,t=r.popper,n=r.popperRect,i=r.placement,s=r.variation,a=r.offsets,o=r.position,l=r.gpuAcceleration,c=r.adaptive,u=r.roundOffsets,f=r.isFixed,d=a.x,m=d===void 0?0:d,_=a.y,p=_===void 0?0:_,h=typeof u=="function"?u({x:m,y:p}):{x:m,y:p};m=h.x,p=h.y;var v=a.hasOwnProperty("x"),M=a.hasOwnProperty("y"),w=st,y=rt,S=window;if(c){var A=sr(t),L="clientHeight",g="clientWidth";if(A===It(t)&&(A=Mn(t),rn(A).position!=="static"&&o==="absolute"&&(L="scrollHeight",g="scrollWidth")),A=A,i===rt||(i===st||i===mt)&&s===Ei){y=pt;var T=f&&A===S&&S.visualViewport?S.visualViewport.height:A[L];p-=T-n.height,p*=l?1:-1}if(i===st||(i===rt||i===pt)&&s===Ei){w=mt;var N=f&&A===S&&S.visualViewport?S.visualViewport.width:A[g];m-=N-n.width,m*=l?1:-1}}var D=Object.assign({position:o},c&&Dg),ee=u===!0?Pg({x:m,y:p}):{x:m,y:p};if(m=ee.x,p=ee.y,l){var j;return Object.assign({},D,(j={},j[y]=M?"0":"",j[w]=v?"0":"",j.transform=(S.devicePixelRatio||1)<=1?"translate("+m+"px, "+p+"px)":"translate3d("+m+"px, "+p+"px, 0)",j))}return Object.assign({},D,(e={},e[y]=M?p+"px":"",e[w]=v?m+"px":"",e.transform="",e))}function Rg(r){var e=r.state,t=r.options,n=t.gpuAcceleration,i=n===void 0?!0:n,s=t.adaptive,a=s===void 0?!0:s,o=t.roundOffsets,l=o===void 0?!0:o,c={placement:Bt(e.placement),variation:Ci(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,nl(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,nl(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Do={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Rg,data:{}};var Pr={passive:!0};function Ig(r){var e=r.state,t=r.instance,n=r.options,i=n.scroll,s=i===void 0?!0:i,a=n.resize,o=a===void 0?!0:a,l=It(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",t.update,Pr)}),o&&l.addEventListener("resize",t.update,Pr),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",t.update,Pr)}),o&&l.removeEventListener("resize",t.update,Pr)}}const Po={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ig,data:{}};var Ng={left:"right",right:"left",bottom:"top",top:"bottom"};function kr(r){return r.replace(/left|right|bottom|top/g,function(e){return Ng[e]})}var Og={start:"end",end:"start"};function il(r){return r.replace(/start|end/g,function(e){return Og[e]})}function Ro(r){var e=It(r),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function Io(r){return Ai(Mn(r)).left+Ro(r).scrollLeft}function Fg(r){var e=It(r),t=Mn(r),n=e.visualViewport,i=t.clientWidth,s=t.clientHeight,a=0,o=0;return n&&(i=n.width,s=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,o=n.offsetTop)),{width:i,height:s,x:a+Io(r),y:o}}function zg(r){var e,t=Mn(r),n=Ro(r),i=(e=r.ownerDocument)==null?void 0:e.body,s=Un(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=Un(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-n.scrollLeft+Io(r),l=-n.scrollTop;return rn(i||t).direction==="rtl"&&(o+=Un(t.clientWidth,i?i.clientWidth:0)-s),{width:s,height:a,x:o,y:l}}function No(r){var e=rn(r),t=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+n)}function Dc(r){return["html","body","#document"].indexOf(Vt(r))>=0?r.ownerDocument.body:yt(r)&&No(r)?r:Dc(es(r))}function Ki(r,e){var t;e===void 0&&(e=[]);var n=Dc(r),i=n===((t=r.ownerDocument)==null?void 0:t.body),s=It(n),a=i?[s].concat(s.visualViewport||[],No(n)?n:[]):n,o=e.concat(a);return i?o:o.concat(Ki(es(a)))}function mo(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function Ug(r){var e=Ai(r);return e.top=e.top+r.clientTop,e.left=e.left+r.clientLeft,e.bottom=e.top+r.clientHeight,e.right=e.left+r.clientWidth,e.width=r.clientWidth,e.height=r.clientHeight,e.x=e.left,e.y=e.top,e}function rl(r,e){return e===Eo?mo(Fg(r)):wi(e)?Ug(e):mo(zg(Mn(r)))}function Bg(r){var e=Ki(es(r)),t=["absolute","fixed"].indexOf(rn(r).position)>=0,n=t&&yt(r)?sr(r):r;return wi(n)?e.filter(function(i){return wi(i)&&wc(i,n)&&Vt(i)!=="body"}):[]}function kg(r,e,t){var n=e==="clippingParents"?Bg(r):[].concat(e),i=[].concat(n,[t]),s=i[0],a=i.reduce(function(o,l){var c=rl(r,l);return o.top=Un(c.top,o.top),o.right=Wr(c.right,o.right),o.bottom=Wr(c.bottom,o.bottom),o.left=Un(c.left,o.left),o},rl(r,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Pc(r){var e=r.reference,t=r.element,n=r.placement,i=n?Bt(n):null,s=n?Ci(n):null,a=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,l;switch(i){case rt:l={x:a,y:e.y-t.height};break;case pt:l={x:a,y:e.y+e.height};break;case mt:l={x:e.x+e.width,y:o};break;case st:l={x:e.x-t.width,y:o};break;default:l={x:e.x,y:e.y}}var c=i?Lo(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case Gn:l[c]=l[c]-(e[u]/2-t[u]/2);break;case Ei:l[c]=l[c]+(e[u]/2-t[u]/2);break}}return l}function Li(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=n===void 0?r.placement:n,s=t.boundary,a=s===void 0?dc:s,o=t.rootBoundary,l=o===void 0?Eo:o,c=t.elementContext,u=c===void 0?fi:c,f=t.altBoundary,d=f===void 0?!1:f,m=t.padding,_=m===void 0?0:m,p=Ac(typeof _!="number"?_:Cc(_,Ni)),h=u===fi?pc:fi,v=r.rects.popper,M=r.elements[d?h:u],w=kg(wi(M)?M:M.contextElement||Mn(r.elements.popper),a,l),y=Ai(r.elements.reference),S=Pc({reference:y,element:v,strategy:"absolute",placement:i}),A=mo(Object.assign({},v,S)),L=u===fi?A:y,g={top:w.top-L.top+p.top,bottom:L.bottom-w.bottom+p.bottom,left:w.left-L.left+p.left,right:L.right-w.right+p.right},T=r.modifiersData.offset;if(u===fi&&T){var N=T[i];Object.keys(g).forEach(function(D){var ee=[mt,pt].indexOf(D)>=0?1:-1,j=[rt,pt].indexOf(D)>=0?"y":"x";g[D]+=N[j]*ee})}return g}function Vg(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=t.boundary,s=t.rootBoundary,a=t.padding,o=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?wo:l,u=Ci(n),f=u?o?po:po.filter(function(_){return Ci(_)===u}):Ni,d=f.filter(function(_){return c.indexOf(_)>=0});d.length===0&&(d=f);var m=d.reduce(function(_,p){return _[p]=Li(r,{placement:p,boundary:i,rootBoundary:s,padding:a})[Bt(p)],_},{});return Object.keys(m).sort(function(_,p){return m[_]-m[p]})}function Gg(r){if(Bt(r)===Qr)return[];var e=kr(r);return[il(r),e,il(e)]}function Hg(r){var e=r.state,t=r.options,n=r.name;if(!e.modifiersData[n]._skip){for(var i=t.mainAxis,s=i===void 0?!0:i,a=t.altAxis,o=a===void 0?!0:a,l=t.fallbackPlacements,c=t.padding,u=t.boundary,f=t.rootBoundary,d=t.altBoundary,m=t.flipVariations,_=m===void 0?!0:m,p=t.allowedAutoPlacements,h=e.options.placement,v=Bt(h),M=v===h,w=l||(M||!_?[kr(h)]:Gg(h)),y=[h].concat(w).reduce(function(ae,pe){return ae.concat(Bt(pe)===Qr?Vg(e,{placement:pe,boundary:u,rootBoundary:f,padding:c,flipVariations:_,allowedAutoPlacements:p}):pe)},[]),S=e.rects.reference,A=e.rects.popper,L=new Map,g=!0,T=y[0],N=0;N<y.length;N++){var D=y[N],ee=Bt(D),j=Ci(D)===Gn,P=[rt,pt].indexOf(ee)>=0,X=P?"width":"height",z=Li(e,{placement:D,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),W=P?j?mt:st:j?pt:rt;S[X]>A[X]&&(W=kr(W));var q=kr(W),F=[];if(s&&F.push(z[ee]<=0),o&&F.push(z[W]<=0,z[q]<=0),F.every(function(ae){return ae})){T=D,g=!1;break}L.set(D,F)}if(g)for(var G=_?3:1,Q=function(pe){var H=y.find(function(Te){var fe=L.get(Te);if(fe)return fe.slice(0,pe).every(function(ge){return ge})});if(H)return T=H,"break"},K=G;K>0;K--){var Z=Q(K);if(Z==="break")break}e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}}const Rc={name:"flip",enabled:!0,phase:"main",fn:Hg,requiresIfExists:["offset"],data:{_skip:!1}};function sl(r,e,t){return t===void 0&&(t={x:0,y:0}),{top:r.top-e.height-t.y,right:r.right-e.width+t.x,bottom:r.bottom-e.height+t.y,left:r.left-e.width-t.x}}function ol(r){return[rt,mt,pt,st].some(function(e){return r[e]>=0})}function Wg(r){var e=r.state,t=r.name,n=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,a=Li(e,{elementContext:"reference"}),o=Li(e,{altBoundary:!0}),l=sl(a,n),c=sl(o,i,s),u=ol(l),f=ol(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const Ic={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Wg};function $g(r,e,t){var n=Bt(r),i=[st,rt].indexOf(n)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:r})):t,a=s[0],o=s[1];return a=a||0,o=(o||0)*i,[st,mt].indexOf(n)>=0?{x:o,y:a}:{x:a,y:o}}function qg(r){var e=r.state,t=r.options,n=r.name,i=t.offset,s=i===void 0?[0,0]:i,a=wo.reduce(function(u,f){return u[f]=$g(f,e.rects,s),u},{}),o=a[e.placement],l=o.x,c=o.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=a}const Nc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qg};function Xg(r){var e=r.state,t=r.name;e.modifiersData[t]=Pc({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Oo={name:"popperOffsets",enabled:!0,phase:"read",fn:Xg,data:{}};function Yg(r){return r==="x"?"y":"x"}function jg(r){var e=r.state,t=r.options,n=r.name,i=t.mainAxis,s=i===void 0?!0:i,a=t.altAxis,o=a===void 0?!1:a,l=t.boundary,c=t.rootBoundary,u=t.altBoundary,f=t.padding,d=t.tether,m=d===void 0?!0:d,_=t.tetherOffset,p=_===void 0?0:_,h=Li(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),v=Bt(e.placement),M=Ci(e.placement),w=!M,y=Lo(v),S=Yg(y),A=e.modifiersData.popperOffsets,L=e.rects.reference,g=e.rects.popper,T=typeof p=="function"?p(Object.assign({},e.rects,{placement:e.placement})):p,N=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,ee={x:0,y:0};if(!!A){if(s){var j,P=y==="y"?rt:st,X=y==="y"?pt:mt,z=y==="y"?"height":"width",W=A[y],q=W+h[P],F=W-h[X],G=m?-g[z]/2:0,Q=M===Gn?L[z]:g[z],K=M===Gn?-g[z]:-L[z],Z=e.elements.arrow,ae=m&&Z?Co(Z):{width:0,height:0},pe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Tc(),H=pe[P],Te=pe[X],fe=ji(0,L[z],ae[z]),ge=w?L[z]/2-G-fe-H-N.mainAxis:Q-fe-H-N.mainAxis,le=w?-L[z]/2+G+fe+Te+N.mainAxis:K+fe+Te+N.mainAxis,De=e.elements.arrow&&sr(e.elements.arrow),be=De?y==="y"?De.clientTop||0:De.clientLeft||0:0,me=(j=D==null?void 0:D[y])!=null?j:0,We=W+ge-me-be,tt=W+le-me,Ye=ji(m?Wr(q,We):q,W,m?Un(F,tt):F);A[y]=Ye,ee[y]=Ye-W}if(o){var ct,$e=y==="x"?rt:st,Ne=y==="x"?pt:mt,Ze=A[S],nt=S==="y"?"height":"width",E=Ze+h[$e],x=Ze-h[Ne],k=[rt,st].indexOf(v)!==-1,J=(ct=D==null?void 0:D[S])!=null?ct:0,te=k?E:Ze-L[nt]-g[nt]-J+N.altAxis,ie=k?Ze+L[nt]+g[nt]-J-N.altAxis:x,_e=m&&k?Tg(te,Ze,ie):ji(m?te:E,Ze,m?ie:x);A[S]=_e,ee[S]=_e-Ze}e.modifiersData[n]=ee}}const Oc={name:"preventOverflow",enabled:!0,phase:"main",fn:jg,requiresIfExists:["offset"]};function Kg(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function Zg(r){return r===It(r)||!yt(r)?Ro(r):Kg(r)}function Jg(r){var e=r.getBoundingClientRect(),t=Ti(e.width)/r.offsetWidth||1,n=Ti(e.height)/r.offsetHeight||1;return t!==1||n!==1}function Qg(r,e,t){t===void 0&&(t=!1);var n=yt(e),i=yt(e)&&Jg(e),s=Mn(e),a=Ai(r,i),o={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!t)&&((Vt(e)!=="body"||No(s))&&(o=Zg(e)),yt(e)?(l=Ai(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Io(s))),{x:a.left+o.scrollLeft-l.x,y:a.top+o.scrollTop-l.y,width:a.width,height:a.height}}function e_(r){var e=new Map,t=new Set,n=[];r.forEach(function(s){e.set(s.name,s)});function i(s){t.add(s.name);var a=[].concat(s.requires||[],s.requiresIfExists||[]);a.forEach(function(o){if(!t.has(o)){var l=e.get(o);l&&i(l)}}),n.push(s)}return r.forEach(function(s){t.has(s.name)||i(s)}),n}function t_(r){var e=e_(r);return Ec.reduce(function(t,n){return t.concat(e.filter(function(i){return i.phase===n}))},[])}function n_(r){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(r())})})),e}}function i_(r){var e=r.reduce(function(t,n){var i=t[n.name];return t[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var al={placement:"bottom",modifiers:[],strategy:"absolute"};function ll(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function ts(r){r===void 0&&(r={});var e=r,t=e.defaultModifiers,n=t===void 0?[]:t,i=e.defaultOptions,s=i===void 0?al:i;return function(o,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},al,s),modifiersData:{},elements:{reference:o,popper:l},attributes:{},styles:{}},f=[],d=!1,m={state:u,setOptions:function(v){var M=typeof v=="function"?v(u.options):v;p(),u.options=Object.assign({},s,u.options,M),u.scrollParents={reference:wi(o)?Ki(o):o.contextElement?Ki(o.contextElement):[],popper:Ki(l)};var w=t_(i_([].concat(n,u.options.modifiers)));return u.orderedModifiers=w.filter(function(y){return y.enabled}),_(),m.update()},forceUpdate:function(){if(!d){var v=u.elements,M=v.reference,w=v.popper;if(!!ll(M,w)){u.rects={reference:Qg(M,sr(w),u.options.strategy==="fixed"),popper:Co(w)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(N){return u.modifiersData[N.name]=Object.assign({},N.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var S=u.orderedModifiers[y],A=S.fn,L=S.options,g=L===void 0?{}:L,T=S.name;typeof A=="function"&&(u=A({state:u,options:g,name:T,instance:m})||u)}}}},update:n_(function(){return new Promise(function(h){m.forceUpdate(),h(u)})}),destroy:function(){p(),d=!0}};if(!ll(o,l))return m;m.setOptions(c).then(function(h){!d&&c.onFirstUpdate&&c.onFirstUpdate(h)});function _(){u.orderedModifiers.forEach(function(h){var v=h.name,M=h.options,w=M===void 0?{}:M,y=h.effect;if(typeof y=="function"){var S=y({state:u,name:v,instance:m,options:w}),A=function(){};f.push(S||A)}})}function p(){f.forEach(function(h){return h()}),f=[]}return m}}var r_=ts(),s_=[Po,Oo,Do,Ao],o_=ts({defaultModifiers:s_}),a_=[Po,Oo,Do,Ao,Nc,Rc,Oc,Lc,Ic],Fo=ts({defaultModifiers:a_});const Fc=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:ts,detectOverflow:Li,createPopperBase:r_,createPopper:Fo,createPopperLite:o_,top:rt,bottom:pt,right:mt,left:st,auto:Qr,basePlacements:Ni,start:Gn,end:Ei,clippingParents:dc,viewport:Eo,popper:fi,reference:pc,variationPlacements:po,placements:wo,beforeRead:mc,read:gc,afterRead:_c,beforeMain:vc,main:xc,afterMain:bc,beforeWrite:yc,write:Mc,afterWrite:Sc,modifierPhases:Ec,applyStyles:Ao,arrow:Lc,computeStyles:Do,eventListeners:Po,flip:Rc,hide:Ic,offset:Nc,popperOffsets:Oo,preventOverflow:Oc},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const l_=1e6,c_=1e3,go="transitionend",u_=r=>r==null?`${r}`:Object.prototype.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase(),h_=r=>{do r+=Math.floor(Math.random()*l_);while(document.getElementById(r));return r},zc=r=>{let e=r.getAttribute("data-bs-target");if(!e||e==="#"){let t=r.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e},Uc=r=>{const e=zc(r);return e&&document.querySelector(e)?e:null},en=r=>{const e=zc(r);return e?document.querySelector(e):null},f_=r=>{if(!r)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(r);const n=Number.parseFloat(e),i=Number.parseFloat(t);return!n&&!i?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*c_)},Bc=r=>{r.dispatchEvent(new Event(go))},tn=r=>!r||typeof r!="object"?!1:(typeof r.jquery<"u"&&(r=r[0]),typeof r.nodeType<"u"),xn=r=>tn(r)?r.jquery?r[0]:r:typeof r=="string"&&r.length>0?document.querySelector(r):null,Oi=r=>{if(!tn(r)||r.getClientRects().length===0)return!1;const e=getComputedStyle(r).getPropertyValue("visibility")==="visible",t=r.closest("details:not([open])");if(!t)return e;if(t!==r){const n=r.closest("summary");if(n&&n.parentNode!==t||n===null)return!1}return e},bn=r=>!r||r.nodeType!==Node.ELEMENT_NODE||r.classList.contains("disabled")?!0:typeof r.disabled<"u"?r.disabled:r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false",kc=r=>{if(!document.documentElement.attachShadow)return null;if(typeof r.getRootNode=="function"){const e=r.getRootNode();return e instanceof ShadowRoot?e:null}return r instanceof ShadowRoot?r:r.parentNode?kc(r.parentNode):null},$r=()=>{},or=r=>{r.offsetHeight},Vc=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,qs=[],d_=r=>{document.readyState==="loading"?(qs.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of qs)e()}),qs.push(r)):r()},Mt=()=>document.documentElement.dir==="rtl",St=r=>{d_(()=>{const e=Vc();if(e){const t=r.NAME,n=e.fn[t];e.fn[t]=r.jQueryInterface,e.fn[t].Constructor=r,e.fn[t].noConflict=()=>(e.fn[t]=n,r.jQueryInterface)}})},Zt=r=>{typeof r=="function"&&r()},Gc=(r,e,t=!0)=>{if(!t){Zt(r);return}const n=5,i=f_(e)+n;let s=!1;const a=({target:o})=>{o===e&&(s=!0,e.removeEventListener(go,a),Zt(r))};e.addEventListener(go,a),setTimeout(()=>{s||Bc(e)},i)},zo=(r,e,t,n)=>{const i=r.length;let s=r.indexOf(e);return s===-1?!t&&n?r[i-1]:r[0]:(s+=t?1:-1,n&&(s=(s+i)%i),r[Math.max(0,Math.min(s,i-1))])},p_=/[^.]*(?=\..*)\.|.*/,m_=/\..*/,g_=/::\d+$/,Xs={};let cl=1;const Hc={mouseenter:"mouseover",mouseleave:"mouseout"},__=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Wc(r,e){return e&&`${e}::${cl++}`||r.uidEvent||cl++}function $c(r){const e=Wc(r);return r.uidEvent=e,Xs[e]=Xs[e]||{},Xs[e]}function v_(r,e){return function t(n){return Uo(n,{delegateTarget:r}),t.oneOff&&Y.off(r,n.type,e),e.apply(r,[n])}}function x_(r,e,t){return function n(i){const s=r.querySelectorAll(e);for(let{target:a}=i;a&&a!==this;a=a.parentNode)for(const o of s)if(o===a)return Uo(i,{delegateTarget:a}),n.oneOff&&Y.off(r,i.type,e,t),t.apply(a,[i])}}function qc(r,e,t=null){return Object.values(r).find(n=>n.callable===e&&n.delegationSelector===t)}function Xc(r,e,t){const n=typeof e=="string",i=n?t:e||t;let s=Yc(r);return __.has(s)||(s=r),[n,i,s]}function ul(r,e,t,n,i){if(typeof e!="string"||!r)return;let[s,a,o]=Xc(e,t,n);e in Hc&&(a=(_=>function(p){if(!p.relatedTarget||p.relatedTarget!==p.delegateTarget&&!p.delegateTarget.contains(p.relatedTarget))return _.call(this,p)})(a));const l=$c(r),c=l[o]||(l[o]={}),u=qc(c,a,s?t:null);if(u){u.oneOff=u.oneOff&&i;return}const f=Wc(a,e.replace(p_,"")),d=s?x_(r,t,a):v_(r,a);d.delegationSelector=s?t:null,d.callable=a,d.oneOff=i,d.uidEvent=f,c[f]=d,r.addEventListener(o,d,s)}function _o(r,e,t,n,i){const s=qc(e[t],n,i);!s||(r.removeEventListener(t,s,Boolean(i)),delete e[t][s.uidEvent])}function b_(r,e,t,n){const i=e[t]||{};for(const s of Object.keys(i))if(s.includes(n)){const a=i[s];_o(r,e,t,a.callable,a.delegationSelector)}}function Yc(r){return r=r.replace(m_,""),Hc[r]||r}const Y={on(r,e,t,n){ul(r,e,t,n,!1)},one(r,e,t,n){ul(r,e,t,n,!0)},off(r,e,t,n){if(typeof e!="string"||!r)return;const[i,s,a]=Xc(e,t,n),o=a!==e,l=$c(r),c=l[a]||{},u=e.startsWith(".");if(typeof s<"u"){if(!Object.keys(c).length)return;_o(r,l,a,s,i?t:null);return}if(u)for(const f of Object.keys(l))b_(r,l,f,e.slice(1));for(const f of Object.keys(c)){const d=f.replace(g_,"");if(!o||e.includes(d)){const m=c[f];_o(r,l,a,m.callable,m.delegationSelector)}}},trigger(r,e,t){if(typeof e!="string"||!r)return null;const n=Vc(),i=Yc(e),s=e!==i;let a=null,o=!0,l=!0,c=!1;s&&n&&(a=n.Event(e,t),n(r).trigger(a),o=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),c=a.isDefaultPrevented());let u=new Event(e,{bubbles:o,cancelable:!0});return u=Uo(u,t),c&&u.preventDefault(),l&&r.dispatchEvent(u),u.defaultPrevented&&a&&a.preventDefault(),u}};function Uo(r,e){for(const[t,n]of Object.entries(e||{}))try{r[t]=n}catch{Object.defineProperty(r,t,{configurable:!0,get(){return n}})}return r}const mn=new Map,Ys={set(r,e,t){mn.has(r)||mn.set(r,new Map);const n=mn.get(r);if(!n.has(e)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(e,t)},get(r,e){return mn.has(r)&&mn.get(r).get(e)||null},remove(r,e){if(!mn.has(r))return;const t=mn.get(r);t.delete(e),t.size===0&&mn.delete(r)}};function hl(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function js(r){return r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const nn={setDataAttribute(r,e,t){r.setAttribute(`data-bs-${js(e)}`,t)},removeDataAttribute(r,e){r.removeAttribute(`data-bs-${js(e)}`)},getDataAttributes(r){if(!r)return{};const e={},t=Object.keys(r.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of t){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=hl(r.dataset[n])}return e},getDataAttribute(r,e){return hl(r.getAttribute(`data-bs-${js(e)}`))}};class ar{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=tn(t)?nn.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...tn(t)?nn.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const n of Object.keys(t)){const i=t[n],s=e[n],a=tn(s)?"element":u_(s);if(!new RegExp(i).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${i}".`)}}}const y_="5.2.0";class Nt extends ar{constructor(e,t){super(),e=xn(e),e&&(this._element=e,this._config=this._getConfig(t),Ys.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ys.remove(this._element,this.constructor.DATA_KEY),Y.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Gc(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Ys.get(xn(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return y_}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ns=(r,e="hide")=>{const t=`click.dismiss${r.EVENT_KEY}`,n=r.NAME;Y.on(document,t,`[data-bs-dismiss="${n}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),bn(this))return;const s=en(this)||this.closest(`.${n}`);r.getOrCreateInstance(s)[e]()})},M_="alert",S_="bs.alert",jc=`.${S_}`,E_=`close${jc}`,w_=`closed${jc}`,T_="fade",A_="show";class is extends Nt{static get NAME(){return M_}close(){if(Y.trigger(this._element,E_).defaultPrevented)return;this._element.classList.remove(A_);const t=this._element.classList.contains(T_);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),Y.trigger(this._element,w_),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=is.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}ns(is,"close");St(is);const C_="button",L_="bs.button",D_=`.${L_}`,P_=".data-api",R_="active",fl='[data-bs-toggle="button"]',I_=`click${D_}${P_}`;class rs extends Nt{static get NAME(){return C_}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(R_))}static jQueryInterface(e){return this.each(function(){const t=rs.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}Y.on(document,I_,fl,r=>{r.preventDefault();const e=r.target.closest(fl);rs.getOrCreateInstance(e).toggle()});St(rs);const we={find(r,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,r))},findOne(r,e=document.documentElement){return Element.prototype.querySelector.call(e,r)},children(r,e){return[].concat(...r.children).filter(t=>t.matches(e))},parents(r,e){const t=[];let n=r.parentNode.closest(e);for(;n;)t.push(n),n=n.parentNode.closest(e);return t},prev(r,e){let t=r.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(r,e){let t=r.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(r){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,r).filter(t=>!bn(t)&&Oi(t))}},N_="swipe",Fi=".bs.swipe",O_=`touchstart${Fi}`,F_=`touchmove${Fi}`,z_=`touchend${Fi}`,U_=`pointerdown${Fi}`,B_=`pointerup${Fi}`,k_="touch",V_="pen",G_="pointer-event",H_=40,W_={endCallback:null,leftCallback:null,rightCallback:null},$_={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class qr extends ar{constructor(e,t){super(),this._element=e,!(!e||!qr.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return W_}static get DefaultType(){return $_}static get NAME(){return N_}dispose(){Y.off(this._element,Fi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Zt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=H_)return;const t=e/this._deltaX;this._deltaX=0,t&&Zt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Y.on(this._element,U_,e=>this._start(e)),Y.on(this._element,B_,e=>this._end(e)),this._element.classList.add(G_)):(Y.on(this._element,O_,e=>this._start(e)),Y.on(this._element,F_,e=>this._move(e)),Y.on(this._element,z_,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===V_||e.pointerType===k_)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const q_="carousel",X_="bs.carousel",Sn=`.${X_}`,Kc=".data-api",Y_="ArrowLeft",j_="ArrowRight",K_=500,Wi="next",ci="prev",di="left",Vr="right",Z_=`slide${Sn}`,Ks=`slid${Sn}`,J_=`keydown${Sn}`,Q_=`mouseenter${Sn}`,ev=`mouseleave${Sn}`,tv=`dragstart${Sn}`,nv=`load${Sn}${Kc}`,iv=`click${Sn}${Kc}`,Zc="carousel",Rr="active",rv="slide",sv="carousel-item-end",ov="carousel-item-start",av="carousel-item-next",lv="carousel-item-prev",Jc=".active",Qc=".carousel-item",cv=Jc+Qc,uv=".carousel-item img",hv=".carousel-indicators",fv="[data-bs-slide], [data-bs-slide-to]",dv='[data-bs-ride="carousel"]',pv={[Y_]:Vr,[j_]:di},mv={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},gv={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class lr extends Nt{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=we.findOne(hv,this._element),this._addEventListeners(),this._config.ride===Zc&&this.cycle()}static get Default(){return mv}static get DefaultType(){return gv}static get NAME(){return q_}next(){this._slide(Wi)}nextWhenVisible(){!document.hidden&&Oi(this._element)&&this.next()}prev(){this._slide(ci)}pause(){this._isSliding&&Bc(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){Y.one(this._element,Ks,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){Y.one(this._element,Ks,()=>this.to(e));return}const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?Wi:ci;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&Y.on(this._element,J_,e=>this._keydown(e)),this._config.pause==="hover"&&(Y.on(this._element,Q_,()=>this.pause()),Y.on(this._element,ev,()=>this._maybeEnableCycle())),this._config.touch&&qr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of we.find(uv,this._element))Y.on(n,tv,i=>i.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(di)),rightCallback:()=>this._slide(this._directionToOrder(Vr)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),K_+this._config.interval))}};this._swipeHelper=new qr(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=pv[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=we.findOne(Jc,this._indicatorsElement);t.classList.remove(Rr),t.removeAttribute("aria-current");const n=we.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Rr),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i=e===Wi,s=t||zo(this._getItems(),n,i,this._config.wrap);if(s===n)return;const a=this._getItemIndex(s),o=m=>Y.trigger(this._element,m,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:a});if(o(Z_).defaultPrevented||!n||!s)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=s;const u=i?ov:sv,f=i?av:lv;s.classList.add(f),or(s),n.classList.add(u),s.classList.add(u);const d=()=>{s.classList.remove(u,f),s.classList.add(Rr),n.classList.remove(Rr,f,u),this._isSliding=!1,o(Ks)};this._queueCallback(d,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(rv)}_getActive(){return we.findOne(cv,this._element)}_getItems(){return we.find(Qc,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Mt()?e===di?ci:Wi:e===di?Wi:ci}_orderToDirection(e){return Mt()?e===ci?di:Vr:e===ci?Vr:di}static jQueryInterface(e){return this.each(function(){const t=lr.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Y.on(document,iv,fv,function(r){const e=en(this);if(!e||!e.classList.contains(Zc))return;r.preventDefault();const t=lr.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");if(n){t.to(n),t._maybeEnableCycle();return}if(nn.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});Y.on(window,nv,()=>{const r=we.find(dv);for(const e of r)lr.getOrCreateInstance(e)});St(lr);const _v="collapse",vv="bs.collapse",cr=`.${vv}`,xv=".data-api",bv=`show${cr}`,yv=`shown${cr}`,Mv=`hide${cr}`,Sv=`hidden${cr}`,Ev=`click${cr}${xv}`,Zs="show",gi="collapse",Ir="collapsing",wv="collapsed",Tv=`:scope .${gi} .${gi}`,Av="collapse-horizontal",Cv="width",Lv="height",Dv=".collapse.show, .collapse.collapsing",vo='[data-bs-toggle="collapse"]',Pv={parent:null,toggle:!0},Rv={parent:"(null|element)",toggle:"boolean"};class Qi extends Nt{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=we.find(vo);for(const i of n){const s=Uc(i),a=we.find(s).filter(o=>o===this._element);s!==null&&a.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Pv}static get DefaultType(){return Rv}static get NAME(){return _v}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Dv).filter(o=>o!==this._element).map(o=>Qi.getOrCreateInstance(o,{toggle:!1}))),e.length&&e[0]._isTransitioning||Y.trigger(this._element,bv).defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(gi),this._element.classList.add(Ir),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Ir),this._element.classList.add(gi,Zs),this._element.style[n]="",Y.trigger(this._element,yv)},a=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||Y.trigger(this._element,Mv).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,or(this._element),this._element.classList.add(Ir),this._element.classList.remove(gi,Zs);for(const i of this._triggerArray){const s=en(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Ir),this._element.classList.add(gi),Y.trigger(this._element,Sv)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Zs)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=xn(e.parent),e}_getDimension(){return this._element.classList.contains(Av)?Cv:Lv}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(vo);for(const t of e){const n=en(t);n&&this._addAriaAndCollapsedClass([t],this._isShown(n))}}_getFirstLevelChildren(e){const t=we.find(Tv,this._config.parent);return we.find(e,this._config.parent).filter(n=>!t.includes(n))}_addAriaAndCollapsedClass(e,t){if(!!e.length)for(const n of e)n.classList.toggle(wv,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=Qi.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Y.on(document,Ev,vo,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();const e=Uc(this),t=we.find(e);for(const n of t)Qi.getOrCreateInstance(n,{toggle:!1}).toggle()});St(Qi);const dl="dropdown",Iv="bs.dropdown",Wn=`.${Iv}`,Bo=".data-api",Nv="Escape",pl="Tab",Ov="ArrowUp",ml="ArrowDown",Fv=2,zv=`hide${Wn}`,Uv=`hidden${Wn}`,Bv=`show${Wn}`,kv=`shown${Wn}`,eu=`click${Wn}${Bo}`,tu=`keydown${Wn}${Bo}`,Vv=`keyup${Wn}${Bo}`,pi="show",Gv="dropup",Hv="dropend",Wv="dropstart",$v="dropup-center",qv="dropdown-center",ss='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Xv=`${ss}.${pi}`,nu=".dropdown-menu",Yv=".navbar",jv=".navbar-nav",Kv=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Zv=Mt()?"top-end":"top-start",Jv=Mt()?"top-start":"top-end",Qv=Mt()?"bottom-end":"bottom-start",e0=Mt()?"bottom-start":"bottom-end",t0=Mt()?"left-start":"right-start",n0=Mt()?"right-start":"left-start",i0="top",r0="bottom",s0={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},o0={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class kt extends Nt{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=we.findOne(nu,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return s0}static get DefaultType(){return o0}static get NAME(){return dl}toggle(){return this._isShown()?this.hide():this.show()}show(){if(bn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!Y.trigger(this._element,Bv,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(jv))for(const n of[].concat(...document.body.children))Y.on(n,"mouseover",$r);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(pi),this._element.classList.add(pi),Y.trigger(this._element,kv,e)}}hide(){if(bn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!Y.trigger(this._element,zv,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))Y.off(n,"mouseover",$r);this._popper&&this._popper.destroy(),this._menu.classList.remove(pi),this._element.classList.remove(pi),this._element.setAttribute("aria-expanded","false"),nn.removeDataAttribute(this._menu,"popper"),Y.trigger(this._element,Uv,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!tn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${dl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Fc>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:tn(this._config.reference)?e=xn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Fo(e,this._menu,t)}_isShown(){return this._menu.classList.contains(pi)}_getPlacement(){const e=this._parent;if(e.classList.contains(Hv))return t0;if(e.classList.contains(Wv))return n0;if(e.classList.contains($v))return i0;if(e.classList.contains(qv))return r0;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(Gv)?t?Jv:Zv:t?e0:Qv}_detectNavbar(){return this._element.closest(Yv)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(nn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=we.find(Kv,this._menu).filter(i=>Oi(i));!n.length||zo(n,t,e===ml,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=kt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===Fv||e.type==="keyup"&&e.key!==pl)return;const t=we.find(Xv);for(const n of t){const i=kt.getInstance(n);if(!i||i._config.autoClose===!1)continue;const s=e.composedPath(),a=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!a||i._config.autoClose==="outside"&&a||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===pl||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const o={relatedTarget:i._element};e.type==="click"&&(o.clickEvent=e),i._completeHide(o)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Nv,i=[Ov,ml].includes(e.key);if(!i&&!n||t&&!n)return;e.preventDefault();const s=we.findOne(ss,e.delegateTarget.parentNode),a=kt.getOrCreateInstance(s);if(i){e.stopPropagation(),a.show(),a._selectMenuItem(e);return}a._isShown()&&(e.stopPropagation(),a.hide(),s.focus())}}Y.on(document,tu,ss,kt.dataApiKeydownHandler);Y.on(document,tu,nu,kt.dataApiKeydownHandler);Y.on(document,eu,kt.clearMenus);Y.on(document,Vv,kt.clearMenus);Y.on(document,eu,ss,function(r){r.preventDefault(),kt.getOrCreateInstance(this).toggle()});St(kt);const gl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_l=".sticky-top",Nr="padding-right",vl="margin-right";class xo{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Nr,t=>t+e),this._setElementAttributes(gl,Nr,t=>t+e),this._setElementAttributes(_l,vl,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Nr),this._resetElementAttributes(gl,Nr),this._resetElementAttributes(_l,vl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),s=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+i)return;this._saveInitialAttribute(a,t);const o=window.getComputedStyle(a).getPropertyValue(t);a.style.setProperty(t,`${n(Number.parseFloat(o))}px`)};this._applyManipulationCallback(e,s)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&nn.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=i=>{const s=nn.getDataAttribute(i,t);if(s===null){i.style.removeProperty(t);return}nn.removeDataAttribute(i,t),i.style.setProperty(t,s)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(tn(e)){t(e);return}for(const n of we.find(e,this._element))t(n)}}const iu="backdrop",a0="fade",xl="show",bl=`mousedown.bs.${iu}`,l0={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c0={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ru extends ar{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return l0}static get DefaultType(){return c0}static get NAME(){return iu}show(e){if(!this._config.isVisible){Zt(e);return}this._append();const t=this._getElement();this._config.isAnimated&&or(t),t.classList.add(xl),this._emulateAnimation(()=>{Zt(e)})}hide(e){if(!this._config.isVisible){Zt(e);return}this._getElement().classList.remove(xl),this._emulateAnimation(()=>{this.dispose(),Zt(e)})}dispose(){!this._isAppended||(Y.off(this._element,bl),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(a0),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=xn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),Y.on(e,bl,()=>{Zt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Gc(e,this._getElement(),this._config.isAnimated)}}const u0="focustrap",h0="bs.focustrap",Xr=`.${h0}`,f0=`focusin${Xr}`,d0=`keydown.tab${Xr}`,p0="Tab",m0="forward",yl="backward",g0={autofocus:!0,trapElement:null},_0={autofocus:"boolean",trapElement:"element"};class su extends ar{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return g0}static get DefaultType(){return _0}static get NAME(){return u0}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Y.off(document,Xr),Y.on(document,f0,e=>this._handleFocusin(e)),Y.on(document,d0,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,Y.off(document,Xr))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=we.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===yl?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===p0&&(this._lastTabNavDirection=e.shiftKey?yl:m0)}}const v0="modal",x0="bs.modal",Gt=`.${x0}`,b0=".data-api",y0="Escape",M0=`hide${Gt}`,S0=`hidePrevented${Gt}`,ou=`hidden${Gt}`,au=`show${Gt}`,E0=`shown${Gt}`,w0=`resize${Gt}`,T0=`mousedown.dismiss${Gt}`,A0=`keydown.dismiss${Gt}`,C0=`click${Gt}${b0}`,Ml="modal-open",L0="fade",Sl="show",Js="modal-static",D0=".modal.show",P0=".modal-dialog",R0=".modal-body",I0='[data-bs-toggle="modal"]',N0={backdrop:!0,focus:!0,keyboard:!0},O0={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Di extends Nt{constructor(e,t){super(e,t),this._dialog=we.findOne(P0,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new xo,this._addEventListeners()}static get Default(){return N0}static get DefaultType(){return O0}static get NAME(){return v0}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||Y.trigger(this._element,au,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ml),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||Y.trigger(this._element,M0).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Sl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])Y.off(e,Gt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ru({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new su({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=we.findOne(R0,this._dialog);t&&(t.scrollTop=0),or(this._element),this._element.classList.add(Sl);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Y.trigger(this._element,E0,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){Y.on(this._element,A0,e=>{if(e.key===y0){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),Y.on(window,w0,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),Y.on(this._element,T0,e=>{if(e.target===e.currentTarget){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ml),this._resetAdjustments(),this._scrollBar.reset(),Y.trigger(this._element,ou)})}_isAnimated(){return this._element.classList.contains(L0)}_triggerBackdropTransition(){if(Y.trigger(this._element,S0).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(Js)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Js),this._queueCallback(()=>{this._element.classList.remove(Js),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const i=Mt()?"paddingLeft":"paddingRight";this._element.style[i]=`${t}px`}if(!n&&e){const i=Mt()?"paddingRight":"paddingLeft";this._element.style[i]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=Di.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](t)}})}}Y.on(document,C0,I0,function(r){const e=en(this);["A","AREA"].includes(this.tagName)&&r.preventDefault(),Y.one(e,au,i=>{i.defaultPrevented||Y.one(e,ou,()=>{Oi(this)&&this.focus()})});const t=we.findOne(D0);t&&Di.getInstance(t).hide(),Di.getOrCreateInstance(e).toggle(this)});ns(Di);St(Di);const F0="offcanvas",z0="bs.offcanvas",sn=`.${z0}`,lu=".data-api",U0=`load${sn}${lu}`,B0="Escape",El="show",wl="showing",Tl="hiding",k0="offcanvas-backdrop",cu=".offcanvas.show",V0=`show${sn}`,G0=`shown${sn}`,H0=`hide${sn}`,Al=`hidePrevented${sn}`,uu=`hidden${sn}`,W0=`resize${sn}`,$0=`click${sn}${lu}`,q0=`keydown.dismiss${sn}`,X0='[data-bs-toggle="offcanvas"]',Y0={backdrop:!0,keyboard:!0,scroll:!1},j0={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class yn extends Nt{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Y0}static get DefaultType(){return j0}static get NAME(){return F0}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||Y.trigger(this._element,V0,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new xo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(wl);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(El),this._element.classList.remove(wl),Y.trigger(this._element,G0,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||Y.trigger(this._element,H0).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Tl),this._backdrop.hide();const t=()=>{this._element.classList.remove(El,Tl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new xo().reset(),Y.trigger(this._element,uu)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){Y.trigger(this._element,Al);return}this.hide()},t=Boolean(this._config.backdrop);return new ru({className:k0,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new su({trapElement:this._element})}_addEventListeners(){Y.on(this._element,q0,e=>{if(e.key===B0){if(!this._config.keyboard){Y.trigger(this._element,Al);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const t=yn.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Y.on(document,$0,X0,function(r){const e=en(this);if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),bn(this))return;Y.one(e,uu,()=>{Oi(this)&&this.focus()});const t=we.findOne(cu);t&&t!==e&&yn.getInstance(t).hide(),yn.getOrCreateInstance(e).toggle(this)});Y.on(window,U0,()=>{for(const r of we.find(cu))yn.getOrCreateInstance(r).show()});Y.on(window,W0,()=>{for(const r of we.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(r).position!=="fixed"&&yn.getOrCreateInstance(r).hide()});ns(yn);St(yn);const K0=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Z0=/^aria-[\w-]*$/i,J0=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Q0=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,ex=(r,e)=>{const t=r.nodeName.toLowerCase();return e.includes(t)?K0.has(t)?Boolean(J0.test(r.nodeValue)||Q0.test(r.nodeValue)):!0:e.filter(n=>n instanceof RegExp).some(n=>n.test(t))},hu={"*":["class","dir","id","lang","role",Z0],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function tx(r,e,t){if(!r.length)return r;if(t&&typeof t=="function")return t(r);const i=new window.DOMParser().parseFromString(r,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const a of s){const o=a.nodeName.toLowerCase();if(!Object.keys(e).includes(o)){a.remove();continue}const l=[].concat(...a.attributes),c=[].concat(e["*"]||[],e[o]||[]);for(const u of l)ex(u,c)||a.removeAttribute(u.nodeName)}return i.body.innerHTML}const nx="TemplateFactory",ix={allowList:hu,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},rx={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},sx={entry:"(string|element|function|null)",selector:"(string|element)"};class ox extends ar{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return ix}static get DefaultType(){return rx}static get NAME(){return nx}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(e,s,i);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},sx)}_setContent(e,t,n){const i=we.findOne(n,e);if(!!i){if(t=this._resolvePossibleFunction(t),!t){i.remove();return}if(tn(t)){this._putElementInTemplate(xn(t),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(t);return}i.textContent=t}}_maybeSanitize(e){return this._config.sanitize?tx(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const ax="tooltip",lx=new Set(["sanitize","allowList","sanitizeFn"]),Qs="fade",cx="modal",Or="show",ux=".tooltip-inner",Cl=`.${cx}`,Ll="hide.bs.modal",$i="hover",eo="focus",hx="click",fx="manual",dx="hide",px="hidden",mx="show",gx="shown",_x="inserted",vx="click",xx="focusin",bx="focusout",yx="mouseenter",Mx="mouseleave",Sx={AUTO:"auto",TOP:"top",RIGHT:Mt()?"left":"right",BOTTOM:"bottom",LEFT:Mt()?"right":"left"},Ex={allowList:hu,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},wx={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class zi extends Nt{constructor(e,t){if(typeof Fc>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return Ex}static get DefaultType(){return wx}static get NAME(){return ax}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(!!this._isEnabled){if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter():t._leave();return}if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),Y.off(this._element.closest(Cl),Ll,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=Y.trigger(this._element,this.constructor.eventName(mx)),n=(kc(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),Y.trigger(this._element,this.constructor.eventName(_x))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(Or),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))Y.on(o,"mouseover",$r);const a=()=>{const o=this._isHovered;this._isHovered=!1,Y.trigger(this._element,this.constructor.eventName(gx)),o&&this._leave()};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||Y.trigger(this._element,this.constructor.eventName(dx)).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(Or),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))Y.off(i,"mouseover",$r);this._activeTrigger[hx]=!1,this._activeTrigger[eo]=!1,this._activeTrigger[$i]=!1,this._isHovered=!1;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),Y.trigger(this._element,this.constructor.eventName(px)),this._disposePopper())};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Qs,Or),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=h_(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(Qs),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ox({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ux]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Qs)}_isShown(){return this.tip&&this.tip.classList.contains(Or)}_createPopper(e){const t=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,n=Sx[t.toUpperCase()];return Fo(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")Y.on(this._element,this.constructor.eventName(vx),this._config.selector,n=>this.toggle(n));else if(t!==fx){const n=t===$i?this.constructor.eventName(yx):this.constructor.eventName(xx),i=t===$i?this.constructor.eventName(Mx):this.constructor.eventName(bx);Y.on(this._element,n,this._config.selector,s=>{const a=this._initializeOnDelegatedTarget(s);a._activeTrigger[s.type==="focusin"?eo:$i]=!0,a._enter()}),Y.on(this._element,i,this._config.selector,s=>{const a=this._initializeOnDelegatedTarget(s);a._activeTrigger[s.type==="focusout"?eo:$i]=a._element.contains(s.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},Y.on(this._element.closest(Cl),Ll,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._config.originalTitle;!e||(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=nn.getDataAttributes(this._element);for(const n of Object.keys(t))lx.has(n)&&delete t[n];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:xn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),e.originalTitle=this._element.getAttribute("title")||"",typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const t=zi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}St(zi);const Tx="popover",Ax=".popover-header",Cx=".popover-body",Lx={...zi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Dx={...zi.DefaultType,content:"(null|string|element|function)"};class os extends zi{static get Default(){return Lx}static get DefaultType(){return Dx}static get NAME(){return Tx}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Ax]:this._getTitle(),[Cx]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=os.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}St(os);const Px="scrollspy",Rx="bs.scrollspy",ko=`.${Rx}`,Ix=".data-api",Nx=`activate${ko}`,Dl=`click${ko}`,Ox=`load${ko}${Ix}`,Fx="dropdown-item",ui="active",zx='[data-bs-spy="scroll"]',to="[href]",Ux=".nav, .list-group",Pl=".nav-link",Bx=".nav-item",kx=".list-group-item",Vx=`${Pl}, ${Bx} > ${Pl}, ${kx}`,Gx=".dropdown",Hx=".dropdown-toggle",Wx={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},$x={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class as extends Nt{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Wx}static get DefaultType(){return $x}static get NAME(){return Px}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=xn(e.target)||document.body,e}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(Y.off(this._config.target,Dl),Y.on(this._config.target,Dl,to,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:i,behavior:"smooth"});return}n.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=a=>this._targetLinks.get(`#${a.target.id}`),n=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(t(a))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}const o=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&o){if(n(a),!i)return;continue}!s&&!o&&n(a)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=we.find(to,this._config.target);for(const t of e){if(!t.hash||bn(t))continue;const n=we.findOne(t.hash,this._element);Oi(n)&&(this._targetLinks.set(t.hash,t),this._observableSections.set(t.hash,n))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(ui),this._activateParents(e),Y.trigger(this._element,Nx,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Fx)){we.findOne(Hx,e.closest(Gx)).classList.add(ui);return}for(const t of we.parents(e,Ux))for(const n of we.prev(t,Vx))n.classList.add(ui)}_clearActiveClass(e){e.classList.remove(ui);const t=we.find(`${to}.${ui}`,e);for(const n of t)n.classList.remove(ui)}static jQueryInterface(e){return this.each(function(){const t=as.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Y.on(window,Ox,()=>{for(const r of we.find(zx))as.getOrCreateInstance(r)});St(as);const qx="tab",Xx="bs.tab",$n=`.${Xx}`,Yx=`hide${$n}`,jx=`hidden${$n}`,Kx=`show${$n}`,Zx=`shown${$n}`,Jx=`click${$n}`,Qx=`keydown${$n}`,eb=`load${$n}`,tb="ArrowLeft",Rl="ArrowRight",nb="ArrowUp",Il="ArrowDown",gn="active",Nl="fade",no="show",ib="dropdown",rb=".dropdown-toggle",sb=".dropdown-menu",ob=".dropdown-item",io=":not(.dropdown-toggle)",ab='.list-group, .nav, [role="tablist"]',lb=".nav-item, .list-group-item",cb=`.nav-link${io}, .list-group-item${io}, [role="tab"]${io}`,fu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ro=`${cb}, ${fu}`,ub=`.${gn}[data-bs-toggle="tab"], .${gn}[data-bs-toggle="pill"], .${gn}[data-bs-toggle="list"]`;class Pi extends Nt{constructor(e){super(e),this._parent=this._element.closest(ab),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Y.on(this._element,Qx,t=>this._keydown(t)))}static get NAME(){return qx}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?Y.trigger(t,Yx,{relatedTarget:e}):null;Y.trigger(e,Kx,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(gn),this._activate(en(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(no);return}e.focus(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),Y.trigger(e,Zx,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(Nl))}_deactivate(e,t){if(!e)return;e.classList.remove(gn),e.blur(),this._deactivate(en(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(no);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),Y.trigger(e,jx,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(Nl))}_keydown(e){if(![tb,Rl,nb,Il].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=[Rl,Il].includes(e.key),n=zo(this._getChildren().filter(i=>!bn(i)),e.target,t,!0);n&&Pi.getOrCreateInstance(n).show()}_getChildren(){return we.find(ro,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=en(e);!t||(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(ib))return;const i=(s,a)=>{const o=we.findOne(s,n);o&&o.classList.toggle(a,t)};i(rb,gn),i(sb,no),i(ob,gn),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(gn)}_getInnerElement(e){return e.matches(ro)?e:we.findOne(ro,e)}_getOuterElement(e){return e.closest(lb)||e}static jQueryInterface(e){return this.each(function(){const t=Pi.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Y.on(document,Jx,fu,function(r){["A","AREA"].includes(this.tagName)&&r.preventDefault(),!bn(this)&&Pi.getOrCreateInstance(this).show()});Y.on(window,eb,()=>{for(const r of we.find(ub))Pi.getOrCreateInstance(r)});St(Pi);const hb="toast",fb="bs.toast",En=`.${fb}`,db=`mouseover${En}`,pb=`mouseout${En}`,mb=`focusin${En}`,gb=`focusout${En}`,_b=`hide${En}`,vb=`hidden${En}`,xb=`show${En}`,bb=`shown${En}`,yb="fade",Ol="hide",Fr="show",zr="showing",Mb={animation:"boolean",autohide:"boolean",delay:"number"},Sb={animation:!0,autohide:!0,delay:5e3};class ls extends Nt{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Sb}static get DefaultType(){return Mb}static get NAME(){return hb}show(){if(Y.trigger(this._element,xb).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(yb);const t=()=>{this._element.classList.remove(zr),Y.trigger(this._element,bb),this._maybeScheduleHide()};this._element.classList.remove(Ol),or(this._element),this._element.classList.add(Fr,zr),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||Y.trigger(this._element,_b).defaultPrevented)return;const t=()=>{this._element.classList.add(Ol),this._element.classList.remove(zr,Fr),Y.trigger(this._element,vb)};this._element.classList.add(zr),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Fr),super.dispose()}isShown(){return this._element.classList.contains(Fr)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t){this._clearTimeout();return}const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){Y.on(this._element,db,e=>this._onInteraction(e,!0)),Y.on(this._element,pb,e=>this._onInteraction(e,!1)),Y.on(this._element,mb,e=>this._onInteraction(e,!0)),Y.on(this._element,gb,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=ls.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}ns(ls);St(ls);document.querySelectorAll('[data-bs-toggle="popover"]').forEach(r=>{new os(r)});window.addEventListener("DOMContentLoaded",()=>{yg(document.querySelector("#c"))});
