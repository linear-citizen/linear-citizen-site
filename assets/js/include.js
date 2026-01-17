function markActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}

fetch("assets/includes/header.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;
    markActiveNav();
  });

fetch("assets/includes/footer.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("site-footer").innerHTML = html;
  });

