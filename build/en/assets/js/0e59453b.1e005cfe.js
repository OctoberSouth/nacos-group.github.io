"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,h=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Nacos 1.1.4\u53d1\u5e03\uff0c\u4e1a\u754c\u7387\u5148\u652f\u6301Istio MCP\u534f\u8bae",keywords:["Nacos 1.1.4","nacos"],description:"Nacos\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u670d\u52a1\u53d1\u73b0\u4e0e\u914d\u7f6e\u7ba1\u7406\u9879\u76ee\uff0c\u672c\u6b21\u53d1\u5e03\u76841.1.4\u7248\u672c\uff0c\u4e3b\u8981\u5e26\u6765\u7684\u662f\u4e0eIstio\u7684\u5bf9\u63a5\u529f\u80fd\uff0c\u4f7f\u7528\u7684\u662fIstio\u6700\u65b0\u7684MCP\u534f\u8bae\u3002",date:new Date("2019-10-24T00:00:00.000Z")},o="Nacos 1.1.4\u53d1\u5e03\uff0c\u4e1a\u754c\u7387\u5148\u652f\u6301Istio MCP\u534f\u8bae",s={permalink:"/en/blog/nacos 1.1.4",source:"@site/i18n/en/docusaurus-plugin-content-blog/nacos 1.1.4.md",title:"Nacos 1.1.4\u53d1\u5e03\uff0c\u4e1a\u754c\u7387\u5148\u652f\u6301Istio MCP\u534f\u8bae",description:"Nacos\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u670d\u52a1\u53d1\u73b0\u4e0e\u914d\u7f6e\u7ba1\u7406\u9879\u76ee\uff0c\u672c\u6b21\u53d1\u5e03\u76841.1.4\u7248\u672c\uff0c\u4e3b\u8981\u5e26\u6765\u7684\u662f\u4e0eIstio\u7684\u5bf9\u63a5\u529f\u80fd\uff0c\u4f7f\u7528\u7684\u662fIstio\u6700\u65b0\u7684MCP\u534f\u8bae\u3002",date:"2019-10-24T00:00:00.000Z",formattedDate:"October 24, 2019",tags:[],readingTime:7.365,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 1.1.4\u53d1\u5e03\uff0c\u4e1a\u754c\u7387\u5148\u652f\u6301Istio MCP\u534f\u8bae",keywords:["Nacos 1.1.4","nacos"],description:"Nacos\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u670d\u52a1\u53d1\u73b0\u4e0e\u914d\u7f6e\u7ba1\u7406\u9879\u76ee\uff0c\u672c\u6b21\u53d1\u5e03\u76841.1.4\u7248\u672c\uff0c\u4e3b\u8981\u5e26\u6765\u7684\u662f\u4e0eIstio\u7684\u5bf9\u63a5\u529f\u80fd\uff0c\u4f7f\u7528\u7684\u662fIstio\u6700\u65b0\u7684MCP\u534f\u8bae\u3002",date:"2019-10-24T00:00:00.000Z"},prevItem:{title:"Pilot MCP\u534f\u8bae\u4ecb\u7ecd",permalink:"/en/blog/pilot mcp"},nextItem:{title:"Nacos\u6574\u5408Confd\uff0c\u652f\u6301nginx\u914d\u7f6e\u7ba1\u7406",permalink:"/en/blog/nacos-confd"}},l={authorsImageUrls:[]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nacos\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u670d\u52a1\u53d1\u73b0\u4e0e\u914d\u7f6e\u7ba1\u7406\u9879\u76ee\uff0c\u672c\u6b21\u53d1\u5e03\u76841.1.4\u7248\u672c\uff0c\u4e3b\u8981\u5e26\u6765\u7684\u662f\u4e0eIstio\u7684\u5bf9\u63a5\u529f\u80fd\uff0c\u4f7f\u7528\u7684\u662fIstio\u6700\u65b0\u7684MCP\u534f\u8bae\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5305\u62ec\u8fd9\u4e2a\u529f\u80fd\u5728\u5185\u7684\u65b0\u7248\u672c\u53d1\u5e03\u7684\u529f\u80fd\u3002"),(0,r.kt)("a",{name:"GdnN0"}),"## \u5347\u7ea7\u6307\u5357",(0,r.kt)("a",{name:"SXacG"}),"#### \u670d\u52a1\u7aef 0.8.0\u53ca\u4ee5\u4e0a\u7248\u672c\uff1a",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u89e3\u538b\u5b89\u88c5\u5305\u540e\u66ff\u6362{nacos.home}/target/nacos-server.jar"),(0,r.kt)("li",{parentName:"ol"},"\u9010\u53f0\u91cd\u542fNacos Server\u5373\u53ef")),(0,r.kt)("p",null,"0.8.0\u4ee5\u4e0b\u7248\u672c\uff0c\u5148\u5347\u7ea7\u52301.0.0\u7248\u672c\u3002"),(0,r.kt)("a",{name:"CNPhB"}),"#### \u5ba2\u6237\u7aef \u66ff\u6362pom\u4f9d\u8d56\u5373\u53ef\u3002",(0,r.kt)("a",{name:"07ZzZ"}),"## \u652f\u6301Istio MCP\u534f\u8bae \u8fd9\u662f\u672c\u6b21\u7248\u672c\u6700\u5927\u7684\u66f4\u65b0\uff0c\u4e3b\u8981\u662f\u5b9e\u73b0\u4e86Nacos\u670d\u52a1\u6570\u636e\u5f80Istio\u4e0b\u53d1\u7684\u529f\u80fd\uff0c\u4e5f\u662f\u76ee\u524d\u4e1a\u754c\u6240\u6709\u6ce8\u518c\u4e2d\u5fc3\u91cc\u9762\u7b2c\u4e00\u4e2a\u7531\u5b98\u65b9\u63d0\u4f9b\u7684MCP\u534f\u8bae\u5bf9\u63a5\u7248\u672c\u3002Pilot\u6700\u65b0\u7684\u8bbe\u8ba1\u4e2d\uff0c\u662f\u4f7f\u7528MCP\u534f\u8bae\u6765\u4e0e\u6240\u6709\u540e\u7aef\u7684\u6570\u636e\u6e90\u8fdb\u884c\u4ea4\u4e92\u7684\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u53ef\u4ee5\u89e3\u8026\u6240\u6709\u6269\u5c55\u7ec4\u4ef6\u7684\u4ee3\u7801\uff0cPilot\u4fdd\u6301\u8f7b\u91cf\u7684\u903b\u8f91\uff0c\u5728\u4ee3\u7801\u8d28\u91cf\u3001\u7ec4\u4ef6\u7a33\u5b9a\u6027\u53ca\u6269\u5c55\u6027\u65b9\u9762\u90fd\u5927\u5e45\u63d0\u5347\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u4e00\u4e0bPilot\u5b98\u65b9\u63d0\u4f9b\u7684Pilot\u8bbe\u8ba1\u56fe\uff08\u5730\u5740\uff1a[https://docs.google.com/document/d/1S5ygkxR1alNI8cWGG4O4iV8zp8dA6Oc23zQCvFxr83U/edit#heading=h.k34grc1as8vr](https://docs.google.com/document/d/1S5ygkxR1alNI8cWGG4O4iV8zp8dA6Oc23zQCvFxr83U/edit#heading=h.k34grc1as8vr)\uff09\uff1a",(0,r.kt)("br",null),"![image.png](https://cdn.nlark.com/yuque/0/2019/png/333810/1572940023007-e19f92da-a5a1-41f0-b37e-db8a678ad57f.png#align=left&display=inline&height=455&name=image.png&originHeight=659&originWidth=1080&search=&size=360963&status=done&width=746)",(0,r.kt)("br",null),"\u56fe1 Pilot\u7684\u6700\u65b0\u8bbe\u8ba1\u6982\u5ff5\u56fe",(0,r.kt)("p",null,"\u867d\u7136\u5728\u8bbe\u8ba1\u56fe\u4e2d\uff0cPilot\u540e\u7aef\u7684MCP Server\u5df2\u7ecf\u6709\u4e86Consul\u3001Eureka\u7b49\uff0c\u4f46\u662f\u8fd9\u4e9b\u9879\u76ee\u76ee\u524d\u90fd\u6ca1\u6709\u5b98\u65b9\u652f\u6301\u7684MCP Server\u3002Nacos\u662f\u76ee\u524d\u9996\u4e2a\u5b98\u65b9\u652f\u6301Istio MCP\u534f\u8bae\u7684\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u5173\u4e8eMCP\u534f\u8bae\u7684\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u53c2\u8003Istio\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/istio/api/tree/master/mcp"},"\u6587\u6863"),"\u3002Nacos\u5b9e\u73b0\u7684MCP Server\uff0c\u76ee\u524d\u4f7f\u7528\u7684\u662f\u5355\u4e2a\u670d\u52a1\u7f16\u53f7\uff0c\u5168\u91cf\u670d\u52a1\u63a8\u9001\u7684\u6a21\u5f0f\uff0c\u56e0\u4e3a\u76ee\u524dPilot\u8fd8\u4e0d\u652f\u6301\u589e\u91cf\u7684\u670d\u52a1\u6570\u636e\u63a8\u9001\uff08Nacos 1.1.4\u53d1\u5e03\u4e4b\u540e\uff0cPilot\u5df2\u7ecf\u652f\u6301\u4e86endpoint\u7ea7\u522b\u7684\u589e\u91cf\u63a8\u9001\uff0cNacos\u4e5f\u4f1a\u5728\u4e0b\u4e2a\u7248\u672c\u652f\u6301\uff09\u3002\u5b9e\u73b0\u7684\u903b\u8f91\u5c31\u662f\u542f\u52a8\u4e00\u4e2agRPC Server\u6765\u8fdb\u884cMCP\u6570\u636e\u7684\u4f20\u8f93\uff0c\u4ee3\u7801\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/tree/develop/istio"},"https://github.com/alibaba/nacos/tree/develop/istio"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1572940023014-089f4517-840c-4f6e-ae29-2c308926d069.png#align=left&display=inline&height=365&name=image.png&originHeight=730&originWidth=1372&search=&size=300144&status=done&width=686",alt:"image.png"}),(0,r.kt)("br",null),"\u56fe2 Nacos MCP Server\u67b6\u6784"),(0,r.kt)("p",null,"\u4f7f\u7528Nacos MCP Server\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6700\u65b0\u7684Nacos 1.1.4\u5b89\u88c5\u5305\uff0c\u89e3\u538b\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6eapplication.properties\uff0c\u7136\u540e\u91cd\u542fNacos\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"nacos.istio.mcp.server.enabled=true\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679cNacos\u662f\u96c6\u7fa4\u90e8\u7f72\uff0c\u5219\u53ea\u9700\u8981\u914d\u7f6e\u4e00\u53f0Server\u542f\u52a8MCP Server\u5373\u53ef\uff0c\u56e0\u4e3a\u6bcf\u53f0Nacos Server\u7684\u6570\xa0 \xa0\xa0\xa0 \xa0\xa0\u636e\u90fd\u662f\u5168\u91cf\u7684\u3002\u540c\u65f6Nacos MCP Server\u4f7f\u7528\u7684\u7aef\u53e3\u662f18848\uff0c\u8bf7\u6ce8\u610f\u7aef\u53e3\u662f\u5426\u51b2\u7a81\uff1b"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6ePilot\u4f7f\u7528Nacos MCP Server\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"configSources\n-- address: x.x.x.x:18848\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u91cd\u542fPilot\uff1b")),(0,r.kt)("a",{name:"srliR"}),"## \u81ea\u5b9a\u4e49\u5b9e\u4f8bID \u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0cInstance\u7c7b\u7684instanceId\u5b57\u6bb5\uff0c\u662f\u7528\u6765\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\u8fd9\u4e2ainstance\u7684\u5c5e\u6027\uff0c\u5b83\u7684\u503c\u9ed8\u8ba4\u662f\u4e0d\u80fd\u7531\u5ba2\u6237\u7aef\u6765\u6307\u5b9a\u7684\u3002\u57281.1.4\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86\u5141\u8bb8\u5ba2\u6237\u7aef\u81ea\u5b9a\u4e49ID\u4ee5\u53ca\u4e00\u4e2a\u65b0\u589e\u52a0\u7684instanceId\u751f\u6210\u7b97\u6cd5\uff1a\u4e00\u4e2a\u670d\u52a1\u5185\u552f\u4e00\u7684\u6574\u6570\uff0c\u8fd9\u4e2a\u6574\u6570\u53ef\u4ee5\u7528\u6765\u4f5c\u4e3a\u5b9e\u4f8b\u5728\u670d\u52a1\u5185\u7684\u552f\u4e00\u7d22\u5f15\u3002\u8fd9\u4e2a\u529f\u80fd\u7531vettal-wu\u8d21\u732e\uff0c\u975e\u5e38\u611f\u8c22\u3002",(0,r.kt)("p",null,"\u8fd9\u4e2a\u6574\u5f62instanceId\u7684\u4f7f\u7528\u65b9\u5f0f\u4e3a\u5728\u6ce8\u518c\u65f6\u914d\u7f6einstance\u7684metadata\uff0c\u6307\u5b9a\u4f7f\u7528\u8be5id\u751f\u6210\u7b97\u6cd5\uff0c\u6837\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Instance instance = new Instance();\ninstance.setIp("1.1.1.1");\ninstance.setPort(80);\n// \u5fc5\u987b\u8bbe\u7f6eephemeral=false\uff0c\u6765\u4fdd\u8bc1\u670d\u52a1\u7aef\u4f7f\u7528\u7684\u662f\u4e25\u683c\u7684\u4e00\u81f4\u6027\u534f\u8bae\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u751f\u6210\u7684instance id\u51b2\u7a81\uff1a\ninstance.setEhpemeral(false);\ninstance.setMetadata(new HashMap<String, String>());\ninstance.getMetadata().put(PreservedMetadataKeys.INSTANCE_ID_GENERATOR, Constants.SNOWFLAKE_INSTANCE_ID_GENERATOR);\n')),(0,r.kt)("p",null,"Nacos\u5728\u8fd9\u4e2a\u7248\u672c\u4e5f\u6709\u4e00\u4e9b\u5173\u4e8e\u4ee3\u7801\u8d28\u91cf\u4e0a\u7684\u4f18\u5316\u66f4\u65b0\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u80031.1.4\u7248\u672cissue\u5217\u8868\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues?q=is%3Aissue+milestone%3A1.1.4"},"https://github.com/alibaba/nacos/issues?q=is%3Aissue+milestone%3A1.1.4"),"\u3002"),(0,r.kt)("a",{name:"B7djZ"}),"## \u5982\u4f55\u5171\u5efa",(0,r.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u4f60\u9700\u8981\u79ef\u6781\u53c2\u4e0eNacos\u793e\u533a\u3002\u5982\u679c\u60a8\u5728\u6587\u6863\u4e2d\u53d1\u73b0\u62fc\u5199\u9519\u8bef\uff0c\u5728\u4ee3\u7801\u4e2d\u53d1\u73b0\u9519\u8bef\uff0c\u6216\u60f3\u8981\u65b0\u529f\u80fd\u6216\u60f3\u8981\u63d0\u4f9b\u5efa\u8bae\uff0c\u60a8\u53ef\u4ee5",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/Nacos/issues/new"},"\u5728GitHub\u4e0a\u521b\u5efa\u4e00\u4e2aissues"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5f00\u59cb\u7740\u624b\uff0c\u53ef\u4ee5\u9009\u62e9github\u4ed3\u5e93\u4e2d\u6709\u4ee5\u4e0b\u6807\u7b7e\u7684issues\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/good%20first%20issue"},"good first issue"),"\uff1a\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u662f\u975e\u5e38\u597d\u7684\u5165\u95e8issues\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/contribution%20%E6%AC%A2%E8%BF%8E"},"contribution welcome"),"\uff1a\u975e\u5e38\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u548c\u975e\u5e38\u91cd\u8981\u7684\u6a21\u5757\uff0c\u4f46\u76ee\u524d\u7f3a\u5c11\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u8d21\u732e\u8005\u6765\u8d21\u732e\u3002")),(0,r.kt)("a",{name:"7ddae8a4"}),"## \u84ec\u52c3\u53d1\u5c55\u7684 Nacos \u793e\u533a",(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DISS is cheap, show me your hand\n\u6bd4\u5410\u69fd\u66f4\u91cd\u8981\u7684\u662f\u642d\u628a\u624b\uff0c\u53c2\u4e0e\u793e\u533a\u4e00\u8d77\u53d1\u5c55Nacos")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u7528\u6237\u5173\u6ce8\u548c\u52a0\u5165 Nacos \u793e\u533a")),(0,r.kt)("p",null,"Nacos \u793e\u533a\u6b63\u5728\u84ec\u52c3\u53d1\u5c55\uff0c\u622a\u6b62\u5230\u53d1\u6587\u4e3a\u6b62\uff0cNacos \u77ed\u77ed\u51e0\u4e2a\u6708\u5df2\u7ecf\u6709 9 \u4e2a\u5fae\u4fe1\u7fa4\uff0c\u5176\u4e2d 7 \u4e2a\u5df2\u6ee1\u5458\uff0c1\u4e2aQQ\u7fa4\uff0c1\u4e2a\u9489\u9489\u7fa4\uff0c\u5173\u6ce8 Nacos \u7684\u793e\u533a\u4eba\u6570\u5df2\u7ecf\u8fd15000\u4eba\uff0c\u5728 Nacos \u7fa4\u91cc\u8ddf \u201c\u9053\uff08\u57fa\uff09\u53cb\u201d \u5207\u78cb\u6280\u672f\uff0c\u4ea4\u6d41\u7ecf\u9a8c\uff0c\u62db\u8058\u4ea4\u53cb\uff0c\u62a2\u62a2\u7ea2\u5305...\u4e0d\u4ea6\u4e50\u4e4e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1572940023025-5e1cf910-5e80-4353-8b47-d0565a65bbda.png#align=left&display=inline&height=998&name=image.png&originHeight=998&originWidth=1786&search=&size=298649&status=done&width=1786",alt:"image.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4ee3\u7801\u8d21\u732e\u8005\u52a0\u5165 Nacos \u793e\u533a")),(0,r.kt)("p",null,"\u4eceNacos\u7528\u6237\u53d1\u5c55\u800c\u6210\u8d21\u732e\u8005\u987a\u7406\u6210\u7ae0\uff0c\u800cNacos\u5f00\u53d1\u56e2\u961f\u4e5f\u786e\u5b9e\u5728\u65e5\u8d8b\u58ee\u5927\uff0c\u4ece\u5f00\u59cb\u7684\u53ea\u67094\u4e2a\u4ee3\u7801contributor\u53d1\u5c55\u5230\u76ee\u524d\u768440\u591a\u4e2a\uff0c1.1.4\u7248\u672c\u4e2d\uff0c\u53c2\u4e0eNacos\u4ed3\u5e93\u8d21\u732e\u7684\u5f00\u53d1\u8005\u6709\uff1astackisok,loadchange, ly641921791, EZLippi, rushsky518, universefeeler, nkorange, vettal-wu, beldon\u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15914/1542704700864-a9d54856-9bf6-4176-b449-c13fa02c5800.png#align=left&display=inline&height=387&linkTarget=_blank&originHeight=888&originWidth=1716&width=748#align=left&display=inline&height=386&originHeight=888&originWidth=1716&search=&status=done&width=746",alt:null})),(0,r.kt)("a",{name:"2461e1c0"}),'## \u65b0\u4eba\u65f6\u523b - "\u4ec0\u4e48\u662fNacos\uff1f"',(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd8\u4e0d\u77e5\u9053\u4ec0\u4e48\u662fNacos? \u6ca1\u5173\u7cfb\uff0c\u5728github\u4e0astar\u4e00\u4e0b\u8ddf\u7a0b\u5e8f\u733f\u5144\u5f1f\u6253\u4e2a\u62db\u547c\u5427!!")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"Nacos"),"\xa0\u662f\u963f\u91cc\u5df4\u5df4\u4e8e2018\u5e747\u6708\u4efd\u65b0\u5f00\u6e90\u7684\u9879\u76ee\uff0cNacos\u7684\u4e3b\u8981\u613f\u666f\u662f\u671f\u671b\u901a\u8fc7\u63d0\u4f9b\u6613\u7528\u7684\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001\u670d\u52a1\u53d1\u73b0"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u914d\u7f6e\u7ba1\u7406"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406"),"\xa0\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1572940023011-845b558c-5af1-4e75-8f6e-4aee37cdbb44.png#align=left&display=inline&height=332&name=image.png&originHeight=664&originWidth=1614&search=&size=282270&status=done&width=807",alt:"image.png"})),(0,r.kt)("p",null,"github\u9879\u76ee\u5730\u5740\u5728\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"\u8fd9\u91cc")),(0,r.kt)("a",{name:"f26dbb6d"}),"## \u66f4\u591a\u4e0e Nacos \u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dubbo/dubbo-registry-nacos"},"Dubbo Registry Nacos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-coredns-plugin"},"Nacos DNS-F")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-docker"},"Nacos Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring Project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba"},"Spring Cloud Alibaba")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://dubbo.io/"},"Dubbo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/Sentinel"},"Sentinel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://projects.spring.io/spring-cloud/"},"Spring Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Nepxion/Discovery"},"Nepxion Discovery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SpringCloud/spring-cloud-gateway-nacos"},"Spring Cloud Gateway Nacos"))),(0,r.kt)("a",{name:"aswNK"}),"## \u4e0b\u671f\u9884\u544a Nacos\u7684\u4e0b\u4e2a\u7248\u672c\u662f1.2.0\u7248\u672c\uff0c\u5c06\u4f1a\u652f\u6301\u793e\u533a\u5e7f\u6cdb\u5173\u6ce8\u7684\u6743\u9650\u63a7\u5236\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85\u3002")}m.isMDXComponent=!0}}]);