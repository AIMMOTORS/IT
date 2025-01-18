import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { Style, DateAndTimeStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { Spacing, Button, Input, Container, CelenderFlatDateTimeFun } from '../../components';
import { SH, Colors, SF } from '../../utils';
import images from '../../index';
import { useSelector, useDispatch } from "react-redux";
import { RouteName } from '../../routes';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useTheme } from '@react-navigation/native';

const DateAndTimeScreen = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const dispatch = useDispatch();
    const { userdata } = useSelector(state => state.DataReducer) || {};

    const { Colors } = useTheme();
    const DateAndTimeStyles = useMemo(() => DateAndTimeStyle(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);

    const arraySet = {
        searchTect: '',
        heart: (1)
    }

    const [variable, setVariable] = useState(arraySet);

    const [date, setDate] = useState('Date');
    const [time, setTime] = useState('time');

    const [mode, setMode] = useState('date');
    const [timemode, setTimeMode] = useState('time');

    const [show, setShow] = useState(false);
    const [showTime, setShowTime] = useState(false);

    const stateValue = {
        TimeFlag: "",
    }
    const stateFocus = {
        TimeFlag: "",
    }

    const [value, setValue] = useState(stateValue);
    const [isFocus, setIsFocus] = useState(stateFocus);

    const stateArray = {
        timeEnter: "",
    };
    const [state, setState] = useState(stateArray);

    const DateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(moment(currentDate, 'ddd, MMM Do YYYY').format('ddd, MMM DD YYYY'));
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // Time Select
    const TimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTime(false);
        setTime(moment(currentTime, "hmm A").format("HH:mm A"));

    };

    const showTimeMode = currentMode => {
        setShowTime(true);
        setTimeMode(currentMode);

    };

    const showTimeDatepicker = () => {
        setShowTime('time');
    };


    const Calenderdata = [
        {
            id: 1,
            title: t("Sun"),
            digit: "5",
        },
        {
            id: 2,
            title: t("Mon"),
            digit: "6",
        },
        {
            id: 3,
            title: t("Tue"),
            digit: "7",
        },
        {
            id: 4,
            title: t("Wed"),
            digit: "8",
        },
        {
            id: 5,
            title: t("Thu"),
            digit: "9",
        },
        {
            id: 6,
            title: t("Fri"),
            digit: "10",
        },
        {
            id: 7,
            title: t("Sat"),
            digit: "11",
        },
        {
            id: 8,
            title: t("Sun"),
            digit: "12",
        },
        {
            id: 9,
            title: t("Mon"),
            digit: "13",
        },
        {
            id: 10,
            title: t("Tue"),
            digit: "14",
        },
        {
            id: 11,
            title: t("Wed"),
            digit: "15",
        },
        {
            id: 12,
            title: t("Thu"),
            digit: "16",
        },
        {
            id: 13,
            title: t("Fri"),
            digit: "17",
        },
        {
            id: 14,
            title: t("Sat"),
            digit: "18",
        },
    ];

    return (
        <Container>
            <View style={DateAndTimeStyles.MinViewScreen}>
                <View style={DateAndTimeStyles.BackViewWrap}>
                    <TouchableOpacity style={DateAndTimeStyles.BackView} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN)}>
                        <Icon name='arrowleft' size={SF(25)} color={Colors.black_text_color} />
                    </TouchableOpacity>
                    <Text style={DateAndTimeStyles.HeadLabel}>{t("DateAndTime_Label")}</Text>
                    <TouchableOpacity style={DateAndTimeStyles.BackView} onPress={() => setVariable(1)}>
                        <Icon name={'heart'} size={SF(22)} color={variable.heart === 1 ? Colors.dark_liver : Colors.red} />
                    </TouchableOpacity>
                </View>
                <View style={DateAndTimeStyles.VehicleDetails}>
                    {/* <Image source={userdata.VehicleImage} style={DateAndTimeStyles.VehicleImage} /> */}
                    {userdata != "" ?
                        < Image source={userdata.VehicleImage} style={DateAndTimeStyles.VehicleImage} resizeMode="contain" />
                        :
                        <Image source={images.Car_1} style={DateAndTimeStyles.VehicleImage} resizeMode="contain" />
                    }
                </View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Styles.contentContainerStyle}>
                    <View style={DateAndTimeStyles.ContainerWrap}>
                        <View style={DateAndTimeStyles.FlexRowAlcentSpBtn}>
                            <Text style={DateAndTimeStyles.CarModalName}>{t(userdata.CarModalName)}</Text>
                            {userdata.Price && userdata.dayTime != "" ?
                                <View style={DateAndTimeStyles.FlexRowAlcent}>
                                    <IconFA name='dollar' size={SF(18)} color={Colors.black_text_color} />
                                    <Text style={DateAndTimeStyles.Price}>{t(userdata.Price)}/</Text>
                                    <Text style={DateAndTimeStyles.DayTime}>{t(userdata.dayTime)}</Text>
                                </View>
                                :
                                <View style={DateAndTimeStyles.FlexRowAlcent}>
                                    <IconFA name='dollar' size={SF(18)} color={Colors.black_text_color} />
                                    <Text style={DateAndTimeStyles.Price}>{t("Price")}/</Text>
                                    <Text style={DateAndTimeStyles.DayTime}>{t("Day_Label")}</Text>
                                </View>
                            }
                        </View>
                        <Spacing space={SH(5)} />
                        <View style={DateAndTimeStyles.FlexRowAlcent}>
                            <Icon name='star' size={SF(18)} color={Colors.star_color} />
                            <Text style={DateAndTimeStyles.RatingNumber}>{t(userdata.RatingNumber)}</Text>
                            <Text style={DateAndTimeStyles.ReviewsNumber}>({t(userdata.ReviewsNumber)}) {t("Reviews")}</Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <Text style={DateAndTimeStyles.DetailsData}>{t("DetailsData")}</Text>
                    </View>
                    <Spacing />
                    <View style={DateAndTimeStyles.DetailsOverview}>
                        <Text style={DateAndTimeStyles.OverviewLabel}>{t("Month_Label")} {t("Years_Label")}</Text>
                        <Spacing space={SH(0)} />
                        <FlatList
                            data={Calenderdata}
                            horizontal                          
                            renderItem={({ item }) => (<CelenderFlatDateTimeFun
                                item={item}
                            />)}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={DateAndTimeStyles.setcontainertyle}
                        />
                        <Spacing />
                        <Text style={DateAndTimeStyles.OverviewLabel}>{t("DateName_Label")}</Text>
                        <View style={DateAndTimeStyles.PaddHori15}>
                            <View style={DateAndTimeStyles.inputUnderLine}>
                                <Text style={DateAndTimeStyles.DateFrom} onPress={showDatepicker}>{date}</Text>
                                <TouchableOpacity onPress={showDatepicker}>
                                    <Image source={images.dateIcon} style={DateAndTimeStyles.dateIconstyle} />
                                </TouchableOpacity>
                            </View>
                            <Text Date />
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    timeZoneOffsetInMinutes={0}
                                    value={new Date()}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={DateChange}
                                />
                            )}
                        </View>
                        <View style={DateAndTimeStyles.FlexRowAlcentSpBtn}>
                            <View style={DateAndTimeStyles.TimeSelectWrap}>
                                <Text style={DateAndTimeStyles.OverviewLabel}>{t("Time_Label")}</Text>
                                <View style={DateAndTimeStyles.PaddHori15}>
                                    <View style={DateAndTimeStyles.inputUnderLine}>
                                        <Text style={DateAndTimeStyles.DateFrom} onPress={showTimeDatepicker}>{time}</Text>
                                        <TouchableOpacity onPress={showTimeDatepicker}>
                                            <Image source={images.clockIcon} style={DateAndTimeStyles.dateIconstyle} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text Time />
                                    {showTime && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            timeZoneOffsetInMinutes={0}
                                            value={new Date()}
                                            mode={timemode}
                                            is24Hour={false}
                                            display="default"
                                            onChange={TimeChange}
                                        />
                                    )}
                                </View>
                            </View>
                            <View style={[DateAndTimeStyles.TimeSelectWrap, DateAndTimeStyles.padRight15, DateAndTimeStyles.JusCenter]}>
                                <Text style={DateAndTimeStyles.TimeLabel}>{t("Title_Hors")}</Text>
                                <View style={DateAndTimeStyles.InputWrap}>
                                    <Input
                                        placeholder={t("Enter_Time")}
                                        onChangeText={(text) => setState({ ...state, timeEnter: text })}
                                        value={state.timeEnter}
                                        inputStyle={DateAndTimeStyles.EnterTimeInput}
                                        inputType="numeric"
                                        maxLength={2}
                                        placeholde={DateAndTimeStyles.Placehol}
                                    />
                                    <Image source={images.timeIcon} style={DateAndTimeStyles.timeIconstyle} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={[DateAndTimeStyles.FlexRowAlcentSpBtn, DateAndTimeStyles.PaddHori, DateAndTimeStyles.Bgtheme]}>
                    <Button title={t("Book_Now")} buttonStyle={{ backgroundColor: Colors.star_color }} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
                </View>


            </View>
        </Container>
    );
};
export default DateAndTimeScreen;
