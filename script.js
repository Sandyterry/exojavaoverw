let championOverwatch = 
['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

// Exercice 1 Afficher dans la console Tracer

console.log(championOverwatch[2])

// Exeerciece 2 Afficher dans la console Mei

console.log(championOverwatch[15])

// Exercice 3 Changer le nom McCree en "Cole Cassidy"

championOverwatch[5] = "Cole Cassidy"
console.log(championOverwatch)

// Exercice 4 Faite une recherche sur comment ajouter un élément dans un tableau et ajouter "Ramattra"


 championOverwatch.push ("Ramattra")
console.log(championOverwatch)

// Exercice 5 Ajouter une chaine de caractère "nop", pour simuler l'ajout d'une erreur


championOverwatch.push ("nop")
console.log(championOverwatch)

// Exercice 6 Faire une recherche pour savoir comment supprimer un élément dans un tableau et supprimer "nop"


championOverwatch.pop()
console.log(championOverwatch)

// Exercice 7 Convertir le tableau en chaine de caractère

console.log (championOverwatch.toString())

// Exercice 8 Afficher une copie du tableau qui va de Genji à Hanzo (faite une recherche sur slice)

console.log(championOverwatch.slice(7,13))

// Exercice 9 Ajouter "champion : 0" au début du tableau (faite une recherche sur unshift)

championOverwatch.unshift("champion:0")
console.log(championOverwatch)

// Exercice 10 Mettre le champion "Bastion" tout en majuscule (faite une recherche sur toUpperCase)

championOverwatch[13]= championOverwatch[13].toUpperCase
console.log(championOverwatch)

// Exercice 11 Compter le nombre de personnage dans le tableau (lenght)

console.log(championOverwatch.length)

// Exercice 12 A l'aide de la boucle foreach, concaténer tous les héros dans une variable pour faire apparaitre dans la console "Les héros d'Overwatch sont : [Tableau des Heros d'Overwatch]



 let phrase = "Les héros d'Overwatch sont : "

// championOverwatch.forEach( (element) => {
//     phrase += element + ", "
// })

// phrase = phrase.substring(0, phrase.length - 2) + "."
// console.log(phrase)
 