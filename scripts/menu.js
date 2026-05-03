const menu = {
  initMenu: function () {
    const menu = document.querySelector(".filters-menu");
    const menuBtn = document.querySelector(".btn-filters");
    const overlay = document.querySelector(".overlay");
    const clearFiltersBtn = document.querySelector(".filters-menu__clear");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
    });
    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      menuBtn.classList.remove("active");
    });

    clearFiltersBtn.addEventListener("click", () => {
      this.clearFilters();
    });

    this.initMenuFilters();
  },
  toggleCategorySelectedState: function(category) {
    const categoryElements = document.querySelectorAll(".element--" + category.id);
    categoryElements.forEach(el => {
      el.classList.toggle("selected");
    });
  },
  clearFilters: function() {
    const elements = document.querySelectorAll(".element");
    const categories = document.querySelectorAll(".category");
    categories.forEach(cat => {
      cat.classList.remove("active");
    });
    elements.forEach(el => {
      el.classList.remove("selected");
    });
  },
  initMenuFilters: function initMenuFilters() {
    const sidenavContent = document.querySelector(".filters-menu__content");
    for (let category in periodicTable.categoryMap) {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category");
      categoryDiv.classList.add("category--" + periodicTable.categoryMap[category].id);
      categoryDiv.innerText = periodicTable.categoryMap[category].name;
      categoryDiv.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("active");
        this.toggleCategorySelectedState(periodicTable.categoryMap[category]);
      });
      sidenavContent.append(categoryDiv);
    }
  }
};
