// Relay function calls to
var Pollux       = null;
var PolluxDevice = null;

// Contains functions for camera API calls
var DeviceCamera = new function() {
  var self = this;

  self.currentCallback = null;
  // Requests image from camera
  self.getPicture = function(callbackName) {
    console.log("Phonegap bridge: getPicture");
    self.currentCallback = callbackName;

    navigator.camera.getPicture(
      this.onSuccess,
      this.onFail,
      {
        destinationType: Camera.DestinationType.DATA_URL
      }
    );
  };

  // Requests image from photolibrary
  self.uploadPicture = function(callbackName) {
    console.log("Phonegap bridge: uploadPicture");
    self.currentCallback = callbackName;

    navigator.camera.getPicture(
      self.onSuccess,
      self.onFail,
      {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      }
    );
  };

  // Called upon successful image requests
  self.onSuccess = function(imageData) {
    console.log("Phonegap, bridge: cameraSuccess");
    PolluxDevice.deviceCallback(imageData, self.currentCallback);
  },

  // Called upon failed image requests
  self.onFail = function() {
    console.log(" Phonegap, bridge: cameraError");
    alert("Phonegap, bridge: cameraError");
  }
};

var LocalDevice = {
  // Load webapplication and initiate to phonegap behavior on completion
  initiateWebApp: function () {
     // Wait for iFrame to load before initiating to phonegap behavior
     $('#web-context').load(function(){
      console.log('PhoneGap, bridge, iframe loaded');
      var polluxWindow = document.getElementById('web-context').contentWindow;
      Pollux = polluxWindow.Pollux;
      PolluxDevice = Pollux.setDevice('phonegap', function(){
        polluxWindow.document.getElementById('captured-video').style.display = "none";
      });
     });
     // Load webapplication
     $('#web-context').attr({
      src: 'http://pollux-server.herokuapp.com'
      //src: 'http://192.168.0.100:3000'
    });
  }
};
    // Deprecated method
// Contains functions for Geolocation API calls
var geolocation = new function () {
  var self = this;

  self.currentCallback = null;
  // Request geolocation
  self.getGeolocation = function(callbackName){
    console.log("Phonegap bridge: getGeolocation");
    self.currentCallback = callbackName;
    navigator.geolocation.getCurrentPosition(self.onSuccess, self.onError, {timeout: 10000});
  },

  // Called upon successful geolocation requests
  self.onSuccess = function(position) {
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

    var locationData = JSON.stringify({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    PolluxDevice.deviceCallback(locationData, self.currentCallback);
  },

  // Called upon failed geolocation requests
  self.onError = function(error) {
    // console.log("Phonegap, bridge: geolocation error");
    // alert('code: '    + error.code    + '\n' +
    //   'message: ' + error.message + '\n');
    alert("Please activate your GPS in order to add your location")
  }
};

