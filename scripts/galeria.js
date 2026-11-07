const class_GaleriaItem = "galeria-item";
const class_GaleriaMiniatura = "galeria-miniatura";

const DatosGaleria = [
  {
    titulo: "RGB Resident Evil Setup",
    autor: "Branden Skeli",
    imagen: "https://images.unsplash.com/photo-1775410631936-7de96322df0b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    enlace: "https://unsplash.com/es/fotos/configuracion-de-gamers-con-multiples-monitores-e-iluminacion-rgb-zHzRrYV_Ars",
    specs: {
      CPU: "Intel Core i9-13900K",
      GPU: "NVIDIA GeForce RTX 4090 (Founders Edition)",
      RAM: "32GB (2x16GB) Corsair Dominator Platinum RGB DDR5",
      "Placa madre": "ASUS ROG Maximus Z790 Hero",
      Almacenamiento: "2TB NVMe M.2 SSD",
      Monitor: "Triple Monitor Setup (ASUS ROG Swift OLED & LG UltraGear)",
    },
  },
  {
    titulo: "Minimalist Wooden Workstation",
    autor: "Roberto Nickson",
    imagen: "https://images.unsplash.com/photo-1616440537338-1d04df3987f7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    enlace: "https://unsplash.com/es/fotos/monitor-de-computadora-de-pantalla-plana-negro-sobre-escritorio-de-madera-marron-aBwEpdt8VLE",
    specs: {
      CPU: "AMD Ryzen 9 5900X",
      GPU: "NVIDIA GeForce RTX 3080",
      RAM: "32GB Corsair Vengeance LPX DDR4",
      "Placa madre": "NZXT N7 B550",
      Almacenamiento: "1TB Samsung 980 Pro NVMe SSD",
      Monitor: "LG UltraWide 34\" Curved + Monitor secundario en vertical",
    },
  },
  {
    titulo: "Esports Dual-Monitor Station",
    autor: "Ella Don",
    imagen: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    enlace: "https://unsplash.com/es/fotos/escritorio-de-juegos-con-monitores-y-ordenador-0oqMvhc1ntw",
    specs: {
      CPU: "Intel Core i7-12700K",
      GPU: "NVIDIA GeForce RTX 3070 Ti",
      RAM: "32GB Kingston FURY Beast DDR4",
      "Placa madre": "MSI MAG Z690 Tomahawk WiFi",
      Almacenamiento: "1TB M.2 PCIe Gen4 NVMe SSD",
      Monitor: "Dual Setup BenQ ZOWIE XL-Series 240Hz",
    },
  },
  {
    titulo: "Neon Cyberpunk ROG Battlestation",
    autor: "Sdl Sanjaya",
    imagen: "https://images.unsplash.com/photo-1696710257827-75e2e5954059?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    enlace: "https://unsplash.com/es/fotos/configuracion-del-ordenador-de-juegos-en-luces-moradas-2rQoMZLVXHc",
    specs: {
      CPU: "Intel Core i7-11700K",
      GPU: "ASUS ROG Strix GeForce RTX 3080",
      RAM: "16GB (2x8GB) Corsair Vengeance RGB Pro",
      "Placa madre": "ASUS ROG Strix Z590-E Gaming WiFi",
      Almacenamiento: "1TB Corsair MP600 NVMe M.2 SSD",
      Monitor: "ASUS ROG Strix XG279Q 27\" 170Hz",
    },
  },
];

function crearTarjeta(item) {
  const elemento = document.createElement("li");

  const boton = document.createElement("button");
  boton.type = "button";
  boton.classList.add(class_GaleriaItem);
  boton.setAttribute("aria-haspopup", "dialog");
  boton.addEventListener("click", () => abrirModal(item));

  const imagen = document.createElement("img");
  imagen.classList.add(class_GaleriaMiniatura);
  imagen.src = item.imagen;
  imagen.alt = item.titulo;
  imagen.loading = "lazy";
  boton.appendChild(imagen);

  const texto = document.createElement("span");
  texto.textContent = "Ver especificaciones";
  boton.appendChild(texto);

  elemento.appendChild(boton);
  return elemento;
}

function abrirModal(item) {
  const modal = document.getElementById("modal_galeria");

  document.getElementById("modal_titulo").textContent = item.titulo;
  document.getElementById("modal_autor").textContent = item.autor ? "Crédito: " + item.autor : "";

  const enlace = document.getElementById("modal_enlace");
  enlace.hidden = !item.enlace;
  enlace.href = item.enlace || "#";

  const imagen = document.createElement("img");
  imagen.src = item.imagen;
  imagen.alt = item.titulo;
  document.getElementById("modal_imagen_contenedor").replaceChildren(imagen);

  const cuerpo = document.getElementById("modal_specs_cuerpo");
  cuerpo.replaceChildren();
  const specs = Object.entries(item.specs ?? {});
  specs.forEach(([componente, detalle]) => {
    const fila = document.createElement("tr");

    const etiqueta = document.createElement("th");
    etiqueta.scope = "row";
    etiqueta.textContent = componente;
    fila.appendChild(etiqueta);

    const valor = document.createElement("td");
    valor.textContent = detalle;
    fila.appendChild(valor);

    cuerpo.appendChild(fila);
  });

  document.getElementById("modal_specs").hidden = specs.length === 0;
  document.getElementById("modal_sin_specs").hidden = specs.length > 0;

  modal.showModal();
}

function configurarModal() {
  const modal = document.getElementById("modal_galeria");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
}

function crearGaleria() {
  const lista = document.getElementById("lista_galeria");

  configurarModal();
  DatosGaleria.forEach((item) => {
    lista.appendChild(crearTarjeta(item));
  });
}