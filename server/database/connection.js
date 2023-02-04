const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      //   useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreatedIndex:true
    });

    console.log(`MongoDB Connected : ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
