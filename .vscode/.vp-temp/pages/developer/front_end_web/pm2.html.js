import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/developer/front_end_web/pm2.html.vue"
const data = JSON.parse("{\"path\":\"/developer/front_end_web/pm2.html\",\"title\":\"pm2 最好用的后台守护进程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"前端\"],\"tag\":[\"工具\"],\"permalink\":\"/developer/front_end_web/pm2.html\",\"description\":\"pm2 最好用的后台守护进程 注意 该文档有待补充和完善\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yaoabcde.github.io/Yao/Yao/developer/front_end_web/pm2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"pm2 最好用的后台守护进程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"pm2 最好用的后台守护进程 注意 该文档有待补充和完善\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"工具\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"pm2 最好用的后台守护进程\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.19,\"words\":58},\"filePathRelative\":\"Yao_Pack/developer/front_end_web/pm2启动node服务.md\",\"excerpt\":\"\\n<div class=\\\"hint-container warning\\\">\\n<p class=\\\"hint-container-title\\\">注意</p>\\n<p>该文档有待补充和完善</p>\\n</div>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"bash\\\" data-title=\\\"bash\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">#安装</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">npm</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> install</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> pm2</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> -g</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">#启动进程</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">pm2</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> start</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> app.js</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">#停止进程</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">pm2</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> stop</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> app.js</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">#查看进程</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">pm2</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> list</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
