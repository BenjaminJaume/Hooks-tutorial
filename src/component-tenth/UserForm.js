import React from "react";
import useInput from "./Hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput(
    "",
    "First name here"
  );
  const [lastName, bindLastName, resetLastName] = useInput(
    "",
    "Last name here"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
