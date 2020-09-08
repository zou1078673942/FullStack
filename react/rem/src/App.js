import React, { useState, useEffect, useRef } from 'react'
import useClock from './useClock'

const Clock = () => {

    // const [count,setCount] = useState(0)
    const date = useClock()


    // const countRef = useRef()
    // countRef.current = count
    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(countRef.current + 1) 
    //     },1000)
    // },[])


    return (
        <div>
            {useClock()}
            {/* <br/>
            {count} */}
        </div>
    )
}
export default Clock