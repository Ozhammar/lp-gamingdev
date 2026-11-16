function crearElemento(etiqueta, texto = "", clase = "") {
  const elemento = document.createElement(etiqueta);
  if (texto) elemento.textContent = texto;
  if (clase) elemento.classList.add(clase);
  return elemento;
}

function calcularEstrellas(cantidad) {
  const puntaje = cantidad;
  const estrellas = "★".repeat(puntaje) + "☆".repeat(5 - puntaje);
  return crearElemento("p", estrellas, "modal_puntaje");
}

function testimonio(datos) {
  const modal = crearElemento("div", "", "item-testimonio");
  const usuario = crearElemento("h3", datos.nombre, "modal_user");
  const estrellas = calcularEstrellas(datos.estrellas);
  const comentario = crearElemento("p", datos.comentario, "modal_comentaro");

  let fechatDB = datos.fecha;
  let fechaFormateada = fechatDB.toLocaleDateString("es-AR");
  const fechaT = crearElemento("time", fechaFormateada, "modal_fecha");
  fechaT.setAttribute("datetime", fechaFormateada);

  const fechaPublicada = crearElemento("p", "Publicado el ", "modal_fecha");
  fechaPublicada.appendChild(fechaT);

  modal.replaceChildren(usuario, estrellas, comentario, fechaPublicada);

  return modal;
}


function formTestimonio(){
    const contenedor = document.getElementById('formTestimonio');
    
    const form = crearElemento('form', "", "carga-Testimonio");
    form.id = 'CargaTestimonio';

    const inputs = ['Nombre', 'Calificación', 'Comentario'];

    inputs.forEach(input =>{
        const label = crearElemento('label', input, 'item-form');
        const inputField = crearElemento('input', "", 'item-form');



        form.appendChild(label);
        form.appendChild(inputField);
    })


    

    contenedor.replaceChildren(form);
}
async function crearTestimonios() {
  const testimonios = await obtenerTestimonios();
  const seccionTestimonios = document.getElementById("testimonios");
  testimonios.forEach((t) => {
    seccionTestimonios.appendChild(testimonio(t));
  });
  formTestimonio();
}
