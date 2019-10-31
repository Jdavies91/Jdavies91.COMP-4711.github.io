let Score = require('../Model/database');

const game = (req, res, next) => {
  res.render('index', {});
};

const summary = (req, res, next) => {
  res.render('summary', {});
};

const leaderboard = (req, res, next) => {
  Score.getTop5(res);
};

const score = (req, res, next) => {
  Score.addScore(req);
  res.redirect(301, 'leaderboard');
};

module.exports = {
  game: game,
  summary: summary,
  leaderboard: leaderboard,
  score: score
};