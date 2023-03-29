"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[279],{425:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(7462),o=n(7294),i=n(6010),r=n(2957),s=n(6550),u=n(5238),l=n(3609),c=n(2560);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,l]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),k(e)}),[l,k,i]),tabValues:i}}var g=n(1048);const b="tabList__CuJ",y="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==s&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},r,{className:(0,i.Z)("tabs__item",y,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",b)},o.createElement(w,(0,a.Z)({},e,t)),o.createElement(f,(0,a.Z)({},e,t)))}function A(e){const t=(0,g.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(3992),i=n(425);function r(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:r}=e;return a.createElement(o.Z,{groupId:"development-environment"},a.createElement(i.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},a.createElement(t,null)),a.createElement(i.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},a.createElement(n,null)),a.createElement(i.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},a.createElement(r,null)))}},3913:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(2004);const i="wrapper_emgM",r="player_m1gG";function s(e){let{src:t}=e;return a.createElement("div",{className:i},a.createElement(o.Z,{className:r,url:t,playing:!0,loop:!0,width:"100%",height:"100%"}))}},5946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>w,default:()=>N,frontMatter:()=>y,metadata:()=>f,toc:()=>A});var a=n(7462),o=(n(7294),n(4137)),i=n(415);const r={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following apis should be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DesignAutomationController.cs")," file before the last line ",(0,o.kt)("inlineCode",{parentName:"p"},"GetDefinedActivities")," method."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"StartWorkitem")),(0,o.kt)("p",null,"This is where we actually start the Design Automation. This endpoint also uploads the input file to an OSS Bucket and define that the output should be saved at the same bucket. To help you identify the files, both input and output uses the same original file name, but with a suffix (input or output) plus a time stamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    /// <summary>\n    /// Direct To S3\n    /// ref : https://aps.autodesk.com/blog/new-feature-support-direct-s3-migration-inputoutput-files-design-automation\n    /// </summary>\n    static void onUploadProgress(float progress, TimeSpan elapsed, List<UploadItemDesc> objects)\n    {\n        Console.WriteLine("progress: {0} elapsed: {1} objects: {2}", progress, elapsed, string.Join(", ", objects));\n    }\n    public static async Task<string> GetObjectId(string bucketKey, string objectKey, dynamic oauth, string fileSavePath)\n    {\n        try\n        {\n            ObjectsApi objectsApi = new ObjectsApi();\n            objectsApi.Configuration.AccessToken = oauth.access_token;\n            List<UploadItemDesc> uploadRes = await objectsApi.uploadResources(bucketKey,\n                new List<UploadItemDesc> {\n                    new UploadItemDesc(objectKey, await System.IO.File.ReadAllBytesAsync(fileSavePath))\n                },\n                null,\n                onUploadProgress,\n                null);\n            Console.WriteLine("**** Upload object(s) response(s):");\n            DynamicDictionary objValues = uploadRes[0].completed;\n            objValues.Dictionary.TryGetValue("objectId", out var id);\n\n            return id?.ToString();\n        }\n        catch (Exception ex)\n        {\n            Console.WriteLine($"Exception when preparing input url:{ex.Message}");\n            throw;\n        }\n    }\n\n    /// <summary>\n    /// Input for StartWorkitem\n    /// </summary>\n    public class StartWorkitemInput\n    {\n        public IFormFile inputFile { get; set; }\n        public string data { get; set; }\n    }\n\n    /// <summary>\n    /// Start a new workitem\n    /// </summary>\n    [HttpPost]\n    [Route("api/aps/designautomation/workitems")]\n    public async Task<IActionResult> StartWorkitem([FromForm] StartWorkitemInput input)\n    {\n        // basic input validation\n        JObject workItemData = JObject.Parse(input.data);\n        string widthParam = workItemData["width"].Value<string>();\n        string heigthParam = workItemData["height"].Value<string>();\n        string activityName = string.Format("{0}.{1}",\n                                    NickName, workItemData["activityName"].Value<string>());\n        string browserConnectionId = workItemData["browserConnectionId"].Value<string>();\n\n        // save the file on the server\n        var fileSavePath = Path.Combine(_env.ContentRootPath, Path.GetFileName(input.inputFile.FileName));\n        using (var stream = new FileStream(fileSavePath, FileMode.Create))\n        await input.inputFile.CopyToAsync(stream);\n\n        // OAuth token\n        dynamic oauth = await OAuthController.GetInternalAsync();\n\n        // upload file to OSS Bucket\n        // 1. ensure bucket existis\n        string bucketKey = NickName.ToLower() + "-designautomation";\n        BucketsApi buckets = new BucketsApi();\n        buckets.Configuration.AccessToken = oauth.access_token;\n        try\n        {\n            PostBucketsPayload bucketPayload = new PostBucketsPayload(bucketKey, null,\n                                                    PostBucketsPayload.PolicyKeyEnum.Transient);\n            await buckets.CreateBucketAsync(bucketPayload, "US");\n        }\n        catch { }; // in case bucket already exists\n                    // 2. upload inputFile\n        string inputFileNameOSS = string.Format("{0}_input_{1}",\n                                                DateTime.Now.ToString("yyyyMMddhhmmss"),\n                                                Path.GetFileName(input.inputFile.FileName));// avoid overriding\n\n\n        // prepare workitem arguments\n        // 1. input file\n        XrefTreeArgument inputFileArgument = new XrefTreeArgument()\n        {\n            Url = await GetObjectId(bucketKey, inputFileNameOSS, oauth, fileSavePath),\n            Headers = new Dictionary<string, string>()\n            {\n               { "Authorization", "Bearer " + oauth.access_token}\n            }\n        };\n\n        // 2. input json\n        dynamic inputJson = new JObject();\n        inputJson.Width = widthParam;\n        inputJson.Height = heigthParam;\n        XrefTreeArgument inputJsonArgument = new XrefTreeArgument()\n        {\n            Url = "data:application/json, " + ((JObject)inputJson).ToString(Formatting.None).Replace("\\"", "\'")\n        };\n        // 3. output file\n        string outputFileNameOSS = string.Format("{0}_output_{1}",\n                                                    DateTime.Now.ToString("yyyyMMddhhmmss"),\n                                                    Path.GetFileName(input.inputFile.FileName)); // avoid overriding\n\n        XrefTreeArgument outputFileArgument = new XrefTreeArgument()\n        {\n            Url = await GetObjectId(bucketKey, outputFileNameOSS, oauth, fileSavePath),\n            Headers = new Dictionary<string, string>()\n            {\n                { "Authorization", "Bearer " + oauth.access_token}\n            },\n            Verb = Verb.Put\n        };\n\n        if (System.IO.File.Exists(fileSavePath))\n        {\n            System.IO.File.Delete(fileSavePath);\n        }\n\n        // prepare & submit workitem\n        string callbackUrl = string.Format("{0}/api/aps/callback/designautomation?id={1}&outputFileName={2}",\n                                            OAuthController.GetAppSetting("APS_WEBHOOK_URL"),\n                                            browserConnectionId, outputFileNameOSS);\n        WorkItem workItemSpec = new WorkItem()\n        {\n            ActivityId = activityName,\n            Arguments = new Dictionary<string, IArgument>()\n            {\n                { "inputFile", inputFileArgument },\n                { "inputJson",  inputJsonArgument },\n                { "outputFile", outputFileArgument },\n                { "onComplete", new XrefTreeArgument { Verb = Verb.Post, Url = callbackUrl } }\n            }\n        };\n        WorkItemStatus workItemStatus = await _designAutomation.CreateWorkItemAsync(workItemSpec);\n\n        return Ok(new { WorkItemId = workItemStatus.Id });\n    }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OnCallback")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    /// <summary>\n    /// Callback from Design Automation Workitem (onProgress or onComplete)\n    /// </summary>\n    [HttpPost]\n    [Route("/api/aps/callback/designautomation")]\n    public async Task<IActionResult> OnCallback(string id, string outputFileName, [FromBody] dynamic body)\n    {\n        try\n        {\n            // your webhook should return immediately! we can use Hangfire to schedule a job\n            JObject bodyJson = JObject.Parse((string)body.ToString());\n            await _hubContext.Clients.Client(id).SendAsync("onComplete", bodyJson.ToString());\n\n            using (var httpClient = new HttpClient())\n            {\n                byte[] bs = await httpClient.GetByteArrayAsync(bodyJson["reportUrl"]?.Value<string>());\n                string report = System.Text.Encoding.Default.GetString(bs);\n                await _hubContext.Clients.Client(id).SendAsync("onComplete", report);\n            }\n\n            // OAuth token\n            dynamic oauth = await OAuthController.GetInternalAsync();\n\n            ObjectsApi objectsApi = new ObjectsApi();\n            objectsApi.Configuration.AccessToken = oauth.access_token;\n\n            ApiResponse<dynamic> res = await objectsApi.getS3DownloadURLAsyncWithHttpInfo(\n                                        NickName.ToLower()+"-designautomation",\n                                        outputFileName, new Dictionary<string, object> {\n                                        { "minutesExpiration", 15.0 },\n                                        { "useCdn", true }\n                                        });\n            await _hubContext.Clients.Client(id).SendAsync("downloadResult", (string)(res.Data.url));\n            Console.WriteLine("Congrats!");\n        }\n        catch (Exception ex)\n        {\n            Console.WriteLine(ex.Message);\n        }\n\n        // ALWAYS return ok (200)\n        return Ok();\n    }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ClearAccount")),(0,o.kt)("p",null,"Last, but not least, to help you test, this api removes all appbundles and activities from your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    /// <summary>\n    /// Clear the accounts (for debugging purposes)\n    /// </summary>\n    [HttpDelete]\n    [Route("api/aps/designautomation/account")]\n    public async Task<IActionResult> ClearAccount()\n    {\n        // clear account\n        await _designAutomation.DeleteForgeAppAsync("me");\n        return Ok();\n    }\n')))}s.isMDXComponent=!0;const u={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following apis should be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DesignAutomation.js")," file before the last line ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports = router;")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"StartWorkitem")),(0,o.kt)("p",null,"This is where we actually start the Design Automation. This endpoint also uploads the input file to an OSS Bucket and define that the output should be saved at the same bucket. To help you identify the files, both input and output uses the same original file name, but with a suffix (input or output) plus a time stamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/// <summary>\n/// Direct To S3\n/// ref : https://aps.autodesk.com/blog/new-feature-support-direct-s3-migration-inputoutput-files-design-automation\n/// </summary>\n\nconst getObjectId = async (bucketKey, objectKey, req) => {\n  try {\n    let contentStream = _fs.createReadStream(req.file.path);\n\n    //uploadResources takes an Object or Object array of resource to uplaod with their parameters,\n    //we are just passing only one object.\n    let uploadResponse = await new ForgeAPI.ObjectsApi().uploadResources(\n      bucketKey,\n      [\n        //object\n        {\n          objectKey: objectKey,\n          data: contentStream,\n          length: req.file.size,\n        },\n      ],\n      {\n        useAcceleration: false, //Whether or not to generate an accelerated signed URL\n        minutesExpiration: 20, //The custom expiration time within the 1 to 60 minutes range, if not specified, default is 2 minutes\n        onUploadProgress: (data) => console.warn(data), // function (progressEvent) => {}\n      },\n      req.oauth_client,\n      req.oauth_token\n    );\n    //lets check for the first and only entry.\n    if (uploadResponse[0].hasOwnProperty("error") && uploadResponse[0].error) {\n      throw new Error(uploadResponse[0].completed.reason);\n    }\n    console.log(uploadResponse[0].completed.objectId);\n    return uploadResponse[0].completed.objectId;\n  } catch (ex) {\n    console.error("Failed to create ObjectID\\n", ex);\n    throw ex;\n  }\n};\n/// <summary>\n/// Start a new workitem\n/// </summary>\nrouter.post(\n  "/aps/designautomation/workitems",\n  multer({\n    dest: "uploads/",\n  }).single("inputFile"),\n  async (/*StartWorkitem*/ req, res) => {\n    const input = req.body;\n\n    // basic input validation\n    const workItemData = JSON.parse(input.data);\n    const widthParam = parseFloat(workItemData.width);\n    const heigthParam = parseFloat(workItemData.height);\n    const activityName = `${Utils.NickName}.${workItemData.activityName}`;\n    const browserConnectionId = workItemData.browserConnectionId;\n\n    // save the file on the server\n    const ContentRootPath = _path.resolve(_path.join(__dirname, "../.."));\n    const fileSavePath = _path.join(\n      ContentRootPath,\n      _path.basename(req.file.originalname)\n    );\n\n    // upload file to OSS Bucket\n    // 1. ensure bucket existis\n    const bucketKey = Utils.NickName.toLowerCase() + "-designautomation";\n    try {\n      let payload = new ForgeAPI.PostBucketsPayload();\n      payload.bucketKey = bucketKey;\n      payload.policyKey = "transient"; // expires in 24h\n      await new ForgeAPI.BucketsApi().createBucket(\n        payload,\n        {},\n        req.oauth_client,\n        req.oauth_token\n      );\n    } catch (ex) {\n      // in case bucket already exists\n    }\n    // 2. upload inputFile\n    const inputFileNameOSS = `${new Date()\n      .toISOString()\n      .replace(/[-T:\\.Z]/gm, "")\n      .substring(0, 14)}_input_${_path.basename(req.file.originalname)}`; // avoid overriding\n    // prepare workitem arguments\n    const bearerToken = ["Bearer", req.oauth_token.access_token].join(" ");\n    // 1. input file\n    const inputFileArgument = {\n      url: await getObjectId(bucketKey, inputFileNameOSS, req),\n      headers: { Authorization: bearerToken },\n    };\n    // 2. input json\n    const inputJson = {\n      width: widthParam,\n      height: heigthParam,\n    };\n    const inputJsonArgument = {\n      url:\n        "data:application/json, " +\n        JSON.stringify(inputJson).replace(/"/g, "\'"),\n    };\n    // 3. output file\n    const outputFileNameOSS = `${new Date()\n      .toISOString()\n      .replace(/[-T:\\.Z]/gm, "")\n      .substring(0, 14)}_output_${_path.basename(req.file.originalname)}`; // avoid overriding\n    const outputFileArgument = {\n      url: await getObjectId(bucketKey, outputFileNameOSS, req),\n      verb: dav3.Verb.put,\n      headers: { Authorization: bearerToken },\n    };\n\n    // prepare & submit workitem\n    // the callback contains the connectionId (used to identify the client) and the outputFileName of this workitem\n    const callbackUrl = `${config.credentials.webhook_url}/api/aps/callback/designautomation?id=${browserConnectionId}&outputFileName=${outputFileNameOSS}&inputFileName=${inputFileNameOSS}`;\n    const workItemSpec = {\n      activityId: activityName,\n      arguments: {\n        inputFile: inputFileArgument,\n        inputJson: inputJsonArgument,\n        outputFile: outputFileArgument,\n        onComplete: {\n          verb: dav3.Verb.post,\n          url: callbackUrl,\n        },\n      },\n    };\n    let workItemStatus = null;\n    try {\n      const api = await Utils.dav3API(req.oauth_token);\n      workItemStatus = await api.createWorkItem(workItemSpec);\n    } catch (ex) {\n      console.error(ex);\n      return res.status(500).json({\n        diagnostic: "Failed to create a workitem",\n      });\n    }\n    res.status(200).json({\n      workItemId: workItemStatus.id,\n    });\n  }\n);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OnCallback")),(0,o.kt)("p",null,"When the workitem is done, Design Automation will callback our app (using the ngrok forwarding URL). This function will handle it and push a notification to the client (using socketIO)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/// <summary>\n/// Callback from Design Automation Workitem (onProgress or onComplete)\n/// </summary>\nrouter.post(\n  "/aps/callback/designautomation",\n  async (/*OnCallback*/ req, res) => {\n    // your webhook should return immediately! we could use Hangfire to schedule a job instead\n    // ALWAYS return ok (200)\n    res.status(200).end();\n\n    try {\n      const socketIO = require("../server").io;\n\n      // your webhook should return immediately! we can use Hangfire to schedule a job\n      const bodyJson = req.body;\n      socketIO.to(req.query.id).emit("onComplete", bodyJson);\n\n      http.get(bodyJson.reportUrl, (response) => {\n        //socketIO.to(req.query.id).emit(\'onComplete\', response);\n        response.setEncoding("utf8");\n        let rawData = "";\n        response.on("data", (chunk) => {\n          rawData += chunk;\n        });\n        response.on("end", () => {\n          socketIO.to(req.query.id).emit("onComplete", rawData);\n        });\n      });\n\n      const objectsApi = new ForgeAPI.ObjectsApi();\n      const bucketKey = Utils.NickName.toLowerCase() + "-designautomation";\n      if (bodyJson.status === "success") {\n        try {\n          //create a S3 presigned URL and send to client\n          let response = await objectsApi.getS3DownloadURL(\n            bucketKey,\n            req.query.outputFileName,\n            { useAcceleration: false, minutesExpiration: 15 },\n            req.oauth_client,\n            req.oauth_token\n          );\n          socketIO.to(req.query.id).emit("downloadResult", response.body.url);\n        } catch (ex) {\n          console.error(ex);\n          socketIO\n            .to(req.query.id)\n            .emit(\n              "onComplete",\n              "Failed to create presigned URL for outputFile.\\nYour outputFile is available in your OSS bucket."\n            );\n        }\n      }\n\n      // delete the input file (we do not need it anymore)\n      try {\n        await objectsApi.deleteObject(\n          bucketKey,\n          req.query.inputFileName,\n          req.oauth_client,\n          req.oauth_token\n        );\n      } catch (ex) {\n        console.error(ex);\n      }\n    } catch (ex) {\n      console.error(ex);\n    }\n  }\n);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ClearAccount")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/// <summary>\n/// Clear the accounts (for debugging purpouses)\n/// </summary>\nrouter.delete(\n  "/aps/designautomation/account",\n  async (/*ClearAccount*/ req, res) => {\n    let api = await Utils.dav3API(req.oauth_token);\n    // clear account\n    await api.deleteForgeApp("me");\n    res.status(200).end();\n  }\n);\n')))}l.isMDXComponent=!0;var c=n(4562);const p={toc:[]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The .NET Core ASP.NET project that we created on Visual Studio is empty, therefore when we start it, nothing runs. As our forgeSample project now contains a starting page at wwwroot/index.html so we should see its contents upon launch."),(0,o.kt)("p",null,'Visual Studio should list all browsers available in the system for you pick one to start your project. Just select one and click on the "play" icon. The browser should open with your start page.'),(0,o.kt)("img",{src:c.Z,style:{width:600}}))}d.isMDXComponent=!0;var m=n(6943);const h={toc:[]};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Go to the Debug menu and select Start debugging. The "Debug Console" tab should appear on the bottom, as shown below'),(0,o.kt)("img",{src:m.Z,style:{width:600}}),(0,o.kt)("p",null,"Open your browser and go to http://localhost:8080."))}k.isMDXComponent=!0;var g=n(3913),b=n(9422);const y={},w="Execute Workitem",f={unversionedId:"tutorials/design-automation/execute-workitem",id:"tutorials/design-automation/execute-workitem",title:"Execute Workitem",description:"A job that executes a specified Activity, using specified input files and generating appropriate output files.",source:"@site/docs/03-tutorials/04-design-automation/04-execute-workitem.mdx",sourceDirName:"03-tutorials/04-design-automation",slug:"/tutorials/design-automation/execute-workitem",permalink:"/tutorials/design-automation/execute-workitem",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/04-design-automation/04-execute-workitem.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Define Activity",permalink:"/tutorials/design-automation/define-activity"},next:{title:"Learn More",permalink:"/learn-more/"}},v={},A=[{value:"Run &amp; Debug",id:"run--debug",level:2},{value:"Using the sample",id:"using-the-sample",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],S={toc:A};function N(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"execute-workitem"},"Execute Workitem"),(0,o.kt)("p",null,"A job that executes a specified Activity, using specified input files and generating appropriate output files."),(0,o.kt)("p",null,"The relationship between an Activity and WorkItem can be thought of as a \u201cfunction definition\u201d and \u201cfunction call\u201d, respectively. The Activity specifies the AppBundle(s) to use, which in turn specify the Engine to use. The Workitem is then called to execute those."),(0,o.kt)("p",null,"In this tutorial sample, the workitem specifies the input file URL, the input JSON data with the new parameter values, and the destination URL for the output file. This sample will upload the input file to a OSS bucket before starting the workitem."),(0,o.kt)(i.Z,{NodeJsVsCode:l,DotNetVsCode:s,DotNetVs2022:s,mdxType:"EnvTabs"}),(0,o.kt)("p",null,"Everything ready!"),(0,o.kt)("h2",{id:"run--debug"},"Run & Debug"),(0,o.kt)("p",null,"Now that your app is ready, it's time to run it. This is where we can test and check for possible errors (via debugging)."),(0,o.kt)("h2",{id:"using-the-sample"},"Using the sample"),(0,o.kt)("p",null,"At the top-roght, click on ",(0,o.kt)("strong",{parentName:"p"},"Configure")," to define AppBundle & Activity. This only need to be done once. Specify the new ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," on the left panel, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"input file")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Start workitem"),". The right panel should show the results."),(0,o.kt)("p",null,"You can find ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/autodesk-platform-services/aps-design-automation-dotnet/tree/master/sample%20files"},"sample files here"),"."),(0,o.kt)("p",null,"!> If the plugin code changes, then you need to upload a new AppBundle and increase the version (e.g. v1 to v2). This sample will create a new version every time a new AppBundle is uploaded."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Both input and output files are saved in OSS Buckets, you can use ",(0,o.kt)("a",{parentName:"p",href:"../simple-viewer/"},"View Models")," tutorial to view them.")),(0,o.kt)(g.Z,{src:b.Z,mdxType:"ResponsiveVideo"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. The results panel doesn't show the entire information")),(0,o.kt)("p",null,"Make sure the ",(0,o.kt)("strong",{parentName:"p"},"ngrok")," is running and have not expired. Make sure the ngrok address is correctly specified at the environment variable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Workitem execute, but result is not as expected")),(0,o.kt)("p",null,"Consider use the ",(0,o.kt)("strong",{parentName:"p"},"Clear Account")," button. This removes all AppBundles & Activities on your account. Then define them again."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Cannot see my AppBundle at the Configuration form")),(0,o.kt)("p",null,"The ZIP bundles are copied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwwroot/bundles")," after you Build the respective plugin. Make sure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Post-build")," event is properly defined and executed after build."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Ensuring the correct DLL was uploaded")),(0,o.kt)("p",null,"A easy trick to ensure the correct DLL was uploaded to Design Automation is to check it's date. ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/1600990"},"This StackOverflow answer")," shows how to get the Linker Date (i.e. when the DLL was compiled), with that you can show it on the begining of your code. Note the dates are on the server timezone."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Plugin is written in ",(0,o.kt)("inlineCode",{parentName:"p"},"C#")," irrespective of server language.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'LogTrace("DLL {0} compiled on {1}",\n    System.IO.Path.GetFileName(System.Reflection.Assembly.GetExecutingAssembly().Location),\n    GetLinkerTime(System.Reflection.Assembly.GetExecutingAssembly()));\n')),(0,o.kt)("p",null,"Ready? Let's run it!"),(0,o.kt)(i.Z,{NodeJsVsCode:k,DotNetVsCode:d,DotNetVs2022:d,mdxType:"EnvTabs"}))}N.isMDXComponent=!0},4562:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vs2022-basicui-run-cfad864d4a793a472ef57bedae7e769d.webp"},6943:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-nodejs-basicui-run-7f1f37d9119d5d129da5ea0e192a77a5.webp"},9422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/modify-your-models-4f9f7bd794c480da8b00321373299bb6.mp4"}}]);