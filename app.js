var a = "asad";
var b = 45;
var total = function (num1, num2) {
    return num1 + num2;
};
// array
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ars = ["asad", "santo"];
var user = {
    firstName: "asad",
    lastName: "santo",
    role: "admin"
};
var userInfo = {
    id: 4545,
    name: "asad",
    role: "admin"
};
var transaction1 = {
    payerAccountNumber: 121,
    payeeAccountNumber: 454
};
var transaction2 = {
    payerAccountNumber: 158,
    payeeAccountNumber: 564
};
var bankAccount = {
    accountNumber: 123,
    accountHolder: "asad santo",
    balance: 4000,
    isActive: true,
    transactions: [transaction1, transaction2]
};
var book = {
    name: "test book",
    price: 100,
    filesize: 5,
    formate: "pdf",
    duration: 10
};
//? same name interface auto marge
var newUser = {
    name: "asad santor",
    id: 1554,
    createDate: "2020-01-01"
};
var idTest = ["asdasd", "asdsad"];
var narrowTest = function (data) {
    if (typeof data === "string") {
        // console.log(data.toUpperCase());
    }
    //   console.log(data);
};
narrowTest("1");
// =========>>>>>>>>>>>>>>>>>> Generic
var logAnything = function (arg) {
    //   console.log(arg);
    return arg;
};
console.log(logAnything(["asad"]));
