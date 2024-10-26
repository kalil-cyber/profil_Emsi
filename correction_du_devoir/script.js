document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Merci, votre formulaire a été soumis avec succès !");
    } else {
        alert("Veuillez remplir tous les champs correctement.");
    }
});