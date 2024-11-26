# Demander à l'utilisateur de saisir un nombre
nombre = int(input("Entrez un nombre pour calculer la somme des nombres pairs entre 1 et ce nombre : "))

# Initialiser la somme des nombres pairs
somme = 0

# Boucle pour parcourir les nombres de 1 à 'nombre'
for i in range(2, nombre + 1, 2):  # Commence à 2 et incrémente de 2 pour obtenir les nombres pairs
    somme += i  # Ajouter le nombre pair à la somme

# Afficher le résultat
print(f"La somme des nombres pairs entre 1 et {nombre} est : {somme}")
