# Définir une liste vide pour stocker les notes
notes = []

# Fonction pour afficher le menu
def afficher_menu():
    print("1. Ajouter une note")
    print("2. Modifier une note")
    print("3. Supprimer une note")
    print("4. Afficher les notes")
    print("5. Quitter")

# Fonction pour ajouter une nouvelle note
def ajouter_note():
    note = float(input("Entrez une nouvelle note : "))
    notes.append(note)
    print(f"La note {note} a été ajoutée.")

# Fonction pour modifier une note existante
def modifier_note():
    index = int(input("Entrez l'index de la note à modifier : "))
    if 0 <= index < len(notes):
        nouvelle_note = float(input("Entrez la nouvelle note : "))
        notes[index] = nouvelle_note
        print(f"La note à l'index {index} a été modifiée à {nouvelle_note}.")
    else:
        print("Index invalide.")

# Fonction pour supprimer une note
def supprimer_note():
    index = int(input("Entrez l'index de la note à supprimer : "))
    if 0 <= index < len(notes):
        supprimée = notes.pop(index)
        print(f"La note {supprimée} à l'index {index} a été supprimée.")
    else:
        print("Index invalide.")

# Fonction pour afficher toutes les notes
def afficher_notes():
    print("Notes :", notes)

# Fonction principale
def gestion_notes():
    while True:
        afficher_menu()
        choix = input("Choix : ")

        if choix == "1":
            ajouter_note()
        elif choix == "2":
            modifier_note()
        elif choix == "3":
            supprimer_note()
        elif choix == "4":
            afficher_notes()
        elif choix == "5":
            print("Au revoir !")
            break
        else:
            print("Choix invalide, veuillez essayer à nouveau.")

# Lancer le programme
gestion_notes()
