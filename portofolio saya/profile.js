document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
window.onload = function() {
    setTimeout(function() {
        document.body.style.opacity = "1";
    }, 100); // 1000 milidetik = 1 detik
};