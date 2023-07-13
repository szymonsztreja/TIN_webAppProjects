const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    list.classList.toggle("active");
})

document.querySelectorAll(".list a").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        list.classList.remove("active");
    }))