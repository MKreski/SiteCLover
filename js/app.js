function toggleBar() {
    let toggleBar = document.querySelector(".navList")
    let menuMobile = document.querySelector(".menuMobile")
    let x = document.getElementById("x")

    if (toggleBar.className === "navList") {
        toggleBar.classList.add("active");
        x.style.display = "block"
        document.body.style.overflow = "hidden";
        menuMobile.style.opacity = "0";
    }
    else {
        toggleBar.classList.remove("active");
        x.style.display = "inherit"
        document.body.style.overflow = "inherit";
        menuMobile.style.opacity = "1";
    }
}

btn.addEventListener("click", () => {
    let btn = document.querySelector("#btn")

    btn.classList.toggle("activeButton");
})

arrow.addEventListener("click", () => {
    let arrow = document.querySelector("#arrowOne")

    arrow.classList.toggle("lerMais");
    arrow.style.rotate = "90deg";
})

box.addEventListener("click", () => {
    let box = document.querySelector("#boxTwo")
})
