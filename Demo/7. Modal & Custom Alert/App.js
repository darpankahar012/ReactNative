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
  Modal
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  const [showWarning, setShowWarning] = useState(false);
  const [submited, setSubmited] = useState(false);
  const handlePressButton = () => {
    if (name.length > 3) {
      setSubmited(!submited)
    } else {
      setShowWarning(true)
    }
  }
  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => {
          setShowWarning(false)
        }}
        animationType="fade"
      >
        <View style={styles.centered}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning !</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The Name must be greater then 3 characters
              </Text>
            </View>
            <Pressable
              style={styles.warning_button}
              onPress={() => setShowWarning(false)}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={styles.text}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Please Write your name :
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="e.g. Darpan" />



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
    textAlign: "center",
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
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  }, centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#00000099'
  },
  warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default App;
