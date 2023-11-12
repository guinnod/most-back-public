const bodyParser = require("body-parser");
const express = require("express");
const { saveAnswers, getAnswers } = require("./firebase");
const { parseFormAnswer } = require("./parser");
const app = express();
const port = 5000;

app.use(bodyParser());

app.post("/", async (req, res) => {
    if (req?.body?.eventType === "FORM_RESPONSE") {
        const formattedAnswer = parseFormAnswer(req.body.data.fields);
        await saveAnswers(formattedAnswer);
    }

    res.status(200).send({ answer: "Form was submitted" });
});

app.get("/get-all", async (req, res) => {
    const answers = await getAnswers();
    res.status(200).send(answers);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
