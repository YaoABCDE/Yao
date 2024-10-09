import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const PrintVersion = defineAsyncComponent(() => import('./components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./components/CommentHideBtn.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const PreviewImage = defineAsyncComponent(() => import('./components/PreviewImage.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyIcon', MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    //TopNavBeautify,//顶部导航栏相关的美化,包括透明导航栏
    //HeroBG,//博客首页的背景美化
    //HeroHitokoto,//博客首页一言的美化
    NavMusic,//导航栏最右侧的音乐按钮
    PrintVersion,//
    //CommentHideBtn,//评论区的显示和隐藏按钮
    //BlogBeautify,//文章分割线小汽车等
    BlogBg,//背景美化，让整个博客可以添加自定义的背景
    PreviewImage,//
    // ...
  ],
});
