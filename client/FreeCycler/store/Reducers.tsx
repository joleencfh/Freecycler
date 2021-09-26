import { PileType } from '../Types/PileType';
import { UpdateType } from '../Types/UpdateType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


const initialState: PileType[] = [];


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
                     pile.updates.filter(update => update._id!== action.payload._id)
                })
    }
  }

})

export const { addOnePile, removeOnePile, getAllPiles, addUpdate, removeUpdate } = pilesSlice.actions;
export const pilesSelector = (state: RootState) => state.piles; 
export default pilesSlice;
