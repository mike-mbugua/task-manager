const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connection.js");

const app = express();
const port = process.env.PORT || 3000;

// the middleware
app.use(express.json());

app.use("/api/v1/tasks", tasks);

// connecting to the database using the async function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Server running on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
