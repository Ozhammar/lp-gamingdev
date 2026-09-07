async function cargaModular()
{
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    try {
        const respHeader = await fetch("/pages/header.html");
        header.innerHTML = await respHeader.text();

        const respFooter = await fetch("/pages/footer.html");
        footer.innerHTML = await respFooter.text();
    } catch (error) {
        console.error("Error cargando los módulos:", error);
    }
}



cargaModular();