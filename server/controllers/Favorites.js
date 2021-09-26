const User = require('../models/User');

const addFavorite = async(req, res) => {
    try {
        const filter = { _id: req.body.user_id}; 
        const user = await User.findOne(filter);
        user.favorites.addToSet(req.body.favorite);
        res.status(201).json(user);
    }
    catch(e) {
        console.error(e);
        res.status(400);
      }
}

const removeFavorite = async(req, res) => {
    try {
        const filter = { _id: req.body.user_id };
        const user = await User.findOne(filter);
        user.favorites.pull({ _id: req.body.pile_id});
        res.status(202).json(user);
    }
    catch(e) {
        console.error(e);
        res.status(400);
      }
}