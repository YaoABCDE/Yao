import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"博文\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"pageInfo\":[\"Author\",\"PageView\"],\"index\":false,\"category\":[\"博文\"],\"tag\":[\"目录\"],\"permalink\":\"/posts/\",\"description\":\"博文 记录一些所思所想\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://yaoabcde.github.io/Yao/Yao/en/posts/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yaoabcde.github.io/Yao/Yao/posts/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博文\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"博文 记录一些所思所想\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"目录\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"博文\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.1,\"words\":30},\"filePathRelative\":\"Yao_Pack/posts/README.md\",\"excerpt\":\"\\n<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">记录一些所思所想</p>\\n</div>\\n<hr>\\n\",\"autoDesc\":true}")
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