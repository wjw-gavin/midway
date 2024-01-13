"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="Contribute to Midway",l={unversionedId:"contributing",id:"contributing",title:"Contribute to Midway",description:"Midway is an open source framework that welcomes everyone to contribute to the community, and this article describes how to submit issue, contribution code, documentation, and more to Midway.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/en/docs/contributing",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Midway maintenance plan",permalink:"/en/docs/release_schedule"},next:{title:"Awesome Midway",permalink:"/en/docs/awesome_midway"}},s={},p=[{value:"Report problems",id:"report-problems",level:2},{value:"Fix code problems",id:"fix-code-problems",level:2},{value:"Pull Request",id:"pull-request",level:3},{value:"Submit specifications",id:"submit-specifications",level:3},{value:"Fix document problems",id:"fix-document-problems",level:2},{value:"Quick Repair of Single Document",id:"quick-repair-of-single-document",level:3},{value:"Multiple document repair",id:"multiple-document-repair",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribute-to-midway"},"Contribute to Midway"),(0,i.kt)("p",null,"Midway is an open source framework that welcomes everyone to contribute to the community, and this article describes how to submit issue, contribution code, documentation, and more to Midway."),(0,i.kt)("h2",{id:"report-problems"},"Report problems"),(0,i.kt)("p",null,"If you encounter some problems in the development process and you cannot solve the problems you need to ask developers, we strongly recommend:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Find relevant problems in the document first"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"If you cannot solve it after searching, you can submit an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/discussions/new/choose"},"Q&A"),".")))),(0,i.kt)("p",null,"Please follow the following specifications when submitting the content."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Explain your purpose clearly in the title or content, either in Chinese or English."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"Describe the following in the content")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If it is a new requirement, please describe the requirement in detail, preferably with pseudo code implementation."),(0,i.kt)("li",{parentName:"ul"},"If it is a BUG, please provide reproduction steps, error logs, screenshots, relevant configurations, framework versions, etc. to enable developers to quickly locate the content of the problem"),(0,i.kt)("li",{parentName:"ul"},"If possible, please provide a minimum replicated code warehouse as much as possible for easy debugging."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Please search for relevant problems before you report them. Make sure you don't open duplicate questions")))),(0,i.kt)("p",null,"Developers will mark the problem, reply or solve the problem when they see it."),(0,i.kt)("h2",{id:"fix-code-problems"},"Fix code problems"),(0,i.kt)("p",null,"If you find that the framework has some problems to be modified, you can submit them through PR."),(0,i.kt)("h3",{id:"pull-request"},"Pull Request"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First, fork a warehouse in the upper-right corner of ",(0,i.kt)("a",{parentName:"p",href:"null"},"midway github")," to your own space.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"git clone The warehouse is developed or repaired in local or other IDE environments."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a new branch\n$ git checkout -b branch-name\n# install dependencies\n$ npm i\n# build code\n$ npm run build\n\n# Develop and execute tests\n$ npm test\n\n$ git add . # git add -u to delete files\n$ git commit -m "fix(role): role.use must xxx"\n$ git push origin branch-name\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Pull Request and choose to merge your own project branch into the main branch of the target midwayjs/midway.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The system will automatically create PR under midway warehouse. After the test passes, the developer will merge the PR."))),(0,i.kt)("h3",{id:"submit-specifications"},"Submit specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"General PR uses English titles"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"fix"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"chore"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"feat"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," fields are used to specify the type of the fix.")))),(0,i.kt)("h2",{id:"fix-document-problems"},"Fix document problems"),(0,i.kt)("p",null,"Similar to ordinary PR, if it is a single document, it can be submitted by quick editing."),(0,i.kt)("h3",{id:"quick-repair-of-single-document"},"Quick Repair of Single Document"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Open the document that needs to be repaired on the official website and click the ",(0,i.kt)("a",{parentName:"li",href:"#"},"Edit this page")," link in the lower-left corner."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},'Click the "Pen Type" button to enter the editing page'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"After editing the content, change the submitted title to ",(0,i.kt)("inlineCode",{parentName:"li"},"docs: xxxx")," and click Submit to create a PR."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:4},(0,i.kt)("li",{parentName:"ol"},"Waiting for developers to merge")))),(0,i.kt)("h3",{id:"multiple-document-repair"},"Multiple document repair"),(0,i.kt)("p",null,"Same as normal PR, clone warehouse, submit. Note that the title of the submitted PR is ",(0,i.kt)("inlineCode",{parentName:"p"},"docs: xxx"),"."))}c.isMDXComponent=!0}}]);