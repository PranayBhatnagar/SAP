const express = require('express');
const { createGreenCredit, getGreenCreditByUser } = require('../controllers/greenCreditController');
const router = express.Router();

router.post('/', createGreenCredit);
router.get('/:userId', getGreenCreditByUser);

module.exports = router;
