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
        text: "一、茉莉园艺",icon: "pen-to-square",
        link: "https://www.yuque.com/yaox/mlyy?# 《005-茉莉园艺》", //语雀
      },
      {
        text: "二、森海鹿电子",icon: "pen-to-square",
        link: "https://www.yuque.com/yaox/shl?# 《003-森海鹿电子》", //语雀
      },
    ]
  },

      //标题
      {
        text: '分享',//标题
        icon: 'start',//图标
        link: '/Yao', //w位置
        children: [
          {
            text: "[01]电脑相关",icon: "pen-to-square",
            link: "https://www.yuque.com/yaox/sy8h4b?# 《006-电脑相关》", //语雀
          },
          {
            text: "[02]运维相关",icon: "pen-to-square",
            link: "https://www.yuque.com/yaox/ooq0w7?# 《007-运维相关》", //语雀
          },
          {
            text: "[03]设计相关",icon: "pen-to-square",
            link: "https://www.yuque.com/yaox/ic02fz?# 《008-设计相关》", //语雀
          },
        ]
      },

  //标题
  {
    text: '收藏',//标题
    icon: 'start',//图标
    link: '/Yao', //w位置
    children: ['/Yao/YaoA/music/','/Yao/YaoA/movies/','/Yao/YaoA/photos/','/Yao/YaoA/links/','/Yao/YaoA/word/'],
  },

  //标题
  {
    text: "网站",
    icon: "start",
    prefix: "/Yao",
    children: [
      {
        text: "基本网站",icon: "pen-to-square",//prefix: "apple/",
        children: [
          { text: "爱听音乐", icon: "jiansuo", link: "http://www.2t58.com/" },
          { text: "立创开源", icon: "jiansuo", link: "https://oshwhub.com/" },
          { text: "堆糖头像", icon: "jiansuo", link: "https://www.duitang.com/" },
          { text: "票房数据", icon: "jiansuo", link: "https://ys.endata.cn/DataMarket/Index" },
          { text: "TIOBE编程", icon: "jiansuo", link: "https://www.tiobe.com/tiobe-index/" },
        ],
      },
      {
        text: "在线工具",icon: "pen-to-square",//prefix: "apple/",
        children: [
          { text: "琴艺谱", icon: "jiansuo", link: "https://www.qinyipu.com/" },
          { text: "大白菜装机", icon: "jiansuo", link: "https://www.dabaicai.com/" },
          { text: "文件转换", icon: "jiansuo", link: "https://onlineconvertfree.com/zh/" },
          { text: "草料二维码", icon: "jiansuo", link: "https://cli.im/" },
          { text: "wallspic壁纸", icon: "jiansuo", link: "https://wallspic.com/cn" },
        ],
      },
      {
        text: "官方网站",icon: "pen-to-square",//prefix: "apple/",
        children: [
          { text: "Yandex", icon: "jiansuo", link: "https://yandex.com" },
          { text: "胡润百富", icon: "jiansuo", link: "https://hurun.net/" },
          { text: "中国招标", icon: "jiansuo", link: "http://cebpubservice.cn/" },
          { text: "中国统计局", icon: "jiansuo", link: "https://data.stats.gov.cn/" },
          { text: "领导留言板", icon: "jiansuo", link: "https://liuyan.people.com.cn/home/" },
        ],
      },
    ]
  },

  //标题
  {
    text: '关于',//标题
    icon: 'start',//图标
    link: '/Yao', //w位置
    children: ['/Yao/myblog/web.html','/Yao/myblog/me.html','/Yao/myblog/SHL.html'],
  },

]);
