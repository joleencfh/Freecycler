import Constants from 'expo-constants';
import { setPiles } from '../store/Actions';

// needed to have Expo connect to server on local machine
const { manifest } = Constants;
const url = `http://${manifest.debuggerHost.split(':').shift()}:3001/piles`;

// the following thunks create a function in which you can access
// your store data and dispatch new actions

export const savePiles = () => async (dispatch, getState) => {
  // get all piles from Redux state
  const { piles } = getState().piles;
  // post them to DB
  try {
    await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(piles),
    });
  } catch (err) {
    console.error(err);
  }
};

export const loadPiles = () => async (dispatch) => {
  try {
    const piles = await fetch(`${url}`).then((res) => res.json());
    console.log({ piles });
    dispatch(setPiles(piles));
  } catch (err) {
    console.error(err);
    console.log('loadPiles executed');
  }
};

// ----------------end of thunks ------------------

export const getLonLat = async (address) => {
  const encodedAddress = encodeURI(address);
  let lonLat;
  try {
    lonLat = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodedAddress}&inputtype=textquery&key=AIzaSyBZ6MJ6FdK2jdxooX3Eogsd_GD6njPWtu8&fields=geometry`)
      .then((res) => res.json());
    console.log(lonLat.candidates[0].geometry.location);
  } catch (e) {
    console.err(e);
  }
  // to get only the lon and lat as an object
  return lonLat.candidates[0].geometry.location;
};

// google api response format:
// {
//   "candidates": [
//       {
//           "geometry": {
//               "location": {
//                   "lat": 45.6346308,
//                   "lng": 9.0504105
//               },
//               "viewport": {
//                   "northeast": {
//                       "lat": 45.63609037989271,
//                       "lng": 9.051762479892721
//                   },
//                   "southwest": {
//                       "lat": 45.63339072010727,
//                       "lng": 9.049062820107277
//                   }
//               }
//           }
//       }
//   ],
//   "status": "OK"
// }
