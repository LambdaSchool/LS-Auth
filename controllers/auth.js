const requireSignIn = require('../services/passport').requireSignIn;
const requireAuth = require('../services/passport').requireAuth;
const getTokenForUser = require('../services/token');

const signIn = (req, res) => {
  res.send({ token: getTokenForUser(req.user) });
};
const signOut = (req, res) => {
  res.json({ success: true });
}
module.exports = (app) => {
  app.post('/login', requireSignIn, signIn);
  app.post('/logout', requireAuth, signOut);
};
