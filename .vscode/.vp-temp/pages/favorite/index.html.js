import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/favorite/index.html.vue"
const data = JSON.parse("{\"path\":\"/favorite/\",\"title\":\"Favorite\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Favorite\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yaoabcde.github.io/Yao/Yao/favorite/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Favorite\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Favorite\\\"}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
