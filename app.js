const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const AppError = require("./utils/appError.js");
const listingsRoute = require("./routes/listing.js");
const reviewsRoute = require("./routes/review.js");
const usersRoute = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

 
const sessionInfo = {
    secret: "thisissecretkey",
    resave : false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

app.use(session(sessionInfo));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//to access local variables
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.isHome = req.path === "/listings";
    next();
});

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/TravelNest');
}

app.engine('ejs', ejsMate);
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"))



//use of routes
app.use("/listings", listingsRoute )
app.use("/listings/:id", reviewsRoute)
app.use("/", usersRoute);


// app.all("*", (req, res, next) => {
// next(new AppError(404, "page is not exist"))
// })

app.use((err, req, res, next) => {
    let{statusCode = 500, message} = err;
    // res.status(statusCode).render("error.ejs")
    res.status(statusCode).send(message);
    
})

app.listen(3000, () => {
    console.log("server is started");
});
