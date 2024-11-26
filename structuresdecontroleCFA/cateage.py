# Demander à l'utilisateur d'entrer son âge
age = int(input("Entrez votre âge : "))

# Déterminer la catégorie en fonction de l'âge
if age < 12:
    categorie = "enfant"
elif 12 <= age <= 17:
    categorie = "adolescent"
elif 18 <= age <= 64:
    categorie = "adulte"
else:
    categorie = "senior"

# Afficher le résultat
print(f"Vous avez {age} ans. Vous êtes un {categorie}.")
