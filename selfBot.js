console.clear();
selfBotVars = {};
(function () {
    let popup;
    popup = window.open("", "", `top=0,left=${screen.width - 800},width=850,height=${screen.height}`);
    if (!popup || !popup.document || !popup.document.write) return console.error("Popup blocked! Please allow popups and try again.");
    popup.document.write(`<!DOCTYPE html><html><head><title>Discord SelfBot</title><style type="text/css"> body{background-color:#36393f; color:#dcddde; font-family:sans-serif; font-size: 16pt;}.commonInputsContainer{width: 100%; display: flex;}.half{width: 50%;}a:visited, a{color: white;}.featureContainer{border-radius: 8px; border: 3px solid white; padding: 30px; margin-top: 5px; display: flex;}input[type=checkbox]:checked:has(> .featureContainer){border: 3px solid #7289da;}#start{display: block; margin-right: auto; margin-left: auto; margin-top: 100px; padding: 10px; border-radius: 10px; background: #009688;}button{border: none; background: #7289da; color: white; font-size: 16px; padding: 4px 16px;}button:active{transform: translateY(3px);}button:focus, button:active{outline: none}select{background: hsl(220 8% 40% / 1); color: inherit; border: 0; font-size: 16pt;}input{background-color: #2f3136; border: 1px solid #040405; border-radius: 3px; -webkit-box-sizing: border-box; box-sizing: border-box; color: #f6f6f7; -webkit-transition: background-color 0.15s ease, border 0.15s ease; transition: background-color 0.15s ease, border 0.15s ease; padding: 5px;}input::-webkit-input-placeholder{color: #72767d; -webkit-user-select: none; user-select: none;}input::-moz-placeholder{color: #72767d; -moz-user-select: none; user-select: none;}input:-ms-input-placeholder{color: #72767d; -ms-user-select: none; user-select: none;}input::placeholder{color: #72767d; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}input:hover{border-color: #040405;}input:focus{border-color: #7289da; outline: none;}input.disabled-2BKQFm{border-color: #202225;}input.error-2O5WFJ{border-color: #f04747;}input.focused-1mmYsC{border-color: #7289da;}input.success-2-F980{border-color: #43b581;}input[type="number"]{-moz-appearance: textfield;}input::-webkit-inner-spin-button, input::-webkit-outer-spin-button{-webkit-appearance: none; margin: 0;}input.editable-2UkCu4{background-color: transparent; border-color: transparent;}.switch{position: relative; display: inline-block; width: 60px; height: 34px;}.switch input{opacity: 0; width: 0; height: 0;}.slider{position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; -webkit-transition: .1s; transition: .1s;}.slider:before{position: absolute; content: ""; height: 26px; width: 26px; left: 4px; bottom: 4px; background-color: white; -webkit-transition: .1s; transition: .1s;}input:checked + .slider{background-color: rgb(67, 181, 129);}input:focus + .slider{box-shadow: 0 0 1px rgb(67, 181, 129);}input:checked + .slider:before{-webkit-transform: translateX(26px); -ms-transform: translateX(26px); transform: translateX(26px);}.slider{border-radius: 34px;}.slider:before{border-radius: 50%;}.checkbox{align-self: center; margin-right: 15px;}.featureSettings{align-self: center; width: 100%;}</style></head><body><h1>Required info:</h1><div class="commonInputsContainer"> <div class="half"> Token <a target="_blank" title="Need some help? Click on this link to open a documentation!" href="https://github.com/cazeip/Self-Bot-Visual#starting-everything">?</a><br><input type="password" placeholder="Token" id="authToken"> <button id="getToken">Fill</button><br></div><div class="half"> Server and Channel IDs <a target="_blank" title="Need some help? Click on this link to open a documentation!" href="https://github.com/cazeip/Self-Bot-Visual#starting-everything">?</a><br><input id="guildId" type="text" placeholder="Guild ID" priv><br><input id="channelId" type="text" placeholder="Channel ID" priv> <button id="getGuildAndChannel">Fill</button><br></div></div><h2>Features:</h2><div class="featureContainer"> <div class="checkbox"> <label class="switch"> <input type="checkbox" id="messageDelay"> <span class="slider"></span> </label> </div><div class="featureSettings"> Send <input type="text" id="msgContent" placeholder="some text"> every <input type="number" id="delay" placeholder="number of"> seconds. <a target="_blank" title="Need some help? Click on this link to open a documentation!" href="https://github.com/cazeip/Self-Bot-Visual#send--every--seconds">?</a><br><span id="ticking" style="font-size: 12pt;"></span> </div></div><div class="featureContainer"> <div class="checkbox"> <label class="switch"> <input type="checkbox" id="contains"> <span class="slider"></span> </label> </div><div class="featureSettings"> If message's <select id="containsSelect"><option value="a">content</option><option value="b">author ID</option></select> contains <input type="text" id="query" placeholder="something"> then <select id="containsReactOrSelect"><option value="a">react</option><option value="b">send</option><option value="c">delete it</option> <input type="text" id="reactOrSend" placeholder="some suff"></select>. <a target="_blank" title="Need some help? Click on this link to open a documentation!" href="https://github.com/cazeip/Self-Bot-Visual#if--then-">?</a><br></div></div><div class="featureContainer"> <div class="checkbox"> <label class="switch"> <input type="checkbox" id="script"> <span class="slider"></span> </label> </div><div class="featureSettings"> Automatically type the following text where messages are separated with an enter. <a target="_blank" title="Need some help? Click on this link to open a documentation!" href="https://github.com/cazeip/Self-Bot-Visual#send-the-following-text">?</a><br><textarea style="resize: vertical;width: 100%;" placeholder="Enter the text here (Bee movie for example)" rows="8"></textarea> </div></div><div class="featureContainer"> <div class="checkbox"> <label class="switch"> <input type="checkbox" id="sendDM"> <span class="slider"></span> </label> </div><div class="featureSettings"> Send <input type="text" id="DMcontent" placeholder="private message"> to the user with <input type="text" id="dmID" placeholder="this user ID">. <a target="_blank" title="Need some help? Click on this link to open a documentation!" href="https://github.com/cazeip/Self-Bot-Visual#send-message-to-user-with-this-id">?</a><br></div></div><button id="start">Update changes</button></body></html>`);
    const $ = s => popup.document.querySelector(s);
    
    const startBtn = $('button#start');

    $('button#getToken').onclick = e => {
        window.dispatchEvent(new Event('beforeunload'));
        $('input#authToken').value = JSON.parse(popup.localStorage.token);
    };
    $('button#getGuildAndChannel').onclick = e => {
        const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
        $('input#guildId').value = m[1];
        $('input#channelId').value = m[2];
    };
    async function buttonClick(){
        messageDelay = $("#messageDelay");
        channelID = $("input#channelId").value.trim();
        containsSelect = $("#containsSelect").value;
        query = $("#query").value;
        containsReactOrSelect = $("#containsReactOrSelect").value;
        reactOrSend = $("#reactOrSend").value.trim();
        messageContent = $("input#msgContent").value.trim();
        delay = $("input#delay").value.trim();
        script = $("textarea");

        if(messageDelay.checked){
            clearInterval(selfBotVars.intervalSend);
            selfBotVars.tick = 0;
            selfBotVars.count = 0;
            selfBotVars.intervalSend = setInterval(_ => {
                selfBotVars.tick++;
                if(selfBotVars.tick == delay){
                    api.sendMessage(channelID, messageContent, false);
                    selfBotVars.tick = 0;
                    selfBotVars.count++;
                }
                $("#ticking").innerText = `${selfBotVars.count} messages sent, next one is getting sent in ${delay - selfBotVars.tick}`;
            }, 1000);
        }else{
            clearInterval(selfBotVars.intervalSend);
            $("#ticking").innerText = "";
        }
        if($("#contains").checked){
            clearInterval(selfBotVars.intervalCheck);
            selfBotVars.intervalCheck = setInterval(async _ =>{
                ans = await api.getMessages(channelID, 5);
                for (var i = 0; i < ans.length; i++) {
                    if(containsSelect == "a" && ans[i].content.includes(query)){
                        if(containsReactOrSelect == "a"){
                            let l = true;
                            if(ans[i].reactions != undefined){
                                for (var j = 0; j < ans[i].reactions.length; j++) {
                                    if(ans[i].reactions[j].emoji.name == reactOrSend && ans[i].reactions[j].me){
                                        l = false;
                                    }
                                }
                            }
                            if(l){
                                setTimeout((a, b, c) => {
                                    api.reactMessage(a, b, c);
                                }, i*400, channelID, ans[i].id, encodeURIComponent(reactOrSend));
                            }
                        }else if(containsReactOrSelect == "b"){
                            api.sendMessage(channelID, reactOrSend);
                        }else{
                            setTimeout((a, b) => {
                                api.deleteMessage(a, b);
                            }, i*400, channelID, ans[i].id);
                        }
                    }else if(containsSelect == "b" && ans[i].author.id == query){
                        if(containsReactOrSelect == "a"){
                            let l = true;
                            if(ans[i].reactions != undefined){
                                for (var j = 0; j < ans[i].reactions.length; j++) {
                                    if(ans[i].reactions[j].emoji.name == reactOrSend && ans[i].reactions[j].me){
                                        l = false;
                                    }
                                }
                            }
                            if(l){
                                setTimeout((a, b, c) => {
                                    api.reactMessage(a, b, c);
                                }, i*400, channelID, ans[i].id, encodeURIComponent(reactOrSend));
                            }
                        }else if(containsReactOrSelect == "b"){
                            api.sendMessage(channelID, reactOrSend);
                        }else{
                            setTimeout((a, b) => {
                                api.deleteMessage(a, b);
                            }, i*400, channelID, ans[i].id);
                        }
                    }
                }
            }, 2500);
        }else clearInterval(selfBotVars.intervalCheck);
        if($("#script").checked){
            if(selfBotVars.script)if(popup.confirm("Do you want to restart the text?")){
                clearInterval(selfBotVars.scriptId);
                selfBotVars.script = false;
            }
            if (!selfBotVars.script) {
                selfBotVars.script=true;
                selfBotVars.scriptArray = script.value.split("\n");
                selfBotVars.scriptN = 0;
                for (var i = 0; i < selfBotVars.scriptArray.length; i++) {
                    selfBotVars.scriptArray[i] = selfBotVars.scriptArray[i].trim();
                    if(selfBotVars.scriptArray[i] == "") selfBotVars.scriptArray.splice(i, 1);
                }
                selfBotVars.scriptId = setInterval(() => {
                    api.sendMessage(channelID, selfBotVars.scriptArray[selfBotVars.scriptN]);
                    selfBotVars.scriptN++;
                    if(selfBotVars.scriptArray.length == selfBotVars.scriptN){
                        clearInterval(selfBotVars.scriptId);
                        selfBotVars.script = false;
                    }
                }, 1250);
            }
        }else{
            clearInterval(selfBotVars.scriptId);
            selfBotVars.script = false;
        }
        if($("#sendDM").checked){
            let dmID = await api.getDM($("#dmID").value);
            api.sendMessage(dmID.id, $("#DMcontent").value);
        }
    }
    startBtn.onclick = buttonClick;
    apiPrefix = "https://discord.com/api/v8";
    function apiCall(apiPath, body, method = "GET"){     
        return fetch(apiPrefix + apiPath, {
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                Accept: "*/*",
                "Accept-Language": "en-US",
                Authority: "discordapp.com",
                Authorization: $("input#authToken").value.trim(),
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.301 Chrome/56.0.2924.87 Discord/1.6.15 Safari/537.36",
            },
            method,
        }).then((res) => (res.status === 200 ? res.json() : Promise.resolve()))
          .catch(console.error);
    }

    api = {
        getMessages(channelId, limit = 100) {
            return apiCall(`/channels/${channelId}/messages?limit=${limit}`);
        },

        sendMessage(channelId, message, tts) {
            return apiCall(`/channels/${channelId}/messages`, { content: message, tts: !!tts }, "POST");
        },

        editMessage(channelId, messageId, newMessage) {
            return apiCall(`/channels/${channelId}/messages/${messageId}`, { content: newMessage }, "PATCH");
        },

        reactMessage(channelId, messageId, reaction) {
            return apiCall(`/channels/${channelId}/messages/${messageId}/reactions/${reaction}/%40me`, undefined, "PUT");
        },

        deleteMessage(channelId, messageId) {
            return apiCall(`/channels/${channelId}/messages/${messageId}`, null, "DELETE");
        },

        getDM(userId) {
            return apiCall(`/users/@me/channels`, {recipients: [userId]}, "POST");
        },
    };
    popup.onbeforeunload = function(){
        clearInterval(selfBotVars.intervalSend);
        clearInterval(selfBotVars.intervalCheck);
        clearInterval(selfBotVars.scriptId);
        delete selfBotVars;
    };
})();
