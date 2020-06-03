import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/home_screen/HomeTab';
import DisplayScreen from './screens/DisplayScreen/DisplayScreen';
import PersonScreen from '/screens/PersonScreen/PersonScreen';
import AnimalScreen from 'screens/AnimalScreen/AnimalScreen';
import ShowScreen from 'screens/showScreen/ShowScreen';
import PaymentScreen from 'screens/PaymentScreen/PaymentScreen';
import InsuranceScreen from 'screens/InsuranceScreen/InsuranceScreen';
import CardScreen from 'screens/CardScreen/CardScreen';
import ProfilScreen from 'screens/ProfilScreen/ProfilScreen';
import LogginInScreen from 'screens/LogginInScreen/LogginInScreen';
import RegistrationScreen from 'screens/RegistrationScreen/RegistrationScreen';

import rootReducer from './store/index';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';

interface RoutesProps {}

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(promise));

store.subscribe(() => {
  console.log('store state:');
  console.log(JSON.stringify(store.getState()));
});

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DisplayScreen"
            component={DisplayScreen}
            options={{headerTransparent: true, headerTitle: ''}}
          />
          <Stack.Screen name="PersonScreen" component={PersonScreen} />
          <Stack.Screen
            name="AnimalScreen"
            component={AnimalScreen}
            options={{headerTransparent: true, headerTitle: ''}}
          />
          <Stack.Screen
            name="ShowScreen"
            component={ShowScreen}
            options={{headerTransparent: true, headerTitle: ''}}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{headerTransparent: true, headerTitle: ''}}
          />
          <Stack.Screen
            name="InsuranceScreen"
            component={InsuranceScreen}
            options={{headerTransparent: true, headerTitle: ''}}
          />
          <Stack.Screen
            name="CardScreen"
            component={CardScreen}
            options={{headerTransparent: true, headerTitle: ''}}
          />
          <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
          <Stack.Screen
            name="LogIn"
            component={LogginInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registrer"
            component={RegistrationScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
