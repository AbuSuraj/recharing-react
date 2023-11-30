import React from 'react';

import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './Home.css'
function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow','dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length) ]
  }
const Home = () => {
    let id = 0;
    const [animals, setAnimals] = useState([])
   console.log(animals);
     const handleClick = () =>{
       setAnimals([...animals, getRandomAnimal()]); 
     }
     return (
     <div className="animal-home">
       <button className='p' onClick={ handleClick}>Add animal</button>
       {animals.map(animal =>
        <AnimalShow key={id++} type={animal}></AnimalShow>
       )
       }
     </div>
    );
};

export default Home;