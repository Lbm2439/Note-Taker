var path = require("path");
var router = require("express").Router();
const notes = require("../db/notes");



router.get("/notes", function(req,res){
   
    console.log("inside api/notes");
})


module.exports = router;