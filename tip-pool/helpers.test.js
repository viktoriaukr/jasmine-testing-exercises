describe("Helpers tests", function () {
  beforeEach(function () {
    billAmtInput.value = 250;
    tipAmtInput.value = 25;
    submitPaymentInfo();
  });
  it("should accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(25);
    expect(sumPaymentTotal("billAmt")).toEqual(250);
    expect(sumPaymentTotal("tipPercent")).toEqual(10);

    billAmtInput.value = 455;
    tipAmtInput.value = 56.5;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(81.5);
    expect(sumPaymentTotal("billAmt")).toEqual(705);
    expect(sumPaymentTotal("tipPercent")).toEqual(22);
  });

  it("should converts the bill and tip amount into a tip percentage", function () {
    const billAmt = 250;
    const tipAmt = 20;
    expect(Math.round(100 / (billAmt / tipAmt))).toEqual(8);
  });
  it("should converts the bill and tip amount into a tip percentage", function () {
    const billAmt = 3000;
    const tipAmt = 350;
    expect(Math.round(100 / (billAmt / tipAmt))).toEqual(12);
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
