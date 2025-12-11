const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const AppError = require("./utils/appError.js");

//routes
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/TravelNest');
}

app.engine('ejs', ejsMate);

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_mehtod"))


//use of routes
app.use("/listings", listings )
app.use("/listings/:id/reviews", reviews)


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
