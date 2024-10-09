import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/leetcode/groupAnagrams.html.vue"
const data = JSON.parse("{\"path\":\"/leetcode/groupAnagrams.html\",\"title\":\"字母异位词分组 (groupAnagrams)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"leetcode\"],\"tag\":[\"leetcode\"],\"permalink\":\"/leetcode/groupAnagrams.html\",\"description\":\"字母异位词分组 (groupAnagrams) https://leetcode.cn/problems/group-anagrams 解法思路 Golang JavaScript\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yaoabcde.github.io/Yao/Yao/leetcode/groupAnagrams.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"字母异位词分组 (groupAnagrams)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"字母异位词分组 (groupAnagrams) https://leetcode.cn/problems/group-anagrams 解法思路 Golang JavaScript\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"leetcode\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"字母异位词分组 (groupAnagrams)\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"解法思路\",\"slug\":\"解法思路\",\"link\":\"#解法思路\",\"children\":[]},{\"level\":2,\"title\":\"Golang\",\"slug\":\"golang\",\"link\":\"#golang\",\"children\":[]},{\"level\":2,\"title\":\"JavaScript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.1,\"words\":29},\"filePathRelative\":\"Yao_Pack/leetcode/字母异位词分组/README.md\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/group-anagrams\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://leetcode.cn/problems/group-anagrams</a></p>\\n<hr>\\n<h2>解法思路</h2>\\n<h2>Golang</h2>\\n<div class=\\\"language-go line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"go\\\" data-title=\\\"go\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">package</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> main</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\t\\\"fmt\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\t\\\"sort\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\t\\\"strings\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> main</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tstrs</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">string</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"eat\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"tea\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"tan\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"ate\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"nat\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"bat\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tresults</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> groupAnagrams</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">strs</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"results\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">results</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 暴力求解</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> groupAnagrams</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">strs</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">string</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) [][]</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">string</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\thasMap</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> map</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">string</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">][]</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">string</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> _</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> strs</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tsplitStr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> strings</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Split</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tsort</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Strings</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">splitStr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tsortStr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> strings</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Join</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">splitStr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\thasMap</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">sortStr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> append</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">hasMap</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">sortStr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">], </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\treturnVal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [][]</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">string</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> _</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> hasMap</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\treturnVal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> append</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">returnVal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\treturn</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> returnVal</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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