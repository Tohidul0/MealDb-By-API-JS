const loadData = () => {
    const input = document.getElementById('search-input');
    const inputText = input.value;
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then( res => res.json())
        .then( data => showData(data))
}



const showData = (meals) =>{
    console.log(meals);
    const all =meals.meals;
    for( const a of all){

        const meal = a;
    const mealItem = document.getElementById('meal-item');
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML =
    `
        <div   style="width: 18rem;" >
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
    mealItem.appendChild(div);
    }
    
    
}