import { PileType } from '../Types/PileType';
import { UpdateType } from '../Types/UpdateType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { State } from 'react-native-gesture-handler';


// import { AddPileActionType, SetPilesActionType } from './Actions';
// import PileUpdate from '../PileUpdate';

// const initialState = {
//   piles: [],
// };
const initialState: PileType[] = [];

// const addPile = createAction<PileType>('piles/add');
// const removePile = createAction<number>('piles/remove');
// const getAllPiles = createAction<PileType[]>('piles/getAll');
// const addUpdate = createAction<UpdateType>('piles/addUpdate');
// const removeUpdate = createAction<number>('piles/removeUpdate');

// const pilesReducer = createReducer([] as PileType[], builder => {
//   builder
//     .addCase(addPile, (state, action) => {
//       state.push(action.payload)
//     })
// })




export const pilesSlice = createSlice({
  name: 'piles',
  initialState,
  reducers: {
    addOnePile: (state: PileType[], action: PayloadAction<PileType>) => {
      state.push(action.payload)
    },
    removeOnePile: (state: PileType[], action: PayloadAction<string>) => {
      state.filter(pile => pile._id === action.payload)
    },
    getAllPiles: (state: PileType[], action: PayloadAction<PileType[]>) => {
      state === action.payload
    },
    addUpdate: (state: PileType[], action: PayloadAction<UpdateType>) => {
      state.map(pile => {
                  if(pile._id === action.payload.pileId) pile.updates.push(action.payload)
                })
    },
    removeUpdate: (state: PileType[], action: PayloadAction<UpdateType>) => {
      state.map(pile => {
                  if(pile._id === action.payload.pileId)
                     pile.updates.filter(update => update.updateId === action.payload.updateId)
                })
    }
  }

})

// const pilesReducer = (state = initialState, action): PileType[] => {
//   switch (action.type) {
//     case 'ADD_PILE':
//       // const {type, location, amountOfItems, time, description, pictureUri} = action.payload;
//       // const newPile = new Pile(type, location, amountOfItems, time, description, pictureUri);
//       return [action.payload].concat(state);

//       // case REMOVE_PILE:
//       //   return state.filter((pile) => pile._id !== action.id);

//     case 'SET_PILES':
//       return [action.payload].concat(state);

//     default: return state;
//   }
// };

// export const updateReducer = (state = [], action) => {

// };
export default pilesSlice;
