import { createStore } from "react-redux";

const counterReducer = ( state = {count:0}, action) =>{
    switch (action.type){
        case 'INCREMENT':
            return {count: state.count +1};
        
        case 'DECREMENT':
            return {count: state.count -1};
    }
}

const Store = createStore(counterReducer);

export default Store;