const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);

    if(error){
        throw new AppError(400, error)
    }else{
        next()
    }
}
//index route
router.get("/", wrapAsync( async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//new route
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
})

//create route- subtmit data to db
router.post("/", validateListing ,wrapAsync( async (req, res, next) => {
    let newListing = new Listing(req.body.listing)
    await newListing.save()
    console.log(newListing)
    res.redirect("/listings")
    
}))

//show route 
router.get("/:id",wrapAsync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
}))

//edit route
router.get("/:id/edit", wrapAsync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
}))

//edit(post) = update db
router.put("/:id",validateListing, wrapAsync( async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }).then((res) => {
        console.log(res);
    })
    res.redirect("/listings")
}))

//delete route
router.delete("/:id", wrapAsync( async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    res.redirect("/listings")
}))

module.exports = router;