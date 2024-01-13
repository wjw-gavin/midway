"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Lint \u5de5\u5177\u3001\u89c4\u5219\u548c\u683c\u5f0f\u5316"},o=void 0,l={unversionedId:"tool/mwts",id:"version-2.0.0/tool/mwts",title:"Lint \u5de5\u5177\u3001\u89c4\u5219\u548c\u683c\u5f0f\u5316",description:"Midway \u7684\u6846\u67b6\u548c\u4e1a\u52a1\u4ee3\u7801\u90fd\u662f\u7531 TypeScript \u7f16\u5199\u7684\uff0c\u9ed8\u8ba4 Midway \u63d0\u4f9b\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684 lint\u3001\u7f16\u8f91\u5668\u4ee5\u53ca\u683c\u5f0f\u5316\u89c4\u5219\uff0c\u7528\u4e8e\u66f4\u65b9\u4fbf\u7684\u8fdb\u884c\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002",source:"@site/versioned_docs/version-2.0.0/tool/mwts.md",sourceDirName:"tool",slug:"/tool/mwts",permalink:"/en/docs/2.0.0/tool/mwts",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/tool/mwts.md",tags:[],version:"2.0.0",frontMatter:{title:"Lint \u5de5\u5177\u3001\u89c4\u5219\u548c\u683c\u5f0f\u5316"},sidebar:"common",previous:{title:"midwayjs/cli",permalink:"/en/docs/2.0.0/tool/cli"},next:{title:"\u68c0\u67e5\u5de5\u5177",permalink:"/en/docs/2.0.0/tool/luckyeye"}},s={},p=[{value:"\u4ee3\u7801\u98ce\u683c\u5e93",id:"\u4ee3\u7801\u98ce\u683c\u5e93",level:2},{value:"ESLint \u914d\u7f6e",id:"eslint-\u914d\u7f6e",level:2},{value:"\u6267\u884c\u4ee3\u7801\u68c0\u67e5\u548c\u683c\u5f0f\u5316",id:"\u6267\u884c\u4ee3\u7801\u68c0\u67e5\u548c\u683c\u5f0f\u5316",level:2},{value:"Prettier \u914d\u7f6e",id:"prettier-\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u4fdd\u5b58\u81ea\u52a8\u683c\u5f0f\u5316",id:"\u914d\u7f6e\u4fdd\u5b58\u81ea\u52a8\u683c\u5f0f\u5316",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Midway \u7684\u6846\u67b6\u548c\u4e1a\u52a1\u4ee3\u7801\u90fd\u662f\u7531 TypeScript \u7f16\u5199\u7684\uff0c\u9ed8\u8ba4 Midway \u63d0\u4f9b\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684 lint\u3001\u7f16\u8f91\u5668\u4ee5\u53ca\u683c\u5f0f\u5316\u89c4\u5219\uff0c\u7528\u4e8e\u66f4\u65b9\u4fbf\u7684\u8fdb\u884c\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002"),(0,r.kt)("h2",{id:"\u4ee3\u7801\u98ce\u683c\u5e93"},"\u4ee3\u7801\u98ce\u683c\u5e93"),(0,r.kt)("p",null,"Midway \u7684\u4ee3\u7801\u98ce\u683c\u5e93\u53eb ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/mwts"},"mwts"),"\uff0c\u6e90\u81ea\u4e8e Google \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/gts"},"gts"),"\u3002mwts \u662f Midway \u7684 TypeScript \u6837\u5f0f\u6307\u5357\uff0c\u4e5f\u662f\u683c\u5f0f\u5316\u7a0b\u5e8f\uff0clinter \u548c\u81ea\u52a8\u4ee3\u7801\u4fee\u590d\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 midway \u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u4f1a\u9ed8\u8ba4\u6dfb\u52a0 mwts\uff0c\u4e0b\u9762\u7684\u6d41\u7a0b\u53ea\u662f\u4e3a\u4e86\u8bf4\u660e\u5982\u4f55\u4f7f\u7528 mwts\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528 mwts\uff0c\u6211\u4eec\u9700\u8981\u628a\u5b83\u6dfb\u52a0\u5230\u5f00\u53d1\u4f9d\u8d56\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "devDependencies": {\n    "mwts": "^1.0.5",\n    "typescript": "^4.0.0"\n  },\n')),(0,r.kt)("h2",{id:"eslint-\u914d\u7f6e"},"ESLint \u914d\u7f6e"),(0,r.kt)("p",null,"mwts \u63d0\u4f9b\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684 ESLint \u914d\u7f6e\uff08TSLint \u5df2\u7ecf\u5e9f\u5f03\uff0c\u5408\u5e76\u5230\u4e86 ESLint \u4e2d\uff09\u3002"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc.json"),"\xa0 \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff08\u4e00\u822c\u811a\u624b\u67b6\u4f1a\u81ea\u5e26\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./node_modules/mwts/",\n  "ignorePatterns": ["node_modules", "dist", "test", "jest.config.js", "interface.ts"],\n  "env": {\n    "jest": true\n  }\n}\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u662f midway \u9879\u76ee\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5176\u4ed6\u9879\u76ee ",(0,r.kt)("inlineCode",{parentName:"p"},"ignorePatterns"),"\xa0 \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),"\xa0 \u53ef\u4ee5\u81ea\u884c\u6839\u636e ESLint \u81ea\u884c\u8c03\u6574\u3002"),(0,r.kt)("p",null,"\u6574\u4e2a mwts \u7684\u9ed8\u8ba4\u89c4\u5219\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/mwts/blob/master/.eslintrc.json"},"\u8fd9\u91cc"),"\uff0c\u5982\u6709\u9700\u6c42\uff0c\u53ef\u4ee5\u81ea\u884c\u8c03\u6574\u3002"),(0,r.kt)("h2",{id:"\u6267\u884c\u4ee3\u7801\u68c0\u67e5\u548c\u683c\u5f0f\u5316"},"\u6267\u884c\u4ee3\u7801\u68c0\u67e5\u548c\u683c\u5f0f\u5316"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"mwts check"),"\xa0 \u547d\u4ee4\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"mwts fix"),"\xa0 \u547d\u4ee4\uff0c\u6765\u68c0\u67e5\u4ee3\u7801\u3002\u6bd4\u5982\u5728\u9879\u76ee\u4e2d\u589e\u52a0\u811a\u672c\u547d\u4ee4\uff08\u4e00\u822c\u811a\u624b\u67b6\u4f1a\u81ea\u5e26\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'  "scripts": {\n    "lint": "mwts check",\n    "lint:fix": "mwts fix",\n  },\n')),(0,r.kt)("h2",{id:"prettier-\u914d\u7f6e"},"Prettier \u914d\u7f6e"),(0,r.kt)("p",null,"mwts \u63d0\u4f9b\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684 prettier \u914d\u7f6e\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},".prettierrc.js")," \xa0 \u6587\u4ef6\uff0c\u914d\u7f6e\u5185\u5bb9\u5982\u4e0b\u5373\u53ef\uff08\u4e00\u822c\u811a\u624b\u67b6\u81ea\u5e26\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  ...require('mwts/.prettierrc.json'),\n};\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u4fdd\u5b58\u81ea\u52a8\u683c\u5f0f\u5316"},"\u914d\u7f6e\u4fdd\u5b58\u81ea\u52a8\u683c\u5f0f\u5316"),(0,r.kt)("p",null,"\u6211\u4eec\u4ee5 VSCode \u4e3a\u4f8b\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u5b89\u88c5 Prettier \u63d2\u4ef6\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618042429530-177c3636-aefc-419d-8d3a-5258cad13631.png#align=left&display=inline&height=536&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1072&originWidth=800&size=114476&status=done&style=none&width=400",width:"400"}),(0,r.kt)("p",null,'\u6253\u5f00\u914d\u7f6e\uff0c\u641c\u7d22 \u201csave\u201d\uff0c\u627e\u5230\u53f3\u4fa7\u7684 "Format On Save"\uff0c\u52fe\u9009\u5373\u53ef\u3002'),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618042494782-71b6cc3c-18ae-4344-987b-ec82084f2dd8.png#align=left&display=inline&height=788&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1576&originWidth=2370&size=341414&status=done&style=none&width=1185",width:"1185"}),(0,r.kt)("p",null,"\u5982\u679c\u4fdd\u5b58\u6587\u4ef6\u6ca1\u6709\u6548\u679c\uff0c\u4e00\u822c\u662f\u7f16\u8f91\u5668\u6709\u591a\u4e2a\u683c\u5f0f\u5316\u65b9\u5f0f\uff0c\u53ef\u4ee5\u53f3\u952e\u8fdb\u884c\u9ed8\u8ba4\u9009\u62e9\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618125271116-845e8452-0f7b-46a9-a28a-388f2db9c5e3.png#align=left&display=inline&height=458&margin=%5Bobject%20Object%5D&name=image.png&originHeight=916&originWidth=564&size=102932&status=done&style=none&width=282",width:"282"}),"\xa0 \u9009\u62e9 \u201c\u914d\u7f6e\u9ed8\u8ba4\u683c\u5f0f\u5316\u7a0b\u5e8f\u201d\u3002",(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618125381302-d3fe30c1-e56d-43f8-ada2-6e315f4ff2c4.png#align=left&display=inline&height=144&margin=%5Bobject%20Object%5D&name=image.png&originHeight=288&originWidth=990&size=37986&status=done&style=none&width=495",width:"495"}),(0,r.kt)("p",null,"\u9009\u62e9 Prettier \u5373\u53ef\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618125423564-8e46b0f8-f422-4e3d-a805-3b0a1db037f8.png#align=left&display=inline&height=104&margin=%5Bobject%20Object%5D&name=image.png&originHeight=208&originWidth=1074&size=35043&status=done&style=none&width=537",width:"537"}))}d.isMDXComponent=!0}}]);