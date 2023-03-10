window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const values = { amount: 10000, years: 12, rate: 12 };
  let loanAmount = document.getElementById("loan-amount");
  loanAmount = values.amount;
  let loanYears = document.getElementById("loan-year");
  loanYears = values.years;
  let loanRate = document.getElementById("loan-rate");
  loanRate = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValue = getCurrentUIValues();
  const monthlyAmount = calculateMonthlyPayment(currentValue);
  updateMonthly(monthlyAmount);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 1200;
  const numPayments = values.years * 12;
  const monthlyAmount =
    (values.amount * monthlyRate) / (1 - (1 + monthlyRate) ** -numPayments);
  return `$${monthlyAmount.toFixed(2)}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentOutput = document.querySelector("#monthly-payment");
  monthlyPaymentOutput.textContent = monthly;
}
