"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,g=c["".concat(p,".").concat(h)]||c[h]||s[h]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={date:"2023-11-23T20:00",authors:["ghostoy","gucovip"]},o="v3.13.3",l={permalink:"/changelog/v3.13.3",source:"@site/changelog/source/v3.13.3.md",title:"v3.13.3",description:"Bug Fix",date:"2023-11-23T20:00:00.000Z",formattedDate:"2023\u5e7411\u670823\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"Cong Liu",alias:"ghostoy",url:"https://github.com/ghostoy",imageURL:"https://github.com/ghostoy.png",key:"ghostoy"},{name:"Cong",alias:"gucovip",url:"https://github.com/gucovip",imageURL:"https://github.com/gucovip.png",key:"gucovip"}],frontMatter:{date:"2023-11-23T20:00",authors:["ghostoy","gucovip"]},prevItem:{title:"v3.13.4",permalink:"/changelog/v3.13.4"},nextItem:{title:"v3.13.2",permalink:"/changelog/v3.13.2"},listPageLink:"/changelog/page/2"},p={authorsImageUrls:[void 0,void 0]},u=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 2",id:"committers-2",level:2}],m={toc:u},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3448"},"#3448")," fix: parsing array of size > 20 in query (#3447) (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ghostoy"},"@ghostoy"),")")))),(0,r.kt)("h2",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3443"},"#3443")," docs(jwt): Fix a bug in the documentation example where ",(0,r.kt)("inlineCode",{parentName:"li"},"jwtService")," is not retrieved from ",(0,r.kt)("inlineCode",{parentName:"li"},"this"),". (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gucovip"},"@gucovip"),")")),(0,r.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3451"},"#3451")," chore(deps): update dependency autocannon to v7.14.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web-koa"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3441"},"#3441")," chore(deps): update dependency @types/koa to v2.13.12 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3434"},"#3434")," fix(deps): update dependency axios to v1.6.2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bull"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3435"},"#3435")," fix(deps): update dependency bull to v4.11.5 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,r.kt)("h2",{id:"committers-2"},"Committers: 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cong (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gucovip"},"@gucovip"),")"),(0,r.kt)("li",{parentName:"ul"},"Cong Liu (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ghostoy"},"@ghostoy"),")")))}s.isMDXComponent=!0}}]);