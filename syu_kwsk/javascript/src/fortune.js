
function changePage(tabkind) {
    var Url = window.location.href;
    Url = Url.slice( 0, Url.lastIndexOf('/'));

    window.location.href = Url + tabkind;
}
function showButton(){
    var tab = document.getElementsByClassName('tabs');    
    tab[0].style.opacity = 0.7;
}


window.onload = function () {
    if(location.href.indexOf("index.html") != -1){
        var tab = document.getElementsByClassName('tabs');    
        tab[0].style.opacity = 0;
        setTimeout("showButton()", "5000");
    }
    
};
