import moment from "moment";
import { diasYferiadosNoL } from "../constants/constantes";

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

export const getDaysWorkable = (startDate, endDate, arrayDates) => {
  let dates = [];
  let start = moment(startDate);
  let end = moment(endDate);

  for (let m = start; m.isSameOrBefore(end); m.add(1, "days")) {
    if (m.days() != 0 && m.days() != 6) {
      dates.push(m.toISOString());
    }
  }

  let newArr = dates.filter((fecha) => {
    return !diasYferiadosNoL.includes(convertDates(fecha));
  });

  return newArr;
};
