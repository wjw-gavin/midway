"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(a),h=i,d=c["".concat(o,".").concat(h)]||c[h]||s[h]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,l[1]=p;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={date:"2024-01-13T20:00",authors:["czy88840616","flyingcrp","qingniaotonghua","xuandao"]},l="v3.14.0",p={permalink:"/en/changelog/v3.14.0",source:"@site/changelog/source/v3.14.0.md",title:"v3.14.0",description:"New Feature",date:"2024-01-13T20:00:00.000Z",formattedDate:"January 13, 2024",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"flyingcrp",alias:"flyingcrp",url:"https://github.com/flyingcrp",imageURL:"https://github.com/flyingcrp.png",key:"flyingcrp"},{name:"wangwei",alias:"qingniaotonghua",url:"https://github.com/qingniaotonghua",imageURL:"https://github.com/qingniaotonghua.png",key:"qingniaotonghua"},{name:"\u7384\u9053",alias:"xuandao",url:"https://github.com/xuandao",imageURL:"https://github.com/xuandao.png",key:"xuandao"}],frontMatter:{date:"2024-01-13T20:00",authors:["czy88840616","flyingcrp","qingniaotonghua","xuandao"]},nextItem:{title:"v3.13.9",permalink:"/en/changelog/v3.13.9"},listPageLink:"/en/changelog/"},o={authorsImageUrls:[void 0,void 0,void 0,void 0]},m=[{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:2},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 4",id:"committers-4",level:2}],u={toc:m},c="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cache-manager-redis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cache-manager"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mikro"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"redis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"swagger"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3556"},"#3556")," feat: Release/3.14.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,i.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Other",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2741"},"#2741")," fix: normal return will be close stream (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swagger"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3555"},"#3555")," fix: Swagger tags are duplicate, deprecated field in ApiOperation is \u2026 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/qingniaotonghua"},"@qingniaotonghua"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redis"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3533"},"#3533")," fix(redis): Check the status of the redis client before closing redis (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/flyingcrp"},"@flyingcrp"),")")))),(0,i.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mikro"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3557"},"#3557")," chore(deps): update mikro-orm monorepo to v6.0.3 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3551"},"#3551")," fix(deps): update dependency axios to v1.6.5 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3535"},"#3535")," fix(deps): update dependency axios to v1.6.4 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3523"},"#3523")," fix(deps): update dependency axios to v1.6.3 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bootstrap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"socketio"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3552"},"#3552")," fix(deps): update socket.io packages to v4.7.4 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bull-board"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3534"},"#3534")," fix(deps): update bull monorepo to v5.10.3 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casbin-typeorm-adapter"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"typeorm"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3532"},"#3532")," chore(deps): update dependency typeorm to v0.3.19 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ws"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3524"},"#3524")," fix(deps): update dependency ws to v8.16.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,i.kt)("h2",{id:"committers-4"},"Committers: 4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Harry Chen (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,i.kt)("li",{parentName:"ul"},"flyingcrp (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/flyingcrp"},"@flyingcrp"),")"),(0,i.kt)("li",{parentName:"ul"},"wangwei (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/qingniaotonghua"},"@qingniaotonghua"),")"),(0,i.kt)("li",{parentName:"ul"},"\u7384\u9053 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/xuandao"},"@xuandao"),")")))}s.isMDXComponent=!0}}]);