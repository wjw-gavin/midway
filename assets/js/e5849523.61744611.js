"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7513],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"\u4efb\u52a1\u8c03\u5ea6\uff08Task\uff09"},s=void 0,c={unversionedId:"extensions/task",id:"version-2.0.0/extensions/task",title:"\u4efb\u52a1\u8c03\u5ea6\uff08Task\uff09",description:"@midwayjs/task \u662f\u4e3a\u4e86\u89e3\u51b3\u4efb\u52a1\u7cfb\u5217\u7684\u6a21\u5757\uff0c\u4f8b\u5982\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1\u3001\u5ef6\u8fdf\u4efb\u52a1\u8c03\u5ea6\u3002\u4f8b\u5982\u6bcf\u65e5\u5b9a\u65f6\u62a5\u8868\u90ae\u4ef6\u53d1\u9001\u3001\u8ba2\u5355 2 \u5c0f\u65f6\u540e\u5931\u6548\u7b49\u5de5\u4f5c\u3002",source:"@site/versioned_docs/version-2.0.0/extensions/task.md",sourceDirName:"extensions",slug:"/extensions/task",permalink:"/docs/extensions/task",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/extensions/task.md",tags:[],version:"2.0.0",frontMatter:{title:"\u4efb\u52a1\u8c03\u5ea6\uff08Task\uff09"},sidebar:"component",previous:{title:"\u7f13\u5b58\uff08Cache\uff09",permalink:"/docs/extensions/cache"},next:{title:"Swagger",permalink:"/docs/extensions/swagger"}},p=[{value:"\u5b89\u88c5\u7ec4\u4ef6",id:"\u5b89\u88c5\u7ec4\u4ef6",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:"\u4e1a\u52a1\u4ee3\u7801\u7f16\u5199\u65b9\u5f0f",id:"\u4e1a\u52a1\u4ee3\u7801\u7f16\u5199\u65b9\u5f0f",children:[{value:"\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",id:"\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1",children:[],level:3},{value:"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1",id:"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1",children:[],level:3},{value:"\u624b\u52a8\u89e6\u53d1\u4efb\u52a1",id:"\u624b\u52a8\u89e6\u53d1\u4efb\u52a1",children:[{value:"\u8bbe\u7f6e\u8fdb\u5ea6",id:"\u8bbe\u7f6e\u8fdb\u5ea6",children:[],level:4},{value:"\u4efb\u52a1\u7684\u76f8\u5173\u5185\u5bb9",id:"\u4efb\u52a1\u7684\u76f8\u5173\u5185\u5bb9",children:[],level:4}],level:3},{value:"\u542f\u52a8\u5c31\u89e6\u53d1",id:"\u542f\u52a8\u5c31\u89e6\u53d1",children:[],level:3}],level:2},{value:"\u8fd0\u7ef4",id:"\u8fd0\u7ef4",children:[{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",children:[],level:3},{value:"\u6392\u67e5\u95ee\u9898\u94fe\u8def\uff1a",id:"\u6392\u67e5\u95ee\u9898\u94fe\u8def",children:[],level:3},{value:"traceId",id:"traceid",children:[],level:3},{value:"\u4e1a\u52a1\u5185\u90e8\u7684\u4ee3\u7801",id:"\u4e1a\u52a1\u5185\u90e8\u7684\u4ee3\u7801",children:[],level:3}],level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[{value:"Cron \u8868\u8fbe\u5f0f",id:"cron-\u8868\u8fbe\u5f0f",children:[],level:3},{value:"EVALSHA \u9519\u8bef",id:"evalsha-\u9519\u8bef",children:[],level:3},{value:"\u5386\u53f2\u65e5\u5fd7\u5220\u9664",id:"\u5386\u53f2\u65e5\u5fd7\u5220\u9664",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"@midwayjs/task \u662f\u4e3a\u4e86\u89e3\u51b3\u4efb\u52a1\u7cfb\u5217\u7684\u6a21\u5757\uff0c\u4f8b\u5982\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1\u3001\u5ef6\u8fdf\u4efb\u52a1\u8c03\u5ea6\u3002\u4f8b\u5982\u6bcf\u65e5\u5b9a\u65f6\u62a5\u8868\u90ae\u4ef6\u53d1\u9001\u3001\u8ba2\u5355 2 \u5c0f\u65f6\u540e\u5931\u6548\u7b49\u5de5\u4f5c\u3002\n\u200b"),(0,i.kt)("p",null,"\u8bf4\u660e\uff1a\u7531\u4e8e\u5e95\u5c42\u662f\u4f9d\u8d56 bull\uff0c\u5176\u901a\u8fc7 redis \u8fdb\u884c\u5b9e\u73b0\uff0c\u6240\u4ee5\u914d\u7f6e\u4e2d\uff0c\u9700\u8981\u52a0\u4e00\u4e2a redis \u7684\u914d\u7f6e\u3002\n\u200b"),(0,i.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6"},"\u5b89\u88c5\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u9996\u5148\u5b89\u88c5 Midway \u63d0\u4f9b\u7684\u4efb\u52a1\u7ec4\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @midwayjs/task@2 -S\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\uff0c\u5f15\u5165\u8fd9\u4e2a\u7ec4\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as task from '@midwayjs/task'; // \u5bfc\u5165\u6a21\u5757\nimport { join } from 'path';\n\n@Configuration({\n  imports: [task],\n  importConfigs: [join(__dirname, 'config')],\n})\nexport class AutoConfiguration {}\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"config.default.ts")," \u6587\u4ef6\u4e2d\u914d\u7f6e\u5bf9\u5e94\u7684\u6a21\u5757\u4fe1\u606f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const taskConfig = {\n  redis: `redis://127.0.0.1:32768`, //\u4efb\u52a1\u4f9d\u8d56redis\uff0c\u6240\u4ee5\u6b64\u5904\u9700\u8981\u52a0\u4e00\u4e2aredis\n  prefix: 'midway-task', // \u8fd9\u4e9b\u4efb\u52a1\u5b58\u50a8\u7684key\uff0c\u90fd\u662fmidway-task\u5f00\u5934\uff0c\u4ee5\u4fbf\u533a\u5206\u7528\u6237\u539f\u6709redis\u91cc\u9762\u7684\u914d\u7f6e\u3002\n  defaultJobOptions: {\n    repeat: {\n      tz: 'Asia/Shanghai', // Task\u7b49\u53c2\u6570\u91cc\u9762\u8bbe\u7f6e\u7684\u6bd4\u5982\uff080 0 0 * * *\uff09\u672c\u6765\u662f\u4e3a\u4e860\u70b9\u6267\u884c\uff0c\u4f46\u662f\u7531\u4e8e\u65f6\u533a\u4e0d\u5bf9\uff0c\u6240\u4ee5\u56fd\u5185\u7528\u6237\u65f6\u533a\u8bbe\u7f6e\u4e00\u4e0b\u3002\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u6709\u8d26\u53f7\u5bc6\u7801\u60c5\u51b5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const taskConfig = {\n  redis: {\n    port: 6379,\n    host: '127.0.0.1',\n    password: 'foobared',\n  }, //\u6b64\u5904\u76f8\u5f53\u4e8e\u662fioredis\u7684\u914d\u7f6e https://www.npmjs.com/package/ioredis\n  prefix: 'midway-task', // \u8fd9\u4e9b\u4efb\u52a1\u5b58\u50a8\u7684key\uff0c\u90fd\u662fmidway-task\u5f00\u5934\uff0c\u4ee5\u4fbf\u533a\u5206\u7528\u6237\u539f\u6709redis\u91cc\u9762\u7684\u914d\u7f6e\u3002\n  defaultJobOptions: {\n    repeat: {\n      tz: 'Asia/Shanghai', // Task\u7b49\u53c2\u6570\u91cc\u9762\u8bbe\u7f6e\u7684\u6bd4\u5982\uff080 0 0 * * *\uff09\u672c\u6765\u662f\u4e3a\u4e860\u70b9\u6267\u884c\uff0c\u4f46\u662f\u7531\u4e8e\u65f6\u533a\u4e0d\u5bf9\uff0c\u6240\u4ee5\u56fd\u5185\u7528\u6237\u65f6\u533a\u8bbe\u7f6e\u4e00\u4e0b\u3002\n    },\n  },\n};\n")),(0,i.kt)("h2",{id:"\u4e1a\u52a1\u4ee3\u7801\u7f16\u5199\u65b9\u5f0f"},"\u4e1a\u52a1\u4ee3\u7801\u7f16\u5199\u65b9\u5f0f"),(0,i.kt)("h3",{id:"\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1"},"\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, Task } from '@midwayjs/decorator';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  helloService: HelloService;\n\n  // \u4f8b\u5982\u4e0b\u9762\u662f\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c\u5e76\u4e14\u662f\u5206\u5e03\u5f0f\u4efb\u52a1\n  @Task({\n    repeat: { cron: '* * * * *' },\n  })\n  async test() {\n    console.log(this.helloService.getName());\n  }\n}\n")),(0,i.kt)("h3",{id:"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1"},"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, TaskLocal } from '@midwayjs/decorator';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  helloService: HelloService;\n\n  // \u4f8b\u5982\u4e0b\u9762\u662f\u6bcf\u79d2\u949f\u6267\u884c\u4e00\u6b21\n  @TaskLocal('* * * * * *')\n  async test() {\n    console.log(this.helloService.getName());\n  }\n}\n")),(0,i.kt)("h3",{id:"\u624b\u52a8\u89e6\u53d1\u4efb\u52a1"},"\u624b\u52a8\u89e6\u53d1\u4efb\u52a1"),(0,i.kt)("p",null,"\u4efb\u52a1\u7684\u5b9a\u4e49\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Queue")," \u88c5\u9970\u5668\uff0c\u5b9a\u4e49\u4e00\u4e2a\u4efb\u52a1\u7c7b\uff0c\u5185\u5fc5\u987b\u542b\u6709 execute \u65b9\u6cd5\uff0c\u5e76\u4e14\u662f async \u7684\u3002\u4e3a\u4ec0\u4e48\u9700\u8981\u662f async \u7684\u56e0\u4e3a\uff0c\u8fd9\u4e2a\u4ee3\u7801\uff0c\u662f\u4e3a\u4e86\u5206\u5e03\u5f0f\uff0c\u76f8\u5f53\u4e8e\u6709\u4e2a\u5185\u90e8\u7684\u4efb\u52a1\u8c03\u5ea6\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, Queue } from '@midwayjs/decorator';\n\n@Queue()\n@Provide()\nexport class HelloTask {\n  @Inject()\n  service;\n\n  async execute(params) {\n    console.log(params);\n  }\n}\n")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u89e6\u53d1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { QueueService } from '@midwayjs/task';\nimport { Provide, Inject } from '@midwayjs/decorator';\n\n@Provide()\nexport class UserTask {\n  @Inject()\n  service;\n\n  @Inject()\n  queueService: QueueService;\n\n  async execute(params) {\n    // 3\u79d2\u540e\u89e6\u53d1\u5206\u5e03\u5f0f\u4efb\u52a1\u8c03\u5ea6\u3002\n    const xxx = await this.queueService.execute(HelloTask, params, { delay: 3000 });\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u6837\uff0c\u5c31\u76f8\u5f53\u4e8e\u662f 3 \u79d2\u540e\uff0c\u89e6\u53d1 HelloTask \u8fd9\u4e2a\u4efb\u52a1\u3002\n\u200b"),(0,i.kt)("h4",{id:"\u8bbe\u7f6e\u8fdb\u5ea6"},"\u8bbe\u7f6e\u8fdb\u5ea6"),(0,i.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u5728\u505a\u97f3\u89c6\u9891\u6216\u8005\u53d1\u5e03\u8fd9\u79cd\u6bd4\u8f83\u8017\u65f6\u7684\u4efb\u52a1\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u8bbe\u7f6e\u8fdb\u5ea6\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1620884757992-fb18a58f-9e56-4eda-92d9-68965df73e8a.png#clientId=uecb893ec-cfee-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=342&id=ubf7a3918&margin=%5Bobject%20Object%5D&name=image.png&originHeight=454&originWidth=576&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29448&status=done&style=none&taskId=uffac1111-2306-44ac-bd3e-906503e1764&title=&width=434",width:"434"}),(0,i.kt)("p",null,"\u76f8\u5f53\u4e8e\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5c06 bull \u7684 job \u4f20\u9012\u7ed9\u4e86\u7528\u6237\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 job.progress \u6765\u8bbe\u7f6e\u8fdb\u5ea6\u3002\n\u200b"),(0,i.kt)("p",null,"\u7136\u540e\u67e5\u8be2\u8fdb\u5ea6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { QueueService } from '@midwayjs/task';\nimport { Provide, Controller, Get } from '@midwayjs/decorator';\n\n@Provide()\n@Controller()\nexport class HelloController {\n  @Inject()\n  queueService: QueueService;\n\n  @Get('/get-queue')\n  async getQueue(@Query() id: string) {\n    return await this.queueService.getClassQueue(TestJob).getJob(id);\n  }\n}\n")),(0,i.kt)("h4",{id:"\u4efb\u52a1\u7684\u76f8\u5173\u5185\u5bb9"},"\u4efb\u52a1\u7684\u76f8\u5173\u5185\u5bb9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let job = await this.queueService.getClassQueue(TestJob).getJob(id);\n")),(0,i.kt)("p",null,"\u7136\u540e job \u4e0a\u9762\u6709\u7c7b\u4f3c\u505c\u6b62\u7684\u65b9\u6cd5\uff0c\u6216\u8005\u67e5\u770b\u8fdb\u5ea6\u7684\u65b9\u6cd5\u3002\n\u200b"),(0,i.kt)("h3",{id:"\u542f\u52a8\u5c31\u89e6\u53d1"},"\u542f\u52a8\u5c31\u89e6\u53d1"),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u6709\u670b\u53cb\u7531\u4e8e\u53ea\u6709\u4e00\u53f0\u673a\u5668\uff0c\u5e0c\u671b\u91cd\u542f\u540e\u7acb\u9a6c\u80fd\u6267\u884c\u4e00\u4e0b\u5bf9\u5e94\u7684\u5b9a\u65f6\u4efb\u52a1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, ILifeCycle, IMidwayBaseApplication, IMidwayContainer } from '@midwayjs/core';\nimport { Configuration } from '@midwayjs/decorator';\nimport { Queue } from 'bull';\nimport { join } from 'path';\nimport * as task from '@midwayjs/task';\nimport { QueueService } from '@midwayjs/task';\n\n@Configuration({\n  imports: [task],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerConfiguration implements ILifeCycle {\n  async onReady(container: IMidwayContainer, app?: IMidwayBaseApplication<Context>): Promise<void> {\n    // Task\u8fd9\u5757\u7684\u542f\u52a8\u540e\u7acb\u9a6c\u6267\u884c\n    let result: any = await container.getAsync(QueueService);\n    let job: Queue = result.getQueueTask(`HelloTask`, 'task'); // \u6b64\u5904\u7b2c\u4e00\u4e2a\u662f\u4f60\u4efb\u52a1\u7684\u7c7b\u540d\uff0c\u7b2c\u4e8c\u4e2a\u4efb\u52a1\u7684\u540d\u5b57\u4e5f\u5c31\u662f\u88c5\u9970\u5668Task\u7684\u51fd\u6570\u540d\n    job.add({}, { delay: 0 }); // \u8868\u793a\u7acb\u5373\u6267\u884c\u3002\n  }\n}\n")),(0,i.kt)("h2",{id:"\u8fd0\u7ef4"},"\u8fd0\u7ef4"),(0,i.kt)("h3",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,i.kt)("p",null,"\u5728 Midway Task Component \u4e0a\u9762\uff0c\u589e\u52a0\u4e86\u4e24\u4e2a\u65e5\u5fd7\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"midway-task.log"),(0,i.kt)("li",{parentName:"ul"},"midway-task-error.log")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u5206\u522b\u5728 task\u3001localTask\u3001queue \u89e6\u53d1\u5f00\u59cb\u548c\u7ed3\u675f\u7684\u65f6\u5019\u4f1a\u6253\u5370\u5bf9\u5e94\u7684\u65e5\u5fd7\u3002\n\u200b"),(0,i.kt)("p",null,"\u5206\u5e03\u5f0f\u7684 Task \u89e6\u53d1\u65e5\u5fd7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.info(`task start.`);\n\n// \u5f02\u5e38\u60c5\u51b5\uff1a\nlogger.error(`${e.stack}`);\n\nlogger.info(`task end.`);\n")),(0,i.kt)("p",null,"\u975e\u5206\u5e03\u5f0f\u7684 LocalTask \u89e6\u53d1\u65e5\u5fd7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.info(`local task start.`);\n\n// \u5f02\u5e38\u60c5\u51b5\uff1a\n// logger.error(`${e.stack}`)\n\nlogger.info(`local task end.`);\n")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u4efb\u52a1\u961f\u5217\u7684\u89e6\u53d1\u65e5\u5fd7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.info(`queue process start.`);\n\n// \u5f02\u5e38\u60c5\u51b5\uff1a\n// logger.error(`${e.stack}`)\n\nlogger.info(`queue process end.`);\n")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("h3",{id:"\u6392\u67e5\u95ee\u9898\u94fe\u8def"},"\u6392\u67e5\u95ee\u9898\u94fe\u8def\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1626926172431-ce41c896-fc64-4c73-8d3b-f2633a916b5f.png#clientId=u62783ce8-4645-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=504&id=viDCK&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1008&originWidth=1992&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2693469&status=done&style=none&taskId=u467a4354-7dc2-49c3-9bb6-3c6dea1903e&title=&width=996",width:"996"}),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u641c\u7d22\u8fd9\u4e2a\u76f8\u540c\u7684 id\uff0c\u627e\u5230\u540c\u4e00\u6b21\u8bf7\u6c42\u7684\u65e5\u5fd7\u3002\n\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u5728\u81ea\u5df1\u7684\u4e1a\u52a1\u4ee3\u7801\u4e2d\u4e32\u8054\u5bf9\u5e94\u7684\u65e5\u5fd7\uff0c\u6211\u5728 ctx \u4e0a\u9762\u6302\u4e86 traceId \u53d8\u91cf\u3002\n\u200b"),(0,i.kt)("p",null,"\u4f8b\u5982\u5f02\u5e38\u60c5\u51b5\uff1a\n\u5f53\u5f02\u5e38\u7684\u65f6\u5019\uff0c\n",(0,i.kt)("strong",{parentName:"p"},"\u672c\u5730 \u53ef\u4ee5\u5728 console \u680f\u5185\u770b\u5230\u8fd9\u4e2a\u9519\u8bef\u76f8\u5173\u7684\u60c5\u51b5\uff1a")),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1626929372403-df50b85d-c71e-4b87-b602-275d10d3dc83.png#clientId=u8f28ddc7-5bc1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=162&id=UlGrO&margin=%5Bobject%20Object%5D&name=image.png&originHeight=324&originWidth=1964&originalType=binary&ratio=1&rotation=0&showTitle=false&size=669523&status=done&style=none&taskId=u4b77719b-978b-4a21-90f8-3ee205dbf9d&title=&width=982",width:"982"}),(0,i.kt)("p",null,"\u65e5\u5fd7\uff1a \u53ef\u4ee5\u5728 midway-task.log \u6587\u4ef6\u4e2d\u67e5\u770b\u5b8c\u6574\u65e5\u5fd7\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1626929372403-df50b85d-c71e-4b87-b602-275d10d3dc83.png#clientId=u8f28ddc7-5bc1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=162&id=binL0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=324&originWidth=1964&originalType=binary&ratio=1&rotation=0&showTitle=false&size=669523&status=done&style=none&taskId=u4b77719b-978b-4a21-90f8-3ee205dbf9d&title=&width=982",width:"982"}),(0,i.kt)("p",null,"\u5982\u679c\u8c03\u7528\u60c5\u51b5\u6bd4\u8f83\u591a\u7684\u65f6\u5019\uff0c\u4f1a\u51fa\u73b0 A \u8fd8\u6ca1\u6267\u884c\u5b8c\u6210\uff0cB \u53c8\u8fdb\u6765\uff0c\u5bfc\u81f4\u65e5\u5fd7\u533a\u5206\u6bd4\u8f83\u9ebb\u70e6\uff0c\u6240\u4ee5\u7528\u6237\u53ef\u4ee5\u641c\u7d22\u8c03\u7528\u7684 traceId\uff0c\u4e5f\u5c31\u662f\u4e0b\u56fe\u7ea2\u8272\u5708\u8d77\u6765\u7684\u5730\u65b9\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1626929496543-7d79db19-622f-4f99-a2fd-60b7f00bd57d.png#clientId=u8f28ddc7-5bc1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=163&id=DM3xz&margin=%5Bobject%20Object%5D&name=image.png&originHeight=326&originWidth=2034&originalType=binary&ratio=1&rotation=0&showTitle=false&size=691391&status=done&style=none&taskId=ucd8b1d59-b13d-4fc4-81e2-2d4f43bab7b&title=&width=1017",width:"1017"}),(0,i.kt)("p",null,"\u76f8\u5f53\u4e8e ctrl + f \u641c\u7d22\u76f8\u540c\u7684 traceId \u5373\u53ef\u3002\n\u200b"),(0,i.kt)("h3",{id:"traceid"},"traceId"),(0,i.kt)("p",null,"localTask \u5219\u662f\u81ea\u5df1\u751f\u6210\u4e86\u4e00\u4e2a uuid \u7684 id \u4f5c\u4e3a traceId\u3002\n\u200b"),(0,i.kt)("p",null,"task \u548c queue \u5219\u91c7\u7528 job \u7684 id \u4f5c\u4e3a traceId\u3002\n\u200b"),(0,i.kt)("h3",{id:"\u4e1a\u52a1\u5185\u90e8\u7684\u4ee3\u7801"},"\u4e1a\u52a1\u5185\u90e8\u7684\u4ee3\u7801"),(0,i.kt)("p",null,"\u5728 service \u5185\u53ef\u4ee5\u901a\u8fc7 inject \u6ce8\u5165 logger\uff0c\u6216\u8005\u6ce8\u5165 ctx \u62ff logger \u53d8\u91cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Inject, Provide, Queue } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/koa';\n\n@Queue()\n@Provide()\nexport class QueueTask {\n  @App()\n  app: Application;\n\n  @Inject()\n  logger;\n\n  async execute(params) {\n    this.logger.info(`====>QueueTask execute`);\n    this.app.getApplicationContext().registerObject(`queueConfig`, JSON.stringify(params));\n  }\n}\n")),(0,i.kt)("p",null,"\u6216\u8005"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Inject, Provide, Queue } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/koa';\n\n@Queue()\n@Provide()\nexport class QueueTask {\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx;\n\n  async execute(params) {\n    this.ctx.logger.info(`====>QueueTask execute`);\n    this.app.getApplicationContext().registerObject(`queueConfig`, JSON.stringify(params));\n  }\n}\n")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u6253\u5370\u7684\u65e5\u5fd7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"2021-07-30 13:00:13,101 INFO 5577 [Queue][12][QueueTask] queue process start.\n2021-07-30 13:00:13,102 INFO 5577 [Queue][12][QueueTask] ====>QueueTask execute\n2021-07-30 13:00:13,102 INFO 5577 [Queue][12][QueueTask] queue process end.\n")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("h3",{id:"cron-\u8868\u8fbe\u5f0f"},"Cron \u8868\u8fbe\u5f0f"),(0,i.kt)("p",null,"\u5173\u4e8e Task \u4efb\u52a1\u7684\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"*    *    *    *    *    *\n\u252c    \u252c    \u252c    \u252c    \u252c    \u252c\n\u2502    \u2502    \u2502    \u2502    \u2502    |\n\u2502    \u2502    \u2502    \u2502    \u2502    \u2514 day of week (0 - 7) (0 or 7 is Sun)\n\u2502    \u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n\u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month (1 - 31)\n\u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n\u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 second (0 - 59, optional)\n")),(0,i.kt)("p",null,"\u5e38\u89c1\u8868\u8fbe\u5f0f\uff1a\n\u200b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u9694 5 \u79d2\u6267\u884c\u4e00\u6b21\uff1a",(0,i.kt)("em",{parentName:"li"},"/5 ")," ","*"," ","*"," ","*"," ?"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u9694 1 \u5206\u949f\u6267\u884c\u4e00\u6b21\uff1a0 ",(0,i.kt)("em",{parentName:"li"},"/1 ")," ","*"," ","*"," ?"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u5c0f\u65f6\u7684 20 \u5206\u6267\u884c\u4e00\u6b21\uff1a0 20 ","*"," ","*"," ","*"," ?"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u5929 0 \u70b9\u6267\u884c\u4e00\u6b21\uff1a0 0 0 ","*"," ","*"," ?"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u5929\u7684\u4e24\u70b9 35 \u5206\u6267\u884c\u4e00\u6b21\uff1a0 35 2 ","*"," ","*"," ?")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://cron.qqe2.com/"},"\u5728\u7ebf\u5de5\u5177")," \u6267\u884c\u786e\u8ba4\u4e0b\u4e00\u6b21\u6267\u884c\u7684\u65f6\u95f4\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1637042668291-70527b75-bb33-4ad2-adc0-5f0f5dfe8c81.png#clientId=u21d1027f-3ac8-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=340&id=gQnon&margin=%5Bobject%20Object%5D&name=image.png&originHeight=680&originWidth=1868&originalType=binary&ratio=1&rotation=0&showTitle=false&size=98959&status=done&style=none&taskId=u0adb2151-a667-4900-8bba-b13d4aac93c&title=&width=934",width:"934"}),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("h3",{id:"evalsha-\u9519\u8bef"},"EVALSHA \u9519\u8bef"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1633771728525-1efeb2a6-cefd-4fc3-a16d-0e9a97f371d1.png#clientId=u52b8d912-3ffa-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=51&id=u0c96f70a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=102&originWidth=3540&originalType=binary&ratio=1&rotation=0&showTitle=false&size=164783&status=done&style=none&taskId=uc38084d4-e2cf-435d-a8b9-6a9bec80c9b&title=&width=1770",width:"1770"}),(0,i.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u57fa\u672c\u660e\u786e\uff0c\u95ee\u9898\u4f1a\u51fa\u73b0\u5728 redis \u7684\u96c6\u7fa4\u7248\u672c\u4e0a\u3002\u539f\u56e0\u662f redis \u4f1a\u5bf9 key \u505a hash \u6765\u786e\u5b9a\u5b58\u50a8\u7684 slot\uff0c\u96c6\u7fa4\u4e0b\u8fd9\u4e00\u6b65@midwayjs/task \u7684 key \u547d\u4e2d\u4e86\u4e0d\u540c\u7684 slot\u3002\u4e34\u65f6\u7684\u89e3\u51b3\u529e\u6cd5\u662f taskConfig \u91cc\u7684 prefix \u914d\u7f6e\u7528{}\u5305\u62ec\uff0c\u5f3a\u5236 redis \u53ea\u8ba1\u7b97{}\u91cc\u7684 hash\uff0c\u4f8b\u5982 prefix: '{midway-task}'\n\u200b"),(0,i.kt)("h3",{id:"\u5386\u53f2\u65e5\u5fd7\u5220\u9664"},"\u5386\u53f2\u65e5\u5fd7\u5220\u9664"),(0,i.kt)("p",null,"\u5f53\u6bcf\u6b21 redis \u6267\u884c\u5b8c\u4ed6\u4f1a\u6709\u65e5\u5fd7\uff0c\u90a3\u4e48\u5982\u4f55\u8ba9\u5176\u5728\u5b8c\u6210\u540e\u5220\u9664\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Task } from '@midwayjs/decorator';\nimport { IUserOptions } from '../interface';\n\n@Provide()\nexport class UserService {\n  async getUser(options: IUserOptions) {\n    return {\n      uid: options.uid,\n      username: 'mockedName',\n      phone: '12345678901',\n      email: 'xxx.xxx@xxx.com',\n    };\n  }\n\n  @Task({\n    repeat: { cron: '* * * * * *' },\n    removeOnComplete: true, // \u52a0\u4e86\u4e00\u884c\u8fd9\u4e2a\n  })\n  async test() {\n    console.log(`====`);\n  }\n}\n")),(0,i.kt)("p",null,"\u76ee\u524d\u662f\u5426\u9ed8\u8ba4\u5220\u9664\uff0c\u9700\u8981\u8ddf\u7528\u6237\u6c9f\u901a"))}d.isMDXComponent=!0}}]);