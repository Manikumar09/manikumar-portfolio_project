(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Session uptime ticker (time since page load) ---- */
  var uptimeEl = document.getElementById("session-uptime");
  if (uptimeEl) {
    var startTime = Date.now();

    function pad(n) {
      return String(n).padStart(2, "0");
    }

    function tick() {
      var elapsed = Math.floor((Date.now() - startTime) / 1000);
      var hours = Math.floor(elapsed / 3600);
      var minutes = Math.floor((elapsed % 3600) / 60);
      var seconds = elapsed % 60;
      uptimeEl.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    }

    tick();
    setInterval(tick, 1000);
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
