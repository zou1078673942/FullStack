import React from 'react';
import './App.css';


function App() {
    const chapterTree = {
        name: '总章节',
        children: [
            { name: '章节一', children: [{ name: '第一节', children: [{ name: '第一小节' }, { name: '第二小节' }] }, { name: '第二节' }] },
            { name: '章节二', children: [{ name: '第三节' }, { name: '第四节' }] }]
    };
    function makeli (tree) {
        return (tree?.map((item,i) => {
            return (
                <li>
                    {item.name}
                    {makeli(item.children)}
                </li>
            )
        }))
    }
    return (
        <div className="App">
            <ul>
                {chapterTree.name}
                {
                    makeli(chapterTree.children)
                }
            </ul>
        </div>
    );
}

export default App;
