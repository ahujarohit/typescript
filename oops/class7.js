var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj6 = new AgriLoan(10, 1);
console.log("Interest is : " + obj6.interest + " Rebate is : " + obj6.rebate);
