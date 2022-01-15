"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2241],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2521:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={title:"Consul"},c=void 0,s={unversionedId:"extensions/consul",id:"version-2.0.0/extensions/consul",title:"Consul",description:"consul \u7528\u4e8e\u5fae\u670d\u52a1\u4e0b\u7684\u670d\u52a1\u6cbb\u7406\uff0c\u4e3b\u8981\u7279\u70b9\u6709\uff1a\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u5065\u5eb7\u68c0\u67e5\u3001\u952e\u503c\u5b58\u50a8\u3001\u5b89\u5168\u670d\u52a1\u901a\u4fe1\u3001\u591a\u6570\u636e\u4e2d\u5fc3\u7b49\u3002",source:"@site/versioned_docs/version-2.0.0/extensions/consul.md",sourceDirName:"extensions",slug:"/extensions/consul",permalink:"/docs/extensions/consul",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/extensions/consul.md",tags:[],version:"2.0.0",frontMatter:{title:"Consul"},sidebar:"component",previous:{title:"RabbitMQ",permalink:"/docs/extensions/rabbitmq"},next:{title:"\u4f7f\u7528 pm2",permalink:"/docs/pm2"}},p=[{value:"\u5b89\u88c5\u7ec4\u4ef6",id:"\u5b89\u88c5\u7ec4\u4ef6",children:[],level:2},{value:"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b",id:"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b",children:[],level:2},{value:"\u4f7f\u7528\u65b9\u6cd5\uff1a",id:"\u4f7f\u7528\u65b9\u6cd5",children:[],level:2},{value:"\u4f5c\u4e3a\u5ba2\u6237\u7aef",id:"\u4f5c\u4e3a\u5ba2\u6237\u7aef",children:[],level:2},{value:"\u914d\u7f6e\u4e2d\u5fc3",id:"\u914d\u7f6e\u4e2d\u5fc3",children:[],level:2},{value:"\u5176\u4ed6\u8bf4\u660e",id:"\u5176\u4ed6\u8bf4\u660e",children:[],level:2},{value:"\u642d\u5efa Consul \u6d4b\u8bd5\u670d\u52a1",id:"\u642d\u5efa-consul-\u6d4b\u8bd5\u670d\u52a1",children:[],level:2},{value:"\u5e38\u7528\u95ee\u9898",id:"\u5e38\u7528\u95ee\u9898",children:[{value:"\u4e0b\u7ebf\u670d\u52a1",id:"\u4e0b\u7ebf\u670d\u52a1",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"consul \u7528\u4e8e\u5fae\u670d\u52a1\u4e0b\u7684\u670d\u52a1\u6cbb\u7406\uff0c\u4e3b\u8981\u7279\u70b9\u6709\uff1a\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u5065\u5eb7\u68c0\u67e5\u3001\u952e\u503c\u5b58\u50a8\u3001\u5b89\u5168\u670d\u52a1\u901a\u4fe1\u3001\u591a\u6570\u636e\u4e2d\u5fc3\u7b49\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u7528 consul \u4f5c\u4e3a midway \u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 consul \u6765\u505a\u8f6f\u8d1f\u8f7d\u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u611f\u8c22 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boostbob"},"boostbob")," \u63d0\u4f9b\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u6548\u679c\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617690430023-1749c2da-14f3-4064-9388-b3e15669d7a2.png#height=494&id=zSztd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=988&originWidth=3144&originalType=binary&ratio=1&size=245867&status=done&style=none&width=1572",width:"1572"}),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617690444687-cf583ac5-82ec-4f31-a528-772491964184.png#height=937&id=X6FNK&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1874&originWidth=3140&originalType=binary&ratio=1&size=682382&status=done&style=none&width=1570",width:"1570"}),(0,o.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6"},"\u5b89\u88c5\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\u5b89\u88c5 consul \u7684\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @midwayjs/consul@2 -S\nnpm i @types/consul -D\n")),(0,o.kt)("h2",{id:"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b"},"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u80fd\u529b\uff08\u53ef\u9009\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u505c\u6b62\u670d\u52a1\u7684\u65f6\u5019\u53cd\u6ce8\u518c\uff08\u53ef\u9009\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u9009\u62e9\uff08\u968f\u673a\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u66b4\u9732\u539f\u59cb\u7684 consul \u5bf9\u8c61")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as consul from '@midwayjs/consul';\n\n@Configuration({\n  imports: [consul],\n  importConfigs: [join(__dirname, 'config')],\n})\nexport class ContainerConfiguration {}\n")),(0,o.kt)("p",null,"\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"config.default.ts"),"\xa0 \u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"config.consul = {\n  provider: {\n    // \u6ce8\u518c\u672c\u670d\u52a1\n    register: true,\n    // \u5e94\u7528\u6b63\u5e38\u4e0b\u7ebf\u53cd\u6ce8\u518c\n    deregister: true,\n    // consul server \u4e3b\u673a\n    host: '192.168.0.10', // \u6b64\u5904\u4fee\u6539 consul server \u7684\u5730\u5740\n    // consul server \u7aef\u53e3\n    port: 8500, // \u7aef\u53e3\u4e5f\u9700\u8981\u8fdb\u884c\u4fee\u6539\n    // \u8c03\u7528\u670d\u52a1\u7684\u7b56\u7565(\u9ed8\u8ba4\u9009\u53d6 random \u5177\u6709\u968f\u673a\u6027)\n    strategy: 'random',\n  },\n  service: {\n    address: '127.0.0.1', // \u6b64\u5904\u662f\u5f53\u524d\u8fd9\u4e2a midway \u5e94\u7528\u7684\u5730\u5740\n    port: 7001, // midway\u5e94\u7528\u7684\u7aef\u53e3\n    tags: ['tag1', 'tag2'], // \u505a\u6cf3\u9053\u9694\u79bb\u7b49\u4f7f\u7528\n    name: 'my-midway-project',\n    // others consul service definition\n  },\n};\n")),(0,o.kt)("p",null,"\u7136\u540e\u542f\u52a8 midway \u9879\u76ee\uff0c\u7136\u540e\u540c\u65f6\u6253\u5f00\u6211\u4eec consul server \u7684 ui \u5730\u5740\uff1a\n\u5c31\u5448\u73b0\u4e86\u5982\u4e0b\u6548\u679c\uff1a"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617690430023-1749c2da-14f3-4064-9388-b3e15669d7a2.png#height=494&id=N82Ws&margin=%5Bobject%20Object%5D&name=image.png&originHeight=988&originWidth=3144&originalType=binary&ratio=1&size=245867&status=done&style=none&width=1572",width:"1572"}),(0,o.kt)("p",null,"\u76f8\u5f53\u4e8e\u6211\u4eec\u7684 my-midway-project \u9879\u76ee\u6ce8\u518c\u4e0a\u6765\u4e86\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u505c\u6b62\u6211\u4eec\u7684 midway \u9879\u76ee\u3002"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617690952779-9b4b5293-47ca-4379-a7cb-2e1033785fc2.png#height=417&id=1RHPp&margin=%5Bobject%20Object%5D&name=image.png&originHeight=834&originWidth=3122&originalType=binary&ratio=1&size=280981&status=done&style=none&width=1561",width:"1561"}),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u9879\u76ee\u7684\u72b6\u6001\u5c31\u53d8\u4e3a\u7ea2\u8272\u4e86\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u6f14\u793a\u591a\u53f0\u7684\u60c5\u51b5\uff0c\u5982\u4e0b\u8868\u73b0\uff1a\uff081 \u53f0\u5728\u7ebf+1 \u53f0\u4e0d\u5728\u7ebf\uff09"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617691097036-3484b9c1-0825-4890-a275-59140ca57f1b.png#height=420&id=dW4kg&margin=%5Bobject%20Object%5D&name=image.png&originHeight=840&originWidth=3108&originalType=binary&ratio=1&size=293770&status=done&style=none&width=1554",width:"1554"}),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617691111593-4ef18594-179e-45bf-ac34-8bd16839a13b.png#height=369&id=AnxNA&margin=%5Bobject%20Object%5D&name=image.png&originHeight=738&originWidth=3076&originalType=binary&ratio=1&size=419244&status=done&style=none&width=1538",width:"1538"}),(0,o.kt)("h2",{id:"\u4f5c\u4e3a\u5ba2\u6237\u7aef"},"\u4f5c\u4e3a\u5ba2\u6237\u7aef"),(0,o.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u4f5c\u4e3a\u5ba2\u6237\u7aef A\uff0c\u9700\u8981\u8c03\u7528\u670d\u52a1 B \u7684\u63a5\u53e3\uff0c\u7136\u540e\u6211\u4eec\u9996\u5148\u662f\u67e5\u51fa B \u5065\u5eb7\u7684\u670d\u52a1\uff0c\u7136\u540e\u8fdb\u884c http \u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"\u6b64\u5904\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\uff0c\u6211\u4eec\u6a21\u62df\u67e5\u8be2\u521a\u521a\u6ce8\u518c\u7684\u6210\u529f\u7684\u670d\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport { BalancerService } from '@midwayjs/consul';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  balancerService: BalancerService;\n\n  @Get('/')\n  async home() {\n    const service = await this.balancerService.getServiceBalancer().select('my-midway-project');\n    console.log(service);\n    return 'Hello Midwayjs!';\n  }\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u770b\u5230 14 \u884c\u6253\u5370\u7684\u8fd9\u4e2a service \u7684\u5185\u5bb9\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  ID: 'c434e36b-1b62-c4e1-c4ec-76c5d3742ff8',\n  Node: '1b2d5b8771cb',\n  Address: '127.0.0.1',\n  Datacenter: 'dc1',\n  TaggedAddresses: {\n    lan: '127.0.0.1',\n    lan_ipv4: '127.0.0.1',\n    wan: '127.0.0.1',\n    wan_ipv4: '127.0.0.1'\n  },\n  NodeMeta: { 'consul-network-segment': '' },\n  ServiceKind: '',\n  ServiceID: 'my-midway-project:xxx:7001',\n  ServiceName: 'my-midway-project',\n  ServiceTags: [ 'tag1', 'tag2' ],\n  ServiceAddress: 'xxxxx',\n  ServiceTaggedAddresses: {\n    lan_ipv4: { Address: 'xxxxx', Port: 7001 },\n    wan_ipv4: { Address: 'xxxxxx', Port: 7001 }\n  },\n  ServiceWeights: { Passing: 1, Warning: 1 },\n  ServiceMeta: {},\n  ServicePort: 7001,\n  ServiceEnableTagOverride: false,\n  ServiceProxy: { MeshGateway: {}, Expose: {} },\n  ServiceConnect: {},\n  CreateIndex: 14,\n  ModifyIndex: 14\n}\n")),(0,o.kt)("p",null,"\u6b64\u65f6\uff0c\u6211\u4eec\u53ea\u8981\u901a\u8fc7 Address \u548c ServicePort \u53bb\u8fde\u63a5\u670d\u52a1 B\uff0c\u6bd4\u5982\u505a http \u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"\u67e5\u8be2\u4e0d\u5065\u5eb7\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport { BalancerService } from '@midwayjs/consul';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  balancerService: BalancerService;\n\n  @Get('/')\n  async home() {\n    const service = await this.balancerService.getServiceBalancer().select('my-midway-project', false);\n\n    console.log(service);\n\n    return 'Hello Midwayjs!';\n  }\n}\n")),(0,o.kt)("p",null,"13 \u884c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e0d\u5065\u5eb7\u7684\u8868\u73b0\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u4e2d\u5fc3"},"\u914d\u7f6e\u4e2d\u5fc3"),(0,o.kt)("p",null,"\u540c\u65f6 consul \u4e5f\u80fd\u4f5c\u4e3a\u4e00\u4e2a\u670d\u52a1\u914d\u7f6e\u7684\u5730\u65b9\uff0c\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport * as Consul from 'consul';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  @Get('/')\n  async home() {\n    await this.consul.kv.set(`name`, `juhai`);\n    // let res = await this.consul.kv.get(`name`);\n    // console.log(res);\n    return 'Hello Midwayjs!';\n  }\n}\n")),(0,o.kt)("p",null,"\u7b2c 13 \u884c\uff0c\u6bd4\u5982\u6211\u4eec\u8c03\u7528 set \u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u7136\u540e\u6211\u4eec 14 \u884c\u4e5f\u53ef\u4ee5\u62ff\u5230\u5bf9\u5e94\u7684\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u5728\u4ee3\u7801\u4e2d\uff0c\u6709\u540c\u5b66\u51fa\u73b0\uff0c\u5728\u6bcf\u6b21\u8bf7\u6c42\u4e2d\u53bb get \u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u8fd9\u65f6\u4f60\u7684 QPS \u591a\u5c11\u5bf9 consul server \u7684\u538b\u529b\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u5728 QPS \u6bd4\u8f83\u5927\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u5982\u4e0b\u5904\u7406\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Init, Inject, Provide, Scope, ScopeEnum } from '@midwayjs/decorator';\nimport * as Consul from 'consul';\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class ConfigService {\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  config: any;\n\n  @Init()\n  async init() {\n    setInterval(() => {\n      this.consul.kv.get(`name`).then((res) => {\n        this.config = res;\n      });\n    }, 5000);\n    this.config = await this.consul.kv.get(`name`);\n  }\n\n  async getConfig() {\n    return this.config;\n  }\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u76f8\u5f53\u4e8e\u5b9a\u65f6\u53bb\u83b7\u53d6\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u5f53\u6bcf\u4e2a\u8bf7\u6c42\u8fdb\u6765\u7684\u65f6\u5019\uff0c\u83b7\u53d6 Scope \u4e3a ScopeEnum.Singleton \u670d\u52a1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"getConfig"),"\xa0 \u65b9\u6cd5\uff0c\u8fd9\u6837\u6bcf 5s \u4e00\u6b21\u83b7\u53d6\u8bf7\u6c42\uff0c\u5c31\u51cf\u5c11\u4e86\u5bf9\u670d\u52a1\u7684\u538b\u529b\u3002"),(0,o.kt)("p",null,"Consul \u754c\u9762\u4e0a\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617703213009-850f48b3-e3ef-4036-bb8e-c7999986e668.png#height=391&id=4ccIQ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=782&originWidth=3140&originalType=binary&ratio=1&size=193680&status=done&style=none&width=1570",width:"1570"}),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617703225726-5e069b9d-cddd-4777-9a42-df4a1d30443d.png#height=619&id=1jAvc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1238&originWidth=2784&originalType=binary&ratio=1&size=213448&status=done&style=none&width=1392",width:"1392"}),(0,o.kt)("p",null,"\u4e00\u5171\u63d0\u4f9b\u5982\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-get"},"get"),"\uff0c\u83b7\u53d6\u5bf9\u5e94 key \u7684 value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-keys"},"keys"),"\uff0c\u67e5\u8be2\u67d0\u4e2a prefix \u7684 key \u7684\u5217\u8868"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-set"},"set"),"\uff0c\u8bbe\u7f6e\u5bf9\u5e94\u7684 key \u7684\u503c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-del"},"del"),"\uff0c\u5220\u9664\u5bf9\u5e94\u7684 key")),(0,o.kt)("h2",{id:"\u5176\u4ed6\u8bf4\u660e"},"\u5176\u4ed6\u8bf4\u660e"),(0,o.kt)("p",null,"\u8fd9\u6837\u7684\u597d\u5904\uff0c\u5c31\u662f A->B\uff0cB \u4e5f\u53ef\u4ee5\u8fdb\u884c\u6269\u5c55\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 tags \u505a\u6cf3\u9053\u9694\u79bb\u3002\u4f8b\u5982\u505a\u5355\u5143\u9694\u79bb\u7b49\u3002\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 ServiceWeights \u505a\u5bf9\u5e94\u7684\u6743\u91cd\u63a7\u5236\u3002"),(0,o.kt)("p",null,"consul \u8fd8\u80fd\u505a Key/Value \u7684\u914d\u7f6e\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u8fd9\u4e2a\u540e\u7eed\u6211\u4eec\u8003\u8651\u652f\u6301\u3002"),(0,o.kt)("h2",{id:"\u642d\u5efa-consul-\u6d4b\u8bd5\u670d\u52a1"},"\u642d\u5efa Consul \u6d4b\u8bd5\u670d\u52a1"),(0,o.kt)("p",null,"\u4e0b\u9762\u63cf\u8ff0\u4e86\u5355\u673a\u7248\u672c\u7684 consul \u642d\u5efa\u6d41\u7a0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -itd -P consul\n")),(0,o.kt)("p",null,"\u7136\u540e\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  my_consul_app docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                                                                                                                                                                    NAMES\n1b2d5b8771cb        consul              "docker-entrypoint.s\u2026"   4 seconds ago       Up 2 seconds        0.0.0.0:32782->8300/tcp, 0.0.0.0:32776->8301/udp, 0.0.0.0:32781->8301/tcp, 0.0.0.0:32775->8302/udp, 0.0.0.0:32780->8302/tcp, 0.0.0.0:32779->8500/tcp, 0.0.0.0:32774->8600/udp, 0.0.0.0:32778->8600/tcp   cocky_wing\n')),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u6253\u5f00 8500 \u6240\u5bf9\u5e94\u7684\u7aef\u53e3\uff1a\uff08\u4e0a\u56fe\u6bd4\u5982\u6211\u7684\u5bf9\u5e94\u7aef\u53e3\u662f 32779\uff09"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:32779/ui/dc1/kv"},"http://127.0.0.1:32779/ui/")),(0,o.kt)("p",null,"\u6253\u5f00\u540e\u6548\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617690430023-1749c2da-14f3-4064-9388-b3e15669d7a2.png#height=494&id=pZQL5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=988&originWidth=3144&originalType=binary&ratio=1&size=245867&status=done&style=none&width=1572",width:"1572"}),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"config.default.ts"),"\xa0 \u4e2d\u7684 port \u5c31\u662f 32779 \u7aef\u53e3\u3002"),(0,o.kt)("h2",{id:"\u5e38\u7528\u95ee\u9898"},"\u5e38\u7528\u95ee\u9898"),(0,o.kt)("h3",{id:"\u4e0b\u7ebf\u670d\u52a1"},"\u4e0b\u7ebf\u670d\u52a1"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u8981\u624b\u52a8\u5c06 consul \u754c\u9762\u4e0a\u4e0d\u9700\u8981\u7684\u670d\u52a1\u7ed9\u4e0b\u7ebf\u6389\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport * as Consul from 'consul';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  @Get('/222')\n  async home2() {\n    let res = await this.consul.agent.service.deregister(`my-midway-project:30.10.72.195:7002`);\n    console.log(res);\n    return 'Hello Midwayjs2!';\n  }\n}\n")),(0,o.kt)("p",null,"13 \u884c\u7684 deregister \u91cc\u9762\uff0c\u5c31\u662f\u5bf9\u5e94 consul \u754c\u9762\u4e0a\u7684\u540d\u5b57\u4e86\uff1a"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617707700852-c21f6855-e587-4b1c-affb-b96dc576ff4a.png#height=577&id=IgPIB&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1154&originWidth=3724&originalType=binary&ratio=1&size=836136&status=done&style=none&width=1862",width:"1862"}))}d.isMDXComponent=!0}}]);