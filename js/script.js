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
        
        cocktailData = data;
        
        render(cocktailData.drinks[0]);
    }, function(error) {
        console.log(error);
    });
    
}

function render(cocktail) {
$name.text(cocktail.strDrink)
$ingredients.text(`${cocktail.strIngredient1}, ${cocktail.strIngredient2} , ${cocktail.strIngredient3}, ${cocktail.strIngredient4}`)
$measurements.text(`${cocktail.strMeasure1}, ${cocktail.strMeasure2}, ${cocktail.strMeasure3}, ${cocktail.strMeasure4}`)
$instructions.text(cocktail.strInstructions)
                
   $('img').attr('src', cocktail.strDrinkThumb)

    
}

        
        


