function inicializarFormContacto() {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { nombre, apellido, email } = form.elements;

    alert(
      `Muchas gracias por su consulta ${nombre.value.trim()} ${apellido.value.trim()}, ` +
      `la misma será procesada y la respuesta será enviada a su casilla: ${email.value.trim()}`
    );

    form.reset();
  });
}