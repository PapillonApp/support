import{Z as D,_ as $,a0 as z,a1 as h,a2 as H,v as w,U as o,a3 as O,q as b,R as j,a4 as V,a5 as X,a6 as J,a7 as Q,a8 as W,a9 as Z,aa as k,A as C,ab as K,ac as A,ad as G,ae as ee,af as re,ag as U,ah as ne,y as ie,ai as te,aj as ae,X as F,u as se,ak as fe,al as ue}from"./runtime.Ca-rNzTb.js";function I(e,r=null,f){if(typeof e!="object"||e===null||D in e)return e;const u=X(e);if(u!==$&&u!==z)return e;var t=new Map,_=J(e),P=h(0);_&&t.set("length",h(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&H();var s=t.get(n);return s===void 0?(s=h(i.value),t.set(n,s)):w(s,I(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,h(o));else{if(_&&typeof n=="string"){var s=t.get("length"),a=Number(n);Number.isInteger(a)&&a<s.v&&w(s,a)}w(i,o),M(P)}return!0},get(l,n,i){var c;if(n===D)return e;var s=t.get(n),a=n in l;if(s===void 0&&(!a||(c=O(l,n))!=null&&c.writable)&&(s=h(I(a?l[n]:o,g)),t.set(n,s)),s!==void 0){var d=b(s);return d===o?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var s=t.get(n);s&&(i.value=b(s))}else if(i===void 0){var a=t.get(n),d=a==null?void 0:a.v;if(a!==void 0&&d!==o)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===D)return!0;var i=t.get(n),s=i!==void 0&&i.v!==o||Reflect.has(l,n);if(i!==void 0||j!==null&&(!s||(d=O(l,n))!=null&&d.writable)){i===void 0&&(i=h(s?I(l[n],g):o),t.set(n,i));var a=b(i);if(a===o)return!1}return s},set(l,n,i,s){var R;var a=t.get(n),d=n in l;if(_&&n==="length")for(var c=i;c<a.v;c+=1){var y=t.get(c+"");y!==void 0?w(y,o):c in l&&(y=h(o),t.set(c+"",y))}a===void 0?(!d||(R=O(l,n))!=null&&R.writable)&&(a=h(void 0),w(a,I(i,g)),t.set(n,a)):(d=a.v!==o,w(a,I(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(s,i),!d){if(_&&typeof n=="string"){var x=t.get("length"),E=Number(n);Number.isInteger(E)&&E>=x.v&&w(x,E+1)}M(P)}return!0},ownKeys(l){b(P);var n=Reflect.ownKeys(l).filter(a=>{var d=t.get(a);return d===void 0||d.v!==o});for(var[i,s]of t)s.v!==o&&!(i in l)&&n.push(i);return n},setPrototypeOf(){V()}})}function M(e,r=1){w(e,e.v+r)}let N=!1;function le(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=_e({get[r](){return e.props[r]}},r,Z)),e.special[r](f),K(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),K(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:h(0)},de)}const ve={get(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(A(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,f){let u=e.props.length;for(;u--;){let t=e.props[u];A(t)&&(t=t());const _=O(t,r);if(_&&_.set)return _.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(A(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=O(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===D||r===G)return!1;for(let f of e.props)if(A(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){A(f)&&(f=f());for(const u in f)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},ve)}function Y(e){for(var r=j,f=j;r!==null&&!(r.f&(ee|re));)r=r.parent;try{return U(r),e()}finally{U(f)}}function _e(e,r,f,u){var B;var t=(f&ne)!==0,_=!ie||(f&te)!==0,P=(f&ae)!==0,g=(f&fe)!==0,l=!1,n;P?[n,l]=le(()=>e[r]):n=e[r];var i=D in e||G in e,s=((B=O(e,r))==null?void 0:B.set)??(i&&P&&r in e?v=>e[r]=v:void 0),a=u,d=!0,c=!1,y=()=>(c=!0,d&&(d=!1,g?a=C(u):a=u),a);n===void 0&&u!==void 0&&(s&&_&&Q(),n=y(),s&&s(n));var p;if(_)p=()=>{var v=e[r];return v===void 0?y():(d=!0,c=!1,v)};else{var x=Y(()=>(t?F:se)(()=>e[r]));x.f|=W,p=()=>{var v=b(x);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(f&Z))return p;if(s){var E=e.$$legacy;return function(v,m){return arguments.length>0?((!_||!m||E||l)&&s(m?p():v),v):p()}}var R=!1,q=!1,T=ue(n),S=Y(()=>F(()=>{var v=p(),m=b(T);return R?(R=!1,q=!0,m):(q=!1,T.v=v)}));return t||(S.equals=k),function(v,m){if(arguments.length>0){const L=m?b(S):_&&P?I(v):v;return S.equals(L)||(R=!0,w(T,L),c&&a!==void 0&&(a=L),C(()=>b(S))),v}return b(S)}}export{I as a,ce as l,_e as p,pe as s};
