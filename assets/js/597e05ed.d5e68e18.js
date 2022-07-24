"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2859],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7903:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={},s="RabbitMQ",p={unversionedId:"extensions/rabbitmq",id:"extensions/rabbitmq",title:"RabbitMQ",description:"\u5728\u590d\u6742\u7cfb\u7edf\u7684\u67b6\u6784\u4e2d\uff0c\u4f1a\u6709\u8d1f\u8d23\u5904\u7406\u6d88\u606f\u961f\u5217\u7684\u5fae\u670d\u52a1\uff0c\u5982\u4e0b\u56fe\uff1a\u670d\u52a1A\u8d1f\u8d23\u4ea7\u751f\u6d88\u606f\u7ed9\u6d88\u606f\u961f\u5217\uff0c\u800c\u670d\u52a1B\u5219\u8d1f\u8d23\u6d88\u8d39\u6d88\u606f\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002",source:"@site/docs/extensions/rabbitmq.md",sourceDirName:"extensions",slug:"/extensions/rabbitmq",permalink:"/docs/extensions/rabbitmq",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"WebSocket",permalink:"/docs/extensions/ws"},next:{title:"\u94fe\u8def\u8ffd\u8e2a",permalink:"/docs/extensions/otel"}},c={},u=[{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u6d88\u8d39\u8005\uff08Consumer\uff09\u4f7f\u7528\u65b9\u6cd5",id:"\u6d88\u8d39\u8005consumer\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u5f00\u542f\u7ec4\u4ef6",id:"\u5f00\u542f\u7ec4\u4ef6",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"RabbitMQ \u6d88\u606f\u4e0a\u4e0b\u6587",id:"rabbitmq-\u6d88\u606f\u4e0a\u4e0b\u6587",level:3},{value:"\u914d\u7f6e\u6d88\u8d39\u8005",id:"\u914d\u7f6e\u6d88\u8d39\u8005",level:3},{value:"Fanout Exchange",id:"fanout-exchange",level:3},{value:"Direct Exchange",id:"direct-exchange",level:3},{value:"\u88c5\u9970\u5668\u53c2\u6570",id:"\u88c5\u9970\u5668\u53c2\u6570",level:3},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:3},{value:"\u751f\u4ea7\u8005\uff08Producer\uff09\u4f7f\u7528\u65b9\u6cd5",id:"\u751f\u4ea7\u8005producer\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56-1",level:3},{value:"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f",id:"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rabbitmq"},"RabbitMQ"),(0,i.kt)("p",null,"\u5728\u590d\u6742\u7cfb\u7edf\u7684\u67b6\u6784\u4e2d\uff0c\u4f1a\u6709\u8d1f\u8d23\u5904\u7406\u6d88\u606f\u961f\u5217\u7684\u5fae\u670d\u52a1\uff0c\u5982\u4e0b\u56fe\uff1a\u670d\u52a1A\u8d1f\u8d23\u4ea7\u751f\u6d88\u606f\u7ed9\u6d88\u606f\u961f\u5217\uff0c\u800c\u670d\u52a1B\u5219\u8d1f\u8d23\u6d88\u8d39\u6d88\u606f\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01SYMbCz1moVSVLl7S2_!!6000000005001-2-tps-646-251.png",alt:"image.png"})),(0,i.kt)("p",null,"\u5728Midway\u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u8ba2\u9605rabbitMQ\u7684\u80fd\u529b\uff0c\u4e13\u95e8\u6765\u6ee1\u8db3\u7528\u6237\u7684\u8fd9\u7c7b\u9700\u6c42\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8c03\u6574\u6682\u672a\u5b8c\u6210\uff0c\u8bf7\u7b49\u5f85\u5b8c\u6210\u540e\u518d\u4f7f\u7528\u3002"))),(0,i.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8ba2\u9605\u670d\u52a1")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,i.kt)("p",null,"RabbitMQ \u7684\u6982\u5ff5\u8f83\u4e3a\u590d\u6742\uff0c\u5176\u57fa\u4e8e\u9ad8\u7ea7\u6d88\u606f\u961f\u5217\u534f\u8bae\u5373 Advanced Message Queuing Protocol\uff08AMQP\uff09\uff0c\u5982\u679c\u7b2c\u4e00\u6b21\u63a5\u89e6\u8bf7\u9605\u8bfb\u4e00\u4e0b\u76f8\u5173\u7684\u53c2\u8003\u6587\u6863\u3002"),(0,i.kt)("p",null,"AMQP \u6709\u4e00\u4e9b\u6982\u5ff5\uff0cQueue\u3001Exchange \u548c Binding \u6784\u6210\u4e86 AMQP \u534f\u8bae\u7684\u6838\u5fc3\uff0c\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Producer\uff1a\u6d88\u606f\u751f\u4ea7\u8005\uff0c\u5373\u6295\u9012\u6d88\u606f\u7684\u7a0b\u5e8f\u3002"),(0,i.kt)("li",{parentName:"ul"},"Broker\uff1a\u6d88\u606f\u961f\u5217\u670d\u52a1\u5668\u5b9e\u4f53\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Exchange\uff1a\u6d88\u606f\u4ea4\u6362\u673a\uff0c\u5b83\u6307\u5b9a\u6d88\u606f\u6309\u4ec0\u4e48\u89c4\u5219\uff0c\u8def\u7531\u5230\u54ea\u4e2a\u961f\u5217\u3002"),(0,i.kt)("li",{parentName:"ul"},"Binding\uff1a\u7ed1\u5b9a\uff0c\u5b83\u7684\u4f5c\u7528\u5c31\u662f\u628a Exchange \u548c Queue \u6309\u7167\u8def\u7531\u89c4\u5219\u7ed1\u5b9a\u8d77\u6765\u3002"),(0,i.kt)("li",{parentName:"ul"},"Queue\uff1a\u6d88\u606f\u961f\u5217\u8f7d\u4f53\uff0c\u6bcf\u4e2a\u6d88\u606f\u90fd\u4f1a\u88ab\u6295\u5165\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u961f\u5217\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Consumer\uff1a\u6d88\u606f\u6d88\u8d39\u8005\uff0c\u5373\u63a5\u53d7\u6d88\u606f\u7684\u7a0b\u5e8f\u3002")),(0,i.kt)("p",null,"\u7b80\u5355\u7684\u7406\u89e3\uff0c\u6d88\u606f\u901a\u8fc7 Publisher \u53d1\u5e03\u5230 Exchange\uff08\u4ea4\u6362\u673a\uff09\uff0cConsumer \u901a\u8fc7\u8ba2\u9605 Queue \u6765\u63a5\u53d7\u6d88\u606f\uff0cExchange \u548c Queue \u901a\u8fc7\u8def\u7531\u505a\u8fde\u63a5\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01fLrucw1FVNbCx4NqG_!!6000000000492-2-tps-700-328.png",alt:"image.png"})),(0,i.kt)("h2",{id:"\u6d88\u8d39\u8005consumer\u4f7f\u7528\u65b9\u6cd5"},"\u6d88\u8d39\u8005\uff08Consumer\uff09\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u8ba2\u9605 rabbitMQ \u7684\u80fd\u529b\uff0c\u5e76\u80fd\u591f\u72ec\u7acb\u90e8\u7f72\u548c\u4f7f\u7528\u3002\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/rabbitmq")," \u6a21\u5757\u53ca\u5176\u5b9a\u4e49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/rabbitmq@3 --save\n$ npm i amqplib --save\n$ npm i @types/amqplib --save-dev\n")),(0,i.kt)("p",null,"\u6216\u8005\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/rabbitmq": "^3.0.0",\n    "amqplib": "^0.8.0",\n    // ...\n  },\n  "devDependencies": {\n    "@types/amqplib": "^0.8.2",\n    // ...\n  }\n}\n')),(0,i.kt)("h2",{id:"\u5f00\u542f\u7ec4\u4ef6"},"\u5f00\u542f\u7ec4\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/rabbmitmq")," \u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u4e3b\u6846\u67b6\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as rabbitmq from '@midwayjs/rabbitmq';\n\n@Configuration({\n  imports: [\n    rabbitmq\n  ],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,i.kt)("p",null,"\u4e5f\u53ef\u4ee5\u9644\u52a0\u5728\u5176\u4ed6\u7684\u4e3b\u6846\u67b6\u4e0b\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport * as rabbitmq from '@midwayjs/rabbitmq';\n\n@Configuration({\n  imports: [\n    koa,\n    rabbitmq\n  ],\n  // ...\n})\nexport class ContainerLifeCycle {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,i.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,i.kt)("p",null,"\u6211\u4eec\u4e00\u822c\u628a\u80fd\u529b\u5206\u4e3a\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\uff0c\u800c\u8ba2\u9605\u6b63\u662f\u6d88\u8d39\u8005\u7684\u80fd\u529b\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4e00\u822c\u628a\u6d88\u8d39\u8005\u653e\u5728 consumer \u76ee\u5f55\u3002\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/consumer/userConsumer.ts"),"  \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 consumer\n\u2502   \u2502   \u2514\u2500\u2500 user.consumer.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,i.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Consumer, MSListenerType, RabbitMQListener, Inject } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/rabbitmq';\nimport { ConsumeMessage } from 'amqplib';\n\n@Consumer(MSListenerType.RABBITMQ)\nexport class UserConsumer {\n\n  @Inject()\n  ctx: Context;\n\n  @RabbitMQListener('tasks')\n  async gotData(msg: ConsumeMessage) {\n    this.ctx.channel.ack(msg);\n  }\n\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Consumer")," \u88c5\u9970\u5668\uff0c\u63d0\u4f9b\u6d88\u8d39\u8005\u6807\u8bc6\uff0c\u5e76\u4e14\u5b83\u7684\u53c2\u6570\uff0c\u6307\u5b9a\u4e86\u67d0\u79cd\u6d88\u8d39\u6846\u67b6\u7684\u7c7b\u578b\uff0c\u6bd4\u5982\uff0c\u6211\u4eec\u8fd9\u91cc\u6307\u5b9a\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"MSListenerType.RABBITMQ")," \u8fd9\u4e2a\u7c7b\u578b\uff0c\u6307\u7684\u5c31\u662f rabbitMQ \u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u6807\u8bc6\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Consumer")," \u7684\u7c7b\uff0c\u5bf9\u65b9\u6cd5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@RabbitMQListener")," \u88c5\u9970\u5668\u540e\uff0c\u53ef\u4ee5\u7ed1\u5b9a\u4e00\u4e2a RabbitMQ \u7684\u961f\u5217\uff08Queue)\u3002"),(0,i.kt)("p",null,"\u65b9\u6cd5\u7684\u53c2\u6570\u4e3a\u63a5\u6536\u5230\u7684\u6d88\u606f\uff0c\u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumeMessage")," \u3002\u5982\u679c\u8fd4\u56de\u503c\u9700\u8981\u786e\u8ba4\uff0c\u5219\u9700\u8981\u5bf9\u670d\u52a1\u7aef\u8fdb\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"ack")," \u64cd\u4f5c\uff0c\u660e\u786e\u63a5\u6536\u5230\u7684\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u8ba2\u9605\u591a\u4e2a\u961f\u5217\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u6587\u4ef6\u3002"),(0,i.kt)("h3",{id:"rabbitmq-\u6d88\u606f\u4e0a\u4e0b\u6587"},"RabbitMQ \u6d88\u606f\u4e0a\u4e0b\u6587"),(0,i.kt)("p",null,"\u8ba2\u9605 ",(0,i.kt)("inlineCode",{parentName:"p"},"RabbitMQ")," \u6570\u636e\u7684\u4e0a\u4e0b\u6587\uff0c\u548c Web \u540c\u6837\u7684\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"requestContext")," \uff0c\u548c\u6bcf\u6b21\u63a5\u6536\u6d88\u606f\u7684\u6570\u636e\u7ed1\u5b9a\u3002"),(0,i.kt)("p",null,"\u4ece ctx \u4e0a\u53ef\u4ee5\u53d6\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," \uff0c\u6574\u4e2a ctx \u7684\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Context = {\n  channel: amqp.Channel;\n  requestContext: IMidwayContainer;\n};\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u4ece\u6846\u67b6\u83b7\u53d6\u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/rabbitmq';\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e\u6d88\u8d39\u8005"},"\u914d\u7f6e\u6d88\u8d39\u8005"),(0,i.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a rabbitmq \u7684\u5730\u5740\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport { MidwayConfig } from '@midwayjs/core';\n\nexport default {\n  // ...\n  rabbitmq: {\n    url: 'amqp://localhost'\n  }\n} as MidwayConfig;\n")),(0,i.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},"rabbitMQ \u7684\u8fde\u63a5\u4fe1\u606f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"socketOptions"),(0,i.kt)("td",{parentName:"tr",align:null},"amqplib.connect \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reconnectTime"),(0,i.kt)("td",{parentName:"tr",align:null},"\u961f\u5217\u65ad\u8fde\u540e\u7684\u91cd\u8bd5\u65f6\u95f4\uff0c\u9ed8\u8ba4 10 \u79d2")))),(0,i.kt)("h3",{id:"fanout-exchange"},"Fanout Exchange"),(0,i.kt)("p",null,"Fanout \u662f\u4e00\u79cd\u7279\u5b9a\u7684\u4ea4\u6362\u673a\uff0c\u5982\u679c\u6ee1\u8db3\u5339\u914d\uff08binding\uff09\uff0c\u5c31\u5f80 Exchange \u6240\u7ed1\u5b9a\u7684 Queue \u53d1\u9001\u6d88\u606f\u3002Fanout Exchange \u4f1a\u5ffd\u7565 RoutingKey \u7684\u8bbe\u7f6e\uff0c\u76f4\u63a5\u5c06 Message \u5e7f\u64ad\u5230\u6240\u6709\u7ed1\u5b9a\u7684 Queue \u4e2d\u3002"),(0,i.kt)("p",null,"\u5373\u6240\u6709\u8ba2\u9605\u8be5\u4ea4\u6362\u673a\u7684 Queue \u90fd\u4f1a\u6536\u5230\u6d88\u606f\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff0c\u4e0b\u9762\u6211\u4eec\u6dfb\u52a0\u4e86\u4e24\u4e2a Queue\uff0c\u8ba2\u9605\u4e86\u76f8\u540c\u7684\u4ea4\u6362\u673a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Consumer, MSListenerType, RabbitMQListener, Inject, App } from '@midwayjs/decorator';\nimport { Context, Application } from '@midwayjs/rabbitmq';\nimport { ConsumeMessage } from 'amqplib';\n\n@Consumer(MSListenerType.RABBITMQ)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @RabbitMQListener('abc', {\n    exchange: 'logs',\n    exchangeOptions: {\n      type: 'fanout',\n      durable: false,\n    },\n    exclusive: true,\n    consumeOptions: {\n      noAck: true,\n    }\n  })\n  async gotData(msg: ConsumeMessage) {\n    this.logger.info('test output1 =>', msg.content.toString('utf8'));\n    // TODO\n  }\n\n  @RabbitMQListener('bcd', {\n    exchange: 'logs',\n    exchangeOptions: {\n      type: 'fanout',\n      durable: false,\n    },\n    exclusive: true,\n    consumeOptions: {\n      noAck: true,\n    }\n  })\n  async gotData2(msg: ConsumeMessage) {\n    this.logger.info('test output2 =>', msg.content.toString('utf8'));\n    // TODO\n  }\n\n}\n\n")),(0,i.kt)("p",null,"\u8ba2\u9605\u7684 abc \u548c bcd \u961f\u5217\uff0c\u7ed1\u5b9a\u4e86\u76f8\u540c\u7684\u4ea4\u6362\u673a logs\uff0c\u6700\u7ec8\u7684\u7ed3\u679c\u662f\uff0c\u4e24\u4e2a\u65b9\u6cd5\u90fd\u4f1a\u88ab\u8c03\u7528\u3002"),(0,i.kt)("h3",{id:"direct-exchange"},"Direct Exchange"),(0,i.kt)("p",null,"Direct Exchange \u662f RabbitMQ \u9ed8\u8ba4\u7684 Exchange\uff0c\u5b8c\u5168\u6839\u636e RoutingKey \u6765\u8def\u7531\u6d88\u606f\u3002\u8bbe\u7f6e Exchange \u548c Queue \u7684 Binding \u65f6\u9700\u6307\u5b9a RoutingKey\uff08\u4e00\u822c\u4e3a Queue Name\uff09\uff0c\u53d1\u6d88\u606f\u65f6\u4e5f\u6307\u5b9a\u4e00\u6837\u7684 RoutingKey\uff0c\u6d88\u606f\u5c31\u4f1a\u88ab\u8def\u7531\u5230\u5bf9\u5e94\u7684Queue\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u6211\u4eec\u4e0d\u586b\u5199 Queue Name\uff0c\u53ea\u6dfb\u52a0\u4e00\u4e2a routingKey\uff0c\u4ea4\u6362\u673a\u7c7b\u578b\u4e3a direct\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Consumer, MSListenerType, RabbitMQListener, Inject, App } from '@midwayjs/decorator';\nimport { Context, Application } from '../../../../../src';\nimport { ConsumeMessage } from 'amqplib';\n\n@Consumer(MSListenerType.RABBITMQ)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @RabbitMQListener('', {\n    exchange: 'direct_logs',\n    exchangeOptions: {\n      type: 'direct',\n      durable: false,\n    },\n    routingKey: 'direct_key',\n    exclusive: true,\n    consumeOptions: {\n      noAck: true,\n    }\n  })\n  async gotData(msg: ConsumeMessage) {\n    // TODO\n  }\n}\n\n")),(0,i.kt)("p",null,"direct \u7c7b\u578b\u7684\u6d88\u606f\uff0c\u4f1a\u6839\u636e routerKey \u505a\u5b9a\u5411\u8fc7\u6ee4\uff0c\u6240\u4ee5\u53ea\u6709\u7279\u5b9a\u8ba2\u9605\u80fd\u6536\u5230\u6d88\u606f\u3002"),(0,i.kt)("h3",{id:"\u88c5\u9970\u5668\u53c2\u6570"},"\u88c5\u9970\u5668\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@RabbitMQListener")," \u88c5\u9970\u5668\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a queueName\uff0c\u4ee3\u8868\u9700\u8981\u76d1\u542c\u7684\u961f\u5217\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u961f\u5217\uff0c\u4ea4\u6362\u673a\u7b49\u53c2\u6570\uff0c\u8be6\u7ec6\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RabbitMQListenerOptions {\n  exchange?: string;\n  /**\n   * queue options\n   */\n  exclusive?: boolean;\n  durable?: boolean;\n  autoDelete?: boolean;\n  messageTtl?: number;\n  expires?: number;\n  deadLetterExchange?: string;\n  deadLetterRoutingKey?: string;\n  maxLength?: number;\n  maxPriority?: number;\n  pattern?: string;\n  /**\n   * prefetch\n   */\n  prefetch?: number;\n  /**\n   * router\n   */\n  routingKey?: string;\n  /**\n   * exchange options\n   */\n  exchangeOptions?: {\n    type?: 'direct' | 'topic' | 'headers' | 'fanout' | 'match' | string;\n    durable?: boolean;\n    internal?: boolean;\n    autoDelete?: boolean;\n    alternateExchange?: string;\n    arguments?: any;\n  };\n  /**\n   * consumeOptions\n   */\n  consumeOptions?: {\n    consumerTag?: string;\n    noLocal?: boolean;\n    noAck?: boolean;\n    exclusive?: boolean;\n    priority?: number;\n    arguments?: any;\n  };\n}\n")),(0,i.kt)("h3",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,i.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u65b9\u6cd5\u7528\u4e8e\u6d4b\u8bd5\u8ba2\u9605\u67d0\u4e2a\u6570\u636e\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock")," \u5de5\u5177\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"createRabbitMQProducer")," \u7684\u65b9\u6cd5\uff0c\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u751f\u4ea7\u8005\uff0c\u901a\u8fc7\u5b83\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u961f\u5217\uff08Queue\uff09\uff0c\u4ee5\u53ca\u5411\u8fd9\u4e2a\u961f\u5217\u53d1\u6d88\u606f\u3002"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u542f\u52a8\u4e00\u4e2a app\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u76d1\u542c\u5230\u8fd9\u4e2a\u961f\u5217\u4e2d\u7684\u6570\u636e\uff0c\u5e76\u6267\u884c\u540e\u7eed\u903b\u8f91\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createRabbitMQProducer, close, creatApp } from '@midwayjs/mock';\n\ndescribe('/test/index.test.ts', () => {\n  it('should test create message and get from app', async () => {\n    // create a queue and channel\n    const channel = await createRabbitMQProducer('tasks', {\n      isConfirmChannel: true,\n      mock: false,\n      url: 'amqp://localhost',\n    });\n\n    // send data to queue\n    channel.sendToQueue('tasks', Buffer.from('something to do'))\n\n    // create app and got data\n    const app = await creatApp();\n\n    // wait a moment\n\n    await close(app);\n  });\n});\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4e00")),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a fanout exchange\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const manager = await createRabbitMQProducer('tasks-fanout', {\n  isConfirmChannel: false,\n  mock: false,\n  url: 'amqp://localhost',\n});\n\n// Name of the exchange\nconst ex = 'logs';\n// Write a message\nconst msg = \"Hello World!\";\n\n// \u58f0\u660e\u4ea4\u6362\u673a\nmanager.assertExchange(ex, 'fanout', { durable: false }) // 'fanout' will broadcast all messages to all the queues it knows\n\n// \u542f\u52a8\u670d\u52a1\nconst app = await creatApp('base-app-fanout', {\n  url: 'amqp://localhost',\n  reconnectTime: 2000\n});\n\n// \u53d1\u9001\u5230\u4ea4\u6362\u673a\uff0c\u7531\u4e8e\u4e0d\u6301\u4e45\u5316\uff0c\u9700\u8981\u7b49\u8ba2\u9605\u670d\u52a1\u8d77\u6765\u4e4b\u540e\u518d\u53d1\nmanager.sendToExchange(ex, '', Buffer.from(msg))\n\n// \u7b49\u4e00\u6bb5\u65f6\u95f4\nawait sleep(5000);\n\n// \u6821\u9a8c\u7ed3\u679c\n\n// \u5173\u95ed producer\nawait manager.close();\n\n// \u5173\u95ed app\nawait close(app);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4e8c")),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a direct exchange\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n  * direct \u7c7b\u578b\u7684\u6d88\u606f\uff0c\u6839\u636e routerKey \u505a\u5b9a\u5411\u8fc7\u6ee4\n  */\nconst manager = await createRabbitMQProducer('tasks-direct', {\n  isConfirmChannel: false,\n  mock: false,\n  url: 'amqp://localhost',\n});\n\n// Name of the exchange\nconst ex = 'direct_logs';\n// Write a message\nconst msg = \"Hello World!\";\n\n// \u58f0\u660e\u4ea4\u6362\u673a\nmanager.assertExchange(ex, 'direct', { durable: false }) // 'fanout' will broadcast all messages to all the queues it knows\n\nconst app = await creatApp('base-app-direct', {\n  url:  'amqp://localhost',\n  reconnectTime: 2000\n});\n\n// \u8fd9\u91cc\u6307\u5b9a routerKey\uff0c\u53d1\u9001\u5230\u4ea4\u6362\u673a\nmanager.sendToExchange(ex, 'direct_key', Buffer.from(msg))\n\n// \u6821\u9a8c\u7ed3\u679c\n\nawait manager.close();\nawait close(app);\n")),(0,i.kt)("h2",{id:"\u751f\u4ea7\u8005producer\u4f7f\u7528\u65b9\u6cd5"},"\u751f\u4ea7\u8005\uff08Producer\uff09\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("p",null,"\u751f\u4ea7\u8005\uff08Producer\uff09\u4e5f\u5c31\u662f\u7b2c\u4e00\u8282\u4e2d\u7684\u6d88\u606f\u4ea7\u751f\u8005\uff0c\u7b80\u5355\u7684\u6765\u8bf4\u5c31\u662f\u4f1a\u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\uff0c\u5c06\u6d88\u606f\u53d1\u9001\u5230 RabbitMQ \u670d\u52a1\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u5f53\u524d Midway \u5e76\u6ca1\u6709\u4f7f\u7528\u7ec4\u4ef6\u6765\u652f\u6301\u6d88\u606f\u53d1\u9001\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u793a\u4f8b\u53ea\u662f\u4f7f\u7528\u7eaf SDK \u5728 Midway \u4e2d\u7684\u5199\u6cd5\u3002"),(0,i.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56-1"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i amqplib amqp-connection-manager --save\n$ npm i @types/amqplib --save-dev\n")),(0,i.kt)("h3",{id:"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f"},"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f"),(0,i.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u5728 service \u6587\u4ef6\u4e0b\uff0c\u65b0\u589e\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq.ts")," \u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Scope, ScopeEnum, Init, Autoload, Destroy } from '@midwayjs/decorator';\nimport * as amqp from 'amqp-connection-manager'\n\n@Autoload()\n@Provide()\n@Scope(ScopeEnum.Singleton) // Singleton \u5355\u4f8b\uff0c\u5168\u5c40\u552f\u4e00\uff08\u8fdb\u7a0b\u7ea7\u522b\uff09\nexport class RabbitmqService {\n\n  private connection: amqp.AmqpConnectionManager;\n\n  private channelWrapper;\n\n  @Init()\n  async connect() {\n    // \u521b\u5efa\u8fde\u63a5\uff0c\u4f60\u53ef\u4ee5\u628a\u914d\u7f6e\u653e\u5728 Config \u4e2d\uff0c\u7136\u540e\u6ce8\u5165\u8fdb\u6765\n    this.connection = await amqp.connect('amqp://localhost');\n\n    // \u521b\u5efa channel\n    this.channelWrapper = this.connection.createChannel({\n      json: true,\n      setup: function(channel) {\n        return Promise.all([\n          // \u7ed1\u5b9a\u961f\u5217\n            channel.assertQueue(\"tasks\", { durable: true }),\n        ]);\n      }\n    });\n  }\n\n  // \u53d1\u9001\u6d88\u606f\n  public async sendToQueue(queueName: string, data: any) {\n    return this.channelWrapper.sendToQueue(queueName, data);\n  }\n\n  @Destroy()\n  async close() {\n    await this.channelWrapper.close();\n    await this.connection.close();\n  }\n}\n\n")),(0,i.kt)("p",null,"\u5927\u6982\u5c31\u662f\u521b\u5efa\u4e86\u4e00\u4e2a\u7528\u6765\u5c01\u88c5\u6d88\u606f\u901a\u4fe1\u7684 service\uff0c\u540c\u65f6\u4ed6\u662f\u5168\u5c40\u552f\u4e00\u7684 Singleton \u5355\u4f8b\u3002\u7531\u4e8e\u589e\u52a0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoLoad")," \u88c5\u9970\u5668\uff0c\u53ef\u4ee5\u81ea\u6267\u884c\u521d\u59cb\u5316\u3002"),(0,i.kt)("p",null,"\u8fd9\u6837\u57fa\u7840\u7684\u8c03\u7528\u670d\u52a1\u5c31\u62bd\u8c61\u597d\u4e86\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u7528\u5230\u7684\u5730\u65b9\uff0c\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"sendToQueue")," \u65b9\u6cd5\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class UserService {\n\n  @Inject()\n  rabbitmqService: RabbitmqService;\n\n    async invoke() {\n    // TODO\n\n    // \u53d1\u9001\u6d88\u606f\n    await this.rabbitmqService.sendToQueue('tasks', {hello: 'world'});\n  }\n}\n")),(0,i.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/37198933"},"\u7406\u89e3 RabbitMQ Exchange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Gurenax/node-rabbitmq"},"RabbitMQ for Node.js in 30 steps"))))}d.isMDXComponent=!0}}]);