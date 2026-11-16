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

function formTestimonio() {
  const contenedor = document.getElementById("formTestimonio");

  const form = crearElemento("form", "", "carga-Testimonio");
  form.id = "CargaTestimonio";

  const inputs = ["Nombre", "Calificación", "Comentario"];

  inputs.forEach((input) => {
    const label = crearElemento("label", input, "item-form");
    label.setAttribute("for", input);
    let inputField = null;
    if (input === "Comentario") {
      inputField = crearElemento("textarea", "", "item-form");
      inputField.setAttribute("required", true);
      inputField.setAttribute("cols", 4);
      inputField.setAttribute("rows", 3);
      inputField.setAttribute("maxlength", 255);
      inputField.setAttribute("placeholder", "Deje su comentario aquí");
    } else {
      inputField = crearElemento("input", "", "item-form");
    }
    inputField.id = input;

    switch (input) {
      case "Nombre":
        inputField.setAttribute("type", "text");
        inputField.setAttribute("required", true);
        inputField.setAttribute("placeholder", "Dejanos tu nombre....");
        break;
      case "Calificación":
        inputField.setAttribute("type", "number");
        inputField.setAttribute("required", true);
        inputField.setAttribute("min", 0);
        inputField.setAttribute("max", 5);
        inputField.setAttribute("step", 1);

        break;
    }

    form.appendChild(label);
    form.appendChild(inputField);
  });
  const btnSubmit = crearElemento("button", "Enviar Comentario", "submit-form");
  form.appendChild(btnSubmit);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await guardarTestimonio(salvarDatosForm());
    form.reset();
    await renderizarTestimonios();
  });
  contenedor.replaceChildren(form);
}

async function renderizarTestimonios() {
  const testimonios = await obtenerTestimonios();
  const seccionTestimonios = document.getElementById("testimonios");
  seccionTestimonios.replaceChildren(); 
  testimonios.forEach((t) => {
    seccionTestimonios.appendChild(testimonio(t));
  });
}

function salvarDatosForm() {
  const datos = { nombre: "", estrellas: "", comentario: "" };

  datos.nombre = document.getElementById("Nombre").value;
  datos.estrellas = document.getElementById("Calificación").value;
  datos.comentario = document.getElementById("Comentario").value;
  //console.log(datos);
  return datos;
}

async function crearTestimonios() {
  await renderizarTestimonios();
  formTestimonio();
}
