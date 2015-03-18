var receiver = {
    addMessageListener: function (event) {
        if (window.addEventListener){
            window.addEventListener("message", this.messageReceived, false);
            console.log("phonegap: added eventlistner to phonegap");
        } else {
            attachEvent("onmessage", this.messageReceived);
        }
    },
    messageReceived: function (event) {
        if (event.data === "camera") {
            bridge.getPicture();
            console.log("phonegap: received camera request from browser");
        } else {
            console.log("phonegap: Message received");
            alert(event.data);    
        }
    }

}