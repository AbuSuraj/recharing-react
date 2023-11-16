function App() {
  const handleClick = () =>{
    console.log('cliked');
  }
  return (<div>
    <button onClick={handleClick()}>Add animal</button>
  </div>);
}

export default App;
