import express from 'express';
import parser from 'body-parser';
import config from './config.json' assert { type: 'json' };
import { db } from './db/mongodb.js';
import { 
  getPosts,
  getPostById,
  createPost,
  updatePost
} from './controllers/post.controller.js';
import {
  createUser,
  getUsers,
  getUserById
} from './controllers/user.controller.js';
import {
    createComment,
    getComments,
    getCommentById
  } from './controllers/comment.controller.js';

const { development } = config;
const { json } = parser;
const port = development.port;

const app = express();
app.use(json());
db();

const authMiddleware = (req, res, done) => {
  const password = req.body.password;
  if (password === '1234') {
    done();
  } else {
    res.status(403).send('Password is not correct');
  }
}

app.get('/', (req, res) => {
  res.send('<h1>Hello there 👋🏻✨!</h1>');
});

app.get('/posts', getPosts);
app.get('/posts/:id', getPostById);
app.post('/posts', authMiddleware, createPost);

app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);

app.get('/comments', getComments);
app.get('/comments/:id', getCommentById);
app.post('/comments', createComment);

app.listen(port || 8001, () => {
  console.log(`Server is started on ${port | 8001} 🎛️`)
});