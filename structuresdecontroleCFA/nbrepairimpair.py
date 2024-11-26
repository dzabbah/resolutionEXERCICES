# Demander à l'utilisateur de saisir un nombre entier
nombre = int(input("Entrez un nombre entier : "))

# Vérifier si le nombre est pair ou impair
if nombre % 2 == 0:
    print(f"Le nombre {nombre} est pair.")
else:
    print(f"Le nombre {nombre} est impair.")
