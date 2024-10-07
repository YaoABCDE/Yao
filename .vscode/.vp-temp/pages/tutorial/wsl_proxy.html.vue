<template><div><h1 id="_3-wsl-配置系统代理" tabindex="-1"><a class="header-anchor" href="#_3-wsl-配置系统代理"><span>3.WSL 配置系统代理</span></a></h1>
<p>一般情况下，WSL2 的 IP 地址每次启动时都会改变，如果想要在 wsl2 中使用 Windows 系统的代理来进行<code v-pre>科学上网</code>，可以使用如下代码。</p>
<p>进入 WSL 在 <code v-pre>~/.bashrc</code> 文件中添加如下指令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="~/.bashrc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">host_ip</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/resolv.conf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "nameserver"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cut</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> " "</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ALL_PROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"http://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$host_ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:10809"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>这里的原理就是:<br>
<code v-pre>/etc/resolv.conf</code> 文件中始终会更新当前 <code v-pre>WSL2</code> 在 <code v-pre>Windows</code> 系统中的局域网 IP，所以就写一行指令动态获取该 IP。</p>
<p>这里的 <code v-pre>:10809</code> 是 windows 的系统代理端口</p>
</div>
<p>效果如下：</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>本地代理客户端必须要勾选 <code v-pre>允许来自局域网的连接</code>，也就是说，如果关闭代理客户端，<code v-pre>WSL2</code> 就等于处在断网状态。</p>
</div>
<figure><img src="@source/tutorial/image/wsl_proxy.png" alt="WSL代理设置" tabindex="0" loading="lazy"><figcaption>WSL代理设置</figcaption></figure>
<p>简单来说是以下几步</p>
<ol>
<li>打开本地的代理工具，设置好 windows 端口如 10809</li>
<li>在 wsl 中设置好动态的 ip 脚本</li>
<li>查看 Windows 的系统代理是否 OK</li>
<li>在 WSL 中测试一下是否可以访问 <a href="http://google.com" target="_blank" rel="noopener noreferrer">google.com</a></li>
<li>如果不行就试着重新安装 <code v-pre>WSL</code> 或者重启 windows 系统</li>
</ol>
<hr>
</div></template>


