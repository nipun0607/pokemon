// let Api="https://pokeapi.co/api/v2/pokemon/1"
// console.log(Api);
let pokemon_container=document.querySelector(".pokemon_container")
let select=document.querySelector(".type-filter");
let filter=document.querySelector("#filter");
let input1=document.querySelector("#pokemon-search-input");
let color={
  grass:"green",
  fire:"orange",
  water:"blue",
}
async function fetch_Data(){
    for (let i=1;i<=150;i++){
        let Api=`https://pokeapi.co/api/v2/pokemon/${i}`
        let data_of_pokemon=await fetch(`${Api}`);
    let readable_data=await data_of_pokemon.json();
    // console.log(readable_data);
        new_data(readable_data,i);
        options(readable_data)
    }
    
   
}
fetch_Data();
function new_data(pokemon,i){
    let container=document.createElement("div");
    let name=pokemon.species.name;
    // console.log(name);

    let image=pokemon.sprites.front_default
    // console.log(image);


    let typesof=pokemon.types[0].type.name;
    // console.log(typesof);

    // console.log(pokemon);
    let abl=""
    pokemon.abilities.forEach(e=>{
        abl=abl+" "+e.ability.name
    })

// console.log(abl);


    //
    
    container.classList.add("outer_card_container");
    container.innerHTML=
    `

    <div class="card_conatiner">
      <div class="front_card">
        <p class="number">${i}</p>
        <img
          src=${image}
          alt="pokemon"
        />
        <p class="name">${name}</p>
        <p class="type">${typesof}</p>
      </div>
      <div class="backcard">
        <img src=${image} alt="Bulbasaur" />
        <p class="name">${name}</p>
        <p class="Abilities">Abilities:${abl}</p>
      </div>
    </div>
  
    `
    pokemon_container.appendChild(container);

    allcards.push(container);

}
    let arrOftype=[];

    function options(pokemon){
        
       let types= pokemon.types[0].type.name
       
        if(!arrOftype.includes(types)){
            arrOftype.push(`${types}`)
            let option=document.createElement("option");
            option.setAttribute("value",`${types}`);
            option.innerText=types;
            document.querySelector(".type-filter").appendChild(option)
            
        }
       

    }
    let allcards=[];
    let filterArr=[];
    filter.addEventListener("click",(e)=>{
      e.preventDefault();
      let top=select.value;
      // console.log(top);
      allcards.forEach(element => {
          let finalcard=element;
        let poketype=finalcard.children[0].children[0].children[3];

        // console.log(poketype);
          // finalcard.children
          if (poketype.innerText==top){
              // console.log(element);
              filterArr.push(element);
              // console.log(filterArr);
          }
      });
      // console.log(filterArr);   
      pokemon_container.replaceChildren(...filterArr);
      filterArr=[];

    })
    input1.addEventListener("input",(e)=>{
      
      let val = e.target.value;
      // console.log(val);
      allcards.forEach(element => {
        finalcard=element;
      let poketype=finalcard.children[0].children[0].children[2];

      // console.log(poketype);
        // finalcard.children
        if (poketype.innerText.startsWith(val)){
            // console.log(element);
            filterArr.push(element);
            // console.log(filterArr);
        }
    });
    // console.log(filterArr);   
    pokemon_container.replaceChildren(...filterArr);
    filterArr=[];
    })