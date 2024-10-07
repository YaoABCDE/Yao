<template><div><h1 id="_3-前端开发设置" tabindex="-1"><a class="header-anchor" href="#_3-前端开发设置"><span>3.前端开发设置</span></a></h1>
<h2 id="colorize" tabindex="-1"><a class="header-anchor" href="#colorize"><span>colorize</span></a></h2>
<p>VSCode 系统自带的颜色选择器会导致开发卡顿，而且容易误触。但是关闭颜色选择器又无法直观的看到颜色代码所代表的颜色了，这个插件很好的弥补了这点。</p>
<p>注意，如果想要支持更多语言，则需要单独进行配置。</p>
<p><a href="https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize</a></p>
<h2 id="css-peek" tabindex="-1"><a class="header-anchor" href="#css-peek"><span>CSS Peek</span></a></h2>
<p>可以通过类名快速跳转到定义好的 css 代码处，使用频率很高，非常方便。<br>
<a href="https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek</a></p>
<h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint"><span>ESLint</span></a></h2>
<p>安装这个插件之后，再开启 VSCode 自动格式化，那么再保存的时候会按照提前配置好的 ESLint 帮你格式化代码，非常赏心悦目。<br>
不过需要你在当前目录或者全局安装过 eslint 的 npm 包<br>
<code v-pre>npm i eslint</code> 或 <code v-pre>npm i -g eslint</code>，<br>
然后在工作区目录有一个 <code v-pre>.eslintrc</code> 配置文件。<br>
ESLint 对于团队协作开发 js 或 ts 项目的风格统一十分有帮助。</p>
<p>插件地址：<br>
<a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint</a></p>
<p>ESLint 官网：<br>
<a href="https://eslint.cn/" target="_blank" rel="noopener noreferrer">https://eslint.cn/</a></p>
<h2 id="prettier-code-formatter" tabindex="-1"><a class="header-anchor" href="#prettier-code-formatter"><span>Prettier - Code formatter</span></a></h2>
<p>一般来说，使用 ESLint 格式化 js 风格层面的规范，但是代码的格式化一般都采用 Prettier。</p>
<p>与 ESLint 一样，需要本地 <code v-pre>npm i prettier</code> 或 <code v-pre>npm i -g prettier</code>。然后还需要一个 配置文件。</p>
<p>插件地址:<br>
<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode</a></p>
<p>官网地址：<br>
<a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">https://prettier.io/</a></p>
<h2 id="live-server" tabindex="-1"><a class="header-anchor" href="#live-server"><span>Live Server</span></a></h2>
<p>快速启动一个当前工作区为主的静态服务。<br>
用于预览一些文件渲染效果很方便。<br>
<a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer</a></p>
<h2 id="px-to-rem" tabindex="-1"><a class="header-anchor" href="#px-to-rem"><span>px to rem</span></a></h2>
<p>快速的将 px 单位转换成 rem 单位，节省心智。<br>
可以在设置中单独配置转换比例，在编写 微信小程序时也有帮助。<br>
<a href="https://marketplace.visualstudio.com/items?itemName=sainoba.px-to-rem" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=sainoba.px-to-rem</a></p>
<h2 id="version-lens" tabindex="-1"><a class="header-anchor" href="#version-lens"><span>Version Lens</span></a></h2>
<p>显示当前 package.json 中最新的安装包版本。<br>
<a href="https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens</a></p>
<h2 id="vue-official" tabindex="-1"><a class="header-anchor" href="#vue-official"><span>Vue - Official</span></a></h2>
<p>现在开发 vue 只需要这一个插件就可以了。<br>
<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=Vue.volar</a></p>
</div></template>


