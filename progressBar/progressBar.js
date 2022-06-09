// Pour faire une progress bar qui avance en fonction du défilement de  l'article
// 3 fichiers liés : progressBar.html, progressBar.css, progressBar.js
// mai 2022

// On a besoin de la taille totale du texte, la taille de l'écran
// récupérer la valeur du scroll en fonction de la page et de son contenu

// on va juste mettre le nom de la fonction, on va la décrire plus loin
window.onscroll = function() {
    scroll_indicator(); // on déclare une fonction scroll_indicator
}

// on va récupérer sous forme de variable le contenu de la page
let content_height = document.documentElement.scrollHeight; // content_height est une variable - hauteur du contenu
let display_height = document.documentElement.clientHeight; // display est une variable - hauteur de la fenêtre du navigateur(client)

// on va juste soustraire la hauteur du viewport au contenu
let height = content_height - display_height;

// création de la fonction qui récupère 
function scroll_indicator(){
    // on va récupérer en temp réel, le niveau de scroll de la page
    let window_scroll = window.scrollY; // window_scroll est une variable
    let scrolled = (window_scroll/height)*100; // la variable scrolled va renvoyer un pourcentage de la partie de scroll parcourue

    document.getElementById('bar').style.width = scrolled + "%"; //integration d'un css sur la balise width de "bar"



}
