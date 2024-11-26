# Définir une liste de courses vide
liste_de_courses = []

# Fonction pour afficher le menu
def afficher_menu():
    print("1. Ajouter un article")
    print("2. Supprimer un article")
    print("3. Afficher la liste")
    print("4. Quitter")

# Fonction pour ajouter un article
def ajouter_article():
    article = input("Entrez le nom de l'article : ")
    liste_de_courses.append(article)
    print(f"{article} a été ajouté à la liste.")

# Fonction pour supprimer un article
def supprimer_article():
    article = input("Entrez le nom de l'article à supprimer : ")
    if article in liste_de_courses:
        liste_de_courses.remove(article)
        print(f"{article} a été supprimé de la liste.")
    else:
        print(f"{article} n'est pas dans la liste.")

# Fonction pour afficher la liste des courses
def afficher_liste():
    print("Liste des courses :", liste_de_courses)

# Fonction principale
def gestion_liste_de_courses():
    while True:
        afficher_menu()
        choix = input("Choix : ")

        if choix == "1":
            ajouter_article()
        elif choix == "2":
            supprimer_article()
        elif choix == "3":
            afficher_liste()
        elif choix == "4":
            print("Au revoir !")
            break
        else:
            print("Choix invalide, veuillez essayer à nouveau.")

# Lancer le programme
gestion_liste_de_courses()
