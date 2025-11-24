const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const Listing = require("./models/listing.js");
const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TravelNest');
}

app.get("/testlisting", async(req, res) => {
    const sampleListing = new Listing({
        title: "new india palace",
        description: "this is demo listing detail",
        price: 800,
        location: "bhopal",
        country: "india",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("all set");
});


app.get("/", (req, res) => {
    res.send("all set");
});

app.listen(3000, () => {
    console.log("server is started");
});