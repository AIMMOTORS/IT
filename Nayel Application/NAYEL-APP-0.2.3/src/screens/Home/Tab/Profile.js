import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, Text, TouchableOpacity,ScrollView, Image, TextInput, Modal, Alert, ToastAndroid, RefreshControl } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/Ionicons';
import { ProfileTabStyles } from '../../../styles';
import { Button, Input, Spacing , Lottie} from '../../../components';
import { SH, SF } from '../../../utils';
import images from "../../../index";
import RouteName from "../../../routes/RouteName";
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from '@react-navigation/native';
import crudHandler from "../../../utils/helpers/crudHandler";
import { Avatar } from "../../../utils/helpers/avatar";
import {ImagePicker} from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { get_profile_data } from '../../../redux/action/DataAction'
const ProfileTab = (props) => {
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const { navigation } = props;
  const { t , i18n} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const [passwordVisibilityold, setpasswordVisibilityold] = useState(true);
  const [passwordVisibilitynew, setpasswordVisibilitynew] = useState(true);
  const [passwordVisibilityconfirm, setPasswordVisibilityconfirm] = useState(true);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const { profiledata } = useSelector(state => state.DataReducer) || {profiledata};


  const stateArray = {
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  };
  const stateErrorArray = {
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  };
  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);

  const onChangeText = (text) => {
    if (text === 'Oldpassword') setpasswordVisibilityold(!passwordVisibilityold);
    if (text === 'Newpassword') setpasswordVisibilitynew(!passwordVisibilitynew);
    if (text === 'Confirmpassword') setPasswordVisibilityconfirm(!passwordVisibilityconfirm);
  };


  async function getUserName() {
    let username = await crudHandler.read('/appusername');
    dispatch(get_profile_data(username));
    // setUserName(profiledata.user_name)
    // setEmail(profiledata.email)
    // setPhoneNumber(profiledata.phone_number)
    // setProfile(profiledata.profile_image)
  }
  useEffect(() => {
    getUserName()
      .then(() => setLoading(false))
      .catch(error => {
        console.error('Error fetching details:', error);
        if (error.message === 'Network request failed') {
          ToastAndroid.show('SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION',ToastAndroid.SHORT)
        }
        setLoading(false)
        // Display a toast message for the error
        // ToastAndroid.showWithGravityAndOffset(
        //   'Error fetching details',
        //   ToastAndroid.LONG,
        //   ToastAndroid.BOTTOM,
        //   25,
        //   50
        // );
      });
  
    navigation.addListener('focus', () => {
      setModalVisible(false);
      setmodalcontent(0);
    });
  }, [navigation]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getUserName()
      .then(() => setRefreshing(false))
      .catch(error => {
        console.error('Error fetching details:', error);
        if (error.message === 'Network request failed') {
          ToastAndroid.show('SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION',ToastAndroid.SHORT);
        }
        setRefreshing(false);
      });
  }, []);

  const onAvatarChange = () => {

    
  };

  const handleMessage = (message) => {
    Alert.alert(
      '',
      message,
      // 'Profile picture updated successfully',
      [
        { text: 'OK'},
      ],
      { cancelable: false }
    )
  };


  const renderLoading = () => {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Lottie source={images.profile_screen} />
      </View>
    );
  };

  return (
    <>

        <ScrollView
        style={ProfileTabStyle.BackgroundWhite}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
      <View style={ProfileTabStyle.BackgroundWhite}>
        <View style={ProfileTabStyle.whilistminbody}>
          <View style={ProfileTabStyle.ImagCenter}>
            <View>
            <Avatar
          onMessage={handleMessage}
          onChange={onAvatarChange}
          source={profiledata.profile_image ? { uri: `data:image/jpeg;base64,${profiledata.profile_image}` } : images.Avatar}
          />
              <Text style={ProfileTabStyle.UserName}>{profiledata.user_name}</Text>
            </View>
          </View>
          <Spacing space={SH(20)} />
          <View style={ProfileTabStyle.ProfileDetailesMinview}>
           
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.BgWhiteShadow}>
                <View>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Phone_Number")}</Text>
                  <Text style={ProfileTabStyle.DigssitNumberText}>{profiledata.phone_number}</Text>
                </View>
                {/* <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(1) }}
                  >
                    <View>
                      <Icon
                        size={SF(30)}
                        name="pencil"
                        color={Colors.theme_background}
                      />
                    </View>
                  </TouchableOpacity>
                </View> */}
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
              >
                <View style={ProfileTabStyle.CenteredView}>
                  <View style={ProfileTabStyle.ModalView}>
                    <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                      <View style={ProfileTabStyle.AllPaddingModal}>
                        <TouchableOpacity style={ProfileTabStyle.IconClose} onPress={() => setModalVisible(!modalVisible)}>
                          <IconF
                            size={SF(25)}
                            name="close"
                            color={Colors.black_text_color}
                          />
                        </TouchableOpacity>
                        {/* {modalcontent === 1 ?
                          <View>
                            <Text style={ProfileTabStyle.ModalText}>{t("Change_Phone_Number")}</Text>
                            <Spacing space={SH(10)} />
                            <View style={ProfileTabStyle.BgWhiteShadowInputModal}>
                              <Input
                                inputStyle={ProfileTabStyle.input}
                                onChangeText={(text) => setState({ ...state, number: text })}
                                value={state.number}
                                placeholder="9603456878"
                                placeholderTextColor={Colors.theme_background}
                                inputType="numeric"
                                maxLength={10}
                              />
                            </View>
                          </View>
                          :
                          modalcontent === 2 ?
                            <View>
                              <Text style={ProfileTabStyle.ModalText}>{t("Change_Email")}</Text>
                              <Spacing space={SH(10)} />
                              <View>
                                <Input
                                  inputStyle={ProfileTabStyle.BgWhiteShadowInputModal}
                                  onChangeText={(text) => setState({ ...state, email: text })}
                                  value={state.email}
                                  placeholder={t("Exam_Email_Text")}
                                  placeholderTextColor={Colors.gray_text_color}
                                />
                              </View>
                            </View>
                            :
                            modalcontent === 3 ?
                              <View>
                                <Text style={ProfileTabStyle.ModalText}>{t("Change_Your_Password")}</Text>
                                <View style={ProfileTabStyle.spaceview}>
                                  <View style={ProfileTabStyle.InputUnderLine}>
                                    <View style={ProfileTabStyle.InputView}>
                                      <Input
                                        inputStyle={ProfileTabStyle.TextPasswored}
                                        name="password"
                                        placeholder={t("Old_Password")}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        textContentType="newPassword"
                                        secureTextEntry={passwordVisibilityold}
                                        onChangeText={(text) => setState({ ...state, Oldpassword: text })}
                                        value={state.Oldpassword}
                                        enablesReturnKeyAutomatically
                                        placeholderTextColor={Colors.gray_text_color}
                                      />
                                      <TouchableOpacity onPress={() => { onChangeText("Oldpassword") }}>
                                        <IconG name={passwordVisibilityold ? 'eye-off' : 'eye'} size={SF(25)} style={ProfileTabStyle.eyeiconset} />
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                </View>
                                <View style={ProfileTabStyle.spaceview}>
                                  <View style={ProfileTabStyle.InputUnderLine}>
                                    <View style={ProfileTabStyle.InputView}>
                                      <Input
                                        inputStyle={ProfileTabStyle.TextPasswored}
                                        name="password"
                                        placeholder={t("New_Password")}
                                        autoCapitalize="none"
                                        placeholderTextColor={'gray'}
                                        autoCorrect={false}
                                        textContentType="newPassword"
                                        secureTextEntry={passwordVisibilitynew}
                                        onChangeText={(text) => setState({ ...state, Newpassword: text })}
                                        value={state.Newpassword}
                                        enablesReturnKeyAutomatically
                                      />
                                      <TouchableOpacity onPress={() => { onChangeText("Newpassword") }}>
                                        <IconG name={passwordVisibilitynew ? 'eye-off' : 'eye'} size={SF(25)} style={ProfileTabStyle.eyeiconset} />
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                </View>
                                <View style={ProfileTabStyle.spaceview}>
                                  <View style={ProfileTabStyle.InputUnderLine}>
                                    <View style={ProfileTabStyle.InputView}>
                                      <Input
                                        inputStyle={ProfileTabStyle.TextPasswored}
                                        name="Confirm New Password"
                                        placeholder={t("Conform_Password")}
                                        placeholderTextColor={Colors.gray_text_color}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        textContentType="newPassword"
                                        secureTextEntry={passwordVisibilityconfirm}
                                        onChangeText={(text) => setState({ ...state, Confirmpassword: text })}
                                        value={state.Confirmpassword}
                                        enablesReturnKeyAutomatically
                                      />
                                      <TouchableOpacity onPress={() => { onChangeText("Confirmpassword") }}>
                                        <IconG name={passwordVisibilityconfirm ? 'eye-off' : 'eye'} size={SF(25)} style={ProfileTabStyle.eyeiconset} />
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                </View>
                              </View>
                              :
                              null
                        }
                        <Spacing space={SH(10)} />
                        {
                          modalcontent === 1 || modalcontent === 2 || modalcontent === 3 ?
                            <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                              <View style={ProfileTabStyle.Marginright}>
                                <Button onPress={() => setModalVisible(!modalVisible)}
                                  buttonTextStyle={{ color: Colors.white_text_color }} title={t("Ok")} />
                              </View>
                              <View style={ProfileTabStyle.Marginright}>
                                <Button buttonStyle={ProfileTabStyle.SingleButtonStyles} buttonTextStyle={ProfileTabStyle.SingleButtonText} title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} />
                              </View>
                            </View>
                            : */}
                            <View>
                              <Text style={ProfileTabStyle.ModalText}>{t("Are_You_Sure")}</Text>
                              <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                                <View style={ProfileTabStyle.MarginRightView}>
                                  <Button title={t("Log_Out")} onPress={() =>navigation.reset({index: 0,routes: [{ name: RouteName.LOGIN_SCREEN }]})} />
                                </View>
                                <View style={ProfileTabStyle.MarginRightView}>
                                  <Button title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.SingleButtonStyles} buttonTextStyle={ProfileTabStyle.SingleButtonText}
                                  />
                                </View>
                              </View>
                            </View>
                        {/* } */}
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.BgWhiteShadow}>
                <View style={ProfileTabStyle.setpadiingtext}>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Email_Text")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>{profiledata.email}</Text>
                </View>
                {/* <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(2) }}
                  >
                    <View>
                      <Icon
                        size={SF(30)}
                        name="pencil"
                        color={Colors.theme_background}
                      />
                    </View>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
            {/* <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.BgWhiteShadow}>
                <View>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Password_Text")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>******</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => { setModalVisible(true); setmodalcontent(3) }}
                  >
                    <View>
                      <Icon
                        size={SF(30)}
                        name="pencil"
                        color={Colors.theme_background}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View> */}
            <Spacing space={SH(20)} />
        {/* <View > */}

            <TouchableOpacity
              onPress={() => { setModalVisible(true); setmodalcontent(4) }}
            >
              <View style={{flexDirection: i18n.language === 'urdu' ? 'row-reverse' : 'row', alignItems:'center', justifyContent:'space-between' }}>
                <View>
                  <Text style={ProfileTabStyle.LogOutView}>{t("Log_Out")}</Text>
                </View>
                <View>
                  <IconF
                    size={SF(27)}
                    name="arrowright"
                    color={Colors.black_text_color}
                    />
                </View>
              </View>
            </TouchableOpacity>
           
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}
            >
              <View style={{flexDirection: i18n.language === 'urdu' ? 'row-reverse' : 'row', alignItems:'center', justifyContent:'space-between' }}>
                <View>
                  <Text style={ProfileTabStyle.LogOutView}>{t("Setting_Text")}</Text>
                </View>
                <View>
                  <IconF
                    size={SF(27)}
                    name="arrowright"
                    color={Colors.black_text_color}
                  />
                </View>
              </View>
            </TouchableOpacity>
            </View>
          {/* </View> */}
          </View>
        </View>
        </ScrollView>

       
    </>
  );
};
export default ProfileTab;
