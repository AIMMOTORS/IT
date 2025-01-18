import React, { useState, useMemo } from 'react';
import { View, Text, Image,  } from 'react-native';
import { RentPlansScreenStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, useNavigation } from '@react-navigation/native';

function VehicleOverviewFun(props) {
    const navigation = useNavigation();
    const { t } = useTranslation();   
    const { item, } = props;
    const dispatch = useDispatch();
    const { userdata } = useSelector(state => state.DataReducer) || {};

    const { Colors } = useTheme();
    const RentPlansScreenStyles = useMemo(() => RentPlansScreenStyle(Colors), [Colors]);

    return (
        <View style={RentPlansScreenStyles.VehicleFeatureWrap}>
            <Image source={item.speIcon} style={RentPlansScreenStyles.IonStyle} resizeMode="contain" />
            <Text style={RentPlansScreenStyles.SpecifiLabel}>{t(item.specifiLabel)}</Text>
        </View>
    );
};
export default VehicleOverviewFun;