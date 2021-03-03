import moment from "moment";

export const getDateFormat = (date: Date | undefined): string | null => {
  if (date) {
    return moment(date).format("YYYY년 MM월 DD일");
  } else {
    return null;
  }
};
