import{h as m,i as u,n as c,k as p,r as d,o as f,j as _,f as h,a as v}from"./app-C_JnCVW6.js";import{_ as E}from"./plugin-vue_export-helper-DlAUqK2U.js";const g=m({__name:"TopNavBeautify",setup(i,{expose:t}){t();const o=()=>{const s=document.getElementsByClassName("theme-container");if(s.length<1)return null;const e=s[0],l=document.getElementsByClassName("vp-blog-hero");let n=null;l.length>0&&(n=l[0]),n?e.classList.add("mo7-blog-hero"):e.classList.remove("mo7-blog-hero");const a=document.documentElement.scrollTop;a<60?e.classList.add("mo7-scroll-top"):e.classList.remove("mo7-scroll-top"),n&&(a<n.clientHeight-30?e.classList.add("mo7-scroll-blog-hero-inner"):e.classList.remove("mo7-scroll-blog-hero-inner"))};u(()=>{c(()=>{o(),window.removeEventListener("scroll",()=>{}),window.addEventListener("scroll",()=>{o()})}),p().afterEach(()=>{c(()=>{setTimeout(()=>{o()},50)})})});const r={CheckScrollTopClass:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function C(i,t,o,r,s,e){const l=d("ClientOnly");return f(),_(l,null,{default:h(()=>t[0]||(t[0]=[v("div",{class:"none"},"修改顶栏组件",-1)])),_:1})}const B=E(g,[["render",C],["__file","TopNavBeautify.vue"]]);export{B as default};