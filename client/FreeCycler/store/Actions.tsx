import { PileType } from "../Types/PileType";

// export const ADD_PILE = 'ADD_PILE';
// export const REMOVE_PILE = 'REMOVE_PILE';
// export const SET_PILES = 'SET_PILES';

// export type AddPileActionType = {
//   type: 'ADD_PILE',
//   payload: PileType,
// }

export const addPile = (pile: PileType) => ({
  type: 'ADD_PILE',
  payload: pile,
})
// export const removePile = (id: number) => ({
//   type: REMOVE_PILE,
//   payload: {
//     id,
//   },
// });

// export type SetPilesActionType = {
//   type: 'SET_PILES',
//   payload: PileType[],
// }

export const setPiles = (piles: PileType[]) => ({
  type:'SET_PILES',
  payload: piles,
});
