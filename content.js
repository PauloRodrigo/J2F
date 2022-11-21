chrome.runtime.onMessage.addListener(
    function(request) {
        try {
            var jsonData = request.jsonContent;
            var jsonParsed = JSON.parse(jsonData);

            for(var i in jsonParsed){
                var val = jsonParsed[i];

                console.log(i);
                if(document.getElementById(i)) {
                    console.log('achou id');
                    document.getElementById(i).value = val;
                } else {
                    if (document.querySelector("[name="+i+"]")) {
                        console.log('achou nome');
                        document.querySelector("[name="+i+"]").value = val;
                    }
                }
            }
        } catch (error) {
            console.log(chrome.runtime.lastError+" "+error);
        }
    }
);