// Définir une liste vide pour stocker les notes
let notes = [];

// Fonction pour afficher le menu
function afficherMenu() {
    console.log("1. Ajouter une note");
    console.log("2. Modifier une note");
    console.log("3. Supprimer une note");
    console.log("4. Afficher les notes");
    console.log("5. Quitter");
}

// Fonction pour ajouter une nouvelle note
function ajouterNote() {
    let note = parseFloat(prompt("Entrez une nouvelle note :"));
    notes.push(note);
    console.log(`La note ${note} a été ajoutée.`);
}

// Fonction pour modifier une note existante
function modifierNote() {
    let index = parseInt(prompt("Entrez l'index de la note à modifier :"));
    if (index >= 0 && index < notes.length) {
        let nouvelleNote = parseFloat(prompt("Entrez la nouvelle note :"));
        notes[index] = nouvelleNote;
        console.log(`La note à l'index ${index} a été modifiée à ${nouvelleNote}.`);
    } else {
        console.log("Index invalide.");
    }
}

// Fonction pour supprimer une note
function supprimerNote() {
    let index = parseInt(prompt("Entrez l'index de la note à supprimer :"));
    if (index >= 0 && index < notes.length) {
        let supprimée = notes.splice(index, 1);
        console.log(`La note ${supprimée} à l'index ${index} a été supprimée.`);
    } else {
        console.log("Index invalide.");
    }
}

// Fonction pour afficher toutes les notes
function afficherNotes() {
    console.log("Notes :", notes);
}

// Fonction principale pour gérer le programme
function gestionNotes() {
    let choix;
    do {
        afficherMenu();
        choix = parseInt(prompt("Choix :"));

        switch (choix) {
            case 1:
                ajouterNote();
                break;
            case 2:
                modifierNote();
                break;
            case 3:
                supprimerNote();
                break;
            case 4:
                afficherNotes();
                break;
            case 5:
                console.log("Au revoir !");
                break;
            default:
                //console.log("Choix invalide, veuillez essayer à nouveau.");
                alert("Choix invalide, veuillez essayer à nouveau.");
            } 
    
        }while (choix !== 5);
}

// Lancer le programme
gestionNotes();
