const express = require("express");
const dotenv = require("dotenv");
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connection.js");

dotenv.config();
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
// the middleware

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    console.log(`Server running on port : ${port}`);
  } catch (error) {
    console.log(error);
  }
};
// app.listen(port, () => {});

start();
