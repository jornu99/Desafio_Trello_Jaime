export class Tarjeta {

    static fromJSON({id, tarjeta, creado}){
        const tempTarjeta = new Tarjeta(tarjeta);
        tempTodo.id         = id;
        tempTodo.creado     = creado;

        return tempTarjeta;
    }

    constructor(tarjeta){
        this.tarjeta

//----- Obtiene los datos de la tarjeta
        this.id         = new Date().getTime()
        this.creado     = new Date(); 
    }
    
}