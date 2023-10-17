"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},i="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=s(a),k=n,m=i["".concat(p,".").concat(k)]||i[k]||b[k]||r;return a?o.createElement(m,l(l({ref:t},u),{},{components:a})):o.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},35644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=a(87462),n=(a(67294),a(3905));const r={title:"Nacos 0.6\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301Dubbo\u751f\u6001\u5e76\u4e14\u652f\u6301Docker\u90e8\u7f72",keywords:["nacos0.6","dubbo","docker"],description:"Nacos 0.6\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301Dubbo\u751f\u6001\u5e76\u4e14\u652f\u6301Docker\u90e8\u7f72",date:new Date("2018-11-29T00:00:00.000Z")},l="Nacos 0.6\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301Dubbo\u751f\u6001\u5e76\u4e14\u652f\u6301Docker\u90e8\u7f72",c={permalink:"/zh-cn/blog/nacos0.6",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos0.6.md",title:"Nacos 0.6\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301Dubbo\u751f\u6001\u5e76\u4e14\u652f\u6301Docker\u90e8\u7f72",description:"Nacos 0.6\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301Dubbo\u751f\u6001\u5e76\u4e14\u652f\u6301Docker\u90e8\u7f72",date:"2018-11-29T00:00:00.000Z",formattedDate:"2018\u5e7411\u670829\u65e5",tags:[],readingTime:9.675,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 0.6\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301Dubbo\u751f\u6001\u5e76\u4e14\u652f\u6301Docker\u90e8\u7f72",keywords:["nacos0.6","dubbo","docker"],description:"Nacos 0.6\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301Dubbo\u751f\u6001\u5e76\u4e14\u652f\u6301Docker\u90e8\u7f72",date:"2018-11-29T00:00:00.000Z"},prevItem:{title:"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531",permalink:"/zh-cn/blog/dynamic-route-zuul-nacos"},nextItem:{title:"Nacos0.5\u53d1\u5e03\uff0c\u652f\u6301DNS-based Service Discovery\uff0cJAVA 11",permalink:"/zh-cn/blog/nacos0.5"}},p={authorsImageUrls:[]},s=[{value:"\u5343\u547c\u4e07\u5524\u59cb\u51fa\u6765\uff0cDubbo\u7684\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3",id:"\u5343\u547c\u4e07\u5524\u59cb\u51fa\u6765dubbo\u7684\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3",level:2},{value:"Dubbo\u670d\u52a1\u6846\u67b6",id:"dubbo\u670d\u52a1\u6846\u67b6",level:3},{value:"Nacos \u548c Dubbo \u4e00\u8109\u76f8\u627f\u7684\u57fa\u56e0",id:"nacos-\u548c-dubbo-\u4e00\u8109\u76f8\u627f\u7684\u57fa\u56e0",level:3},{value:"Dubbo\u878d\u5408Nacos",id:"dubbo\u878d\u5408nacos",level:3},{value:"\u5bb9\u5668\u5927\u884c\u5176\u9053\uff0cNacos \u652f\u6301 Docker \u5bb9\u5668\u5316",id:"\u5bb9\u5668\u5927\u884c\u5176\u9053nacos-\u652f\u6301-docker-\u5bb9\u5668\u5316",level:2},{value:"\u5982\u4f55\u901a\u8fc7Docker\u90e8\u7f72",id:"\u5982\u4f55\u901a\u8fc7docker\u90e8\u7f72",level:3},{value:"\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f53\u9a8c",id:"\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f53\u9a8c",level:4},{value:"\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u4f53\u9a8c",id:"\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u4f53\u9a8c",level:4},{value:"\u84ec\u52c3\u53d1\u5c55\u7684 Nacos \u793e\u533a",id:"\u84ec\u52c3\u53d1\u5c55\u7684-nacos-\u793e\u533a",level:2},{value:"\u65b0\u4eba\u65f6\u523b - &quot;\u4ec0\u4e48\u662fNacos\uff1f&quot;",id:"\u65b0\u4eba\u65f6\u523b---\u4ec0\u4e48\u662fnacos",level:2},{value:"\u66f4\u591a\u4e0e Nacos \u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f",id:"\u66f4\u591a\u4e0e-nacos-\u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f",level:2}],u={toc:s},i="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Authors: \u9a6c\u6615\u66e6\u3001\u5f20\u9f99\u3001\u90a2\u5b66\u8d85")),(0,n.kt)("p",null,"\u963f\u91cc\u5df4\u5df4\u5fae\u670d\u52a1\u5f00\u6e90\u9879\u76ee",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"Dubbo Nacos"),"\u4e8e\u672c\u5468\u53d1\u5e03\xa0",(0,n.kt)("strong",{parentName:"p"},"v0.6"),"\u7248\u672c\uff0c\u8be5\u7248\u672c\u4e3b\u8981\u5728\u652f\u6301\u4e86 Dubbo\u7684\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u3001\u652f\u6301docker \u90e8\u7f72\u63d0\u4f9b\u4e86\u5b98\u65b9\u7684docker\u955c\u50cf\u3001\u4f18\u5316Nacos \u63a7\u5236\u53f0\u7684\u56fd\u9645\u5316\u6846\u67b6\u5e76\u4e14Nacos\u7684\u96c6\u6210\u6d4b\u8bd5\u6548\u7387\u4e5f\u5927\u5927\u4f18\u5316\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1544689744102-fd00fec6-ca80-4c0c-9b0d-538f17279963.png",alt:"image.png | left | 747x290"})),(0,n.kt)("h2",{id:"\u5343\u547c\u4e07\u5524\u59cb\u51fa\u6765dubbo\u7684\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3"},"\u5343\u547c\u4e07\u5524\u59cb\u51fa\u6765\uff0cDubbo\u7684\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nacos")," \u4ece ",(0,n.kt)("strong",{parentName:"p"},"v0.6")," \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301 ",(0,n.kt)("strong",{parentName:"p"},"Dubbo")," \u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\uff0c\u540c\u6837\u4f5c\u4e3a\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u91cd\u91cf\u7ea7\u522b\u4ea7\u54c1\uff0c\u4e24\u4e2a\u4ea7\u54c1\u5728\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u7684\u5185\u90e8\u5185\u90e8\u5b9e\u73b0\u5c31\u6709\u5343\u4e1d\u4e07\u7f15\u7684\u8054\u7cfb\u3002"),(0,n.kt)("h3",{id:"dubbo\u670d\u52a1\u6846\u67b6"},"Dubbo\u670d\u52a1\u6846\u67b6"),(0,n.kt)("p",null,"\u4f5c\u4e3arpc\u670d\u52a1\u6846\u67b6\uff0c\u4e00\u65b9\u9762\u6ce8\u91cd\u7684\u662f\u6781\u5176\u77ed\u7684\u65f6\u5ef6rt\uff0c\u4fdd\u8bc1\u6574\u4f53\u7684\u8c03\u7528\u9ad8\u6548\uff0c\u5e76\u4e14\u53e6\u4e00\u65b9\u9762\u4fdd\u8bc1\u826f\u597d\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u4fdd\u8bc1\u7528\u6237\u4f7f\u7528\u8212\u9002\u5e76\u4e14\u6709\u826f\u597d\u7684\u6269\u5c55\u6027\u3002Dubbo\u5728\u8fd9\u4e24\u65b9\u9762\u505a\u7684\u90fd\u975e\u5e38\u7684\u4f18\u79c0\uff0c\u4e5f\u56e0\u4e3a\u826f\u597d\u7684\u62d3\u5c55\u6027\uff0c\u88ab\u4e1a\u5185\u5e7f\u6cdb\u4f7f\u7528\u3002Dubbo\u7684\u666e\u53ca\u5ea6\u4ee5\u53ca\u6b22\u8fce\u7a0b\u5ea6\u4e4b\u9ad8\uff0c\u901a\u8fc72w+\u7684github\u4ed3\u5e93star\u5173\u6ce8\u5ea6\u5c31\u53ef\u89c1\u4e00\u6591\u3002"),(0,n.kt)("h3",{id:"nacos-\u548c-dubbo-\u4e00\u8109\u76f8\u627f\u7684\u57fa\u56e0"},"Nacos \u548c Dubbo \u4e00\u8109\u76f8\u627f\u7684\u57fa\u56e0"),(0,n.kt)("p",null,"\u4f46\u963f\u91cc\u5df4\u5df4\u6280\u672f\u4f53\u7cfb\u4e0b\u6709\u5982\u6b64\u9ad8\u6548\u7684rpc\u670d\u52a1\u6846\u67b6\uff0c\u4f46\u5230\u5e95\u662f\u4ec0\u4e48\u652f\u6491\u4e86\u963f\u91cc\u5df4\u5df4\u5e9e\u5927\u7684\u670d\u52a1\u96c6\u7fa4\u5462\u3002\u4f17\u6240\u5468\u77e5\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u6709\u7740\u6050\u6016\u7684\u96c6\u7fa4\u89c4\u6a21\uff0c\u6bcf\u5e74\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u7684\u5929\u732b\u53cc11\u5168\u7403\u8d2d\u7269\u72c2\u6b22\u8282\u90fd\u4f1a\u6709\u4eba\u778e\u6389\u4e0b\u5df4\u7684\u4ea4\u6613\u89c4\u6a21\uff0c2018\u5e74\u7684\u53cc11\u5f53\u5929\u627f\u8f7d\u4e862135\u4ebf\u7684\u9500\u552e\u989d\u3002\u4f46\u4f5c\u4e3a\u6280\u672f\u4eba\u5458\uff0c\u6700\u5173\u5fc3\u7684\u662f\u5cf0\u503c\u3002\u5982\u679c\u7ec6\u5fc3\u7684\u4ece\u4e1a\u8005\u5e94\u8be5\u770b\u5230\u4e86\u4e00\u4e2a\u6307\u6807\uff0c2018\u5e74\u5929\u732b\u627f\u8f7d\u4e86\u4ea4\u6613\u521b\u5efa\u5cf0\u503c\u8fbe49.1\u4e07\u7b14/\u79d2\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5317\u4eac\u9e1f\u5de2\u4f53\u80b2\u9986\u6700\u5927\u627f\u8f7d\u7528\u6237\u91cf9\u4e071\u5343\u4eba\uff0c49.1w\u4ea4\u6613\u6bcf\u79d2\u4ea4\u6613\uff0c\u610f\u5473\u77405\u4e2a\u9e1f\u5de2\u4f53\u80b2\u9986\u7684\u6ee1\u5ea7\u7684\u89c2\u4f17\u63a8\u7740\u8d2d\u7269\u8f66\uff0c\u540c\u65f6\u5728\u4e00\u79d2\u51b2\u8fc7\u5929\u732b\u6dd8\u5b9d\u7684\u7ed3\u7b97\u53f0\uff0c\u8fd9\u79cd\u538b\u529b\u53ef\u60f3\u800c\u77e5\u3002\u4f46\u80cc\u540e\u7684\u627f\u8f7d\u8fd9\u4e48\u5927\u89c4\u6a21\u7684\u670d\u52a1\u96c6\u7fa4\u7684\uff0c\u548c\u963f\u91cc\u5df4\u5df4Dubbo\u7684\u5185\u90e8\u4f7f\u7528\u6846\u67b6HSF\uff0c\u5bf9\u5e94\u7684ConfigServer\uff0c\u800c\u8fd9\u6b63\u662fNacos\u7684\u524d\u8eab\u4e4b\u4e00\u3002Nacos \u53d1\u5e03\u76840.6\u7248\u672c\u6b63\u662f\u5ba3\u5e03\u548cDubbo\u5b8c\u7f8e\u96c6\u6210\uff0c\u4e5f\u5c31\u5ba3\u5e03\u963f\u91cc\u5df4\u5df4\u5728\u5927\u89c4\u6a21\u96c6\u7fa4\u7684\u7ecf\u9a8c\u5c06\u968f\u7740Nacos\u3001Dubbo\u3001Sentinel\u7b49\u5206\u4eab\u51fa\u6765\uff0c\u8d21\u732e\u7ed9\u5f00\u6e90\u793e\u533a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1544696219150-b786e8fe-af7d-4e29-9c32-03b051c6db3d.png",alt:"image.png | left | 747x413"})),(0,n.kt)("h3",{id:"dubbo\u878d\u5408nacos"},"Dubbo\u878d\u5408Nacos"),(0,n.kt)("p",null,"Nacos \u4f5c\u4e3a Dubbo \u751f\u6001\u7cfb\u7edf\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u57fa\u7840\u8bbe\u65bd\uff0c\u5176\u4e2d ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dubbo/dubbo-registry-nacos"},"dubbo-registry-nacos")," \u662f Dubbo \u878d\u5408 Nacos \u6ce8\u518c\u4e2d\u5fc3\u7684\u6865\u6881\uff0c\u5b83\u57fa\u4e8e Dubbo \u5f3a\u5927\u7684",(0,n.kt)("a",{parentName:"p",href:"http://dubbo.apache.org/zh-cn/docs/dev/impls/registry.html"},"\u6ce8\u518c\u4e2d\u5fc3 SPI ")," \u4ee5\u53ca Nacos Naming \u670d\u52a1\uff0c\u63d0\u4f9b\u5b9e\u65f6\u7684\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0\u3002\u76ee\u524d ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dubbo/dubbo-registry-nacos"},"dubbo-registry-nacos"),"  \u5904\u4e8e preview \u9636\u6bb5\uff0c\u6700\u65b0\u7684\u53d1\u5e03\u7248\u672c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0.2"),"\uff0c\u5df2\u6d4b\u8bd5\u6700\u65b0\u7684 Dubbo \u4ee5\u53ca Dubbo OPS\uff0c\u63a8\u8350\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u6700\u65b0\u7684 Dubbo ",(0,n.kt)("inlineCode",{parentName:"p"},"2.6.5")," \u4ee5\u53ca Nacos ",(0,n.kt)("inlineCode",{parentName:"p"},"0.6.1")," \uff0c\u786e\u4fdd\u4eab\u53d7\u6700\u4f73\u4f53\u9a8c\u3002\u5982\u679c\u60a8\u73b0\u5728\u6b63\u5728\u4f7f\u7528 Zookeeper \u6216\u8005 Redis \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u8bdd\uff0c\u8fc1\u79fb\u5230 Nacos \u7684\u90e8\u5206\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u4ee5 Zookeeper \u4e3a\u4f8b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u573a\u666f\u4e00\uff1a\u5916\u90e8\u5316\u914d\u7f6e")),(0,n.kt)("p",null,"\u8c03\u6574\u524d\u7684\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"## Zookeeper registry address\ndubbo.registry.address = zookeeper://127.0.0.1:2181\n")),(0,n.kt)("p",null,"\u8c03\u6574\u540e\u7684\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"## Nacos registry address\ndubbo.registry.address = nacos://127.0.0.1:8848\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u573a\u666f\u4e8c\uff1aXML \u914d\u7f6e\u9a71\u52a8")),(0,n.kt)("p",null,"\u8c03\u6574\u524d\u7684\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- \u4f7f\u7528 Zookeeper \u6ce8\u518c\u4e2d\u5fc3 --\x3e\n<dubbo:registry address="zookeeper://127.0.0.1:2181" />\n')),(0,n.kt)("p",null,"\u8c03\u6574\u540e\u7684\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- \u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3 --\x3e\n<dubbo:registry address="nacos://127.0.0.1:8848" />\n')),(0,n.kt)("p",null,"\u8c03\u6574\u5b8c\u6bd5\u540e\uff0c\u5148\u786e\u4fdd Nacos Server \u5df2\u542f\u52a8\uff0c\u518d\u91cd\u542f\u60a8\u7684 Dubbo \u5e94\u7528\uff0c\u968f\u540e\u60a8\u5728 Nacos \u63a7\u5236\u53f0 \u201c\u670d\u52a1\u5217\u8868\u201d \u4e2d\u5c31\u80fd\u770b\u5230\u6ce8\u518c\u4fe1\u606f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1544694815618-d316c463-701a-4095-a7d4-30bb0ec941b6.png",alt:"image-20181213174408269-4694248.png | left | 747x132"})),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5bf9 Dubbo \u4e0e Nacos \u6574\u5408\u6562\u5174\u8da3\uff0c\u4e0d\u59a8\u8bbf\u95ee\u9879\u76ee\u4e3b\u9875\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u5730\u5740\u4e3a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dubbo Nacos Registry\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dubbo/dubbo-registry-nacos"},"https://github.com/dubbo/dubbo-registry-nacos")),(0,n.kt)("li",{parentName:"ul"},"Apache Dubbo\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-dubbo"},"https://github.com/apache/incubator-dubbo"))),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4efb\u4f55\u95ee\u9898\u548c\u6709\u4efb\u4f55\u5efa\u8a00\uff0c\u8bf7\u5c06\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dubbo/dubbo-registry-nacos/issues"},"https://github.com/dubbo/dubbo-registry-nacos/issues")," \u4e2d\u8fdb\u884c\u8ba8\u8bba\u3002"),(0,n.kt)("h2",{id:"\u5bb9\u5668\u5927\u884c\u5176\u9053nacos-\u652f\u6301-docker-\u5bb9\u5668\u5316"},"\u5bb9\u5668\u5927\u884c\u5176\u9053\uff0cNacos \u652f\u6301 Docker \u5bb9\u5668\u5316"),(0,n.kt)("p",null,"\u5728\u5bb9\u5668\u5927\u884c\u5176\u9053\u7684\u4eca\u5929\uff0c\u652f\u6301\u5bb9\u5668\u5316\u5df2\u7ecf\u6210\u4e3a\u5fc5\u7136\uff0cDocker\u4f5c\u4e3a\u5bb9\u5668\u5316\u5927\u591a\u6570\u4eba\u7684\u9009\u62e9\uff0cNacos \u5728v0.6 \u7248\u672c\u5ba3\u5e03\n\u652f\u6301Docker\u5316\u90e8\u7f72\uff0c\u5e76\u4e14\u63d0\u4f9b\u51fa\u5b98\u65b9\u955c\u50cf\uff0c\u5e76\u4e14\u4f1a\u5728\u9884\u8ba1\u5728\u4e0b\u51e0\u4e2a\u7248\u672c\u4e2d\u652f\u6301k8s\u90e8\u7f72\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1544696801216-88a41d17-d101-4546-acfd-0aba38c6fa81.png",alt:"image.png | left | 747x285"})),(0,n.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7docker\u90e8\u7f72"},"\u5982\u4f55\u901a\u8fc7Docker\u90e8\u7f72"),(0,n.kt)("p",null,"\u672c\u5730\u9700\u8981\u786e\u5b9a\u5df2\u7ecf\u6309\u7167\u4e86Docker\uff0c\u5982\u679c\u6ca1\u6709\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"https://docs.docker.com/install/"),"\u3002\u5b89\u88c5\u4e4b\u540e\u8fd9\u65f6\u5c31\u53ef\u4ee5\u5feb\u901f\u7684\u4ece\u8fdc\u7a0b\u62c9\u53bb\u955c\u50cf\uff0c\u62fd\u8d77\u4e00\u4e2a\u5355\u673a\u7248\u672c\u7684Nacos\uff0c\u4f53\u9a8c\u4e00\u4e0b\u3002\n\u7b80\u5355\u7c97\u66b4\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"docker run --name nacos-standalone -e MODE=standalone -p 8848:8848 nacos/nacos-server:latest\n")),(0,n.kt)("p",null,"\u64cd\u4f5c\u8bd5\u4f8b\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/gif/11189/1544701054438-de9785c4-b9ab-46dc-a162-d22e1419a172.gif",alt:"Peek 2018-12-13 11-43.gif | left | 747x407"})),(0,n.kt)("p",null,"\u53e6\u4e00\u79cd\u5e94\u7528\u65b9\u5f0f\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose"),"\u7f16\u6392\u65b9\u5f0f\uff0c\u53ef\u4ee5\u53c2\u7167\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"git clone \u9879\u76ee \u5e76\u4e14\u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/nacos-group/nacos-docker.git\ncd nacos-docker\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5355\u673a\u542f\u52a8")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone.yaml up\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u542f\u52a8")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/cluster-hostname.yaml up \n")),(0,n.kt)("p",null,"\u8fd9\u65f6\u4f60\u7684Nacos\u5c31\u5df2\u7ecf\u542f\u52a8\u8d77\u6765\uff0c\u4f60\u5c31\u53ef\u4ee5\u8bbf\u95ee",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8848/nacos/index.html"},"http://localhost:8848/nacos/index.html"),"\u4f53\u9a8cNacos\u7684\u529f\u80fd\u4e86\u3002"),(0,n.kt)("h4",{id:"\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f53\u9a8c"},"\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f53\u9a8c"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/gif/11189/1544496461571-69f38431-6452-4ddd-8211-c2da28f2ebcf.gif",alt:"Peek 2018-12-11 10-11.gif | left | 747x351"})),(0,n.kt)("h4",{id:"\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u4f53\u9a8c"},"\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u4f53\u9a8c"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/gif/11189/1544521437636-674de542-1873-426b-a2dd-da8265bc267f.gif",alt:"Peek 2018-12-11 11-11.gif | left | 747x351"})),(0,n.kt)("h2",{id:"\u84ec\u52c3\u53d1\u5c55\u7684-nacos-\u793e\u533a"},"\u84ec\u52c3\u53d1\u5c55\u7684 Nacos \u793e\u533a"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"DISS is cheap, show me your hand\n\u6bd4\u5410\u69fd\u66f4\u91cd\u8981\u7684\u662f\u642d\u628a\u624b\uff0c\u53c2\u4e0e\u793e\u533a\u4e00\u8d77\u53d1\u5c55Nacos")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u7528\u6237\u5173\u6ce8\u548c\u52a0\u5165 Nacos \u793e\u533a")),(0,n.kt)("p",null,"Nacos \u793e\u533a\u6b63\u5728\u84ec\u52c3\u53d1\u5c55\uff0c\u622a\u6b62\u5230\u53d1\u6587\u4e3a\u6b62\uff0cNacos \u77ed\u77ed\u51e0\u4e2a\u6708\u5df2\u7ecf\u67095\u4e2a\u5fae\u4fe1\u7fa4\uff0c\u5176\u4e2d4\u4e2a\u5df2\u6ee1\u5458\uff0c1\u4e2aQQ\u7fa4\uff0c1\u4e2a\u9489\u9489\u7fa4\uff0c\u5173\u6ce8 Nacos \u7684\u793e\u533a\u4eba\u6570\u5df2\u7ecf\u8fd13000\u4eba\uff0c\u5728 Nacos \u7fa4\u91cc\u8ddf \u201c\u9053\uff08\u57fa\uff09\u53cb\u201d \u5207\u78cb\u6280\u672f\uff0c\u4ea4\u6d41\u7ecf\u9a8c\uff0c\u62db\u8058\u4ea4\u53cb\uff0c\u62a2\u62a2\u7ea2\u5305...\u4e0d\u4ea6\u4e50\u4e4e\u3002"),(0,n.kt)("p",null,"\u8981\u52a0\u5165 Nacos \u5fae\u4fe1\u793e\u533a\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u626b\u4e0b\u9762\u7684",(0,n.kt)("strong",{parentName:"p"},"\u201c\u8d85\u54e5\u201d"),"\u7684\u5fae\u4fe1\u4e8c\u7ef4\u7801\uff0c\u8ba9",(0,n.kt)("strong",{parentName:"p"},"\u201c\u8d85\u54e5\u201d")," \u5e2e\u4f60\u62c9\u5165 \u201cNacos\u793e\u533a\u5fae\u4fe1\u4ea4\u6d41\u7fa4\u201d"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077965587-8f4e3100-bdd4-469a-9ea0-7af7061bc9ef.png",alt:"Screen Shot 2018-06-27 at 13.39.09.png | left"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4ee3\u7801\u8d21\u732e\u8005\u52a0\u5165 Nacos \u793e\u533a")),(0,n.kt)("p",null,"\u4eceNacos\u7528\u6237\u53d1\u5c55\u800c\u6210\u8d21\u732e\u8005\u987a\u7406\u6210\u7ae0\uff0c\u800cNacos\u5f00\u53d1\u56e2\u961f\u4e5f\u786e\u5b9e\u5728\u65e5\u8d8b\u58ee\u5927\uff0c\u4ece\u5f00\u59cb\u7684\u53ea\u67094\u4e2a\u4ee3\u7801contributor\u53d1\u5c55\u5230\u76ee\u524d\u768424\u4e2a\uff0c\u968f\u7740",(0,n.kt)("strong",{parentName:"p"},"\u963f\u91cc\u5df4\u5df4"),"\u5176\u4ed6\u56e2\u961f\u6210\u5458\u5982 ",(0,n.kt)("strong",{parentName:"p"},"@\u5c0f\u9a6c\u54e5")," \u7b49\u4eba\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u864e\u7259\u76f4\u64ad"),"\u7684 ",(0,n.kt)("strong",{parentName:"p"},"@\u5f20\u6ce2")," ",(0,n.kt)("strong",{parentName:"p"},"@\u5468\u5065")," \u56e2\u961f\u7b49\u4eba\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-docker"},"nacos-docker-k8s")," \u8d21\u732e\u8005 ",(0,n.kt)("strong",{parentName:"p"},"@\u5f20\u9f99"),"\uff0c\u524d\u7aef\u7684\u4e3b\u8981\u8d21\u732e\u8005\u997f\u4e86\u4e48 ",(0,n.kt)("strong",{parentName:"p"},"@\u738b\u5f66\u6c11"),"\uff0cSpring Cloud\u4e2d\u6587\u793e\u533a\u521b\u7acb\u8005 ",(0,n.kt)("strong",{parentName:"p"},"@\u8bb8\u8fdb")," \u7b49\u7684\u9646\u7eed\u52a0\u5165\uff0c\u76f8\u4fe1\u672a\u6765Nacos\u793e\u533a\u7684\u529b\u91cf\u672a\u6765\u4f1a\u8d8a\u6765\u8d8a\u5f3a\u5927\u3002"),(0,n.kt)("p",null,"\u800c\u793e\u533a\u4e5f\u6b63\u5728\u8ba1\u5212\u5728\u5408\u9002\u7684\u65f6\u673a\u4e0a\uff0c\u5c06\u5728Nacos\u5b98\u7f51 ",(0,n.kt)("a",{parentName:"p",href:"http://nacos.io"},"nacos.io")," \u4e2d\u6dfb\u52a0\u56e2\u961f\u4ecb\u7ecd\u9875\uff0c\u5c06\u5927\u5bb6\u6b63\u5f0f\u516c\u5e03\u4e8e\u4f17\uff0c\u6b22\u8fce\u5927\u5bb6\u52a0\u5165Nacos\u793e\u533a\uff0c\u8d21\u732e\u793e\u533a\u3002\u7528Apache\u7684\u8bdd\u8bf4\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u201c\u793e\u533a\u9ad8\u4e8e\u4ee3\u7801\u201d!")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15914/1542704700864-a9d54856-9bf6-4176-b449-c13fa02c5800.png",alt:"\u5c4f\u5e55\u5feb\u7167 2018-11-20 17.04.45.png | left"})),(0,n.kt)("h2",{id:"\u65b0\u4eba\u65f6\u523b---\u4ec0\u4e48\u662fnacos"},'\u65b0\u4eba\u65f6\u523b - "\u4ec0\u4e48\u662fNacos\uff1f"'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd8\u4e0d\u77e5\u9053\u4ec0\u4e48\u662fNacos? \u6ca1\u5173\u7cfb\uff0c\u5728github\u4e0astar\u4e00\u4e0b\u8ddf\u7a0b\u5e8f\u733f\u5144\u5f1f\u6253\u4e2a\u62db\u547c\u5427!!")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"Nacos")," \u662f\u963f\u91cc\u5df4\u5df4\u4e8e7\u6708\u4efd\u65b0\u5f00\u6e90\u7684\u9879\u76ee\uff0cNacos\u7684\u4e3b\u8981\u613f\u666f\u662f\u671f\u671b\u901a\u8fc7\u63d0\u4f9b\u6613\u7528\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001\u670d\u52a1\u53d1\u73b0"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u914d\u7f6e\u7ba1\u7406"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406")," \u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15914/1532436633419-08a42307-7fb7-4d51-9062-fecc3868613b.png",alt:"Screen Shot 2018-07-24 at 19.27.28.png | left"})),(0,n.kt)("p",null,"github\u9879\u76ee\u5730\u5740\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"\u8fd9\u91cc")),(0,n.kt)("h2",{id:"\u66f4\u591a\u4e0e-nacos-\u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f"},"\u66f4\u591a\u4e0e Nacos \u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dubbo/dubbo-registry-nacos"},"Dubbo Registry Nacos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-coredns-plugin"},"Nacos DNS-F")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-docker"},"Nacos Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring Project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba"},"Spring Cloud Alibaba")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://dubbo.io"},"Dubbo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alibaba/Sentinel"},"Sentinel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://projects.spring.io/spring-cloud/"},"Spring Cloud")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nepxion/Discovery"},"Nepxion Discovery")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SpringCloud/spring-cloud-gateway-nacos"},"Spring Cloud Gateway Nacos"))))}b.isMDXComponent=!0}}]);