document.addEventListener('DOMContentLoaded', function() {
    let amountInput = document.getElementById('amount');
    let currencySelect = document.getElementById('currency-select');
    let currencies = {
        KZT: document.getElementById('KZT'),
        USD: document.getElementById('USD'),
        EUR: document.getElementById('EUR')
    };

    let exchangeRates = {
        USD: { buy: 429, sell: 431 },
        EUR: { buy: 507, sell: 509 }
    };

    amountInput.addEventListener('input', updateConversion);
    currencySelect.addEventListener('change', updateConversion);

    function updateConversion() {
        let amount = parseFloat(amountInput.value) || 0;
        let selectedCurrency = currencySelect.value;

        for (let key in currencies) {
            currencies[key].textContent = key === selectedCurrency ? '-' : 
                convertCurrency(amount, selectedCurrency, key).toFixed(2);
        }
    }

    function convertCurrency(amount, fromCurrency, toCurrency) {
        return fromCurrency === 'KZT' ? amount / exchangeRates[toCurrency].sell :
               toCurrency === 'KZT' ? amount * exchangeRates[fromCurrency].buy :
               amount * exchangeRates[fromCurrency].buy / exchangeRates[toCurrency].sell;
    }
});
