import React, { useState, useMemo,useEffect } from "react";
import { View, StatusBar } from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { RouteName } from '../../routes';
import { Lottie } from '../../components';
import { Colors } from '../../utils';
import { useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';


const SplashScreen = ({ navigation }) => {

    const { Colors } = useTheme();
    const Styles = useMemo(() => Style(Colors), [Colors]);

    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(Colors.bgWhite);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            Keychain.getGenericPassword()
              .then(credentials => {
                if (credentials) {
                  navigation.replace(RouteName.HOME_SCREEN);
                } else {
                  navigation.replace(RouteName.SWIPER_SCREEN);
                }
              })
              .catch(error => {
                console.log(error);
              });
          }, 2000);
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action(Colors.theme_background))
        }
    }, []);
    
    return (
        <View style={Styles.SplashMinView}>
            <View style={Styles.MinViewStyleSplash}>
                <Lottie source={images.Splash_Swiper} />
            </View>
        </View>
    );
};
export default SplashScreen;
