import { useState } from "react";

function SearchBar({onSubmit}) {
  const [ searchItem, setSearchItem] = useState('')
  
  const handleForm = (e) =>{
    onSubmit(searchItem)
    e.preventDefault();
  }
  
  const handleChange = (event) =>{
    event.preventDefault();
    // onSubmit(event.target[0].value)   
    // console.log(event.target[0].value);
    setSearchItem(event.target.value);
    console.log(searchItem);
  }

  return (
  <div>
    <form onSubmit={handleForm}>
   <input onChange={handleChange}/>
   {/* <input onChange={handleChange}/> */}
    </form>
  </div>
  );
}

export default SearchBar;
