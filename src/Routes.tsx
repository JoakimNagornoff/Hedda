import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/home_screen/HomeTab';
import DisplayScreen from './screens/DisplayScreen/DisplayScreen';
import PersonScreen from '/screens/PersonScreen/PersonScreen';
import DogScreen from 'screens/DogScreen/DogScreen';
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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
          <Stack.Screen name="PersonScreen" component={PersonScreen} />
          <Stack.Screen name="DogScreen" component={DogScreen} />
          <Stack.Screen name="ShowScreen" component={ShowScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="InsuranceScreen" component={InsuranceScreen} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
          <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
          <Stack.Screen name="LogIn" component={LogginInScreen} />
          <Stack.Screen name="Registrer" component={RegistrationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
