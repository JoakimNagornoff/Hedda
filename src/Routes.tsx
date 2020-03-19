import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '/screens/home_screen/HomeScreen';
import FirstScreen from '/screens/first_screen/FirstScreen';
import SecondScreen from '/screens/second_screen/SecondScreen';
import ThirdScreen from 'screens/ThirdScreen/ThirdScreen';
import ForthScreen from 'screens/ForthScreen/ForthScreen';

import rootReducer from './store/index';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

interface RoutesProps {}

const Stack = createStackNavigator();
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('store state:');
  console.log(store.getState());
});

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ThirdScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
          <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
          <Stack.Screen name="ForthScreen" component={ForthScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
