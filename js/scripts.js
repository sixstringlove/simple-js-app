let pokemonList = [{name:'Charizard', height:'1.7', type:['Fire, Flying']},
                    {name:'Ninetails', height:'1.1', type:['Fire']},
                    {name:'Kingler', height:'1.3', type:['Water']},
                    {name:'Zapdos', height:'1.6', type: ['Electric, Flying']},
                    {name:'Aerodactyl', height:'1.8', type: ['Rock, Flying']},
                ]
// begin IIFE by assigning pokemon repository variable 
let pokemonRepository = (function() {
  let pokemonList = [];

  function getAll () {
    return pokemonList;
  }
//restrict add to an object
  function add(pokemon) {
    if (
      typeof pokemon ==="object" &&
      "name" in pokemon){
       
      pokemonList.push(pokemon);
      } else {
        console.log("Invalid Object");
      } 
    }

  return {
    add: add,
    getAll: getAll,
    };
})();


// loop pokemon display with name and height
for (let i=0; i < pokemonList.length; i++) {
    pokemonData = `<p>${pokemonList[i].name}, (height: ${ + pokemonList[i].height})`;
    pokemonList.forEach (function(pokemon) {
       console.log(pokemonList.name);
      });

function myLoopFunction(pokemonList) {
        console.log(pokemonList.name);
      }

pokemonList.forEach(myLoopFunction);
        function getAll () {
        return pokemonList;
      }
      



//conditional for height
    if (pokemonList [i].height > 1.7) {
        pokemonData += ' Wow! Thats a big pokemon' 
    }
    pokemonData += '</p>';

    document.write (pokemonData);
  }

  



