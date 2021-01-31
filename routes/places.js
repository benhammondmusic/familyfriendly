const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

// places/
// GET ALL PLACES
router.get('/', ctrls.places.index);
// DISPLAY FORM TO ADD NEW PLACE
router.get('/new', ctrls.places.newPlaceForm);
// CREATE THE NEW PLACE
router.post('/', ctrls.places.create);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
