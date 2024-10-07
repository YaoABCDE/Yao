<template><div><h1 id="_1-环境准备与项目启动" tabindex="-1"><a class="header-anchor" href="#_1-环境准备与项目启动"><span>1.环境准备与项目启动</span></a></h1>
<p>当前博客采用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-hope</a> 搭建，这是一个免费开源的项目，是我用过的最强大和灵活的静态博客生成工具。</p>
<p>但是想要完全用好这款工具搭建出符合自己心意的博客，必须得具有一定的知识储备和掌握必要的工具。</p>
<h2 id="必要的知识储备" tabindex="-1"><a class="header-anchor" href="#必要的知识储备"><span>必要的知识储备</span></a></h2>
<p><RouteLink to="/developer/basic/">墨七编写的 编程基础入门</RouteLink></p>
<p>相对路径，命令行，文件编码，开发工具，Git，Github 都需要具备一定的概念才可以。</p>
<h2 id="工具准备" tabindex="-1"><a class="header-anchor" href="#工具准备"><span>工具准备</span></a></h2>
<h3 id="命令行环境" tabindex="-1"><a class="header-anchor" href="#命令行环境"><span>命令行环境</span></a></h3>
<p><RouteLink to="/developer/front_end_web/nodejs_ready.html">Nodejs 基础环境搭建</RouteLink></p>
<h3 id="编辑器" tabindex="-1"><a class="header-anchor" href="#编辑器"><span>编辑器</span></a></h3>
<p><RouteLink to="/tools/vscode/">Visual Studio Code 使用说明</RouteLink></p>
<p>为了良好的体验，需要安装的插件：</p>
<p><strong>Vue - Official</strong><br>
<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=Vue.volar</a></p>
<p><strong>Prettier - Code formatter</strong><br>
<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode</a></p>
<h2 id="官方文档说明" tabindex="-1"><a class="header-anchor" href="#官方文档说明"><span>官方文档说明</span></a></h2>
<p>打开 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-hope 官网</a></p>
<p>它的文档结构长这样：</p>
<figure><img src="@source/tutorial/vuepress-hope/img/vuepress-hope网站说明.png" alt="vuepress-hope 网站结构" tabindex="0" loading="lazy"><figcaption>vuepress-hope 网站结构</figcaption></figure>
<p>一般来说，按照顺序一步步走下去就可以把项目成功启动起来。</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h2>
<p>如果准备工作妥当，我们这里直接开始。</p>
<p>打开命令行，找一个自己心仪的目录执行以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> my-docs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><details class="hint-container details"><summary>命令解读</summary>
<p><code v-pre>pnpm</code>: 这个是 <code v-pre>Nodejs</code> 当下最流行的的包管理器，上文中有写到。<br>
<code v-pre>create</code>: 这个是 pnpm 内置的一个命令，意思是 通过 模板创建一个项目<br>
<code v-pre>vuepress-theme-hope</code>: 模板的名称<br>
<code v-pre>my-docs</code>: 这个是项目名称，你完全可以自定义这部分改成自己喜欢的名字。建议使用英文字母、下划线以及中短杠</p>
</details>
<p>执行完命令之后会有一些问题需要你回答一下:<br>
<img src="@source/tutorial/vuepress-hope/img/project_init.png" alt="命令执行演示" loading="lazy"></p>
<p>完成之后当前目录就会创建一个项目目录，我们用 vscode 打开这个项目：</p>
<figure><img src="@source/tutorial/vuepress-hope/img/project目录结构.png" alt="vuepress-hope 目录结构说明" tabindex="0" loading="lazy"><figcaption>vuepress-hope 目录结构说明</figcaption></figure>
<p>其中 博客的程序和配置部分全部都会存放在 <code v-pre>src/.vuepress</code> 目录下。<br>
<code v-pre>src/</code> 目录下除开 <code v-pre>.vuepress</code> 目录之外的目录和文件都会被视作文档。</p>
<p><code v-pre>node_modules</code> 是依赖存放的目录，一般不需要去管它。</p>
<p><code v-pre>package.json</code> 是项目描述文件，其中</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "docs:build"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress-vite build src"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "docs:clean-dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress-vite dev src --clean-cache"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "docs:dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress-vite dev src"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "docs:update-package"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pnpm dlx vp-update"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部分是你可用的脚本。比如这里就提供了 4 个脚本，你可以这么使用它：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装依赖 这个是 pnpm 提供的基本能力</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 将项目进行打包，准备发版 ， 对应 package.json scripts 里面的  docs:build  命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 清除缓存并启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docs:clean-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动本地预览服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 升级所有的依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docs:update-package</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对的，其基本的语法就是 <code v-pre>pnpm run xxx</code> 。 <code v-pre>xxx</code> 就是 <code v-pre>package.json</code> 的 <code v-pre>scripts</code> 属性提供的。</p>
<p>如果没什么问题，你应该可以成功启动项目并看到你的博客雏形了。</p>
<h2 id="另一种方案" tabindex="-1"><a class="header-anchor" href="#另一种方案"><span>另一种方案</span></a></h2>
<p>我当前的博客源码已经在 <code v-pre>github</code> 中开源了，地址为<br>
<a href="https://github.com/mo7cc/blog-source" target="_blank" rel="noopener noreferrer">https://github.com/mo7cc/blog-source</a></p>
<p>你可以直接点击下载并解压。</p>
<figure><img src="@source/tutorial/vuepress-hope/img/download_source_code.png" alt="直接下载源码" tabindex="0" loading="lazy"><figcaption>直接下载源码</figcaption></figure>
<p>项目结构说明如下:</p>
<figure><img src="@source/tutorial/vuepress-hope/img/mo7-blog项目结构.png" alt="mo7-blog 的 项目结构" tabindex="0" loading="lazy"><figcaption>mo7-blog 的 项目结构</figcaption></figure>
<p>也就是说，我的博客项目 命令如下:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 本地启动预览</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 打包变异准备发版</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 更新依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update-package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 一条指令同步到远程仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">同步说</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">明></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 一条指令发布博客</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deploy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">发布说</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">明></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 开源博客的源码部分</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">开源说</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">明></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 新建一个周工作计划表</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weekly</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


