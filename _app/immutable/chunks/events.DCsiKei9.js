import{a0 as s,a1 as l,a2 as E,T as b,a3 as S,a4 as k,a5 as A}from"./runtime.BiDCXHYX.js";function D(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const L=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function j(t){return L.includes(t)}const x={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function q(t){return t=t.toLowerCase(),x[t]??t}const N=["touchstart","touchmove"];function C(t){return N.includes(t)}const V=["textarea","script","style","title"];function P(t){return V.includes(t)}function I(t){var e=E,o=b;s(null),l(null);try{return t()}finally{s(e),l(o)}}const M=new Set,O=new Set;function R(t,e,o,u){function a(r){if(u.capture||W.call(e,r),!r.cancelBubble)return I(()=>o.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?A(()=>{e.addEventListener(t,a,u)}):e.addEventListener(t,a,u),a}function z(t){for(var e=0;e<t.length;e++)M.add(t[e]);for(var o of O)o(t)}function W(t){var y;var e=this,o=e.ownerDocument,u=t.type,a=((y=t.composedPath)==null?void 0:y.call(t))||[],r=a[0]||t.target,_=0,p=t.__root;if(p){var f=a.indexOf(p);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var h=a.indexOf(e);if(h===-1)return;f<=h&&(_=f)}if(r=a[_]||t.target,r!==e){S(t,"currentTarget",{configurable:!0,get(){return r||o}});var g=E,w=b;s(null),l(null);try{for(var n,v=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var i=r["__"+u];if(i!==void 0&&!r.disabled)if(k(i)){var[m,...T]=i;m.apply(r,[t,...T])}else i.call(r,t)}catch(c){n?v.push(c):n=c}if(t.cancelBubble||d===e||d===null)break;r=d}if(n){for(let c of v)queueMicrotask(()=>{throw c});throw n}}finally{t.__root=e,delete t.currentTarget,s(g),l(w)}}}export{M as a,P as b,D as c,R as d,z as e,j as f,W as h,C as i,q as n,O as r};