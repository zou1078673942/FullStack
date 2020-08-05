import React, { useState, useEffect, memo } from 'react'

export const MyComponent1 = () => {
    const [info, setInfo] = useState({
        name: 'John',
        lastname: 'Deo'
    })
    setTimeout(() => {
        setInfo({...info,name:'John'})
    },2000)
    return (
        <>
            <DisplayUsername name={info.name} lastname={info.lastname}/>
            <input
                type="text"
                value={info.name}
                onChange={e => setInfo({ ...info, name: e.target.value })}
            />
            <input
                type="text"
                value={info.lastname}
                onChange={e => setInfo({ ...info, lastname: e.target.value })}
            />
        </>
    )
}

const DisplayUsername = memo(props => {
    console.log('name改变')
    return <h4>{props.name}</h4>
})

export const MyComponent = () => {
    const [filter, setFilter] = useState('')
    const [userCollection, setUserCollection] = useState([])
    useEffect(() => {
        fetch(
            `http://jsonplaceholder.typicode.com/users?name_like=${filter}`
        ).then(res => res.json())
            .then(json => setUserCollection(json))
    }, [filter])
    return (
        <>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {
                    userCollection.map((user, index) =>
                        <li key={index}>{user.name}</li>
                    )
                }
            </ul>
        </>
    )
}