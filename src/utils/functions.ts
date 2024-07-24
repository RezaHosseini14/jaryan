export function convertToShamsi(gregorianDate: any) {
  const gregorianParts = gregorianDate.split("-").map(Number);
  const gregorianYear = gregorianParts[0];
  const gregorianMonth = gregorianParts[1];
  const gregorianDay = gregorianParts[2];

  const gregorianDaysInMonth = [31, (gregorianYear % 4 === 0 && gregorianYear % 100 !== 0) || gregorianYear % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const shamsiDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  const shamsiDaysInMonthLeap = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];

  let gregorianDayCount = gregorianDay;
  for (let i = 0; i < gregorianMonth - 1; i++) {
    gregorianDayCount += gregorianDaysInMonth[i];
  }

  let shamsiYear = gregorianYear - 621;
  let shamsiDayCount = gregorianDayCount + (shamsiYear % 4 === 0 ? 10 : 11);

  let shamsiMonth = 1;
  while (shamsiDayCount > (shamsiYear % 4 === 0 ? shamsiDaysInMonthLeap[shamsiMonth - 1] : shamsiDaysInMonth[shamsiMonth - 1])) {
    shamsiDayCount -= shamsiYear % 4 === 0 ? shamsiDaysInMonthLeap[shamsiMonth - 1] : shamsiDaysInMonth[shamsiMonth - 1];
    shamsiMonth++;
  }

  return `${shamsiYear}/${shamsiMonth}/${shamsiDayCount}`;
}
