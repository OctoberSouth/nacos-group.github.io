"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1069],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>h});var n=e(67294);function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function r(t,a){if(null==t)return{};var e,n,o=function(t,a){if(null==t)return{};var e,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||(o[e]=t[e]);return o}(t,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=n.createContext({}),i=function(t){var a=n.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):c(c({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(l.Provider,{value:a},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,o=t.mdxType,s=t.originalType,l=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),u=i(e),N=o,h=u["".concat(l,".").concat(N)]||u[N]||m[N]||s;return e?n.createElement(h,c(c({ref:a},p),{},{components:e})):n.createElement(h,c({ref:a},p))}));function h(t,a){var e=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var s=e.length,c=new Array(s);c[0]=N;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=t,r[u]="string"==typeof t?t:o,c[1]=r;for(var i=2;i<s;i++)c[i]=e[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},18011:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var n=e(87462),o=(e(67294),e(3905));const s={title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",keywords:["nacos0.9\uff0cnacos0.9.0\uff0cnacos"],description:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",date:new Date("2019-03-07T00:00:00.000Z")},c="Nacos 0.9.0 \u53d1\u5e03\uff0c\u7a33\u5b9a\u7684\u5feb\u901f\u8fed\u4ee3",r={permalink:"/zh-cn/blog/nacos0.9.0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos0.9.0.md",title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",description:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",date:"2019-03-07T00:00:00.000Z",formattedDate:"2019\u5e743\u67087\u65e5",tags:[],readingTime:9.005,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",keywords:["nacos0.9\uff0cnacos0.9.0\uff0cnacos"],description:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",date:"2019-03-07T00:00:00.000Z"},prevItem:{title:"Nacos 1.0.0 \u53d1\u5e03\uff0c\u6b63\u5f0f\u5927\u89c4\u6a21\u751f\u4ea7\u53ef\u7528",permalink:"/zh-cn/blog/nacos1.0.0"},nextItem:{title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",permalink:"/zh-cn/blog/nacos0.9-intro"}},l={authorsImageUrls:[]},i=[{value:"Nacos-Sync\u7a33\u5b9a\u6027\u63d0\u5347",id:"nacos-sync\u7a33\u5b9a\u6027\u63d0\u5347",level:2},{value:"Nacos-Sync\u7b80\u4ecb",id:"nacos-sync\u7b80\u4ecb",level:3},{value:"0.9.0 \u589e\u5f3a\u7a33\u5b9a\u6027",id:"090-\u589e\u5f3a\u7a33\u5b9a\u6027",level:3},{value:"\u4f7f\u7528Prometheus\u91c7\u96c6Nacos-Sync metrics\u6570\u636e",id:"\u4f7f\u7528prometheus\u91c7\u96c6nacos-sync-metrics\u6570\u636e",level:3},{value:"grafana\u76d1\u63a7Nacos-Sync",id:"grafana\u76d1\u63a7nacos-sync",level:3},{value:"Nacos Server\u529f\u80fd\u62c6\u5206\u90e8\u7f72",id:"nacos-server\u529f\u80fd\u62c6\u5206\u90e8\u7f72",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u62c6\u5206\u90e8\u7f72",id:"\u4e3a\u4ec0\u4e48\u8981\u62c6\u5206\u90e8\u7f72",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u542f\u52a8\u547d\u4ee4",id:"\u542f\u52a8\u547d\u4ee4",level:4},{value:"Nacos python\u8bed\u8a00\u4f53\u7cfb\u7684\u652f\u6301",id:"nacos-python\u8bed\u8a00\u4f53\u7cfb\u7684\u652f\u6301",level:2},{value:"Nacos \u56e2\u961f\u9875\u6084\u6084\u4e0a\u7ebf",id:"nacos-\u56e2\u961f\u9875\u6084\u6084\u4e0a\u7ebf",level:2},{value:"\u5982\u4f55\u5171\u5efa",id:"\u5982\u4f55\u5171\u5efa",level:3},{value:"\u84ec\u52c3\u53d1\u5c55\u7684 Nacos \u793e\u533a",id:"\u84ec\u52c3\u53d1\u5c55\u7684-nacos-\u793e\u533a",level:2},{value:"\u65b0\u4eba\u65f6\u523b - &quot;\u4ec0\u4e48\u662fNacos\uff1f&quot;",id:"\u65b0\u4eba\u65f6\u523b---\u4ec0\u4e48\u662fnacos",level:2},{value:"\u66f4\u591a\u4e0e Nacos \u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f",id:"\u66f4\u591a\u4e0e-nacos-\u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f",level:2}],p={toc:i},u="wrapper";function m(t){let{components:a,...e}=t;return(0,o.kt)(u,(0,n.Z)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5929\u4e0b\u6b66\u529f\uff0c\u552f\u5feb\u4e0d\u7834\uff0cNacos\u4e00\u76f4\u79c9\u627f\u7740\u7a33\u5b9a\u6027\u548c\u5feb\u901f\u8fed\u4ee3\uff0cNacos 0.9.0\u7248\u672c\u4e8e\u4e0a\u5468\u6b63\u5f0f\u53d1\u5e03release\uff0c\u529f\u80fd\u56f4\u7ed5\u7740\uff0cNacos-Sync\u7684\u7a33\u5b9a\u6027\u3001Server\u529f\u80fd\u62c6\u5206\u90e8\u7f72\u3001Nacos python\u8bed\u8a00\u4f53\u7cfb\u7684\u652f\u6301\uff0c\u5e76\u4e14\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\uff0cNacos\u9996\u6b21\u53d1\u5e03\u6838\u5fc3\u56e2\u961f\u4eba\u5458\uff0c\u5e76\u5728\u6301\u7eed\u62db\u52df\u4e2d\u3002"),(0,o.kt)("h2",{id:"nacos-sync\u7a33\u5b9a\u6027\u63d0\u5347"},"Nacos-Sync\u7a33\u5b9a\u6027\u63d0\u5347"),(0,o.kt)("h3",{id:"nacos-sync\u7b80\u4ecb"},"Nacos-Sync\u7b80\u4ecb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sync"},"Nacos-Sync"),"\u662fNacos\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u4f5c\u7528\u662f\u591a\u6ce8\u518c\u4e2d\u5fc3\u6570\u636e\u540c\u6b65\u7684\u529f\u80fd\u5de5\u5177\uff0c\u76ee\u524d\u652f\u6301\u7684\u540c\u6b65\u6ce8\u518c\u4e2d\u5fc3\u5305\u62ec Nacos\u3001Zookeeper\u3001Eureka\u548cConsul\uff0c\u4e3b\u8981\u573a\u666f\uff0c\u5305\u62ec\u591a\u6ce8\u518c\u4e2d\u5fc3\u6570\u636e\u4e92\u76f8\u540c\u6b65\uff0c\u6ce8\u518c\u4e2d\u5fc3\u5347\u7ea7\u8fc7\u7a0b\u7684\u6570\u636e\u8fc1\u79fb\uff0c\u5b98\u7f51\u63d0\u4f9b",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/nacos-sync-use.html"},"\u8fc1\u79fb\u64cd\u4f5c\u624b\u518c"),"\u3002"),(0,o.kt)("h3",{id:"090-\u589e\u5f3a\u7a33\u5b9a\u6027"},"0.9.0 \u589e\u5f3a\u7a33\u5b9a\u6027"),(0,o.kt)("p",null,"Nacos 0.9\u7684\u4e3b\u7ebf\u529f\u80fd\u52a0\u5f3a",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/nacos-sync.html"},"Nacos-Sync"),"\u7684\u7a33\u5b9a\u6027\uff0c\u4e00\u65b9\u9762\u589e\u5f3aNacos-Sync\u7684\u57fa\u7840\u6d4b\u8bd5\u7528\u4f8b\u8986\u76d6\u9762\uff0c\u4fdd\u8bc1Nacos-Sync\u4ee5\u540e\u7684\u5feb\u901f\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\u4e3b\u7ebf\u529f\u80fd\u7a33\u5b9a\u6027\uff0c\u53e6\u4e00\u65b9\u9762\u901a\u8fc7\u76d1\u63a7\u4f53\u7cfb\u7684\u5b8c\u5584\uff0c\u5bf9\u63a5\u4e86Prometheus\u901a\u8fc7metrics\u66b4\u9732\u6570\u636e\uff0c\u5e76\u4e14\u5929\u7136\u96c6\u6210grafana\u76d1\u63a7\uff0c\u4fdd\u8bc1\u4e86Nacos-Sync\u751f\u4ea7\u7ea7\u522b\u7a33\u5b9a\u6027\u3002\n\u968f\u7740Nacos 0.9.0\u7248\u672c\u53d1\u5e03\uff0cNacos-Sync 0.3\u7248\u672c\u652f\u6301\u4e86metrics\u76d1\u63a7\uff0c\u80fd\u901a\u8fc7metrics\u6570\u636e\u89c2\u5bdfNacos-Sync\u670d\u52a1\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u63d0\u5347\u4e86Nacos-Sync\u7684\u5728\u751f\u4ea7\u73af\u5883\u7684\u76d1\u63a7\u80fd\u529b\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528prometheus\u91c7\u96c6nacos-sync-metrics\u6570\u636e"},"\u4f7f\u7528Prometheus\u91c7\u96c6Nacos-Sync metrics\u6570\u636e"),(0,o.kt)("p",null,"\u7ee7 Kubernetes \u4e4b\u540e\uff0cPrometheus\u6210\u4e3a\u7b2c\u4e8c\u4e2a\u6b63\u5f0f\u4ece CNCF \u6bd5\u4e1a\u7684\u5f00\u6e90\u9879\u76ee\u3002Nacos\u53caNacos-Sync\u652f\u6301Prometheus metrics\u4e5f\u662fNacos\u62e5\u62b1\u4e91\u539f\u751f\u7684\u7b2c\u4e00\u6b65\u3002Prometheus\u4f5c\u4e3a\u65b0\u4e00\u4ee3\u7684\u4e91\u539f\u751f\u76d1\u63a7\u7cfb\u7edf\uff0c\u9664\u4e86\u80fd\u5bf9Kubernetes\u5bb9\u5668\u96c6\u7fa4\u8fdb\u884c\u76d1\u63a7\u4e4b\u5916\uff0c\u4e5f\u80fd\u5bf9\u5bb9\u5668\u4e2d\u7684\u5e94\u7528\u8fdb\u884c\u76d1\u63a7\u3002\u4e0d\u8fc7Prometheus\u7684\u6570\u636e\u5c55\u793a\u80fd\u529b\u6bd4\u8f83\u5dee\uff0c\u4e00\u822c\u4f1a\u501f\u52a9\u7b2c\u4e09\u65b9\u6570\u636e\u76d1\u63a7\u5e73\u53f0\u3002"),(0,o.kt)("h3",{id:"grafana\u76d1\u63a7nacos-sync"},"grafana\u76d1\u63a7Nacos-Sync"),(0,o.kt)("p",null,"Grafana\u662f\u4e00\u6b3e\u5f3a\u5927\u7684\u6570\u636e\u53ef\u89c6\u5316\u5f00\u6e90\u8f6f\u4ef6\uff0c\u80fd\u901a\u8fc7\u975e\u5e38\u6f02\u4eae\u7684\u56fe\u8868\u548c\u66f2\u7ebf\u5c55\u793a\u76d1\u63a7\u6570\u636e\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ecPrometheus\u3002"),(0,o.kt)("p",null,"\u548cNacos\u76d1\u63a7\u4e00\u6837\uff0c\u5b98\u7f51\u7ed9Nacos-Sync\u4e5f\u63d0\u4f9b\u4e86\u76d1\u63a7\u6a21\u7248\uff0c\u7b80\u5355\u7684\u51e0\u6b65\u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5728Grafana\u4e0a\u76d1\u63a7Nacos-Sync"),(0,o.kt)("p",null,"Nacos-Sync\u76d1\u63a7\u540c\u6837\u4e5f\u5206\u4e3a\u4e09\u4e2a\u6a21\u5757:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nacos-sync monitor\u5c55\u793a\u6838\u5fc3\u76d1\u63a7\u9879\n",(0,o.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1GeNWKmzqK1RjSZFHXXb3CpXa-2834-1588.png",alt:"monitor"})),(0,o.kt)("li",{parentName:"ul"},"nacos-sync detail\u548calert\u4e24\u4e2a\u6a21\u5757\u7684\u5c55\u793a\u76d1\u63a7\u66f2\u7ebf\u548c\u544a\u8b66\n",(0,o.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1kP8UKbvpK1RjSZPiXXbmwXXa-2834-1570.png",alt:"detail"}))),(0,o.kt)("h2",{id:"nacos-server\u529f\u80fd\u62c6\u5206\u90e8\u7f72"},"Nacos Server\u529f\u80fd\u62c6\u5206\u90e8\u7f72"),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u62c6\u5206\u90e8\u7f72"},"\u4e3a\u4ec0\u4e48\u8981\u62c6\u5206\u90e8\u7f72"),(0,o.kt)("p",null,"\u4e00\u822c\u516c\u53f8\u968f\u7740\u4e1a\u52a1\u89c4\u6a21\u7684\u4e0d\u65ad\u81a8\u80c0\uff0c\u6211\u4eec\u5efa\u8bae\u4e1a\u52a1\u5bf9\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u8fdb\u884c\u62c6\u5206\u90e8\u7f72\uff0c\u5728Nacos 0.9.0\u7248\u672c\u4ee5\u540e\uff0c\u652f\u6301\u6ce8\u518c\u4e2d\u5fc3\u6a21\u5757\u548c\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5757\u7684\u62c6\u5206\u90e8\u7f72\uff0c\u5728\u542f\u52a8\u547d\u4ee4\u8fdb\u884c\u52a0\u5165\u53c2\u6570\uff0c\u6765\u6307\u5b9a\u542f\u52a8\u6307\u5b9aNacos \u529f\u80fd\u6a21\u5757\uff0c\u9ed8\u8ba4\u5168\u90e8\u529f\u80fd\u542f\u7528\uff0c\u76ee\u524d\u652f\u6301\u6307\u5b9a\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5757\u548c\u6ce8\u518c\u4e2d\u5fc3\u6a21\u5757\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"\u542f\u52a8Nacos server\u65f6\u5019\uff0c\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"-f"),"\u53c2\u6570\uff0c\u610f\u601d\u662ffunction mode\uff0c\u548c\u5bf9\u5e94\u6a21\u5757\u6807\u793a\u6765\u8fdb\u884c\u542f\u52a8\uff0c\u5982\u679c\u4e0d\u4f20\uff0c\u6216\u8005\u4f20\u5165\u6709\u8bef\uff0c\u90fd\u5c06\u542f\u52a8\u5168\u90e8\u529f\u80fd\u3002\n\u914d\u7f6e\u4e2d\u5fc3\u53c2\u6570\u5bf9\u5e94",(0,o.kt)("inlineCode",{parentName:"p"},"config"),"\uff0c\u6ce8\u518c\u4e2d\u5fc3\u53c2\u6570\u5bf9\u5e94",(0,o.kt)("inlineCode",{parentName:"p"},"naming"),"\u3002"),(0,o.kt)("h4",{id:"\u542f\u52a8\u547d\u4ee4"},"\u542f\u52a8\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh startup.sh -m standalone -f naming\n")),(0,o.kt)("p",null,"\u542f\u52a8\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u542f\u52a8\u65e5\u5fd7\u5934\u770b\u5230\u662f\u5426\u6b63\u786e\u542f\u52a8\u4e86\u529f\u80fd\u6a21\u5757\uff0c\u5e76\u4e14Nacos console\u5c06\u53ea\u5c55\u73b0\u542f\u52a8\u7684\u5bf9\u5e94\u6a21\u5757\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nacos\u542f\u52a8\u65e5\u5fd7\u5934\u4fe1\u606f\n",(0,o.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1ADCrKAvoK1RjSZFDXXXY3pXa-1552-522.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},"\u5355\u72ec\u542f\u52a8\u914d\u7f6e\u4e2d\u5fc3\u7684\u63a7\u5236\u53f0\u793a\u4f8b\n",(0,o.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1sXyoKpzqK1RjSZFCXXbbxVXa-2674-940.png",alt:null})),(0,o.kt)("li",{parentName:"ul"},"\u5355\u72ec\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3\u7684\u63a7\u5236\u53f0\u793a\u4f8b\n",(0,o.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1yKyiKCzqK1RjSZFLXXcn2XXa-2680-738.png",alt:null}))),(0,o.kt)("h2",{id:"nacos-python\u8bed\u8a00\u4f53\u7cfb\u7684\u652f\u6301"},"Nacos python\u8bed\u8a00\u4f53\u7cfb\u7684\u652f\u6301"),(0,o.kt)("p",null,"Nacos\u5f00\u59cb\u652f\u6301python\u8bed\u8a00\u4f53\u7cfb\uff0c\u517c\u5bb9Nacos0.8.0\u7248\u672c\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-python"},"Nacos-sdk\u2014Python"),"\u5728github\u4e0a\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group"},"Nacos-Group"),"\u4e2d,\u652f\u6301\u7684Python\u7248\u672c\u5305\u62ec 2.7\u30013.6\u548c3.7\uff0c\u64cd\u4f5c\u7b80\u5355\uff0c\u4e00\u884c\u547d\u4ee4\u5b89\u88c5\uff0c\u53ef\u4ee5\u5728\u4ed3\u5e93\u4e2d\u770b\u5230\u8be6\u7ec6\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-python/blob/master/README.md"},"\u4f7f\u7528\u8bf4\u660e"),"\uff0c\u611f\u8c22\u5468\u6587\u540c\u5b66\u7684\u8d21\u732e\u3002"),(0,o.kt)("h2",{id:"nacos-\u56e2\u961f\u9875\u6084\u6084\u4e0a\u7ebf"},"Nacos \u56e2\u961f\u9875\u6084\u6084\u4e0a\u7ebf"),(0,o.kt)("p",null,"\u5728Nacos 0.9.0\u7684\u7248\u672c\u4e2d\uff0cNacos\u5b98\u7f51 ",(0,o.kt)("a",{parentName:"p",href:"http://nacos.io/"},"nacos.io"),"\u4e0a\u7ebf\u4e86Nacos\u793e\u533a\u7684\u6838\u5fc3Committer\u56e2\u961f\u9996\u6b21\u548c\u5927\u5bb6\u89c1\u9762\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/nacos-dev.html"},"Nacos \u6838\u5fc3\u56e2\u961f\u9875"),"\uff0c\u5e76\u4e14\u793e\u533a\u56e2\u961f\u5728\u6301\u7eed\u6269\u5927\u4e2d\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/contributing-dev.html"},"Nacos\u7684\u793e\u533a\u6709\u7740\u81ea\u5df1\u7684\u793e\u533a\u5171\u5efa\u89c4\u8303"),"\uff0c\u5e76\u4e14\u5728\u5438\u6536\u65b0\u4eba\u4e0a\uff0c\u4e0d\u4ec5\u4ec5\u662f\u9700\u8981\u5f00\u53d1\u8005\uff0c\u8fd8\u9700\u8981\u6d4b\u8bd5\u5927\u725b\u3001\u6587\u6863\u8d21\u732e\u8005\u548c\u793e\u533a\u7ba1\u7406\u8005\u3002\u6211\u4eec\u9f13\u52b1\u5927\u5bb6\u79ef\u6781\u53c2\u4e0eNacos\u793e\u533a\uff0c\u793e\u533a\u6709\u4e00\u5957\u673a\u5236\u53ef\u4ee5\u4f7f\u60a8\uff0c\u4ece\u7528\u6237\u89d2\u8272\u5230\u63d0\u4ea4\u8005\u89d2\u8272\uff0c\u751a\u81f3\u662fPMC\u89d2\u8272\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u5171\u5efa"},"\u5982\u4f55\u5171\u5efa"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u4f60\u9700\u8981\u79ef\u6781\u53c2\u4e0eNacos\u793e\u533a\u3002\u5982\u679c\u60a8\u5728\u6587\u6863\u4e2d\u53d1\u73b0\u62fc\u5199\u9519\u8bef\uff0c\u5728\u4ee3\u7801\u4e2d\u53d1\u73b0\u9519\u8bef\uff0c\u6216\u60f3\u8981\u65b0\u529f\u80fd\u6216\u60f3\u8981\u63d0\u4f9b\u5efa\u8bae\uff0c\u60a8\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/Nacos/issues/new"},"\u5728GitHub\u4e0a\u521b\u5efa\u4e00\u4e2aissues"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5f00\u59cb\u7740\u624b\uff0c\u53ef\u4ee5\u9009\u62e9github\u4ed3\u5e93\u4e2d\u6709\u4ee5\u4e0b\u6807\u7b7e\u7684issues\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/good%20first%20issue"},"good first issue"),"\uff1a\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u662f\u975e\u5e38\u597d\u7684\u5165\u95e8issues\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/contribution%20%E6%AC%A2%E8%BF%8E"},"contribution welcome"),"\uff1a\u975e\u5e38\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u548c\u975e\u5e38\u91cd\u8981\u7684\u6a21\u5757\uff0c\u4f46\u76ee\u524d\u7f3a\u5c11\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u8d21\u732e\u8005\u6765\u8d21\u732e\u3002")),(0,o.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u7684\u901a\u7528\u6807\u7b7e\uff0c\u8fd8\u53ef\u4ee5\u5173\u6ce8Nacos\u76ee\u524d\u91cd\u70b9\u5173\u6ce8\u7684\u591a\u8bed\u8a00\u5171\u5efa\u62db\u52df\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+recruit+client"},"C++\u3001PHP\u7684\u591a\u8bed\u8a00\u6838\u5fc3\u8d21\u732e\u8005\u62db\u52df"),"\uff0c\u548c\u5e76\u4e14\u8fd8\u6709",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/787"},"\u793e\u533a\u7fa4\u7ec4\u8d1f\u8d23\u4eba\u62db\u52df"),"\uff0c\u6b22\u8fce\u5927\u5bb6\u52a0\u5165Nacos\u793e\u533a\uff0c\u8d21\u732e\u793e\u533a\u3002\u7528Apache\u7684\u8bdd\u8bf4\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u201c\u793e\u533a\u9ad8\u4e8e\u4ee3\u7801\u201d!"),"\u3002"),(0,o.kt)("h2",{id:"\u84ec\u52c3\u53d1\u5c55\u7684-nacos-\u793e\u533a"},"\u84ec\u52c3\u53d1\u5c55\u7684 Nacos \u793e\u533a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DISS is cheap, show me your hand\n\u6bd4\u5410\u69fd\u66f4\u91cd\u8981\u7684\u662f\u642d\u628a\u624b\uff0c\u53c2\u4e0e\u793e\u533a\u4e00\u8d77\u53d1\u5c55Nacos")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u7528\u6237\u5173\u6ce8\u548c\u52a0\u5165 Nacos \u793e\u533a")),(0,o.kt)("p",null,"Nacos \u793e\u533a\u6b63\u5728\u84ec\u52c3\u53d1\u5c55\uff0c\u622a\u6b62\u5230\u53d1\u6587\u4e3a\u6b62\uff0cNacos \u77ed\u77ed\u51e0\u4e2a\u6708\u5df2\u7ecf\u6709 9 \u4e2a\u5fae\u4fe1\u7fa4\uff0c\u5176\u4e2d 7 \u4e2a\u5df2\u6ee1\u5458\uff0c1\u4e2aQQ\u7fa4\uff0c1\u4e2a\u9489\u9489\u7fa4\uff0c\u5173\u6ce8 Nacos \u7684\u793e\u533a\u4eba\u6570\u5df2\u7ecf\u8fd15000\u4eba\uff0c\u5728 Nacos \u7fa4\u91cc\u8ddf \u201c\u9053\uff08\u57fa\uff09\u53cb\u201d \u5207\u78cb\u6280\u672f\uff0c\u4ea4\u6d41\u7ecf\u9a8c\uff0c\u62db\u8058\u4ea4\u53cb\uff0c\u62a2\u62a2\u7ea2\u5305...\u4e0d\u4ea6\u4e50\u4e4e\u3002"),(0,o.kt)("p",null,"\u8981\u52a0\u5165 Nacos \u5fae\u4fe1\u793e\u533a\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u626b\u4e0b\u9762\u7684",(0,o.kt)("strong",{parentName:"p"},"\u201c\u8d85\u54e5\u201d"),"\u201c\u8d85\u54e5\u201d** \u5e2e\u4f60\u62c9\u5165 \u201cNacos\u793e\u533a\u5fae\u4fe1\u4ea4\u6d41\u7fa4\u201d"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1q6SBKq6qK1RjSZFmXXX0PFXa-1984-1124.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4ee3\u7801\u8d21\u732e\u8005\u52a0\u5165 Nacos \u793e\u533a")),(0,o.kt)("p",null,"\u4eceNacos\u7528\u6237\u53d1\u5c55\u800c\u6210\u8d21\u732e\u8005\u987a\u7406\u6210\u7ae0\uff0c\u800cNacos\u5f00\u53d1\u56e2\u961f\u4e5f\u786e\u5b9e\u5728\u65e5\u8d8b\u58ee\u5927\uff0c\u4ece\u5f00\u59cb\u7684\u53ea\u67094\u4e2a\u4ee3\u7801contributor\u53d1\u5c55\u5230\u76ee\u524d\u768439\u4e2a\uff0c\u57280.9.0 \u7248\u672c\u7684\u5f00\u53d1\u4e2d\uff0c\u793e\u533a\u540c\u5b66\u8d21\u732e\u4e86\u5f88\u5927\u7684\u529b\u91cf\uff0c\u5728\u6b64\u7279\u522b\u611f\u8c22\uff0c\u4ed6\u4eec\u7684githubId\u662f\uff08\u6ce8\uff1a\u4e0d\u5206\u5148\u540e\uff09 paderlol\u3001jifengnan\u3001loadchange\u3001nkorange\u3001hxy1991\u3001huangyunbin\u3001darkness463\u3001luoxn28\u3001TsingLiang\u3001xuechaos\u3001nanamikon\u3001systp\u3001jameslcj\u3001pader.zhang\uff0c\u76f8\u4fe1\u540e\u7eed\u6709\u8ddf\u591a\u540c\u5b66\u53c2\u4e0e\u5230Nacos\u793e\u533a\u7684\u5171\u5efa\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15914/1542704700864-a9d54856-9bf6-4176-b449-c13fa02c5800.png#align=left&display=inline&height=387&linkTarget=_blank&originHeight=888&originWidth=1716&width=748",alt:null})),(0,o.kt)("h2",{id:"\u65b0\u4eba\u65f6\u523b---\u4ec0\u4e48\u662fnacos"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/alibaba/nacos"}),'\u65b0\u4eba\u65f6\u523b - "\u4ec0\u4e48\u662fNacos\uff1f"'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd8\u4e0d\u77e5\u9053\u4ec0\u4e48\u662fNacos? \u6ca1\u5173\u7cfb\uff0c\u5728github\u4e0astar\u4e00\u4e0b\u8ddf\u7a0b\u5e8f\u733f\u5144\u5f1f\u6253\u4e2a\u62db\u547c\u5427!!")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"Nacos")," \u662f\u963f\u91cc\u5df4\u5df4\u4e8e7\u6708\u4efd\u65b0\u5f00\u6e90\u7684\u9879\u76ee\uff0cNacos\u7684\u4e3b\u8981\u613f\u666f\u662f\u671f\u671b\u901a\u8fc7\u63d0\u4f9b\u6613\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001\u670d\u52a1\u53d1\u73b0"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u914d\u7f6e\u7ba1\u7406"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406")," \u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1pCyAKpzqK1RjSZSgXXcpAVXa-1910-894.png",alt:null})),(0,o.kt)("p",null,"github\u9879\u76ee\u5730\u5740\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"\u8fd9\u91cc")),(0,o.kt)("h2",{id:"\u66f4\u591a\u4e0e-nacos-\u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f"},(0,o.kt)("a",{parentName:"h2",href:"https://yuque.alibaba-inc.com/nacos/opensource/dawygn#kn9iog"}),"\u66f4\u591a\u4e0e Nacos \u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dubbo/dubbo-registry-nacos"},"Dubbo Registry Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-coredns-plugin"},"Nacos DNS-F")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-docker"},"Nacos Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring Project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba"},"Spring Cloud Alibaba")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://dubbo.io/"},"Dubbo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/Sentinel"},"Sentinel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://projects.spring.io/spring-cloud/"},"Spring Cloud")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Nepxion/Discovery"},"Nepxion Discovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SpringCloud/spring-cloud-gateway-nacos"},"Spring Cloud Gateway Nacos"))))}m.isMDXComponent=!0}}]);