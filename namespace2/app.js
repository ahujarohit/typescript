var vedisoft;
(function (vedisoft) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = vedisoft.invoiceApp || (vedisoft.invoiceApp = {}));
})(vedisoft || (vedisoft = {}));
/// <reference path = "Invoice.ts" />
var invoice = new vedisoft.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
