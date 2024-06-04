var V1=Object.defineProperty;var I1=(p,n,o)=>n in p?V1(p,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[n]=o;var H=(p,n,o)=>(I1(p,typeof n!="symbol"?n+"":n,o),o);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t1=globalThis,d1=t1.ShadowRoot&&(t1.ShadyCSS===void 0||t1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u1=Symbol(),f1=new WeakMap;let $1=class{constructor(n,o,t){if(this._$cssResult$=!0,t!==u1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=o}get styleSheet(){let n=this.o;const o=this.t;if(d1&&n===void 0){const t=o!==void 0&&o.length===1;t&&(n=f1.get(o)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),t&&f1.set(o,n))}return n}toString(){return this.cssText}};const H1=p=>new $1(typeof p=="string"?p:p+"",void 0,u1),P=(p,...n)=>{const o=p.length===1?p[0]:n.reduce((t,e,i)=>t+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+p[i+1],p[0]);return new $1(o,p,u1)},R1=(p,n)=>{if(d1)p.adoptedStyleSheets=n.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of n){const t=document.createElement("style"),e=t1.litNonce;e!==void 0&&t.setAttribute("nonce",e),t.textContent=o.cssText,p.appendChild(t)}},h1=d1?p=>p:p=>p instanceof CSSStyleSheet?(n=>{let o="";for(const t of n.cssRules)o+=t.cssText;return H1(o)})(p):p;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:U1,defineProperty:D1,getOwnPropertyDescriptor:Z1,getOwnPropertyNames:B1,getOwnPropertySymbols:z1,getPrototypeOf:F1}=Object,I=globalThis,C1=I.trustedTypes,K1=C1?C1.emptyScript:"",o1=I.reactiveElementPolyfillSupport,q=(p,n)=>p,l1={toAttribute(p,n){switch(n){case Boolean:p=p?K1:null;break;case Object:case Array:p=p==null?p:JSON.stringify(p)}return p},fromAttribute(p,n){let o=p;switch(n){case Boolean:o=p!==null;break;case Number:o=p===null?null:Number(p);break;case Object:case Array:try{o=JSON.parse(p)}catch{o=null}}return o}},O1=(p,n)=>!U1(p,n),m1={attribute:!0,type:String,converter:l1,reflect:!1,hasChanged:O1};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),I.litPropertyMetadata??(I.litPropertyMetadata=new WeakMap);let B=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,o=m1){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(n,o),!o.noAccessor){const t=Symbol(),e=this.getPropertyDescriptor(n,t,o);e!==void 0&&D1(this.prototype,n,e)}}static getPropertyDescriptor(n,o,t){const{get:e,set:i}=Z1(this.prototype,n)??{get(){return this[o]},set(r){this[o]=r}};return{get(){return e==null?void 0:e.call(this)},set(r){const s=e==null?void 0:e.call(this);i.call(this,r),this.requestUpdate(n,s,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??m1}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const n=F1(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const o=this.properties,t=[...B1(o),...z1(o)];for(const e of t)this.createProperty(e,o[e])}const n=this[Symbol.metadata];if(n!==null){const o=litPropertyMetadata.get(n);if(o!==void 0)for(const[t,e]of o)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[o,t]of this.elementProperties){const e=this._$Eu(o,t);e!==void 0&&this._$Eh.set(e,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const o=[];if(Array.isArray(n)){const t=new Set(n.flat(1/0).reverse());for(const e of t)o.unshift(h1(e))}else n!==void 0&&o.push(h1(n));return o}static _$Eu(n,o){const t=o.attribute;return t===!1?void 0:typeof t=="string"?t:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(o=>o(this))}addController(n){var o;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((o=n.hostConnected)==null||o.call(n))}removeController(n){var o;(o=this._$EO)==null||o.delete(n)}_$E_(){const n=new Map,o=this.constructor.elementProperties;for(const t of o.keys())this.hasOwnProperty(t)&&(n.set(t,this[t]),delete this[t]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return R1(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(o=>{var t;return(t=o.hostConnected)==null?void 0:t.call(o)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(o=>{var t;return(t=o.hostDisconnected)==null?void 0:t.call(o)})}attributeChangedCallback(n,o,t){this._$AK(n,t)}_$EC(n,o){var i;const t=this.constructor.elementProperties.get(n),e=this.constructor._$Eu(n,t);if(e!==void 0&&t.reflect===!0){const r=(((i=t.converter)==null?void 0:i.toAttribute)!==void 0?t.converter:l1).toAttribute(o,t.type);this._$Em=n,r==null?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(n,o){var i;const t=this.constructor,e=t._$Eh.get(n);if(e!==void 0&&this._$Em!==e){const r=t.getPropertyOptions(e),s=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)==null?void 0:i.fromAttribute)!==void 0?r.converter:l1;this._$Em=e,this[e]=s.fromAttribute(o,r.type),this._$Em=null}}requestUpdate(n,o,t){if(n!==void 0){if(t??(t=this.constructor.getPropertyOptions(n)),!(t.hasChanged??O1)(this[n],o))return;this.P(n,o,t)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(n,o,t){this._$AL.has(n)||this._$AL.set(n,o),t.reflect===!0&&this._$Em!==n&&(this._$Ej??(this._$Ej=new Set)).add(n)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[i,r]of e)r.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],r)}let n=!1;const o=this._$AL;try{n=this.shouldUpdate(o),n?(this.willUpdate(o),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostUpdate)==null?void 0:i.call(e)}),this.update(o)):this._$EU()}catch(e){throw n=!1,this._$EU(),e}n&&this._$AE(o)}willUpdate(n){}_$AE(n){var o;(o=this._$EO)==null||o.forEach(t=>{var e;return(e=t.hostUpdated)==null?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(n){}firstUpdated(n){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[q("elementProperties")]=new Map,B[q("finalized")]=new Map,o1==null||o1({ReactiveElement:B}),(I.reactiveElementVersions??(I.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,e1=W.trustedTypes,g1=e1?e1.createPolicy("lit-html",{createHTML:p=>p}):void 0,A1="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,E1="?"+V,Y1=`<${E1}>`,D=document,X=()=>D.createComment(""),G=p=>p===null||typeof p!="object"&&typeof p!="function",M1=Array.isArray,q1=p=>M1(p)||typeof(p==null?void 0:p[Symbol.iterator])=="function",i1=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b1=/-->/g,v1=/>/g,R=RegExp(`>|${i1}(?:([^\\s"'>=/]+)(${i1}*=${i1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y1=/'/g,w1=/"/g,L1=/^(?:script|style|textarea|title)$/i,T1=p=>(n,...o)=>({_$litType$:p,strings:n,values:o}),j=T1(1),S1=T1(2),z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),x1=new WeakMap,U=D.createTreeWalker(D,129);function j1(p,n){if(!Array.isArray(p)||!p.hasOwnProperty("raw"))throw Error("invalid template strings array");return g1!==void 0?g1.createHTML(n):n}const W1=(p,n)=>{const o=p.length-1,t=[];let e,i=n===2?"<svg>":"",r=Y;for(let s=0;s<o;s++){const l=p[s];let c,C,h=-1,g=0;for(;g<l.length&&(r.lastIndex=g,C=r.exec(l),C!==null);)g=r.lastIndex,r===Y?C[1]==="!--"?r=b1:C[1]!==void 0?r=v1:C[2]!==void 0?(L1.test(C[2])&&(e=RegExp("</"+C[2],"g")),r=R):C[3]!==void 0&&(r=R):r===R?C[0]===">"?(r=e??Y,h=-1):C[1]===void 0?h=-2:(h=r.lastIndex-C[2].length,c=C[1],r=C[3]===void 0?R:C[3]==='"'?w1:y1):r===w1||r===y1?r=R:r===b1||r===v1?r=Y:(r=R,e=void 0);const f=r===R&&p[s+1].startsWith("/>")?" ":"";i+=r===Y?l+Y1:h>=0?(t.push(c),l.slice(0,h)+A1+l.slice(h)+V+f):l+V+(h===-2?s:f)}return[j1(p,i+(p[o]||"<?>")+(n===2?"</svg>":"")),t]};class J{constructor({strings:n,_$litType$:o},t){let e;this.parts=[];let i=0,r=0;const s=n.length-1,l=this.parts,[c,C]=W1(n,o);if(this.el=J.createElement(c,t),U.currentNode=this.el.content,o===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(e=U.nextNode())!==null&&l.length<s;){if(e.nodeType===1){if(e.hasAttributes())for(const h of e.getAttributeNames())if(h.endsWith(A1)){const g=C[r++],f=e.getAttribute(h).split(V),m=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?G1:m[1]==="?"?J1:m[1]==="@"?Q1:n1}),e.removeAttribute(h)}else h.startsWith(V)&&(l.push({type:6,index:i}),e.removeAttribute(h));if(L1.test(e.tagName)){const h=e.textContent.split(V),g=h.length-1;if(g>0){e.textContent=e1?e1.emptyScript:"";for(let f=0;f<g;f++)e.append(h[f],X()),U.nextNode(),l.push({type:2,index:++i});e.append(h[g],X())}}}else if(e.nodeType===8)if(e.data===E1)l.push({type:2,index:i});else{let h=-1;for(;(h=e.data.indexOf(V,h+1))!==-1;)l.push({type:7,index:i}),h+=V.length-1}i++}}static createElement(n,o){const t=D.createElement("template");return t.innerHTML=n,t}}function F(p,n,o=p,t){var r,s;if(n===z)return n;let e=t!==void 0?(r=o._$Co)==null?void 0:r[t]:o._$Cl;const i=G(n)?void 0:n._$litDirective$;return(e==null?void 0:e.constructor)!==i&&((s=e==null?void 0:e._$AO)==null||s.call(e,!1),i===void 0?e=void 0:(e=new i(p),e._$AT(p,o,t)),t!==void 0?(o._$Co??(o._$Co=[]))[t]=e:o._$Cl=e),e!==void 0&&(n=F(p,e._$AS(p,n.values),e,t)),n}class X1{constructor(n,o){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:o},parts:t}=this._$AD,e=((n==null?void 0:n.creationScope)??D).importNode(o,!0);U.currentNode=e;let i=U.nextNode(),r=0,s=0,l=t[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new Q(i,i.nextSibling,this,n):l.type===1?c=new l.ctor(i,l.name,l.strings,this,n):l.type===6&&(c=new tt(i,this,n)),this._$AV.push(c),l=t[++s]}r!==(l==null?void 0:l.index)&&(i=U.nextNode(),r++)}return U.currentNode=D,e}p(n){let o=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(n,t,o),o+=t.strings.length-2):t._$AI(n[o])),o++}}class Q{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,o,t,e){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=n,this._$AB=o,this._$AM=t,this.options=e,this._$Cv=(e==null?void 0:e.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=o.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,o=this){n=F(this,n,o),G(n)?n===M||n==null||n===""?(this._$AH!==M&&this._$AR(),this._$AH=M):n!==this._$AH&&n!==z&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):q1(n)?this.k(n):this._(n)}S(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.S(n))}_(n){this._$AH!==M&&G(this._$AH)?this._$AA.nextSibling.data=n:this.T(D.createTextNode(n)),this._$AH=n}$(n){var i;const{values:o,_$litType$:t}=n,e=typeof t=="number"?this._$AC(n):(t.el===void 0&&(t.el=J.createElement(j1(t.h,t.h[0]),this.options)),t);if(((i=this._$AH)==null?void 0:i._$AD)===e)this._$AH.p(o);else{const r=new X1(e,this),s=r.u(this.options);r.p(o),this.T(s),this._$AH=r}}_$AC(n){let o=x1.get(n.strings);return o===void 0&&x1.set(n.strings,o=new J(n)),o}k(n){M1(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let t,e=0;for(const i of n)e===o.length?o.push(t=new Q(this.S(X()),this.S(X()),this,this.options)):t=o[e],t._$AI(i),e++;e<o.length&&(this._$AR(t&&t._$AB.nextSibling,e),o.length=e)}_$AR(n=this._$AA.nextSibling,o){var t;for((t=this._$AP)==null?void 0:t.call(this,!1,!0,o);n&&n!==this._$AB;){const e=n.nextSibling;n.remove(),n=e}}setConnected(n){var o;this._$AM===void 0&&(this._$Cv=n,(o=this._$AP)==null||o.call(this,n))}}class n1{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,o,t,e,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=n,this.name=o,this._$AM=e,this.options=i,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=M}_$AI(n,o=this,t,e){const i=this.strings;let r=!1;if(i===void 0)n=F(this,n,o,0),r=!G(n)||n!==this._$AH&&n!==z,r&&(this._$AH=n);else{const s=n;let l,c;for(n=i[0],l=0;l<i.length-1;l++)c=F(this,s[t+l],o,l),c===z&&(c=this._$AH[l]),r||(r=!G(c)||c!==this._$AH[l]),c===M?n=M:n!==M&&(n+=(c??"")+i[l+1]),this._$AH[l]=c}r&&!e&&this.j(n)}j(n){n===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class G1 extends n1{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===M?void 0:n}}class J1 extends n1{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==M)}}class Q1 extends n1{constructor(n,o,t,e,i){super(n,o,t,e,i),this.type=5}_$AI(n,o=this){if((n=F(this,n,o,0)??M)===z)return;const t=this._$AH,e=n===M&&t!==M||n.capture!==t.capture||n.once!==t.once||n.passive!==t.passive,i=n!==M&&(t===M||e);e&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,n):this._$AH.handleEvent(n)}}class tt{constructor(n,o,t){this.element=n,this.type=6,this._$AN=void 0,this._$AM=o,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(n){F(this,n)}}const r1=W.litHtmlPolyfillSupport;r1==null||r1(J,Q),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.1.3");const et=(p,n,o)=>{const t=(o==null?void 0:o.renderBefore)??n;let e=t._$litPart$;if(e===void 0){const i=(o==null?void 0:o.renderBefore)??null;t._$litPart$=e=new Q(n.insertBefore(X(),i),i,void 0,o??{})}return e._$AI(p),e};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class N extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const n=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=n.firstChild),n}update(n){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=et(o,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)==null||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)==null||n.setConnected(!1)}render(){return z}}var k1;N._$litElement$=!0,N.finalized=!0,(k1=globalThis.litElementHydrateSupport)==null||k1.call(globalThis,{LitElement:N});const s1=globalThis.litElementPolyfillSupport;s1==null||s1({LitElement:N});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const nt="./assets/fixPhone-CSn4ZnoP.jpg",ot=S1`
<svg viewBox="0 0 152 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_132_75)">
<path d="M37.7379 0H8.38621C3.75464 0 0 3.71604 0 8.3V74.7C0 79.2839 3.75464 83 8.38621 83H37.7379C42.3695 83 46.1241 79.2839 46.1241 74.7V8.3C46.1241 3.71604 42.3695 0 37.7379 0Z" fill="#4B4B4B"/>
<path d="M41.931 8.29993H4.19312V70.5499H41.931V8.29993Z" fill="white"/>
<path d="M23.0621 80.925C25.3779 80.925 27.2552 79.067 27.2552 76.775C27.2552 74.483 25.3779 72.625 23.0621 72.625C20.7464 72.625 18.869 74.483 18.869 76.775C18.869 79.067 20.7464 80.925 23.0621 80.925Z" fill="white"/>
<path d="M26.7944 4.25842H18.4082V5.29592H26.7944V4.25842Z" fill="white"/>
<path d="M97.9928 31.042C98.5239 31.042 98.9851 30.9763 99.3765 30.8449C99.7749 30.7135 100.1 30.5336 100.351 30.3054C100.61 30.0703 100.802 29.7935 100.928 29.4754C101.054 29.1573 101.117 28.8079 101.117 28.4275C101.117 27.6666 100.862 27.0823 100.351 26.6741C99.8483 26.266 99.0761 26.062 98.0348 26.062H96.2317V31.042H97.9928ZM105.247 38.9063H102.7C102.217 38.9063 101.868 38.7195 101.651 38.346L98.4645 33.5424C98.3457 33.3625 98.213 33.2346 98.0662 33.1585C97.9264 33.0824 97.7167 33.0444 97.4372 33.0444H96.2317V38.9063H93.4119V23.904H98.0348C99.0621 23.904 99.9426 24.0113 100.676 24.2256C101.417 24.4331 102.022 24.7271 102.49 25.1075C102.965 25.4879 103.315 25.9444 103.538 26.477C103.762 27.0026 103.874 27.5836 103.874 28.22C103.874 28.7249 103.797 29.2021 103.643 29.6518C103.496 30.1014 103.28 30.5094 102.993 30.876C102.714 31.2426 102.364 31.5643 101.945 31.8409C101.532 32.1175 101.061 32.3354 100.53 32.4945C100.711 32.5983 100.879 32.7228 101.033 32.868C101.187 33.0064 101.326 33.1724 101.452 33.366L105.247 38.9063ZM112.708 32.3596C112.708 32.0276 112.659 31.7164 112.561 31.4259C112.47 31.1285 112.331 30.8691 112.142 30.6478C111.953 30.4264 111.712 30.2535 111.419 30.129C111.132 29.9976 110.797 29.9319 110.412 29.9319C109.664 29.9319 109.074 30.1429 108.641 30.5648C108.214 30.9866 107.942 31.585 107.823 32.3596H112.708ZM107.771 33.9055C107.813 34.4519 107.91 34.9258 108.064 35.3269C108.218 35.7211 108.421 36.0496 108.672 36.3125C108.924 36.5684 109.221 36.7621 109.563 36.8935C109.913 37.018 110.297 37.0803 110.716 37.0803C111.136 37.0803 111.496 37.0319 111.796 36.935C112.104 36.8381 112.369 36.731 112.593 36.6134C112.823 36.4958 113.022 36.3886 113.19 36.2918C113.365 36.1949 113.533 36.1465 113.693 36.1465C113.91 36.1465 114.071 36.226 114.176 36.3851L114.92 37.3189C114.633 37.6509 114.312 37.931 113.955 38.1593C113.599 38.3806 113.225 38.5604 112.834 38.6988C112.449 38.8301 112.055 38.9235 111.649 38.9789C111.251 39.0343 110.863 39.0619 110.486 39.0619C109.738 39.0619 109.043 38.9409 108.4 38.6988C107.757 38.4498 107.198 38.0866 106.722 37.6094C106.247 37.1253 105.873 36.5304 105.601 35.8249C105.328 35.1125 105.192 34.2894 105.192 33.3556C105.192 32.6294 105.311 31.9481 105.548 31.3118C105.786 30.6685 106.125 30.1118 106.565 29.6414C107.012 29.1641 107.554 28.7871 108.19 28.5105C108.833 28.2339 109.556 28.0955 110.36 28.0955C111.038 28.0955 111.663 28.2028 112.236 28.4171C112.809 28.6315 113.302 28.9463 113.714 29.3613C114.127 29.7694 114.448 30.2743 114.679 30.876C114.916 31.4709 115.035 32.1521 115.035 32.9199C115.035 33.3073 114.993 33.57 114.909 33.7084C114.826 33.8398 114.665 33.9055 114.427 33.9055H107.771ZM119.568 36.1465C119.861 36.4993 120.179 36.7483 120.521 36.8935C120.871 37.0388 121.248 37.1114 121.654 37.1114C122.045 37.1114 122.398 37.0388 122.712 36.8935C123.027 36.7483 123.292 36.5269 123.509 36.2295C123.733 35.9321 123.904 35.5586 124.023 35.109C124.141 34.6525 124.201 34.1165 124.201 33.5009C124.201 32.8784 124.148 32.3528 124.044 31.9239C123.946 31.4881 123.803 31.1354 123.614 30.8656C123.425 30.5959 123.195 30.3988 122.922 30.2743C122.656 30.1498 122.352 30.0875 122.01 30.0875C121.472 30.0875 121.014 30.2016 120.637 30.4299C120.259 30.6513 119.903 30.9659 119.568 31.374V36.1465ZM119.431 29.714C119.872 29.2229 120.371 28.8253 120.93 28.5209C121.489 28.2165 122.146 28.0644 122.901 28.0644C123.488 28.0644 124.023 28.1854 124.505 28.4275C124.994 28.6696 125.413 29.0224 125.763 29.4858C126.119 29.9423 126.392 30.5094 126.58 31.1873C126.776 31.8581 126.874 32.6294 126.874 33.5009C126.874 34.2963 126.766 35.0329 126.549 35.7108C126.332 36.3886 126.021 36.9765 125.616 37.4745C125.218 37.9725 124.732 38.3633 124.159 38.6469C123.593 38.9235 122.957 39.0619 122.251 39.0619C121.65 39.0619 121.136 38.972 120.71 38.7921C120.284 38.6054 119.903 38.3495 119.568 38.0244V42.3819H116.978V28.2615H118.561C118.897 28.2615 119.117 28.4171 119.222 28.7284L119.431 29.714ZM134.576 34.362C133.828 34.3966 133.199 34.4623 132.689 34.5591C132.178 34.649 131.77 34.7666 131.463 34.9119C131.155 35.0571 130.935 35.2266 130.802 35.4203C130.669 35.6139 130.603 35.8249 130.603 36.0531C130.603 36.5028 130.736 36.8244 131.001 37.018C131.274 37.2116 131.627 37.3085 132.06 37.3085C132.591 37.3085 133.048 37.2151 133.434 37.0284C133.824 36.8348 134.206 36.5443 134.576 36.1569V34.362ZM128.643 29.7451C129.88 28.6246 131.369 28.0644 133.109 28.0644C133.738 28.0644 134.3 28.1681 134.796 28.3756C135.292 28.5763 135.711 28.8598 136.054 29.2264C136.396 29.586 136.655 30.0184 136.83 30.5233C137.011 31.0281 137.103 31.5815 137.103 32.1833V38.9063H135.929C135.684 38.9063 135.495 38.8716 135.363 38.8025C135.229 38.7264 135.124 38.5778 135.048 38.3564L134.817 37.5886C134.545 37.8308 134.279 38.0451 134.021 38.2319C133.761 38.4118 133.493 38.5639 133.214 38.6884C132.933 38.8129 132.633 38.9063 132.312 38.9685C131.998 39.0376 131.648 39.0723 131.264 39.0723C130.809 39.0723 130.39 39.0135 130.005 38.8959C129.621 38.7714 129.289 38.5881 129.009 38.346C128.73 38.1039 128.513 37.803 128.36 37.4434C128.206 37.0838 128.129 36.6653 128.129 36.188C128.129 35.9183 128.174 35.652 128.265 35.3891C128.356 35.1194 128.503 34.8635 128.705 34.6214C128.915 34.3793 129.184 34.151 129.513 33.9366C129.841 33.7223 130.243 33.5355 130.718 33.3764C131.201 33.2173 131.759 33.0894 132.396 32.9925C133.031 32.8888 133.759 32.8265 134.576 32.8058V32.1833C134.576 31.4709 134.422 30.9451 134.115 30.6063C133.807 30.2604 133.363 30.0875 132.784 30.0875C132.364 30.0875 132.015 30.1359 131.736 30.2328C131.463 30.3296 131.222 30.4403 131.012 30.5648C130.802 30.6824 130.61 30.7895 130.435 30.8864C130.267 30.9833 130.079 31.0316 129.869 31.0316C129.687 31.0316 129.534 30.9866 129.408 30.8968C129.282 30.7999 129.181 30.6893 129.104 30.5648L128.643 29.7451ZM142.225 28.2615V38.9063H139.625V28.2615H142.225ZM142.581 25.1594C142.581 25.3808 142.535 25.5883 142.445 25.7819C142.353 25.9755 142.231 26.145 142.078 26.2903C141.931 26.4355 141.756 26.5531 141.554 26.643C141.351 26.726 141.135 26.7675 140.904 26.7675C140.68 26.7675 140.466 26.726 140.265 26.643C140.068 26.5531 139.898 26.4355 139.751 26.2903C139.604 26.145 139.485 25.9755 139.394 25.7819C139.311 25.5883 139.269 25.3808 139.269 25.1594C139.269 24.9311 139.311 24.7168 139.394 24.5161C139.485 24.3155 139.604 24.1426 139.751 23.9974C139.898 23.8521 140.068 23.738 140.265 23.655C140.466 23.5651 140.68 23.5201 140.904 23.5201C141.135 23.5201 141.351 23.5651 141.554 23.655C141.756 23.738 141.931 23.8521 142.078 23.9974C142.231 24.1426 142.353 24.3155 142.445 24.5161C142.535 24.7168 142.581 24.9311 142.581 25.1594ZM147.306 30.1083C147.642 29.4719 148.04 28.9739 148.501 28.6143C148.963 28.2476 149.508 28.0644 150.137 28.0644C150.633 28.0644 151.032 28.1716 151.332 28.386L151.164 30.3054C151.129 30.4299 151.076 30.5198 151.007 30.5751C150.944 30.6235 150.856 30.6478 150.745 30.6478C150.64 30.6478 150.483 30.6305 150.273 30.5959C150.07 30.5613 149.871 30.544 149.675 30.544C149.388 30.544 149.134 30.5855 148.91 30.6685C148.686 30.7515 148.484 30.8725 148.302 31.0316C148.128 31.1838 147.971 31.3705 147.83 31.5919C147.698 31.8133 147.572 32.0656 147.453 32.3493V38.9063H144.864V28.2615H146.384C146.65 28.2615 146.835 28.3099 146.939 28.4068C147.044 28.4966 147.114 28.6626 147.149 28.9048L147.306 30.1083Z" fill="#585858"/>
<path d="M101.484 47.3826C101.4 47.5279 101.309 47.6351 101.211 47.7043C101.12 47.7665 101.005 47.7976 100.865 47.7976C100.718 47.7976 100.558 47.7458 100.383 47.642C100.215 47.5314 100.012 47.4103 99.7749 47.2789C99.5373 47.1475 99.2577 47.0299 98.9362 46.9261C98.6217 46.8155 98.2479 46.7601 97.8146 46.7601C97.4232 46.7601 97.0808 46.8085 96.7873 46.9054C96.4938 46.9953 96.2457 47.1233 96.043 47.2893C95.8474 47.4553 95.7006 47.6559 95.6027 47.891C95.5048 48.1193 95.456 48.3718 95.456 48.6484C95.456 49.0011 95.5538 49.2951 95.7495 49.5303C95.9522 49.7654 96.2177 49.966 96.5462 50.132C96.8747 50.298 97.2485 50.4468 97.6678 50.5781C98.0871 50.7095 98.5169 50.8514 98.9572 51.0035C99.3975 51.1488 99.8273 51.3216 100.247 51.5223C100.666 51.7159 101.04 51.9649 101.368 52.2693C101.697 52.5666 101.959 52.9333 102.154 53.369C102.357 53.8048 102.458 54.3339 102.458 54.9564C102.458 55.6343 102.34 56.2705 102.102 56.8654C101.871 57.4533 101.529 57.9686 101.075 58.4113C100.627 58.847 100.079 59.1929 99.4289 59.4488C98.779 59.6978 98.0347 59.8223 97.1961 59.8223C96.7139 59.8223 96.2386 59.7739 95.7704 59.677C95.3023 59.5871 94.8515 59.4556 94.4182 59.2828C93.9919 59.1099 93.59 58.9024 93.2127 58.6603C92.8353 58.4181 92.4998 58.1484 92.2063 57.851L93.0344 56.5126C93.1043 56.4158 93.1952 56.3363 93.307 56.274C93.4188 56.2049 93.5376 56.1703 93.6634 56.1703C93.8381 56.1703 94.0268 56.2429 94.2295 56.3881C94.4322 56.5265 94.6733 56.6821 94.9528 56.855C95.2323 57.0279 95.5572 57.187 95.9277 57.3323C96.3051 57.4706 96.7558 57.5398 97.28 57.5398C98.0836 57.5398 98.7056 57.353 99.1459 56.9795C99.5862 56.5991 99.8063 56.0561 99.8063 55.3506C99.8063 54.9564 99.705 54.6348 99.5023 54.3858C99.3067 54.1368 99.0446 53.9293 98.7161 53.7633C98.3876 53.5904 98.0138 53.4451 97.5944 53.3275C97.1751 53.2099 96.7489 53.082 96.3155 52.9436C95.8822 52.8053 95.456 52.6393 95.0366 52.4456C94.6173 52.252 94.2435 51.9995 93.915 51.6883C93.5865 51.377 93.321 50.9896 93.1183 50.5263C92.9227 50.0559 92.8248 49.4784 92.8248 48.7936C92.8248 48.2473 92.9331 47.7146 93.1497 47.1959C93.3734 46.6771 93.6949 46.2171 94.1142 45.816C94.5335 45.4149 95.0507 45.0933 95.6656 44.8511C96.2806 44.609 96.9864 44.488 97.7831 44.488C98.6777 44.488 99.5023 44.6264 100.257 44.903C101.012 45.1796 101.655 45.567 102.186 46.065L101.484 47.3826ZM106.955 50.1528C107.375 49.7654 107.836 49.4508 108.339 49.2086C108.842 48.9665 109.433 48.8455 110.111 48.8455C110.698 48.8455 111.218 48.9458 111.673 49.1464C112.127 49.34 112.504 49.6168 112.805 49.9764C113.112 50.3291 113.343 50.7545 113.497 51.2525C113.657 51.7436 113.738 52.2865 113.738 52.8814V59.6563H111.149V52.8814C111.149 52.2313 110.998 51.7298 110.698 51.377C110.397 51.0174 109.939 50.8375 109.325 50.8375C108.877 50.8375 108.458 50.9378 108.067 51.1384C107.675 51.339 107.305 51.6121 106.955 51.958V59.6563H104.366V44.239H106.955V50.1528ZM120.959 48.8455C121.756 48.8455 122.479 48.9735 123.129 49.2294C123.786 49.4853 124.345 49.8484 124.807 50.3188C125.275 50.7891 125.635 51.3631 125.886 52.041C126.138 52.7189 126.264 53.4763 126.264 54.3131C126.264 55.157 126.138 55.9178 125.886 56.5956C125.635 57.2735 125.275 57.851 124.807 58.3283C124.345 58.8055 123.786 59.1721 123.129 59.428C122.479 59.6839 121.756 59.8119 120.959 59.8119C120.156 59.8119 119.425 59.6839 118.768 59.428C118.112 59.1721 117.549 58.8055 117.081 58.3283C116.619 57.851 116.26 57.2735 116.001 56.5956C115.749 55.9178 115.624 55.157 115.624 54.3131C115.624 53.4763 115.749 52.7189 116.001 52.041C116.26 51.3631 116.619 50.7891 117.081 50.3188C117.549 49.8484 118.112 49.4853 118.768 49.2294C119.425 48.9735 120.156 48.8455 120.959 48.8455ZM120.959 57.8406C121.854 57.8406 122.514 57.5433 122.941 56.9484C123.374 56.3535 123.591 55.482 123.591 54.3339C123.591 53.1858 123.374 52.3108 122.941 51.709C122.514 51.1073 121.854 50.8064 120.959 50.8064C120.051 50.8064 119.376 51.1108 118.936 51.7194C118.503 52.3211 118.286 53.1926 118.286 54.3339C118.286 55.4751 118.503 56.3466 118.936 56.9484C119.376 57.5433 120.051 57.8406 120.959 57.8406ZM130.828 56.8965C131.122 57.2493 131.439 57.4983 131.783 57.6435C132.131 57.7888 132.509 57.8614 132.915 57.8614C133.305 57.8614 133.659 57.7888 133.974 57.6435C134.288 57.4983 134.553 57.2769 134.77 56.9795C134.993 56.6821 135.165 56.3086 135.284 55.859C135.402 55.4025 135.462 54.8665 135.462 54.2509C135.462 53.6284 135.41 53.1028 135.305 52.6739C135.207 52.2381 135.064 51.8854 134.875 51.6156C134.686 51.3459 134.456 51.1488 134.183 51.0243C133.917 50.8998 133.613 50.8375 133.271 50.8375C132.733 50.8375 132.275 50.9516 131.898 51.1799C131.521 51.4013 131.164 51.7159 130.828 52.124V56.8965ZM130.692 50.464C131.133 49.9729 131.632 49.5753 132.191 49.2709C132.75 48.9665 133.407 48.8144 134.162 48.8144C134.749 48.8144 135.284 48.9354 135.766 49.1775C136.255 49.4196 136.674 49.7724 137.024 50.2358C137.38 50.6923 137.653 51.2594 137.842 51.9373C138.037 52.6081 138.135 53.3794 138.135 54.2509C138.135 55.0463 138.026 55.7829 137.81 56.4608C137.593 57.1386 137.282 57.7265 136.877 58.2245C136.479 58.7225 135.993 59.1133 135.42 59.3969C134.854 59.6735 134.217 59.8119 133.512 59.8119C132.911 59.8119 132.397 59.722 131.971 59.5421C131.544 59.3554 131.164 59.0995 130.828 58.7744V63.1319H128.239V49.0115H129.822C130.157 49.0115 130.377 49.1671 130.482 49.4784L130.692 50.464Z" fill="#E54747"/>
<path d="M13.5992 27.5137C13.0643 27.1013 12.3043 27.1515 11.8201 27.6251L9.56806 29.854C9.08951 30.3277 9.03884 31.08 9.44983 31.6149L13.9539 37.4101C14.2072 37.7389 14.607 37.934 15.0236 37.934H18.0695L24.2062 44.0079C23.3786 45.6239 23.6433 47.6522 25.0114 49.0007L31.3171 55.2418C32.0208 55.9383 33.1637 55.9383 33.8675 55.2418L37.4707 51.6755C38.1745 50.979 38.1745 49.8477 37.4707 49.1511L31.1651 42.9101C29.8026 41.5616 27.7532 41.2942 26.1205 42.1133L19.9838 36.0393V33.0303C19.9838 32.6124 19.7867 32.2223 19.4545 31.9716L13.5992 27.5137ZM10.2943 49.3072C9.57933 50.0149 9.17396 50.979 9.17396 51.982C9.17396 54.0716 10.8855 55.7656 12.9968 55.7656C14.0102 55.7656 14.9841 55.3643 15.6992 54.6566L22.3315 48.0924C21.8923 46.9278 21.8248 45.6628 22.1288 44.4648L18.6551 41.0266L10.2943 49.3072ZM37.9999 35.2593C37.9999 34.6741 37.938 34.1057 37.8198 33.5597C37.6847 32.9355 36.9133 32.7739 36.4573 33.2253L32.8597 36.7861C32.6908 36.9533 32.4599 37.0479 32.2236 37.0479H28.9919C28.4964 37.0479 28.091 36.6468 28.091 36.1565V32.9523C28.091 32.7182 28.1868 32.4898 28.3557 32.3226L31.9532 28.7618C32.4092 28.3105 32.246 27.547 31.6154 27.4133C31.058 27.2963 30.4838 27.235 29.8926 27.235C25.4167 27.235 21.7853 30.8292 21.7853 35.2593V35.3038L26.5878 40.0571C28.6146 39.55 30.8554 40.085 32.443 41.6564L33.327 42.5312C36.0857 41.2495 37.9999 38.4745 37.9999 35.2593ZM12.3268 51.3077C12.3268 50.953 12.4692 50.6129 12.7226 50.362C12.976 50.1112 13.3196 49.9704 13.678 49.9704C14.0364 49.9704 14.3801 50.1112 14.6335 50.362C14.8869 50.6129 15.0292 50.953 15.0292 51.3077C15.0292 51.6624 14.8869 52.0026 14.6335 52.2534C14.3801 52.5042 14.0364 52.6451 13.678 52.6451C13.3196 52.6451 12.976 52.5042 12.7226 52.2534C12.4692 52.0026 12.3268 51.6624 12.3268 51.3077Z" fill="#4B4B4B"/>
<path d="M56.3448 32.4161V41.4885L59.3497 41.4833C60.9963 41.4781 62.4699 41.4574 62.6115 41.4418C62.8842 41.4107 62.9419 41.4003 63.4086 41.3017C63.5607 41.2757 63.697 41.2498 63.7128 41.2498C63.7285 41.2498 64.0169 41.1564 64.3525 41.0422C66.7019 40.2481 68.6107 38.5872 69.691 36.4074C69.9742 35.8313 70.315 34.897 70.3675 34.5597C70.3832 34.4611 70.4199 34.3002 70.4461 34.2067C70.4724 34.1133 70.4986 34.0251 70.4986 34.0147C70.4986 33.9732 70.5615 33.4074 70.5877 33.2102C70.6192 32.9922 70.6192 31.9957 70.5877 31.6272C70.4619 30.2155 70.0004 28.8557 69.219 27.61C68.0077 25.6897 66.0726 24.2676 63.8281 23.6603C62.8632 23.3956 62.6954 23.3853 59.4284 23.3645L56.3448 23.3437V32.4161ZM62.6377 26.6914C63.7967 26.9405 64.7721 27.4751 65.6268 28.3263C66.4292 29.1204 66.9116 29.9716 67.1948 31.0563C67.3312 31.5753 67.3784 32.795 67.2892 33.3763C67.1791 34.0925 66.791 35.0475 66.34 35.7171C65.8628 36.4281 65.029 37.1651 64.2372 37.5803C63.6184 37.9073 63.2146 38.0423 62.3493 38.2239C62.2654 38.2395 61.6099 38.2602 60.9019 38.2706L59.6119 38.2914V32.468C59.6119 29.2657 59.6171 26.6291 59.6329 26.6083C59.6748 26.5305 62.2234 26.6032 62.6377 26.6914Z" fill="#E54747"/>
<path d="M77.9975 27.4181C77.9871 27.4285 77.8507 27.4544 77.6986 27.47C76.676 27.5894 75.1815 28.2278 74.3582 28.8973C73.9439 29.2347 73.1206 30.1118 72.8741 30.4855C71.9459 31.8713 71.5054 33.5892 71.6784 35.1566C71.7361 35.6497 71.8777 36.34 71.9721 36.558C71.9931 36.6151 72.0665 36.8071 72.1294 36.9888C72.271 37.404 72.5962 38.0112 72.9265 38.4835C73.9334 39.9316 75.6587 41.0527 77.3997 41.3848C77.9713 41.4938 79.3033 41.525 79.7858 41.4419C79.9169 41.4212 80.1057 41.39 80.2053 41.3744C80.5881 41.3174 81.4062 41.0319 81.9621 40.762C84.023 39.7551 85.4861 37.7621 85.8374 35.494C85.9108 35.0165 85.9161 33.7086 85.8479 33.4179C85.8322 33.3453 85.8007 33.2051 85.785 33.1065C85.7378 32.8211 85.4966 31.9958 85.4389 31.9232C85.4074 31.892 85.3969 31.8609 85.4127 31.8609C85.4599 31.8609 84.9564 30.8851 84.7362 30.5633C83.8132 29.1776 82.3921 28.1395 80.8136 27.6828C80.5567 27.6101 80.284 27.5427 80.2105 27.5271C80.1371 27.5167 79.9588 27.4804 79.8172 27.4544C79.576 27.4129 78.0395 27.3818 77.9975 27.4181ZM79.5917 30.7035C80.3836 30.8644 81.2698 31.399 81.7838 32.0374C82.3711 32.7536 82.6385 33.5269 82.6385 34.4819C82.6333 34.975 82.5966 35.2293 82.455 35.6497C82.046 36.885 81.0234 37.8244 79.7124 38.1773C79.2771 38.2915 78.3017 38.2915 77.8455 38.1721C75.816 37.6427 74.5732 35.6808 74.9927 33.6723C75.4227 31.6014 77.4836 30.2779 79.5917 30.7035Z" fill="#E54747"/>
<path d="M67.3574 44.0837C67.3574 45.4954 67.3364 46.6528 67.3155 46.6528C67.2945 46.6528 67.2525 46.632 67.2211 46.6061C67.1214 46.5127 66.5603 46.2324 66.1408 46.0663C65.6793 45.8795 64.9714 45.6874 64.5781 45.6355C64.447 45.6199 64.2844 45.5992 64.211 45.5836C64.0222 45.5525 63.0258 45.5577 62.6902 45.594C62.5329 45.6096 62.2025 45.6667 61.956 45.7237C60.8757 45.9625 59.9108 46.414 58.9931 47.1199C58.5317 47.4728 57.787 48.3188 57.4042 48.9105C57.1053 49.388 56.67 50.3949 56.5756 50.8309C56.5442 50.9918 56.5022 51.1838 56.4707 51.3239C56.3868 51.6872 56.3554 52.2011 56.3711 52.8395C56.3816 53.2287 56.3973 53.5661 56.413 53.592C56.4288 53.6128 56.455 53.7633 56.476 53.919C56.5284 54.3238 56.8798 55.3463 57.1158 55.7978C57.8499 57.1732 58.8148 58.1438 60.173 58.8652C60.6083 59.0988 61.5365 59.4361 61.9036 59.4984C62.0032 59.514 62.1238 59.54 62.1658 59.5503C62.4018 59.6178 62.6325 59.6386 63.3195 59.6541C63.954 59.6645 64.3263 59.6386 64.856 59.5348C64.877 59.5348 64.9819 59.514 65.092 59.4984C65.716 59.3894 66.9589 58.8393 67.6563 58.3514C68.1598 57.9985 69.0198 57.1213 69.3659 56.6127C70.0581 55.5747 70.4776 54.4484 70.5878 53.2962C70.614 53.0055 70.6402 42.3034 70.614 41.6287L70.6087 41.5145H68.9831H67.3574V44.0837ZM64.4679 48.9053C65.7842 49.2531 66.8173 50.2599 67.2263 51.6094C67.3784 52.0973 67.3679 53.1509 67.2106 53.6595C66.9169 54.5885 66.4082 55.2788 65.6426 55.7875C65.1969 56.0833 64.5676 56.3324 64.1323 56.3947C62.6482 56.5919 61.311 56.0729 60.4248 54.957C59.0718 53.2391 59.4703 50.6959 61.29 49.4607C61.6676 49.2063 62.2497 48.9572 62.664 48.869C63.1307 48.7704 64.0169 48.7859 64.4679 48.9053Z" fill="#E54747"/>
<path d="M78.779 45.5317C78.7738 45.542 78.5378 45.5628 78.2598 45.5784C76.3405 45.6977 74.5051 46.6424 73.2151 48.1838C72.9791 48.4693 72.5123 49.2167 72.3236 49.6111C72.0404 50.1976 71.8201 50.9139 71.7362 51.4796C71.6681 51.9623 71.6523 52.1647 71.6523 52.5955C71.6471 53.2442 71.6838 53.5245 71.8935 54.4899C71.9355 54.6975 72.3026 55.5954 72.4756 55.9172C72.9424 56.7943 73.7552 57.7233 74.5733 58.315C75.0819 58.6835 75.8738 59.0935 76.4506 59.2908C76.8597 59.4257 76.9488 59.4517 77.2163 59.5036C77.2897 59.514 77.3788 59.5399 77.4155 59.5503C77.8036 59.6852 79.4345 59.6852 80.1267 59.5503C80.4519 59.488 80.4991 59.4776 80.756 59.405C83.441 58.6472 85.5124 56.2597 85.8532 53.5297C85.9057 53.1197 85.9057 52.1128 85.8532 51.6716C85.6225 49.7201 84.3587 47.7686 82.6229 46.6631C81.6947 46.0714 80.4309 45.651 79.3926 45.5836C79.1356 45.568 78.8944 45.5472 78.8577 45.5369C78.8262 45.5265 78.7895 45.5265 78.779 45.5317ZM79.9956 48.9831C81.3486 49.4347 82.3555 50.5869 82.6072 51.9778C82.6544 52.2633 82.6491 53.0003 82.5914 53.2961C82.5338 53.6024 82.303 54.2459 82.1614 54.4899C81.0077 56.4829 78.3857 57.0486 76.5188 55.7148C75.6955 55.1283 75.1554 54.2771 74.9613 53.2702C74.9194 53.0314 74.9246 52.0816 74.9718 51.8948C74.9875 51.8533 75.0138 51.7339 75.0347 51.6353C75.1029 51.3498 75.3232 50.862 75.5224 50.5505C76.0888 49.6786 77.0957 49.0091 78.0815 48.8482C78.1707 48.8326 78.2494 48.8118 78.2598 48.8015C78.2703 48.7911 78.5535 48.7911 78.8891 48.8015C79.403 48.817 79.5761 48.843 79.9956 48.9831Z" fill="#E54747"/>
</g>
<defs>
<clipPath id="clip0_132_75">
<rect width="152" height="83" fill="white"/>
</clipPath>
</defs>
</svg>
`,it=S1`
<svg viewBox="0 0 297 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M73.7379 0H16.3862C7.33636 0 0 7.34254 0 16.4V147.6C0 156.657 7.33636 164 16.3862 164H73.7379C82.7877 164 90.1241 156.657 90.1241 147.6V16.4C90.1241 7.34254 82.7877 0 73.7379 0Z" fill="#272727"/>
<path d="M81.931 16.4H8.19312V139.4H81.931V16.4Z" fill="white"/>
<path d="M45.0621 159.9C49.587 159.9 53.2552 156.229 53.2552 151.7C53.2552 147.171 49.587 143.5 45.0621 143.5C40.5372 143.5 36.869 147.171 36.869 151.7C36.869 156.229 40.5372 159.9 45.0621 159.9Z" fill="white"/>
<path d="M52.355 8.41418H35.9688V10.4642H52.355V8.41418Z" fill="white"/>
<path d="M191.473 61.336C192.511 61.336 193.412 61.2061 194.177 60.9465C194.955 60.6869 195.59 60.3315 196.081 59.8805C196.587 59.4159 196.962 58.8691 197.208 58.2405C197.454 57.6119 197.577 56.9216 197.577 56.17C197.577 54.6666 197.078 53.5119 196.081 52.7055C195.098 51.8991 193.589 51.496 191.555 51.496H188.032V61.336H191.473ZM205.647 76.875H200.67C199.727 76.875 199.045 76.506 198.621 75.768L192.395 66.2765C192.162 65.9211 191.903 65.6684 191.616 65.518C191.343 65.3676 190.933 65.2925 190.387 65.2925H188.032V76.875H182.522V47.232H191.555C193.562 47.232 195.283 47.4439 196.716 47.8675C198.164 48.2775 199.345 48.8584 200.26 49.61C201.189 50.3616 201.871 51.2636 202.308 52.316C202.745 53.3546 202.964 54.5026 202.964 55.76C202.964 56.7576 202.813 57.7006 202.513 58.589C202.226 59.4774 201.803 60.2836 201.243 61.008C200.697 61.7324 200.014 62.3679 199.195 62.9145C198.389 63.4611 197.467 63.8916 196.43 64.206C196.785 64.411 197.112 64.657 197.413 64.944C197.713 65.2174 197.986 65.5454 198.232 65.928L205.647 76.875ZM220.225 63.9395C220.225 63.2835 220.13 62.6685 219.939 62.0945C219.761 61.5069 219.488 60.9944 219.119 60.557C218.751 60.1196 218.28 59.778 217.706 59.532C217.146 59.2724 216.491 59.1425 215.74 59.1425C214.279 59.1425 213.125 59.5594 212.278 60.393C211.445 61.2266 210.913 62.4089 210.681 63.9395H220.225ZM210.578 66.994C210.66 68.0736 210.851 69.0099 211.152 69.8025C211.452 70.5815 211.848 71.2306 212.34 71.75C212.831 72.2556 213.412 72.6384 214.081 72.898C214.763 73.144 215.514 73.267 216.334 73.267C217.153 73.267 217.856 73.1714 218.443 72.98C219.044 72.7886 219.563 72.5769 220 72.3445C220.451 72.1121 220.84 71.9004 221.168 71.709C221.509 71.5176 221.837 71.422 222.151 71.422C222.574 71.422 222.888 71.5791 223.093 71.8935L224.547 73.7385C223.987 74.3945 223.359 74.948 222.663 75.399C221.967 75.8364 221.236 76.1916 220.471 76.465C219.72 76.7246 218.949 76.9091 218.157 77.0185C217.378 77.1279 216.621 77.1825 215.883 77.1825C214.422 77.1825 213.063 76.9434 211.807 76.465C210.551 75.973 209.458 75.2555 208.53 74.3125C207.601 73.3559 206.871 72.1805 206.338 70.7865C205.806 69.3789 205.539 67.7525 205.539 65.9075C205.539 64.4725 205.772 63.1264 206.236 61.869C206.7 60.598 207.362 59.4979 208.223 58.5685C209.096 57.6255 210.155 56.8806 211.397 56.334C212.654 55.7874 214.067 55.514 215.637 55.514C216.962 55.514 218.184 55.7259 219.304 56.1495C220.423 56.5731 221.386 57.195 222.192 58.015C222.998 58.8214 223.626 59.819 224.076 61.008C224.54 62.1834 224.773 63.5295 224.773 65.0465C224.773 65.8119 224.691 66.3311 224.527 66.6045C224.363 66.8641 224.049 66.994 223.585 66.994H210.578ZM233.629 71.422C234.202 72.119 234.823 72.611 235.493 72.898C236.175 73.185 236.913 73.3285 237.705 73.3285C238.469 73.3285 239.159 73.185 239.773 72.898C240.388 72.611 240.907 72.1736 241.33 71.586C241.767 70.9984 242.102 70.2604 242.334 69.372C242.566 68.47 242.682 67.4109 242.682 66.1945C242.682 64.9645 242.58 63.9259 242.375 63.0785C242.184 62.2175 241.904 61.5205 241.535 60.9875C241.166 60.4545 240.716 60.065 240.183 59.819C239.664 59.573 239.07 59.45 238.401 59.45C237.35 59.45 236.455 59.6755 235.718 60.1265C234.98 60.5639 234.284 61.1856 233.629 61.992V71.422ZM233.362 58.712C234.223 57.7416 235.199 56.9559 236.291 56.3545C237.384 55.7531 238.667 55.4525 240.142 55.4525C241.289 55.4525 242.334 55.6916 243.276 56.17C244.232 56.6484 245.051 57.3454 245.734 58.261C246.43 59.163 246.963 60.2836 247.332 61.623C247.714 62.9486 247.905 64.4725 247.905 66.1945C247.905 67.7661 247.693 69.2216 247.27 70.561C246.847 71.9004 246.239 73.062 245.447 74.046C244.669 75.03 243.72 75.8021 242.6 76.3625C241.494 76.9091 240.251 77.1825 238.872 77.1825C237.698 77.1825 236.694 77.0049 235.861 76.6495C235.028 76.2805 234.284 75.7749 233.629 75.1325V83.7425H228.569V55.842H231.662C232.318 55.842 232.748 56.1495 232.953 56.7645L233.362 58.712ZM262.955 67.896C261.493 67.9644 260.264 68.0941 259.268 68.2855C258.27 68.4631 257.471 68.6955 256.872 68.9825C256.27 69.2695 255.84 69.6044 255.58 69.987C255.321 70.3696 255.191 70.7865 255.191 71.2375C255.191 72.1259 255.451 72.7614 255.969 73.144C256.503 73.5266 257.192 73.718 258.039 73.718C259.076 73.718 259.97 73.5335 260.722 73.1645C261.485 72.7819 262.231 72.2079 262.955 71.4425V67.896ZM251.361 58.7735C253.778 56.5595 256.687 55.4525 260.087 55.4525C261.316 55.4525 262.415 55.6575 263.385 56.0675C264.353 56.4639 265.172 57.0241 265.843 57.7485C266.511 58.4591 267.016 59.3134 267.359 60.311C267.712 61.3086 267.891 62.402 267.891 63.591V76.875H265.597C265.119 76.875 264.75 76.8066 264.491 76.67C264.23 76.5196 264.025 76.2259 263.877 75.7885L263.426 74.2715C262.894 74.7499 262.374 75.1735 261.869 75.5425C261.363 75.8979 260.838 76.1985 260.292 76.4445C259.744 76.6905 259.158 76.875 258.531 76.998C257.916 77.1346 257.233 77.203 256.483 77.203C255.594 77.203 254.775 77.0869 254.024 76.8545C253.273 76.6085 252.624 76.2464 252.078 75.768C251.532 75.2896 251.108 74.6951 250.808 73.9845C250.507 73.2739 250.357 72.447 250.357 71.504C250.357 70.971 250.446 70.4449 250.623 69.9255C250.801 69.3925 251.088 68.8869 251.484 68.4085C251.893 67.9301 252.419 67.4791 253.061 67.0555C253.703 66.6319 254.488 66.2629 255.416 65.9485C256.36 65.6341 257.45 65.3814 258.695 65.19C259.936 64.985 261.357 64.862 262.955 64.821V63.591C262.955 62.1834 262.653 61.1446 262.054 60.475C261.452 59.7916 260.584 59.45 259.453 59.45C258.633 59.45 257.95 59.5456 257.404 59.737C256.872 59.9284 256.401 60.147 255.99 60.393C255.58 60.6254 255.205 60.8371 254.863 61.0285C254.536 61.2199 254.167 61.3155 253.757 61.3155C253.402 61.3155 253.102 61.2266 252.856 61.049C252.61 60.8576 252.412 60.639 252.262 60.393L251.361 58.7735ZM277.9 55.842V76.875H272.82V55.842H277.9ZM278.596 49.7125C278.596 50.1499 278.507 50.5599 278.33 50.9425C278.151 51.3251 277.913 51.66 277.613 51.947C277.326 52.234 276.983 52.4664 276.589 52.644C276.192 52.808 275.77 52.89 275.319 52.89C274.881 52.89 274.464 52.808 274.07 52.644C273.685 52.4664 273.353 52.234 273.066 51.947C272.779 51.66 272.546 51.3251 272.369 50.9425C272.206 50.5599 272.124 50.1499 272.124 49.7125C272.124 49.2615 272.206 48.8379 272.369 48.4415C272.546 48.0451 272.779 47.7035 273.066 47.4165C273.353 47.1295 273.685 46.904 274.07 46.74C274.464 46.5624 274.881 46.4735 275.319 46.4735C275.77 46.4735 276.192 46.5624 276.589 46.74C276.983 46.904 277.326 47.1295 277.613 47.4165C277.913 47.7035 278.151 48.0451 278.33 48.4415C278.507 48.8379 278.596 49.2615 278.596 49.7125ZM287.829 59.491C288.484 58.2336 289.263 57.2496 290.164 56.539C291.065 55.8146 292.13 55.4525 293.359 55.4525C294.33 55.4525 295.108 55.6644 295.694 56.088L295.366 59.8805C295.297 60.1265 295.195 60.3041 295.059 60.4135C294.936 60.5091 294.765 60.557 294.547 60.557C294.342 60.557 294.035 60.5229 293.625 60.4545C293.229 60.3861 292.839 60.352 292.458 60.352C291.897 60.352 291.4 60.434 290.963 60.598C290.525 60.762 290.131 61.0011 289.775 61.3155C289.434 61.6161 289.127 61.9851 288.853 62.4225C288.594 62.8599 288.349 63.3586 288.116 63.919V76.875H283.056V55.842H286.026C286.546 55.842 286.907 55.9376 287.112 56.129C287.317 56.3066 287.452 56.6346 287.522 57.113L287.829 59.491Z" fill="#272727"/>
<path d="M198.294 93.6235C198.13 93.9105 197.952 94.1224 197.761 94.259C197.584 94.382 197.358 94.4435 197.085 94.4435C196.798 94.4435 196.484 94.341 196.143 94.136C195.815 93.9174 195.419 93.6781 194.955 93.4185C194.491 93.1589 193.944 92.9265 193.316 92.7215C192.702 92.5029 191.971 92.3935 191.125 92.3935C190.36 92.3935 189.691 92.4891 189.117 92.6805C188.544 92.8581 188.059 93.111 187.663 93.439C187.281 93.767 186.994 94.1634 186.803 94.628C186.611 95.079 186.516 95.5779 186.516 96.1245C186.516 96.8215 186.707 97.4024 187.089 97.867C187.486 98.3316 188.004 98.728 188.646 99.056C189.288 99.384 190.019 99.6779 190.838 99.9375C191.657 100.197 192.497 100.477 193.357 100.778C194.217 101.065 195.057 101.407 195.877 101.803C196.696 102.186 197.426 102.678 198.068 103.279C198.71 103.867 199.222 104.591 199.604 105.452C200.001 106.313 200.198 107.358 200.198 108.588C200.198 109.928 199.966 111.185 199.502 112.36C199.051 113.522 198.382 114.54 197.495 115.415C196.621 116.276 195.549 116.959 194.279 117.465C193.009 117.957 191.555 118.203 189.916 118.203C188.974 118.203 188.045 118.107 187.13 117.916C186.216 117.738 185.335 117.479 184.488 117.137C183.655 116.795 182.87 116.385 182.133 115.907C181.395 115.429 180.74 114.896 180.166 114.308L181.784 111.663C181.921 111.472 182.099 111.315 182.317 111.192C182.535 111.055 182.768 110.987 183.013 110.987C183.355 110.987 183.723 111.13 184.12 111.417C184.516 111.691 184.987 111.998 185.533 112.34C186.079 112.682 186.714 112.996 187.438 113.283C188.175 113.556 189.056 113.693 190.08 113.693C191.65 113.693 192.866 113.324 193.726 112.586C194.586 111.834 195.016 110.761 195.016 109.367C195.016 108.588 194.818 107.953 194.422 107.461C194.04 106.969 193.528 106.559 192.886 106.231C192.244 105.889 191.514 105.602 190.694 105.37C189.875 105.138 189.042 104.885 188.196 104.611C187.349 104.338 186.516 104.01 185.697 103.627C184.877 103.245 184.147 102.746 183.505 102.131C182.863 101.516 182.344 100.751 181.948 99.835C181.566 98.9056 181.375 97.7645 181.375 96.4115C181.375 95.3319 181.587 94.2795 182.01 93.2545C182.447 92.2295 183.075 91.3206 183.894 90.528C184.713 89.7354 185.724 89.0999 186.926 88.6215C188.127 88.1431 189.506 87.904 191.063 87.904C192.811 87.904 194.422 88.1774 195.897 88.724C197.372 89.2706 198.628 90.036 199.666 91.02L198.294 93.6235ZM208.985 99.097C209.805 98.3316 210.706 97.7099 211.689 97.2315C212.672 96.7531 213.826 96.514 215.151 96.514C216.298 96.514 217.315 96.7121 218.203 97.1085C219.09 97.4911 219.827 98.0379 220.415 98.7485C221.015 99.4455 221.466 100.286 221.767 101.27C222.08 102.24 222.238 103.313 222.238 104.488V117.875H217.178V104.488C217.178 103.204 216.885 102.213 216.298 101.516C215.71 100.805 214.816 100.45 213.614 100.45C212.74 100.45 211.921 100.648 211.156 101.044C210.392 101.441 209.668 101.981 208.985 102.664V117.875H203.926V87.412H208.985V99.097ZM236.348 96.514C237.905 96.514 239.318 96.7669 240.588 97.2725C241.872 97.7781 242.964 98.4956 243.865 99.425C244.78 100.354 245.484 101.489 245.975 102.828C246.467 104.167 246.713 105.664 246.713 107.317C246.713 108.985 246.467 110.488 245.975 111.827C245.484 113.167 244.78 114.308 243.865 115.251C242.964 116.194 241.872 116.918 240.588 117.424C239.318 117.93 237.905 118.182 236.348 118.182C234.778 118.182 233.351 117.93 232.067 117.424C230.784 116.918 229.685 116.194 228.77 115.251C227.868 114.308 227.165 113.167 226.66 111.827C226.168 110.488 225.923 108.985 225.923 107.317C225.923 105.664 226.168 104.167 226.66 102.828C227.165 101.489 227.868 100.354 228.77 99.425C229.685 98.4956 230.784 97.7781 232.067 97.2725C233.351 96.7669 234.778 96.514 236.348 96.514ZM236.348 114.287C238.096 114.287 239.387 113.7 240.219 112.524C241.066 111.349 241.489 109.627 241.489 107.358C241.489 105.09 241.066 103.361 240.219 102.172C239.387 100.983 238.096 100.388 236.348 100.388C234.573 100.388 233.255 100.99 232.395 102.192C231.549 103.381 231.125 105.103 231.125 107.358C231.125 109.613 231.549 111.335 232.395 112.524C233.255 113.7 234.573 114.287 236.348 114.287ZM255.631 112.422C256.206 113.119 256.826 113.611 257.496 113.898C258.177 114.185 258.915 114.328 259.709 114.328C260.472 114.328 261.163 114.185 261.777 113.898C262.392 113.611 262.909 113.174 263.334 112.586C263.769 111.998 264.105 111.26 264.338 110.372C264.568 109.47 264.686 108.411 264.686 107.194C264.686 105.964 264.583 104.926 264.379 104.078C264.187 103.217 263.908 102.52 263.539 101.987C263.17 101.454 262.72 101.065 262.187 100.819C261.667 100.573 261.073 100.45 260.405 100.45C259.353 100.45 258.459 100.675 257.722 101.126C256.984 101.564 256.288 102.186 255.631 102.992V112.422ZM255.365 99.712C256.227 98.7416 257.202 97.9559 258.295 97.3545C259.386 96.7531 260.671 96.4525 262.146 96.4525C263.293 96.4525 264.338 96.6916 265.28 97.17C266.235 97.6484 267.054 98.3454 267.738 99.261C268.434 100.163 268.967 101.284 269.335 102.623C269.717 103.949 269.909 105.472 269.909 107.194C269.909 108.766 269.696 110.222 269.274 111.561C268.849 112.9 268.242 114.062 267.451 115.046C266.673 116.03 265.723 116.802 264.604 117.362C263.498 117.909 262.254 118.182 260.876 118.182C259.701 118.182 258.697 118.005 257.865 117.649C257.03 117.28 256.288 116.775 255.631 116.132V124.742H250.572V96.842H253.665C254.321 96.842 254.751 97.1495 254.956 97.7645L255.365 99.712Z" fill="white"/>
<path d="M26.5723 54.3644C25.5271 53.5495 24.042 53.6487 23.096 54.5845L18.6956 58.9887C17.7605 59.9245 17.6615 61.411 18.4646 62.4681L27.2654 73.9188C27.7603 74.5684 28.5415 74.9538 29.3554 74.9538H35.3069L47.2978 86.9553C45.6807 90.1484 46.1978 94.1562 48.8711 96.8207L61.192 109.152C62.5672 110.529 64.8003 110.529 66.1755 109.152L73.2159 102.106C74.591 100.73 74.591 98.4942 73.2159 97.1179L60.895 84.7861C58.2327 82.1217 54.2284 81.5933 51.0382 83.2117L39.0473 71.2103V65.2648C39.0473 64.4389 38.6622 63.6681 38.0132 63.1727L26.5723 54.3644ZM20.1147 97.4262C18.7176 98.8246 17.9255 100.73 17.9255 102.711C17.9255 106.84 21.2698 110.187 25.3951 110.187C27.3752 110.187 29.2783 109.395 30.6755 107.996L43.6347 95.0259C42.7765 92.7248 42.6446 90.2253 43.2386 87.8581L36.4511 81.0646L20.1147 97.4262ZM74.25 69.6689C74.25 68.5127 74.1289 67.3896 73.898 66.3108C73.634 65.0774 72.1267 64.7582 71.2357 65.6499L64.2063 72.6858C63.8763 73.0161 63.4251 73.2031 62.9632 73.2031H56.6487C55.6806 73.2031 54.8884 72.4106 54.8884 71.4417V65.1105C54.8884 64.648 55.0756 64.1967 55.4056 63.8664L62.435 56.8306C63.326 55.9388 63.007 54.4303 61.775 54.1661C60.6858 53.9349 59.5639 53.8137 58.4086 53.8137C49.663 53.8137 42.5675 60.9154 42.5675 69.6689V69.7568L51.9512 79.1489C55.9115 78.147 60.29 79.204 63.3921 82.309L65.1193 84.0376C70.5096 81.5051 74.25 76.0219 74.25 69.6689ZM24.086 101.379C24.086 100.678 24.3642 100.006 24.8593 99.5105C25.3545 99.0149 26.0259 98.7367 26.7262 98.7367C27.4264 98.7367 28.098 99.0149 28.5932 99.5105C29.0883 100.006 29.3664 100.678 29.3664 101.379C29.3664 102.08 29.0883 102.752 28.5932 103.248C28.098 103.743 27.4264 104.022 26.7262 104.022C26.0259 104.022 25.3545 103.743 24.8593 103.248C24.3642 102.752 24.086 102.08 24.086 101.379Z" fill="#272727"/>
<path d="M110.095 64.0512V81.9774L115.966 81.9672C119.184 81.9569 122.063 81.9159 122.34 81.8851C122.872 81.8236 122.985 81.8031 123.897 81.6082C124.194 81.557 124.461 81.5057 124.491 81.5057C124.522 81.5057 125.086 81.3211 125.741 81.0955C130.332 79.5264 134.062 76.2447 136.172 71.9375C136.726 70.7992 137.392 68.9532 137.494 68.2867C137.525 68.0918 137.597 67.7739 137.648 67.5893C137.699 67.4047 137.75 67.2304 137.75 67.2099C137.75 67.1278 137.873 66.01 137.925 65.6203C137.986 65.1896 137.986 63.2206 137.925 62.4924C137.679 59.703 136.777 57.0161 135.25 54.5549C132.883 50.7604 129.102 47.9505 124.717 46.7506C122.831 46.2276 122.503 46.2071 116.12 46.1661L110.095 46.125V64.0512ZM122.391 52.7397C124.655 53.2319 126.561 54.2882 128.231 55.9701C129.799 57.5391 130.742 59.221 131.295 61.3644C131.562 62.3899 131.654 64.7999 131.48 65.9485C131.264 67.3637 130.506 69.2506 129.625 70.5736C128.692 71.9785 127.063 73.4348 125.516 74.2552C124.307 74.9013 123.518 75.1679 121.827 75.5269C121.663 75.5576 120.382 75.5986 118.999 75.6192L116.478 75.6602V64.1538C116.478 57.8263 116.489 52.6166 116.519 52.5756C116.601 52.4218 121.581 52.5653 122.391 52.7397Z" fill="white"/>
<path d="M152.403 54.1754C152.383 54.1959 152.116 54.2472 151.819 54.278C149.821 54.5138 146.901 55.7752 145.292 57.0982C144.483 57.7647 142.874 59.4979 142.392 60.2363C140.579 62.9744 139.718 66.3689 140.056 69.466C140.169 70.4402 140.445 71.8042 140.63 72.2349C140.671 72.3477 140.814 72.7272 140.937 73.0861C141.214 73.9065 141.849 75.1064 142.495 76.0396C144.462 78.9008 147.833 81.116 151.235 81.7723C152.352 81.9877 154.955 82.0492 155.897 81.8851C156.153 81.8441 156.522 81.7825 156.717 81.7518C157.465 81.639 159.063 81.0749 160.15 80.5417C164.177 78.5521 167.035 74.6141 167.722 70.1326C167.865 69.1891 167.876 66.6048 167.742 66.0305C167.712 65.8869 167.65 65.61 167.619 65.4152C167.527 64.8511 167.056 63.2205 166.943 63.077C166.882 63.0154 166.861 62.9539 166.892 62.9539C166.984 62.9539 166 61.0259 165.57 60.3901C163.767 57.6519 160.99 55.6009 157.906 54.6984C157.404 54.5549 156.871 54.4215 156.727 54.3908C156.584 54.3703 156.235 54.2985 155.959 54.2472C155.487 54.1652 152.485 54.1036 152.403 54.1754ZM155.518 60.667C157.065 60.9849 158.797 62.0412 159.801 63.3026C160.949 64.7178 161.471 66.2458 161.471 68.1328C161.461 69.1071 161.389 69.6096 161.113 70.4402C160.314 72.881 158.315 74.7372 155.754 75.4345C154.903 75.6602 152.997 75.6602 152.106 75.4243C148.141 74.3783 145.712 70.5018 146.532 66.533C147.372 62.4411 151.399 59.8261 155.518 60.667Z" fill="white"/>
<path d="M131.613 87.1051C131.613 89.8945 131.572 92.1814 131.531 92.1814C131.49 92.1814 131.408 92.1404 131.346 92.0891C131.152 91.9045 130.055 91.3507 129.236 91.0226C128.334 90.6534 126.951 90.2739 126.182 90.1714C125.926 90.1406 125.608 90.0996 125.465 90.0688C125.096 90.0073 123.149 90.0176 122.493 90.0893C122.186 90.1201 121.54 90.2329 121.059 90.3457C118.948 90.8175 117.063 91.7097 115.269 93.1044C114.368 93.8017 112.913 95.4733 112.165 96.6424C111.581 97.5859 110.73 99.5754 110.546 100.437C110.484 100.755 110.402 101.134 110.341 101.411C110.177 102.129 110.115 103.144 110.146 104.406C110.167 105.175 110.197 105.841 110.228 105.893C110.259 105.934 110.31 106.231 110.351 106.539C110.453 107.339 111.14 109.359 111.601 110.251C113.036 112.969 114.921 114.887 117.575 116.312C118.425 116.774 120.239 117.44 120.956 117.563C121.151 117.594 121.387 117.645 121.469 117.666C121.93 117.799 122.381 117.84 123.723 117.871C124.963 117.891 125.69 117.84 126.725 117.635C126.766 117.635 126.971 117.594 127.186 117.563C128.406 117.348 130.834 116.261 132.197 115.297C133.18 114.599 134.861 112.866 135.537 111.861C136.89 109.81 137.709 107.585 137.925 105.308C137.976 104.734 138.027 83.5875 137.976 82.2543L137.966 82.0287H134.789H131.613V87.1051ZM125.967 96.6322C128.539 97.3193 130.557 99.3088 131.357 101.975C131.654 102.939 131.633 105.021 131.326 106.026C130.752 107.862 129.758 109.226 128.262 110.231C127.391 110.815 126.162 111.307 125.311 111.431C122.411 111.82 119.798 110.795 118.067 108.59C115.423 105.195 116.202 100.17 119.757 97.7295C120.495 97.227 121.633 96.7347 122.442 96.5604C123.354 96.3656 125.086 96.3963 125.967 96.6322Z" fill="white"/>
<path d="M153.93 89.9663C153.92 89.9868 153.459 90.0278 152.915 90.0586C149.165 90.2945 145.579 92.1609 143.058 95.2067C142.597 95.7708 141.685 97.2475 141.316 98.0269C140.763 99.1858 140.333 100.601 140.169 101.719C140.035 102.673 140.005 103.073 140.005 103.924C139.994 105.206 140.066 105.759 140.476 107.667C140.558 108.077 141.275 109.851 141.613 110.487C142.525 112.22 144.114 114.056 145.712 115.225C146.706 115.953 148.253 116.763 149.38 117.153C150.18 117.42 150.354 117.471 150.876 117.573C151.02 117.594 151.194 117.645 151.266 117.666C152.024 117.932 155.211 117.932 156.563 117.666C157.199 117.543 157.291 117.522 157.793 117.379C163.039 115.881 167.087 111.164 167.753 105.77C167.855 104.959 167.855 102.97 167.753 102.098C167.302 98.2423 164.832 94.3863 161.441 92.202C159.627 91.0329 157.158 90.2022 155.129 90.0689C154.627 90.0381 154.155 89.9971 154.084 89.9766C154.022 89.9561 153.95 89.9561 153.93 89.9663ZM156.307 96.7861C158.951 97.6783 160.918 99.9549 161.41 102.703C161.502 103.267 161.492 104.724 161.379 105.308C161.266 105.913 160.816 107.185 160.539 107.667C158.285 111.605 153.161 112.723 149.514 110.087C147.905 108.928 146.849 107.246 146.47 105.257C146.388 104.785 146.399 102.908 146.491 102.539C146.522 102.457 146.573 102.221 146.614 102.026C146.747 101.462 147.177 100.498 147.567 99.8831C148.673 98.1603 150.641 96.8373 152.567 96.5194C152.741 96.4886 152.895 96.4476 152.915 96.4271C152.936 96.4066 153.489 96.4066 154.145 96.4271C155.149 96.4579 155.487 96.5092 156.307 96.7861Z" fill="white"/>
</svg>

`,Z=P`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2 {
    margin: 0;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=p=>p??M;class st extends N{constructor(){super();H(this,"onChangeHiddenValue",()=>{if(this.value&&this.value!=null){this.hiddenValue=this.value.replaceAll(/./g,"*");return}this.hiddenValue=""});H(this,"onChangeValue",o=>{this.value=o.target.value.toUpperCase(),this.hiddenValue=this.value.replaceAll(/./g,"*"),this.onInput(this.value,this.key)});this.value="",this.hiddenValue="",this.showValue=!0,this.onInput=()=>{}}static get properties(){return{value:{type:String},hiddenValue:{type:String},showValue:{type:Boolean},maxLength:{type:Number},onInput:{type:Object},key:{type:String}}}render(){return j`<input placeholder="" title="inputKey" maxLength="${rt(this.maxLength)}" .value="${this.showValue?this.value:this.hiddenValue}" @input="${this.onChangeValue}" /> `}static get styles(){return[Z,P`
      input {
        --border-input-disabled: color-mix(in srgb, var(--primary-color), white 60%);

        width: 100%;
        height: 100%;
        font-size: 1em;
        outline: 0em solid var(--border-input-disabled);
        border: .08em solid  var(--border-input-disabled);
        padding: .25em;
        border-radius: 10px;
        background-color: var(--primary-light-color);

        transition: background ease 0.25s, outline ease 0.15s, border ease 0.25s;
        text-align: center;
      }

      input:hover, input:focus, input:not(:placeholder-shown) {
        border: .08em solid var(--primary-color);
        background-color: white;
      }

      input:focus {
        outline: .08em solid var(--border-input-disabled);
      }
    `]}}customElements.define("dodo-input",st);class at extends N{constructor(){super()}render(){return j`
      <div class="loader">
        <svg class="circular-loader" viewBox="25 25 50 50">
          <circle
            class="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </div>
    `}static get styles(){return[Z,P`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
        .loader {
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .circular-loader {
          -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
          height: 100%;
          -webkit-transform-origin: center center;
          -ms-transform-origin: center center;
          transform-origin: center center;
          width: 100%;
        }

        .loader-path {
          stroke-dasharray: 150, 200;
          stroke-dashoffset: -10;
          -webkit-animation: dash 1.5s ease-in-out infinite,
            color 6s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite,
            color 6s ease-in-out infinite;
          stroke-linecap: round;
        }

        @-webkit-keyframes rotate {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes rotate {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
      `]}}customElements.define("dodo-loader",at);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*c1(p,n){if(p!==void 0){let o=0;for(const t of p)yield n(t,o++)}}class lt extends N{constructor(){super();H(this,"onInputKey",(o,t)=>{var l,c;const e=+t,i=Array.from(this.shadowRoot.querySelectorAll("dodo-input")),r=(l=i[e+1])==null?void 0:l.shadowRoot.querySelector("input"),s=(c=i[e-1])==null?void 0:c.shadowRoot.querySelector("input");if(this.inputs[e]=o.toUpperCase(),this.onGetValue(this.inputs.join("")),o){r&&r.focus();return}s&&s.focus(),console.log(!1)});this.quantity=10,this.inputs=Array.from({length:this.quantity},(o,t)=>""),this.onGetValue=()=>{}}static get properties(){return{showValue:{type:String},quantity:{type:Number},inputs:{type:Array},onGetValue:{type:Function}}}render(){return j`
      <div class="key-input-group">
        ${c1(this.inputs,(o,t)=>j` <dodo-input maxLength="1" key="${t}" .onInput="${this.onInputKey}"></dodo-input> `)}
      </div>
    `}static get styles(){return[Z,P`
        .key-input-group {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 20px;
        }

        dodo-input {
          aspect-ratio: 1/1;
          font-size: 5em;
        }
      `]}}customElements.define("dodo-input-key-group",lt);class ct extends N{static get properties(){return{disabled:{type:Boolean},onClick:{type:Function}}}constructor(){super(),this.disabled=!1,this.onClick=()=>{}}render(){return j`
            <button @click=${this.onClick} ?disabled=${this.disabled}><slot>Hello world!</slot></button>
        `}static get styles(){return[Z,P`
            button {
                background-color: var(--primary-color);
                border: unset;
                padding: .7em 1.2em;
                font-size: 1.8em;
                color: white;
                border-radius: 8px;
                transition: all ease 0.25s;
                cursor: pointer;
                font-family: 'Open Sans';
                overflow: hidden;
            }

            button:active {
                background-color: color-mix(in srgb, var(--primary-color), black 20%);
            }

            button:disabled {
                cursor: not-allowed;
                background-color: color-mix(in srgb, var(--primary-color), white 40%)
            }
        `]}}customElements.define("dodo-button",ct);var dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ut(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var N1={exports:{}};(function(p,n){(function(o,t){p.exports=t()})(dt,function(){return function(o){function t(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return o[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};return t.m=o,t.c=e,t.d=function(i,r,s){t.o(i,r)||Object.defineProperty(i,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,"a",r),r},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.p="",t(t.s=8)}([function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i="swal-button";t.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:i,CONFIRM_BUTTON:i+"--confirm",CANCEL_BUTTON:i+"--cancel",DANGER_BUTTON:i+"--danger",BUTTON_LOADING:i+"--loading",BUTTON_LOADER:i+"__loader"},t.default=t.CLASS_NAMES},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.getNode=function(i){var r="."+i;return document.querySelector(r)},t.stringToNode=function(i){var r=document.createElement("div");return r.innerHTML=i.trim(),r.firstChild},t.insertAfter=function(i,r){var s=r.nextSibling;r.parentNode.insertBefore(i,s)},t.removeNode=function(i){i.parentElement.removeChild(i)},t.throwErr=function(i){throw i=i.replace(/ +(?= )/g,""),"SweetAlert: "+(i=i.trim())},t.isPlainObject=function(i){if(Object.prototype.toString.call(i)!=="[object Object]")return!1;var r=Object.getPrototypeOf(i);return r===null||r===Object.prototype},t.ordinalSuffixOf=function(i){var r=i%10,s=i%100;return r===1&&s!==11?i+"st":r===2&&s!==12?i+"nd":r===3&&s!==13?i+"rd":i+"th"}},function(o,t,e){function i(g){for(var f in g)t.hasOwnProperty(f)||(t[f]=g[f])}Object.defineProperty(t,"__esModule",{value:!0}),i(e(25));var r=e(26);t.overlayMarkup=r.default,i(e(27)),i(e(28)),i(e(29));var s=e(0),l=s.default.MODAL_TITLE,c=s.default.MODAL_TEXT,C=s.default.ICON,h=s.default.FOOTER;t.iconMarkup=`
  <div class="`+C+'"></div>',t.titleMarkup=`
  <div class="`+l+`"></div>
`,t.textMarkup=`
  <div class="`+c+'"></div>',t.footerMarkup=`
  <div class="`+h+`"></div>
`},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1);t.CONFIRM_KEY="confirm",t.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},s=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),l=Object.assign({},r,{text:"OK",value:!0});t.defaultButtonList={cancel:s,confirm:l};var c=function(f){switch(f){case t.CONFIRM_KEY:return l;case t.CANCEL_KEY:return s;default:var m=f.charAt(0).toUpperCase()+f.slice(1);return Object.assign({},r,{text:m,value:f})}},C=function(f,m){var x=c(f);return m===!0?Object.assign({},x,{visible:!0}):typeof m=="string"?Object.assign({},x,{visible:!0,text:m}):i.isPlainObject(m)?Object.assign({visible:!0},x,m):Object.assign({},x,{visible:!1})},h=function(f){for(var m={},x=0,_=Object.keys(f);x<_.length;x++){var a=_[x],u=f[a],d=C(a,u);m[a]=d}return m.cancel||(m.cancel=s),m},g=function(f){var m={};switch(f.length){case 1:m[t.CANCEL_KEY]=Object.assign({},s,{visible:!1});break;case 2:m[t.CANCEL_KEY]=C(t.CANCEL_KEY,f[0]),m[t.CONFIRM_KEY]=C(t.CONFIRM_KEY,f[1]);break;default:i.throwErr("Invalid number of 'buttons' in array ("+f.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return m};t.getButtonListOpts=function(f){var m=t.defaultButtonList;return typeof f=="string"?m[t.CONFIRM_KEY]=C(t.CONFIRM_KEY,f):Array.isArray(f)?m=g(f):i.isPlainObject(f)?m=h(f):f===!0?m=g([!0,!0]):f===!1?m=g([!1,!1]):f===void 0&&(m=t.defaultButtonList),m}},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),r=e(2),s=e(0),l=s.default.MODAL,c=s.default.OVERLAY,C=e(30),h=e(31),g=e(32),f=e(33);t.injectElIntoModal=function(a){var u=i.getNode(l),d=i.stringToNode(a);return u.appendChild(d),d};var m=function(a){a.className=l,a.textContent=""},x=function(a,u){m(a);var d=u.className;d&&a.classList.add(d)};t.initModalContent=function(a){var u=i.getNode(l);x(u,a),C.default(a.icon),h.initTitle(a.title),h.initText(a.text),f.default(a.content),g.default(a.buttons,a.dangerMode)};var _=function(){var a=i.getNode(c),u=i.stringToNode(r.modalMarkup);a.appendChild(u)};t.default=_},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(3),r={isOpen:!1,promise:null,actions:{},timer:null},s=Object.assign({},r);t.resetState=function(){s=Object.assign({},r)},t.setActionValue=function(c){if(typeof c=="string")return l(i.CONFIRM_KEY,c);for(var C in c)l(C,c[C])};var l=function(c,C){s.actions[c]||(s.actions[c]={}),Object.assign(s.actions[c],{value:C})};t.setActionOptionsFor=function(c,C){var h=(C===void 0?{}:C).closeModal,g=h===void 0||h;Object.assign(s.actions[c],{closeModal:g})},t.default=s},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),r=e(3),s=e(0),l=s.default.OVERLAY,c=s.default.SHOW_MODAL,C=s.default.BUTTON,h=s.default.BUTTON_LOADING,g=e(5);t.openModal=function(){i.getNode(l).classList.add(c),g.default.isOpen=!0};var f=function(){i.getNode(l).classList.remove(c),g.default.isOpen=!1};t.onAction=function(m){m===void 0&&(m=r.CANCEL_KEY);var x=g.default.actions[m],_=x.value;if(x.closeModal===!1){var a=C+"--"+m;i.getNode(a).classList.add(h)}else f();g.default.promise.resolve(_)},t.getState=function(){var m=Object.assign({},g.default);return delete m.promise,delete m.timer,m},t.stopLoading=function(){for(var m=document.querySelectorAll("."+C),x=0;x<m.length;x++)m[x].classList.remove(h)}},function(o,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(e=window)}o.exports=e},function(o,t,e){(function(i){o.exports=i.sweetAlert=e(9)}).call(t,e(7))},function(o,t,e){(function(i){o.exports=i.swal=e(10)}).call(t,e(7))},function(o,t,e){typeof window<"u"&&e(11),e(16);var i=e(23).default;o.exports=i},function(o,t,e){var i=e(12);typeof i=="string"&&(i=[[o.i,i,""]]);var r={insertAt:"top"};r.transform=void 0,e(14)(i,r),i.locals&&(o.exports=i.locals)},function(o,t,e){t=o.exports=e(13)(void 0),t.push([o.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(o,t){function e(r,s){var l=r[1]||"",c=r[3];if(!c)return l;if(s&&typeof btoa=="function"){var C=i(c);return[l].concat(c.sources.map(function(h){return"/*# sourceURL="+c.sourceRoot+h+" */"})).concat([C]).join(`
`)}return[l].join(`
`)}function i(r){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"}o.exports=function(r){var s=[];return s.toString=function(){return this.map(function(l){var c=e(l,r);return l[2]?"@media "+l[2]+"{"+c+"}":c}).join("")},s.i=function(l,c){typeof l=="string"&&(l=[[null,l,""]]);for(var C={},h=0;h<this.length;h++){var g=this[h][0];typeof g=="number"&&(C[g]=!0)}for(h=0;h<l.length;h++){var f=l[h];typeof f[0]=="number"&&C[f[0]]||(c&&!f[2]?f[2]=c:c&&(f[2]="("+f[2]+") and ("+c+")"),s.push(f))}},s}},function(o,t,e){function i(w,b){for(var $=0;$<w.length;$++){var v=w[$],O=_[v.id];if(O){O.refs++;for(var A=0;A<O.parts.length;A++)O.parts[A](v.parts[A]);for(;A<v.parts.length;A++)O.parts.push(g(v.parts[A],b))}else{for(var E=[],A=0;A<v.parts.length;A++)E.push(g(v.parts[A],b));_[v.id]={id:v.id,refs:1,parts:E}}}}function r(w,b){for(var $=[],v={},O=0;O<w.length;O++){var A=w[O],E=b.base?A[0]+b.base:A[0],L=A[1],K=A[2],P1=A[3],p1={css:L,media:K,sourceMap:P1};v[E]?v[E].parts.push(p1):$.push(v[E]={id:E,parts:[p1]})}return $}function s(w,b){var $=u(w.insertInto);if(!$)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var v=k[k.length-1];if(w.insertAt==="top")v?v.nextSibling?$.insertBefore(b,v.nextSibling):$.appendChild(b):$.insertBefore(b,$.firstChild),k.push(b);else{if(w.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");$.appendChild(b)}}function l(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w);var b=k.indexOf(w);b>=0&&k.splice(b,1)}function c(w){var b=document.createElement("style");return w.attrs.type="text/css",h(b,w.attrs),s(w,b),b}function C(w){var b=document.createElement("link");return w.attrs.type="text/css",w.attrs.rel="stylesheet",h(b,w.attrs),s(w,b),b}function h(w,b){Object.keys(b).forEach(function($){w.setAttribute($,b[$])})}function g(w,b){var $,v,O,A;if(b.transform&&w.css){if(!(A=b.transform(w.css)))return function(){};w.css=A}if(b.singleton){var E=y++;$=d||(d=c(b)),v=f.bind(null,$,E,!1),O=f.bind(null,$,E,!0)}else w.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?($=C(b),v=x.bind(null,$,b),O=function(){l($),$.href&&URL.revokeObjectURL($.href)}):($=c(b),v=m.bind(null,$),O=function(){l($)});return v(w),function(L){if(L){if(L.css===w.css&&L.media===w.media&&L.sourceMap===w.sourceMap)return;v(w=L)}else O()}}function f(w,b,$,v){var O=$?"":v.css;if(w.styleSheet)w.styleSheet.cssText=S(b,O);else{var A=document.createTextNode(O),E=w.childNodes;E[b]&&w.removeChild(E[b]),E.length?w.insertBefore(A,E[b]):w.appendChild(A)}}function m(w,b){var $=b.css,v=b.media;if(v&&w.setAttribute("media",v),w.styleSheet)w.styleSheet.cssText=$;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode($))}}function x(w,b,$){var v=$.css,O=$.sourceMap,A=b.convertToAbsoluteUrls===void 0&&O;(b.convertToAbsoluteUrls||A)&&(v=T(v)),O&&(v+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(O))))+" */");var E=new Blob([v],{type:"text/css"}),L=w.href;w.href=URL.createObjectURL(E),L&&URL.revokeObjectURL(L)}var _={},a=function(w){var b;return function(){return b===void 0&&(b=w.apply(this,arguments)),b}}(function(){return window&&document&&document.all&&!window.atob}),u=function(w){var b={};return function($){return b[$]===void 0&&(b[$]=w.call(this,$)),b[$]}}(function(w){return document.querySelector(w)}),d=null,y=0,k=[],T=e(15);o.exports=function(w,b){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");b=b||{},b.attrs=typeof b.attrs=="object"?b.attrs:{},b.singleton||(b.singleton=a()),b.insertInto||(b.insertInto="head"),b.insertAt||(b.insertAt="bottom");var $=r(w,b);return i($,b),function(v){for(var O=[],A=0;A<$.length;A++){var E=$[A],L=_[E.id];L.refs--,O.push(L)}v&&i(r(v,b),b);for(var A=0;A<O.length;A++){var L=O[A];if(L.refs===0){for(var K=0;K<L.parts.length;K++)L.parts[K]();delete _[L.id]}}}};var S=function(){var w=[];return function(b,$){return w[b]=$,w.filter(Boolean).join(`
`)}}()},function(o,t){o.exports=function(e){var i=typeof window<"u"&&window.location;if(!i)throw new Error("fixUrls requires window.location");if(!e||typeof e!="string")return e;var r=i.protocol+"//"+i.host,s=r+i.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(l,c){var C=c.trim().replace(/^"(.*)"$/,function(g,f){return f}).replace(/^'(.*)'$/,function(g,f){return f});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(C))return l;var h;return h=C.indexOf("//")===0?C:C.indexOf("/")===0?r+C:s+C.replace(/^\.\//,""),"url("+JSON.stringify(h)+")"})}},function(o,t,e){var i=e(17);typeof window>"u"||window.Promise||(window.Promise=i),e(21),String.prototype.includes||(String.prototype.includes=function(r,s){return typeof s!="number"&&(s=0),!(s+r.length>this.length)&&this.indexOf(r,s)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,s){if(this==null)throw new TypeError('"this" is null or not defined');var l=Object(this),c=l.length>>>0;if(c===0)return!1;for(var C=0|s,h=Math.max(C>=0?C:c-Math.abs(C),0);h<c;){if(function(g,f){return g===f||typeof g=="number"&&typeof f=="number"&&isNaN(g)&&isNaN(f)}(l[h],r))return!0;h++}return!1}}),typeof window<"u"&&function(r){r.forEach(function(s){s.hasOwnProperty("remove")||Object.defineProperty(s,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(o,t,e){(function(i){(function(r){function s(){}function l(a,u){return function(){a.apply(u,arguments)}}function c(a){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof a!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],x(a,this)}function C(a,u){for(;a._state===3;)a=a._value;if(a._state===0)return void a._deferreds.push(u);a._handled=!0,c._immediateFn(function(){var d=a._state===1?u.onFulfilled:u.onRejected;if(d===null)return void(a._state===1?h:g)(u.promise,a._value);var y;try{y=d(a._value)}catch(k){return void g(u.promise,k)}h(u.promise,y)})}function h(a,u){try{if(u===a)throw new TypeError("A promise cannot be resolved with itself.");if(u&&(typeof u=="object"||typeof u=="function")){var d=u.then;if(u instanceof c)return a._state=3,a._value=u,void f(a);if(typeof d=="function")return void x(l(d,u),a)}a._state=1,a._value=u,f(a)}catch(y){g(a,y)}}function g(a,u){a._state=2,a._value=u,f(a)}function f(a){a._state===2&&a._deferreds.length===0&&c._immediateFn(function(){a._handled||c._unhandledRejectionFn(a._value)});for(var u=0,d=a._deferreds.length;u<d;u++)C(a,a._deferreds[u]);a._deferreds=null}function m(a,u,d){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof u=="function"?u:null,this.promise=d}function x(a,u){var d=!1;try{a(function(y){d||(d=!0,h(u,y))},function(y){d||(d=!0,g(u,y))})}catch(y){if(d)return;d=!0,g(u,y)}}var _=setTimeout;c.prototype.catch=function(a){return this.then(null,a)},c.prototype.then=function(a,u){var d=new this.constructor(s);return C(this,new m(a,u,d)),d},c.all=function(a){var u=Array.prototype.slice.call(a);return new c(function(d,y){function k(w,b){try{if(b&&(typeof b=="object"||typeof b=="function")){var $=b.then;if(typeof $=="function")return void $.call(b,function(v){k(w,v)},y)}u[w]=b,--T==0&&d(u)}catch(v){y(v)}}if(u.length===0)return d([]);for(var T=u.length,S=0;S<u.length;S++)k(S,u[S])})},c.resolve=function(a){return a&&typeof a=="object"&&a.constructor===c?a:new c(function(u){u(a)})},c.reject=function(a){return new c(function(u,d){d(a)})},c.race=function(a){return new c(function(u,d){for(var y=0,k=a.length;y<k;y++)a[y].then(u,d)})},c._immediateFn=typeof i=="function"&&function(a){i(a)}||function(a){_(a,0)},c._unhandledRejectionFn=function(a){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",a)},c._setImmediateFn=function(a){c._immediateFn=a},c._setUnhandledRejectionFn=function(a){c._unhandledRejectionFn=a},o!==void 0&&o.exports?o.exports=c:r.Promise||(r.Promise=c)})(this)}).call(t,e(18).setImmediate)},function(o,t,e){function i(s,l){this._id=s,this._clearFn=l}var r=Function.prototype.apply;t.setTimeout=function(){return new i(r.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(s){s&&s.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(s,l){clearTimeout(s._idleTimeoutId),s._idleTimeout=l},t.unenroll=function(s){clearTimeout(s._idleTimeoutId),s._idleTimeout=-1},t._unrefActive=t.active=function(s){clearTimeout(s._idleTimeoutId);var l=s._idleTimeout;l>=0&&(s._idleTimeoutId=setTimeout(function(){s._onTimeout&&s._onTimeout()},l))},e(19),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(o,t,e){(function(i,r){(function(s,l){function c(d){typeof d!="function"&&(d=new Function(""+d));for(var y=new Array(arguments.length-1),k=0;k<y.length;k++)y[k]=arguments[k+1];var T={callback:d,args:y};return x[m]=T,f(m),m++}function C(d){delete x[d]}function h(d){var y=d.callback,k=d.args;switch(k.length){case 0:y();break;case 1:y(k[0]);break;case 2:y(k[0],k[1]);break;case 3:y(k[0],k[1],k[2]);break;default:y.apply(l,k)}}function g(d){if(_)setTimeout(g,0,d);else{var y=x[d];if(y){_=!0;try{h(y)}finally{C(d),_=!1}}}}if(!s.setImmediate){var f,m=1,x={},_=!1,a=s.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(s);u=u&&u.setTimeout?u:s,{}.toString.call(s.process)==="[object process]"?function(){f=function(d){r.nextTick(function(){g(d)})}}():function(){if(s.postMessage&&!s.importScripts){var d=!0,y=s.onmessage;return s.onmessage=function(){d=!1},s.postMessage("","*"),s.onmessage=y,d}}()?function(){var d="setImmediate$"+Math.random()+"$",y=function(k){k.source===s&&typeof k.data=="string"&&k.data.indexOf(d)===0&&g(+k.data.slice(d.length))};s.addEventListener?s.addEventListener("message",y,!1):s.attachEvent("onmessage",y),f=function(k){s.postMessage(d+k,"*")}}():s.MessageChannel?function(){var d=new MessageChannel;d.port1.onmessage=function(y){g(y.data)},f=function(y){d.port2.postMessage(y)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var d=a.documentElement;f=function(y){var k=a.createElement("script");k.onreadystatechange=function(){g(y),k.onreadystatechange=null,d.removeChild(k),k=null},d.appendChild(k)}}():function(){f=function(d){setTimeout(g,0,d)}}(),u.setImmediate=c,u.clearImmediate=C}})(typeof self>"u"?i===void 0?this:i:self)}).call(t,e(7),e(20))},function(o,t){function e(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===e||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch{try{return g.call(null,d,0)}catch{return g.call(this,d,0)}}}function s(d){if(f===clearTimeout)return clearTimeout(d);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch{try{return f.call(null,d)}catch{return f.call(this,d)}}}function l(){a&&x&&(a=!1,x.length?_=x.concat(_):u=-1,_.length&&c())}function c(){if(!a){var d=r(l);a=!0;for(var y=_.length;y;){for(x=_,_=[];++u<y;)x&&x[u].run();u=-1,y=_.length}x=null,a=!1,s(d)}}function C(d,y){this.fun=d,this.array=y}function h(){}var g,f,m=o.exports={};(function(){try{g=typeof setTimeout=="function"?setTimeout:e}catch{g=e}try{f=typeof clearTimeout=="function"?clearTimeout:i}catch{f=i}})();var x,_=[],a=!1,u=-1;m.nextTick=function(d){var y=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)y[k-1]=arguments[k];_.push(new C(d,y)),_.length!==1||a||r(c)},C.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=h,m.addListener=h,m.once=h,m.off=h,m.removeListener=h,m.removeAllListeners=h,m.emit=h,m.prependListener=h,m.prependOnceListener=h,m.listeners=function(d){return[]},m.binding=function(d){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(d){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(o,t,e){e(22).polyfill()},function(o,t,e){function i(s,l){if(s==null)throw new TypeError("Cannot convert first argument to object");for(var c=Object(s),C=1;C<arguments.length;C++){var h=arguments[C];if(h!=null)for(var g=Object.keys(Object(h)),f=0,m=g.length;f<m;f++){var x=g[f],_=Object.getOwnPropertyDescriptor(h,x);_!==void 0&&_.enumerable&&(c[x]=h[x])}}return c}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:i})}o.exports={assign:i,polyfill:r}},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(24),r=e(6),s=e(5),l=e(36),c=function(){for(var C=[],h=0;h<arguments.length;h++)C[h]=arguments[h];if(typeof window<"u"){var g=l.getOpts.apply(void 0,C);return new Promise(function(f,m){s.default.promise={resolve:f,reject:m},i.default(g),setTimeout(function(){r.openModal()})})}};c.close=r.onAction,c.getState=r.getState,c.setActionValue=s.setActionValue,c.stopLoading=r.stopLoading,c.setDefaults=l.setDefaults,t.default=c},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),r=e(0),s=r.default.MODAL,l=e(4),c=e(34),C=e(35),h=e(1);t.init=function(g){i.getNode(s)||(document.body||h.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),c.default(),l.default()),l.initModalContent(g),C.default(g)},t.default=t.init},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),r=i.default.MODAL;t.modalMarkup=`
  <div class="`+r+'" role="dialog" aria-modal="true"></div>',t.default=t.modalMarkup},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),r=i.default.OVERLAY,s=`<div 
    class="`+r+`"
    tabIndex="-1">
  </div>`;t.default=s},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),r=i.default.ICON;t.errorIconMarkup=function(){var s=r+"--error",l=s+"__line";return`
    <div class="`+s+`__x-mark">
      <span class="`+l+" "+l+`--left"></span>
      <span class="`+l+" "+l+`--right"></span>
    </div>
  `},t.warningIconMarkup=function(){var s=r+"--warning";return`
    <span class="`+s+`__body">
      <span class="`+s+`__dot"></span>
    </span>
  `},t.successIconMarkup=function(){var s=r+"--success";return`
    <span class="`+s+"__line "+s+`__line--long"></span>
    <span class="`+s+"__line "+s+`__line--tip"></span>

    <div class="`+s+`__ring"></div>
    <div class="`+s+`__hide-corners"></div>
  `}},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),r=i.default.CONTENT;t.contentMarkup=`
  <div class="`+r+`">

  </div>
`},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),r=i.default.BUTTON_CONTAINER,s=i.default.BUTTON,l=i.default.BUTTON_LOADER;t.buttonMarkup=`
  <div class="`+r+`">

    <button
      class="`+s+`"
    ></button>

    <div class="`+l+`">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(4),r=e(2),s=e(0),l=s.default.ICON,c=s.default.ICON_CUSTOM,C=["error","warning","success","info"],h={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},g=function(x,_){var a=l+"--"+x;_.classList.add(a);var u=h[x];u&&(_.innerHTML=u)},f=function(x,_){_.classList.add(c);var a=document.createElement("img");a.src=x,_.appendChild(a)},m=function(x){if(x){var _=i.injectElIntoModal(r.iconMarkup);C.includes(x)?g(x,_):f(x,_)}};t.default=m},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(2),r=e(4),s=function(l){navigator.userAgent.includes("AppleWebKit")&&(l.style.display="none",l.offsetHeight,l.style.display="")};t.initTitle=function(l){if(l){var c=r.injectElIntoModal(i.titleMarkup);c.textContent=l,s(c)}},t.initText=function(l){if(l){var c=document.createDocumentFragment();l.split(`
`).forEach(function(h,g,f){c.appendChild(document.createTextNode(h)),g<f.length-1&&c.appendChild(document.createElement("br"))});var C=r.injectElIntoModal(i.textMarkup);C.appendChild(c),s(C)}}},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),r=e(4),s=e(0),l=s.default.BUTTON,c=s.default.DANGER_BUTTON,C=e(3),h=e(2),g=e(6),f=e(5),m=function(_,a,u){var d=a.text,y=a.value,k=a.className,T=a.closeModal,S=i.stringToNode(h.buttonMarkup),w=S.querySelector("."+l),b=l+"--"+_;w.classList.add(b),k&&(Array.isArray(k)?k:k.split(" ")).filter(function(v){return v.length>0}).forEach(function(v){w.classList.add(v)}),u&&_===C.CONFIRM_KEY&&w.classList.add(c),w.textContent=d;var $={};return $[_]=y,f.setActionValue($),f.setActionOptionsFor(_,{closeModal:T}),w.addEventListener("click",function(){return g.onAction(_)}),S},x=function(_,a){var u=r.injectElIntoModal(h.footerMarkup);for(var d in _){var y=_[d],k=m(d,y,a);y.visible&&u.appendChild(k)}u.children.length===0&&u.remove()};t.default=x},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(3),r=e(4),s=e(2),l=e(5),c=e(6),C=e(0),h=C.default.CONTENT,g=function(x){x.addEventListener("input",function(_){var a=_.target,u=a.value;l.setActionValue(u)}),x.addEventListener("keyup",function(_){if(_.key==="Enter")return c.onAction(i.CONFIRM_KEY)}),setTimeout(function(){x.focus(),l.setActionValue("")},0)},f=function(x,_,a){var u=document.createElement(_),d=h+"__"+_;u.classList.add(d);for(var y in a){var k=a[y];u[y]=k}_==="input"&&g(u),x.appendChild(u)},m=function(x){if(x){var _=r.injectElIntoModal(s.contentMarkup),a=x.element,u=x.attributes;typeof a=="string"?f(_,a,u):_.appendChild(a)}};t.default=m},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),r=e(2),s=function(){var l=i.stringToNode(r.overlayMarkup);document.body.appendChild(l)};t.default=s},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(5),r=e(6),s=e(1),l=e(3),c=e(0),C=c.default.MODAL,h=c.default.BUTTON,g=c.default.OVERLAY,f=function(v){v.preventDefault(),u()},m=function(v){v.preventDefault(),d()},x=function(v){if(i.default.isOpen)switch(v.key){case"Escape":return r.onAction(l.CANCEL_KEY)}},_=function(v){if(i.default.isOpen)switch(v.key){case"Tab":return f(v)}},a=function(v){if(i.default.isOpen)return v.key==="Tab"&&v.shiftKey?m(v):void 0},u=function(){var v=s.getNode(h);v&&(v.tabIndex=0,v.focus())},d=function(){var v=s.getNode(C),O=v.querySelectorAll("."+h),A=O.length-1,E=O[A];E&&E.focus()},y=function(v){v[v.length-1].addEventListener("keydown",_)},k=function(v){v[0].addEventListener("keydown",a)},T=function(){var v=s.getNode(C),O=v.querySelectorAll("."+h);O.length&&(y(O),k(O))},S=function(v){if(s.getNode(g)===v.target)return r.onAction(l.CANCEL_KEY)},w=function(v){var O=s.getNode(g);O.removeEventListener("click",S),v&&O.addEventListener("click",S)},b=function(v){i.default.timer&&clearTimeout(i.default.timer),v&&(i.default.timer=window.setTimeout(function(){return r.onAction(l.CANCEL_KEY)},v))},$=function(v){v.closeOnEsc?document.addEventListener("keyup",x):document.removeEventListener("keyup",x),v.dangerMode?u():d(),T(),w(v.closeOnClickOutside),b(v.timer)};t.default=$},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),r=e(3),s=e(37),l=e(38),c={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},C=Object.assign({},c);t.setDefaults=function(a){C=Object.assign({},c,a)};var h=function(a){var u=a&&a.button,d=a&&a.buttons;return u!==void 0&&d!==void 0&&i.throwErr("Cannot set both 'button' and 'buttons' options!"),u!==void 0?{confirm:u}:d},g=function(a){return i.ordinalSuffixOf(a+1)},f=function(a,u){i.throwErr(g(u)+" argument ('"+a+"') is invalid")},m=function(a,u){var d=a+1,y=u[d];i.isPlainObject(y)||y===void 0||i.throwErr("Expected "+g(d)+" argument ('"+y+"') to be a plain object")},x=function(a,u){var d=a+1,y=u[d];y!==void 0&&i.throwErr("Unexpected "+g(d)+" argument ("+y+")")},_=function(a,u,d,y){var k=typeof u,T=k==="string",S=u instanceof Element;if(T){if(d===0)return{text:u};if(d===1)return{text:u,title:y[0]};if(d===2)return m(d,y),{icon:u};f(u,d)}else{if(S&&d===0)return m(d,y),{content:u};if(i.isPlainObject(u))return x(d,y),u;f(u,d)}};t.getOpts=function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];var d={};a.forEach(function(T,S){var w=_(0,T,S,a);Object.assign(d,w)});var y=h(d);d.buttons=r.getButtonListOpts(y),delete d.button,d.content=s.getContentOpts(d.content);var k=Object.assign({},c,C,d);return Object.keys(k).forEach(function(T){l.DEPRECATED_OPTS[T]&&l.logDeprecation(T)}),k}},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),r={element:"input",attributes:{placeholder:""}};t.getContentOpts=function(s){var l={};return i.isPlainObject(s)?Object.assign(l,s):s instanceof Element?{element:s}:s==="input"?r:null}},function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecation=function(i){var r=t.DEPRECATED_OPTS[i],s=r.onlyRename,l=r.replacement,c=r.subOption,C=r.link,h=s?"renamed":"deprecated",g='SweetAlert warning: "'+i+'" option has been '+h+".";l&&(g+=" Please use"+(c?' "'+c+'" in ':" ")+'"'+l+'" instead.');var f="https://sweetalert.js.org";g+=C?" More details: "+f+C:" More details: "+f+"/guides/#upgrading-from-1x",console.warn(g)},t.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})})(N1);var pt=N1.exports;const ft=ut(pt);class ht extends N{constructor(){super();H(this,"onGetCodeValue",o=>{this.codeValue=o,this.submitIsDisabled=this.codeValue.length<10});H(this,"checkOrder",async()=>{try{this.isLoading=!0,this.submitIsDisabled=!0;let o=await(async(t,e)=>{let r=await(await fetch(`https://dodorep.dododev.net/api/order/${this.codeValue}`)).json();return this.isLoading=!1,this.submitIsDisabled=!1,r})();this.dispatchEvent(new CustomEvent("senddata",{bubbles:!0,composed:!0,cancelable:!0,detail:o}))}catch(o){console.error("Error al obtener los datos:",o),this.isLoading=!1,this.submitIsDisabled=!1,ft({title:"¡Oh no! Hubo un problema al procesar tu consulta.",text:"Verifica la orden de servición e intentelo de nuevo.",icon:"error",button:"Entendido",dangerMode:!0,closeOnClickOutside:!1,closeOnEsc:!1})}});this.codeValue="",this.submitIsDisabled=!0,this.handleSendData=()=>{}}static get properties(){return{codeValue:{type:String},submitIsDisabled:{type:Boolean},isLoading:{type:Boolean},handleSendData:{type:Function}}}render(){return j`
      <div class="check-status-form">
        <h1>¿Listo para saber el estado de tu reparación?</h1>

        <p>
          Ingresa tu número de orden o seguimiento para obtener las últimas
          actualizaciones
        </p>

        <div class="check-status-form__code-inputs">
          <dodo-input-key-group
            .onGetValue="${this.onGetCodeValue}"
          ></dodo-input-key-group>
          <dodo-button
            @click="${this.checkOrder}"
            ?disabled=${this.submitIsDisabled}
          >
            Consultar estado del equipo
            <div
              class="dodo-button-loading ${this.isLoading?"isVisible":""}"
            >
              <dodo-loader></dodo-loader>
            </div>
          </dodo-button>
        </div>
      </div>
    `}static get styles(){return[Z,P`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .check-status-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .check-status-form h1 {
          font-size: 2.5em;
          max-width: 380px;
        }

        .check-status-form p {
          font-size: 2em;
          color: var(--text-secondary-color);
          max-width: 540px;
        }

        .check-status-form__code-inputs {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          align-items: flex-end;
        }

        .dodo-button-loading {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--primary-color);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;

          opacity: 0;
          transition: opacity ease 0.25s;
        }

        .dodo-button-loading.isVisible {
          opacity: 1;
        }

        dodo-loader {
          height: 30px;
        }

        dodo-input-key-group {
          align-self: flex-start;
        }

        dodo-button {
          position: relative;
        }
      `]}}customElements.define("dodo-setup-view",ht);const a1="./assets/fixIcon-BRLqFycd.png",_1={REQUIRES_ACTION:"Requiere acción del cliente",FLAWED:"Hubo un problema al realizar el servicio",SUCCESS:"Servicio exitoso"},Ct=new Intl.DateTimeFormat(void 0,{dateStyle:"short",timeStyle:"short"});function mt(p){return p=new Date(p),Ct.format(p)}class gt extends N{static get properties(){return{data:{type:Object},estimatedDeliveryDate:{type:String}}}isLastStep(n){return console.log(n),n.map((o,t,e)=>o)}constructor(){super(),this.estimatedDeliveryDate="30 de mayo del 2024"}render(){if(!this.data||!this.data.client)return"";let{order_no:n,issue:o,observations:t,prediagnosis:e,articles:i,client:r}=this.data;return j`
      <header>
        <h1>
          Orden de servicio
          <span class="order-number">#${n}</span>
        </h1>
        <p class="issueDescription">${t}</p>
        <p class="estimated-delivery">
          Fecha estimada de entrega: ${this.estimatedDeliveryDate}
        </p>
      </header>
      ${c1(i,(s,l)=>s.tasks.length?j`
          <section>
            <h2 class="article_name">${s.article.name} ${_1[s.result]?j`<span>${_1[s.result]}</span>`:""} </h2>
            <div class="timeline">
              ${c1(this.isLastStep(s.tasks),(c,C)=>j`
                  <div class="timeline-step">
                    <div>
                      ${c.completed_at?mt(c.completed_at):""}
                      &nbsp;
                    </div>
                    <div
                      class="timeline-line ${C===s.tasks.length-1||!s.tasks[C+1].completed_at?"last-item":""}"
                    ></div>
                    <div>${c.name}</div>
                  </div>
                `)}
              <div class="last_observations">
                <h4>Ultimas observaciones:</h4>
                <p>${s.observations.length?s.observations:"Sin observaciones"}</p>
              </div>
            </div>
          </section>
        `:"")}

      <div>
        <h2 class="title-section">Información adicional</h2>
        <div class="additional-info__container">
          <section class="additional-info">
            <div class="info-card">
              <img style="width: 30px; height: 30px;" src="${a1}" />
              <div>
                <h3>Falla del equipo</h3>
                <p>${o}</p>
              </div>
            </div>
            <div class="info-card">
              <img style="width: 30px; height: 30px;" src="${a1}" />
              <div>
                <h3>Prediagnostico</h3>
                <p>${e}</p>
              </div>
            </div>
          </section>
          <section class="collectors">
            <h2>¿Quiénes puede recoger?</h2>
            <div class="collector-card">
              <img style="width: 30px; height: 30px" src="${a1}" />
              <div>
                <h3>${r.first_name} ${r.last_name}</h3>
                <p>${r.email}</p>
                <p>${r.phone_number}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}static get styles(){return[Z,P`
        :host {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .service-order {
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
        }
        header {
          text-align: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
          font-size: 1.2em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        .issueDescription {
          max-width: 800px;
          font-size: 1.4em;
          font-weight: 600;
          color: var(--text-secondary-color);
        }

        .estimated-delivery {
          font-size: 1.4em;
          color: #050505;
        }

        .order-number {
          color: var(--primary-color);
        }
        .estimated-delivery {
          font-weight: 600;
        }

        .article_name {
            display: flex;
            justify-content: space-between;
        }

        .article_name  span {
            padding: 5px 10px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 500px;
            font-weight: 500;
        }

        .timeline {
          display: flex;
          /* justify-content: space-between; */
          padding: 20px 0;
          border-bottom: 1px solid #eee;
          /* align-items: center; */
          font-size: 1.4em;
          flex-wrap: wrap;
        }

        .timeline > .last_observations {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .last_observations p {
          background-color: #f5f5f5;
          width: 100%;
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
          border: 1px solid #ddd;
          border-radius: 10px;
          color: var(--text-secondary-color);
          font-weight: 600;
          margin-top: 15px;
          padding: 10px;
          height: min-content;

          min-height: 50px
        }

        .timeline-line {
          position: relative;
          height: 2px;
          background: #bebebe;
          width: 100%;
          align-items: center;
          max-width: unset !important;
        }

        .timeline-line.last-item::after {
          width: 50%;
        }

        .timeline-line::after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          height: 100%;
          width: 100%;
          background-color: var(--primary-color);
        }

        .timeline-step {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
          flex: 1;
          height: 100%;
          position: relative;
        }

        .timeline-step::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: var(--primary-color);
          border-radius: 50%;
          border: 4px solid white;
          top: 30px;
        }

        .timeline-step div {
          color: #4b4b4b;
        }
        .timeline-step div:first-child {
          font-weight: bold;
        }

        .timeline-step div:nth-child(2) {
          /* font-weight: bold; */
          max-width: 200px;
        }

        .additional-info,
        .collectors {
          padding: 20px 0;
        }
        .info-card,
        .collector-card {
          /* background-color: #f9f9f9; */
          padding: 10px;
          /* border-radius: 5px; */
          margin-bottom: 10px;
        }

        .additional-info__container {
          display: flex;
          font-size: 1.2em;
          justify-content: space-between;
        }

        .additional-info__container > * {
          background-color: #f5f5f5;
          width: 48%;
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
          border: 1px solid #ddd;
          border-radius: 15px;
          padding: 20px;
          height: min-content;
        }

        .title-section {
          font-size: 2.1em;
          color: #4b4b4b;
          margin-bottom: 20px;
        }

        .info-card,
        .collector-card {
          display: flex;
          gap: 10px;
        }

        .info-card h3,
        .collector-card h3 {
          font-size: 1.4em;
        }

        .info-card p,
        .collector-card p {
          font-size: 1.2em;
          font-weight: 600;
          color: #959595;
        }
      `]}}customElements.define("dodo-info-status-view",gt);class bt extends N{constructor(){super();H(this,"getOrderData",o=>{this.data=o.detail.data,this.isDataloaded=!0});this.isLoading=!0,this.data={},this.isDataloaded=!1,setTimeout(()=>{this.isLoading=!1},500)}static get properties(){return{isLoading:{type:Boolean},data:{type:Object},isDataloaded:{type:Object}}}render(){return j`
      <div class="container ${this.isLoading?"loading":""} ${this.isDataloaded?"data-loaded":""} ">
        <div class="container__loading-view">
          ${it}
          <dodo-loader></dodo-loader>
        </div>

        <div class="wrapper">
          <div class="wrapper__body">
            <div class="wrapper__body-header">
              <!-- Logo -->
              ${ot}
            </div>

            <div class="wrapper__body-content">
              <!-- Contenido -->
              <dodo-setup-view @senddata=${this.getOrderData}></dodo-setup-view>
              <dodo-info-status-view .data=${this.data}></dodo-info-status-view>
            </div>
          </div>

          <div class="wrapper__aditional hidden">
            <img src="${nt}" />
          </div>
        </div>
      </div>
    `}static get styles(){return[Z,P`
        dodo-loader {
          height: 60px;
        }
        .container {
          display: flex;
          width: 100%;
          min-height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: var(--primary-color);
          position: relative;
        }

        .loading .container__loading-view {
          opacity: 1;
          z-index: 0;
        }

        .container__loading-view {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          gap: 50px;
          opacity: 0;

          transition: all ease 0.25s;
        }

        .container__loading-view svg {
          width: 250px;
        }

        .container__loading-view img {
          width: 80px;
        }

        .loading .wrapper {
          visibility: hidden;
          opacity: 0;
          transition: opacity ease 0.25s, visibility 0.25s 0.25s ease;
        }

        .wrapper {
          width: 95%;
          max-width: 1300px;
          min-height: 90vh;
          height: 0;
          overflow: hidden;
          padding: 30px;
          background-color: var(--primary-bg-color);
          border-radius: 20px;          
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          z-index: 1;

          visibility: visible;
          opacity: 1;
          transition: visibility 0.25s ease, opacity 0.25s 0.25s ease;

        }

        .wrapper__body {
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 20px;
          overflow: auto;
        }

        .wrapper__body-header svg {
          width: 140px;
        }

        .wrapper__body-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .wrapper__aditional {
          width: 100%;
          max-width: 40%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;

          transition: all ease 1s;
        }

        dodo-setup-view {
          opacity: 1;
          max-height: 9999px;
          /* overflow: hidden; */
          visibility: visible;
          transition: all ease 0.25s;
        }
        
        .data-loaded dodo-setup-view {
          opacity: 0;
          max-height: 0px;
          visibility: hidden;
        }
        .data-loaded .wrapper__aditional {
          width: 0%
        }

        .data-loaded dodo-info-status-view {
          height: 100%;
          opacity: 1;
          visibility: visible;
          overflow: unset
        }

        dodo-info-status-view {
          height: 0;
          overflow: hidden;
        }
      `,P`
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `]}}window.customElements.define("dodo-check-status-view",bt);
