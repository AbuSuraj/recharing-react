import './AnimalShow.css'
 
// import bird from '../svg/bird.svg'; 
import bird from '../../svg/bird.svg'; 
import cat from '../../svg/cat.svg';
import cow from '../../svg/cow.svg';
import dog from '../../svg/dog.svg';
import gator from '../../svg/gator.svg';
import horse from '../../svg/horse.svg';
import heart from '../../svg/heart.svg';
import { useState } from 'react';

const animalImage = {
  bird, cat, dog, cow, gator,horse
}
function AnimalShow({type}) {
  const [click, setClick] = useState(0)
  const handleClick = () =>{
    setClick(click+1)
  }
  return (
  <div className='animal-show' onClick={handleClick}>
    <h1>{type}</h1>
    <img className='animal' src={animalImage[type]} alt={type}/>
    <img className='heart' style={{width:10+10*click}} src={heart} alt='heart'/>
  </div>);
}

export default AnimalShow;
