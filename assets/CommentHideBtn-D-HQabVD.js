import{m as a}from"./tools-B9TDRQ4Q.js";import{h as p,i as C,n as l,k as f,r as B,o as _,j as y,g as E,b as h}from"./app-D7j84xBr.js";import{_ as I}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";const g=p({__name:"CommentHideBtn",setup(u,{expose:n}){n();const o=()=>{const e=document.getElementById("vp-comment");e&&(e.classList.add("show"),e.classList.remove("hide"),a.set("CommentIsDisplay",!0))},m=()=>{const e=document.getElementById("vp-comment");e&&(e.classList.add("hide"),e.classList.remove("show"),a.set("CommentIsDisplay",!1))},s=()=>{const e=document.getElementById("vp-comment");if(!e)return;a.get("CommentIsDisplay")?o():m(),e.style.opacity="1"},i=()=>{const e=document.getElementById("vp-comment");if(!e)return;if(!document.getElementById("ShowComment")){const t=document.createElement("button");t.id="ShowComment",t.classList.add("primary"),t.classList.add("wl-btn"),t.innerHTML="显示评论区",e.appendChild(t)}if(!document.getElementById("HideComment")){const t=document.createElement("button");t.id="HideComment",t.classList.add("primary"),t.classList.add("wl-btn"),t.innerHTML="隐藏评论区",e.appendChild(t)}const d=document.getElementById("ShowComment"),r=document.getElementById("HideComment");d&&r&&(d.onclick=o,r.onclick=m)};C(()=>{l(()=>{i(),s()}),f().afterEach(d=>{l(()=>{setTimeout(()=>{i(),s()},500)})})});const c={ShowComments:o,HideComments:m,ReadeCommentIsDisplay:s,CreateCommentBtn:i};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function v(u,n,o,m,s,i){const c=B("ClientOnly");return _(),y(c,null,{default:E(()=>n[0]||(n[0]=[h("div",{class:"none"},"评论区隐藏按钮",-1)])),_:1})}const S=I(g,[["render",v],["__file","CommentHideBtn.vue"]]);export{S as default};