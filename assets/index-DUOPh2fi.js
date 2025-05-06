(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},Hn=[],Et=()=>{},Jf=()=>!1,Fs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),po=t=>t.startsWith("onUpdate:"),Me=Object.assign,go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xf=Object.prototype.hasOwnProperty,pe=(t,e)=>Xf.call(t,e),te=Array.isArray,Bn=t=>js(t)==="[object Map]",Dc=t=>js(t)==="[object Set]",ie=t=>typeof t=="function",Se=t=>typeof t=="string",cn=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Nc=t=>(be(t)||ie(t))&&ie(t.then)&&ie(t.catch),xc=Object.prototype.toString,js=t=>xc.call(t),Yf=t=>js(t).slice(8,-1),Mc=t=>js(t)==="[object Object]",mo=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qf=/-(\w)/g,an=$s(t=>t.replace(Qf,(e,n)=>n?n.toUpperCase():"")),Zf=/\B([A-Z])/g,Cn=$s(t=>t.replace(Zf,"-$1").toLowerCase()),Lc=$s(t=>t.charAt(0).toUpperCase()+t.slice(1)),vr=$s(t=>t?`on${Lc(t)}`:""),sn=(t,e)=>!Object.is(t,e),yr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Uc=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ed=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ka;const Hs=()=>Ka||(Ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vo(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Se(i)?sd(i):vo(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Se(t)||be(t))return t}const td=/;(?![^(]*\))/g,nd=/:([^]+)/,id=/\/\*[^]*?\*\//g;function sd(t){const e={};return t.replace(id,"").split(td).forEach(n=>{if(n){const i=n.split(nd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function yo(t){let e="";if(Se(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const i=yo(t[n]);i&&(e+=i+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",od=fo(rd);function Fc(t){return!!t||t===""}const jc=t=>!!(t&&t.__v_isRef===!0),fs=t=>Se(t)?t:t==null?"":te(t)||be(t)&&(t.toString===xc||!ie(t.toString))?jc(t)?fs(t.value):JSON.stringify(t,$c,2):String(t),$c=(t,e)=>jc(e)?$c(t,e.value):Bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[_r(i,o)+" =>"]=r,n),{})}:Dc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_r(n))}:cn(e)?_r(e):be(e)&&!te(e)&&!Mc(e)?String(e):e,_r=(t,e="")=>{var n;return cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Hc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!e&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){Xe=this}off(){Xe=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ad(t){return new Hc(t)}function ld(){return Xe}let ve;const wr=new WeakSet;class Bc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wr.has(this)&&(wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qa(this),Wc(this);const e=ve,n=ht;ve=this,ht=!0;try{return this.fn()}finally{Gc(this),ve=e,ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Io(e);this.deps=this.depsTail=void 0,qa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Br(this)&&this.run()}get dirty(){return Br(this)}}let Vc=0,_i,wi;function zc(t,e=!1){if(t.flags|=8,e){t.next=wi,wi=t;return}t.next=_i,_i=t}function _o(){Vc++}function wo(){if(--Vc>0)return;if(wi){let e=wi;for(wi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;_i;){let e=_i;for(_i=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Wc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gc(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Io(i),cd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Br(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Kc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ki))return;t.globalVersion=ki;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Br(t)){t.flags&=-3;return}const n=ve,i=ht;ve=t,ht=!0;try{Wc(t);const r=t.fn(t._value);(e.version===0||sn(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ve=n,ht=i,Gc(t),t.flags&=-3}}function Io(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Io(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cd(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ht=!0;const qc=[];function un(){qc.push(ht),ht=!1}function hn(){const t=qc.pop();ht=t===void 0?!0:t}function qa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ve;ve=void 0;try{e()}finally{ve=n}}}let ki=0;class ud{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ve||!ht||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new ud(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,Jc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=i)}return n}trigger(e){this.version++,ki++,this.notify(e)}notify(e){_o();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wo()}}}function Jc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jc(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vr=new WeakMap,In=Symbol(""),zr=Symbol(""),Di=Symbol("");function Ne(t,e,n){if(ht&&ve){let i=Vr.get(t);i||Vr.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new bo),r.map=i,r.key=n),r.track()}}function Nt(t,e,n,i,r,o){const a=Vr.get(t);if(!a){ki++;return}const u=h=>{h&&h.trigger()};if(_o(),e==="clear")a.forEach(u);else{const h=te(t),d=h&&mo(n);if(h&&n==="length"){const p=Number(i);a.forEach((v,E)=>{(E==="length"||E===Di||!cn(E)&&E>=p)&&u(v)})}else switch((n!==void 0||a.has(void 0))&&u(a.get(n)),d&&u(a.get(Di)),e){case"add":h?d&&u(a.get("length")):(u(a.get(In)),Bn(t)&&u(a.get(zr)));break;case"delete":h||(u(a.get(In)),Bn(t)&&u(a.get(zr)));break;case"set":Bn(t)&&u(a.get(In));break}}wo()}function Ln(t){const e=de(t);return e===t?e:(Ne(e,"iterate",Di),ft(t)?e:e.map($e))}function Eo(t){return Ne(t=de(t),"iterate",Di),t}const hd={__proto__:null,[Symbol.iterator](){return Ir(this,Symbol.iterator,$e)},concat(...t){return Ln(this).concat(...t.map(e=>te(e)?Ln(e):e))},entries(){return Ir(this,"entries",t=>(t[1]=$e(t[1]),t))},every(t,e){return Ot(this,"every",t,e,void 0,arguments)},filter(t,e){return Ot(this,"filter",t,e,n=>n.map($e),arguments)},find(t,e){return Ot(this,"find",t,e,$e,arguments)},findIndex(t,e){return Ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ot(this,"findLast",t,e,$e,arguments)},findLastIndex(t,e){return Ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return br(this,"includes",t)},indexOf(...t){return br(this,"indexOf",t)},join(t){return Ln(this).join(t)},lastIndexOf(...t){return br(this,"lastIndexOf",t)},map(t,e){return Ot(this,"map",t,e,void 0,arguments)},pop(){return pi(this,"pop")},push(...t){return pi(this,"push",t)},reduce(t,...e){return Ja(this,"reduce",t,e)},reduceRight(t,...e){return Ja(this,"reduceRight",t,e)},shift(){return pi(this,"shift")},some(t,e){return Ot(this,"some",t,e,void 0,arguments)},splice(...t){return pi(this,"splice",t)},toReversed(){return Ln(this).toReversed()},toSorted(t){return Ln(this).toSorted(t)},toSpliced(...t){return Ln(this).toSpliced(...t)},unshift(...t){return pi(this,"unshift",t)},values(){return Ir(this,"values",$e)}};function Ir(t,e,n){const i=Eo(t),r=i[e]();return i!==t&&!ft(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const fd=Array.prototype;function Ot(t,e,n,i,r,o){const a=Eo(t),u=a!==t&&!ft(t),h=a[e];if(h!==fd[e]){const v=h.apply(t,o);return u?$e(v):v}let d=n;a!==t&&(u?d=function(v,E){return n.call(this,$e(v),E,t)}:n.length>2&&(d=function(v,E){return n.call(this,v,E,t)}));const p=h.call(a,d,i);return u&&r?r(p):p}function Ja(t,e,n,i){const r=Eo(t);let o=n;return r!==t&&(ft(t)?n.length>3&&(o=function(a,u,h){return n.call(this,a,u,h,t)}):o=function(a,u,h){return n.call(this,a,$e(u),h,t)}),r[e](o,...i)}function br(t,e,n){const i=de(t);Ne(i,"iterate",Di);const r=i[e](...n);return(r===-1||r===!1)&&Ao(n[0])?(n[0]=de(n[0]),i[e](...n)):r}function pi(t,e,n=[]){un(),_o();const i=de(t)[e].apply(t,n);return wo(),hn(),i}const dd=fo("__proto__,__v_isRef,__isVue"),Xc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cn));function pd(t){cn(t)||(t=String(t));const e=de(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class Yc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?Td:tu:o?eu:Zc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=te(e);if(!r){let h;if(a&&(h=hd[n]))return h;if(n==="hasOwnProperty")return pd}const u=Reflect.get(e,n,xe(e)?e:i);return(cn(n)?Xc.has(n):dd(n))||(r||Ne(e,"get",n),o)?u:xe(u)?a&&mo(n)?u:u.value:be(u)?r?iu(u):Bs(u):u}}class Qc extends Yc{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];if(!this._isShallow){const h=Tn(o);if(!ft(i)&&!Tn(i)&&(o=de(o),i=de(i)),!te(e)&&xe(o)&&!xe(i))return h?!1:(o.value=i,!0)}const a=te(e)&&mo(n)?Number(n)<e.length:pe(e,n),u=Reflect.set(e,n,i,xe(e)?e:r);return e===de(r)&&(a?sn(i,o)&&Nt(e,"set",n,i):Nt(e,"add",n,i)),u}deleteProperty(e,n){const i=pe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Nt(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!cn(n)||!Xc.has(n))&&Ne(e,"has",n),i}ownKeys(e){return Ne(e,"iterate",te(e)?"length":In),Reflect.ownKeys(e)}}class gd extends Yc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const md=new Qc,vd=new gd,yd=new Qc(!0);const Wr=t=>t,as=t=>Reflect.getPrototypeOf(t);function _d(t,e,n){return function(...i){const r=this.__v_raw,o=de(r),a=Bn(o),u=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=r[t](...i),p=n?Wr:e?Gr:$e;return!e&&Ne(o,"iterate",h?zr:In),{next(){const{value:v,done:E}=d.next();return E?{value:v,done:E}:{value:u?[p(v[0]),p(v[1])]:p(v),done:E}},[Symbol.iterator](){return this}}}}function ls(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wd(t,e){const n={get(r){const o=this.__v_raw,a=de(o),u=de(r);t||(sn(r,u)&&Ne(a,"get",r),Ne(a,"get",u));const{has:h}=as(a),d=e?Wr:t?Gr:$e;if(h.call(a,r))return d(o.get(r));if(h.call(a,u))return d(o.get(u));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Ne(de(r),"iterate",In),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,a=de(o),u=de(r);return t||(sn(r,u)&&Ne(a,"has",r),Ne(a,"has",u)),r===u?o.has(r):o.has(r)||o.has(u)},forEach(r,o){const a=this,u=a.__v_raw,h=de(u),d=e?Wr:t?Gr:$e;return!t&&Ne(h,"iterate",In),u.forEach((p,v)=>r.call(o,d(p),d(v),a))}};return Me(n,t?{add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear")}:{add(r){!e&&!ft(r)&&!Tn(r)&&(r=de(r));const o=de(this);return as(o).has.call(o,r)||(o.add(r),Nt(o,"add",r,r)),this},set(r,o){!e&&!ft(o)&&!Tn(o)&&(o=de(o));const a=de(this),{has:u,get:h}=as(a);let d=u.call(a,r);d||(r=de(r),d=u.call(a,r));const p=h.call(a,r);return a.set(r,o),d?sn(o,p)&&Nt(a,"set",r,o):Nt(a,"add",r,o),this},delete(r){const o=de(this),{has:a,get:u}=as(o);let h=a.call(o,r);h||(r=de(r),h=a.call(o,r)),u&&u.call(o,r);const d=o.delete(r);return h&&Nt(o,"delete",r,void 0),d},clear(){const r=de(this),o=r.size!==0,a=r.clear();return o&&Nt(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=_d(r,t,e)}),n}function To(t,e){const n=wd(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(pe(n,r)&&r in i?n:i,r,o)}const Id={get:To(!1,!1)},bd={get:To(!1,!0)},Ed={get:To(!0,!1)};const Zc=new WeakMap,eu=new WeakMap,tu=new WeakMap,Td=new WeakMap;function Sd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ad(t){return t.__v_skip||!Object.isExtensible(t)?0:Sd(Yf(t))}function Bs(t){return Tn(t)?t:So(t,!1,md,Id,Zc)}function nu(t){return So(t,!1,yd,bd,eu)}function iu(t){return So(t,!0,vd,Ed,tu)}function So(t,e,n,i,r){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const a=Ad(t);if(a===0)return t;const u=new Proxy(t,a===2?i:n);return r.set(t,u),u}function Ii(t){return Tn(t)?Ii(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function ft(t){return!!(t&&t.__v_isShallow)}function Ao(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function su(t){return!pe(t,"__v_skip")&&Object.isExtensible(t)&&Uc(t,"__v_skip",!0),t}const $e=t=>be(t)?Bs(t):t,Gr=t=>be(t)?iu(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function jn(t){return ru(t,!1)}function Rd(t){return ru(t,!0)}function ru(t,e){return xe(t)?t:new Cd(t,e)}class Cd{constructor(e,n){this.dep=new bo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:$e(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ft(e)||Tn(e);e=i?e:de(e),sn(e,n)&&(this._rawValue=e,this._value=i?e:$e(e),this.dep.trigger())}}function bn(t){return xe(t)?t.value:t}const Pd={get:(t,e,n)=>e==="__v_raw"?t:bn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ou(t){return Ii(t)?t:new Proxy(t,Pd)}class Od{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return zc(this,!0),!0}get value(){const e=this.dep.track();return Kc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kd(t,e,n=!1){let i,r;return ie(t)?i=t:(i=t.get,r=t.set),new Od(i,r,n)}const cs={},Is=new WeakMap;let yn;function Dd(t,e=!1,n=yn){if(n){let i=Is.get(n);i||Is.set(n,i=[]),i.push(t)}}function Nd(t,e,n=ye){const{immediate:i,deep:r,once:o,scheduler:a,augmentJob:u,call:h}=n,d=z=>r?z:ft(z)||r===!1||r===0?Zt(z,1):Zt(z);let p,v,E,A,x=!1,U=!1;if(xe(t)?(v=()=>t.value,x=ft(t)):Ii(t)?(v=()=>d(t),x=!0):te(t)?(U=!0,x=t.some(z=>Ii(z)||ft(z)),v=()=>t.map(z=>{if(xe(z))return z.value;if(Ii(z))return d(z);if(ie(z))return h?h(z,2):z()})):ie(t)?e?v=h?()=>h(t,2):t:v=()=>{if(E){un();try{E()}finally{hn()}}const z=yn;yn=p;try{return h?h(t,3,[A]):t(A)}finally{yn=z}}:v=Et,e&&r){const z=v,re=r===!0?1/0:r;v=()=>Zt(z(),re)}const K=ld(),J=()=>{p.stop(),K&&K.active&&go(K.effects,p)};if(o&&e){const z=e;e=(...re)=>{z(...re),J()}}let V=U?new Array(t.length).fill(cs):cs;const G=z=>{if(!(!(p.flags&1)||!p.dirty&&!z))if(e){const re=p.run();if(r||x||(U?re.some((ce,I)=>sn(ce,V[I])):sn(re,V))){E&&E();const ce=yn;yn=p;try{const I=[re,V===cs?void 0:U&&V[0]===cs?[]:V,A];h?h(e,3,I):e(...I),V=re}finally{yn=ce}}}else p.run()};return u&&u(G),p=new Bc(v),p.scheduler=a?()=>a(G,!1):G,A=z=>Dd(z,!1,p),E=p.onStop=()=>{const z=Is.get(p);if(z){if(h)h(z,4);else for(const re of z)re();Is.delete(p)}},e?i?G(!0):V=p.run():a?a(G.bind(null,!0),!0):p.run(),J.pause=p.pause.bind(p),J.resume=p.resume.bind(p),J.stop=J,J}function Zt(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xe(t))Zt(t.value,e,n);else if(te(t))for(let i=0;i<t.length;i++)Zt(t[i],e,n);else if(Dc(t)||Bn(t))t.forEach(i=>{Zt(i,e,n)});else if(Mc(t)){for(const i in t)Zt(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Zt(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hi(t,e,n,i){try{return i?t(...i):t()}catch(r){Vs(r,e,n)}}function At(t,e,n,i){if(ie(t)){const r=Hi(t,e,n,i);return r&&Nc(r)&&r.catch(o=>{Vs(o,e,n)}),r}if(te(t)){const r=[];for(let o=0;o<t.length;o++)r.push(At(t[o],e,n,i));return r}}function Vs(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ye;if(e){let u=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const p=u.ec;if(p){for(let v=0;v<p.length;v++)if(p[v](t,h,d)===!1)return}u=u.parent}if(o){un(),Hi(o,null,10,[t,h,d]),hn();return}}xd(t,n,r,i,a)}function xd(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const He=[];let yt=-1;const Vn=[];let Xt=null,Un=0;const au=Promise.resolve();let bs=null;function lu(t){const e=bs||au;return t?e.then(this?t.bind(this):t):e}function Md(t){let e=yt+1,n=He.length;for(;e<n;){const i=e+n>>>1,r=He[i],o=Ni(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function Ro(t){if(!(t.flags&1)){const e=Ni(t),n=He[He.length-1];!n||!(t.flags&2)&&e>=Ni(n)?He.push(t):He.splice(Md(e),0,t),t.flags|=1,cu()}}function cu(){bs||(bs=au.then(hu))}function Ld(t){te(t)?Vn.push(...t):Xt&&t.id===-1?Xt.splice(Un+1,0,t):t.flags&1||(Vn.push(t),t.flags|=1),cu()}function Xa(t,e,n=yt+1){for(;n<He.length;n++){const i=He[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;He.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function uu(t){if(Vn.length){const e=[...new Set(Vn)].sort((n,i)=>Ni(n)-Ni(i));if(Vn.length=0,Xt){Xt.push(...e);return}for(Xt=e,Un=0;Un<Xt.length;Un++){const n=Xt[Un];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xt=null,Un=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hu(t){try{for(yt=0;yt<He.length;yt++){const e=He[yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yt<He.length;yt++){const e=He[yt];e&&(e.flags&=-2)}yt=-1,He.length=0,uu(),bs=null,(He.length||Vn.length)&&hu()}}let bt=null,fu=null;function Es(t){const e=bt;return bt=t,fu=t&&t.type.__scopeId||null,e}function Ud(t,e=bt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&rl(-1);const o=Es(e);let a;try{a=t(...r)}finally{Es(o),i._d&&rl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function mn(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){const u=r[a];o&&(u.oldValue=o[a].value);let h=u.dir[i];h&&(un(),At(h,n,8,[t.el,u,t,e]),hn())}}const Fd=Symbol("_vte"),jd=t=>t.__isTeleport;function Co(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Co(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function zs(t,e){return ie(t)?Me({name:t.name},e,{setup:t}):t}function du(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ts(t,e,n,i,r=!1){if(te(t)){t.forEach((x,U)=>Ts(x,e&&(te(e)?e[U]:e),n,i,r));return}if(bi(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ts(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Do(i.component):i.el,a=r?null:o,{i:u,r:h}=t,d=e&&e.r,p=u.refs===ye?u.refs={}:u.refs,v=u.setupState,E=de(v),A=v===ye?()=>!1:x=>pe(E,x);if(d!=null&&d!==h&&(Se(d)?(p[d]=null,A(d)&&(v[d]=null)):xe(d)&&(d.value=null)),ie(h))Hi(h,u,12,[a,p]);else{const x=Se(h),U=xe(h);if(x||U){const K=()=>{if(t.f){const J=x?A(h)?v[h]:p[h]:h.value;r?te(J)&&go(J,o):te(J)?J.includes(o)||J.push(o):x?(p[h]=[o],A(h)&&(v[h]=p[h])):(h.value=[o],t.k&&(p[t.k]=h.value))}else x?(p[h]=a,A(h)&&(v[h]=a)):U&&(h.value=a,t.k&&(p[t.k]=a))};a?(K.id=-1,Je(K,n)):K()}}}Hs().requestIdleCallback;Hs().cancelIdleCallback;const bi=t=>!!t.type.__asyncLoader,pu=t=>t.type.__isKeepAlive;function $d(t,e){gu(t,"a",e)}function Hd(t,e){gu(t,"da",e)}function gu(t,e,n=Be){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ws(e,i,n),n){let r=n.parent;for(;r&&r.parent;)pu(r.parent.vnode)&&Bd(i,e,n,r),r=r.parent}}function Bd(t,e,n,i){const r=Ws(e,t,i,!0);Po(()=>{go(i[e],r)},n)}function Ws(t,e,n=Be,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{un();const u=Bi(n),h=At(e,n,t,a);return u(),hn(),h});return i?r.unshift(o):r.push(o),o}}const Bt=t=>(e,n=Be)=>{(!Li||t==="sp")&&Ws(t,(...i)=>e(...i),n)},Vd=Bt("bm"),mu=Bt("m"),zd=Bt("bu"),Wd=Bt("u"),Gd=Bt("bum"),Po=Bt("um"),Kd=Bt("sp"),qd=Bt("rtg"),Jd=Bt("rtc");function Xd(t,e=Be){Ws("ec",t,e)}const Yd=Symbol.for("v-ndc"),Kr=t=>t?Fu(t)?Do(t):Kr(t.parent):null,Ei=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kr(t.parent),$root:t=>Kr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yu(t),$forceUpdate:t=>t.f||(t.f=()=>{Ro(t.update)}),$nextTick:t=>t.n||(t.n=lu.bind(t.proxy)),$watch:t=>yp.bind(t)}),Er=(t,e)=>t!==ye&&!t.__isScriptSetup&&pe(t,e),Qd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:a,type:u,appContext:h}=t;let d;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Er(i,e))return a[e]=1,i[e];if(r!==ye&&pe(r,e))return a[e]=2,r[e];if((d=t.propsOptions[0])&&pe(d,e))return a[e]=3,o[e];if(n!==ye&&pe(n,e))return a[e]=4,n[e];qr&&(a[e]=0)}}const p=Ei[e];let v,E;if(p)return e==="$attrs"&&Ne(t.attrs,"get",""),p(t);if((v=u.__cssModules)&&(v=v[e]))return v;if(n!==ye&&pe(n,e))return a[e]=4,n[e];if(E=h.config.globalProperties,pe(E,e))return E[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return Er(r,e)?(r[e]=n,!0):i!==ye&&pe(i,e)?(i[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},a){let u;return!!n[a]||t!==ye&&pe(t,a)||Er(e,a)||(u=o[0])&&pe(u,a)||pe(i,a)||pe(Ei,a)||pe(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ya(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qr=!0;function Zd(t){const e=yu(t),n=t.proxy,i=t.ctx;qr=!1,e.beforeCreate&&Qa(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:a,watch:u,provide:h,inject:d,created:p,beforeMount:v,mounted:E,beforeUpdate:A,updated:x,activated:U,deactivated:K,beforeDestroy:J,beforeUnmount:V,destroyed:G,unmounted:z,render:re,renderTracked:ce,renderTriggered:I,errorCaptured:m,serverPrefetch:w,expose:b,inheritAttrs:T,components:R,directives:_,filters:Le}=e;if(d&&ep(d,i,null),a)for(const oe in a){const se=a[oe];ie(se)&&(i[oe]=se.bind(n))}if(r){const oe=r.call(n,n);be(oe)&&(t.data=Bs(oe))}if(qr=!0,o)for(const oe in o){const se=o[oe],qe=ie(se)?se.bind(n,n):ie(se.get)?se.get.bind(n,n):Et,at=!ie(se)&&ie(se.set)?se.set.bind(n):Et,et=ct({get:qe,set:at});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>et.value,set:we=>et.value=we})}if(u)for(const oe in u)vu(u[oe],i,n,oe);if(h){const oe=ie(h)?h.call(n):h;Reflect.ownKeys(oe).forEach(se=>{ds(se,oe[se])})}p&&Qa(p,t,"c");function Te(oe,se){te(se)?se.forEach(qe=>oe(qe.bind(n))):se&&oe(se.bind(n))}if(Te(Vd,v),Te(mu,E),Te(zd,A),Te(Wd,x),Te($d,U),Te(Hd,K),Te(Xd,m),Te(Jd,ce),Te(qd,I),Te(Gd,V),Te(Po,z),Te(Kd,w),te(b))if(b.length){const oe=t.exposed||(t.exposed={});b.forEach(se=>{Object.defineProperty(oe,se,{get:()=>n[se],set:qe=>n[se]=qe})})}else t.exposed||(t.exposed={});re&&t.render===Et&&(t.render=re),T!=null&&(t.inheritAttrs=T),R&&(t.components=R),_&&(t.directives=_),w&&du(t)}function ep(t,e,n=Et){te(t)&&(t=Jr(t));for(const i in t){const r=t[i];let o;be(r)?"default"in r?o=Ft(r.from||i,r.default,!0):o=Ft(r.from||i):o=Ft(r),xe(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Qa(t,e,n){At(te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function vu(t,e,n,i){let r=i.includes(".")?Du(n,i):()=>n[i];if(Se(t)){const o=e[t];ie(o)&&ps(r,o)}else if(ie(t))ps(r,t.bind(n));else if(be(t))if(te(t))t.forEach(o=>vu(o,e,n,i));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&ps(r,o,t)}}function yu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,u=o.get(e);let h;return u?h=u:!r.length&&!n&&!i?h=e:(h={},r.length&&r.forEach(d=>Ss(h,d,a,!0)),Ss(h,e,a)),be(e)&&o.set(e,h),h}function Ss(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Ss(t,o,n,!0),r&&r.forEach(a=>Ss(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const u=tp[a]||n&&n[a];t[a]=u?u(t[a],e[a]):e[a]}return t}const tp={data:Za,props:el,emits:el,methods:vi,computed:vi,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:vi,directives:vi,watch:ip,provide:Za,inject:np};function Za(t,e){return e?t?function(){return Me(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function np(t,e){return vi(Jr(t),Jr(e))}function Jr(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function vi(t,e){return t?Me(Object.create(null),t,e):e}function el(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Me(Object.create(null),Ya(t),Ya(e??{})):e}function ip(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const i in e)n[i]=Fe(t[i],e[i]);return n}function _u(){return{app:null,config:{isNativeTag:Jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sp=0;function rp(t,e){return function(i,r=null){ie(i)||(i=Me({},i)),r!=null&&!be(r)&&(r=null);const o=_u(),a=new WeakSet,u=[];let h=!1;const d=o.app={_uid:sp++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:$p,get config(){return o.config},set config(p){},use(p,...v){return a.has(p)||(p&&ie(p.install)?(a.add(p),p.install(d,...v)):ie(p)&&(a.add(p),p(d,...v))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,v){return v?(o.components[p]=v,d):o.components[p]},directive(p,v){return v?(o.directives[p]=v,d):o.directives[p]},mount(p,v,E){if(!h){const A=d._ceVNode||rt(i,r);return A.appContext=o,E===!0?E="svg":E===!1&&(E=void 0),t(A,p,E),h=!0,d._container=p,p.__vue_app__=d,Do(A.component)}},onUnmount(p){u.push(p)},unmount(){h&&(At(u,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,v){return o.provides[p]=v,d},runWithContext(p){const v=zn;zn=d;try{return p()}finally{zn=v}}};return d}}let zn=null;function ds(t,e){if(Be){let n=Be.provides;const i=Be.parent&&Be.parent.provides;i===n&&(n=Be.provides=Object.create(i)),n[t]=e}}function Ft(t,e,n=!1){const i=Be||bt;if(i||zn){const r=zn?zn._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(i&&i.proxy):e}}const wu={},Iu=()=>Object.create(wu),bu=t=>Object.getPrototypeOf(t)===wu;function op(t,e,n,i=!1){const r={},o=Iu();t.propsDefaults=Object.create(null),Eu(t,e,r,o);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:nu(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function ap(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:a}}=t,u=de(r),[h]=t.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let v=0;v<p.length;v++){let E=p[v];if(Gs(t.emitsOptions,E))continue;const A=e[E];if(h)if(pe(o,E))A!==o[E]&&(o[E]=A,d=!0);else{const x=an(E);r[x]=Xr(h,u,x,A,t,!1)}else A!==o[E]&&(o[E]=A,d=!0)}}}else{Eu(t,e,r,o)&&(d=!0);let p;for(const v in u)(!e||!pe(e,v)&&((p=Cn(v))===v||!pe(e,p)))&&(h?n&&(n[v]!==void 0||n[p]!==void 0)&&(r[v]=Xr(h,u,v,void 0,t,!0)):delete r[v]);if(o!==u)for(const v in o)(!e||!pe(e,v))&&(delete o[v],d=!0)}d&&Nt(t.attrs,"set","")}function Eu(t,e,n,i){const[r,o]=t.propsOptions;let a=!1,u;if(e)for(let h in e){if(yi(h))continue;const d=e[h];let p;r&&pe(r,p=an(h))?!o||!o.includes(p)?n[p]=d:(u||(u={}))[p]=d:Gs(t.emitsOptions,h)||(!(h in i)||d!==i[h])&&(i[h]=d,a=!0)}if(o){const h=de(n),d=u||ye;for(let p=0;p<o.length;p++){const v=o[p];n[v]=Xr(r,h,v,d[v],t,!pe(d,v))}}return a}function Xr(t,e,n,i,r,o){const a=t[n];if(a!=null){const u=pe(a,"default");if(u&&i===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&ie(h)){const{propsDefaults:d}=r;if(n in d)i=d[n];else{const p=Bi(r);i=d[n]=h.call(null,e),p()}}else i=h;r.ce&&r.ce._setProp(n,i)}a[0]&&(o&&!u?i=!1:a[1]&&(i===""||i===Cn(n))&&(i=!0))}return i}const lp=new WeakMap;function Tu(t,e,n=!1){const i=n?lp:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,a={},u=[];let h=!1;if(!ie(t)){const p=v=>{h=!0;const[E,A]=Tu(v,e,!0);Me(a,E),A&&u.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return be(t)&&i.set(t,Hn),Hn;if(te(o))for(let p=0;p<o.length;p++){const v=an(o[p]);tl(v)&&(a[v]=ye)}else if(o)for(const p in o){const v=an(p);if(tl(v)){const E=o[p],A=a[v]=te(E)||ie(E)?{type:E}:Me({},E),x=A.type;let U=!1,K=!0;if(te(x))for(let J=0;J<x.length;++J){const V=x[J],G=ie(V)&&V.name;if(G==="Boolean"){U=!0;break}else G==="String"&&(K=!1)}else U=ie(x)&&x.name==="Boolean";A[0]=U,A[1]=K,(U||pe(A,"default"))&&u.push(v)}}const d=[a,u];return be(t)&&i.set(t,d),d}function tl(t){return t[0]!=="$"&&!yi(t)}const Su=t=>t[0]==="_"||t==="$stable",Oo=t=>te(t)?t.map(wt):[wt(t)],cp=(t,e,n)=>{if(e._n)return e;const i=Ud((...r)=>Oo(e(...r)),n);return i._c=!1,i},Au=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Su(r))continue;const o=t[r];if(ie(o))e[r]=cp(r,o,i);else if(o!=null){const a=Oo(o);e[r]=()=>a}}},Ru=(t,e)=>{const n=Oo(e);t.slots.default=()=>n},Cu=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},up=(t,e,n)=>{const i=t.slots=Iu();if(t.vnode.shapeFlag&32){const r=e._;r?(Cu(i,e,n),n&&Uc(i,"_",r,!0)):Au(e,i)}else e&&Ru(t,e)},hp=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,a=ye;if(i.shapeFlag&32){const u=e._;u?n&&u===1?o=!1:Cu(r,e,n):(o=!e.$stable,Au(e,r)),a=e}else e&&(Ru(t,e),a={default:1});if(o)for(const u in r)!Su(u)&&a[u]==null&&delete r[u]},Je=Sp;function fp(t){return dp(t)}function dp(t,e){const n=Hs();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:a,createText:u,createComment:h,setText:d,setElementText:p,parentNode:v,nextSibling:E,setScopeId:A=Et,insertStaticContent:x}=t,U=(g,y,S,k=null,N=null,D=null,$=void 0,F=null,L=!!y.dynamicChildren)=>{if(g===y)return;g&&!gi(g,y)&&(k=O(g),we(g,N,D,!0),g=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:B}=y;switch(M){case Ks:K(g,y,S,k);break;case xi:J(g,y,S,k);break;case Sr:g==null&&V(y,S,k,$);break;case _t:R(g,y,S,k,N,D,$,F,L);break;default:B&1?re(g,y,S,k,N,D,$,F,L):B&6?_(g,y,S,k,N,D,$,F,L):(B&64||B&128)&&M.process(g,y,S,k,N,D,$,F,L,q)}Y!=null&&N&&Ts(Y,g&&g.ref,D,y||g,!y)},K=(g,y,S,k)=>{if(g==null)i(y.el=u(y.children),S,k);else{const N=y.el=g.el;y.children!==g.children&&d(N,y.children)}},J=(g,y,S,k)=>{g==null?i(y.el=h(y.children||""),S,k):y.el=g.el},V=(g,y,S,k)=>{[g.el,g.anchor]=x(g.children,y,S,k,g.el,g.anchor)},G=({el:g,anchor:y},S,k)=>{let N;for(;g&&g!==y;)N=E(g),i(g,S,k),g=N;i(y,S,k)},z=({el:g,anchor:y})=>{let S;for(;g&&g!==y;)S=E(g),r(g),g=S;r(y)},re=(g,y,S,k,N,D,$,F,L)=>{y.type==="svg"?$="svg":y.type==="math"&&($="mathml"),g==null?ce(y,S,k,N,D,$,F,L):w(g,y,N,D,$,F,L)},ce=(g,y,S,k,N,D,$,F)=>{let L,M;const{props:Y,shapeFlag:B,transition:X,dirs:Z}=g;if(L=g.el=a(g.type,D,Y&&Y.is,Y),B&8?p(L,g.children):B&16&&m(g.children,L,null,k,N,Tr(g,D),$,F),Z&&mn(g,null,k,"created"),I(L,g,g.scopeId,$,k),Y){for(const ne in Y)ne!=="value"&&!yi(ne)&&o(L,ne,null,Y[ne],D,k);"value"in Y&&o(L,"value",null,Y.value,D),(M=Y.onVnodeBeforeMount)&&vt(M,k,g)}Z&&mn(g,null,k,"beforeMount");const Q=pp(N,X);Q&&X.beforeEnter(L),i(L,y,S),((M=Y&&Y.onVnodeMounted)||Q||Z)&&Je(()=>{M&&vt(M,k,g),Q&&X.enter(L),Z&&mn(g,null,k,"mounted")},N)},I=(g,y,S,k,N)=>{if(S&&A(g,S),k)for(let D=0;D<k.length;D++)A(g,k[D]);if(N){let D=N.subTree;if(y===D||xu(D.type)&&(D.ssContent===y||D.ssFallback===y)){const $=N.vnode;I(g,$,$.scopeId,$.slotScopeIds,N.parent)}}},m=(g,y,S,k,N,D,$,F,L=0)=>{for(let M=L;M<g.length;M++){const Y=g[M]=F?Yt(g[M]):wt(g[M]);U(null,Y,y,S,k,N,D,$,F)}},w=(g,y,S,k,N,D,$)=>{const F=y.el=g.el;let{patchFlag:L,dynamicChildren:M,dirs:Y}=y;L|=g.patchFlag&16;const B=g.props||ye,X=y.props||ye;let Z;if(S&&vn(S,!1),(Z=X.onVnodeBeforeUpdate)&&vt(Z,S,y,g),Y&&mn(y,g,S,"beforeUpdate"),S&&vn(S,!0),(B.innerHTML&&X.innerHTML==null||B.textContent&&X.textContent==null)&&p(F,""),M?b(g.dynamicChildren,M,F,S,k,Tr(y,N),D):$||se(g,y,F,null,S,k,Tr(y,N),D,!1),L>0){if(L&16)T(F,B,X,S,N);else if(L&2&&B.class!==X.class&&o(F,"class",null,X.class,N),L&4&&o(F,"style",B.style,X.style,N),L&8){const Q=y.dynamicProps;for(let ne=0;ne<Q.length;ne++){const ae=Q[ne],Pe=B[ae],Ae=X[ae];(Ae!==Pe||ae==="value")&&o(F,ae,Pe,Ae,N,S)}}L&1&&g.children!==y.children&&p(F,y.children)}else!$&&M==null&&T(F,B,X,S,N);((Z=X.onVnodeUpdated)||Y)&&Je(()=>{Z&&vt(Z,S,y,g),Y&&mn(y,g,S,"updated")},k)},b=(g,y,S,k,N,D,$)=>{for(let F=0;F<y.length;F++){const L=g[F],M=y[F],Y=L.el&&(L.type===_t||!gi(L,M)||L.shapeFlag&70)?v(L.el):S;U(L,M,Y,null,k,N,D,$,!0)}},T=(g,y,S,k,N)=>{if(y!==S){if(y!==ye)for(const D in y)!yi(D)&&!(D in S)&&o(g,D,y[D],null,N,k);for(const D in S){if(yi(D))continue;const $=S[D],F=y[D];$!==F&&D!=="value"&&o(g,D,F,$,N,k)}"value"in S&&o(g,"value",y.value,S.value,N)}},R=(g,y,S,k,N,D,$,F,L)=>{const M=y.el=g?g.el:u(""),Y=y.anchor=g?g.anchor:u("");let{patchFlag:B,dynamicChildren:X,slotScopeIds:Z}=y;Z&&(F=F?F.concat(Z):Z),g==null?(i(M,S,k),i(Y,S,k),m(y.children||[],S,Y,N,D,$,F,L)):B>0&&B&64&&X&&g.dynamicChildren?(b(g.dynamicChildren,X,S,N,D,$,F),(y.key!=null||N&&y===N.subTree)&&Pu(g,y,!0)):se(g,y,S,Y,N,D,$,F,L)},_=(g,y,S,k,N,D,$,F,L)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?N.ctx.activate(y,S,k,$,L):Le(y,S,k,N,D,$,L):Ze(g,y,L)},Le=(g,y,S,k,N,D,$)=>{const F=g.component=xp(g,k,N);if(pu(g)&&(F.ctx.renderer=q),Mp(F,!1,$),F.asyncDep){if(N&&N.registerDep(F,Te,$),!g.el){const L=F.subTree=rt(xi);J(null,L,y,S)}}else Te(F,g,y,S,N,D,$)},Ze=(g,y,S)=>{const k=y.component=g.component;if(Ep(g,y,S))if(k.asyncDep&&!k.asyncResolved){oe(k,y,S);return}else k.next=y,k.update();else y.el=g.el,k.vnode=y},Te=(g,y,S,k,N,D,$)=>{const F=()=>{if(g.isMounted){let{next:B,bu:X,u:Z,parent:Q,vnode:ne}=g;{const Oe=Ou(g);if(Oe){B&&(B.el=ne.el,oe(g,B,$)),Oe.asyncDep.then(()=>{g.isUnmounted||F()});return}}let ae=B,Pe;vn(g,!1),B?(B.el=ne.el,oe(g,B,$)):B=ne,X&&yr(X),(Pe=B.props&&B.props.onVnodeBeforeUpdate)&&vt(Pe,Q,B,ne),vn(g,!0);const Ae=il(g),tt=g.subTree;g.subTree=Ae,U(tt,Ae,v(tt.el),O(tt),g,N,D),B.el=Ae.el,ae===null&&Tp(g,Ae.el),Z&&Je(Z,N),(Pe=B.props&&B.props.onVnodeUpdated)&&Je(()=>vt(Pe,Q,B,ne),N)}else{let B;const{el:X,props:Z}=y,{bm:Q,m:ne,parent:ae,root:Pe,type:Ae}=g,tt=bi(y);vn(g,!1),Q&&yr(Q),!tt&&(B=Z&&Z.onVnodeBeforeMount)&&vt(B,ae,y),vn(g,!0);{Pe.ce&&Pe.ce._injectChildStyle(Ae);const Oe=g.subTree=il(g);U(null,Oe,S,k,g,N,D),y.el=Oe.el}if(ne&&Je(ne,N),!tt&&(B=Z&&Z.onVnodeMounted)){const Oe=y;Je(()=>vt(B,ae,Oe),N)}(y.shapeFlag&256||ae&&bi(ae.vnode)&&ae.vnode.shapeFlag&256)&&g.a&&Je(g.a,N),g.isMounted=!0,y=S=k=null}};g.scope.on();const L=g.effect=new Bc(F);g.scope.off();const M=g.update=L.run.bind(L),Y=g.job=L.runIfDirty.bind(L);Y.i=g,Y.id=g.uid,L.scheduler=()=>Ro(Y),vn(g,!0),M()},oe=(g,y,S)=>{y.component=g;const k=g.vnode.props;g.vnode=y,g.next=null,ap(g,y.props,k,S),hp(g,y.children,S),un(),Xa(g),hn()},se=(g,y,S,k,N,D,$,F,L=!1)=>{const M=g&&g.children,Y=g?g.shapeFlag:0,B=y.children,{patchFlag:X,shapeFlag:Z}=y;if(X>0){if(X&128){at(M,B,S,k,N,D,$,F,L);return}else if(X&256){qe(M,B,S,k,N,D,$,F,L);return}}Z&8?(Y&16&&ze(M,N,D),B!==M&&p(S,B)):Y&16?Z&16?at(M,B,S,k,N,D,$,F,L):ze(M,N,D,!0):(Y&8&&p(S,""),Z&16&&m(B,S,k,N,D,$,F,L))},qe=(g,y,S,k,N,D,$,F,L)=>{g=g||Hn,y=y||Hn;const M=g.length,Y=y.length,B=Math.min(M,Y);let X;for(X=0;X<B;X++){const Z=y[X]=L?Yt(y[X]):wt(y[X]);U(g[X],Z,S,null,N,D,$,F,L)}M>Y?ze(g,N,D,!0,!1,B):m(y,S,k,N,D,$,F,L,B)},at=(g,y,S,k,N,D,$,F,L)=>{let M=0;const Y=y.length;let B=g.length-1,X=Y-1;for(;M<=B&&M<=X;){const Z=g[M],Q=y[M]=L?Yt(y[M]):wt(y[M]);if(gi(Z,Q))U(Z,Q,S,null,N,D,$,F,L);else break;M++}for(;M<=B&&M<=X;){const Z=g[B],Q=y[X]=L?Yt(y[X]):wt(y[X]);if(gi(Z,Q))U(Z,Q,S,null,N,D,$,F,L);else break;B--,X--}if(M>B){if(M<=X){const Z=X+1,Q=Z<Y?y[Z].el:k;for(;M<=X;)U(null,y[M]=L?Yt(y[M]):wt(y[M]),S,Q,N,D,$,F,L),M++}}else if(M>X)for(;M<=B;)we(g[M],N,D,!0),M++;else{const Z=M,Q=M,ne=new Map;for(M=Q;M<=X;M++){const Re=y[M]=L?Yt(y[M]):wt(y[M]);Re.key!=null&&ne.set(Re.key,M)}let ae,Pe=0;const Ae=X-Q+1;let tt=!1,Oe=0;const zt=new Array(Ae);for(M=0;M<Ae;M++)zt[M]=0;for(M=Z;M<=B;M++){const Re=g[M];if(Pe>=Ae){we(Re,N,D,!0);continue}let nt;if(Re.key!=null)nt=ne.get(Re.key);else for(ae=Q;ae<=X;ae++)if(zt[ae-Q]===0&&gi(Re,y[ae])){nt=ae;break}nt===void 0?we(Re,N,D,!0):(zt[nt-Q]=M+1,nt>=Oe?Oe=nt:tt=!0,U(Re,y[nt],S,null,N,D,$,F,L),Pe++)}const ti=tt?gp(zt):Hn;for(ae=ti.length-1,M=Ae-1;M>=0;M--){const Re=Q+M,nt=y[Re],qi=Re+1<Y?y[Re+1].el:k;zt[M]===0?U(null,nt,S,qi,N,D,$,F,L):tt&&(ae<0||M!==ti[ae]?et(nt,S,qi,2):ae--)}}},et=(g,y,S,k,N=null)=>{const{el:D,type:$,transition:F,children:L,shapeFlag:M}=g;if(M&6){et(g.component.subTree,y,S,k);return}if(M&128){g.suspense.move(y,S,k);return}if(M&64){$.move(g,y,S,q);return}if($===_t){i(D,y,S);for(let B=0;B<L.length;B++)et(L[B],y,S,k);i(g.anchor,y,S);return}if($===Sr){G(g,y,S);return}if(k!==2&&M&1&&F)if(k===0)F.beforeEnter(D),i(D,y,S),Je(()=>F.enter(D),N);else{const{leave:B,delayLeave:X,afterLeave:Z}=F,Q=()=>i(D,y,S),ne=()=>{B(D,()=>{Q(),Z&&Z()})};X?X(D,Q,ne):ne()}else i(D,y,S)},we=(g,y,S,k=!1,N=!1)=>{const{type:D,props:$,ref:F,children:L,dynamicChildren:M,shapeFlag:Y,patchFlag:B,dirs:X,cacheIndex:Z}=g;if(B===-2&&(N=!1),F!=null&&Ts(F,null,S,g,!0),Z!=null&&(y.renderCache[Z]=void 0),Y&256){y.ctx.deactivate(g);return}const Q=Y&1&&X,ne=!bi(g);let ae;if(ne&&(ae=$&&$.onVnodeBeforeUnmount)&&vt(ae,y,g),Y&6)mt(g.component,S,k);else{if(Y&128){g.suspense.unmount(S,k);return}Q&&mn(g,null,y,"beforeUnmount"),Y&64?g.type.remove(g,y,S,q,k):M&&!M.hasOnce&&(D!==_t||B>0&&B&64)?ze(M,y,S,!1,!0):(D===_t&&B&384||!N&&Y&16)&&ze(L,y,S),k&&Ie(g)}(ne&&(ae=$&&$.onVnodeUnmounted)||Q)&&Je(()=>{ae&&vt(ae,y,g),Q&&mn(g,null,y,"unmounted")},S)},Ie=g=>{const{type:y,el:S,anchor:k,transition:N}=g;if(y===_t){Vt(S,k);return}if(y===Sr){z(g);return}const D=()=>{r(S),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:$,delayLeave:F}=N,L=()=>$(S,D);F?F(g.el,D,L):L()}else D()},Vt=(g,y)=>{let S;for(;g!==y;)S=E(g),r(g),g=S;r(y)},mt=(g,y,S)=>{const{bum:k,scope:N,job:D,subTree:$,um:F,m:L,a:M}=g;nl(L),nl(M),k&&yr(k),N.stop(),D&&(D.flags|=8,we($,g,y,S)),F&&Je(F,y),Je(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},ze=(g,y,S,k=!1,N=!1,D=0)=>{for(let $=D;$<g.length;$++)we(g[$],y,S,k,N)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=E(g.anchor||g.el),S=y&&y[Fd];return S?E(S):y};let W=!1;const H=(g,y,S)=>{g==null?y._vnode&&we(y._vnode,null,null,!0):U(y._vnode||null,g,y,null,null,null,S),y._vnode=g,W||(W=!0,Xa(),uu(),W=!1)},q={p:U,um:we,m:et,r:Ie,mt:Le,mc:m,pc:se,pbc:b,n:O,o:t};return{render:H,hydrate:void 0,createApp:rp(H)}}function Tr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pu(t,e,n=!1){const i=t.children,r=e.children;if(te(i)&&te(r))for(let o=0;o<i.length;o++){const a=i[o];let u=r[o];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=r[o]=Yt(r[o]),u.el=a.el),!n&&u.patchFlag!==-2&&Pu(a,u)),u.type===Ks&&(u.el=a.el)}}function gp(t){const e=t.slice(),n=[0];let i,r,o,a,u;const h=t.length;for(i=0;i<h;i++){const d=t[i];if(d!==0){if(r=n[n.length-1],t[r]<d){e[i]=r,n.push(i);continue}for(o=0,a=n.length-1;o<a;)u=o+a>>1,t[n[u]]<d?o=u+1:a=u;d<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Ou(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ou(e)}function nl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const mp=Symbol.for("v-scx"),vp=()=>Ft(mp);function ps(t,e,n){return ku(t,e,n)}function ku(t,e,n=ye){const{immediate:i,deep:r,flush:o,once:a}=n,u=Me({},n),h=e&&i||!e&&o!=="post";let d;if(Li){if(o==="sync"){const A=vp();d=A.__watcherHandles||(A.__watcherHandles=[])}else if(!h){const A=()=>{};return A.stop=Et,A.resume=Et,A.pause=Et,A}}const p=Be;u.call=(A,x,U)=>At(A,p,x,U);let v=!1;o==="post"?u.scheduler=A=>{Je(A,p&&p.suspense)}:o!=="sync"&&(v=!0,u.scheduler=(A,x)=>{x?A():Ro(A)}),u.augmentJob=A=>{e&&(A.flags|=4),v&&(A.flags|=2,p&&(A.id=p.uid,A.i=p))};const E=Nd(t,e,u);return Li&&(d?d.push(E):h&&E()),E}function yp(t,e,n){const i=this.proxy,r=Se(t)?t.includes(".")?Du(i,t):()=>i[t]:t.bind(i,i);let o;ie(e)?o=e:(o=e.handler,n=e);const a=Bi(this),u=ku(r,o.bind(i),n);return a(),u}function Du(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const _p=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${Cn(e)}Modifiers`];function wp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ye;let r=n;const o=e.startsWith("update:"),a=o&&_p(i,e.slice(7));a&&(a.trim&&(r=n.map(p=>Se(p)?p.trim():p)),a.number&&(r=n.map(ed)));let u,h=i[u=vr(e)]||i[u=vr(an(e))];!h&&o&&(h=i[u=vr(Cn(e))]),h&&At(h,t,6,r);const d=i[u+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,At(d,t,6,r)}}function Nu(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let a={},u=!1;if(!ie(t)){const h=d=>{const p=Nu(d,e,!0);p&&(u=!0,Me(a,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!u?(be(t)&&i.set(t,null),null):(te(o)?o.forEach(h=>a[h]=null):Me(a,o),be(t)&&i.set(t,a),a)}function Gs(t,e){return!t||!Fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Cn(e))||pe(t,e))}function il(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:a,attrs:u,emit:h,render:d,renderCache:p,props:v,data:E,setupState:A,ctx:x,inheritAttrs:U}=t,K=Es(t);let J,V;try{if(n.shapeFlag&4){const z=r||i,re=z;J=wt(d.call(re,z,p,v,A,E,x)),V=u}else{const z=e;J=wt(z.length>1?z(v,{attrs:u,slots:a,emit:h}):z(v,null)),V=e.props?u:Ip(u)}}catch(z){Ti.length=0,Vs(z,t,1),J=rt(xi)}let G=J;if(V&&U!==!1){const z=Object.keys(V),{shapeFlag:re}=G;z.length&&re&7&&(o&&z.some(po)&&(V=bp(V,o)),G=qn(G,V,!1,!0))}return n.dirs&&(G=qn(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Co(G,n.transition),J=G,Es(K),J}const Ip=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fs(n))&&((e||(e={}))[n]=t[n]);return e},bp=(t,e)=>{const n={};for(const i in t)(!po(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ep(t,e,n){const{props:i,children:r,component:o}=t,{props:a,children:u,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?sl(i,a,d):!!a;if(h&8){const p=e.dynamicProps;for(let v=0;v<p.length;v++){const E=p[v];if(a[E]!==i[E]&&!Gs(d,E))return!0}}}else return(r||u)&&(!u||!u.$stable)?!0:i===a?!1:i?a?sl(i,a,d):!0:!!a;return!1}function sl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!Gs(n,o))return!0}return!1}function Tp({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const xu=t=>t.__isSuspense;function Sp(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Ld(t)}const _t=Symbol.for("v-fgt"),Ks=Symbol.for("v-txt"),xi=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),Ti=[];let Ye=null;function Mu(t=!1){Ti.push(Ye=t?null:[])}function Ap(){Ti.pop(),Ye=Ti[Ti.length-1]||null}let Mi=1;function rl(t,e=!1){Mi+=t,t<0&&Ye&&e&&(Ye.hasOnce=!0)}function Rp(t){return t.dynamicChildren=Mi>0?Ye||Hn:null,Ap(),Mi>0&&Ye&&Ye.push(t),t}function Lu(t,e,n,i,r,o){return Rp(st(t,e,n,i,r,o,!0))}function As(t){return t?t.__v_isVNode===!0:!1}function gi(t,e){return t.type===e.type&&t.key===e.key}const Uu=({key:t})=>t??null,gs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||xe(t)||ie(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function st(t,e=null,n=null,i=0,r=null,o=t===_t?0:1,a=!1,u=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uu(e),ref:e&&gs(e),scopeId:fu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:bt};return u?(ko(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Se(n)?8:16),Mi>0&&!a&&Ye&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&Ye.push(h),h}const rt=Cp;function Cp(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===Yd)&&(t=xi),As(t)){const u=qn(t,e,!0);return n&&ko(u,n),Mi>0&&!o&&Ye&&(u.shapeFlag&6?Ye[Ye.indexOf(t)]=u:Ye.push(u)),u.patchFlag=-2,u}if(jp(t)&&(t=t.__vccOpts),e){e=Pp(e);let{class:u,style:h}=e;u&&!Se(u)&&(e.class=yo(u)),be(h)&&(Ao(h)&&!te(h)&&(h=Me({},h)),e.style=vo(h))}const a=Se(t)?1:xu(t)?128:jd(t)?64:be(t)?4:ie(t)?2:0;return st(t,e,n,i,r,a,o,!0)}function Pp(t){return t?Ao(t)||bu(t)?Me({},t):t:null}function qn(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:a,children:u,transition:h}=t,d=e?kp(r||{},e):r,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Uu(d),ref:e&&e.ref?n&&o?te(o)?o.concat(gs(e)):[o,gs(e)]:gs(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qn(t.ssContent),ssFallback:t.ssFallback&&qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&Co(p,h.clone(p)),p}function Op(t=" ",e=0){return rt(Ks,null,t,e)}function wt(t){return t==null||typeof t=="boolean"?rt(xi):te(t)?rt(_t,null,t.slice()):As(t)?Yt(t):rt(Ks,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qn(t)}function ko(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ko(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!bu(e)?e._ctx=bt:r===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),i&64?(n=16,e=[Op(e)]):n=8);t.children=e,t.shapeFlag|=n}function kp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=yo([e.class,i.class]));else if(r==="style")e.style=vo([e.style,i.style]);else if(Fs(r)){const o=e[r],a=i[r];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[r]=o?[].concat(o,a):a)}else r!==""&&(e[r]=i[r])}return e}function vt(t,e,n,i=null){At(t,e,7,[n,i])}const Dp=_u();let Np=0;function xp(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Dp,o={uid:Np++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tu(i,r),emitsOptions:Nu(i,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=wp.bind(null,o),t.ce&&t.ce(o),o}let Be=null,Rs,Yr;{const t=Hs(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(a=>a(o)):r[0](o)}};Rs=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),Yr=e("__VUE_SSR_SETTERS__",n=>Li=n)}const Bi=t=>{const e=Be;return Rs(t),t.scope.on(),()=>{t.scope.off(),Rs(e)}},ol=()=>{Be&&Be.scope.off(),Rs(null)};function Fu(t){return t.vnode.shapeFlag&4}let Li=!1;function Mp(t,e=!1,n=!1){e&&Yr(e);const{props:i,children:r}=t.vnode,o=Fu(t);op(t,i,o,e),up(t,r,n);const a=o?Lp(t,e):void 0;return e&&Yr(!1),a}function Lp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qd);const{setup:i}=n;if(i){un();const r=t.setupContext=i.length>1?Fp(t):null,o=Bi(t),a=Hi(i,t,0,[t.props,r]),u=Nc(a);if(hn(),o(),(u||t.sp)&&!bi(t)&&du(t),u){if(a.then(ol,ol),e)return a.then(h=>{al(t,h)}).catch(h=>{Vs(h,t,0)});t.asyncDep=a}else al(t,a)}else ju(t)}function al(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=ou(e)),ju(t)}function ju(t,e,n){const i=t.type;t.render||(t.render=i.render||Et);{const r=Bi(t);un();try{Zd(t)}finally{hn(),r()}}}const Up={get(t,e){return Ne(t,"get",""),t[e]}};function Fp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Up),slots:t.slots,emit:t.emit,expose:e}}function Do(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ou(su(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ei)return Ei[n](t)},has(e,n){return n in e||n in Ei}})):t.proxy}function jp(t){return ie(t)&&"__vccOpts"in t}const ct=(t,e)=>kd(t,e,Li);function $u(t,e,n){const i=arguments.length;return i===2?be(e)&&!te(e)?As(e)?rt(t,null,[e]):rt(t,e):rt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&As(n)&&(n=[n]),rt(t,e,n))}const $p="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qr;const ll=typeof window<"u"&&window.trustedTypes;if(ll)try{Qr=ll.createPolicy("vue",{createHTML:t=>t})}catch{}const Hu=Qr?t=>Qr.createHTML(t):t=>t,Hp="http://www.w3.org/2000/svg",Bp="http://www.w3.org/1998/Math/MathML",Dt=typeof document<"u"?document:null,cl=Dt&&Dt.createElement("template"),Vp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Dt.createElementNS(Hp,t):e==="mathml"?Dt.createElementNS(Bp,t):n?Dt.createElement(t,{is:n}):Dt.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const a=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{cl.innerHTML=Hu(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const u=cl.content;if(i==="svg"||i==="mathml"){const h=u.firstChild;for(;h.firstChild;)u.appendChild(h.firstChild);u.removeChild(h)}e.insertBefore(u,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zp=Symbol("_vtc");function Wp(t,e,n){const i=t[zp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ul=Symbol("_vod"),Gp=Symbol("_vsh"),Kp=Symbol(""),qp=/(^|;)\s*display\s*:/;function Jp(t,e,n){const i=t.style,r=Se(n);let o=!1;if(n&&!r){if(e)if(Se(e))for(const a of e.split(";")){const u=a.slice(0,a.indexOf(":")).trim();n[u]==null&&ms(i,u,"")}else for(const a in e)n[a]==null&&ms(i,a,"");for(const a in n)a==="display"&&(o=!0),ms(i,a,n[a])}else if(r){if(e!==n){const a=i[Kp];a&&(n+=";"+a),i.cssText=n,o=qp.test(n)}}else e&&t.removeAttribute("style");ul in t&&(t[ul]=o?i.display:"",t[Gp]&&(i.display="none"))}const hl=/\s*!important$/;function ms(t,e,n){if(te(n))n.forEach(i=>ms(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Xp(t,e);hl.test(n)?t.setProperty(Cn(i),n.replace(hl,""),"important"):t[i]=n}}const fl=["Webkit","Moz","ms"],Ar={};function Xp(t,e){const n=Ar[e];if(n)return n;let i=an(e);if(i!=="filter"&&i in t)return Ar[e]=i;i=Lc(i);for(let r=0;r<fl.length;r++){const o=fl[r]+i;if(o in t)return Ar[e]=o}return e}const dl="http://www.w3.org/1999/xlink";function pl(t,e,n,i,r,o=od(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dl,e.slice(6,e.length)):t.setAttributeNS(dl,e,n):n==null||o&&!Fc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":cn(n)?String(n):n)}function gl(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hu(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const u=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Fc(n):n==null&&u==="string"?(n="",a=!0):u==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function Yp(t,e,n,i){t.addEventListener(e,n,i)}function Qp(t,e,n,i){t.removeEventListener(e,n,i)}const ml=Symbol("_vei");function Zp(t,e,n,i,r=null){const o=t[ml]||(t[ml]={}),a=o[e];if(i&&a)a.value=i;else{const[u,h]=eg(e);if(i){const d=o[e]=ig(i,r);Yp(t,u,d,h)}else a&&(Qp(t,u,a,h),o[e]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function eg(t){let e;if(vl.test(t)){e={};let i;for(;i=t.match(vl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cn(t.slice(2)),e]}let Rr=0;const tg=Promise.resolve(),ng=()=>Rr||(tg.then(()=>Rr=0),Rr=Date.now());function ig(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;At(sg(i,n.value),e,5,[i])};return n.value=t,n.attached=ng(),n}function sg(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const yl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rg=(t,e,n,i,r,o)=>{const a=r==="svg";e==="class"?Wp(t,i,a):e==="style"?Jp(t,n,i):Fs(e)?po(e)||Zp(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):og(t,e,i,a))?(gl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pl(t,e,i,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Se(i))?gl(t,an(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),pl(t,e,i,a))};function og(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&yl(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yl(e)&&Se(n)?!1:e in t}const ag=Me({patchProp:rg},Vp);let _l;function lg(){return _l||(_l=fp(ag))}const cg=(...t)=>{const e=lg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=hg(i);if(!r)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,ug(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function ug(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function hg(t){return Se(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const fg=Symbol();var wl;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wl||(wl={}));function dg(){const t=ad(!0),e=t.run(()=>jn({}));let n=[],i=[];const r=su({install(o){r._a=o,o.provide(fg,r),o.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fn=typeof document<"u";function Bu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bu(t.default)}const fe=Object.assign;function Cr(t,e){const n={};for(const i in e){const r=e[i];n[i]=dt(r)?r.map(t):t(r)}return n}const Si=()=>{},dt=Array.isArray,Vu=/#/g,gg=/&/g,mg=/\//g,vg=/=/g,yg=/\?/g,zu=/\+/g,_g=/%5B/g,wg=/%5D/g,Wu=/%5E/g,Ig=/%60/g,Gu=/%7B/g,bg=/%7C/g,Ku=/%7D/g,Eg=/%20/g;function No(t){return encodeURI(""+t).replace(bg,"|").replace(_g,"[").replace(wg,"]")}function Tg(t){return No(t).replace(Gu,"{").replace(Ku,"}").replace(Wu,"^")}function Zr(t){return No(t).replace(zu,"%2B").replace(Eg,"+").replace(Vu,"%23").replace(gg,"%26").replace(Ig,"`").replace(Gu,"{").replace(Ku,"}").replace(Wu,"^")}function Sg(t){return Zr(t).replace(vg,"%3D")}function Ag(t){return No(t).replace(Vu,"%23").replace(yg,"%3F")}function Rg(t){return t==null?"":Ag(t).replace(mg,"%2F")}function Ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Cg=/\/$/,Pg=t=>t.replace(Cg,"");function Pr(t,e,n="/"){let i,r={},o="",a="";const u=e.indexOf("#");let h=e.indexOf("?");return u<h&&u>=0&&(h=-1),h>-1&&(i=e.slice(0,h),o=e.slice(h+1,u>-1?u:e.length),r=t(o)),u>-1&&(i=i||e.slice(0,u),a=e.slice(u,e.length)),i=Ng(i??e,n),{fullPath:i+(o&&"?")+o+a,path:i,query:r,hash:Ui(a)}}function Og(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Il(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kg(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Jn(e.matched[i],n.matched[r])&&qu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Dg(t[n],e[n]))return!1;return!0}function Dg(t,e){return dt(t)?bl(t,e):dt(e)?bl(e,t):t===e}function bl(t,e){return dt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ng(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let o=n.length-1,a,u;for(a=0;a<i.length;a++)if(u=i[a],u!==".")if(u==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(a).join("/")}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function xg(t){if(!t)if(Fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pg(t)}const Mg=/^[^#]+#/;function Lg(t,e){return t.replace(Mg,"#")+e}function Ug(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const qs=()=>({left:window.scrollX,top:window.scrollY});function Fg(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ug(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function El(t,e){return(history.state?history.state.position-e:-1)+t}const eo=new Map;function jg(t,e){eo.set(t,e)}function $g(t){const e=eo.get(t);return eo.delete(t),e}let Hg=()=>location.protocol+"//"+location.host;function Ju(t,e){const{pathname:n,search:i,hash:r}=e,o=t.indexOf("#");if(o>-1){let u=r.includes(t.slice(o))?t.slice(o).length:1,h=r.slice(u);return h[0]!=="/"&&(h="/"+h),Il(h,"")}return Il(n,t)+i+r}function Bg(t,e,n,i){let r=[],o=[],a=null;const u=({state:E})=>{const A=Ju(t,location),x=n.value,U=e.value;let K=0;if(E){if(n.value=A,e.value=E,a&&a===x){a=null;return}K=U?E.position-U.position:0}else i(A);r.forEach(J=>{J(n.value,x,{delta:K,type:Fi.pop,direction:K?K>0?Ai.forward:Ai.back:Ai.unknown})})};function h(){a=n.value}function d(E){r.push(E);const A=()=>{const x=r.indexOf(E);x>-1&&r.splice(x,1)};return o.push(A),A}function p(){const{history:E}=window;E.state&&E.replaceState(fe({},E.state,{scroll:qs()}),"")}function v(){for(const E of o)E();o=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:h,listen:d,destroy:v}}function Tl(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?qs():null}}function Vg(t){const{history:e,location:n}=window,i={value:Ju(t,n)},r={value:e.state};r.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,p){const v=t.indexOf("#"),E=v>-1?(n.host&&document.querySelector("base")?t:t.slice(v))+h:Hg()+t+h;try{e[p?"replaceState":"pushState"](d,"",E),r.value=d}catch(A){console.error(A),n[p?"replace":"assign"](E)}}function a(h,d){const p=fe({},e.state,Tl(r.value.back,h,r.value.forward,!0),d,{position:r.value.position});o(h,p,!0),i.value=h}function u(h,d){const p=fe({},r.value,e.state,{forward:h,scroll:qs()});o(p.current,p,!0);const v=fe({},Tl(i.value,h,null),{position:p.position+1},d);o(h,v,!1),i.value=h}return{location:i,state:r,push:u,replace:a}}function zg(t){t=xg(t);const e=Vg(t),n=Bg(t,e.state,e.location,e.replace);function i(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=fe({location:"",base:t,go:i,createHref:Lg.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Wg(t){return typeof t=="string"||t&&typeof t=="object"}function Xu(t){return typeof t=="string"||typeof t=="symbol"}const Yu=Symbol("");var Sl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sl||(Sl={}));function Xn(t,e){return fe(new Error,{type:t,[Yu]:!0},e)}function kt(t,e){return t instanceof Error&&Yu in t&&(e==null||!!(t.type&e))}const Al="[^/]+?",Gg={sensitive:!1,strict:!1,start:!0,end:!0},Kg=/[.+*?^${}()[\]/\\]/g;function qg(t,e){const n=fe({},Gg,e),i=[];let r=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[90];n.strict&&!d.length&&(r+="/");for(let v=0;v<d.length;v++){const E=d[v];let A=40+(n.sensitive?.25:0);if(E.type===0)v||(r+="/"),r+=E.value.replace(Kg,"\\$&"),A+=40;else if(E.type===1){const{value:x,repeatable:U,optional:K,regexp:J}=E;o.push({name:x,repeatable:U,optional:K});const V=J||Al;if(V!==Al){A+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${x}" (${V}): `+z.message)}}let G=U?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;v||(G=K&&d.length<2?`(?:/${G})`:"/"+G),K&&(G+="?"),r+=G,A+=20,K&&(A+=-8),U&&(A+=-20),V===".*"&&(A+=-50)}p.push(A)}i.push(p)}if(n.strict&&n.end){const d=i.length-1;i[d][i[d].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function u(d){const p=d.match(a),v={};if(!p)return null;for(let E=1;E<p.length;E++){const A=p[E]||"",x=o[E-1];v[x.name]=A&&x.repeatable?A.split("/"):A}return v}function h(d){let p="",v=!1;for(const E of t){(!v||!p.endsWith("/"))&&(p+="/"),v=!1;for(const A of E)if(A.type===0)p+=A.value;else if(A.type===1){const{value:x,repeatable:U,optional:K}=A,J=x in d?d[x]:"";if(dt(J)&&!U)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const V=dt(J)?J.join("/"):J;if(!V)if(K)E.length<2&&(p.endsWith("/")?p=p.slice(0,-1):v=!0);else throw new Error(`Missing required param "${x}"`);p+=V}}return p||"/"}return{re:a,score:i,keys:o,parse:u,stringify:h}}function Jg(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qu(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const o=Jg(i[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-i.length)===1){if(Rl(i))return 1;if(Rl(r))return-1}return r.length-i.length}function Rl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Xg={type:0,value:""},Yg=/[a-zA-Z0-9_]/;function Qg(t){if(!t)return[[]];if(t==="/")return[[Xg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${d}": ${A}`)}let n=0,i=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let u=0,h,d="",p="";function v(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function E(){d+=h}for(;u<t.length;){if(h=t[u++],h==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:h==="/"?(d&&v(),a()):h===":"?(v(),n=1):E();break;case 4:E(),n=i;break;case 1:h==="("?n=2:Yg.test(h)?E():(v(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&u--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:n=3:p+=h;break;case 3:v(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&u--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),v(),a(),r}function Zg(t,e,n){const i=qg(Qg(t.path),n),r=fe(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function em(t,e){const n=[],i=new Map;e=kl({strict:!1,end:!0,sensitive:!1},e);function r(v){return i.get(v)}function o(v,E,A){const x=!A,U=Pl(v);U.aliasOf=A&&A.record;const K=kl(e,v),J=[U];if("alias"in v){const z=typeof v.alias=="string"?[v.alias]:v.alias;for(const re of z)J.push(Pl(fe({},U,{components:A?A.record.components:U.components,path:re,aliasOf:A?A.record:U})))}let V,G;for(const z of J){const{path:re}=z;if(E&&re[0]!=="/"){const ce=E.record.path,I=ce[ce.length-1]==="/"?"":"/";z.path=E.record.path+(re&&I+re)}if(V=Zg(z,E,K),A?A.alias.push(V):(G=G||V,G!==V&&G.alias.push(V),x&&v.name&&!Ol(V)&&a(v.name)),Zu(V)&&h(V),U.children){const ce=U.children;for(let I=0;I<ce.length;I++)o(ce[I],V,A&&A.children[I])}A=A||V}return G?()=>{a(G)}:Si}function a(v){if(Xu(v)){const E=i.get(v);E&&(i.delete(v),n.splice(n.indexOf(E),1),E.children.forEach(a),E.alias.forEach(a))}else{const E=n.indexOf(v);E>-1&&(n.splice(E,1),v.record.name&&i.delete(v.record.name),v.children.forEach(a),v.alias.forEach(a))}}function u(){return n}function h(v){const E=im(v,n);n.splice(E,0,v),v.record.name&&!Ol(v)&&i.set(v.record.name,v)}function d(v,E){let A,x={},U,K;if("name"in v&&v.name){if(A=i.get(v.name),!A)throw Xn(1,{location:v});K=A.record.name,x=fe(Cl(E.params,A.keys.filter(G=>!G.optional).concat(A.parent?A.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),v.params&&Cl(v.params,A.keys.map(G=>G.name))),U=A.stringify(x)}else if(v.path!=null)U=v.path,A=n.find(G=>G.re.test(U)),A&&(x=A.parse(U),K=A.record.name);else{if(A=E.name?i.get(E.name):n.find(G=>G.re.test(E.path)),!A)throw Xn(1,{location:v,currentLocation:E});K=A.record.name,x=fe({},E.params,v.params),U=A.stringify(x)}const J=[];let V=A;for(;V;)J.unshift(V.record),V=V.parent;return{name:K,path:U,params:x,matched:J,meta:nm(J)}}t.forEach(v=>o(v));function p(){n.length=0,i.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:p,getRoutes:u,getRecordMatcher:r}}function Cl(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Pl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:tm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Ol(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nm(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function kl(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function im(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;Qu(t,e[o])<0?i=o:n=o+1}const r=sm(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function sm(t){let e=t;for(;e=e.parent;)if(Zu(e)&&Qu(t,e)===0)return e}function Zu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function rm(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const o=i[r].replace(zu," "),a=o.indexOf("="),u=Ui(a<0?o:o.slice(0,a)),h=a<0?null:Ui(o.slice(a+1));if(u in e){let d=e[u];dt(d)||(d=e[u]=[d]),d.push(h)}else e[u]=h}return e}function Dl(t){let e="";for(let n in t){const i=t[n];if(n=Sg(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(dt(i)?i.map(o=>o&&Zr(o)):[i&&Zr(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function om(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=dt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const am=Symbol(""),Nl=Symbol(""),xo=Symbol(""),eh=Symbol(""),to=Symbol("");function mi(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qt(t,e,n,i,r,o=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((u,h)=>{const d=E=>{E===!1?h(Xn(4,{from:n,to:e})):E instanceof Error?h(E):Wg(E)?h(Xn(2,{from:e,to:E})):(a&&i.enterCallbacks[r]===a&&typeof E=="function"&&a.push(E),u())},p=o(()=>t.call(i&&i.instances[r],e,n,d));let v=Promise.resolve(p);t.length<3&&(v=v.then(d)),v.catch(E=>h(E))})}function Or(t,e,n,i,r=o=>o()){const o=[];for(const a of t)for(const u in a.components){let h=a.components[u];if(!(e!=="beforeRouteEnter"&&!a.instances[u]))if(Bu(h)){const p=(h.__vccOpts||h)[e];p&&o.push(Qt(p,n,i,a,u,r))}else{let d=h();o.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${u}" at "${a.path}"`);const v=pg(p)?p.default:p;a.mods[u]=p,a.components[u]=v;const A=(v.__vccOpts||v)[e];return A&&Qt(A,n,i,a,u,r)()}))}}return o}function xl(t){const e=Ft(xo),n=Ft(eh),i=ct(()=>{const h=bn(t.to);return e.resolve(h)}),r=ct(()=>{const{matched:h}=i.value,{length:d}=h,p=h[d-1],v=n.matched;if(!p||!v.length)return-1;const E=v.findIndex(Jn.bind(null,p));if(E>-1)return E;const A=Ml(h[d-2]);return d>1&&Ml(p)===A&&v[v.length-1].path!==A?v.findIndex(Jn.bind(null,h[d-2])):E}),o=ct(()=>r.value>-1&&fm(n.params,i.value.params)),a=ct(()=>r.value>-1&&r.value===n.matched.length-1&&qu(n.params,i.value.params));function u(h={}){if(hm(h)){const d=e[bn(t.replace)?"replace":"push"](bn(t.to)).catch(Si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:i,href:ct(()=>i.value.href),isActive:o,isExactActive:a,navigate:u}}function lm(t){return t.length===1?t[0]:t}const cm=zs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xl,setup(t,{slots:e}){const n=Bs(xl(t)),{options:i}=Ft(xo),r=ct(()=>({[Ll(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ll(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&lm(e.default(n));return t.custom?o:$u("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),um=cm;function hm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fm(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!dt(r)||r.length!==i.length||i.some((o,a)=>o!==r[a]))return!1}return!0}function Ml(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ll=(t,e,n)=>t??e??n,dm=zs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ft(to),r=ct(()=>t.route||i.value),o=Ft(Nl,0),a=ct(()=>{let d=bn(o);const{matched:p}=r.value;let v;for(;(v=p[d])&&!v.components;)d++;return d}),u=ct(()=>r.value.matched[a.value]);ds(Nl,ct(()=>a.value+1)),ds(am,u),ds(to,r);const h=jn();return ps(()=>[h.value,u.value,t.name],([d,p,v],[E,A,x])=>{p&&(p.instances[v]=d,A&&A!==p&&d&&d===E&&(p.leaveGuards.size||(p.leaveGuards=A.leaveGuards),p.updateGuards.size||(p.updateGuards=A.updateGuards))),d&&p&&(!A||!Jn(p,A)||!E)&&(p.enterCallbacks[v]||[]).forEach(U=>U(d))},{flush:"post"}),()=>{const d=r.value,p=t.name,v=u.value,E=v&&v.components[p];if(!E)return Ul(n.default,{Component:E,route:d});const A=v.props[p],x=A?A===!0?d.params:typeof A=="function"?A(d):A:null,K=$u(E,fe({},x,e,{onVnodeUnmounted:J=>{J.component.isUnmounted&&(v.instances[p]=null)},ref:h}));return Ul(n.default,{Component:K,route:d})||K}}});function Ul(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const th=dm;function pm(t){const e=em(t.routes,t),n=t.parseQuery||rm,i=t.stringifyQuery||Dl,r=t.history,o=mi(),a=mi(),u=mi(),h=Rd(qt);let d=qt;Fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Cr.bind(null,O=>""+O),v=Cr.bind(null,Rg),E=Cr.bind(null,Ui);function A(O,W){let H,q;return Xu(O)?(H=e.getRecordMatcher(O),q=W):q=O,e.addRoute(q,H)}function x(O){const W=e.getRecordMatcher(O);W&&e.removeRoute(W)}function U(){return e.getRoutes().map(O=>O.record)}function K(O){return!!e.getRecordMatcher(O)}function J(O,W){if(W=fe({},W||h.value),typeof O=="string"){const S=Pr(n,O,W.path),k=e.resolve({path:S.path},W),N=r.createHref(S.fullPath);return fe(S,k,{params:E(k.params),hash:Ui(S.hash),redirectedFrom:void 0,href:N})}let H;if(O.path!=null)H=fe({},O,{path:Pr(n,O.path,W.path).path});else{const S=fe({},O.params);for(const k in S)S[k]==null&&delete S[k];H=fe({},O,{params:v(S)}),W.params=v(W.params)}const q=e.resolve(H,W),ue=O.hash||"";q.params=p(E(q.params));const g=Og(i,fe({},O,{hash:Tg(ue),path:q.path})),y=r.createHref(g);return fe({fullPath:g,hash:ue,query:i===Dl?om(O.query):O.query||{}},q,{redirectedFrom:void 0,href:y})}function V(O){return typeof O=="string"?Pr(n,O,h.value.path):fe({},O)}function G(O,W){if(d!==O)return Xn(8,{from:W,to:O})}function z(O){return I(O)}function re(O){return z(fe(V(O),{replace:!0}))}function ce(O){const W=O.matched[O.matched.length-1];if(W&&W.redirect){const{redirect:H}=W;let q=typeof H=="function"?H(O):H;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=V(q):{path:q},q.params={}),fe({query:O.query,hash:O.hash,params:q.path!=null?{}:O.params},q)}}function I(O,W){const H=d=J(O),q=h.value,ue=O.state,g=O.force,y=O.replace===!0,S=ce(H);if(S)return I(fe(V(S),{state:typeof S=="object"?fe({},ue,S.state):ue,force:g,replace:y}),W||H);const k=H;k.redirectedFrom=W;let N;return!g&&kg(i,q,H)&&(N=Xn(16,{to:k,from:q}),et(q,q,!0,!1)),(N?Promise.resolve(N):b(k,q)).catch(D=>kt(D)?kt(D,2)?D:at(D):se(D,k,q)).then(D=>{if(D){if(kt(D,2))return I(fe({replace:y},V(D.to),{state:typeof D.to=="object"?fe({},ue,D.to.state):ue,force:g}),W||k)}else D=R(k,q,!0,y,ue);return T(k,q,D),D})}function m(O,W){const H=G(O,W);return H?Promise.reject(H):Promise.resolve()}function w(O){const W=Vt.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(O):O()}function b(O,W){let H;const[q,ue,g]=gm(O,W);H=Or(q.reverse(),"beforeRouteLeave",O,W);for(const S of q)S.leaveGuards.forEach(k=>{H.push(Qt(k,O,W))});const y=m.bind(null,O,W);return H.push(y),ze(H).then(()=>{H=[];for(const S of o.list())H.push(Qt(S,O,W));return H.push(y),ze(H)}).then(()=>{H=Or(ue,"beforeRouteUpdate",O,W);for(const S of ue)S.updateGuards.forEach(k=>{H.push(Qt(k,O,W))});return H.push(y),ze(H)}).then(()=>{H=[];for(const S of g)if(S.beforeEnter)if(dt(S.beforeEnter))for(const k of S.beforeEnter)H.push(Qt(k,O,W));else H.push(Qt(S.beforeEnter,O,W));return H.push(y),ze(H)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),H=Or(g,"beforeRouteEnter",O,W,w),H.push(y),ze(H))).then(()=>{H=[];for(const S of a.list())H.push(Qt(S,O,W));return H.push(y),ze(H)}).catch(S=>kt(S,8)?S:Promise.reject(S))}function T(O,W,H){u.list().forEach(q=>w(()=>q(O,W,H)))}function R(O,W,H,q,ue){const g=G(O,W);if(g)return g;const y=W===qt,S=Fn?history.state:{};H&&(q||y?r.replace(O.fullPath,fe({scroll:y&&S&&S.scroll},ue)):r.push(O.fullPath,ue)),h.value=O,et(O,W,H,y),at()}let _;function Le(){_||(_=r.listen((O,W,H)=>{if(!mt.listening)return;const q=J(O),ue=ce(q);if(ue){I(fe(ue,{replace:!0,force:!0}),q).catch(Si);return}d=q;const g=h.value;Fn&&jg(El(g.fullPath,H.delta),qs()),b(q,g).catch(y=>kt(y,12)?y:kt(y,2)?(I(fe(V(y.to),{force:!0}),q).then(S=>{kt(S,20)&&!H.delta&&H.type===Fi.pop&&r.go(-1,!1)}).catch(Si),Promise.reject()):(H.delta&&r.go(-H.delta,!1),se(y,q,g))).then(y=>{y=y||R(q,g,!1),y&&(H.delta&&!kt(y,8)?r.go(-H.delta,!1):H.type===Fi.pop&&kt(y,20)&&r.go(-1,!1)),T(q,g,y)}).catch(Si)}))}let Ze=mi(),Te=mi(),oe;function se(O,W,H){at(O);const q=Te.list();return q.length?q.forEach(ue=>ue(O,W,H)):console.error(O),Promise.reject(O)}function qe(){return oe&&h.value!==qt?Promise.resolve():new Promise((O,W)=>{Ze.add([O,W])})}function at(O){return oe||(oe=!O,Le(),Ze.list().forEach(([W,H])=>O?H(O):W()),Ze.reset()),O}function et(O,W,H,q){const{scrollBehavior:ue}=t;if(!Fn||!ue)return Promise.resolve();const g=!H&&$g(El(O.fullPath,0))||(q||!H)&&history.state&&history.state.scroll||null;return lu().then(()=>ue(O,W,g)).then(y=>y&&Fg(y)).catch(y=>se(y,O,W))}const we=O=>r.go(O);let Ie;const Vt=new Set,mt={currentRoute:h,listening:!0,addRoute:A,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:K,getRoutes:U,resolve:J,options:t,push:z,replace:re,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:o.add,beforeResolve:a.add,afterEach:u.add,onError:Te.add,isReady:qe,install(O){const W=this;O.component("RouterLink",um),O.component("RouterView",th),O.config.globalProperties.$router=W,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(h)}),Fn&&!Ie&&h.value===qt&&(Ie=!0,z(r.location).catch(ue=>{}));const H={};for(const ue in qt)Object.defineProperty(H,ue,{get:()=>h.value[ue],enumerable:!0});O.provide(xo,W),O.provide(eh,nu(H)),O.provide(to,h);const q=O.unmount;Vt.add(O),O.unmount=function(){Vt.delete(O),Vt.size<1&&(d=qt,_&&_(),_=null,h.value=qt,Ie=!1,oe=!1),q()}}};function ze(O){return O.reduce((W,H)=>W.then(()=>w(H)),Promise.resolve())}return mt}function gm(t,e){const n=[],i=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const u=e.matched[a];u&&(t.matched.find(d=>Jn(d,u))?i.push(u):n.push(u));const h=t.matched[a];h&&(e.matched.find(d=>Jn(d,h))||r.push(h))}return[n,i,r]}const mm=zs({__name:"App",setup(t){return(e,n)=>(Mu(),Lu(_t,null,[rt(bn(th)),n[0]||(n[0]=st("footer",null,[st("a",{href:"https://github.com/kikkipedia",target:"_blank"},"CODE")],-1))],64))}}),nh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},vm=nh(mm,[["__scopeId","data-v-5f19cbd3"]]),ym=""+new URL("tramsAb-C_11Geco.jpg",import.meta.url).href,_m=""+new URL("map-DGnupgEj.png",import.meta.url).href,wm=()=>{};var Fl={};/**
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
 */const ih=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Im=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],u=t[n++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,u=a?t[r+1]:0,h=r+2<t.length,d=h?t[r+2]:0,p=o>>2,v=(o&3)<<4|u>>4;let E=(u&15)<<2|d>>6,A=d&63;h||(A=64,a||(E=64)),i.push(n[p],n[v],n[E],n[A])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ih(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Im(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],u=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const v=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||u==null||d==null||v==null)throw new bm;const E=o<<2|u>>4;if(i.push(E),d!==64){const A=u<<4&240|d>>2;if(i.push(A),v!==64){const x=d<<6&192|v;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Em=function(t){const e=ih(t);return sh.encodeByteArray(e,!0)},Cs=function(t){return Em(t).replace(/\./g,"")},rh=function(t){try{return sh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sm=()=>Tm().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof Fl>"u")return;const t=Fl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rh(t[1]);return e&&JSON.parse(e)},Mo=()=>{try{return wm()||Sm()||Am()||Rm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oh=t=>{var e,n;return(n=(e=Mo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cm=t=>{const e=oh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ah=()=>{var t;return(t=Mo())===null||t===void 0?void 0:t.config},lh=t=>{var e;return(e=Mo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Om(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cs(JSON.stringify(n)),Cs(JSON.stringify(a)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function km(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Dm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ch(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xm(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uh(){try{return typeof indexedDB=="object"}catch{return!1}}function hh(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Mm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Lm="FirebaseError";class gt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Lm,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Um(o,i):"Error",u=`${this.serviceName}: ${a} (${r}).`;return new gt(r,u,i)}}function Um(t,e){return t.replace(Fm,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Fm=/\{\$([^}]+)}/g;function jm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ln(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],a=e[r];if(jl(o)&&jl(a)){if(!ln(o,a))return!1}else if(o!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function jl(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $m(t,e){const n=new Hm(t,e);return n.subscribe.bind(n)}class Hm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Bm(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=kr),r.error===void 0&&(r.error=kr),r.complete===void 0&&(r.complete=kr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kr(){}/**
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
 */const Vm=1e3,zm=2,Wm=4*60*60*1e3,Gm=.5;function $l(t,e=Vm,n=zm){const i=e*Math.pow(n,t),r=Math.round(Gm*i*(Math.random()-.5)*2);return Math.min(Wm,i+r)}/**
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
 */function fn(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class Km{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Pm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jm(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&a.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(t){return t===_n?void 0:t}function Jm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Km(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Ym={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Qm=ge.INFO,Zm={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},ev=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Zm[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Js{constructor(e){this.name=e,this._logLevel=Qm,this._logHandler=ev,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ym[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const tv=(t,e)=>e.some(n=>t instanceof n);let Hl,Bl;function nv(){return Hl||(Hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iv(){return Bl||(Bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fh=new WeakMap,no=new WeakMap,dh=new WeakMap,Dr=new WeakMap,Lo=new WeakMap;function sv(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(rn(t.result)),r()},a=()=>{i(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&fh.set(n,t)}).catch(()=>{}),Lo.set(e,t),e}function rv(t){if(no.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});no.set(t,e)}let io={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return no.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ov(t){io=t(io)}function av(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Nr(this),e,...n);return dh.set(i,e.sort?e.sort():[e]),rn(i)}:iv().includes(t)?function(...e){return t.apply(Nr(this),e),rn(fh.get(this))}:function(...e){return rn(t.apply(Nr(this),e))}}function lv(t){return typeof t=="function"?av(t):(t instanceof IDBTransaction&&rv(t),tv(t,nv())?new Proxy(t,io):t)}function rn(t){if(t instanceof IDBRequest)return sv(t);if(Dr.has(t))return Dr.get(t);const e=lv(t);return e!==t&&(Dr.set(t,e),Lo.set(e,t)),e}const Nr=t=>Lo.get(t);function ph(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),u=rn(a);return i&&a.addEventListener("upgradeneeded",h=>{i(rn(a.result),h.oldVersion,h.newVersion,rn(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const cv=["get","getKey","getAll","getAllKeys","count"],uv=["put","add","delete","clear"],xr=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xr.get(e))return xr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=uv.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||cv.includes(n)))return;const o=async function(a,...u){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),r&&h.done]))[0]};return xr.set(e,o),o}ov(t=>({...t,get:(e,n,i)=>Vl(e,n)||t.get(e,n,i),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
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
 */class hv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function fv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const so="@firebase/app",zl="0.11.2";/**
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
 */const jt=new Js("@firebase/app"),dv="@firebase/app-compat",pv="@firebase/analytics-compat",gv="@firebase/analytics",mv="@firebase/app-check-compat",vv="@firebase/app-check",yv="@firebase/auth",_v="@firebase/auth-compat",wv="@firebase/database",Iv="@firebase/data-connect",bv="@firebase/database-compat",Ev="@firebase/functions",Tv="@firebase/functions-compat",Sv="@firebase/installations",Av="@firebase/installations-compat",Rv="@firebase/messaging",Cv="@firebase/messaging-compat",Pv="@firebase/performance",Ov="@firebase/performance-compat",kv="@firebase/remote-config",Dv="@firebase/remote-config-compat",Nv="@firebase/storage",xv="@firebase/storage-compat",Mv="@firebase/firestore",Lv="@firebase/vertexai",Uv="@firebase/firestore-compat",Fv="firebase",jv="11.4.0";/**
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
 */const ro="[DEFAULT]",$v={[so]:"fire-core",[dv]:"fire-core-compat",[gv]:"fire-analytics",[pv]:"fire-analytics-compat",[vv]:"fire-app-check",[mv]:"fire-app-check-compat",[yv]:"fire-auth",[_v]:"fire-auth-compat",[wv]:"fire-rtdb",[Iv]:"fire-data-connect",[bv]:"fire-rtdb-compat",[Ev]:"fire-fn",[Tv]:"fire-fn-compat",[Sv]:"fire-iid",[Av]:"fire-iid-compat",[Rv]:"fire-fcm",[Cv]:"fire-fcm-compat",[Pv]:"fire-perf",[Ov]:"fire-perf-compat",[kv]:"fire-rc",[Dv]:"fire-rc-compat",[Nv]:"fire-gcs",[xv]:"fire-gcs-compat",[Mv]:"fire-fst",[Uv]:"fire-fst-compat",[Lv]:"fire-vertex","fire-js":"fire-js",[Fv]:"fire-js-all"};/**
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
 */const Ps=new Map,Hv=new Map,oo=new Map;function Wl(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(oo.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;oo.set(e,t);for(const n of Ps.values())Wl(n,t);for(const n of Hv.values())Wl(n,t);return!0}function On(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Bv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Pn("app","Firebase",Bv);/**
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
 */class Vv{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const Zn=jv;function gh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ro,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw on.create("bad-app-name",{appName:String(r)});if(n||(n=ah()),!n)throw on.create("no-options");const o=Ps.get(r);if(o){if(ln(n,o.options)&&ln(i,o.config))return o;throw on.create("duplicate-app",{appName:r})}const a=new Xm(r);for(const h of oo.values())a.addComponent(h);const u=new Vv(n,i,a);return Ps.set(r,u),u}function Uo(t=ro){const e=Ps.get(t);if(!e&&t===ro&&ah())return gh();if(!e)throw on.create("no-app",{appName:t});return e}function ot(t,e,n){var i;let r=(i=$v[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(u.join(" "));return}Rt(new pt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zv="firebase-heartbeat-database",Wv=1,ji="firebase-heartbeat-store";let Mr=null;function mh(){return Mr||(Mr=ph(zv,Wv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Mr}async function Gv(t){try{const n=(await mh()).transaction(ji),i=await n.objectStore(ji).get(vh(t));return await n.done,i}catch(e){if(e instanceof gt)jt.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function Gl(t,e){try{const i=(await mh()).transaction(ji,"readwrite");await i.objectStore(ji).put(e,vh(t)),await i.done}catch(n){if(n instanceof gt)jt.warn(n.message);else{const i=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(i.message)}}}function vh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kv=1024,qv=30;class Jv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>qv){const a=Qv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){jt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kl(),{heartbeatsToSend:i,unsentEntries:r}=Xv(this._heartbeatsCache.heartbeats),o=Cs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return jt.warn(n),""}}}function Kl(){return new Date().toISOString().substring(0,10)}function Xv(t,e=Kv){const n=[];let i=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),ql(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ql(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Yv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?hh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ql(t){return Cs(JSON.stringify({version:2,heartbeats:t})).length}function Qv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function Zv(t){Rt(new pt("platform-logger",e=>new hv(e),"PRIVATE")),Rt(new pt("heartbeat",e=>new Jv(e),"PRIVATE")),ot(so,zl,t),ot(so,zl,"esm2017"),ot("fire-js","")}Zv("");function Fo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ey=yh,_h=new Pn("auth","Firebase",yh());/**
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
 */const Os=new Js("@firebase/auth");function ty(t,...e){Os.logLevel<=ge.WARN&&Os.warn(`Auth (${Zn}): ${t}`,...e)}function vs(t,...e){Os.logLevel<=ge.ERROR&&Os.error(`Auth (${Zn}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw jo(t,...e)}function Tt(t,...e){return jo(t,...e)}function wh(t,e,n){const i=Object.assign(Object.assign({},ey()),{[e]:n});return new Pn("auth","Firebase",i).create(e,{appName:t.name})}function En(t){return wh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return _h.create(t,...e)}function ee(t,e,...n){if(!t)throw jo(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vs(e),new Error(e)}function Ht(t,e){t||Mt(e)}/**
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
 */function ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ny(){return Jl()==="http:"||Jl()==="https:"}function Jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ny()||ch()||"connection"in navigator)?navigator.onLine:!0}function sy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=km()||Nm()}get(){return iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $o(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ih{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ry={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oy=new zi(3e4,6e4);function Ho(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ei(t,e,n,i,r={}){return bh(t,r,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const u=Vi(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return Dm()||(d.referrerPolicy="no-referrer"),Ih.fetch()(Eh(t,t.config.apiHost,n,u),d)})}async function bh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ry),e);try{const r=new ly(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw us(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw us(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw us(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw us(t,"user-disabled",a);const p=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw wh(t,p,d);$t(t,p)}}catch(r){if(r instanceof gt)throw r;$t(t,"network-request-failed",{message:String(r)})}}async function ay(t,e,n,i,r={}){const o=await ei(t,e,n,i,r);return"mfaPendingCredential"in o&&$t(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Eh(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?$o(t.config,r):`${t.config.apiScheme}://${r}`}class ly{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Tt(this.auth,"network-request-failed")),oy.get())})}}function us(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Tt(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function cy(t,e){return ei(t,"POST","/v1/accounts:delete",e)}async function Th(t,e){return ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uy(t,e=!1){const n=fn(t),i=await n.getIdToken(e),r=Bo(i);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Ri(Lr(r.auth_time)),issuedAtTime:Ri(Lr(r.iat)),expirationTime:Ri(Lr(r.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Lr(t){return Number(t)*1e3}function Bo(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const r=rh(n);return r?JSON.parse(r):(vs("Failed to decode base64 JWT payload"),null)}catch(r){return vs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Xl(t){const e=Bo(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof gt&&hy(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function hy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ks(t){var e;const n=t.auth,i=await t.getIdToken(),r=await $i(t,Th(n,{idToken:i}));ee(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Sh(o.providerUserInfo):[],u=py(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new lo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,v)}async function dy(t){const e=fn(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function py(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Sh(t){return t.map(e=>{var{providerId:n}=e,i=Fo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function gy(t,e){const n=await bh(t,{},async()=>{const i=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,a=Eh(t,r,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Ih.fetch()(a,{method:"POST",headers:u,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function my(t,e){return ei(t,"POST","/v2/accounts:revokeToken",Ho(t,e))}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Xl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await gy(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,a=new Wn;return i&&(ee(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(ee(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Jt(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=Fo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uy(this,e)}reload(){return dy(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await $i(this,cy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,a,u,h,d,p;const v=(i=n.displayName)!==null&&i!==void 0?i:void 0,E=(r=n.email)!==null&&r!==void 0?r:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,U=(u=n.tenantId)!==null&&u!==void 0?u:void 0,K=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,J=(d=n.createdAt)!==null&&d!==void 0?d:void 0,V=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:z,isAnonymous:re,providerData:ce,stsTokenManager:I}=n;ee(G&&I,e,"internal-error");const m=Wn.fromJSON(this.name,I);ee(typeof G=="string",e,"internal-error"),Jt(v,e.name),Jt(E,e.name),ee(typeof z=="boolean",e,"internal-error"),ee(typeof re=="boolean",e,"internal-error"),Jt(A,e.name),Jt(x,e.name),Jt(U,e.name),Jt(K,e.name),Jt(J,e.name),Jt(V,e.name);const w=new Lt({uid:G,auth:e,email:E,emailVerified:z,displayName:v,isAnonymous:re,photoURL:x,phoneNumber:A,tenantId:U,stsTokenManager:m,createdAt:J,lastLoginAt:V});return ce&&Array.isArray(ce)&&(w.providerData=ce.map(b=>Object.assign({},b))),K&&(w._redirectEventId=K),w}static async _fromIdTokenResponse(e,n,i=!1){const r=new Wn;r.updateFromServerResponse(n);const o=new Lt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ks(o),o}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];ee(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?Sh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),u=new Wn;u.updateFromIdToken(i);const h=new Lt({uid:r.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new lo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const Yl=new Map;function Ut(t){Ht(t instanceof Function,"Expected a class definition");let e=Yl.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yl.set(t,e),e)}/**
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
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ah.type="NONE";const Ql=Ah;/**
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
 */function ys(t,e,n){return`firebase:${t}:${e}:${n}`}class Gn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=ys(this.userKey,r.apiKey,o),this.fullPersistenceKey=ys("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Gn(Ut(Ql),e,i);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=r[0]||Ut(Ql);const a=ys(i,e.config.apiKey,e.name);let u=null;for(const d of n)try{const p=await d._get(a);if(p){const v=Lt._fromJSON(e,p);d!==o&&(u=v),o=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Gn(o,e,i):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Gn(o,e,i))}}/**
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
 */function Zl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dh(e))return"Blackberry";if(Nh(e))return"Webos";if(Ch(e))return"Safari";if((e.includes("chrome/")||Ph(e))&&!e.includes("edge/"))return"Chrome";if(kh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rh(t=Ve()){return/firefox\//i.test(t)}function Ch(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ph(t=Ve()){return/crios\//i.test(t)}function Oh(t=Ve()){return/iemobile/i.test(t)}function kh(t=Ve()){return/android/i.test(t)}function Dh(t=Ve()){return/blackberry/i.test(t)}function Nh(t=Ve()){return/webos/i.test(t)}function Vo(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vy(t=Ve()){var e;return Vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yy(){return xm()&&document.documentMode===10}function xh(t=Ve()){return Vo(t)||kh(t)||Nh(t)||Dh(t)||/windows phone/i.test(t)||Oh(t)}/**
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
 */function Mh(t,e=[]){let n;switch(t){case"Browser":n=Zl(Ve());break;case"Worker":n=`${Zl(Ve())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${i}`}/**
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
 */class _y{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function wy(t,e={}){return ei(t,"GET","/v2/passwordPolicy",Ho(t,e))}/**
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
 */const Iy=6;class by{constructor(e){var n,i,r,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Iy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(r=h.containsLowercaseLetter)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Ey{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ec(this),this.idTokenSubscription=new ec(this),this.beforeStateQueue=new _y(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Th(this,{idToken:e}),i=await Lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(r=h.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(En(this));const n=e?fn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wy(this),n=new by(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await my(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,r);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ty(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zo(t){return fn(t)}class ec{constructor(e){this.auth=e,this.observer=null,this.addObserver=$m(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ty(t){Wo=t}function Sy(t){return Wo.loadJS(t)}function Ay(){return Wo.gapiScript}function Ry(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Cy(t,e){const n=On(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(ln(o,e??{}))return r;$t(r,"already-initialized")}return n.initialize({options:e})}function Py(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Oy(t,e,n){const i=zo(t);ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,o=Lh(e),{host:a,port:u}=ky(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){ee(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ee(ln(d,i.config.emulator)&&ln(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,Dy()}function Lh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ky(t){const e=Lh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:tc(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:tc(a)}}}function tc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Uh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
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
 */async function Kn(t,e){return ay(t,"POST","/v1/accounts:signInWithIdp",Ho(t,e))}/**
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
 */const Ny="http://localhost";class Sn extends Uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=Fo(n,["providerId","signInMethod"]);if(!i||!r)return null;const a=new Sn(i,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Kn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:Ny,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */class Fh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends Fh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends Wi{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class xt extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return xt.credential(n,i)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class tn extends Wi{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends Wi{constructor(){super("twitter.com")}static credential(e,n){return Sn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return nn.credential(n,i)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await Lt._fromIdTokenResponse(e,i,r),a=nc(i);return new Yn({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=nc(i);return new Yn({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function nc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ds extends gt{constructor(e,n,i,r){var o;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ds(e,n,i,r)}}function jh(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ds._fromErrorAndOperation(t,o,e,i):o})}async function xy(t,e,n=!1){const i=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yn._forOperation(t,"link",i)}/**
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
 */async function My(t,e,n=!1){const{auth:i}=t;if(It(i.app))return Promise.reject(En(i));const r="reauthenticate";try{const o=await $i(t,jh(i,r,e,t),n);ee(o.idToken,i,"internal-error");const a=Bo(o.idToken);ee(a,i,"internal-error");const{sub:u}=a;return ee(t.uid===u,i,"user-mismatch"),Yn._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&$t(i,"user-mismatch"),o}}/**
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
 */async function Ly(t,e,n=!1){if(It(t.app))return Promise.reject(En(t));const i="signIn",r=await jh(t,i,e),o=await Yn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}function Uy(t,e,n,i){return fn(t).onIdTokenChanged(e,n,i)}function Fy(t,e,n){return fn(t).beforeAuthStateChanged(e,n)}const Ns="__sak";/**
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
 */class $h{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ns,"1"),this.storage.removeItem(Ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jy=1e3,$y=10;class Hh extends $h{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);yy()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$y):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hh.type="LOCAL";const Hy=Hh;/**
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
 */class Bh extends $h{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bh.type="SESSION";const Vh=Bh;/**
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
 */function By(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Xs(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const u=Array.from(a).map(async d=>d(n.origin,o)),h=await By(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xs.receivers=[];/**
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
 */function Go(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=Go("",20);r.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(v){const E=v;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(E.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function St(){return window}function zy(t){St().location.href=t}/**
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
 */function zh(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function Wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ky(){return zh()?self:null}/**
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
 */const Wh="firebaseLocalStorageDb",qy=1,xs="firebaseLocalStorage",Gh="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ys(t,e){return t.transaction([xs],e?"readwrite":"readonly").objectStore(xs)}function Jy(){const t=indexedDB.deleteDatabase(Wh);return new Gi(t).toPromise()}function co(){const t=indexedDB.open(Wh,qy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(xs,{keyPath:Gh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(xs)?e(i):(i.close(),await Jy(),e(await co()))})})}async function ic(t,e,n){const i=Ys(t,!0).put({[Gh]:e,value:n});return new Gi(i).toPromise()}async function Xy(t,e){const n=Ys(t,!1).get(e),i=await new Gi(n).toPromise();return i===void 0?null:i.value}function sc(t,e){const n=Ys(t,!0).delete(e);return new Gi(n).toPromise()}const Yy=800,Qy=3;class Kh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await co(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Qy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xs._getInstance(Ky()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wy(),!this.activeServiceWorker)return;this.sender=new Vy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await co();return await ic(e,Ns,"1"),await sc(e,Ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ic(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Xy(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Ys(r,!1).getAll();return new Gi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kh.type="LOCAL";const Zy=Kh;new zi(3e4,6e4);/**
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
 */function e_(t,e){return e?Ut(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ko extends Uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t_(t){return Ly(t.auth,new Ko(t),t.bypassAuthState)}function n_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),My(n,new Ko(t),t.bypassAuthState)}async function i_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),xy(n,new Ko(t),t.bypassAuthState)}/**
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
 */class qh{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t_;case"linkViaPopup":case"linkViaRedirect":return i_;case"reauthViaPopup":case"reauthViaRedirect":return n_;default:$t(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const s_=new zi(2e3,1e4);class $n extends qh{constructor(e,n,i,r,o){super(e,n,r,o),this.provider=i,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s_.get())};e()}}$n.currentPopupAction=null;/**
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
 */const r_="pendingRedirect",_s=new Map;class o_ extends qh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const i=await a_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a_(t,e){const n=u_(e),i=c_(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function l_(t,e){_s.set(t._key(),e)}function c_(t){return Ut(t._redirectPersistence)}function u_(t){return ys(r_,t.config.apiKey,t.name)}async function h_(t,e,n=!1){if(It(t.app))return Promise.reject(En(t));const i=zo(t),r=e_(i,e),a=await new o_(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const f_=10*60*1e3;class d_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Jh(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f_&&this.cachedEventUids.clear(),this.cachedEventUids.has(rc(e))}saveEventToCache(e){this.cachedEventUids.add(rc(e)),this.lastProcessedEventTime=Date.now()}}function rc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jh(t);default:return!1}}/**
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
 */async function g_(t,e={}){return ei(t,"GET","/v1/projects",e)}/**
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
 */const m_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v_=/^https?/;async function y_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g_(t);for(const n of e)try{if(__(n))return}catch{}$t(t,"unauthorized-domain")}function __(t){const e=ao(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!v_.test(n))return!1;if(m_.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const w_=new zi(3e4,6e4);function oc(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I_(t){return new Promise((e,n)=>{var i,r,o;function a(){oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oc(),n(Tt(t,"network-request-failed"))},timeout:w_.get()})}if(!((r=(i=St().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)a();else{const u=Ry("iframefcb");return St()[u]=()=>{gapi.load?a():n(Tt(t,"network-request-failed"))},Sy(`${Ay()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw ws=null,e})}let ws=null;function b_(t){return ws=ws||I_(t),ws}/**
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
 */const E_=new zi(5e3,15e3),T_="__/auth/iframe",S_="emulator/auth/iframe",A_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C_(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$o(e,S_):`https://${t.config.authDomain}/${T_}`,i={apiKey:e.apiKey,appName:t.name,v:Zn},r=R_.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Vi(i).slice(1)}`}async function P_(t){const e=await b_(t),n=St().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:C_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A_,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const a=Tt(t,"network-request-failed"),u=St().setTimeout(()=>{o(a)},E_.get());function h(){St().clearTimeout(u),r(i)}i.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const O_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k_=500,D_=600,N_="_blank",x_="http://localhost";class ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M_(t,e,n,i=k_,r=D_){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const h=Object.assign(Object.assign({},O_),{width:i.toString(),height:r.toString(),top:o,left:a}),d=Ve().toLowerCase();n&&(u=Ph(d)?N_:n),Rh(d)&&(e=e||x_,h.scrollbars="yes");const p=Object.entries(h).reduce((E,[A,x])=>`${E}${A}=${x},`,"");if(vy(d)&&u!=="_self")return L_(e||"",u),new ac(null);const v=window.open(e||"",u,p);ee(v,t,"popup-blocked");try{v.focus()}catch{}return new ac(v)}function L_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const U_="__/auth/handler",F_="emulator/auth/handler",j_=encodeURIComponent("fac");async function lc(t,e,n,i,r,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Zn,eventId:r};if(e instanceof Fh){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",jm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,v]of Object.entries({}))a[p]=v}if(e instanceof Wi){const p=e.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await t._getAppCheckToken(),d=h?`#${j_}=${encodeURIComponent(h)}`:"";return`${$_(t)}?${Vi(u).slice(1)}${d}`}function $_({config:t}){return t.emulator?$o(t,F_):`https://${t.authDomain}/${U_}`}/**
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
 */const Ur="webStorageSupport";class H_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vh,this._completeRedirectFn=h_,this._overrideRedirectResult=l_}async _openPopup(e,n,i,r){var o;Ht((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await lc(e,n,i,ao(),r);return M_(e,a,Go())}async _openRedirect(e,n,i,r){await this._originValidation(e);const o=await lc(e,n,i,ao(),r);return zy(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(Ht(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await P_(e),i=new d_(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ur,{type:Ur},r=>{var o;const a=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[Ur];a!==void 0&&n(!!a),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xh()||Ch()||Vo()}}const B_=H_;var cc="@firebase/auth",uc="1.9.1";/**
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
 */class V_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W_(t){Rt(new pt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=i.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mh(t)},d=new Ey(i,r,o,h);return Py(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rt(new pt("auth-internal",e=>{const n=zo(e.getProvider("auth").getImmediate());return(i=>new V_(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(cc,uc,z_(t)),ot(cc,uc,"esm2017")}/**
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
 */const G_=5*60,K_=lh("authIdTokenMaxAge")||G_;let hc=null;const q_=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>K_)return;const r=n==null?void 0:n.token;hc!==r&&(hc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function J_(t=Uo()){const e=On(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cy(t,{popupRedirectResolver:B_,persistence:[Zy,Hy,Vh]}),i=lh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=q_(o.toString());Fy(n,a,()=>a(n.currentUser)),Uy(n,u=>a(u))}}const r=oh("auth");return r&&Oy(n,`http://${r}`),n}function X_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ty({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=Tt("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",X_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W_("Browser");var fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function w(){}w.prototype=m.prototype,I.D=m.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(b,T,R){for(var _=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)_[Le-2]=arguments[Le];return m.prototype[T].apply(b,_)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,m,w){w||(w=0);var b=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)b[T]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(T=0;16>T;++T)b[T]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=I.g[0],w=I.g[1],T=I.g[2];var R=I.g[3],_=m+(R^w&(T^R))+b[0]+3614090360&4294967295;m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+b[1]+3905402710&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+b[2]+606105819&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+b[3]+3250441966&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(R^w&(T^R))+b[4]+4118548399&4294967295,m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+b[5]+1200080426&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+b[6]+2821735955&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+b[7]+4249261313&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(R^w&(T^R))+b[8]+1770035416&4294967295,m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+b[9]+2336552879&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+b[10]+4294925233&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+b[11]+2304563134&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(R^w&(T^R))+b[12]+1804603682&4294967295,m=w+(_<<7&4294967295|_>>>25),_=R+(T^m&(w^T))+b[13]+4254626195&4294967295,R=m+(_<<12&4294967295|_>>>20),_=T+(w^R&(m^w))+b[14]+2792965006&4294967295,T=R+(_<<17&4294967295|_>>>15),_=w+(m^T&(R^m))+b[15]+1236535329&4294967295,w=T+(_<<22&4294967295|_>>>10),_=m+(T^R&(w^T))+b[1]+4129170786&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+b[6]+3225465664&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+b[11]+643717713&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+b[0]+3921069994&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(w^T))+b[5]+3593408605&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+b[10]+38016083&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+b[15]+3634488961&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+b[4]+3889429448&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(w^T))+b[9]+568446438&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+b[14]+3275163606&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+b[3]+4107603335&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+b[8]+1163531501&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(T^R&(w^T))+b[13]+2850285829&4294967295,m=w+(_<<5&4294967295|_>>>27),_=R+(w^T&(m^w))+b[2]+4243563512&4294967295,R=m+(_<<9&4294967295|_>>>23),_=T+(m^w&(R^m))+b[7]+1735328473&4294967295,T=R+(_<<14&4294967295|_>>>18),_=w+(R^m&(T^R))+b[12]+2368359562&4294967295,w=T+(_<<20&4294967295|_>>>12),_=m+(w^T^R)+b[5]+4294588738&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+b[8]+2272392833&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+b[11]+1839030562&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+b[14]+4259657740&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(w^T^R)+b[1]+2763975236&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+b[4]+1272893353&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+b[7]+4139469664&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+b[10]+3200236656&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(w^T^R)+b[13]+681279174&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+b[0]+3936430074&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+b[3]+3572445317&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+b[6]+76029189&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(w^T^R)+b[9]+3654602809&4294967295,m=w+(_<<4&4294967295|_>>>28),_=R+(m^w^T)+b[12]+3873151461&4294967295,R=m+(_<<11&4294967295|_>>>21),_=T+(R^m^w)+b[15]+530742520&4294967295,T=R+(_<<16&4294967295|_>>>16),_=w+(T^R^m)+b[2]+3299628645&4294967295,w=T+(_<<23&4294967295|_>>>9),_=m+(T^(w|~R))+b[0]+4096336452&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+b[7]+1126891415&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+b[14]+2878612391&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+b[5]+4237533241&4294967295,w=T+(_<<21&4294967295|_>>>11),_=m+(T^(w|~R))+b[12]+1700485571&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+b[3]+2399980690&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+b[10]+4293915773&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+b[1]+2240044497&4294967295,w=T+(_<<21&4294967295|_>>>11),_=m+(T^(w|~R))+b[8]+1873313359&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+b[15]+4264355552&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+b[6]+2734768916&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+b[13]+1309151649&4294967295,w=T+(_<<21&4294967295|_>>>11),_=m+(T^(w|~R))+b[4]+4149444226&4294967295,m=w+(_<<6&4294967295|_>>>26),_=R+(w^(m|~T))+b[11]+3174756917&4294967295,R=m+(_<<10&4294967295|_>>>22),_=T+(m^(R|~w))+b[2]+718787259&4294967295,T=R+(_<<15&4294967295|_>>>17),_=w+(R^(T|~m))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+R&4294967295}i.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var w=m-this.blockSize,b=this.B,T=this.h,R=0;R<m;){if(T==0)for(;R<=w;)r(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<m;)if(b[T++]=I.charCodeAt(R++),T==this.blockSize){r(this,b),T=0;break}}else for(;R<m;)if(b[T++]=I[R++],T==this.blockSize){r(this,b),T=0;break}}this.h=T,this.o+=m},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var w=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=w&255,w/=256;for(this.u(I),I=Array(16),m=w=0;4>m;++m)for(var b=0;32>b;b+=8)I[w++]=this.g[m]>>>b&255;return I};function o(I,m){var w=u;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=m(I)}function a(I,m){this.h=m;for(var w=[],b=!0,T=I.length-1;0<=T;T--){var R=I[T]|0;b&&R==m||(w[T]=R,b=!1)}this.g=w}var u={};function h(I){return-128<=I&&128>I?o(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return v;if(0>I)return K(d(-I));for(var m=[],w=1,b=0;I>=w;b++)m[b]=I/w|0,w*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return K(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(m,8)),b=v,T=0;T<I.length;T+=8){var R=Math.min(8,I.length-T),_=parseInt(I.substring(T,T+R),m);8>R?(R=d(Math.pow(m,R)),b=b.j(R).add(d(_))):(b=b.j(w),b=b.add(d(_)))}return b}var v=h(0),E=h(1),A=h(16777216);t=a.prototype,t.m=function(){if(U(this))return-K(this).m();for(var I=0,m=1,w=0;w<this.g.length;w++){var b=this.i(w);I+=(0<=b?b:4294967296+b)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(U(this))return"-"+K(this).toString(I);for(var m=d(Math.pow(I,6)),w=this,b="";;){var T=z(w,m).g;w=J(w,T.j(m));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=T,x(w))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function U(I){return I.h==-1}t.l=function(I){return I=J(this,I),U(I)?-1:x(I)?0:1};function K(I){for(var m=I.g.length,w=[],b=0;b<m;b++)w[b]=~I.g[b];return new a(w,~I.h).add(E)}t.abs=function(){return U(this)?K(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],b=0,T=0;T<=m;T++){var R=b+(this.i(T)&65535)+(I.i(T)&65535),_=(R>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);b=_>>>16,R&=65535,_&=65535,w[T]=_<<16|R}return new a(w,w[w.length-1]&-2147483648?-1:0)};function J(I,m){return I.add(K(m))}t.j=function(I){if(x(this)||x(I))return v;if(U(this))return U(I)?K(this).j(K(I)):K(K(this).j(I));if(U(I))return K(this.j(K(I)));if(0>this.l(A)&&0>I.l(A))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,w=[],b=0;b<2*m;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var T=0;T<I.g.length;T++){var R=this.i(b)>>>16,_=this.i(b)&65535,Le=I.i(T)>>>16,Ze=I.i(T)&65535;w[2*b+2*T]+=_*Ze,V(w,2*b+2*T),w[2*b+2*T+1]+=R*Ze,V(w,2*b+2*T+1),w[2*b+2*T+1]+=_*Le,V(w,2*b+2*T+1),w[2*b+2*T+2]+=R*Le,V(w,2*b+2*T+2)}for(b=0;b<m;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=m;b<2*m;b++)w[b]=0;return new a(w,0)};function V(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function z(I,m){if(x(m))throw Error("division by zero");if(x(I))return new G(v,v);if(U(I))return m=z(K(I),m),new G(K(m.g),K(m.h));if(U(m))return m=z(I,K(m)),new G(K(m.g),m.h);if(30<I.g.length){if(U(I)||U(m))throw Error("slowDivide_ only works with positive integers.");for(var w=E,b=m;0>=b.l(I);)w=re(w),b=re(b);var T=ce(w,1),R=ce(b,1);for(b=ce(b,2),w=ce(w,2);!x(b);){var _=R.add(b);0>=_.l(I)&&(T=T.add(w),R=_),b=ce(b,1),w=ce(w,1)}return m=J(I,T.j(m)),new G(T,m)}for(T=v;0<=I.l(m);){for(w=Math.max(1,Math.floor(I.m()/m.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=d(w),_=R.j(m);U(_)||0<_.l(I);)w-=b,R=d(w),_=R.j(m);x(R)&&(R=E),T=T.add(R),I=J(I,_)}return new G(T,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],b=0;b<m;b++)w[b]=this.i(b)&I.i(b);return new a(w,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],b=0;b<m;b++)w[b]=this.i(b)|I.i(b);return new a(w,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],b=0;b<m;b++)w[b]=this.i(b)^I.i(b);return new a(w,this.h^I.h)};function re(I){for(var m=I.g.length+1,w=[],b=0;b<m;b++)w[b]=I.i(b)<<1|I.i(b-1)>>>31;return new a(w,I.h)}function ce(I,m){var w=m>>5;m%=32;for(var b=I.g.length-w,T=[],R=0;R<b;R++)T[R]=0<m?I.i(R+w)>>>m|I.i(R+w+1)<<32-m:I.i(R+w);return new a(T,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Xh=a}).apply(typeof fc<"u"?fc:typeof self<"u"?self:typeof window<"u"?window:{});var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,c){return s==Array.prototype||s==Object.prototype||(s[l]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof hs=="object"&&hs];for(var l=0;l<s.length;++l){var c=s[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=n(this);function r(s,l){if(l)e:{var c=i;s=s.split(".");for(var f=0;f<s.length-1;f++){var C=s[f];if(!(C in c))break e;c=c[C]}s=s[s.length-1],f=c[s],l=l(f),l!=f&&l!=null&&e(c,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var c=0,f=!1,C={next:function(){if(!f&&c<s.length){var P=c++;return{value:l(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}r("Array.prototype.values",function(s){return s||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function p(s,l,c){return s.call.apply(s.bind,arguments)}function v(s,l,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,f),s.apply(l,C)}}return function(){return s.apply(l,arguments)}}function E(s,l,c){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,E.apply(null,arguments)}function A(s,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function x(s,l){function c(){}c.prototype=l.prototype,s.aa=l.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,C,P){for(var j=Array(arguments.length-2),me=2;me<arguments.length;me++)j[me-2]=arguments[me];return l.prototype[C].apply(f,j)}}function U(s){const l=s.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=s[f];return c}return[]}function K(s,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const C=s.length||0,P=f.length||0;s.length=C+P;for(let j=0;j<P;j++)s[C+j]=f[j]}else s.push(f)}}class J{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function V(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function z(s){return z[" "](s),s}z[" "]=function(){};var re=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ce(s,l,c){for(const f in s)l.call(c,s[f],f,s)}function I(s,l){for(const c in s)l.call(void 0,s[c],c,s)}function m(s){const l={};for(const c in s)l[c]=s[c];return l}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(s,l){let c,f;for(let C=1;C<arguments.length;C++){f=arguments[C];for(c in f)s[c]=f[c];for(let P=0;P<w.length;P++)c=w[P],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function T(s){var l=1;s=s.split(":");const c=[];for(;0<l&&s.length;)c.push(s.shift()),l--;return s.length&&c.push(s.join(":")),c}function R(s){u.setTimeout(()=>{throw s},0)}function _(){var s=qe;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class Le{constructor(){this.h=this.g=null}add(l,c){const f=Ze.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Ze=new J(()=>new Te,s=>s.reset());class Te{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,se=!1,qe=new Le,at=()=>{const s=u.Promise.resolve(void 0);oe=()=>{s.then(et)}};var et=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(c){R(c)}var l=Ze;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}se=!1};function we(){this.s=this.s,this.C=this.C}we.prototype.s=!1,we.prototype.ma=function(){this.s||(this.s=!0,this.N())},we.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Vt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return s}();function mt(s,l){if(Ie.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(re){e:{try{z(l.nodeName);var C=!0;break e}catch{}C=!1}C||(l=null)}}else c=="mouseover"?l=s.fromElement:c=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:ze[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&mt.aa.h.call(this)}}x(mt,Ie);var ze={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),W=0;function H(s,l,c,f,C){this.listener=s,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=C,this.key=++W,this.da=this.fa=!1}function q(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ue(s){this.src=s,this.g={},this.h=0}ue.prototype.add=function(s,l,c,f,C){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var j=y(s,l,f,C);return-1<j?(l=s[j],c||(l.fa=!1)):(l=new H(l,this.src,P,!!f,C),l.fa=c,s.push(l)),l};function g(s,l){var c=l.type;if(c in s.g){var f=s.g[c],C=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=C)&&Array.prototype.splice.call(f,C,1),P&&(q(l),s.g[c].length==0&&(delete s.g[c],s.h--))}}function y(s,l,c,f){for(var C=0;C<s.length;++C){var P=s[C];if(!P.da&&P.listener==l&&P.capture==!!c&&P.ha==f)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),k={};function N(s,l,c,f,C){if(Array.isArray(l)){for(var P=0;P<l.length;P++)N(s,l[P],c,f,C);return null}return c=Z(c),s&&s[O]?s.K(l,c,d(f)?!!f.capture:!1,C):D(s,l,c,!1,f,C)}function D(s,l,c,f,C,P){if(!l)throw Error("Invalid event type");var j=d(C)?!!C.capture:!!C,me=B(s);if(me||(s[S]=me=new ue(s)),c=me.add(l,c,f,j,P),c.proxy)return c;if(f=$(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Vt||(C=j),C===void 0&&(C=!1),s.addEventListener(l.toString(),f,C);else if(s.attachEvent)s.attachEvent(M(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function $(){function s(c){return l.call(s.src,s.listener,c)}const l=Y;return s}function F(s,l,c,f,C){if(Array.isArray(l))for(var P=0;P<l.length;P++)F(s,l[P],c,f,C);else f=d(f)?!!f.capture:!!f,c=Z(c),s&&s[O]?(s=s.i,l=String(l).toString(),l in s.g&&(P=s.g[l],c=y(P,c,f,C),-1<c&&(q(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[l],s.h--)))):s&&(s=B(s))&&(l=s.g[l.toString()],s=-1,l&&(s=y(l,c,f,C)),(c=-1<s?l[s]:null)&&L(c))}function L(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[O])g(l.i,s);else{var c=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(c,f,s.capture):l.detachEvent?l.detachEvent(M(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=B(l))?(g(c,s),c.h==0&&(c.src=null,l[S]=null)):q(s)}}}function M(s){return s in k?k[s]:k[s]="on"+s}function Y(s,l){if(s.da)s=!0;else{l=new mt(l,this);var c=s.listener,f=s.ha||s.src;s.fa&&L(s),s=c.call(f,l)}return s}function B(s){return s=s[S],s instanceof ue?s:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(s){return typeof s=="function"?s:(s[X]||(s[X]=function(l){return s.handleEvent(l)}),s[X])}function Q(){we.call(this),this.i=new ue(this),this.M=this,this.F=null}x(Q,we),Q.prototype[O]=!0,Q.prototype.removeEventListener=function(s,l,c,f){F(this,s,l,c,f)};function ne(s,l){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new Ie(l,s);else if(l instanceof Ie)l.target=l.target||s;else{var C=l;l=new Ie(f,s),b(l,C)}if(C=!0,c)for(var P=c.length-1;0<=P;P--){var j=l.g=c[P];C=ae(j,f,!0,l)&&C}if(j=l.g=s,C=ae(j,f,!0,l)&&C,C=ae(j,f,!1,l)&&C,c)for(P=0;P<c.length;P++)j=l.g=c[P],C=ae(j,f,!1,l)&&C}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var c=s.g[l],f=0;f<c.length;f++)q(c[f]);delete s.g[l],s.h--}}this.F=null},Q.prototype.K=function(s,l,c,f){return this.i.add(String(s),l,!1,c,f)},Q.prototype.L=function(s,l,c,f){return this.i.add(String(s),l,!0,c,f)};function ae(s,l,c,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var C=!0,P=0;P<l.length;++P){var j=l[P];if(j&&!j.da&&j.capture==c){var me=j.listener,Ce=j.ha||j.src;j.fa&&g(s.i,j),C=me.call(Ce,f)!==!1&&C}}return C&&!f.defaultPrevented}function Pe(s,l,c){if(typeof s=="function")c&&(s=E(s,c));else if(s&&typeof s.handleEvent=="function")s=E(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function Ae(s){s.g=Pe(()=>{s.g=null,s.i&&(s.i=!1,Ae(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class tt extends we{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ae(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(s){we.call(this),this.h=s,this.g={}}x(Oe,we);var zt=[];function ti(s){ce(s.g,function(l,c){this.g.hasOwnProperty(c)&&L(l)},s),s.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),ti(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=u.JSON.stringify,nt=u.JSON.parse,qi=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function er(){}er.prototype.h=null;function sa(s){return s.h||(s.h=s.i())}function Tf(){}var ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){Ie.call(this,"d")}x(tr,Ie);function nr(){Ie.call(this,"c")}x(nr,Ie);var kn={},ra=null;function ir(){return ra=ra||new Q}kn.La="serverreachability";function oa(s){Ie.call(this,kn.La,s)}x(oa,Ie);function ii(s){const l=ir();ne(l,new oa(l))}kn.STAT_EVENT="statevent";function aa(s,l){Ie.call(this,kn.STAT_EVENT,s),this.stat=l}x(aa,Ie);function Ue(s){const l=ir();ne(l,new aa(l,s))}kn.Ma="timingevent";function la(s,l){Ie.call(this,kn.Ma,s),this.size=l}x(la,Ie);function si(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function ri(){this.g=!0}ri.prototype.xa=function(){this.g=!1};function Sf(s,l,c,f,C,P){s.info(function(){if(s.g)if(P)for(var j="",me=P.split("&"),Ce=0;Ce<me.length;Ce++){var he=me[Ce].split("=");if(1<he.length){var ke=he[0];he=he[1];var De=ke.split("_");j=2<=De.length&&De[1]=="type"?j+(ke+"="+he+"&"):j+(ke+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+C+"]: "+l+`
`+c+`
`+j})}function Af(s,l,c,f,C,P,j){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+C+"]: "+l+`
`+c+`
`+P+" "+j})}function Dn(s,l,c,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Cf(s,c)+(f?" "+f:"")})}function Rf(s,l){s.info(function(){return"TIMEOUT: "+l})}ri.prototype.info=function(){};function Cf(s,l){if(!s.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var C=f[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<C.length;j++)C[j]=""}}}}return Re(c)}catch{return l}}var sr={NO_ERROR:0,TIMEOUT:8},Pf={},rr;function Ji(){}x(Ji,er),Ji.prototype.g=function(){return new XMLHttpRequest},Ji.prototype.i=function(){return{}},rr=new Ji;function Wt(s,l,c,f){this.j=s,this.i=l,this.l=c,this.R=f||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ca}function ca(){this.i=null,this.g="",this.h=!1}var ua={},or={};function ar(s,l,c){s.L=1,s.v=Zi(Ct(l)),s.m=c,s.P=!0,ha(s,null)}function ha(s,l){s.F=Date.now(),Xi(s),s.A=Ct(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Sa(c.i,"t",f),s.C=0,c=s.j.J,s.h=new ca,s.g=Va(s.j,c?l:null,!s.m),0<s.O&&(s.M=new tt(E(s.Y,s,s.g),s.O)),l=s.U,c=s.g,f=s.ca;var C="readystatechange";Array.isArray(C)||(C&&(zt[0]=C.toString()),C=zt);for(var P=0;P<C.length;P++){var j=N(c,C[P],f||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),ii(),Sf(s.i,s.u,s.A,s.l,s.R,s.m)}Wt.prototype.ca=function(s){s=s.target;const l=this.M;l&&Pt(s)==3?l.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)e:{const De=Pt(this.g);var l=this.g.Ba();const Mn=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||Da(this.g)))){this.J||De!=4||l==7||(l==8||0>=Mn?ii(3):ii(2)),lr(this);var c=this.g.Z();this.X=c;t:if(fa(this)){var f=Da(this.g);s="";var C=f.length,P=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),oi(this);var j="";break t}this.h.i=new u.TextDecoder}for(l=0;l<C;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(P&&l==C-1)});f.length=0,this.h.g+=s,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=c==200,Af(this.i,this.u,this.A,this.l,this.R,De,c),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ce=this.g;if((me=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(me)){var he=me;break t}}he=null}if(c=he)Dn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cr(this,c);else{this.o=!1,this.s=3,Ue(12),dn(this),oi(this);break e}}if(this.P){c=!0;let lt;for(;!this.J&&this.C<j.length;)if(lt=Of(this,j),lt==or){De==4&&(this.s=4,Ue(14),c=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==ua){this.s=4,Ue(15),Dn(this.i,this.l,j,"[Invalid Chunk]"),c=!1;break}else Dn(this.i,this.l,lt,null),cr(this,lt);if(fa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||j.length!=0||this.h.h||(this.s=1,Ue(16),c=!1),this.o=this.o&&c,!c)Dn(this.i,this.l,j,"[Invalid Chunked Response]"),dn(this),oi(this);else if(0<j.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),gr(ke),ke.M=!0,Ue(11))}}else Dn(this.i,this.l,j,null),cr(this,j);De==4&&dn(this),this.o&&!this.J&&(De==4?ja(this.j,this):(this.o=!1,Xi(this)))}else Kf(this.g),c==400&&0<j.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),dn(this),oi(this)}}}catch{}finally{}};function fa(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Of(s,l){var c=s.C,f=l.indexOf(`
`,c);return f==-1?or:(c=Number(l.substring(c,f)),isNaN(c)?ua:(f+=1,f+c>l.length?or:(l=l.slice(f,f+c),s.C=f+c,l)))}Wt.prototype.cancel=function(){this.J=!0,dn(this)};function Xi(s){s.S=Date.now()+s.I,da(s,s.I)}function da(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=si(E(s.ba,s),l)}function lr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Wt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Rf(this.i,this.A),this.L!=2&&(ii(),Ue(17)),dn(this),this.s=2,oi(this)):da(this,this.S-s)};function oi(s){s.j.G==0||s.J||ja(s.j,s)}function dn(s){lr(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,ti(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function cr(s,l){try{var c=s.j;if(c.G!=0&&(c.g==s||ur(c.h,s))){if(!s.K&&ur(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var C=f;if(C[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)rs(c),is(c);else break e;pr(c),Ue(18)}}else c.za=C[1],0<c.za-c.T&&37500>C[2]&&c.F&&c.v==0&&!c.C&&(c.C=si(E(c.Za,c),6e3));if(1>=ma(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else gn(c,11)}else if((s.K||c.g==s)&&rs(c),!V(l))for(C=c.Da.g.parse(l),l=0;l<C.length;l++){let he=C[l];if(c.T=he[0],he=he[1],c.G==2)if(he[0]=="c"){c.K=he[1],c.ia=he[2];const ke=he[3];ke!=null&&(c.la=ke,c.j.info("VER="+c.la));const De=he[4];De!=null&&(c.Aa=De,c.j.info("SVER="+c.Aa));const Mn=he[5];Mn!=null&&typeof Mn=="number"&&0<Mn&&(f=1.5*Mn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const lt=s.g;if(lt){const os=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(os){var P=f.h;P.g||os.indexOf("spdy")==-1&&os.indexOf("quic")==-1&&os.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(hr(P,P.h),P.h=null))}if(f.D){const mr=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;mr&&(f.ya=mr,_e(f.I,f.D,mr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var j=s;if(f.qa=Ba(f,f.J?f.ia:null,f.W),j.K){va(f.h,j);var me=j,Ce=f.L;Ce&&(me.I=Ce),me.B&&(lr(me),Xi(me)),f.g=j}else Ua(f);0<c.i.length&&ss(c)}else he[0]!="stop"&&he[0]!="close"||gn(c,7);else c.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?gn(c,7):dr(c):he[0]!="noop"&&c.l&&c.l.ta(he),c.v=0)}}ii(4)}catch{}}var kf=class{constructor(s,l){this.g=s,this.map=l}};function pa(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ga(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ma(s){return s.h?1:s.g?s.g.size:0}function ur(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function hr(s,l){s.g?s.g.add(l):s.h=l}function va(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}pa.prototype.cancel=function(){if(this.i=ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ya(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const c of s.g.values())l=l.concat(c.D);return l}return U(s.i)}function Df(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],c=s.length,f=0;f<c;f++)l.push(s[f]);return l}l=[],c=0;for(f in s)l[c++]=s[f];return l}function Nf(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var c=0;c<s;c++)l.push(c);return l}l=[],c=0;for(const f in s)l[c++]=f;return l}}}function _a(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var c=Nf(s),f=Df(s),C=f.length,P=0;P<C;P++)l.call(void 0,f[P],c&&c[P],s)}var wa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xf(s,l){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),C=null;if(0<=f){var P=s[c].substring(0,f);C=s[c].substring(f+1)}else P=s[c];l(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function pn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pn){this.h=s.h,Yi(this,s.j),this.o=s.o,this.g=s.g,Qi(this,s.s),this.l=s.l;var l=s.i,c=new ci;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Ia(this,c),this.m=s.m}else s&&(l=String(s).match(wa))?(this.h=!1,Yi(this,l[1]||"",!0),this.o=ai(l[2]||""),this.g=ai(l[3]||"",!0),Qi(this,l[4]),this.l=ai(l[5]||"",!0),Ia(this,l[6]||"",!0),this.m=ai(l[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}pn.prototype.toString=function(){var s=[],l=this.j;l&&s.push(li(l,ba,!0),":");var c=this.g;return(c||l=="file")&&(s.push("//"),(l=this.o)&&s.push(li(l,ba,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(li(c,c.charAt(0)=="/"?Uf:Lf,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",li(c,jf)),s.join("")};function Ct(s){return new pn(s)}function Yi(s,l,c){s.j=c?ai(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function Qi(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Ia(s,l,c){l instanceof ci?(s.i=l,$f(s.i,s.h)):(c||(l=li(l,Ff)),s.i=new ci(l,s.h))}function _e(s,l,c){s.i.set(l,c)}function Zi(s){return _e(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function ai(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function li(s,l,c){return typeof s=="string"?(s=encodeURI(s).replace(l,Mf),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Mf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ba=/[#\/\?@]/g,Lf=/[#\?:]/g,Uf=/[#\?]/g,Ff=/[#\?@]/g,jf=/#/g;function ci(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&xf(s.i,function(l,c){s.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}t=ci.prototype,t.add=function(s,l){Gt(this),this.i=null,s=Nn(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(l),this.h+=1,this};function Ea(s,l){Gt(s),l=Nn(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Ta(s,l){return Gt(s),l=Nn(s,l),s.g.has(l)}t.forEach=function(s,l){Gt(this),this.g.forEach(function(c,f){c.forEach(function(C){s.call(l,C,f,this)},this)},this)},t.na=function(){Gt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const C=s[f];for(let P=0;P<C.length;P++)c.push(l[f])}return c},t.V=function(s){Gt(this);let l=[];if(typeof s=="string")Ta(this,s)&&(l=l.concat(this.g.get(Nn(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)l=l.concat(s[c])}return l},t.set=function(s,l){return Gt(this),this.i=null,s=Nn(this,s),Ta(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},t.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Sa(s,l,c){Ea(s,l),0<c.length&&(s.i=null,s.g.set(Nn(s,l),U(c)),s.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var C=P;j[f]!==""&&(C+="="+encodeURIComponent(String(j[f]))),s.push(C)}}return this.i=s.join("&")};function Nn(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function $f(s,l){l&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(c,f){var C=f.toLowerCase();f!=C&&(Ea(this,f),Sa(this,C,c))},s)),s.j=l}function Hf(s,l){const c=new ri;if(u.Image){const f=new Image;f.onload=A(Kt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=A(Kt,c,"TestLoadImage: error",!1,l,f),f.onabort=A(Kt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=A(Kt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function Bf(s,l){const c=new ri,f=new AbortController,C=setTimeout(()=>{f.abort(),Kt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(C),P.ok?Kt(c,"TestPingServer: ok",!0,l):Kt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),Kt(c,"TestPingServer: error",!1,l)})}function Kt(s,l,c,f,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),f(c)}catch{}}function Vf(){this.g=new qi}function zf(s,l,c){const f=c||"";try{_a(s,function(C,P){let j=C;d(C)&&(j=Re(C)),l.push(f+P+"="+encodeURIComponent(j))})}catch(C){throw l.push(f+"type="+encodeURIComponent("_badmap")),C}}function es(s){this.l=s.Ub||null,this.j=s.eb||!1}x(es,er),es.prototype.g=function(){return new ts(this.l,this.j)},es.prototype.i=function(s){return function(){return s}}({});function ts(s,l){Q.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ts,Q),t=ts.prototype,t.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,hi(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Aa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Aa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?ui(this):hi(this),this.readyState==3&&Aa(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,ui(this))},t.Qa=function(s){this.g&&(this.response=s,ui(this))},t.ga=function(){this.g&&ui(this)};function ui(s){s.readyState=4,s.l=null,s.j=null,s.v=null,hi(s)}t.setRequestHeader=function(s,l){this.u.append(s,l)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=l.next();return s.join(`\r
`)};function hi(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ra(s){let l="";return ce(s,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function fr(s,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Ra(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):_e(s,l,c))}function Ee(s){Q.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ee,Q);var Wf=/^https?$/i,Gf=["POST","PUT"];t=Ee.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rr.g(),this.v=this.o?sa(this.o):sa(rr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(P){Ca(this,P);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var C in f)c.set(C,f[C]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())c.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),C=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Gf,l,void 0))||f||C||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of c)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ka(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){Ca(this,P)}};function Ca(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Pa(s),ns(s)}function Pa(s){s.A||(s.A=!0,ne(s,"complete"),ne(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,ne(this,"complete"),ne(this,"abort"),ns(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ns(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Oa(this):this.bb())},t.bb=function(){Oa(this)};function Oa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Pt(s)!=4||s.Z()!=2)){if(s.u&&Pt(s)==4)Pe(s.Ea,0,s);else if(ne(s,"readystatechange"),Pt(s)==4){s.h=!1;try{const j=s.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=j===0){var C=String(s.D).match(wa)[1]||null;!C&&u.self&&u.self.location&&(C=u.self.location.protocol.slice(0,-1)),f=!Wf.test(C?C.toLowerCase():"")}c=f}if(c)ne(s,"complete"),ne(s,"success");else{s.m=6;try{var P=2<Pt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",Pa(s)}}finally{ns(s)}}}}function ns(s,l){if(s.g){ka(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||ne(s,"ready");try{c.onreadystatechange=f}catch{}}}function ka(s){s.I&&(u.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function Pt(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),nt(l)}};function Da(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Kf(s){const l={};s=(s.g&&2<=Pt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(V(s[f]))continue;var c=T(s[f]);const C=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=l[C]||[];l[C]=P,P.push(c)}I(l,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fi(s,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||l}function Na(s){this.Aa=0,this.i=[],this.j=new ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fi("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fi("baseRetryDelayMs",5e3,s),this.cb=fi("retryDelaySeedMs",1e4,s),this.Wa=fi("forwardChannelMaxRetries",2,s),this.wa=fi("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new pa(s&&s.concurrentRequestLimit),this.Da=new Vf,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Na.prototype,t.la=8,t.G=1,t.connect=function(s,l,c,f){Ue(0),this.W=s,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Ba(this,null,this.W),ss(this)};function dr(s){if(xa(s),s.G==3){var l=s.U++,c=Ct(s.I);if(_e(c,"SID",s.K),_e(c,"RID",l),_e(c,"TYPE","terminate"),di(s,c),l=new Wt(s,s.j,l),l.L=2,l.v=Zi(Ct(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Va(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Xi(l)}Ha(s)}function is(s){s.g&&(gr(s),s.g.cancel(),s.g=null)}function xa(s){is(s),s.u&&(u.clearTimeout(s.u),s.u=null),rs(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function ss(s){if(!ga(s.h)&&!s.s){s.s=!0;var l=s.Ga;oe||at(),se||(oe(),se=!0),qe.add(l,s),s.B=0}}function qf(s,l){return ma(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=si(E(s.Ga,s,l),$a(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const C=new Wt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=m(P),b(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=La(this,C,l),c=Ct(this.I),_e(c,"RID",s),_e(c,"CVER",22),this.D&&_e(c,"X-HTTP-Session-Id",this.D),di(this,c),P&&(this.O?l="headers="+encodeURIComponent(String(Ra(P)))+"&"+l:this.m&&fr(c,this.m,P)),hr(this.h,C),this.Ua&&_e(c,"TYPE","init"),this.P?(_e(c,"$req",l),_e(c,"SID","null"),C.T=!0,ar(C,c,null)):ar(C,c,l),this.G=2}}else this.G==3&&(s?Ma(this,s):this.i.length==0||ga(this.h)||Ma(this))};function Ma(s,l){var c;l?c=l.l:c=s.U++;const f=Ct(s.I);_e(f,"SID",s.K),_e(f,"RID",c),_e(f,"AID",s.T),di(s,f),s.m&&s.o&&fr(f,s.m,s.o),c=new Wt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),l&&(s.i=l.D.concat(s.i)),l=La(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),hr(s.h,c),ar(c,f,l)}function di(s,l){s.H&&ce(s.H,function(c,f){_e(l,f,c)}),s.l&&_a({},function(c,f){_e(l,f,c)})}function La(s,l,c){c=Math.min(s.i.length,c);var f=s.l?E(s.l.Na,s.l,s):null;e:{var C=s.i;let P=-1;for(;;){const j=["count="+c];P==-1?0<c?(P=C[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let me=!0;for(let Ce=0;Ce<c;Ce++){let he=C[Ce].g;const ke=C[Ce].map;if(he-=P,0>he)P=Math.max(0,C[Ce].g-100),me=!1;else try{zf(ke,j,"req"+he+"_")}catch{f&&f(ke)}}if(me){f=j.join("&");break e}}}return s=s.i.splice(0,c),l.D=s,f}function Ua(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;oe||at(),se||(oe(),se=!0),qe.add(l,s),s.v=0}}function pr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=si(E(s.Fa,s),$a(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,Fa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=si(E(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),is(this),Fa(this))};function gr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Fa(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Ct(s.qa);_e(l,"RID","rpc"),_e(l,"SID",s.K),_e(l,"AID",s.T),_e(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&_e(l,"TO",s.ja),_e(l,"TYPE","xmlhttp"),di(s,l),s.m&&s.o&&fr(l,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Zi(Ct(l)),c.m=null,c.P=!0,ha(c,s)}t.Za=function(){this.C!=null&&(this.C=null,is(this),pr(this),Ue(19))};function rs(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function ja(s,l){var c=null;if(s.g==l){rs(s),gr(s),s.g=null;var f=2}else if(ur(s.h,l))c=l.D,va(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var C=s.B;f=ir(),ne(f,new la(f,c)),ss(s)}else Ua(s);else if(C=l.s,C==3||C==0&&0<l.X||!(f==1&&qf(s,l)||f==2&&pr(s)))switch(c&&0<c.length&&(l=s.h,l.i=l.i.concat(c)),C){case 1:gn(s,5);break;case 4:gn(s,10);break;case 3:gn(s,6);break;default:gn(s,2)}}}function $a(s,l){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*l}function gn(s,l){if(s.j.info("Error code "+l),l==2){var c=E(s.fb,s),f=s.Xa;const C=!f;f=new pn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Yi(f,"https"),Zi(f),C?Hf(f.toString(),c):Bf(f.toString(),c)}else Ue(2);s.G=0,s.l&&s.l.sa(l),Ha(s),xa(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Ha(s){if(s.G=0,s.ka=[],s.l){const l=ya(s.h);(l.length!=0||s.i.length!=0)&&(K(s.ka,l),K(s.ka,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.ra()}}function Ba(s,l,c){var f=c instanceof pn?Ct(c):new pn(c);if(f.g!="")l&&(f.g=l+"."+f.g),Qi(f,f.s);else{var C=u.location;f=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;var P=new pn(null);f&&Yi(P,f),l&&(P.g=l),C&&Qi(P,C),c&&(P.l=c),f=P}return c=s.D,l=s.ya,c&&l&&_e(f,c,l),_e(f,"VER",s.la),di(s,f),f}function Va(s,l,c){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Ee(new es({eb:c})):new Ee(s.pa),l.Ha(s.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function za(){}t=za.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function it(s,l){Q.call(this),this.g=new Na(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!V(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!V(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new xn(this)}x(it,Q),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){dr(this.g)},it.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Re(s),s=c);l.i.push(new kf(l.Ya++,s)),l.G==3&&ss(l)},it.prototype.N=function(){this.g.l=null,delete this.j,dr(this.g),delete this.g,it.aa.N.call(this)};function Wa(s){tr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const c in l){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}x(Wa,tr);function Ga(){nr.call(this),this.status=1}x(Ga,nr);function xn(s){this.g=s}x(xn,za),xn.prototype.ua=function(){ne(this.g,"a")},xn.prototype.ta=function(s){ne(this.g,new Wa(s))},xn.prototype.sa=function(s){ne(this.g,new Ga)},xn.prototype.ra=function(){ne(this.g,"b")},it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Pf.COMPLETE="complete",Tf.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",Q.prototype.listen=Q.prototype.K,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha}).apply(typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{});const dc="@firebase/firestore",pc="4.7.9";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let Ki="11.4.0";/**
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
 */const Qn=new Js("@firebase/firestore");function ut(t,...e){if(Qn.logLevel<=ge.DEBUG){const n=e.map(qo);Qn.debug(`Firestore (${Ki}): ${t}`,...n)}}function Yh(t,...e){if(Qn.logLevel<=ge.ERROR){const n=e.map(qo);Qn.error(`Firestore (${Ki}): ${t}`,...n)}}function Y_(t,...e){if(Qn.logLevel<=ge.WARN){const n=e.map(qo);Qn.warn(`Firestore (${Ki}): ${t}`,...n)}}function qo(t){if(typeof t=="string")return t;try{/**
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
 */function Jo(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw Yh(e),new Error(e)}function Ci(t,e){t||Jo()}/**
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
 */const We={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ge extends gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class Z_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ew{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ci(this.o===void 0);let i=this.i;const r=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new Pi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Pi,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Pi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ci(typeof i.accessToken=="string"),new Qh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ci(e===null||typeof e=="string"),new je(e)}}class tw{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=je.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nw{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new tw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iw{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,It(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ci(this.o===void 0);const i=o=>{o.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,ut("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new gc(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ci(typeof n.token=="string"),this.R=n.token,new gc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function sw(t){return t.name==="IndexedDbTransactionError"}const uo="(default)";class Ms{constructor(e,n){this.projectId=e,this.database=n||uo}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database===uo}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var mc,le;(le=mc||(mc={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Xh([4294967295,4294967295],0);/**
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
 */const rw=41943040;/**
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
 */const ow=1048576;function Fr(){return typeof document<"u"?document:null}/**
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
 */class aw{constructor(e,n,i=1e3,r=1.5,o=6e4){this.Ti=e,this.timerId=n,this.Go=i,this.zo=r,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),r=Math.max(0,n-i);r>0&&ut("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */class Xo{constructor(e,n,i,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new Pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,o){const a=Date.now()+i,u=new Xo(e,n,a,r,o);return u.start(i),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ge(We.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var vc,yc;(yc=vc||(vc={}))._a="default",yc.Cache="cache";/**
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
 */function lw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const _c=new Map;function cw(t,e,n,i){if(e===!0&&i===!0)throw new Ge(We.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uw(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Jo()}function hw(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ge(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uw(t);throw new Ge(We.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Zh="firestore.googleapis.com",wc=!0;class Ic{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ge(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zh,this.ssl=wc}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:wc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ow)throw new Ge(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ge(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ge(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ge(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ic({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ge(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ge(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ic(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Q_;switch(i.type){case"firstParty":return new nw(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ge(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=_c.get(n);i&&(ut("ComponentProvider","Removing Datastore"),_c.delete(n),i.terminate())}(this),Promise.resolve()}}function fw(t,e,n,i={}){var r;const o=(t=hw(t,ef))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o.host!==Zh&&o.host!==u&&Y_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:i});if(!ln(h,a)&&(t._setSettings(h),i.mockUserToken)){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=je.MOCK_USER;else{d=Om(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new Ge(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new je(v)}t._authCredentials=new Z_(new Qh(d,p))}}/**
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
 */const bc="AsyncQueue";class Ec{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new aw(this,"async_queue_retry"),this.bu=()=>{const i=Fr();i&&ut(bc,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.Su=e;const n=Fr();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Pi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!sw(e))throw e;ut(bc,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const r=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(i);throw Yh("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.pu=!1,i))));return this.Su=n,n}enqueueAfterDelay(e,n,i){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const r=Xo.createAndSchedule(this,e,n,i,o=>this.Fu(o));return this.fu.push(r),r}Du(){this.gu&&Jo()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class dw extends ef{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new Ec,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ec(e),this._firestoreClient=void 0,await e}}}function pw(t,e){const n=typeof t=="object"?t:Uo(),i=typeof t=="string"?t:uo,r=On(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const o=Cm("firestore");o&&fw(r,...o)}return r}(function(e,n=!0){(function(r){Ki=r})(Zn),Rt(new pt("firestore",(i,{instanceIdentifier:r,options:o})=>{const a=i.getProvider("app").getImmediate(),u=new dw(new ew(i.getProvider("auth-internal")),new iw(a,i.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Ge(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(d.options.projectId,p)}(a,r),a);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ot(dc,pc,e),ot(dc,pc,"esm2017")})();var gw="firebase",mw="11.4.0";/**
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
 */ot(gw,mw,"app");const tf="@firebase/installations",Yo="0.6.13";/**
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
 */const nf=1e4,sf=`w:${Yo}`,rf="FIS_v2",vw="https://firebaseinstallations.googleapis.com/v1",yw=60*60*1e3,_w="installations",ww="Installations";/**
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
 */const Iw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},An=new Pn(_w,ww,Iw);function of(t){return t instanceof gt&&t.code.includes("request-failed")}/**
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
 */function af({projectId:t}){return`${vw}/projects/${t}/installations`}function lf(t){return{token:t.token,requestStatus:2,expiresIn:Ew(t.expiresIn),creationTime:Date.now()}}async function cf(t,e){const i=(await e.json()).error;return An.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function uf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bw(t,{refreshToken:e}){const n=uf(t);return n.append("Authorization",Tw(e)),n}async function hf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ew(t){return Number(t.replace("s","000"))}function Tw(t){return`${rf} ${t}`}/**
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
 */async function Sw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=af(t),r=uf(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:n,authVersion:rf,appId:t.appId,sdkVersion:sf},u={method:"POST",headers:r,body:JSON.stringify(a)},h=await hf(()=>fetch(i,u));if(h.ok){const d=await h.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:lf(d.authToken)}}else throw await cf("Create Installation",h)}/**
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
 */function ff(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Aw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Rw=/^[cdef][\w-]{21}$/,ho="";function Cw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Pw(t);return Rw.test(n)?n:ho}catch{return ho}}function Pw(t){return Aw(t).substr(0,22)}/**
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
 */function Qs(t){return`${t.appName}!${t.appId}`}/**
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
 */const df=new Map;function pf(t,e){const n=Qs(t);gf(n,e),Ow(n,e)}function gf(t,e){const n=df.get(t);if(n)for(const i of n)i(e)}function Ow(t,e){const n=kw();n&&n.postMessage({key:t,fid:e}),Dw()}let wn=null;function kw(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=t=>{gf(t.data.key,t.data.fid)}),wn}function Dw(){df.size===0&&wn&&(wn.close(),wn=null)}/**
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
 */const Nw="firebase-installations-database",xw=1,Rn="firebase-installations-store";let jr=null;function Qo(){return jr||(jr=ph(Nw,xw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rn)}}})),jr}async function Ls(t,e){const n=Qs(t),r=(await Qo()).transaction(Rn,"readwrite"),o=r.objectStore(Rn),a=await o.get(n);return await o.put(e,n),await r.done,(!a||a.fid!==e.fid)&&pf(t,e.fid),e}async function mf(t){const e=Qs(t),i=(await Qo()).transaction(Rn,"readwrite");await i.objectStore(Rn).delete(e),await i.done}async function Zs(t,e){const n=Qs(t),r=(await Qo()).transaction(Rn,"readwrite"),o=r.objectStore(Rn),a=await o.get(n),u=e(a);return u===void 0?await o.delete(n):await o.put(u,n),await r.done,u&&(!a||a.fid!==u.fid)&&pf(t,u.fid),u}/**
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
 */async function Zo(t){let e;const n=await Zs(t.appConfig,i=>{const r=Mw(i),o=Lw(t,r);return e=o.registrationPromise,o.installationEntry});return n.fid===ho?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Mw(t){const e=t||{fid:Cw(),registrationStatus:0};return vf(e)}function Lw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(An.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Uw(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Fw(t)}:{installationEntry:e}}async function Uw(t,e){try{const n=await Sw(t,e);return Ls(t.appConfig,n)}catch(n){throw of(n)&&n.customData.serverCode===409?await mf(t.appConfig):await Ls(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Fw(t){let e=await Tc(t.appConfig);for(;e.registrationStatus===1;)await ff(100),e=await Tc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Zo(t);return i||n}return e}function Tc(t){return Zs(t,e=>{if(!e)throw An.create("installation-not-found");return vf(e)})}function vf(t){return jw(t)?{fid:t.fid,registrationStatus:0}:t}function jw(t){return t.registrationStatus===1&&t.registrationTime+nf<Date.now()}/**
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
 */async function $w({appConfig:t,heartbeatServiceProvider:e},n){const i=Hw(t,n),r=bw(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:sf,appId:t.appId}},u={method:"POST",headers:r,body:JSON.stringify(a)},h=await hf(()=>fetch(i,u));if(h.ok){const d=await h.json();return lf(d)}else throw await cf("Generate Auth Token",h)}function Hw(t,{fid:e}){return`${af(t)}/${e}/authTokens:generate`}/**
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
 */async function ea(t,e=!1){let n;const i=await Zs(t.appConfig,o=>{if(!yf(o))throw An.create("not-registered");const a=o.authToken;if(!e&&zw(a))return o;if(a.requestStatus===1)return n=Bw(t,e),o;{if(!navigator.onLine)throw An.create("app-offline");const u=Gw(o);return n=Vw(t,u),u}});return n?await n:i.authToken}async function Bw(t,e){let n=await Sc(t.appConfig);for(;n.authToken.requestStatus===1;)await ff(100),n=await Sc(t.appConfig);const i=n.authToken;return i.requestStatus===0?ea(t,e):i}function Sc(t){return Zs(t,e=>{if(!yf(e))throw An.create("not-registered");const n=e.authToken;return Kw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Vw(t,e){try{const n=await $w(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ls(t.appConfig,i),n}catch(n){if(of(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mf(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ls(t.appConfig,i)}throw n}}function yf(t){return t!==void 0&&t.registrationStatus===2}function zw(t){return t.requestStatus===2&&!Ww(t)}function Ww(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+yw}function Gw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Kw(t){return t.requestStatus===1&&t.requestTime+nf<Date.now()}/**
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
 */async function qw(t){const e=t,{installationEntry:n,registrationPromise:i}=await Zo(e);return i?i.catch(console.error):ea(e).catch(console.error),n.fid}/**
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
 */async function Jw(t,e=!1){const n=t;return await Xw(n),(await ea(n,e)).token}async function Xw(t){const{registrationPromise:e}=await Zo(t);e&&await e}/**
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
 */function Yw(t){if(!t||!t.options)throw $r("App Configuration");if(!t.name)throw $r("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $r(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $r(t){return An.create("missing-app-config-values",{valueName:t})}/**
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
 */const _f="installations",Qw="installations-internal",Zw=t=>{const e=t.getProvider("app").getImmediate(),n=Yw(e),i=On(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},e0=t=>{const e=t.getProvider("app").getImmediate(),n=On(e,_f).getImmediate();return{getId:()=>qw(n),getToken:r=>Jw(n,r)}};function t0(){Rt(new pt(_f,Zw,"PUBLIC")),Rt(new pt(Qw,e0,"PRIVATE"))}t0();ot(tf,Yo);ot(tf,Yo,"esm2017");/**
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
 */const Us="analytics",n0="firebase_id",i0="origin",s0=60*1e3,r0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ta="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ke=new Js("@firebase/analytics");/**
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
 */const o0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new Pn("analytics","Analytics",o0);/**
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
 */function a0(t){if(!t.startsWith(ta)){const e=Qe.create("invalid-gtag-resource",{gtagURL:t});return Ke.warn(e.message),""}return t}function wf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function l0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function c0(t,e){const n=l0("firebase-js-sdk-policy",{createScriptURL:a0}),i=document.createElement("script"),r=`${ta}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function u0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function h0(t,e,n,i,r,o){const a=i[r];try{if(a)await e[a];else{const h=(await wf(n)).find(d=>d.measurementId===r);h&&await e[h.appId]}}catch(u){Ke.error(u)}t("config",r,o)}async function f0(t,e,n,i,r){try{let o=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const u=await wf(n);for(const h of a){const d=u.find(v=>v.measurementId===h),p=d&&e[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,r||{})}catch(o){Ke.error(o)}}function d0(t,e,n,i){async function r(o,...a){try{if(o==="event"){const[u,h]=a;await f0(t,e,n,u,h)}else if(o==="config"){const[u,h]=a;await h0(t,e,n,i,u,h)}else if(o==="consent"){const[u,h]=a;t("consent",u,h)}else if(o==="get"){const[u,h,d]=a;t("get",u,h,d)}else if(o==="set"){const[u]=a;t("set",u)}else t(o,...a)}catch(u){Ke.error(u)}}return r}function p0(t,e,n,i,r){let o=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=d0(o,t,e,n),{gtagCore:o,wrappedGtag:window[r]}}function g0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ta)&&n.src.includes(t))return n;return null}/**
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
 */const m0=30,v0=1e3;class y0{constructor(e={},n=v0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const If=new y0;function _0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function w0(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:_0(i)},o=r0.replace("{app-id}",n),a=await fetch(o,r);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((e=h.error)===null||e===void 0)&&e.message&&(u=h.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function I0(t,e=If,n){const{appId:i,apiKey:r,measurementId:o}=t.options;if(!i)throw Qe.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw Qe.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new T0;return setTimeout(async()=>{u.abort()},s0),bf({appId:i,apiKey:r,measurementId:o},a,u,e)}async function bf(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=If){var o;const{appId:a,measurementId:u}=t;try{await b0(i,e)}catch(h){if(u)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await w0(t);return r.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!E0(d)){if(r.deleteThrottleMetadata(a),u)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?$l(n,r.intervalMillis,m0):$l(n,r.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return r.setThrottleMetadata(a,v),Ke.debug(`Calling attemptFetch again in ${p} millis`),bf(t,v,i,r)}}function b0(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(o),i(Qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function E0(t){if(!(t instanceof gt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class T0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function S0(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const o=await e,a=Object.assign(Object.assign({},i),{send_to:o});t("event",n,a)}}/**
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
 */async function A0(){if(uh())try{await hh()}catch(t){return Ke.warn(Qe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ke.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function R0(t,e,n,i,r,o,a){var u;const h=I0(t);h.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Ke.error(A)),e.push(h);const d=A0().then(A=>{if(A)return i.getId()}),[p,v]=await Promise.all([h,d]);g0(o)||c0(o,p.measurementId),r("js",new Date);const E=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return E[i0]="firebase",E.update=!0,v!=null&&(E[n0]=v),r("config",p.measurementId,E),p.measurementId}/**
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
 */class C0{constructor(e){this.app=e}_delete(){return delete Oi[this.app.options.appId],Promise.resolve()}}let Oi={},Ac=[];const Rc={};let Hr="dataLayer",P0="gtag",Cc,Ef,Pc=!1;function O0(){const t=[];if(ch()&&t.push("This is a browser extension environment."),Mm()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=Qe.create("invalid-analytics-context",{errorInfo:e});Ke.warn(n.message)}}function k0(t,e,n){O0();const i=t.options.appId;if(!i)throw Qe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(Oi[i]!=null)throw Qe.create("already-exists",{id:i});if(!Pc){u0(Hr);const{wrappedGtag:o,gtagCore:a}=p0(Oi,Ac,Rc,Hr,P0);Ef=o,Cc=a,Pc=!0}return Oi[i]=R0(t,Ac,Rc,e,Cc,Hr,n),new C0(t)}function D0(t=Uo()){t=fn(t);const e=On(t,Us);return e.isInitialized()?e.getImmediate():N0(t)}function N0(t,e={}){const n=On(t,Us);if(n.isInitialized()){const r=n.getImmediate();if(ln(e,n.getOptions()))return r;throw Qe.create("already-initialized")}return n.initialize({options:e})}function x0(t,e,n,i){t=fn(t),S0(Ef,Oi[t.app.options.appId],e,n,i).catch(r=>Ke.error(r))}const Oc="@firebase/analytics",kc="0.10.12";function M0(){Rt(new pt(Us,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return k0(i,r,n)},"PUBLIC")),Rt(new pt("analytics-internal",t,"PRIVATE")),ot(Oc,kc),ot(Oc,kc,"esm2017");function t(e){try{const n=e.getProvider(Us).getImmediate();return{logEvent:(i,r,o)=>x0(n,i,r,o)}}catch(n){throw Qe.create("interop-component-reg-failed",{reason:n})}}}M0();const L0={apiKey:"AIzaSyAdAMmRmZOm6z8fkEJjokfNOvCdh4_-wXA",authDomain:"tramsab-dba2b.firebaseapp.com",projectId:"tramsab-dba2b",storageBucket:"tramsab-dba2b.firebasestorage.app",messagingSenderId:"1023036693849",appId:"1:1023036693849:web:9e6c9fb3bec62a3e368048",measurementId:"G-V7KKNP5PTC"},na=gh(L0);J_(na);pw(na);D0(na);new xt;const U0={class:"container"},F0={class:"header"},j0={class:"fixed-text"},$0=zs({__name:"HomeView",setup(t){const e=jn(new Date().toDateString()),n=jn(new Date().toLocaleTimeString()),i=jn("");jn(!1);const r=()=>{n.value=new Date().toLocaleTimeString()},o=()=>{const u=new Intl.DateTimeFormat("en",{timeZoneName:"short"}).formatToParts(new Date).find(h=>h.type==="timeZoneName");i.value=u?u.value:""};let a=null;return mu(()=>{o(),a=setInterval(r,1e3)}),Po(()=>{a!==null&&clearInterval(a)}),(u,h)=>(Mu(),Lu("div",U0,[h[1]||(h[1]=st("div",{class:"images shadow"},[st("img",{src:ym,alt:"Logo",class:"logo"}),st("img",{src:_m,alt:"map",class:"map"})],-1)),st("div",F0,[st("span",j0,fs(e.value)+" "+fs(i.value)+" "+fs(n.value),1),h[0]||(h[0]=st("div",{class:"marquee-container"},[st("div",{class:"marquee"},[st("span",null,"Årets sommarspel börjar i maj")])],-1))])]))}}),H0=nh($0,[["__scopeId","data-v-184328c3"]]),B0=pm({history:zg("./"),routes:[{path:"/",name:"home",component:H0}]}),ia=cg(vm);ia.use(dg());ia.use(B0);ia.mount("#app");
