"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,f=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},26637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={slug:"release/3.15.0",title:"Release 3.15.0",authors:["harry"],tags:["release"]},o=void 0,i={permalink:"/en/blog/release/3.15.0",source:"@site/blog/2024-02-22-release-3.15.md",title:"Release 3.15.0",description:"\u5f00\u5de5\u5927\u5409\u3002",date:"2024-02-22T00:00:00.000Z",formattedDate:"February 22, 2024",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:.96,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.15.0",title:"Release 3.15.0",authors:["harry"],tags:["release"]},prevItem:{title:"Release 3.16.0",permalink:"/en/blog/release/3.16.0"},nextItem:{title:"Release 3.14.0",permalink:"/en/blog/release/3.14.0"}},s={authorsImageUrls:[void 0]},p=[{value:"\u5168\u65b0\u7684 MQTT \u7ec4\u4ef6",id:"\u5168\u65b0\u7684-mqtt-\u7ec4\u4ef6",level:2},{value:"Swagger \u65b9\u6cd5\u7ea7\u522b\u7684 Security \u5ffd\u7565",id:"swagger-\u65b9\u6cd5\u7ea7\u522b\u7684-security-\u5ffd\u7565",level:2},{value:"mwtsc \u5de5\u5177\u652f\u6301\u4e86 Alias Path \u7684\u8bc6\u522b\u548c\u66ff\u6362",id:"mwtsc-\u5de5\u5177\u652f\u6301\u4e86-alias-path-\u7684\u8bc6\u522b\u548c\u66ff\u6362",level:2},{value:"\u66f4\u591a\u7684\u53d8\u5316",id:"\u66f4\u591a\u7684\u53d8\u5316",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f00\u5de5\u5927\u5409\u3002"),(0,a.kt)("p",null,"\u5347\u7ea7\u8bf7\u53c2\u8003  ",(0,a.kt)("a",{parentName:"p",href:"/docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,a.kt)("p",null,"\u672c\u6b21 3.15 \u7248\u672c\uff0c\u4e3b\u8981\u65b0\u589e\u4e86 MQTT \u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5168\u65b0\u7684-mqtt-\u7ec4\u4ef6"},"\u5168\u65b0\u7684 MQTT \u7ec4\u4ef6"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," \u521b\u5efa\u591a\u4e2a\u4e0d\u540c\u7684\u5b9e\u4f8b\uff0c\u65b9\u4fbf\u6ee1\u8db3\u7528\u6237\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u63a5\u7740\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions/mqtt"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"swagger-\u65b9\u6cd5\u7ea7\u522b\u7684-security-\u5ffd\u7565"},"Swagger \u65b9\u6cd5\u7ea7\u522b\u7684 Security \u5ffd\u7565"),(0,a.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiExcludeSecurity")," \u6765\u5ffd\u7565\u7279\u5b9a\u7684\u63a5\u53e3\u3002"),(0,a.kt)("h2",{id:"mwtsc-\u5de5\u5177\u652f\u6301\u4e86-alias-path-\u7684\u8bc6\u522b\u548c\u66ff\u6362"},"mwtsc \u5de5\u5177\u652f\u6301\u4e86 Alias Path \u7684\u8bc6\u522b\u548c\u66ff\u6362"),(0,a.kt)("p",null,"\u73b0\u5728\u65b0\u5de5\u5177\u5df2\u7ecf\u53ef\u4ee5\u8ba4\u8bc6 Alias \u8def\u5f84\u4e86\u3002"),(0,a.kt)("h2",{id:"\u66f4\u591a\u7684\u53d8\u5316"},"\u66f4\u591a\u7684\u53d8\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@koa/router \u5347\u7ea7\u5230\u4e86 v12 \u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u53c2\u6570\u88c5\u9970\u5668\u652f\u6301\u629b\u51fa\u5f02\u5e38")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u5927\u6279\u4f9d\u8d56\u8fdb\u884c\u4e86\u66f4\u65b0\uff0c\u66f4\u591a\u53ef\u4ee5\u53c2\u8003\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://midwayjs.org/changelog/v3.15.0"},"ChangeLog"),"\u3002"))}m.isMDXComponent=!0}}]);