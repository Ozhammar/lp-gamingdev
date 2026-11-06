const class_MenuPrincipal = "menu";
//console.log(class_MenuPrincipal);

const class_ItemSubMenu = "item-submenu";
//console.log(class_ItemSubMenu);

const class_SubMenu = "submenu";
//console.log(class_SubMenu);

const btn_toggle = "btn-toggle";
//console.log(btn_toggle);

const btn_item = "btn-item";
//console.log(btn_item);

const DatosMenu = [
  {
    menu: "Programación Orientada a Objetos",
    submenu: [
      {
        nombre: "Fundamentos POO",
        url: "https://www.youtube.com/embed/6sZ2Wv0qYbw",
      },
      {
        nombre: "Introducción a C#",
        url: "https://www.youtube.com/embed/Ge8XTCkeadk",
      },
      {
        nombre: "Bits a Objetos",
        url: "https://www.youtube.com/embed/XPIgIcCWkMM",
      },
      {
        nombre: "Complejidad Software",
        url: "https://www.youtube.com/embed/Qct-e2pptS0",
      },
      {
        nombre: "Abstracción y Encapsulamiento",
        url: "https://www.youtube.com/embed/FxBKiPBPCS0",
      },
      {
        nombre: "Ciclo de Vida del Objeto",
        url: "https://www.youtube.com/embed/taU1T_V_J2s",
      },
      {
        nombre: "Relaciones de Clases",
        url: "https://www.youtube.com/embed/4ud83Tx0n0M",
      },
      {
        nombre: "Polimorfismo y Overriding",
        url: "https://www.youtube.com/embed/pOaQYGTAyjw",
      },
      {
        nombre: "Memoria y Estática",
        url: "https://www.youtube.com/embed/x4oY4A4usEo",
      },
      {
        nombre: "Eventos y Delegados",
        url: "https://www.youtube.com/embed/fdbtHvBzsUQ",
      },
      {
        nombre: "Diseño por Contrato",
        url: "https://www.youtube.com/embed/e-ab0Hz7V8k",
      },
      {
        nombre: "Introducción a Regex",
        url: "https://www.youtube.com/embed/IX47PvYcg3c",
      },
      {
        nombre: "Sintaxis de Regex",
        url: "https://www.youtube.com/embed/apeYYc7TOpI",
      },
      {
        nombre: "Cuantificadores Regex",
        url: "https://www.youtube.com/embed/UG-Mxlpn89Y",
      },
      {
        nombre: "Validación de Fechas Regex",
        url: "https://www.youtube.com/embed/x6Ovpu7tQvM",
      },
      {
        nombre: "Jerarquía Regex C#",
        url: "https://www.youtube.com/embed/KHcneiQYC_Q",
      },
      {
        nombre: "Creación de UserControl",
        url: "https://www.youtube.com/embed/WKEwGQh91gA",
      },
      {
        nombre: "Encapsular UserControls",
        url: "https://www.youtube.com/embed/Pyg8I6RkluI",
      },
      {
        nombre: "Custom Controls desde Cero",
        url: "https://www.youtube.com/embed/RQxqiDztMcc",
      },
    ],
  },
  {
    menu: "Algoritmos",
    submenu: [
      {
        nombre: "Bubble Sort",
        url: "assets/recursos/algoritmos/bubblesort.html",
      },
      {
        nombre: "Selection Sort",
        url: "assets/recursos/algoritmos/selection.html",
      },
      {
        nombre: "Insertion Sort",
        url: "assets/recursos/algoritmos/insertion.html",
      },
    ],
  },
  {
    menu: "Programacion Web",
    submenu: [
      {
        nombre: "Estructura HTML",
        url: "https://www.youtube.com/embed/725JP8OM_XU",
      },
      {
        nombre: "Jerarquía HTML",
        url: "https://www.youtube.com/embed/t9asFHdEvZY",
      },
      {
        nombre: "Bloque vs Inline",
        url: "https://www.youtube.com/embed/WytSEHw74VE",
      },
      {
        nombre: "Atributos HTML",
        url: "https://www.youtube.com/embed/mocdACyiDY8",
      },
      {
        nombre: "Rutas y Enlaces",
        url: "https://www.youtube.com/embed/PQQNb1p7slQ",
      },
      {
        nombre: "Estilos CSS",
        url: "https://www.youtube.com/embed/qctCwt0jyEQ",
      },
      {
        nombre: "Inputs HTML",
        url: "https://www.youtube.com/embed/SKyi4Ghw2jw",
      },
      {
        nombre: "Texto RTL (BDO)",
        url: "https://www.youtube.com/embed/n_JWBPRUE4I",
      },
      {
        nombre: "DOM y AJAX",
        url: "https://www.youtube.com/embed/8Yn71v5EigU",
      },
    ],
  },
  {
    menu: "Base de Datos",
    submenu: [
      {
        nombre: "Jerarquía de Datos",
        url: "https://www.youtube.com/embed/sqFgbxol4iI",
      },
      {
        nombre: "Normalización BD",
        url: "https://www.youtube.com/embed/e4mNklhdnvQ",
      },
      {
        nombre: "Consultas y Nulos",
        url: "https://www.youtube.com/embed/6u0NKiKWU8s",
      },
      {
        nombre: "Operador IS NULL",
        url: "https://www.youtube.com/embed/53j03c0_LqM",
      },
      {
        nombre: "Comandos SELECT y UPDATE",
        url: "https://www.youtube.com/embed/OEwauxZTDGQ",
      },
      {
        nombre: "Funciones de Agregación",
        url: "https://www.youtube.com/embed/LimIhTZyocM",
      },
      {
        nombre: "Unión con JOINs",
        url: "https://www.youtube.com/embed/_0tVDEmo6-k",
      },
      {
        nombre: "JOINs en Detalle",
        url: "https://www.youtube.com/embed/RDpc-dzFHDw",
      },
      {
        nombre: "Agrupación GROUP BY y HAVING",
        url: "https://www.youtube.com/embed/aJslSTq6G-E",
      },
      {
        nombre: "Filtros Avanzados GROUP BY",
        url: "https://www.youtube.com/embed/2atKjmaQV_4",
      },
      {
        nombre: "Subconsultas Anidadas",
        url: "https://www.youtube.com/embed/wlc3HfruCV8",
      },
    ],
  },
  {
    menu: "Sistemas Operativos",
    submenu: [
      {
        nombre: "Gestión de Archivos",
        url: "https://www.youtube.com/embed/AgXZ9TIfeJ0",
      },
      {
        nombre: "Jerarquía de Planificación",
        url: "https://www.youtube.com/embed/CsEgNggcnK0",
      },
      {
        nombre: "Planificación a Corto Plazo",
        url: "https://www.youtube.com/embed/yKvsQIAxlKg",
      },
      {
        nombre: "CPU Expulsiva vs No Expulsiva",
        url: "https://www.youtube.com/embed/h6IE62vRNB8",
      },
      {
        nombre: "Políticas de Planificación",
        url: "https://www.youtube.com/embed/B0A4-WpEXCg",
      },
      {
        nombre: "Planificación de Tiempo Real",
        url: "https://www.youtube.com/embed/LO3VzoB9KA0",
      },
      {
        nombre: "Concurrencia Hilos y Grano",
        url: "https://www.youtube.com/embed/rW3hc4r7dR4",
      },
      {
        nombre: "Productor y Consumidor",
        url: "https://www.youtube.com/embed/VdMLZIhWgjo",
      },
      {
        nombre: "Interbloqueos (Deadlocks)",
        url: "https://www.youtube.com/embed/qi_Xtmi46uI",
      },
      {
        nombre: "Planificación de Disco",
        url: "https://www.youtube.com/embed/me3xBSzUQgg",
      },
      {
        nombre: "Algoritmo SSTF e Inanición",
        url: "https://www.youtube.com/embed/QqijG8MhQZQ",
      },
      {
        nombre: "Algoritmo SCAN y LOOK",
        url: "https://www.youtube.com/embed/uDtVJmDAtuc",
      },
      {
        nombre: "Algoritmo C-SCAN",
        url: "https://www.youtube.com/embed/b02FgT988po",
      },
      {
        nombre: "Algoritmo FSCAN",
        url: "https://www.youtube.com/embed/Q_uGO_vuDhQ",
      },
      {
        nombre: "SCAN de N Pasos",
        url: "https://www.youtube.com/embed/5cmdyU2EDP4",
      },
      {
        nombre: "Resumen Algoritmos Disco",
        url: "https://www.youtube.com/embed/5l0dcH2OEaI",
      },
    ],
  },
];
function crearNavbarRecursos() {
  const navRecursos = document.getElementById("nav_recursos");

  navRecursos.appendChild(document.createElement("ul"));
  const menuPrincipal = navRecursos.children[0];
  menuPrincipal.id = class_MenuPrincipal;

  DatosMenu.forEach((menu) => {
    const elementoSubmenu = document.createElement("li");
    const ItemsubMenu = menuPrincipal.appendChild(elementoSubmenu);
    ItemsubMenu.classList.add(class_ItemSubMenu);
    const btnSubmenu = document.createElement("button");
    btnSubmenu.textContent = menu.menu;
    ItemsubMenu.appendChild(btnSubmenu);

    if (menu.submenu != null) {
      const spanSubmenu = document.createElement("span");
      spanSubmenu.innerHTML = '<i class="fa-regular fa-circle-down"></i>';
      btnSubmenu.appendChild(spanSubmenu);
      btnSubmenu.classList.add(btn_toggle);
      //   btnSubmenu.ariaExpanded = "false"; --> FORMA PARA NAVEGADORES MODERNOS
      btnSubmenu.setAttribute("aria-expanded", "false");
      const submenuUL = document.createElement("ul");
      submenuUL.classList.add(class_SubMenu);
      submenuUL.hidden = true;
      ItemsubMenu.appendChild(submenuUL);

      menu.submenu.forEach((submenu) => {
        const submeLI = document.createElement("li");
        submenuUL.appendChild(submeLI);
        const btnItem = document.createElement("button");
        btnItem.classList.add(btn_item);
        btnItem.addEventListener("click", () => mostrarContenido(submenu.url));
        btnItem.textContent = submenu.nombre;
        submeLI.appendChild(btnItem);
      });
    } else {
      btnSubmenu.classList.add(btn_item);
      btnSubmenu.addEventListener("click", () => mostrarContenido(menu.url));
    }
  });

  function animacionMenu() {
    const btnsToggle = document.querySelectorAll(".btn-toggle");

    btnsToggle.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.ariaExpanded === "false") {
          // console.log("click detectado en", btn.textContent);
          btn.lastChild.innerHTML = '<i class="fa-regular fa-circle-up"></i>';
          btn.nextSibling.hidden = false;
          btn.ariaExpanded = true;
          let nodos = btn.parentNode.parentNode.querySelectorAll(".btn-toggle");
          let textoActual = btn.textContent;
          //console.log(padre);
          //console.log(textoActual);
          nodos.forEach((btn) => {
            if (btn.textContent != textoActual) {
              esteticaCierreMenu(btn);
            }
          });
        } else {
          esteticaCierreMenu(btn);
        }
      });
    });
    //console.log(btnsToggle);
  }

  function mostrarContenido(url) {
    const iframe = document.getElementById("contenido_recurso");

    iframe.src = url ? url : "assets/error/404.html";
  }
  function esteticaCierreMenu(btn) {
    btn.lastChild.innerHTML = '<i class="fa-regular fa-circle-down"></i>';
    btn.nextSibling.hidden = true;
    btn.ariaExpanded = false;
  }
  animacionMenu();

  //console.log(navRecursos);
}
