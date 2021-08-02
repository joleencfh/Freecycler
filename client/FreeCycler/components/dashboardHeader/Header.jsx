import React from 'react';
import { Text, View } from 'react-native';
import styles from './header.style';

const Header = ({ yourAddress }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {yourAddress}
      {/* {JSON.stringify(theLocation)} */}
    </Text>
  </View>
);
export default Header;

//   const theLocation = props.foundLocation;
