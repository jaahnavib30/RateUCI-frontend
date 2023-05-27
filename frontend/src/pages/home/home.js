import CardGrid from '../../components/card-grid/card-grid.js';
import NavBar from '../../components/navbar/navbar.js';
import { useState, useEffect } from 'react';

function Home() {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('events.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
        .then(function(response){
        return response.json();
        })
        .then(function(jsonData) {
        setData(jsonData)
        });
      }
      useEffect(()=>{
        getData()
      },[]);
    
    return (
        <div>
            <NavBar />
            <h4> UPCOMING EVENTS </h4>
            <CardGrid events={data["events"]}/>
        </div>);
}

export default Home;