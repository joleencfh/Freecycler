import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Image, TextInput, ScrollView, Alert } from 'react-native';
import { MyButton, Buttons, FinalPageButtons, Title } from '../../commonWizardComponents';
import { TypePicker, AmountPicker, CustomDatePicker } from '../../tools/Pickers';
import AddressAutocomplete from '../../tools/AddressAutocomplete';
import * as ImagePicker from 'expo-image-picker';
import takePicture from '../../tools/TakePicture';
import styles from './WizardPages.style';
import { postPile } from '../../../services/ApiService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../Types/NavigationTypes';
import { PileType } from '../../../Types/PileType';
import { UpdateType } from '../../../Types/UpdateType';

type Props = NativeStackScreenProps<RootStackParamList, 'PileDetail' >;

const WizardPages = ({ navigation }: Props) => {
  const [pageNum, setPageNum] = useState(1);
  const [types, setTypes] = useState(["No Type"]);
  const [numItems, setNumItems] = useState(0);
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState({lat: 0, lon: 0});
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera permissions to make this work!');
      }
    }
    )();
  }, []);

  const goToDetail = (newPile: PileType) => {
    navigation.navigate('PileDetail', newPile

    );
  };

  const createPile = () => {
    const newPile: PileType = {
      types,
      location,
      numItems,
      coords,
      startTime,
      endTime,
      owner: "unknown", //FIX THIS 
      whatsLeft: 4,
      description,
      image: uploadedImage,
      updates: [] as UpdateType[],
    };
    dispatch(postPile(newPile));
    // console.log(coords);
    goToDetail(newPile);
  };

  interface AuxProps {
    children: JSX.Element | JSX.Element[];
  }

  const ScreenLayout = ({ children }: AuxProps)=> (
    <View style={styles.screen}>
      {children}
    </View>
  )

  const samplePic = 'https://res.cloudinary.com/dfc03vohq/image/upload/v1627887048/Ps-and-Qs_Side-of-road-free_vuvlrd.jpg';


  const renderSwitch = (page: number) => {
    switch (page) {
      case 1:
        return (
          <ScreenLayout>
            <View>
              <Title text="Here you can let people know what you're freecycling." />
              <Text style={styles.secondHeader}>Let&apos;s get started!</Text>
            </View>
            <MyButton name="arrowright" cb={() => setPageNum(pageNum + 1)} />
          </ScreenLayout>
        );
      case 2:
        return (
          <ScreenLayout>
            <Title text="What are you freecycling?" />
            <TypePicker types={types} setTypes={setTypes}/>
            <Buttons />
          </ScreenLayout>
        );
      case 3:
        return (
          <ScreenLayout>
            <Title text="How many items?" />
            <AmountPicker numItems={numItems} setNumItems={setNumItems} />
            <Buttons />
          </ScreenLayout>
        );
      case 4:
        return (
          <ScreenLayout>
            <Title text="Location?" />
            <View style={{ height: 200, width: 300 }}>
              <AddressAutocomplete setLocation={setLocation} setCoords={setCoords} />
            </View>
            <Buttons />
          </ScreenLayout>
        );
      case 5:
        return (
          <ScreenLayout>
            <Title text="How long is it available?" />
            <Text style={styles.secondHeader}>Start Time:</Text>
            <CustomDatePicker setTime={setStartTime} />
            <Buttons />
          </ScreenLayout>
        );
      case 6:
        return (
          <ScreenLayout>
            <Title text="How long is it available?" />
            <Text style={styles.secondHeader}>End Time:</Text>
            <CustomDatePicker setTime={setEndTime} />
            <Buttons />
          </ScreenLayout>
        );
      case 7:
        return (
          <ScreenLayout>
            <Title text="Tell us more..." />
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
                onChangeText={setDescription}
                value={description}
                placeholder="Describe your items."
                multiline
              />
            </ScrollView>

            <Buttons />
          </ScreenLayout>
        );
      case 8:
        return (
          <ScreenLayout>
            <Title text="Now go ahead and take a picture" />
            {uploadedImage
              ? <Image source={{ uri: uploadedImage }} style={styles.imgStyle} />
              : <Image source={{ uri: samplePic }} style={styles.imgStyle} />}
            <MyButton name="pluscircleo" cb={() => takePicture(setUploadedImage)} />
            <Buttons />
          </ScreenLayout>
        );
      case 9:
        return (
          <ScreenLayout>
            <Title text="...And you're done." />
            <Title text="Hi five, freecycler!" />
            <FinalPageButtons createPile={createPile}/>
          </ScreenLayout>
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

export default WizardPages;
