const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const Listing = require("./models/listing.js");
const app = express();
const path = require("path");
const ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync.js");
const AppError = require("./utils/appError.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const joi = require("joi");
const Review = require("./models/review.js");

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

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);

    if(error){
        throw new AppError(400, error)
    }else{
        next()
    }
}

const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);

    if(error){
        throw new AppError(400, error)
    }else{
        next()
    }
}

app.get("/", (req, res) => {
    res.send("all set");
});

//index route
app.get("/listings", wrapAsync( async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//new route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

//create route- subtmit data to db
app.post("/listings", validateListing ,wrapAsync( async (req, res, next) => {
    // const {title, description, image, price, location, country} = req.body;
    // const newListing = await new Listing ({
    //     title: title,
    //     description: description,
    //     image: image,
    //     price: price,
    //     location: location,
    //     country: country
    // })
   
    let newListing = new Listing(req.body.listing)
    await newListing.save()
    console.log(newListing)
    res.redirect("/listings")
    
}))

//show route 
app.get("/listings/:id",wrapAsync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
}))

//edit route
app.get("/listings/:id/edit", wrapAsync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
}))

//edit(post) = update db
app.put("/listings/:id",validateListing, wrapAsync( async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }).then((res) => {
        console.log(res);
    })
    res.redirect("/listings")
}))

//delete route
app.delete("/listings/:id", wrapAsync( async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    res.redirect("/listings")
}))

//-----Review------
//post route
app.post("/listings/:id/reviews", validateReview,wrapAsync( async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("review saved");
    res.redirect(`/listings/${listing._id}`);
}));

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

// app.get("/testlisting", async(req, res) => {
//     const sampleListing = new Listing({
//         title: "new india palace",
//         description: "this is demo listing detail",
//         price: 800,
//         location: "bhopal",
//         country: "india",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("all set");
// });