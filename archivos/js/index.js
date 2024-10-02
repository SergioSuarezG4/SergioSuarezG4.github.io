const url = 'datos/datos.json'
fetch(url)
    .then((response) => response.json())
    .then((data) => {

        const datos = data.datos_tienda
        const titulo = data.titulo_pagina
        const productos = data.productos
        const horarios = data.datos_tienda.horario_atencion

        const tituloPagina = document.getElementById('titulo')
        tituloPagina.innerHTML = titulo
        
        const nombre = document.getElementById('nombre')
        nombre.innerHTML = datos.nombre

        const cardContainer = document.getElementById('cards')

        const cardDestacadas = document.getElementById('card_destacada')

        let cards = ''
        let reseñas = ''
        let card_destacada = ''
        productos.forEach((producto) =>  {
            
            if(producto.reseñas.length > 0){
                producto.reseñas.forEach(reseña => {
                    reseñas += 
                    `
                   <div class="card mb-5">
                        <div class="card-header bg-secondary">${reseña.usuario}</div>
                        <div class="card-body ">
                            <blockquote class="blockquote mb-0">
                                <p>Comentario: ${reseña.comentario}</p>
                                <p>Calificacion: ${reseña.calificacion}</p>
                                <p>Fecha: ${reseña.fecha}</p>
                            </blockquote>
                        </div>
                    </div>
                    `
                    
                })
            }

            let imagenes = ''
            if(producto.imagenes.length > 0){
                producto.imagenes.forEach(imagen => {
                    imagenes +=
                     `<img src="${imagen}" class="card-img-top w-25 h-25">
                     `         
                    })
            }
            if(data.reseñas_destacadas.length > 0){ 
                data.reseñas_destacadas.forEach(destacadas =>{
                    card_destacada += 
                    `   
                       <div class="card mb-5 p-5">
                            <div class="card-header bg-secondary">${destacadas.usuario}</div>
                            <div class="card-body ">
                                <blockquote class="blockquote mb-0">
                                    <p>Comentario: ${destacadas.comentario}</p>
                                    <p>Calificacion: ${destacadas.calificacion}</p>
                                    <p>Fecha: ${destacadas.producto}</p>
                                </blockquote>
                            </div>
                        </div>
                        
                    `
                })
              }

            

            cards += 
           `<div class="col-6">
                                           
                        <div class="card-body">
                        <div class="card p-5">
                             <div class="img-card mt-5 p-3">
                                ${imagenes}
                            </div> 
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.categoria}</p>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text">Precio: ${producto.precio}</p>

                            <p class="card-text">${reseñas}</p>
                            <p class="card-text"><small class="text-body-secondary"></small></p>
                        </div>
                    </div>
            </div>` 
            
        });

        cardContainer.innerHTML = cards;
        cardDestacadas.innerHTML = card_destacada;



    const nombrea = document.getElementById('nombre')
    nombre.innerHTML = datos.nombre
    const telefono = document.getElementById('telefono')
    telefono.innerHTML = datos.telefono
    const correo = document.getElementById('correo')
    correo.innerHTML = datos.correo 
    const direccion = document.getElementById('direccion')
    direccion.innerHTML = datos.direccion
    const lunes_viernes = document.getElementById('lunes-viernes')
    lunes_viernes.innerHTML =  horarios.lunes_a_viernes
    const sabados = document.getElementById('sabados')
    sabados.innerHTML =  horarios.sabados
    const domingos = document.getElementById('domingos')
    domingos.innerHTML =  horarios.domingos

    })

    