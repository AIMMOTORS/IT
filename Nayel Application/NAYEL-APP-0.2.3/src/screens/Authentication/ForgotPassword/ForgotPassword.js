import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, ToastAndroid } from "react-native";
import { Login } from '../../../styles';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Button, ConfirmationAlert, Spacing, AppHeader, Input } from '../../../components';
import { SH, SF } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../../routes";
import { emailValidator } from "../../../utils/helpers/emailValidator";
import { API_BASE_URL } from "../../../utils/helpers/crudHandler";

const ForgotPassword = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const { navigation } = props;
  const [email, setEmailValidError] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [apiHelper, setapiHelper] = useState(false);

  var alertdata = {
    'logout': t("Email_Successfull"),
  }
  const hanldeSubmit = () => {
    setapiHelper(true)
    const emailError = emailValidator(email)
    if(emailError){
      ToastAndroid.show(`${emailError}`,ToastAndroid.SHORT)
      setapiHelper(false)
      return 
    }
    fetch(`${API_BASE_URL}/forget-password`, {
      method: 'POST',
      body: JSON.stringify({email:email}),
      headers: {
        'Accept': '*/*',
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if (response.status === 404) {
        setapiHelper(false)
        // alert('Your Email Does not exist')
      }
      return response.json();
    })
    .then((data) => {
      setAlertVisible(true);
      setapiHelper(false)
      setAlertMessage(data.msg);
    })
    .catch(error => {
      console.error(error);
    });

  }
  return (
    <View style={Logins.WidthFull}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Logins.ContentContainerStyle}>
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname={true} headerTitle={t("Forget_Password")} />
        <View style={Logins.TabMinView}>
          <View>
            <View style={Logins.TabMinViewChild}>
              <View style={Logins.InputUnderLine}>
                <View>
                  <IconM style={Logins.Marginright} name="email" size={SF(25)} />
                </View>
                <Input
                  placeholder={t("Enter_Email")}
                  inputStyle={Logins.InputTextStyle}
                  onChangeText={(e) => setEmailValidError(e)}
                  keyboardType={'email-address'}
                  value={email}
                />
              </View>
              <Spacing space={SH(20)} />
              <Text style={Logins.SeTextStyleForget}><Text style={Logins.StarColor}> * </Text> {t("We_Well_Sand_Message")}</Text>
              <Spacing space={SH(20)} />
              <Button 
              loading={apiHelper}
              onPress={() => {
                // setAlertVisible(true);
                // setAlertMessage(alertdata.logout);
                hanldeSubmit()
              }} 
              title={t("Submitbutton")} 
              />
              <ConfirmationAlert
                message={alertMessage}
                buttonminview={Logins.CenterButton}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => {setAlertVisible(!alertVisible),navigation.navigate(RouteName.LOGIN_SCREEN)}}
                iconVisible={alertMessage!="User not found"?true:false}
                buttonText={t("Ok")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;
