// class Pile {
//   constructor(
//     type,
//     location,
//     amountOfItems,
//     time,
//     description,
//     pictureUri,
//   ) {
//     this.type = type;
//     this.location = location;
//     this.amountOfItems = amountOfItems;
//     this.time = time;
//     this.description = description;
//     this.pictureUri = pictureUri;
//   }
// }

// export default Pile;

export type PileType = {
  type: string;
  location: string;
  numItems: number;
  coords: string; //FIX THIS TYPE HERE
  startTime: string;
  endTime: string;
  description: string;
  image: string;
}
