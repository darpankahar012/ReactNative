/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({ navigation }) {
  const omPressHandler = () => {
    navigation.navigate("Screen_B");
    // navigation.replace("Screen_B");
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable
        onPress={omPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? "#ddd" : "#0f0" })}
      >
        <Text style={styles.text}>
          Go To Screen B
        </Text>
      </Pressable>
    </View>
  )
}
function ScreenB({ navigation }) {
  const omPressHandler = () => {
    // navigation.navigate("Screen_A");
    navigation.goBack()
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        onPress={omPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? "#ddd" : "#0f0" })}
      >
        <Text style={styles.text}>
          Go To Screen A
        </Text>
      </Pressable>
    </View>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        // options={{
        //   header: () => null
        // }}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})

export default App;
