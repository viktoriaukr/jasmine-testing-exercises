describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });
  it("should create a table row element and pass to appendTd function with input value", function () {
    submitServerInfo();
    updateServerTable();
    let curServerTbl = document.querySelectorAll("#serverTable tbody tr td");

    expect(curServerTbl[0].innerHTML).toEqual("Alice");
    expect(curServerTbl[1].innerHTML).toEqual("$0.00");
    expect(curServerTbl[2].innerHTML).toEqual("X");
  });

  afterEach(function () {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = "";
  });
});
