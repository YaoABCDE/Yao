import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as e}from"./app-CCPVzkoM.js";const l={};function a(n,o){return e(),t("div",null,o[0]||(o[0]=[i('<h1 id="当红开发语言-go-真的是未来的技术主流吗" tabindex="-1"><a class="header-anchor" href="#当红开发语言-go-真的是未来的技术主流吗"><span>当红开发语言 Go，真的是未来的技术主流吗？</span></a></h1><p>这个问题不能从技术角度考虑，要从【市场】角度考虑。</p><p>一、目前应用程序的主流是什么？</p><ol><li>桌面（Mac，Win，Linux）</li><li>移动 App（Android，Ios）</li><li>Web（浏览器以各种 App、系统内套壳页面，鸿蒙，小程序 都算这一类吧~）</li><li>嵌入式（各种硬件交互，传感器，硬件控制，通信）</li><li>工控软件（嵌入式软件、工业控制组态软件、PLC 编程软件等）</li><li>...等等等</li></ol><p>二、开展一个项目选用一个编程语言的标准是什么</p><ol><li>待开发系统的应用领域，即项目的应用范围。</li><li>应用形式（全平台，还是单平台，还是硬件集成，一体机）</li><li>应用规模（toB 还是 toC ，日活多少，顶峰访问量会有多少 ）</li><li>架构模式（分布式？事件总线？分层模式？有些语言在开发成熟的架构模式下，运维体系啥的）</li><li>支持平台（某些平台 SDK 只支持某一部分语言，甚至是指定语言）</li><li>开发周期（是可以慢工出细活，自研自控，还是说只图一个快，早上线早超生）</li><li>硬件要求（单片机还是服务器？是否要上集群和规模）</li><li>语言生态（生态丰富成熟的语言开发速度确实会比较快）</li><li>好不好招人（也就是所谓的用工成本）</li></ol><hr><p>然后再来看看 go 这门语言：<br> 虽然存在各种槽点，但是其实没啥大的毛病，各种各样的编程任务均可顺利完成。</p><p>出色的创始团队(这个确实牛逼无法反驳)</p><p>而且开源，背靠大厂(Google 在这个星球上也是数一数二的大公司了)</p><p>并且稳定更新维护了这么多年(著名的 2006-01-02 15:04:05)</p><p>2015 年 8 月 1.5 版本完成自举 (现在是 1.23) gcc 也可以进行 go 的编译</p><p>大厂内部也在大范围使用(google 内部现在也在大范围使用)</p><p>国内有很多大公司都在使用(BAT，粗粮，字节，弟弟，骑牛，b 站 ，等)</p><p>也有非常多非常牛逼应用非常广泛的开源项目（容器化相关的一堆，区块链相关的一堆，包括数据库相关的，存储，消息队列，服务器运维工具，网络工具，各种五花八门的都有）</p><p>以上这些公认的数据足以证明，go 这门语言是非常靠谱的，而且落地项目很多，商业项目开源项目也并不在少数，这一点是无法反驳的。</p><hr><p>我们再来看看 go 的一些特性：</p><p>易于上手，语法简易 （个人感觉比 python 和 js 都简单，没啥太多的黑魔法，也没多少奇奇怪怪写法，统一且和谐....）当然，语法嘛见仁见智吧。不过有一点是很赞的：十个人开发同一个项目，写出来的代码基本上都是差不多的，看起来赏心悦目。</p><p>接近于脚本语言的开发速度（熟练之后，开发速度相当快，比 nodejs 快）</p><p>容易维护，go 基本上都会默认兼容之前版本的代码。静态类型，编译期检查 (可维护性好， 之前维护过一个三年前纯 go 写的网站管理系统，直接改一改 type 定义，然后把编辑器报红的地方改一改，编译器错误修一修，新增逻辑直接拓展新增定义，测试一把通过，上线发布新版本没一点毛病)</p><p>第二梯队的执行效率(第一梯队是 c c++ rust)，</p><p>第一梯队的编译效率(没人反驳吧，go 的编译速度是相当快的，而且编译是多线程的，甚至可以直接当脚本语言来用)</p><p>非常省硬件资源(内存，硬盘计算效率都是非常节省的，一个服务 几十 M ，java 动辄 几个 G)，说硬件资源不重要的都是写毒瘤软件的。</p><p>容易部署，依赖干净（直接诶编译成可执行的二进制文件）</p><p>支持交叉编译，多平台并行编译（除了常见的 arm ，amd ，android ，ios 之外 GOOS 支持列表还有很多我都没接触过的）</p><p>生态方面，有一点我是非常喜欢的，用 go 开发好的库，直接提交到 github 上发布！也许 go 在生态方面会差一点意思，毕竟比较新。但是仅仅基于 github 进行包管理这一点就意味着这货的未来生态不可能差。</p><hr><p>好，有了以上这些之后，我们再来回到主题 【Go，真的是未来的技术主流吗？】</p><p>Go 是不是主流很难说(毕竟不会穿越)，但是综合来看这绝对是一门值得投入时间学习的语言。而且在将来使用人数和应用领域一定不会少。</p><p>一般的云服务，虚拟化，这些 go 已经妥妥的站稳了。</p><p>常规的 B/S 架构就不说了，这玩意儿和语言关系不太大，B 端 是 js 的天下谁也抢不走，至于 S 端的局限在于网络 I/O 异步并发这些。但是这些本来就属于 go 的特色和特长。</p><p>嵌入式开发，工控软件体系都比较成熟，而且迭代更新都非常慢，追求精确和稳定，空间紧张的一般都是 C/C++ 。空间不太紧张的第二梯队 go 也是非常合适的，性能也足够，系统资源占用也比较小。</p><p>桌面开发，go 也能做，但不同的桌面平台语言往往锁死，不过一些高性能处理和计算的部分 go 依然是非常棒的解决方案(优秀的内存占用和执行效率)，甚至有一些跨平台的开发方案是直接用 go 做底层的。不过桌面开发自有其成熟的体系。</p><p>运维，go 可以直接当做脚本语言来用，体验和效率暴打 Python 和 node，而且环境单一且简单。有的时候 Py 和 node 本身带来的环境问题也比较多。反而是 go 和 shell 各种互操非常顺溜。而且 go 的版本兼容性很好。</p><p>生态/招人问题：go 毕竟时间短，生态不如老牌语言，但是 go 简单啊，而且 go 开发基本用不上什么开发框架，学会基础语法结合搜索引擎上手一把梭直接干活，不管技术水平如何成品一定大差不差的。不过 java 开发便宜好用人数多 🤣，go 开发一个个死贵死贵的。所以如果用 go 最好的方式是招一堆 java 给一个周让他学 go，然后直接上手 ，学不会的可以直接让他滚蛋了。如果从打工的角度去考虑 go 开发的钱也比 java 好赚啊，java 多卷啊，但最好的是 java go 都会，这样可选赛道直接*2。go 的坑也比较少，因为简单，花活比较少。(至于吐槽语法简陋的，go 现有的语法是有什么逻辑无法实现的嘛？不就是多复制几行的问题？)</p><p>开发周期： 如果你的项目有可以直接抄，或者直接拿来用的开源项目，那就直接用开源的拉下来部署一下就直接开用这样肯定最快(但是照我以往的经验，这些项目到最后都会进行重构或者大面积重写)。但是如果你的项目所有的一切，产品规划啥的都是从零开始的，而且都是新玩意儿没有开源的或者可以直接拿来用的方案，用 go 从零开发的的效率 是比 java 快的。</p><p>省钱，服务器资源这一块，比 python， node ，java 都省钱。你前期一台 4GB 8 核心的机器，一般的服务，go 占用内存 50M ~ 200M 差不多了，但是 java 可能 2G 都不一定够。如果恰好你还是分布式 多服务运行，设备成本直接翻倍。另外一点就是运维成本，go 的运维非常简单，就一个二进制文件的运行，其余什么都不要管了。</p><p>跨平台，如果你有套逻辑或者算法，恰好要做客户端本地运行，在编写的时候做好模块划分，直接编译一份，客户端都不需要重写了，直接本地进行调用(Android ， ios ， js ，小程序 都是可以的)。因为 go 编译的二进制结果文件并不大，客户端语言可以直接调用。</p><p>应用规模，架构模式这些，go 的架构模也一定比其它语言简单，至于简陋问题，无非就是复制粘贴多写几行，多几个文件。至于应用规模，也就是处理性能，高并发这些，go 虽然不一定有 java 快，但是能差到哪儿去？但是开发速度一定比 java 快。go 一台服务器能部署三个，java 就不行了，太吃内存。硬件要求水平也很低。</p><p>易扩展/维护性，go 没有什么黑魔法，不管是 十年老兵 还是两年新兵，写出来的代码都差不多，只要模块划分好了，每个模块之间都是自然解藕的，而且每个模块都能独立发布成库。</p><hr><p>再从另一个方面提炼一下，go 不适用的场景：</p><p>平台限制类的：比如各种客户端的主语言 Kotlin ，Swift ，JavaScript ，.Net ，QT ， C# ， GTK； 或者是一些平台指定的调用官方 SDK 排除了 Go (一般也能找到对应的 Go SDK 替代品)</p><p>环境限制类的：比如嵌入式开发中对性能要求十分苛刻的，这种一般只能是 汇编或者 C</p><p>游戏开发：目前已知的主流的游戏引擎，要么是 C/C++ ， 要么就是 C# ， 有一些则是使用 Python 和 JavaScript</p><p>然后就会发现一件事情，除了特定的一些场景人家限制了语言外，比如原生客户端指定语言(Kotlin ，Swift ，JavaScript)，除外就是 C/C++ , C# 。</p><p>除了上述之外，剩下的所有所有的活 Go 都能干，而且表现基本都在第一第二梯队.....</p><p>那么主流的大的方面来看， Go 的主要竞争对手就是 Java 和 Python 了， 再来看看这俩语言的特点</p><ul><li>Python <ul><li>优点：简单，上手快，库多，生态强大，开发速度快，社区资源多，易学习，遇到问题易解决，跨平台。</li><li>缺点：性能太差了，并发和异步编程不友好，移动平台支持很差。</li></ul></li><li>Java <ul><li>优点：跨平台，库多和框架很多，社区资源多，语法丰富抽象层面高，生态和工具链发达</li><li>缺点：资源占用很高，语法繁琐(语法和概念八股文特别多，小项目也会写的很复杂，异常处理绕的一 B)，</li></ul></li></ul><p>然后 这个时候 再来对比 go ：</p><p>不亚于 Python 的上手难度和开发效率，不亚于 Java 的跨平台和执行效率，仅次于 C/C++ 的资源占用和性能。也就是 go 拥有这俩的优点，但没有这俩的缺点.... 虽然 go 在某些方面不如这俩，但也没啥短板。你会发现 go 很【中庸】，在各个领域它都不是最强的，但也都不是最弱的。但是你想找它的短板，你会发现你只能吐槽语法了.......</p><p>另外就是生态和工具链不如前两者丰富，但是背靠 Github 优秀的机制，这些都只是时间问题。</p><p>至于语法层面，这玩意儿真得见仁见智了。如果你说你习惯了 Java Python 那一套语法，可能会不太习惯 Go 的。但你要说 有什么逻辑或者场景别的语言能实现而 Go 无法实现的，这也是很扯蛋的。</p><p>怎么么讲呢，那些最终占领和主导市场的产品，往往是最【中庸】的产品：成本低廉，容易获得，无明显短板，虽然并不优秀，但完全也够用的东西。</p><p>Go 完全符合这些特质：开源免费，易于学习，不能说最优秀，但任何一方面都是数一数二的存在。</p><p>所以不管从哪方面来看，Go 都非常值得你花时间去投资和学习。</p><hr><p>利益相关：<br> 亲手用 Go 从零开发并上线过三套完整的项目，包括管理系统和网站以及小程序；<br> 用 Python 写过一些小玩意儿；<br> 参与开发和维护过多个 PHP 与 Java 项目；<br> 独立维护并上线过 Android 和 iOS 原生， 以及 ReactNative 和 uni-app 客户端；<br> 主职 title 则是一名前端，上线过数个 React ，Vue ，uni-app ，Taro 项目，包含小程序以及 Hybrid App</p><p>然后如果时间精力允许，业余时间还打算开发和制作自己的独立游戏~</p>',60)]))}const c=p(l,[["render",a],["__file","golang_viewpoint.html.vue"]]),d=JSON.parse('{"path":"/developer/golang/golang_viewpoint.html","title":"当红开发语言 Go，真的是未来的技术主流吗？","lang":"zh-CN","frontmatter":{"order":2,"category":["Golang"],"tag":["工具","教程"],"permalink":"/developer/golang/golang_viewpoint.html","description":"当红开发语言 Go，真的是未来的技术主流吗？ 这个问题不能从技术角度考虑，要从【市场】角度考虑。 一、目前应用程序的主流是什么？ 桌面（Mac，Win，Linux） 移动 App（Android，Ios） Web（浏览器以各种 App、系统内套壳页面，鸿蒙，小程序 都算这一类吧~） 嵌入式（各种硬件交互，传感器，硬件控制，通信） 工控软件（嵌入式软件、...","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/Yao/developer/golang/golang_viewpoint.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"当红开发语言 Go，真的是未来的技术主流吗？"}],["meta",{"property":"og:description","content":"当红开发语言 Go，真的是未来的技术主流吗？ 这个问题不能从技术角度考虑，要从【市场】角度考虑。 一、目前应用程序的主流是什么？ 桌面（Mac，Win，Linux） 移动 App（Android，Ios） Web（浏览器以各种 App、系统内套壳页面，鸿蒙，小程序 都算这一类吧~） 嵌入式（各种硬件交互，传感器，硬件控制，通信） 工控软件（嵌入式软件、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T14:29:24.000Z"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:modified_time","content":"2024-10-07T14:29:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"当红开发语言 Go，真的是未来的技术主流吗？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T14:29:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/Yao/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/Yao/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/Yao/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[],"git":{"createdTime":1728311364000,"updatedTime":1728311364000,"contributors":[{"name":"YAO","email":"1964877312@qq.com","commits":1}]},"readingTime":{"minutes":11.16,"words":3347},"filePathRelative":"developer/golang/个人对于go语言的看法.md","localizedDate":"2024年10月7日","excerpt":"\\n<p>这个问题不能从技术角度考虑，要从【市场】角度考虑。</p>\\n<p>一、目前应用程序的主流是什么？</p>\\n<ol>\\n<li>桌面（Mac，Win，Linux）</li>\\n<li>移动 App（Android，Ios）</li>\\n<li>Web（浏览器以各种 App、系统内套壳页面，鸿蒙，小程序 都算这一类吧~）</li>\\n<li>嵌入式（各种硬件交互，传感器，硬件控制，通信）</li>\\n<li>工控软件（嵌入式软件、工业控制组态软件、PLC 编程软件等）</li>\\n<li>...等等等</li>\\n</ol>\\n<p>二、开展一个项目选用一个编程语言的标准是什么</p>\\n<ol>\\n<li>待开发系统的应用领域，即项目的应用范围。</li>\\n<li>应用形式（全平台，还是单平台，还是硬件集成，一体机）</li>\\n<li>应用规模（toB 还是 toC ，日活多少，顶峰访问量会有多少 ）</li>\\n<li>架构模式（分布式？事件总线？分层模式？有些语言在开发成熟的架构模式下，运维体系啥的）</li>\\n<li>支持平台（某些平台 SDK 只支持某一部分语言，甚至是指定语言）</li>\\n<li>开发周期（是可以慢工出细活，自研自控，还是说只图一个快，早上线早超生）</li>\\n<li>硬件要求（单片机还是服务器？是否要上集群和规模）</li>\\n<li>语言生态（生态丰富成熟的语言开发速度确实会比较快）</li>\\n<li>好不好招人（也就是所谓的用工成本）</li>\\n</ol>","autoDesc":true}');export{c as comp,d as data};
