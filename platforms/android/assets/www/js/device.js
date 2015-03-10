function requestImage () {
	navigator.camera.getPicture(cameraSuccess, function() {
		alert("getPicture failed!");
	}, {destinationType: Camera.DestinationType.DATA_URL});
}
function cameraSuccess(imageBase64){
	$("#image-upload").attr("src", "data:image/jpeg;base64," + imageBase64);
}