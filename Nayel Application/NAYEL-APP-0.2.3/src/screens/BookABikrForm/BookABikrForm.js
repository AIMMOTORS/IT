import React, { useState, useMemo } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Login, Style } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { Button, Container, Input, Spacing } from '../../components';
import { SH, SF } from '../../utils';
import { Lottie } from '../../components';
import images from '../../index';
import { useDispatch, useSelector } from 'react-redux';
import { addBike } from '../../redux/action/BikeAction';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../routes';

const AddBikeForm = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    console.log("hello",useSelector(state=>state.users))
    const {userId, macAddress} = props;
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);

    const { t } = useTranslation();

    const stateArray = {
        userId: userId,
        bikeNo: "",
        bikeName: "",
        chassisNo: "",
        macAddress: macAddress,
        isVerified: false,
    };
    const stateErrorArray = {
        userId: "",
        bikeNo: "",
        bikeName: "",
        chassisNo: "",
        macAddress: "",
        isVerified: false,
    };
    
    const [state, setState] = useState(stateArray);
    const [stateError, setStateError] = useState(stateErrorArray);

    function bikeNoValidator (bikeNo) {
        if (!bikeNo) return "Bike No can't be empty." 
        else if (bikeNo.length != 7) return "Bike No should be exactly 6" 
        else {
          return 
        }
    };

    function chassisNoValidator (chassisNo) {
        const chassisNumberPattern = /^[a-zA-Z0-9]{17}$/;
        if (!chassisNo) return "Chassis No can't be empty."
        if (chassisNumberPattern.test(chassisNo)) {
            return "Invalid chassis number"
        }
    }

    function onAdd() {
        const bikeNoError = bikeNoValidator(state.bikeNo)
        console.log("be",bikeNoError)
        const chassisNoError = chassisNoValidator(state.chassisNo)
        if (bikeNoError) {
            setStateError({ ...stateError, bikeNo: bikeNoError })
            return
        }
        if (state.bikeName.length < 1) {
            setStateError({ ...stateError, bikeName:"Enter Bike Name" })
            return
        }
        if (chassisNoError) {
            setStateError({ ...stateError, chassisNo: chassisNoError })
            return
        }
        const toSend = {
            userId: userId,
            macAddr: macAddress,
            numberPlate: state.bikeNo,
            bikeName: state.bikeName,
            isVerified: false,
            chassisNo: state.chassisNo,
            isOwner: false
        }
        dispatch(addBike(toSend))
        navigation.replace(RouteName.HOME_SCREEN)
    }

  return (
    <View style={Logins.MinViewBgColor}>
      <ScrollView>
        <View style={Logins.Container}>
            <View style={Styles.MinViewContent}>
                <Spacing space={SH(20)} />
                <Text style={Logins.LoginText}>{"Add a Bike"}</Text>
                <View style={[Styles.MinViewStyleSplash, {height: 200}]}>
                    <Lottie source={images.First_Swiper} />
                </View>
                <Spacing space={SH(20)} />
                <View style={Logins.InputSpaceView}>
                    <Input
                        placeholder={"Number Plate (KKH779)"}
                        maxLength={7}
                        onChangeText={(text) => {
                            // Remove any non-alphanumeric characters from the input
                            const formattedText = text.replace(/\W/g, '');
                            // Add the hyphen at the appropriate position
                            const bikeNo = formattedText.replace(/(\w{3})(\w+)/, '$1-$2');
                            setState({ ...state, bikeNo });
                            setStateError({ ...stateError, bikeNo: "" });
                          }}                        
                        errorText={stateError.bikeNo}
                        error={!!stateError.bikeNo}
                        value={state.bikeNo}
                        inputType="default"
                        placeholderTextColor={Colors.gray_text_color}
                    />
                </View>
                <Spacing space={SH(20)} />
                <View style={Logins.InputSpaceView}>
                    <Input
                        placeholder={"Bike Name"}
                        onChangeText={(text) => {setState({ ...state, bikeName: text }),setStateError({...stateError, bikeName:""})}}
                        value={state.bikeName}
                        errorText={stateError.bikeName}
                        error={!!stateError.bikeName}
                        inputType="default"
                        placeholderTextColor={Colors.gray_text_color}
                    />
                </View>
                <Spacing space={SH(20)} />
                <View style={Styles.FlexRowPassword}>
                    <Input
                        inputStyle={Logins.InputPassword}
                        onChangeText={(text) => {setState({ ...state, chassisNo: text }),setStateError({...stateError, chassisNo:""})}}
                        value={state.chassisNo}
                        errorText={stateError.chassisNo}
                        error={!!stateError.chassisNo}
                        placeholder={"Chassis No."}
                        placeholderTextColor={Colors.gray_text_color}
                    />
                </View>
                <Spacing space={SH(20)} />
                <View style={Logins.LoginButton}>
                    <Button
                        title={"Add"}
                        onPress={() => onAdd()}
                    />
                </View>                       
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddBikeForm