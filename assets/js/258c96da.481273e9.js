(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[698],{9693:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/vscode-dotnet-folderStructure.a3e31f0.500.png 500w,"+n.p+"assets/ideal-img/vscode-dotnet-folderStructure.d752e1a.562.png 562w",images:[{path:n.p+"assets/ideal-img/vscode-dotnet-folderStructure.a3e31f0.500.png",width:500,height:583},{path:n.p+"assets/ideal-img/vscode-dotnet-folderStructure.d752e1a.562.png",width:562,height:655}],src:n.p+"assets/ideal-img/vscode-dotnet-folderStructure.a3e31f0.500.png",toString:function(){return n.p+"assets/ideal-img/vscode-dotnet-folderStructure.a3e31f0.500.png"},placeholder:void 0,width:500,height:583},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAACToAAAk6AGCYwUcAAAAwUlEQVQYlZ1QWw6DIBDkKr4QFVQKarWwJPb+Z5oG+og2/erHZibZYXYG1kkF5wj7fkegANlJlGWFquKnYU0rMeoF67pC6wvyvEBRlAnzF48PWSMaWDPBOY/bzWEYRijVJxz6J69rAcYrDmssvCdsm0u4LFcYY2CMTSNEA8a5hLUbvH86EgXM8wJRC2RZfjitDKZrQCACeUoxYtZ48liKibaDVD30qFMuzutPiSh4i1kkx5ZHl5Pj9399C07CX4u/hQ9hbqTcRGfYngAAAABJRU5ErkJggg=="}},425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,s),hidden:n},t)}},4259:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),r=n(6010),s=n(1048),i=n(3609),l=n(1943),p=n(2957);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:s,values:d,groupId:m,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,l.U)(),[w,C]=(0,a.useState)(v),A=[],{blockElementScrollPositionUntilNextRender:y}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==w&&k.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,n=A.indexOf(t),o=k[n].value;o!==w&&(y(t),C(o),null!=m&&b(m,String(o)))},T=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const n=A.indexOf(e.currentTarget)+1;t=A[n]??A[0];break}case"ArrowLeft":{const n=A.indexOf(e.currentTarget)-1;t=A[n]??A[A.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>A.push(e),onKeyDown:T,onClick:S},s,{className:(0,r.Z)("tabs__item",u,s?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},415:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(7294),a=n(4259),r=n(425);function s(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:s}=e;return o.createElement(a.Z,{groupId:"development-environment"},o.createElement(r.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},o.createElement(t,null)),o.createElement(r.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},o.createElement(n,null)),o.createElement(r.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},o.createElement(s,null)))}},3913:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294),a=n(2004);const r="wrapper_emgM",s="player_m1gG";function i(e){let{src:t}=e;return o.createElement("div",{className:r},o.createElement(a.Z,{className:s,url:t,playing:!0,loop:!0,width:"100%",height:"100%"}))}},824:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>L,contentTitle:()=>P,default:()=>F,frontMatter:()=>x,metadata:()=>D,toc:()=>R});var o=n(7462),a=(n(7294),n(4137)),r=n(415),s=n(3913);const i=n.p+"assets/medias/ngrok-setup-232fce28b81f5afb991b48a8f236a409.mp4",l=n.p+"assets/medias/vs2022-proj-setup-31a3dc5e706fd6d95d5724b2a924bd95.mp4",p={toc:[]};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Launch Visual Studio 2022, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Create New Project")),(0,a.kt)("li",{parentName:"ul"},"Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"ASP.NET Core Empty")," in templates search bar. Select and Next."),(0,a.kt)("li",{parentName:"ul"},"On the next dialog, let's name it forgeSample, Next."),(0,a.kt)("li",{parentName:"ul"},"On the next dialog, ensure .NET 6.0 (Long Term Support) is selected, uncheck ",(0,a.kt)("inlineCode",{parentName:"li"},"Configure for HTTPS"),", Create."),(0,a.kt)("li",{parentName:"ul"},"Install the Autodesk Forge NuGet package: right-click on the project (Solution Explorer), select Manage NuGet Package, then on Browse search for Autodesk.Forge and install Autodesk.Forge. This will be used to upload input and output results to ",(0,a.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/basics/"},"OSS buckets"),"."),(0,a.kt)("li",{parentName:"ul"},"Please also install .NET 6 compatiable version of the following packages:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Autodesk.Forge.DesignAutomation\nMicrosoft.AspNetCore.Mvc.NewtonsoftJson\nMicrosoft.AspNetCore.SignalR.Protocols.NewtonsoftJson\n")),(0,a.kt)(s.Z,{src:l,mdxType:"ResponsiveVideo"}))}c.isMDXComponent=!0;const u={toc:[]};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"From the solution explorer, select ",(0,a.kt)("inlineCode",{parentName:"p"},"designAutomationsample")," project, under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Properties"),",\nselect and open the ",(0,a.kt)("inlineCode",{parentName:"p"},"launchSettings.json")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the ",(0,a.kt)("inlineCode",{parentName:"li"},"applicationUrl"),' to "http://localhost:8080"'),(0,a.kt)("li",{parentName:"ul"},"Go to profiles\\forgeSample\\environmentVariables add following environments.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ASPNETCORE_URLS: use http://localhost:8080\nAPS_CLIENT_ID: use your id here\nAPS_CLIENT_SECRET: use your secret here\nAPS_WEBHOOK_URL: use the ngrok forwarding URL from previous step\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"designAutomationSample")," project, right-click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"New Item"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON"),"."),(0,a.kt)("li",{parentName:"ul"},"Name it as ",(0,a.kt)("inlineCode",{parentName:"li"},"appsettings.user.json"),"."),(0,a.kt)("li",{parentName:"ul"},"Add following configuration settings, this is required by ",(0,a.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Autodesk.Forge.DesignAutomation"},"DesignAutomation SDK"),"\nto create oAuth and run API requests.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=appsettings.user.json",title:"appsettings.user.json"},'{\n  "Forge": {\n    "ClientId": "your client id",\n    "ClientSecret": "your secret"\n  }\n}\n')),(0,a.kt)("p",null,"As this is running locally, ",(0,a.kt)("inlineCode",{parentName:"p"},"sslPort")," is set to 0. It should look like as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launchSettings.json"',title:'"launchSettings.json"'},'{\n  "iisSettings": {\n    "windowsAuthentication": false,\n    "anonymousAuthentication": true,\n    "iisExpress": {\n      "applicationUrl": "http://localhost:8080",\n      "sslPort": 0\n    }\n  },\n  "profiles": {\n    "forgeSample": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      "applicationUrl": "http://localhost:8080",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development",\n        "APS_CLIENT_ID": "your client id here",\n        "APS_CLIENt_SECRET": "your secret here",\n        "APS_WEBHOOK_URL": "your ngrok url here"\n      }\n    },\n    "IIS Express": {\n      "commandName": "IISExpress",\n      "launchBrowser": true,\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0;const m=n.p+"assets/medias/vscode-proj-dotnet-setup-d32645355a08e370c7dfe13cf239bcc3.mp4",h={toc:[]};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Launch Terminal or Command Prompt"),(0,a.kt)("li",{parentName:"ul"},"Go to the directory where you want to create the project."),(0,a.kt)("li",{parentName:"ul"},"Make sure you have .NET 6 SDK installed. Refer ",(0,a.kt)("a",{parentName:"li",href:"../../../../../../setup/"},"Environment"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="setup.bat"',title:'"setup.bat"'},"dotnet --version\ndotnet new web -n designAutomationSample\ncd designAutomationSample\ndotnet add package Autodesk.Forge --version 1.9.7\ndotnet add package Autodesk.Forge.DesignAutomation --version 5.1.0\ndotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson --version 6.0.11\ndotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson --version 6.0.11\ndotnet add package Microsoft.AspNetCore.SignalR.Protocols.NewtonsoftJson --version 6.0.11\ndotnet build\ncode .\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Create a batch/bash file and copy above ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," statements to run in one go.")),(0,a.kt)(s.Z,{src:m,mdxType:"ResponsiveVideo"}))}g.isMDXComponent=!0;var k=n(9693),f=n.n(k);const v={toc:[]};function N(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"*.csproj"),"file in your project should now look similar to this (possibly with slightly different version numbers, and additional .NET settings):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    <Nullable>enable</Nullable>\n    <ImplicitUsings>enable</ImplicitUsings>\n  </PropertyGroup>\n  <ItemGroup>\n    <PackageReference Include="Autodesk.Forge" Version="1.9.7" />\n    <PackageReference Include="Autodesk.Forge.DesignAutomation" Version="5.1.0" />\n    <PackageReference Include="Microsoft.AspNetCore.Mvc.NewtonsoftJson" Version="6.0.11" />\n    <PackageReference Include="Microsoft.AspNetCore.SignalR.Protocols.NewtonsoftJson" Version="6.0.11" />\n  </ItemGroup>\n</Project>\n')),(0,a.kt)("p",null,"Now, when you open your project folder in Visual Studio Code for the first time, you will be prompted to setup your project for .NET development. Accept the prompt, and the editor will automatically create a ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode")," subfolder with additional .NET specific settings such as the default ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"launch configuration"),".\nThe folder structure in the editor should look similar to this."),(0,a.kt)("img",{src:f(),style:{width:200}}),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," from .vscode folder, set following environments in ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"ASPNETCORE_URLS: use http://localhost:8080\nAPS_CLIENT_ID: use your id here\nAPS_CLIENT_SECRET: use your secret here\nAPS_WEBHOOK_URL: use the ngrok forwarding URL from previous step\n")),(0,a.kt)("p",null,"The launch.json should look similar to this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=launch.json",title:"launch.json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      // Use IntelliSense to find out which attributes exist for C# debugging\n      // Use hover for the description of the existing attributes\n      // For further information visit https://github.com/OmniSharp/omnisharp-vscode/blob/master/debugger-launchjson.md\n      "name": ".NET Core Launch (web)",\n      "type": "coreclr",\n      "request": "launch",\n      "preLaunchTask": "build",\n      // If you have changed target frameworks, make sure to update the program path.\n      "program": "${workspaceFolder}/bin/x64/Debug/net6.0/forgeSample.dll",\n      "args": [],\n      "cwd": "${workspaceFolder}",\n      "stopAtEntry": false,\n      // Enable launching a web browser when ASP.NET Core starts. For more information: https://aka.ms/VSCode-CS-LaunchJson-WebBrowser\n      "serverReadyAction": {\n        "action": "openExternally",\n        "pattern": "\\\\bNow listening on:\\\\s+(https?://\\\\S+)"\n      },\n      "env": {\n        "ASPNETCORE_ENVIRONMENT": "Development",\n        "ASPNETCORE_URLS": "http://localhost:8080",\n        "APS_CLIENT_ID": "Uo1RYupnCnPb2WidtW9AqGMzjN6Z41M5",\n        "APS_CLIENT_SECRET": "blahblah",\n        "APS_WEBHOOK_URL": "http://170e-49-206-57-76.ngrok.io"\n      },\n      "sourceFileMap": {\n        "/Views": "${workspaceFolder}/Views"\n      }\n    },\n    {\n      "name": ".NET Core Attach",\n      "type": "coreclr",\n      "request": "attach"\n    }\n  ]\n}\n')))}N.isMDXComponent=!0;const b={toc:[]};function w(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a new folder for your project, navigate to it in the command line, and initialize a new\nNode.js project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir designAutomationSample\ncd designAutomationSample\nnpm init -y\n")),(0,a.kt)("p",null,"Next, install all the Node.js dependencies we're going to use. In this case it will be\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com"},"Express.js")," framework, an Express.js ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"middleware"),"\nfor handling ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests, and finally the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/forge-apis"},"APS SDK"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save express express-formidable forge-apis\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},'"dependencies"')," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file should now look something like this\n(potentially with slightly different version numbers):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"dependencies": {\n    "express": "^4.17.1",\n    "express-formidable": "^1.2.0",\n    "forge-apis": "^0.9.1"\n}\n// ...\n')))}w.isMDXComponent=!0;const C=n.p+"assets/images/vscode-node-folderStructure-15b3f27cff0bf1674f2f3a82a9c14e3f.webp",A={toc:[{value:"Install packages",id:"install-packages",level:3},{value:"Files and Folders",id:"files-and-folders",level:3}]};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"install-packages"},"Install packages"),(0,a.kt)("p",null,"By default, a Node.js project is empty, so we need to install a few packages with npm install. Let's start with a basic express server, body-parser for JSON handling, multer for file upload and, of course, APS."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Run one npm install at a time.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express --save\nnpm install multer --save\nnpm install cookie-session --save\nnpm install forge-apis --save\nnpm install autodesk.forge.designautomation --save\nnpm install body-parser --save\nnpm install form-data --save\nnpm install socket.io --save\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The --save parameter indicates that the module should be included in the package.json file as a dependency.")),(0,a.kt)("p",null,'Finally open the package.json and, inside "scripts", add "start": "node start.js", line. Now your folder should have a ',(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," should look like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "name": "designAutomationSample",\n  "version": "1.0.0",\n  "description": "",\n  "main": "start.js",\n  "scripts": {\n    "start": "node start.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "MIT",\n  "dependencies": {\n    "autodesk.forge.designautomation": "^3.0.3",\n    "body-parser": "^1.19.0",\n    "cookie-session": "^2.0.0",\n    "express": "^4.17.1",\n    "forge-apis": "^0.9.2",\n    "form-data": "^4.0.0",\n    "multer": "^1.4.5-lts.1",\n    "socket.io": "^4.0.1"\n  }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The version number (e.g. forge-apis 0.9.2) may vary, it was the latest version when this tutorial was created.")),(0,a.kt)("h3",{id:"files-and-folders"},"Files and Folders"),(0,a.kt)("p",null,'To create a new folder or file, right-click on the "Explorer" area on the left and select New Folder or New File.'),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"/routes/")," folder for all server-side files and a ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/")," folder for all client-side files."),(0,a.kt)("p",null,"At this point, you project should have the following structure"),(0,a.kt)("img",{src:C,style:{width:300}}),(0,a.kt)("p",null,"This file indicates to Visual Studio Code how we should run our project. Go to menu Run >> Add Configuration... and, in the Select Environment window that appears on the top, choose Node.js. In the /.vscode/launch.json file that is created, enter the following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=launch.json",title:"launch.json"},'{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "pwa-node",\n      "request": "launch",\n      "name": "Launch Program",\n      "program": "${workspaceFolder}/start.js",\n      "env": {\n        "APS_CLIENT_ID": "your id here",\n        "APS_CLIENT_SECRET": "your secret here",\n        "APS_WEBHOOK_URL": "your ngrok url"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It's important to define ID & Secret as environment variables so our project can later be deployed online. More on this later, in Deployment.")))}y.isMDXComponent=!0;const S=n.p+"assets/images/vs_code_project_da-0c807252044983b84179fba22191cd50.webp",T={toc:[]};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This file starts an express server. In the root folder, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"start.js")," file with"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"File names are case-sensitive for some deployments, like Heroku. For this tutorial, let's use lower-case.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=start.js",title:"start.js"},'const app = require("./server");\nconst socketIO = require("./socket.io")(app);\n\nlet server = socketIO.http.listen(app.get("port"), () => {\n  console.log(`Server listening on port ${app.get("port")}`);\n});\n\nserver.on("error", (err) => {\n  if (err.errno === "EACCES") {\n    console.error(`Port ${app.get("port")} already in use.\\nExiting...`);\n    process.exit(1);\n  }\n});\n')),(0,a.kt)("p",null,"This file serves static files (e.g. html), and routes API requests. In the root folder, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"server.js")," with the following content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=server.js",title:"server.js"},'const _path = require("path");\nconst express = require("express");\nconst cookieSession = require("cookie-session");\nconst config = require("./config");\nif (!config.credentials.client_id || !config.credentials.client_secret)\n  return console.error(\n    "Missing APS_CLIENT_ID or APS_CLIENT_SECRET env variables."\n  );\n\nlet app = express();\napp.use(express.static(_path.join(__dirname, "./public")));\napp.use(\n  cookieSession({\n    name: "aps_session",\n    keys: ["aps_secure_key"],\n    maxAge: 60 * 60 * 1000, // 1 hour, same as the 2 legged lifespan token\n  })\n);\napp.use(\n  express.json({\n    limit: "50mb",\n  })\n);\napp.use("/api", require("./routes/DesignAutomation"));\n\napp.set("port", process.env.PORT || 3000);\n\nmodule.exports = app;\n')),(0,a.kt)("p",null,"In the root folder, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"socket.io.js")," with the following content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=socket.io.js",title:"socket.io.js"},'module.exports = (app) => {\n  const http = require("http").Server(app);\n  const io = require("socket.io")(http);\n  app.io = io;\n\n  let clients = 0;\n  io.on("connection", (socket) => {\n    clients++;\n    console.log("a client is connected");\n\n    // Whenever someone disconnects this piece of code executed\n    socket.on("disconnect", function () {\n      clients--;\n      console.log("a client disconnected");\n    });\n  });\n\n  return {\n    http: http,\n    io: io,\n  };\n};\n')),(0,a.kt)("p",null,"In the root folder, create a file named config.js with the following content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=config.js",title:"config.js"},'// Autodesk Forge configuration\nmodule.exports = {\n  // Set environment variables or hard-code here\n  credentials: {\n    client_id: process.env.APS_CLIENT_ID,\n    client_secret: process.env.APS_CLIENT_SECRET,\n    callback_url: process.env.APS_CALLBACK || process.env.APS_CALLBACK_URL,\n    webhook_url: process.env.APS_WEBHOOK_URL,\n  },\n  scopes: {\n    // Required scopes for the server-side application\n    internal: [\n      "bucket:create",\n      "bucket:read",\n      "bucket:delete",\n      "data:read",\n      "data:create",\n      "data:write",\n      "code:all",\n    ],\n    // Required scope for the client-side viewer\n    public: ["viewables:read"],\n  },\n  client: {\n    circuitBreaker: {\n      threshold: 11,\n      interval: 1200,\n    },\n    retry: {\n      maxNumberOfRetries: 7,\n      backoffDelay: 4000,\n      backoffPolicy: "exponentialBackoffWithJitter",\n    },\n    requestTimeout: 13000,\n  },\n};\n')),(0,a.kt)("p",null,"We are using the environment variables here. At the time of running our Express server, the values of these variables will be used to connect to Autodesk Forge. com"),(0,a.kt)("p",null,"Now create a ",(0,a.kt)("inlineCode",{parentName:"p"},"common")," subfolder in the routes folder, and prepare a ",(0,a.kt)("inlineCode",{parentName:"p"},"routes/common/oauth.js")," file that will actually request the access token from Forge. This will be reused in other parts of this tutorial."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"routes/common/oauth.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=oauth.js",title:"oauth.js"},'const { AuthClientTwoLegged } = require("forge-apis");\nconst config = require("../../config");\n\n// Tokens are auto-refreshed, keeping clients in simple cache\nlet cache = {};\n\n// Since we got 3 calls at the first page loading, let\'s initialize this one now,\n// to avoid concurrent requests.\ngetClient(/*config.scopes.internal*/);\n\n/**\n * Initializes a Forge client for 2-legged authentication.\n * @param {string[]} scopes List of resource access scopes.\n * @returns {AuthClientTwoLegged} 2-legged authentication client.\n */\nasync function getClient(scopes) {\n  scopes = scopes || config.scopes.internal;\n  const key = scopes.join("+");\n  if (cache[key]) return cache[key];\n\n  try {\n    const { client_id, client_secret } = config.credentials;\n    let client = new AuthClientTwoLegged(\n      client_id,\n      client_secret,\n      scopes || config.scopes.internal,\n      true\n    );\n    let credentials = await client.authenticate();\n    cache[key] = client;\n    console.log(`OAuth2 client created for ${key}`);\n    return client;\n  } catch (ex) {\n    return null;\n  }\n}\n\nmodule.exports = {\n  getClient,\n};\n')),(0,a.kt)("p",null,"The project is ready! At this point your project should look like this"),(0,a.kt)("img",{src:S,style:{width:300}}))}E.isMDXComponent=!0;const j=n.p+"assets/images/vs2022-dotnet-folderStructure-fc0c3de6855a47b9b4c0a5f944f90adb.webp",_={toc:[{value:"OAuthController.cs",id:"oauthcontrollercs",level:3}]};function I(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now open the Program.cs and add the following namespaces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using Autodesk.Forge.Core;\nusing Autodesk.Forge.DesignAutomation;\n\n")),(0,a.kt)("p",null,"Then replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," Main() method content with the following. This tells our application to load Forge Client ID & Secret from the environment variables defined above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'CreateHostBuilder(args).ConfigureAppConfiguration(builder =>\n            {\n                builder.AddJsonFile($"appsettings.user.json", optional: true);\n                builder.AddEnvironmentVariables();\n\n            }).ConfigureServices((hostContext, services) =>\n            {\n                services.AddDesignAutomation(hostContext.Configuration);\n            }).Build().Run();\n')),(0,a.kt)("p",null,"Now open the Startup.cs and add the following namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using Microsoft.AspNetCore.Mvc;\n\n")),(0,a.kt)("p",null,"Then replace the content of the Startup class with the following code, which enables static file server (HTML & JS) and SignalR, used to push notifications to the client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"// This method gets called by the runtime. Use this method to add services to the container.\n// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940\npublic void ConfigureServices(IServiceCollection services)\n{\n    services.AddMvc(options => options.EnableEndpointRouting = false).SetCompatibilityVersion(CompatibilityVersion.Version_3_0).AddNewtonsoftJson();\n    services.AddSignalR().AddNewtonsoftJsonProtocol(opt=> {\n        opt.PayloadSerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;\n    });\n}\n\n// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\npublic void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n{\n    app.UseFileServer();\n    app.UseMvc();\n}\n")),(0,a.kt)("h3",{id:"oauthcontrollercs"},"OAuthController.cs"),(0,a.kt)("p",null,"Create a Controllers folder, which will host the WebAPI Controllers.\nWe'll need an ",(0,a.kt)("inlineCode",{parentName:"p"},"access token")," to read & write input & output files to OSS Buckets. Under Controllers folder, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthController.cs")," file with the following content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=OAuthController.cs",title:"OAuthController.cs"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\nusing Autodesk.Forge;\n\nnamespace forgeSample.Controllers\n{\n    [ApiController]\n    public class OAuthController : ControllerBase\n    {\n        // As both internal & public tokens are used for all visitors\n        // we don\'t need to request a new token on every request, so let\'s\n        // cache them using static variables. Note we still need to refresh\n        // them after the expires_in time (in seconds)\n        private static dynamic InternalToken { get; set; }\n\n        /// <summary>\n        /// Get access token with internal (write) scope\n        /// </summary>\n        public static async Task<dynamic> GetInternalAsync()\n        {\n            if (InternalToken == null || InternalToken.ExpiresAt < DateTime.UtcNow)\n            {\n                InternalToken = await Get2LeggedTokenAsync(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.BucketDelete, Scope.DataRead, Scope.DataWrite, Scope.DataCreate, Scope.CodeAll });\n                InternalToken.ExpiresAt = DateTime.UtcNow.AddSeconds(InternalToken.expires_in);\n            }\n\n            return InternalToken;\n        }\n\n        /// <summary>\n        /// Get the access token from Autodesk\n        /// </summary>\n        private static async Task<dynamic> Get2LeggedTokenAsync(Scope[] scopes)\n        {\n            TwoLeggedApi oauth = new TwoLeggedApi();\n            string grantType = "client_credentials";\n            dynamic bearer = await oauth.AuthenticateAsync(\n              GetAppSetting("APS_CLIENT_ID"),\n              GetAppSetting("APS_CLIENT_SECRET"),\n              grantType,\n              scopes);\n            return bearer;\n        }\n\n        /// <summary>\n        /// Reads appsettings from web.config\n        /// </summary>\n        public static string GetAppSetting(string settingKey)\n        {\n            return Environment.GetEnvironmentVariable(settingKey).Trim();\n        }\n    }\n}\n\n')),(0,a.kt)("p",null,"Project is ready! At this point it should look like"),(0,a.kt)("img",{src:j,style:{width:300}}))}I.isMDXComponent=!0;const x={title:"Create Server"},P=void 0,D={unversionedId:"tutorials/design-automation/create-server",id:"tutorials/design-automation/create-server",title:"Create Server",description:"Your Client ID & Secret should be protected and keep confidential as all your files will be bound to your account. For a web application, keep it on your server. This section demonstrate how to prepare create a local development server.",source:"@site/docs/tutorials/04-design-automation/00-create-server.mdx",sourceDirName:"tutorials/04-design-automation",slug:"/tutorials/design-automation/create-server",permalink:"/tutorials/design-automation/create-server",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/04-design-automation/00-create-server.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Create Server"},sidebar:"tutorialSidebar",previous:{title:"Design Automation",permalink:"/tutorials/design-automation/"},next:{title:"Basic UI",permalink:"/tutorials/design-automation/basic-app-ui"}},L={},R=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"ngrok",id:"ngrok",level:3},{value:"Setup Project",id:"setup-project",level:2},{value:"Application Config",id:"application-config",level:3},{value:"Server Setup",id:"server-setup",level:3}],M={toc:R};function F(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"Client ID")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," should be protected and keep confidential as all your files will be bound to your account. For a web application, keep it on your server. This section demonstrate how to prepare create a local development server."),(0,a.kt)("p",null,"Please review ",(0,a.kt)("a",{parentName:"p",href:"../../setup/"},"Environment Setup")," section for required software."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"ngrok"},"ngrok"),(0,a.kt)("p",null,"When Design Automation finishes modifying your model, it notifies back. As your machine is not exposed on the web, the ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok tool")," create a temporary address to receive notifications. This tool is only required locally.\nAfter download, unzip it. Open the Windows Command Line Prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd.exe")," and navigate to the folder.\nThen run ",(0,a.kt)("inlineCode",{parentName:"p"},'ngrok http 8080 --host-header="localhost:8080"'),".\nCopy the forwarding URL value ex:",(0,a.kt)("inlineCode",{parentName:"p"},"http://1ab2c3d4.ngrok.com")),(0,a.kt)(s.Z,{src:i,mdxType:"ResponsiveVideo"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Setting up ngrok is an optional, to intercept webhook you can also use online tools like ",(0,a.kt)("a",{parentName:"p",href:"https://requestcatcher.com/"},"https://requestcatcher.com/"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"ngrok exposes your localhost server to the web while it is in use. Be sure to turn it off when your testing it done. Do not use this outside development environment")),(0,a.kt)("h2",{id:"setup-project"},"Setup Project"),(0,a.kt)(r.Z,{NodeJsVsCode:w,DotNetVsCode:g,DotNetVs2022:c,mdxType:"EnvTabs"}),(0,a.kt)("h3",{id:"application-config"},"Application Config"),(0,a.kt)(r.Z,{NodeJsVsCode:y,DotNetVsCode:N,DotNetVs2022:d,mdxType:"EnvTabs"}),(0,a.kt)("h3",{id:"server-setup"},"Server Setup"),(0,a.kt)(r.Z,{NodeJsVsCode:E,DotNetVsCode:I,DotNetVs2022:I,mdxType:"EnvTabs"}))}F.isMDXComponent=!0}}]);