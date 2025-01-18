import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
import { Input, Button, CheckBox, Spacing, Countrycode } from '../../../components';
import { SH, SF } from '../../../utils';
import { RouteName } from '../../../routes';
import { Login, Style } from '../../../styles';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { emailValidator } from '../../../utils/helpers/emailValidator';
import { phoneValidator } from '../../../utils/helpers/phoneValidator';
import { API_BASE_URL } from '../../../utils/helpers/crudHandler';
import { passwordValidator } from '../../../utils/helpers/passwordValidator';

const Register = () => {
    const navigation = useNavigation();
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);
    const [state, setstate] = useState(false)
    const [apiHelper, setapiHelper] = useState(false);

    const stateArray = {
        username: "",
        emailId: "",
        mobileNumber: "",
        textInputPassword: "",
        toggleCheckBox: false,
    };
    const stateErrorArray = {
        username: "",
        emailId: "",
        mobileNumber: "",
        textInputPassword: "",
        toggleCheckBox: false,
        toggleMsg: ""
    };
    const [stateMain, setState] = useState(stateArray);
    const [stateError, setStateError] = useState(stateErrorArray);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const { t } = useTranslation();
    const onChangeText = (text, type) => {
        if (text === 'TextInputPassword') setPasswordVisibility(!passwordVisibility);
    };

    useEffect(() => {
        if (stateMain.toggleCheckBox) {
            setStateError({ ...stateError, toggleMsg: "" })
            // setapiHelper(false)
            return
        }

        return () => {
            console.log("cleaning")
        }
    }, [stateMain.toggleCheckBox])

    function onRegister() {
        setapiHelper(true)
        const emailError = emailValidator(stateMain.emailId)
        const phoneError = phoneValidator(stateMain.mobileNumber)
        const passwordError = passwordValidator(stateMain.textInputPassword)
        if (!stateMain.username) {
            setStateError({ ...stateError, username: "Add a Username" })
            setapiHelper(false)
            return
        }
        if (phoneError) {
            setStateError({ ...stateError, mobileNumber: phoneError })
            setapiHelper(false)
            return
        }
        if (emailError) {
            setStateError({ ...stateError, emailId: emailError })
            setapiHelper(false)
            return
        }
        if (passwordError) {
            setStateError({ ...stateError, textInputPassword: passwordError })
            setapiHelper(false)
            return
        }
        if (!stateMain.toggleCheckBox) {
            setStateError({ ...stateError, toggleMsg: "please tick" })
            setapiHelper(false)
            return
        }

        const toSend = {
            name: stateMain.username,
            email: stateMain.emailId.toLowerCase(),
            password: stateMain.textInputPassword,
            password_confirmation: stateMain.textInputPassword,
            phone: `0${stateMain.mobileNumber}`
        }
        console.log("we are sending", toSend)
        fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(toSend),
            headers: {
                'Accept': '*/*',
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json(); // Success, continue processing
                } else if (response.status >= 400 && response.status < 500) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.msg); // Throw an error with the error message from the response body
                    });
                } else {
                    throw new Error('Network error'); // Handle other status codes if needed
                }
            })
            .then((data) => {
                console.log("user registered", data);
                setapiHelper(false);
                navigation.navigate(RouteName.REGISTRATION_SUCCESSFUL);
            })
            .catch(error => {
                setapiHelper(false);
                console.log('Error:', error.msg);
                alert(error); // Display the error message in an alert
            });
    }
    return (
        <View style={Logins.MinViewBgColor}>
            <ScrollView
                contentContainerStyle={Styles.ScrollViewStyle}>
                <View style={Logins.Container}>
                    <View style={Styles.MinViewContent}>
                        <View style={Logins.TopSpaceRegister}>
                            <Text style={Logins.RegisterText}>{t("Sign_Up_Text")}</Text>
                        </View>
                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Full_Name_Text")}</Text>
                        </View>
                        <Input
                            value={stateMain.username}
                            error={!!stateMain.username}
                            errorText={stateError.username}
                            placeholder={t("Enter_Your_Name")}
                            onChangeText={(text) => { setState({ ...stateMain, username: text }), setStateError({ ...stateError, username: "" }) }}
                        />
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Mobile_number")}</Text>
                        </View>
                        <View style={Logins.MinVieCountry}>
                            <View style={Logins.DropDownIconFlex}>
                                <Countrycode />
                            </View>
                            <Input
                                placeholder={t("Mobile_Number")}
                                onChangeText={(text) => { setState({ ...stateMain, mobileNumber: text }), setStateError({ ...stateError, mobileNumber: '' }) }}
                                value={stateMain.mobileNumber}
                                // error={!!state.mobileNumber}
                                // errorText={stateError.mobileNumber}
                                maxLength={10}
                                inputType="numeric"
                                placeholder="3102389993"
                                placeholderTextColor={Colors.gray_text_color}
                                inputStyle={Logins.Inputstyle}
                            />
                        </View>
                        {stateError.mobileNumber ? <Text style={{ color: 'red' }}>{stateError.mobileNumber}</Text> : null}
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Email_Text")}</Text>
                        </View>
                        <Input
                            placeholder={t("Enter_Your_Email")}
                            onChangeText={(text) => { setState({ ...stateMain, emailId: text }), setStateError({ ...stateError, emailId: '' }) }}
                            value={stateMain.emailId}
                            error={!!stateMain.emailId}
                            errorText={stateError.emailId}
                            placeholderTextColor={Colors.gray_text_color}
                        />
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpaceRegisterTwo}>
                            <Text style={Logins.FirstNameTextStyle}>{t("Password_Text")}</Text>
                        </View>
                        <View style={Styles.FlexRowPassword}>
                            <Input
                                inputStyle={Logins.InputPassword}
                                name="password"
                                value={stateMain.textInputPassword}
                                placeholder={t("Password_Text")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                // error={!!state.textInputPassword}
                                // errorText={stateError.textInputPassword}
                                placeholderTextColor={Colors.gray_text_color}
                                textContentType="newPassword"
                                secureTextEntry={passwordVisibility}
                                enablesReturnKeyAutomatically
                                onChangeText={(text) => { setState({ ...stateMain, textInputPassword: text }), setStateError({ ...stateError, textInputPassword: "" }) }}
                            />
                            <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }} style={Logins.eyeiconset}>
                                <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={SF(20)} />
                            </TouchableOpacity>
                        </View>
                        {stateError.textInputPassword ? <Text style={{ color: 'red', alignSelf: 'flex-start' }}>{stateError.textInputPassword}</Text> : null}
                        <Spacing space={SH(30)} />
                        <View style={Logins.FlexRowChekBox}>
                            <View>
                                <CheckBox disabled={false}
                                    value={stateMain.toggleCheckBox}
                                    tintColors={{ true: Colors.theme_background, false: Colors.theme_background }}
                                    onValueChange={(text) => { setState({ ...stateMain, toggleCheckBox: text }), setStateError({ ...stateError, toggleCheckBox: false }) }} />
                            </View>
                            <Text style={Logins.SimpleTextStyle}>{t("I_Agree_Text")} <Text style={Logins.borderbottomTwo}><Text style={Logins.bluecolor} onPress={() => Linking.openURL('https://aim-motors.com/terms')}> {t("Terms_Of_Service")}  </Text></Text>{t("And_Text")}  <Text onPress={() => Linking.openURL('https://aim-motors.com/policy')} style={Logins.bluecolor}>{t("Privacy_Policy")}</Text></Text>
                        </View>
                        {!stateError.toggleCheckBox ? <Text style={{ color: 'red', alignSelf: 'flex-start' }}>{stateError.toggleMsg}</Text> : null}
                        <Spacing space={SH(10)} />
                        <View style={Logins.ButtonView}>
                            <Button
                                title={t("Sign_Up_Text")}
                                loading={apiHelper}
                                onPress={() => onRegister()}
                            />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpace}>
                            <View style={Logins.AlredyAndLoginBox}>
                                <Text style={Logins.MemberTextStyle}>{t("Already_Member")}</Text>
                                <TouchableOpacity onPress={() => navigation.replace(RouteName.LOGIN_SCREEN)}>
                                    <Text style={Logins.LoginScreenText}>{t("Login_Text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Register;
