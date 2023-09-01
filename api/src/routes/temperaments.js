const { Router } = require('express');
const getTemperament = require('../controllers/getTemperament');

const router = Router();

router.get('/', getTemperament);


module.exports = router;