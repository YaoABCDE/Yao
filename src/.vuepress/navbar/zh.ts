import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  // //标题一
  // {
  //   text: '总览',
  //   icon: 'sort',
  //   children: ['/posts/catalog.html', '/developer/', '/tutorial/', '/leetcode/', '/tips/', '/tools/'],
  // },
  // //标题二
  // {
  //   text: '分类',
  //   icon: 'jiansuo',
  //   children: [
  //     { text: '全部', icon: 'list', link: '/article/' },
  //     { text: '分类', icon: 'category', link: '/category/' },
  //     { text: '标签', icon: 'tag', link: '/tag/' },
  //     { text: '时间轴', icon: 'time', link: '/timeline/' },
  //   ],
  // },
  // //标题三
  // {
  //   text: '收藏',
  //   icon: 'start',
  //   link: '/favorite',
  //   children: ['favorite/essays/', '/favorite/links/', '/favorite/movies/', '/favorite/music/', '/favorite/photos/'],
  // },
  // //标题四
  // '/about/',//关于本站

  //标题五：Yao测试Start

  //标题
  {
    text: '博客',//标题
    icon: 'start',//图标
    link: "https://yaoabcde.github.io/Yao/", //w位置

  },

  //标题
  {
    text: '项目',//标题
    icon: 'start',//图标
    link: '/Yao', //w位置
    children: [
      {
        text: "[01]彩虹尺子",icon: "pen-to-square",
        link: "https://www.yuque.com/larryleung/qvs3g3?# 《森海鹿(Sovereign Hart)工作室》", //语雀
      },
      {
        text: "[02]五件套尺子",icon: "pen-to-square",
        link: "https://www.yuque.com/yaos/cyuah8/gbcsz0qlpbzl5kp3?singleDoc# 《网站基本》", //语雀
      },
    ]
  },

  //标题
  {
    text: '收藏',//标题
    icon: 'start',//图标
    link: '/Yao', //w位置
    children: ['/Yao/YaoA/music/','/Yao/YaoA/movies/','/Yao/YaoA/photos/','/Yao/YaoA/links/'],
  },

  //标题
  {
    text: "网站",
    icon: "pen-to-square",
    prefix: "/Yao",
    children: [
      {
        text: "官网",icon: "pen-to-square",//prefix: "apple/",
        children: [
          { text: "百度", icon: "pen-to-square", link: "https://baidu.com" },
          { text: "小米", icon: "pen-to-square", link: "https://mi.com" },
          { text: "百度", icon: "pen-to-square", link: "https://baidu.com" },
          { text: "小米", icon: "pen-to-square", link: "https://mi.com" },
          { text: "百度", icon: "pen-to-square", link: "https://baidu.com" },
        ],
      },
      {
        text: "网页",icon: "pen-to-square",//prefix: "apple/",
        children: [
          { text: "百度", icon: "pen-to-square", link: "https://baidu.com" },
          { text: "小米", icon: "pen-to-square", link: "https://mi.com" },
          { text: "百度", icon: "pen-to-square", link: "https://baidu.com" },
          { text: "小米", icon: "pen-to-square", link: "https://mi.com" },
          { text: "百度", icon: "pen-to-square", link: "https://baidu.com" },
        ],
      },
    ]
  },

  //标题
  {
    text: '关于',//标题
    icon: 'start',//图标
    link: '/Yao', //w位置
    children: ['/Yao/myblog/me.html','/Yao/myblog/me.html','/Yao/myblog/me.html'],
  },

]);
