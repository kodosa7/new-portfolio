const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.addEventListener("click", (e) => {
    if (e.target.matches(".nav__item")) {
        document.body.classList.remove("nav-open");
    }
});