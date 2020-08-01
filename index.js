const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(helmet()).use(cors(""));

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port} !`);
});
