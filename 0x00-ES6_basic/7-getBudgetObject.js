export default function createBudgetObject(totalIncome, totalGDP, perCapitaIncome) {
  const budget = {
    income: totalIncome,
    gdp: totalGDP,
    capita: perCapitaIncome,
  };

  return budget;
}
