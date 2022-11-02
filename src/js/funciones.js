document.querySelector("body button:nth-child(1)").addEventListener("click",function(){
    document.querySelector("body").classList.remove("oscuro");
    document.querySelector("body").classList.add("claro");
});

document.querySelector("body button:nth-child(2)").addEventListener("click",function(){
    document.querySelector("body").classList.remove("claro");
    document.querySelector("body").classList.add("oscuro");
});

/* Para cambiar el tamaño de la barra de desplazamiento */
document.querySelector(".barraDeProgreso").addEventListener("click",function(){
    document.querySelector(".barra").style.width = "30%";
});
