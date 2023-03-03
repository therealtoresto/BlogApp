import mongoose from 'mongoose';

const { Schema, model, ObjectId, save, find } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

/**
 * @param {Post} data
 * @returns {Post}
 */
const create = async (data) => {
  const post = new Post(data);
  return await post.save();
}
/**
 * @param {number} id 
 * @returns {Post}
 */
const findById = async (id) => {
  return await Post
    .findById(id)
    .populate('author', 'name')
    .populate('comments', 'content');
}

/**
 * @param {null}
 * @returns {Post[]}
 */
const findAll = async () => {
  return await Post
    .find()
    .populate('author', 'name')
    .populate('comments', 'content');
}

/**
 * @typedef {Schema} Post
 */
const Post = model('Post', postSchema);

export {
  Post,
  findById,
  findAll,
  create,
}
