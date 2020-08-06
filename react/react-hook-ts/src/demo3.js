import React, { useReducer, memo } from 'react'

const userInfoReducer = (state, action) => {
    switch (action.type) {
        case 'setusername':
            return {
                ...state,
                name: action.payload
            }
        case 'setlastname':
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state
    }
}

export const MyComponent = () => {
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name:'John',
        lastname:'Doe'
    })
    return (
        <>
            <h3>{reducer.name} {reducer.lastname}</h3>
            <EditUsername name={reducer.name} dispatch={dispatch}/>
            <input 
                type="text" 
                value={reducer.lastname}
                onChange={e => dispatch({
                    type: 'setlastname',
                    payload: e.target.value
                })}
            />
        </>
    )
}

const EditUsername = memo(props => {
    console.log('-----------')
    const {name, dispatch} = props
    return (
        <>
            <input 
                type="text" 
                value={name} 
                onChange={e => dispatch({
                    type: 'setusername',
                    payload: e.target.value
                })}
            />
        </>
    )
})