const router = require('express').Router();
const {obtenerData} = require('../controller');

     router.get('/get',obtenerData);

module.exports = router;