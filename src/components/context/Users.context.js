import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API_URI}/users`)
      .then((data) => SetUsers(...users, data))
      .catch((err) => console.log("error from users fetch: " + err));
  }, []);
  return (
    <UsersContext.Provider value={users}>
      {props.children}
    </UsersContext.Provider>
  );
};
