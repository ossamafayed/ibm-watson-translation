const express = require('express');

const {
    translate,
    identify
} = require('../controller/translate');
const {
    create,
    query
} = require('../controller/cloudant');

const router = express.Router();

router.post('/translate', translate);
router.post('/identify', identify);


router.post('/cloudant/create', create);
router.post('/cloudant/query', query);

module.exports = router;