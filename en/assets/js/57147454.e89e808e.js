"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="About the slow start of Midway",i={unversionedId:"midway_slow_problem",id:"midway_slow_problem",title:"About the slow start of Midway",description:"Midway will use ts-node to scan and require modules in real time when developing locally. If there are too many ts files (such as 200 +), it may lead to slower startup, especially in the case of non-SSD hard disks under Windows, resulting in frequent fullGC of Server for ts-node type checking, and each file load may reach 1-2s.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/midway_slow_problem.md",sourceDirName:".",slug:"/midway_slow_problem",permalink:"/en/docs/midway_slow_problem",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/midway_slow_problem.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Server startup failure troubleshooting",permalink:"/en/docs/ops/ecs_start_err"},next:{title:"Midway maintenance plan",permalink:"/en/docs/release_schedule"}},s={},p=[{value:"How to judge",id:"how-to-judge",level:2},{value:"Solve the problem",id:"solve-the-problem",level:2},{value:"Other",id:"other",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-the-slow-start-of-midway"},"About the slow start of Midway"),(0,a.kt)("p",null,"Midway will use ts-node to scan and require modules in real time when developing locally. If there are too many ts files (such as 200 +), it may lead to slower startup, especially in the case of non-SSD hard disks under Windows, resulting in frequent fullGC of Server for ts-node type checking, and each file load may reach 1-2s."),(0,a.kt)("p",null,"Generally, Mac is SSD, so there is basically no problem, but Windows will appear, and there will be no such problem after construction."),(0,a.kt)("p",null,"As shown in the following figure."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1601523014939-40121f9c-bc19-4f9e-a7e6-e744d409a9ea.png",alt:null})),(0,a.kt)("h2",{id:"how-to-judge"},"How to judge"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clean up the ts-node cache first.")),(0,a.kt)("p",null,"There is a directory of ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node-*")," in the temporary directory, which can be deleted (if you do not know the temporary directory, you can execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"require('OS').tmpdir()")," output view on the command line)."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1601523402032-7e9c162a-762e-4cba-82b4-8ae63fe37280.png",alt:null})),(0,a.kt)("p",null,"Deleted the following similar directory."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1601523340452-7924affe-96b5-4544-85b7-e41ace4206e8.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Start Midway with ts-node")),(0,a.kt)("p",null,"Execute the following startup command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"// midway v1\ncross-env DEBUG=midway* NODE_ENV=local midway-bin dev --ts\n\n// midway v2\ncross-env NODE_DEBUG=midway* NODE_ENV=local midway-bin dev --ts\n")),(0,a.kt)("p",null,"The require duration of each file will appear, if the time is relatively long."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1601523470970-1812326a-39d9-4b39-af57-7723f80f6e17.png",alt:null})),(0,a.kt)("h2",{id:"solve-the-problem"},"Solve the problem"),(0,a.kt)("p",null,"Since a Server will be started inside ",(0,a.kt)("inlineCode",{parentName:"p"},"TS_NODE_TYPE_CHECK"),", when there are many special files, the type check will be done every require. If it causes serious startup impact, it is recommended to close it. ",(0,a.kt)("strong",{parentName:"p"},"The cost is that the type check is not performed at the start of the runtime. Because there is a prompt in the editor, the check is not performed at the runtime.")),(0,a.kt)("p",null,"Add the following two environment variables before executing the command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"TS_NODE_TYPE_CHECK=false TS_NODE_TRANSPILE_ONLY=true\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"cross-env TS_NODE_TYPE_CHECK=false TS_NODE_TRANSPILE_ONLY=true NODE_DEBUG=midway* NODE_ENV=local midway-bin dev --ts\n")),(0,a.kt)("p",null,"The following is the comparison effect of using the same items."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"First execution (no cache)"),(0,a.kt)("th",{parentName:"tr",align:null},"Second execution (with cache)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"No optimization parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"About 258s"),(0,a.kt)("td",{parentName:"tr",align:null},"about 5.6s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add optimization parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"About 15s"),(0,a.kt)("td",{parentName:"tr",align:null},"About 4.7s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("p",null,"If you have any questions, please submit your warehouse + node_modules to us."))}d.isMDXComponent=!0}}]);