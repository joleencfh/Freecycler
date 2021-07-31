import Pile from '../Pile';
import { SET_PILES, ADD_PILE, REMOVE_PILE } from './Actions';
// import PileUpdate from '../PileUpdate';

let pileId = 0;
// const updateId = 0;

const initialState = {
  piles: [],
};

const pilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PILE:
      // here
      const {
        types, location, owner, amountOfItems, time, description, pictureUri,
      } = action.payload;
      pileId += 1;
      const newPile = new Pile(
        pileId,
        types,
        location,
        owner,
        amountOfItems,
        '100%', // what's left
        time,
        description,
        // 0, //number of favorites
        pictureUri,
      );
      return [newPile].concat(state);

    case REMOVE_PILE:
      return state.filter((pile) => pile.id !== pileId);

    case SET_PILES:
      return [action.payload].concat(state);

    default: return state;
  }
};

// export const updateReducer = (state = [], action) => {

// };
export default pilesReducer;
