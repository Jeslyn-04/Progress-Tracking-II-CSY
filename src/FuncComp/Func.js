function App(){
    return <Greeting name="Peter"/>
  }
  function Greeting(props) {
    return(
    <h1>Hello,{props.name}!Nice to meet you</h1>
    );
  }
  
  export default App;