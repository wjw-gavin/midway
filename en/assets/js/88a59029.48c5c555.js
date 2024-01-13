"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Task scheduling",s={unversionedId:"legacy/task",id:"legacy/task",title:"Task scheduling",description:"This document is obsolete from v3.6.0.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/legacy/task.md",sourceDirName:"legacy",slug:"/legacy/task",permalink:"/en/docs/legacy/task",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/legacy/task.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"TypeORM",permalink:"/en/docs/legacy/orm"}},l={},p=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Introducing components",id:"introducing-components",level:2},{value:"Distributed timing task",id:"distributed-timing-task",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Code usage",id:"code-usage",level:3},{value:"Setting progress",id:"setting-progress",level:3},{value:"The relevant content of the task",id:"the-relevant-content-of-the-task",level:3},{value:"Triggered when started",id:"triggered-when-started",level:3},{value:"Common Cron expressions",id:"common-cron-expressions",level:2},{value:"Manually trigger tasks",id:"manually-trigger-tasks",level:2},{value:"Operation and Maintenance",id:"operation-and-maintenance",level:2},{value:"Log",id:"log",level:3},{value:"Troubleshoot problem links:",id:"troubleshoot-problem-links",level:3},{value:"traceId",id:"traceid",level:3},{value:"Code within the business",id:"code-within-the-business",level:3},{value:"Local timed task",id:"local-timed-task",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. EVALSHA error",id:"1-evalsha-error",level:3},{value:"2. Delete historical log",id:"2-delete-historical-log",level:3},{value:"3. Configure the Redis cluster",id:"3-configure-the-redis-cluster",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"task-scheduling"},"Task scheduling"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This document is obsolete from v3.6.0.")),(0,r.kt)("p",null,"@midwayjs/task is a module to solve task series, such as distributed scheduled tasks and delayed task scheduling. For example, daily regular report mail delivery, order failure after 2 hours, etc."),(0,r.kt)("p",null,"Distributed scheduled tasks depend on bull, which is implemented through redis. Therefore, additional Redis needs to be configured in the configuration. Local scheduled tasks are based on Cron module and do not need additional configuration."),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Other")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used independently as the main frame"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains custom logs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Middleware can be added independently"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("p",null,"First install the task components provided by Midway:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @midwayjs/task@3 @types/bull --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/task": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    "@types/bull": "^3.15.8 ",\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"introducing-components"},"Introducing components"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts"),", introduce this component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as task from '@midwayjs/task'; //Import module\nimport { join } from 'path';\n\n@Configuration({\n  imports: [task],\n  importConfigs: [join(__dirname, 'config')]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("h2",{id:"distributed-timing-task"},"Distributed timing task"),(0,r.kt)("p",null,"This is our most common way of timing tasks."),(0,r.kt)("p",null,"Distributed timed tasks can be distributed across multiple processes and multiple machines can execute a single timed task."),(0,r.kt)("p",null,"The distributed definition task depends on the Redis service and needs to be applied in advance."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Configure the corresponding module information in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.default.ts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  task: {\n    redis: 'redis:// 127.0.0.1:32768', // the task depends on redis, so a redis needs to be added here.\n    prefix: 'midway-task', // the keys stored in these tasks start with midway-task to distinguish the configurations in the user's original redis.\n    defaultJobOptions: {\n      repeat: {\n        Tz: \"Asia/Shanghai\" // Task and other parameters such as (0 0 0 * * *) were originally set for 0 o'clock, but because the time zone is not correct, the time zone for domestic users is set.\n      },\n    },\n  },\n}\n")),(0,r.kt)("p",null,"Account password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  task: {\n    // ioredis configuration https://www.npmjs.com/package/ioredis\n    redis: {\n      port: 6379\n      host: '127.0.0.1',\n      password: 'foobared',\n    },\n    prefix: 'midway-task', // the keys stored in these tasks start with midway-task to distinguish the configurations in the user's original redis.\n    defaultJobOptions: {\n      repeat: {\n        Tz: \"Asia/Shanghai\" // Task and other parameters such as (0 0 0 * * *) were originally set for 0 o'clock, but because the time zone is not correct, the time zone for domestic users is set.\n      },\n    },\n  },\n}\n")),(0,r.kt)("h3",{id:"code-usage"},"Code usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, Task, FORMAT } from '@midwayjs/core';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  helloService: HelloService;\n\n  // For example, the following is executed every minute and is a distributed task\n  @Task({\n    repeat: { cron: FORMAT.CRONTAB.EVERY_MINUTE}\n  })\n  async test() {\n    console.log(this.helloService.getName())\n  }\n}\n")),(0,r.kt)("h3",{id:"setting-progress"},"Setting progress"),(0,r.kt)("p",null,"For example, when we do audio and video or publish such time-consuming tasks, we hope to set the progress."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01WPYaAz21NgV3VNzjV_!!6000000006973-2-tps-576-454.png",alt:"image.png"})),(0,r.kt)("p",null,"equivalent to the second parameter, the job of bull is passed to the user. Users can set the progress through the ",(0,r.kt)("inlineCode",{parentName:"p"},"job.progress"),"."),(0,r.kt)("p",null,"Then query the progress:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { QueueService } from '@midwayjs/task';\nimport { Provide, Controller, Get } from '@midwayjs/core';\n\n@Controller()\nexport class HelloController {\n  @Inject()\n  queueService: QueueService;\n\n  @Get(\"/get-queue\")\n  async getQueue(@Query() id: string) {\n    return await this.queueService.getClassQueue(TestJob).getJob(id);\n  }\n}\n")),(0,r.kt)("h3",{id:"the-relevant-content-of-the-task"},"The relevant content of the task"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let job = await this.queueService.getClassQueue(TestJob).getJob(id)\n")),(0,r.kt)("p",null,"Then there is a similar way to stop or check the progress on the job."),(0,r.kt)("h3",{id:"triggered-when-started"},"Triggered when started"),(0,r.kt)("p",null,"Some friends hope to perform the corresponding timing tasks immediately after restarting because there is only one machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, Context, ILifeCycle, IMidwayBaseApplication, IMidwayContainer } from '@midwayjs/core';\nimport { Queue } from 'bull';\nimport { join } from 'path';\nimport * as task from '@midwayjs/task';\nimport { QueueService } from '@midwayjs/task';\n\n@Configuration({\n  imports: [\n    task\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration implements ILifeCycle {\n\n  async onServerReady(container: IMidwayContainer, app?: IMidwayBaseApplication<Context>): Promise<void> {\n\n    // Task will be executed immediately after it is started.\n    let result: QueueService = await container.getAsync(QueueService);\n        // Here the first one is the class name of your task, and the second one is the function name of the decorator Task\n    let job: Queue = result.getQueueTask('HelloTask', 'task')\n    // Indicates immediate execution.\n    job.add({}, {delay: 0, repeat: null})\n\n    // The LocalTask will be executed immediately after it is started.\n    const result = await container.getAsync(QueueService);\n    let job = result.getLocalTask('HelloTask', 'task'); //Parameter 1: Class Name Parameter 2: Function Name TaskLocal by Decorator\n    job(); // indicates immediate execution\n  }\n}\n\n")),(0,r.kt)("h2",{id:"common-cron-expressions"},"Common Cron expressions"),(0,r.kt)("p",null,"About Task Task Task Configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"*    *    *    *    *    *\n\u252c    \u252c    \u252c    \u252c    \u252c    \u252c\n\u2502    \u2502    \u2502    \u2502    \u2502    |\n\u2502    \u2502    \u2502    \u2502    \u2502    \u2514 day of week (0 - 7) (0 or 7 is Sun)\n\u2502    \u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n\u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month (1 - 31)\n\u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n\u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 second (0 - 59, optional)\n")),(0,r.kt)("p",null,"Common expressions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run every 5 seconds: ",(0,r.kt)("inlineCode",{parentName:"li"},"*/5 * * * *")),(0,r.kt)("li",{parentName:"ul"},"run every 1 minute\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"0 */1 * * * *")),(0,r.kt)("li",{parentName:"ul"},"run every 20 minutes per hour: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 20 * * *")),(0,r.kt)("li",{parentName:"ul"},"run every day at 0 o'clock: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 0 0 * *")),(0,r.kt)("li",{parentName:"ul"},"Execute every day at 2:35: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 35 2 * *"))),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://cron.qqe2.com/"},"online tool")," to confirm the time of the next execution."),(0,r.kt)("p",null,"Midway provides some commonly used expressions on the frame side for everyone to use in ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/core"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FORMAT } from '@midwayjs/core';\n\n// cron expressions executed per minute\nFORMAT.CRONTAB.EVERY_MINUTE\n")),(0,r.kt)("p",null,"There are some other expressions built in."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"corresponding time"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"Every second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"Every minute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_HOUR"),(0,r.kt)("td",{parentName:"tr",align:null},"Every hour on the hour")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_DAY"),(0,r.kt)("td",{parentName:"tr",align:null},"0 o'clock every day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_DAY_ZERO_FIFTEEN"),(0,r.kt)("td",{parentName:"tr",align:null},"At 0:15 every day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_DAY_ONE_FIFTEEN"),(0,r.kt)("td",{parentName:"tr",align:null},"At 1:15 every day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_PER_5_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 5 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_PER_10_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_PER_30_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_PER_5_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 5 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_PER_10_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 10 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_PER_30_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 30 minutes")))),(0,r.kt)("h2",{id:"manually-trigger-tasks"},"Manually trigger tasks"),(0,r.kt)("p",null,"The definition of a task, through the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Queue")," decorator, defines a task class, which must contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"async execute()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, Queue } from '@midwayjs/core';\n\n@Queue()\nexport class HelloTask {\n  async execute(params) {\n    console.log(params);\n  }\n}\n")),(0,r.kt)("p",null,"Trigger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { QueueService } from '@midwayjs/task';\nimport { Provide, Inject } from '@midwayjs/core';\n\n@Provide()\nexport class UserTask {\n  @Inject()\n  queueService: QueueService;\n\n  async execute(params = {}) {\n    // Triggers distributed task scheduling after 3 seconds.\n    const xxx = await this.queueService.execute(HelloTask, params, {delay: 3000});\n  }\n}\n")),(0,r.kt)("p",null,"After 3 seconds, the HelloTask task will be triggered."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note that if it is not triggered, please check the params above to ensure that it is not empty.")),(0,r.kt)("h2",{id:"operation-and-maintenance"},"Operation and Maintenance"),(0,r.kt)("h3",{id:"log"},"Log"),(0,r.kt)("p",null,"On the Midway Task Component, two logs have been added:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"midway-task.log"),(0,r.kt)("li",{parentName:"ul"},"midway-task-error.log")),(0,r.kt)("p",null,"The corresponding logs are printed when the task, localTask, and queue trigger starts and ends respectively."),(0,r.kt)("p",null,"Basic configuration of task log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nimport { MidwayConfig } from '@midwayjs/core';\nexport default {\n  midwayLogger: {\n    default: {\n      // ...\n    },\n    clients: {\n      coreLogger: {\n        // ...\n      },\n      appLogger: {\n        // ...\n      },\n      taskLog: {\n        disableConsole: false, // whether to disable printing to the console, disabled by default\n        level: 'warn',\n        consoleLevel: 'warn',\n      },\n    }\n  },\n} as MidwayConfig;\n")),(0,r.kt)("p",null,"Distributed Task Trigger Log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.info('task start.')\n\n// Exception:\nlogger.error(err.stack)\n\nlogger.info('task end.')\n")),(0,r.kt)("p",null,"Non-distributed LocalTask trigger logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.info('local task start.')\n\n// Exception:\n// logger.error('${e.stack}')\n\nlogger.info('local task end.')\n")),(0,r.kt)("p",null,"Trigger log for task queue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.info('queue process start.')\n\n// Exception:\n// logger.error('${e.stack}')\n\nlogger.info('queue process end.')\n")),(0,r.kt)("h3",{id:"troubleshoot-problem-links"},"Troubleshoot problem links:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01xL1mQE25kMZnB5ygb_!!6000000007564-2-tps-1614-847.png",alt:"image.png"}),"\nyou can search for the same id to find the log of the same request.\nIn order to facilitate users to concatenate the corresponding logs in their business codes, I hung traceId variables on ctx."),(0,r.kt)("p",null,"For example, abnormal situation: when abnormal, the ",(0,r.kt)("strong",{parentName:"p"},"local can see this error-related situation in the console and midway-task.log bar:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01WYBjbL1lGKHmsdSnH_!!6000000004791-2-tps-1964-324.png",alt:"image.png"})),(0,r.kt)("h3",{id:"traceid"},"traceId"),(0,r.kt)("p",null,"The localTask generates a UUID ID as a traceId."),(0,r.kt)("p",null,"Task and queue use the ID of the job as the traceId."),(0,r.kt)("h3",{id:"code-within-the-business"},"Code within the business"),(0,r.kt)("p",null,"In the service, you can inject logger through inject or inject ctx to get logger variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Inject, Provide, Queue } from '@midwayjs/core';\nimport { Application } from \"@midwayjs/koa\";\n\n@Queue()\nexport class QueueTask {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  logger;\n\n  async execute(params) {\n    this.logger.info('====>QueueTask execute')\n    this.app.getApplicationContext().registerObject('queueConfig', JSON.stringify(params));\n  }\n}\n\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Inject, Provide, Queue } from '@midwayjs/core';\nimport { Application } from \"@midwayjs/koa\";\n\n@Queue()\nexport class QueueTask {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx;\n\n  async execute(params) {\n    this.ctx.logger.info('====>QueueTask execute')\n    this.app.getApplicationContext().registerObject('queueConfig', JSON.stringify(params));\n  }\n}\n\n")),(0,r.kt)("p",null,"Printed log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"2021-07-30 13:00:13,101 INFO 5577 [Queue][12][QueueTask] queue process start.\n2021-07-30 13:00:13,102 INFO 5577 [Queue][12][QueueTask] ====>QueueTask execute\n2021-07-30 13:00:13,102 INFO 5577 [Queue][12][QueueTask] queue process end.\n")),(0,r.kt)("h2",{id:"local-timed-task"},"Local timed task"),(0,r.kt)("p",null,"Unlike distributed tasks, local timed tasks do not need to rely on and configure Redis, and can only do single-process tasks, that is, each process of each machine will be executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, TaskLocal, FORMAT } from '@midwayjs/core';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  helloService: HelloService;\n\n  // For example, the following is executed every minute\n  @TaskLocal(FORMAT.CRONTAB.EVERY_MINUTE)\n  async test() {\n    console.log(this.helloService.getName())\n  }\n}\n")),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"1-evalsha-error"},"1. EVALSHA error"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01KfjCKT1yypmNPDkIL_!!6000000006648-2-tps-3540-102.png",alt:"image.png"})),(0,r.kt)("p",null,"This problem is basically clear. The problem will appear on the cluster version of redis. The reason is that redis will hash the key to determine the stored slot. In this step of the cluster @midwayjs/task, the key hit a different slot. The temporary solution is to use the prefix configuration in the task to include {}, and force redis to calculate only the hash in {}, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix: '{midway-task}'"),"."),(0,r.kt)("h3",{id:"2-delete-historical-log"},"2. Delete historical log"),(0,r.kt)("p",null,"When Redis is executed every time, he will have a log, so how to delete it after completion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Task } from '@midwayjs/core';\nimport { IUserOptions } from '../interface';\n\n@Provide()\nexport class UserService {\n  async getUser(options: IUserOptions) {\n    return {\n      uid: options.uid\n      username: 'mockedName',\n      phone: '12345678901',\n      email: 'xxx.xxx@xxx.com',\n    };\n  }\n\n  @Task({\n    repeat: { cron: '* * * * * *'}\n    removeOnComplete: true // added a line of this\n  })\n  async test() {\n    console.log('====')\n  }\n}\n\n")),(0,r.kt)("p",null,"Whether it is deleted by default, you need to communicate with the user."),(0,r.kt)("h3",{id:"3-configure-the-redis-cluster"},"3. Configure the Redis cluster"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createClient")," method provided by bull to access the custom redis instance, so that you can access the Redis cluster."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport Redis from 'ioredis';\n\nconst clusterOptions = {\n  enableReadyCheck: false, // must be false\n  retryDelayOnClusterDown: 300\n  retryDelayOnFailover: 1000\n  retryDelayOnTryAgain: 3000\n  slotsRefreshTimeout: 10000\n  maxRetriesPerRequest: null // must be null\n}\n\nconst redisClientInstance = new Redis.Cluster ([\n  {\n    port: 7000\n    host: '127.0.0.1'\n  },\n  {\n    port: 7002\n    host: '127.0.0.1'\n  },\n], clusterOptions);\n\nexport default {\n  task: {\n    createClient: (type, opts) => {\n      return redisClientInstance;\n    },\n    prefix: '{midway-task}', // the keys stored in these tasks are all at the same beginning, so as to distinguish the configurations in the user's original redis.\n    defaultJobOptions: {\n      repeat: {\n        Tz: \"Asia/Shanghai\" // Task and other parameters such as (0 0 0 * * *) were originally set for 0 o'clock, but because the time zone is not correct, the time zone for domestic users is set.\n      }\n    }\n  }\n}\n")))}c.isMDXComponent=!0}}]);