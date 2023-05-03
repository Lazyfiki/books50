window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");
    document.getElementById("header").style.opacity = 1;

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})
