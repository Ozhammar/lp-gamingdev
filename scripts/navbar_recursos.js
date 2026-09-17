const class_MenuPrincipal = "menu";
console.log(class_MenuPrincipal);

const class_ItemSubMenu = "item-submenu";
console.log(class_ItemSubMenu);

const class_SubMenu = "submenu";
console.log(class_SubMenu);

const btn_toggle = "btn-toggle";
console.log(btn_toggle);

const btn_item = "btn-item";
console.log(btn_item);
const DatosMenu = [
  {
    menu: "Algoritmos",
    submenu: [
      { nombre: "Bubble Sort", url: "assets/recursos/algoritmos/bubblesort.html"},
      { nombre: "Selection Sort", url: "assets/recursos/algoritmos/selection.html"},
      { nombre: "Insertion Sort", url: "assets/recursos/algoritmos/insertion.html" },
    ],
  },
  {
    menu: "WIP",
    //    submenu: [
    //      {
    //        nombre: "B1",
    //      },
    //      { nombre: "B2" },
    //     { nombre: "B3" },
    //   ],
  },
  {
    menu: "Programacion Web",
    submenu: [
      { nombre: "NavBar Lateral en JavaScript", url: "" },
      { nombre: "C2", url: "" },
      { nombre: "C3", url: "" },
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
        } else {
          btn.lastChild.innerHTML = '<i class="fa-regular fa-circle-down"></i>';
          btn.nextSibling.hidden = true;
          btn.ariaExpanded = false;
        }
      });
    });
    console.log(btnsToggle);
  }

  function mostrarContenido(url) {
    const iframe = document.getElementById("contenido_recurso");

    iframe.src = url ? url : "assets/error/404.html";
  }
  animacionMenu();
  console.log(navRecursos);
}
