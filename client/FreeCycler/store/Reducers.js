// import Pile from '../Pile';
// // import PileUpdate from '../PileUpdate';

// let pileId = 0;
// // const updateId = 0;

// const pilesReducer = (state = [], action) => {
//   const {
//     types, location, owner, amountOfItems, time, description, pictureUri,
//   } = action.payload;
//   pileId += 1;
//   const newPile = new Pile(
//     pileId,
//     types,
//     location,
//     owner,
//     amountOfItems,
//     '100%', // what's left
//     time,
//     description,
//     // 0, //number of favorites
//     pictureUri,
//   );

//   switch (action.type) {
//     case 'ADD_PILE':
//       return [newPile].concat(state);
//     case 'REMOVE_PILE':
//       return state.filter((pile) => pile.id !== pileId);
//     default: return state;
//   }
// };

// export default pilesReducer;

// // export const updateReducer = (state = [], action) => {

// // };
