// Demander à l'utilisateur de saisir un nombre
let nombre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication : "));

// Afficher la table de multiplication pour ce nombre
let table = "";
for (let i = 1; i <= 10; i++) {
    table += `${nombre} x ${i} = ${nombre * i}\n`;
}

// Afficher le résultat dans une fenêtre d'alerte
alert(table);
