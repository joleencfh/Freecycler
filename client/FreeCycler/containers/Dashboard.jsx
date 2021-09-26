import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';
import { loadPiles } from '../services/PilesService';
import Header from '../components/dashboardHeader/Header';
import PileCard from '../components/PileCard/PileCard';
import styles from './Dashboard.style';

const Dashboard = (props) => {
  const dispatch = useDispatch();

  const piles = useSelector((state) => state.piles);

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

  // console.log("these are the ", piles);
  // console.log("piles length", piles[0]);

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

  return (
    <ScrollView style={styles.container}>
      <Header yourAddress={address} />
      <FlatList
        data={piles[0]}
        keyExtractor={(pile) => pile._id}
        renderItem={(pile) => (
          <Pressable
            onPress={() => {
              props.navigation.navigate('PileDetail', {
                type: pile.item.type,
                location: pile.item.location,
                owner: pile.item.owner,
                amountOfItems: pile.item.amountOfItems,
                whatsLeft: pile.item.whatsLeft,
                time: pile.item.time,
                description: pile.item.description,
                pictureUri: pile.item.pictureUri,
              });
            }}
          >
            <PileCard
              pile={pile}
            />
          </Pressable>
        )}
      />
    </ScrollView>
  );
};
export default Dashboard;
