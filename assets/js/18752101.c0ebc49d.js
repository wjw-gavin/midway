"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83338],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(a),u=l,k=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:l,r[1]=p;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const i={},r="\u811a\u624b\u67b6",p={unversionedId:"tool/create_midway",id:"tool/create_midway",title:"\u811a\u624b\u67b6",description:"Midway \u7f16\u5199\u4e86 create-midway \u5305\uff0c\u901a\u8fc7 npx \u547d\u4ee4\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u4f7f\u7528 npm init midway \u547d\u4ee4\u521b\u5efa\u811a\u624b\u67b6\u3002",source:"@site/docs/tool/create_midway.md",sourceDirName:"tool",slug:"/tool/create_midway",permalink:"/docs/tool/create_midway",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/create_midway.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u90e8\u7f72",permalink:"/docs/hooks/deploy"},next:{title:"\u5f00\u53d1\u5de5\u5177",permalink:"/docs/tool/mwtsc"}},o={},m=[{value:"\u901a\u8fc7 CLI \u521b\u5efa\u811a\u624b\u67b6",id:"\u901a\u8fc7-cli-\u521b\u5efa\u811a\u624b\u67b6",level:2},{value:"\u9ed8\u8ba4\u884c\u4e3a",id:"\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u5173\u4e8e\u53c2\u6570\u4f20\u9012",id:"\u5173\u4e8e\u53c2\u6570\u4f20\u9012",level:3},{value:"\u663e\u5f0f\u6240\u6709\u6a21\u7248",id:"\u663e\u5f0f\u6240\u6709\u6a21\u7248",level:3},{value:"\u6307\u5b9a\u6a21\u7248\u540d",id:"\u6307\u5b9a\u6a21\u7248\u540d",level:3},{value:"\u6307\u5b9a\u6a21\u7248\u5305\u540d",id:"\u6307\u5b9a\u6a21\u7248\u5305\u540d",level:3},{value:"\u6307\u5b9a\u521b\u5efa\u76ee\u6807\u76ee\u5f55",id:"\u6307\u5b9a\u521b\u5efa\u76ee\u6807\u76ee\u5f55",level:3},{value:"\u6307\u5b9a\u5ba2\u6237\u7aef",id:"\u6307\u5b9a\u5ba2\u6237\u7aef",level:3},{value:"\u6307\u5b9a\u6e90",id:"\u6307\u5b9a\u6e90",level:3},{value:"\u811a\u624b\u67b6\u53c2\u6570",id:"\u811a\u624b\u67b6\u53c2\u6570",level:3},{value:"\u7f16\u5199\u811a\u624b\u67b6",id:"\u7f16\u5199\u811a\u624b\u67b6",level:2}],c={toc:m},d="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u811a\u624b\u67b6"},"\u811a\u624b\u67b6"),(0,l.kt)("p",null,"Midway \u7f16\u5199\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"create-midway")," \u5305\uff0c\u901a\u8fc7 npx \u547d\u4ee4\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm init midway")," \u547d\u4ee4\u521b\u5efa\u811a\u624b\u67b6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway@latest -y\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u52a0 @latest \u7684 tag\uff0c\u53ef\u80fd\u4e0d\u4f1a\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002")),(0,l.kt)("h2",{id:"\u901a\u8fc7-cli-\u521b\u5efa\u811a\u624b\u67b6"},"\u901a\u8fc7 CLI \u521b\u5efa\u811a\u624b\u67b6"),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u884c\u4e3a"},"\u9ed8\u8ba4\u884c\u4e3a"),(0,l.kt)("p",null,"\u4e0d\u4f20\u9012\u53c2\u6570\uff0c\u53ef\u4ee5\u5217\u51fa\u5f53\u524d\u6700\u5e38\u7528\u7684\u6a21\u7248\u5217\u8868\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway@latest -y\n")),(0,l.kt)("p",null,"\u5219\u4f1a\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ npm init midway\n? Hello, traveller.\n  Which template do you like? \u2026\n\n \u2299 v3\n\u276f koa-v3 - A web application boilerplate with midway v3(koa)\n  egg-v3 - A web application boilerplate with midway v3(egg 2.0)\n  faas-v3 - A serverless application boilerplate with midway v3(faas)\n  component-v3 - A midway component boilerplate for v3\n  quick-start - A midway quickstart exmaple for v3\n\n \u2299 v3-esm\n  koa-v3-esm - A web application boilerplate with midway v3(koa)\n\n \u2299 v2\n  web - A web application boilerplate with midway and Egg.js\n  koa - A web application boilerplate with midway and koa\n")),(0,l.kt)("p",null,"\u8be5\u6a21\u5f0f\u4e0b\uff0c\u4f1a\u6839\u636e\u7528\u6237\u9009\u62e9\uff0c\u6309\u7167\u6307\u5f15\u521b\u5efa\u6a21\u7248\u3002"),(0,l.kt)("h3",{id:"\u5173\u4e8e\u53c2\u6570\u4f20\u9012"},"\u5173\u4e8e\u53c2\u6570\u4f20\u9012"),(0,l.kt)("p",null,"\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"npm init midway")," \u7b49\u4ef7\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"npm exec create-midway"),"\uff0c\u6839\u636e\u4e0d\u540c\u7684 npm \u7248\u672c\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v10/commands/npm-exec"},"\u4f20\u9012\u53c2\u6570")," \u7684\u683c\u5f0f\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u5728\u6700\u65b0\u7684 npm \u4e2d\uff0c\u4f7f\u7528\u989d\u5916\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"--")," \u4f20\u9012\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- -h\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h")," \u53c2\u6570\u53ef\u4ee5\u663e\u5f0f\u6240\u6709\u7684\u53ef\u7528\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u6240\u6709\u7684\u53c2\u6570\u793a\u4f8b\uff0c\u90fd\u5c06\u4ee5\u8fd9\u4e2a\u6a21\u5f0f\u5c55\u793a\u3002"),(0,l.kt)("h3",{id:"\u663e\u5f0f\u6240\u6709\u6a21\u7248"},"\u663e\u5f0f\u6240\u6709\u6a21\u7248"),(0,l.kt)("p",null,"\u975e\u5f53\u524d\u7248\u672c\u7684\u6a21\u7248\uff0c\u4f1a\u9ed8\u8ba4\u9690\u85cf\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"-a")," \u53c2\u6570\u5c55\u793a\u6240\u6709\u5185\u7f6e\u7684\u6a21\u7248\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- -a\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a\u6a21\u7248\u540d"},"\u6307\u5b9a\u6a21\u7248\u540d"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u6a21\u7248\u90fd\u6709\u4e00\u4e2a\u6a21\u7248\u540d\u548c\u6a21\u7248\u63cf\u8ff0\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"koa-v3 - A web application boilerplate with midway v3(koa)")," \u7684\u6a21\u677f\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"koa-v3"),"\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--type")," \u53c2\u6570\u6307\u5b9a\u6a21\u677f\u540d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- --type=koa-v3\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a\u6a21\u7248\u5305\u540d"},"\u6307\u5b9a\u6a21\u7248\u5305\u540d"),(0,l.kt)("p",null,"\u5f53\u81ea\u5b9a\u4e49\u6a21\u7248\u5728 npm \u4e0a\u53d1\u5e03\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-t")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"--template")," \u6765\u6307\u5b9a\u5305\u540d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- -t=custom-template\n")),(0,l.kt)("p",null,"\u5982\u679c\u5305\u8fd8\u5728\u672c\u5730\u5f00\u53d1\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u76f8\u5bf9\u8def\u5f84\u6216\u8005\u7edd\u5bf9\u8def\u5f84\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- -t=./custom-template\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a\u521b\u5efa\u76ee\u6807\u76ee\u5f55"},"\u6307\u5b9a\u521b\u5efa\u76ee\u6807\u76ee\u5f55"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--target")," \u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u521b\u5efa\u7684\u76ee\u5f55\uff0c\u5fc5\u987b\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"template")," \u53c2\u6570\u4e00\u540c\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u4e0b\u9762\u7684\u547d\u4ee4\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"koa-v3")," \u6a21\u7248\uff0c\u5c06\u5176\u751f\u6210\u5230\u5f53\u524d abc \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u76ee\u5f55\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u65b0\u5efa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- --type=koa-v3 --target=abc\n")),(0,l.kt)("p",null,"\u4e00\u822c ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," \u53ef\u4ee5\u7701\u7565\uff0c\u628a\u8def\u5f84\u653e\u5230\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- --type=koa-v3 abc\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a\u5ba2\u6237\u7aef"},"\u6307\u5b9a\u5ba2\u6237\u7aef"),(0,l.kt)("p",null,"\u5982\u679c\u6709\u79c1\u6709\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--npm")," \u6307\u5b9a\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- --npm=tnpm\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a\u6e90"},"\u6307\u5b9a\u6e90"),(0,l.kt)("p",null,"\u5982\u679c\u6709\u79c1\u6709\u6e90\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--registry")," \u6307\u5b9a\u79c1\u6709\u6e90\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- --registry=https://registry.npmmirror.com\n")),(0,l.kt)("h3",{id:"\u811a\u624b\u67b6\u53c2\u6570"},"\u811a\u624b\u67b6\u53c2\u6570"),(0,l.kt)("p",null,"\u5982\u679c\u811a\u624b\u67b6\u4e2d\u5305\u542b\u7528\u6237\u53ef\u4f20\u9012\u7684\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- --bbb=ccc\n")),(0,l.kt)("p",null,"\u5982\u679c\u53c2\u6570\u540d\u548c\u5de5\u5177\u7684\u53c2\u6570\u91cd\u590d\u4e86\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"t_")," \u7684\u53c2\u6570\uff0c\u5728\u5de5\u5177\u4f20\u9012\u7ed9\u811a\u624b\u67b6\u65f6\uff0c\u4f1a\u81ea\u52a8\u5904\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway -- --type=koa-v3 --t_type=ccc\n")),(0,l.kt)("h2",{id:"\u7f16\u5199\u811a\u624b\u67b6"},"\u7f16\u5199\u811a\u624b\u67b6"),(0,l.kt)("p",null,"Midway \u811a\u624b\u67b6\u4f7f\u7528\u4e86\u81ea\u7814\u7684 light-generator \u5de5\u5177\uff0c\u5177\u4f53\u7684\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/light-generator"},"https://github.com/midwayjs/light-generator"),"\u3002"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u53c2\u8003 Midway \u81ea\u5df1\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway-boilerplate/tree/master/v3"},"\u6a21\u7248\u5de5\u7a0b"),"\u3002"))}s.isMDXComponent=!0}}]);