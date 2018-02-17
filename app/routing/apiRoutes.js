
var friendData = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res){
    res.json(friendData);
});

app.post("/api/friends", function(req, res){
    friendData.push(req.body);

    // console.log(friendData[0].scores);
    // console.log(friendData[1].scores);

})

};