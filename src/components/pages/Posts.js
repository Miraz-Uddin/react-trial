import React from "react";
import classes from "../../styles/Videos.module.css";
import { PostsContext } from "../context/Posts.context";
import Post from "../Post";

export default function Posts() {
  const context = React.useContext(PostsContext);
  const data = context.state;
  return (
    <div className={classes.videos}>
      {data.loading && "loading ..."}
      {data.posts.length !== 0 &&
        data.posts[0]
          .reverse()
          .map((item, index) => <Post key={item.id} {...item} />)}
      {data.error || null}
    </div>
  );
}
