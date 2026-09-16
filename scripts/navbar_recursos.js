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

function crearNavbarRecursos() {
  const navRecursos = document.getElementById("nav_recursos");

  const DatosMenu = [
    {
      menu: "Algoritmos",
      submenu: [
        { nombre: "BubbleSort" }, //, url: "assets/algoritmos/bubblesort.html"
        { nombre: "QuickSort" },
        { nombre: "MergeSort" },
      ],
    },
    {
      menu: "B",
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
        {
          nombre: "C1",
        },
        { nombre: "C2" },
        { nombre: "C3" },
      ],
    },
  ];

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
      ItemsubMenu.appendChild(submenuUL);

      menu.submenu.forEach((submenu) => {
        const submeLI = document.createElement("li");
        submenuUL.appendChild(submeLI);
        const btnItem = document.createElement("button");
        btnItem.classList.add(btn_item);
        btnItem.textContent = submenu.nombre;
        submeLI.appendChild(btnItem);
      });
    } else {
      btnSubmenu.classList.add(btn_item);
    }
  });

  console.log(navRecursos);
}
