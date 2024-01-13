"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="Common git problems",i={unversionedId:"faq/git_problem",id:"faq/git_problem",title:"Common git problems",description:"File name case problem",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/faq/git_problem.md",sourceDirName:"faq",slug:"/faq/git_problem",permalink:"/en/docs/faq/git_problem",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/faq/git_problem.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Frequently Asked Framework Issues",permalink:"/en/docs/faq/framework_problem"},next:{title:"Common npm problems",permalink:"/en/docs/faq/npm_problem"}},s={},p=[{value:"File name case problem",id:"file-name-case-problem",level:2},{value:"Line wrapping problem under windows",id:"line-wrapping-problem-under-windows",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-git-problems"},"Common git problems"),(0,a.kt)("h2",{id:"file-name-case-problem"},"File name case problem"),(0,a.kt)("p",null,"Because git is not sensitive to case by default, if the file name is changed from small to uppercase, the file cannot be found to be changed and not submitted to the warehouse."),(0,a.kt)("p",null,"What's more frightening is that mac is also case-insensitive, and it often happens that it can run locally and execute errors when it goes to the server."),(0,a.kt)("p",null,"For this reason, we 'd better turn off the default case of git."),(0,a.kt)("p",null,"The following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git config core.ignorecase false ## takes effect for the current project\n$ git config --global --add core.ignorecase false ## takes effect globally\n")),(0,a.kt)("h2",{id:"line-wrapping-problem-under-windows"},"Line wrapping problem under windows"),(0,a.kt)("p",null,"When creating or cloning code on the Windows, developing or submitting code, the following errors may occur:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Delete '\u240d'eslint(prettier/prettier)\n")),(0,a.kt)("p",null,"The reasons are as follows:"),(0,a.kt)("p",null,"Due to historical reasons, the line breaks of text files under windows and linux are inconsistent."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows use both the carriage return CR(carriage-return character) and the line feed LF(linefeed character) when wrapping lines."),(0,a.kt)("li",{parentName:"ul"},"Mac and Linux systems, on the other hand, use only the line break LF."),(0,a.kt)("li",{parentName:"ul"},"The old version of the Mac system used the carriage return CR.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Windows"),(0,a.kt)("th",{parentName:"tr",align:null},"Linux/Mac"),(0,a.kt)("th",{parentName:"tr",align:null},"Old Mac(pre-OSX"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CRLF"),(0,a.kt)("td",{parentName:"tr",align:null},"LF"),(0,a.kt)("td",{parentName:"tr",align:null},"CR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"'\\n\\r'"),(0,a.kt)("td",{parentName:"tr",align:null},"'\\n'"),(0,a.kt)("td",{parentName:"tr",align:null},"'\\r'")))),(0,a.kt)("p",null,"Therefore, incompatibility problems occur when text files are created and used under different systems."),(0,a.kt)("p",null,"The solution is as follows:"),(0,a.kt)("p",null,"Set global git text line breaks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git config --global core.autocrlf false\n")),(0,a.kt)("p",null,"Note: After git global configuration, you need to pull the code again."),(0,a.kt)("p",null,"If you are using the vscode editor, the solution is as follows:"),(0,a.kt)("p",null,"In the lower-right corner of the editor, manually change ",(0,a.kt)("inlineCode",{parentName:"p"},"CRLF")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"LF")),(0,a.kt)("p",null,"This method can only modify the line break of the current file, using vscode to create a new file line break is also ",(0,a.kt)("inlineCode",{parentName:"p"},"CRLF"),", you can add the following configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"files.eol": "\\n",\n')),(0,a.kt)("p",null,"Reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904069304156168"},"Delete ",(0,a.kt)("inlineCode",{parentName:"a"},"\u240d")," eslint(prettier/prettier) Error Solution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/cn/github/getting-started-with-github/configuring-git-to-handle-line-endings"},"Configure a Git processing line terminator"))))}m.isMDXComponent=!0}}]);