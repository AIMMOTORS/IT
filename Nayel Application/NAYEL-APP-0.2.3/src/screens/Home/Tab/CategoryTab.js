import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, } from 'react-native';
import { CategoryScreenStyle, HomeTabStyles } from '../../../styles';
import { useTranslation } from "react-i18next";
import { Spacing, Input, Container, CategoryFlateList } from '../../../components';
import { SH, Colors, SF } from '../../../utils';
import images from '../../../index';
import { useTheme } from '@react-navigation/native';


const CategoryTab = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const CategoryScreenStyles = useMemo(() => CategoryScreenStyle(Colors), [Colors]);
    const [tabIndex, setTabIndex] = useState(1);
    const [likedHeart, setLikedHeart] = useState([]);

    const AailableVihecleList = [
        {
            id: 1,
            VehicleImage: images.Bike_3,
            CarModalName: "CarModalName_4",
            Seat: "2",
            RatingNumber: 4.5,
            ReviewsNumber: "130",
            SpeedMeter: "320",
            Automation: "Automation_Label",
            Fuel: "Fuel",
        },
        {
            id: 2,
            VehicleImage: images.Bike_2,
            CarModalName: "CarModalName_3",
            Seat: "2",
            RatingNumber: 3.9,
            ReviewsNumber: "101",
            SpeedMeter: "210",
            Automation: "Automation_Label",
            Fuel: "Fuel",
        },
        {
            id: 3,
            VehicleImage: images.HomeCarOne,
            CarModalName: "CarModalName_1",
            Seat: "4",
            RatingNumber: 4.6,
            ReviewsNumber: "110",
            SpeedMeter: "152",
            Automation: "Automation_Label",
            Fuel: "Fuel",
        },
        {
            id: 4,
            VehicleImage: images.Bike_1,
            CarModalName: "CarModalName_2",
            Seat: "2",
            RatingNumber: 3.3,
            ReviewsNumber: "130",
            SpeedMeter: "230",
            Automation: "Automation_Label",
            Fuel: "Fuel",
        },
        {
            id: 5,
            VehicleImage: images.Car_1,
            CarModalName: "CarModalName_5",
            Seat: "6",
            RatingNumber: 4.8,
            ReviewsNumber: "120",
            SpeedMeter: "100",
            Automation: "Automation_Label",
            Fuel: "Fuel",
        },
    ]


    return (
        <Container>
            <View style={CategoryScreenStyles.MinViewScreen}>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View >
                            <View style={CategoryScreenStyles.FlexRowTab}>
                                <TouchableOpacity onPress={() => setTabIndex(1)} style={[CategoryScreenStyles.DetailsTabText, tabIndex == 1 && CategoryScreenStyles.ActiveBorder]}>
                                    <Text style={[CategoryScreenStyles.DetailsTabText]}>{t("All")}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTabIndex(2)} style={[CategoryScreenStyles.DetailsTabText, tabIndex == 2 && CategoryScreenStyles.ActiveBorder]}>
                                    <Text style={[CategoryScreenStyles.DetailsTabText]}>{t("Car_Label")}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTabIndex(3)} style={[CategoryScreenStyles.DetailsTabText, tabIndex == 3 && CategoryScreenStyles.ActiveBorder]}>
                                    <Text style={[CategoryScreenStyles.DetailsTabText]}>{t("Truck_Label")}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTabIndex(4)} style={[CategoryScreenStyles.DetailsTabText, tabIndex == 4 && CategoryScreenStyles.ActiveBorder]}>
                                    <Text style={[CategoryScreenStyles.DetailsTabText]}>{t("Bike_Label")}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTabIndex(5)} style={[CategoryScreenStyles.DetailsTabText, tabIndex == 5 && CategoryScreenStyles.ActiveBorder]}>
                                    <Text style={[CategoryScreenStyles.DetailsTabText]}>{t("Camper_Vans")}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>
                <Spacing space={SH(20)} />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={CategoryScreenStyles.ContentContainerStyle}>
                    <View>
                        {tabIndex == 1 ?
                            <FlatList
                                data={AailableVihecleList}
                                numColumns={1}
                                renderItem={({ item }) => (<CategoryFlateList
                                    item={item}
                                />)}
                                keyExtractor={item => item.id}
                            />
                            : tabIndex == 2 ?
                                <FlatList
                                    data={AailableVihecleList}
                                    numColumns={1}
                                    renderItem={({ item }) => (<CategoryFlateList
                                        item={item}
                                    />)}
                                    keyExtractor={item => item.id}
                                />

                                : tabIndex == 3 ?
                                    <FlatList
                                        data={AailableVihecleList}
                                        numColumns={1}
                                        renderItem={({ item }) => (<CategoryFlateList
                                            item={item}
                                        />)}
                                        keyExtractor={item => item.id}
                                    />
                                    :
                                    tabIndex == 4 ?
                                        <FlatList
                                            data={AailableVihecleList}
                                            numColumns={1}
                                            renderItem={({ item }) => (<CategoryFlateList
                                                item={item}
                                            />)}
                                            keyExtractor={item => item.id}
                                        />
                                        :
                                        tabIndex == 5 ?
                                            <FlatList
                                                data={AailableVihecleList}
                                                numColumns={1}
                                                renderItem={({ item }) => (<CategoryFlateList
                                                    item={item}
                                                />)}
                                                keyExtractor={item => item.id}
                                            />
                                            :
                                            null
                        }
                    </View>
                </ScrollView>
            </View>
        </Container>

    );
};
export default CategoryTab;