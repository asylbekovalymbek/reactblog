import './App.css';
import Hello from './components/Hello/Hello';


function App() { 
  return (
    <div className="App">
      <h1>Приветствие</h1>
      <Hello name= "Arsen" />
      <Hello name = "Kenan" />
      <Hello name ="Kairat" />      
    </div>
  );
}

export default App;
