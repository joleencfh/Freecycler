class Pile {
  constructor(
    id,
    types,
    location,
    owner,
    amountOfItems,
    whatsLeft,
    time,
    description,
    // favoritesNum,
    pictureUri,
  ) {
    this.id = id;
    this.types = types;
    this.location = location;
    this.owner = owner;
    this.amountOfItems = amountOfItems;
    this.whatsLeft = whatsLeft;
    this.time = time;
    this.description = description;
    // this.favoritesNum = favoritesNum;
    this.pictureUri = pictureUri;
  }
}

export default Pile;
