<template><div><h1 id="_2-fnm-管理-nodejs" tabindex="-1"><a class="header-anchor" href="#_2-fnm-管理-nodejs"><span>2.fnm 管理 Nodejs</span></a></h1>
<p>当你本地存在多个项目，且依赖的 nodejs 版本不尽相同，就需要使用 nodejs 版本管理工具了，它允许同一台机器中多个 nodejs 版本共存且可以随时切换。</p>
<p>fnm 类似于 nvm，是一个 nodejs 版本管理工具， 他比 nvm 更加迅速，应该是目前已知最好的 nodejs 版本管理工具。</p>
<p>fnm 的特点是:</p>
<ul>
<li>跨平台，支持 macOS、Windows、Linux。</li>
<li>使用 Rust 编写，速度快。发布为单文件，便于安装。</li>
<li>支持按应用自动切换 Node.js 版本。</li>
</ul>
<p>fnm 的 Github 仓库地址：<br>
<a href="https://github.com/Schniz/fnm" target="_blank" rel="noopener noreferrer">https://github.com/Schniz/fnm</a></p>
<h2 id="安装-fnm" tabindex="-1"><a class="header-anchor" href="#安装-fnm"><span>安装 fnm</span></a></h2>
<p>macOS &amp;&amp; Linux</p>
<p>第一步， 打开命令行执行如下操作</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://fnm.vercel.app/install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>第二步， 添加如下环境变量配置国内镜像</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title=" ~/.zshenv 或 ~/.bashrc 文件中" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  ~/.zshenv 或 ~/.bashrc 文件中:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> FNM_NODE_DIST_MIRROR</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">https</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">npmmirror</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">com</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mirrors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fnm-的基本使用" tabindex="-1"><a class="header-anchor" href="#fnm-的基本使用"><span>fnm 的基本使用</span></a></h2>
<p>罗列远程服务器上所有的 nodejs 版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fnm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ls-remote</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>安装某一个版本的 nodejs</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fnm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">versio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例如：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fnm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>则会安装 <code v-pre>Node v20.13.1 (arm64)</code> 也就是 node v20 的最新版本</p>
<hr>
<p>列出当前机器上已经安装的所有 nodejs 版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fnm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ls</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>卸载某一版本的 Node</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fnm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> uninstall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">versio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>切换 Node 版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fnm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">versio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>将某一版本设为默认</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fnm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">versio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">n></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<div class="hint-container info">
<p class="hint-container-title">这一套操作相当于完成了 fnm 对本地 nodejs 一些基本操作</p>
<p>增: <code v-pre>fnm install</code><br>
删: <code v-pre>fnm uninstall</code><br>
改: <code v-pre>fnm use</code> 和 <code v-pre>fnm default</code><br>
查: <code v-pre>fnm ls-remote</code> 和 <code v-pre>fnm ls</code></p>
<p>在使用过 <code v-pre>fnm use</code> 命令后，就可以直接使用 对应的 node 版本了。</p>
</div>
<h2 id="windows-环境下不推荐使用-fnm" tabindex="-1"><a class="header-anchor" href="#windows-环境下不推荐使用-fnm"><span>Windows 环境下不推荐使用 fnm</span></a></h2>
<p>因为我 Windows 开发环境一直使用的是 <a href="/tutorial/wsl_ready.html" target="_blank" rel="noopener noreferrer">WSL 子系统</a> ，如果 Windows 环境需要使用 nodejs 我建议直接下载 <code v-pre>.msi</code> 安装包进行使用。</p>
<p>详情可参考 <a href="/developer/front_end_web/nodejs_ready.html" target="_blank" rel="noopener noreferrer">nodejs 基础环境搭建</a></p>
</div></template>


