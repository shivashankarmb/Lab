import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  
    const  [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [submitted,setSubmitted]=useState(false)

     const handleName=(e)=>{
      setName(e.target.value);
     }
     const handleEmail=(e)=>{
      setEmail(e.target.value);
     }
     const handlePassword=(e)=>{
      setPassword(e.target.value);

     }
     const handleSubmitted=(e)=>{
      e.preventDefault(); 
      if (name===''||email===''||password===''){
        alert("please enetrd the from");
      }
      else{
        setSubmitted(true);
      }
     }
     const SuccessMessage=()=>{
      if(submitted){
        return(
        <div className='sucess'>
          <h1> user {name} registerd succesfullu</h1>
        </div>
        );
      }
     };
     return (
      <div className='form'>
        <div>
          <h1>user registerd</h1>
        </div>
        <div className='message'>
          {SuccessMessage()};
        </div>
        <form>
          <fieldset>
            <label className="label">name</label><br></br>
            <input onChange={handleName} className="input"value={name} type="text"></input><br></br>
            <lable className="label">email</lable><br></br>
            <input onChange={handleEmail} className="input" value={email}type="email"></input><br></br>
            <lable className="input">password</lable><br></br>
            <input onChange={handlePassword} className="input"value={password}type="password"></input><br></br>
            <button onClick={handleSubmitted} className="btn" type="submit">submit</button>
          </fieldset>
        </form>
      </div>
     )
}

export default App;
