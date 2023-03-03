## Node.js MVC Blog Application

This is a blog application built with Node.js, Express, and Mongoose using the MVC (Model-View-Controller) architecture. It provides an easy-to-use interface for creating, reading, updating, deleting blog posts and add comments to posts, as well as managing user authentication and authorization.

### Features

+ MVC architecture for separating concerns and improving maintainability
+ RESTful API for creating, reading, updating, and deleting blog posts
+ Mongoose schema and models for defining blog, user and comments information
+ User authentication and authorization (WIP)
+ Simple, responsive front-end (WIP)

### Installation

Clone the repository:
```bash
git clone https://github.com/example/BlogApp.git
```
Navigate to the project directory:
```bash
cd BlogApp
```
Install the dependencies:
```
npm install
```
Next, add to [config.json](./config.json) file in the root directory your MongoDB `username`, `password` and `port`. For example:

```json
{
  "development": {
    "username": "admin",
    "password": "12345",
    "port": "3000"
  }
}
```
Finally, start the server:

```
npm start
```

### Usage

#### Posts

To create a new post, send a POST request to `/posts` with a JSON body containing the following fields:

+ `title`: The title of the post (required).
+ `content`: The content of the post (required).
+ `author`: The author of the post (optional).

To get a list of all posts, send a GET request to `/posts`.

To get a specific post, send a GET request to `/posts/:id`, where :id is the ID of the post.

To update a post, send a PUT request to `/posts/:id` with a JSON body containing the fields to update.

To delete a post, send a DELETE request to `/posts/:id`.

#### Comments

To create a new comment, send a POST request to `/posts/:postId/comments` with a JSON body containing the following fields:

+ `content`: The content of the comment (required).
+ `author`: The author of the comment (optional).

To get a list of all comments for a post, send a GET request to `/posts/:postId/comments`.

To get a specific comment, send a GET request to `/comments/:id`, where `:id` is the ID of the comment.

To update a comment, send a PUT request to `/comments/:id` with a JSON body containing the fields to update.

To delete a comment, send a DELETE request to `/comments/:id`.

#### Users

To create a new user, send a POST request to `/users` with a JSON body containing the following fields:

+ `username`: The username of the user (required).
+ `email`: The username of the user (required).
+ `password`: The password of the user (required).

To get a list of all users, send a GET request to `/users`.

To get a specific user, send a GET request to `/users/:id`, where `:id` is the ID of the user.

To update a user, send a PUT request to `/users/:id` with a JSON body containing the fields to update.

To delete a user, send a DELETE request to `/users/:id`.

### File Structure:

```
├── controllers/
│   ├── comment.controller.js
│   ├── post.controller.js
│   └── user.controller.js
├── models/
│   ├── comment.model.js
│   ├── post.model.js
│   └── user.model.js
├── public/
│   └── WIP
├── views/
│   └── WIP
├── config.json
├── server.js
└── package.json
```

### Contributing
If you find a bug or would like to contribute to the project, please feel free to submit an [issue](https://github.com/therealtoresto/BlogApp/issues) or [pull request](https://github.com/therealtoresto/BlogApp/pulls).

### License
This blog app is released under the MIT license. See [LICENSE](./LICENSE) for more information.
