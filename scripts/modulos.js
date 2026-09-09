async function cargaModular(elemento = "home.html")
{
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const main  = document.getElementById("main");

    try {
        const respHeader = await fetch("/pages/header.html");
        header.innerHTML = await respHeader.text();

        const respFooter = await fetch("/pages/footer.html");
        footer.innerHTML = await respFooter.text();

        let respMain = await fetch("/pages/modulos/"+elemento)
        main.innerHTML = await respMain.text();


    } catch (error) {
        console.error("Error cargando los módulos:", error);
    }
}



cargaModular();