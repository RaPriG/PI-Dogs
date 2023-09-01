const { Router } = require('express');
const getAllDog = require('../controllers/getAllDog');
const getDogById = require('../controllers/getDogById');
const getDogByName = require('../controllers/getDogByName');
const postDog = require('../controllers/postDog');

const router = Router();

router.get('/name', getDogByName);
router.get('/:id', getDogById);
router.get('/', getAllDog);
router.post('/', postDog);


module.exports = router;