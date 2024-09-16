const User = require('../models/user.model');

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        let user = new User({ name, password, email });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};

module.exports = {
    createUser,
    getUsers,
}