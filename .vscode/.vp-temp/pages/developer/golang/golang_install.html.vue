<template><div><h1 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1.安装</span></a></h1>
<p>官网地址：<br>
<a href="https://golang.google.cn/" target="_blank" rel="noopener noreferrer">https://golang.google.cn/</a></p>
<p>国内 Wiki<br>
<a href="https://learnku.com/go/wikis" target="_blank" rel="noopener noreferrer">https://learnku.com/go/wikis</a></p>
<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h2>
<p>可以无脑的依次执行以下命令:</p>
<div class="hint-container warning">
<p class="hint-container-title">注意！</p>
<p>一定要区分系统的架构类型，尤其是常见的 amd 和 arm 架构。<br>
每次版本更新时 只需要将版本号 <code v-pre>go1.23.2</code> 换成最新版本号即可。</p>
</div>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看系统类型</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">arch</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 下载地址(x86_64)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">DownloadUrl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://dl.google.com/go/go1.23.2.linux-amd64.tar.gz"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 下载地址(aarch64 arm64)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># DownloadUrl="https://dl.google.com/go/go1.23.2.linux-arm64.tar.gz"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 其余系统类型的下载地址可以查看 https://golang.google.cn/dl/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 开始下载</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "goPackage"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">DownloadUrl</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 删除老版本(亲测，不删除老版本会出现各种莫名其妙的问题)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/go</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 解压 goPackage 到 /usr/lib/go</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> goPackage</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  删除 goPackage</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> goPackage</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时 go 已经被安装到 <code v-pre>/usr/lib/go</code> 中了，接下来只需要将 go 指令添加到环境变量中。</p>
<hr>
<p>将下面两行追加到 <code v-pre>/etc/profile</code> 文件中。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> GOROOT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">go</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$GOROOT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$GOPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启机器或者执行 <code v-pre>source /etc/profile</code>。</p>
<blockquote>
<p>环境变量只需要添加一次，后续更新只需要反复执行安装脚本即可。</p>
</blockquote>
<h2 id="windows-macos" tabindex="-1"><a class="header-anchor" href="#windows-macos"><span>Windows &amp;&amp; MacOS</span></a></h2>
<p>第一步，在命令行输入 <code v-pre>arch</code> 查看机器硬件架构类型</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">arch</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 会打印显示:  arm64 或 x86_64 或其它</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>windows 下则是使用 sysyeminfo 命令</summary>
<figure><img src="@source/developer/image/sysyeminfo.png" alt="sysyeminfo 命令示意图" tabindex="0" loading="lazy"><figcaption>sysyeminfo 命令示意图</figcaption></figure>
</details>
<p>第二步，下载对应的安装包</p>
<p>官网安装包下载地址：<br>
<a href="https://golang.google.cn/dl/" target="_blank" rel="noopener noreferrer">https://golang.google.cn/dl/</a></p>
<p>国内镜像站：<br>
<a href="https://studygolang.com/dl" target="_blank" rel="noopener noreferrer">https://studygolang.com/dl</a></p>
<blockquote>
<p>这利推荐使用官网的下载地址，实测国内镜像存在版本落后问题。</p>
</blockquote>
<figure><img src="@source/developer/golang/image/download-go.png" alt="下载go安装包" tabindex="0" loading="lazy"><figcaption>下载go安装包</figcaption></figure>
<p>Windows 下载 <code v-pre>.mis</code> 文件，无脑下一步<br>
MacOS 下载 <code v-pre>.pkg</code> 文件，无脑下一步</p>
<h2 id="检查安装结果" tabindex="-1"><a class="header-anchor" href="#检查安装结果"><span>检查安装结果</span></a></h2>
<p>打开命令行执行如下命令查看版本号</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Linux 、 Windows 、 MacOS 均一样</p>
</blockquote>
<h2 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理"><span>设置代理</span></a></h2>
<p>通常都用的七牛云的：<a href="https://goproxy.cn/" target="_blank" rel="noopener noreferrer">https://goproxy.cn/</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置代理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GO111MODULE=on</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GOPROXY=https://goproxy.cn,direct</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看当前go环境配置，是否修改成功</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Linux 、 Windows 、 MacOS 均一样。<br>
Google 和 Github 的官方服务速度很快，一般只有墙内的服务器才需要设置代理。</p>
</blockquote>
<h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world"><span>Hello World</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 初始化仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">projectNam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>会在当前目录下创建 <code v-pre>go.mod</code> 文件，表明该目录为 go 的工作目录。</p>
</blockquote>
<p>新建 <code v-pre>main.go</code> 文件:</p>
<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="./main.go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	"fmt"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	"os"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用 <code v-pre>go</code> 命令执行和编译该文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> main.go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "墨七"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 将当前工作区 编译名为 SayHello 二进制可执行文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> SayHello</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多版本管理" tabindex="-1"><a class="header-anchor" href="#多版本管理"><span>多版本管理</span></a></h2>
<p><a href="https://www.cnblogs.com/pebblecome/p/14815365.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/pebblecome/p/14815365.html</a></p>
<blockquote>
<p>go 并不需要版本管理，我的建议是直接使用最新版本</p>
</blockquote>
</div></template>


