// const close = document.querySelector(".close");
// const open = document.querySelector(".ham");
//const menu = document.querySelector(".menu");
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/index.html'));
});
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/html/Styles'));

app.listen(port);
console.log('Server started at http://localhost:' + port);
// close.addEventListener("click", () => {
//   menu.style.visibility = "hidden";
// });
// open.addEventListener("click", () => {
//   menu.style.visibility = "visible";
// });
