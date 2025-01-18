import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH, SF } from '../../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";
import { emailValidator } from '../../../utils/helpers/emailValidator';
import { API_BASE_URL } from '../../../utils/helpers/crudHandler';
import * as Keychain from 'react-native-keychain';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/action/AuthAction';

const LoginScreen = (props) => {
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);

  const { navigation } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [apiHelper, setapiHelper] = useState(false);

  const onChangeText = (text) => {
    if (text === 'TextInputPassword') setPasswordVisibility(!passwordVisibility);
  };
  const { t } = useTranslation();

  const OnRegisterPress = () => {
    navigation.navigate(RouteName.REGISTER_SCREEN);
  }

  function onLogin() {
    //start the loader for button
    setapiHelper(true)
    //handle API and save token to Keystore so Splash can listen it
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      setapiHelper(false)
      return
    }
    if (!password.value) {
      setapiHelper(false)
      return alert("Please Input Password");
    }

    const toSend = {
      email: email.value,
      password: password.value
    }

    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(toSend),
      headers: {
        'Accept': '*/*',
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        setapiHelper(false)
        if (response.status === 403) {
          alert('Email Not Verified')
          // throw new Error("Email Not Verified"); // Throw an error to skip the subsequent .then() blocks
        }
        else if (response.status === 401) {
          alert('Invalid Credentials')
          // throw new Error("Wrong credentials"); // Throw an error to skip the subsequent .then() blocks
        }
        else if (response.ok) {
          return response.json();
        }
        else {
          // throw new Error('Network response was not ok.');
          alert("Network Error")
        }
      }
      )
      .then(data => {
        console.log("see token", data.access_token);
        if (data.access_token) {
          dispatch(loginUser(data.user));
          Keychain.setGenericPassword('token', data.access_token)
            .then(() => data.access_token);
          return navigation.reset({
            index: 0,
            routes: [{ name: RouteName.HOME_SCREEN }],
          })
        } else {
          alert('Invalid Credentials')
        }
      })
      .catch(error => {
        // setapiHelper(false)
        console.log(error)
        if (error.message === 'Network request failed') {
          setapiHelper(false)
          alert("SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION")
        }
        // console.error('Login', error);
      });
  }

  return (
    <Container>
      <View style={Logins.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Logins.ContentContainerStyle}>
          <View style={Logins.Container}>
            <View style={Styles.MinViewContent}>
              <View style={Logins.ManViewLogins}>
                <Image style={Logins.ImageSet} resizeMode='cover' source={images.App_logo_AIM} />
              </View>
              <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
              <Spacing space={SH(20)} />
              <View style={Logins.InputSpaceView}>
                <Input
                  placeholder={t("Mobile_Number")}
                  onChangeText={(text) => setEmail({ value: text, error: '' })}
                  error={!!email.error}
                  errorText={email.error}
                  autoCapitalize="none"
                  value={email.value}
                  inputType="default"
                  placeholderTextColor={Colors.gray_text_color}
                />
              </View>
              <Spacing space={SH(20)} />
              <View style={Styles.FlexRowPassword}>
                <Input
                  inputStyle={Logins.InputPassword}
                  name="password"
                  value={password.value}
                  placeholder={t("Password_Text")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor={Colors.gray_text_color}
                  textContentType="newPassword"
                  secureTextEntry={passwordVisibility}
                  enablesReturnKeyAutomatically
                  onChangeText={(text) => setPassword({ value: text, error: '' })}
                />
                <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }} style={Logins.eyeiconset}>
                  <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={SF(20)} />
                </TouchableOpacity>
              </View>
              <Spacing space={SH(10)} />
              <View style={Logins.ViewTextStyle}>
                <Text style={Logins.TextStyle}>{t("Dont_Have_Account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
              </View>
              <Spacing space={SH(20)} />
              <View style={Logins.LoginButton}>
                <Button
                  title={t("Login_Text")}
                  loading={apiHelper}
                  onPress={() => onLogin()}
                />
              </View>
              <Spacing space={SH(10)} />
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.Forget_Password)}>
                <Text style={Logins.ForgetPasswordStyles}>{t("Forgot_Password")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}
export default LoginScreen;
