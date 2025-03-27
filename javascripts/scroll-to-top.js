document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    button.innerHTML = "Top";
    button.id = "scrollToTop";
    document.body.appendChild(button);

    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.fontSize = "20px";
    button.style.background = "#6200ea";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.display = "none";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
