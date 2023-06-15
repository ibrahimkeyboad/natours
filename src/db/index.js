import mongoose from 'mongoose';
import 'colors';
async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.DATABASE);
    console.log(`MongoDB Conneted At ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`${error}`.red);
  }
}

export default connectDB;
