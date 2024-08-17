import { useState, useEffect } from "react";

function useRemainingDaysInYear() {
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    function getRemainingDaysInYear() {
      const today = new Date();
      const currentYear = today.getFullYear();
      const endOfYear = new Date(currentYear, 11, 31);
      const oneDay = 1000 * 60 * 60 * 24;
      const remaining = Math.ceil((endOfYear - today) / oneDay);

      return remaining;
    }

    setRemainingDays(getRemainingDaysInYear());
  }, []);

  return remainingDays;
}

export default useRemainingDaysInYear;
