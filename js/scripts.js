
let pokemonRepository = (function() {
  let pokemonList = [];
  //api for pokemon list
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

  function getAll() {
    return pokemonList;
  }
              
//restrict add to an object
  function add(pokemon) {
    if (
      typeof pokemon ==="object" &&
      "name" in pokemon  
      ) {
      pokemonList.push(pokemon);
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
      button.addEventListener('click',function (event) {
        showDetails(pokemon);
      });
  }
//promise
  function loadList() {
    return fetch(apiUrl).then (function (response) {
      return response.json();
    }).then(function (json) {
      //call results with namme and url
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
    //add details for item
      item.imageUrl = details.sprites.font_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }



  //console log result of button click
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();


//console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


      
      




  

  



