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
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]);

  // const DATA = [
  //   {
  //     title: 'Title 1',
  //     data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  //   },
  //   {
  //     title: 'Title 2',
  //     data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  //   },
  //   {
  //     title: 'Title 3',
  //     data: ['Item 3-1'],
  //   },
  //   {
  //     title: 'Title 4',
  //     data: ['Item 4-1', 'Item 4-2'],
  //   },
  // ];
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    let incrementValue = Items.length;
    setItems([...Items, {
      "title": `Title ${incrementValue + 1}`,
      "data": [`Item ${incrementValue + 1}-1`, `Item ${incrementValue + 1}-2`],
    }]);
    setRefreshing(false);
  };
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Items}
      renderItem={({ item }) => (
        <View style={styles.item1}>
          <Text style={styles.text}>{item}</Text>
         </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
    // <FlatList
    //   // numColumns={2}
    //   // horizontal
    //   // inverted
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={["#ff00ff"]} />
    //   }
    // />
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
    backgroundColor: '#4ae1fa',
    borderColor:'#0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
