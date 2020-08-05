import React, { useState, useEffect, useMemo } from 'react'
import './styles.css'
import { FaceComponent } from './Face'

function Smile() {
    const [satisfactionLevel, setSatisfactionLevel] = useState(300)
    return (
        <div className="App">
            <input 
            type="range" 
            min='0' 
            max='500' 
            value={satisfactionLevel} 
            onChange={(e) => setSatisfactionLevel(+e.target.value)}/>
            <p>{satisfactionLevel}</p>
            <FaceComponent level={satisfactionLevel}/>
        </div>
    )
}

export default Smile