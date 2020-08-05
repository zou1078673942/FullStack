import React, { useEffect, useRef, useState } from 'react';
import pullToRefresh from './pullDown'
import './App.css';
import styled, { css } from 'styled-components'

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`
// css in js

const { init } = pullToRefresh()
function App() {
  const [isPrimary, setIsPrimary] = useState(false)
  const contentRef = useRef();
  const ptrRef = useRef();
  const bodyRef = useRef()
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      bodyEl: bodyRef.current
    })
  }, [])
  return (
    <div className="body-wrap" ref={bodyRef}>
      <div ref={ptrRef} className="ptr-wrap">
        <div className="loading" />
      </div>
      <header ref={contentRef} className="content-wrap">
        <Button primary={isPrimary} onClick={() => {
          setIsPrimary(!isPrimary)
        }}>按钮</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.58777
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;