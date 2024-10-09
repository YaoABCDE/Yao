export const categoriesMap = {"category":{"/en/":{"path":"/en/category/","map":{"Guide":{"path":"/en/category/guide/","indexes":[0,1,2,3]},"Cherry":{"path":"/en/category/cherry/","indexes":[4]},"Dragon Fruit":{"path":"/en/category/dragon-fruit/","indexes":[5]},"Fruit":{"path":"/en/category/fruit/","indexes":[6,5,7,8,9,10]},"Strawberry":{"path":"/en/category/strawberry/","indexes":[6]},"Vegetable":{"path":"/en/category/vegetable/","indexes":[11]},"Apple":{"path":"/en/category/apple/","indexes":[9,10,12,13]},"Banana":{"path":"/en/category/banana/","indexes":[14,15,7,8]}}},"/":{"path":"/category/","map":{}}},"tag":{"/en/":{"path":"/en/tag/","map":{"disable":{"path":"/en/tag/disable/","indexes":[2]},"encryption":{"path":"/en/tag/encryption/","indexes":[3]},"Page config":{"path":"/en/tag/page-config/","indexes":[0]},"Guide":{"path":"/en/tag/guide/","indexes":[0]},"red":{"path":"/en/tag/red/","indexes":[11,6,5,4,9,10,12,13]},"small":{"path":"/en/tag/small/","indexes":[6,4]},"round":{"path":"/en/tag/round/","indexes":[11,4,9,10,12,13]},"big":{"path":"/en/tag/big/","indexes":[5,9,10,12,13]},"yellow":{"path":"/en/tag/yellow/","indexes":[14,15,7,8]},"curly":{"path":"/en/tag/curly/","indexes":[14,15,7,8]},"long":{"path":"/en/tag/long/","indexes":[14,15,7,8]}}},"/":{"path":"/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

