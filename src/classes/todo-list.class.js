import { Todo } from "./todo.class";

export class TodoList {

    guardarLocalStorage(){
//----- stringify convierte el array en un JSON
        localStorage.setItem('todo', JSON.stringify(this.todo));
    }

    cargarLocalStorage(){
        this.todo = (localStorage.getItem('todo'))
                     ? JSON.parse(localStorage.getItem('todo'))
                     :[];
//----- map recorre el array y los devuelve con algún cambio,
//----- en este caso devuelve la instancia de Todo
        this.todo = this.todo.mapa(Todo.fromJSON);
    }

    nuevoTodo(todo){
        this.todo.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
//----- Si pongo !== comparo también si son del mismo tipo
        this.todo = this.todo.filter(todo => todo.id != id);
//----- Devuelve el array sin el id
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for(const todo of this.todo){
            console.log(todo.id, id);

            if(todo.id == id){
                todo.completado = !todo.completado;
            }
        }
        this.guardarLocalStorage();
    }

    elminarCompletados(){
        this.todo = this.todo.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    constructor(){
        this.cargarLocalStorage();
    }
    
}
