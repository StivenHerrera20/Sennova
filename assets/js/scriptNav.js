window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  const btnIni = document.querySelector("#btnIniciarS");
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
      btnIni.innerHTML = "";
      const btnIniciar = document.createElement("a");
      btnIniciar.setAttribute("class", "nav-link");
      btnIniciar.setAttribute("href", "./login.html");
      btnIniciar.innerHTML = "Iniciar sesion";
      btnIni.appendChild(btnIniciar);
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
      btnIni.innerHTML = "";
      const btnIniciar = document.createElement("a");
      btnIniciar.setAttribute("class", "nav-link btn btn-light");
      btnIniciar.setAttribute("href", "./login.html");
      btnIniciar.style = "color: #cca000";
      btnIniciar.innerHTML = "Iniciar sesion";
      btnIniciar.addEventListener("mouseover", () => {
        btnIniciar.style.backgroundColor = "#FFC800";
        btnIniciar.style.color = "white";
      });
      btnIniciar.addEventListener("mouseout", () => {
        btnIniciar.setAttribute("class", "nav-link btn btn-light");
        btnIniciar.style = "color: #cca000";
      });
      btnIni.appendChild(btnIniciar);
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
