var receiver = {
    addMessageListener: function () {
        window.addEventListener("message", this.messageReceived, false);
        console.log("phonegap: added eventlistener to phonegap");       
    },
    
    messageReceived: function (event) {
        var eventJSON = event.data;
        console.log("phonegap receiver: messageReceived - " + eventJSON);
        if (eventJSON.type === "camera") {
            bridge.getPicture();
            console.log("phonegap, receiver: received camera request from browser");
        } else {
            console.log("phonegap, receiver: Message with unknown type recived");
            alert(event.data);    
        }
    }
}