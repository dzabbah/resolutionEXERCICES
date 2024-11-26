// Demander à l'utilisateur d'entrer son âge
let age = parseInt(prompt("Entrez votre âge : "));

// Déterminer la catégorie en fonction de l'âge
let categorie;

if (age < 12) {
    categorie = "enfant";
} else if (age >= 12 && age <= 17) {
    categorie = "adolescent";
} else if (age >= 18 && age <= 64) {
    categorie = "adulte";
} else {
    categorie = "senior";
}

// Afficher le résultat
alert("Vous avez " + age + " ans. Vous êtes un " + categorie + ".");
