const headers = document.querySelectorAll("h3");
headers.forEach((header) => {
    header.addEventListener("click", () => {
        const panel = header.nextElementSibling;
        if (header.classList.contains("active")) {
            header.classList.remove("active")
            // panel.style.maxHeight = null;
        } else {
            const activeHeaders = document.querySelectorAll(".active");
            activeHeaders.forEach((actvHeader) => {
                actvHeader.classList.remove("active");
                // actvHeader.nextSibling.style.maxHeight = null;
            })
            header.classList.toggle("active");
            // panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
});



