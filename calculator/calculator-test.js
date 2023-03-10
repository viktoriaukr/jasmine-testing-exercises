it("should calculate the monthly rate correctly", function () {
  const loanValues = {
    amount: 10000,
    years: 3,
    rate: 6,
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual("$304.22");
});

it("should return a result with 2 decimal places", function () {
  const loanValues = {
    amount: 10000,
    years: 3,
    rate: 6,
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual("$304.22");
});

/// etc
