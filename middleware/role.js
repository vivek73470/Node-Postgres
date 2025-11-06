
const permit = (...allowedRules) => (req, res, next) => {
    const user = req.authUser;
    if (!user) return resizeBy.status(400).json({ message: 'Auth required' });
    if (!allowedRules.includes(user.role)) {
        return resizeBy.status(403).json({ message: 'Access Denied' })
    }
    next();
};
module.exports = { permit }