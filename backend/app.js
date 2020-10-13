const app = require("express")();
const bodyParser = require("body-parser");
const User = require("./models/user");
const Playlist = require("./models/playlist");
const Songs = require("./models/song");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/music-player", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  });

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.use("/", (req, res) => {
  res.send("music Player API");
});

app.listen(3000, () => {
  console.log("started on port 3000");
});
