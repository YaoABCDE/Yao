import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-CCPVzkoM.js";const t={};function h(k,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="盛最多水的容器-maxarea" tabindex="-1"><a class="header-anchor" href="#盛最多水的容器-maxarea"><span>盛最多水的容器 (maxArea)</span></a></h1><p><a href="https://leetcode.cn/problems/container-with-most-water" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/container-with-most-water</a></p><hr><h2 id="解法思路" tabindex="-1"><a class="header-anchor" href="#解法思路"><span>解法思路</span></a></h2><h2 id="golang" tabindex="-1"><a class="header-anchor" href="#golang"><span>Golang</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;fmt&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	nums</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">		1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	results</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> maxArea</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;results&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">results</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 暴力求解</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">计算最大容积</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">容积的公式为 底*高</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">底 = 当前下标和未来下标的差</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">高 = 二者之间最大值</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">*/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> maxArea</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	res</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             // 最大面积</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	l</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">               // 最左边</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	r</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 最右边</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> l</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		y</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		x</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> l</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">		if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">			y</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">			l</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">			y</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">			r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">		are</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">		if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> are</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">			res</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> are</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> res</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>JavaScript</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 暴力求解</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> maxArea</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 代码执行块</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> nums</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> result</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> maxArea</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;result&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const r=i(t,[["render",h],["__file","maxArea.html.vue"]]),d=JSON.parse('{"path":"/leetcode/maxArea.html","title":"盛最多水的容器 (maxArea)","lang":"zh-CN","frontmatter":{"category":["leetcode"],"tag":["leetcode"],"permalink":"/leetcode/maxArea.html","description":"盛最多水的容器 (maxArea) https://leetcode.cn/problems/container-with-most-water 解法思路 Golang JavaScript","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/Yao/leetcode/maxArea.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"盛最多水的容器 (maxArea)"}],["meta",{"property":"og:description","content":"盛最多水的容器 (maxArea) https://leetcode.cn/problems/container-with-most-water 解法思路 Golang JavaScript"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T14:29:24.000Z"}],["meta",{"property":"article:tag","content":"leetcode"}],["meta",{"property":"article:modified_time","content":"2024-10-07T14:29:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"盛最多水的容器 (maxArea)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T14:29:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/Yao/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/Yao/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/Yao/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"解法思路","slug":"解法思路","link":"#解法思路","children":[]},{"level":2,"title":"Golang","slug":"golang","link":"#golang","children":[]},{"level":2,"title":"JavaScript","slug":"javascript","link":"#javascript","children":[]}],"git":{"createdTime":1728311364000,"updatedTime":1728311364000,"contributors":[{"name":"YAO","email":"1964877312@qq.com","commits":1}]},"readingTime":{"minutes":0.1,"words":31},"filePathRelative":"leetcode/盛最多水的容器/README.md","localizedDate":"2024年10月7日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/container-with-most-water\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://leetcode.cn/problems/container-with-most-water</a></p>\\n<hr>\\n<h2>解法思路</h2>\\n<h2>Golang</h2>\\n<div class=\\"language-go line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"go\\" data-title=\\"go\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">package</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> main</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\t\\"fmt\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">func</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> main</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">() {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\tnums</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> []</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">\\t\\t1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">8</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">6</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">5</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">4</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">8</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">3</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">7</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\tresults</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> maxArea</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">nums</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\tfmt</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Println</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"results\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">results</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 暴力求解</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/*</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">计算最大容积</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">容积的公式为 底*高</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">底 = 当前下标和未来下标的差</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">高 = 二者之间最大值</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">*/</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">func</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> maxArea</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">height</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> []</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\tres</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">             // 最大面积</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\tl</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">               // 最左边</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\tr</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> len</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">height</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">-</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> // 最右边</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">\\tfor</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> l</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> r</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\ty</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\tx</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> r</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\"> -</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> l</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">\\t\\tif</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> height</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">l</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">] </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> height</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">r</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">] {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\t\\ty</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> =</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> height</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">l</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\t\\tl</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">++</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">\\t\\t} </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">else</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\t\\ty</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> =</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> height</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">r</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\t\\tr</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">--</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">\\t\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\tare</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> y</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\"> *</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> x</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">\\t\\tif</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> are</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> &gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> res</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">\\t\\t\\tres</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> =</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> are</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">\\t\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">\\treturn</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> res</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,d as data};
