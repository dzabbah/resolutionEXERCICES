// Demander à l'utilisateur de saisir un nombre entier
let nombre = parseInt(prompt("Entrez un nombre entier : "));

// Vérifier si le nombre est pair ou impair
if (nombre % 2 === 0) {
    alert("Le nombre " + nombre + " est pair.");
} else {
    alert("Le nombre " + nombre + " est impair.");
}
