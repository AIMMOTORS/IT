import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput,ToastAndroid ,Alert} from 'react-native';
import { Style, DetailsScreenStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Spacing, Lottie, Button, Container } from '../../components';
import { SH, Colors, SF } from '../../utils';
import images from '../../index';
import { useSelector, useDispatch } from "react-redux";
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';
import crudHandler from '../../utils/helpers/crudHandler';
import { PinCode } from './secretHanlder';
import { get_bike_data } from '../../redux/action/DataAction';
import ShareModal from '../../utils/helpers/qrgenerator';



const DetailsScreen = (props) => {
    const { navigation, route } = props;
    const { t } = useTranslation();
    const [isEditing, setIsEditing] = useState(false);
    const [bikeName, setBikeName] = useState(route.params.bikeInfo.bike_name);
    const [data, setData] = useState("")
    console.log("See props data", route.params.bikeInfo)
    const info = route.params.bikeInfo;
    const dispatch = useDispatch();
    // const { userdata } = useSelector(state => state.DataReducer) || {};
    const { userdata, bikedata } = useSelector(state => state.DataReducer) || {userdata, bikedata};
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);
    const [value, SetValue] = useState(1);
    const [isModalVisible, setModalVisible] = useState(false);

    const { onAction } = route.params;

    // to make connection with bike
    useEffect(() => { 
        getdata()

        return () => {
            //clear
        }
    },[])

    const hideQRCodeModal = () => {
        setModalVisible(false);
      };
    


    const showQRCodeModal = () => {
        setModalVisible(true);
      };



    async function getdata() {
        console.log(info.mac)
        const result = info.mac.split(":").slice(-2).join("").toUpperCase();
        console.log(result);  // Output: EFE2

        let msg = await PinCode(result)
        if(msg == "failed"){
            ToastAndroid.show("CONNECTION WITH BIKE FAILED",ToastAndroid.SHORT)
            return
        }

        fetch('http:192.168.4.1/read')
            .then((res) => res.json())
            .then((data) => {
                console.log("data inside fetch", data);
                setData(data)
                dispatch(get_bike_data(data));
            })
            .catch((err) => console.log(err))
    
        // console.log("logged data",data )
    }
    // console.log("logged data",data )

    // async function getdata() {
    //     let data = await crudHandler.read(`/bike/${info.mac}`)
    //     console.log("bike params",data);
    //     setData(data)
    // }
    
    
    const handleEditStart = () => {
        setIsEditing(true);
    };

    
    const handleSave = async() => {
        // Your logic for saving the edited data goes here
        setIsEditing(true);
        const toSend = {
            bikeName: bikeName,
            macAddress: route.params.bikeInfo.mac
        }
        console.log("data", toSend);
        // const { id } = route.params.bikeInfo;
        const editedBikeName = await crudHandler.create("/editbike",toSend);
        onAction()
        // alert(editedBikeName.message);
        Alert.alert(
            '',
            editedBikeName.message,
            [
              { text: 'OK'},
            ],
            { cancelable: false }
          )
        
        console.log(bikeName);
        // props.route.params.updateBikeName(route.params.bikeInfo.id, bikeName);
        setIsEditing(false);
        
    };

    const handleCancel = () => {
        setIsEditing(false);
    };


    
