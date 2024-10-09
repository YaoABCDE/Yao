<template><div><h1 id="_1-nodejs-基础环境搭建" tabindex="-1"><a class="header-anchor" href="#_1-nodejs-基础环境搭建"><span>1.Nodejs 基础环境搭建</span></a></h1>
<p>严格来说 <code v-pre>nodejs</code> 属于服务端的技术，并不属于 <code v-pre>Web 前端</code> , 但是当下前端开发基本上无法离开 <code v-pre>nodejs</code> 了。</p>
<p>官网地址：<br>
<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">https://nodejs.org/</a></p>
<h2 id="在-macos-和-windows-上安装-node-js" tabindex="-1"><a class="header-anchor" href="#在-macos-和-windows-上安装-node-js"><span>在 macOS 和 Windows 上安装 Node.js</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>macOS 和 Windows 官方都有发布安专门的安装包，所以安装方式基本相同，但是得注意区分硬件架构。</p>
</div>
<h3 id="第一步-查看机器硬件架构类型" tabindex="-1"><a class="header-anchor" href="#第一步-查看机器硬件架构类型"><span>第一步，查看机器硬件架构类型</span></a></h3>
<p>打开终端做如下输入并回车</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">arch</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 会打印显示如:  arm64 或 x86_64 或其它</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>windows 下则是使用 sysyeminfo 命令</summary>
<figure><img src="@source/Yao_Pack/developer/image/sysyeminfo.png" alt="sysyeminfo 命令示意图" tabindex="0" loading="lazy"><figcaption>sysyeminfo 命令示意图</figcaption></figure>
</details>
<h3 id="第二步-下载安装包" tabindex="-1"><a class="header-anchor" href="#第二步-下载安装包"><span>第二步，下载安装包</span></a></h3>
<p><a href="https://nodejs.org/en/download/prebuilt-installer" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/download/prebuilt-installer</a></p>
<figure><img src="@source/Yao_Pack/developer/front_end_web/image/download_nodejs.png" alt="下载NodeJS" tabindex="0" loading="lazy"><figcaption>下载NodeJS</figcaption></figure>
<p>然后双击运行无脑下一步。</p>
<h2 id="linux-下安装-nodejs" tabindex="-1"><a class="header-anchor" href="#linux-下安装-nodejs"><span>Linux 下安装 NodeJs</span></a></h2>
<p>Github 文档:</p>
<p><a href="https://github.com/nodesource/distributions" target="_blank" rel="noopener noreferrer">https://github.com/nodesource/distributions</a></p>
<p>总结下来就两行命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://deb.nodesource.com/setup_current.x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nodejs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Github 文档写的非常详细，这里就不再赘述了。</p>
<h2 id="验证安装结果" tabindex="-1"><a class="header-anchor" href="#验证安装结果"><span>验证安装结果</span></a></h2>
<p>重启终端做如下输入</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 会打印当前 nodejs 版本如： v20.12.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 会打印当前 npm 版本如： 10.5.2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>至此 nodejs 安装成功</p>
</blockquote>
<h2 id="npm-加速设置" tabindex="-1"><a class="header-anchor" href="#npm-加速设置"><span>npm 加速设置</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>npm 是 nodejs 的默认包管理器，其官方镜像地址 <a href="https://registry.npmjs.org" target="_blank" rel="noopener noreferrer">https://registry.npmjs.org</a> 在海外，直接使用会出现各种依赖安装失败的问题。<br>
所以一般都会采用国内镜像，或者设置代理服务。</p>
</div>
<h3 id="_1-使用阿里云镜像" tabindex="-1"><a class="header-anchor" href="#_1-使用阿里云镜像"><span>1. 使用阿里云镜像</span></a></h3>
<p>阿里云镜像应该是目前国内使用最普遍的 npm 镜像站了</p>
<p>镜像官网：<br>
<a href="https://www.npmmirror.com/" target="_blank" rel="noopener noreferrer">https://www.npmmirror.com/</a></p>
<p>直接执行如下命令即可完成镜像源的替换</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://registry.npmmirror.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><details class="hint-container details"><summary>详情</summary>
<p>它会创建 <code v-pre>~/.npmrc</code> 文件，并填充如下内容</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">registry</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">https</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//registry.npmmirror.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个配置文件如果放在 <code v-pre>~/.npmrc</code> 用户目录下就是全局设置，如果放在项目目录下 <code v-pre>./.npmrc</code>，则作为项目的独立设置。</p>
<p>同理，想要换回官方镜像，手动删除 <code v-pre>~/.npmrc</code> 中对应的配置项，或者执行如下命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></details>
<h3 id="_2-使用全局的命令行代理" tabindex="-1"><a class="header-anchor" href="#_2-使用全局的命令行代理"><span>2. 使用全局的命令行代理</span></a></h3>
<blockquote>
<p>具体细节可参考文章 <a href="/tutorial/proxy_wall_ready.html" target="_blank" rel="noopener noreferrer">科学上网与本地代理</a></p>
</blockquote>
<p>如果你把代理关了，使用 npm 更新依赖时会有如下显示</p>
<figure><img src="@source/Yao_Pack/developer/front_end_web/image/npm_local_propxy.png" alt="npm更新依赖报错" tabindex="0" loading="lazy"><figcaption>npm更新依赖报错</figcaption></figure>
<hr>
<div class="hint-container info">
<p class="hint-container-title">提示</p>
<p>上述两种加速方式，可同时使用。</p>
<p>命令行代理则更为通用一些，本质上也会更安全纯粹一些。</p>
<p>不过一般情况下 使用阿里云镜像已经可以满足 90% 的场景了。</p>
</div>
<hr>
<h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm"><span>pnpm</span></a></h2>
<p>pnpm 现在呼声很高，因为其非常优异的机制和设计，速度很快。避免了部分 npm 的坑。<br>
是一个非常棒的 npm 的替代品。</p>
<p>pnpm 官网:<br>
<a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">https://pnpm.io/zh/</a></p>
<p>官网给了很多的 pnpm 的安装方式，但是我推荐的安装方式只有一种</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pnpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>其余的安装方式多多少少都会存在一些问题</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>全局依赖的安装依然推荐使用 <code v-pre>npm -g install</code> 命令，项目目录依赖则推荐使用 <code v-pre>pnpm install</code> 命令，这样不会乱，而且会很清爽，问题也最少。</p>
</div>
<blockquote>
<p>pnpm 和 npm 一样，会优先使用项目目录的 <code v-pre>./.npmrc</code> 配置文件，如果项目目录不存在才会使用 用户目录下的 <code v-pre>~/.npmrc</code></p>
</blockquote>
<h2 id="windows-下-使用-git-bash-来执行-npm-指令中的脚本" tabindex="-1"><a class="header-anchor" href="#windows-下-使用-git-bash-来执行-npm-指令中的脚本"><span>windows 下 使用 git-bash 来执行 npm 指令中的脚本</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> script-shell</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">meichangliang</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Git</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">bin</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">bash.exe"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>命令中的 <code v-pre>&quot;C:\\meichangliang\\Git\\bin\\bash.exe&quot;</code> 地址需要更换为你 windows 系统中 Git 的安装目录。</p>
<p>地址里面 <code v-pre>\\</code> 中的第一个 <code v-pre>\</code> 实为转义符。</p>
</div>
<p>详细可 参考 <RouteLink to="/Yao_Pack/tools/git/">Git 的基本安装和使用</RouteLink></p>
<h2 id="环境安装结果的验证" tabindex="-1"><a class="header-anchor" href="#环境安装结果的验证"><span>环境安装结果的验证</span></a></h2>
<p>打开命令行工具，依次验证如下命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># v20.12.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 10.5.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 9.1.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果设置了镜像源 则会输出 https://registry.npmmirror.com 的镜像地址</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world"><span>Hello World</span></a></h2>
<p>新建 <code v-pre>main.js</code> 文件：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="./main.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> text</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Hello World !'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用 <code v-pre>node</code> 命令执行该文件:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./main.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


