var sender = {
    // Add fields for saving URLs that called functions? (Maybe in receiver instead?)
    sendMessage: function (message) {
  		document.getElementById("iframe").contentWindow.postMessage(message, "http://pollux-server.herokuapp.com");
  	},
  	sendImage: function (imageData) {
  		var imageJSON = {
  		  "type": "camera", 
  			"image": imageData
  		};
  		this.sendMessage(JSON.stringify(imageJSON));
  	},
  	sendPhoneGapInitiate: function () {
  		var phoneGapJSON = {
  			"type": "phonegap"
  		};
  		this.sendMessage(phoneGapJSON);
  	}
}