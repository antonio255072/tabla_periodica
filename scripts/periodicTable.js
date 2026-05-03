const periodicTable = {
  categoryMap: {
    "alkali metal": {
      id: "alkali-metal",
      name: "Metal alcalino",
    },
    "alkaline earth metal": {
      id: "alkaline-earth",
      name: "Metal alcalinotérreo",
    },
    "transition metal": {
      id: "transition-metal",
      name: "Metal de transición",
    },
    "post-transition metal": {
      id: "post-transition-metal",
      name: "Metal post-transición",
    },
    metalloid: {
      id: "metalloid",
      name: "Metaloide",
    },
    "diatomic nonmetal": {
      id: "diatomic-nonmetal",
      name: "No metal diatómico",
    },
    "polyatomic nonmetal": {
      id: "polyatomic-nonmetal",
      name: "No metal poliatómico",
    },
    "noble gas": { id: "noble-gas", name: "Gas noble" },
    lanthanide: { id: "lanthanide", name: "Lantánido" },
    actinide: { id: "actinide", name: "Actínido" },
  },
  displayElementInTable: function (element) {
    const elementDiv = this.createElement(element);
    elementDiv.addEventListener("click", (e) => {
      document.querySelector(".element-detail").innerHTML = "";
      this.showElementDetail(element);
      MicroModal.show("element-detail-modal", {
        onShow: (modal) => {
          modal.querySelector(".modal__content")?.focus();
        },
      });
    });
    document.querySelector(".tabla-periodica").appendChild(elementDiv);
  },
  createElement: function (element) {
    const symbolCategoryNormalized = this.categoryMap[element.category].id;

    const elementDiv = document.createElement("div");
    elementDiv.classList.add("element", "element--" + symbolCategoryNormalized);
    elementDiv.style.gridRow = element.ypos;
    elementDiv.style.gridColumn = element.xpos;

    const atomicNumberDiv = document.createElement("div");
    atomicNumberDiv.classList.add("element__atomic-num", "element__info");
    atomicNumberDiv.innerText = element.number;

    const symbolDiv = document.createElement("div");
    symbolDiv.classList.add("element__symbol");
    symbolDiv.innerText = element.symbol;

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("element__name", "element__info");
    nameDiv.innerText = element.name;

    const atomicMassDiv = document.createElement("div");
    atomicMassDiv.classList.add("element__atomic-mass", "element__info");
    atomicMassDiv.innerText = utilidades.cutDecimals(element.atomic_mass);

    elementDiv.appendChild(atomicNumberDiv);
    elementDiv.appendChild(symbolDiv);
    elementDiv.appendChild(nameDiv);
    elementDiv.appendChild(atomicMassDiv);
    return elementDiv;
  },
  showElementDetail: function (element) {
    const elementDetailHeader = document.createElement("div");
    elementDetailHeader.classList.add("element-detail__header");

    const elementDeatilContent = document.createElement("div");
    elementDeatilContent.classList.add("element-detail__content");

    const elementDiv = this.createElement(element);
    elementDiv.classList.add("detail", "selected");

    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summary");
    summaryDiv.innerText = element.summary;

    const readMoreLink = document.createElement("a");
    readMoreLink.href = element.source;
    readMoreLink.target = "_blank";
    readMoreLink.textContent = "Leer más";
    summaryDiv.append(readMoreLink);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("detail-img-container");
    const img = document.createElement("img");
    img.src = element.image.url;
    img.alt = "Imagen " + element.name;
    imgContainer.append(img);

    elementDetailHeader.append(elementDiv);
    elementDetailHeader.append(summaryDiv);
    elementDeatilContent.append(imgContainer);

    document.querySelector(".element-detail").append(elementDetailHeader);
    document.querySelector(".element-detail").append(elementDeatilContent);
  },
};
