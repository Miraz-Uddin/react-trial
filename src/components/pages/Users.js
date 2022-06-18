import React from "react";
import { UsersContext } from "../../components/context/Users.context";
import User from "../User";
export default function Users(props) {
  const context = React.useContext(UsersContext);
  const { data } = context;
  return (
    <>
      {data &&
        data.reverse().map((item, index) => <User key={item.id} {...item} />)}
    </>
  );
}
