"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8596],{3905:function(e,n,o){o.d(n,{Zo:function(){return m},kt:function(){return g}});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(o),g=a,u=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return o?t.createElement(u,s(s({ref:n},m),{},{components:o})):t.createElement(u,s({ref:n},m))}));function g(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3909:function(e,n,o){o.r(n),o.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var t=o(7462),a=o(3366),r=(o(7294),o(3905)),s=["components"],i={},l="MongoDB",p={unversionedId:"legacy/mongodb",id:"legacy/mongodb",title:"MongoDB",description:'\u5728\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u9009\u62e9 Typegoose \u4f5c\u4e3a\u57fa\u7840\u7684 MongoDB ORM \u5e93\u3002\u5c31\u5982\u540c\u4ed6\u63cf\u8ff0\u7684\u90a3\u6837 " Define Mongoose models using TypeScript classes"\uff0c\u548c TypeScript \u7ed3\u5408\u7684\u5f88\u4e0d\u9519\u3002',source:"@site/docs/legacy/mongodb.md",sourceDirName:"legacy",slug:"/legacy/mongodb",permalink:"/docs/legacy/mongodb",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/legacy/mongodb.md",tags:[],version:"current",frontMatter:{}},m={},c=[{value:"Mongoose \u7248\u672c\u4f9d\u8d56",id:"mongoose-\u7248\u672c\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528 Typegoose",id:"\u4f7f\u7528-typegoose",level:2},{value:"1\u3001\u5b89\u88c5\u7ec4\u4ef6",id:"1\u5b89\u88c5\u7ec4\u4ef6",level:3},{value:"2\u3001\u914d\u7f6e\u8fde\u63a5\u4fe1\u606f",id:"2\u914d\u7f6e\u8fde\u63a5\u4fe1\u606f",level:3},{value:"3\u3001\u7b80\u5355\u7684\u76ee\u5f55\u7ed3\u6784",id:"3\u7b80\u5355\u7684\u76ee\u5f55\u7ed3\u6784",level:3},{value:"3\u3001\u521b\u5efa\u5b9e\u4f53\u6587\u4ef6",id:"3\u521b\u5efa\u5b9e\u4f53\u6587\u4ef6",level:3},{value:"4\u3001\u5f15\u7528\u5b9e\u4f53\uff0c\u8c03\u7528\u6570\u636e\u5e93",id:"4\u5f15\u7528\u5b9e\u4f53\u8c03\u7528\u6570\u636e\u5e93",level:3},{value:"5\u3001\u591a\u5e93\u7684\u60c5\u51b5",id:"5\u591a\u5e93\u7684\u60c5\u51b5",level:3},{value:"\u76f4\u63a5\u4f7f\u7528 mongoose",id:"\u76f4\u63a5\u4f7f\u7528-mongoose",level:2},{value:"1\u3001\u5b89\u88c5\u7ec4\u4ef6",id:"1\u5b89\u88c5\u7ec4\u4ef6-1",level:3},{value:"2\u3001\u5f00\u542f\u7ec4\u4ef6",id:"2\u5f00\u542f\u7ec4\u4ef6",level:3},{value:"2\u3001\u914d\u7f6e",id:"2\u914d\u7f6e",level:3},{value:"3\u3001\u4f7f\u7528",id:"3\u4f7f\u7528",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"1\u3001E002: You are using a NodeJS Version below 12.22.0",id:"1e002-you-are-using-a-nodejs-version-below-12220",level:3}],d={toc:c};function g(e){var n=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u9009\u62e9 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose"},"Typegoose"),' \u4f5c\u4e3a\u57fa\u7840\u7684 MongoDB ORM \u5e93\u3002\u5c31\u5982\u540c\u4ed6\u63cf\u8ff0\u7684\u90a3\u6837 " Define Mongoose models using TypeScript classes"\uff0c\u548c TypeScript \u7ed3\u5408\u7684\u5f88\u4e0d\u9519\u3002'),(0,r.kt)("p",null,"\u7b80\u5355\u7684\u6765\u8bf4\uff0cTypegoose \u4f7f\u7528 TypeScript \u7f16\u5199 Mongoose \u6a21\u578b\u7684 \u201c\u5305\u88c5\u5668\u201d\uff0c\u5b83\u7684\u5927\u90e8\u5206\u80fd\u529b\u8fd8\u662f\u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongoose"},"mongoose")," \u5e93\u6765\u63d0\u4f9b\u7684\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongoose"},"mongoose")," \u5e93\u6765\u4f7f\u7528\uff0c\u6211\u4eec\u4f1a\u5206\u522b\u63cf\u8ff0\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u672c\u6587\u6863\u4ece v3.4.0 \u7248\u672c\u8d77\u5e9f\u5f03\u3002"))),(0,r.kt)("h2",{id:"mongoose-\u7248\u672c\u4f9d\u8d56"},"Mongoose \u7248\u672c\u4f9d\u8d56"),(0,r.kt)("p",null,"mongoose \u548c\u4f60\u670d\u52a1\u5668\u4f7f\u7528\u7684 MongoDB Server \u7684\u7248\u672c\u4e5f\u6709\u7740\u4e00\u5b9a\u7684\u5173\u7cfb\uff0c\u5982\u4e0b\uff0c\u8bf7\u52a1\u5fc5\u6ce8\u610f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 2.4.x: mongoose ^3.8 or 4.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 2.6.x: mongoose ^3.8.8 or 4.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.0.x: mongoose ^3.8.22, 4.x, or 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.2.x: mongoose ^4.3.0 or 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.4.x: mongoose ^4.7.3 or 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.6.x: mongoose 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 4.0.x: mongoose ^5.2.0"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 4.2.x: mongoose ^5.7.0"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 4.4.x: mongoose ^5.10.0"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 5.x: mongoose ^6.0.0")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongoose \u76f8\u5173\u7684\u4f9d\u8d56\u6bd4\u8f83\u590d\u6742\uff0c\u4e14\u5bf9\u5e94\u4e0d\u540c\u7684\u7248\u672c\uff0c\u73b0\u9636\u6bb5\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u4e3b\u8981\u662f mongoose v5 \u548c v6\u3002")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"mailto:mongoose@v5.11.0"},"mongoose@v5.11.0")," \u5f00\u59cb\uff0cmongoose \u5b98\u65b9\u652f\u6301\u4e86\u5b9a\u4e49\uff0c\u6240\u4ee5\u4e0d\u518d\u9700\u8981\u5b89\u88c5 @types/mongoose \u4f9d\u8d56\u5305\u3002"))),(0,r.kt)("p",null,"\u5b89\u88c5\u5305\u4f9d\u8d56\u7248\u672c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301 MongoDB Server 5.x")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "mongoose": "^6.0.7",\n    "@typegoose/typegoose": "^9.0.0",       // \u4f7f\u7528 typegoose \u9700\u8981\u5b89\u88c5\u6b64\u4f9d\u8d56\n  },\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301 MongoDB Server 4.4.x")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7248\u672c\u4e0d\u9700\u8981\u5b89\u88c5\u989d\u5916\u5b9a\u4e49\u5305\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "mongoose": "^5.13.3",\n    "@typegoose/typegoose": "^8.0.0",   // \u4f7f\u7528 typegoose \u9700\u8981\u5b89\u88c5\u6b64\u4f9d\u8d56\n  },\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7248\u672c\u9700\u8981\u5b89\u88c5\u989d\u5916\u5b9a\u4e49\u5305\uff08\u4e0d\u63a8\u8350\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' "dependencies": {\n    "mongodb": "3.6.3",                                 // mongoose \u5185\u90e8\u5199\u6b7b\u4e86\u8be5\u7248\u672c\n    "mongoose": "~5.10.18",\n    "@typegoose/typegoose": "^7.0.0",   // \u4f7f\u7528 typegoose \u9700\u8981\u5b89\u88c5\u6b64\u4f9d\u8d56\n },\n "devDependencies": {\n    "@types/mongodb": "3.6.3",                  // \u53ea\u80fd\u4f7f\u7528\u6b64\u7248\u672c\n    "@types/mongoose": "~5.10.3",\n }\n')),(0,r.kt)("p",null,"\u5176\u4f59\u7684 MongoDB \u5b89\u88c5\u6a21\u5757\u7c7b\u4f3c\uff0c\u672a\u6d4b\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-typegoose"},"\u4f7f\u7528 Typegoose"),(0,r.kt)("h3",{id:"1\u5b89\u88c5\u7ec4\u4ef6"},"1\u3001\u5b89\u88c5\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5b89\u88c5 Typegoose \u7ec4\u4ef6\uff0c\u63d0\u4f9b\u8bbf\u95ee MongoDB \u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u52a1\u5fc5\u6ce8\u610f\uff0c\u8bf7\u67e5\u770b\u7b2c\u4e00\u5c0f\u8282\u63d0\u524d\u7f16\u5199/\u5b89\u88c5 mongoose \u7b49\u76f8\u5173\u4f9d\u8d56\u5305\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/typegoose@3 --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    // \u7ec4\u4ef6\n    "@midwayjs/typegoose": "^3.0.0",\n    // \u4e0a\u4e00\u8282\u4e2d\u7684 mongoose \u4f9d\u8d56\n  },\n  "devDependencies": {\n    // \u4e0a\u4e00\u8282\u4e2d\u7684 mongoose \u4f9d\u8d56\n    // ...\n  }\n}\n')),(0,r.kt)("p",null,"\u5b89\u88c5\u540e\u9700\u8981\u624b\u52a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u914d\u7f6e\uff0c\u4ee3\u7801\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as typegoose from '@midwayjs/typegoose';\n\n@Configuration({\n  imports: [\n    typegoose                                           // \u52a0\u8f7d typegoose \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u8be5\u7ec4\u4ef6\u4e2d\uff0cmidway \u53ea\u662f\u505a\u4e86\u7b80\u5355\u7684\u914d\u7f6e\u89c4\u5219\u5316\uff0c\u5e76\u5c06\u5176\u6ce8\u5165\u5230\u521d\u59cb\u5316\u6d41\u7a0b\u4e2d\u3002"))),(0,r.kt)("h3",{id:"2\u914d\u7f6e\u8fde\u63a5\u4fe1\u606f"},"2\u3001\u914d\u7f6e\u8fde\u63a5\u4fe1\u606f"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts")," \u4e2d\u52a0\u5165\u8fde\u63a5\u7684\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    client: {\n      uri: 'mongodb://localhost:27017/test',\n      options: {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        user: '***********',\n        pass: '***********'\n      }\n    }\n  },\n}\n")),(0,r.kt)("h3",{id:"3\u7b80\u5355\u7684\u76ee\u5f55\u7ed3\u6784"},"3\u3001\u7b80\u5355\u7684\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("p",null,"\u6211\u4eec\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u9879\u76ee\u4e3e\u4f8b\uff0c\u5176\u4ed6\u7ed3\u6784\u8bf7\u81ea\u884c\u53c2\u8003\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MyProject\n\u251c\u2500\u2500 src                                         // TS \u6839\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u2514\u2500\u2500 config.default.ts       // \u5e94\u7528\u914d\u7f6e\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 entity                                  // \u5b9e\u4f53\uff08\u6570\u636e\u5e93 Model) \u76ee\u5f55\n\u2502   \u2502   \u2514\u2500\u2500 user.ts                         // \u5b9e\u4f53\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 configuration.ts                // Midway \u914d\u7f6e\u6587\u4ef6\n\u2502   \u2514\u2500\u2500 service                                 // \u5176\u4ed6\u7684\u670d\u52a1\u76ee\u5f55\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u7684\u6570\u636e\u5e93\u5b9e\u4f53\u4e3b\u8981\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," \u76ee\u5f55\uff08\u975e\u5f3a\u5236\uff09\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7ea6\u5b9a\u3002"),(0,r.kt)("h3",{id:"3\u521b\u5efa\u5b9e\u4f53\u6587\u4ef6"},"3\u3001\u521b\u5efa\u5b9e\u4f53\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { prop } from '@typegoose/typegoose';\nimport { EntityModel } from '@midwayjs/typegoose';\n\n@EntityModel()\nexport class User {\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n")),(0,r.kt)("p",null,"\u7b49\u4ef7\u4e8e\u4f7f\u7528 mongoose \u7684\u4e0b\u5217\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const userSchema = new mongoose.Schema({\n  name: String,\n  jobs: [{ type: String }]\n});\n\nconst User = mongoose.model('User', userSchema);\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6240\u4ee5\u8bf4\uff0ctypegoose \u53ea\u662f\u7b80\u5316\u4e86 model \u7684\u521b\u5efa\u8fc7\u7a0b\u3002"))),(0,r.kt)("h3",{id:"4\u5f15\u7528\u5b9e\u4f53\u8c03\u7528\u6570\u636e\u5e93"},"4\u3001\u5f15\u7528\u5b9e\u4f53\uff0c\u8c03\u7528\u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { InjectEntityModel } from '@midwayjs/typegoose';\nimport { ReturnModelType } from '@typegoose/typegoose';\nimport { User } from '../entity/user';\n\n@Provide()\nexport class TestService {\n\n  @InjectEntityModel(User)\n  userModel: ReturnModelType<typeof User>;\n\n  async getTest(){\n    // create data\n    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an \"as\" assertion, to have types for all properties\n\n    // find data\n    const user = await this.userModel.findById(id).exec();\n    console.log(user)\n  }\n}\n")),(0,r.kt)("h3",{id:"5\u591a\u5e93\u7684\u60c5\u51b5"},"5\u3001\u591a\u5e93\u7684\u60c5\u51b5"),(0,r.kt)("p",null,"\u9996\u5148\u914d\u7f6e\u591a\u4e2a\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts")," \u4e2d\u52a0\u5165\u8fde\u63a5\u7684\u914d\u7f6e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \u4ee3\u8868\u4e86\u9ed8\u8ba4\u7684\u8fde\u63a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    clients: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true,\n          useUnifiedTopology: true,\n          user: '***********',\n          pass: '***********'\n        }\n      },\n      db1: {\n        uri: 'mongodb://localhost:27017/test1',\n        options: {\n          useNewUrlParser: true,\n          useUnifiedTopology: true,\n          user: '***********',\n          pass: '***********'\n        }\n      }\n    }\n  },\n}\n")),(0,r.kt)("p",null,"\u5b9a\u4e49\u5b9e\u4f8b\u65f6\u4f7f\u7528\u56fa\u5b9a\u7684\u8fde\u63a5\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@EntityModel()                              // \u9ed8\u8ba4\u4f7f\u7528\u4e86 default \u8fde\u63a5\nclass User {\n\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n\n@EntityModel({\n  connectionName: 'db1'             // \u8fd9\u91cc\u4f7f\u7528\u4e86 db1\u8fde\u63a5\n})\nclass User2 {\n\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0c\u6ce8\u5165\u7279\u5b9a\u7684\u8fde\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class TestService{\n\n  @InjectEntityModel(User)\n  userModel: ReturnModelType<typeof User>;\n\n  @InjectEntityModel(User2)\n  user2Model: ReturnModelType<typeof User2>;\n\n  async getTest(){\n    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an \"as\" assertion, to have types for all properties\n    const user = await this.userModel.findById(id).exec();\n    console.log(user)\n\n    const { _id: id2 } = await this.user2Model.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User2); // an \"as\" assertion, to have types for all properties\n    const user2 = await this.user2Model.findById(id2).exec();\n    console.log(user2)\n  }\n}\n\n")),(0,r.kt)("h2",{id:"\u76f4\u63a5\u4f7f\u7528-mongoose"},"\u76f4\u63a5\u4f7f\u7528 mongoose"),(0,r.kt)("p",null,"mongoose \u7ec4\u4ef6\u662f typegoose \u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u6709\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("h3",{id:"1\u5b89\u88c5\u7ec4\u4ef6-1"},"1\u3001\u5b89\u88c5\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u52a1\u5fc5\u6ce8\u610f\uff0c\u8bf7\u67e5\u770b\u7b2c\u4e00\u5c0f\u8282\u63d0\u524d\u7f16\u5199/\u5b89\u88c5 mongoose \u7b49\u76f8\u5173\u4f9d\u8d56\u5305\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/mongoose --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    // \u7ec4\u4ef6\n    "@midwayjs/mongoose": "^3.0.0",\n    // \u4e0a\u4e00\u8282\u4e2d\u7684 mongoose \u4f9d\u8d56\n  },\n  "devDependencies": {\n    // \u4e0a\u4e00\u8282\u4e2d\u7684 mongoose \u4f9d\u8d56\n    // ...\n  }\n}\n')),(0,r.kt)("h3",{id:"2\u5f00\u542f\u7ec4\u4ef6"},"2\u3001\u5f00\u542f\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5b89\u88c5\u540e\u9700\u8981\u624b\u52a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u914d\u7f6e\uff0c\u4ee3\u7801\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as mongoose from '@midwayjs/mongoose';\n\n@Configuration({\n  imports: [\n    mongoose                                            // \u52a0\u8f7d mongoose \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,r.kt)("h3",{id:"2\u914d\u7f6e"},"2\u3001\u914d\u7f6e"),(0,r.kt)("p",null,"\u548c typegoose \u76f8\u540c\uff0c\u6216\u8005\u8bf4 typegoose \u4f7f\u7528\u7684\u5c31\u662f mongoose \u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5355\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    client: {\n      uri: 'mongodb://localhost:27017/test',\n      options: {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        user: '***********',\n        pass: '**********'\n      }\n    }\n  },\n}\n")),(0,r.kt)("p",null,"\u591a\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    clients: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true,\n          useUnifiedTopology: true,\n          user: '***********',\n          pass: '***********'\n        }\n      },\n      db1: {\n        uri: 'mongodb://localhost:27017/test1',\n        options: {\n          useNewUrlParser: true,\n          useUnifiedTopology: true,\n          user: '***********',\n          pass: '***********'\n        }\n      }\n    }\n  },\n}\n")),(0,r.kt)("h3",{id:"3\u4f7f\u7528"},"3\u3001\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728\u53ea\u6709\u4e00\u4e2a\u9ed8\u8ba4\u8fde\u63a5\u6216\u8005\u76f4\u63a5\u4f7f\u7528 default \u8fde\u63a5\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5c01\u88c5\u597d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongooseConnectionService")," \u5bf9\u8c61\u6765\u521b\u5efa model\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/decorator';\nimport { MongooseConnectionService } from '@midwayjs/mongoose';\nimport { Schema, Document } from 'mongoose';\n\ninterface User extends Document {\n  name: string;\n  email: string;\n  avatar: string;\n}\n\n@Provide()\nexport class TestService {\n\n  @Inject()\n  conn: MongooseConnectionService;\n\n  async invoke(){\n    const schema = new Schema<User>({\n      name: { type: String, required: true },\n      email: { type: String, required: true },\n      avatar: String\n    });\n    const UserModel = this.conn.model<User>('User', schema);\n    const doc = new UserModel({\n      name: 'Bill',\n      email: 'bill@initech.com',\n      avatar: 'https://i.imgur.com/dM7Thhn.png'\n    });\n    await doc.save();\n  }\n}\n\n")),(0,r.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u4e86\u591a\u4e2a\u5176\u4ed6\u8fde\u63a5\uff0c\u8bf7\u4ece\u5de5\u5382\u65b9\u6cd5\u4e2d\u83b7\u53d6\u8fde\u63a5\u540e\u518d\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MongooseConnectionServiceFactory } from '@midwayjs/mongoose';\nimport { Schema } from 'mongoose';\n\n@Provide()\nexport class TestService {\n\n  @Inject()\n  connFactory: MongooseConnectionServiceFactory;\n\n  async invoke(){\n    // get db1 connection\n    const conn = this.connFactory.get('db1');\n\n    // get default connection\n    const defaultConn = this.connFactory.get('default');\n\n  }\n}\n\n")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"1e002-you-are-using-a-nodejs-version-below-12220"},"1\u3001E002: You are using a NodeJS Version below 12.22.0"),(0,r.kt)("p",null,"\u5728\u65b0\u7248\u672c @typegoose/typegoose (v8, v9) \u4e2d\u589e\u52a0\u4e86 Node \u7248\u672c\u7684\u6821\u9a8c\uff0c\u5982\u679c\u4f60\u7684 Node.js \u7248\u672c\u4f4e\u4e8e v12.22.0\uff0c\u5c31\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u63d0\u793a\u3002"),(0,r.kt)("p",null,"\u666e\u901a\u60c5\u51b5\u4e0b\uff0c\u8bf7\u5347\u7ea7 Node.js \u5230\u8fd9\u4e2a\u7248\u672c\u4ee5\u4e0a\u5373\u53ef\u89e3\u51b3\u3002"),(0,r.kt)("p",null,"\u5728\u7279\u6b8a\u573a\u666f\u4e0b\uff0c\u6bd4\u5982 Serverless \u65e0\u6cd5\u4fee\u6539 Node.js \u7248\u672c\u4e14\u7248\u672c\u4f4e\u4e8e v12.22 \u7684\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e v12 \u7248\u672c\u5b50\u7248\u672c\u5176\u5b9e\u90fd\u53ef\u4ee5\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e34\u65f6\u4fee\u6539 process.version \u7ed5\u8fc7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nObject.defineProperty(process, 'version', {\n  value: 'v12.22.0',\n  writable: true,\n});\n\n// other code\n\nexport class AutoConfiguration {}\n")))}g.isMDXComponent=!0}}]);