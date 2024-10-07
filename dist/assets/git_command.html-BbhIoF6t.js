import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-BwK5f0nB.js";const t={};function h(e,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="_3-git-常用命令" tabindex="-1"><a class="header-anchor" href="#_3-git-常用命令"><span>3.Git 常用命令</span></a></h1><p>一般的工作流以及需要用到的命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#将当前目录变成仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#克隆远端仓库到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">远程仓库地</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">址&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#仅克隆某一个分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --single-branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">分支名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">称&gt; &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">远程地</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">址&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看当前工作区状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#该文件的修改添加到暂存区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">filenam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#暂存所有更改</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#将未提交的修改保存起来</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#拉取远端的更改到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#提交当前所有暂存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">注释说</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">明&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#切换工作分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">分支</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#新建分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">分支</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#将新建的分支推送到远端</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --set-upstream</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">分支</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#将一个分支合并到当前工作分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">分支</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看分支所有分支包括远程分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#回退版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HEAD^</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  回退到上个版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reset</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --hard</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HEAD~3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  回退到前3次提交之前，以此类推，回退到n次提交之前</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reset</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --hard</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit_id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#删除远端分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">分支</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#删除本地分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">分支</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#将当前分支的 commit 推送到远端</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const d=s(t,[["render",h],["__file","git_command.html.vue"]]),r=JSON.parse('{"path":"/tools/git/git_command.html","title":"3.Git 常用命令","lang":"zh-CN","frontmatter":{"category":["工具"],"tag":["工具","技巧","教程","git"],"order":3,"permalink":"/tools/git/git_command.html","description":"3.Git 常用命令 一般的工作流以及需要用到的命令：","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/tools/git/git_command.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"3.Git 常用命令"}],["meta",{"property":"og:description","content":"3.Git 常用命令 一般的工作流以及需要用到的命令："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:tag","content":"git"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.Git 常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[],"git":{},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"tools/git/3.Git常用命令.md","excerpt":"\\n<p>一般的工作流以及需要用到的命令：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#将当前目录变成仓库</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> init</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#克隆远端仓库到本地</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> clone</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">远程仓库地</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">址&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#仅克隆某一个分支</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> clone</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --single-branch</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -b</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">分支名</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">称&gt; &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">远程地</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">址&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#查看当前工作区状态</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> status</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#该文件的修改添加到暂存区</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">filenam</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">e&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#暂存所有更改</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> add</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> .</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#将未提交的修改保存起来</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> stash</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#拉取远端的更改到本地</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#提交当前所有暂存</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> commit</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> –m</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">注释说</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">明&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#切换工作分支</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> checkout</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">分支</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">名&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#新建分支</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> checkout</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -b</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">分支</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">名&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#将新建的分支推送到远端</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> push</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --set-upstream</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> origin</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">分支</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">名&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#将一个分支合并到当前工作分支</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> merge</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">分支</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">名&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#查看分支所有分支包括远程分支</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> branch</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -a</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#回退版本</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> reset</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> HEAD^</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  回退到上个版本</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> reset</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --hard</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> HEAD~3</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  回退到前3次提交之前，以此类推，回退到n次提交之前</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> reset</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --hard</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> commit_id</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#删除远端分支</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> push</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> origin</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> :</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">分支</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">名&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#删除本地分支</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> branch</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -d</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">分支</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">名&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#将当前分支的 commit 推送到远端</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> push</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,r as data};
