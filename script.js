document.getElementById("fillForm").addEventListener("click", () => {

	/* Auto fill form */
	jsonContent = document.getElementById('jsonContent').value;

	if (!isJsonString(jsonContent)) {
		alert('Invalid JSON.');
		document.getElementById('jsonContent').select();
	} else {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(
				tabs[0].id, 
				{jsonContent: jsonContent}, 
			);
		});
	}

});

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}