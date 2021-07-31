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

// const getPiles = () => fetch(`${url}`)
//   .then((res) => res.json())
//   .catch((err) => {
//     console.err(err);
//   });
