let contenedor = document.getElementById("contenedor");



fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
.then (resp => resp.json())
.then (data => {
    data.results.forEach(pokemon => {
        contenedor.innerHTML +=`<h3>Nombre: ${pokemon.name} </h3>` 
    }) 
}) 
   
.catch(err => console.log(err))

