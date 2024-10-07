import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as e,b as r,o as c,r as p}from"./app-CCPVzkoM.js";const i="/Yao/assets/bob-D8oaAzrv.png",t="/Yao/assets/utools1-Ck57zntx.jpeg",a="/Yao/assets/utools3-BTKiaRXG.png",d="/Yao/assets/utools4-h_ksWI3k.jpg",h="/Yao/assets/guanjianzi-CjAcAf4Y.png",m="/Yao/assets/neicun-BTPT8SSf.png",g="/Yao/assets/chajian-lpR-Etgr.jpg",u="/Yao/assets/chajian2--YwZM3by.jpg",b={};function T(f,o){const s=p("BiliBili");return c(),n("div",null,[o[0]||(o[0]=e('<h1 id="utools" tabindex="-1"><a class="header-anchor" href="#utools"><span>uTools</span></a></h1><div class="hint-container info"><p class="hint-container-title">相见恨晚的 PC 端工具集</p><p>当我搞明白这货的使用方法和运行逻辑之后，不仅效率提升了很多，我还卸载了十几个软件。</p></div><h2 id="本文重点" tabindex="-1"><a class="header-anchor" href="#本文重点"><span>本文重点</span></a></h2><p><a href="https://open.u-tools.cn/445779.html" target="_blank" rel="noopener noreferrer">https://open.u-tools.cn/445779.html</a></p><p>基于 nodejs 开发的跨平台工具集合。<br> 横跨 Mac、Windows、Linux 三大平台，设计体验一致。它使得你的工具软件不再零碎。<br> 有了它，你的电脑只需要安装必要的核心软件就可以了。</p><h2 id="一个截屏翻译软件引发惨案" tabindex="-1"><a class="header-anchor" href="#一个截屏翻译软件引发惨案"><span>一个截屏翻译软件引发惨案</span></a></h2><p>在 windows 下有一个神器： <code>有道词典</code><br> 我少数几个允许开机启动且后台常驻的软件。我的英文阅读水平一般，但我的工作经常会用到各种英文文档，所以翻译工具基本上是必不可少的。我一般都是把文字复制下来然后丢到软件当中去翻译，习惯了之后其实也没啥。但是有些文字是无法被复制的，这个时候是非常不方便的。</p><p>有道词典设置快捷键，直接像截图一样去识别屏幕上的英文语句，然后直接显示翻译结果，极大地提高了我的学习和工作效率。</p><p>但是！Mac 下没有这个功能。。。。</p><p>Mac 下我用的是这个玩意儿</p><p><img src="'+i+'" alt="" class="img-center" height="320" loading="lazy"></p><p>还特么花了我 50 大洋，现在想一想，自己真是个大怨种。</p><p>嗯，这货号称 Mac 下最好的截屏翻译工具，也确实好用。但是，它采用的是 Mac 系统<code>快捷指令</code>实现的截屏翻译功能。但是 Mac 的 api 是不允许代理方问的。每次使用我都得关闭代理。。天呐，烦透了，但是没办法。配置其它的访问 api 都存在一定的限制或者费用。但是将就将就又不是不行。</p><p>然后前段时间 B 站发现了一个 UP 主推荐了 <code>uTolls</code>，好奇心驱使下就去下载体验了一下。</p><p><img src="'+t+'" alt="" class="img-center" height="320" loading="lazy"></p><p><img src="'+a+'" alt="" class="img-center" height="320" loading="lazy"></p><p><img src="'+d+'" alt="" class="img-center" height="320" loading="lazy"></p><blockquote><p>注：Mac 和 Windows 体验完全一致</p></blockquote><p>其内部实现了一个叫做 <code>关键字</code> 的调用逻辑，每个插件都可以使用关键字来调用其它的关键字，一个插件可以有多个关键字。所有插件之间都是可以相互进行调用的。</p><p>于是就出现了各种组合，比如：<br><code>截图插件</code> + <code>OCR 识别插件</code> + <code>翻译插件</code> = <strong>截屏翻译功能</strong><br><code>截图插件</code> + <code>二维码解析插件</code> = <strong>扫码功能</strong> (PC 能扫码了，喜极而泣)<br><code>文本提取</code> + <code>网址精灵</code> = <strong>一键收藏网址</strong><br><code>文件提取</code> + <code>PDF转换器</code> = <strong>一键转换 PDF 文件</strong><br><code>文件提取</code> + <code>图片压缩</code> = <strong>一键压缩本地图片</strong><br><code>文件提取</code> + <code>搜索插件</code> = <strong>一键搜索本地文件</strong><br> .....</p><p>VSCode 能像如今这般如火如荼，离不开丰富的插件生态，其插件生态丰富是因为它的插件核心语言是 Javascript。<br> uTools 的插件语言，也是 Javascript。开发一个插件快捷而迅速，而且 uTools 软件本身磨平了一些系统 API 之间的差异。你编写的插件可以很方便的进行进行系统的各项操作。<br> 目前 uTools 插件市场 400 + 各类插件，他们组合搭配起来基本上可以<code>[一键]</code>解决你 90%以上的快捷问题。</p><p>自从有了 uTools ，我把电脑上大部分快捷键都取消了，并且卸载了一大票工具类软件。后台只需要运行一个工具类软件，那就是 <code>uTools</code>。</p><p>虽然它的截图功能存在一些问题，但是够用。我们一般使用截图也只是方便标注和发送而已。遇到一些特殊情况的截图，可以搭配使用系统自带的截图使用。关键问题是，一堆 IM 软件和工具不用再相互打架了。节省时间就是延长生命。</p><blockquote><p>截图工具并非 uTools 官方开发所以体验和功能很一般。但是官方开发的录屏工具却十分好用。可以看得出，社区出品的插件跟官方出品的插件质量上还是存在着一些差距。截图是一个很常用的功能，希望 uTools 官方能出手优化一下。</p></blockquote><h2 id="软件的使用演示" tabindex="-1"><a class="header-anchor" href="#软件的使用演示"><span>软件的使用演示</span></a></h2>',25)),r(s,{bvid:"BV11x4y1T7iR"}),o[1]||(o[1]=e('<p>录制的比较粗糙，可以直接去 B 站观看高清视频。</p><h2 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧"><span>使用技巧</span></a></h2><ol><li><p>搜索框<br><img src="'+t+'" alt="" class="img-center" loading="lazy"><br> 设置好快捷键之后，在任何地方都可以使用快捷键唤醒这个搜索框，在里面输入关键字或者词语，就可以调出对应的插件，或者搜索自己想要的东西，包括，网址，本地文件，最近使用的文件等等等.....</p></li><li><p>【超级面板】<br><img src="'+a+'" alt="" class="img-center" loading="lazy"><br> 在 windows 下按下鼠标中键，Mac 下双指长按(右键长按，可自定义时长)，任何屏幕都可以快捷唤醒超级面板，超级面板中的元素可以任意调整位置和增删</p></li><li><p>关键字设置<br><img src="'+h+'" alt="" class="img-center" loading="lazy"><br> 鼠标左键点取对应的关键字即可设置到【超级面板】中，或者禁用，以及测试运行，关键字前面带有特殊符号的。表示如果当前选中某个文件或者文字，超级面板中也可以触发唤醒选项。</p></li></ol><p><a href="https://u.tools/docs/guide/about-uTools.html" target="_blank" rel="noopener noreferrer">更多技巧</a></p><p>uTools 的一个关键字，就相当于一个小功能！</p><h2 id="内存占用" tabindex="-1"><a class="header-anchor" href="#内存占用"><span>内存占用</span></a></h2><p><img src="'+m+'" alt="" class="img-center" height="400" loading="lazy"></p><p>内存占用目测是取决于当前正在运行插件。基于 node，这个内存占用算是相当优秀了，可以看得出开发团队具有相当的水准。<br> 但是，因为 uTools ，可以把一大票工具都卸载掉，我的笔记本减负了不少。<br> 更别提 Mac 和 Win 完全一致的体验是多么难能可贵了！</p><h2 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件"><span>常用插件</span></a></h2><p>因为其良好的代码结构设计以及背靠 Javascript，使得其插件生态非常丰富。uTools 拥有一个插件市场，可以任意组合和下载使用各类插件，不用的插件之间还可以任意搭配。<br> 下面是我常用的一些插件：</p><p><img src="'+g+'" alt="" width="50%" loading="lazy"><br><img src="'+u+'" alt="" width="50%" loading="lazy"></p><blockquote><p>uTools 所有关键字的唤醒快捷键都是可以自定义的，换句话说，<strong>你可以通过插件以及快捷键组合搭配出任意的快捷功能</strong>。</p></blockquote><h2 id="付费" tabindex="-1"><a class="header-anchor" href="#付费"><span>付费</span></a></h2><p>免费的 uTools 已经够用了，三年年会员费用才 180 软妹币(我果断买了三年的)。</p><blockquote><p>免费和付费的区别仅仅在于使用过的插件设置，数据是否可以云同步。</p></blockquote><div class="hint-container info"><p class="hint-container-title">相见恨晚</p><p>感觉自己在寻找各种趁手工具上面浪费了大量的时间，就仅仅只是为了能让使用电脑的体验好那么一丢丢。但是 <code>uTolls</code> 无论是从产品设计还是程序架构上，都可以说是「快捷工具终结者」。<br> 快捷工具就应该长这样。</p><p>uTools 之于电脑，<br> 就像 VSCode 之于前端一样。</p><p>而且，它的插件生态一定会像 VSCode 一样越来越大。我可以放心的把自己的使用习惯交给它。</p><blockquote><p>世界上只分为两种人： <code>用过 uTools 的和不知道 uTools 的</code>。</p></blockquote><p>身为一个前端开发者，我也非常乐意吧自己开发的功能对接到这个平台上面去。</p></div>',16))])}const k=l(b,[["render",T],["__file","uTools.html.vue"]]),x=JSON.parse('{"path":"/tools/uTools.html","title":"uTools","lang":"zh-CN","frontmatter":{"category":["工具"],"tag":["uTools","使用指南"],"permalink":"/tools/uTools.html","description":"uTools 相见恨晚的 PC 端工具集 当我搞明白这货的使用方法和运行逻辑之后，不仅效率提升了很多，我还卸载了十几个软件。 本文重点 https://open.u-tools.cn/445779.html 基于 nodejs 开发的跨平台工具集合。 横跨 Mac、Windows、Linux 三大平台，设计体验一致。它使得你的工具软件不再零碎。 有了它...","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/Yao/tools/uTools.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"uTools"}],["meta",{"property":"og:description","content":"uTools 相见恨晚的 PC 端工具集 当我搞明白这货的使用方法和运行逻辑之后，不仅效率提升了很多，我还卸载了十几个软件。 本文重点 https://open.u-tools.cn/445779.html 基于 nodejs 开发的跨平台工具集合。 横跨 Mac、Windows、Linux 三大平台，设计体验一致。它使得你的工具软件不再零碎。 有了它..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T14:29:24.000Z"}],["meta",{"property":"article:tag","content":"uTools"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:modified_time","content":"2024-10-07T14:29:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uTools\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T14:29:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/Yao/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/Yao/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/Yao/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"本文重点","slug":"本文重点","link":"#本文重点","children":[]},{"level":2,"title":"一个截屏翻译软件引发惨案","slug":"一个截屏翻译软件引发惨案","link":"#一个截屏翻译软件引发惨案","children":[]},{"level":2,"title":"软件的使用演示","slug":"软件的使用演示","link":"#软件的使用演示","children":[]},{"level":2,"title":"使用技巧","slug":"使用技巧","link":"#使用技巧","children":[]},{"level":2,"title":"内存占用","slug":"内存占用","link":"#内存占用","children":[]},{"level":2,"title":"常用插件","slug":"常用插件","link":"#常用插件","children":[]},{"level":2,"title":"付费","slug":"付费","link":"#付费","children":[]}],"git":{"createdTime":1728311364000,"updatedTime":1728311364000,"contributors":[{"name":"YAO","email":"1964877312@qq.com","commits":1}]},"readingTime":{"minutes":6.35,"words":1904},"filePathRelative":"tools/uTools.md","localizedDate":"2024年10月7日","excerpt":"\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相见恨晚的 PC 端工具集</p>\\n<p>当我搞明白这货的使用方法和运行逻辑之后，不仅效率提升了很多，我还卸载了十几个软件。</p>\\n</div>\\n<h2>本文重点</h2>\\n<p><a href=\\"https://open.u-tools.cn/445779.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://open.u-tools.cn/445779.html</a></p>\\n<p>基于 nodejs 开发的跨平台工具集合。<br>\\n横跨 Mac、Windows、Linux 三大平台，设计体验一致。它使得你的工具软件不再零碎。<br>\\n有了它，你的电脑只需要安装必要的核心软件就可以了。</p>","autoDesc":true}');export{k as comp,x as data};
