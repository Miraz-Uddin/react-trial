import React from "react";
import { UsersContext } from "../../components/context/Users.context";
import User from "../User";
export default function Users(props) {
  const context = React.useContext(UsersContext);
  console.log(context);
  return (
    <>
      <User />
    </>
  );
}
