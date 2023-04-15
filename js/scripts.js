
let pokemonRepository = (function() {
let pokemonList = [{name:'Charizard', height:'1.7', type:['Fire, Flying']},
                    {name:'Ninetails', height:'1.1', type:['Fire']},
                    {name:'Kingler', height:'1.3', type:['Water']},
                    {name:'Zapdos', height:'1.6', type: ['Electric, Flying']},
                    {name:'Aerodactyl', height:'1.8', type: ['Rock, Flying']}, 
  ]

  function getAll() {
    return pokemonList;
  }
              
//restrict add to an object
  function add(pokemon) {
    if (
      typeof pokemon ==="object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon 
    ) {
      repository.push(pokemon);
      } else {
        console.log("Invalid Object");
      } 
  }
  //create pokemon list w butttons labelled w name
  function addListItem(pokemon){

      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = (pokemon.name);
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      //add event listen to show details of pokemon
      button.addEventListener('click',function () {
        showDetails(pokemon);
      });
  }
  //console log result of button click
  function showDetails(pokemon) {
    console.log(pokemon)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


// loop pokemon display with name and height
//for (let i=0; i < pokemonList.length; i++) {
    //pokemonData = `<p>${pokemonList[i].name}, (height: ${ + pokemonList[i].height})`;
    //pokemonList.forEach (function(pokemon) {
      // console.log(pokemonList.name);
      //});

//function myLoopFunction(pokemonList) {
       // console.log(pokemonList.name);
      //}

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
      
      



//conditional for height
    //if (pokemonList [i].height > 1.7) {
       // pokemonData += ' Wow! Thats a big pokemon' 
    //}
    //pokemonData += '</p>';

    //document.write (pokemonData);
  

  



