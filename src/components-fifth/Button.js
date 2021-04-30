import React from "react";

function Button({ handleClick, children }) {
  console.log(`Button ${children} rendered`);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
