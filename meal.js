const loadData = () => {
    const input = document.getElementById('search-input');
    const inputText = input.value;
    const show1 = document.getElementById('write');
    show1.innerText = '';
    if(inputText == ''){
        // if(m!=0){
        //     //m.innerHTML='';
        //     m=0;
        // }
        const div=document.createElement('div');
        div.innerHTML =`<h2 class=" omg text-danger text-center  w-50 mx-auto">Write something</h2>`;
        show1.appendChild(div);
        const s = document.getElementById('meal-item');
        s.innerHTML = '';

        
    }
    else{
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
        fetch(url)
        .then( res => res.json())
        .then( data => showData(data))
    }
    
}



const showData = (meals) =>{
    console.log(meals);
    const mealItem = document.getElementById('meal-item');
    mealItem.innerHTML = '';
    
    
    if(meals.meals && meals.meals.length){        

        const all =meals.meals;
        for( const a of all){

            const meal = a;
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML =
            `
                <div class="mx-auto"  style="width: 20rem;" >
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0 , 200)}</p>
                      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `
            mealItem.appendChild(div);
        }

  
    }
    else{
        const show1 = document.getElementById('write');
        const div=document.createElement('div');
        div.innerHTML =`<h2 class="  omg text-danger text-center  w-50 mx-auto">Give a True meal name plz...!</h2>`;
        show1.appendChild(div);
    }
    
    
}


