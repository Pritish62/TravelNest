const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const Listing = require("./models/listing.js");
const app = express();
const path = require("path");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TravelNest');
}

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("all set");
});

//index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

//new route
app.get("/listings/new", (req, res ) => {
    res.render("listings/new.ejs");
})

//create route- subtmit data to db
app.post("/listings", async (req, res) => {
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
})

//show route 
app.get("/listings/:id", async (req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing});
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