import {action, makeObservable, observable} from 'mobx'


class TodoStore  {
    constructor(){
        makeObservable(this);
    }
    @observable todos =[];
    @observable todo ={id: "",title:""};


   
    @action
    setTodoProp=(name, value)=>{
        this.todo={
            ...this.todo,
            //기존 데이터 (name으로 넘어오는 값 빼고 모든 데이터 id, startDate, ...)
            [name]:value,//name이 title
        }
        
    }
    @action
    addTodo=()=>{
        //push말고 concat으로
        //이유는 push는 기존배열에 추가하는것이고 
        //concat은 새로운 배열을 만들기 때문에 
        //react에서 push는 기존 배열이 바뀌는것이 아니기 때문에 인지를 못해 notify해주지 못한다
        //반면 concat은 배열 자체가 변하는 것이기 때문에 (객체 주소변화) react에서 인지하고 다시 리 렌더링 해준다 
       this.todos=this.todos.concat(this.todo); //기존 todo 값에서 id값만 변경해서 추가
        this.todo={};
    }
    @action
    removeTodo=()=>{
        //filter와 map은 기존값을 변경하는것이 아닌 새로운 배열을 
        //생성하기 때문에 해당 배열을 할당하는 코드를 써줘야한다 
        //this.todos= 
        this.todos=this.todos.filter((todo)=>todo.id !== this.todo.id);
        this.todo={};
    }

    @action
    modifyTodo=()=>{
       this.todos=this.todos.map((todo)=>todo.id===this.todo.id ? this.todo : todo);
       this.todo={};
    }

    @action
    selectTodo=(id)=>{
        this.todo = this.todos.find(todo=>todo.id === id)
    }


    //데이터 처리후 리턴하는 것은 computed
    // @computed
    // get getTOdo(){
    //     return this.todo? this.todo : {};
    // }
    // @computed
    // get getTodos(){
    //     return this.todos ? this.todos.slice() : [];
        //js 배열 타입과 mobx 타입의 배열이 다르기 때문에 slice를 해줘야 한다???
    //}
}

export default new TodoStore();