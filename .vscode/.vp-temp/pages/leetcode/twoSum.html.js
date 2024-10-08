import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/leetcode/twoSum.html.vue"
const data = JSON.parse("{\"path\":\"/leetcode/twoSum.html\",\"title\":\"两数之和 (twoSum)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"leetcode\"],\"tag\":[\"leetcode\"],\"permalink\":\"/leetcode/twoSum.html\",\"description\":\"两数之和 (twoSum) https://leetcode.cn/problems/two-sum/ 解法思路 用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标 Golang JavaScript\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.mo7.cc/Yao/leetcode/twoSum.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"两数之和 (twoSum)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"两数之和 (twoSum) https://leetcode.cn/problems/two-sum/ 解法思路 用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标 Golang JavaScript\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"leetcode\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"两数之和 (twoSum)\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-07T16:48:13.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"解法思路\",\"slug\":\"解法思路\",\"link\":\"#解法思路\",\"children\":[]},{\"level\":2,\"title\":\"Golang\",\"slug\":\"golang\",\"link\":\"#golang\",\"children\":[]},{\"level\":2,\"title\":\"JavaScript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[]}],\"git\":{\"createdTime\":1728311364000,\"updatedTime\":1728319693000,\"contributors\":[{\"name\":\"YAO\",\"email\":\"1964877312@qq.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":0.18,\"words\":55},\"filePathRelative\":\"leetcode/两数之和/README.md\",\"localizedDate\":\"2024年10月7日\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/two-sum/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://leetcode.cn/problems/two-sum/</a></p>\\n<hr>\\n<h2>解法思路</h2>\\n<p>用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标</p>\\n<h2>Golang</h2>\\n<div class=\\\"language-go line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"go\\\" data-title=\\\"go\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">package</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> main</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\t\\\"fmt\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> main</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tnums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">\\t\\t3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">4</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\ttarget</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 6</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tresults</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> twoSum</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">target</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"results\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">results</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tresults2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> twoSum2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">target</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"results2\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">results2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 暴力求解</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> twoSum</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">target</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\treturnVal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> k1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tdiff</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> target</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\"> -</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> v1</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> k2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> diff</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> ==</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> v2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> &amp;&amp;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> k2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> !=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> k1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\t\\treturnVal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> append</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">returnVal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">k2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\treturn</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> returnVal</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 利用哈希 map</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> twoSum2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">target</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\thashTable</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> map</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">x</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tp</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">ok</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> hashTable</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">target</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">-</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">x</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> ok</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\t\\treturn</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">p</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\thashTable</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">x</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> i</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\treturn</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> nil</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
