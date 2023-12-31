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

const getAnswers = async () => {
    try {
        const answersRef = await unhandledAnswersRef.get();
        const results = [];
        answersRef.forEach((doc) => {
            results.push(doc.data());
        });
        return results;
    } catch (error) {
        console.error("Error during getting answers:", error);
    }
};

const updateAnswer = async (answerId, data) => {
    try {
        const orderRef = unhandledAnswersRef.doc(answerId);
        await orderRef.update({ score: data.score || 0 });
    } catch (error) {
        console.error("Error during updating answers:", error);
    }
};

module.exports = {
    saveAnswers,
    getAnswers,
    updateAnswer,
};
