// Instanciate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the variables

const form = document.getElementById('form');



// Add eventListener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Read currency
    const currencySelect = document.getElementById('currency').value;
    // Red cryptoCurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    // Validate that the selects have something
    if(currencySelect===''||cryptoCurrencySelect===''){
        // Display an error
        ui.printMessage('All the fields are mandatory!', 'deep-orange darken-4 card-panel');
    } else {
        // Query the rest api
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
            .then(data => {
                ui.displayResult(data.result[0], currencySelect);
            })
    }
})