import React, { useState } from 'react';

import {
  Text,
  StyleSheet,
  View,
  Linking,
  Button,
} from 'react-native';


const App = () => {

  return (
    <>
      <View style={styles.body}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View >     
      <View style={styles.body2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>        
      </View >
      <View style={styles.body3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>        
      </View >
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // height:400,
    // height:400,
    backgroundColor: '#000fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  body2: {
    flex: 2,
    // height:400,
    // height:400,
    backgroundColor: '#000fff',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  body3: {
    flex: 8,
    // height:400,
    // height:400,
    backgroundColor: '#000fff',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    // width: 100,
    // height: 100,
    flex: 1,
    backgroundColor: "#00ffff",
    alignItems: 'center',
    justifyContent: "center",
  },
  view2: {
    flex: 2,
    // width: 100,
    // height: 100,
    backgroundColor: "#ff00ff",
    alignItems: 'center',
    justifyContent: "center",
  },
  view3: {
    flex: 3,
    // width: 100,
    // height: 100,
    backgroundColor: "#ffff00",
    alignItems: 'center',
    justifyContent: "center",
  },
  view4: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "#FF0000",
    alignItems: 'center',
    justifyContent: "center",
  },
  view5: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "#00FF00",
    alignItems: 'center',
    justifyContent: "center",
  },
  view6: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: "center",
  },
  view7: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "#000fff",
    alignItems: 'center',
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  }
});

export default App;
