export function parseToHumanDate(date: Date, separator = "/") {
  date = new Date(date)
  return `${date.getDate()} ${separator} ${fixeMonthDigit(
    date.getMonth()
  )} ${separator} ${date.getFullYear()}`;
}

function fixeMonthDigit(outterMonth: number) {
  const month = outterMonth + 1;
  return month < 10 ? `0${month}` : month;
}
