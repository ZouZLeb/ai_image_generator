import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); // for searching functionality

  mongoose
    .connect(url)
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
