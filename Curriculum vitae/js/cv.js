function openSeccion(seccion) {
    var i;
    var x = document.getElementsByClassName("seccion");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(seccion).style.display = "block";
}

const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});
