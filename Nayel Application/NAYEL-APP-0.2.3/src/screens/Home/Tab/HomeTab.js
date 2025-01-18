import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ToastAndroid, RefreshControl } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useIsFocused, useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Container, HomeScreenFlatList, Lottie } from '../../../components';
import { SH } from '../../../utils';
import { RouteName } from '../../../routes';
import crudHandler from '../../../utils/helpers/crudHandler';
import images from '../../../index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeTab = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();

  const hello = useSelector((state) => state.BikeReducer.bikeList);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getdata()
      .then(() => setRefreshing(false))
      .catch(error => {
        console.error('Error fetching data:', error);
        if (error.message === 'Network request failed') {
          ToastAndroid.show('SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION', ToastAndroid.SHORT);
        }
        setRefreshing(false);
      });
  }, []);

  async function getdata() {
    try {
      const response = await crudHandler.read('/bikelst');
      console.log('Check list', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.message === 'Network request failed') {
        ToastAndroid.show('SOMETHING WENT WRONG. CHECK YOUR INTERNET CONNECTION', ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const renderLoading = () => {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Lottie source={images.landing_screen} />
      </View>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20, marginTop: "60%" }}>
        <Icon name="motorbike-electric" size={150} color="grey" />
        <Text style={{ marginTop: 10, color: Colors.textSecondary, fontSize: 20 }}> {t('No_Bikes')}</Text>
      </View>
    );
  };

  return (
    <View>
      {loading ? (
        renderLoading()
      ) : (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.OTP_VERIFY_SCREEN)}>
          </TouchableOpacity>
          <Text style={{ margin: 10, color: Colors.textSecondary, fontSize: 20, fontWeight: '600' }}> {t('Available_vehicle')} </Text>
          <FlatList
            data={data}
            ListEmptyComponent={renderEmptyComponent}
            numColumns={1}
            renderItem={({ item }) => <HomeScreenFlatList item={item} getdata={getdata} />}
            keyExtractor={(item) => item.mac}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        </View>
      )}
    </View>
  );
};

export default HomeTab;
