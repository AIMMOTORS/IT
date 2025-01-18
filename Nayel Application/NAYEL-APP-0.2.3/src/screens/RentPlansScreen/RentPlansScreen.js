import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { RentPlansScreenStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { Spacing, VehicleOverviewFun, Button, Container, VehicleRentPlanFun } from '../../components';
import { SH, Colors, SF } from '../../utils';
import images from '../../index';
import { useSelector, useDispatch } from "react-redux";
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';

const RentPlansScreen = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const dispatch = useDispatch();
    const { userdata } = useSelector(state => state.DataReducer) || {};

    const { Colors } = useTheme();
    const RentPlansScreenStyles = useMemo(() => RentPlansScreenStyle(Colors), [Colors]);

    const [slectdate, setslectdate] = useState('1');

    const Selectedfunctiodata = (item) => {
        setslectdate(item);
    }

    const arraySet = {
        searchTect: '',
        heart: (1)
    }
    const [variable, setVariable] = useState(arraySet);

    const VehicleOverviewData = [
        {
            id: 1,
            speIcon: images.steering,
            specifiLabel: "Automation_Label"
        },
        {
            id: 1,
            speIcon: images.diesel,
            specifiLabel: "Disel_Label"
        },
        {
            id: 1,
            speIcon: images.carseat,
            specifiLabel: "4Seat"
        },
        {
            id: 1,
            speIcon: images.highperformance,
            specifiLabel: "SpeedMeter"
        },
    ]
    const VehicleRentPlanData = [
        {
            id: 1,
            speIcon: images.timeIcon,
            planTitle: "PlanTitle_2",
            planeSubTitle: "planeSubTitle_1",
            Price: 699,
            dayTime: "Hour_Label",
        },
        {
            id: 2,
            speIcon: images.clockIcon,
            planTitle: "PlanTitle_1",
            planeSubTitle: "planeSubTitle_2",
            Price: 799,
            dayTime: "Hour_Label",
        },
        {
            id: 3,
            speIcon: images.calendarIcon,
            planTitle: "PlanTitle_3",
            planeSubTitle: "planeSubTitle_3",
            Price: 899,
            dayTime: "Hour_Label",
        },
        {
            id: 4,
            speIcon: images.clockIcon,
            planTitle: "PlanTitle_4",
            planeSubTitle: "planeSubTitle_4",
            Price: 999,
            dayTime: "Hour_Label",
        },
    ]

    return (
        <Container>
            <View style={RentPlansScreenStyles.MinViewScreen}>
                <View style={RentPlansScreenStyles.BackViewWrap}>
                    <TouchableOpacity style={RentPlansScreenStyles.BackView} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                        <Icon name='arrowleft' size={SF(25)} color={Colors.black_text_color} />
                    </TouchableOpacity>
                    <Text style={RentPlansScreenStyles.HeadLabel}>{t("RentAndPlans_Label")}</Text>
                    <TouchableOpacity style={RentPlansScreenStyles.BackView} onPress={() => setVariable(1)}>
                        <Icon name={'heart'} size={SF(22)} color={variable.heart === 1 ? Colors.black_text_color : Colors.red} />
                    </TouchableOpacity>
                </View>
                <View style={RentPlansScreenStyles.VehicleDetails}>
                    {
                        userdata != "" ?
                            <Image source={userdata.VehicleImage} style={RentPlansScreenStyles.VehicleImage} resizeMode="contain" />
                            :
                            <Image source={images.Car_1} style={RentPlansScreenStyles.VehicleImage} resizeMode="contain" />
                    }
                </View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={RentPlansScreenStyles.contentContainerStyle}>
                    <View style={RentPlansScreenStyles.ContainerWrap}>
                        <View style={RentPlansScreenStyles.FlexRowAlcentSpBtn}>
                            <Text style={RentPlansScreenStyles.CarModalName}>{t(userdata.CarModalName)}</Text>
                            {userdata.Price && userdata.dayTime != "" ?
                                <View style={RentPlansScreenStyles.FlexRowAlcent}>
                                    <IconFA name='dollar' size={SF(18)} color={Colors.black_text_color} />
                                    <Text style={RentPlansScreenStyles.Price}>{t(userdata.Price)}/</Text>
                                    <Text style={RentPlansScreenStyles.DayTime}>{t(userdata.dayTime)}</Text>
                                </View>
                                :
                                <View style={RentPlansScreenStyles.FlexRowAlcent}>
                                    <IconFA name='dollar' size={SF(18)} color={Colors.black_text_color} />
                                    <Text style={RentPlansScreenStyles.Price}>{t("Price")}/</Text>
                                    <Text style={RentPlansScreenStyles.DayTime}>{t("Day_Label")}</Text>
                                </View>
                            }
                        </View>
                    </View>
                    <Spacing />
                    <View style={RentPlansScreenStyles.DetailsOverview}>
                        <Text style={RentPlansScreenStyles.OverviewLabel}>{t("Overview_Label")}</Text>
                        <Spacing space={SH(30)} />
                        <FlatList
                            data={VehicleOverviewData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (<VehicleOverviewFun item={item} />)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={RentPlansScreenStyles.VehicleOverviewFun}
                        />
                        <Spacing space={SH(25)} />
                        <Text style={RentPlansScreenStyles.OverviewLabel}>{t("Plan_Label")}</Text>
                        <Spacing space={SH(5)} />
                        <FlatList
                            data={VehicleRentPlanData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (<VehicleRentPlanFun item={item} />)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={RentPlansScreenStyles.VehicleOverviewFun}
                        />

                        <Spacing />
                    </View>
                </ScrollView>
                <View style={[RentPlansScreenStyles.FlexRowAlcentSpBtn, RentPlansScreenStyles.PaddHori, RentPlansScreenStyles.Bgtheme]}>
                    <Button title={t("Next_Text")} buttonStyle={{ backgroundColor: Colors.star_color }} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
                </View>

            </View>
        </Container>
    );
};
export default RentPlansScreen;