

const User = require('../models/user'); // Import the User model

// Controller to delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const objectIdUserId = req.params.id;

        const deletedUser = await User.findByIdAndDelete(objectIdUserId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};
