import React, { useState, useMemo, useRef } from "react";
import { Text, View, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity, ToastAndroid, } from "react-native";
import {Otpstyle} from '../../../styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import images from '../../../index';
import RouteName from '../../../routes/RouteName';
import { useNavigation } from '@react-navigation/native';
import { Button, ConfirmationAlert } from '../../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { PinCode } from "./secretHanlder";

const OtpScreenset = () => {
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);
    const navigation = useNavigation();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [secret, setSecret] = useState('');
    const [clearInputs,setclearInputs] = useState(false)
    var alertdata = {
        'logout': t("Resend_Otp_Text_Modal"),
        'loginSuccess': t("Login_Successful"),
        'Invalid_Input':t("Invalid_Input")
    }
    const onoknutton = () => {
        if (okbutton === 1) okbutton;
        // if (okbutton === 2) navigation.navigate(RouteName.HOME_SCREEN)
        // setAlertMessage(alertdata.loginSuccess);
    }

    async function handleOTP(){
        if(secret.length<4){
            return alert("invalid")
        }
        let msg = await PinCode(secret)
        if(msg === "success"){
            navigation.replace(RouteName.ADD_A_BIKE)
        }
    }

    const handleCodeChange = code => {
        // Check for invalid alphabets
        setclearInputs(false)
        const uppercaseCode = code.toUpperCase();   
        console.log("upper case code ",uppercaseCode)
     
        // const filteredCode = uppercaseCode.replace(/[^ABCDEF0123456789]/g, '');
        // console.log("filter code ",filteredCode + code)
        // if (filteredCode != uppercaseCode) {
        //     setSecret('')
        //     setclearInputs(true)
        //     return ToastAndroid.show("Invalid Alphabet",ToastAndroid.SHORT)
        // }
        
        setSecret(uppercaseCode);
      };

    return (
        <ImageBackground source={images.full_bg_img_hospital} resizeMode='cover'>
            <View style={Otpstyles.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Otpstyles.ContentContainerStyle}>
                    <KeyboardAvoidingView enabled>
                        <View style={Otpstyles.MinFlexView}>
                            <View style={Otpstyles.MinViewSecond}>
                                <Text style={Otpstyles.EnterSixDigitText}>{t("Enter_Four_Digit_Secret")}</Text>
                                <Text style={Otpstyles.paregraph}>{t("Enter_The_Otp_Title")}</Text>
                                <OTPInputView
                                    style={Otpstyles.OtpViewStyles}
                                    pinCount={4}
                                    keyboardType='default'
                                    autoFocusOnLoad={false}
                                    clearInputs={clearInputs}
                                    code={secret}
                                    onCodeChanged={handleCodeChange}
                                    codeInputFieldStyle={Otpstyles.CodeInputStyles}
                                    codeInputHighlightStyle={Otpstyles.CodeInputStyles}
                                />
                                <View style={Otpstyles.FlexRowText}>
                                    <Text style={Otpstyles.ParagraphPhotoBottom}>{t("Didnt_Recevip_Otp")}</Text>
                                    <TouchableOpacity onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton(1);
                                    }}>
                                        <Text style={Otpstyles.ResendTextBold}>{t("Resend")}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Button onPress={() => {
                                        handleOTP()
                                        // navigation.navigate(RouteName.HOME_SCREEN)
                                    }} title={t("Verify_Text")} />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <ConfirmationAlert
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                    buttonminview={Otpstyles.buttonotp}
                    iconVisible={true}
                    buttonText={t("Ok")}
                />
            </View>
        </ImageBackground>
    );
};
export default OtpScreenset;
