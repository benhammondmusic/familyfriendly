const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

// places/
router.get('/', ctrls.places.show);
router.post('/', ctrls.places.create);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
