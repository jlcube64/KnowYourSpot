const express = require('express');
const controller = require('../controllers/pageController');

const router = express.Router();

//GET / returns the index page

router.get('/', controller.index);

//GET /newConnection returns the new Connections Page


router.get('/connection',controller.connection);


router.get('/map',controller.map);

router.get('/contact',controller.contact);

router.get('/login',controller.login);




module.exports = router;