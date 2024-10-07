import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as o,b as n,o as p,r as c}from"./app-BwK5f0nB.js";const l={};function i(s,e){const r=c("BiliBili");return p(),a("div",null,[e[0]||(e[0]=o('<h1 id="_12-关于编程语言的那些事儿" tabindex="-1"><a class="header-anchor" href="#_12-关于编程语言的那些事儿"><span>12.关于编程语言的那些事儿</span></a></h1><h2 id="编程语言的分类" tabindex="-1"><a class="header-anchor" href="#编程语言的分类"><span>编程语言的分类</span></a></h2><h3 id="_1-机器语言" tabindex="-1"><a class="header-anchor" href="#_1-机器语言"><span><strong>1.机器语言：</strong></span></a></h3><p>机器语言是计算机最原始的语言，是一种<code>指令集</code>的体系。这种指令集称为<code>机器码</code>。仅由 <code>0</code> 和 <code>1</code> 组成。 CPU 在工作的时候只认识机器语言。每台机器都会存在自己的指令集。<br> 最早计算机是以 <a href="https://baike.baidu.com/item/%E7%A9%BF%E5%AD%94%E7%BA%B8%E5%B8%A6/1234150" target="_blank" rel="noopener noreferrer">穿孔纸带</a> 进行编程的。带孔为 1，无孔为 0，经过光电输入到计算机当中。纸带就充当了存储介质。后面被 <code>磁带</code> 所取代。<br> 机器语言的 可读性、可移植性差，编程非常繁杂。<br> 但是直接和机器打交道，运行速度可以接近硬件的极限，资源占用少；</p><h3 id="_2-汇编语言" tabindex="-1"><a class="header-anchor" href="#_2-汇编语言"><span><strong>2.汇编语言</strong></span></a></h3><p><a href="https://baike.baidu.com/item/%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80/61826" target="_blank" rel="noopener noreferrer">汇编语言</a>，即一种低级语言，他用人类容易记忆的语言和符号来表示一组 <code>0</code> 和 <code>1</code> 的代码。相当于是 0 和 1 的一种高层次封装，一组 0 和 1 用一个单词表示。</p><p>不同的处理器有不同的汇编语言语法和编译器，编译的程序无法在不同的处理器上执行，缺乏可移植性，难于从汇编语言代码上理解程序设计意图，可维护性差，即使是完成简单的工作也需要大量的汇编语言代码，很容易产生 bug，难于调试，使用汇编语言必须对某种处理器非常了解，而且只能针对特定的体系结构和处理器进行优化，开发效率很低，周期长且单调。<br> 能够保持机器语言的一致性，直接、简捷，并能像机器指令一样访问、控制计算机的各种硬件设备，如磁盘、存储器、CPU、I/O 端口等。使用汇编语言，可以访问所有能够被访问的软、硬件资源，目标代码简短，占用内存少，执行速度快。</p><p>所以汇编语言一般用来开发 CPU 指令集，驱动程序，逆向工程，破解，单片机，嵌入式开发，系统底层开发等。</p><h3 id="_3-高级语言" tabindex="-1"><a class="header-anchor" href="#_3-高级语言"><span><strong>3.高级语言</strong></span></a></h3><p>运行速度和执行效率低于汇编语言，程序大小与编译器有关。<br> 高级语言接近 <a href="https://baike.baidu.com/item/%E7%AE%97%E6%B3%95%E8%AF%AD%E8%A8%80/10654294" target="_blank" rel="noopener noreferrer">算法语言</a> ，易学、易掌握，提供结构化程序设计的环境和工具，使得设计出来的程序可读性好，可维护性强，可靠性高；高级语言远离机器语言，与具体的计算机硬件关系不大，可移植性好，重用率高；由于把繁杂琐碎的事务交给了编译程序去做，所以自动化程度高，开发周期短，且程序员得到解脱，可以集中时间和精力去从事对于他们来说更为重要的创造性劳动，以提高程序的质量。</p><p>高级语言按照执行方式又可以被分为 <a href="https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E8%AA%9E%E8%A8%80" target="_blank" rel="noopener noreferrer">编译型语言</a> 和 <a href="https://zh.wikipedia.org/zh-sg/%E7%9B%B4%E8%AD%AF%E8%AA%9E%E8%A8%80" target="_blank" rel="noopener noreferrer">解释型语言</a></p><p><strong>编译型语言：</strong><br> 编译语言，一般会通过<a href="https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E5%99%A8" target="_blank" rel="noopener noreferrer">编译器</a>处理，先将<strong>代码</strong>编译为<strong>机器码</strong>，再加以执行。比如 <code>exe</code> 文件，以后需要运行的时候就不用再重新编译了，运行时不需要再编译，所以执行效率很高。</p><p><strong>解释型语言：</strong><br> 解释型语言，一般通过 <a href="https://zh.wikipedia.org/wiki/%E7%9B%B4%E8%AD%AF%E5%99%A8" target="_blank" rel="noopener noreferrer">解释器</a> 将代码一句一句直接执行，不需要像编译语言一样先编译为机器码之后再执行。在执行期，动态将代码逐句解释并执行。典型的如脚本语言。</p><p><strong>脚本语言：</strong><br> 脚本语言是一种解释型语言，脚本语言是为了缩短传统的编写-编译-链接-运行（edit-compile-link-run）过程而创建的计算机编程语言。脚本语言一般都 有相应的脚本引擎来解释执行。 他们一般需要解释器才能运行。一个脚本通常是解释运行而非编译。脚本语言通常都有简单、易学、易用的特性，目的就是希望能让程序员快速完成程序的编写工作。而<a href="https://baike.baidu.com/item/%E5%AE%8F%E8%AF%AD%E8%A8%80/21500677" target="_blank" rel="noopener noreferrer">宏语言</a>则可视为脚本语言的分支，两者也有实质上的相同之处。脚本语言一般都是以文本形式存在,类似于一种命令。</p><hr><blockquote><ul><li>脚本语言是解释型的语言，也就是解释型语言包括脚本语言。</li><li>解释语言是说解释执行的语言，但执行的代码并不一定是文本格式的。</li><li>脚本语言的程序是文本文件，并且是解释执行的。</li></ul></blockquote><hr><p>通常来说 编译型语言的执行速度要比解释型语言快，不用像解释型语言一样多一道解析过程。而且编译型语言是编译成机器码来执行的，所以它们能比解释型语言更好的控制硬件，例如内存管理和 CPU 使用率。典型的如 c/c++ ，rust ，zig 他们一般用于系统和底层库的开发，在高级语言当中，它们是性能的天花板。</p><p>脚本语言代表：Python，Javascript，PHP，它们是开发效率的代名词。</p><p>目前来说，除了一些极为特殊的领域，如芯片指令集开发，嵌入式领域等，大部分时候都是采用的高级语言。</p><p><a href="https://www.cnblogs.com/zuxinwei/p/16839280.html" target="_blank" rel="noopener noreferrer">拓展阅读：各种编程语言的分类 </a></p><h2 id="主流编程语言介绍" tabindex="-1"><a class="header-anchor" href="#主流编程语言介绍"><span>主流编程语言介绍</span></a></h2><h3 id="c-语言" tabindex="-1"><a class="header-anchor" href="#c-语言"><span><a href="https://c-cpp.com/" target="_blank" rel="noopener noreferrer">C 语言</a></span></a></h3><p>C 语言的主要应用领域是操作系统、嵌入式和服务器这三块，它是一门强大的被广泛运用于底层的高级语言，比如说微软的 Windows 系统占据着全球 90%以上的操作系统份额，而它的内核就是用 C 语言写的。还有 著名的 Unix/Linux 也是由 C 语言编写。</p><p>c 语言因为其 陡峭的学习曲线，较低的开发效率，缺乏一些现代语言特性，而且容易出错(比如内存泄露溢出等)，一般来说都不太推荐使用 C 语言进行应用开发。<br> 但是由于其出色的性能和可以直接访问硬件的特性，在系统底层开发具有不可取代的地位。</p><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span><a href="https://learn.microsoft.com/zh-cn/cpp/" target="_blank" rel="noopener noreferrer">C++</a></span></a></h3><p>相当于 C 语言的增强版，是 C 语言的超集。它进一步扩充和完善了 C 语言，并提供了很多高级特性，如面向对象、封装、继承、多态，抽象。使得其更容易编写大型和复杂项目。<br> 它的性能基本上和 C 语言不相上下。<br> C++主要用于游戏领域、办公软件、图形处理、网站、搜索引擎、图形界面层、关系型数据库、浏览器、软件开发、集成环境 IDE 等等业务复杂但是对性能有一定要求的地方。<br><a href="https://www.runoob.com/cplusplus/cpp-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/cplusplus/cpp-tutorial.html</a></p><p>直到现在为止，<code>c/c++</code> 在编程领域仍然占据着统治地位。它们是性能的代表，是现代计算机编程领域的基石，大多数语言的 <strong>编译器和解释器</strong> 都是 用它们开发的。也就是说，没有 <code>c/c++</code> 就没有 <strong>现代编程语言</strong> 。</p><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span><a href="https://www.java.com/zh-CN/" target="_blank" rel="noopener noreferrer">Java</a></span></a></h3><p>既是编译型语言又是解释型语言。 这是因为 Java 源代码首先经过编译器编译成字节码文件(.class 文件)，然后由 Java 虚拟机(JVM)解释执行字节码。 编译型语言将源代码一次性编译成机器语言，然后可以直接在计算机上执行。<br> Java 主要用于企业级应用开发、网站平台开发、移动领域的手机游戏和移动 android 开发。举个例子吧，几乎所有的交易网站（淘宝，天猫，京东等）的保险和金融等网站都是用的 Java 做开发。<br> Java 是目前市面上找工作机会非常多但也同样竞争最激烈的一门语言，相对于 C 语言来说，Java 更容易学一些。<br> 其性能低于 C/C++ , 但具备非常高级的抽象和表达能力，具备更好的可维护性，让编写复杂庞大的业务逻辑变得极为方便。<br> 缺点是占用内存非常庞大，语法大多数时候显得很啰嗦。</p><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1"><span><a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/" target="_blank" rel="noopener noreferrer">C#</a></span></a></h3><p>这是一门很先进的语言，基本上可以应用于任何领域，语法类似 Java。他基本上可应用于任何领域的开发。但因为早期其生态环境太过于依赖 <code>Windows</code> 而不被市场考虑。<br><a href="https://aiops.com/news/post/4735.html" target="_blank" rel="noopener noreferrer">相关阅读:微软是怎么把 C#玩砸的？</a></p><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust"><span><a href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">Rust</a></span></a></h3><p>其诞生目的是为了取代 <code>C/C++</code>，其应用领域和 <code>c++</code> 一样，也拥有等同于 <code>C语言</code> 的性能。<br> 它一样具有着陡峭的学习曲线，但是其强调了内存安全。可以在编译期帮开发者查找出代码中的大部分错误。<br> 目前 Linux 中一部分已经采用 Rust 进行重构。它在当下越来越流行，被誉为 <strong>最有希望取代 C 语言</strong>的语言。</p><h3 id="zig" tabindex="-1"><a class="header-anchor" href="#zig"><span><a href="https://ziglang.org/zh/" target="_blank" rel="noopener noreferrer">Zig</a></span></a></h3><p>又一个想要替代 <code>C</code> 语言的语言，他可以完成所有 C 语言能完成的工作，还可以方便的集成 C 库。提供了丰富的特性和高级抽象能力，学习曲线相对比较平缓。是近几年刚刚展露头角的语言。</p><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go"><span><a href="https://go.dev/" target="_blank" rel="noopener noreferrer">Go</a></span></a></h3><p>go 是非常年轻的一门语言，它拥有不亚于 Python、Javascript 等脚本的开发速度，又具有接近 <code>C/C++</code> 的执行性能，还非常简单和易于学习。<br> 它具备强类型，易于维护，语法简洁，特性简单。可以支持几乎所有平台的交叉编译，天生具有高并发的特性，自带 GC 和垃圾回收。</p><p>2015 年 8 月 19 日，Go 1.5 版本发布，这时它已经完全实现了 <a href="https://www.cnblogs.com/lidyan/p/6727184.html" target="_blank" rel="noopener noreferrer">自举</a>，现在已经是 1.22.4 了。</p><p>虽然目前看来<code>Go</code>的实际性能和 <code>C/C++</code> 还有一点差距，但在<strong>高级语言当中</strong>也是数一数二的存在了。<br> 它在开发效率和性能上达到了一个非常完美的平衡点。</p><p>它目前主要的应用于 <strong>内存数据库</strong>和<strong>云平台领域</strong> 。</p><p>目前国内越越来越多的企业正在切换成<code>Go</code></p><p><a href="https://cloud.tencent.com/developer/article/2345578" target="_blank" rel="noopener noreferrer">课外阅读:Go 语言的前生今世与介绍</a></p><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>JavaScript</span></a></h3><p>简称 js ，是浏览器中的一等公民，在 Web 开发中有着无法被撼动的地位。<br> 因为浏览器具有非常好的跨平台一致性，所以 Javascript 也同样具有良好的跨平台特性，凡是浏览器内核可以运行的地方，Javascript 就能发挥出极大的作用。<br> 比如 <code>Nodejs</code> 就是用<code>C</code>语言拓展了浏览器内核，使得 Javascript 这门客户端语言也可以应用于服务器开发。可以说， js 是唯一一门可以做到前后端 <strong>同构</strong> 的语言。<br> 得益于 Webkit 内核的牛逼的优化，js 的性能在脚本语言当中也是数一数二的存在。<br> 它具备非常快的开发速度和还不错的性能成为了，使得 Javascript <strong>成为了最多开发人员和最广泛使用的编程语言</strong>之一。</p><p>但由于是弱类型语言，在构建大型项目的时候会非常难以维护。于是微软 于 2012 年发布了 <a href="https://ts.xcatliu.com/introduction/what-is-typescript.html" target="_blank" rel="noopener noreferrer">TypeScript</a>。它是 js 的超集，完美解决了 js 大型项目难以维护的缺点。</p><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h3><p>Python 是动态类型的脚本语言，其执行效率非常慢，用 Python 编写大型项目也是一场灾难。<br> 但是因为其语法简洁，并且编写方式很接近自然语言，上手入门非常简单。所以它受到了很多 <code>非程序员</code> 人士的喜爱。而且它可以非常方便的调用 <code>C语言</code> 编写的基础库，所以它作为基础库的 <code>粘合剂</code> 语言有着令人咂舌的生态。所以它的开发效率非常高，经常两三行代码就能完成一些非常复杂的任务。<br> 因为这些特性，所以它常常被用于编写那种 <strong>用完即走</strong> 的工作流脚本。一般的 Linux/Mac 系统都会内置 <code>Python</code> 的的解释器。<br> 所以它被广泛用于以下领域：<br> 一、数据分析与科学计算；<br> 二、Web 开发；<br> 三、自动化脚本编写；<br> 四、机器学习与人工智能；<br> 五、网络爬虫；<br> 六、游戏开发；</p><p>大多数时候，Python 在以上领域中其实仅仅只是扮演了 <strong>调用者</strong> 角色。但是作为一个 <strong>调用者</strong> 和 <strong>粘合剂</strong> 语言来说，Python 的确十分优秀。</p><h2 id="选择适合自己的编程语言" tabindex="-1"><a class="header-anchor" href="#选择适合自己的编程语言"><span>选择适合自己的编程语言</span></a></h2><p><a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener noreferrer">TIOBE 编程语言排行榜</a></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>理论上讲，只要是图灵完备的编程语言，它们能做到的事情基本都是相似的。只是随着历史发展不同的编程语言更加适合不同的领域。</p><p>因为 <code>C/C++</code> 极致的性能， 所以系统底层开发离不开它们。但 <code>Rust</code>、<code>Zig</code> 这些后起之秀也在不断挑战它的统治地位。</p><p>因为浏览器的发展历史，Javascript 在网页编程领域无法被取代。而且现在还有很多人致力于用 Javascript 开发一切。</p><p>因为十分便捷的特性和足够丰富的生态以及非常低的上手门槛，Python 一度火爆。</p><p>因为非常强的抽象和表达能力，以及高可移植性、可扩展性。在互联网发展伊始阶段 Java 在商业领域表现卓著。不过兼具性能和开发速度的后来者 <code>Go</code> 在一些地方正在逐渐取代 <code>Java</code>。</p><p>因为非常极致的 Web 开发速度，PHP 曾经也创造了非常多的商业奇迹。虽然现在鲜有人问津。</p></div><p>你对网页，小程序，H5 开发非常感兴趣，那么推荐 Javascript 进行入门；</p><p>你学习编程语言的目的是为了方便快捷的完成一些琐事、杂事和工作流，或者是用于科学计算和市场分析，那么推荐 Python 进行入门；</p><p>如果你想要开发一些复杂的稳定的应用程序，想要构建一个平台，提供一些服务让很多人使用，推荐 <code>Go语言</code> 进行入门学习；</p><p>如果你想在编程领域有长远的发展，深入底层，有大量的时间可以进行钻研和深入学习，那么你可以尝试 <code>Rust</code> 。但是 <code>Rust</code> 并不适合入门玩家，我更推荐使用 C 语言入门，然后再去学习 Rust 。</p><p>如果想要开发游戏，最好的方法是直接学习 对应的游戏引擎的上层语言。</p><h2 id="编程语言发展史" tabindex="-1"><a class="header-anchor" href="#编程语言发展史"><span>编程语言发展史</span></a></h2><p><a href="https://www.bilibili.com/video/BV1NN4y1s7AM" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1NN4y1s7AM</a></p>',59)),n(r,{bvid:"BV1NN4y1s7AM"})])}const g=t(l,[["render",i],["__file","coding_market.html.vue"]]),b=JSON.parse('{"path":"/developer/basic/coding_market.html","title":"12.关于编程语言的那些事儿","lang":"zh-CN","frontmatter":{"category":["developer","基础"],"tag":["演示"],"order":12,"permalink":"/developer/basic/coding_market.html","description":"12.关于编程语言的那些事儿 编程语言的分类 1.机器语言： 机器语言是计算机最原始的语言，是一种指令集的体系。这种指令集称为机器码。仅由 0 和 1 组成。 CPU 在工作的时候只认识机器语言。每台机器都会存在自己的指令集。 最早计算机是以 穿孔纸带 进行编程的。带孔为 1，无孔为 0，经过光电输入到计算机当中。纸带就充当了存储介质。后面被 磁带 所...","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/developer/basic/coding_market.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"12.关于编程语言的那些事儿"}],["meta",{"property":"og:description","content":"12.关于编程语言的那些事儿 编程语言的分类 1.机器语言： 机器语言是计算机最原始的语言，是一种指令集的体系。这种指令集称为机器码。仅由 0 和 1 组成。 CPU 在工作的时候只认识机器语言。每台机器都会存在自己的指令集。 最早计算机是以 穿孔纸带 进行编程的。带孔为 1，无孔为 0，经过光电输入到计算机当中。纸带就充当了存储介质。后面被 磁带 所..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"演示"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12.关于编程语言的那些事儿\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"编程语言的分类","slug":"编程语言的分类","link":"#编程语言的分类","children":[{"level":3,"title":"1.机器语言：","slug":"_1-机器语言","link":"#_1-机器语言","children":[]},{"level":3,"title":"2.汇编语言","slug":"_2-汇编语言","link":"#_2-汇编语言","children":[]},{"level":3,"title":"3.高级语言","slug":"_3-高级语言","link":"#_3-高级语言","children":[]}]},{"level":2,"title":"主流编程语言介绍","slug":"主流编程语言介绍","link":"#主流编程语言介绍","children":[{"level":3,"title":"C 语言","slug":"c-语言","link":"#c-语言","children":[]},{"level":3,"title":"C++","slug":"c","link":"#c","children":[]},{"level":3,"title":"Java","slug":"java","link":"#java","children":[]},{"level":3,"title":"C#","slug":"c-1","link":"#c-1","children":[]},{"level":3,"title":"Rust","slug":"rust","link":"#rust","children":[]},{"level":3,"title":"Zig","slug":"zig","link":"#zig","children":[]},{"level":3,"title":"Go","slug":"go","link":"#go","children":[]},{"level":3,"title":"JavaScript","slug":"javascript","link":"#javascript","children":[]},{"level":3,"title":"Python","slug":"python","link":"#python","children":[]}]},{"level":2,"title":"选择适合自己的编程语言","slug":"选择适合自己的编程语言","link":"#选择适合自己的编程语言","children":[]},{"level":2,"title":"编程语言发展史","slug":"编程语言发展史","link":"#编程语言发展史","children":[]}],"git":{},"readingTime":{"minutes":12.76,"words":3828},"filePathRelative":"developer/basic/12.关于编程语言的那些事.md","excerpt":"\\n<h2>编程语言的分类</h2>\\n<h3><strong>1.机器语言：</strong></h3>\\n<p>机器语言是计算机最原始的语言，是一种<code>指令集</code>的体系。这种指令集称为<code>机器码</code>。仅由 <code>0</code> 和 <code>1</code> 组成。 CPU 在工作的时候只认识机器语言。每台机器都会存在自己的指令集。<br>\\n最早计算机是以 <a href=\\"https://baike.baidu.com/item/%E7%A9%BF%E5%AD%94%E7%BA%B8%E5%B8%A6/1234150\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">穿孔纸带</a> 进行编程的。带孔为 1，无孔为 0，经过光电输入到计算机当中。纸带就充当了存储介质。后面被 <code>磁带</code> 所取代。<br>\\n机器语言的 可读性、可移植性差，编程非常繁杂。<br>\\n但是直接和机器打交道，运行速度可以接近硬件的极限，资源占用少；</p>","autoDesc":true}');export{g as comp,b as data};
