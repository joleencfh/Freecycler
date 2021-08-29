import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View, Text, TouchableOpacity, Image,
  TextInput, ScrollView, processColor,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-modern-datepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as ImagePicker from 'expo-image-picker';
import styles from './WizardPages.style';
import { getLonLat, postPile } from '../../../services/ApiService';

const WizardPages = ({ navigation }) => {
  const [pageNum, setPageNum] = useState(1);
  const [types, setTypes] = useState([]);
  const [numItems, setNumItems] = useState(0);
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    }
    )();
  }, []);

  const goToDetail = (newPile) => {
    navigation.navigate('PileDetail', {
      type: newPile.type,
      location: newPile.location,
      amountOfItems: newPile.amountOfItems,
      time: newPile.time,
      description: newPile.description,
      pictureUri: newPile.pictureUri,
      coords,
    });
  };

  const createPile = () => {
    const newPile = {
      type: types,
      location,
      amountOfItems: numItems,
      time: endTime,
      description,
      pictureUri: uploadedImage,
      coords,
    };
    dispatch(postPile(newPile));
    console.log(coords);
    goToDetail(newPile);
  };

  const samplePic = 'https://res.cloudinary.com/dfc03vohq/image/upload/v1627887048/Ps-and-Qs_Side-of-road-free_vuvlrd.jpg';

  // --------------- components ----------------------

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

  const FinalButtons = () => (
    <View style={styles.buttons}>
      <MyButton name="arrowleft" cb={() => setPageNum(pageNum - 1)} />
      <MyButton name="check" cb={() => createPile()} />
    </View>
  );

  const Title = ({ text }) => (
    <View>
      <Text style={styles.header}>{text}</Text>
    </View>
  );

  // ------------------ tools ------------------------

  const TypePicker = () => (
    <Picker
      selectedValue={types}
      onValueChange={(itemValue) => setTypes(itemValue)}
      style={{ height: 300, width: 300 }}
      itemStyle={{ fontSize: 25, fontFamily: 'Baskerville' }}
    >
      <Picker.Item label="Furniture" value="Furniture" />
      <Picker.Item label="Books" value="Books" />
      <Picker.Item label="Clothing" value="Clothing" />
      <Picker.Item label="Electronics" value="Electronics" />
      <Picker.Item label="Food" value="Food" />
      <Picker.Item label="Home Appliances" value="Home Appliances" />
      <Picker.Item label="Raw Materials" value="Raw Materials" />
      <Picker.Item label="Miscellaneous" value="Miscellaneous" />
    </Picker>
  );

  const AmountPicker = () => (
    <Picker
      selectedValue={numItems}
      onValueChange={(itemValue) => setNumItems(itemValue)}
      style={{ height: 300, width: 300 }}
      itemStyle={{ fontSize: 25, fontFamily: 'Baskerville' }}
    >
      <Picker.Item label="0 - 5" value="0 - 5" />
      <Picker.Item label="5 - 10" value="5 - 10" />
      <Picker.Item label="10+" value="10+" />
    </Picker>
  );

  const AddressAutocomplete = () => (
    <GooglePlacesAutocomplete
      placeholder="Enter the address..."
      onPress={(data) => {
        setLocation(data.description);
        getLonLat(data.description).then((coordData) => {
          console.log(coordData);
          setCoords(coordData);
          console.log('state coords:', coords);
        });
        // console.log('coords', getLonLat(data.description));
        // setCoords(getLonLat(data.description));
      }}
      query={{
        key: process.env.API_KEY,
        language: 'en',
      }}
      styles={{
        textInput: {
          fontSize: 20,
          fontFamily: 'Baskerville',
          color: '#696866',
        },
      }}
    />
  );

  const uploadPic = async (img) => {
    const picData = new FormData();
    picData.append('file', img);
    picData.append('upload_preset', 'su92rvke');
    picData.append('cloud_name', 'dfc03vohq');
    console.log(img);
    fetch('https://api.cloudinary.com/v1_1/dfc03vohq/image/upload', {
      method: 'POST',
      body: picData,
    }).then((res) => res.json())
      .then((pic) => {
        setUploadedImage(pic.url);
        console.log('this is the pic data', pic);
      });
  };

  const takePicture = async () => {
    const res = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],

    });
    if (!res.cancelled) {
      console.log('res', res.uri);
      const base64Img = `data:image/jpg;base64,${res.base64}`;
      uploadPic(base64Img);
    }
  };

  const renderSwitch = (page) => {
    switch (page) {
      case 1:
        return (
          <View style={styles.screen}>
            <View>
              <Title text="Here you can let people know what you're freecycling." />
              <Text style={styles.secondHeader}>Let&apos;s get started!</Text>
            </View>
            <MyButton name="arrowright" cb={() => setPageNum(pageNum + 1)} />
          </View>
        );
      case 2:
        return (
          <View style={styles.screen}>
            <Title text="What are you freecycling?" />
            <TypePicker />
            <Buttons />
          </View>
        );
      case 3:
        return (
          <View style={styles.screen}>
            <Title text="How many items?" />
            <AmountPicker />
            <Buttons />
          </View>
        );
      case 4:
        return (
          <View style={styles.screen}>
            <Title text="Location?" />
            <View style={{ height: 200, width: 300 }}>
              <AddressAutocomplete />
            </View>
            <Buttons />
          </View>
        );
      case 5:
        return (
          <View style={styles.screen}>
            <Title text="How long is it available?" />
            <Text style={styles.secondHeader}>Start Time:</Text>
            <DatePicker
              options={{
                backgroundColor: 'white',
                textHeaderColor: 'black',
                textDefaultColor: 'grey',
                selectedTextColor: '#fff',
                mainColor: 'black',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              onSelectedChange={(date) => setStartTime(date)}
            />
            <Buttons />
          </View>
        );
      case 6:
        return (
          <View style={styles.screen}>
            <Title text="How long is it available?" />
            <Text style={styles.secondHeader}>End Time:</Text>
            <DatePicker
              options={{
                backgroundColor: 'white',
                textHeaderColor: 'black',
                textDefaultColor: 'grey',
                selectedTextColor: '#fff',
                mainColor: 'black',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              onSelectedChange={(date) => setEndTime(date)}
            />
            <Buttons />
          </View>
        );
      case 7:
        return (
          <View style={styles.screen}>

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
          </View>
        );
      case 8:
        return (
          <View style={styles.screen}>
            <Title text="Now go ahead and take a picture" />
            {uploadedImage
              ? <Image source={{ uri: uploadedImage }} style={styles.imgStyle} />
              : <Image source={{ uri: samplePic }} style={styles.imgStyle} />}
            <MyButton name="pluscircleo" cb={() => takePicture()} />
            <Buttons />
          </View>
        );
      case 9:
        return (
          <View style={styles.screen}>
            <Title text="...And you're done." />
            <Title text="Hi five, freecycler!" />
            <FinalButtons />
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

export default WizardPages;
