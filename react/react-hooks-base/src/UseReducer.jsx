import React,{
    useReducer,
    useCallback
} from 'react';

const initState = {
    count: 0
}
function reducer(state = initState, action) {
    switch (action.type) {   
        case 'ADD':
            return { count:state.count + 1 } 
        case 'MINUS':
            return { count:state.count - 1 }  
        default:
            return state
    }
}
function Counter() {
    const [store, dispatch] = useReducer(reducer,{count:0});
    const handleAdd = useCallback(() => {
        dispatch({type:'ADD'})
    },[])
    const handleMinus = useCallback(() => {
        dispatch({type:'MINUS'})
    },[])
    return (
        <div>
            count:{ store.count }
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMinus}>-</button>
        </div>
    )
}
export default Counter