
// const pruebaDePromesa = new Promise(function(todoBien, todoMal) {
//     setTimeout(function() {
//         todoBien("La promesa funciona");
//     }, 3000)
    
// })

// const pruebaDePromesa2 = new Promise(function(todoBien, todoMal) {
//     setTimeout(function() {
//         todoBien("La segunda promesa funciona primero");
//     }, 5000)
    
// })

//pruebaDePromesa
//    .then(function() {
//        document.write("Funciona")
//    })
//    .catch(function() {
//        document.write("xd")
//    })

// Promise.race([
//     pruebaDePromesa,
//     pruebaDePromesa2,
// ])
// .then(function(mensaje) {
//     document.write(mensaje)
// })
// .catch(function() {
//     document.write("Todo mal")
// })


// $.ajax('https://randomuser.me/api/', {
//     method: 'GET',
//     success: function(data) {
//         console.log(data)
//     },
//     error: function() {
//         console.log("xd")
//     }
// })

// fetch('https://randomuser.me/api/')
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function(user) {
//         document.write('user: <br>')
//         document.write('Primer nombre: ', user.results[0].name.first, '<br>')
//         document.write('Segundo nombre: ', user.results[0].name.last, '<br>')
//         document.write('State: ', user.results[0].location.state, '<br>')
//     })
//     .catch(()=> {
//         document.write('kappa')
//     });











(async function load() {



    async function getData (url) {
     const response = await fetch(url)
     const data = await response.json()
     return data;
    }
    
    const ditto = await getData('https://pokeapi.co/api/v2/pokemon/ditto/')
    const litwick = await getData('https://pokeapi.co/api/v2/pokemon/litwick/')
    const espeon = await getData('https://pokeapi.co/api/v2/pokemon/espeon/')
    const dragonair = await getData('https://pokeapi.co/api/v2/pokemon/dragonair/')
    const charizard = await getData('https://pokeapi.co/api/v2/pokemon/charizard/')
    const lampent = await getData('https://pokeapi.co/api/v2/pokemon/lampent/')



// animación

function animacion(idAnimar) {

const animarSeccion = document.getElementById(idAnimar)

animarSeccion.classList.add('fadeIn')

}


// Información de pokemons

var pokeDitto = {
  nombre: 'Ditto',
  pasiva: 'Impostor',
  habilidad1: 'Agilidad',
  imagen: 'assets/imagenes/ditto.png',
  descripcion: 'El término ditto se utiliza para referirse a algo que se ha mencionado anteriormente o más arriba, ya sea de forma oral o escrita, para así reafirmar lo dicho, pero evitando la repetición de alguna declaración a la que, con esa expresión, se hace referencia. Significa "lo dicho" en el idioma Toscano.  ',
  numeroDeModal: 'ocultarModal'
}
var pokeEspeon = {
  nombre: 'Espeon',
  pasiva: 'Sincronizar',
  habilidad1: 'Magic Bounce',
  imagen: 'assets/imagenes/espeon.png',
  descripcion: '196 Espeon es un Pokémon de tipo psíquico introducido en la segunda generación. Es una de las ocho posibles evoluciones de Eevee.',
  numeroDeModal: 'ocultarModal2'
}
var pokeLitwick = {
  nombre: 'Litwick',
  pasiva: 'Cuerpo de llamas',
  habilidad1: 'Infiltrado',
  habilidad2: 'Incendio repentino',
  imagen: 'assets/imagenes/litwick.png',
  descripcion: '607 Litwick es un Pokémon de tipo fantasma/fuego introducido en la quinta generación, La luz que desprende absorbe la energía vital de humanos y Pokémon.',
  numeroDeModal: 'ocultarModal3'
}
var pokeDragonair = {
  nombre: 'Dragonair',
  pasiva: 'Mudar de piel',
  habilidad1: 'Marvel Scale',
  imagen: 'assets/imagenes/dragonair.png',
  descripcion: '148 Dragonair es un Pokémon de tipo dragón introducido en la primera generación. Es la evolución de Dratini.',
  numeroDeModal: 'ocultarModal4'
}
var pokeCharizard = {
  nombre: 'Charizard',
  pasiva: 'Energia Solar',
  habilidad1: 'Resplandor',
  imagen: 'assets/imagenes/charizard.png',
  descripcion: '006 Charizard es un Pokémon de tipo fuego/volador, introducido en la primera generación. Es la evolución de Charmeleon.',
  numeroDeModal: 'ocultarModal5'
}

var pokeLampent = {
  nombre: "Lampent",
  pasiva: 'Cuerpo de fuego',
  habilidad1: 'infiltrator',
  habilidad2: 'Flash Fire',
  imagen: 'assets/imagenes/lampent.png',
  descripcion: '608 Lampent es un Pokémon de tipo fantasma/fuego introducido en la quinta generación. Es la evolución de Litwick.'
,
  numeroDeModal: 'ocultarModal6'
}






// Imagen de pokeball

    const pokeImagen = 'https://github.com/zerofelx/PruebaAgustinFernandez/blob/master/Assets/imagenes/pokeball.png';


// Seccion donde van las habilidades y la imagen

    function itemTemplate(item) {
        return (
          
          `<div class="Habilidad-e-imagen">
        
            <div class="imagen-de-habilidad" style="text-align: center">
              <img style="width: 30px; height: 30px;" src="${pokeImagen}">
            </div>
            <h4 style="text-align: center" class="habilidad"> ${item.ability.name} </h4>
          </div>`
        )
      }











// Información sobre pokemon y habilidades 



    function detallePokemon(pokemon) {
      return (
        `
        <div style="text-align: center; margin: 20px 0;">
        <div style="box-shadow: 1px 1px 1px 1px #EAEAEA; width: 80%; margin: 0 auto; padding: 10px;">
          <div class="nombrePokemon">
              <h2 class="nombre-pokemon">${pokemon.nombre}</h2>
          </div>
          <div class="imagenPokemon">
              <img style="max-width: 50%; max-height: 300px" src="${pokemon.imagen}".png">
          </div>
          <div class="descripcionPokemon">
              <p class="parrafo">${pokemon.descripcion}</p>
          </div>
        </div>
        </div>
        `
        //  <form>           
        //     <input class="btn" id="${pokemon.numeroDeModal}6" type="button" value="Cerrar">
        // </form>
      )
    }

// Crear nueva seccion para nuevo pokemon

      // function seccionPokemon(numeroPokemon, stringNombrePokemon, idNumeroPokemon) {
      //   return(
      //     `<div class=" ${numeroPokemon} seccionPokemon" style="text-align: center; color: #12223d; width: 80%; margin: 0 auto;">
      //     <h2 style="padding: 20px 0; box-shadow: 1px 1px 1px 1px #DADADA;">Habilidades de ${stringNombrePokemon}</h2>
      //     <img class="cargando" src="Assets/imagenes/cargando-loading-048.gif">
      //     <div class="seccionClick" style="display: flex; justify-content: space-evenly;" id="${idNumeroPokemon}">
              
      //     </div>
      // </div>`
      //   )
      // }

      // function crearSeccionPokemon (pokemon, habilidadesPokemon) {
      //   document.querySelector(".cargando").remove();
      //   pokemon.abilities.forEach((item) => {
      //     const HTMLString = seccionPokemon(item)
      //     const html = document.implementation.createHTMLDocument();
      //     html.body.innerHTML = HTMLString;
      //     $(habilidadesPokemon).append(html.body.children[0])
      //   })
      // }





// Buscador
const $espacio = document.querySelector('#itemEncontrado')

function setAttributes($element, atributos) {
  for (const atributo in atributos) {
    $element.setAttribute(atributo, atributos[atributo]);
  }
}

  const $buscador = document.getElementById('buscar')
  $buscador.addEventListener('submit', (evento) => {
    event.preventDefault();
    const $loader = document.createElement('div')
    // setAttributes($loader, {
    //   src: 'asd',
    //   height: 200,
    //   width: 200,

    // })
    $espacio.append($loader);

    // const data = new FormData($buscador)
    // const busqueda = console.log(data.get('name'))
    // const HTMLString = detallePokemon(JSON.parse(busqueda))
    const HTMLString = detallePokemon(pokeEspeon)
    $espacio.innerHTML = HTMLString
    
  })
  
// Evento de click

const $info = document.getElementById('overlay')

function addEventClick2(ID, nombreDePokemon, idOcultar) {
  const $element = document.getElementById(ID)
  const $info2 = document.getElementById(nombreDePokemon)
  $element.addEventListener("click", function pokeAlert() {
    alert(`Detalles de habilidades principales de ${nombreDePokemon}`)
    $info.classList.add('activo')
    $info2.style.animation = 'traerModal .8s forwards'
    ocultarModal(nombreDePokemon, idOcultar)
  })}

function addEventClick(IDDiv) {
  const $element = document.getElementById(IDDiv)
  $element.addEventListener("click", () => {
    $element.children[1].classList.toggle('seccionClick')
  })}

  function ocultarModal(nombreDePokemon, idOcultar) {
    const $info2 = document.getElementById(nombreDePokemon)
    const $btnOcultarModal = document.getElementById(idOcultar);
    $btnOcultarModal.addEventListener("click", () => {
      $info2.style.animation = 'ocultarModal .8s forwards'
      setTimeout(() => {
        $info.classList.remove('activo');
      }, 800);
    })
  }




// Creación de secciones

      function crearSeccion (pokemon, habilidadesPokemon, ID, IDDiv,nombreDePokemon, idOcultar) {
        animacion(IDDiv)
        addEventClick(IDDiv)
        addEventClick2(ID, nombreDePokemon, idOcultar)
        document.querySelector(".cargando").remove();
        pokemon.abilities.forEach((item) => {
          const HTMLString = itemTemplate(item)
          const html = document.implementation.createHTMLDocument();
          html.body.innerHTML = HTMLString;
          $(habilidadesPokemon).append(html.body.children[0]);
        })
      }









// Creación de detalle de pokemons

      // function descPokemons(nombreDePokemon, imagenDePokemon, descPokemon) {
      //   (item) => {
      //     let elemento = document.querySelector('insertarScript')
      //     let pokemon = nombreDePokemon;
      //     const HTMLString = detallePokemon(item);
      //     const html = document.implementation.createHTMLDocument();
      //     html.body.innerHTML = HTMLString;
      //     $(elemento).append(html.body.children[0])
      //   }
      // }
      
      // const descLampent = "608 Lampent es un Pokémon de tipo fantasma/fuego introducido en la quinta generación. Es la evolución de Litwick."

      // descPokemons(lampent, 'Assets/imagenes/lampent.png', descLampent)
      // debugger
        
// Lista de habilidades de Ditto 

      // let habilidadesDitto = document.querySelector('#habilidades1')

      // ditto.abilities.forEach((item) => {
      //   const HTMLString = itemTemplate(item)
      //   const html = document.implementation.createHTMLDocument();
      //   html.body.innerHTML = HTMLString;
      //   $(habilidadesDitto).append(html.body.children[0])
      //   console.log(HTMLString)
      //   console.log(html)
        
      // })








// Habilidades Ditto

      let habilidadesDitto = document.querySelector('#habilidades1')

      crearSeccion(ditto, habilidadesDitto, 'habilidades1', 'primerPokemon','Ditto', 'ocultarModal')
      

// Lista de habilidades de Espeon  

      let habilidadesEspeon = document.querySelector('#habilidades2')
     
      crearSeccion(espeon, habilidadesEspeon, 'habilidades2', 'segundoPokemon','Espeon', 'ocultarModal2')


// Lista de habilidades de Litwick
        
      let habilidadesLitwick = document.querySelector('#habilidades3')

      crearSeccion(litwick, habilidadesLitwick, 'habilidades3', 'tercerPokemon','Litwick', 'ocultarModal3');

// Lista de habilidades de Dragonair

      let habilidadesDragonair = document.querySelector('#habilidades4')

      crearSeccion(dragonair, habilidadesDragonair, 'habilidades4', 'cuartoPokemon','Dragonair', 'ocultarModal4');

// Lista de habilidades de Charizard

let habilidadesCharizard = document.querySelector('#habilidades5')
crearSeccion(charizard, habilidadesCharizard, 'habilidades5', 'quintoPokemon','Charizard', 'ocultarModal5');

// Lista de habilidades de Lampent

let habilidadesLampent = document.querySelector('#habilidades6')
crearSeccion(lampent, habilidadesLampent, 'habilidades6', 'sextoPokemon', 'Lampent', 'ocultarModal6')


// CONSOLE LOG 

    console.log('Ditto: ', ditto)
    console.log('litwick: ', litwick)
    console.log('Espeon: ', espeon)
    console.log('Dragonair: ', dragonair)
    
    // function eliminarCarga() {
    //     document.querySelector(".cargando").remove();
    // }
    // eliminarCarga()

})()


