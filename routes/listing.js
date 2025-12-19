const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedin, isOwner} = require("../middleware.js");
const listingController = require("../controller/listing.js");

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);

    if(error){
        throw new AppError(400, error)
    }else{
        next()
    }
}
//index route
router.get("/", wrapAsync(listingController.index));

//new route
router.get("/new",isLoggedin, listingController.renderNewFrom);

//create route- subtmit data to db
router.post("/", validateListing ,wrapAsync(listingController.submitFromData));

//show route 
router.get("/:id",wrapAsync( listingController.showListing));

//edit route - render form
router.get("/:id/edit",isLoggedin,isOwner, wrapAsync(listingController.renderEditFrom));

//edit(post) = update db
router.put("/:id",isLoggedin,isOwner,validateListing, wrapAsync( listingController.updateListing));

//delete route
router.delete("/:id",isLoggedin, isOwner, wrapAsync( listingController.destroyListing));

module.exports = router;