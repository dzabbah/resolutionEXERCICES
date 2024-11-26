# Demander à l'utilisateur de saisir un nombre
nombre = int(input("Entrez un nombre pour afficher sa table de multiplication : "))

# Afficher la table de multiplication pour ce nombre
for i in range(1, 11):  # De 1 à 10
    print(f"{nombre} x {i} = {nombre * i}")
