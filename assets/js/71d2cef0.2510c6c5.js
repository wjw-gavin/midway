"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={slug:"release/3.8.0",title:"Release 3.8.0",authors:["harry"],tags:["release"]},o=void 0,i={permalink:"/blog/release/3.8.0",source:"@site/blog/2022-11-18-release-3-8.md",title:"Release 3.8.0",description:"v3.8.0 \u662f\u5728\u7ecf\u8fc7\u5927\u4fc3\u4e4b\u540e\u7684\u7b2c\u4e00\u4e2a minor \u7248\u672c\uff0c\u79ef\u6512\u4e86\u5f88\u591a\u65b0\u7684\u80fd\u529b\u3002",date:"2022-11-18T00:00:00.000Z",formattedDate:"2022\u5e7411\u670818\u65e5",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.93,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.8.0",title:"Release 3.8.0",authors:["harry"],tags:["release"]},prevItem:{title:"Release 3.9.0",permalink:"/blog/release/3.9.0"},nextItem:{title:"\u79fb\u9664 node v12 \u76f8\u5173\u7684\u4f9d\u8d56",permalink:"/blog/remove-node-v12"}},c={authorsImageUrls:[void 0]},s=[{value:"Features",id:"features",level:2},{value:"1\u3001etcd \u7ec4\u4ef6",id:"1etcd-\u7ec4\u4ef6",level:3},{value:"2\u3001ServiceFactory \u652f\u6301\u8bbe\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef",id:"2servicefactory-\u652f\u6301\u8bbe\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef",level:3},{value:"3\u3001\u6570\u636e\u6e90\u7c7b\u578b\u589e\u52a0 <code>@InjectDataSource</code> \u88c5\u9970\u5668",id:"3\u6570\u636e\u6e90\u7c7b\u578b\u589e\u52a0-injectdatasource-\u88c5\u9970\u5668",level:3},{value:"Bugfix",id:"bugfix",level:2},{value:"Performance",id:"performance",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"v3.8.0 \u662f\u5728\u7ecf\u8fc7\u5927\u4fc3\u4e4b\u540e\u7684\u7b2c\u4e00\u4e2a minor \u7248\u672c\uff0c\u79ef\u6512\u4e86\u5f88\u591a\u65b0\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u5347\u7ea7\u8bf7\u53c2\u8003  ",(0,a.kt)("a",{parentName:"p",href:"/docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"1etcd-\u7ec4\u4ef6"},"1\u3001etcd \u7ec4\u4ef6"),(0,a.kt)("p",null,"\u65b0\u589e\u4e86\u4e00\u4e2a etcd \u7ec4\u4ef6\uff0c\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\uff0c\u6587\u6863\u7a0d\u540e\u63d0\u4f9b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ETCDService } from '@midwayjs/etcd';\n\n@Provide()\nexport class UserService {\n  \n  @Inject()\n  etcdService: ETCDService;\n\n  async invoke() {\n\n    const fooValue = await this.etcdService.get('foo').string();\n    console.log('foo was:', fooValue);\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions/etcd"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"2servicefactory-\u652f\u6301\u8bbe\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef"},"2\u3001ServiceFactory \u652f\u6301\u8bbe\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef"),(0,a.kt)("p",null,"ServiceFactory \u63d0\u4f9b\u4e86\u6807\u51c6\u7684\u591a\u5ba2\u6237\u7aef\u80fd\u529b\uff0c\u5728\u9ed8\u8ba4\u7684\u5ba2\u6237\u7aef\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u975e default \u7684\u5ba2\u6237\u7aef\u4f5c\u4e3a\u9ed8\u8ba4\u5ba2\u6237\u7aef\u6765\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u8fd9\u9879\u80fd\u529b\u652f\u6301 ServiceFactory \u6269\u5c55\u51fa\u6765\u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u5305\u62ec axios/cos/oss/redis/tablestore \u7b49\uff0c\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u9002\u914d\u4eab\u53d7\u5230\u8be5\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u591a\u4e2a redis \u5ba2\u6237\u7aef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  redis: {\n    clients: {\n      default: {\n        // ...\n      },\n      default2: {\n        // ...\n      },\n    },\n  },\n}\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u6ce8\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisService")," \u6c38\u8fdc\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u6307\u5411\u7684\u5ba2\u6237\u7aef\uff0c\u800c\u65b0\u7248\u672c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u9ed8\u8ba4\u7684\u5ba2\u6237\u7aef\u540d\uff0c\u6765\u9009\u62e9\u9ed8\u8ba4\u7684\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  redis: {\n    clients: {\n      default: {\n        // ...\n      },\n      default2: {\n        // ...\n      },\n    },\n    defaultClientName: 'default2'\n  },\n}\n")),(0,a.kt)("p",null,"\u90a3\u4e48\u5b9e\u9645\u83b7\u53d6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"redisService")," \u4e2d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"default2")," \u8fd9\u4e2a\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n@Provide()\nexport class UserService {\n\n  @Inject()\n  redisService: RedisService;\n\n  async invoke() {\n    // this.redisService \u4e2d\u5305\u88f9\u7684\u662f default2\n  }\n}\n")),(0,a.kt)("h3",{id:"3\u6570\u636e\u6e90\u7c7b\u578b\u589e\u52a0-injectdatasource-\u88c5\u9970\u5668"},"3\u3001\u6570\u636e\u6e90\u7c7b\u578b\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h3"},"@InjectDataSource")," \u88c5\u9970\u5668"),(0,a.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u83b7\u53d6\u6570\u636e\u6e90\u7684\u8fc7\u7a0b\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectDataSource")," \u88c5\u9970\u5668\uff0c\u652f\u6301 mikro/sequelize/typeorm\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { InjectDataSource } from '@midwayjs/typeorm';\nimport { DataSource, Repository } from 'typeorm';\n\n@Provide()\nexport class UserService {\n  \n  @InjectDataSource()\n  defaultDataSource: DataSource;\n\n  async invoke() {\n\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u6307\u5b9a\u6570\u636e\u6e90\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { InjectDataSource } from '@midwayjs/typeorm';\nimport { DataSource, Repository } from 'typeorm';\n\n@Provide()\nexport class UserService {\n  \n  @InjectDataSource('default')\n  defaultDataSource: DataSource;\n\n  async invoke() {\n    // ...\n  }\n}\n")),(0,a.kt)("h2",{id:"bugfix"},"Bugfix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u4fee\u590d windows \u4e0b entity \u901a\u914d\u626b\u63cf\uff0c\u4e4b\u524d windows \u4e0b\u7684 entity \u5982\u679c\u4f7f\u7528\u4e86\u901a\u914d\u7b26\uff0c\u4f1a\u626b\u63cf\u5931\u8d25\uff0c\u5bfc\u81f4 entity \u65e0\u6cd5\u6b63\u786e\u7684\u52a0\u5165\u5230\u6570\u636e\u6e90\u4e2d\uff0c\u65b0\u7248\u672c\u4fee\u590d\u4e86\u8be5\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"2\u3001bull \u7684 Queue \u5b9a\u4e49\u5904\u7406\u95ee\u9898\uff0c\u73b0\u5728\u6587\u6863\u5df2\u7ecf\u505a\u4e86\u4fee\u6539\uff0c\u6ce8\u5165\u7684\u7c7b\u578b\u53ef\u4ee5\u7531 ",(0,a.kt)("inlineCode",{parentName:"li"},"IQueue")," \u53d8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"BullQueue"),"\u3002")),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"\u79fb\u9664\u4e86 babel \u7f16\u8bd1\u51fa\u7684 class \u7684\u517c\u5bb9\u5224\u65ad\uff0c\u6846\u67b6\u6574\u4f53\u6027\u80fd\u63d0\u5347\u7ea6\u4e00\u500d\u3002"))}p.isMDXComponent=!0}}]);