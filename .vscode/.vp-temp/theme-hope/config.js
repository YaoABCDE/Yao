import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vue+repl@4.4.2_@vuepress+plugin-feed@2.0.0-rc.52_vuepress@2._zshgvbo5yeced42xr5yfv4g4nm/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17__rcez5fcwgjdizh2drj36evs6vm/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vue+repl@4.4.2_@vuepress+plugin-feed@2.0.0-rc.52_vuepress@2._zshgvbo5yeced42xr5yfv4g4nm/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vue+repl@4.4.2_@vuepress+plugin-feed@2.0.0-rc.52_vuepress@2._zshgvbo5yeced42xr5yfv4g4nm/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";

import "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_xmicn56nou7ufaib4kfwbivyba/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_xmicn56nou7ufaib4kfwbivyba/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vue+repl@4.4.2_@vuepress+plugin-feed@2.0.0-rc.52_vuepress@2._zshgvbo5yeced42xr5yfv4g4nm/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
