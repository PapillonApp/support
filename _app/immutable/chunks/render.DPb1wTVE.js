import{C as A,b as I,D as k,h as _,F as C,G as T,g as u,s as v,c as f,I as L,J as R,K as E,e as F,L as M,M as Y,N as j,O as P,P as S,Q as V,a as $,j as G,R as J,k as K,x as Q}from"./runtime.Ca-rNzTb.js";import{a as W,r as N,h as p,i as q}from"./events.CYaTGJDK.js";import{b as z}from"./disclose-version.BV22WqyQ.js";let n;function B(){n=void 0}function ee(a){let e=null,t=_;var o;if(_){for(e=f,n===void 0&&(n=L(document.head));n!==null&&(n.nodeType!==8||n.data!==C);)n=T(n);n===null?u(!1):n=v(T(n))}_||(o=document.head.appendChild(A()));try{I(()=>a(o),k)}finally{t&&(u(!0),n=f,v(e))}}function ae(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t==null?"":t+"")}function U(a,e){return O(a,e)}function te(a,e){R(),e.intro=e.intro??!1;const t=e.target,o=_,y=f;try{for(var r=L(t);r&&(r.nodeType!==8||r.data!==C);)r=T(r);if(!r)throw E;u(!0),v(r),F();const h=O(a,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==M)throw Y(),E;return u(!1),h}catch(h){if(h===E)return e.recover===!1&&j(),R(),P(t),u(!1),U(a,e);throw h}finally{u(o),v(y),B()}}const l=new Map;function O(a,{target:e,anchor:t,props:o={},events:y,context:r,intro:h=!0}){R();var g=new Set,m=i=>{for(var s=0;s<i.length;s++){var d=i[s];if(!g.has(d)){g.add(d);var c=q(d);e.addEventListener(d,p,{passive:c});var D=l.get(d);D===void 0?(document.addEventListener(d,p,{passive:c}),l.set(d,1)):l.set(d,D+1)}}};m(S(W)),N.add(m);var w=void 0,H=V(()=>{var i=t??e.appendChild(A());return $(()=>{if(r){G({});var s=Q;s.c=r}y&&(o.$$events=y),_&&z(i,null),w=a(i,o)||{},_&&(J.nodes_end=f),r&&K()}),()=>{var c;for(var s of g){e.removeEventListener(s,p);var d=l.get(s);--d===0?(document.removeEventListener(s,p),l.delete(s)):l.set(s,d)}N.delete(m),i!==t&&((c=i.parentNode)==null||c.removeChild(i))}});return b.set(w,H),w}let b=new WeakMap;function re(a,e){const t=b.get(a);return t?(b.delete(a),t(e)):Promise.resolve()}export{te as a,ee as h,U as m,ae as s,re as u};
