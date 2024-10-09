<template><div><h1 id="ottertrade-文档站" tabindex="-1"><a class="header-anchor" href="#ottertrade-文档站"><span>OtterTrade 文档站</span></a></h1>
<p><strong>起源</strong></p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>有独立开发完成一个量化系统开发的人吗？ - 墨七的回答 - 知乎<br>
<a href="https://www.zhihu.com/question/35977425/answer/3001448431" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/35977425/answer/3001448431</a></p>
</div>
<p>基于知乎的一篇回答建了一个群，拉起了一支团队，<br>
并成立了一个 <a href="https://github.com/otter-trade" target="_blank" rel="noopener noreferrer">Github 组织</a> ，<br>
然后大家一起研发了<a href="https://OtterTrade.com" target="_blank" rel="noopener noreferrer">OtterTrade.com</a> ，<br>
在最开始进行产品定位的时候，就要求主站必须精简、美观、大方、易使用。但是再怎么易使用，必要的文档说明是无法避免的。<br>
于是计划所有的解释说明的工作全部交给一个独立的文档站去承担。</p>
<p>文档站中包含了平台介绍，快速上手，系列教程，团队介绍，起源，愿景，规划等等等。可以说现阶段文档站的重要程度不亚于 <a href="http://OtterTrade.com" target="_blank" rel="noopener noreferrer">OtterTrade.com</a> 主站。在运营设计上，文档站有三个地址:</p>
<p>文档站(Github Pages)<br>
<a href="https://otter-trade.github.io" target="_blank" rel="noopener noreferrer">https://otter-trade.github.io</a></p>
<details class="hint-container details"><summary>宣发主站</summary>
<p><code v-pre>Github Pages</code> 的好处是完全免费，且不用担心服务器挂掉，或者出什么问题，维护简单，没有任何成本。而且 <code v-pre>github.io</code> 具有高度的辨识性，不用担心会被封禁。所以这个地址将会作为将来的宣发主站。</p>
<p>缺点是国内访问速度可能略慢。</p>
</details>
<p>文档站(新加坡备用地址)<br>
<a href="https://doc.OtterTrade.com" target="_blank" rel="noopener noreferrer">https://doc.OtterTrade.com</a></p>
<p>文档站(国内备用地址)<br>
<a href="https://ot-doc.mo7.cc" target="_blank" rel="noopener noreferrer">https://ot-doc.mo7.cc</a></p>
<p>文档站是导航，是回家的路，所以安全可靠的访问途径非常重要。</p>
<h2 id="文档站的构成" tabindex="-1"><a class="header-anchor" href="#文档站的构成"><span>文档站的构成</span></a></h2>
<p>文档站的源码存放于 <a href="https://github.com/otter-trade/doc-otter-trade" target="_blank" rel="noopener noreferrer">https://github.com/otter-trade/doc-otter-trade</a> ，是个开源仓库，主体由 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-hope</a> 搭建。</p>
<p>其编译结果存放于 <a href="https://github.com/otter-trade/otter-trade.github.io" target="_blank" rel="noopener noreferrer">https://github.com/otter-trade/otter-trade.github.io</a> 仓库，因此可以直接利用 <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Pages</a> 的特性。</p>
<p>然后通过 <a href="https://cloud.tencent.com/developer/article/2151039" target="_blank" rel="noopener noreferrer">Webhooks</a> 机制同时部署在两台不同的服务器之上。</p>
<p>所以文档站的基本工作流就是:</p>
<ol>
<li>向 <a href="https://github.com/mo7cc" target="_blank" rel="noopener noreferrer">墨七</a> 申请 <a href="https://github.com/otter-trade/doc-otter-trade" target="_blank" rel="noopener noreferrer">doc-otter-trade</a> 和 <a href="https://github.com/otter-trade/otter-trade.github.io" target="_blank" rel="noopener noreferrer">otter-trade.github.io</a> 这两个仓库的权限；</li>
<li>利用 <code v-pre>git clone</code> 命令下载文档站源码；</li>
<li>在编写完对应文档之后，编译打包并推送至 <a href="https://github.com/otter-trade/otter-trade.github.io" target="_blank" rel="noopener noreferrer">otter-trade.github.io</a> 仓库完成发布。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 克隆 文档站 源码到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git@github.com:otter-trade/doc-otter-trade.git</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 用 Vscode 打开</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./doc-otter-trade</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你就获得了如下界面</p>
<figure><img src="@source/Yao_Pack/posts/img/OtterTrade文档站项目目录结构.png" alt="OtterTrade文档站项目目录结构" tabindex="0" loading="lazy"><figcaption>OtterTrade文档站项目目录结构</figcaption></figure>
<p>除此之外你可能还需要安装如下插件</p>
<figure><img src="@source/Yao_Pack/tutorial/vuepress-hope/img/vuepress需要安装的基础插件.png" alt="提升编写体验的基础插件" tabindex="0" loading="lazy"><figcaption>提升编写体验的基础插件</figcaption></figure>
<p>然后你就可以愉快的开始编写文档了！</p>
<h2 id="命令介绍" tabindex="-1"><a class="header-anchor" href="#命令介绍"><span>命令介绍</span></a></h2>
<p>在项目目录的 <code v-pre>./package.json</code> 文件中我提前编写了如下指令</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // ....</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress-vite dev src"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "build"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress-vite build src"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "clean-dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress-vite dev src --clean-cache"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "update-package"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pnpm dlx vp-update"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "sync"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./_shell/GitSync.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "deploy"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./_shell/Deploy.sh"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // ....</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法如下:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 在本地启动该项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编译该项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clean-dev</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 清除所有的编译缓存，并启动项目，如果一些配置或者编写的文章没有生效则可以使用该指令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update-package</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 更新项目依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sync</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 拉取 Github 上的最新改动，并保存和提交当前改动 同时 推送至 Github ，需要仓库权限</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  deploy</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编译本项目并同时推送至  otter-trade.github.io 仓库， 然后将会自动完成项目的部署与发布, 需要仓库权限</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它"><span>其它</span></a></h2>
<p>如果你想编写出华丽的可交互的文档可以查看和学习如下教程<br>
<a href="https://theme-hope.vuejs.press/zh/guide/markdown/intro.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/guide/markdown/intro.html</a></p>
<p>如果你想让文档具有更多功能可以学习如下教程<br>
<a href="https://theme-hope.vuejs.press/zh/guide/component/built-in.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/guide/component/built-in.html</a></p>
<h2 id="另外一种更新文档的方式" tabindex="-1"><a class="header-anchor" href="#另外一种更新文档的方式"><span>另外一种更新文档的方式</span></a></h2>
<figure><img src="@source/Yao_Pack/posts/img/直接使用github编辑1.png" alt="打开文档站，并点击 编辑此页" tabindex="0" loading="lazy"><figcaption>打开文档站，并点击 编辑此页</figcaption></figure>
<figure><img src="@source/Yao_Pack/posts/img/直接使用github编辑2.png" alt="在github中提交改动" tabindex="0" loading="lazy"><figcaption>在github中提交改动</figcaption></figure>
<hr>
</div></template>


