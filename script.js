// let Api="https://pokeapi.co/api/v2/pokemon/1"
// console.log(Api);
let pokemon_container=document.querySelector(".pokemon_container")
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
    console.log(typesof);

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