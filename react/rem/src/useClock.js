import { useState,useEffect } from 'react'

const useClock = () => {

    const [date,setDate] = useState(new Date())

    const showTime = (date) => {
        const day = date.getDay()
        const days = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
        return days[day] + date.toLocaleDateString() + ' ' + date.getSeconds()
    }

    function tick () {
        setDate(new Date())
    }

    useEffect(() => {
        const timerID = setInterval(() => {
            tick()
        },1000)
        return () => {
            clearInterval(timerID)
        }
    }, [])

    return showTime(date)
}

export default useClock