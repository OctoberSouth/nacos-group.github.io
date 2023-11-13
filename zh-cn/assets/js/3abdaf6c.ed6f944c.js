"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[9304],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=u(a),s=l,c=k["".concat(d,".").concat(s)]||k[s]||m[s]||i;return a?n.createElement(c,r(r({ref:t},o),{},{components:a})):n.createElement(c,r({ref:t},o))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[k]="string"==typeof e?e:l,r[1]=p;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},31841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const i={title:"\u53c2\u6570\u6821\u9a8c",keywords:["\u53c2\u6570\u6821\u9a8c","\u4f7f\u7528\u89c4\u5219"],description:"\u53c2\u6570\u6821\u9a8c",date:new Date("2023-10-24T00:00:00.000Z")},r="\u53c2\u6570\u6821\u9a8c",p={unversionedId:"v2/guide/user/parameters-check",id:"v2/guide/user/parameters-check",title:"\u53c2\u6570\u6821\u9a8c",description:"\u53c2\u6570\u6821\u9a8c",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/v2/guide/user/parameters-check.md",sourceDirName:"v2/guide/user",slug:"/v2/guide/user/parameters-check",permalink:"/zh-cn/docs/next/v2/guide/user/parameters-check",draft:!1,tags:[],version:"current",frontMatter:{title:"\u53c2\u6570\u6821\u9a8c",keywords:["\u53c2\u6570\u6821\u9a8c","\u4f7f\u7528\u89c4\u5219"],description:"\u53c2\u6570\u6821\u9a8c",date:"2023-10-24T00:00:00.000Z"},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh-cn/docs/next/v2/guide/user/faq"},next:{title:"Java\u5ba2\u6237\u7aef\u5bb9\u707e",permalink:"/zh-cn/docs/next/v2/guide/user/failover"}},d={},u=[{value:"\u53c2\u6570\u6821\u9a8c\u5f00\u5173",id:"\u53c2\u6570\u6821\u9a8c\u5f00\u5173",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u53c2\u6570\u6821\u9a8c\u89c4\u5219",id:"\u53c2\u6570\u6821\u9a8c\u89c4\u5219",level:2},{value:"1. namespaceShowName",id:"1-namespaceshowname",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",level:4},{value:"2. namespaceId/tenant/namespace",id:"2-namespaceidtenantnamespace",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-1",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-1",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-1",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-1",level:4},{value:"3. dataId",id:"3-dataid",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-2",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-2",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-2",level:4},{value:"Java SDK\u793a\u4f8b",id:"java-sdk\u793a\u4f8b",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-2",level:4},{value:"4. service/serviceName",id:"4-serviceservicename",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-3",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-3",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-3",level:4},{value:"Java SDK\u793a\u4f8b",id:"java-sdk\u793a\u4f8b-1",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-3",level:4},{value:"5. group/groupName",id:"5-groupgroupname",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-4",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-4",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-4",level:4},{value:"Java SDK\u793a\u4f8b",id:"java-sdk\u793a\u4f8b-2",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-4",level:4},{value:"6. cluster/clusterName",id:"6-clusterclustername",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-5",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-5",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-5",level:4},{value:"Java SDK\u793a\u4f8b",id:"java-sdk\u793a\u4f8b-3",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-5",level:4},{value:"7. ip",id:"7-ip",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-6",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-6",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-6",level:4},{value:"Java SDK\u793a\u4f8b",id:"java-sdk\u793a\u4f8b-4",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-6",level:4},{value:"8. port",id:"8-port",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-7",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-7",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-7",level:4},{value:"Java SDK\u793a\u4f8b",id:"java-sdk\u793a\u4f8b-5",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-7",level:4},{value:"9. metadata",id:"9-metadata",level:3},{value:"\u53c2\u6570\u63cf\u8ff0",id:"\u53c2\u6570\u63cf\u8ff0-8",level:4},{value:"\u6821\u9a8c\u89c4\u5219",id:"\u6821\u9a8c\u89c4\u5219-8",level:4},{value:"OpenAPI\u793a\u4f8b",id:"openapi\u793a\u4f8b-8",level:4},{value:"Java SDK\u793a\u4f8b",id:"java-sdk\u793a\u4f8b-6",level:4},{value:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f",id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-8",level:4}],o={toc:u},k="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53c2\u6570\u6821\u9a8c"},"\u53c2\u6570\u6821\u9a8c"),(0,l.kt)("p",null,"2.3.0\u7248\u672c\u4e4b\u524d\u7684Nacos\u7684\u53c2\u6570\u6821\u9a8c\u903b\u8f91\u5206\u6563\uff0c\u7531\u5404\u7c7b\u8bf7\u6c42\u7684\u5904\u7406\u65b9\u6cd5\u5355\u72ec\u8fdb\u884c\u6821\u9a8c\uff0c\u96be\u4ee5\u66f4\u6539\u7ef4\u62a4\uff0c\u7ecf\u5e38\u51fa\u73b0\u53c2\u6570\u6821\u9a8c\u7684\u9057\u6f0f\uff0c\u53c2\u6570\u6821\u9a8c\u7684\u89c4\u5219\u4e5f\u6ca1\u6709\u660e\u786e\u7edf\u4e00\uff1b\u8fd9\u4f7f\u5f97\u7528\u6237\u4f7f\u7528\u65f6\u7ecf\u5e38\u4f1a\u56e0\u4e3a\u4e00\u4e9b\u7279\u6b8a\u5b57\u7b26\u5bfc\u81f4\u529f\u80fd\u4e0d\u7b26\u5408\u9884\u671f\u6216\u51fa\u73b0\u6f0f\u6d1e\uff0c\u751a\u81f3\u5bfc\u81f4\u5927\u91cf\u63a8\u9001\uff0c\u5bfc\u81f4\u5e26\u5bbd\u6253\u6ee1\uff0c\u5185\u5b58\u5360\u7528\u8fc7\u591a\uff0c\u5bfc\u81f4\u5e94\u7528\u51fa\u73b0\u6545\u969c\u3002"),(0,l.kt)("p",null,"\u57282.3.0\u7248\u672c\u4e2d\uff0cNacos\u660e\u786e\u4e86\u53c2\u6570\u6821\u9a8c\u89c4\u5219\uff0c\u5728\u670d\u52a1\u7aef\u5b9e\u73b0\u4e86\u7edf\u4e00\u7684\u53c2\u6570\u6821\u9a8c\u903b\u8f91\u5e76\u6dfb\u52a0\u4e86\u53c2\u6570\u6821\u9a8c\u5c42\uff0c\u6839\u636e\u6821\u9a8c\u89c4\u5219\u5bf9\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u9001\u7684\u8bf7\u6c42\u8fdb\u884c\u6821\u9a8c\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u5f00\u542f\u53c2\u6570\u6821\u9a8c\u529f\u80fd\uff0c\u5f00\u542f\u540eNacos\u5c06\u4f1a\u5bf9\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u9001\u7684\u8bf7\u6c42\u4e2d\u7684\u90e8\u5206\u53c2\u6570\u8fdb\u884c\u53c2\u6570\u6821\u9a8c\uff0c\u786e\u4fdd\u53c2\u6570\u7684\u5408\u6cd5\u6027\uff0c\u907f\u514d\u7531\u4e8e\u9519\u8bef\u4f7f\u7528\uff0c\u5bfc\u81f4\u7684\u4e0d\u7b26\u5408\u9884\u671f\u4ee5\u53ca\u6027\u80fd\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570\u6821\u9a8c\u5f00\u5173"},"\u53c2\u6570\u6821\u9a8c\u5f00\u5173"),(0,l.kt)("h3",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u7684\u53c2\u6570\u6821\u9a8c\u529f\u80fd",(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u5f00\u542f"),"\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"${nacos.home}/conf"),"\u76ee\u5f55\u4e0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u6587\u4ef6\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"nacos.core.param.check.enabled"),"\u503c\u9009\u62e9\u5f00\u542f\u6216\u8005\u5173\u95ed\u670d\u52a1\u7aef\u53c2\u6570\u6821\u9a8c\u529f\u80fd\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nacos.core.param.check.enabled=true"),"\u65f6\u5f00\u542fNacos\u670d\u52a1\u7aef\u53c2\u6570\u6821\u9a8c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u5173\u95ed\u670d\u52a1\u7aef\u53c2\u6570\u6821\u9a8c"),(0,l.kt)("h3",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,l.kt)("p",null,"\u5f85\u5b9e\u73b0"),(0,l.kt)("h2",{id:"\u53c2\u6570\u6821\u9a8c\u89c4\u5219"},"\u53c2\u6570\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5f00\u542f\u53c2\u6570\u6821\u9a8c\u540eOpenAPI\u6587\u6863 \u548c SDK\u6587\u6863\u4e2d\u7684\u6240\u6709\u63a5\u53e3\u4e2d\u7684\u76f8\u5173\u53c2\u6570\u90fd\u4f1a\u63a5\u53d7\u683c\u5f0f\u6821\u9a8c\uff0c\u73b0\u5bf9\u76f8\u5173\u53c2\u6570\u4ee5\u53ca\u6821\u9a8c\u89c4\u5219\u8fdb\u884c\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u5b57\u7b26\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6821\u9a8c\u89c4\u5219"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"256"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u6b62",(0,l.kt)("inlineCode",{parentName:"td"},"@#$%^&*"),"\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"[^@#$%^&*]+$"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4ID"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},'\u53ea\u5141\u8bb8\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf\u4ee5\u53ca"-"\u5b57\u7b26\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a',(0,l.kt)("inlineCode",{parentName:"td"},"^[\\w-]+"),"\uff5c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"256"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u5141\u8bb8\u5b57\u6bcd\u6570\u5b57\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"td"},"_-.:"),"\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"^[a-zA-Z0-9-_:\\.]*$"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"512"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u6b62\u4e2d\u6587\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"@@"),"\u4e14\u7981\u6b62\u4ee5",(0,l.kt)("inlineCode",{parentName:"td"},"@"),"\u5f00\u5934\uff0c\u7981\u6b62\u7a7a\u767d\u5b57\u7b26\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f",(0,l.kt)("inlineCode",{parentName:"td"},"^(?!@).((?!@@)[^\\u4E00-\\u9FA5])*$"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"128"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u5141\u8bb8\u5b57\u6bcd\u6570\u5b57\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"td"},"_-.:"),"\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"^[a-zA-Z0-9-_:\\.]*$"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u5141\u8bb8\u6570\u5b57\u5b57\u6bcd\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"-_"),"\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f",(0,l.kt)("inlineCode",{parentName:"td"},"^[0-9a-zA-Z-_]+$"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"128"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u6b62\u4e2d\u6587\u5b57\u7b26\u548c\u7a7a\u767d\u5b57\u7b26\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"^[^\\u4E00-\\u9FA5]*$"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"0\uff5e65535"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u5143\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"1024"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u52a0\u5b57\u6bb5\u503c\u7684\u603b\u957f\u5ea6\u5c0f\u4e8e1024\u4e2a\u5b57\u7b26")))),(0,l.kt)("h3",{id:"1-namespaceshowname"},"1. namespaceShowName"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\u540d\u79f0"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5b57\u7b26\u957f\u5ea6\u6700\u5927\u4e3a256\uff0c\u7981\u6b62",(0,l.kt)("inlineCode",{parentName:"p"},"@#$%^&*"),",\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"[^@#$%^&*]+$")),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u547d\u540d\u7a7a\u95f4"))),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa\u957f\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'namespaceShowName' is illegal, the param length should not exceed 256.")),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6cd5\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'namespaceShowName' is illegal, illegal characters should not appear in the param."))),(0,l.kt)("h3",{id:"2-namespaceidtenantnamespace"},"2. namespaceId/tenant/namespace"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-1"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u547d\u540d\u7a7a\u95f4ID\uff08\u79df\u6237\u7a7a\u95f4\uff09"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-1"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,'\u5b57\u7b26\u957f\u5ea6\u6700\u5927\u4e3a64\uff0c\u53ea\u5141\u8bb8\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf\u4ee5\u53ca"-"\u5b57\u7b26\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a',(0,l.kt)("inlineCode",{parentName:"p"},"^[\\w-]+")),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-1"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u83b7\u53d6\u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u6ce8\u518c\u5b9e\u4f8b"))),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-1"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa\u957f\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'namespaceId/tenant' is illegal, the param length should not exceed 64.")),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6cd5\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'namespaceId/tenant' is illegal, illegal characters should not appear in the param."))),(0,l.kt)("h3",{id:"3-dataid"},"3. dataId"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-2"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u914d\u7f6e\u540d\u79f0"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-2"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5b57\u7b26\u957f\u5ea6\u6700\u5927\u4e3a256\uff0c\u53ea\u5141\u8bb8\u5b57\u6bcd\u6570\u5b57\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"_-.:"),"\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"^[a-zA-Z0-9-_:\\.]*$")),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-2"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u53d1\u5e03\u914d\u7f6e")),(0,l.kt)("h4",{id:"java-sdk\u793a\u4f8b"},"Java SDK\u793a\u4f8b"),(0,l.kt)("p",null,"\u76d1\u542c\u914d\u7f6e\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"public void addListener(String dataId, String group, Listener listener) ")),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-2"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa\u957f\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'dataId' is illegal, the param length should not exceed 512.")),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6cd5\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'dataId' is illegal, illegal characters should not appear in the param."))),(0,l.kt)("h3",{id:"4-serviceservicename"},"4. service/serviceName"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-3"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u670d\u52a1\u540d\u79f0"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-3"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5b57\u7b26\u957f\u5ea6\u6700\u5927\u4e3a512\uff0c\u7981\u6b62\u4e2d\u6587\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"@@"),"\u4e14\u7981\u6b62\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\u5f00\u5934\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f",(0,l.kt)("inlineCode",{parentName:"p"},"^(?!@).((?!@@)[^\\u4E00-\\u9FA5])*$")),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-3"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u6ce8\u518c\u5b9e\u4f8b")),(0,l.kt)("h4",{id:"java-sdk\u793a\u4f8b-1"},"Java SDK\u793a\u4f8b"),(0,l.kt)("p",null,"\u6ce8\u518c\u5b9e\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"void registerInstance(String serviceName, String ip, int port) throws NacosException; ")),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-3"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa\u957f\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'serviceName' is illegal, the param length should not exceed 512.")),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6cd5\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'serviceName' is illegal, illegal characters should not appear in the param."))),(0,l.kt)("h3",{id:"5-groupgroupname"},"5. group/groupName"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-4"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u5206\u7ec4\u540d\u79f0"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-4"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5b57\u7b26\u957f\u5ea6\u6700\u5927\u4e3a128\uff0c\u53ea\u5141\u8bb8\u5b57\u6bcd\u6570\u5b57\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"_-.:"),"\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"^[a-zA-Z0-9-_:\\.]*$")),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-4"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u67e5\u8be2\u5b9e\u4f8b\u5217\u8868")),(0,l.kt)("h4",{id:"java-sdk\u793a\u4f8b-2"},"Java SDK\u793a\u4f8b"),(0,l.kt)("p",null,"\u5220\u9664\u914d\u7f6e\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"public boolean removeConfig(String dataId, String group) throws NacosException ")),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-4"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa\u957f\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'group' is illegal, the param length should not exceed 512.")),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6cd5\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'group' is illegal, illegal characters should not appear in the param."))),(0,l.kt)("h3",{id:"6-clusterclustername"},"6. cluster/clusterName"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-5"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u96c6\u7fa4\u540d\u79f0"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-5"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5b57\u7b26\u957f\u5ea6\u6700\u5927\u4e3a64\uff0c\u53ea\u5141\u8bb8\u6570\u5b57\u5b57\u6bcd\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"-_"),"\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f",(0,l.kt)("inlineCode",{parentName:"p"},"^[0-9a-zA-Z-_]+$")),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-5"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u66f4\u65b0\u5b9e\u4f8b")),(0,l.kt)("h4",{id:"java-sdk\u793a\u4f8b-3"},"Java SDK\u793a\u4f8b"),(0,l.kt)("p",null,"\u83b7\u53d6\u5168\u90e8\u5b9e\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"List<Instance> getAllInstances(String serviceName, List<String> clusters) throws NacosException;")),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-5"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa\u957f\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'cluster' is illegal, the param length should not exceed 64.")),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6cd5\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'cluster' is illegal, illegal characters should not appear in the param."))),(0,l.kt)("h3",{id:"7-ip"},"7. ip"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-6"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"IP\u5730\u5740"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-6"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5b57\u7b26\u957f\u5ea6\u6700\u5927\u4e3a128\uff0c\u7981\u6b62\u4e2d\u6587\u5b57\u7b26\uff0c\u5bf9\u5e94\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"^[^\\u4E00-\\u9FA5]*$")),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-6"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u67e5\u8be2\u6307\u5b9a\u670d\u52a1\u7684\u5b9e\u4f8b\u5217\u8868")),(0,l.kt)("h4",{id:"java-sdk\u793a\u4f8b-4"},"Java SDK\u793a\u4f8b"),(0,l.kt)("p",null,"\u6ce8\u9500\u5b9e\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"void deregisterInstance(String serviceName, String ip, int port, String clusterName) throws NacosException;")),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-6"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa\u957f\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'ip' is illegal, the param length should not exceed 128.")),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6cd5\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Param 'ip' is illegal, illegal characters should not appear in the param."))),(0,l.kt)("h3",{id:"8-port"},"8. port"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-7"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7aef\u53e3\u53f7"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-7"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u53d6\u503c\u8303\u56f4\u4e3a0\uff5e65535"),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-7"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u66f4\u65b0\u5b9e\u4f8b")),(0,l.kt)("h4",{id:"java-sdk\u793a\u4f8b-5"},"Java SDK\u793a\u4f8b"),(0,l.kt)("p",null,"\u6ce8\u9500\u5b9e\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"void deregisterInstance(String serviceName, String ip, int port, String clusterName) throws NacosException;")),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-7"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("p",null,"\u7aef\u53e3\u53d6\u503c\u8d85\u51fa\u8303\u56f4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Param 'port' is illegal, the value should be between 0 and 65535")),(0,l.kt)("h3",{id:"9-metadata"},"9. metadata"),(0,l.kt)("h4",{id:"\u53c2\u6570\u63cf\u8ff0-8"},"\u53c2\u6570\u63cf\u8ff0"),(0,l.kt)("p",null,"\u5b9e\u4f8b\u5143\u6570\u636e"),(0,l.kt)("h4",{id:"\u6821\u9a8c\u89c4\u5219-8"},"\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u5b57\u6bb5\u540d\u52a0\u5b57\u6bb5\u503c\u7684\u603b\u957f\u5ea6\u5c0f\u4e8e1024\u4e2a\u5b57\u7b26"),(0,l.kt)("h4",{id:"openapi\u793a\u4f8b-8"},"OpenAPI\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/guide/user/open-api"},"\u66f4\u65b0\u5b9e\u4f8b")),(0,l.kt)("h4",{id:"java-sdk\u793a\u4f8b-6"},"Java SDK\u793a\u4f8b"),(0,l.kt)("p",null,"\u6ce8\u518c\u5b9e\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"void registerInstance(String serviceName, Instance instance) throws NacosException;")),(0,l.kt)("h4",{id:"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f-8"},"\u6821\u9a8c\u5931\u8d25\u62a5\u9519\u4fe1\u606f"),(0,l.kt)("p",null,"\u5b9e\u4f8b\u603b\u957f\u5ea6\u8d85\u51fa\u8303\u56f4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Param 'Metadata' is illegal, the param length should not exceed %d.")))}m.isMDXComponent=!0}}]);