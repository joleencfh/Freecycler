import { PileType } from '../Types/PileType';
import { AddPileActionType, SetPilesActionType } from './Actions';
// import PileUpdate from '../PileUpdate';

// const initialState = {
//   piles: [],
// };
const initialState: PileType[] = [];

const pilesReducer = (state = initialState, action: AddPileActionType | SetPilesActionType): PileType[] => {
  switch (action.type) {
    case 'ADD_PILE':
      // const {type, location, amountOfItems, time, description, pictureUri} = action.payload;
      // const newPile = new Pile(type, location, amountOfItems, time, description, pictureUri);
      return [action.payload].concat(state);

      // case REMOVE_PILE:
      //   return state.filter((pile) => pile._id !== action.id);

    case 'SET_PILES':
      return [action.payload].concat(state);

    default: return state;
  }
};

// export const updateReducer = (state = [], action) => {

// };
export default pilesReducer;
