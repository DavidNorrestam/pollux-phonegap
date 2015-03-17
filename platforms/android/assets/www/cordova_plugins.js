cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/jp.wizcorp.phonegap.plugin.wizViewManagerPlugin/www/phonegap/plugin/wizViewManager/wizViewManager.js",
        "id": "jp.wizcorp.phonegap.plugin.wizViewManagerPlugin.wizViewManagerPlugin",
        "clobbers": [
            "window.wizViewManager"
        ]
    },
    {
        "file": "plugins/jp.wizcorp.phonegap.plugin.wizViewManagerPlugin/www/phonegap/plugin/wizViewManager/wizViewMessenger.js",
        "id": "jp.wizcorp.phonegap.plugin.wizViewManagerPlugin.wizViewMessenger",
        "clobbers": [
            "window.wizViewMessenger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.camera": "0.3.5",
    "jp.wizcorp.phonegap.plugin.wizViewManagerPlugin": "1.3.0"
}
// BOTTOM OF METADATA
});