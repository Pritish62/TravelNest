const User = require("../models/user.js");

module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signUp = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registredUser = await User.register(newUser, password);
        req.login(registredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "you registred successfully");
            res.redirect("/listings")
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup")
    };
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    const { username } = req.body;
    req.flash("error", `Welcome back ${username} in TravelNest`);
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        };
        req.flash("success", "you log out successfully");
        res.redirect("/listings")
    })
}