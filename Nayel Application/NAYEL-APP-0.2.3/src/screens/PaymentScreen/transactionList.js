import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Text, View, Image, ScrollView, StatusBar, FlatList, TouchableOpacity, RefreshControl, ToastAndroid } from "react-native";
import { PaymentStyle, Style } from '../../styles';
import IconA from 'react-native-vector-icons/MaterialCommunityIcons'
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { SF, SH, Colors, SW, Fonts } from "../../utils";
import { AppHeader, Container, Spacing, Lottie } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import crudHandler from "../../utils/helpers/crudHandler";
import NoTransactionScreen from "./NoTransactionScreen";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const TransactionScreen = (props) => {
  const { t, i18n } = useTranslation();
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);
  const [loading, setLoading] = useState(true);
  const [Paymentdata, setPaymentData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getPayments()
      .then(() => setRefreshing(false))
      .catch(error => {
        console.error('Error fetching payments:', error);
        if (error.message === 'Network request failed') {
          ToastAndroid.show('SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION', ToastAndroid.SHORT);
        }
        setRefreshing(false);
      });
  }, []);

  useEffect(() => {
    getPayments()
      .then(() => setLoading(false))
      .catch(error => {
        console.error('Error fetching payments:', error);
        if (error.message === 'Network request failed') {
          ToastAndroid.show('SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION', ToastAndroid.SHORT);
        }
        setLoading(false);
      });
  }, []);

  async function getPayments() {
    let data = await crudHandler.read('/transactionlst');
    setPaymentData(data.data);
    console.log("See payments", data.data);
  }

  const renderLoading = () => {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Lottie source={images.transaction_screen} />
      </View>
    );
  };

  const ItemRender = (item, index) => {
    return (
      <Container>
        <View style={PaymentStyles.card}>
          <View>
            <View style={PaymentStyles.flexRow}>
              <View>
                <Image source={images.Transaction}
                  resizeMode="contain"
                  style={PaymentStyles.imageStyle}
                />
              </View>
            </View>
            <View></View>
          </View>
          <View style={PaymentStyles.paragraphView}>
            <View>
              <Text style={PaymentStyles.paragraphText3}>{t("Cash")} 💸 : {t(item.amount)}</Text>
            </View>
            <View>
              <Text style={PaymentStyles.paragraphText1}>
                {t("SOC_issued")}→
                {t(` : ${item.battery_given_SOC}`)}
              </Text>
            </View>
            <View>
              <Text style={PaymentStyles.paragraphText2}>
                {t("SOC_return")}←
                {t(` : ${item.battery_taken_SOC}`)}
              </Text>
            </View>
          </View>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <View style={PaymentStyles.minstyleviewphotograpgy}>
        <View style={PaymentStyles.minflexview}>
          <View style={PaymentStyles.minviewsigninscreen}>
            {loading ? (
              renderLoading()
            ) : (
              <>
                <View style={{ alignItems: 'center', justifyContent: "space-between", flexDirection: i18n.language === 'urdu' ? 'row-reverse' : 'row' }}>
                  <Text style={{ margin: 10, color: Colors.textSecondary, fontSize: 20, fontWeight: '600' }}>
                    {Paymentdata.length > 0 ? t("Add_Card") : t("No_Payments")}
                  </Text>
                  {Paymentdata && (
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.SECRET_FULL_SCREEN, {
                      onAction: () => {
                        getPayments();
                      }
                    })}>
                      <IconA name="card-plus-outline" size={35} />
                    </TouchableOpacity>
                  )}
                </View>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={Paymentdata}
                  renderItem={({ item, index }) => ItemRender(item, index)}
                  keyExtractor={(item, index) => index.toString()}
                  ListEmptyComponent={<NoTransactionScreen />}
                  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                />
                <Spacing />
              </>
            )}
          </View>
        </View>
        <Spacing space={SH(50)} />
      </View>
    </Container>
  );
};

TransactionScreen.navigationOptions = ({ navigation }) => ({
  title: 'Add card Screen',
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate(RouteName.SECRET_FULL_SCREEN)}>
      <IconA name="card-plus-outline" size={35} />
    </TouchableOpacity>
  ),
});

export default TransactionScreen;
