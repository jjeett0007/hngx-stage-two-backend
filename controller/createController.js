const User = require('../models/user'); 


exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const user = new User({ name });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
