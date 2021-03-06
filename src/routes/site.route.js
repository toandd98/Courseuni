const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site.controller');

router.get('/logout', siteController.logout);
router.get('/search', siteController.search);
router.get('/term', siteController.term);
router.get('/', siteController.index);

module.exports = router;
