const express = require("express");
const app = express();

//function that returns a boolean if the age of the person is more than 14
function isOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}

app.get("/ride1", function(req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully riden the ride"
        }) 
    } else {
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })
    }
});

function isOldEnoughMiddleware(req, res, next) {
    if (req.query.age >= 14) {
        next();
    } else {
        res.json({
            msg: "Sorry you are not of age yet"
        })
    }
}

app.get("/ridewithmiddleware", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully riden the middleware ride"
    })
});

app.listen(3001);
