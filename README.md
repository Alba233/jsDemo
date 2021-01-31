# jsDemo
circle if else event

# Explication exo
## But
Changer la couleur du cercle en cliquant dessus

### Explication JS
```
var toto
```
`var` sert a declarer une variable, ici du nom de `toto`

```
console.log()
```
Cela permet de d'imprimer dans la console du texte, des variables ...
Trés utile pour débuger / vérifier le code

```
if (condition) {
    // Code a executer
} else {
    // Code a executer
}
```
`if` permet d'executer du code si la condition est vraie
`else` dans le cas où elle n'est pas vraie

## Explcation du script
- Il faut tout d'abord récuperer l'element cercle de notre .html
```
var circle = document.getElementById('circle');
```

Déclaration de la variable cerlce -> `var circle`  
On assigne la variable (à quoi elle est égale)  
`document` -> qui est notre page `html`   
`getElementById()` -> on va récupérer l'element cercle par son `id` qui lui est propre  

`document.getElementById` -> ici on appel la method `getElementById` (fonction défini dans la classe)   

- Il faut détecter le click sur notre élement cercle
```
circle.addEventListener(Evénement, function(event) {})
```
`addEventListener()` -> Method qui permet d'écouter un événement sur un élément et d'éxécuter du code via une fonction.  
Ici on va écouter l'événement `click` sur notre cercle.

- Il faut changer le style de notre élement cercle
```
    circle.setAttribute('type d'attribue', 'valeur que l'on veut attribuer')
```
`setAttribute` -> Method qui permet de `setter` un attribue sur notre élement cercle.  
Ici on va setter le `style` en lui attribuant une nouvelle couleur de background.

## Autre evénement
On peut changer l'évenement `click` par:  
`mouseenter`   
`mouseleave`   
...