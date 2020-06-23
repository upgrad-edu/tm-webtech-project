var recipes = ['Spicy Arrabiata Penne', 'Pizza Express Margherita', 'Matar Paneer', 'Rocky Road Fudge', 'Vegan Lasagna', 'Ratatouille', 'Baingan Bharta', 'Pancakes', 'Dal Fry'];

let recipe_data = [];

for(let i=0; i<recipes.length; i++) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipes[i]}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            recipe_data.push(JSON.parse(this.responseText).meals[0]);
            addToHome(JSON.parse(this.responseText).meals[0]);
        }
    }
}

let recipesTitlesContainer = document.getElementsByClassName("recipe-titles-container")[0];

function addToHome(data) {
    let container = document.createElement('div');
    container.setAttribute("class", "recipe-title");
    container.setAttribute("onclick", `goToRecipe(this)`);
    container.setAttribute("data-category", data.strArea);
    container.setAttribute("recipe-name", data.strMeal);
    let recipeTextContainer = document.createElement('div');
    recipeTextContainer.setAttribute("class", "recipe-text-container");
    let span = document.createElement('span');
    span.setAttribute("class", "recipe-title-text");
    let text = document.createTextNode(data.strMeal);
    span.appendChild(text);
    recipeTextContainer.appendChild(span);
    container.appendChild(recipeTextContainer);
    container.style.backgroundImage = `url("${data.strMealThumb}")`;
    recipesTitlesContainer.appendChild(container);
}

function goToRecipe(recipe) {
    let recipeName = recipe.getAttribute("recipe-name");
    window.location.href = `recipe-detail.html?recipe=${recipeName}`;
}

function selectCategory(selection) {
    let category = selection.value;
    let recipeTitles = document.getElementsByClassName("recipe-title");
    console.log(recipeTitles);
    for(let title of recipeTitles) {
        if(category === 'All') {
            title.style.display = "flex";
        } else {
            if(title.getAttribute("data-category") !== category) {
                title.style.display = "none";
            } else {
                title.style.display = "flex";
            }
        }
    }
}
