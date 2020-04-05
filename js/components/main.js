import ProfileService from "../services/profile.service.js";
import CommentService from "../services/comment.service.js";
import PostService from "../services/post.service.js";

class Main {
  constructor() {
    return this._fetchPosts();
  }

  static template = `<main>
        <h1>My posts</h1>
        <div id="main">Loading...</div>
    </main>`;

  _fetchPosts = async (top, skip) => {
    const profile = await ProfileService.fetchProfile();
    const id = profile.id;
    const posts = await PostService.fetchPosts(id, top, skip);
    this._renderPosts(posts);
    posts.map((post) => {
      CommentService.fetchComments(post.id).then((comments) =>
        this._renderComments(comments)
      );
    });
  };

  _renderPosts = (posts) => {
    const main = document.getElementById("main");
    const postElements = posts
      .map((post) => {
        const { id, title, body } = post;
        return `<div class="post post-${id}">
                <div class="title">${title}</div>
                <div class="body">${body}</div>
                <div class="comments">Loading...</div>
           </div>`;
      })
      .join("");

    if (main.innerHTML && main.innerHTML !== "Loading...") {
      main.innerHTML += postElements;
    } else {
      main.innerHTML = postElements;
    }
  };

  _renderComments = (comments) => {
    if (!comments || !comments[0]) {
      return;
    }

    const id = comments[0].postId;
    const commentSection = document.querySelector(`.post-${id} .comments`);
    const commentElements = comments
      .map((comment) => {
        const { name, email, body } = comment;
        return `<div class="comment">
          <div class="name">${name} <span class="email">${email}</span></div>
          <div class="comment-body">${body}</div>
      </div>`;
      })
      .join("");

    if (commentSection.innerHTML && commentSection.innerHTML !== "Loading...") {
      commentSection.innerHTML += commentElements;
    } else {
      commentSection.innerHTML = commentElements;
    }
  };
}

export default Main;
