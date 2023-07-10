import mongoose from "mongoose";

const DBConnection = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => {
      console.error("failed to connect with mongoDB");
      console.error(err);
    });
};

export default DBConnection;
