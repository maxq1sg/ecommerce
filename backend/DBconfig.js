import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.yellow);
  } catch (error) {
    console.error(error.message.bold.underline.brightRed.bgYellow);
    process.exit(1);
  }
};
export default connectDB;
