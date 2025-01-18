import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList,Image, TouchableOpacity, RefreshControl, StatusBar, Modal, StyleSheet } from 'react-native';
import RouteName from '../../routes/RouteName';
import { Button, Container, AppHeader, Input, Spacing } from '../../components';
import crudHandler from "../../utils/helpers/crudHandler";
import { Colors } from "../../utils";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { ProfileTabStyles } from '../../styles';
import IconG from 'react-native-vector-icons/Ionicons';
import { SH, SF } from '..//../utils';
import IconF from 'react-native-vector-icons/AntDesign';
import { API_BASE_URL } from '../../utils/helpers/crudHandler';
import * as Keychain from 'react-native-keychain';
import { newPasswordValidator } from '../../utils/helpers/newPasswordValidator';
import { confirmPasswordValidator } from '../../utils/helpers/confirmPasswordValidator';
import Icon from 'react-native-vector-icons/EvilIcons';

import { CardStyle } from '../../styles';

import images from '../../images';

const ShowCardsPage = ({ navigation }) => {


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




  const [modalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation();
  const { Colors } = useTheme();
  const [cards, setCards] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const [passwordVisibilityold, setpasswordVisibilityold] = useState(true);
  const [passwordVisibilitynew, setpasswordVisibilitynew] = useState(true);
  const [passwordVisibilityconfirm, setPasswordVisibilityconfirm] = useState(true);
  const [selectedCardId, setSelectedCardId] = useState(null); // New state to store selected swap_card_id
  const CardStyles = useMemo(() => CardStyle(Colors), [Colors]);

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const data = await crudHandler.read('/swapcardlst');
      setCards(data[0]); // Assuming the API response is an array of cards
      console.log('api', data[0]);
    } catch (error) {
      if (error.message === 'Network request failed') {
        ToastAndroid.show('SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION', ToastAndroid.SHORT);
      }
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false);
    }
  };


  const handleApiCall = async () => {
    const newPasswordError = newPasswordValidator(state.Newpassword)
    const confirmPasswordError = confirmPasswordValidator(state.Newpassword, state.Confirmpassword)
    if (newPasswordError) {
      setStateError({ ...stateError, Newpassword: newPasswordError })
      return
    }

    if (confirmPasswordError) {
      setStateError({ ...stateError, Confirmpassword: confirmPasswordError })
      return
    }

    try {
      const requestBody = {
        swap_card_id: selectedCardId, // Use the selectedCardId from state
        old_password: state.Oldpassword,
        password: state.Newpassword,
        password_confirmation: state.Confirmpassword,
      };

      // Your API call logic
      const credentials = await Keychain.getGenericPassword();
      if (!credentials) {
        throw new Error('No credentials stored');
      }
      const response = await fetch(`${API_BASE_URL}/editCardPin`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          Authorization: `Bearer ${credentials.password}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Fetch response', response);
      // Handle different response statuses here

      // Close the modal
      setModalVisible(false);

      // Additional logic as needed (e.g., navigation, alerts)
      if (response.status === 401) {
        // alert('The new provided pin number is incorrect');
      } else if (response.status === 400) {
        alert('Current pin is incorrect');
      } else {
        navigation.navigate(RouteName.CARDS_SCREEN);
        alert('PIN updated successfully');
      }
    } catch (error) {
      console.error('Error changing pin:', error);
      alert('Unable to change the swap card pin');
      // Handle network request failed error and other errors here
    }
  };


  useEffect(() => {
    // Reset the state values when the modal is closed
    if (!modalVisible) {
      setState(stateArray);
      setStateError(stateErrorArray);
      setSelectedCardId(null);
      setpasswordVisibilityold(true);
      setpasswordVisibilitynew(true);
      setPasswordVisibilityconfirm(true);
    }
  }, [modalVisible]);


  useEffect(() => {
    fetchData();
  }, []);


  const handleEditPress = (swap_card_id) => {

    setSelectedCardId(swap_card_id); // Set the selected swap_card_id in state
    setModalVisible(true);


  };
  const renderItem = ({ item }) => (

    <View style={CardStyles.CardContainer}>
       <View >
                <Image source={images.Card}
                  resizeMode="contain"
                  style={CardStyles.imageStyle}
                />
              </View>
      <View>
        <Text style={ProfileTabStyle.PhoneNumberText}>{t("Card_number")}</Text>
        <Text style={ProfileTabStyle.DigssitNumberText}>{item.number}</Text>
      </View>
      {/* <Text style={ProfileTabStyle.CardText}>{t("Card_id")}  {item.swap_card_id}</Text> */}
      {/* <Text style={ProfileTabStyle.CardText}>{t("Card_number")}</Text> */}
      {/* <Text style={ProfileTabStyle.CardText}>{item.number}</Text> */}
      {item.swap_card_owner == '1' && (
        <View>
          <TouchableOpacity
            onPress={() => handleEditPress(item.swap_card_id)}
          >
            <View  style={CardStyles.pencil}>
              <Icon
                size={SF(30)}
                name="pencil"
                color={Colors.theme_background}
              />
            </View>
          </TouchableOpacity>
        </View>
        // <View>
        //   <Button title={t("changePinButton")} onPress={() => handleEditPress(item.swap_card_id)} />
        // </View>
      )}
    </View>
  );

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      {/* <AppHeader Iconname={true} headerTitle={t("Cards_Screen")} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} /> */}
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.swap_card_id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }
      />


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible) }}
      >
        <View style={CardStyles.CenteredView}>
          <View style={CardStyles.ModalView}>
            <View style={CardStyles.ShadowStyleModalTwo}>
              <View style={CardStyles.AllPaddingModal}>
                <TouchableOpacity style={CardStyles.IconClose} onPress={() => setModalVisible(!modalVisible)}>
                  <IconF
                    size={SF(25)}
                    name="close"
                    color={Colors.black_text_color}
                  />
                </TouchableOpacity>

                <View>

                  <Text style={CardStyles.ModalText}>{t("Change_Your_Pin")}</Text>
                  {/* <Text style={ProfileTabStyle.ModalText2}>{`Selected Card ID : ${selectedCardId}`}</Text> */}
                  <View style={CardStyles.spaceview}>
                    <View style={CardStyles.InputUnderLine}>
                      <View style={CardStyles.InputView}>

                        <Input
                          inputStyle={CardStyles.TextPasswored}
                          name="password"
                          placeholder={t("Old_Pin")}
                          autoCapitalize="none"
                          autoCorrect={false}
                          textContentType="newPassword"
                          secureTextEntry={passwordVisibilityold}
                          onChangeText={(text) => setState({ ...state, Oldpassword: text })}
                          value={state.Oldpassword}
                          placeholderTextColor={Colors.gray_text_color}
                          maxLength={4}
                          keyboardType='numeric'


                        />
                        
                        <TouchableOpacity onPress={() => { onChangeText("Oldpassword") }}>
                          <IconG name={passwordVisibilityold ? 'eye-off' : 'eye'} size={SF(25)} style={ProfileTabStyle.eyeiconset} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={CardStyles.spaceview}>
                    <View style={CardStyles.InputUnderLine}>
                      <View style={CardStyles.InputView}>
                        <Input
                          inputStyle={CardStyles.TextPasswored}
                          name="password"
                          value={state.Newpassword}
                          error={!!state.Newpassword}
                          // errorText={stateError.Newpassword}
                          placeholder={t("New_Pin")}
                          autoCapitalize="none"
                          placeholderTextColor={'gray'}
                          autoCorrect={false}
                          textContentType="newPassword"
                          secureTextEntry={passwordVisibilitynew}
                          onChangeText={(text) => { setState({ ...state, Newpassword: text }), setStateError({ ...stateError, Newpassword: '' }) }}
                          enablesReturnKeyAutomatically
                          keyboardType='numeric'
                          maxLength={4}
                        />
                        <TouchableOpacity onPress={() => { onChangeText("Newpassword") }}>
                          <IconG name={passwordVisibilitynew ? 'eye-off' : 'eye'} size={SF(25)} style={ProfileTabStyle.eyeiconset} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {!!state.Newpassword && <Text style={CardStyles.ErrorMessage}>{stateError.Newpassword}</Text>}

                  </View>
                  <View style={CardStyles.spaceview}>
                    <View style={CardStyles.InputUnderLine}>
                      <View style={CardStyles.InputView}>
                        <Input
                          inputStyle={CardStyles.TextPasswored}
                          name="Confirm New Password"
                          placeholder={t("Conform_Pin")}
                          placeholderTextColor={Colors.gray_text_color}
                          autoCapitalize="none"
                          autoCorrect={false}
                          textContentType="newPassword"
                          secureTextEntry={passwordVisibilityconfirm}
                          onChangeText={(text) => { setState({ ...state, Confirmpassword: text }), setStateError({ ...stateError, Confirmpassword: '' }) }}
                          value={state.Confirmpassword}
                          error={!!state.Confirmpassword}
                          // errorText={stateError.Confirmpassword}
                          enablesReturnKeyAutomatically
                          keyboardType='numeric'
                          maxLength={4}

                        />
                        <TouchableOpacity onPress={() => { onChangeText("Confirmpassword") }}>
                          <IconG name={passwordVisibilityconfirm ? 'eye-off' : 'eye'} size={SF(25)} style={ProfileTabStyle.eyeiconset} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {!!state.Newpassword && <Text style={CardStyles.ErrorMessage}>{stateError.Newpassword}</Text>}

                </View>



                <Spacing space={SH(10)} />


                <View style={CardStyles.ButtonsetModleTwoButton}>
                  <View style={CardStyles.Marginright}>

                    <Button onPress={handleApiCall}
                      buttonTextStyle={{ color: Colors.white_text_color }} title={t("Ok")} />
                  </View>
                  <View style={CardStyles.Marginright}>
                    <Button buttonStyle={CardStyles.SingleButtonStyles} buttonTextStyle={CardStyles.SingleButtonText} title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} />
                  </View>
                </View>



              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Container>
  );
};



export default ShowCardsPage;
