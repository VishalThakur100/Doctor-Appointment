const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Database connected successfully ${mongoose.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log(`DataBase connection issue ${error}`.bgRed.white);
  }
};

module.exports=connectDB