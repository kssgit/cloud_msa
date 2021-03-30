import {makeObservable, action, observable ,runInAction} from 'mobx';
import TodoApi from '../api/TodoApi'
class TodoStore {

    @observable todos = [];
    @observable todo = { id :"", title: ""} ;
    todoApi = new TodoApi();
    constructor() {
        makeObservable(this)
    }

    @action
    setTodoProp(name, value){
        this.todo ={
            ...this.todo,
            [name] : value,
        }
    }

    @action
    async addTodo(){
        await this.todoApi.todoCreate(this.todo.title);
        //this.todos = this.todos.concat(this.todo);
        const result =await this.todoApi.todoList();
        runInAction(() => {this.todos= result;});
    }

    @action
    async removeTodo(){
       await this.todoApi.todoDelete(this.todo.id);
        //this.todos = this.todos.filter((element) => element.id !== this.todo.id);
        const result =await this.todoApi.todoList();
        runInAction(() => {
            this.todos= result;
            this.todo={};
        });
        
    }

    @action
    async modifyTodo(){
       await this.todoApi.todoUpdate(this.todo.id,this.todo.title);
        // this.todos = this.todos.map((element) => 
        // element.id === this.todo.id ? this.todo : element);
        const result =await this.todoApi.todoList();
        runInAction(() => {
            this.todos= result;
            this.todo={};
        });
        
    }

    @action
    async selectTodo(id){
        const result = await this.todoApi.todoDetaile(id);
        runInAction(()=>{this.todo=result});
        //this.todo =this.todos.find((element) => element.id === id)
    }
    
    @action
    async selectAll(){
        const result =await this.todoApi.todoList();
        runInAction(() => {this.todos= result;});

    }

}

export default new TodoStore();