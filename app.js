// declarar los inputs
const nombre = document.getElementById ("nombre");
const direccion = document.getElementById ("direccion");
const telefono = document.getElementById ("telefono");
const edad = document.getElementById ("edad");
const distancia = document.getElementById ("distancia");
const boton = document.getElementById ("boton");

    // RESPUESTAS
const respuestaNnombre = document.getElementById ("respuestaNombre");
const respuestaDireccion = document.getElementById ("respuestaDireccion");
const respuestaTelefono = document.getElementById ("respuestaTelefono");
const respuestaEdad = document.getElementById ("respuestaEdad");
const socio = document.getElementById ("socio");
const progress = document.getElementById ("progress");
const imagen = document.getElementById('imagen');

const card = document.getElementById('card');
card.style.display ="none";

// Paso 2: Declarar la función que generará la card con las entradas del usuario

const generarOrden = () => {

//  . . .validar que ningún campo esté vacío
  if ( nombre.value === "" || direccion.value === "" || telefono.value === "" || edad.value === "" ) {
    alert (" Debes ingresar valores en los campos")
  } else {
    // Las respuestas cambien por lo ingresado por los usuarios en los INPUTS
  respuestaNombre.innerHTML = nombre.value;
  respuestaDireccion.innerHTML = direccion.value;
  respuestaTelefono.innerHTML = telefono.value;
  respuestaEdad.innerHTML = edad.value;


  if(valorPina === "con piña") {
    pedido.innerHTML = "Pizza CON piña";
    imagen.src = "https://i.blogs.es/58a778/pizza-hawaiana3/840_560.jpg"
    progress.style.width = "25%";
  } else if (pina.value === "sin piña") {
    pedido.innerHTML = "Pizza SIN piña";
    imagen.src ="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg"
    progress.style.width = "25%";
  } else {
    pedido.innerHTML = "El usuario no indicó su pedido";
    imagen.src = "https://cdn.cheapism.com/images/091417_restaurant_mistakes_slide_11_fs.max-420x243.jpg"
  }

  card.style.display ="";

  console.log("Orden generada");
  }
}

// Paso 3: Agregar el event listener del botón para que ejecuté la función que genere la card

boton.addEventListener("click", generarOrden);
