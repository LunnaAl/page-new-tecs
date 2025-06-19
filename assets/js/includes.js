function includeHTML(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

window.onload = function() {
  includeHTML("header", "header.html");
  includeHTML("sidebar", "sidebar.html");
};
