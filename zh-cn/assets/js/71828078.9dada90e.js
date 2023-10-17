"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),k=n,g=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},97710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4ea7\u54c1ConfigServer 10\u5e74\u6280\u672f\u53d1\u5c55\u56de\u987e",keywords:["nacos","configserver","alibaba"],description:"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4ea7\u54c1ConfigServer 10\u5e74\u6280\u672f\u53d1\u5c55\u56de\u987e",date:new Date("2018-05-20T00:00:00.000Z")},i="\u300a\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4ea7\u54c1ConfigServer 10\u5e74\u6280\u672f\u53d1\u5c55\u56de\u987e\u300b",o={permalink:"/zh-cn/blog/alibaba-configserver",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/alibaba-configserver.md",title:"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4ea7\u54c1ConfigServer 10\u5e74\u6280\u672f\u53d1\u5c55\u56de\u987e",description:"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4ea7\u54c1ConfigServer 10\u5e74\u6280\u672f\u53d1\u5c55\u56de\u987e",date:"2018-05-20T00:00:00.000Z",formattedDate:"2018\u5e745\u670820\u65e5",tags:[],readingTime:21.905,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4ea7\u54c1ConfigServer 10\u5e74\u6280\u672f\u53d1\u5c55\u56de\u987e",keywords:["nacos","configserver","alibaba"],description:"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4ea7\u54c1ConfigServer 10\u5e74\u6280\u672f\u53d1\u5c55\u56de\u987e",date:"2018-05-20T00:00:00.000Z"},prevItem:{title:"\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos",permalink:"/zh-cn/blog/nacos-is-coming"}},s={authorsImageUrls:[]},u=[{value:"2008\u5e74\uff0c\u65e0ConfigServer\u7684\u65f6\u4ee3",id:"2008\u5e74\u65e0configserver\u7684\u65f6\u4ee3",level:2},{value:"2008\u5e74\uff0cConfigServer\u5355\u673a\u7248V1.0",id:"2008\u5e74configserver\u5355\u673a\u7248v10",level:2},{value:"2009\u5e74\u521d\uff0cConfigServer\u5355\u673a\u7248V1.5",id:"2009\u5e74\u521dconfigserver\u5355\u673a\u7248v15",level:2},{value:"2009\u5e747\u6708\uff0cConfigServer\u96c6\u7fa4\u7248\u672cV2.0",id:"2009\u5e747\u6708configserver\u96c6\u7fa4\u7248\u672cv20",level:2},{value:"2010\u5e74\u5e95\uff0cConfigServer\u96c6\u7fa4\u7248V2.5",id:"2010\u5e74\u5e95configserver\u96c6\u7fa4\u7248v25",level:2},{value:"2012\u5e74\u5e95\uff0cConfigServer\u96c6\u7fa4\u7248V3.0",id:"2012\u5e74\u5e95configserver\u96c6\u7fa4\u7248v30",level:2},{value:"2014\u5e74\uff0cConfigServer\u96c6\u7fa4\u7248V3.5",id:"2014\u5e74configserver\u96c6\u7fa4\u7248v35",level:2},{value:"2017\u5e74\uff0cConfigServer\u96c6\u7fa4\u7248V4.0",id:"2017\u5e74configserver\u96c6\u7fa4\u7248v40",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f5c\u8005\uff1a\u963f\u91cc\u5df4\u5df4\u9ad8\u7ea7\u6280\u672f\u4e13\u5bb6\uff0c\u8bb8\u771f\u6069(\u6155\u4e49)"),(0,n.kt)("p",null,"\u6587\u7ae0\u6982\u8981\uff1a\u672c\u6587\u7b80\u5355\u63cf\u8ff0\u4e86Eureka1.0\u5b58\u5728\u7684\u67b6\u6784\u95ee\u9898\uff0cEureka2.0\u8bbe\u60f3\u7684\u67b6\u6784\u3002\u8be6\u7ec6\u56de\u987e\u4e86\u963f\u91cc\u5df4\u5df4\u7684\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3ConfigServer\u4ea7\u54c1\u4ece2008\u5e74\u5efa\u8bbe\u5143\u5e74\u81f3\u4eca\u7ecf\u5386\u7684\u5173\u952e\u67b6\u6784\u6f14\u8fdb\u3002\u901a\u8fc7\u8fd9\u4e2a\u6587\u7ae0\u4f60\u4f1a\u5bf9\u57fa\u4e8eAP\u6a21\u5f0f\u7684\u6ce8\u518c\u4e2d\u5fc3\u5728\u6280\u672f\u53d1\u5c55\u8fc7\u7a0b\u4e2d\u5c06\u4f1a\u78b0\u5230\u7684\u95ee\u9898\u6709\u6240\u611f\u77e5\u3002"),(0,n.kt)("h1",{id:"eureka10\u67b6\u6784\u5b58\u5728\u7684\u95ee\u9898"},"Eureka1.0\u67b6\u6784\u5b58\u5728\u7684\u95ee\u9898"),(0,n.kt)("p",null,"Eureka\u4f5c\u4e3aNetflix\u516c\u53f8\u529b\u63a8\u548cSpringCloud\u5fae\u670d\u52a1\u6807\u914d\u7684\u6ce8\u518c\u4e2d\u5fc3\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\uff0c\u5176Eureka 2.0 (Discontinued)\u7684\u6d88\u606f\u5728\u793e\u533a\u5f15\u8d77\u4e86\u4e0d\u5c0f\u7684\u9a9a\u52a8\uff1b\u5176\u5b9e\u65e9\u57282015\u5e74\u793e\u533a\u5c31\u5df2\u7ecf\u653e\u51fa\u4e862.0\u67b6\u6784\u7684\u5347\u7ea7\u8bbe\u60f3\uff0c\u4f46\u662f3\u5e74\u7684\u65f6\u95f4\u8fc7\u53bb\uff0c\u7b49\u5230\u7684\u786e\u662fDiscontinued\u7684\u6d88\u606f\uff0c\u867d\u71362.0\u7684\u4ee3\u7801\u5728github\u7684\u4e3b\u9875\u4e0a\u4e5f\u5df2\u7ecf\u653e\u51fa\uff0c\u4f46\u662f\u544a\u8beb\u7528\u6237\u8981\u81ea\u884c\u627f\u62c5\u5f53\u4e2d\u7684\u4f7f\u7528\u98ce\u9669\u3002\u6211\u60f3\u4e0d\u4f1a\u6709\u4eba\u771f\u7684\u628a2.0\u76f4\u63a5\u6295\u5165\u5230\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e3a\u4ec0\u4e48\u8981\u505aEureka2.0\uff0c\u5176\u5b98\u65b9\u7684wiki\u4e2d\u7684Why Eureka 2.0\u548cEureka 2.0 Improvements\u505a\u4e86\u5982\u4e0b\u7684\u8bf4\u660e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only support homogenous client views: Eureka servers only expects the client to always get the entire registry and does not allow to get specific applications/VIP addresses. This imposes a memory limitation on all clients registering with Eureka, even if they need a very small subset of the Eureka\u2019s registry."),(0,n.kt)("li",{parentName:"ul"},"Only supports scheduled updates: Eureka client follows a poll model to fetch updates from the server routinely. This imposes an overhead on the client of doing a scheduled call to the server, even if there are no changes and also delays the updates by the poll interval."),(0,n.kt)("li",{parentName:"ul"},"Replication algorithm limits scalability: Eureka follows a broadcast replication model i.e. all the servers replicate data and heartbeats to all the peers. This is simple and effective for the data set that eureka contains however replication is implemented by relaying all the HTTP calls that a server receives as is to all the peers. This limits scalability as every node has to withstand the entire write load on eureka.")),(0,n.kt)("p",null,"Although Eureka 2.0 provides a more richer feature set, the above limitations are the major driving factors for the changes proposed in this version.\nBased on the above motivations, Eureka 2.0 achieves the following improvements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interest based subscription model for registry data: A client of Eureka is able to select a part of the instance registry in which it is interested in and the eureka server only sends information about that part of the registry. Eg: A client can say I am only interested in application \u201cWebFarm\u201d and then the server will only send information about WebFarm instances. Eureka server provides various selection criterions and a way to update this interest set dynamically."),(0,n.kt)("li",{parentName:"ul"},"Push model from the server for any changes to the interest set: Instead of the current pull model from the client, Eureka servers pushes updates for changes to the interest set, to the client."),(0,n.kt)("li",{parentName:"ul"},"Optimized replication: As Eureka 1.0, Eureka 2.0 also follows a broadcast replication model i.e. every node replicates data to all other nodes. However, the replication algorithm is much more optimized eliminating the need of sending heartbeats for every instance in the registry. This drastically reduce the replication traffic and achieves much higher scalability."),(0,n.kt)("li",{parentName:"ul"},"Auto-scaled Eureka servers: Eureka 2.0 divides the read (discovery of data) and write (registration) concerns into separate clusters. Since, the write load is predictable (proportional to the number of instances in a region), the write cluster is pre-scaled. On the other hand, read load is unpredictable (proportional to subscriptions from clients) and hence the read farm is auto-scaled."),(0,n.kt)("li",{parentName:"ul"},"Audit log: Eureka 2.0 provides an elaborate audit log for any change done to the registry. This helps Eureka owners as well as users to get insight into debugging the state of individual application instances as exists in Eureka. The audit log by default is persisted to a log file, but different persistent storages can be plugged-in."),(0,n.kt)("li",{parentName:"ul"},"Dashboard: Eureka 2.0 provides a rich dashboard (as opposed to very rudimentary dashboard of Eureka 1.0) with insights into Eureka internals with respect to registry views, server health, subscription state, audit log, etc.")),(0,n.kt)("p",null,"\xa0\u7b80\u5355\u7ffb\u8bd1\u603b\u7ed3\uff0c\u4e5f\u5c31\u662fEureka1.0\u7684\u67b6\u6784\u4e3b\u8981\u5b58\u5728\u5982\u4e0b\u7684\u4e0d\u8db3\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u7aef\u62ff\u5230\u7684\u662f\u670d\u52a1\u7684\u5168\u91cf\u7684\u5730\u5740\uff1a\u8fd9\u4e2a\u5bf9\u4e8e\u5ba2\u6237\u7aef\u7684\u5185\u5b58\u662f\u4e00\u4e2a\u6bd4\u8f83\u5927\u7684\u6d88\u8017\uff0c\u7279\u522b\u5728\u591a\u6570\u636e\u4e2d\u5fc3\u90e8\u7f72\u7684\u60c5\u51b5\u4e0b\uff0c\u67d0\u4e2a\u6570\u636e\u4e2d\u5fc3\u7684\u8ba2\u9605\u7aef\u5f80\u5f80\u53ea\u9700\u8981\u540c\u6570\u636e\u4e2d\u5fc3\u7684\u670d\u52a1\u63d0\u4f9b\u7aef\u5373\u53ef\u3002"),(0,n.kt)("li",{parentName:"ul"},"pull\u6a21\u5f0f\uff1a\u5ba2\u6237\u7aef\u91c7\u7528\u5468\u671f\u6027\u5411\u670d\u52a1\u7aef\u4e3b\u52a8pull\u670d\u52a1\u6570\u636e\u7684\u6a21\u5f0f\uff08\u4e5f\u5c31\u662f\u5ba2\u6237\u7aef\u8f6e\u8bad\u7684\u65b9\u5f0f\uff09\uff0c\u8fd9\u4e2a\u65b9\u5f0f\u5b58\u5728\u5b9e\u65f6\u6027\u4e0d\u8db3\u4ee5\u53ca\u65e0\u8c13\u7684\u62c9\u53d6\u6027\u80fd\u6d88\u8017\u7684\u95ee\u9898\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\u534f\u8bae\uff1aEureka\u96c6\u7fa4\u7684\u591a\u526f\u672c\u7684\u4e00\u81f4\u6027\u534f\u8bae\u91c7\u7528\u7c7b\u4f3c\u201c\u5f02\u6b65\u591a\u5199\u201d\u7684AP\u534f\u8bae\uff0c\u6bcf\u4e00\u4e2aserver\u90fd\u4f1a\u628a\u672c\u5730\u63a5\u6536\u5230\u7684\u5199\u8bf7\u6c42\uff08register/heartbeat/unregister/update\uff09\u53d1\u9001\u7ed9\u7ec4\u6210\u96c6\u7fa4\u7684\u5176\u4ed6\u6240\u6709\u7684\u673a\u5668\uff08Eureka\u79f0\u4e4b\u4e3apeer\uff09\uff0c\u7279\u522b\u662fhearbeat\u62a5\u6587\u662f\u5468\u671f\u6027\u6301\u7eed\u4e0d\u65ad\u7684\u5728client->server->all peers\u4e4b\u95f4\u4f20\u9001\uff1b\u8fd9\u6837\u7684\u4e00\u81f4\u6027\u7b97\u6cd5\uff0c\u5bfc\u81f4\u4e86\u5982\u4e0b\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u53f0Server\u90fd\u9700\u8981\u5b58\u50a8\u5168\u91cf\u7684\u670d\u52a1\u6570\u636e\uff0cServer\u7684\u5185\u5b58\u660e\u663e\u4f1a\u6210\u4e3a\u74f6\u9888\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u8ba2\u9605\u8005\u5374\u6765\u8d8a\u591a\u7684\u65f6\u5019\uff0c\u9700\u8981\u6269\u5bb9Eureka\u96c6\u7fa4\u6765\u63d0\u9ad8\u8bfb\u7684\u80fd\u529b\uff0c\u4f46\u662f\u6269\u5bb9\u7684\u540c\u65f6\u4f1a\u5bfc\u81f4\u6bcf\u53f0server\u9700\u8981\u627f\u62c5\u66f4\u591a\u7684\u5199\u8bf7\u6c42\uff0c\u6269\u5bb9\u7684\u6548\u679c\u4e0d\u660e\u663e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u6210Eureka\u96c6\u7fa4\u7684\u6240\u6709server\u90fd\u9700\u8981\u91c7\u7528\u76f8\u540c\u7684\u7269\u7406\u914d\u7f6e\uff0c\u5e76\u4e14\u53ea\u80fd\u901a\u8fc7\u4e0d\u65ad\u7684\u63d0\u9ad8\u914d\u7f6e\u6765\u5bb9\u7eb3\u66f4\u591a\u7684\u670d\u52a1\u6570\u636e")))),(0,n.kt)("p",null,"Eureka2.0\u4e3b\u8981\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u800c\u63d0\u51fa\u7684\uff0c\u4e3b\u8981\u5305\u542b\u4e86\u5982\u4e0b\u7684\u6539\u8fdb\u548c\u589e\u5f3a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u63a8\u9001\u4ecepull\u8d70\u5411push\u6a21\u5f0f\uff0c\u5e76\u4e14\u5b9e\u73b0\u66f4\u5c0f\u7c92\u5ea6\u7684\u670d\u52a1\u5730\u5740\u6309\u9700\u8ba2\u9605\u7684\u529f\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u5206\u79bb\uff1a\u5199\u96c6\u7fa4\u76f8\u5bf9\u7a33\u5b9a\uff0c\u65e0\u9700\u7ecf\u5e38\u6269\u5bb9\uff1b\u8bfb\u96c6\u7fa4\u53ef\u4ee5\u6309\u9700\u6269\u5bb9\u4ee5\u63d0\u9ad8\u6570\u636e\u63a8\u9001\u80fd\u529b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e\u5ba1\u8ba1\u65e5\u5fd7\u7684\u529f\u80fd\u548c\u529f\u80fd\u66f4\u4e30\u5bcc\u7684Dashboard\u3002")),(0,n.kt)("p",null,"Eureka1.0\u7248\u672c\u5b58\u5728\u7684\u95ee\u9898\u4ee5\u53caEureka2.0\u67b6\u6784\u8bbe\u60f3\u548c\u963f\u91cc\u5df4\u5df4\u5185\u90e8\u7684\u540c\u7c7b\u4ea7\u54c1ConfigServer\u6240\u7ecf\u5386\u7684\u9636\u6bb5\u975e\u5e38\u76f8\u4f3c\uff08\u751a\u81f3Eureka2.0\u5982\u679c\u771f\u7684\u843d\u5730\u540e\u5b58\u5728\u7684\u95ee\u9898\uff0c\u963f\u91cc\u5df4\u5df4\u65e9\u5df2\u7ecf\u53d1\u73b0\u5e76\u4e14\u5df2\u7ecf\u89e3\u51b3\uff09\uff0c\u4e0b\u9762\u6211\u5e26\u7740\u4f60\u6765\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u6240\u7ecf\u5386\u8fc7\u7684\u3002"),(0,n.kt)("h1",{id:"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3configserver\u6280\u672f\u53d1\u73b0\u8def\u7ebf"},"\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3ConfigServer\u6280\u672f\u53d1\u73b0\u8def\u7ebf"),(0,n.kt)("p",null,"\u963f\u91cc\u5df4\u5df4\u65e9\u57282008\u5c31\u5f00\u59cb\u4e86\u670d\u52a1\u5316\u7684\u8fdb\u7a0b\uff0c\u5728\u90a3\u4e2a\u65f6\u5019\u5c31\u5c31\u5df2\u7ecf\u81ea\u7814\u51fa\u670d\u52a1\u53d1\u73b0\u89e3\u51b3\u65b9\u6848\uff08\u5185\u90e8\u4ea7\u54c1\u540d\u53ebConfigServer\uff09\u3002"),(0,n.kt)("p",null,"\u5f532012\u5e749\u67081\u53f7Eureka\u653e\u51fa\u7b2c\u4e00\u4e2a1.1.2\u7248\u672c\u7684\u65f6\u5019\uff0c\u6211\u4eec\u628aConfigServer\u548cEureka\u8fdb\u884c\u4e86\u6df1\u5ea6\u7684\u5bf9\u6bd4\uff0c\u5e0c\u671b\u80fd\u591f\u4eceEureka\u627e\u5230\u4e00\u4e9b\u501f\u9274\u6765\u89e3\u51b3\u5f53\u65f6\u7684ConfigServer\u53d1\u5c55\u8fc7\u7a0b\u4e2d\u78b0\u5230\u7684\u95ee\u9898\uff08\u540e\u9762\u4f1a\u63d0\u5230\uff09\uff1b\u7136\u800c\u4e8b\u4e0e\u613f\u8fdd\uff0c\u6211\u4eec\u5df2\u7ecf\u53d1\u73b0Eureka1.x\u67b6\u6784\u5b58\u5728\u6bd4\u8f83\u4e25\u91cd\u7684\u6269\u5c55\u6027\u548c\u5b9e\u65f6\u6027\u7684\u95ee\u9898\uff08\u6b63\u5982\u4e0a\u9762\u6240\u63cf\u8ff0\u7684\uff09\uff0c\u8fd9\u4e9b\u95ee\u9898ConfigServer\u5f53\u65f6\u7684\u7248\u672c\u4e5f\u5927\u540c\u5c0f\u5f02\u7684\u5b58\u5728\uff0c\u6211\u4eec\u57282012\u5e74\u5e95\u5bf9ConfigServer\u7684\u67b6\u6784\u8fdb\u884c\u4e86\u5347\u7ea7\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,n.kt)("p",null,"\u5f532015\u5e74Eureka\u793e\u533a\u653e\u51fa2.0\u67b6\u6784\u5347\u7ea7\u7684\u58f0\u97f3\u7684\u65f6\u5019\uff0c\u6211\u4eec\u540c\u6837\u7b2c\u4e00\u65f6\u95f4\u67e5\u770b\u4e862.0\u7684\u76ee\u6807\u67b6\u6784\u8bbe\u8ba1\uff0c\u6211\u4eec\u60ca\u5947\u7684\u53d1\u73b0Eureka\u7684\u8fd9\u4e2a\u65b0\u7684\u67b6\u6784\u540c2012\u5e74\u5e95ConfigServer\u7684\u67b6\u6784\u975e\u5e38\u76f8\u4f3c\uff0c\u5f53\u65f6\u4e00\u65b9\u9762\u611f\u6168\u201c\u82f1\u96c4\u6240\u89c1\u7565\u540c\u201d\uff0c\u53e6\u4e00\u65b9\u4e5f\u6709\u4e9b\u5931\u671b\uff0c\u56e0\u4e3aConfigServer2012\u5e74\u7684\u67b6\u6784\u65e9\u5c31\u65e0\u6cd5\u6ee1\u8db3\u963f\u91cc\u5df4\u5df4\u5185\u90e8\u7684\u53d1\u5c55\u8bc9\u6c42\u4e86\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u6211\u4ece\u5934\u56de\u987e\u4e00\u4e0b\uff0c\u963f\u91cc\u5df4\u5df4\u7684ConfigServer\u7684\u6280\u672f\u53d1\u5c55\u8fc7\u7a0b\u4e2d\u7684\u51e0\u4e2a\u91cc\u7a0b\u7891\u4e8b\u4ef6\u3002"),(0,n.kt)("h2",{id:"2008\u5e74\u65e0configserver\u7684\u65f6\u4ee3"},"2008\u5e74\uff0c\u65e0ConfigServer\u7684\u65f6\u4ee3"),(0,n.kt)("p",null,"\u501f\u52a9\u7528\u786c\u4ef6\u8d1f\u8f7d\u8bbe\u5907F5\u63d0\u4f9b\u7684vip\u529f\u80fd\uff0c\u670d\u52a1\u63d0\u4f9b\u65b9\u53ea\u63d0\u4f9bvip\u548c\u57df\u540d\u4fe1\u606f\uff0c\u8c03\u7528\u65b9\u901a\u8fc7\u57df\u540d\u65b9\u5f0f\u8c03\u7528\uff0c\u6240\u6709\u8bf7\u6c42\u548c\u6d41\u91cf\u90fd\u8d70F5\u8bbe\u5907\u3002"),(0,n.kt)("p",null,"\u9047\u5230\u7684\u95ee\u9898\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u4e0d\u5747\u8861\uff1a\u5bf9\u4e8e\u957f\u8fde\u63a5\u573a\u666f\uff0cF5\u4e0d\u80fd\u63d0\u4f9b\u8f83\u597d\u7684\u8d1f\u8f7d\u5747\u8861\u80fd\u529b\u3002\u5982\u670d\u52a1\u63d0\u4f9b\u65b9\u53d1\u5e03\u7684\u573a\u666f\uff0c\u6700\u540e\u4e00\u6279\u53d1\u5e03\u7684\u673a\u5668\uff0c\u57fa\u672c\u4e0a\u4e0d\u80fd\u88ab\u5206\u914d\u5230\u6d41\u91cf\u3002\u9700\u8981\u5728\u53d1\u5e03\u5b8c\u6210\u540e\uff0cPE\u624b\u5de5\u53bb\u65ad\u5f00\u6240\u6709\u8fde\u63a5\uff0c\u91cd\u65b0\u89e6\u53d1\u8fde\u63a5\u7ea7\u522b\u7684\u8d1f\u8f7d\u5747\u8861\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u74f6\u9888\uff1a\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u8d70F5\u8bbe\u5907\uff0c\u5171\u4eab\u8d44\u6e90\uff0c\u6d41\u91cf\u5f88\u5bb9\u6613\u4f1a\u6253\u6ee1\u7f51\u5361\uff0c\u4f1a\u9020\u6210\u5e94\u7528\u4e4b\u95f4\u7684\u76f8\u4e92\u5f71\u54cd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5355\u70b9\u6545\u969c\uff1aF5\u8bbe\u5907\u6545\u969c\u4e4b\u540e\uff0c\u6240\u6709\u8fdc\u7a0b\u8c03\u7528\u4f1a\u88ab\u7ec8\u6b62\uff0c\u5bfc\u81f4\u5927\u9762\u79ef\u762b\u75ea\u3002")),(0,n.kt)("h2",{id:"2008\u5e74configserver\u5355\u673a\u7248v10"},"2008\u5e74\uff0cConfigServer\u5355\u673a\u7248V1.0"),(0,n.kt)("p",null,"\u5355\u673a\u7248\u5b9a\u4e49\u548c\u5b9e\u73b0\u4e86\u670d\u52a1\u53d1\u73b0\u7684\u5173\u952e\u7684\u6a21\u578b\u8bbe\u8ba1\uff08\u5305\u62ec\u670d\u52a1\u53d1\u5e03\uff0c\u670d\u52a1\u8ba2\u9605\uff0c\u5065\u5eb7\u68c0\u67e5\uff0c\u6570\u636e\u53d8\u66f4\u4e3b\u52a8\u63a8\u9001\uff0c\u8fd9\u4e2a\u6a21\u578b\u81f3\u4eca\u4ecd\u7136\u9002\u7528\uff09\uff0c\u5e94\u7528\u901a\u8fc7\u5185\u5d4cSDK\u7684\u65b9\u5f0f\u63a5\u5165\u5b9e\u73b0\u670d\u52a1\u7684\u53d1\u5e03\u548c\u8ba2\u9605\uff1b\u8fd9\u4e2a\u7248\u672c\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u8bbe\u8ba1\u51b3\u7b56\u5c31\u662f\u670d\u52a1\u6570\u636e\u53d8\u66f4\u5230\u5e95\u662fpull\u8fd8\u662fpush\u7684\u6a21\u5f0f\uff0c\u6211\u4eec\u4ece\u6700\u521d\u5c31\u786e\u5b9a\u5fc5\u987b\u91c7\u7528push\u7684\u6a21\u5f0f\u6765\u4fdd\u8bc1\u6570\u636e\u53d8\u66f4\u65f6\u7684\u63a8\u9001\u5b9e\u65f6\u6027\uff08Eureka1.x\u7684\u67b6\u6784\u91c7\u7528\u7684\u662fpull\u7684\u6a21\u5f0f\uff09"),(0,n.kt)("p",null,"\u5f53\u65f6\uff0cHSF\u548cNotify\u5c31\u662f\u91c7\u7528\u5355\u673a\u7248\u7684ConfigServer\u6765\u5b8c\u6210\u670d\u52a1\u7684\u53d1\u73b0\u548ctopic\u7684\u53d1\u73b0\u3002\u5355\u673a\u7248\u7684ConfigServer\u548cHSF\u3001Notify\u914d\u5408\uff0c\u91c7\u7528\u670d\u52a1\u53d1\u73b0\u7684\u6280\u672f\uff0c\u8ba9\u8bf7\u6c42\u901a\u8fc7\u7aef\u5230\u7aef\u7684\u65b9\u5f0f\u6d41\u52a8\uff0c\u907f\u514d\u4ea7\u751f\u6d41\u91cf\u74f6\u9888\u548c\u5355\u70b9\u6545\u969c\u3002ConfigServer\u53ef\u4ee5\u52a8\u6001\u7684\u5c06\u670d\u52a1\u5730\u5740\u63a8\u9001\u5230\u5ba2\u6237\u7aef\uff0c\u670d\u52a1\u8c03\u7528\u8005\u53ef\u4ee5\u77e5\u9053\u6240\u6709\u63d0\u4f9b\u6b64\u670d\u52a1\u7684\u673a\u5668\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u53ef\u4ee5\u901a\u8fc7\u968f\u673a\u6216\u8005\u8f6e\u8be2\u7684\u65b9\u5f0f\u9009\u62e9\u670d\u52a1\u7aef\uff0c\u505a\u5230\u8bf7\u6c42\u7ea7\u522b\u7684\u8d1f\u8f7d\u5747\u8861\u3002\u8fd9\u4e2a\u7248\u672c\u5df2\u7ecf\u80fd\u5f88\u597d\u7684\u89e3\u51b3F5\u8bbe\u5907\u4e0d\u80fd\u89e3\u51b3\u7684\u4e09\u4e2a\u95ee\u9898\u3002"),(0,n.kt)("p",null,"\u4f46\u662f\u5355\u673a\u7248\u672c\u7684\u95ee\u9898\u4e5f\u975e\u5e38\u660e\u663e\uff0c\u4e0d\u5177\u5907\u826f\u597d\u7684\u5bb9\u707e\u6027\uff1b"),(0,n.kt)("h2",{id:"2009\u5e74\u521dconfigserver\u5355\u673a\u7248v15"},"2009\u5e74\u521d\uff0cConfigServer\u5355\u673a\u7248V1.5"),(0,n.kt)("p",null,"\u5355\u673a\u7248\u7684ConfigServer\u6240\u9762\u4e34\u7684\u95ee\u9898\u5c31\u662f\u5f53ConfigServer\u5728\u53d1\u5e03/\u5347\u7ea7\u7684\u65f6\u5019\uff0c\u5982\u679c\u5e94\u7528\u521a\u597d\u4e5f\u5728\u53d1\u5e03\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f1a\u5bfc\u81f4\u8ba2\u9605\u5ba2\u6237\u7aef\u62ff\u4e0d\u5230\u670d\u52a1\u5730\u5740\u7684\u6570\u636e\uff0c\u5f71\u54cd\u670d\u52a1\u7684\u8c03\u7528\uff1b\u6240\u4ee5\u5f53\u65f6\u6211\u4eec\u5728SDK\u4e2d\u52a0\u5165\u4e86\u672c\u5730\u7684\u78c1\u76d8\u7f13\u5b58\u7684\u529f\u80fd\uff0c\u5e94\u7528\u5728\u62ff\u5230\u670d\u52a1\u7aef\u63a8\u9001\u7684\u6570\u636e\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u5199\u5165\u672c\u5730\u78c1\u76d8\uff0c\u7136\u540e\u518d\u66f4\u65b0\u5185\u5b58\u6570\u636e\uff1b\u5f53\u5e94\u7528\u91cd\u542f\u7684\u65f6\u5019\uff0c\u4f18\u5148\u4ece\u672c\u5730\u78c1\u76d8\u83b7\u53d6\u670d\u52a1\u6570\u636e\uff1b\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\u89e3\u8026\u4e86ConfigServer\u548c\u5e94\u7528\u53d1\u5e03\u7684\u4e92\u76f8\u4f9d\u8d56\uff1b\u8fd9\u4e2a\u65b9\u5f0f\u6cbf\u7528\u81f3\u4eca\u3002\uff08\u6211\u5f88\u60ca\u8bb6\uff0cEureka1.x\u7684\u7248\u672c\u81f3\u4eca\u4ecd\u7136\u6ca1\u6709\u5b9e\u73b0\u5ba2\u6237\u7aef\u78c1\u76d8\u7f13\u5b58\u7684\u529f\u80fd\uff0c\u96be\u9053Eureka\u96c6\u7fa4\u53ef\u4ee5\u4fdd\u6301100%\u7684SLA\u5417\uff1f\uff09"),(0,n.kt)("h2",{id:"2009\u5e747\u6708configserver\u96c6\u7fa4\u7248\u672cv20"},"2009\u5e747\u6708\uff0cConfigServer\u96c6\u7fa4\u7248\u672cV2.0"),(0,n.kt)("p",null,"ConfigServer\u7684\u96c6\u7fa4\u7248\u672c\u8ddf\u666e\u901a\u7684\u5e94\u7528\u6709\u4e00\u4e9b\u533a\u522b\uff1a\u666e\u901a\u7684\u5e94\u7528\u901a\u8fc7\u670d\u52a1\u62c6\u5206\u540e\uff0c\u5df2\u7ecf\u5c5e\u4e8e\u65e0\u72b6\u6001\u578b\uff0c\u672c\u8eab\u5df2\u7ecf\u5177\u5907\u826f\u597d\u7684\u53ef\u6269\u5c55\u6027\uff0c\u5355\u673a\u53d8\u96c6\u7fa4\u53ea\u662f\u4ee3\u7801\u591a\u90e8\u7f72\u51e0\u53f0\uff1bConfigServer\u662f\u6709\u72b6\u6001\u7684\uff0c\u5185\u5b58\u4e2d\u7684\u670d\u52a1\u4fe1\u606f\u5c31\u662f\u6570\u636e\u72b6\u6001\uff0c\u5982\u679c\u8981\u652f\u6301\u96c6\u7fa4\u90e8\u7f72\uff0c\u8fd9\u4e9b\u6570\u636e\u8981\u4e0d\u505a\u5206\u7247\uff0c\u8981\u4e0d\u505a\u5168\u91cf\u540c\u6b65\uff1b\u7531\u4e8e\u5206\u7247\u7684\u65b9\u6848\u5e76\u6ca1\u6709\u771f\u6b63\u89e3\u51b3\u6570\u636e\u9ad8\u53ef\u7528\u7684\u95ee\u9898\uff08\u5206\u7247\u65b9\u6848\u8fd8\u9700\u8981\u8003\u8651\u5bf9\u5e94\u7684failover\u65b9\u6848\uff09\uff0c\u540c\u65f6\u590d\u6742\u5ea6\u8f83\u9ad8\uff1b\u6240\u4ee5\u5f53\u65f6\u6211\u4eec\u9009\u62e9\u4e86\u5355\u673a\u5b58\u50a8\u5168\u91cf\u670d\u52a1\u6570\u636e\u5168\u91cf\u7684\u65b9\u6848\u3002\u4e3a\u4e86\u7b80\u5316\u6570\u636e\u540c\u6b65\u7684\u903b\u8f91\uff0c\u670d\u52a1\u7aef\u4f7f\u7528\u5ba2\u6237\u7aef\u6a21\u5f0f\u540c\u6b65\uff1a\u670d\u52a1\u7aef\u6536\u5230\u5ba2\u6237\u7aef\u8bf7\u6c42\u540e\uff0c\u901a\u8fc7\u5ba2\u6237\u7aef\u7684\u65b9\u5f0f\u5c06\u6b64\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u7684ConfigServer\uff0c\u505a\u5230\u540c\u6b65\u7684\u6548\u679c\uff0c\u6bcf\u4e00\u53f0ConfigServer\u90fd\u6709\u5168\u91cf\u7684\u670d\u52a1\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u67b6\u6784\u540cEureka1.x\u7684\u67b6\u6784\u60ca\u4eba\u7684\u76f8\u4f3c\uff0c\u6240\u4ee5\u5f88\u660e\u663e\u7684Eureka1.x\u5b58\u5728\u7684\u95ee\u9898\u6211\u4eec\u4e5f\u5b58\u5728\uff1b\u5f53\u65f6\u7684\u7f13\u89e3\u7684\u529e\u6cd5\u662f\u6211\u4eec\u7684ConfigServer\u96c6\u7fa4\u5168\u90e8\u91c7\u7528\u9ad8\u914d\u7269\u7406\u6765\u90e8\u7f72\u3002"),(0,n.kt)("h2",{id:"2010\u5e74\u5e95configserver\u96c6\u7fa4\u7248v25"},"2010\u5e74\u5e95\uff0cConfigServer\u96c6\u7fa4\u7248V2.5"),(0,n.kt)("p",null,"\u57fa\u4e8e\u5ba2\u6237\u7aef\u6a21\u5f0f\u5728\u96c6\u7fa4\u95f4\u540c\u6b65\u670d\u52a1\u6570\u636e\u7684\u65b9\u6848\u6e10\u6e10\u65e0\u4ee5\u4e3a\u7ee7\u4e86\uff0c\u7279\u522b\u662f\u6bcf\u6b21\u5e94\u7528\u5728\u53d1\u5e03\u7684\u65f6\u5019\u4ea7\u751f\u4e86\u5927\u91cf\u7684\u670d\u52a1\u53d1\u5e03\u548c\u6570\u636e\u63a8\u9001\uff0c\u670d\u52a1\u5668\u7684\u7f51\u5361\u7ecf\u5e38\u88ab\u6253\u6ee1\uff0c\u540c\u65f6cmsgc\u4e5f\u975e\u5e38\u9891\u7e41\uff1b\u6211\u4eec\u5bf9\u6570\u636e\u540c\u6b65\u7684\u65b9\u6848\u8fdb\u884c\u4e86\u5347\u7ea7\uff0c\u53bb\u9664\u4e86\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u540c\u6b65\u6a21\u5f0f\uff0c\u91c7\u7528\u4e86\u6279\u91cf\u7684\u57fa\u4e8e\u957f\u8fde\u63a5\u7ea7\u522b\u7684\u6570\u636e\u540c\u6b65+\u5468\u671f\u6027\u7684renew\u7684\u65b9\u6848\u6765\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\uff08\u8fd9\u4e2a\u540c\u6b65\u65b9\u6848\u5f53\u65f6\u8fd8\u7533\u8bf7\u4e86\u56fd\u5bb6\u4e13\u5229\uff09\uff1b\u8fd9\u4e2a\u7248\u672c\u8fd8\u5bf9cpu\u548c\u5185\u5b58\u505a\u4e86\u91cd\u70b9\u4f18\u5316\uff0c\u5305\u62ec\u540c\u6b65\u4efb\u52a1\u7684\u5408\u5e76\uff0c\u63a8\u9001\u4efb\u52a1\u7684\u5408\u5e76\uff0c\u63a8\u9001\u6570\u636e\u7684\u538b\u7f29\uff0c\u4f18\u5316\u6570\u636e\u7ed3\u6784\u7b49\uff1b"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u7248\u672c\u662fConfigServer\u5386\u53f2\u4e0a\u4e00\u4e2a\u6bd4\u8f83\u7a33\u5b9a\u7684\u91cc\u7a0b\u7891\u7248\u672c\u3002"),(0,n.kt)("p",null,"\u4f46\u662f\u968f\u77402009\u5e74\u5929\u732b\u72ec\u521b\u7684\u53cc\u5341\u4e00\u5927\u4fc3\u6d3b\u52a8\u6a2a\u7a7a\u51fa\u4e16\uff0c\u670d\u52a1\u6570\u91cf\u5267\u589e\uff0c\u5e94\u7528\u53d1\u5e03\u65f6\u5019ConfigServer\u96c6\u7fa4\u53c8\u5f00\u59cb\u4e86\u5927\u9762\u79ef\u7684\u6296\u52a8\uff0c\u8fd8\u662f\u4f53\u73b0\u5728\u5185\u5b58\u548c\u7f51\u5361\u7684\u5403\u7d27\uff0c\u751a\u81f3\u6e10\u6e10\u5230\u4e86fullgc\u7684\u8fb9\u7f18\uff1b\u4e3a\u4e86\u63d0\u9ad8\u6570\u636e\u63a8\u9001\u80fd\u529b\uff0c\u9700\u8981\u5bf9\u96c6\u7fa4\u8fdb\u884c\u6269\u5bb9\uff0c\u4f46\u662f\u6269\u5bb9\u7684\u540c\u65f6\u53c8\u4f1a\u5bfc\u81f4\u6bcf\u53f0\u670d\u52a1\u5668\u7684\u5199\u80fd\u529b\u4e0b\u964d\uff0c\u6211\u4eec\u7684\u67b6\u6784\u5230\u4e86\u201c\u6309\u4e0b\u846b\u82a6\u6d6e\u8d77\u74e2\u201d\u7684\u74f6\u9888\u3002"),(0,n.kt)("h2",{id:"2012\u5e74\u5e95configserver\u96c6\u7fa4\u7248v30"},"2012\u5e74\u5e95\uff0cConfigServer\u96c6\u7fa4\u7248V3.0"),(0,n.kt)("p",null,"\u57282011\u5e74\u53cc\u5341\u4e00\u4e4b\u524d\u6211\u4eec\u5b8c\u6210\u4e86V3\u67b6\u6784\u7684\u843d\u5730\uff0c\u7c7b\u4f3cEureka2.0\u6240\u8bbe\u8ba1\u7684\u8bfb\u5199\u5206\u79bb\u7684\u65b9\u6848\uff0c\u6211\u4eec\u628aConfigServer\u96c6\u7fa4\u62c6\u5206\u6210session\u548cdata\u4e24\u4e2a\u96c6\u7fa4\uff0c\u5ba2\u6237\u7aef\u5206\u7247\u7684\u628a\u670d\u52a1\u6570\u636e\u6ce8\u518c\u5230session\u96c6\u7fa4\u4e2d\uff0csession\u96c6\u7fa4\u4f1a\u628a\u6570\u636e\u5f02\u6b65\u7684\u5199\u5230data\u96c6\u7fa4\uff0cdata\u96c6\u7fa4\u5b8c\u6210\u670d\u52a1\u6570\u636e\u7684\u805a\u5408\u540e\uff0c\u628a\u538b\u7f29\u597d\u7684\u670d\u52a1\u6570\u636e\u63a8\u9001\u5230session\u5c42\u7f13\u5b58\u4e0b\u6765\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u76f4\u63a5\u4ecesession\u5c42\u8ba2\u9605\u5230\u6240\u9700\u8981\u7684\u670d\u52a1\u6570\u636e\uff1b\u8fd9\u4e2a\u5206\u5c42\u67b6\u6784\u4e2d\uff0csession\u662f\u5206\u7247\u5b58\u50a8\u90e8\u5206\u7684\u670d\u52a1\u6570\u636e\u7684\uff08\u6211\u4eec\u8bbe\u8ba1\u4e86failover\u65b9\u6848\uff09\uff0cdata\u5b58\u50a8\u7684\u662f\u5168\u91cf\u670d\u52a1\u6570\u636e\uff08\u5929\u751f\u5177\u5907failover\u80fd\u529b\uff09\uff1b"),(0,n.kt)("p",null,"data\u96c6\u7fa4\u76f8\u5bf9\u6bd4\u8f83\u7a33\u5b9a\uff0c\u4e0d\u9700\u8981\u7ecf\u5e38\u6269\u5bb9\uff1bsession\u96c6\u7fa4\u53ef\u4ee5\u6839\u636e\u6570\u636e\u63a8\u9001\u7684\u9700\u6c42\u5f88\u65b9\u4fbf\u7684\u6269\u5bb9\uff08\u8fd9\u4e2a\u601d\u8def\u548cEureka2.0\u6240\u63cf\u8ff0\u7684\u601d\u8def\u662f\u4e00\u81f4\u7684\uff09\uff1bsession\u7684\u6269\u5bb9\u4e0d\u4f1a\u7ed9data\u96c6\u7fa4\u5e26\u6765\u538b\u529b\u7684\u589e\u52a0\u3002session\u96c6\u7fa4\u6211\u4eec\u91c7\u7528\u4f4e\u914d\u7684\u865a\u62df\u673a\u5373\u53ef\u6ee1\u8db3\u9700\u6c42\uff0cdata\u7531\u4e8e\u5b58\u50a8\u662f\u5168\u91cf\u7684\u6570\u636e\u6211\u4eec\u4ecd\u7136\u91c7\u7528\u4e86\u76f8\u5bf9\u9ad8\u914d\u7684\u7269\u7406\u673a\uff08\u4f46\u662f\u540cV2.5\u76f8\u6bd4\uff0c\u5bf9\u7269\u7406\u673a\u7684\u6027\u80fd\u8981\u6c42\u5df2\u7ecf\u7b54\u590d\u4e0b\u964d\uff09"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u7248\u672c\u4e5f\u662fConfigServer\u5386\u53f2\u4e0a\u4e00\u4e2a\u5212\u65f6\u4ee3\u7684\u7a33\u5b9a\u7684\u5927\u7248\u672c\u3002"),(0,n.kt)("h2",{id:"2014\u5e74configserver\u96c6\u7fa4\u7248v35"},"2014\u5e74\uff0cConfigServer\u96c6\u7fa4\u7248V3.5"),(0,n.kt)("p",null,"2013\u5e74\uff0c\u963f\u91cc\u5df4\u5df4\u5f00\u59cb\u843d\u5730\u4e86\u5f02\u5730\u591a\u6d3b\u65b9\u6848\uff0c\u4ece\u4e00\u4e2aIDC\u6e10\u6e10\u5f80\u591a\u4e2aIDC\u8de8\u8d8a\uff0c\u968f\u4e4b\u800c\u6765\u7684\u5bf9\u6d41\u91cf\u7684\u7cbe\u7ec6\u5316\u7ba1\u63a7\u8981\u6c42\u8d8a\u6765\u8d8a\u9ad8\uff08\u6bd4\u5982\u670d\u52a1\u7684\u540c\u673a\u623f\u8c03\u7528\uff0c\u670d\u52a1\u6d41\u91cf\u7684\u8c03\u62e8\u4ee5\u652f\u6301\u7070\u5ea6\u80fd\u529b\u7b49\uff09\uff0c\u57fa\u4e8e\u8fd9\u4e2a\u80cc\u666fConfigServer\u5f15\u5165\u4e86\u670d\u52a1\u5143\u6570\u636e\u7684\u6982\u5ff5\uff0c\u652f\u6301\u5bf9\u670d\u52a1\u548cIP\u8fdb\u884c\u5143\u6570\u636e\u7684\u6253\u6807\u6765\u6ee1\u8db3\u5404\u79cd\u5404\u6837\u7684\u670d\u52a1\u5206\u7ec4\u8bc9\u6c42\u3002"),(0,n.kt)("h2",{id:"2017\u5e74configserver\u96c6\u7fa4\u7248v40"},"2017\u5e74\uff0cConfigServer\u96c6\u7fa4\u7248V4.0"),(0,n.kt)("p",null,"V3\u7248\u672c\u53ef\u89c1\u7684\u4e00\u4e2a\u67b6\u6784\u7684\u95ee\u9898\u5c31\u662fdata\u96c6\u7fa4\u662f\u5b58\u50a8\u5168\u91cf\u7684\u670d\u52a1\u6570\u636e\u7684\uff0c\u8fd9\u4e2a\u968f\u7740\u670d\u52a1\u6570\u7684\u4e0e\u65e5\u4ff1\u589e\u4e00\u5b9a\u4f1a\u8d70\u5230\u5347\u7ea7\u7269\u7406\u673a\u914d\u7f6e\u4e5f\u65e0\u6cd5\u89e3\u51b3\u95ee\u9898\u7684\u60c5\u51b5\uff08\u6211\u4eec\u5f53\u65f6\u5df2\u7ecf\u5728\u751f\u4ea7\u4f7f\u7528\u4e86G1\u7684\u5783\u573e\u56de\u6536\u7b97\u6cd5\uff09\uff0c\u6240\u4ee5\u6211\u4eec\u7ee7\u7eed\u5bf9\u67b6\u6784\u8fdb\u884c\u5347\u7ea7\uff0c\u57fa\u4e8eV3\u7684\u67b6\u6784\u8fdb\u884c\u5347\u7ea7\u5176\u5b9e\u5e76\u4e0d\u590d\u6742\uff1bsession\u5c42\u7684\u8bbe\u8ba1\u4fdd\u6301\u4e0d\u53d8\uff0c\u6211\u4eec\u628adata\u8fdb\u884c\u5206\u7247\uff0c\u6bcf\u4e00\u4e2a\u5206\u7247\u540c\u6837\u6309\u7167\u96c6\u7fa4\u7684\u65b9\u5f0f\u90e8\u7f72\u4ee5\u652f\u6301failover\u7684\u80fd\u529b\uff1b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"ConfigServer"),(0,n.kt)("th",{parentName:"tr",align:null},"Eureka"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2008\u5e74"),(0,n.kt)("td",{parentName:"tr",align:null},"V1.0\uff1a\u5355\u673a\u7248\uff0c\u5b9a\u4e49\u4e86\u670d\u52a1\u53d1\u73b0\u7684\u9886\u57df\u6a21\u578b"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2009\u5e74\u521d"),(0,n.kt)("td",{parentName:"tr",align:null},"V1.5\uff1a\u5e94\u7528\u548cConfigServer\u96c6\u7fa4\u53d1\u5e03\u89e3\u8026"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2009\u5e747\u6708"),(0,n.kt)("td",{parentName:"tr",align:null},"V2.0\uff1a\u57fa\u4e8e\u5ba2\u6237\u7aef\u6a21\u5f0f\u540c\u6b65\u6570\u636e\uff0c\u652f\u6301\u96c6\u7fa4\u90e8\u7f72"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2010\u5e74\u5e95"),(0,n.kt)("td",{parentName:"tr",align:null},"V2.5\uff1a\u4f18\u5316\u96c6\u7fa4\u95f4\u6570\u636e\u540c\u6b65\u6a21\u5f0f\uff0c\u7533\u8bf7\u56fd\u5bb6\u4e13\u5229\u3002"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2012\u5e749\u67081\u53f7"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Eureka1.0\u6b63\u5f0f\u5f00\u6e90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2012\u5e74\u5e95"),(0,n.kt)("td",{parentName:"tr",align:null},"V3.0\uff1a\u652f\u6301session\u548cdata\u5206\u5c42\u90e8\u7f72"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2014\u5e74"),(0,n.kt)("td",{parentName:"tr",align:null},"V3.5\uff1a\u652f\u6301\u5f02\u5730\u591a\u6d3b\u7b49\u7ec6\u5206\u573a\u666f"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2015\u5e74"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Eureka2.0\u67b6\u6784\u5347\u7ea7\u65b9\u6848\u516c\u5e03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2017\u5e74"),(0,n.kt)("td",{parentName:"tr",align:null},"V4.0\uff1a\u652f\u6301data\u5206\u7247\u80fd\u529b"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2018\u5e747\u6708"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Eureka2.0\u67b6\u6784\u5347\u7ea7\u5ba3\u5e03\u505c\u6b62")))),(0,n.kt)("h1",{id:"nacos"},"Nacos"),(0,n.kt)("p",null,"\u4f5c\u4e3a\u540c\u5c5e\u4e8eAP\u7c7b\u578b\u7684\u6ce8\u518c\u4e2d\u5fc3\uff0cEureka\u548cConfigServer\u53d1\u5c55\u8fc7\u7a0b\u4e2d\u6240\u9762\u4e34\u7684\u8bf8\u591a\u95ee\u9898\u6709\u5f88\u5927\u7684\u76f8\u4f3c\u6027\uff0c\u4f46\u662f\u963f\u91cc\u5df4\u5df4\u8fd9\u4e9b\u5e74\u4e1a\u52a1\u7684\u8de8\u8d8a\u5f0f\u53d1\u5c55\uff0c\u6bcf\u5e74\u7ffb\u756a\u7684\u670d\u52a1\u89c4\u6a21\uff0c\u4e0d\u65ad\u7684\u7ed9ConfigServer\u7684\u6280\u672f\u67b6\u6784\u6f14\u8fdb\u5e26\u6765\u66f4\u9ad8\u7684\u8981\u6c42\u548c\u6311\u6218\uff0c\u6211\u4eec\u6709\u66f4\u591a\u7684\u673a\u4f1a\u5728\u751f\u4ea7\u73af\u5883\u53d1\u73b0\u548c\u89e3\u51b3\u4e00\u4e2a\u4e2a\u95ee\u9898\u7684\u8fc7\u7a0b\u4e2d\uff0c\u505a\u67b6\u6784\u7684\u4e00\u4ee3\u4ee3\u5347\u7ea7\u3002\u6211\u4eec\u6b63\u5728\u8ba1\u5212\u901a\u8fc7\u5f00\u6e90\u7684\u624b\u6bb5\u628a\u6211\u4eec\u8fd9\u4e9b\u5e74\u5728\u751f\u4ea7\u73af\u5883\u4e0a\u7684\u5b9e\u8df5\u7ecf\u9a8c\u901a\u8fc7Nacos(",(0,n.kt)("a",{parentName:"p",href:"http://nacos.io"},"\u94fe\u63a5"),")\u4ea7\u54c1\u8d21\u732e\u7ed9\u793e\u533a\uff0c\u4e00\u65b9\u9762\u80fd\u591f\u52a9\u529b\u548c\u6ee1\u8db3\u540c\u884c\u4eec\u5728\u5fae\u670d\u52a1\u843d\u5730\u8fc7\u7a0b\u5f53\u4e2d\u5bf9\u5de5\u4e1a\u7ea7\u6ce8\u518c\u4e2d\u5fc3\u7684\u8bc9\u6c42\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u5e0c\u671b\u901a\u8fc7\u5f00\u6e90\u793e\u533a\u53ca\u5f00\u6e90\u751f\u6001\u7684\u534f\u540c\u53d1\u5c55\u7ed9ConfigServer\u5e26\u6765\u66f4\u591a\u7684\u53ef\u80fd\u6027\u3002"),(0,n.kt)("p",null,"\u708e\u708e\u590f\u65e5\uff0c\u5728Eureka 2.0 (Discontinued) \u5373\u5c06\u7ed3\u675f\u7684\u65f6\u5019\uff0c\u5728\u540c\u6837\u7684\u4e91\u539f\u751f\u65f6\u4ee3\uff0cNacos\u5374\u6b63\u5728\u8fce\u6765\u65b0\u751f\uff0c\u6280\u672f\u6f14\u8fdb\u548c\u53d8\u8fc1\u7684\u8da3\u5473\u83ab\u8fc7\u4e8e\u6b64\u3002"),(0,n.kt)("p",null,"Nacos\u5c06\u52aa\u529b\u7ee7\u627fEureka\u672a\u7adf\u7684\u9057\u5fd7\uff0c\u625b\u7740AP\u7cfb\u6ce8\u518c\u4e2d\u5fc3\u7684\u65d7\u5e1c\u7ee7\u7eed\u524d\u884c\uff0c\u4e0d\u540c\u7684\u662fNacos\u66f4\u5173\u6ce8DNS-based Service Discovery\u4ee5\u53ca\u4e0eKubernetes\u4f53\u7cfb\u7684\u878d\u4f1a\u8d2f\u901a\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u770b\u4e0d\u900f\u672a\u6765\uff0c\u5374\u4ecd\u5c06\u4e0e\u540c\u884c\u4eec\u4e00\u8d77\u4e0a\u4e0b\u6c42\u7d22\uff0c\u7825\u783a\u524d\u884c\u3002"),(0,n.kt)("p",null,"\u6700\u540e\u9644\u4e0aNacos\u7684\u67b6\u6784\u56fe\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/12425/1530856061648-7180b97f-b61d-4127-924e-a0743b9e9d5a.png",alt:"\u5c4f\u5e55\u5feb\u7167 2018-06-28 \u4e0b\u53484.58.59.png | center | 748x544"})))}c.isMDXComponent=!0}}]);