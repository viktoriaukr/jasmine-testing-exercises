describe("Payment Tests", function () {
  beforeEach(function () {
    billAmtInput.value = 250;
    tipAmtInput.value = 25;
  });
  it("should add a curPayment object to allPayments, update html and reset input values", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("250");
    expect(allPayments["payment1"].tipAmt).toEqual("25");
    expect(allPayments["payment1"].tipPercent).toEqual(10);
  });

  it("should createCurPayment() will return undefined with negative or empty inputs positive billAmt is required but tip can be 0", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";

    createCurPayment();
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should create table row element and pass to appendTd with input value", function () {
    let curPayment = document.querySelectorAll("#summaryTable tbody tr td");
    appendPaymentTable(curPayment);
    updateSummary();
    expect(curPayment[0].innerHTML).toEqual("$0");
    expect(curPayment[1].innerHTML).toEqual("$0");
    expect(curPayment[2].innerHTML).toEqual("0%");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    serverTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
