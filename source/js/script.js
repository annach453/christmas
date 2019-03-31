(function () {

  "use strict";

  var toggle = document.querySelector(".nav__toggle");
  var navItems = document.querySelectorAll(".nav__item");

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      this.classList.toggle("nav__toggle--active");
      document.querySelector(".nav").classList.toggle("nav--active");
    });
  }

  function navHandler(navItems) {
    Array.prototype.forEach.call(navItems, function (navItem) {
      navItem.addEventListener("click", function (e) {
        document.querySelector(".nav__toggle").classList.remove("nav__toggle--active");
        document.querySelector(".nav").classList.remove("nav--active");
      });
    });
  }

  // Добавялет работу мобильного меню
  toggleHandler(toggle);
  navHandler(navItems);

  // Добавялет работу карусели

  function sliderHandler(sliderEl, sliderElChilds) {
    var slideCount = sliderElChilds.length;
    var activeSlide = 0;
    var sliderManager = new Hammer.Manager(sliderEl);
    sliderManager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
    sliderManager.on('pan', function (e) {
      var percentage = 100 / slideCount * e.deltaX / window.innerWidth;
      var transformPercentage = percentage - 100 / slideCount * activeSlide;
      sliderEl.style.transform = 'translateX( ' + transformPercentage + '% )';
      if (e.isFinal) {
        if (percentage < 0)
          goToSlide(activeSlide + 1);
        else if (percentage > 0)
          goToSlide(activeSlide - 1);
        else
          goToSlide(activeSlide);
      }
    });
    var goToSlide = function (number) {
      if (number < 0)
        activeSlide = 0;
      else if (number > slideCount - 1)
        activeSlide = slideCount - 1
      else
        activeSlide = number;

      var percentage = -(100 / slideCount) * activeSlide;
      sliderEl.style.transform = 'translateX( ' + percentage + '% )';
    };
  };

  sliderHandler(document.querySelector('.rules__wrapper'), document.querySelectorAll('.rules__item'));





})();
