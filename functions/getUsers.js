exports.handler = function (ref, res, admin) {
   admin
      .auth()
      .listUsers(1000)
      .then((listUsersResult) => {
         console.log(listUsersResult);
         res.send(JSON.stringify(listUsersResult));
         return null;
      })
      .catch((error) => {
         console.log("Error listing users:", error);
         res.send("error @ catch check console log" + error);
      });
};
