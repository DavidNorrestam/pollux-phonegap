// Contains functions for sending messages (and data) to iFrame
var sender = {
    sendMessage: function (JSONMessage) {
  		document.getElementById("iframe").contentWindow.postMessage(JSON.stringify(JSONMessage), "http://pollux-server.herokuapp.com");
  	},

    sendData: function (type, data) {
      var dataJSON = {
        "type": type, 
        "data": data
      };
      this.sendMessage(dataJSON);
    }
,  	sendPhoneGapInitiate: function () {
  		var phoneGapJSON = {
  			"type": "phonegap"
  		};
  		this.sendMessage(phoneGapJSON);
  	}
}