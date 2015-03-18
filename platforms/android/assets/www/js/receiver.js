var receiver = {
    addMessageListener: function (event) {
        if (window.addEventListener){
            window.addEventListener("message", this.messageReceived, false);
            alert("hello");
        } else {
            attachEvent("onmessage", this.messageReceived);
        }
    },
    messageReceived: function (event) {
        if (event.data === "camera") {
            bridge.getPicture();
        } else {
            console.log("Message received");
            alert(event.data);    
        }
    }

}