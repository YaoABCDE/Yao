<template><div><h1 id="_9-科学上网和国内镜像" tabindex="-1"><a class="header-anchor" href="#_9-科学上网和国内镜像"><span>9.科学上网和国内镜像</span></a></h1>
<p>什么是 <a href="https://cn.bing.com/search?q=%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91" target="_blank" rel="noopener noreferrer">科学上网?</a></p>
<BiliBili bvid="BV1LrgVeUEsJ" /><hr>
<p>怎么讲呢，网络是自由的，但又不那么的自由。因为国内阻止了 <strong>Google</strong> 所以 <strong>百度</strong> 发家，百度又不干好事。</p>
<p><strong>Github</strong> 被 <strong>墙</strong> 但是国内的 <strong>Gitee</strong> 简直 <strong>依托答辩</strong>。</p>
<p><strong>墙</strong> 成了国内互联网企业发展护城河，让中国在孱弱时期避免被外来互联网技术和文化入侵，但是也一定程度上阻碍了科学技术的普及和发展。</p>
<p>我们使用的 编程语言、各种命令行工具、系统、开源仓库、包管理服务等大部分都是国外创造的。不翻墙，甚至很多工作都无法进行，文件资料无法查阅。</p>
<p>一般来说，比较大的公司有相关的 <a href="http://www.elawcn.com/telecommunication/2020/0531/670.html" target="_blank" rel="noopener noreferrer">合法的国际专线</a> ，但是对于个人开发者来说，成本是巨大的，也是不现实的。</p>
<p>这么说吧，如果说 <strong>科学上网</strong> 是违法的，那么没有任何一名程序员是无辜的。出于 <strong>学习</strong> 为目的的翻墙无可厚非，<strong>师夷之长技以制夷</strong>。</p>
<p>如果想要 <strong>合法</strong> 的使用一些国外的程序相关服务，应该怎么办呢？</p>
<h2 id="国内镜像" tabindex="-1"><a class="header-anchor" href="#国内镜像"><span>国内镜像</span></a></h2>
<p>比如 <code v-pre>npm</code> 是 <code v-pre>Nodejs</code> 的包管理器，它的官网是 <code v-pre>https://www.npmjs.com/</code>，国内正常情况下你一定打不开。<br>
<code v-pre>https://registry.npmjs.org/</code> 是 <code v-pre>npm</code> 的 <strong>官方源</strong>，<code v-pre>npm install</code> 指令依赖这个地址，但是在国内这个指令 90% 一定会执行失败。</p>
<p>类似的还有 <code v-pre>Python</code> 的 <code v-pre>pip</code> 指令；<br>
<code v-pre>Golang</code> 的 <code v-pre>go get</code> 指令；<br>
<code v-pre>Linux</code> 的 <code v-pre>apt install</code> 指令；<br>
<code v-pre>Homebrew</code> 的 <code v-pre>brew install</code> 指令；<br>
.....</p>
<p>不使用 <code v-pre>科学上网</code> 那应该怎么办呢？</p>
<p><strong>阿里开源镜像站：</strong> <a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">https://developer.aliyun.com/mirror/</a><br>
<strong>网易开源镜像站：</strong> <a href="http://mirrors.163.com/" target="_blank" rel="noopener noreferrer">http://mirrors.163.com/</a><br>
<strong>搜狐开源镜像站：</strong> <a href="http://mirrors.sohu.com/" target="_blank" rel="noopener noreferrer">http://mirrors.sohu.com/</a><br>
<strong>北京交通大学开源镜像站：</strong> <a href="http://mirror.bjtu.edu.cn" target="_blank" rel="noopener noreferrer">http://mirror.bjtu.edu.cn</a><br>
<strong>兰州大学开源软件镜像站：</strong> <a href="http://mirror.lzu.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirror.lzu.edu.cn/</a><br>
<strong>厦门大学开源软件镜像站：</strong> <a href="http://mirrors.xmu.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirrors.xmu.edu.cn/</a><br>
<strong>上海交通大学开源软件镜像站：</strong> <a href="http://ftp.sjtu.edu.cn/" target="_blank" rel="noopener noreferrer">http://ftp.sjtu.edu.cn/</a><br>
<strong>清华大学开源软件镜像站：</strong> <a href="http://mirrors.tuna.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirrors.tuna.tsinghua.edu.cn/</a><br>
<strong>天津大学开源软件镜像站：</strong> <a href="http://mirror.tju.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirror.tju.edu.cn/</a><br>
<strong>中国科学技术大学开源软件镜像站：</strong> <a href="http://mirrors.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirrors.ustc.edu.cn/</a><br>
<strong>东北大学开源软件镜像站：</strong> <a href="http://mirror.neu.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirror.neu.edu.cn/</a><br>
<strong>东软信息学院开源软件镜像站：</strong> <a href="http://mirrors.neusoft.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirrors.neusoft.edu.cn/</a><br>
<strong>浙江大学开源软件镜像站：</strong> <a href="http://mirrors.zju.edu.cn" target="_blank" rel="noopener noreferrer">http://mirrors.zju.edu.cn</a><br>
<strong>北京理工大学开源软件镜像站：</strong> <a href="http://mirror.bit.edu.cn" target="_blank" rel="noopener noreferrer">http://mirror.bit.edu.cn</a><br>
<strong>华中科技大学开源软件镜像站：</strong> <a href="http://mirrors.hust.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirrors.hust.edu.cn/</a><br>
<strong>中山大学开源软件镜像站：</strong> <a href="http://mirror.sysu.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirror.sysu.edu.cn/</a><br>
<strong>大连理工大学开源软件镜像站：</strong> <a href="http://mirror.dlut.edu.cn/" target="_blank" rel="noopener noreferrer">http://mirror.dlut.edu.cn/</a></p>
<p>通常情况下</p>
<p><code v-pre>go语言</code> 使用 <a href="https://goproxy.cn/" target="_blank" rel="noopener noreferrer">https://goproxy.cn/</a><br>
<code v-pre>npm</code> 使用 <a href="https://www.npmmirror.com/" target="_blank" rel="noopener noreferrer">https://www.npmmirror.com/</a><br>
<code v-pre>Linux Debian</code> 使用 <a href="https://mirrors.tuna.tsinghua.edu.cn/help/debian/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/help/debian/</a><br>
<code v-pre>Homebrew</code> 使用 <a href="https://developer.aliyun.com/mirror/homebrew" target="_blank" rel="noopener noreferrer">https://developer.aliyun.com/mirror/homebrew</a></p>
<p>一般来说，阿里镜像源的稳定性最好，使用人数也比较多。</p>
<blockquote>
<p>学会使用国内的镜像，一般的编程和包安装下载应该都不是什么大问题了。一般来说，安装类的命令执行失败，90% 的原因都和 <strong>墙(GFW)</strong> 有关。<br>
在早期，国内的各大镜像源都喜欢<strong>夹带私货</strong>，比如把 官方包 替换成自己的 私人包，在命令行中打广告，甚至是在包中插入病毒和挖矿程序，包版本落后等等等.....<br>
不过随着国内监管力度的加大，现在这种情况比较少见了。<br>
<strong>我相信中国人是世界上最聪明的，但是这个世界上最伟大的发明创造却鲜有中国的身影。可能会有中国人参与其中，但他们都非中国籍。</strong><br>
(中国人的聪明才智，似乎也很少用到正道上。)</p>
</blockquote>
<h2 id="github-的流畅访问手段" tabindex="-1"><a class="header-anchor" href="#github-的流畅访问手段"><span>Github 的流畅访问手段</span></a></h2>
<p>很多资源的获取都离不开 <a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a></p>
<p>但是大多数时候这个地址都无法被打开，如果还不会 <strong>科学上网</strong> 可以试试下面这个方案。</p>
<ol>
<li>打开 <code v-pre>Microsoft Store</code> 搜索 <code v-pre>Watt Toolkit</code> 并安装。</li>
</ol>
<figure><img src="@source/Yao_Pack/developer/image/watt_1.png" alt="微软商店搜索并下载 Watt Toolkit" tabindex="0" loading="lazy"><figcaption>微软商店搜索并下载 Watt Toolkit</figcaption></figure>
<ol start="2">
<li>启动 <code v-pre>Watt Toolkit</code> 并勾选 <code v-pre>Github</code></li>
</ol>
<figure><img src="@source/Yao_Pack/developer/image/waat_2.png" alt="勾选需要代理的服务并启用加速" tabindex="0" loading="lazy"><figcaption>勾选需要代理的服务并启用加速</figcaption></figure>
<ol start="3">
<li>然后点击 <code v-pre>一键加速</code> 就可以正常访问 <a href="http://github.com" target="_blank" rel="noopener noreferrer">github.com</a> 了</li>
</ol>
<figure><img src="@source/Yao_Pack/developer/image/waat_3.png" alt="Watt Toolkit" tabindex="0" loading="lazy"><figcaption>Watt Toolkit</figcaption></figure>
<h2 id="科学上网" tabindex="-1"><a class="header-anchor" href="#科学上网"><span>科学上网</span></a></h2>
<p>如果你想要使用 <code v-pre>Google</code>、 <code v-pre>ChartGPT</code> 或者想要获取国内外一手资讯等，还是得了解一下 <strong>科学上网</strong> 这件事情的。</p>
<p><a href="https://blog.tsingjyujing.com/spam/gfw-history" target="_blank" rel="noopener noreferrer">中国网络防火长城简史</a></p>
<p><a href="/tutorial/proxy_wall_ready.html" target="_blank" rel="noopener noreferrer">科学上网与本地代理教程</a></p>
<blockquote>
<p>请一定要做一个遵纪守法的好公民</p>
</blockquote>
</div></template>


