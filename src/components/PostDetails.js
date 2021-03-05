import React from "react";
import { Link, useLocation, useParams, useRouteMatch } from "react-router-dom";

const PostDetails = ({ post }) => {
  const location = useLocation();
  console.log("Este es la informacion post desde location", location);
  console.log("Este es la informacion post a traves del prop", post);

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <div>{post.content}</div>
        </>
      )}
      <p>
        <Link to="/">👈 Back</Link>
      </p>
    </div>
  );
};

export default PostDetails;
