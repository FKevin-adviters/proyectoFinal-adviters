export const convertDates = (date) => {
  const newDate = date.split("T");
  let arr = newDate[0].split("-");
  return arr[0] + "-" + arr[1] + "-" + arr[2];
};

export const daysBetweenDates = (date_1, date_2) => {
  let difference = date_1.getTime() - date_2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};
