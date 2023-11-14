"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(a),h=i,k=c["".concat(o,".").concat(h)]||c[h]||s[h]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,l[1]=p;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={date:"2023-11-13T19:00",authors:["cyjake","czy88840616","ghostoy"]},l="v3.13.0",p={permalink:"/changelog/v3.13.0",source:"@site/changelog/source/v3.13.0.md",title:"v3.13.0",description:"New Feature",date:"2023-11-13T19:00:00.000Z",formattedDate:"2023\u5e7411\u670813\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"Chen Yangjian",alias:"cyjake",url:"https://github.com/cyjake",imageURL:"https://github.com/cyjake.png",key:"cyjake"},{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"Cong Liu",alias:"ghostoy",url:"https://github.com/ghostoy",imageURL:"https://github.com/ghostoy.png",key:"ghostoy"}],frontMatter:{date:"2023-11-13T19:00",authors:["cyjake","czy88840616","ghostoy"]},prevItem:{title:"v3.13.1",permalink:"/changelog/v3.13.1"},nextItem:{title:"v3.12.10",permalink:"/changelog/v3.12.10"},listPageLink:"/changelog/"},o={authorsImageUrls:[void 0,void 0,void 0]},m=[{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:2},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 3",id:"committers-3",level:2}],u={toc:m},c="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bootstrap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bull"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cron"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"grpc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kafka"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"socketio"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"typeorm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web-express"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web-koa"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ws"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3328"},"#3328")," feat: support v3 logger (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jwt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3261"},"#3261")," feat: config separated options for verify & decode and bug fixes (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ghostoy"},"@ghostoy"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3381"},"#3381")," feat: add build-in healthService (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,i.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3247"},"#3247")," fix: sort with imports sequence before framework run (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static-file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3422"},"#3422")," fix: static file component namespace (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,i.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jwt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3425"},"#3425")," chore: export default jwt instance (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3391"},"#3391")," feat: add enable config for http-proxy (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"passport"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web-koa"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3402"},"#3402")," fix: context.state property override when context typings merge (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,i.kt)("h2",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3417"},"#3417")," docs(session): Supplementary explanation on SameSite = None (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cyjake"},"@cyjake"),")")),(0,i.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web-koa"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2975"},"#2975")," fix(deps): update dependency koa to v2.14.2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mock"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3420"},"#3420")," fix(deps): update dependency @types/supertest to v2.0.16 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3421"},"#3421")," fix(deps): update dependency axios to v1.6.1 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oss"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3418"},"#3418")," fix(deps): update dependency @types/ali-oss to v6.16.11 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jwt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3419"},"#3419")," fix(deps): update dependency @types/jsonwebtoken to v9.0.5 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"otel"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3410"},"#3410")," chore(deps): update dependency @opentelemetry/sdk-node to v0.45.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mikro"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3408"},"#3408")," chore(deps): update mikro-orm monorepo to v5.9.3 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,i.kt)("h2",{id:"committers-3"},"Committers: 3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chen Yangjian (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cyjake"},"@cyjake"),")"),(0,i.kt)("li",{parentName:"ul"},"Cong Liu (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ghostoy"},"@ghostoy"),")"),(0,i.kt)("li",{parentName:"ul"},"Harry Chen (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))}s.isMDXComponent=!0}}]);