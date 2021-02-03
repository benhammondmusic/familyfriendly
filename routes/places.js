const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

/*    places/    */
// GET ALL PLACES
router.get('/', ctrls.places.index);
// DISPLAY FORM TO ADD NEW PLACE
router.get('/new', ctrls.places.newPlaceForm);
// CREATE THE NEW PLACE
router.post('/', ctrls.places.create);

// VIEW SPECIFIC PLACE AND ITS INFO/REPORT CARDS
router.get('/:id', ctrls.places.show);

// DISPLAY FORM TO ADD NEW REPORT CARD FOR SPECIFIC PLACE
router.get('/:id/reportcards/new', ctrls.reportCards.newReportCardForm);

// CREATE THE NEW REPORT CARD IN THE DB
router.post('/:id/reportcards', ctrls.reportCards.create);

// DELETE A PLACE FROM DB
router.delete('/:id', ctrls.places.destroy);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
