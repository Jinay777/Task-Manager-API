const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./DB/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();

app.use(express.static("./public"));

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
