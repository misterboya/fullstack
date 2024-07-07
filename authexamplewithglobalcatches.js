const express = require("express");
const app = express();

app.use(express.json());


app.get("/health-checkup", function(req, res) {
    const userName = req.headers.userName;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (userName != "venu" && password != "pass") {
        res.status(403).json({
            msg: "Invalid credentials"
        })
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "Something is up with your inputs"
        })
        return;
    }  

    res.json({
        msg: "Your kidney is fine!"
    })
});

app.post("/health-checkup", function(req, res) {
    //kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is " + kidneyLength);
});

//global catches
app.use(function(err, req, res, next) {
    res.status(500).json({
        msg: "An internal server error occurred."
    })
})

app.listen(3001);