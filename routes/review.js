const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const { reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { isLoggedin, isReviewAuthor } = require("../middleware.js");


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
router.post("/reviews",isLoggedin,validateReview,wrapAsync( async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("review saved");
    req.flash("success", "review is added successfully!");
    res.redirect(`/listings/${listing._id}`);
}));
//delete review route
router.delete("/reviews/:reviewId",isLoggedin,isReviewAuthor, wrapAsync(async(req, res)=>{
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "review is deleted");
    res.redirect(`/listings/${id}`);
}))

module.exports = router;