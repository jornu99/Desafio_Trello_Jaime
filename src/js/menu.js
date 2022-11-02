// export const acordeon = () => {
    document.querySelectorAll("div.acordeon h3").forEach(titulo => {
        titulo.addEventListener("click", function(){
            if( this.nextElementSibling.style.display == "block" ){
                this.nextElementSibling.style.display = "none";
            }else{
                this.nextElementSibling.style.display = "block";
            }
        });
    });
    
    document.querySelector("#tema").addEventListener("change",function(){
        if(this.value == "claro"){
            document.querySelector("body").classList.remove("oscuro");
            document.querySelector("body").classList.add("claro");
        }else{
            document.querySelector("body").classList.remove("claro");
            document.querySelector("body").classList.add("oscuro");
        }
    });
// }
