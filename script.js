class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".menu-icon");
    this.menuList = document.querySelectorAll("nav li");
    this.hamburgerIcon = document.querySelector(".menu-icon i");

    this.initEventListeners();
  }

  initEventListeners() {
    this.menuIcon.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    this.hamburgerIcon.classList.toggle("fa-bars");
    this.hamburgerIcon.classList.toggle("fa-xmark");
    this.menuList.forEach((menuItem) => {
      menuItem.style.display = this.hamburgerIcon.classList.contains("fa-bars")
        ? "none"
        : "block";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = new MobileMenu();
});
