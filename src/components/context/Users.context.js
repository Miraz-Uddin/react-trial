import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API_URI}/users`)
      .then((data) => {
        setLoading(false);
        SetUsers(...users, data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        SetUsers([]);
        setError("Error Occured while fetching Users Data");
      });
  }, []);
  return (
    <UsersContext.Provider value={{ loading, error, users }}>
      {props.children}
    </UsersContext.Provider>
  );
};
