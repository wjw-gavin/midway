"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4599],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=l(r),u=a,y=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(y,s(s({ref:e},c),{},{components:r})):n.createElement(y,s({ref:e},c))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3035:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],p={},i="\u8eab\u4efd\u9a8c\u8bc1",l={unversionedId:"extensions/passport",id:"extensions/passport",title:"\u8eab\u4efd\u9a8c\u8bc1",description:"\u8eab\u4efd\u9a8c\u8bc1\u662f\u5927\u591a\u6570Web\u5e94\u7528\u7a0b\u5e8f\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u56e0\u6b64Midway\u5c01\u88c5\u4e86\u76ee\u524dNodejs\u4e2d\u6700\u6d41\u884c\u7684Passport\u5e93\u3002",source:"@site/docs/extensions/passport.md",sourceDirName:"extensions",slug:"/extensions/passport",permalink:"/docs/next/extensions/passport",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/extensions/passport.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/next/extensions/upload"},next:{title:"gRPC",permalink:"/docs/next/extensions/grpc"}},c=[{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"e.g. \u672c\u5730",id:"eg-\u672c\u5730",children:[],level:3},{value:"e.g. Jwt",id:"eg-jwt",children:[],level:3}],level:2},{value:"\u81ea\u5b9a\u4e49\u5176\u4ed6\u7b56\u7565",id:"\u81ea\u5b9a\u4e49\u5176\u4ed6\u7b56\u7565",children:[],level:2}],d={toc:c};function m(t){var e=t.components,r=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8eab\u4efd\u9a8c\u8bc1"},"\u8eab\u4efd\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u8eab\u4efd\u9a8c\u8bc1\u662f\u5927\u591a\u6570Web\u5e94\u7528\u7a0b\u5e8f\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u56e0\u6b64Midway\u5c01\u88c5\u4e86\u76ee\u524dNodejs\u4e2d\u6700\u6d41\u884c\u7684Passport\u5e93\u3002\nPassport\u662f\u901a\u8fc7\u79f0\u4e3a\u7b56\u7565\u7684\u53ef\u6269\u5c55\u63d2\u4ef6\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u8bf7\u6c42\u3002Passport \u4e0d\u6302\u8f7d\u8def\u7531\u6216\u5047\u8bbe\u4efb\u4f55\u7279\u5b9a\u7684\u6570\u636e\u5e93\uff0c\u8fd9\u6700\u5927\u9650\u5ea6\u5730\u63d0\u9ad8\u4e86\u7075\u6d3b\u6027\u5e76\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u505a\u51fa\u5e94\u7528\u7a0b\u5e8f\u7ea7\u522b\u7684\u51b3\u7b56\u3002"),(0,o.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,o.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i @midwayjs/passport")," \u548c\u76f8\u5173\u4f9d\u8d56")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/passport@beta passport --save\n$ npm i @types/passport --save-dev\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5\u672c\u5730\u8ba4\u8bc1\uff0c\u548c Jwt \u4f5c\u4e3a\u6f14\u793a\u3002"),(0,o.kt)("p",null,"\u9996\u5148"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\nimport { join } from 'path';\nimport * as jwt from '@midwayjs/jwt';\nimport { ILifeCycle,} from '@midwayjs/core';\nimport { Configuration } from '@midwayjs/decorator';\nimport * as passport from '@midwayjs/passport';\n\n@Configuration({\n  imports: [\n    jwt,\n    passport,\n  ],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerLifeCycle implements ILifeCycle {}\n\n")),(0,o.kt)("h3",{id:"eg-\u672c\u5730"},"e.g. \u672c\u5730"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@CuustomStrategy")," \u548c\u6d3e\u751f ",(0,o.kt)("inlineCode",{parentName:"p"},"PassportStrategy")," \u6765\u81ea\u542f\u52a8\u4e00\u4e2a\u7b56\u7565\u3002\u901a\u8fc7 validate \u94a9\u5b50\u6765\u83b7\u53d6\u6709\u6548\u8d1f\u8f7d\uff0c\u5e76\u4e14\u6b64\u51fd\u6570\u5fc5\u987b\u6709\u8fd4\u56de\u503c\uff0c\u5176\u53c2\u6570\u5e76\u4e0d\u660e\u786e\uff0c\u53ef\u4ee5\u53c2\u8003\u5bf9\u5e94\u7684 Strategy \u6216\u8005\u901a\u8fc7\u5c55\u5f00\u7b26\u6253\u5370\u67e5\u770b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/strategy/local.strategy.ts\n\nimport { CustomStrategy, PassportStrategy } from '@midwayjs/passport';\nimport { Repository } from 'typeorm';\nimport { InjectEntityModel } from '@midwayjs/orm';\nimport { UserEntity } from './user';\nimport * as bcrypt from 'bcrypt';\n\n@CustomStrategy()\nexport class LocalStrategy extends PassportStrategy(Strategy) {\n  @InjectEntityModel(UserEntity)\n  userModel: Repository<UserEntity>;\n\n  // \u7b56\u7565\u7684\u9a8c\u8bc1\n  async validate(username, password) {\n    const user = await this.userModel.findOne({ username });\n    if (await bcrypt.compare(password, user.password)) {\n      throw new Error('error password ' + username);\n    }\n\n    return {\n      username,\n      password,\n    };\n  }\n\n  // \u5f53\u524d\u7b56\u7565\u7684\u53c2\u6570\n  getStrategyOptions(): any {\n    return {};\n  }\n}\n\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u6d3e\u751f ",(0,o.kt)("inlineCode",{parentName:"p"},"PassportMiddleware"),"\u51fa\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/local.middleware.ts\n\nimport { Inject, Provide } from '@midwayjs/decorator';\nimport { PassportMiddleware } from '@midwayjs/passport';\nimport { Context } from '@midwayjs/express';\nimport { LocalStrategy } from './strategy/local.strategy.ts'\n\n@Provide()\nexport class LocalPassportMiddleware extends PassportMiddleware(LocalStrategy) {\n  // \u8bbe\u7f6e AuthenticateOptions\n  getAuthenticateOptions(): Promise<passport.AuthenticateOptions> | passport.AuthenticateOptions {\n    return {\n      failureRedirect: '/login',\n      presetProperty: 'user'\n    };\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller.ts\nimport { Provide, Post, Inject, Controller } from '@midwayjs/decorator';\nimport { LocalPassportMiddleware } from './middleware/local.middleware.ts'\n\n@Controller('/')\nexport class LocalController {\n\n  @Post('/passport/local', { middleware: [LocalPassportMiddleware] })\n  async localPassport() {\n    console.log('local user: ', this.ctx.req.user);\n    return this.ctx.req.user;\n  }\n}\n")),(0,o.kt)("p",null,"\u4f7f\u7528curl \u6a21\u62df\u4e00\u6b21\u8bf7\u6c42\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:7001/passport/local -d \'{"username": "demo", "password": "1234"}\' -H "Content-Type: application/json"\n\n\u7ed3\u679c {"username": "demo", "password": "1234"}\n')),(0,o.kt)("h3",{id:"eg-jwt"},"e.g. Jwt"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981 ",(0,o.kt)("strong",{parentName:"p"},"\u989d\u5916\u5b89\u88c5")," \u4f9d\u8d56\u548c\u7b56\u7565\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/jwt passport-jwt --save\n")),(0,o.kt)("p",null,"\u7136\u540e\u5728 config.ts \u4e2d\u914d\u7f6e\uff0c \u9ed8\u8ba4\u672a\u52a0\u5bc6\uff0c\u8bf7\u4e0d\u8981\u628a\u654f\u611f\u4fe1\u606f\u5b58\u653e\u5728 payload \u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport const jwt = {\n    secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')\n  expiresIn: '2d'   // https://github.com/vercel/ms\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/strategy/jwt.strategy.ts\n\nimport { CustomStrategy, PassportStrategy } from '@midwayjs/passport';\nimport { Strategy, ExtractJwt } from 'passport-jwt';\n\n@CustomStrategy()\nexport class JwtStrategy extends PassportStrategy(\n  Strategy,\n  'jwt'\n) {\n  @Config('jwt')\n  jwtConfig;\n\n  async validate(payload) {\n    return payload;\n  }\n\n  getStrategyOptions(): any {\n    return {\n      secretOrKey: this.jwtConfig.secret,\n      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),\n    };\n  }\n}\n\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/jwt.middleware.ts\n\nimport { Provide } from '@midwayjs/decorator';\nimport { PassportMiddleware } from '@midwayjs/passport';\nimport { JwtStrategy } from './strategy/jwt-strategy';\n\n@Provide()\nexport class JwtPassportMiddleware extends PassportMiddleware(JwtStrategy) {\n  getAuthenticateOptions(): Promise<passport.AuthenticateOptions> | passport.AuthenticateOptions {\n    return {};\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Post, Inject } from '@midwayjs/decorator';\nimport { Controller, Post } from '@midwayjs/decorator';\nimport { Jwt } from '@midwayjs/jwt';\nimport { JwtPassportMiddleware } from './middleware/jwt.middleware';\n\n@Controller('/')\nexport class JwtController {\n\n  @Inject()\n  jwt: Jwt;\n\n  @Inject()\n  ctx: any;\n\n  @Post('/passport/jwt', { middleware: [JwtPassportMiddleware] })\n  async jwtPassport() {\n    console.log('jwt user: ', this.ctx.req.user);\n    return this.ctx.req.user;\n  }\n\n  @Post('/jwt')\n  async genJwt() {\n    return {\n      t: await this.jwt.sign({ msg: 'Hello Midway' }),\n    };\n  }\n}\n")),(0,o.kt)("p",null,"\u4f7f\u7528curl\u6a21\u62df\u8bf7\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://127.0.0.1:7001/jwt\n\n\u7ed3\u679c {"t": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}\n\ncurl http://127.0.0.1:7001/passport/jwt -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\n\n\u7ed3\u679c {"msg": "Hello Midway","iat": 1635468727,"exp": 1635468827}\n\n')),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5176\u4ed6\u7b56\u7565"},"\u81ea\u5b9a\u4e49\u5176\u4ed6\u7b56\u7565"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/passport")," \u652f\u6301\u81ea\u5b9a\u4e49",(0,o.kt)("a",{parentName:"p",href:"http://www.passportjs.org/packages/"},"\u5176\u4ed6\u7b56\u7565"),"\uff0c\u8fd9\u91cc\u4ee5github oauth \u4e3a\u4f8b\u3002\n\u9996\u5148 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i passport-github"),"\uff0c\u4e4b\u540e\u7f16\u5199\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// github-strategy.ts\n\nimport { CustomStrategy, PassportStrategy } from '@midwayjs/passport';\nimport { Strategy, StrategyOptions } from 'passport-github';\n\nconst GITHUB_CLIENT_ID = 'xxxxxx', GITHUB_CLIENT_SECRET = 'xxxxxxxx';\n\n@CustomStrategy()\nexport class GithubStrategy extends PassportStrategy(Strategy, 'github') {\n  async validate(...payload) {\n    return payload;\n  }\n  getStrategyOptions() {\n    return {\n      clientID: GITHUB_CLIENT_ID,\n      clientSecret: GITHUB_CLIENT_SECRET,\n      callbackURL: 'https://127.0.0.1:7001/auth/github/cb'\n    };\n  }\n}\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/github.middleware.ts\n\nimport { PassportMiddleware } from '@midwayjs/passport';\n\n@Provide()\nexport class GithubPassportMiddleware extends PassportMiddleware {\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controoer/auth.controller.ts\n\nimport { Provide, Get, Inject } from '@midwayjs/decorator';\nimport { GithubPassportMiddleware } from './github.middleware';\n\n@Controller('/oauth')\nexport class AuthController {\n  @Inject()\n  ctx: any;\n\n  @Get('/github', { middleware: [GithubPassportMiddleware] })\n  async githubOAuth() {}\n\n  @Get('/github/cb', { middleware: [GithubPassportMiddleware] })\n  async githubOAuthCallback() {\n    return this.ctx.req.user;\n  }\n}\n\n")))}m.isMDXComponent=!0}}]);