"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2763],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),u=p,d=m["".concat(s,".").concat(u)]||m[u]||k[u]||r;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:p,o[1]=l;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=t(87462),p=(t(67294),t(3905));const r={title:"Namespace,endpoint \u6700\u4f73\u5b9e\u8df5",keywords:["namespace","endpoint","\u6700\u4f73\u5b9e\u8df5"],description:"\u968f\u7740\u4f7f\u7528 Nacos \u7684\u4f01\u4e1a\u8d8a\u6765\u8d8a\u591a\uff0c\u9047\u5230\u7684\u6700\u9891\u7e41\u7684\u4e24\u4e2a\u95ee\u9898\u5c31\u662f\uff1a\u5982\u4f55\u5728\u6211\u7684\u751f\u4ea7\u73af\u5883\u6b63\u786e\u7684\u6765\u4f7f\u7528 namespace \u4ee5\u53ca endpoint\u3002",date:new Date("2019-12-06T00:00:00.000Z")},o="Namespace, endpoint \u6700\u4f73\u5b9e\u8df5",l={permalink:"/en/blog/namespace-endpoint-best-practices",source:"@site/i18n/en/docusaurus-plugin-content-blog/namespace-endpoint-best-practices.md",title:"Namespace,endpoint \u6700\u4f73\u5b9e\u8df5",description:"\u968f\u7740\u4f7f\u7528 Nacos \u7684\u4f01\u4e1a\u8d8a\u6765\u8d8a\u591a\uff0c\u9047\u5230\u7684\u6700\u9891\u7e41\u7684\u4e24\u4e2a\u95ee\u9898\u5c31\u662f\uff1a\u5982\u4f55\u5728\u6211\u7684\u751f\u4ea7\u73af\u5883\u6b63\u786e\u7684\u6765\u4f7f\u7528 namespace \u4ee5\u53ca endpoint\u3002",date:"2019-12-06T00:00:00.000Z",formattedDate:"December 6, 2019",tags:[],readingTime:9.75,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Namespace,endpoint \u6700\u4f73\u5b9e\u8df5",keywords:["namespace","endpoint","\u6700\u4f73\u5b9e\u8df5"],description:"\u968f\u7740\u4f7f\u7528 Nacos \u7684\u4f01\u4e1a\u8d8a\u6765\u8d8a\u591a\uff0c\u9047\u5230\u7684\u6700\u9891\u7e41\u7684\u4e24\u4e2a\u95ee\u9898\u5c31\u662f\uff1a\u5982\u4f55\u5728\u6211\u7684\u751f\u4ea7\u73af\u5883\u6b63\u786e\u7684\u6765\u4f7f\u7528 namespace \u4ee5\u53ca endpoint\u3002",date:"2019-12-06T00:00:00.000Z"},prevItem:{title:"Nacos 1.3.0 new kernel construction process",permalink:"/en/blog/nacos-1.3.0-design"},nextItem:{title:"Pilot MCP\u534f\u8bae\u4ecb\u7ecd",permalink:"/en/blog/pilot mcp"}},s={authorsImageUrls:[]},i=[{value:"namespce",id:"namespce",level:2},{value:"namespace \u7684\u8bbe\u8ba1\u80cc\u666f",id:"namespace-\u7684\u8bbe\u8ba1\u80cc\u666f",level:3},{value:"namespace \u7684\u6700\u4f73\u5b9e\u8df5",id:"namespace-\u7684\u6700\u4f73\u5b9e\u8df5",level:3},{value:"\u5982\u4f55\u6765\u83b7\u53d6 namespace \u7684\u503c",id:"\u5982\u4f55\u6765\u83b7\u53d6-namespace-\u7684\u503c",level:3},{value:"namespace \u53c2\u6570\u521d\u59cb\u5316\u65b9\u5f0f",id:"namespace-\u53c2\u6570\u521d\u59cb\u5316\u65b9\u5f0f",level:3},{value:"endpoint",id:"endpoint",level:2},{value:"endpoint \u7684\u8bbe\u8ba1\u80cc\u666f",id:"endpoint-\u7684\u8bbe\u8ba1\u80cc\u666f",level:3},{value:"endpoint \u7684\u53c2\u6570\u521d\u59cb\u5316",id:"endpoint-\u7684\u53c2\u6570\u521d\u59cb\u5316",level:3}],c={toc:i},m="wrapper";function k(e){let{components:n,...t}=e;return(0,p.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u968f\u7740\u4f7f\u7528 Nacos \u7684\u4f01\u4e1a\u8d8a\u6765\u8d8a\u591a\uff0c\u9047\u5230\u7684\u6700\u9891\u7e41\u7684\u4e24\u4e2a\u95ee\u9898\u5c31\u662f\uff1a\u5982\u4f55\u5728\u6211\u7684\u751f\u4ea7\u73af\u5883\u6b63\u786e\u7684\u6765\u4f7f\u7528 namespace \u4ee5\u53ca endpoint\u3002\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u5c31\u662f\u9488\u5bf9\u8fd9\u4e24\u4e2a\u95ee\u9898\u6765\u804a\u804a\u4f7f\u7528 nacos \u8fc7\u7a0b\u4e2d\u5173\u4e8e\u8fd9\u4e24\u4e2a\u53c2\u6570\u914d\u7f6e\u7684\u6700\u4f73\u5b9e\u8df5\u65b9\u5f0f\u3002"),(0,p.kt)("h2",{id:"namespce"},"namespce"),(0,p.kt)("p",null,"\u5173\u4e8e namespace \uff0c\u4ee5\u4e0b\u4e3b\u8981\u4ece ",(0,p.kt)("strong",{parentName:"p"},"namespace \u7684\u8bbe\u8ba1\u80cc\u666f")," \u548c ",(0,p.kt)("strong",{parentName:"p"},"namespace \u7684\u6700\u4f73\u5b9e\u8df5")," \u4e24\u4e2a\u65b9\u9762\u6765\u8ba8\u8bba\u3002"),(0,p.kt)("h3",{id:"namespace-\u7684\u8bbe\u8ba1\u80cc\u666f"},"namespace \u7684\u8bbe\u8ba1\u80cc\u666f"),(0,p.kt)("p",null,"namespace \u7684\u8bbe\u8ba1\u662f nacos \u57fa\u4e8e\u6b64\u505a\u591a\u73af\u5883\u4ee5\u53ca\u591a\u79df\u6237\u6570\u636e(",(0,p.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u548c\u670d\u52a1"),")\u9694\u79bb\u7684\u3002\u5373\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4ece\u4e00\u4e2a\u79df\u6237(\u7528\u6237)\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u5982\u679c\u6709\u591a\u5957\u4e0d\u540c\u7684\u73af\u5883\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u6839\u636e\u6307\u5b9a\u7684\u73af\u5883\u6765\u521b\u5efa\u4e0d\u540c\u7684 namespce\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u591a\u73af\u5883\u7684\u9694\u79bb\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u6709\u65e5\u5e38\uff0c\u9884\u53d1\u548c\u751f\u4ea7\u4e09\u4e2a\u4e0d\u540c\u7684\u73af\u5883\uff0c\u90a3\u4e48\u4f7f\u7528\u4e00\u5957 nacos \u96c6\u7fa4\u53ef\u4ee5\u5206\u522b\u5efa\u4ee5\u4e0b\u4e09\u4e2a\u4e0d\u540c\u7684 namespace\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"http://edas.oss-cn-hangzhou.aliyuncs.com/deshao/pictures/nacos_ingle_tenant_namespace.jpg",alt:null})),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4ece\u591a\u4e2a\u79df\u6237(\u7528\u6237)\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u6bcf\u4e2a\u79df\u6237(\u7528\u6237)\u53ef\u80fd\u4f1a\u6709\u81ea\u5df1\u7684 namespace,\u6bcf\u4e2a\u79df\u6237(\u7528\u6237)\u7684\u914d\u7f6e\u6570\u636e\u4ee5\u53ca\u6ce8\u518c\u7684\u670d\u52a1\u6570\u636e\u90fd\u4f1a\u5f52\u5c5e\u5230\u81ea\u5df1\u7684 namespace \u4e0b\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u591a\u79df\u6237\u95f4\u7684\u6570\u636e\u9694\u79bb\u3002\u4f8b\u5982\u8d85\u7ea7\u7ba1\u7406\u5458\u5206\u914d\u4e86\u4e09\u4e2a\u79df\u6237\uff0c\u5206\u522b\u4e3a\u5f20\u4e09\u3001\u674e\u56db\u548c\u738b\u4e94\u3002\u5206\u914d\u597d\u4e86\u4e4b\u540e\uff0c\u5404\u79df\u6237\u7528\u81ea\u5df1\u7684\u8d26\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u540e\uff0c\u521b\u5efa\u81ea\u5df1\u7684\u547d\u540d\u7a7a\u95f4\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"http://edas.oss-cn-hangzhou.aliyuncs.com/deshao/pictures/nacos_multi_tenant_namespace.jpg",alt:null})),(0,p.kt)("p",null,"  ",(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u8be5\u529f\u80fd\u8fd8\u5728\u89c4\u5212\u4e2d\u3002"),(0,p.kt)("h3",{id:"namespace-\u7684\u6700\u4f73\u5b9e\u8df5"},"namespace \u7684\u6700\u4f73\u5b9e\u8df5"),(0,p.kt)("p",null,"\u5173\u4e8e namespace \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u8fd9\u90e8\u5206\u4e3b\u8981\u5305\u542b\u6709\u4e24\u4e2a Action\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6765\u83b7\u53d6 namespace \u7684\u503c"),(0,p.kt)("li",{parentName:"ul"},"namespace \u53c2\u6570\u521d\u59cb\u5316\u65b9\u5f0f")),(0,p.kt)("h3",{id:"\u5982\u4f55\u6765\u83b7\u53d6-namespace-\u7684\u503c"},"\u5982\u4f55\u6765\u83b7\u53d6 namespace \u7684\u503c"),(0,p.kt)("p",null,"\u65e0\u8bba\u60a8\u662f\u57fa\u4e8e Spring Cloud \u6216\u8005 Dubbo \u6765\u4f7f\u7528 nacos\uff0c\u90fd\u4f1a\u6d89\u53ca\u5230 namespace \u7684\u53c2\u6570\u8f93\u5165\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019 namespace \u7684\u503c\u4ece\u54ea\u91cc\u53ef\u4ee5\u83b7\u53d6\u5462\uff1f"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6ca1\u6709\u611f\u77e5\u5230\u8fd9\u4e2a\u53c2\u6570\u7684\u8f93\u5165\uff0c\u90a3\u4e48 nacos \u7edf\u4e00\u4f1a\u4f7f\u7528\u4e00\u4e2a\u9ed8\u8ba4\u7684 namespace \u4f5c\u4e3a\u8f93\u5165\uff0cnacos naming \u4f1a\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"public")," \u4f5c\u4e3a\u9ed8\u8ba4\u7684\u53c2\u6570\u6765\u521d\u59cb\u5316\uff0cnacos config \u4f1a\u4f7f\u7528\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"p"},"\u7a7a\u5b57\u7b26\u4e32"),"\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u53c2\u6570\u6765\u521d\u59cb\u5316\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u9700\u8981\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684 namespace\uff0c\u90a3\u4e48\u8fd9\u4e2a\u503c\u8be5\u600e\u4e48\u6765\u4ea7\u751f\uff1f"),(0,p.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728 nacos \u7684\u63a7\u5236\u53f0\u5de6\u8fb9\u529f\u80fd\u4fa7\u770b\u5230\u6709\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4")," \u7684\u529f\u80fd\uff0c\u70b9\u51fb\u5c31\u53ef\u4ee5\u770b\u5230 ",(0,p.kt)("strong",{parentName:"p"},"\u65b0\u5efa\u547d\u540d\u7a7a\u95f4")," \u7684\u6309\u94ae\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u547d\u540d\u7a7a\u95f4\u4e86\u3002\u521b\u5efa\u6210\u529f\u4e4b\u540e\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4ID"),"\uff0c\u4e3b\u8981\u662f\u7528\u6765\u907f\u514d",(0,p.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u540d\u79f0"),"\u6709\u53ef\u80fd\u4f1a\u51fa\u73b0\u91cd\u540d\u7684\u60c5\u51b5\u3002\u56e0\u6b64\u5f53\u60a8\u5728\u5e94\u7528\u4e2d\u9700\u8981\u914d\u7f6e\u6307\u5b9a\u7684 namespace \u65f6\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u586b\u5165\u7684\u662f\u547d\u540d\u7a7a\u95f4ID"),"\u3002\u91cd\u8981\u7684\u4e8b\u60c5\u8bf4\u4e09\u904d\uff1a"),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},"\u5f53\u60a8\u5728\u5e94\u7528\u4e2d\u9700\u8981\u914d\u7f6e\u6307\u5b9a\u7684 namespace \u65f6\uff0c",(0,p.kt)("strong",{parentName:"li"},"\u586b\u5165\u7684\u662f\u547d\u540d\u7a7a\u95f4 ID")),(0,p.kt)("li",{parentName:"ol"},"\u5f53\u60a8\u5728\u5e94\u7528\u4e2d\u9700\u8981\u914d\u7f6e\u6307\u5b9a\u7684 namespace \u65f6\uff0c",(0,p.kt)("strong",{parentName:"li"},"\u586b\u5165\u7684\u662f\u547d\u540d\u7a7a\u95f4 ID")),(0,p.kt)("li",{parentName:"ol"},"\u5f53\u60a8\u5728\u5e94\u7528\u4e2d\u9700\u8981\u914d\u7f6e\u6307\u5b9a\u7684 namespace \u65f6\uff0c",(0,p.kt)("strong",{parentName:"li"},"\u586b\u5165\u7684\u662f\u547d\u540d\u7a7a\u95f4 ID"))))),(0,p.kt)("p",null,"\u8bf4\u660e: namesace \u4e3a ",(0,p.kt)("strong",{parentName:"p"},"public")," \u662f nacos \u7684\u4e00\u4e2a\u4fdd\u7559\u63a7\u4ef6\uff0c\u5982\u679c\u60a8\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 namespace\uff0c\u6700\u597d\u4e0d\u8981\u548c ",(0,p.kt)("strong",{parentName:"p"},"public")," \u91cd\u540d\uff0c\u4ee5\u4e00\u4e2a\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u6709\u5177\u4f53\u8bed\u4e49\u7684\u540d\u5b57\u6765\u547d\u540d\uff0c\u4ee5\u514d\u5e26\u6765\u5b57\u9762\u4e0a\u4e0d\u5bb9\u6613\u533a\u5206\u81ea\u5df1\u662f\u54ea\u4e00\u4e2a namespace\u3002"),(0,p.kt)("h3",{id:"namespace-\u53c2\u6570\u521d\u59cb\u5316\u65b9\u5f0f"},"namespace \u53c2\u6570\u521d\u59cb\u5316\u65b9\u5f0f"),(0,p.kt)("p",null,"nacos client \u5bf9 namespace \u7684\u521d\u59cb\u5316\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a:"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"http://edas.oss-cn-hangzhou.aliyuncs.com/deshao/nacos/nacos_namespace.jpg",alt:null})),(0,p.kt)("p",null,"nacos client \u5bf9 namespace \u7684\u521d\u59cb\u5316\uff0c\u4e3b\u8981\u5305\u542b\u4e24\u90e8\u5206\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u7528\u6237\u6001\u901a\u8fc7 nacos client \u6784\u9020\u5b9e\u4f8b\u65f6\u901a\u8fc7 properties \u53c2\u6570\u4f20\u5165\u7684 namespace\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u4e91\u73af\u5883\u4e0b(",(0,p.kt)("strong",{parentName:"p"},"\u963f\u91cc\u4e91\u4e0b\u7684 EDAS"),")\u7684 namespace \u53c2\u6570\u89e3\u6790\u3002"),(0,p.kt)("p",{parentName:"li"},"\u53ef\u901a\u8fc7 ",(0,p.kt)("strong",{parentName:"p"},"-Dnacos.use.cloud.namespace.parsing=true/false")," \u6765\u63a7\u5236\u662f\u5426\u9700\u8981\u5728\u4e91\u73af\u5883\u81ea\u52a8\u89e3\u6790 namespace \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"true"),"\uff0c\u662f\u4f1a\u81ea\u52a8\u89e3\u6790\uff0c\u5176\u76ee\u7684\u5c31\u662f\u65b9\u4fbf\u7528\u6237\u4e0a\u4e91\u65f6\u53ef\u4ee5\u4ee5\u96f6\u6210\u672c\u7684\u65b9\u5f0f\u5e73\u6ed1\u4e0a\u4e91\u3002\u5982\u679c\u7528\u6237\u5728\u4e91\u4e0a\u9700\u8981\u7528\u81ea\u5efa\u7684 nacos \u4e0b\u7684 namespace\uff0c\u90a3\u8fd9\u4e2a\u65f6\u5019\u53ea\u9700\u5c06 ",(0,p.kt)("strong",{parentName:"p"},"-Dnacos.use.cloud.namespace.parsing=false")," \u5373\u53ef\u3002"))),(0,p.kt)("h2",{id:"endpoint"},"endpoint"),(0,p.kt)("p",null,"\u5173\u4e8e endpoint \uff0c\u4e5f\u4e3b\u8981\u4ece ",(0,p.kt)("strong",{parentName:"p"},"endpoint \u7684\u8bbe\u8ba1\u80cc\u666f")," \u548c ",(0,p.kt)("strong",{parentName:"p"},"endpoint \u7684\u53c2\u6570\u521d\u59cb\u5316")," \u4e24\u4e2a\u65b9\u9762\u6765\u8ba8\u8bba\u3002"),(0,p.kt)("h3",{id:"endpoint-\u7684\u8bbe\u8ba1\u80cc\u666f"},"endpoint \u7684\u8bbe\u8ba1\u80cc\u666f"),(0,p.kt)("p",null,"\u5f53 nacos server \u96c6\u7fa4\u9700\u8981\u6269\u7f29\u5bb9\u65f6\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u6709\u4e00\u79cd\u80fd\u529b\u80fd\u591f\u53ca\u65f6\u611f\u77e5\u5230\u96c6\u7fa4\u53d1\u751f\u53d8\u5316\u3002\u53ca\u65f6\u611f\u77e5\u5230\u96c6\u7fa4\u7684\u53d8\u5316\u662f\u901a\u8fc7 endpoint \u6765\u5b9e\u73b0\u7684\u3002\u4e5f\u5373\u5ba2\u6237\u7aef\u4f1a\u5b9a\u65f6\u7684\u5411 endpoint \u53d1\u9001\u8bf7\u6c42\u6765\u66f4\u65b0\u5ba2\u6237\u7aef\u5185\u5b58\u4e2d\u7684\u96c6\u7fa4\u5217\u8868\u3002"),(0,p.kt)("h3",{id:"endpoint-\u7684\u53c2\u6570\u521d\u59cb\u5316"},"endpoint \u7684\u53c2\u6570\u521d\u59cb\u5316"),(0,p.kt)("p",null,"Nacos Client \u63d0\u4f9b\u4e00\u79cd\u53ef\u4ee5\u5bf9\u4f20\u5165\u7684 endpoint \u53c2\u6570\u89c4\u5219\u89e3\u6790\u7684\u80fd\u529b\u3002\u5373\u5f53\u901a\u8fc7\u6784\u9020\u51fd\u6570\u7684 ",(0,p.kt)("strong",{parentName:"p"},"properties")," \u6765\u521d\u59cb\u5316 endpoint \u65f6\uff0c\u6307\u5b9a\u7684 endpoint \u503c\u53ef\u4ee5\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5360\u4f4d\u7b26\u7684\u5f62\u5f0f\uff0c\u5982\u4e0b\u6240\u793a: "),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"\\${endpoint.options:defaultValue}"),"\u3002")),(0,p.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"endpoint.options")," \u662f\u4e00\u4e2a\u5177\u4f53\u7684\u53d8\u91cf\u3002\u652f\u6301\u4ece\u7cfb\u7edf\u5c5e\u6027\uff0c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\u8bfb\u53d6\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"defaultValue")," \u662f\u7ed9\u51fa\u7684\u4e00\u4e2a\u9ed8\u8ba4\u503c\u3002\u5f53\u4ece\u5177\u4f53\u7684\u53d8\u91cf\u4e2d\u6ca1\u6709\u88ab\u6b63\u786e\u521d\u59cb\u5316\u65f6\uff0c\u4f1a\u4f7f\u7528\u7ed9\u51fa\u7684\u9ed8\u8ba4\u503c\u6765\u521d\u59cb\u5316\u3002")),(0,p.kt)("p",null,"\u6574\u4e2a endpoint \u7684\u89e3\u6790\u89c4\u5219\u6bd4\u8f83\u590d\u6742\uff0c\u6574\u4f53\u7684\u4e00\u4e2a\u89e3\u6790\u6d41\u7a0b\u56fe\u5982\u4e0b\u6240\u793a:"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"http://edas.oss-cn-hangzhou.aliyuncs.com/deshao/nacos/nacos_endpoint.jpg",alt:null}),"\t"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u84dd\u8272\u7279\u522b\u533a\u5206\u7684\u662f\u652f\u6301\u4e91\u73af\u5883\u4e0b(\u963f\u91cc\u4e91\u4e0a\u7684 EDAS)\u81ea\u52a8\u4ece\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\u6765\u8bfb\u53d6 endpoint \u503c\uff0c\u4ee5\u6b64\u6765\u8fbe\u5230\u7528\u6237\u672c\u5730\u5f00\u53d1\u6216\u8005\u5c06\u5e94\u7528\u5f80\u4e91\u4e0a\u8fc1\u79fb\u7684\u65f6\u5019\u4ee5\u96f6\u6210\u672c\u7684\u6539\u9020\u65b9\u5f0f\u5b9e\u73b0\u5e73\u6ed1\u4e0a\u4e91\u3002"),(0,p.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5f00\u542f endpoint \u53c2\u6570\u89c4\u5219\u89e3\u6790"),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u5728\u521d\u59cb\u5316 Nacos Client \u7684\u65f6\u5019\uff0c\u6ca1\u6709\u901a\u8fc7 properties \u6765\u6307\u5b9a endpoint\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f1a\u4ece\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\u53d8\u91cf\u540d\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"ALIBABA","_","ALIWARE","_","ENDPOINT","_","URL")," \u6307\u5b9a\u7684\u503c\u6765\u521d\u59cb\u5316\uff0c\u5982\u679c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e5f\u6ca1\u6709\u8bbe\u7f6e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u8bbe\u7f6e\u4e86 endpoint\uff0c")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u7684 endpoint \u662f\u4e00\u4e2a\u6307\u5b9a\u5177\u4f53\u7684\u503c\u3002"),(0,p.kt)("p",{parentName:"li"},"\u8fd9\u65f6\u4f1a\u5148\u4ece\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\u53d8\u91cf\u540d\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"ALIBABA","_","ALIWARE","_","ENDPOINT","_","URL")," \u6307\u5b9a\u7684\u503c\u6765\u521d\u59cb\u5316\uff0c\u5982\u679c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u6ca1\u6709\u8bbe\u7f6e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u7528\u7528\u6237\u6001\u4f20\u5165\u7684\u5177\u4f53\u503c\u6765\u521d\u59cb\u5316 endpoint\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ee5\u5360\u4f4d\u7b26\u7684\u5f62\u5f0f\u8f93\u5165\u3002"),(0,p.kt)("p",{parentName:"li"},"\u8fd9\u65f6\u4f1a\u89e3\u6790\u51fa\u5177\u4f53\u5360\u4f4d\u7b26\u7684\u503c\uff0c\u7136\u540e:"),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4f9d\u6b21\u4ece\u7cfb\u7edf\u5c5e\u6027\u548c\u73af\u5883\u53d8\u91cf\u4e2d\u6765\u53d6\u503c\u3002"),(0,p.kt)("p",{parentName:"li"}," \u4f8b\u5982\uff0c\u60a8\u8f93\u5165\u7684\u662f ",(0,p.kt)("strong",{parentName:"p"},"${nacos.endpoint:defaultValue}"),"\uff0c\u90a3\u4e48\u89e3\u6790\u51fa\u6765\u7684\u5360\u4f4d\u7b26\u662f ",(0,p.kt)("strong",{parentName:"p"},"nacos.endpoint"),"\u3002\u89e3\u6790\u51fa\u6765\u540e\uff0c\u4f1a\u5148\u8bfb\u53d6\u7cfb\u7edf\u5c5e\u6027\u4e2d(",(0,p.kt)("strong",{parentName:"p"},'\u5373 System.getProperty("nacos.endpoint")'),")\u662f\u5426\u8bbe\u7f6e\u4e86 ",(0,p.kt)("strong",{parentName:"p"},"nacos.endpoint")," \u53d8\u91cf\u503c\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5219\u4f1a\u4ece\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\u53d8\u91cf\u540d\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"nacos.endpoint")," \u6307\u5b9a\u7684\u503c\u6765\u521d\u59cb\u5316\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u901a\u8fc7\u89e3\u6790\u51fa\u6765\u7684\u5360\u4f4d\u7b26\u8fd8\u6ca1\u6709\u6b63\u786e\u521d\u59cb\u5316 endpoint\uff0c\u5219\u4f1a\u4ece\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\u53d8\u91cf\u540d\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"ALIBABA","_","ALIWARE","_","ENDPOINT","_","URL")," \u6307\u5b9a\u7684\u503c\u6765\u521d\u59cb\u5316\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u7ecf\u8fc7\u4ee5\u4e0a\u4e24\u6b65\u8fd8\u6ca1\u6709\u88ab\u521d\u59cb\u5316\uff0c\u8fd9\u65f6\u5982\u679c\u60a8\u8bbe\u7f6e\u4e86\u9ed8\u8ba4\u503c\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u503c\u6765\u521d\u59cb\u5316 endpoint\uff0c\u5426\u5219\u7684\u8bdd\u4ee5\u89e3\u6790\u51fa\u6765\u7684\u5360\u4f4d\u7b26\u8fd4\u56de\u3002\t")))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5173\u95ed endpoint \u53c2\u6570\u89c4\u5219\u89e3\u6790"),(0,p.kt)("p",{parentName:"li"},"\u5f53\u5173\u95ed\u4e86 endpoint \u53c2\u6570\u89c4\u5219\u89e3\u6790\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4ee5\u7528\u6237\u6001\u5728\u6784\u9020 Nacos Client \u65f6\u901a\u8fc7 properties \u53c2\u6570\u8f93\u5165\u7684 endpoint \u503c\u4e3a\u4e3b\u3002"))),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c Nacos Client \u662f\u5f00\u542f endpoint \u53c2\u6570\u89c4\u5219\u89e3\u6790\u7684\u80fd\u529b\u3002\u5982\u679c\u4f60\u60f3\u5173\u95ed\u8be5\u80fd\u529b\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5e2e\u60a8\u6765\u5b9e\u73b0\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u53ef\u5728 Nacos Client \u521d\u59cb\u5316\u7684\u65f6\u5019\u5728\u4f20\u5165\u7684 properties \u5b9e\u4f8b\u4e2d\u6307\u5b9a key \u4e3a ",(0,p.kt)("strong",{parentName:"li"},"isUseEndpointParsingRule"),"\uff0c\u503c\u4e3a ",(0,p.kt)("strong",{parentName:"li"},"false")," \u5373\u53ef\u5173\u95ed\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u7684\u5e94\u7528\u662f Java \u7a0b\u5e8f\u7684\u5e94\u7528\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("strong",{parentName:"li"},"-Dnacos.use.endpoint.parsing.rule=false")," \u6765\u5173\u95ed\u3002 ")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5176\u4e2d\u7b2c\u4e00\u79cd\u65b9\u5f0f\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002"))}k.isMDXComponent=!0}}]);