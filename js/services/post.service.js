import Http from "./http.service.js";

class PostService {
  static fetchPosts = async (userId, top = 3, skip = 0) => {
    const params = {
      userId: userId,
      _limit: top,
      _start: skip,
    };

    return Http.get(
      `https://jsonplaceholder.typicode.com/posts?${Http.getQueryString(
        params
      )}`
    );
  };
}

export default PostService;
