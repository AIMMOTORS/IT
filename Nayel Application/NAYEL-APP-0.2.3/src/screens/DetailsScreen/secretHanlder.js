import { View, TextInput, StyleSheet, ToastAndroid } from 'react-native';
import WifiManager from "react-native-wifi-reborn";
import { PermissionsAndroid } from 'react-native';

export async function PinCode(secret) {
    console.log("see my otp", secret);
  
    const accessPromise = GetAccess();
    const checkStatPromise = accessPromise.then(result => {
      if (result === "granted") {
        return checkStat();
      } else {
        return result; // Return "failed" or any other relevant error code
      }
    });
  
    const toSend = await checkStatPromise;
    return toSend;
  
    async function GetAccess() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Wi-Fi Networks",
            message: "Location should be enabled to scan Wi-Fi networks.",
          }
        );
  
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Thank you for your permission! :)");
          checkStat();
          return "granted";
        } else {
          // Handle permission denied or never ask again cases
          return "failed";
        }
      } catch (err) {
        console.warn(err);
        return "failed";
      }
    }
  
    async function checkStat() {
      console.log("See if connection is trying");
      try {
        await WifiManager.connectToProtectedSSID(`NAYEL_${secret}`, "Nayel@123", false, false);
        console.log("Connected successfully!");
        return "success";
      } catch (error) {
        console.log("Connection failed!");
        return "failed";
      }
    }
  
}
