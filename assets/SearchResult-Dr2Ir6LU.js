import{u as U,h as ae,i as te,j as z,k as se,P as le,t as re,l as oe,m as D,n as w,p as ne,w as M,q as t,v as ue,R as T,x as ie,y as ce,z as pe,C as ve,A as he,B as me,D as ye,E as de,F as ge,G as Ye,H as fe,I as $,J as j,K as ke,L as A,M as be}from"./app-DMim0VD9.js";const He=["/","/Yao/","/en/","/en/intro.html","/Yao/YaoA/","/Yao/myblog/","/Yao/myblog/website.html","/Yao/myblog/me.html","/en/demo/","/en/demo/disable.html","/en/demo/encrypt.html","/en/demo/page.html","/en/posts/cherry.html","/en/posts/dragonfruit.html","/en/posts/strawberry.html","/en/posts/tomato.html","/Yao/YaoA/links/","/Yao/YaoA/links/document.html","/Yao/YaoA/links/friend.html","/Yao/YaoA/links/tools.html","/Yao/YaoA/movies/","/Yao/Yaoa_zyk/ForrestGump.html","/Yao/YaoA/music/qq_music.html","/Yao/YaoA/music/","/Yao/YaoA/music/music163_favorite.html","/Yao/YaoA/music/kugou_music.html","/Yao/YaoA/photos/bing_img_api.html","/Yao/YaoA/photos/","/en/posts/apple/1.html","/en/posts/apple/2.html","/en/posts/apple/3.html","/en/posts/apple/4.html","/en/posts/banana/1.html","/en/posts/banana/2.html","/en/posts/banana/3.html","/en/posts/banana/4.html","/404.html","/en/posts/","/Yao/Yaoa_zyk/","/en/posts/apple/","/en/posts/banana/","/category/","/en/category/","/en/category/guide/","/en/category/cherry/","/en/category/dragon-fruit/","/en/category/fruit/","/en/category/strawberry/","/en/category/vegetable/","/en/category/apple/","/en/category/banana/","/tag/","/en/tag/","/en/tag/disable/","/en/tag/encryption/","/en/tag/page-config/","/en/tag/guide/","/en/tag/red/","/en/tag/small/","/en/tag/round/","/en/tag/big/","/en/tag/yellow/","/en/tag/curly/","/en/tag/long/","/article/","/en/article/","/star/","/en/star/","/timeline/","/en/timeline/"],Re="SEARCH_PRO_QUERY_HISTORY",g=U(Re,[]),we=()=>{const{queryHistoryCount:s}=A,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},E=s=>He[s.id]+("anchor"in s?`#${s.anchor}`:""),Ae="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=A,Y=U(Ae,[]),qe=()=>{const s=I>0;return{enabled:s,resultHistory:Y,addResultHistory:l=>{if(s){const r={link:E(l),display:l.display};"header"in l&&(r.header=l.header),Y.value=[r,...Y.value.slice(0,I-1)]}},removeResultHistory:l=>{Y.value=[...Y.value.slice(0,l),...Y.value.slice(l+1)]}}},Qe=s=>{const l=ve(),r=z(),q=he(),n=D(0),b=w(()=>n.value>0),m=me([]);return ye(()=>{const{search:y,terminate:Q}=de(),f=ke(c=>{const k=c.join(" "),{searchFilter:x=h=>h,splitWord:S,suggestionsFilter:F,...d}=l.value;k?(n.value+=1,y(c.join(" "),r.value,d).then(h=>x(h,k,r.value,q.value)).then(h=>{n.value-=1,m.value=h}).catch(h=>{console.warn(h),n.value-=1,n.value||(m.value=[])})):m.value=[]},A.searchDelay-A.suggestDelay);M([s,r],([c])=>f(c),{immediate:!0}),ge(()=>{Q()})}),{isSearching:b,results:m}};var Se=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=te(),q=z(),n=se(le),{enabled:b,addQueryHistory:m,queryHistory:y,removeQueryHistory:Q}=we(),{enabled:f,resultHistory:c,addResultHistory:k,removeResultHistory:x}=qe(),S=b||f,F=re(s,"queries"),{results:d,isSearching:h}=Qe(F),o=oe({isQuery:!0,index:0}),p=D(0),v=D(0),P=w(()=>S&&(y.value.length>0||c.value.length>0)),C=w(()=>d.value.length>0),_=w(()=>d.value[p.value]||null),B=()=>{const{isQuery:e,index:a}=o;a===0?(o.isQuery=!e,o.index=e?c.value.length-1:y.value.length-1):o.index=a-1},G=()=>{const{isQuery:e,index:a}=o;a===(e?y.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=a+1},J=()=>{p.value=p.value>0?p.value-1:d.value.length-1,v.value=_.value.contents.length-1},K=()=>{p.value=p.value<d.value.length-1?p.value+1:0,v.value=0},V=()=>{v.value<_.value.contents.length-1?v.value+=1:K()},N=()=>{v.value>0?v.value-=1:J()},L=e=>e.map(a=>be(a)?a:t(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=Ye[e.index]||"$content",[u,R=""]=fe(a)?a[q.value].split("$content"):a.split("$content");return e.display.map(i=>t("div",L([u,...i,R])))}return e.display.map(a=>t("div",L(a)))},H=()=>{p.value=0,v.value=0,l("updateQuery",""),l("close")},X=()=>b?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},n.value.queryHistory),y.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===a}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:u=>{u.preventDefault(),u.stopPropagation(),Q(a)}})]))])):null,Z=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},n.value.resultHistory),c.value.map((e,a)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===a}],onClick:()=>{H()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(u=>L(u)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:u=>{u.preventDefault(),u.stopPropagation(),x(a)}})]))])):null;return ne("keydown",e=>{if(s.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=_.value.contents[v.value];m(s.queries.join(" ")),k(a),r.push(E(a)),H()}}else if(f){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=o;o.isQuery?(l("updateQuery",y.value[a]),e.preventDefault()):(r.push(c.value[a].link),H())}}}}),M([p,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!C.value:!P.value}],id:"search-pro-results"},s.queries.length?h.value?t(ue,{hint:n.value.searching}):C.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:a},u)=>{const R=p.value===u;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||n.value.defaultTitle),a.map((i,ee)=>{const O=R&&v.value===ee;return t(T,{to:E(i),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{m(s.queries.join(" ")),k(i),H()}},()=>[i.type==="text"?null:t(i.type==="title"?ie:i.type==="heading"?ce:pe,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?t("div",{class:"content-header"},i.header):null,t("div",W(i))])])})])})):n.value.emptyResult:S?P.value?[X(),Z()]:n.value.emptyHistory:n.value.emptyResult)}});export{Se as default};
