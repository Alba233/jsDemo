// création d'une variable cercle qui est l'élément cercle du html 
// document : page web 
// le point sert a appeler une méthode par rapport un objet 
// permet de récupérer l'élément selon un id
var circle = document.getElementById('circle');

// afficher dans le terminal
console.log(circle)

// je déclare une variable
var compteur = 0

// j'ajoute un écouteur sur un évènement
// j'appelle la méthode avec le point
circle.addEventListener('click', function(event) {
    // vérif le click fonctionne
    console.log('click')
        // on va changer la couleur du cercle 

    compteur = compteur + 1
    console.log(compteur)
    if (compteur % 2 == 0) {
        console.log('pair')
        circle.setAttribute('style', 'background-color: bleu')

    } else {
        console.log('impair')
        circle.setAttribute('style', 'background-color: red')
    }
})