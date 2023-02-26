//Toggle Menu

const toggleMenu = document.querySelector(".toggle-button");
const mobileMenu = document.querySelector(".main-navigation");
const shadow = document.querySelector(".overlay");

toggleMenu.addEventListener("click", () => {
  if (toggleMenu.getAttribute("aria-expanded") === "false") {
    toggleMenu.style.backgroundImage = `url("images/icon-close-menu.svg")`;
    toggleMenu.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    shadow.classList.remove("visually-hidden");
  } else {
    toggleMenu.style.backgroundImage = `url("images/icon-menu.svg")`;
    toggleMenu.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    shadow.classList.add("visually-hidden");
  }
});

//Dropdown Menu

document.addEventListener("click", (e) => {
  const isToggler = e.target.matches("[data-dropdown-button]");

  let currentToggler;
  if (isToggler) {
    currentToggler = e.target.closest("[data-dropdown-button]");
    currentToggler.classList.toggle("active");
    if (currentToggler.getAttribute("aria-expanded") === "false") {
      currentToggler.setAttribute("aria-expanded", "true");
    } else {
      currentToggler.setAttribute("aria-expanded", "false");
    }
  }

  document
    .querySelectorAll("[data-dropdown-button].active")
    .forEach((dropdown) => {
      if (dropdown === currentToggler) return;
      dropdown.classList.remove("active");
      dropdown.setAttribute("aria-expanded", "false");
    });
});
