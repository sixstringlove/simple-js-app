let pokemonList = [{name:'Charizard', height:'1.7', type:['Fire, Flying']},
                    {name:'Ninetails', height:'1.1', type:'Fire'},
                    {name:'Kingler', height:'1.3', type:'Water'},
                    {name:'Zapdos', height:'1.6', type: ['Electric, Flying']},
                    {name:'Aerodactyl', height:'1.8', type: ['Rock, Flying']},
                ]
                
// loop pokemon display with name and height
for (let i=0; i < pokemonList.length; i++) {
    pokemonData = `<p>${pokemonList[i].name}, (height: ${ + pokemonList[i].height})`;

//conditional for height
    if (pokemonList [i].height > 1.7) {
        pokemonData += ' Wow! Thats a big pokemon' 
    }
    pokemonData += '</p>';

    document.write (pokemonData);
     
}


