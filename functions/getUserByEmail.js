exports.handler = function (req, res, admin) {
   console.log("***getting user with email: " + req.query.email);
   if (req.query.email !== undefined) {
      admin
         .auth()
         .getUserByEmail(req.query.email)
         .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully fetched user data:", userRecord.toJSON());
            res.send(JSON.stringify(userRecord));
            return null;
         })
         .catch((error) => {
            console.log("Error fetching user data:", error);
            res.send("error");
         });
   } else {
      res.send("invalid email");
   }
};
