const express = require('express');
const router = express.Router();

//Api/Users/
//Get Route
//Public Access
router.get('/', (req, res) => {

    res.send("Posts get route!");

});

module.exports = router;