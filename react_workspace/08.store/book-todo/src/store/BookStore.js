import {action, observable, makeObservable} from 'mobx';
import Books from '../Books';

class BookStore  {
    constructor() {
        makeObservable(this) //mobx6버전 이상부터는 반드시 선언해줘야 한다
    }
    @observable books =Books; //관찰 대상자 
    @observable book = Books[0];

    @action  //관찰대상자의 값 변경시 
    bookSelect=(book)=>{
        this.book=book;
    }
    //@computed - state 값을 계산해서 리턴
}

export default new BookStore(); //Singlton Object return