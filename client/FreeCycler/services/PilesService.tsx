import Constants from 'expo-constants';
import { addOnePile, getAllPiles } from '../store/Slices';
import { PileType } from '../Types/PileType';
import { AppThunk } from '../store/store';

// to have Expo connect to server on local machine
const { manifest }: any = Constants;
const url = `http://${manifest.debuggerHost.split(':').shift()}:3001/piles`;

export const postPile = (pile: PileType): AppThunk => async (dispatch) => {
  try {
    await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pile),
    });
    dispatch(addOnePile(pile));
  } catch (err) {
    console.error(err);
  }
};

export const loadPiles = (): AppThunk  => async (dispatch) => {
  try {
    const response = await fetch(`${url}`)
    const piles = await response.json();
    dispatch(getAllPiles(piles));
  } catch (err) {
    console.error(err);
    console.log('error in loadPiles');
  }
};



