const recipeWrapper = document.getElementById('recipe-wrapper')


  //APIs for each food category
  const chickenRecipesApi = ('https://api.edamam.com/search?q=chicken&app_id=03cb902c&app_key=2f60fc9619cfcd069d03e29e2509365f');
  const beefRecipesApi = ('https://api.edamam.com/search?q=beef&app_id=03cb902c&app_key=2f60fc9619cfcd069d03e29e2509365f');
  const fishRecipesApi = ('https://api.edamam.com/search?q=fish&app_id=03cb902c&app_key=2f60fc9619cfcd069d03e29e2509365f');
  const vegRecipesApi = ('https://api.edamam.com/search?q=vegetarian&app_id=03cb902c&app_key=2f60fc9619cfcd069d03e29e2509365f');

// Buttons 
const chickenBtn = document.querySelector("#chicken-button")
const beefBtn = document.querySelector("#beef-btn")
const fishBtn = document.querySelector("#fish-btn")
const vegBtn = document.querySelector("#veg-btn")

// Store Json Data in variable
// let jsondata;   
// fetch(chickenRecipesApi)
//         .then(
//         function(u){ return u.json();}
//       )
//       .then(
//         function(json){
//           jsondata = json;
//           console.log(jsondata);
//           jsondata.hits.forEach((item) => {
//                     recipeWrapper.innerHTML += `
//                   <h1>${item.recipe.label}</h1>
//                   <img src="${item.recipe.image}"/>
//                   <p>${item.recipe.ingredientLines}</p>
//                   <p>${item.recipe.totalTime}min</p>
//                   `
//         }
//       )
//     })

let category = null;
//Fetch Chicken Recipes from real API
  const fetchChickenRecipes = () => {
    fetch(category)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
  
      json.hits.forEach((item) => {
        recipeWrapper.innerHTML += `
        <div> 
          <h1>${item.recipe.label}</h1>
          <img src="${item.recipe.image}"/>
          <p>${item.recipe.ingredientLines}</p>
          <p>${item.recipe.totalTime}min</p>
        </div>
      `
      })
     
     });
  };
  fetchChickenRecipes();

// Switch between onClick category choices which recipes to display 

chickenBtn.addEventListener("click", () => {
  category = chickenRecipesApi;
})
beefBtn.addEventListener("click", () => {
  category = beefRecipesApi;
})


