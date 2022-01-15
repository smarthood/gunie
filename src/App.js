import React, { useState } from 'react'
import firebase from './components/firebase'
import './App.css';
 import scroll from './images/scroll.png'
 import gunie from './images/gunie2.png'
 import gunie2 from './images/gunie1.png'
function App() {
  const presskey=(event)=> {
    if (event.keyCode === 13) {
        createWish();
          }
}
    const [name,setName] =useState('');
    const handleOnChange = (e) =>{
        setName(e.target.value);
    }
    const [email,setEmail] =useState('');
    const ehandleOnChange = (e) =>{
        setEmail(e.target.value);
    }
    const [wish,setWish] =useState('');
    const whandleOnChange = (e) =>{
        setWish(e.target.value);
    }
    const close = () =>{
      window.close();
    }
    const createWish = () =>{
        if(wish ===""){
            alert("Enter valid details")
        }
        else{
        const todoRef = firebase.database().ref('Wish');
        const todo ={
            name,
            email,
            wish,
        };
        todoRef.push(todo);
        setName('');
        setEmail('');
        setWish('');
    }
    };
    return (
        <div>
          <div className="container">
            <div className="main">
            <center><p>"After press Done,Your got your message successfully!"</p></center>
            <a href="whatsapp://send?text=Hi friends I found a magic lamp here 🧞‍♂️: https://bit.ly/3ftOWs0"><button>share</button></a>
            <img src={scroll} alt="scroll" className='scrollpng'/>
            <div className="form">
            <h2>Abracadabra</h2>
            <label>Name:<br />
          <input type="text" onChange={handleOnChange} value={name} onKeyDown={(e) => presskey(e)} /><br />
          </label>
          <label>Phone Number:<br />
          <input type="tel" onChange={ehandleOnChange} value={email} onKeyDown={(e) => presskey(e)} /><br />
          </label>
          <label>Tell your wish: <br />
          <textarea maxLength={100} onChange={whandleOnChange} value={wish} onKeyDown={(e) => presskey(e)} />
          </label>
            <center><button onClick={createWish} className='btn'>Done</button></center>
            </div>
            <div className="hidden">
              <img src={gunie2} alt="gunie" className='gunie2'/>
          <center><button onClick={close}>ok</button>
          </center>
            </div>
            </div>
            <img src={gunie} alt="gunie" id="gunie"/>
            </div>
        </div>
  );
}

export default App;
