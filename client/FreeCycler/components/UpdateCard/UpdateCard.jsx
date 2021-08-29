import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './UpdateCard.style';




const UpdateCard = ({ user, msg1, msg2, pic }) => (
  <View style={styles.container}>
    <Image
      source={pic}
      style={styles.image}
    />
    <View>
      <Text style={styles.username}>{user}</Text>
      <Text style={styles.message}>&quot;{msg1}. </Text>
      <Text style={styles.message}>{msg2}&quot;</Text>
    </View>
  </View>
);

export default UpdateCard;
