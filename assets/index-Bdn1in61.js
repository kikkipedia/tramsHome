(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function So(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},Gn=[],Tt=()=>{},pd=()=>!1,Kr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ao=t=>t.startsWith("onUpdate:"),Le=Object.assign,Ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gd=Object.prototype.hasOwnProperty,ge=(t,e)=>gd.call(t,e),te=Array.isArray,qn=t=>Gr(t)==="[object Map]",Jc=t=>Gr(t)==="[object Set]",ie=t=>typeof t=="function",Ae=t=>typeof t=="string",dn=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Yc=t=>(be(t)||ie(t))&&ie(t.then)&&ie(t.catch),Xc=Object.prototype.toString,Gr=t=>Xc.call(t),md=t=>Gr(t).slice(8,-1),Qc=t=>Gr(t)==="[object Object]",Co=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bi=So(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vd=/-(\w)/g,hn=qr(t=>t.replace(vd,(e,n)=>n?n.toUpperCase():"")),yd=/\B([A-Z])/g,xn=qr(t=>t.replace(yd,"-$1").toLowerCase()),Zc=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),As=qr(t=>t?`on${Zc(t)}`:""),an=(t,e)=>!Object.is(t,e),yr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},eu=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Zs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rl;const Jr=()=>rl||(rl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ae(i)?Ed(i):Po(i);if(s)for(const o in s)e[o]=s[o]}return e}else if(Ae(t)||be(t))return t}const _d=/;(?![^(]*\))/g,wd=/:([^]+)/,Id=/\/\*[^]*?\*\//g;function Ed(t){const e={};return t.replace(Id,"").split(_d).forEach(n=>{if(n){const i=n.split(wd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Oo(t){let e="";if(Ae(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const i=Oo(t[n]);i&&(e+=i+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Td=So(bd);function tu(t){return!!t||t===""}const nu=t=>!!(t&&t.__v_isRef===!0),_r=t=>Ae(t)?t:t==null?"":te(t)||be(t)&&(t.toString===Xc||!ie(t.toString))?nu(t)?_r(t.value):JSON.stringify(t,iu,2):String(t),iu=(t,e)=>nu(e)?iu(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],o)=>(n[Rs(i,o)+" =>"]=s,n),{})}:Jc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rs(n))}:dn(e)?Rs(e):be(e)&&!te(e)&&!Qc(e)?String(e):e,Rs=(t,e="")=>{var n;return dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qe;class ru{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){Qe=this}off(){Qe=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sd(t){return new ru(t)}function Ad(){return Qe}let _e;const Cs=new WeakSet;class su{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cs.has(this)&&(Cs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||au(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sl(this),lu(this);const e=_e,n=pt;_e=this,pt=!0;try{return this.fn()}finally{cu(this),_e=e,pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)No(e);this.deps=this.depsTail=void 0,sl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eo(this)&&this.run()}get dirty(){return eo(this)}}let ou=0,Ti,Si;function au(t,e=!1){if(t.flags|=8,e){t.next=Si,Si=t;return}t.next=Ti,Ti=t}function ko(){ou++}function Do(){if(--ou>0)return;if(Si){let e=Si;for(Si=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ti;){let e=Ti;for(Ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function lu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cu(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),No(i),Rd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function eo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(uu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function uu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ui))return;t.globalVersion=Ui;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!eo(t)){t.flags&=-3;return}const n=_e,i=pt;_e=t,pt=!0;try{lu(t);const s=t.fn(t._value);(e.version===0||an(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{_e=n,pt=i,cu(t),t.flags&=-3}}function No(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)No(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rd(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pt=!0;const hu=[];function pn(){hu.push(pt),pt=!1}function gn(){const t=hu.pop();pt=t===void 0?!0:t}function sl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_e;_e=void 0;try{e()}finally{_e=n}}}let Ui=0;class Cd{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!_e||!pt||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new Cd(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,fu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=i)}return n}trigger(e){this.version++,Ui++,this.notify(e)}notify(e){ko();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Do()}}}function fu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fu(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const to=new WeakMap,Rn=Symbol(""),no=Symbol(""),Fi=Symbol("");function xe(t,e,n){if(pt&&_e){let i=to.get(t);i||to.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new xo),s.map=i,s.key=n),s.track()}}function Mt(t,e,n,i,s,o){const a=to.get(t);if(!a){Ui++;return}const c=u=>{u&&u.trigger()};if(ko(),e==="clear")a.forEach(c);else{const u=te(t),f=u&&Co(n);if(u&&n==="length"){const p=Number(i);a.forEach((v,b)=>{(b==="length"||b===Fi||!dn(b)&&b>=p)&&c(v)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(Fi)),e){case"add":u?f&&c(a.get("length")):(c(a.get(Rn)),qn(t)&&c(a.get(no)));break;case"delete":u||(c(a.get(Rn)),qn(t)&&c(a.get(no)));break;case"set":qn(t)&&c(a.get(Rn));break}}Do()}function Bn(t){const e=pe(t);return e===t?e:(xe(e,"iterate",Fi),gt(t)?e:e.map(He))}function Mo(t){return xe(t=pe(t),"iterate",Fi),t}const Pd={__proto__:null,[Symbol.iterator](){return Ps(this,Symbol.iterator,He)},concat(...t){return Bn(this).concat(...t.map(e=>te(e)?Bn(e):e))},entries(){return Ps(this,"entries",t=>(t[1]=He(t[1]),t))},every(t,e){return Dt(this,"every",t,e,void 0,arguments)},filter(t,e){return Dt(this,"filter",t,e,n=>n.map(He),arguments)},find(t,e){return Dt(this,"find",t,e,He,arguments)},findIndex(t,e){return Dt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dt(this,"findLast",t,e,He,arguments)},findLastIndex(t,e){return Dt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Os(this,"includes",t)},indexOf(...t){return Os(this,"indexOf",t)},join(t){return Bn(this).join(t)},lastIndexOf(...t){return Os(this,"lastIndexOf",t)},map(t,e){return Dt(this,"map",t,e,void 0,arguments)},pop(){return _i(this,"pop")},push(...t){return _i(this,"push",t)},reduce(t,...e){return ol(this,"reduce",t,e)},reduceRight(t,...e){return ol(this,"reduceRight",t,e)},shift(){return _i(this,"shift")},some(t,e){return Dt(this,"some",t,e,void 0,arguments)},splice(...t){return _i(this,"splice",t)},toReversed(){return Bn(this).toReversed()},toSorted(t){return Bn(this).toSorted(t)},toSpliced(...t){return Bn(this).toSpliced(...t)},unshift(...t){return _i(this,"unshift",t)},values(){return Ps(this,"values",He)}};function Ps(t,e,n){const i=Mo(t),s=i[e]();return i!==t&&!gt(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Od=Array.prototype;function Dt(t,e,n,i,s,o){const a=Mo(t),c=a!==t&&!gt(t),u=a[e];if(u!==Od[e]){const v=u.apply(t,o);return c?He(v):v}let f=n;a!==t&&(c?f=function(v,b){return n.call(this,He(v),b,t)}:n.length>2&&(f=function(v,b){return n.call(this,v,b,t)}));const p=u.call(a,f,i);return c&&s?s(p):p}function ol(t,e,n,i){const s=Mo(t);let o=n;return s!==t&&(gt(t)?n.length>3&&(o=function(a,c,u){return n.call(this,a,c,u,t)}):o=function(a,c,u){return n.call(this,a,He(c),u,t)}),s[e](o,...i)}function Os(t,e,n){const i=pe(t);xe(i,"iterate",Fi);const s=i[e](...n);return(s===-1||s===!1)&&Fo(n[0])?(n[0]=pe(n[0]),i[e](...n)):s}function _i(t,e,n=[]){pn(),ko();const i=pe(t)[e].apply(t,n);return Do(),gn(),i}const kd=So("__proto__,__v_isRef,__isVue"),du=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dn));function Dd(t){dn(t)||(t=String(t));const e=pe(this);return xe(e,"has",t),e.hasOwnProperty(t)}class pu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?Vd:yu:o?vu:mu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=te(e);if(!s){let u;if(a&&(u=Pd[n]))return u;if(n==="hasOwnProperty")return Dd}const c=Reflect.get(e,n,Me(e)?e:i);return(dn(n)?du.has(n):kd(n))||(s||xe(e,"get",n),o)?c:Me(c)?a&&Co(n)?c:c.value:be(c)?s?wu(c):Yr(c):c}}class gu extends pu{constructor(e=!1){super(!1,e)}set(e,n,i,s){let o=e[n];if(!this._isShallow){const u=Cn(o);if(!gt(i)&&!Cn(i)&&(o=pe(o),i=pe(i)),!te(e)&&Me(o)&&!Me(i))return u?!1:(o.value=i,!0)}const a=te(e)&&Co(n)?Number(n)<e.length:ge(e,n),c=Reflect.set(e,n,i,Me(e)?e:s);return e===pe(s)&&(a?an(i,o)&&Mt(e,"set",n,i):Mt(e,"add",n,i)),c}deleteProperty(e,n){const i=ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Mt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!dn(n)||!du.has(n))&&xe(e,"has",n),i}ownKeys(e){return xe(e,"iterate",te(e)?"length":Rn),Reflect.ownKeys(e)}}class Nd extends pu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xd=new gu,Md=new Nd,Ld=new gu(!0);const io=t=>t,dr=t=>Reflect.getPrototypeOf(t);function Ud(t,e,n){return function(...i){const s=this.__v_raw,o=pe(s),a=qn(o),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=s[t](...i),p=n?io:e?ro:He;return!e&&xe(o,"iterate",u?no:Rn),{next(){const{value:v,done:b}=f.next();return b?{value:v,done:b}:{value:c?[p(v[0]),p(v[1])]:p(v),done:b}},[Symbol.iterator](){return this}}}}function pr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Fd(t,e){const n={get(s){const o=this.__v_raw,a=pe(o),c=pe(s);t||(an(s,c)&&xe(a,"get",s),xe(a,"get",c));const{has:u}=dr(a),f=e?io:t?ro:He;if(u.call(a,s))return f(o.get(s));if(u.call(a,c))return f(o.get(c));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&xe(pe(s),"iterate",Rn),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=pe(o),c=pe(s);return t||(an(s,c)&&xe(a,"has",s),xe(a,"has",c)),s===c?o.has(s):o.has(s)||o.has(c)},forEach(s,o){const a=this,c=a.__v_raw,u=pe(c),f=e?io:t?ro:He;return!t&&xe(u,"iterate",Rn),c.forEach((p,v)=>s.call(o,f(p),f(v),a))}};return Le(n,t?{add:pr("add"),set:pr("set"),delete:pr("delete"),clear:pr("clear")}:{add(s){!e&&!gt(s)&&!Cn(s)&&(s=pe(s));const o=pe(this);return dr(o).has.call(o,s)||(o.add(s),Mt(o,"add",s,s)),this},set(s,o){!e&&!gt(o)&&!Cn(o)&&(o=pe(o));const a=pe(this),{has:c,get:u}=dr(a);let f=c.call(a,s);f||(s=pe(s),f=c.call(a,s));const p=u.call(a,s);return a.set(s,o),f?an(o,p)&&Mt(a,"set",s,o):Mt(a,"add",s,o),this},delete(s){const o=pe(this),{has:a,get:c}=dr(o);let u=a.call(o,s);u||(s=pe(s),u=a.call(o,s)),c&&c.call(o,s);const f=o.delete(s);return u&&Mt(o,"delete",s,void 0),f},clear(){const s=pe(this),o=s.size!==0,a=s.clear();return o&&Mt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ud(s,t,e)}),n}function Lo(t,e){const n=Fd(t,e);return(i,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ge(n,s)&&s in i?n:i,s,o)}const jd={get:Lo(!1,!1)},$d={get:Lo(!1,!0)},Hd={get:Lo(!0,!1)};const mu=new WeakMap,vu=new WeakMap,yu=new WeakMap,Vd=new WeakMap;function Bd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wd(t){return t.__v_skip||!Object.isExtensible(t)?0:Bd(md(t))}function Yr(t){return Cn(t)?t:Uo(t,!1,xd,jd,mu)}function _u(t){return Uo(t,!1,Ld,$d,vu)}function wu(t){return Uo(t,!0,Md,Hd,yu)}function Uo(t,e,n,i,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const a=Wd(t);if(a===0)return t;const c=new Proxy(t,a===2?i:n);return s.set(t,c),c}function Ai(t){return Cn(t)?Ai(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function gt(t){return!!(t&&t.__v_isShallow)}function Fo(t){return t?!!t.__v_raw:!1}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Iu(t){return!ge(t,"__v_skip")&&Object.isExtensible(t)&&eu(t,"__v_skip",!0),t}const He=t=>be(t)?Yr(t):t,ro=t=>be(t)?wu(t):t;function Me(t){return t?t.__v_isRef===!0:!1}function Ft(t){return Eu(t,!1)}function zd(t){return Eu(t,!0)}function Eu(t,e){return Me(t)?t:new Kd(t,e)}class Kd{constructor(e,n){this.dep=new xo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:pe(e),this._value=n?e:He(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||gt(e)||Cn(e);e=i?e:pe(e),an(e,n)&&(this._rawValue=e,this._value=i?e:He(e),this.dep.trigger())}}function Vt(t){return Me(t)?t.value:t}const Gd={get:(t,e,n)=>e==="__v_raw"?t:Vt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function bu(t){return Ai(t)?t:new Proxy(t,Gd)}class qd{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return au(this,!0),!0}get value(){const e=this.dep.track();return uu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jd(t,e,n=!1){let i,s;return ie(t)?i=t:(i=t.get,s=t.set),new qd(i,s,n)}const gr={},Pr=new WeakMap;let En;function Yd(t,e=!1,n=En){if(n){let i=Pr.get(n);i||Pr.set(n,i=[]),i.push(t)}}function Xd(t,e,n=ye){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:c,call:u}=n,f=W=>s?W:gt(W)||s===!1||s===0?Lt(W,1):Lt(W);let p,v,b,A,x=!1,U=!1;if(Me(t)?(v=()=>t.value,x=gt(t)):Ai(t)?(v=()=>f(t),x=!0):te(t)?(U=!0,x=t.some(W=>Ai(W)||gt(W)),v=()=>t.map(W=>{if(Me(W))return W.value;if(Ai(W))return f(W);if(ie(W))return u?u(W,2):W()})):ie(t)?e?v=u?()=>u(t,2):t:v=()=>{if(b){pn();try{b()}finally{gn()}}const W=En;En=p;try{return u?u(t,3,[A]):t(A)}finally{En=W}}:v=Tt,e&&s){const W=v,se=s===!0?1/0:s;v=()=>Lt(W(),se)}const G=Ad(),J=()=>{p.stop(),G&&G.active&&Ro(G.effects,p)};if(o&&e){const W=e;e=(...se)=>{W(...se),J()}}let B=U?new Array(t.length).fill(gr):gr;const K=W=>{if(!(!(p.flags&1)||!p.dirty&&!W))if(e){const se=p.run();if(s||x||(U?se.some((ce,I)=>an(ce,B[I])):an(se,B))){b&&b();const ce=En;En=p;try{const I=[se,B===gr?void 0:U&&B[0]===gr?[]:B,A];u?u(e,3,I):e(...I),B=se}finally{En=ce}}}else p.run()};return c&&c(K),p=new su(v),p.scheduler=a?()=>a(K,!1):K,A=W=>Yd(W,!1,p),b=p.onStop=()=>{const W=Pr.get(p);if(W){if(u)u(W,4);else for(const se of W)se();Pr.delete(p)}},e?i?K(!0):B=p.run():a?a(K.bind(null,!0),!0):p.run(),J.pause=p.pause.bind(p),J.resume=p.resume.bind(p),J.stop=J,J}function Lt(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Me(t))Lt(t.value,e,n);else if(te(t))for(let i=0;i<t.length;i++)Lt(t[i],e,n);else if(Jc(t)||qn(t))t.forEach(i=>{Lt(i,e,n)});else if(Qc(t)){for(const i in t)Lt(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Lt(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ki(t,e,n,i){try{return i?t(...i):t()}catch(s){Xr(s,e,n)}}function At(t,e,n,i){if(ie(t)){const s=Ki(t,e,n,i);return s&&Yc(s)&&s.catch(o=>{Xr(o,e,n)}),s}if(te(t)){const s=[];for(let o=0;o<t.length;o++)s.push(At(t[o],e,n,i));return s}}function Xr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ye;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p){for(let v=0;v<p.length;v++)if(p[v](t,u,f)===!1)return}c=c.parent}if(o){pn(),Ki(o,null,10,[t,u,f]),gn();return}}Qd(t,n,s,i,a)}function Qd(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Ve=[];let Et=-1;const Jn=[];let en=null,Wn=0;const Tu=Promise.resolve();let Or=null;function Su(t){const e=Or||Tu;return t?e.then(this?t.bind(this):t):e}function Zd(t){let e=Et+1,n=Ve.length;for(;e<n;){const i=e+n>>>1,s=Ve[i],o=ji(s);o<t||o===t&&s.flags&2?e=i+1:n=i}return e}function jo(t){if(!(t.flags&1)){const e=ji(t),n=Ve[Ve.length-1];!n||!(t.flags&2)&&e>=ji(n)?Ve.push(t):Ve.splice(Zd(e),0,t),t.flags|=1,Au()}}function Au(){Or||(Or=Tu.then(Cu))}function ep(t){te(t)?Jn.push(...t):en&&t.id===-1?en.splice(Wn+1,0,t):t.flags&1||(Jn.push(t),t.flags|=1),Au()}function al(t,e,n=Et+1){for(;n<Ve.length;n++){const i=Ve[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ve.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ru(t){if(Jn.length){const e=[...new Set(Jn)].sort((n,i)=>ji(n)-ji(i));if(Jn.length=0,en){en.push(...e);return}for(en=e,Wn=0;Wn<en.length;Wn++){const n=en[Wn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}en=null,Wn=0}}const ji=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cu(t){try{for(Et=0;Et<Ve.length;Et++){const e=Ve[Et];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ki(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Et<Ve.length;Et++){const e=Ve[Et];e&&(e.flags&=-2)}Et=-1,Ve.length=0,Ru(),Or=null,(Ve.length||Jn.length)&&Cu()}}let at=null,Pu=null;function kr(t){const e=at;return at=t,Pu=t&&t.type.__scopeId||null,e}function tp(t,e=at,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ml(-1);const o=kr(e);let a;try{a=t(...s)}finally{kr(o),i._d&&ml(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ks(t,e){if(at===null)return t;const n=ts(at),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=ye]=e[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Lt(a),i.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function wn(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[i];u&&(pn(),At(u,n,8,[t.el,c,t,e]),gn())}}const np=Symbol("_vte"),ip=t=>t.__isTeleport;function $o(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$o(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Gi(t,e){return ie(t)?Le({name:t.name},e,{setup:t}):t}function Ou(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Dr(t,e,n,i,s=!1){if(te(t)){t.forEach((x,U)=>Dr(x,e&&(te(e)?e[U]:e),n,i,s));return}if(Ri(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Dr(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?ts(i.component):i.el,a=s?null:o,{i:c,r:u}=t,f=e&&e.r,p=c.refs===ye?c.refs={}:c.refs,v=c.setupState,b=pe(v),A=v===ye?()=>!1:x=>ge(b,x);if(f!=null&&f!==u&&(Ae(f)?(p[f]=null,A(f)&&(v[f]=null)):Me(f)&&(f.value=null)),ie(u))Ki(u,c,12,[a,p]);else{const x=Ae(u),U=Me(u);if(x||U){const G=()=>{if(t.f){const J=x?A(u)?v[u]:p[u]:u.value;s?te(J)&&Ro(J,o):te(J)?J.includes(o)||J.push(o):x?(p[u]=[o],A(u)&&(v[u]=p[u])):(u.value=[o],t.k&&(p[t.k]=u.value))}else x?(p[u]=a,A(u)&&(v[u]=a)):U&&(u.value=a,t.k&&(p[t.k]=a))};a?(G.id=-1,Xe(G,n)):G()}}}Jr().requestIdleCallback;Jr().cancelIdleCallback;const Ri=t=>!!t.type.__asyncLoader,ku=t=>t.type.__isKeepAlive;function rp(t,e){Du(t,"a",e)}function sp(t,e){Du(t,"da",e)}function Du(t,e,n=Be){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ku(s.parent.vnode)&&op(i,e,n,s),s=s.parent}}function op(t,e,n,i){const s=Qr(e,t,i,!0);Ho(()=>{Ro(i[e],s)},n)}function Qr(t,e,n=Be,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{pn();const c=qi(n),u=At(e,n,t,a);return c(),gn(),u});return i?s.unshift(o):s.push(o),o}}const Kt=t=>(e,n=Be)=>{(!Hi||t==="sp")&&Qr(t,(...i)=>e(...i),n)},ap=Kt("bm"),Nu=Kt("m"),lp=Kt("bu"),cp=Kt("u"),up=Kt("bum"),Ho=Kt("um"),hp=Kt("sp"),fp=Kt("rtg"),dp=Kt("rtc");function pp(t,e=Be){Qr("ec",t,e)}const gp=Symbol.for("v-ndc"),so=t=>t?nh(t)?ts(t):so(t.parent):null,Ci=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>so(t.parent),$root:t=>so(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mu(t),$forceUpdate:t=>t.f||(t.f=()=>{jo(t.update)}),$nextTick:t=>t.n||(t.n=Su.bind(t.proxy)),$watch:t=>Lp.bind(t)}),Ds=(t,e)=>t!==ye&&!t.__isScriptSetup&&ge(t,e),mp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(Ds(i,e))return a[e]=1,i[e];if(s!==ye&&ge(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&ge(f,e))return a[e]=3,o[e];if(n!==ye&&ge(n,e))return a[e]=4,n[e];oo&&(a[e]=0)}}const p=Ci[e];let v,b;if(p)return e==="$attrs"&&xe(t.attrs,"get",""),p(t);if((v=c.__cssModules)&&(v=v[e]))return v;if(n!==ye&&ge(n,e))return a[e]=4,n[e];if(b=u.config.globalProperties,ge(b,e))return b[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return Ds(s,e)?(s[e]=n,!0):i!==ye&&ge(i,e)?(i[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==ye&&ge(t,a)||Ds(e,a)||(c=o[0])&&ge(c,a)||ge(i,a)||ge(Ci,a)||ge(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ll(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oo=!0;function vp(t){const e=Mu(t),n=t.proxy,i=t.ctx;oo=!1,e.beforeCreate&&cl(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:f,created:p,beforeMount:v,mounted:b,beforeUpdate:A,updated:x,activated:U,deactivated:G,beforeDestroy:J,beforeUnmount:B,destroyed:K,unmounted:W,render:se,renderTracked:ce,renderTriggered:I,errorCaptured:m,serverPrefetch:w,expose:E,inheritAttrs:T,components:R,directives:_,filters:Ue}=e;if(f&&yp(f,i,null),a)for(const oe in a){const re=a[oe];ie(re)&&(i[oe]=re.bind(n))}if(s){const oe=s.call(n,n);be(oe)&&(t.data=Yr(oe))}if(oo=!0,o)for(const oe in o){const re=o[oe],Ye=ie(re)?re.bind(n,n):ie(re.get)?re.get.bind(n,n):Tt,ct=!ie(re)&&ie(re.set)?re.set.bind(n):Tt,nt=ft({get:Ye,set:ct});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ie=>nt.value=Ie})}if(c)for(const oe in c)xu(c[oe],i,n,oe);if(u){const oe=ie(u)?u.call(n):u;Reflect.ownKeys(oe).forEach(re=>{wr(re,oe[re])})}p&&cl(p,t,"c");function Se(oe,re){te(re)?re.forEach(Ye=>oe(Ye.bind(n))):re&&oe(re.bind(n))}if(Se(ap,v),Se(Nu,b),Se(lp,A),Se(cp,x),Se(rp,U),Se(sp,G),Se(pp,m),Se(dp,ce),Se(fp,I),Se(up,B),Se(Ho,W),Se(hp,w),te(E))if(E.length){const oe=t.exposed||(t.exposed={});E.forEach(re=>{Object.defineProperty(oe,re,{get:()=>n[re],set:Ye=>n[re]=Ye})})}else t.exposed||(t.exposed={});se&&t.render===Tt&&(t.render=se),T!=null&&(t.inheritAttrs=T),R&&(t.components=R),_&&(t.directives=_),w&&Ou(t)}function yp(t,e,n=Tt){te(t)&&(t=ao(t));for(const i in t){const s=t[i];let o;be(s)?"default"in s?o=Bt(s.from||i,s.default,!0):o=Bt(s.from||i):o=Bt(s),Me(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function cl(t,e,n){At(te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function xu(t,e,n,i){let s=i.includes(".")?Ju(n,i):()=>n[i];if(Ae(t)){const o=e[t];ie(o)&&Ir(s,o)}else if(ie(t))Ir(s,t.bind(n));else if(be(t))if(te(t))t.forEach(o=>xu(o,e,n,i));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&Ir(s,o,t)}}function Mu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:!s.length&&!n&&!i?u=e:(u={},s.length&&s.forEach(f=>Nr(u,f,a,!0)),Nr(u,e,a)),be(e)&&o.set(e,u),u}function Nr(t,e,n,i=!1){const{mixins:s,extends:o}=e;o&&Nr(t,o,n,!0),s&&s.forEach(a=>Nr(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const c=_p[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const _p={data:ul,props:hl,emits:hl,methods:Ei,computed:Ei,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:Ei,directives:Ei,watch:Ip,provide:ul,inject:wp};function ul(t,e){return e?t?function(){return Le(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function wp(t,e){return Ei(ao(t),ao(e))}function ao(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function je(t,e){return t?[...new Set([].concat(t,e))]:e}function Ei(t,e){return t?Le(Object.create(null),t,e):e}function hl(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Le(Object.create(null),ll(t),ll(e??{})):e}function Ip(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const i in e)n[i]=je(t[i],e[i]);return n}function Lu(){return{app:null,config:{isNativeTag:pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ep=0;function bp(t,e){return function(i,s=null){ie(i)||(i=Le({},i)),s!=null&&!be(s)&&(s=null);const o=Lu(),a=new WeakSet,c=[];let u=!1;const f=o.app={_uid:Ep++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:ig,get config(){return o.config},set config(p){},use(p,...v){return a.has(p)||(p&&ie(p.install)?(a.add(p),p.install(f,...v)):ie(p)&&(a.add(p),p(f,...v))),f},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),f},component(p,v){return v?(o.components[p]=v,f):o.components[p]},directive(p,v){return v?(o.directives[p]=v,f):o.directives[p]},mount(p,v,b){if(!u){const A=f._ceVNode||qe(i,s);return A.appContext=o,b===!0?b="svg":b===!1&&(b=void 0),t(A,p,b),u=!0,f._container=p,p.__vue_app__=f,ts(A.component)}},onUnmount(p){c.push(p)},unmount(){u&&(At(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(p,v){return o.provides[p]=v,f},runWithContext(p){const v=Yn;Yn=f;try{return p()}finally{Yn=v}}};return f}}let Yn=null;function wr(t,e){if(Be){let n=Be.provides;const i=Be.parent&&Be.parent.provides;i===n&&(n=Be.provides=Object.create(i)),n[t]=e}}function Bt(t,e,n=!1){const i=Be||at;if(i||Yn){const s=Yn?Yn._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(i&&i.proxy):e}}const Uu={},Fu=()=>Object.create(Uu),ju=t=>Object.getPrototypeOf(t)===Uu;function Tp(t,e,n,i=!1){const s={},o=Fu();t.propsDefaults=Object.create(null),$u(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=i?s:_u(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Sp(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=pe(s),[u]=t.propsOptions;let f=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let v=0;v<p.length;v++){let b=p[v];if(Zr(t.emitsOptions,b))continue;const A=e[b];if(u)if(ge(o,b))A!==o[b]&&(o[b]=A,f=!0);else{const x=hn(b);s[x]=lo(u,c,x,A,t,!1)}else A!==o[b]&&(o[b]=A,f=!0)}}}else{$u(t,e,s,o)&&(f=!0);let p;for(const v in c)(!e||!ge(e,v)&&((p=xn(v))===v||!ge(e,p)))&&(u?n&&(n[v]!==void 0||n[p]!==void 0)&&(s[v]=lo(u,c,v,void 0,t,!0)):delete s[v]);if(o!==c)for(const v in o)(!e||!ge(e,v))&&(delete o[v],f=!0)}f&&Mt(t.attrs,"set","")}function $u(t,e,n,i){const[s,o]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(bi(u))continue;const f=e[u];let p;s&&ge(s,p=hn(u))?!o||!o.includes(p)?n[p]=f:(c||(c={}))[p]=f:Zr(t.emitsOptions,u)||(!(u in i)||f!==i[u])&&(i[u]=f,a=!0)}if(o){const u=pe(n),f=c||ye;for(let p=0;p<o.length;p++){const v=o[p];n[v]=lo(s,u,v,f[v],t,!ge(f,v))}}return a}function lo(t,e,n,i,s,o){const a=t[n];if(a!=null){const c=ge(a,"default");if(c&&i===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ie(u)){const{propsDefaults:f}=s;if(n in f)i=f[n];else{const p=qi(s);i=f[n]=u.call(null,e),p()}}else i=u;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!c?i=!1:a[1]&&(i===""||i===xn(n))&&(i=!0))}return i}const Ap=new WeakMap;function Hu(t,e,n=!1){const i=n?Ap:e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!ie(t)){const p=v=>{u=!0;const[b,A]=Hu(v,e,!0);Le(a,b),A&&c.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!u)return be(t)&&i.set(t,Gn),Gn;if(te(o))for(let p=0;p<o.length;p++){const v=hn(o[p]);fl(v)&&(a[v]=ye)}else if(o)for(const p in o){const v=hn(p);if(fl(v)){const b=o[p],A=a[v]=te(b)||ie(b)?{type:b}:Le({},b),x=A.type;let U=!1,G=!0;if(te(x))for(let J=0;J<x.length;++J){const B=x[J],K=ie(B)&&B.name;if(K==="Boolean"){U=!0;break}else K==="String"&&(G=!1)}else U=ie(x)&&x.name==="Boolean";A[0]=U,A[1]=G,(U||ge(A,"default"))&&c.push(v)}}const f=[a,c];return be(t)&&i.set(t,f),f}function fl(t){return t[0]!=="$"&&!bi(t)}const Vu=t=>t[0]==="_"||t==="$stable",Vo=t=>te(t)?t.map(bt):[bt(t)],Rp=(t,e,n)=>{if(e._n)return e;const i=tp((...s)=>Vo(e(...s)),n);return i._c=!1,i},Bu=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Vu(s))continue;const o=t[s];if(ie(o))e[s]=Rp(s,o,i);else if(o!=null){const a=Vo(o);e[s]=()=>a}}},Wu=(t,e)=>{const n=Vo(e);t.slots.default=()=>n},zu=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Cp=(t,e,n)=>{const i=t.slots=Fu();if(t.vnode.shapeFlag&32){const s=e._;s?(zu(i,e,n),n&&eu(i,"_",s,!0)):Bu(e,i)}else e&&Wu(t,e)},Pp=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=ye;if(i.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:zu(s,e,n):(o=!e.$stable,Bu(e,s)),a=e}else e&&(Wu(t,e),a={default:1});if(o)for(const c in s)!Vu(c)&&a[c]==null&&delete s[c]},Xe=Bp;function Op(t){return kp(t)}function kp(t,e){const n=Jr();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:p,parentNode:v,nextSibling:b,setScopeId:A=Tt,insertStaticContent:x}=t,U=(g,y,S,k=null,N=null,D=null,$=void 0,F=null,L=!!y.dynamicChildren)=>{if(g===y)return;g&&!wi(g,y)&&(k=O(g),Ie(g,N,D,!0),g=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:M,ref:Q,shapeFlag:V}=y;switch(M){case es:G(g,y,S,k);break;case Pn:J(g,y,S,k);break;case xs:g==null&&B(y,S,k,$);break;case ht:R(g,y,S,k,N,D,$,F,L);break;default:V&1?se(g,y,S,k,N,D,$,F,L):V&6?_(g,y,S,k,N,D,$,F,L):(V&64||V&128)&&M.process(g,y,S,k,N,D,$,F,L,q)}Q!=null&&N&&Dr(Q,g&&g.ref,D,y||g,!y)},G=(g,y,S,k)=>{if(g==null)i(y.el=c(y.children),S,k);else{const N=y.el=g.el;y.children!==g.children&&f(N,y.children)}},J=(g,y,S,k)=>{g==null?i(y.el=u(y.children||""),S,k):y.el=g.el},B=(g,y,S,k)=>{[g.el,g.anchor]=x(g.children,y,S,k,g.el,g.anchor)},K=({el:g,anchor:y},S,k)=>{let N;for(;g&&g!==y;)N=b(g),i(g,S,k),g=N;i(y,S,k)},W=({el:g,anchor:y})=>{let S;for(;g&&g!==y;)S=b(g),s(g),g=S;s(y)},se=(g,y,S,k,N,D,$,F,L)=>{y.type==="svg"?$="svg":y.type==="math"&&($="mathml"),g==null?ce(y,S,k,N,D,$,F,L):w(g,y,N,D,$,F,L)},ce=(g,y,S,k,N,D,$,F)=>{let L,M;const{props:Q,shapeFlag:V,transition:Y,dirs:ee}=g;if(L=g.el=a(g.type,D,Q&&Q.is,Q),V&8?p(L,g.children):V&16&&m(g.children,L,null,k,N,Ns(g,D),$,F),ee&&wn(g,null,k,"created"),I(L,g,g.scopeId,$,k),Q){for(const ne in Q)ne!=="value"&&!bi(ne)&&o(L,ne,null,Q[ne],D,k);"value"in Q&&o(L,"value",null,Q.value,D),(M=Q.onVnodeBeforeMount)&&It(M,k,g)}ee&&wn(g,null,k,"beforeMount");const Z=Dp(N,Y);Z&&Y.beforeEnter(L),i(L,y,S),((M=Q&&Q.onVnodeMounted)||Z||ee)&&Xe(()=>{M&&It(M,k,g),Z&&Y.enter(L),ee&&wn(g,null,k,"mounted")},N)},I=(g,y,S,k,N)=>{if(S&&A(g,S),k)for(let D=0;D<k.length;D++)A(g,k[D]);if(N){let D=N.subTree;if(y===D||Xu(D.type)&&(D.ssContent===y||D.ssFallback===y)){const $=N.vnode;I(g,$,$.scopeId,$.slotScopeIds,N.parent)}}},m=(g,y,S,k,N,D,$,F,L=0)=>{for(let M=L;M<g.length;M++){const Q=g[M]=F?tn(g[M]):bt(g[M]);U(null,Q,y,S,k,N,D,$,F)}},w=(g,y,S,k,N,D,$)=>{const F=y.el=g.el;let{patchFlag:L,dynamicChildren:M,dirs:Q}=y;L|=g.patchFlag&16;const V=g.props||ye,Y=y.props||ye;let ee;if(S&&In(S,!1),(ee=Y.onVnodeBeforeUpdate)&&It(ee,S,y,g),Q&&wn(y,g,S,"beforeUpdate"),S&&In(S,!0),(V.innerHTML&&Y.innerHTML==null||V.textContent&&Y.textContent==null)&&p(F,""),M?E(g.dynamicChildren,M,F,S,k,Ns(y,N),D):$||re(g,y,F,null,S,k,Ns(y,N),D,!1),L>0){if(L&16)T(F,V,Y,S,N);else if(L&2&&V.class!==Y.class&&o(F,"class",null,Y.class,N),L&4&&o(F,"style",V.style,Y.style,N),L&8){const Z=y.dynamicProps;for(let ne=0;ne<Z.length;ne++){const ae=Z[ne],Oe=V[ae],Re=Y[ae];(Re!==Oe||ae==="value")&&o(F,ae,Oe,Re,N,S)}}L&1&&g.children!==y.children&&p(F,y.children)}else!$&&M==null&&T(F,V,Y,S,N);((ee=Y.onVnodeUpdated)||Q)&&Xe(()=>{ee&&It(ee,S,y,g),Q&&wn(y,g,S,"updated")},k)},E=(g,y,S,k,N,D,$)=>{for(let F=0;F<y.length;F++){const L=g[F],M=y[F],Q=L.el&&(L.type===ht||!wi(L,M)||L.shapeFlag&70)?v(L.el):S;U(L,M,Q,null,k,N,D,$,!0)}},T=(g,y,S,k,N)=>{if(y!==S){if(y!==ye)for(const D in y)!bi(D)&&!(D in S)&&o(g,D,y[D],null,N,k);for(const D in S){if(bi(D))continue;const $=S[D],F=y[D];$!==F&&D!=="value"&&o(g,D,F,$,N,k)}"value"in S&&o(g,"value",y.value,S.value,N)}},R=(g,y,S,k,N,D,$,F,L)=>{const M=y.el=g?g.el:c(""),Q=y.anchor=g?g.anchor:c("");let{patchFlag:V,dynamicChildren:Y,slotScopeIds:ee}=y;ee&&(F=F?F.concat(ee):ee),g==null?(i(M,S,k),i(Q,S,k),m(y.children||[],S,Q,N,D,$,F,L)):V>0&&V&64&&Y&&g.dynamicChildren?(E(g.dynamicChildren,Y,S,N,D,$,F),(y.key!=null||N&&y===N.subTree)&&Ku(g,y,!0)):re(g,y,S,Q,N,D,$,F,L)},_=(g,y,S,k,N,D,$,F,L)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?N.ctx.activate(y,S,k,$,L):Ue(y,S,k,N,D,$,L):tt(g,y,L)},Ue=(g,y,S,k,N,D,$)=>{const F=g.component=Xp(g,k,N);if(ku(g)&&(F.ctx.renderer=q),Qp(F,!1,$),F.asyncDep){if(N&&N.registerDep(F,Se,$),!g.el){const L=F.subTree=qe(Pn);J(null,L,y,S)}}else Se(F,g,y,S,N,D,$)},tt=(g,y,S)=>{const k=y.component=g.component;if(Hp(g,y,S))if(k.asyncDep&&!k.asyncResolved){oe(k,y,S);return}else k.next=y,k.update();else y.el=g.el,k.vnode=y},Se=(g,y,S,k,N,D,$)=>{const F=()=>{if(g.isMounted){let{next:V,bu:Y,u:ee,parent:Z,vnode:ne}=g;{const ke=Gu(g);if(ke){V&&(V.el=ne.el,oe(g,V,$)),ke.asyncDep.then(()=>{g.isUnmounted||F()});return}}let ae=V,Oe;In(g,!1),V?(V.el=ne.el,oe(g,V,$)):V=ne,Y&&yr(Y),(Oe=V.props&&V.props.onVnodeBeforeUpdate)&&It(Oe,Z,V,ne),In(g,!0);const Re=pl(g),it=g.subTree;g.subTree=Re,U(it,Re,v(it.el),O(it),g,N,D),V.el=Re.el,ae===null&&Vp(g,Re.el),ee&&Xe(ee,N),(Oe=V.props&&V.props.onVnodeUpdated)&&Xe(()=>It(Oe,Z,V,ne),N)}else{let V;const{el:Y,props:ee}=y,{bm:Z,m:ne,parent:ae,root:Oe,type:Re}=g,it=Ri(y);In(g,!1),Z&&yr(Z),!it&&(V=ee&&ee.onVnodeBeforeMount)&&It(V,ae,y),In(g,!0);{Oe.ce&&Oe.ce._injectChildStyle(Re);const ke=g.subTree=pl(g);U(null,ke,S,k,g,N,D),y.el=ke.el}if(ne&&Xe(ne,N),!it&&(V=ee&&ee.onVnodeMounted)){const ke=y;Xe(()=>It(V,ae,ke),N)}(y.shapeFlag&256||ae&&Ri(ae.vnode)&&ae.vnode.shapeFlag&256)&&g.a&&Xe(g.a,N),g.isMounted=!0,y=S=k=null}};g.scope.on();const L=g.effect=new su(F);g.scope.off();const M=g.update=L.run.bind(L),Q=g.job=L.runIfDirty.bind(L);Q.i=g,Q.id=g.uid,L.scheduler=()=>jo(Q),In(g,!0),M()},oe=(g,y,S)=>{y.component=g;const k=g.vnode.props;g.vnode=y,g.next=null,Sp(g,y.props,k,S),Pp(g,y.children,S),pn(),al(g),gn()},re=(g,y,S,k,N,D,$,F,L=!1)=>{const M=g&&g.children,Q=g?g.shapeFlag:0,V=y.children,{patchFlag:Y,shapeFlag:ee}=y;if(Y>0){if(Y&128){ct(M,V,S,k,N,D,$,F,L);return}else if(Y&256){Ye(M,V,S,k,N,D,$,F,L);return}}ee&8?(Q&16&&ze(M,N,D),V!==M&&p(S,V)):Q&16?ee&16?ct(M,V,S,k,N,D,$,F,L):ze(M,N,D,!0):(Q&8&&p(S,""),ee&16&&m(V,S,k,N,D,$,F,L))},Ye=(g,y,S,k,N,D,$,F,L)=>{g=g||Gn,y=y||Gn;const M=g.length,Q=y.length,V=Math.min(M,Q);let Y;for(Y=0;Y<V;Y++){const ee=y[Y]=L?tn(y[Y]):bt(y[Y]);U(g[Y],ee,S,null,N,D,$,F,L)}M>Q?ze(g,N,D,!0,!1,V):m(y,S,k,N,D,$,F,L,V)},ct=(g,y,S,k,N,D,$,F,L)=>{let M=0;const Q=y.length;let V=g.length-1,Y=Q-1;for(;M<=V&&M<=Y;){const ee=g[M],Z=y[M]=L?tn(y[M]):bt(y[M]);if(wi(ee,Z))U(ee,Z,S,null,N,D,$,F,L);else break;M++}for(;M<=V&&M<=Y;){const ee=g[V],Z=y[Y]=L?tn(y[Y]):bt(y[Y]);if(wi(ee,Z))U(ee,Z,S,null,N,D,$,F,L);else break;V--,Y--}if(M>V){if(M<=Y){const ee=Y+1,Z=ee<Q?y[ee].el:k;for(;M<=Y;)U(null,y[M]=L?tn(y[M]):bt(y[M]),S,Z,N,D,$,F,L),M++}}else if(M>Y)for(;M<=V;)Ie(g[M],N,D,!0),M++;else{const ee=M,Z=M,ne=new Map;for(M=Z;M<=Y;M++){const Ce=y[M]=L?tn(y[M]):bt(y[M]);Ce.key!=null&&ne.set(Ce.key,M)}let ae,Oe=0;const Re=Y-Z+1;let it=!1,ke=0;const qt=new Array(Re);for(M=0;M<Re;M++)qt[M]=0;for(M=ee;M<=V;M++){const Ce=g[M];if(Oe>=Re){Ie(Ce,N,D,!0);continue}let rt;if(Ce.key!=null)rt=ne.get(Ce.key);else for(ae=Z;ae<=Y;ae++)if(qt[ae-Z]===0&&wi(Ce,y[ae])){rt=ae;break}rt===void 0?Ie(Ce,N,D,!0):(qt[rt-Z]=M+1,rt>=ke?ke=rt:it=!0,U(Ce,y[rt],S,null,N,D,$,F,L),Oe++)}const oi=it?Np(qt):Gn;for(ae=oi.length-1,M=Re-1;M>=0;M--){const Ce=Z+M,rt=y[Ce],er=Ce+1<Q?y[Ce+1].el:k;qt[M]===0?U(null,rt,S,er,N,D,$,F,L):it&&(ae<0||M!==oi[ae]?nt(rt,S,er,2):ae--)}}},nt=(g,y,S,k,N=null)=>{const{el:D,type:$,transition:F,children:L,shapeFlag:M}=g;if(M&6){nt(g.component.subTree,y,S,k);return}if(M&128){g.suspense.move(y,S,k);return}if(M&64){$.move(g,y,S,q);return}if($===ht){i(D,y,S);for(let V=0;V<L.length;V++)nt(L[V],y,S,k);i(g.anchor,y,S);return}if($===xs){K(g,y,S);return}if(k!==2&&M&1&&F)if(k===0)F.beforeEnter(D),i(D,y,S),Xe(()=>F.enter(D),N);else{const{leave:V,delayLeave:Y,afterLeave:ee}=F,Z=()=>i(D,y,S),ne=()=>{V(D,()=>{Z(),ee&&ee()})};Y?Y(D,Z,ne):ne()}else i(D,y,S)},Ie=(g,y,S,k=!1,N=!1)=>{const{type:D,props:$,ref:F,children:L,dynamicChildren:M,shapeFlag:Q,patchFlag:V,dirs:Y,cacheIndex:ee}=g;if(V===-2&&(N=!1),F!=null&&Dr(F,null,S,g,!0),ee!=null&&(y.renderCache[ee]=void 0),Q&256){y.ctx.deactivate(g);return}const Z=Q&1&&Y,ne=!Ri(g);let ae;if(ne&&(ae=$&&$.onVnodeBeforeUnmount)&&It(ae,y,g),Q&6)wt(g.component,S,k);else{if(Q&128){g.suspense.unmount(S,k);return}Z&&wn(g,null,y,"beforeUnmount"),Q&64?g.type.remove(g,y,S,q,k):M&&!M.hasOnce&&(D!==ht||V>0&&V&64)?ze(M,y,S,!1,!0):(D===ht&&V&384||!N&&Q&16)&&ze(L,y,S),k&&Ee(g)}(ne&&(ae=$&&$.onVnodeUnmounted)||Z)&&Xe(()=>{ae&&It(ae,y,g),Z&&wn(g,null,y,"unmounted")},S)},Ee=g=>{const{type:y,el:S,anchor:k,transition:N}=g;if(y===ht){Gt(S,k);return}if(y===xs){W(g);return}const D=()=>{s(S),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:$,delayLeave:F}=N,L=()=>$(S,D);F?F(g.el,D,L):L()}else D()},Gt=(g,y)=>{let S;for(;g!==y;)S=b(g),s(g),g=S;s(y)},wt=(g,y,S)=>{const{bum:k,scope:N,job:D,subTree:$,um:F,m:L,a:M}=g;dl(L),dl(M),k&&yr(k),N.stop(),D&&(D.flags|=8,Ie($,g,y,S)),F&&Xe(F,y),Xe(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},ze=(g,y,S,k=!1,N=!1,D=0)=>{for(let $=D;$<g.length;$++)Ie(g[$],y,S,k,N)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=b(g.anchor||g.el),S=y&&y[np];return S?b(S):y};let z=!1;const H=(g,y,S)=>{g==null?y._vnode&&Ie(y._vnode,null,null,!0):U(y._vnode||null,g,y,null,null,null,S),y._vnode=g,z||(z=!0,al(),Ru(),z=!1)},q={p:U,um:Ie,m:nt,r:Ee,mt:Ue,mc:m,pc:re,pbc:E,n:O,o:t};return{render:H,hydrate:void 0,createApp:bp(H)}}function Ns({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function In({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Dp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ku(t,e,n=!1){const i=t.children,s=e.children;if(te(i)&&te(s))for(let o=0;o<i.length;o++){const a=i[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=tn(s[o]),c.el=a.el),!n&&c.patchFlag!==-2&&Ku(a,c)),c.type===es&&(c.el=a.el)}}function Np(t){const e=t.slice(),n=[0];let i,s,o,a,c;const u=t.length;for(i=0;i<u;i++){const f=t[i];if(f!==0){if(s=n[n.length-1],t[s]<f){e[i]=s,n.push(i);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<f?o=c+1:a=c;f<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Gu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gu(e)}function dl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xp=Symbol.for("v-scx"),Mp=()=>Bt(xp);function Ir(t,e,n){return qu(t,e,n)}function qu(t,e,n=ye){const{immediate:i,deep:s,flush:o,once:a}=n,c=Le({},n),u=e&&i||!e&&o!=="post";let f;if(Hi){if(o==="sync"){const A=Mp();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Tt,A.resume=Tt,A.pause=Tt,A}}const p=Be;c.call=(A,x,U)=>At(A,p,x,U);let v=!1;o==="post"?c.scheduler=A=>{Xe(A,p&&p.suspense)}:o!=="sync"&&(v=!0,c.scheduler=(A,x)=>{x?A():jo(A)}),c.augmentJob=A=>{e&&(A.flags|=4),v&&(A.flags|=2,p&&(A.id=p.uid,A.i=p))};const b=Xd(t,e,c);return Hi&&(f?f.push(b):u&&b()),b}function Lp(t,e,n){const i=this.proxy,s=Ae(t)?t.includes(".")?Ju(i,t):()=>i[t]:t.bind(i,i);let o;ie(e)?o=e:(o=e.handler,n=e);const a=qi(this),c=qu(s,o.bind(i),n);return a(),c}function Ju(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Up=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${xn(e)}Modifiers`];function Fp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ye;let s=n;const o=e.startsWith("update:"),a=o&&Up(i,e.slice(7));a&&(a.trim&&(s=n.map(p=>Ae(p)?p.trim():p)),a.number&&(s=n.map(Zs)));let c,u=i[c=As(e)]||i[c=As(hn(e))];!u&&o&&(u=i[c=As(xn(e))]),u&&At(u,t,6,s);const f=i[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,At(f,t,6,s)}}function Yu(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const o=t.emits;let a={},c=!1;if(!ie(t)){const u=f=>{const p=Yu(f,e,!0);p&&(c=!0,Le(a,p))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!c?(be(t)&&i.set(t,null),null):(te(o)?o.forEach(u=>a[u]=null):Le(a,o),be(t)&&i.set(t,a),a)}function Zr(t,e){return!t||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,xn(e))||ge(t,e))}function pl(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:p,props:v,data:b,setupState:A,ctx:x,inheritAttrs:U}=t,G=kr(t);let J,B;try{if(n.shapeFlag&4){const W=s||i,se=W;J=bt(f.call(se,W,p,v,A,b,x)),B=c}else{const W=e;J=bt(W.length>1?W(v,{attrs:c,slots:a,emit:u}):W(v,null)),B=e.props?c:jp(c)}}catch(W){Pi.length=0,Xr(W,t,1),J=qe(Pn)}let K=J;if(B&&U!==!1){const W=Object.keys(B),{shapeFlag:se}=K;W.length&&se&7&&(o&&W.some(Ao)&&(B=$p(B,o)),K=ei(K,B,!1,!0))}return n.dirs&&(K=ei(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&$o(K,n.transition),J=K,kr(G),J}const jp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kr(n))&&((e||(e={}))[n]=t[n]);return e},$p=(t,e)=>{const n={};for(const i in t)(!Ao(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Hp(t,e,n){const{props:i,children:s,component:o}=t,{props:a,children:c,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return i?gl(i,a,f):!!a;if(u&8){const p=e.dynamicProps;for(let v=0;v<p.length;v++){const b=p[v];if(a[b]!==i[b]&&!Zr(f,b))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:i===a?!1:i?a?gl(i,a,f):!0:!!a;return!1}function gl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(e[o]!==t[o]&&!Zr(n,o))return!0}return!1}function Vp({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xu=t=>t.__isSuspense;function Bp(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):ep(t)}const ht=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),Pn=Symbol.for("v-cmt"),xs=Symbol.for("v-stc"),Pi=[];let Ze=null;function Tn(t=!1){Pi.push(Ze=t?null:[])}function Wp(){Pi.pop(),Ze=Pi[Pi.length-1]||null}let $i=1;function ml(t,e=!1){$i+=t,t<0&&Ze&&e&&(Ze.hasOnce=!0)}function Qu(t){return t.dynamicChildren=$i>0?Ze||Gn:null,Wp(),$i>0&&Ze&&Ze.push(t),t}function Oi(t,e,n,i,s,o){return Qu(fe(t,e,n,i,s,o,!0))}function Zu(t,e,n,i,s){return Qu(qe(t,e,n,i,s,!0))}function xr(t){return t?t.__v_isVNode===!0:!1}function wi(t,e){return t.type===e.type&&t.key===e.key}const eh=({key:t})=>t??null,Er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||Me(t)||ie(t)?{i:at,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,i=0,s=null,o=t===ht?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&eh(e),ref:e&&Er(e),scopeId:Pu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return c?(Bo(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Ae(n)?8:16),$i>0&&!a&&Ze&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&Ze.push(u),u}const qe=zp;function zp(t,e=null,n=null,i=0,s=null,o=!1){if((!t||t===gp)&&(t=Pn),xr(t)){const c=ei(t,e,!0);return n&&Bo(c,n),$i>0&&!o&&Ze&&(c.shapeFlag&6?Ze[Ze.indexOf(t)]=c:Ze.push(c)),c.patchFlag=-2,c}if(ng(t)&&(t=t.__vccOpts),e){e=Kp(e);let{class:c,style:u}=e;c&&!Ae(c)&&(e.class=Oo(c)),be(u)&&(Fo(u)&&!te(u)&&(u=Le({},u)),e.style=Po(u))}const a=Ae(t)?1:Xu(t)?128:ip(t)?64:be(t)?4:ie(t)?2:0;return fe(t,e,n,i,s,a,o,!0)}function Kp(t){return t?Fo(t)||ju(t)?Le({},t):t:null}function ei(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,f=e?qp(s||{},e):s,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&eh(f),ref:e&&e.ref?n&&o?te(o)?o.concat(Er(e)):[o,Er(e)]:Er(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ei(t.ssContent),ssFallback:t.ssFallback&&ei(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&i&&$o(p,u.clone(p)),p}function th(t=" ",e=0){return qe(es,null,t,e)}function Gp(t="",e=!1){return e?(Tn(),Zu(Pn,null,t)):qe(Pn,null,t)}function bt(t){return t==null||typeof t=="boolean"?qe(Pn):te(t)?qe(ht,null,t.slice()):xr(t)?tn(t):qe(es,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ei(t)}function Bo(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Bo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ju(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:at},n=32):(e=String(e),i&64?(n=16,e=[th(e)]):n=8);t.children=e,t.shapeFlag|=n}function qp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Oo([e.class,i.class]));else if(s==="style")e.style=Po([e.style,i.style]);else if(Kr(s)){const o=e[s],a=i[s];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=i[s])}return e}function It(t,e,n,i=null){At(t,e,7,[n,i])}const Jp=Lu();let Yp=0;function Xp(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Jp,o={uid:Yp++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hu(i,s),emitsOptions:Yu(i,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Fp.bind(null,o),t.ce&&t.ce(o),o}let Be=null,Mr,co;{const t=Jr(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};Mr=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),co=e("__VUE_SSR_SETTERS__",n=>Hi=n)}const qi=t=>{const e=Be;return Mr(t),t.scope.on(),()=>{t.scope.off(),Mr(e)}},vl=()=>{Be&&Be.scope.off(),Mr(null)};function nh(t){return t.vnode.shapeFlag&4}let Hi=!1;function Qp(t,e=!1,n=!1){e&&co(e);const{props:i,children:s}=t.vnode,o=nh(t);Tp(t,i,o,e),Cp(t,s,n);const a=o?Zp(t,e):void 0;return e&&co(!1),a}function Zp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mp);const{setup:i}=n;if(i){pn();const s=t.setupContext=i.length>1?tg(t):null,o=qi(t),a=Ki(i,t,0,[t.props,s]),c=Yc(a);if(gn(),o(),(c||t.sp)&&!Ri(t)&&Ou(t),c){if(a.then(vl,vl),e)return a.then(u=>{yl(t,u)}).catch(u=>{Xr(u,t,0)});t.asyncDep=a}else yl(t,a)}else ih(t)}function yl(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=bu(e)),ih(t)}function ih(t,e,n){const i=t.type;t.render||(t.render=i.render||Tt);{const s=qi(t);pn();try{vp(t)}finally{gn(),s()}}}const eg={get(t,e){return xe(t,"get",""),t[e]}};function tg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,eg),slots:t.slots,emit:t.emit,expose:e}}function ts(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bu(Iu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ci)return Ci[n](t)},has(e,n){return n in e||n in Ci}})):t.proxy}function ng(t){return ie(t)&&"__vccOpts"in t}const ft=(t,e)=>Jd(t,e,Hi);function rh(t,e,n){const i=arguments.length;return i===2?be(e)&&!te(e)?xr(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&xr(n)&&(n=[n]),qe(t,e,n))}const ig="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uo;const _l=typeof window<"u"&&window.trustedTypes;if(_l)try{uo=_l.createPolicy("vue",{createHTML:t=>t})}catch{}const sh=uo?t=>uo.createHTML(t):t=>t,rg="http://www.w3.org/2000/svg",sg="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,wl=xt&&xt.createElement("template"),og={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?xt.createElementNS(rg,t):e==="mathml"?xt.createElementNS(sg,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{wl.innerHTML=sh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const c=wl.content;if(i==="svg"||i==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ag=Symbol("_vtc");function lg(t,e,n){const i=t[ag];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Il=Symbol("_vod"),cg=Symbol("_vsh"),ug=Symbol(""),hg=/(^|;)\s*display\s*:/;function fg(t,e,n){const i=t.style,s=Ae(n);let o=!1;if(n&&!s){if(e)if(Ae(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&br(i,c,"")}else for(const a in e)n[a]==null&&br(i,a,"");for(const a in n)a==="display"&&(o=!0),br(i,a,n[a])}else if(s){if(e!==n){const a=i[ug];a&&(n+=";"+a),i.cssText=n,o=hg.test(n)}}else e&&t.removeAttribute("style");Il in t&&(t[Il]=o?i.display:"",t[cg]&&(i.display="none"))}const El=/\s*!important$/;function br(t,e,n){if(te(n))n.forEach(i=>br(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=dg(t,e);El.test(n)?t.setProperty(xn(i),n.replace(El,""),"important"):t[i]=n}}const bl=["Webkit","Moz","ms"],Ms={};function dg(t,e){const n=Ms[e];if(n)return n;let i=hn(e);if(i!=="filter"&&i in t)return Ms[e]=i;i=Zc(i);for(let s=0;s<bl.length;s++){const o=bl[s]+i;if(o in t)return Ms[e]=o}return e}const Tl="http://www.w3.org/1999/xlink";function Sl(t,e,n,i,s,o=Td(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tl,e.slice(6,e.length)):t.setAttributeNS(Tl,e,n):n==null||o&&!tu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":dn(n)?String(n):n)}function Al(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function zn(t,e,n,i){t.addEventListener(e,n,i)}function pg(t,e,n,i){t.removeEventListener(e,n,i)}const Rl=Symbol("_vei");function gg(t,e,n,i,s=null){const o=t[Rl]||(t[Rl]={}),a=o[e];if(i&&a)a.value=i;else{const[c,u]=mg(e);if(i){const f=o[e]=_g(i,s);zn(t,c,f,u)}else a&&(pg(t,c,a,u),o[e]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function mg(t){let e;if(Cl.test(t)){e={};let i;for(;i=t.match(Cl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let Ls=0;const vg=Promise.resolve(),yg=()=>Ls||(vg.then(()=>Ls=0),Ls=Date.now());function _g(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;At(wg(i,n.value),e,5,[i])};return n.value=t,n.attached=yg(),n}function wg(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Pl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ig=(t,e,n,i,s,o)=>{const a=s==="svg";e==="class"?lg(t,i,a):e==="style"?fg(t,n,i):Kr(e)?Ao(e)||gg(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Eg(t,e,i,a))?(Al(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sl(t,e,i,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ae(i))?Al(t,hn(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Sl(t,e,i,a))};function Eg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pl(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pl(e)&&Ae(n)?!1:e in t}const Ol=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>yr(e,n):e};function bg(t){t.target.composing=!0}function kl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Us=Symbol("_assign"),Fs={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Us]=Ol(s);const o=i||s.props&&s.props.type==="number";zn(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Zs(c)),t[Us](c)}),n&&zn(t,"change",()=>{t.value=t.value.trim()}),e||(zn(t,"compositionstart",bg),zn(t,"compositionend",kl),zn(t,"change",kl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},a){if(t[Us]=Ol(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Zs(t.value):t.value,u=e??"";c!==u&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===u)||(t.value=u))}},Tg=Le({patchProp:Ig},og);let Dl;function Sg(){return Dl||(Dl=Op(Tg))}const Ag=(...t)=>{const e=Sg().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Cg(i);if(!s)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Rg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Rg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Cg(t){return Ae(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Pg=Symbol();var Nl;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nl||(Nl={}));function Og(){const t=Sd(!0),e=t.run(()=>Ft({}));let n=[],i=[];const s=Iu({install(o){s._a=o,o.provide(Pg,s),o.config.globalProperties.$pinia=s,i.forEach(a=>n.push(a)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof document<"u";function oh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&oh(t.default)}const de=Object.assign;function js(t,e){const n={};for(const i in e){const s=e[i];n[i]=vt(s)?s.map(t):t(s)}return n}const ki=()=>{},vt=Array.isArray,ah=/#/g,Dg=/&/g,Ng=/\//g,xg=/=/g,Mg=/\?/g,lh=/\+/g,Lg=/%5B/g,Ug=/%5D/g,ch=/%5E/g,Fg=/%60/g,uh=/%7B/g,jg=/%7C/g,hh=/%7D/g,$g=/%20/g;function Wo(t){return encodeURI(""+t).replace(jg,"|").replace(Lg,"[").replace(Ug,"]")}function Hg(t){return Wo(t).replace(uh,"{").replace(hh,"}").replace(ch,"^")}function ho(t){return Wo(t).replace(lh,"%2B").replace($g,"+").replace(ah,"%23").replace(Dg,"%26").replace(Fg,"`").replace(uh,"{").replace(hh,"}").replace(ch,"^")}function Vg(t){return ho(t).replace(xg,"%3D")}function Bg(t){return Wo(t).replace(ah,"%23").replace(Mg,"%3F")}function Wg(t){return t==null?"":Bg(t).replace(Ng,"%2F")}function Vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zg=/\/$/,Kg=t=>t.replace(zg,"");function $s(t,e,n="/"){let i,s={},o="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(i=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),s=t(o)),c>-1&&(i=i||e.slice(0,c),a=e.slice(c,e.length)),i=Yg(i??e,n),{fullPath:i+(o&&"?")+o+a,path:i,query:s,hash:Vi(a)}}function Gg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qg(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&ti(e.matched[i],n.matched[s])&&fh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ti(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jg(t[n],e[n]))return!1;return!0}function Jg(t,e){return vt(t)?Ml(t,e):vt(e)?Ml(e,t):t===e}function Ml(t,e){return vt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Yg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=n.length-1,a,c;for(a=0;a<i.length;a++)if(c=i[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(a).join("/")}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var Di;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Di||(Di={}));function Xg(t){if(!t)if(Kn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Kg(t)}const Qg=/^[^#]+#/;function Zg(t,e){return t.replace(Qg,"#")+e}function em(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ns=()=>({left:window.scrollX,top:window.scrollY});function tm(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=em(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ll(t,e){return(history.state?history.state.position-e:-1)+t}const fo=new Map;function nm(t,e){fo.set(t,e)}function im(t){const e=fo.get(t);return fo.delete(t),e}let rm=()=>location.protocol+"//"+location.host;function dh(t,e){const{pathname:n,search:i,hash:s}=e,o=t.indexOf("#");if(o>-1){let c=s.includes(t.slice(o))?t.slice(o).length:1,u=s.slice(c);return u[0]!=="/"&&(u="/"+u),xl(u,"")}return xl(n,t)+i+s}function sm(t,e,n,i){let s=[],o=[],a=null;const c=({state:b})=>{const A=dh(t,location),x=n.value,U=e.value;let G=0;if(b){if(n.value=A,e.value=b,a&&a===x){a=null;return}G=U?b.position-U.position:0}else i(A);s.forEach(J=>{J(n.value,x,{delta:G,type:Bi.pop,direction:G?G>0?Di.forward:Di.back:Di.unknown})})};function u(){a=n.value}function f(b){s.push(b);const A=()=>{const x=s.indexOf(b);x>-1&&s.splice(x,1)};return o.push(A),A}function p(){const{history:b}=window;b.state&&b.replaceState(de({},b.state,{scroll:ns()}),"")}function v(){for(const b of o)b();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:u,listen:f,destroy:v}}function Ul(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?ns():null}}function om(t){const{history:e,location:n}=window,i={value:dh(t,n)},s={value:e.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,p){const v=t.indexOf("#"),b=v>-1?(n.host&&document.querySelector("base")?t:t.slice(v))+u:rm()+t+u;try{e[p?"replaceState":"pushState"](f,"",b),s.value=f}catch(A){console.error(A),n[p?"replace":"assign"](b)}}function a(u,f){const p=de({},e.state,Ul(s.value.back,u,s.value.forward,!0),f,{position:s.value.position});o(u,p,!0),i.value=u}function c(u,f){const p=de({},s.value,e.state,{forward:u,scroll:ns()});o(p.current,p,!0);const v=de({},Ul(i.value,u,null),{position:p.position+1},f);o(u,v,!1),i.value=u}return{location:i,state:s,push:c,replace:a}}function am(t){t=Xg(t);const e=om(t),n=sm(t,e.state,e.location,e.replace);function i(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=de({location:"",base:t,go:i,createHref:Zg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lm(t){return typeof t=="string"||t&&typeof t=="object"}function ph(t){return typeof t=="string"||typeof t=="symbol"}const gh=Symbol("");var Fl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fl||(Fl={}));function ni(t,e){return de(new Error,{type:t,[gh]:!0},e)}function Nt(t,e){return t instanceof Error&&gh in t&&(e==null||!!(t.type&e))}const jl="[^/]+?",cm={sensitive:!1,strict:!1,start:!0,end:!0},um=/[.+*?^${}()[\]/\\]/g;function hm(t,e){const n=de({},cm,e),i=[];let s=n.start?"^":"";const o=[];for(const f of t){const p=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let v=0;v<f.length;v++){const b=f[v];let A=40+(n.sensitive?.25:0);if(b.type===0)v||(s+="/"),s+=b.value.replace(um,"\\$&"),A+=40;else if(b.type===1){const{value:x,repeatable:U,optional:G,regexp:J}=b;o.push({name:x,repeatable:U,optional:G});const B=J||jl;if(B!==jl){A+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+W.message)}}let K=U?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;v||(K=G&&f.length<2?`(?:/${K})`:"/"+K),G&&(K+="?"),s+=K,A+=20,G&&(A+=-8),U&&(A+=-20),B===".*"&&(A+=-50)}p.push(A)}i.push(p)}if(n.strict&&n.end){const f=i.length-1;i[f][i[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(f){const p=f.match(a),v={};if(!p)return null;for(let b=1;b<p.length;b++){const A=p[b]||"",x=o[b-1];v[x.name]=A&&x.repeatable?A.split("/"):A}return v}function u(f){let p="",v=!1;for(const b of t){(!v||!p.endsWith("/"))&&(p+="/"),v=!1;for(const A of b)if(A.type===0)p+=A.value;else if(A.type===1){const{value:x,repeatable:U,optional:G}=A,J=x in f?f[x]:"";if(vt(J)&&!U)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=vt(J)?J.join("/"):J;if(!B)if(G)b.length<2&&(p.endsWith("/")?p=p.slice(0,-1):v=!0);else throw new Error(`Missing required param "${x}"`);p+=B}}return p||"/"}return{re:a,score:i,keys:o,parse:c,stringify:u}}function fm(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function mh(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const o=fm(i[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-i.length)===1){if($l(i))return 1;if($l(s))return-1}return s.length-i.length}function $l(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dm={type:0,value:""},pm=/[a-zA-Z0-9_]/;function gm(t){if(!t)return[[]];if(t==="/")return[[dm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=0,i=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let c=0,u,f="",p="";function v(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:p,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function b(){f+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:u==="/"?(f&&v(),a()):u===":"?(v(),n=1):b();break;case 4:b(),n=i;break;case 1:u==="("?n=2:pm.test(u)?b():(v(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+u:n=3:p+=u;break;case 3:v(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),v(),a(),s}function mm(t,e,n){const i=hm(gm(t.path),n),s=de(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vm(t,e){const n=[],i=new Map;e=Wl({strict:!1,end:!0,sensitive:!1},e);function s(v){return i.get(v)}function o(v,b,A){const x=!A,U=Vl(v);U.aliasOf=A&&A.record;const G=Wl(e,v),J=[U];if("alias"in v){const W=typeof v.alias=="string"?[v.alias]:v.alias;for(const se of W)J.push(Vl(de({},U,{components:A?A.record.components:U.components,path:se,aliasOf:A?A.record:U})))}let B,K;for(const W of J){const{path:se}=W;if(b&&se[0]!=="/"){const ce=b.record.path,I=ce[ce.length-1]==="/"?"":"/";W.path=b.record.path+(se&&I+se)}if(B=mm(W,b,G),A?A.alias.push(B):(K=K||B,K!==B&&K.alias.push(B),x&&v.name&&!Bl(B)&&a(v.name)),vh(B)&&u(B),U.children){const ce=U.children;for(let I=0;I<ce.length;I++)o(ce[I],B,A&&A.children[I])}A=A||B}return K?()=>{a(K)}:ki}function a(v){if(ph(v)){const b=i.get(v);b&&(i.delete(v),n.splice(n.indexOf(b),1),b.children.forEach(a),b.alias.forEach(a))}else{const b=n.indexOf(v);b>-1&&(n.splice(b,1),v.record.name&&i.delete(v.record.name),v.children.forEach(a),v.alias.forEach(a))}}function c(){return n}function u(v){const b=wm(v,n);n.splice(b,0,v),v.record.name&&!Bl(v)&&i.set(v.record.name,v)}function f(v,b){let A,x={},U,G;if("name"in v&&v.name){if(A=i.get(v.name),!A)throw ni(1,{location:v});G=A.record.name,x=de(Hl(b.params,A.keys.filter(K=>!K.optional).concat(A.parent?A.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),v.params&&Hl(v.params,A.keys.map(K=>K.name))),U=A.stringify(x)}else if(v.path!=null)U=v.path,A=n.find(K=>K.re.test(U)),A&&(x=A.parse(U),G=A.record.name);else{if(A=b.name?i.get(b.name):n.find(K=>K.re.test(b.path)),!A)throw ni(1,{location:v,currentLocation:b});G=A.record.name,x=de({},b.params,v.params),U=A.stringify(x)}const J=[];let B=A;for(;B;)J.unshift(B.record),B=B.parent;return{name:G,path:U,params:x,matched:J,meta:_m(J)}}t.forEach(v=>o(v));function p(){n.length=0,i.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:p,getRoutes:c,getRecordMatcher:s}}function Hl(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Vl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ym(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ym(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Bl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _m(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Wl(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function wm(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;mh(t,e[o])<0?i=o:n=o+1}const s=Im(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Im(t){let e=t;for(;e=e.parent;)if(vh(e)&&mh(t,e)===0)return e}function vh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Em(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(lh," "),a=o.indexOf("="),c=Vi(a<0?o:o.slice(0,a)),u=a<0?null:Vi(o.slice(a+1));if(c in e){let f=e[c];vt(f)||(f=e[c]=[f]),f.push(u)}else e[c]=u}return e}function zl(t){let e="";for(let n in t){const i=t[n];if(n=Vg(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(vt(i)?i.map(o=>o&&ho(o)):[i&&ho(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function bm(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=vt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Tm=Symbol(""),Kl=Symbol(""),zo=Symbol(""),yh=Symbol(""),po=Symbol("");function Ii(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nn(t,e,n,i,s,o=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((c,u)=>{const f=b=>{b===!1?u(ni(4,{from:n,to:e})):b instanceof Error?u(b):lm(b)?u(ni(2,{from:e,to:b})):(a&&i.enterCallbacks[s]===a&&typeof b=="function"&&a.push(b),c())},p=o(()=>t.call(i&&i.instances[s],e,n,f));let v=Promise.resolve(p);t.length<3&&(v=v.then(f)),v.catch(b=>u(b))})}function Hs(t,e,n,i,s=o=>o()){const o=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(oh(u)){const p=(u.__vccOpts||u)[e];p&&o.push(nn(p,n,i,a,c,s))}else{let f=u();o.push(()=>f.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const v=kg(p)?p.default:p;a.mods[c]=p,a.components[c]=v;const A=(v.__vccOpts||v)[e];return A&&nn(A,n,i,a,c,s)()}))}}return o}function Gl(t){const e=Bt(zo),n=Bt(yh),i=ft(()=>{const u=Vt(t.to);return e.resolve(u)}),s=ft(()=>{const{matched:u}=i.value,{length:f}=u,p=u[f-1],v=n.matched;if(!p||!v.length)return-1;const b=v.findIndex(ti.bind(null,p));if(b>-1)return b;const A=ql(u[f-2]);return f>1&&ql(p)===A&&v[v.length-1].path!==A?v.findIndex(ti.bind(null,u[f-2])):b}),o=ft(()=>s.value>-1&&Pm(n.params,i.value.params)),a=ft(()=>s.value>-1&&s.value===n.matched.length-1&&fh(n.params,i.value.params));function c(u={}){if(Cm(u)){const f=e[Vt(t.replace)?"replace":"push"](Vt(t.to)).catch(ki);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:i,href:ft(()=>i.value.href),isActive:o,isExactActive:a,navigate:c}}function Sm(t){return t.length===1?t[0]:t}const Am=Gi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gl,setup(t,{slots:e}){const n=Yr(Gl(t)),{options:i}=Bt(zo),s=ft(()=>({[Jl(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jl(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&Sm(e.default(n));return t.custom?o:rh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Rm=Am;function Cm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Pm(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!vt(s)||s.length!==i.length||i.some((o,a)=>o!==s[a]))return!1}return!0}function ql(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jl=(t,e,n)=>t??e??n,Om=Gi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Bt(po),s=ft(()=>t.route||i.value),o=Bt(Kl,0),a=ft(()=>{let f=Vt(o);const{matched:p}=s.value;let v;for(;(v=p[f])&&!v.components;)f++;return f}),c=ft(()=>s.value.matched[a.value]);wr(Kl,ft(()=>a.value+1)),wr(Tm,c),wr(po,s);const u=Ft();return Ir(()=>[u.value,c.value,t.name],([f,p,v],[b,A,x])=>{p&&(p.instances[v]=f,A&&A!==p&&f&&f===b&&(p.leaveGuards.size||(p.leaveGuards=A.leaveGuards),p.updateGuards.size||(p.updateGuards=A.updateGuards))),f&&p&&(!A||!ti(p,A)||!b)&&(p.enterCallbacks[v]||[]).forEach(U=>U(f))},{flush:"post"}),()=>{const f=s.value,p=t.name,v=c.value,b=v&&v.components[p];if(!b)return Yl(n.default,{Component:b,route:f});const A=v.props[p],x=A?A===!0?f.params:typeof A=="function"?A(f):A:null,G=rh(b,de({},x,e,{onVnodeUnmounted:J=>{J.component.isUnmounted&&(v.instances[p]=null)},ref:u}));return Yl(n.default,{Component:G,route:f})||G}}});function Yl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _h=Om;function km(t){const e=vm(t.routes,t),n=t.parseQuery||Em,i=t.stringifyQuery||zl,s=t.history,o=Ii(),a=Ii(),c=Ii(),u=zd(Qt);let f=Qt;Kn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=js.bind(null,O=>""+O),v=js.bind(null,Wg),b=js.bind(null,Vi);function A(O,z){let H,q;return ph(O)?(H=e.getRecordMatcher(O),q=z):q=O,e.addRoute(q,H)}function x(O){const z=e.getRecordMatcher(O);z&&e.removeRoute(z)}function U(){return e.getRoutes().map(O=>O.record)}function G(O){return!!e.getRecordMatcher(O)}function J(O,z){if(z=de({},z||u.value),typeof O=="string"){const S=$s(n,O,z.path),k=e.resolve({path:S.path},z),N=s.createHref(S.fullPath);return de(S,k,{params:b(k.params),hash:Vi(S.hash),redirectedFrom:void 0,href:N})}let H;if(O.path!=null)H=de({},O,{path:$s(n,O.path,z.path).path});else{const S=de({},O.params);for(const k in S)S[k]==null&&delete S[k];H=de({},O,{params:v(S)}),z.params=v(z.params)}const q=e.resolve(H,z),ue=O.hash||"";q.params=p(b(q.params));const g=Gg(i,de({},O,{hash:Hg(ue),path:q.path})),y=s.createHref(g);return de({fullPath:g,hash:ue,query:i===zl?bm(O.query):O.query||{}},q,{redirectedFrom:void 0,href:y})}function B(O){return typeof O=="string"?$s(n,O,u.value.path):de({},O)}function K(O,z){if(f!==O)return ni(8,{from:z,to:O})}function W(O){return I(O)}function se(O){return W(de(B(O),{replace:!0}))}function ce(O){const z=O.matched[O.matched.length-1];if(z&&z.redirect){const{redirect:H}=z;let q=typeof H=="function"?H(O):H;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=B(q):{path:q},q.params={}),de({query:O.query,hash:O.hash,params:q.path!=null?{}:O.params},q)}}function I(O,z){const H=f=J(O),q=u.value,ue=O.state,g=O.force,y=O.replace===!0,S=ce(H);if(S)return I(de(B(S),{state:typeof S=="object"?de({},ue,S.state):ue,force:g,replace:y}),z||H);const k=H;k.redirectedFrom=z;let N;return!g&&qg(i,q,H)&&(N=ni(16,{to:k,from:q}),nt(q,q,!0,!1)),(N?Promise.resolve(N):E(k,q)).catch(D=>Nt(D)?Nt(D,2)?D:ct(D):re(D,k,q)).then(D=>{if(D){if(Nt(D,2))return I(de({replace:y},B(D.to),{state:typeof D.to=="object"?de({},ue,D.to.state):ue,force:g}),z||k)}else D=R(k,q,!0,y,ue);return T(k,q,D),D})}function m(O,z){const H=K(O,z);return H?Promise.reject(H):Promise.resolve()}function w(O){const z=Gt.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(O):O()}function E(O,z){let H;const[q,ue,g]=Dm(O,z);H=Hs(q.reverse(),"beforeRouteLeave",O,z);for(const S of q)S.leaveGuards.forEach(k=>{H.push(nn(k,O,z))});const y=m.bind(null,O,z);return H.push(y),ze(H).then(()=>{H=[];for(const S of o.list())H.push(nn(S,O,z));return H.push(y),ze(H)}).then(()=>{H=Hs(ue,"beforeRouteUpdate",O,z);for(const S of ue)S.updateGuards.forEach(k=>{H.push(nn(k,O,z))});return H.push(y),ze(H)}).then(()=>{H=[];for(const S of g)if(S.beforeEnter)if(vt(S.beforeEnter))for(const k of S.beforeEnter)H.push(nn(k,O,z));else H.push(nn(S.beforeEnter,O,z));return H.push(y),ze(H)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),H=Hs(g,"beforeRouteEnter",O,z,w),H.push(y),ze(H))).then(()=>{H=[];for(const S of a.list())H.push(nn(S,O,z));return H.push(y),ze(H)}).catch(S=>Nt(S,8)?S:Promise.reject(S))}function T(O,z,H){c.list().forEach(q=>w(()=>q(O,z,H)))}function R(O,z,H,q,ue){const g=K(O,z);if(g)return g;const y=z===Qt,S=Kn?history.state:{};H&&(q||y?s.replace(O.fullPath,de({scroll:y&&S&&S.scroll},ue)):s.push(O.fullPath,ue)),u.value=O,nt(O,z,H,y),ct()}let _;function Ue(){_||(_=s.listen((O,z,H)=>{if(!wt.listening)return;const q=J(O),ue=ce(q);if(ue){I(de(ue,{replace:!0,force:!0}),q).catch(ki);return}f=q;const g=u.value;Kn&&nm(Ll(g.fullPath,H.delta),ns()),E(q,g).catch(y=>Nt(y,12)?y:Nt(y,2)?(I(de(B(y.to),{force:!0}),q).then(S=>{Nt(S,20)&&!H.delta&&H.type===Bi.pop&&s.go(-1,!1)}).catch(ki),Promise.reject()):(H.delta&&s.go(-H.delta,!1),re(y,q,g))).then(y=>{y=y||R(q,g,!1),y&&(H.delta&&!Nt(y,8)?s.go(-H.delta,!1):H.type===Bi.pop&&Nt(y,20)&&s.go(-1,!1)),T(q,g,y)}).catch(ki)}))}let tt=Ii(),Se=Ii(),oe;function re(O,z,H){ct(O);const q=Se.list();return q.length?q.forEach(ue=>ue(O,z,H)):console.error(O),Promise.reject(O)}function Ye(){return oe&&u.value!==Qt?Promise.resolve():new Promise((O,z)=>{tt.add([O,z])})}function ct(O){return oe||(oe=!O,Ue(),tt.list().forEach(([z,H])=>O?H(O):z()),tt.reset()),O}function nt(O,z,H,q){const{scrollBehavior:ue}=t;if(!Kn||!ue)return Promise.resolve();const g=!H&&im(Ll(O.fullPath,0))||(q||!H)&&history.state&&history.state.scroll||null;return Su().then(()=>ue(O,z,g)).then(y=>y&&tm(y)).catch(y=>re(y,O,z))}const Ie=O=>s.go(O);let Ee;const Gt=new Set,wt={currentRoute:u,listening:!0,addRoute:A,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:U,resolve:J,options:t,push:W,replace:se,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Se.add,isReady:Ye,install(O){const z=this;O.component("RouterLink",Rm),O.component("RouterView",_h),O.config.globalProperties.$router=z,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(u)}),Kn&&!Ee&&u.value===Qt&&(Ee=!0,W(s.location).catch(ue=>{}));const H={};for(const ue in Qt)Object.defineProperty(H,ue,{get:()=>u.value[ue],enumerable:!0});O.provide(zo,z),O.provide(yh,_u(H)),O.provide(po,u);const q=O.unmount;Gt.add(O),O.unmount=function(){Gt.delete(O),Gt.size<1&&(f=Qt,_&&_(),_=null,u.value=Qt,Ee=!1,oe=!1),q()}}};function ze(O){return O.reduce((z,H)=>z.then(()=>w(H)),Promise.resolve())}return wt}function Dm(t,e){const n=[],i=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(f=>ti(f,c))?i.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(f=>ti(f,u))||s.push(u))}return[n,i,s]}const Nm=Gi({__name:"App",setup(t){return(e,n)=>(Tn(),Oi(ht,null,[qe(Vt(_h)),n[0]||(n[0]=fe("footer",null,[fe("a",{href:"https://github.com/kikkipedia",target:"_blank"},"CODE")],-1))],64))}}),Ko=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},xm=Ko(Nm,[["__scopeId","data-v-5f19cbd3"]]),Mm="/assets/map-DGnupgEj.png",Lm=()=>{};var Xl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Um=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],c=t[n++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,c=a?t[s+1]:0,u=s+2<t.length,f=u?t[s+2]:0,p=o>>2,v=(o&3)<<4|c>>4;let b=(c&15)<<2|f>>6,A=f&63;u||(A=64,a||(b=64)),i.push(n[p],n[v],n[b],n[A])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Um(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const v=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||f==null||v==null)throw new Fm;const b=o<<2|c>>4;if(i.push(b),f!==64){const A=c<<4&240|f>>2;if(i.push(A),v!==64){const x=f<<6&192|v;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jm=function(t){const e=wh(t);return Ih.encodeByteArray(e,!0)},Lr=function(t){return jm(t).replace(/\./g,"")},Eh=function(t){try{return Ih.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=()=>$m().__FIREBASE_DEFAULTS__,Vm=()=>{if(typeof process>"u"||typeof Xl>"u")return;const t=Xl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Eh(t[1]);return e&&JSON.parse(e)},Go=()=>{try{return Lm()||Hm()||Vm()||Bm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bh=t=>{var e,n;return(n=(e=Go())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wm=t=>{const e=bh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Th=()=>{var t;return(t=Go())===null||t===void 0?void 0:t.config},Sh=t=>{var e;return(e=Go())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lr(JSON.stringify(n)),Lr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function qm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ah(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ch(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Xm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="FirebaseError";class _t extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Qm,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Zm(o,i):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new _t(s,c,i)}}function Zm(t,e){return t.replace(ev,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ev=/\{\$([^}]+)}/g;function tv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],a=e[s];if(Ql(o)&&Ql(a)){if(!fn(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ql(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function nv(t,e){const n=new iv(t,e);return n.subscribe.bind(n)}class iv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");rv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Vs),s.error===void 0&&(s.error=Vs),s.complete===void 0&&(s.complete=Vs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=1e3,ov=2,av=4*60*60*1e3,lv=.5;function Zl(t,e=sv,n=ov){const i=e*Math.pow(n,t),s=Math.round(lv*i*(Math.random()-.5)*2);return Math.min(av,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class yt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new zm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hv(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uv(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uv(t){return t===bn?void 0:t}function hv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const dv={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},pv=me.INFO,gv={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},mv=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=gv[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class is{constructor(e){this.name=e,this._logLevel=pv,this._logHandler=mv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const vv=(t,e)=>e.some(n=>t instanceof n);let ec,tc;function yv(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _v(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ph=new WeakMap,go=new WeakMap,Oh=new WeakMap,Bs=new WeakMap,qo=new WeakMap;function wv(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(ln(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ph.set(n,t)}).catch(()=>{}),qo.set(e,t),e}function Iv(t){if(go.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});go.set(t,e)}let mo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return go.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ev(t){mo=t(mo)}function bv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ws(this),e,...n);return Oh.set(i,e.sort?e.sort():[e]),ln(i)}:_v().includes(t)?function(...e){return t.apply(Ws(this),e),ln(Ph.get(this))}:function(...e){return ln(t.apply(Ws(this),e))}}function Tv(t){return typeof t=="function"?bv(t):(t instanceof IDBTransaction&&Iv(t),vv(t,yv())?new Proxy(t,mo):t)}function ln(t){if(t instanceof IDBRequest)return wv(t);if(Bs.has(t))return Bs.get(t);const e=Tv(t);return e!==t&&(Bs.set(t,e),qo.set(e,t)),e}const Ws=t=>qo.get(t);function kh(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=ln(a);return i&&a.addEventListener("upgradeneeded",u=>{i(ln(a.result),u.oldVersion,u.newVersion,ln(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Sv=["get","getKey","getAll","getAllKeys","count"],Av=["put","add","delete","clear"],zs=new Map;function nc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zs.get(e))return zs.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Av.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Sv.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return i&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&u.done]))[0]};return zs.set(e,o),o}Ev(t=>({...t,get:(e,n,i)=>nc(e,n)||t.get(e,n,i),has:(e,n)=>!!nc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Cv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vo="@firebase/app",ic="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new is("@firebase/app"),Pv="@firebase/app-compat",Ov="@firebase/analytics-compat",kv="@firebase/analytics",Dv="@firebase/app-check-compat",Nv="@firebase/app-check",xv="@firebase/auth",Mv="@firebase/auth-compat",Lv="@firebase/database",Uv="@firebase/data-connect",Fv="@firebase/database-compat",jv="@firebase/functions",$v="@firebase/functions-compat",Hv="@firebase/installations",Vv="@firebase/installations-compat",Bv="@firebase/messaging",Wv="@firebase/messaging-compat",zv="@firebase/performance",Kv="@firebase/performance-compat",Gv="@firebase/remote-config",qv="@firebase/remote-config-compat",Jv="@firebase/storage",Yv="@firebase/storage-compat",Xv="@firebase/firestore",Qv="@firebase/vertexai",Zv="@firebase/firestore-compat",ey="firebase",ty="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="[DEFAULT]",ny={[vo]:"fire-core",[Pv]:"fire-core-compat",[kv]:"fire-analytics",[Ov]:"fire-analytics-compat",[Nv]:"fire-app-check",[Dv]:"fire-app-check-compat",[xv]:"fire-auth",[Mv]:"fire-auth-compat",[Lv]:"fire-rtdb",[Uv]:"fire-data-connect",[Fv]:"fire-rtdb-compat",[jv]:"fire-fn",[$v]:"fire-fn-compat",[Hv]:"fire-iid",[Vv]:"fire-iid-compat",[Bv]:"fire-fcm",[Wv]:"fire-fcm-compat",[zv]:"fire-perf",[Kv]:"fire-perf-compat",[Gv]:"fire-rc",[qv]:"fire-rc-compat",[Jv]:"fire-gcs",[Yv]:"fire-gcs-compat",[Xv]:"fire-fst",[Zv]:"fire-fst-compat",[Qv]:"fire-vertex","fire-js":"fire-js",[ey]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Map,iy=new Map,_o=new Map;function rc(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(_o.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,t);for(const n of Ur.values())rc(n,t);for(const n of iy.values())rc(n,t);return!0}function Ln(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new Mn("app","Firebase",ry);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=ty;function Dh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:yo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw cn.create("bad-app-name",{appName:String(s)});if(n||(n=Th()),!n)throw cn.create("no-options");const o=Ur.get(s);if(o){if(fn(n,o.options)&&fn(i,o.config))return o;throw cn.create("duplicate-app",{appName:s})}const a=new fv(s);for(const u of _o.values())a.addComponent(u);const c=new sy(n,i,a);return Ur.set(s,c),c}function Jo(t=yo){const e=Ur.get(t);if(!e&&t===yo&&Th())return Dh();if(!e)throw cn.create("no-app",{appName:t});return e}function lt(t,e,n){var i;let s=(i=ny[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(c.join(" "));return}Rt(new yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="firebase-heartbeat-database",ay=1,Wi="firebase-heartbeat-store";let Ks=null;function Nh(){return Ks||(Ks=kh(oy,ay,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),Ks}async function ly(t){try{const n=(await Nh()).transaction(Wi),i=await n.objectStore(Wi).get(xh(t));return await n.done,i}catch(e){if(e instanceof _t)Wt.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function sc(t,e){try{const i=(await Nh()).transaction(Wi,"readwrite");await i.objectStore(Wi).put(e,xh(t)),await i.done}catch(n){if(n instanceof _t)Wt.warn(n.message);else{const i=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(i.message)}}}function xh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=1024,uy=30;class hy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dy(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=oc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>uy){const a=py(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Wt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=oc(),{heartbeatsToSend:i,unsentEntries:s}=fy(this._heartbeatsCache.heartbeats),o=Lr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Wt.warn(n),""}}}function oc(){return new Date().toISOString().substring(0,10)}function fy(t,e=cy){const n=[];let i=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ac(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ac(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rh()?Ch().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ly(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ac(t){return Lr(JSON.stringify({version:2,heartbeats:t})).length}function py(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){Rt(new yt("platform-logger",e=>new Rv(e),"PRIVATE")),Rt(new yt("heartbeat",e=>new hy(e),"PRIVATE")),lt(vo,ic,t),lt(vo,ic,"esm2017"),lt("fire-js","")}gy("");function Yo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Mh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const my=Mh,Lh=new Mn("auth","Firebase",Mh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new is("@firebase/auth");function vy(t,...e){Fr.logLevel<=me.WARN&&Fr.warn(`Auth (${ri}): ${t}`,...e)}function Tr(t,...e){Fr.logLevel<=me.ERROR&&Fr.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw Qo(t,...e)}function mt(t,...e){return Qo(t,...e)}function Xo(t,e,n){const i=Object.assign(Object.assign({},my()),{[e]:n});return new Mn("auth","Firebase",i).create(e,{appName:t.name})}function un(t){return Xo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yy(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ct(t,"argument-error"),Xo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Lh.create(t,...e)}function X(t,e,...n){if(!t)throw Qo(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tr(e),new Error(e)}function zt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _y(){return lc()==="http:"||lc()==="https:"}function lc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||Ah()||"connection"in navigator)?navigator.onLine:!0}function Iy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Gm()||Jm()}get(){return wy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Yi(3e4,6e4);function si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mn(t,e,n,i,s={}){return Fh(t,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const c=Ji(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return qm()||(f.referrerPolicy="no-referrer"),Uh.fetch()($h(t,t.config.apiHost,n,c),f)})}async function Fh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ey),e);try{const s=new Sy(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw mr(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw mr(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw mr(t,"user-disabled",a);const p=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Xo(t,p,f);Ct(t,p)}}catch(s){if(s instanceof _t)throw s;Ct(t,"network-request-failed",{message:String(s)})}}async function jh(t,e,n,i,s={}){const o=await mn(t,e,n,i,s);return"mfaPendingCredential"in o&&Ct(t,"multi-factor-auth-required",{_serverResponse:o}),o}function $h(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Zo(t.config,s):`${t.config.apiScheme}://${s}`}function Ty(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mt(this.auth,"network-request-failed")),by.get())})}}function mr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=mt(t,e,i);return s.customData._tokenResponse=n,s}function cc(t){return t!==void 0&&t.enterprise!==void 0}class Ay{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ty(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ry(t,e){return mn(t,"GET","/v2/recaptchaConfig",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(t,e){return mn(t,"POST","/v1/accounts:delete",e)}async function Hh(t,e){return mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Py(t,e=!1){const n=Pt(t),i=await n.getIdToken(e),s=ea(i);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:Ni(Gs(s.auth_time)),issuedAtTime:Ni(Gs(s.iat)),expirationTime:Ni(Gs(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Gs(t){return Number(t)*1e3}function ea(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Eh(n);return s?JSON.parse(s):(Tr("Failed to decode base64 JWT payload"),null)}catch(s){return Tr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uc(t){const e=ea(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof _t&&Oy(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Oy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await zi(t,Hh(n,{idToken:i}));X(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Vh(o.providerUserInfo):[],c=Ny(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),p=u?f:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Io(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,v)}async function Dy(t){const e=Pt(t);await jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ny(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Vh(t){return t.map(e=>{var{providerId:n}=e,i=Yo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(t,e){const n=await Fh(t,{},async()=>{const i=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=$h(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Uh.fetch()(a,{method:"POST",headers:c,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function My(t,e){return mn(t,"POST","/v2/accounts:revokeToken",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=uc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await xy(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,a=new Xn;return i&&(X(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(X(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(X(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,o=Yo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ky(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Io(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Py(this,e)}reload(){return Dy(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await jr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await zi(this,Cy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,o,a,c,u,f,p;const v=(i=n.displayName)!==null&&i!==void 0?i:void 0,b=(s=n.email)!==null&&s!==void 0?s:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,U=(c=n.tenantId)!==null&&c!==void 0?c:void 0,G=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,J=(f=n.createdAt)!==null&&f!==void 0?f:void 0,B=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:K,emailVerified:W,isAnonymous:se,providerData:ce,stsTokenManager:I}=n;X(K&&I,e,"internal-error");const m=Xn.fromJSON(this.name,I);X(typeof K=="string",e,"internal-error"),Zt(v,e.name),Zt(b,e.name),X(typeof W=="boolean",e,"internal-error"),X(typeof se=="boolean",e,"internal-error"),Zt(A,e.name),Zt(x,e.name),Zt(U,e.name),Zt(G,e.name),Zt(J,e.name),Zt(B,e.name);const w=new $t({uid:K,auth:e,email:b,emailVerified:W,displayName:v,isAnonymous:se,photoURL:x,phoneNumber:A,tenantId:U,stsTokenManager:m,createdAt:J,lastLoginAt:B});return ce&&Array.isArray(ce)&&(w.providerData=ce.map(E=>Object.assign({},E))),G&&(w._redirectEventId=G),w}static async _fromIdTokenResponse(e,n,i=!1){const s=new Xn;s.updateFromServerResponse(n);const o=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await jr(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];X(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Vh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Xn;c.updateFromIdToken(i);const u=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Io(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map;function Ht(t){zt(t instanceof Function,"Expected a class definition");let e=hc.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bh.type="NONE";const fc=Bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e,n){return`firebase:${t}:${e}:${n}`}class Qn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Sr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Sr("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Qn(Ht(fc),e,i);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||Ht(fc);const a=Sr(i,e.config.apiKey,e.name);let c=null;for(const f of n)try{const p=await f._get(a);if(p){const v=$t._fromJSON(e,p);f!==o&&(c=v),o=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Qn(o,e,i):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Qn(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jh(e))return"Blackberry";if(Yh(e))return"Webos";if(zh(e))return"Safari";if((e.includes("chrome/")||Kh(e))&&!e.includes("edge/"))return"Chrome";if(qh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Wh(t=We()){return/firefox\//i.test(t)}function zh(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kh(t=We()){return/crios\//i.test(t)}function Gh(t=We()){return/iemobile/i.test(t)}function qh(t=We()){return/android/i.test(t)}function Jh(t=We()){return/blackberry/i.test(t)}function Yh(t=We()){return/webos/i.test(t)}function ta(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ly(t=We()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uy(){return Ym()&&document.documentMode===10}function Xh(t=We()){return ta(t)||qh(t)||Yh(t)||Jh(t)||/windows phone/i.test(t)||Gh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e=[]){let n;switch(t){case"Browser":n=dc(We());break;case"Worker":n=`${dc(We())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jy(t,e={}){return mn(t,"GET","/v2/passwordPolicy",si(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=6;class Hy{constructor(e){var n,i,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:$y,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pc(this),this.idTokenSubscription=new pc(this),this.beforeStateQueue=new Fy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hh(this,{idToken:e}),i=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(un(this));const n=e?Pt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jy(this),n=new Hy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await My(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,i,s);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Un(t){return Pt(t)}class pc{constructor(e){this.auth=e,this.observer=null,this.addObserver=nv(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function By(t){rs=t}function Zh(t){return rs.loadJS(t)}function Wy(){return rs.recaptchaEnterpriseScript}function zy(){return rs.gapiScript}function Ky(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Gy{constructor(){this.enterprise=new qy}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class qy{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Jy="recaptcha-enterprise",ef="NO_RECAPTCHA";class Yy{constructor(e){this.type=Jy,this.auth=Un(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{Ry(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new Ay(u);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,a(f.siteKey)}}).catch(u=>{c(u)})})}function s(o,a,c){const u=window.grecaptcha;cc(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(f=>{a(f)}).catch(()=>{a(ef)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gy().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{i(this.auth).then(c=>{if(!n&&cc(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Wy();u.length!==0&&(u+=c),Zh(u).then(()=>{s(c,o,a)}).catch(f=>{a(f)})}}).catch(c=>{a(c)})})}}async function gc(t,e,n,i=!1,s=!1){const o=new Yy(t);let a;if(s)a=ef;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Xy(t,e,n,i,s){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await gc(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await gc(t,e,n,n==="getOobCode");return i(t,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t,e){const n=Ln(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(fn(o,e??{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function Zy(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function e_(t,e,n){const i=Un(t);X(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=tf(e),{host:a,port:c}=t_(e),u=c===null?"":`:${c}`,f={url:`${o}//${a}${u}/`},p=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){X(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),X(fn(f,i.config.emulator)&&fn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=f,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,n_()}function tf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function t_(t){const e=tf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:mc(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:mc(a)}}}function mc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function n_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function i_(t,e){return mn(t,"POST","/v1/accounts:sendOobCode",si(t,e))}async function r_(t,e){return i_(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e){return jh(t,"POST","/v1/accounts:signInWithIdp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="http://localhost";class On extends nf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,o=Yo(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new On(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Zn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Zn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zn(e,n)}buildRequest(){const e={requestUri:s_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends na{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Xi{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return On._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ut.credential(n,i)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Xi{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Xi{constructor(){super("twitter.com")}static credential(e,n){return On._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return on.credential(n,i)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t,e){return jh(t,"POST","/v1/accounts:signUp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await $t._fromIdTokenResponse(e,i,s),a=vc(i);return new kn({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=vc(i);return new kn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function vc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends _t{constructor(e,n,i,s){var o;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new $r(e,n,i,s)}}function rf(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?$r._fromErrorAndOperation(t,o,e,i):o})}async function a_(t,e,n=!1){const i=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(t,e,n=!1){const{auth:i}=t;if(ot(i.app))return Promise.reject(un(i));const s="reauthenticate";try{const o=await zi(t,rf(i,s,e,t),n);X(o.idToken,i,"internal-error");const a=ea(o.idToken);X(a,i,"internal-error");const{sub:c}=a;return X(t.uid===c,i,"user-mismatch"),kn._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ct(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t,e,n=!1){if(ot(t.app))return Promise.reject(un(t));const i="signIn",s=await rf(t,i,e),o=await kn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e,n){var i;X(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),X(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),X(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(X(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(X(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t){const e=Un(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function f_(t,e,n){if(ot(t.app))return Promise.reject(un(t));const i=Un(t),a=await Xy(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",o_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&h_(t),u}),c=await kn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}async function d_(t,e){const n=Pt(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&u_(n.auth,s,e);const{email:o}=await r_(n.auth,s);o!==t.email&&await t.reload()}function p_(t,e,n,i){return Pt(t).onIdTokenChanged(e,n,i)}function g_(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function m_(t,e,n,i){return Pt(t).onAuthStateChanged(e,n,i)}const Hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=1e3,y_=10;class of extends sf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);Uy()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,y_):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},v_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}of.type="LOCAL";const __=of;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends sf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}af.type="SESSION";const lf=af;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new ss(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(a).map(async f=>f(n.origin,o)),u=await w_(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ss.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=ia("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(v){const b=v;if(b.data.eventId===f)switch(b.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(b.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function E_(t){St().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function b_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function S_(){return cf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="firebaseLocalStorageDb",A_=1,Vr="firebaseLocalStorage",hf="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function os(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function R_(){const t=indexedDB.deleteDatabase(uf);return new Qi(t).toPromise()}function Eo(){const t=indexedDB.open(uf,A_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Vr,{keyPath:hf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Vr)?e(i):(i.close(),await R_(),e(await Eo()))})})}async function yc(t,e,n){const i=os(t,!0).put({[hf]:e,value:n});return new Qi(i).toPromise()}async function C_(t,e){const n=os(t,!1).get(e),i=await new Qi(n).toPromise();return i===void 0?null:i.value}function _c(t,e){const n=os(t,!0).delete(e);return new Qi(n).toPromise()}const P_=800,O_=3;class ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>O_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ss._getInstance(S_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await b_(),!this.activeServiceWorker)return;this.sender=new I_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eo();return await yc(e,Hr,"1"),await _c(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>yc(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>C_(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_c(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=os(s,!1).getAll();return new Qi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ff.type="LOCAL";const k_=ff;new Yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t,e){return e?Ht(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends nf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D_(t){return c_(t.auth,new ra(t),t.bypassAuthState)}function N_(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),l_(n,new ra(t),t.bypassAuthState)}async function x_(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),a_(n,new ra(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D_;case"linkViaPopup":case"linkViaRedirect":return x_;case"reauthViaPopup":case"reauthViaRedirect":return N_;default:Ct(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new Yi(2e3,1e4);async function L_(t,e,n){if(ot(t.app))return Promise.reject(mt(t,"operation-not-supported-in-this-environment"));const i=Un(t);yy(t,e,na);const s=df(i,n);return new Sn(i,"signInViaPopup",e,s).executeNotNull()}class Sn extends pf{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,M_.get())};e()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="pendingRedirect",Ar=new Map;class F_ extends pf{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const i=await j_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ar.set(this.auth._key(),e)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function j_(t,e){const n=V_(e),i=H_(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function $_(t,e){Ar.set(t._key(),e)}function H_(t){return Ht(t._redirectPersistence)}function V_(t){return Sr(U_,t.config.apiKey,t.name)}async function B_(t,e,n=!1){if(ot(t.app))return Promise.reject(un(t));const i=Un(t),s=df(i,e),a=await new F_(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=10*60*1e3;class z_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!K_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!gf(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W_&&this.cachedEventUids.clear(),this.cachedEventUids.has(wc(e))}saveEventToCache(e){this.cachedEventUids.add(wc(e)),this.lastProcessedEventTime=Date.now()}}function wc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function K_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(t,e={}){return mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J_=/^https?/;async function Y_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G_(t);for(const n of e)try{if(X_(n))return}catch{}Ct(t,"unauthorized-domain")}function X_(t){const e=wo(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!J_.test(n))return!1;if(q_.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Yi(3e4,6e4);function Ic(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Z_(t){return new Promise((e,n)=>{var i,s,o;function a(){Ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ic(),n(mt(t,"network-request-failed"))},timeout:Q_.get()})}if(!((s=(i=St().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)a();else{const c=Ky("iframefcb");return St()[c]=()=>{gapi.load?a():n(mt(t,"network-request-failed"))},Zh(`${zy()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Rr=null,e})}let Rr=null;function ew(t){return Rr=Rr||Z_(t),Rr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new Yi(5e3,15e3),nw="__/auth/iframe",iw="emulator/auth/iframe",rw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ow(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zo(e,iw):`https://${t.config.authDomain}/${nw}`,i={apiKey:e.apiKey,appName:t.name,v:ri},s=sw.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Ji(i).slice(1)}`}async function aw(t){const e=await ew(t),n=St().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:ow(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rw,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=mt(t,"network-request-failed"),c=St().setTimeout(()=>{o(a)},tw.get());function u(){St().clearTimeout(c),s(i)}i.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cw=500,uw=600,hw="_blank",fw="http://localhost";class Ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dw(t,e,n,i=cw,s=uw){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},lw),{width:i.toString(),height:s.toString(),top:o,left:a}),f=We().toLowerCase();n&&(c=Kh(f)?hw:n),Wh(f)&&(e=e||fw,u.scrollbars="yes");const p=Object.entries(u).reduce((b,[A,x])=>`${b}${A}=${x},`,"");if(Ly(f)&&c!=="_self")return pw(e||"",c),new Ec(null);const v=window.open(e||"",c,p);X(v,t,"popup-blocked");try{v.focus()}catch{}return new Ec(v)}function pw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="__/auth/handler",mw="emulator/auth/handler",vw=encodeURIComponent("fac");async function bc(t,e,n,i,s,o){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ri,eventId:s};if(e instanceof na){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",tv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,v]of Object.entries({}))a[p]=v}if(e instanceof Xi){const p=e.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await t._getAppCheckToken(),f=u?`#${vw}=${encodeURIComponent(u)}`:"";return`${yw(t)}?${Ji(c).slice(1)}${f}`}function yw({config:t}){return t.emulator?Zo(t,mw):`https://${t.authDomain}/${gw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="webStorageSupport";class _w{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lf,this._completeRedirectFn=B_,this._overrideRedirectResult=$_}async _openPopup(e,n,i,s){var o;zt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await bc(e,n,i,wo(),s);return dw(e,a,ia())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await bc(e,n,i,wo(),s);return E_(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(zt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await aw(e),i=new z_(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qs,{type:qs},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[qs];a!==void 0&&n(!!a),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xh()||zh()||ta()}}const ww=_w;var Tc="@firebase/auth",Sc="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bw(t){Rt(new yt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qh(t)},f=new Vy(i,s,o,u);return Zy(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rt(new yt("auth-internal",e=>{const n=Un(e.getProvider("auth").getImmediate());return(i=>new Iw(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Tc,Sc,Ew(t)),lt(Tc,Sc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=5*60,Sw=Sh("authIdTokenMaxAge")||Tw;let Ac=null;const Aw=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Sw)return;const s=n==null?void 0:n.token;Ac!==s&&(Ac=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cr(t=Jo()){const e=Ln(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Qy(t,{popupRedirectResolver:ww,persistence:[k_,__,lf]}),i=Sh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=Aw(o.toString());g_(n,a,()=>a(n.currentUser)),p_(n,c=>a(c))}}const s=bh("auth");return s&&e_(n,`http://${s}`),n}function Rw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}By({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=mt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",Rw().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bw("Browser");var Rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function w(){}w.prototype=m.prototype,I.D=m.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(E,T,R){for(var _=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)_[Ue-2]=arguments[Ue];return m.prototype[T].apply(E,_)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,w){w||(w=0);var E=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)E[T]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(T=0;16>T;++T)E[T]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=I.g[0],w=I.g[1],T=I.g[2];var R=I.g[3],_=m+(R^w&(T^R))+E[0]+3614090360&4294967295;m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+E[1]+3905402710&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+E[2]+606105819&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+E[3]+3250441966&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(R^w&(T^R))+E[4]+4118548399&4294967295,m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+E[5]+1200080426&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+E[6]+2821735955&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+E[7]+4249261313&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(R^w&(T^R))+E[8]+1770035416&4294967295,m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+E[9]+2336552879&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+E[10]+4294925233&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+E[11]+2304563134&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(R^w&(T^R))+E[12]+1804603682&4294967295,m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+E[13]+4254626195&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+E[14]+2792965006&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+E[15]+1236535329&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(T^R&(w^T))+E[1]+4129170786&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+E[6]+3225465664&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+E[11]+643717713&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+E[0]+3921069994&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(w^T))+E[5]+3593408605&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+E[10]+38016083&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+E[15]+3634488961&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+E[4]+3889429448&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(w^T))+E[9]+568446438&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+E[14]+3275163606&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+E[3]+4107603335&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+E[8]+1163531501&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(w^T))+E[13]+2850285829&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+E[2]+4243563512&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+E[7]+1735328473&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+E[12]+2368359562&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(w^T^R)+E[5]+4294588738&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+E[8]+2272392833&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+E[11]+1839030562&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+E[14]+4259657740&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(w^T^R)+E[1]+2763975236&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+E[4]+1272893353&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+E[7]+4139469664&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+E[10]+3200236656&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(w^T^R)+E[13]+681279174&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+E[0]+3936430074&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+E[3]+3572445317&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+E[6]+76029189&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(w^T^R)+E[9]+3654602809&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+E[12]+3873151461&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+E[15]+530742520&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+E[2]+3299628645&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(T^(w|~R))+E[0]+4096336452&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+E[7]+1126891415&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+E[14]+2878612391&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+E[5]+4237533241&4294967295,w=T+(_<<21&4294967295|_>>>11),_=m+(T^(w|~R))+E[12]+1700485571&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+E[3]+2399980690&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+E[10]+4293915773&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+E[1]+2240044497&4294967295,w=T+(_<<21&4294967295|_>>>11),_=m+(T^(w|~R))+E[8]+1873313359&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+E[15]+4264355552&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+E[6]+2734768916&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+E[13]+1309151649&4294967295,w=T+(_<<21&4294967295|_>>>11),_=m+(T^(w|~R))+E[4]+4149444226&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+E[11]+3174756917&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+E[2]+718787259&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+R&4294967295}i.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var w=m-this.blockSize,E=this.B,T=this.h,R=0;R<m;){if(T==0)for(;R<=w;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<m;)if(E[T++]=I.charCodeAt(R++),T==this.blockSize){s(this,E),T=0;break}}else for(;R<m;)if(E[T++]=I[R++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=m},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var w=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=w&255,w/=256;for(this.u(I),I=Array(16),m=w=0;4>m;++m)for(var E=0;32>E;E+=8)I[w++]=this.g[m]>>>E&255;return I};function o(I,m){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=m(I)}function a(I,m){this.h=m;for(var w=[],E=!0,T=I.length-1;0<=T;T--){var R=I[T]|0;E&&R==m||(w[T]=R,E=!1)}this.g=w}var c={};function u(I){return-128<=I&&128>I?o(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return v;if(0>I)return G(f(-I));for(var m=[],w=1,E=0;I>=w;E++)m[E]=I/w|0,w*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return G(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=f(Math.pow(m,8)),E=v,T=0;T<I.length;T+=8){var R=Math.min(8,I.length-T),_=parseInt(I.substring(T,T+R),m);8>R?(R=f(Math.pow(m,R)),E=E.j(R).add(f(_))):(E=E.j(w),E=E.add(f(_)))}return E}var v=u(0),b=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(U(this))return-G(this).m();for(var I=0,m=1,w=0;w<this.g.length;w++){var E=this.i(w);I+=(0<=E?E:4294967296+E)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(U(this))return"-"+G(this).toString(I);for(var m=f(Math.pow(I,6)),w=this,E="";;){var T=W(w,m).g;w=J(w,T.j(m));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=T,x(w))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function U(I){return I.h==-1}t.l=function(I){return I=J(this,I),U(I)?-1:x(I)?0:1};function G(I){for(var m=I.g.length,w=[],E=0;E<m;E++)w[E]=~I.g[E];return new a(w,~I.h).add(b)}t.abs=function(){return U(this)?G(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0,T=0;T<=m;T++){var R=E+(this.i(T)&65535)+(I.i(T)&65535),_=(R>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=_>>>16,R&=65535,_&=65535,w[T]=_<<16|R}return new a(w,w[w.length-1]&-2147483648?-1:0)};function J(I,m){return I.add(G(m))}t.j=function(I){if(x(this)||x(I))return v;if(U(this))return U(I)?G(this).j(G(I)):G(G(this).j(I));if(U(I))return G(this.j(G(I)));if(0>this.l(A)&&0>I.l(A))return f(this.m()*I.m());for(var m=this.g.length+I.g.length,w=[],E=0;E<2*m;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var R=this.i(E)>>>16,_=this.i(E)&65535,Ue=I.i(T)>>>16,tt=I.i(T)&65535;w[2*E+2*T]+=_*tt,B(w,2*E+2*T),w[2*E+2*T+1]+=R*tt,B(w,2*E+2*T+1),w[2*E+2*T+1]+=_*Ue,B(w,2*E+2*T+1),w[2*E+2*T+2]+=R*Ue,B(w,2*E+2*T+2)}for(E=0;E<m;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=m;E<2*m;E++)w[E]=0;return new a(w,0)};function B(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function K(I,m){this.g=I,this.h=m}function W(I,m){if(x(m))throw Error("division by zero");if(x(I))return new K(v,v);if(U(I))return m=W(G(I),m),new K(G(m.g),G(m.h));if(U(m))return m=W(I,G(m)),new K(G(m.g),m.h);if(30<I.g.length){if(U(I)||U(m))throw Error("slowDivide_ only works with positive integers.");for(var w=b,E=m;0>=E.l(I);)w=se(w),E=se(E);var T=ce(w,1),R=ce(E,1);for(E=ce(E,2),w=ce(w,2);!x(E);){var _=R.add(E);0>=_.l(I)&&(T=T.add(w),R=_),E=ce(E,1),w=ce(w,1)}return m=J(I,T.j(m)),new K(T,m)}for(T=v;0<=I.l(m);){for(w=Math.max(1,Math.floor(I.m()/m.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=f(w),_=R.j(m);U(_)||0<_.l(I);)w-=E,R=f(w),_=R.j(m);x(R)&&(R=b),T=T.add(R),I=J(I,_)}return new K(T,I)}t.A=function(I){return W(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0;E<m;E++)w[E]=this.i(E)&I.i(E);return new a(w,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0;E<m;E++)w[E]=this.i(E)|I.i(E);return new a(w,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0;E<m;E++)w[E]=this.i(E)^I.i(E);return new a(w,this.h^I.h)};function se(I){for(var m=I.g.length+1,w=[],E=0;E<m;E++)w[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(w,I.h)}function ce(I,m){var w=m>>5;m%=32;for(var E=I.g.length-w,T=[],R=0;R<E;R++)T[R]=0<m?I.i(R+w)>>>m|I.i(R+w+1)<<32-m:I.i(R+w);return new a(T,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,mf=a}).apply(typeof Rc<"u"?Rc:typeof self<"u"?self:typeof window<"u"?window:{});var vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,h){return r==Array.prototype||r==Object.prototype||(r[l]=h.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof vr=="object"&&vr];for(var l=0;l<r.length;++l){var h=r[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=n(this);function s(r,l){if(l)e:{var h=i;r=r.split(".");for(var d=0;d<r.length-1;d++){var C=r[d];if(!(C in h))break e;h=h[C]}r=r[r.length-1],d=h[r],l=l(d),l!=d&&l!=null&&e(h,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var h=0,d=!1,C={next:function(){if(!d&&h<r.length){var P=h++;return{value:l(P,r[P]),done:!1}}return d=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(r){return r||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function f(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function p(r,l,h){return r.call.apply(r.bind,arguments)}function v(r,l,h){if(!r)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,d),r.apply(l,C)}}return function(){return r.apply(l,arguments)}}function b(r,l,h){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,b.apply(null,arguments)}function A(r,l){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),r.apply(this,d)}}function x(r,l){function h(){}h.prototype=l.prototype,r.aa=l.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(d,C,P){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return l.prototype[C].apply(d,j)}}function U(r){const l=r.length;if(0<l){const h=Array(l);for(let d=0;d<l;d++)h[d]=r[d];return h}return[]}function G(r,l){for(let h=1;h<arguments.length;h++){const d=arguments[h];if(u(d)){const C=r.length||0,P=d.length||0;r.length=C+P;for(let j=0;j<P;j++)r[C+j]=d[j]}else r.push(d)}}class J{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(r){return/^[\s\xa0]*$/.test(r)}function K(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function W(r){return W[" "](r),r}W[" "]=function(){};var se=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ce(r,l,h){for(const d in r)l.call(h,r[d],d,r)}function I(r,l){for(const h in r)l.call(void 0,r[h],h,r)}function m(r){const l={};for(const h in r)l[h]=r[h];return l}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,l){let h,d;for(let C=1;C<arguments.length;C++){d=arguments[C];for(h in d)r[h]=d[h];for(let P=0;P<w.length;P++)h=w[P],Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}}function T(r){var l=1;r=r.split(":");const h=[];for(;0<l&&r.length;)h.push(r.shift()),l--;return r.length&&h.push(r.join(":")),h}function R(r){c.setTimeout(()=>{throw r},0)}function _(){var r=Ye;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class Ue{constructor(){this.h=this.g=null}add(l,h){const d=tt.get();d.set(l,h),this.h?this.h.next=d:this.g=d,this.h=d}}var tt=new J(()=>new Se,r=>r.reset());class Se{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,re=!1,Ye=new Ue,ct=()=>{const r=c.Promise.resolve(void 0);oe=()=>{r.then(nt)}};var nt=()=>{for(var r;r=_();){try{r.h.call(r.g)}catch(h){R(h)}var l=tt;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}re=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Gt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return r}();function wt(r,l){if(Ee.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,d=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(se){e:{try{W(l.nodeName);var C=!0;break e}catch{}C=!1}C||(l=null)}}else h=="mouseover"?l=r.fromElement:h=="mouseout"&&(l=r.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ze[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&wt.aa.h.call(this)}}x(wt,Ee);var ze={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),z=0;function H(r,l,h,d,C){this.listener=r,this.proxy=null,this.src=l,this.type=h,this.capture=!!d,this.ha=C,this.key=++z,this.da=this.fa=!1}function q(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function ue(r){this.src=r,this.g={},this.h=0}ue.prototype.add=function(r,l,h,d,C){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var j=y(r,l,d,C);return-1<j?(l=r[j],h||(l.fa=!1)):(l=new H(l,this.src,P,!!d,C),l.fa=h,r.push(l)),l};function g(r,l){var h=l.type;if(h in r.g){var d=r.g[h],C=Array.prototype.indexOf.call(d,l,void 0),P;(P=0<=C)&&Array.prototype.splice.call(d,C,1),P&&(q(l),r.g[h].length==0&&(delete r.g[h],r.h--))}}function y(r,l,h,d){for(var C=0;C<r.length;++C){var P=r[C];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==d)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),k={};function N(r,l,h,d,C){if(Array.isArray(l)){for(var P=0;P<l.length;P++)N(r,l[P],h,d,C);return null}return h=ee(h),r&&r[O]?r.K(l,h,f(d)?!!d.capture:!1,C):D(r,l,h,!1,d,C)}function D(r,l,h,d,C,P){if(!l)throw Error("Invalid event type");var j=f(C)?!!C.capture:!!C,ve=V(r);if(ve||(r[S]=ve=new ue(r)),h=ve.add(l,h,d,j,P),h.proxy)return h;if(d=$(),h.proxy=d,d.src=r,d.listener=h,r.addEventListener)Gt||(C=j),C===void 0&&(C=!1),r.addEventListener(l.toString(),d,C);else if(r.attachEvent)r.attachEvent(M(l.toString()),d);else if(r.addListener&&r.removeListener)r.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $(){function r(h){return l.call(r.src,r.listener,h)}const l=Q;return r}function F(r,l,h,d,C){if(Array.isArray(l))for(var P=0;P<l.length;P++)F(r,l[P],h,d,C);else d=f(d)?!!d.capture:!!d,h=ee(h),r&&r[O]?(r=r.i,l=String(l).toString(),l in r.g&&(P=r.g[l],h=y(P,h,d,C),-1<h&&(q(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete r.g[l],r.h--)))):r&&(r=V(r))&&(l=r.g[l.toString()],r=-1,l&&(r=y(l,h,d,C)),(h=-1<r?l[r]:null)&&L(h))}function L(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[O])g(l.i,r);else{var h=r.type,d=r.proxy;l.removeEventListener?l.removeEventListener(h,d,r.capture):l.detachEvent?l.detachEvent(M(h),d):l.addListener&&l.removeListener&&l.removeListener(d),(h=V(l))?(g(h,r),h.h==0&&(h.src=null,l[S]=null)):q(r)}}}function M(r){return r in k?k[r]:k[r]="on"+r}function Q(r,l){if(r.da)r=!0;else{l=new wt(l,this);var h=r.listener,d=r.ha||r.src;r.fa&&L(r),r=h.call(d,l)}return r}function V(r){return r=r[S],r instanceof ue?r:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(r){return typeof r=="function"?r:(r[Y]||(r[Y]=function(l){return r.handleEvent(l)}),r[Y])}function Z(){Ie.call(this),this.i=new ue(this),this.M=this,this.F=null}x(Z,Ie),Z.prototype[O]=!0,Z.prototype.removeEventListener=function(r,l,h,d){F(this,r,l,h,d)};function ne(r,l){var h,d=r.F;if(d)for(h=[];d;d=d.F)h.push(d);if(r=r.M,d=l.type||l,typeof l=="string")l=new Ee(l,r);else if(l instanceof Ee)l.target=l.target||r;else{var C=l;l=new Ee(d,r),E(l,C)}if(C=!0,h)for(var P=h.length-1;0<=P;P--){var j=l.g=h[P];C=ae(j,d,!0,l)&&C}if(j=l.g=r,C=ae(j,d,!0,l)&&C,C=ae(j,d,!1,l)&&C,h)for(P=0;P<h.length;P++)j=l.g=h[P],C=ae(j,d,!1,l)&&C}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var h=r.g[l],d=0;d<h.length;d++)q(h[d]);delete r.g[l],r.h--}}this.F=null},Z.prototype.K=function(r,l,h,d){return this.i.add(String(r),l,!1,h,d)},Z.prototype.L=function(r,l,h,d){return this.i.add(String(r),l,!0,h,d)};function ae(r,l,h,d){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var C=!0,P=0;P<l.length;++P){var j=l[P];if(j&&!j.da&&j.capture==h){var ve=j.listener,Pe=j.ha||j.src;j.fa&&g(r.i,j),C=ve.call(Pe,d)!==!1&&C}}return C&&!d.defaultPrevented}function Oe(r,l,h){if(typeof r=="function")h&&(r=b(r,h));else if(r&&typeof r.handleEvent=="function")r=b(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function Re(r){r.g=Oe(()=>{r.g=null,r.i&&(r.i=!1,Re(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class it extends Ie{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Re(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(r){Ie.call(this),this.h=r,this.g={}}x(ke,Ie);var qt=[];function oi(r){ce(r.g,function(l,h){this.g.hasOwnProperty(h)&&L(l)},r),r.g={}}ke.prototype.N=function(){ke.aa.N.call(this),oi(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ce=c.JSON.stringify,rt=c.JSON.parse,er=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function cs(){}cs.prototype.h=null;function ga(r){return r.h||(r.h=r.i())}function Bf(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){Ee.call(this,"d")}x(us,Ee);function hs(){Ee.call(this,"c")}x(hs,Ee);var Fn={},ma=null;function fs(){return ma=ma||new Z}Fn.La="serverreachability";function va(r){Ee.call(this,Fn.La,r)}x(va,Ee);function li(r){const l=fs();ne(l,new va(l))}Fn.STAT_EVENT="statevent";function ya(r,l){Ee.call(this,Fn.STAT_EVENT,r),this.stat=l}x(ya,Ee);function Fe(r){const l=fs();ne(l,new ya(l,r))}Fn.Ma="timingevent";function _a(r,l){Ee.call(this,Fn.Ma,r),this.size=l}x(_a,Ee);function ci(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function ui(){this.g=!0}ui.prototype.xa=function(){this.g=!1};function Wf(r,l,h,d,C,P){r.info(function(){if(r.g)if(P)for(var j="",ve=P.split("&"),Pe=0;Pe<ve.length;Pe++){var he=ve[Pe].split("=");if(1<he.length){var De=he[0];he=he[1];var Ne=De.split("_");j=2<=Ne.length&&Ne[1]=="type"?j+(De+"="+he+"&"):j+(De+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+d+") [attempt "+C+"]: "+l+`
`+h+`
`+j})}function zf(r,l,h,d,C,P,j){r.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+C+"]: "+l+`
`+h+`
`+P+" "+j})}function jn(r,l,h,d){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+Gf(r,h)+(d?" "+d:"")})}function Kf(r,l){r.info(function(){return"TIMEOUT: "+l})}ui.prototype.info=function(){};function Gf(r,l){if(!r.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var d=h[r];if(!(2>d.length)){var C=d[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<C.length;j++)C[j]=""}}}}return Ce(h)}catch{return l}}var ds={NO_ERROR:0,TIMEOUT:8},qf={},ps;function tr(){}x(tr,cs),tr.prototype.g=function(){return new XMLHttpRequest},tr.prototype.i=function(){return{}},ps=new tr;function Jt(r,l,h,d){this.j=r,this.i=l,this.l=h,this.R=d||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wa}function wa(){this.i=null,this.g="",this.h=!1}var Ia={},gs={};function ms(r,l,h){r.L=1,r.v=sr(Ot(l)),r.m=h,r.P=!0,Ea(r,null)}function Ea(r,l){r.F=Date.now(),nr(r),r.A=Ot(r.v);var h=r.A,d=r.R;Array.isArray(d)||(d=[String(d)]),La(h.i,"t",d),r.C=0,h=r.j.J,r.h=new wa,r.g=el(r.j,h?l:null,!r.m),0<r.O&&(r.M=new it(b(r.Y,r,r.g),r.O)),l=r.U,h=r.g,d=r.ca;var C="readystatechange";Array.isArray(C)||(C&&(qt[0]=C.toString()),C=qt);for(var P=0;P<C.length;P++){var j=N(h,C[P],d||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=r.H?m(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),li(),Wf(r.i,r.u,r.A,r.l,r.R,r.m)}Jt.prototype.ca=function(r){r=r.target;const l=this.M;l&&kt(r)==3?l.j():this.Y(r)},Jt.prototype.Y=function(r){try{if(r==this.g)e:{const Ne=kt(this.g);var l=this.g.Ba();const Vn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Ba(this.g)))){this.J||Ne!=4||l==7||(l==8||0>=Vn?li(3):li(2)),vs(this);var h=this.g.Z();this.X=h;t:if(ba(this)){var d=Ba(this.g);r="";var C=d.length,P=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),hi(this);var j="";break t}this.h.i=new c.TextDecoder}for(l=0;l<C;l++)this.h.h=!0,r+=this.h.i.decode(d[l],{stream:!(P&&l==C-1)});d.length=0,this.h.g+=r,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,zf(this.i,this.u,this.A,this.l,this.R,Ne,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Pe=this.g;if((ve=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ve)){var he=ve;break t}}he=null}if(h=he)jn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ys(this,h);else{this.o=!1,this.s=3,Fe(12),vn(this),hi(this);break e}}if(this.P){h=!0;let ut;for(;!this.J&&this.C<j.length;)if(ut=Jf(this,j),ut==gs){Ne==4&&(this.s=4,Fe(14),h=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Ia){this.s=4,Fe(15),jn(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else jn(this.i,this.l,ut,null),ys(this,ut);if(ba(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||j.length!=0||this.h.h||(this.s=1,Fe(16),h=!1),this.o=this.o&&h,!h)jn(this.i,this.l,j,"[Invalid Chunked Response]"),vn(this),hi(this);else if(0<j.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ts(De),De.M=!0,Fe(11))}}else jn(this.i,this.l,j,null),ys(this,j);Ne==4&&vn(this),this.o&&!this.J&&(Ne==4?Ya(this.j,this):(this.o=!1,nr(this)))}else fd(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),vn(this),hi(this)}}}catch{}finally{}};function ba(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Jf(r,l){var h=r.C,d=l.indexOf(`
`,h);return d==-1?gs:(h=Number(l.substring(h,d)),isNaN(h)?Ia:(d+=1,d+h>l.length?gs:(l=l.slice(d,d+h),r.C=d+h,l)))}Jt.prototype.cancel=function(){this.J=!0,vn(this)};function nr(r){r.S=Date.now()+r.I,Ta(r,r.I)}function Ta(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=ci(b(r.ba,r),l)}function vs(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Jt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Kf(this.i,this.A),this.L!=2&&(li(),Fe(17)),vn(this),this.s=2,hi(this)):Ta(this,this.S-r)};function hi(r){r.j.G==0||r.J||Ya(r.j,r)}function vn(r){vs(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,oi(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function ys(r,l){try{var h=r.j;if(h.G!=0&&(h.g==r||_s(h.h,r))){if(!r.K&&_s(h.h,r)&&h.G==3){try{var d=h.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var C=d;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)hr(h),cr(h);else break e;bs(h),Fe(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=ci(b(h.Za,h),6e3));if(1>=Ra(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else _n(h,11)}else if((r.K||h.g==r)&&hr(h),!B(l))for(C=h.Da.g.parse(l),l=0;l<C.length;l++){let he=C[l];if(h.T=he[0],he=he[1],h.G==2)if(he[0]=="c"){h.K=he[1],h.ia=he[2];const De=he[3];De!=null&&(h.la=De,h.j.info("VER="+h.la));const Ne=he[4];Ne!=null&&(h.Aa=Ne,h.j.info("SVER="+h.Aa));const Vn=he[5];Vn!=null&&typeof Vn=="number"&&0<Vn&&(d=1.5*Vn,h.L=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const ut=r.g;if(ut){const fr=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fr){var P=d.h;P.g||fr.indexOf("spdy")==-1&&fr.indexOf("quic")==-1&&fr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ws(P,P.h),P.h=null))}if(d.D){const Ss=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(d.ya=Ss,we(d.I,d.D,Ss))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),d=h;var j=r;if(d.qa=Za(d,d.J?d.ia:null,d.W),j.K){Ca(d.h,j);var ve=j,Pe=d.L;Pe&&(ve.I=Pe),ve.B&&(vs(ve),nr(ve)),d.g=j}else qa(d);0<h.i.length&&ur(h)}else he[0]!="stop"&&he[0]!="close"||_n(h,7);else h.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?_n(h,7):Es(h):he[0]!="noop"&&h.l&&h.l.ta(he),h.v=0)}}li(4)}catch{}}var Yf=class{constructor(r,l){this.g=r,this.map=l}};function Sa(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Aa(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ra(r){return r.h?1:r.g?r.g.size:0}function _s(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function ws(r,l){r.g?r.g.add(l):r.h=l}function Ca(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}Sa.prototype.cancel=function(){if(this.i=Pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Pa(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const h of r.g.values())l=l.concat(h.D);return l}return U(r.i)}function Xf(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(u(r)){for(var l=[],h=r.length,d=0;d<h;d++)l.push(r[d]);return l}l=[],h=0;for(d in r)l[h++]=r[d];return l}function Qf(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(u(r)||typeof r=="string"){var l=[];r=r.length;for(var h=0;h<r;h++)l.push(h);return l}l=[],h=0;for(const d in r)l[h++]=d;return l}}}function Oa(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(u(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var h=Qf(r),d=Xf(r),C=d.length,P=0;P<C;P++)l.call(void 0,d[P],h&&h[P],r)}var ka=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zf(r,l){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var d=r[h].indexOf("="),C=null;if(0<=d){var P=r[h].substring(0,d);C=r[h].substring(d+1)}else P=r[h];l(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function yn(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof yn){this.h=r.h,ir(this,r.j),this.o=r.o,this.g=r.g,rr(this,r.s),this.l=r.l;var l=r.i,h=new pi;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Da(this,h),this.m=r.m}else r&&(l=String(r).match(ka))?(this.h=!1,ir(this,l[1]||"",!0),this.o=fi(l[2]||""),this.g=fi(l[3]||"",!0),rr(this,l[4]),this.l=fi(l[5]||"",!0),Da(this,l[6]||"",!0),this.m=fi(l[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}yn.prototype.toString=function(){var r=[],l=this.j;l&&r.push(di(l,Na,!0),":");var h=this.g;return(h||l=="file")&&(r.push("//"),(l=this.o)&&r.push(di(l,Na,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(di(h,h.charAt(0)=="/"?nd:td,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",di(h,rd)),r.join("")};function Ot(r){return new yn(r)}function ir(r,l,h){r.j=h?fi(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function rr(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function Da(r,l,h){l instanceof pi?(r.i=l,sd(r.i,r.h)):(h||(l=di(l,id)),r.i=new pi(l,r.h))}function we(r,l,h){r.i.set(l,h)}function sr(r){return we(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function fi(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function di(r,l,h){return typeof r=="string"?(r=encodeURI(r).replace(l,ed),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function ed(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Na=/[#\/\?@]/g,td=/[#\?:]/g,nd=/[#\?]/g,id=/[#\?@]/g,rd=/#/g;function pi(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function Yt(r){r.g||(r.g=new Map,r.h=0,r.i&&Zf(r.i,function(l,h){r.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=pi.prototype,t.add=function(r,l){Yt(this),this.i=null,r=$n(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(l),this.h+=1,this};function xa(r,l){Yt(r),l=$n(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function Ma(r,l){return Yt(r),l=$n(r,l),r.g.has(l)}t.forEach=function(r,l){Yt(this),this.g.forEach(function(h,d){h.forEach(function(C){r.call(l,C,d,this)},this)},this)},t.na=function(){Yt(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let d=0;d<l.length;d++){const C=r[d];for(let P=0;P<C.length;P++)h.push(l[d])}return h},t.V=function(r){Yt(this);let l=[];if(typeof r=="string")Ma(this,r)&&(l=l.concat(this.g.get($n(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)l=l.concat(r[h])}return l},t.set=function(r,l){return Yt(this),this.i=null,r=$n(this,r),Ma(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},t.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function La(r,l,h){xa(r,l),0<h.length&&(r.i=null,r.g.set($n(r,l),U(h)),r.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var d=l[h];const P=encodeURIComponent(String(d)),j=this.V(d);for(d=0;d<j.length;d++){var C=P;j[d]!==""&&(C+="="+encodeURIComponent(String(j[d]))),r.push(C)}}return this.i=r.join("&")};function $n(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function sd(r,l){l&&!r.j&&(Yt(r),r.i=null,r.g.forEach(function(h,d){var C=d.toLowerCase();d!=C&&(xa(this,d),La(this,C,h))},r)),r.j=l}function od(r,l){const h=new ui;if(c.Image){const d=new Image;d.onload=A(Xt,h,"TestLoadImage: loaded",!0,l,d),d.onerror=A(Xt,h,"TestLoadImage: error",!1,l,d),d.onabort=A(Xt,h,"TestLoadImage: abort",!1,l,d),d.ontimeout=A(Xt,h,"TestLoadImage: timeout",!1,l,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=r}else l(!1)}function ad(r,l){const h=new ui,d=new AbortController,C=setTimeout(()=>{d.abort(),Xt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:d.signal}).then(P=>{clearTimeout(C),P.ok?Xt(h,"TestPingServer: ok",!0,l):Xt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),Xt(h,"TestPingServer: error",!1,l)})}function Xt(r,l,h,d,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),d(h)}catch{}}function ld(){this.g=new er}function cd(r,l,h){const d=h||"";try{Oa(r,function(C,P){let j=C;f(C)&&(j=Ce(C)),l.push(d+P+"="+encodeURIComponent(j))})}catch(C){throw l.push(d+"type="+encodeURIComponent("_badmap")),C}}function or(r){this.l=r.Ub||null,this.j=r.eb||!1}x(or,cs),or.prototype.g=function(){return new ar(this.l,this.j)},or.prototype.i=function(r){return function(){return r}}({});function ar(r,l){Z.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ar,Z),t=ar.prototype,t.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,mi(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ua(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ua(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?gi(this):mi(this),this.readyState==3&&Ua(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,gi(this))},t.Qa=function(r){this.g&&(this.response=r,gi(this))},t.ga=function(){this.g&&gi(this)};function gi(r){r.readyState=4,r.l=null,r.j=null,r.v=null,mi(r)}t.setRequestHeader=function(r,l){this.u.append(r,l)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=l.next();return r.join(`\r
`)};function mi(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Fa(r){let l="";return ce(r,function(h,d){l+=d,l+=":",l+=h,l+=`\r
`}),l}function Is(r,l,h){e:{for(d in h){var d=!1;break e}d=!0}d||(h=Fa(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):we(r,l,h))}function Te(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Te,Z);var ud=/^https?$/i,hd=["POST","PUT"];t=Te.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,l,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ps.g(),this.v=this.o?ga(this.o):ga(ps),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(P){ja(this,P);return}if(r=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var C in d)h.set(C,d[C]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())h.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),C=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(hd,l,void 0))||d||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Va(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){ja(this,P)}};function ja(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,$a(r),lr(r)}function $a(r){r.A||(r.A=!0,ne(r,"complete"),ne(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ne(this,"complete"),ne(this,"abort"),lr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),lr(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ha(this):this.bb())},t.bb=function(){Ha(this)};function Ha(r){if(r.h&&typeof a<"u"&&(!r.v[1]||kt(r)!=4||r.Z()!=2)){if(r.u&&kt(r)==4)Oe(r.Ea,0,r);else if(ne(r,"readystatechange"),kt(r)==4){r.h=!1;try{const j=r.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var d;if(d=j===0){var C=String(r.D).match(ka)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),d=!ud.test(C?C.toLowerCase():"")}h=d}if(h)ne(r,"complete"),ne(r,"success");else{r.m=6;try{var P=2<kt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",$a(r)}}finally{lr(r)}}}}function lr(r,l){if(r.g){Va(r);const h=r.g,d=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||ne(r,"ready");try{h.onreadystatechange=d}catch{}}}function Va(r){r.I&&(c.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function kt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),rt(l)}};function Ba(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function fd(r){const l={};r=(r.g&&2<=kt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<r.length;d++){if(B(r[d]))continue;var h=T(r[d]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[C]||[];l[C]=P,P.push(h)}I(l,function(d){return d.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(r,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||l}function Wa(r){this.Aa=0,this.i=[],this.j=new ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,r),this.cb=vi("retryDelaySeedMs",1e4,r),this.Wa=vi("forwardChannelMaxRetries",2,r),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Sa(r&&r.concurrentRequestLimit),this.Da=new ld,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wa.prototype,t.la=8,t.G=1,t.connect=function(r,l,h,d){Fe(0),this.W=r,this.H=l||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.I=Za(this,null,this.W),ur(this)};function Es(r){if(za(r),r.G==3){var l=r.U++,h=Ot(r.I);if(we(h,"SID",r.K),we(h,"RID",l),we(h,"TYPE","terminate"),yi(r,h),l=new Jt(r,r.j,l),l.L=2,l.v=sr(Ot(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=el(l.j,null),l.g.ea(l.v)),l.F=Date.now(),nr(l)}Qa(r)}function cr(r){r.g&&(Ts(r),r.g.cancel(),r.g=null)}function za(r){cr(r),r.u&&(c.clearTimeout(r.u),r.u=null),hr(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function ur(r){if(!Aa(r.h)&&!r.s){r.s=!0;var l=r.Ga;oe||ct(),re||(oe(),re=!0),Ye.add(l,r),r.B=0}}function dd(r,l){return Ra(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=ci(b(r.Ga,r,l),Xa(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const C=new Jt(this,this.j,r);let P=this.o;if(this.S&&(P?(P=m(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Ga(this,C,l),h=Ot(this.I),we(h,"RID",r),we(h,"CVER",22),this.D&&we(h,"X-HTTP-Session-Id",this.D),yi(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(Fa(P)))+"&"+l:this.m&&Is(h,this.m,P)),ws(this.h,C),this.Ua&&we(h,"TYPE","init"),this.P?(we(h,"$req",l),we(h,"SID","null"),C.T=!0,ms(C,h,null)):ms(C,h,l),this.G=2}}else this.G==3&&(r?Ka(this,r):this.i.length==0||Aa(this.h)||Ka(this))};function Ka(r,l){var h;l?h=l.l:h=r.U++;const d=Ot(r.I);we(d,"SID",r.K),we(d,"RID",h),we(d,"AID",r.T),yi(r,d),r.m&&r.o&&Is(d,r.m,r.o),h=new Jt(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),l&&(r.i=l.D.concat(r.i)),l=Ga(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),ws(r.h,h),ms(h,d,l)}function yi(r,l){r.H&&ce(r.H,function(h,d){we(l,d,h)}),r.l&&Oa({},function(h,d){we(l,d,h)})}function Ga(r,l,h){h=Math.min(r.i.length,h);var d=r.l?b(r.l.Na,r.l,r):null;e:{var C=r.i;let P=-1;for(;;){const j=["count="+h];P==-1?0<h?(P=C[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let ve=!0;for(let Pe=0;Pe<h;Pe++){let he=C[Pe].g;const De=C[Pe].map;if(he-=P,0>he)P=Math.max(0,C[Pe].g-100),ve=!1;else try{cd(De,j,"req"+he+"_")}catch{d&&d(De)}}if(ve){d=j.join("&");break e}}}return r=r.i.splice(0,h),l.D=r,d}function qa(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;oe||ct(),re||(oe(),re=!0),Ye.add(l,r),r.v=0}}function bs(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=ci(b(r.Fa,r),Xa(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=ci(b(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),cr(this),Ja(this))};function Ts(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function Ja(r){r.g=new Jt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=Ot(r.qa);we(l,"RID","rpc"),we(l,"SID",r.K),we(l,"AID",r.T),we(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&we(l,"TO",r.ja),we(l,"TYPE","xmlhttp"),yi(r,l),r.m&&r.o&&Is(l,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=sr(Ot(l)),h.m=null,h.P=!0,Ea(h,r)}t.Za=function(){this.C!=null&&(this.C=null,cr(this),bs(this),Fe(19))};function hr(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Ya(r,l){var h=null;if(r.g==l){hr(r),Ts(r),r.g=null;var d=2}else if(_s(r.h,l))h=l.D,Ca(r.h,l),d=1;else return;if(r.G!=0){if(l.o)if(d==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var C=r.B;d=fs(),ne(d,new _a(d,h)),ur(r)}else qa(r);else if(C=l.s,C==3||C==0&&0<l.X||!(d==1&&dd(r,l)||d==2&&bs(r)))switch(h&&0<h.length&&(l=r.h,l.i=l.i.concat(h)),C){case 1:_n(r,5);break;case 4:_n(r,10);break;case 3:_n(r,6);break;default:_n(r,2)}}}function Xa(r,l){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*l}function _n(r,l){if(r.j.info("Error code "+l),l==2){var h=b(r.fb,r),d=r.Xa;const C=!d;d=new yn(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ir(d,"https"),sr(d),C?od(d.toString(),h):ad(d.toString(),h)}else Fe(2);r.G=0,r.l&&r.l.sa(l),Qa(r),za(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Qa(r){if(r.G=0,r.ka=[],r.l){const l=Pa(r.h);(l.length!=0||r.i.length!=0)&&(G(r.ka,l),G(r.ka,r.i),r.h.i.length=0,U(r.i),r.i.length=0),r.l.ra()}}function Za(r,l,h){var d=h instanceof yn?Ot(h):new yn(h);if(d.g!="")l&&(d.g=l+"."+d.g),rr(d,d.s);else{var C=c.location;d=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;var P=new yn(null);d&&ir(P,d),l&&(P.g=l),C&&rr(P,C),h&&(P.l=h),d=P}return h=r.D,l=r.ya,h&&l&&we(d,h,l),we(d,"VER",r.la),yi(r,d),d}function el(r,l,h){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new Te(new or({eb:h})):new Te(r.pa),l.Ha(r.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tl(){}t=tl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function st(r,l){Z.call(this),this.g=new Wa(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!B(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new Hn(this)}x(st,Z),st.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){Es(this.g)},st.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=Ce(r),r=h);l.i.push(new Yf(l.Ya++,r)),l.G==3&&ur(l)},st.prototype.N=function(){this.g.l=null,delete this.j,Es(this.g),delete this.g,st.aa.N.call(this)};function nl(r){us.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const h in l){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}x(nl,us);function il(){hs.call(this),this.status=1}x(il,hs);function Hn(r){this.g=r}x(Hn,tl),Hn.prototype.ua=function(){ne(this.g,"a")},Hn.prototype.ta=function(r){ne(this.g,new nl(r))},Hn.prototype.sa=function(r){ne(this.g,new il)},Hn.prototype.ra=function(){ne(this.g,"b")},st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,qf.COMPLETE="complete",Bf.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha}).apply(typeof vr<"u"?vr:typeof self<"u"?self:typeof window<"u"?window:{});const Cc="@firebase/firestore",Pc="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new is("@firebase/firestore");function dt(t,...e){if(ii.logLevel<=me.DEBUG){const n=e.map(sa);ii.debug(`Firestore (${Zi}): ${t}`,...n)}}function vf(t,...e){if(ii.logLevel<=me.ERROR){const n=e.map(sa);ii.error(`Firestore (${Zi}): ${t}`,...n)}}function Cw(t,...e){if(ii.logLevel<=me.WARN){const n=e.map(sa);ii.warn(`Firestore (${Zi}): ${t}`,...n)}}function sa(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw vf(e),new Error(e)}function xi(t,e){t||oa()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ge extends _t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class Ow{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kw{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xi(this.o===void 0);let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let o=new Mi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Mi,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{dt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(dt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Mi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(dt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xi(typeof i.accessToken=="string"),new yf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xi(e===null||typeof e=="string"),new $e(e)}}class Dw{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Nw{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Dw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xw{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ot(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){xi(this.o===void 0);const i=o=>{o.error!=null&&dt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,dt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{dt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):dt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Oc(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xi(typeof n.token=="string"),this.R=n.token,new Oc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Mw(t){return t.name==="IndexedDbTransactionError"}const bo="(default)";class Br{constructor(e,n){this.projectId=e,this.database=n||bo}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===bo}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kc,le;(le=kc||(kc={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mf([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=1048576;function Js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Ti=e,this.timerId=n,this.Go=i,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-i);s>0&&dt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const a=Date.now()+i,c=new aa(e,n,a,s,o);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ge(Ke.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Dc,Nc;(Nc=Dc||(Dc={}))._a="default",Nc.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map;function $w(t,e,n,i){if(e===!0&&i===!0)throw new Ge(Ke.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hw(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oa()}function Vw(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ge(Ke.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hw(t);throw new Ge(Ke.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="firestore.googleapis.com",Mc=!0;class Lc{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ge(Ke.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_f,this.ssl=Mc}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Mc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Lw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Uw)throw new Ge(Ke.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$w("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ge(Ke.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ge(Ke.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ge(Ke.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ge(Ke.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ge(Ke.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Pw;switch(i.type){case"firstParty":return new Nw(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ge(Ke.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=xc.get(n);i&&(dt("ComponentProvider","Removing Datastore"),xc.delete(n),i.terminate())}(this),Promise.resolve()}}function Bw(t,e,n,i={}){var s;const o=(t=Vw(t,wf))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;o.host!==_f&&o.host!==c&&Cw("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:i});if(!fn(u,a)&&(t._setSettings(u),i.mockUserToken)){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=$e.MOCK_USER;else{f=Km(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new Ge(Ke.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $e(v)}t._authCredentials=new Ow(new yf(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="AsyncQueue";class Fc{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Fw(this,"async_queue_retry"),this.bu=()=>{const i=Js();i&&dt(Uc,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.Su=e;const n=Js();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Js();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Mi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Mw(e))throw e;dt(Uc,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(i);throw vf("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.pu=!1,i))));return this.Su=n,n}enqueueAfterDelay(e,n,i){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=aa.createAndSchedule(this,e,n,i,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&oa()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Ww extends wf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Fc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fc(e),this._firestoreClient=void 0,await e}}}function zw(t,e){const n=typeof t=="object"?t:Jo(),i=typeof t=="string"?t:bo,s=Ln(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Wm("firestore");o&&Bw(s,...o)}return s}(function(e,n=!0){(function(s){Zi=s})(ri),Rt(new yt("firestore",(i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),c=new Ww(new kw(i.getProvider("auth-internal")),new xw(a,i.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Ge(Ke.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(f.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),lt(Cc,Pc,e),lt(Cc,Pc,"esm2017")})();var Kw="firebase",Gw="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Kw,Gw,"app");const If="@firebase/installations",la="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=1e4,bf=`w:${la}`,Tf="FIS_v2",qw="https://firebaseinstallations.googleapis.com/v1",Jw=60*60*1e3,Yw="installations",Xw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dn=new Mn(Yw,Xw,Qw);function Sf(t){return t instanceof _t&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af({projectId:t}){return`${qw}/projects/${t}/installations`}function Rf(t){return{token:t.token,requestStatus:2,expiresIn:eI(t.expiresIn),creationTime:Date.now()}}async function Cf(t,e){const i=(await e.json()).error;return Dn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Pf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zw(t,{refreshToken:e}){const n=Pf(t);return n.append("Authorization",tI(e)),n}async function Of(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eI(t){return Number(t.replace("s","000"))}function tI(t){return`${Tf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Af(t),s=Pf(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Tf,appId:t.appId,sdkVersion:bf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Of(()=>fetch(i,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Rf(f.authToken)}}else throw await Cf("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=/^[cdef][\w-]{21}$/,To="";function sI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oI(t);return rI.test(n)?n:To}catch{return To}}function oI(t){return iI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function Nf(t,e){const n=as(t);xf(n,e),aI(n,e)}function xf(t,e){const n=Df.get(t);if(n)for(const i of n)i(e)}function aI(t,e){const n=lI();n&&n.postMessage({key:t,fid:e}),cI()}let An=null;function lI(){return!An&&"BroadcastChannel"in self&&(An=new BroadcastChannel("[Firebase] FID Change"),An.onmessage=t=>{xf(t.data.key,t.data.fid)}),An}function cI(){Df.size===0&&An&&(An.close(),An=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="firebase-installations-database",hI=1,Nn="firebase-installations-store";let Ys=null;function ca(){return Ys||(Ys=kh(uI,hI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nn)}}})),Ys}async function Wr(t,e){const n=as(t),s=(await ca()).transaction(Nn,"readwrite"),o=s.objectStore(Nn),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Nf(t,e.fid),e}async function Mf(t){const e=as(t),i=(await ca()).transaction(Nn,"readwrite");await i.objectStore(Nn).delete(e),await i.done}async function ls(t,e){const n=as(t),s=(await ca()).transaction(Nn,"readwrite"),o=s.objectStore(Nn),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&Nf(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t){let e;const n=await ls(t.appConfig,i=>{const s=fI(i),o=dI(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===To?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fI(t){const e=t||{fid:sI(),registrationStatus:0};return Lf(e)}function dI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Dn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=pI(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gI(t)}:{installationEntry:e}}async function pI(t,e){try{const n=await nI(t,e);return Wr(t.appConfig,n)}catch(n){throw Sf(n)&&n.customData.serverCode===409?await Mf(t.appConfig):await Wr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gI(t){let e=await jc(t.appConfig);for(;e.registrationStatus===1;)await kf(100),e=await jc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await ua(t);return i||n}return e}function jc(t){return ls(t,e=>{if(!e)throw Dn.create("installation-not-found");return Lf(e)})}function Lf(t){return mI(t)?{fid:t.fid,registrationStatus:0}:t}function mI(t){return t.registrationStatus===1&&t.registrationTime+Ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI({appConfig:t,heartbeatServiceProvider:e},n){const i=yI(t,n),s=Zw(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:bf,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Of(()=>fetch(i,c));if(u.ok){const f=await u.json();return Rf(f)}else throw await Cf("Generate Auth Token",u)}function yI(t,{fid:e}){return`${Af(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e=!1){let n;const i=await ls(t.appConfig,o=>{if(!Uf(o))throw Dn.create("not-registered");const a=o.authToken;if(!e&&II(a))return o;if(a.requestStatus===1)return n=_I(t,e),o;{if(!navigator.onLine)throw Dn.create("app-offline");const c=bI(o);return n=wI(t,c),c}});return n?await n:i.authToken}async function _I(t,e){let n=await $c(t.appConfig);for(;n.authToken.requestStatus===1;)await kf(100),n=await $c(t.appConfig);const i=n.authToken;return i.requestStatus===0?ha(t,e):i}function $c(t){return ls(t,e=>{if(!Uf(e))throw Dn.create("not-registered");const n=e.authToken;return TI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wI(t,e){try{const n=await vI(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Wr(t.appConfig,i),n}catch(n){if(Sf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mf(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Wr(t.appConfig,i)}throw n}}function Uf(t){return t!==void 0&&t.registrationStatus===2}function II(t){return t.requestStatus===2&&!EI(t)}function EI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jw}function bI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function TI(t){return t.requestStatus===1&&t.requestTime+Ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t){const e=t,{installationEntry:n,registrationPromise:i}=await ua(e);return i?i.catch(console.error):ha(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(t,e=!1){const n=t;return await RI(n),(await ha(n,e)).token}async function RI(t){const{registrationPromise:e}=await ua(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){if(!t||!t.options)throw Xs("App Configuration");if(!t.name)throw Xs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xs(t){return Dn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="installations",PI="installations-internal",OI=t=>{const e=t.getProvider("app").getImmediate(),n=CI(e),i=Ln(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},kI=t=>{const e=t.getProvider("app").getImmediate(),n=Ln(e,Ff).getImmediate();return{getId:()=>SI(n),getToken:s=>AI(n,s)}};function DI(){Rt(new yt(Ff,OI,"PUBLIC")),Rt(new yt(PI,kI,"PRIVATE"))}DI();lt(If,la);lt(If,la,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="analytics",NI="firebase_id",xI="origin",MI=60*1e3,LI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new is("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},et=new Mn("analytics","Analytics",UI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){if(!t.startsWith(fa)){const e=et.create("invalid-gtag-resource",{gtagURL:t});return Je.warn(e.message),""}return t}function jf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jI(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $I(t,e){const n=jI("firebase-js-sdk-policy",{createScriptURL:FI}),i=document.createElement("script"),s=`${fa}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function HI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VI(t,e,n,i,s,o){const a=i[s];try{if(a)await e[a];else{const u=(await jf(n)).find(f=>f.measurementId===s);u&&await e[u.appId]}}catch(c){Je.error(c)}t("config",s,o)}async function BI(t,e,n,i,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await jf(n);for(const u of a){const f=c.find(v=>v.measurementId===u),p=f&&e[f.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,s||{})}catch(o){Je.error(o)}}function WI(t,e,n,i){async function s(o,...a){try{if(o==="event"){const[c,u]=a;await BI(t,e,n,c,u)}else if(o==="config"){const[c,u]=a;await VI(t,e,n,i,c,u)}else if(o==="consent"){const[c,u]=a;t("consent",c,u)}else if(o==="get"){const[c,u,f]=a;t("get",c,u,f)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){Je.error(c)}}return s}function zI(t,e,n,i,s){let o=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=WI(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function KI(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(fa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=30,qI=1e3;class JI{constructor(e={},n=qI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $f=new JI;function YI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function XI(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:YI(i)},o=LI.replace("{app-id}",n),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function QI(t,e=$f,n){const{appId:i,apiKey:s,measurementId:o}=t.options;if(!i)throw et.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw et.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new tE;return setTimeout(async()=>{c.abort()},MI),Hf({appId:i,apiKey:s,measurementId:o},a,c,e)}async function Hf(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=$f){var o;const{appId:a,measurementId:c}=t;try{await ZI(i,e)}catch(u){if(c)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const u=await XI(t);return s.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!eE(f)){if(s.deleteThrottleMetadata(a),c)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:c};throw u}const p=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Zl(n,s.intervalMillis,GI):Zl(n,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(a,v),Je.debug(`Calling attemptFetch again in ${p} millis`),Hf(t,v,i,s)}}function ZI(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),i(et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eE(t){if(!(t instanceof _t)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class tE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nE(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const o=await e,a=Object.assign(Object.assign({},i),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(){if(Rh())try{await Ch()}catch(t){return Je.warn(et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Je.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rE(t,e,n,i,s,o,a){var c;const u=QI(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Je.error(A)),e.push(u);const f=iE().then(A=>{if(A)return i.getId()}),[p,v]=await Promise.all([u,f]);KI(o)||$I(o,p.measurementId),s("js",new Date);const b=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return b[xI]="firebase",b.update=!0,v!=null&&(b[NI]=v),s("config",p.measurementId,b),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.app=e}_delete(){return delete Li[this.app.options.appId],Promise.resolve()}}let Li={},Hc=[];const Vc={};let Qs="dataLayer",oE="gtag",Bc,Vf,Wc=!1;function aE(){const t=[];if(Ah()&&t.push("This is a browser extension environment."),Xm()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:e});Je.warn(n.message)}}function lE(t,e,n){aE();const i=t.options.appId;if(!i)throw et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(Li[i]!=null)throw et.create("already-exists",{id:i});if(!Wc){HI(Qs);const{wrappedGtag:o,gtagCore:a}=zI(Li,Hc,Vc,Qs,oE);Vf=o,Bc=a,Wc=!0}return Li[i]=rE(t,Hc,Vc,e,Bc,Qs,n),new sE(t)}function cE(t=Jo()){t=Pt(t);const e=Ln(t,zr);return e.isInitialized()?e.getImmediate():uE(t)}function uE(t,e={}){const n=Ln(t,zr);if(n.isInitialized()){const s=n.getImmediate();if(fn(e,n.getOptions()))return s;throw et.create("already-initialized")}return n.initialize({options:e})}function hE(t,e,n,i){t=Pt(t),nE(Vf,Li[t.app.options.appId],e,n,i).catch(s=>Je.error(s))}const zc="@firebase/analytics",Kc="0.10.12";function fE(){Rt(new yt(zr,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return lE(i,s,n)},"PUBLIC")),Rt(new yt("analytics-internal",t,"PRIVATE")),lt(zc,Kc),lt(zc,Kc,"esm2017");function t(e){try{const n=e.getProvider(zr).getImmediate();return{logEvent:(i,s,o)=>hE(n,i,s,o)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}fE();const dE={apiKey:"AIzaSyAdAMmRmZOm6z8fkEJjokfNOvCdh4_-wXA",authDomain:"tramsab-dba2b.firebaseapp.com",projectId:"tramsab-dba2b",storageBucket:"tramsab-dba2b.firebasestorage.app",messagingSenderId:"1023036693849",appId:"1:1023036693849:web:9e6c9fb3bec62a3e368048",measurementId:"G-V7KKNP5PTC"},da=Dh(dE),Gc=Cr(da);zw(da);cE(da);const pE=new Ut,qc=async()=>{await L_(Gc,pE).then(t=>{Gc.onAuthStateChanged(async e=>{location.reload()})})},gE={class:"reg-container"},mE={class:"card card--accent"},vE={class:"input"},yE=Gi({__name:"Register",setup(t){const e=Ft(""),n=Ft(),i=Ft(""),s=async()=>{if(n.value.length<3){alert("Name is too short");return}else if(i.value.length<6){alert("Password is too short");return}else{const c=Cr();f_(c,e.value,i.value).then(u=>{const f=u.user;return console.log(f),o(f)}).then(()=>{a()}).catch(u=>{console.error(u.message),alert(u.message)})}},o=c=>(console.log(c),new Promise(u=>{const f=m_(Cr(),p=>{p&&(f(),u())})})),a=()=>{const c=Cr(),u={url:"https://tramsab-dba2b.web.app",handleCodeInApp:!0};c.currentUser?d_(c.currentUser,u).then(()=>{console.log("Verification email sent."),alert("Kolla inkorgen!"),location.reload()}).catch(f=>{console.error("Error sending email:",f.message)}):console.error("No authenticated user found.")};return(c,u)=>(Tn(),Oi("div",gE,[fe("div",mE,[fe("button",{onClick:u[0]||(u[0]=(...f)=>Vt(qc)&&Vt(qc)(...f))},"Registrera med Google"),u[4]||(u[4]=fe("p",null,"eller registrera med email",-1)),fe("label",vE,[ks(fe("input",{class:"input__field",type:"text",placeholder:"Namn","onUpdate:modelValue":u[1]||(u[1]=f=>n.value=f)},null,512),[[Fs,n.value]]),ks(fe("input",{class:"input__field",type:"email",placeholder:"Email","onUpdate:modelValue":u[2]||(u[2]=f=>e.value=f)},null,512),[[Fs,e.value]]),ks(fe("input",{class:"input__field",type:"password",placeholder:"Lösenord","onUpdate:modelValue":u[3]||(u[3]=f=>i.value=f)},null,512),[[Fs,i.value]])]),fe("div",{class:"button-group"},[fe("button",{onClick:s},"Skicka")])])]))}}),_E=Ko(yE,[["__scopeId","data-v-a5d7aa18"]]),wE={class:"container"},IE={class:"header"},EE={class:"fixed-text"},bE={key:0,class:"blinking"},TE={key:1,class:"openReg"},SE=Gi({__name:"HomeView",setup(t){const e=Ft(new Date().toDateString()),n=Ft(new Date().toLocaleTimeString()),i=Ft(""),s=Ft(!1),o=()=>{n.value=new Date().toLocaleTimeString()},a=()=>{const f=new Intl.DateTimeFormat("en",{timeZoneName:"short"}).formatToParts(new Date).find(p=>p.type==="timeZoneName");i.value=f?f.value:""};let c=null;Nu(()=>{a(),c=setInterval(o,1e3)}),Ho(()=>{c!==null&&clearInterval(c)});const u=()=>{s.value=!0};return(f,p)=>(Tn(),Oi(ht,null,[fe("div",wE,[fe("div",IE,[p[0]||(p[0]=fe("span",{class:"fixed-text trams-green"},"TRAMS AB ",-1)),fe("span",EE,_r(e.value)+" "+_r(i.value)+" "+_r(n.value),1),p[1]||(p[1]=fe("div",{class:"marquee-container"},[fe("div",{class:"marquee"},[fe("span",null,"Årets sommarspel är under uppbyggnad & kommer åter i vår")])],-1)),p[2]||(p[2]=fe("span",{class:"fixed-text"},"For we have not yet played our last card 🔎",-1))]),p[3]||(p[3]=fe("div",{class:"logo"}," TRAMS AB ",-1))]),p[9]||(p[9]=fe("div",{class:"image"},[fe("img",{src:Mm,alt:"Map of the world",class:"map blink_img"})],-1)),s.value?(Tn(),Oi("div",TE,[s.value?(Tn(),Zu(_E,{key:0})):Gp("",!0)])):(Tn(),Oi("div",bE,[p[6]||(p[6]=fe("p",{class:"trams-green"},"Would you like to play the game? (Y/N)",-1)),fe("p",{class:"trams-green"},[p[4]||(p[4]=th(">")),p[5]||(p[5]=fe("span",{class:"blink trams-green"},"_ (Y) useradd ",-1)),fe("span",{class:"pink-box",onClick:u},"registrera")]),p[7]||(p[7]=fe("div",{id:"interlaced"},null,-1)),p[8]||(p[8]=fe("div",{id:"glare"},null,-1))]))],64))}}),AE=Ko(SE,[["__scopeId","data-v-72118676"]]),RE=km({history:am("/"),routes:[{path:"/",name:"home",component:AE}]}),pa=Ag(xm);pa.use(Og());pa.use(RE);pa.mount("#app");
