import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { DateAndTimeStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from '@react-navigation/native';

function CelenderFlatDateTimeFun(props) {
    const { item, index } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DateAndTimeStyles = useMemo(() => DateAndTimeStyle(Colors), [Colors]);
    
    const [slectdate, setslectdate] = useState('');
    const Selectedfunctiodata = (item) => {
        setslectdate(item);
    };

    return (
        <TouchableOpacity onPress={() => Selectedfunctiodata(item.digit)} style={slectdate === item.digit ? DateAndTimeStyles.SetwidStyletwo : DateAndTimeStyles.SetwidStyle}>
            <View>
                <Text style={slectdate === item.digit ? DateAndTimeStyles.settextstyletilewhite : DateAndTimeStyles.settextstyletile}>{item.title}</Text>
                <Text style={slectdate === item.digit ? DateAndTimeStyles.Setdigitstylewhite : DateAndTimeStyles.Setdigitstyle}>{item.digit}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default CelenderFlatDateTimeFun;