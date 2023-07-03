const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();
app.use(cors());
const mongoURL =
  "mongodb+srv://sultanbek:2993814@cluster0.ft9hqea.mongodb.net/";
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

app.get("/", (req, res) => res.send("Hello"));
