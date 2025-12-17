const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});


router.post("/signup", async (req, res, next) => {
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
});

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), 
async (req, res) => {
    const { username } = req.body;
    req.flash("error", `Welcome back ${username} in TravelNest`);
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        };
        req.flash("success", "you log out successfully");
        res.redirect("/listings")
    })
})

module.exports = router;