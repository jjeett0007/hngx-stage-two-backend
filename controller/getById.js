const User = require("../models/user"); 

exports.getUserbyId = async (req, res) => {
    try {
        const objectIdUserId = req.params.id;

        const user = await User.findById(objectIdUserId);

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json(user);
        console.log(res);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "No user with that ID"})
    }
};