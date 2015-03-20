var bridge = {
	getPicture: function () {
		camera.getPicture();
		console.log("Phonegap bridge: getpicture from bridge object")
	},
	initiateWebApp: function () {
		 //we need to wait for the iframe to be fully loaded in order to send messages to the iframe
		 $("#iframe").load(function(){
		 	console.log("PhoneGap, brdige, iframe loaded");
			sender.sendPhoneGapInitiate();
     });

     $("#iframe").attr({
     	src:"http://pollux-server.herokuapp.com"
     });
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