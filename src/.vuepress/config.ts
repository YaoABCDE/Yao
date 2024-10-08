import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },

  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  base: '/Yao/',  //部署站点的基础路径
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  locales: {
    '/': {
      lang: 'zh-CN',//语言选项
      title: 'YAO', //主页标题
      description: '我欲修仙，快乐齐天', //站点的描述
    },
    '/en/': {
      lang: 'en-US',
      title: 'Yao',
      description: 'Hello Yao',
    },
  },

  theme,
  // Enable it with pwa
  shouldPrefetch: false,
});
