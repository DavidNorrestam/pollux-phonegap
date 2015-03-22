// Relay function calls to
var Pollux       = null;
var PolluxDevice = null;

var bridge = {
  // Requests image from camera
  getPicture: function () {
    console.log("Phonegap, bridge: getpicture from bridge object");
    camera.getPicture();
  },

  // Requests image from photolibrary
  uploadPicture: function () {
    console.log("Phonegap, bridge: getpicture from bridge object");
    camera.uploadPicture();
  },

  // Requests geolocation
  getGeolocation: function() {
    console.log("Phonegap, bridge: getGeolocation from bridge object");
    geolocation.getGeolocation();
  },

  // Load webapplication and initiate to phonegap behavior on completion
  initiateWebApp: function () {
     // Wait for iFrame to load before initiating to phonegap behavior
     $("#web-context").load(function(){
      console.log('PhoneGap, bridge, iframe loaded');
      Pollux = document.getElementById('web-context').contentWindow.Pollux;
      PolluxDevice = Pollux.setDevice('phonegap');
     });
     // Load webapplication
     $("#web-context").attr({
      src:"http://192.168.0.100:3000"
     });
  }
}
// Contains functions for camera API calls
var camera = {
  currentCallback: undefined,
  // Requests image from camera
  getPicture: function (callbackName) {
    console.log("Phonegap bridge: getPicture");
    this.currentCallback = callbackName;
    navigator.camera.getPicture(
      this.onSuccess,
      this.onFail,
      {
        destinationType: Camera.DestinationType.DATA_URL
      }
    );
  },

  // Requests image from photolibrary
  uploadPicture: function () {
    console.log("Phonegap bridge: uploadPicture");
    navigator.camera.getPicture(this.onSuccess, this.onFail,
    {destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY});
  },

  // Called upon successful image requests
  onSuccess: function (imageData) {
    console.log("Phonegap, bridge: cameraSuccess");
    // this.currentCallback
    PolluxDevice.deviceCallback(imageData, 'addImgBase64');
  },

  // Called upon failed image requests
  onFail: function() {
    console.log(" Phonegap, bridge: cameraError");
    alert("Phonegap, bridge: cameraError");
  }
}

// Contains functions for Geolocation API calls
var geolocation = {
  // Request geolocation
  getGeolocation: function(){
    console.log("Phonegap bridge: getGeolocation");
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, {timeout: 10000});
  },

  // Called upon successful geolocation requests
  onSuccess : function(position) {
    console.log("Phonegap, bridge: geolocation success");
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

  // Called upon failed geolocation requests
  onError : function(error) {
    console.log("Phonegap, bridge: geolocation error");
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
  }
}