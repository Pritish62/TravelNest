const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});

const mongoose = require("mongoose");
const initData = require("./init.js");
const Listing = require("../models/listing.js");

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS);
    console.log("MongoDB Atlas connected");

    await seedDB();

    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

async function seedDB() {
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
  console.log("Demo data added");
}
main();

// const initDB = async () => {
//   await Listing.deleteMany({});

//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//     owner: "69417ad4239778d81c870831",
//     geometry: obj.geometry || {
//       type: "Point",
//       coordinates: [77.2090, 28.6139]
//     }
//   }));

  // await Listing.insertMany(initData.data);
//   console.log("data inserted");
// };

// initDB();


