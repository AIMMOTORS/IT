import { combineReducers } from 'redux';
import commonReducer from './commomReducer';
import DataReducer from './DataReducer';
import AuthReducer from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import BikeReducer from './BikeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['colorrdata'],
};

const persistConfigdata = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userdata','bikedata','profiledata'],
};

const persistConfigData = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistListData = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bikeList'],
};

const rootReducers = combineReducers({
  commonReducer: persistReducer(persistConfig, commonReducer),
  DataReducer: persistReducer(persistConfigdata, DataReducer),
  AuthReducer: persistReducer(persistConfigData, AuthReducer),
  BikeReducer: persistReducer(persistListData, BikeReducer)
});

export default rootReducers;