export const siteData = JSON.parse("{\"base\":\"/Yao/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/Yao/YaoPhoto/ico/64.ico\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/Yao/YaoPhoto/logopng/512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/Yao/YaoPhoto/logopng/192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/Yao/YaoPhoto/logopng/512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/Yao/YaoPhoto/logopng/192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/Yao/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/Yao/YaoPhoto/logopng/64.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/Yao/YaoPhoto/logopng/64.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#000\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"YAO\",\"description\":\"我欲修仙，快乐齐天\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Yao\",\"description\":\"Hello Yao\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
