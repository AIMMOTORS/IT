import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { Colors } from '../utils';

const Stack = createNativeStackNavigator();

import { RouteName, SideNavigator } from '../routes';

import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen,
  SplashScreen, RegistrationSuccessful,
  Swiperscreen, AddBikeForm,
  TranslationScreen, ForgotPassword, DetailsScreen, PaymentScreen, PaytmSuccessFully, NoTransactionScreen, NotificationScreen,DateAndTimeScreen, RentPlansScreen,CardsScreen,
  QRCodeGenerate, QRCodeScan,
} from '../screens';
import TransactionScreen from '../screens/PaymentScreen/transactionList';
import SecretcardsFullScreen from '../screens/PaymentScreen/SecretCardFullScreen';

const RootNavigator = props => {
  
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }
  }, [colorrdata, Colors])
  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={RouteName.SPLASH}>
        <Stack.Screen name={RouteName.ADD_A_BIKE} component={AddBikeForm} />
        <Stack.Screen name={RouteName.SPLASH} component={SplashScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />
        <Stack.Screen name={RouteName.REGISTRATION_SUCCESSFUL} component={RegistrationSuccessful} />
        <Stack.Screen name={RouteName.OTP_VERIFY_SCREEN} component={OtpVeryfiveScreen} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.SELECT_LANGUAGE} component={TranslationScreen} />
        <Stack.Screen name={RouteName.Forget_Password} options={{ headerShown: false, headerShadowVisible: false }} component={ForgotPassword} /> 
        <Stack.Screen name={RouteName.DETAILS_SCREEN} component={DetailsScreen} />
        <Stack.Screen name={RouteName.PAYMENT_SCREEN} component={PaymentScreen} />
        <Stack.Screen name={RouteName.PAYMENT_SUCCESSFUL_SCREEN} component={PaytmSuccessFully} />
        <Stack.Screen name={RouteName.SECRET_CARD_SCREEN} component={NoTransactionScreen} />
        <Stack.Screen name={RouteName.NOTIFICATION_SCREEN} component={NotificationScreen} />
        <Stack.Screen name={RouteName.DATE_AND_TIME_SCREEN} component={DateAndTimeScreen} />
        <Stack.Screen name={RouteName.RENT_PLANS_SCREEN} component={RentPlansScreen} />
        <Stack.Screen name={RouteName.TRANSACTION_LIST} component={TransactionScreen} />
        <Stack.Screen name={RouteName.SECRET_FULL_SCREEN} component={SecretcardsFullScreen}/>
        <Stack.Screen name={RouteName.CARDS_SCREEN} component={CardsScreen}/>
        {/* <Stack.Screen name={RouteName.CHANGE_CARD_PIN} component={ChangePin}/> */}
        {/* <Stack.Screen name={RouteName.QRCODE_GENERATE} component={QRCodeGenerate}/>
        <Stack.Screen name={RouteName.QRCODE_SCAN} component={QRCodeScan}/> */}
        {/* Flat Function */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;