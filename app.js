console.log ("Hola desde Priyecto Cinta Blanca 45 !")

// declarar los inputs
const nombre = document.getElementById ("nombre");
const direccion = document.getElementById ("direccion");
const telefono = document.getElementById ("telefono");
const sexo = document.getElementById ("sexo");
const categoria = document.getElementById ("categoria");
const boton = document.getElementById ("boton");

    // RESPUESTAS
const respuestaNnombre = document.getElementById ("respuestaNombre");
const respuestaDireccion = document.getElementById ("respuestaDireccion");
const respuestaTelefono = document.getElementById ("respuestaTelefono");
const respuestaSexo = document.getElementById ("respuestaSexo");
const socio = document.getElementById ("socio");
const progress = document.getElementById ("progress");
const imagen = document.getElementById('imagen');

const card = document.getElementById('card');
card.style.display ="none";

const serSocio = () => {

  if ( nombre.value === "" || direccion.value === "" || telefono.value === "" || sexo.value === "" || categoria.value === "" ) {
    alert (" Debes ingresar valores en los campos")
  } else {

  respuestaNombre.innerHTML = nombre.value;
  respuestaDireccion.innerHTML = direccion.value;
  respuestaTelefono.innerHTML = telefono.value;
  socio.innerHTML = categoria.value;

  const valorCategoria = categoria.value.toLowerCase();

  if(valorCategoria === "principiante") {
    socio.innerHTML = " ¡ Es momento de empezar a correr ! ";
    imagen.src = "https://www.runnea.com/archivos/201705/correr-despues-de-parto-838x400x80xX.jpg?1"
  } else if (categoria.value === "10 km") {
    socio.innerHTML = "¡ tus primeros 10 km !";
    imagen.src ="https://thumbs.dreamstime.com/b/km-medium-running-distance-splash-paint-sign-km-medium-running-distance-124970072.jpg"
  } else if (categoria.value === "21 km") {
    socio.innerHTML = "¡ disfruta y mejora tu tiempo en los 21 km !";
    imagen.src ="https://marcosedo.com/wp-content/uploads/2014/01/experiencia_21k.jpg"
  } else if (categoria.value === "Maratón") {
    socio.innerHTML = "¡ Mejora el tiempo en tus 42 km !";
    imagen.src ="42 km.jpg"
  }

  card.style.display ="";

  console.log("Solicitud Aceptada");
  }
}

boton.addEventListener("click", serSocio);
