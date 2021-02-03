const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

/*  /reportCards */

// GET ALL REPORT CARDS
router.get('/', ctrls.reportCards.index);
// DELETE A REPORT CARD
router.delete('/:id', ctrls.reportCards.destroy);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
