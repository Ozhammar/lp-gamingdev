const class_FaqCategoria = "faq-categoria";
const class_FaqItem = "faq-item";
const class_FaqCodigo = "faq-codigo";

const DatosFaq = [
  {
    categoria: "Conceptos básicos",
    preguntas: [
      {
        pregunta: "¿Qué es una variable y para qué sirve?",
        respuesta:
          "Una variable es un espacio con nombre en la memoria donde el programa guarda un dato para usarlo o modificarlo más adelante. Es como una caja etiquetada: la etiqueta es el nombre (vidas) y adentro va el valor (3). Gracias a las variables un programa puede recordar el puntaje de un jugador, el nombre de un usuario o el resultado de una cuenta.",
        codigos: [
          { lenguaje: "C#", texto: "int vidas = 3;\nvidas = vidas - 1;   // ahora vale 2" },
        ],
      },
    ],
  },
];

function crearBloqueCodigo(codigo) {
  const figura = document.createElement("figure");
  figura.classList.add(class_FaqCodigo);

  const lenguaje = document.createElement("figcaption");
  lenguaje.textContent = codigo.lenguaje;
  figura.appendChild(lenguaje);

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = codigo.texto;
  pre.appendChild(code);
  figura.appendChild(pre);

  return figura;
}

function crearFaq() {
  const contenedor = document.getElementById("contenedor_faq");

  DatosFaq.forEach((grupo) => {
    const seccion = document.createElement("section");
    seccion.classList.add(class_FaqCategoria);
    contenedor.appendChild(seccion);

    const titulo = document.createElement("h3");
    titulo.textContent = grupo.categoria;
    seccion.appendChild(titulo);

    grupo.preguntas.forEach((item) => {
      const detalle = document.createElement("details");
      detalle.classList.add(class_FaqItem);
      seccion.appendChild(detalle);

      const pregunta = document.createElement("summary");
      pregunta.textContent = item.pregunta;
      detalle.appendChild(pregunta);

      const respuesta = document.createElement("p");
      respuesta.textContent = item.respuesta;
      detalle.appendChild(respuesta);

      if (item.codigos != null) {
        item.codigos.forEach((codigo) => {
          detalle.appendChild(crearBloqueCodigo(codigo));
        });
      }
    });
  });
}