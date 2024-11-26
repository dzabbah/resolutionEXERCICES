// Demander à l'utilisateur d'entrer le montant total des achats
let montant = parseFloat(prompt("Entrez le montant total des achats en CFA : "));

// Initialiser la remise
let remise = 0;

// Déterminer la remise en fonction du montant
if (montant < 25000) {
    remise = 0;
} else if (montant >= 25000 && montant <= 50000) {
    remise = 5;
} else if (montant > 50000 && montant <= 100000) {
    remise = 10;
} else {
    remise = 15;
}

// Calculer le montant final après application de la remise
let montantFinal = montant - (montant * remise / 100);

// Afficher les résultats
alert("Montant initial : " + montant + " CFA\n" +
      "Remise : " + remise + " %\n" +
      "Montant final : " + montantFinal + " CFA");
