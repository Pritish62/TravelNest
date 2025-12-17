const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedin} = require("../middleware.js");

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
router.get("/new",isLoggedin, (req, res) => {
    res.render("listings/new.ejs");
})

//create route- subtmit data to db
router.post("/", validateListing ,wrapAsync( async (req, res, next) => {
    let newListing = new Listing(req.body.listing)
    await newListing.save();
    console.log(newListing);
    req.flash("success", "new listings is created succesfully!");
    res.redirect("/listings")
    
}))

//show route 
router.get("/:id",wrapAsync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
    req.flash("error", "listing does not exist");
    res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}))

//edit route
router.get("/:id/edit",isLoggedin, wrapAsync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
    req.flash("error", "listing does not exist");
    res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing })
}))

//edit(post) = update db
router.put("/:id",validateListing, wrapAsync( async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }).then((res) => {
        console.log(res);
    })
    req.flash("success", "listing is edited ");
    res.redirect("/listings");
}))

//delete route
router.delete("/:id",isLoggedin, wrapAsync( async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    req.flash("success", "listing is deleted!");
    res.redirect("/listings")
}))

module.exports = router;