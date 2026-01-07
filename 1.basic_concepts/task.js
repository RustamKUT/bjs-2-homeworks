"use strict"

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  }
}
// Example usage
// console.log(solveEquation(1, -3, 2)); // [2, 1] - два корня
// console.log(solveEquation(1, -4, 4)); // [2] - один корень
// console.log(solveEquation(1, 2, 3)); // [] - нет корней

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(parseFloat(percent)) || isNaN(parseFloat(contribution)) ||
    isNaN(parseFloat(amount)) || isNaN(parseFloat(countMonths))) {
    return false;
  }

  percent = percent / 100
  let S = amount - contribution
  let P = percent / 12

  const payment = S * (P + (P / (((1 + P) ** countMonths) - 1)))

  let totalAmount = countMonths * payment
  return parseFloat(totalAmount.toFixed(2))
}


// console.log(calculateTotalMortgage(10, 0, 50000, 12))
// console.log(calculateTotalMortgage(10, 1000, 50000, 12))
// console.log(calculateTotalMortgage(10, 0, 20000, 24))
// console.log(calculateTotalMortgage(10, 1000, 20000, 24))
// console.log(calculateTotalMortgage(10, 20000, 20000, 24))
// console.log(calculateTotalMortgage(10, 0, 10000, 36))
// console.log(calculateTotalMortgage(15, 0, 10000, 36))
