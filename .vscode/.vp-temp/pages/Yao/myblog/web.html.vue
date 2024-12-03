<template><div><h1 id="关于本站" tabindex="-1"><a class="header-anchor" href="#关于本站"><span>关于本站</span></a></h1>
<h2 id="_1、项目基本" tabindex="-1"><a class="header-anchor" href="#_1、项目基本"><span>1、项目基本</span></a></h2>
<p>使用框架：VuePress2.0.0 R17<br>
开发软件：Vs Code 1.94.1<br>
指令版本：npm 10.8.2、pnpm 9.11.0</p>
<h2 id="_2、指令相关" tabindex="-1"><a class="header-anchor" href="#_2、指令相关"><span>2、指令相关</span></a></h2>
<h3 id="_2-1-创建vuepress命令" tabindex="-1"><a class="header-anchor" href="#_2-1-创建vuepress命令"><span>2.1-创建VuePress命令：</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]npm init vuepress-theme-hope@latest Yaomi //创建项目Yaomi</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]npm run build //构建项目</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]npm run docs:clean-dev //清除缓存运行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]npm init //项目初始化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]npm install //安装依赖</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]code . //通过VS code 打开该项目</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-更改目录-github-deploy-docs-yml" tabindex="-1"><a class="header-anchor" href="#_2-2-更改目录-github-deploy-docs-yml"><span>2.2-更改目录：Github/deploy_docs.yml</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]      - name: 构建文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]        env:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]         NODE_OPTIONS: --max_old_space_size=8192</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]        run: |-</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]          pnpm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]         > src/.vuepress/dist/.nojekyll</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]      - name: 部署文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]       uses: JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]        env:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]          GITHUB_TOKEN: ${{secrets.ACCESS_TOKEN}} #Yao：项目密钥</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]       with:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]         # 部署文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]          branch: Yao_pages #Yao：开源项目分支名 注意大小写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]          folder: src/.vuepress/dist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-更改目录-src-config-ts" tabindex="-1"><a class="header-anchor" href="#_2-3-更改目录-src-config-ts"><span>2.3-更改目录：Src/config.ts</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]import { defineUserConfig } from "vuepress";</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]import theme from "./theme.js";</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]export default defineUserConfig({</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]  base: "/Yaoweb/", //Yao：开源项目名 注意大小写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]  lang: "zh-CN",</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]  title: "博客演示",</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![] description: "vuepress-theme-hope 的博客演示",</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![] theme,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-git上传命令" tabindex="-1"><a class="header-anchor" href="#_2-4-git上传命令"><span>2.4-git上传命令：</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git config user.name Yaoabcde //绑定GitHub用户名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git config user.email 1964877312@qq.com //绑定GitHub账号</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]cd Yaomi  										#进入项目目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git init       								#初始化 Git 仓库（如果还没有）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]#git remote add origin https://github.com/your-username/Yaomi.git  	#添加远程仓库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git remote add origin https://github.com/YaoABCDE/Yaoweb.git 				#个人远程仓库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git add .      								#添加所有文件到暂存区</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git commit -m "first demo"  	#提交文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git branch -M main  					#将当前分支重命名为 main（如果还没有命名为 main）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]git push -u origin main  			#推送到远程仓库的 main 分支</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-官网源" tabindex="-1"><a class="header-anchor" href="#_2-5-官网源"><span>2.5-官网源：</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]常见依赖：npm、cnpm、yarn、pnpm</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]淘宝源：npm config set registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]腾讯源： https://mirrors.cloud.tencent.com/npm</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]yarn源： https://registry.yarnpkg.com/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]cnpm源： https://r.cnpmjs.org/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]npmMirror： https://registry.npmmirror.com/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">![]npm官方源：https://registry.npmjs.org/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、时间流程" tabindex="-1"><a class="header-anchor" href="#_3、时间流程"><span>3、时间流程</span></a></h2>
<p>2024-10-10：发布V1.0.0，网站基本雏形</p>
<figure><img src="@source/Yao/myblog/Yaoweb.png" alt="本地路径" tabindex="0" loading="lazy"><figcaption>手机端扫码查看</figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<pre><code>            ————《森海鹿电子》
</code></pre>
</div>
</div></template>


