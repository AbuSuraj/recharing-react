import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'
function getRandomAnimal(){
  const animals = ['bird', 'cat', 'cow','dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length) ]
}
// console.log(getRandomAnimal());

function App() {
  let id = 0;
 const [animals, setAnimals] = useState([])
console.log(animals);
  const handleClick = () =>{
    setAnimals([...animals, getRandomAnimal()]); 
  }
  return (
  <div className="app">
    <button onClick={ handleClick}>Add animal</button>
    {animals.map(animal =>
     <AnimalShow key={id++} type={animal}></AnimalShow>
     // <span key={id++}>{animal} </span>

    )
    }
  </div>);
}

export default App;
