// Pour faire un pop up d'images
// 3 fichiers liés : popupimage.html, popupimage.css, popupimage.js
// 20 mai 2022


//  Définition de variables
// affiche - l'endroit où apparaitra la vignette pop-up -  définie dans le css
// thumb -  cahcun de nos éléments : vignette -  définie dans le css
// thumbs - tableau - dans des []
// thumbCol - collection


let affiche = document.getElementById('affiche');
let img = affiche.firstElementChild;
// console.log(img); 

// création d'une collection
let thumbCol = document.getElementsByClassName('thumb');
console.log(thumbCol);

// transformation de notre collection en tableau
let thumbs = Array.from(thumbCol);
console.log(thumbs);

// forEach ne marche que sur des tableaux
thumbs.forEach(function(thumb){
    let imgUrl = thumb.src;
    thumb.onclick = function(){
        img.src = imgUrl;
        affiche.style.visibility = 'visible';
    };
});

affiche.onclick = function(){
    affiche.style.visibility = 'hidden';
};
