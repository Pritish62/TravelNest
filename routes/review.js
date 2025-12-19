const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const { reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { isLoggedin, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controller/review.js");


const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);

    if(error){
        throw new AppError(400, error)
    }else{
        next()
    }
}

//-----Review------
//post review  route
router.post("/reviews",isLoggedin,validateReview,wrapAsync(reviewController.createReviewRender));

//delete review route
router.delete("/reviews/:reviewId",isLoggedin,isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports = router;