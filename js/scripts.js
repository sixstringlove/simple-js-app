
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
  function addListItem(pokemon) {

      let pokemonListItem = document.querySelector(".pokemon-list");
      pokemonListItem.classList.add("list-group");

      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");

      let button = document.createElement("button");
      button.innerText = (pokemon.name);
      button.classList.add("pokemonButton");
      listItem.appendChild(button);
      pokemonListItem.appendChild(listItem);
      //add event listen to show details of pokemon
      button.addEventListener('click',function (event) {
        showDetails(pokemon);
      });
  }
//promise
  function loadList() {
    return fetch(apiUrl)
      .then (function (response) {
      return response.json();
      })
      .then(function (json) {
      //call results with namme and url
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });

    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
      return response.json();
    })
      .then(function (details) {
    //add details for item
      item.imageUrl = details.sprites.font_default;
      item.height = details.height;
      item.types = details.types;
    })
      .catch(function (e) {
        console.error(e);
    });
  }



  // result of button click
  function showDetails(pokemon) {
    loadDetails(pokemon)
    .then(function () {
      showModal (pokemon);
    });
  }

  function showModal (pokemon) {
    pokemonRepository.loadDetails (pokemon)
    .then(function () {
        //add name as modal title
        let modalTitle = document.querySelector(".modal-title");
        modalTitle.innerText = pokemon.name;

        //create image container
      let imageContainer = document.querySelector(".image-container");
    
   
        //create an element for image
      let pokemonImage = document.createElement("img");
      pokemonImage.src = pokemon.imageUrl;
      pokemonImage.classList.add("pokemon-image");

        //clear and append
      imageContainer.innerHTML = "";
      imageContainer.appendChild(pokemonImage);

        //add height
      let pokemonHeight = document.querySelector(".height");
      pokemonHeight.innerText = "Height:  " +  pokemon.height;

        //add class for modal to open or close
      let modal = document.querySelector(".modal");
      modal.classList.add("modal-is-visible");
      modal.classList.remove("modal");

        //button container
      let buttonContainer = document.querySelector("#button-container");
      buttonContainer.innerHTML = "";
      buttonContainer.appendChild(modalCloseButton);

        //element for close button
      let modalCloseButton = document.createElement("button");
      modalCloseButton.classList.add("modal-close");
      modalCloseButton.innerText = "x";
      modalCloseButton.classList.add("button");

      modalCloseButton.addEventListener("click", function () {
        closeModal ();
      });
    });

    function closeModal() {
      let modalContainer = document.querySelector("#modal-container");
      modalContainer.classList.add("modal");
      modalContainer.classList.remove("modal-is-visible");
    }
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };
})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


      
      




  

  



