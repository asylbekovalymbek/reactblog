import './App.css';
import Hello from './components/Hello/Hello';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() { 
  return (
    <div className="App">
      <Header/>
      <Hello name = "Arsen" age = "25" />
      <Hello name = "Kenan" age = "24" />
      <Hello name =" Kairat" age = "28" /> 
      <Footer/>
    </div>
  );
}

export default App;
