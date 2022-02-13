import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim()) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      return setIsValid(false);
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label style={{ color: !isValid && "red" }}>Course Goal</label>
          <input
            style={{
              borderColor: !isValid && "red",
              background: !isValid && "salmon",
            }}
            type="text"
            onChange={goalInputChangeHandler}
            value={enteredValue}
          />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;
