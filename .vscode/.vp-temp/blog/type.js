export const typesMap = {"article":{"/en/":{"path":"/en/article/","indexes":[11,0,1,16,2,3,6,5,4,14,15,7,8,9,10,12,13]},"/":{"path":"/article/","indexes":[17,18,19,20,21,22,23,24,25,26,27]}},"star":{"/en/":{"path":"/en/star/","indexes":[7,11,12,0]},"/":{"path":"/star/","indexes":[18,17]}},"timeline":{"/en/":{"path":"/en/timeline/","indexes":[1,16,2,3,11,6,5,4,14,15,7,8,9,10,12,13,0]},"/":{"path":"/timeline/","indexes":[17,18,19,20,21,22,23,24,25,26,27]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

