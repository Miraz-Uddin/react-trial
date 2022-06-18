import React from "react";
import { UsersContext } from "../../components/context/Users.context";
import User from "../User";
export default function Users(props) {
  const context = React.useContext(UsersContext);
  const { error, loading, users } = context;
  return (
    <>
      {loading
        ? "Loading .... "
        : users.data
            .reverse()
            .map((item, index) => <User key={item.id} {...item} />)}
      {error || null}
    </>
  );
}
