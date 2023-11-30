import './App.css'
import SearchBar from './components/imageShow/SearchBar';
import searchImages from './api';
import ImageList from './components/imageShow/ImageList';
import { useState } from 'react';
import BookCreate from './components/books/BookCreate';
import Home from './components/UseState/Home';
import BookList from './components/books/BookList';

function App() {
const [books, setBooks] = useState([]) 

const createBook = (titile) =>{
  console.log('need', titile);
  const updatedBookes = [
    ...books, { titile}
  ]
  setBooks(updatedBookes)
}

//  const [data, setData] = useState([]);
//   const onsubmit = async (term)=>{
//     console.log(term);
//     const  result = await searchImages(term);
//     setData(result)
//   console.table(result); 
//   }
  return (
  <div className="app">
  <BookList books= {books}/>
    <BookCreate createBook = {createBook}/>
    {/* <SearchBar onSubmit= {onsubmit}/>
    <ImageList data = {data}/> */}
    {/* <ImageList/> */}
   {/* <Home/> */}
  </div>);
}

export default App;
