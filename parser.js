const parseFormAnswer = (rawAnswer) => {
    const clearedAnswer = [];
    rawAnswer.forEach((field) => {
        if (
            field.type === "INPUT_TEXT" ||
            field.type === "INPUT_NUMBER" ||
            field.type === "TEXTAREA"
        ) {
            const value = field.options.find(
                (e) => e.id === field.value[0]
            ).text;
            clearedAnswer.push({
                label: field.label,
                value: value,
            });
        } else if (
            field.type === "MULTIPLE_CHOICE" ||
            field.type === "DROPDOWN"
        ) {
            clearedAnswer.push({
                label: field.label,
                value: field.value,
            });
        } else if (field.type === "FILE_UPLOAD") {
            clearedAnswer.push({
                label: field.label,
                value: field.value,
            });
        }
    });

    const formattedAnswer = {
        author: {
            full_name: "",
            gender: "",
            age: 0,
            isCEO: false,
        },
        project: {
            lifetime: "",
            main_job: "",
            pitchdeck_url: "",
        },
        startup: {
            tech: "",
            stage: "",
        },
        achivements: {
            isInProduction: false,
            isInvestmented: false,
            isInRound: false,
            user_count: 0,
        },
        questions: {
            experience: "",
            concurents: "",
            users_input: "",
        },
    };

    return clearedAnswer;
};

module.exports = {
    parseFormAnswer,
};
