const router = require('express').Router();
const { getAllPiles, postPile } = require('./controllers/Pile');

router.get('/piles', getAllPiles);
router.post('/piles', postPile);

module.exports = router;
