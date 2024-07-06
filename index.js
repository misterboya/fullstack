const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.post('/backend-api/conversation', function(req, res) {
    const message = req.body.message;
    console.log(message);
    res.json({
        output: "2 + 2 = 4"
    })
})

function calculateSum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i; 
    }
    return ans;
}

app.get("/sum", function(req, res) {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("hi your answer is: " + ans);
})


app.listen(port)