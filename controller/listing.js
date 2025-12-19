const Listing = require("../models/listing.js")

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}
module.exports.renderNewFrom  =  (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.submitFromData =  async (req, res, next) => {
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    console.log(newListing);
    req.flash("success", "new listings is created succesfully!");
    res.redirect("/listings")
    
};

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
    path: 'reviews',
    populate: {
      path: 'author'
    }
  })
    .populate("owner");
    if(!listing){
    req.flash("error", "listing does not exist");
    res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.renderEditFrom =  async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
    req.flash("error", "listing does not exist");
    res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing })
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }).then((res) => {
        console.log(res);
    })
    req.flash("success", "listing is edited ");
    res.redirect("/listings");
}

module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    req.flash("success", "listing is deleted!");
    res.redirect("/listings")
}