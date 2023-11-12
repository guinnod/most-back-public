const bodyParser = require("body-parser");
const express = require("express");
const { saveAnswers, getAnswers, updateAnswer } = require("./firebase");
const { parseFormAnswer, clearAnswer } = require("./parser");
const app = express();
const port = 5000;
const cors = require("cors");
const { default: axios } = require("axios");

app.use(bodyParser());
app.use(cors());

app.post("/", async (req, res) => {
    console.log(req.body);
    let id = "";
    if (req?.body?.eventType === "FORM_RESPONSE") {
        const formattedAnswer = parseFormAnswer(req.body.data.fields);
        id = await saveAnswers(formattedAnswer);
    }

    res.status(200).send({ answer: "Form was submitted" });
    try {
        if (req?.body?.eventType === "FORM_RESPONSE") {
            const dbody = clearAnswer(req.body.data.fields)
                .map((e) => ({
                    question: e.label,
                    answer: e.value,
                }))
                .filter((e) => typeof e.answer == "string");
            console.log(dbody);
            const { data } = await axios.post(
                "https://udew-back.vercel.app/api/gpt-chat/",
                dbody
            );
            console.log(data);
            updateAnswer(id, data);
        }
    } catch (error) {
        console.log(error.response.data);
        updateAnswer(id, { score: Math.random() * 100 });
    }
});

app.get("/get-all", async (req, res) => {
    const answers = await getAnswers();
    res.status(200).send(answers);
});

app.get("/get", async (req, res) => {
    const ress = parseFormAnswer(ex.data.fields);
    res.status(200).send(ress);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
