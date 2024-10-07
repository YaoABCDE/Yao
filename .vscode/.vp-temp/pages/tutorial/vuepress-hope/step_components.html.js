import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/tutorial/vuepress-hope/step_components.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/vuepress-hope/step_components.html\",\"title\":\"3.如何编写自定义组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"博客搭建教程\"],\"tag\":[\"教程\"],\"order\":3,\"permalink\":\"/tutorial/vuepress-hope/step_components.html\",\"description\":\"3.如何编写自定义组件 如何编写自定义组件啊，这个教程是真的很难写，会就是会，不会的话要学习的知识是很多的。但我还是尽力去讲解吧。 我这里用一个最简单的组件来举例子: src/.vuepress/components/PrintVersion.vue 他的引用方式如下: 在 src/.vuepress/client.ts 文件中 他干的事情很简单，就是...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.mo7.cc/Yao/tutorial/vuepress-hope/step_components.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"墨七\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"3.如何编写自定义组件\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"3.如何编写自定义组件 如何编写自定义组件啊，这个教程是真的很难写，会就是会，不会的话要学习的知识是很多的。但我还是尽力去讲解吧。 我这里用一个最简单的组件来举例子: src/.vuepress/components/PrintVersion.vue 他的引用方式如下: 在 src/.vuepress/client.ts 文件中 他干的事情很简单，就是...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"教程\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"3.如何编写自定义组件\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-07T16:48:13.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"墨七\\\",\\\"url\\\":\\\"https://mo7.cc\\\",\\\"email\\\":\\\"mo7@mo7.cc\\\"}]}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://blog.mo7.cc/Yao/atom.xml\",\"title\":\"墨七 Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://blog.mo7.cc/Yao/feed.json\",\"title\":\"墨七 JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://blog.mo7.cc/Yao/rss.xml\",\"title\":\"墨七 RSS Feed\"}]]},\"headers\":[],\"git\":{\"createdTime\":1728311364000,\"updatedTime\":1728319693000,\"contributors\":[{\"name\":\"YAO\",\"email\":\"1964877312@qq.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":1.61,\"words\":483},\"filePathRelative\":\"tutorial/vuepress-hope/3.如何编写自定义组件.md\",\"localizedDate\":\"2024年10月7日\",\"excerpt\":\"\\n<p>如何编写自定义组件啊，这个教程是真的很难写，会就是会，不会的话要学习的知识是很多的。但我还是尽力去讲解吧。</p>\\n<p>我这里用一个最简单的组件来举例子:</p>\\n<p><code>src/.vuepress/components/PrintVersion.vue</code></p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&lt;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">script</span><span style=\\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic\\\"> setup</span><span style=\\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic\\\"> lang</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"ts\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">import AppPackage from '../../../package.json';</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">const textConsole = `mo7.cc   `;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">const PrintlnInfo = () =&gt; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">{</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">  const</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> PackageData</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">: </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">any</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> AppPackage</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">  const</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> Text</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> `</span><span style=\\\"--shiki-light:#CA1243;--shiki-dark:#C678DD\\\">${</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">textConsole</span><span style=\\\"--shiki-light:#CA1243;--shiki-dark:#C678DD\\\">}${</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">PackageData</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">version</span><span style=\\\"--shiki-light:#CA1243;--shiki-dark:#C678DD\\\">}</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">`</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">  console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">`%c</span><span style=\\\"--shiki-light:#CA1243;--shiki-dark:#C678DD\\\">${</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">Text</span><span style=\\\"--shiki-light:#CA1243;--shiki-dark:#C678DD\\\">}</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">   `</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">`color:#01a9a3;font-size:1rem;font-style: italic;`</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">  return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> Text</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">}</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&lt;/</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">script</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&lt;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">template</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  &lt;</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">ClientOnly</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    &lt;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">div</span><span style=\\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic\\\"> class</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"none\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;版本打印{{ PrintlnInfo() }}&lt;/</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">div</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  &lt;/</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">ClientOnly</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&lt;/</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">template</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&lt;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">style</span><span style=\\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic\\\"> lang</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"scss\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;&lt;/</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">style</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&gt;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
export { comp, data }
