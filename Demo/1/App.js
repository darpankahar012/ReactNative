import React, { useState } from 'react';

import {
  Text,
  StyleSheet,
  View,
  Linking,
  Button,
} from 'react-native';


const App = () => {
  const [name, setName] = useState('style text ');
  const onChangeHandler = () => {
    setName('style test is Done !')

  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>My Name is {name}</Text>
      <View style={styles.button}>
        <Button title="Update Name" onPress={onChangeHandler}></Button>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({

  body: {
    flex: 1,
    // width: '100%',
    // height: "50%",
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#0fff',
    // borderRadius: 10,
    // margin:40
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
    textTransform: "uppercase"
  },
  button: {
    width: 200,
    height: 60,
  }
});

export default App;
