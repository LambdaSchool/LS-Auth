const requireSignIn = require('../services/passport').requireSignIn;
const requireAuth = require('../services/passport').requireAuth;
const logOut = require('../services/passport').logOut;
const getTokenForUser = require('../services/token');

const signIn = (req, res) => {
  res.send({ token: getTokenForUser(req.user) });
};
const signOut = (req, res) => {
  req.logOut();
  res.json({ success: true });
}
module.exports = (app) => {
  app.post('/login', requireSignIn, signIn);
  app.post('/logout', requireAuth, signOut);
};
