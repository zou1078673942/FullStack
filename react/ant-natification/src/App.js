import React from 'react';
import notification from './Notification'
import './App.css';


function App() {
    return (
        <div className="App">
            <button onClick={() => {
                notification.open({
                    title: 'this is a title'
                })
            }}>open</button>
            <button onClick={()=>{
                notification.close()
            }}>close</button>
        </div>
    );
}

export default App;
