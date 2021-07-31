import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPiles } from '../services/ApiService';

// import { ScrollView, FlatList } from 'react-native-gesture-handler';

const Dashboard = (props) => {
  const piles = useSelector((state) => state.piles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPiles());
  }, []);

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard!</Text>

      <View>
        <Text>{JSON.stringify(piles[0], null, 2)}</Text>
      </View>

      <Button
        title="Go to Detail"
        onPress={() => props.navigation.navigate('PileDetail')}
      />

    </View>
  );
};

export default Dashboard;
