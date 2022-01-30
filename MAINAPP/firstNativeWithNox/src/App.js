/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
