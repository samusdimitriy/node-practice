const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://SamusDimitriy:221267Ii@cluster0.gfzyj4s.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("srtictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
