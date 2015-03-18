var bridge = {
	getPicture: function () {
		camera.getPicture();
	}
}

var camera = {
	getPicture: function () {
		console.log("getPicture");
  	navigator.camera.getPicture(this.onSuccess, this.onFail,
  	{destinationType: Camera.DestinationType.DATA_URL});
  },
	onSuccess: function (imageData) {
    	console.log("cameraSuccess");
    	sender.sendImage(imageData);
	},
	onFail: function() {
    	console.log("cameraError");
	    alert("cameraError");
	}	
}