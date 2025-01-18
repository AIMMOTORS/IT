import { View, TextInput, StyleSheet, ToastAndroid } from 'react-native';
import WifiManager from "react-native-wifi-reborn";
import { PermissionsAndroid } from 'react-native';

export async function PinCode(secret) {
  console.log("see my otp", secret);
  let msg = "";

  let toSend = await GetAccess();
  return toSend

  async function GetAccess() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Wi-Fi Networks",
          message: "Location should be enabled to scan Wi-Fi networks.",
        }
      );
      const checkPerm = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (checkPerm) {
        console.log("Thank you for your permission! :)");
        let i = await checkStat();
        return i;
      } else {
        ToastAndroid.show(
          "Can't find Tamoor smart fan. Please enable location first.",
          ToastAndroid.SHORT
        );
        console.log(
          "You will not be able to retrieve the list of available WiFi networks."
        );
        return "failed";
      }
      if (granted === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
          "Location Permission Denied",
          "Please allow location permission to proceed.",
          [
            {
              text: "OK",
              // onPress: GetAccess(),
            },
          ],
          { cancelable: false }
        );
        return "failed";
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          "Location Permission Denied",
          "Please allow location permission in app settings to proceed.",
          [
            {
              text: "OK",
              onPress: this.onButtonPress,
            },
          ],
          { cancelable: false }
        );
        return "failed";
      }
    } catch (err) {
      console.warn(err);
      return "failed";
    }
  }

  async function checkStat() {
    try {
      await WifiManager.connectToProtectedSSID(`NAYEL_${secret}`, "Nayel@123", false, true);
      console.log("Connected successfully!");
      msg = "success";
      return msg;
    } catch (error) {
      console.log("Connection failed!");
      msg = "failed";
      return msg;
    }
  }
}
