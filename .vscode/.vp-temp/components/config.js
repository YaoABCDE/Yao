import { hasGlobalComponent } from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_xmicn56nou7ufaib4kfwbivyba/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/@vueuse+core@11.1.0_vue@3.5.11/node_modules/@vueuse/core/index.mjs";
import FontIcon from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_xfwkruy4gvrab43tswiub6gpe4/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_xfwkruy4gvrab43tswiub6gpe4/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_xfwkruy4gvrab43tswiub6gpe4/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import BiliBili from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_xfwkruy4gvrab43tswiub6gpe4/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import PDF from "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_xfwkruy4gvrab43tswiub6gpe4/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";

import "C:/Users/Yao/Desktop/Yao/Yao/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_xfwkruy4gvrab43tswiub6gpe4/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_3855310_3p4qtirn5xz.css");
`);
  },
  rootComponents: [

  ],
};
