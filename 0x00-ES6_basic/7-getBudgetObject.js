export default function createBudgetObject(income, gdp, capita) {
  // Using ES6 shorthand syntax where key names match variable names
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
