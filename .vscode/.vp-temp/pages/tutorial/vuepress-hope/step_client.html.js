import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/tutorial/vuepress-hope/step_client.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/vuepress-hope/step_client.html\",\"title\":\"4.主题魔改说明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"博客搭建教程\"],\"tag\":[\"教程\"],\"order\":4,\"permalink\":\"/tutorial/vuepress-hope/step_client.html\",\"description\":\"4.主题魔改说明 整个站站点的修改分为以下几个部分 插件式美化 src/.vuepress/client.ts 文件内容 插件源码都在 Github 上，可以自行查看： https://github.com/mo7cc/blog-source/tree/main/src/.vuepress/components 每个插件都代表了某一个部分的美化效果，每...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.mo7.cc/tutorial/vuepress-hope/step_client.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"墨七\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"4.主题魔改说明\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"4.主题魔改说明 整个站站点的修改分为以下几个部分 插件式美化 src/.vuepress/client.ts 文件内容 插件源码都在 Github 上，可以自行查看： https://github.com/mo7cc/blog-source/tree/main/src/.vuepress/components 每个插件都代表了某一个部分的美化效果，每...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"教程\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"4.主题魔改说明\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"墨七\\\",\\\"url\\\":\\\"https://mo7.cc\\\",\\\"email\\\":\\\"mo7@mo7.cc\\\"}]}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://blog.mo7.cc/atom.xml\",\"title\":\"墨七 Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://blog.mo7.cc/feed.json\",\"title\":\"墨七 JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://blog.mo7.cc/rss.xml\",\"title\":\"墨七 RSS Feed\"}]]},\"headers\":[{\"level\":2,\"title\":\"插件式美化\",\"slug\":\"插件式美化\",\"link\":\"#插件式美化\",\"children\":[]},{\"level\":2,\"title\":\"一些其余的效果\",\"slug\":\"一些其余的效果\",\"link\":\"#一些其余的效果\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":2.28,\"words\":684},\"filePathRelative\":\"tutorial/vuepress-hope/4.主题魔改说明.md\",\"excerpt\":\"\\n<p>整个站站点的修改分为以下几个部分</p>\\n<h2>插件式美化</h2>\\n<p><code>src/.vuepress/client.ts</code></p>\\n<details class=\\\"hint-container details\\\"><summary>文件内容</summary>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"src/.vuepress/client.ts\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> { </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">defineClientConfig</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> } </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">from</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'vuepress/client'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> { </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">onMounted</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> } </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">from</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> { </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> } </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">from</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'vuepress-theme-hope/presets/bounce-icon.scss'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 为页面图标添加鼠标悬停的跳动效果。</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> TopNavBeautify</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/TopNavBeautify.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> HeroBG</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/HeroBG.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> HeroHitokoto</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/HeroHitokoto.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> NavMusic</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/NavMusic.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> PrintVersion</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/PrintVersion.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> CommentHideBtn</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/CommentHideBtn.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> MyIcon</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/MyIcon.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> BlogBg</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/BlogBg.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> BlogBeautify</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/BlogBeautify.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> PreviewImage</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineAsyncComponent</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#61AFEF\\\"> import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'./components/PreviewImage.vue'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">export</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#C678DD\\\"> default</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineClientConfig</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">({</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">  enhance</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">({ </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">app</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">router</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">siteData</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> }) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    app</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">component</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'MyIcon'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">MyIcon</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  },</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">  setup</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    onMounted</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {});</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  },</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  rootComponents</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    TopNavBeautify</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    HeroBG</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    HeroHitokoto</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    NavMusic</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    PrintVersion</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    CommentHideBtn</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    BlogBeautify</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    BlogBg</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    PreviewImage</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">    // ...</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  ],</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">});</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></details>\",\"autoDesc\":true}")
export { comp, data }
