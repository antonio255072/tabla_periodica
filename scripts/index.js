initMicroModal();
drawPeridicTable();

function initMicroModal() {
  MicroModal.init({
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    disableFocus: true,
  });

  // Para evitar que el modal se cierre al clicar en el contenido
  document.querySelectorAll(".modal__content").forEach((content) => {
    content.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  menu.initMenu();
}

function drawPeridicTable() {
  const url = "statics/data/PeriodicTableJSON.json";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((resp) => {
      for (const element of resp.elements) {
        periodicTable.displayElementInTable(element);
      }
    })
    .catch((error) => {
      console.error("Hubo un problema con la petición fetch:", error);
    });
}
