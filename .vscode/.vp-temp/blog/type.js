export const typesMap = {"article":{"/en/":{"path":"/en/article/","indexes":[11,0,1,102,2,3,6,5,4,14,15,7,8,9,10,12,13]},"/":{"path":"/article/","indexes":[103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,16,30,38,39,41,40,47,48,49,50,42,43,44,45,46,17,18,19,20,21,22,23,24,25,26,27,28,29,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,124,125,126,127,128,129,130,131,132,31,32,33,34,35,36,37,51,52,53,54,55,56,57,58,59,60,61,62,63,64,90,91,92,93,94,95,96,97,98,99,100,101,85,86,87,88,89]}},"star":{"/en/":{"path":"/en/star/","indexes":[7,11,12,0]},"/":{"path":"/star/","indexes":[104,121,103,122,123]}},"timeline":{"/en/":{"path":"/en/timeline/","indexes":[1,102,2,3,11,6,5,4,14,15,7,8,9,10,12,13,0]},"/":{"path":"/timeline/","indexes":[103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