console.log(route.params.bikeInfo.bike_id);
    


    return (
        <Container>
            <View style={DetailsScreenStyles.MinViewScreen}>
                <View style={DetailsScreenStyles.BackViewWrap}>
                    <TouchableOpacity style={DetailsScreenStyles.BackView} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                        <Icon name='arrowleft' size={SF(25)} color={Colors.black_text_color} />
                    </TouchableOpacity>
                    <Text style={DetailsScreenStyles.HeadLabel}>{t("Details_Label")}</Text>
                    {
                        value == 1 ?
                        //navigate to qrcode screen
                            <TouchableOpacity style={DetailsScreenStyles.BackView}     onPress={showQRCodeModal}  > 
                                <Icon name={'sharealt'} size={SF(22)} color={Colors.blue} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={DetailsScreenStyles.BackView} onPress={() => alert("You are not the owner of the Bike")}>
                                <Icon name={'exclamation'} size={SF(22)} color={Colors.black_text_color} />
                            </TouchableOpacity>
                    }

                </View>
                <View style={DetailsScreenStyles.VehicleDetails}>

                    {userdata != "" ?
                        < Image source={images.Car_1} style={DetailsScreenStyles.VehicleImage} resizeMode="contain" />
                        :
                        <Image source={images.Car_1} style={DetailsScreenStyles.VehicleImage} resizeMode="contain" />
                    }
                </View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={DetailsScreenStyles.contentContainerStyle}>
                    <View style={DetailsScreenStyles.ContainerWrap}>
                        {/* <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <TextInput style={DetailsScreenStyles.CarModalName}>{info.bikeName}</TextInput>
                    </TouchableOpacity>
                    <MaterialIcons name='edit' size={SF(18)} color='black' style={{paddingTop:SF(14)}}/>
                    </View> */}
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleEditStart}>
                                {isEditing ? (
                                    <TextInput
                                        style={DetailsScreenStyles.CarModalName}
                                        value={bikeName}
                                        onChangeText={(text) => setBikeName(text)}
                                    />
                                ) : (
                                    <TextInput
                                        style={DetailsScreenStyles.CarModalName}
                                        value={bikeName}
                                        editable={false}
                                    />
                                )}
                            </TouchableOpacity>

                            {isEditing ? (
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={handleSave}>
                                        <MaterialIcons name="check" size={18} color="green" style={{ paddingTop: 14 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleCancel}>
                                        <MaterialIcons name="close" size={18} color="red" style={{ paddingTop: 14 }} />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <TouchableOpacity onPress={handleEditStart}>
                                    <MaterialIcons name="edit" size={18} color="black" style={{ paddingTop: 14 }} />
                                </TouchableOpacity>
                            )}
                        </View>

                        <Spacing space={SH(5)} />
                        <Text style={DetailsScreenStyles.DetailsData}>{t("DetailsData")}</Text>
                    </View>
                    <Spacing />
                    <View style={DetailsScreenStyles.DetailsOverview}>
                        <Text style={DetailsScreenStyles.OverviewLabel}>{t("Overview_Label")}</Text>
                        <Spacing space={SH(60)} />
                        <View style={DetailsScreenStyles.FlexRowAlcent}>
                            <View style={DetailsScreenStyles.DetailsOverviewBox}>
                                <View style={DetailsScreenStyles.SpeedMeterwrap}>
                                    <Lottie source={images.SpeedMeter} Lottiewidthstyle={DetailsScreenStyles.SpeedMeter} />
                                </View>
                                <Spacing />
                                <Text style={DetailsScreenStyles.SpeedMeterText}>speed average</Text>
                                <Text style={DetailsScreenStyles.SpeedMeterText}>{bikedata.speed_avg}{t("SpeedMeter")}</Text>
                            </View>
                            <View style={DetailsScreenStyles.DetailsOverviewBox}>
                                <View style={DetailsScreenStyles.SpeedMeterwrap}>
                                    <Lottie source={images.carAuto} Lottiewidthstyle={DetailsScreenStyles.DriveIcon} />
                                </View>
                                <Spacing />
                                <Text style={DetailsScreenStyles.SpeedMeterText}>km of last swap trip</Text>
                                <Text style={DetailsScreenStyles.SpeedMeterText}>{bikedata.last_ST_kms} {t("Automation_Label")}</Text>
                            </View>
                        </View>
                        <Spacing space={SH(60)} />
                        <View style={DetailsScreenStyles.FlexRowAlcent}>
                            <View style={DetailsScreenStyles.DetailsOverviewBox}>
                                <View style={DetailsScreenStyles.SpeedMeterwrap}>
                                    <Lottie source={images.fuel_pump} Lottiewidthstyle={DetailsScreenStyles.FuelIcon} />
                                </View>
                                <Spacing />
                                <Text style={DetailsScreenStyles.SpeedMeterText}>SOC</Text>
                                <Text style={DetailsScreenStyles.SpeedMeterText}>{bikedata.current_SOC} {t("Disel_Label")}</Text>
                            </View>
                            <View style={DetailsScreenStyles.DetailsOverviewBox}>
                                <View style={DetailsScreenStyles.SpeedMeterwrap}>
                                    <Lottie source={images.carclouds} Lottiewidthstyle={DetailsScreenStyles.DriveIcon} />
                                </View>
                                <Spacing />
                                <Text style={DetailsScreenStyles.SpeedMeterText}>km of this swap trip</Text>
                                <Text style={DetailsScreenStyles.SpeedMeterText}>{bikedata.current_ST_kms} {t("Seat")}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* 
                <View style={[DetailsScreenStyles.FlexRowAlcentSpBtn, DetailsScreenStyles.PaddHori, DetailsScreenStyles.Bgtheme]}>

                    {
                        userdata.Price && userdata.dayTime != "" ?
                            <View style={[DetailsScreenStyles.FlexRowAlcent, DetailsScreenStyles.PriceView]}>
                                <IconFA name='dollar' size={SF(18)} color={Colors.white_text_color} />
                                <Text style={DetailsScreenStyles.Price}>{t(userdata.Price)}/</Text>
                                <Text style={DetailsScreenStyles.DayTime}>{t(userdata.dayTime)}</Text>
                            </View>
                            :
                            <View style={[DetailsScreenStyles.FlexRowAlcent, DetailsScreenStyles.PriceView]}>
                                <IconFA name='dollar' size={SF(18)} color={Colors.white_text_color} />
                                <Text style={DetailsScreenStyles.Price}>{t("Price")}/</Text>
                                <Text style={DetailsScreenStyles.DayTime}>{t("Day_Label")}</Text>
                            </View>
                    }

                    <View style={[DetailsScreenStyles.PriceView,]}>
                        <Button title={t("Next_Text")} buttonStyle={{ backgroundColor: Colors.star_color }} onPress={() => navigation.navigate(RouteName.DATE_AND_TIME_SCREEN)} />
                    </View>
                </View> */}
            </View>
            <ShareModal
        isVisible={isModalVisible}
        onClose={hideQRCodeModal}
        userId={2}  // Change this to the actual user ID
        bikeId={route.params.bikeInfo.bike_id}  // Change this to the actual bike ID
      />
        </Container>
    );
};
export default DetailsScreen;
