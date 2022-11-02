import { Todo, TodoList, Tarjeta, TarjetaList} from './classes';
import { crearTarjetaHtml, crearTodoHtml } from './js/componentes';
import './css/normalize.css';
import './css/skeleton.css';
import './css/mia.css';

export const tarjetaList = new TarjetaList();
export const todoList = new TodoList();

tarjetaList.tarjeta.foreach(crearTarjetaHtml);
todoList.todo.foreach(crearTodoHtml);
