import React from "react";
import { Link } from "react-router-dom";
const PostList = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={{
                pathname: `/post/${post.id}`,
                state: {
                  post: post,
                },
              }}
            >
              <h2>{post.title}</h2>
            </Link>
            <p>
              Published by 🤖 <strong> {post.author}</strong> on{" "}
              {post.publishedAt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
