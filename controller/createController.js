const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!name || !nameRegex.test(name)) {
      return res
        .status(400)
        .json({
          message:
            "Name is required and should only contain letters and spaces",
        });
    }

    const user = new User({ name });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
