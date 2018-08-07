var amountInput = document.querySelector(".amount");
var baseCurrency = document.querySelector("#currency-old");
var secondCurrency = document.querySelector("#currency-new");
var btn = document.querySelector(".btn-show");

var EURPLN = 4.2672;
var PLNEUR = 0.2343;
var USDPLN = 3.67;
var PLNUSD = 3.69;
var USDEUR = 1.2;
var EURUSD = 0.83;

function Round(n, k) {
    var factor = Math.pow(10, k);
    return Math.round(n * factor) / factor;
}

function convertCurrency() {
    var from = baseCurrency.value.toUpperCase();
    var to = secondCurrency.value.toUpperCase();
    var result = 0;
    var amount = amountInput.value;
    if (from === to) {
        result = amount;
    } else if (from === "PLN" && to === "EUR") {
        result = amount * PLNEUR;
    } else if (from === "PLN" && to === "USD") {
        result = amount * PLNUSD;
    } else if (from === "EUR" && to === "PLN") {
        result = amount * EURPLN;
    } else if (from === "EUR" && to === "USD") {
        result = amount * EURUSD;
    } else if (from === "USD" && to === "PLN") {
        result = amount * USDPLN;
    } else if (from === "USD" && to === "EUR") {
        result = amount * USDEUR;
    }
    document.querySelector(".result-text").innerHTML = `${amount} ${from} = ${Round(result,2)} ${to}`;

}

btn.addEventListener('click', convertCurrency);
