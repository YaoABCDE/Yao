<template><div><h1 id="_3-文件编码" tabindex="-1"><a class="header-anchor" href="#_3-文件编码"><span>3.文件编码</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：本文中的一些超链接你可能会打不开，那很可能是因为需要 <RouteLink to="/developer/basic/proxy_to_net.html">科学上网</RouteLink>。</p>
</div>
<p>不知道你有没有遇到过，打开一个<code v-pre>.txt</code>文件却发现文件乱码了？这种时候往往是因为使用了不一样的编码格式去打开文件导致的。</p>
<p>比如当前正在编写的这篇文章，如果采用 <a href="https://zh.wikipedia.org/wiki/%E6%B1%89%E5%AD%97%E5%86%85%E7%A0%81%E6%89%A9%E5%B1%95%E8%A7%84%E8%8C%83" target="_blank" rel="noopener noreferrer">GBK</a> 编码打开，就会变成一堆不认识的字符：</p>
<figure><img src="@source/developer/image/gbk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>但是同样的一篇文章采用 <a href="https://zh.wikipedia.org/wiki/UTF-8" target="_blank" rel="noopener noreferrer">UTF-8</a> 打开则可以正常阅读：</p>
<figure><img src="@source/developer/image/utf8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>因为这篇文章就是在 <code v-pre>UTF-8</code> 编码规则下编写的。 而<code v-pre>GBK</code>编码是 windows 系统早期的默认编码。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果没啥特殊需求，一般编写文件内容默认使用 <code v-pre>UTF-8</code> 是一定没错的。 <code v-pre>UTF-8</code> 现在基本是大多数操作系统的默认编码。</p>
<p>也是因为编码的问题，所以一般来说，很多国外开发的老式软件无法在 中文目录下成功运行，所以目录名一般不推荐使用中文。</p>
</div>
<p>拓展阅读 <a href="https://www.cnblogs.com/Rainingday/p/14641104.html" target="_blank" rel="noopener noreferrer">ASCII 编码、GBK 编码，Unicode 编码和 UTF-8</a></p>
<BiliBili bvid="BV1cB4y177QR" /></div></template>


