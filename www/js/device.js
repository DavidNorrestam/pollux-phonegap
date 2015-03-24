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

    // TODO: Send the data
  },

  // Called upon failed geolocation requests
  onError : function(error) {
    console.log("Phonegap, bridge: geolocation error");
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
  }
};

var LocalDevice = {
  // Load webapplication and initiate to phonegap behavior on completion
  initiateWebApp: function () {
     // Wait for iFrame to load before initiating to phonegap behavior
     $('#web-context').load(function(){
      console.log('PhoneGap, bridge, iframe loaded');
      Pollux = document.getElementById('web-context').contentWindow.Pollux;
      PolluxDevice = Pollux.setDevice('phonegap');
     });
     // Load webapplication
     $('#web-context').attr({
      src: 'http://pollux-server.herokuapp.com'
      //src: 'http://192.168.0.100:3000'
    });
  }
};
