const express = require("express");
const router = express.Router();
const User= require("../models/user.js");

router.get("/singup",(req, res) => {
    res.render("users/signup.ejs")
});


router.post("/signup", async(req, res) => {
    const  {email, username, password} = req.body;
    const newUser = new User({email, username});
    const registredUser = await User.register(newUser, password);
    req.flash("success", "welcome to TravelNest!");
    res.redirect("/listings")

})
module.exports = router;