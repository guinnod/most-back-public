const parseFormAnswer = (rawAnswer) => {
    const clearedAnswer = clearAnswer(rawAnswer);

    const formattedAnswer = {
        full_name: "",
        gender: "",
        age: 0,
        isCEO: false,

        lifetime: "",
        main_job: "",
        pitchdeck: {},

        tech: "",
        stage: "",

        isInProduction: false,
        isInvestmented: false,
        isInRound: false,
        user_count: 0,

        experience: "",
        concurents: "",
        users_input: "",
    };

    formattedAnswer.full_name = findField("ФИО", clearedAnswer);
    formattedAnswer.gender = findField("Пол", clearedAnswer);
    formattedAnswer.age = findField("Возраст", clearedAnswer);
    formattedAnswer.isCEO = findField(
        "Вы технический основатель?",
        clearedAnswer
    );

    formattedAnswer.lifetime = findField(
        "Сколько времени вы работаете над этим проектом?",
        clearedAnswer
    );
    formattedAnswer.main_job = findField(
        "Что делает ваша компания? (250 символов или меньше)",
        clearedAnswer
    );
    formattedAnswer.pitchdeck = findField("Pitchdeck", clearedAnswer);

    formattedAnswer.tech = findField("Технология стартапа", clearedAnswer);
    formattedAnswer.stage = findField(
        "На каком этапе находится ваш стартап?",
        clearedAnswer
    );
    formattedAnswer.isInProduction = findField(
        "Используют ли люди ваш продукт",
        clearedAnswer
    );
    formattedAnswer.isInvestmented = findField(
        "Вы уже получили какие-либо инвестиции?",
        clearedAnswer
    );
    formattedAnswer.isInRound = findField(
        "Вы сейчас в раунде фандрайзинга?",
        clearedAnswer
    );
    formattedAnswer.user_count = findField(
        "Сколько активных пользователей или клиентов у вас есть?",
        clearedAnswer
    );
    formattedAnswer.experience = findField(
        "Почему вы выбрали эту идею? Есть ли у вас опыт в этой области?",
        clearedAnswer
    );
    formattedAnswer.concurents = findField(
        "Кто ваши конкуренты и что вы понимаете о своем бизнесе лучше, чем они?",
        clearedAnswer
    );
    formattedAnswer.users_input = findField(
        "Как пользователи находят ваш продукт?",
        clearedAnswer
    );
    return formattedAnswer;
};

const findField = (label, clearedAnswer) => {
    return clearedAnswer.find((e) => e.label === label) || "";
};

const clearAnswer = (rawAnswer) => {
    const clearedAnswer = [];
    rawAnswer.forEach((field) => {
        if (
            field.type === "INPUT_TEXT" ||
            field.type === "INPUT_NUMBER" ||
            field.type === "TEXTAREA"
        ) {
            clearedAnswer.push({
                label: field.label,
                value: field.value,
            });
        } else if (
            field.type === "MULTIPLE_CHOICE" ||
            field.type === "DROPDOWN"
        ) {
            const value = field.options.find(
                (e) => e.id === field.value[0]
            ).text;
            clearedAnswer.push({
                label: field.label,
                value: value,
            });
        } else if (field.type === "FILE_UPLOAD") {
            clearedAnswer.push({
                label: field.label,
                value: field.value,
            });
        }
    });
    return clearedAnswer;
};

module.exports = {
    parseFormAnswer,
    clearAnswer,
};
