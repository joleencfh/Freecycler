const Pile = require('../models/pileModel');

const getAllPiles = async (req, res) => {
  try {
    const piles = await Pile.find();
    res.status(200).json(piles);
  } catch (e) {
    console.error(e);
    res.status(400);
  }
};

const postPile = async (req, res) => {
  try {
    const result = await Pile.create(req.body);
    res.status(201).json(result);
    console.log('SERVER: PostPile executed');
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};

module.exports = { getAllPiles, postPile };
