const mongoose = require("mongoose");
const initData = require("./init.js");
const Listing = require("../models/listing.js");


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TravelNest');
}

const initDB = async () => {
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "69417ad4239778d81c870831",
    geometry: obj.geometry || {
      type: "Point",
      coordinates: [77.2090, 28.6139]
    }
  }));

  await Listing.insertMany(initData.data);
  console.log("data inserted");
};

initDB();