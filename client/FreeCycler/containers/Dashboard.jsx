import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';
import { loadPiles } from '../services/ApiService';
import Header from '../components/dashboardHeader/Header';

// import { ScrollView, FlatList } from 'react-native-gesture-handler';

const Dashboard = (props) => {
  const piles = useSelector((state) => state.piles);
  const dispatch = useDispatch();

  const [foundLocation, setFoundLocation] = useState('hello');
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [address, setAddress] = useState('Fetching location...');

  const checkLocationEnabled = async () => {
    const isEnabled = await Location.hasServicesEnabledAsync();
    if (!isEnabled) {
      console.log(
        'The location service is not enabled',
      );
    } else {
      setLocationServiceEnabled(isEnabled);
    }
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Geolocation permission denied. Allow the app to use geolocation.');
    }
    // Getting address info
    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      const res = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      // console.log(JSON.stringify(res));
      const foundAddress = `${res[0].city}, ${res[0].postalCode}`;
      // console.log(foundAddress);
      setAddress(foundAddress);
    }
  };

  useEffect(() => {
    checkLocationEnabled();
    getLocation();
    dispatch(loadPiles());
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // console.log('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setFoundLocation(location);
      // console.log(location);
    })();
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
    <View>
      <Header yourAddress={address} />

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dashboard!</Text>

        <Button
          title="Go to Detail"
          onPress={() => props.navigation.navigate('PileDetail')}
        />

      </View>
    </View>
  );
};

export default Dashboard;
