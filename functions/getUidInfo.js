exports.handler = function (req, res, admin) {
   if (req.query.uid !== undefined) {
      admin
         .auth()
         .getUser(req.query.uid)
         .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully fetched user data:", userRecord.toJSON());
            res.send(JSON.stringify(userRecord));
            return null;
         })
         .catch((error) => {
            console.log("Error fetching user data:", error);
            res.send("error<br>" + error);
         });
   } else {
      res.send("invalid user id");
   }
};
