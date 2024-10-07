import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as t,o as a}from"./app-BwK5f0nB.js";const n="/assets/OtterTrade%E6%96%87%E6%A1%A3%E7%AB%99%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84-cbwcy5aS.png",r="/assets/vuepress%E9%9C%80%E8%A6%81%E5%AE%89%E8%A3%85%E7%9A%84%E5%9F%BA%E7%A1%80%E6%8F%92%E4%BB%B6-Ckz4IKRZ.png",l="/assets/%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8github%E7%BC%96%E8%BE%911-Bjmw5Io9.png",h="/assets/%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8github%E7%BC%96%E8%BE%912-2XTC50CH.png",p={};function o(d,i){return a(),e("div",null,i[0]||(i[0]=[t(`<h1 id="ottertrade-文档站" tabindex="-1"><a class="header-anchor" href="#ottertrade-文档站"><span>OtterTrade 文档站</span></a></h1><p><strong>起源</strong></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>有独立开发完成一个量化系统开发的人吗？ - 墨七的回答 - 知乎<br><a href="https://www.zhihu.com/question/35977425/answer/3001448431" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/35977425/answer/3001448431</a></p></div><p>基于知乎的一篇回答建了一个群，拉起了一支团队，<br> 并成立了一个 <a href="https://github.com/otter-trade" target="_blank" rel="noopener noreferrer">Github 组织</a> ，<br> 然后大家一起研发了<a href="https://OtterTrade.com" target="_blank" rel="noopener noreferrer">OtterTrade.com</a> ，<br> 在最开始进行产品定位的时候，就要求主站必须精简、美观、大方、易使用。但是再怎么易使用，必要的文档说明是无法避免的。<br> 于是计划所有的解释说明的工作全部交给一个独立的文档站去承担。</p><p>文档站中包含了平台介绍，快速上手，系列教程，团队介绍，起源，愿景，规划等等等。可以说现阶段文档站的重要程度不亚于 <a href="http://OtterTrade.com" target="_blank" rel="noopener noreferrer">OtterTrade.com</a> 主站。在运营设计上，文档站有三个地址:</p><p>文档站(Github Pages)<br><a href="https://otter-trade.github.io" target="_blank" rel="noopener noreferrer">https://otter-trade.github.io</a></p><details class="hint-container details"><summary>宣发主站</summary><p><code>Github Pages</code> 的好处是完全免费，且不用担心服务器挂掉，或者出什么问题，维护简单，没有任何成本。而且 <code>github.io</code> 具有高度的辨识性，不用担心会被封禁。所以这个地址将会作为将来的宣发主站。</p><p>缺点是国内访问速度可能略慢。</p></details><p>文档站(新加坡备用地址)<br><a href="https://doc.OtterTrade.com" target="_blank" rel="noopener noreferrer">https://doc.OtterTrade.com</a></p><p>文档站(国内备用地址)<br><a href="https://ot-doc.mo7.cc" target="_blank" rel="noopener noreferrer">https://ot-doc.mo7.cc</a></p><p>文档站是导航，是回家的路，所以安全可靠的访问途径非常重要。</p><h2 id="文档站的构成" tabindex="-1"><a class="header-anchor" href="#文档站的构成"><span>文档站的构成</span></a></h2><p>文档站的源码存放于 <a href="https://github.com/otter-trade/doc-otter-trade" target="_blank" rel="noopener noreferrer">https://github.com/otter-trade/doc-otter-trade</a> ，是个开源仓库，主体由 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-hope</a> 搭建。</p><p>其编译结果存放于 <a href="https://github.com/otter-trade/otter-trade.github.io" target="_blank" rel="noopener noreferrer">https://github.com/otter-trade/otter-trade.github.io</a> 仓库，因此可以直接利用 <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Pages</a> 的特性。</p><p>然后通过 <a href="https://cloud.tencent.com/developer/article/2151039" target="_blank" rel="noopener noreferrer">Webhooks</a> 机制同时部署在两台不同的服务器之上。</p><p>所以文档站的基本工作流就是:</p><ol><li>向 <a href="https://github.com/mo7cc" target="_blank" rel="noopener noreferrer">墨七</a> 申请 <a href="https://github.com/otter-trade/doc-otter-trade" target="_blank" rel="noopener noreferrer">doc-otter-trade</a> 和 <a href="https://github.com/otter-trade/otter-trade.github.io" target="_blank" rel="noopener noreferrer">otter-trade.github.io</a> 这两个仓库的权限；</li><li>利用 <code>git clone</code> 命令下载文档站源码；</li><li>在编写完对应文档之后，编译打包并推送至 <a href="https://github.com/otter-trade/otter-trade.github.io" target="_blank" rel="noopener noreferrer">otter-trade.github.io</a> 仓库完成发布。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 克隆 文档站 源码到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@github.com:otter-trade/doc-otter-trade.git</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 用 Vscode 打开</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./doc-otter-trade</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你就获得了如下界面</p><figure><img src="`+n+'" alt="OtterTrade文档站项目目录结构" tabindex="0" loading="lazy"><figcaption>OtterTrade文档站项目目录结构</figcaption></figure><p>除此之外你可能还需要安装如下插件</p><figure><img src="'+r+`" alt="提升编写体验的基础插件" tabindex="0" loading="lazy"><figcaption>提升编写体验的基础插件</figcaption></figure><p>然后你就可以愉快的开始编写文档了！</p><h2 id="命令介绍" tabindex="-1"><a class="header-anchor" href="#命令介绍"><span>命令介绍</span></a></h2><p>在项目目录的 <code>./package.json</code> 文件中我提前编写了如下指令</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ....</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;dev&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress-vite dev src&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress-vite build src&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;clean-dev&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress-vite dev src --clean-cache&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;update-package&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm dlx vp-update&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;sync&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./_shell/GitSync.sh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;deploy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./_shell/Deploy.sh&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ....</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法如下:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 在本地启动该项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 编译该项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean-dev</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 清除所有的编译缓存，并启动项目，如果一些配置或者编写的文章没有生效则可以使用该指令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update-package</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更新项目依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sync</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 拉取 Github 上的最新改动，并保存和提交当前改动 同时 推送至 Github ，需要仓库权限</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  deploy</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 编译本项目并同时推送至  otter-trade.github.io 仓库， 然后将会自动完成项目的部署与发布, 需要仓库权限</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它"><span>其它</span></a></h2><p>如果你想编写出华丽的可交互的文档可以查看和学习如下教程<br><a href="https://theme-hope.vuejs.press/zh/guide/markdown/intro.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/guide/markdown/intro.html</a></p><p>如果你想让文档具有更多功能可以学习如下教程<br><a href="https://theme-hope.vuejs.press/zh/guide/component/built-in.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/guide/component/built-in.html</a></p><h2 id="另外一种更新文档的方式" tabindex="-1"><a class="header-anchor" href="#另外一种更新文档的方式"><span>另外一种更新文档的方式</span></a></h2><figure><img src="`+l+'" alt="打开文档站，并点击 编辑此页" tabindex="0" loading="lazy"><figcaption>打开文档站，并点击 编辑此页</figcaption></figure><figure><img src="'+h+'" alt="在github中提交改动" tabindex="0" loading="lazy"><figcaption>在github中提交改动</figcaption></figure><hr>',34)]))}const g=s(p,[["render",o],["__file","ot-doc_ready.html.vue"]]),u=JSON.parse('{"path":"/posts/ot-doc_ready.html","title":"OtterTrade 文档站","lang":"zh-CN","frontmatter":{"category":["教程"],"tag":["OtterTrade"],"order":3,"permalink":"/posts/ot-doc_ready.html","description":"OtterTrade 文档站 起源 相关信息 有独立开发完成一个量化系统开发的人吗？ - 墨七的回答 - 知乎 https://www.zhihu.com/question/35977425/answer/3001448431 基于知乎的一篇回答建了一个群，拉起了一支团队， 并成立了一个 Github 组织 ， 然后大家一起研发了OtterTrade....","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/posts/ot-doc_ready.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"OtterTrade 文档站"}],["meta",{"property":"og:description","content":"OtterTrade 文档站 起源 相关信息 有独立开发完成一个量化系统开发的人吗？ - 墨七的回答 - 知乎 https://www.zhihu.com/question/35977425/answer/3001448431 基于知乎的一篇回答建了一个群，拉起了一支团队， 并成立了一个 Github 组织 ， 然后大家一起研发了OtterTrade...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"OtterTrade"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OtterTrade 文档站\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"文档站的构成","slug":"文档站的构成","link":"#文档站的构成","children":[]},{"level":2,"title":"命令介绍","slug":"命令介绍","link":"#命令介绍","children":[]},{"level":2,"title":"其它","slug":"其它","link":"#其它","children":[]},{"level":2,"title":"另外一种更新文档的方式","slug":"另外一种更新文档的方式","link":"#另外一种更新文档的方式","children":[]}],"git":{},"readingTime":{"minutes":3.3,"words":990},"filePathRelative":"posts/3.OtterTrade文档站.md","excerpt":"\\n<p><strong>起源</strong></p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>有独立开发完成一个量化系统开发的人吗？ - 墨七的回答 - 知乎<br>\\n<a href=\\"https://www.zhihu.com/question/35977425/answer/3001448431\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.zhihu.com/question/35977425/answer/3001448431</a></p>\\n</div>","autoDesc":true}');export{g as comp,u as data};
