import React, { memo } from 'react'

export default memo(function Button({ handleClick, children }) {
    return (
        <>
            <button onClick={handleClick}>{children}</button>
            <span>{Math.random()}</span>
        </>
    )
})