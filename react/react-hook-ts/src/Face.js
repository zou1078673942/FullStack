import React, { useMemo, memo } from 'react'

const setSatisfactionClass = level => {
    if (level < 100) {
        return "very-dissatisfied"
    }
    if (level < 200) {
        return "somewhat-dissatisfied"
    }
    if (level < 300) {
        return "neither"
    }
    if (level < 400) {
        return "somewhat-satisfied"
    }
    return "very-satisfied"
}

const isSameRange = (prevValue, nextValue) => {
    console.log(prevValue,nextValue)
    const newprevValue = setSatisfactionClass(prevValue.level)
    const newnextValue = setSatisfactionClass(nextValue.level)
    return newprevValue === newnextValue
}

export const FaceComponent = memo(props => {
    const { level } = props
    return (
        <>
            <div className={setSatisfactionClass(level)}></div>
            {/* <img src={require('./one.png')} alt="" /> */}
        </>
    )
}, isSameRange)