const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs"); // 파일 로드

app.use(express.static(__dirname + "/src"));
//app.use(express.static(path.join(__dirname, "html")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "video-conferencing.html"));
});
app.get("/about", (req, res) => {
  //res.sendFile(path.join(__dirname, "html", "about.html"));
  fs.readFile("/html/video-conferencing.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "test/html" });
    res.end(data);
  });
});
app.listen(8080, () => {
  console.log("Express App on port 8080!");
});
