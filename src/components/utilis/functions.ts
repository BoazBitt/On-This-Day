export const getDate = () => {
  const today = new Date();

  const dayOfMonth = today.getDate();

  const monthNumber = today.getMonth() + 1;

  // Month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[today.getMonth()];

  const year = today.getFullYear();

  return {
    dayOfMonth,
    monthNumber,
    monthName,
    year,
  };
};
