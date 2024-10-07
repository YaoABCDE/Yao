<template><div><h1 id="npm-常用命令" tabindex="-1"><a class="header-anchor" href="#npm-常用命令"><span>npm 常用命令</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>该文档有待补充和完善</p>
</div>
<h2 id="阿里巴巴开源镜像站" tabindex="-1"><a class="header-anchor" href="#阿里巴巴开源镜像站"><span>阿里巴巴开源镜像站</span></a></h2>
<p><a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">https://developer.aliyun.com/mirror/</a></p>
<h2 id="npm-镜像站" tabindex="-1"><a class="header-anchor" href="#npm-镜像站"><span>npm 镜像站</span></a></h2>
<p><a href="http://www.npmmirror.com/" target="_blank" rel="noopener noreferrer">http://www.npmmirror.com/</a></p>
<h2 id="linux-设置本地代理" tabindex="-1"><a class="header-anchor" href="#linux-设置本地代理"><span>Linux 设置本地代理</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ALL_PROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">socks5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">10808</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些其它指令" tabindex="-1"><a class="header-anchor" href="#一些其它指令"><span>一些其它指令</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## npm 升级</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> npm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 清除缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clean</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 卸载</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> uninstall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xxx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (-g)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 查看更新</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> outdated</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 其它指令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> audit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> audit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fix</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> audit</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


