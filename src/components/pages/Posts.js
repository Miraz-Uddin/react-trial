import React from "react";
import classes from "../../styles/Videos.module.css";
import { PostsContext } from "../context/Posts.context";
import Post from "../Post";

export default function Posts() {
  const context = React.useContext(PostsContext);
  const data = context.state.posts[0];
  return (
    <div className={classes.videos}>
      {data &&
        data.reverse().map((item, index) => <Post key={item.id} {...item} />)}
      <div>posts</div>
    </div>
  );
}
