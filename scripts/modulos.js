document.addEventListener("click", (e) => {
  if (e.target.matches(".btnMenu")) {
    e.preventDefault();
    const modulo = e.target.dataset.modulo;
    cargaModular(modulo);
  }
});

async function cargaLayout() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  try {
    const respHeader = await fetch("pages/header.html");
    header.innerHTML = await respHeader.text();

    const respFooter = await fetch("pages/footer.html");
    footer.innerHTML = await respFooter.text();
  } catch (error) {
    console.error("Error cargando los módulos:", error);
  }
}

/*El parametro default, se modifica durante el desarrollo para el reload automatico del liveserver se logre dar, a la pestaña que se este desarrollando
*/
async function cargaModular(elemento = "home.html") {
  const main = document.getElementById("main");

  try {
    let respMain = await fetch("pages/modulos/" + elemento);
    main.innerHTML = await respMain.text();
  } catch (error) {
    console.error("Error cargando los módulos:", error);
  }
}
cargaLayout();
cargaModular();


