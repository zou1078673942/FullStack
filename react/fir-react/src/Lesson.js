import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Button from './Button'

export default function Lesson() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const handleClick1 = () => { 
    setCount1(count1 + 1) 
  }
  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])
  return (
    <div>
      <Button handleClick={handleClick1}>1</Button>
      <Button handleClick={handleClick2}>2</Button>
    </div>
  )
}