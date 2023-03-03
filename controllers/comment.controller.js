import { Comment, create, findAll, findById } from '../models/comment.model.js';

export const createComment = async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    author: req.body.author,
    post: req.body.post
  });

  try {
    const newComment = await create(comment);
    res.status(201).json(newComment);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await findAll();
    res.json(comments);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}

export const getCommentById = async (req, res) => {
  try {
    const comment = await findById(req.params.id);
    if (!comment) {
      res.status(404).json({ message: 'Comment not found' });
    } else {
      res.json(comment);
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}
