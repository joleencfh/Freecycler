import React from 'react';
import {
  Text, View, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './PileCard.style';

const PileCard = ({ pile, navigation }) => {
  const {
    pictureUri, type, location, amountOfItems, time,
  } = pile.item;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pictureUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.mainTitle}>
          <Text style={styles.free}>Free </Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Text>
          <Icon style={[{ color: '#5c5959' }]} size={15} name="place" />
          <Text style={styles.location}>{' '}{location}</Text>
        </Text>
        <View style={styles.lastSection}>
          <Text style={styles.amountOfItems}>{amountOfItems} items</Text>
          <Text>
            <Icon style={[{ color: '#5c5959' }]} size={15} name="access-time" />
            <Text style={styles.endsIn}>{' '}Ends in {' '}</Text>
            <Text style={styles.hours}>{time[3]} hours</Text>
          </Text>
        </View>
      </View>

    </View>
  );
};

export default PileCard;
