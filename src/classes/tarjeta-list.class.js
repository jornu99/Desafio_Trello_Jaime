import { Tarjeta } from "./tarjeta.class";

export class TarjetaList {

    guardarLocalStorage(){
//----- stringify convierte el array en un JSON
        localStorage.setItem('tarjeta', JSON.stringify(this.tarjeta));
    }

    cargarLocalStorage(){
        this.tarjeta = (localStorage.getItem('tarjeta'))
                     ? JSON.parse(localStorage.getItem('tarjeta'))
                     :[];
//----- map recorre el array y los devuelve con algún cambio,
//----- en este caso devuelve la instancia de Tarjeta
        this.tarjeta = this.tarjeta.mapa(Tarjeta.fromJSON);
    }

    nuevaTarjeta(tarjeta){
        this.tarjeta.push(tarjeta);
        this.guardarLocalStorage();
    }

    eliminarTarjeta(id){
//----- Si pongo !== comparo también si son del mismo tipo
        this.tarjeta = this.tarjeta.filter(tarjeta => tarjeta.id != id);
//----- Devuelve el array sin el id
        this.guardarLocalStorage();
    }

    constructor(){
        this.cargarLocalStorage();
    }
    
}