const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = 'BUY CAKE';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux app'
    }
}

// define a reducer
const initialState = {
    numberOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}
const store = createStore(reducer);
console.log('Initial state', store.getState());
store.subscribe(() => console.log('Upated state',store.getState()))