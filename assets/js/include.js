fetch("assets/includes/header.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;
  });

fetch("assets/includes/footer.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("site-footer").innerHTML = html;
  });

