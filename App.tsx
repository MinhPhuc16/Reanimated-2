import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from './src/Routes';
import Examples from './src/Examples';
import PanGesture from './src/PanGesture';
import {NavigationContainer} from '@react-navigation/native';
import Transitions from './src/Transitions/Transitions';
import DynamicSpring from './src/DynamicSpring';
import withTimingg from './src/withTiming';
const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Examples">
      <Stack.Screen
        name="Examples"
        component={Examples}
        options={{
          title: 'Reanimated 2 Examples',
        }}
      />

      <Stack.Screen
        name="PanGesture"
        component={PanGesture}
        options={{
          title: 'PanGesture',
        }}
      />
      <Stack.Screen
        name="Transitions"
        component={Transitions}
        options={{
          title: 'Transitions',
        }}
      />
      <Stack.Screen
        name="DynamicSpring"
        component={DynamicSpring}
        options={{
          title: 'Dynamic Spring',
        }}
      />
      <Stack.Screen
        name="withTiming"
        component={withTimingg}
        options={{
          title: 'withTiming',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const App = () => <AppNavigator />;

export default App;
