import{a as l,t as f}from"../chunks/disclose-version.B_0afnMY.js";import{i as g}from"../chunks/legacy.ChJmYMxv.js";import{j as c,v as h,q as e,f as w,k as _,w as C,t as L,$ as v,m,o as $}from"../chunks/runtime.CEBCdXjQ.js";import{h as b}from"../chunks/render.BYD1g1Hc.js";import{e as S,i as y}from"../chunks/Icon.BaLVKvCh.js";import{o as R}from"../chunks/index-client.l4Gxfz9v.js";import{a as q,C as A,A as P}from"../chunks/ArticleCard.BO6BxnWI.js";import{B as k}from"../chunks/Breadcrumb.CIl4clKT.js";import{S as x}from"../chunks/search.D_3g-1ej.js";var B=f('<!> <!> <section class="articles svelte-17h0uc0"></section>',1);function I(p,d){c(d,!1);let r=C("");if(typeof window<"u"){const t=new URLSearchParams(window.location.search);h(r,t.get("q")||"")}R(()=>{document.title=`Résultat pour « ${e(r)} » - Papillon Support`});const s=q.filter(t=>t.title.toLowerCase().includes(e(r).toLowerCase())||t.description.toLowerCase().includes(e(r).toLowerCase())||t.id.toString().includes(e(r).toLowerCase())||t.slug.toLowerCase().includes(e(r).toLowerCase())||t.markdown.toLowerCase().includes(e(r).toLowerCase())?t:null);g();var a=B();b(t=>{L(()=>v.title=`Résultat pour « ${e(r)??""} » - Papillon Support`)});var n=w(a);k(n,{links:[{name:"Accueil",href:"/"},{name:"Recherche",href:"/search?={query}"}]});var i=m(n,2);A(i,{get name(){return`Résultat pour « ${e(r)??""} »`},get number(){return s.length},icon:x});var u=m(i,2);S(u,5,()=>s,y,(t,o)=>{P(t,{get title(){return e(o).title},get description(){return e(o).description},get image(){return e(o).image},get image_alt(){return e(o).imageAlt},get id(){return e(o).id},get slug(){return e(o).slug},get time_to_read(){return e(o).time_to_read},get difficulty(){return e(o).difficulty},get stepped_guide_available(){return e(o).stepped_guide_available}})}),$(u),l(p,a),_()}export{I as component};
