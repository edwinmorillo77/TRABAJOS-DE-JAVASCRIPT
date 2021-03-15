const tarjeta = document.getElementById("tarjeta");

let imagen = document.createElement("img");
imagen.setAttribute("src", "clip.jpg");
tarjeta.appendChild(imagen);
imagen.setAttribute("id", "imagen");

let titulo = document.createElement("h1");
titulo.setAttribute("id", "titulo");
titulo.innerHTML = "Cómo añadir un efecto a una imagen";
tarjeta.appendChild(titulo);

let parrafo = document.createElement("p");
parrafo.setAttribute("id", "parrafo");
parrafo.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti.";
tarjeta.appendChild(parrafo);

let boton = document.createElement("div");
boton.setAttribute("id", "boton");
boton.innerHTML = "Leer más";
tarjeta.appendChild(boton);