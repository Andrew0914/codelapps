export type DateOrder = "newest" | "oldest";
export function parseToHumanDate(date: Date, separator = "/") {
  date = new Date(date);
  return `${date.getDate()} ${separator} ${fixeMonthDigit(
    date.getMonth()
  )} ${separator} ${date.getFullYear()}`;
}

function fixeMonthDigit(outterMonth: number) {
  const month = outterMonth + 1;
  return month < 10 ? `0${month}` : month;
}

export function sortByDate(
  dateA: Date,
  dateB: Date,
  order: DateOrder = "newest"
) {
  if (order === "oldest") return dateA.getTime() - dateB.getTime();
  return dateB.getTime() - dateA.getTime();
}
