import React, { useMemo, useState } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import { FavouriteTabStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import images from "../../../index";
import { FavouriteTabFlateList, Container, Spacing } from "../../../components";
import IconFA from 'react-native-vector-icons/FontAwesome';
import { SF, SH, Colors } from "../../../utils";
import Icon from 'react-native-vector-icons/AntDesign';

const FavouriteTab = (props) => {
  const { navigation } = props;

  const [likedHeart, setLikedHeart] = useState([]);
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const FavouriteTabStyles = useMemo(() => FavouriteTabStyle(Colors), [Colors]);

  const RetingData = [
    {
      id: 1,
      VehicleImage: images.HomeCarOne,
      CarModalName: "CarModalName_1",
      Price: 899,
      dayTime: "Day_Label",
      calenderIcon: images.calendarIcon,
      dateAndTime: "dateAndTime_1",
      hoursText: "8",
      locationIcon: images.location,
      pickupLabel: "pickupLabel_1",
      addresLocation: "addresLocation_1",
    },
    {
      id: 2,
      VehicleImage: images.Car_1,
      CarModalName: "CarModalName_4",
      Price: 850,
      dayTime: "Day_Label",
      calenderIcon: images.calendarIcon,
      dateAndTime: "dateAndTime_2",
      hoursText: "6",
      locationIcon: images.location,
      pickupLabel: "pickupLabel_1",
      addresLocation: "addresLocation_2",
    },
    {
      id: 3,
      VehicleImage: images.Car_2,
      CarModalName: "CarModalName_5",
      Price: 595,
      dayTime: "Day_Label",
      calenderIcon: images.calendarIcon,
      dateAndTime: "dateAndTime_3",
      hoursText: "3",
      locationIcon: images.location,
      pickupLabel: "pickupLabel_1",
      addresLocation: "addresLocation_3",
    },
  ]

  return (
    <Container>
      <View style={FavouriteTabStyles.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={FavouriteTabStyles.ContentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={FavouriteTabStyles.MinFlexView}>
              <Text style={FavouriteTabStyles.RentHeadingText}>{t("RentHeading")}</Text>
              <Spacing space={SH(2)} />
              <FlatList
                data={RetingData}
                numColumns={1}
                renderItem={({ item }) => (<FavouriteTabFlateList
                  item={item}
              />)}
                keyExtractor={item => item.id}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>

  );
};
export default FavouriteTab;