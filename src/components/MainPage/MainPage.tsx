import classes from "./MainPage.module.scss";
import EventList from "../EventList/EventList";
import { getDate } from "../utilis/functions";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const BASE_URL = `https://en.m.wikipedia.org/wiki/`;

const MainPage = () => {
  const { dayOfMonth, monthName, monthNumber, year } = getDate();
  const suffix =
    dayOfMonth === 1
      ? "st"
      : dayOfMonth === 2
      ? "nd"
      : dayOfMonth === 3
      ? "rd"
      : "th";
  const day = `${dayOfMonth}${suffix}`;

  const onClickHandler = () => {
    window.location.replace(`${BASE_URL}${monthName}_${dayOfMonth}`);
  };

  return (
    <div className={classes.__pageContent}>
      <ToggleTheme />
      <h1 onClick={onClickHandler}>
        {monthName} {day}, {year}
      </h1>
      <EventList monthNumber={monthNumber} dayOfMonth={dayOfMonth} />
    </div>
  );
};

export default MainPage;
