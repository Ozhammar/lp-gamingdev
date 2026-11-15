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
      { texto: "Ingles", valor: "english" },
      { texto: "Español", valor: "spanish" },
    ],
    porDefecto: "spanish",
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
    porDefecto: "",
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
  const grupo = document.createElement("div");
  DatosFiltrosNoticias.forEach((filtro) => {
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
    select.addEventListener("change", obtenerNoticias);
    grupo.append(etiqueta, select);
    contenedor.appendChild(grupo);
  });

  //BUSCADOR PERSONALIZADO, ANALIZAR DESPUES PORQAUE NO LOGRO HACERLO FUNCIONAR
  /*const buscador = document.createElement("input");
  buscador.type = "search";
  buscador.id = "filtro_busqueda";
  const etiqueta = crearElementoNoticias("label", "Buscar" + ": ");
  etiqueta.htmlFor = buscador.id;
  buscador.addEventListener("keydown", (e) => {
    let parametro = e.target.value;
    if (e.key === "Enter") {
      obtenerNoticias(parametro);
    }
  });
  grupo.append(etiqueta, buscador);*/
}

//funcion asincronica para solicitar a la API de dev.to las noticias mas recientes
async function obtenerNoticias() {
  //CONSTANTES DE LA SELECCION DE LOS FILTROS, PARA PODER USARLOS EN LA URL DE LA API
  //console.log(parametro);
  //console.log(typeof parametro);
  const cantidad = document.getElementById("filtro_cantidad").value;
  const idioma = document.getElementById("filtro_idioma").value;
  const antiguedad = document.getElementById("filtro_antiguedad").value;
  let tema = document.getElementById("filtro_tema").value;


  /*console.log(
    "Cantidad: " +
      cantidad +
      ", Tema: " +
      tema +
      ", Idioma: " +
      idioma +
      ", Antigüedad: " +
      antiguedad,
  );*/

  const respuesta = await fetch(
    `https://dev.to/api/articles?top=${antiguedad}&tag=${tema}&tag=${idioma}&per_page=${cantidad}`,
  );

  const data = await respuesta.json();
  noticias = data;
  cargarNoticias();
  console.log(data);
  //noticias.forEach((element) => {    console.log(element.title);  });
}

function cargarNoticias() {
  const lista = document.getElementById("lista_noticias");
  lista.replaceChildren(); // limpia lo anterior
  if (noticias.length === 0) {
    lista.appendChild(
      crearElementoNoticias("li", "No hay noticias con esos filtros."),
    );
    return;
  }

  noticias.forEach((noticia) => {
    const item = document.createElement("li");

    const tarjeta = crearElementoNoticias("button", "", "noticias-item");
    tarjeta.type = "button";
    tarjeta.setAttribute("aria-haspopup", "dialog");
    tarjeta.addEventListener("click", () => abrirModalNoticia(noticia));

    const imagen = crearElementoNoticias("img", "", "noticias-imagen");
    // No todos los artículos traen portada
    if (noticia.cover_image) {
      imagen.src = noticia.cover_image;
      imagen.alt = "";
      imagen.loading = "lazy";
      tarjeta.appendChild(imagen);
    } else {
      const imagen = crearElementoNoticias("img", "", "noticias-imagen");
      imagen.src = "assets/imagenes/noticia_default.jpg";
      imagen.alt = "";
      imagen.loading = "lazy";
      tarjeta.appendChild(imagen);
    }

    tarjeta.appendChild(crearElementoNoticias("span", noticia.title));

    item.appendChild(tarjeta);
    lista.appendChild(item);
  });
}

function abrirModalNoticia(noticia) {
  const modal = document.getElementById("modal_noticias");
  modal.replaceChildren();

  const titulo = crearElementoNoticias("h3", noticia.title);
  titulo.id = "modal_noticias_titulo";
  modal.appendChild(titulo);

  const fecha = new Date(noticia.published_at).toLocaleDateString("es-AR");
  modal.appendChild(
    crearElementoNoticias(
      "p",
      "Por " +
        noticia.user.name +
        " · " +
        fecha +
        " · " +
        noticia.reading_time_minutes +
        " min de lectura",
    ),
  );
  modal.appendChild(crearElementoNoticias("p", noticia.description));

  const enlace = crearElementoNoticias(
    "a",
    "Leer el artículo completo (se abre en una pestaña nueva)",
  );
  enlace.href = noticia.url;
  enlace.target = "_blank";
  enlace.rel = "noopener noreferrer";
  modal.appendChild(enlace);

  // method="dialog": el botón cierra el modal sin código extra
  const formulario = document.createElement("form");
  formulario.method = "dialog";
  formulario.appendChild(crearElementoNoticias("button", "Cerrar"));
  modal.appendChild(formulario);

  modal.showModal(); // Esc también cierra
}

function crearNoticias() {
  crearFiltrosNoticias();
  const modal = document.getElementById("modal_noticias");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
  obtenerNoticias();
}
