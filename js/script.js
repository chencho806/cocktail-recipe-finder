//IPO - Input -> Process -> Output
let cocktailData

// Variable and Constants
const BASE_URL = `https://www.thecocktaildb.com/api/json/v2/`;
const API_KEY = '9973533';

const $instructions = $('#instructions')
const $measurements = $('#measurements')
const $ingredients = $('#ingredients')
const $name = $('#name');
const $sniff = $('.sniff');

// Event Listeners
$sniff.on('click', getData);

// Functions
function getData() {
    //use $.ajax to fetch data from the cocktaildb api
    $.ajax(`${BASE_URL}${API_KEY}/random.php`)
    .then(function(data) {
        // save the data locally
        console.log(data);
        cocktailData = data;
        // transfer the data to the DOM
        render(cocktailData.drinks[0]);
    }, function(error) {
        console.log(error);
    });
    
}

function render(cocktail) {
    
    console.log(cocktail)    
$name.text(cocktail.strDrink)
$ingredients.text(`${cocktail.strIngredient1}, ${cocktail.strIngredient2} , ${cocktail.strIngredient3}, ${cocktail.strIngredient4}, ${cocktail.strIngredient5}, ${cocktail.strIngredient6}, ${cocktail.strIngredient7}, ${cocktail.strIngredient8}, ${cocktail.strIngredient9}`)
$measurements.text(`${cocktail.strMeasure1}, ${cocktail.strMeasure2}, ${cocktail.strMeasure3}, ${cocktail.strMeasure4}, ${cocktail.strMeasure5}, ${cocktail.strMeasure6}, ${cocktail.strMeasure7} ,${cocktail.strMeasure8}, ${cocktail.strMeasure9}`)
$instructions.text(cocktail.strInstructions)
                
   $('img').attr('src', cocktail.strDrinkThumb)

    // $('main').html(html);
}

        
        


