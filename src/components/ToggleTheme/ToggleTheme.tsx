import React from "react";
import { ContextOptions, useOptions } from "../../Context";

const ToggleTheme = () => {
  const { options, setOptions } = useOptions();

  const changeTheme = () => {
    const newTheme: ContextOptions = {
      Theme: options.Theme === "light" ? "dark" : "light",
    };
    setOptions(newTheme);
  };
  return (
    <div>
      {" "}
      <button onClick={changeTheme}>Click ME</button>
    </div>
  );
};

export default ToggleTheme;
