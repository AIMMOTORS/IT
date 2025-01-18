import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image,  } from 'react-native';
import { HomeTabStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/AntDesign';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { Spacing,} from '../../components';
import { SH, Colors, SF } from '../../utils';
import { get_data_action } from '../../redux/action/DataAction';
import { useSelector, useDispatch } from "react-redux";
import { RouteName } from '../../routes';
import { useTheme, useNavigation } from '@react-navigation/native';
import images from '../../images';

function HomeScreenFlatList(props) {

    const navigation = useNavigation();
    const { t } = useTranslation();


    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

    
    const { item, getdata} = props;
    const dispatch = useDispatch();
    const { detailsStore } = useSelector(state => state.userDataReducer) || { detailsStore };

    const getDataAction = (getDataActiondata) => {
        dispatch(get_data_action(getDataActiondata))
        navigation.navigate(RouteName.DETAILS_SCREEN,{bikeInfo:getDataActiondata, onAction: () => {
            getdata();
          }})
    }
    
    return (
        <TouchableOpacity style={[HomeTabStyless.FlexRow, HomeTabStyless.CarView]} onPress={() => getDataAction(item)}> 
            <View style={HomeTabStyless.CarAvtarWrap}>
                <Image source={images.HomeCarOne} style={HomeTabStyless.CarAvtar} resizeMode="contain" />
            </View>
            <View style={HomeTabStyless.Paddleft}>
                <Text style={HomeTabStyless.CarModalName}>{t(item.bike_name)}</Text>
                <Spacing space={SH(5)} />
                {/* <View style={HomeTabStyless.FlexRow}>
                    <IconMI name='location-pin' size={SF(22)} color={Colors.theme_background} />
                    <Text style={HomeTabStyless.LocationName}>{t(item.LocationName)}</Text>
                </View> */}
                <Spacing space={SH(5)} />
                <View style={HomeTabStyless.FlexRow}>
                    <IconFA name='battery' size={SF(18)} color={Colors.star_color} />
                    <Text style={HomeTabStyless.RatingNumber}>{t(item.bike_name)}</Text>
                    {/* <Text style={HomeTabStyless.ReviewsNumber}>{item.ReviewsNumber} {t("Reviews")}</Text> */}
                </View>
                <Spacing space={SH(8)} />
                <View style={HomeTabStyless.FlexRow}>
                <TouchableOpacity style={[HomeTabStyless.FlexRowAliCent, HomeTabStyless.PriceView]}>
                    {/* <TouchableOpacity style={[HomeTabStyless.FlexRowAliCent, HomeTabStyless.PriceView]}> */}
                        <IconFA name='battery' size={SF(14)} color={Colors.black_text_color} />
                        <Text style={HomeTabStyless.Price}>{t(item.Price)}{item.model} </Text>
                        {/* <Text style={HomeTabStyless.DayTime}>{t(item.dayTime)}</Text> */}
                    </TouchableOpacity>
                    {/* <View style={HomeTabStyless.AvtarIconWrap}>
                        <Image source={item.Avtar} style={HomeTabStyless.AvtarIcon} />
                    </View> */}
                    {/* <TouchableOpacity
                        onPress={() => {
                            if (likedHeart.includes(index)) {
                                let unlike = likedHeart.filter((elem) => elem !== index);
                                setLikedHeart(unlike);
                            } else {
                                setLikedHeart([...likedHeart, index]);
                            }
                        }} style={HomeTabStyless.LikeStyle}>
                        <Icon name={'heart'} size={SF(20)} color={likedHeart.includes(index) ? Colors.red : Colors.gray_text_color} />
                    </TouchableOpacity> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default HomeScreenFlatList;