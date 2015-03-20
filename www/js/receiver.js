// Contains functions for listening to postMessage calls on this window
var receiver = {
    // Register message listener
    addMessageListener: function () {
        window.addEventListener("message", this.messageReceived, false);
        console.log("phonegap: added eventlistener to phonegap");       
    },
    
    // Called upon receiving message
    messageReceived: function (message) {
        var messageAsJSON = JSON.parse(message.data);
        console.log("phonegap receiver: messageReceived - " + messageAsJSON);
        if (messageAsJSON.type === "camera") {
            console.log("phonegap, receiver: received camera request from browser");
            bridge.getPicture();
        } else if (messageAsJSON.type === "image") {
            console.log("phonegap, receiver: received image request from browser");
            bridge.uploadPicture();
        } else if (messageAsJSON.type === "geolocation") {
            console.log("phonegap, receiver: received geolocation request from browser");
            bridge.getGeolocation();
        } else {
            console.log("phonegap, receiver: Message with unknown type recived");
            alert(message.data);    
        }
    }
}