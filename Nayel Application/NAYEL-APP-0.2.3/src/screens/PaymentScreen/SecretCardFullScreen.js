import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, TextInput, StatusBar } from "react-native";
import { Creditcard, Style } from '../../styles';
import { Button, Container, AppHeader, Input, Spacing } from '../../components';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Colors } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import crudHandler from "../../utils/helpers/crudHandler";



const SecretcardsScreen = ({ route }) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const Creditcards = useMemo(() => Creditcard(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);
  const navigation = useNavigation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [mobileNumber, setMobileNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const [secret, setSecretNumber] = useState('');
  const [card, setCard] = useState('');
  const [loader, setLoader] = useState(false);

  const { onAction } = route.params;

  // const onChangeText = (text, type) => {
  //   if (type === 'mobile') setMobileNumber(text);
  //   if (type === 'password') setPassword(text);
  //   if (type === 'CvvNumber') setCvvNumber(text);
  //   if (type === 'CardNumber') setCardNumber(text);
  // };
  async function handlePayment() {
    setLoader(true)
    // navigation.replace(RouteName.HOME_SCREEN)
    if (card.length < 12) {
      setLoader(false)
      return alert(t("Card_length_error"))
    }
    if (secret.length < 4) {
      setLoader(false)
      return alert(t("Code_length_error"))
    }
    let res = await crudHandler.create('/addswapcard', { number: card.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3'), pin: secret })
    console.log("check response of card", res)
    if (res.error) {
      setLoader(false)
      alert(res.error)
    }
    if (res.message) {
      onAction()
      setLoader(false)
      alert(res.message)
      navigation.navigate(RouteName.HOME_SCREEN)
    }
  }


  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <AppHeader Iconname={true} headerTitle={t("Payment_Label")} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
      <View style={Creditcards.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={Styles.contentContainerStyle}
        >
          <View style={Creditcards.keybordtopviewstyle}>
            <View style={Creditcards.minflexview}>
              <View style={Creditcards.minviewsigninscreen}>
                <View style={Creditcards.setwidthimage}>
                  <Image source={images.creditcard_img} resizeMode='cover' style={Creditcards.Creditcards} />
                </View>
                <View style={Creditcards.setstyleinputtext}>
                  <Text style={Creditcards.textstyle}>{t("Card_Code")}</Text>
                  <Spacing />
                  <Input
                    placeholder={t("Sample_Code")}
                    // ۸۶۴۴۴۳۵۶۸۲۴۳
                    keyboardType="numeric"
                    maxLength={14}
                    onChangeText={(value) => setCard(value.replace(/-/g, '').replace(/(\d{4})(?=\d)/g, '$1-'))}
                    value={card.replace(/-/g, '').replace(/(\d{4})(?=\d)/g, '$1-')}
                  />
                </View>
                <Text></Text>
                <View style={Creditcards.setstyleinputtext}>
                  <Text style={Creditcards.textstyle}>{t("Secret_Text")}</Text>
                  <Spacing />
                  <Input
                    placeholder="****"
                    inputType="numeric"
                    maxLength={4}
                    onChangeText={setSecretNumber}
                    value={secret}
                    inputStyle={Creditcards.inputstyle}
                    secureTextEntry={true}   
                  />
                </View>
                <View style={Creditcards.setbuttonstyle}>
                  <Button title={t("Add_card")}
                    onPress={handlePayment}
                    loading={loader}
                    buttonStyle={Creditcards.setbuttonCreditcardsavecard}
                    buttonTextStyle={Creditcards.setbuttontextstyle}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>

  );
};

export default SecretcardsScreen;
