import React, { useContext } from "react";
import { UserContext, PasswordContext } from "../App";

function ComponentB() {
  const userName = useContext(UserContext);
  const password = useContext(PasswordContext);

  return (
    <div>
      UserName: {userName} - Password: {password}
    </div>
  );
}

export default ComponentB;
