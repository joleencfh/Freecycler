import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './header.style';

const Header = ({ yourAddress }) => (
  <View>
    <View style={styles.container}>
      <View style={styles.location}>
        <Icon style={[{ color: 'white' }]} size={22} name="place" />
        <Text style={styles.text}>
          {yourAddress}
          {/* {JSON.stringify(theLocation)} */}
        </Text>
        <Icon style={[{ color: 'white' }]} size={28} name="keyboard-arrow-down" />
      </View>
      <Text style={styles.smallText}>5 km away</Text>
    </View>
  </View>
);
export default Header;

//   const theLocation = props.foundLocation;
