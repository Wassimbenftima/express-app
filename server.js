const express = require("express");
const app = express();
const birthday = new Date();
const day1 = birthday.getDay();
var noel95 = new Date();
var heure = noel95.getHours();

app.get("/home", (req, res) => {
  if (day1 > 0 && day1 < 6 && heure >= 9 && heure <= 17) {
    res.sendFile(__dirname + "/public/home.html");
  } else {
    res.send("page not found 404");
  }
});

app.get("/services", (req, res) => {
  if (day1 > 0 && day1 < 6 && heure >= 9 && heure <= 17) {
    res.sendFile(__dirname + "/public/services.html");
  } else {
    res.send("page not found 404");
  }
});
app.get("/contacts", (req, res) => {
  if (day1 > 0 && day1 < 6 && heure >= 9 && heure <= 17) {
    res.sendFile(__dirname + "/public/contact.html");
  } else {
    res.send("page not found 404");
  }
});

app.listen(3000, (err) => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
