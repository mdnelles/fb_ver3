const admin = require("firebase-admin");
const functions = require("firebase-functions");

//admin.initializeApp();
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

module.exports = { admin, db };
