import React, { useState } from 'react';
import {useEffect} from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  const personName = ['SHAHJAHAN', 'SAMRAT', 'KARIM'];
  const personFather = ['SHAHEEN', 'HOSSAIN', 'ZAMIL'];
  const ProductItems= [
    {name: 'Chicken Brini', price: '$10.90' },
    {name: 'Chicken Kabab', price: '$7.90' },
    {name: 'Chicken Grial', price: '$8.90' }
  ]
  const Conutry = [
    {name: 'Bangladesh', people: '100000'},
    {name: 'Pakistan', people: '1500000'},
    {name: 'Katar', people: '120000'},
    {name: 'Arob Amirat', people: '250000'}
  ]
  const countryName = ['Bangladesh', 'Pakistan', 'Arob Amarit', 'Katar'];

  return (
    <div class="App">
      <header className="App-header">
        <Users></Users>
        <Count></Count>
      <ul>
        {
          countryName.map(select => <li>{select}</li>)
        }
      </ul>
      <ul>
        {
          Conutry.map(country => <li> {country.name}  ->  {country.people}</li>)
        }
      </ul>
        <Product Items = {ProductItems[0]}></Product>
        <Product Items = {ProductItems[1]}></Product>
        <Product Items = {ProductItems[2]}></Product>
        <Myinfo name= {personName[0]} fatherName= {personFather[0]}></Myinfo>
        <Myinfo name = {personName[1]} fatherName= {personFather[1]}></Myinfo>
        <Myinfo name = {personName[2]} fatherName= {personFather[2]}></Myinfo>
      </header>
    </div>
  );
}
function Myinfo(props){
  const style = { 
    color: 'white', 
    border: '2px solid white', 
    padding: '5px 30px', 
    marginTop: '20px',
    width: '70%'
  }
  return (
  <div style = {style}>
  <h1>Name : {props.name}</h1>
  <h3>Father Name : {props.fatherName}</h3>
  </div>
  )
}

function Count(){
  const [count, statecount] = useState(10);
  const countIncrement =  () => statecount(count + 1); 
  const countDecrement = () => statecount(count - 1);
  return(
    <div>
      <h4>Count : {count}</h4>
      <button onClick = {countIncrement}>Increment</button>
      <button onClick = {countDecrement}>Decrement</button>
    </div>
  )
}

function Product(props){
  const style = {
    color: 'blue',
    backgroundColor:'#d3d3d3',
    marginTop: '10px',
    padding: '5px 30px',
    border: '2px solid yellow',
    width: '70%',
    borderRadius: '20px'
  }
  return (
    <div style = {style}>
        <h4>{props.Items.name}</h4>
        <h6>{props.Items.price}</h6>
        <p>Bangladeshi Mogol Chickan Brini</p>
        <button>Buy Nor</button>
    </div>
  )

}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
        <h3>Dynamic Users :</h3>
        <ul>
          {
            users.map(man => <li>{man.name}</li>)
          }
        </ul>
    </div>
  )
}
export default App;
