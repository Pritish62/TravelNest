const mongoose = require("mongoose");
const initData = require("./init.js");
const Listing = require("../models/listing.js");


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TravelNest');
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data inserted");
}

initDB();