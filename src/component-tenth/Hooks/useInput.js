import { useState } from "react";

function useInput(initialValue, placeholder) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
    placeholder,
  };

  return [value, bind, reset];
}

export default useInput;
