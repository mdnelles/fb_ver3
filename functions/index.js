"use strict";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("express")();
const cors = require("cors");

app.use(cors({ origin: true })); // Automatically allow cross-origin requests

admin.initializeApp(functions.config().firebase);
//const { admin, db } = require("./util/admin");

//const
const { simple } = require("./handlers/simple");

app.get("/simple", simple);
//app.all("/", simple);
//app.get("/pass", pass);

const basicFunction = require("./basic"),
   getUsersFunction = require("./getUsers"),
   getUidInfoFunction = require("./getUidInfo"),
   getUserByEmailFunction = require("./getUserByEmail");

//admin.initializeApp(functions.config().firebase);

exports.basicFunction = functions.https.onRequest((req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
   res.set("Access-Control-Allow-Headers", "*");
   basicFunction.handler(req, res);
});

exports.getUsersFunction = functions.https.onRequest((req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
   res.set("Access-Control-Allow-Headers", "*");
   getUsersFunction.handler(req, res, admin);
});
exports.getUidInfoFunction = functions.https.onRequest((req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
   res.set("Access-Control-Allow-Headers", "*");
   getUidInfoFunction.handler(req, res, admin);
});
exports.getUserByEmailFunction = functions.https.onRequest((req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
   res.set("Access-Control-Allow-Headers", "*");
   getUserByEmailFunction.handler(req, res, admin);
});
