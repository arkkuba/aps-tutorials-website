"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[699],{425:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),i=n(6010),r=n(1048),s=n(3609),l=n(1943),u=n(2957);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:r,values:d,groupId:m,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??k.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),g=(0,s.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===r?r:r??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:f}=(0,l.U)(),[v,A]=(0,a.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=m){const e=w[m];null!=e&&e!==v&&b.some((t=>t.value===e))&&A(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),o=b[n].value;o!==v&&(N(t),A(o),null!=m&&f(m,String(o)))},x=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},b.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:C},r,{className:(0,i.Z)("tabs__item",p,r?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,r.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(4259),i=n(425);function r(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:r}=e;return o.createElement(a.Z,{groupId:"development-environment"},o.createElement(i.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},o.createElement(t,null)),o.createElement(i.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},o.createElement(n,null)),o.createElement(i.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},o.createElement(r,null)))}},3913:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7294),a=n(2004);const i="wrapper_emgM",r="player_m1gG";function s(e){let{src:t}=e;return o.createElement("div",{className:i},o.createElement(a.Z,{className:r,url:t,playing:!0,loop:!0,width:"100%",height:"100%"}))}},3864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>w,default:()=>N,frontMatter:()=>y,metadata:()=>f,toc:()=>A});var o=n(7462),a=(n(7294),n(4137)),i=n(415);const r={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following apis should be added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DesignAutomation.js")," file before the last line ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports = router;")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"StartWorkitem")),(0,a.kt)("p",null,"This is where we actually start the Design Automation. This endpoint also uploads the input file to an OSS Bucket and define that the output should be saved at the same bucket. To help you identify the files, both input and output uses the same original file name, but with a suffix (input or output) plus a time stamp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"/// <summary>\n/// Direct To S3\n/// </summary>\nconst prepareInputUrl = async (bucketKey, objectKey, opts, oAuthClient, oAuthToken) => {\n    let objectS3Download = await new ForgeAPI.ObjectsApi().getS3DownloadURL(bucketKey, objectKey,\n        opts,\n        oAuthClient, oAuthToken);\n    return (objectS3Download.body.url);\n\n}\nconst prepareOutputUrl = async (bucketKey, objectKey, opts, oAuthClient, oAuthToken) => {\n\n    let objectS3Upload = await new ForgeAPI.ObjectsApi().getS3UploadURL(bucketKey, objectKey,\n        opts,\n        oAuthClient, oAuthToken);\n    return ({\n        outputUrl: objectS3Upload.body.urls[0],\n        uploadKey: objectS3Upload.body.uploadKey\n    });\n}\n\n/// <summary>\n/// Start a new workitem\n/// </summary>\nrouter.post('/forge/designautomation/workitems', multer({\n    dest: 'uploads/'\n}).single('inputFile'), async /*StartWorkitem*/ (req, res) => {\n    const input = req.body;\n\n    // basic input validation\n    const workItemData = JSON.parse(input.data);\n    const widthParam = parseFloat(workItemData.width);\n    const heigthParam = parseFloat(workItemData.height);\n    const activityName = `${Utils.NickName}.${workItemData.activityName}`;\n    const browerConnectionId = workItemData.browerConnectionId;\n\n    // save the file on the server\n    const ContentRootPath = _path.resolve(_path.join(__dirname, '../..'));\n    const fileSavePath = _path.join(ContentRootPath, _path.basename(req.file.originalname));\n    //const stream = _fs.createReasStream(fileSavePath, FileMode.Create)) await input.inputFile.CopyToAsync(stream);\n\n    // upload file to OSS Bucket\n    // 1. ensure bucket existis\n    const bucketKey = Utils.NickName.toLowerCase() + '-designautomation';\n    try {\n        let payload = new ForgeAPI.PostBucketsPayload();\n        payload.bucketKey = bucketKey;\n        payload.policyKey = 'transient'; // expires in 24h\n        await new ForgeAPI.BucketsApi().createBucket(payload, {}, req.oauth_client, req.oauth_token);\n    } catch (ex) {\n        // in case bucket already exists\n    }\n    // 2. upload inputFile\n    const inputFileNameOSS = `${new Date().toISOString().replace(/[-T:\\.Z]/gm, '').substring(0, 14)}_input_${_path.basename(req.file.originalname)}`; // avoid overriding\n    try {\n        let contentStream = _fs.createReadStream(req.file.path);\n        await new ForgeAPI.ObjectsApi().uploadResources(\n            bucketKey,\n            {\n                objectKey: inputFileNameOSS,\n                data: contentStream,\n                length: req.file.size\n            },\n            {\n                useAcceleration: false,\n                minutesExpiration: 20,\n                onUploadProgress: (data) => console.warn(data)\n            },\n            req.oauth_client, req.oauth_token,\n        );\n    } catch (ex) {\n        console.error(ex);\n        return (res.status(500).json({\n            diagnostic: 'Failed to upload file for workitem'\n        }));\n    }\n\n    // prepare workitem arguments\n    // 1. input file\n    const inputFileArgument = {\n        url: await prepareInputUrl(bucketKey, inputFileNameOSS,\n            {\n                useAcceleration: false,\n                minutesExpiration: 60/*intentionaly kept max duration, this url will be sent to DA service*/\n            },\n            req.oauth_client, req.oauth_token)\n    };\n    // 2. input json\n    const inputJson = {\n        width: widthParam,\n        height: heigthParam\n    };\n    const inputJsonArgument = {\n        url: \"data:application/json, \" + JSON.stringify(inputJson).replace(/\"/g, \"'\")\n    };\n    // 3. output file\n\n    // Better to use a presigned url to avoid the token to expire\n    const outputFileNameOSS = `${new Date().toISOString().replace(/[-T:\\.Z]/gm, '').substring(0, 14)}_output_${_path.basename(req.file.originalname)}`; // avoid overriding\n    let signedUrl = null;\n    let s3UploadObject = null;\n    try {\n        // write signed resource requires the object to already exist :(\n        s3UploadObject = await prepareOutputUrl(bucketKey, outputFileNameOSS,\n            {\n                useAcceleration: false,\n                minutesExpiration: 60/*intentionaly kept max duration, this url will be sent to DA service*/\n            },\n            req.oauth_client, req.oauth_token);\n        signedUrl = s3UploadObject.outputUrl;\n    } catch (ex) {\n        console.error(ex);\n        return (res.status(500).json({\n            diagnostic: 'Failed to create a signed URL for output file'\n        }));\n    }\n    const outputFileArgument = {\n        url: signedUrl,\n        verb: dav3.Verb.put,\n    };\n\n    // prepare & submit workitem\n    // the callback contains the connectionId (used to identify the client) and the outputFileName of this workitem\n    const callbackUrl = `${config.credentials.webhook_url}/api/forge/callback/designautomation?id=${browerConnectionId}&outputFileName=${outputFileNameOSS}&inputFileName=${inputFileNameOSS}&uploadKey=${s3UploadObject.uploadKey}`;\n    const workItemSpec = {\n        activityId: activityName,\n        arguments: {\n            inputFile: inputFileArgument,\n            inputJson: inputJsonArgument,\n            outputFile: outputFileArgument,\n            onComplete: {\n                verb: dav3.Verb.post,\n                url: callbackUrl\n            }\n        }\n    };\n    let workItemStatus = null;\n    try {\n        const api = await Utils.dav3API(req.oauth_token);\n        workItemStatus = await api.createWorkItem(workItemSpec);\n    } catch (ex) {\n        console.error(ex);\n        return (res.status(500).json({\n            diagnostic: 'Failed to create a workitem'\n        }));\n    }\n    res.status(200).json({\n        workItemId: workItemStatus.id\n    });\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OnCallback")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n        /// Callback from Design Automation Workitem (onProgress or onComplete)\n        /// </summary>\n        [HttpPost]\n        [Route("/api/aps/callback/designautomation")]\n        public async Task<IActionResult> OnCallback(string id, string outputFileName, [FromBody] dynamic body)\n        {\n            try\n            {\n                // your webhook should return immediately! we can use Hangfire to schedule a job\n                JObject bodyJson = JObject.Parse((string)body.ToString());\n                await _hubContext.Clients.Client(id).SendAsync("onComplete", bodyJson.ToString());\n\n                using (var httpClient = new HttpClient())\n                {\n                    byte[] bs = await httpClient.GetByteArrayAsync(bodyJson["reportUrl"].Value<string>());\n                    string report = System.Text.Encoding.Default.GetString(bs);\n                    await _hubContext.Clients.Client(id).SendAsync("onComplete", report);\n                }\n\n                // OAuth token\n                dynamic oauth = await OAuthController.GetInternalAsync();\n\n                ObjectsApi objectsApi = new ObjectsApi();\n                objectsApi.Configuration.AccessToken = oauth.access_token;\n\n                //finalize upload in the callback.\n                ApiResponse<dynamic> res = await objectsApi.completeS3UploadAsyncWithHttpInfo(NickName.ToLower() + "-designautomation", outputFileName, S3UploadPayload, new Dictionary<string, object> {\n                { "minutesExpiration", 2.0 },\n                { "useCdn", true }\n                });\n                HttpErrorHandler(res, $"Failed to complete S3 posting");\n\n                res = await objectsApi.getS3DownloadURLAsyncWithHttpInfo(NickName.ToLower() + "-designautomation", outputFileName, new Dictionary<string, object> {\n                { "minutesExpiration", 15.0 },\n                { "useCdn", true }\n                });\n                await _hubContext.Clients.Client(id).SendAsync("downloadResult", (string)(res.Data.url));\n                Console.WriteLine("Congrats!");\n            }\n            catch (Exception ex)\n            {\n                Console.WriteLine(ex.Message);\n            }\n\n            // ALWAYS return ok (200)\n            return Ok();\n        }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ClearAccount")),(0,a.kt)("p",null,"Last, but not least, to help you test, this api removes all appbundles and activities from your account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},' /// <summary>\n        /// Clear the accounts (for debugging purposes)\n        /// </summary>\n        [HttpDelete]\n        [Route("api/aps/designautomation/account")]\n        public async Task<IActionResult> ClearAccount()\n        {\n            // clear account\n            await _designAutomation.DeleteForgeAppAsync("me");\n            return Ok();\n        }\n')))}s.isMDXComponent=!0;const l={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following apis should be added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DesignAutomation.js")," file before the last line ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports = router;")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"StartWorkitem")),(0,a.kt)("p",null,"This is where we actually start the Design Automation. This endpoint also uploads the input file to an OSS Bucket and define that the output should be saved at the same bucket. To help you identify the files, both input and output uses the same original file name, but with a suffix (input or output) plus a time stamp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/// <summary>\n/// Direct To S3\n/// </summary>\nconst prepareInputUrl = async (\n  bucketKey,\n  objectKey,\n  opts,\n  oAuthClient,\n  oAuthToken\n) => {\n  let objectS3Download = await new ForgeAPI.ObjectsApi().getS3DownloadURL(\n    bucketKey,\n    objectKey,\n    opts,\n    oAuthClient,\n    oAuthToken\n  );\n  return objectS3Download.body.url;\n};\nconst prepareOutputUrl = async (\n  bucketKey,\n  objectKey,\n  opts,\n  oAuthClient,\n  oAuthToken\n) => {\n  let objectS3Upload = await new ForgeAPI.ObjectsApi().getS3UploadURL(\n    bucketKey,\n    objectKey,\n    opts,\n    oAuthClient,\n    oAuthToken\n  );\n  return {\n    outputUrl: objectS3Upload.body.urls[0],\n    uploadKey: objectS3Upload.body.uploadKey,\n  };\n};\n/// <summary>\n/// Start a new workitem\n/// </summary>\nrouter.post(\n  "/aps/designautomation/workitems",\n  multer({\n    dest: "uploads/",\n  }).single("inputFile"),\n  async (/*StartWorkitem*/ req, res) => {\n    const input = req.body;\n\n    // basic input validation\n    const workItemData = JSON.parse(input.data);\n    const widthParam = parseFloat(workItemData.width);\n    const heigthParam = parseFloat(workItemData.height);\n    const activityName = `${Utils.NickName}.${workItemData.activityName}`;\n    const browerConnectionId = workItemData.browerConnectionId;\n\n    // save the file on the server\n    const ContentRootPath = _path.resolve(_path.join(__dirname, "../.."));\n    const fileSavePath = _path.join(\n      ContentRootPath,\n      _path.basename(req.file.originalname)\n    );\n    //const stream = _fs.createReasStream(fileSavePath, FileMode.Create)) await input.inputFile.CopyToAsync(stream);\n\n    // upload file to OSS Bucket\n    // 1. ensure bucket existis\n    const bucketKey = Utils.NickName.toLowerCase() + "-designautomation";\n    try {\n      let payload = new ForgeAPI.PostBucketsPayload();\n      payload.bucketKey = bucketKey;\n      payload.policyKey = "transient"; // expires in 24h\n      await new ForgeAPI.BucketsApi().createBucket(\n        payload,\n        {},\n        req.oauth_client,\n        req.oauth_token\n      );\n    } catch (ex) {\n      // in case bucket already exists\n    }\n    // 2. upload inputFile\n    const inputFileNameOSS = `${new Date()\n      .toISOString()\n      .replace(/[-T:\\.Z]/gm, "")\n      .substring(0, 14)}_input_${_path.basename(req.file.originalname)}`; // avoid overriding\n    try {\n      let contentStream = _fs.createReadStream(req.file.path);\n      await new ForgeAPI.ObjectsApi().uploadResources(\n        bucketKey,\n        {\n          objectKey: inputFileNameOSS,\n          data: contentStream,\n          length: req.file.size,\n        },\n        {\n          useAcceleration: false,\n          minutesExpiration: 20,\n          onUploadProgress: (data) => console.warn(data),\n        },\n        req.oauth_client,\n        req.oauth_token\n      );\n    } catch (ex) {\n      console.error(ex);\n      return res.status(500).json({\n        diagnostic: "Failed to upload file for workitem",\n      });\n    }\n\n    // prepare workitem arguments\n    // 1. input file\n    const inputFileArgument = {\n      url: await prepareInputUrl(\n        bucketKey,\n        inputFileNameOSS,\n        {\n          useAcceleration: false,\n          minutesExpiration: 60 /*intentionaly kept max duration, this url will be sent to DA service*/,\n        },\n        req.oauth_client,\n        req.oauth_token\n      ),\n    };\n    // 2. input json\n    const inputJson = {\n      width: widthParam,\n      height: heigthParam,\n    };\n    const inputJsonArgument = {\n      url:\n        "data:application/json, " +\n        JSON.stringify(inputJson).replace(/"/g, "\'"),\n    };\n    // 3. output file\n    const outputFileNameOSS = `${new Date()\n      .toISOString()\n      .replace(/[-T:\\.Z]/gm, "")\n      .substring(0, 14)}_output_${_path.basename(req.file.originalname)}`; // avoid overriding\n    let signedUrl = null;\n    let s3UploadObject = null;\n    try {\n      // write signed resource requires the object to already exist :(\n      s3UploadObject = await prepareOutputUrl(\n        bucketKey,\n        outputFileNameOSS,\n        {\n          useAcceleration: false,\n          minutesExpiration: 60 /*intentionaly kept max duration, this url will be sent to DA service*/,\n        },\n        req.oauth_client,\n        req.oauth_token\n      );\n      signedUrl = s3UploadObject.outputUrl;\n    } catch (ex) {\n      console.error(ex);\n      return res.status(500).json({\n        diagnostic: "Failed to create a signed URL for output file",\n      });\n    }\n    const outputFileArgument = {\n      url: signedUrl,\n      verb: dav3.Verb.put,\n    };\n\n    // prepare & submit workitem\n    // the callback contains the connectionId (used to identify the client) and the outputFileName of this workitem\n    const callbackUrl = `${config.credentials.webhook_url}/api/aps/callback/designautomation?id=${browerConnectionId}&outputFileName=${outputFileNameOSS}&inputFileName=${inputFileNameOSS}&uploadKey=${s3UploadObject.uploadKey}`;\n    const workItemSpec = {\n      activityId: activityName,\n      arguments: {\n        inputFile: inputFileArgument,\n        inputJson: inputJsonArgument,\n        outputFile: outputFileArgument,\n        onComplete: {\n          verb: dav3.Verb.post,\n          url: callbackUrl,\n        },\n      },\n    };\n    let workItemStatus = null;\n    try {\n      const api = await Utils.dav3API(req.oauth_token);\n      workItemStatus = await api.createWorkItem(workItemSpec);\n    } catch (ex) {\n      console.error(ex);\n      return res.status(500).json({\n        diagnostic: "Failed to create a workitem",\n      });\n    }\n    res.status(200).json({\n      workItemId: workItemStatus.id,\n    });\n  }\n);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OnCallback")),(0,a.kt)("p",null,"When the workitem is done, Design Automation will callback our app (using the ngrok forwarding URL). This function will handle it and push a notification to the client (using socketIO)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/// <summary>\n/// Callback from Design Automation Workitem (onProgress or onComplete)\n/// </summary>\nrouter.post(\n  "/aps/callback/designautomation",\n  async (/*OnCallback*/ req, res) => {\n    // your webhook should return immediately! we could use Hangfire to schedule a job instead\n    // ALWAYS return ok (200)\n    res.status(200).end();\n\n    try {\n      const socketIO = require("../server").io;\n\n      // your webhook should return immediately! we can use Hangfire to schedule a job\n      const bodyJson = req.body;\n      socketIO.to(req.query.id).emit("onComplete", bodyJson);\n\n      http.get(bodyJson.reportUrl, (response) => {\n        //socketIO.to(req.query.id).emit(\'onComplete\', response);\n        response.setEncoding("utf8");\n        let rawData = "";\n        response.on("data", (chunk) => {\n          rawData += chunk;\n        });\n        response.on("end", () => {\n          socketIO.to(req.query.id).emit("onComplete", rawData);\n        });\n      });\n      //socketIO.to(req.query.id).emit(\'downloadReport\', bodyJson.reportUrl);\n\n      const objectsApi = new ForgeAPI.ObjectsApi();\n      const bucketKey = Utils.NickName.toLowerCase() + "-designautomation";\n      if (bodyJson.status === "success") {\n        try {\n          //Complete the upload to S3\n          await objectsApi.completeS3Upload(\n            bucketKey,\n            req.query.outputFileName,\n            { uploadKey: req.query.uploadKey },\n            { useAcceleration: false, minutesExpiration: 2 },\n            req.oauth_client,\n            req.oauth_token\n          );\n          //create a S3 presigned URL and send to client\n          let response = await objectsApi.getS3DownloadURL(\n            bucketKey,\n            req.query.outputFileName,\n            { useAcceleration: false, minutesExpiration: 15 },\n            req.oauth_client,\n            req.oauth_token\n          );\n          socketIO.to(req.query.id).emit("downloadResult", response.body.url);\n        } catch (ex) {\n          console.error(ex);\n          socketIO\n            .to(req.query.id)\n            .emit(\n              "onComplete",\n              "Failed to create presigned URL for outputFile.\\nYour outputFile is available in your OSS bucket."\n            );\n        }\n      }\n\n      // delete the input file (we do not need it anymore)\n      try {\n        /*await*/\n        objectsApi.deleteObject(\n          bucketKey,\n          req.query.inputFileName,\n          req.oauth_client,\n          req.oauth_token\n        );\n      } catch (ex) {\n        console.error(ex);\n      }\n    } catch (ex) {\n      console.error(ex);\n    }\n  }\n);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ClearAccount")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/// <summary>\n/// Clear the accounts (for debugging purpouses)\n/// </summary>\nrouter.delete(\n  "/aps/designautomation/account",\n  async (/*ClearAccount*/ req, res) => {\n    let api = await Utils.dav3API(req.oauth_token);\n    // clear account\n    await api.deleteForgeApp("me");\n    res.status(200).end();\n  }\n);\n')))}u.isMDXComponent=!0;var c=n(7747);const p={toc:[]};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The .NET Core ASP.NET project that we created on Visual Studio is empty, therefore when we start it, nothing runs. As our forgeSample project now contains a starting page at wwwroot/index.html so we should see its contents upon launch."),(0,a.kt)("p",null,'Visual Studio should list all browsers available in the system for you pick one to start your project. Just select one and click on the "play" icon. The browser should open with your start page.'),(0,a.kt)("img",{src:c.Z,style:{width:600}}))}d.isMDXComponent=!0;var m=n(4621);const h={toc:[]};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Go to the Debug menu and select Start debugging. The "Debug Console" tab should appear on the bottom, as shown below'),(0,a.kt)("img",{src:m.Z,style:{width:600}}),(0,a.kt)("p",null,"Open your browser and go to http://localhost:8080."))}k.isMDXComponent=!0;var b=n(3913),g=n(9422);const y={title:"Execute Workitem"},w=void 0,f={unversionedId:"tutorials/design-automation/execute-workitem",id:"tutorials/design-automation/execute-workitem",title:"Execute Workitem",description:"A job that executes a specified Activity, using specified input files and generating appropriate output files.",source:"@site/docs/tutorials/04-design-automation/04-execute-workitem.mdx",sourceDirName:"tutorials/04-design-automation",slug:"/tutorials/design-automation/execute-workitem",permalink:"/tutorials/design-automation/execute-workitem",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/04-design-automation/04-execute-workitem.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Execute Workitem"},sidebar:"tutorialSidebar",previous:{title:"Define Activity",permalink:"/tutorials/design-automation/define-activity"},next:{title:"Learn More",permalink:"/learn-more"}},v={},A=[{value:"Run &amp; Debug",id:"run--debug",level:2},{value:"Using the sample",id:"using-the-sample",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],S={toc:A};function N(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A job that executes a specified Activity, using specified input files and generating appropriate output files."),(0,a.kt)("p",null,"The relationship between an Activity and WorkItem can be thought of as a \u201cfunction definition\u201d and \u201cfunction call\u201d, respectively. The Activity specifies the AppBundle(s) to use, which in turn specify the Engine to use. The Workitem is then called to execute those."),(0,a.kt)("p",null,"In this tutorial sample, the workitem specifies the input file URL, the input JSON data with the new parameter values, and the destination URL for the output file. This sample will upload the input file to a OSS bucket before starting the workitem."),(0,a.kt)(i.Z,{NodeJsVsCode:u,DotNetVsCode:s,DotNetVs2022:s,mdxType:"EnvTabs"}),(0,a.kt)("p",null,"Everything ready!"),(0,a.kt)("h2",{id:"run--debug"},"Run & Debug"),(0,a.kt)("p",null,"Now that your app is ready, it's time to run it. This is where we can test and check for possible errors (via debugging)."),(0,a.kt)("h2",{id:"using-the-sample"},"Using the sample"),(0,a.kt)("p",null,"At the top-roght, click on ",(0,a.kt)("strong",{parentName:"p"},"Configure")," to define AppBundle & Activity. This only need to be done once. Specify the new ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," on the left panel, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"input file")," and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Start workitem"),". The right panel should show the results."),(0,a.kt)("p",null,"You can find ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/autodesk-platform-services/aps-design-automation-dotnet/tree/master/sample%20files"},"sample files here"),"."),(0,a.kt)("p",null,"!> If the plugin code changes, then you need to upload a new AppBundle and increase the version (e.g. v1 to v2). This sample will create a new version every time a new AppBundle is uploaded."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Both input and output files are saved in OSS Buckets, you can use ",(0,a.kt)("a",{parentName:"p",href:"../simple-viewer/"},"View Models")," tutorial to view them.")),(0,a.kt)(b.Z,{src:g.Z,mdxType:"ResponsiveVideo"}),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. The results panel doesn't show the entire information")),(0,a.kt)("p",null,"Make sure the ",(0,a.kt)("strong",{parentName:"p"},"ngrok")," is running and have not expired. Make sure the ngrok address is correctly specified at the environment variable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Workitem execute, but result is not as expected")),(0,a.kt)("p",null,"Consider use the ",(0,a.kt)("strong",{parentName:"p"},"Clear Account")," button. This removes all AppBundles & Activities on your account. Then define them again."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Cannot see my AppBundle at the Configuration form")),(0,a.kt)("p",null,"The ZIP bundles are copied to the ",(0,a.kt)("inlineCode",{parentName:"p"},"wwwroot/bundles")," after you Build the respective plugin. Make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"Post-build")," event is properly defined and executed after build."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Ensuring the correct DLL was uploaded")),(0,a.kt)("p",null,"A easy trick to ensure the correct DLL was uploaded to Design Automation is to check it's date. ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/1600990"},"This StackOverflow answer")," shows how to get the Linker Date (i.e. when the DLL was compiled), with that you can show it on the begining of your code. Note the dates are on the server timezone."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Plugin is written in ",(0,a.kt)("inlineCode",{parentName:"p"},"C#")," irrespective of server language.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'LogTrace("DLL {0} compiled on {1}",\n    System.IO.Path.GetFileName(System.Reflection.Assembly.GetExecutingAssembly().Location),\n    GetLinkerTime(System.Reflection.Assembly.GetExecutingAssembly()));\n')),(0,a.kt)("p",null,"Ready? Let's run it!"),(0,a.kt)(i.Z,{NodeJsVsCode:k,DotNetVsCode:d,DotNetVs2022:d,mdxType:"EnvTabs"}))}N.isMDXComponent=!0},7747:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vs2022-basicui-run-cfad864d4a793a472ef57bedae7e769d.webp"},4621:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-nodejs-basicui-run-7f1f37d9119d5d129da5ea0e192a77a5.webp"},9422:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/medias/modify-your-models-4f9f7bd794c480da8b00321373299bb6.mp4"}}]);