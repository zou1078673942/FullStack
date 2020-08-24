import React, { useRef, useEffect } from 'react'
export default function Order () {
    const handleParent = () => {
        console.log(1)
    }
    const handleChild = (e) => {
        console.log(2)
        // e.stopPropagation()
    }
    const parentRef = useRef()
    useEffect(() => {
        console.log(parentRef.current)
        parentRef.current.addEventListener('click',() => {
            console.log('parent')   
        })
        const elements = (
            <ul>
                <li></li>
                <li></li>
            </ul>
        )
        console.log(elements)
    },[])
    return (
        <>
            <div className="parent" onClick={handleParent} ref={parentRef}>
                parent
                <div className="child" onClick={handleChild}>
                    child
                </div>
            </div>
        </>
    )
}