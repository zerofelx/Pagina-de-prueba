

$.ajax('https://randomuser.me/api/', {
    method: 'GET',
    success: function(data) {
        console.log(data)
    },
    error: function() {
        console.log("xd")
    }
})

fetch('https://randomuser.me/api/')
    .then(function (response) {
        return response.json()
    })
    .then(function(user) {
        
        document.write('<h1 style="text-align: center; color: #12223d">Persona Random: </h1><br>')
        document.write('<div style="text-align: center;"> <img src="' , user.results[0].picture.large ,' "></div>')
        document.write('<h3 style="text-align: center;">Primer nombre: ', user.results[0].name.first, '</h3><br>')
        document.write('<h3 style="text-align: center;">Segundo nombre: ', user.results[0].name.last, '</h3><br>')
        document.write('<h3 style="text-align: center;">Genero: ', user.results[0].gender, '</h3><br>')
        document.write('<h3 style="text-align: center;">Zona horaria: ', user.results[0].location.timezone.description, '</h3><br>')
        document.write('<div style="text-align: center"> <a style="text-decoration: none; color: black;" href="../asd.html">Click aquí para volver :0</a> </div>')
        
    })
    .catch(()=> {
        document.write('kappa')
    });

// function mostrarCara(urlImagen) {
//     `<div class="seccion">
//         <div class="imagen">
//             <img src="${urlImagen.medium}" alt="Imagen del usuario">
//         </div>
//     </div>
//     `
// }

// function crearSeccion(urlImagen) {
//     const insertarImagen = document.getElementById('insertarImagen');
    
// }