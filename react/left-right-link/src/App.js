import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const data = {
  tab1: [
    { c: "1-1" },
    { c: "1-2" },
    { c: "1-3" },
    { c: "1-4" },
    { c: "1-5" },
    { c: "1-6" }
  ],
  tab2: [
    { c: "2-1" },
    { c: "2-2" },
    { c: "2-3" },
    { c: "2-4" },
    { c: "2-5" },
    { c: "2-6" }
  ],
  tab3: [
    { c: "3-1" },
    { c: "3-2" },
    { c: "3-3" },
    { c: "3-4" },
    { c: "3-5" },
    { c: "3-6" },
    { c: "3-7" }
  ],
  tab4: [
    { c: "4-1" },
    { c: "4-2" },
    { c: "4-3" },
    { c: "4-4" },
    { c: "4-5" },
    { c: "4-6" },
    { c: "4-7" }
  ]
};
let base = 0, ranges = [];
function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleTabClick = (e) => {
    const ltab = e.target.getAttribute('data-ltab')
    const activeIndex = e.target.getAttribute('data-index')
    setTimeout(() => {
      setActiveIndex(parseInt(activeIndex))
    }, 200);
    const rtab = document.querySelector(`[data-rtab="${ltab}"]`)
    rtab.scrollIntoView({
      behavior: 'smooth'
    })
  }
  const navs = Object.keys(data)
  console.log(navs)
  const ref = useRef()
  useEffect(() => {
    const right = ref.current;
    const tabs = right.querySelectorAll('[data-rtab]')
    console.log(right,tabs)
    for (let tab of tabs){
      let h = tab.getBoundingClientRect().height;
      let newH = base + h
      ranges.push([base, newH])
      base = newH
    }
    // console.log(ranges)
    const onScroll = () => {
      console.log('----------')
      const scrollTop = right.scrollTop
      const index = ranges.findIndex(ranges => scrollTop >= ranges[0] && scrollTop < ranges[1])
      setActiveIndex(index)
    }
    right.addEventListener('scroll',onScroll)
  }, [])
  return (
    <div className="App">
      <nav className="left">
        {
          navs.map((nav, index) => {
            return (
              <div
                key={index}
                data-index={index}
                data-ltab={nav}
                onClick={handleTabClick}
                className={activeIndex === index ? 'active' : ''}
              >{nav}</div>
            )
          })
        }
      </nav>
      <div className="right" ref={ref}>
        {
          navs.map((nav, index) => {
            return (
              <dl key={index} data-rtab={nav}>
                <dt>{nav}</dt>
                {
                  data[nav].map((con, i) => {
                    return (
                      <dd key={i}>{con.c}</dd>
                    )
                  })
                }
              </dl>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
