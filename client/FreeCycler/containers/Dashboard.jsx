import React from 'react';
import {
  Text, View, Button,
} from 'react-native';
// import { ScrollView, FlatList } from 'react-native-gesture-handler';
// import { useSelector } from 'react-redux';
// import PileCard from '';

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     marginHorizontal: 10,
//     flex: 6,
//   },
// });

const Dashboard = (props) => (
  // const piles = useSelector((state) => state.piles.piles);
  // return (
  // <ScrollView style={styles.container}>
  //   <FlatList
  //     data={piles}
  //             // to give a unique id to the flatlist, for each pile
  //     keyExtractor={(pile) => pile.id.toString()}
  //     renderItem={(data) => (
  //       <PileCard
  //         onPress={() => {
  //           props.navigation.navigate(
  //             'PileDetails',
  //             // to pass the pile data to PileDetails, accessible from route.params.keyname
  //             // fx route.params.types
  //             {
  //               id: data.item.id,
  //               types: data.item.types,
  //               location: data.item.location,
  //               owner: data.item.owner,
  //               amountOfItems: data.item.amountOfItems,
  //               description: data.item.description,
  //               // favoritesNum: data.item.favoritesNum,
  //               pictureUri: data.item.pictureUri,
  //               whatsLeft: data.item.whatsLeft,
  //               time: data.item.time,
  //             },
  //           );
  //         }}
  //         types={data.item.types}
  //         location={data.item.location}
  //         whatsLeft={data.item.whatsLeft}
  //         time={data.item.time}
  //       />
  //     )}
  //   />
  // </ScrollView>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Dashboard!</Text>
    <Button
      title="Go to Detail"
      onPress={() => props.navigation.navigate('PileDetail')}
    />
  </View>
  // );
);

export default Dashboard;

// import React from 'react';
// import { View, Text, StyleSheet, Button } from "react-native";

// const styles = StyleSheet.create({
//     screen: {
//       justifyContent: "center",
//       alignItems: "center",
//       flex: 1,
//     },
//     button: {
//       marginVertical: 10,
//       paddingHorizontal: 20,
//       paddingVertical: 10,

//     }
//   });

// export const Dashboard = ({navigation}) => (
// <View style={styles.screen}>
//     <Text>Freecycling opportunities in your area!</Text>
//         <Button
//         title="Add Pile"
//         onPress={() => navigation.navigate("AddPileStart")}
//         />
// </View>
// );
