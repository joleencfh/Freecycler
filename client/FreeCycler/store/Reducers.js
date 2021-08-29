// import Pile from '../Pile';
import { SET_PILES, ADD_PILE } from './Actions';
// import PileUpdate from '../PileUpdate';

const initialState = {
  piles: [],
};

const pilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PILE:
      // const {type, location, amountOfItems, time, description, pictureUri} = action.payload;
      // const newPile = new Pile(type, location, amountOfItems, time, description, pictureUri);
      return [action.payload].concat(state.piles);

      // case REMOVE_PILE:
      //   return state.filter((pile) => pile._id !== action.id);

    case SET_PILES:
      return [action.payload].concat(state.piles);

    default: return state;
  }
};

// export const updateReducer = (state = [], action) => {

// };
export default pilesReducer;
