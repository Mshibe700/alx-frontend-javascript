function fetchCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

export default function createBudgetForYear(income, gdp, capita) {
  const currentYear = fetchCurrentYear();
  const budget = {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
  return budget;
}
