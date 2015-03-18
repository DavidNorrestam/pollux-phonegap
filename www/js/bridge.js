var bridge = {
	getPicture: function () {
		camera.getPicture();
		console.log("Phonegap bridge: getpicture from bridge object")
	}
	initiateWebApp: function () {
		sender.sendPhoneGapInitiate();
	}
}

var camera = {
	getPicture: function () {
		console.log("Phonegap bridge: getPicture function");
  	navigator.camera.getPicture(this.onSuccess, this.onFail,
  	{destinationType: Camera.DestinationType.DATA_URL});
  },
	onSuccess: function (imageData) {
    	console.log("Phonegap bridge: cameraSuccess");
    	sender.sendImage(imageData);
	},
	onFail: function() {
    	console.log(" Phonegap bridge: cameraError");
	    alert("Phonegap bridge: cameraError");
	}	
}