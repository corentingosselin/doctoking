const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.send(401, { error: 'You are not logged in' });
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            error: "You are not logged in!"
          });
        }
        req.userId = decoded.id;
        next();
      });
};