(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Su(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},ll={},ns={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),ju=Symbol.for("react.portal"),Eu=Symbol.for("react.fragment"),bu=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),Cu=Symbol.for("react.provider"),Iu=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Tu=Symbol.for("react.memo"),Ru=Symbol.for("react.lazy"),Jo=Symbol.iterator;function Pu(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ls=Object.assign,is={};function cn(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=cn.prototype;function Wi(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}var Ji=Wi.prototype=new os;Ji.constructor=Wi;ls(Ji,cn.prototype);Ji.isPureReactComponent=!0;var Go=Array.isArray,as=Object.prototype.hasOwnProperty,Gi={current:null},ss={key:!0,ref:!0,__self:!0,__source:!0};function cs(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)as.call(t,r)&&!ss.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Zn,type:e,key:i,ref:a,props:l,_owner:Gi.current}}function Vu(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function qu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ho=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qu(""+e.key):t.toString(36)}function vr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zn:case ju:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+jl(a,0):r,Go(l)?(n="",e!=null&&(n=e.replace(Ho,"$&/")+"/"),vr(l,t,n,"",function(u){return u})):l!=null&&(Hi(l)&&(l=Vu(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ho,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Go(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+jl(i,s);a+=vr(i,t,n,c,l)}else if(c=Pu(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+jl(i,s++),a+=vr(i,t,n,c,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return vr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Du(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},wr={transition:null},Uu={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Gi};function us(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=cn;P.Fragment=Eu;P.Profiler=Nu;P.PureComponent=Wi;P.StrictMode=bu;P.Suspense=Mu;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uu;P.act=us;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ls({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Gi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)as.call(t,c)&&!ss.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Zn,type:e.type,key:l,ref:i,props:r,_owner:a}};P.createContext=function(e){return e={$$typeof:Iu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cu,_context:e},e.Consumer=e};P.createElement=cs;P.createFactory=function(e){var t=cs.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:Bu,render:e}};P.isValidElement=Hi;P.lazy=function(e){return{$$typeof:Ru,_payload:{_status:-1,_result:e},_init:Du}};P.memo=function(e,t){return{$$typeof:Tu,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};P.unstable_act=us;P.useCallback=function(e,t){return de.current.useCallback(e,t)};P.useContext=function(e){return de.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return de.current.useDeferredValue(e)};P.useEffect=function(e,t){return de.current.useEffect(e,t)};P.useId=function(){return de.current.useId()};P.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return de.current.useMemo(e,t)};P.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};P.useRef=function(e){return de.current.useRef(e)};P.useState=function(e){return de.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return de.current.useTransition()};P.version="18.3.1";ns.exports=P;var q=ns.exports;const Fi=Su(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=q,zu=Symbol.for("react.element"),Ku=Symbol.for("react.fragment"),Ou=Object.prototype.hasOwnProperty,Wu=Lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ju={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ou.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zu,type:e,key:i,ref:a,props:l,_owner:Wu.current}}ll.Fragment=Ku;ll.jsx=ds;ll.jsxs=ds;ts.exports=ll;var o=ts.exports,ps={exports:{}},ke={},fs={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var R=N.length;N.push(T);e:for(;0<R;){var H=R-1>>>1,_=N[H];if(0<l(_,T))N[H]=T,N[R]=_,R=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],R=N.pop();if(R!==T){N[0]=R;e:for(var H=0,_=N.length,tr=_>>>1;H<tr;){var vt=2*(H+1)-1,Sl=N[vt],wt=vt+1,nr=N[wt];if(0>l(Sl,R))wt<_&&0>l(nr,Sl)?(N[H]=nr,N[wt]=R,H=wt):(N[H]=Sl,N[vt]=R,H=vt);else if(wt<_&&0>l(nr,R))N[H]=nr,N[wt]=R,H=wt;else break e}}return T}function l(N,T){var R=N.sortIndex-T.sortIndex;return R!==0?R:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],x=1,y=null,h=3,v=!1,k=!1,j=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=N)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function A(N){if(j=!1,f(N),!k)if(n(c)!==null)k=!0,wl(g);else{var T=n(u);T!==null&&kl(A,T.startTime-N)}}function g(N,T){k=!1,j&&(j=!1,p(m),m=-1),v=!0;var R=h;try{for(f(T),y=n(c);y!==null&&(!(y.expirationTime>T)||N&&!Y());){var H=y.callback;if(typeof H=="function"){y.callback=null,h=y.priorityLevel;var _=H(y.expirationTime<=T);T=e.unstable_now(),typeof _=="function"?y.callback=_:y===n(c)&&r(c),f(T)}else r(c);y=n(c)}if(y!==null)var tr=!0;else{var vt=n(u);vt!==null&&kl(A,vt.startTime-T),tr=!1}return tr}finally{y=null,h=R,v=!1}}var S=!1,E=null,m=-1,M=5,C=-1;function Y(){return!(e.unstable_now()-C<M)}function je(){if(E!==null){var N=e.unstable_now();C=N;var T=!0;try{T=E(!0,N)}finally{T?se():(S=!1,E=null)}}else S=!1}var se;if(typeof d=="function")se=function(){d(je)};else if(typeof MessageChannel<"u"){var Wo=new MessageChannel,ku=Wo.port2;Wo.port1.onmessage=je,se=function(){ku.postMessage(null)}}else se=function(){I(je,0)};function wl(N){E=N,S||(S=!0,se())}function kl(N,T){m=I(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,wl(g))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var R=h;h=T;try{return N()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=h;h=N;try{return T()}finally{h=R}},e.unstable_scheduleCallback=function(N,T,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,N){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=R+_,N={id:x++,callback:T,priorityLevel:N,startTime:R,expirationTime:_,sortIndex:-1},R>H?(N.sortIndex=R,t(u,N),n(c)===null&&N===n(u)&&(j?(p(m),m=-1):j=!0,kl(A,R-H))):(N.sortIndex=_,t(c,N),k||v||(k=!0,wl(g))),N},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(N){var T=h;return function(){var R=h;h=T;try{return N.apply(this,arguments)}finally{h=R}}}})(hs);fs.exports=hs;var Gu=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=q,we=Gu;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ms=new Set,Rn={};function Pt(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(Rn[e]=t,e=0;e<t.length;e++)ms.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Fu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Qo={};function Qu(e){return Zl.call(Qo,e)?!0:Zl.call(Fo,e)?!1:Fu.test(e)?Qo[e]=!0:(Fo[e]=!0,!1)}function Yu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zu(e,t,n,r){if(t===null||typeof t>"u"||Yu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function Yi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,Yi);re[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,Yi);re[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,Yi);re[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zi(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zu(t,n,l,r)&&(n=null),r||l===null?Qu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _e=Hu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),Xi=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),ys=Symbol.for("react.provider"),xs=Symbol.for("react.context"),_i=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),$l=Symbol.for("react.suspense_list"),$i=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),gs=Symbol.for("react.offscreen"),Yo=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Yo&&e[Yo]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,El;function vn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var bl=!1;function Nl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var c=`
`+l[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vn(e):""}function Xu(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case Dt:return"Portal";case Xl:return"Profiler";case Xi:return"StrictMode";case _l:return"Suspense";case $l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xs:return(e.displayName||"Context")+".Consumer";case ys:return(e._context.displayName||"Context")+".Provider";case _i:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $i:return t=e.displayName||null,t!==null?t:ei(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return ei(e(t))}catch{}}return null}function _u(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ei(t);case 8:return t===Xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function As(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $u(e){var t=As(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=$u(e))}function vs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=As(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ws(e,t){t=t.checked,t!=null&&Zi(e,"checked",t,!1)}function ni(e,t){ws(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&ri(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ri(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(wn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function ks(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $o(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ss(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ss(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ed=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){ed.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function Es(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Es(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var td=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(td[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,Zt=null,Xt=null;function ea(e){if(e=$n(e)){if(typeof ci!="function")throw Error(w(280));var t=e.stateNode;t&&(t=cl(t),ci(e.stateNode,e.type,t))}}function Ns(e){Zt?Xt?Xt.push(e):Xt=[e]:Zt=e}function Cs(){if(Zt){var e=Zt,t=Xt;if(Xt=Zt=null,ea(e),t)for(e=0;e<t.length;e++)ea(t[e])}}function Is(e,t){return e(t)}function Bs(){}var Cl=!1;function Ms(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Is(e,t,n)}finally{Cl=!1,(Zt!==null||Xt!==null)&&(Bs(),Cs())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ui=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ui=!1}function nd(e,t,n,r,l,i,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(x){this.onError(x)}}var En=!1,Pr=null,Vr=!1,di=null,rd={onError:function(e){En=!0,Pr=e}};function ld(e,t,n,r,l,i,a,s,c){En=!1,Pr=null,nd.apply(rd,arguments)}function id(e,t,n,r,l,i,a,s,c){if(ld.apply(this,arguments),En){if(En){var u=Pr;En=!1,Pr=null}else throw Error(w(198));Vr||(Vr=!0,di=u)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ts(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ta(e){if(Vt(e)!==e)throw Error(w(188))}function od(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ta(l),e;if(i===r)return ta(l),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Rs(e){return e=od(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ps(e);if(t!==null)return t;e=e.sibling}return null}var Vs=we.unstable_scheduleCallback,na=we.unstable_cancelCallback,ad=we.unstable_shouldYield,sd=we.unstable_requestPaint,F=we.unstable_now,cd=we.unstable_getCurrentPriorityLevel,to=we.unstable_ImmediatePriority,qs=we.unstable_UserBlockingPriority,qr=we.unstable_NormalPriority,ud=we.unstable_LowPriority,Ds=we.unstable_IdlePriority,il=null,Ke=null;function dd(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:hd,pd=Math.log,fd=Math.LN2;function hd(e){return e>>>=0,e===0?32:31-(pd(e)/fd|0)|0}var ar=64,sr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=kn(s):(i&=a,i!==0&&(r=kn(i)))}else a=n&~l,a!==0?r=kn(a):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),l=1<<n,r|=e[n],t&=~l;return r}function md(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ve(i),s=1<<a,c=l[a];c===-1?(!(s&n)||s&r)&&(l[a]=md(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Us(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function xd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ve(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function no(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Ls(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zs,ro,Ks,Os,Ws,fi=!1,cr=[],at=null,st=null,ct=null,qn=new Map,Dn=new Map,nt=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ra(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=$n(t),t!==null&&ro(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ad(e,t,n,r,l){switch(t){case"focusin":return at=hn(at,e,t,n,r,l),!0;case"dragenter":return st=hn(st,e,t,n,r,l),!0;case"mouseover":return ct=hn(ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return qn.set(i,hn(qn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Dn.set(i,hn(Dn.get(i)||null,e,t,n,r,l)),!0}return!1}function Js(e){var t=jt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ts(n),t!==null){e.blockedOn=t,Ws(e.priority,function(){Ks(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);si=r,n.target.dispatchEvent(r),si=null}else return t=$n(n),t!==null&&ro(t),e.blockedOn=n,!1;t.shift()}return!0}function la(e,t,n){kr(e)&&n.delete(t)}function vd(){fi=!1,at!==null&&kr(at)&&(at=null),st!==null&&kr(st)&&(st=null),ct!==null&&kr(ct)&&(ct=null),qn.forEach(la),Dn.forEach(la)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fi||(fi=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,vd)))}function Un(e){function t(l){return mn(l,e)}if(0<cr.length){mn(cr[0],e);for(var n=1;n<cr.length;n++){var r=cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&mn(at,e),st!==null&&mn(st,e),ct!==null&&mn(ct,e),qn.forEach(t),Dn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Js(n),n.blockedOn===null&&nt.shift()}var _t=_e.ReactCurrentBatchConfig,Ur=!0;function wd(e,t,n,r){var l=D,i=_t.transition;_t.transition=null;try{D=1,lo(e,t,n,r)}finally{D=l,_t.transition=i}}function kd(e,t,n,r){var l=D,i=_t.transition;_t.transition=null;try{D=4,lo(e,t,n,r)}finally{D=l,_t.transition=i}}function lo(e,t,n,r){if(Ur){var l=hi(e,t,n,r);if(l===null)Ll(e,t,r,Lr,n),ra(e,r);else if(Ad(l,e,t,n,r))r.stopPropagation();else if(ra(e,r),t&4&&-1<gd.indexOf(e)){for(;l!==null;){var i=$n(l);if(i!==null&&zs(i),i=hi(e,t,n,r),i===null&&Ll(e,t,r,Lr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var Lr=null;function hi(e,t,n,r){if(Lr=null,e=eo(r),e=jt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ts(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lr=e,null}function Gs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cd()){case to:return 1;case qs:return 4;case qr:case ud:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var lt=null,io=null,Sr=null;function Hs(){if(Sr)return Sr;var e,t=io,n=t.length,r,l="value"in lt?lt.value:lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function ia(){return!1}function Se(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:ia,this.isPropagationStopped=ia,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=Se(un),_n=J({},un,{view:0,detail:0}),Sd=Se(_n),Bl,Ml,yn,ol=J({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(Bl=e.screenX-yn.screenX,Ml=e.screenY-yn.screenY):Ml=Bl=0,yn=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),oa=Se(ol),jd=J({},ol,{dataTransfer:0}),Ed=Se(jd),bd=J({},_n,{relatedTarget:0}),Tl=Se(bd),Nd=J({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=Se(Nd),Id=J({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bd=Se(Id),Md=J({},un,{data:0}),aa=Se(Md),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pd[e])?!!t[e]:!1}function ao(){return Vd}var qd=J({},_n,{key:function(e){if(e.key){var t=Td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=Se(qd),Ud=J({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=Se(Ud),Ld=J({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),zd=Se(Ld),Kd=J({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=Se(Kd),Wd=J({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=Se(Wd),Gd=[9,13,27,32],so=Qe&&"CompositionEvent"in window,bn=null;Qe&&"documentMode"in document&&(bn=document.documentMode);var Hd=Qe&&"TextEvent"in window&&!bn,Fs=Qe&&(!so||bn&&8<bn&&11>=bn),ca=" ",ua=!1;function Qs(e,t){switch(e){case"keyup":return Gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function Fd(e,t){switch(e){case"compositionend":return Ys(t);case"keypress":return t.which!==32?null:(ua=!0,ca);case"textInput":return e=t.data,e===ca&&ua?null:e;default:return null}}function Qd(e,t){if(Lt)return e==="compositionend"||!so&&Qs(e,t)?(e=Hs(),Sr=io=lt=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fs&&t.locale!=="ko"?null:t.data;default:return null}}var Yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yd[e.type]:t==="textarea"}function Zs(e,t,n,r){Ns(r),t=zr(t,"onChange"),0<t.length&&(n=new oo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nn=null,Ln=null;function Zd(e){ac(e,0)}function al(e){var t=Ot(e);if(vs(t))return e}function Xd(e,t){if(e==="change")return t}var Xs=!1;if(Qe){var Rl;if(Qe){var Pl="oninput"in document;if(!Pl){var pa=document.createElement("div");pa.setAttribute("oninput","return;"),Pl=typeof pa.oninput=="function"}Rl=Pl}else Rl=!1;Xs=Rl&&(!document.documentMode||9<document.documentMode)}function fa(){Nn&&(Nn.detachEvent("onpropertychange",_s),Ln=Nn=null)}function _s(e){if(e.propertyName==="value"&&al(Ln)){var t=[];Zs(t,Ln,e,eo(e)),Ms(Zd,t)}}function _d(e,t,n){e==="focusin"?(fa(),Nn=t,Ln=n,Nn.attachEvent("onpropertychange",_s)):e==="focusout"&&fa()}function $d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Ln)}function ep(e,t){if(e==="click")return al(t)}function tp(e,t){if(e==="input"||e==="change")return al(t)}function np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:np;function zn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Zl.call(t,l)||!De(e[l],t[l]))return!1}return!0}function ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ma(e,t){var n=ha(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ha(n)}}function $s(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$s(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rp(e){var t=ec(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$s(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ma(n,i);var a=ma(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lp=Qe&&"documentMode"in document&&11>=document.documentMode,zt=null,mi=null,Cn=null,yi=!1;function ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yi||zt==null||zt!==Rr(r)||(r=zt,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&zn(Cn,r)||(Cn=r,r=zr(mi,"onSelect"),0<r.length&&(t=new oo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zt)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Vl={},tc={};Qe&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function sl(e){if(Vl[e])return Vl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tc)return Vl[e]=t[n];return e}var nc=sl("animationend"),rc=sl("animationiteration"),lc=sl("animationstart"),ic=sl("transitionend"),oc=new Map,xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){oc.set(e,t),Pt(t,[e])}for(var ql=0;ql<xa.length;ql++){var Dl=xa[ql],ip=Dl.toLowerCase(),op=Dl[0].toUpperCase()+Dl.slice(1);xt(ip,"on"+op)}xt(nc,"onAnimationEnd");xt(rc,"onAnimationIteration");xt(lc,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(ic,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function ga(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,id(r,t,void 0,e),e.currentTarget=null}function ac(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&l.isPropagationStopped())break e;ga(l,s,u),i=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&l.isPropagationStopped())break e;ga(l,s,u),i=c}}}if(Vr)throw e=di,Vr=!1,di=null,e}function L(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(sc(t,e,2,!1),n.add(r))}function Ul(e,t,n){var r=0;t&&(r|=4),sc(n,e,r,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[pr]){e[pr]=!0,ms.forEach(function(n){n!=="selectionchange"&&(ap.has(n)||Ul(n,!1,e),Ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,Ul("selectionchange",!1,t))}}function sc(e,t,n,r){switch(Gs(t)){case 1:var l=wd;break;case 4:l=kd;break;default:l=lo}n=l.bind(null,t,n,e),l=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;a=a.return}for(;s!==null;){if(a=jt(s),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Ms(function(){var u=i,x=eo(n),y=[];e:{var h=oc.get(e);if(h!==void 0){var v=oo,k=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":v=Dd;break;case"focusin":k="focus",v=Tl;break;case"focusout":k="blur",v=Tl;break;case"beforeblur":case"afterblur":v=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=zd;break;case nc:case rc:case lc:v=Cd;break;case ic:v=Od;break;case"scroll":v=Sd;break;case"wheel":v=Jd;break;case"copy":case"cut":case"paste":v=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sa}var j=(t&4)!==0,I=!j&&e==="scroll",p=j?h!==null?h+"Capture":null:h;j=[];for(var d=u,f;d!==null;){f=d;var A=f.stateNode;if(f.tag===5&&A!==null&&(f=A,p!==null&&(A=Vn(d,p),A!=null&&j.push(On(d,A,f)))),I)break;d=d.return}0<j.length&&(h=new v(h,k,null,n,x),y.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==si&&(k=n.relatedTarget||n.fromElement)&&(jt(k)||k[Ye]))break e;if((v||h)&&(h=x.window===x?x:(h=x.ownerDocument)?h.defaultView||h.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=u,k=k?jt(k):null,k!==null&&(I=Vt(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(j=oa,A="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=sa,A="onPointerLeave",p="onPointerEnter",d="pointer"),I=v==null?h:Ot(v),f=k==null?h:Ot(k),h=new j(A,d+"leave",v,n,x),h.target=I,h.relatedTarget=f,A=null,jt(x)===u&&(j=new j(p,d+"enter",k,n,x),j.target=f,j.relatedTarget=I,A=j),I=A,v&&k)t:{for(j=v,p=k,d=0,f=j;f;f=qt(f))d++;for(f=0,A=p;A;A=qt(A))f++;for(;0<d-f;)j=qt(j),d--;for(;0<f-d;)p=qt(p),f--;for(;d--;){if(j===p||p!==null&&j===p.alternate)break t;j=qt(j),p=qt(p)}j=null}else j=null;v!==null&&Aa(y,h,v,j,!1),k!==null&&I!==null&&Aa(y,I,k,j,!0)}}e:{if(h=u?Ot(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var g=Xd;else if(da(h))if(Xs)g=tp;else{g=$d;var S=_d}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(g=ep);if(g&&(g=g(e,u))){Zs(y,g,n,x);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ri(h,"number",h.value)}switch(S=u?Ot(u):window,e){case"focusin":(da(S)||S.contentEditable==="true")&&(zt=S,mi=u,Cn=null);break;case"focusout":Cn=mi=zt=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,ya(y,n,x);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":ya(y,n,x)}var E;if(so)e:{switch(e){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Lt?Qs(e,n)&&(m="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Fs&&n.locale!=="ko"&&(Lt||m!=="onCompositionStart"?m==="onCompositionEnd"&&Lt&&(E=Hs()):(lt=x,io="value"in lt?lt.value:lt.textContent,Lt=!0)),S=zr(u,m),0<S.length&&(m=new aa(m,e,null,n,x),y.push({event:m,listeners:S}),E?m.data=E:(E=Ys(n),E!==null&&(m.data=E)))),(E=Hd?Fd(e,n):Qd(e,n))&&(u=zr(u,"onBeforeInput"),0<u.length&&(x=new aa("onBeforeInput","beforeinput",null,n,x),y.push({event:x,listeners:u}),x.data=E))}ac(y,t)})}function On(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Vn(e,n),i!=null&&r.unshift(On(e,i,l)),i=Vn(e,t),i!=null&&r.push(On(e,i,l))),e=e.return}return r}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,l?(c=Vn(n,i),c!=null&&a.unshift(On(n,c,s))):l||(c=Vn(n,i),c!=null&&a.push(On(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var sp=/\r\n?/g,cp=/\u0000|\uFFFD/g;function va(e){return(typeof e=="string"?e:""+e).replace(sp,`
`).replace(cp,"")}function fr(e,t,n){if(t=va(t),va(e)!==t&&n)throw Error(w(425))}function Kr(){}var xi=null,gi=null;function Ai(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,dp=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(pp)}:vi;function pp(e){setTimeout(function(){throw e})}function zl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Un(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Un(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),ze="__reactFiber$"+dn,Wn="__reactProps$"+dn,Ye="__reactContainer$"+dn,wi="__reactEvents$"+dn,fp="__reactListeners$"+dn,hp="__reactHandles$"+dn;function jt(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ka(e);e!==null;){if(n=e[ze])return n;e=ka(e)}return t}e=n,n=e.parentNode}return null}function $n(e){return e=e[ze]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function cl(e){return e[Wn]||null}var ki=[],Wt=-1;function gt(e){return{current:e}}function z(e){0>Wt||(e.current=ki[Wt],ki[Wt]=null,Wt--)}function U(e,t){Wt++,ki[Wt]=e.current,e.current=t}var yt={},ae=gt(yt),me=gt(!1),It=yt;function nn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function Or(){z(me),z(ae)}function Sa(e,t,n){if(ae.current!==yt)throw Error(w(168));U(ae,t),U(me,n)}function cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,_u(e)||"Unknown",l));return J({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,It=ae.current,U(ae,e),U(me,me.current),!0}function ja(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=cc(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,z(me),z(ae),U(ae,e)):z(me),U(me,n)}var Je=null,ul=!1,Kl=!1;function uc(e){Je===null?Je=[e]:Je.push(e)}function mp(e){ul=!0,uc(e)}function At(){if(!Kl&&Je!==null){Kl=!0;var e=0,t=D;try{var n=Je;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,ul=!1}catch(l){throw Je!==null&&(Je=Je.slice(e+1)),Vs(to,At),l}finally{D=t,Kl=!1}}return null}var Jt=[],Gt=0,Jr=null,Gr=0,Ee=[],be=0,Bt=null,Ge=1,He="";function kt(e,t){Jt[Gt++]=Gr,Jt[Gt++]=Jr,Jr=e,Gr=t}function dc(e,t,n){Ee[be++]=Ge,Ee[be++]=He,Ee[be++]=Bt,Bt=e;var r=Ge;e=He;var l=32-Ve(r)-1;r&=~(1<<l),n+=1;var i=32-Ve(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Ge=1<<32-Ve(t)+l|n<<l|r,He=i+e}else Ge=1<<i|n<<l|r,He=e}function uo(e){e.return!==null&&(kt(e,1),dc(e,1,0))}function po(e){for(;e===Jr;)Jr=Jt[--Gt],Jt[Gt]=null,Gr=Jt[--Gt],Jt[Gt]=null;for(;e===Bt;)Bt=Ee[--be],Ee[be]=null,He=Ee[--be],Ee[be]=null,Ge=Ee[--be],Ee[be]=null}var ve=null,Ae=null,K=!1,Pe=null;function pc(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ea(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,Ae=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:Ge,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,Ae=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ji(e){if(K){var t=Ae;if(t){var n=t;if(!Ea(e,t)){if(Si(e))throw Error(w(418));t=ut(n.nextSibling);var r=ve;t&&Ea(e,t)?pc(r,n):(e.flags=e.flags&-4097|2,K=!1,ve=e)}}else{if(Si(e))throw Error(w(418));e.flags=e.flags&-4097|2,K=!1,ve=e}}}function ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function hr(e){if(e!==ve)return!1;if(!K)return ba(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ai(e.type,e.memoizedProps)),t&&(t=Ae)){if(Si(e))throw fc(),Error(w(418));for(;t;)pc(e,t),t=ut(t.nextSibling)}if(ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=ve?ut(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=Ae;e;)e=ut(e.nextSibling)}function rn(){Ae=ve=null,K=!1}function fo(e){Pe===null?Pe=[e]:Pe.push(e)}var yp=_e.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Na(e){var t=e._init;return t(e._payload)}function hc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=ht(p,d),p.index=0,p.sibling=null,p}function i(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,f,A){return d===null||d.tag!==6?(d=Ql(f,p.mode,A),d.return=p,d):(d=l(d,f),d.return=p,d)}function c(p,d,f,A){var g=f.type;return g===Ut?x(p,d,f.props.children,A,f.key):d!==null&&(d.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===et&&Na(g)===d.type)?(A=l(d,f.props),A.ref=xn(p,d,f),A.return=p,A):(A=Mr(f.type,f.key,f.props,null,p.mode,A),A.ref=xn(p,d,f),A.return=p,A)}function u(p,d,f,A){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Yl(f,p.mode,A),d.return=p,d):(d=l(d,f.children||[]),d.return=p,d)}function x(p,d,f,A,g){return d===null||d.tag!==7?(d=Ct(f,p.mode,A,g),d.return=p,d):(d=l(d,f),d.return=p,d)}function y(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ql(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case lr:return f=Mr(d.type,d.key,d.props,null,p.mode,f),f.ref=xn(p,null,d),f.return=p,f;case Dt:return d=Yl(d,p.mode,f),d.return=p,d;case et:var A=d._init;return y(p,A(d._payload),f)}if(wn(d)||pn(d))return d=Ct(d,p.mode,f,null),d.return=p,d;mr(p,d)}return null}function h(p,d,f,A){var g=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return g!==null?null:s(p,d,""+f,A);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:return f.key===g?c(p,d,f,A):null;case Dt:return f.key===g?u(p,d,f,A):null;case et:return g=f._init,h(p,d,g(f._payload),A)}if(wn(f)||pn(f))return g!==null?null:x(p,d,f,A,null);mr(p,f)}return null}function v(p,d,f,A,g){if(typeof A=="string"&&A!==""||typeof A=="number")return p=p.get(f)||null,s(d,p,""+A,g);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case lr:return p=p.get(A.key===null?f:A.key)||null,c(d,p,A,g);case Dt:return p=p.get(A.key===null?f:A.key)||null,u(d,p,A,g);case et:var S=A._init;return v(p,d,f,S(A._payload),g)}if(wn(A)||pn(A))return p=p.get(f)||null,x(d,p,A,g,null);mr(d,A)}return null}function k(p,d,f,A){for(var g=null,S=null,E=d,m=d=0,M=null;E!==null&&m<f.length;m++){E.index>m?(M=E,E=null):M=E.sibling;var C=h(p,E,f[m],A);if(C===null){E===null&&(E=M);break}e&&E&&C.alternate===null&&t(p,E),d=i(C,d,m),S===null?g=C:S.sibling=C,S=C,E=M}if(m===f.length)return n(p,E),K&&kt(p,m),g;if(E===null){for(;m<f.length;m++)E=y(p,f[m],A),E!==null&&(d=i(E,d,m),S===null?g=E:S.sibling=E,S=E);return K&&kt(p,m),g}for(E=r(p,E);m<f.length;m++)M=v(E,p,m,f[m],A),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?m:M.key),d=i(M,d,m),S===null?g=M:S.sibling=M,S=M);return e&&E.forEach(function(Y){return t(p,Y)}),K&&kt(p,m),g}function j(p,d,f,A){var g=pn(f);if(typeof g!="function")throw Error(w(150));if(f=g.call(f),f==null)throw Error(w(151));for(var S=g=null,E=d,m=d=0,M=null,C=f.next();E!==null&&!C.done;m++,C=f.next()){E.index>m?(M=E,E=null):M=E.sibling;var Y=h(p,E,C.value,A);if(Y===null){E===null&&(E=M);break}e&&E&&Y.alternate===null&&t(p,E),d=i(Y,d,m),S===null?g=Y:S.sibling=Y,S=Y,E=M}if(C.done)return n(p,E),K&&kt(p,m),g;if(E===null){for(;!C.done;m++,C=f.next())C=y(p,C.value,A),C!==null&&(d=i(C,d,m),S===null?g=C:S.sibling=C,S=C);return K&&kt(p,m),g}for(E=r(p,E);!C.done;m++,C=f.next())C=v(E,p,m,C.value,A),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?m:C.key),d=i(C,d,m),S===null?g=C:S.sibling=C,S=C);return e&&E.forEach(function(je){return t(p,je)}),K&&kt(p,m),g}function I(p,d,f,A){if(typeof f=="object"&&f!==null&&f.type===Ut&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:e:{for(var g=f.key,S=d;S!==null;){if(S.key===g){if(g=f.type,g===Ut){if(S.tag===7){n(p,S.sibling),d=l(S,f.props.children),d.return=p,p=d;break e}}else if(S.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===et&&Na(g)===S.type){n(p,S.sibling),d=l(S,f.props),d.ref=xn(p,S,f),d.return=p,p=d;break e}n(p,S);break}else t(p,S);S=S.sibling}f.type===Ut?(d=Ct(f.props.children,p.mode,A,f.key),d.return=p,p=d):(A=Mr(f.type,f.key,f.props,null,p.mode,A),A.ref=xn(p,d,f),A.return=p,p=A)}return a(p);case Dt:e:{for(S=f.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=l(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Yl(f,p.mode,A),d.return=p,p=d}return a(p);case et:return S=f._init,I(p,d,S(f._payload),A)}if(wn(f))return k(p,d,f,A);if(pn(f))return j(p,d,f,A);mr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,f),d.return=p,p=d):(n(p,d),d=Ql(f,p.mode,A),d.return=p,p=d),a(p)):n(p,d)}return I}var ln=hc(!0),mc=hc(!1),Hr=gt(null),Fr=null,Ht=null,ho=null;function mo(){ho=Ht=Fr=null}function yo(e){var t=Hr.current;z(Hr),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $t(e,t){Fr=e,ho=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(ho!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Fr===null)throw Error(w(308));Ht=e,Fr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var Et=null;function xo(e){Et===null?Et=[e]:Et.push(e)}function yc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,xo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,xo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}function Ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==a&&(s===null?x.firstBaseUpdate=u:s.next=u,x.lastBaseUpdate=c))}if(i!==null){var y=l.baseState;a=0,x=u=c=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){x!==null&&(x=x.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,j=s;switch(h=t,v=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){y=k.call(v,y,h);break e}y=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,h=typeof k=="function"?k.call(v,y,h):k,h==null)break e;y=J({},y,h);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(u=x=v,c=y):x=x.next=v,a|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(x===null&&(c=y),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Tt|=a,e.lanes=a,e.memoizedState=y}}function Ia(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var er={},Oe=gt(er),Jn=gt(er),Gn=gt(er);function bt(e){if(e===er)throw Error(w(174));return e}function Ao(e,t){switch(U(Gn,t),U(Jn,e),U(Oe,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ii(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ii(t,e)}z(Oe),U(Oe,t)}function on(){z(Oe),z(Jn),z(Gn)}function gc(e){bt(Gn.current);var t=bt(Oe.current),n=ii(t,e.type);t!==n&&(U(Jn,e),U(Oe,n))}function vo(e){Jn.current===e&&(z(Oe),z(Jn))}var O=gt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function wo(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var br=_e.ReactCurrentDispatcher,Wl=_e.ReactCurrentBatchConfig,Mt=0,W=null,Z=null,$=null,Zr=!1,In=!1,Hn=0,xp=0;function le(){throw Error(w(321))}function ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function So(e,t,n,r,l,i){if(Mt=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?wp:kp,e=n(r,l),In){i=0;do{if(In=!1,Hn=0,25<=i)throw Error(w(301));i+=1,$=Z=null,t.updateQueue=null,br.current=Sp,e=n(r,l)}while(In)}if(br.current=Xr,t=Z!==null&&Z.next!==null,Mt=0,$=Z=W=null,Zr=!1,t)throw Error(w(300));return e}function jo(){var e=Hn!==0;return Hn=0,e}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $===null?W.memoizedState=$=e:$=$.next=e,$}function Be(){if(Z===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=$===null?W.memoizedState:$.next;if(t!==null)$=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},$===null?W.memoizedState=$=e:$=$.next=e}return $}function Fn(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Be(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,c=null,u=i;do{var x=u.lane;if((Mt&x)===x)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var y={lane:x,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=y,a=r):c=c.next=y,W.lanes|=x,Tt|=x}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=s,De(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Tt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Be(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);De(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ac(){}function vc(e,t){var n=W,r=Be(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Eo(Sc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||$!==null&&$.memoizedState.tag&1){if(n.flags|=2048,Qn(9,kc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(w(349));Mt&30||wc(n,t,l)}return l}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kc(e,t,n,r){t.value=n,t.getSnapshot=r,jc(t)&&Ec(e)}function Sc(e,t,n){return n(function(){jc(t)&&Ec(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Ec(e){var t=Ze(e,1);t!==null&&qe(t,e,1,-1)}function Ba(e){var t=Le();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:e},t.queue=e,e=e.dispatch=vp.bind(null,W,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bc(){return Be().memoizedState}function Nr(e,t,n,r){var l=Le();W.flags|=e,l.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var l=Be();r=r===void 0?null:r;var i=void 0;if(Z!==null){var a=Z.memoizedState;if(i=a.destroy,r!==null&&ko(r,a.deps)){l.memoizedState=Qn(t,n,i,r);return}}W.flags|=e,l.memoizedState=Qn(1|t,n,i,r)}function Ma(e,t){return Nr(8390656,8,e,t)}function Eo(e,t){return dl(2048,8,e,t)}function Nc(e,t){return dl(4,2,e,t)}function Cc(e,t){return dl(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,Ic.bind(null,t,e),n)}function bo(){}function Mc(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rc(e,t,n){return Mt&21?(De(n,t)||(n=Us(),W.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function gp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{D=n,Wl.transition=r}}function Pc(){return Be().memoizedState}function Ap(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vc(e))qc(t,n);else if(n=yc(e,t,n,r),n!==null){var l=ue();qe(n,e,r,l),Dc(n,t,r)}}function vp(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))qc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,De(s,a)){var c=t.interleaved;c===null?(l.next=l,xo(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=yc(e,t,l,r),n!==null&&(l=ue(),qe(n,e,r,l),Dc(n,t,r))}}function Vc(e){var t=e.alternate;return e===W||t!==null&&t===W}function qc(e,t){In=Zr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}var Xr={readContext:Ie,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},wp={readContext:Ie,useCallback:function(e,t){return Le().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nr(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nr(4,2,e,t)},useMemo:function(e,t){var n=Le();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Le();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ap.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Le();return e={current:e},t.memoizedState=e},useState:Ba,useDebugValue:bo,useDeferredValue:function(e){return Le().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=gp.bind(null,e[1]),Le().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=Le();if(K){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));Mt&30||wc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ma(Sc.bind(null,r,i,e),[e]),r.flags|=2048,Qn(9,kc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Le(),t=ee.identifierPrefix;if(K){var n=He,r=Ge;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kp={readContext:Ie,useCallback:Mc,useContext:Ie,useEffect:Eo,useImperativeHandle:Bc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:Tc,useReducer:Jl,useRef:bc,useState:function(){return Jl(Fn)},useDebugValue:bo,useDeferredValue:function(e){var t=Be();return Rc(t,Z.memoizedState,e)},useTransition:function(){var e=Jl(Fn)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:vc,useId:Pc,unstable_isNewReconciler:!1},Sp={readContext:Ie,useCallback:Mc,useContext:Ie,useEffect:Eo,useImperativeHandle:Bc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:Tc,useReducer:Gl,useRef:bc,useState:function(){return Gl(Fn)},useDebugValue:bo,useDeferredValue:function(e){var t=Be();return Z===null?t.memoizedState=e:Rc(t,Z.memoizedState,e)},useTransition:function(){var e=Gl(Fn)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:vc,useId:Pc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Fe(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(qe(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Fe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(qe(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),l=Fe(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(qe(t,e,r,n),Er(t,e,r))}};function Ta(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!zn(n,r)||!zn(l,i):!0}function Uc(e,t,n){var r=!1,l=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ie(i):(l=ye(t)?It:ae.current,r=t.contextTypes,i=(r=r!=null)?nn(e,l):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ra(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function Ni(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},go(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ie(i):(i=ye(t)?It:ae.current,l.context=nn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&pl.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Xu(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jp=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,t,n){n=Fe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$r||($r=!0,Ui=r),Ci(e,t)},n}function zc(e,t,n){n=Fe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ci(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Pa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Up.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Ep=_e.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?mc(t,null,n,r):ln(t,e.child,n,r)}function Da(e,t,n,r,l){n=n.render;var i=t.ref;return $t(t,l),r=So(e,t,n,r,i,l),n=jo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(K&&n&&uo(t),t.flags|=1,ce(e,t,r,l),t.child)}function Ua(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Kc(e,t,i,r,l)):(e=Mr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:zn,n(a,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(zn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Ii(e,t,n,r,l)}function Oc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Qt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Qt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(Qt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(Qt,ge),ge|=r;return ce(e,t,l,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ii(e,t,n,r,l){var i=ye(n)?It:ae.current;return i=nn(t,i),$t(t,l),n=So(e,t,n,r,i,l),r=jo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(K&&r&&uo(t),t.flags|=1,ce(e,t,n,l),t.child)}function La(e,t,n,r,l){if(ye(n)){var i=!0;Wr(t)}else i=!1;if($t(t,l),t.stateNode===null)Cr(e,t),Uc(t,n,r),Ni(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ie(u):(u=ye(n)?It:ae.current,u=nn(t,u));var x=n.getDerivedStateFromProps,y=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Ra(t,a,r,u),tt=!1;var h=t.memoizedState;a.state=h,Qr(t,r,a,l),c=t.memoizedState,s!==r||h!==c||me.current||tt?(typeof x=="function"&&(bi(t,n,x,r),c=t.memoizedState),(s=tt||Ta(t,n,s,r,h,c,u))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,xc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Te(t.type,s),a.props=u,y=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ie(c):(c=ye(n)?It:ae.current,c=nn(t,c));var v=n.getDerivedStateFromProps;(x=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==y||h!==c)&&Ra(t,a,r,c),tt=!1,h=t.memoizedState,a.state=h,Qr(t,r,a,l);var k=t.memoizedState;s!==y||h!==k||me.current||tt?(typeof v=="function"&&(bi(t,n,v,r),k=t.memoizedState),(u=tt||Ta(t,n,u,r,h,k,c)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bi(e,t,n,r,i,l)}function Bi(e,t,n,r,l,i){Wc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ja(t,n,!1),Xe(e,t,i);r=t.stateNode,Ep.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ln(t,e.child,null,i),t.child=ln(t,null,s,i)):ce(e,t,s,i),t.memoizedState=r.state,l&&ja(t,n,!0),t.child}function Jc(e){var t=e.stateNode;t.pendingContext?Sa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sa(e,t.context,!1),Ao(e,t.containerInfo)}function za(e,t,n,r,l){return rn(),fo(l),t.flags|=256,ce(e,t,n,r),t.child}var Mi={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gc(e,t,n){var r=t.pendingProps,l=O.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(O,l&1),e===null)return ji(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ml(a,r,0,null),e=Ct(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ti(n),t.memoizedState=Mi,e):No(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return bp(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ht(l,c),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ht(s,i):(i=Ct(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ti(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Mi,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function No(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&fo(r),ln(t,e.child,null,n),e=No(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bp(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(w(422))),yr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ml({mode:"visible",children:r.children},l,0,null),i=Ct(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ln(t,e.child,null,a),t.child.memoizedState=Ti(a),t.memoizedState=Mi,i);if(!(t.mode&1))return yr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(w(419)),r=Hl(i,r,void 0),yr(e,t,a,r)}if(s=(a&e.childLanes)!==0,he||s){if(r=ee,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ze(e,l),qe(r,e,l,-1))}return Ro(),r=Hl(Error(w(421))),yr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ae=ut(l.nextSibling),ve=t,K=!0,Pe=null,e!==null&&(Ee[be++]=Ge,Ee[be++]=He,Ee[be++]=Bt,Ge=e.id,He=e.overflow,Bt=t),t=No(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Fl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Hc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=O.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(O,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Fl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Fl(t,!0,n,null,i);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Np(e,t,n){switch(t.tag){case 3:Jc(t),rn();break;case 5:gc(t);break;case 1:ye(t.type)&&Wr(t);break;case 4:Ao(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(O,O.current&1),t.flags|=128,null):n&t.child.childLanes?Gc(e,t,n):(U(O,O.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);U(O,O.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(O,O.current),r)break;return null;case 22:case 23:return t.lanes=0,Oc(e,t,n)}return Xe(e,t,n)}var Fc,Ri,Qc,Yc;Fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ri=function(){};Qc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(Oe.current);var i=null;switch(n){case"input":l=ti(e,l),r=ti(e,r),i=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":l=li(e,l),r=li(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}oi(n,r);var a;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&L("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Yc=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cp(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ye(t.type)&&Or(),ie(t),null;case 3:return r=t.stateNode,on(),z(me),z(ae),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pe!==null&&(Ki(Pe),Pe=null))),Ri(e,t),ie(t),null;case 5:vo(t);var l=bt(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ie(t),null}if(e=bt(Oe.current),hr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ze]=t,r[Wn]=i,e=(t.mode&1)!==0,n){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)L(Sn[l],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Zo(r,i),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},L("invalid",r);break;case"textarea":_o(r,i),L("invalid",r)}oi(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",""+s]):Rn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&L("scroll",r)}switch(n){case"input":ir(r),Xo(r,i,!0);break;case"textarea":ir(r),$o(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ss(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ze]=t,e[Wn]=r,Fc(e,t,!1,!1),t.stateNode=e;e:{switch(a=ai(n,r),n){case"dialog":L("cancel",e),L("close",e),l=r;break;case"iframe":case"object":case"embed":L("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)L(Sn[l],e);l=r;break;case"source":L("error",e),l=r;break;case"img":case"image":case"link":L("error",e),L("load",e),l=r;break;case"details":L("toggle",e),l=r;break;case"input":Zo(e,r),l=ti(e,r),L("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),L("invalid",e);break;case"textarea":_o(e,r),l=li(e,r),L("invalid",e);break;default:l=r}oi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?bs(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&js(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Pn(e,c):typeof c=="number"&&Pn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&L("scroll",e):c!=null&&Zi(e,i,c,a))}switch(n){case"input":ir(e),Xo(e,r,!1);break;case"textarea":ir(e),$o(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Yc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=bt(Gn.current),bt(Oe.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ze]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ze]=t,t.stateNode=r}return ie(t),null;case 13:if(z(O),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ae!==null&&t.mode&1&&!(t.flags&128))fc(),rn(),t.flags|=98560,i=!1;else if(i=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[ze]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Pe!==null&&(Ki(Pe),Pe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||O.current&1?X===0&&(X=3):Ro())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return on(),Ri(e,t),e===null&&Kn(t.stateNode.containerInfo),ie(t),null;case 10:return yo(t.type._context),ie(t),null;case 17:return ye(t.type)&&Or(),ie(t),null;case 19:if(z(O),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)gn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Yr(e),a!==null){for(t.flags|=128,gn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(O,O.current&1|2),t.child}e=e.sibling}i.tail!==null&&F()>sn&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!K)return ie(t),null}else 2*F()-i.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=F(),t.sibling=null,n=O.current,U(O,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return To(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Ip(e,t){switch(po(t),t.tag){case 1:return ye(t.type)&&Or(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),z(me),z(ae),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vo(t),null;case 13:if(z(O),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(O),null;case 4:return on(),null;case 10:return yo(t.type._context),null;case 22:case 23:return To(),null;case 24:return null;default:return null}}var xr=!1,oe=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,b=null;function Ft(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Pi(e,t,n){try{n()}catch(r){G(e,t,r)}}var Oa=!1;function Mp(e,t){if(xi=Ur,e=ec(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,x=0,y=e,h=null;t:for(;;){for(var v;y!==n||l!==0&&y.nodeType!==3||(s=a+l),y!==i||r!==0&&y.nodeType!==3||(c=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(v=y.firstChild)!==null;)h=y,y=v;for(;;){if(y===e)break t;if(h===n&&++u===l&&(s=a),h===i&&++x===r&&(c=a),(v=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=v}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Ur=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,I=k.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:Te(t.type,j),I);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(A){G(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return k=Oa,Oa=!1,k}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Pi(t,n,i)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zc(e){var t=e.alternate;t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[Wn],delete t[wi],delete t[fp],delete t[hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function Wa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var te=null,Re=!1;function $e(e,t,n){for(n=n.child;n!==null;)_c(e,t,n),n=n.sibling}function _c(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:oe||Ft(n,t);case 6:var r=te,l=Re;te=null,$e(e,t,n),te=r,Re=l,te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?zl(e.parentNode,n):e.nodeType===1&&zl(e,n),Un(e)):zl(te,n.stateNode));break;case 4:r=te,l=Re,te=n.stateNode.containerInfo,Re=!0,$e(e,t,n),te=r,Re=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Pi(n,t,a),l=l.next}while(l!==r)}$e(e,t,n);break;case 1:if(!oe&&(Ft(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}$e(e,t,n);break;case 21:$e(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,$e(e,t,n),oe=r):$e(e,t,n);break;default:$e(e,t,n)}}function Ja(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bp),t.forEach(function(r){var l=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Re=!1;break e;case 3:te=s.stateNode.containerInfo,Re=!0;break e;case 4:te=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(te===null)throw Error(w(160));_c(i,a,l),te=null,Re=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){G(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$c(t,e),t=t.sibling}function $c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ue(e),r&4){try{Bn(3,e,e.return),fl(3,e)}catch(j){G(e,e.return,j)}try{Bn(5,e,e.return)}catch(j){G(e,e.return,j)}}break;case 1:Me(t,e),Ue(e),r&512&&n!==null&&Ft(n,n.return);break;case 5:if(Me(t,e),Ue(e),r&512&&n!==null&&Ft(n,n.return),e.flags&32){var l=e.stateNode;try{Pn(l,"")}catch(j){G(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ws(l,i),ai(s,a);var u=ai(s,i);for(a=0;a<c.length;a+=2){var x=c[a],y=c[a+1];x==="style"?bs(l,y):x==="dangerouslySetInnerHTML"?js(l,y):x==="children"?Pn(l,y):Zi(l,x,y,u)}switch(s){case"input":ni(l,i);break;case"textarea":ks(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Yt(l,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wn]=i}catch(j){G(e,e.return,j)}}break;case 6:if(Me(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(j){G(e,e.return,j)}}break;case 3:if(Me(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(j){G(e,e.return,j)}break;case 4:Me(t,e),Ue(e);break;case 13:Me(t,e),Ue(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Bo=F())),r&4&&Ja(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||x,Me(t,e),oe=u):Me(t,e),Ue(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!x&&e.mode&1)for(b=e,x=e.child;x!==null;){for(y=b=x;b!==null;){switch(h=b,v=h.child,h.tag){case 0:case 11:case 14:case 15:Bn(4,h,h.return);break;case 1:Ft(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){G(r,n,j)}}break;case 5:Ft(h,h.return);break;case 22:if(h.memoizedState!==null){Ha(y);continue}}v!==null?(v.return=h,b=v):Ha(y)}x=x.sibling}e:for(x=null,y=e;;){if(y.tag===5){if(x===null){x=y;try{l=y.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=y.stateNode,c=y.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Es("display",a))}catch(j){G(e,e.return,j)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(j){G(e,e.return,j)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Me(t,e),Ue(e),r&4&&Ja(e);break;case 21:break;default:Me(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Pn(l,""),r.flags&=-33);var i=Wa(e);Di(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Wa(e);qi(e,s,a);break;default:throw Error(w(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,n){b=e,eu(e)}function eu(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||xr;if(!a){var s=l.alternate,c=s!==null&&s.memoizedState!==null||oe;s=xr;var u=oe;if(xr=a,(oe=c)&&!u)for(b=l;b!==null;)a=b,c=a.child,a.tag===22&&a.memoizedState!==null?Fa(l):c!==null?(c.return=a,b=c):Fa(l);for(;i!==null;)b=i,eu(i),i=i.sibling;b=l,xr=s,oe=u}Ga(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,b=i):Ga(e)}}function Ga(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ia(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ia(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var x=u.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&Un(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||t.flags&512&&Vi(t)}catch(h){G(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Ha(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Fa(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(c){G(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){G(t,l,c)}}var i=t.return;try{Vi(t)}catch(c){G(t,i,c)}break;case 5:var a=t.return;try{Vi(t)}catch(c){G(t,a,c)}}}catch(c){G(t,t.return,c)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var Rp=Math.ceil,_r=_e.ReactCurrentDispatcher,Co=_e.ReactCurrentOwner,Ce=_e.ReactCurrentBatchConfig,V=0,ee=null,Q=null,ne=0,ge=0,Qt=gt(0),X=0,Yn=null,Tt=0,hl=0,Io=0,Mn=null,fe=null,Bo=0,sn=1/0,We=null,$r=!1,Ui=null,pt=null,gr=!1,it=null,el=0,Tn=0,Li=null,Ir=-1,Br=0;function ue(){return V&6?F():Ir!==-1?Ir:Ir=F()}function ft(e){return e.mode&1?V&2&&ne!==0?ne&-ne:yp.transition!==null?(Br===0&&(Br=Us()),Br):(e=D,e!==0||(e=window.event,e=e===void 0?16:Gs(e.type)),e):1}function qe(e,t,n,r){if(50<Tn)throw Tn=0,Li=null,Error(w(185));Xn(e,n,r),(!(V&2)||e!==ee)&&(e===ee&&(!(V&2)&&(hl|=n),X===4&&rt(e,ne)),xe(e,r),n===1&&V===0&&!(t.mode&1)&&(sn=F()+500,ul&&At()))}function xe(e,t){var n=e.callbackNode;yd(e,t);var r=Dr(e,e===ee?ne:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?mp(Qa.bind(null,e)):uc(Qa.bind(null,e)),dp(function(){!(V&6)&&At()}),n=null;else{switch(Ls(r)){case 1:n=to;break;case 4:n=qs;break;case 16:n=qr;break;case 536870912:n=Ds;break;default:n=qr}n=su(n,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tu(e,t){if(Ir=-1,Br=0,V&6)throw Error(w(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=Dr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var l=V;V|=2;var i=ru();(ee!==e||ne!==t)&&(We=null,sn=F()+500,Nt(e,t));do try{qp();break}catch(s){nu(e,s)}while(!0);mo(),_r.current=i,V=l,Q!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(l=pi(e),l!==0&&(r=l,t=zi(e,l))),t===1)throw n=Yn,Nt(e,0),rt(e,r),xe(e,F()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pp(l)&&(t=tl(e,r),t===2&&(i=pi(e),i!==0&&(r=i,t=zi(e,i))),t===1))throw n=Yn,Nt(e,0),rt(e,r),xe(e,F()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:St(e,fe,We);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Bo+500-F(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(St.bind(null,e,fe,We),t);break}St(e,fe,We);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ve(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=F()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rp(r/1960))-r,10<r){e.timeoutHandle=vi(St.bind(null,e,fe,We),r);break}St(e,fe,We);break;case 5:St(e,fe,We);break;default:throw Error(w(329))}}}return xe(e,F()),e.callbackNode===n?tu.bind(null,e):null}function zi(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=tl(e,t),e!==2&&(t=fe,fe=n,t!==null&&Ki(t)),e}function Ki(e){fe===null?fe=e:fe.push.apply(fe,e)}function Pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Io,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Qa(e){if(V&6)throw Error(w(327));en();var t=Dr(e,0);if(!(t&1))return xe(e,F()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=pi(e);r!==0&&(t=r,n=zi(e,r))}if(n===1)throw n=Yn,Nt(e,0),rt(e,t),xe(e,F()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,fe,We),xe(e,F()),null}function Mo(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(sn=F()+500,ul&&At())}}function Rt(e){it!==null&&it.tag===0&&!(V&6)&&en();var t=V;V|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=n,V=t,!(V&6)&&At()}}function To(){ge=Qt.current,z(Qt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,up(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Or();break;case 3:on(),z(me),z(ae),wo();break;case 5:vo(r);break;case 4:on();break;case 13:z(O);break;case 19:z(O);break;case 10:yo(r.type._context);break;case 22:case 23:To()}n=n.return}if(ee=e,Q=e=ht(e.current,null),ne=ge=t,X=0,Yn=null,Io=hl=Tt=0,fe=Mn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Et=null}return e}function nu(e,t){do{var n=Q;try{if(mo(),br.current=Xr,Zr){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zr=!1}if(Mt=0,$=Z=W=null,In=!1,Hn=0,Co.current=null,n===null||n.return===null){X=1,Yn=t,Q=null;break}e:{var i=e,a=n.return,s=n,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,x=s,y=x.tag;if(!(x.mode&1)&&(y===0||y===11||y===15)){var h=x.alternate;h?(x.updateQueue=h.updateQueue,x.memoizedState=h.memoizedState,x.lanes=h.lanes):(x.updateQueue=null,x.memoizedState=null)}var v=Va(a);if(v!==null){v.flags&=-257,qa(v,a,s,i,t),v.mode&1&&Pa(i,u,t),t=v,c=u;var k=t.updateQueue;if(k===null){var j=new Set;j.add(c),t.updateQueue=j}else k.add(c);break e}else{if(!(t&1)){Pa(i,u,t),Ro();break e}c=Error(w(426))}}else if(K&&s.mode&1){var I=Va(a);if(I!==null){!(I.flags&65536)&&(I.flags|=256),qa(I,a,s,i,t),fo(an(c,s));break e}}i=c=an(c,s),X!==4&&(X=2),Mn===null?Mn=[i]:Mn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Lc(i,c,t);Ca(i,p);break e;case 1:s=c;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var A=zc(i,s,t);Ca(i,A);break e}}i=i.return}while(i!==null)}iu(n)}catch(g){t=g,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ru(){var e=_r.current;return _r.current=Xr,e===null?Xr:e}function Ro(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Tt&268435455)&&!(hl&268435455)||rt(ee,ne)}function tl(e,t){var n=V;V|=2;var r=ru();(ee!==e||ne!==t)&&(We=null,Nt(e,t));do try{Vp();break}catch(l){nu(e,l)}while(!0);if(mo(),V=n,_r.current=r,Q!==null)throw Error(w(261));return ee=null,ne=0,X}function Vp(){for(;Q!==null;)lu(Q)}function qp(){for(;Q!==null&&!ad();)lu(Q)}function lu(e){var t=au(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?iu(e):Q=t,Co.current=null}function iu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ip(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=Cp(n,t,ge),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function St(e,t,n){var r=D,l=Ce.transition;try{Ce.transition=null,D=1,Dp(e,t,n,r)}finally{Ce.transition=l,D=r}return null}function Dp(e,t,n,r){do en();while(it!==null);if(V&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(xd(e,i),e===ee&&(Q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,su(qr,function(){return en(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var a=D;D=1;var s=V;V|=4,Co.current=null,Mp(e,n),$c(n,e),rp(gi),Ur=!!xi,gi=xi=null,e.current=n,Tp(n),sd(),V=s,D=a,Ce.transition=i}else e.current=n;if(gr&&(gr=!1,it=e,el=l),i=e.pendingLanes,i===0&&(pt=null),dd(n.stateNode),xe(e,F()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if($r)throw $r=!1,e=Ui,Ui=null,e;return el&1&&e.tag!==0&&en(),i=e.pendingLanes,i&1?e===Li?Tn++:(Tn=0,Li=e):Tn=0,At(),null}function en(){if(it!==null){var e=Ls(el),t=Ce.transition,n=D;try{if(Ce.transition=null,D=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,el=0,V&6)throw Error(w(331));var l=V;for(V|=4,b=e.current;b!==null;){var i=b,a=i.child;if(b.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(b=u;b!==null;){var x=b;switch(x.tag){case 0:case 11:case 15:Bn(8,x,i)}var y=x.child;if(y!==null)y.return=x,b=y;else for(;b!==null;){x=b;var h=x.sibling,v=x.return;if(Zc(x),x===u){b=null;break}if(h!==null){h.return=v,b=h;break}b=v}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var I=j.sibling;j.sibling=null,j=I}while(j!==null)}}b=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,b=a;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,b=p;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){a=b;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,b=f;else e:for(a=d;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(g){G(s,s.return,g)}if(s===a){b=null;break e}var A=s.sibling;if(A!==null){A.return=s.return,b=A;break e}b=s.return}}if(V=l,At(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{D=n,Ce.transition=t}}return!1}function Ya(e,t,n){t=an(n,t),t=Lc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(Xn(e,1,t),xe(e,t))}function G(e,t,n){if(e.tag===3)Ya(e,e,n);else for(;t!==null;){if(t.tag===3){Ya(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=an(n,e),e=zc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(Xn(t,1,e),xe(t,e));break}}t=t.return}}function Up(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>F()-Bo?Nt(e,0):Io|=n),xe(e,t)}function ou(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ue();e=Ze(e,t),e!==null&&(Xn(e,t,n),xe(e,n))}function Lp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ou(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),ou(e,n)}var au;au=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Np(e,t,n);he=!!(e.flags&131072)}else he=!1,K&&t.flags&1048576&&dc(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cr(e,t),e=t.pendingProps;var l=nn(t,ae.current);$t(t,n),l=So(null,t,r,e,l,n);var i=jo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(i=!0,Wr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,go(t),l.updater=pl,t.stateNode=l,l._reactInternals=t,Ni(t,r,e,n),t=Bi(null,t,r,!0,i,n)):(t.tag=0,K&&i&&uo(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Op(r),e=Te(r,e),l){case 0:t=Ii(null,t,r,e,n);break e;case 1:t=La(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Ua(null,t,r,Te(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Ii(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),La(e,t,r,l,n);case 3:e:{if(Jc(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,l=i.element,xc(e,t),Qr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=an(Error(w(423)),t),t=za(e,t,r,n,l);break e}else if(r!==l){l=an(Error(w(424)),t),t=za(e,t,r,n,l);break e}else for(Ae=ut(t.stateNode.containerInfo.firstChild),ve=t,K=!0,Pe=null,n=mc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===l){t=Xe(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return gc(t),e===null&&ji(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Ai(r,l)?a=null:i!==null&&Ai(r,i)&&(t.flags|=32),Wc(e,t),ce(e,t,a,n),t.child;case 6:return e===null&&ji(t),null;case 13:return Gc(e,t,n);case 4:return Ao(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Da(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,U(Hr,r._currentValue),r._currentValue=a,i!==null)if(De(i.value,a)){if(i.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Fe(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var x=u.pending;x===null?c.next=c:(c.next=x.next,x.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ei(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(w(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ei(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,$t(t,n),l=Ie(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),Ua(e,t,r,l,n);case 15:return Kc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Cr(e,t),t.tag=1,ye(r)?(e=!0,Wr(t)):e=!1,$t(t,n),Uc(t,r,l),Ni(t,r,l,n),Bi(null,t,r,!0,e,n);case 19:return Hc(e,t,n);case 22:return Oc(e,t,n)}throw Error(w(156,t.tag))};function su(e,t){return Vs(e,t)}function Kp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Kp(e,t,n,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_i)return 11;if(e===$i)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Po(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ut:return Ct(n.children,l,i,t);case Xi:a=8,l|=8;break;case Xl:return e=Ne(12,n,t,l|2),e.elementType=Xl,e.lanes=i,e;case _l:return e=Ne(13,n,t,l),e.elementType=_l,e.lanes=i,e;case $l:return e=Ne(19,n,t,l),e.elementType=$l,e.lanes=i,e;case gs:return ml(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ys:a=10;break e;case xs:a=9;break e;case _i:a=11;break e;case $i:a=14;break e;case et:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=gs,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vo(e,t,n,r,l,i,a,s,c){return e=new Wp(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(i),e}function Jp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cu(e){if(!e)return yt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return cc(e,n,t)}return t}function uu(e,t,n,r,l,i,a,s,c){return e=Vo(n,r,!0,e,l,i,a,s,c),e.context=cu(null),n=e.current,r=ue(),l=ft(n),i=Fe(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,Xn(e,l,r),xe(e,r),e}function yl(e,t,n,r){var l=t.current,i=ue(),a=ft(l);return n=cu(n),t.context===null?t.context=n:t.pendingContext=n,t=Fe(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,a),e!==null&&(qe(e,l,a,i),Er(e,l,a)),a}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Za(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qo(e,t){Za(e,t),(e=e.alternate)&&Za(e,t)}function Gp(){return null}var du=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}xl.prototype.render=Do.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));yl(e,t,null,null)};xl.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){yl(null,e,null,null)}),t[Ye]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Js(e)}};function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function Hp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=nl(a);i.call(u)}}var a=uu(t,r,e,0,null,!1,!1,"",Xa);return e._reactRootContainer=a,e[Ye]=a.current,Kn(e.nodeType===8?e.parentNode:e),Rt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=nl(c);s.call(u)}}var c=Vo(e,0,!1,null,null,!1,!1,"",Xa);return e._reactRootContainer=c,e[Ye]=c.current,Kn(e.nodeType===8?e.parentNode:e),Rt(function(){yl(t,c,n,r)}),c}function Al(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var c=nl(a);s.call(c)}}yl(t,a,e,l)}else a=Hp(n,t,e,l,r);return nl(a)}zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(no(t,n|1),xe(t,F()),!(V&6)&&(sn=F()+500,At()))}break;case 13:Rt(function(){var r=Ze(e,1);if(r!==null){var l=ue();qe(r,e,1,l)}}),qo(e,1)}};ro=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ue();qe(t,e,134217728,n)}qo(e,134217728)}};Ks=function(e){if(e.tag===13){var t=ft(e),n=Ze(e,t);if(n!==null){var r=ue();qe(n,e,t,r)}qo(e,t)}};Os=function(){return D};Ws=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};ci=function(e,t,n){switch(t){case"input":if(ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=cl(r);if(!l)throw Error(w(90));vs(r),ni(r,l)}}}break;case"textarea":ks(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Is=Mo;Bs=Rt;var Fp={usingClientEntryPoint:!1,Events:[$n,Ot,cl,Ns,Cs,Mo]},An={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qp={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rs(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{il=Ar.inject(Qp),Ke=Ar}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uo(t))throw Error(w(200));return Jp(e,t,null,n)};ke.createRoot=function(e,t){if(!Uo(e))throw Error(w(299));var n=!1,r="",l=du;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vo(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Do(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Rs(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Rt(e)};ke.hydrate=function(e,t,n){if(!gl(t))throw Error(w(200));return Al(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Uo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=du;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=uu(t,null,e,1,n??null,l,!1,i,a),e[Ye]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};ke.render=function(e,t,n){if(!gl(t))throw Error(w(200));return Al(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!gl(e))throw Error(w(40));return e._reactRootContainer?(Rt(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=Mo;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Al(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function pu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pu)}catch(e){console.error(e)}}pu(),ps.exports=ke;var Yp=ps.exports,fu,_a=Yp;fu=_a.createRoot,_a.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(e,t)=>{const n=q.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:c,...u},x)=>q.createElement("svg",{ref:x,...Zp,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Xp(e)}`,s].join(" "),...u},[...t.map(([y,h])=>q.createElement(y,h)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=B("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=B("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=B("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=B("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=B("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=B("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=B("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=B("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=B("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=B("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=B("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=B("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=B("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=B("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=B("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=B("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=B("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=B("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=B("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=B("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=B("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=B("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=B("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=B("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=B("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=B("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=B("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=B("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=B("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=B("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=B("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=B("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=B("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=B("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=B("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=B("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=B("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=B("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=B("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=B("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=B("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=B("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=B("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=B("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=B("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=B("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),T0=({onAddObject:e})=>{const t=[{type:"cube",icon:o.jsx(Tr,{className:"w-5 h-5"}),name:"Cube",color:"bg-blue-500"},{type:"sphere",icon:o.jsx($p,{className:"w-5 h-5"}),name:"Sphere",color:"bg-green-500"},{type:"player",icon:o.jsx(I0,{className:"w-5 h-5"}),name:"Player",color:"bg-yellow-500"},{type:"enemy",icon:o.jsx(Oo,{className:"w-5 h-5"}),name:"Enemy",color:"bg-red-500"},{type:"coin",icon:o.jsx(e0,{className:"w-5 h-5"}),name:"Coin",color:"bg-yellow-600"},{type:"platform",icon:o.jsx(c0,{className:"w-5 h-5"}),name:"Platform",color:"bg-gray-500"},{type:"car",icon:o.jsx(hu,{className:"w-5 h-5"}),name:"Car",color:"bg-purple-500"},{type:"tree",icon:o.jsx(b0,{className:"w-5 h-5"}),name:"Tree",color:"bg-green-600"},{type:"terrain",icon:o.jsx(h0,{className:"w-5 h-5"}),name:"Terrain",color:"bg-amber-600"},{type:"finish",icon:o.jsx(vu,{className:"w-5 h-5"}),name:"Finish Line",color:"bg-emerald-500"},{type:"powerup",icon:o.jsx(k0,{className:"w-5 h-5"}),name:"Power-up",color:"bg-cyan-500"},{type:"health",icon:o.jsx(a0,{className:"w-5 h-5"}),name:"Health Pack",color:"bg-pink-500"},{type:"target",icon:o.jsx(Au,{className:"w-5 h-5"}),name:"Target",color:"bg-orange-500"}];return o.jsxs("div",{className:"w-64 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto",children:[o.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Game Objects"}),o.jsx("div",{className:"space-y-2",children:t.map(n=>o.jsxs("button",{onClick:()=>e(n.type),className:"w-full flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors group",children:[o.jsx("div",{className:`p-2 rounded ${n.color} group-hover:scale-110 transition-transform`,children:n.icon}),o.jsx("span",{children:n.name})]},n.type))}),o.jsxs("div",{className:"mt-6",children:[o.jsx("h4",{className:"text-md font-medium text-white mb-3",children:"Asset Categories"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("button",{className:"w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors",children:"🎨 Textures & Materials"}),o.jsx("button",{className:"w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors",children:"🔊 Sound Effects"}),o.jsx("button",{className:"w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors",children:"🎵 Background Music"}),o.jsx("button",{className:"w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors",children:"🏗️ 3D Models"}),o.jsx("button",{className:"w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors",children:"⚡ Particle Effects"}),o.jsx("button",{className:"w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors",children:"🌍 Environments"})]})]}),o.jsxs("div",{className:"mt-6",children:[o.jsx("h4",{className:"text-md font-medium text-white mb-3",children:"Quick Actions"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("button",{onClick:()=>{e("platform"),e("player"),e("coin"),e("enemy"),e("finish")},className:"w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors",children:"🎮 Create Basic Level"}),o.jsx("button",{onClick:()=>{e("car"),e("terrain"),e("finish")},className:"w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors",children:"🏁 Racing Setup"}),o.jsx("button",{onClick:()=>{e("cube"),e("target"),e("powerup")},className:"w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors",children:"🧩 Puzzle Setup"})]})]})]})},R0=({selectedObject:e,onObjectUpdate:t,onObjectDelete:n})=>{const[r,l]=Fi.useState(!1);if(!e)return o.jsxs("div",{className:"w-80 bg-gray-800 border-l border-gray-700 p-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Properties"}),o.jsxs("div",{className:"text-center py-8",children:[o.jsx("div",{className:"text-gray-400 text-6xl mb-4",children:"🎯"}),o.jsx("p",{className:"text-gray-400",children:"Select an object to view and edit its properties"}),o.jsx("p",{className:"text-gray-500 text-sm mt-2",children:"Double-click objects in the editor to reposition them"})]})]});const i=["static","player","enemy","collectible","moving","rotating","bouncing","following","patrolling","finish","powerup","destructible"],a=["#3b82f6","#ef4444","#10b981","#f59e0b","#8b5cf6","#ec4899","#06b6d4","#84cc16","#f97316","#6b7280"];return o.jsxs("div",{className:"w-80 bg-gray-800 border-l border-gray-700 p-4 overflow-y-auto",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-white",children:"Properties"}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:()=>l(!r),className:"p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors",title:"Toggle Advanced Properties",children:r?o.jsx(n0,{className:"w-4 h-4"}):o.jsx(zo,{className:"w-4 h-4"})}),o.jsx("button",{onClick:()=>n(e.id),className:"p-2 text-red-400 hover:text-red-300 hover:bg-red-900 rounded transition-colors",title:"Delete Object",children:o.jsx(Oi,{className:"w-4 h-4"})})]})]}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[o.jsx(gu,{className:"w-4 h-4 text-blue-400"}),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Object Info"})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Name"}),o.jsx("input",{type:"text",value:e.name,onChange:s=>t(e.id,{name:s.target.value}),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Type"}),o.jsx("div",{className:"px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 text-sm",children:e.type})]})]})]}),o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(m0,{className:"w-4 h-4 text-blue-400"}),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Position"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"X"}),o.jsx("input",{type:"number",step:"0.1",value:e.position.x.toFixed(1),onChange:s=>t(e.id,{position:{...e.position,x:parseFloat(s.target.value)||0}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Y"}),o.jsx("input",{type:"number",step:"0.1",value:e.position.y.toFixed(1),onChange:s=>t(e.id,{position:{...e.position,y:parseFloat(s.target.value)||0}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Z"}),o.jsx("input",{type:"number",step:"0.1",value:e.position.z.toFixed(1),onChange:s=>t(e.id,{position:{...e.position,z:parseFloat(s.target.value)||0}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]})]})]}),o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(v0,{className:"w-4 h-4 text-green-400"}),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Rotation"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"X"}),o.jsx("input",{type:"number",value:e.rotation.x,onChange:s=>t(e.id,{rotation:{...e.rotation,x:parseFloat(s.target.value)||0}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Y"}),o.jsx("input",{type:"number",value:e.rotation.y,onChange:s=>t(e.id,{rotation:{...e.rotation,y:parseFloat(s.target.value)||0}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Z"}),o.jsx("input",{type:"number",value:e.rotation.z,onChange:s=>t(e.id,{rotation:{...e.rotation,z:parseFloat(s.target.value)||0}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]})]})]}),o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(p0,{className:"w-4 h-4 text-purple-400"}),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Scale"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"X"}),o.jsx("input",{type:"number",step:"0.1",min:"0.1",value:e.scale.x.toFixed(1),onChange:s=>t(e.id,{scale:{...e.scale,x:Math.max(.1,parseFloat(s.target.value)||1)}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Y"}),o.jsx("input",{type:"number",step:"0.1",min:"0.1",value:e.scale.y.toFixed(1),onChange:s=>t(e.id,{scale:{...e.scale,y:Math.max(.1,parseFloat(s.target.value)||1)}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Z"}),o.jsx("input",{type:"number",step:"0.1",min:"0.1",value:e.scale.z.toFixed(1),onChange:s=>t(e.id,{scale:{...e.scale,z:Math.max(.1,parseFloat(s.target.value)||1)}}),className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]})]})]}),o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(rl,{className:"w-4 h-4 text-orange-400"}),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Appearance"})]}),o.jsx("div",{className:"space-y-3",children:o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-2",children:"Color"}),o.jsx("div",{className:"flex gap-2 mb-2",children:a.map(s=>o.jsx("button",{onClick:()=>t(e.id,{color:s}),className:`w-6 h-6 rounded border-2 ${e.color===s?"border-white":"border-gray-600"}`,style:{backgroundColor:s}},s))}),o.jsx("input",{type:"color",value:e.color,onChange:s=>t(e.id,{color:s.target.value}),className:"w-full h-10 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer"})]})})]}),o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(xu,{className:"w-4 h-4 text-red-400"}),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Physics & Behavior"})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("label",{className:"text-sm text-gray-300",children:"Enable Physics"}),o.jsx("input",{type:"checkbox",checked:e.physics,onChange:s=>t(e.id,{physics:s.target.checked}),className:"rounded"})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("label",{className:"text-sm text-gray-300",children:"Collision Detection"}),o.jsx("input",{type:"checkbox",checked:e.collision,onChange:s=>t(e.id,{collision:s.target.checked}),className:"rounded"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Behavior"}),o.jsx("select",{value:e.behavior,onChange:s=>t(e.id,{behavior:s.target.value}),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500",children:i.map(s=>o.jsx("option",{value:s,children:s.charAt(0).toUpperCase()+s.slice(1)},s))})]})]})]}),r&&o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx(Oo,{className:"w-4 h-4 text-yellow-400"}),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:"Advanced"})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Mass"}),o.jsx("input",{type:"number",step:"0.1",min:"0.1",defaultValue:"1.0",className:"w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Friction"}),o.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",defaultValue:"0.5",className:"w-full"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Bounce"}),o.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",defaultValue:"0.3",className:"w-full"})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("label",{className:"text-sm text-gray-300",children:"Visible"}),o.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("label",{className:"text-sm text-gray-300",children:"Kinematic"}),o.jsx("input",{type:"checkbox",className:"rounded"})]})]})]}),o.jsxs("div",{className:"bg-gray-750 p-3 rounded-lg",children:[o.jsx("h4",{className:"text-sm font-medium text-gray-300 mb-3",children:"Quick Actions"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsx("button",{onClick:()=>t(e.id,{position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}}),className:"px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors",children:"Reset Transform"}),o.jsx("button",{onClick:()=>{({...e,id:Date.now().toString(),name:`${e.name}`})},className:"px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-xs transition-colors",children:"Duplicate"})]})]})]})]})},P0=({selectedTemplate:e,editingProject:t,onSave:n})=>{const[r,l]=q.useState([{id:"1",name:"Player",type:"player",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},color:"#3b82f6",physics:!0,collision:!0,behavior:"player"},{id:"2",name:"Platform",type:"platform",position:{x:0,y:2,z:0},rotation:{x:0,y:0,z:0},scale:{x:3,y:.2,z:1},color:"#6b7280",physics:!1,collision:!0,behavior:"static"},{id:"3",name:"Coin",type:"coin",position:{x:2,y:-1,z:0},rotation:{x:0,y:0,z:0},scale:{x:.5,y:.5,z:.5},color:"#fbbf24",physics:!1,collision:!0,behavior:"collectible"},{id:"4",name:"Enemy",type:"enemy",position:{x:-2,y:-1,z:0},rotation:{x:0,y:0,z:0},scale:{x:.8,y:.8,z:.8},color:"#ef4444",physics:!0,collision:!0,behavior:"enemy"},{id:"5",name:"Finish Line",type:"finish",position:{x:4,y:-1,z:0},rotation:{x:0,y:0,z:0},scale:{x:.5,y:2,z:1},color:"#10b981",physics:!1,collision:!0,behavior:"finish"}]),[i,a]=q.useState(null),[s,c]=q.useState(!1),[u,x]=q.useState("3D"),y=q.useRef(null);Fi.useEffect(()=>{JSON.parse(localStorage.getItem("editorAssets")||"[]")},[]);const h=g=>{const S={id:Date.now().toString(),name:`${g.charAt(0).toUpperCase()+g.slice(1)} ${r.length+1}`,type:g,position:{x:Math.random()*4-2,y:Math.random()*2-1,z:Math.random()*4-2},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},color:`hsl(${Math.random()*360}, 70%, 60%)`,physics:g==="cube"||g==="sphere"||g==="player"||g==="enemy",collision:!0,behavior:g==="player"?"player":g==="enemy"?"enemy":g==="coin"?"collectible":g==="finish"?"finish":"static"};l([...r,S])},v=(g,S)=>{l(r.map(E=>E.id===g?{...E,...S}:E))},k=g=>{l(r.filter(S=>S.id!==g)),(i==null?void 0:i.id)===g&&a(null)},j=()=>{c(!s),s||I()},I=()=>{const g=p(),S=document.createElement("div");S.className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50",S.innerHTML=`
      <div class="relative w-full h-full max-w-7xl max-h-[95vh] bg-gray-900 rounded-lg overflow-hidden">
        <div class="absolute top-4 right-4 z-10">
          <button onclick="this.closest('.fixed').remove()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium text-lg">
            Stop Game
          </button>
        </div>
        <iframe src="data:text/html;charset=utf-8,${encodeURIComponent(g)}" 
                class="w-full h-full border-none"></iframe>
      </div>
    `,document.body.appendChild(S)},p=()=>{const g={objects:r,settings:{viewMode:u},metadata:{name:(t==null?void 0:t.name)||"My Game",type:u,createdAt:new Date().toISOString()}};return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${(t==null?void 0:t.name)||"My Game"}</title>
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            overflow: hidden; 
            font-family: 'Arial', sans-serif; 
        }
        #game-container { 
            width: 100vw; 
            height: 100vh; 
            position: relative; 
        }
        #game-canvas { 
            width: 100%; 
            height: 100%; 
            background: linear-gradient(to bottom, #87CEEB, #98FB98); 
        }
        #ui { 
            position: absolute; 
            top: 20px; 
            left: 20px; 
            color: white; 
            z-index: 100; 
            background: rgba(0,0,0,0.8);
            padding: 20px;
            border-radius: 15px;
            font-size: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        #controls { 
            position: absolute; 
            bottom: 20px; 
            left: 20px; 
            color: white; 
            z-index: 100; 
            background: rgba(0,0,0,0.8);
            padding: 15px;
            border-radius: 12px;
            font-size: 16px;
        }
        #result { 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            padding: 50px; 
            border-radius: 25px; 
            color: white; 
            text-align: center; 
            display: none; 
            z-index: 200;
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
            min-width: 400px;
            border: 3px solid rgba(255,255,255,0.2);
        }
        #result.victory {
            background: linear-gradient(135deg, #10b981, #34d399);
        }
        #result h2 { 
            margin-top: 0; 
            font-size: 36px; 
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3); 
            margin-bottom: 20px;
        }
        #result button { 
            background: white; 
            color: #ff6b6b; 
            border: none; 
            padding: 18px 36px; 
            border-radius: 30px; 
            font-size: 20px; 
            font-weight: bold;
            cursor: pointer; 
            margin: 15px;
            transition: all 0.3s;
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        #result button:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        .object { 
            position: absolute; 
            transition: all 0.1s ease; 
            border-radius: 6px;
        }
        .player { 
            background: #3b82f6; 
            box-shadow: 0 6px 12px rgba(59, 130, 246, 0.4);
            border: 2px solid rgba(255,255,255,0.3);
        }
        .enemy { 
            background: #ef4444; 
            box-shadow: 0 6px 12px rgba(239, 68, 68, 0.4);
            border: 2px solid rgba(255,255,255,0.2);
        }
        .coin { 
            background: #fbbf24; 
            border-radius: 50%; 
            box-shadow: 0 6px 12px rgba(251, 191, 36, 0.4);
            animation: spin 2s linear infinite, glow 1s ease-in-out infinite alternate;
        }
        .platform { 
            background: #6b7280; 
            box-shadow: 0 4px 8px rgba(107, 114, 128, 0.4);
            border-top: 3px solid #9ca3af;
        }
        .finish { 
            background: linear-gradient(45deg, #10b981, #34d399); 
            box-shadow: 0 6px 12px rgba(16, 185, 129, 0.4);
            animation: pulse 1s ease-in-out infinite alternate;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes pulse {
            from { opacity: 0.7; transform: scale(1); }
            to { opacity: 1; transform: scale(1.05); }
        }
        @keyframes glow {
            from { box-shadow: 0 6px 12px rgba(251, 191, 36, 0.4); }
            to { box-shadow: 0 6px 20px rgba(251, 191, 36, 0.8); }
        }
        .health-bar {
            position: absolute;
            top: -12px;
            left: 0;
            width: 100%;
            height: 6px;
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
        }
        .health-fill {
            height: 100%;
            background: linear-gradient(90deg, #10b981, #34d399);
            border-radius: 3px;
            transition: width 0.3s;
        }
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            animation: particle-float 1s ease-out forwards;
        }
        @keyframes particle-float {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0) translateY(-50px); }
        }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="game-canvas"></div>
        <div id="ui">
            <div>🏆 Score: <span id="score">0</span></div>
            <div>❤️ Health: <span id="health">100</span></div>
            <div>🪙 Coins: <span id="coins">0</span></div>
            <div>⏱️ Time: <span id="time">0</span>s</div>
        </div>
        <div id="controls">
            <div><strong>Controls:</strong></div>
            <div>🎮 WASD or Arrow Keys: Move</div>
            <div>🚀 Space: Jump</div>
            <div>🎯 Collect coins and reach the finish line!</div>
        </div>
        <div id="result">
            <h2 id="result-title">🎉 Victory! 🎉</h2>
            <p id="result-message">Congratulations on completing the level!</p>
            <p>Final Score: <span id="final-score">0</span></p>
            <p>Coins Collected: <span id="final-coins">0</span></p>
            <p>Time: <span id="final-time">0</span>s</p>
            <button onclick="restartGame()">🎮 Play Again</button>
            <button onclick="window.parent.postMessage('close', '*')">❌ Close</button>
        </div>
    </div>

    <script>
        const gameData = ${JSON.stringify(g)};
        let score = 0;
        let health = 100;
        let coins = 0;
        let gameRunning = true;
        let player = null;
        let objects = [];
        let keys = {};
        let startTime = Date.now();
        let camera = { x: 0, y: 0 };
        let particles = [];

        function initGame() {
            const canvas = document.getElementById('game-canvas');
            
            gameData.objects.forEach(objData => {
                const obj = document.createElement('div');
                obj.className = 'object ' + objData.type;
                obj.style.width = (objData.scale.x * 50) + 'px';
                obj.style.height = (objData.scale.y * 50) + 'px';
                obj.style.left = (objData.position.x * 50 + window.innerWidth / 2) + 'px';
                obj.style.top = (window.innerHeight / 2 - objData.position.y * 50) + 'px';
                obj.style.backgroundColor = objData.color;
                obj.style.transform = \`rotateX(\${objData.rotation.x}deg) rotateY(\${objData.rotation.y}deg) rotateZ(\${objData.rotation.z}deg)\`;
                
                // Add health bar for enemies
                if (objData.type === 'enemy') {
                    const healthBar = document.createElement('div');
                    healthBar.className = 'health-bar';
                    const healthFill = document.createElement('div');
                    healthFill.className = 'health-fill';
                    healthBar.appendChild(healthFill);
                    obj.appendChild(healthBar);
                }
                
                canvas.appendChild(obj);
                
                const gameObj = {
                    element: obj,
                    data: objData,
                    velocity: { x: 0, y: 0 },
                    health: objData.type === 'enemy' ? 100 : 0,
                    collected: false
                };
                
                objects.push(gameObj);
                
                if (objData.behavior === 'player') {
                    player = gameObj;
                }
            });
            
            document.addEventListener('keydown', (e) => keys[e.key.toLowerCase()] = true);
            document.addEventListener('keyup', (e) => keys[e.key.toLowerCase()] = false);
            
            gameLoop();
            updateTimer();
        }

        function updateTimer() {
            if (!gameRunning) return;
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            document.getElementById('time').textContent = elapsed;
            setTimeout(updateTimer, 1000);
        }

        function createParticle(x, y, color = '#ffd700') {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = color;
            document.getElementById('game-canvas').appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }

        function gameLoop() {
            if (!gameRunning) return;
            
            updatePlayer();
            updateEnemies();
            updateCamera();
            checkCollisions();
            
            requestAnimationFrame(gameLoop);
        }

        function updatePlayer() {
            if (!player) return;
            
            const speed = 6;
            let moved = false;
            
            // Player movement with smooth acceleration
            if (keys['a'] || keys['arrowleft']) {
                player.velocity.x = Math.max(player.velocity.x - 0.5, -speed);
                moved = true;
            } else if (keys['d'] || keys['arrowright']) {
                player.velocity.x = Math.min(player.velocity.x + 0.5, speed);
                moved = true;
            } else {
                player.velocity.x *= 0.85; // Smooth deceleration
            }
            
            if (keys['w'] || keys['arrowup'] || keys[' ']) {
                if (Math.abs(player.velocity.y) < 1) { // Only jump if not already jumping
                    player.velocity.y = -18; // Higher jump
                }
            }
            
            // Apply gravity
            player.velocity.y += 0.8;
            
            // Update position
            const newX = parseInt(player.element.style.left) + player.velocity.x;
            const newY = parseInt(player.element.style.top) + player.velocity.y;
            
            // Platform collision with better physics
            let onPlatform = false;
            objects.forEach(obj => {
                if (obj.data.type === 'platform' && obj !== player) {
                    const px = parseInt(player.element.style.left);
                    const py = parseInt(player.element.style.top);
                    const pw = parseInt(player.element.style.width);
                    const ph = parseInt(player.element.style.height);
                    const ox = parseInt(obj.element.style.left);
                    const oy = parseInt(obj.element.style.top);
                    const ow = parseInt(obj.element.style.width);
                    const oh = parseInt(obj.element.style.height);
                    
                    // Top collision (landing on platform)
                    if (px + pw > ox && px < ox + ow && 
                        py + ph > oy && py + ph < oy + oh + 15 &&
                        player.velocity.y > 0) {
                        player.element.style.top = (oy - ph) + 'px';
                        player.velocity.y = 0;
                        onPlatform = true;
                    }
                    // Side collisions
                    else if (py + ph > oy && py < oy + oh) {
                        if (px + pw > ox && px + pw < ox + ow/2 && player.velocity.x > 0) {
                            player.element.style.left = (ox - pw) + 'px';
                            player.velocity.x = 0;
                        } else if (px < ox + ow && px > ox + ow/2 && player.velocity.x < 0) {
                            player.element.style.left = (ox + ow) + 'px';
                            player.velocity.x = 0;
                        }
                    }
                }
            });
            
            if (!onPlatform) {
                player.element.style.top = Math.min(newY, window.innerHeight - parseInt(player.element.style.height)) + 'px';
            }
            
            player.element.style.left = Math.max(0, Math.min(window.innerWidth - parseInt(player.element.style.width), newX)) + 'px';
        }

        function updateEnemies() {
            objects.forEach(obj => {
                if (obj.data.behavior === 'enemy') {
                    // Enhanced AI: patrol and chase
                    if (player) {
                        const px = parseInt(player.element.style.left);
                        const py = parseInt(player.element.style.top);
                        const ex = parseInt(obj.element.style.left);
                        const ey = parseInt(obj.element.style.top);
                        
                        const dx = px - ex;
                        const dy = py - ey;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance > 80 && distance < 200) {
                            // Chase player
                            const speed = 2.5;
                            obj.element.style.left = (ex + (dx / distance) * speed) + 'px';
                            obj.element.style.top = (ey + (dy / distance) * speed) + 'px';
                        } else if (distance <= 80) {
                            // Patrol behavior when close
                            if (!obj.patrolDirection) obj.patrolDirection = Math.random() < 0.5 ? -1 : 1;
                            obj.element.style.left = (ex + obj.patrolDirection * 1) + 'px';
                            
                            if (Math.random() < 0.02) {
                                obj.patrolDirection *= -1;
                            }
                        }
                    }
                }
            });
        }

        function updateCamera() {
            if (!player) return;
            
            const px = parseInt(player.element.style.left);
            const py = parseInt(player.element.style.top);
            
            // Smooth camera following
            const targetX = px - window.innerWidth / 2;
            const targetY = py - window.innerHeight / 2;
            
            camera.x += (targetX - camera.x) * 0.1;
            camera.y += (targetY - camera.y) * 0.1;
            
            // Apply camera offset to all objects except player
            objects.forEach(obj => {
                if (obj !== player) {
                    const originalX = obj.data.position.x * 50 + window.innerWidth / 2;
                    const originalY = window.innerHeight / 2 - obj.data.position.y * 50;
                    
                    obj.element.style.left = (originalX - camera.x) + 'px';
                    obj.element.style.top = (originalY - camera.y) + 'px';
                }
            });
        }

        function checkCollisions() {
            if (!player) return;
            
            const px = parseInt(player.element.style.left);
            const py = parseInt(player.element.style.top);
            const pw = parseInt(player.element.style.width);
            const ph = parseInt(player.element.style.height);
            
            objects.forEach(obj => {
                if (obj === player || obj.collected) return;
                
                const ox = parseInt(obj.element.style.left);
                const oy = parseInt(obj.element.style.top);
                const ow = parseInt(obj.element.style.width);
                const oh = parseInt(obj.element.style.height);
                
                if (px < ox + ow && px + pw > ox && 
                    py < oy + oh && py + ph > oy) {
                    
                    switch (obj.data.behavior) {
                        case 'collectible':
                            if (!obj.collected) {
                                obj.collected = true;
                                obj.element.style.display = 'none';
                                coins++;
                                score += 100;
                                document.getElementById('coins').textContent = coins;
                                document.getElementById('score').textContent = score;
                                
                                // Create collection particles
                                for (let i = 0; i < 5; i++) {
                                    setTimeout(() => {
                                        createParticle(ox + ow/2, oy + oh/2, '#fbbf24');
                                    }, i * 50);
                                }
                            }
                            break;
                            
                        case 'enemy':
                            health -= 15;
                            document.getElementById('health').textContent = Math.max(0, health);
                            
                            // Create damage particles
                            createParticle(px + pw/2, py + ph/2, '#ef4444');
                            
                            if (health <= 0) {
                                endGame('💀 Game Over!', 'You were defeated by an enemy!');
                            }
                            
                            // Push player away with more force
                            const dx = px - ox;
                            const dy = py - oy;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance > 0) {
                                const pushForce = 60;
                                player.element.style.left = (px + (dx / distance) * pushForce) + 'px';
                                player.element.style.top = (py + (dy / distance) * pushForce) + 'px';
                                player.velocity.y = -10; // Bounce up
                            }
                            break;
                            
                        case 'finish':
                            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
                            const timeBonus = Math.max(0, 300 - timeTaken);
                            score += timeBonus;
                            
                            // Create victory particles
                            for (let i = 0; i < 10; i++) {
                                setTimeout(() => {
                                    createParticle(
                                        ox + Math.random() * ow, 
                                        oy + Math.random() * oh, 
                                        '#10b981'
                                    );
                                }, i * 100);
                            }
                            
                            endGame('🏆 Victory! 🏆', 'Congratulations! You completed the level!');
                            break;
                    }
                }
            });
        }

        function endGame(title, message) {
            gameRunning = false;
            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
            const resultDiv = document.getElementById('result');
            
            document.getElementById('result-title').textContent = title;
            document.getElementById('result-message').textContent = message;
            document.getElementById('final-score').textContent = score;
            document.getElementById('final-coins').textContent = coins;
            document.getElementById('final-time').textContent = timeTaken;
            
            if (title.includes('🏆')) {
                resultDiv.className = 'victory';
            }
            
            resultDiv.style.display = 'block';
        }

        function restartGame() {
            location.reload();
        }

        window.addEventListener('load', initGame);
    <\/script>
</body>
</html>`},d=()=>{t&&n({...t,gameObjects:r,lastModified:new Date})},f=()=>{const g=p(),S=new Blob([g],{type:"text/html"}),E=URL.createObjectURL(S),m=document.createElement("a");m.href=E,m.download=`${(t==null?void 0:t.name)||"my-game"}.html`,m.click(),URL.revokeObjectURL(E)},A=(g,S)=>{var m;S.stopPropagation();const E=(m=y.current)==null?void 0:m.getBoundingClientRect();if(E){const M=((S.clientX-E.left)/E.width-.5)*10,C=(.5-(S.clientY-E.top)/E.height)*10;v(g.id,{position:{...g.position,x:M,y:C}})}};return o.jsxs("div",{className:"flex h-full bg-gray-900",children:[o.jsx(T0,{onAddObject:h}),o.jsxs("div",{className:"flex-1 flex flex-col",children:[o.jsxs("div",{className:"h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6",children:[o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsxs("button",{onClick:j,className:"flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium",children:[o.jsx(vl,{className:"w-5 h-5"}),"Play Test"]}),o.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium",children:[o.jsx(Ko,{className:"w-5 h-5"}),"Save"]}),o.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium",children:[o.jsx(Lo,{className:"w-5 h-5"}),"Export HTML"]})]}),o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsxs("button",{onClick:()=>x(u==="2D"?"3D":"2D"),className:"px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium",children:[u," View"]}),o.jsx("div",{className:"text-sm text-gray-400",children:"Double-click objects to reposition"})]})]}),o.jsx("div",{className:"flex-1 relative bg-gradient-to-b from-blue-400 to-green-400 overflow-hidden",children:o.jsxs("div",{ref:y,className:"w-full h-full relative cursor-move",style:{perspective:u==="3D"?"1000px":"none"},children:[r.map(g=>o.jsxs("div",{className:`absolute cursor-pointer transition-all duration-200 ${(i==null?void 0:i.id)===g.id?"ring-4 ring-yellow-400":""}`,style:{left:`${g.position.x*50+50}%`,top:`${50-g.position.y*50}%`,width:`${g.scale.x*50}px`,height:`${g.scale.y*50}px`,backgroundColor:g.color,transform:`rotateX(${g.rotation.x}deg) rotateY(${g.rotation.y}deg) rotateZ(${g.rotation.z}deg)`,borderRadius:g.type==="sphere"||g.type==="coin"?"50%":"6px",border:g.physics?"3px solid rgba(255, 255, 0, 0.4)":"none",boxShadow:u==="3D"?"0 6px 12px rgba(0,0,0,0.3)":"none",zIndex:g.type==="player"?10:1},onClick:()=>a(g),onDoubleClick:S=>A(g,S),children:[o.jsx("div",{className:"absolute -top-8 left-0 text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap",children:g.name}),g.type==="finish"&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:o.jsx(vu,{className:"w-6 h-6 text-white"})}),g.type==="coin"&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white font-bold",children:"$"})]},g.id)),o.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[Array.from({length:21},(g,S)=>o.jsx("div",{className:"absolute top-0 bottom-0 border-l border-white border-opacity-20",style:{left:`${S*5}%`}},`v-${S}`)),Array.from({length:21},(g,S)=>o.jsx("div",{className:"absolute left-0 right-0 border-t border-white border-opacity-20",style:{top:`${S*5}%`}},`h-${S}`))]})]})})]}),o.jsx(R0,{selectedObject:i,onObjectUpdate:v,onObjectDelete:k})]})},V0=({onTemplateSelect:e,onNewProject:t})=>{const[n,r]=q.useState(null),[l,i]=q.useState(!1),[a,s]=q.useState(""),[c,u]=q.useState("2D"),x=[{id:"racing",name:"Racing Game",type:"3D",description:"Fast-paced racing with realistic physics and multiple tracks",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(hu,{className:"w-6 h-6"}),color:"bg-red-500",controls:"keyboard"},{id:"puzzle",name:"Puzzle Game",type:"2D",description:"Brain-teasing puzzle challenges with multiple levels",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(g0,{className:"w-6 h-6"}),color:"bg-green-500",controls:"mouse"},{id:"adventure",name:"Adventure Game",type:"3D",description:"Epic adventure with exploration and quests",thumbnail:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBCQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEIQAAIBAwIDBgQCBwUHBQAAAAECAwAEERIhBTFBBhMiUWFxFDKBkVKhFSNCscHR8BYzQ1PhByRygpKi8VRVYmOT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAgIBBQEAAwEAAAAAAAAAAAECERIDEyExQVFCYXEi/9oADAMBAAIRAxEAPwDdIufm2qvvLRnm72N9/SmpxIzJ+qGr2p0VwNe/hPkaaTRmw607uOPOoh/eqiSza4uHllChyegqxldGTbn6VBEzh85zTQiFLPRjIohLYHmKJjZWIDVJK4QAItDbAbFDGowVBqCVIIZNQ3Pqc1PCCc6utNltgckikBFKbeUAMiH6VX3Niol1QxaQat7e3Rd9P3ooKDzAoyoVFfZ27JEA6n3otsKgABBonWoGDQ88QlXAcr7UrtjoGdGIb5ifMdKntw6oA5J96YsbQxnLE/SoxconPJpgGFQVJPShy4D7U34xcYAqKWXVjQBmlQB0biiBLtQaRSCIOoz5inRFzzqWAWdEnzCuGBVGpBXY/Wp/CRg86QwUPoG60NcXG/Kj3XYqKBltyd6aEyDvNXLanxqCCSTmudyy8xtXdJ6VRPJ3cciTTlc+VMUYqVV1cqBoeCK4wqMg+dOVs0hnQc04EjrTQK6KljJVanaqiFInekBJqpaqYCOtd8NAGO4ff2ix90rhX5U/DB2YMOfMtmsGszM+qjILm4XZZWWu7aMVqm4jlPJ22HKpPjIU3aMk1kYbm6/zWoyC8KxkSjUc0npDWojW295FINtIo6CSI4rGx30URB08/pR9vxOM4AkZf+LlWb0mWpo0jkRt+r3B509SSMnlVGt+v41b2oiO9zt+zWeDHZZKcA0i56UyKZNGcge9BXNzLBKCFBRvlIpJWwDiWbnSAwaDS6kkbdcDG9S96pGxxTcWhWGKeh61DNZJJlgcEVB3zA/NtUgmB5P70qGL4GIp4nw1TQ2aJg6w1APchH3Oamh4iM4FJpgWsZ6VFIWibKhcetCLfKpyxxXJuJ2+xLZHlQkxnYbqRi76gMHliiVvFABkOT51mr3iCxSFIXylMgvASFkZyDyC1WDA0c3Eog2EQknlXGuJ3K6E58xVVrjt4ZJmDeFS2GG4wK884l2q4vczJPbXjQo3iWJCF0jyz501CxXR6+rxlwpc/UDFcuodBDJ12rH9iOPnjcTrcg/ERgEMcfrR7DqNs+4rcJpaNQ2nA86zfAFdnG3lTo5KPltkm3TpQwVQcOq07Ekc100CiQi6NemoKBnRXa5SoGPFNNIGuE71ICrlItXM0AeMQrVhDQaRt83TyqZdVepRxJhyvUqttQsZap1J6UqHZMoqeML7UOrNjcCpENKirDECAZ1ZohHVRnGaEjUtsBvU6wOemKhoaYWtwuOeD5U8zsV3bIoFoHXcmurA55An60sUPJhkdzgYqdbuP8OTVf3Ei8xinorLUuKHkWqXWoYxiuGT86CUuOmakVm6iowKUiV+7G8hpSXNqqgqdx0pjqJFwc+9V0/D3we7c79DRiVkW6XsM0LKdIPTNVt64AACgjHMUMvDbk8yBU6cKlZfFKaEqHaAXkrttP3b5oibg8gz3bZwKrjHJExUg7Ux2XUs8V7ZT20wLCWMoVPI5H5V59xDiZ4JCtr8CkdwqBFZseHpnatckogjaWXZF8RPpWCPApuKvxC8iuNFosjMnenO3M4+tZtDN5/s34aghN+8mJwGUxbDBbBLfUjbPlXoUbZ3rxDs7xe8t72NLWZjIw7pgBlWHPf23/OvVuzXFPjbJhcACeJtL4Gx8jWTt8jZfa9BOryqI6ddRyy6mHlSOGTBbxdPWiiQhZVSo9cZfSA1AyFl5b0RE6Rqp1UgCXjwmpahJpwus+HRkVGbiF5QmhlOcZpoYs1wvUrWw/YbnUEkLKd/vQAi460ta1C8ZByeVNwv46KA8vSNqnSOpkh33FTLD6V6hwESR71KYSm/nUyQjFS6CQBg7UrKBlWiYii41DNOWPHMZ9KJHd6QO6GfPNJsDsUsYGy71OsynaoVKruowaf3rdCfyqGikyVZEzsT9s08NnzP5UMZHO2aaS3WlQ8gvVj0rneKPmYfahkABydJ9CDT3kJXSIYx6hADRQsiQ3SjYHP0rnxQocIRipPEAPCv2BopBkSfEUhOc0wMw/ZX/pH8qcctuQPoMUUGRIJmPKnpM2cZqJcry/dUhdyN9P0pUgyD4llkUadBB8zipTw5GXMvdk+hFVaMwPM/eiUkOMZOBUOL8LjIp+2cEdvwc90CrO4UkLkY5/wNYlbuJOHx2SeBTnvD5+lWH+0rixW4h4dDIw0qJZcAEHVsB77E/asbbW15PCUS2upI+jIp+u9YOLvs6IzVdGgXh8dsqyWkpLqCwHlgb/xrYdiuKQ/ErbySr8RNBkx58QZeeR96wfZWwur7tBb2t4kkVvuXVtSghRnHvn+Nd7SrcWHba8lgQxzCdZ4QhxlcA5HnyIpRg12yp6kWuEe297q6inDT+Kqu1uTPBFKFKiRA4HlkZolS7fKrH2FXiYWHppqcrE3Ufaq5RN+FvtU6RTH5lA9zUOJSYZldI+Xn5UNKiP8Ai501hODo55604W1wP2wCaVFWRGd49jG23Jgc0SlyWi1DBYDlUTWlywI75TnpvTDa3UQwpH/KaVBZHHfyyXIiaIAEYINH91H+FPvVPcJPq1lHB6motU3m33qsRZFaOGI7Z0gV0cLj86aeKQRjMlzCo57uKjHaPhuguLpCAOlabrQbcR7WIXdTSFq/lWf4h/tAs4yI7GPW56yDAqvXt1fGVQsccgwAQF5VW8zNwRshAfLFPW2Y+VQdnu0CcRjPxEPdPyyRsavxLCBk6QPMmlv2G0VYs3PSkbN1GSPzq5VoyuRgj0NOynIqDTWtYbRTxWYY+LI9ql/R6HlJpPtVmUj5lRj0rohiP7OPXND1GG2VX6OJ5SIab8Djp9aue6XGNZ9qQgXPzn70bobZTraL+IU42aj9oVcG2iI3YimfAqPlk+9G6G2VPwqj1rvww86sjZt+IUjaOOtGYsCs+G8jSFr61YNbODypC3byNPMWAELfHOuTd3BE00zBYkUszHYAAZJ+1HG3k6A4rPdujLb9m7jxaBKyxE+hPKjKwwMDaWP9pu0E08wZoEkaeaQ7FV6L9tI+laC2fRGoRtKqCAqjlVzwrhP6O7GTNashkntmmeUjBZmXP5bCsBK3GICwmuYgCNgi41ZrOTVm+nwjWWdyttLFKzIdBycnodj+WaI7fcPWfhMPEoCNVuQ+pVydB9fLkfasynDoO6HfHXIwwSW3racLHfdjpFvyfh44XheQ/sxqMD/txQuCZci7G3p4jwKCUHxxs0bZ9DWgCuebY9qwv+y+7EsN3aRDQVKuE/jW4JkzyNUQEJJKvzSuacZTlTqb70GS9cYuPOppMLosVvdPMk1Kt8p+YVTEyedLL+dDgh5l2J0k3GfaunuzzyPrVGTKvImlrn6M32qdsamXf6ojSeR61H3UHmapmNyMZ1b8tjvXMXX4W+xow/Y8jxKS44bqyYJ2I3KtId6Khv8AhSjCWkeeqDJFSv2fdSWD27LjSyhfLqDRtlwIworSvA4JAGkYPsaxbVFqJV3MlhPBot4YlbO5dOQq27NwOCZRLbpbq5QeAkOfUY2G9dNnFb3HeLbaRjBKjWNz0p9rbRTf3F7oXJJSRDv/ACPKtIuFUJp2XJjuLdu84d8LdFgdSIMFsdQOX2of9L3axPJJZKF1DwkYH35dDVe0V1azxTrcpGAQw0Rk4/r+NGXHFYrmzxxOYOwbJ7tTGxHln0+vsalxihpmtscd13kUTW8oUEo/Lccvz/hzohL2eNispXPtWf4X2hhNutta3TGNFKkSHc+WPTl9qsrW/huUSMuZJANmJxpJ8iP51jLh8GipltDxKJl1A59j/CiPitsr++q2NUjmUGIMG56sbj86guI5oA7R28iJpJAjcke/Xf0xTjqtdicS3NyT1x1rouDkDWM+9Z637QWsh7kzr3vId5GQR74wD9qek/E4ZyZJra4gG/6tCr7+m9bbkWRRo0uT+LNTLcE7ZrKHj8eWAtLslTuWix+XWh4+1HiCy2Fwn/2SRsFz12G/lRnFhTNwkpIz0qTvgOdZaHjkjsjQtCurYK6nJ+m1Nn7QXwlRLThwlYnDl59I+h3oTT6CjWd7nypazjpVJZ8UkKA3Ns0cm+0b95/rTX7QRmN3hgabRsQowc+R22qqAvdedts++KruNcOh4vZG1uY3AV1kRlzlXU5B+9ZHiPajirOY44Vt1zjMal2H3H7qZbcZ4sxzbQTEnfxlnU+4zt/W1DpeiVtmi4pnh3Zi6SVmkMduw1FSMkjavM7m+tblF0k94BqA5YrU9ouI3V5weZ70XNriMgxg4jf0558vMeledhT8T4Q2pVJUjyPP86cFfINtBkV0chi+W5k7Zr0rsoYuPdizZXPeiIs8U2di2+f3ECvIAn+7vIjEOXI0DfNeu8KReE8KgiiuLWGFVyxKnLMQNRJJ5k+QxT1JJLkmF+EvYvsvF2fvOIXZfVLcSuI48+FI9R0j1rXmUAbxpWOPG3bCw3byhjjEMQyPqf5UjfXLoRpuR0JllwG+4A/KsHq/DTH6bAugIBiXJ9KjlltF/vgo/wCasvHMwiZyYo48ZwkhH2xQgu7Z42YXcKtHu66mA+u2D96W430GK9NKOJ8OluDBapJcSrzWBS2KpONcfu7LPwvCXlXGC3iyD5EEZ/hQT8RiM+kXMKt+z8MmpnHPGcDFK74hHbxRG5nNtbMMCWPxSE89xz+opOc30GMQjhvH+LsdV5w8W0ROCzMq/wAc8qOuu0AhmZhJbiAD5pGx9jmsLJxWyTAL3V5IScNOpGN/L6VWXPFhK6pfWS3ESb4DlB9xvVJajYriegDtTNc3GOHiOUE6RKGVY8+WSefpRH9oOI+cX3rzu/7SNJZJb8Ps+4eNCsfcII+7XfA5nPM1ltV/+KT86b02/RZI1Y7R2zNoW2BAJzn5sbbflRk13w+6ijMkbxEH5k2+tDns9IiCdLcygbs6aTg+oG9Ry8PiVRE7qWGMlTnGepqMY+Fq12ajh3ELG3t3jSXWjkHTK2cEdRT7qW0kbvFiiSRhkbAg1jH4YsMzNHOTHnn1qy4da34mAH65AQoJ+bHt6cqTTXo7LwCTuyxgt9IYYBOR9BU8lva3CYuYIl1EHKj+sVWF74XISOFGDscgbBTnlTb27urJ5I7pWtWXpzH9GpakVwGrwfh6ONNk6MF8PdvnJ6H23NT2NlaQyhTFpPy7mh7GY3cYCNl9PLOMH0NW9hZTTQq13ErJkjvCd1Od6jn0pUh8UUfed3nu2XIxnIPlTFe+C91KkkY14WVDqDD1/lUXE17tMWsgkaNtSA88fxp6cdluYU1IrAKcrkBgwpJWBDd8Jgvou+lto2kU84+vv5UJLDLZxs8NvOQpy0TNj7VdR3aMx1wTReEHWvWnfEG7t3WGRZSpwxK8/cUxcFRa30bws7Cez8nY5x9KniTic+m4sL0SZBUrzUkVOtpEzALZ+I7EBufnsaj4dbBpJIoYpItTE6HygZsb496qKEySF7gy6eIWMZcf4sYBIPn6VLJbxuzY75yMFw+49D7U8wSFQkxGS2wZvEv1oiO1fvPGZIyBjWp1DH0p5Y9CodbrI4UrIsmx5Y8HnQ9xGLiNu8uWttTECQAZpdxf2ksktpcJN4RkMmkkjPWoFmv+6b462ijJJwBlseecVpu8cixIFh+AgBiuGmXfUzEsW+9Nh4srsY0gfT+JNvpyrtrML12jjhKlTyTO/wBTUl3aoLZ4IJFj1HfSMkHI323qovTk7YnF+CmjS5I/3WNlYbNKuooNzvtttWA4/wAGfhSLcQ3PeJI7DR8ugHkPWtzYWZiiEkXxjOj6Tligb7/1tVJ2sivrqBUvo44o5ZgVdCGOf/FaxwTpMhptcmS7P20T3zSTSpEkRXRrOAzFsge21aqOw4jc3oPEY8IzZI2J1Y5E9BvyrLXfDY4IHgnuGKt4lyPwhjuPLetr2b4ldcX4bDPG/wDv0LaJNWCJQBkHPQ8vrmtLohJUWVrZ3VvBpjIiSU/IEwduXSnjglvHL3t5O8hdtK/ESEqOvKrGa8mC6Ls24u5yAiuu+BzwAdqEZ7PisBtCbmCQbs0anBHlms3+0WuCsvTaW106rxZExle7UZ3HPGeVVXEJ7ZoVEaCZzvod+vsKD4pwIwzy/D3Mlyn+HqGWYehHP2qSx7NPBomuJ5LQtg+IYJqZQS5QWyITNA0feI1vM4P91gYHvzqe9vZTGifFrIhwW746m3I3H0o5OGw8QmFtvMwJIkQ7j0oux7PwWbZmeHWuwBUlqnNUGJkV4FcvI4LqkBySV3z9Kn4dYW9mzI9uzycsspOmtjxLi/CVaO3s7VZrpwAe5jyfSq+aO4EHe3EycPjbnrbL49qmWo2qRSgjKz9nLgzM0Fyqs52DeHA6VL/Yni//AKm3/wD0q2l4hwS0kUm5kvZCwKufpv8AnXf7YcM/yn+1ClOiWokPDJ57nSndOuvO7bqd/Ojjw9II2ju4zHKxyGHNh5c9qffcNu7OQHhfErd1YHZiRjkRt6+mKsuFWupHe/nikkQatIBxt6Eb1NLpGhnbqxiaTNqx1g4CgnGOm2MH70ra14iLmJYBJpJ8OVwc4G2f+LP5Vs7KWCyDSJdlEcHwRx5Uc+mduZoeK7uZJWS3u45M/MH2JONiPWk4sZRrcSwHvJoxqDaXdGBwc+m/1ouS4tLs6p21ZIAGctj1z5c6bewPazPNc2wZmGS6JnJ9x/GmrFZTjwqYmwdD6Tzx1rOSaK7D4OHRWoFxayajjA8AyudiMciDmraAhJE+JzGjMwLaueeWr19aoYkuIzpkTvImYAEHntzqeZuICMgRyKF8PjOVahTpDonvIktbjKXJbW36ssg3HVT6+oqOOa3cnvoAj5we7GNX1+1SWF0AWhukVSuAqkbD1FF3ln3xHxLKI1VijhtOCcdOvKpAAuZ7gPlJl0Rg6w+dTDG2MbZ59am+FFxAsjTJHM/JwN2/4umPrQ0aXdqFkh7uaLG+H3GaaDrDycPjYSr/AIYb5fYGrT8BkloL1tcchBQHSCRkcvvj/WoL2O7acXHcxvsEGmTBXO5OD/p99qEl4vxc60nt5CWbOtF5dBy+tFJxn4q3D3tszAAEBfCdiP5VXKJJ7hpMKGjjuSxBEXxGGFdhupba8VIu9UMfCjMGA+tATS3c8Pe8OdQF2CPGKjubW8ljEksypNGRqKAgfcUdgWd3gETLfMSwBETtjTv5j6cxXbVlT5715ZOZBkGkeW+MmqteHyyxAcQuI5WVcIxPM5xp+1Pnmls7Vo7Z1kCjC6FGotv/AFmjFPsTZcNdzpGsksjWhPIE68rnmMbYNCw8cMyDwXEZwVMrMoB357/SspNxPiU0JuJoiCwIRgoLYHQnmKgW5ubyLv5BL3KeHU5GF5428t6eCJyZpT2kZJvh40YSn5GaQNkeZOcCqHtpJe/AWnezbySk6F54xz5UG/FIYrsSW6qznZn7vOPbO32p3aXiv6Rtbe3VyQjFwRseXWtoaVPIzc/CusuF8T4ujSWUctwYV8aoMkZ6eufLnVh2F4qqX09hLECs6g4cH5lOwx06j7VZ9n+CXZ4XEVvZLNJlbUYtWXYbgnHlt6ihr/svfQ8VVIiollDP8QPECwwdWccznO4rVtIFFlvxpp471JJWj1qxbw76RjbAPTltnYjrUsa9oZyZ7QW8cEjZaUoAc886epozhPDJLy0S64tbRzcQUacTNpVgDsccj61aW9i9xeKALK3KLvgnfptnlS3I+DUGuWU3Dp4rq2gju2ia6iYiJ0V2LkeYKjPofSouMcMv+JSFe8+HiVsL3pGF8ztWtuOFRRMHlu/iVVQrO37PuCcVWPYwXF0XuHnCk5jLyDSxHkBsDUTcn0ikkAWScP4NCWkl72X9t9fXHQdKe15w2JFecuglyViPhZ/XfmPY0y54Hby6EM1+QTpVVx4SeexIP2pz9mOHiCSJg0gJAXwKCPQnOQc5+9YtL8mVb8Kq+4wZVMfB0CAAPhUXGDyyRv8AnWSvo+M3oUvE0kbgBRkknf8AcDXo6WENvJpthGoBCsNWNeBzpTrOrAxmFteeRBwQNuYqVqV0DjfZ5Rc2XFdP62ymjCnSuqMg89sZ6Zof9FcR/wDRzV6u01zqY90QNPhYKMas+fr/AAqL4zjP/t0P/d/KtFrSJ20V6sYjII2OpUEiAnO3lRcXEgG1MoGdmBO1ZaO5uYzKDqZyvUdTRkbgr3rlhJhRjG2c1lTTHZr1W2htu95hjyU4001bmwnjWVYSSMtnr9cVQSXc2oqZk0HOonqPKiOH8SFqVfQoCbtnbUM7Cq3CuDW2jWjQl44tDsMMoGc+uKrEu7DMncyK69OjL9DVdLfSTXb3VswjIGCAcA121urWeQ2/EUjbGF71Rviqc0xUWFvJZ3OO8Zu9TmVO2BijmHdRoRfEZ5qQCKop+I2PCHukEiIo2j04JORWS4x2nkmuC9vIxVTlAf2acYt9Eyml6eifGcMfR8aYyyts0eRqFOk4nYGVoZXHw2d2Z919RXjzcQllcmSUgbnnRMPEO7XxMZMj9rfetFp/SN1noCcatLZpIXBNwvIqPC4GetOuO0fCbRRKsxWVlGoBd68/+OknBjXKJzzT0tIyGZ8HTvkDeq2Idi3pGwk7Y2suTBFKwCnJG2/lS/tMh8U8GVJ/DyFZ6O2jtjEWZI0YA+Lm1EyXIREHdtIxbQPTH9ClLS016Gc2XaceN1II7IdyDyCgDPrRkPErWaJkvyA+cL4f6zVHwqK4mnOqMKoB+XHL0rQWnCTMwEiRlEIwQw86wlSfCNo2Cx2trKuXntVhnY92WYg/6dahi0pEGljCa9lAOdPsat7vgcMHdPK8bBTgALsCcZ/dQ8bWUo0r3WrYFBtk1Lcfg+foNaWETwyEOmDgjVk7+1EpwMNG5knU5YFQqEAKehou2urSzyFEYXBJGPzpDjlsVEjEiILgkn2GaHK+h/0CXgllbM2qNsMCW28ODUv9neGuuhrRFyuA/UCjX4rbFMI2pWGxPMUHc3ztcBYGYk4Yb+EYqMpj/wA/A421rBapbBhDCoDeY286ZPxBLfwqqMowFx5Hlg0IYzNaOJ3V3bbEe+3nmu20KxM4YKyjDFeoHQfSk39YHLziVxJJiK3cldnboBQqcKe+uDNcM6kpnVGuBkedXEkDyKJYSoA3Kt5e1cUyGIL37qpbIYdPT2pxnQNWOtbGEFVvOIXEsMY8MJ2AFGzcRtYphBaxqE2bP4s/xquLSPI8bmVwIwC67cvX3roitoou87+N5CuMNjpTeq2LFAnEuKlnMkUZyCcgcwemKBsWurqTSokVTnLEZIYjmPvR7XlvBayTzIv/AMBnmaHTtJbalZB4NJGtFOU96STYWkSQ8MnXUJXiTScImc5Axv8AUVy4toe8ZzcKkUZB0Acj5VT8S4/ctLKLZFcRDEhkHQ+VUtzxZXSEs+XkBJ0HYjH/AIqttkvUSNtacV7mNu6hYKoLICATj+v30Z+l5/xmvJbXic5vHleViCNGc7460X/aKT/Ml/6hVbZG4XdyoEL45+Hf61HNO7SaMKMDGQN6VKtaBlBdX06s51Z0nG4oSXiFy7SapMjOMe3KlSqlFGLbGfpG6z/fNy5VMOJXTf4mM88daVKrSRNsFld5MtJIzHPWuyxKmnGdxSpVskiWcSNTkEdKJjgjONjypUqCkFR2yNsdWPQ1HNM8cE4Q4wBSpVjNjJbHM47yZi5AUgNyFaGGGNFRwgJIVt/P+hXaVZS7NUGQTSSTJGp7tSdxGAKsO0cslnaK8DlW2pUqElY30ZtOJ3lzIY5J306icBjzq+ZVhhQKqtiT9oc80qVY6nZcAO+GkF1OCo5YGKqJVMl/JC0jd2GUgDkM8xXKVEOxsv8AgdpGERyXbxaMMcjB/wDNXdxaRxIVhLRr3Z2U8qVKpvk08O2SAHSd/wBUu551JKqxMSFBKtgZzyNKlUSBCTeTT0XBHpTFuJDO8ZxpLgYx60qVSxDbueSFWVGwNAIHlmqwQRzXIV18OknA6UqVVDsTC+GWFvJdrbTKZY9/nOSMdayHFLZLeW5jjZwqhttXPx0qVdaRnIpbqeRbYXSNpkmOlwORAOKAuWzEuAF0nSNORgUqVWjGQ21wZoVZQwckMD12NQ6I/wDKX86VKtEiD//Z=400",icon:o.jsx(j0,{className:"w-6 h-6"}),color:"bg-purple-500",controls:"keyboard"},{id:"shooter",name:"Action Shooter",type:"3D",description:"Intense action-packed shooter with enemies and power-ups",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(Au,{className:"w-4 h-4"}),color:"bg-orange-500",controls:"keyboard"},{id:"platformer",name:"Platformer",type:"2D",description:"Classic jump and run platformer with collectibles",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(Oo,{className:"w-6 h-6"}),color:"bg-yellow-500",controls:"keyboard"},{id:"strategy",name:"Strategy Game",type:"3D",description:"Strategic gameplay with resource management and tactics",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(t0,{className:"w-6 h-6"}),color:"bg-blue-500",controls:"mouse"},{id:"arcade",name:"Arcade Game",type:"2D",description:"Retro-style arcade action with high scores",thumbnail:"data:image/jpeg;base64,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=400",icon:o.jsx(mu,{className:"w-6 h-6"}),color:"bg-pink-500",controls:"keyboard"},{id:"flappy-bird",name:"Flappy Bird",type:"2D",description:"Navigate through pipes by tapping to fly",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(_p,{className:"w-6 h-6"}),color:"bg-sky-500",controls:"keyboard"},{id:"speed-runner",name:"Speed Runner",type:"2D",description:"Fast-paced running game with obstacles and time challenges",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(E0,{className:"w-6 h-6"}),color:"bg-emerald-500",controls:"keyboard"},{id:"whack-mole",name:"Whack-the-Mole",type:"2D",description:"Classic arcade game - whack moles as they pop up",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(o0,{className:"w-6 h-6"}),color:"bg-amber-500",controls:"mouse"},{id:"match-3",name:"Simple Match-3",type:"2D",description:"Match three or more gems to score points",thumbnail:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUWGB0aGRgYGB8dIBsgGx4eHSAgIB0gICggHSAlIh4dITEhJSkrLi4uIB8zODMuNygtLisBCgoKDg0OGxAQGzMlICUtLy0uLy0vODcyLSsvLS8tLS01LS0vLi0tLS0tLy01LS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgAEBwMCCAH/xABMEAABAwIEBAIFCQUGBAMJAAABAgMRAAQFEiExBkFRYRMiB0JxgZEUIzJSYqGxwdEWM1Th8Bc0U3KS0hWistM1Y/EkJUNzgoOzwuL/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMBEAAgIBBAAEBAUFAQEAAAAAAQIAAxEEEiExE0FRYSJxgeEFMrHB8BQjkaHx0TP/2gAMAwEAAhEDEQA/AMNqVKO8KcNOXrkDytp/eOckjoOqj0rpDMFGTAVStPxvgG3dZK7AnxEaFBUSFxvvqFHccjyilfgnhtF4+408VoyIJ8sAyFAQZB61FrCtSzdStVgt/LFipWt/2X2v+K//AKkf7KU8e4Sbt7ploOKLbpI1jMMvfY79KBTqq7X2L3DMhUZMUKlOdzwcgLbyKWUEws6SBB1mI5Abc6G8TYAi3SlTa1KBMEKg7gncR0p5tO6gkwAsUnEXqlajg/okLlulTzxaeUQcoAUEp6HmVRroYG2tAOPuBlWBDjZLlurQKMZkHoqNNeSgO2nMMJE2pTbhnCzT1ulzOsLUkmBBEyRtE/fXtnhFBYC1qWh3KSUmIB15RP30cadzB+IsT6lMnC+ANXKFKWpSSFQAkjpPMGrmGcIJV4njFxGVZCSIGZI56g1C0OwBHnJNiiJ9SjGG4Sly4cZUowjNqIk5VR3osOGrcnL4q56Zkz+FD2mOVaSy1dy9fOKNSr+MWAaeLaZUNI66gdKO2HCgLR8QkOK2j1Pb170J3CdxW0io4aKdSrF7aLaWULEEff3HUVo2DeiVbtsFuulp5ZBCYkJTzzcyojXQ6bc9L5kg5mY1KcvSBwMrDyHG1Fy3UYCjGZKo2VEbwSCB29tbgzhM3ZLrp8O2RqtZ0zR6oP4nl7a4DMqzBRkxWqU38acJBgC5tjntV6gjUtzyPOOhPsOu4LBMHcuFpASoozALUB9EH+Vc3w9yaz4n5YNqU58QcF+GhJtw64oqggwYEb6Ac6pcDcOIvXltuqWkJTPliZnuD3oQvQoX8oVqmVtpizUrXv7LbT/Ff/1I/wBlZzxVhKba7ct2ypSUlMZoJOZKVcgOZ6VWrU12nCyGQryYHqU4YZwkC0S9IWoaR6nt6ntSziFgtlZQsa8o2I6iiLYrHAgVdWOBKtSm7h3g/wAZJU/4jegKYgTPtBoVxFgS7ZxUJX4QICVq5yJ3Hv8AhVRchbaDzGDS4XcRxA1SjfD2Al851yGxz5q7D8zXbiPh/wAL5xoEt8xuU/qO9W8Rd23zi/iLu2xeqU9cF8FNXbZW644NAQEQN53kGdu1Mf8AZdaf4r/+pH+ygPrKkYqTDitiMzIqlEDhalXC2W5OVakyeQBIk0xv8Jt+FCSfEGuYnQ9o5CjNaq4zAPYqnBiZUro+ypCilQIUNCDXOiS8lPfAHFLbafkdyAGVk5V7QVbhREGD9blz02RK72dqp1YQgST93c9q7dt5g7EV1w02BduzhqnnQ4pbjv0Qo6IQNRIGhAM67n4kiOB8XFxfvOGASzBVABXC06nbX743pYxbBnwzo8p1KQMyTuABy5lI6cqocLYA5eOKQ0tKFITmlU9QNIB11oV7pbURnAlNKmG3ZyZu/ip+sPiKzn0hWyXrq1QowlRWCQR9nY7VX/s6vf4pH+pz9KV+KMFftVJQ8sLBnKQokaRO+3KkNJVWloYPn2j1jMVxjEdmCm3S2yCVJJy5lKEyrMrXSOv3UscZ4aG/nErUQpWqSdAYOojbb76v4HwC/c25ccdLRUJbQqTm7q18oPLQ9YpRxK3daWpp4KSpBgpUdj+B02I3Brfsv3Lt2/KIV7S3B585vnCGPWarJotOZUNhLZS4qVJPRR6c52joBAWfS9iLBa8MLIc28pkHqmPvJERoNdqzjAcHcezKzFtBBEj1u0SJHWqWK2bjS8jhJgQkzIKeUdu3Kkg65x5wwcE4jhwphyG2k3AUorUkykqGXfpE8qsX7CLxhLwWptWUlMEffzO3albhXA3rt3I2SlA1WvWEj8yeQ/KTXbirht6wWBmKmlfQcGgPYjkr8eVOC8BMbeIEgb8buZY4MwttyXVLUlSFiACADEHURrTEpbd6lxtRU34bmUlKhMp6SNqWOFeE3rxC1tOoQEqynMVCdJ5A0aHoyuhJFw1J31Xr/wAtLj8Qpq+A/WGNDMcwJw63ku3UkzlCxJ5woCaLowgC58fxOZOWOojefyoFgvDr1xdOW6VpS43mKlEmPKoJOoE7mmP+zS7/AIhv4r/20F9TUhwxmjp7wqBSmcHPfnF/Gbzwb3xAAqAnQ/5R8D3prs75DqPESfLznl2NJWKYI41dfJlqSVykZpJHmAI3E86vt8MPgFIdSArca6/dUPULQGEUt0tmqYuq+cqcTYsl9QSkDKiYVzP8q3HhXG7U2TSkPeRASglxUqCtoUepPurA8XwpVuUhRScwMRPL21Z4fwV26DiUOBKUlJIUTBJmNAOUGrfDWvPQlRQynw8czQPTZiLCktMhZLyVZilKvKEkesNp2j31T4dxNrELP/h7ivBcSkBBToDG0j1u45+2DWe4rbrbeWhasykmCqSZ951olZ4C8GPlaVpSEgqAk5vKSOkcqLXlvywNyZ4PBH6xzxPEUYTafI0rD9w4DnnVKAoR9E8o2B33PSlzgfG0s/MlJJcWNZgDl0qirAXnWFXanEmQpZknMYJnlE6UGtGFrWEoBKjtH9aVW6vcuG6ltOfCO4HnzmsY9jqLVCVkZ8yogHtNAPRM6PlLyjpKefcmlvHMDdZSlZUXExqfqn9O9VsFsXHlFLa8kCSZI/Ck006msqp7842bze42j5T6D8ZP1h8RWNcZXoaxV1wQYKIO/wD8NFcv2Zuf8cf6lfpS9iVopp1SFEFQiSOcgHn7aijR+ESSc5GJOorsC/GuBNGs8QQ4jOCAAJVJ2/l3pOxzHQ86iB822qQY1Oup7Dt8exfAuA7l+1U4V+HmEtNq9fnr9UGNN+u1J11brbWpC0lKkmCDuCKOmnCHMzalQMcHJE1PhzGkvogDKEgCSd40pc46x1K5tgjVCwSqdDCdvv60HwDA3rkHw3AgJ6k/lQ3FbFTDqmlEEpOpG2oB5+2gpRWLSQfpNSy+w1DI78428O40lSQ2qBGieXu/Q104jxwMpLaYU4RtuEg9f0/ojeE+Cru9Qp1rKhABAUvQLI5J066TsPdX5xRwPd2bSX3oWlX0yklWQk6BRI59dp06SX+nXdmZngDdmO/oyWAwZIHlTv7V05h5P1h8RWGYJgtw+mUO5AIgFSuc9PZXSx4fuH86fGACTBzKUZ1I6dqFZ+FWWNuz37RsahVGJ7Yxbwrl4ACC6ufteY8+vSmVzEGw34pV5Ov5R17VnRtleIWwJUFFOnUGjt5w48Gs2fOoalA9nLqfxq1tS5GTiJWohbJOMwVjOIl9zOQANgO3c8zVCpUpkAAYEYAAGBJTVwhdtAFuMrh1n63b3dKVa62rSlLSlAJUT5Y3ntVbEDLgyHTeMTR7m6DQzE+zqTXj0bvoXevqQgJlrUDac6dulKeKsXhTLzagANTHIb7bdzVDCcRfYXLC1JWry+XUmTtHPWKVGn3VkA8mVopNLZafQ1Z/xpeMs3tqu4b8RsZ5HTVMKj1o3jnQ7wOIJjK/OXNsjbsdifs79qTcYxS4fUBcLKlIkeYAEHmDoDOnOhabRvVYHJEatsDqVms43htxcOMXFpcpDZMlX1U7ynkpJ1BGhmAdJha9JeK2zikJyBbiIhYMEpnUH7O8c5MjSZBYDdYghgoZSpTK5MHbSQY1ka7jnFLt3nzq8Sc86zvNaniKeBM9NK6MCeh17zQcNum3GwW9EjTL9XtFC+KLxrJ4ahmVy6pPb8//AEoFgTVzKlW6VK5KjbWqeItOJWQ6kpV0NJpSBZ3LrpirbvKaZwtdIucPVb2hSw+hMqQdc5+sTuQrry0B0iev90w0tYioOqXJDZMlAOwzDUkHUEbHQaCazLBnHkvIUwSHAZSR+fbrOkVc4purlx6bg+bcR9E9x/Wm1Obx15wZo+PAPHfvH70SR4D8THi6TvGUb0+VhPD11fISr5IpYST5ssRMd+1X7bHMWczZHHVZTlVonQjltWXd+HWWWFx5zRW5VGDDPAv/AIvd/wD3v/yprT6wLC7m7FwtbJWHzmzwBOp80jbeiqcexUuFoOO5wJKYTMaa7d6tfoLLWDD5TkuVRgy1xf8A+Me9v/pFesWtH1vIU2YQAMwzRzM6eyKWMUu7jxyt8q8YRJIE6ARtptFFrdjE1+EUodIfnwzlHmjfloOesaa0/WuxAp8oxTqKwhVs8nPEnG+7XsV+VO2CYgy6mGiDlCc0CIkfyNZZiN06tUOk5kEiFCCDzBEb6URw5i9ZnwgtOaJiNY239tC1FPijiWGoLXM6qSDDvH9+ypAaSQXEuDMI1+irn7xXvhRDqGUvOOj5OEK8kHTU67e0++lLE7V8EuPJVKjqoxqfd7KsYZcXT2W1aUpQV5QgREHUyeQ5k0fSgUjH8zEtUWdiWGP/ACNfESHHmC6w8Ax4ZlMEZoJnl7qE8GXDQlMQ4eZ5joOn9dqHYqu7tc1o6pSQBGXSCk8wY1B60JtkqK0hElRICY3mp1JFo9IsK9y4mlYhcobbUpyMsQQdZnlHOaWOEFJL7hSMqSNBMwJ2mqGPN3cJVcJUkDypnaf170Psbtxs/NqIKtNBM0vp0CDOcw+kX+nsDNHKys7gXKlrVLRKiBm6nTT2VQ+UMN4kVXCM6AU6TpOVME9R93XSoq0xUFaS28C2gLV5Rok7HbXnoNdD0NLFw+pxRWsyo7n7qYzG9TdXZV4a57zzNhxjDbu4u2H7d8G3j2eHG+nrE9d50OlKnpGxW2euW0oAUtsgOvclR6sbGOvuqrhbWLJYSyy074dwDkMakDeFT5RHMxI20ilJxlSVFCkkKBgpIggjSI3meVcTniZVVJVsny6+81vBL1pxADRBypAMCOUe+lzj/EGS34II8ULBIjllPOO4pfZ+W2qAUhbaFEAGBqTt3qrillcfvn0q8xHmVGpI0+4UmmiK2bj1NR9YGr2+c3b0evZrVALqVkAeVIhKRGmXt90zX76SLjLhz/zyWsycoJE559Qd1CRPLfvWK4W7fstKUyXENwSVDSBHm13A9leMR+W3DaVuham2wcs6JSNzA5U5sb0ieRCnCFvcKEpcCUADTmdT0HY/GmK+Kn0lNs6G1pV5lQRp5hG3X8Kz/DsSuE+RlahPJIH6d6uPuX1snMrO2FGJganU/rTK6qtVCHMGaWJ3CdsCukNOrCxK8xCl899x2686bysRmkREzyjrNZvaWzrypQlSlEkyOu5og63eLHyfIrTUpHsnfpzis63TM7bhB2VBmzmVceuW3HiptMDmfrHrHKh1dru1W0rI4kpUOR71xooXaMRhRgYElOnAdgytJcUAXUueU5iCNBymDrPKkuu9jdKacS4mCUmRO1UtQupAOIWpwjgkZmu3jKFpKVwQQRvGh3oNwDhyUYrlbZStKW80qVq3IHmTO5nT37igWMY5dln562LaHEkJWULSDmHInQ6a0s2F64w4l1pZQtBlKhy/UciDoaBpqGr/ADGH1OoSwDb/AJn1NWMce2qV4m0HmmgFznW2vRcfWgghSdAToT8K5q9Jl+UKWWhkUIKgFAA6Dyn1ems79qRL+9W8srWZJ+AHQdqaPIIiqkA5muWNq202ENgBAmBJO5JOpJO80mcdYe0gB1A86lAKIUTOh5T2FU8E4iuG2fDbZC0onXKokSSdYPc0Cv7ouuKcIAKjMCkqdO62Ek/eO3alHr2gc/pNVwewZZSfBAAVBMKKtY7k0G4yw5lTS3Y+cSN8x69JjmeVKeBcQuWoUlCUKCjJzTy9hqtjGJquHPEUAkxED2k8/bXJpnFu7Ml9Shq24+kauGLdoNBTZzKP0jzB6dgPv3q1jTLSmiHdANQeYPUfmOf3hIwzEVsLzJ25p5Ef1zrri+LKfOuieQohobxN2ZjGlt+cw1wdcPplLbYW0XBmXtHInfprTNcoLCFqtWwta15lDMTJO5309lI2B8QOWyVJQlKgozrMztyNdsO4mdZLhShBDiyszOhPLetau5VUAn7S7IScyYNdPpunFttZnDnzIPKVAnmNjAp3WyBmfS2DceHEZj0ByxMb86z6wxpbT630pSSvNIMx5jOmtWU8Sui4NxkTmKMpGsRprv2FRXcqjn1/hkuhJ4nUqddxBvxLdKnCtALKlQlW0AmdAR/R2r6MSIAER2HKvl7FcRU+6XVAJJjbsIpptfSdfIDKcyFBqQrMJLg2Gc7yOojlM81nOWJhVHEs+mZjLepV4SUZkA5wdXI0lQ5EbdxFccZvHm0N+CkmRr5c3IRSni+KO3LqnnlZlq37dAByA6UURxW4ABkRoI5/rUCPaW5UVgxIzjkS5xM4pVo0pYhRUkkRGuVU6cqY+HmBb4aq4sQHrlQhxR+kjqAnnl3jnvrAFIuLY4t9AQpKQAqdJ6EfnXrhjHXrN4LakyQFI5LHSOvQ1bIzFvxBhc2UOeu/PEergpvML8bEB4Skfuno8y9NCE8wrpz303oBwFh7KwpxwArQsZCVERp0mDQni7iB67ePigthBIS1r5Osj63U0JsbktOJcABKTIB7UK5S64BxA6X+0csPp6TXMUsGXkhL4BSDIlRTr7QRSr6KLYKxCQylwIBIUo6N9FDqrpv17gBjvEjl0lKFpQkJM+WekczVDDMQct3EutKKVpOhH4HtQNNU1a/EY3qbVsPwifUtYJc2pONKQbVv99+5CvJyIUTIEH6RGmpiOVdXvSpfHxIyJzpCUwPofaHVR76dtqS03KwvxAo55zZp1nqTzpmLT6pRsOXYVivphbKb9pYZQmUghST5nSD6w5EfRGmo5nYVGPSlep8MQghAggg+c/aM7DoPjtCpiOLuvvl91WdZUDrtpsAOQHSpHc6P2H5n2gLloISnKU6kbbGQaCcbPvZfDLYDAUnKvr5dOft5cqFX/E7jqEIKEBKVJOkycu3OueLcROXDaWlJQEpIOkzoCBz705ZcjIQD94BayDmM/DbzrjfhuNAMkEEk7ggzzEcvjXviNx1tlTdu0lTRQrOqZyzM8+lLP7TuBlTIQjKpJSSZnUQedQ8TueCpkIQEqBBJknzbxrUm9NuMn5yPDOc4hrgvDWSkrWPNAglRHMzzjkKa8UsmXkBLwBSDOqinWCNwR1NZPh10WlhQGY7RRXiLHn30pbdbDYkLHlUCdCOZ21PKsS3Tu1gIP2mtXqUWvaRz+s74C8tt9SWW8wC1wZ0A29+nem9SISXQgG4yTlk6mIiJrPcHxlVuZSkEyTrPMRVtvilwOl3IgqPtjYDaZ5da26b0RApMynQs2RKfELzq31F5AQuBKR0jTmaG1cxXEFXDhcWACQB5ZjQRzJqnSbnLEww6krQPR1wqhxPyt0B0JJyNCDKh9b8kn27b5/RrhbiN2ydzo1QdFonRQ/IjkahcZ5g7lZkIXuazhuKIvvlFpcMKGTRYIIGu0H1VDkee47ZzccJoRdKQl5LjIAUCk+YgkwCOR01Ox0jfQ/xT6QW3G8tvMqAzSCDtsew27+zfPGr5xLnihRzzM9fb27VNvK4B5i9FbgHHHtNHS2kJy5RliMsaR0jpShf4Anx0obcSErOxOqI1I+12+/rVx7ihJaGUEOEajp7DSu6+pSsxJneelJUVuM54l6a3GfKaLYWqWUhKBAHxJ6nvS3xXhbafnUEJJ+kj280/pXWx4oHhnxB84NjGiu56Gl6/vVOqKlGuprcOSf8As6qtw+T/ANn0MyPKPYPwoBx+kfIXtPV/MUEb9J9uAB4Lug+z+tDeJePmbm3cZS04krEAnLG46Gs2rS3CwEr5zVZ1xOfBeBpQlFznJK0EZY0GvX3UQ4nwNNwkKKikoBIgAz/UUmcOcQqt1+dTimwkgIB0BJ6Ex1+NW+IeKi8EhkuNgTm1iZjoaeam3xt2fr+0Kt1Xg7cfSMXoWw+3ceccWhSnmgCglMoSDpM/XnaeUkbGNRxTCLdbDza2QUOStaUJ8ylR9IQJK9NDvWG8C8YuYe4dCthZ+cb/AP2T0UPgRoeRDZiHpcKmXA0yUOlRCFEggJ6n7Xban5nxV4Fw63exFLTqHFtSrImN8uqfEA2TA1jnE6TW8uYYyoqKmkErR4aiUjzIHqnt2/SvnLA+In7W5+UoVKyTnzbLCjKgr2nX2wa0Vz0wpleW2VlyDJKhOfnm+z3Gum2unTop29m0zjKG2QsNpfACXBCh211joTrEVscVhFvxCtV8i8uCXFBYUqOg5DkABsKfP7Ubf/Be/wCX9azNdRZYwKjPEPUwA5gv0wj5y3/yL/EVf4awJNslRCyrxAkmQBET+tKvHXErd8ppTaFJyJIOaNZI6HtX5w7xWWQsPFx2cuXWcsTO59nwq/g2f04Ud+Y+sLTYi2Et/md+OMES3NwFklxyCmNBIJ/KivD+GN4faDEXU+M4oDwkp1SjNsVEaA9Ty2GppPxzGF3DijmX4ZVKUKOg5bbUT4P4pNqS06PEtnNFoOsToSAfvHOnaAyqA3cT1nxk7Ov1jHilg3itob1CQy+2CHCrRC8o18x00GyuWx5EAOCsYQ18ypKipxYgiIGka6zX7xjxUHwLe2Hh2reiUgRnjmR05ge867VuGOIG7ZCkrQpRUqdI6RzpqpgHBziLIjBCD9B6RkJbw1slWdYccnQDQx7dtKU+HcITdurBUUACdBO5olg3FobCw8HHCVSnUGB01NLbN8ttSlNrUgn6pj8KjUtvUBD9oekbWy4z+81i9w4OMFkmAUhMgdI/Ss5dwRIvfk2cxIGaNdUg7e+jV7xolTBQhLiXCkALkaHTWZmlI3rmfxM6s/1pM9N6zNNVYuc/z3j+ptrbGP4PSa1hWHhhsNg5gOZFZ/j2BJtXWQlZXnPMAbEfrRTCuNEtthLiXFrG6pBn4maVHcQcWtKnFqXlOmYkxrOk12nqsWwljx+stfbUygD/AJHLEcT8Bts5M2aBvEaew1T4oczWyVRErH4KrieJGClIW0VQBuEn8ap43jaHmg2hCkwoHWI0np7a0CRHLtQjIw35BHAhq3u/BtfEy5svKY3IG8d69OXnjWrq8uXyK0mfVnoOtCrTiBpLeRbalDmIBH31+3PELRaW2hopzJIEAAaiOVTkSRqa9v5+NuMY8514WwlEeKohSuQHqz+dG8Uw5D6MqtD6quYP9cqR8KxJTKgQdKMYxxLmQEsyCoeZXTsP1/oIWV2F8ieYety+RP3hy38N0oJBKVKEjUbUWRisvKaybKyzP5RStgmJpZMqSTqdu4iiw4kYnN4JzbzCZ+NPg8T0el1CJUoL4OeYM4r/ALwr2J/Cg9XsZvQ86VpBAIAg9hVGqHuZuoYNaxHWTJWkejXALa4tlreZStQdKQSTtlSY0Pc1m9aT6NMdtre2cQ88ltRdJAM7ZUiduxpTWb/C+DOfaVrxu5jWrg2wj+7I+Kv1pZwrh21ViLzSmUltLKVBMmASU67zzpoVxfYx/eUff+lK+D8RWoxF50vJDamUpCiCASCmRtPKs2rx8NnPXvDNs4jP+xth/DI+Kv8AdSRxjhNrb3NuA2lDSivPqqCBEc5508/thY/xLf3/AKUjcYYva3F1bw4lbaSrOYMaxHLXblRtD43jDfnHvnErdt2HE6DAbZ3w3GUILeaVaq1AzAge+Om1AuK2bVACWQkLChmAzbQevuo8rHrZstttLQEZvMADABCifZrHxoHxdc2ywCyUlZVJKQdoO5j2V6a3ZsOMZ/nUzk3buczTGuDbGB/7MjYc1frQbjLhi0atHXG2EpWlMggq01HU0ba4vsYH/tKNh1/SgvGnE9o7aOIbfStShAAB6jtXkqvH8QZ3Yz7zUbZjynj0W8G2rzJuXsj5VKQ3uG43zD6537AgjeifGfAlgiyJRltlNAlLhJOYn1V7lU8iNRy0kUK9GnG9qxbKYeCWVNyoKA/e+3nn2HcAbRV7i/0kWyrXLbgOreTBStOiAdCFA6E9vfW7FIrei7hVm8dUt5SSlqD4M6qnmfsDtudNOeiYl6P8OLTw8MNZ5X4k/u4HqyYCdyU7antGd+i3ilmzdUh9CUpdgeNGqI5H7B7bHeeT1iXpPs0sLW0S44FFCWyIzdFf5Pv5RXTpnXAOEMvXrjTgS82lCyDqAqFJAUNjBB59a0b9jLD+GR8Vf7qzn0f4u01euOvKQ0laF7CEgqUkwANhvA7Vo/7YWP8AEt/f+lZGt8bxPgzjHlmMV7dvMz3E8IYTjCLdLYDRW2CiTGqQTzmtB/Yyw/hkfFX+6s+xLF2VYwh9LgLQW3K9Y0SAeU1oX7YWP8S39/6VGp8bCbc9c9yU285mfek7CGLZbIZbDYUlRME6wR1Jry/g1vctAWnhhxJSVklQ0IOmx3P4V79J+LsXC2Sy4HAlKpInSSOor8vMaYt2QbTwvEUUhQynUAHfbn+NbH4f/wDH+56c57it/wCb4ZR4rYtW0BDQSHUrAUBmmIM76bxXuws7dNsl11AOmp1+sR1r84subZxtKmigulYKiBrGUzPviveG3lubZDTqxtqkyPWJ5Ue3G89fSN/h23J3Y6ON3rP1+ztl263W2xokwddx76q8NWLS2lqcQFZTvrsBPKrl1eWybdxtpadUmBJOp9tVOGb5pDa0uLCcytjOoiKHxmPkV+OmdvRzjGM8y/h1tZvzkbByxMyN/f2oNw8LYOrFxGXlM9e1G7G6s2Z8NaUzE6qO3tmg3Dblv4q/Hy5SNMwkb1dPzDr9orr9vhr1nnO3/UYP2eZQ4484lHyfKCkSrTQST7T3oThtpbu4kltCQphShA1g6Ce+80XTxCyt5xlam/k+UBJg66CQff2oTh95btYklxKkpZCkwQDA8on75q2r2+Ednv8APz/1MunO74pp37GWH8Mj4q/3Ukcf4JbsP2qWmghLhOYAnXzJHM9zTx+2Fj/Et/f+lI/pBxu3eftVtOpWlskqInTzJPTsa89pfG8Qbs457z6R59u3iONnwfYltBNsgkpSTqrmB3pc9I3D1rb2gWyylCvFSJBOxCtNT2FMtnxdYhtANygEJSDv0Halv0j8QWz9oEMvJWrxUmBOwCtdu4qKPH8UZzjPvJbbthjgLgqxctcy8lwpweZWoy9k7ER13J9kDn6RuBbVFqbhnJbqaEkbJcH1Y+v0jfY9R+cDekO3Sx4dxlZLadMqYBAGwAG/Qda88e8fWjtmWmgHlvCIUNGvtH7f1Y9p6HaisSuGGbRYh0JK4GhzdTO3uoojBLZgKVcpQElUJMqP1jHw/ChvC1zaJSfFKAoAakGec6x7KJs45bPhabhTZSFeUEHuJ+H41ops2DOMxZt27zxOfo9wK0ubhanVpISshDRmD0J7cgOZ36HUHuBMPUlSfkyBmESBBGkSDyPs07VlPBPFiLJ5aSlPhLWTmjWOQJ3iNuh9umnL9ImHjN8/OVGbQHUxOUdVfd3rPMZExDibC02ty4wl1LoQYzJ/A/aGxjnQuinEuKi6uXH0tpaCzOVP4nqo7k9aF1E6Sm3gHgteILKlEot0GFrG5O+VM6TqDJ2pSrUPQpiLCFutKWpLzkZUk+RQA5D6++/LbnXToxL9Etic0OPiRCZUkhJjf6In2TSJgvA4VevWtwsw2jMFNKSc0kAGSDGh2ImtjxHGrdDKnVrSpsSCJ3I3H9cvbWacEYgy9iV06y34SFtyE5p1zJkidgd45fdQNSxWpivcugywzL/9mVn/AIlx/rR/26W8X4NYbvLa3Qt3K8pQUVFJIyxtCQPiDWr5x1HxpI4gcH/FLHUaKXOu21ZWn1FrMcnyP6Q7ooE9/wBmNn/iXH+tH/bpY474SYsmkLaU6SpYSc6kkQQo8kjpWt5x1HxpE9K7wDLUFJIdSYMHZK+XMVOm1FrWgEzrEUKcRN4fwDOA48PL6qdp7nnH4/jw4hwIsnxG5LRPvQeh7dD7vay4PiiX0yNFD6SencdqFcRY7ALTZkkQo76dKfR7DZiZSvYbJU4a4aU+QpxK0skGFAgSR0me+sVc4g4R8MJNulxY1z5lJ0jbknv1olwZjiVpRbZSFIQTmJEHX+dXuJ8dTbpy5cxWDEEae340NrbvG2gfT95uLVT4OSfrE/h7B230qUsr0MDKQOXcGiTfDtqqcq1qjeHEGP8Akrxwcfm1/wCb8qIYbhiGCopWVZt5gRv09taYEc02mRq0OwHOcmJq7Ml5TTYJIWUj3GNf1pmHCyPByz87vn1iekfV778+1CrLFAxcukgFKlqBI3HmOo/TnTY/ftob8UqGSJBHP2d6SvdwwCzzepZ1fC9TPX7VaFltSSFgxl5z26zyjetBwPgRgNhF45kuHwfCQFaojWY9ZXUHTcb6hVZ4mWm6Rc5Eq8PRKFD1ddJ3B1JnkfhT/eYVaYmW79DxbCI8bWCAgTEz82odRoRqOpbTkc9ylzsMZ4HqPX0ma4/grtm6WnRrulQ2UORB6fhtRw8PWyQkrWtMjmtI+Eprzx5xWL1YQ2IZbJykjzKOxVrqB0HvOugIX+GIuEoCllOUcoO4HX2VYAeU1/w2s2VsWXLccQFj2ENMtJW2VnMoDVQIggnSEjpXvhvhpT5CnErDKgYUlSRqNOc9+VWuJ2gi2bQDISoCfYlVEeCsbSUotspCkpUc0iDqT+dL6lmVCUhbaaxqNpGOBx7+kEcS8LqZOZlK1NBMqUopJBkztGkRyofgWCOXCgQklsKAWoEAge/9DThxhjiWkKYKSS42YIIgTI1+FA+C8bSyfBKSS4sQZEDlrQK7LTTnHMDZXULsZ4lnHODAhCTbBxap8wUpO0b7JqnwNw81eOrbdK0hKZ8hAMzzlJpxxzGk2qUrUkqzKiAR0mgnopdHyp07SifvoS22GhmP0Mm+utbAB/iMP9mFn/iXH+tH/brPeIMC8K9XasBbkFISDBUcyQrWABpJ100FbtnHUfGsk4ixxdpi7zrcK+gFA7KHhokTy9ooegusewhzxiAvXauVHMM2/AFshhLL7oTdOyUKzbEawlPrJHPmZ5aAZ7iuEu27xZcQQsHQDXNOxT1B/rWtSbwy0xB1GIh1WVCfOhStEFOonXygakjY79ZVOMOM/GuGzbgBLBORakypROh31CT09+8RssBMymxy2O/XPkYV4d4GYbYLt+QM0AAqy5J21G6if0pT4s4ZcsnIPmaV+7cGxHQ9Ff8ArT40WMbaazLU24yZW0DoQeg/BW41HsF+kHiRpLRsWAlYEZ1nUJIP0Uz63U8tRvMcQMSKrLPEwe/Mekt8Mei5D1vnfcUlaxKchBCek/WPWCOneuHGvoz+Ts+PaqWsIBLiFEEgD1kkASBzHvpt9GeOWrlsG2/mlNjzoUqdhqqTv1n9NPXpLxi2/wCHqCnTLw+aDatVka6/Y+tP4xQ49Mw4d4eZuEErUsKAH0VCNZ5FJ6dauWPBzaswc8VJB0IUmCJOv0T251z4Swtlac5kLAGoV1J5R2o0+lq+SpteZIQrcKG4zJ6HvWklSlAdvMVZznuKeA8MLuX1ITIaQohS/Ydh1Ufup2xngK2Wgt25DdykZgnMTmHQydJ6/lS7wjxSbN0sr8zIUoDbTXr+f5bPLWHWluXb4uEpWfEK1KJI6JTz3kRvypMAYgb7LFf9Mecxe5t1NrUhaSlSTBB3BrlRvi7HvltwXcgQkDKkQJgbFR5n8NqCUEx5SSOe5KO8P8OquUqX4gQEmNiTMA9uvWgVOHBFs6UlYdytJXqiJzGBOvLSKLSoZ8EZkWEhcicbfg5SioeMAlOxynUxO0x99VLfhpS7hTIcAypCiog7GOXXXrT48ouJUEOFJAImJgkaaGPbShh+Hv8AytaEXBCsgKnCmSQSNMsn8aasoRcYHnArYxzkzx+xqvECA6IgkqKTpEDadd+ooZjmCm3UlIX4hVMQmNo5SZ3rSfFn5sK80Tt0gE9OY+NKTjLjF9bKVdgHPo64jyogiSUyRGvb2jcRfSiLkD7Sa7Cx5hTDvRLcOMpcW6hpaiJbUkkpSdySPWA1yx2kUv8AGfBz2HrAWc7a/oOgQFdQRrlUOk7a19D1lPppvWleE0H1lxJlTIjIARoo9FfHc7UhGIA4T9Ht1dMqfS4GAUnw80gufD6KTtOs9Irhxh6P7ixbS9mDzZ+mpAI8NXQg65TyV10MaTt2AuFVsyouIdJQmXECEq03A5fd7BtSn6Xb5tNmW1PrQ4sgpbRHzgG4WN8vedwNDXTpjGGYet9eVPvPID+uVX8dwEsALQStvYnmk9+x5H3e09ww+0WglsQofTHMnr3FWsXxJDCCVAKKgQEH1vb260ob38TAEVNzb8ARTwXBflAUrOEAGNpn7xRH9kv/ADv+T/8Aqu3CBltzSPPt00+NXsKsHGisrcCwrYSoxv1FPhRPSafSVPWhKk5zk56itY4V4jy2s8Zc3mifomNpoueFjAT8o0GwyGBPbNXLA/749/8AX/1iiqcOdFx4vijJJ8kq5iNojfWuCiU0+lrZASufix30IsOYQRcptwsHMUjNH1u1Er3h9xlbbCXiUvkBUAgaERmE+aJkTXjEW1Kv0pQrIolAComNBrHOnNm7DHhsuvFbiyQDlIza9BIESBqaPTUrA5/zMfVf27Sq9AmIPEOCfJSgZwvMCdoiPeavt8KSAfGGon6H8658Y2jjam/EeL0gwSkJjXsTRfEbFx1LfhuBuBrqoTIH1RQnUBiMR7QVLajMw3EY6i/jGB+AgL8TNKojLHInqelHeH/R+q6t0Pi4SjPPlKCYhRG89qqcStlNs2lRzEKSCepyq111rRfR5/4ex7F/9aqQ11rVICnrLX0ot20DAwDErF/Rwphhx75QlXhpKsuQiY7yaXMGwT5QlSvEywYjLPKeorZOLv7lc/8AylfhWXcJpJZcAMEqInp5aroLnuUl/WdRQj3BSOOZ4/ZH/wA4f6P50t+EZIAJjpTvg+HuNFXiOhyYjVRiJ+sKEcJYo3bvuKcUUAgiQCefbWnLTtXIEvqdOihMDbnOczpf8HltgvB0KhIVlyEbxzk9aXrS0W64lttJUtRgJG5P9c+Va89eIQ2XVKhAEzB2PYa0k2OKs/8AFkv+OptoqT84kfZAgz6pOhkHSk9Lc9hIYfX9oHVUpWAVP0/eG7f0V3gGUXCUocRKwM0ZhqEqHNPPN91IWJYU8w8WHEFLgMZd5naOoPKN6+oEKkAgggiZGx71jPpbuP8A3gzmfGVCU6Njzs6gkkzqo/SGo9g3LkTn5hHoyvMjbqXwytX0gJCkJPQg+Y9U6e2lPirhl6wd8N0Sk6oWPorHboRzHL2EE/Q+C3KHGG1oc8VJSIX19sAa9dBSN6an4t2R4jcFyS0oeZcDcEahI2O2415V06IHB3CC7w51Eoa1GYbqO2nYcz7usVOLOGXbJwBXnbV9ByND2PQjp760DDMUN9Yqas1Jt3wACnaBtCSNgRoCBp2Oo6Yv4Nnh/g3ai/KYQhUBSlDmnmkCd9Y03JglKjEQF7izn1xj95lWG2HirCSSkH1ss9uoonxDwuq1QF+IFgqymEkEaE99NKMcFYu2lBaUsgwITBI3M7acxTViOItsJzOqypJyzBMkyY0B6Gsy3UWLZgD7zeq09bV5J+0yS0titQGoBOpiYpmvuGnRbZxclbaRnDagoDbkJImNK/OGMWbbfXKylKlrIgGCDtoKeFXaEt+LMICc0wdt9t66/UOjAASKNPW6kk/aY3UovxTeNvXCltGUkDWCNY13ANCKcU5AJibDBIElXrDE3mhkaWUgmYHMnTpVGmnhG0bILkhTg0j6vf39a57PDG6CsYKuTP0Wl800pwOmSZUgGVbb6jl0FArXEXkrK0LVnVpO5PatD8TLqTAG9cPR94TuKZmrcLSlBJWSAG1fXSnYyYTHeREUKjU2OeYGly5IIle24OxkqQ5BSp0ESpafIND5h6s9BrprSdjabhLy0XOYOoMKCuXs5Qd5GhEGvp6so9IVs2/ijDdxcNBsojyJhadfoLV3OxJ010HNncx4JhzhRmA+DrbE7oILNypptgFLalqMag+UCDm6a/RERsBSli9s828tD4UHQfPmMmes853nnW04uxdW/gGzQhTKDkWwBBg6A5j03nluZE0telq9tVISgibpMQpMeVPML6g8h1101mSuBFa9QzP7H/XzgvDeGMWSwG23PDbKg4EeKAQoag6ajkYneOdUeKOF7+F3V0tKyBKleICemgA0HYVsDP0R7B+FAOPv7i9/l/MViV6+xnC4Hc1TUAMzJ+FMKubl8JtUysakkwkD7R2g7Rzq5j/DV+hs3dw0pKc5QZ3TBgSkfRSToDsfeCdW9EzGXD0HwQ2VKJzAyXRyWeY5pjtPOmHiVShaXGVTSD4StXRKNtcw21Gms6xodq18DOYrgZzPm2zv3W/K2oiTsOZozffLWm0uKcMHeIlB5ZtOf8q68IWjRlwmXBsn6o69/bypmcUADmjLBzTtHOe1LWakq20QbayxDtUnHzmcsXi0KK0qIUdz1nU0yOWOIJaLxcASE5z5kzETtG/aufC7Nuu8WAkKaCVFIcAPNI2PtMTrHen9SUlMEJKYgggRHSNoqt+qNbAATV0tbMmdxH1mQG9c8QO5jnBBCuem1GLVm7uYezklv92ToSZ2TpHx56V7xphj5eUnKhryyEAATlGmmgk7mmxCQAAAABoAOVEs1JVRjz5mVqXKNjs+szvEL510jxVFRTpry60fwzD8SfYL7KVrbSoJEASZ0kCJIBgE8p7GOPGXhZkkfvfWjmORP2vyrfsGbKWGgUIbIQnyIMpTpsO1GSwuN0LTawXKnE+euKLS7t1+DdTOihsQe4I35j2zV/DLjEWrQOMvZWEhRCQUyBmM6ETvJp/9NiT8jaOVBAd1UT5kykwEjmDBnXknQ7hW4TDht0BaWiyQrcyT5joUkRG9GrqW07WGZFtr/mJgy4vMSdtVOKfzMqScwlMlOx0iaXcOunknI0ogqOw5mnviIOJYcDSGgzkMwYImZypAiOfxoHwelrKSP3vOenKO35+6qahE04+ESg1DqN4lPFHbtiMzhIOyhET023oDqT1JrSbppCkKSsAoI1n8Z5R1pW4dbY8dQmSD82TzH60rXqNykkdSBqnsXLknE84i5eIYAcWotkAEaadAdPvpfrT1oBBBAIOhB50oWtuy3fIQClaM0EKAIBOhSZ0Mf1qKim4EHj34nU3Na21u4RwtvEyyytl85GpU0kOCUzuIO+mkGRB70pPvKWorWoqUokkkySTuSa2NhtCRCAlKeidB7gNBSXxTbWrdwwVIAbM+IGoEgERoNOesakVSjVGx9pHymjqNMK03D+fKcuF8MxB63cTbuqQ0SCE5inOpJ9U8o66AmBy0X8Zvn3nVKuVLU6PKc+4y6RHKOnWa1vG7p9LFunDkJKHCB4ojKhI1AjkCARPKI3IoP6SsMt/CRcOkIuCQCE6eKBE6awQNcxmNAZ0rRKccTHr1JLYbz69R84ocGYZdOveJbq8Mo9c7T9XvPTpXDjBd0blfyv8AeDb6uXlk+z/OdZrS8MvEjD/Ew5sOKAyhGgKCdyocyNz1rxjWFpesJv3EpcaTIfA2PSPWnQQInkAakrxxKDUf3MsPb3ma8O4DdXJUq2SSUc5jXkkE6EnpRHifCcSbZSu6Ci1IJ2ORRkAKjY6+zWtI9EZJs0yptQBMBAgok7K6qPWNo1NOt80FNrSWw4CkjwzEL0+iZ0E7TQSBnOJoBiBjM+XbdtSlAInMdoo7iK7xtmFOlTRGUxyHQ6THKasYD4QdcQUeG5mUCkmYg/RB3027xTKpAIggEEQRSt121sERZ9QyNgTMKlEMdtW23SltUjmPqnpPOh9NA5GYcHIzJXezu1NLC0GCPv7HtXCpUkZkkZhjF8eU8MoGRPMTv/KqWFYk7bOpeZUULSdCPwI5g8xVSpVVUKMCQqhRgR9e9K96S5CW0haQEgA/NkbkGdSe/b3oz76lqK1qKlKMkncmudSrSY5YV6Qn2bYskZ1jRtxR1SO49aOVKL7ylqK1kqUoySdya51KnJlFrVSSB3H1HpQfAA8BrTur9aH49x6/dMlkttoSrcpkkjpqdKUqlLLpaVOQsNvb1jJwzxpc2LbjbRBSsGArXIo+snv22OlTiXjW6vW22nVAJQBmCdPEUPWV37DTelupTEpO1pcqbUFoMEf18KIYvji3wExlTpIB3P6dBQmpVSik5I5lSoJzJTFdcWurZLORABTlnWY260u1KhkVsZHUKrsucHuSjNjxC420W9z6ij6v69qDVKllDcGCZQ3c9OLKiSTJOpJppwj0gXltbi3QoEJUChShJSkalAnTKdN9hIHKFSpVpaG+KuJ3r90LdICUiENp+inrHc8ye3QV5Z4hWm2NvlSUwRm1nUk+znQapVlYr1IIB7hpniJabf5PkTlylObWdST7OdCbd9SFBSTChsa51K5mLdzgoEL4tjq3khMZRHmA9Y/p2oSkxqK/KlDVQowJyqFGBDbvEjhaybL2K+ZH5HvQSpUrlRV6EhVC9RhwrixxhsNhCFAczP5Gl6pUrlRVJIHcKzswAJ6jLwjxe5ZEpjxGlalBMQeoPLv1oTjWLO3TqnXVSo7DkkcgByA/nvVCpV8nqBFaht2OYV4cx52zdDjZkHRSDsodD+R5Vb4t4pcvliRkaT9Budu56q/D4yv1K7Jxid4a7t2OYX4b4iesXQ4yr/Mk/RUOhH50fxD0nXrrTrcoR4itFJEKQk7pB+Hm3366JNSol56QsgyDBFG18TOFrJEL2z9v170CqVVkVuxKsobufpr8qVKtLT//2Q==400",icon:o.jsx(yu,{className:"w-6 h-6"}),color:"bg-violet-500",controls:"mouse"},{id:"crossy-road",name:"Crossy Road",type:"3D",description:"Cross roads and rivers while avoiding obstacles",thumbnail:"data:image/jpeg;base64,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400",icon:o.jsx(y0,{className:"w-6 h-6"}),color:"bg-teal-500",controls:"keyboard"}],y=I=>{r(I),v(I)},h=I=>{e(I,"edit")},v=(I,p)=>{const d=x.find(g=>g.id===I);if(!d)return;const f=k(d),A=document.createElement("div");A.className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50",A.innerHTML=`
      <div class="relative w-full h-full max-w-7xl max-h-[95vh] bg-gray-900 rounded-lg overflow-hidden">
        <div class="absolute top-4 right-4 z-10 flex gap-2">
          <button onclick="this.closest('.fixed').remove()" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium">
            Close Game
          </button>
        </div>
        <iframe src="data:text/html;charset=utf-8,${encodeURIComponent(f)}" 
                class="w-full h-full border-none"></iframe>
      </div>
    `,document.body.appendChild(A)},k=I=>{const p={racing:{title:"Racing Championship",gameLogic:`
          let car = { x: 300, y: 500, width: 40, height: 60, speed: 0, angle: 0 };
          let track = [];
          let obstacles = [];
          let score = 0;
          let gameRunning = true;
          let lap = 1;
          let checkpoints = [];
          
          function initTrack() {
            // Create race track boundaries
            for (let i = 0; i < canvas.width; i += 20) {
              track.push({ x: i, y: 100, width: 20, height: 20, type: 'wall' });
              track.push({ x: i, y: canvas.height - 120, width: 20, height: 20, type: 'wall' });
            }
            
            // Create checkpoints
            checkpoints = [
              { x: 100, y: 300, passed: false },
              { x: 400, y: 200, passed: false },
              { x: 500, y: 400, passed: false }
            ];
            
            // Create obstacles
            for (let i = 0; i < 5; i++) {
              obstacles.push({
                x: Math.random() * (canvas.width - 100) + 50,
                y: Math.random() * 200 + 200,
                width: 30,
                height: 30
              });
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Car physics
            if (keys['ArrowUp'] || keys['w']) car.speed = Math.min(car.speed + 0.5, 8);
            if (keys['ArrowDown'] || keys['s']) car.speed = Math.max(car.speed - 0.5, -4);
            if (keys['ArrowLeft'] || keys['a']) car.angle -= 3;
            if (keys['ArrowRight'] || keys['d']) car.angle += 3;
            
            car.speed *= 0.95; // Friction
            
            // Move car
            car.x += Math.sin(car.angle * Math.PI / 180) * car.speed;
            car.y -= Math.cos(car.angle * Math.PI / 180) * car.speed;
            
            // Boundary collision
            if (car.x < 0 || car.x > canvas.width - car.width || 
                car.y < 120 || car.y > canvas.height - 140) {
              car.speed = 0;
              car.x = Math.max(20, Math.min(canvas.width - car.width - 20, car.x));
              car.y = Math.max(140, Math.min(canvas.height - 160, car.y));
            }
            
            // Obstacle collision
            obstacles.forEach(obstacle => {
              if (car.x < obstacle.x + obstacle.width &&
                  car.x + car.width > obstacle.x &&
                  car.y < obstacle.y + obstacle.height &&
                  car.y + car.height > obstacle.y) {
                car.speed *= -0.5;
              }
            });
            
            // Checkpoint system
            checkpoints.forEach((checkpoint, index) => {
              if (!checkpoint.passed &&
                  Math.abs(car.x - checkpoint.x) < 50 &&
                  Math.abs(car.y - checkpoint.y) < 50) {
                checkpoint.passed = true;
                score += 100;
                document.getElementById('score').textContent = score;
              }
            });
            
            // Check if all checkpoints passed
            if (checkpoints.every(cp => cp.passed)) {
              lap++;
              if (lap > 3) {
                endGame('🏆 Race Complete!', 'Congratulations! You finished the race!');
              } else {
                checkpoints.forEach(cp => cp.passed = false);
                score += 500;
                document.getElementById('lap').textContent = lap;
                document.getElementById('score').textContent = score;
              }
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw track
            ctx.fillStyle = '#2d5016';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#444';
            ctx.fillRect(0, 120, canvas.width, canvas.height - 240);
            
            // Draw track boundaries
            ctx.fillStyle = '#8B4513';
            track.forEach(wall => {
              ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
            });
            
            // Draw obstacles
            ctx.fillStyle = '#666';
            obstacles.forEach(obstacle => {
              ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            });
            
            // Draw checkpoints
            checkpoints.forEach((checkpoint, index) => {
              ctx.fillStyle = checkpoint.passed ? '#00ff00' : '#ffff00';
              ctx.fillRect(checkpoint.x - 25, checkpoint.y - 5, 50, 10);
              ctx.fillStyle = '#000';
              ctx.fillText(\`CP\${index + 1}\`, checkpoint.x - 10, checkpoint.y + 3);
            });
            
            // Draw car
            ctx.save();
            ctx.translate(car.x + car.width/2, car.y + car.height/2);
            ctx.rotate(car.angle * Math.PI / 180);
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(-car.width/2, -car.height/2, car.width, car.height);
            ctx.restore();
          }
          
          let keys = {};
          document.addEventListener('keydown', (e) => keys[e.key] = true);
          document.addEventListener('keyup', (e) => keys[e.key] = false);
          
          initTrack();
        `,controls:"Arrow keys or WASD to drive",extraUI:'<div>Lap: <span id="lap">1</span>/3</div>'},puzzle:{title:"Block Puzzle Master",gameLogic:`
          let grid = [];
          let gridSize = 6;
          let tileSize = 80;
          let selectedTile = null;
          let score = 0;
          let moves = 0;
          let gameRunning = true;
          let targetPattern = [];
          
          function initPuzzle() {
            grid = [];
            for (let row = 0; row < gridSize; row++) {
              grid[row] = [];
              for (let col = 0; col < gridSize; col++) {
                grid[row][col] = {
                  color: Math.random() < 0.3 ? '#4ECDC4' : '#2C3E50',
                  x: col * tileSize + 50,
                  y: row * tileSize + 50,
                  row: row,
                  col: col,
                  active: Math.random() < 0.3
                };
              }
            }
            
            // Create target pattern
            targetPattern = [];
            for (let i = 0; i < 8; i++) {
              targetPattern.push({
                row: Math.floor(Math.random() * gridSize),
                col: Math.floor(Math.random() * gridSize)
              });
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Check win condition
            let correctTiles = 0;
            targetPattern.forEach(target => {
              if (grid[target.row][target.col].active) {
                correctTiles++;
              }
            });
            
            if (correctTiles === targetPattern.length) {
              endGame('🧩 Puzzle Solved!', \`Congratulations! Solved in \${moves} moves!\`);
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background
            ctx.fillStyle = '#34495e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw grid
            for (let row = 0; row < gridSize; row++) {
              for (let col = 0; col < gridSize; col++) {
                let tile = grid[row][col];
                
                // Check if this tile is part of target pattern
                let isTarget = targetPattern.some(t => t.row === row && t.col === col);
                
                if (isTarget) {
                  ctx.fillStyle = tile.active ? '#27ae60' : '#e74c3c';
                } else {
                  ctx.fillStyle = tile.active ? '#4ECDC4' : '#2C3E50';
                }
                
                ctx.fillRect(tile.x, tile.y, tileSize - 2, tileSize - 2);
                
                // Draw target indicator
                if (isTarget) {
                  ctx.strokeStyle = '#f39c12';
                  ctx.lineWidth = 3;
                  ctx.strokeRect(tile.x, tile.y, tileSize - 2, tileSize - 2);
                }
                
                // Highlight selected tile
                if (selectedTile && selectedTile.row === row && selectedTile.col === col) {
                  ctx.strokeStyle = '#FFD700';
                  ctx.lineWidth = 4;
                  ctx.strokeRect(tile.x, tile.y, tileSize - 2, tileSize - 2);
                }
              }
            }
            
            // Draw instructions
            ctx.fillStyle = '#fff';
            ctx.font = '16px Arial';
            ctx.fillText('Click tiles to toggle. Match the golden pattern!', 50, 30);
          }
          
          canvas.addEventListener('click', (e) => {
            if (!gameRunning) return;
            
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            for (let row = 0; row < gridSize; row++) {
              for (let col = 0; col < gridSize; col++) {
                let tile = grid[row][col];
                if (clickX >= tile.x && clickX <= tile.x + tileSize &&
                    clickY >= tile.y && clickY <= tile.y + tileSize) {
                  
                  // Toggle tile and adjacent tiles
                  toggleTile(row, col);
                  if (row > 0) toggleTile(row - 1, col);
                  if (row < gridSize - 1) toggleTile(row + 1, col);
                  if (col > 0) toggleTile(row, col - 1);
                  if (col < gridSize - 1) toggleTile(row, col + 1);
                  
                  moves++;
                  document.getElementById('moves').textContent = moves;
                  break;
                }
              }
            }
          });
          
          function toggleTile(row, col) {
            if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
              grid[row][col].active = !grid[row][col].active;
            }
          }
          
          initPuzzle();
        `,controls:"Click tiles to toggle them and adjacent tiles",extraUI:'<div>Moves: <span id="moves">0</span></div>'},adventure:{title:"Mystic Adventure",gameLogic:`
          let player = { x: 100, y: 400, width: 30, height: 30, health: 100, inventory: [] };
          let enemies = [];
          let treasures = [];
          let obstacles = [];
          let score = 0;
          let gameRunning = true;
          let keys = {};
          
          function initAdventure() {
            // Create enemies
            for (let i = 0; i < 5; i++) {
              enemies.push({
                x: Math.random() * 400 + 200,
                y: Math.random() * 200 + 200,
                width: 25,
                height: 25,
                health: 50,
                speed: 1 + Math.random(),
                direction: Math.random() * Math.PI * 2
              });
            }
            
            // Create treasures
            for (let i = 0; i < 8; i++) {
              treasures.push({
                x: Math.random() * 500 + 100,
                y: Math.random() * 300 + 100,
                width: 20,
                height: 20,
                type: Math.random() < 0.5 ? 'gold' : 'gem',
                collected: false
              });
            }
            
            // Create obstacles
            for (let i = 0; i < 10; i++) {
              obstacles.push({
                x: Math.random() * 400 + 100,
                y: Math.random() * 300 + 100,
                width: 40,
                height: 40
              });
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Player movement
            if (keys['ArrowLeft'] || keys['a']) player.x -= 3;
            if (keys['ArrowRight'] || keys['d']) player.x += 3;
            if (keys['ArrowUp'] || keys['w']) player.y -= 3;
            if (keys['ArrowDown'] || keys['s']) player.y += 3;
            
            // Keep player in bounds
            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
            
            // Update enemies
            enemies.forEach((enemy, index) => {
              // Simple AI - move towards player
              let dx = player.x - enemy.x;
              let dy = player.y - enemy.y;
              let distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance > 0 && distance < 150) {
                enemy.x += (dx / distance) * enemy.speed;
                enemy.y += (dy / distance) * enemy.speed;
              } else {
                // Random movement
                enemy.x += Math.cos(enemy.direction) * enemy.speed;
                enemy.y += Math.sin(enemy.direction) * enemy.speed;
                
                if (Math.random() < 0.02) {
                  enemy.direction = Math.random() * Math.PI * 2;
                }
              }
              
              // Keep enemies in bounds
              if (enemy.x < 0 || enemy.x > canvas.width - enemy.width) enemy.direction = Math.PI - enemy.direction;
              if (enemy.y < 0 || enemy.y > canvas.height - enemy.height) enemy.direction = -enemy.direction;
              
              // Check collision with player
              if (player.x < enemy.x + enemy.width &&
                  player.x + player.width > enemy.x &&
                  player.y < enemy.y + enemy.height &&
                  player.y + player.height > enemy.y) {
                player.health -= 1;
                document.getElementById('health').textContent = Math.max(0, player.health);
                
                if (player.health <= 0) {
                  endGame('💀 Game Over!', 'You were defeated in the mystic realm!');
                }
                
                // Push player away
                let pushX = player.x - enemy.x;
                let pushY = player.y - enemy.y;
                let pushDistance = Math.sqrt(pushX * pushX + pushY * pushY);
                if (pushDistance > 0) {
                  player.x += (pushX / pushDistance) * 10;
                  player.y += (pushY / pushDistance) * 10;
                }
              }
            });
            
            // Check treasure collection
            treasures.forEach(treasure => {
              if (!treasure.collected &&
                  player.x < treasure.x + treasure.width &&
                  player.x + player.width > treasure.x &&
                  player.y < treasure.y + treasure.height &&
                  player.y + player.height > treasure.y) {
                treasure.collected = true;
                player.inventory.push(treasure.type);
                score += treasure.type === 'gold' ? 50 : 100;
                document.getElementById('score').textContent = score;
                document.getElementById('inventory').textContent = player.inventory.length;
              }
            });
            
            // Check win condition
            if (treasures.every(t => t.collected)) {
              endGame('🏆 Adventure Complete!', \`You collected all treasures! Score: \${score}\`);
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background
            let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#2c3e50');
            gradient.addColorStop(1, '#34495e');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw obstacles
            ctx.fillStyle = '#7f8c8d';
            obstacles.forEach(obstacle => {
              ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            });
            
            // Draw treasures
            treasures.forEach(treasure => {
              if (!treasure.collected) {
                ctx.fillStyle = treasure.type === 'gold' ? '#f1c40f' : '#9b59b6';
                ctx.fillRect(treasure.x, treasure.y, treasure.width, treasure.height);
                
                // Add sparkle effect
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fillRect(treasure.x + 5, treasure.y + 5, 3, 3);
                ctx.fillRect(treasure.x + 12, treasure.y + 12, 3, 3);
              }
            });
            
            // Draw enemies
            ctx.fillStyle = '#e74c3c';
            enemies.forEach(enemy => {
              ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
              // Draw eyes
              ctx.fillStyle = '#fff';
              ctx.fillRect(enemy.x + 5, enemy.y + 5, 4, 4);
              ctx.fillRect(enemy.x + 15, enemy.y + 5, 4, 4);
              ctx.fillStyle = '#e74c3c';
            });
            
            // Draw player
            ctx.fillStyle = '#3498db';
            ctx.fillRect(player.x, player.y, player.width, player.height);
            
            // Draw health bar
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(player.x - 5, player.y - 10, player.width + 10, 5);
            ctx.fillStyle = player.health > 50 ? '#27ae60' : player.health > 25 ? '#f39c12' : '#e74c3c';
            ctx.fillRect(player.x - 5, player.y - 10, (player.width + 10) * (player.health / 100), 5);
          }
          
          document.addEventListener('keydown', (e) => keys[e.key] = true);
          document.addEventListener('keyup', (e) => keys[e.key] = false);
          
          initAdventure();
        `,controls:"WASD or Arrow keys to move and explore",extraUI:'<div>Health: <span id="health">100</span></div><div>Inventory: <span id="inventory">0</span> items</div>'},shooter:{title:"Space Defender",gameLogic:`
          let player = { x: 300, y: 500, width: 40, height: 40, health: 100 };
          let bullets = [];
          let enemies = [];
          let powerups = [];
          let score = 0;
          let gameRunning = true;
          let keys = {};
          let wave = 1;
          let enemiesKilled = 0;
          
          function createEnemy() {
            enemies.push({
              x: Math.random() * (canvas.width - 30),
              y: -30,
              width: 30,
              height: 30,
              speed: 1 + Math.random() * 2,
              health: 20 + wave * 10,
              type: Math.random() < 0.8 ? 'normal' : 'fast'
            });
          }
          
          function createPowerup() {
            if (Math.random() < 0.1) {
              powerups.push({
                x: Math.random() * (canvas.width - 20),
                y: -20,
                width: 20,
                height: 20,
                speed: 2,
                type: Math.random() < 0.5 ? 'health' : 'rapid'
              });
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Player movement
            if (keys['ArrowLeft'] || keys['a']) player.x -= 5;
            if (keys['ArrowRight'] || keys['d']) player.x += 5;
            if (keys['ArrowUp'] || keys['w']) player.y -= 5;
            if (keys['ArrowDown'] || keys['s']) player.y += 5;
            
            // Keep player in bounds
            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
            
            // Shooting
            if (keys[' '] && Math.random() < 0.3) {
              bullets.push({
                x: player.x + player.width / 2 - 2,
                y: player.y,
                width: 4,
                height: 10,
                speed: 8
              });
            }
            
            // Update bullets
            bullets.forEach((bullet, bulletIndex) => {
              bullet.y -= bullet.speed;
              if (bullet.y < 0) {
                bullets.splice(bulletIndex, 1);
              }
            });
            
            // Create enemies
            if (Math.random() < 0.02 + wave * 0.005) {
              createEnemy();
            }
            
            // Create powerups
            createPowerup();
            
            // Update enemies
            enemies.forEach((enemy, enemyIndex) => {
              enemy.y += enemy.speed;
              
              if (enemy.y > canvas.height) {
                enemies.splice(enemyIndex, 1);
                return;
              }
              
              // Check collision with player
              if (player.x < enemy.x + enemy.width &&
                  player.x + player.width > enemy.x &&
                  player.y < enemy.y + enemy.height &&
                  player.y + player.height > enemy.y) {
                player.health -= 20;
                enemies.splice(enemyIndex, 1);
                document.getElementById('health').textContent = Math.max(0, player.health);
                
                if (player.health <= 0) {
                  endGame('💥 Game Over!', \`You defended Earth for \${wave} waves!\`);
                }
              }
              
              // Check collision with bullets
              bullets.forEach((bullet, bulletIndex) => {
                if (bullet.x < enemy.x + enemy.width &&
                    bullet.x + bullet.width > enemy.x &&
                    bullet.y < enemy.y + enemy.height &&
                    bullet.y + bullet.height > enemy.y) {
                  
                  enemy.health -= 20;
                  bullets.splice(bulletIndex, 1);
                  
                  if (enemy.health <= 0) {
                    enemies.splice(enemyIndex, 1);
                    score += 100;
                    enemiesKilled++;
                    document.getElementById('score').textContent = score;
                    
                    // Check for next wave
                    if (enemiesKilled >= wave * 10) {
                      wave++;
                      enemiesKilled = 0;
                      document.getElementById('wave').textContent = wave;
                      player.health = Math.min(100, player.health + 20); // Heal on wave complete
                      document.getElementById('health').textContent = player.health;
                    }
                  }
                }
              });
            });
            
            // Update powerups
            powerups.forEach((powerup, powerupIndex) => {
              powerup.y += powerup.speed;
              
              if (powerup.y > canvas.height) {
                powerups.splice(powerupIndex, 1);
                return;
              }
              
              // Check collision with player
              if (player.x < powerup.x + powerup.width &&
                  player.x + player.width > powerup.x &&
                  player.y < powerup.y + powerup.height &&
                  player.y + player.height > powerup.y) {
                
                if (powerup.type === 'health') {
                  player.health = Math.min(100, player.health + 30);
                  document.getElementById('health').textContent = player.health;
                }
                
                powerups.splice(powerupIndex, 1);
                score += 50;
                document.getElementById('score').textContent = score;
              }
            });
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw space background
            ctx.fillStyle = '#000011';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw stars
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 50; i++) {
              let x = (i * 37) % canvas.width;
              let y = (i * 23 + Date.now() * 0.1) % canvas.height;
              ctx.fillRect(x, y, 1, 1);
            }
            
            // Draw player
            ctx.fillStyle = '#00ff00';
            ctx.fillRect(player.x, player.y, player.width, player.height);
            
            // Draw bullets
            ctx.fillStyle = '#ffff00';
            bullets.forEach(bullet => {
              ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
            });
            
            // Draw enemies
            enemies.forEach(enemy => {
              ctx.fillStyle = enemy.type === 'fast' ? '#ff6600' : '#ff0000';
              ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
            });
            
            // Draw powerups
            powerups.forEach(powerup => {
              ctx.fillStyle = powerup.type === 'health' ? '#00ff00' : '#0066ff';
              ctx.fillRect(powerup.x, powerup.y, powerup.width, powerup.height);
            });
          }
          
          document.addEventListener('keydown', (e) => keys[e.key] = true);
          document.addEventListener('keyup', (e) => keys[e.key] = false);
        `,controls:"WASD/Arrow keys to move, SPACE to shoot",extraUI:'<div>Health: <span id="health">100</span></div><div>Wave: <span id="wave">1</span></div>'},platformer:{title:"Super Platform Adventure",gameLogic:`
          let player = { x: 50, y: 400, width: 30, height: 40, velocityY: 0, onGround: false, lives: 3 };
          let platforms = [];
          let coins = [];
          let enemies = [];
          let score = 0;
          let gameRunning = true;
          let keys = {};
          let level = 1;
          
          function initLevel() {
            platforms = [
              { x: 0, y: 550, width: 200, height: 50 },
              { x: 250, y: 450, width: 150, height: 20 },
              { x: 450, y: 350, width: 100, height: 20 },
              { x: 300, y: 250, width: 200, height: 20 },
              { x: 100, y: 150, width: 150, height: 20 },
              { x: 400, y: 100, width: 200, height: 20 }
            ];
            
            coins = [
              { x: 270, y: 420, width: 15, height: 15, collected: false },
              { x: 470, y: 320, width: 15, height: 15, collected: false },
              { x: 350, y: 220, width: 15, height: 15, collected: false },
              { x: 150, y: 120, width: 15, height: 15, collected: false },
              { x: 450, y: 70, width: 15, height: 15, collected: false }
            ];
            
            enemies = [
              { x: 260, y: 430, width: 25, height: 25, direction: 1, speed: 1, platform: 1 },
              { x: 310, y: 230, width: 25, height: 25, direction: 1, speed: 1.5, platform: 3 }
            ];
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Player movement
            if (keys['ArrowLeft'] || keys['a']) player.x -= 4;
            if (keys['ArrowRight'] || keys['d']) player.x += 4;
            if ((keys['ArrowUp'] || keys['w'] || keys[' ']) && player.onGround) {
              player.velocityY = -15;
              player.onGround = false;
            }
            
            // Apply gravity
            player.velocityY += 0.8;
            player.y += player.velocityY;
            
            // Platform collision
            player.onGround = false;
            platforms.forEach(platform => {
              if (player.x < platform.x + platform.width &&
                  player.x + player.width > platform.x &&
                  player.y + player.height > platform.y &&
                  player.y + player.height < platform.y + platform.height + 10 &&
                  player.velocityY > 0) {
                player.y = platform.y - player.height;
                player.velocityY = 0;
                player.onGround = true;
              }
            });
            
            // Keep player in bounds
            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            
            // Check if player falls
            if (player.y > canvas.height) {
              player.lives--;
              document.getElementById('lives').textContent = player.lives;
              
              if (player.lives <= 0) {
                endGame('💀 Game Over!', \`You collected \${score} coins!\`);
              } else {
                // Respawn
                player.x = 50;
                player.y = 400;
                player.velocityY = 0;
              }
            }
            
            // Update enemies
            enemies.forEach(enemy => {
              enemy.x += enemy.direction * enemy.speed;
              
              // Get enemy's platform
              let platform = platforms[enemy.platform];
              if (enemy.x <= platform.x || enemy.x + enemy.width >= platform.x + platform.width) {
                enemy.direction *= -1;
              }
              
              // Check collision with player
              if (player.x < enemy.x + enemy.width &&
                  player.x + player.width > enemy.x &&
                  player.y < enemy.y + enemy.height &&
                  player.y + player.height > enemy.y) {
                
                // Check if player is jumping on enemy
                if (player.velocityY > 0 && player.y < enemy.y) {
                  // Player defeats enemy
                  enemy.x = -100; // Move off screen
                  player.velocityY = -10; // Bounce
                  score += 200;
                  document.getElementById('score').textContent = score;
                } else {
                  // Player takes damage
                  player.lives--;
                  document.getElementById('lives').textContent = player.lives;
                  
                  if (player.lives <= 0) {
                    endGame('💀 Game Over!', \`You collected \${score} coins!\`);
                  } else {
                    // Push player away
                    player.x = enemy.x < player.x ? enemy.x + enemy.width + 10 : enemy.x - player.width - 10;
                  }
                }
              }
            });
            
            // Check coin collection
            coins.forEach(coin => {
              if (!coin.collected &&
                  player.x < coin.x + coin.width &&
                  player.x + player.width > coin.x &&
                  player.y < coin.y + coin.height &&
                  player.y + player.height > coin.y) {
                coin.collected = true;
                score += 100;
                document.getElementById('score').textContent = score;
              }
            });
            
            // Check win condition
            if (coins.every(coin => coin.collected)) {
              endGame('🏆 Level Complete!', \`Amazing! You collected all coins! Score: \${score}\`);
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw sky background
            let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#87CEEB');
            gradient.addColorStop(1, '#98FB98');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw platforms
            ctx.fillStyle = '#8B4513';
            platforms.forEach(platform => {
              ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
              // Add grass on top
              ctx.fillStyle = '#228B22';
              ctx.fillRect(platform.x, platform.y, platform.width, 5);
              ctx.fillStyle = '#8B4513';
            });
            
            // Draw coins
            coins.forEach(coin => {
              if (!coin.collected) {
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(coin.x + coin.width/2, coin.y + coin.height/2, coin.width/2, 0, Math.PI * 2);
                ctx.fill();
                
                // Add sparkle
                ctx.fillStyle = '#FFFF00';
                ctx.fillRect(coin.x + 3, coin.y + 3, 2, 2);
                ctx.fillRect(coin.x + 10, coin.y + 10, 2, 2);
              }
            });
            
            // Draw enemies
            ctx.fillStyle = '#FF4500';
            enemies.forEach(enemy => {
              if (enemy.x > -50) { // Only draw if on screen
                ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
                // Add spikes
                ctx.fillStyle = '#8B0000';
                for (let i = 0; i < 3; i++) {
                  ctx.fillRect(enemy.x + i * 8, enemy.y - 3, 3, 3);
                }
                ctx.fillStyle = '#FF4500';
              }
            });
            
            // Draw player
            ctx.fillStyle = '#4169E1';
            ctx.fillRect(player.x, player.y, player.width, player.height);
            
            // Add player details
            ctx.fillStyle = '#FFE4B5';
            ctx.fillRect(player.x + 8, player.y + 5, 14, 10); // Face
            ctx.fillStyle = '#000';
            ctx.fillRect(player.x + 10, player.y + 7, 2, 2); // Eyes
            ctx.fillRect(player.x + 18, player.y + 7, 2, 2);
          }
          
          document.addEventListener('keydown', (e) => keys[e.key] = true);
          document.addEventListener('keyup', (e) => keys[e.key] = false);
          
          initLevel();
        `,controls:"WASD/Arrow keys to move, SPACE/W/UP to jump",extraUI:'<div>Lives: <span id="lives">3</span></div>'},strategy:{title:"Tower Defense Master",gameLogic:`
          let towers = [];
          let enemies = [];
          let projectiles = [];
          let path = [];
          let money = 500;
          let lives = 20;
          let wave = 1;
          let enemiesSpawned = 0;
          let gameRunning = true;
          let selectedTowerType = 'basic';
          
          function initPath() {
            path = [
              { x: 0, y: 300 },
              { x: 150, y: 300 },
              { x: 150, y: 150 },
              { x: 350, y: 150 },
              { x: 350, y: 450 },
              { x: 550, y: 450 },
              { x: 550, y: 250 },
              { x: 600, y: 250 }
            ];
          }
          
          function spawnEnemy() {
            if (enemiesSpawned < wave * 10) {
              enemies.push({
                x: path[0].x,
                y: path[0].y,
                width: 20,
                height: 20,
                health: 50 + wave * 20,
                maxHealth: 50 + wave * 20,
                speed: 1 + wave * 0.2,
                pathIndex: 0,
                reward: 20 + wave * 5
              });
              enemiesSpawned++;
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Spawn enemies
            if (Math.random() < 0.02 && enemiesSpawned < wave * 10) {
              spawnEnemy();
            }
            
            // Update enemies
            enemies.forEach((enemy, enemyIndex) => {
              if (enemy.pathIndex < path.length - 1) {
                let target = path[enemy.pathIndex + 1];
                let dx = target.x - enemy.x;
                let dy = target.y - enemy.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 10) {
                  enemy.pathIndex++;
                } else {
                  enemy.x += (dx / distance) * enemy.speed;
                  enemy.y += (dy / distance) * enemy.speed;
                }
              } else {
                // Enemy reached end
                lives--;
                enemies.splice(enemyIndex, 1);
                document.getElementById('lives').textContent = lives;
                
                if (lives <= 0) {
                  endGame('💀 Base Destroyed!', \`You survived \${wave} waves!\`);
                }
              }
            });
            
            // Update towers
            towers.forEach(tower => {
              tower.cooldown = Math.max(0, tower.cooldown - 1);
              
              if (tower.cooldown === 0) {
                // Find nearest enemy in range
                let nearestEnemy = null;
                let nearestDistance = tower.range;
                
                enemies.forEach(enemy => {
                  let distance = Math.sqrt(
                    Math.pow(enemy.x - tower.x, 2) + Math.pow(enemy.y - tower.y, 2)
                  );
                  
                  if (distance < nearestDistance) {
                    nearestEnemy = enemy;
                    nearestDistance = distance;
                  }
                });
                
                if (nearestEnemy) {
                  // Shoot projectile
                  projectiles.push({
                    x: tower.x,
                    y: tower.y,
                    targetX: nearestEnemy.x,
                    targetY: nearestEnemy.y,
                    damage: tower.damage,
                    speed: 5
                  });
                  
                  tower.cooldown = tower.fireRate;
                }
              }
            });
            
            // Update projectiles
            projectiles.forEach((projectile, projIndex) => {
              let dx = projectile.targetX - projectile.x;
              let dy = projectile.targetY - projectile.y;
              let distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < projectile.speed) {
                // Hit target area, check for enemies
                enemies.forEach((enemy, enemyIndex) => {
                  let enemyDistance = Math.sqrt(
                    Math.pow(enemy.x - projectile.x, 2) + Math.pow(enemy.y - projectile.y, 2)
                  );
                  
                  if (enemyDistance < 25) {
                    enemy.health -= projectile.damage;
                    
                    if (enemy.health <= 0) {
                      money += enemy.reward;
                      enemies.splice(enemyIndex, 1);
                      document.getElementById('money').textContent = money;
                    }
                  }
                });
                
                projectiles.splice(projIndex, 1);
              } else {
                projectile.x += (dx / distance) * projectile.speed;
                projectile.y += (dy / distance) * projectile.speed;
              }
            });
            
            // Check wave completion
            if (enemiesSpawned >= wave * 10 && enemies.length === 0) {
              wave++;
              enemiesSpawned = 0;
              money += 100;
              document.getElementById('wave').textContent = wave;
              document.getElementById('money').textContent = money;
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background
            ctx.fillStyle = '#90EE90';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw path
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 30;
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            for (let i = 1; i < path.length; i++) {
              ctx.lineTo(path[i].x, path[i].y);
            }
            ctx.stroke();
            
            // Draw towers
            towers.forEach(tower => {
              ctx.fillStyle = tower.type === 'basic' ? '#4169E1' : '#8A2BE2';
              ctx.fillRect(tower.x - 15, tower.y - 15, 30, 30);
              
              // Draw range circle when selected
              if (tower === selectedTower) {
                ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(tower.x, tower.y, tower.range, 0, Math.PI * 2);
                ctx.stroke();
              }
            });
            
            // Draw enemies
            enemies.forEach(enemy => {
              ctx.fillStyle = '#FF0000';
              ctx.fillRect(enemy.x - 10, enemy.y - 10, enemy.width, enemy.height);
              
              // Health bar
              ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
              ctx.fillRect(enemy.x - 12, enemy.y - 18, 24, 4);
              ctx.fillStyle = '#00FF00';
              ctx.fillRect(enemy.x - 12, enemy.y - 18, 24 * (enemy.health / enemy.maxHealth), 4);
            });
            
            // Draw projectiles
            ctx.fillStyle = '#FFFF00';
            projectiles.forEach(projectile => {
              ctx.beginPath();
              ctx.arc(projectile.x, projectile.y, 3, 0, Math.PI * 2);
              ctx.fill();
            });
            
            // Draw UI
            ctx.fillStyle = '#000';
            ctx.font = '16px Arial';
            ctx.fillText('Click to place towers', 10, 30);
            ctx.fillText(\`Basic Tower: $100 (Selected: \${selectedTowerType})\`, 10, 50);
          }
          
          let selectedTower = null;
          
          canvas.addEventListener('click', (e) => {
            if (!gameRunning) return;
            
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Check if clicking on existing tower
            let clickedTower = null;
            towers.forEach(tower => {
              if (Math.abs(clickX - tower.x) < 20 && Math.abs(clickY - tower.y) < 20) {
                clickedTower = tower;
              }
            });
            
            if (clickedTower) {
              selectedTower = clickedTower;
            } else if (money >= 100) {
              // Place new tower
              let canPlace = true;
              
              // Check if too close to path
              path.forEach(point => {
                if (Math.abs(clickX - point.x) < 40 && Math.abs(clickY - point.y) < 40) {
                  canPlace = false;
                }
              });
              
              // Check if too close to other towers
              towers.forEach(tower => {
                if (Math.abs(clickX - tower.x) < 40 && Math.abs(clickY - tower.y) < 40) {
                  canPlace = false;
                }
              });
              
              if (canPlace) {
                towers.push({
                  x: clickX,
                  y: clickY,
                  type: 'basic',
                  damage: 25,
                  range: 80,
                  fireRate: 30,
                  cooldown: 0
                });
                
                money -= 100;
                document.getElementById('money').textContent = money;
              }
            }
          });
          
          initPath();
        `,controls:"Click to place towers and defend your base",extraUI:'<div>Money: $<span id="money">500</span></div><div>Lives: <span id="lives">20</span></div><div>Wave: <span id="wave">1</span></div>'},arcade:{title:"Retro Asteroid Blaster",gameLogic:`
          let ship = { x: 300, y: 300, angle: 0, velocityX: 0, velocityY: 0, size: 15 };
          let bullets = [];
          let asteroids = [];
          let particles = [];
          let score = 0;
          let lives = 3;
          let gameRunning = true;
          let keys = {};
          let level = 1;
          
          function createAsteroid(x, y, size) {
            asteroids.push({
              x: x || Math.random() * canvas.width,
              y: y || Math.random() * canvas.height,
              velocityX: (Math.random() - 0.5) * 4,
              velocityY: (Math.random() - 0.5) * 4,
              angle: Math.random() * Math.PI * 2,
              angularVelocity: (Math.random() - 0.5) * 0.2,
              size: size || (20 + Math.random() * 30),
              health: size ? Math.floor(size / 10) : 3
            });
          }
          
          function createParticle(x, y) {
            for (let i = 0; i < 8; i++) {
              particles.push({
                x: x,
                y: y,
                velocityX: (Math.random() - 0.5) * 8,
                velocityY: (Math.random() - 0.5) * 8,
                life: 30,
                maxLife: 30
              });
            }
          }
          
          function initLevel() {
            asteroids = [];
            for (let i = 0; i < 5 + level; i++) {
              createAsteroid();
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Ship controls
            if (keys['ArrowLeft'] || keys['a']) ship.angle -= 0.2;
            if (keys['ArrowRight'] || keys['d']) ship.angle += 0.2;
            if (keys['ArrowUp'] || keys['w']) {
              ship.velocityX += Math.cos(ship.angle) * 0.3;
              ship.velocityY += Math.sin(ship.angle) * 0.3;
            }
            if (keys[' '] && Math.random() < 0.2) {
              bullets.push({
                x: ship.x + Math.cos(ship.angle) * ship.size,
                y: ship.y + Math.sin(ship.angle) * ship.size,
                velocityX: Math.cos(ship.angle) * 8,
                velocityY: Math.sin(ship.angle) * 8,
                life: 60
              });
            }
            
            // Apply friction to ship
            ship.velocityX *= 0.98;
            ship.velocityY *= 0.98;
            
            // Update ship position
            ship.x += ship.velocityX;
            ship.y += ship.velocityY;
            
            // Wrap ship around screen
            if (ship.x < 0) ship.x = canvas.width;
            if (ship.x > canvas.width) ship.x = 0;
            if (ship.y < 0) ship.y = canvas.height;
            if (ship.y > canvas.height) ship.y = 0;
            
            // Update bullets
            bullets.forEach((bullet, bulletIndex) => {
              bullet.x += bullet.velocityX;
              bullet.y += bullet.velocityY;
              bullet.life--;
              
              // Wrap bullets
              if (bullet.x < 0) bullet.x = canvas.width;
              if (bullet.x > canvas.width) bullet.x = 0;
              if (bullet.y < 0) bullet.y = canvas.height;
              if (bullet.y > canvas.height) bullet.y = 0;
              
              if (bullet.life <= 0) {
                bullets.splice(bulletIndex, 1);
              }
            });
            
            // Update asteroids
            asteroids.forEach((asteroid, asteroidIndex) => {
              asteroid.x += asteroid.velocityX;
              asteroid.y += asteroid.velocityY;
              asteroid.angle += asteroid.angularVelocity;
              
              // Wrap asteroids
              if (asteroid.x < -asteroid.size) asteroid.x = canvas.width + asteroid.size;
              if (asteroid.x > canvas.width + asteroid.size) asteroid.x = -asteroid.size;
              if (asteroid.y < -asteroid.size) asteroid.y = canvas.height + asteroid.size;
              if (asteroid.y > canvas.height + asteroid.size) asteroid.y = -asteroid.size;
              
              // Check collision with ship
              let shipDistance = Math.sqrt(
                Math.pow(ship.x - asteroid.x, 2) + Math.pow(ship.y - asteroid.y, 2)
              );
              
              if (shipDistance < ship.size + asteroid.size) {
                lives--;
                document.getElementById('lives').textContent = lives;
                createParticle(ship.x, ship.y);
                
                if (lives <= 0) {
                  endGame('💥 Game Over!', \`Final Score: \${score}\`);
                } else {
                  // Respawn ship in center
                  ship.x = canvas.width / 2;
                  ship.y = canvas.height / 2;
                  ship.velocityX = 0;
                  ship.velocityY = 0;
                }
              }
              
              // Check collision with bullets
              bullets.forEach((bullet, bulletIndex) => {
                let bulletDistance = Math.sqrt(
                  Math.pow(bullet.x - asteroid.x, 2) + Math.pow(bullet.y - asteroid.y, 2)
                );
                
                if (bulletDistance < asteroid.size) {
                  asteroid.health--;
                  bullets.splice(bulletIndex, 1);
                  createParticle(asteroid.x, asteroid.y);
                  
                  if (asteroid.health <= 0) {
                    score += Math.floor(asteroid.size);
                    document.getElementById('score').textContent = score;
                    
                    // Split large asteroids
                    if (asteroid.size > 15) {
                      createAsteroid(asteroid.x, asteroid.y, asteroid.size * 0.6);
                      createAsteroid(asteroid.x, asteroid.y, asteroid.size * 0.6);
                    }
                    
                    asteroids.splice(asteroidIndex, 1);
                  }
                }
              });
            });
            
            // Update particles
            particles.forEach((particle, particleIndex) => {
              particle.x += particle.velocityX;
              particle.y += particle.velocityY;
              particle.life--;
              
              if (particle.life <= 0) {
                particles.splice(particleIndex, 1);
              }
            });
            
            // Check level completion
            if (asteroids.length === 0) {
              level++;
              document.getElementById('level').textContent = level;
              score += 1000;
              document.getElementById('score').textContent = score;
              initLevel();
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw space background
            ctx.fillStyle = '#000011';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw stars
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 100; i++) {
              let x = (i * 37) % canvas.width;
              let y = (i * 23) % canvas.height;
              ctx.fillRect(x, y, 1, 1);
            }
            
            // Draw ship
            ctx.save();
            ctx.translate(ship.x, ship.y);
            ctx.rotate(ship.angle);
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(ship.size, 0);
            ctx.lineTo(-ship.size, -ship.size/2);
            ctx.lineTo(-ship.size/2, 0);
            ctx.lineTo(-ship.size, ship.size/2);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
            
            // Draw bullets
            ctx.fillStyle = '#ffff00';
            bullets.forEach(bullet => {
              ctx.beginPath();
              ctx.arc(bullet.x, bullet.y, 2, 0, Math.PI * 2);
              ctx.fill();
            });
            
            // Draw asteroids
            asteroids.forEach(asteroid => {
              ctx.save();
              ctx.translate(asteroid.x, asteroid.y);
              ctx.rotate(asteroid.angle);
              ctx.strokeStyle = '#888888';
              ctx.lineWidth = 2;
              ctx.beginPath();
              
              // Draw irregular asteroid shape
              for (let i = 0; i < 8; i++) {
                let angle = (i / 8) * Math.PI * 2;
                let radius = asteroid.size * (0.8 + Math.sin(i) * 0.2);
                let x = Math.cos(angle) * radius;
                let y = Math.sin(angle) * radius;
                
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              
              ctx.closePath();
              ctx.stroke();
              ctx.restore();
            });
            
            // Draw particles
            particles.forEach(particle => {
              let alpha = particle.life / particle.maxLife;
              ctx.fillStyle = \`rgba(255, 100, 0, \${alpha})\`;
              ctx.fillRect(particle.x, particle.y, 2, 2);
            });
          }
          
          document.addEventListener('keydown', (e) => keys[e.key] = true);
          document.addEventListener('keyup', (e) => keys[e.key] = false);
          
          initLevel();
        `,controls:"Arrow keys/WASD to move and rotate, SPACE to shoot",extraUI:'<div>Lives: <span id="lives">3</span></div><div>Level: <span id="level">1</span></div>'},"flappy-bird":{title:"Flappy Bird Classic",gameLogic:`
          let bird = { x: 100, y: 300, velocity: 0, size: 30 };
          let pipes = [];
          let score = 0;
          let gameRunning = true;
          let gravity = 0.6;
          let jumpPower = -12;
          
          function createPipe() {
            const gap = 150;
            const pipeHeight = Math.random() * 200 + 100;
            pipes.push({
              x: canvas.width,
              topHeight: pipeHeight,
              bottomY: pipeHeight + gap,
              bottomHeight: canvas.height - (pipeHeight + gap),
              passed: false
            });
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            bird.velocity += gravity;
            bird.y += bird.velocity;
            
            // Create pipes
            if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
              createPipe();
            }
            
            // Update pipes
            pipes.forEach((pipe, index) => {
              pipe.x -= 3;
              
              // Score when passing pipe
              if (!pipe.passed && bird.x > pipe.x + 60) {
                pipe.passed = true;
                score++;
                document.getElementById('score').textContent = score;
              }
              
              // Remove off-screen pipes
              if (pipe.x < -60) {
                pipes.splice(index, 1);
              }
              
              // Collision detection
              if (bird.x < pipe.x + 60 && bird.x + bird.size > pipe.x) {
                if (bird.y < pipe.topHeight || bird.y + bird.size > pipe.bottomY) {
                  endGame('💥 Crashed!', \`You flew through \${score} pipes!\`);
                }
              }
            });
            
            // Ground and ceiling collision
            if (bird.y + bird.size > canvas.height || bird.y < 0) {
              endGame('💥 Crashed!', \`You flew through \${score} pipes!\`);
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background
            let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#87CEEB');
            gradient.addColorStop(1, '#98FB98');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw bird
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(bird.x, bird.y, bird.size, bird.size);
            
            // Add bird details
            ctx.fillStyle = '#FF4500';
            ctx.fillRect(bird.x + bird.size, bird.y + bird.size/2 - 2, 8, 4); // Beak
            ctx.fillStyle = '#000';
            ctx.fillRect(bird.x + 5, bird.y + 5, 4, 4); // Eye
            
            // Draw pipes
            ctx.fillStyle = '#228B22';
            pipes.forEach(pipe => {
              ctx.fillRect(pipe.x, 0, 60, pipe.topHeight);
              ctx.fillRect(pipe.x, pipe.bottomY, 60, pipe.bottomHeight);
              
              // Pipe caps
              ctx.fillStyle = '#32CD32';
              ctx.fillRect(pipe.x - 5, pipe.topHeight - 20, 70, 20);
              ctx.fillRect(pipe.x - 5, pipe.bottomY, 70, 20);
              ctx.fillStyle = '#228B22';
            });
          }
          
          function jump() {
            if (gameRunning) {
              bird.velocity = jumpPower;
            }
          }
          
          document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
              e.preventDefault();
              jump();
            }
          });
          
          document.addEventListener('click', jump);
        `,controls:"Press SPACE, UP arrow, or click to flap"},"speed-runner":{title:"Endless Speed Runner",gameLogic:`
          let player = { x: 100, y: 400, width: 30, height: 40, velocity: 0, onGround: false };
          let obstacles = [];
          let platforms = [];
          let collectibles = [];
          let score = 0;
          let gameRunning = true;
          let speed = 5;
          let distance = 0;
          
          // Create initial platforms
          for (let i = 0; i < 10; i++) {
            platforms.push({ x: i * 200, y: 450, width: 150, height: 20 });
          }
          
          function createObstacle() {
            if (Math.random() < 0.02) {
              obstacles.push({
                x: canvas.width,
                y: 420,
                width: 30,
                height: 30,
                type: 'spike'
              });
            }
          }
          
          function createCollectible() {
            if (Math.random() < 0.01) {
              collectibles.push({
                x: canvas.width,
                y: 350,
                width: 20,
                height: 20,
                collected: false,
                type: Math.random() < 0.7 ? 'coin' : 'gem'
              });
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            distance += speed;
            speed += 0.001; // Gradually increase speed
            
            // Player physics
            player.velocity += 0.8; // gravity
            player.y += player.velocity;
            player.onGround = false;
            
            // Platform collision
            platforms.forEach(platform => {
              if (player.x < platform.x + platform.width &&
                  player.x + player.width > platform.x &&
                  player.y + player.height > platform.y &&
                  player.y + player.height < platform.y + platform.height + 10) {
                player.y = platform.y - player.height;
                player.velocity = 0;
                player.onGround = true;
              }
            });
            
            // Update obstacles
            createObstacle();
            obstacles.forEach((obstacle, index) => {
              obstacle.x -= speed;
              
              // Collision with player
              if (player.x < obstacle.x + obstacle.width &&
                  player.x + player.width > obstacle.x &&
                  player.y < obstacle.y + obstacle.height &&
                  player.y + player.height > obstacle.y) {
                endGame('💥 Crashed!', \`You ran \${Math.floor(distance / 10)} meters!\`);
              }
              
              if (obstacle.x < -obstacle.width) {
                obstacles.splice(index, 1);
              }
            });
            
            // Update collectibles
            createCollectible();
            collectibles.forEach((collectible, index) => {
              collectible.x -= speed;
              
              if (!collectible.collected &&
                  player.x < collectible.x + collectible.width &&
                  player.x + player.width > collectible.x &&
                  player.y < collectible.y + collectible.height &&
                  player.y + player.height > collectible.y) {
                collectible.collected = true;
                score += collectible.type === 'coin' ? 10 : 50;
                document.getElementById('score').textContent = score;
              }
              
              if (collectible.x < -collectible.width) {
                collectibles.splice(index, 1);
              }
            });
            
            // Update platforms
            platforms.forEach((platform, index) => {
              platform.x -= speed;
              if (platform.x < -platform.width) {
                platforms.splice(index, 1);
                platforms.push({
                  x: platforms[platforms.length - 1].x + 200,
                  y: 450,
                  width: 150,
                  height: 20
                });
              }
            });
            
            // Update distance score
            document.getElementById('distance').textContent = Math.floor(distance / 10);
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background with parallax
            let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#87CEEB');
            gradient.addColorStop(1, '#98FB98');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw moving clouds
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            for (let i = 0; i < 5; i++) {
              let x = (i * 150 - distance * 0.2) % (canvas.width + 100);
              ctx.beginPath();
              ctx.arc(x, 80 + i * 20, 20, 0, Math.PI * 2);
              ctx.arc(x + 20, 80 + i * 20, 25, 0, Math.PI * 2);
              ctx.arc(x + 40, 80 + i * 20, 20, 0, Math.PI * 2);
              ctx.fill();
            }
            
            // Draw platforms
            ctx.fillStyle = '#8B4513';
            platforms.forEach(platform => {
              ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
              // Add grass
              ctx.fillStyle = '#228B22';
              ctx.fillRect(platform.x, platform.y, platform.width, 5);
              ctx.fillStyle = '#8B4513';
            });
            
            // Draw player with running animation
            ctx.fillStyle = '#FF6B6B';
            let bounce = Math.sin(Date.now() * 0.02) * 2;
            ctx.fillRect(player.x, player.y + bounce, player.width, player.height);
            
            // Player details
            ctx.fillStyle = '#FFE4B5';
            ctx.fillRect(player.x + 8, player.y + 5 + bounce, 14, 10); // Face
            ctx.fillStyle = '#000';
            ctx.fillRect(player.x + 10, player.y + 7 + bounce, 2, 2); // Eyes
            ctx.fillRect(player.x + 18, player.y + 7 + bounce, 2, 2);
            
            // Draw obstacles
            ctx.fillStyle = '#FF0000';
            obstacles.forEach(obstacle => {
              ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
              // Add spikes
              ctx.fillStyle = '#8B0000';
              for (let i = 0; i < 3; i++) {
                ctx.fillRect(obstacle.x + i * 10, obstacle.y - 5, 5, 5);
              }
              ctx.fillStyle = '#FF0000';
            });
            
            // Draw collectibles
            collectibles.forEach(collectible => {
              if (!collectible.collected) {
                ctx.fillStyle = collectible.type === 'coin' ? '#FFD700' : '#9B59B6';
                ctx.beginPath();
                ctx.arc(collectible.x + collectible.width/2, collectible.y + collectible.height/2, collectible.width/2, 0, Math.PI * 2);
                ctx.fill();
                
                // Add sparkle
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(collectible.x + 5, collectible.y + 5, 2, 2);
                ctx.fillRect(collectible.x + 13, collectible.y + 13, 2, 2);
              }
            });
          }
          
          document.addEventListener('keydown', (e) => {
            if ((e.code === 'Space' || e.code === 'ArrowUp') && player.onGround) {
              player.velocity = -15;
            }
          });
        `,controls:"Press SPACE or UP arrow to jump over obstacles",extraUI:'<div>Distance: <span id="distance">0</span>m</div>'},"whack-mole":{title:"Whack-a-Mole Frenzy",gameLogic:`
          let moles = [];
          let score = 0;
          let gameRunning = true;
          let timeLeft = 60;
          let molePositions = [
            {x: 100, y: 200}, {x: 300, y: 200}, {x: 500, y: 200},
            {x: 100, y: 350}, {x: 300, y: 350}, {x: 500, y: 350},
            {x: 200, y: 275}, {x: 400, y: 275}
          ];
          
          // Initialize moles
          molePositions.forEach((pos, index) => {
            moles.push({
              x: pos.x,
              y: pos.y,
              width: 80,
              height: 80,
              visible: false,
              timeVisible: 0,
              id: index,
              type: Math.random() < 0.8 ? 'normal' : 'golden'
            });
          });
          
          function showRandomMole() {
            if (!gameRunning) return;
            
            const availableMoles = moles.filter(m => !m.visible);
            if (availableMoles.length > 0) {
              const randomMole = availableMoles[Math.floor(Math.random() * availableMoles.length)];
              randomMole.visible = true;
              randomMole.timeVisible = 0;
              randomMole.type = Math.random() < 0.9 ? 'normal' : 'golden';
            }
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            // Update timer
            timeLeft -= 1/60;
            document.getElementById('timer').textContent = Math.ceil(timeLeft);
            
            if (timeLeft <= 0) {
              endGame('⏰ Time Up!', \`Final Score: \${score} points!\`);
              return;
            }
            
            // Update moles
            moles.forEach(mole => {
              if (mole.visible) {
                mole.timeVisible += 1/60;
                let hideTime = mole.type === 'golden' ? 1.0 : 1.5;
                if (mole.timeVisible > hideTime) {
                  mole.visible = false;
                  mole.timeVisible = 0;
                }
              }
            });
            
            // Randomly show moles
            if (Math.random() < 0.03) {
              showRandomMole();
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background
            ctx.fillStyle = '#90EE90';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw holes
            ctx.fillStyle = '#654321';
            moles.forEach(mole => {
              ctx.beginPath();
              ctx.arc(mole.x + mole.width/2, mole.y + mole.height/2, mole.width/2, 0, Math.PI * 2);
              ctx.fill();
              
              // Hole shadow
              ctx.fillStyle = '#4A4A4A';
              ctx.beginPath();
              ctx.arc(mole.x + mole.width/2, mole.y + mole.height/2, mole.width/2 - 5, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = '#654321';
            });
            
            // Draw moles
            moles.forEach(mole => {
              if (mole.visible) {
                // Mole body
                ctx.fillStyle = mole.type === 'golden' ? '#FFD700' : '#8B4513';
                let popHeight = Math.sin(mole.timeVisible * 10) * 5;
                ctx.fillRect(mole.x + 15, mole.y + 20 + popHeight, mole.width - 30, mole.height - 30);
                
                // Mole face
                ctx.fillStyle = mole.type === 'golden' ? '#FFA500' : '#654321';
                ctx.fillRect(mole.x + 20, mole.y + 25 + popHeight, mole.width - 40, mole.height - 50);
                
                // Eyes
                ctx.fillStyle = '#000';
                ctx.fillRect(mole.x + 30, mole.y + 35 + popHeight, 6, 6);
                ctx.fillRect(mole.x + 50, mole.y + 35 + popHeight, 6, 6);
                
                // Nose
                ctx.fillStyle = '#FF69B4';
                ctx.fillRect(mole.x + 42, mole.y + 45 + popHeight, 4, 3);
                
                // Score indicator for golden moles
                if (mole.type === 'golden') {
                  ctx.fillStyle = '#FFD700';
                  ctx.font = '12px Arial';
                  ctx.fillText('BONUS!', mole.x + 25, mole.y + 15);
                }
              }
            });
            
            // Draw hammer cursor effect
            ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
            ctx.beginPath();
            ctx.arc(mouseX || 0, mouseY || 0, 20, 0, Math.PI * 2);
            ctx.fill();
          }
          
          let mouseX = 0, mouseY = 0;
          
          canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
          });
          
          canvas.addEventListener('click', (e) => {
            if (!gameRunning) return;
            
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            let hit = false;
            moles.forEach(mole => {
              if (mole.visible &&
                  clickX >= mole.x && clickX <= mole.x + mole.width &&
                  clickY >= mole.y && clickY <= mole.y + mole.height) {
                mole.visible = false;
                mole.timeVisible = 0;
                
                let points = mole.type === 'golden' ? 50 : 10;
                score += points;
                document.getElementById('score').textContent = score;
                hit = true;
                
                // Visual feedback
                ctx.fillStyle = mole.type === 'golden' ? '#FFD700' : '#00FF00';
                ctx.font = '20px Arial';
                ctx.fillText(\`+\${points}\`, clickX, clickY - 10);
              }
            });
            
            // Miss penalty
            if (!hit) {
              score = Math.max(0, score - 5);
              document.getElementById('score').textContent = score;
            }
          });
        `,controls:"Click on moles when they pop up! Golden moles are worth more!",extraUI:'<div>Time: <span id="timer">60</span>s</div>'},"match-3":{title:"Gem Match Master",gameLogic:`
          let grid = [];
          let gridSize = 8;
          let tileSize = 60;
          let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF8C42'];
          let selectedTile = null;
          let score = 0;
          let gameRunning = true;
          let moves = 30;
          let target = 1000;
          
          function initGrid() {
            grid = [];
            for (let row = 0; row < gridSize; row++) {
              grid[row] = [];
              for (let col = 0; col < gridSize; col++) {
                grid[row][col] = {
                  color: colors[Math.floor(Math.random() * colors.length)],
                  x: col * tileSize + 50,
                  y: row * tileSize + 50,
                  row: row,
                  col: col,
                  falling: false,
                  fallSpeed: 0
                };
              }
            }
            
            // Ensure no initial matches
            removeInitialMatches();
          }
          
          function removeInitialMatches() {
            let hasMatches = true;
            while (hasMatches) {
              hasMatches = false;
              for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                  if (checkMatchAt(row, col)) {
                    grid[row][col].color = colors[Math.floor(Math.random() * colors.length)];
                    hasMatches = true;
                  }
                }
              }
            }
          }
          
          function checkMatchAt(row, col) {
            let color = grid[row][col].color;
            
            // Check horizontal
            let horizontalCount = 1;
            for (let c = col - 1; c >= 0 && grid[row][c].color === color; c--) horizontalCount++;
            for (let c = col + 1; c < gridSize && grid[row][c].color === color; c++) horizontalCount++;
            
            // Check vertical
            let verticalCount = 1;
            for (let r = row - 1; r >= 0 && grid[r][col].color === color; r--) verticalCount++;
            for (let r = row + 1; r < gridSize && grid[r][col].color === color; r++) verticalCount++;
            
            return horizontalCount >= 3 || verticalCount >= 3;
          }
          
          function findMatches() {
            let matches = [];
            
            // Check horizontal matches
            for (let row = 0; row < gridSize; row++) {
              let count = 1;
              let currentColor = grid[row][0].color;
              for (let col = 1; col < gridSize; col++) {
                if (grid[row][col].color === currentColor) {
                  count++;
                } else {
                  if (count >= 3) {
                    for (let i = col - count; i < col; i++) {
                      matches.push({row: row, col: i});
                    }
                  }
                  count = 1;
                  currentColor = grid[row][col].color;
                }
              }
              if (count >= 3) {
                for (let i = gridSize - count; i < gridSize; i++) {
                  matches.push({row: row, col: i});
                }
              }
            }
            
            // Check vertical matches
            for (let col = 0; col < gridSize; col++) {
              let count = 1;
              let currentColor = grid[0][col].color;
              for (let row = 1; row < gridSize; row++) {
                if (grid[row][col].color === currentColor) {
                  count++;
                } else {
                  if (count >= 3) {
                    for (let i = row - count; i < row; i++) {
                      matches.push({row: i, col: col});
                    }
                  }
                  count = 1;
                  currentColor = grid[row][col].color;
                }
              }
              if (count >= 3) {
                for (let i = gridSize - count; i < gridSize; i++) {
                  matches.push({row: i, col: col});
                }
              }
            }
            
            return matches;
          }
          
          function removeMatches(matches) {
            matches.forEach(match => {
              grid[match.row][match.col].color = null;
            });
            
            let points = matches.length * 10;
            if (matches.length >= 4) points *= 2;
            if (matches.length >= 5) points *= 3;
            
            score += points;
            document.getElementById('score').textContent = score;
            
            if (score >= target) {
              endGame('🏆 Target Reached!', \`Congratulations! You reached \${target} points!\`);
            }
          }
          
          function dropTiles() {
            for (let col = 0; col < gridSize; col++) {
              let writePos = gridSize - 1;
              for (let row = gridSize - 1; row >= 0; row--) {
                if (grid[row][col].color !== null) {
                  if (row !== writePos) {
                    grid[writePos][col].color = grid[row][col].color;
                    grid[row][col].color = null;
                  }
                  writePos--;
                }
              }
              
              // Fill empty spaces with new tiles
              for (let row = writePos; row >= 0; row--) {
                grid[row][col].color = colors[Math.floor(Math.random() * colors.length)];
              }
            }
          }
          
          function swapTiles(tile1, tile2) {
            let tempColor = grid[tile1.row][tile1.col].color;
            grid[tile1.row][tile1.col].color = grid[tile2.row][tile2.col].color;
            grid[tile2.row][tile2.col].color = tempColor;
          }
          
          function updateGame() {
            if (!gameRunning) return;
            
            let matches = findMatches();
            if (matches.length > 0) {
              removeMatches(matches);
              dropTiles();
            }
            
            if (moves <= 0 && score < target) {
              endGame('😞 Out of Moves!', \`You scored \${score} out of \${target} points!\`);
            }
          }
          
          function drawGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background
            let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#2C3E50');
            gradient.addColorStop(1, '#34495E');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw grid background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(45, 45, gridSize * tileSize + 10, gridSize * tileSize + 10);
            
            // Draw grid
            for (let row = 0; row < gridSize; row++) {
              for (let col = 0; col < gridSize; col++) {
                let tile = grid[row][col];
                if (tile.color) {
                  // Draw gem with gradient
                  let gemGradient = ctx.createRadialGradient(
                    tile.x + tileSize/2, tile.y + tileSize/2, 0,
                    tile.x + tileSize/2, tile.y + tileSize/2, tileSize/2
                  );
                  gemGradient.addColorStop(0, tile.color);
                  gemGradient.addColorStop(1, darkenColor(tile.color));
                  
                  ctx.fillStyle = gemGradient;
                  ctx.fillRect(tile.x + 2, tile.y + 2, tileSize - 4, tileSize - 4);
                  
                  // Add shine effect
                  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                  ctx.fillRect(tile.x + 8, tile.y + 8, tileSize/3, tileSize/3);
                  
                  // Highlight selected tile
                  if (selectedTile && selectedTile.row === row && selectedTile.col === col) {
                    ctx.strokeStyle = '#FFD700';
                    ctx.lineWidth = 4;
                    ctx.strokeRect(tile.x, tile.y, tileSize, tileSize);
                  }
                }
              }
            }
            
            // Draw UI
            ctx.fillStyle = '#fff';
            ctx.font = '18px Arial';
            ctx.fillText(\`Target: \${target}\`, 50, 30);
            ctx.fillText(\`Moves: \${moves}\`, 200, 30);
          }
          
          function darkenColor(color) {
            // Simple color darkening
            return color.replace(/[0-9A-F]/gi, (match) => {
              let val = parseInt(match, 16);
              return Math.max(0, val - 3).toString(16);
            });
          }
          
          canvas.addEventListener('click', (e) => {
            if (!gameRunning || moves <= 0) return;
            
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            let clickedTile = null;
            for (let row = 0; row < gridSize; row++) {
              for (let col = 0; col < gridSize; col++) {
                let tile = grid[row][col];
                if (clickX >= tile.x && clickX <= tile.x + tileSize &&
                    clickY >= tile.y && clickY <= tile.y + tileSize) {
                  clickedTile = {row: row, col: col};
                  break;
                }
              }
            }
            
            if (clickedTile) {
              if (!selectedTile) {
                selectedTile = clickedTile;
              } else {
                // Check if tiles are adjacent
                let rowDiff = Math.abs(selectedTile.row - clickedTile.row);
                let colDiff = Math.abs(selectedTile.col - clickedTile.col);
                
                if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
                  swapTiles(selectedTile, clickedTile);
                  let matches = findMatches();
                  if (matches.length === 0) {
                    // Swap back if no matches
                    swapTiles(selectedTile, clickedTile);
                  } else {
                    moves--;
                    document.getElementById('moves').textContent = moves;
                  }
                }
                selectedTile = null;
              }
            }
          });
          
          initGrid();
        `,controls:"Click gems to select, then click adjacent gem to swap",extraUI:'<div>Moves: <span id="moves">30</span></div><div>Target: 1000</div>'},"crossy-road":{title:"Crossy Road Adventure",gameLogic:`
    let player = { x: 300, y: 550, size: 30, row: 0 };
    let cars = [];
    let logs = [];
    let score = 0;
    let gameRunning = true;
    let roadRows = [2, 3, 5, 6, 8, 9, 11, 12];
    let riverRows = [1, 4, 7, 10];
    let bestScore = localStorage.getItem('crossyRoadBest') || 0;

    function createCar(row) {
      cars.push({
        x: Math.random() < 0.5 ? -80 : canvas.width + 80,
        y: (15 - row) * 40 + 10,
        width: 60,
        height: 30,
        speed: (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 4),
        row: row,
        color: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'][Math.floor(Math.random() * 5)]
      });
    }

    function createLog(row) {
      logs.push({
        x: Math.random() < 0.5 ? -120 : canvas.width + 120,
        y: (15 - row) * 40 + 10,
        width: 100,
        height: 30,
        speed: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2),
        row: row
      });
    }

    function updateGame() {
      if (!gameRunning) return;

      if (Math.random() < 0.03) {
        roadRows.forEach(row => {
          if (Math.random() < 0.4) createCar(row);
        });
        riverRows.forEach(row => {
          if (Math.random() < 0.3) createLog(row);
        });
      }

      cars.forEach((car, index) => {
        car.x += car.speed;

        if (Math.abs(player.y - car.y) < 35 &&
            player.x < car.x + car.width &&
            player.x + player.size > car.x) {
          endGame('🚗 Hit by Car!', \`You crossed \${score} rows!\`);
        }

        if (car.x < -120 || car.x > canvas.width + 120) {
          cars.splice(index, 1);
        }
      });

      let playerOnLog = false;
      logs.forEach((log, index) => {
        log.x += log.speed;

        if (Math.abs(player.y - log.y) < 35 &&
            player.x < log.x + log.width &&
            player.x + player.size > log.x) {
          player.x += log.speed;
          playerOnLog = true;
        }

        if (log.x < -150 || log.x > canvas.width + 150) {
          logs.splice(index, 1);
        }
      });

      let playerRow = Math.floor((600 - player.y) / 40);
      if (riverRows.includes(playerRow) && !playerOnLog) {
        endGame('🌊 Drowned!', \`You crossed \${score} rows!\`);
      }

      if (player.x < 0 || player.x > canvas.width - player.size) {
        endGame('🚧 Out of Bounds!', \`You crossed \${score} rows!\`);
      }

      let newScore = Math.max(score, Math.floor((600 - player.y) / 40));
      if (newScore > score) {
        score = newScore;
        document.getElementById('score').textContent = score;

        if (score > bestScore) {
          bestScore = score;
          localStorage.setItem('crossyRoadBest', bestScore);
          document.getElementById('best').textContent = bestScore;
        }
      }

      if (player.y < 40) {
        endGame('🏆 You Made It!', \`Congratulations! You crossed all \${score} rows!\`);
      }
    }

    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 15; i++) {
        let y = i * 40;
        if (roadRows.includes(14 - i)) {
          ctx.fillStyle = '#555';
          ctx.fillRect(0, y, canvas.width, 40);
          ctx.fillStyle = '#FFF';
          for (let x = 0; x < canvas.width; x += 60) {
            ctx.fillRect(x, y + 18, 30, 4);
          }
        } else if (riverRows.includes(14 - i)) {
          let waterGradient = ctx.createLinearGradient(0, y, 0, y + 40);
          waterGradient.addColorStop(0, '#4169E1');
          waterGradient.addColorStop(1, '#1E90FF');
          ctx.fillStyle = waterGradient;
          ctx.fillRect(0, y, canvas.width, 40);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          for (let x = 0; x < canvas.width; x += 40) {
            let wave = Math.sin((x + Date.now() * 0.005) * 0.1) * 3;
            ctx.fillRect(x, y + 15 + wave, 20, 2);
          }
        } else {
          let grassGradient = ctx.createLinearGradient(0, y, 0, y + 40);
          grassGradient.addColorStop(0, '#90EE90');
          grassGradient.addColorStop(1, '#228B22');
          ctx.fillStyle = grassGradient;
          ctx.fillRect(0, y, canvas.width, 40);
        }
      }

      cars.forEach(car => {
        ctx.fillStyle = car.color;
        ctx.fillRect(car.x, car.y, car.width, car.height);
        ctx.fillStyle = '#000';
        ctx.fillRect(car.x + 10, car.y + 5, 15, 8);
        ctx.fillRect(car.x + 35, car.y + 5, 15, 8);
        ctx.fillStyle = '#FFF';
        ctx.fillRect(car.x + 5, car.y + 10, 8, 6);
        ctx.fillRect(car.x + car.width - 13, car.y + 10, 8, 6);
      });

      ctx.fillStyle = '#8B4513';
      logs.forEach(log => {
        ctx.fillRect(log.x, log.y, log.width, log.height);
        ctx.fillStyle = '#A0522D';
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(log.x + i * 30, log.y + 5, 25, 3);
          ctx.fillRect(log.x + i * 30, log.y + 22, 25, 3);
        }
        ctx.fillStyle = '#8B4513';
      });

      ctx.fillStyle = '#FFD700';
      ctx.fillRect(player.x, player.y, player.size, player.size);
      ctx.fillStyle = '#FFE4B5';
      ctx.fillRect(player.x + 8, player.y + 5, 14, 10);
      ctx.fillStyle = '#000';
      ctx.fillRect(player.x + 10, player.y + 7, 2, 2);
      ctx.fillRect(player.x + 18, player.y + 7, 2, 2);
      ctx.fillRect(player.x + 13, player.y + 12, 4, 2);

      ctx.fillStyle = 'rgba(255, 215, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width, 40);
      ctx.fillStyle = '#000';
      ctx.font = '20px Arial';
      ctx.fillText('🏁 FINISH LINE 🏁', canvas.width/2 - 100, 25);
    }

    document.addEventListener('keydown', (e) => {
      if (!gameRunning) return;

      switch(e.code) {
        case 'ArrowUp':
        case 'KeyW':
          if (player.y > 0) player.y -= 40;
          break;
        case 'ArrowDown':
        case 'KeyS':
          if (player.y < canvas.height - 40) player.y += 40;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          if (player.x > 0) player.x -= 40;
          break;
        case 'ArrowRight':
        case 'KeyD':
          if (player.x < canvas.width - player.size) player.x += 40;
          break;
      }
    });

    document.getElementById('best').textContent = bestScore;
  `,controls:"WASD or Arrow keys to move. Avoid cars, use logs to cross rivers!",extraUI:'<div>Score: <span id="score">0</span></div><div>Best: <span id="best">0</span></div>'}},d=p[I.id]||p["flappy-bird"];return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${d.title}</title>
    <style>
        body { 
            margin: 0; 
            padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            font-family: 'Arial', sans-serif; 
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        #gameContainer { 
            background: linear-gradient(145deg, #ffffff, #f0f0f0); 
            border-radius: 15px; 
            padding: 25px; 
            box-shadow: 0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.07);
            text-align: center;
            border: 2px solid rgba(255,255,255,0.2);
        }
        canvas { 
            border: 3px solid #333; 
            border-radius: 10px;
            background: #f8f9fa;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        #ui { 
            margin: 20px 0; 
            display: flex; 
            justify-content: space-around; 
            font-size: 20px; 
            font-weight: bold;
            color: #2c3e50;
            background: rgba(52, 152, 219, 0.1);
            padding: 15px;
            border-radius: 10px;
        }
        #controls { 
            margin-top: 15px; 
            color: #7f8c8d; 
            font-size: 16px;
            background: rgba(149, 165, 166, 0.1);
            padding: 10px;
            border-radius: 8px;
        }
        #result { 
            position: fixed; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 40px; 
            border-radius: 20px; 
            text-align: center; 
            display: none; 
            z-index: 1000;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            min-width: 350px;
            border: 3px solid rgba(255,255,255,0.2);
        }
        #result.victory {
            background: linear-gradient(135deg, #27ae60, #2ecc71);
        }
        #result h2 { 
            margin-top: 0; 
            font-size: 32px; 
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            margin-bottom: 15px;
        }
        #result p {
            font-size: 18px;
            margin: 10px 0;
            opacity: 0.9;
        }
        #result button { 
            background: white; 
            color: #e74c3c; 
            border: none; 
            padding: 15px 30px; 
            border-radius: 30px; 
            font-size: 18px; 
            font-weight: bold;
            cursor: pointer; 
            margin: 15px 10px 5px;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        #result button:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .game-title {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 28px;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        .score-highlight {
            color: #e74c3c;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="gameContainer">
        <h1 class="game-title">${d.title}</h1>
        <div id="ui">
            <div>Score: <span id="score" class="score-highlight">0</span></div>
            ${d.extraUI||""}
        </div>
        <canvas id="gameCanvas" width="600" height="600"></canvas>
        <div id="controls">${d.controls}</div>
    </div>

    <div id="result">
        <h2 id="result-title">Game Over!</h2>
        <p id="result-message">Well played!</p>
        <p>Final Score: <span id="final-score">0</span></p>
        <button onclick="restartGame()">🎮 Play Again</button>
        <button onclick="window.parent.postMessage('close', '*')">❌ Close</button>
    </div>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        
        function endGame(title, message) {
            gameRunning = false;
            const resultDiv = document.getElementById('result');
            
            document.getElementById('result-title').textContent = title;
            document.getElementById('result-message').textContent = message;
            document.getElementById('final-score').textContent = score;
            
            // Change style based on result
            if (title.includes('🏆') || title.includes('Complete') || title.includes('Victory')) {
                resultDiv.className = 'victory';
                resultDiv.querySelector('button').style.color = '#27ae60';
            }
            
            resultDiv.style.display = 'block';
        }
        
        function restartGame() {
            location.reload();
        }
        
        ${d.gameLogic}
        
        function gameLoop() {
            updateGame();
            drawGame();
            requestAnimationFrame(gameLoop);
        }
        
        // Prevent context menu on right click
        canvas.addEventListener('contextmenu', e => e.preventDefault());
        
        gameLoop();
    <\/script>
</body>
</html>`},j=()=>{a.trim()&&(t(a.trim(),c),i(!1),s(""))};return o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"flex justify-between items-center mb-8",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-2",children:"Game Templates"}),o.jsx("p",{className:"text-gray-400",children:"Choose a template to play or edit - each game is unique and fully playable!"})]}),o.jsxs("button",{onClick:()=>i(!0),className:"flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium",children:[o.jsx(x0,{className:"w-5 h-5"}),"New Project"]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:x.map(I=>o.jsxs("div",{className:"bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 group hover:scale-105",children:[o.jsxs("div",{className:"relative",children:[o.jsx("img",{src:I.thumbnail,alt:I.name,className:"w-full h-48 object-cover"}),o.jsx("div",{className:`absolute top-3 left-3 ${I.color} p-2 rounded-lg shadow-lg`,children:I.icon}),o.jsx("div",{className:"absolute top-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-xs font-medium",children:I.type}),o.jsx("div",{className:"absolute bottom-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-xs",children:I.controls})]}),o.jsxs("div",{className:"p-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:I.name}),o.jsx("p",{className:"text-gray-400 text-sm mb-4 line-clamp-2",children:I.description}),o.jsxs("div",{className:"flex gap-2",children:[o.jsxs("button",{onClick:()=>y(I.id),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors font-medium",children:[o.jsx(vl,{className:"w-4 h-4"}),"Play"]}),o.jsxs("button",{onClick:()=>h(I.id),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-medium",children:[o.jsx(ot,{className:"w-4 h-4"}),"Edit"]})]})]})]},I.id))}),l&&o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:o.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg w-96 border border-gray-700",children:[o.jsx("h3",{className:"text-xl font-bold mb-4",children:"Create New Project"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),o.jsx("input",{type:"text",value:a,onChange:I=>s(I.target.value),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500",placeholder:"Enter project name"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Type"}),o.jsxs("select",{value:c,onChange:I=>u(I.target.value),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500",children:[o.jsx("option",{value:"2D",children:"2D Game"}),o.jsx("option",{value:"3D",children:"3D Game"})]})]}),o.jsxs("div",{className:"flex gap-2 pt-4",children:[o.jsx("button",{onClick:j,className:"flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",children:"Create"}),o.jsx("button",{onClick:()=>i(!1),className:"flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors",children:"Cancel"})]})]})]})})]})},q0=({projects:e,onProjectSelect:t,onProjectDelete:n})=>{const[r,l]=q.useState(""),[i,a]=q.useState("grid"),s=e.filter(u=>u.name.toLowerCase().includes(r.toLowerCase())),c=u=>u.toLocaleDateString()+" "+u.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"flex justify-between items-center mb-6",children:[o.jsx("h2",{className:"text-3xl font-bold text-white",children:"My Projects"}),o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsxs("div",{className:"relative",children:[o.jsx(w0,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"}),o.jsx("input",{type:"text",placeholder:"Search projects...",value:r,onChange:u=>l(u.target.value),className:"pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("button",{onClick:()=>a("grid"),className:`p-2 rounded ${i==="grid"?"bg-blue-600":"bg-gray-700"} hover:bg-blue-700 transition-colors`,children:o.jsx(yu,{className:"w-4 h-4"})}),o.jsx("button",{onClick:()=>a("list"),className:`p-2 rounded ${i==="list"?"bg-blue-600":"bg-gray-700"} hover:bg-blue-700 transition-colors`,children:o.jsx(d0,{className:"w-4 h-4"})})]})]})]}),s.length===0?o.jsxs("div",{className:"text-center py-12",children:[o.jsx("div",{className:"text-gray-400 text-lg mb-4",children:"No projects found"}),o.jsx("p",{className:"text-gray-500",children:"Create your first project to get started!"})]}):o.jsx("div",{className:i==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6":"space-y-4",children:s.map(u=>o.jsx("div",{className:`bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors group ${i==="list"?"flex items-center":""}`,children:i==="grid"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"relative",children:[o.jsx("img",{src:u.thumbnail,alt:u.name,className:"w-full h-48 object-cover"}),o.jsx("div",{className:"absolute top-3 right-3 bg-black bg-opacity-50 px-2 py-1 rounded text-xs",children:u.type})]}),o.jsxs("div",{className:"p-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:u.name}),o.jsxs("p",{className:"text-gray-400 text-sm mb-4",children:["Modified: ",c(u.lastModified)]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsxs("button",{onClick:()=>t(u),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors",children:[o.jsx(ot,{className:"w-4 h-4"}),"Edit"]}),o.jsx("button",{onClick:()=>n(u.id),className:"p-2 text-red-400 hover:text-red-300 hover:bg-red-900 rounded transition-colors",children:o.jsx(Oi,{className:"w-4 h-4"})})]})]})]}):o.jsxs("div",{className:"flex items-center w-full p-4",children:[o.jsx("img",{src:u.thumbnail,alt:u.name,className:"w-16 h-16 object-cover rounded mr-4"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-lg font-semibold text-white",children:u.name}),o.jsxs("p",{className:"text-gray-400 text-sm",children:[u.type," • Modified: ",c(u.lastModified)]})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("button",{onClick:()=>t(u),className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors",children:[o.jsx(ot,{className:"w-4 h-4"}),"Edit"]}),o.jsx("button",{onClick:()=>n(u.id),className:"p-2 text-red-400 hover:text-red-300 hover:bg-red-900 rounded transition-colors",children:o.jsx(Oi,{className:"w-4 h-4"})})]})]})},u.id))})]})},D0=()=>{const[e,t]=q.useState(""),[n,r]=q.useState(""),[l,i]=q.useState("image"),[a,s]=q.useState(!1),[c,u]=q.useState([]),x=async()=>{e.trim()&&(s(!0),setTimeout(()=>{const m={id:Date.now().toString(),name:`AI Generated ${l}`,type:l,url:v(l),prompt:e,createdAt:new Date,downloadUrl:k(l,e)};u([m,...c]),s(!1),t("")},2e3))},y=async()=>{n.trim()&&(s(!0),setTimeout(()=>{const m={id:Date.now().toString(),name:"Imported Asset",type:h(n),url:n,prompt:"Imported from URL",createdAt:new Date,downloadUrl:n};u([m,...c]),s(!1),r("")},1e3))},h=m=>m.includes(".mp3")||m.includes(".wav")||m.includes(".ogg")?"sound":m.includes(".obj")||m.includes(".fbx")||m.includes(".gltf")?"model":"image",v=(m,M)=>{const C={image:["https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=400"],sound:["https://www.soundjay.com/misc/sounds/bell-ringing-05.wav","https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav","https://www.soundjay.com/misc/sounds/success-fanfare-trumpets.wav"],model:["https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400"],texture:["https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=400","https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400"]},Y=C[m]||C.image;return Y[Math.floor(Math.random()*Y.length)]},k=(m,M)=>{switch(m){case"image":return j(M);case"sound":return I();case"model":return p(M);case"texture":return d(M);default:return""}},j=m=>{const M=document.createElement("canvas");M.width=400,M.height=400;const C=M.getContext("2d"),Y=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD"],je=Y[m.length%Y.length];C.fillStyle=je,C.fillRect(0,0,400,400),C.fillStyle="rgba(255,255,255,0.2)";for(let se=0;se<10;se++)C.fillRect(se*40,se*40,20,20);return M.toDataURL()},I=m=>"data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT",p=m=>{const M=`# AI Generated Model: ${m}
v 0.0 0.0 0.0
v 1.0 0.0 0.0
v 1.0 1.0 0.0
v 0.0 1.0 0.0
v 0.0 0.0 1.0
v 1.0 0.0 1.0
v 1.0 1.0 1.0
v 0.0 1.0 1.0
f 1 2 3 4
f 5 8 7 6
f 1 5 6 2
f 2 6 7 3
f 3 7 8 4
f 5 1 4 8`;return"data:text/plain;charset=utf-8,"+encodeURIComponent(M)},d=m=>{const M=document.createElement("canvas");M.width=256,M.height=256;const C=M.getContext("2d"),Y=`hsl(${m.length*10%360}, 70%, 50%)`;C.fillStyle=Y,C.fillRect(0,0,256,256),C.fillStyle="rgba(255,255,255,0.1)";for(let je=0;je<256;je+=16)for(let se=0;se<256;se+=16)(je+se)%32===0&&C.fillRect(je,se,8,8);return M.toDataURL()},f=m=>{if(!m.downloadUrl)return;const M=document.createElement("a");M.href=m.downloadUrl,M.download=`${m.name.replace(/\s+/g,"_")}.${A(m.type)}`,document.body.appendChild(M),M.click(),document.body.removeChild(M)},A=m=>{switch(m){case"image":return"png";case"sound":return"wav";case"model":return"obj";case"texture":return"png";default:return"txt"}},g=m=>{const M=JSON.parse(localStorage.getItem("editorAssets")||"[]");M.push(m),localStorage.setItem("editorAssets",JSON.stringify(M));const C=document.createElement("div");C.className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg z-50",C.textContent="Asset added to editor!",document.body.appendChild(C),setTimeout(()=>document.body.removeChild(C),2e3)},S=m=>{switch(m){case"image":return o.jsx(es,{className:"w-5 h-5"});case"sound":return o.jsx(xu,{className:"w-5 h-5"});case"model":return o.jsx(Tr,{className:"w-5 h-5"});case"texture":return o.jsx(rl,{className:"w-5 h-5"});default:return o.jsx(es,{className:"w-5 h-5"})}},E=m=>{m.type==="sound"&&new Audio(m.url).play().catch(()=>{alert("Audio preview not available")})};return o.jsx("div",{className:"p-6",children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsxs("h2",{className:"text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2",children:[o.jsx(S0,{className:"w-8 h-8 text-purple-400"}),"AI Asset Generator"]}),o.jsx("p",{className:"text-gray-400",children:"Generate and download game assets using AI prompts or import from URLs"})]}),o.jsx("div",{className:"bg-gray-800 rounded-lg p-6 mb-8",children:o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-3",children:"Asset Type"}),o.jsx("div",{className:"grid grid-cols-4 gap-3",children:[{type:"image",icon:o.jsx(r0,{className:"w-5 h-5"}),label:"Image"},{type:"sound",icon:o.jsx(wu,{className:"w-5 h-5"}),label:"Sound"},{type:"model",icon:o.jsx(Tr,{className:"w-5 h-5"}),label:"3D Model"},{type:"texture",icon:o.jsx(rl,{className:"w-5 h-5"}),label:"Texture"}].map(m=>o.jsxs("button",{onClick:()=>i(m.type),className:`flex items-center justify-center gap-2 p-4 rounded-lg transition-all ${l===m.type?"bg-purple-600 text-white shadow-lg scale-105":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:[m.icon,o.jsx("span",{className:"font-medium",children:m.label})]},m.type))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"AI Prompt"}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("input",{type:"text",value:e,onChange:m=>t(m.target.value),placeholder:`Describe the ${l} you want to generate...`,className:"flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"}),o.jsxs("button",{onClick:x,disabled:a||!e.trim(),className:"flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-medium",children:[o.jsx(B0,{className:"w-5 h-5"}),a?"Generating...":"Generate"]})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Import from URL"}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("input",{type:"url",value:n,onChange:m=>r(m.target.value),placeholder:"Paste URL to import asset...",className:"flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"}),o.jsxs("button",{onClick:y,disabled:a||!n.trim(),className:"flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-medium",children:[o.jsx(u0,{className:"w-5 h-5"}),"Import"]})]})]})]})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-2xl font-semibold text-white mb-6",children:"Generated Assets"}),c.length===0?o.jsxs("div",{className:"text-center py-16 bg-gray-800 rounded-lg",children:[o.jsx("div",{className:"text-gray-400 text-xl mb-4",children:"No assets generated yet"}),o.jsx("p",{className:"text-gray-500",children:"Use the AI generator or import from URLs to create assets"})]}):o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:c.map(m=>o.jsxs("div",{className:"bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 group",children:[o.jsxs("div",{className:"relative",children:[m.type==="image"||m.type==="texture"||m.type==="model"?o.jsx("img",{src:m.url,alt:m.name,className:"w-full h-48 object-cover"}):o.jsx("div",{className:"w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[S(m.type),o.jsx("span",{className:"block mt-2 text-white font-medium",children:"Audio Asset"}),m.type==="sound"&&o.jsx("button",{onClick:()=>E(m),className:"mt-2 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors",children:o.jsx(vl,{className:"w-4 h-4"})})]})}),o.jsx("div",{className:"absolute top-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-xs font-medium",children:m.type.toUpperCase()})]}),o.jsxs("div",{className:"p-4",children:[o.jsx("h4",{className:"text-lg font-semibold text-white mb-2 truncate",children:m.name}),o.jsx("p",{className:"text-gray-400 text-sm mb-3 line-clamp-2",children:m.prompt}),o.jsxs("p",{className:"text-gray-500 text-xs mb-4",children:["Created: ",m.createdAt.toLocaleDateString()," ",m.createdAt.toLocaleTimeString()]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsxs("button",{onClick:()=>g(m),className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm font-medium",children:[o.jsx(Tr,{className:"w-4 h-4"}),"Use in Editor"]}),o.jsx("button",{onClick:()=>f(m),className:"p-2 text-green-400 hover:text-green-300 hover:bg-green-900 rounded transition-colors",title:"Download Asset",children:o.jsx(Lo,{className:"w-4 h-4"})})]})]})]},m.id))})]}),o.jsxs("div",{className:"mt-12",children:[o.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Quick Generate"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{prompt:"Medieval sword weapon",type:"image"},{prompt:"Explosion sound effect",type:"sound"},{prompt:"Stone brick wall texture",type:"texture"},{prompt:"Simple tree 3D model",type:"model"}].map((m,M)=>o.jsxs("button",{onClick:()=>{t(m.prompt),i(m.type)},className:"p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[S(m.type),o.jsx("span",{className:"text-sm font-medium text-gray-300",children:m.type})]}),o.jsx("p",{className:"text-sm text-gray-400",children:m.prompt})]},M))})]})]})})},U0=({currentView:e,onViewChange:t,onSettingsClick:n})=>{const[r,l]=q.useState(null),i={file:[{label:"New Project",icon:o.jsx($a,{className:"w-4 h-4"}),shortcut:"Ctrl+N",action:()=>t("templates")},{label:"Open Project",icon:o.jsx(l0,{className:"w-4 h-4"}),shortcut:"Ctrl+O",action:()=>t("projects")},{label:"Save Project",icon:o.jsx(Ko,{className:"w-4 h-4"}),shortcut:"Ctrl+S",action:()=>{const c=new CustomEvent("saveProject");window.dispatchEvent(c)}},{label:"Export Game",icon:o.jsx(Lo,{className:"w-4 h-4"}),shortcut:"Ctrl+E",action:()=>{const c=new CustomEvent("exportGame");window.dispatchEvent(c)}},{label:"Import Assets",icon:o.jsx(C0,{className:"w-4 h-4"}),shortcut:"Ctrl+I",action:()=>t("ai-generator")}],edit:[{label:"Undo",icon:o.jsx(N0,{className:"w-4 h-4"}),shortcut:"Ctrl+Z",action:()=>{const c=new CustomEvent("undo");window.dispatchEvent(c)}},{label:"Redo",icon:o.jsx(A0,{className:"w-4 h-4"}),shortcut:"Ctrl+Y",action:()=>{const c=new CustomEvent("redo");window.dispatchEvent(c)}},{label:"Copy Object",icon:o.jsx(ot,{className:"w-4 h-4"}),shortcut:"Ctrl+C",action:()=>{const c=new CustomEvent("copyObject");window.dispatchEvent(c)}},{label:"Paste Object",icon:o.jsx(ot,{className:"w-4 h-4"}),shortcut:"Ctrl+V",action:()=>{const c=new CustomEvent("pasteObject");window.dispatchEvent(c)}},{label:"Delete Object",icon:o.jsx(ot,{className:"w-4 h-4"}),shortcut:"Delete",action:()=>{const c=new CustomEvent("deleteObject");window.dispatchEvent(c)}}],view:[{label:"Game Templates",action:()=>t("templates")},{label:"Game Editor",action:()=>t("editor")},{label:"My Projects",action:()=>t("projects")},{label:"AI Generator",action:()=>t("ai-generator")},{label:"Toggle 2D/3D",shortcut:"Tab",action:()=>{const c=new CustomEvent("toggleView");window.dispatchEvent(c)}},{label:"Fullscreen",shortcut:"F11",action:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}}],help:[{label:"Getting Started",action:()=>{window.open("https://github.com/epicenders/docs/getting-started","_blank")}},{label:"Keyboard Shortcuts",action:()=>{alert(`Keyboard Shortcuts:
          
🎮 General:
• Ctrl+N - New Project
• Ctrl+O - Open Project  
• Ctrl+S - Save Project
• Ctrl+E - Export Game
• Tab - Toggle 2D/3D View
• F11 - Fullscreen

✏️ Editor:
• Ctrl+Z - Undo
• Ctrl+Y - Redo
• Ctrl+C - Copy Object
• Ctrl+V - Paste Object
• Delete - Delete Object
• Double-click - Reposition Object

🎯 Game Controls:
• WASD/Arrow Keys - Move
• Space - Jump/Action
• Mouse - Click/Select`)}},{label:"Video Tutorials",action:()=>{window.open("https://youtube.com/epicenders","_blank")}},{label:"Community Forum",action:()=>{window.open("https://discord.gg/epicenders","_blank")}},{label:"Report Bug",action:()=>{window.open("https://github.com/epicenders/issues","_blank")}},{label:"About EpicEnders",action:()=>{alert(`EpicEnders v1.0
          
🎮 The Ultimate No-Code Game Development Platform

Create professional games without writing a single line of code! 

✨ Features:
• Visual drag-and-drop editor
• AI-powered asset generation
• 12+ game templates
• Real-time physics simulation
• Export to HTML for sharing
• Professional game mechanics

Made with ❤️ by the EpicEnders Team
© 2024 EpicEnders. All rights reserved.`)}}]},a=c=>{l(r===c?null:c)},s=c=>{c.action&&c.action(),l(null)};return Fi.useEffect(()=>{const c=u=>{if(u.ctrlKey||u.metaKey)switch(u.key.toLowerCase()){case"n":u.preventDefault(),t("templates");break;case"o":u.preventDefault(),t("projects");break;case"s":u.preventDefault(),window.dispatchEvent(new CustomEvent("saveProject"));break;case"e":u.preventDefault(),window.dispatchEvent(new CustomEvent("exportGame"));break;case"i":u.preventDefault(),t("ai-generator");break}else u.key==="Tab"&&(u.preventDefault(),window.dispatchEvent(new CustomEvent("toggleView")))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t]),o.jsxs("div",{className:"fixed top-0 left-0 right-0 h-12 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4 z-50",children:[o.jsx("div",{className:"flex items-center space-x-1",children:Object.entries(i).map(([c,u])=>o.jsxs("div",{className:"relative",children:[o.jsxs("button",{onClick:()=>a(c),className:`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 transition-colors ${r===c?"bg-gray-700":""}`,children:[c==="file"&&o.jsx($a,{className:"w-4 h-4"}),c==="edit"&&o.jsx(ot,{className:"w-4 h-4"}),c==="view"&&o.jsx(zo,{className:"w-4 h-4"}),c==="help"&&o.jsx(s0,{className:"w-4 h-4"}),o.jsx("span",{className:"capitalize font-medium",children:c})]}),r===c&&o.jsx("div",{className:"absolute top-full left-0 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50",children:u.map((x,y)=>o.jsxs("button",{onClick:()=>s(x),className:"w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[x.icon,o.jsx("span",{className:"text-sm font-medium",children:x.label})]}),x.shortcut&&o.jsx("span",{className:"text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded",children:x.shortcut})]},y))})]},c))}),o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsxs("div",{className:"text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded font-medium",children:[e==="templates"&&"🎮 Game Templates",e==="editor"&&"🛠️ Game Editor",e==="projects"&&"📁 My Projects",e==="ai-generator"&&"🤖 AI Generator"]}),o.jsx("button",{onClick:n,className:"p-2 rounded hover:bg-gray-700 transition-colors",title:"Settings",children:o.jsx(gu,{className:"w-4 h-4"})})]}),r&&o.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>l(null)})]})},L0=({onClose:e})=>{const[t,n]=q.useState({theme:"dark",autoSave:!0,gridSnap:!0,volume:80,quality:"high",language:"en",showFPS:!1,enablePhysics:!0}),r=(i,a)=>{n(s=>({...s,[i]:a}))},l=()=>{localStorage.setItem("gameforge-settings",JSON.stringify(t)),e()};return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:o.jsxs("div",{className:"bg-gray-800 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto",children:[o.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-700",children:[o.jsx("h2",{className:"text-xl font-bold text-white",children:"Settings"}),o.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors",children:o.jsx(M0,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"p-6 space-y-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsx(f0,{className:"w-5 h-5 text-blue-400"}),o.jsx("h3",{className:"text-lg font-semibold text-white",children:"Appearance"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Theme"}),o.jsxs("select",{value:t.theme,onChange:i=>r("theme",i.target.value),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500",children:[o.jsx("option",{value:"dark",children:"Dark"}),o.jsx("option",{value:"light",children:"Light"}),o.jsx("option",{value:"auto",children:"Auto"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Quality"}),o.jsxs("select",{value:t.quality,onChange:i=>r("quality",i.target.value),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500",children:[o.jsx("option",{value:"low",children:"Low"}),o.jsx("option",{value:"medium",children:"Medium"}),o.jsx("option",{value:"high",children:"High"}),o.jsx("option",{value:"ultra",children:"Ultra"})]})]}),o.jsxs("label",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"checkbox",checked:t.showFPS,onChange:i=>r("showFPS",i.target.checked),className:"rounded"}),o.jsx("span",{className:"text-sm text-gray-300",children:"Show FPS Counter"})]})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsx(wu,{className:"w-5 h-5 text-green-400"}),o.jsx("h3",{className:"text-lg font-semibold text-white",children:"Audio"})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:["Master Volume: ",t.volume,"%"]}),o.jsx("input",{type:"range",min:"0",max:"100",value:t.volume,onChange:i=>r("volume",parseInt(i.target.value)),className:"w-full"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsx(mu,{className:"w-5 h-5 text-purple-400"}),o.jsx("h3",{className:"text-lg font-semibold text-white",children:"Editor"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("label",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"checkbox",checked:t.autoSave,onChange:i=>r("autoSave",i.target.checked),className:"rounded"}),o.jsx("span",{className:"text-sm text-gray-300",children:"Auto-save projects"})]}),o.jsxs("label",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"checkbox",checked:t.gridSnap,onChange:i=>r("gridSnap",i.target.checked),className:"rounded"}),o.jsx("span",{className:"text-sm text-gray-300",children:"Enable grid snapping"})]}),o.jsxs("label",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"checkbox",checked:t.enablePhysics,onChange:i=>r("enablePhysics",i.target.checked),className:"rounded"}),o.jsx("span",{className:"text-sm text-gray-300",children:"Enable physics simulation"})]})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsx(rl,{className:"w-5 h-5 text-orange-400"}),o.jsx("h3",{className:"text-lg font-semibold text-white",children:"General"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Language"}),o.jsxs("select",{value:t.language,onChange:i=>r("language",i.target.value),className:"w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500",children:[o.jsx("option",{value:"en",children:"English"}),o.jsx("option",{value:"es",children:"Spanish"}),o.jsx("option",{value:"fr",children:"French"}),o.jsx("option",{value:"de",children:"German"}),o.jsx("option",{value:"ja",children:"Japanese"})]})]})]})]}),o.jsxs("div",{className:"p-6 border-t border-gray-700 flex justify-end space-x-4",children:[o.jsx("button",{onClick:e,className:"px-4 py-2 text-gray-400 hover:text-white transition-colors",children:"Cancel"}),o.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",children:[o.jsx(Ko,{className:"w-4 h-4"}),"Save Settings"]})]})]})})};function z0(){const[e,t]=q.useState("templates"),[n,r]=q.useState(null),[l,i]=q.useState(null),[a,s]=q.useState(!1),[c,u]=q.useState([{id:"1",name:"My Racing Game",type:"3D",lastModified:new Date,thumbnail:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=400"}]),x=(v,k)=>{r(v),k==="edit"&&t("editor")},y=(v,k)=>{const j={id:Date.now().toString(),name:v,type:k,lastModified:new Date,thumbnail:"https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400"};u([...c,j]),i(j),t("editor")},h=()=>{switch(e){case"templates":return o.jsx(V0,{onTemplateSelect:x,onNewProject:y});case"editor":return o.jsx(P0,{selectedTemplate:n,editingProject:l,onSave:v=>{u(k=>k.map(j=>j.id===v.id?v:j))}});case"projects":return o.jsx(q0,{projects:c,onProjectSelect:v=>{i(v),t("editor")},onProjectDelete:v=>{u(k=>k.filter(j=>j.id!==v))}});case"ai-generator":return o.jsx(D0,{});default:return null}};return o.jsxs("div",{className:"min-h-screen bg-gray-900 text-white",children:[o.jsx(U0,{currentView:e,onViewChange:t,onSettingsClick:()=>s(!0)}),o.jsxs("div",{className:"flex h-screen pt-12",children:[o.jsxs("nav",{className:"w-64 bg-gray-800 border-r border-gray-700 flex flex-col",children:[o.jsxs("div",{className:"p-4 border-b border-gray-700",children:[o.jsx("h1",{className:"text-xl font-bold text-blue-400",children:"EpicEnders"}),o.jsx("p",{className:"text-sm text-gray-400",children:"Create Epic Games, No Code Required"})]}),o.jsxs("div",{className:"flex-1 p-4 space-y-2",children:[o.jsxs("button",{onClick:()=>t("templates"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${e==="templates"?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,children:[o.jsx(vl,{className:"w-5 h-5"}),"Game Templates"]}),o.jsxs("button",{onClick:()=>t("editor"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${e==="editor"?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,children:[o.jsx(ot,{className:"w-5 h-5"}),"Game Editor"]}),o.jsxs("button",{onClick:()=>t("projects"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${e==="projects"?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,children:[o.jsx(i0,{className:"w-5 h-5"}),"My Projects"]}),o.jsxs("button",{onClick:()=>t("ai-generator"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${e==="ai-generator"?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700"}`,children:[o.jsx(zo,{className:"w-5 h-5"}),"AI Generator"]})]})]}),o.jsx("main",{className:"flex-1 overflow-auto",children:h()})]}),a&&o.jsx(L0,{onClose:()=>s(!1)})]})}fu(document.getElementById("root")).render(o.jsx(q.StrictMode,{children:o.jsx(z0,{})}));
