if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
};
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedin, isOwner} = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudeConfig.js");
const upload = multer({ storage });

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);

    if(error){
        throw new AppError(400, error)
    }else{
        next()
    }
}

router.route("/")
.get(wrapAsync(listingController.index))//index route
.post(isLoggedin,upload.single('listing[image]'),validateListing ,wrapAsync(listingController.submitFromData));//create route- subtmit data to db


//new route
router.get("/new",isLoggedin, listingController.renderNewFrom);

router.route("/:id")
.get(wrapAsync( listingController.showListing))//show route 
.put(isLoggedin,isOwner,validateListing, wrapAsync( listingController.updateListing))//edit(post) = update db
.delete(isLoggedin, isOwner, wrapAsync( listingController.destroyListing));//delete route

//edit route - render form
router.get("/:id/edit",isLoggedin,isOwner, wrapAsync(listingController.renderEditFrom));

module.exports = router;