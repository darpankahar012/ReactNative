/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {
  Text,
  StyleSheet,
  View,
  Linking,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please Write your name :
      </Text>
      <TextInput
        style={styles.input}
        // multiline
        // editable={false}
        secureTextEntry
        // keyboardType='numeric'
        onChangeText={(value) => setName(value)}
        placeholder="e.g. Darpan" />
      <Text style={styles.text} >
        Your Name is: {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20
  }
});

export default App;
