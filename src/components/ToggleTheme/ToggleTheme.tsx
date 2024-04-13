import classes from "./ToggleTheme.module.scss";
import { ContextOptions, useOptions } from "../../Context";
import { ReactComponent as Moon } from "../utilis/svg/moon.svg";
import { ReactComponent as Sun } from "../utilis/svg/sun.svg";

const ToggleTheme = () => {
  const { options, setOptions } = useOptions();

  const changeTheme = () => {
    const newTheme: ContextOptions = {
      Theme: options.Theme === "light" ? "dark" : "light",
    };
    setOptions(newTheme);
  };
  return (
    <div className={classes.__toggleTheme}>
      <input
        onClick={changeTheme}
        type="checkbox"
        id="toggleCheckbox"
        className={classes.__toggle}
      />
      <label htmlFor="toggleCheckbox">
        <Sun className={classes.__sun} />

        <Moon className={classes.__moon} />
      </label>
    </div>
  );
};

export default ToggleTheme;
