import React, { useMemo, useState } from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { FavouriteTabStyle } from '../../styles';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import { Button, Spacing } from "../../components";
import IconFA from 'react-native-vector-icons/FontAwesome';
import { SF, SH, Colors } from "../../utils";
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme, useNavigation } from '@react-navigation/native';

function FavouriteTabFlateList(props) {
    const { item, index } = props;
    const navigation = useNavigation();
    const { t } = useTranslation();

    const [likedHeart, setLikedHeart] = useState([]);

    const { Colors } = useTheme();
    const FavouriteTabStyles = useMemo(() => FavouriteTabStyle(Colors), [Colors]);

    return (
        <View style={FavouriteTabStyles.RetingFlatBox}>
            <TouchableOpacity
                onPress={() => {
                    if (likedHeart.includes(index)) {
                        let unlike = likedHeart.filter((elem) => elem !== index);
                        setLikedHeart(unlike);
                    } else {
                        setLikedHeart([...likedHeart, index]);
                    }
                }} style={FavouriteTabStyles.LikeStyle}>
                <Icon name={'heart'} size={SF(25)} color={likedHeart.includes(index) ? Colors.gray_text_color : Colors.red} />
            </TouchableOpacity>
            <TouchableOpacity style={FavouriteTabStyles.VehicleImageBoxWrap} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN)}>
                <View style={FavouriteTabStyles.VehicleImageBox}>
                    <Image source={item.VehicleImage} style={FavouriteTabStyles.VehicleImage} resizeMode="contain" />
                </View>
            </TouchableOpacity>
            <Spacing space={SH(8)} />
            <View style={[FavouriteTabStyles.FlexAlCentJuSpBtn, FavouriteTabStyles.PaddHor10]}>
                <Text style={FavouriteTabStyles.CarModalName}>{t(item.CarModalName)}</Text>
                <View style={FavouriteTabStyles.FlexAlCent}>
                    <IconFA name='dollar' size={SF(15)} color={Colors.black_text_color} />
                    <Text style={FavouriteTabStyles.Price}>{t(item.Price)} /</Text>
                    <Text style={FavouriteTabStyles.DayTime}>{t(item.dayTime)}</Text>
                </View>
            </View>
            <Spacing space={SH(10)} />
            <View style={[FavouriteTabStyles.FlexAlCentJuSpBtn, FavouriteTabStyles.PaddHor10]}>
                <View style={FavouriteTabStyles.leftBox}>
                    <Image source={item.calenderIcon} style={FavouriteTabStyles.leftIcon} resizeMode="contain" />
                    <View>
                        <Text style={FavouriteTabStyles.DateAndTimeText}>{t(item.dateAndTime)}</Text>
                        <Text style={FavouriteTabStyles.HoursText}>{item.hoursText} {t("Houre_Time_Label")}</Text>
                    </View>
                </View>
                <View style={FavouriteTabStyles.leftBox}>
                    <Image source={item.locationIcon} style={FavouriteTabStyles.leftIcon} resizeMode="contain" />
                    <View>
                        <Text style={FavouriteTabStyles.DateAndTimeText}>{t(item.pickupLabel)}</Text>
                        <Text style={FavouriteTabStyles.HoursText}>{t(item.addresLocation)}</Text>
                    </View>
                </View>
            </View>
            <Spacing space={SH(15)} />
            <Button title={t("Rent_Vehicle")} buttonStyle={FavouriteTabStyles.Button} buttonTextStyle={FavouriteTabStyles.Buttontext} onPress={() => navigation.navigate(RouteName.DATE_AND_TIME_SCREEN)} />
        </View>
    );
};
export default FavouriteTabFlateList;