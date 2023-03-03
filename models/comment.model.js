import mongoose from 'mongoose';

const { Schema, ObjectId, model, save, find } = mongoose;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  post: {
   type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  }
});

/**
 * @param {Comment} data
 * @returns {Comment}
 */
const create = async (data) => {
  const comment = new Comment(data);
  return await comment.save();
}

/**
 * @param {null}
 * @returns {Comment[]}
 */
const findAll = async () => {
  return await Comment.find();
}

/**
 * @param {number} id
 * @returns {Comment}
 */
const findById = async (id) => {
  return await Comment.findById(id);
}

/**
 * @typedef {Schema} Comment
 */
const Comment = model('Comment', commentSchema);

export { Comment, create, findAll, findById };
