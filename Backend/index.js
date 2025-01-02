import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "./route/book.route.js";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

//connect to database mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

//define the routes
app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
