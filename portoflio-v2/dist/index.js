var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    this.setTimeout(function(){
        loader.style.display = "none";
    }, 3000);
});