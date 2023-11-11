const admin = require("./firebase-admin");

const db = admin.firestore();

const unhandledAnswersRef = db.collection("unhandled_answers");

const saveAnswers = async (answers) => {
    try {
        const newAnswersRef = await unhandledAnswersRef.add(answers);
        const newAnswersId = newAnswersRef.id;
        return newAnswersId;
    } catch (error) {
        console.error("Error during saving answers:", error);
    }
};

module.exports = {
    saveAnswers,
};
