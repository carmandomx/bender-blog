import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PostDetails from "./PostDetails";
import PostList from "./PostList";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promise = axios.get("https://bender-blog.herokuapp.com/posts");

    promise.then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <PostList posts={posts} />} />
        <Route
          path="/post/:id"
          render={({ match }) => (
            <PostDetails posts={match} post={posts[match.params.id - 1]} />
          )}
        />
        <Route path="*" render={() => <div>Post NOT FOUND!</div>} />
      </Switch>
    </Router>
  );
};

export default PostsContainer;
