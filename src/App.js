import './App.css'
import SearchBar from './components/imageShow/SearchBar';
import searchImages from './api';
import ImageList from './components/imageShow/ImageList';
import { useState } from 'react';

function App() {
 const [data, setData] = useState([]);
  const onsubmit = async (term)=>{
    console.log(term);
    const  result = await searchImages(term);
    setData(result)
  console.table(result); 
  }
  return (
  <div className="app">
    <SearchBar onSubmit= {onsubmit}/>
    <ImageList data = {data}/>
    {/* <ImageList/> */}
   {/* <Home/> */}
  </div>);
}

export default App;
