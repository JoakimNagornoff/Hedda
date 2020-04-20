import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '/screens/home_screen/HomeScreen';
import FirstScreen from '/screens/first_screen/FirstScreen';
import DisplayScreen from './screens/DisplayScreen/DisplayScreen';
import PersonScreen from '/screens/PersonScreen/PersonScreen';
import DogScreen from 'screens/DogScreen/DogScreen';
import ShowScreen from 'screens/showScreen/ShowScreen';
import PaymentScreen from 'screens/PaymentScreen/PaymentScreen';
import InsuranceScreen from 'screens/InsuranceScreen/InsuranceScreen';
import CardScreen from 'screens/CardScreen/CardScreen';

import rootReducer from './store/index';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

interface RoutesProps {}

const Stack = createStackNavigator();
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('store state:');
  console.log(JSON.stringify(store.getState()));
});

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ShowScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
          <Stack.Screen name="PersonScreen" component={PersonScreen} />
          <Stack.Screen name="DogScreen" component={DogScreen} />
          <Stack.Screen name="ShowScreen" component={ShowScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="InsuranceScreen" component={InsuranceScreen} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
