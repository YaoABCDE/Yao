import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as p,o as a}from"./app-DrQhfaqv.js";const o="/assets/drawio-DGLuDzZU.png",n="/assets/drawio2-DqgwA6s_.png",i={};function c(l,e){return a(),r("div",null,e[0]||(e[0]=[p('<h1 id="_6-笔记的终极形态" tabindex="-1"><a class="header-anchor" href="#_6-笔记的终极形态"><span>6.笔记的终极形态</span></a></h1><div class="hint-container info"><p class="hint-container-title">个人笔记的终极形态</p><p>Markdown 编写，<br> Github 存储，<br> VSCode 插件，<br> 本地画图无缝插入。</p></div><h2 id="本文重点" tabindex="-1"><a class="header-anchor" href="#本文重点"><span>本文重点</span></a></h2><p>一共三个 VSCode 插件</p><blockquote><p><a href="https://marketplace.visualstudio.com/items?itemName=jock.svg" target="_blank" rel="noopener noreferrer">SVG</a><br> 可以在本地编辑 SVG ，进行画图作业。</p></blockquote><blockquote><p><a href="https://marketplace.visualstudio.com/items?itemName=eightHundreds.vscode-mindmap" target="_blank" rel="noopener noreferrer">vscode-mindmap</a><br> 开源的思维导图工具。作者基于源码 fork 进行优化，支持直接以 <code>*.km.svg</code> 的形式进行直接编辑和保存。</p></blockquote><blockquote><p><a href="https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio" target="_blank" rel="noopener noreferrer">Draw.io Integration</a><br> 开源的流程图绘制工具，支持直接以 <code>.drawio.svg</code>的文件形式直接进行保存。</p></blockquote><p>上面这三个插件有一个非常牛逼的共同点，都可以直接基于 SVG 进行编辑和保存，不需要任何导出步骤。<br> 于是可以达到如下效果:</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>爽翻了有木有！ 直接补齐了 Markdown 无法画图的 唯一的短板！解决了笔记中插入图画的问题。</p></blockquote><h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因"><span>起因</span></a></h2><p>之前一直采用 Markdown 来做笔记，但是奈何其表达形式有限。</p><blockquote><p>notion、语雀、飞书、印象笔记。。。</p></blockquote><p>市面上笔记软件非常多，各有特色但功能基本趋同。后来一直在用飞书，它可以在其中穿插各种表格，图表，流程图、思维导图，感觉很赞，而且可以在线共享共同编辑。不知不觉就用了两年多。<br> 但是，就在某一天，我的飞书突然被封禁！！<br> 飞书官方告知我无法解封的时候，正式宣告我的上百篇文档彻底跟我没了关系。</p><p>自此以后，我再也无法信任国内出品的任何工具了。<br> 然后我四处寻找可以完美替代飞书文档的工具。</p><h2 id="在线笔记" tabindex="-1"><a class="header-anchor" href="#在线笔记"><span>在线笔记</span></a></h2><p><strong>在线笔记的好处</strong>:</p><ol><li><p><strong>用完就走。</strong><br><em>打开一个链接就可以直接开始编写</em></p></li><li><p><strong>文档共享十分方便。</strong><br><em>一个链接发给对方就行了</em></p></li><li><p><strong>权限控制。</strong><br><em>你可以设置谁可以看，谁能看，谁拥有编辑权限等</em></p></li><li><p><strong>入门简单，使用方便。</strong><br><em>字节跳动，阿里巴巴等大国内一线大厂程序员和产品，经年累月的帮你设计和优化，贴心的功能，精美的外观，一流的体验....</em></p></li><li><p><strong>功能丰富</strong><br><em>这里不得不提一嘴 <code>语雀 </code>和 <code>金山文档</code> 的流程图和思维导图工具，体验感拉满</em></p></li></ol><p>但是有一个无论如何都无法避免的缺点: <strong>你的笔记并不属于你！！！！！</strong></p><p>凡是在线文档，你的文档全部存在于各大公司的服务器之上，包括这些文档的<strong>解释权</strong>、<strong>访问权</strong> 都不属于你。我国自有国情在，如果你在文档当中包含了一些关键性的字眼，账号被封你欲哭无泪。包括国内各种云盘相关的文件等。你的内容安全性根本无从谈起！个人隐私等同于没有！</p><p>公司倒闭，你的东西会跟着一块受到牵连。而且在很多地方都会有各种对个人不利的协议。个人文档根本无法得到保证。</p><blockquote><p>免费的，才是最贵的，除非它开源。</p></blockquote><p>除此之外还有各种坑: 为了留住你，所有的平台，包括知乎、简书、语雀等等等，你导入都很方便，但是导出就阻碍重重.......</p><p>其次我非常认可的在线笔记有: Microsoft 365 的 <a href="https://www.office.com" target="_blank" rel="noopener noreferrer">Office Online</a> 和 <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">Notion</a>。</p><p>包括 google 的 docs 我都觉得做的一般。</p><p>其中 Office 是采用 OneDrive 来进行存储的，我非常安心。</p><p>但是这三货的在线都需要梯子！并且都不带流程图和思维导图！完全无法忍受！</p><p><code>语雀</code>，国内阿里的，而且不开会员无法在线共享。体验虽好，但是就因为你是国内的在线文档，还无法免费共享。这个就直接 pass 了</p><p><code>腾讯文档</code>，免费，但是体验太差了。不带流程图和思维导图。pass</p><p><code>金山文档</code>，免费，可以直接在线共享，只是存储空间非常小，感觉不太够用。</p><p>然后，等到哪一天你想迁移你的文档了，那简直就是灾难！</p><hr><p>在线文档这块，</p><p>如果对流程图和思维导图没有非得内置的强制要求，首先推荐 <code>office</code>。</p><p>如果对墙有要求，首推 <code>语雀</code>。</p><p>如果在线共享需求强烈的，墙内推荐 金山文档 ，墙外推荐 <code>office</code></p><p>如果想免费在线分享编辑推荐 <code>金山文档</code> 。讲真，WPS 会员还是很香的（前提是微软倒闭，或者 Microsoft 365 突然出现不合理的收费）</p><p>如果想在墙内线分享，且不差钱，<code>语雀</code>。</p><p>如果飞书账号在国内进行了企业认证，然后分享的内容不涉及任何敏感话题，且分享范围很小，依然首推<code>飞书</code>。</p><p>(飞书的封禁很严格，你对外分享的文档里面有任何可以的文字就会被封禁，金山文档和语雀，只要不涉及敏感话题都没啥太大的问题)</p><p>但是吧，啥玩意儿是敏感话题，你说了不算。言论自由压根不存在的。</p><p>PS: 根据调查，文档出了问题 <code>金山文档</code> 和 <code>语雀</code> 会直接屏蔽对应文档的在线分享链接，你的文档你依然可以打开。但是飞书是直接没收，账户无法登录！。</p><blockquote><p><strong>我特么近百篇文档笔记流程图思维导图全都没了！！！</strong><br> 在线笔记这块，我十分不推荐使用，还是 Github 和本地笔记软件用着安心。<br> 如果非得在线共享，建议生成 pdf 或者本地保留副本。</p></blockquote><h2 id="本地笔记" tabindex="-1"><a class="header-anchor" href="#本地笔记"><span>本地笔记</span></a></h2><p>Markdown 基本上是首选。(OneNote 这玩意儿我只想说呵呵~)</p><p>md 是一种很干净的文本格式，任何软件都能打开它，即使没有软件渲染也不影响阅读。并且，几乎所有的平台都支持 Markdown 的语法跟格式，Markdown 写作的笔记可以无需任何更改就可以发表到任何平台而保证格式不乱。</p><p>但是，md 也会存在一些致命的缺点：</p><ul><li>无法内置图片，单独一个主文件图像会无法显示</li><li>语法需要一点点学习成本</li><li>它的呈现效果取决于渲染器是什么样</li><li>无法在线分享和多人协作编辑</li></ul><p>但是，它的优点是无法让人拒绝的。而且它直接支持 HTML 和 CSS，对于一个前端来说，这是十分强大的。</p><p>只要解决了图床问题，md 单文件就可以无需改动随处分发。</p><p>md 的渲染器大多都是开源的，而且标准大多数都是统一的，也就是说，你无须担心自己的文档无法查看~</p><p>Github，世界上最大的交友平台，琳琅满目的开源软件，上百人一起协作编写一份代码文件都不在话下，区区 md 而已。通过各种开源软件，可以在 1 小时内，让你的 md 文档被全世界人和人看到。</p><p>只是共同编辑的门槛稍微会高一丢丢，非程序员可能会很难参与进来。</p><p>虽然很多基于 md 的渲染器都内置了 流程图 和 思维导图的解析语法，但是学习成本依然很高，并且创作的时候非常不直观。。</p><p>不过基于 VSCode 和其插件生态可以完美的解决这个问题。编写好的 Md 也可以通过 VuePress 一键部署到个人博客。并且很多步骤都可以脚本实现自动化。熟练之后，使用体验丝毫不亚于各种在线文档。</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最主要的是：<strong>我写的文档，它只属于我~！</strong></p><figure><img src="'+n+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><hr><p>VSCode + Markdown 基本吊打所有的本地笔记软件。<br> 代码级别文本查询和处理精度用来管理文本简直太 Easy 了。</p>',60)]))}const m=t(i,[["render",c],["__file","vscode_Draw.html.vue"]]),g=JSON.parse('{"path":"/tools/vscode/vscode_Draw.html","title":"6.笔记的终极形态","lang":"zh-CN","frontmatter":{"category":["工具"],"tag":["VSCode","目录"],"order":6,"permalink":"/tools/vscode/vscode_Draw.html","description":"6.笔记的终极形态 个人笔记的终极形态 Markdown 编写， Github 存储， VSCode 插件， 本地画图无缝插入。 本文重点 一共三个 VSCode 插件 SVG 可以在本地编辑 SVG ，进行画图作业。 vscode-mindmap 开源的思维导图工具。作者基于源码 fork 进行优化，支持直接以 *.km.svg 的形式进行直接编辑和...","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/tools/vscode/vscode_Draw.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"6.笔记的终极形态"}],["meta",{"property":"og:description","content":"6.笔记的终极形态 个人笔记的终极形态 Markdown 编写， Github 存储， VSCode 插件， 本地画图无缝插入。 本文重点 一共三个 VSCode 插件 SVG 可以在本地编辑 SVG ，进行画图作业。 vscode-mindmap 开源的思维导图工具。作者基于源码 fork 进行优化，支持直接以 *.km.svg 的形式进行直接编辑和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T14:29:24.000Z"}],["meta",{"property":"article:tag","content":"VSCode"}],["meta",{"property":"article:tag","content":"目录"}],["meta",{"property":"article:modified_time","content":"2024-10-07T14:29:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.笔记的终极形态\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T14:29:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"本文重点","slug":"本文重点","link":"#本文重点","children":[]},{"level":2,"title":"起因","slug":"起因","link":"#起因","children":[]},{"level":2,"title":"在线笔记","slug":"在线笔记","link":"#在线笔记","children":[]},{"level":2,"title":"本地笔记","slug":"本地笔记","link":"#本地笔记","children":[]}],"git":{"createdTime":1728311364000,"updatedTime":1728311364000,"contributors":[{"name":"YAO","email":"1964877312@qq.com","commits":1}]},"readingTime":{"minutes":6.83,"words":2048},"filePathRelative":"tools/vscode/6.笔记的终极形态.md","localizedDate":"2024年10月7日","excerpt":"\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">个人笔记的终极形态</p>\\n<p>Markdown 编写，<br>\\nGithub 存储，<br>\\nVSCode 插件，<br>\\n本地画图无缝插入。</p>\\n</div>\\n<h2>本文重点</h2>\\n<p>一共三个 VSCode 插件</p>\\n<blockquote>\\n<p><a href=\\"https://marketplace.visualstudio.com/items?itemName=jock.svg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SVG</a><br>\\n可以在本地编辑 SVG ，进行画图作业。</p>\\n</blockquote>","autoDesc":true}');export{m as comp,g as data};
