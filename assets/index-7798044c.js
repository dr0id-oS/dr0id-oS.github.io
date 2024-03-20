(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Pa(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const it={},es=[],on=()=>{},Mf=()=>!1,Sf=/^on[^a-z]/,Qr=n=>Sf.test(n),Ia=n=>n.startsWith("onUpdate:"),vt=Object.assign,Da=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ef=Object.prototype.hasOwnProperty,je=(n,e)=>Ef.call(n,e),Ne=Array.isArray,ts=n=>eo(n)==="[object Map]",Uu=n=>eo(n)==="[object Set]",Be=n=>typeof n=="function",ut=n=>typeof n=="string",Ua=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Nu=n=>rt(n)&&Be(n.then)&&Be(n.catch),Fu=Object.prototype.toString,eo=n=>Fu.call(n),yf=n=>eo(n).slice(8,-1),Ou=n=>eo(n)==="[object Object]",Na=n=>ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hr=Pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),to=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Tf=/-(\w)/g,Mn=to(n=>n.replace(Tf,(e,t)=>t?t.toUpperCase():"")),bf=/\B([A-Z])/g,Ms=to(n=>n.replace(bf,"-$1").toLowerCase()),no=to(n=>n.charAt(0).toUpperCase()+n.slice(1)),vo=to(n=>n?`on${no(n)}`:""),qs=(n,e)=>!Object.is(n,e),Mo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},jr=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Af=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let gc;const oa=()=>gc||(gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mi(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ut(i)?Lf(i):mi(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ut(n))return n;if(rt(n))return n}}const wf=/;(?![^(]*\))/g,Rf=/:([^]+)/,Cf=/\/\*[^]*?\*\//g;function Lf(n){const e={};return n.replace(Cf,"").split(wf).forEach(t=>{if(t){const i=t.split(Rf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xi(n){let e="";if(ut(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=xi(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Pf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",If=Pa(Pf);function Bu(n){return!!n||n===""}const cr=n=>ut(n)?n:n==null?"":Ne(n)||rt(n)&&(n.toString===Fu||!Be(n.toString))?JSON.stringify(n,zu,2):String(n),zu=(n,e)=>e&&e.__v_isRef?zu(n,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:Uu(e)?{[`Set(${e.size})`]:[...e.values()]}:rt(e)&&!Ne(e)&&!Ou(e)?String(e):e;let Qt;class Df{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){Qt=this}off(){Qt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Uf(n,e=Qt){e&&e.active&&e.effects.push(n)}function Nf(){return Qt}const Fa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Hu=n=>(n.w&ei)>0,Gu=n=>(n.n&ei)>0,Ff=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ei},Of=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Hu(s)&&!Gu(s)?s.delete(n):e[t++]=s,s.w&=~ei,s.n&=~ei}e.length=t}},aa=new WeakMap;let Bs=0,ei=1;const ca=30;let tn;const vi=Symbol(""),la=Symbol("");class Oa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Uf(this,i)}run(){if(!this.active)return this.fn();let e=tn,t=Zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tn,tn=this,Zn=!0,ei=1<<++Bs,Bs<=ca?Ff(this):_c(this),this.fn()}finally{Bs<=ca&&Of(this),ei=1<<--Bs,tn=this.parent,Zn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(_c(this),this.onStop&&this.onStop(),this.active=!1)}}function _c(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Zn=!0;const ku=[];function Ss(){ku.push(Zn),Zn=!1}function Es(){const n=ku.pop();Zn=n===void 0?!0:n}function Bt(n,e,t){if(Zn&&tn){let i=aa.get(n);i||aa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Fa()),Vu(s)}}function Vu(n,e){let t=!1;Bs<=ca?Gu(n)||(n.n|=ei,t=!Hu(n)):t=!n.has(tn),t&&(n.add(tn),tn.deps.push(n))}function Nn(n,e,t,i,s,r){const o=aa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(n)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(n)?Na(t)&&a.push(o.get("length")):(a.push(o.get(vi)),ts(n)&&a.push(o.get(la)));break;case"delete":Ne(n)||(a.push(o.get(vi)),ts(n)&&a.push(o.get(la)));break;case"set":ts(n)&&a.push(o.get(vi));break}if(a.length===1)a[0]&&ua(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ua(Fa(c))}}function ua(n,e){const t=Ne(n)?n:[...n];for(const i of t)i.computed&&xc(i);for(const i of t)i.computed||xc(i)}function xc(n,e){(n!==tn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Bf=Pa("__proto__,__v_isRef,__isVue"),Wu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ua)),zf=Ba(),Hf=Ba(!1,!0),Gf=Ba(!0),vc=kf();function kf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=$e(this);for(let r=0,o=this.length;r<o;r++)Bt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map($e)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ss();const i=$e(this)[e].apply(this,t);return Es(),i}}),n}function Vf(n){const e=$e(this);return Bt(e,"has",n),e.hasOwnProperty(n)}function Ba(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?rd:Yu:e?Ku:ju).get(i))return i;const o=Ne(i);if(!n){if(o&&je(vc,s))return Reflect.get(vc,s,r);if(s==="hasOwnProperty")return Vf}const a=Reflect.get(i,s,r);return(Ua(s)?Wu.has(s):Bf(s))||(n||Bt(i,"get",s),e)?a:At(a)?o&&Na(s)?a:a.value:rt(a)?n?$u(a):Ga(a):a}}const Wf=Xu(),Xf=Xu(!0);function Xu(n=!1){return function(t,i,s,r){let o=t[i];if(ls(o)&&At(o)&&!At(s))return!1;if(!n&&(!Kr(s)&&!ls(s)&&(o=$e(o),s=$e(s)),!Ne(t)&&At(o)&&!At(s)))return o.value=s,!0;const a=Ne(t)&&Na(i)?Number(i)<t.length:je(t,i),c=Reflect.set(t,i,s,r);return t===$e(r)&&(a?qs(s,o)&&Nn(t,"set",i,s):Nn(t,"add",i,s)),c}}function qf(n,e){const t=je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Nn(n,"delete",e,void 0),i}function jf(n,e){const t=Reflect.has(n,e);return(!Ua(e)||!Wu.has(e))&&Bt(n,"has",e),t}function Kf(n){return Bt(n,"iterate",Ne(n)?"length":vi),Reflect.ownKeys(n)}const qu={get:zf,set:Wf,deleteProperty:qf,has:jf,ownKeys:Kf},Yf={get:Gf,set(n,e){return!0},deleteProperty(n,e){return!0}},$f=vt({},qu,{get:Hf,set:Xf}),za=n=>n,io=n=>Reflect.getPrototypeOf(n);function lr(n,e,t=!1,i=!1){n=n.__v_raw;const s=$e(n),r=$e(e);t||(e!==r&&Bt(s,"get",e),Bt(s,"get",r));const{has:o}=io(s),a=i?za:t?Va:js;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function ur(n,e=!1){const t=this.__v_raw,i=$e(t),s=$e(n);return e||(n!==s&&Bt(i,"has",n),Bt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function hr(n,e=!1){return n=n.__v_raw,!e&&Bt($e(n),"iterate",vi),Reflect.get(n,"size",n)}function Mc(n){n=$e(n);const e=$e(this);return io(e).has.call(e,n)||(e.add(n),Nn(e,"add",n,n)),this}function Sc(n,e){e=$e(e);const t=$e(this),{has:i,get:s}=io(t);let r=i.call(t,n);r||(n=$e(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?qs(e,o)&&Nn(t,"set",n,e):Nn(t,"add",n,e),this}function Ec(n){const e=$e(this),{has:t,get:i}=io(e);let s=t.call(e,n);s||(n=$e(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Nn(e,"delete",n,void 0),r}function yc(){const n=$e(this),e=n.size!==0,t=n.clear();return e&&Nn(n,"clear",void 0,void 0),t}function fr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=$e(o),c=e?za:n?Va:js;return!n&&Bt(a,"iterate",vi),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function dr(n,e,t){return function(...i){const s=this.__v_raw,r=$e(s),o=ts(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...i),u=t?za:e?Va:js;return!e&&Bt(r,"iterate",c?la:vi),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gn(n){return function(...e){return n==="delete"?!1:this}}function Zf(){const n={get(r){return lr(this,r)},get size(){return hr(this)},has:ur,add:Mc,set:Sc,delete:Ec,clear:yc,forEach:fr(!1,!1)},e={get(r){return lr(this,r,!1,!0)},get size(){return hr(this)},has:ur,add:Mc,set:Sc,delete:Ec,clear:yc,forEach:fr(!1,!0)},t={get(r){return lr(this,r,!0)},get size(){return hr(this,!0)},has(r){return ur.call(this,r,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:fr(!0,!1)},i={get(r){return lr(this,r,!0,!0)},get size(){return hr(this,!0)},has(r){return ur.call(this,r,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=dr(r,!1,!1),t[r]=dr(r,!0,!1),e[r]=dr(r,!1,!0),i[r]=dr(r,!0,!0)}),[n,t,e,i]}const[Jf,Qf,ed,td]=Zf();function Ha(n,e){const t=e?n?td:ed:n?Qf:Jf;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(je(t,s)&&s in i?t:i,s,r)}const nd={get:Ha(!1,!1)},id={get:Ha(!1,!0)},sd={get:Ha(!0,!1)},ju=new WeakMap,Ku=new WeakMap,Yu=new WeakMap,rd=new WeakMap;function od(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ad(n){return n.__v_skip||!Object.isExtensible(n)?0:od(yf(n))}function Ga(n){return ls(n)?n:ka(n,!1,qu,nd,ju)}function cd(n){return ka(n,!1,$f,id,Ku)}function $u(n){return ka(n,!0,Yf,sd,Yu)}function ka(n,e,t,i,s){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=ad(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function ns(n){return ls(n)?ns(n.__v_raw):!!(n&&n.__v_isReactive)}function ls(n){return!!(n&&n.__v_isReadonly)}function Kr(n){return!!(n&&n.__v_isShallow)}function Zu(n){return ns(n)||ls(n)}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function Ju(n){return jr(n,"__v_skip",!0),n}const js=n=>rt(n)?Ga(n):n,Va=n=>rt(n)?$u(n):n;function Qu(n){Zn&&tn&&(n=$e(n),Vu(n.dep||(n.dep=Fa())))}function eh(n,e){n=$e(n);const t=n.dep;t&&ua(t)}function At(n){return!!(n&&n.__v_isRef===!0)}function ld(n){return ud(n,!1)}function ud(n,e){return At(n)?n:new hd(n,e)}class hd{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:js(e)}get value(){return Qu(this),this._value}set value(e){const t=this.__v_isShallow||Kr(e)||ls(e);e=t?e:$e(e),qs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:js(e),eh(this))}}function fd(n){return At(n)?n.value:n}const dd={get:(n,e,t)=>fd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return At(s)&&!At(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function th(n){return ns(n)?n:new Proxy(n,dd)}class pd{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Oa(e,()=>{this._dirty||(this._dirty=!0,eh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=$e(this);return Qu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function md(n,e,t=!1){let i,s;const r=Be(n);return r?(i=n,s=on):(i=n.get,s=n.set),new pd(i,s,r||!s,t)}function Jn(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){so(r,e,t)}return s}function an(n,e,t,i){if(Be(n)){const r=Jn(n,e,t,i);return r&&Nu(r)&&r.catch(o=>{so(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(an(n[r],e,t,i));return s}function so(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Jn(c,null,10,[n,o,a]);return}}gd(n,t,s,i)}function gd(n,e,t,i=!0){console.error(n)}let Ks=!1,ha=!1;const bt=[];let _n=0;const is=[];let Pn=null,fi=0;const nh=Promise.resolve();let Wa=null;function _d(n){const e=Wa||nh;return n?e.then(this?n.bind(this):n):e}function xd(n){let e=_n+1,t=bt.length;for(;e<t;){const i=e+t>>>1;Ys(bt[i])<n?e=i+1:t=i}return e}function Xa(n){(!bt.length||!bt.includes(n,Ks&&n.allowRecurse?_n+1:_n))&&(n.id==null?bt.push(n):bt.splice(xd(n.id),0,n),ih())}function ih(){!Ks&&!ha&&(ha=!0,Wa=nh.then(rh))}function vd(n){const e=bt.indexOf(n);e>_n&&bt.splice(e,1)}function Md(n){Ne(n)?is.push(...n):(!Pn||!Pn.includes(n,n.allowRecurse?fi+1:fi))&&is.push(n),ih()}function Tc(n,e=Ks?_n+1:0){for(;e<bt.length;e++){const t=bt[e];t&&t.pre&&(bt.splice(e,1),e--,t())}}function sh(n){if(is.length){const e=[...new Set(is)];if(is.length=0,Pn){Pn.push(...e);return}for(Pn=e,Pn.sort((t,i)=>Ys(t)-Ys(i)),fi=0;fi<Pn.length;fi++)Pn[fi]();Pn=null,fi=0}}const Ys=n=>n.id==null?1/0:n.id,Sd=(n,e)=>{const t=Ys(n)-Ys(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function rh(n){ha=!1,Ks=!0,bt.sort(Sd);const e=on;try{for(_n=0;_n<bt.length;_n++){const t=bt[_n];t&&t.active!==!1&&Jn(t,null,14)}}finally{_n=0,bt.length=0,sh(),Ks=!1,Wa=null,(bt.length||is.length)&&rh()}}function Ed(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||it;f&&(s=t.map(p=>ut(p)?p.trim():p)),h&&(s=t.map(Af))}let a,c=i[a=vo(e)]||i[a=vo(Mn(e))];!c&&r&&(c=i[a=vo(Ms(e))]),c&&an(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,an(l,n,6,s)}}function oh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Be(n)){const c=l=>{const u=oh(l,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(rt(n)&&i.set(n,null),null):(Ne(r)?r.forEach(c=>o[c]=null):vt(o,r),rt(n)&&i.set(n,o),o)}function ro(n,e){return!n||!Qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,Ms(e))||je(n,e))}let nn=null,oo=null;function Yr(n){const e=nn;return nn=n,oo=n&&n.type.__scopeId||null,e}function ah(n){oo=n}function ch(){oo=null}function yd(n,e=nn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Nc(-1);const r=Yr(e);let o;try{o=n(...s)}finally{Yr(r),i._d&&Nc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function So(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:_}=n;let m,d;const T=Yr(n);try{if(t.shapeFlag&4){const E=s||i;m=mn(u.call(E,E,h,r,p,f,g)),d=c}else{const E=e;m=mn(E.length>1?E(r,{attrs:c,slots:a,emit:l}):E(r,null)),d=e.props?c:Td(c)}}catch(E){ks.length=0,so(E,n,1),m=cn(Ti)}let S=m;if(d&&_!==!1){const E=Object.keys(d),{shapeFlag:A}=S;E.length&&A&7&&(o&&E.some(Ia)&&(d=bd(d,o)),S=us(S,d))}return t.dirs&&(S=us(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),m=S,Yr(T),m}const Td=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qr(t))&&((e||(e={}))[t]=n[t]);return e},bd=(n,e)=>{const t={};for(const i in n)(!Ia(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ad(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?bc(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ro(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bc(i,o,l):!0:!!o;return!1}function bc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ro(t,r))return!0}return!1}function wd({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Rd=n=>n.__isSuspense;function Cd(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):Md(n)}const pr={};function Eo(n,e,t){return lh(n,e,t)}function lh(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=it){var a;const c=Nf()===((a=_t)==null?void 0:a.scope)?_t:null;let l,u=!1,h=!1;if(At(n)?(l=()=>n.value,u=Kr(n)):ns(n)?(l=()=>n,i=!0):Ne(n)?(h=!0,u=n.some(E=>ns(E)||Kr(E)),l=()=>n.map(E=>{if(At(E))return E.value;if(ns(E))return Ji(E);if(Be(E))return Jn(E,c,2)})):Be(n)?e?l=()=>Jn(n,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),an(n,c,3,[p])}:l=on,e&&i){const E=l;l=()=>Ji(E())}let f,p=E=>{f=T.onStop=()=>{Jn(E,c,4)}},g;if(Zs)if(p=on,e?t&&an(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const E=Ap();g=E.__watcherHandles||(E.__watcherHandles=[])}else return on;let _=h?new Array(n.length).fill(pr):pr;const m=()=>{if(T.active)if(e){const E=T.run();(i||u||(h?E.some((A,C)=>qs(A,_[C])):qs(E,_)))&&(f&&f(),an(e,c,3,[E,_===pr?void 0:h&&_[0]===pr?[]:_,p]),_=E)}else T.run()};m.allowRecurse=!!e;let d;s==="sync"?d=m:s==="post"?d=()=>Ut(m,c&&c.suspense):(m.pre=!0,c&&(m.id=c.uid),d=()=>Xa(m));const T=new Oa(l,d);e?t?m():_=T.run():s==="post"?Ut(T.run.bind(T),c&&c.suspense):T.run();const S=()=>{T.stop(),c&&c.scope&&Da(c.scope.effects,T)};return g&&g.push(S),S}function Ld(n,e,t){const i=this.proxy,s=ut(n)?n.includes(".")?uh(i,n):()=>i[n]:n.bind(i,i);let r;Be(e)?r=e:(r=e.handler,t=e);const o=_t;hs(this);const a=lh(s,r.bind(i),t);return o?hs(o):Mi(),a}function uh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Ji(n,e){if(!rt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),At(n))Ji(n.value,e);else if(Ne(n))for(let t=0;t<n.length;t++)Ji(n[t],e);else if(Uu(n)||ts(n))n.forEach(t=>{Ji(t,e)});else if(Ou(n))for(const t in n)Ji(n[t],e);return n}function ri(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Ss(),an(c,t,8,[n.el,a,n,e]),Es())}}const Gr=n=>!!n.type.__asyncLoader,hh=n=>n.type.__isKeepAlive;function Pd(n,e){fh(n,"a",e)}function Id(n,e){fh(n,"da",e)}function fh(n,e,t=_t){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ao(e,i,t),t){let s=t.parent;for(;s&&s.parent;)hh(s.parent.vnode)&&Dd(i,e,t,s),s=s.parent}}function Dd(n,e,t,i){const s=ao(e,n,i,!0);ph(()=>{Da(i[e],s)},t)}function ao(n,e,t=_t,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ss(),hs(t);const a=an(e,t,n,o);return Mi(),Es(),a});return i?s.unshift(r):s.push(r),r}}const On=n=>(e,t=_t)=>(!Zs||n==="sp")&&ao(n,(...i)=>e(...i),t),Ud=On("bm"),dh=On("m"),Nd=On("bu"),Fd=On("u"),Od=On("bum"),ph=On("um"),Bd=On("sp"),zd=On("rtg"),Hd=On("rtc");function Gd(n,e=_t){ao("ec",n,e)}const mh="components";function kd(n,e){return Wd(mh,n,!0,e)||n}const Vd=Symbol.for("v-ndc");function Wd(n,e,t=!0,i=!1){const s=nn||_t;if(s){const r=s.type;if(n===mh){const a=Ep(r,!1);if(a&&(a===e||a===Mn(e)||a===no(Mn(e))))return r}const o=Ac(s[n]||r[n],e)||Ac(s.appContext[n],e);return!o&&i?r:o}}function Ac(n,e){return n&&(n[e]||n[Mn(e)]||n[no(Mn(e))])}function Xd(n,e,t,i){let s;const r=t&&t[i];if(Ne(n)||ut(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(rt(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(n[l],l,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}const fa=n=>n?wh(n)?$a(n)||n.proxy:fa(n.parent):null,Gs=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fa(n.parent),$root:n=>fa(n.root),$emit:n=>n.emit,$options:n=>qa(n),$forceUpdate:n=>n.f||(n.f=()=>Xa(n.update)),$nextTick:n=>n.n||(n.n=_d.bind(n.proxy)),$watch:n=>Ld.bind(n)}),yo=(n,e)=>n!==it&&!n.__isScriptSetup&&je(n,e),qd={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(yo(i,e))return o[e]=1,i[e];if(s!==it&&je(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&je(l,e))return o[e]=3,r[e];if(t!==it&&je(t,e))return o[e]=4,t[e];da&&(o[e]=0)}}const u=Gs[e];let h,f;if(u)return e==="$attrs"&&Bt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==it&&je(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return yo(s,e)?(s[e]=t,!0):i!==it&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==it&&je(n,o)||yo(e,o)||(a=r[0])&&je(a,o)||je(i,o)||je(Gs,o)||je(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wc(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let da=!0;function jd(n){const e=qa(n),t=n.proxy,i=n.ctx;da=!1,e.beforeCreate&&Rc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:S,unmounted:E,render:A,renderTracked:C,renderTriggered:D,errorCaptured:V,serverPrefetch:v,expose:R,inheritAttrs:ie,components:ee,directives:N,filters:k}=e;if(l&&Kd(l,i,null),o)for(const G in o){const H=o[G];Be(H)&&(i[G]=H.bind(t))}if(s){const G=s.call(t,t);rt(G)&&(n.data=Ga(G))}if(da=!0,r)for(const G in r){const H=r[G],le=Be(H)?H.bind(t,t):Be(H.get)?H.get.bind(t,t):on,re=!Be(H)&&Be(H.set)?H.set.bind(t):on,ye=Tp({get:le,set:re});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>ye.value,set:he=>ye.value=he})}if(a)for(const G in a)gh(a[G],i,t,G);if(c){const G=Be(c)?c.call(t):c;Reflect.ownKeys(G).forEach(H=>{ep(H,G[H])})}u&&Rc(u,n,"c");function te(G,H){Ne(H)?H.forEach(le=>G(le.bind(t))):H&&G(H.bind(t))}if(te(Ud,h),te(dh,f),te(Nd,p),te(Fd,g),te(Pd,_),te(Id,m),te(Gd,V),te(Hd,C),te(zd,D),te(Od,T),te(ph,E),te(Bd,v),Ne(R))if(R.length){const G=n.exposed||(n.exposed={});R.forEach(H=>{Object.defineProperty(G,H,{get:()=>t[H],set:le=>t[H]=le})})}else n.exposed||(n.exposed={});A&&n.render===on&&(n.render=A),ie!=null&&(n.inheritAttrs=ie),ee&&(n.components=ee),N&&(n.directives=N)}function Kd(n,e,t=on){Ne(n)&&(n=pa(n));for(const i in n){const s=n[i];let r;rt(s)?"default"in s?r=kr(s.from||i,s.default,!0):r=kr(s.from||i):r=kr(s),At(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Rc(n,e,t){an(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function gh(n,e,t,i){const s=i.includes(".")?uh(t,i):()=>t[i];if(ut(n)){const r=e[n];Be(r)&&Eo(s,r)}else if(Be(n))Eo(s,n.bind(t));else if(rt(n))if(Ne(n))n.forEach(r=>gh(r,e,t,i));else{const r=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(r)&&Eo(s,r,n)}}function qa(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(l=>$r(c,l,o,!0)),$r(c,e,o)),rt(e)&&r.set(e,c),c}function $r(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&$r(n,r,t,!0),s&&s.forEach(o=>$r(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Yd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Yd={data:Cc,props:Lc,emits:Lc,methods:zs,computed:zs,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:zs,directives:zs,watch:Zd,provide:Cc,inject:$d};function Cc(n,e){return e?n?function(){return vt(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function $d(n,e){return zs(pa(n),pa(e))}function pa(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function zs(n,e){return n?vt(Object.create(null),n,e):e}function Lc(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:vt(Object.create(null),wc(n),wc(e??{})):e}function Zd(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function _h(){return{app:null,config:{isNativeTag:Mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jd=0;function Qd(n,e){return function(i,s=null){Be(i)||(i=vt({},i)),s!=null&&!rt(s)&&(s=null);const r=_h(),o=new Set;let a=!1;const c=r.app={_uid:Jd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wp,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Be(l.install)?(o.add(l),l.install(c,...u)):Be(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=cn(i,s);return f.appContext=r,u&&e?e(f,l):n(f,l,h),a=!0,c._container=l,l.__vue_app__=c,$a(f.component)||f.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){Zr=c;try{return l()}finally{Zr=null}}};return c}}let Zr=null;function ep(n,e){if(_t){let t=_t.provides;const i=_t.parent&&_t.parent.provides;i===t&&(t=_t.provides=Object.create(i)),t[n]=e}}function kr(n,e,t=!1){const i=_t||nn;if(i||Zr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Zr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}function tp(n,e,t,i=!1){const s={},r={};jr(r,lo,1),n.propsDefaults=Object.create(null),xh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:cd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function np(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=$e(s),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ro(n.emitsOptions,f))continue;const p=e[f];if(c)if(je(r,f))p!==r[f]&&(r[f]=p,l=!0);else{const g=Mn(f);s[g]=ma(c,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,l=!0)}}}else{xh(n,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!je(e,h)&&((u=Ms(h))===h||!je(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ma(c,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!je(e,h))&&(delete r[h],l=!0)}l&&Nn(n,"set","$attrs")}function xh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hr(c))continue;const l=e[c];let u;s&&je(s,u=Mn(c))?!r||!r.includes(u)?t[u]=l:(a||(a={}))[u]=l:ro(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=$e(t),l=a||it;for(let u=0;u<r.length;u++){const h=r[u];t[h]=ma(s,c,h,l[h],n,!je(l,h))}}return o}function ma(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=je(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Be(c)){const{propsDefaults:l}=s;t in l?i=l[t]:(hs(s),i=l[t]=c.call(null,e),Mi())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ms(t))&&(i=!0))}return i}function vh(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let c=!1;if(!Be(n)){const u=h=>{c=!0;const[f,p]=vh(h,e,!0);vt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!c)return rt(n)&&i.set(n,es),es;if(Ne(r))for(let u=0;u<r.length;u++){const h=Mn(r[u]);Pc(h)&&(o[h]=it)}else if(r)for(const u in r){const h=Mn(u);if(Pc(h)){const f=r[u],p=o[h]=Ne(f)||Be(f)?{type:f}:vt({},f);if(p){const g=Uc(Boolean,p.type),_=Uc(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||je(p,"default"))&&a.push(h)}}}const l=[o,a];return rt(n)&&i.set(n,l),l}function Pc(n){return n[0]!=="$"}function Ic(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Dc(n,e){return Ic(n)===Ic(e)}function Uc(n,e){return Ne(e)?e.findIndex(t=>Dc(t,n)):Be(e)&&Dc(e,n)?0:-1}const Mh=n=>n[0]==="_"||n==="$stable",ja=n=>Ne(n)?n.map(mn):[mn(n)],ip=(n,e,t)=>{if(e._n)return e;const i=yd((...s)=>ja(e(...s)),t);return i._c=!1,i},Sh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Mh(s))continue;const r=n[s];if(Be(r))e[s]=ip(s,r,i);else if(r!=null){const o=ja(r);e[s]=()=>o}}},Eh=(n,e)=>{const t=ja(e);n.slots.default=()=>t},sp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=$e(e),jr(e,"_",t)):Sh(e,n.slots={})}else n.slots={},e&&Eh(n,e);jr(n.slots,lo,1)},rp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(vt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Sh(e,s)),o=e}else e&&(Eh(n,e),o={default:1});if(r)for(const a in s)!Mh(a)&&!(a in o)&&delete s[a]};function ga(n,e,t,i,s=!1){if(Ne(n)){n.forEach((f,p)=>ga(f,e&&(Ne(e)?e[p]:e),t,i,s));return}if(Gr(i)&&!s)return;const r=i.shapeFlag&4?$a(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=n,l=e&&e.r,u=a.refs===it?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ut(l)?(u[l]=null,je(h,l)&&(h[l]=null)):At(l)&&(l.value=null)),Be(c))Jn(c,a,12,[o,u]);else{const f=ut(c),p=At(c);if(f||p){const g=()=>{if(n.f){const _=f?je(h,c)?h[c]:u[c]:c.value;s?Ne(_)&&Da(_,r):Ne(_)?_.includes(r)||_.push(r):f?(u[c]=[r],je(h,c)&&(h[c]=u[c])):(c.value=[r],n.k&&(u[n.k]=c.value))}else f?(u[c]=o,je(h,c)&&(h[c]=o)):p&&(c.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ut(g,t)):g()}}}const Ut=Cd;function op(n){return ap(n)}function ap(n,e){const t=oa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=on,insertStaticContent:g}=n,_=(b,w,F,$=null,Z=null,oe=null,fe=!1,Q=null,ae=!!w.dynamicChildren)=>{if(b===w)return;b&&!Rs(b,w)&&($=P(b),he(b,Z,oe,!0),b=null),w.patchFlag===-2&&(ae=!1,w.dynamicChildren=null);const{type:ne,ref:M,shapeFlag:x}=w;switch(ne){case co:m(b,w,F,$);break;case Ti:d(b,w,F,$);break;case To:b==null&&T(w,F,$,fe);break;case pn:ee(b,w,F,$,Z,oe,fe,Q,ae);break;default:x&1?A(b,w,F,$,Z,oe,fe,Q,ae):x&6?N(b,w,F,$,Z,oe,fe,Q,ae):(x&64||x&128)&&ne.process(b,w,F,$,Z,oe,fe,Q,ae,Re)}M!=null&&Z&&ga(M,b&&b.ref,oe,w||b,!w)},m=(b,w,F,$)=>{if(b==null)i(w.el=a(w.children),F,$);else{const Z=w.el=b.el;w.children!==b.children&&l(Z,w.children)}},d=(b,w,F,$)=>{b==null?i(w.el=c(w.children||""),F,$):w.el=b.el},T=(b,w,F,$)=>{[b.el,b.anchor]=g(b.children,w,F,$,b.el,b.anchor)},S=({el:b,anchor:w},F,$)=>{let Z;for(;b&&b!==w;)Z=f(b),i(b,F,$),b=Z;i(w,F,$)},E=({el:b,anchor:w})=>{let F;for(;b&&b!==w;)F=f(b),s(b),b=F;s(w)},A=(b,w,F,$,Z,oe,fe,Q,ae)=>{fe=fe||w.type==="svg",b==null?C(w,F,$,Z,oe,fe,Q,ae):v(b,w,Z,oe,fe,Q,ae)},C=(b,w,F,$,Z,oe,fe,Q)=>{let ae,ne;const{type:M,props:x,shapeFlag:I,transition:z,dirs:j}=b;if(ae=b.el=o(b.type,oe,x&&x.is,x),I&8?u(ae,b.children):I&16&&V(b.children,ae,null,$,Z,oe&&M!=="foreignObject",fe,Q),j&&ri(b,null,$,"created"),D(ae,b,b.scopeId,fe,$),x){for(const xe in x)xe!=="value"&&!Hr(xe)&&r(ae,xe,null,x[xe],oe,b.children,$,Z,me);"value"in x&&r(ae,"value",null,x.value),(ne=x.onVnodeBeforeMount)&&fn(ne,$,b)}j&&ri(b,null,$,"beforeMount");const ce=(!Z||Z&&!Z.pendingBranch)&&z&&!z.persisted;ce&&z.beforeEnter(ae),i(ae,w,F),((ne=x&&x.onVnodeMounted)||ce||j)&&Ut(()=>{ne&&fn(ne,$,b),ce&&z.enter(ae),j&&ri(b,null,$,"mounted")},Z)},D=(b,w,F,$,Z)=>{if(F&&p(b,F),$)for(let oe=0;oe<$.length;oe++)p(b,$[oe]);if(Z){let oe=Z.subTree;if(w===oe){const fe=Z.vnode;D(b,fe,fe.scopeId,fe.slotScopeIds,Z.parent)}}},V=(b,w,F,$,Z,oe,fe,Q,ae=0)=>{for(let ne=ae;ne<b.length;ne++){const M=b[ne]=Q?Kn(b[ne]):mn(b[ne]);_(null,M,w,F,$,Z,oe,fe,Q)}},v=(b,w,F,$,Z,oe,fe)=>{const Q=w.el=b.el;let{patchFlag:ae,dynamicChildren:ne,dirs:M}=w;ae|=b.patchFlag&16;const x=b.props||it,I=w.props||it;let z;F&&oi(F,!1),(z=I.onVnodeBeforeUpdate)&&fn(z,F,w,b),M&&ri(w,b,F,"beforeUpdate"),F&&oi(F,!0);const j=Z&&w.type!=="foreignObject";if(ne?R(b.dynamicChildren,ne,Q,F,$,j,oe):fe||H(b,w,Q,null,F,$,j,oe,!1),ae>0){if(ae&16)ie(Q,w,x,I,F,$,Z);else if(ae&2&&x.class!==I.class&&r(Q,"class",null,I.class,Z),ae&4&&r(Q,"style",x.style,I.style,Z),ae&8){const ce=w.dynamicProps;for(let xe=0;xe<ce.length;xe++){const de=ce[xe],W=x[de],Ee=I[de];(Ee!==W||de==="value")&&r(Q,de,W,Ee,Z,b.children,F,$,me)}}ae&1&&b.children!==w.children&&u(Q,w.children)}else!fe&&ne==null&&ie(Q,w,x,I,F,$,Z);((z=I.onVnodeUpdated)||M)&&Ut(()=>{z&&fn(z,F,w,b),M&&ri(w,b,F,"updated")},$)},R=(b,w,F,$,Z,oe,fe)=>{for(let Q=0;Q<w.length;Q++){const ae=b[Q],ne=w[Q],M=ae.el&&(ae.type===pn||!Rs(ae,ne)||ae.shapeFlag&70)?h(ae.el):F;_(ae,ne,M,null,$,Z,oe,fe,!0)}},ie=(b,w,F,$,Z,oe,fe)=>{if(F!==$){if(F!==it)for(const Q in F)!Hr(Q)&&!(Q in $)&&r(b,Q,F[Q],null,fe,w.children,Z,oe,me);for(const Q in $){if(Hr(Q))continue;const ae=$[Q],ne=F[Q];ae!==ne&&Q!=="value"&&r(b,Q,ne,ae,fe,w.children,Z,oe,me)}"value"in $&&r(b,"value",F.value,$.value)}},ee=(b,w,F,$,Z,oe,fe,Q,ae)=>{const ne=w.el=b?b.el:a(""),M=w.anchor=b?b.anchor:a("");let{patchFlag:x,dynamicChildren:I,slotScopeIds:z}=w;z&&(Q=Q?Q.concat(z):z),b==null?(i(ne,F,$),i(M,F,$),V(w.children,F,M,Z,oe,fe,Q,ae)):x>0&&x&64&&I&&b.dynamicChildren?(R(b.dynamicChildren,I,F,Z,oe,fe,Q),(w.key!=null||Z&&w===Z.subTree)&&yh(b,w,!0)):H(b,w,F,M,Z,oe,fe,Q,ae)},N=(b,w,F,$,Z,oe,fe,Q,ae)=>{w.slotScopeIds=Q,b==null?w.shapeFlag&512?Z.ctx.activate(w,F,$,fe,ae):k(w,F,$,Z,oe,fe,ae):X(b,w,ae)},k=(b,w,F,$,Z,oe,fe)=>{const Q=b.component=_p(b,$,Z);if(hh(b)&&(Q.ctx.renderer=Re),xp(Q),Q.asyncDep){if(Z&&Z.registerDep(Q,te),!b.el){const ae=Q.subTree=cn(Ti);d(null,ae,w,F)}return}te(Q,b,w,F,Z,oe,fe)},X=(b,w,F)=>{const $=w.component=b.component;if(Ad(b,w,F))if($.asyncDep&&!$.asyncResolved){G($,w,F);return}else $.next=w,vd($.update),$.update();else w.el=b.el,$.vnode=w},te=(b,w,F,$,Z,oe,fe)=>{const Q=()=>{if(b.isMounted){let{next:M,bu:x,u:I,parent:z,vnode:j}=b,ce=M,xe;oi(b,!1),M?(M.el=j.el,G(b,M,fe)):M=j,x&&Mo(x),(xe=M.props&&M.props.onVnodeBeforeUpdate)&&fn(xe,z,M,j),oi(b,!0);const de=So(b),W=b.subTree;b.subTree=de,_(W,de,h(W.el),P(W),b,Z,oe),M.el=de.el,ce===null&&wd(b,de.el),I&&Ut(I,Z),(xe=M.props&&M.props.onVnodeUpdated)&&Ut(()=>fn(xe,z,M,j),Z)}else{let M;const{el:x,props:I}=w,{bm:z,m:j,parent:ce}=b,xe=Gr(w);if(oi(b,!1),z&&Mo(z),!xe&&(M=I&&I.onVnodeBeforeMount)&&fn(M,ce,w),oi(b,!0),x&&Ce){const de=()=>{b.subTree=So(b),Ce(x,b.subTree,b,Z,null)};xe?w.type.__asyncLoader().then(()=>!b.isUnmounted&&de()):de()}else{const de=b.subTree=So(b);_(null,de,F,$,b,Z,oe),w.el=de.el}if(j&&Ut(j,Z),!xe&&(M=I&&I.onVnodeMounted)){const de=w;Ut(()=>fn(M,ce,de),Z)}(w.shapeFlag&256||ce&&Gr(ce.vnode)&&ce.vnode.shapeFlag&256)&&b.a&&Ut(b.a,Z),b.isMounted=!0,w=F=$=null}},ae=b.effect=new Oa(Q,()=>Xa(ne),b.scope),ne=b.update=()=>ae.run();ne.id=b.uid,oi(b,!0),ne()},G=(b,w,F)=>{w.component=b;const $=b.vnode.props;b.vnode=w,b.next=null,np(b,w.props,$,F),rp(b,w.children,F),Ss(),Tc(),Es()},H=(b,w,F,$,Z,oe,fe,Q,ae=!1)=>{const ne=b&&b.children,M=b?b.shapeFlag:0,x=w.children,{patchFlag:I,shapeFlag:z}=w;if(I>0){if(I&128){re(ne,x,F,$,Z,oe,fe,Q,ae);return}else if(I&256){le(ne,x,F,$,Z,oe,fe,Q,ae);return}}z&8?(M&16&&me(ne,Z,oe),x!==ne&&u(F,x)):M&16?z&16?re(ne,x,F,$,Z,oe,fe,Q,ae):me(ne,Z,oe,!0):(M&8&&u(F,""),z&16&&V(x,F,$,Z,oe,fe,Q,ae))},le=(b,w,F,$,Z,oe,fe,Q,ae)=>{b=b||es,w=w||es;const ne=b.length,M=w.length,x=Math.min(ne,M);let I;for(I=0;I<x;I++){const z=w[I]=ae?Kn(w[I]):mn(w[I]);_(b[I],z,F,null,Z,oe,fe,Q,ae)}ne>M?me(b,Z,oe,!0,!1,x):V(w,F,$,Z,oe,fe,Q,ae,x)},re=(b,w,F,$,Z,oe,fe,Q,ae)=>{let ne=0;const M=w.length;let x=b.length-1,I=M-1;for(;ne<=x&&ne<=I;){const z=b[ne],j=w[ne]=ae?Kn(w[ne]):mn(w[ne]);if(Rs(z,j))_(z,j,F,null,Z,oe,fe,Q,ae);else break;ne++}for(;ne<=x&&ne<=I;){const z=b[x],j=w[I]=ae?Kn(w[I]):mn(w[I]);if(Rs(z,j))_(z,j,F,null,Z,oe,fe,Q,ae);else break;x--,I--}if(ne>x){if(ne<=I){const z=I+1,j=z<M?w[z].el:$;for(;ne<=I;)_(null,w[ne]=ae?Kn(w[ne]):mn(w[ne]),F,j,Z,oe,fe,Q,ae),ne++}}else if(ne>I)for(;ne<=x;)he(b[ne],Z,oe,!0),ne++;else{const z=ne,j=ne,ce=new Map;for(ne=j;ne<=I;ne++){const ve=w[ne]=ae?Kn(w[ne]):mn(w[ne]);ve.key!=null&&ce.set(ve.key,ne)}let xe,de=0;const W=I-j+1;let Ee=!1,be=0;const Ae=new Array(W);for(ne=0;ne<W;ne++)Ae[ne]=0;for(ne=z;ne<=x;ne++){const ve=b[ne];if(de>=W){he(ve,Z,oe,!0);continue}let Ie;if(ve.key!=null)Ie=ce.get(ve.key);else for(xe=j;xe<=I;xe++)if(Ae[xe-j]===0&&Rs(ve,w[xe])){Ie=xe;break}Ie===void 0?he(ve,Z,oe,!0):(Ae[Ie-j]=ne+1,Ie>=be?be=Ie:Ee=!0,_(ve,w[Ie],F,null,Z,oe,fe,Q,ae),de++)}const Se=Ee?cp(Ae):es;for(xe=Se.length-1,ne=W-1;ne>=0;ne--){const ve=j+ne,Ie=w[ve],Ye=ve+1<M?w[ve+1].el:$;Ae[ne]===0?_(null,Ie,F,Ye,Z,oe,fe,Q,ae):Ee&&(xe<0||ne!==Se[xe]?ye(Ie,F,Ye,2):xe--)}}},ye=(b,w,F,$,Z=null)=>{const{el:oe,type:fe,transition:Q,children:ae,shapeFlag:ne}=b;if(ne&6){ye(b.component.subTree,w,F,$);return}if(ne&128){b.suspense.move(w,F,$);return}if(ne&64){fe.move(b,w,F,Re);return}if(fe===pn){i(oe,w,F);for(let x=0;x<ae.length;x++)ye(ae[x],w,F,$);i(b.anchor,w,F);return}if(fe===To){S(b,w,F);return}if($!==2&&ne&1&&Q)if($===0)Q.beforeEnter(oe),i(oe,w,F),Ut(()=>Q.enter(oe),Z);else{const{leave:x,delayLeave:I,afterLeave:z}=Q,j=()=>i(oe,w,F),ce=()=>{x(oe,()=>{j(),z&&z()})};I?I(oe,j,ce):ce()}else i(oe,w,F)},he=(b,w,F,$=!1,Z=!1)=>{const{type:oe,props:fe,ref:Q,children:ae,dynamicChildren:ne,shapeFlag:M,patchFlag:x,dirs:I}=b;if(Q!=null&&ga(Q,null,F,b,!0),M&256){w.ctx.deactivate(b);return}const z=M&1&&I,j=!Gr(b);let ce;if(j&&(ce=fe&&fe.onVnodeBeforeUnmount)&&fn(ce,w,b),M&6)_e(b.component,F,$);else{if(M&128){b.suspense.unmount(F,$);return}z&&ri(b,null,w,"beforeUnmount"),M&64?b.type.remove(b,w,F,Z,Re,$):ne&&(oe!==pn||x>0&&x&64)?me(ne,w,F,!1,!0):(oe===pn&&x&384||!Z&&M&16)&&me(ae,w,F),$&&q(b)}(j&&(ce=fe&&fe.onVnodeUnmounted)||z)&&Ut(()=>{ce&&fn(ce,w,b),z&&ri(b,null,w,"unmounted")},F)},q=b=>{const{type:w,el:F,anchor:$,transition:Z}=b;if(w===pn){se(F,$);return}if(w===To){E(b);return}const oe=()=>{s(F),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(b.shapeFlag&1&&Z&&!Z.persisted){const{leave:fe,delayLeave:Q}=Z,ae=()=>fe(F,oe);Q?Q(b.el,oe,ae):ae()}else oe()},se=(b,w)=>{let F;for(;b!==w;)F=f(b),s(b),b=F;s(w)},_e=(b,w,F)=>{const{bum:$,scope:Z,update:oe,subTree:fe,um:Q}=b;$&&Mo($),Z.stop(),oe&&(oe.active=!1,he(fe,b,w,F)),Q&&Ut(Q,w),Ut(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},me=(b,w,F,$=!1,Z=!1,oe=0)=>{for(let fe=oe;fe<b.length;fe++)he(b[fe],w,F,$,Z)},P=b=>b.shapeFlag&6?P(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),Pe=(b,w,F)=>{b==null?w._vnode&&he(w._vnode,null,null,!0):_(w._vnode||null,b,w,null,null,null,F),Tc(),sh(),w._vnode=b},Re={p:_,um:he,m:ye,r:q,mt:k,mc:V,pc:H,pbc:R,n:P,o:n};let pe,Ce;return e&&([pe,Ce]=e(Re)),{render:Pe,hydrate:pe,createApp:Qd(Pe,pe)}}function oi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function yh(n,e,t=!1){const i=n.children,s=e.children;if(Ne(i)&&Ne(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Kn(s[r]),a.el=o.el),t||yh(o,a)),a.type===co&&(a.el=o.el)}}function cp(n){const e=n.slice(),t=[0];let i,s,r,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=t[t.length-1],n[s]<l){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<l?r=a+1:o=a;l<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const lp=n=>n.__isTeleport,pn=Symbol.for("v-fgt"),co=Symbol.for("v-txt"),Ti=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),ks=[];let sn=null;function It(n=!1){ks.push(sn=n?null:[])}function up(){ks.pop(),sn=ks[ks.length-1]||null}let $s=1;function Nc(n){$s+=n}function Th(n){return n.dynamicChildren=$s>0?sn||es:null,up(),$s>0&&sn&&sn.push(n),n}function rn(n,e,t,i,s,r){return Th(mt(n,e,t,i,s,r,!0))}function Vr(n,e,t,i,s){return Th(cn(n,e,t,i,s,!0))}function hp(n){return n?n.__v_isVNode===!0:!1}function Rs(n,e){return n.type===e.type&&n.key===e.key}const lo="__vInternal",bh=({key:n})=>n??null,Wr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ut(n)||At(n)||Be(n)?{i:nn,r:n,k:e,f:!!t}:n:null);function mt(n,e=null,t=null,i=0,s=null,r=n===pn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&bh(e),ref:e&&Wr(e),scopeId:oo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nn};return a?(Ka(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=ut(t)?8:16),$s>0&&!o&&sn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&sn.push(c),c}const cn=fp;function fp(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Vd)&&(n=Ti),hp(n)){const a=us(n,e,!0);return t&&Ka(a,t),$s>0&&!r&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag|=-2,a}if(yp(n)&&(n=n.__vccOpts),e){e=dp(e);let{class:a,style:c}=e;a&&!ut(a)&&(e.class=xi(a)),rt(c)&&(Zu(c)&&!Ne(c)&&(c=vt({},c)),e.style=mi(c))}const o=ut(n)?1:Rd(n)?128:lp(n)?64:rt(n)?4:Be(n)?2:0;return mt(n,e,t,i,s,o,r,!0)}function dp(n){return n?Zu(n)||lo in n?vt({},n):n:null}function us(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?pp(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&bh(a),ref:e&&e.ref?t&&s?Ne(s)?s.concat(Wr(e)):[s,Wr(e)]:Wr(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==pn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&us(n.ssContent),ssFallback:n.ssFallback&&us(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ah(n=" ",e=0){return cn(co,null,n,e)}function ss(n="",e=!1){return e?(It(),Vr(Ti,null,n)):cn(Ti,null,n)}function mn(n){return n==null||typeof n=="boolean"?cn(Ti):Ne(n)?cn(pn,null,n.slice()):typeof n=="object"?Kn(n):cn(co,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:us(n)}function Ka(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ka(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(lo in e)?e._ctx=nn:s===3&&nn&&(nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),i&64?(t=16,e=[Ah(e)]):t=8);n.children=e,n.shapeFlag|=t}function pp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=xi([e.class,i.class]));else if(s==="style")e.style=mi([e.style,i.style]);else if(Qr(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ne(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function fn(n,e,t,i=null){an(n,e,7,[t,i])}const mp=_h();let gp=0;function _p(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||mp,r={uid:gp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vh(i,s),emitsOptions:oh(i,s),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ed.bind(null,r),n.ce&&n.ce(r),r}let _t=null,Ya,Ii,Fc="__VUE_INSTANCE_SETTERS__";(Ii=oa()[Fc])||(Ii=oa()[Fc]=[]),Ii.push(n=>_t=n),Ya=n=>{Ii.length>1?Ii.forEach(e=>e(n)):Ii[0](n)};const hs=n=>{Ya(n),n.scope.on()},Mi=()=>{_t&&_t.scope.off(),Ya(null)};function wh(n){return n.vnode.shapeFlag&4}let Zs=!1;function xp(n,e=!1){Zs=e;const{props:t,children:i}=n.vnode,s=wh(n);tp(n,t,s,e),sp(n,i);const r=s?vp(n,e):void 0;return Zs=!1,r}function vp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Ju(new Proxy(n.ctx,qd));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Sp(n):null;hs(n),Ss();const r=Jn(i,n,0,[n.props,s]);if(Es(),Mi(),Nu(r)){if(r.then(Mi,Mi),e)return r.then(o=>{Oc(n,o,e)}).catch(o=>{so(o,n,0)});n.asyncDep=r}else Oc(n,r,e)}else Rh(n,e)}function Oc(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=th(e)),Rh(n,t)}let Bc;function Rh(n,e,t){const i=n.type;if(!n.render){if(!e&&Bc&&!i.render){const s=i.template||qa(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=vt(vt({isCustomElement:r,delimiters:a},o),c);i.render=Bc(s,l)}}n.render=i.render||on}hs(n),Ss(),jd(n),Es(),Mi()}function Mp(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Bt(n,"get","$attrs"),e[t]}}))}function Sp(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Mp(n)},slots:n.slots,emit:n.emit,expose:e}}function $a(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(th(Ju(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gs)return Gs[t](n)},has(e,t){return t in e||t in Gs}}))}function Ep(n,e=!0){return Be(n)?n.displayName||n.name:n.name||e&&n.__name}function yp(n){return Be(n)&&"__vccOpts"in n}const Tp=(n,e)=>md(n,e,Zs),bp=Symbol.for("v-scx"),Ap=()=>kr(bp),wp="3.3.4",Rp="http://www.w3.org/2000/svg",di=typeof document<"u"?document:null,zc=di&&di.createElement("template"),Cp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?di.createElementNS(Rp,n):di.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{zc.innerHTML=i?`<svg>${n}</svg>`:n;const a=zc.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Lp(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Pp(n,e,t){const i=n.style,s=ut(t);if(t&&!s){if(e&&!ut(e))for(const r in e)t[r]==null&&_a(i,r,"");for(const r in t)_a(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const Hc=/\s*!important$/;function _a(n,e,t){if(Ne(t))t.forEach(i=>_a(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ip(n,e);Hc.test(t)?n.setProperty(Ms(i),t.replace(Hc,""),"important"):n[i]=t}}const Gc=["Webkit","Moz","ms"],bo={};function Ip(n,e){const t=bo[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return bo[e]=i;i=no(i);for(let s=0;s<Gc.length;s++){const r=Gc[s]+i;if(r in n)return bo[e]=r}return e}const kc="http://www.w3.org/1999/xlink";function Dp(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(kc,e.slice(6,e.length)):n.setAttributeNS(kc,e,t);else{const r=If(e);t==null||r&&!Bu(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Up(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const l=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";l!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Bu(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function Np(n,e,t,i){n.addEventListener(e,t,i)}function Fp(n,e,t,i){n.removeEventListener(e,t,i)}function Op(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=Bp(e);if(i){const l=r[e]=Gp(i,s);Np(n,a,l,c)}else o&&(Fp(n,a,o,c),r[e]=void 0)}}const Vc=/(?:Once|Passive|Capture)$/;function Bp(n){let e;if(Vc.test(n)){e={};let i;for(;i=n.match(Vc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ms(n.slice(2)),e]}let Ao=0;const zp=Promise.resolve(),Hp=()=>Ao||(zp.then(()=>Ao=0),Ao=Date.now());function Gp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(kp(i,t.value),e,5,[i])};return t.value=n,t.attached=Hp(),t}function kp(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Wc=/^on[a-z]/,Vp=(n,e,t,i,s=!1,r,o,a,c)=>{e==="class"?Lp(n,i,s):e==="style"?Pp(n,t,i):Qr(e)?Ia(e)||Op(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wp(n,e,i,s))?Up(n,e,i,r,o,a,c):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Dp(n,e,i,s))};function Wp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Wc.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Wc.test(e)&&ut(t)?!1:e in n}const Xp=vt({patchProp:Vp},Cp);let Xc;function qp(){return Xc||(Xc=op(Xp))}const jp=(...n)=>{const e=qp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Kp(i);if(!s)return;const r=e._component;!Be(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Kp(n){return ut(n)?document.querySelector(n):n}const ir=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Yp={name:"Bootloader",data(){return{fontSize:16,lines:[" ","/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"," "," "," ","     ,@@@@@@@@@@@@@@@@@#.      #@@@@@@@@@@@@@@@@@@@@@@@@(         ,%@@@@@@@@@@@%,      /@@@@@%    /@@@@@@@@@@@@@@@@@#.       ","     @@@@@@@@@@@@@@@@@@@@@&.   @@@@@@@@@@@@@@@@@@@@@@@@@@@&    ,@@@@@@@@@@@@@@@@@@@,   @@@@@@@.   @@@@@@@@@@@@@@@@@@@@@%.    ","      *%@@@@@@@@@@@@@@@@@@@@&   (&@@@@@@@@@@@@@@@@@@@@@@@@@& .@@@@@@@@@@@@@@@@@@@@@@@. @@@@@@@.    /&@@@@@@@@@@@@@@@@@@@@&   ","                     *@@@@@@@@                      /@@@@@@@.@@@@@@@&.       .&@@@@@@@, *%@&(                     /@@@@@@@&  ","                       %@@@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@/&@@@@@@(           (@@@@@@&                             @@@@@@@) ","                       #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@*           *@@@@@@@(@@@@@&                      &@@@@@@# ","                      (@@@@@@@*@@@@@@@@@@@@@@@@@@@@@@#,     /@@@@@@@/         *@@@@@@@/@@@@@@@.                    #@@@@@@@, ","                  ,(@@@@@@@@@/ @@@@@@@@@@@@@@@@@@@@@@@@*     %@@@@@@@@@(, ./@@@@@@@@@% @@@@@@@.                ,#@@@@@@@@@,  "," ,@@@@@@@@@@@@@@@@@@@@@@@@@&   @@@@@@@   .#@@@@@@@@@@@@@@@@,  .@@@@@@@@@@@@@@@@@@@@@.  @@@@@@@(@@@@@@@@@@@@@@@@@@@@@@@@@%    "," /@@@@@@@@@@@@@@@@@@@@@@&*     @@@@@@&         .#&@@@@@@@@@/     /@@@@@@@@@@@@@@@(     &@@@@@@#@@@@@@@@@@@@@@@@@@@@@@&,      ","   ,###############/,            (#/                 .(%%(            *(###/*            /#(.   ,###############/,           "," "," "," ","/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"," "],currentText:"",fontSizeSecond:18,secondParagraphActive:!1,currentTextSecond:"",lineSecond:"// BOOTING SYSTEM...",thirdParagraphActive:!1,currentTextThird:"",fontSizeThird:14,lineThird:"WELCOME 192.124.123!",fourthParagraphActive:!1,currentTextFourth:"",fontSizeFourth:18,lineFourth:"SITE UNDER CONSTRUCTION!"}},mounted(){this.typeText(),this.calculateFontSize(),window.addEventListener("resize",this.calculateFontSize)},beforeDestroy(){window.removeEventListener("resize",this.calculateFontSize)},mounted(){this.typeText(),this.calculateFontSize(),window.addEventListener("resize",this.calculateFontSize)},beforeDestroy(){window.removeEventListener("resize",this.calculateFontSize)},methods:{async typeText(){for(let n of this.lines)this.currentText+=n+`
`,await new Promise(e=>setTimeout(e,25));this.secondParagraphActive=!0,await this.typeTextSecond(),this.thirdParagraphActive=!0,this.fourthParagraphActive=!0,this.typeTextThird()},async typeTextSecond(){for(let n of this.lineSecond)this.currentTextSecond+=n,n==="."?await new Promise(e=>setTimeout(e,500)):await new Promise(e=>setTimeout(e,25))},async typeTextThird(){this.secondParagraphFadeOut=!0;try{const e=await(await fetch("https://api.ipify.org?format=json")).json();this.currentTextThird=`WELCOME: ${e.ip}`,this.currentTextFourth="SITE UNDER CONSTRUCTION!"}catch(n){console.error("Error fetching IP:",n),this.currentTextThird="WELCOME",this.currentTextFourth="SITE UNDER CONSTRUCTION!"}this.secondParagraphFadeOut=!0,await new Promise(n=>setTimeout(n,1500)),this.$refs.bootloader.classList.add("fade-out"),await new Promise(n=>setTimeout(n,500)),this.$emit("animationCompleted")},calculateFontSize(){if(this.$refs.bootloader){let n=this.$refs.bootloader.offsetWidth;this.fontSize=n/100}}}},$p={class:"bootloader",ref:"bootloader"};function Zp(n,e,t,i,s,r){return It(),rn("div",$p,[mt("pre",{style:mi({fontSize:s.fontSize+"px"})},cr(s.currentText),5),s.secondParagraphActive?(It(),rn("pre",{key:0,class:xi({"fade-out":n.secondParagraphFadeOut}),style:mi({fontSize:s.fontSizeSecond+"px"})},cr(s.currentTextSecond),7)):ss("",!0),s.thirdParagraphActive?(It(),rn("pre",{key:1,class:xi({"fade-in":s.thirdParagraphActive}),style:mi({fontSize:s.fontSizeThird+"px"})},cr(s.currentTextThird),7)):ss("",!0),s.fourthParagraphActive?(It(),rn("pre",{key:2,class:xi({"fade-in":s.thirdParagraphActive}),style:mi({fontSize:s.fontSizeThird+"px"})},cr(s.currentTextFourth),7)):ss("",!0)],512)}const Jp=ir(Yp,[["render",Zp],["__scopeId","data-v-cd468ad2"]]),Qp="/dr0idLogoGlow.svg";const em={name:"Header"},tm=n=>(ah("data-v-ca7d0d42"),n=n(),ch(),n),nm={class:"header-container"},im=tm(()=>mt("img",{src:Qp,alt:"dr0idLogoGlow",class:"header-image"},null,-1)),sm=[im];function rm(n,e,t,i,s,r){return It(),rn("div",nm,sm)}const om=ir(em,[["render",rm],["__scopeId","data-v-ca7d0d42"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="152",am=0,qc=1,cm=2,Ch=1,lm=2,Ln=3,Fn=0,Ot=1,xn=2,Qn=0,rs=1,jc=2,Kc=3,Yc=4,um=5,Zi=100,hm=101,fm=102,$c=103,Zc=104,dm=200,pm=201,mm=202,gm=203,Lh=204,Ph=205,_m=206,xm=207,vm=208,Mm=209,Sm=210,Em=0,ym=1,Tm=2,xa=3,bm=4,Am=5,wm=6,Rm=7,Ih=0,Cm=1,Lm=2,Un=0,Pm=1,Im=2,Dm=3,Um=4,Nm=5,Dh=300,fs=301,ds=302,va=303,Ma=304,uo=306,ps=1e3,Xt=1001,Jr=1002,gt=1003,Sa=1004,Xr=1005,Nt=1006,Uh=1007,bi=1008,Ai=1009,Fm=1010,Om=1011,Nh=1012,Bm=1013,gi=1014,$n=1015,Js=1016,zm=1017,Hm=1018,os=1020,Gm=1021,qt=1023,km=1024,Vm=1025,Si=1026,ms=1027,Wm=1028,Xm=1029,qm=1030,jm=1031,Km=1033,wo=33776,Ro=33777,Co=33778,Lo=33779,Jc=35840,Qc=35841,el=35842,tl=35843,Ym=36196,nl=37492,il=37496,sl=37808,rl=37809,ol=37810,al=37811,cl=37812,ll=37813,ul=37814,hl=37815,fl=37816,dl=37817,pl=37818,ml=37819,gl=37820,_l=37821,Po=36492,$m=36283,xl=36284,vl=36285,Ml=36286,Qs=2300,gs=2301,Io=2302,Sl=2400,El=2401,yl=2402,Zm=2500,Jm=0,Fh=1,Ea=2,Oh=3e3,Ei=3001,Qm=3200,eg=3201,Bh=0,tg=1,yi="",De="srgb",Sn="srgb-linear",zh="display-p3",Do=7680,ng=519,ya=35044,Tl="300 es",Ta=1035;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const Vs=Math.PI/180,_s=180/Math.PI;function ln(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function Ja(n,e){return(n%e+e)%e}function ig(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function sg(n,e,t){return n!==e?(t-n)/(e-n):0}function Ws(n,e,t){return(1-t)*n+t*e}function rg(n,e,t,i){return Ws(n,e,1-Math.exp(-t*i))}function og(n,e=1){return e-Math.abs(Ja(n,e*2)-e)}function ag(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ug(n,e){return n+Math.random()*(e-n)}function hg(n){return n*(.5-Math.random())}function fg(n){n!==void 0&&(bl=n);let e=bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(n){return n*Vs}function pg(n){return n*_s}function ba(n){return(n&n-1)===0&&n!==0}function Hh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mg(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gg={DEG2RAD:Vs,RAD2DEG:_s,generateUUID:ln,clamp:yt,euclideanModulo:Ja,mapLinear:ig,inverseLerp:sg,lerp:Ws,damp:rg,pingpong:og,smoothstep:ag,smootherstep:cg,randInt:lg,randFloat:ug,randFloatSpread:hg,seededRandom:fg,degToRad:dg,radToDeg:pg,isPowerOfTwo:ba,ceilPowerOfTwo:Hh,floorPowerOfTwo:Gh,setQuaternionFromProperEuler:mg,normalize:tt,denormalize:In};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],T=s[1],S=s[4],E=s[7],A=s[2],C=s[5],D=s[8];return r[0]=o*_+a*T+c*A,r[3]=o*m+a*S+c*C,r[6]=o*d+a*E+c*D,r[1]=l*_+u*T+h*A,r[4]=l*m+u*S+h*C,r[7]=l*d+u*E+h*D,r[2]=f*_+p*T+g*A,r[5]=f*m+p*S+g*C,r[8]=f*d+p*E+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new We;function kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Al={};function Xs(n){n in Al||(Al[n]=!0,console.warn(n))}function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function No(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const _g=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xg=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function vg(n){return n.convertSRGBToLinear().applyMatrix3(xg)}function Mg(n){return n.applyMatrix3(_g).convertLinearToSRGB()}const Sg={[Sn]:n=>n,[De]:n=>n.convertSRGBToLinear(),[zh]:vg},Eg={[Sn]:n=>n,[De]:n=>n.convertLinearToSRGB(),[zh]:Mg},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Sn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sg[e],s=Eg[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Di;class Vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=er("canvas")),Di.width=e.width,Di.height=e.height;const i=Di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(as(t[i]/255)*255):t[i]=as(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Wh{constructor(e=null){this.isSource=!0,this.uuid=ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fo(s[o].image)):r.push(Fo(s[o]))}else r=Fo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yg=0;class xt extends ys{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,i=Xt,s=Xt,r=Nt,o=bi,a=qt,c=Ai,l=xt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=ln(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ei?De:yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?Ei:Oh}set encoding(e){Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ei?De:yi}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Dh;xt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,E=(p+1)/2,A=(d+1)/2,C=(u+f)/4,D=(h+_)/4,V=(g+m)/4;return S>E&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=D/i):E>A?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=V/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=V/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wi extends ys{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ei?De:yi),this.texture=new xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Nt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xh extends xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gt,this.minFilter=gt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tg extends xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gt,this.minFilter=gt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==p||u!==g){let m=1-a;const d=c*f+l*p+u*g+h*_,T=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const A=Math.sqrt(S),C=Math.atan2(A,d*T);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const E=a*T;if(c=c*m+f*E,l=l*m+p*E,u=u*m+g*E,h=h*m+_*E,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-a*p,e[t+2]=l*g+u*p+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*s-a*i,u=c*i+a*t-r*s,h=c*s+r*i-o*t,f=-r*t-o*i-a*s;return this.x=l*c+f*-r+u*-a-h*-o,this.y=u*c+f*-o+h*-r-l*-a,this.z=h*c+f*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new U,wl=new ti;class Bn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ui.copy(e.boundingBox),Ui.applyMatrix4(e.matrixWorld),this.union(Ui);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Tn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else s.boundingBox===null&&s.computeBoundingBox(),Ui.copy(s.boundingBox),Ui.applyMatrix4(e.matrixWorld),this.union(Ui)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),mr.subVectors(this.max,Cs),Ni.subVectors(e.a,Cs),Fi.subVectors(e.b,Cs),Oi.subVectors(e.c,Cs),kn.subVectors(Fi,Ni),Vn.subVectors(Oi,Fi),ai.subVectors(Ni,Oi);let t=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!Bo(t,Ni,Fi,Oi,mr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,Ni,Fi,Oi,mr))?!1:(gr.crossVectors(kn,Vn),t=[gr.x,gr.y,gr.z],Bo(t,Ni,Fi,Oi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new U,new U,new U,new U,new U,new U,new U,new U],Tn=new U,Ui=new Bn,Ni=new U,Fi=new U,Oi=new U,kn=new U,Vn=new U,ai=new U,Cs=new U,mr=new U,gr=new U,ci=new U;function Bo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ci.fromArray(n,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),u=i.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const bg=new Bn,Ls=new U,zo=new U;class zn{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(zo)),this.expandByPoint(Ls.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new U,Ho=new U,_r=new U,Wn=new U,Go=new U,xr=new U,ko=new U;class Qa{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ho.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Ho);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=Wn.dot(this.direction),c=-Wn.dot(_r),l=Wn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ho).addScaledVector(_r,f),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),s=bn.dot(bn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,s,r){Go.subVectors(t,e),xr.subVectors(i,e),ko.crossVectors(Go,xr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const c=a*this.direction.dot(xr.crossVectors(Wn,xr));if(c<0)return null;const l=a*this.direction.dot(Go.cross(Wn));if(l<0||c+l>o)return null;const u=-a*Wn.dot(ko);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,o,a,c,l,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,g=l*u,_=l*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,g=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ag,e,wg)}lookAt(e,t,i){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Xn.crossVectors(i,Ht),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Xn.crossVectors(i,Ht)),Xn.normalize(),vr.crossVectors(Ht,Xn),s[0]=Xn.x,s[4]=vr.x,s[8]=Ht.x,s[1]=Xn.y,s[5]=vr.y,s[9]=Ht.y,s[2]=Xn.z,s[6]=vr.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],T=i[3],S=i[7],E=i[11],A=i[15],C=s[0],D=s[4],V=s[8],v=s[12],R=s[1],ie=s[5],ee=s[9],N=s[13],k=s[2],X=s[6],te=s[10],G=s[14],H=s[3],le=s[7],re=s[11],ye=s[15];return r[0]=o*C+a*R+c*k+l*H,r[4]=o*D+a*ie+c*X+l*le,r[8]=o*V+a*ee+c*te+l*re,r[12]=o*v+a*N+c*G+l*ye,r[1]=u*C+h*R+f*k+p*H,r[5]=u*D+h*ie+f*X+p*le,r[9]=u*V+h*ee+f*te+p*re,r[13]=u*v+h*N+f*G+p*ye,r[2]=g*C+_*R+m*k+d*H,r[6]=g*D+_*ie+m*X+d*le,r[10]=g*V+_*ee+m*te+d*re,r[14]=g*v+_*N+m*G+d*ye,r[3]=T*C+S*R+E*k+A*H,r[7]=T*D+S*ie+E*X+A*le,r[11]=T*V+S*ee+E*te+A*re,r[15]=T*v+S*N+E*G+A*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*p-i*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+d*(-s*a*u-t*c*h+t*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],T=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,S=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,E=u*_*l-g*h*l+g*a*p-o*_*p-u*a*d+o*h*d,A=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,C=t*T+i*S+s*E+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=T*D,e[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*D,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*d+i*c*d)*D,e[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*p-i*c*p)*D,e[4]=S*D,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*D,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*D,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*p+t*c*p)*D,e[8]=E*D,e[9]=(g*h*r-u*_*r-g*i*p+t*_*p+u*i*d-t*h*d)*D,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*d+t*a*d)*D,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*p-t*a*p)*D,e[12]=A*D,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*D,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*D,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*f+t*a*f)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,T=c*l,S=c*u,E=c*h,A=i.x,C=i.y,D=i.z;return s[0]=(1-(_+d))*A,s[1]=(p+E)*A,s[2]=(g-S)*A,s[3]=0,s[4]=(p-E)*C,s[5]=(1-(f+d))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+S)*D,s[9]=(m-T)*D,s[10]=(1-(f+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);const l=1/r,u=1/o,h=1/a;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,c=1/(t-e),l=1/(i-s),u=1/(o-r),h=(t+e)*c,f=(i+s)*l,p=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new U,$t=new ke,Ag=new U(0,0,0),wg=new U(1,1,1),Xn=new U,vr=new U,Ht=new U,Rl=new ke,Cl=new ti;class ho{constructor(e=0,t=0,i=0,s=ho.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ho.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rg=0;const Ll=new U,zi=new ti,An=new ke,Mr=new U,Ps=new U,Cg=new U,Lg=new ti,Pl=new U(1,0,0),Il=new U(0,1,0),Dl=new U(0,0,1),Pg={type:"added"},Ul={type:"removed"};class st extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new U,t=new ho,i=new ti,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new We}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Pl,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pl,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mr.copy(e):Mr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ps,Mr,this.up):An.lookAt(Mr,Ps,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(An),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ul)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ul)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}st.DEFAULT_UP=new U(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new U,wn=new U,Vo=new U,Rn=new U,Hi=new U,Gi=new U,Nl=new U,Wo=new U,Xo=new U,qo=new U;let Sr=!1;class en{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zt.subVectors(s,t),wn.subVectors(i,t),Vo.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(wn),c=Zt.dot(Vo),l=wn.dot(wn),u=wn.dot(Vo),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,i,s,r,o,a,c){return Sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sr=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Rn),c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c}static isFrontFacing(e,t,i,s){return Zt.subVectors(i,t),wn.subVectors(e,t),Zt.cross(wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Zt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sr=!0),en.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,i),Gi.subVectors(r,i),Wo.subVectors(e,i);const c=Hi.dot(Wo),l=Gi.dot(Wo);if(c<=0&&l<=0)return t.copy(i);Xo.subVectors(e,s);const u=Hi.dot(Xo),h=Gi.dot(Xo);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Hi,o);qo.subVectors(e,r);const p=Hi.dot(qo),g=Gi.dot(qo);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Gi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Nl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Nl,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ig=0;class vn extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=rs,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lh,this.blendDst=Ph,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={h:0,s:0,l:0},Er={h:0,s:0,l:0};function jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Yt.workingColorSpace){if(e=Ja(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=jo(o,r,e+1/3),this.g=jo(o,r,e),this.b=jo(o,r,e-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(e,t=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=De){const i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return Yt.fromWorkingColorSpace(Et.copy(this),e),Math.round(yt(Et.r*255,0,255))*65536+Math.round(yt(Et.g*255,0,255))*256+Math.round(yt(Et.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,s=Et.g,r=Et.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=De){Yt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,s=Et.b;return e!==De?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jt),Jt.h+=e,Jt.s+=t,Jt.l+=i,this.setHSL(Jt.h,Jt.s,Jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(Er);const i=Ws(Jt.h,Er.h,t),s=Ws(Jt.s,Er.s,t),r=Ws(Jt.l,Er.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new ze;ze.NAMES=jh;class Dn extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new U,yr=new Ke;class Dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ya,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ya&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Kh extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yh extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dg=0;const Vt=new ke,Ko=new st,ki=new U,Gt=new Bn,Is=new Bn,pt=new U;class un extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Yh:Kh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Gt.min,Is.min),Gt.expandByPoint(pt),pt.addVectors(Gt.max,Is.max),Gt.expandByPoint(pt)):(Gt.expandByPoint(Is.min),Gt.expandByPoint(Is.max))}Gt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)pt.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(e,l),pt.add(ki)),s=Math.max(s,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<a;R++)l[R]=new U,u[R]=new U;const h=new U,f=new U,p=new U,g=new Ke,_=new Ke,m=new Ke,d=new U,T=new U;function S(R,ie,ee){h.fromArray(s,R*3),f.fromArray(s,ie*3),p.fromArray(s,ee*3),g.fromArray(o,R*2),_.fromArray(o,ie*2),m.fromArray(o,ee*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(N),T.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(N),l[R].add(d),l[ie].add(d),l[ee].add(d),u[R].add(T),u[ie].add(T),u[ee].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let R=0,ie=E.length;R<ie;++R){const ee=E[R],N=ee.start,k=ee.count;for(let X=N,te=N+k;X<te;X+=3)S(i[X+0],i[X+1],i[X+2])}const A=new U,C=new U,D=new U,V=new U;function v(R){D.fromArray(r,R*3),V.copy(D);const ie=l[R];A.copy(ie),A.sub(D.multiplyScalar(D.dot(ie))).normalize(),C.crossVectors(V,ie);const N=C.dot(u[R])<0?-1:1;c[R*4]=A.x,c[R*4+1]=A.y,c[R*4+2]=A.z,c[R*4+3]=N}for(let R=0,ie=E.length;R<ie;++R){const ee=E[R],N=ee.start,k=ee.count;for(let X=N,te=N+k;X<te;X+=3)v(i[X+0]),v(i[X+1]),v(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Dt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new ke,dn=new Qa,Tr=new zn,Ol=new U,Vi=new U,Wi=new U,Xi=new U,Yo=new U,br=new U,Ar=new Ke,wr=new Ke,Rr=new Ke,Bl=new U,zl=new U,Hl=new U,Cr=new U,Lr=new U;class Ft extends st{constructor(e=new un,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Yo.fromBufferAttribute(h,e),o?br.addScaledVector(Yo,u):br.addScaledVector(Yo.sub(t),u))}t.add(br)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(r),dn.copy(e.ray).recast(e.near),!(Tr.containsPoint(dn.origin)===!1&&(dn.intersectSphere(Tr,Ol)===null||dn.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(r).invert(),dn.copy(e.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[_.materialIndex],d=Math.max(_.start,f.start),T=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let S=d,E=T;S<E;S+=3){const A=o.getX(S),C=o.getX(S+1),D=o.getX(S+2);i=Pr(this,m,e,dn,c,l,u,A,C,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const d=o.getX(_),T=o.getX(_+1),S=o.getX(_+2);i=Pr(this,r,e,dn,c,l,u,d,T,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[_.materialIndex],d=Math.max(_.start,f.start),T=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let S=d,E=T;S<E;S+=3){const A=S,C=S+1,D=S+2;i=Pr(this,m,e,dn,c,l,u,A,C,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const d=_,T=_+1,S=_+2;i=Pr(this,r,e,dn,c,l,u,d,T,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function Ug(n,e,t,i,s,r,o,a){let c;if(e.side===Ot?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Fn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:n}}function Pr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Vi),n.getVertexPosition(c,Wi),n.getVertexPosition(l,Xi);const u=Ug(n,e,t,i,Vi,Wi,Xi,Cr);if(u){s&&(Ar.fromBufferAttribute(s,a),wr.fromBufferAttribute(s,c),Rr.fromBufferAttribute(s,l),u.uv=en.getInterpolation(Cr,Vi,Wi,Xi,Ar,wr,Rr,new Ke)),r&&(Ar.fromBufferAttribute(r,a),wr.fromBufferAttribute(r,c),Rr.fromBufferAttribute(r,l),u.uv1=en.getInterpolation(Cr,Vi,Wi,Xi,Ar,wr,Rr,new Ke),u.uv2=u.uv1),o&&(Bl.fromBufferAttribute(o,a),zl.fromBufferAttribute(o,c),Hl.fromBufferAttribute(o,l),u.normal=en.getInterpolation(Cr,Vi,Wi,Xi,Bl,zl,Hl,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new U,materialIndex:0};en.getNormal(Vi,Wi,Xi,h.normal),u.face=h}return u}class Li extends un{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function g(_,m,d,T,S,E,A,C,D,V,v){const R=E/D,ie=A/V,ee=E/2,N=A/2,k=C/2,X=D+1,te=V+1;let G=0,H=0;const le=new U;for(let re=0;re<te;re++){const ye=re*ie-N;for(let he=0;he<X;he++){const q=he*R-ee;le[_]=q*T,le[m]=ye*S,le[d]=k,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[d]=C>0?1:-1,u.push(le.x,le.y,le.z),h.push(he/D),h.push(1-re/V),G+=1}}for(let re=0;re<V;re++)for(let ye=0;ye<D;ye++){const he=f+ye+X*re,q=f+ye+X*(re+1),se=f+(ye+1)+X*(re+1),_e=f+(ye+1)+X*re;c.push(he,q,_e),c.push(q,se,_e),H+=6}a.addGroup(p,H,v),p+=H,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=xs(n[t]);for(const s in i)e[s]=i[s]}return e}function Ng(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $h(n){return n.getRenderTarget()===null?n.outputColorSpace:Sn}const Fg={clone:xs,merge:Pt};var Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zh extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Zh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,ji=1;class zg extends st{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new Tt(qi,ji,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Tt(qi,ji,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Tt(qi,ji,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Tt(qi,ji,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Tt(qi,ji,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Tt(qi,ji,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Un,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Jh extends xt{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hg extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ei?De:yi),this.texture=new Jh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Li(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Qn});r.uniforms.tEquirect.value=t;const o=new Ft(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Nt),new zg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const $o=new U,Gg=new U,kg=new We;class ui{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$o.subVectors(i,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($o),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kg.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new zn,Ir=new U;class ec{constructor(e=new ui,t=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],p=i[9],g=i[10],_=i[11],m=i[12],d=i[13],T=i[14],S=i[15];return t[0].setComponents(a-s,h-c,_-f,S-m).normalize(),t[1].setComponents(a+s,h+c,_+f,S+m).normalize(),t[2].setComponents(a+r,h+l,_+p,S+d).normalize(),t[3].setComponents(a-r,h-l,_-p,S-d).normalize(),t[4].setComponents(a-o,h-u,_-g,S-T).normalize(),t[5].setComponents(a+o,h+u,_+g,S+T).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vg(n,e){const t=e.isWebGL2,i=new WeakMap;function s(l,u){const h=l.array,f=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,l),p.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,s(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class tc extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*f-o;for(let S=0;S<l;S++){const E=S*h-r;g.push(E,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<a;T++){const S=T+l*d,E=T+l*(d+1),A=T+1+l*(d+1),C=T+1+l*d;p.push(S,E,C),p.push(E,A,C)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g="vec3 transformed = vec3( position );",Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
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
#endif`,e_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,l_=`#define PI 3.141592653589793
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
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,h_=`vec3 transformedNormal = objectNormal;
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
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
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
}`,R_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,D_=`#if defined( USE_ENVMAP )
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
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,z_=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
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
}`,H_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,V_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,j_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$_=`#if defined( USE_POINTS_UV )
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
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
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
#endif`,nx=`#ifdef USE_MORPHTARGETS
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
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tx=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
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
#endif`,Nx=`#ifdef USE_UV
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
#endif`,Fx=`#ifdef USE_UV
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
#endif`,Ox=`#ifdef USE_UV
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xx=`#include <common>
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
}`,qx=`#if DEPTH_PACKING == 3200
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
}`,jx=`#define DISTANCE
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
}`,Kx=`#define DISTANCE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
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
}`,tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,nv=`#define LAMBERT
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define MATCAP
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
}`,sv=`#define MATCAP
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
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ov=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,av=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,cv=`#define PHONG
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
}`,lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,uv=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
}`,hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,fv=`#define TOON
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
}`,dv=`uniform float size;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_v=`uniform float rotation;
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
}`,xv=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:qg,alphatest_pars_fragment:jg,aomap_fragment:Kg,aomap_pars_fragment:Yg,begin_vertex:$g,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:Qg,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:s_,color_fragment:r_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:c_,common:l_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:h_,displacementmap_pars_vertex:f_,displacementmap_vertex:d_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,encodings_fragment:g_,encodings_pars_fragment:__,envmap_fragment:x_,envmap_common_pars_fragment:v_,envmap_pars_fragment:M_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:D_,envmap_vertex:E_,fog_vertex:y_,fog_pars_vertex:T_,fog_fragment:b_,fog_pars_fragment:A_,gradientmap_pars_fragment:w_,lightmap_fragment:R_,lightmap_pars_fragment:C_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:P_,lights_pars_begin:I_,lights_toon_fragment:U_,lights_toon_pars_fragment:N_,lights_phong_fragment:F_,lights_phong_pars_fragment:O_,lights_physical_fragment:B_,lights_physical_pars_fragment:z_,lights_fragment_begin:H_,lights_fragment_maps:G_,lights_fragment_end:k_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:X_,logdepthbuf_vertex:q_,map_fragment:j_,map_pars_fragment:K_,map_particle_fragment:Y_,map_particle_pars_fragment:$_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:J_,morphcolor_vertex:Q_,morphnormal_vertex:ex,morphtarget_pars_vertex:tx,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:sx,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:hx,iridescence_pars_fragment:fx,output_fragment:dx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:_x,dithering_pars_fragment:xx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Ex,shadowmap_vertex:yx,shadowmask_pars_fragment:Tx,skinbase_vertex:bx,skinning_pars_vertex:Ax,skinning_vertex:wx,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Lx,tonemapping_fragment:Px,tonemapping_pars_fragment:Ix,transmission_fragment:Dx,transmission_pars_fragment:Ux,uv_pars_fragment:Nx,uv_pars_vertex:Fx,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:zx,background_frag:Hx,backgroundCube_vert:Gx,backgroundCube_frag:kx,cube_vert:Vx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distanceRGBA_vert:jx,distanceRGBA_frag:Kx,equirect_vert:Yx,equirect_frag:$x,linedashed_vert:Zx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:ov,meshphong_vert:av,meshphong_frag:cv,meshphysical_vert:lv,meshphysical_frag:uv,meshtoon_vert:hv,meshtoon_frag:fv,points_vert:dv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:_v,sprite_frag:xv},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},gn={basic:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Pt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Pt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Pt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Pt([ge.points,ge.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Pt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Pt([ge.common,ge.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Pt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Pt([ge.sprite,ge.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Pt([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Pt([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};gn.physical={uniforms:Pt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Dr={r:0,b:0,g:0};function vv(n,e,t,i,s,r,o){const a=new ze(0);let c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(m,d){let T=!1,S=d.isScene===!0?d.background:null;switch(S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,c):S&&S.isColor&&(_(S,1),T=!0),n.xr.getEnvironmentBlendMode()){case"opaque":T=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),T=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),T=!0;break}(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===uo)?(u===void 0&&(u=new Ft(new Li(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:xs(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=S.colorSpace!==De,(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ft(new tc(2,2),new Ri({name:"BackgroundMaterial",uniforms:xs(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=S.colorSpace!==De,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Dr,$h(n)),i.buffers.color.setClear(Dr.r,Dr.g,Dr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Mv(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function h(k,X,te,G,H){let le=!1;if(o){const re=_(G,te,X);l!==re&&(l=re,p(l.object)),le=d(k,G,te,H),le&&T(k,G,te,H)}else{const re=X.wireframe===!0;(l.geometry!==G.id||l.program!==te.id||l.wireframe!==re)&&(l.geometry=G.id,l.program=te.id,l.wireframe=re,le=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,V(k,X,te,G),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function _(k,X,te){const G=te.wireframe===!0;let H=a[k.id];H===void 0&&(H={},a[k.id]=H);let le=H[X.id];le===void 0&&(le={},H[X.id]=le);let re=le[G];return re===void 0&&(re=m(f()),le[G]=re),re}function m(k){const X=[],te=[],G=[];for(let H=0;H<s;H++)X[H]=0,te[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:te,attributeDivisors:G,object:k,attributes:{},index:null}}function d(k,X,te,G){const H=l.attributes,le=X.attributes;let re=0;const ye=te.getAttributes();for(const he in ye)if(ye[he].location>=0){const se=H[he];let _e=le[he];if(_e===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor)),se===void 0||se.attribute!==_e||_e&&se.data!==_e.data)return!0;re++}return l.attributesNum!==re||l.index!==G}function T(k,X,te,G){const H={},le=X.attributes;let re=0;const ye=te.getAttributes();for(const he in ye)if(ye[he].location>=0){let se=le[he];se===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(se=k.instanceColor));const _e={};_e.attribute=se,se&&se.data&&(_e.data=se.data),H[he]=_e,re++}l.attributes=H,l.attributesNum=re,l.index=G}function S(){const k=l.newAttributes;for(let X=0,te=k.length;X<te;X++)k[X]=0}function E(k){A(k,0)}function A(k,X){const te=l.newAttributes,G=l.enabledAttributes,H=l.attributeDivisors;te[k]=1,G[k]===0&&(n.enableVertexAttribArray(k),G[k]=1),H[k]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),H[k]=X)}function C(){const k=l.newAttributes,X=l.enabledAttributes;for(let te=0,G=X.length;te<G;te++)X[te]!==k[te]&&(n.disableVertexAttribArray(te),X[te]=0)}function D(k,X,te,G,H,le){i.isWebGL2===!0&&(te===n.INT||te===n.UNSIGNED_INT)?n.vertexAttribIPointer(k,X,te,H,le):n.vertexAttribPointer(k,X,te,G,H,le)}function V(k,X,te,G){if(i.isWebGL2===!1&&(k.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const H=G.attributes,le=te.getAttributes(),re=X.defaultAttributeValues;for(const ye in le){const he=le[ye];if(he.location>=0){let q=H[ye];if(q===void 0&&(ye==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),ye==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),q!==void 0){const se=q.normalized,_e=q.itemSize,me=t.get(q);if(me===void 0)continue;const P=me.buffer,Pe=me.type,Re=me.bytesPerElement;if(q.isInterleavedBufferAttribute){const pe=q.data,Ce=pe.stride,b=q.offset;if(pe.isInstancedInterleavedBuffer){for(let w=0;w<he.locationSize;w++)A(he.location+w,pe.meshPerAttribute);k.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let w=0;w<he.locationSize;w++)E(he.location+w);n.bindBuffer(n.ARRAY_BUFFER,P);for(let w=0;w<he.locationSize;w++)D(he.location+w,_e/he.locationSize,Pe,se,Ce*Re,(b+_e/he.locationSize*w)*Re)}else{if(q.isInstancedBufferAttribute){for(let pe=0;pe<he.locationSize;pe++)A(he.location+pe,q.meshPerAttribute);k.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<he.locationSize;pe++)E(he.location+pe);n.bindBuffer(n.ARRAY_BUFFER,P);for(let pe=0;pe<he.locationSize;pe++)D(he.location+pe,_e/he.locationSize,Pe,se,_e*Re,_e/he.locationSize*pe*Re)}}else if(re!==void 0){const se=re[ye];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(he.location,se);break;case 3:n.vertexAttrib3fv(he.location,se);break;case 4:n.vertexAttrib4fv(he.location,se);break;default:n.vertexAttrib1fv(he.location,se)}}}}C()}function v(){ee();for(const k in a){const X=a[k];for(const te in X){const G=X[te];for(const H in G)g(G[H].object),delete G[H];delete X[te]}delete a[k]}}function R(k){if(a[k.id]===void 0)return;const X=a[k.id];for(const te in X){const G=X[te];for(const H in G)g(G[H].object),delete G[H];delete X[te]}delete a[k.id]}function ie(k){for(const X in a){const te=a[X];if(te[k.id]===void 0)continue;const G=te[k.id];for(const H in G)g(G[H].object),delete G[H];delete te[k.id]}}function ee(){N(),u=!0,l!==c&&(l=c,p(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:N,dispose:v,releaseStatesOfGeometry:R,releaseStatesOfProgram:ie,initAttributes:S,enableAttribute:E,disableUnusedAttributes:C}}function Sv(n,e,t,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,u){n.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,p;if(s)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Ev(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,E=o||e.has("OES_texture_float"),A=S&&E,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:C}}function yv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ui,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const T=r?0:i,S=T*4;let E=d.clippingState||null;c.value=E,E=u(g,f,S,p);for(let A=0;A!==S;++A)E[A]=t[A];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,E=p;S!==_;++S,E+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tv(n){let e=new WeakMap;function t(o,a){return a===va?o.mapping=fs:a===Ma&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===va||a===Ma)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Hg(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class nc extends Zh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,Gl=[.125,.215,.35,.446,.526,.582],pi=20,Zo=new nc,kl=new ze;let Jo=null;const hi=(1+Math.sqrt(5))/2,Ki=1/hi,Vl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,hi,Ki),new U(0,hi,-Ki),new U(Ki,0,hi),new U(-Ki,0,hi),new U(hi,Ki,0),new U(-hi,Ki,0)];class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Jo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo),e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Js,format:qt,colorSpace:Sn,depthBuffer:!1},s=Xl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bv(r)),this._blurMaterial=Av(r,e,t)}return s}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,s){const a=new Tt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(kl),u.toneMapping=Un,u.autoClear=!1;const p=new Dn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Ft(new Li,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(kl),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):T===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const S=this._cubeSize;Ur(s,T*S,d>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fs||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vl[(s-1)%Vl.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ft(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*pi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const d=[];let T=0;for(let D=0;D<pi;++D){const V=D/_,v=Math.exp(-V*V/2);d.push(v),D===0?T+=v:D<m&&(T+=2*v)}for(let D=0;D<d.length;D++)d[D]=d[D]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const E=this._sizeLods[s],A=3*E*(s>S-Qi?s-S+Qi:0),C=4*(this._cubeSize-E);Ur(t,A,C,3*E,2*E),c.setRenderTarget(t),c.render(h,Zo)}}function bv(n){const e=[],t=[],i=[];let s=n;const r=n-Qi+1+Gl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Qi?c=Gl[o-n+Qi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),S=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let C=0;C<p;C++){const D=C%3*2/3-1,V=C>2?0:-1,v=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];T.set(v,_*g*C),S.set(f,m*g*C);const R=[C,C,C,C,C,C];E.set(R,d*g*C)}const A=new un;A.setAttribute("position",new Dt(T,_)),A.setAttribute("uv",new Dt(S,m)),A.setAttribute("faceIndex",new Dt(E,d)),e.push(A),s>Qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xl(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Av(n,e,t){const i=new Float32Array(pi),s=new U(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ql(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function jl(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function wv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===va||c===Ma,u=c===fs||c===ds;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Wl(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Wl(n));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Rv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Cv(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let S=0,E=T.length;S<E;S+=3){const A=T[S+0],C=T[S+1],D=T[S+2];f.push(A,C,C,D,D,A)}}else{const T=g.array;_=g.version;for(let S=0,E=T.length/3-1;S<E;S+=3){const A=S+0,C=S+1,D=S+2;f.push(A,C,C,D,D,A)}}const m=new(kh(f)?Yh:Kh)(f,1);m.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Lv(n,e,t,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,p){n.drawElements(r,p,a,f*c),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let _,m;if(s)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,f*c,g),t.update(p,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Pv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Iv(n,e){return n[0]-e[0]}function Dv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Uv(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let X=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],V=u.morphAttributes.color||[];let v=0;S===!0&&(v=1),E===!0&&(v=2),A===!0&&(v=3);let R=u.attributes.position.count*v,ie=1;R>e.maxTextureSize&&(ie=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ee=new Float32Array(R*ie*4*_),N=new Xh(ee,R,ie,_);N.type=$n,N.needsUpdate=!0;const k=v*4;for(let te=0;te<_;te++){const G=C[te],H=D[te],le=V[te],re=R*ie*4*te;for(let ye=0;ye<G.count;ye++){const he=ye*k;S===!0&&(o.fromBufferAttribute(G,ye),ee[re+he+0]=o.x,ee[re+he+1]=o.y,ee[re+he+2]=o.z,ee[re+he+3]=0),E===!0&&(o.fromBufferAttribute(H,ye),ee[re+he+4]=o.x,ee[re+he+5]=o.y,ee[re+he+6]=o.z,ee[re+he+7]=0),A===!0&&(o.fromBufferAttribute(le,ye),ee[re+he+8]=o.x,ee[re+he+9]=o.y,ee[re+he+10]=o.z,ee[re+he+11]=le.itemSize===4?o.w:1)}}m={count:_,texture:N,size:new Ke(R,ie)},r.set(u,m),u.addEventListener("dispose",X)}let d=0;for(let S=0;S<f.length;S++)d+=f[S];const T=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];i[u.id]=_}for(let E=0;E<g;E++){const A=_[E];A[0]=E,A[1]=f[E]}_.sort(Dv);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Iv);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let T=0;for(let E=0;E<8;E++){const A=a[E],C=A[0],D=A[1];C!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+E)!==m[C]&&u.setAttribute("morphTarget"+E,m[C]),d&&u.getAttribute("morphNormal"+E)!==d[C]&&u.setAttribute("morphNormal"+E,d[C]),s[E]=D,T+=D):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const S=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Nv(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER)),h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ef=new xt,tf=new Xh,nf=new Tg,sf=new Jh,Kl=[],Yl=[],$l=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function Ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Kl[s];if(r===void 0&&(r=new Float32Array(s),Kl[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fo(n,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Hv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),ft(t,i)}}function Gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Zl.set(i),n.uniformMatrix3fv(this.addr,!1,Zl),ft(t,i)}}function kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;$l.set(i),n.uniformMatrix4fv(this.addr,!1,$l),ft(t,i)}}function Vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function Zv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||ef,s)}function Jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nf,s)}function Qv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sf,s)}function e0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tf,s)}function t0(n){switch(n){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return zv;case 35674:return Hv;case 35675:return Gv;case 35676:return kv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return jv;case 36294:return Kv;case 36295:return Yv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return e0}}function n0(n,e){n.uniform1fv(this.addr,e)}function i0(n,e){const t=Ts(e,this.size,2);n.uniform2fv(this.addr,t)}function s0(n,e){const t=Ts(e,this.size,3);n.uniform3fv(this.addr,t)}function r0(n,e){const t=Ts(e,this.size,4);n.uniform4fv(this.addr,t)}function o0(n,e){const t=Ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function a0(n,e){const t=Ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c0(n,e){const t=Ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function l0(n,e){n.uniform1iv(this.addr,e)}function u0(n,e){n.uniform2iv(this.addr,e)}function h0(n,e){n.uniform3iv(this.addr,e)}function f0(n,e){n.uniform4iv(this.addr,e)}function d0(n,e){n.uniform1uiv(this.addr,e)}function p0(n,e){n.uniform2uiv(this.addr,e)}function m0(n,e){n.uniform3uiv(this.addr,e)}function g0(n,e){n.uniform4uiv(this.addr,e)}function _0(n,e,t){const i=this.cache,s=e.length,r=fo(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ef,r[o])}function x0(n,e,t){const i=this.cache,s=e.length,r=fo(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nf,r[o])}function v0(n,e,t){const i=this.cache,s=e.length,r=fo(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sf,r[o])}function M0(n,e,t){const i=this.cache,s=e.length,r=fo(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tf,r[o])}function S0(n){switch(n){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return u0;case 35668:case 35672:return h0;case 35669:case 35673:return f0;case 5125:return d0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}class E0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=t0(t.type)}}class y0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=S0(t.type)}}class T0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Ql(n,e){n.seq.push(e),n.map[e.id]=e}function b0(n,e,t){const i=n.name,s=i.length;for(Qo.lastIndex=0;;){const r=Qo.exec(i),o=Qo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ql(t,l===void 0?new E0(a,n,e):new y0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new T0(a),Ql(t,h)),t=h}}}class qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);b0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let A0=0;function w0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function R0(n){switch(n){case Sn:return["Linear","( value )"];case De:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function tu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+w0(n.getShaderSource(e),o)}else return s}function C0(n,e){const t=R0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function L0(n,e){let t;switch(e){case Pm:t="Linear";break;case Im:t="Reinhard";break;case Dm:t="OptimizedCineon";break;case Um:t="ACESFilmic";break;case Nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function P0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function I0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function D0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hs(n){return n!==""}function nu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(n){return n.replace(U0,N0)}function N0(n,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Aa(t)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(n){return n.replace(F0,O0)}function O0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ru(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function z0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function G0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Cm:e="ENVMAP_BLENDING_MIX";break;case Lm:e="ENVMAP_BLENDING_ADD";break}return e}function k0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function V0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=B0(t),l=z0(t),u=H0(t),h=G0(t),f=k0(t),p=t.isWebGL2?"":P0(t),g=I0(r),_=s.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(Hs).join(`
`),d.length>0&&(d+=`
`)):(m=[ru(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),d=[p,ru(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Un?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,C0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Aa(o),o=nu(o,t),o=iu(o,t),a=Aa(a),a=nu(a,t),a=iu(a,t),o=su(o),a=su(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=T+m+o,E=T+d+a,A=eu(s,s.VERTEX_SHADER,S),C=eu(s,s.FRAGMENT_SHADER,E);if(s.attachShader(_,A),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),n.debug.checkShaderErrors){const v=s.getProgramInfoLog(_).trim(),R=s.getShaderInfoLog(A).trim(),ie=s.getShaderInfoLog(C).trim();let ee=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,C);else{const k=tu(s,A,"vertex"),X=tu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+k+`
`+X)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(R===""||ie==="")&&(N=!1);N&&(this.diagnostics={runnable:ee,programLog:v,vertexShader:{log:R,prefix:m},fragmentShader:{log:ie,prefix:d}})}s.deleteShader(A),s.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new qr(s,_)),D};let V;return this.getAttributes=function(){return V===void 0&&(V=D0(s,_)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let W0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new q0(e),t.set(e,i)),i}}class q0{constructor(e){this.id=W0++,this.code=e,this.usedTimes=0}}function j0(n,e,t,i,s,r,o){const a=new qh,c=new X0,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,R,ie,ee,N){const k=ee.fog,X=N.geometry,te=v.isMeshStandardMaterial?ee.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||te),H=G&&G.mapping===uo?G.image.height:null,le=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=re!==void 0?re.length:0;let he=0;X.morphAttributes.position!==void 0&&(he=1),X.morphAttributes.normal!==void 0&&(he=2),X.morphAttributes.color!==void 0&&(he=3);let q,se,_e,me;if(le){const Qe=gn[le];q=Qe.vertexShader,se=Qe.fragmentShader}else q=v.vertexShader,se=v.fragmentShader,c.update(v),_e=c.getVertexShaderID(v),me=c.getFragmentShaderID(v);const P=n.getRenderTarget(),Pe=N.isInstancedMesh===!0,Re=!!v.map,pe=!!v.matcap,Ce=!!G,b=!!v.aoMap,w=!!v.lightMap,F=!!v.bumpMap,$=!!v.normalMap,Z=!!v.displacementMap,oe=!!v.emissiveMap,fe=!!v.metalnessMap,Q=!!v.roughnessMap,ae=v.clearcoat>0,ne=v.iridescence>0,M=v.sheen>0,x=v.transmission>0,I=ae&&!!v.clearcoatMap,z=ae&&!!v.clearcoatNormalMap,j=ae&&!!v.clearcoatRoughnessMap,ce=ne&&!!v.iridescenceMap,xe=ne&&!!v.iridescenceThicknessMap,de=M&&!!v.sheenColorMap,W=M&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,be=!!v.specularColorMap,Ae=!!v.specularIntensityMap,Se=x&&!!v.transmissionMap,ve=x&&!!v.thicknessMap,Ie=!!v.gradientMap,Ye=!!v.alphaMap,ot=v.alphaTest>0,L=!!v.extensions,K=!!X.attributes.uv1,ue=!!X.attributes.uv2,Me=!!X.attributes.uv3;return{isWebGL2:u,shaderID:le,shaderName:v.type,vertexShader:q,fragmentShader:se,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Sn,map:Re,matcap:pe,envMap:Ce,envMapMode:Ce&&G.mapping,envMapCubeUVHeight:H,aoMap:b,lightMap:w,bumpMap:F,normalMap:$,displacementMap:f&&Z,emissiveMap:oe,normalMapObjectSpace:$&&v.normalMapType===tg,normalMapTangentSpace:$&&v.normalMapType===Bh,metalnessMap:fe,roughnessMap:Q,clearcoat:ae,clearcoatMap:I,clearcoatNormalMap:z,clearcoatRoughnessMap:j,iridescence:ne,iridescenceMap:ce,iridescenceThicknessMap:xe,sheen:M,sheenColorMap:de,sheenRoughnessMap:W,specularMap:Ee,specularColorMap:be,specularIntensityMap:Ae,transmission:x,transmissionMap:Se,thicknessMap:ve,gradientMap:Ie,opaque:v.transparent===!1&&v.blending===rs,alphaMap:Ye,alphaTest:ot,combine:v.combine,mapUv:Re&&_(v.map.channel),aoMapUv:b&&_(v.aoMap.channel),lightMapUv:w&&_(v.lightMap.channel),bumpMapUv:F&&_(v.bumpMap.channel),normalMapUv:$&&_(v.normalMap.channel),displacementMapUv:Z&&_(v.displacementMap.channel),emissiveMapUv:oe&&_(v.emissiveMap.channel),metalnessMapUv:fe&&_(v.metalnessMap.channel),roughnessMapUv:Q&&_(v.roughnessMap.channel),clearcoatMapUv:I&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:z&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:W&&_(v.sheenRoughnessMap.channel),specularMapUv:Ee&&_(v.specularMap.channel),specularColorMapUv:be&&_(v.specularColorMap.channel),specularIntensityMapUv:Ae&&_(v.specularIntensityMap.channel),transmissionMapUv:Se&&_(v.transmissionMap.channel),thicknessMapUv:ve&&_(v.thicknessMap.channel),alphaMapUv:Ye&&_(v.alphaMap.channel),vertexTangents:$&&!!X.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:ue,vertexUv3s:Me,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Re||Ye),fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:he,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&ie.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:Un,useLegacyLights:n.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xn,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:L&&v.extensions.derivatives===!0,extensionFragDepth:L&&v.extensions.fragDepth===!0,extensionDrawBuffers:L&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const ie in v.defines)R.push(ie),R.push(v.defines[ie]);return v.isRawShaderMaterial===!1&&(T(R,v),S(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function T(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function S(v,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),v.push(a.mask)}function E(v){const R=g[v.type];let ie;if(R){const ee=gn[R];ie=Fg.clone(ee.uniforms)}else ie=v.uniforms;return ie}function A(v,R){let ie;for(let ee=0,N=l.length;ee<N;ee++){const k=l[ee];if(k.cacheKey===R){ie=k,++ie.usedTimes;break}}return ie===void 0&&(ie=new V0(n,R,v,r),l.push(ie)),ie}function C(v){if(--v.usedTimes===0){const R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),v.destroy()}}function D(v){c.remove(v)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:A,releaseProgram:C,releaseShaderCache:D,programs:l,dispose:V}}function K0(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Y0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function au(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Y0),i.length>1&&i.sort(f||ou),s.length>1&&s.sort(f||ou)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function $0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new au,n.set(i,[o])):s>=r.length?(o=new au,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Z0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function J0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Q0=0;function eM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tM(n,e){const t=new Z0,i=J0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new U);const r=new U,o=new ke,a=new ke;function c(u,h){let f=0,p=0,g=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let _=0,m=0,d=0,T=0,S=0,E=0,A=0,C=0,D=0,V=0;u.sort(eM);const v=h===!0?Math.PI:1;for(let ie=0,ee=u.length;ie<ee;ie++){const N=u[ie],k=N.color,X=N.intensity,te=N.distance,G=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=k.r*X*v,p+=k.g*X*v,g+=k.b*X*v;else if(N.isLightProbe)for(let H=0;H<9;H++)s.probe[H].addScaledVector(N.sh.coefficients[H],X);else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){const le=N.shadow,re=i.get(N);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,s.directionalShadow[_]=re,s.directionalShadowMap[_]=G,s.directionalShadowMatrix[_]=N.shadow.matrix,E++}s.directional[_]=H,_++}else if(N.isSpotLight){const H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(k).multiplyScalar(X*v),H.distance=te,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,s.spot[d]=H;const le=N.shadow;if(N.map&&(s.spotLightMap[D]=N.map,D++,le.updateMatrices(N),N.castShadow&&V++),s.spotLightMatrix[d]=le.matrix,N.castShadow){const re=i.get(N);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,s.spotShadow[d]=re,s.spotShadowMap[d]=G,C++}d++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(k).multiplyScalar(X),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),s.rectArea[T]=H,T++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*v),H.distance=N.distance,H.decay=N.decay,N.castShadow){const le=N.shadow,re=i.get(N);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,re.shadowCameraNear=le.camera.near,re.shadowCameraFar=le.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=N.shadow.matrix,A++}s.point[m]=H,m++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(X*v),H.groundColor.copy(N.groundColor).multiplyScalar(X*v),s.hemi[S]=H,S++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const R=s.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==T||R.hemiLength!==S||R.numDirectionalShadows!==E||R.numPointShadows!==A||R.numSpotShadows!==C||R.numSpotMaps!==D)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=T,s.point.length=m,s.hemi.length=S,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=C+D-V,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=V,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=T,R.hemiLength=S,R.numDirectionalShadows=E,R.numPointShadows=A,R.numSpotShadows=C,R.numSpotMaps=D,s.version=Q0++)}function l(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let T=0,S=u.length;T<S;T++){const E=u[T];if(E.isDirectionalLight){const A=s.directional[f];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(E.isSpotLight){const A=s.spot[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const A=s.rectArea[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const A=s.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const A=s.hemi[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function cu(n,e){const t=new tM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function nM(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new cu(n,e),t.set(r,[c])):o>=a.length?(c=new cu(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class iM extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sM extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`;function aM(n,e,t){let i=new ec;const s=new Ke,r=new Ke,o=new nt,a=new iM({depthPacking:eg}),c=new sM,l={},u=t.maxTextureSize,h={[Fn]:Ot,[Ot]:Fn,[xn]:xn},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:rM,fragmentShader:oM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let d=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const V=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(Qn),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ee=d!==Ln&&this.type===Ln,N=d===Ln&&this.type!==Ln;for(let k=0,X=A.length;k<X;k++){const te=A[k],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const H=G.getFrameExtents();if(s.multiply(H),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,G.mapSize.y=r.y)),G.map===null||ee===!0||N===!0){const re=this.type!==Ln?{minFilter:gt,magFilter:gt}:{};G.map!==null&&G.map.dispose(),G.map=new wi(s.x,s.y,re),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const le=G.getViewportCount();for(let re=0;re<le;re++){const ye=G.getViewport(re);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),ie.viewport(o),G.updateMatrices(te,re),i=G.getFrustum(),E(C,D,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===Ln&&T(G,D),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(V,v,R)};function T(A,C){const D=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,D,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,D,p,_,null)}function S(A,C,D,V){let v=null;const R=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=D.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const ie=v.uuid,ee=C.uuid;let N=l[ie];N===void 0&&(N={},l[ie]=N);let k=N[ee];k===void 0&&(k=v.clone(),N[ee]=k),v=k}if(v.visible=C.visible,v.wireframe=C.wireframe,V===Ln?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:h[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const ie=n.properties.get(v);ie.light=D}return v}function E(A,C,D,V,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Ln)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),N=A.material;if(Array.isArray(N)){const k=ee.groups;for(let X=0,te=k.length;X<te;X++){const G=k[X],H=N[G.materialIndex];if(H&&H.visible){const le=S(A,H,V,v);n.renderBufferDirect(D,null,ee,le,A,G)}}}else if(N.visible){const k=S(A,N,V,v);n.renderBufferDirect(D,null,ee,k,A,null)}}const ie=A.children;for(let ee=0,N=ie.length;ee<N;ee++)E(ie[ee],C,D,V,v)}}function cM(n,e,t){const i=t.isWebGL2;function s(){let L=!1;const K=new nt;let ue=null;const Me=new nt(0,0,0,0);return{setMask:function(Te){ue!==Te&&!L&&(n.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){L=Te},setClear:function(Te,Qe,et,Mt,Hn){Hn===!0&&(Te*=Mt,Qe*=Mt,et*=Mt),K.set(Te,Qe,et,Mt),Me.equals(K)===!1&&(n.clearColor(Te,Qe,et,Mt),Me.copy(K))},reset:function(){L=!1,ue=null,Me.set(-1,0,0,0)}}}function r(){let L=!1,K=null,ue=null,Me=null;return{setTest:function(Te){Te?P(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Te){K!==Te&&!L&&(n.depthMask(Te),K=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case Em:n.depthFunc(n.NEVER);break;case ym:n.depthFunc(n.ALWAYS);break;case Tm:n.depthFunc(n.LESS);break;case xa:n.depthFunc(n.LEQUAL);break;case bm:n.depthFunc(n.EQUAL);break;case Am:n.depthFunc(n.GEQUAL);break;case wm:n.depthFunc(n.GREATER);break;case Rm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Te}},setLocked:function(Te){L=Te},setClear:function(Te){Me!==Te&&(n.clearDepth(Te),Me=Te)},reset:function(){L=!1,K=null,ue=null,Me=null}}}function o(){let L=!1,K=null,ue=null,Me=null,Te=null,Qe=null,et=null,Mt=null,Hn=null;return{setTest:function(at){L||(at?P(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(at){K!==at&&!L&&(n.stencilMask(at),K=at)},setFunc:function(at,kt,hn){(ue!==at||Me!==kt||Te!==hn)&&(n.stencilFunc(at,kt,hn),ue=at,Me=kt,Te=hn)},setOp:function(at,kt,hn){(Qe!==at||et!==kt||Mt!==hn)&&(n.stencilOp(at,kt,hn),Qe=at,et=kt,Mt=hn)},setLocked:function(at){L=at},setClear:function(at){Hn!==at&&(n.clearStencil(at),Hn=at)},reset:function(){L=!1,K=null,ue=null,Me=null,Te=null,Qe=null,et=null,Mt=null,Hn=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,T=null,S=null,E=null,A=null,C=null,D=null,V=null,v=!1,R=null,ie=null,ee=null,N=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),te=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),te=G>=2);let le=null,re={};const ye=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),q=new nt().fromArray(ye),se=new nt().fromArray(he);function _e(L,K,ue,Me){const Te=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(L,Qe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<ue;et++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(K,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(K+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Qe}const me={};me[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),P(n.DEPTH_TEST),c.setFunc(xa),Z(!1),oe(qc),P(n.CULL_FACE),F(Qn);function P(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function Pe(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Re(L,K){return p[L]!==K?(n.bindFramebuffer(L,K),p[L]=K,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=K),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=K)),!0):!1}function pe(L,K){let ue=_,Me=!1;if(L)if(ue=g.get(K),ue===void 0&&(ue=[],g.set(K,ue)),L.isWebGLMultipleRenderTargets){const Te=L.texture;if(ue.length!==Te.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,et=Te.length;Qe<et;Qe++)ue[Qe]=n.COLOR_ATTACHMENT0+Qe;ue.length=Te.length,Me=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Me=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ce(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const b={[Zi]:n.FUNC_ADD,[hm]:n.FUNC_SUBTRACT,[fm]:n.FUNC_REVERSE_SUBTRACT};if(i)b[$c]=n.MIN,b[Zc]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(b[$c]=L.MIN_EXT,b[Zc]=L.MAX_EXT)}const w={[dm]:n.ZERO,[pm]:n.ONE,[mm]:n.SRC_COLOR,[Lh]:n.SRC_ALPHA,[Sm]:n.SRC_ALPHA_SATURATE,[vm]:n.DST_COLOR,[_m]:n.DST_ALPHA,[gm]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[Mm]:n.ONE_MINUS_DST_COLOR,[xm]:n.ONE_MINUS_DST_ALPHA};function F(L,K,ue,Me,Te,Qe,et,Mt){if(L===Qn){d===!0&&(Pe(n.BLEND),d=!1);return}if(d===!1&&(P(n.BLEND),d=!0),L!==um){if(L!==T||Mt!==v){if((S!==Zi||C!==Zi)&&(n.blendEquation(n.FUNC_ADD),S=Zi,C=Zi),Mt)switch(L){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,A=null,D=null,V=null,T=L,v=Mt}return}Te=Te||K,Qe=Qe||ue,et=et||Me,(K!==S||Te!==C)&&(n.blendEquationSeparate(b[K],b[Te]),S=K,C=Te),(ue!==E||Me!==A||Qe!==D||et!==V)&&(n.blendFuncSeparate(w[ue],w[Me],w[Qe],w[et]),E=ue,A=Me,D=Qe,V=et),T=L,v=!1}function $(L,K){L.side===xn?Pe(n.CULL_FACE):P(n.CULL_FACE);let ue=L.side===Ot;K&&(ue=!ue),Z(ue),L.blending===rs&&L.transparent===!1?F(Qn):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const Me=L.stencilWrite;l.setTest(Me),Me&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){R!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),R=L)}function oe(L){L!==am?(P(n.CULL_FACE),L!==ie&&(L===qc?n.cullFace(n.BACK):L===cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),ie=L}function fe(L){L!==ee&&(te&&n.lineWidth(L),ee=L)}function Q(L,K,ue){L?(P(n.POLYGON_OFFSET_FILL),(N!==K||k!==ue)&&(n.polygonOffset(K,ue),N=K,k=ue)):Pe(n.POLYGON_OFFSET_FILL)}function ae(L){L?P(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function ne(L){L===void 0&&(L=n.TEXTURE0+X-1),le!==L&&(n.activeTexture(L),le=L)}function M(L,K,ue){ue===void 0&&(le===null?ue=n.TEXTURE0+X-1:ue=le);let Me=re[ue];Me===void 0&&(Me={type:void 0,texture:void 0},re[ue]=Me),(Me.type!==L||Me.texture!==K)&&(le!==ue&&(n.activeTexture(ue),le=ue),n.bindTexture(L,K||me[L]),Me.type=L,Me.texture=K)}function x(){const L=re[le];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(L){q.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function ve(L){se.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),se.copy(L))}function Ie(L,K){let ue=h.get(K);ue===void 0&&(ue=new WeakMap,h.set(K,ue));let Me=ue.get(L);Me===void 0&&(Me=n.getUniformBlockIndex(K,L.name),ue.set(L,Me))}function Ye(L,K){const Me=h.get(K).get(L);u.get(K)!==Me&&(n.uniformBlockBinding(K,Me,L.__bindingPointIndex),u.set(K,Me))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},le=null,re={},p={},g=new WeakMap,_=[],m=null,d=!1,T=null,S=null,E=null,A=null,C=null,D=null,V=null,v=!1,R=null,ie=null,ee=null,N=null,k=null,q.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:P,disable:Pe,bindFramebuffer:Re,drawBuffers:pe,useProgram:Ce,setBlending:F,setMaterial:$,setFlipSided:Z,setCullFace:oe,setLineWidth:fe,setPolygonOffset:Q,setScissorTest:ae,activeTexture:ne,bindTexture:M,unbindTexture:x,compressedTexImage2D:I,compressedTexImage3D:z,texImage2D:be,texImage3D:Ae,updateUBOMapping:Ie,uniformBlockBinding:Ye,texStorage2D:W,texStorage3D:Ee,texSubImage2D:j,texSubImage3D:ce,compressedTexSubImage2D:xe,compressedTexSubImage3D:de,scissor:Se,viewport:ve,reset:ot}}function lM(n,e,t,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,x){return d?new OffscreenCanvas(M,x):er("canvas")}function S(M,x,I,z){let j=1;if((M.width>z||M.height>z)&&(j=z/Math.max(M.width,M.height)),j<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ce=x?Gh:Math.floor,xe=ce(j*M.width),de=ce(j*M.height);_===void 0&&(_=T(xe,de));const W=I?T(xe,de):_;return W.width=xe,W.height=de,W.getContext("2d").drawImage(M,0,0,xe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+xe+"x"+de+")."),W}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function E(M){return ba(M.width)&&ba(M.height)}function A(M){return a?!1:M.wrapS!==Xt||M.wrapT!==Xt||M.minFilter!==gt&&M.minFilter!==Nt}function C(M,x){return M.generateMipmaps&&x&&M.minFilter!==gt&&M.minFilter!==Nt}function D(M){n.generateMipmap(M)}function V(M,x,I,z,j=!1){if(a===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ce=x;return x===n.RED&&(I===n.FLOAT&&(ce=n.R32F),I===n.HALF_FLOAT&&(ce=n.R16F),I===n.UNSIGNED_BYTE&&(ce=n.R8)),x===n.RG&&(I===n.FLOAT&&(ce=n.RG32F),I===n.HALF_FLOAT&&(ce=n.RG16F),I===n.UNSIGNED_BYTE&&(ce=n.RG8)),x===n.RGBA&&(I===n.FLOAT&&(ce=n.RGBA32F),I===n.HALF_FLOAT&&(ce=n.RGBA16F),I===n.UNSIGNED_BYTE&&(ce=z===De&&j===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function v(M,x,I){return C(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==gt&&M.minFilter!==Nt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){return M===gt||M===Sa||M===Xr?n.NEAREST:n.LINEAR}function ie(M){const x=M.target;x.removeEventListener("dispose",ie),N(x),x.isVideoTexture&&g.delete(x)}function ee(M){const x=M.target;x.removeEventListener("dispose",ee),X(x)}function N(M){const x=i.get(M);if(x.__webglInit===void 0)return;const I=M.source,z=m.get(I);if(z){const j=z[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(M),Object.keys(z).length===0&&m.delete(I)}i.remove(M)}function k(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const I=M.source,z=m.get(I);delete z[x.__cacheKey],o.memory.textures--}function X(M){const x=M.texture,I=i.get(M),z=i.get(x);if(z.__webglTexture!==void 0&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++)n.deleteFramebuffer(I.__webglFramebuffer[j]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[j]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let j=0;j<I.__webglColorRenderbuffer.length;j++)I.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[j]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let j=0,ce=x.length;j<ce;j++){const xe=i.get(x[j]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(x[j])}i.remove(x),i.remove(M)}let te=0;function G(){te=0}function H(){const M=te;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),te+=1,M}function le(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function re(M,x){const I=i.get(M);if(M.isVideoTexture&&ae(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(I,M,x);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function ye(M,x){const I=i.get(M);if(M.version>0&&I.__version!==M.version){Pe(I,M,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function he(M,x){const I=i.get(M);if(M.version>0&&I.__version!==M.version){Pe(I,M,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function q(M,x){const I=i.get(M);if(M.version>0&&I.__version!==M.version){Re(I,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const se={[ps]:n.REPEAT,[Xt]:n.CLAMP_TO_EDGE,[Jr]:n.MIRRORED_REPEAT},_e={[gt]:n.NEAREST,[Sa]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[Uh]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR};function me(M,x,I){if(I?(n.texParameteri(M,n.TEXTURE_WRAP_S,se[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,se[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,se[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,_e[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Xt||x.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==gt&&x.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===gt||x.minFilter!==Xr&&x.minFilter!==bi||x.type===$n&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Js&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function P(M,x){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",ie));const z=x.source;let j=m.get(z);j===void 0&&(j={},m.set(z,j));const ce=le(x);if(ce!==M.__cacheKey){j[ce]===void 0&&(j[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[ce].usedTimes++;const xe=j[M.__cacheKey];xe!==void 0&&(j[M.__cacheKey].usedTimes--,xe.usedTimes===0&&k(x)),M.__cacheKey=ce,M.__webglTexture=j[ce].texture}return I}function Pe(M,x,I){let z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=n.TEXTURE_3D);const j=P(M,x),ce=x.source;t.bindTexture(z,M.__webglTexture,n.TEXTURE0+I);const xe=i.get(ce);if(ce.version!==xe.__version||j===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=A(x)&&E(x.image)===!1;let W=S(x.image,de,!1,u);W=ne(x,W);const Ee=E(W)||a,be=r.convert(x.format,x.colorSpace);let Ae=r.convert(x.type),Se=V(x.internalFormat,be,Ae,x.colorSpace);me(z,x,Ee);let ve;const Ie=x.mipmaps,Ye=a&&x.isVideoTexture!==!0,ot=xe.__version===void 0||j===!0,L=v(x,W,Ee);if(x.isDepthTexture)Se=n.DEPTH_COMPONENT,a?x.type===$n?Se=n.DEPTH_COMPONENT32F:x.type===gi?Se=n.DEPTH_COMPONENT24:x.type===os?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:x.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Si&&Se===n.DEPTH_COMPONENT&&x.type!==Nh&&x.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=gi,Ae=r.convert(x.type)),x.format===ms&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,x.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=os,Ae=r.convert(x.type))),ot&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Se,W.width,W.height):t.texImage2D(n.TEXTURE_2D,0,Se,W.width,W.height,0,be,Ae,null));else if(x.isDataTexture)if(Ie.length>0&&Ee){Ye&&ot&&t.texStorage2D(n.TEXTURE_2D,L,Se,Ie[0].width,Ie[0].height);for(let K=0,ue=Ie.length;K<ue;K++)ve=Ie[K],Ye?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve.width,ve.height,be,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,K,Se,ve.width,ve.height,0,be,Ae,ve.data);x.generateMipmaps=!1}else Ye?(ot&&t.texStorage2D(n.TEXTURE_2D,L,Se,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,W.width,W.height,be,Ae,W.data)):t.texImage2D(n.TEXTURE_2D,0,Se,W.width,W.height,0,be,Ae,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,Se,Ie[0].width,Ie[0].height,W.depth);for(let K=0,ue=Ie.length;K<ue;K++)ve=Ie[K],x.format!==qt?be!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,W.depth,be,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Se,ve.width,ve.height,W.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,W.depth,be,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Se,ve.width,ve.height,W.depth,0,be,Ae,ve.data)}else{Ye&&ot&&t.texStorage2D(n.TEXTURE_2D,L,Se,Ie[0].width,Ie[0].height);for(let K=0,ue=Ie.length;K<ue;K++)ve=Ie[K],x.format!==qt?be!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve.width,ve.height,be,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,K,Se,ve.width,ve.height,0,be,Ae,ve.data)}else if(x.isDataArrayTexture)Ye?(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,Se,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,be,Ae,W.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,W.width,W.height,W.depth,0,be,Ae,W.data);else if(x.isData3DTexture)Ye?(ot&&t.texStorage3D(n.TEXTURE_3D,L,Se,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,be,Ae,W.data)):t.texImage3D(n.TEXTURE_3D,0,Se,W.width,W.height,W.depth,0,be,Ae,W.data);else if(x.isFramebufferTexture){if(ot)if(Ye)t.texStorage2D(n.TEXTURE_2D,L,Se,W.width,W.height);else{let K=W.width,ue=W.height;for(let Me=0;Me<L;Me++)t.texImage2D(n.TEXTURE_2D,Me,Se,K,ue,0,be,Ae,null),K>>=1,ue>>=1}}else if(Ie.length>0&&Ee){Ye&&ot&&t.texStorage2D(n.TEXTURE_2D,L,Se,Ie[0].width,Ie[0].height);for(let K=0,ue=Ie.length;K<ue;K++)ve=Ie[K],Ye?t.texSubImage2D(n.TEXTURE_2D,K,0,0,be,Ae,ve):t.texImage2D(n.TEXTURE_2D,K,Se,be,Ae,ve);x.generateMipmaps=!1}else Ye?(ot&&t.texStorage2D(n.TEXTURE_2D,L,Se,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ae,W)):t.texImage2D(n.TEXTURE_2D,0,Se,be,Ae,W);C(x,Ee)&&D(z),xe.__version=ce.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Re(M,x,I){if(x.image.length!==6)return;const z=P(M,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+I);const ce=i.get(j);if(j.version!==ce.__version||z===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const xe=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,W=[];for(let K=0;K<6;K++)!xe&&!de?W[K]=S(x.image[K],!1,!0,l):W[K]=de?x.image[K].image:x.image[K],W[K]=ne(x,W[K]);const Ee=W[0],be=E(Ee)||a,Ae=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),ve=V(x.internalFormat,Ae,Se,x.colorSpace),Ie=a&&x.isVideoTexture!==!0,Ye=ce.__version===void 0||z===!0;let ot=v(x,Ee,be);me(n.TEXTURE_CUBE_MAP,x,be);let L;if(xe){Ie&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ot,ve,Ee.width,Ee.height);for(let K=0;K<6;K++){L=W[K].mipmaps;for(let ue=0;ue<L.length;ue++){const Me=L[ue];x.format!==qt?Ae!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,ve,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Me.width,Me.height,Ae,Se,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,ve,Me.width,Me.height,0,Ae,Se,Me.data)}}}else{L=x.mipmaps,Ie&&Ye&&(L.length>0&&ot++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ot,ve,W[0].width,W[0].height));for(let K=0;K<6;K++)if(de){Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,W[K].width,W[K].height,Ae,Se,W[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,W[K].width,W[K].height,0,Ae,Se,W[K].data);for(let ue=0;ue<L.length;ue++){const Te=L[ue].image[K].image;Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Te.width,Te.height,Ae,Se,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,ve,Te.width,Te.height,0,Ae,Se,Te.data)}}else{Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,Se,W[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,Ae,Se,W[K]);for(let ue=0;ue<L.length;ue++){const Me=L[ue];Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Ae,Se,Me.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,ve,Ae,Se,Me.image[K])}}}C(x,be)&&D(n.TEXTURE_CUBE_MAP),ce.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function pe(M,x,I,z,j){const ce=r.convert(I.format,I.colorSpace),xe=r.convert(I.type),de=V(I.internalFormat,ce,xe,I.colorSpace);i.get(x).__hasExternalTextures||(j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,0,de,x.width,x.height,x.depth,0,ce,xe,null):t.texImage2D(j,0,de,x.width,x.height,0,ce,xe,null)),t.bindFramebuffer(n.FRAMEBUFFER,M),Q(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,j,i.get(I).__webglTexture,0,fe(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,j,i.get(I).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(M,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let z=n.DEPTH_COMPONENT16;if(I||Q(x)){const j=x.depthTexture;j&&j.isDepthTexture&&(j.type===$n?z=n.DEPTH_COMPONENT32F:j.type===gi&&(z=n.DEPTH_COMPONENT24));const ce=fe(x);Q(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,z,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,z,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const z=fe(x);I&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,x.width,x.height):Q(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let j=0;j<z.length;j++){const ce=z[j],xe=r.convert(ce.format,ce.colorSpace),de=r.convert(ce.type),W=V(ce.internalFormat,xe,de,ce.colorSpace),Ee=fe(x);I&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,W,x.width,x.height):Q(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function b(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const z=i.get(x.depthTexture).__webglTexture,j=fe(x);if(x.depthTexture.format===Si)Q(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(x.depthTexture.format===ms)Q(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function w(M){const x=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");b(x.__webglFramebuffer,M)}else if(I){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]=n.createRenderbuffer(),Ce(x.__webglDepthbuffer[z],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ce(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(M,x,I){const z=i.get(M);x!==void 0&&pe(z.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),I!==void 0&&w(M)}function $(M){const x=M.texture,I=i.get(M),z=i.get(x);M.addEventListener("dispose",ee),M.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=x.version,o.memory.textures++);const j=M.isWebGLCubeRenderTarget===!0,ce=M.isWebGLMultipleRenderTargets===!0,xe=E(M)||a;if(j){I.__webglFramebuffer=[];for(let de=0;de<6;de++)I.__webglFramebuffer[de]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),ce)if(s.drawBuffers){const de=M.texture;for(let W=0,Ee=de.length;W<Ee;W++){const be=i.get(de[W]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Q(M)===!1){const de=ce?x:[x];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let W=0;W<de.length;W++){const Ee=de[W];I.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[W]);const be=r.convert(Ee.format,Ee.colorSpace),Ae=r.convert(Ee.type),Se=V(Ee.internalFormat,be,Ae,Ee.colorSpace,M.isXRRenderTarget===!0),ve=fe(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,I.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),me(n.TEXTURE_CUBE_MAP,x,xe);for(let de=0;de<6;de++)pe(I.__webglFramebuffer[de],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de);C(x,xe)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const de=M.texture;for(let W=0,Ee=de.length;W<Ee;W++){const be=de[W],Ae=i.get(be);t.bindTexture(n.TEXTURE_2D,Ae.__webglTexture),me(n.TEXTURE_2D,be,xe),pe(I.__webglFramebuffer,M,be,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D),C(be,xe)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?de=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,z.__webglTexture),me(de,x,xe),pe(I.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,de),C(x,xe)&&D(de),t.unbindTexture()}M.depthBuffer&&w(M)}function Z(M){const x=E(M)||a,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let z=0,j=I.length;z<j;z++){const ce=I[z];if(C(ce,x)){const xe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(ce).__webglTexture;t.bindTexture(xe,de),D(xe),t.unbindTexture()}}}function oe(M){if(a&&M.samples>0&&Q(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,z=M.height;let j=n.COLOR_BUFFER_BIT;const ce=[],xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(M),W=M.isWebGLMultipleRenderTargets===!0;if(W)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){ce.push(n.COLOR_ATTACHMENT0+Ee),M.depthBuffer&&ce.push(xe);const be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(be===!1&&(M.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),W&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]),be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),W){const Ae=i.get(x[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,I,z,0,0,I,z,j,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]);const be=i.get(x[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function fe(M){return Math.min(h,M.samples)}function Q(M){const x=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(M){const x=o.render.frame;g.get(M)!==x&&(g.set(M,x),M.update())}function ne(M,x){const I=M.colorSpace,z=M.format,j=M.type;return M.isCompressedTexture===!0||M.format===Ta||I!==Sn&&I!==yi&&(I===De?a===!1?e.has("EXT_sRGB")===!0&&z===qt?(M.format=Ta,M.minFilter=Nt,M.generateMipmaps=!1):x=Vh.sRGBToLinear(x):(z!==qt||j!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=re,this.setTexture2DArray=ye,this.setTexture3D=he,this.setTextureCube=q,this.rebindTextures=F,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Q}function uM(n,e,t){const i=t.isWebGL2;function s(r,o=yi){let a;if(r===Ai)return n.UNSIGNED_BYTE;if(r===zm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Hm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Fm)return n.BYTE;if(r===Om)return n.SHORT;if(r===Nh)return n.UNSIGNED_SHORT;if(r===Bm)return n.INT;if(r===gi)return n.UNSIGNED_INT;if(r===$n)return n.FLOAT;if(r===Js)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Gm)return n.ALPHA;if(r===qt)return n.RGBA;if(r===km)return n.LUMINANCE;if(r===Vm)return n.LUMINANCE_ALPHA;if(r===Si)return n.DEPTH_COMPONENT;if(r===ms)return n.DEPTH_STENCIL;if(r===Ta)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Wm)return n.RED;if(r===Xm)return n.RED_INTEGER;if(r===qm)return n.RG;if(r===jm)return n.RG_INTEGER;if(r===Km)return n.RGBA_INTEGER;if(r===wo||r===Ro||r===Co||r===Lo)if(o===De)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jc||r===Qc||r===el||r===tl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===el)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ym)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nl||r===il)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===nl)return o===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===il)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sl||r===rl||r===ol||r===al||r===cl||r===ll||r===ul||r===hl||r===fl||r===dl||r===pl||r===ml||r===gl||r===_l)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===sl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ol)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===al)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ll)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ul)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ml)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gl)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_l)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Po)return o===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===$m||r===xl||r===vl||r===Ml)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Po)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ml)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===os?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class hM extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class dM extends xt{constructor(e,t,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:Si,u!==Si&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=gi),i===void 0&&u===ms&&(i=os),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=c!==void 0?c:gt,this.flipY=!1,this.generateMipmaps=!1}}class pM extends ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const T=[],S=[],E=new Set,A=new Map,C=new Tt;C.layers.enable(1),C.viewport=new nt;const D=new Tt;D.layers.enable(2),D.viewport=new nt;const V=[C,D],v=new hM;v.layers.enable(1),v.layers.enable(2);let R=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=T[q];return se===void 0&&(se=new ea,T[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=T[q];return se===void 0&&(se=new ea,T[q]=se),se.getGripSpace()},this.getHand=function(q){let se=T[q];return se===void 0&&(se=new ea,T[q]=se),se.getHandSpace()};function ee(q){const se=S.indexOf(q.inputSource);if(se===-1)return;const _e=T[se];_e!==void 0&&(_e.update(q.inputSource,q.frame,l||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let q=0;q<T.length;q++){const se=S[q];se!==null&&(S[q]=null,T[q].disconnect(se))}R=null,ie=null,e.setRenderTarget(m),p=null,f=null,h=null,s=null,d=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),d=new wi(p.framebufferWidth,p.framebufferHeight,{format:qt,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let se=null,_e=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=_.stencil?ms:Si,_e=_.stencil?os:gi);const P={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(P),s.updateRenderState({layers:[f]}),d=new wi(f.textureWidth,f.textureHeight,{format:qt,type:Ai,depthTexture:new dM(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(d);Pe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(q){for(let se=0;se<q.removed.length;se++){const _e=q.removed[se],me=S.indexOf(_e);me>=0&&(S[me]=null,T[me].disconnect(_e))}for(let se=0;se<q.added.length;se++){const _e=q.added[se];let me=S.indexOf(_e);if(me===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=S.length){S.push(_e),me=Pe;break}else if(S[Pe]===null){S[Pe]=_e,me=Pe;break}if(me===-1)break}const P=T[me];P&&P.connect(_e)}}const X=new U,te=new U;function G(q,se,_e){X.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const me=X.distanceTo(te),P=se.projectionMatrix.elements,Pe=_e.projectionMatrix.elements,Re=P[14]/(P[10]-1),pe=P[14]/(P[10]+1),Ce=(P[9]+1)/P[5],b=(P[9]-1)/P[5],w=(P[8]-1)/P[0],F=(Pe[8]+1)/Pe[0],$=Re*w,Z=Re*F,oe=me/(-w+F),fe=oe*-w;se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(fe),q.translateZ(oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Q=Re+oe,ae=pe+oe,ne=$-fe,M=Z+(me-fe),x=Ce*pe/ae*Q,I=b*pe/ae*Q;q.projectionMatrix.makePerspective(ne,M,x,I,Q,ae),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function H(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;v.near=D.near=C.near=q.near,v.far=D.far=C.far=q.far,(R!==v.near||ie!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,ie=v.far);const se=q.parent,_e=v.cameras;H(v,se);for(let me=0;me<_e.length;me++)H(_e[me],se);_e.length===2?G(v,C,D):v.projectionMatrix.copy(C.projectionMatrix),le(q,v,se)};function le(q,se,_e){_e===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const me=q.children;for(let P=0,Pe=me.length;P<Pe;P++)me[P].updateMatrixWorld(!0);q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_s*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.getPlanes=function(){return E};let re=null;function ye(q,se){if(u=se.getViewerPose(l||o),g=se,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let me=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,me=!0);for(let P=0;P<_e.length;P++){const Pe=_e[P];let Re=null;if(p!==null)Re=p.getViewport(Pe);else{const Ce=h.getViewSubImage(f,Pe);Re=Ce.viewport,P===0&&(e.setRenderTargetTextures(d,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(d))}let pe=V[P];pe===void 0&&(pe=new Tt,pe.layers.enable(P),pe.viewport=new nt,V[P]=pe),pe.matrix.fromArray(Pe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Pe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Re.x,Re.y,Re.width,Re.height),P===0&&(v.matrix.copy(pe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),me===!0&&v.cameras.push(pe)}}for(let _e=0;_e<T.length;_e++){const me=S[_e],P=T[_e];me!==null&&P!==void 0&&P.update(me,se,l||o)}if(re&&re(q,se),se.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:se.detectedPlanes});let _e=null;for(const me of E)se.detectedPlanes.has(me)||(_e===null&&(_e=[]),_e.push(me));if(_e!==null)for(const me of _e)E.delete(me),A.delete(me),i.dispatchEvent({type:"planeremoved",data:me});for(const me of se.detectedPlanes)if(!E.has(me))E.add(me),A.set(me,se.lastChangedTime),i.dispatchEvent({type:"planeadded",data:me});else{const P=A.get(me);me.lastChangedTime>P&&(A.set(me,me.lastChangedTime),i.dispatchEvent({type:"planechanged",data:me}))}}g=null}const he=new Qh;he.setAnimationLoop(ye),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}}function mM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,$h(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,S,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,T,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gM(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,S){const E=S.program;i.uniformBlockBinding(T,E)}function l(T,S){let E=s[T.id];E===void 0&&(g(T),E=u(T),s[T.id]=E,T.addEventListener("dispose",m));const A=S.program;i.updateUBOMapping(T,A);const C=e.render.frame;r[T.id]!==C&&(f(T),r[T.id]=C)}function u(T){const S=h();T.__bindingPointIndex=S;const E=n.createBuffer(),A=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=s[T.id],E=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,D=E.length;C<D;C++){const V=E[C];if(p(V,C,A)===!0){const v=V.__offset,R=Array.isArray(V.value)?V.value:[V.value];let ie=0;for(let ee=0;ee<R.length;ee++){const N=R[ee],k=_(N);typeof N=="number"?(V.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,v+ie,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=N.elements[0],V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=N.elements[0],V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=N.elements[0]):(N.toArray(V.__data,ie),ie+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,v,V.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,S,E){const A=T.value;if(E[S]===void 0){if(typeof A=="number")E[S]=A;else{const C=Array.isArray(A)?A:[A],D=[];for(let V=0;V<C.length;V++)D.push(C[V].clone());E[S]=D}return!0}else if(typeof A=="number"){if(E[S]!==A)return E[S]=A,!0}else{const C=Array.isArray(E[S])?E[S]:[E[S]],D=Array.isArray(A)?A:[A];for(let V=0;V<C.length;V++){const v=C[V];if(v.equals(D[V])===!1)return v.copy(D[V]),!0}}return!1}function g(T){const S=T.uniforms;let E=0;const A=16;let C=0;for(let D=0,V=S.length;D<V;D++){const v=S[D],R={boundary:0,storage:0},ie=Array.isArray(v.value)?v.value:[v.value];for(let ee=0,N=ie.length;ee<N;ee++){const k=ie[ee],X=_(k);R.boundary+=X.boundary,R.storage+=X.storage}if(v.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=E,D>0){C=E%A;const ee=A-C;C!==0&&ee-R.boundary<0&&(E+=A-C,v.__offset=E)}E+=R.storage}return C=E%A,C>0&&(E+=A-C),T.__size=E,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function _M(){const n=er("canvas");return n.style.display="block",n}class sc{constructor(e={}){const{canvas:t=_M(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=De,this.useLegacyLights=!0,this.toneMapping=Un,this.toneMappingExposure=1;const d=this;let T=!1,S=0,E=0,A=null,C=-1,D=null;const V=new nt,v=new nt;let R=null,ie=t.width,ee=t.height,N=1,k=null,X=null;const te=new nt(0,0,ie,ee),G=new nt(0,0,ie,ee);let H=!1;const le=new ec;let re=!1,ye=!1,he=null;const q=new ke,se=new U,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return A===null?N:1}let P=i;function Pe(y,B){for(let Y=0;Y<y.length;Y++){const O=y[Y],J=t.getContext(O,B);if(J!==null)return J}return null}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),P===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),P=Pe(B,y),P===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Re,pe,Ce,b,w,F,$,Z,oe,fe,Q,ae,ne,M,x,I,z,j,ce,xe,de,W,Ee,be;function Ae(){Re=new Rv(P),pe=new Ev(P,Re,e),Re.init(pe),W=new uM(P,Re,pe),Ce=new cM(P,Re,pe),b=new Pv(P),w=new K0,F=new lM(P,Re,Ce,w,pe,W,b),$=new Tv(d),Z=new wv(d),oe=new Vg(P,pe),Ee=new Mv(P,Re,oe,pe),fe=new Cv(P,oe,b,Ee),Q=new Nv(P,fe,oe,b),ce=new Uv(P,pe,F),I=new yv(w),ae=new j0(d,$,Z,Re,pe,Ee,I),ne=new mM(d,w),M=new $0,x=new nM(Re,pe),j=new vv(d,$,Z,Ce,Q,f,c),z=new aM(d,Q,pe),be=new gM(P,b,pe,Ce),xe=new Sv(P,Re,b,pe),de=new Lv(P,Re,b,pe),b.programs=ae.programs,d.capabilities=pe,d.extensions=Re,d.properties=w,d.renderLists=M,d.shadowMap=z,d.state=Ce,d.info=b}Ae();const Se=new pM(d,P);this.xr=Se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Re.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Re.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(y){y!==void 0&&(N=y,this.setSize(ie,ee,!1))},this.getSize=function(y){return y.set(ie,ee)},this.setSize=function(y,B,Y=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,ee=B,t.width=Math.floor(y*N),t.height=Math.floor(B*N),Y===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(ie*N,ee*N).floor()},this.setDrawingBufferSize=function(y,B,Y){ie=y,ee=B,N=Y,t.width=Math.floor(y*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(te)},this.setViewport=function(y,B,Y,O){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,B,Y,O),Ce.viewport(V.copy(te).multiplyScalar(N).floor())},this.getScissor=function(y){return y.copy(G)},this.setScissor=function(y,B,Y,O){y.isVector4?G.set(y.x,y.y,y.z,y.w):G.set(y,B,Y,O),Ce.scissor(v.copy(G).multiplyScalar(N).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(y){Ce.setScissorTest(H=y)},this.setOpaqueSort=function(y){k=y},this.setTransparentSort=function(y){X=y},this.getClearColor=function(y){return y.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(y=!0,B=!0,Y=!0){let O=0;y&&(O|=P.COLOR_BUFFER_BIT),B&&(O|=P.DEPTH_BUFFER_BIT),Y&&(O|=P.STENCIL_BUFFER_BIT),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),M.dispose(),x.dispose(),w.dispose(),$.dispose(),Z.dispose(),Q.dispose(),Ee.dispose(),be.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Te),Se.removeEventListener("sessionend",Qe),he&&(he.dispose(),he=null),et.stop()};function ve(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=b.autoReset,B=z.enabled,Y=z.autoUpdate,O=z.needsUpdate,J=z.type;Ae(),b.autoReset=y,z.enabled=B,z.autoUpdate=Y,z.needsUpdate=O,z.type=J}function Ye(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ot(y){const B=y.target;B.removeEventListener("dispose",ot),L(B)}function L(y){K(y),w.remove(y)}function K(y){const B=w.get(y).programs;B!==void 0&&(B.forEach(function(Y){ae.releaseProgram(Y)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,Y,O,J,we){B===null&&(B=_e);const Le=J.isMesh&&J.matrixWorld.determinant()<0,Ue=gf(y,B,Y,O,J);Ce.setMaterial(O,Le);let Fe=Y.index,He=1;O.wireframe===!0&&(Fe=fe.getWireframeAttribute(Y),He=2);const Ge=Y.drawRange,Ve=Y.attributes.position;let Je=Ge.start*He,wt=(Ge.start+Ge.count)*He;we!==null&&(Je=Math.max(Je,we.start*He),wt=Math.min(wt,(we.start+we.count)*He)),Fe!==null?(Je=Math.max(Je,0),wt=Math.min(wt,Fe.count)):Ve!=null&&(Je=Math.max(Je,0),wt=Math.min(wt,Ve.count));const Kt=wt-Je;if(Kt<0||Kt===1/0)return;Ee.setup(J,O,Ue,Y,Fe);let ni,ct=xe;if(Fe!==null&&(ni=oe.get(Fe),ct=de,ct.setIndex(ni)),J.isMesh)O.wireframe===!0?(Ce.setLineWidth(O.wireframeLinewidth*me()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(J.isLine){let Xe=O.linewidth;Xe===void 0&&(Xe=1),Ce.setLineWidth(Xe*me()),J.isLineSegments?ct.setMode(P.LINES):J.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else J.isPoints?ct.setMode(P.POINTS):J.isSprite&&ct.setMode(P.TRIANGLES);if(J.isInstancedMesh)ct.renderInstances(Je,Kt,J.count);else if(Y.isInstancedBufferGeometry){const Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,mo=Math.min(Y.instanceCount,Xe);ct.renderInstances(Je,Kt,mo)}else ct.render(Je,Kt)},this.compile=function(y,B){function Y(O,J,we){O.transparent===!0&&O.side===xn&&O.forceSinglePass===!1?(O.side=Ot,O.needsUpdate=!0,ar(O,J,we),O.side=Fn,O.needsUpdate=!0,ar(O,J,we),O.side=xn):ar(O,J,we)}g=x.get(y),g.init(),m.push(g),y.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights(d.useLegacyLights),y.traverse(function(O){const J=O.material;if(J)if(Array.isArray(J))for(let we=0;we<J.length;we++){const Le=J[we];Y(Le,y,O)}else Y(J,y,O)}),m.pop(),g=null};let ue=null;function Me(y){ue&&ue(y)}function Te(){et.stop()}function Qe(){et.start()}const et=new Qh;et.setAnimationLoop(Me),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(y){ue=y,Se.setAnimationLoop(y),y===null?et.stop():et.start()},Se.addEventListener("sessionstart",Te),Se.addEventListener("sessionend",Qe),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(B),B=Se.getCamera()),y.isScene===!0&&y.onBeforeRender(d,y,B,A),g=x.get(y,m.length),g.init(),m.push(g),q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(q),ye=this.localClippingEnabled,re=I.init(this.clippingPlanes,ye),p=M.get(y,_.length),p.init(),_.push(p),Mt(y,B,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(k,X),re===!0&&I.beginShadows();const Y=g.state.shadowsArray;if(z.render(Y,y,B),re===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(p,y),g.setupLights(d.useLegacyLights),B.isArrayCamera){const O=B.cameras;for(let J=0,we=O.length;J<we;J++){const Le=O[J];Hn(p,y,Le,Le.viewport)}}else Hn(p,y,B);A!==null&&(F.updateMultisampleRenderTarget(A),F.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(d,y,B),Ee.resetDefaultState(),C=-1,D=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Mt(y,B,Y,O){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)g.pushLight(y),y.castShadow&&g.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||le.intersectsSprite(y)){O&&se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(q);const Le=Q.update(y),Ue=y.material;Ue.visible&&p.push(y,Le,Ue,Y,se.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||le.intersectsObject(y))){y.isSkinnedMesh&&y.skeleton.frame!==b.render.frame&&(y.skeleton.update(),y.skeleton.frame=b.render.frame);const Le=Q.update(y),Ue=y.material;if(O&&(Le.boundingSphere===null&&Le.computeBoundingSphere(),se.copy(Le.boundingSphere.center).applyMatrix4(y.matrixWorld).applyMatrix4(q)),Array.isArray(Ue)){const Fe=Le.groups;for(let He=0,Ge=Fe.length;He<Ge;He++){const Ve=Fe[He],Je=Ue[Ve.materialIndex];Je&&Je.visible&&p.push(y,Le,Je,Y,se.z,Ve)}}else Ue.visible&&p.push(y,Le,Ue,Y,se.z,null)}}const we=y.children;for(let Le=0,Ue=we.length;Le<Ue;Le++)Mt(we[Le],B,Y,O)}function Hn(y,B,Y,O){const J=y.opaque,we=y.transmissive,Le=y.transparent;g.setupLightsView(Y),re===!0&&I.setGlobalState(d.clippingPlanes,Y),we.length>0&&at(J,we,B,Y),O&&Ce.viewport(V.copy(O)),J.length>0&&kt(J,B,Y),we.length>0&&kt(we,B,Y),Le.length>0&&kt(Le,B,Y),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function at(y,B,Y,O){if(he===null){const Ue=pe.isWebGL2;he=new wi(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Js:Ai,minFilter:bi,samples:Ue&&a===!0?4:0})}const J=d.getRenderTarget();d.setRenderTarget(he),d.clear();const we=d.toneMapping;d.toneMapping=Un,kt(y,Y,O),F.updateMultisampleRenderTarget(he),F.updateRenderTargetMipmap(he);let Le=!1;for(let Ue=0,Fe=B.length;Ue<Fe;Ue++){const He=B[Ue],Ge=He.object,Ve=He.geometry,Je=He.material,wt=He.group;if(Je.side===xn&&Ge.layers.test(O.layers)){const Kt=Je.side;Je.side=Ot,Je.needsUpdate=!0,hn(Ge,Y,O,Ve,Je,wt),Je.side=Kt,Je.needsUpdate=!0,Le=!0}}Le===!0&&(F.updateMultisampleRenderTarget(he),F.updateRenderTargetMipmap(he)),d.setRenderTarget(J),d.toneMapping=we}function kt(y,B,Y){const O=B.isScene===!0?B.overrideMaterial:null;for(let J=0,we=y.length;J<we;J++){const Le=y[J],Ue=Le.object,Fe=Le.geometry,He=O===null?Le.material:O,Ge=Le.group;Ue.layers.test(Y.layers)&&hn(Ue,B,Y,Fe,He,Ge)}}function hn(y,B,Y,O,J,we){y.onBeforeRender(d,B,Y,O,J,we),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),J.onBeforeRender(d,B,Y,O,y,we),J.transparent===!0&&J.side===xn&&J.forceSinglePass===!1?(J.side=Ot,J.needsUpdate=!0,d.renderBufferDirect(Y,B,O,J,y,we),J.side=Fn,J.needsUpdate=!0,d.renderBufferDirect(Y,B,O,J,y,we),J.side=xn):d.renderBufferDirect(Y,B,O,J,y,we),y.onAfterRender(d,B,Y,O,J,we)}function ar(y,B,Y){B.isScene!==!0&&(B=_e);const O=w.get(y),J=g.state.lights,we=g.state.shadowsArray,Le=J.state.version,Ue=ae.getParameters(y,J.state,we,B,Y),Fe=ae.getProgramCacheKey(Ue);let He=O.programs;O.environment=y.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(y.isMeshStandardMaterial?Z:$).get(y.envMap||O.environment),He===void 0&&(y.addEventListener("dispose",ot),He=new Map,O.programs=He);let Ge=He.get(Fe);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===Le)return dc(y,Ue),Ge}else Ue.uniforms=ae.getUniforms(y),y.onBuild(Y,Ue,d),y.onBeforeCompile(Ue,d),Ge=ae.acquireProgram(Ue,Fe),He.set(Fe,Ge),O.uniforms=Ue.uniforms;const Ve=O.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=I.uniform),dc(y,Ue),O.needsLights=xf(y),O.lightsStateVersion=Le,O.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.directionalShadowMap.value=J.state.directionalShadowMap,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotShadowMap.value=J.state.spotShadowMap,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMap.value=J.state.pointShadowMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix);const Je=Ge.getUniforms(),wt=qr.seqWithValue(Je.seq,Ve);return O.currentProgram=Ge,O.uniformsList=wt,Ge}function dc(y,B){const Y=w.get(y);Y.outputColorSpace=B.outputColorSpace,Y.instancing=B.instancing,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function gf(y,B,Y,O,J){B.isScene!==!0&&(B=_e),F.resetTextureUnits();const we=B.fog,Le=O.isMeshStandardMaterial?B.environment:null,Ue=A===null?d.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Sn,Fe=(O.isMeshStandardMaterial?Z:$).get(O.envMap||Le),He=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!O.normalMap&&!!Y.attributes.tangent,Ve=!!Y.morphAttributes.position,Je=!!Y.morphAttributes.normal,wt=!!Y.morphAttributes.color,Kt=O.toneMapped?d.toneMapping:Un,ni=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ct=ni!==void 0?ni.length:0,Xe=w.get(O),mo=g.state.lights;if(re===!0&&(ye===!0||y!==D)){const zt=y===D&&O.id===C;I.setState(O,y,zt)}let dt=!1;O.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==mo.state.version||Xe.outputColorSpace!==Ue||J.isInstancedMesh&&Xe.instancing===!1||!J.isInstancedMesh&&Xe.instancing===!0||J.isSkinnedMesh&&Xe.skinning===!1||!J.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Fe||O.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==I.numPlanes||Xe.numIntersection!==I.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Ge||Xe.morphTargets!==Ve||Xe.morphNormals!==Je||Xe.morphColors!==wt||Xe.toneMapping!==Kt||pe.isWebGL2===!0&&Xe.morphTargetsCount!==ct)&&(dt=!0):(dt=!0,Xe.__version=O.version);let ii=Xe.currentProgram;dt===!0&&(ii=ar(O,B,J));let pc=!1,ws=!1,go=!1;const Rt=ii.getUniforms(),si=Xe.uniforms;if(Ce.useProgram(ii.program)&&(pc=!0,ws=!0,go=!0),O.id!==C&&(C=O.id,ws=!0),pc||D!==y){if(Rt.setValue(P,"projectionMatrix",y.projectionMatrix),pe.logarithmicDepthBuffer&&Rt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),D!==y&&(D=y,ws=!0,go=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const zt=Rt.map.cameraPosition;zt!==void 0&&zt.setValue(P,se.setFromMatrixPosition(y.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Rt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||J.isSkinnedMesh)&&Rt.setValue(P,"viewMatrix",y.matrixWorldInverse)}if(J.isSkinnedMesh){Rt.setOptional(P,J,"bindMatrix"),Rt.setOptional(P,J,"bindMatrixInverse");const zt=J.skeleton;zt&&(pe.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Rt.setValue(P,"boneTexture",zt.boneTexture,F),Rt.setValue(P,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _o=Y.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0&&pe.isWebGL2===!0)&&ce.update(J,Y,ii),(ws||Xe.receiveShadow!==J.receiveShadow)&&(Xe.receiveShadow=J.receiveShadow,Rt.setValue(P,"receiveShadow",J.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(si.envMap.value=Fe,si.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ws&&(Rt.setValue(P,"toneMappingExposure",d.toneMappingExposure),Xe.needsLights&&_f(si,go),we&&O.fog===!0&&ne.refreshFogUniforms(si,we),ne.refreshMaterialUniforms(si,O,N,ee,he),qr.upload(P,Xe.uniformsList,si,F)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(qr.upload(P,Xe.uniformsList,si,F),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Rt.setValue(P,"center",J.center),Rt.setValue(P,"modelViewMatrix",J.modelViewMatrix),Rt.setValue(P,"normalMatrix",J.normalMatrix),Rt.setValue(P,"modelMatrix",J.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const zt=O.uniformsGroups;for(let xo=0,vf=zt.length;xo<vf;xo++)if(pe.isWebGL2){const mc=zt[xo];be.update(mc,ii),be.bind(mc,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function _f(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function xf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,B,Y){w.get(y.texture).__webglTexture=B,w.get(y.depthTexture).__webglTexture=Y;const O=w.get(y);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,B){const Y=w.get(y);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,Y=0){A=y,S=B,E=Y;let O=!0,J=null,we=!1,Le=!1;if(y){const Fe=w.get(y);Fe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(P.FRAMEBUFFER,null),O=!1):Fe.__webglFramebuffer===void 0?F.setupRenderTarget(y):Fe.__hasExternalTextures&&F.rebindTextures(y,w.get(y.texture).__webglTexture,w.get(y.depthTexture).__webglTexture);const He=y.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Le=!0);const Ge=w.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(J=Ge[B],we=!0):pe.isWebGL2&&y.samples>0&&F.useMultisampledRTT(y)===!1?J=w.get(y).__webglMultisampledFramebuffer:J=Ge,V.copy(y.viewport),v.copy(y.scissor),R=y.scissorTest}else V.copy(te).multiplyScalar(N).floor(),v.copy(G).multiplyScalar(N).floor(),R=H;if(Ce.bindFramebuffer(P.FRAMEBUFFER,J)&&pe.drawBuffers&&O&&Ce.drawBuffers(y,J),Ce.viewport(V),Ce.scissor(v),Ce.setScissorTest(R),we){const Fe=w.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,Y)}else if(Le){const Fe=w.get(y.texture),He=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,Y||0,He)}C=-1},this.readRenderTargetPixels=function(y,B,Y,O,J,we,Le){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=w.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){Ce.bindFramebuffer(P.FRAMEBUFFER,Ue);try{const Fe=y.texture,He=Fe.format,Ge=Fe.type;if(He!==qt&&W.convert(He)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Js&&(Re.has("EXT_color_buffer_half_float")||pe.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ge!==Ai&&W.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===$n&&(pe.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-O&&Y>=0&&Y<=y.height-J&&P.readPixels(B,Y,O,J,W.convert(He),W.convert(Ge),we)}finally{const Fe=A!==null?w.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(y,B,Y=0){const O=Math.pow(2,-Y),J=Math.floor(B.image.width*O),we=Math.floor(B.image.height*O);F.setTexture2D(B,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,y.x,y.y,J,we),Ce.unbindTexture()},this.copyTextureToTexture=function(y,B,Y,O=0){const J=B.image.width,we=B.image.height,Le=W.convert(Y.format),Ue=W.convert(Y.type);F.setTexture2D(Y,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,y.x,y.y,J,we,Le,Ue,B.image.data):B.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,y.x,y.y,B.mipmaps[0].width,B.mipmaps[0].height,Le,B.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,O,y.x,y.y,Le,Ue,B.image),O===0&&Y.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(y,B,Y,O,J=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=y.max.x-y.min.x+1,Le=y.max.y-y.min.y+1,Ue=y.max.z-y.min.z+1,Fe=W.convert(O.format),He=W.convert(O.type);let Ge;if(O.isData3DTexture)F.setTexture3D(O,0),Ge=P.TEXTURE_3D;else if(O.isDataArrayTexture)F.setTexture2DArray(O,0),Ge=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const Ve=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wt=P.getParameter(P.UNPACK_SKIP_PIXELS),Kt=P.getParameter(P.UNPACK_SKIP_ROWS),ni=P.getParameter(P.UNPACK_SKIP_IMAGES),ct=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,y.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,y.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,y.min.z),Y.isDataTexture||Y.isData3DTexture?P.texSubImage3D(Ge,J,B.x,B.y,B.z,we,Le,Ue,Fe,He,ct.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ge,J,B.x,B.y,B.z,we,Le,Ue,Fe,ct.data)):P.texSubImage3D(Ge,J,B.x,B.y,B.z,we,Le,Ue,Fe,He,ct),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ni),J===0&&O.generateMipmaps&&P.generateMipmap(Ge),Ce.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?F.setTextureCube(y,0):y.isData3DTexture?F.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?F.setTexture2DArray(y,0):F.setTexture2D(y,0),Ce.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,Ce.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?Ei:Oh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ei?De:Sn}}class xM extends sc{}xM.prototype.isWebGL1Renderer=!0;class rf extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ya,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new U;class rc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lu=new U,uu=new nt,hu=new nt,MM=new U,fu=new ke,Yi=new U;class SM extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Yi.fromBufferAttribute(t,i),this.applyBoneTransform(i,Yi),this.boundingBox.expandByPoint(Yi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)Yi.fromBufferAttribute(t,i),this.applyBoneTransform(i,Yi),this.boundingSphere.expandByPoint(Yi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;uu.fromBufferAttribute(s.attributes.skinIndex,e),hu.fromBufferAttribute(s.attributes.skinWeight,e),lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=hu.getComponent(r);if(o!==0){const a=uu.getComponent(r);fu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(MM.copy(lu).applyMatrix4(fu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class of extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class EM extends xt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=gt,u=gt,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=new ke,yM=new ke;class oc{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:yM;du.multiplyMatrices(a,t[r]),du.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Hh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new EM(t,e,e,qt,$n);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new of),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class pu extends Dt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new ke,mu=new ke,Nr=[],gu=new Bn,TM=new ke,Ds=new Ft,Us=new zn;class bM extends Ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,TM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),gu.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),Us.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(i),e.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),mu.multiplyMatrices(i,$i),Ds.matrixWorld=mu,Ds.raycast(e,Nr);for(let o=0,a=Nr.length;o<a;o++){const c=Nr[o];c.instanceId=r,c.object=this,t.push(c)}Nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class af extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _u=new U,xu=new U,vu=new ke,ta=new Qa,Fr=new zn;class ac extends st{constructor(e=new un,t=new af){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_u.fromBufferAttribute(t,s-1),xu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_u.distanceTo(xu);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;vu.copy(s).invert(),ta.copy(e.ray).applyMatrix4(vu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new U,u=new U,h=new U,f=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),T=Math.min(g.count,o.start+o.count);for(let S=d,E=T-1;S<E;S+=p){const A=g.getX(S),C=g.getX(S+1);if(l.fromBufferAttribute(m,A),u.fromBufferAttribute(m,C),ta.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(f);V<e.near||V>e.far||t.push({distance:V,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),T=Math.min(m.count,o.start+o.count);for(let S=d,E=T-1;S<E;S+=p){if(l.fromBufferAttribute(m,S),u.fromBufferAttribute(m,S+1),ta.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Mu=new U,Su=new U;class AM extends ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Mu.fromBufferAttribute(t,s),Su.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mu.distanceTo(Su);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wM extends ac{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cf extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eu=new ke,wa=new Qa,Or=new zn,Br=new U;class RM extends st{constructor(e=new un,t=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Eu.copy(s).invert(),wa.copy(e.ray).applyMatrix4(Eu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);Br.fromBufferAttribute(h,m),yu(Br,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Br.fromBufferAttribute(h,g),yu(Br,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yu(n,e,t,i,s,r,o){const a=wa.distanceSqToPoint(n);if(a<t){const c=new U;wa.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class cc extends un{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,f=new U,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const T=[],S=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&c===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const C=A/t;h.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(C+E,1-S),T.push(l++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){const S=u[d][T+1],E=u[d][T],A=u[d+1][T],C=u[d+1][T+1];(d!==0||o>0)&&p.push(S,E,C),(d!==i-1||c<Math.PI)&&p.push(E,A,C)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lc extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends lc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qn(n,e,t){return lf(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function zr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function CM(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Tu(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function uf(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class sr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class LM extends sr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:r=e,a=2*t-i;break;case yl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case El:o=e,c=2*i-t;break;case yl:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,E=p*m-p*_;for(let A=0;A!==a;++A)r[A]=d*o[u+A]+T*o[l+A]+S*o[c+A]+E*o[h+A];return r}}class PM extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class IM extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zr(t,this.TimeBufferType),this.values=zr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zr(e.times,Array),values:zr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new IM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new PM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new LM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=qn(i,r,o),this.values=qn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&lf(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=qn(this.times),t=qn(this.values),i=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=qn(e,0,o),this.values=qn(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=qn(this.times,0),t=qn(this.values,0),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=gs;class bs extends En{}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Qs;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class hf extends En{}hf.prototype.ValueTypeName="color";class tr extends En{}tr.prototype.ValueTypeName="number";class DM extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ti.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ci extends En{InterpolantFactoryMethodLinear(e){return new DM(this.times,this.values,this.getValueSize(),e)}}Ci.prototype.ValueTypeName="quaternion";Ci.prototype.DefaultInterpolation=gs;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends En{}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Qs;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends En{}nr.prototype.ValueTypeName="vector";class UM{constructor(e,t=-1,i,s=Zm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(FM(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(En.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=CM(c);c=Tu(c,1,u),l=Tu(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new tr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,g,_){if(p.length!==0){const m=[],d=[];uf(p,m,d,g),m.length!==0&&_.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let T=0;T!==f[g].morphTargets.length;++T){const S=f[g];m.push(S.time),d.push(S.morphTarget===_?1:0)}s.push(new tr(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{const p=".bones["+t[h].name+"]";i(nr,p+".position",f,"pos",s),i(Ci,p+".quaternion",f,"rot",s),i(nr,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function NM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return hf;case"quaternion":return Ci;case"bool":case"boolean":return bs;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function FM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=NM(n.type);if(n.times===void 0){const t=[],i=[];uf(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const vs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class OM{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const BM=new OM;class rr{constructor(e){this.manager=e!==void 0?e:BM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Cn={};class zM extends Error{constructor(e,t){super(e),this.response=t}}class ff extends rr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:i,onError:s});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Cn[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){T();function T(){h.read().then(({done:S,value:E})=>{if(S)d.close();else{_+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,D=u.length;C<D;C++){const V=u[C];V.onProgress&&V.onProgress(A)}d.enqueue(E),T()}})}}});return new Response(m)}else throw new zM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{vs.add(e,l);const u=Cn[e];delete Cn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Cn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class HM extends rr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=er("img");function c(){u(),vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class GM extends rr{constructor(e){super(e)}load(e,t,i,s){const r=new xt,o=new HM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class po extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const na=new ke,bu=new U,Au=new U;class uc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kM extends uc{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=_s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class VM extends po{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wu=new ke,Ns=new U,ia=new U;class WM extends uc{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ns),ia.copy(i.position),ia.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ia),i.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),wu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}}class XM extends po{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new WM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qM extends uc{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class df extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new qM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jM extends po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ra{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class KM extends rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){vs.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const hc="\\[\\]\\.:\\/",YM=new RegExp("["+hc+"]","g"),fc="[^"+hc+"]",$M="[^"+hc.replace("\\.","")+"]",ZM=/((?:WC+[\/:])*)/.source.replace("WC",fc),JM=/(WCOD+)?/.source.replace("WCOD",$M),QM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),eS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),tS=new RegExp("^"+ZM+JM+QM+eS+"$"),nS=["material","materials","bones","map"];class iS{constructor(e,t,i){const s=i||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ze{constructor(e,t,i){this.path=t,this.parsedPath=i||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,i):new Ze(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(YM,"")}static parseTrackName(e){const t=tS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);nS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=iS;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function Ru(n,e){if(e===Jm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ea||e===Fh){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Ea)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class sS extends rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new MS(t)})}load(e,t,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ra.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ff(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pf){try{o[qe.KHR_BINARY_GLTF]=new SS(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new US(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new aS;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new ES(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new yS;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new TS;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function rS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oS{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ze(16777215);c.color!==void 0&&u.fromArray(c.color);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new df(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new XM(u),l.distance=h;break;case"spot":l=new VM(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Yn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class aS{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(e,t,i){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,De))}return Promise.all(s)}}class cS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class lS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}}class uS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class hS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,De)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class fS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class dS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze(a[0],a[1],a[2]),Promise.all(r)}}class pS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class mS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,De)),Promise.all(r)}}class gS{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class _S{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xS{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vS{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}}class MS{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==Wt.TRIANGLES&&l.mode!==Wt.TRIANGLE_STRIP&&l.mode!==Wt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(const g of h){const _=new ke,m=new U,d=new ti,T=new U(1,1,1),S=new bM(g.geometry,g.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,E),c.SCALE&&T.fromBufferAttribute(c.SCALE,E),S.setMatrixAt(E,_.compose(m,d,T));for(const E in c)E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);st.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const pf="glTF",Fs=12,Cu={JSON:1313821514,BIN:5130562};class SS{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Fs,r=new DataView(e,Fs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Cu.JSON){const l=new Uint8Array(e,Fs+o,a);this.content=i.decode(l)}else if(c===Cu.BIN){const l=Fs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ES{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Ca[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ca[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=cs[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],_=c[p];_!==void 0&&(g.normalized=_)}h(f)},a,l)})})}}class yS{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TS{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class mf extends sr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(i-t)/u,f=h*h,p=f*h,g=e*l,_=g-l,m=-2*p+3*f,d=p-f,T=1-m,S=d-f+h;for(let E=0;E!==a;E++){const A=o[_+E+a],C=o[_+E+c]*u,D=o[g+E+a],V=o[g+E]*u;r[E]=T*A+S*C+m*D+d*V}return r}}const bS=new ti;class AS extends mf{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return bS.fromArray(r).normalize().toArray(r),r}}const Wt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lu={9728:gt,9729:Nt,9984:Sa,9985:Uh,9986:Xr,9987:bi},Pu={33071:Xt,33648:Jr,10497:ps},sa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ca={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wS={CUBICSPLINE:void 0,LINEAR:gs,STEP:Qs},ra={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new lc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),n.DefaultMaterial}function Os(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Yn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CS(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function LS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PS(n){const e=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Iu(e.attributes):t=n.indices+":"+Iu(n.attributes)+":"+n.mode,t}function Iu(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function La(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const DS=new ke;class US{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new GM(this.options.manager):this.textureLoader=new KM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ff(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};Os(r,a,s),Yn(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Ra.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=sa[s.type],a=cs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Dt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=sa[s.type],l=cs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const d=Math.floor(f/p),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let S=t.cache.get(T);S||(_=new l(a,d*p,s.count*p/u),S=new vM(_,p/u),t.cache.add(T,S)),m=new rc(S,c,f%p/u,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new Dt(_,c,g);if(s.sparse!==void 0){const d=sa.SCALAR,T=cs[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,A=new T(o[1],S,s.sparse.count*d),C=new l(o[2],E,s.sparse.count*c);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized));for(let D=0,V=A.length;D<V;D++){const v=A[D];if(m.setX(v,C[D*c]),c>=2&&m.setY(v,C[D*c+1]),c>=3&&m.setZ(v,C[D*c+2]),c>=4&&m.setW(v,C[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Lu[f.magFilter]||Nt,u.minFilter=Lu[f.minFilter]||bi,u.wrapS=Pu[f.wrapS]||ps,u.wrapT=Pu[f.wrapT]||ps,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new xt(_);m.needsUpdate=!0,f(m)}),t.load(Ra.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||IS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new cf,vn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new af,vn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return lc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,De)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=xn);const u=r.alphaMode||ra.OPAQUE;if(u===ra.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ra.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Dn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==Dn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Dn&&(a.emissive=new ze().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Dn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,De)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Yn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Os(s,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");let i=t;for(let s=1;this.nodeNamesUsed[i];++s)i=t+"_"+s;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Du(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=PS(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Du(new un,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?RS(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let d;const T=l[p];if(m.mode===Wt.TRIANGLES||m.mode===Wt.TRIANGLE_STRIP||m.mode===Wt.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new SM(_,T):new Ft(_,T),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Wt.TRIANGLE_STRIP?d.geometry=Ru(d.geometry,Fh):m.mode===Wt.TRIANGLE_FAN&&(d.geometry=Ru(d.geometry,Ea));else if(m.mode===Wt.LINES)d=new AM(_,T);else if(m.mode===Wt.LINE_STRIP)d=new ac(_,T);else if(m.mode===Wt.LINE_LOOP)d=new wM(_,T);else if(m.mode===Wt.POINTS)d=new RM(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&LS(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Yn(d,r),m.extensions&&Os(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new _i;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Tt(gg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new nc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Yn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new ke;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oc(a,c)})}loadAnimation(e){const i=this.json.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],a=[],c=[],l=[];for(let u=0,h=i.channels.length;u<h;u++){const f=i.channels[u],p=i.samplers[f.sampler],g=f.target,_=g.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,d=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",d)),c.push(p),l.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(u){const h=u[0],f=u[1],p=u[2],g=u[3],_=u[4],m=[];for(let d=0,T=h.length;d<T;d++){const S=h[d],E=f[d],A=p[d],C=g[d],D=_[d];if(S===void 0)continue;S.updateMatrix();let V;switch(jn[D.path]){case jn.weights:V=tr;break;case jn.rotation:V=Ci;break;case jn.position:case jn.scale:default:V=nr;break}const v=S.name?S.name:S.uuid,R=C.interpolation!==void 0?wS[C.interpolation]:gs,ie=[];jn[D.path]===jn.weights?S.traverse(function(N){N.morphTargetInfluences&&ie.push(N.name?N.name:N.uuid)}):ie.push(v);let ee=A.array;if(A.normalized){const N=La(ee.constructor),k=new Float32Array(ee.length);for(let X=0,te=ee.length;X<te;X++)k[X]=ee[X]*N;ee=k}for(let N=0,k=ie.length;N<k;N++){const X=new V(ie[N]+"."+jn[D.path],E.array,ee,R);C.interpolation==="CUBICSPLINE"&&(X.createInterpolant=function(G){const H=this instanceof Ci?AS:mf;return new H(this.times,this.values,this.getValueSize()/3,G)},X.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(X)}}return new UM(s,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,DS)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new of:l.length>1?u=new _i:l.length===1?u=l[0]:u=new st,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Yn(u,r),r.extensions&&Os(i,u,r),r.matrix!==void 0){const h=new ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new _i;i.name&&(r.name=s.createUniqueName(i.name)),Yn(r,i),i.extensions&&Os(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,p]of s.associations)(f instanceof vn||f instanceof xt)&&h.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=l(r),r})}}function NS(n,e,t){const i=e.attributes,s=new Bn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){const u=La(cs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=La(cs[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Du(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Ca[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Yn(n,e),NS(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?CS(n,e.targets,t):n})}const FS={name:"DeskScene",mounted(){this.initThreeJS(),window.addEventListener("resize",this.onWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize)},methods:{initThreeJS(){const n=this.$refs.deskContainer.clientWidth,e=this.$refs.deskContainer.clientHeight;this.scene=new rf,this.camera=new Tt(75,n/e,.1,1e3),this.camera.position.set(5,3,3),this.renderer=new sc({antialias:!0,alpha:!0}),this.renderer.setSize(n,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.physicallyCorrectLights=!0,this.$refs.deskContainer.appendChild(this.renderer.domElement);const t=new jM(16777215,.5);this.scene.add(t);const i=new df(16777215,1);i.position.set(5,10,7.5),this.scene.add(i),this.animate()},addCubeToScene(){const n=new Li(1,1,1),e=new Dn({color:65280}),t=new Ft(n,e);this.scene.add(t),this.camera.lookAt(t.position)},loadDeskModel(){new sS().load("/model/ddesk.glb",e=>{e.scene.rotation.y=Math.PI*.7,e.scene.rotation.z=Math.PI*1.6,this.scene.add(e.scene),e.scene.position.set(0,0,0),e.scene.scale.set(8,8,8),this.camera.lookAt(e.scene.position)},void 0,e=>{console.error("An error happened while loading the model:",e)})},onWindowResize(){const n=this.$refs.deskContainer.clientWidth,e=this.$refs.deskContainer.clientHeight;this.camera.aspect=n/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))},animate(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}}},OS={ref:"deskContainer",class:"desk-container"};function BS(n,e,t,i,s,r){return It(),rn("div",OS,null,512)}const zS=ir(FS,[["render",BS],["__scopeId","data-v-8d9c968b"]]);const HS={name:"Scrollblock",components:{Desk:zS},data(){return{div2Show:!1,focusedBlockId:null,images:["/Images/MidiBurnerFaceplate.png","/Images/WormholeFaceplate.png","/Images/StratusFaceplate.png"]}},mounted(){this.$refs.scrollContainer.addEventListener("scroll",this.handleScroll)},beforeDestroy(){this.$refs.scrollContainer.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const n=this.$refs.scrollContainer,e=this.$refs.scrollContainer.querySelectorAll(".contentBlock");let t="",i=1/0;n.querySelectorAll(".contentBlock").forEach((s,r)=>{const o=s.offsetTop-n.offsetTop,a=Math.abs(n.scrollTop-o);a<i&&(i=a,t=s.id)}),this.focusedBlockId=t,t==="div2"&&!this.div2Show&&(this.div2Show=!0,this.$refs.leftText.classList.add("fadeInLeft"),this.$refs.rightText.classList.add("fadeInRight")),t==="div2"?e.forEach(s=>{s.style.overflowY="scroll",s.style.scrollSnapAlign="center"}):t==="div3"&&e.forEach(s=>{s.style.overflowY="scroll",s.style.scrollSnapAlign="center"})}}},or=n=>(ah("data-v-e1c81009"),n=n(),ch(),n),GS={class:"scroll-container",ref:"scrollContainer"},kS=or(()=>mt("div",{style:{height:"130vh"}},null,-1)),VS={class:"contentBlock",id:"div1"},WS=or(()=>mt("div",{class:"scrollIndicator"},"⇩",-1)),XS=or(()=>mt("div",{class:"splitter",style:{height:"8vh"}},null,-1)),qS={class:"contentBlock",id:"div2",ref:"div2"},jS={class:"midText",ref:"midText"},KS={class:"leftText",ref:"leftText"},YS={class:"rightText",ref:"rightText"},$S=or(()=>mt("div",{class:"scrollIndicator"},[Ah("⇩ "),mt("div",{class:"splitter",style:{height:"15vh"}})],-1)),ZS={class:"grid-container"},JS=["src"],QS=or(()=>mt("div",{class:"splitter",style:{height:"15vh"}},null,-1));function eE(n,e,t,i,s,r){const o=kd("Desk");return It(),rn("div",GS,[kS,mt("div",VS,[cn(o)]),WS,XS,mt("div",qS,[mt("p",jS,"Hello, I'm Sam",512),mt("p",KS,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium. Tortor dignissim convallis aenean et tortor at risus. Morbi tincidunt augue interdum velit euismod. Bibendum est ultricies integer quis auctor elit sed vulputate mi. ",512),mt("p",YS,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium. Tortor dignissim convallis aenean et tortor at risus. Morbi tincidunt augue interdum velit euismod. Bibendum est ultricies integer quis auctor elit sed vulputate mi. ",512)],512),$S,mt("div",{class:xi(["contentBlock",{focused:s.focusedBlockId==="div3"}]),id:"div3"},[mt("div",ZS,[(It(!0),rn(pn,null,Xd(s.images,(a,c)=>(It(),rn("div",{class:"grid-item",key:c},[mt("img",{src:a,alt:"Image description",class:"grid-image"},null,8,JS)]))),128))]),QS],2)],512)}const tE=ir(HS,[["render",eE],["__scopeId","data-v-e1c81009"]]);const nE={mounted(){const n=new rf,e=new Tt(75,window.innerWidth/window.innerHeight,.1,1e3),t=new sc({canvas:this.$el});t.setSize(window.innerWidth,window.innerHeight),this.$refs.canvas.style.padding="0",this.$refs.canvas.style.margin="0",t.setClearColor("#fff");const i=Math.floor(Math.random()*2)+1,s=Math.floor(Math.random()*100)+5;let r;switch(i){case 1:r=new cc(s,8,8);break;case 2:r=new Li(s,8,8);break;default:console.log("Invalid mesh roll");break}const o=new Dn({color:65382,opacity:.3,transparent:!0,wireframe:!0,depthTest:!1}),a=new Ft(r,o);n.add(a),e.position.z=5;const c=()=>{requestAnimationFrame(c),a.rotation.x+=.001,a.rotation.y+=.001,t.render(n,e)};c();function l(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",l);const u=()=>{window.removeEventListener("resize",l)};this.$options.beforeUnmount=[u]}},iE={ref:"canvas",class:"threeBGCanvas"};function sE(n,e,t,i,s,r){return It(),rn("canvas",iE,null,512)}const rE=ir(nE,[["render",sE],["__scopeId","data-v-0abedcf3"]]),oE={__name:"App",setup(n){const e=sessionStorage.getItem("bootloaderShown"),t=ld(!e),i=()=>{t.value=!1,sessionStorage.setItem("bootloaderShown","true")};return dh(()=>{e&&i()}),(s,r)=>(It(),rn("div",null,[cn(rE),t.value?ss("",!0):(It(),Vr(om,{key:0})),t.value?ss("",!0):(It(),Vr(tE,{key:1})),t.value?(It(),Vr(Jp,{key:2,onAnimationCompleted:i})):ss("",!0)]))}};jp(oE).mount("#app");
