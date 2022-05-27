const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const userRouter = require("./src/routes/user.js");
const reviewRouter = require("./src/routes/review.js")

const port = 8080;

const app = express();
connect();
app.use(express.json());
app.use(cors());

// endpoints
app.use("/user", userRouter);
app.use("/review", reviewRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
