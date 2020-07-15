import React,{ useEffect, useState, useMemo} from 'react';
import { useCallback } from 'react';

let set = new Set();
function DemoUseEffect(){
    const [inputValue, setVal] = useState(['1'])
    const [list, setList] = useState('')
    // const [val, setVal] = ['', () => {}]
    // const arr = [11,22]
    const val = useMemo(() => [1,2],[])
    set.add(val)
    // console.log(val === arr)
    const handleChange = useCallback((event) => {
        setVal(event.target.value);
    })
    useEffect(() => {
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+inputValue)
        .then(res => res.json())
        .then((res) => {
            setList(res.result.songs)
        })
        return () => {
            // 卸载
            // clearInterval()
            // document.removeEventListener()
        }
    },[inputValue])
    // 在 componentDidMount componentDidUpdate componentWillUnmount 三个时机运行
    // 传递一个 依赖   
    // react 会检查依赖中数据是否发生变化  如果没有变化就不会重新调用
    // 只执行一次类似 componentDidMount
    // 执行多次的话 componentDidUpdate
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange}/>
        </div>
    )
}
export default DemoUseEffect