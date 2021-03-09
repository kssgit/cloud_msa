import { action, makeObservable, observable } from "mobx";


class ProductStore  {
    @observable inStockOnly=true;
    @observable filterText ="";

    constructor(){
        makeObservable(this);
    }

    @action
    handleFilterTextChange=(e)=>{
        this.filterText=e.target.value;
    }

    @action
    handleInStockChange=(stocked)=>{
        this.inStockOnly=stocked;
    }

}

export default new ProductStore();