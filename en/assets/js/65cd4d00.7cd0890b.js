"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,y=m["".concat(c,".").concat(h)]||m[h]||s[h]||i;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},51120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={date:"2023-12-27T20:00",authors:["cyjake","czy88840616"]},l="v3.13.9",o={permalink:"/en/changelog/v3.13.9",source:"@site/changelog/source/v3.13.9.md",title:"v3.13.9",description:"Bug Fix",date:"2023-12-27T20:00:00.000Z",formattedDate:"December 27, 2023",tags:[],hasTruncateMarker:!0,authors:[{name:"Chen Yangjian",alias:"cyjake",url:"https://github.com/cyjake",imageURL:"https://github.com/cyjake.png",key:"cyjake"},{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"}],frontMatter:{date:"2023-12-27T20:00",authors:["cyjake","czy88840616"]},prevItem:{title:"v3.14.0",permalink:"/en/changelog/v3.14.0"},nextItem:{title:"v3.13.8",permalink:"/en/changelog/v3.13.8"},listPageLink:"/en/changelog/"},c={authorsImageUrls:[void 0,void 0]},p=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 2",id:"committers-2",level:2}],u={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mock"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3521"},"#3521")," fix: wrong protocol get in local (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3519"},"#3519")," fix: support custom args pass through (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,a.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"leoric"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3509"},"#3509")," feat: inject ctx and app to leoric models (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cyjake"},"@cyjake"),")")))),(0,a.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grpc"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3363"},"#3363")," fix(deps): update dependency @grpc/grpc-js to v1.9.13 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,a.kt)("h2",{id:"committers-2"},"Committers: 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chen Yangjian (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cyjake"},"@cyjake"),")"),(0,a.kt)("li",{parentName:"ul"},"Harry Chen (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))}s.isMDXComponent=!0}}]);