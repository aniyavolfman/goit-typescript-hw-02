/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Sun = "SUNDAY",
  Mon = "MONDAY",
  Tues = "TUESDAY",
  Wed = "WEDNESDAY",
  Thur = "THURSDAY",
  Frid = "FRIDAY",
  Sat = "SATURDAY",
}

const isWeekend = (day: string): boolean => {
  return day === Days.Sun || day === Days.Sat
};
