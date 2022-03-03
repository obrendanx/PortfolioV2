var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    this.setTimeout(function(){
        loader.style.display = "none";
    }, 1000);
});

var time = new Date();
document.getElementById("currenttime").innerHTML = time.toLocaleTimeString();
