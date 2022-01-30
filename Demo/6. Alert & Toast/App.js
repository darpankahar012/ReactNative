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
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  const [submited, setSubmited] = useState(false);
  const handlePressButton = () => {
    if (name.length > 3) {
      setSubmited(!submited)
    } else {
      // Alert Box
      // Alert.alert('Warning',
      //   'The name must be longer then 3 characters',
      //   // single Button
      //   // [{ text: 'Ok', onPress: () => console.log('Ok Pressed!'),style:'destructive' }])


      //   // multiple Button
      //   [
      //     { text: 'Do Not show again', onPress: () => console.warn('Do Not show again!') },
      //     { text: 'Cancel', onPress: () => console.warn('Cancel Pressed!') },
      //     { text: 'Ok', onPress: () => console.warn('Ok Pressed!') },
      //   ],
      //   { cancelable: true, onDismiss: () => console.warn('Alert Dismissed!') }
      // )



      // ToastAndroid.SHORT : Toast For 2 second
      // ToastAndroid.show('The name must be longer then 3 characters', ToastAndroid.SHORT)

      // ToastAndroid.LONG : Toast For 3.5 second
      // ToastAndroid.show('The name must be longer then 3 characters', ToastAndroid.LONG)


      // ToastAndroid.showWithGravity(
      //   'The name must be longer then 3 characters',
      //   ToastAndroid.SHORT,
      //   ToastAndroid.CENTER
      // )


      // ToastAndroid.showWithGravityAndOffset(
      //   'The name must be longer then 3 characters',
      //   ToastAndroid.SHORT,
      //   ToastAndroid.TOP,
      //   0,
      //   500,
      // )


    }
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please Write your name :
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="e.g. Darpan" />
      {/* <Button
        // disabled={submited}
        title={submited ? 'Clear' : "submit"}
        onPress={() => handlePressButton()}
        color="#00f"
      /> */}
      {/* <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button} onPress={handlePressButton}>
      <Text style={styles.text}>{submited ? 'Clear' : "Submit"}</Text>
    </TouchableOpacity> */}
      {/* <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#dddddd"
        style={styles.button} onPress={handlePressButton}>
        <Text style={styles.text}>{submited ? 'Clear' : "Submit"}</Text>
      </TouchableHighlight> */}



      {/* <TouchableWithoutFeedback
        style={styles.button}
        onPress={handlePressButton}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{submited ? 'Clear' : "Submit"}</Text>
        </View>
      </TouchableWithoutFeedback> */}




      <Pressable
        onPress={handlePressButton}
        android_ripple={{ color: "#00f" }}
        // when click around button 
        // hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        // disabled={submited}
        // onLongPress={handlePressButton}
        // delayLongPress={500}
        // onPress={handlePressButton}
        // style={styles.button}
        style={({ pressed }) => [{ backgroundColor: pressed ? "#dddd" : "#00ff00" }, styles.button]}
      >
        <Text style={styles.text}>
          {submited ? 'Clear' : "Submit"}
        </Text>
      </Pressable>

      {submited ?
        <Text style={styles.text} >
          Your Register as {name}
        </Text>
        :
        null
      }
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
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    // backgroundColor: "#00ff00"
  },
});

export default App;
