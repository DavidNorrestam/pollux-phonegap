var bridge = {
	getPicture: function () {
		console.log("Phonegap, bridge: getpicture from bridge object")
		camera.getPicture();
	},
	getGeolocation: function() {
		console.log("Phonegap, bridge: getGeolocation from bridge object")
		geolocation.getGeolocation();
	},
	initiateWebApp: function () {
		 // Wait for iFrame to load before initiating to phonegap behavior
		 $("#iframe").load(function(){
		 	console.log("PhoneGap, bridge, iframe loaded");
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
    	console.log("Phonegap, bridge: cameraSuccess");
    	sender.sendData("camera", imageData);
	},
	onFail: function() {
    	console.log(" Phonegap, bridge: cameraError");
	    alert("Phonegap, bridge: cameraError");
	}	
}

var geolocation = {
	getGeolocation: function(){
		console.log("Phonegap bridge: getGeolocation function");
		navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
	},

	onSuccess : function(position) {
		console.log("Phonegap, bridge: geolocation success");
		sender.sendGeolocation(position);
		console.log('phonegap, bridge'          + '\n' +
			'Latitude: '          + position.coords.latitude          + '\n' +
			'Longitude: '         + position.coords.longitude         + '\n' +
			'Altitude: '          + position.coords.altitude          + '\n' +
			'Accuracy: '          + position.coords.accuracy          + '\n' +
			'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			'Heading: '           + position.coords.heading           + '\n' +
			'Speed: '             + position.coords.speed             + '\n' +
			'Timestamp: '         + position.timestamp                + '\n');

		sender.sendData("geolocation", position);
	},

	onError : function(error) {
		console.log("Phonegap, bridge: geolocation error");
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
	}
}