const bodyParser = require("body-parser");
const express = require("express");
const { saveAnswers } = require("./firebase");
const app = express();
const port = 5000;

app.use(bodyParser());

app.post("/", async (req, res) => {
    await saveAnswers(req.body);
    res.status(200).send({ answer: "Typeform was submitted" });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
