const { connectToDatabase } = require("../lib/db");

module.exports = function myMiddleware(req, res, next) {
  // Connect to the database
  connectToDatabase();

  // Create a new user
  const user = { name: req.body.name };

  // Save the user to the database
  mongoose.model("User").create(user, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("User created successfully");
    res.status(201).json(user);
  });

  next();
}
