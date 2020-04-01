var express = require("express")

var app = express();

var PORT = process.env.PORT || 4040;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });