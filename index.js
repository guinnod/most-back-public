const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5000;

app.use(bodyParser());

app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).send({ answer: "Typeform was submitted" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
