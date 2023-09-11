const User = require("../models/user"); // Import the User model

exports.updateUserName = async (req, res) => {
  try {
    const objectIdUserId = req.params.id;
    const { name } = req.body;

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!name || !nameRegex.test(name)) {
      return res.status(400).json({
        message: "Name is required and should only contain letters and spaces",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      objectIdUserId,
      { name },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
    console.log(res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
