chrome.runtime.onMessage.addListener(
    function(request) {
        try {
            var jsonData = request.jsonContent;
            var jsonParsed = JSON.parse(jsonData);

            for(var i in jsonParsed){
                var val = jsonParsed[i];
                document.getElementById(i).value = val;
            }
        } catch (error) {
            console.log(chrome.runtime.lastError+" "+error);
        }
    }
);