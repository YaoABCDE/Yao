<template><div><h1 id="_2-设置代理加速" tabindex="-1"><a class="header-anchor" href="#_2-设置代理加速"><span>2.设置代理加速</span></a></h1>
<h2 id="系统代理设置" tabindex="-1"><a class="header-anchor" href="#系统代理设置"><span>系统代理设置</span></a></h2>
<p>参考文档<br>
<RouteLink to="/tutorial/proxy_wall_ready.html">科学上网与本地代理教程</RouteLink></p>
<h2 id="ssh-协议代理" tabindex="-1"><a class="header-anchor" href="#ssh-协议代理"><span>ssh 协议代理</span></a></h2>
<p>如下面这种指令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git@github.com:handy-golang/go-tools.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这里是使用 ssh 协议进行 远程仓库访问的，这个时候 是不走 http 代理的</p>
<p>可以通过 ssh 跳板机 完成代理。</p>
<p>参考文档：<br>
<RouteLink to="/tutorial/ssh_jump.html">ssh 跳板机</RouteLink></p>
<h2 id="仅仅只是添加局部代理" tabindex="-1"><a class="header-anchor" href="#仅仅只是添加局部代理"><span>仅仅只是添加局部代理</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http://127.0.0.1:10809'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http://127.0.0.1:10809'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 只代理 github</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http.https://github.com.proxy'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http://127.0.0.1:10809'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https.https://github.com.proxy'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http://127.0.0.1:10809'</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">##取消代理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https.proxy</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


