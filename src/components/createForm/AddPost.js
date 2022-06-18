import axios from "axios";
import React from "react";
import { PostsContext } from "../context/Posts.context";

export default function AddPost(props) {
  const context = React.useContext(PostsContext);
  const { dispatch } = context;
  axios
    .post()
    .then(({ data }) => {
      dispatch({
        type: "ADD_POST",
        payload: {
          body: "Good post by Miraz, effective for later",
          title: "new Post Miraz",
          userId: 1,
        },
      });
    })
    .catch((err) => console.log("post add error: " + err));
  return null;
}
