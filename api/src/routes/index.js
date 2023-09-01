const { Router } = require('express');
const dogs = require('./dogs')
const temperaments = require('./temperaments')

const router = Router();

// Configurar los routers
router.use('/temperaments',temperaments);
router.use('/dogs',dogs);






module.exports = router;
