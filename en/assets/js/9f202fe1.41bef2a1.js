"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79046],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={slug:"release/3.14.0",title:"Release 3.14.0",authors:["harry"],tags:["release"]},i=void 0,o={permalink:"/en/blog/release/3.14.0",source:"@site/blog/2024-01-13-release-3.14.md",title:"Release 3.14.0",description:"2024 \u65b0\u5e74\u5feb\u4e50\u3002",date:"2024-01-13T00:00:00.000Z",formattedDate:"January 13, 2024",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:4.235,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.14.0",title:"Release 3.14.0",authors:["harry"],tags:["release"]},nextItem:{title:"Release 3.13.0",permalink:"/en/blog/release/3.13.0"}},p={authorsImageUrls:[void 0]},s=[{value:"\u5168\u65b0\u7684 CacheManager \u7ec4\u4ef6",id:"\u5168\u65b0\u7684-cachemanager-\u7ec4\u4ef6",level:2},{value:"Swagger \u7ec4\u4ef6\u7684\u5168\u65b0\u6e32\u67d3\u65b9\u5f0f",id:"swagger-\u7ec4\u4ef6\u7684\u5168\u65b0\u6e32\u67d3\u65b9\u5f0f",level:2},{value:"\u670d\u52a1\u5de5\u5382\u5b9e\u4f8b\u652f\u6301\u4f18\u5148\u7ea7",id:"\u670d\u52a1\u5de5\u5382\u5b9e\u4f8b\u652f\u6301\u4f18\u5148\u7ea7",level:2},{value:"\u66f4\u591a\u7684\u53d8\u5316",id:"\u66f4\u591a\u7684\u53d8\u5316",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2024 \u65b0\u5e74\u5feb\u4e50\u3002"),(0,r.kt)("p",null,"\u5347\u7ea7\u8bf7\u53c2\u8003  ",(0,r.kt)("a",{parentName:"p",href:"/docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,r.kt)("p",null,"\u672c\u6b21 3.14 \u7248\u672c\uff0c\u91cd\u5199\u4e86 Cache \u7ec4\u4ef6\uff0c\u540c\u65f6\u4e5f\u5e26\u6765\u4e86\u4e00\u4e9b\u65b0\u7684\u7279\u6027\uff0c\u6211\u4eec\u5c06\u4e00\u4e00\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"\u5168\u65b0\u7684-cachemanager-\u7ec4\u4ef6"},"\u5168\u65b0\u7684 CacheManager \u7ec4\u4ef6"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7248\u672c\uff0cMidway \u5c06\u5e95\u5c42\u4f9d\u8d56\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"cache-manager")," \u6a21\u5757\u5347\u7ea7\u5230\u4e86 v5 \u7248\u672c\uff0c\u7531\u4e8e\u5b58\u5728 Breaking Change\uff0c\u542f\u7528\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/cache-manager")," \u7ec4\u4ef6\uff0c\u539f\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/cache")," \u7ec4\u4ef6\u4e0d\u518d\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u5728\u65b0\u7ec4\u4ef6\u4e2d\uff0c\u63d0\u4f9b\u4e86\u88c5\u9970\u5668 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Caching")," \u7528\u4e8e\u5feb\u901f\u7f13\u5b58\u51fd\u6570\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Caching('default', 100)\nasync invokeData(name: string) {\n  return name;\n}\n")),(0,r.kt)("p",null,"\u90a3\u4e48\uff0c\u5728\u591a\u6b21\u8c03\u7528\u65f6\u5c31\u4f1a\u7f13\u5b58\u8fd4\u56de\u503c\uff0c\u5982\u679c\u8d85\u65f6\uff0c\u5219\u4f1a\u8fd4\u56de\u65b0\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await invokeData('harry'); // => harry\nawait invokeData('harry1'); // => harry\nawait invokeData('harry2'); // => harry\nawait sleep(100);\nawait invokeData('harry3'); // => harry3\n")),(0,r.kt)("p",null,"\u8fd9\u5728\u4e00\u4e9b\u6027\u80fd\u654f\u611f\u7684\u573a\u666f\u4f1a\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@Caching")," \u88c5\u9970\u5668\u8fd8\u652f\u6301\u591a\u7ea7\u7f13\u5b58\uff0c\u5982\u679c\u4e00\u4e2a\u7f13\u5b58\u5b9e\u4f8b\u914d\u7f6e\u4e86\u591a\u4e2a Store\uff0c\u90a3\u4e48\u5b83\u5c06\u81ea\u52a8\u6839\u636e\u7f13\u5b58\u7684\u987a\u5e8f\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u7ec4\u4ef6\u901a\u8fc7\u65b0\u8bbe\u8ba1\u5668\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," \u65b9\u6cd5\u652f\u6301\u590d\u7528 Redis \u7ec4\u4ef6\u7684\u914d\u7f6e\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStore } from '@midwayjs/cache-manager-redis';\n\n// src/config/config.default.ts\nexport default {\n  cacheManager: {\n    clients: {\n      default: {\n        store: createStore('default'),\n        // ...\n      },\n    },\n  },\n  redis: {\n    clients: {\n      default: {\n        port: 6379,\n        host: '127.0.0.1',\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e0b\u4e0d\u518d\u9700\u8981\u914d\u7f6e Redis \u591a\u904d\u4e86\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u529f\u80fd\u53ef\u4ee5\u63a5\u7740\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/extensions/caching"},"\u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"swagger-\u7ec4\u4ef6\u7684\u5168\u65b0\u6e32\u67d3\u65b9\u5f0f"},"Swagger \u7ec4\u4ef6\u7684\u5168\u65b0\u6e32\u67d3\u65b9\u5f0f"),(0,r.kt)("p",null,"\u7531\u4e8e\u4e4b\u524d\u7684\u7248\u672c\u65e0\u6cd5\u4f20\u9012 ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger-ui")," \u53c2\u6570\uff0c\u8fd9\u4e2a\u7248\u672c\u8bbe\u8ba1\u4e86\u4e00\u7ec4\u65b0\u7684 UI \u6e32\u67d3\u65b9\u5f0f\uff0c\u5c3d\u53ef\u80fd\u7684\u5e2e\u52a9\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49 UI\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"renderSwaggerUIDist")," \uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"renderJSON")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"renderSwaggerUIRemote")," \u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u65b9\u5f0f\u8fdb\u884c\u6e32\u67d3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nimport { renderSwaggerUIRemote } from '@midwayjs/swagger';\n\nexport default {\n  // ...\n  swagger: {\n    swaggerUIRender: renderSwaggerUIRemote,\n    swaggerUIRenderOptions: {\n      // ...\n    }\n  },\n}\n")),(0,r.kt)("p",null,"\u53ea\u8981\u7f51\u7edc\u73af\u5883\u5141\u8bb8\uff0c\u5373\u4f7f\u4e0d\u518d\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger-ui-dist")," \u5305\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 CDN \u8d44\u6e90\u52a0\u8f7d UI\uff0c\u8fdb\u4e00\u6b65\u51cf\u8f7b\u670d\u52a1\u7aef\u538b\u529b\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4ec5\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger JSON")," \u5185\u5bb9\uff0c\u4e0d\u63d0\u4f9b UI\uff0c\u8fd9\u90fd\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u968f\u5fc3\u914d\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u5de5\u5382\u5b9e\u4f8b\u652f\u6301\u4f18\u5148\u7ea7"},"\u670d\u52a1\u5de5\u5382\u5b9e\u4f8b\u652f\u6301\u4f18\u5148\u7ea7"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7248\u672c\u53ef\u4ee5\u9488\u5bf9\u521b\u5efa\u51fa\u7684\u5b9e\u4f8b\u8bbe\u7f6e\u4e0d\u540c\u7684\u5b9e\u4f8b\u4f18\u5148\u7ea7\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nimport { DEFAULT_PRIORITY } from '@midwayjs/core';\n\nexport default {\n  redis: {\n    clients: {\n      instance1: {\n        // ...\n      },\n      instance2: {\n        // ...\n      }\n    },\n    priority: {\n      instance1: DEFAULT_PRIORITY.L1,\n      instance2: DEFAULT_PRIORITY.L3,\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5b9e\u4f8b\u4f18\u5148\u7ea7\u4e0d\u5f71\u54cd\u5b9e\u4f8b\u672c\u8eab\u7684\u529f\u80fd\uff0c\u4ec5\u5bf9\u5b9e\u73b0\u4e86\u4f18\u5148\u7ea7\u5224\u65ad\u7684\u5916\u90e8\u903b\u8f91\u751f\u6548\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5728\u5065\u5eb7\u68c0\u67e5\u65f6\u53ef\u4ee5\u6839\u636e\u4f18\u5148\u7ea7\u8fdb\u884c\u5ffd\u7565\uff0c\u4f4e\u4f18\u5148\u7ea7\u7684\u5b9e\u4f8b\u7b49\u4ef7\u4e8e\u5f31\u4f9d\u8d56\uff0c\u4f1a\u8df3\u8fc7\u5065\u5eb7\u68c0\u67e5\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u529f\u80fd\u76ee\u524d\u4ec5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"HealthService")," \u5728\u4f7f\u7528\uff0c\u7406\u8bba\u4e0a\u522b\u7684\u903b\u8f91\u4e5f\u53ef\u80fd\u4f1a\u7528\u5230\uff0c\u6211\u4eec\u671f\u5f85\u66f4\u591a\u7684\u53ef\u80fd\u6027\u3002"),(0,r.kt)("h2",{id:"\u66f4\u591a\u7684\u53d8\u5316"},"\u66f4\u591a\u7684\u53d8\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/releases"},"mikro-orm")," \u4e8e 2024.01.08 \u65e5\u53d1\u5e03\u4e86 v6 \u7248\u672c\uff0c\u73b0\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"@midwayjs/mikro")," \u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u914d\u5408 v6 \u7248\u672c\u4f7f\u7528\u4e86"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@midwayjs/redis")," \u589e\u52a0\u4e86\u57fa\u4e8e\u5b9e\u4f8b\u4f18\u5148\u7ea7\u7684\u5065\u5eb7\u68c0\u67e5\u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5de5\u5382\u589e\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"getClients()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"getClientKeys()")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5feb\u901f\u8fed\u4ee3\u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u590d\u4e86 swagger \u7ec4\u4ef6 ApiOperation \u76f8\u5173\u7684\u4e00\u4e9b\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"mwtsc \u5de5\u5177\u4fee\u590d\u4e86 windows \u4e0b\u5f00\u53d1\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\u7684\u8fdb\u4e00\u6b65\u7cbe\u7b80\uff0c\u201c\u5176\u4ed6\u201d \u83dc\u5355\u5408\u5e76\u5230\u4e86 \u201c\u4f7f\u7528\u6587\u6863\u201d \u83dc\u5355\u4e2d")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u5927\u6279\u4f9d\u8d56\u8fdb\u884c\u4e86\u66f4\u65b0\uff0c\u66f4\u591a\u53ef\u4ee5\u53c2\u8003\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://midwayjs.org/changelog/v3.14.0"},"ChangeLog"),"\u3002"))}m.isMDXComponent=!0}}]);