const admin = require("firebase-admin");
const serviceAccount = require("./firebase-admin-keys.json");

const databaseURL = process.env.DATABASE_URL;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL,
});

module.exports = admin;
