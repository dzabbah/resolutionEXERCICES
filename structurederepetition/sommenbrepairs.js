// Demander à l'utilisateur de saisir un nombre
let nombre = parseInt(prompt("Entrez un nombre pour calculer la somme des nombres pairs entre 1 et ce nombre : "));

// Initialiser la somme des nombres pairs
let somme = 0;

// Boucle pour parcourir les nombres de 1 à 'nombre'
for (let i = 2; i <= nombre; i += 2) { // Commencer à 2 et incrémenter de 2 pour obtenir les nombres pairs
    somme += i;  // Ajouter le nombre pair à la somme
}

// Afficher le résultat
alert("La somme des nombres pairs entre 1 et " + nombre + " est : " + somme);
