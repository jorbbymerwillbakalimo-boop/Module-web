$(document).ready(function () {

  // ==============================
  // 1) Navbar "scrolled" (ombre)
  // ==============================
  function setNavbarState() {
    const scrolled = $(window).scrollTop() > 10;
    $(".navbar").toggleClass("is-scrolled", scrolled);
  }
  setNavbarState();
  $(window).on("scroll", setNavbarState);

  // ==============================
  // 2) Menu mobile (burger)
  // ==============================
  $(".navbar").on("click", ".navbar__burger", function () {
    const isOpen = $("body").toggleClass("menu-open").hasClass("menu-open");
    $(this).attr("aria-expanded", isOpen ? "true" : "false");
  });

  // Fermer le menu mobile quand on clique sur un lien
  $(".navbar").on("click", ".navbar__links a", function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
      $("body").removeClass("menu-open");
      $(".navbar__burger").attr("aria-expanded", "false");
    }
  });

  // Fermer le menu mobile si on repasse en desktop
  $(window).on("resize", function () {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      $("body").removeClass("menu-open");
      $(".navbar__burger").attr("aria-expanded", "false");
    }
  });

  // ==============================
  // 3) Dropdown "Games"
  // - Desktop: hover
  // - Mobile: click
  // ==============================

  // Desktop hover
  $(".navbar").on("mouseenter", ".has-dropdown", function () {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      $(this).addClass("is-open");
    }
  });

  $(".navbar").on("mouseleave", ".has-dropdown", function () {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      $(this).removeClass("is-open");
    }
  });

  // Mobile click toggle
  $(".navbar").on("click", ".dropdown__toggle", function (e) {
    if (window.matchMedia("(max-width: 900px)").matches) {
      e.preventDefault();
      $(this).closest(".has-dropdown").toggleClass("is-open");
    }
  });

  // Click outside close dropdown (desktop)
  $(document).on("click", function (e) {
    const $target = $(e.target);
    if (!$target.closest(".has-dropdown").length) {
      $(".has-dropdown").removeClass("is-open");
    }
  });

});
