const User = require('../models').User;
exports.checkRole = function (roles) {
    return async (req, res, next) => {
        if (!req.userId) res.send(400, { error: 'Invalid UserID equest' });

        const user = await User.findByPk(req.userId);
        if (!user) return res.send(400, { error: 'Invalid User Request' });
        if (roles === 'any' || roles.includes('any') || roles.includes(user.role)) {
            req.user = user;
            return next();
        } else {
            res.send(401, { error: 'You are not allowed to do that' });
        }

    }
}