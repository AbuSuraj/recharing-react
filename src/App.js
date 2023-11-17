import { useState } from 'react';
import './App.css'
import ImageList from './components/imageShow/ImageList';
import SearchBar from './components/imageShow/SearchBar';

function App() {
const [ searcItem, setSearchItem] = useState('')
  const onsubmit = (term)=>{
    setSearchItem(term);
    console.log(searcItem);
   }
  return (
  <div className="app">
    <SearchBar onSubmit= {onsubmit}/>
    {/* <ImageList/> */}
   {/* <Home/> */}
  </div>);
}

export default App;
