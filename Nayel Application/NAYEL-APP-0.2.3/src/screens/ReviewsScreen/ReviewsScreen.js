import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import { HelpScreenStyles } from '../../styles';
import { Button, ConfirmationAlert, Lottie, Spacing , RatingScreen} from '../../components';
import images from "../../index";
import { RouteName } from "../../routes";
import { Colors, SH } from "../../utils";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const ReviewsScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [text, onChangeText] = React.useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  var alertdata = {
    'logout': t("Reviews_Submit_Successful"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }

  const { Colors } = useTheme();
  const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  
  return (
    <View style={HelpScreenStyless.MinViewScreenTwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={HelpScreenStyless.ContentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyless.KeyBordTopViewStyle}>
            <View style={HelpScreenStyless.MinFlexView}>
              <View style={HelpScreenStyless.MinContentView}>
                <Lottie Lottiewidthstyle={HelpScreenStyless.PostionReView} source={images.Reviewsimage_screen} />
                <Text style={HelpScreenStyless.AccountTextTwo}>{t("Please_OnDemand_Service")}</Text>
                <View style={HelpScreenStyless.FlexRowStarSignup}>                 
                  <RatingScreen                   
                  />
                </View>
                <Text style={HelpScreenStyless.AccountTextSuccessfullyTwo}>{t("Please_OnDemand_Two")}</Text>
                <View style={HelpScreenStyless.InputUnderLineReviews}>
                  <TextInput
                    style={HelpScreenStyless.PositionStyleInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={t("Reviews_Enter_Your_Commenet")}
                    placeholderTextColor={Colors.black_text_color}
                  />
                </View>
                <Spacing space={SH(20)} />
                <View style={HelpScreenStyless.AccountButton}>
                  <Button onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.logout);        
                  }} title={t("Reviews_Submit")}
                  />
                </View>
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
        buttonminview={HelpScreenStyless.ButtonView}
        iconVisible={true}
        buttonText={t("Ok")}
      />
    </View>
  );
};
export default ReviewsScreen;
