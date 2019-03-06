cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.core"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricAnswersPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Answers.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.Answers"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricCrashlyticsPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Crashlytics.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.Crashlytics"
    ]
  },
  {
    "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
    "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
    "pluginId": "cordova-plugin-facebook4",
    "clobbers": [
      "facebookConnectPlugin"
    ]
  },
  {
    "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
    "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
    "pluginId": "cordova-plugin-firebase-analytics",
    "merges": [
      "cordova.plugins.firebase.analytics"
    ]
  },
  {
    "id": "cordova-plugin-googleplus.GooglePlus",
    "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
    "pluginId": "cordova-plugin-googleplus",
    "clobbers": [
      "window.plugins.googleplus"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-fabric-plugin": "1.1.14-dev",
  "cordova-plugin-facebook4": "2.5.0",
  "cordova-support-google-services": "1.0.0",
  "cordova-plugin-firebase-analytics": "0.12.1",
  "cordova-plugin-googleplus": "5.3.2"
};
// BOTTOM OF METADATA
});