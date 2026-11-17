const class_HomeTarjeta = "home-tarjeta";
const claveNoticiaHome = "noticiaHome"; 

function crearElementoHome(etiqueta, texto = "", clase = "") {
  const elemento = document.createElement(etiqueta);
  if (texto) elemento.textContent = texto;
  if (clase) elemento.classList.add(clase);
  return elemento;
}

function crearBotonModuloHome(texto, modulo) {
  const boton = crearElementoHome("button", texto, "btnMenu");
  boton.type = "button";
  boton.dataset.modulo = modulo;
  return boton;
}

function acortarTextoHome(texto, maximo) {
  return texto.length <= maximo ? texto : texto.slice(0, maximo).trimEnd() + "…";
}


function crearTarjetaHome(titulo, id = "") {
  const tarjeta = crearElementoHome("article", "", class_HomeTarjeta);
  if (id) tarjeta.id = id;
  tarjeta.appendChild(crearElementoHome("h4", titulo));
  return tarjeta;
}

function crearTarjetaReviewHome() {
  if (typeof DatosReviews === "undefined" || DatosReviews.length === 0) return null;

  const mejor = DatosReviews.reduce((actual, review) =>
    review.resenaPersonal.puntaje > actual.resenaPersonal.puntaje ? review : actual,
  );

  const tarjeta = crearTarjetaHome("Mejor puntuada");
  const imagen = crearElementoHome("img", "", "home-imagen");
  imagen.src = mejor.imagen;
  imagen.alt = "";
  imagen.loading = "lazy";
  imagen.addEventListener("error", () => imagen.remove()); 
  tarjeta.appendChild(imagen);

  tarjeta.appendChild(crearElementoHome("p", mejor.marca + " " + mejor.modelo, "home-destacado"));
  tarjeta.appendChild(crearElementoHome("p", "Puntaje: " + mejor.resenaPersonal.puntaje.toFixed(1) + " / 10"));
  tarjeta.appendChild(crearElementoHome("p", acortarTextoHome(mejor.resenaPersonal.resumen, 140)));
  tarjeta.appendChild(crearBotonModuloHome("Ver todas las reviews", "reviews.html"));
  return tarjeta;
}

function crearTarjetaGuiaHome() {
  if (typeof datosGuias === "undefined" || datosGuias.length === 0) return null;

  const guia = datosGuias[Math.floor(Math.random() * datosGuias.length)];

  const tarjeta = crearTarjetaHome("Guía de compra");
  tarjeta.appendChild(crearElementoHome("p", guia.titulo, "home-destacado"));
  tarjeta.appendChild(crearElementoHome("p", acortarTextoHome(guia.enfoque, 140)));
  tarjeta.appendChild(crearBotonModuloHome("Ver las guías", "guia_compras.html"));
  return tarjeta;
}

async function obtenerNoticiaHome() {
  try {
    const guardada = sessionStorage.getItem(claveNoticiaHome);
    if (guardada) return JSON.parse(guardada);
  } catch (error) {
  }

  const respuesta = await fetch("https://dev.to/api/articles?tag=spanish&top=7&per_page=10");
  if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
  const articulos = await respuesta.json();
  const articulo = articulos.find((a) => a.language === "es") ?? articulos[0];
  if (!articulo) return null;

  const noticia = { titulo: articulo.title, autor: articulo.user.name, fecha: articulo.published_at, url: articulo.url };
  try {
    sessionStorage.setItem(claveNoticiaHome, JSON.stringify(noticia));
  } catch (error) {
  }
  return noticia;
}

async function cargarNoticiaHome(tarjeta) {
  tarjeta.appendChild(crearElementoHome("p", "Cargando noticia...", "home-estado"));
  let noticia = null;
  try {
    noticia = await obtenerNoticiaHome();
  } catch (error) {
    console.error("Error cargando la noticia del inicio:", error);
  }
  if (!tarjeta.isConnected) return; 

  tarjeta.querySelector(".home-estado").remove();
  if (noticia === null) {
    tarjeta.appendChild(crearElementoHome("p", "No se pudo cargar la última noticia."));
  } else {
    tarjeta.appendChild(crearElementoHome("p", noticia.titulo, "home-destacado"));
    const fecha = crearElementoHome("time", new Date(noticia.fecha).toLocaleDateString("es-AR"));
    fecha.dateTime = noticia.fecha;
    const detalle = crearElementoHome("p", "Por " + noticia.autor + " · ");
    detalle.appendChild(fecha);
    tarjeta.appendChild(detalle);

    const enlace = crearElementoHome("a", "Leer el artículo");
    enlace.href = noticia.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    tarjeta.appendChild(enlace);
  }
  tarjeta.appendChild(crearBotonModuloHome("Ver más noticias", "noticias.html"));
}

function crearHome() {
  const tarjetaReview = crearTarjetaReviewHome();
  if (tarjetaReview) document.getElementById("tarjetas_review_home").appendChild(tarjetaReview);

  const contenedor = document.getElementById("tarjetas_destacados_home");
  const tarjetaGuia = crearTarjetaGuiaHome();
  if (tarjetaGuia) contenedor.appendChild(tarjetaGuia);

  const tarjetaNoticia = crearTarjetaHome("Última noticia", "tarjeta_noticia_home");
  contenedor.appendChild(tarjetaNoticia);
  cargarNoticiaHome(tarjetaNoticia);
}
