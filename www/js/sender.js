var sender = {
    // Add fields for saving URLs that called functions? (Maybe in receiver instead?)
    sendMessage: function (JSONMessage) {
      console.log("PhoneGap, sender.js, sendMessage: " + JSON.stringify(JSONMessage));
  		document.getElementById("iframe").contentWindow.postMessage(JSON.stringify(JSONMessage), "http://pollux-server.herokuapp.com");
  	},

    sendData: function (type, data) {
      var dataJSON = {
        "type": type, 
        "data": data
      };
      this.sendMessage(dataJSON);
    },

  	sendPhoneGapInitiate: function () {
  		var phoneGapJSON = {
  			"type": "phonegap"
  		};
  		this.sendMessage(phoneGapJSON);
  	}
}