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
  Modal,
  Image,
  ImageBackground
} from 'react-native';
import MashButton from './CustomButton';
import Header from './Header';

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
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' }}

      style={styles.body}>
      <Header />
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

      <MashButton
        onPressFunction={handlePressButton}
        title={submited ? 'Clear' : "Submit"}
      />

      {/* <Pressable
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
      </Pressable> */}

      {submited ?
        <View style={styles.body}>
          <Text style={styles.text} >
            Your Register as {name}
          </Text>
          <Image
            style={styles.image}
            // source={require('./assets/img3.jpg')}
            resizeMode="stretch"
          />
        </View>
        :
        <Image
          style={styles.image}
          // source={require('./assets/img1.jpg')}
          source={{ uri: 'https://p7.hiclipart.com/preview/969/637/161/comics-explosion-cloud-dialog.jpg' }}
          resizeMode="stretch"
        />
        // null
      }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#ffffff',
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
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export default App;
