const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/post.controller');

router.post('/create', post_controller.post_create);
router.get('/show', post_controller.post_details);
router.put('/:id', post_controller.post_update);
router.delete('/:id/delete', post_controller.post_delete);
module.exports = router;