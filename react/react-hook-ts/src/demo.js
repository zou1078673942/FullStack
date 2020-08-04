import React, { useState,useEffect } from 'react';

export const MyComponent1 = props => {
    // 所有的 jsx -> dom
    const [myName, setMyName] = useState('John')
    return (
        <>
            <h4>1.{myName}</h4>
            <input type="text" value={myName}
                onChange={(e) => { setMyName(e.target.value) }}
            />
        </>
    )
}

export const MyComponent2 = props => {
    const [info, setInfo] = useState({
        name: 'John',
        lastname: 'Doe'
    });
    return (
        // 可以将节点挂载在 fragment 上，一次挂载到dom上
        // 避免直接进行过多dom操作
        // 不会产生多余的dom标签  
        <>
            <h4>2.{info.name}{info.lastname}</h4>
            <input type="text"
                value={info.name}
                onChange={(e) =>
                    setInfo({ ...info, name: e.target.value })
                }
            />
            <input type="text"
                value={info.lastname}
                onChange={(e) =>
                    setInfo({ ...info, lastname: e.target.value })
                }
            />
        </>
    )
}

export const MyComponent3 = () => {
    const [username, setUsername] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setUsername('zz')
        },1500)
    }, [])
    return (
        <>
            <h4>3.{username}</h4>
            <input 
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </>
    )
}

const MyChildComponent = () => {
    const [info,setInfo] = useState({
        name:'Hom',
        lastname:'Vzs'
    })
    useEffect(() => {
        console.log('is mounted')
        return () => {
            console.log('unmounted')
        }
    }, [info])
    return (
        <>
            <h4>4.{info.name}{info.lastname}</h4>
            <input 
                type="text"
                value={info.name}
                onChange={(e) => setInfo({...info, name: e.target.value})}
            />
            <input 
                type="text"
                value={info.lastname}
                onChange={(e) => setInfo({...info, lastname: e.target.value})}
            />
        </>
    )
}

export const MyComponent4 = () => {
    const [visible,setVisible] = useState(false)
    
    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => {setVisible(!visible)}}>
                Toggle Child component visibility
            </button>
        </>
    )
}