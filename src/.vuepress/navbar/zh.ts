import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  //标题一
  {
    text: '总览',
    icon: 'sort',
    children: ['/posts/catalog.html', '/developer/', '/tutorial/', '/leetcode/', '/tips/', '/tools/'],
  },
  //标题二
  {
    text: '分类',
    icon: 'jiansuo',
    children: [
      { text: '全部', icon: 'list', link: '/article/' },
      { text: '分类', icon: 'category', link: '/category/' },
      { text: '标签', icon: 'tag', link: '/tag/' },
      { text: '时间轴', icon: 'time', link: '/timeline/' },
    ],
  },
  //标题三
  {
    text: '收藏',
    icon: 'start',
    link: '/favorite',
    children: ['favorite/essays/', '/favorite/links/', '/favorite/movies/', '/favorite/music/', '/favorite/photos/'],
  },
  //标题四
  '/about/',//关于本站

  //标题五：Yao测试Start
  {
    text: 'Yao测试一',//标题
    icon: 'start',//图标
    link: '/Yao', //w位置
    children: ['/Yao/favorite/music/'],
  },

]);
