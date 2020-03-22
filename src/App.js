import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  var personName = ['SHAHJAHAN', 'SAMRAT', 'KARIM'];
  var personFather = ['SHAHEEN', 'HOSSAIN', 'ZAMIL'];
  return (
    <div class="App">
      <header className="App-header">
        <Myinfo name= {personName[0]} fatherName= {personFather[0]}></Myinfo>
        <Myinfo name = {personName[1]} fatherName= {personFather[1]}></Myinfo>
        <Myinfo name = {personName[2]} fatherName= {personFather[2]}></Myinfo>
      </header>
    </div>
  );
}
function Myinfo(props){
  var style = { 
    color: 'white', 
    border: '2px solid white', 
    padding: '5px 30px', 
    marginTop: '20px',
    width: '600px'
  }
  return (
  <div style = {style}>
  <h1>Name : {props.name}</h1>
  <h3>Father Name : {props.fatherName}</h3>
  </div>
  )
}
export default App;
