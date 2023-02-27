//  Scripts to perform the functions

// Anotação : innerHTML define ou retorna o conteúdo HTML de um elemento.

function Convert() {

    // Start with clean conversion area
    var cleaning = document.getElementById("converted");
    cleaning.innerHTML = "";

    var amount = document.getElementById('value').value;

    // Currencies:
    var Dolar = 5.15;
    var Euro = 5.52;
    var Bitcoin = 117675.24;

    // Array that stores calculations and currencies:
    var Calculation = [];
    var CurrencyName = [];

    // Dollar
    var DolarConverted = 0;
    DolarConverted = amount / Dolar;
    Calculation.push('U$ '+ DolarConverted.toFixed(2));
    CurrencyName.push('Dolar');

     // Euro
    var EuroConverted = 0;
    EuroConverted = amount / Euro;
    Calculation.push('€ ' + EuroConverted.toFixed(2))
    CurrencyName.push('Euro');

    // Bitcoin
    var BitcoinConverted = 0;
    BitcoinConverted = amount / Bitcoin;
    Calculation.push('BTC ' + BitcoinConverted.toFixed(2))
    CurrencyName.push('Bitcoin');

    var convertedArea = document.getElementById('converted');

    for (var i = 0; i < Calculation.length; i++) {
        if (amount != 0) {
            convertedArea.innerHTML = convertedArea.innerHTML +
                `<span> Value converted into ${CurrencyName[i]}: ${Calculation[i]}</span>`
        }
    }
}

// Clear Convert Area
function Clear() {
    var cleaning = document.getElementById("converted");
    cleaning.innerHTML = "";
}






