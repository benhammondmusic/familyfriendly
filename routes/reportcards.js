const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

/*  /reportcards */

// GET ALL REPORT CARDS
router.get('/', ctrls.reportcards.index);
// DELETE A REPORT CARD
router.delete('/:id', ctrls.reportcards.destroy);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
