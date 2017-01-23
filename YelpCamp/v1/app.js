var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"},    
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},    
        {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7259/7121858075_7375241459.jpg"}    
    ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});