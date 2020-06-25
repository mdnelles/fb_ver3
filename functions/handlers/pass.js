const { admin, db } = require("../util/admin");

const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

exports.pass = (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
   res.set("Access-Control-Allow-Headers", "*");
   /// what works:
   // http://localhost:5001/baseURL.../hiThere -> req.params = hiThere
   // http://localhost:5001/baseURL..?name=Ted -> req.query.name = Ted
   console.log("pass function in index.js");
   console.log(req.params);
   //passFunction.handler(req, res, admin, "v1952uwiTEWqOVL4hzY1TTizwDH3");
   //passFunction.handler(req, res, admin);
};
