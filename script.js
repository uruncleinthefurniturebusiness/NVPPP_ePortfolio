// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("nav-list");
  if (!toggle || !list) return;

  toggle.addEventListener("click", function () {
    var isOpen = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when a link is clicked (useful on mobile)
  list.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
