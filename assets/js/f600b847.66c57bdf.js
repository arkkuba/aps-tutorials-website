"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[247],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(7462),a=n(7294),r=n(6010),i=n(1048),l=n(3609),s=n(1943),p=n(2957);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:h,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??k.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[N,C]=(0,a.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),o=v[n].value;o!==N&&(S(t),C(o),null!=h&&y(h,String(o)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},f)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:T},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,i.Z)();return a.createElement(m,(0,o.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(4259),r=n(425);function i(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:i}=e;return o.createElement(a.Z,{groupId:"development-environment"},o.createElement(r.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},o.createElement(t,null)),o.createElement(r.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},o.createElement(n,null)),o.createElement(r.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},o.createElement(i,null)))}},3907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>E,frontMatter:()=>b,metadata:()=>w,toc:()=>N});var o=n(7462),a=(n(7294),n(4137)),r=n(415);const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Command-line interface, a ",(0,a.kt)("em",{parentName:"p"},"CLI"),", is an essential tool when developing modern web applications.\nIt is often used to initialize new projects, handle their dependencies, or to manage their\nsource code. Different operating systems have their own options (for example, in Windows there's\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cmd.exe"},"Command Prompt")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PowerShell"},"PowerShell"),",\nand Unix-based systems have all sorts of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_shell"},"shells"),")\nbut in our case we're going to be using ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," which is available ",(0,a.kt)("em",{parentName:"p"},"cross-platform"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On Unix-based systems, ",(0,a.kt)("inlineCode",{parentName:"li"},"bash")," (or one of its flavors like ",(0,a.kt)("inlineCode",{parentName:"li"},"zsh"),") is most likely available\nalready, and if not, you can get it from ",(0,a.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash"},"https://www.gnu.org/software/bash"),"."),(0,a.kt)("li",{parentName:"ul"},"On Windows, you can install ",(0,a.kt)("a",{parentName:"li",href:"https://gitforwindows.org"},"Git for Windows")," which comes bundled\nwith a ",(0,a.kt)("inlineCode",{parentName:"li"},"bash")," terminal")))}l.isMDXComponent=!0;const s={toc:[]};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Another essential part of the modern software development, especially for web, is the source code\nmanagement tool ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git"),". Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Downloads"),"\nsection, and install the latest release for your platform. As mentioned in the previous section,\nthe Windows installer comes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," CLI as well."),(0,a.kt)("p",null,"To check whether ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," is installed and available, try running the following command in ",(0,a.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,a.kt)("p",null,"You should see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Checking git in terminal",src:n(3152).Z,width:"1644",height:"994"})))}p.isMDXComponent=!0;const u={toc:[]};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For the coding itself you're welcome to use whichever editor you like the most.\nIf you're looking for recommendations, we recommend ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"\nas it is free, cross-platform, fast, and packed with lots of great features.\nSimply install the latest stable build for your platform."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We've built an extension for Visual Studio Code that provides insight into\nsome of the APS services and data directly from the editor:\n",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=petrbroz.vscode-forge-tools"},"vscode-forge-tools"),".\nThis could be useful when debugging your own APS applications.")))}d.isMDXComponent=!0;const m={toc:[{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Source code management",id:"source-code-management",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Editor",id:"editor",level:2}]};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,a.kt)(l,{mdxType:"CliSetup"}),(0,a.kt)("h2",{id:"source-code-management"},"Source code management"),(0,a.kt)(p,{mdxType:"GitSetup"}),(0,a.kt)("h2",{id:"runtime"},"Runtime"),(0,a.kt)("p",null,"We will also need the Node.js ",(0,a.kt)("em",{parentName:"p"},"runtime")," to run our code, and the Node.js package manager, ",(0,a.kt)("em",{parentName:"p"},"NPM"),",\nto manage 3rd party dependencies. You can get an installer for your platform on ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download"),"\nwhich will install both."),(0,a.kt)("p",null,"To make sure the tools are available, try running the following two commands in ",(0,a.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,a.kt)("p",null,"You should see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Checking node in terminal",src:n(4858).Z,width:"1644",height:"994"})),(0,a.kt)("h2",{id:"editor"},"Editor"),(0,a.kt)(d,{mdxType:"VSCodeSetup"}))}c.isMDXComponent=!0;const h={toc:[{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Source code management",id:"source-code-management",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Editor",id:"editor",level:2}]};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,a.kt)(l,{mdxType:"CliSetup"}),(0,a.kt)("h2",{id:"source-code-management"},"Source code management"),(0,a.kt)(p,{mdxType:"GitSetup"}),(0,a.kt)("h2",{id:"runtime"},"Runtime"),(0,a.kt)("p",null,"We will also need the .NET 6 ",(0,a.kt)("em",{parentName:"p"},"runtime")," to run our code and manage 3rd party dependencies.\nYou can get an installer for your platform on ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Our sample applications have been developed and tested with .NET 6.0.")),(0,a.kt)("p",null,"To make sure the tool is available, try running the following command in ",(0,a.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet --version\n")),(0,a.kt)("p",null,"You should see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Checking dotnet in terminal",src:n(6878).Z,width:"1644",height:"994"})),(0,a.kt)("h2",{id:"editor"},"Editor"),(0,a.kt)(d,{mdxType:"VSCodeSetup"}))}f.isMDXComponent=!0;const k={toc:[]};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In our tutorials we will be using Visual Studio Community 2022. You can download ",(0,a.kt)("em",{parentName:"p"},"Visual Studio Installer"),"\nfrom ",(0,a.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/vs/community/"},"here"),", and then install the desired version and edition\nof Visual Studio from the installer application:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Visual Studio Installer",src:n(255).Z,width:"1280",height:"720"})),(0,a.kt)("p",null,"Make sure to include the ",(0,a.kt)("em",{parentName:"p"},"ASP.NET and web development")," component, and consider including\nthe ",(0,a.kt)("em",{parentName:"p"},".NET desktop development")," component as well if you plan to develop plugins for desktop applications\nsuch as Revit or Inventor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Visual Studio Components",src:n(7703).Z,width:"1280",height:"720"})))}v.isMDXComponent=!0;const b={},g="Environment Setup",w={unversionedId:"setup/index",id:"setup/index",title:"Environment Setup",description:"Some of the tutorials on this website are provided for various combinations",source:"@site/docs/setup/index.mdx",sourceDirName:"setup",slug:"/setup/",permalink:"/setup/",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/setup/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"Simple Viewer",permalink:"/tutorials/simple-viewer/"}},y={},N=[],C={toc:N};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,a.kt)("p",null,"Some of the tutorials on this website are provided for various combinations\nof programming languages and IDEs. Based on your preference, setup one of the\nfollowing development environments on your machine:"),(0,a.kt)(r.Z,{NodeJsVsCode:c,DotNetVsCode:f,DotNetVs2022:v,mdxType:"EnvTabs"}),(0,a.kt)("p",null,"And you're all set. Now head over to one of the tutorials and let's code!"))}E.isMDXComponent=!0},7703:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vs-components-87b972c7036ae79bdbd72cf6e06c42c7.webp"},255:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vs-installer-7f12e84120348b7e909e862f63eeb45a.webp"},6878:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dotnet-46b40ecea2f72f0a2eb242ffb81b6f26.webp"},3152:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/git-7882c81e05c8c23046769fb2d4f8a7cd.webp"},4858:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-850a56ad027351d7448d8e7c215463b3.webp"}}]);