<template><div><h1 id="golang-vscode-开发环境搭建" tabindex="-1"><a class="header-anchor" href="#golang-vscode-开发环境搭建"><span>golang vscode 开发环境搭建</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>该文档有待补充和完善</p>
</div>
<p>按住 F1 按键</p>
<p>输入: <code v-pre>go:install</code></p>
<p>然后选择安装</p>
<h2 id="额外的一些配置工具-好像也不是很有必要" tabindex="-1"><a class="header-anchor" href="#额外的一些配置工具-好像也不是很有必要"><span>额外的一些配置工具（好像也不是很有必要）</span></a></h2>
<p><a href="https://www.jianshu.com/p/0f150ea1fd48" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/0f150ea1fd48</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 更严格的代码格式化工具</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mvdan.cc/gofumpt@latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="风格" tabindex="-1"><a class="header-anchor" href="#风格"><span>风格</span></a></h2>
<p><a href="https://blog.csdn.net/zhetmdoubeizhanyong/article/details/102534172" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/zhetmdoubeizhanyong/article/details/102534172</a></p>
<h2 id="gofumpt" tabindex="-1"><a class="header-anchor" href="#gofumpt"><span>gofumpt</span></a></h2>
<p>settings.json</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "go.useLanguageServer"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "gopls"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "formatting.gofumpt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


