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
} from 'react-native';


const App = () => {
  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 10' },
  ]);

 
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { name: 'Item 60' }]);
    setRefreshing(false)
  }
  return (
    <FlatList
      // numColumns={2}
      // horizontal
      // inverted
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({ item }) => (
        <View View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#ff00ff"]} />
      }
    />
    //      <ScrollView style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={["#ff00ff"]} />
    //   }
    // >
    //   {Items.map((object) => {
    //     return (
    //       <View style={styles.item} key={object.key}>
    //         <Text style={styles.text}>{object.item}</Text>
    //       </View>
    //     )
    //   })
    //   }
    // </ScrollView> 
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  item: {
    margin: 10,
    backgroundColor: "#4ae1fa",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  }
});

export default App;
