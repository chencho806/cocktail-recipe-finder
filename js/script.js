//IPO - Input -> Process -> Output


// Variable and Constants
const BASE_URL = `https://www.thecocktaildb.com/api/json/v2/`;
const API_KEY = '9973533';
// Cached Element References


// Event Listeners


// Functions
function getData() {
    //use $.ajax to fetch data from the cocktaildb api
    $.ajax(`${BASE_URL}${API_KEY}/random.php`)
    .then(function(data) {
        // save the data locally
        // transfer the data to the DOM
        console.log(data);
    }, function(error) {
        console.log(error);
    });
    
}
        


