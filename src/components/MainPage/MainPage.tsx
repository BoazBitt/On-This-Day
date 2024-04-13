import React from "react";
import classes from "./MainPage.module.scss";
import EventList from "../EventList/EventList";
import { getDate } from "../utilis/functions";
import { useOptions } from "../../Context"; // Make sure to import OptionContextProps

const BASE_URL = `https://en.m.wikipedia.org/wiki/`;

const MainPage = () => {
  const { options, setOptions } = useOptions();
  const theme = options.Theme;
  const themeClass = theme === "light" ? classes.__light : classes.__dark;
  console.log(themeClass);
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
    <div>
      <button>clickME!</button>
      <div className={classes.__pageContent}>
        <h1 onClick={onClickHandler}>
          {monthName} {day}, {year}
        </h1>
        <EventList monthNumber={monthNumber} dayOfMonth={dayOfMonth} />
      </div>
    </div>
  );
};

export default MainPage;
