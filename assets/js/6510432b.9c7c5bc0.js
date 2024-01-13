"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?i.createElement(k,r(r({ref:t},m),{},{components:n})):i.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const l={title:"midway \u5de5\u5177\u96c6"},r=void 0,o={unversionedId:"tool/cli",id:"version-1.0.0/tool/cli",title:"midway \u5de5\u5177\u96c6",description:"midway-bin",source:"@site/versioned_docs/version-1.0.0/tool/cli.md",sourceDirName:"tool",slug:"/tool/cli",permalink:"/docs/1.0.0/tool/cli",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/tool/cli.md",tags:[],version:"1.0.0",frontMatter:{title:"midway \u5de5\u5177\u96c6"},sidebar:"common",previous:{title:"midway \u9ad8\u7ea7\u6d4b\u8bd5\u65b9\u6848",permalink:"/docs/1.0.0/test_more"},next:{title:"Docker \u4e2d\u8fdb\u7a0b\u8fc7\u591a",permalink:"/docs/1.0.0/docker"}},p={},d=[{value:"midway-bin",id:"midway-bin",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"build \u547d\u4ee4",id:"build-\u547d\u4ee4",level:3},{value:"clean \u547d\u4ee4",id:"clean-\u547d\u4ee4",level:3},{value:"doc \u547d\u4ee4",id:"doc-\u547d\u4ee4",level:3},{value:"midway-init",id:"midway-init",level:2},{value:"tslint-midway-contrib",id:"tslint-midway-contrib",level:2}],m={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"midway-bin"},"midway-bin"),(0,a.kt)("p",null,"midway-bin \u901a\u8fc7\u7ee7\u627f\u4e86 egg-bin\uff0c\u6269\u5c55\u4e00\u4e9b\u8ddf ts \u76f8\u5173\u7684\u547d\u4ee4\u3002"),(0,a.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u811a\u624b\u67b6\u5df2\u7ecf\u81ea\u5e26\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install midway-bin --save-dev\n")),(0,a.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("p",null,"\u5305\u62ec egg-bin \u81ea\u5e26\u7684:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"midway-bin test \u6d4b\u8bd5\u547d\u4ee4\uff0c ts \u4f7f\u7528\u65f6\u9700\u8981\u5e26\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"--ts")),(0,a.kt)("li",{parentName:"ul"},"midway-bin cov \u751f\u6210\u8986\u76d6\u7387\u547d\u4ee4\uff0c ts \u4f7f\u7528\u65f6\u9700\u8981\u5e26\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"--ts")),(0,a.kt)("li",{parentName:"ul"},"midway-bin debug \u8c03\u8bd5\u547d\u4ee4\uff0c ts \u4f7f\u7528\u65f6\u9700\u8981\u5e26\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"--ts")),(0,a.kt)("li",{parentName:"ul"},"midway-bin autod"),(0,a.kt)("li",{parentName:"ul"},"midway-bin dev \u672c\u5730\u5f00\u53d1\u547d\u4ee4\uff0c ts \u4f7f\u7528\u65f6\u9700\u8981\u5e26\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"--ts")),(0,a.kt)("li",{parentName:"ul"},"midway-bin pkgfiles")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u547d\u4ee4\u90fd\u6ca1\u6709\u7279\u522b\u5904\u7406\uff0c\u53c2\u6570\u548c egg-bin \u76f8\u540c\uff0c\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eggjs/egg-bin/"},"egg-bin \u6587\u6863")),(0,a.kt)("h3",{id:"build-\u547d\u4ee4"},"build \u547d\u4ee4"),(0,a.kt)("p",null,"\u6211\u4eec\u589e\u52a0\u4e86\u4e00\u4e2a build \u547d\u4ee4\u7528\u4e8e\u589e\u5f3a\u6784\u5efa typescript \u9879\u76ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"midway-bin build\n")),(0,a.kt)("p",null,"\u989d\u5916\u589e\u52a0\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," \u53c2\u6570\u7528\u4e8e\u652f\u6301\u6253\u5305\u524d\u6e05\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"/dist")," \u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"midway-bin build -c\n")),(0,a.kt)("p",null,"\u7531\u4e8e typescript \u7f16\u8bd1\u65e0\u6cd5\u62f7\u8d1d\u975e ",(0,a.kt)("inlineCode",{parentName:"p"},"*.ts")," \u6587\u4ef6\uff0c\u6211\u4eec\u7279\u5b9a\u5728\u5bf9 build \u547d\u4ee4\u505a\u4e86\u589e\u5f3a\u3002"),(0,a.kt)("p",null,"\u5728\u6267\u884c midway-bin build \u547d\u4ee4\u4e2d\uff0c\u4f1a\u81ea\u52a8\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"midway-bin-build")," \u6bb5\u843d\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "midway-bin-build": {\n    "include": [\n      "app/public",\n      "app/view",\n      "lib/platform/aone/api.json",\n      "lib/*.json",\n      "lib/*.text",\n      ["pattern/**", "!pattern/**/*.js"]\n    ]\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684\u8def\u5f84\u76f8\u5bf9\u4e8e src \u76ee\u5f55\u3002")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u6216\u8005\u901a\u914d\u7b26\uff0c\u4e43\u81f3\u4efb\u610f\u7b26\u5408 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/isaacs/minimatch#usage"},"glob \u8bed\u6cd5")," \u7684 pattern \u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u5728\u6253\u5305\u65f6\u4f1a\u81ea\u52a8\u5c06\u76f8\u5e94\u7684\u76ee\u5f55\u6216\u8005\u6587\u4ef6\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u62f7\u8d1d\u5230\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e2d\u3002"),(0,a.kt)("h3",{id:"clean-\u547d\u4ee4"},"clean \u547d\u4ee4"),(0,a.kt)("p",null,"\u6211\u4eec\u589e\u52a0\u4e86\u4e00\u4e2a clean \u547d\u4ee4\u7528\u4e8e\u6e05\u7406\u4e00\u4e9b\u4e34\u65f6\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"midway-bin clean\n")),(0,a.kt)("p",null,"\u6e05\u7406\u7684\u5185\u5bb9\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"logs \u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"run \u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},".nodejs-cache \u76ee\u5f55")),(0,a.kt)("p",null,"\u540c\u65f6\u548c build \u547d\u4ee4\u7c7b\u4f3c\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"midway-bin-clean")," \u6bb5\u843d\u589e\u52a0\u914d\u7f6e\uff0c\u7528\u4e8e\u6e05\u7406\u81ea\u5df1\u7684\u76ee\u5f55\u548c\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "midway-bin-clean": ["src/app/public", "resource/temp"]\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684\u8def\u5f84\u76f8\u5bf9\u4e8e\u5e94\u7528\u7684\u6839\u76ee\u5f55\u3002")),(0,a.kt)("h3",{id:"doc-\u547d\u4ee4"},"doc \u547d\u4ee4"),(0,a.kt)("p",null,"midway-bin doc \u547d\u4ee4\u7528\u4e8e\u901a\u8fc7 typedoc \u751f\u6210\u6587\u6863\uff0c\u6bd4\u5982 midway \u7684 api \u5c31\u662f\u901a\u8fc7\u6b64\u547d\u4ee4\u751f\u6210\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"midway-bin doc\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u7684",(0,a.kt)("a",{parentName:"p",href:"https://typedoc.org/guides/arguments/"},"\u547d\u4ee4\u53c2\u6570"),"\u548c typedoc \u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u76f4\u63a5\u53ef\u4f7f\u7528\u7684\u53c2\u6570\u5305\u62ec\u4ee5\u4e0b\u8fd9\u4e9b\uff0c\u6709\u4e9b\u5df2\u7ecf\u6307\u5b9a\u4e86\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--options [typedoc.js]")," Specify a js option file that should be loaded."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--out -o [outPath]")," Specifies the location the documentation should be written to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--mode -m")," default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"file"),", Specifies the output mode the project is used to be compiled with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--exclude")," Exclude files by the given pattern when a path is provided as source."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--theme")," default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," Specify the path to the theme that should be used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--excludeExternals")," default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," Prevent externally resolved TypeScript files from being documented."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--ignoreCompilerErrors")," default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," Generates documentation, even if the project does not TypeScript compile."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--hideGenerator")," default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," Do not print the TypeDoc link at the end of the page.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"--options")," \u53c2\u6570\uff0c\u90a3\u4e48\u5176\u4ed6\u7684\u53c2\u6570\u90fd\u4f1a\u5931\u6548\uff0c\u8bf7\u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"--options")," \u53c2\u6570\u6307\u5b9a\u7684\u6587\u4ef6\u4e2d\u8fdb\u884c\u5904\u7406\u3002")),(0,a.kt)("h2",{id:"midway-init"},"midway-init"),(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u57fa\u7840\u7684 midway \u5e94\u7528\u811a\u624b\u67b6\uff0c\u540e\u7eed\u4f1a\u4e0d\u65ad\u589e\u52a0\u5176\u4ed6\u6a21\u677f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g midway-init\nmidway-init\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5185\u5efa\u7684\u547d\u4ee4\u521b\u5efa\u811a\u624b\u67b6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"midway-init -h                                          // \u5e2e\u52a9\u6587\u6863\nmidway-init --dir my_project                            // \u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 my_project \u5b50\u76ee\u5f55\u521b\u5efa\u811a\u624b\u67b6\nmidway-init --type midway-ts                            // \u4ece\u5185\u7f6e\u811a\u624b\u67b6\u7c7b\u578b midway-ts \u521b\u5efa\u76ee\u5f55\nmidway-init --template ../custom_boilerplate            // \u4ece\u672c\u5730\u7684\u7279\u5730\u76ee\u5f55\u521b\u5efa\u811a\u624b\u67b6\nmidway-init --package midway-boilerplate-typescript     // \u4ece npm \u5305\u521b\u5efa\u811a\u624b\u67b6\nmidway-init --registry china/npm/registry.cnpmjs.org    // \u4ece\u4e0d\u540c\u7684 registry \u83b7\u53d6 npm \u5305\uff0c\u548c --package \u5408\u7528\n")),(0,a.kt)("h2",{id:"tslint-midway-contrib"},"tslint-midway-contrib"),(0,a.kt)("p",null,"midway \u5bf9 Typescript \u5e94\u7528\u63d0\u4f9b\u4e86\u7b80\u5355\u7684 tslint \u89c4\u5219\u5305\uff0c\u53ea\u9700\u8981\u5728 tslint.json \u4e2d\u505a\u7b80\u5355\u7684\u7ee7\u627f\uff0c\u5982\u679c\u6709\u5176\u4ed6\u7684\u9700\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n  "devDependencies": {\n    "tslint-midway-contrib": "1",\n  }\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// tslint.json\n{\n  "extends": ["tslint-midway-contrib"]\n}\n')))}u.isMDXComponent=!0}}]);