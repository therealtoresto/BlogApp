import mongoose from 'mongoose';

const { Schema, ObjectId, model, save, find } = mongoose;

const userSchema = new Schema({
  id: {
    type: ObjectId,
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

/**
 * 
 * @param {User} data
 * @returns {User}
 */
const create = async (data) => {
  const user = new User(data);
  return await user.save();
}

/**
 * @param {null}
 * @returns {User[]}
 */
const findAll = async () => {
  return await User.find();
}

/**
 * @param {number} id
 * @returns {User}
 */
const findById = async (id) => {
  return await User.findById(id);
}

/**
 * @typedef {Schema} User
 */
const User = model('User', userSchema);

export { User, create, findAll, findById };
