import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const inititalState = {
  loading: true,
  error: "",
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return {
        loading: false,
        error: "",
        posts: [action.payload],
      };
    case "GET_POSTS_ERROR":
      return {
        loading: false,
        error: "Error Occured while fetching Posts Data",
        posts: [],
      };
    // case "ADD_POST":
    //   return {
    //     posts: [...state.posts, action.payload],
    //   };
    default:
      return state;
  }
};

export const PostsContext = createContext();
export const PostsProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, inititalState);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API_URI}/post`)
      .then(({ data }) =>
        dispatch({ type: "GET_POSTS_SUCCESS", payload: data })
      )
      .catch((err) => dispatch({ type: "GET_POSTS_ERROR" }));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_API_URI}/posts`)
  //     .then(({ data }) => dispatch({ type: "GET_POST", payload: data }))
  //     .catch((err) => console.log("error from posts fetch: " + err));
  // }, []);
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
};
