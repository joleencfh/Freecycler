export const ADD_PILE = 'ADD_PILE';
export const REMOVE_PILE = 'REMOVE_PILE';
export const SET_PILES = 'SET_PILES';

export const addPile = (types, location, owner, amountOfItems,
  time, description, pictureUri) => ({
  type: ADD_PILE,
  payload: {
    types,
    location,
    owner,
    amountOfItems,
    time,
    description,
    pictureUri,
  },
});

export const removePile = (id) => ({
  type: REMOVE_PILE,
  payload: {
    id,
  },
});

export const setPiles = (piles) => ({
  type: SET_PILES,
  payload: piles,
});
