import mongoose from "mongoose";
const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGO_URI}/image`)
    .then(() => {
      console.log(`Connected to DB!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
