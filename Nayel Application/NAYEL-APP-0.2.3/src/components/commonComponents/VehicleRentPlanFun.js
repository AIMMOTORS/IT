import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { RentPlansScreenStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import IconFA from 'react-native-vector-icons/FontAwesome';
import { Spacing,   } from '../../components';
import { SH, Colors, SF } from '../../utils';
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from '@react-navigation/native';

function VehicleRentPlanFun(props) {
    const { t } = useTranslation();
    const { item, } = props;
    const dispatch = useDispatch();
    const { userdata } = useSelector(state => state.DataReducer) || {};

    const { Colors } = useTheme();
    const RentPlansScreenStyles = useMemo(() => RentPlansScreenStyle(Colors), [Colors]);
    const [slectdate, setslectdate] = useState('1');

    const Selectedfunctiodata = (item) => {
        setslectdate(item);
    }
    
    return (
        <TouchableOpacity style={RentPlansScreenStyles.VehicleRentPlanBox} onPress={() => Selectedfunctiodata(item.id, item.Price)}>
            <View style={RentPlansScreenStyles.VehicleRentPlanTopView}>
                <Spacing space={SH(15)} />
                <View style={RentPlansScreenStyles.IonStyleBox}>
                    <Image source={item.speIcon} style={RentPlansScreenStyles.IonStyle} resizeMode="contain" />
                </View>
                <Spacing />
                <Text style={RentPlansScreenStyles.PlanTitleText}>{t(item.planTitle)}</Text>
                <Spacing space={SH(2)} />
                <Text style={RentPlansScreenStyles.PlaneSubTitletText}>{t(item.planeSubTitle)}</Text>
            </View>
            <View style={slectdate === item.id ? RentPlansScreenStyles.VehicleRentPlanBottomViewLike : RentPlansScreenStyles.VehicleRentPlanBottomView}>
                <IconFA name='dollar' size={SF(15)} color={Colors.white_text_color} />
                <Text style={RentPlansScreenStyles.RentPrice}>{t(item.Price)} /</Text>
                <Text style={RentPlansScreenStyles.RentDayTime}>{t(item.dayTime)}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default VehicleRentPlanFun;