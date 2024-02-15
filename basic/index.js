// Fonction pour un jeu de juste prix
function jeuDeJustePrix(min, max) {
    // Générer un nombre aléatoire entre min et max
    const nombreSecret = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Nombre de tentatives
    let tentatives = 0;

    // Fonction pour vérifier la conjecture du joueur
    function verifierConjecture(conjecture) {
        tentatives++;

        if (conjecture < nombreSecret) {
            return "Trop petit, essayez à nouveau!";
        } else if (conjecture > nombreSecret) {
            return "Trop grand, essayez à nouveau!";
        } else {
            return `Bravo! Vous avez deviné le juste prix en ${tentatives} tentatives.`;
        }
    }

    return verifierConjecture;
}

// Exemple d'utilisation
const minNombre = 1;
const maxNombre = 100;
const jouer = jeuDeJustePrix(minNombre, maxNombre);

// Boucle de jeu 
while (true) {
    const conjectureJoueur = parseInt(prompt(`Devinez le nombre entre ${minNombre} et ${maxNombre}:`));

    if (isNaN(conjectureJoueur)) {
        alert("Veuillez entrer un nombre valide.");
    } else {
        const resultat = jouer(conjectureJoueur);
        alert(resultat);

        if (resultat.includes("Bravo")) {
            break; // Fin du jeu si la conjecture est correcte
        }
    }
}
