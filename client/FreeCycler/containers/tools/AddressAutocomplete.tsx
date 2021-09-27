import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getLonLat } from '../../services/LocationService';
import { API_KEY} from '@env';

// type Props = {
//   setLocation: (data: string) => void;
//   setCoords: (data: { lat: number, lon: number}) => void;
// }


const AddressAutocomplete = ({ setLocation, setCoords }) => (
  <GooglePlacesAutocomplete
    placeholder="Enter the address..."
    onPress={(data) => {
      console.log('data from Address Autocomplete:  ', data )
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
      key: API_KEY,
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
