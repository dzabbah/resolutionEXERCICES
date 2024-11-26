# Demander à l'utilisateur de saisir une liste de mots séparés par des espaces
liste_de_mots = input("Entrez une liste de mots séparés par des espaces : ").split()

# Demander à l'utilisateur de saisir le mot à rechercher
mot_a_rechercher = input("Entrez le mot à rechercher : ")

# Compter le nombre d'occurrences du mot dans la liste
occurrences = liste_de_mots.count(mot_a_rechercher)

# Afficher le résultat
print(f"Le mot \"{mot_a_rechercher}\" apparaît {occurrences} fois dans la liste.")
