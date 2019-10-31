const express = require('express');
const router = express.Router();
const controller = require('../controllors/controllor');

router
  .get('/', controller.game)
  .get('/summary', controller.summary)
  .get('/leaderboard', controller.leaderboard)
  .post('/score', controller.score);

module.exports = router;