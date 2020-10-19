//(v1.0) Simply copy all the code found in the line number 3

console.clear(),selfBotVars={},function(){let e;if(!(e=window.open("","",`top=0,left=${screen.width-800},width=850,height=${screen.height}`))||!e.document||!e.document.write)return console.error("Popup blocked! Please allow popups and try again.");e.document.write('<!DOCTYPE html>\n<html>\n<head>\n<title>Discord SelfBot</title>\n<style type="text/css">\n    body{\n        background-color:#36393f;\n        color:#dcddde;\n        font-family:sans-serif;\n        font-size: 16pt;\n    }\n    .commonInputsContainer{\n        width: 100%;\n        display: flex;\n    }\n    .half{\n        width: 50%;\n    }\n    a:visited, a{\n        color: white;\n    }\n    .featureContainer{\n        border-radius: 8px;\n        border: 3px solid white;\n        padding: 30px;\n        margin-top: 5px;\n    }\n    input[type=checkbox]:checked:has(> .featureContainer){\n        border: 3px solid #7289da;\n    }\n    #start{\n        display: block;\n        margin-right: auto;\n        margin-left: auto;\n        margin-top: 100px;\n        padding: 10px;\n        border-radius: 10px;\n        background: #009688;\n    }\n    button{\n        border: none;\n        background: #7289da;\n        color: white;\n    }\n    select{\n        background: hsl(220 8% 40% / 1);\n        color: inherit;\n        border: 0;\n        font-size: 16pt;\n    }\n</style>\n</head>\n<body>\n<h1>Required info:</h1>\n<div class="commonInputsContainer">\n    <div class="half">\n        Token (<a href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/authToken.md">?</a>)<br>\n        <input type="password" placeholder="Token" id="authToken">\n        <button id="getToken">Fill</button><br>\n    </div>\n    <div class="half">\n        Server and Channel IDs (<a href="https://github.com/victornpb/deleteDiscordMessages/blob/master/help/channelId.md">?</a>)<br>\n        <input id="guildId" type="text" placeholder="Guild ID" priv><br>\n        <input id="channelId" type="text" placeholder="Channel ID" priv>\n        <button id="getGuildAndChannel">Fill</button><br>\n    </div>\n</div>\n<h2>Features:</h2>\n<div class="featureContainer">\n    <input type="checkbox" id="messageDelay"> Send <input type="text" id="msgContent" placeholder="some text"> every <input type="number" id="delay" placeholder="number of"> seconds.<br>\n    <span id="ticking" style="font-size: 12pt;"></span>\n</div>\n<div class="featureContainer">\n    <input type="checkbox" id="contains"> If message\'s <select id="containsSelect"><option value="a">content</option><option value="b">author ID</option></select> contains <input type="text" id="query" placeholder="something"> then <select id="containsReactOrSelect"><option value="a">react</option><option value="b">send</option><option value="c">delete it</option> <input type="text" id="reactOrSend" placeholder="some suff"></select>.<br>\n</div>\n<div class="featureContainer">\n    <input type="checkbox" id="script"> Automatically type the following text where messages are separated with an enter. (<a href="">?</a>) <br>\n    <textarea style="resize: vertical;width: 100%;" placeholder="Enter the text here (Bee movie for example)"></textarea>\n</div>\n<div class="featureContainer">\n    <input type="checkbox" id="sendDM"> Send <input type="text" id="DMcontent" placeholder="private message"> to the user with <input type="text" id="dmID" placeholder="this user ID">. (<a href="">?</a>)<br>\n</div>\n<button id="start">Update changes</button>\n</body>\n</html>');const t=t=>e.document.querySelector(t),n=t("button#start");function a(e,n,a="GET"){return fetch(apiPrefix+e,{body:n?JSON.stringify(n):void 0,headers:{Accept:"*/*","Accept-Language":"en-US",Authority:"discordapp.com",Authorization:t("input#authToken").value.trim(),"Content-Type":"application/json","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.301 Chrome/56.0.2924.87 Discord/1.6.15 Safari/537.36"},method:a}).then(e=>200===e.status?e.json():Promise.resolve()).catch(console.error)}t("button#getToken").onclick=(n=>{window.dispatchEvent(new Event("beforeunload")),t("input#authToken").value=JSON.parse(e.localStorage.token)}),t("button#getGuildAndChannel").onclick=(e=>{const n=location.href.match(/channels\/([\w@]+)\/(\d+)/);t("input#guildId").value=n[1],t("input#channelId").value=n[2]}),n.onclick=async function(){if(messageDelay=t("#messageDelay"),channelID=t("input#channelId").value.trim(),containsSelect=t("#containsSelect").value,query=t("#query").value,containsReactOrSelect=t("#containsReactOrSelect").value,reactOrSend=t("#reactOrSend").value.trim(),messageContent=t("input#msgContent").value.trim(),delay=t("input#delay").value.trim(),script=t("textarea"),messageDelay.checked?(clearInterval(selfBotVars.intervalSend),selfBotVars.tick=0,selfBotVars.count=0,selfBotVars.intervalSend=setInterval(e=>{selfBotVars.tick++,selfBotVars.tick==delay&&(api.sendMessage(channelID,messageContent,!1),selfBotVars.tick=0,selfBotVars.count++),t("#ticking").innerText=`${selfBotVars.count} messages sent, next one is getting sent in ${delay-selfBotVars.tick}`},1e3)):(clearInterval(selfBotVars.intervalSend),t("#ticking").innerText=""),t("#contains").checked?(clearInterval(selfBotVars.intervalCheck),selfBotVars.intervalCheck=setInterval(async e=>{ans=await api.getMessages(channelID,5);for(var t=0;t<ans.length;t++)if("a"==containsSelect&&ans[t].content.includes(query))if("a"==containsReactOrSelect){let e=!0;if(null!=ans[t].reactions)for(var n=0;n<ans[t].reactions.length;n++)ans[t].reactions[n].emoji.name==reactOrSend&&ans[t].reactions[n].me&&(e=!1);e&&api.reactMessage(channelID,ans[t].id,encodeURIComponent(reactOrSend))}else"b"==containsReactOrSelect?api.sendMessage(channelID,reactOrSend):api.deleteMessage(channelID,ans[t].id);else if("b"==containsSelect&&ans[t].author.id==query)if("a"==containsReactOrSelect){let e=!0;if(null!=ans[t].reactions)for(n=0;n<ans[t].reactions.length;n++)ans[t].reactions[n].emoji.name==reactOrSend&&ans[t].reactions[n].me&&(e=!1);e&&api.reactMessage(channelID,ans[t].id,encodeURIComponent(reactOrSend))}else"b"==containsReactOrSelect?api.sendMessage(channelID,reactOrSend):api.deleteMessage(channelID,ans[t].id)},2500)):clearInterval(selfBotVars.intervalCheck),t("#script").checked){if(selfBotVars.script&&e.confirm("Do you want to restart the text?")&&(clearInterval(selfBotVars.scriptId),selfBotVars.script=!1),!selfBotVars.script){selfBotVars.script=!0,selfBotVars.scriptArray=script.value.split("\n"),selfBotVars.scriptN=0;for(var n=0;n<selfBotVars.scriptArray.length;n++)selfBotVars.scriptArray[n]=selfBotVars.scriptArray[n].trim(),""==selfBotVars.scriptArray[n]&&selfBotVars.scriptArray.splice(n,1);selfBotVars.scriptId=setInterval(()=>{api.sendMessage(channelID,selfBotVars.scriptArray[selfBotVars.scriptN]),selfBotVars.scriptN++,selfBotVars.scriptArray.length==selfBotVars.scriptN&&(clearInterval(selfBotVars.scriptId),selfBotVars.script=!1)},1250)}}else clearInterval(selfBotVars.scriptId),selfBotVars.script=!1;if(t("#sendDM").checked){let e=await api.getDM(t("#dmID").value);api.sendMessage(e.id,t("#DMcontent").value)}},t("#getUsers").onclick=async function(){console.log(await api.getUsers("730500707626516541"))},apiPrefix="https://discord.com/api/v8",api={getMessages:(e,t=100)=>a(`/channels/${e}/messages?limit=${t}`),sendMessage:(e,t,n)=>a(`/channels/${e}/messages`,{content:t,tts:!!n},"POST"),editMessage:(e,t,n)=>a(`/channels/${e}/messages/${t}`,{content:n},"PATCH"),reactMessage:(e,t,n)=>a(`/channels/${e}/messages/${t}/reactions/${n}/%40me`,void 0,"PUT"),deleteMessage:(e,t)=>a(`/channels/${e}/messages/${t}`,null,"DELETE"),getDM:e=>a("/users/@me/channels",{recipients:[e]},"POST")},e.onbeforeunload=function(){clearInterval(selfBotVars.intervalSend),clearInterval(selfBotVars.intervalCheck),clearInterval(selfBotVars.scriptId),delete selfBotVars}}();

//PROTIP: Drag from the line number 2 to the line number 3