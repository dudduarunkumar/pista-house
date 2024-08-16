import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import BottomNav from './BottomNav';
const Stack = createNativeStackNavigator();

export class StackNav extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="BottomNav"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
    );
  }
}

export default StackNav;
