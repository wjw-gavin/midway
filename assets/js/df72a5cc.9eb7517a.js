"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3330],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(t),y=r,u=d["".concat(s,".").concat(y)]||d[y]||c[y]||i;return t?a.createElement(u,l(l({ref:n},m),{},{components:t})):a.createElement(u,l({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},29264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u5982\u4f55\u66f4\u65b0 Midway"},l=void 0,o={unversionedId:"how_to_update_midway",id:"version-2.0.0/how_to_update_midway",title:"\u5982\u4f55\u66f4\u65b0 Midway",description:"midway \u9879\u76ee\u7684\u4f9d\u8d56\u4f7f\u7528 lerna \u53d1\u5e03\uff0c\u8bf7\u4e0d\u8981\uff1a",source:"@site/versioned_docs/version-2.0.0/how_to_update_midway.md",sourceDirName:".",slug:"/how_to_update_midway",permalink:"/docs/2.0.0/how_to_update_midway",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/how_to_update_midway.md",tags:[],version:"2.0.0",frontMatter:{title:"\u5982\u4f55\u66f4\u65b0 Midway"},sidebar:"common",previous:{title:"\u5982\u4f55\u5b89\u88c5 Node.js \u73af\u5883",permalink:"/docs/2.0.0/how_to_install_nodejs"},next:{title:"\u5173\u4e8e Midway \u542f\u52a8\u6162\u7684\u95ee\u9898",permalink:"/docs/2.0.0/midway_slow_problem"}},s={},p=[{value:"\u666e\u901a\u9879\u76ee\u66f4\u65b0",id:"\u666e\u901a\u9879\u76ee\u66f4\u65b0",level:2},{value:"lerna \u9879\u76ee\u66f4\u65b0",id:"lerna-\u9879\u76ee\u66f4\u65b0",level:2},{value:"\u5927\u7248\u672c\u66f4\u65b0",id:"\u5927\u7248\u672c\u66f4\u65b0",level:2},{value:"\u67e5\u770b\u5f53\u524d\u5305\u7248\u672c",id:"\u67e5\u770b\u5f53\u524d\u5305\u7248\u672c",level:2},{value:"\u7248\u672c\u5339\u914d\u67e5\u8be2",id:"\u7248\u672c\u5339\u914d\u67e5\u8be2",level:2}],m={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:""}),(0,r.kt)("p",null,"midway \u9879\u76ee\u7684\u4f9d\u8d56\u4f7f\u7528 lerna \u53d1\u5e03\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u4e0d\u8981"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a @midwayjs/","*"," \u7684\u5305"),(0,r.kt)("li",{parentName:"ul"},"2\u3001\u5c06 package.json \u4e2d\u7684\u7248\u672c\u53f7\u79fb\u9664 ^ \u7b26\u53f7")),(0,r.kt)("h2",{id:"\u666e\u901a\u9879\u76ee\u66f4\u65b0"},"\u666e\u901a\u9879\u76ee\u66f4\u65b0"),(0,r.kt)("p",null,"\u666e\u901a\u4f7f\u7528 npm/yarn \u7684\u9879\u76ee\uff0c\u5347\u7ea7\u8bf7\u6309\u7167\u4e0b\u9762\u7684\u6d41\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u5220\u9664 package-lock.json \u6216\u8005 yarn.lock"),(0,r.kt)("li",{parentName:"ul"},"2\u3001\u5f7b\u5e95\u5220\u9664 node_modules\uff08\u6bd4\u5982 rm -rf node_modules)"),(0,r.kt)("li",{parentName:"ul"},"3\u3001\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\uff08 npm install \u6216\u8005 yarn\uff09")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u4e0d\u4fdd\u8bc1\u4f7f\u7528\u5176\u4ed6\u5de5\u5177\u3001cli \u5355\u72ec\u5347\u7ea7\u5305\u7684\u6548\u679c\u3002")),(0,r.kt)("h2",{id:"lerna-\u9879\u76ee\u66f4\u65b0"},"lerna \u9879\u76ee\u66f4\u65b0"),(0,r.kt)("p",null,"\u4f7f\u7528 lerna \u5f00\u53d1\u9879\u76ee\uff0c\u7531\u4e8e\u6709 hoist \u6a21\u5f0f\u7684\u5b58\u5728\uff0c\u5347\u7ea7\u8bf7\u6309\u7167\u4e0b\u9762\u7684\u6d41\u7a0b\uff08\u4ee5 lerna3 \u4e3a\u4f8b\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u6e05\u7406\u5b50\u5305\u7684 node_modules\uff0c\u6bd4\u5982\uff08lerna clean --yes\uff09"),(0,r.kt)("li",{parentName:"ul"},"2\u3001\u5220\u9664\u4e3b\u5305\u7684 node_modules\uff08\u6bd4\u5982 rm -rf node_modules)"),(0,r.kt)("li",{parentName:"ul"},"3\u3001\u5220\u9664 package-lock.json \u6216\u8005 yarn.lock"),(0,r.kt)("li",{parentName:"ul"},"4\u3001\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\uff08 npm install && lerna bootstrap\uff09")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u4e0d\u4fdd\u8bc1\u4f7f\u7528\u5176\u4ed6\u5de5\u5177\u3001cli \u5355\u72ec\u5347\u7ea7\u5305\u7684\u6548\u679c\u3002")),(0,r.kt)("h2",{id:"\u5927\u7248\u672c\u66f4\u65b0"},"\u5927\u7248\u672c\u66f4\u65b0"),(0,r.kt)("p",null,"\u8bf7\u624b\u52a8\u4fee\u6539\u7248\u672c\u53f7\uff0c\u6bd4\u5982\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"^1.0.0")," \u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"^2.0.0")," \u3002"),(0,r.kt)("h2",{id:"\u67e5\u770b\u5f53\u524d\u5305\u7248\u672c"},"\u67e5\u770b\u5f53\u524d\u5305\u7248\u672c"),(0,r.kt)("p",null,"Midway \u5305\u91c7\u7528\u6807\u51c6\u7684 Semver \u7248\u672c\u8fdb\u884c\u7ba1\u7406\u548c\u53d1\u5e03\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6307\u5b9a\u7684\u7248\u672c\u4e00\u822c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," \u5f00\u5934\uff0c\u8868\u793a\u5728\u5927\u7248\u672c\u8303\u56f4\u5185\u90fd\u517c\u5bb9\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"^2.3.0")," \uff0c\u90a3\u4e48\u6309\u7167 npm \u5b89\u88c5\u89c4\u5219\uff0c\u4f1a\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"2.x")," \u8fd9\u4e2a\u7248\u672c\u4e0b\u6700\u65b0\u7684 latest \u7248\u672c\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u5b9e\u9645\u5b89\u88c5\u7684\u7248\u672c\u9ad8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6307\u5b9a\u7684\u7248\u672c\u90fd\u662f\u6b63\u5e38\u7684\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm ls \u5305\u540d")," \u6765\u67e5\u770b\u5177\u4f53\u7684\u7248\u672c\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm ls @midwayjs/core")," \u6765\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u7684\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u7248\u672c\u5339\u914d\u67e5\u8be2"},"\u7248\u672c\u5339\u914d\u67e5\u8be2"),(0,r.kt)("p",null,"\u7531\u4e8e lerna \u53d1\u5305\u6709\u4e00\u5b9a\u7684\u4f9d\u8d56\u6027\uff0c\u6bd4\u5982\u4fee\u6539\u5230\u7684\u5305\u624d\u4f1a\u66f4\u65b0\uff0c\u5c31\u4f1a\u51fa\u73b0 ",(0,r.kt)("strong",{parentName:"p"},"midway \u4e0b\u7684\u5305\u7248\u672c\u4e0d\u4e00\u5b9a\u5b8c\u5168\u4e00\u81f4\u7684\u60c5\u51b5\u3002")),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u7684\u7248\u672c\u9ad8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/core"),"\uff0c\u8fd9\u90fd\u662f\u5f88\u6b63\u5e38\u7684\u3002"),(0,r.kt)("p",null,"midway \u6bcf\u6b21\u53d1\u5e03\u4f1a\u63d0\u4ea4\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@midwayjs/version"},"@midwayjs/version "),"\u7684\u5305\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u6211\u4eec\u6bcf\u4e2a\u7248\u672c\uff0c\u4ee5\u53ca\u8be5\u7248\u672c\u7684\u5305\u6240\u5339\u914d\u7684\u5168\u90e8\u5305\u7248\u672c\uff0c\u8bf7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/tree/2.x/packages/version/versions"},"\u8bbf\u95ee\u8fd9\u91cc")," \u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u540d\u6309\u7167 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator\u7248\u672c - @midwayjs/core\u7248\u672c.json")," \u89c4\u5219\u521b\u5efa\uff0c\u6bcf\u4e2a\u7248\u672c\u5bf9\u5e94\u4e00\u4e2a JSON \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u4ee5\u5305\u540d\u4f5c\u4e3a key\uff0c\u4ee5\u53ef\u517c\u5bb9\u5339\u914d\u7684\u7248\u672c\u540d\u4f5c\u4e3a\u503c\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u5f53\u524d\u6587\u4ef6 decorator(v2.10.18)\u548c core(v2.10.18) \u6240\u80fd\u517c\u5bb9\u7684 egg-layer \u5305\u7248\u672c\u4e3a v2.10.18 \u548c v2.10.19\u3002"),(0,r.kt)("p",null,"\u5982\u679c decorator \u548c core \u7ec4\u5408\u7684\u6587\u4ef6\u540d\u672a\u627e\u5230\uff0c\u6216\u8005\u6587\u4ef6\u91cc\u7684\u7248\u672c\u4e0d\u5339\u914d\uff0c\u90fd\u8bf4\u660e ",(0,r.kt)("strong",{parentName:"p"},"\u7248\u672c\u53ef\u80fd\u4ea7\u751f\u4e86\u95ee\u9898"),"\u3002"),(0,r.kt)("p",null,"\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@midwayjs/egg-layer": ["2.10.18", "2.10.19"],\n  "@midwayjs/express-layer": "2.10.18",\n  "@midwayjs/faas-typings": "2.10.7",\n  "@midwayjs/koa-layer": "2.10.18",\n  "@midwayjs/runtime-engine": "2.10.14",\n  "@midwayjs/runtime-mock": "2.10.14",\n  "@midwayjs/serverless-app": "2.10.18",\n  "@midwayjs/serverless-aws-starter": "2.10.14",\n  "@midwayjs/serverless-fc-starter": "2.10.18",\n  "@midwayjs/serverless-fc-trigger": "2.10.18",\n  "@midwayjs/serverless-http-parser": "2.10.7",\n  "@midwayjs/serverless-scf-starter": "2.10.14",\n  "@midwayjs/serverless-scf-trigger": "2.10.18",\n  "@midwayjs/static-layer": "2.10.18",\n  "@midwayjs/bootstrap": "2.10.18",\n  "@midwayjs/cache": "2.10.18",\n  "@midwayjs/consul": "2.10.18",\n  "@midwayjs/core": "2.10.18",\n  "@midwayjs/decorator": "2.10.18",\n  "@midwayjs/faas": "2.10.18",\n  "@midwayjs/grpc": "2.10.18",\n  "@midwayjs/logger": "2.10.18",\n  "midway-schedule": "2.10.18",\n  "midway": ["2.10.18", "2.10.19"],\n  "@midwayjs/mock": "2.10.18",\n  "@midwayjs/prometheus": "2.10.18",\n  "@midwayjs/rabbitmq": "2.10.18",\n  "@midwayjs/socketio": "2.10.18",\n  "@midwayjs/task": ["2.10.18", "2.10.19"],\n  "@midwayjs/typegoose": "2.10.18",\n  "@midwayjs/version": ["2.10.18", "2.10.19"],\n  "@midwayjs/express": "2.10.18",\n  "@midwayjs/koa": "2.10.18",\n  "@midwayjs/web": ["2.10.18", "2.10.19"]\n}\n')))}c.isMDXComponent=!0}}]);