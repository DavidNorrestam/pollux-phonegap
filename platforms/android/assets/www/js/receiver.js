var receiver = {
    addMessageListener: function () {
        window.addEventListener("message", this.messageReceived, false);
        console.log("phonegap: added eventlistener to phonegap");       
    },
    messageReceived: function (event) {
        var json = event.data;
        if (json.type === "camera") {
            bridge.getPicture();
            console.log("phonegap: received camera request from browser");
        } else {
            console.log("phonegap: Message received");
            alert(event.data);    
        }
    }
}