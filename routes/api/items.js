const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

// router.post('/',  itemsCtrl.create, itemsCtrl.show)

module.exports = router;