import React, { useState } from 'react';

// تبدیل تاریخ میلادی به شمسی
const gregorianToJalali = (gy, gm, gd) => {
  let g_d_m, jy, jm, jd;
  let gy2 = gy > 1600 ? 1600 : 621;
  gy -= gy2;
  const g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  let gy_day_no = 365 * gy + Math.floor((gy + 3) / 4) - Math.floor((gy + 99) / 100) + Math.floor((gy + 399) / 400);
  for (let i = 0; i < gm - 1; ++i) gy_day_no += g_days_in_month[i];
  if (gm > 2 && ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0)) ++gy_day_no;
  gy_day_no += gd - 1;
  let j_day_no = gy_day_no - 79;
  const j_np = Math.floor(j_day_no / 12053);
  j_day_no %= 12053;
  jy = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
  j_day_no %= 1461;
  if (j_day_no >= 366) {
    jy += Math.floor((j_day_no - 1) / 365);
    j_day_no = (j_day_no - 1) % 365;
  }
  for (var i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
    j_day_no -= j_days_in_month[i];
  }
  jm = i + 1;
  jd = j_day_no + 1;
  return [jy, jm, jd];
};

const jalaliToGregorian = (jy, jm, jd) => {
  let gy, gm, gd;
  jy -= 979;
  jm -= 1;
  jd -= 1;
  const j_day_no = 365 * jy + Math.floor(jy / 33) * 8 + Math.floor((jy % 33 + 3) / 4) + jd;
  const g_day_no = j_day_no + 79;
  gy = 1600 + 400 * Math.floor(g_day_no / 146097);
  let day_no = g_day_no % 146097;
  let leap = true;
  if (day_no >= 36525) {
    day_no--;
    gy += 100 * Math.floor(day_no / 36524);
    day_no = day_no % 36524;
    if (day_no >= 365) day_no++;
    else leap = false;
  }
  gy += 4 * Math.floor(day_no / 1461);
  day_no %= 1461;
  if (day_no >= 366) {
    leap = false;
    day_no--;
    gy += Math.floor(day_no / 365);
    day_no = day_no % 365;
  }
  for (gm = 0; day_no >= (gm === 1 ? (leap ? 29 : 28) : 31 - ((gm === 3 || gm === 5 || gm === 8 || gm === 10) ? 1 : 0)); gm++) {
    day_no -= (gm === 1 ? (leap ? 29 : 28) : 31 - ((gm === 3 || gm === 5 || gm === 8 || gm === 10) ? 1 : 0));
  }
  gd = day_no + 1;
  return [gy, gm + 1, gd];
};

const PersianDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const renderCalendar = () => {
    const [gy, gm] = gregorianToJalali(currentYear, currentMonth, 1);
    console.log(gy);
    
    const daysInMonth = new Date(gy, gm, 0).getDate();
    const firstDayOfWeek = new Date(gy, gm - 1, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="py-1"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const [jy, jm, jd] = gregorianToJalali(gy, gm, day);
      days.push(
        <div key={day} className="py-1 cursor-pointer" onClick={() => selectDate(jd, jm, jy)}>
          {jd}
        </div>
      );
    }

    return days;
  };

  const selectDate = (day, month, year) => {
    setSelectedDate(`${year}/${month}/${day}`);
    setIsCalendarVisible(false);
  };

  return (
    <div className="relative inline-block">
      <input
        type="text"
        value={selectedDate}
        onClick={toggleCalendar}
        placeholder="تاریخ را انتخاب کنید"
        readOnly
        className="p-2 border cursor-pointer rounded-xl"
      />
      {isCalendarVisible && (
        <div className="absolute bg-white border rounded-xl p-2 z-10 w-96 top-12 shadow-lg">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <button onClick={handlePrevMonth} className="px-2 py-1 border rounded">قبلی</button>
              <div>{currentYear} / {currentMonth}</div>
              <button onClick={handleNextMonth} className="px-2 py-1 border rounded">بعدی</button>
            </div>
            <div className="grid grid-cols-7 text-center font-bold border-b pb-2">
              <div>شنبه</div>
              <div>یکشنبه</div>
              <div>دوشنبه</div>
              <div>سه‌شنبه</div>
              <div>چهارشنبه</div>
              <div>پنج‌شنبه</div>
              <div>جمعه</div>
            </div>
            <div className="grid grid-cols-7 text-center">
              {renderCalendar()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersianDatePicker;
