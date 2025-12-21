const Listing = require("../models/listing.js")

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}
module.exports.renderNewFrom  =  (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.submitFromData =  async (req, res, next) => {
    const url = req.file.path;
    const filename = req.file.filename;

    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
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
    console.log("BODY:", req.body);
console.log("FILE:", req.file);

  const { id } = req.params;

  // update text fields
  const listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true }
  );

  // if new image uploaded
  if (req.file) {
    listing.image = {
      url: req.file.path,      // Cloudinary URL
      filename: req.file.filename
    };
    await listing.save();
    console.log(listing)
  }

  req.flash("success", "Listing edited successfully");
  res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    req.flash("success", "listing is deleted!");
    res.redirect("/listings")
}