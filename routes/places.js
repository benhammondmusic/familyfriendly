const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

/*    places/    */
// GET ALL PLACES
router.get('/', ctrls.places.index);
// DISPLAY FORM TO ADD NEW PLACE
router.get('/new', ctrls.places.newPlaceForm);
// CREATE THE NEW PLACE IN DB
router.post('/', ctrls.places.create);

// VIEW SPECIFIC PLACE AND ITS INFO/REPORT CARDS
router.get('/:id', ctrls.places.show);

// DISPLAY FORM TO ADD NEW REPORT CARD FOR SPECIFIC PLACE
router.get('/:id/reportcards/new', ctrls.reportcards.newReportCardForm);

// CREATE THE NEW REPORT CARD IN THE DB
router.post('/:id/reportcards', ctrls.reportcards.create);

// DISPLAY PREFILLED FORM TO EDIT PLACE IN DB
router.get('/:id/edit', ctrls.places.edit);

// UPDATE PLACE DETAILS IN DB USING NEW DETAILS FROM FORM
router.patch('/:id', ctrls.places.update);

// DELETE A PLACE FROM DB
router.delete('/:id', ctrls.places.destroy);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
