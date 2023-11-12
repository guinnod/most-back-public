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

app.get("/get", async (req, res) => {
    const ress = parseFormAnswer(ex.data.fields);
    res.status(200).send(ress);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

const ex = {
    eventId: "541341ac-5e45-45ee-8f57-5bc210228706",
    createdAt: "2023-11-12T01:23:17.101Z",
    data: {
        formId: "mRDGOd",
        createdAt: "2023-11-12T01:23:16.000Z",
        submissionId: "E1QqBo",
        formName: "Форма заявки",
        fields: [
            {
                label: "ФИО",
                type: "INPUT_TEXT",
                value: "Нурдаулет",
                key: "question_ob1KaV",
            },
            {
                options: [
                    {
                        id: "d5a39623-c226-4e79-b023-f66a67e194ea",
                        text: "Мужчина",
                    },
                    {
                        id: "e237788a-8eaf-43c7-9536-c9c5aa5e26f5",
                        text: "Женщина",
                    },
                    {
                        id: "895e5476-c3e6-43a0-b996-0de1385fa19d",
                        text: "Предпочитаю не указывать",
                    },
                ],
                label: "Пол",
                type: "DROPDOWN",
                value: ["d5a39623-c226-4e79-b023-f66a67e194ea"],
                key: "question_pb1JZ8",
            },
            {
                label: "Возраст",
                type: "INPUT_NUMBER",
                value: 20,
                key: "question_1AyNB1",
            },
            {
                options: [
                    {
                        id: "19e8118c-85fe-4967-b369-dc266bc616df",
                        text: "Да",
                    },
                    {
                        id: "f6e3e05e-f77d-4f0f-8d21-5be2886567ec",
                        text: "Нет",
                    },
                ],
                label: "Вы технический основатель?",
                type: "MULTIPLE_CHOICE",
                value: ["19e8118c-85fe-4967-b369-dc266bc616df"],
                key: "question_Meq6Gk",
            },
            {
                options: [
                    {
                        id: "fee2ccbd-c483-4157-ae20-2819fa323b2f",
                        text: "Меньше 6 месяцев",
                    },
                    {
                        id: "04725d1b-310d-4685-9df3-d4b992e540e8",
                        text: "6-12 месяцев",
                    },
                    {
                        id: "a6729ac1-7ffc-4382-8c27-83763030497c",
                        text: "1-2 года",
                    },
                    {
                        id: "467bf5de-c5ed-4c26-994f-8f2a4855c09b",
                        text: "Более 2 лет",
                    },
                ],
                label: "Сколько времени вы работаете над этим проектом?",
                type: "DROPDOWN",
                value: ["fee2ccbd-c483-4157-ae20-2819fa323b2f"],
                key: "question_PdevWb",
            },
            {
                label: "Что делает ваша компания? (50 символов или меньше)",
                type: "TEXTAREA",
                value: "LeanUp предоставляет удобный инструмент для поиска и анализа инфлюенсеров. Система настраиваемых фильтров позволяет выбирать личности исходя из целевых параметров, а автоматизированный анализ аккаунтов предоставляет детальную статистику по показателям активности.",
                key: "question_EkEvrN",
            },
            {
                label: "Pitchdeck",
                type: "FILE_UPLOAD",
                value: [
                    {
                        size: 1257253,
                        name: "Grey and Yellow Minimal Modern Company Profile Presentation_compressed.pdf",
                        id: "8NgJoA",
                        mimeType: "application/pdf",
                        url: "https://storage.tally.so/private/Grey-and-Yellow-Minimal-Modern-Company-Profile-Presentation_compressed.pdf?id=8NgJoA&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhOZ0pvQSIsImZvcm1JZCI6Im1SREdPZCIsImlhdCI6MTY5OTc1MjE5N30.T3YT76WanVc8g3AVohnv77HlRLD7o6g53waeED7wuzk&signature=876183a527dd5166a4f201443ab38c3132c319a5f7f7138d33bb069646c0c7c1",
                    },
                ],
                key: "question_xX14AE",
            },
            {
                options: [
                    {
                        id: "9e061ba5-dfb9-42c9-8c0d-6dddcf39abc2",
                        text: "EdTech",
                    },
                    {
                        id: "033e9d71-a87e-46ae-beab-347e2f201059",
                        text: "FinTech",
                    },
                    {
                        id: "ae21ffe8-d6c1-4471-83a7-e8b79e7f192e",
                        text: "MedTech",
                    },
                    {
                        id: "14a506a6-273f-4299-8b21-4739695f14a8",
                        text: "E-Commerce",
                    },
                    {
                        id: "f0c777bd-d68d-4700-9b1c-2470268742df",
                        text: "AI & ML",
                    },
                    {
                        id: "b3874a61-7a1b-4d8c-b256-be2145ed4176",
                        text: "Blockchain",
                    },
                ],
                label: "Технология стартапа",
                type: "DROPDOWN",
                value: ["14a506a6-273f-4299-8b21-4739695f14a8"],
                key: "question_rj1Gbv",
            },
            {
                options: [
                    {
                        id: "384f6800-d7fc-49ac-9cf0-17e104e0811a",
                        text: "Идея",
                    },
                    {
                        id: "080568ec-b0b4-414d-aa6f-a2e9607601c6",
                        text: "MVP",
                    },
                    {
                        id: "3697dddd-cb53-4484-b28c-85e30d293b8c",
                        text: "Пилотное тестирование",
                    },
                    {
                        id: "aecf1525-86ca-4cf3-a242-7824b1d90faf",
                        text: "PMF",
                    },
                    {
                        id: "d321d51e-7ce4-43c5-b30d-04284a7cffca",
                        text: "Масштабирование",
                    },
                    {
                        id: "e31c7b09-94a8-4dee-b230-24b6711f781a",
                        text: "Расширение",
                    },
                ],
                label: "На каком этапе находится ваш стартап?",
                type: "DROPDOWN",
                value: ["384f6800-d7fc-49ac-9cf0-17e104e0811a"],
                key: "question_44yADO",
            },
            {
                options: [
                    {
                        id: "17a5fa94-f4a4-41a0-beb0-f79411ee1bad",
                        text: "Да",
                    },
                    {
                        id: "714a5acb-b938-46a9-887c-6a83c347ce37",
                        text: "Нет",
                    },
                ],
                label: "Используют ли люди ваш продукт",
                type: "MULTIPLE_CHOICE",
                value: ["714a5acb-b938-46a9-887c-6a83c347ce37"],
                key: "question_J9xeGK",
            },
            {
                options: [
                    {
                        id: "cbb70589-12d1-492a-a875-99e54430d80c",
                        text: "Да",
                    },
                    {
                        id: "74c25f01-9311-4702-bb54-8ddc62343427",
                        text: "Нет",
                    },
                ],
                label: "Вы уже получили какие-либо инвестиции?",
                type: "MULTIPLE_CHOICE",
                value: ["74c25f01-9311-4702-bb54-8ddc62343427"],
                key: "question_gD1JgD",
            },
            {
                options: [
                    {
                        id: "83abfe14-777c-4534-ab64-710930ff8b57",
                        text: "Да",
                    },
                    {
                        id: "dfdc05bb-626f-42ad-af50-fbca5c43a316",
                        text: "Нет",
                    },
                ],
                label: "Вы сейчас в раунде фандрайзинга?",
                type: "MULTIPLE_CHOICE",
                value: ["dfdc05bb-626f-42ad-af50-fbca5c43a316"],
                key: "question_yPRogX",
            },
            {
                label: "Сколько активных пользователей или клиентов у вас есть?",
                type: "INPUT_NUMBER",
                value: 10,
                key: "question_Xxk89L",
            },
            {
                label: "Почему вы выбрали эту идею? Есть ли у вас опыт в этой области?",
                type: "INPUT_TEXT",
                value: "Вижу проблему в этой области, есть друзья которые работают в этой сфере. В результате постоянной дискуссии решили пробовать гипотезу",
                key: "question_NpQMaN",
            },
            {
                label: "Кто ваши конкуренты и что вы понимаете о своем бизнесе лучше, чем они?",
                type: "INPUT_TEXT",
                value: "TrendHero, они анализируют блогеров, мы с помощью анализа предлагаем варианты и работаем с обратной связью",
                key: "question_q4Mo98",
            },
            {
                label: "Как пользователи находят ваш продукт?",
                type: "INPUT_TEXT",
                value: "через блогеров, маркетологов и конечно же брендов",
                key: "question_QKWvbl",
            },
        ],
        respondentId: "5x4gab",
        responseId: "E1QqBo",
    },
    eventType: "FORM_RESPONSE",
};
