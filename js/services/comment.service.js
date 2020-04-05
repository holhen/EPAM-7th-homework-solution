import Http from "./http.service.js";

class CommentService {
  static fetchComments = async (postId, top = 4, skip = 0) => {
    const params = {
      postId: postId,
      _limit: top,
      _start: skip,
    };

    return Http.get(
      `https://jsonplaceholder.typicode.com/comments?${Http.getQueryString(
        params
      )}`
    );
  };
}

export default CommentService;
