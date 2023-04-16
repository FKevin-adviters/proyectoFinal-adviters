export const convertDates = (date) => {
  const newDate = date.split("T");
  let arr = newDate[0].split("-");
  return arr[0] + "-" + arr[1] + "-" + arr[2];
};
