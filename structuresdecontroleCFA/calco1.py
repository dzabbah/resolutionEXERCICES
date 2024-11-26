# Demander à l'utilisateur d'entrer le montant total des achats
montant = float(input("Entrez le montant total des achats en CFA : "))

# Initialiser la remise
remise = 0

# Déterminer la remise en fonction du montant
if montant < 25000:
    remise = 0
elif 25000 <= montant <= 50000:
    remise = 5
elif 50000 < montant <= 100000:
    
    remise = 10
else:
    remise = 15

# Calculer le montant final après application de la remise
montant_remise = montant - (montant * remise / 100)

# Afficher les résultats
print(f"Montant initial : {montant} CFA")
print(f"Remise : {remise} %")
print(f"Montant final : {montant_remise} CFA")
