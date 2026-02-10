const User = require("../models/user-model");

const home = (req, res) => {
  res.status(200).send("This is user controller Home page");
};
const createUser = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "User already exist" });
    }

    const data = await User.create({
      username,
      email,
      phone,
      password,
    });

    const token = data.generateToken();

    res.status(200).json({
      msg: "User created successfully",
      token,
      user: {
        id: data._id,
        username: data.username,
        email: data.email,
        phone: data.phone,
      },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      const isMatchPassword = await userExist.matchPassword(password);

      if (!isMatchPassword) {
        return res.status(402).json({ msg: "Invalid credentials" });
      }

      const token = userExist.generateToken();

      return res.status(200).json({
        msg: "User login successfully",
        token,
        user: {
          id: userExist._id,
          username: userExist.username,
          email: userExist.email,
          phone: userExist.phone,
          isAdmin: userExist.iAdmin,
        },
      });
    }
    return res.status(402).json({ msg: "User does not exist" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { home, createUser, loginUser, getUser, updateUser, deleteUser };
