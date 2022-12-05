"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[759],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),s=n(6010);const o="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,a),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),s=n(7294),o=n(6010),a=n(1048),i=n(3609),l=n(1943),u=n(2957);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:a,values:d,groupId:h,className:m}=e,b=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,i.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===a?a:a??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,l.U)(),[w,j]=(0,s.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&j(e)}const I=e=>{const t=e.currentTarget,n=C.indexOf(t),r=g[n].value;r!==w&&(T(t),j(r),null!=h&&k(h,String(r)))},A=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},g.map((e=>{let{value:t,label:n,attributes:a}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:A,onClick:I},a,{className:(0,o.Z)("tabs__item",p,a?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,s.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,a.Z)();return s.createElement(d,(0,r.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),s=n(4259),o=n(425);function a(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:a}=e;return r.createElement(s.Z,{groupId:"development-environment"},r.createElement(o.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},r.createElement(t,null)),r.createElement(o.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},r.createElement(n,null)),r.createElement(o.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},r.createElement(a,null)))}},1505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var r=n(7462),s=(n(7294),n(4137)),o=n(415);const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Let's implement the logic for browsing through the individual hubs, projects, folders, items,\nand versions. Add the following code to the end of the ",(0,s.kt)("inlineCode",{parentName:"p"},"services/aps.js")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/aps.js"',title:'"services/aps.js"'},"service.getHubs = async (token) => {\n    const resp = await new APS.HubsApi().getHubs(null, internalAuthClient, token);\n    return resp.body.data;\n};\n\nservice.getProjects = async (hubId, token) => {\n    const resp = await new APS.ProjectsApi().getHubProjects(hubId, null, internalAuthClient, token);\n    return resp.body.data;\n};\n\nservice.getProjectContents = async (hubId, projectId, folderId, token) => {\n    if (!folderId) {\n        const resp = await new APS.ProjectsApi().getProjectTopFolders(hubId, projectId, internalAuthClient, token);\n        return resp.body.data;\n    } else {\n        const resp = await new APS.FoldersApi().getFolderContents(projectId, folderId, null, internalAuthClient, token);\n        return resp.body.data;\n    }\n};\n\nservice.getItemVersions = async (projectId, itemId, token) => {\n    const resp = await new APS.ItemsApi().getItemVersions(projectId, itemId, null, internalAuthClient, token);\n    return resp.body.data;\n};\n")))}i.isMDXComponent=!0;const l={toc:[]};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"hubs.js")," file under the ",(0,s.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/hubs.js"',title:'"routes/hubs.js"'},"const express = require('express');\nconst { authRefreshMiddleware, getHubs, getProjects, getProjectContents, getItemVersions } = require('../services/aps.js');\n\nlet router = express.Router();\n\nrouter.use('/api/hubs', authRefreshMiddleware);\n\nrouter.get('/api/hubs', async function (req, res, next) {\n    try {\n        const hubs = await getHubs(req.internalOAuthToken);\n        res.json(hubs);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/api/hubs/:hub_id/projects', async function (req, res, next) {\n    try {\n        const projects = await getProjects(req.params.hub_id, req.internalOAuthToken);\n        res.json(projects);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/api/hubs/:hub_id/projects/:project_id/contents', async function (req, res, next) {\n    try {\n        const contents = await getProjectContents(req.params.hub_id, req.params.project_id, req.query.folder_id, req.internalOAuthToken);\n        res.json(contents);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/api/hubs/:hub_id/projects/:project_id/contents/:item_id/versions', async function (req, res, next) {\n    try {\n        const versions = await getItemVersions(req.params.project_id, req.params.item_id, req.internalOAuthToken);\n        res.json(versions);\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,s.kt)("p",null,"And mount the router to our server application by modifying ",(0,s.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session');\nconst { PORT, SERVER_SESSION_SECRET } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));\napp.use(require('./routes/auth.js'));\n// highlight-start\napp.use(require('./routes/hubs.js'));\n// highlight-end\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")))}u.isMDXComponent=!0;const c={toc:[]};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"APS.Hubs.cs")," under the ",(0,s.kt)("inlineCode",{parentName:"p"},"Models")," subfolder with the following content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.Hubs.cs"',title:'"Models/APS.Hubs.cs"'},"using System.Collections.Generic;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\nusing Autodesk.Forge.Model;\n\npublic partial class APS\n{\n    public async Task<IEnumerable<dynamic>> GetHubs(Tokens tokens)\n    {\n        var hubs = new List<dynamic>();\n        var api = new HubsApi();\n        api.Configuration.AccessToken = tokens.InternalToken;\n        var response = await api.GetHubsAsync();\n        foreach (KeyValuePair<string, dynamic> hub in new DynamicDictionaryItems(response.data))\n        {\n            hubs.Add(hub.Value);\n        }\n        return hubs;\n    }\n\n    public async Task<IEnumerable<dynamic>> GetProjects(string hubId, Tokens tokens)\n    {\n        var projects = new List<dynamic>();\n        var api = new ProjectsApi();\n        api.Configuration.AccessToken = tokens.InternalToken;\n        var response = await api.GetHubProjectsAsync(hubId);\n        foreach (KeyValuePair<string, dynamic> project in new DynamicDictionaryItems(response.data))\n        {\n            projects.Add(project.Value);\n        }\n        return projects;\n    }\n\n    public async Task<IEnumerable<dynamic>> GetContents(string hubId, string projectId, string folderId, Tokens tokens)\n    {\n        var contents = new List<dynamic>();\n        if (string.IsNullOrEmpty(folderId))\n        {\n            var api = new ProjectsApi();\n            api.Configuration.AccessToken = tokens.InternalToken;\n            var response = await api.GetProjectTopFoldersAsync(hubId, projectId);\n            foreach (KeyValuePair<string, dynamic> folders in new DynamicDictionaryItems(response.data))\n            {\n                contents.Add(folders.Value);\n            }\n        }\n        else\n        {\n            var api = new FoldersApi();\n            api.Configuration.AccessToken = tokens.InternalToken;\n            var response = await api.GetFolderContentsAsync(projectId, folderId); // TODO: add paging\n            foreach (KeyValuePair<string, dynamic> item in new DynamicDictionaryItems(response.data))\n            {\n                contents.Add(item.Value);\n            }\n        }\n        return contents;\n    }\n\n    public async Task<IEnumerable<dynamic>> GetVersions(string hubId, string projectId, string itemId, Tokens tokens)\n    {\n        var versions = new List<dynamic>();\n        var api = new ItemsApi();\n        api.Configuration.AccessToken = tokens.InternalToken;\n        var response = await api.GetItemVersionsAsync(projectId, itemId);\n        foreach (KeyValuePair<string, dynamic> version in new DynamicDictionaryItems(response.data))\n        {\n            versions.Add(version.Value);\n        }\n        return versions;\n    }\n}\n")))}p.isMDXComponent=!0;const d={toc:[]};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"HubsController.cs")," file under the ",(0,s.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder with the following content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/HubsController.cs"',title:'"Controllers/HubsController.cs"'},'using System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.Logging;\nusing Newtonsoft.Json;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class HubsController : ControllerBase\n{\n    private readonly ILogger<HubsController> _logger;\n    private readonly APS _aps;\n\n    public HubsController(ILogger<HubsController> logger, APS aps)\n    {\n        _logger = logger;\n        _aps = aps;\n    }\n\n    [HttpGet()]\n    public async Task<ActionResult<string>> ListHubs()\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var hubs = await _aps.GetHubs(tokens);\n        return JsonConvert.SerializeObject(hubs);\n    }\n\n    [HttpGet("{hub}/projects")]\n    public async Task<ActionResult<string>> ListProjects(string hub)\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var projects = await _aps.GetProjects(hub, tokens);\n        return JsonConvert.SerializeObject(projects);\n    }\n\n    [HttpGet("{hub}/projects/{project}/contents")]\n    public async Task<ActionResult<string>> ListItems(string hub, string project, [FromQuery] string folder_id)\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var contents = await _aps.GetContents(hub, project, folder_id, tokens);\n        return JsonConvert.SerializeObject(contents);\n    }\n\n    [HttpGet("{hub}/projects/{project}/contents/{item}/versions")]\n    public async Task<ActionResult<string>> ListVersions(string hub, string project, string item)\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var versions = await _aps.GetVersions(hub, project, item, tokens);\n        return JsonConvert.SerializeObject(versions);\n    }\n}\n')),(0,s.kt)("p",null,"The controller handles several endpoints for browsing the content in other APS-based\napplications such as BIM 360 Docs and ACC. We will make use of these endpoints when\nbuilding the UI part of the application."))}h.isMDXComponent=!0;const m={title:"Data Browsing"},b="Data Browsing",g={unversionedId:"tutorials/hubs-browser/data",id:"tutorials/hubs-browser/data",title:"Data Browsing",description:"In this step we'll extend our server so that we can browse the content of other APS-based",source:"@site/docs/tutorials/02-hubs-browser/03-data.mdx",sourceDirName:"tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/data",permalink:"/tutorials/hubs-browser/data",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/02-hubs-browser/03-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Data Browsing"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/tutorials/hubs-browser/auth"},next:{title:"Viewer & UI",permalink:"/tutorials/hubs-browser/viewer"}},f={},v=[{value:"Browsing hubs",id:"browsing-hubs",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],y={toc:v};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"data-browsing"},"Data Browsing"),(0,s.kt)("p",null,"In this step we'll extend our server so that we can browse the content of other APS-based\napplications such as BIM 360 Docs or Autodesk Docs. We will basically follow the Data Management\nservice's hierarchy of hubs, projects, folders, items, and versions:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data Management structure",src:n(4790).Z,width:"1399",height:"864"})),(0,s.kt)("h2",{id:"browsing-hubs"},"Browsing hubs"),(0,s.kt)("p",null,"First, let's add a couple of helper methods for browsing through the hubs, projects,\nfolders, items, and versions:"),(0,s.kt)(o.Z,{NodeJsVsCode:i,DotNetVsCode:p,DotNetVs2022:p,mdxType:"EnvTabs"}),(0,s.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,s.kt)("p",null,"Next, let's expose the new functionality to the client-side code through another\nset of endpoints."),(0,s.kt)(o.Z,{NodeJsVsCode:u,DotNetVsCode:h,DotNetVs2022:h,mdxType:"EnvTabs"}),(0,s.kt)("h2",{id:"try-it-out"},"Try it out"),(0,s.kt)("p",null,"And that's it for the server side. Time to try it out!"),(0,s.kt)("p",null,"Start (or restart) the app from Visual Studio Code as usual, and navigate to\n",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8080/api/hubs"},"http://localhost:8080/api/hubs")," in the browser.\nThe server should respond with a JSON list of all the hubs you have access to.\nTry copying the ID of one of the hubs, and use it in another address: http://localhost:8080/api/hubs/your-hub-id/projects.\nIn this case the server application should respond with a JSON list of all projects\navailable under the specified hub."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If you skipped the login procedure in the previous step, or restarted your server application,\nyou may need to go to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nagain to make sure that all the authentication data is available in cookies before testing\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/hubs")," endpoint.")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you are using Google Chrome, consider installing ",(0,s.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en"},"JSON Formatter"),"\nor a similar extension to automatically format JSON responses.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hubs Response",src:n(9450).Z,width:"1500",height:"929"})))}k.isMDXComponent=!0},4790:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dm-structure-b5f87fcf63e09968a2997e1df1c9d095.webp"},9450:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hubs-response-6ca89cc77b1e67f6197c74b8561d0115.webp"}}]);