import React, { useEffect, useRef,useMemo } from "react";
import { View, ScrollView, KeyboardAvoidingView, Animated, Easing,Text } from "react-native";
import { Login } from '../../../styles';
import { Button, Spacing } from '../../../components';
import images from '../../../index';
import RouteName from '../../../routes/RouteName';
import Lottie from 'lottie-react-native';
import { SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const RegistrationSuccessful = ({ navigation }) => {
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const animationProgress = useRef(new Animated.Value(0))
  const { t } = useTranslation();
  const OnLoginsPress = () => {
    navigation.replace(RouteName.LOGIN_SCREEN);
  }

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <View style={Logins.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Logins.ContentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={Logins.KeyBordTopViewStyle}>
            <View style={Logins.MinFlexView}>
              <View style={Logins.MinViewSecond}>
                <Lottie
                  resizeMode="contain"
                  autoPlay={true}
                  source={images.Account_created}
                  progress={animationProgress.current}
                />
                <Spacing space={SH(350)} />
                <Text style={{textAlign:'center',paddingBottom:SH(20 )}}>You need to verify before Login</Text>
                <View style={Logins.AccountButton}>
                  <Button
                    title={t("Get_Started")}
                    onPress={() => OnLoginsPress()}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegistrationSuccessful;