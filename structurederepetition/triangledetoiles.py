# Demander à l'utilisateur de saisir le nombre de lignes
n = int(input("Entrez le nombre de lignes pour le triangle d'étoiles : "))

# Boucle pour générer le triangle d'étoiles
for i in range(1, n + 1):  # La boucle va de 1 à n (inclus)
    print('*' * i)  # Afficher i étoiles sur la i-ème ligne


# Demander à l'utilisateur d'entrer le nombre de lignes
n = int(input("Entrez le nombre de lignes : "))

# Boucle pour afficher le triangle
for i in range(1, n + 1):
    print('*' * i)
