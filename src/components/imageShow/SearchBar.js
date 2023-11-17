function SearchBar({onSubmit}) {
  const handleChange = (event) =>{
      onSubmit(event.target.value)   
  }
  return (
  <div>
   <input onChange={handleChange}/>
  </div>
  );
}

export default SearchBar;
