<template><div><h1 id="_9-部署和发布" tabindex="-1"><a class="header-anchor" href="#_9-部署和发布"><span>9.部署和发布</span></a></h1>
<p>因为编译结果是一堆纯静态的 html 文件 和 js ，没有任何动态服务器生成的内容。</p>
<p>所以，一般的 html 文件如何部署，博客就是如何部署的。</p>
<p>官方文档<br>
<a href="https://theme-hope.vuejs.press/zh/get-started/deploy.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/get-started/deploy.html</a></p>
<p>基本原理就是：</p>
<p><code v-pre>pnpm run build</code> 之后</p>
<p>会生成 <code v-pre>dist</code> ，目录。</p>
<p>然后你的域名访问 <code v-pre>dist</code> 目录的文件内容，然后浏览器加载并解析文件内容并渲染呈现。</p>
</div></template>


