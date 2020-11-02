
import React from 'react';
import Counter from './Counter'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const initialState = {
    count: 0
}

// first time redux calls the function itll set state as undefined unless initial state is defined(which it is above)

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count + 1
        }
        case 'DECREMENT':
        return{
            count: state.count - 1
        }
        default: return state;
    }
}

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <Counter/>
    </Provider>
)

export default App;

//provider is like a secret passageway every component and using 'connect' opens the door to the passageway
//provider needs a store which it will take as a prop
//redux needs a reducer to let it know what state to return