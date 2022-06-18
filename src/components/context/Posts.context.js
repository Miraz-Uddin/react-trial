import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const inititalState = {
  posts: [],
};

export const PostsContext = createContext();

export const PostsProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_POST":
        return {
          posts: [action.payload],
        };
      case "ADD_POST":
        return {
          posts: [...state.posts, action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, inititalState);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API_URI}/posts`)
      .then(({ data }) => dispatch({ type: "GET_POST", payload: data }))
      .catch((err) => console.log("error from posts fetch: " + err));
  }, []);
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
};
