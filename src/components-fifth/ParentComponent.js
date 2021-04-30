import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const handleClickIncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleClickIncrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  //   const handleClickIncrementAge = () => {
  //     setAge(age + 1);
  //   };
  //   const handleClickIncrementSalary = () => {
  //     setSalary(salary + 1500);
  //   };

  return (
    <div>
      <Title />
      <Count text={"Age"} count={age} />
      <Button handleClick={handleClickIncrementAge}>Increment age</Button>
      <Count text={"Salary"} count={salary} />
      <Button handleClick={handleClickIncrementSalary}>Increment salary</Button>
    </div>
  );
}

export default ParentComponent;
