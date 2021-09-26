import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getLonLat } from '../../services/LocationService';

type Props = {
  setLocation: (data: string) => void;
  setCoords: (data: { lat: number, lon: number}) => void;
}

const AddressAutocomplete = ({ setLocation, setCoords }: Props) => (
  <GooglePlacesAutocomplete
    placeholder="Enter the address..."
    onPress={(data) => {
      setLocation(data.description);
      getLonLat(data.description).then((coordData) => {
        console.log(coordData);
        setCoords(coordData);
        // console.log('state coords:', coords);
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

export default AddressAutocomplete;
