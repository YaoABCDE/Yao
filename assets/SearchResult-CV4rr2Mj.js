import{u as U,h as ae,i as te,j as B,k as se,P as le,t as re,l as oe,m as D,n as A,p as ne,w as M,q as t,v as ue,R as T,x as ie,y as ce,z as pe,C as ve,A as he,B as me,D as ye,E as de,F as ge,G as Ye,H as be,I as $,J as j,K as fe,L as R,M as we}from"./app-CvVWbEjq.js";const He=["/","/Yao/","/en/","/en/intro.html","/Yao/YaoA/","/Yao/myblog/","/Yao/myblog/web.html","/Yao/myblog/SHL.html","/Yao/myblog/me.html","/en/demo/","/en/demo/disable.html","/en/demo/encrypt.html","/en/demo/page.html","/en/posts/cherry.html","/en/posts/dragonfruit.html","/en/posts/strawberry.html","/en/posts/tomato.html","/Yao/YaoA/links/","/Yao/YaoA/links/web_tool.html","/Yao/YaoA/links/web_ZF.html","/Yao/YaoA/links/web_BC.html","/Yao/YaoA/movies/","/Yao/YaoA/movies/movies_weblist.html","/Yao/YaoA/music/qq_music.html","/Yao/YaoA/music/","/Yao/YaoA/music/wyy_music.html","/Yao/YaoA/music/kugou_music.html","/Yao/YaoA/photos/","/Yao/YaoA/photos/bing_img_api.html","/Yao/YaoA/word/","/Yao/YaoA/word/word_XS.html","/en/posts/apple/1.html","/en/posts/apple/2.html","/en/posts/apple/3.html","/en/posts/apple/4.html","/en/posts/banana/1.html","/en/posts/banana/2.html","/en/posts/banana/3.html","/en/posts/banana/4.html","/404.html","/en/posts/","/en/posts/apple/","/en/posts/banana/","/category/","/en/category/","/en/category/guide/","/en/category/cherry/","/en/category/dragon-fruit/","/en/category/fruit/","/en/category/strawberry/","/en/category/vegetable/","/en/category/apple/","/en/category/banana/","/tag/","/en/tag/","/en/tag/disable/","/en/tag/encryption/","/en/tag/page-config/","/en/tag/guide/","/en/tag/red/","/en/tag/small/","/en/tag/round/","/en/tag/big/","/en/tag/yellow/","/en/tag/curly/","/en/tag/long/","/article/","/en/article/","/star/","/en/star/","/timeline/","/en/timeline/"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),Ae=()=>{const{queryHistoryCount:s}=R,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},E=s=>He[s.id]+("anchor"in s?`#${s.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=R,Y=U(Re,[]),qe=()=>{const s=I>0;return{enabled:s,resultHistory:Y,addResultHistory:l=>{if(s){const r={link:E(l),display:l.display};"header"in l&&(r.header=l.header),Y.value=[r,...Y.value.slice(0,I-1)]}},removeResultHistory:l=>{Y.value=[...Y.value.slice(0,l),...Y.value.slice(l+1)]}}},Qe=s=>{const l=ve(),r=B(),q=he(),n=D(0),w=A(()=>n.value>0),m=me([]);return ye(()=>{const{search:y,terminate:Q}=de(),b=fe(c=>{const f=c.join(" "),{searchFilter:x=h=>h,splitWord:S,suggestionsFilter:F,...d}=l.value;f?(n.value+=1,y(c.join(" "),r.value,d).then(h=>x(h,f,r.value,q.value)).then(h=>{n.value-=1,m.value=h}).catch(h=>{console.warn(h),n.value-=1,n.value||(m.value=[])})):m.value=[]},R.searchDelay-R.suggestDelay);M([s,r],([c])=>b(c),{immediate:!0}),ge(()=>{Q()})}),{isSearching:w,results:m}};var Se=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=te(),q=B(),n=se(le),{enabled:w,addQueryHistory:m,queryHistory:y,removeQueryHistory:Q}=Ae(),{enabled:b,resultHistory:c,addResultHistory:f,removeResultHistory:x}=qe(),S=w||b,F=re(s,"queries"),{results:d,isSearching:h}=Qe(F),o=oe({isQuery:!0,index:0}),p=D(0),v=D(0),P=A(()=>S&&(y.value.length>0||c.value.length>0)),_=A(()=>d.value.length>0),C=A(()=>d.value[p.value]||null),z=()=>{const{isQuery:e,index:a}=o;a===0?(o.isQuery=!e,o.index=e?c.value.length-1:y.value.length-1):o.index=a-1},G=()=>{const{isQuery:e,index:a}=o;a===(e?y.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=a+1},J=()=>{p.value=p.value>0?p.value-1:d.value.length-1,v.value=C.value.contents.length-1},K=()=>{p.value=p.value<d.value.length-1?p.value+1:0,v.value=0},V=()=>{v.value<C.value.contents.length-1?v.value+=1:K()},X=()=>{v.value>0?v.value-=1:J()},L=e=>e.map(a=>we(a)?a:t(a[0],a[1])),Z=e=>{if(e.type==="customField"){const a=Ye[e.index]||"$content",[u,k=""]=be(a)?a[q.value].split("$content"):a.split("$content");return e.display.map(i=>t("div",L([u,...i,k])))}return e.display.map(a=>t("div",L(a)))},H=()=>{p.value=0,v.value=0,l("updateQuery",""),l("close")},N=()=>w?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},n.value.queryHistory),y.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===a}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:u=>{u.preventDefault(),u.stopPropagation(),Q(a)}})]))])):null,W=()=>b?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},n.value.resultHistory),c.value.map((e,a)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===a}],onClick:()=>{H()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(u=>L(u)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:u=>{u.preventDefault(),u.stopPropagation(),x(a)}})]))])):null;return ne("keydown",e=>{if(s.isFocusing){if(_.value){if(e.key==="ArrowUp")X();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=C.value.contents[v.value];m(s.queries.join(" ")),f(a),r.push(E(a)),H()}}else if(b){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=o;o.isQuery?(l("updateQuery",y.value[a]),e.preventDefault()):(r.push(c.value[a].link),H())}}}}),M([p,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!_.value:!P.value}],id:"search-pro-results"},s.queries.length?h.value?t(ue,{hint:n.value.searching}):_.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:a},u)=>{const k=p.value===u;return t("li",{class:["search-pro-result-list-item",{active:k}]},[t("div",{class:"search-pro-result-title"},e||n.value.defaultTitle),a.map((i,ee)=>{const O=k&&v.value===ee;return t(T,{to:E(i),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{m(s.queries.join(" ")),f(i),H()}},()=>[i.type==="text"?null:t(i.type==="title"?ie:i.type==="heading"?ce:pe,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?t("div",{class:"content-header"},i.header):null,t("div",Z(i))])])})])})):n.value.emptyResult:S?P.value?[N(),W()]:n.value.emptyHistory:n.value.emptyResult)}});export{Se as default};