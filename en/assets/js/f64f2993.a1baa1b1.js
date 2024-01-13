"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},l="Development tools",i={unversionedId:"tool/mwtsc",id:"tool/mwtsc",title:"Development tools",description:"Based on the standard tsc module, midway has developed a simple tool for developing and building ts files locally.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tool/mwtsc.md",sourceDirName:"tool",slug:"/tool/mwtsc",permalink:"/en/docs/tool/mwtsc",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/mwtsc.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Scaffolding",permalink:"/en/docs/tool/create_midway"},next:{title:"Lint tools and formatting",permalink:"/en/docs/tool/mwts"}},s={},c=[{value:"Common commands",id:"common-commands",level:2},{value:"Run command",id:"run-command",level:2},{value:"Framework configuration",id:"framework-configuration",level:2},{value:"Common abilities",id:"common-abilities",level:2},{value:"Adjust port",id:"adjust-port",level:3},{value:"Enable https",id:"enable-https",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-tools"},"Development tools"),(0,o.kt)("p",null,"Based on the standard tsc module, midway has developed a simple tool for developing and building ts files locally."),(0,o.kt)("p",null,"Its usage is almost identical to standard tsc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx mwtsc\n")),(0,o.kt)("p",null,"Equivalent to executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," command."),(0,o.kt)("h2",{id:"common-commands"},"Common commands"),(0,o.kt)("p",null,"Since mwtsc is developed based on tsc, it can use all tsc commands."),(0,o.kt)("p",null,"for example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Listening mode\n$ npx mwtsc --watch\n\n# Use different tsconfig files\n$ npx mwtsc --project tsconfig.production.json\n")),(0,o.kt)("p",null,"More parameters can be consulted ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"},"tsc cli tool"),"."),(0,o.kt)("p",null,"The following introduces more new parameters of midway."),(0,o.kt)("h2",{id:"run-command"},"Run command"),(0,o.kt)("p",null,"In order to make tsc effective during the code development period, midway provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," parameter, which is used to execute a file after tsc is compiled successfully, which is similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc-watch")," module."),(0,o.kt)("p",null,"for example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mwtsc --watch --run @midwayjs/mock/app.js\n")),(0,o.kt)("p",null,"The above command will execute the following logic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Compile the code and execute the ",(0,o.kt)("inlineCode",{parentName:"li"},"@midwayjs/mock/app.js")," file after successful compilation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"If you modify the code, compilation will be automatically triggered. After killing the last executed file, the ",(0,o.kt)("inlineCode",{parentName:"li"},"@midwayjs/mock/app.js")," file will be automatically executed.")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," parameter can execute any js file, and midway relies on this parameter for local development."),(0,o.kt)("p",null,"for example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx mwtsc --watch --run ./bootstrap.js\n")),(0,o.kt)("p",null,"Of course, it can also be used with other parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx mwtsc --watch --project tsconfig.production.json --run ./bootstrap.js\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command must be placed at the end, and all parameters after it will be passed to the child process."),(0,o.kt)("h2",{id:"framework-configuration"},"Framework configuration"),(0,o.kt)("p",null,"You can use mwtsc in the Midway project for development and testing, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n     "dev": "cross-env NODE_ENV=local mwtsc --watch --run @midwayjs/mock/app",\n     "build": "cross-env rm -rf dist && tsc"\n   },\n}\n')),(0,o.kt)("p",null,"Here ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock/app")," refers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock")," package. This file is used to start the framework during local development. For Serverless environments, there are also corresponding startup files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n     "dev": "cross-env NODE_ENV=local mwtsc --watch --run @midwayjs/mock/function",\n   },\n}\n')),(0,o.kt)("h2",{id:"common-abilities"},"Common abilities"),(0,o.kt)("h3",{id:"adjust-port"},"Adjust port"),(0,o.kt)("p",null,"The started http port can be dynamically modified through the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--port"),". This parameter has a higher priority than the port configuration in the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx mwtsc --watch --run @midwayjs/mock/app --port 7001\n")),(0,o.kt)("h3",{id:"enable-https"},"Enable https"),(0,o.kt)("p",null,"The framework has a built-in https certificate for local testing, which can be enabled through the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--ssl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx mwtsc --watch --run @midwayjs/mock/app --ssl\n")))}d.isMDXComponent=!0}}]);