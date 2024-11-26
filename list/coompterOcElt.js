// Fonction pour compter les occurrences d'un mot dans une liste
function compterOccurrences() {
    // Demander à l'utilisateur de saisir une liste de mots séparés par des espaces
    let listeDeMots = prompt("Entrez une liste de mots séparés par des espaces :").split(" ");

    // Demander à l'utilisateur de saisir le mot à rechercher
    let motARechercher = prompt("Entrez le mot à rechercher :");

    // Compter le nombre d'occurrences du mot dans la liste
    let occurrences = 0;
    for (let i = 0; i < listeDeMots.length; i++) {
        if (listeDeMots[i] === motARechercher) {
            occurrences++;
        }
    }

    // Afficher le résultat
    //console.log(`Le mot "${motARechercher}" apparaît ${occurrences} fois dans la liste.`);
    alert(`Le mot "${motARechercher}" apparaît ${occurrences} fois dans la liste.`);
}

// Lancer la fonction
compterOccurrences();
