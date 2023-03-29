let iterations = 0; // Initialise le nombre d'itérations à 0

function syracuse() {
    let n = document.getElementById("nom").value; // Demande à l'utilisateur de saisir un nombre entier

    while (n != 1 && n !=0) { // Tant que le nombre n'est pas égal à 1
        if (n % 2 == 0) { // Si le nombre est pair
          n /= 2; // On le divise par 2
        } else { // Sinon, le nombre est impair
          n = n * 3 + 1; // On le multiplie par 3 et on ajoute 1
        }
        iterations++; // On incrémente le nombre d'itérations à chaque tour de boucle
        console.log("Iteration " + iterations + " : " + n); // Affiche le résultat de l'itération en cours dans la console


      }
      console.log("Le nombre d'itérations nécessaire pour atteindre 1 est : " + iterations); // Affiche le nombre d'itérations total nécessaire pour atteindre 1 dans la console
}