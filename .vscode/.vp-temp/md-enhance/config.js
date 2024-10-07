import CodeDemo from "D:/node/Yaoweb5/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_@vue+repl@4.4.2_markdown-it@14.1.0_sass-embedded@1.79._75bvm3rkpllpsgy6ptjlku2nna/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/node/Yaoweb5/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_@vue+repl@4.4.2_markdown-it@14.1.0_sass-embedded@1.79._75bvm3rkpllpsgy6ptjlku2nna/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/node/Yaoweb5/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_@vue+repl@4.4.2_markdown-it@14.1.0_sass-embedded@1.79._75bvm3rkpllpsgy6ptjlku2nna/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/node/Yaoweb5/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_@vue+repl@4.4.2_markdown-it@14.1.0_sass-embedded@1.79._75bvm3rkpllpsgy6ptjlku2nna/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
