import React, { useReducer, useMemo } from 'react';
import './i18n';
import { View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Container, DropDown, Lottie, Spacing } from '../../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { LanguageStyles } from '../../../styles';
import { useNavigation, useTheme } from '@react-navigation/native';
import RouteName from '../../../routes/RouteName';
import images from '../../../index';
import { SH } from '../../../utils';

// Define reducer actions
const actionTypes = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_FOCUS: 'SET_FOCUS',
  SET_VALUE: 'SET_VALUE',
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return { ...state, language: action.payload };
    case actionTypes.SET_FOCUS:
      return { ...state, isFocus: action.payload };
    case actionTypes.SET_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

const Translation = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    language: 'en',
    isFocus: false,
    value: 'en',
  });

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const { Colors } = useTheme();
  const LanguageStyless = useMemo(() => LanguageStyles(Colors), [Colors]);

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => dispatch({ type: actionTypes.SET_LANGUAGE, payload: value }))
      .catch((err) => console.log(err));

    dispatch({ type: actionTypes.SET_VALUE, payload: value });
    dispatch({ type: actionTypes.SET_FOCUS, payload: false });
  };

  const DataofDropdown = [
    { label: t("English"), value: 'en' },
    // { label: t("Arabic"), value: 'ara' },
    // { label: t("Spanish"), value: 'Spa' },
    // { label: t("French"), value: 'Fr' },
    { label: t("Urdu"), value: 'urdu' },
  ];

  const confirmButton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  };

  return (
    <Container>
      <View style={LanguageStyless.MinView}>
        <Lottie source={images.Languageanimation} />
        <Spacing space={SH(50)} />
        <View style={LanguageStyless.SelectTagWrap}>
          <Text style={LanguageStyless.SelectText}>{t("Select_Language")}</Text>
          <View
            style={state.isFocus ? LanguageStyless.TranslationDropdown : LanguageStyless.TranslationDropdownOpen}
          >
            <DropDown
              data={DataofDropdown}
              dropdownStyle={LanguageStyless.DropdownStyles}
              onChange={(item) => {
                changeLanguage(item.value);
              }}
              search
              maxHeight={250}
              searchPlaceholder="Search bar"
              IconStyle={LanguageStyless.IconStyle}
              value={state.value}
              onFocus={() => dispatch({ type: actionTypes.SET_FOCUS, payload: true })}
              onBlur={() => dispatch({ type: actionTypes.SET_FOCUS, payload: false })}
              labelField="label"
              valueField="value"
              renderLeftIcon={() => (
                <Icon color="black" name={state.isFocus ? 'arrowup' : 'arrowdown'} size={20} />
              )}
            />
          </View>
        </View>
        <Spacing space={SH(20)} />
        <View style={LanguageStyless.ConfirmButtonView}>
          <Button title={t("Confirm_Text")} onPress={confirmButton} buttonStyle={LanguageStyless.LoginButton} />
        </View>
      </View>
    </Container>
  );
};

export default Translation;
