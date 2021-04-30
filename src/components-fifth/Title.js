import React from "react";

function Title() {
  console.log("Title rendered");
  return <h2>This is the title</h2>;
}

export default React.memo(Title);
