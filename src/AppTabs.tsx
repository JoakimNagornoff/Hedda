import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamsList} from 'AppParamsList';

import ProfilScreen from 'screens/ProfilScreen';
import HomeScreen from 'screens/home_screen/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/Ionicons"
interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamsList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          Icon.loadFont();
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Profil" component={ProfilScreen} />
    </Tabs.Navigator>
  );
};
