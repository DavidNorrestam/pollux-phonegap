var PolluxReceiver = {
  // Register message listener
  addMessageListener: function() {
    window.addEventListener('message', this.messageReceived, false);
    console.log('phonegap: added eventlistener to phonegap');
  },

  // Called upon receiving message
  messageReceived: function(message) {
    var messageAsJSON = JSON.parse(message.data);
    var type          = messageAsJSON.type;
    var callbackName  = messageAsJSON.callbackName;

    console.log('phonegap receiver: messageReceived - ' + messageAsJSON);

    if (type === 'camera') {
      console.log('phonegap, receiver: received camera request from browser');
      DeviceCamera.getPicture(callbackName);

    } else if (type === 'image') {
      console.log('phonegap, receiver: received image request from browser');
      DeviceCamera.uploadPicture(callbackName);

    } else if (type === 'geolocation') {
      console.log('phonegap, receiver: received geolocation request from browser');
      geolocation.getGeolocation(callbackName);

    } else {
      console.log('phonegap, receiver: request with unknown type recived');
      alert(message.data);
    }
  }
};
