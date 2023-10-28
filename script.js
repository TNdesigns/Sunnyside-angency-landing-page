document.addEventListener("DOMContentLoaded", function () {
    const menubtn = document.getElementById("btn");
    const menu = document.getElementById("menu");

    menubtn.addEventListener("click", function () {
        if (menu.style.display === "block"){
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    })
})
