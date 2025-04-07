document.addEventListener("DOMContentLoaded", function () {
    let homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.id = "goToHome";
    document.body.appendChild(homeButton);

    homeButton.style.position = "fixed";
    homeButton.style.bottom = "20px";
    homeButton.style.left = "20px";
    homeButton.style.padding = "10px 15px";
    homeButton.style.fontSize = "16px";
    homeButton.style.background = "#008CBA";
    homeButton.style.color = "#fff";
    homeButton.style.border = "none";
    homeButton.style.borderRadius = "5px";
    homeButton.style.cursor = "pointer";

    homeButton.addEventListener("click", function () {
        window.location.href = "/";
    });
});
