let noticias = []; //array vacio de noticias
let cantidadNoticias = 10; //cantidad de noticias a mostrar, definido como variable global para poder modificarlo desde el HTML

function crearElementoNoticias(etiqueta, texto = "", clase = "") {
  const elemento = document.createElement(etiqueta);
  if (texto) elemento.textContent = texto;
  if (clase) elemento.classList.add(clase);
  return elemento;
}

const DatosFiltrosNoticias = [
  {
    id: "filtro_cantidad",
    etiqueta: "Cantidad",
    opciones: [
      { texto: "5", valor: "5" },
      { texto: "10", valor: "10" },
      { texto: "20", valor: "20" },
      { texto: "30", valor: "30" },
    ],
    porDefecto: "10",
  },
  {
    id: "filtro_idioma",
    etiqueta: "Idioma",
    opciones: [
      { texto: "Ingles", valor: "en" },
      { texto: "Español", valor: "es" },
    ],
    porDefecto: "es",
  },
  {
    id: "filtro_tema",
    etiqueta: "Tema",
    opciones: [
      { texto: "Todos", valor: "" },
      { texto: "Programación", valor: "programming" },
      { texto: "JavaScript", valor: "javascript" },
      { texto: "C#", valor: "csharp" },
      { texto: "Desarrollo web", valor: "webdev" },
      { texto: "Python", valor: "python" },
      { texto: "IA", valor: "ai" },
      { texto: "Videojuegos", valor: "gamedev" },
    ],
    porDefecto: "programming",
  },
  {
    id: "filtro_antiguedad",
    etiqueta: "Antigüedad",
    opciones: [
      { texto: "Último día", valor: "1" },
      { texto: "Última semana", valor: "7" },
      { texto: "Último mes", valor: "30" },
      { texto: "Último año", valor: "365" },
    ],
    porDefecto: "7",
  },
];

function crearFiltrosNoticias() {
  const contenedor = document.getElementById("filtros_noticias");
  DatosFiltrosNoticias.forEach((filtro) => {
    const grupo = document.createElement("div");
    const etiqueta = crearElementoNoticias("label", filtro.etiqueta + ": ");
    etiqueta.htmlFor = filtro.id;

    const select = document.createElement("select");
    select.id = filtro.id;
    filtro.opciones.forEach((opcion) => {
      const elemento = crearElementoNoticias("option", opcion.texto);
      elemento.value = opcion.valor;
      select.appendChild(elemento);
    });
    select.value = filtro.porDefecto;
    //select.addEventListener("change", cargarNoticias);

    grupo.append(etiqueta, select);
    contenedor.appendChild(grupo);
  });
}

//funcion asincronica para solicitar a la API de dev.to las noticias mas recientes
async function obtenerNoticias() {
    //CONSTANTES DE LA SELECCION DE LOS FILTROS, PARA PODER USARLOS EN LA URL DE LA API
 const cantidadd = document.getElementById("filtro_cantidad").value;
  const tema = document.getElementById("filtro_tema").value;
  const antiguedad = document.getElementById("filtro_antiguedad").value;
console.log("Cantidad: " + cantidadd + ", Tema: " + tema + ", Antigüedad: " + antiguedad);

  const respuesta = await fetch(
    `https://dev.to/api/articles?top=60&tag=programming&tag=spanish&per_page=10`,
  );
  const data = await respuesta.json();
  noticias = data;
  noticias.forEach((element) => {
    //console.log(element.title);
  });
}




function crearNoticias() {
  crearFiltrosNoticias();
  obtenerNoticias();
}

