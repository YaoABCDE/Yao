import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/developer/front_end_web/nodejs_ready.html.vue"
const data = JSON.parse("{\"path\":\"/developer/front_end_web/nodejs_ready.html\",\"title\":\"1.Nodejs 基础环境搭建\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"category\":[\"前端\"],\"tag\":[\"工具\",\"技巧\",\"环境搭建\",\"教程\"],\"permalink\":\"/developer/front_end_web/nodejs_ready.html\",\"description\":\"1.Nodejs 基础环境搭建 严格来说 nodejs 属于服务端的技术，并不属于 Web 前端 , 但是当下前端开发基本上无法离开 nodejs 了。 官网地址： https://nodejs.org/ 在 macOS 和 Windows 上安装 Node.js 注意 macOS 和 Windows 官方都有发布安专门的安装包，所以安装方式基本相同，...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.mo7.cc/Yao/developer/front_end_web/nodejs_ready.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"墨七\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"1.Nodejs 基础环境搭建\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1.Nodejs 基础环境搭建 严格来说 nodejs 属于服务端的技术，并不属于 Web 前端 , 但是当下前端开发基本上无法离开 nodejs 了。 官网地址： https://nodejs.org/ 在 macOS 和 Windows 上安装 Node.js 注意 macOS 和 Windows 官方都有发布安专门的安装包，所以安装方式基本相同，...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"工具\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"技巧\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"环境搭建\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"教程\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"1.Nodejs 基础环境搭建\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-07T16:48:13.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"墨七\\\",\\\"url\\\":\\\"https://mo7.cc\\\",\\\"email\\\":\\\"mo7@mo7.cc\\\"}]}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://blog.mo7.cc/Yao/atom.xml\",\"title\":\"墨七 Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://blog.mo7.cc/Yao/feed.json\",\"title\":\"墨七 JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://blog.mo7.cc/Yao/rss.xml\",\"title\":\"墨七 RSS Feed\"}]]},\"headers\":[{\"level\":2,\"title\":\"在 macOS 和 Windows 上安装 Node.js\",\"slug\":\"在-macos-和-windows-上安装-node-js\",\"link\":\"#在-macos-和-windows-上安装-node-js\",\"children\":[{\"level\":3,\"title\":\"第一步，查看机器硬件架构类型\",\"slug\":\"第一步-查看机器硬件架构类型\",\"link\":\"#第一步-查看机器硬件架构类型\",\"children\":[]},{\"level\":3,\"title\":\"第二步，下载安装包\",\"slug\":\"第二步-下载安装包\",\"link\":\"#第二步-下载安装包\",\"children\":[]}]},{\"level\":2,\"title\":\"Linux 下安装 NodeJs\",\"slug\":\"linux-下安装-nodejs\",\"link\":\"#linux-下安装-nodejs\",\"children\":[]},{\"level\":2,\"title\":\"验证安装结果\",\"slug\":\"验证安装结果\",\"link\":\"#验证安装结果\",\"children\":[]},{\"level\":2,\"title\":\"npm 加速设置\",\"slug\":\"npm-加速设置\",\"link\":\"#npm-加速设置\",\"children\":[{\"level\":3,\"title\":\"1. 使用阿里云镜像\",\"slug\":\"_1-使用阿里云镜像\",\"link\":\"#_1-使用阿里云镜像\",\"children\":[]},{\"level\":3,\"title\":\"2. 使用全局的命令行代理\",\"slug\":\"_2-使用全局的命令行代理\",\"link\":\"#_2-使用全局的命令行代理\",\"children\":[]}]},{\"level\":2,\"title\":\"pnpm\",\"slug\":\"pnpm\",\"link\":\"#pnpm\",\"children\":[]},{\"level\":2,\"title\":\"windows 下 使用 git-bash 来执行 npm 指令中的脚本\",\"slug\":\"windows-下-使用-git-bash-来执行-npm-指令中的脚本\",\"link\":\"#windows-下-使用-git-bash-来执行-npm-指令中的脚本\",\"children\":[]},{\"level\":2,\"title\":\"环境安装结果的验证\",\"slug\":\"环境安装结果的验证\",\"link\":\"#环境安装结果的验证\",\"children\":[]},{\"level\":2,\"title\":\"Hello World\",\"slug\":\"hello-world\",\"link\":\"#hello-world\",\"children\":[]}],\"git\":{\"createdTime\":1728311364000,\"updatedTime\":1728319693000,\"contributors\":[{\"name\":\"YAO\",\"email\":\"1964877312@qq.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":3.36,\"words\":1009},\"filePathRelative\":\"developer/front_end_web/1.nodejs基础环境搭建.md\",\"localizedDate\":\"2024年10月7日\",\"excerpt\":\"\\n<p>严格来说 <code>nodejs</code> 属于服务端的技术，并不属于 <code>Web 前端</code> , 但是当下前端开发基本上无法离开 <code>nodejs</code> 了。</p>\\n<p>官网地址：<br>\\n<a href=\\\"https://nodejs.org/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://nodejs.org/</a></p>\\n<h2>在 macOS 和 Windows 上安装 Node.js</h2>\\n<div class=\\\"hint-container warning\\\">\\n<p class=\\\"hint-container-title\\\">注意</p>\\n<p>macOS 和 Windows 官方都有发布安专门的安装包，所以安装方式基本相同，但是得注意区分硬件架构。</p>\\n</div>\",\"autoDesc\":true}")
export { comp, data }
