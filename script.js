document.getElementById("mais-info").addEventListener("click", function() {
    const infoExtra = document.getElementById("info-extra");
    if (infoExtra.style.display === "none") {
        infoExtra.style.display = "block";
        this.textContent = "Menos Informações";
    } else {
        infoExtra.style.display = "none";
        this.textContent = "Mais Informações";
    }
});

