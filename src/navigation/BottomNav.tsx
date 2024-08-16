import React, {Component} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import Gifts from '../screens/Gifts';
import Order from '../screens/Order';
import Account from '../screens/Account';
import Octicons from 'react-native-vector-icons/Octicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fonts} from '../constants';
const Tab = createBottomTabNavigator();

export class BottomNav extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3C7C22',
          tabBarInactiveTintColor: '#91711D',
          headerShown: false,
          tabBarStyle: {
            height: responsiveHeight(10),
            borderRadius: responsiveFontSize(3),
            position: 'absolute',
            bottom: responsiveHeight(0),
            backgroundColor: '#FFFAF4',
            marginHorizontal: responsiveWidth(3),
          },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard:true
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <>
                <Octicons
                  name="home"
                  color={color}
                  size={responsiveFontSize(2.8)}
                  style={{marginTop: responsiveHeight(0.5)}}
                />
                <Text
                  style={{
                    color: color,
                    fontFamily: fonts.poppinsRegular,
                    fontSize: responsiveFontSize(1.2),
                    includeFontPadding: false,
                  }}>
                  Home
                </Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <>
                <Ionicons
                  name="grid-outline"
                  color={color}
                  size={responsiveFontSize(2.8)}
                />
                <Text
                  style={{
                    color: color,
                    fontFamily: fonts.poppinsRegular,
                    fontSize: responsiveFontSize(1.2),
                    includeFontPadding: false,
                  }}>
                  Shop
                </Text>
              </>
            ),
          }}
          name="Shop"
          component={Shop}
        />

        <Tab.Screen
          name="Gifts"
          component={Gifts}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <>
                <Antdesign
                  name="gift"
                  color={color}
                  size={responsiveFontSize(3)}
                />
                <Text
                  style={{
                    color: color,
                    fontFamily: fonts.poppinsRegular,
                    fontSize: responsiveFontSize(1.2),
                    includeFontPadding: false,
                  }}>
                  Gifts & Offers
                </Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <>
                <FontAwesome
                  name="list-alt"
                  color={color}
                  size={responsiveFontSize(3)}
                />
                <Text
                  style={{
                    color: color,
                    fontFamily: fonts.poppinsRegular,
                    fontSize: responsiveFontSize(1.2),
                    includeFontPadding: false,
                  }}>
                  Orders
                </Text>
              </>
            ),
          }}
          name="Order"
          component={Order}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <>
                <Antdesign
                  name="user"
                  color={color}
                  size={responsiveFontSize(3)}
                />
                <Text
                  style={{
                    color: color,
                    fontFamily: fonts.poppinsRegular,
                    fontSize: responsiveFontSize(1.2),
                    includeFontPadding: false,
                  }}>
                  Account
                </Text>
              </>
            ),
          }}
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomNav;
