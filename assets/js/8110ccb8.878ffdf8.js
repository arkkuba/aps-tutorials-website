"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[382],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7462),a=n(7294),i=n(6010),r=n(1048),s=n(3609),l=n(1943),d=n(2957);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:r,values:u,groupId:h,className:m}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=u??g.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),f=(0,s.l)(w,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!w.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=(0,l.U)(),[N,E]=(0,a.useState)(v),y=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&w.some((t=>t.value===e))&&E(e)}const C=e=>{const t=e.currentTarget,n=y.indexOf(t),o=w[n].value;o!==N&&(x(t),E(o),null!=h&&b(h,String(o)))},T=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=y.indexOf(e.currentTarget)+1;t=y[n]??y[0];break}case"ArrowLeft":{const n=y.indexOf(e.currentTarget)-1;t=y[n]??y[y.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},w.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>y.push(e),onKeyDown:T,onClick:C},r,{className:(0,i.Z)("tabs__item",c,r?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,r.Z)();return a.createElement(u,(0,o.Z)({key:String(t)},e))}},1165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(7462),a=(n(7294),n(4137)),i=n(4259),r=n(425);const s={title:"Basic Extension"},l="Basic Extension",d={unversionedId:"tutorials/dashboard/basic",id:"tutorials/dashboard/basic",title:"Basic Extension",description:"The Viewer component in Autodesk Platform Services provides its own set of APIs",source:"@site/docs/tutorials/03-dashboard/01-basic.mdx",sourceDirName:"tutorials/03-dashboard",slug:"/tutorials/dashboard/basic",permalink:"/tutorials/dashboard/basic",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/03-dashboard/01-basic.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basic Extension"},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/tutorials/dashboard/"},next:{title:"Model Summary",permalink:"/tutorials/dashboard/panel"}},p={},c=[{value:"Extension skeleton",id:"extension-skeleton",level:2},{value:"Event handling",id:"event-handling",level:2},{value:"Metadata queries",id:"metadata-queries",level:2},{value:"Simple extension",id:"simple-extension",level:2},{value:"Try it out",id:"try-it-out",level:2}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-extension"},"Basic Extension"),(0,a.kt)("p",null,"The Viewer component in Autodesk Platform Services provides its own set of ",(0,a.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D"},"APIs"),"\nthat you can use to customize its look and feel, behavior, and even the rendered content. While you ",(0,a.kt)("em",{parentName:"p"},"could"),"\nsimply sprinkle your custom viewer logic in random places of the client-side code, it is a good practice\nto encapsulate any viewer functionality into a ",(0,a.kt)("em",{parentName:"p"},"viewer extension"),". That way you can easily share the same\nfunctionality across different pages of your web application, and even across different projects entirely."),(0,a.kt)("p",null,"Let's start by implementing a simple viewer extension that will react to various viewer events, and output\ndifferent types of information about the currently loaded design."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you don't have an existing APS application to start with, you can use one of the apps from\nprevious tutorials. Here's a quick way to get the ",(0,a.kt)("a",{parentName:"p",href:"../simple-viewer"},"Simple Viewer")," application\nrunning locally using your preferred programming language:"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Create APS credentials if you don't have them already (see ",(0,a.kt)("a",{parentName:"li",href:"/"},"Getting Started")," for\nmore details)"),(0,a.kt)("li",{parentName:"ul"},"Make sure you have ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js"),", ",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),",\nand a Unix-like terminal installed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On Windows systems, you can install ",(0,a.kt)("a",{parentName:"li",href:"https://gitforwindows.org"},"Git for Windows"),"\nwhich comes bundled with a ",(0,a.kt)("inlineCode",{parentName:"li"},"bash")," terminal"))),(0,a.kt)("li",{parentName:"ul"},"Open the terminal and run the following commands:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/autodesk-platform-services/aps-simple-viewer-nodejs\ncd aps-simple-viewer-nodejs\nnpm install\nAPS_CLIENT_ID="your client id" APS_CLIENT_SECRET="your client secret" npm start\n')),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:8080"},"http://localhost:8080")))),(0,a.kt)(r.Z,{value:"dotnet",label:".NET 6",mdxType:"TabItem"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Create APS credentials if you don't have them already (see ",(0,a.kt)("a",{parentName:"li",href:"/"},"Getting Started")," for\nmore details)"),(0,a.kt)("li",{parentName:"ul"},"Make sure you have ",(0,a.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".NET 6"),",\n",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),", and a Unix-like terminal installed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On Windows systems, you can install ",(0,a.kt)("a",{parentName:"li",href:"https://gitforwindows.org"},"Git for Windows"),"\nwhich comes bundled with a ",(0,a.kt)("inlineCode",{parentName:"li"},"bash")," terminal"))),(0,a.kt)("li",{parentName:"ul"},"Open the terminal and run the following commands:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/autodesk-platform-services/aps-simple-viewer-dotnet\ncd aps-simple-viewer-dotnet\ndotnet build\nAPS_CLIENT_ID="your client id" APS_CLIENT_SECRET="your client secret" dotnet run\n')),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:8080"},"http://localhost:8080")))))),(0,a.kt)("h2",{id:"extension-skeleton"},"Extension skeleton"),(0,a.kt)("p",null,"Later in this tutorial we will implement other extensions that may share similar functionality, so we will\nfirst implement a base class that all the extensions will be derived from."),(0,a.kt)("p",null,"Go to the folder that contains your client side assets such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," page (in our case it's\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder), and create a new subfolder called ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions"),". This is where we will store all\nour viewer extensions. Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseExtension.js")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions")," folder, and populate it with\nthe following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n    }\n\n    load() {\n        return true;\n    }\n\n    unload() {\n        return true;\n    }\n}\n")),(0,a.kt)("p",null,"As you can see, a viewer extension is basically a subclass of ",(0,a.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Extension"},"Autodesk.Viewing.Extension"),"\nthat overrides some of its lifecycle methods. For now we have overridden the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"load")," - called when the extension is loaded by the viewer, returning a boolean flag indicating whether the loading was successful"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unload")," - called when the extension is unloaded by the viewer, returning a boolean flag indicating whether the unloading was successful")),(0,a.kt)("p",null,'In its constructor the extension always receives the instance of the viewer that "owns" this extension,\nand optionally another object with extension-specific inputs.'),(0,a.kt)("h2",{id:"event-handling"},"Event handling"),(0,a.kt)("p",null,'Now, let\'s update our extension so that it reacts to different kinds of events in the viewer, for example,\nwhen a new model is loaded, when the user selects one or more elements, or when one or more elements are\n"isolated". Update the ',(0,a.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        // highlight-start\n        this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);\n        this._onSelectionChanged = (ev) => this.onSelectionChanged(ev.model, ev.dbIdArray);\n        this._onIsolationChanged = (ev) => this.onIsolationChanged(ev.model, ev.nodeIdArray);\n        // highlight-end\n    }\n\n    load() {\n        // highlight-start\n        this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.addEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        // highlight-end\n        return true;\n    }\n\n    unload() {\n        // highlight-start\n        this.viewer.removeEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.removeEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        // highlight-end\n        return true;\n    }\n\n    // highlight-start\n    onModelLoaded(model) {}\n\n    onSelectionChanged(model, dbids) {}\n\n    onIsolationChanged(model, dbids) {}\n    // highlight-end\n}\n")),(0,a.kt)("p",null,"As you can see, the viewer provides ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"removeEventListener")," methods that we can use\nto handle different viewer events. In this case we're handling the ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECT_TREE_CREATED_EVENT"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"SELECTION_CHANGED_EVENT"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ISOLATE_EVENT")," events by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"onModelLoaded"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onSelectionChanged"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"onIsolationChanged")," methods respectively. For now these methods don't do anything - we will override\nthem in other extensions derived from the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Full list of viewer events can be found at\n",(0,a.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/#events"},"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/#events"),".")),(0,a.kt)("h2",{id:"metadata-queries"},"Metadata queries"),(0,a.kt)("p",null,"Most of the extensions in this tutorial will need to access the metadata of the currently loaded design,\nfor example, to iterate through the design's logical hierarchy, or to query properties of elements."),(0,a.kt)("p",null,"In the viewer UI, logical hierarchy is what you see in the ",(0,a.kt)("em",{parentName:"p"},"Model")," panel:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Model browser",src:n(429).Z,width:"1500",height:"890"})),(0,a.kt)("p",null,"To navigate the logical hierarchy programatically, the viewer API provides a structure called\nan ",(0,a.kt)("em",{parentName:"p"},"instance tree")," (or an ",(0,a.kt)("em",{parentName:"p"},"object tree"),") that simply defines parent-child relationships between\ndifferent design elements, called ",(0,a.kt)("em",{parentName:"p"},"nodes"),". For example, you can use this structure to find\nall children of a specific node, to find a parent of a node, or to ",(0,a.kt)("em",{parentName:"p"},"recursively")," enumerate all\nchildren of a given node. Nodes without any children - we call them ",(0,a.kt)("em",{parentName:"p"},"leaf nodes")," - are usually\nmore interesting for us as they contain more metadata than the internal nodes."),(0,a.kt)("p",null,"Let's update our ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class with a couple of helper methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);\n        this._onSelectionChanged = (ev) => this.onSelectionChanged(ev.model, ev.dbIdArray);\n        this._onIsolationChanged = (ev) => this.onIsolationChanged(ev.model, ev.nodeIdArray);\n    }\n\n    load() {\n        this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.addEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    unload() {\n        this.viewer.removeEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.removeEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    onModelLoaded(model) {}\n\n    onSelectionChanged(model, dbids) {}\n\n    onIsolationChanged(model, dbids) {}\n\n    // highlight-start\n    findLeafNodes(model) {\n        return new Promise(function (resolve, reject) {\n            model.getObjectTree(function (tree) {\n                let leaves = [];\n                tree.enumNodeChildren(tree.getRootId(), function (dbid) {\n                    if (tree.getChildCount(dbid) === 0) {\n                        leaves.push(dbid);\n                    }\n                }, true /* recursively enumerate children's children as well */);\n                resolve(leaves);\n            }, reject);\n        });\n    }\n    // highlight-end\n\n    // highlight-start\n    async findPropertyNames(model) {\n        const dbids = await this.findLeafNodes(model);\n        return new Promise(function (resolve, reject) {\n            model.getBulkProperties(dbids, {}, function (results) {\n                let propNames = new Set();\n                for (const result of results) {\n                    for (const prop of result.properties) {\n                        propNames.add(prop.displayName);\n                    }\n                }\n                resolve(Array.from(propNames.values()));\n            }, reject);\n        });\n    }\n    // highlight-end\n}\n")),(0,a.kt)("p",null,"Here we're starting to use the ",(0,a.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model"},"Model")," class\n(representing the currently loaded design) and some of its methods, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model/#getobjecttree-onsuccesscallback-onerrorcallback"},"Model#getObjectTree")," - used to\nretrieve the model's instance tree"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model/#getbulkproperties-dbids-options-onsuccesscallback-onerrorcallback"},"Model#getBulkProperties")," - used to\nretrieve the metadata for one or more objects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Private/InstanceTree/#getrootid"},"InstanceTree#getRootId")," - returning the ID of the root object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Private/InstanceTree/#enumnodechildren-node-callback-recursive"},"InstanceTree#enumNodeChildren")," - used to\nrecursively enumerate all children of a specific object")),(0,a.kt)("h2",{id:"simple-extension"},"Simple extension"),(0,a.kt)("p",null,"Alright, now to try this new functionality in the viewer, let's create another extension\nderived from the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class, and load it in our viewer application. Create a\n",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerExtension.js")," file in the same folder where ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseExtension.js")," is located, and\npopulate it with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/LoggerExtension.js"',title:'"wwwroot/extensions/LoggerExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass LoggerExtension extends BaseExtension {\n    load() {\n        super.load();\n        console.log('LoggerExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        console.log('LoggerExtension unloaded.');\n        return true;\n    }\n\n    async onModelLoaded(model) {\n        super.onModelLoaded(model);\n        const props = await this.findPropertyNames(this.viewer.model);\n        console.log('New model has been loaded. Its objects contain the following properties:', props);\n    }\n\n    async onSelectionChanged(model, dbids) {\n        super.onSelectionChanged(model, dbids);\n        console.log('Selection has changed', dbids);\n    }\n\n    onIsolationChanged(model, dbids) {\n        super.onIsolationChanged(model, dbids);\n        console.log('Isolation has changed', dbids);\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('LoggerExtension', LoggerExtension);\n")),(0,a.kt)("p",null,"The new extension simply overrides methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class, and outputs some\nuseful information to the browser console in reaction to different viewer events."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Browser console is essential for web development and debugging. Learn more on how to use it for\n",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/console/"},"Chrome"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/console"},"Edge"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Opening_the_Web_Console"},"Firefox"),",\nand ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/safari/tools/"},"Safari"),".")),(0,a.kt)("p",null,"We also ",(0,a.kt)("strong",{parentName:"p"},"register")," the extension under a specific unique ID so that the viewer can later find it.\nThis is done via a singleton object called ",(0,a.kt)("inlineCode",{parentName:"p"},"Autodesk.Viewing.theExtensionManager")," and its\n",(0,a.kt)("inlineCode",{parentName:"p"},"registerExtension(extensionId, extensionClass)")," method."),(0,a.kt)("p",null,"Now, let's make sure the extension code is loaded by our web application. In our case we can simply\nadd the following ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statement to the top of the ",(0,a.kt)("inlineCode",{parentName:"p"},"wwwroot/viewer.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import './extensions/LoggerExtension.js';\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're working with a different application source code, you may need to include the file\nusing a ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag in your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," page, for example, like so:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="extensions/LoggerExtension.js"><\/script>\n'))),(0,a.kt)("p",null,"Finally, we need to tell the viewer to load this extension. Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"wwwroot/viewer.js")," file,\nfind the line where the ",(0,a.kt)("inlineCode",{parentName:"p"},"GuiViewer3D")," class is instantiated, and pass in a custom configuration\nobject listed below as the second parameter to the constructor. If you are already passing a custom\nconfig to the constructor, simply include the ",(0,a.kt)("inlineCode",{parentName:"p"},"'LoggerExtension'")," string to its ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions")," list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n    extensions: [\n        'LoggerExtension'\n    ]\n};\nconst viewer = new Autodesk.Viewing.GuiViewer3D(container, config);\n")),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"And with that, our first extension is ready to use. It doesn't have any user interface\nbut we can test it out in the browser console. Start your application as usual, view it\nin the browser, open the browser console, and load one of your designs into the viewer.\nWhen the model finishes loading, our ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerExtension")," will list all properties used\nin this model to the console. And if we select one or more objects in the viewer,\nthe extension will list their IDs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Summary Result",src:n(6498).Z,width:"1500",height:"987"})))}h.isMDXComponent=!0},429:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/model-browser-6910550ba52b9cd1207d136223711883.webp"},6498:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/summary-result-05e4ef75d4e4fee2abbda347c75ff60a.webp"}}]);