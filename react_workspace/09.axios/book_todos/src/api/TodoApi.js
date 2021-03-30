import axios from 'axios';

class TodoApi{
    URL = '/api/todos/'; //http://IP:8000/api/todos/  ...

    todoCreate(title){
        return axios.post(this.URL+'create/',{
            title:`${title}`
        }).then((response)=>response.data)
        //.catch((error)=>error); 예외 발생
        //.finally(()=>{})
    }

    todoUpdate(id,title){
        return axios.put(this.URL+`update/${id}`,{
            title:`${title}`
        }).then((response)=>response.data);
    }

    todoDelete(id){
        return axios.delete(this.URL + `delete/${id}`)
                .then((response)=>response.data);
    }

    todoDetaile(id){
        return axios.get(this.URL+`detail/${id}`)
                .then((response)=>response.data)
    }
    
    todoList(){
        return axios.get(this.URL)
                .then((response)=>response.data)

    }
}

export default TodoApi;