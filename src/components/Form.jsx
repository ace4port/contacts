import React from "react";
import Button from "./Button";

const Form = ({ handleSubmit, handleChange, credentials }) => {
  return (
    <form>
      <input
        type="test"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <Button
        label="Enter"
        size="small"
        variant="secondary"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Form;
