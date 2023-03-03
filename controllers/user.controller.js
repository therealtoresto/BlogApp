import { User, create, findAll, findById } from '../models/user.model.js';

export const createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const newUser = await create(user);
    res.status(201).json(newUser);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await findAll();
    res.json(users);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}
