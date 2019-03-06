# Clavora README


## Requirements

* Either an iPhone or Android device (or emulator)
* If you're building for iOS, you'll need XCode.

## Build

Clone the repository and follow the steps based on the platform of your device.

#### iOS

1. `npm install`
2. `ionic cordova build ios`
3. Connect your iOS device and run the application, either by
  1. Opening up the relevant `.xcodeproj` on `Xcode` and clicking the run button (making sure your device is selected)
  2. Running `ionic cordova run ios --device` on your CLI - this requires that the npm package `ios-deploy` is installed globally (`npm install -g ios-deploy`)

### Android

1. `npm install`
2. `ionic cordova build android`
3. Connect your Android device and run the application with `ionic cordova run android --device` (make sure USB debugging is enabled on your device)
