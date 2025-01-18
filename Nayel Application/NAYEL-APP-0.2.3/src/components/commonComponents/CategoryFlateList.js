import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CategoryScreenStyle, HomeTabStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spacing } from '../../components';
import { SH, Colors, SF } from '../../utils';
import { get_data_action } from '../../redux/action/DataAction';
import { useSelector, useDispatch } from "react-redux";
import { RouteName } from '../../routes';
import { useTheme, useNavigation } from '@react-navigation/native';


function CategoryFlateList(props) {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const CategoryScreenStyles = useMemo(() => CategoryScreenStyle(Colors), [Colors]);
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const { item,} = props;

    const dispatch = useDispatch();
    const { detailsStore } = useSelector(state => state.userDataReducer) || { detailsStore };

    const getDataAction = (getDataActiondata) => {
        dispatch(get_data_action(getDataActiondata))
        navigation.navigate(RouteName.DETAILS_SCREEN)
    }

    return (
        <TouchableOpacity style={[HomeTabStyless.FlexRow, HomeTabStyless.CarView]} onPress={() => getDataAction(item)}>
            <View style={HomeTabStyless.CarAvtarWrap}>
                <Image source={item.VehicleImage} style={HomeTabStyless.CarAvtar} resizeMode="contain" />
            </View>
            <View style={[HomeTabStyless.Paddleft, CategoryScreenStyles.WithCaright]}>
                <Text style={HomeTabStyless.CarModalName}>{t(item.CarModalName)}</Text>
                <Spacing space={SH(5)} />
                <View style={CategoryScreenStyles.FlexAlJusBtn}>
                    <View style={HomeTabStyless.FlexRow}>
                        <IconMC name='car-seat' size={SF(18)} color={Colors.theme_background} />
                        <Text style={CategoryScreenStyles.Seat}>{item.Seat} {t("Seat")}</Text>
                    </View>
                    <View style={HomeTabStyless.FlexRow}>
                        <IconMC name='speedometer' size={SF(18)} color={Colors.theme_background} />
                        <Text style={CategoryScreenStyles.Seat}>{item.SpeedMeter} {t("SpeedMeter")}</Text>
                    </View>
                </View>
                <Spacing space={SH(5)} />
                <View style={CategoryScreenStyles.FlexAlJusBtn}>
                    <View style={HomeTabStyless.FlexRow}>
                        <IconMC name='steering' size={SF(18)} color={Colors.theme_background} />
                        <Text style={CategoryScreenStyles.Seat}>{t(item.Automation)}</Text>
                    </View>
                    <View style={HomeTabStyless.FlexRow}>
                        <IconMC name='fuel' size={SF(18)} color={Colors.theme_background} />
                        <Text style={CategoryScreenStyles.Seat}>{t(item.Fuel)}</Text>
                    </View>
                </View>
                <Spacing space={SH(5)} />
                <View style={HomeTabStyless.FlexRow}>
                    <Icon name='star' size={SF(18)} color={Colors.star_color} />
                    <Text style={HomeTabStyless.RatingNumber}>{t(item.RatingNumber)}</Text>
                    <Text style={HomeTabStyless.ReviewsNumber}>{item.ReviewsNumber} {t("Reviews")}</Text>
                </View>
                <Spacing space={SH(8)} />
            </View>
        </TouchableOpacity>
    );
};
export default CategoryFlateList;