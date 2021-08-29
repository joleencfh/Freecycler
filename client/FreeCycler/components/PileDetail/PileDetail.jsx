import React from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity, Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { showLocation } from 'react-native-map-link';
import styles from './PileDetail.style';
import UpdateCard from '../UpdateCard/UpdateCard';

const pic1 = require('./book.jpg');
const pic2 = require('./book2.jpg');
const pic3 = require('./book3.jpg');

const PileDetail = ({ route, navigation }) => {
  if (route.params.type) {
    return (

      <ScrollView>

        <Image
          source={{ uri: route.params.pictureUri }}
          style={styles.image}
        />

        <View style={styles.container}>

          <View style={styles.box}>
            <Text>
              <Text style={styles.mainTitle}>Free </Text>
              <Text style={styles.category}>{route.params.type}</Text>
            </Text>
          </View>

          <View style={styles.section1}>

            <View>
              <Text style={styles.regularText}>
                <Icon style={[{ color: 'grey' }]} size={17} name="access-time" />
                <Text style={styles.regularText}>
                  {'  '}
                  Ends in
                </Text>
                {/* TODO ---- fix with the actual time left --- aka mock time */}
                <Text style={styles.regularBold}>
                  {' '}
                  {' '}
                  4
                  {' '}
                  hours
                  {' '}
                </Text>
              </Text>
            </View>

            <Text style={styles.regularText}>
              {route.params.amountOfItems}
              {' '}
              Items
            </Text>

          </View>
          <View style={styles.addressBox}>
            <Text>
              <Icon style={[{ color: '#5c5959' }]} size={17} name="place" />
              <Text style={styles.addressText}>
                {' '}
                {route.params.location}
              </Text>
            </Text>
            <Icon
              style={[{ color: '#5c5959' }]}
              size={24}
              name="arrow-forward"
              onPress={() => showLocation({
                latitude: route.params.coords.lat,
                longitude: route.params.coords.lng,
              })}
            />
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionTitle}>Extra Info</Text>
            <Text style={styles.descriptionText}>
              &quot;
              { route.params.description}
              &quot;
            </Text>
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.updateTitle}>Updates</Text>
            {/* <Text style={styles.descriptionText}>
              No updates so far...
            </Text> */}
          </View>
          <UpdateCard pic={pic1} user="Joe123" msg1="Took this lovely book." msg2="Thanks!" />
          <UpdateCard pic={pic2} user="Lily67" msg1="Awesome!" msg2="Will read this asap!" />
          <UpdateCard pic={pic3} user="Carmichael" msg1="Perfect book." msg2="Almost new." />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
          // onPress={cb}
              style={styles.plusButton}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate('AddUpdate');
                }}
              >
                <Icon size={46} name="add-circle-outline" />
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    );
  }

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};
export default PileDetail;
