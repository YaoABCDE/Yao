import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/tutorial/vuepress-hope/step_config.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/vuepress-hope/step_config.html\",\"title\":\"2.配置文件讲解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"博客搭建教程\"],\"tag\":[\"教程\"],\"order\":2,\"permalink\":\"/tutorial/vuepress-hope/step_config.html\",\"description\":\"2.配置文件讲解 vuepress 的配置文件分为两类: 主配置文件： src/.vuepress/config.ts 文件内容 主题配置文件则是通过如下方式植入进来的。 一旦你使用了 vuepress-hope , 那么大部分的配置项都将在 src/.vuepress/theme.ts 中完成。 如果一个插件或者功能你在 config.ts 和 th...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yaoabcde.github.io/Yao/Yao/tutorial/vuepress-hope/step_config.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"2.配置文件讲解\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"2.配置文件讲解 vuepress 的配置文件分为两类: 主配置文件： src/.vuepress/config.ts 文件内容 主题配置文件则是通过如下方式植入进来的。 一旦你使用了 vuepress-hope , 那么大部分的配置项都将在 src/.vuepress/theme.ts 中完成。 如果一个插件或者功能你在 config.ts 和 th...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-09T09:22:35.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"教程\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-09T09:22:35.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"2.配置文件讲解\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-09T09:22:35.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"主配置文件：\",\"slug\":\"主配置文件\",\"link\":\"#主配置文件\",\"children\":[]},{\"level\":2,\"title\":\"客户端配置文件:\",\"slug\":\"客户端配置文件\",\"link\":\"#客户端配置文件\",\"children\":[]}],\"git\":{\"createdTime\":1728311364000,\"updatedTime\":1728465755000,\"contributors\":[{\"name\":\"YAO\",\"email\":\"1964877312@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.83,\"words\":248},\"filePathRelative\":\"Yao_Pack/tutorial/vuepress-hope/2.配置文件讲解.md\",\"localizedDate\":\"2024年10月7日\",\"excerpt\":\"\\n<p>vuepress 的配置文件分为两类:</p>\\n<h2>主配置文件：</h2>\\n<p><code>src/.vuepress/config.ts</code></p>\\n<details class=\\\"hint-container details\\\"><summary>文件内容</summary>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"src/.vuepress/config.ts\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> { </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">defineUserConfig</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> } </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">from</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'vuepress'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> theme</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> from</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> './theme.js'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> { </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">getDirname</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">path</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> } </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">from</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'vuepress/utils'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> __dirname</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> getDirname</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">meta</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">url</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> SrcPath</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> path</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">resolve</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">__dirname</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'../'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">export</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#C678DD\\\"> default</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> defineUserConfig</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">({</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  alias</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">    '@components'</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> path</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">resolve</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">__dirname</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'components'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">),</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">    '@src'</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> SrcPath</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  },</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  dest</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'dist'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  host</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> '0.0.0.0'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  port</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 9451</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  base</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> '/Yao/'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,  </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//部署站点的基础路径</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  temp</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> '.vscode/.vp-temp'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  cache</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> '.vscode/.vp-cache'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  locales</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">    '/'</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      lang</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'zh-CN'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//语言选项</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      title</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'YAO'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//主页标题</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      description</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> '我欲修仙，快乐齐天'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//站点的描述</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    },</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">    '/en/'</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      lang</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'en-US'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      title</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'Yao'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      description</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'Hello Yao'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    },</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  },</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  theme</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">  // Enable it with pwa</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">  shouldPrefetch</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> false</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">});</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></details>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
