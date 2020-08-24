import React, { useState, useEffect } from 'react'

function Mix () {
    const [visiable,setVisiable] = useState(false)
    const handleButton = (e) => {
        // console.log(1)
        setVisiable(!visiable)
        // react 会把 jsx 中所写的事件放到 document 上面
        e.stopPropagation()
    }
    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            // console.log(2)
            setVisiable(false)
            // e.stopPropagation()
        })
    }, [])
    return (
        <>
            <button onClick={handleButton}>toggle</button>
            <div style={{display: visiable?'block':'none'}}>内容</div>
        </>
    )
}
export default Mix