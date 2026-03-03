// OPERATORS HOMEWORK – SIMPLE BUDGET
// -------------------------------------------------
// GOAL: Use operators to calculate how much money is left after expenses
//       and print a summary in the console.

// STEP 1: Create a variable called monthlyIncome (number)
//         with how much money you receive in a month.
const monthlyIncome = 34
// STEP 2: Create a variable called rentCost (number)
//         with how much you pay for rent.
const rentCost = 35
// STEP 3: Create a variable called foodCost (number)
//         with how much you spend on food.
const foodCost= 10
// STEP 4: Create a variable called transportCost (number)
//         with how much you spend on transportation.
const transportCost = 5
// STEP 5: Create a variable called funBudget (number)
//         with how much money you like to save for fun activities.
let funBudget = 5
// STEP 6: Create a variable called totalExpenses.
//         Use the + operator to add rentCost, foodCost, transportCost, and funBudget
//         together and store the result in totalExpenses.
let totalExpenses = rentCost + transportCost + foodCost + funBudget
// STEP 7: Create a variable called moneyLeft.
//         Use the - operator to subtract totalExpenses from monthlyIncome.
let moneyLeft = monthlyIncome - totalExpenses
// STEP 8: Use console.log to print a clear summary, for example:
//         --- SIMPLE BUDGET ---
//         Monthly income: ...
//         Total expenses: ...
//         Money left: ...
console.log(`
    Monthly income: ${monthlyIncome}
    Total expenses: ${totalExpenses}
    Money left: ${moneyLeft}
    `)
// STEP 9: Now imagine you decide to increase your funBudget a little.
//         Use the += operator to add some extra amount to funBudget,
//         for example funBudget += 500;
funBudget += 30
// STEP 10: Recalculate totalExpenses and moneyLeft with the new funBudget value.
totalExpenses = rentCost + transportCost + foodCost + funBudget
moneyLeft = monthlyIncome - totalExpenses

// STEP 11: Use console.log again to print an UPDATED summary
//          that shows how much money is left after increasing your funBudget.
console.log(`
    Monthly income: ${monthlyIncome}
    Total expenses: ${totalExpenses}
    Money left: ${moneyLeft}
    `)