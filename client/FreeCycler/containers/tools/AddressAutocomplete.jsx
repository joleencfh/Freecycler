import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getLonLat } from '../../services/ApiService';

 const AddressAutocomplete = ({ setLocation, setCoords }) => (
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
