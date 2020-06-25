const jwt = require("jsonwebtoken");

const tokenTest = (token, res, jwt, next) => {
   jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
         //console.log(
         //   caller + " token not verified: " + err + "\ntoken=" + token
         //);
         // this will send forbidden 403 response
         res.sendStatus(403);
         return null;
      } else {
         //console.log("token ok caller -> " + caller);
         next(); // Next middleware
         return null;
      }
   });
};

exports.verifyToken = function (req, res, next) {
   console.log("***** next up is req.query");
   console.log(req.query);
   if (req.query.token !== undefined) {
      if (req.body.caller !== undefined) caller = req.body.caller;
      tokenTest(req.query.token, res, jwt, next);
      if (req.body.token !== undefined) {
         if (req.body.caller !== undefined) caller = req.body.caller;
         tokenTest(req.body.token, res, jwt, next);
      } else {
         // attempt to extract xhr authorization from header as last resort

         if (req.headers.token !== undefined) {
            var token = req.headers.token;

            if (req.headers.caller !== undefined) caller = req.headers.caller;
            tokenTest(req.headers.token, res, jwt, next);
         } else {
            console.log(
               "fail -> token == undefined | caller-> " +
                  req.body.caller +
                  " | token=" +
                  req.body.token
            );
            res.sendStatus(403);
         }
      }
   }
};
exports.okNext = function (req, res, next) {
   console.log("ok next");
   next();
};
