import { Post, findAll, findById, create } from '../models/post.model.js';

/**
 * 
 * @param { any } req 
 * @param { any } res 
 */
export async function getPosts(req, res) {
  try {
    const posts = await findAll();
    res.json(posts);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getPostById(req, res) {
  try {
    const post = await findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json(post);
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createPost(req, res) {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const post = new Post({
    title,
    content,
    author
  });
  
  try {
    const newPost = await create(post);
    res.status(201).json(newPost);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updatePost(req, res) {
  try {
    const post = await findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      post.title = req.body.title || post.title;
      post.body = req.body.body || post.body;
      const updatedPost = await post.save();
      res.json(updatedPost);
    }
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
}