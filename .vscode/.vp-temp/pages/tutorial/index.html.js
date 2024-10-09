import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/tutorial/index.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/\",\"title\":\"教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"bookone\",\"pageInfo\":[\"Author\",\"PageView\"],\"index\":false,\"category\":[\"教程\"],\"tag\":[\"目录\"],\"permalink\":\"/tutorial/\",\"description\":\"教程 有些东西其实很简单\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yaoabcde.github.io/Yao/Yao/tutorial/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"教程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"教程 有些东西其实很简单\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"目录\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"教程\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.1,\"words\":31},\"filePathRelative\":\"Yao_Pack/tutorial/README.md\",\"excerpt\":\"\\n<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">有些东西其实很简单</p>\\n</div>\\n<hr>\\n\",\"autoDesc\":true}")
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
