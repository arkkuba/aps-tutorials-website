"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[402],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),o=n(7294),r=n(6010),i=n(2957),s=n(6550),l=n(5238),p=n(3609),u=n(2560);function c(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,p]=h({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=l??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var f=n(1048);const k="tabList__CuJ",w="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",w,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k)},o.createElement(N,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(3992),r=n(425);function i(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:i}=e;return a.createElement(o.Z,{groupId:"development-environment"},a.createElement(r.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},a.createElement(t,null)),a.createElement(r.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},a.createElement(n,null)),a.createElement(r.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},a.createElement(i,null)))}},3694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>I,default:()=>Z,frontMatter:()=>x,metadata:()=>A,toc:()=>_});var a=n(7462),o=(n(7294),n(4137)),r=n(415);const i={toc:[]};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a new folder for your project, navigate to it in the command line, and initialize a new\nNode.js project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,o.kt)("p",null,"Next, install all the Node.js dependencies we're going to use. In this case it will be\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com"},"Express.js")," framework, an Express.js ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"middleware"),"\nfor handling ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests, and finally the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/forge-apis"},"APS SDK"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save express express-formidable forge-apis\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'"dependencies"')," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file should now look something like this\n(potentially with slightly different version numbers):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"dependencies": {\n    "express": "^4.17.1",\n    "express-formidable": "^1.2.0",\n    "forge-apis": "^0.9.1"\n}\n// ...\n')),(0,o.kt)("p",null,"Finally, let's create a couple more subfolders in the project folder that we're going\nto need later:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wwwroot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routes")," - this is where we're going to implement all the server endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"services")," - here we're going to keep all the server-side logic that can be shared by different endpoints")),(0,o.kt)("p",null,"Now, when you open your project folder in Visual Studio Code for the first time, the folder structure\nshould look similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Folder Structure",src:n(4202).Z,width:"1500",height:"1162"})))}s.isMDXComponent=!0;const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.js")," file in the root of your project folder, and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config.js"',title:'"config.js"'},"let { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET, PORT } = process.env;\nif (!APS_CLIENT_ID || !APS_CLIENT_SECRET) {\n    console.warn('Missing some of the environment variables.');\n    process.exit(1);\n}\nAPS_BUCKET = APS_BUCKET || `${APS_CLIENT_ID.toLowerCase()}-basic-app`;\nPORT = PORT || 8080;\n\nmodule.exports = {\n    APS_CLIENT_ID,\n    APS_CLIENT_SECRET,\n    APS_BUCKET,\n    PORT\n};\n")),(0,o.kt)("p",null,"We simply read the environment variables from ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env"),", and exit the application\nimmediately if any of the required properties are missing. And if no bucket name is provided,\nwe generate one by appending the ",(0,o.kt)("inlineCode",{parentName:"p"},"-basic-app")," suffix to our application Client ID."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that the Data Management service requires bucket names to be ",(0,o.kt)("strong",{parentName:"p"},"globally unique"),",\nand attempts to create a bucket with an already used name will fail with ",(0,o.kt)("inlineCode",{parentName:"p"},"409 Conflict"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-POST"},"documentation"),"\nfor more details.")),(0,o.kt)("p",null,"Now, to pass actual configuration values to our application for debugging purposes, we need to create\na ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"launch configuration"),".\nUse ",(0,o.kt)("em",{parentName:"p"},"Run > Add Configuration")," in the menu to create a new configuration, and when prompted\nfor the specific environment, choose ",(0,o.kt)("em",{parentName:"p"},"Node.js"),". This will create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode"),"\nsubfolder in your project with a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file where you can define different\nlaunch configurations. Replace the content of the file with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/launch.json"',title:'".vscode/launch.json"'},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "node",\n            "request": "launch",\n            "name": "Launch Server",\n            "runtimeExecutable": "npm",\n            "runtimeArgs": [\n                "start"\n            ],\n            "envFile": "${workspaceFolder}/.env",\n            "skipFiles": [\n                "<node_internals>/**/*.js"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"We are defining a single launch configuration called ",(0,o.kt)("em",{parentName:"p"},"Launch Server")," that will start\nour application (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," command), and what is more important, it will\nlook for a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the project folder, and provide any ",(0,o.kt)("inlineCode",{parentName:"p"},'<key>="<value>"')," pairs\ndefined in this file as environment variables to our application. Let's create\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the project folder, and populate it with our environment variables\n(using your own values instead of the placeholders of course):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:'language-title=".env"'},'APS_CLIENT_ID="your-client-id"\nAPS_CLIENT_SECRET="your-client-secret"\nAPS_BUCKET="optional-name-of-existing-bucket"\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file contains sensitive information, make sure that it is ",(0,o.kt)("strong",{parentName:"p"},"not")," included in git!\nThis can be ensured by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," line to the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},".gitignore")," file.")))}p.isMDXComponent=!0;const u={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," file in the root of your project folder with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst { PORT } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });\n")),(0,o.kt)("p",null,"For now the server isn't doing much, just serving static assets from the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder\n(which is currently empty), and reporting any errors to the console and back to the client."),(0,o.kt)("p",null,"Next, let's add a ",(0,o.kt)("inlineCode",{parentName:"p"},'"start": "node server.js"')," script to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file so that we can\neasily run our application later:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"scripts": {\n    "start": "node server.js"\n}\n// ...\n')))}c.isMDXComponent=!0;const d={toc:[]};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Start the application from Visual Studio Code (for example, via the ",(0,o.kt)("em",{parentName:"p"},"Run > Start Debugging"),"\nmenu, or by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"), and navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin the browser. The server should respond with ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot GET /")," because we haven't added any\nlogic to it just yet. That's going to be the topic of the next step."))}m.isMDXComponent=!0;const h={toc:[]};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file in the root folder of your project with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var clientID = Configuration["APS_CLIENT_ID"];\n        var clientSecret = Configuration["APS_CLIENT_SECRET"];\n        var bucket = Configuration["APS_BUCKET"]; // Optional\n        if (string.IsNullOrEmpty(clientID) || string.IsNullOrEmpty(clientSecret))\n        {\n            throw new ApplicationException("Missing required environment variables APS_CLIENT_ID or APS_CLIENT_SECRET.");\n        }\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup"),' class is responsible for configuring our server and its "middleware", for example,\nserving of static files. We also try and retrieve the APS application client ID and secret\nfrom environment variables (or from other ',(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#configuration-providers"},"configuration providers"),")\nfor later use."),(0,o.kt)("p",null,"Now, to pass actual configuration values to our application for debugging purposes,\nwe will modify (or create) the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," file in our project folder,\nor create one of it does not exist, with the following content (using your own\nvalues instead of the placeholders of course):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  },\n  "APS_CLIENT_ID": "your-client-id",\n  "APS_CLIENT_SECRET": "your-client-secret",\n  "APS_BUCKET": "optional-name-of-existing-bucket"\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," file contains sensitive information, make sure that it is ",(0,o.kt)("strong",{parentName:"p"},"not")," included in git!\nThis can be ensured by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," line to the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},".gitignore")," file.")))}g.isMDXComponent=!0;const f={toc:[]};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Replace the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,o.kt)("p",null,"With this code our .NET application will start an ASP.NET server with the configuration\ndefined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup")," class."),(0,o.kt)("p",null,"And finally, let's update the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," folder to make\nsure that our server app is using the default protocol (HTTP) and port (8080) that we\nwill use throughout this tutorial. Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationUrl")," property of the default\nlaunch profile to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "iisSettings": {\n    "windowsAuthentication": false,\n    "anonymousAuthentication": true,\n    "iisExpress": {\n      "applicationUrl": "http://localhost:38524",\n      "sslPort": 44323\n    }\n  },\n  "profiles": {\n    "my_aps_app": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      // highlight-start\n      "applicationUrl": "http://localhost:8080",\n      // highlight-end\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    },\n    "IIS Express": {\n      "commandName": "IISExpress",\n      "launchBrowser": true,\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n  }\n}\n')))}k.isMDXComponent=!0;const w={toc:[]};function N(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Replace the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,o.kt)("p",null,"With this code our .NET application will start an ASP.NET server with the configuration\ndefined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup")," class."),(0,o.kt)("p",null,"And finally, let's update the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," folder to make\nsure that our server app is using the default protocol (HTTP) and port (8080) that we\nwill use throughout this tutorial. Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationUrl")," property of the default\nlaunch profile to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "iisSettings": {\n    "windowsAuthentication": false,\n    "anonymousAuthentication": true,\n    "iisExpress": {\n      "applicationUrl": "http://localhost:38524",\n      "sslPort": 44323\n    }\n  },\n  "profiles": {\n    "MyApsApp": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      // highlight-start\n      "applicationUrl": "http://localhost:8080",\n      // highlight-end\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    },\n    "IIS Express": {\n      "commandName": "IISExpress",\n      "launchBrowser": true,\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n  }\n}\n')))}N.isMDXComponent=!0;const v={toc:[]};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a new folder for your project, navigate to it in the command line, and initialize a new\nASP.NET Core project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new web\n")),(0,o.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"APS SDK"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Autodesk.Forge\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"*.csproj")," file in your project should now look similar to this (possibly with\nslightly different version numbers, and additional .NET settings):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include="Autodesk.Forge" Version="1.9.7" />\n  </ItemGroup>\n\n</Project>\n\n')),(0,o.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wwwroot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")),(0,o.kt)("p",null,"Now, when you open your project folder in Visual Studio Code for the first time, you will be prompted\nto setup your project for .NET development. Accept the prompt, and the editor will automatically create\na ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode")," subfolder with additional .NET specific settings such as the default ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"launch configuration"),".\nThe folder structure in the editor should look similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Folder Structure",src:n(8069).Z,width:"1500",height:"1162"})))}b.isMDXComponent=!0;const y={toc:[]};function C(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Start the application from Visual Studio Code (for example, via the ",(0,o.kt)("em",{parentName:"p"},"Run > Start Debugging"),"\nmenu, or by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"), and navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin the browser. You should get a 404 response because we haven't implemented any server logic yet.\nThat's going to be the goal of the next step."))}C.isMDXComponent=!0;var S=n(6942),T=n(3561);const E={toc:[]};function j(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(S.ZP,{mdxType:"SetupVS2022"}),(0,o.kt)(T.ZP,{mdxType:"AddDependencies"}))}j.isMDXComponent=!0;const P={toc:[]};function D(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Start the application from Visual Studio (for example, via the ",(0,o.kt)("em",{parentName:"p"},"Debug > Start Debugging"),"\nmenu, or by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"), and it will automatically open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin your browser. You should get a 404 response because we haven't implemented any server logic yet.\nThat's going to be the goal of the next step."))}D.isMDXComponent=!0;const x={},I="Application Setup",A={unversionedId:"tutorials/simple-viewer/setup",id:"tutorials/simple-viewer/setup",title:"Application Setup",description:"Let's start by creating a new project, installing required dependencies, and setting up",source:"@site/docs/03-tutorials/01-simple-viewer/01-setup.mdx",sourceDirName:"03-tutorials/01-simple-viewer",slug:"/tutorials/simple-viewer/setup",permalink:"/tutorials/simple-viewer/setup",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/01-simple-viewer/01-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Simple Viewer",permalink:"/tutorials/simple-viewer/"},next:{title:"Authentication",permalink:"/tutorials/simple-viewer/auth"}},M={},_=[{value:"New project",id:"new-project",level:2},{value:"Application config",id:"application-config",level:2},{value:"Basic server",id:"basic-server",level:2},{value:"Try it out",id:"try-it-out",level:2}],V={toc:_};function Z(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-setup"},"Application Setup"),(0,o.kt)("p",null,"Let's start by creating a new project, installing required dependencies, and setting up\na basic server application."),(0,o.kt)("h2",{id:"new-project"},"New project"),(0,o.kt)(r.Z,{NodeJsVsCode:s,DotNetVsCode:b,DotNetVs2022:j,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"application-config"},"Application config"),(0,o.kt)("p",null,"Our application will need a couple of configuration inputs to run properly, for example,\nthe credentials of our APS app (client ID and secret) for communicating with Autodesk Platform Services,\nand the name of a bucket in the ",(0,o.kt)("a",{parentName:"p",href:"https://aps.autodesk.com/en/docs/data/v2/developers_guide/overview"},"Data Management"),"\nservice for storing designs. We will pass these parameters to our app using environment variables."),(0,o.kt)(r.Z,{NodeJsVsCode:p,DotNetVsCode:g,DotNetVs2022:g,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"basic-server"},"Basic server"),(0,o.kt)("p",null,"Next we'll create a basic server application."),(0,o.kt)(r.Z,{NodeJsVsCode:c,DotNetVsCode:k,DotNetVs2022:N,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"Now that we have a basic application setup, let's try it out!"),(0,o.kt)(r.Z,{NodeJsVsCode:m,DotNetVsCode:C,DotNetVs2022:D,mdxType:"EnvTabs"}))}Z.isMDXComponent=!0},6942:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),o=(n(7294),n(4137));const r={toc:[]};function i(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a new project in Visual Studio:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new project",src:n(1339).Z,width:"1014",height:"675"})),(0,o.kt)("p",null,"Choose the ",(0,o.kt)("em",{parentName:"p"},"ASP.NET Core Empty")," template:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Choose a template",src:n(1979).Z,width:"1014",height:"675"})),(0,o.kt)("p",null,"Name the project any way you want:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configure project",src:n(3388).Z,width:"1014",height:"675"})),(0,o.kt)("p",null,"Choose the ",(0,o.kt)("em",{parentName:"p"},".NET 6.0 (Long-term support)")," framework, and disable HTTPS as we don't need it for now:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Additional information",src:n(3248).Z,width:"1014",height:"675"})),(0,o.kt)("p",null,"Once the project is ready, create the following subfolders in your project folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wwwroot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")))}i.isMDXComponent=!0},3561:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),o=(n(7294),n(4137));const r={toc:[]};function i(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"APS SDK"),". In the ",(0,o.kt)("em",{parentName:"p"},"Solution Explorer"),",\nright-click on ",(0,o.kt)("em",{parentName:"p"},"Dependencies"),", and then click on ",(0,o.kt)("em",{parentName:"p"},"Manage NuGet Packages..."),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Manage NuGet dependencies",src:n(3287).Z,width:"1107",height:"700"})),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"NuGet Package Manager"),", switch to the ",(0,o.kt)("em",{parentName:"p"},"Browse")," tab, and search for and install\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Autodesk.Forge")," package:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install APS NuGet",src:n(4704).Z,width:"1107",height:"700"})))}i.isMDXComponent=!0},8069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/folder-structure-efad3630ee426d892e0fffd1608569da.webp"},4202:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/folder-structure-a4dba25c9b5d32146116d7ee2b008be0.webp"},3248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/additional-info-6e29504487f7fb2a46fbd5641cdc4691.webp"},1979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/choose-template-0eaf8f177132a1714c44dc3d5409762a.webp"},3388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configure-project-b48d3053b5ea342d552d7694d51e47ca.webp"},1339:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-project-3eac278d9a7b3b12327e8ef2caf2136e.webp"},4704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-sdk-49a123a40cda48964f67efa730284411.webp"},3287:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/manage-nugets-1eab7cd026f7d73439c9063264b9b7e4.webp"}}]);