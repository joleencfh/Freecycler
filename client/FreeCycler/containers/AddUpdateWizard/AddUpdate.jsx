import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity,
  TextInput, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import { Picker } from '@react-native-picker/picker';
import styles from '../addPileWizard/WizardPages/WizardPages.style';

const AddUpdate = () => {
  const [pageNum, setPageNum] = useState(1);

  const MyButton = ({ name, cb }) => (
    <TouchableOpacity onPress={cb} style={styles.button}>
      <Icon size={26} name={name} />
    </TouchableOpacity>
  );

  const Buttons = () => (
    <View style={styles.buttons}>
      <MyButton name="arrowleft" cb={() => setPageNum(pageNum - 1)} />
      <MyButton name="arrowright" cb={() => setPageNum(pageNum + 1)} />
    </View>
  );

  const Title = ({ text }) => (
    <View>
      <Text style={styles.header}>{text}</Text>
    </View>
  );

  const renderSwitch = (page) => {
    switch (page) {
      case 1:
        return (
          <View style={styles.screen}>
            <View>
              <Title text="Give us an update!" />
              <Text style={styles.secondHeader}>Just a few quick steps.</Text>
            </View>
            <MyButton name="arrowright" cb={() => setPageNum(pageNum + 1)} />
          </View>
        );
      case 2:
        return (
          <View style={styles.screen}>

            <Title text="What did you take?" />

            <ScrollView
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
              }}
              keyboardShouldPersistTaps="handled"
            >
              <TextInput
                keyboardType="default"
                style={styles.input}
                // onChangeText={setDescription}
                // value={description}
                placeholder="Your message here."
                multiline
              />
            </ScrollView>

            <Buttons />
          </View>
        );
      default:
        return <Text>Not working</Text>;
    }
  };
  return (
    <View>
      {renderSwitch(pageNum)}
    </View>
  );
};

export default AddUpdate;
