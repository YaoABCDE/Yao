import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';
import { getDirname, path } from 'vuepress/utils';
//import { BlogPassword } from '../../__private/password.js';
const __dirname = getDirname(import.meta.url);

//页脚设置
const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  滇ICP备20200520号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>
`;

export default hopeTheme({
  hostname: 'https://yaoabcde.github.io/Yao',
  author: {
    name: 'Yao',
    url: 'https://baidu.com',
    email: '1964877312@qq.com',
  },
  darkmode: 'toggle',
  editLink: false,
  fullscreen: true,
  navbarAutoHide: 'always',
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  iconAssets: '//at.alicdn.com/t/c/font_3855310_3p4qtirn5xz.css',
  logo: '/YaoPhoto/png/logo3.png',//左上角图标
  docsDir: 'src',
  blog: {
    name: 'Mr.Yao',
    //avatar: '//file.mo7.cc/static/lxh_gif/lxh_71.gif',
    avatar:'/YaoPhoto/png/logo3.png',//右边博客logo
    description: '改变世界从小事做起。',
    intro: 'www.bing.com',
    medias: {
      //WechatPay: '/YaoPhoto/QRCode/微信支付.png',
      //QQ: 'https://file.mo7.cc/static/img/myqq.jpeg',
      Email: 'mailto:1964877312@QQ.com',
      GitHub: 'https://github.com/YaoABCDE',
      // Discord: 'https://discord.gg/8yXKxbSDDg',
      // Lark: 'https://www.larksuite.com/invitation/page/add_contact/?token=c8co337a-9dd7-4976-998f-5d2898o763r5&amp;unique_id=cgjGUk53Y2dh_FCZPuqY_A==',
      // Wechat: 'https://file.mo7.cc/static/img/mywchart.jpeg',
      // Zhihu: 'https://www.zhihu.com/people/meichangliang',
      // BiliBili: 'https://space.bilibili.com/24452567',
      // Rss: 'https://blog.mo7.cc/atom.xml',
    },
  },

//博客展示中英文
  footer: footerICP_HTML,
  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: 'Yao',//博客名称
        description: '称霸世界', //博客介绍
        intro: '/Yao/blogme/me.html',//点击主页跳到自我介绍
        //intro: '/about/me.html',//点击主页跳到自我介绍
        timeline: '颠倒黑白，明辨是非。',
      },
    },

    '/en/': {
      navbar: enNavbar,
      sidebar: enSidebar,
      blog: {
        name: 'Yao',
        description: 'Simple and happy, as it should be.',
        intro: '/en/intro.html',
        timeline: 'Something wonderful is about to  happen.',
      },
    },
  },

  //项目密钥
  // encrypt: {
  //   config: {
  //     '/en/demo/encrypt.html': [BlogPassword],
  //   },
  // },


  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: true,
    photoSwipe: false, // 这个插件难用的 一 B

    //留言板
    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },

    components: {
      components: ['Badge', 'VPCard', 'BiliBili', 'PDF'],
    },

    copyright: false,

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/YaoPhoto/png/logo2.png',
      icon: '/YaoPhoto/png/logo3.png',
    },

    //博客个人页-2分类-3标签
    searchPro: {
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter(page: any) {
            return page.frontmatter.category;
          },
          formatter: {
            '/': '分类：$content',
            '/en/': 'Category: $content',
          },
        },
        {
          getter(page: any) {
            return page.frontmatter.tag;
          },
          formatter: {
            '/': '标签：$content',
            '/en/': 'Tag: $content',
          },
        },
      ],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: {
        resolvePath: (file) => {
          if (file.startsWith('@src')) {
            return file.replace('@src', path.resolve(__dirname, '..'));
          }
          return file;
        },
      },
      mark: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
      breaks: true,
      linkify: true,
      footnote: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: '/YaoPhoto/ico/64.ico',//网页头logo
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: '/YaoPhoto/logopng/144.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/YaoPhoto/logopng/144.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/YaoPhoto/logopng/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/YaoPhoto/logopng/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/YaoPhoto/logopng/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/YaoPhoto/logopng/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'YAO',
            short_name: 'Yao',
            url: '/',
            icons: [
              {
                src: '/YaoPhoto/logopng/192.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
});
