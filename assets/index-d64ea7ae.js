(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Do(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Ze={},Ci=[],$t=()=>{},yu=()=>!1,bu=/^on[^a-z]/,cs=n=>bu.test(n),Io=n=>n.startsWith("onUpdate:"),ft=Object.assign,No=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Au=Object.prototype.hasOwnProperty,We=(n,e)=>Au.call(n,e),Ie=Array.isArray,Li=n=>us(n)==="[object Map]",Ql=n=>us(n)==="[object Set]",Be=n=>typeof n=="function",rt=n=>typeof n=="string",Fo=n=>typeof n=="symbol",Qe=n=>n!==null&&typeof n=="object",ec=n=>Qe(n)&&Be(n.then)&&Be(n.catch),tc=Object.prototype.toString,us=n=>tc.call(n),wu=n=>us(n).slice(8,-1),nc=n=>us(n)==="[object Object]",Oo=n=>rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$r=Do(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ru=/-(\w)/g,Bi=fs(n=>n.replace(Ru,(e,t)=>t?t.toUpperCase():"")),Cu=/\B([A-Z])/g,qi=fs(n=>n.replace(Cu,"-$1").toLowerCase()),ic=fs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Rs=fs(n=>n?`on${ic(n)}`:""),ur=(n,e)=>!Object.is(n,e),Cs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},is=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Lu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let la;const ho=()=>la||(la=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pi(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=rt(i)?Iu(i):Pi(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(rt(n))return n;if(Qe(n))return n}}const Pu=/;(?![^(]*\))/g,Uu=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function Iu(n){const e={};return n.replace(Du,"").split(Pu).forEach(t=>{if(t){const i=t.split(Uu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Qn(n){let e="";if(rt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Qn(n[t]);i&&(e+=i+" ")}else if(Qe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fu=Do(Nu);function rc(n){return!!n||n===""}const Zr=n=>rt(n)?n:n==null?"":Ie(n)||Qe(n)&&(n.toString===tc||!Be(n.toString))?JSON.stringify(n,sc,2):String(n),sc=(n,e)=>e&&e.__v_isRef?sc(n,e.value):Li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Ql(e)?{[`Set(${e.size})`]:[...e.values()]}:Qe(e)&&!Ie(e)&&!nc(e)?String(e):e;let kt;class Ou{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Bu(n,e=kt){e&&e.active&&e.effects.push(n)}function zu(){return kt}const Bo=n=>{const e=new Set(n);return e.w=0,e.n=0,e},oc=n=>(n.w&Nn)>0,ac=n=>(n.n&Nn)>0,Hu=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Nn},Gu=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];oc(r)&&!ac(r)?r.delete(n):e[t++]=r,r.w&=~Nn,r.n&=~Nn}e.length=t}},po=new WeakMap;let rr=0,Nn=1;const mo=30;let qt;const ei=Symbol(""),_o=Symbol("");class zo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Bu(this,i)}run(){if(!this.active)return this.fn();let e=qt,t=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Un=!0,Nn=1<<++rr,rr<=mo?Hu(this):ca(this),this.fn()}finally{rr<=mo&&Gu(this),Nn=1<<--rr,qt=this.parent,Un=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(ca(this),this.onStop&&this.onStop(),this.active=!1)}}function ca(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Un=!0;const lc=[];function Yi(){lc.push(Un),Un=!1}function ji(){const n=lc.pop();Un=n===void 0?!0:n}function At(n,e,t){if(Un&&qt){let i=po.get(n);i||po.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Bo()),cc(r)}}function cc(n,e){let t=!1;rr<=mo?ac(n)||(n.n|=Nn,t=!oc(n)):t=!n.has(qt),t&&(n.add(qt),qt.deps.push(n))}function Tn(n,e,t,i,r,s){const a=po.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ie(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ie(n)?Oo(t)&&o.push(a.get("length")):(o.push(a.get(ei)),Li(n)&&o.push(a.get(_o)));break;case"delete":Ie(n)||(o.push(a.get(ei)),Li(n)&&o.push(a.get(_o)));break;case"set":Li(n)&&o.push(a.get(ei));break}if(o.length===1)o[0]&&go(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);go(Bo(l))}}function go(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&ua(i);for(const i of t)i.computed||ua(i)}function ua(n,e){(n!==qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Vu=Do("__proto__,__v_isRef,__isVue"),uc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fo)),ku=Ho(),Wu=Ho(!1,!0),Xu=Ho(!0),fa=qu();function qu(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=qe(this);for(let s=0,a=this.length;s<a;s++)At(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Yi();const i=qe(this)[e].apply(this,t);return ji(),i}}),n}function Yu(n){const e=qe(this);return At(e,"has",n),e.hasOwnProperty(n)}function Ho(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?uf:mc:e?pc:dc).get(i))return i;const a=Ie(i);if(!n){if(a&&We(fa,r))return Reflect.get(fa,r,s);if(r==="hasOwnProperty")return Yu}const o=Reflect.get(i,r,s);return(Fo(r)?uc.has(r):Vu(r))||(n||At(i,"get",r),e)?o:gt(o)?a&&Oo(r)?o:o.value:Qe(o)?n?_c(o):ko(o):o}}const ju=fc(),Ku=fc(!0);function fc(n=!1){return function(t,i,r,s){let a=t[i];if(zi(a)&&gt(a)&&!gt(r))return!1;if(!n&&(!rs(r)&&!zi(r)&&(a=qe(a),r=qe(r)),!Ie(t)&&gt(a)&&!gt(r)))return a.value=r,!0;const o=Ie(t)&&Oo(i)?Number(i)<t.length:We(t,i),l=Reflect.set(t,i,r,s);return t===qe(s)&&(o?ur(r,a)&&Tn(t,"set",i,r):Tn(t,"add",i,r)),l}}function $u(n,e){const t=We(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Tn(n,"delete",e,void 0),i}function Zu(n,e){const t=Reflect.has(n,e);return(!Fo(e)||!uc.has(e))&&At(n,"has",e),t}function Ju(n){return At(n,"iterate",Ie(n)?"length":ei),Reflect.ownKeys(n)}const hc={get:ku,set:ju,deleteProperty:$u,has:Zu,ownKeys:Ju},Qu={get:Xu,set(n,e){return!0},deleteProperty(n,e){return!0}},ef=ft({},hc,{get:Wu,set:Ku}),Go=n=>n,hs=n=>Reflect.getPrototypeOf(n);function Er(n,e,t=!1,i=!1){n=n.__v_raw;const r=qe(n),s=qe(e);t||(e!==s&&At(r,"get",e),At(r,"get",s));const{has:a}=hs(r),o=i?Go:t?Xo:fr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Tr(n,e=!1){const t=this.__v_raw,i=qe(t),r=qe(n);return e||(n!==r&&At(i,"has",n),At(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function yr(n,e=!1){return n=n.__v_raw,!e&&At(qe(n),"iterate",ei),Reflect.get(n,"size",n)}function ha(n){n=qe(n);const e=qe(this);return hs(e).has.call(e,n)||(e.add(n),Tn(e,"add",n,n)),this}function da(n,e){e=qe(e);const t=qe(this),{has:i,get:r}=hs(t);let s=i.call(t,n);s||(n=qe(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?ur(e,a)&&Tn(t,"set",n,e):Tn(t,"add",n,e),this}function pa(n){const e=qe(this),{has:t,get:i}=hs(e);let r=t.call(e,n);r||(n=qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Tn(e,"delete",n,void 0),s}function ma(){const n=qe(this),e=n.size!==0,t=n.clear();return e&&Tn(n,"clear",void 0,void 0),t}function br(n,e){return function(i,r){const s=this,a=s.__v_raw,o=qe(a),l=e?Go:n?Xo:fr;return!n&&At(o,"iterate",ei),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ar(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),a=Li(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Go:e?Xo:fr;return!e&&At(s,"iterate",l?_o:ei),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function An(n){return function(...e){return n==="delete"?!1:this}}function tf(){const n={get(s){return Er(this,s)},get size(){return yr(this)},has:Tr,add:ha,set:da,delete:pa,clear:ma,forEach:br(!1,!1)},e={get(s){return Er(this,s,!1,!0)},get size(){return yr(this)},has:Tr,add:ha,set:da,delete:pa,clear:ma,forEach:br(!1,!0)},t={get(s){return Er(this,s,!0)},get size(){return yr(this,!0)},has(s){return Tr.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:br(!0,!1)},i={get(s){return Er(this,s,!0,!0)},get size(){return yr(this,!0)},has(s){return Tr.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ar(s,!1,!1),t[s]=Ar(s,!0,!1),e[s]=Ar(s,!1,!0),i[s]=Ar(s,!0,!0)}),[n,t,e,i]}const[nf,rf,sf,of]=tf();function Vo(n,e){const t=e?n?of:sf:n?rf:nf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(We(t,r)&&r in i?t:i,r,s)}const af={get:Vo(!1,!1)},lf={get:Vo(!1,!0)},cf={get:Vo(!0,!1)},dc=new WeakMap,pc=new WeakMap,mc=new WeakMap,uf=new WeakMap;function ff(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hf(n){return n.__v_skip||!Object.isExtensible(n)?0:ff(wu(n))}function ko(n){return zi(n)?n:Wo(n,!1,hc,af,dc)}function df(n){return Wo(n,!1,ef,lf,pc)}function _c(n){return Wo(n,!0,Qu,cf,mc)}function Wo(n,e,t,i,r){if(!Qe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=hf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ui(n){return zi(n)?Ui(n.__v_raw):!!(n&&n.__v_isReactive)}function zi(n){return!!(n&&n.__v_isReadonly)}function rs(n){return!!(n&&n.__v_isShallow)}function gc(n){return Ui(n)||zi(n)}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function vc(n){return is(n,"__v_skip",!0),n}const fr=n=>Qe(n)?ko(n):n,Xo=n=>Qe(n)?_c(n):n;function xc(n){Un&&qt&&(n=qe(n),cc(n.dep||(n.dep=Bo())))}function Mc(n,e){n=qe(n);const t=n.dep;t&&go(t)}function gt(n){return!!(n&&n.__v_isRef===!0)}function pf(n){return mf(n,!1)}function mf(n,e){return gt(n)?n:new _f(n,e)}class _f{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:qe(e),this._value=t?e:fr(e)}get value(){return xc(this),this._value}set value(e){const t=this.__v_isShallow||rs(e)||zi(e);e=t?e:qe(e),ur(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fr(e),Mc(this))}}function gf(n){return gt(n)?n.value:n}const vf={get:(n,e,t)=>gf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return gt(r)&&!gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Sc(n){return Ui(n)?n:new Proxy(n,vf)}class xf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new zo(e,()=>{this._dirty||(this._dirty=!0,Mc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return xc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Mf(n,e,t=!1){let i,r;const s=Be(n);return s?(i=n,r=$t):(i=n.get,r=n.set),new xf(i,r,s||!r,t)}function Dn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ds(s,e,t)}return r}function Zt(n,e,t,i){if(Be(n)){const s=Dn(n,e,t,i);return s&&ec(s)&&s.catch(a=>{ds(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Zt(n[s],e,t,i));return r}function ds(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Dn(l,null,10,[n,a,o]);return}}Sf(n,t,r,i)}function Sf(n,e,t,i=!0){console.error(n)}let hr=!1,vo=!1;const mt=[];let sn=0;const Di=[];let vn=null,jn=0;const Ec=Promise.resolve();let qo=null;function Ef(n){const e=qo||Ec;return n?e.then(this?n.bind(this):n):e}function Tf(n){let e=sn+1,t=mt.length;for(;e<t;){const i=e+t>>>1;dr(mt[i])<n?e=i+1:t=i}return e}function Yo(n){(!mt.length||!mt.includes(n,hr&&n.allowRecurse?sn+1:sn))&&(n.id==null?mt.push(n):mt.splice(Tf(n.id),0,n),Tc())}function Tc(){!hr&&!vo&&(vo=!0,qo=Ec.then(bc))}function yf(n){const e=mt.indexOf(n);e>sn&&mt.splice(e,1)}function bf(n){Ie(n)?Di.push(...n):(!vn||!vn.includes(n,n.allowRecurse?jn+1:jn))&&Di.push(n),Tc()}function _a(n,e=hr?sn+1:0){for(;e<mt.length;e++){const t=mt[e];t&&t.pre&&(mt.splice(e,1),e--,t())}}function yc(n){if(Di.length){const e=[...new Set(Di)];if(Di.length=0,vn){vn.push(...e);return}for(vn=e,vn.sort((t,i)=>dr(t)-dr(i)),jn=0;jn<vn.length;jn++)vn[jn]();vn=null,jn=0}}const dr=n=>n.id==null?1/0:n.id,Af=(n,e)=>{const t=dr(n)-dr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function bc(n){vo=!1,hr=!0,mt.sort(Af);const e=$t;try{for(sn=0;sn<mt.length;sn++){const t=mt[sn];t&&t.active!==!1&&Dn(t,null,14)}}finally{sn=0,mt.length=0,yc(),hr=!1,qo=null,(mt.length||Di.length)&&bc()}}function wf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=i[u]||Ze;d&&(r=t.map(p=>rt(p)?p.trim():p)),h&&(r=t.map(Lu))}let o,l=i[o=Rs(e)]||i[o=Rs(Bi(e))];!l&&s&&(l=i[o=Rs(qi(e))]),l&&Zt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Zt(c,n,6,r)}}function Ac(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Be(n)){const l=c=>{const u=Ac(c,e,!0);u&&(o=!0,ft(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Qe(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):ft(a,s),Qe(n)&&i.set(n,a),a)}function ps(n,e){return!n||!cs(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,qi(e))||We(n,e))}let on=null,ms=null;function ss(n){const e=on;return on=n,ms=n&&n.type.__scopeId||null,e}function wc(n){ms=n}function Rc(){ms=null}function Rf(n,e=on,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Aa(-1);const s=ss(e);let a;try{a=n(...r)}finally{ss(s),i._d&&Aa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ls(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:x,inheritAttrs:g}=n;let m,f;const A=ss(n);try{if(t.shapeFlag&4){const y=r||i;m=nn(u.call(y,y,h,s,p,d,x)),f=l}else{const y=e;m=nn(y.length>1?y(s,{attrs:l,slots:o,emit:c}):y(s,null)),f=e.props?l:Cf(l)}}catch(y){lr.length=0,ds(y,n,1),m=an(si)}let E=m;if(f&&g!==!1){const y=Object.keys(f),{shapeFlag:w}=E;y.length&&w&7&&(a&&y.some(Io)&&(f=Lf(f,a)),E=Hi(E,f))}return t.dirs&&(E=Hi(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),m=E,ss(A),m}const Cf=n=>{let e;for(const t in n)(t==="class"||t==="style"||cs(t))&&((e||(e={}))[t]=n[t]);return e},Lf=(n,e)=>{const t={};for(const i in n)(!Io(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Pf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ga(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==i[d]&&!ps(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ga(i,a,c):!0:!!a;return!1}function ga(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ps(t,s))return!0}return!1}function Uf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Df=n=>n.__isSuspense;function If(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):bf(n)}const wr={};function Ps(n,e,t){return Cc(n,e,t)}function Cc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Ze){var o;const l=zu()===((o=_t)==null?void 0:o.scope)?_t:null;let c,u=!1,h=!1;if(gt(n)?(c=()=>n.value,u=rs(n)):Ui(n)?(c=()=>n,i=!0):Ie(n)?(h=!0,u=n.some(y=>Ui(y)||rs(y)),c=()=>n.map(y=>{if(gt(y))return y.value;if(Ui(y))return wi(y);if(Be(y))return Dn(y,l,2)})):Be(n)?e?c=()=>Dn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Zt(n,l,3,[p])}:c=$t,e&&i){const y=c;c=()=>wi(y())}let d,p=y=>{d=A.onStop=()=>{Dn(y,l,4)}},x;if(mr)if(p=$t,e?t&&Zt(e,l,3,[c(),h?[]:void 0,p]):c(),r==="sync"){const y=Rh();x=y.__watcherHandles||(y.__watcherHandles=[])}else return $t;let g=h?new Array(n.length).fill(wr):wr;const m=()=>{if(A.active)if(e){const y=A.run();(i||u||(h?y.some((w,C)=>ur(w,g[C])):ur(y,g)))&&(d&&d(),Zt(e,l,3,[y,g===wr?void 0:h&&g[0]===wr?[]:g,p]),g=y)}else A.run()};m.allowRecurse=!!e;let f;r==="sync"?f=m:r==="post"?f=()=>Tt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),f=()=>Yo(m));const A=new zo(c,f);e?t?m():g=A.run():r==="post"?Tt(A.run.bind(A),l&&l.suspense):A.run();const E=()=>{A.stop(),l&&l.scope&&No(l.scope.effects,A)};return x&&x.push(E),E}function Nf(n,e,t){const i=this.proxy,r=rt(n)?n.includes(".")?Lc(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const a=_t;Gi(this);const o=Cc(r,s.bind(i),t);return a?Gi(a):ti(),o}function Lc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function wi(n,e){if(!Qe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),gt(n))wi(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)wi(n[t],e);else if(Ql(n)||Li(n))n.forEach(t=>{wi(t,e)});else if(nc(n))for(const t in n)wi(n[t],e);return n}function Gn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Yi(),Zt(l,t,8,[n.el,o,n,e]),ji())}}const Jr=n=>!!n.type.__asyncLoader,Pc=n=>n.type.__isKeepAlive;function Ff(n,e){Uc(n,"a",e)}function Of(n,e){Uc(n,"da",e)}function Uc(n,e,t=_t){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_s(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Pc(r.parent.vnode)&&Bf(i,e,t,r),r=r.parent}}function Bf(n,e,t,i){const r=_s(e,n,i,!0);Ic(()=>{No(i[e],r)},t)}function _s(n,e,t=_t,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Yi(),Gi(t);const o=Zt(e,t,n,a);return ti(),ji(),o});return i?r.unshift(s):r.push(s),s}}const yn=n=>(e,t=_t)=>(!mr||n==="sp")&&_s(n,(...i)=>e(...i),t),zf=yn("bm"),Dc=yn("m"),Hf=yn("bu"),Gf=yn("u"),Vf=yn("bum"),Ic=yn("um"),kf=yn("sp"),Wf=yn("rtg"),Xf=yn("rtc");function qf(n,e=_t){_s("ec",n,e)}const Yf=Symbol.for("v-ndc");function jf(n,e,t,i){let r;const s=t&&t[i];if(Ie(n)||rt(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(Qe(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const xo=n=>n?qc(n)?Jo(n)||n.proxy:xo(n.parent):null,ar=ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xo(n.parent),$root:n=>xo(n.root),$emit:n=>n.emit,$options:n=>jo(n),$forceUpdate:n=>n.f||(n.f=()=>Yo(n.update)),$nextTick:n=>n.n||(n.n=Ef.bind(n.proxy)),$watch:n=>Nf.bind(n)}),Us=(n,e)=>n!==Ze&&!n.__isScriptSetup&&We(n,e),Kf={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Us(i,e))return a[e]=1,i[e];if(r!==Ze&&We(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&We(c,e))return a[e]=3,s[e];if(t!==Ze&&We(t,e))return a[e]=4,t[e];Mo&&(a[e]=0)}}const u=ar[e];let h,d;if(u)return e==="$attrs"&&At(n,"get",e),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==Ze&&We(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,We(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Us(r,e)?(r[e]=t,!0):i!==Ze&&We(i,e)?(i[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ze&&We(n,a)||Us(e,a)||(o=s[0])&&We(o,a)||We(i,a)||We(ar,a)||We(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function va(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Mo=!0;function $f(n){const e=jo(n),t=n.proxy,i=n.ctx;Mo=!1,e.beforeCreate&&xa(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:x,activated:g,deactivated:m,beforeDestroy:f,beforeUnmount:A,destroyed:E,unmounted:y,render:w,renderTracked:C,renderTriggered:D,errorCaptured:Q,serverPrefetch:M,expose:R,inheritAttrs:oe,components:te,directives:F,filters:X}=e;if(c&&Zf(c,i,null),a)for(const G in a){const H=a[G];Be(H)&&(i[G]=H.bind(t))}if(r){const G=r.call(t,t);Qe(G)&&(n.data=ko(G))}if(Mo=!0,s)for(const G in s){const H=s[G],ce=Be(H)?H.bind(t,t):Be(H.get)?H.get.bind(t,t):$t,re=!Be(H)&&Be(H.set)?H.set.bind(t):$t,Te=Ah({get:ce,set:re});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Te.value,set:fe=>Te.value=fe})}if(o)for(const G in o)Nc(o[G],i,t,G);if(l){const G=Be(l)?l.call(t):l;Reflect.ownKeys(G).forEach(H=>{ih(H,G[H])})}u&&xa(u,n,"c");function ne(G,H){Ie(H)?H.forEach(ce=>G(ce.bind(t))):H&&G(H.bind(t))}if(ne(zf,h),ne(Dc,d),ne(Hf,p),ne(Gf,x),ne(Ff,g),ne(Of,m),ne(qf,Q),ne(Xf,C),ne(Wf,D),ne(Vf,A),ne(Ic,y),ne(kf,M),Ie(R))if(R.length){const G=n.exposed||(n.exposed={});R.forEach(H=>{Object.defineProperty(G,H,{get:()=>t[H],set:ce=>t[H]=ce})})}else n.exposed||(n.exposed={});w&&n.render===$t&&(n.render=w),oe!=null&&(n.inheritAttrs=oe),te&&(n.components=te),F&&(n.directives=F)}function Zf(n,e,t=$t){Ie(n)&&(n=So(n));for(const i in n){const r=n[i];let s;Qe(r)?"default"in r?s=Qr(r.from||i,r.default,!0):s=Qr(r.from||i):s=Qr(r),gt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function xa(n,e,t){Zt(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nc(n,e,t,i){const r=i.includes(".")?Lc(t,i):()=>t[i];if(rt(n)){const s=e[n];Be(s)&&Ps(r,s)}else if(Be(n))Ps(r,n.bind(t));else if(Qe(n))if(Ie(n))n.forEach(s=>Nc(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&Ps(r,s,n)}}function jo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>os(l,c,a,!0)),os(l,e,a)),Qe(e)&&s.set(e,l),l}function os(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&os(n,s,t,!0),r&&r.forEach(a=>os(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Jf[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Jf={data:Ma,props:Sa,emits:Sa,methods:sr,computed:sr,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:sr,directives:sr,watch:eh,provide:Ma,inject:Qf};function Ma(n,e){return e?n?function(){return ft(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function Qf(n,e){return sr(So(n),So(e))}function So(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Mt(n,e){return n?[...new Set([].concat(n,e))]:e}function sr(n,e){return n?ft(Object.create(null),n,e):e}function Sa(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:ft(Object.create(null),va(n),va(e??{})):e}function eh(n,e){if(!n)return e;if(!e)return n;const t=ft(Object.create(null),n);for(const i in e)t[i]=Mt(n[i],e[i]);return t}function Fc(){return{app:null,config:{isNativeTag:yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let th=0;function nh(n,e){return function(i,r=null){Be(i)||(i=ft({},i)),r!=null&&!Qe(r)&&(r=null);const s=Fc(),a=new Set;let o=!1;const l=s.app={_uid:th++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Ch,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Be(c.install)?(a.add(c),c.install(l,...u)):Be(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const d=an(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,h),o=!0,l._container=c,c.__vue_app__=l,Jo(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){as=l;try{return c()}finally{as=null}}};return l}}let as=null;function ih(n,e){if(_t){let t=_t.provides;const i=_t.parent&&_t.parent.provides;i===t&&(t=_t.provides=Object.create(i)),t[n]=e}}function Qr(n,e,t=!1){const i=_t||on;if(i||as){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:as._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}function rh(n,e,t,i=!1){const r={},s={};is(s,vs,1),n.propsDefaults=Object.create(null),Oc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:df(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function sh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=qe(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ps(n.emitsOptions,d))continue;const p=e[d];if(l)if(We(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const x=Bi(d);r[x]=Eo(l,o,x,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Oc(n,e,r,s)&&(c=!0);let u;for(const h in o)(!e||!We(e,h)&&((u=qi(h))===h||!We(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Eo(l,o,h,void 0,n,!0)):delete r[h]);if(s!==o)for(const h in s)(!e||!We(e,h))&&(delete s[h],c=!0)}c&&Tn(n,"set","$attrs")}function Oc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;r&&We(r,u=Bi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ps(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=qe(t),c=o||Ze;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Eo(r,l,h,c[h],n,!We(c,h))}}return a}function Eo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=We(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Be(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Gi(r),i=c[t]=l.call(null,e),ti())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===qi(t))&&(i=!0))}return i}function Bc(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Be(n)){const u=h=>{l=!0;const[d,p]=Bc(h,e,!0);ft(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Qe(n)&&i.set(n,Ci),Ci;if(Ie(s))for(let u=0;u<s.length;u++){const h=Bi(s[u]);Ea(h)&&(a[h]=Ze)}else if(s)for(const u in s){const h=Bi(u);if(Ea(h)){const d=s[u],p=a[h]=Ie(d)||Be(d)?{type:d}:ft({},d);if(p){const x=ba(Boolean,p.type),g=ba(String,p.type);p[0]=x>-1,p[1]=g<0||x<g,(x>-1||We(p,"default"))&&o.push(h)}}}const c=[a,o];return Qe(n)&&i.set(n,c),c}function Ea(n){return n[0]!=="$"}function Ta(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function ya(n,e){return Ta(n)===Ta(e)}function ba(n,e){return Ie(e)?e.findIndex(t=>ya(t,n)):Be(e)&&ya(e,n)?0:-1}const zc=n=>n[0]==="_"||n==="$stable",Ko=n=>Ie(n)?n.map(nn):[nn(n)],oh=(n,e,t)=>{if(e._n)return e;const i=Rf((...r)=>Ko(e(...r)),t);return i._c=!1,i},Hc=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zc(r))continue;const s=n[r];if(Be(s))e[r]=oh(r,s,i);else if(s!=null){const a=Ko(s);e[r]=()=>a}}},Gc=(n,e)=>{const t=Ko(e);n.slots.default=()=>t},ah=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=qe(e),is(e,"_",t)):Hc(e,n.slots={})}else n.slots={},e&&Gc(n,e);is(n.slots,vs,1)},lh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ze;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ft(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Hc(e,r)),a=e}else e&&(Gc(n,e),a={default:1});if(s)for(const o in r)!zc(o)&&!(o in a)&&delete r[o]};function To(n,e,t,i,r=!1){if(Ie(n)){n.forEach((d,p)=>To(d,e&&(Ie(e)?e[p]:e),t,i,r));return}if(Jr(i)&&!r)return;const s=i.shapeFlag&4?Jo(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ze?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(rt(c)?(u[c]=null,We(h,c)&&(h[c]=null)):gt(c)&&(c.value=null)),Be(l))Dn(l,o,12,[a,u]);else{const d=rt(l),p=gt(l);if(d||p){const x=()=>{if(n.f){const g=d?We(h,l)?h[l]:u[l]:l.value;r?Ie(g)&&No(g,s):Ie(g)?g.includes(s)||g.push(s):d?(u[l]=[s],We(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,We(h,l)&&(h[l]=a)):p&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,Tt(x,t)):x()}}}const Tt=If;function ch(n){return uh(n)}function uh(n,e){const t=ho();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=$t,insertStaticContent:x}=n,g=(T,b,I,j=null,K=null,se=null,he=!1,J=null,ae=!!b.dynamicChildren)=>{if(T===b)return;T&&!Qi(T,b)&&(j=P(T),fe(T,K,se,!0),T=null),b.patchFlag===-2&&(ae=!1,b.dynamicChildren=null);const{type:ee,ref:v,shapeFlag:_}=b;switch(ee){case gs:m(T,b,I,j);break;case si:f(T,b,I,j);break;case Ds:T==null&&A(b,I,j,he);break;case tn:te(T,b,I,j,K,se,he,J,ae);break;default:_&1?w(T,b,I,j,K,se,he,J,ae):_&6?F(T,b,I,j,K,se,he,J,ae):(_&64||_&128)&&ee.process(T,b,I,j,K,se,he,J,ae,Re)}v!=null&&K&&To(v,T&&T.ref,se,b||T,!b)},m=(T,b,I,j)=>{if(T==null)i(b.el=o(b.children),I,j);else{const K=b.el=T.el;b.children!==T.children&&c(K,b.children)}},f=(T,b,I,j)=>{T==null?i(b.el=l(b.children||""),I,j):b.el=T.el},A=(T,b,I,j)=>{[T.el,T.anchor]=x(T.children,b,I,j,T.el,T.anchor)},E=({el:T,anchor:b},I,j)=>{let K;for(;T&&T!==b;)K=d(T),i(T,I,j),T=K;i(b,I,j)},y=({el:T,anchor:b})=>{let I;for(;T&&T!==b;)I=d(T),r(T),T=I;r(b)},w=(T,b,I,j,K,se,he,J,ae)=>{he=he||b.type==="svg",T==null?C(b,I,j,K,se,he,J,ae):M(T,b,K,se,he,J,ae)},C=(T,b,I,j,K,se,he,J)=>{let ae,ee;const{type:v,props:_,shapeFlag:U,transition:z,dirs:W}=T;if(ae=T.el=a(T.type,se,_&&_.is,_),U&8?u(ae,T.children):U&16&&Q(T.children,ae,null,j,K,se&&v!=="foreignObject",he,J),W&&Gn(T,null,j,"created"),D(ae,T,T.scopeId,he,j),_){for(const ve in _)ve!=="value"&&!$r(ve)&&s(ae,ve,null,_[ve],se,T.children,j,K,me);"value"in _&&s(ae,"value",null,_.value),(ee=_.onVnodeBeforeMount)&&Qt(ee,j,T)}W&&Gn(T,null,j,"beforeMount");const le=(!K||K&&!K.pendingBranch)&&z&&!z.persisted;le&&z.beforeEnter(ae),i(ae,b,I),((ee=_&&_.onVnodeMounted)||le||W)&&Tt(()=>{ee&&Qt(ee,j,T),le&&z.enter(ae),W&&Gn(T,null,j,"mounted")},K)},D=(T,b,I,j,K)=>{if(I&&p(T,I),j)for(let se=0;se<j.length;se++)p(T,j[se]);if(K){let se=K.subTree;if(b===se){const he=K.vnode;D(T,he,he.scopeId,he.slotScopeIds,K.parent)}}},Q=(T,b,I,j,K,se,he,J,ae=0)=>{for(let ee=ae;ee<T.length;ee++){const v=T[ee]=J?Pn(T[ee]):nn(T[ee]);g(null,v,b,I,j,K,se,he,J)}},M=(T,b,I,j,K,se,he)=>{const J=b.el=T.el;let{patchFlag:ae,dynamicChildren:ee,dirs:v}=b;ae|=T.patchFlag&16;const _=T.props||Ze,U=b.props||Ze;let z;I&&Vn(I,!1),(z=U.onVnodeBeforeUpdate)&&Qt(z,I,b,T),v&&Gn(b,T,I,"beforeUpdate"),I&&Vn(I,!0);const W=K&&b.type!=="foreignObject";if(ee?R(T.dynamicChildren,ee,J,I,j,W,se):he||H(T,b,J,null,I,j,W,se,!1),ae>0){if(ae&16)oe(J,b,_,U,I,j,K);else if(ae&2&&_.class!==U.class&&s(J,"class",null,U.class,K),ae&4&&s(J,"style",_.style,U.style,K),ae&8){const le=b.dynamicProps;for(let ve=0;ve<le.length;ve++){const de=le[ve],V=_[de],Ee=U[de];(Ee!==V||de==="value")&&s(J,de,V,Ee,K,T.children,I,j,me)}}ae&1&&T.children!==b.children&&u(J,b.children)}else!he&&ee==null&&oe(J,b,_,U,I,j,K);((z=U.onVnodeUpdated)||v)&&Tt(()=>{z&&Qt(z,I,b,T),v&&Gn(b,T,I,"updated")},j)},R=(T,b,I,j,K,se,he)=>{for(let J=0;J<b.length;J++){const ae=T[J],ee=b[J],v=ae.el&&(ae.type===tn||!Qi(ae,ee)||ae.shapeFlag&70)?h(ae.el):I;g(ae,ee,v,null,j,K,se,he,!0)}},oe=(T,b,I,j,K,se,he)=>{if(I!==j){if(I!==Ze)for(const J in I)!$r(J)&&!(J in j)&&s(T,J,I[J],null,he,b.children,K,se,me);for(const J in j){if($r(J))continue;const ae=j[J],ee=I[J];ae!==ee&&J!=="value"&&s(T,J,ee,ae,he,b.children,K,se,me)}"value"in j&&s(T,"value",I.value,j.value)}},te=(T,b,I,j,K,se,he,J,ae)=>{const ee=b.el=T?T.el:o(""),v=b.anchor=T?T.anchor:o("");let{patchFlag:_,dynamicChildren:U,slotScopeIds:z}=b;z&&(J=J?J.concat(z):z),T==null?(i(ee,I,j),i(v,I,j),Q(b.children,I,v,K,se,he,J,ae)):_>0&&_&64&&U&&T.dynamicChildren?(R(T.dynamicChildren,U,I,K,se,he,J),(b.key!=null||K&&b===K.subTree)&&Vc(T,b,!0)):H(T,b,I,v,K,se,he,J,ae)},F=(T,b,I,j,K,se,he,J,ae)=>{b.slotScopeIds=J,T==null?b.shapeFlag&512?K.ctx.activate(b,I,j,he,ae):X(b,I,j,K,se,he,ae):$(T,b,ae)},X=(T,b,I,j,K,se,he)=>{const J=T.component=Mh(T,j,K);if(Pc(T)&&(J.ctx.renderer=Re),Sh(J),J.asyncDep){if(K&&K.registerDep(J,ne),!T.el){const ae=J.subTree=an(si);f(null,ae,b,I)}return}ne(J,T,b,I,K,se,he)},$=(T,b,I)=>{const j=b.component=T.component;if(Pf(T,b,I))if(j.asyncDep&&!j.asyncResolved){G(j,b,I);return}else j.next=b,yf(j.update),j.update();else b.el=T.el,j.vnode=b},ne=(T,b,I,j,K,se,he)=>{const J=()=>{if(T.isMounted){let{next:v,bu:_,u:U,parent:z,vnode:W}=T,le=v,ve;Vn(T,!1),v?(v.el=W.el,G(T,v,he)):v=W,_&&Cs(_),(ve=v.props&&v.props.onVnodeBeforeUpdate)&&Qt(ve,z,v,W),Vn(T,!0);const de=Ls(T),V=T.subTree;T.subTree=de,g(V,de,h(V.el),P(V),T,K,se),v.el=de.el,le===null&&Uf(T,de.el),U&&Tt(U,K),(ve=v.props&&v.props.onVnodeUpdated)&&Tt(()=>Qt(ve,z,v,W),K)}else{let v;const{el:_,props:U}=b,{bm:z,m:W,parent:le}=T,ve=Jr(b);if(Vn(T,!1),z&&Cs(z),!ve&&(v=U&&U.onVnodeBeforeMount)&&Qt(v,le,b),Vn(T,!0),_&&Ce){const de=()=>{T.subTree=Ls(T),Ce(_,T.subTree,T,K,null)};ve?b.type.__asyncLoader().then(()=>!T.isUnmounted&&de()):de()}else{const de=T.subTree=Ls(T);g(null,de,I,j,T,K,se),b.el=de.el}if(W&&Tt(W,K),!ve&&(v=U&&U.onVnodeMounted)){const de=b;Tt(()=>Qt(v,le,de),K)}(b.shapeFlag&256||le&&Jr(le.vnode)&&le.vnode.shapeFlag&256)&&T.a&&Tt(T.a,K),T.isMounted=!0,b=I=j=null}},ae=T.effect=new zo(J,()=>Yo(ee),T.scope),ee=T.update=()=>ae.run();ee.id=T.uid,Vn(T,!0),ee()},G=(T,b,I)=>{b.component=T;const j=T.vnode.props;T.vnode=b,T.next=null,sh(T,b.props,j,I),lh(T,b.children,I),Yi(),_a(),ji()},H=(T,b,I,j,K,se,he,J,ae=!1)=>{const ee=T&&T.children,v=T?T.shapeFlag:0,_=b.children,{patchFlag:U,shapeFlag:z}=b;if(U>0){if(U&128){re(ee,_,I,j,K,se,he,J,ae);return}else if(U&256){ce(ee,_,I,j,K,se,he,J,ae);return}}z&8?(v&16&&me(ee,K,se),_!==ee&&u(I,_)):v&16?z&16?re(ee,_,I,j,K,se,he,J,ae):me(ee,K,se,!0):(v&8&&u(I,""),z&16&&Q(_,I,j,K,se,he,J,ae))},ce=(T,b,I,j,K,se,he,J,ae)=>{T=T||Ci,b=b||Ci;const ee=T.length,v=b.length,_=Math.min(ee,v);let U;for(U=0;U<_;U++){const z=b[U]=ae?Pn(b[U]):nn(b[U]);g(T[U],z,I,null,K,se,he,J,ae)}ee>v?me(T,K,se,!0,!1,_):Q(b,I,j,K,se,he,J,ae,_)},re=(T,b,I,j,K,se,he,J,ae)=>{let ee=0;const v=b.length;let _=T.length-1,U=v-1;for(;ee<=_&&ee<=U;){const z=T[ee],W=b[ee]=ae?Pn(b[ee]):nn(b[ee]);if(Qi(z,W))g(z,W,I,null,K,se,he,J,ae);else break;ee++}for(;ee<=_&&ee<=U;){const z=T[_],W=b[U]=ae?Pn(b[U]):nn(b[U]);if(Qi(z,W))g(z,W,I,null,K,se,he,J,ae);else break;_--,U--}if(ee>_){if(ee<=U){const z=U+1,W=z<v?b[z].el:j;for(;ee<=U;)g(null,b[ee]=ae?Pn(b[ee]):nn(b[ee]),I,W,K,se,he,J,ae),ee++}}else if(ee>U)for(;ee<=_;)fe(T[ee],K,se,!0),ee++;else{const z=ee,W=ee,le=new Map;for(ee=W;ee<=U;ee++){const xe=b[ee]=ae?Pn(b[ee]):nn(b[ee]);xe.key!=null&&le.set(xe.key,ee)}let ve,de=0;const V=U-W+1;let Ee=!1,be=0;const Ae=new Array(V);for(ee=0;ee<V;ee++)Ae[ee]=0;for(ee=z;ee<=_;ee++){const xe=T[ee];if(de>=V){fe(xe,K,se,!0);continue}let Ue;if(xe.key!=null)Ue=le.get(xe.key);else for(ve=W;ve<=U;ve++)if(Ae[ve-W]===0&&Qi(xe,b[ve])){Ue=ve;break}Ue===void 0?fe(xe,K,se,!0):(Ae[Ue-W]=ee+1,Ue>=be?be=Ue:Ee=!0,g(xe,b[Ue],I,null,K,se,he,J,ae),de++)}const Se=Ee?fh(Ae):Ci;for(ve=Se.length-1,ee=V-1;ee>=0;ee--){const xe=W+ee,Ue=b[xe],Xe=xe+1<v?b[xe+1].el:j;Ae[ee]===0?g(null,Ue,I,Xe,K,se,he,J,ae):Ee&&(ve<0||ee!==Se[ve]?Te(Ue,I,Xe,2):ve--)}}},Te=(T,b,I,j,K=null)=>{const{el:se,type:he,transition:J,children:ae,shapeFlag:ee}=T;if(ee&6){Te(T.component.subTree,b,I,j);return}if(ee&128){T.suspense.move(b,I,j);return}if(ee&64){he.move(T,b,I,Re);return}if(he===tn){i(se,b,I);for(let _=0;_<ae.length;_++)Te(ae[_],b,I,j);i(T.anchor,b,I);return}if(he===Ds){E(T,b,I);return}if(j!==2&&ee&1&&J)if(j===0)J.beforeEnter(se),i(se,b,I),Tt(()=>J.enter(se),K);else{const{leave:_,delayLeave:U,afterLeave:z}=J,W=()=>i(se,b,I),le=()=>{_(se,()=>{W(),z&&z()})};U?U(se,W,le):le()}else i(se,b,I)},fe=(T,b,I,j=!1,K=!1)=>{const{type:se,props:he,ref:J,children:ae,dynamicChildren:ee,shapeFlag:v,patchFlag:_,dirs:U}=T;if(J!=null&&To(J,null,I,T,!0),v&256){b.ctx.deactivate(T);return}const z=v&1&&U,W=!Jr(T);let le;if(W&&(le=he&&he.onVnodeBeforeUnmount)&&Qt(le,b,T),v&6)ge(T.component,I,j);else{if(v&128){T.suspense.unmount(I,j);return}z&&Gn(T,null,b,"beforeUnmount"),v&64?T.type.remove(T,b,I,K,Re,j):ee&&(se!==tn||_>0&&_&64)?me(ee,b,I,!1,!0):(se===tn&&_&384||!K&&v&16)&&me(ae,b,I),j&&k(T)}(W&&(le=he&&he.onVnodeUnmounted)||z)&&Tt(()=>{le&&Qt(le,b,T),z&&Gn(T,null,b,"unmounted")},I)},k=T=>{const{type:b,el:I,anchor:j,transition:K}=T;if(b===tn){ie(I,j);return}if(b===Ds){y(T);return}const se=()=>{r(I),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(T.shapeFlag&1&&K&&!K.persisted){const{leave:he,delayLeave:J}=K,ae=()=>he(I,se);J?J(T.el,se,ae):ae()}else se()},ie=(T,b)=>{let I;for(;T!==b;)I=d(T),r(T),T=I;r(b)},ge=(T,b,I)=>{const{bum:j,scope:K,update:se,subTree:he,um:J}=T;j&&Cs(j),K.stop(),se&&(se.active=!1,fe(he,T,b,I)),J&&Tt(J,b),Tt(()=>{T.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},me=(T,b,I,j=!1,K=!1,se=0)=>{for(let he=se;he<T.length;he++)fe(T[he],b,I,j,K)},P=T=>T.shapeFlag&6?P(T.component.subTree):T.shapeFlag&128?T.suspense.next():d(T.anchor||T.el),Pe=(T,b,I)=>{T==null?b._vnode&&fe(b._vnode,null,null,!0):g(b._vnode||null,T,b,null,null,null,I),_a(),yc(),b._vnode=T},Re={p:g,um:fe,m:Te,r:k,mt:X,mc:Q,pc:H,pbc:R,n:P,o:n};let pe,Ce;return e&&([pe,Ce]=e(Re)),{render:Pe,hydrate:pe,createApp:nh(Pe,pe)}}function Vn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Vc(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Pn(r[s]),o.el=a.el),t||Vc(a,o)),o.type===gs&&(o.el=a.el)}}function fh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const hh=n=>n.__isTeleport,tn=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),si=Symbol.for("v-cmt"),Ds=Symbol.for("v-stc"),lr=[];let Kt=null;function Pt(n=!1){lr.push(Kt=n?null:[])}function dh(){lr.pop(),Kt=lr[lr.length-1]||null}let pr=1;function Aa(n){pr+=n}function kc(n){return n.dynamicChildren=pr>0?Kt||Ci:null,dh(),pr>0&&Kt&&Kt.push(n),n}function Sn(n,e,t,i,r,s){return kc(Wt(n,e,t,i,r,s,!0))}function es(n,e,t,i,r){return kc(an(n,e,t,i,r,!0))}function ph(n){return n?n.__v_isVNode===!0:!1}function Qi(n,e){return n.type===e.type&&n.key===e.key}const vs="__vInternal",Wc=({key:n})=>n??null,ts=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?rt(n)||gt(n)||Be(n)?{i:on,r:n,k:e,f:!!t}:n:null);function Wt(n,e=null,t=null,i=0,r=null,s=n===tn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wc(e),ref:e&&ts(e),scopeId:ms,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return o?($o(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=rt(t)?8:16),pr>0&&!a&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const an=mh;function mh(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Yf)&&(n=si),ph(n)){const o=Hi(n,e,!0);return t&&$o(o,t),pr>0&&!s&&Kt&&(o.shapeFlag&6?Kt[Kt.indexOf(n)]=o:Kt.push(o)),o.patchFlag|=-2,o}if(bh(n)&&(n=n.__vccOpts),e){e=_h(e);let{class:o,style:l}=e;o&&!rt(o)&&(e.class=Qn(o)),Qe(l)&&(gc(l)&&!Ie(l)&&(l=ft({},l)),e.style=Pi(l))}const a=rt(n)?1:Df(n)?128:hh(n)?64:Qe(n)?4:Be(n)?2:0;return Wt(n,e,t,i,r,a,s,!0)}function _h(n){return n?gc(n)||vs in n?ft({},n):n:null}function Hi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?gh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Wc(o),ref:e&&e.ref?t&&r?Ie(r)?r.concat(ts(e)):[r,ts(e)]:ts(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hi(n.ssContent),ssFallback:n.ssFallback&&Hi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Xc(n=" ",e=0){return an(gs,null,n,e)}function Ii(n="",e=!1){return e?(Pt(),es(si,null,n)):an(si,null,n)}function nn(n){return n==null||typeof n=="boolean"?an(si):Ie(n)?an(tn,null,n.slice()):typeof n=="object"?Pn(n):an(gs,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hi(n)}function $o(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),$o(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(vs in e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:on},t=32):(e=String(e),i&64?(t=16,e=[Xc(e)]):t=8);n.children=e,n.shapeFlag|=t}function gh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Qn([e.class,i.class]));else if(r==="style")e.style=Pi([e.style,i.style]);else if(cs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Qt(n,e,t,i=null){Zt(n,e,7,[t,i])}const vh=Fc();let xh=0;function Mh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||vh,s={uid:xh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bc(i,r),emitsOptions:Ac(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=wf.bind(null,s),n.ce&&n.ce(s),s}let _t=null,Zo,ci,wa="__VUE_INSTANCE_SETTERS__";(ci=ho()[wa])||(ci=ho()[wa]=[]),ci.push(n=>_t=n),Zo=n=>{ci.length>1?ci.forEach(e=>e(n)):ci[0](n)};const Gi=n=>{Zo(n),n.scope.on()},ti=()=>{_t&&_t.scope.off(),Zo(null)};function qc(n){return n.vnode.shapeFlag&4}let mr=!1;function Sh(n,e=!1){mr=e;const{props:t,children:i}=n.vnode,r=qc(n);rh(n,t,r,e),ah(n,i);const s=r?Eh(n,e):void 0;return mr=!1,s}function Eh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=vc(new Proxy(n.ctx,Kf));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?yh(n):null;Gi(n),Yi();const s=Dn(i,n,0,[n.props,r]);if(ji(),ti(),ec(s)){if(s.then(ti,ti),e)return s.then(a=>{Ra(n,a,e)}).catch(a=>{ds(a,n,0)});n.asyncDep=s}else Ra(n,s,e)}else Yc(n,e)}function Ra(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Qe(e)&&(n.setupState=Sc(e)),Yc(n,t)}let Ca;function Yc(n,e,t){const i=n.type;if(!n.render){if(!e&&Ca&&!i.render){const r=i.template||jo(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=ft(ft({isCustomElement:s,delimiters:o},a),l);i.render=Ca(r,c)}}n.render=i.render||$t}Gi(n),Yi(),$f(n),ji(),ti()}function Th(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return At(n,"get","$attrs"),e[t]}}))}function yh(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Th(n)},slots:n.slots,emit:n.emit,expose:e}}function Jo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Sc(vc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ar)return ar[t](n)},has(e,t){return t in e||t in ar}}))}function bh(n){return Be(n)&&"__vccOpts"in n}const Ah=(n,e)=>Mf(n,e,mr),wh=Symbol.for("v-scx"),Rh=()=>Qr(wh),Ch="3.3.4",Lh="http://www.w3.org/2000/svg",Kn=typeof document<"u"?document:null,La=Kn&&Kn.createElement("template"),Ph={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Kn.createElementNS(Lh,n):Kn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{La.innerHTML=i?`<svg>${n}</svg>`:n;const o=La.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Uh(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Dh(n,e,t){const i=n.style,r=rt(t);if(t&&!r){if(e&&!rt(e))for(const s in e)t[s]==null&&yo(i,s,"");for(const s in t)yo(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Pa=/\s*!important$/;function yo(n,e,t){if(Ie(t))t.forEach(i=>yo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ih(n,e);Pa.test(t)?n.setProperty(qi(i),t.replace(Pa,""),"important"):n[i]=t}}const Ua=["Webkit","Moz","ms"],Is={};function Ih(n,e){const t=Is[e];if(t)return t;let i=Bi(e);if(i!=="filter"&&i in n)return Is[e]=i;i=ic(i);for(let r=0;r<Ua.length;r++){const s=Ua[r]+i;if(s in n)return Is[e]=s}return e}const Da="http://www.w3.org/1999/xlink";function Nh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Da,e.slice(6,e.length)):n.setAttributeNS(Da,e,t);else{const s=Fu(e);t==null||s&&!rc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Fh(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=rc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Oh(n,e,t,i){n.addEventListener(e,t,i)}function Bh(n,e,t,i){n.removeEventListener(e,t,i)}function zh(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Hh(e);if(i){const c=s[e]=kh(i,r);Oh(n,o,c,l)}else a&&(Bh(n,o,a,l),s[e]=void 0)}}const Ia=/(?:Once|Passive|Capture)$/;function Hh(n){let e;if(Ia.test(n)){e={};let i;for(;i=n.match(Ia);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):qi(n.slice(2)),e]}let Ns=0;const Gh=Promise.resolve(),Vh=()=>Ns||(Gh.then(()=>Ns=0),Ns=Date.now());function kh(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Zt(Wh(i,t.value),e,5,[i])};return t.value=n,t.attached=Vh(),t}function Wh(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Na=/^on[a-z]/,Xh=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Uh(n,i,r):e==="style"?Dh(n,t,i):cs(e)?Io(e)||zh(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qh(n,e,i,r))?Fh(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Nh(n,e,i,r))};function qh(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Na.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Na.test(e)&&rt(t)?!1:e in n}const Yh=ft({patchProp:Xh},Ph);let Fa;function jh(){return Fa||(Fa=ch(Yh))}const Kh=(...n)=>{const e=jh().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=$h(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function $h(n){return rt(n)?document.querySelector(n):n}const xs=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Zh={name:"Bootloader",data(){return{fontSize:16,lines:[" ","/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"," "," "," ","     ,@@@@@@@@@@@@@@@@@#.      #@@@@@@@@@@@@@@@@@@@@@@@@(         ,%@@@@@@@@@@@%,      /@@@@@%    /@@@@@@@@@@@@@@@@@#.       ","     @@@@@@@@@@@@@@@@@@@@@&.   @@@@@@@@@@@@@@@@@@@@@@@@@@@&    ,@@@@@@@@@@@@@@@@@@@,   @@@@@@@.   @@@@@@@@@@@@@@@@@@@@@%.    ","      *%@@@@@@@@@@@@@@@@@@@@&   (&@@@@@@@@@@@@@@@@@@@@@@@@@& .@@@@@@@@@@@@@@@@@@@@@@@. @@@@@@@.    /&@@@@@@@@@@@@@@@@@@@@&   ","                     *@@@@@@@@                      /@@@@@@@.@@@@@@@&.       .&@@@@@@@, *%@&(                     /@@@@@@@&  ","                       %@@@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@/&@@@@@@(           (@@@@@@&                             @@@@@@@) ","                       #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  @@@@@@@*           *@@@@@@@(@@@@@&                      &@@@@@@# ","                      (@@@@@@@*@@@@@@@@@@@@@@@@@@@@@@#,     /@@@@@@@/         *@@@@@@@/@@@@@@@.                    #@@@@@@@, ","                  ,(@@@@@@@@@/ @@@@@@@@@@@@@@@@@@@@@@@@*     %@@@@@@@@@(, ./@@@@@@@@@% @@@@@@@.                ,#@@@@@@@@@,  "," ,@@@@@@@@@@@@@@@@@@@@@@@@@&   @@@@@@@   .#@@@@@@@@@@@@@@@@,  .@@@@@@@@@@@@@@@@@@@@@.  @@@@@@@(@@@@@@@@@@@@@@@@@@@@@@@@@%    "," /@@@@@@@@@@@@@@@@@@@@@@&*     @@@@@@&         .#&@@@@@@@@@/     /@@@@@@@@@@@@@@@(     &@@@@@@#@@@@@@@@@@@@@@@@@@@@@@&,      ","   ,###############/,            (#/                 .(%%(            *(###/*            /#(.   ,###############/,           "," "," "," ","/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"," "],currentText:"",fontSizeSecond:18,secondParagraphActive:!1,currentTextSecond:"",lineSecond:"// BOOTING SYSTEM...",thirdParagraphActive:!1,currentTextThird:"",fontSizeThird:14,lineThird:"WELCOME 192.124.123!"}},mounted(){this.typeText(),this.calculateFontSize(),window.addEventListener("resize",this.calculateFontSize)},beforeDestroy(){window.removeEventListener("resize",this.calculateFontSize)},mounted(){this.typeText(),this.calculateFontSize(),window.addEventListener("resize",this.calculateFontSize)},beforeDestroy(){window.removeEventListener("resize",this.calculateFontSize)},methods:{async typeText(){for(let n of this.lines)this.currentText+=n+`
`,await new Promise(e=>setTimeout(e,25));this.secondParagraphActive=!0,await this.typeTextSecond(),this.thirdParagraphActive=!0,this.typeTextThird()},async typeTextSecond(){for(let n of this.lineSecond)this.currentTextSecond+=n,n==="."?await new Promise(e=>setTimeout(e,500)):await new Promise(e=>setTimeout(e,25))},async typeTextThird(){try{const e=await(await fetch("https://api.ipify.org?format=json")).json();this.currentTextThird=`WELCOME: ${e.ip}`}catch(n){console.error("Error fetching IP:",n),this.currentTextThird="WELCOME"}await new Promise(n=>setTimeout(n,1500)),this.$refs.bootloader.classList.add("fade-out"),await new Promise(n=>setTimeout(n,500)),this.$emit("animationCompleted")},calculateFontSize(){if(this.$refs.bootloader){let n=this.$refs.bootloader.offsetWidth;this.fontSize=n/100}}}},Jh={class:"bootloader",ref:"bootloader"};function Qh(n,e,t,i,r,s){return Pt(),Sn("div",Jh,[Wt("pre",{style:Pi({fontSize:r.fontSize+"px"})},Zr(r.currentText),5),r.secondParagraphActive?(Pt(),Sn("pre",{key:0,style:Pi({fontSize:r.fontSizeSecond+"px"})},Zr(r.currentTextSecond),5)):Ii("",!0),r.thirdParagraphActive?(Pt(),Sn("pre",{key:1,class:Qn({"fade-in":r.thirdParagraphActive}),style:Pi({fontSize:r.fontSizeThird+"px"})},Zr(r.currentTextThird),7)):Ii("",!0)],512)}const ed=xs(Zh,[["render",Qh],["__scopeId","data-v-1ec26add"]]),td="/dr0idLogoGlow.svg";const nd={name:"Header"},id=n=>(wc("data-v-ca7d0d42"),n=n(),Rc(),n),rd={class:"header-container"},sd=id(()=>Wt("img",{src:td,alt:"dr0idLogoGlow",class:"header-image"},null,-1)),od=[sd];function ad(n,e,t,i,r,s){return Pt(),Sn("div",rd,od)}const ld=xs(nd,[["render",ad],["__scopeId","data-v-ca7d0d42"]]);const cd={name:"Scrollblock",data(){return{boxes:[{id:1,label:"Box 1",link:"/page2",imageUrl:"/Images/MidiBurnerFaceplate.png"},{id:2,label:"Box 2",link:"/page3",imageUrl:"/Images/WormholeFaceplate.png"},{id:3,label:"Box 3",link:"/page1",imageUrl:"/Images/GANFaceplate.png"}],activeCategory:null,blinkingStates:{projects:!1,about:!1,contact:!1}}},methods:{blinkOnce(n){this.blinkingStates[n]=!0,setTimeout(()=>{this.blinkingStates[n]=!1},500)},toggleCategory(n){this.activeCategory=this.activeCategory===n?null:n}}},ud=n=>(wc("data-v-58c4f7c2"),n=n(),Rc(),n),fd={class:"scroll-container"},hd={class:"content"},dd={class:"splash-div"},pd=["href"],md=["src"],_d=ud(()=>Wt("div",{style:{height:"50px"}},null,-1));function gd(n,e,t,i,r,s){return Pt(),Sn("div",fd,[Wt("div",hd,[Wt("div",dd,[Wt("p",{class:Qn(["splash-text",{active:r.activeCategory==="projects"}]),onClick:e[0]||(e[0]=a=>s.toggleCategory("projects"))}," // PROJECTS ",2),r.activeCategory==="projects"?(Pt(!0),Sn(tn,{key:0},jf(r.boxes,a=>(Pt(),Sn("a",{key:a.id,href:a.link,class:"box-link"},[Wt("img",{src:a.imageUrl,alt:"Image",class:"box-image"},null,8,md),Xc(" "+Zr(a.label),1)],8,pd))),128)):Ii("",!0),Wt("p",{class:Qn(["splash-text",{active:r.activeCategory==="about"}]),onClick:e[1]||(e[1]=a=>s.toggleCategory("about"))}," // ABOUT ",2),Wt("p",{class:Qn(["splash-text",{active:r.activeCategory==="contact"}]),onClick:e[2]||(e[2]=a=>s.toggleCategory("contact"))}," // CONTACT ",2)])]),_d])}const vd=xs(cd,[["render",gd],["__scopeId","data-v-58c4f7c2"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="152",xd=0,Oa=1,Md=2,jc=1,Sd=2,gn=3,Fn=0,bt=1,xn=2,In=0,Ni=1,Ba=2,za=3,Ha=4,Ed=5,Ai=100,Td=101,yd=102,Ga=103,Va=104,bd=200,Ad=201,wd=202,Rd=203,Kc=204,$c=205,Cd=206,Ld=207,Pd=208,Ud=209,Dd=210,Id=0,Nd=1,Fd=2,bo=3,Od=4,Bd=5,zd=6,Hd=7,Zc=0,Gd=1,Vd=2,En=0,kd=1,Wd=2,Xd=3,qd=4,Yd=5,Jc=300,Vi=301,ki=302,Ao=303,wo=304,Ms=306,Ro=1e3,Yt=1001,Co=1002,Et=1003,ka=1004,Fs=1005,Ft=1006,jd=1007,_r=1008,oi=1009,Kd=1010,$d=1011,Qc=1012,Zd=1013,Zn=1014,Jn=1015,gr=1016,Jd=1017,Qd=1018,Fi=1020,ep=1021,jt=1023,tp=1024,np=1025,ni=1026,Wi=1027,ip=1028,rp=1029,sp=1030,op=1031,ap=1033,Os=33776,Bs=33777,zs=33778,Hs=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,lp=36196,ja=37492,Ka=37496,$a=37808,Za=37809,Ja=37810,Qa=37811,el=37812,tl=37813,nl=37814,il=37815,rl=37816,sl=37817,ol=37818,al=37819,ll=37820,cl=37821,Gs=36492,cp=36283,ul=36284,fl=36285,hl=36286,eu=3e3,ii=3001,up=3200,fp=3201,hp=0,dp=1,ri="",Ne="srgb",un="srgb-linear",tu="display-p3",Vs=7680,pp=519,dl=35044,pl="300 es",Lo=1035;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,Po=180/Math.PI;function vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function mp(n,e){return(n%e+e)%e}function Ws(n,e,t){return(1-t)*n+t*e}function ml(n){return(n&n-1)===0&&n!==0}function _p(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],x=i[8],g=r[0],m=r[3],f=r[6],A=r[1],E=r[4],y=r[7],w=r[2],C=r[5],D=r[8];return s[0]=a*g+o*A+l*w,s[3]=a*m+o*E+l*C,s[6]=a*f+o*y+l*D,s[1]=c*g+u*A+h*w,s[4]=c*m+u*E+h*C,s[7]=c*f+u*y+h*D,s[2]=d*g+p*A+x*w,s[5]=d*m+p*E+x*C,s[8]=d*f+p*y+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,x=t*h+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=h*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xs.makeScale(e,t)),this}rotate(e){return this.premultiply(Xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Ve;function nu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const _l={};function cr(n){n in _l||(_l[n]=!0,console.warn(n))}function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const gp=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vp=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function xp(n){return n.convertSRGBToLinear().applyMatrix3(vp)}function Mp(n){return n.applyMatrix3(gp).convertLinearToSRGB()}const Sp={[un]:n=>n,[Ne]:n=>n.convertSRGBToLinear(),[tu]:xp},Ep={[un]:n=>n,[Ne]:n=>n.convertLinearToSRGB(),[tu]:Mp},zt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return un},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sp[e],r=Ep[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let ui;class iu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=ls("canvas")),ui.width=e.width,ui.height=e.height;const i=ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ru{constructor(e=null){this.isSource=!0,this.uuid=vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ys(r[a].image)):s.push(Ys(r[a]))}else s=Ys(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ys(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class Ut extends Ki{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Yt,r=Yt,s=Ft,a=_r,o=jt,l=oi,c=Ut.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=vr(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ii?Ne:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?ii:eu}set encoding(e){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ii?Ne:ri}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Jc;Ut.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(p+1)/2,w=(f+1)/2,C=(u+d)/4,D=(h+g)/4,Q=(x+m)/4;return E>y&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=D/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=Q/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=Q/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(h-g)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ai extends Ki{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ii?Ne:ri),this.texture=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ft,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class su extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yp extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],p=s[a+1],x=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==x){let m=1-o;const f=l*d+c*p+u*x+h*g,A=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const w=Math.sqrt(E),C=Math.atan2(w,f*A);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const y=o*A;if(l=l*m+d*y,c=c*m+p*y,u=u*m+x*y,h=h*m+g*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*p-c*d,e[t+1]=l*x+u*d+c*h-o*p,e[t+2]=c*x+u*p+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"YZX":this._x=d*u*h+c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h-d*p*x;break;case"XZY":this._x=d*u*h-c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,h=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new B,gl=new xr;class Mr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fi.copy(e.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)hn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else r.boundingBox===null&&r.computeBoundingBox(),fi.copy(r.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Cr.subVectors(this.max,er),hi.subVectors(e.a,er),di.subVectors(e.b,er),pi.subVectors(e.c,er),wn.subVectors(di,hi),Rn.subVectors(pi,di),kn.subVectors(hi,pi);let t=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-kn.z,kn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,kn.z,0,-kn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-kn.y,kn.x,0];return!Ks(t,hi,di,pi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Ks(t,hi,di,pi,Cr))?!1:(Lr.crossVectors(wn,Rn),t=[Lr.x,Lr.y,Lr.z],Ks(t,hi,di,pi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new B,new B,new B,new B,new B,new B,new B,new B],hn=new B,fi=new Mr,hi=new B,di=new B,pi=new B,wn=new B,Rn=new B,kn=new B,er=new B,Cr=new B,Lr=new B,Wn=new B;function Ks(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wn.fromArray(n,s);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=i.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bp=new Mr,tr=new B,$s=new B;class ea{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(tr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add($s)),this.expandByPoint(tr.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new B,Zs=new B,Pr=new B,Cn=new B,Js=new B,Ur=new B,Qs=new B;class Ap{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zs.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Zs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=Cn.dot(this.direction),l=-Cn.dot(Pr),c=Cn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zs).addScaledVector(Pr,d),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,r,s){Js.subVectors(t,e),Ur.subVectors(i,e),Qs.crossVectors(Js,Ur);let a=this.direction.dot(Qs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(Ur.crossVectors(Cn,Ur));if(l<0)return null;const c=o*this.direction.dot(Js.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(Qs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,h,d,p,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,x=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,x=c*u,g=c*h;t[0]=d+g*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,x=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,x=o*u,g=o*h;t[0]=l*u,t[4]=x*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+x,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,Rp)}lookAt(e,t,i){const r=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),Ln.crossVectors(i,Ct),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),Ln.crossVectors(i,Ct)),Ln.normalize(),Dr.crossVectors(Ct,Ln),r[0]=Ln.x,r[4]=Dr.x,r[8]=Ct.x,r[1]=Ln.y,r[5]=Dr.y,r[9]=Ct.y,r[2]=Ln.z,r[6]=Dr.z,r[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],A=i[3],E=i[7],y=i[11],w=i[15],C=r[0],D=r[4],Q=r[8],M=r[12],R=r[1],oe=r[5],te=r[9],F=r[13],X=r[2],$=r[6],ne=r[10],G=r[14],H=r[3],ce=r[7],re=r[11],Te=r[15];return s[0]=a*C+o*R+l*X+c*H,s[4]=a*D+o*oe+l*$+c*ce,s[8]=a*Q+o*te+l*ne+c*re,s[12]=a*M+o*F+l*G+c*Te,s[1]=u*C+h*R+d*X+p*H,s[5]=u*D+h*oe+d*$+p*ce,s[9]=u*Q+h*te+d*ne+p*re,s[13]=u*M+h*F+d*G+p*Te,s[2]=x*C+g*R+m*X+f*H,s[6]=x*D+g*oe+m*$+f*ce,s[10]=x*Q+g*te+m*ne+f*re,s[14]=x*M+g*F+m*G+f*Te,s[3]=A*C+E*R+y*X+w*H,s[7]=A*D+E*oe+y*$+w*ce,s[11]=A*Q+E*te+y*ne+w*re,s[15]=A*M+E*F+y*G+w*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*p-i*l*p)+g*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],A=h*m*c-g*d*c+g*l*p-o*m*p-h*l*f+o*d*f,E=x*d*c-u*m*c-x*l*p+a*m*p+u*l*f-a*d*f,y=u*g*c-x*h*c+x*o*p-a*g*p-u*o*f+a*h*f,w=x*h*l-u*g*l-x*o*d+a*g*d+u*o*m-a*h*m,C=t*A+i*E+r*y+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=A*D,e[1]=(g*d*s-h*m*s-g*r*p+i*m*p+h*r*f-i*d*f)*D,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*f+i*l*f)*D,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*p-i*l*p)*D,e[4]=E*D,e[5]=(u*m*s-x*d*s+x*r*p-t*m*p-u*r*f+t*d*f)*D,e[6]=(x*l*s-a*m*s-x*r*c+t*m*c+a*r*f-t*l*f)*D,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*D,e[8]=y*D,e[9]=(x*h*s-u*g*s-x*i*p+t*g*p+u*i*f-t*h*f)*D,e[10]=(a*g*s-x*o*s+x*i*c-t*g*c-a*i*f+t*o*f)*D,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*p-t*o*p)*D,e[12]=w*D,e[13]=(u*g*r-x*h*r+x*i*d-t*g*d-u*i*m+t*h*m)*D,e[14]=(x*o*r-a*g*r-x*i*l+t*g*l+a*i*m-t*o*m)*D,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,x=s*h,g=a*u,m=a*h,f=o*h,A=l*c,E=l*u,y=l*h,w=i.x,C=i.y,D=i.z;return r[0]=(1-(g+f))*w,r[1]=(p+y)*w,r[2]=(x-E)*w,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+f))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(x+E)*D,r[9]=(m-A)*D,r[10]=(1-(d+g))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const c=1/s,u=1/a,h=1/o;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=h,Ht.elements[9]*=h,Ht.elements[10]*=h,t.setFromRotationMatrix(Ht),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),h=(t+e)*l,d=(i+r)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mi=new B,Ht=new ut,wp=new B(0,0,0),Rp=new B(1,1,1),Ln=new B,Dr=new B,Ct=new B,vl=new ut,xl=new xr;class Ss{constructor(e=0,t=0,i=0,r=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cp=0;const Ml=new B,_i=new xr,pn=new ut,Ir=new B,nr=new B,Lp=new B,Pp=new xr,Sl=new B(1,0,0),El=new B(0,1,0),Tl=new B(0,0,1),Up={type:"added"},yl={type:"removed"};class Dt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new B,t=new Ss,i=new xr,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ve}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(El,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(El,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(nr,Ir,this.up):pn.lookAt(Ir,nr,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(pn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new B,mn=new B,eo=new B,_n=new B,gi=new B,vi=new B,bl=new B,to=new B,no=new B,io=new B;let Nr=!1;class Xt{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gt.subVectors(r,t),mn.subVectors(i,t),eo.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(mn),l=Gt.dot(eo),c=mn.dot(mn),u=mn.dot(eo),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,i,r,s,a,o,l){return Nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nr=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,_n),l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),mn.subVectors(e,t),Gt.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Gt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nr=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,i),vi.subVectors(s,i),to.subVectors(e,i);const l=gi.dot(to),c=vi.dot(to);if(l<=0&&c<=0)return t.copy(i);no.subVectors(e,r);const u=gi.dot(no),h=vi.dot(no);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(gi,a);io.subVectors(e,s);const p=gi.dot(io),x=vi.dot(io);if(x>=0&&p<=x)return t.copy(s);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(vi,o);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return bl.subVectors(s,r),o=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(bl,o);const f=1/(m+g+d);return a=g*f,o=d*f,t.copy(i).addScaledVector(gi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dp=0;class Es extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Ni,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kc,this.blendDst=$c,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function ro(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=zt.workingColorSpace){if(e=mp(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ne){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const i=au[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return zt.fromWorkingColorSpace(pt.copy(this),e),Math.round(yt(pt.r*255,0,255))*65536+Math.round(yt(pt.g*255,0,255))*256+Math.round(yt(pt.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(pt.copy(this),t);const i=pt.r,r=pt.g,s=pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Ne){zt.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,i=pt.g,r=pt.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=i,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(Fr);const i=Ws(Vt.h,Fr.h,t),r=Ws(Vt.s,Fr.s,t),s=Ws(Vt.l,Fr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Je;Je.NAMES=au;class ta extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new B,Or=new $e;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lu extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cu extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cn extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ip=0;const Nt=new ut,so=new Dt,xi=new B,Lt=new Mr,ir=new Mr,lt=new B;class On extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?cu:lu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Lt.min,ir.min),Lt.expandByPoint(lt),lt.addVectors(Lt.max,ir.max),Lt.expandByPoint(lt)):(Lt.expandByPoint(ir.min),Lt.expandByPoint(ir.max))}Lt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)lt.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),lt.add(xi)),r=Math.max(r,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new B,u[R]=new B;const h=new B,d=new B,p=new B,x=new $e,g=new $e,m=new $e,f=new B,A=new B;function E(R,oe,te){h.fromArray(r,R*3),d.fromArray(r,oe*3),p.fromArray(r,te*3),x.fromArray(a,R*2),g.fromArray(a,oe*2),m.fromArray(a,te*2),d.sub(h),p.sub(h),g.sub(x),m.sub(x);const F=1/(g.x*m.y-m.x*g.y);isFinite(F)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(F),A.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(F),c[R].add(f),c[oe].add(f),c[te].add(f),u[R].add(A),u[oe].add(A),u[te].add(A))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,oe=y.length;R<oe;++R){const te=y[R],F=te.start,X=te.count;for(let $=F,ne=F+X;$<ne;$+=3)E(i[$+0],i[$+1],i[$+2])}const w=new B,C=new B,D=new B,Q=new B;function M(R){D.fromArray(s,R*3),Q.copy(D);const oe=c[R];w.copy(oe),w.sub(D.multiplyScalar(D.dot(oe))).normalize(),C.crossVectors(Q,oe);const F=C.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=F}for(let R=0,oe=y.length;R<oe;++R){const te=y[R],F=te.start,X=te.count;for(let $=F,ne=F+X;$<ne;$+=3)M(i[$+0]),M(i[$+1]),M(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)d[x++]=c[p++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new ut,en=new Ap,Br=new ea,wl=new B,Mi=new B,Si=new B,Ei=new B,oo=new B,zr=new B,Hr=new $e,Gr=new $e,Vr=new $e,Rl=new B,Cl=new B,Ll=new B,kr=new B,Wr=new B;class Mn extends Dt{constructor(e=new On,t=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(oo.fromBufferAttribute(h,e),a?zr.addScaledVector(oo,u):zr.addScaledVector(oo.sub(t),u))}t.add(zr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),en.copy(e.ray).recast(e.near),!(Br.containsPoint(en.origin)===!1&&(en.intersectSphere(Br,wl)===null||en.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(Al.copy(s).invert(),en.copy(e.ray).applyMatrix4(Al),!(i.boundingBox!==null&&en.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,x=h.length;p<x;p++){const g=h[p],m=s[g.materialIndex],f=Math.max(g.start,d.start),A=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let E=f,y=A;E<y;E+=3){const w=a.getX(E),C=a.getX(E+1),D=a.getX(E+2);i=Xr(this,m,e,en,l,c,u,w,C,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const f=a.getX(g),A=a.getX(g+1),E=a.getX(g+2);i=Xr(this,s,e,en,l,c,u,f,A,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,x=h.length;p<x;p++){const g=h[p],m=s[g.materialIndex],f=Math.max(g.start,d.start),A=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=f,y=A;E<y;E+=3){const w=E,C=E+1,D=E+2;i=Xr(this,m,e,en,l,c,u,w,C,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const f=g,A=g+1,E=g+2;i=Xr(this,s,e,en,l,c,u,f,A,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Np(n,e,t,i,r,s,a,o){let l;if(e.side===bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Fn,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:n}}function Xr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Mi),n.getVertexPosition(l,Si),n.getVertexPosition(c,Ei);const u=Np(n,e,t,i,Mi,Si,Ei,kr);if(u){r&&(Hr.fromBufferAttribute(r,o),Gr.fromBufferAttribute(r,l),Vr.fromBufferAttribute(r,c),u.uv=Xt.getInterpolation(kr,Mi,Si,Ei,Hr,Gr,Vr,new $e)),s&&(Hr.fromBufferAttribute(s,o),Gr.fromBufferAttribute(s,l),Vr.fromBufferAttribute(s,c),u.uv1=Xt.getInterpolation(kr,Mi,Si,Ei,Hr,Gr,Vr,new $e),u.uv2=u.uv1),a&&(Rl.fromBufferAttribute(a,o),Cl.fromBufferAttribute(a,l),Ll.fromBufferAttribute(a,c),u.normal=Xt.getInterpolation(kr,Mi,Si,Ei,Rl,Cl,Ll,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};Xt.getNormal(Mi,Si,Ei,h.normal),u.face=h}return u}class $i extends On{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function x(g,m,f,A,E,y,w,C,D,Q,M){const R=y/D,oe=w/Q,te=y/2,F=w/2,X=C/2,$=D+1,ne=Q+1;let G=0,H=0;const ce=new B;for(let re=0;re<ne;re++){const Te=re*oe-F;for(let fe=0;fe<$;fe++){const k=fe*R-te;ce[g]=k*A,ce[m]=Te*E,ce[f]=X,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[f]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(fe/D),h.push(1-re/Q),G+=1}}for(let re=0;re<Q;re++)for(let Te=0;Te<D;Te++){const fe=d+Te+$*re,k=d+Te+$*(re+1),ie=d+(Te+1)+$*(re+1),ge=d+(Te+1)+$*re;l.push(fe,k,ge),l.push(k,ie,ge),H+=6}o.addGroup(p,H,M),p+=H,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=Xi(n[t]);for(const r in i)e[r]=i[r]}return e}function Fp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uu(n){return n.getRenderTarget()===null?n.outputColorSpace:un}const Op={clone:Xi,merge:St};var Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fu extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends fu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,yi=1;class Hp extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ot(Ti,yi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ot(Ti,yi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ot(Ti,yi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ot(Ti,yi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ot(Ti,yi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ot(Ti,yi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=En,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class hu extends Ut{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gp extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ii?Ne:ri),this.texture=new hu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $i(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:In});s.uniforms.tEquirect.value=t;const a=new Mn(r,s),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=Ft),new Hp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ao=new B,Vp=new B,kp=new Ve;class qn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ao.subVectors(i,t).cross(Vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ao),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kp.getNormalMatrix(e),r=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ea,qr=new B;class du{constructor(e=new qn,t=new qn,i=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],h=i[7],d=i[8],p=i[9],x=i[10],g=i[11],m=i[12],f=i[13],A=i[14],E=i[15];return t[0].setComponents(o-r,h-l,g-d,E-m).normalize(),t[1].setComponents(o+r,h+l,g+d,E+m).normalize(),t[2].setComponents(o+s,h+c,g+p,E+f).normalize(),t[3].setComponents(o-s,h-c,g-p,E-f).normalize(),t[4].setComponents(o-a,h-u,g-x,E-A).normalize(),t[5].setComponents(o+a,h+u,g+x,E+A).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qr.x=r.normal.x>0?e.max.x:e.min.x,qr.y=r.normal.y>0?e.max.y:e.min.y,qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class na extends On{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<u;f++){const A=f*d-a;for(let E=0;E<c;E++){const y=E*h-s;x.push(y,-A,0),g.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const E=A+c*f,y=A+c*(f+1),w=A+1+c*(f+1),C=A+1+c*f;p.push(E,y,C),p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp="vec3 transformed = vec3( position );",Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,um=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#endif`,Im=`#if defined( USE_ENVMAP )
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,Gm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
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
#endif`,n_=`#ifdef USE_MORPHTARGETS
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
#endif`,i_=`#ifdef USE_MORPHTARGETS
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
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,f_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b_=`float getShadowMask() {
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
}`,A_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#ifdef USE_UV
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
#endif`,O_=`#ifdef USE_UV
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
#endif`,B_=`#ifdef USE_UV
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
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q_=`#include <common>
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
}`,Y_=`#if DEPTH_PACKING == 3200
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
}`,j_=`#define DISTANCE
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
}`,K_=`#define DISTANCE
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,J_=`uniform float scale;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,dg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,gg=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:jp,aomap_fragment:Kp,aomap_pars_fragment:$p,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:rm,clipping_planes_vertex:sm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:um,cube_uv_reflection_fragment:fm,defaultnormal_vertex:hm,displacementmap_pars_vertex:dm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:_m,encodings_fragment:gm,encodings_pars_fragment:vm,envmap_fragment:xm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Im,envmap_vertex:Tm,fog_vertex:ym,fog_pars_vertex:bm,fog_fragment:Am,fog_pars_fragment:wm,gradientmap_pars_fragment:Rm,lightmap_fragment:Cm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Um,lights_pars_begin:Dm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Fm,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:km,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:jm,map_pars_fragment:Km,map_particle_fragment:$m,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:f_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:d_,output_fragment:p_,packing:m_,premultiplied_alpha_fragment:__,project_vertex:g_,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:E_,shadowmap_pars_vertex:T_,shadowmap_vertex:y_,shadowmask_pars_fragment:b_,skinbase_vertex:A_,skinning_pars_vertex:w_,skinning_vertex:R_,skinnormal_vertex:C_,specularmap_fragment:L_,specularmap_pars_fragment:P_,tonemapping_fragment:U_,tonemapping_pars_fragment:D_,transmission_fragment:I_,transmission_pars_fragment:N_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:B_,worldpos_vertex:z_,background_vert:H_,background_frag:G_,backgroundCube_vert:V_,backgroundCube_frag:k_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distanceRGBA_vert:j_,distanceRGBA_frag:K_,equirect_vert:$_,equirect_frag:Z_,linedashed_vert:J_,linedashed_frag:Q_,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:hg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:_g,shadow_frag:gg,sprite_vert:vg,sprite_frag:xg},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},rn={basic:{uniforms:St([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:St([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:St([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:St([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:St([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:St([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:St([_e.points,_e.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:St([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:St([_e.common,_e.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:St([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:St([_e.sprite,_e.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:St([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:St([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};rn.physical={uniforms:St([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Yr={r:0,b:0,g:0};function Mg(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function x(m,f){let A=!1,E=f.isScene===!0?f.background:null;switch(E&&E.isTexture&&(E=(f.backgroundBlurriness>0?t:e).get(E)),E===null?g(o,l):E&&E.isColor&&(g(E,1),A=!0),n.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),A=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),A=!0;break}(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Ms)?(u===void 0&&(u=new Mn(new $i(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Xi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=E.colorSpace!==Ne,(h!==E||d!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Mn(new na(2,2),new li({name:"BackgroundMaterial",uniforms:Xi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=E.colorSpace!==Ne,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Yr,uu(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:x}}function Sg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(X,$,ne,G,H){let ce=!1;if(a){const re=g(G,ne,$);c!==re&&(c=re,p(c.object)),ce=f(X,G,ne,H),ce&&A(X,G,ne,H)}else{const re=$.wireframe===!0;(c.geometry!==G.id||c.program!==ne.id||c.wireframe!==re)&&(c.geometry=G.id,c.program=ne.id,c.wireframe=re,ce=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,Q(X,$,ne,G),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(X){return i.isWebGL2?n.bindVertexArray(X):s.bindVertexArrayOES(X)}function x(X){return i.isWebGL2?n.deleteVertexArray(X):s.deleteVertexArrayOES(X)}function g(X,$,ne){const G=ne.wireframe===!0;let H=o[X.id];H===void 0&&(H={},o[X.id]=H);let ce=H[$.id];ce===void 0&&(ce={},H[$.id]=ce);let re=ce[G];return re===void 0&&(re=m(d()),ce[G]=re),re}function m(X){const $=[],ne=[],G=[];for(let H=0;H<r;H++)$[H]=0,ne[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ne,attributeDivisors:G,object:X,attributes:{},index:null}}function f(X,$,ne,G){const H=c.attributes,ce=$.attributes;let re=0;const Te=ne.getAttributes();for(const fe in Te)if(Te[fe].location>=0){const ie=H[fe];let ge=ce[fe];if(ge===void 0&&(fe==="instanceMatrix"&&X.instanceMatrix&&(ge=X.instanceMatrix),fe==="instanceColor"&&X.instanceColor&&(ge=X.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;re++}return c.attributesNum!==re||c.index!==G}function A(X,$,ne,G){const H={},ce=$.attributes;let re=0;const Te=ne.getAttributes();for(const fe in Te)if(Te[fe].location>=0){let ie=ce[fe];ie===void 0&&(fe==="instanceMatrix"&&X.instanceMatrix&&(ie=X.instanceMatrix),fe==="instanceColor"&&X.instanceColor&&(ie=X.instanceColor));const ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),H[fe]=ge,re++}c.attributes=H,c.attributesNum=re,c.index=G}function E(){const X=c.newAttributes;for(let $=0,ne=X.length;$<ne;$++)X[$]=0}function y(X){w(X,0)}function w(X,$){const ne=c.newAttributes,G=c.enabledAttributes,H=c.attributeDivisors;ne[X]=1,G[X]===0&&(n.enableVertexAttribArray(X),G[X]=1),H[X]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,$),H[X]=$)}function C(){const X=c.newAttributes,$=c.enabledAttributes;for(let ne=0,G=$.length;ne<G;ne++)$[ne]!==X[ne]&&(n.disableVertexAttribArray(ne),$[ne]=0)}function D(X,$,ne,G,H,ce){i.isWebGL2===!0&&(ne===n.INT||ne===n.UNSIGNED_INT)?n.vertexAttribIPointer(X,$,ne,H,ce):n.vertexAttribPointer(X,$,ne,G,H,ce)}function Q(X,$,ne,G){if(i.isWebGL2===!1&&(X.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const H=G.attributes,ce=ne.getAttributes(),re=$.defaultAttributeValues;for(const Te in ce){const fe=ce[Te];if(fe.location>=0){let k=H[Te];if(k===void 0&&(Te==="instanceMatrix"&&X.instanceMatrix&&(k=X.instanceMatrix),Te==="instanceColor"&&X.instanceColor&&(k=X.instanceColor)),k!==void 0){const ie=k.normalized,ge=k.itemSize,me=t.get(k);if(me===void 0)continue;const P=me.buffer,Pe=me.type,Re=me.bytesPerElement;if(k.isInterleavedBufferAttribute){const pe=k.data,Ce=pe.stride,T=k.offset;if(pe.isInstancedInterleavedBuffer){for(let b=0;b<fe.locationSize;b++)w(fe.location+b,pe.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let b=0;b<fe.locationSize;b++)y(fe.location+b);n.bindBuffer(n.ARRAY_BUFFER,P);for(let b=0;b<fe.locationSize;b++)D(fe.location+b,ge/fe.locationSize,Pe,ie,Ce*Re,(T+ge/fe.locationSize*b)*Re)}else{if(k.isInstancedBufferAttribute){for(let pe=0;pe<fe.locationSize;pe++)w(fe.location+pe,k.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let pe=0;pe<fe.locationSize;pe++)y(fe.location+pe);n.bindBuffer(n.ARRAY_BUFFER,P);for(let pe=0;pe<fe.locationSize;pe++)D(fe.location+pe,ge/fe.locationSize,Pe,ie,ge*Re,ge/fe.locationSize*pe*Re)}}else if(re!==void 0){const ie=re[Te];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(fe.location,ie);break;case 3:n.vertexAttrib3fv(fe.location,ie);break;case 4:n.vertexAttrib4fv(fe.location,ie);break;default:n.vertexAttrib1fv(fe.location,ie)}}}}C()}function M(){te();for(const X in o){const $=o[X];for(const ne in $){const G=$[ne];for(const H in G)x(G[H].object),delete G[H];delete $[ne]}delete o[X]}}function R(X){if(o[X.id]===void 0)return;const $=o[X.id];for(const ne in $){const G=$[ne];for(const H in G)x(G[H].object),delete G[H];delete $[ne]}delete o[X.id]}function oe(X){for(const $ in o){const ne=o[$];if(ne[X.id]===void 0)continue;const G=ne[X.id];for(const H in G)x(G[H].object),delete G[H];delete ne[X.id]}}function te(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:te,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:oe,initAttributes:E,enableAttribute:y,disableUnusedAttributes:C}}function Eg(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Tg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,y=a||e.has("OES_texture_float"),w=E&&y,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:E,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:C}}function yg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new qn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,E=A*4;let y=f.clippingState||null;l.value=y,y=u(x,d,E,p);for(let w=0;w!==E;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,x){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==g;++E,y+=4)a.copy(h[E]).applyMatrix4(A,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function bg(n){let e=new WeakMap;function t(a,o){return o===Ao?a.mapping=Vi:o===wo&&(a.mapping=ki),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ao||o===wo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ag extends fu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,Pl=[.125,.215,.35,.446,.526,.582],$n=20,lo=new Ag,Ul=new Je;let co=null;const Yn=(1+Math.sqrt(5))/2,bi=1/Yn,Dl=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Yn,bi),new B(0,Yn,-bi),new B(bi,0,Yn),new B(-bi,0,Yn),new B(Yn,bi,0),new B(-Yn,bi,0)];class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){co=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:gr,format:jt,colorSpace:un,depthBuffer:!1},r=Nl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(s)),this._blurMaterial=Rg(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,i,r){const o=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ul),u.toneMapping=En,u.autoClear=!1;const p=new ta({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),x=new Mn(new $i,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Ul),g=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):A===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;jr(r,A*E,f>2?E:0,E,E),u.setRenderTarget(r),g&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dl[(r-1)%Dl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),g=s/x,m=isFinite(s)?1+Math.floor(u*g):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let A=0;for(let D=0;D<$n;++D){const Q=D/g,M=Math.exp(-Q*Q/2);f.push(M),D===0?A+=M:D<m&&(A+=2*M)}for(let D=0;D<f.length;D++)f[D]=f[D]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const y=this._sizeLods[r],w=3*y*(r>E-Ri?r-E+Ri:0),C=4*(this._cubeSize-y);jr(t,w,C,3*y,2*y),l.setRenderTarget(t),l.render(h,lo)}}function wg(n){const e=[],t=[],i=[];let r=n;const s=n-Ri+1+Pl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ri?l=Pl[a-n+Ri-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,g=3,m=2,f=1,A=new Float32Array(g*x*p),E=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let C=0;C<p;C++){const D=C%3*2/3-1,Q=C>2?0:-1,M=[D,Q,0,D+2/3,Q,0,D+2/3,Q+1,0,D,Q,0,D+2/3,Q+1,0,D,Q+1,0];A.set(M,g*x*C),E.set(d,m*x*C);const R=[C,C,C,C,C,C];y.set(R,f*x*C)}const w=new On;w.setAttribute("position",new ln(A,g)),w.setAttribute("uv",new ln(E,m)),w.setAttribute("faceIndex",new ln(y,f)),e.push(w),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nl(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=Ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rg(n,e,t){const i=new Float32Array($n),r=new B(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ia(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Fl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ol(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ia(){return`

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
	`}function Cg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ao||l===wo,u=l===Vi||l===ki;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Il(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Il(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Lg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pg(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const g=p[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,x=h.attributes.position;let g=0;if(p!==null){const A=p.array;g=p.version;for(let E=0,y=A.length;E<y;E+=3){const w=A[E+0],C=A[E+1],D=A[E+2];d.push(w,C,C,D,D,w)}}else{const A=x.array;g=x.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const w=E+0,C=E+1,D=E+2;d.push(w,C,C,D,D,w)}}const m=new(nu(d)?cu:lu)(d,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ug(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(s,p,o,d*l),t.update(p,s,1)}function h(d,p,x){if(x===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,d*l,x),t.update(p,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Dg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ig(n,e){return n[0]-e[0]}function Ng(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Fg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=x!==void 0?x.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let $=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],Q=u.morphAttributes.color||[];let M=0;E===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let R=u.attributes.position.count*M,oe=1;R>e.maxTextureSize&&(oe=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const te=new Float32Array(R*oe*4*g),F=new su(te,R,oe,g);F.type=Jn,F.needsUpdate=!0;const X=M*4;for(let ne=0;ne<g;ne++){const G=C[ne],H=D[ne],ce=Q[ne],re=R*oe*4*ne;for(let Te=0;Te<G.count;Te++){const fe=Te*X;E===!0&&(a.fromBufferAttribute(G,Te),te[re+fe+0]=a.x,te[re+fe+1]=a.y,te[re+fe+2]=a.z,te[re+fe+3]=0),y===!0&&(a.fromBufferAttribute(H,Te),te[re+fe+4]=a.x,te[re+fe+5]=a.y,te[re+fe+6]=a.z,te[re+fe+7]=0),w===!0&&(a.fromBufferAttribute(ce,Te),te[re+fe+8]=a.x,te[re+fe+9]=a.y,te[re+fe+10]=a.z,te[re+fe+11]=ce.itemSize===4?a.w:1)}}m={count:g,texture:F,size:new $e(R,oe)},s.set(u,m),u.addEventListener("dispose",$)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const A=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",A),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==x){g=[];for(let y=0;y<x;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<x;y++){const w=g[y];w[0]=y,w[1]=d[y]}g.sort(Ng);for(let y=0;y<8;y++)y<x&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Ig);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let A=0;for(let y=0;y<8;y++){const w=o[y],C=w[0],D=w[1];C!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+y)!==m[C]&&u.setAttribute("morphTarget"+y,m[C]),f&&u.getAttribute("morphNormal"+y)!==f[C]&&u.setAttribute("morphNormal"+y,f[C]),r[y]=D,A+=D):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const E=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Og(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const mu=new Ut,_u=new su,gu=new yp,vu=new hu,Bl=[],zl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Vl=new Float32Array(4);function Zi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bl[r];if(s===void 0&&(s=new Float32Array(r),Bl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ts(n,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),ot(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),ot(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),ot(t,e)}}function Vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Vl.set(i),n.uniformMatrix2fv(this.addr,!1,Vl),ot(t,i)}}function kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Gl.set(i),n.uniformMatrix3fv(this.addr,!1,Gl),ot(t,i)}}function Wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Hl.set(i),n.uniformMatrix4fv(this.addr,!1,Hl),ot(t,i)}}function Xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),ot(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),ot(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),ot(t,e)}}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),ot(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),ot(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),ot(t,e)}}function Qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||mu,r)}function ev(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gu,r)}function tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vu,r)}function nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_u,r)}function iv(n){switch(n){case 5126:return Bg;case 35664:return zg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return kg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return jg;case 5125:return Kg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(n,e){n.uniform1fv(this.addr,e)}function sv(n,e){const t=Zi(e,this.size,2);n.uniform2fv(this.addr,t)}function ov(n,e){const t=Zi(e,this.size,3);n.uniform3fv(this.addr,t)}function av(n,e){const t=Zi(e,this.size,4);n.uniform4fv(this.addr,t)}function lv(n,e){const t=Zi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cv(n,e){const t=Zi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uv(n,e){const t=Zi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fv(n,e){n.uniform1iv(this.addr,e)}function hv(n,e){n.uniform2iv(this.addr,e)}function dv(n,e){n.uniform3iv(this.addr,e)}function pv(n,e){n.uniform4iv(this.addr,e)}function mv(n,e){n.uniform1uiv(this.addr,e)}function _v(n,e){n.uniform2uiv(this.addr,e)}function gv(n,e){n.uniform3uiv(this.addr,e)}function vv(n,e){n.uniform4uiv(this.addr,e)}function xv(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||mu,s[a])}function Mv(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||gu,s[a])}function Sv(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vu,s[a])}function Ev(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||_u,s[a])}function Tv(n){switch(n){case 5126:return rv;case 35664:return sv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return fv;case 35667:case 35671:return hv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return _v;case 36295:return gv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Ev}}class yv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=iv(t.type)}}class bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Tv(t.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function kl(n,e){n.seq.push(e),n.map[e.id]=e}function wv(n,e,t){const i=n.name,r=i.length;for(uo.lastIndex=0;;){const s=uo.exec(i),a=uo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){kl(t,c===void 0?new yv(o,n,e):new bv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Av(o),kl(t,h)),t=h}}}class ns{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);wv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Wl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Rv=0;function Cv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Lv(n){switch(n){case un:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Xl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Cv(n.getShaderSource(e),a)}else return r}function Pv(n,e){const t=Lv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Uv(n,e){let t;switch(e){case kd:t="Linear";break;case Wd:t="Reinhard";break;case Xd:t="OptimizedCineon";break;case qd:t="ACESFilmic";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function Iv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Nv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function or(n){return n!==""}function ql(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(n){return n.replace(Fv,Ov)}function Ov(n,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Uo(t)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(n){return n.replace(Bv,zv)}function zv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vi:case ki:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case Vd:e="ENVMAP_BLENDING_ADD";break}return e}function Wv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Xv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hv(t),c=Gv(t),u=Vv(t),h=kv(t),d=Wv(t),p=t.isWebGL2?"":Dv(t),x=Iv(s),g=r.createProgram();let m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[x].filter(or).join(`
`),m.length>0&&(m+=`
`),f=[p,x].filter(or).join(`
`),f.length>0&&(f+=`
`)):(m=[Kl(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),f=[p,Kl(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Oe.tonemapping_pars_fragment:"",t.toneMapping!==En?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Pv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Uo(a),a=ql(a,t),a=Yl(a,t),o=Uo(o),o=ql(o,t),o=Yl(o,t),a=jl(a),o=jl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=A+m+a,y=A+f+o,w=Wl(r,r.VERTEX_SHADER,E),C=Wl(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,w),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(w).trim(),oe=r.getShaderInfoLog(C).trim();let te=!0,F=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,C);else{const X=Xl(r,w,"vertex"),$=Xl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+X+`
`+$)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||oe==="")&&(F=!1);F&&(this.diagnostics={runnable:te,programLog:M,vertexShader:{log:R,prefix:m},fragmentShader:{log:oe,prefix:f}})}r.deleteShader(w),r.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new ns(r,g)),D};let Q;return this.getAttributes=function(){return Q===void 0&&(Q=Nv(r,g)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}let qv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jv(e),t.set(e,i)),i}}class jv{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}}function Kv(n,e,t,i,r,s,a){const o=new ou,l=new Yv,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===1?"uv1":M===2?"uv2":M===3?"uv3":"uv"}function m(M,R,oe,te,F){const X=te.fog,$=F.geometry,ne=M.isMeshStandardMaterial?te.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||ne),H=G&&G.mapping===Ms?G.image.height:null,ce=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Te=re!==void 0?re.length:0;let fe=0;$.morphAttributes.position!==void 0&&(fe=1),$.morphAttributes.normal!==void 0&&(fe=2),$.morphAttributes.color!==void 0&&(fe=3);let k,ie,ge,me;if(ce){const je=rn[ce];k=je.vertexShader,ie=je.fragmentShader}else k=M.vertexShader,ie=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const P=n.getRenderTarget(),Pe=F.isInstancedMesh===!0,Re=!!M.map,pe=!!M.matcap,Ce=!!G,T=!!M.aoMap,b=!!M.lightMap,I=!!M.bumpMap,j=!!M.normalMap,K=!!M.displacementMap,se=!!M.emissiveMap,he=!!M.metalnessMap,J=!!M.roughnessMap,ae=M.clearcoat>0,ee=M.iridescence>0,v=M.sheen>0,_=M.transmission>0,U=ae&&!!M.clearcoatMap,z=ae&&!!M.clearcoatNormalMap,W=ae&&!!M.clearcoatRoughnessMap,le=ee&&!!M.iridescenceMap,ve=ee&&!!M.iridescenceThicknessMap,de=v&&!!M.sheenColorMap,V=v&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,be=!!M.specularColorMap,Ae=!!M.specularIntensityMap,Se=_&&!!M.transmissionMap,xe=_&&!!M.thicknessMap,Ue=!!M.gradientMap,Xe=!!M.alphaMap,et=M.alphaTest>0,L=!!M.extensions,q=!!$.attributes.uv1,ue=!!$.attributes.uv2,Me=!!$.attributes.uv3;return{isWebGL2:u,shaderID:ce,shaderName:M.type,vertexShader:k,fragmentShader:ie,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:un,map:Re,matcap:pe,envMap:Ce,envMapMode:Ce&&G.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:b,bumpMap:I,normalMap:j,displacementMap:d&&K,emissiveMap:se,normalMapObjectSpace:j&&M.normalMapType===dp,normalMapTangentSpace:j&&M.normalMapType===hp,metalnessMap:he,roughnessMap:J,clearcoat:ae,clearcoatMap:U,clearcoatNormalMap:z,clearcoatRoughnessMap:W,iridescence:ee,iridescenceMap:le,iridescenceThicknessMap:ve,sheen:v,sheenColorMap:de,sheenRoughnessMap:V,specularMap:Ee,specularColorMap:be,specularIntensityMap:Ae,transmission:_,transmissionMap:Se,thicknessMap:xe,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===Ni,alphaMap:Xe,alphaTest:et,combine:M.combine,mapUv:Re&&g(M.map.channel),aoMapUv:T&&g(M.aoMap.channel),lightMapUv:b&&g(M.lightMap.channel),bumpMapUv:I&&g(M.bumpMap.channel),normalMapUv:j&&g(M.normalMap.channel),displacementMapUv:K&&g(M.displacementMap.channel),emissiveMapUv:se&&g(M.emissiveMap.channel),metalnessMapUv:he&&g(M.metalnessMap.channel),roughnessMapUv:J&&g(M.roughnessMap.channel),clearcoatMapUv:U&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:z&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(M.sheenRoughnessMap.channel),specularMapUv:Ee&&g(M.specularMap.channel),specularColorMapUv:be&&g(M.specularColorMap.channel),specularIntensityMapUv:Ae&&g(M.specularIntensityMap.channel),transmissionMapUv:Se&&g(M.transmissionMap.channel),thicknessMapUv:xe&&g(M.thicknessMap.channel),alphaMapUv:Xe&&g(M.alphaMap.channel),vertexTangents:j&&!!$.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:q,vertexUv2s:ue,vertexUv3s:Me,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(Re||Xe),fog:!!X,useFog:M.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&oe.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:En,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:L&&M.extensions.derivatives===!0,extensionFragDepth:L&&M.extensions.fragDepth===!0,extensionDrawBuffers:L&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const oe in M.defines)R.push(oe),R.push(M.defines[oe]);return M.isRawShaderMaterial===!1&&(A(R,M),E(R,M),R.push(n.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function A(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function E(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),M.push(o.mask)}function y(M){const R=x[M.type];let oe;if(R){const te=rn[R];oe=Op.clone(te.uniforms)}else oe=M.uniforms;return oe}function w(M,R){let oe;for(let te=0,F=c.length;te<F;te++){const X=c[te];if(X.cacheKey===R){oe=X,++oe.usedTimes;break}}return oe===void 0&&(oe=new Xv(n,R,M,s),c.push(oe)),oe}function C(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function D(M){l.remove(M)}function Q(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:D,programs:c,dispose:Q}}function $v(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $l(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,p,x,g,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,d,p,x,g,m){const f=a(h,d,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,x,g,m){const f=a(h,d,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Zv),i.length>1&&i.sort(d||$l),r.length>1&&r.sort(d||$l)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Jv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Zl,n.set(i,[a])):r>=s.length?(a=new Zl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function ex(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tx=0;function nx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ix(n,e){const t=new Qv,i=ex(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,a=new ut,o=new ut;function l(u,h){let d=0,p=0,x=0;for(let oe=0;oe<9;oe++)r.probe[oe].set(0,0,0);let g=0,m=0,f=0,A=0,E=0,y=0,w=0,C=0,D=0,Q=0;u.sort(nx);const M=h===!0?Math.PI:1;for(let oe=0,te=u.length;oe<te;oe++){const F=u[oe],X=F.color,$=F.intensity,ne=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=X.r*$*M,p+=X.g*$*M,x+=X.b*$*M;else if(F.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(F.sh.coefficients[H],$);else if(F.isDirectionalLight){const H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const ce=F.shadow,re=i.get(F);re.shadowBias=ce.bias,re.shadowNormalBias=ce.normalBias,re.shadowRadius=ce.radius,re.shadowMapSize=ce.mapSize,r.directionalShadow[g]=re,r.directionalShadowMap[g]=G,r.directionalShadowMatrix[g]=F.shadow.matrix,y++}r.directional[g]=H,g++}else if(F.isSpotLight){const H=t.get(F);H.position.setFromMatrixPosition(F.matrixWorld),H.color.copy(X).multiplyScalar($*M),H.distance=ne,H.coneCos=Math.cos(F.angle),H.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),H.decay=F.decay,r.spot[f]=H;const ce=F.shadow;if(F.map&&(r.spotLightMap[D]=F.map,D++,ce.updateMatrices(F),F.castShadow&&Q++),r.spotLightMatrix[f]=ce.matrix,F.castShadow){const re=i.get(F);re.shadowBias=ce.bias,re.shadowNormalBias=ce.normalBias,re.shadowRadius=ce.radius,re.shadowMapSize=ce.mapSize,r.spotShadow[f]=re,r.spotShadowMap[f]=G,C++}f++}else if(F.isRectAreaLight){const H=t.get(F);H.color.copy(X).multiplyScalar($),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),r.rectArea[A]=H,A++}else if(F.isPointLight){const H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*M),H.distance=F.distance,H.decay=F.decay,F.castShadow){const ce=F.shadow,re=i.get(F);re.shadowBias=ce.bias,re.shadowNormalBias=ce.normalBias,re.shadowRadius=ce.radius,re.shadowMapSize=ce.mapSize,re.shadowCameraNear=ce.camera.near,re.shadowCameraFar=ce.camera.far,r.pointShadow[m]=re,r.pointShadowMap[m]=G,r.pointShadowMatrix[m]=F.shadow.matrix,w++}r.point[m]=H,m++}else if(F.isHemisphereLight){const H=t.get(F);H.skyColor.copy(F.color).multiplyScalar($*M),H.groundColor.copy(F.groundColor).multiplyScalar($*M),r.hemi[E]=H,E++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==g||R.pointLength!==m||R.spotLength!==f||R.rectAreaLength!==A||R.hemiLength!==E||R.numDirectionalShadows!==y||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==D)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=A,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+D-Q,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=Q,R.directionalLength=g,R.pointLength=m,R.spotLength=f,R.rectAreaLength=A,R.hemiLength=E,R.numDirectionalShadows=y,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=D,r.version=tx++)}function c(u,h){let d=0,p=0,x=0,g=0,m=0;const f=h.matrixWorldInverse;for(let A=0,E=u.length;A<E;A++){const y=u[A];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),d++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Jl(n,e){const t=new ix(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Jl(n,e),t.set(s,[l])):a>=o.length?(l=new Jl(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class sx extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ox extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`;function cx(n,e,t){let i=new du;const r=new $e,s=new $e,a=new ct,o=new sx({depthPacking:fp}),l=new ox,c={},u=t.maxTextureSize,h={[Fn]:bt,[bt]:Fn,[xn]:xn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ax,fragmentShader:lx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new On;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let f=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const Q=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(In),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=f!==gn&&this.type===gn,F=f===gn&&this.type!==gn;for(let X=0,$=w.length;X<$;X++){const ne=w[X],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const H=G.getFrameExtents();if(r.multiply(H),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,G.mapSize.y=s.y)),G.map===null||te===!0||F===!0){const re=this.type!==gn?{minFilter:Et,magFilter:Et}:{};G.map!==null&&G.map.dispose(),G.map=new ai(r.x,r.y,re),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ce=G.getViewportCount();for(let re=0;re<ce;re++){const Te=G.getViewport(re);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),oe.viewport(a),G.updateMatrices(ne,re),i=G.getFrustum(),y(C,D,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&A(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(Q,M,R)};function A(w,C){const D=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,D,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,D,p,g,null)}function E(w,C,D,Q){let M=null;const R=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const oe=M.uuid,te=C.uuid;let F=c[oe];F===void 0&&(F={},c[oe]=F);let X=F[te];X===void 0&&(X=M.clone(),F[te]=X),M=X}if(M.visible=C.visible,M.wireframe=C.wireframe,Q===gn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const oe=n.properties.get(M);oe.light=D}return M}function y(w,C,D,Q,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const te=e.update(w),F=w.material;if(Array.isArray(F)){const X=te.groups;for(let $=0,ne=X.length;$<ne;$++){const G=X[$],H=F[G.materialIndex];if(H&&H.visible){const ce=E(w,H,Q,M);n.renderBufferDirect(D,null,te,ce,w,G)}}}else if(F.visible){const X=E(w,F,Q,M);n.renderBufferDirect(D,null,te,X,w,null)}}const oe=w.children;for(let te=0,F=oe.length;te<F;te++)y(oe[te],C,D,Q,M)}}function ux(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const q=new ct;let ue=null;const Me=new ct(0,0,0,0);return{setMask:function(ye){ue!==ye&&!L&&(n.colorMask(ye,ye,ye,ye),ue=ye)},setLocked:function(ye){L=ye},setClear:function(ye,je,Ke,ht,bn){bn===!0&&(ye*=ht,je*=ht,Ke*=ht),q.set(ye,je,Ke,ht),Me.equals(q)===!1&&(n.clearColor(ye,je,Ke,ht),Me.copy(q))},reset:function(){L=!1,ue=null,Me.set(-1,0,0,0)}}}function s(){let L=!1,q=null,ue=null,Me=null;return{setTest:function(ye){ye?P(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ye){q!==ye&&!L&&(n.depthMask(ye),q=ye)},setFunc:function(ye){if(ue!==ye){switch(ye){case Id:n.depthFunc(n.NEVER);break;case Nd:n.depthFunc(n.ALWAYS);break;case Fd:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case Od:n.depthFunc(n.EQUAL);break;case Bd:n.depthFunc(n.GEQUAL);break;case zd:n.depthFunc(n.GREATER);break;case Hd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ye}},setLocked:function(ye){L=ye},setClear:function(ye){Me!==ye&&(n.clearDepth(ye),Me=ye)},reset:function(){L=!1,q=null,ue=null,Me=null}}}function a(){let L=!1,q=null,ue=null,Me=null,ye=null,je=null,Ke=null,ht=null,bn=null;return{setTest:function(tt){L||(tt?P(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(tt){q!==tt&&!L&&(n.stencilMask(tt),q=tt)},setFunc:function(tt,It,Jt){(ue!==tt||Me!==It||ye!==Jt)&&(n.stencilFunc(tt,It,Jt),ue=tt,Me=It,ye=Jt)},setOp:function(tt,It,Jt){(je!==tt||Ke!==It||ht!==Jt)&&(n.stencilOp(tt,It,Jt),je=tt,Ke=It,ht=Jt)},setLocked:function(tt){L=tt},setClear:function(tt){bn!==tt&&(n.clearStencil(tt),bn=tt)},reset:function(){L=!1,q=null,ue=null,Me=null,ye=null,je=null,Ke=null,ht=null,bn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},x=new WeakMap,g=[],m=null,f=!1,A=null,E=null,y=null,w=null,C=null,D=null,Q=null,M=!1,R=null,oe=null,te=null,F=null,X=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),ne=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ne=G>=2);let ce=null,re={};const Te=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),k=new ct().fromArray(Te),ie=new ct().fromArray(fe);function ge(L,q,ue,Me){const ye=new Uint8Array(4),je=n.createTexture();n.bindTexture(L,je),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ue;Ke++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(q,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(q+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return je}const me={};me[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),P(n.DEPTH_TEST),l.setFunc(bo),K(!1),se(Oa),P(n.CULL_FACE),I(In);function P(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Pe(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Re(L,q){return p[L]!==q?(n.bindFramebuffer(L,q),p[L]=q,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=q),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=q)),!0):!1}function pe(L,q){let ue=g,Me=!1;if(L)if(ue=x.get(q),ue===void 0&&(ue=[],x.set(q,ue)),L.isWebGLMultipleRenderTargets){const ye=L.texture;if(ue.length!==ye.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let je=0,Ke=ye.length;je<Ke;je++)ue[je]=n.COLOR_ATTACHMENT0+je;ue.length=ye.length,Me=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Me=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ce(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const T={[Ai]:n.FUNC_ADD,[Td]:n.FUNC_SUBTRACT,[yd]:n.FUNC_REVERSE_SUBTRACT};if(i)T[Ga]=n.MIN,T[Va]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(T[Ga]=L.MIN_EXT,T[Va]=L.MAX_EXT)}const b={[bd]:n.ZERO,[Ad]:n.ONE,[wd]:n.SRC_COLOR,[Kc]:n.SRC_ALPHA,[Dd]:n.SRC_ALPHA_SATURATE,[Pd]:n.DST_COLOR,[Cd]:n.DST_ALPHA,[Rd]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Ld]:n.ONE_MINUS_DST_ALPHA};function I(L,q,ue,Me,ye,je,Ke,ht){if(L===In){f===!0&&(Pe(n.BLEND),f=!1);return}if(f===!1&&(P(n.BLEND),f=!0),L!==Ed){if(L!==A||ht!==M){if((E!==Ai||C!==Ai)&&(n.blendEquation(n.FUNC_ADD),E=Ai,C=Ai),ht)switch(L){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.ONE,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ha:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ha:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,w=null,D=null,Q=null,A=L,M=ht}return}ye=ye||q,je=je||ue,Ke=Ke||Me,(q!==E||ye!==C)&&(n.blendEquationSeparate(T[q],T[ye]),E=q,C=ye),(ue!==y||Me!==w||je!==D||Ke!==Q)&&(n.blendFuncSeparate(b[ue],b[Me],b[je],b[Ke]),y=ue,w=Me,D=je,Q=Ke),A=L,M=!1}function j(L,q){L.side===xn?Pe(n.CULL_FACE):P(n.CULL_FACE);let ue=L.side===bt;q&&(ue=!ue),K(ue),L.blending===Ni&&L.transparent===!1?I(In):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Me=L.stencilWrite;c.setTest(Me),Me&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),J(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(L){R!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),R=L)}function se(L){L!==xd?(P(n.CULL_FACE),L!==oe&&(L===Oa?n.cullFace(n.BACK):L===Md?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),oe=L}function he(L){L!==te&&(ne&&n.lineWidth(L),te=L)}function J(L,q,ue){L?(P(n.POLYGON_OFFSET_FILL),(F!==q||X!==ue)&&(n.polygonOffset(q,ue),F=q,X=ue)):Pe(n.POLYGON_OFFSET_FILL)}function ae(L){L?P(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function ee(L){L===void 0&&(L=n.TEXTURE0+$-1),ce!==L&&(n.activeTexture(L),ce=L)}function v(L,q,ue){ue===void 0&&(ce===null?ue=n.TEXTURE0+$-1:ue=ce);let Me=re[ue];Me===void 0&&(Me={type:void 0,texture:void 0},re[ue]=Me),(Me.type!==L||Me.texture!==q)&&(ce!==ue&&(n.activeTexture(ue),ce=ue),n.bindTexture(L,q||me[L]),Me.type=L,Me.texture=q)}function _(){const L=re[ce];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function U(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(L){k.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),k.copy(L))}function xe(L){ie.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function Ue(L,q){let ue=h.get(q);ue===void 0&&(ue=new WeakMap,h.set(q,ue));let Me=ue.get(L);Me===void 0&&(Me=n.getUniformBlockIndex(q,L.name),ue.set(L,Me))}function Xe(L,q){const Me=h.get(q).get(L);u.get(q)!==Me&&(n.uniformBlockBinding(q,Me,L.__bindingPointIndex),u.set(q,Me))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ce=null,re={},p={},x=new WeakMap,g=[],m=null,f=!1,A=null,E=null,y=null,w=null,C=null,D=null,Q=null,M=!1,R=null,oe=null,te=null,F=null,X=null,k.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:P,disable:Pe,bindFramebuffer:Re,drawBuffers:pe,useProgram:Ce,setBlending:I,setMaterial:j,setFlipSided:K,setCullFace:se,setLineWidth:he,setPolygonOffset:J,setScissorTest:ae,activeTexture:ee,bindTexture:v,unbindTexture:_,compressedTexImage2D:U,compressedTexImage3D:z,texImage2D:be,texImage3D:Ae,updateUBOMapping:Ue,uniformBlockBinding:Xe,texStorage2D:V,texStorage3D:Ee,texSubImage2D:W,texSubImage3D:le,compressedTexSubImage2D:ve,compressedTexSubImage3D:de,scissor:Se,viewport:xe,reset:et}}function fx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(v,_){return f?new OffscreenCanvas(v,_):ls("canvas")}function E(v,_,U,z){let W=1;if((v.width>z||v.height>z)&&(W=z/Math.max(v.width,v.height)),W<1||_===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const le=_?_p:Math.floor,ve=le(W*v.width),de=le(W*v.height);g===void 0&&(g=A(ve,de));const V=U?A(ve,de):g;return V.width=ve,V.height=de,V.getContext("2d").drawImage(v,0,0,ve,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+ve+"x"+de+")."),V}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function y(v){return ml(v.width)&&ml(v.height)}function w(v){return o?!1:v.wrapS!==Yt||v.wrapT!==Yt||v.minFilter!==Et&&v.minFilter!==Ft}function C(v,_){return v.generateMipmaps&&_&&v.minFilter!==Et&&v.minFilter!==Ft}function D(v){n.generateMipmap(v)}function Q(v,_,U,z,W=!1){if(o===!1)return _;if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let le=_;return _===n.RED&&(U===n.FLOAT&&(le=n.R32F),U===n.HALF_FLOAT&&(le=n.R16F),U===n.UNSIGNED_BYTE&&(le=n.R8)),_===n.RG&&(U===n.FLOAT&&(le=n.RG32F),U===n.HALF_FLOAT&&(le=n.RG16F),U===n.UNSIGNED_BYTE&&(le=n.RG8)),_===n.RGBA&&(U===n.FLOAT&&(le=n.RGBA32F),U===n.HALF_FLOAT&&(le=n.RGBA16F),U===n.UNSIGNED_BYTE&&(le=z===Ne&&W===!1?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)),(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(v,_,U){return C(v,U)===!0||v.isFramebufferTexture&&v.minFilter!==Et&&v.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function R(v){return v===Et||v===ka||v===Fs?n.NEAREST:n.LINEAR}function oe(v){const _=v.target;_.removeEventListener("dispose",oe),F(_),_.isVideoTexture&&x.delete(_)}function te(v){const _=v.target;_.removeEventListener("dispose",te),$(_)}function F(v){const _=i.get(v);if(_.__webglInit===void 0)return;const U=v.source,z=m.get(U);if(z){const W=z[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&X(v),Object.keys(z).length===0&&m.delete(U)}i.remove(v)}function X(v){const _=i.get(v);n.deleteTexture(_.__webglTexture);const U=v.source,z=m.get(U);delete z[_.__cacheKey],a.memory.textures--}function $(v){const _=v.texture,U=i.get(v),z=i.get(_);if(z.__webglTexture!==void 0&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++)n.deleteFramebuffer(U.__webglFramebuffer[W]),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[W]);else{if(n.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let W=0;W<U.__webglColorRenderbuffer.length;W++)U.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[W]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let W=0,le=_.length;W<le;W++){const ve=i.get(_[W]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(_[W])}i.remove(_),i.remove(v)}let ne=0;function G(){ne=0}function H(){const v=ne;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),ne+=1,v}function ce(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function re(v,_){const U=i.get(v);if(v.isVideoTexture&&ae(v),v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){const z=v.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(U,v,_);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function Te(v,_){const U=i.get(v);if(v.version>0&&U.__version!==v.version){Pe(U,v,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function fe(v,_){const U=i.get(v);if(v.version>0&&U.__version!==v.version){Pe(U,v,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function k(v,_){const U=i.get(v);if(v.version>0&&U.__version!==v.version){Re(U,v,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const ie={[Ro]:n.REPEAT,[Yt]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},ge={[Et]:n.NEAREST,[ka]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[jd]:n.LINEAR_MIPMAP_NEAREST,[_r]:n.LINEAR_MIPMAP_LINEAR};function me(v,_,U){if(U?(n.texParameteri(v,n.TEXTURE_WRAP_S,ie[_.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ie[_.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ie[_.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ge[_.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ge[_.minFilter])):(n.texParameteri(v,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(v,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Yt||_.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(v,n.TEXTURE_MAG_FILTER,R(_.magFilter)),n.texParameteri(v,n.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==Et&&_.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Et||_.minFilter!==Fs&&_.minFilter!==_r||_.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(v,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function P(v,_){let U=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",oe));const z=_.source;let W=m.get(z);W===void 0&&(W={},m.set(z,W));const le=ce(_);if(le!==v.__cacheKey){W[le]===void 0&&(W[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[le].usedTimes++;const ve=W[v.__cacheKey];ve!==void 0&&(W[v.__cacheKey].usedTimes--,ve.usedTimes===0&&X(_)),v.__cacheKey=le,v.__webglTexture=W[le].texture}return U}function Pe(v,_,U){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const W=P(v,_),le=_.source;t.bindTexture(z,v.__webglTexture,n.TEXTURE0+U);const ve=i.get(le);if(le.version!==ve.__version||W===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=w(_)&&y(_.image)===!1;let V=E(_.image,de,!1,u);V=ee(_,V);const Ee=y(V)||o,be=s.convert(_.format,_.colorSpace);let Ae=s.convert(_.type),Se=Q(_.internalFormat,be,Ae,_.colorSpace);me(z,_,Ee);let xe;const Ue=_.mipmaps,Xe=o&&_.isVideoTexture!==!0,et=ve.__version===void 0||W===!0,L=M(_,V,Ee);if(_.isDepthTexture)Se=n.DEPTH_COMPONENT,o?_.type===Jn?Se=n.DEPTH_COMPONENT32F:_.type===Zn?Se=n.DEPTH_COMPONENT24:_.type===Fi?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:_.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ni&&Se===n.DEPTH_COMPONENT&&_.type!==Qc&&_.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Zn,Ae=s.convert(_.type)),_.format===Wi&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,_.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Fi,Ae=s.convert(_.type))),et&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Se,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,Se,V.width,V.height,0,be,Ae,null));else if(_.isDataTexture)if(Ue.length>0&&Ee){Xe&&et&&t.texStorage2D(n.TEXTURE_2D,L,Se,Ue[0].width,Ue[0].height);for(let q=0,ue=Ue.length;q<ue;q++)xe=Ue[q],Xe?t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,be,Ae,xe.data):t.texImage2D(n.TEXTURE_2D,q,Se,xe.width,xe.height,0,be,Ae,xe.data);_.generateMipmaps=!1}else Xe?(et&&t.texStorage2D(n.TEXTURE_2D,L,Se,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,be,Ae,V.data)):t.texImage2D(n.TEXTURE_2D,0,Se,V.width,V.height,0,be,Ae,V.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xe&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,Se,Ue[0].width,Ue[0].height,V.depth);for(let q=0,ue=Ue.length;q<ue;q++)xe=Ue[q],_.format!==jt?be!==null?Xe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,V.depth,be,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Se,xe.width,xe.height,V.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,V.depth,be,Ae,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Se,xe.width,xe.height,V.depth,0,be,Ae,xe.data)}else{Xe&&et&&t.texStorage2D(n.TEXTURE_2D,L,Se,Ue[0].width,Ue[0].height);for(let q=0,ue=Ue.length;q<ue;q++)xe=Ue[q],_.format!==jt?be!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,be,Ae,xe.data):t.texImage2D(n.TEXTURE_2D,q,Se,xe.width,xe.height,0,be,Ae,xe.data)}else if(_.isDataArrayTexture)Xe?(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,L,Se,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,be,Ae,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,V.width,V.height,V.depth,0,be,Ae,V.data);else if(_.isData3DTexture)Xe?(et&&t.texStorage3D(n.TEXTURE_3D,L,Se,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,be,Ae,V.data)):t.texImage3D(n.TEXTURE_3D,0,Se,V.width,V.height,V.depth,0,be,Ae,V.data);else if(_.isFramebufferTexture){if(et)if(Xe)t.texStorage2D(n.TEXTURE_2D,L,Se,V.width,V.height);else{let q=V.width,ue=V.height;for(let Me=0;Me<L;Me++)t.texImage2D(n.TEXTURE_2D,Me,Se,q,ue,0,be,Ae,null),q>>=1,ue>>=1}}else if(Ue.length>0&&Ee){Xe&&et&&t.texStorage2D(n.TEXTURE_2D,L,Se,Ue[0].width,Ue[0].height);for(let q=0,ue=Ue.length;q<ue;q++)xe=Ue[q],Xe?t.texSubImage2D(n.TEXTURE_2D,q,0,0,be,Ae,xe):t.texImage2D(n.TEXTURE_2D,q,Se,be,Ae,xe);_.generateMipmaps=!1}else Xe?(et&&t.texStorage2D(n.TEXTURE_2D,L,Se,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ae,V)):t.texImage2D(n.TEXTURE_2D,0,Se,be,Ae,V);C(_,Ee)&&D(z),ve.__version=le.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function Re(v,_,U){if(_.image.length!==6)return;const z=P(v,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+U);const le=i.get(W);if(W.version!==le.__version||z===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ve=_.isCompressedTexture||_.image[0].isCompressedTexture,de=_.image[0]&&_.image[0].isDataTexture,V=[];for(let q=0;q<6;q++)!ve&&!de?V[q]=E(_.image[q],!1,!0,c):V[q]=de?_.image[q].image:_.image[q],V[q]=ee(_,V[q]);const Ee=V[0],be=y(Ee)||o,Ae=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),xe=Q(_.internalFormat,Ae,Se,_.colorSpace),Ue=o&&_.isVideoTexture!==!0,Xe=le.__version===void 0||z===!0;let et=M(_,Ee,be);me(n.TEXTURE_CUBE_MAP,_,be);let L;if(ve){Ue&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,et,xe,Ee.width,Ee.height);for(let q=0;q<6;q++){L=V[q].mipmaps;for(let ue=0;ue<L.length;ue++){const Me=L[ue];_.format!==jt?Ae!==null?Ue?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,Me.width,Me.height,Ae,Se,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,xe,Me.width,Me.height,0,Ae,Se,Me.data)}}}else{L=_.mipmaps,Ue&&Xe&&(L.length>0&&et++,t.texStorage2D(n.TEXTURE_CUBE_MAP,et,xe,V[0].width,V[0].height));for(let q=0;q<6;q++)if(de){Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,V[q].width,V[q].height,Ae,Se,V[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,xe,V[q].width,V[q].height,0,Ae,Se,V[q].data);for(let ue=0;ue<L.length;ue++){const ye=L[ue].image[q].image;Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,ye.width,ye.height,Ae,Se,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,xe,ye.width,ye.height,0,Ae,Se,ye.data)}}else{Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ae,Se,V[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,xe,Ae,Se,V[q]);for(let ue=0;ue<L.length;ue++){const Me=L[ue];Ue?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Ae,Se,Me.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,xe,Ae,Se,Me.image[q])}}}C(_,be)&&D(n.TEXTURE_CUBE_MAP),le.__version=W.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function pe(v,_,U,z,W){const le=s.convert(U.format,U.colorSpace),ve=s.convert(U.type),de=Q(U.internalFormat,le,ve,U.colorSpace);i.get(_).__hasExternalTextures||(W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,0,de,_.width,_.height,_.depth,0,le,ve,null):t.texImage2D(W,0,de,_.width,_.height,0,le,ve,null)),t.bindFramebuffer(n.FRAMEBUFFER,v),J(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,W,i.get(U).__webglTexture,0,he(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,W,i.get(U).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(v,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,v),_.depthBuffer&&!_.stencilBuffer){let z=n.DEPTH_COMPONENT16;if(U||J(_)){const W=_.depthTexture;W&&W.isDepthTexture&&(W.type===Jn?z=n.DEPTH_COMPONENT32F:W.type===Zn&&(z=n.DEPTH_COMPONENT24));const le=he(_);J(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,z,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,z,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,v)}else if(_.depthBuffer&&_.stencilBuffer){const z=he(_);U&&J(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,_.width,_.height):J(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,v)}else{const z=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let W=0;W<z.length;W++){const le=z[W],ve=s.convert(le.format,le.colorSpace),de=s.convert(le.type),V=Q(le.internalFormat,ve,de,le.colorSpace),Ee=he(_);U&&J(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,V,_.width,_.height):J(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function T(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),re(_.depthTexture,0);const z=i.get(_.depthTexture).__webglTexture,W=he(_);if(_.depthTexture.format===ni)J(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(_.depthTexture.format===Wi)J(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function b(v){const _=i.get(v),U=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");T(_.__webglFramebuffer,v)}else if(U){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]=n.createRenderbuffer(),Ce(_.__webglDepthbuffer[z],v,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ce(_.__webglDepthbuffer,v,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(v,_,U){const z=i.get(v);_!==void 0&&pe(z.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),U!==void 0&&b(v)}function j(v){const _=v.texture,U=i.get(v),z=i.get(_);v.addEventListener("dispose",te),v.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,a.memory.textures++);const W=v.isWebGLCubeRenderTarget===!0,le=v.isWebGLMultipleRenderTargets===!0,ve=y(v)||o;if(W){U.__webglFramebuffer=[];for(let de=0;de<6;de++)U.__webglFramebuffer[de]=n.createFramebuffer()}else{if(U.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const de=v.texture;for(let V=0,Ee=de.length;V<Ee;V++){const be=i.get(de[V]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&J(v)===!1){const de=le?_:[_];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let V=0;V<de.length;V++){const Ee=de[V];U.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[V]);const be=s.convert(Ee.format,Ee.colorSpace),Ae=s.convert(Ee.type),Se=Q(Ee.internalFormat,be,Ae,Ee.colorSpace,v.isXRRenderTarget===!0),xe=he(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,Se,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,U.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),me(n.TEXTURE_CUBE_MAP,_,ve);for(let de=0;de<6;de++)pe(U.__webglFramebuffer[de],v,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de);C(_,ve)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const de=v.texture;for(let V=0,Ee=de.length;V<Ee;V++){const be=de[V],Ae=i.get(be);t.bindTexture(n.TEXTURE_2D,Ae.__webglTexture),me(n.TEXTURE_2D,be,ve),pe(U.__webglFramebuffer,v,be,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D),C(be,ve)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?de=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,z.__webglTexture),me(de,_,ve),pe(U.__webglFramebuffer,v,_,n.COLOR_ATTACHMENT0,de),C(_,ve)&&D(de),t.unbindTexture()}v.depthBuffer&&b(v)}function K(v){const _=y(v)||o,U=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let z=0,W=U.length;z<W;z++){const le=U[z];if(C(le,_)){const ve=v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(le).__webglTexture;t.bindTexture(ve,de),D(ve),t.unbindTexture()}}}function se(v){if(o&&v.samples>0&&J(v)===!1){const _=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],U=v.width,z=v.height;let W=n.COLOR_BUFFER_BIT;const le=[],ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(v),V=v.isWebGLMultipleRenderTargets===!0;if(V)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){le.push(n.COLOR_ATTACHMENT0+Ee),v.depthBuffer&&le.push(ve);const be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(be===!1&&(v.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]),be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),V){const Ae=i.get(_[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,U,z,0,0,U,z,W,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]);const be=i.get(_[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function he(v){return Math.min(h,v.samples)}function J(v){const _=i.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ae(v){const _=a.render.frame;x.get(v)!==_&&(x.set(v,_),v.update())}function ee(v,_){const U=v.colorSpace,z=v.format,W=v.type;return v.isCompressedTexture===!0||v.format===Lo||U!==un&&U!==ri&&(U===Ne?o===!1?e.has("EXT_sRGB")===!0&&z===jt?(v.format=Lo,v.minFilter=Ft,v.generateMipmaps=!1):_=iu.sRGBToLinear(_):(z!==jt||W!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=re,this.setTexture2DArray=Te,this.setTexture3D=fe,this.setTextureCube=k,this.rebindTextures=I,this.setupRenderTarget=j,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=J}function hx(n,e,t){const i=t.isWebGL2;function r(s,a=ri){let o;if(s===oi)return n.UNSIGNED_BYTE;if(s===Jd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Qd)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Kd)return n.BYTE;if(s===$d)return n.SHORT;if(s===Qc)return n.UNSIGNED_SHORT;if(s===Zd)return n.INT;if(s===Zn)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===gr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ep)return n.ALPHA;if(s===jt)return n.RGBA;if(s===tp)return n.LUMINANCE;if(s===np)return n.LUMINANCE_ALPHA;if(s===ni)return n.DEPTH_COMPONENT;if(s===Wi)return n.DEPTH_STENCIL;if(s===Lo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ip)return n.RED;if(s===rp)return n.RED_INTEGER;if(s===sp)return n.RG;if(s===op)return n.RG_INTEGER;if(s===ap)return n.RGBA_INTEGER;if(s===Os||s===Bs||s===zs||s===Hs)if(a===Ne)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Os)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Os)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wa||s===Xa||s===qa||s===Ya)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Wa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ya)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ja||s===Ka)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ja)return a===Ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ka)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$a||s===Za||s===Ja||s===Qa||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===ol||s===al||s===ll||s===cl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===$a)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Za)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ja)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qa)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===el)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tl)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nl)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===il)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rl)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sl)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ol)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===al)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ll)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cl)return a===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Gs)return a===Ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===cp||s===ul||s===fl||s===hl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Gs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ul)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class dx extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kr extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(px)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mx extends Ut{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ni,u!==ni&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ni&&(i=Zn),i===void 0&&u===Wi&&(i=Fi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class _x extends Ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,x=null;const g=t.getContextAttributes();let m=null,f=null;const A=[],E=[],y=new Set,w=new Map,C=new Ot;C.layers.enable(1),C.viewport=new ct;const D=new Ot;D.layers.enable(2),D.viewport=new ct;const Q=[C,D],M=new dx;M.layers.enable(1),M.layers.enable(2);let R=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ie=A[k];return ie===void 0&&(ie=new fo,A[k]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(k){let ie=A[k];return ie===void 0&&(ie=new fo,A[k]=ie),ie.getGripSpace()},this.getHand=function(k){let ie=A[k];return ie===void 0&&(ie=new fo,A[k]=ie),ie.getHandSpace()};function te(k){const ie=E.indexOf(k.inputSource);if(ie===-1)return;const ge=A[ie];ge!==void 0&&(ge.update(k.inputSource,k.frame,c||a),ge.dispatchEvent({type:k.type,data:k.inputSource}))}function F(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",X);for(let k=0;k<A.length;k++){const ie=E[k];ie!==null&&(E[k]=null,A[k].disconnect(ie))}R=null,oe=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",F),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),f=new ai(p.framebufferWidth,p.framebufferHeight,{format:jt,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,ge=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?Wi:ni,ge=g.stencil?Fi:Zn);const P={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(P),r.updateRenderState({layers:[d]}),f=new ai(d.textureWidth,d.textureHeight,{format:jt,type:oi,depthTexture:new mx(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Pe=e.properties.get(f);Pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(k){for(let ie=0;ie<k.removed.length;ie++){const ge=k.removed[ie],me=E.indexOf(ge);me>=0&&(E[me]=null,A[me].disconnect(ge))}for(let ie=0;ie<k.added.length;ie++){const ge=k.added[ie];let me=E.indexOf(ge);if(me===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=E.length){E.push(ge),me=Pe;break}else if(E[Pe]===null){E[Pe]=ge,me=Pe;break}if(me===-1)break}const P=A[me];P&&P.connect(ge)}}const $=new B,ne=new B;function G(k,ie,ge){$.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(ge.matrixWorld);const me=$.distanceTo(ne),P=ie.projectionMatrix.elements,Pe=ge.projectionMatrix.elements,Re=P[14]/(P[10]-1),pe=P[14]/(P[10]+1),Ce=(P[9]+1)/P[5],T=(P[9]-1)/P[5],b=(P[8]-1)/P[0],I=(Pe[8]+1)/Pe[0],j=Re*b,K=Re*I,se=me/(-b+I),he=se*-b;ie.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(he),k.translateZ(se),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const J=Re+se,ae=pe+se,ee=j-he,v=K+(me-he),_=Ce*pe/ae*J,U=T*pe/ae*J;k.projectionMatrix.makePerspective(ee,v,_,U,J,ae),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function H(k,ie){ie===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ie.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;M.near=D.near=C.near=k.near,M.far=D.far=C.far=k.far,(R!==M.near||oe!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,oe=M.far);const ie=k.parent,ge=M.cameras;H(M,ie);for(let me=0;me<ge.length;me++)H(ge[me],ie);ge.length===2?G(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),ce(k,M,ie)};function ce(k,ie,ge){ge===null?k.matrix.copy(ie.matrixWorld):(k.matrix.copy(ge.matrixWorld),k.matrix.invert(),k.matrix.multiply(ie.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const me=k.children;for(let P=0,Pe=me.length;P<Pe;P++)me[P].updateMatrixWorld(!0);k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Po*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return y};let re=null;function Te(k,ie){if(u=ie.getViewerPose(c||a),x=ie,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let me=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let P=0;P<ge.length;P++){const Pe=ge[P];let Re=null;if(p!==null)Re=p.getViewport(Pe);else{const Ce=h.getViewSubImage(d,Pe);Re=Ce.viewport,P===0&&(e.setRenderTargetTextures(f,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(f))}let pe=Q[P];pe===void 0&&(pe=new Ot,pe.layers.enable(P),pe.viewport=new ct,Q[P]=pe),pe.matrix.fromArray(Pe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Pe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Re.x,Re.y,Re.width,Re.height),P===0&&(M.matrix.copy(pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(pe)}}for(let ge=0;ge<A.length;ge++){const me=E[ge],P=A[ge];me!==null&&P!==void 0&&P.update(me,ie,c||a)}if(re&&re(k,ie),ie.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ie.detectedPlanes});let ge=null;for(const me of y)ie.detectedPlanes.has(me)||(ge===null&&(ge=[]),ge.push(me));if(ge!==null)for(const me of ge)y.delete(me),w.delete(me),i.dispatchEvent({type:"planeremoved",data:me});for(const me of ie.detectedPlanes)if(!y.has(me))y.add(me),w.set(me,ie.lastChangedTime),i.dispatchEvent({type:"planeadded",data:me});else{const P=w.get(me);me.lastChangedTime>P&&(w.set(me,me.lastChangedTime),i.dispatchEvent({type:"planechanged",data:me}))}}x=null}const fe=new pu;fe.setAnimationLoop(Te),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}}function gx(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,uu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,A,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const E=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*E,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,E){const y=E.program;i.uniformBlockBinding(A,y)}function c(A,E){let y=r[A.id];y===void 0&&(x(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const w=E.program;i.updateUBOMapping(A,w);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function u(A){const E=h();A.__bindingPointIndex=E;const y=n.createBuffer(),w=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=r[A.id],y=A.uniforms,w=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,D=y.length;C<D;C++){const Q=y[C];if(p(Q,C,w)===!0){const M=Q.__offset,R=Array.isArray(Q.value)?Q.value:[Q.value];let oe=0;for(let te=0;te<R.length;te++){const F=R[te],X=g(F);typeof F=="number"?(Q.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,M+oe,Q.__data)):F.isMatrix3?(Q.__data[0]=F.elements[0],Q.__data[1]=F.elements[1],Q.__data[2]=F.elements[2],Q.__data[3]=F.elements[0],Q.__data[4]=F.elements[3],Q.__data[5]=F.elements[4],Q.__data[6]=F.elements[5],Q.__data[7]=F.elements[0],Q.__data[8]=F.elements[6],Q.__data[9]=F.elements[7],Q.__data[10]=F.elements[8],Q.__data[11]=F.elements[0]):(F.toArray(Q.__data,oe),oe+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,Q.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,E,y){const w=A.value;if(y[E]===void 0){if(typeof w=="number")y[E]=w;else{const C=Array.isArray(w)?w:[w],D=[];for(let Q=0;Q<C.length;Q++)D.push(C[Q].clone());y[E]=D}return!0}else if(typeof w=="number"){if(y[E]!==w)return y[E]=w,!0}else{const C=Array.isArray(y[E])?y[E]:[y[E]],D=Array.isArray(w)?w:[w];for(let Q=0;Q<C.length;Q++){const M=C[Q];if(M.equals(D[Q])===!1)return M.copy(D[Q]),!0}}return!1}function x(A){const E=A.uniforms;let y=0;const w=16;let C=0;for(let D=0,Q=E.length;D<Q;D++){const M=E[D],R={boundary:0,storage:0},oe=Array.isArray(M.value)?M.value:[M.value];for(let te=0,F=oe.length;te<F;te++){const X=oe[te],$=g(X);R.boundary+=$.boundary,R.storage+=$.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,D>0){C=y%w;const te=w-C;C!==0&&te-R.boundary<0&&(y+=w-C,M.__offset=y)}y+=R.storage}return C=y%w,C>0&&(y+=w-C),A.__size=y,A.__cache={},this}function g(A){const E={boundary:0,storage:0};return typeof A=="number"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}function xx(){const n=ls("canvas");return n.style.display="block",n}class xu{constructor(e={}){const{canvas:t=xx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=null,x=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this.useLegacyLights=!0,this.toneMapping=En,this.toneMappingExposure=1;const f=this;let A=!1,E=0,y=0,w=null,C=-1,D=null;const Q=new ct,M=new ct;let R=null,oe=t.width,te=t.height,F=1,X=null,$=null;const ne=new ct(0,0,oe,te),G=new ct(0,0,oe,te);let H=!1;const ce=new du;let re=!1,Te=!1,fe=null;const k=new ut,ie=new B,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return w===null?F:1}let P=i;function Pe(S,O){for(let Y=0;Y<S.length;Y++){const N=S[Y],Z=t.getContext(N,O);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),P===null){const O=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&O.shift(),P=Pe(O,S),P===null)throw Pe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Re,pe,Ce,T,b,I,j,K,se,he,J,ae,ee,v,_,U,z,W,le,ve,de,V,Ee,be;function Ae(){Re=new Lg(P),pe=new Tg(P,Re,e),Re.init(pe),V=new hx(P,Re,pe),Ce=new ux(P,Re,pe),T=new Dg(P),b=new $v,I=new fx(P,Re,Ce,b,pe,V,T),j=new bg(f),K=new Cg(f),se=new Wp(P,pe),Ee=new Sg(P,Re,se,pe),he=new Pg(P,se,T,Ee),J=new Og(P,he,se,T),le=new Fg(P,pe,I),U=new yg(b),ae=new Kv(f,j,K,Re,pe,Ee,U),ee=new gx(f,b),v=new Jv,_=new rx(Re,pe),W=new Mg(f,j,K,Ce,J,d,l),z=new cx(f,J,pe),be=new vx(P,T,pe,Ce),ve=new Eg(P,Re,T,pe),de=new Ug(P,Re,T,pe),T.programs=ae.programs,f.capabilities=pe,f.extensions=Re,f.properties=b,f.renderLists=v,f.shadowMap=z,f.state=Ce,f.info=T}Ae();const Se=new _x(f,P);this.xr=Se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(oe,te,!1))},this.getSize=function(S){return S.set(oe,te)},this.setSize=function(S,O,Y=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=S,te=O,t.width=Math.floor(S*F),t.height=Math.floor(O*F),Y===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(oe*F,te*F).floor()},this.setDrawingBufferSize=function(S,O,Y){oe=S,te=O,F=Y,t.width=Math.floor(S*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(Q)},this.getViewport=function(S){return S.copy(ne)},this.setViewport=function(S,O,Y,N){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,O,Y,N),Ce.viewport(Q.copy(ne).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(G)},this.setScissor=function(S,O,Y,N){S.isVector4?G.set(S.x,S.y,S.z,S.w):G.set(S,O,Y,N),Ce.scissor(M.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(S){Ce.setScissorTest(H=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(S=!0,O=!0,Y=!0){let N=0;S&&(N|=P.COLOR_BUFFER_BIT),O&&(N|=P.DEPTH_BUFFER_BIT),Y&&(N|=P.STENCIL_BUFFER_BIT),P.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),v.dispose(),_.dispose(),b.dispose(),j.dispose(),K.dispose(),J.dispose(),Ee.dispose(),be.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ye),Se.removeEventListener("sessionend",je),fe&&(fe.dispose(),fe=null),Ke.stop()};function xe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=T.autoReset,O=z.enabled,Y=z.autoUpdate,N=z.needsUpdate,Z=z.type;Ae(),T.autoReset=S,z.enabled=O,z.autoUpdate=Y,z.needsUpdate=N,z.type=Z}function Xe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function et(S){const O=S.target;O.removeEventListener("dispose",et),L(O)}function L(S){q(S),b.remove(S)}function q(S){const O=b.get(S).programs;O!==void 0&&(O.forEach(function(Y){ae.releaseProgram(Y)}),S.isShaderMaterial&&ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,Y,N,Z,we){O===null&&(O=ge);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,De=Mu(S,O,Y,N,Z);Ce.setMaterial(N,Le);let Fe=Y.index,ze=1;N.wireframe===!0&&(Fe=he.getWireframeAttribute(Y),ze=2);const He=Y.drawRange,Ge=Y.attributes.position;let Ye=He.start*ze,vt=(He.start+He.count)*ze;we!==null&&(Ye=Math.max(Ye,we.start*ze),vt=Math.min(vt,(we.start+we.count)*ze)),Fe!==null?(Ye=Math.max(Ye,0),vt=Math.min(vt,Fe.count)):Ge!=null&&(Ye=Math.max(Ye,0),vt=Math.min(vt,Ge.count));const Bt=vt-Ye;if(Bt<0||Bt===1/0)return;Ee.setup(Z,N,De,Y,Fe);let Bn,nt=ve;if(Fe!==null&&(Bn=se.get(Fe),nt=de,nt.setIndex(Bn)),Z.isMesh)N.wireframe===!0?(Ce.setLineWidth(N.wireframeLinewidth*me()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(Z.isLine){let ke=N.linewidth;ke===void 0&&(ke=1),Ce.setLineWidth(ke*me()),Z.isLineSegments?nt.setMode(P.LINES):Z.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else Z.isPoints?nt.setMode(P.POINTS):Z.isSprite&&nt.setMode(P.TRIANGLES);if(Z.isInstancedMesh)nt.renderInstances(Ye,Bt,Z.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ys=Math.min(Y.instanceCount,ke);nt.renderInstances(Ye,Bt,ys)}else nt.render(Ye,Bt)},this.compile=function(S,O){function Y(N,Z,we){N.transparent===!0&&N.side===xn&&N.forceSinglePass===!1?(N.side=bt,N.needsUpdate=!0,Sr(N,Z,we),N.side=Fn,N.needsUpdate=!0,Sr(N,Z,we),N.side=xn):Sr(N,Z,we)}x=_.get(S),x.init(),m.push(x),S.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(x.pushLight(N),N.castShadow&&x.pushShadow(N))}),x.setupLights(f.useLegacyLights),S.traverse(function(N){const Z=N.material;if(Z)if(Array.isArray(Z))for(let we=0;we<Z.length;we++){const Le=Z[we];Y(Le,S,N)}else Y(Z,S,N)}),m.pop(),x=null};let ue=null;function Me(S){ue&&ue(S)}function ye(){Ke.stop()}function je(){Ke.start()}const Ke=new pu;Ke.setAnimationLoop(Me),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(S){ue=S,Se.setAnimationLoop(S),S===null?Ke.stop():Ke.start()},Se.addEventListener("sessionstart",ye),Se.addEventListener("sessionend",je),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(O),O=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(f,S,O,w),x=_.get(S,m.length),x.init(),m.push(x),k.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(k),Te=this.localClippingEnabled,re=U.init(this.clippingPlanes,Te),p=v.get(S,g.length),p.init(),g.push(p),ht(S,O,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(X,$),re===!0&&U.beginShadows();const Y=x.state.shadowsArray;if(z.render(Y,S,O),re===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(p,S),x.setupLights(f.useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let Z=0,we=N.length;Z<we;Z++){const Le=N[Z];bn(p,S,Le,Le.viewport)}}else bn(p,S,O);w!==null&&(I.updateMultisampleRenderTarget(w),I.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(f,S,O),Ee.resetDefaultState(),C=-1,D=null,m.pop(),m.length>0?x=m[m.length-1]:x=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function ht(S,O,Y,N){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)x.pushLight(S),S.castShadow&&x.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ce.intersectsSprite(S)){N&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);const Le=J.update(S),De=S.material;De.visible&&p.push(S,Le,De,Y,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ce.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==T.render.frame&&(S.skeleton.update(),S.skeleton.frame=T.render.frame);const Le=J.update(S),De=S.material;if(N&&(Le.boundingSphere===null&&Le.computeBoundingSphere(),ie.copy(Le.boundingSphere.center).applyMatrix4(S.matrixWorld).applyMatrix4(k)),Array.isArray(De)){const Fe=Le.groups;for(let ze=0,He=Fe.length;ze<He;ze++){const Ge=Fe[ze],Ye=De[Ge.materialIndex];Ye&&Ye.visible&&p.push(S,Le,Ye,Y,ie.z,Ge)}}else De.visible&&p.push(S,Le,De,Y,ie.z,null)}}const we=S.children;for(let Le=0,De=we.length;Le<De;Le++)ht(we[Le],O,Y,N)}function bn(S,O,Y,N){const Z=S.opaque,we=S.transmissive,Le=S.transparent;x.setupLightsView(Y),re===!0&&U.setGlobalState(f.clippingPlanes,Y),we.length>0&&tt(Z,we,O,Y),N&&Ce.viewport(Q.copy(N)),Z.length>0&&It(Z,O,Y),we.length>0&&It(we,O,Y),Le.length>0&&It(Le,O,Y),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function tt(S,O,Y,N){if(fe===null){const De=pe.isWebGL2;fe=new ai(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?gr:oi,minFilter:_r,samples:De&&o===!0?4:0})}const Z=f.getRenderTarget();f.setRenderTarget(fe),f.clear();const we=f.toneMapping;f.toneMapping=En,It(S,Y,N),I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe);let Le=!1;for(let De=0,Fe=O.length;De<Fe;De++){const ze=O[De],He=ze.object,Ge=ze.geometry,Ye=ze.material,vt=ze.group;if(Ye.side===xn&&He.layers.test(N.layers)){const Bt=Ye.side;Ye.side=bt,Ye.needsUpdate=!0,Jt(He,Y,N,Ge,Ye,vt),Ye.side=Bt,Ye.needsUpdate=!0,Le=!0}}Le===!0&&(I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe)),f.setRenderTarget(Z),f.toneMapping=we}function It(S,O,Y){const N=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,we=S.length;Z<we;Z++){const Le=S[Z],De=Le.object,Fe=Le.geometry,ze=N===null?Le.material:N,He=Le.group;De.layers.test(Y.layers)&&Jt(De,O,Y,Fe,ze,He)}}function Jt(S,O,Y,N,Z,we){S.onBeforeRender(f,O,Y,N,Z,we),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(f,O,Y,N,S,we),Z.transparent===!0&&Z.side===xn&&Z.forceSinglePass===!1?(Z.side=bt,Z.needsUpdate=!0,f.renderBufferDirect(Y,O,N,Z,S,we),Z.side=Fn,Z.needsUpdate=!0,f.renderBufferDirect(Y,O,N,Z,S,we),Z.side=xn):f.renderBufferDirect(Y,O,N,Z,S,we),S.onAfterRender(f,O,Y,N,Z,we)}function Sr(S,O,Y){O.isScene!==!0&&(O=ge);const N=b.get(S),Z=x.state.lights,we=x.state.shadowsArray,Le=Z.state.version,De=ae.getParameters(S,Z.state,we,O,Y),Fe=ae.getProgramCacheKey(De);let ze=N.programs;N.environment=S.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(S.isMeshStandardMaterial?K:j).get(S.envMap||N.environment),ze===void 0&&(S.addEventListener("dispose",et),ze=new Map,N.programs=ze);let He=ze.get(Fe);if(He!==void 0){if(N.currentProgram===He&&N.lightsStateVersion===Le)return sa(S,De),He}else De.uniforms=ae.getUniforms(S),S.onBuild(Y,De,f),S.onBeforeCompile(De,f),He=ae.acquireProgram(De,Fe),ze.set(Fe,He),N.uniforms=De.uniforms;const Ge=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=U.uniform),sa(S,De),N.needsLights=Eu(S),N.lightsStateVersion=Le,N.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMap.value=Z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotShadowMap.value=Z.state.spotShadowMap,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMap.value=Z.state.pointShadowMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Ye=He.getUniforms(),vt=ns.seqWithValue(Ye.seq,Ge);return N.currentProgram=He,N.uniformsList=vt,He}function sa(S,O){const Y=b.get(S);Y.outputColorSpace=O.outputColorSpace,Y.instancing=O.instancing,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Mu(S,O,Y,N,Z){O.isScene!==!0&&(O=ge),I.resetTextureUnits();const we=O.fog,Le=N.isMeshStandardMaterial?O.environment:null,De=w===null?f.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:un,Fe=(N.isMeshStandardMaterial?K:j).get(N.envMap||Le),ze=N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!N.normalMap&&!!Y.attributes.tangent,Ge=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color,Bt=N.toneMapped?f.toneMapping:En,Bn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=Bn!==void 0?Bn.length:0,ke=b.get(N),ys=x.state.lights;if(re===!0&&(Te===!0||S!==D)){const wt=S===D&&N.id===C;U.setState(N,S,wt)}let at=!1;N.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ys.state.version||ke.outputColorSpace!==De||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Fe||N.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==U.numPlanes||ke.numIntersection!==U.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==He||ke.morphTargets!==Ge||ke.morphNormals!==Ye||ke.morphColors!==vt||ke.toneMapping!==Bt||pe.isWebGL2===!0&&ke.morphTargetsCount!==nt)&&(at=!0):(at=!0,ke.__version=N.version);let zn=ke.currentProgram;at===!0&&(zn=Sr(N,O,Z));let oa=!1,Ji=!1,bs=!1;const xt=zn.getUniforms(),Hn=ke.uniforms;if(Ce.useProgram(zn.program)&&(oa=!0,Ji=!0,bs=!0),N.id!==C&&(C=N.id,Ji=!0),oa||D!==S){if(xt.setValue(P,"projectionMatrix",S.projectionMatrix),pe.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),D!==S&&(D=S,Ji=!0,bs=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const wt=xt.map.cameraPosition;wt!==void 0&&wt.setValue(P,ie.setFromMatrixPosition(S.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&xt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Z.isSkinnedMesh)&&xt.setValue(P,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){xt.setOptional(P,Z,"bindMatrix"),xt.setOptional(P,Z,"bindMatrixInverse");const wt=Z.skeleton;wt&&(pe.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),xt.setValue(P,"boneTexture",wt.boneTexture,I),xt.setValue(P,"boneTextureSize",wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const As=Y.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&pe.isWebGL2===!0)&&le.update(Z,Y,zn),(Ji||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,xt.setValue(P,"receiveShadow",Z.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Hn.envMap.value=Fe,Hn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Ji&&(xt.setValue(P,"toneMappingExposure",f.toneMappingExposure),ke.needsLights&&Su(Hn,bs),we&&N.fog===!0&&ee.refreshFogUniforms(Hn,we),ee.refreshMaterialUniforms(Hn,N,F,te,fe),ns.upload(P,ke.uniformsList,Hn,I)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ns.upload(P,ke.uniformsList,Hn,I),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&xt.setValue(P,"center",Z.center),xt.setValue(P,"modelViewMatrix",Z.modelViewMatrix),xt.setValue(P,"normalMatrix",Z.normalMatrix),xt.setValue(P,"modelMatrix",Z.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const wt=N.uniformsGroups;for(let ws=0,Tu=wt.length;ws<Tu;ws++)if(pe.isWebGL2){const aa=wt[ws];be.update(aa,zn),be.bind(aa,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function Su(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Eu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,O,Y){b.get(S.texture).__webglTexture=O,b.get(S.depthTexture).__webglTexture=Y;const N=b.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=Y===void 0,N.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const Y=b.get(S);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,Y=0){w=S,E=O,y=Y;let N=!0,Z=null,we=!1,Le=!1;if(S){const Fe=b.get(S);Fe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(P.FRAMEBUFFER,null),N=!1):Fe.__webglFramebuffer===void 0?I.setupRenderTarget(S):Fe.__hasExternalTextures&&I.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Le=!0);const He=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=He[O],we=!0):pe.isWebGL2&&S.samples>0&&I.useMultisampledRTT(S)===!1?Z=b.get(S).__webglMultisampledFramebuffer:Z=He,Q.copy(S.viewport),M.copy(S.scissor),R=S.scissorTest}else Q.copy(ne).multiplyScalar(F).floor(),M.copy(G).multiplyScalar(F).floor(),R=H;if(Ce.bindFramebuffer(P.FRAMEBUFFER,Z)&&pe.drawBuffers&&N&&Ce.drawBuffers(S,Z),Ce.viewport(Q),Ce.scissor(M),Ce.setScissorTest(R),we){const Fe=b.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,Y)}else if(Le){const Fe=b.get(S.texture),ze=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,Y||0,ze)}C=-1},this.readRenderTargetPixels=function(S,O,Y,N,Z,we,Le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){Ce.bindFramebuffer(P.FRAMEBUFFER,De);try{const Fe=S.texture,ze=Fe.format,He=Fe.type;if(ze!==jt&&V.convert(ze)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===gr&&(Re.has("EXT_color_buffer_half_float")||pe.isWebGL2&&Re.has("EXT_color_buffer_float"));if(He!==oi&&V.convert(He)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Jn&&(pe.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-N&&Y>=0&&Y<=S.height-Z&&P.readPixels(O,Y,N,Z,V.convert(ze),V.convert(He),we)}finally{const Fe=w!==null?b.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(S,O,Y=0){const N=Math.pow(2,-Y),Z=Math.floor(O.image.width*N),we=Math.floor(O.image.height*N);I.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,S.x,S.y,Z,we),Ce.unbindTexture()},this.copyTextureToTexture=function(S,O,Y,N=0){const Z=O.image.width,we=O.image.height,Le=V.convert(Y.format),De=V.convert(Y.type);I.setTexture2D(Y,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,S.x,S.y,Z,we,Le,De,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Le,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,N,S.x,S.y,Le,De,O.image),N===0&&Y.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(S,O,Y,N,Z=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=S.max.x-S.min.x+1,Le=S.max.y-S.min.y+1,De=S.max.z-S.min.z+1,Fe=V.convert(N.format),ze=V.convert(N.type);let He;if(N.isData3DTexture)I.setTexture3D(N,0),He=P.TEXTURE_3D;else if(N.isDataArrayTexture)I.setTexture2DArray(N,0),He=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ge=P.getParameter(P.UNPACK_ROW_LENGTH),Ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vt=P.getParameter(P.UNPACK_SKIP_PIXELS),Bt=P.getParameter(P.UNPACK_SKIP_ROWS),Bn=P.getParameter(P.UNPACK_SKIP_IMAGES),nt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,S.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,S.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S.min.z),Y.isDataTexture||Y.isData3DTexture?P.texSubImage3D(He,Z,O.x,O.y,O.z,we,Le,De,Fe,ze,nt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(He,Z,O.x,O.y,O.z,we,Le,De,Fe,nt.data)):P.texSubImage3D(He,Z,O.x,O.y,O.z,we,Le,De,Fe,ze,nt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ge),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bn),Z===0&&N.generateMipmaps&&P.generateMipmap(He),Ce.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?I.setTextureCube(S,0):S.isData3DTexture?I.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?I.setTexture2DArray(S,0):I.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){E=0,y=0,w=null,Ce.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?ii:eu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ii?Ne:un}}class Mx extends xu{}Mx.prototype.isWebGL1Renderer=!0;class Sx extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ra extends On{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new B,d=new B,p=[],x=[],g=[],m=[];for(let f=0;f<=i;f++){const A=[],E=f/i;let y=0;f===0&&a===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const C=w/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+E*o),x.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(C+y,1-E),A.push(c++)}u.push(A)}for(let f=0;f<i;f++)for(let A=0;A<t;A++){const E=u[f][A+1],y=u[f][A],w=u[f+1][A],C=u[f+1][A+1];(f!==0||a>0)&&p.push(E,y,C),(f!==i-1||l<Math.PI)&&p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);const Ex={mounted(){const n=new Sx,e=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),t=new xu({canvas:this.$el});t.setSize(window.innerWidth,window.innerHeight),this.$refs.canvas.style.padding="0",this.$refs.canvas.style.margin="0",t.setClearColor("#fff");const i=Math.floor(Math.random()*2)+1,r=Math.floor(Math.random()*100)+5;let s;switch(i){case 1:s=new ra(r,8,8);break;case 2:s=new $i(r,8,8);break;default:console.log("Invalid mesh roll");break}const a=new ta({color:65382,opacity:.3,transparent:!0,wireframe:!0,depthTest:!1}),o=new Mn(s,a);n.add(o),e.position.z=5;const l=()=>{requestAnimationFrame(l),o.rotation.x+=.001,o.rotation.y+=.001,t.render(n,e)};l();function c(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",c);const u=()=>{window.removeEventListener("resize",c)};this.$options.beforeUnmount=[u]}},Tx={ref:"canvas",class:"myCanvas"};function yx(n,e,t,i,r,s){return Pt(),Sn("canvas",Tx,null,512)}const bx=xs(Ex,[["render",yx],["__scopeId","data-v-5f12d2ce"]]),Ax={__name:"App",setup(n){const e=sessionStorage.getItem("bootloaderShown"),t=pf(!e),i=()=>{t.value=!1,sessionStorage.setItem("bootloaderShown","true")};return Dc(()=>{e&&i()}),(r,s)=>(Pt(),Sn("div",null,[an(bx),t.value?Ii("",!0):(Pt(),es(ld,{key:0})),t.value?Ii("",!0):(Pt(),es(vd,{key:1})),t.value?(Pt(),es(ed,{key:2,onAnimationCompleted:i})):Ii("",!0)]))}};Kh(Ax).mount("#app");
