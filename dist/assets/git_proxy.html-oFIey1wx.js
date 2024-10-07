import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as a,o as e}from"./app-C_JnCVW6.js";const n={};function l(h,i){return e(),t("div",null,i[0]||(i[0]=[a(`<h1 id="_2-设置代理加速" tabindex="-1"><a class="header-anchor" href="#_2-设置代理加速"><span>2.设置代理加速</span></a></h1><h2 id="系统代理设置" tabindex="-1"><a class="header-anchor" href="#系统代理设置"><span>系统代理设置</span></a></h2><p>参考文档<br><a href="/tutorial/proxy_wall_ready.html" target="_blank" rel="noopener noreferrer">科学上网与本地代理教程</a></p><h2 id="ssh-协议代理" tabindex="-1"><a class="header-anchor" href="#ssh-协议代理"><span>ssh 协议代理</span></a></h2><p>如下面这种指令</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@github.com:handy-golang/go-tools.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里是使用 ssh 协议进行 远程仓库访问的，这个时候 是不走 http 代理的</p><p>可以通过 ssh 跳板机 完成代理。</p><p>参考文档：<br><a href="/tutorial/ssh_jump.html" target="_blank" rel="noopener noreferrer">ssh 跳板机</a></p><h2 id="仅仅只是添加局部代理" tabindex="-1"><a class="header-anchor" href="#仅仅只是添加局部代理"><span>仅仅只是添加局部代理</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http://127.0.0.1:10809&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http://127.0.0.1:10809&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 只代理 github</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http.https://github.com.proxy&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http://127.0.0.1:10809&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;https.https://github.com.proxy&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http://127.0.0.1:10809&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##取消代理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const o=s(n,[["render",l],["__file","git_proxy.html.vue"]]),d=JSON.parse('{"path":"/tools/git/git_proxy.html","title":"2.设置代理加速","lang":"zh-CN","frontmatter":{"category":["工具"],"tag":["工具","技巧","教程","git"],"order":2,"permalink":"/tools/git/git_proxy.html","description":"2.设置代理加速 系统代理设置 参考文档 科学上网与本地代理教程 ssh 协议代理 如下面这种指令 这里是使用 ssh 协议进行 远程仓库访问的，这个时候 是不走 http 代理的 可以通过 ssh 跳板机 完成代理。 参考文档： ssh 跳板机 仅仅只是添加局部代理","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/Yao/tools/git/git_proxy.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"2.设置代理加速"}],["meta",{"property":"og:description","content":"2.设置代理加速 系统代理设置 参考文档 科学上网与本地代理教程 ssh 协议代理 如下面这种指令 这里是使用 ssh 协议进行 远程仓库访问的，这个时候 是不走 http 代理的 可以通过 ssh 跳板机 完成代理。 参考文档： ssh 跳板机 仅仅只是添加局部代理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T16:48:13.000Z"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:modified_time","content":"2024-10-07T16:48:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.设置代理加速\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T16:48:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/Yao/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/Yao/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/Yao/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"系统代理设置","slug":"系统代理设置","link":"#系统代理设置","children":[]},{"level":2,"title":"ssh 协议代理","slug":"ssh-协议代理","link":"#ssh-协议代理","children":[]},{"level":2,"title":"仅仅只是添加局部代理","slug":"仅仅只是添加局部代理","link":"#仅仅只是添加局部代理","children":[]}],"git":{"createdTime":1728311364000,"updatedTime":1728319693000,"contributors":[{"name":"YAO","email":"1964877312@qq.com","commits":3}]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"tools/git/2.设置代理加速.md","localizedDate":"2024年10月7日","excerpt":"\\n<h2>系统代理设置</h2>\\n<p>参考文档<br>\\n<a href=\\"/tutorial/proxy_wall_ready.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">科学上网与本地代理教程</a></p>\\n<h2>ssh 协议代理</h2>\\n<p>如下面这种指令</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> clone</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git@github.com:handy-golang/go-tools.git</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{o as comp,d as data};
