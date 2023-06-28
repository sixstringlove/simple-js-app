

let pokemonRepository = (function() {
  let pokemonList = [];
  //api for pokemon list
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  function getAll() {
     return pokemonList;
   }
              
//restrict add to an object
  function add(pokemon) { 
    if (typeof pokemon ==="object" && "name" in  pokemon && "detailsUrl" in pokemon) {
       pokemonList.push(pokemon);
    } else {
      console.log("Invalid Object");
    } 
  }
    
  //create pokemon list w butttons labelled w name
  function addListItem(pokemon) {

      let pokemonList = document.querySelector(".list-group");

      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");

      let btn = document.createElement("button");

      btn.setAttribute("data-toggle", "modal");
      btn.setAttribute("data-target", "#pokemonModal");
      btn.classList.add("btn");

      btn.innerText = pokemon.name;
      listItem.appendChild(btn);
      pokemonList.appendChild(listItem);
  
      btn.addEventListener('click',function () {
        // console.log("pokemon btn!!")
        showDetails(pokemon);
       });
      }

//promise
  function loadList() {
   return fetch(apiUrl)
    .then (function (response) {
      return response.json();
    })
      .then(function (json)  {
        json.results.forEach(function (item) {
        let pokemon= {
          name: item.name,
          detailsUrl: item.url,
          height: item.height,
          weight: item.weight,
          types: item.types
        };
        add(pokemon);
        });
      })
  }
      
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
       //add details for item
       item.imageUrl = details.sprites.front_default;
       item.height = details.height;
       item.types = details.types;
       item.weight = details.weight;
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
      console.log(pokemon);
    });
  }

  function showModal (pokemon) {
    pokemonRepository.loadDetails(pokemon)
    .then(function ()  {
      let titleElement = document.querySelector(".modal-title");
      titleElement.innerHTML = pokemon.name;
      let imageElement = document.querySelector(".img-fluid.pokemon-image");
      imageElement.src = pokemon.imageUrl;
      let heightElement = document.querySelector(".pokemon-height");
      heightElement.innerText = "Height: " + pokemon.height;
      let weightElement = document.querySelector(".pokemon-weight");
      weightElement.innerText = "Weight: " + pokemon.weight;
      let typesElement = document.querySelector(".pokemon-types");
      typesElement.innerText = "Types: " + pokemon.types.map(getAllTypes).join(" & ");
      function getAllTypes(item) {
        return [item.type.name]
      }
    });
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
}
)();

const modalBody = document.querySelector(".model-dialog")

function closeModal () {
  modalBody.style.display = "none"
     //console.log("clicked!!!")
}
 
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});

//const closeButton = document.querySelector(".btn-primary")

  // function closeModal () {
  //     modalBody.style.display = "none"
  //       console.log("clicked!!!")
  //   }
    // let modalBody = $(".modal-body");
    // let modalTitle = $(".modal-title");
    // let modalHeader = $(".modal-header");

    // modalTitle.empty();
    // modalBody.empty();

    // let nameElement = $("<h1>" + pokemon.name + "</h1");
    // let imageElementFront = $('<img class="modal-img" style="width:50%">');
    // imageElementFront.attr("src", pokemon.imageUrlFront);
    // let imageElementBack = $('<img class="modal-img" style="width:50%">');
    // imageElementBack.attr("src", pokemon.imageUrlBack);

    // let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");

    // let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");

    // let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");

    // let abilitiesElement = $("<p>" + "abilities : " + pokemon.abilities + "</p>");

    // modalTital.append(nameElement);
    // modalBody.append(imageElementFront);
    // modalBody.append(imageElementBack);
    // modalBody.append(heightElement);
    // madalBody.append(weightElement);
    // modalBody.append(typesElement);
    // modalBody.append(abilitiesElement);
  //}


    // pokemonRepository.loadDetails(pokemon)
    // .then(function () {
    //   let titleElement = document.querySelector(".modal-title");
    //   titleElement.innerHTML = pokemon.name;

    //   let imageElement = document.querySelector(".img-fluid.pokemon-image");
    //   imageElement.src = pokemon.imageUrl;

    //   let heightElement = document.querySelector(".pokemon-height");
    //   heightElement.innerText = "Height:  "  +  pokemon-height;

    //   let weightElement = document.querySelector(".pokemon-weight");
    //   weightElement.innerText = "Weight:  "  + pokemon-weight;

    //   let typesElement = document.querySelector(".pokemon-types");
    //   typesElement.innerText = "Type:  "  + pokemon-types.map(getAllTypes).join(" & ");
    //     function getAllTypes(item) {
    //       return [item.type.name]
    //     });
    //   }
    // function hideModal () {
    //   let modalContainer = document.querySelector("#pokemonModal");
    //   modalContainer.classList.remove("is-visible");
    // }

    // window.addEventListener("keydown", (e)=> {
    //   let modalContainer = document.querySelector("#pokemonModal");
    //   if (e.key ==="Escape" && modalContainer.classList.contains("is-visible")) {
    //     hideModal ();
    //   }
    // });
  
    //  $("button.close")
    //   .on("click", function() {
    //    const modal = $(".modal");

    //   modal.removeClass("show");
    //   });

    //  $("modal")
    //    .on("keydown", function() {
    //    if (e.keyCode == 27) {
    //    close()};
      
    //    modal.removeClass('show');
    //    });
    
 
  //         //element for close button
  //     let modalCloseButton = document.createElement("button");
  //     modalCloseButton.classList.add("modal-close");
  //     modalCloseButton.innerText = "x";
  //     modalCloseButton.classList.add("button");
  //     modalCloseButton.addEventListener("click", function () {
  //       closeModal();
  //   });
  // }
  
  // function closeModal() {
  //   let modalContainer = document.querySelector("#modal-container");
  //   modalContainer.classList.add("modal-container");
  //   modalContainer.classList.remove("modal-is-visible");   
  // }
   