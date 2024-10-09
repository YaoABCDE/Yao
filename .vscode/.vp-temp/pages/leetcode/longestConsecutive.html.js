import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/leetcode/longestConsecutive.html.vue"
const data = JSON.parse("{\"path\":\"/leetcode/longestConsecutive.html\",\"title\":\"最长连续序列 (longestConsecutive)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"leetcode\"],\"tag\":[\"leetcode\"],\"permalink\":\"/leetcode/longestConsecutive.html\",\"description\":\"最长连续序列 (longestConsecutive) https://leetcode.cn/problems/longest-consecutive-sequence 解法思路 用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标 JavaScript Golang\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yaoabcde.github.io/Yao/Yao/leetcode/longestConsecutive.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"最长连续序列 (longestConsecutive)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"最长连续序列 (longestConsecutive) https://leetcode.cn/problems/longest-consecutive-sequence 解法思路 用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标 JavaScript Golang\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"leetcode\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"最长连续序列 (longestConsecutive)\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"解法思路\",\"slug\":\"解法思路\",\"link\":\"#解法思路\",\"children\":[]},{\"level\":2,\"title\":\"JavaScript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[]},{\"level\":2,\"title\":\"Golang\",\"slug\":\"golang\",\"link\":\"#golang\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.19,\"words\":58},\"filePathRelative\":\"Yao_Pack/leetcode/最长连续序列/README.md\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/longest-consecutive-sequence\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://leetcode.cn/problems/longest-consecutive-sequence</a></p>\\n<hr>\\n<h2>解法思路</h2>\\n<p>用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标</p>\\n<h2>JavaScript</h2>\\n<h2>Golang</h2>\\n<div class=\\\"language-go line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"go\\\" data-title=\\\"go\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">package</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> main</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\t\\\"fmt\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\t\\\"sort\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> main</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tnums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">\\t\\t0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tresults</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> longestConsecutive</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"results\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">results</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tresults2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> longestConsecutive2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"results2\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">results2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 暴力求解</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">/*</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">下一个减去上一个，结果为1则判定为有效</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">*/</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> longestConsecutive</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">\\t// 去重</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\thasMap</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> map</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">bool</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tnewArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> _</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> !</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">hasMap</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\thasMap</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tnewArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> append</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">newArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">\\t// 排序</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tsort</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Ints</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">newArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">\\t// fmt.Println(\\\"newArr\\\", newArr)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tlineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">\\t// result := [][]int{}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tmax</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tif</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">newArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">==</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\treturn</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> idx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">item</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> newArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tnextIdx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> idx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\"> +</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nextIdx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> &gt;</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">newArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">-</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tnextIdx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tnow</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> item</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tnext</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> newArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nextIdx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">-</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">now</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> ==</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\t\\tcontinue</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">-</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">now</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> ==</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tlineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> append</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">lineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">item</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t} </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">else</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tlineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> append</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">lineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">item</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">\\t\\t\\t// result = append(result, lineArr)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\t\\tif</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">lineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">&gt;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> max</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\t\\tmax</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">lineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tlineArr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">\\t// fmt.Println(\\\"result\\\", result)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\treturn</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> max</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 利用哈希表</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">/*</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">将数组映射成哈希表</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">然后在哈希表中找-1的数字是否存在</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">*/</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> longestConsecutive2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tnumSet</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> map</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">bool</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> _</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">num</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tnumSet</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">num</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tlongestStreak</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> num</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> numSet</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> !</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">numSet</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">num</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">-</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tcurrentNum</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> num</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tcurrentStreak</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\t\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> numSet</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">currentNum</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">+</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\t\\tcurrentNum</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">++</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\t\\tcurrentStreak</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">++</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> longestStreak</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> &lt;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> currentStreak</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\t\\tlongestStreak</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> currentStreak</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\treturn</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> longestStreak</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
