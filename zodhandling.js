const express = require("express");
const app = express();
const zod = require("zod");
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function(req, res) {
    //kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    const response = schema.safeParse(kidneys);

    res.send({
        response
    });
});

app.listen(3001);