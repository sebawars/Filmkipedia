const express = require('express');

const { list, get, upsert } = require('../controllers/film.controller');
const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);


module.exports = router;