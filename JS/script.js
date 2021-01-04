let zaza="trop_belle"
let etienne="trop_beau"

window.onscroll = function() {scrolldown()}; //afficher le bouton quand on est trop bas

function scrolldown(){ //apparition ou non du bouton retour haut
    if(document.documentElement.scrollTop > 100){//on descend plus que 100px
        document.getElementById("boutonhaut").style.display = "block";//il aparaît !
    }
    else{
        document.getElementById("boutonhaut").style.display ="none";
    }
}
function function_top(){ //retour haut de page
    document.documentElement.scrollTop=0;
}
function function_none(){ //fonctions au chargement de la page
    document.getElementById("boutonhaut").style.display="none";//empêcher le bouton haut d'apparaitre au chargement de la page
}
function diridentite(){
    window.scrollTo(0,100)
}
