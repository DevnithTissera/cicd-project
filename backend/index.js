// cd - change directory
// cd .. - going back by one directory

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("I am working...");
});

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
