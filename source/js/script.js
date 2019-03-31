(function() {

  "use strict";

  var toggle = document.querySelector(".nav__toggle");
  var navItems = document.querySelectorAll(".nav__item");

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      this.classList.toggle("nav__toggle--active");
      document.querySelector(".nav").classList.toggle("nav--active");
    });
  }

  function navHandler(navItems) {
    Array.prototype.forEach.call(navItems, function(navItem) {
      navItem.addEventListener("click", function (e) {
        document.querySelector(".nav__toggle").classList.remove("nav__toggle--active");
        document.querySelector(".nav").classList.remove("nav--active");
      });
    });
  }

  toggleHandler(toggle);
  navHandler(navItems);

})();
