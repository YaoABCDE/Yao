<template><div><h1 id="_5-系统软件包管理器" tabindex="-1"><a class="header-anchor" href="#_5-系统软件包管理器"><span>5.系统软件包管理器</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：本文中的一些超链接你可能会打不开，那很可能是因为需要 <RouteLink to="/developer/basic/proxy_to_net.html">科学上网</RouteLink>。</p>
</div>
<p>当你学会命令行的基本使用之后，那么就相当于一只脚踏入了另一个世界。<br>
除了从应用商店安装下载之外，一般情况下还可以通过 <a href="https://juejin.cn/post/6884417656699486221" target="_blank" rel="noopener noreferrer">软件包管理系统</a> 来安装各种好用的命令和工具。</p>
<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h2>
<p>一般 debian 系 的系统比如 <code v-pre>Ubuntu</code> 默认的包管理器都是 <a href="https://blog.csdn.net/qq_50001789/article/details/131401922" target="_blank" rel="noopener noreferrer">apt 命令</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 例如 安装git命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 卸载 git命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看一些可更新的包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 升级软件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装 curl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> curl</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><BiliBili bvid="BV1Yj411B7ns" /><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h2>
<p>macOS 上一般都是用 <a href="https://brew.sh/zh-cn/" target="_blank" rel="noopener noreferrer">Homebrew</a> 来进行包管理</p>
<p>当然，原版的安装可能需要 <RouteLink to="/tutorial/proxy_wall_ready.html">科学上网</RouteLink></p>
<p>那么你可能需要看下面这篇文章<br>
<a href="https://www.zhihu.com/tardis/zm/art/111014448" target="_blank" rel="noopener noreferrer">Homebrew 国内如何自动安装（国内地址）（Mac OS）</a></p>
<BiliBili bvid="BV1dR4y1b7e1" /><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>windows</span></a></h2>
<p><a href="https://sspai.com/post/65933" target="_blank" rel="noopener noreferrer">https://sspai.com/post/65933</a></p>
<p>之前我会在 windows 上使用各种包管理器来安装各种插件，但自从有了 <RouteLink to="/tools/wsl_ready.html">WSL</RouteLink> 之后，我所有的和命令行相关的工作全部用 <code v-pre>WSL</code> 去完成了。</p>
<p>windows 下最适合的方式就是用 <code v-pre>git-bash</code> 和 <code v-pre>WSL</code> ，以及鼠标点点点。</p>
<p>当然，依然存在教学视频</p>
<BiliBili bvid="BV18D4y1v7DA" /></div></template>


