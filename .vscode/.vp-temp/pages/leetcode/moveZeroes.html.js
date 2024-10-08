import comp from "D:/node/Yaoweb5/.vscode/.vp-temp/pages/leetcode/moveZeroes.html.vue"
const data = JSON.parse("{\"path\":\"/leetcode/moveZeroes.html\",\"title\":\"移动零 (moveZeroes)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"leetcode\"],\"tag\":[\"leetcode\"],\"permalink\":\"/leetcode/moveZeroes.html\",\"description\":\"移动零 (moveZeroes) https://leetcode.cn/problems/move-zeroes 解法思路 Golang JavaScript\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.mo7.cc/Yao/leetcode/moveZeroes.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YAO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"移动零 (moveZeroes)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"移动零 (moveZeroes) https://leetcode.cn/problems/move-zeroes 解法思路 Golang JavaScript\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"leetcode\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-07T16:48:13.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"移动零 (moveZeroes)\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-07T16:48:13.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Yao\\\",\\\"url\\\":\\\"https://baidu.com\\\",\\\"email\\\":\\\"1964877312@qq.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"解法思路\",\"slug\":\"解法思路\",\"link\":\"#解法思路\",\"children\":[]},{\"level\":2,\"title\":\"Golang\",\"slug\":\"golang\",\"link\":\"#golang\",\"children\":[]},{\"level\":2,\"title\":\"JavaScript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[]}],\"git\":{\"createdTime\":1728311364000,\"updatedTime\":1728319693000,\"contributors\":[{\"name\":\"YAO\",\"email\":\"1964877312@qq.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":0.08,\"words\":25},\"filePathRelative\":\"leetcode/移动零/README.md\",\"localizedDate\":\"2024年10月7日\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/move-zeroes\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://leetcode.cn/problems/move-zeroes</a></p>\\n<hr>\\n<h2>解法思路</h2>\\n<h2>Golang</h2>\\n<div class=\\\"language-go line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"go\\\" data-title=\\\"go\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">package</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> main</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">import</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\t\\\"fmt\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> main</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tnums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">4</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">5</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"nums\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">\\tmoveZeroes</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"nums\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tnums2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">4</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">5</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"nums2\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">\\tmoveZeroes2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tfmt</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">Println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"nums2\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 暴力求解</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">/*</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">标记非 0 的值，然后进行替换</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">*/</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> moveZeroes</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tnotZero</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> _</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">item</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> item</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> !=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tnotZero</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> append</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">notZero</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">item</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> idx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> idx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> &lt;=</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">notZero</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\\">-</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tnums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">idx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> notZero</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">idx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t} </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">else</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tnums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">idx</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 非0值移动</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">func</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> moveZeroes2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\tj</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> _</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> range</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\t\\tif</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> v</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> !=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tnums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> v</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\t\\tj</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">++</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">\\t// 将其余值设为0</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">\\tfor</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> :=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\"> j</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\"> &lt;</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">nums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">++</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">\\t\\tnums</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">\\t}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
