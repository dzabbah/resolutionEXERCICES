// Définir une liste de courses vide
let listeDeCourses = [];

// Fonction pour afficher le menu
function afficherMenu() {
    console.log("1. Ajouter un article");
    console.log("2. Supprimer un article");
    console.log("3. Afficher la liste");
    console.log("4. Quitter");
}

// Fonction pour ajouter un article
function ajouterArticle() {
    let article = prompt("Entrez le nom de l'article :");
    listeDeCourses.push(article);
    console.log(`${article} a été ajouté à la liste.`);
}

// Fonction pour supprimer un article
function supprimerArticle() {
    let article = prompt("Entrez le nom de l'article à supprimer :");
    let index = listeDeCourses.indexOf(article);
    if (index !== -1) {
        listeDeCourses.splice(index, 1);
        console.log(`${article} a été supprimé de la liste.`);
    } else {
        console.log(`${article} n'est pas dans la liste.`);
    }
}

// Fonction pour afficher la liste des courses
function afficherListe() {
    console.log("Liste des courses :", listeDeCourses);
}

// Fonction principale
function gestionListeDeCourses() {
    let choix;
    do {
        afficherMenu();
        choix = parseInt(prompt("Choix :"));

        switch (choix) {
            case 1:
                ajouterArticle();
                break;
            case 2:
                supprimerArticle();
                break;
            case 3:
                afficherListe();
                break;
            case 4:
                console.log("Au revoir !");
                break;
            default:
                //console.log("Choix invalide, veuillez essayer à nouveau.");
                alert("Choix invalide, veuillez essayer à nouveau.");
        }
    } while (choix !== 4);
}

// Lancer le programme
gestionListeDeCourses();
