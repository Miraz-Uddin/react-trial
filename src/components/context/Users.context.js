import React from "react";

export const UsersContext = React.createContext();

export const UsersProvider = (props) => {
  return (
    <UsersContext.Provider value={"Hi"}>{props.children}</UsersContext.Provider>
  );
};
