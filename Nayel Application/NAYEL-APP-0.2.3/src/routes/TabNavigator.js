import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { CategoryTab, FavouriteTab, HomeTab, Profile, MapScreen, PaymentScreen, SecretcardsScreen } from '../screens';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconG from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Style } from '../styles';
import { ColorPicker, CustomSidebarMenu } from '../components';
import RouteName from '../routes/RouteName';
import { Colors, SH, SF } from '../utils';
import { useTranslation } from "react-i18next";
import TransactionScreen from '../screens/PaymentScreen/transactionList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: t("Home_Text"), headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            // fontSize: SF(20),
            color: Colors.theme_background,
          },
          headerStyle: {
            backgroundColor: Colors.theme_background_second,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background} size={35} />
              </TouchableOpacity>

            </View>
          ),
          // headerRight: () => (
          //   <ColorPicker />
          // ),
        }}
      />
    </Stack.Navigator>
  );
}
function CategoryTabTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="CategoryTab">
      <Stack.Screen
        name="CategoryTab"
        component={CategoryTab}
        options={{
          title: t("Category_Text"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: SF(20),
            color: Colors.theme_background,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background} size={35} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function FavouriteTabTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="FavouriteTab">
      <Stack.Screen
        name="FavouriteTab"
        component={FavouriteTab}
        options={{
          title: t("Favourite_Tab"), headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background} size={35} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t("Profile_Text"), headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            // fontSize: SF(20),
            color: Colors.theme_background,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background} size={35} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function LoccationTabTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="LocationTab">
      <Stack.Screen
        name="LocationTab"
        component={MapScreen}
        options={{
          title: t("Swap_Stations"), 
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background} size={35} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function SecretCardSection({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="SecretCardTab">
      <Stack.Screen
        name="SecretCardTab"
        component={TransactionScreen}
        options={{
          title: t("Payment_Label"), 
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={Colors.theme_background} size={35} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        activeTintColor: Colors.theme_background,
        inactiveTintColor: Colors.gray_text_color,
        activeBackgroundColor: Colors.white_text_color,
        labeled: true,
        labelStyle: {
        },
        tabStyle: {
          height: SH(49),
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
        },
  }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t("Home_Text"),
          tabBarIcon: ({ focused }) => (
            <Icon
              size={SF(19)}
              name="home"
              style={{ color: focused ? Colors.theme_background : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.SECRET_CARD_SCREEN}
        component={SecretCardSection}
        options={{
          tabBarLabel: t("Payment_Label"),
          tabBarIcon: ({ focused }) => (
            <View>
              <IconG name="payment" style={{ color: focused ? Colors.theme_background : Colors.gray_text_color }} size={SF(20)} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.FAVORITE_TAB}
        component={LoccationTabTabStack}
        options={{
          tabBarLabel: t("Location_Text"),
          tabBarIcon: ({ focused }) => (
            <IconG
              size={SF(19)}
              name="map"
              style={{ color: focused ? Colors.theme_background : Colors.gray_text_color }}
            />
          ),
        }}
        
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t("Profile_Text"),
          tabBarIcon: ({ focused }) => (
            <IconF
              size={SF(19)}
              name="user-circle"
              style={{ color: focused ? Colors.theme_background : Colors.gray_text_color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
